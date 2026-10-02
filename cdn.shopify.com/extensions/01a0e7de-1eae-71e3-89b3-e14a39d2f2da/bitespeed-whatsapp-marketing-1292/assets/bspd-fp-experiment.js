/**
 * A/B/C/D/E fingerprint uniqueness experiment.
 *
 * Lives in assets/ rather than snippets/ because Shopify caps the combined size
 * of an extension's Liquid files at 100KB, and none of this needs Liquid.
 *
 * Independent IIFEs, in dependency order:
 *   1. collector B - FingerprintJS v4 component set -> window.__bspdFpB
 *   2. collector C - ThumbmarkJS component set      -> window.__bspdFpC
 *   3. collector D - broprint.js                    -> window.__bspdFpD
 *   4. collector E - ClientJS                       -> window.__bspdFpE
 *   5. harness     - wraps window.bspdFingerprint (logic A, from the user-id
 *                    snippet) and adds B / C / D / E / combined / Y to its result.
 *
 * Loaded with `defer` ahead of bitespeed-popups.js, so it runs after the inline
 * user-id snippet has defined logic A and before anything reads the fingerprint.
 */

/* ============================== collector B ============================== */
(() => {
    /* Experiment B: hand-rolled re-implementation of the FingerprintJS v4 component
       set. Self-contained - defines only window.__bspdFpB, never throws, never
       rejects, writes nothing persistent, injects nothing that can shift layout. */
    const BUDGET = 1500;
    const W = window;
    const N = navigator;
    const S = screen;
    const D = document;

    const safe = (f) => {
        try {
            return f();
        } catch {
            return undefined;
        }
    };
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const race = (p, ms) => Promise.race([Promise.resolve(p).catch(() => undefined), sleep(Math.max(0, ms))]);
    const memo = (f) => {
        let v,
            got = 0;
        return () => (got ? v : ((got = 1), (v = safe(f)), v));
    };
    const cnt = (a) => a.reduce((n, v) => n + (v ? 1 : 0), 0);
    const mm = (q) => safe(() => matchMedia(q).matches) === true;
    const int = (v, d) => {
        const n = parseInt(v);
        return isNaN(n) ? d : n;
    };
    const flt = (v, d) => {
        const n = parseFloat(v);
        return isNaN(n) ? d : n;
    };
    const sha256 = async (s) => {
        const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
        return [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, '0')).join('');
    };
    // Arrays are stored as {n: length, h: sha256(sorted join)} - the raw WebGL
    // arrays are ~15KB and would blow the storage budget.
    const digest = async (a) =>
        Array.isArray(a) ? {
            n: a.length,
            h: await sha256([...a].sort().join(','))
        } : undefined;

    // Engine sniffing by feature-count, as the reference does. Only the checks that
    // actually change a component's value are reproduced.
    const chromium = memo(
        () =>
        cnt([
            'webkitPersistentStorage' in N,
            'webkitTemporaryStorage' in N,
            (N.vendor || '').indexOf('Google') === 0,
            'webkitResolveLocalFileSystemURL' in W,
            'BatteryManager' in W,
            'webkitMediaStream' in W,
            'webkitSpeechGrammar' in W,
        ]) >= 5,
    );
    const webkit = memo(
        () =>
        cnt([
            'ApplePayError' in W,
            'CSSPrimitiveValue' in W,
            'Counter' in W,
            (N.vendor || '').indexOf('Apple') === 0,
            'RGBColor' in W,
            'WebKitMediaKeys' in W,
        ]) >= 4,
    );
    const gecko = memo(
        () =>
        cnt([
            'buildID' in N,
            'MozAppearance' in (D.documentElement ? .style ? ? {}),
            'onmozfullscreenchange' in W,
            'mozInnerScreenX' in W,
            'CSSMozDocumentRule' in W,
            'CanvasCaptureMediaStream' in W,
        ]) >= 4,
    );
    const desktopWebkit = memo(
        () =>
        cnt([
            'safari' in W, !('ongestureend' in W), !('TouchEvent' in W), !('orientation' in W),
            W.HTMLElement && !('autocapitalize' in W.HTMLElement.prototype),
            W.Document && 'pointerLockElement' in W.Document.prototype,
        ]) >= 4,
    );
    const android = memo(() =>
        chromium() ?
        cnt([!('SharedWorker' in W), N.connection && 'ontypechange' in N.connection, !('sinkId' in new Audio())]) >= 2 :
        !!gecko() && cnt(['onorientationchange' in W, 'orientation' in W, /android/i.test(N.appVersion)]) >= 2,
    );
    // Chromium builds that report font metrics in device pixels.
    const dprScaled = memo(
        () =>
        cnt([
            W.Promise && 'try' in W.Promise,
            'caretPositionFromPoint' in D,
            W.AudioContext && 'onerror' in W.AudioContext.prototype,
            CSS.supports('ruby-align', 'space-around'),
        ]) >= 3,
    );
    // Chromium builds that freeze navigator.languages down to a single entry.
    const reducedLangs = memo(
        () =>
        chromium() &&
        cnt([!('MediaSettingsRange' in W),
            'RTCEncodedAudioFrame' in W,
            '' + W.Intl === '[object Intl]',
            '' + W.Reflect === '[object Reflect]',
        ]) >= 3,
    );
    const crossOrigin = () => {
        let w = W;
        for (;;) {
            const p = w.parent;
            if (!p || p === w) return false;
            try {
                if (p.location.origin !== w.location.origin) return true;
            } catch (e) {
                if (e instanceof Error && e.name === 'SecurityError') return true;
                throw e;
            }
            w = p;
        }
    };

    /* ---------- offscreen DOM ---------- */

    const hide = (el) => {
        el.style.setProperty('visibility', 'hidden', 'important');
        el.style.setProperty('display', 'block', 'important');
    };
    const park = (el) => {
        hide(el);
        el.style.setProperty('position', 'absolute', 'important');
        el.style.setProperty('top', '0', 'important');
        el.style.setProperty('left', '-9999px', 'important');
    };
    const waitBody = async () => {
        for (let i = 0; i < 20 && !D.body; i++) await sleep(25);
        return !!D.body;
    };

    // Self-bounded: the caller's race may give up first, so every path still has to
    // reach the `finally` that unmounts the iframe.
    const withIframe = async (fn, html, ms = 600) => {
        if (!(await waitBody())) return undefined;
        const f = D.createElement('iframe');
        const until = Date.now() + ms;
        try {
            await Promise.race([
                new Promise((res, rej) => {
                    let done = 0;
                    const ok = () => ((done = 1), res());
                    f.onload = ok;
                    f.onerror = (e) => ((done = 1), rej(e));
                    park(f);
                    f.style.setProperty('border', '0', 'important');
                    if (html && 'srcdoc' in f) f.srcdoc = html;
                    else f.src = 'about:blank';
                    D.body.appendChild(f);
                    const poll = () => {
                        if (done) return;
                        if (f.contentWindow ? .document ? .readyState === 'complete') ok();
                        else if (Date.now() < until) setTimeout(poll, 10);
                    };
                    poll();
                }),
                sleep(Math.max(0, until - Date.now())),
            ]);
            while (!f.contentWindow ? .document ? .body && Date.now() < until) await sleep(20);
            if (!f.contentWindow ? .document ? .body) return undefined;
            return await fn(f, f.contentWindow);
        } finally {
            f.parentNode ? .removeChild(f);
        }
    };

    /* ---------- component: userAgentData ---------- */

    const pUserAgentData = async () => {
        const u = N.userAgentData;
        if (!u) return undefined;
        const b = (u.brands || []).filter(({
            brand
        }) => !/not/i.test(brand)).map(({
            brand
        }) => brand);
        const v = {
            brands: b.length > 1 ? b.filter((x) => x !== 'Chromium') : b,
            mobile: u.mobile,
            platform: u.platform,
        };
        if (u.getHighEntropyValues)
            try {
                const h = await u.getHighEntropyValues(['architecture', 'bitness', 'model', 'platformVersion']);
                v.architecture = h.architecture;
                v.bitness = h.bitness;
                v.model = h.model;
                v.platformVersion = h.platformVersion;
            } catch {
                v.highEntropyStatus = 'not_allowed';
            }
        return v;
    };

    /* ---------- component: fonts ---------- */

    const BASE_FONTS = ['monospace', 'sans-serif', 'serif'];
    const TEST_FONTS =
        'sans-serif-thin,ARNO PRO,Agency FB,Arabic Typesetting,Arial Unicode MS,AvantGarde Bk BT,BankGothic Md BT,Batang,Bitstream Vera Sans Mono,Calibri,Century,Century Gothic,Clarendon,EUROSTILE,Franklin Gothic,Futura Bk BT,Futura Md BT,GOTHAM,Gill Sans,HELV,Haettenschweiler,Helvetica Neue,Humanst521 BT,Leelawadee,Letter Gothic,Levenim MT,Lucida Bright,Lucida Sans,Menlo,MS Mincho,MS Outlook,MS Reference Specialty,MS UI Gothic,MT Extra,MYRIAD PRO,Marlett,Meiryo UI,Microsoft Uighur,Minion Pro,Monotype Corsiva,PMingLiU,Pristina,SCRIPTINA,Segoe UI Light,Serifa,SimHei,Small Fonts,Staccato222 BT,TRAJAN PRO,Univers CE 55 Medium,Vrinda,ZWAdobeF'.split(
            ',',
        );

    const pFonts = () =>
        withIframe((f, win) => {
            const doc = win.document;
            const body = doc.body;
            body.style.fontSize = '48px';
            const holder = doc.createElement('div');
            park(holder);
            const span = (family) => {
                const e = doc.createElement('span');
                e.style.position = 'absolute';
                e.style.top = '0';
                e.style.left = '0';
                e.style.fontFamily = family;
                e.textContent = 'mmMwWLliI0O&1';
                holder.appendChild(e);
                return e;
            };
            const bases = BASE_FONTS.map(span);
            const probes = {};
            for (const name of TEST_FONTS) probes[name] = BASE_FONTS.map((b) => span(`'${name}',${b}`));
            body.appendChild(holder);
            const w = {};
            const h = {};
            BASE_FONTS.forEach((b, i) => {
                w[b] = bases[i].offsetWidth;
                h[b] = bases[i].offsetHeight;
            });
            return TEST_FONTS.filter((name) =>
                BASE_FONTS.some((b, i) => probes[name][i].offsetWidth !== w[b] || probes[name][i].offsetHeight !== h[b]),
            );
        });

    /* ---------- component: domBlockers ---------- */

    // Representative subset of the reference's 45 filter lists.
    const FILTERS = {
        adBlockWarningRemoval: [
            '#adblock-honeypot',
            '.adblocker-root',
            '.wp_adblock_detect',
            '.header-blocked-ad',
            '#ad_blocker',
        ],
        adGuardAnnoyances: [
            '.hs-sosyal',
            '#cookieconsentdiv',
            'div[class^="app_gdpr"]',
            '.as-oil',
            '[data-cypress="soft-push-notification-modal"]',
        ],
        adGuardBase: ['.BetterJsPopOverlay', '#ad_300X250', '#bannerfloat22', '#campaign-banner', '#Ad-Content'],
        adGuardMobile: ['amp-auto-ads', '.amp_ad', 'amp-embed[type="24smi"]', '#mgid_iframe1', '#ad_inview_area'],
        adGuardSocial: [
            'a[href^="//www.stumbleupon.com/submit?url="]',
            'a[href^="//telegram.me/share/url?"]',
            '.etsy-tweet',
            '#inlineShare',
            '.popup-social',
        ],
        adGuardTrackingProtection: [
            '#qoo-counter',
            'a[href^="http://click.hotlog.ru/"]',
            'a[href^="http://hitcounter.ru/top/stat.php"]',
            'a[href^="http://top.mail.ru/jump"]',
            '#top100counter',
        ],
        easyList: [
            '.yb-floorad',
            '.widget_po_ads_widget',
            '.trafficjunky-ad',
            '.textad_headline',
            '.sponsored-text-links',
        ],
        easyListCookie: [
            '.ezmob-footer',
            '.cc-CookieWarning',
            '[data-cookie-number]',
            '.aw-cookie-banner',
            '.sygnal24-gdpr-modal-wrap',
        ],
        easyListGermany: [
            '#SSpotIMPopSlider',
            '.sponsorlinkgruen',
            '#werbungsky',
            '#reklame-rechts-mitte',
            'a[href^="https://bd742.com/"]',
        ],
        fanboyAnnoyances: ['#ac-lre-player', '.navigate-to-top', '#subscribe_popup', '.newsletter_holder', '#back-top'],
        fanboySocial: ['#FollowUs', '#meteored_share', '#social_follow', '.article-sharer', '.community__social-desc'],
        iDontCareAboutCookies: [
            '.alert-info[data-block-track*="CookieNotice"]',
            '.ModuleTemplateCookieIndicator',
            '.o--cookies--container',
            '#cookies-policy-sticky',
            '#stickyCookieBar',
        ],
    };

    // Minimal CSS-selector -> detached element builder (reference's `_`).
    const fromSelector = (sel) => {
        const head = /^\s*([a-z-]*)(.*)$/i.exec(sel);
        const attrs = {};
        const add = (k, v) => (attrs[k] = attrs[k] || []).push(v);
        const re = /([.:#][\w-]+|\[.+?\])/gi;
        let m;
        while ((m = re.exec(head[2]))) {
            const p = m[0];
            if (p[0] === '.') add('class', p.slice(1));
            else if (p[0] === '#') add('id', p.slice(1));
            else if (p[0] === '[') {
                const a = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(p);
                if (!a) throw new Error(sel);
                add(a[1], a[4] ? ? a[5] ? ? '');
            } else throw new Error(sel);
        }
        const el = D.createElement(head[1] || 'div');
        for (const k of Object.keys(attrs)) el.setAttribute(k, attrs[k].join(' '));
        return el;
    };

    const pDomBlockers = async () => {
        if (!webkit() && !android()) return undefined;
        const names = Object.keys(FILTERS);
        const sels = [].concat(...names.map((n) => FILTERS[n]));
        const els = [];
        const blocked = {};
        const holder = D.createElement('div');
        park(holder);
        try {
            for (const sel of sels) {
                const el = fromSelector(sel);
                if (el.tagName === 'DIALOG') el.show();
                const wrap = D.createElement('div');
                hide(wrap);
                wrap.appendChild(el);
                holder.appendChild(wrap);
                els.push(el);
            }
            if (!(await waitBody())) return undefined;
            D.body.appendChild(holder);
            sels.forEach((s, i) => {
                if (!els[i].offsetParent) blocked[s] = true;
            });
        } finally {
            holder.parentNode ? .removeChild(holder);
        }
        return names.filter((n) => cnt(FILTERS[n].map((s) => blocked[s])) > 0.6 * FILTERS[n].length).sort();
    };

    /* ---------- component: fontPreferences ---------- */

    const FP_TEXT = 'mmMwWLliI0fiflO&1';
    const FP_PRESETS = {
        default: [],
        apple: [{
            font: '-apple-system-body'
        }],
        serif: [{
            fontFamily: 'serif'
        }],
        sans: [{
            fontFamily: 'sans-serif'
        }],
        mono: [{
            fontFamily: 'monospace'
        }],
        min: [{
            fontSize: '1px'
        }],
        system: [{
            fontFamily: 'system-ui'
        }],
    };

    const pFontPreferences = () => {
        const PAGE = 4000;
        return withIframe((f, win) => {
            const doc = win.document;
            const body = doc.body;
            body.style.width = `${PAGE}px`;
            body.style.webkitTextSizeAdjust = body.style.textSizeAdjust = 'none';
            if (chromium()) body.style.zoom = '' + 1 / win.devicePixelRatio;
            else if (webkit()) body.style.zoom = 'reset';
            const filler = doc.createElement('div');
            filler.textContent = [...Array((PAGE / 20) << 0)].map(() => 'word').join(' ');
            body.appendChild(filler);

            const els = {};
            for (const k of Object.keys(FP_PRESETS)) {
                const [style = {}] = FP_PRESETS[k];
                const s = doc.createElement('span');
                s.textContent = FP_TEXT;
                s.style.whiteSpace = 'nowrap';
                for (const p of Object.keys(style))
                    if (style[p] !== undefined) s.style[p] = style[p];
                els[k] = s;
                body.append(doc.createElement('br'), s);
            }
            const scale = chromium() && dprScaled();
            const e = Math.pow(10, android() ? 0 : 3);
            const out = {};
            for (const k of Object.keys(FP_PRESETS)) {
                const w = els[k].getBoundingClientRect().width;
                out[k] = scale ? Math.floor(w * win.devicePixelRatio * e) / e : w;
            }
            return out;
        }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
    };

    /* ---------- component: audio ---------- */

    const pAudio = () =>
        new Promise((resolve) => {
            try {
                const C = W.OfflineAudioContext || W.webkitOfflineAudioContext;
                if (!C) return resolve(-2);
                const ctx = new C(1, 5000, 44100);
                const osc = ctx.createOscillator();
                osc.type = 'triangle';
                osc.frequency.value = 10000;
                const comp = ctx.createDynamicsCompressor();
                comp.threshold.value = -50;
                comp.knee.value = 40;
                comp.ratio.value = 12;
                comp.attack.value = 0;
                comp.release.value = 0.25;
                osc.connect(comp);
                comp.connect(ctx.destination);
                osc.start(0);
                const sum = (buf) => {
                    const d = buf.getChannelData(0).subarray(4500);
                    let s = 0;
                    for (let i = 0; i < d.length; i++) s += Math.abs(d[i]);
                    resolve(s);
                };
                ctx.oncomplete = (e) => safe(() => sum(e.renderedBuffer));
                const r = ctx.startRendering();
                if (r && typeof r.then === 'function') r.then(sum, () => resolve(-3));
            } catch {
                resolve(undefined);
            }
        });

    /* ---------- component: screenFrame ---------- */

    // Single shot: no fullscreen-exit retry / background re-poll like the reference.
    const pScreenFrame = () => {
        const raw = [
            flt(S.availTop, null),
            flt(S.width) - flt(S.availWidth) - flt(S.availLeft, 0),
            flt(S.height) - flt(S.availHeight) - flt(S.availTop, 0),
            flt(S.availLeft, null),
        ];
        return raw.map((v) => (v === null || v === undefined || isNaN(v) ? null : Math.round(v / 10) * 10));
    };

    /* ---------- component: canvas ---------- */

    const pCanvas = async () => {
        const c = D.createElement('canvas');
        c.width = 1;
        c.height = 1;
        const x = c.getContext('2d');
        if (!x || !c.toDataURL) return {
            winding: false,
            geometry: 'unsupported',
            text: 'unsupported'
        };
        x.rect(0, 0, 10, 10);
        x.rect(2, 2, 6, 6);
        const winding = !x.isPointInPath(5, 5, 'evenodd');

        c.width = 240;
        c.height = 60;
        x.textBaseline = 'alphabetic';
        x.fillStyle = '#f60';
        x.fillRect(100, 1, 62, 20);
        x.fillStyle = '#069';
        x.font = '11pt "Times New Roman"';
        const t = `Cwm fjordbank gly ${String.fromCharCode(55357, 56835)}`;
        x.fillText(t, 2, 15);
        x.fillStyle = 'rgba(102, 204, 0, 0.2)';
        x.font = '18pt Arial';
        x.fillText(t, 4, 45);
        const text = c.toDataURL();
        if (text !== c.toDataURL()) return {
            winding,
            geometry: 'unstable',
            text: 'unstable'
        };

        c.width = 122;
        c.height = 110;
        x.globalCompositeOperation = 'multiply';
        for (const [col, cx, cy] of [
                ['#f2f', 40, 40],
                ['#2ff', 80, 40],
                ['#ff2', 60, 80],
            ]) {
            x.fillStyle = col;
            x.beginPath();
            x.arc(cx, cy, 40, 0, 2 * Math.PI, true);
            x.closePath();
            x.fill();
        }
        x.fillStyle = '#f9c';
        x.arc(60, 60, 60, 0, 2 * Math.PI, true);
        x.arc(60, 60, 20, 0, 2 * Math.PI, true);
        x.fill('evenodd');
        const geometry = c.toDataURL();
        // Hashed, not stored raw: the two data URLs are ~15KB together.
        return {
            winding,
            geometry: await sha256(geometry),
            text: await sha256(text)
        };
    };

    /* ---------- component: languages / screen / platform ---------- */

    const languages = () => {
        const out = [];
        const l = N.language || N.userLanguage || N.browserLanguage || N.systemLanguage;
        if (l !== undefined) out.push([l]);
        if (Array.isArray(N.languages)) {
            if (!reducedLangs()) out.push([...N.languages]);
        } else if (typeof N.languages === 'string' && N.languages) out.push(N.languages.split(','));
        return out;
    };

    // .sort() is lexicographic here - kept as-is to stay bit-compatible with the reference.
    const screenResolution = () => [int(S.width, null), int(S.height, null)].sort().reverse();

    const platform = () => {
        const p = N.platform;
        if (p !== 'MacIntel' || !webkit() || desktopWebkit()) return p;
        if (p === 'iPad') return 'iPad';
        const ratio = S.width / S.height;
        return cnt(['MediaSource' in W, !!Element.prototype.webkitRequestFullscreen, ratio > 0.65 && ratio < 1.53]) >= 2 ?
            'iPad' :
            'iPhone';
    };

    const timezone = () => {
        const f = W.Intl ? .DateTimeFormat;
        if (f) {
            const z = new f().resolvedOptions().timeZone;
            if (z) return z;
        }
        const y = new Date().getFullYear();
        const o = -Math.max(new Date(y, 0, 1).getTimezoneOffset(), new Date(y, 6, 1).getTimezoneOffset());
        return `UTC${o >= 0 ? '+' : ''}${o}`;
    };

    const plugins = () => {
        const ps = N.plugins;
        if (!ps) return undefined;
        const out = [];
        for (let i = 0; i < ps.length; i++) {
            const p = ps[i];
            if (!p) continue;
            const mts = [];
            for (let j = 0; j < p.length; j++) mts.push({
                type: p[j].type,
                suffixes: p[j].suffixes
            });
            out.push({
                name: p.name,
                description: p.description,
                mimeTypes: mts
            });
        }
        return out;
    };

    const touchSupport = () => {
        let touchEvent;
        try {
            D.createEvent('TouchEvent');
            touchEvent = true;
        } catch {
            touchEvent = false;
        }
        return {
            maxTouchPoints: N.maxTouchPoints !== undefined ? int(N.maxTouchPoints, 0) : N.msMaxTouchPoints || 0,
            touchEvent,
            touchStart: 'ontouchstart' in W,
        };
    };

    const vendorFlavors = () =>
        'chrome,safari,__crWeb,__gCrWeb,yandex,__yb,__ybro,__firefox__,__edgeTrackingPreventionStatistics,webkit,oprt,samsungAr,ucweb,UCShellJava,puffinDevice'
        .split(',')
        .filter((k) => W[k] && typeof W[k] === 'object')
        .sort();

    const cookiesEnabled = () => {
        try {
            // Writes then immediately expires a throwaway key; nothing persists.
            D.cookie = 'cookietest=1; SameSite=Strict;';
            const ok = D.cookie.indexOf('cookietest=') !== -1;
            D.cookie = 'cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT';
            return ok;
        } catch {
            return false;
        }
    };

    /* ---------- component: media queries ---------- */

    const tri = (q, on, off) => (mm(`(${q}: ${on})`) ? true : mm(`(${q}: ${off})`) ? false : undefined);

    const colorGamut = () => ['rec2020', 'p3', 'srgb'].find((g) => mm(`(color-gamut: ${g})`));

    const monochrome = () => {
        if (!mm('(min-monochrome: 0)')) return undefined;
        for (let i = 0; i <= 100; i++)
            if (mm(`(max-monochrome: ${i})`)) return i;
        return undefined;
    };

    const contrast = () => {
        const c = (v) => mm(`(prefers-contrast: ${v})`);
        if (c('no-preference')) return 0;
        if (c('high') || c('more')) return 1;
        if (c('low') || c('less')) return -1;
        return c('forced') ? 10 : undefined;
    };

    /* ---------- component: math ---------- */

    const M = Math;
    const zero = () => 0;
    const maths = () => {
        const f = (k) => M[k] || zero;
        return {
            acos: f('acos')(0.12312423423423424),
            acosh: f('acosh')(1e308),
            acoshPf: M.log(1e154 + M.sqrt(1e154 * 1e154 - 1)),
            asin: f('asin')(0.12312423423423424),
            asinh: f('asinh')(1),
            asinhPf: M.log(1 + M.sqrt(2)),
            atanh: f('atanh')(0.5),
            atanhPf: M.log((1 + 0.5) / (1 - 0.5)) / 2,
            atan: f('atan')(0.5),
            sin: f('sin')(-1e300),
            sinh: f('sinh')(1),
            sinhPf: M.exp(1) - 1 / M.exp(1) / 2,
            cos: f('cos')(10.000000000123),
            cosh: f('cosh')(1),
            coshPf: (M.exp(1) + 1 / M.exp(1)) / 2,
            tan: f('tan')(-1e300),
            tanh: f('tanh')(1),
            tanhPf: (M.exp(2) - 1) / (M.exp(2) + 1),
            exp: f('exp')(1),
            expm1: f('expm1')(1),
            expm1Pf: M.exp(1) - 1,
            log1p: f('log1p')(10),
            log1pPf: M.log(11),
            powPI: M.pow(M.PI, -100),
        };
    };

    /* ---------- component: misc ---------- */

    const architecture = () => {
        const f = new Float32Array(1);
        const u = new Uint8Array(f.buffer);
        f[0] = Infinity;
        f[0] = f[0] - f[0];
        return u[3];
    };

    const applePay = () => {
        const A = W.ApplePaySession;
        if (typeof A ? .canMakePayments !== 'function') return -1;
        if (crossOrigin()) return -3;
        try {
            return A.canMakePayments() ? 1 : 0;
        } catch (e) {
            return e instanceof Error && e.name === 'InvalidAccessError' && /\bfrom\b.*\binsecure\b/i.test(e.message) ?
                -2 :
                undefined;
        }
    };

    const privateClickMeasurement = () => {
        const a = D.createElement('a');
        const v = a.attributionSourceId ? ? a.attributionsourceid;
        return v === undefined ? undefined : String(v);
    };

    const audioBaseLatency = () => {
        if (!android() && !webkit()) return -2;
        if (!W.AudioContext) return -1;
        const ctx = new AudioContext();
        const l = ctx.baseLatency;
        safe(() => ctx.close());
        return l == null ? -1 : isFinite(l) ? l : -3;
    };

    const dateTimeLocale = () => {
        if (!W.Intl) return -1;
        const f = W.Intl.DateTimeFormat;
        if (!f) return -2;
        const l = f().resolvedOptions().locale;
        return l || l === '' ? l : -3;
    };

    /* ---------- component: webgl ---------- */

    // Parameter enums whose current value is worth reading back.
    const GL_READBACK = new Set([
        10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968,
        2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969,
        32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413,
        3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003,
        36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938,
    ]);
    const EXT_READBACK = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]);
    const SHADERS = ['FRAGMENT_SHADER', 'VERTEX_SHADER'];
    const PRECISIONS = ['LOW_FLOAT', 'MEDIUM_FLOAT', 'HIGH_FLOAT', 'LOW_INT', 'MEDIUM_INT', 'HIGH_INT'];

    let glSlot;
    const getGl = () => {
        if (glSlot) return glSlot.ctx;
        const c = D.createElement('canvas');
        let ctx;
        c.addEventListener('webglCreateContextError', () => (ctx = undefined));
        for (const n of ['webgl', 'experimental-webgl']) {
            ctx = safe(() => c.getContext(n));
            if (ctx) break;
        }
        glSlot = {
            ctx
        };
        return ctx;
    };
    const constKeys = (o) =>
        Object.keys(Object.getPrototypeOf(o)).filter((k) => typeof k === 'string' && !k.match(/[^A-Z0-9_x]/));

    const webGlBasics = () => {
        const gl = getGl();
        if (!gl) return -1;
        if (typeof gl.getParameter !== 'function') return -2;
        const dbg = gecko() ? null : safe(() => gl.getExtension('WEBGL_debug_renderer_info'));
        const p = (k) => safe(() => gl.getParameter(k)) ? .toString();
        return {
            version: p(gl.VERSION) || '',
            vendor: p(gl.VENDOR) || '',
            vendorUnmasked: dbg ? p(dbg.UNMASKED_VENDOR_WEBGL) : '',
            renderer: p(gl.RENDERER) || '',
            rendererUnmasked: dbg ? p(dbg.UNMASKED_RENDERER_WEBGL) : '',
            shadingLanguageVersion: p(gl.SHADING_LANGUAGE_VERSION) || '',
        };
    };

    const webGlExtensions = async () => {
        const gl = getGl();
        if (!gl) return -1;
        if (typeof gl.getParameter !== 'function') return -2;
        const supported = safe(() => gl.getSupportedExtensions());
        const attrs = safe(() => gl.getContextAttributes());
        const contextAttributes = [];
        const parameters = [];
        const shaderPrecisions = [];
        const extensionParameters = [];
        const unsupportedExtensions = [];

        if (attrs)
            for (const k of Object.keys(attrs)) contextAttributes.push(`${k}=${attrs[k]}`);
        for (const k of constKeys(gl)) {
            const v = gl[k];
            parameters.push(`${k}=${v}${GL_READBACK.has(v) ? `=${safe(() => gl.getParameter(v))}` : ''}`);
        }
        if (supported)
            for (const name of supported) {
                if (
                    (name === 'WEBGL_debug_renderer_info' && gecko()) ||
                    (name === 'WEBGL_polygon_mode' && (chromium() || webkit()))
                )
                    continue;
                const ext = safe(() => gl.getExtension(name));
                if (!ext) {
                    unsupportedExtensions.push(name);
                    continue;
                }
                for (const k of constKeys(ext)) {
                    const v = ext[k];
                    extensionParameters.push(`${k}=${v}${EXT_READBACK.has(v) ? `=${safe(() => gl.getParameter(v))}` : ''}`);
                }
            }
        for (const sh of SHADERS)
            for (const pr of PRECISIONS) {
                const f = safe(() => gl.getShaderPrecisionFormat(gl[sh], gl[pr]));
                shaderPrecisions.push(`${sh}.${pr}=${f ? [f.rangeMin, f.rangeMax, f.precision].join(',') : ''}`);
            }

        return {
            contextAttributes: await digest(contextAttributes),
            parameters: await digest(parameters),
            shaderPrecisions: await digest(shaderPrecisions),
            extensions: await digest(supported),
            extensionParameters: await digest(extensionParameters),
            unsupportedExtensions: await digest(unsupportedExtensions),
        };
    };

    /* ---------- confidence ---------- */

    // Only fonts the platform does NOT ship by default carry entropy. Counting the
    // stock set inflates confidence for every stock machine (the bug in impl A).
    const STOCK_APPLE = [
        'Gill Sans',
        'Helvetica Neue',
        'Menlo',
        'Monaco',
        'Geneva',
        'Optima',
        'Palatino',
        'Futura',
        'Courier New',
        'Arial Unicode MS',
    ];
    const STOCK_WIN = [
        'Calibri',
        'Cambria',
        'Candara',
        'Consolas',
        'Constantia',
        'Corbel',
        'Segoe UI',
        'Nirmala UI',
        'Mangal',
        'Bahnschrift',
        'Franklin Gothic Medium',
    ];

    const score = (p) => {
        const plat = `${p.userAgentData?.platform || ''} ${N.platform || ''}`;
        const stock = /mac|iphone|ipad|ipod/i.test(plat) ? STOCK_APPLE : /win/i.test(plat) ? STOCK_WIN : [];
        const renderer = typeof p.webGlBasics === 'object' ? p.webGlBasics ? .rendererUnmasked : undefined;
        const prefs = p.fontPreferences ? Object.values(p.fontPreferences).filter((v) => typeof v === 'number') : [];

        let s = 0.3;
        if (typeof renderer === 'string' && renderer.length > 12 && renderer !== 'Apple GPU') s += 0.2;
        if (prefs.length >= 5) s += 0.15;
        if (typeof p.userAgentData ? .model === 'string' && p.userAgentData.model) s += 0.1;
        if ((p.fonts || []).filter((f) => !stock.includes(f)).length >= 3) s += 0.1;
        if (typeof p.canvas ? .geometry === 'string' && p.canvas.geometry.length === 64) s += 0.1;
        if (typeof p.audio === 'number' && p.audio > 0) s += 0.05;
        return Math.round(Math.min(s, 1) * 100) / 100;
    };

    /* ---------- assembly ---------- */

    const build = async () => {
        const t0 = Date.now();
        const left = () => Math.max(0, BUDGET - (Date.now() - t0));
        const cap = (f, ms) => race(safe(f), Math.min(ms, left()));

        const [userAgentData, fonts, domBlockers, fontPreferences, audio, canvas] = await Promise.all([
            cap(pUserAgentData, 400),
            cap(pFonts, 700),
            cap(pDomBlockers, 700),
            cap(pFontPreferences, 700),
            cap(pAudio, 1000),
            cap(pCanvas, 600),
        ]);

        const payload = {};
        // Insertion order is load-bearing: the caller hashes JSON.stringify(payload).
        const put = (k, v) => {
            if (v !== undefined) payload[k] = v;
        };

        put('userAgentData', userAgentData);
        put('fonts', fonts);
        put('domBlockers', domBlockers);
        put('fontPreferences', fontPreferences);
        put('audio', audio);
        put('screenFrame', safe(pScreenFrame));
        put('canvas', canvas);
        put(
            'osCpu',
            safe(() => N.oscpu),
        );
        put('languages', safe(languages));
        put(
            'colorDepth',
            safe(() => S.colorDepth),
        );
        put(
            'deviceMemory',
            safe(() => flt(N.deviceMemory)),
        );
        put('screenResolution', safe(screenResolution));
        put(
            'hardwareConcurrency',
            safe(() => int(N.hardwareConcurrency)),
        );
        put('timezone', safe(timezone));
        put('sessionStorage', safe(() => !!W.sessionStorage) ? ? true);
        put('localStorage', safe(() => !!W.localStorage) ? ? true);
        put('indexedDB', safe(() => !!W.indexedDB) ? ? true);
        put(
            'openDatabase',
            safe(() => !!W.openDatabase),
        );
        put(
            'cpuClass',
            safe(() => N.cpuClass),
        );
        put('platform', safe(platform));
        put('plugins', safe(plugins));
        put('touchSupport', safe(touchSupport));
        put(
            'vendor',
            safe(() => N.vendor || ''),
        );
        put('vendorFlavors', safe(vendorFlavors));
        put('cookiesEnabled', safe(cookiesEnabled));
        put('colorGamut', safe(colorGamut));
        put(
            'invertedColors',
            safe(() => tri('inverted-colors', 'inverted', 'none')),
        );
        put(
            'forcedColors',
            safe(() => tri('forced-colors', 'active', 'none')),
        );
        put('monochrome', safe(monochrome));
        put('contrast', safe(contrast));
        put(
            'reducedMotion',
            safe(() => tri('prefers-reduced-motion', 'reduce', 'no-preference')),
        );
        put(
            'reducedTransparency',
            safe(() => tri('prefers-reduced-transparency', 'reduce', 'no-preference')),
        );
        put(
            'hdr',
            safe(() => tri('dynamic-range', 'high', 'standard')),
        );
        put('math', safe(maths));
        put(
            'pdfViewerEnabled',
            safe(() => N.pdfViewerEnabled),
        );
        put('architecture', safe(architecture));
        put('applePay', safe(applePay));
        put('privateClickMeasurement', safe(privateClickMeasurement));
        put('audioBaseLatency', safe(audioBaseLatency));
        put('dateTimeLocale', safe(dateTimeLocale));
        put('webGlBasics', safe(webGlBasics));
        put('webGlExtensions', await race(safe(webGlExtensions), Math.max(300, left())));

        safe(() => getGl() ? .getExtension('WEBGL_lose_context') ? .loseContext());

        return {
            payload,
            confident: safe(() => score(payload)) ? ? 0
        };
    };

    let inflight = null;
    window.__bspdFpB = () => {
        if (!inflight) inflight = build().catch(() => ({
            payload: {},
            confident: 0
        }));
        return inflight;
    };
})();

