(function() {
    try {
        var e = typeof window < `u` ? window : typeof global < `u` ? global : typeof globalThis < `u` ? globalThis : typeof self < `u` ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = `d969bfbd-98ea-470c-829d-a5e526a98e8b`, e._sentryDebugIdIdentifier = `sentry-dbid-d969bfbd-98ea-470c-829d-a5e526a98e8b`)
    } catch {}
})();
import {
    J as e
} from "./assests-C5-6LhCo.js";
import {
    a as t
} from "./rolldown-runtime-BUzqyA45.js";
import {
    Ha as n,
    ao as r,
    as as i,
    es as a,
    mo as o,
    ts as s
} from "./auth-components-DhFbkNOo.js";
import {
    y as c
} from "./components-C1oz-Gfo.js";
import {
    r as l
} from "./lib-bcMqzpY1.js";
var u = t(e(), 1),
    d = () => {
        let [e] = i(), t = e.get(`mid`) ? .toLowerCase(), d = e.get(`ghostUserOrderData`) ? .toLowerCase() === `true`, {
            sendThirdPartyData: f,
            userData: p,
            isAccountResponseLoading: m
        } = c(), {
            addItem: h,
            removeItem: g,
            getItems: _
        } = l(t ? ? ``, p ? .uid ? ? ``), v = async e => {
            if (e ? .data ? .type === s.GET_WEBENGAGE_DATA) f({
                thirdParty: `webengage`,
                type: e ? .data ? .payload ? .type ? e ? .data ? .payload ? .type : `phone`
            });
            else if (e ? .data ? .type === s.GET_MOENGAGE_DATA) f({
                thirdParty: `moengage`,
                type: e ? .data ? .payload ? .type ? e ? .data ? .payload ? .type : `phone`
            });
            else if (e ? .data ? .type === s.GET_CLEVERTAP_DATA) f({
                thirdParty: `clevertap`,
                type: e ? .data ? .payload ? .type
            });
            else if (e ? .data ? .type === s.GET_CUSTOM_USER_DATA) f({
                thirdParty: `custom`,
                type: e ? .data ? .payload ? .type
            });
            else if (e ? .data ? .type === s.FLO_SET_BUREAU_USER_ID) {
                let {
                    bureauUserId: t
                } = e ? .data ? .payload;
                t && localStorage.setItem(a.FLO_BUREAU_USER_ID, t)
            } else e ? .data ? .type === s.WISHLIST_ADD_ITEM ? await h(e ? .data ? .payload) : e ? .data ? .type === s.WISHLIST_REMOVE_ITEM ? await g(e ? .data ? .payload) : e ? .data ? .type === s.WISHLIST_GET_ITEMS && await _(e ? .data ? .payload)
        };
        (0, u.useEffect)(() => (window.addEventListener(`message`, v), () => {
            window.removeEventListener(`message`, v)
        }), [f, h, g, _]);
        let y = async () => {
            try {
                let e = o();
                if (!e) return;
                let {
                    authCookie: i,
                    authCookieExpiry: a,
                    refreshCookie: c,
                    refreshCookieExpiry: l
                } = e, u = {
                    accessToken: i,
                    refreshToken: c,
                    accessTokenExpiry: a,
                    refreshTokenExpiry: l
                };
                if (n(s.FLO_SSO_TOKEN_RECEIVED_GHOST, u), p ? .uid && n(s.FLO_GHOST_USER, {
                        userId: p.uid
                    }), p ? .uid && d) {
                    let e = await r(`/oms/merchant/${t}/customer/${p?.uid}/order-context?status=COMPLETED`, `KRATOS_PRIVATE`);
                    if (e ? .status === 401 || e ? .status === 403) throw Error(`unauthorized`);
                    n(s.FLO_GHOST_USER_ORDER_DATA, {
                        isNewUser: !e ? .orders_count,
                        ordersCount: e ? .orders_count,
                        ordersTotal: e ? .orders_total
                    })
                }
            } catch {
                return n(s.FLO_GHOST_USER, null), {}
            }
        };
        return (0, u.useEffect)(() => {
            let e = t && p ? .uid;
            e && y(), !e && !m && (n(s.FLO_GHOST_USER, null), n(s.FLO_SSO_TOKEN_NOT_RECEIVED_GHOST, null))
        }, [t, d, p ? .uid, m]), null
    };
export {
    d as t
};
//# sourceMappingURL=page-ghost-DmA0ANjB.js.map