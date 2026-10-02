(() => {
    var ft = Object.create;
    var Z = Object.defineProperty;
    var ht = Object.getOwnPropertyDescriptor;
    var xt = Object.getOwnPropertyNames,
        Y = Object.getOwnPropertySymbols,
        gt = Object.getPrototypeOf,
        tt = Object.prototype.hasOwnProperty,
        It = Object.prototype.propertyIsEnumerable;
    var et = (t, e) => {
        var o = {};
        for (var r in t) tt.call(t, r) && e.indexOf(r) < 0 && (o[r] = t[r]);
        if (t != null && Y)
            for (var r of Y(t)) e.indexOf(r) < 0 && It.call(t, r) && (o[r] = t[r]);
        return o
    };
    var u = (t, e) => () => (t && (e = t(t = 0)), e);
    var kt = (t, e) => () => (e || t((e = {
        exports: {}
    }).exports, e), e.exports);
    var vt = (t, e, o, r) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let n of xt(e)) !tt.call(t, n) && n !== o && Z(t, n, {
                get: () => e[n],
                enumerable: !(r = ht(e, n)) || r.enumerable
            });
        return t
    };
    var Ut = (t, e, o) => (o = t != null ? ft(gt(t)) : {}, vt(e || !t || !t.__esModule ? Z(o, "default", {
        value: t,
        enumerable: !0
    }) : o, t));
    var f = (t, e, o) => new Promise((r, n) => {
        var p = d => {
                try {
                    c(o.next(d))
                } catch (i) {
                    n(i)
                }
            },
            l = d => {
                try {
                    c(o.throw(d))
                } catch (i) {
                    n(i)
                }
            },
            c = d => d.done ? r(d.value) : Promise.resolve(d.value).then(p, l);
        c((o = o.apply(t, e)).next())
    });
    var ot, rt = u(() => {
        ot = "WebPixel::Render"
    });
    var h, at = u(() => {
        rt();
        h = t => shopify.extend(ot, t)
    });
    var nt = u(() => {
        at()
    });
    var it = u(() => {
        nt()
    });

    function ct(t, e = 0) {
        return (a[t[e + 0]] + a[t[e + 1]] + a[t[e + 2]] + a[t[e + 3]] + "-" + a[t[e + 4]] + a[t[e + 5]] + "-" + a[t[e + 6]] + a[t[e + 7]] + "-" + a[t[e + 8]] + a[t[e + 9]] + "-" + a[t[e + 10]] + a[t[e + 11]] + a[t[e + 12]] + a[t[e + 13]] + a[t[e + 14]] + a[t[e + 15]]).toLowerCase()
    }
    var a, dt = u(() => {
        a = [];
        for (let t = 0; t < 256; ++t) a.push((t + 256).toString(16).slice(1))
    });

    function g() {
        if (!x) {
            if (typeof crypto == "undefined" || !crypto.getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            x = crypto.getRandomValues.bind(crypto)
        }
        return x(Tt)
    }
    var x, Tt, ut = u(() => {
        Tt = new Uint8Array(16)
    });
    var _t, I, st = u(() => {
        _t = typeof crypto != "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto), I = {
            randomUUID: _t
        }
    });

    function bt(t, e, o) {
        var n, p, l;
        t = t || {};
        let r = (l = (p = t.random) != null ? p : (n = t.rng) == null ? void 0 : n.call(t)) != null ? l : g();
        if (r.length < 16) throw new Error("Random bytes length must be >= 16");
        if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
            if (o = o || 0, o < 0 || o + 16 > e.length) throw new RangeError(`UUID byte range ${o}:${o+15} is out of buffer bounds`);
            for (let c = 0; c < 16; ++c) e[o + c] = r[c];
            return e
        }
        return ct(r)
    }

    function Et(t, e, o) {
        return I.randomUUID && !e && !t ? I.randomUUID() : bt(t, e, o)
    }
    var k, lt = u(() => {
        st();
        ut();
        dt();
        k = Et
    });
    var mt = u(() => {
        lt()
    });
    var pt = kt(v => {
        it();
        mt();
        h(r => f(null, [r], function*({
            analytics: t,
            browser: e,
            init: o
        }) {
            let n = yield e.cookie.get("__blockify::analyzer"), p = "https://fraud.blockifyapp.com/s/api/visitor/pixel", l = null;
            try {
                l = JSON.parse(n || "{}").sessionId
            } catch (i) {}
            let c = yield e.sessionStorage.getItem("checkoutIpId"), d = ["alert_displayed", "checkout_started", "checkout_completed", "ui_alert_display"];
            t.subscribe("all_events", i => f(null, null, function*() {
                var T, _, b, E, D, w, S, C, N, P, A, O, R, V, X, j, J, L, Q, $, q, z, H, M, W, B, F, G, K;
                if (d.includes(i.name))
                    if (i.name === "checkout_started") {
                        let y = k();
                        c = y, yield e.sessionStorage.setItem("checkoutIpId", y)
                    } else(i.name === "alert_displayed" || i.name === "ui_alert_display") && (yield new Promise(y => setTimeout(y, 750)));
                else return;
                let U = i,
                    {
                        id: Dt,
                        seq: wt,
                        type: St
                    } = U,
                    s = et(U, ["id", "seq", "type"]),
                    m = o.data,
                    yt = {
                        sessionId: l,
                        checkoutId: c,
                        name: i.name,
                        clientId: s.clientId,
                        timestamp: i.timestamp,
                        data: {
                            cart: {
                                id: ((T = m.cart) == null ? void 0 : T.id) || null,
                                totalQuantity: ((_ = m.cart) == null ? void 0 : _.totalQuantity) || 0,
                                cost: {
                                    totalAmount: {
                                        amount: ((D = (E = (b = m.cart) == null ? void 0 : b.cost) == null ? void 0 : E.totalAmount) == null ? void 0 : D.amount) || 0,
                                        currencyCode: (C = (S = (w = m.cart) == null ? void 0 : w.cost) == null ? void 0 : S.totalAmount) == null ? void 0 : C.currencyCode
                                    }
                                }
                            },
                            checkout: {
                                lineItems: ((P = (N = s.data) == null ? void 0 : N.checkout) == null ? void 0 : P.lineItems) || [],
                                subtotalPrice: {
                                    amount: ((R = (O = (A = s.data) == null ? void 0 : A.checkout) == null ? void 0 : O.subtotalPrice) == null ? void 0 : R.amount) || 0,
                                    currencyCode: (j = (X = (V = s.data) == null ? void 0 : V.checkout) == null ? void 0 : X.subtotalPrice) == null ? void 0 : j.currencyCode
                                },
                                order: {
                                    id: ((Q = (L = (J = s.data) == null ? void 0 : J.checkout) == null ? void 0 : L.order) == null ? void 0 : Q.id) || null
                                }
                            },
                            shop: {
                                myshopifyDomain: ($ = m.shop) == null ? void 0 : $.myshopifyDomain,
                                name: (q = m.shop) == null ? void 0 : q.name,
                                storefrontUrl: (z = m.shop) == null ? void 0 : z.storefrontUrl
                            },
                            alert: ((H = s.data) == null ? void 0 : H.alert) || {},
                            location: {
                                pathname: ((B = (W = (M = s.context) == null ? void 0 : M.document) == null ? void 0 : W.location) == null ? void 0 : B.pathname) || "",
                                search: ((K = (G = (F = s.context) == null ? void 0 : F.document) == null ? void 0 : G.location) == null ? void 0 : K.search) || ""
                            }
                        }
                    };
                fetch(p, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(yt),
                    keepalive: !0
                })
            }))
        }))
    });
    var Kt = Ut(pt());
})();