/* ============================== collector C ============================== */
(() => {
    // Experiment C: hand-rolled re-implementation of the ThumbmarkJS v1.11 component
    // set. Client half only - no STUN, no vendor endpoint, nothing persisted. Inner
    // hashes are SHA-256 rather than Thumbmark's murmur128: we only ever compare our
    // own hashes against each other, never against Thumbmark's servers.
    const BUDGET = 1500; // total wall clock
    const SLOW = 600; // webrtc cap
    // Voices load asynchronously. On the first page of a fresh browser process
    // they take ~1s, and with the other collectors busy on the main thread the
    // event lands later still; at 1000ms that page missed them and hashed
    // differently from every later page. Must stay under BUDGET.
    const SPEECH = 1400;
    const FAST = 500; // everything else

    const safe = (f, d) => {
        try {
            const v = f();
            return v === undefined ? d : v;
        } catch {
            return d;
        }
    };
    const race = (p, ms) =>
        Promise.race([Promise.resolve(p).catch(() => undefined), new Promise((r) => setTimeout(r, ms))]);

    const sha = async (s) => {
        try {
            const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
            return [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, '0')).join('');
        } catch {
            return undefined;
        }
    };

    // Key-sorted stringify so an inner hash never depends on property insertion order.
    const sj = (v) => {
        if (v === null) return 'null';
        const t = typeof v;
        if (t === 'number') return isFinite(v) ? '' + v : 'null';
        if (t !== 'object') return JSON.stringify(v);
        if (Array.isArray(v)) return '[' + v.map((x) => sj(x) || 'null').join(',') + ']';
        return (
            '{' +
            Object.keys(v)
            .sort()
            .filter((k) => v[k] !== undefined)
            .map((k) => JSON.stringify(k) + ':' + sj(v[k]))
            .join(',') +
            '}'
        );
    };

    // Per-pixel majority vote over N renders (ref helpers `l`/`u`): GPU/AA jitter makes
    // a single readback unstable, best-of-three is not.
    const merge = (bufs) => {
        if (bufs.length === 1) return bufs[0];
        if (bufs.length !== 3) return bufs[0];
        const [a, b, c] = bufs;
        const o = new Uint8ClampedArray(a.length);
        for (let i = 0; i < a.length; i++) o[i] = a[i] === b[i] || a[i] === c[i] ? a[i] : b[i] === c[i] ? b[i] : a[i];
        return o;
    };

    // Majority vote across repeated probe rounds (ref helper `P`).
    const vote = (rounds, keys) => {
        const out = {};
        keys.forEach((k) => {
            const vals = rounds.map((r) => r[k]).filter((v) => v !== undefined);
            if (!vals.length) return;
            const n = {};
            vals.forEach((v) => {
                n[v] = (n[v] || 0) + 1;
            });
            let best = vals[0];
            let bc = 1;
            Object.keys(n).forEach((k2) => {
                if (n[k2] > bc) {
                    best = k2;
                    bc = n[k2];
                }
            });
            if (best) out[k] = best;
        });
        return out;
    };

    // Offscreen host for the font iframe. Zero-sized + absolute => no layout shift.
    const mkHost = () => {
        const d = document.createElement('div');
        d.setAttribute(
            'style',
            'position:absolute;left:-9999px;top:-9999px;width:0;height:0;overflow:hidden;opacity:0;pointer-events:none',
        );
        (document.body || document.documentElement).appendChild(d);
        return d;
    };

    /* ---------------------------------------------------------------- audio */

    const audio = () =>
        new Promise((res) => {
            const C = window.OfflineAudioContext || window.webkitOfflineAudioContext;
            if (!C) return res(undefined);
            const ctx = new C(1, 5000, 44100);
            const src = ctx.createBufferSource();
            const osc = ctx.createOscillator();
            osc.frequency.value = 1000;
            const comp = ctx.createDynamicsCompressor();
            comp.threshold.value = -50;
            comp.knee.value = 40;
            comp.ratio.value = 12;
            comp.attack.value = 0;
            comp.release.value = 0.2;
            osc.connect(comp);
            comp.connect(ctx.destination);
            osc.start();
            const done = (buf) => {
                const d = buf.getChannelData(0);
                let s = 0;
                for (let i = 0; i < d.length; i++) s += Math.abs(d[i]);
                safe(() => {
                    osc.disconnect();
                    comp.disconnect();
                });
                safe(() => ctx.close && ctx.close());
                res({
                    sampleHash: s,
                    maxChannels: ctx.destination.maxChannelCount,
                    channelCountMode: src.channelCountMode
                });
            };
            ctx.oncomplete = (e) => done(e.renderedBuffer);
            const r = ctx.startRendering();
            if (r && typeof r.then === 'function') r.then(done).catch(() => res(undefined));
        });

    /* --------------------------------------------------------------- canvas */

    const CW = 280;
    const CH = 20;

    const drawCanvas = () => {
        const c = document.createElement('canvas');
        const x = c.getContext('2d');
        if (!x) return null;
        c.width = CW;
        c.height = CH;
        const g = x.createLinearGradient(0, 0, c.width, c.height);
        g.addColorStop(0, 'red');
        g.addColorStop(1 / 6, 'orange');
        g.addColorStop(2 / 6, 'yellow');
        g.addColorStop(0.5, 'green');
        g.addColorStop(4 / 6, 'blue');
        g.addColorStop(5 / 6, 'indigo');
        g.addColorStop(1, 'violet');
        x.fillStyle = g;
        x.fillRect(0, 0, c.width, c.height);
        const t = 'Random Text WMwmil10Oo';
        x.font = '23.123px Arial';
        x.fillStyle = 'black';
        x.fillText(t, -5, 15);
        x.fillStyle = 'rgba(0, 0, 255, 0.5)';
        x.fillText(t, -3.3, 17.7);
        x.beginPath();
        x.moveTo(0, 0);
        x.lineTo((2 * c.width) / 7, c.height);
        x.strokeStyle = 'white';
        x.lineWidth = 2;
        x.stroke();
        return x.getImageData(0, 0, c.width, c.height).data;
    };

    const canvas = async () => {
        const bufs = [safe(drawCanvas), safe(drawCanvas), safe(drawCanvas)].filter(Boolean);
        if (!bufs.length) return undefined;
        const h = await sha(merge(bufs).toString());
        return h ? {
            commonPixelsHash: h
        } : undefined;
    };

    /* ---------------------------------------------------------------- fonts */

    const FONTS = (
        'Arial,Arial Black,Arial Narrow,Arial Rounded MT,Arimo,Archivo,Barlow,Bebas Neue,Bitter,Bookman,' +
        'Calibri,Cabin,Candara,Century,Century Gothic,Comic Sans MS,Constantia,Courier,Courier New,Crimson Text,' +
        'DM Mono,DM Sans,DM Serif Display,DM Serif Text,Dosis,Droid Sans,Exo,Fira Code,Fira Sans,' +
        'Franklin Gothic Medium,Garamond,Geneva,Georgia,Gill Sans,Helvetica,Impact,Inconsolata,Indie Flower,Inter,' +
        'Josefin Sans,Karla,Lato,Lexend,Lucida Bright,Lucida Console,Lucida Sans Unicode,Manrope,Merriweather,' +
        'Merriweather Sans,Montserrat,Myriad,Noto Sans,Nunito,Nunito Sans,Open Sans,Optima,Orbitron,Oswald,Pacifico,' +
        'Palatino,Perpetua,PT Sans,PT Serif,Poppins,Prompt,Public Sans,Quicksand,Rajdhani,Recursive,Roboto,' +
        'Roboto Condensed,Rockwell,Rubik,Segoe Print,Segoe Script,Segoe UI,Sora,Source Sans Pro,Space Mono,Tahoma,' +
        'Taviraj,Times,Times New Roman,Titillium Web,Trebuchet MS,Ubuntu,Varela Round,Verdana,Work Sans'
    ).split(',');
    const BASE = ['monospace', 'sans-serif', 'serif'];
    const measure = (x, f) => {
        x.font = `72px ${f}`;
        return x.measureText('WwMmLli0Oo').width;
    };

    // Measured inside a blank iframe so page CSS (font-face, text-size-adjust) cannot
    // shift the metrics. Falls back to the host document if the iframe is unreachable.
    const fonts = async () => {
        const host = mkHost();
        try {
            const fr = document.createElement('iframe');
            fr.setAttribute('frameBorder', '0');
            fr.src = 'about:blank';
            host.appendChild(fr);
            const doc = safe(() => fr.contentDocument || (fr.contentWindow && fr.contentWindow.document)) || document;
            const x = safe(() => doc.createElement('canvas').getContext('2d'));
            if (!x) return undefined;
            const base = BASE.map((b) => measure(x, b));
            const out = {};
            FONTS.forEach((f) => {
                const w = measure(x, f);
                if (!base.includes(w)) out[f] = w;
            });
            return out;
        } finally {
            safe(() => host.remove());
        }
    };

    /* ------------------------------------------------------------- hardware */

    // Masked VENDOR/RENDERER ("WebKit" / "WebKit WebGL"); unmasked debug-info strings
    // are only consulted when the masked ones come back empty, as in the reference.
    const videocard = () => {
        const c = document.createElement('canvas');
        const gl = safe(() => c.getContext('webgl')) || safe(() => c.getContext('experimental-webgl'));
        if (!gl || !('getParameter' in gl)) return 'undefined';
        try {
            const p = (k) => (gl.getParameter(k) || '').toString();
            const vendor = p(gl.VENDOR);
            const renderer = p(gl.RENDERER);
            const out = {
                vendor: vendor,
                renderer: renderer,
                version: p(gl.VERSION),
                shadingLanguageVersion: p(gl.SHADING_LANGUAGE_VERSION),
            };
            if (!vendor.length || !renderer.length) {
                const dbg = gl.getExtension('WEBGL_debug_renderer_info');
                if (dbg) {
                    const uv = p(dbg.UNMASKED_VENDOR_WEBGL);
                    const ur = p(dbg.UNMASKED_RENDERER_WEBGL);
                    if (uv) out.vendorUnmasked = uv;
                    if (ur) out.rendererUnmasked = ur;
                }
            }
            return out;
        } catch {
            return 'undefined';
        } finally {
            safe(() => gl.getExtension('WEBGL_lose_context').loseContext());
        }
    };

    // Endianness / float-NaN byte layout: 127 on little-endian, 0 on big-endian.
    const arch = () => {
        const f = new Float32Array(1);
        const u = new Uint8Array(f.buffer);
        f[0] = Infinity;
        f[0] = f[0] - f[0];
        return u[3];
    };

    const hardware = async () => {
        const dm = navigator.deviceMemory !== undefined ? navigator.deviceMemory : 0;
        const mem = (window.performance && window.performance.memory) || 0;
        return {
            videocard: videocard(),
            architecture: arch(),
            deviceMemory: dm.toString() || 'undefined',
            jsHeapSizeLimit: mem.jsHeapSizeLimit || 0,
        };
    };

    /* -------------------------------------------------------------- locales */

    const locales = async () => ({
        languages: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    });

    /* ----------------------------------------------------------------- math */

    // Midpoint-rule integral; accumulated FP error differs per math library.
    const integral = (f, a, b, n) => {
        const step = (b - a) / n;
        let s = 0;
        for (let i = 0; i < n; i++) s += f(a + (i + 0.5) * step);
        return s * step;
    };

    const math = async () => ({
        acos: Math.acos(0.5),
        asin: integral(Math.asin, -1, 1, 97),
        cos: integral(Math.cos, 0, Math.PI, 97),
        largeCos: Math.cos(1e20),
        largeSin: Math.sin(1e20),
        largeTan: Math.tan(1e20),
        sin: integral(Math.sin, -Math.PI, Math.PI, 97),
        tan: integral(Math.tan, 0, 2 * Math.PI, 97),
    });

    /* ---------------------------------------------------------- permissions */

    // Not collected, matching Thumbmark's default (its `stabilize: ['iframe']`
    // drops this component). Permission state belongs to the site, not the
    // device: notifications, geolocation, persistent-storage and the rest are
    // granted per origin, and Chrome even grants some automatically on sites a
    // visitor uses often. The same browser therefore reported a different map on
    // every store, and C - and X/Y, which copied it - hashed differently for one
    // visitor across two stores, which is the exact comparison this experiment
    // exists to make.

    /* -------------------------------------------------------------- plugins */

    const plugins = async () => {
        const out = [];
        if (navigator.plugins)
            for (let i = 0; i < navigator.plugins.length; i++) {
                const p = navigator.plugins[i];
                out.push([p.name, p.filename, p.description].join('|'));
            }
        return {
            plugins: out
        };
    };

    /* --------------------------------------------------------------- screen */

    const MEDIA = {
        'prefers-contrast': ['high', 'more', 'low', 'less', 'forced', 'no-preference'],
        'any-hover': ['hover', 'none'],
        'any-pointer': ['none', 'coarse', 'fine'],
        pointer: ['none', 'coarse', 'fine'],
        hover: ['hover', 'none'],
        update: ['fast', 'slow'],
        'inverted-colors': ['inverted', 'none'],
        'prefers-reduced-motion': ['reduce', 'no-preference'],
        'prefers-reduced-transparency': ['reduce', 'no-preference'],
        scripting: ['none', 'initial-only', 'enabled'],
        'forced-colors': ['active', 'none'],
    };

    const mediaMatches = () => {
        const out = [];
        Object.keys(MEDIA).forEach((f) => {
            MEDIA[f].forEach((v) => {
                if (safe(() => matchMedia(`(${f}: ${v})`).matches)) out.push(`${f}: ${v}`);
            });
        });
        return out;
    };

    const isMobile = () => {
        const ua = (navigator && navigator.userAgent) || '';
        if (!ua) return false;
        return (
            /Mobi|Android|iPhone|iPod|IEMobile|Opera Mini|Opera Mobi|webOS|BlackBerry|Windows Phone/i.test(ua) &&
            !/iPad/i.test(ua)
        );
    };

    const screenc = async () => {
        if (typeof matchMedia === 'undefined' || typeof screen === 'undefined') return undefined;
        const out = {
            is_touchscreen: navigator.maxTouchPoints > 0,
            maxTouchPoints: navigator.maxTouchPoints,
            colorDepth: screen.colorDepth,
            mediaMatches: mediaMatches(),
        };
        // Reference adds orientation-independent resolution on touch mobiles only.
        if (isMobile() && navigator.maxTouchPoints > 0) {
            const w = window.screen.width;
            const h = window.screen.height;
            out.resolution = `${Math.max(w, h)}x${Math.min(w, h)}`;
        }
        return out;
    };

    /* --------------------------------------------------------------- system */

    const UARX = [
        /(?<name>SamsungBrowser)\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>EdgA|EdgiOS|Edg)\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>OPR|OPX)\/(?<version>\d+(?:\.\d+)+)/,
        /Opera[\s\/](?<version>\d+(?:\.\d+)+)/,
        /Opera Mini\/(?<version>\d+(?:\.\d+)+)/,
        /Opera Mobi\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>Vivaldi)\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>CriOS)\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>FxiOS)\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>Chrome|Chromium)\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>Firefox|Waterfox|Iceweasel|IceCat)\/(?<version>\d+(?:\.\d+)+)/,
        /Version\/(?<version1>[\d.]+).*Safari\/[\d.]+|(?<name>Safari)\/(?<version2>[\d.]+)/,
        /(?<name>MSIE|Trident|IEMobile).+?(?<version>\d+(?:\.\d+)+)/,
        /(?<name>[A-Za-z]+)\/(?<version>\d+(?:\.\d+)+)/,
    ];
    const UAMAP = {
        edg: 'Edge',
        edga: 'Edge',
        edgios: 'Edge',
        opr: 'Opera',
        opx: 'Opera',
        crios: 'Chrome',
        fxios: 'Firefox',
        samsungbrowser: 'SamsungBrowser',
        vivaldi: 'Vivaldi',
    };

    const parseUA = (ua) => {
        for (const rx of UARX) {
            const m = ua.match(rx);
            if (!m) continue;
            const g = m.groups || {};
            let name = g.name;
            let ver = g.version || g.version1 || g.version2;
            if (!name && (g.version1 || g.version2)) name = 'Safari';
            if (!name && rx.source.includes('Opera Mini')) name = 'Opera Mini';
            if (!name && rx.source.includes('Opera Mobi')) name = 'Opera Mobi';
            if (!name && rx.source.includes('Opera')) name = 'Opera';
            if (!name && m[1]) name = m[1];
            if (!ver && m[2]) ver = m[2];
            if (name) return {
                name: UAMAP[name.toLowerCase()] || name,
                version: ver || 'unknown'
            };
        }
        return {
            name: 'unknown',
            version: 'unknown'
        };
    };

    const browser = () => {
        if (typeof navigator === 'undefined') return {
            name: 'unknown',
            version: 'unknown'
        };
        const p = parseUA(navigator.userAgent || '');
        return navigator.brave ? {
            name: 'Brave',
            version: p.version
        } : p;
    };

    const applePay = () => {
        if (window.location.protocol === 'https:' && typeof window.ApplePaySession === 'function')
            try {
                for (let v = 15; v > 0; v--)
                    if (window.ApplePaySession.supportsVersion(v)) return v;
            } catch {
                return 0;
            }
        return 0;
    };

    // DEVIATION from Thumbmark, which hashes the raw UA and browser version. Both
    // carry the browser build (Chrome/153.0.0.0), which changes with every update -
    // roughly monthly on Chrome - and would re-mint the same device's hash each
    // time. Thumbmark's server matches fuzzily and can absorb that; this experiment
    // compares exact hashes and cannot. So `/version` suffixes, dotted or
    // underscored version runs (10_15_7, 10.0, rv:128.0) and the Android release
    // number are removed, and browser.version is dropped. Everything else in the
    // UA - platform tokens, device models like SM-G991B - is kept.
    const stripUA = (ua) =>
        String(ua || '')
        .replace(/\/\d[\w.]*/g, '')
        .replace(/\b\d+(?:[._]\d+)+\b/g, '')
        .replace(/\b(Android)\s+\d+/g, '$1');

    const system = async () => {
        const b = browser();
        return {
            platform: window.navigator.platform,
            productSub: navigator.productSub,
            product: navigator.product,
            useragent: stripUA(navigator.userAgent),
            hardwareConcurrency: navigator.hardwareConcurrency,
            browser: {
                name: b.name
            },
            mobile: isMobile(),
            applePayVersion: applePay(),
            cookieEnabled: window.navigator.cookieEnabled,
        };
    };

    /* ---------------------------------------------------------------- webgl */

    const SEGS = 137;
    const GEO = (() => {
        const a = new Float32Array(4 * SEGS);
        const step = (2 * Math.PI) / SEGS;
        for (let i = 0; i < SEGS; i++) {
            const r = i * step;
            a[4 * i] = 0;
            a[4 * i + 1] = 0;
            a[4 * i + 2] = 100 * Math.cos(r);
            a[4 * i + 3] = 50 * Math.sin(r);
        }
        return a;
    })();

    const glScene = () => {
        if (typeof document === 'undefined') return null;
        const c = document.createElement('canvas');
        c.width = 200;
        c.height = 100;
        const gl = c.getContext('webgl');
        if (!gl) return null;
        const vs = gl.createShader(gl.VERTEX_SHADER);
        const fs = gl.createShader(gl.FRAGMENT_SHADER);
        if (!vs || !fs) return null;
        gl.shaderSource(
            vs,
            '\n    attribute vec2 position;\n    void main() {\n        gl_Position = vec4(position, 0.0, 1.0);\n    }\n',
        );
        gl.compileShader(vs);
        if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) return null;
        gl.shaderSource(
            fs,
            '\n    precision mediump float;\n    void main() {\n        gl_FragColor = vec4(0.812, 0.195, 0.553, 0.921); // Set line color\n    }\n',
        );
        gl.compileShader(fs);
        if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) return null;
        const prog = gl.createProgram();
        if (!prog) return null;
        gl.attachShader(prog, vs);
        gl.attachShader(prog, fs);
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return null;
        const buf = gl.createBuffer();
        if (!buf) return null;
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, GEO, gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        return {
            canvas: c,
            gl: gl,
            program: prog,
            buffer: buf
        };
    };

    const glPixels = (s) => {
        const gl = s.gl;
        const c = s.canvas;
        try {
            gl.useProgram(s.program);
            gl.bindBuffer(gl.ARRAY_BUFFER, s.buffer);
            const loc = gl.getAttribLocation(s.program, 'position');
            gl.enableVertexAttribArray(loc);
            gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
            gl.viewport(0, 0, c.width, c.height);
            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
            gl.drawArrays(gl.LINES, 0, 2 * SEGS);
            const px = new Uint8ClampedArray(c.width * c.height * 4);
            gl.readPixels(0, 0, c.width, c.height, gl.RGBA, gl.UNSIGNED_BYTE, px);
            return px;
        } catch {
            return null;
        } finally {
            safe(() => {
                gl.bindBuffer(gl.ARRAY_BUFFER, null);
                gl.useProgram(null);
                gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
                gl.clearColor(0, 0, 0, 0);
            });
        }
    };

    const webgl = async () => {
        const s = safe(glScene);
        if (!s) return undefined;
        try {
            const bufs = [glPixels(s), glPixels(s), glPixels(s)].filter(Boolean);
            if (!bufs.length) return undefined;
            const h = await sha(merge(bufs).toString());
            return h ? {
                commonPixelsHash: h
            } : undefined;
        } finally {
            safe(() => s.gl.deleteBuffer(s.buffer));
            safe(() => s.gl.deleteProgram(s.program));
            safe(() => s.gl.getExtension('WEBGL_lose_context').loseContext());
        }
    };

    /* --------------------------------------------------------------- webrtc */

    // The reference also reports `candidateType` from an ICE probe. We dropped it:
    // with `iceServers: []` no STUN traffic leaves the box, so the answer is "host"
    // for every device on earth - zero entropy - and it raced, landing in the
    // payload on some page loads and not others. That alone gave one device two
    // hashes. Codec capabilities below are synchronous and stable.
    const webrtc = async () => {
        const PC = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
        const RX = window.RTCRtpReceiver;
        if (!PC || !RX || typeof RX.getCapabilities !== 'function') return undefined;
        const cap = (k) => safe(() => RX.getCapabilities(k)) || {
            codecs: [],
            headerExtensions: []
        };
        const a = cap('audio');
        const v = cap('video');
        const list = (c) =>
            (c.codecs || []).map((x) => ({
                mimeType: x.mimeType,
                clockRate: x.clockRate,
                channels: x.channels,
                sdpFmtpLine: x.sdpFmtpLine,
            }));
        const au = list(a);
        const vi = list(v);
        const exts = [
            ...new Set([...(a.headerExtensions || []), ...(v.headerExtensions || [])].map((e) => e.uri)),
        ].sort();

        const [ah, vh, eh] = await Promise.all([sha(sj(au)), sha(sj(vi)), sha(sj(exts))]);
        if (!ah || !vh || !eh) return undefined;
        const details = {
            supported: true,
            audio: {
                count: au.length,
                hash: ah
            },
            video: {
                count: vi.length,
                hash: vh
            },
            extensionsHash: eh,
        };
        const h = await sha(sj(details));
        return h ? {
            details: details,
            hash: h
        } : undefined;
    };

    /* --------------------------------------------------------------- speech */

    const speech = () =>
        new Promise((res) => {
            const ss = window.speechSynthesis;
            if (!ss || typeof ss.getVoices !== 'function') return res(undefined);
            let done = false;
            const esc = (s) => s.replace(/\\/g, '\\\\').replace(/,/g, '\\,');
            const fin = async (vs) => {
                if (done) return;
                done = true;
                clearTimeout(timer);
                safe(() => ss.removeEventListener('voiceschanged', onChange));

                // An empty list means the voices had not loaded yet, not that the device
                // has none - Chrome populates them asynchronously. Emitting voiceCount: 0
                // would mint a second identity for a device that simply answered slowly,
                // so omit the component instead.
                if (!vs.length) return res(undefined);

                const rows = vs
                    .map((v) => [
                        esc(v.voiceURI || ''),
                        esc(v.name || ''),
                        esc(v.lang || ''),
                        v.localService ? '1' : '0',
                        v.default ? '1' : '0',
                    ].join(','), )
                    .sort();
                const vh = await sha(sj(rows));
                if (!vh) return res(undefined);
                const details = {
                    voiceCount: vs.length,
                    voicesHash: vh
                };
                const h = await sha(sj(details));
                res(h ? {
                    details: details,
                    hash: h
                } : undefined);
            };
            const onChange = () => fin(safe(() => ss.getVoices(), []) || []);
            // Chrome populates the list asynchronously; stay inside the probe cap.
            const timer = setTimeout(onChange, SPEECH - 150);
            const v0 = safe(() => ss.getVoices(), []) || [];
            if (v0.length) return fin(v0);
            safe(() => ss.addEventListener('voiceschanged', onChange));
        });

    /* --------------------------------------------------------------- assemble */

    // Insertion order is the contract: the caller hashes JSON.stringify(payload).
    const JOBS = [
        ['audio', audio, FAST],
        ['canvas', canvas, FAST],
        ['fonts', fonts, FAST],
        ['hardware', hardware, FAST],
        ['locales', locales, FAST],
        ['math', math, FAST],
        ['plugins', plugins, FAST],
        ['screen', screenc, FAST],
        ['system', system, FAST],
        ['webgl', webgl, FAST],
        ['webrtc', webrtc, SLOW],
        ['speech', speech, SPEECH],
    ];

    const score = (p) => {
        let s = 0.3;
        if (p.webgl && p.webgl.commonPixelsHash) s += 0.15;
        if (p.canvas && p.canvas.commonPixelsHash) s += 0.15;
        if (p.webrtc && p.webrtc.hash) s += 0.1;
        if (p.speech && p.speech.details && p.speech.details.voiceCount >= 1) s += 0.1;
        const w = p.fonts ? Object.keys(p.fonts).map((k) => p.fonts[k]) : [];
        if (w.length) {
            const sorted = w.slice().sort((a, b) => a - b);
            const n = sorted.length;
            const med = n % 2 ? sorted[(n - 1) / 2] : (sorted[n / 2 - 1] + sorted[n / 2]) / 2;
            // All-identical widths mean fallback rendering, i.e. no font entropy at all.
            if (w.filter((x) => x !== med).length >= 3) s += 0.1;
        }
        if (p.hardware && typeof p.hardware.jsHeapSizeLimit === 'number') s += 0.05;
        return Math.round(Math.min(s, 1) * 100) / 100;
    };

    const build = async () => {
        const got = {};
        await race(
            Promise.all(
                JOBS.map(([k, fn, ms]) =>
                    race(Promise.resolve().then(fn), ms).then(
                        (v) => {
                            if (v !== undefined && v !== null) got[k] = v;
                        },
                        () => {},
                    ),
                ),
            ),
            BUDGET,
        );
        const payload = {};
        JOBS.forEach(([k]) => {
            if (got[k] !== undefined) payload[k] = got[k];
        });
        return {
            payload: payload,
            confident: score(payload)
        };
    };

    let inflight = null;
    window.__bspdFpC = () => {
        if (!inflight) inflight = build().catch(() => ({
            payload: {},
            confident: 0
        }));
        return inflight;
    };
})();

