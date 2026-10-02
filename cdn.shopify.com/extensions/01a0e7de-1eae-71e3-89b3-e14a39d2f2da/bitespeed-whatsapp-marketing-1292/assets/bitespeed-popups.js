(() => {
    var wn = Object.defineProperty,
        Sn = Object.defineProperties;
    var bn = Object.getOwnPropertyDescriptors;
    var Et = Object.getOwnPropertySymbols;
    var In = Object.prototype.hasOwnProperty,
        Cn = Object.prototype.propertyIsEnumerable;
    var _t = a => {
        throw TypeError(a)
    };
    var dt = (a, t, e) => t in a ? wn(a, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
        }) : a[t] = e,
        U = (a, t) => {
            for (var e in t || (t = {})) In.call(t, e) && dt(a, e, t[e]);
            if (Et)
                for (var e of Et(t)) Cn.call(t, e) && dt(a, e, t[e]);
            return a
        },
        ce = (a, t) => Sn(a, bn(t));
    var g = (a, t, e) => dt(a, typeof t != "symbol" ? t + "" : t, e),
        xt = (a, t, e) => t.has(a) || _t("Cannot " + e);
    var T = (a, t, e) => (xt(a, t, "read from private field"), e ? e.call(a) : t.get(a)),
        G = (a, t, e) => t.has(a) ? _t("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(a) : t.set(a, e),
        K = (a, t, e, n) => (xt(a, t, "write to private field"), n ? n.call(a, e) : t.set(a, e), e);
    const Tn = "v4.3.1";
    console.log(`bitespeed-optins:${Tn}`);
    let ue;
    const le = "contactIdBitespeed",
        ft = "contactPhoneBitespeed",
        mt = "contactEmailBitespeed",
        Wt = "bspdUniqueImpression",
        $t = "bspd_last_visited_page",
        Pn = "bspdFpSynced",
        Dn = "bspdFpTried",
        vn = "contactIdBitespeedTemp",
        gt = "truecaller_pending_nonce",
        at = "truecaller_nonce_timestamp",
        Xt = 3 * 60 * 1e3,
        Zt = 5 * 60 * 1e3,
        Bn = !0,
        Vt = "bspdFpLog";
    let lt = null;
    const An = () => typeof window.bspdFingerprint != "function" ? Promise.resolve(null) : (lt || (lt = window.bspdFingerprint().catch(() => null)), lt),
        ze = "bitespeedPopupJsons",
        kt = 5 * 60 * 1e3;
    let ee = {};
    const Ot = "bspdLocationData",
        En = 15 * 60 * 1e3;
    let Nt = null,
        M, Se;
    let Lt = window.product_id,
        Ft = window.current_variant,
        de = {
            added: [],
            removed: []
        },
        Ve = {},
        _e;
    const Qt = "bitespeedErrorTextElement",
        Ye = {};
    let Ge = [],
        Rt = 0,
        Mt = 0;
    class Xe {}
    g(Xe, "create_UUID", () => {
        let t = Date.now();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
            const n = (t + Math.random() * 16) % 16 | 0;
            return t = Math.floor(t / 16), (e === "x" ? n : n & 3 | 8).toString(16)
        })
    });
    var et, Le;
    class yt {
        constructor() {
            G(this, et, 5);
            G(this, Le, async (t, e) => {
                let n = await fetch(t, e);
                for (let i = 1; i <= T(this, et) && n.status === 429; i++) {
                    const o = Number(n.headers.get("Retry-After")),
                        s = o > 0 ? Math.min(o * 1e3, 5e3) : i * 500;
                    await new Promise(r => setTimeout(r, s)), n = await fetch(t, e)
                }
                return n
            });
            g(this, "get", async (t, e = "") => {
                const n = `${this.baseUrl}?type=${t}${e.length>0?`&${e}`:""}`;
                return await (await T(this, Le).call(this, n)).json()
            });
            g(this, "post", async (t, e) => await (await T(this, Le).call(this, `${this.baseUrl}?type=${t}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(e)
            })).json());
            this.baseUrl = "/apps/bitespeed"
        }
    }
    et = new WeakMap, Le = new WeakMap;
    var Fe, Re, Ie, tt, nt;
    class _n {
        constructor() {
            G(this, Fe, "");
            G(this, Re, "");
            G(this, Ie, []);
            g(this, "location", null);
            g(this, "isPhone", window.innerWidth < 508);
            g(this, "getCookie", t => {
                const e = {};
                return document.cookie.split(";").forEach(n => {
                    const i = n.indexOf("=");
                    i !== -1 && (e[n.slice(0, i).trim()] = n.slice(i + 1))
                }), e[t]
            });
            g(this, "setCookie", (t, e, n, i = 0) => {
                let o = "";
                if (n && n > 0) {
                    const s = new Date;
                    s.setTime(s.getTime() + n * 24 * 60 * 60 * 1e3), o = "; expires=" + s.toUTCString()
                }
                if (i && i > 0) {
                    const s = new Date;
                    s.setTime(s.getTime() + i * 60 * 1e3), o = "; expires=" + s.toUTCString()
                }
                document.cookie = t + "=" + (e || "") + o + "; path=/; Secure; SameSite=Lax"
            });
            g(this, "setBrowserId", (t = null) => {
                t && this.setCookie("refb", t, 50);
                let e = this.getCookie("refb");
                (!e || (e == null ? void 0 : e.length) == 0) && (e = Xe.create_UUID(), this.setCookie("refb", e, 50)), K(this, Fe, e)
            });
            G(this, tt, () => {
                const t = location.hostname.indexOf("www"),
                    e = t === -1 ? location.hostname : location.hostname.substr(t + 4);
                K(this, Re, e)
            });
            G(this, nt, () => {
                const t = this.getCookie("blockedPopups");
                t && t.length > 0 ? K(this, Ie, t.split(",")) : K(this, Ie, [])
            });
            g(this, "getShopDomain", () => T(this, Re));
            g(this, "getBrowserId", () => T(this, Fe));
            g(this, "getBlockedPopups", () => T(this, Ie));
            g(this, "updateBlockedPopups", t => {
                T(this, Ie).push(t), this.setCookie("blockedPopups", T(this, Ie).join(","))
            });
            this.setBrowserId(), T(this, tt).call(this), T(this, nt).call(this)
        }
    }
    Fe = new WeakMap, Re = new WeakMap, Ie = new WeakMap, tt = new WeakMap, nt = new WeakMap;

    function Jt(a = "") {
        const t = {
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&quot;": '"',
            "&apos;": "'",
            "&nbsp;": " ",
            "&copy;": "\xA9",
            "&reg;": "\xAE",
            "&#39;": "'",
            "&#60;": "<",
            "&#62;": ">",
            "&#38;": "&",
            "&#34;": '"',
            "&#x27;": "'",
            "&#x3C;": "<",
            "&#x3E;": ">",
            "&#x3c;": "<",
            "&#x3e;": ">"
        };
        return a.replace(/&[a-zA-Z#0-9]+;/g, e => t[e] || e)
    }

    function Be(a = "") {
        if (!a) return "";
        const t = document.createElement("div");
        t.innerHTML = a, t.querySelectorAll("script, iframe, object, embed, form, meta, link, base").forEach(i => i.remove());
        const e = ["javascript:", "data:", "vbscript:"],
            n = new Set(["href", "src", "action", "formaction", "xlink:href"]);
        return t.querySelectorAll("*").forEach(i => {
            [...i.attributes].forEach(o => {
                const s = o.name.toLowerCase(),
                    r = o.value.trim().toLowerCase();
                (s.startsWith("on") || n.has(s) && e.some(c => r.startsWith(c))) && i.removeAttribute(o.name)
            })
        }), t.innerHTML
    }

    function Oe(a) {
        if (typeof a != "string" || !a) return "";
        try {
            return new DOMParser().parseFromString(a, "text/html").documentElement.outerHTML
        } catch (t) {
            return ""
        }
    }

    function Ze(a) {
        return window.btoa(String.fromCharCode(...new Uint8Array(a)))
    }

    function en(a) {
        const t = (a + "=".repeat((4 - a.length % 4) % 4)).replace(/-/g, "+").replace(/_/g, "/");
        return Uint8Array.from(window.atob(t), e => e.charCodeAt(0))
    }

    function xn() {
        var i;
        const a = navigator.userAgent || "",
            t = /Android/.test(a) && /wv/.test(a),
            e = /iPhone|iPad|iPod/.test(a) && !/Safari/.test(a),
            n = !!window.ReactNativeWebView || !!((i = window.webkit) != null && i.messageHandlers) || !!window.Android;
        return t || e || n
    }

    function tn() {
        const a = navigator.userAgent,
            t = [{
                regex: /Edg/,
                name: "edge",
                log: "You are using Microsoft Edge"
            }, {
                regex: /Chrome/,
                name: "chrome",
                log: "You are using Google Chrome",
                exclude: /Edg/
            }, {
                regex: /Firefox/,
                name: "firefox",
                log: "You are using Mozilla Firefox"
            }, {
                regex: /Safari/,
                name: "safari",
                log: "You are using Apple Safari",
                exclude: /Chrome/
            }];
        for (const {
                regex: e,
                name: n,
                log: i,
                exclude: o
            } of t)
            if (e.test(a) && (!o || !o.test(a))) return n;
        return "other"
    }
    const z = a => document.cookie.split("; ").map(t => t.split("=")).reduce((t, [e, n]) => ce(U({}, t), {
            [e]: n
        }), {})[a],
        Pe = (a, t, e, n = 24) => {
            let i = "";
            if (e) {
                const o = new Date;
                o.setTime(o.getTime() + e * n * 60 * 60 * 1e3), i = `; expires=${o.toUTCString()}`
            }
            document.cookie = `${a}=${t||""}${i}; path=/; Secure; SameSite=Lax`
        };

    function je() {
        return {
            contactId: z(le) || null,
            email: z(mt) || null,
            phoneNumber: z(ft) || null
        }
    }
    async function Ht(a, t, e, n, i) {
        var r, c, d, l, p, f;
        if (await e.pushManager.getSubscription()) return;
        a(n);
        const s = ((r = window.bspdStoreConfig) == null ? void 0 : r.vapidPublicKey) || "BMSR8tXlLJOlANI7T5d2zhtzfBgW54OsaNX0K79JoOUlxSZz20vJE3cpmJAUtnpRIyAqEM-rp5h8AhxdyXOL3Ws";
        try {
            const m = await e.pushManager.subscribe({
                    userVisibleOnly: !0,
                    applicationServerKey: en(s)
                }),
                {
                    endpoint: y
                } = m,
                w = {
                    auth: Ze(m.getKey("auth")),
                    p256dh: Ze(m.getKey("p256dh"))
                },
                u = await M[`${n}:bitespeed_popup`].handleConversion({}, {
                    getDiscount: !1,
                    requiredDiscount: {}
                }, {
                    popupType: "webpush",
                    webPushSubscription: {
                        endpoint: y,
                        keys: w,
                        browser: tn()
                    }
                }),
                h = ((l = (d = (c = u == null ? void 0 : u.results) == null ? void 0 : c[1]) == null ? void 0 : d.value) == null ? void 0 : l.id) || ((f = (p = u == null ? void 0 : u.results) == null ? void 0 : p[1]) == null ? void 0 : f.id),
                S = M[`${n}:bitespeed_popup`];
            S.browserService.setCookie("contactIdBitespeed", h, 1e3), S.browserService.setCookie("bspdPushId", y, 1e3)
        } catch (m) {
            if (Notification.permission === "denied") return
        }
    }
    var ut = "bspdCartData";
    window.BSPD_CART_DATA_LOCAL_KEY = ut;
    async function qe(a = !1) {
        if (a && Object.keys(Ve).length) return Ve;
        try {
            return await (await fetch("/cart.js")).json()
        } catch (t) {
            return null
        }
    }

    function Ne(a, t) {
        if (!(a != null && a.items)) return {
            added: [],
            removed: []
        };
        const e = (i, o) => i.filter(s => !o.some(r => s.key === r.key)),
            n = {
                added: e(t.items, a.items),
                removed: e(a.items, t.items)
            };
        for (const i of a.items) {
            const o = t.items.find(c => c.key === i.key && c.quantity !== i.quantity);
            if (!o) continue;
            const s = o.quantity - i.quantity,
                r = ce(U({}, o), {
                    quantity: Math.abs(s)
                });
            (s > 0 ? n.added : n.removed).push(r)
        }
        return n
    }
    let Wn = 0;
    const ht = new Map,
        xe = a => {
            if (typeof a != "function") throw new TypeError("Callback must be a function");
            const t = ++Wn;
            return ht.set(t, {
                callback: a,
                subscribedAt: new Date,
                lastInvokedAt: null,
                timesInvoked: 0
            }), {
                id: t,
                unsubscribe: () => ht.delete(t)
            }
        },
        nn = (a, t, e) => {
            for (const n of ht.values()) try {
                n.callback(a, t, e), n.lastInvokedAt = new Date, n.timesInvoked++
            } catch (i) {
                console.error("Error in cart data change callback:", i)
            }
        },
        on = () => {
            new PerformanceObserver(t => {
                t.getEntries().forEach(async e => {
                    if (!(["xmlhttprequest", "fetch"].includes(e.initiatorType) && (e.name.includes("/cart/change") || e.name.includes("/cart/add")))) return;
                    const [i, o] = await Promise.all([qe(), Promise.resolve((() => {
                        try {
                            const c = JSON.parse(localStorage.getItem("bspdCart") || "{}");
                            return Array.isArray(c == null ? void 0 : c.items) ? c : {
                                items: []
                            }
                        } catch (c) {
                            return {
                                items: []
                            }
                        }
                    })())]);
                    let s = Ne(o, i);
                    !s.added.length && !s.removed.length && (s = Ne(Ve, i));
                    let r;
                    try {
                        const c = JSON.parse(localStorage.getItem(ut) || "{}");
                        r = typeof c == "object" && c !== null && !Array.isArray(c) ? c : {}
                    } catch (c) {
                        r = {}
                    }(i == null ? void 0 : i.item_count) !== (r == null ? void 0 : r.item_count) && localStorage.setItem(ut, JSON.stringify(i)), nn(i, s.added.length > 0, s.removed.length > 0);
                    try {
                        lookForCart(i, !0)
                    } catch (c) {
                        console.error("Error in lookForCart cartSub callback:", c)
                    }
                })
            }).observe({
                entryTypes: ["resource"]
            })
        };
    const we = ["OpenView", "Design1View", "Design2View", "Design3View", "Design4View", "Design5View", "CompletedView"],
        $n = (a = "percentage", t = 0, e = 0) => a === "percentage" ? t * e / 100 : a === "fixed" ? e : 0;
    const pt = (a, t) => {
        var e;
        if (ee != null && ee.countryPhoneCode) {
            const n = a.querySelector(t);
            if ((e = n == null ? void 0 : n.options) != null && e.length && n.dataset.autofill === "true") {
                const i = String(ee.countryPhoneCode).replace("+", "");
                [...n.options].some(s => s.value.replace("+", "") === i) && (n.value = `+${i}`)
            }
        }
    };

    function Qe(a) {
        return Array.isArray(a) ? a.map(Qe).sort((t, e) => JSON.stringify(t).localeCompare(JSON.stringify(e))) : a && typeof a == "object" ? Object.keys(a).sort().reduce((t, e) => (t[e] = Qe(a[e]), t), {}) : a
    }
    var se, We, ot, it, re;
    class ye {
        constructor(t, e, n, i = "OpenView", o = "") {
            G(this, se, {});
            G(this, We, {});
            G(this, ot, "");
            G(this, it, "");
            G(this, re, null);
            g(this, "popupId", "");
            g(this, "popupType", "");
            g(this, "browserService", null);
            g(this, "productId", "");
            g(this, "variantId", "");
            g(this, "popupTrigger", "");
            g(this, "currentView", "");
            g(this, "teaserSettings", {});
            g(this, "teaserDisabled", !1);
            g(this, "alreadyShownTeaser", !1);
            g(this, "multiStepPopupFormdata", {});
            g(this, "alreadyConverted", !1);
            g(this, "getPopupHtml", () => T(this, se));
            g(this, "nextView", (t = "__ __ __ __") => {
                var n, i;
                (n = document.querySelector(".u-popup-container")) == null || n.remove(), (i = document.querySelector(`#popup-iframe-open-${this.popupId}`)) == null || i.remove();
                const e = JSON.parse(this.popupJson.popupHtml);
                if (e.IntermediateView && this.currentView === "OpenView") K(this, se, e.IntermediateView), this.currentView = "IntermediateView", this.show();
                else if (e.CompletedView && this.currentView === "IntermediateView") K(this, se, e.CompletedView), this.currentView = "CompletedView", this.show(t, !1);
                else if (we.includes(this.currentView))
                    for (let o = we.indexOf(this.currentView) + 1; o < we.length; o++) {
                        const s = we[o];
                        if (e[s]) {
                            K(this, se, e[s]), this.currentView = s, this.show(t, !1);
                            break
                        }
                    } else this.currentView !== "CompletedView" && e.CompletedView && (K(this, se, e.CompletedView), this.currentView = "CompletedView", this.show(t, !1))
            });
            g(this, "checkForNextViewAvailability", () => {
                const t = JSON.parse(this.popupJson.popupHtml);
                if (we.includes(this.currentView)) {
                    const e = we.indexOf(this.currentView) + 1,
                        n = we[e];
                    return t[n] ? {
                        isNextViewAvailable: !0,
                        nextView: n
                    } : {
                        isNextViewAvailable: !0,
                        nextView: "CompletedView"
                    }
                }
                return {
                    isNextViewAvailable: !1,
                    nextView: null
                }
            });
            g(this, "updateVirtualStateForPopupNextViewIntent", async (t = {}) => {
                const e = {};
                for (const n in t) this.multiStepPopupFormdata[n] === void 0 && t[n] !== void 0 && (e[n] = t[n]);
                Object.keys(e).length > 0 && (this.multiStepPopupFormdata = U(U({}, this.multiStepPopupFormdata), e))
            });
            g(this, "showSecondaryHtml", () => {
                var e, n, i, o, s, r, c, d, l, p, f, m, y, w, u, h, S, b, I, C, A, P, D, v, J, H, j, x, N, q, W, B, k, $, O, E, _, L, R, X, Q, te, V, Y, Z;
                if (!T(this, We)) return;
                const t = document.createElement("iframe");
                t.id = "chat-popup-iframe-bottom", t.title = "BiteSpeed Popup Bottom", t.setAttribute("sandbox", "allow-scripts allow-forms allow-same-origin allow-popups"), t.srcdoc = Oe(T(this, We)), t.style.cssText = `
      position: fixed;
      ${this.popupType.includes("chat")?`bottom: ${parseInt((n=(e=this.popupJson.unlayerJson)==null?void 0:e.Widget)!=null&&n["Use different icon position for mobile"].selected&&((i=this.browserService)!=null&&i.isPhone)?(s=(o=this.popupJson.unlayerJson)==null?void 0:o.Widget)==null?void 0:s["Mobile Icon position"].attributes.bottom:(c=(r=this.popupJson.unlayerJson)==null?void 0:r.Widget)==null?void 0:c["Icon position"].attributes.bottom)}px;`:"top: 0;"}
      right: 0;
      ${((p=(l=(d=this.popupJson.unlayerJson)==null?void 0:d.Widget)==null?void 0:l["Icon position"])==null?void 0:p.selected)==="Left"?"left: 0;":""}
      ${(m=(f=this.popupJson.unlayerJson)==null?void 0:f.Widget)!=null&&m["Use different icon position for mobile"].selected&&((y=this.browserService)!=null&&y.isPhone)?((u=(w=this.popupJson.unlayerJson)==null?void 0:w.Widget)==null?void 0:u["Mobile Icon position"].selected)==="Left"?"left: 0; right: auto;":"right: 0; left: auto;":""}
      height: ${((b=(S=(h=this.popupJson.unlayerJson)==null?void 0:h.Widget)==null?void 0:S["Icon size"])==null?void 0:b.selected)==="Large"?"54px":"45px"};
      margin-right: ${((A=(C=(I=this.popupJson.unlayerJson)==null?void 0:I.Widget)==null?void 0:C["Icon position"])==null?void 0:A.selected)==="Right"?`${(J=(v=(D=(P=this.popupJson.unlayerJson)==null?void 0:P.Widget)==null?void 0:D["Icon position"])==null?void 0:v.attributes)==null?void 0:J.distance}px`:"auto"}; margin-left: ${((x=(j=(H=this.popupJson.unlayerJson)==null?void 0:H.Widget)==null?void 0:j["Icon position"])==null?void 0:x.selected)==="Left"?`${(B=(W=(q=(N=this.popupJson.unlayerJson)==null?void 0:N.Widget)==null?void 0:q["Icon position"])==null?void 0:W.attributes)==null?void 0:B.distance}px`:"auto"};
      ${($=(k=this.popupJson.unlayerJson)==null?void 0:k.Widget)!=null&&$["Use different icon position for mobile"].selected&&((O=this.browserService)!=null&&O.isPhone)?((_=(E=this.popupJson.unlayerJson)==null?void 0:E.Widget)==null?void 0:_["Mobile Icon position"].selected)==="Left"?`margin-left: ${(X=(R=(L=this.popupJson.unlayerJson)==null?void 0:L.Widget)==null?void 0:R["Mobile Icon position"].attributes)==null?void 0:X.distance}px; margin-right: auto;`:`margin-right: ${(V=(te=(Q=this.popupJson.unlayerJson)==null?void 0:Q.Widget)==null?void 0:te["Mobile Icon position"].attributes)==null?void 0:V.distance}px; margin-left: auto;`:""}
      z-index: ${(Z=(Y=window.bspdStoreConfig)==null?void 0:Y.zIndexOverride)!=null?Z:999999999};
      background-color: ${this.popupType.includes("chat")?";":"rgba(0, 0, 0, 0.5);"}
      border: none;
    `, document.body.appendChild(t), t.onload = () => {
                    var fe, me, De, Ae, Ee;
                    const oe = (t.contentDocument || t.contentWindow.document).getElementById("WidgetPreview");
                    oe && (t.style.width = `${Math.ceil(oe.getBoundingClientRect().width)}px`, (me = (fe = this.popupJson.unlayerJson) == null ? void 0 : fe.Widget) != null && me["Use different icon position for mobile"].selected && ((De = this.browserService) != null && De.isPhone) && (oe.style.float = ((Ee = (Ae = this.popupJson.unlayerJson) == null ? void 0 : Ae.Widget) == null ? void 0 : Ee["Mobile Icon position"].selected) === "Left" ? "left" : "right"))
                }
            });
            g(this, "close", async () => {
                var e;
                let t = `popup-iframe-open-${this.popupId}`;
                this.currentView === "OpenView" ? (t = `popup-iframe-open-${this.popupId}`, this.alreadyConverted || await T(this, re).registerImpression(this.popupId, "closed")) : this.currentView === "CompletedView" ? t = `popup-iframe-completed-${this.popupId}` : this.currentView.includes("Design") && this.currentView.includes("View") && this.currentView.startsWith("Design") && (t = `popup-iframe-${this.currentView}-${this.popupId}`, this.alreadyConverted || await T(this, re).registerImpression(this.popupId, "closed")), (e = document.getElementById(t)) == null || e.remove(), this.currentView = "OpenView"
            });
            g(this, "toggleTeaser", (t = !0) => {
                var m, y, w, u, h, S, b;
                const e = JSON.parse(this.popupJson.popupHtml),
                    n = e == null ? void 0 : e.Teaser;
                let i = document.querySelector(`#popup-teaser-${this.popupId}`);
                const o = z(`viewed_teaser_${this.popupId}`),
                    s = z($t);
                if (!t || this.teaserDisabled || ((m = this.teaserSettings) == null ? void 0 : m.stopDisplaying) === "page_change" && o && s && ((s == null ? void 0 : s.length) > 0 || s !== window.location.href)) return i == null || i.remove(), !1;
                if (!n || i) return !1;
                const c = ((y = this.teaserSettings) == null ? void 0 : y.size) || "55",
                    d = ((w = this.teaserSettings) == null ? void 0 : w.position) || "bottom_left",
                    l = (h = (u = this.teaserSettings) == null ? void 0 : u.spacing) == null ? void 0 : h.left,
                    p = (b = (S = this.teaserSettings) == null ? void 0 : S.spacing) == null ? void 0 : b.top;
                let f = "";
                switch (d) {
                    case "top_left":
                        f = `top: ${p}px; left: ${l}px;`;
                        break;
                    case "top_middle":
                        f = `top: ${p}px; left: 50%; transform: translateX(-50%);`;
                        break;
                    case "top_right":
                        f = `top: ${p}px; right: 0;`;
                        break;
                    case "bottom_left":
                        f = `bottom: ${p}px; left: ${l}px;`;
                        break;
                    case "bottom_middle":
                        f = `bottom: ${p}px; left: 50%; transform: translateX(-50%);`;
                        break;
                    case "bottom_right":
                        f = `bottom: ${p}px; right: 0;`;
                        break;
                    case "middle_left":
                        f = `top: 50%; left: ${l}px; transform: translateY(-50%);`;
                        break;
                    case "middle_right":
                        f = `top: 50%; right: ${l}px; transform: translateY(-50%);`;
                        break;
                    default:
                        break
                }
                return i = document.createElement("iframe"), i.id = `popup-teaser-${this.popupId}`, i.setAttribute("sandbox", "allow-scripts allow-forms allow-same-origin allow-popups"), i.srcdoc = Oe(n), i.style.cssText = `
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      position: fixed;
      ${f}
      overflow: visible;
      z-index: 999999999;
      border: none;
      scrollbar-width: none;
      -ms-overflow-style: none;
    `, i.onload = () => {
                    const I = i.contentDocument || i.contentWindow.document,
                        C = I.querySelector(".popup-teaser");
                    if (C) {
                        i.style.cssText = `
          padding: 0 !important;
          margin: 0 !important;
          box-sizing: border-box !important;
          position: fixed;
          ${f}
          height: ${C.offsetHeight}px !important;
          width: ${C.offsetWidth+5}px !important;
          overflow: visible !important;
          z-index: 999999999 !important;
          border: none !important;
          scrollbar-width: none;
          -ms-overflow-style: none;
        `;
                        const A = I.body;
                        A && (A.style.cssText = `
            ${A.style.cssText};
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          `)
                    }
                }, document.body.appendChild(i), Pe(`viewed_teaser_${this.popupId}`, "true", 5), Pe($t, window.location.href, 5), !0
            });
            g(this, "renderProductFeed", async (t = "") => {
                var y, w, u;
                const e = ((w = (y = this.popupJson) == null ? void 0 : y.unlayerJson) == null ? void 0 : w.currency) || "\u20B9",
                    n = /data-pfid="([^"]+?)BITESPEED"/,
                    i = t.match(n);
                if (!i) return t;
                const o = i[1];
                let s = [];
                const r = await qe();
                if (((u = r == null ? void 0 : r.items) == null ? void 0 : u.length) > 0 && (s = r.items.map(h => ce(U({}, h), {
                        productId: h.product_id,
                        variantId: h.variant_id,
                        title: h.title,
                        image: h.image,
                        handle: h.handle,
                        price: h.price / 100,
                        compareAtPrice: h.original_price / 100,
                        linePrice: h.line_price / 100,
                        originalLinePrice: h.original_line_price / 100,
                        quantity: h.quantity,
                        url: h.url
                    }))), !s.length) return "";
                const c = this.DiscountCodeValuePercentage,
                    d = c ? Number(c.replace(/%/g, "")) : 0;
                let l = "";
                d > 0 && (this.discountType === "Dynamic - Percentage" || this.discountType === "Static" && c.includes("%") ? l = "percentage" : (this.discountType === "Dynamic - Fixed Amount" || this.discountType === "Static" && !c.includes("%")) && (l = "fixed"));
                const p = r.original_total_price / 100,
                    f = $n(l, p, d);
                let m = 0;
                for (let h = 0; h < s.length; h++) {
                    const S = `{{${o}.${h}`,
                        b = s[h].originalLinePrice,
                        I = b / p * 100,
                        C = l === "fixed" ? d * I / 100 : 0,
                        A = l === "percentage" ? b - b * d / 100 : l === "fixed" ? b - C : b,
                        P = Math.max(A, 0),
                        D = P < b ? b : 0,
                        v = s[h].image.includes("?") ? `${s[h].image}&width=300` : `${s[h].image}?width=300`;
                    t = t.replaceAll(`${S}.Display}}`, "flex").replaceAll(`${S}.Product_URL}}`, s[h].url).replaceAll(`${S}.Image_URL}}`, v).replaceAll(`${S}.QuantityBadgeDisplay}}`, s[h].quantity > 1 ? "flex" : "none").replaceAll(`${S}.Product_Quantity}}`, s[h].quantity).replaceAll(`${S}.Product_Only_Name}}`, s[h].title).replaceAll(`${S}.Product_Name}}`, s[h].title).replaceAll(`${S}.Product_Price}}`, `${e}${P.toFixed(2).toLocaleString("en-IN")}`).replaceAll(`${S}.Product_CompareAtPriceDisplay}}`, D > 0 ? "inline-block" : "none").replaceAll(`${S}.Product_CompareAtPrice}}`, `${e}${D.toFixed(2).toLocaleString("en-IN")}`), m += 1
                }
                for (let h = m; h < 1e3; h++) {
                    const S = `{{${o}.${h}`;
                    t = t.replaceAll(`${S}.Display}}`, "none").replaceAll(`${S}.Product_URL}}`, "").replaceAll(`${S}.Image_URL}}`, "").replaceAll(`${S}.QuantityBadgeDisplay}}`, "none").replaceAll(`${S}.Product_Quantity}}`, "").replaceAll(`${S}.Product_Only_Name}}`, "").replaceAll(`${S}.Product_Name}}`, "").replaceAll(`${S}.Product_Price}}`, "").replaceAll(`${S}.Product_CompareAtPriceDisplay}}`, "none").replaceAll(`${S}.Product_CompareAtPrice}}`, "")
                }
                return t = t.replaceAll(`{{${o}.CartDiscountAmount}}`, `${e}${f.toFixed(2).toLocaleString("en-IN")}`).replaceAll(`{{${o}.CartTotalAmount}}`, `${e}${(p-f).toFixed(2).toLocaleString("en-IN")}`), t
            });
            g(this, "attributeThisPopup", async (t = "popupPFInteracted") => {
                fetch("/cart/update.js", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        attributes: {
                            bspdPopupId: this.popupId,
                            createdBy: "bitespeed.co"
                        }
                    })
                }).then(async () => {
                    this.alreadyConverted || (await T(this, re).registerImpression(this.popupId, t), this.alreadyConverted = !0)
                }).catch(e => {
                    console.error("Error 2:", e)
                })
            });
            g(this, "show", async (t, e = !0, n = {}) => {
                var s, r, c, d, l, p, f, m, y, w, u, h, S, b, I, C, A, P, D, v, J, H, j, x, N, q, W, B;
                if (t === "" && n.popupTrigger && n.productId && n.variantId && (this.productId = n.productId || "", this.variantId = n.variantId || "", this.popupTrigger = n.popupTrigger || ""), (!this.popupType.includes("chat") || !this.popupType.includes("stw")) && ((s = document == null ? void 0 : document.querySelector(".u-popup-container")) == null || s.remove()), K(this, se, T(this, se).replace(/\\n/g, "").replace(/`/g, "")), t && t !== "__ __ __ __" && (K(this, se, T(this, se).replace(/{{DISCOUNT_CODE}}/g, t)), fetch(`/discount/${t}`, {
                        method: "GET"
                    })), !!T(this, se) && (this.popupType.includes("chat") || this.popupType.includes("stw"))) {
                    const k = this.popupType.includes("stw") && window.matchMedia("(max-width: 600px)").matches,
                        $ = ((d = (c = (r = this.popupJson.unlayerJson) == null ? void 0 : r.ContentSettings) == null ? void 0 : c.mobileSpinWindowHeight) == null ? void 0 : d.selected) || "100",
                        O = document.createElement("iframe");
                    O.title = "BiteSpeed Popup", O.setAttribute("sandbox", "allow-scripts allow-forms allow-same-origin allow-popups"), O.id = this.popupType.includes("chat") ? "chat-popup-iframe" : this.popupType.includes("stw") ? "stw-popup-iframe" : "popup-iframe", O.srcdoc = Oe(T(this, se)), O.style.cssText = `
        position: fixed;
        ${this.popupType.includes("chat")?`bottom: ${parseInt((p=(l=this.popupJson.unlayerJson)==null?void 0:l.Widget)==null?void 0:p["Icon position"].attributes.bottom)+64}px;`:"top: 0;"}
        right: 0;
        ${((y=(m=(f=this.popupJson.unlayerJson)==null?void 0:f.Widget)==null?void 0:m["Icon position"])==null?void 0:y.selected)==="Left"?"left: 0;":""}
        width: ${this.popupType.includes("chat")?(w=this.browserService)!=null&&w.isPhone?"100%;":"380px;":"100%;"}
        height: ${this.popupType.includes("chat")?"500px;":"100%;"}
        margin-right: ${(u=this.browserService)!=null&&u.isPhone?"0px":((b=(S=(h=this.popupJson.unlayerJson)==null?void 0:h.Widget)==null?void 0:S["Icon position"])==null?void 0:b.selected)==="Right"?`${(P=(A=(C=(I=this.popupJson.unlayerJson)==null?void 0:I.Widget)==null?void 0:C["Icon position"])==null?void 0:A.attributes)==null?void 0:P.distance}px`:"auto"}; margin-left: ${(D=this.browserService)!=null&&D.isPhone?"0px":((H=(J=(v=this.popupJson.unlayerJson)==null?void 0:v.Widget)==null?void 0:J["Icon position"])==null?void 0:H.selected)==="Left"?`${(q=(N=(x=(j=this.popupJson.unlayerJson)==null?void 0:j.Widget)==null?void 0:x["Icon position"])==null?void 0:N.attributes)==null?void 0:q.distance}px`:"auto"};
        z-index: ${(B=(W=window.bspdStoreConfig)==null?void 0:W.nonPopupZIndexOverride)!=null?B:2147483647};
        background-color: ${this.popupType.includes("chat")?";":"rgba(0, 0, 0, 0.5);"}
        border: none;
        display: ${this.popupType.includes("chat")?"none;":"default;"}
      `, this.showSecondaryHtml(), O.onload = () => {
                        Ut(this.popupId);
                        const E = O.contentDocument;
                        if (k) {
                            const _ = E.getElementById("wheelContainerBiteSpeed");
                            _ && (_.style.height = `${$}%`, _.style.bottom = "0px", _.style.top = "auto", _.style.overflowY = "auto")
                        }
                        this.popupType.includes("stw") ? pt(E, "#STWBiteSpeedWAChatSelect") : this.popupType.includes("chat") && pt(E, "#BiteSpeedWAChatSelect")
                    }, document.body.appendChild(O), e && T(this, re).registerImpression(this.popupId), this.browserService.setCookie(`view ${this.popupType}`, this.popupTrigger === "back_in_stock" ? "false" : "true", 10)
                } else if (T(this, se)) {
                    const k = (E, _) => {
                            const L = document.createElement("iframe");
                            return L.id = E, L.setAttribute("sandbox", "allow-scripts allow-forms allow-same-origin allow-popups"), L.srcdoc = Oe(_), L.style.cssText = `
          position: fixed;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 999999999;
          background-color: rgba(0, 0, 0, 0.5);
          border: none;
          left: -1000%;
        `, L
                        },
                        $ = (E, _, L = !0) => {
                            const R = E.contentDocument;
                            if (!R) return;
                            if (L) {
                                const Y = R.querySelector(".bitespeedNextButton");
                                Y && Y.setAttribute("data-popupid", _)
                            }
                            const X = R.querySelector("#STWDicountBoxCopy");
                            X && X.setAttribute("data-popupid", _);
                            const Q = R.querySelector(".u-close-button");
                            Q && Q.setAttribute("data-popupid", _);
                            const te = R.querySelector(".u-popup-container");
                            te && (te.onclick = () => dn({}, _));
                            const V = R.querySelector(".u-popup-main");
                            V && (V.onclick = Y => Y.stopPropagation()), pt(R, "#BiteSpeedDialCode")
                        },
                        O = (E, _) => {
                            var Q;
                            const L = document.getElementById(E);
                            if (!L) return;
                            const X = (L.contentDocument || L.contentWindow.document).getElementById("STWDicountBox");
                            X && _ && _ !== "__ __ __ __" && (X.textContent = _), (Q = document.getElementById(`popup-iframe-open-${this.popupId}`)) == null || Q.style.setProperty("left", "-1000%"), we.forEach(te => {
                                var V;
                                if (te !== "OpenView" && te !== "CompletedView" && te.startsWith("Design") && te.endsWith("View")) {
                                    const Y = `popup-iframe-${te}-${this.popupId}`;
                                    Y !== E && ((V = document.getElementById(Y)) == null || V.style.setProperty("left", "-1000%"))
                                }
                            }), L.style.left = 0
                        };
                    if (this.currentView === "OpenView") {
                        const E = JSON.parse(this.popupJson.popupHtml),
                            _ = this.popupId;
                        let L = document.querySelector(`#popup-iframe-open-${_}`);
                        if (!L) {
                            const V = await this.renderProductFeed(E.OpenView);
                            V && (L = k(`popup-iframe-open-${_}`, V))
                        }
                        let R = document.querySelector(`#popup-iframe-completed-${_}`),
                            X = !1;
                        if (!R) {
                            const V = await this.renderProductFeed(E.CompletedView);
                            V ? R = k(`popup-iframe-completed-${_}`, V) : X = !0
                        }
                        const Q = V => {
                            document.getElementById(`popup-iframe-open-${_}`).style.left = 0, e && T(this, re).registerImpression(_), this.browserService.setCookie(`view ${this.popupType}`, this.popupTrigger === "back_in_stock" ? "false" : "true", 10), V.target.removeEventListener("load", Q), Ut(_)
                        };
                        L.addEventListener("load", V => {
                            var ne, oe;
                            const Y = document.querySelector(`#popup-teaser-${_}`),
                                Z = () => {
                                    var fe;
                                    ((fe = this.teaserSettings) == null ? void 0 : fe.stopDisplaying) === "visitor_converts" && this.isACustomer() ? Q(V) : (this.alreadyShownTeaser = !0, this.toggleTeaser())
                                };
                            (ne = this.teaserSettings) != null && ne.showPopupOnInitialRender && !this.haveAlreadyViewed() ? Q(V) : ((oe = this.teaserSettings) == null ? void 0 : oe.startDisplaying) === "before_popup" && !Y && this.alreadyShownTeaser !== !0 ? Z() : Q(V), $(L, _, !0)
                        }, {
                            once: !0
                        }), X || (R.onload = function() {
                            $(R, _, !1)
                        }), document.body.appendChild(L), X || document.body.appendChild(R), Object.keys(E).forEach(async V => {
                            if (V !== "OpenView" && V !== "CompletedView" && V.startsWith("Design") && V.endsWith("View")) {
                                const Y = await (async () => {
                                    const Z = await this.renderProductFeed(E[V]);
                                    if (!Z) return null;
                                    const ne = k(`popup-iframe-${V}-${_}`, Z);
                                    return ne.onload = function() {
                                        $(ne, _, !0)
                                    }, document.body.appendChild(ne), ne
                                })()
                            }
                        })
                    } else this.currentView.startsWith("Design") && this.currentView.endsWith("View") ? O(`popup-iframe-${this.currentView}-${this.popupId}`, t) : O(`popup-iframe-completed-${this.popupId}`, t)
                }
            });
            g(this, "getDiscountType", t => {
                if (t != null && t.DiscountCodeType) return t.DiscountCodeType;
                for (const e in t)
                    if (typeof t[e] == "object") {
                        const n = this.getDiscountType(t[e]);
                        if (n) return n
                    }
                return null
            });
            g(this, "findFieldInJson", (t, e) => {
                if (t != null && t[e]) return t[e];
                for (const n in t)
                    if (typeof t[n] == "object") {
                        const i = this.findFieldInJson(t[n], e);
                        if (i) return i
                    }
                return null
            });
            g(this, "passWhereCondition", t => {
                const e = window.location.href.split("?")[0].replace(/\/+$/, ""),
                    n = this.shouldShowOnPage(t["Pages to show"], e),
                    i = this.shouldNotShowOnPage(t["Pages NOT to show"], e);
                return this.applyDeviceFilters(t.Devices, n && i)
            });
            g(this, "shouldShowOnPage", (t, e) => t.selected === "All pages" ? !0 : t.selected === "Specific pages" ? (t.attributes || []).some(i => this.urlMatchesCondition(i, e)) : !1);
            g(this, "shouldNotShowOnPage", (t, e) => t.selected === "None" ? !0 : t.selected === "Specific pages" ? !(t.attributes || []).some(i => this.urlMatchesCondition(i, e)) : !0);
            g(this, "urlMatchesCondition", (t, e) => {
                const n = (t.url || "").toString().replace(/\/+$/, "");
                switch (t.type) {
                    case "Containing":
                        return e.includes(n);
                    case "Exactly Matching":
                        return e === n;
                    case "Starting With":
                        return e.startsWith(n);
                    case "Ending With":
                        return e.endsWith(n);
                    case "Match with Regex":
                        try {
                            return n.length > 500 || /(\*|\+)\s*(\+|\*|\?)/.test(n) || /\([^)]*(\*|\+)[^)]*\)\s*[+*?{]/.test(n) ? !1 : new RegExp(n).test(e)
                        } catch (i) {
                            return !1
                        }
                    default:
                        return !1
                }
            });
            g(this, "applyDeviceFilters", (t, e) => {
                var n, i;
                if (!e) return !1;
                switch (t.selected) {
                    case "All devices":
                        return !0;
                    case "Desktop only":
                        return !((n = this.browserService) != null && n.isPhone);
                    case "Mobile only":
                        return !!((i = this.browserService) != null && i.isPhone);
                    default:
                        return !0
                }
            });
            g(this, "isACustomer", () => !!this.browserService.getCookie("contactIdBitespeed"));
            g(this, "hasAlreadyViewedPopup", () => {
                const t = this.browserService.getCookie(`view ${this.popupType}`);
                return (this.popupType === "visual popup" || this.popupType === "stw") && (t === "true" || t === !0)
            });
            g(this, "shouldStopShowingPopup", t => {
                var i;
                let e = !1;
                const n = (i = t == null ? void 0 : t["Stop Showing"]) == null ? void 0 : i.selected;
                if (e || (this.behaviour.When.selected === "When product is out of stock" ? e = !1 : (this.popupType === "stw" || this.popupType === "visual popup") && (e = this.getLastViewedDaysAgo() >= 1)), n) switch (e = !1, n) {
                    case "Never stop showing":
                        e = !1;
                        break;
                    case "After X Views":
                        const o = localStorage.getItem(`bspdViewsCnt-${this.popupId}`);
                        o && o !== "undefined" && t["Stop Showing"].attributes && parseInt(o) >= t["Stop Showing"].attributes && (e = !0);
                        break;
                    default:
                        this.popupType === "stw" || this.popupType === "visual popup" ? e = this.getLastViewedDaysAgo() >= 1 : e = !1
                }
                return e
            });
            g(this, "passWhoCondition", (t, e = 2) => {
                var n, i;
                if (!t) return !0;
                if (e === 2 || t["By Frequency"] && t["By Visitor"]) {
                    if ((n = t == null ? void 0 : t["Stop Showing"]) != null && n.selected && this.shouldStopShowingPopup(t)) return !1;
                    let o = !1;
                    const s = (i = t == null ? void 0 : t["By Frequency"]) == null ? void 0 : i.selected,
                        r = t["By Visitor"].selected;
                    switch (s) {
                        case "Show only once":
                            o = !this.hasAlreadyViewedPopup();
                            break;
                        case "Show on every page load":
                            o = !0;
                            break;
                        case "Show every X days":
                            const c = this.getLastViewedDaysAgo();
                            c > 0 || c === 0 ? o = c >= t["By Frequency"].attributes : c === null && (o = !0, this.updateLastViewedDate());
                            break;
                        default:
                            o = !1
                    }
                    if (s && !o) return !1;
                    switch (r) {
                        case "Show to only visitors":
                        case "Show to all visitors":
                        case "Dont show to existing customers":
                            return !this.isACustomer();
                        case "Show to only subscribers":
                        case "Show to all subscribers":
                            return this.isACustomer();
                        case "Show to both subscribers & visitors":
                        case "Show to all subscribers & visitors":
                            return !0;
                        case "Show to any returning visitors":
                            const c = `last-viewed-popup-${this.popupId}`;
                            return !!localStorage.getItem(c)
                    }
                }
                if (t["By Visitor"] && e !== 2) {
                    const o = t["By Visitor"].selected;
                    if ((this.popupType === "stw" || this.popupType === "visual popup") && this.shouldStopShowingPopup(t)) return !1;
                    if (this.behaviour.When.selected === "When product is out of stock" || o === "Show to all subscribers & visitors") return !0;
                    switch (o) {
                        case "Show to all visitors":
                            return !this.isACustomer();
                        case "Dont show to existing customers":
                        case "Show only once to each customer":
                            return !this.isACustomer();
                        case "Show to all subscribers on every visit":
                            return this.isACustomer();
                        case "Show only once per subscriber":
                            return this.isACustomer() && !this.hasAlreadyViewedPopup();
                        case "Show to customer at interval of days":
                            return this.handleIntervalBasedDisplay(t["By Visitor"].attributes)
                    }
                }
                return !(this.isACustomer() && this.hasAlreadyViewedPopup())
            });
            g(this, "getLastViewedDaysAgo", () => {
                const t = `last-viewed-popup-${this.popupId}`,
                    e = localStorage.getItem(t);
                if (e) {
                    const n = new Date(e),
                        o = Math.abs(new Date - n);
                    return Math.floor(o / (1e3 * 60 * 60 * 24))
                }
                return null
            });
            g(this, "updateLastViewedDate", () => {
                const t = `last-viewed-popup-${this.popupId}`;
                localStorage.setItem(t, new Date().toString())
            });
            g(this, "handleIntervalBasedDisplay", (t = 1, e = !1) => {
                const n = z("contactIdBitespeed");
                if (!e && n) return !1;
                const i = `last-viewed-popup-${this.popupId}`,
                    o = localStorage.getItem(i);
                if (!o) return this.updateLastViewedDate(), !0;
                const s = new Date(o),
                    c = Math.abs(new Date - s);
                return Math.floor(c / (1e3 * 60 * 60 * 24)) >= t ? (localStorage.setItem(i, new Date().toString()), !0) : !1
            });
            g(this, "shouldShowForThisCountry", t => {
                const e = t["By Location"].selected;
                if (e.includes("Show to all countries")) return !0;
                const n = Intl.DateTimeFormat().resolvedOptions().timeZone,
                    i = t["By Location"].attributes,
                    o = (ee == null ? void 0 : ee.country) || "";
                if (o && i.includes(o)) {
                    if (e.includes("Show to specific countries")) return !0;
                    if (e.includes("Don't show to specific countries") || e.includes("Dont show to specific countries")) return !1
                }
                const s = countryTimezoneMapping.filter(({
                    timezones: r
                }) => r.includes(n));
                if (s.length === 1) {
                    const {
                        country: r
                    } = s[0];
                    if (i.includes(r)) {
                        if (e.includes("Show to specific countries")) return !0;
                        if (e.includes("Don't show to specific countries") || e.includes("Dont show to specific countries")) return !1
                    }
                }
                return e.includes("Don't show to specific countries") || e.includes("Dont show to specific countries") ? !0 : (e.includes("Show to specific countries"), !1)
            });
            g(this, "shouldShowForIndianStates", async t => {
                const e = String(t["By Location"].selected).toLowerCase();
                return e.includes("show to all indian states") ? !0 : new Promise(n => {
                    const i = t["By Location"].attributes,
                        o = i.map(r => r.toLowerCase()),
                        s = localStorage.getItem("userLiesInState");
                    if (s && s.includes("matchedState") && s.includes("expiryDate")) try {
                        const r = JSON.parse(s),
                            c = new Date(r.expiryDate);
                        if (new Date < c && typeof r.matchedState == "string" && r.matchedState) return n(o.includes(r.matchedState.toLowerCase()))
                    } catch (r) {}
                    navigator.geolocation ? navigator.geolocation.getCurrentPosition(async r => {
                        const c = r.coords.latitude,
                            d = r.coords.longitude;
                        try {
                            const p = (await T(this, re).checkIfUserLiesInStates(i, [d, c])).result;
                            let f = p.result,
                                m = p.matchedState,
                                y = p.expiryDate;
                            f === !0 ? (localStorage.setItem("userLiesInState", JSON.stringify({
                                matchedState: m,
                                expiryDate: y || new Date(Date.now() + 15 * 24 * 60 * 60 * 1e3).toISOString()
                            })), e.includes("show to specific indian states") && !e.includes("don't") && n(!0), e.includes("don't show to specific indian states") && n(!1)) : (e.includes("show to specific indian states") && !e.includes("don't") && n(!1), e.includes("don't show to specific indian states") && n(!0))
                        } catch (l) {
                            n(!1)
                        }
                    }, () => n(!1)) : n(!0)
                })
            });
            g(this, "shouldShowForCurrentRegion", async t => {
                if (!t || !t["By Location"]) return !0;
                const e = (t["By Location"].selected || "").toLowerCase();
                return e.includes("countries") ? this.shouldShowForThisCountry(t) : e.includes("states") ? this.shouldShowForIndianStates(t) : !0
            });
            g(this, "shouldShowToTrafficSourceV2", t => {
                if (!t.Params.length) return !0;
                const {
                    Match: e,
                    Params: n
                } = t, i = new URLSearchParams(window.location.search);
                return e === "All" ? n.every(o => i.get(o.paramName) === o.paramValue) : e === "Any" ? n.some(o => i.get(o.paramName) === o.paramValue) : e === "None" ? n.every(o => i.get(o.paramName) !== o.paramValue) : !1
            });
            g(this, "ifPassedNumberCondition", async (t, e, n) => {
                switch (t) {
                    case "greater than":
                        return n > e;
                    case "less than":
                        return n < e;
                    case "equals to":
                        return n === e;
                    case "not equals to":
                        return n !== e;
                    case "greater than or equals to":
                        return n >= e;
                    case "less than or equals to":
                        return n <= e;
                    default:
                        return !1
                }
            });
            g(this, "ifPassedBooleanCondition", async (t, e) => t === "true" || t === !0 ? e : t === "false" || t === !1 ? !e : !1);
            g(this, "shouldShowToUserInteractionV2", async t => {
                if (!t || !t.Triggers.length) return !0;
                const {
                    Match: e,
                    Triggers: n
                } = t, i = await Promise.all(n.map(async o => {
                    var w;
                    const {
                        Event: s,
                        Condition: r,
                        Value: c,
                        Array: d,
                        ExtraAttribute: l
                    } = o, p = (r + "").toLowerCase();
                    let f, m, y;
                    if (s === "No Event Selected") return !0;
                    if (s === "On Cart Created") return (window.location.pathname.includes("cart") || window.location.pathname.includes("checkout")) && this.popupJson.type === "cross-sell-popup" ? !1 : new Promise(u => {
                        Rt += 1;
                        const h = xe(async (S, b) => {
                            if (b) {
                                let I;
                                try {
                                    const P = JSON.parse(localStorage.getItem("bspdCart"));
                                    I = Array.isArray(P == null ? void 0 : P.items) ? P : {
                                        items: []
                                    }
                                } catch (P) {
                                    I = {
                                        items: []
                                    }
                                }
                                let C = Ne(I, S);
                                if (C.added.length === 0 && C.removed.length === 0 && (C = Ne(Ve, S)), Mt += 1, (C.added.length > 0 || C.removed.length > 0) && (de = C, Ve = I, Mt % Rt === 0 && localStorage.setItem("bspdCart", JSON.stringify(S))), Ge.length > 0 ? Ge.some(P => {
                                        var D;
                                        return P.id === ((D = C.added[0]) == null ? void 0 : D.id)
                                    }) : !1) {
                                    u(!1), h.unsubscribe();
                                    return
                                }
                                if (C.added.length <= 0) u(!1);
                                else if (!d.length) u(!0), h.unsubscribe();
                                else {
                                    const P = C.added.map(D => D.product_id) || [];
                                    if (d.length > 0) {
                                        if (p === "contains") {
                                            const D = d.some(v => P.includes(v.id));
                                            D && (u(D), h.unsubscribe())
                                        } else if (p === "does not contains") {
                                            const D = !d.some(v => P.includes(v.id));
                                            D && (u(D), h.unsubscribe())
                                        }
                                    } else d.length || (u(!0), h.unsubscribe())
                                }
                            }
                        })
                    });
                    if (s === "Is Cart Created") {
                        try {
                            f = BspdCurrentCart
                        } catch (S) {}
                        const u = f && f.items && f.items.length > 0,
                            h = await this.ifPassedBooleanCondition(p, u);
                        return h ? !0 : p === "true" && !u ? new Promise(S => {
                            const b = xe((I, C) => {
                                C && (b.unsubscribe(), S(!0))
                            })
                        }) : h
                    }
                    if (s === "Total Cart Value") {
                        try {
                            f = BspdCurrentCart
                        } catch (S) {}
                        const u = isNaN(c) ? 0 : Number(c),
                            h = (f == null ? void 0 : f.total_price) / 100;
                        return this.ifPassedNumberCondition(p, u, h)
                    }
                    if (s === "Currently Visited Product") {
                        try {
                            m = BspdCurrentProduct
                        } catch (u) {}
                        return m ? p === "contains" ? d.some(u => u.id === m.id) : p === "does not contains" ? !d.some(u => u.id === m.id) : !1 : !1
                    }
                    if (s === "Product Price") {
                        try {
                            m = BspdCurrentProduct
                        } catch (S) {}
                        if (!m) return !1;
                        const u = isNaN(c) ? 0 : Number(c),
                            h = m.price / 100;
                        return this.ifPassedNumberCondition(p, u, h)
                    }
                    if (s === "Product Variant Inventory Quantity") {
                        try {
                            m = BspdCurrentProduct
                        } catch (b) {}
                        if (!m) return !1;
                        const u = await T(this, re).getQuickProductMetadata(window.Shopify.shop, [m.id], ["inventoryQuantity"]);
                        if (!((w = u == null ? void 0 : u.result) != null && w[m.id])) return !1;
                        const h = isNaN(c) ? 0 : Number(c),
                            S = {};
                        return u.result[m.id].forEach(b => {
                            S[b.shopifyId] = U({}, b)
                        }), window.bspdPopupProductMetadata = ce(U({}, S), {
                            popupId: this.popupId,
                            value: h,
                            condition: p
                        }) || {}, !0
                    }
                    if (s === "Last Visited Product") {
                        const u = this.browserService.getCookie("bspdLastVisitedProduct");
                        if (!isNaN(u)) {
                            const h = Number(u);
                            if (p === "contains") return d.some(S => S.id === h);
                            if (p === "does not contains") return !d.some(S => S.id === h)
                        }
                        return !1
                    }
                    if (s === "Currently Visited Collection") {
                        try {
                            y = BspdCurrentCollection
                        } catch (u) {}
                        return y ? p === "contains" ? d.some(u => u.id === y.id) : p === "does not contains" ? !d.some(u => u.id === y.id) : !1 : !1
                    }
                    if (s === "Last Visited Collection") {
                        const u = this.browserService.getCookie("bspdLastVisitedCollection");
                        if (!isNaN(u)) {
                            const h = Number(u);
                            if (p === "contains") return d.some(S => S.id === h);
                            if (p === "does not contains") return !d.some(S => S.id === h)
                        }
                        return !1
                    }
                    if (s === "Visit count in past(n) days") {
                        const u = localStorage.getItem("bspdLastUserVisitCount") || "{}",
                            h = JSON.parse(u),
                            S = isNaN(l) ? 0 : Number(l),
                            b = new Date;
                        let I = 0;
                        for (let A = 0; A < S; A++) {
                            const P = new Date(b);
                            P.setDate(P.getDate() - A);
                            const D = P.toISOString().split("T")[0];
                            h != null && h[D] && (I += h[D].count)
                        }
                        const C = isNaN(c) ? 0 : Number(c);
                        return this.ifPassedNumberCondition(p, C, I)
                    }
                    if (s === "Already viewed any popup") {
                        const u = this.browserService.getCookie("view visual popup"),
                            h = u === "true" || u === !0;
                        return await this.ifPassedBooleanCondition(p, h)
                    }
                }));
                return e === "All" ? i.every(o => o === !0) : e === "Any" ? i.some(o => o === !0) : e === "None" ? i.every(o => o === !1) : !1
            });
            g(this, "shouldPassThroughConditionsV2", async t => {
                if (!(t != null && t.TrafficSource) && !(t != null && t.UserInteraction)) return !0;
                const e = t.TrafficSource,
                    n = t.UserInteraction;
                return !(!(t != null && t.TrafficSource ? this.shouldShowToTrafficSourceV2(e) : !0) || !(t != null && t.UserInteraction ? await this.shouldShowToUserInteractionV2(n) : !0))
            });
            g(this, "shouldShowNowBasedOnTimeBasedTriggers", () => {
                var s;
                const t = ((s = this.behaviour) == null ? void 0 : s.TimeBasedTrigger) || {};
                if (!(t != null && t.type)) return !0;
                const e = new Date,
                    n = e.getDate(),
                    i = e.toLocaleString("en-US", {
                        weekday: "long"
                    }),
                    o = (r, c) => {
                        const [d, l, p] = r.match(/(\d+):(\d+)\s?(AM|PM|am|pm)/i).slice(1), [f, m, y] = c.match(/(\d+):(\d+)\s?(AM|PM|am|pm)/i).slice(1);
                        let w = new Date(e),
                            u = new Date(e);
                        return w.setHours(p.toUpperCase() === "AM" ? Number(d) % 12 : Number(d) % 12 + 12, Number(l), 0, 0), u.setHours(y.toUpperCase() === "AM" ? Number(f) % 12 : Number(f) % 12 + 12, Number(m), 0, 0), e >= w && e <= u
                    };
                switch (t.type) {
                    case "all_time":
                        return !0;
                    case "one_time":
                        {
                            const r = new Date(t.startDate),
                                c = new Date(t.endDate);
                            return r ? e >= r && e <= c : !0
                        }
                    case "specific_hours":
                        {
                            const r = t.daysOfWeek || [];
                            if (r.length > 0 && !r.includes(i)) return !1;
                            const c = t.startTime,
                                d = t.endTime;
                            return c && d ? o(c, d) : !0
                        }
                    case "multiple_times_a_day":
                        {
                            const r = t.intervals || [];
                            if (!r.length) return !0;
                            for (const c of r)
                                if (o(c.start, c.end)) return !0;
                            return !1
                        }
                    case "few_days_a_week":
                        {
                            const r = t.daysOfWeek || [];
                            return r.length ? r.includes(i) : !0
                        }
                    case "few_days_a_month":
                        {
                            const r = t.daysOfMonth || [];
                            return r.length ? r.includes(n) : !0
                        }
                    default:
                        return !0
                }
            });
            g(this, "addPopupTrigger", async () => new Promise(async t => {
                var o;
                const e = ((o = this.behaviour) == null ? void 0 : o.TimeBasedTrigger) || {};
                if (e != null && e.type && !this.shouldShowNowBasedOnTimeBasedTriggers()) return t(!1);
                const n = this.behaviour.When.selected;
                if (["X seconds after page load", "After scrolling X% of the page", "afterClick"].includes(n)) {
                    await this.handleTopLevelTrigger(n, t);
                    return
                }
                await this.handleRegularTrigger(n, t)
            }));
            g(this, "handleTopLevelTrigger", async (t, e) => {
                const n = async () => {
                    if (this.behaviour.Version === 2 && (!this.passWhereCondition(this.behaviour.Where) || !this.passWhoCondition(this.behaviour.Who, 2) || !await this.shouldPassThroughConditionsV2(this.behaviour)) || this.behaviour.Version !== 2 && (!this.passWhereCondition(this.behaviour.Where) || !this.passWhoCondition(this.behaviour.Who, 1))) return e(!1);
                    try {
                        return await this.shouldShowForCurrentRegion(this.behaviour.Who) ? e(!0) : e(!1)
                    } catch (i) {
                        return console.log(i, "Bspd Popup ERROR Code 7400"), e(!1)
                    }
                };
                switch (t) {
                    case "X seconds after page load":
                        {
                            const i = this.behaviour.When.attributes * 1e3;setTimeout(n, i);
                            break
                        }
                    case "After scrolling X% of the page":
                        {
                            const i = this.behaviour.When.attributes;window.addEventListener("scroll", () => {
                                const o = document.documentElement.scrollTop,
                                    s = Math.max(document.body.clientHeight, document.body.scrollHeight || 0),
                                    r = document.documentElement.clientHeight,
                                    c = o / (s - r);
                                Math.round(c * 100) >= i && n()
                            });
                            break
                        }
                    case "afterClick":
                        {
                            window.addEventListener("click", n);
                            break
                        }
                }
            });
            g(this, "handleRegularTrigger", async (t, e) => {
                if (this.behaviour.Version === 2 && (!this.passWhereCondition(this.behaviour.Where) || !this.passWhoCondition(this.behaviour.Who, 2) || !await this.shouldPassThroughConditionsV2(this.behaviour)) || this.behaviour.Version !== 2 && (!this.passWhereCondition(this.behaviour.Where) || !this.passWhoCondition(this.behaviour.Who, 1))) return e(!1);
                this.shouldShowForCurrentRegion(this.behaviour.Who).then(n => {
                    var i, o;
                    if (!n) return e(!1);
                    switch (t) {
                        case "When product is out of stock":
                            {
                                const s = this.browserService.getShopDomain();
                                return initNotifyFrontendService(this.popupId, this.behaviour.When.attributeText, s),
                                e(!1)
                            }
                        case "When an element is clicked on the page":
                            {
                                const s = this.behaviour.When.attributeText;
                                if (s) {
                                    const c = `#${(s+"").replace(/[^a-zA-Z0-9\-_]/g,"")}`;
                                    try {
                                        const d = document.querySelector(c);
                                        d && (d.onclick = () => e(!0))
                                    } catch (d) {}
                                }
                                break
                            }
                        case "Show immediately on page load":
                            e(!0);
                            break;
                        case "Show X minutes after cart created":
                            {
                                const s = Number(this.behaviour.When.attributes);
                                if (!s) return e(!1);
                                const r = 60 * 1e3,
                                    c = s * r;
                                let d = z("bspd_cart_created_at") ? Number.parseInt(z("bspd_cart_created_at")) : null;
                                try {
                                    if (!BspdCurrentCart) return e(!1);
                                    if (d) {
                                        if ((Date.now() - d) / r >= s) return e(!0); {
                                            const p = d + c - Date.now();
                                            setTimeout(() => e(!0), p)
                                        }
                                    } else if (!d || BspdCurrentCart.items.length === 0 || ((i = BspdCurrentCart.items) == null ? void 0 : i[0].quantity) === 0) {
                                        const l = xe(() => {
                                            l.unsubscribe();
                                            const p = z("bspd_cart_created_at") || Date.now();
                                            if (p)
                                                if ((Date.now() - p) / r >= s) e(!0);
                                                else {
                                                    const m = p - Date.now() + c;
                                                    setTimeout(() => e(!0), m)
                                                }
                                        })
                                    }
                                } catch (l) {
                                    return console.error("Error in Show X minutes after cart created:", l), e(!1)
                                }
                                break
                            }
                        case "When user is leaving a page":
                            {
                                if ((o = this.browserService) != null && o.isPhone) {
                                    e(!0);
                                    break
                                }
                                window.addEventListener("mouseout", s => {
                                    s.clientY < 0 && e(!0)
                                });
                                break
                            }
                        case "afterClick":
                            {
                                window.addEventListener("click", () => e(!0));
                                break
                            }
                    }
                }).catch(n => (console.log(n, "Bspd Popup ERROR Code 4006"), e(!1)))
            });
            g(this, "handleConversion", async ({
                country: t,
                phone: e,
                email: n,
                name: i,
                consentProvided: o = !0,
                extraUserAttributes: s
            }, {
                getDiscount: r,
                discountCode: c,
                requiredDiscount: d,
                staticDiscount: l,
                isWinning: p
            }, {
                listId: f,
                popupType: m,
                webPushSubscription: y,
                popupId: w = void 0
            }) => {
                var S, b, I, C, A, P, D, v;
                (!ee || typeof ee != "object" || Object.keys(ee).length === 0) && await T(this, re).getLocationData();
                const u = await T(this, re).registerConversion(w || this.popupId, {
                    country: (S = t == null ? void 0 : t.replace(" ", "")) == null ? void 0 : S.replace("+", ""),
                    phone: e,
                    email: n,
                    name: i,
                    consentProvided: o,
                    extraUserAttributes: s
                }, {
                    getDiscount: r,
                    discountCode: c,
                    requiredDiscount: d,
                    staticDiscount: l,
                    isWinning: p
                }, {
                    listId: typeof f == "number" ? f : typeof f == "string" && f !== "" ? Number.parseInt(f) : null,
                    popupType: m,
                    webPushSubscription: y
                }, {
                    productId: this.productId,
                    variantId: this.variantId
                }, {
                    popupTrigger: this.popupTrigger
                });
                this.alreadyConverted = !0;
                const h = ((C = (I = (b = u == null ? void 0 : u.results) == null ? void 0 : b[1]) == null ? void 0 : I.value) == null ? void 0 : C.id) || ((P = (A = u == null ? void 0 : u.results) == null ? void 0 : A[1]) == null ? void 0 : P.id) || ((D = u == null ? void 0 : u.results) == null ? void 0 : D.contactId);
                return u && h && this.browserService.setCookie("contactIdBitespeed", h, 1e3), this.popupType === "visual popup" && ((v = this.teaserSettings) == null ? void 0 : v.stopDisplaying) === "visitor_converts" && (this.teaserDisabled = !0), u
            });
            g(this, "loadSelectedSliceSTW", async () => {
                const t = await T(this, re).getSelectedSliceForSTW(this.popupId);
                t && (t != null && t.result) && (this.popupJson = ce(U({}, this.popupJson), {
                    selectedPie: t.result
                }))
            });
            g(this, "preloadDiscount", async (t, e) => {
                await T(this, re).getDiscountCode(this.popupId, t, e)
            });
            g(this, "otpState", null);
            g(this, "sendOtp", async t => {
                const e = await T(this, re).sendOtp({
                    phone: t,
                    sourceType: "popup",
                    sourceId: String(this.popupId)
                });
                return (e == null ? void 0 : e.status) === "ok" && (e != null && e.verificationToken) && (this.otpState = {
                    verificationToken: e.verificationToken,
                    phone: t,
                    sentAt: Date.now()
                }), e
            });
            g(this, "verifyOtp", async t => {
                var e;
                return (e = this.otpState) != null && e.verificationToken ? T(this, re).verifyOtp({
                    verificationToken: this.otpState.verificationToken,
                    otp: t
                }) : {
                    status: "error",
                    message: "OTP was not sent. Please go back and try again."
                }
            });
            var s, r, c, d, l, p;
            this.popupJson = t, o ? (o === "bar" || t.type.includes("bar") || o === "cross-sell-popup" || t.type.includes("cross-sell-popup")) && K(this, se, (d = this.popupJson) == null ? void 0 : d.popupHtml) : K(this, se, !t.type.includes("chat") && !t.type.includes("stw") && !t.type.includes("webPush") ? JSON.parse((s = this == null ? void 0 : this.popupJson) == null ? void 0 : s.popupHtml)[i] : t.type.includes("chat") ? JSON.parse((r = this == null ? void 0 : this.popupJson) == null ? void 0 : r.popupHtml).popupHtmlTop : (c = this == null ? void 0 : this.popupJson) == null ? void 0 : c.popupHtml), K(this, We, t.type.includes("chat") ? JSON.parse((l = this == null ? void 0 : this.popupJson) == null ? void 0 : l.popupHtml).popupHtmlBottom : null), this.currentView = i, this.teaserSettings = ((p = t.unlayerJson) == null ? void 0 : p.Teaser) || {}, this.behaviour = t.behaviour, this.popupId = t.id, this.popupType = t.type, K(this, ot, t.behaviour), K(this, it, t.targeting), this.discountType = this.getDiscountType(t == null ? void 0 : t.unlayerJson), this.DiscountCodeValuePercentage = this.findFieldInJson(t == null ? void 0 : t.unlayerJson, "DiscountCodeValuePercentage"), this.DiscountCode = this.findFieldInJson(t == null ? void 0 : t.unlayerJson, "DiscountCode"), this.browserService = e, K(this, re, n)
        }
        haveAlreadyViewed() {
            const t = this.browserService.getCookie(`view ${this.popupType}`),
                e = localStorage.getItem(`bspdViewsCnt-${this.popupId}`);
            return !!(t || Number(e) > 1)
        }
    }
    se = new WeakMap, We = new WeakMap, ot = new WeakMap, it = new WeakMap, re = new WeakMap;
    class Vn extends ye {
        constructor(t, e, n) {
            super(t, e, n), this.loadSelectedSliceSTW()
        }
    }
    class kn extends ye {
        constructor(t, e, n) {
            super(t, e, n)
        }
    }
    class On extends ye {
        constructor(t, e, n) {
            super(t, e, n)
        }
    }
    var pe;
    class Nn extends ye {
        constructor(e, n, i) {
            super(e, n, i, "", "bar");
            G(this, pe, null);
            g(this, "alreadyRegisteredClickImpression", !1);
            g(this, "cartData", {});
            g(this, "cartTotalValue", 0);
            g(this, "show", async () => {
                var r, c, d, l, p, f, m, y, w, u, h, S, b, I, C, A, P, D, v, J, H, j;
                const e = this.getPopupHtml(),
                    n = this.popupJson.unlayerJson,
                    i = await qe(!0);
                this.cartData = i || {}, this.cartTotalValue = i != null && i.original_total_price ? i.original_total_price / 100 : 0;
                const o = (((r = n == null ? void 0 : n.bars) == null ? void 0 : r.map(x => x.bar.position)) || ["top"])[0] || "top",
                    s = document.createElement("iframe");
                if (s.id = `bspd-bar-iframe${this.popupId}`, s.setAttribute("sandbox", "allow-scripts allow-forms allow-same-origin allow-popups"), Object.assign(s.style, {
                        width: "100%",
                        border: "0px solid white",
                        zIndex: "68.2147483647",
                        display: "block",
                        lineHeight: "0",
                        height: "0"
                    }), o === "top" || !o) {
                    const x = ((l = (d = (c = n == null ? void 0 : n.bars) == null ? void 0 : c[0]) == null ? void 0 : d.bar) == null ? void 0 : l.placement) || ((y = (m = (f = (p = n == null ? void 0 : n.bars) == null ? void 0 : p[0]) == null ? void 0 : f.progressBar) == null ? void 0 : m.design) == null ? void 0 : y.placement),
                        N = ((h = (u = (w = n == null ? void 0 : n.bars) == null ? void 0 : w[0]) == null ? void 0 : u.bar) == null ? void 0 : h.placementSelector) || ((C = (I = (b = (S = n == null ? void 0 : n.bars) == null ? void 0 : S[0]) == null ? void 0 : b.progressBar) == null ? void 0 : I.design) == null ? void 0 : C.placementSelector),
                        q = ((D = (P = (A = n == null ? void 0 : n.bars) == null ? void 0 : A[0]) == null ? void 0 : P.bar) == null ? void 0 : D.placementSelectorMobile) || ((j = (H = (J = (v = n == null ? void 0 : n.bars) == null ? void 0 : v[0]) == null ? void 0 : J.progressBar) == null ? void 0 : H.design) == null ? void 0 : j.placementSelectorMobile),
                        W = window.innerWidth;
                    if (x === "sticky_with_header") {
                        Object.assign(s.style, {
                            position: "sticky",
                            top: "0",
                            left: "0",
                            width: "100%",
                            zIndex: "2147483647"
                        });
                        let B = null;
                        try {
                            B = document.querySelector(W < 1025 ? q || "sticky-header" : N || "sticky-header")
                        } catch ($) {}
                        let k = !1;
                        for (const $ of [document.documentElement, document.body]) {
                            const O = window.getComputedStyle($);
                            O.overflowX === "hidden" && ($.style.overflowX = "clip", k = !0), O.overflowY === "hidden" && ($.style.overflowY = "clip", k = !0)
                        }
                        if (B && !k) B.insertBefore(s, B.firstChild);
                        else {
                            document.body.insertBefore(s, document.body.firstChild);
                            for (let $ = B; $ && $ !== document.body; $ = $.parentElement) window.getComputedStyle($).position === "sticky" && ($.style.position = "relative")
                        }
                    } else document.body.insertBefore(s, document.body.firstChild)
                } else o === "bottom" && (Object.assign(s.style, {
                    position: "fixed",
                    bottom: "0",
                    left: "0"
                }), document.body.appendChild(s));
                s.srcdoc = `<!DOCTYPE html><html><head><style>*{margin:0;padding:0;font-family:Arial,sans-serif;}</style></head><body>${e}</body></html>`, T(this, pe).registerImpression(this.popupId), s.onload = () => {
                    this.popupJson.unlayerJson.type === "cart_progress_bar" ? this.initCartProgressBar() : this.fillInBarVariables(), this.handleActions(), this.updateLastViewedDate();
                    const N = (s.contentDocument || s.contentWindow.document).querySelector(".bspd-bar");
                    N && (s.style.cssText = `
          ${s.style.cssText};
          height: ${N.offsetHeight}px !important;
          ${o==="bottom"?`
            position: fixed;
            bottom: 0;
            left: 0;
          `:""}
        `, this.syncBarHeight())
                }
            });
            g(this, "fillInBarVariables", async () => {
                var s, r;
                const e = document.getElementById(`bspd-bar-iframe${this.popupId}`),
                    n = e.contentDocument || e.contentWindow.document,
                    i = ((s = this.popupJson.unlayerJson) == null ? void 0 : s.shopCurrency) || "\u20B9",
                    o = ((r = this.popupJson.unlayerJson) == null ? void 0 : r.bars) || [];
                Array.isArray(o) && o.length > 0 && o.forEach(c => {
                    const l = `#bspd-bar-container${c==null?void 0:c.id} .bspd-bar-text`;
                    let p = null;
                    try {
                        p = n.querySelector(l)
                    } catch (f) {}
                    p && (p.innerText = p.innerText.replaceAll("{{currency}}", i).replaceAll("{{cart_amount}}", this.cartData.total_price / 100 || 0).replaceAll("{{cart_original_amount}}", this.cartData.original_total_price / 100 || 0).replaceAll("{{item_count}}", this.cartData.item_count || 0).replaceAll("{{note}}", this.cartData.note || "").replaceAll("{{total_discount}}", this.cartData.total_discount / 100 || 0))
                })
            });
            g(this, "syncBarHeight", () => {
                const e = document.getElementById(`bspd-bar-iframe${this.popupId}`),
                    i = (e.contentDocument || e.contentWindow.document).querySelector(".bspd-bar");
                i && (e.style.cssText = `
        ${e.style.cssText};
        height: ${i.offsetHeight}px !important;
      `, e.style.height, i.offsetHeight)
            });
            g(this, "handleActions", () => {
                var c, d;
                const e = document.getElementById(`bspd-bar-iframe${this.popupId}`),
                    n = e.contentDocument || e.contentWindow.document,
                    i = n.querySelector(".bspd-bar-cross-action-svg");
                i && (i.onclick = l => {
                    l.stopPropagation(), this.handleClose()
                });
                const o = ((c = this.popupJson.unlayerJson) == null ? void 0 : c.bars) || [];
                Array.isArray(o) && o.length > 0 && o.forEach(l => {
                    const p = l == null ? void 0 : l.id,
                        f = n.getElementById(`bspd-bar-button${p}`);
                    if (f) {
                        const w = f.dataset.href,
                            u = f.dataset.target || "_self";
                        f.onclick = async h => {
                            h.preventDefault(), h.stopPropagation(), w && /^https?:\/\//i.test(w) && window.open(w, u), this.registerClickImpression()
                        }
                    }
                    const m = n.querySelectorAll(`.bspd-bar-discount-text#bspd-bar-discount-text${p} span`);
                    m == null || m.forEach(w => {
                        if (w) {
                            const u = w.innerText;
                            w.onclick = async h => {
                                h.stopPropagation();
                                try {
                                    await navigator.clipboard.writeText(u), w.innerText = "COPIED!", setTimeout(() => {
                                        w.innerText = u
                                    }, 2e3)
                                } catch (S) {
                                    console.error("Failed to copy: ", S)
                                }
                                this.registerClickImpression()
                            }
                        }
                    });
                    const y = n.getElementsByClassName(`bspd-bar-container${p}`);
                    Array.from(y).forEach(w => {
                        w.onclick = u => {
                            var h, S, b;
                            if (u.stopPropagation(), ((h = l == null ? void 0 : l.bar) == null ? void 0 : h.isBarClickable) === !0) {
                                const I = (S = l == null ? void 0 : l.bar) == null ? void 0 : S.barUrl,
                                    C = (b = l == null ? void 0 : l.bar) == null ? void 0 : b.barUrlTarget;
                                I && /^https?:\/\//i.test(I) && window.open(I, C)
                            }
                            this.registerClickImpression()
                        }
                    })
                });
                const s = (d = this.popupJson.unlayerJson) == null ? void 0 : d.id,
                    r = n.getElementById(`bspd-bar${s}`);
                r && (r.onclick = l => {
                    l.stopPropagation(), this.registerClickImpression()
                }), this.syncBarHeight()
            });
            g(this, "makeBarAttributed", async (e = {}) => {
                fetch("/cart/update.js", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        attributes: U({
                            bspdBarId: this.popupId,
                            createdBy: "bitespeed.co"
                        }, e)
                    })
                })
            });
            g(this, "registerClickImpression", async () => {
                if (!this.alreadyRegisteredClickImpression) try {
                    this.makeBarAttributed();
                    const e = await T(this, pe).registerImpression(this.popupId, "clicked");
                    return this.alreadyRegisteredClickImpression = !0, e
                } catch (e) {
                    return null
                }
            });
            g(this, "initCartProgressBar", async () => {
                this.updateProgressBar(), xe(e => {
                    this.cartData = e || {};
                    const n = (e == null ? void 0 : e.original_total_price) / 100;
                    this.cartTotalValue !== n && (this.cartTotalValue = n || 0, this.updateProgressBar())
                })
            });
            g(this, "updateProgressBar", async (e = this.cartTotalValue) => {
                var w, u, h, S, b, I, C, A;
                const n = document.getElementById(`bspd-bar-iframe${this.popupId}`),
                    i = n.contentDocument || n.contentWindow.document,
                    o = (h = (u = (w = this.popupJson.unlayerJson) == null ? void 0 : w.bars) == null ? void 0 : u[0]) == null ? void 0 : h.progressBar,
                    s = ((S = o == null ? void 0 : o.goals) == null ? void 0 : S.map(P => P.minSubtotal)) || [],
                    r = ((b = this.popupJson.unlayerJson) == null ? void 0 : b.shopCurrency) || "\u20B9",
                    c = await this.calculateProgressBarMetadata(e, s),
                    d = (c == null ? void 0 : c.nextCheckpointValue) || 0,
                    l = i.getElementById("bar-progress-title");
                if (l) {
                    const P = c.isComplete ? o.goalTitle : o.title.replaceAll("{{store_currency}}", r).replaceAll("{{currency}}", r).replaceAll("{{remaining_amount}}", `${(d-c.cartValue).toFixed(2)}`).replaceAll("{{next_goal_amount}}", `${d.toFixed(2)}`).replaceAll("{{cart_amount}}", `${c.cartValue.toFixed(2)}`);
                    l.innerText = P
                }
                const p = i.getElementById("bar-progress-bar-filled");
                p && (p.style.width = `${c.percentage}%`), this.syncBarHeight();
                let f = -1,
                    m = !1,
                    y = !1;
                if (s.forEach((P, D) => {
                        var J, H;
                        const v = i.getElementById(`goal-icon-${D}`);
                        if (v)
                            if (((c == null ? void 0 : c.startCheckpoint.value) || 0) >= P) {
                                v.classList.add("completed"), v.classList.remove("incomplete"), f = D;
                                for (let x = 0; x <= D; ++x)((H = (J = o == null ? void 0 : o.goals) == null ? void 0 : J[x]) == null ? void 0 : H.type) === "free_shipping" && (m = !0, x === D && (y = !0))
                            } else v.classList.add("incomplete"), v.classList.remove("completed")
                    }), f >= 0) {
                    if ((o == null ? void 0 : o.areDiscountsStatic) === !0) {
                        const P = ((C = (I = o == null ? void 0 : o.goals) == null ? void 0 : I[f]) == null ? void 0 : C.discountCode) || "";
                        P && (await fetch(`/discount/${P}`, {
                            method: "GET"
                        }), await this.makeBarAttributed({
                            discountCode: m ? void 0 : P,
                            shippingCode: m ? P : void 0,
                            barCompletedCheckpoints: f + 1,
                            containsShippingDiscount: m
                        }))
                    } else if ((o == null ? void 0 : o.areDiscountsStatic) === !1) {
                        const P = (A = o == null ? void 0 : o.goals) == null ? void 0 : A[f],
                            D = ["PERCENTAGE", "percentage"].includes(o.discountType) ? "percentage" : "fixed",
                            v = ["PERCENTAGE", "percentage"].includes(o.discountType) ? P.discountPercentage : P.discountFixed,
                            J = `cache-code-${this.popupId}-${v}-${D}-${f}-${P.minSubtotal}`,
                            H = `cache-shipping-code-${this.popupId}`,
                            j = /^[A-Za-z0-9_-]{1,64}$/,
                            x = localStorage.getItem(J),
                            N = localStorage.getItem(H),
                            q = x && j.test(x) ? x : null,
                            W = N && j.test(N) ? N : null;
                        let B = "",
                            k = "";
                        if (y && !W) k = await T(this, pe).getSparkles({
                            min: P.minSubtotal,
                            discount: {
                                type: D,
                                value: v,
                                withProductDiscount: !1,
                                withOrderDiscount: !1,
                                withShippingDiscount: !0,
                                attachFreeShipping: !0
                            },
                            products: [],
                            name: "Progress Bar: Cart Dicount",
                            appliesOnEachItem: !1,
                            popupId: this.popupId
                        });
                        else if (m && (!W || !q)) {
                            const $ = [];
                            W ? $.push(W) : $.push(T(this, pe).getSparkles({
                                min: P.minSubtotal,
                                discount: {
                                    type: D,
                                    value: v,
                                    withShippingDiscount: !0,
                                    attachFreeShipping: !0
                                },
                                products: [],
                                name: "Progress Bar: Cart Dicount",
                                appliesOnEachItem: !1,
                                popupId: this.popupId
                            })), q ? $.push(q) : $.push(T(this, pe).getSparkles({
                                min: P.minSubtotal,
                                discount: {
                                    type: D,
                                    value: v,
                                    withShippingDiscount: !0,
                                    attachFreeShipping: !1
                                },
                                products: [],
                                name: "Progress Bar: Cart Dicount",
                                appliesOnEachItem: !1,
                                popupId: this.popupId
                            }));
                            const [O, E] = await Promise.all($);
                            O && (k = O), E && (B = E)
                        } else m && W ? (k = W || "", q && (B = q || "")) : q ? B = q || "" : B = await T(this, pe).getSparkles({
                            min: P.minSubtotal,
                            discount: {
                                type: D,
                                value: v,
                                withShippingDiscount: !0,
                                attachFreeShipping: !1
                            },
                            products: [],
                            name: "Progress Bar: Cart Dicount",
                            appliesOnEachItem: !1,
                            popupId: this.popupId
                        });
                        B && (localStorage.setItem(J, B), await fetch(`/discount/${B}`, {
                            method: "GET"
                        })), m && k && (localStorage.setItem(H, k), await fetch(`/discount/${k}`, {
                            method: "GET"
                        })), (B || k) && await this.makeBarAttributed({
                            discountCode: B || void 0,
                            shippingCode: k || void 0,
                            barCompletedCheckpoints: f + 1,
                            containsShippingDiscount: k.length > 0
                        })
                    }
                }
            });
            g(this, "calculateProgressBarMetadata", async (e = this.cartTotalValue, n = []) => {
                if (!Array.isArray(n) || n.length === 0 || e < 0) return {
                    cartValue: e,
                    percentage: 0,
                    currentRange: {
                        start: 0,
                        end: 0
                    },
                    startCheckpoint: {
                        value: 0,
                        position: 0
                    },
                    endCheckpoint: {
                        value: 0,
                        position: 0
                    },
                    isComplete: !1,
                    nextCheckpointValue: null
                };
                const i = [...n].sort((h, S) => h - S),
                    o = i.length,
                    s = Array.from({
                        length: o
                    }, (h, S) => (S + 1) * 100 / o);
                if (e === 0) return {
                    cartValue: e,
                    percentage: 0,
                    currentRange: {
                        start: 0,
                        end: 1
                    },
                    startCheckpoint: {
                        value: 0,
                        position: 0
                    },
                    endCheckpoint: {
                        value: i[0],
                        position: s[0]
                    },
                    isComplete: !1,
                    nextCheckpointValue: i[0]
                };
                if (e >= i[o - 1]) return {
                    cartValue: e,
                    percentage: 100,
                    currentRange: {
                        start: o,
                        end: o
                    },
                    startCheckpoint: {
                        value: i[o - 1],
                        position: 100
                    },
                    endCheckpoint: {
                        value: i[o - 1],
                        position: 100
                    },
                    isComplete: !0,
                    nextCheckpointValue: null
                };
                let r = 0,
                    c = 1,
                    d = 0,
                    l = i[0],
                    p = 0,
                    f = s[0];
                for (let h = 0; h < o; h++)
                    if (e >= i[h]) h < o - 1 && (r = h + 1, c = h + 2, d = i[h], l = i[h + 1], p = s[h], f = s[h + 1]);
                    else {
                        h === 0 ? (r = 0, c = 1, d = 0, l = i[0], p = 0, f = s[0]) : (r = h, c = h + 1, d = i[h - 1], l = i[h], p = s[h - 1], f = s[h]);
                        break
                    }
                const m = (e - d) / (l - d),
                    y = p + m * (f - p),
                    w = Math.max(0, Math.min(100, y));
                let u = null;
                for (let h = 0; h < o; h++)
                    if (i[h] > e) {
                        u = i[h];
                        break
                    }
                return {
                    cartValue: e,
                    percentage: Math.round(w * 100) / 100,
                    currentRange: {
                        start: r,
                        end: c
                    },
                    startCheckpoint: {
                        value: d,
                        position: p
                    },
                    endCheckpoint: {
                        value: l,
                        position: f
                    },
                    isComplete: e >= i[o - 1],
                    nextCheckpointValue: u
                }
            });
            g(this, "handleClose", async () => {
                const e = document.getElementById(`bspd-bar-iframe${this.popupId}`);
                e && (e.style.display = "none", await T(this, pe).registerImpression(this.popupId, "closed"))
            });
            K(this, pe, i), this.addPopupTrigger().then(o => {
                if (o) {
                    this.show();
                    const s = `bspdViewsCnt-${this.popupId}`,
                        r = Number(localStorage.getItem(s)) || 0;
                    localStorage.setItem(s, r + 1)
                }
            })
        }
    }
    pe = new WeakMap;
    var ae, $e;
    class Ln extends ye {
        constructor(e, n, i) {
            super(e, n, i, "", "cross-sell-popup");
            G(this, ae);
            g(this, "productsToRender", []);
            g(this, "discount", {
                type: "none",
                value: 0,
                code: "",
                withProductDiscount: !1,
                withOrderDiscount: !1,
                withShippingDiscount: !1
            });
            g(this, "shopCurrency", "");
            g(this, "offerType", "FBT");
            g(this, "checkedVariants", {});
            g(this, "selectedVariants", {});
            g(this, "productsAddedToCartSeparately", {});
            g(this, "alreadyInteractedWithPopup", !1);
            g(this, "alreadyConverted", !1);
            g(this, "crossSellPopupHtml", "");
            g(this, "preloadedDiscount", "");
            g(this, "productsIncludedInDiscount", []);
            g(this, "preloadProductAddedToCartId", null);
            g(this, "preloadProduct", null);
            g(this, "isRecommendedProducts", !1);
            g(this, "stopProcessing", !1);
            g(this, "init", async (e = !1) => {
                var l, p, f, m, y, w;
                if (e && (window == null ? void 0 : window.BspdCurrentProduct) === null && !((p = (l = de == null ? void 0 : de.added) == null ? void 0 : l[0]) != null && p.product_id)) return;
                const n = this.popupJson.unlayerJson;
                let i = (n == null ? void 0 : n.selectedProductsToShow) || [];
                if (this.crossSellPopupHtml = this.getPopupHtml().replaceAll('alt="Trigger Product"', "").replaceAll('width={"256"}', "").replaceAll('height={"256"}', ""), (m = (f = de == null ? void 0 : de.added) == null ? void 0 : f[0]) != null && m.product_id ? (this.preloadProductAddedToCartId = de.added[0].product_id, this.preloadProduct = de.added[0]) : window != null && window.BspdCurrentProduct && (this.preloadProductAddedToCartId = window.BspdCurrentProduct.id, this.preloadProduct = window.BspdCurrentProduct), this.isRecommendedProducts = (n == null ? void 0 : n.productSelection) === "automatic", (n == null ? void 0 : n.productSelection) === "automatic" && this.preloadProductAddedToCartId) try {
                    const h = await (await fetch(`/recommendations/products.json?product_id=${this.preloadProductAddedToCartId}&limit=4&intent=${(n==null?void 0:n.productToShowIntent)||"related"}`)).json(),
                        S = await T(this, ae).getDynamicPopupData({
                            popupId: this.popupId,
                            productId: this.preloadProductAddedToCartId,
                            popupConfig: null,
                            products: h.products || []
                        });
                    ((y = S == null ? void 0 : S.html) == null ? void 0 : y.length) > 0 && (this.crossSellPopupHtml = S.html, i = S.products || i || [])
                } catch (u) {
                    console.error("Error in fetching dynamic HTML: ", u)
                } else if ((n == null ? void 0 : n.productSelection) === "product_feed") {
                    const u = await T(this, ae).getDynamicPopupData({
                        popupId: this.popupId,
                        productId: this.preloadProductAddedToCartId,
                        popupConfig: null,
                        products: []
                    });
                    ((w = u == null ? void 0 : u.html) == null ? void 0 : w.length) > 0 && (this.crossSellPopupHtml = u.html, i = u.products || i || [])
                }
                const o = (u, h) => !u || !h ? u : u.replaceAll(`${h} - `, "").replaceAll(`${h}`, "").replace(/^[\s-]+|[\s-]+$/g, "").replaceAll("&amp;", "&").trim() || u,
                    s = await Promise.all(i.map(async u => {
                        var h;
                        try {
                            const S = (u == null ? void 0 : u.handle) || (u == null ? void 0 : u.producthandle);
                            if (!S) return {
                                id: u == null ? void 0 : u.id,
                                available: !0,
                                variants: (u == null ? void 0 : u.variants) || []
                            };
                            const I = await (await fetch(`/products/${S}.js`)).json();
                            return {
                                id: u.id,
                                available: (h = I == null ? void 0 : I.available) != null ? h : !1,
                                variants: (I == null ? void 0 : I.variants.map(C => ce(U({}, C), {
                                    name: o(C.name, u.name)
                                })).sort((C, A) => C.name.localeCompare(A.name))) || []
                            }
                        } catch (S) {
                            return {
                                id: u.id,
                                available: !1,
                                variants: []
                            }
                        }
                    }));
                if (s.every(u => !u.available)) {
                    this.stopProcessing = !0;
                    return
                }
                i = i.filter(u => s.some(h => h.id === u.id && h.available)).map(u => {
                    const h = s.find(b => b.id === u.id),
                        S = (h == null ? void 0 : h.variants) || [];
                    return ce(U({}, u), {
                        variants: ((u == null ? void 0 : u.variants) || []).filter(b => S.some(I => I.id === b.id && I.available)).sort((b, I) => {
                            var P, D;
                            const C = (P = h == null ? void 0 : h.variants) == null ? void 0 : P.findIndex(v => v.id === b.id),
                                A = (D = h == null ? void 0 : h.variants) == null ? void 0 : D.findIndex(v => v.id === I.id);
                            return C - A
                        }).map(b => ce(U({}, b), {
                            name: o(b.name, u == null ? void 0 : u.name)
                        }))
                    })
                }), s.forEach(u => {
                    const h = `[[bspd-csp-product-item-wrapper-${u.id}]]`;
                    if (this.crossSellPopupHtml.includes(h) && (this.crossSellPopupHtml = this.crossSellPopupHtml.replace(h, u.available ? "flex" : "none")), u.available) {
                        const S = `[[bspd-csp-product-variant-options-list-${u.id}]]`;
                        let b = "";
                        for (let I = 0; I < u.variants.length; I++) {
                            const C = u.variants[I];
                            C.available && (b += `<option value="${C.id}"${I===0?" selected":""}>${T(this,$e).call(this,C.name)}</option>`)
                        }
                        this.crossSellPopupHtml.includes(S) && (this.crossSellPopupHtml = this.crossSellPopupHtml.replace(S, b))
                    }
                });
                const r = {},
                    c = {},
                    d = {};
                i.forEach(u => {
                    var I;
                    const h = u == null ? void 0 : u.id,
                        S = (u == null ? void 0 : u.variants) || [],
                        b = (I = S == null ? void 0 : S[0]) == null ? void 0 : I.id;
                    r[h] = !0, c[h] = b, d[h] = !1
                }), this.checkedVariants = r, this.selectedVariants = c, this.productsAddedToCartSeparately = d, this.productsToRender = i, this.discount = (n == null ? void 0 : n.discount) || this.discount, this.shopCurrency = n == null ? void 0 : n.shopCurrency, this.offerType = (n == null ? void 0 : n.offerType) === "frequently_bought_together" ? "FBT" : "YMAL", this.preloadedDiscount || await this.preloadDiscount(i.map(u => u.id))
            });
            g(this, "show", async () => {
                var s, r, c, d;
                if (this.stopProcessing) return;
                if (this.isRecommendedProducts && this.preloadProductAddedToCartId !== ((r = (s = de == null ? void 0 : de.added) == null ? void 0 : s[0]) == null ? void 0 : r.product_id) || !this.crossSellPopupHtml) {
                    if (await this.init(), !this.crossSellPopupHtml || this.stopProcessing) return
                } else this.preloadProduct = (c = de == null ? void 0 : de.added) == null ? void 0 : c[0];
                const e = l => {
                        let p = this.putInCartChangesUI();
                        if (p = p.replaceAll('alt="Trigger Product"', "").replaceAll('width={"256"}', "").replaceAll('height={"256"}', ""), this.handleUserInputInteractionsFBT(), this.handleUserInputInteractionsYMAL(), this.handleActions(), this.updateLastViewedDate(), T(this, ae).registerImpression(this.popupId), p.includes("Trigger Product") || p.includes("Product To Show")) {
                            n.remove();
                            return
                        }
                        l.target.removeEventListener("load", e)
                    },
                    n = document.createElement("iframe");
                n.id = `bspd-csp-iframe${this.popupId}`, n.setAttribute("sandbox", "allow-scripts allow-forms allow-same-origin allow-popups"), n.style.cssText = `
      width: 100%;
      height: 100%;
      border: none;
      z-index: ${((d=window.bspdStoreConfig)==null?void 0:d.cspCustomZIndexOverride)||1e8};
      position: fixed;
      top: 0;
      left: 0;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    `, n.srcdoc = Oe(this.crossSellPopupHtml);
                let i = !1;
                const o = l => {
                    i || (i = !0, e(l))
                };
                n.addEventListener("load", o), setTimeout(() => {
                    i || o({
                        target: n
                    })
                }, 500), document.body.appendChild(n)
            });
            g(this, "preloadDiscount", async (e = []) => {
                var i, o;
                const n = (o = (i = this.popupJson.unlayerJson) == null ? void 0 : i.discount) == null ? void 0 : o.type;
                if (!(!n || n === "none") && window != null && window.BspdCurrentProduct) {
                    const s = this.getTotalCartValue();
                    this.productsIncludedInDiscount = [...e, window.BspdCurrentProduct.id], this.preloadedDiscount = await T(this, ae).getSparkles({
                        min: s,
                        discount: this.discount,
                        products: [...e, window.BspdCurrentProduct.id],
                        name: "FBT:CSP",
                        appliesOnEachItem: !1,
                        popupId: this.popupId
                    })
                }
            });
            g(this, "getNumberOfProductsSelected", () => Object.values(this.checkedVariants).filter(Boolean).length);
            g(this, "getTotalCartValueFromSeparatelyAddedProducts", () => {
                const e = this.productsToRender.reduce((n, i) => {
                    var s;
                    if (!this.productsAddedToCartSeparately[i.id]) return n;
                    const o = (s = i == null ? void 0 : i.variants) == null ? void 0 : s.find(r => r.id === Number(this.selectedVariants[i.id]));
                    return o ? n + o.price : n
                }, 0);
                return this.formatFloat(e)
            });
            g(this, "getTotalCartValue", (e = this.productsToRender) => {
                var i;
                const n = e.reduce((o, s) => {
                    var c;
                    if (!this.checkedVariants[s.id]) return o;
                    const r = (c = s == null ? void 0 : s.variants) == null ? void 0 : c.find(d => d.id === Number(this.selectedVariants[s.id]));
                    return r ? o + r.price : o
                }, 0);
                if (this.preloadProduct) {
                    const o = (i = this.preloadProduct) != null && i.price ? this.preloadProduct.price / 100 : 0;
                    return n + o
                }
                return this.formatFloat(n)
            });
            g(this, "getTotalCartDiscountAmount", (e = this.productsToRender) => {
                const n = this.getNumberOfProductsSelected();
                if (n <= 0 || n < this.productsToRender.length) return 0;
                const i = this.getTotalCartValue(e),
                    {
                        type: o,
                        value: s = 0
                    } = this.discount;
                return o === "none" ? 0 : o === "percentage" ? this.formatFloat(i * s / 100) : o === "fixed" ? this.formatFloat(s) : 0
            });
            g(this, "getTotalCartDiscountedAmount", (e = this.productsToRender) => {
                const n = this.getTotalCartValue(e),
                    i = this.getTotalCartDiscountAmount(e);
                return this.formatFloat(n - i)
            });
            g(this, "getRelativeDiscountProductAmount", (e, n) => {
                var p;
                if (this.getNumberOfProductsSelected() < this.productsToRender.length) return 0;
                const o = this.getTotalCartValue(),
                    s = this.productsToRender.find(f => f.id === Number(e)),
                    r = (p = s == null ? void 0 : s.variants) == null ? void 0 : p.find(f => f.id === Number(n)),
                    c = (r == null ? void 0 : r.price) || 0,
                    {
                        type: d,
                        value: l = 0
                    } = this.discount;
                if (d === "none") return 0;
                if (d === "percentage") return this.formatFloat(c * l / 100);
                if (d === "fixed") {
                    const f = c / o * 100,
                        m = l * f / 100;
                    return this.formatFloat(m)
                }
                return 0
            });
            g(this, "getRelativeDiscountedProductAmount", (e, n) => {
                var r, c;
                const i = this.productsToRender.find(d => d.id === Number(e)),
                    o = (r = i == null ? void 0 : i.variants) == null ? void 0 : r.find(d => d.id === Number(n)),
                    s = this.getRelativeDiscountProductAmount(e, n);
                return this.formatFloat(((c = o == null ? void 0 : o.price) != null ? c : 0) - s)
            });
            g(this, "getDirectDiscountAmount", (e, n) => {
                var d;
                const i = this.productsToRender.find(l => l.id === Number(e)),
                    o = (d = i == null ? void 0 : i.variants) == null ? void 0 : d.find(l => l.id === Number(n)),
                    s = (o == null ? void 0 : o.price) || 0,
                    {
                        type: r,
                        value: c = 0
                    } = this.discount;
                return r === "none" ? 0 : r === "percentage" ? this.formatFloat(s * c / 100) : r === "fixed" ? this.formatFloat(c) : 0
            });
            g(this, "getDirectDiscountedAmount", (e, n) => {
                var r, c;
                const i = this.productsToRender.find(d => d.id === Number(e)),
                    o = (r = i == null ? void 0 : i.variants) == null ? void 0 : r.find(d => d.id === Number(n)),
                    s = this.getDirectDiscountAmount(e, n);
                return this.formatFloat(((c = o == null ? void 0 : o.price) != null ? c : 0) - s)
            });
            g(this, "putInCartChangesUI", () => {
                var s, r;
                if (((r = (s = this.popupJson) == null ? void 0 : s.unlayerJson) == null ? void 0 : r.offerType) !== "frequently_bought_together") {
                    const c = document.getElementById(`bspd-csp-iframe${this.popupId}`);
                    return (c.contentDocument || c.contentWindow.document).body.innerHTML.replaceAll('alt="Trigger Product"', "").replaceAll('width={"256"}', "").replaceAll('height={"256"}', "")
                }
                const e = document.getElementById(`bspd-csp-iframe${this.popupId}`),
                    n = e.contentDocument || e.contentWindow.document,
                    i = n.querySelector(".bspd-product-added-to-cart"),
                    o = this.preloadProduct;
                if (i && o) {
                    this.updateFooterUI();
                    const c = n.querySelector(".bspd-csp-product-image"),
                        d = n.querySelector(".bspd-csp-product-name"),
                        l = n.querySelector(".bspd-csp-product-price"),
                        p = n.querySelector(".bspd-csp-product-compareatprice"),
                        {
                            type: f,
                            value: m = 0
                        } = this.discount,
                        y = (o == null ? void 0 : o.price) / 100;
                    let w = y;
                    const u = this.getNumberOfProductsSelected();
                    if (f === "percentage" && u === this.productsToRender.length) w = y - y * m / 100;
                    else if (f === "fixed" && u === this.productsToRender.length) {
                        const h = y / this.getTotalCartValue() * 100,
                            S = m * h / 100;
                        w = this.formatFloat(y - S)
                    }
                    return c.src = (o == null ? void 0 : o.image) + "&width=200", d.innerText = T(this, $e).call(this, Jt(o == null ? void 0 : o.title)), l.innerText = `${this.shopCurrency}${this.formatDecimalSeparator(w)}`, p.innerText = Math.floor(y) === Math.floor(w) ? "" : `${this.shopCurrency}${this.formatDecimalSeparator(y||0)}`, n.body.innerHTML.replaceAll('alt="Trigger Product"', "").replaceAll('width={"256"}', "").replaceAll('height={"256"}', "")
                }
                return n.body.innerHTML.replaceAll('alt="Trigger Product"', "").replaceAll('width={"256"}', "").replaceAll('height={"256"}', "")
            });
            g(this, "updateFooterUI", () => {
                var f, m;
                if (((m = (f = this.popupJson) == null ? void 0 : f.unlayerJson) == null ? void 0 : m.offerType) !== "frequently_bought_together") return;
                const e = document.getElementById(`bspd-csp-iframe${this.popupId}`),
                    n = e.contentDocument || e.contentWindow.document,
                    i = n.querySelector(".footer-total-price-text"),
                    o = n.querySelector(".footer-compare-at-price-text"),
                    s = n.querySelector(".bspd-csp-footer-pricing-desc span"),
                    r = n.querySelector(".bspd-csp-add-to-cart-btn"),
                    c = this.getTotalCartValue(),
                    d = this.getTotalCartDiscountAmount(),
                    l = this.getTotalCartDiscountedAmount();
                l <= 0 ? (i.innerText = `${this.shopCurrency}${this.formatDecimalSeparator(0)}`, o && (o.innerText = ""), s && (s.innerText = `${this.shopCurrency}${this.formatDecimalSeparator(0)}`)) : (i.innerText = `${this.shopCurrency}${this.formatDecimalSeparator(l)}`, o && (o.innerText = Math.floor(l) === Math.floor(c) ? "" : `${this.shopCurrency}${this.formatDecimalSeparator(c)}`), s && (s.innerText = `${this.shopCurrency}${this.formatDecimalSeparator(d)}`));
                const p = this.getNumberOfProductsSelected();
                r && (r.disabled = p <= 0, r.style.filter = p <= 0 ? "grayscale(100%)" : "grayscale(0%)")
            });
            g(this, "handleActions", () => {
                const e = document.getElementById(`bspd-csp-iframe${this.popupId}`),
                    n = e.contentDocument || e.contentWindow.document,
                    i = n.querySelector(".bspd-csp-header-close");
                i && i.addEventListener("click", () => this.handleClose());
                const o = n.querySelector(".bspd-csp");
                o && (o.onclick = s => s.stopPropagation(), o.ontouchstart = s => s.stopPropagation())
            });
            g(this, "handleUserInputInteractionsFBT", () => {
                var c, d;
                if (((d = (c = this.popupJson) == null ? void 0 : c.unlayerJson) == null ? void 0 : d.offerType) !== "frequently_bought_together") return;
                this.updateUIWithSelectedVariant();
                const e = document.getElementById(`bspd-csp-iframe${this.popupId}`),
                    n = e.contentDocument || e.contentWindow.document;
                n.querySelectorAll("input.bspd-csp-product-checkbox").forEach(l => {
                    var f, m;
                    const p = l.dataset.productId;
                    ((f = this.checkedVariants) == null ? void 0 : f[p]) !== void 0 && ((m = this.checkedVariants) == null ? void 0 : m[p]) !== null && (this.checkedVariants[p] = l.checked), l.addEventListener("click", y => {
                        var w, u;
                        ((w = this.checkedVariants) == null ? void 0 : w[p]) !== void 0 && ((u = this.checkedVariants) == null ? void 0 : u[p]) !== null && (this.checkedVariants[p] = y.target.checked), this.putInCartChangesUI(), this.updateUIWithSelectedVariant(), this.alreadyInteractedWithPopup || (this.alreadyInteractedWithPopup = !0, T(this, ae).registerImpression(this.popupId, "crossSellInteracted"))
                    })
                }), n.querySelectorAll("select.bspd-csp-product-variant-select").forEach(l => {
                    var m;
                    const p = l.dataset.productId,
                        f = l.value;
                    (m = this.selectedVariants) != null && m[p] && (this.selectedVariants[p] = f), l.onchange = y => {
                        var u;
                        const w = y.target.value;
                        (u = this.selectedVariants) != null && u[p] && (this.selectedVariants[p] = w), this.updateFooterUI(), this.updateUIWithSelectedVariant(), this.alreadyInteractedWithPopup || (this.alreadyInteractedWithPopup = !0, T(this, ae).registerImpression(this.popupId, "crossSellInteracted"))
                    }
                });
                const s = n.querySelector(".bspd-csp-continue-button");
                s && s.addEventListener("click", () => this.handleClose());
                const r = n.querySelector("button.bspd-csp-add-to-cart-btn");
                r && r.addEventListener("click", async () => {
                    await this.onAddToCartBulk()
                })
            });
            g(this, "handleUserInputInteractionsYMAL", () => {
                var r, c;
                if (((c = (r = this.popupJson) == null ? void 0 : r.unlayerJson) == null ? void 0 : c.offerType) !== "you_may_also_like") return;
                this.updateUIWithSelectedVariant();
                const e = document.getElementById(`bspd-csp-iframe${this.popupId}`),
                    n = e.contentDocument || e.contentWindow.document;
                n.querySelectorAll("select.bspd-csp-product-variant-select").forEach(d => {
                    var f;
                    const l = d.dataset.productId,
                        p = d.value;
                    (f = this.selectedVariants) != null && f[l] && (this.selectedVariants[l] = p), d.onchange = m => {
                        var w;
                        const y = m.target.value;
                        (w = this.selectedVariants) != null && w[l] && (this.selectedVariants[l] = y), this.updateUIWithSelectedVariant(), this.alreadyInteractedWithPopup || (this.alreadyInteractedWithPopup = !0, T(this, ae).registerImpression(this.popupId, "crossSellInteracted"))
                    }
                }), n.querySelectorAll("button.bspd-csp-product-add-to-cart-btn").forEach(d => {
                    const l = d.dataset.productId;
                    d.addEventListener("click", async () => {
                        await this.onAddToCartSingle(l)
                    })
                });
                const s = n.querySelector(".bspd-csp-continue-button");
                s && s.addEventListener("click", d => {
                    d.stopPropagation(), this.handleClose()
                })
            });
            g(this, "handleClose", async () => {
                var f, m, y, w;
                const e = document.getElementById(`bspd-csp-iframe${this.popupId}`),
                    n = e.contentDocument || e.contentWindow.document,
                    i = n.querySelector(".bspd-csp-parent"),
                    o = "bspd-backdrop-enter-animation-class",
                    s = "bspd-backdrop-exit-animation-class",
                    r = n.querySelector("div.bspd-csp"),
                    c = "bspd-enter-animation-class",
                    d = "bspd-exit-animation-class";
                r && (r.classList.remove(c), r.classList.remove(d), r.classList.add(d)), i && (i.classList.remove(o), i.classList.remove(s), i.classList.add(s));
                const l = this.popupJson.unlayerJson,
                    p = (((m = (f = l == null ? void 0 : l.design) == null ? void 0 : f.animation) == null ? void 0 : m.duration) || 0) + (((w = (y = l == null ? void 0 : l.design) == null ? void 0 : y.animation) == null ? void 0 : w.delay) || 0);
                setTimeout(() => {
                    e.remove()
                }, p * 1e3), this.alreadyConverted || await T(this, ae).registerImpression(this.popupId, "closed")
            });
            g(this, "formatFloat", (e = 0) => parseFloat(Number(e).toFixed(2)));
            g(this, "formatDecimalSeparator", (e, n = "en-IN") => Number(e).toLocaleString(n));
            g(this, "updateUIWithSelectedVariant", () => {
                var i, o;
                const e = document.getElementById(`bspd-csp-iframe${this.popupId}`),
                    n = e.contentDocument || e.contentWindow.document;
                for (const s in this.selectedVariants) {
                    const r = this.selectedVariants[s],
                        c = n.querySelector(`.bspd-csp-product-image-${s}`),
                        d = n.querySelector(`.bspd-csp-product-name-${s}`),
                        l = n.querySelector(`.bspd-csp-product-price-${s}`),
                        p = n.querySelector(`.bspd-csp-product-compareatprice-${s}`),
                        f = (i = this.productsToRender) == null ? void 0 : i.find(y => y.id === Number(s)),
                        m = (o = f == null ? void 0 : f.variants) == null ? void 0 : o.find(y => y.id === Number(r));
                    if (m) {
                        c.src = (m == null ? void 0 : m.image) + "&width=200";
                        let y = this.getRelativeDiscountedProductAmount(s, r);
                        this.offerType === "YMAL" && (y = this.getDirectDiscountedAmount(s, r)), d.innerText = T(this, $e).call(this, Jt(f.name)), l.innerText = `${this.shopCurrency}${this.formatDecimalSeparator(y)}`, p.innerText = y === (m == null ? void 0 : m.price) ? "" : `${this.shopCurrency}${this.formatDecimalSeparator(m==null?void 0:m.price)}`
                    }
                }
            });
            g(this, "onAddToCartSingle", async e => {
                this.productsAddedToCartSeparately = ce(U({}, this.productsAddedToCartSeparately), {
                    [e]: !0
                });
                const n = document.getElementById(`bspd-csp-iframe${this.popupId}`),
                    o = (n.contentDocument || n.contentWindow.document).querySelector(`button.bspd-csp-product-add-to-cart-btn-${e}`);
                o && (o.classList.add("loader-btn"), o.style.filter = "grayscale(100%)", o.disabled = !0);
                const s = this.selectedVariants[e],
                    r = this.productsToRender.find(m => m.id === Number(e)),
                    c = r == null ? void 0 : r.variants.find(m => m.id === Number(s)),
                    d = [{
                        id: c == null ? void 0 : c.id,
                        quantity: 1
                    }];
                let l = "";
                const p = this.getTotalCartValueFromSeparatelyAddedProducts(),
                    f = Object.keys(this.productsAddedToCartSeparately).filter(m => this.productsAddedToCartSeparately[m]);
                this.discount.type !== "none" && (l = await T(this, ae).getSparkles({
                    min: p,
                    discount: this.discount,
                    products: f,
                    name: "YMAL:CSP",
                    appliesOnEachItem: !0,
                    popupId: this.popupId
                })), Ge = d, fetch("/cart/add.js", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        attributes: {
                            bspdCspId: this.popupId,
                            createdBy: "bitespeed.co"
                        },
                        items: d
                    })
                }).then(async m => (this.discount.type !== "none" && l && await fetch(`/discount/${l}`), o.classList.remove("loader-btn"), o.innerText = "Added", o.style.filter = "grayscale(0%)", this.alreadyConverted || (await T(this, ae).registerImpression(this.popupId, "addToCart", l), this.alreadyConverted = !0), setTimeout(() => {
                    var y, w, u;
                    o.disabled = !1, o.innerText = ((u = (w = (y = this.popupJson) == null ? void 0 : y.unlayerJson) == null ? void 0 : w.design) == null ? void 0 : u.buttonText) || "Add to cart"
                }, 250), m.json())).catch(m => {
                    console.error("Error:", m)
                })
            });
            g(this, "onAddToCartBulk", async () => {
                var l;
                const e = document.getElementById(`bspd-csp-iframe${this.popupId}`),
                    i = (e.contentDocument || e.contentWindow.document).querySelector("button.bspd-csp-add-to-cart-btn");
                i && (i.classList.add("loader-btn"), i.style.filter = "grayscale(100%)", i.disabled = !0);
                const o = Object.keys(this.selectedVariants),
                    s = [];
                for (const p of o)
                    if (this.checkedVariants[p]) {
                        const f = this.selectedVariants[p],
                            m = this.productsToRender.find(y => y.id === Number(p));
                        if (m) {
                            const y = m.variants.find(w => w.id === Number(f));
                            y && s.push({
                                id: y.id,
                                quantity: 1
                            })
                        }
                    }
                let r = this.preloadedDiscount || "";
                const c = this.getTotalCartValue(),
                    d = this.getNumberOfProductsSelected();
                if (this.discount.type !== "none" && d >= this.productsToRender.length) {
                    const p = this.preloadProduct,
                        f = p == null ? void 0 : p.product_id,
                        m = o.map(Number),
                        y = [f, ...m],
                        w = y.length === this.productsIncludedInDiscount.length && ((l = this.productsIncludedInDiscount) == null ? void 0 : l.every(u => y.includes(u)));
                    (!this.preloadedDiscount || !r || !w) && (r = await T(this, ae).getSparkles({
                        min: c,
                        discount: this.discount,
                        products: y,
                        name: "FBT:CSP",
                        appliesOnEachItem: !1,
                        popupId: this.popupId
                    }))
                }
                Ge = s, fetch("/cart/add.js", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        attributes: {
                            bspdCspId: this.popupId,
                            createdBy: "bitespeed.co"
                        },
                        items: s
                    })
                }).then(async p => (this.discount.type !== "none" && r && await fetch(`/discount/${r}`), i.classList.remove("loader-btn"), i.innerText = "Added", i.style.filter = "grayscale(0%)", this.alreadyConverted || (await T(this, ae).registerImpression(this.popupId, "addToCart", r), this.alreadyConverted = !0), setTimeout(() => {
                    var f, m, y;
                    i.disabled = !1, i.innerText = ((y = (m = (f = this.popupJson) == null ? void 0 : f.unlayerJson) == null ? void 0 : m.design) == null ? void 0 : y.buttonText) || "Add to cart", this.handleClose(), window.location.href = `${window.Shopify.routes.root}cart`
                }, 250), p.json())).catch(p => {
                    console.error("Error:", p)
                })
            });
            G(this, $e, e => {
                if (typeof e != "string") return "";
                const n = document.createElement("div");
                return n.textContent = e, n.innerHTML
            });
            K(this, ae, i), this.init(!0), this.addPopupTrigger().then(o => {
                if (o) {
                    this.show();
                    const s = `bspdViewsCnt-${this.popupId}`,
                        r = Number(localStorage.getItem(s)) || 0;
                    localStorage.setItem(s, r + 1)
                }
            }).catch(o => {
                console.error("Error in showing popup: ", o)
            })
        }
    }
    ae = new WeakMap, $e = new WeakMap;
    var Me;
    class Fn extends ye {
        constructor(e, n, i) {
            super(e, n, i);
            G(this, Me);
            g(this, "show", async () => {
                if (!("serviceWorker" in navigator && "PushManager" in window)) return;
                const e = await navigator.serviceWorker.register("/apps/bitespeed/worker.js"),
                    {
                        registerImpression: n
                    } = T(this, Me),
                    {
                        setCookie: i
                    } = this.browserService,
                    {
                        popupId: o,
                        popupType: s
                    } = this,
                    r = e.installing || e.waiting || e.active;
                if (!r) return;
                await (async () => {
                    r.state === "activated" && await Ht(n, i, e, o, s)
                })(), r.addEventListener("statechange", async d => {
                    d.target.state === "activated" && await Ht(n, i, e, o, s)
                }), await e.pushManager.getSubscription()
            });
            K(this, Me, i)
        }
    }
    Me = new WeakMap;
    var Je;
    class Rn extends ye {
        constructor(e, n, i) {
            super(e, n, i);
            g(this, "popupJson", {});
            g(this, "browserService", null);
            G(this, Je, null);
            g(this, "widgetSelector", ".woot-widget-bubble");
            g(this, "widgetWelcomeSelector", ".woot-welcome-bubble");
            g(this, "show", async () => {
                const {
                    behaviour: e
                } = this.popupJson || {};
                (e == null ? void 0 : e.UseBehavioralTargeting) === !0 && !await this.addPopupTrigger() || (this.render(), this.onDemandTrigger())
            });
            g(this, "render", () => {
                const e = "https://chat.bitespeed.co";
                if (document.getElementById("bitespeed-livechat-script")) return;
                const n = document.createElement("script");
                n.src = `${e}/packs/js/sdk.js`, n.defer = !0, n.async = !0, n.type = "text/javascript", n.id = "bitespeed-livechat-script";
                const i = async () => {
                    var o, s;
                    if ((s = (o = this.popupJson) == null ? void 0 : o.popupHtml) != null && s.includes("websiteToken")) {
                        let r;
                        try {
                            r = JSON.parse(this.popupJson.popupHtml)
                        } catch (f) {
                            console.error("Invalid popupHtml JSON", f);
                            return
                        }
                        const {
                            websiteToken: c,
                            chatButtonStyles: d
                        } = r, l = await qe(!0);
                        window.chatwootSDK.run({
                            websiteToken: c,
                            baseUrl: e,
                            parentShopify: window.Shopify || {},
                            meta: {
                                parentShopify: window.Shopify || {},
                                origin: window.location.origin,
                                popupId: this.popupId,
                                browserId: this.browserService.getBrowserId(),
                                contactId: z(le),
                                popupType: "live chat widget",
                                shopifyCart: l
                            }
                        }), this.startTrackingEvents();
                        const p = setInterval(() => {
                            const f = document.getElementById("cw-widget-holder"),
                                m = document.querySelector(this.widgetSelector),
                                y = document.querySelector(this.widgetWelcomeSelector);
                            if (m && d) {
                                if (d.left)
                                    if (m.style.left = d.left, f.classList.add("woot-elements--left"), f.classList.remove("woot-elements--right"), y) y.classList.add("woot-welcome-bubble--left"), y.classList.remove("woot-welcome-bubble--right");
                                    else {
                                        const w = new MutationObserver(() => {
                                            const h = document.querySelector(this.widgetWelcomeSelector);
                                            h && (h.classList.add("woot-welcome-bubble--left"), h.classList.remove("woot-welcome-bubble--right"), w.disconnect(), clearTimeout(u))
                                        });
                                        w.observe(document.body, {
                                            childList: !0,
                                            subtree: !0
                                        });
                                        const u = setTimeout(() => w.disconnect(), 1e4)
                                    }
                                d.bottom && (m.style.bottom = d.bottom), d.size && (m.style.transform = `scale(${d.size})`), d.zIndex && (m.style.cssText = `${m.style.cssText}; z-index: ${d.zIndex} !important`, y && (y.style.cssText = `${m.style.cssText}; z-index: ${d.zIndex} !important`)), clearInterval(p)
                            }
                        }, 10);
                        await T(this, Je).registerImpression(this.popupId, "")
                    }
                };
                n.addEventListener("load", i, {
                    once: !0
                }), n.addEventListener("error", o => console.error("Failed to load the script", o)), document.head.appendChild(n)
            });
            g(this, "startTrackingEvents", () => {
                const e = document.getElementById("chatwoot_live_chat_widget"),
                    n = o => {
                        if (!o) return [];
                        try {
                            return typeof o == "string" ? JSON.parse(o) : o
                        } catch (s) {
                            return console.error("Error parsing bitespeed_cart_products:", s), []
                        }
                    },
                    i = async o => {
                        const r = await (await fetch("/cart/update.js", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "X-Requested-With": "XMLHttpRequest"
                            },
                            body: JSON.stringify({
                                attributes: {
                                    bitespeed_cart_products: o
                                }
                            })
                        })).json();
                        e != null && e.contentWindow && e.contentWindow.postMessage(`chatwoot-widget:${JSON.stringify({event:"SHOPIFY_CART_UPDATED",cartData:r})}`, "https://chat.bitespeed.co")
                    };
                xe(async (o, s, r) => {
                    var c;
                    try {
                        const d = (c = o == null ? void 0 : o.attributes) == null ? void 0 : c.bitespeed_cart_products,
                            l = n(d),
                            p = (o == null ? void 0 : o.items) || [];
                        if ((!s && !r || r) && l.length > 0 && p.length === 0) {
                            await i([]);
                            return
                        }
                        if ((s || r) && l.length > 0) {
                            const f = new Set(l.map(y => y.id)),
                                m = p.filter(y => f.has(y.id)).map(y => {
                                    var w;
                                    return {
                                        id: y.id,
                                        quantity: y.quantity,
                                        currency: o.currency || "INR",
                                        price: (y.price / 100).toFixed(2),
                                        shopUrl: ((w = window.Shopify) == null ? void 0 : w.shop) || ""
                                    }
                                });
                            m.length > 0 && JSON.stringify(Qe(d)) !== JSON.stringify(Qe(m)) && await i(m)
                        }
                    } catch (d) {
                        console.error("Error updating bitespeed_cart_products attribute:", d)
                    }
                }), window.addEventListener("message", async o => {
                    var s, r;
                    if (o.origin === window.location.origin && o.source !== window && (s = o == null ? void 0 : o.data) != null && s.type) {
                        if (o.data.type === "CART_UPDATED") try {
                            const {
                                id: c,
                                quantity: d,
                                type: l,
                                attributes: p
                            } = o.data.data || {};
                            if (!Number.isInteger(c) || c <= 0 || !Number.isInteger(d) || d < 0 || d > 9999 || !["Add_TO_CART", "QUANTITY_CHANGED"].includes(l)) return;
                            const f = p && typeof p == "object" && !Array.isArray(p) ? Object.fromEntries(Object.entries(p).filter(([u, h]) => typeof u == "string" && typeof h == "string").map(([u, h]) => [u.slice(0, 100), h.slice(0, 500)])) : void 0,
                                y = await (await fetch("/cart.js")).json(),
                                w = ((r = y == null ? void 0 : y.items) == null ? void 0 : r.findIndex(u => u.id === c)) + 1;
                            if (l === "Add_TO_CART") {
                                const u = {
                                    form_type: "product",
                                    id: c,
                                    quantity: d
                                };
                                f && (u.attributes = f), await fetch("/cart/add.js", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json; charset=UTF-8",
                                        "X-Requested-With": "XMLHttpRequest"
                                    },
                                    body: JSON.stringify(u)
                                })
                            } else if (l === "QUANTITY_CHANGED") {
                                const u = new URLSearchParams({
                                    line: w,
                                    quantity: d
                                });
                                await fetch("/cart/change.js", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                                        "X-Requested-With": "XMLHttpRequest"
                                    },
                                    body: u.toString()
                                })
                            }
                        } catch (c) {
                            console.error("Error Adding Product to Cart", c)
                        }
                        if (o.data.type === "UPDATE_CART_ATTRIBUTES") try {
                            const c = o.data.attributes;
                            if (typeof c != "object" || c === null || Array.isArray(c)) return;
                            const d = Object.fromEntries(Object.entries(c).filter(([l, p]) => typeof l == "string" && typeof p == "string").map(([l, p]) => [l.slice(0, 100), p.slice(0, 500)]));
                            await fetch("/cart/update.js", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    "X-Requested-With": "XMLHttpRequest"
                                },
                                body: JSON.stringify({
                                    attributes: d
                                })
                            })
                        } catch (c) {
                            console.error("Error Updating Shopify Cart", c)
                        }
                    }
                })
            });
            g(this, "triggerLiveChat", () => {
                const e = document.querySelector(this.widgetSelector);
                e && e.click()
            });
            g(this, "onDemandTrigger", async () => {
                var i, o;
                const e = ((i = this.popupJson) == null ? void 0 : i.popupHtml) || "{}";
                if (!e.includes("onDemandTriggers")) return;
                let n;
                try {
                    n = (o = JSON.parse(e)) == null ? void 0 : o.onDemandTriggers
                } catch (s) {
                    console.error("Invalid popupHtml JSON for onDemandTriggers", s);
                    return
                }
                if (n != null && n.onElementClick) {
                    const s = n.onElementClick;
                    try {
                        const r = document.querySelector(s);
                        r && r.addEventListener("click", this.triggerLiveChat, {
                            once: !1
                        })
                    } catch (r) {}
                }
            });
            this.popupJson = e, this.browserService = n, K(this, Je, i), this.show();
            const o = `bspdViewsCnt-${this.popupId}`,
                s = Number(localStorage.getItem(o)) || 0;
            localStorage.setItem(o, s + 1)
        }
    }
    Je = new WeakMap;
    class Mn extends ye {
        constructor(e, n, i) {
            super(e, n, i, "nothing", "ai-nudge");
            g(this, "initPopup", async () => {
                try {
                    if (await this.addPopupTrigger()) {
                        await this.show();
                        const n = `bspdViewsCnt-${this.popupId}`,
                            i = Number(localStorage.getItem(n)) || 0;
                        localStorage.setItem(n, i + 1)
                    }
                } catch (e) {
                    console.error("Error in showing ai nudge:", e)
                }
            });
            g(this, "show", async () => {
                var s, r, c, d;
                const {
                    unlayerJson: e
                } = this.popupJson, n = ((r = (s = e == null ? void 0 : e.quickReply) == null ? void 0 : s.buttons) == null ? void 0 : r.map(({
                    buttonText: l,
                    nodeId: p
                }) => ({
                    text: l,
                    id: p
                }))) || [], i = z("cw_conversation");
                if (z("allow_ai_nudge")) {
                    const l = ((c = window == null ? void 0 : window.Shopify) == null ? void 0 : c.shop) || "",
                        p = ((d = e == null ? void 0 : e.messages) == null ? void 0 : d.primaryMessage) || "";
                    l && i && p && await new yt().post("send_ai_nudge_msg", {
                        shopUrl: l,
                        cwConversationToken: i,
                        payload: {
                            text: p,
                            quickReplies: n
                        }
                    })
                }
            });
            this.initPopup()
        }
    }
    class Jn extends ye {
        constructor(e, n, i) {
            super(e, n, i);
            g(this, "init", () => {
                var n, i;
                const e = (i = (n = this.popupJson) == null ? void 0 : n.unlayerJson) == null ? void 0 : i.integration;
                switch (e) {
                    case "alia":
                        this.handleAliaIntegration();
                        break;
                    default:
                        console.warn("Unsupported integration type:", e)
                }
            });
            g(this, "handleAliaIntegration", () => {
                var o, s, r, c, d;
                const e = ((o = window == null ? void 0 : window.Shopify) == null ? void 0 : o.shop) || "",
                    n = (r = (s = this.popupJson) == null ? void 0 : s.unlayerJson) == null ? void 0 : r.popupId,
                    i = (d = (c = this.popupJson) == null ? void 0 : c.unlayerJson) == null ? void 0 : d.listId;
                n && document.addEventListener("alia:signup", ({
                    detail: {
                        email: l,
                        phone: p
                    }
                }) => {
                    const f = p == null ? void 0 : p.replace("+", "");
                    !l && !f || this.handleConversion({
                        country: "",
                        phone: f,
                        email: l,
                        extraUserAttributes: {}
                    }, {
                        getDiscount: !1,
                        requiredDiscount: {},
                        discountCode: "",
                        staticDiscount: -1,
                        isDiscountEnabled: !1,
                        isWinning: !1
                    }, {
                        popupType: "visual popup",
                        popupId: n,
                        listId: i
                    })
                })
            });
            this.init()
        }
    }
    var He, st;
    class Hn {
        constructor(t, e) {
            g(this, "browserService", null);
            G(this, He, null);
            G(this, st, t => {
                const {
                    type: e
                } = t, n = [t, this.browserService, T(this, He)];
                switch (e) {
                    case "stw":
                        return new Vn(...n);
                    case "visual popup":
                        return new kn(...n);
                    case "chat widget":
                        return new On(...n);
                    case "bar":
                        return new Nn(...n);
                    case "cross-sell-popup":
                        return new Ln(...n);
                    case "webPush":
                        return new Fn(...n);
                    case "live chat widget":
                        return new Rn(...n);
                    case "ai-nudge":
                        return new Mn(...n);
                    case "integration":
                        return new Jn(...n);
                    default:
                        return null
                }
            });
            g(this, "getPopups", t => {
                const e = {},
                    n = this.browserService.getBlockedPopups();
                if (!Array.isArray(t)) return e;
                for (const i of t) {
                    const {
                        id: o
                    } = i;
                    if (n.includes(o)) continue;
                    const s = `${o}:bitespeed_popup`,
                        r = T(this, st).call(this, i);
                    r && (e[s] = r)
                }
                return e
            });
            this.browserService = t, K(this, He, e)
        }
    }
    He = new WeakMap, st = new WeakMap;
    const qn = async (a, t) => {
        const e = String(a["By Location"].selected).toLowerCase();
        return e.includes("show to all indian states") ? !0 : new Promise(n => {
            const i = a["By Location"].attributes,
                o = i.map(r => r.toLowerCase()),
                s = localStorage.getItem("userLiesInState");
            if (s && s.includes("matchedState") && s.includes("expiryDate")) try {
                const r = JSON.parse(s),
                    c = new Date(r.expiryDate);
                if (new Date < c && typeof r.matchedState == "string" && r.matchedState) return n(o.includes(r.matchedState.toLowerCase()))
            } catch (r) {}
            navigator.geolocation ? navigator.geolocation.getCurrentPosition(async r => {
                const c = r.coords.latitude,
                    d = r.coords.longitude;
                try {
                    const p = (await t(i, [d, c])).result;
                    let f = p.result,
                        m = p.matchedState,
                        y = p.expiryDate;
                    f === !0 ? (localStorage.setItem("userLiesInState", JSON.stringify({
                        matchedState: m,
                        expiryDate: y || new Date(Date.now() + 15 * 24 * 60 * 60 * 1e3).toISOString()
                    })), e.includes("show to specific indian states") && !e.includes("don't") && n(!0), e.includes("don't show to specific indian states") && n(!1)) : (e.includes("show to specific indian states") && !e.includes("don't") && n(!1), e.includes("don't show to specific indian states") && n(!0))
                } catch (l) {
                    n(!1)
                }
            }, () => n(!1)) : n(!0)
        })
    };
    var rt, he, Ce;
    class Un {
        constructor({
            shopDomain: t,
            browserId: e
        }) {
            G(this, rt, "");
            G(this, he, "");
            G(this, Ce, "");
            g(this, "getLocationData", async () => {
                try {
                    const t = localStorage.getItem(Ot),
                        e = Date.now();
                    if (t) try {
                        const {
                            detected: i,
                            expires: o
                        } = JSON.parse(t);
                        if (o > e && i) return ee = i
                    } catch (i) {}
                    const {
                        detected: n = {}
                    } = await this.BspdAPI.get("detect_l", "") || {};
                    return ee = n, localStorage.setItem(Ot, JSON.stringify({
                        detected: n,
                        expires: e + En
                    })), n
                } catch (t) {
                    return null
                }
            });
            g(this, "logStoreVisit", async () => {
                try {
                    const t = await An(),
                        e = z(le) || null,
                        n = T(this, he) || null,
                        i = {};
                    if (t != null && t.hash && t.confident && (i[""] = {
                            hash: t.hash
                        }), Bn)
                        for (const [w, u] of [
                                ["B", t == null ? void 0 : t.B],
                                ["C", t == null ? void 0 : t.C],
                                ["D", t == null ? void 0 : t.D],
                                ["E", t == null ? void 0 : t.E],
                                ["X", t == null ? void 0 : t.combined],
                                ["Y", t == null ? void 0 : t.Y]
                            ]) u != null && u.hash && (i[w] = u);
                    let o = !0,
                        s = null;
                    try {
                        s = localStorage.getItem(Vt)
                    } catch (w) {
                        o = !1
                    }
                    let r = null;
                    try {
                        r = JSON.parse(s || "null")
                    } catch (w) {}(!r || r.v !== 1 || typeof r.h != "object" || !r.h) && (r = null);
                    const c = r ? r.h : {},
                        d = Object.keys(i).filter(w => c[w] && c[w] !== i[w].hash),
                        l = Object.keys(i).filter(w => !c[w]),
                        p = Date.now(),
                        f = [];
                    if (o ? r ? (d.length && f.push("changed"), l.length && f.push("added")) : f.push("new") : f.push("nostore"), !f.length) return;
                    r && ((r.cid || null) !== e || (r.bid || null) !== n) && f.push("identity");
                    const m = {
                        fngr: f.join(",")
                    };
                    e && (m.contactId = e), n && (m.bid = n), r && (m.fngt = r.at, r.cid && r.cid !== e && (m.contactIdp = r.cid), r.bid && r.bid !== n && (m.bidp = r.bid));
                    for (const [w, u] of Object.entries(i)) m[`fng${w}`] = u.hash, u.confident !== void 0 && (m[`fng${w}c`] = u.confident), u.nativeId && (m[`fng${w}n`] = u.nativeId), d.includes(w) && (m[`fng${w}p`] = c[w]);
                    const y = await this.BspdAPI.post("log_visit", m);
                    if (o && (y == null ? void 0 : y.status) === "ok") {
                        const w = U({}, c);
                        for (const [u, h] of Object.entries(i)) w[u] = h.hash;
                        try {
                            localStorage.setItem(Vt, JSON.stringify({
                                v: 1,
                                at: p,
                                bid: n,
                                cid: e,
                                h: w
                            }))
                        } catch (u) {}
                    }
                } catch (t) {}
            });
            g(this, "getStorePopups", async () => {
                var t, e, n, i, o, s;
                try {
                    let r = !0;
                    ue = z("countryCodeBS"), ue && ue !== "" && (r = !1);
                    const c = ((t = window.Shopify) == null ? void 0 : t.shop) || "";
                    K(this, Ce, c), this.logStoreVisit();
                    const d = new URLSearchParams({
                            shopUrl: c,
                            getCountryCode: r
                        }),
                        p = await (await fetch(`https://d3j1fnyt2dkpap.cloudfront.net/getPopups?${d.toString()}`)).json();
                    let f = (e = p == null ? void 0 : p.storePopups) == null ? void 0 : e.Items;
                    if (Array.isArray(f) && f.length > 0) {
                        let m = !1;
                        f = f.sort((y, w) => {
                            var S, b, I, C, A, P, D, v;
                            const u = (C = (I = (b = (S = y.behaviour) == null ? void 0 : S.Who) == null ? void 0 : b["By Location"]) == null ? void 0 : I.selected) == null ? void 0 : C.toLowerCase().includes("states"),
                                h = (v = (D = (P = (A = w.behaviour) == null ? void 0 : A.Who) == null ? void 0 : P["By Location"]) == null ? void 0 : D.selected) == null ? void 0 : v.toLowerCase().includes("states");
                            return u && !h ? -1 : !u && h ? 1 : 0
                        });
                        try {
                            for (const y of f)((s = (o = (i = (n = y.behaviour) == null ? void 0 : n.Who) == null ? void 0 : i["By Location"]) == null ? void 0 : o.selected) == null ? void 0 : s.toLowerCase().includes("states")) && !m && await qn(y.behaviour.Who, this.checkIfUserLiesInStates) && (m = !0)
                        } catch (y) {
                            console.log("SOMETHING WENT WRONG", y)
                        }
                    }
                    if (ue = p.callingCountryCode || ue, ue && ue !== "" && Pe("countryCodeBS", ue, 30), p != null && p.shopUrl && K(this, Ce, p.shopUrl), p != null && p.storePopups && f) return f
                } catch (r) {
                    console.error(`Error in Bitespeed Popups: Error while fetching popups: ${r}`)
                }
            });
            g(this, "registerImpression", async (t, e = "", n = "") => {
                var l;
                const i = z(le),
                    o = z(mt),
                    s = z(ft),
                    r = e === "" || e === "impression" || e === "clicked" || e === "addToCart" || e === "popupPFInteracted";
                let c = "";
                e === "impression" || e === "" ? c = `${Wt}-${t}-${T(this,he)}` : (e === "addToCart" || e === "clicked" || e === "popupPFInteracted") && (c = `${Wt}-${e}-${t}-${T(this,he)}`);
                const d = z(c);
                d || Pe(c, "true", 3), this.BspdAPI.post("optin_impression", {
                    type: e || "impression",
                    popupId: t,
                    source: "popup",
                    browserId: T(this, he),
                    shopUrl: T(this, Ce) || ((l = window.Shopify) == null ? void 0 : l.shop) || "",
                    createdAt: new Date().toISOString(),
                    impressionAndConversionId: Xe.create_UUID(),
                    origin: window.location.href,
                    contactID: i || void 0,
                    discountCode: n,
                    isDiscountEnabled: !!(n && n.length > 0),
                    email: o || void 0,
                    phone: s || void 0,
                    isUniqueImpression: r && !d
                })
            });
            g(this, "registerConversion", async (t, {
                country: e = "",
                phone: n = "",
                email: i = "",
                name: o = void 0,
                consentProvided: s = !0,
                extraUserAttributes: r = {}
            } = {}, {
                getDiscount: c = !1,
                discountCode: d = "",
                requiredDiscount: l,
                staticDiscount: p = "",
                isWinning: f = void 0
            } = {}, {
                listId: m = void 0,
                popupType: y = "",
                webPushSubscription: w = void 0
            } = {}, {
                productId: u,
                variantId: h
            } = {
                productId: typeof Lt != "undefined" ? Lt : "",
                variantId: typeof Ft != "undefined" ? Ft : ""
            }, {
                popupTrigger: S
            } = {
                popupTrigger: ""
            }) => {
                var b, I, C, A, P, D, v, J, H, j;
                try {
                    const x = typeof o == "string" ? o.trim().split(/\s+/) : [],
                        N = x.length > 0 ? x[0] : void 0,
                        q = x.length > 1 ? x.slice(1).join(" ") : void 0;
                    let W = {
                        shopUrl: T(this, Ce) || ((b = window.Shopify) == null ? void 0 : b.shop) || "",
                        type: "conversion",
                        popupType: y,
                        popupId: t,
                        popupTrigger: S,
                        source: "popup",
                        browserId: T(this, he),
                        getDiscount: c,
                        requiredDiscount: l,
                        discountCode: d,
                        staticDiscount: p,
                        isDiscountEnabled: !!(d && d.length > 0),
                        isWinning: f,
                        country: e,
                        phone: n,
                        email: i,
                        name: o,
                        firstName: N,
                        lastName: q,
                        consentProvided: s,
                        createdAt: new Date().toISOString(),
                        listId: m,
                        impressionAndConversionId: Xe.create_UUID(),
                        origin: window.location.href,
                        meta: {
                            productId: u,
                            variantId: h
                        },
                        attributes: U({
                            bspd_dob: (r == null ? void 0 : r.dob) || void 0,
                            bspd_city: (r == null ? void 0 : r.city) || void 0,
                            bspd_gender: (r == null ? void 0 : r.gender) || void 0,
                            bspd_petanimal_name: (r == null ? void 0 : r.petAnimalName) || void 0,
                            bspd_petanimal_dob: (r == null ? void 0 : r.petAnimalDob) || void 0,
                            bspd_zodiac_sign: (r == null ? void 0 : r.zodiac) || void 0,
                            bspd_anniversary: (r == null ? void 0 : r.anniversary) || void 0,
                            bspd_shoe_size: (r == null ? void 0 : r.shoeSize) || void 0,
                            bspd_apparel_size: (r == null ? void 0 : r.apparelSize) || void 0,
                            bspd_natural_number: (r == null ? void 0 : r.naturalNumber) || void 0,
                            bspd_hair_type: (r == null ? void 0 : r.hairType) || void 0
                        }, r != null && r.optionsAttrName && (r != null && r.optionsValue) ? {
                            [r.optionsAttrName]: r.optionsValue
                        } : {}),
                        location: ee && typeof ee == "object" && Object.keys(ee).length > 0 ? {
                            city: (I = ee.city) != null ? I : void 0,
                            state: (C = ee.state) != null ? C : void 0,
                            stateCode: (A = ee.stateCode) != null ? A : void 0,
                            country: (P = ee.country) != null ? P : void 0,
                            countryCode: (D = ee.countryCode) != null ? D : void 0,
                            pincode: (v = ee.postalCode) != null ? v : void 0
                        } : void 0,
                        cluid: (H = (J = window.CLabsgbVar) == null ? void 0 : J.generalProps) == null ? void 0 : H.uid
                    };
                    String(y).toLowerCase() === "webpush" && (W = ce(U({}, W), {
                        webPushSubscription: w,
                        popupType: y
                    }));
                    const B = await this.BspdAPI.post("optin_conversion", W);
                    return ce(U({}, B), {
                        2: ((j = B == null ? void 0 : B.results) == null ? void 0 : j.errorCode) === "USER_ALREADY_CONVERTED"
                    })
                } catch (x) {
                    console.error(`Error in registering conversion: ${x}`)
                }
            });
            g(this, "getDiscountCode", async (t, e, n) => {
                var i, o, s;
                try {
                    const r = await this.BspdAPI.post("discount", U({
                            popupId: t,
                            browserId: T(this, he),
                            shopUrl: T(this, Ce) || ((i = window.Shopify) == null ? void 0 : i.shop) || "",
                            getDiscount: e,
                            requiredDiscount: n
                        }, je())),
                        c = (s = (o = ct(r)) == null ? void 0 : o[0]) == null ? void 0 : s.code;
                    return M && M[`${t}:bitespeed_popup`] && M[`${t}:bitespeed_popup`].browserService && M[`${t}:bitespeed_popup`].browserService.setCookie(`${t}:discountCode`, c, 0, 5), r
                } catch (r) {
                    console.error(`Error in fetching discount: ${r}`)
                }
            });
            g(this, "getSparkles", async (t = {
                min: 0,
                discount: {},
                products: [],
                name: ""
            }) => {
                var n;
                return (await this.BspdAPI.post("discount_personalised", {
                    shopUrl: ((n = window.Shopify) == null ? void 0 : n.shop) || "",
                    data: U(U({}, t), je())
                })).code
            });
            g(this, "getQuickProductMetadata", async (t, e, n) => !Array.isArray(e) || e.length === 0 || !Array.isArray(n) || n.length === 0 ? null : await this.BspdAPI.post("product_metadata", U({
                shopUrl: t || "",
                productIds: e,
                requiredFields: n
            }, je())));
            g(this, "getDynamicPopupData", async ({
                popupId: t,
                productId: e,
                popupConfig: n = {},
                products: i = []
            }) => {
                var o;
                try {
                    return await this.BspdAPI.post("dynamic_optin", U({
                        shopUrl: ((o = window.Shopify) == null ? void 0 : o.shop) || "",
                        popupId: t,
                        productId: e,
                        products: JSON.stringify(i)
                    }, je()))
                } catch (s) {
                    console.error(`Error in fetching dynamic popup data: ${s}`)
                }
            });
            g(this, "getSelectedSliceForSTW", async t => {
                try {
                    return await this.BspdAPI.get("spin_stw", `optinId=${t}`)
                } catch (e) {
                    console.error(`Error in fetching selected slice for STW: ${e}`)
                }
            });
            g(this, "checkIfUserLiesInStates", async (t, e) => {
                try {
                    return await this.BspdAPI.post("check_user_lies_in_state", {
                        allowedStates: t,
                        userCoords: e
                    })
                } catch (n) {
                    console.error(`Error in checking user lies in states: ${n}`)
                }
            });
            g(this, "sendOtp", async ({
                phone: t,
                email: e,
                sourceType: n,
                sourceId: i
            }) => {
                try {
                    return await this.BspdAPI.post("otp_send", {
                        phone: t,
                        email: e,
                        sourceType: n,
                        sourceId: i
                    })
                } catch (o) {
                    return console.error(`Error in sending OTP: ${o}`), {
                        status: "error",
                        message: "Failed to send OTP"
                    }
                }
            });
            g(this, "verifyOtp", async ({
                verificationToken: t,
                otp: e
            }) => {
                try {
                    return await this.BspdAPI.post("otp_verify", {
                        verificationToken: t,
                        otp: e
                    })
                } catch (n) {
                    return console.error(`Error in verifying OTP: ${n}`), {
                        status: "error",
                        message: "Failed to verify OTP"
                    }
                }
            });
            K(this, rt, t), K(this, he, e), this.BspdAPI = new yt
        }
    }
    rt = new WeakMap, he = new WeakMap, Ce = new WeakMap;
    const zn = async () => {
        try {
            const a = new _n,
                t = new Un({
                    shopDomain: a.getShopDomain(),
                    browserId: a.getBrowserId()
                });
            Nt = t, await Nt.getLocationData();
            let e = sessionStorage.getItem(ze);
            if (e && e.includes("expires") && e.includes("popupData") && e.includes("popupHtml") && e.includes("behaviour") && (() => {
                    try {
                        return JSON.parse(e).expires > Date.now()
                    } catch (o) {
                        return !1
                    }
                })()) {
                const o = JSON.parse(e);
                e = Array.isArray(o.popupData) ? o.popupData : null
            } else e = null;
            if (!e) {
                e = await t.getStorePopups();
                try {
                    sessionStorage.setItem(ze, JSON.stringify({
                        popupData: e,
                        expires: Date.now() + kt
                    }))
                } catch (o) {
                    if (o.name === "QuotaExceededError") try {
                        sessionStorage.removeItem(ze), sessionStorage.setItem(ze, JSON.stringify({
                            popupData: e,
                            expires: Date.now() + kt
                        }))
                    } catch (s) {}
                }
            }
            M = new Hn(a, t).getPopups(e), window.bitespeed_popups = M;
            const i = Object.entries(M || {}).filter(([, o]) => ["stw", "chat widget", "visual popup", "webPush"].includes(o == null ? void 0 : o.popupType)).map(([o, s]) => s.addPopupTrigger().then(r => {
                if (r) {
                    if (s.show() === null) return;
                    s.updateLastViewedDate();
                    const l = `bspdViewsCnt-${o.split(":")[0]}`,
                        p = Number(localStorage.getItem(l)) || 0;
                    localStorage.setItem(l, p + 1)
                }(s == null ? void 0 : s.popupType) === "visual popup" && (Se = s)
            }));
            await Promise.allSettled(i)
        } catch (a) {
            console.error(`Error in Bitespeed Popups: ${a} ${a==null?void 0:a.stack}`)
        } finally {}
    };

    function Te(a, t, e, n = !0, i = "red", o = null) {
        const s = o || a.getElementById(t) || a.getElementsByClassName(t)[0];
        if (!s || !s.parentElement) return;
        const r = a.createElement("p");
        r.textContent = e, r.style.color = i, r.style.fontSize = "14px", r.style.fontFamily = "Arial, sans-serif", r.style.textAlign = "center", r.style.padding = "6px 10px", r.id = Qt, n ? s.parentElement.insertBefore(r, s) : s.parentElement.appendChild(r)
    }

    function sn(a) {
        const t = a.getElementById(Qt);
        t && t.remove()
    }
    const rn = (a, t) => a.getElementById(t) || a.getElementsByClassName(t)[0] || null,
        jn = (a, t, e) => {
            const n = rn(t, e);
            n && (Object.prototype.hasOwnProperty.call(Ye, a) || (Ye[a] = n.style.border), n.style.border = "1px solid red", n.focus())
        },
        Kn = (a, t, e) => {
            const n = rn(t, e);
            n && (Object.prototype.hasOwnProperty.call(Ye, a) ? n.style.border = Ye[a] : n.style.border = "none")
        },
        Yn = (a, t = "", e = "", n = {
            country: ""
        }) => {
            const i = a.getElementById(t);
            if (sn(a), i) {
                const {
                    value: o = "",
                    required: s,
                    dataset: r
                } = i, c = o.trim(), d = e !== "phone" && e !== "email" && (s === !1 || s === "false"), l = (e === "phone" || e === "email") && ((r == null ? void 0 : r.optional) === "true" || (r == null ? void 0 : r.optional) === !0);
                if (d || l) return !0;
                const p = (f, m) => {
                    Te(a, f, m, !1)
                };
                switch (e) {
                    case "name":
                        if (c.length === 0) return p(`${t}Container`, "Please enter a valid name."), !1;
                        break;
                    case "phone":
                        if (!wt((n == null ? void 0 : n.country) || "", o)) return p("inputWAWidget", "Invalid phone number, please enter a valid phone number."), !1;
                        break;
                    case "email":
                        if (!hn(o)) return p("STWemailWAWidget", "Invalid email, please enter a valid email."), !1;
                        break;
                    case "number":
                        if (!/^\d+$/.test(c)) return p(`${t}Container`, "Please enter a valid amount."), !1;
                    case "gender":
                        if (!o) return p(`${t}Container`, "Select a valid gender."), !1;
                        break;
                    case "dob":
                        if (!o) return p(`${t}Container`, "Please enter a valid date of birth."), !1;
                        if (new Date(o) > new Date) return p(`${t}Container`, "Date of birth cannot be in future."), !1;
                        break;
                    case "hairType":
                        if (!o) return p(`${t}Container`, "Please enter a valid hair type."), !1;
                        break;
                    case "options":
                        if (!o) return p(`${t}Container`, "Please select an option."), !1;
                        break;
                    case "otp":
                        if (!/^\d{4}$/.test(c)) return p(`${t}Container`, "Please enter the 4-digit OTP."), ke(a, ""), !1;
                        break;
                    default:
                        break
                }
            }
            return e === "phone" && (i != null && i.value) ? Pe(ft, i.value, 1e3, 1) : e === "email" && (i != null && i.value) && Pe(mt, i.value, 1e3, 1), !0
        },
        Gn = a => typeof a == "string" && a.includes('id="biteSpeedPopupOTPInput"'),
        Xn = "bspd-otp-resend-link-biteSpeedPopupOTPInput",
        Zn = "bspd-otp-resend-countdown-biteSpeedPopupOTPInput",
        Qn = "bspd-otp-error-biteSpeedPopupOTPInput",
        eo = 60,
        Ke = new Map;

    function ke(a, t) {
        const e = a.getElementById(Qn);
        e && (e.textContent = t || "", e.style.display = t ? "block" : "none")
    }

    function an(a) {
        const t = a.getElementById(Xn),
            e = a.getElementById(Zn);
        if (!t || !e) return;
        Ke.has(a) && clearInterval(Ke.get(a));
        let n = eo;
        t.style.display = "none", e.style.display = "inline", e.textContent = `Resend OTP in ${n}s`;
        const i = setInterval(() => {
            n -= 1, n <= 0 ? (clearInterval(i), Ke.delete(a), e.style.display = "none", t.style.display = "") : e.textContent = `Resend OTP in ${n}s`
        }, 1e3);
        Ke.set(a, i)
    }

    function to(a) {
        ke(a.ownerDocument, ""), an(a.ownerDocument)
    }
    async function cn(a) {
        var St, bt, It, Ct, Tt, Pt, Dt, vt, Bt;
        const t = F => typeof F == "string" ? F.replace(/[<>]/g, "") : F,
            e = (F, ie) => {
                const ge = F.getElementById(ie);
                return ge ? t(ge.value) : void 0
            },
            n = (F, {
                text: ie,
                disabled: ge,
                onClick: Ue,
                cursor: At
            }) => {
                F.textContent = ie, F.disabled = ge, F.onclick = Ue, At && (F.style.cursor = At)
            },
            i = a.getAttribute("data-popupid"),
            o = `${i}:bitespeed_popup`,
            s = M[o];
        let r = `popup-iframe-open-${i}`;
        const {
            currentView: c
        } = s;
        r = c === "OpenView" ? `popup-iframe-open-${i}` : c === "CompletedView" ? `popup-iframe-completed-${i}` : c.includes("Design") && c.includes("View") && c.startsWith("Design") ? `popup-iframe-${c}-${i}` : r;
        const d = document.getElementById(r);
        if (!d) return;
        const l = d.contentDocument || d.contentWindow.document,
            p = e(l, "BiteSpeedDialCode") || e(l, "BiteSpeedWAChatSelect"),
            f = e(l, "biteSpeedPopupOTPInput"),
            m = e(l, "BiteSpeedWAChatInput"),
            y = e(l, "STWBiteSpeedWAChatInputEmail"),
            w = e(l, "biteSpeedPopupNameInput"),
            u = e(l, "biteSpeedPopupGenderInput"),
            h = e(l, "biteSpeedPopupDOBInput"),
            S = e(l, "biteSpeedPopupCityInput"),
            b = e(l, "biteSpeedPopupPetAnimalNameInput"),
            I = e(l, "biteSpeedPopupPetAnimalDOBInput"),
            C = e(l, "biteSpeedPopupZodiacSignInput"),
            A = e(l, "biteSpeedPopupAnniversaryInput"),
            P = e(l, "biteSpeedPopupApparelSizeInput"),
            D = e(l, "biteSpeedPopupShoeSizeInput"),
            v = e(l, "biteSpeedPopupNumberInput"),
            J = e(l, "biteSpeedPopupHairTypeInput"),
            H = e(l, "biteSpeedPopupOptionsInput"),
            j = l.getElementById("biteSpeedPopupOptionsInput"),
            x = (j == null ? void 0 : j.getAttribute("data-bspd-attr")) || "",
            N = l.getElementById("bspdGdprCheckbox"),
            q = N ? N.checked : !0,
            W = {
                otp: ["biteSpeedPopupOTPInput"],
                phone: ["BiteSpeedWAChatInput"],
                email: ["STWBiteSpeedWAChatInputEmail"],
                name: ["biteSpeedPopupNameInput", "biteSpeedPopupPetAnimalNameInput", "biteSpeedPopupCityInput"],
                number: ["biteSpeedPopupNumberInput"],
                gender: ["biteSpeedPopupGenderInput"],
                dob: ["biteSpeedPopupDOBInput", "biteSpeedPopupPetAnimalDOBInput", "biteSpeedPopupAnniversaryInput"],
                zodiac: ["biteSpeedPopupZodiacSignInput"],
                size: ["biteSpeedPopupApparelSizeInput", "biteSpeedPopupShoeSizeInput"],
                hairType: ["biteSpeedPopupHairTypeInput"],
                options: ["biteSpeedPopupOptionsInput"]
            };
        for (const [F, ie] of Object.entries(W))
            for (const ge of ie)
                if (!Yn(l, ge, F, {
                        country: p
                    })) return;
        const {
            discountType: B,
            DiscountCodeValuePercentage: k,
            DiscountCode: $,
            browserService: O,
            behaviour: E,
            teaserSettings: _,
            popupType: L,
            multiStepPopupFormdata: R
        } = s, X = (B == null ? void 0 : B.includes("Dynamic")) || !1, Q = (B == null ? void 0 : B.includes("Static")) || !1, te = X ? {
            Value: parseInt(k, 10),
            Type: B,
            Label: `${k}% OFF`
        } : {}, V = !X && Q ? $ : -1, Y = a.textContent;
        if (n(a, {
                text: "Please wait...",
                disabled: !0,
                onClick: null
            }), f !== void 0) {
            const F = await s.verifyOtp(f);
            if ((F == null ? void 0 : F.status) !== "ok" || !(F != null && F.verified)) {
                ke(l, (F == null ? void 0 : F.message) || "Invalid or expired OTP.");
                const ie = l.querySelectorAll(".bspd-otp-box");
                ie.forEach(Ue => Ue.value = "");
                const ge = l.getElementById("biteSpeedPopupOTPInput");
                ge && (ge.value = ""), ie[0] && ie[0].focus(), n(a, {
                    text: Y,
                    disabled: !1,
                    onClick: () => window.nextView(a),
                    cursor: "pointer"
                });
                return
            }
        }
        let Z, ne;
        const oe = {
                otp: f || void 0,
                country: p || void 0,
                phone: m || void 0,
                email: y || void 0,
                name: w || void 0,
                city: S || void 0,
                gender: u || void 0,
                dob: h || void 0,
                petAnimalName: b || void 0,
                petAnimalDob: I || void 0,
                zodiac: C || void 0,
                anniversary: A || void 0,
                apparelSize: P || void 0,
                shoeSize: D || void 0,
                naturalNumber: v || void 0,
                hairType: J || void 0,
                optionsValue: H || void 0,
                optionsAttrName: x || void 0
            },
            {
                isNextViewAvailable: fe,
                nextView: me
            } = s.checkForNextViewAvailability();
        let De = !1;
        if (fe) {
            if (s.updateVirtualStateForPopupNextViewIntent(U({}, oe)), me !== "CompletedView") {
                const F = JSON.parse(s.popupJson.popupHtml)[me];
                if (m && Gn(F)) {
                    const ie = await s.sendOtp(m);
                    if ((ie == null ? void 0 : ie.status) !== "ok" || !(ie != null && ie.verificationToken)) {
                        Te(l, "bitespeedNextButton", (ie == null ? void 0 : ie.message) || "Failed to send OTP. Please try again.", !0, "#ef4040", a.parentElement), ke(l, ""), n(a, {
                            text: Y,
                            disabled: !1,
                            onClick: () => window.nextView(a),
                            cursor: "pointer"
                        });
                        return
                    }
                }
                De = !0, s.nextView()
            }
        } else(_ == null ? void 0 : _.startDisplaying) === "after_popup" && s.toggleTeaser(!0);
        const Ae = {
                country: R.country || p,
                phone: R.phone || m,
                email: R.email || y,
                name: R.name || w || void 0,
                consentProvided: q,
                extraUserAttributes: oe
            },
            Ee = {
                requiredDiscount: te,
                staticDiscount: V
            };
        if (X) {
            const F = O.getCookie(`${i}:discountCode`);
            if (F) Z = F, De || s.nextView(Z), ne = await s.handleConversion(Ae, ce(U({}, Ee), {
                getDiscount: !1,
                discountCode: F
            }), {
                listId: (St = E == null ? void 0 : E.List) == null ? void 0 : St.selected,
                popupType: "",
                webPushSubscription: null
            });
            else {
                if (ne = await s.handleConversion(Ae, ce(U({}, Ee), {
                        getDiscount: !0,
                        discountCode: F
                    }), {
                        listId: (bt = E == null ? void 0 : E.List) == null ? void 0 : bt.selected,
                        popupType: L,
                        webPushSubscription: null
                    }), ne[2] === !0) {
                    Te(l, "bitespeedNextButton", ((Ct = (It = E == null ? void 0 : E.Who) == null ? void 0 : It["Optin Cooldown Period"]) == null ? void 0 : Ct.warningText) || "You've already claimed the discount code.", !0, ((Pt = (Tt = E == null ? void 0 : E.Who) == null ? void 0 : Tt["Optin Cooldown Period"]) == null ? void 0 : Pt.warningTextColor) || "#ef4040", a.parentElement), n(a, {
                        text: Y,
                        disabled: !1,
                        onClick: () => me(a),
                        cursor: "pointer"
                    });
                    return
                }
                Z = (vt = (Dt = ct(ne)) == null ? void 0 : Dt[0]) == null ? void 0 : vt.code, De || s.nextView(Z)
            }
        } else Z = $, De || s.nextView(Z), ne = await s.handleConversion(Ae, ce(U({}, Ee), {
            getDiscount: !1,
            discountCode: Z,
            staticDiscount: Z
        }), {
            listId: (Bt = E == null ? void 0 : E.List) == null ? void 0 : Bt.selected,
            popupType: L,
            webPushSubscription: null
        })
    }
    async function no() {
        var o;
        const a = Se.popupJson.id,
            t = `${a}:bitespeed_popup`,
            e = M[t];
        if (e.browserService.getCookie(`${a}:discountCode`)) return;
        (((o = e == null ? void 0 : e.discountType) == null ? void 0 : o.includes("Dynamic")) || !1) && await e.preloadDiscount(!0, {
            Value: parseInt(Se == null ? void 0 : Se.DiscountCodeValuePercentage, 10),
            Type: discountType,
            Label: `${Se==null?void 0:Se.DiscountCodeValuePercentage}% OFF`
        })
    }

    function dn(a, t) {
        const n = `${t||a.getAttribute("data-popupid")}:bitespeed_popup`,
            i = M[n];
        i.close();
        const {
            teaserSettings: o = {},
            teaserDisabled: s,
            isACustomer: r,
            toggleTeaser: c
        } = i, {
            stopDisplaying: d,
            startDisplaying: l
        } = o;
        if (d === "popup_close") c(!1);
        else if (!s && (l === "after_popup" || l === "before_popup")) {
            if (d === "visitor_converts" && typeof r == "function" && r()) return;
            c(!0)
        }
    }

    function oo(a) {
        const e = `${a.getAttribute("data-popupid")}:bitespeed_popup`,
            n = M[e];
        n.close();
        const {
            teaserSettings: i = {},
            teaserDisabled: o,
            isACustomer: s,
            toggleTeaser: r
        } = n, {
            stopDisplaying: c,
            startDisplaying: d
        } = i;
        if (c === "popup_close") r(!1);
        else if (!o && (d === "after_popup" || d === "before_popup")) {
            if (c === "visitor_converts" && typeof s == "function" && s()) return;
            r(!0)
        }
    }
    async function io(a) {
        var r, c;
        const e = `${a.getAttribute("data-popupid")}:bitespeed_popup`,
            n = M[e];
        if (!n) return;
        const i = ((r = n.otpState) == null ? void 0 : r.phone) || ((c = n.multiStepPopupFormdata) == null ? void 0 : c.phone);
        if (!i) return;
        const o = a.ownerDocument;
        ke(o, ""), a.style.pointerEvents = "none";
        const s = await n.sendOtp(i);
        if (a.style.pointerEvents = "", (s == null ? void 0 : s.status) === "ok" && (s != null && s.verificationToken)) {
            const d = o.querySelectorAll(".bspd-otp-box");
            d.forEach(p => p.value = "");
            const l = o.getElementById("biteSpeedPopupOTPInput");
            l && (l.value = ""), d[0] && d[0].focus(), an(o)
        } else ke(o, (s == null ? void 0 : s.message) || "Failed to resend OTP. Please try again.")
    }

    function ct(a) {
        if (!a || typeof a != "object") return null;
        if (a.nodes) return a.nodes;
        for (const t of Object.values(a))
            if (typeof t == "object") {
                const e = ct(t);
                if (e) return e
            }
        return null
    }

    function so(a) {
        var r, c;
        a.preventDefault();
        const t = document.getElementById("stw-popup-iframe"),
            e = (t == null ? void 0 : t.contentDocument) || ((r = t == null ? void 0 : t.contentWindow) == null ? void 0 : r.document);
        if (!e) return;
        const n = e.getElementById("STWDicountBox"),
            i = (c = n == null ? void 0 : n.textContent) == null ? void 0 : c.trim();
        if (!i) return;
        const o = e.getElementById("STWDicountBoxCopy");
        if (!o) return;
        const s = () => {
            o.style.color = "", o.textContent = "Copy"
        };
        o.textContent = "Copied!", o.style.color = "#4CAF50", navigator.clipboard.writeText(i).then(() => {
            o.textContent = "Copied!", _e && clearTimeout(_e), _e = setTimeout(s, 3e3)
        }).catch(() => {
            o.textContent = "Failed to copy", o.style.color = "red", setTimeout(s, 3e3)
        })
    }

    function ro(a) {
        var s, r;
        a.preventDefault();
        const t = (r = (s = a.target) == null ? void 0 : s.dataset) == null ? void 0 : r.popupid;
        if (!t) return;
        let e;
        const n = c => {
                var m, y;
                const d = c === "OpenView" ? `popup-iframe-open-${t}` : c === "CompletedView" ? `popup-iframe-completed-${t}` : `popup-iframe-${c}-${t}`,
                    l = document.getElementById(d);
                if (!l) return null;
                const p = l.contentDocument || ((m = l.contentWindow) == null ? void 0 : m.document);
                if (!p) return null;
                const f = p.getElementById("STWDicountBox");
                return e = p.getElementById("STWDicountBoxCopy"), e && (e.textContent = "Copied!", e.style.color = "#4CAF50"), ((y = f == null ? void 0 : f.textContent) == null ? void 0 : y.trim()) || null
            },
            i = n("OpenView") || n("CompletedView") || n("Design1View") || n("Design2View") || n("Design3View") || n("Design4View") || n("Design5View") || n("Design6View");
        if (!i || !e) return;
        const o = () => {
            e.style.color = "", e.textContent = "Copy"
        };
        navigator.clipboard.writeText(i).then(() => {
            _e && clearTimeout(_e), _e = setTimeout(o, 3e3)
        }).catch(() => {
            e.textContent = "Failed to copy", e.style.color = "red", setTimeout(o, 3e3)
        })
    }
    const ao = () => {
        var e;
        const a = document.getElementById("chat-popup-iframe-bottom"),
            t = (a == null ? void 0 : a.contentDocument) || ((e = a == null ? void 0 : a.contentWindow) == null ? void 0 : e.document);
        return (t == null ? void 0 : t.getElementById("WidgetPreview")) || null
    };

    function ln() {
        var d;
        const a = document.getElementById("chat-popup-iframe"),
            t = document.getElementById("chat-popup-iframe-bottom");
        if (!t) return;
        const e = t.contentDocument || t.contentWindow.document,
            n = e.getElementById("iconWABiteSpeedCWBottom"),
            i = e.getElementById("iconCloseBiteSpeedCWBottom"),
            o = e.getElementById("WidgetPreview__text"),
            s = ao();
        if (!a || !n || !i) return;
        const r = a.style.display === "block",
            c = () => {
                if (!s) return;
                const l = Math.ceil(t.getBoundingClientRect().width),
                    p = Math.ceil(s.getBoundingClientRect().width);
                if (s.dataset.width) {
                    const f = s.dataset.width;
                    s.dataset.width = l, t.style.width = f + "px"
                } else s.dataset.width = l, t.style.width = p + "px"
            };
        r ? (a.style.display = "none", n.style.display = "flex", i.style.display = "none", o.style.display = ((d = o == null ? void 0 : o.dataset) == null ? void 0 : d.display) || "flex", window.innerWidth < 600 && (t.style.display = "block"), c()) : (a.style.display = "block", n.style.display = "none", i.style.display = "flex", o.style.display = "none", window.innerWidth < 600 && (t.style.display = "block"), c())
    }
    async function pn(a, t = !0) {
        var d, l, p, f, m, y, w;
        const e = document.getElementById("chat-popup-iframe");
        if (!e) return;
        const n = e.contentDocument || e.contentWindow.document,
            i = n.querySelector(".sendButtonWAWidget"),
            o = (d = n.getElementById("BiteSpeedWAChatSelect")) == null ? void 0 : d.value,
            s = (l = n.getElementById("BiteSpeedWAChatInput")) == null ? void 0 : l.value,
            r = M[`${a}:bitespeed_popup`];
        if (!r) return;
        if (Kn(a, n, "BiteSpeedWAChatInput"), !t) {
            qt(r);
            return
        }
        if (!wt(o, s)) {
            jn(a, n, "BiteSpeedWAChatInput");
            return
        }
        let c;
        i && (c = i.textContent, i.textContent = "Please wait...", i.disabled = !0, i.onclick = null), qt(r);
        try {
            await ((w = r.handleConversion) == null ? void 0 : w.call(r, {
                country: o,
                phone: s
            }, {
                getDiscount: !1,
                discountCode: "",
                requiredDiscount: {},
                staticDiscount: -1
            }, {
                listId: (y = (m = (f = (p = r == null ? void 0 : r.popupJson) == null ? void 0 : p.unlayerJson) == null ? void 0 : f.General) == null ? void 0 : m["Add Subscribers to list"]) == null ? void 0 : y.selected,
                popupType: "chat widget"
            }))
        } catch (u) {
            console.error("Conversion failed:", u)
        } finally {
            ln(), i && (i.textContent = c || "Send", i.disabled = !1, i.onclick = () => pn(a))
        }
    }

    function qt(a) {
        var p, f, m, y, w, u, h, S, b, I;
        const t = (p = a == null ? void 0 : a.popupJson) == null ? void 0 : p.unlayerJson,
            e = (t == null ? void 0 : t.General) || {},
            n = (t == null ? void 0 : t.WidgetContent) || {},
            i = ((m = (f = e["Support Number"]) == null ? void 0 : f.selected) == null ? void 0 : m.replace("+", "")) || "",
            o = ((w = (y = e["Support Number"]) == null ? void 0 : y.attributes) == null ? void 0 : w.replace(/\s+/g, "")) || "",
            s = `${i}${o}`,
            r = encodeURIComponent((u = window.bspdStoreConfig) != null && u.includeFullUrlWithUtmOnWaWidget ? window.location.href : window.location.href.split("?")[0]),
            c = encodeURIComponent(((h = n["Default text"]) == null ? void 0 : h.selected) || "Hello"),
            d = window.innerWidth < 768 ? "https://api.whatsapp.com/send" : "https://web.whatsapp.com/send",
            l = ((S = window.Shopify) == null ? void 0 : S.shop) === "bqeq1m-5c.myshopify.com" ? `https://api.whatsapp.com/send/?phone=${s}&text=${(b=window.bspdStoreConfig)!=null&&b.ignoreCurrentDomainOnWaWidget?"":`${r}%0A`}${c}&app_absent=0` : `${d}?phone=${s}&text=${(I=window.bspdStoreConfig)!=null&&I.ignoreCurrentDomainOnWaWidget?"":`${r}%0A`}${c}`;
        window.open(l)
    }

    function co() {
        var e, n, i;
        if (window.innerWidth > 768) return;
        const a = document.getElementById("stw-popup-iframe"),
            t = ((e = a == null ? void 0 : a.contentDocument) == null ? void 0 : e.getElementById("spinnerPin")) || ((i = (n = a == null ? void 0 : a.contentWindow) == null ? void 0 : n.document) == null ? void 0 : i.getElementById("spinnerPin"));
        t && (t.style.display = "none")
    }

    function lo() {
        var e, n, i;
        if (window.innerWidth > 768) return;
        const a = document.getElementById("stw-popup-iframe"),
            t = ((e = a == null ? void 0 : a.contentDocument) == null ? void 0 : e.getElementById("spinnerPin")) || ((i = (n = a == null ? void 0 : a.contentWindow) == null ? void 0 : n.document) == null ? void 0 : i.getElementById("spinnerPin"));
        t && (t.style.display = "block")
    }

    function un(a) {
        const t = new WebKitCSSMatrix(window.getComputedStyle(a).webkitTransform);
        return Math.round(Math.atan2(t.b, t.a) * (180 / Math.PI))
    }

    function po(a) {
        var n, i, o;
        const t = document.getElementById("stw-popup-iframe"),
            e = ((n = t == null ? void 0 : t.contentDocument) == null ? void 0 : n.getElementById("wheelContainerBiteSpeed")) || ((o = (i = t == null ? void 0 : t.contentWindow) == null ? void 0 : i.document) == null ? void 0 : o.getElementById("wheelContainerBiteSpeed"));
        !t || !e || (e.style.left = "-100%", setTimeout(() => {
            e.style.display = "none", t.style.display = "none"
        }, 1e3))
    }
    const uo = (a = 5) => {
        const t = document.getElementById("container_stw_aj"),
            e = document.getElementById("bitespeed-spin");
        if (!t || !e) return;
        const n = Math.ceil(Math.random() * 1e3) + 5e3;
        t.style.transform = `rotate(${n}deg)`, setTimeout(cn, a * 1e3 + 1e3)
    };

    function ho(a, t = 5) {
        var S, b, I, C, A, P, D, v;
        const e = document.getElementById("stw-popup-iframe"),
            n = e.contentDocument || e.contentWindow.document,
            i = window.matchMedia("(max-width: 450px)").matches,
            o = {
                wheelAndInputContainer: n.getElementById("wheelAndInputContainer"),
                gapDivSTW: n.getElementById("gapDivSTW"),
                sendBtnContainer: n.getElementById("STWsendButtonWAWidgetContainer"),
                phoneInput: n.getElementById("STWinputWAWidget"),
                emailInput: n.getElementById("STWemailWAWidget"),
                nameInput: n.getElementById("STWnameWAWidget"),
                dateInput: n.getElementById("STWdateWAWidget"),
                subHeading: n.getElementById("STWSubHeadingText"),
                heading: n.getElementById("STWHeadingText"),
                discountBoxContainer: n.getElementById("STWdiscountWAWidget"),
                discountBox: n.getElementById("STWDicountBox"),
                copyCodeBtn: n.getElementById("copyCodeButtonSTW"),
                disclaimer: n.getElementById("STWDisclaimerText"),
                country: (S = n.getElementById("STWBiteSpeedWAChatSelect")) == null ? void 0 : S.value,
                phone: (b = n.getElementById("STWBiteSpeedWAChatInput")) == null ? void 0 : b.value,
                email: (I = n.getElementById("STWBiteSpeedWAChatInputEmail")) == null ? void 0 : I.value,
                dob: (C = n.getElementById("STWBiteSpeedWAChatInputDate")) == null ? void 0 : C.value,
                name: n.getElementById("STWBiteSpeedWAChatInputName")
            };
        if (sn(n), !wt(o.country, o.phone)) return Te(n, "STWsendButtonWAWidgetContainer", "Invalid phone number, please enter a valid phone number");
        if (o.name && !o.name.value.trim()) return Te(n, "STWsendButtonWAWidgetContainer", "Invalid name, please enter a valid name");
        if (o.email && !hn(o.email)) return Te(n, "STWsendButtonWAWidgetContainer", "Invalid email, please enter a valid email");
        if (o.dob && !fo(o.dob)) return Te(n, "STWsendButtonWAWidgetContainer", "Invalid DOB, please enter a valid DOB");
        const s = M[`${a}:bitespeed_popup`],
            r = s == null ? void 0 : s.popupJson,
            c = r == null ? void 0 : r.selectedPie,
            d = r == null ? void 0 : r.unlayerJson,
            l = (A = d == null ? void 0 : d.values) == null ? void 0 : A.PlateSettings[c],
            p = ((v = (D = (P = d == null ? void 0 : d.InputSettings) == null ? void 0 : P["Input Collection Flow"]) == null ? void 0 : D.selected) == null ? void 0 : v.includes("Collect Inputs after Spin")) || !1;
        p || (i ? (o.wheelAndInputContainer.style.top = "50%", o.gapDivSTW.style.paddingTop = "40vh") : (o.wheelAndInputContainer.style.left = "10%", o.gapDivSTW.style.flex = "0 0 25%"));
        const f = c,
            m = 360 - (parseInt(f == null ? void 0 : f.split("pie")[1]) - 1) * 36 + 72,
            y = n.getElementById("container_stw_aj");
        if (!y) return;
        const w = un(y);
        let u = m - w + 360 * 10;
        p || (y.style.transform = `rotate(${w+u}deg)`), mn(a);
        const h = p ? 0 : t * 1e3 - 1233;
        setTimeout(() => {
            var q, W, B, k, $;
            ["phoneInput", "emailInput", "nameInput", "dateInput", "sendBtnContainer"].forEach(O => o[O] && (o[O].style.display = "none")), o.copyCodeBtn && (o.copyCodeBtn.style.display = "flex");
            const {
                type: J,
                completeViewLabel: H,
                label: j
            } = l || {}, x = (d == null ? void 0 : d.CompletedView) || {}, N = J === "Winning";
            o.disclaimer && ((q = x["Disclaimer Text"]) != null && q.selected) && (o.disclaimer.innerHTML = Be(N ? x["Disclaimer Text"].selected : "")), o.heading && (o.heading.innerHTML = Be(N ? H || `${(W=x["Success Message Heading"])==null?void 0:W.selected} ${j}` : H || ((B = x["Failure Message Heading"]) == null ? void 0 : B.selected))), o.subHeading && (o.subHeading.innerHTML = Be(N ? (k = x["Success Message Subheading"]) == null ? void 0 : k.selected : ($ = x["Failure Message Subheading"]) == null ? void 0 : $.selected)), o.discountBoxContainer && (o.discountBoxContainer.style.display = N ? "flex" : "none", o.discountBox && (o.discountBox.style.boxShadow = "none")), i ? (o.wheelAndInputContainer.style.top = "15%", o.gapDivSTW.style.paddingTop = "0") : (o.wheelAndInputContainer.style.left = "-35%", o.gapDivSTW.style.flex = "0 0 0%")
        }, h)
    }

    function wt(a, t) {
        return t ? (a === "+91" ? /^\d{10}$/ : /^[1-9]\d{6,11}$/).test(t) : !1
    }

    function hn(a) {
        if (!a) return !1;
        const t = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/,
            [e, n] = a.split("@") || [];
        return !e || !n || e.length > 64 || n.length > 255 || n.split(".").some(o => o.length > 63) ? !1 : t.test(a)
    }

    function fo(a) {
        const t = /^\d{4}-\d{2}-\d{2}$/.test(a),
            e = new Date(a) > new Date;
        return !(!t || e)
    }

    function mo(a, t, e) {
        const n = M[`${e}:bitespeed_popup`];
        n && (n.toggleTeaser(!1), n.currentView = "OpenView", n.show("", !0, {}))
    }

    function go(a, t) {
        const e = M[`${t}:bitespeed_popup`];
        e && e.toggleTeaser(!1)
    }

    function yo(a, t) {
        var n;
        const e = M[`${a}:bitespeed_popup`];
        if (e) {
            if (t === "hide_teaser") {
                e.toggleTeaser(!1);
                return
            }
            if (t === "show_message") {
                const i = document.getElementById(`popup-teaser-${a}`),
                    o = (i == null ? void 0 : i.contentDocument) || ((n = i == null ? void 0 : i.contentWindow) == null ? void 0 : n.document);
                if (!o) return;
                const s = o.getElementById("timer-end-message"),
                    r = o.getElementById("timer-wrapper");
                r && s && (r.style.display = "none", s.style.display = "block")
            }
        }
    }

    function Ut(a) {
        [{
            id: "stw-popup-iframe",
            selectId: "STWBiteSpeedWAChatSelect"
        }, {
            id: "chat-popup-iframe",
            selectId: "BiteSpeedWAChatSelect"
        }, {
            id: `popup-iframe-open-${a}`,
            selectId: "BiteSpeedWAChatSelect",
            handleWidth: !0
        }, {
            id: `popup-iframe-completed-${a}`,
            selectId: "BiteSpeedWAChatSelect"
        }].forEach(({
            id: e,
            selectId: n,
            handleWidth: i
        }) => {
            const o = document.getElementById(e);
            if (!o) return;
            const s = o.contentDocument || o.contentWindow.document;
            if (!s) return;
            const r = s.getElementById(n);
            if (r && ue && (r.value = `+${ue}`), i) {
                const c = s.getElementById("BiteSpeedDialCode");
                if (c) {
                    const d = () => {
                        const l = s.createElement("span");
                        Object.assign(l.style, {
                            visibility: "hidden",
                            whiteSpace: "nowrap"
                        }), s.body.appendChild(l), l.textContent = c.options[c.selectedIndex].text;
                        const p = l.offsetWidth + 30;
                        l.remove(), c.style.width = `${p}px`
                    };
                    c.addEventListener("change", d), d()
                }
            }
        })
    }
    async function fn(a, t = 5) {
        var $, O, E, _, L, R, X, Q, te, V, Y, Z, ne;
        const e = document.getElementById("stw-popup-iframe");
        if (!e) return;
        const n = e.contentDocument || (($ = e.contentWindow) == null ? void 0 : $.document);
        if (!n) return;
        const i = oe => n.getElementById(oe),
            o = window.matchMedia("(max-width: 450px)").matches,
            s = i("wheelAndInputContainer"),
            r = i("gapDivSTW"),
            c = i("container_stw_aj");
        if (!s || !r || !c) return;
        const d = i("inputCollector"),
            l = i("STWDisclaimerText"),
            p = i("STWinputWAWidget"),
            f = i("STWemailWAWidget"),
            m = i("STWnameWAWidget"),
            y = i("STWdateWAWidget"),
            w = i("STWsendButtonWAWidgetContainer"),
            u = i("STWSpinWheelBtn"),
            h = i("STWSubHeadingText"),
            S = i("STWHeadingText");
        o ? (s.style.top = "50%", r.style.paddingTop = "40vh") : (s.style.left = "10%", r.style.flex = "0 0 25%");
        const b = M == null ? void 0 : M[`${a}:bitespeed_popup`],
            I = (O = b == null ? void 0 : b.popupJson) == null ? void 0 : O.selectedPie,
            C = (R = (L = (_ = (E = b == null ? void 0 : b.popupJson) == null ? void 0 : E.unlayerJson) == null ? void 0 : _.values) == null ? void 0 : L.PlateSettings) == null ? void 0 : R[I];
        if (!C) return;
        const P = 360 - (Number(((X = I == null ? void 0 : I.split("pie")) == null ? void 0 : X[1]) || 1) - 1) * 36 + 72,
            D = c.style.transform,
            v = D && D.match(/rotate\(([-\d.]+)deg\)/),
            J = v ? parseFloat(v[1]) : un(c),
            H = (J % 360 + 360) % 360,
            j = (P - H + 360) % 360;
        c.style.transform = `rotate(${J+j+360*10}deg)`, await new Promise(oe => setTimeout(oe, t * 1e3)), d && (d.style.display = "flex");
        const {
            type: x,
            completeViewLabel: N,
            label: q
        } = C, W = (te = (Q = b == null ? void 0 : b.popupJson) == null ? void 0 : Q.unlayerJson) == null ? void 0 : te.CompletedView, B = x === "Winning";
        S && (S.innerHTML = Be(B ? N || `${((V=W==null?void 0:W["Success Message Heading"])==null?void 0:V.selected)||""} ${q}` : N || ((Y = W == null ? void 0 : W["Failure Message Heading"]) == null ? void 0 : Y.selected))), h && (h.innerHTML = Be(B ? (Z = W == null ? void 0 : W["Success Message Subheading"]) == null ? void 0 : Z.selected : (ne = W == null ? void 0 : W["Failure Message Subheading"]) == null ? void 0 : ne.selected)), B ? ([p, f, m, y, w].forEach(oe => {
            oe && (oe.style.display = "flex")
        }), l && (l.style.display = "block")) : collectInputsAfterSpin || mn(a);
        const k = i("STWRespinBtn");
        k && (k.style.display = (C == null ? void 0 : C.respin) === !0 && !(b != null && b.hasRespun) ? "flex" : "none"), u && (u.style.display = "none"), o ? (s.style.top = "15%", r.style.paddingTop = "0") : (s.style.left = "-35%", r.style.flex = "0 0 0%")
    }
    async function wo(a) {
        var f, m, y, w, u;
        const t = document.getElementById("stw-popup-iframe");
        if (!t) return;
        const e = t.contentDocument || ((f = t.contentWindow) == null ? void 0 : f.document);
        if (!e) return;
        const n = M == null ? void 0 : M[`${a}:bitespeed_popup`];
        if (!n || n.hasRespun) return;
        n.hasRespun = !0;
        const i = h => e.getElementById(h),
            o = i("STWRespinBtnEl"),
            s = i("STWRespinBtnText"),
            r = i("STWRespinBtnLoader");
        o && (o.disabled = !0), s && (s.style.display = "none"), r && (r.style.display = "flex"), await n.loadSelectedSliceSTW(), o && (o.disabled = !1), s && (s.style.display = ""), r && (r.style.display = "none");
        const c = h => e.getElementById(h);
        ["STWRespinBtn", "STWinputWAWidget", "STWemailWAWidget", "STWnameWAWidget", "STWdateWAWidget", "STWsendButtonWAWidgetContainer", "STWDisclaimerText", "STWdiscountWAWidget"].forEach(h => {
            const S = c(h);
            S && (S.style.display = "none")
        });
        const d = (y = (m = n.popupJson) == null ? void 0 : m.unlayerJson) == null ? void 0 : y.ContentSettings,
            l = c("STWHeadingText"),
            p = c("STWSubHeadingText");
        l && (l.innerHTML = Be(((w = d == null ? void 0 : d["Heading text"]) == null ? void 0 : w.selected) || "")), p && (p.innerHTML = Be(((u = d == null ? void 0 : d["Subheading text"]) == null ? void 0 : u.selected) || "")), await fn(a)
    }
    async function mn(a) {
        var H, j, x, N, q, W, B, k, $, O, E, _, L, R, X, Q, te, V, Y, Z, ne, oe;
        const t = document.getElementById("stw-popup-iframe");
        if (!t) return;
        const e = t.contentDocument || ((H = t.contentWindow) == null ? void 0 : H.document);
        if (!e) return;
        const n = fe => {
                var me;
                return ((me = e.getElementById(fe)) == null ? void 0 : me.value) || ""
            },
            i = e.getElementById("inputCollector"),
            o = e.getElementById("STWDicountBox"),
            s = n("STWBiteSpeedWAChatSelect"),
            r = n("STWBiteSpeedWAChatInput"),
            c = n("STWBiteSpeedWAChatInputEmail"),
            d = n("STWBiteSpeedWAChatInputName"),
            l = n("STWBiteSpeedWAChatInputDate"),
            p = M == null ? void 0 : M[`${a}:bitespeed_popup`];
        if (!p) return;
        const f = (j = p.popupJson) == null ? void 0 : j.selectedPie,
            m = (q = (N = (x = p.popupJson) == null ? void 0 : x.unlayerJson) == null ? void 0 : N.values) == null ? void 0 : q.PlateSettings,
            y = m == null ? void 0 : m[f];
        if (!y) return;
        const w = y.type === "Winning",
            {
                couponType: u,
                value: h,
                label: S,
                discountCodePrefix: b,
                coupon: I
            } = y,
            C = w && u !== "Static",
            A = C ? {
                Value: h,
                Type: u,
                Label: S,
                Prefix: b || ""
            } : {},
            P = w && u === "Static" ? I : -1,
            D = await ((O = p.handleConversion) == null ? void 0 : O.call(p, {
                country: s,
                phone: r,
                email: c,
                name: d,
                extraUserAttributes: {
                    dob: l || void 0
                }
            }, {
                getDiscount: C,
                discountCode: C ? "" : I,
                requiredDiscount: A,
                staticDiscount: P,
                isWinning: w
            }, {
                listId: ($ = (k = (B = (W = p.popupJson) == null ? void 0 : W.unlayerJson) == null ? void 0 : B.ContentSettings) == null ? void 0 : k["Add Subscribers to list"]) == null ? void 0 : $.selected,
                popupType: "stw"
            }));
        if ((D == null ? void 0 : D[2]) === !0) {
            i.style.display = "none", Te(e, "STWsendButtonWAWidgetContainer", ((L = (_ = (E = p.behaviour) == null ? void 0 : E.Who) == null ? void 0 : _["Optin Cooldown Period"]) == null ? void 0 : L.warningText) || "You've already claimed the discount code.", !0, ((Q = (X = (R = p.behaviour) == null ? void 0 : R.Who) == null ? void 0 : X["Optin Cooldown Period"]) == null ? void 0 : Q.warningTextColor) || "#ef4040", i);
            return
        }
        const v = (V = (te = ct(D)) == null ? void 0 : te[0]) == null ? void 0 : V.code,
            J = (oe = (ne = (Z = (Y = D == null ? void 0 : D.results) == null ? void 0 : Y[1]) == null ? void 0 : Z.value) == null ? void 0 : ne.browserId) == null ? void 0 : oe[0];
        J && p.browserService.setBrowserId(J), o.textContent = C ? v : I
    }
    const So = async () => {
        var e;
        const a = "bspdPushSubscribed",
            t = (e = window.bspdStoreConfig) == null ? void 0 : e.webPush;
        if (!(!(t != null && t.enabled) || localStorage.getItem(a) === "true") && "serviceWorker" in navigator && "PushManager" in window) try {
            const i = await (await navigator.serviceWorker.register("/apps/bitespeed/worker.js")).pushManager.subscribe({
                    userVisibleOnly: !0,
                    applicationServerKey: en(t.vapidKey)
                }),
                o = {
                    shopUrl: Shopify.shop,
                    endpoint: i.endpoint,
                    auth: Ze(i.getKey("auth")),
                    p256dh: Ze(i.getKey("p256dh")),
                    browser: tn()
                };
            await new yt().post("collect_web_push_subs", o), localStorage.setItem(a, "true")
        } catch (n) {
            console.error("Web Push subscription failed:", n)
        }
    };

    function bo() {
        for (const a of [Pn, Dn, vn]) try {
            if (z(a) === void 0) continue;
            document.cookie = `${a}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; Secure; SameSite=Lax`
        } catch (t) {}
    }

    function Io() {
        try {
            const t = new URL(window.location.href).searchParams.get("bspdCId");
            t && Pe("contactIdBitespeed", t, 1e3, 1)
        } catch (a) {} finally {
            bo()
        }
    }
    const Co = (a = 0) => {
        Io(), setTimeout(async () => {
            var e;
            xn() && ((e = window.bspdStoreConfig) == null ? void 0 : e.disableInWebView) || (Ve = await qe(!0), on(), zn(), So())
        }, a)
    };
    var Kt, Yt, Gt;
    Co((Kt = window.Shopify) != null && Kt.shop ? (Gt = (Yt = window.bspdStoreConfig) == null ? void 0 : Yt.startupDelay) != null ? Gt : 1 : 1e3);
    const To = "Cosx1c2ce047e4b5f48069aa33146f1b5a301";

    function gn() {
        return /Android/i.test(navigator.userAgent)
    }

    function Po() {
        return /iPad|iPhone|iPod/.test(navigator.userAgent)
    }

    function be() {
        localStorage.removeItem(gt), localStorage.removeItem(at), localStorage.removeItem("truecaller_opened")
    }

    function zt() {
        try {
            const a = localStorage.getItem(gt),
                t = localStorage.getItem(at),
                e = localStorage.getItem("truecaller_opened");
            if (!a || !t) return !1;
            if (e !== "true") return be(), !1;
            const n = Date.now() - parseInt(t);
            return n > Zt || n > Xt ? (be(), !1) : (yn(a, null), !0)
        } catch (a) {
            return console.error("[Truecaller] Error resuming polling:", a), !1
        }
    }

    function yn(a, t) {
        var s;
        let e = 0;
        const n = 40,
            i = ((s = window.Shopify) == null ? void 0 : s.shop) || "",
            o = setInterval(async function() {
                e++;
                const r = parseInt(localStorage.getItem(at));
                if (r) {
                    const d = Date.now() - r;
                    if (d > Xt) {
                        be(), clearInterval(o);
                        return
                    }
                    if (d > Zt) {
                        be(), clearInterval(o);
                        return
                    }
                }
                if (z(le)) {
                    be(), clearInterval(o);
                    return
                }
                try {
                    const l = await (await fetch(`/apps/bitespeed?type=truecaller_check&nonce=${a}&shopUrl=${i}`)).json();
                    if (l.verified && l.user) {
                        clearInterval(o), l.user.contactId && (Pe(le, l.user.contactId, 365), be());
                        return
                    }
                    if (l.status === "rejected" || l.status === "error") {
                        be(), clearInterval(o);
                        return
                    }
                    e >= n && clearInterval(o)
                } catch (d) {
                    console.error("[Truecaller] Polling error:", d), e >= n && clearInterval(o)
                }
            }, 3e3)
    }
    async function ve(a) {
        var e;
        try {
            let f = function(m) {
                if (p) return;
                p = !0, document.removeEventListener("click", f, !0);
                const y = document.createElement("a");
                y.href = l, y.style.display = "none", document.body.appendChild(y), y.click(), fetch(`/apps/bitespeed?type=truecaller_opened&nonce=${d}&shopUrl=${i}&browserId=${s||""}`).catch(function(w) {
                    console.error("[Truecaller] Failed to log opened event:", w)
                }), localStorage.setItem(gt, d), localStorage.setItem(at, Date.now().toString()), localStorage.setItem("truecaller_opened", "true"), setTimeout(function() {
                    try {
                        document.body.removeChild(y)
                    } catch (w) {}
                }, 100), yn(d, a)
            };
            var t = f;
            if (z(le)) return;
            const i = ((e = window.Shopify) == null ? void 0 : e.shop) || "",
                o = window.location.href || "",
                s = z("refb") || "",
                c = await (await fetch(`/apps/bitespeed?type=truecaller_initiate&shopUrl=${i}&pageUrl=${encodeURIComponent(o)}&browserId=${s}`)).json();
            if (!c.nonce) throw new Error("Failed to get nonce from initiate endpoint");
            const d = c.nonce,
                l = `truecallersdk://truesdk/web_verify?type=btmsheet&requestNonce=${d}&partnerKey=${To}&partnerName=BiteSpeed&lang=en&loginPrefix=continue&loginSuffix=signup&ctaPrefix=continuewith&ctaColor=%2300BFA6&ctaTextColor=%23FFFFFF&btnShape=round&skipOption=useanothernum&ttl=300000`;
            let p = !1;
            document.addEventListener("click", f, !0)
        } catch (n) {
            console.error("[Truecaller] Initialization error:", n)
        }
    }
    if (Po() || !/Android|Mobi/i.test(navigator.userAgent)) {
        const a = document.createElement("style");
        a.textContent = `
    .truecaller-verify-button,
    .truecaller-container {
      display: none !important;
    }
  `, document.head.appendChild(a)
    }
    document.addEventListener("click", function(a) {
        const t = a.target.closest('button, a[role="button"], a');
        if (!t) return;
        const n = (t.getAttribute("onclick") || "").includes("initTruecallerVerification"),
            o = (t.textContent || t.innerText || "").toLowerCase().includes("truecaller") || t.classList.contains("truecaller-verify-button") || t.getAttribute("data-action") === "truecaller";
        (n || o) && gn() && (n || (a.preventDefault(), a.stopPropagation(), ve(t)))
    }, !0);
    async function jt() {
        var a;
        try {
            if (z(le)) {
                localStorage.removeItem("truecaller_timer_start");
                return
            }
            if (!gn()) {
                localStorage.removeItem("truecaller_timer_start");
                return
            }
            const e = ((a = window.Shopify) == null ? void 0 : a.shop) || "",
                i = await (await fetch(`/apps/bitespeed?type=truecaller_settings&shopUrl=${e}`)).json();
            if (!i.enabled) {
                localStorage.removeItem("truecaller_timer_start");
                return
            }
            if (i.trigger === "PRODUCT_PAGE") /\/products\//.test(window.location.pathname) && ve(null), localStorage.removeItem("truecaller_timer_start");
            else if (i.trigger === "TIMER") {
                const o = i.delayMinutes || 0,
                    s = i.delaySeconds || 0,
                    r = (o * 60 + s) * 1e3;
                if (r === 0) z(le) || ve(null), localStorage.removeItem("truecaller_timer_start");
                else {
                    const c = localStorage.getItem("truecaller_timer_start");
                    if (c) {
                        const d = Date.now() - parseInt(c),
                            l = r - d;
                        l <= 0 ? (z(le) || ve(null), localStorage.removeItem("truecaller_timer_start")) : setTimeout(() => {
                            z(le) || ve(null), localStorage.removeItem("truecaller_timer_start")
                        }, l)
                    } else localStorage.setItem("truecaller_timer_start", Date.now().toString()), setTimeout(() => {
                        z(le) || ve(null), localStorage.removeItem("truecaller_timer_start")
                    }, r)
                }
            }
        } catch (t) {
            console.error("[Truecaller] Error initializing trigger:", t)
        }
    }
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", function() {
        zt() || jt()
    }) : zt() || jt();
    window.findChangesOnCartData = Ne;
    window.subscribeToCartDataChangeEvent = xe;
    window.invokeCartDataChange = nn;
    window.observeCartDataChange = on;
    window.nextView = cn;
    window.preloadDiscount = no;
    window.closePopup = dn;
    window.closePopupBitespeed = oo;
    window.resendOtpBitespeed = io;
    window.bspdOtpViewMounted = to;
    window.copyCodeSTW = so;
    window.copyCodeVisualPopup = ro;
    window.expandBiteSpeedCW = ln;
    window.initTruecallerVerification = ve;
    window.sendWAConversion = pn;
    window.movePositionUp = co;
    window.movePositionDown = lo;
    window.closeBSSTW = po;
    window.spin_IT_old = uo;
    window.spin_IT = ho;
    window.openPopupBitespeed = mo;
    window.closePopupTeaser = go;
    window.handleTeaserTimerEnd = yo;
    window.spinWheel = fn;
    window.respinWheel = wo;
})();