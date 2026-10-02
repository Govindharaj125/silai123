(function() {
    try {
        var e = typeof window < `u` ? window : typeof global < `u` ? global : typeof globalThis < `u` ? globalThis : typeof self < `u` ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = `3b474b74-f59f-4272-8df9-fff470e5ebb3`, e._sentryDebugIdIdentifier = `sentry-dbid-3b474b74-f59f-4272-8df9-fff470e5ebb3`)
    } catch {}
})();
import {
    J as e,
    q as t
} from "./assests-C5-6LhCo.js";
import {
    a as n,
    t as r
} from "./rolldown-runtime-BUzqyA45.js";
import {
    At as i,
    Fa as a,
    Ft as o,
    Ha as s,
    It as c,
    La as l,
    Mt as u,
    No as d,
    Oa as f,
    Pt as p,
    Sa as m,
    as as h,
    dt as g,
    ft as _,
    go as v,
    ht as y,
    is as b,
    jt as x,
    la as S,
    lt as C,
    pa as w,
    ts as T,
    ua as E,
    us as D,
    ut as O,
    wn as k,
    yn as A
} from "./auth-components-DhFbkNOo.js";
import {
    A as j,
    M,
    j as N
} from "./common-components-D5_LAB29.js";
import {
    X as P,
    j as F
} from "./checkout-components-D5VfL72u.js";
import {
    G as I,
    W as L,
    lt as R,
    v as z
} from "./cart-components-Deyp6QDg.js";
import {
    x as B
} from "./components-C1oz-Gfo.js";
import {
    c as V,
    l as H,
    s as U,
    u as W
} from "./lib-bcMqzpY1.js";
(function() {
    let e = document.createElement(`link`).relList;
    if (e && e.supports && e.supports(`modulepreload`)) return;
    for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
    new MutationObserver(e => {
        for (let t of e)
            if (t.type === `childList`)
                for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function t(e) {
        let t = {};
        return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), e.crossOrigin === `use-credentials` ? t.credentials = `include` : e.crossOrigin === `anonymous` ? t.credentials = `omit` : t.credentials = `same-origin`, t
    }

    function n(e) {
        if (e.ep) return;
        e.ep = !0;
        let n = t(e);
        fetch(e.href, n)
    }
})();
var G = r((e => {
        var t = D();
        e.createRoot = t.createRoot, e.hydrateRoot = t.hydrateRoot
    }))(),
    K = n(e(), 1),
    q = t();

function J() {
    let {
        state: {
            isAuthenticating: e
        },
        actions: {
            setLoggedIn: t,
            setIsAuthenticating: n
        }
    } = _(), {
        state: {
            redirectUrl: r
        },
        actions: {
            setCheckoutId: a
        }
    } = O(), {
        actions: {
            setUserData: s,
            deleteAddressCache: l,
            updateUser: f
        }
    } = u(), [g, y] = h(), b = g.get(`page`) ? .toLowerCase(), [x, S] = (0, K.useState)(!1), {
        isLoading: C
    } = I();
    W(), (0, K.useEffect)(() => {
        d(), D(), E(), T(), window.getOriginLocalStorage = m
    }, [b]);
    let T = () => {
            let e = c(p.SHOPFLO_CHANNEL);
            return e.onMessage(e => {
                e.type === o.USER_LOGGED_OUT && (a(``), s({
                    uid: ``,
                    email: ``,
                    phone: ``,
                    name: ``,
                    default_billing_address: void 0,
                    default_shipping_address: void 0,
                    addresses: void 0,
                    hasHomeAddr: !1,
                    hasWorkAddr: !1
                }), l())
            }), () => {
                e.close()
            }
        },
        D = async () => {
            let e = g.get(`auth`),
                r = g.get(`forceRefresh`),
                {
                    isLoggedIn: i,
                    newTokensGenerated: a = !1
                } = await v(e ? ? void 0, r === `true` || !!e);
            r === `true` && i && y(e => (e.delete(`auth`), e.delete(`forceRefresh`), e)), t(i, {
                loginType: i ? `COOKIE` : void 0
            }), n(!1), a && f()
        };
    return e && b && b !== `marketing-popup` ? b === `account` ? (0, q.jsx)(M, {}) : (0, q.jsx)(N, {}) : (0, q.jsxs)(q.Fragment, {
        children: [(0, q.jsx)(B, {
            "data-sentry-element": `AppRouter`,
            "data-sentry-source-file": `App.tsx`
        }), (0, q.jsx)(i, {
            "data-sentry-element": `Toaster`,
            "data-sentry-source-file": `App.tsx`
        }), !!C && (0, q.jsx)(R, {}), (0, q.jsx)(j, {
            closeCheckout: async () => {
                S(!1), w(r)
            },
            isOpen: x,
            closePopup: () => {
                window.history.pushState(null, ``, null), S(!1), setTimeout(() => {
                    document ? .documentElement ? .style ? .removeProperty(`overflow`)
                }, 500)
            },
            "data-sentry-element": `CheckoutExitPopup`,
            "data-sentry-source-file": `App.tsx`
        })]
    })
}
H();
var Y = e => e.get(`prewarm`) === `true`,
    X = new URLSearchParams(window.location.search),
    Z = X.get(`page`) ? .toLowerCase(),
    Q = X.get(`page`) === `marketing-popup`,
    $ = (0, G.createRoot)(document.getElementById(`root`)),
    ee = Y(X);
f() && !ee && !l() && ![`cart`, `empty-cart`, `login-status-check`, `ghost-modal`, `marketing-popup`, `experiments-widget`, `shopify-login`].includes(Z ? ? ``) ? $.render((0, q.jsx)(K.StrictMode, {
    children: (0, q.jsx)(b, {
        basename: `/latest`,
        children: (0, q.jsx)(te, {})
    })
})) : $.render((0, q.jsx)(K.StrictMode, {
    children: (0, q.jsx)(b, {
        basename: `/latest`,
        children: (0, q.jsx)(x, {
            children: (0, q.jsx)(k, {
                children: (0, q.jsx)(U, {
                    children: (0, q.jsx)(A, {
                        children: (0, q.jsx)(ne, {
                            children: (0, q.jsx)(K.Suspense, {
                                fallback: Q ? (0, q.jsx)(q.Fragment, {}) : (0, q.jsx)(N, {}),
                                children: (0, q.jsx)(L, {
                                    children: (0, q.jsx)(g, {
                                        children: (0, q.jsx)(y, {
                                            children: (0, q.jsx)(C, {
                                                children: (0, q.jsx)(F, {
                                                    children: (0, q.jsx)(P, {
                                                        children: (0, q.jsx)(z, {
                                                            children: (0, q.jsx)(J, {})
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}));

function te() {
    return V(), (0, K.useEffect)(() => {
        let e = new URL(document.location.href);
        s(T.PARENT_REDIRECT, {
            redirectUrl: e.href,
            clearCart: !1
        })
    }, []), (0, q.jsx)(N, {
        "data-sentry-element": `Skeleton`,
        "data-sentry-component": `RedirectWrapper`,
        "data-sentry-source-file": `index.tsx`
    })
}

function ne({
    children: e
}) {
    let [t] = h(), n = t.get(`page`), r = [`cart`, `empty-cart`].includes(n ? .toLowerCase() ? ? ``), i = n === `marketing-popup`, o = n === `wishlist`, s = n === `account`, c = n === `mock-checkout`, l = n === `experiments-widget`, u = n === `shopify-login`, d = n === `profile`;
    if (V(), u) return (0, q.jsx)(`div`, {
        className: S(`h-full w-full rounded-2xl overflow-hidden scrollbar-hide`),
        children: e
    });
    if (i) {
        let t = a();
        return (0, q.jsx)(`div`, {
            id: `checkout-ui-root`,
            className: S(`relative flex h-full w-full flex-1 justify-center overflow-auto scrollbar-none [&::-webkit-scrollbar]:hidden`, t ? `items-end` : `items-center`),
            children: (0, q.jsx)(`div`, {
                className: S(`relative flex w-full flex-col`, t ? `h-full self-stretch overflow-y-auto` : `h-auto w-[25rem] self-center overflow-visible`),
                children: e
            })
        })
    }
    return r ? (0, q.jsx)(`div`, {
        id: `checkout-ui-root`,
        className: `relative h-full w-full overflow-hidden bg-gray-lightest md:h-[85vh] md:w-[25rem] md:rounded-l-[28px] md:rounded-r-none  md:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]`,
        children: e
    }) : o || s ? (0, q.jsx)(`div`, {
        className: `h-full w-full overflow-hidden bg-transparent`,
        children: e
    }) : d ? (0, q.jsx)(`div`, {
        id: `checkout-ui-root`,
        className: `relative h-full w-full overflow-x-hidden overflow-y-auto bg-transparent antialiased sm:overflow-y-hidden`,
        children: e
    }) : c ? (0, q.jsx)(`div`, {
        id: `checkout-ui-root`,
        className: S(`relative h-full w-full bg-gray-lightest md:h-[85vh] md:w-[69rem]`, a() ? `` : f() ? `rounded-[28px]` : `md:rounded-[28px]`, `md:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]`),
        children: e
    }) : l ? (0, q.jsx)(`div`, {
        className: `h-full w-full overflow-hidden bg-transparent`,
        children: e
    }) : (0, q.jsx)(`div`, {
        id: `checkout-ui-root`,
        className: S(`relative h-full w-full overflow-hidden bg-gray-lightest md:h-[85vh] md:w-[25rem]`, a() ? `` : f() ? `rounded-[28px]` : `md:rounded-[28px]`, `md:shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]`),
        "data-sentry-component": `AppShell`,
        "data-sentry-source-file": `index.tsx`,
        children: e
    })
}
window.addEventListener(`vite:preloadError`, () => {
    window.location.reload()
});
//# sourceMappingURL=index-Bt-n4nQG.js.map