/* ============================== collector D ============================== */
/**
 * Collector D - broprint.js (testing/broprint.js), ported as-is.
 *
 * broprint reads two signals only: an OfflineAudioContext compressor sum and a
 * single canvas render. The audio value is the same number A and B already
 * collect (same oscillator, compressor and 4500-4999 sample window), and the
 * canvas is B's classic text test with a different string, so D is expected to
 * add next to nothing. It is included so the data can confirm that.
 *
 * `nativeId` is the id broprint itself returns - cyrb53 over btoa(audio) plus
 * the canvas data URL - so D can be compared with the real library. The
 * payload stores the canvas as a SHA-256 instead of the multi-KB data URL.
 */
(() => {
    const T = 1500;

    const race = (p, d = null) =>
        Promise.race([Promise.resolve(p).catch(() => d), new Promise((r) => setTimeout(() => r(d), T))]);

    const sha256 = async (s) => {
        const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
        return [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, '0')).join('');
    };

    // cyrb53, verbatim from broprint. The second mix step reads the *updated* t.
    const cyrb53 = (r, e = 0) => {
        let t = 3735928559 ^ e;
        let o = 1103547991 ^ e;
        for (let n = 0; n < r.length; n++) {
            const i = r.charCodeAt(n);
            t = Math.imul(t ^ i, 2654435761);
            o = Math.imul(o ^ i, 1597334677);
        }
        t = Math.imul(t ^ (t >>> 16), 2246822507) ^ Math.imul(o ^ (o >>> 13), 3266489909);
        o = Math.imul(o ^ (o >>> 16), 2246822507) ^ Math.imul(t ^ (t >>> 13), 3266489909);
        return 4294967296 * (2097151 & o) + (t >>> 0);
    };

    // broprint's own stand-in value when the browser has no 2D canvas.
    const UNSUPPORTED = 'broprint.js';

    const canvas = () => {
        const probe = document.createElement('canvas');
        if (!(probe.getContext && probe.getContext('2d'))) return UNSUPPORTED;
        const r = document.createElement('canvas');
        const e = r.getContext('2d');
        const t = 'BroPrint.65@345876';
        e.textBaseline = 'top';
        e.font = "14px 'Arial'";
        e.textBaseline = 'alphabetic';
        e.fillStyle = '#f60';
        e.fillRect(125, 1, 62, 20);
        e.fillStyle = '#069';
        e.fillText(t, 2, 15);
        e.fillStyle = 'rgba(102, 204, 0, 0.7)';
        e.fillText(t, 4, 17);
        return r.toDataURL();
    };

    const setAt = (node, key, v, t) => {
        const p = node[key];
        if (p && typeof p.setValueAtTime === 'function') p.setValueAtTime(v, t);
    };

    const audio = () =>
        new Promise((resolve, reject) => {
            try {
                const C = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                if (!C) return reject(new Error('OfflineAudioContext unsupported'));
                const ctx = new C(1, 44100, 44100);
                const now = ctx.currentTime;
                const osc = ctx.createOscillator();
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(1e4, now);
                const comp = ctx.createDynamicsCompressor();
                setAt(comp, 'threshold', -50, now);
                setAt(comp, 'knee', 40, now);
                setAt(comp, 'ratio', 12, now);
                setAt(comp, 'attack', 0, now);
                setAt(comp, 'release', 0.25, now);
                osc.connect(comp);
                comp.connect(ctx.destination);
                osc.start(0);
                ctx.oncomplete = (ev) => {
                    let s = 0;
                    const d = ev.renderedBuffer.getChannelData(0);
                    for (let i = 4500; i < 5e3; i++) s += Math.abs(d[i]);
                    comp.disconnect();
                    resolve(s.toString());
                };
                // broprint ignores the promise startRendering returns. Catching it only
                // keeps a rejected render from surfacing as an unhandled rejection.
                const p = ctx.startRendering();
                if (p && typeof p.catch === 'function') p.catch(reject);
            } catch (err) {
                reject(err);
            }
        });

    const build = async () => {
        const au = await race(audio());
        let cv = null;
        try {
            cv = canvas();
        } catch {}

        // Mirrors getCurrentBrowserFingerPrint() with its defaults: audio + canvas
        // when both work, canvas alone when audio fails, no id without a canvas.
        let nativeId;
        if (cv !== null)
            try {
                nativeId = String(cyrb53(au !== null ? window.btoa(au) + cv : cv, 0));
            } catch {}

        const payload = {};
        if (au !== null) payload.audio = au;
        if (cv !== null) payload.canvas = cv === UNSUPPORTED ? cv : await sha256(cv);

        // Capped well below the other arms: two signals, both already in A and B.
        let s = 0.2;
        if (payload.canvas && payload.canvas !== UNSUPPORTED) s += 0.3;
        if (Number(au) > 0) s += 0.1;
        return {
            payload,
            confident: Math.round(s * 100) / 100,
            nativeId
        };
    };

    let inflight = null;
    window.__bspdFpD = () => {
        if (!inflight) inflight = build().catch(() => ({
            payload: {},
            confident: 0
        }));
        return inflight;
    };
})();

