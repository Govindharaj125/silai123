/*! blockify-fp v1.3.0 | MIT | window.Fingerprint */
"use strict";
var Fingerprint = (() => {
    var L = Object.defineProperty,
        at = Object.defineProperties,
        ct = Object.getOwnPropertyDescriptor,
        lt = Object.getOwnPropertyDescriptors,
        ut = Object.getOwnPropertyNames,
        pe = Object.getOwnPropertySymbols;
    var Ee = Object.prototype.hasOwnProperty,
        dt = Object.prototype.propertyIsEnumerable;
    var ge = (e, t, n) => t in e ? L(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n,
        R = (e, t) => {
            for (var n in t || (t = {})) Ee.call(t, n) && ge(e, n, t[n]);
            if (pe)
                for (var n of pe(t)) dt.call(t, n) && ge(e, n, t[n]);
            return e
        },
        k = (e, t) => at(e, lt(t));
    var ft = (e, t) => {
            for (var n in t) L(e, n, {
                get: t[n],
                enumerable: !0
            })
        },
        mt = (e, t, n, r) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let o of ut(t)) !Ee.call(e, o) && o !== n && L(e, o, {
                    get: () => t[o],
                    enumerable: !(r = ct(t, o)) || r.enumerable
                });
            return e
        };
    var _t = e => mt(L({}, "__esModule", {
        value: !0
    }), e);
    var dn = {};
    ft(dn, {
        FingerprintError: () => u,
        collect: () => cn,
        get: () => ln,
        ready: () => st,
        version: () => sn
    });
    var F = ["prefers-color-scheme: dark", "prefers-reduced-motion: reduce", "prefers-contrast: more", "dynamic-range: high", "forced-colors: active", "inverted-colors: inverted", "monochrome", "pointer: fine", "hover: hover", "any-pointer: coarse"];
    var U = ["notifications", "geolocation", "camera", "microphone", "midi", "clipboard-read"];
    var X = ["Arial", "Arial Black", "Arial Narrow", "Bookman Old Style", "Calibri", "Cambria", "Candara", "Century Gothic", "Comic Sans MS", "Consolas", "Constantia", "Corbel", "Courier New", "Franklin Gothic Medium", "Futura", "Garamond", "Geneva", "Georgia", "Gill Sans", "Helvetica", "Helvetica Neue", "Impact", "Lucida Console", "Lucida Grande", "Lucida Sans Unicode", "Menlo", "Monaco", "MS Gothic", "MS PGothic", "Optima", "Palatino", "Palatino Linotype", "Papyrus", "Perpetua", "Rockwell", "Segoe Print", "Segoe Script", "Segoe UI", "SF Pro Text", "Tahoma", "Times", "Times New Roman", "Trebuchet MS", "Verdana", "Wingdings"],
        b = ["monospace", "sans-serif", "serif"],
        V = "mmmmmmmmmmlli",
        W = "72px";
    var Y = ["MAX_TEXTURE_SIZE", "MAX_VIEWPORT_DIMS", "MAX_RENDERBUFFER_SIZE", "MAX_CUBE_MAP_TEXTURE_SIZE", "MAX_VERTEX_ATTRIBS", "MAX_VERTEX_UNIFORM_VECTORS", "MAX_FRAGMENT_UNIFORM_VECTORS", "MAX_VARYING_VECTORS", "MAX_TEXTURE_IMAGE_UNITS", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "ALIASED_LINE_WIDTH_RANGE", "ALIASED_POINT_SIZE_RANGE", "RED_BITS", "GREEN_BITS", "BLUE_BITS", "ALPHA_BITS", "DEPTH_BITS", "STENCIL_BITS", "VERSION", "SHADING_LANGUAGE_VERSION"],
        q = ["VERTEX_SHADER", "FRAGMENT_SHADER"],
        $ = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT"];
    var H = [
        ["acos", () => Math.acos(.123456789)],
        ["acosh", () => Math.acosh(1e300)],
        ["asin", () => Math.asin(.123456789)],
        ["asinh", () => Math.asinh(1)],
        ["atanh", () => Math.atanh(.5)],
        ["atan", () => Math.atan(.5)],
        ["cbrt", () => Math.cbrt(100)],
        ["cosh", () => Math.cosh(1)],
        ["expm1", () => Math.expm1(1)],
        ["log1p", () => Math.log1p(10)],
        ["sinh", () => Math.sinh(1)],
        ["tanh", () => Math.tanh(1)],
        ["exp", () => Math.exp(1)],
        ["pow", () => Math.pow(Math.PI, -100)]
    ];
    var pt = [
            ["#f2f", 40, 40],
            ["#2ff", 80, 40],
            ["#ff2", 60, 80]
        ],
        j = {
            width: 280,
            height: 60
        },
        Z = {
            width: 320,
            height: 70
        },
        K = "Blockify <canvas> 1.0 \u{1F600}";

    function z(e) {
        e.globalCompositeOperation = "multiply";
        for (let [t, n, r] of pt) e.fillStyle = t, e.beginPath(), e.arc(n, r, 40, 0, Math.PI * 2, !0), e.fill();
        e.fillStyle = "#f9c", e.arc(100, 50, 50, 0, Math.PI * 2, !0), e.fill("evenodd")
    }

    function Q(e) {
        e.textBaseline = "alphabetic", e.fillStyle = "#f60", e.fillRect(100, 1, 62, 20), e.fillStyle = "#069", e.font = "11pt no-real-font-123", e.fillText(K, 2, 15), e.fillStyle = "rgba(102, 204, 0, 0.7)", e.font = "18pt Arial", e.fillText(K, 4, 45)
    }
    var y = {
            channels: 1,
            length: 44100,
            sampleRate: 44100
        },
        C = {
            type: "triangle",
            frequency: 1e4
        },
        I = {
            threshold: -50,
            knee: 40,
            ratio: 12,
            attack: 0,
            release: .25
        },
        v = {
            start: 4500,
            end: 5e3
        };
    var Se = "v1";
    async function Ie() {
        try {
            let e = window.OfflineAudioContext || window.webkitOfflineAudioContext;
            if (!e) return "";
            let t = new e(y.channels, y.length, y.sampleRate),
                n = t.createOscillator();
            n.type = C.type, n.frequency.value = C.frequency;
            let r = t.createDynamicsCompressor();
            r.threshold.value = I.threshold, r.knee.value = I.knee, r.ratio.value = I.ratio, r.attack.value = I.attack, r.release.value = I.release, n.connect(r), r.connect(t.destination), n.start(0);
            let i = (await t.startRendering()).getChannelData(0),
                a = 0;
            for (let s = v.start; s < v.end; s++) a += Math.abs(i[s]);
            return String(a)
        } catch (e) {
            return ""
        }
    }

    function Ae(e, t) {
        try {
            let n = document.createElement("canvas");
            n.width = e.width, n.height = e.height;
            let r = n.getContext("2d");
            return r ? (t(r), n.toDataURL()) : ""
        } catch (n) {
            return ""
        }
    }

    function he() {
        return {
            canvas: Ae(j, z),
            canvasText: Ae(Z, Q)
        }
    }

    function Te() {
        var t;
        let e = null;
        try {
            let n = (t = document.body) != null ? t : document.documentElement;
            if (!n) return [];
            e = document.createElement("span"), e.style.cssText = "position:absolute;left:-9999px;top:-9999px;font-size:" + W, e.textContent = V, n.appendChild(e);
            let r = {};
            for (let i of b) e.style.fontFamily = i, r[i] = [e.offsetWidth, e.offsetHeight];
            let o = [];
            for (let i of X) b.some(s => {
                e.style.fontFamily = `'${i}',${s}`;
                let [c, l] = r[s];
                return e.offsetWidth !== c || e.offsetHeight !== l
            }) && o.push(i);
            return o
        } catch (n) {
            return []
        } finally {
            e == null || e.remove()
        }
    }

    function Re() {
        try {
            return window.matchMedia ? F.map(e => `${e}=${window.matchMedia(`(${e})`).matches}`) : []
        } catch (e) {
            return []
        }
    }

    function ye() {
        return H.map(([e, t]) => {
            try {
                return `${e}=${t()}`
            } catch (n) {
                return `${e}=err`
            }
        })
    }

    function J() {
        var e, t, n, r, o, i, a;
        try {
            let s = navigator.userAgentData;
            if ((e = s == null ? void 0 : s.brands) != null && e.length) {
                let T = s.brands.filter(h => !/not.a.brand/i.test(h.brand)),
                    g = (n = (t = T.find(h => h.brand !== "Chromium")) != null ? t : T[0]) != null ? n : s.brands[0];
                return {
                    family: (r = g == null ? void 0 : g.brand) != null ? r : "",
                    version: String((g == null ? void 0 : g.version) || ""),
                    platform: s.platform || ""
                }
            }
            let c = navigator.userAgent,
                l = /(Firefox)\/([\d.]+)/.exec(c) || /(Edg)\/([\d.]+)/.exec(c) || /(Chrome)\/([\d.]+)/.exec(c) || /Version\/([\d.]+).*(Safari)/.exec(c);
            if (!l) return {
                family: "",
                version: "",
                platform: navigator.platform || ""
            };
            let _ = l[2] === "Safari" ? "Safari" : (o = l[1]) != null ? o : "",
                S = l[2] === "Safari" ? (i = l[1]) != null ? i : "" : (a = l[2]) != null ? a : "";
            return {
                family: _,
                version: S,
                platform: navigator.platform || ""
            }
        } catch (s) {
            return {
                family: "",
                version: "",
                platform: ""
            }
        }
    }

    function Oe(e) {
        return typeof e == "number" && isFinite(e) ? e : 0
    }

    function we() {
        let e = J(),
            t = [];
        try {
            t = Array.from(navigator.languages || [])
        } catch (n) {}
        return {
            uaFamily: e.family,
            uaVersion: e.version,
            platform: e.platform,
            languages: t,
            hardwareConcurrency: Oe(navigator.hardwareConcurrency),
            deviceMemory: Oe(navigator.deviceMemory),
            maxTouchPoints: "maxTouchPoints" in navigator ? navigator.maxTouchPoints : null
        }
    }
    async function Me() {
        var e;
        try {
            return (e = navigator.permissions) != null && e.query ? (await Promise.all(U.map(async n => {
                try {
                    let r = await navigator.permissions.query({
                        name: n
                    });
                    return `${n}=${r.state}`
                } catch (r) {
                    return ""
                }
            }))).filter(Boolean) : []
        } catch (t) {
            return []
        }
    }

    function Ne() {
        try {
            let e = [];
            for (let t of Array.from(navigator.plugins || [])) {
                let n = Array.from(t, r => `${r.type}:${r.suffixes}`).join(";");
                e.push(`${t.name}|${t.filename}|${n}`)
            }
            return e
        } catch (e) {
            return []
        }
    }

    function D(e) {
        return typeof e == "number" && isFinite(e) ? e : 0
    }

    function Pe() {
        var e, t, n;
        try {
            return {
                screen: {
                    width: D((e = window.screen) == null ? void 0 : e.width),
                    height: D((t = window.screen) == null ? void 0 : t.height),
                    dpr: D(window.devicePixelRatio)
                },
                colorDepth: D((n = window.screen) == null ? void 0 : n.colorDepth)
            }
        } catch (r) {
            return {
                screen: {
                    width: 0,
                    height: 0,
                    dpr: 0
                },
                colorDepth: 0
            }
        }
    }

    function xe() {
        try {
            return Intl.DateTimeFormat().resolvedOptions().timeZone || ""
        } catch (e) {
            return ""
        }
    }
    var ee = null;

    function Le() {
        return ee || (ee = gt()), ee
    }

    function gt() {
        let e;
        try {
            e = window.speechSynthesis
        } catch (r) {
            return Promise.resolve([])
        }
        if (!e) return Promise.resolve([]);
        let t = () => {
                try {
                    return (e.getVoices() || []).map(r => `${r.name}|${r.lang}|${r.default}`)
                } catch (r) {
                    return []
                }
            },
            n = t();
        return n.length ? Promise.resolve(n) : new Promise(r => {
            let o = !1,
                i = () => {
                    if (!o) {
                        o = !0, clearTimeout(a);
                        try {
                            e.removeEventListener("voiceschanged", i)
                        } catch (s) {}
                        r(t())
                    }
                },
                a = setTimeout(i, 350);
            try {
                e.addEventListener("voiceschanged", i, {
                    once: !0
                })
            } catch (s) {
                i()
            }
        })
    }

    function Et() {
        var e;
        try {
            let t = document.createElement("canvas");
            return (e = t.getContext("webgl") || t.getContext("experimental-webgl")) != null ? e : null
        } catch (t) {
            return null
        }
    }

    function St(e) {
        if (!e) return {
            renderer: "",
            vendor: ""
        };
        try {
            let t = e.getExtension("WEBGL_debug_renderer_info");
            return t ? {
                renderer: String(e.getParameter(t.UNMASKED_RENDERER_WEBGL) || ""),
                vendor: String(e.getParameter(t.UNMASKED_VENDOR_WEBGL) || "")
            } : {
                renderer: "",
                vendor: ""
            }
        } catch (t) {
            return {
                renderer: "",
                vendor: ""
            }
        }
    }

    function It(e) {
        if (!e) return "";
        try {
            let t = [];
            for (let r of Y)
                if (r in e) try {
                    let o = e.getParameter(e[r]);
                    t.push(`${r}=${ArrayBuffer.isView(o)?Array.from(o).join(","):o}`)
                } catch (o) {}
            let n = e.getSupportedExtensions() || [];
            t.push(`EXT=${n.slice().sort().join(",")}`);
            for (let r of q)
                for (let o of $) {
                    let i = e.getShaderPrecisionFormat(e[r], e[o]);
                    i && t.push(`${r}.${o}=${i.rangeMin},${i.rangeMax},${i.precision}`)
                }
            return t.join(`
`)
        } catch (t) {
            return ""
        }
    }

    function be() {
        var o;
        let e = Et(),
            {
                renderer: t,
                vendor: n
            } = St(e),
            r = {
                webgl: It(e),
                webglRenderer: t,
                webglVendor: n
            };
        try {
            (o = e == null ? void 0 : e.getExtension("WEBGL_lose_context")) == null || o.loseContext()
        } catch (i) {}
        return r
    }
    var Ce = ["canvas", "canvasText", "webgl", "webglRenderer", "webglVendor", "audio", "math", "voices", "fonts", "plugins", "matchMedia", "permissions", "screen", "uaFamily", "uaVersion", "platform", "timezone", "languages", "hardwareConcurrency", "deviceMemory", "colorDepth", "maxTouchPoints"];

    function O(e, t, n) {
        return new Promise(r => {
            let o = !1,
                i = s => {
                    o || (o = !0, clearTimeout(a), r(s))
                },
                a = setTimeout(() => i(n), t);
            e.then(s => i(s), () => i(n))
        })
    }
    var ht = 300,
        Tt = 450;

    function ve(e) {
        switch (e) {
            case "math":
            case "voices":
            case "fonts":
            case "plugins":
            case "matchMedia":
            case "permissions":
            case "languages":
                return [];
            case "screen":
                return {
                    width: 0,
                    height: 0,
                    dpr: 0
                };
            case "hardwareConcurrency":
            case "deviceMemory":
            case "colorDepth":
                return 0;
            case "maxTouchPoints":
                return null;
            default:
                return ""
        }
    }
    var Rt = [{
        owns: ["canvas", "canvasText"],
        run: he
    }, {
        owns: ["webgl", "webglRenderer", "webglVendor"],
        run: be
    }, {
        owns: ["fonts"],
        run: () => ({
            fonts: Te()
        })
    }, {
        owns: ["math"],
        run: () => ({
            math: ye()
        })
    }, {
        owns: ["matchMedia"],
        run: () => ({
            matchMedia: Re()
        })
    }, {
        owns: ["plugins"],
        run: () => ({
            plugins: Ne()
        })
    }, {
        owns: ["uaFamily", "uaVersion", "platform", "languages", "hardwareConcurrency", "deviceMemory", "maxTouchPoints"],
        run: we
    }, {
        owns: ["screen", "colorDepth"],
        run: Pe
    }, {
        owns: ["timezone"],
        run: () => ({
            timezone: xe()
        })
    }, {
        owns: ["audio"],
        run: async () => ({
            audio: await Ie()
        })
    }, {
        owns: ["voices"],
        timeoutMs: 350,
        run: async () => ({
            voices: await Le()
        })
    }, {
        owns: ["permissions"],
        run: async () => ({
            permissions: await Me()
        })
    }];

    function yt(e) {
        let t = {};
        for (let n of e) t[n] = ve(n);
        return t
    }

    function Ot(e, t) {
        var i;
        let n = yt(e.owns),
            r = Math.min((i = e.timeoutMs) != null ? i : ht, t),
            o;
        try {
            o = Promise.resolve(e.run())
        } catch (a) {
            return Promise.resolve(n)
        }
        return O(o, r, n).then(a => a != null ? a : n)
    }
    async function te() {
        let e = {},
            t = await Promise.all(Rt.map(r => Ot(r, Tt)));
        for (let r of t) Object.assign(e, r);
        let n = {};
        for (let r of Ce) n[r] = e[r] !== void 0 ? e[r] : ve(r);
        return n
    }
    var wt = ["_Selenium_IDE_Recorder", "_selenium", "calledSelenium", "__selenium_evaluate", "__selenium_unwrapped", "__webdriver_evaluate", "__webdriver_script_fn", "__webdriver_script_func", "__webdriver_unwrapped", "__driver_evaluate", "__driver_unwrapped", "__fxdriver_evaluate", "__fxdriver_unwrapped", "_WEBDRIVER_ELEM_CACHE", "__lastWatirAlert", "__lastWatirConfirm", "__lastWatirPrompt", "domAutomation", "domAutomationController", "callPhantom", "_phantom", "__phantomas", "__nightmare", "awesomium", "RunPerfTest", "CefSharp", "fmget_targets", "wdioElectron", "__playwright__binding__", "__pwInitScripts", "__puppeteer_evaluation_script__"],
        Mt = [/^\$?cdc_/, /^[a-z]{3}_[a-zA-Z0-9]{22}_(Array|Promise|Symbol)$/],
        Nt = ["selenium", "webdriver", "driver"],
        De = 150,
        Pt = 150;

    function m(e) {
        try {
            return e()
        } catch (t) {
            return
        }
    }

    function xt() {
        var t;
        let e = new Set;
        for (let n of wt) m(() => n in window || n in document) && e.add(n);
        for (let n of [window, document])
            for (let r of (t = m(() => Object.getOwnPropertyNames(n))) != null ? t : []) Mt.some(o => o.test(r)) && e.add(r);
        return Array.from(e)
    }

    function Lt() {
        var t;
        return ((t = m(() => document.documentElement.getAttributeNames())) != null ? t : []).filter(n => Nt.includes(n))
    }

    function bt() {
        let e = m(() => {
            var t;
            return (t = navigator.permissions) == null ? void 0 : t.query({
                name: "notifications"
            }).then(n => n.state)
        });
        return e ? O(e, Pt, void 0) : Promise.resolve(void 0)
    }
    var ne = null;

    function Ct() {
        return ne || (ne = O(vt(), De, void 0)), ne
    }

    function vt() {
        return new Promise(e => {
            let t, n = "",
                r = o => {
                    m(() => t == null ? void 0 : t.terminate()), n && m(() => URL.revokeObjectURL(n)), e(o)
                };
            try {
                if (typeof Worker != "function" || typeof Blob != "function") return r(void 0);
                let o = `var id=(${J.toString()})();postMessage({ua:navigator.userAgent,platform:id.platform,cores:navigator.hardwareConcurrency||0,languages:Array.from(navigator.languages||[])});`;
                n = URL.createObjectURL(new Blob([o], {
                    type: "text/javascript"
                })), t = new Worker(n), t.onmessage = i => r(i.data), t.onerror = () => r(void 0), setTimeout(() => r(void 0), De)
            } catch (o) {
                r(void 0)
            }
        })
    }
    async function Be() {
        let e = {};
        try {
            let t = m(() => navigator.webdriver);
            typeof t == "boolean" && (e.webdriver = t);
            let n = xt();
            n.length && (e.globals = n);
            let r = Lt();
            r.length && (e.htmlAttrs = r);
            let o = m(() => ({
                outerW: window.outerWidth,
                outerH: window.outerHeight,
                innerW: window.innerWidth,
                innerH: window.innerHeight,
                focus: document.hasFocus()
            }));
            o && (e.window = o);
            let i = m(() => {
                var S;
                return (S = navigator.connection) == null ? void 0 : S.rtt
            });
            typeof i == "number" && isFinite(i) && (e.rtt = i);
            let a = m(() => globalThis.eval.toString().length);
            a && (e.evalLength = a);
            let s = m(() => typeof Notification == "undefined" ? void 0 : Notification.permission);
            s && (e.notification = s);
            let c = m(() => navigator.appVersion);
            c && (e.appVersion = c);
            let [l, _] = await Promise.all([bt(), Ct()]);
            l && (e.notificationQuery = l), _ && (e.worker = _)
        } catch (t) {}
        return e
    }

    function Dt() {
        let e = typeof document != "undefined" ? document.currentScript : null,
            t = e && "src" in e ? e.src : "";
        if (!t) return {};
        try {
            let n = new URL(t).searchParams,
                r = {},
                o = n.get("key"),
                i = n.get("debug");
            return o && (r.key = o), i !== null && (r.debug = i !== "0" && i !== "false"), r
        } catch (n) {
            return {}
        }
    }

    function ke() {
        var e;
        try {
            let t = Dt(),
                n = typeof window != "undefined" && window.__FP_CONFIG__ || {};
            return Object.freeze({
                key: Ge(t.key) || Ge(n.key) || "",
                endpoint: "https://fingerprint.blockifyapp.com:8443/fp/api",
                debug: (e = t.debug) != null ? e : !!n.debug
            })
        } catch (t) {
            return Object.freeze({
                key: "",
                endpoint: "https://fingerprint.blockifyapp.com:8443/fp/api",
                debug: !1
            })
        }
    }

    function Ge(e) {
        return typeof e == "string" ? e : ""
    }
    var u = class e extends Error {
        constructor(t, n, r, o) {
            super(n), this.name = "FingerprintError", this.code = t, this.status = r, this.requestId = o, Object.setPrototypeOf(this, e.prototype)
        }
    };
    var Bt = /^[A-Za-z0-9\-_.:]*$/;

    function A(e, t) {
        return Bt.test(e) && p(e) <= t
    }
    var Gt = ["canvas", "canvasText", "webgl", "audio"],
        kt = ["webglRenderer", "webglVendor", "uaFamily", "uaVersion", "platform", "timezone"],
        Ft = ["math", "languages", "voices", "fonts", "plugins", "matchMedia", "permissions"],
        Ut = new TextEncoder;

    function p(e) {
        return Ut.encode(e).length
    }

    function E(e, t) {
        if (p(e) <= t) return e;
        let n = 0,
            r = e.length;
        for (; n < r;) {
            let i = Math.ceil((n + r) / 2);
            p(e.slice(0, i)) <= t ? n = i : r = i - 1
        }
        let o = e.slice(0, n);
        return /[\uD800-\uDBFF]$/.test(o) ? o.slice(0, -1) : o
    }

    function Xt(e) {
        return p(e) > 24576 ? "" : e
    }

    function Vt(e) {
        return p(e) > 256 ? "" : e
    }

    function Wt(e) {
        let t = [];
        for (let n of e) {
            if (t.length >= 256) break;
            p(n) <= 1024 && t.push(n)
        }
        return t
    }

    function w(e) {
        return p(e) > 256 ? "" : e
    }

    function Yt(e) {
        let t = R({}, e);
        for (let n of Gt) t[n] = Xt(e[n]);
        for (let n of kt) t[n] = Vt(e[n]);
        for (let n of Ft) t[n] = Wt(e[n]);
        return t
    }

    function re(e, t, n) {
        return e.slice(0, t).map(r => E(r, n))
    }

    function qt(e) {
        let t = R({}, e);
        e.globals && (t.globals = re(e.globals, 32, 64)), e.htmlAttrs && (t.htmlAttrs = re(e.htmlAttrs, 32, 64));
        for (let n of ["notification", "notificationQuery", "appVersion"]) {
            let r = e[n];
            r !== void 0 && (t[n] = E(r, 512))
        }
        return e.worker && (t.worker = k(R({}, e.worker), {
            ua: E(e.worker.ua, 512),
            platform: E(e.worker.platform, 512),
            languages: re(e.worker.languages, 16, 512)
        })), t
    }

    function Fe(e) {
        let t = k(R({}, e), {
            signals: Yt(e.signals),
            sessionId: A(e.sessionId, 128) ? e.sessionId : "",
            origin: E(e.origin, 2048),
            consentState: w(e.consentState),
            collector: {
                name: E(e.collector.name, 128),
                version: E(e.collector.version, 128),
                catalog: E(e.collector.catalog, 128)
            }
        });
        if (e.automation && (t.automation = qt(e.automation)), e.anchor) {
            let n = {};
            if (e.anchor.priorProfileId !== void 0) {
                let r = e.anchor.priorProfileId;
                A(r, 64) && (n.priorProfileId = r)
            }
            if (e.anchor.installId !== void 0) {
                let r = e.anchor.installId;
                A(r, 64) && (n.installId = r)
            }
            e.anchor.linkedId !== void 0 && (n.linkedId = w(e.anchor.linkedId)), e.anchor.tag !== void 0 && (n.tag = w(e.anchor.tag)), e.anchor.customerId !== void 0 && (n.customerId = w(e.anchor.customerId)), e.anchor.orderId !== void 0 && (n.orderId = w(e.anchor.orderId)), Object.keys(n).length > 0 ? t.anchor = n : delete t.anchor
        }
        return t
    }
    var $t = "blockify-fp",
        oe = "1.3.0";

    function Xe(e) {
        var i;
        let {
            options: t
        } = e, n = {};
        e.priorProfileId && (n.priorProfileId = e.priorProfileId), e.installId && !ie(t.consentState) && (n.installId = e.installId), t.linkedId && (n.linkedId = t.linkedId), t.tag && (n.tag = t.tag), t.customerId && (n.customerId = t.customerId), t.orderId && (n.orderId = t.orderId);
        let r = {
            signals: e.signals,
            sessionId: e.sessionId,
            collector: {
                name: $t,
                version: oe,
                catalog: Se
            },
            origin: e.origin,
            consentState: (i = t.consentState) != null ? i : ""
        };
        Object.keys(n).length > 0 && (r.anchor = n), e.automation && (r.automation = e.automation);
        let o = Fe(r);
        return o.automation && p(JSON.stringify(o)) > 65536 && delete o.automation, o
    }

    function ie(e) {
        let t = (e != null ? e : "").trim().toLowerCase();
        return t === "denied" || t === "none" || t === "rejected"
    }

    function Ve(e) {
        let t = JSON.stringify(e);
        if (p(t) > 65536) throw new u("PAYLOAD_TOO_LARGE", "The assembled request body exceeds the 64 KiB limit after clamping.");
        return t
    }
    var N = "__fp_pid",
        We = "__fp_sid",
        M = "__fp_iid",
        Kt = 63072e3,
        ae = "",
        se = "",
        Ye = "";

    function qe(e) {
        try {
            return window.localStorage.getItem(e) || ""
        } catch (t) {
            return ""
        }
    }

    function $e(e, t) {
        try {
            return window.localStorage.setItem(e, t), !0
        } catch (n) {
            return !1
        }
    }

    function ce(e) {
        try {
            for (let t of document.cookie.split(";")) {
                let n = t.indexOf("=");
                if (!(n < 0) && t.slice(0, n).trim() === e) return decodeURIComponent(t.slice(n + 1))
            }
        } catch (t) {}
        return ""
    }

    function He(e, t) {
        try {
            return document.cookie = `${e}=${encodeURIComponent(t)}; Path=/; Max-Age=${Kt}; SameSite=Lax; Secure`, ce(e) === t
        } catch (n) {
            return !1
        }
    }

    function Ke(e) {
        if (!e || !A(e, 64)) return !1;
        ae = e;
        let t = $e(N, e),
            n = He(N, e);
        return t || n
    }

    function je() {
        let e = qe(N) || ce(N) || ae;
        return e ? A(e, 64) ? e : (jt(), "") : ""
    }

    function jt() {
        ae = "", Ze(N)
    }

    function Ze(e) {
        try {
            window.localStorage.removeItem(e)
        } catch (t) {}
        try {
            document.cookie = `${e}=; Path=/; Max-Age=0; SameSite=Lax; Secure`
        } catch (t) {}
    }

    function ze() {
        let e = new Uint8Array(12);
        try {
            crypto.getRandomValues(e)
        } catch (n) {
            for (let r = 0; r < e.length; r++) e[r] = Math.floor(Math.random() * 256)
        }
        let t = "";
        for (let n = 0; n < e.length; n++) t += e[n].toString(36);
        return t
    }

    function Qe() {
        try {
            let t = window.sessionStorage.getItem(We);
            if (t) return t
        } catch (t) {}
        if (se) return se;
        let e = ("s_" + ze()).slice(0, 128);
        se = e;
        try {
            window.sessionStorage.setItem(We, e)
        } catch (t) {}
        return e
    }

    function Je() {
        let e = qe(M) || ce(M) || Ye;
        return e && !A(e, 64) && (Ze(M), e = ""), e || (e = ("i_" + ze()).slice(0, 64)), Ye = e, $e(M, e), He(M, e), e
    }
    var Zt = 5e3,
        zt = 1e4,
        tt = 1e3,
        et = [250, 500],
        Qt = 3,
        Jt = new Set(["INVALID_REQUEST", "MISSING_API_KEY", "INVALID_API_KEY", "KEY_REVOKED", "SCOPE_DENIED", "ACCOUNT_SUSPENDED", "DIRECT_TLS_REQUIRED", "PAYLOAD_TOO_LARGE", "RATE_LIMITED", "SERVICE_UNAVAILABLE"]),
        en = {
            delay: e => new Promise(t => setTimeout(t, e))
        };

    function tn(e) {
        if (!e) return;
        let t = Number(e);
        return !Number.isFinite(t) || t < 0 ? tt : Math.min(t * 1e3, zt)
    }

    function nn(e) {
        return e === 400 ? "INVALID_REQUEST" : e === 401 ? "INVALID_API_KEY" : e === 403 ? "SCOPE_DENIED" : e === 413 ? "PAYLOAD_TOO_LARGE" : e === 429 ? "RATE_LIMITED" : "SERVICE_UNAVAILABLE"
    }
    async function rn(e, t, n) {
        let r = new AbortController,
            o = setTimeout(() => r.abort(), Zt);
        try {
            let i = await fetch(e, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${t}`,
                        "Content-Type": "application/json"
                    },
                    body: n,
                    signal: r.signal
                }),
                a = i.headers.get("X-Request-ID") || void 0,
                s = i.headers.get("Retry-After"),
                c = null,
                l = !0;
            try {
                c = await i.json()
            } catch (_) {
                l = !1
            }
            return {
                status: i.status,
                requestId: a,
                retryAfterMs: tn(s),
                body: c,
                parsed: l
            }
        } finally {
            clearTimeout(o)
        }
    }

    function on(e) {
        var r;
        let t = (r = e.body) == null ? void 0 : r.error,
            n = t != null && t.code && Jt.has(t.code) ? t.code : nn(e.status);
        return new u(n, (t == null ? void 0 : t.message) || `Request failed with status ${e.status}.`, e.status, e.requestId)
    }
    async function nt(e, t, n, r = en) {
        var S, T, g, h, me, _e;
        let o = `${e}/v1/identify`,
            i = Ve(n),
            a = 0,
            s = 0,
            c = 0,
            l = 0,
            _ = () => l < Qt;
        for (;;) {
            let d;
            l++;
            try {
                d = await rn(o, t, i)
            } catch (f) {
                if (c < 1 && _()) {
                    c++;
                    continue
                }
                throw new u("NETWORK_ERROR", "The identify request could not be sent.")
            }
            if (d.status >= 200 && d.status < 300 && !d.parsed) {
                if (c < 1 && _()) {
                    c++;
                    continue
                }
                throw new u("NETWORK_ERROR", "The identify response could not be read.", d.status, d.requestId)
            }
            if (d.status >= 200 && d.status < 300) {
                let f = d.body || {},
                    x = {
                        browserProfileId: (S = f.browserProfileId) != null ? S : null,
                        obsId: (T = f.obsId) != null ? T : null,
                        isNew: (g = f.isNew) != null ? g : null,
                        decision: (h = f.decision) != null ? h : null,
                        confidence: (me = f.confidence) != null ? me : null,
                        requestId: d.requestId
                    };
                return f.signals && (x.signals = f.signals), f.derived && (x.derived = f.derived), f.network && (x.network = f.network), x
            }
            if (d.status === 429 && s < 1 && _()) {
                s++, await r.delay((_e = d.retryAfterMs) != null ? _e : tt);
                continue
            }
            if (d.status === 503 && a < et.length && _()) {
                let f = et[a];
                a++, await r.delay(f);
                continue
            }
            throw on(d)
        }
    }
    var sn = oe,
        G = ke(),
        an = 2e3,
        P = new Map,
        le = null;

    function ot(e) {
        var t, n, r, o, i;
        return JSON.stringify({
            linkedId: (t = e.linkedId) != null ? t : "",
            tag: (n = e.tag) != null ? n : "",
            customerId: (r = e.customerId) != null ? r : "",
            orderId: (o = e.orderId) != null ? o : "",
            consentState: (i = e.consentState) != null ? i : ""
        })
    }
    var ue = ot({});

    function it(e, t) {
        let n = t.finally(() => {
            P.delete(e)
        });
        return P.set(e, n), n
    }

    function rt(e) {
        return e.then(() => {}, () => {})
    }

    function de(...e) {
        G.debug && console.log("[fingerprint]", ...e)
    }

    function cn() {
        return te()
    }
    async function fe(e) {
        if (!G.key) throw new u("MISSING_API_KEY", "No publishable key. Pass ?key=fp_pk_\u2026 on the script src, or set window.__FP_CONFIG__.key.");
        let [t, n] = await Promise.all([te(), Be()]), r = Xe({
            signals: t,
            automation: n,
            sessionId: Qe(),
            priorProfileId: je(),
            installId: ie(e.consentState) ? "" : Je(),
            origin: location.href,
            options: e
        });
        de("request", r);
        let o = await nt(G.endpoint, G.key, r);
        return o.browserProfileId && o.decision !== "undecided" && Ke(o.browserProfileId), de("response", o), o
    }

    function ln(e = {}) {
        try {
            let t = ot(e),
                n = P.get(t);
            if (n) return n;
            let r = t !== ue ? le : null;
            return it(t, r ? r.then(() => fe(e)) : fe(e))
        } catch (t) {
            return Promise.reject(t instanceof u ? t : new u("NETWORK_ERROR", "The identify call could not be started."))
        }
    }

    function un(e) {
        let t = () => typeof requestIdleCallback == "function" ? requestIdleCallback(e, {
            timeout: an
        }) : setTimeout(e, 0);
        document.readyState === "complete" ? t() : window.addEventListener("load", t, {
            once: !0
        })
    }
    var st = new Promise((e, t) => {
        try {
            un(() => {
                var o;
                let n = [];
                P.forEach(i => n.push(rt(i)));
                let r = (o = P.get(ue)) != null ? o : it(ue, Promise.all(n).then(() => fe({})));
                le = rt(r).then(() => {
                    le = null
                }), r.then(e, t)
            })
        } catch (n) {
            t(new u("NETWORK_ERROR", "The identify call could not be scheduled."))
        }
    });
    st.catch(e => de("automatic call failed", e));
    return _t(dn);
})();