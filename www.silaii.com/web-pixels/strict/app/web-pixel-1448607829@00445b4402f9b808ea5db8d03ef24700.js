(() => {
    var V = Object.create;
    var N = Object.defineProperty;
    var q = Object.getOwnPropertyDescriptor;
    var J = Object.getOwnPropertyNames;
    var K = Object.getPrototypeOf,
        X = Object.prototype.hasOwnProperty;
    var p = (t, e, n) => () => {
        if (n) throw n[0];
        try {
            return t && (e = t(t = 0)), e
        } catch (a) {
            throw n = [a], a
        }
    };
    var j = (t, e) => () => {
        try {
            return e || t((e = {
                exports: {}
            }).exports, e), e.exports
        } catch (n) {
            throw e = 0, n
        }
    };
    var B = (t, e, n, a) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let i of J(e)) !X.call(t, i) && i !== n && N(t, i, {
                get: () => e[i],
                enumerable: !(a = q(e, i)) || a.enumerable
            });
        return t
    };
    var F = (t, e, n) => (n = t != null ? V(K(t)) : {}, B(e || !t || !t.__esModule ? N(n, "default", {
        value: t,
        enumerable: !0
    }) : n, t));
    var g = (t, e, n) => new Promise((a, i) => {
        var s = c => {
                try {
                    l(n.next(c))
                } catch (o) {
                    i(o)
                }
            },
            k = c => {
                try {
                    l(n.throw(c))
                } catch (o) {
                    i(o)
                }
            },
            l = c => c.done ? a(c.value) : Promise.resolve(c.value).then(s, k);
        l((n = n.apply(t, e)).next())
    });
    var O, P = p(() => {
        O = "WebPixel::Render"
    });
    var f, x = p(() => {
        P();
        f = t => shopify.extend(O, t)
    });
    var w = p(() => {
        x()
    });
    var A = p(() => {
        w()
    });
    var C = j(y => {
        A();
        f(a => g(null, [a], function*({
            settings: t,
            analytics: e,
            browser: n
        }) {
            let i = yield n.localStorage.getItem("__IS_VTOK"), s = yield n.localStorage.getItem("__IS_STOK"), k = "https://shoppable-videos.instasell.co.in/_/ShopifyStoreFrontEvents", l = (o, r, u) => {
                if (!i) return;
                s || (s = "");
                let v = {
                    businessID: t.businessID,
                    viewerToken: i,
                    type: o,
                    via: u,
                    event: r,
                    sessionID: s
                };
                fetch(k, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(v),
                    keepalive: !0
                }).catch(console.error)
            }, c = () => g(null, null, function*() {
                try {
                    let o = yield n.localStorage.getItem("influenced_click_attribute");
                    if (!o) return null;
                    let r = JSON.parse(o),
                        u = Date.now();
                    return !r.expiry || r.expiry <= u ? null : r
                } catch (o) {
                    return console.error("Error checking influenced click attribution:", o), null
                }
            });
            e.subscribe("checkout_completed", o => g(null, null, function*() {
                var m, _, T, I;
                let {
                    data: {
                        checkout: r
                    }
                } = o, u = ((m = r.lineItems) == null ? void 0 : m.map(d => {
                    var b, E, h, S, D;
                    try {
                        return {
                            product_id: ((E = (b = d.variant) == null ? void 0 : b.product) == null ? void 0 : E.id) || "unknown",
                            variant_id: ((h = d.variant) == null ? void 0 : h.id) || "unknown",
                            quantity: d.quantity || 0,
                            price: ((D = (S = d.variant) == null ? void 0 : S.price) == null ? void 0 : D.amount) || 0
                        }
                    } catch (R) {
                        return console.error("Error processing line item:", d, R), null
                    }
                }).filter(Boolean)) || [];
                if (console.log({
                        checkout: r
                    }), !(yield c())) {
                    console.log("No valid influenced click attribution found, skipping checkout tracking");
                    return
                }
                console.log("Valid influenced click attribution found, sending checkout event to backend"), l("ins_checkout_completed", {
                    order_id: (_ = r == null ? void 0 : r.order) == null ? void 0 : _.id,
                    order_total: ((T = r.totalPrice) == null ? void 0 : T.amount) || 0,
                    cart_token: r.token,
                    currency: ((I = r.totalPrice) == null ? void 0 : I.currencyCode) || "unknown",
                    items: u
                })
            }))
        }))
    });
    var tt = F(C());
})();