/* ============================== collector E ============================== */
/**
 * Collector E - ClientJS 0.1.11 (testing/client.js), limited to the fields its
 * own getFingerprint() hashes. The bundled deployJava / swfobject code - most of
 * that file - is left out: it probes Java and Flash, which no current browser
 * has, and writes <applet>/<embed> tags into the page.
 *
 * Ported as-is, bugs included, so E stands for what ClientJS really sees. Most
 * visibly its timezone is a whole-hour UTC offset: it flips with daylight
 * saving, and half-hour zones come out mangled - India is "+.5". The union Y
 * skips that field and keeps B's IANA zone instead.
 *
 * Two deliberate deviations, both in how fonts are measured, neither in what:
 *  - ClientJS appends its probe span to the host page's <body>. Here the same
 *    measurement runs in a blank iframe. On a storefront the theme's CSS would
 *    leak into the widths, so one device could fingerprint differently on two
 *    shops - the exact comparison this experiment exists for.
 *  - The 693 measurements run in slices with a yield between them. In one go
 *    they held the main thread for ~90ms, delaying the merchant's UI and
 *    starving the other collectors' timers.
 *
 * `nativeId` is ClientJS's own id (murmurhash3_32_gc, seed 256, over its own
 * concatenation) so E can be compared with the real library. That id is only 32
 * bits: the odds of two unrelated devices sharing it pass 50% at ~77,000
 * devices. The payload hash is SHA-256 like every other arm.
 */
(() => {
    const safe = (f, d = null) => {
        try {
            const v = f();
            return v === undefined ? d : v;
        } catch {
            return d;
        }
    };

    const sha256 = async (s) => {
        const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
        return [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, '0')).join('');
    };

    // murmurhash3_32_gc, verbatim from ClientJS.
    const murmur = function(e, t) {
        var i, n, r, a, o, s, l, u;
        for (
            i = 3 & e.length,
            n = e.length - i,
            r = t,
            o = 3432918353,
            s = 461845907,
            u = 0; u < n;

        )
            (l =
                (255 & e.charCodeAt(u)) |
                ((255 & e.charCodeAt(++u)) << 8) |
                ((255 & e.charCodeAt(++u)) << 16) |
                ((255 & e.charCodeAt(++u)) << 24)),
            ++u,
            (r =
                27492 +
                (65535 &
                    (a =
                        (5 *
                            (65535 &
                                (r =
                                    ((r ^= l =
                                            ((65535 &
                                                    (l =
                                                        ((l =
                                                                ((65535 & l) * o +
                                                                    ((((l >>> 16) * o) & 65535) << 16)) &
                                                                4294967295) <<
                                                            15) |
                                                        (l >>> 17))) *
                                                s +
                                                ((((l >>> 16) * s) & 65535) << 16)) &
                                            4294967295) <<
                                        13) |
                                    (r >>> 19))) +
                            (((5 * (r >>> 16)) & 65535) << 16)) &
                        4294967295)) +
                (((58964 + (a >>> 16)) & 65535) << 16));
        switch (((l = 0), i)) {
            case 3:
                l ^= (255 & e.charCodeAt(u + 2)) << 16;
            case 2:
                l ^= (255 & e.charCodeAt(u + 1)) << 8;
            case 1:
                r ^= l =
                    ((65535 &
                            (l =
                                ((l =
                                        ((65535 & (l ^= 255 & e.charCodeAt(u))) * o +
                                            ((((l >>> 16) * o) & 65535) << 16)) &
                                        4294967295) <<
                                    15) |
                                (l >>> 17))) *
                        s +
                        ((((l >>> 16) * s) & 65535) << 16)) &
                    4294967295;
        }
        return (
            (r ^= e.length),
            (r =
                (2246822507 * (65535 & (r ^= r >>> 16)) +
                    (((2246822507 * (r >>> 16)) & 65535) << 16)) &
                4294967295),
            (r =
                (3266489909 * (65535 & (r ^= r >>> 13)) +
                    (((3266489909 * (r >>> 16)) & 65535) << 16)) &
                4294967295),
            (r ^= r >>> 16) >>> 0
        );
    };

    // ClientJS's list, verbatim. Order matters: see the note in fonts().
    const FONTS = [
        'Abadi MT Condensed Light',
        'Adobe Fangsong Std',
        'Adobe Hebrew',
        'Adobe Ming Std',
        'Agency FB',
        'Aharoni',
        'Andalus',
        'Angsana New',
        'AngsanaUPC',
        'Aparajita',
        'Arab',
        'Arabic Transparent',
        'Arabic Typesetting',
        'Arial Baltic',
        'Arial Black',
        'Arial CE',
        'Arial CYR',
        'Arial Greek',
        'Arial TUR',
        'Arial',
        'Batang',
        'BatangChe',
        'Bauhaus 93',
        'Bell MT',
        'Bitstream Vera Serif',
        'Bodoni MT',
        'Bookman Old Style',
        'Braggadocio',
        'Broadway',
        'Browallia New',
        'BrowalliaUPC',
        'Calibri Light',
        'Calibri',
        'Californian FB',
        'Cambria Math',
        'Cambria',
        'Candara',
        'Castellar',
        'Casual',
        'Centaur',
        'Century Gothic',
        'Chalkduster',
        'Colonna MT',
        'Comic Sans MS',
        'Consolas',
        'Constantia',
        'Copperplate Gothic Light',
        'Corbel',
        'Cordia New',
        'CordiaUPC',
        'Courier New Baltic',
        'Courier New CE',
        'Courier New CYR',
        'Courier New Greek',
        'Courier New TUR',
        'Courier New',
        'DFKai-SB',
        'DaunPenh',
        'David',
        'DejaVu LGC Sans Mono',
        'Desdemona',
        'DilleniaUPC',
        'DokChampa',
        'Dotum',
        'DotumChe',
        'Ebrima',
        'Engravers MT',
        'Eras Bold ITC',
        'Estrangelo Edessa',
        'EucrosiaUPC',
        'Euphemia',
        'Eurostile',
        'FangSong',
        'Forte',
        'FrankRuehl',
        'Franklin Gothic Heavy',
        'Franklin Gothic Medium',
        'FreesiaUPC',
        'French Script MT',
        'Gabriola',
        'Gautami',
        'Georgia',
        'Gigi',
        'Gisha',
        'Goudy Old Style',
        'Gulim',
        'GulimChe',
        'GungSeo',
        'Gungsuh',
        'GungsuhChe',
        'Haettenschweiler',
        'Harrington',
        'Hei S',
        'HeiT',
        'Heisei Kaku Gothic',
        'Hiragino Sans GB',
        'Impact',
        'Informal Roman',
        'IrisUPC',
        'Iskoola Pota',
        'JasmineUPC',
        'KacstOne',
        'KaiTi',
        'Kalinga',
        'Kartika',
        'Khmer UI',
        'Kino MT',
        'KodchiangUPC',
        'Kokila',
        'Kozuka Gothic Pr6N',
        'Lao UI',
        'Latha',
        'Leelawadee',
        'Levenim MT',
        'LilyUPC',
        'Lohit Gujarati',
        'Loma',
        'Lucida Bright',
        'Lucida Console',
        'Lucida Fax',
        'Lucida Sans Unicode',
        'MS Gothic',
        'MS Mincho',
        'MS PGothic',
        'MS PMincho',
        'MS Reference Sans Serif',
        'MS UI Gothic',
        'MV Boli',
        'Magneto',
        'Malgun Gothic',
        'Mangal',
        'Marlett',
        'Matura MT Script Capitals',
        'Meiryo UI',
        'Meiryo',
        'Menlo',
        'Microsoft Himalaya',
        'Microsoft JhengHei',
        'Microsoft New Tai Lue',
        'Microsoft PhagsPa',
        'Microsoft Sans Serif',
        'Microsoft Tai Le',
        'Microsoft Uighur',
        'Microsoft YaHei',
        'Microsoft Yi Baiti',
        'MingLiU',
        'MingLiU-ExtB',
        'MingLiU_HKSCS',
        'MingLiU_HKSCS-ExtB',
        'Miriam Fixed',
        'Miriam',
        'Mongolian Baiti',
        'MoolBoran',
        'NSimSun',
        'Narkisim',
        'News Gothic MT',
        'Niagara Solid',
        'Nyala',
        'PMingLiU',
        'PMingLiU-ExtB',
        'Palace Script MT',
        'Palatino Linotype',
        'Papyrus',
        'Perpetua',
        'Plantagenet Cherokee',
        'Playbill',
        'Prelude Bold',
        'Prelude Condensed Bold',
        'Prelude Condensed Medium',
        'Prelude Medium',
        'PreludeCompressedWGL Black',
        'PreludeCompressedWGL Bold',
        'PreludeCompressedWGL Light',
        'PreludeCompressedWGL Medium',
        'PreludeCondensedWGL Black',
        'PreludeCondensedWGL Bold',
        'PreludeCondensedWGL Light',
        'PreludeCondensedWGL Medium',
        'PreludeWGL Black',
        'PreludeWGL Bold',
        'PreludeWGL Light',
        'PreludeWGL Medium',
        'Raavi',
        'Rachana',
        'Rockwell',
        'Rod',
        'Sakkal Majalla',
        'Sawasdee',
        'Script MT Bold',
        'Segoe Print',
        'Segoe Script',
        'Segoe UI Light',
        'Segoe UI Semibold',
        'Segoe UI Symbol',
        'Segoe UI',
        'Shonar Bangla',
        'Showcard Gothic',
        'Shruti',
        'SimHei',
        'SimSun',
        'SimSun-ExtB',
        'Simplified Arabic Fixed',
        'Simplified Arabic',
        'Snap ITC',
        'Sylfaen',
        'Symbol',
        'Tahoma',
        'Times New Roman Baltic',
        'Times New Roman CE',
        'Times New Roman CYR',
        'Times New Roman Greek',
        'Times New Roman TUR',
        'Times New Roman',
        'TlwgMono',
        'Traditional Arabic',
        'Trebuchet MS',
        'Tunga',
        'Tw Cen MT Condensed Extra Bold',
        'Ubuntu',
        'Umpush',
        'Univers',
        'Utopia',
        'Utsaah',
        'Vani',
        'Verdana',
        'Vijaya',
        'Vladimir Script',
        'Vrinda',
        'Webdings',
        'Wide Latin',
        'Wingdings',
    ];

    const BASE = ['monospace', 'sans-serif', 'serif'];
    const SLICE = 40;

    const ua = () => {
        const u = navigator.userAgent || '';
        // ua-parser-js (inside ClientJS) trims and truncates UAs over 255 chars.
        return u.length > 255 ? u.trim().substring(0, 255) : u;
    };

    const screenPrint = () =>
        'Current Resolution: ' +
        screen.width +
        'x' +
        screen.height +
        ', Available Resolution: ' +
        screen.availWidth +
        'x' +
        screen.availHeight +
        ', Color Depth: ' +
        screen.colorDepth +
        ', Device XDPI: ' +
        screen.deviceXDPI +
        ', Device YDPI: ' +
        screen.deviceYDPI;

    const plugins = () => {
        let e = '';
        for (let t = 0; t < navigator.plugins.length; t++)
            e += t == navigator.plugins.length - 1 ? navigator.plugins[t].name : navigator.plugins[t].name + ', ';
        return e;
    };

    // ClientJS's detector: same span, probe string and unquoted `font,base` family,
    // in the same order. When a family string is invalid the assignment is
    // silently ignored and the previous font carries over, exactly as in ClientJS;
    // the span keeps its style across the yields, so slicing preserves that too.
    const fonts = async () => {
        const host = document.createElement('div');
        host.setAttribute('aria-hidden', 'true');
        host.style.cssText = 'position:absolute;left:-9999px;top:0;width:0;height:0;overflow:hidden;visibility:hidden';
        try {
            (document.body || document.documentElement).appendChild(host);
            const fr = document.createElement('iframe');
            fr.tabIndex = -1;
            fr.style.cssText = 'width:1200px;height:300px;border:0';
            host.appendChild(fr);
            let doc = safe(() => fr.contentDocument);
            if (doc) {
                doc.open();
                doc.write('<!doctype html><html><head></head><body></body></html>');
                doc.close();
            }
            if (!doc || !doc.body) doc = document;
            const body = doc.body;
            const span = doc.createElement('span');
            span.style.fontSize = '72px';
            span.innerHTML = 'mmmmmmmmmmlli';
            const w = {};
            const h = {};
            for (const b of BASE) {
                span.style.fontFamily = b;
                body.appendChild(span);
                w[b] = span.offsetWidth;
                h[b] = span.offsetHeight;
                body.removeChild(span);
            }
            const detect = (f) => {
                let hit = false;
                for (const b of BASE) {
                    span.style.fontFamily = f + ',' + b;
                    body.appendChild(span);
                    const d = span.offsetWidth != w[b] || span.offsetHeight != h[b];
                    body.removeChild(span);
                    hit = hit || d;
                }
                return hit;
            };
            let t = '';
            for (let i = 0; i < FONTS.length; i++) {
                if (i && i % SLICE === 0) await new Promise((r) => setTimeout(r, 0));
                if (detect(FONTS[i])) t += i == FONTS.length - 1 ? FONTS[i] : FONTS[i] + ', ';
            }
            return t;
        } finally {
            host.remove();
        }
    };

    const isLocalStorage = () => {
        try {
            return !!window.localStorage;
        } catch {
            return true;
        }
    };

    const isSessionStorage = () => {
        try {
            return !!window.sessionStorage;
        } catch {
            return true;
        }
    };

    const isCookie = () => navigator.cookieEnabled;

    // Verbatim, coercions included: the string is compared to 0 numerically, and
    // the ('0' + t).slice(-2) padding is what turns India's 5.5 into ".5".
    const timeZone = () => {
        let t;
        const e = new Date();
        return (t = String(-e.getTimezoneOffset() / 60)) < 0 ?
            '-' + ('0' + (t *= -1)).slice(-2) :
            '+' + ('0' + t).slice(-2);
    };

    const language = () => navigator.language;

    const systemLanguage = () => navigator.systemLanguage || window.navigator.language;

    const canvasPrint = () => {
        let e;
        const t = document.createElement('canvas');
        try {
            e = t.getContext('2d');
        } catch {
            return '';
        }
        const i = 'ClientJS,org <canvas> 1.0';
        e.textBaseline = 'top';
        e.font = "14px 'Arial'";
        e.textBaseline = 'alphabetic';
        e.fillStyle = '#f60';
        e.fillRect(125, 1, 62, 20);
        e.fillStyle = '#069';
        e.fillText(i, 2, 15);
        e.fillStyle = 'rgba(102, 204, 0, 0.7)';
        e.fillText(i, 4, 17);
        return t.toDataURL();
    };

    // The order ClientJS's getFingerprint() concatenates in.
    const FIELDS = [
        ['userAgent', ua],
        ['screenPrint', screenPrint],
        ['plugins', plugins],
        ['fonts', fonts],
        ['localStorage', isLocalStorage],
        ['sessionStorage', isSessionStorage],
        ['timeZone', timeZone],
        ['language', language],
        ['systemLanguage', systemLanguage],
        ['cookie', isCookie],
        ['canvas', canvasPrint],
    ];

    // Approximate default-install sets for the fonts in ClientJS's list. A font
    // that ships with the OS tells two machines apart no better than the OS does,
    // so only fonts outside these sets earn confidence (same rule as B).
    const STOCK_WIN = new Set([
        'Arial', 'Arial Baltic', 'Arial Black', 'Arial CE', 'Arial CYR', 'Arial Greek', 'Arial TUR',
        'Calibri', 'Calibri Light', 'Cambria', 'Cambria Math', 'Candara', 'Comic Sans MS', 'Consolas',
        'Constantia', 'Corbel', 'Courier New', 'Courier New Baltic', 'Courier New CE', 'Courier New CYR',
        'Courier New Greek', 'Courier New TUR', 'Ebrima', 'Franklin Gothic Medium', 'Gabriola', 'Georgia',
        'Impact', 'Lucida Console', 'Lucida Sans Unicode', 'MS Gothic', 'MS PGothic', 'MS UI Gothic',
        'MV Boli', 'Malgun Gothic', 'Marlett', 'Microsoft Himalaya', 'Microsoft JhengHei',
        'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Sans Serif', 'Microsoft Tai Le',
        'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU-ExtB', 'MingLiU_HKSCS-ExtB', 'Mongolian Baiti',
        'NSimSun', 'PMingLiU-ExtB', 'Palatino Linotype', 'Segoe Print', 'Segoe Script', 'Segoe UI',
        'Segoe UI Light', 'Segoe UI Semibold', 'Segoe UI Symbol', 'SimSun', 'SimSun-ExtB', 'Sylfaen',
        'Symbol', 'Tahoma', 'Times New Roman', 'Times New Roman Baltic', 'Times New Roman CE',
        'Times New Roman CYR', 'Times New Roman Greek', 'Times New Roman TUR', 'Trebuchet MS', 'Verdana',
        'Webdings', 'Wingdings',
    ]);
    const STOCK_MAC = new Set([
        'Arial', 'Arial Black', 'Chalkduster', 'Comic Sans MS', 'Courier New', 'Georgia', 'Hiragino Sans GB',
        'Impact', 'Menlo', 'Microsoft Sans Serif', 'Papyrus', 'Plantagenet Cherokee', 'Symbol', 'Tahoma',
        'Times New Roman', 'Trebuchet MS', 'Verdana', 'Webdings', 'Wingdings',
    ]);
    const STOCK_LINUX = new Set(['DejaVu LGC Sans Mono', 'KacstOne', 'Loma', 'Sawasdee', 'TlwgMono', 'Ubuntu', 'Umpush']);

    const score = (p) => {
        const plat = String(navigator.platform || '');
        const stock = /^Win/.test(plat) ?
            STOCK_WIN :
            /^(Mac|iPhone|iPad|iPod)/.test(plat) ?
            STOCK_MAC :
            /Linux/.test(plat) ?
            STOCK_LINUX :
            new Set([...STOCK_WIN, ...STOCK_MAC, ...STOCK_LINUX]);
        const own = String(p.fonts || '')
            .split(', ')
            .filter((f) => f && !stock.has(f));
        let s = 0.3;
        if (p.canvas) s += 0.2;
        // The extended font list is the one signal E adds over A/B/C.
        if (own.length >= 3) s += 0.25;
        const m = /Current Resolution: (\S+), Available Resolution: (\S+),/.exec(p.screenPrint || '');
        if (m && m[1] !== m[2]) s += 0.05; // a taskbar or dock takes real space
        return Math.round(Math.min(s, 1) * 100) / 100;
    };

    const build = async () => {
        const raw = {};
        for (const [k, f] of FIELDS) {
            let v;
            try {
                v = await f();
            } catch {}
            if (v !== undefined) raw[k] = v;
        }

        // ClientJS throws if any one field throws, so it has an id only when every
        // field resolved. Values join exactly as its `a + '|' + b ...` chain does.
        let nativeId;
        if (FIELDS.every(([k]) => k in raw)) nativeId = String(murmur(FIELDS.map(([k]) => raw[k]).join('|'), 256));

        const payload = {};
        for (const [k] of FIELDS)
            if (k in raw) payload[k] = raw[k];
        if (payload.canvas) payload.canvas = await sha256(payload.canvas);
        return {
            payload,
            confident: score(payload),
            nativeId
        };
    };

    let inflight = null;
    window.__bspdFpE = () => {
        if (!inflight) inflight = build().catch(() => ({
            payload: {},
            confident: 0
        }));
        return inflight;
    };
})();

/* ================================ harness ================================ */
/**
 * A/B/C/D/E fingerprint experiment harness.
 *
 * Wraps - does not touch - the fingerprint built by `user-id`. That one is
 * logic A and is what actually identifies people today; its hash, payload and
 * `confident` flag come back byte-identical, so `syncBrowserFingerprint` keeps
 * writing exactly the rows it writes now and the stored payload still
 * re-derives its own hash.
 *
 * Alongside it we run alternative collectors purely to measure which component
 * set produces the fewest colliding hashes:
 *   B - the FingerprintJS v4 component set
 *   C - the ThumbmarkJS component set
 *   D - broprint.js
 *   E - ClientJS
 *   combined - the de-duplicated union of A, B and C ("X" on the wire)
 *   Y        - the de-duplicated union of A, B, C, D and E
 *
 * Nothing here feeds identity resolution. Delete the `bspd-fp-experiment.js` script
 * tag in app-embed.liquid and every trace of the experiment disappears.
 */
(() => {
    // Outer safety net per collector. Must sit clearly above every collector's
    // own budget (1500ms): when the two were equal, a collector finishing near
    // its cap could lose the race by a few ms and vanish from that page load.
    const T = 2000;

    const safe = (f, d = null) => {
        try {
            const v = f();
            return v === undefined ? d : v;
        } catch {
            return d;
        }
    };

    const race = (p, d = null) =>
        Promise.race([Promise.resolve(p).catch(() => d), new Promise((r) => setTimeout(() => r(d), T))]);

    const sha256 = async (s) => {
        const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
        return [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, '0')).join('');
    };

    const round2 = (n) => Math.round(Math.max(0, Math.min(1, n)) * 100) / 100;

    /**
     * De-duplicated union of all three component sets.
     *
     * Written as an explicit key-by-key merge rather than a spread, because a
     * spread would silently keep three copies of everything the collectors have
     * in common (timezone, platform, colour depth...) and pad the hash with
     * repeated bits that add no entropy at all.
     *
     * Where two collectors measure the same thing the *same* way, the richest
     * one wins. Where they measure it *differently* - canvas is the clearest
     * case, B hashes one render and C hashes a 3-render majority vote - both are
     * kept under suffixed keys, because the two measurements fail on different
     * devices and that independence is the whole point of the union.
     */
    const combine = (a, b, c) => {
        const p = {};
        const put = (k, v) => {
            if (v !== undefined && v !== null) p[k] = v;
        };
        const sys = c.system || {};

        // Platform and browser identity.
        put('userAgentData', b.userAgentData);
        put('platform', b.platform ? ? sys.platform);
        put('vendor', b.vendor);
        put('vendorFlavors', b.vendorFlavors);
        put('family', a.f); // A only - UA-regex browser family
        put('browser', sys.browser); // C only - parsed name + version
        put('userAgent', sys.useragent); // C only
        put('productSub', sys.productSub); // C only
        put('product', sys.product); // C only
        put('mobile', sys.mobile); // C only
        put('osCpu', b.osCpu);
        put('cpuClass', b.cpuClass);
        put('architecture', b.architecture ? ? c.hardware ? .architecture);

        // Hardware.
        put('hardwareConcurrency', b.hardwareConcurrency);
        put('deviceMemory', b.deviceMemory);
        put('jsHeapSizeLimit', c.hardware ? .jsHeapSizeLimit); // C only
        put('touchSupport', b.touchSupport);

        // Display.
        put('screenResolution', b.screenResolution);
        put('screenSorted', a.s); // A only - rotation-safe WxH
        put('screenFrame', b.screenFrame);
        put('colorDepth', b.colorDepth);
        put('colorGamut', b.colorGamut);
        put('invertedColors', b.invertedColors);
        put('forcedColors', b.forcedColors);
        put('monochrome', b.monochrome);
        put('contrast', b.contrast);
        put('reducedMotion', b.reducedMotion);
        put('reducedTransparency', b.reducedTransparency);
        put('hdr', b.hdr);
        put('mediaMatches', c.screen ? .mediaMatches); // C only - wider MQ sweep

        // Locale.
        put('languages', b.languages);
        put('timezone', b.timezone);
        put('dateTimeLocale', b.dateTimeLocale);

        // Storage and API surface.
        put('sessionStorage', b.sessionStorage);
        put('localStorage', b.localStorage);
        put('indexedDB', b.indexedDB);
        put('openDatabase', b.openDatabase);
        put('cookiesEnabled', b.cookiesEnabled);
        put('pdfViewerEnabled', b.pdfViewerEnabled);
        put('plugins', b.plugins);

        // Rendering stacks. Both canvas measurements are kept on purpose.
        put('canvasB', b.canvas);
        put('canvasC', c.canvas ? .commonPixelsHash);
        put('canvasA', a.v); // A only - combined text+geometry render
        put('webGlBasics', b.webGlBasics);
        put('webGlExtensions', b.webGlExtensions);
        put('webGlPixels', c.webgl ? .commonPixelsHash); // C only - rendered scene
        put('videocard', c.hardware ? .videocard); // C only - masked vendor/renderer

        // Fonts. B is a presence list, C is a name -> width map: different data.
        put('fonts', b.fonts);
        put('fontWidths', c.fonts);
        put('fontPreferences', b.fontPreferences);

        // Audio.
        put('audio', b.audio ? ? c.audio ? .sampleHash);
        put('audioBaseLatency', b.audioBaseLatency);
        put('audioChannels', c.audio ? .maxChannels); // C only

        // Everything else.
        put('math', b.math); // B's 24 ops supersede C's 8
        put('domBlockers', b.domBlockers);
        put('applePay', b.applePay ? ? sys.applePayVersion);
        put('privateClickMeasurement', b.privateClickMeasurement);
        put('webrtc', c.webrtc); // C only
        put('speech', c.speech); // C only

        return p;
    };

    /**
     * Confidence of the union.
     *
     * Not a noisy-OR of B and C: they overlap heavily (both hash canvas, WebGL
     * and fonts, all of which collapse together on the same locked-down
     * devices), so treating them as independent would badly over-credit the
     * union. Take the better of the two, then only half the additional gain.
     * The bonus is reserved for signals genuinely independent of the graphics
     * stack, which are the ones that keep working where B and C both go flat.
     */
    const scoreCombined = (b, c, p) => {
        const hi = Math.max(b.confident, c.confident);
        const noisyOr = 1 - (1 - b.confident) * (1 - c.confident);
        let s = hi + 0.5 * (noisyOr - hi);
        if (p.webrtc) s += 0.04;
        if (p.speech) s += 0.03;
        return round2(s);
    };

    /**
     * Y: the union X already builds, plus only what D and E have that A/B/C lack.
     *
     * Left out on purpose: D's audio (the same number A and B already hold), E's
     * timezone (a DST-flipping whole-hour offset - B's IANA zone is already in),
     * and everything E derives from the UA string (C already carries the UA, and
     * a value computed from data already present adds nothing).
     */
    const combineAll = (a, b, c, d, e) => {
        const p = combine(a, b, c);
        const put = (k, v) => {
            if (v !== undefined && v !== null && v !== '') p[k] = v;
        };

        // Two more canvas renders. Same classic recipe as each other, different
        // strings; kept separately for the same reason X keeps canvasA/B/C.
        put('canvasD', d.canvas);
        put('canvasE', e.canvas);

        // E's detected fonts that neither B nor C detected - ClientJS's list is
        // 231 fonts, 186 of which no other collector probes.
        const seen = new Set([...(Array.isArray(b.fonts) ? b.fonts : []), ...Object.keys(c.fonts || {})]);
        const extra = String(e.fonts || '')
            .split(', ')
            .filter((f) => f && !seen.has(f));
        if (extra.length) p.fontsE = extra;

        // Available (not full) screen size: finer than B's screenFrame, which
        // rounds to 10px on purpose.
        const m = /Available Resolution: (\d+x\d+)/.exec(e.screenPrint || '');
        put('availResolution', m && m[1]);
        return p;
    };

    // Same shape as scoreCombined. D is left out of the noisy-OR: both of its
    // signals are already in A and B, so counting it again would only inflate Y.
    const scoreAll = (arms, p) => {
        const cs = arms.filter(Boolean).map((r) => r.confident);
        if (!cs.length) return 0;
        const hi = Math.max(...cs);
        const noisyOr = 1 - cs.reduce((m, c) => m * (1 - c), 1);
        let s = hi + 0.5 * (noisyOr - hi);
        if (p.webrtc) s += 0.04;
        if (p.speech) s += 0.03;
        if (p.fontsE && p.fontsE.length >= 3) s += 0.03;
        return round2(s);
    };

    const run = async (fn) => {
        if (typeof fn !== 'function') return null;
        const r = await race(fn());
        // An empty payload hashes to the same value on every device that produced
        // one, which would show up as one giant false collision. Treat it as absent.
        return r && r.payload && Object.keys(r.payload).length ? r : null;
    };

    const A = window.bspdFingerprint;
    if (typeof A !== 'function') return;

    let inflight = null;

    const build = async () => {
        const a = await A();

        // A decides whether there is a usable fingerprint at all. If it bailed
        // (no crypto.subtle) neither B nor C could hash either, so bail the same
        // way and leave every existing caller on its current code path.
        if (!a || !a.hash) return a;

        const [b, c, d, e] = await Promise.all([
            run(window.__bspdFpB),
            run(window.__bspdFpC),
            run(window.__bspdFpD),
            run(window.__bspdFpE),
        ]);
        const out = { ...a
        };

        if (b) {
            const hashB = await sha256(JSON.stringify(b.payload));
            out.B = {
                hash: hashB,
                confident: round2(b.confident),
                payload: b.payload,
            };
            out.hashB = hashB;
        }

        if (c) {
            const hashC = await sha256(JSON.stringify(c.payload));
            out.C = {
                hash: hashC,
                confident: round2(c.confident),
                payload: c.payload,
            };
            out.hashC = hashC;
        }

        // nativeId is the id the real library would have produced, for comparing
        // D and E against broprint / ClientJS themselves.
        if (d) {
            const hashD = await sha256(JSON.stringify(d.payload));
            out.D = {
                hash: hashD,
                confident: round2(d.confident),
                payload: d.payload,
                nativeId: d.nativeId,
            };
            out.hashD = hashD;
        }

        if (e) {
            const hashE = await sha256(JSON.stringify(e.payload));
            out.E = {
                hash: hashE,
                confident: round2(e.confident),
                payload: e.payload,
                nativeId: e.nativeId,
            };
            out.hashE = hashE;
        }

        if (b || c) {
            const payload = combine(a.payload || {}, b ? .payload || {}, c ? .payload || {});
            out.combined = {
                hash: await sha256(JSON.stringify(payload)),
                confident: scoreCombined(b || {
                    confident: 0
                }, c || {
                    confident: 0
                }, payload),
                payload,
            };
        }

        if (b || c || d || e) {
            const payload = combineAll(
                a.payload || {},
                b ? .payload || {},
                c ? .payload || {},
                d ? .payload || {},
                e ? .payload || {},
            );
            out.Y = {
                hash: await sha256(JSON.stringify(payload)),
                confident: scoreAll([b, c, e], payload),
                payload,
            };
        }

        return out;
    };

    window.bspdFingerprint = () => {
        // Any failure in the experiment falls back to plain A, so the worst case
        // here is the behaviour we already have in production.
        if (!inflight) inflight = build().catch(() => Promise.resolve(safe(A)).catch(() => null));
        return inflight;
    };
})();