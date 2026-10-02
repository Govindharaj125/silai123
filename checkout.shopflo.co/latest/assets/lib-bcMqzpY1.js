(function() {
    try {
        var e = typeof window < `u` ? window : typeof global < `u` ? global : typeof globalThis < `u` ? globalThis : typeof self < `u` ? self : {},
            t = new e.Error().stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = `9ccade48-e2b0-4370-a72a-9e5606a35879`, e._sentryDebugIdIdentifier = `sentry-dbid-9ccade48-e2b0-4370-a72a-9e5606a35879`)
    } catch {}
})();
import {
    J as e,
    q as t
} from "./assests-C5-6LhCo.js";
import {
    a as n
} from "./rolldown-runtime-BUzqyA45.js";
import {
    $r as r,
    Ar as i,
    Br as a,
    Cr as o,
    Dr as s,
    Er as c,
    Fr as l,
    Gr as u,
    Ha as d,
    Hr as f,
    Ir as p,
    Jr as m,
    Kr as h,
    Lr as ee,
    Mr as g,
    Mt as te,
    Nr as ne,
    Or as re,
    Pr as _,
    Qr as ie,
    Rr as v,
    S as ae,
    Sr as oe,
    Tn as se,
    Tr as ce,
    Ur as y,
    Vn as le,
    Vr as ue,
    Wr as de,
    Xo as fe,
    Xr as pe,
    Yr as me,
    Zr as b,
    _i as he,
    _r as x,
    ai as ge,
    ao as _e,
    as as ve,
    bi as S,
    bn as ye,
    br as be,
    ci as xe,
    di as Se,
    ei as Ce,
    fi as we,
    ft as Te,
    gi as Ee,
    gr as C,
    hi as De,
    ii as Oe,
    jr as ke,
    kr as Ae,
    li as je,
    mi as w,
    ni as Me,
    oi as Ne,
    pi as Pe,
    qr as T,
    ri as Fe,
    si as Ie,
    ti as Le,
    ts as Re,
    ui as ze,
    ut as Be,
    vi as Ve,
    vn as He,
    vr as Ue,
    wn as We,
    wr as Ge,
    xi as E,
    xr as Ke,
    yi as qe,
    yr as D,
    zr as Je
} from "./auth-components-DhFbkNOo.js";
import {
    j as Ye
} from "./common-components-D5_LAB29.js";
import {
    J as Xe,
    Y as Ze,
    b as Qe,
    q as $e,
    x as et
} from "./checkout-components-D5VfL72u.js";
import {
    S as tt
} from "./cart-components-Deyp6QDg.js";
var nt = 50,
    rt = /\(error: (.*)\)/,
    it = /captureMessage|captureException/;

function at(...e) {
    let t = e.sort((e, t) => e[0] - t[0]).map(e => e[1]);
    return (e, n = 0, r = 0) => {
        let i = [],
            a = e.split(`
`);
        for (let e = n; e < a.length; e++) {
            let n = a[e];
            n.length > 1024 && (n = n.slice(0, 1024));
            let o = rt.test(n) ? n.replace(rt, `$1`) : n;
            if (!o.match(/\S*Error: /)) {
                for (let e of t) {
                    let t = e(o);
                    if (t) {
                        i.push(t);
                        break
                    }
                }
                if (i.length >= nt + r) break
            }
        }
        return st(i.slice(r))
    }
}

function ot(e) {
    return Array.isArray(e) ? at(...e) : e
}

function st(e) {
    if (!e.length) return [];
    let t = Array.from(e);
    return /sentryWrapped/.test(ct(t).function || ``) && t.pop(), t.reverse(), it.test(ct(t).function || ``) && (t.pop(), it.test(ct(t).function || ``) && t.pop()), t.slice(0, nt).map(e => ({ ...e,
        filename: e.filename || ct(t).filename,
        function: e.function || `?`
    }))
}

function ct(e) {
    return e[e.length - 1] || {}
}
var lt = `<anonymous>`;

function O(e) {
    try {
        return !e || typeof e != `function` ? lt : e.name || lt
    } catch {
        return lt
    }
}

function ut(e) {
    let t = e.exception;
    if (t) {
        let e = [];
        try {
            return t.values.forEach(t => {
                t.stacktrace.frames && e.push(...t.stacktrace.frames)
            }), e
        } catch {
            return
        }
    }
}
var dt = {},
    ft = {};

function k(e, t) {
    dt[e] = dt[e] || [], dt[e].push(t)
}

function A(e, t) {
    if (!ft[e]) {
        ft[e] = !0;
        try {
            t()
        } catch (t) {
            E && w.error(`Error while instrumenting ${e}`, t)
        }
    }
}

function j(e, t) {
    let n = e && dt[e];
    if (n)
        for (let r of n) try {
            r(t)
        } catch (t) {
            E && w.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${O(r)}\nError:`, t)
        }
}
var pt = null;

function mt(e) {
    let t = `error`;
    k(t, e), A(t, ht)
}

function ht() {
    pt = S.onerror, S.onerror = function(e, t, n, r, i) {
        return j(`error`, {
            column: r,
            error: i,
            line: n,
            msg: e,
            url: t
        }), pt ? pt.apply(this, arguments) : !1
    }, S.onerror.__SENTRY_INSTRUMENTED__ = !0
}
var gt = null;

function _t(e) {
    let t = `unhandledrejection`;
    k(t, e), A(t, vt)
}

function vt() {
    gt = S.onunhandledrejection, S.onunhandledrejection = function(e) {
        return j(`unhandledrejection`, e), gt ? gt.apply(this, arguments) : !0
    }, S.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
}
var M = `sentry.source`,
    yt = `sentry.sample_rate`,
    bt = `sentry.previous_trace_sample_rate`,
    N = `sentry.op`,
    P = `sentry.origin`,
    xt = `sentry.idle_span_finish_reason`,
    St = `sentry.measurement_unit`,
    Ct = `sentry.measurement_value`,
    wt = `sentry.custom_span_name`,
    Tt = `sentry.profile_id`,
    Et = `sentry.exclusive_time`,
    Dt = `sentry.link.type`;

function Ot(e) {
    if (e < 400 && e >= 100) return {
        code: 1
    };
    if (e >= 400 && e < 500) switch (e) {
        case 401:
            return {
                code: 2,
                message: `unauthenticated`
            };
        case 403:
            return {
                code: 2,
                message: `permission_denied`
            };
        case 404:
            return {
                code: 2,
                message: `not_found`
            };
        case 409:
            return {
                code: 2,
                message: `already_exists`
            };
        case 413:
            return {
                code: 2,
                message: `failed_precondition`
            };
        case 429:
            return {
                code: 2,
                message: `resource_exhausted`
            };
        case 499:
            return {
                code: 2,
                message: `cancelled`
            };
        default:
            return {
                code: 2,
                message: `invalid_argument`
            }
    }
    if (e >= 500 && e < 600) switch (e) {
        case 501:
            return {
                code: 2,
                message: `unimplemented`
            };
        case 503:
            return {
                code: 2,
                message: `unavailable`
            };
        case 504:
            return {
                code: 2,
                message: `deadline_exceeded`
            };
        default:
            return {
                code: 2,
                message: `internal_error`
            }
    }
    return {
        code: 2,
        message: `unknown_error`
    }
}

function kt(e, t) {
    e.setAttribute(`http.response.status_code`, t);
    let n = Ot(t);
    n.message !== `unknown_error` && e.setStatus(n)
}
var At = `_sentryScope`,
    jt = `_sentryIsolationScope`;

function Mt(e, t, n) {
    e && (a(e, jt, n), a(e, At, t))
}

function Nt(e) {
    return {
        scope: e[At],
        isolationScope: e[jt]
    }
}
var Pt = `sentry-`,
    Ft = /^sentry-/;

function It(e) {
    let t = Rt(e);
    if (!t) return;
    let n = Object.entries(t).reduce((e, [t, n]) => {
        if (t.match(Ft)) {
            let r = t.slice(7);
            e[r] = n
        }
        return e
    }, {});
    if (Object.keys(n).length > 0) return n
}

function Lt(e) {
    if (e) return Bt(Object.entries(e).reduce((e, [t, n]) => (n && (e[`${Pt}${t}`] = n), e), {}))
}

function Rt(e) {
    if (!(!e || !xe(e) && !Array.isArray(e))) return Array.isArray(e) ? e.reduce((e, t) => {
        let n = zt(t);
        return Object.entries(n).forEach(([t, n]) => {
            e[t] = n
        }), e
    }, {}) : zt(e)
}

function zt(e) {
    return e.split(`,`).map(e => e.split(`=`).map(e => {
        try {
            return decodeURIComponent(e.trim())
        } catch {
            return
        }
    })).reduce((e, [t, n]) => (t && n && (e[t] = n), e), {})
}

function Bt(e) {
    if (Object.keys(e).length !== 0) return Object.entries(e).reduce((e, [t, n], r) => {
        let i = `${encodeURIComponent(t)}=${encodeURIComponent(n)}`,
            a = r === 0 ? i : `${e},${i}`;
        return a.length > 8192 ? (E && w.warn(`Not adding key: ${t} with val: ${n} to baggage header due to exceeding baggage size limits.`), e) : a
    }, ``)
}
var Vt = /^o(\d+)\./,
    Ht = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

function Ut(e) {
    return e === `http` || e === `https`
}

function Wt(e, t = !1) {
    let {
        host: n,
        path: r,
        pass: i,
        port: a,
        projectId: o,
        protocol: s,
        publicKey: c
    } = e;
    return `${s}://${c}${t&&i?`:${i}`:``}@${n}${a?`:${a}`:``}/${r&&`${r}/`}${o}`
}

function Gt(e) {
    let t = Ht.exec(e);
    if (!t) {
        Pe(() => {
            console.error(`Invalid Sentry Dsn: ${e}`)
        });
        return
    }
    let [n, r, i = ``, a = ``, o = ``, s = ``] = t.slice(1), c = ``, l = s, u = l.split(`/`);
    if (u.length > 1 && (c = u.slice(0, -1).join(`/`), l = u.pop()), l) {
        let e = l.match(/^\d+/);
        e && (l = e[0])
    }
    return Kt({
        host: a,
        pass: i,
        path: c,
        projectId: l,
        port: o,
        protocol: n,
        publicKey: r
    })
}

function Kt(e) {
    return {
        protocol: e.protocol,
        publicKey: e.publicKey || ``,
        pass: e.pass || ``,
        host: e.host,
        port: e.port || ``,
        path: e.path || ``,
        projectId: e.projectId
    }
}

function qt(e) {
    if (!E) return !0;
    let {
        port: t,
        projectId: n,
        protocol: r
    } = e;
    return [`protocol`, `publicKey`, `host`, `projectId`].find(t => e[t] ? !1 : (w.error(`Invalid Sentry Dsn: ${t} missing`), !0)) ? !1 : n.match(/^\d+$/) ? Ut(r) ? t && isNaN(parseInt(t, 10)) ? (w.error(`Invalid Sentry Dsn: Invalid port ${t}`), !1) : !0 : (w.error(`Invalid Sentry Dsn: Invalid protocol ${r}`), !1) : (w.error(`Invalid Sentry Dsn: Invalid projectId ${n}`), !1)
}

function Jt(e) {
    return e.match(Vt) ? .[1]
}

function Yt(e) {
    let t = e.getOptions(),
        {
            host: n
        } = e.getDsn() || {},
        r;
    return t.orgId ? r = String(t.orgId) : n && (r = Jt(n)), r
}

function Xt(e) {
    let t = typeof e == `string` ? Gt(e) : Kt(e);
    if (!(!t || !qt(t))) return t
}

function Zt(e) {
    if (typeof e == `boolean`) return Number(e);
    let t = typeof e == `string` ? parseFloat(e) : e;
    if (!(typeof t != `number` || isNaN(t) || t < 0 || t > 1)) return t
}
var Qt = RegExp(`^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$`);

function $t(e) {
    if (!e) return;
    let t = e.match(Qt);
    if (!t) return;
    let n;
    return t[3] === `1` ? n = !0 : t[3] === `0` && (n = !1), {
        traceId: t[1],
        parentSampled: n,
        parentSpanId: t[2]
    }
}

function en(e, t) {
    let n = $t(e),
        r = It(t);
    if (!n ? .traceId) return {
        traceId: s(),
        sampleRand: Math.random()
    };
    let i = nn(n, r);
    r && (r.sample_rand = i.toString());
    let {
        traceId: a,
        parentSpanId: o,
        parentSampled: c
    } = n;
    return {
        traceId: a,
        parentSpanId: o,
        sampled: c,
        dsc: r || {},
        sampleRand: i
    }
}

function tn(e = s(), t = c(), n) {
    let r = ``;
    return n !== void 0 && (r = n ? `-1` : `-0`), `${e}-${t}${r}`
}

function nn(e, t) {
    let n = Zt(t ? .sample_rand);
    if (n !== void 0) return n;
    let r = Zt(t ? .sample_rate);
    return r && e ? .parentSampled !== void 0 ? e.parentSampled ? Math.random() * r : r + Math.random() * (1 - r) : Math.random()
}
var rn = !1;

function an(e) {
    let {
        spanId: t,
        traceId: n
    } = e.spanContext(), {
        data: r,
        op: i,
        parent_span_id: a,
        status: o,
        origin: s,
        links: c
    } = I(e);
    return {
        parent_span_id: a,
        span_id: t,
        trace_id: n,
        data: r,
        op: i,
        status: o,
        origin: s,
        links: c
    }
}

function on(e) {
    let {
        spanId: t,
        traceId: n,
        isRemote: r
    } = e.spanContext(), i = r ? t : I(e).parent_span_id, a = Nt(e).scope;
    return {
        parent_span_id: i,
        span_id: r ? a ? .getPropagationContext().propagationSpanId || c() : t,
        trace_id: n
    }
}

function sn(e) {
    let {
        traceId: t,
        spanId: n
    } = e.spanContext();
    return tn(t, n, L(e))
}

function cn(e) {
    if (e && e.length > 0) return e.map(({
        context: {
            spanId: e,
            traceId: t,
            traceFlags: n,
            ...r
        },
        attributes: i
    }) => ({
        span_id: e,
        trace_id: t,
        sampled: n === 1,
        attributes: i,
        ...r
    }))
}

function F(e) {
    return typeof e == `number` ? ln(e) : Array.isArray(e) ? e[0] + e[1] / 1e9 : e instanceof Date ? ln(e.getTime()) : _()
}

function ln(e) {
    return e > 9999999999 ? e / 1e3 : e
}

function I(e) {
    if (dn(e)) return e.getSpanJSON();
    let {
        spanId: t,
        traceId: n
    } = e.spanContext();
    if (un(e)) {
        let {
            attributes: r,
            startTime: i,
            name: a,
            endTime: o,
            status: s,
            links: c
        } = e;
        return {
            span_id: t,
            trace_id: n,
            data: r,
            description: a,
            parent_span_id: `parentSpanId` in e ? e.parentSpanId : `parentSpanContext` in e ? e.parentSpanContext ? .spanId : void 0,
            start_timestamp: F(i),
            timestamp: F(o) || void 0,
            status: fn(s),
            op: r[N],
            origin: r[P],
            links: cn(c)
        }
    }
    return {
        span_id: t,
        trace_id: n,
        start_timestamp: 0,
        data: {}
    }
}

function un(e) {
    let t = e;
    return !!t.attributes && !!t.startTime && !!t.name && !!t.endTime && !!t.status
}

function dn(e) {
    return typeof e.getSpanJSON == `function`
}

function L(e) {
    let {
        traceFlags: t
    } = e.spanContext();
    return t === 1
}

function fn(e) {
    if (!(!e || e.code === 0)) return e.code === 1 ? `ok` : e.message || `unknown_error`
}
var pn = `_sentryChildSpans`,
    mn = `_sentryRootSpan`;

function hn(e, t) {
    a(t, mn, e[mn] || e), e[pn] ? e[pn].add(t) : a(e, pn, new Set([t]))
}

function gn(e, t) {
    e[pn] && e[pn].delete(t)
}

function _n(e) {
    let t = new Set;

    function n(e) {
        if (!t.has(e) && L(e)) {
            t.add(e);
            let r = e[pn] ? Array.from(e[pn]) : [];
            for (let e of r) n(e)
        }
    }
    return n(e), Array.from(t)
}

function R(e) {
    return e[mn] || e
}

function z() {
    let e = oe(he());
    return e.getActiveSpan ? e.getActiveSpan() : Ge(x())
}

function vn() {
    rn || = (Pe(() => {
        console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly.")
    }), !0)
}
var yn = !1;

function bn() {
    if (yn) return;

    function e() {
        let e = z(),
            t = e && R(e);
        if (t) {
            let e = `internal_error`;
            E && w.log(`[Tracing] Root span: ${e} -> Global error occurred`), t.setStatus({
                code: 2,
                message: e
            })
        }
    }
    e.tag = `sentry_tracingErrorCallback`, yn = !0, mt(e), _t(e)
}

function B(e) {
    if (typeof __SENTRY_TRACING__ == `boolean` && !__SENTRY_TRACING__) return !1;
    let t = e || C() ? .getOptions();
    return !!t && (t.tracesSampleRate != null || !!t.tracesSampler)
}
var xn = `production`,
    Sn = `_frozenDsc`;

function Cn(e, t) {
    a(e, Sn, t)
}

function wn(e, t) {
    let n = t.getOptions(),
        {
            publicKey: r
        } = t.getDsn() || {},
        i = {
            environment: n.environment || `production`,
            release: n.release,
            public_key: r,
            trace_id: e,
            org_id: Yt(t)
        };
    return t.emit(`createDsc`, i), i
}

function Tn(e, t) {
    let n = t.getPropagationContext();
    return n.dsc || wn(n.traceId, e)
}

function V(e) {
    let t = C();
    if (!t) return {};
    let n = R(e),
        r = I(n),
        i = r.data,
        a = n.spanContext().traceState,
        o = a ? .get(`sentry.sample_rate`) ? ? i[`sentry.sample_rate`] ? ? i[`sentry.previous_trace_sample_rate`];

    function s(e) {
        return (typeof o == `number` || typeof o == `string`) && (e.sample_rate = `${o}`), e
    }
    let c = n[Sn];
    if (c) return s(c);
    let l = a ? .get(`sentry.dsc`),
        u = l && It(l);
    if (u) return s(u);
    let d = wn(e.spanContext().traceId, t),
        f = i[M],
        p = r.description;
    return f !== `url` && p && (d.transaction = p), B() && (d.sampled = String(L(n)), d.sample_rand = a ? .get(`sentry.sample_rand`) ? ? Nt(n).scope ? .getPropagationContext().sampleRand.toString()), s(d), t.emit(`createDsc`, d, n), d
}
var H = class {
    constructor(e = {}) {
        this._traceId = e.traceId || s(), this._spanId = e.spanId || c()
    }
    spanContext() {
        return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: 0
        }
    }
    end(e) {}
    setAttribute(e, t) {
        return this
    }
    setAttributes(e) {
        return this
    }
    setStatus(e) {
        return this
    }
    updateName(e) {
        return this
    }
    isRecording() {
        return !1
    }
    addEvent(e, t, n) {
        return this
    }
    addLink(e) {
        return this
    }
    addLinks(e) {
        return this
    }
    recordException(e, t) {}
};

function U(e, t = 100, n = 1 / 0) {
    try {
        return Dn(``, e, t, n)
    } catch (e) {
        return {
            ERROR: `**non-serializable** (${e})`
        }
    }
}

function En(e, t = 3, n = 100 * 1024) {
    let r = U(e, t);
    return jn(r) > n ? En(e, t - 1, n) : r
}

function Dn(e, t, n = 1 / 0, r = 1 / 0, i = Mn()) {
    let [a, o] = i;
    if (t == null || [`boolean`, `string`].includes(typeof t) || typeof t == `number` && Number.isFinite(t)) return t;
    let s = On(e, t);
    if (!s.startsWith(`[object `)) return s;
    if (t.__sentry_skip_normalization__) return t;
    let c = typeof t.__sentry_override_normalization_depth__ == `number` ? t.__sentry_override_normalization_depth__ : n;
    if (c === 0) return s.replace(`object `, ``);
    if (a(t)) return `[Circular ~]`;
    let l = t;
    if (l && typeof l.toJSON == `function`) try {
        return Dn(``, l.toJSON(), c - 1, r, i)
    } catch {}
    let u = Array.isArray(t) ? [] : {},
        d = 0,
        f = ue(t);
    for (let e in f) {
        if (!Object.prototype.hasOwnProperty.call(f, e)) continue;
        if (d >= r) {
            u[e] = `[MaxProperties ~]`;
            break
        }
        let t = f[e];
        u[e] = Dn(e, t, c - 1, r, i), d++
    }
    return o(t), u
}

function On(e, t) {
    try {
        if (e === `domain` && t && typeof t == `object` && t._events) return `[Domain]`;
        if (e === `domainEmitter`) return `[DomainEmitter]`;
        if (typeof global < `u` && t === global) return `[Global]`;
        if (typeof window < `u` && t === window) return `[Window]`;
        if (typeof document < `u` && t === document) return `[Document]`;
        if (Se(t)) return `[VueViewModel]`;
        if (je(t)) return `[SyntheticEvent]`;
        if (typeof t == `number` && !Number.isFinite(t)) return `[${t}]`;
        if (typeof t == `function`) return `[Function: ${O(t)}]`;
        if (typeof t == `symbol`) return `[${String(t)}]`;
        if (typeof t == `bigint`) return `[BigInt: ${String(t)}]`;
        let n = kn(t);
        return /^HTML(\w*)Element$/.test(n) ? `[HTMLElement: ${n}]` : `[object ${n}]`
    } catch (e) {
        return `**non-serializable** (${e})`
    }
}

function kn(e) {
    let t = Object.getPrototypeOf(e);
    return t ? .constructor ? t.constructor.name : `null prototype`
}

function An(e) {
    return ~-encodeURI(e).split(/%..|./).length
}

function jn(e) {
    return An(JSON.stringify(e))
}

function Mn() {
    let e = new WeakSet;

    function t(t) {
        return e.has(t) ? !0 : (e.add(t), !1)
    }

    function n(t) {
        e.delete(t)
    }
    return [t, n]
}

function Nn(e, t = []) {
    return [e, t]
}

function Pn(e, t) {
    let [n, r] = e;
    return [n, [...r, t]]
}

function Fn(e, t) {
    let n = e[1];
    for (let e of n) {
        let n = e[0].type;
        if (t(e, n)) return !0
    }
    return !1
}

function In(e) {
    let t = Ve(S);
    return t.encodePolyfill ? t.encodePolyfill(e) : new TextEncoder().encode(e)
}

function Ln(e) {
    let [t, n] = e, r = JSON.stringify(t);

    function i(e) {
        typeof r == `string` ? r = typeof e == `string` ? r + e : [In(r), e] : r.push(typeof e == `string` ? In(e) : e)
    }
    for (let e of n) {
        let [t, n] = e;
        if (i(`\n${JSON.stringify(t)}\n`), typeof n == `string` || n instanceof Uint8Array) i(n);
        else {
            let e;
            try {
                e = JSON.stringify(n)
            } catch {
                e = JSON.stringify(U(n))
            }
            i(e)
        }
    }
    return typeof r == `string` ? r : Rn(r)
}

function Rn(e) {
    let t = e.reduce((e, t) => e + t.length, 0),
        n = new Uint8Array(t),
        r = 0;
    for (let t of e) n.set(t, r), r += t.length;
    return n
}

function zn(e) {
    return [{
        type: `span`
    }, e]
}

function Bn(e) {
    let t = typeof e.data == `string` ? In(e.data) : e.data;
    return [{
        type: `attachment`,
        length: t.length,
        filename: e.filename,
        content_type: e.contentType,
        attachment_type: e.attachmentType
    }, t]
}
var Vn = {
    session: `session`,
    sessions: `session`,
    attachment: `attachment`,
    transaction: `transaction`,
    event: `error`,
    client_report: `internal`,
    user_report: `default`,
    profile: `profile`,
    profile_chunk: `profile`,
    replay_event: `replay`,
    replay_recording: `replay`,
    check_in: `monitor`,
    feedback: `feedback`,
    span: `span`,
    raw_security: `security`,
    log: `log_item`
};

function Hn(e) {
    return Vn[e]
}

function Un(e) {
    if (!e ? .sdk) return;
    let {
        name: t,
        version: n
    } = e.sdk;
    return {
        name: t,
        version: n
    }
}

function Wn(e, t, n, r) {
    let i = e.sdkProcessingMetadata ? .dynamicSamplingContext;
    return {
        event_id: e.event_id,
        sent_at: new Date().toISOString(),
        ...t && {
            sdk: t
        },
        ...!!n && r && {
            dsn: Wt(r)
        },
        ...i && {
            trace: i
        }
    }
}

function Gn(e, t) {
    return t ? (e.sdk = e.sdk || {}, e.sdk.name = e.sdk.name || t.name, e.sdk.version = e.sdk.version || t.version, e.sdk.integrations = [...e.sdk.integrations || [], ...t.integrations || []], e.sdk.packages = [...e.sdk.packages || [], ...t.packages || []], e) : e
}

function Kn(e, t, n, r) {
    let i = Un(n);
    return Nn({
        sent_at: new Date().toISOString(),
        ...i && {
            sdk: i
        },
        ...!!r && t && {
            dsn: Wt(t)
        }
    }, [`aggregates` in e ? [{
        type: `sessions`
    }, e] : [{
        type: `session`
    }, e.toJSON()]])
}

function qn(e, t, n, r) {
    let i = Un(n),
        a = e.type && e.type !== `replay_event` ? e.type : `event`;
    Gn(e, n ? .sdk);
    let o = Wn(e, i, r, t);
    return delete e.sdkProcessingMetadata, Nn(o, [
        [{
            type: a
        }, e]
    ])
}

function Jn(e, t) {
    function n(e) {
        return !!e.trace_id && !!e.public_key
    }
    let r = V(e[0]),
        i = t ? .getDsn(),
        a = t ? .getOptions().tunnel,
        o = {
            sent_at: new Date().toISOString(),
            ...n(r) && {
                trace: r
            },
            ...!!a && i && {
                dsn: Wt(i)
            }
        },
        s = t ? .getOptions().beforeSendSpan,
        c = s ? e => {
            let t = I(e);
            return s(t) || (vn(), t)
        } : I,
        l = [];
    for (let t of e) {
        let e = c(t);
        e && l.push(zn(e))
    }
    return Nn(o, l)
}

function Yn(e) {
    if (!E) return;
    let {
        description: t = `< unknown name >`,
        op: n = `< unknown op >`,
        parent_span_id: r
    } = I(e), {
        spanId: i
    } = e.spanContext(), a = L(e), o = R(e), s = o === e, c = `[Tracing] Starting ${a?`sampled`:`unsampled`} ${s?`root `:``}span`, l = [`op: ${n}`, `name: ${t}`, `ID: ${i}`];
    if (r && l.push(`parent ID: ${r}`), !s) {
        let {
            op: e,
            description: t
        } = I(o);
        l.push(`root ID: ${o.spanContext().spanId}`), e && l.push(`root op: ${e}`), t && l.push(`root description: ${t}`)
    }
    w.log(`${c}
  ${l.join(`
  `)}`)
}

function Xn(e) {
    if (!E) return;
    let {
        description: t = `< unknown name >`,
        op: n = `< unknown op >`
    } = I(e), {
        spanId: r
    } = e.spanContext(), i = `[Tracing] Finishing "${n}" ${R(e)===e?`root `:``}span "${t}" with ID ${r}`;
    w.log(i)
}

function Zn(e, t, n, r = z()) {
    let i = r && R(r);
    i && (E && w.log(`[Measurement] Setting measurement on root span: ${e} = ${t} ${n}`), i.addEvent(e, {
        [Ct]: t,
        [St]: n
    }))
}

function Qn(e) {
    if (!e || e.length === 0) return;
    let t = {};
    return e.forEach(e => {
        let n = e.attributes || {},
            r = n[St],
            i = n[Ct];
        typeof r == `string` && typeof i == `number` && (t[e.name] = {
            value: i,
            unit: r
        })
    }), t
}
var $n = 1e3,
    er = class {
        constructor(e = {}) {
            this._traceId = e.traceId || s(), this._spanId = e.spanId || c(), this._startTime = e.startTimestamp || _(), this._links = e.links, this._attributes = {}, this.setAttributes({
                [P]: `manual`,
                [N]: e.op,
                ...e.attributes
            }), this._name = e.name, e.parentSpanId && (this._parentSpanId = e.parentSpanId), `sampled` in e && (this._sampled = e.sampled), e.endTimestamp && (this._endTime = e.endTimestamp), this._events = [], this._isStandaloneSpan = e.isStandalone, this._endTime && this._onSpanEnded()
        }
        addLink(e) {
            return this._links ? this._links.push(e) : this._links = [e], this
        }
        addLinks(e) {
            return this._links ? this._links.push(...e) : this._links = e, this
        }
        recordException(e, t) {}
        spanContext() {
            let {
                _spanId: e,
                _traceId: t,
                _sampled: n
            } = this;
            return {
                spanId: e,
                traceId: t,
                traceFlags: +!!n
            }
        }
        setAttribute(e, t) {
            return t === void 0 ? delete this._attributes[e] : this._attributes[e] = t, this
        }
        setAttributes(e) {
            return Object.keys(e).forEach(t => this.setAttribute(t, e[t])), this
        }
        updateStartTime(e) {
            this._startTime = F(e)
        }
        setStatus(e) {
            return this._status = e, this
        }
        updateName(e) {
            return this._name = e, this.setAttribute(M, `custom`), this
        }
        end(e) {
            this._endTime || (this._endTime = F(e), Xn(this), this._onSpanEnded())
        }
        getSpanJSON() {
            return {
                data: this._attributes,
                description: this._name,
                op: this._attributes[N],
                parent_span_id: this._parentSpanId,
                span_id: this._spanId,
                start_timestamp: this._startTime,
                status: fn(this._status),
                timestamp: this._endTime,
                trace_id: this._traceId,
                origin: this._attributes[P],
                profile_id: this._attributes[Tt],
                exclusive_time: this._attributes[Et],
                measurements: Qn(this._events),
                is_segment: this._isStandaloneSpan && R(this) === this || void 0,
                segment_id: this._isStandaloneSpan ? R(this).spanContext().spanId : void 0,
                links: cn(this._links)
            }
        }
        isRecording() {
            return !this._endTime && !!this._sampled
        }
        addEvent(e, t, n) {
            E && w.log(`[Tracing] Adding an event to span:`, e);
            let r = tr(t) ? t : n || _(),
                i = tr(t) ? {} : t || {},
                a = {
                    name: e,
                    time: F(r),
                    attributes: i
                };
            return this._events.push(a), this
        }
        isStandaloneSpan() {
            return !!this._isStandaloneSpan
        }
        _onSpanEnded() {
            let e = C();
            if (e && e.emit(`spanEnd`, this), !(this._isStandaloneSpan || this === R(this))) return;
            if (this._isStandaloneSpan) {
                this._sampled ? ir(Jn([this], e)) : (E && w.log(`[Tracing] Discarding standalone span because its trace was not chosen to be sampled.`), e && e.recordDroppedEvent(`sample_rate`, `span`));
                return
            }
            let t = this._convertSpanToTransaction();
            t && (Nt(this).scope || x()).captureEvent(t)
        }
        _convertSpanToTransaction() {
            if (!nr(I(this))) return;
            this._name || = (E && w.warn("Transaction has no name, falling back to `<unlabeled transaction>`."), `<unlabeled transaction>`);
            let {
                scope: e,
                isolationScope: t
            } = Nt(this), n = e ? .getScopeData().sdkProcessingMetadata ? .normalizedRequest;
            if (this._sampled !== !0) return;
            let r = _n(this).filter(e => e !== this && !rr(e)).map(e => I(e)).filter(nr),
                i = this._attributes[M];
            delete this._attributes[wt], r.forEach(e => {
                delete e.data[wt]
            });
            let a = {
                    contexts: {
                        trace: an(this)
                    },
                    spans: r.length > $n ? r.sort((e, t) => e.start_timestamp - t.start_timestamp).slice(0, $n) : r,
                    start_timestamp: this._startTime,
                    timestamp: this._endTime,
                    transaction: this._name,
                    type: `transaction`,
                    sdkProcessingMetadata: {
                        capturedSpanScope: e,
                        capturedSpanIsolationScope: t,
                        dynamicSamplingContext: V(this)
                    },
                    request: n,
                    ...i && {
                        transaction_info: {
                            source: i
                        }
                    }
                },
                o = Qn(this._events);
            return o && Object.keys(o).length && (E && w.log(`[Measurements] Adding measurements to transaction event`, JSON.stringify(o, void 0, 2)), a.measurements = o), a
        }
    };

function tr(e) {
    return e && typeof e == `number` || e instanceof Date || Array.isArray(e)
}

function nr(e) {
    return !!e.start_timestamp && !!e.timestamp && !!e.span_id && !!e.trace_id
}

function rr(e) {
    return e instanceof er && e.isStandaloneSpan()
}

function ir(e) {
    let t = C();
    if (!t) return;
    let n = e[1];
    if (!n || n.length === 0) {
        t.recordDroppedEvent(`before_send`, `span`);
        return
    }
    t.sendEnvelope(e)
}

function ar(e, t, n = () => {}) {
    let r;
    try {
        r = e()
    } catch (e) {
        throw t(e), n(), e
    }
    return or(r, t, n)
}

function or(e, t, n) {
    return ze(e) ? e.then(e => (n(), e), e => {
        throw t(e), n(), e
    }) : (n(), e)
}

function sr(e, t, n) {
    if (!B(e)) return [!1];
    let r, i;
    typeof e.tracesSampler == `function` ? (i = e.tracesSampler({ ...t,
        inheritOrSampleWith: e => typeof t.parentSampleRate == `number` ? t.parentSampleRate : typeof t.parentSampled == `boolean` ? Number(t.parentSampled) : e
    }), r = !0) : t.parentSampled === void 0 ? e.tracesSampleRate !== void 0 && (i = e.tracesSampleRate, r = !0) : i = t.parentSampled;
    let a = Zt(i);
    if (a === void 0) return E && w.warn(`[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(i)} of type ${JSON.stringify(typeof i)}.`), [!1];
    if (!a) return E && w.log(`[Tracing] Discarding transaction because ${typeof e.tracesSampler==`function`?`tracesSampler returned 0 or false`:`a negative sampling decision was inherited or tracesSampleRate is set to 0`}`), [!1, a, r];
    let o = n < a;
    return o || E && w.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(i)})`), [o, a, r]
}
var cr = `__SENTRY_SUPPRESS_TRACING__`;

function lr(e, t) {
    let n = mr();
    if (n.startSpan) return n.startSpan(e, t);
    let r = pr(e),
        {
            forceTransaction: i,
            parentSpan: a,
            scope: o
        } = e,
        s = o ? .clone();
    return Ke(s, () => vr(a)(() => {
        let n = x(),
            o = _r(n, a),
            s = e.onlyIfParent && !o ? new H : fr({
                parentSpan: o,
                spanArguments: r,
                forceTransaction: i,
                scope: n
            });
        return ce(n, s), ar(() => t(s), () => {
            let {
                status: e
            } = I(s);
            s.isRecording() && (!e || e === `ok`) && s.setStatus({
                code: 2,
                message: `internal_error`
            })
        }, () => {
            s.end()
        })
    }))
}

function ur(e) {
    let t = mr();
    if (t.startInactiveSpan) return t.startInactiveSpan(e);
    let n = pr(e),
        {
            forceTransaction: r,
            parentSpan: i
        } = e;
    return (e.scope ? t => Ke(e.scope, t) : i === void 0 ? e => e() : e => dr(i, e))(() => {
        let t = x(),
            a = _r(t, i);
        return e.onlyIfParent && !a ? new H : fr({
            parentSpan: a,
            spanArguments: n,
            forceTransaction: r,
            scope: t
        })
    })
}

function dr(e, t) {
    let n = mr();
    return n.withActiveSpan ? n.withActiveSpan(e, t) : Ke(n => (ce(n, e || void 0), t(n)))
}

function fr({
    parentSpan: e,
    spanArguments: t,
    forceTransaction: n,
    scope: r
}) {
    if (!B()) {
        let r = new H;
        return (n || !e) && Cn(r, {
            sampled: `false`,
            sample_rate: `0`,
            transaction: t.name,
            ...V(r)
        }), r
    }
    let i = D(),
        a;
    if (e && !n) a = gr(e, r, t), hn(e, a);
    else if (e) {
        let n = V(e),
            {
                traceId: i,
                spanId: o
            } = e.spanContext(),
            s = L(e);
        a = hr({
            traceId: i,
            parentSpanId: o,
            ...t
        }, r, s), Cn(a, n)
    } else {
        let {
            traceId: e,
            dsc: n,
            parentSpanId: o,
            sampled: s
        } = { ...i.getPropagationContext(),
            ...r.getPropagationContext()
        };
        a = hr({
            traceId: e,
            parentSpanId: o,
            ...t
        }, r, s), n && Cn(a, n)
    }
    return Yn(a), Mt(a, r, i), a
}

function pr(e) {
    let t = {
        isStandalone: (e.experimental || {}).standalone,
        ...e
    };
    if (e.startTime) {
        let n = { ...t
        };
        return n.startTimestamp = F(e.startTime), delete n.startTime, n
    }
    return t
}

function mr() {
    return oe(he())
}

function hr(e, t, n) {
    let r = C(),
        i = r ? .getOptions() || {},
        {
            name: a = ``
        } = e,
        o = {
            spanAttributes: { ...e.attributes
            },
            spanName: a,
            parentSampled: n
        };
    r ? .emit(`beforeSampling`, o, {
        decision: !1
    });
    let s = o.parentSampled ? ? n,
        c = o.spanAttributes,
        l = t.getPropagationContext(),
        [u, d, f] = t.getScopeData().sdkProcessingMetadata[cr] ? [!1] : sr(i, {
            name: a,
            parentSampled: s,
            attributes: c,
            parentSampleRate: Zt(l.dsc ? .sample_rate)
        }, l.sampleRand),
        p = new er({ ...e,
            attributes: {
                [M]: `custom`,
                [yt]: d !== void 0 && f ? d : void 0,
                ...c
            },
            sampled: u
        });
    return !u && r && (E && w.log(`[Tracing] Discarding root span because its trace was not chosen to be sampled.`), r.recordDroppedEvent(`sample_rate`, `transaction`)), r && r.emit(`spanStart`, p), p
}

function gr(e, t, n) {
    let {
        spanId: r,
        traceId: i
    } = e.spanContext(), a = t.getScopeData().sdkProcessingMetadata[cr] ? !1 : L(e), o = a ? new er({ ...n,
        parentSpanId: r,
        traceId: i,
        sampled: a
    }) : new H({
        traceId: i
    });
    hn(e, o);
    let s = C();
    return s && (s.emit(`spanStart`, o), n.endTimestamp && s.emit(`spanEnd`, o)), o
}

function _r(e, t) {
    if (t) return t;
    if (t === null) return;
    let n = Ge(e);
    if (!n) return;
    let r = C();
    return (r ? r.getOptions() : {}).parentSpanIsAlwaysRootSpan ? R(n) : n
}

function vr(e) {
    return e === void 0 ? e => e() : t => dr(e, t)
}
var yr = {
        idleTimeout: 1e3,
        finalTimeout: 3e4,
        childSpanTimeout: 15e3
    },
    br = `heartbeatFailed`,
    xr = `idleTimeout`,
    Sr = `finalTimeout`,
    Cr = `externalFinish`;

function wr(e, t = {}) {
    let n = new Map,
        r = !1,
        i, a = Cr,
        o = !t.disableAutoFinish,
        s = [],
        {
            idleTimeout: c = yr.idleTimeout,
            finalTimeout: l = yr.finalTimeout,
            childSpanTimeout: u = yr.childSpanTimeout,
            beforeSpanEnd: d
        } = t,
        f = C();
    if (!f || !B()) {
        let e = new H;
        return Cn(e, {
            sample_rate: `0`,
            sampled: `false`,
            ...V(e)
        }), e
    }
    let p = x(),
        m = z(),
        h = Tr(e);
    h.end = new Proxy(h.end, {
        apply(e, t, n) {
            if (d && d(h), t instanceof H) return;
            let [r, ...i] = n, a = F(r || _()), o = _n(h).filter(e => e !== h);
            if (!o.length) return ie(a), Reflect.apply(e, t, [a, ...i]);
            let s = o.map(e => I(e).timestamp).filter(e => !!e),
                c = s.length ? Math.max(...s) : void 0,
                u = I(h).start_timestamp,
                f = Math.min(u ? u + l / 1e3 : 1 / 0, Math.max(u || -1 / 0, Math.min(a, c || 1 / 0)));
            return ie(f), Reflect.apply(e, t, [f, ...i])
        }
    });

    function ee() {
        i && = (clearTimeout(i), void 0)
    }

    function g(e) {
        ee(), i = setTimeout(() => {
            !r && n.size === 0 && o && (a = xr, h.end(e))
        }, c)
    }

    function te(e) {
        i = setTimeout(() => {
            !r && o && (a = br, h.end(e))
        }, u)
    }

    function ne(e) {
        ee(), n.set(e, !0), te(_() + u / 1e3)
    }

    function re(e) {
        n.has(e) && n.delete(e), n.size === 0 && g(_() + c / 1e3)
    }

    function ie(e) {
        r = !0, n.clear(), s.forEach(e => e()), ce(p, m);
        let t = I(h),
            {
                start_timestamp: i
            } = t;
        if (!i) return;
        t.data[`sentry.idle_span_finish_reason`] || h.setAttribute(xt, a), w.log(`[Tracing] Idle span "${t.op}" finished`);
        let o = _n(h).filter(e => e !== h),
            u = 0;
        o.forEach(t => {
            t.isRecording() && (t.setStatus({
                code: 2,
                message: `cancelled`
            }), t.end(e), E && w.log(`[Tracing] Cancelling span since span ended early`, JSON.stringify(t, void 0, 2)));
            let {
                timestamp: n = 0,
                start_timestamp: r = 0
            } = I(t), i = r <= e, a = (l + c) / 1e3, o = n - r <= a;
            if (E) {
                let e = JSON.stringify(t, void 0, 2);
                i ? o || w.log(`[Tracing] Discarding span since it finished after idle span final timeout`, e) : w.log(`[Tracing] Discarding span since it happened after idle span was finished`, e)
            }(!o || !i) && (gn(h, t), u++)
        }), u > 0 && h.setAttribute(`sentry.idle_span_discarded_spans`, u)
    }
    return s.push(f.on(`spanStart`, e => {
        r || e === h || I(e).timestamp || e instanceof er && e.isStandaloneSpan() || _n(h).includes(e) && ne(e.spanContext().spanId)
    })), s.push(f.on(`spanEnd`, e => {
        r || re(e.spanContext().spanId)
    })), s.push(f.on(`idleSpanEnableAutoFinish`, e => {
        e === h && (o = !0, g(), n.size && te())
    })), t.disableAutoFinish || g(), setTimeout(() => {
        r || (h.setStatus({
            code: 2,
            message: `deadline_exceeded`
        }), a = Sr, h.end())
    }, l), h
}

function Tr(e) {
    let t = ur(e);
    return ce(x(), t), E && w.log(`[Tracing] Started span is an idle span`), t
}
var Er = 0,
    Dr = 1,
    Or = 2;

function kr(e) {
    return new jr(t => {
        t(e)
    })
}

function Ar(e) {
    return new jr((t, n) => {
        n(e)
    })
}
var jr = class e {
    constructor(e) {
        this._state = Er, this._handlers = [], this._runExecutor(e)
    }
    then(t, n) {
        return new e((e, r) => {
            this._handlers.push([!1, n => {
                if (!t) e(n);
                else try {
                    e(t(n))
                } catch (e) {
                    r(e)
                }
            }, t => {
                if (!n) r(t);
                else try {
                    e(n(t))
                } catch (e) {
                    r(e)
                }
            }]), this._executeHandlers()
        })
    } catch (e) {
        return this.then(e => e, e)
    } finally(t) {
        return new e((e, n) => {
            let r, i;
            return this.then(e => {
                i = !1, r = e, t && t()
            }, e => {
                i = !0, r = e, t && t()
            }).then(() => {
                if (i) {
                    n(r);
                    return
                }
                e(r)
            })
        })
    }
    _executeHandlers() {
        if (this._state === Er) return;
        let e = this._handlers.slice();
        this._handlers = [], e.forEach(e => {
            e[0] || = (this._state === Dr && e[1](this._value), this._state === Or && e[2](this._value), !0)
        })
    }
    _runExecutor(e) {
        let t = (e, t) => {
                if (this._state === Er) {
                    if (ze(t)) {
                        t.then(n, r);
                        return
                    }
                    this._state = e, this._value = t, this._executeHandlers()
                }
            },
            n = e => {
                t(Dr, e)
            },
            r = e => {
                t(Or, e)
            };
        try {
            e(n, r)
        } catch (e) {
            r(e)
        }
    }
};

function Mr(e, t, n, r = 0) {
    return new jr((i, a) => {
        let o = e[r];
        if (t === null || typeof o != `function`) i(t);
        else {
            let s = o({ ...t
            }, n);
            E && o.id && s === null && w.log(`Event processor "${o.id}" dropped event`), ze(s) ? s.then(t => Mr(e, t, n, r + 1).then(i)).then(null, a) : Mr(e, s, n, r + 1).then(i).then(null, a)
        }
    })
}

function Nr(e, t) {
    let {
        fingerprint: n,
        span: r,
        breadcrumbs: i,
        sdkProcessingMetadata: a
    } = t;
    Ir(e, t), r && zr(e, r), Br(e, n), Lr(e, i), Rr(e, a)
}

function Pr(e, t) {
    let {
        extra: n,
        tags: r,
        user: i,
        contexts: a,
        level: o,
        sdkProcessingMetadata: s,
        breadcrumbs: c,
        fingerprint: l,
        eventProcessors: u,
        attachments: d,
        propagationContext: f,
        transactionName: p,
        span: m
    } = t;
    Fr(e, `extra`, n), Fr(e, `tags`, r), Fr(e, `user`, i), Fr(e, `contexts`, a), e.sdkProcessingMetadata = re(e.sdkProcessingMetadata, s, 2), o && (e.level = o), p && (e.transactionName = p), m && (e.span = m), c.length && (e.breadcrumbs = [...e.breadcrumbs, ...c]), l.length && (e.fingerprint = [...e.fingerprint, ...l]), u.length && (e.eventProcessors = [...e.eventProcessors, ...u]), d.length && (e.attachments = [...e.attachments, ...d]), e.propagationContext = { ...e.propagationContext,
        ...f
    }
}

function Fr(e, t, n) {
    e[t] = re(e[t], n, 1)
}

function Ir(e, t) {
    let {
        extra: n,
        tags: r,
        user: i,
        contexts: a,
        level: o,
        transactionName: s
    } = t;
    Object.keys(n).length && (e.extra = { ...n,
        ...e.extra
    }), Object.keys(r).length && (e.tags = { ...r,
        ...e.tags
    }), Object.keys(i).length && (e.user = { ...i,
        ...e.user
    }), Object.keys(a).length && (e.contexts = { ...a,
        ...e.contexts
    }), o && (e.level = o), s && e.type !== `transaction` && (e.transaction = s)
}

function Lr(e, t) {
    let n = [...e.breadcrumbs || [], ...t];
    e.breadcrumbs = n.length ? n : void 0
}

function Rr(e, t) {
    e.sdkProcessingMetadata = { ...e.sdkProcessingMetadata,
        ...t
    }
}

function zr(e, t) {
    e.contexts = {
        trace: on(t),
        ...e.contexts
    }, e.sdkProcessingMetadata = {
        dynamicSamplingContext: V(t),
        ...e.sdkProcessingMetadata
    };
    let n = I(R(t)).description;
    n && !e.transaction && e.type === `transaction` && (e.transaction = n)
}

function Br(e, t) {
    e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [], t && (e.fingerprint = e.fingerprint.concat(t)), e.fingerprint.length || delete e.fingerprint
}
var Vr, Hr, Ur;

function Wr(e) {
    let t = S._sentryDebugIds;
    if (!t) return {};
    let n = Object.keys(t);
    return Ur && n.length === Hr ? Ur : (Hr = n.length, Ur = n.reduce((n, r) => {
        Vr || = {};
        let i = Vr[r];
        if (i) n[i[0]] = i[1];
        else {
            let i = e(r);
            for (let e = i.length - 1; e >= 0; e--) {
                let a = i[e] ? .filename,
                    o = t[r];
                if (a && o) {
                    n[a] = o, Vr[r] = [a, o];
                    break
                }
            }
        }
        return n
    }, {}), Ur)
}

function Gr(e, t, n, r, i, a) {
    let {
        normalizeDepth: o = 3,
        normalizeMaxBreadth: s = 1e3
    } = e, c = { ...t,
        event_id: t.event_id || n.event_id || Je(),
        timestamp: t.timestamp || ne()
    }, u = n.integrations || e.integrations.map(e => e.name);
    Kr(c, e), Yr(c, u), i && i.emit(`applyFrameMetadata`, t), t.type === void 0 && qr(c, e.stackParser);
    let d = Zr(r, n.captureContext);
    n.mechanism && l(c, n.mechanism);
    let f = i ? i.getEventProcessors() : [],
        p = Ue().getScopeData();
    a && Pr(p, a.getScopeData()), d && Pr(p, d.getScopeData());
    let m = [...n.attachments || [], ...p.attachments];
    return m.length && (n.attachments = m), Nr(c, p), Mr([...f, ...p.eventProcessors], c, n).then(e => (e && Jr(e), typeof o == `number` && o > 0 ? Xr(e, o, s) : e))
}

function Kr(e, t) {
    let {
        environment: n,
        release: r,
        dist: i,
        maxValueLength: a = 250
    } = t;
    e.environment = e.environment || n || `production`, !e.release && r && (e.release = r), !e.dist && i && (e.dist = i);
    let o = e.request;
    o ? .url && (o.url = m(o.url, a))
}

function qr(e, t) {
    let n = Wr(t);
    e.exception ? .values ? .forEach(e => {
        e.stacktrace ? .frames ? .forEach(e => {
            e.filename && (e.debug_id = n[e.filename])
        })
    })
}

function Jr(e) {
    let t = {};
    if (e.exception ? .values ? .forEach(e => {
            e.stacktrace ? .frames ? .forEach(e => {
                e.debug_id && (e.abs_path ? t[e.abs_path] = e.debug_id : e.filename && (t[e.filename] = e.debug_id), delete e.debug_id)
            })
        }), Object.keys(t).length === 0) return;
    e.debug_meta = e.debug_meta || {}, e.debug_meta.images = e.debug_meta.images || [];
    let n = e.debug_meta.images;
    Object.entries(t).forEach(([e, t]) => {
        n.push({
            type: `sourcemap`,
            code_file: e,
            debug_id: t
        })
    })
}

function Yr(e, t) {
    t.length > 0 && (e.sdk = e.sdk || {}, e.sdk.integrations = [...e.sdk.integrations || [], ...t])
}

function Xr(e, t, n) {
    if (!e) return null;
    let r = { ...e,
        ...e.breadcrumbs && {
            breadcrumbs: e.breadcrumbs.map(e => ({ ...e,
                ...e.data && {
                    data: U(e.data, t, n)
                }
            }))
        },
        ...e.user && {
            user: U(e.user, t, n)
        },
        ...e.contexts && {
            contexts: U(e.contexts, t, n)
        },
        ...e.extra && {
            extra: U(e.extra, t, n)
        }
    };
    return e.contexts ? .trace && r.contexts && (r.contexts.trace = e.contexts.trace, e.contexts.trace.data && (r.contexts.trace.data = U(e.contexts.trace.data, t, n))), e.spans && (r.spans = e.spans.map(e => ({ ...e,
        ...e.data && {
            data: U(e.data, t, n)
        }
    }))), e.contexts ? .flags && r.contexts && (r.contexts.flags = U(e.contexts.flags, 3, n)), r
}

function Zr(e, t) {
    if (!t) return e;
    let n = e ? e.clone() : new o;
    return n.update(t), n
}

function Qr(e) {
    if (e) return $r(e) || ti(e) ? {
        captureContext: e
    } : e
}

function $r(e) {
    return e instanceof o || typeof e == `function`
}
var ei = [`user`, `level`, `extra`, `contexts`, `tags`, `fingerprint`, `propagationContext`];

function ti(e) {
    return Object.keys(e).some(e => ei.includes(e))
}

function ni(e, t) {
    return x().captureException(e, Qr(t))
}

function ri(e, t) {
    return x().captureEvent(e, t)
}

function ii(e, t) {
    D().setContext(e, t)
}

function ai(e) {
    D().setTags(e)
}

function oi(e) {
    D().setUser(e)
}

function si() {
    let e = C();
    return e ? .getOptions().enabled !== !1 && !!e ? .getTransport()
}

function ci(e) {
    let t = D(),
        n = x(),
        {
            userAgent: r
        } = S.navigator || {},
        a = i({
            user: n.getUser() || t.getUser(),
            ...r && {
                userAgent: r
            },
            ...e
        }),
        o = t.getSession();
    return o ? .status === `ok` && ke(o, {
        status: `exited`
    }), li(), t.setSession(a), a
}

function li() {
    let e = D(),
        t = x().getSession() || e.getSession();
    t && Ae(t), ui(), e.setSession()
}

function ui() {
    let e = D(),
        t = C(),
        n = e.getSession();
    n && t && t.captureSession(n)
}

function di(e = !1) {
    if (e) {
        li();
        return
    }
    ui()
}
var fi = `7`;

function pi(e) {
    let t = e.protocol ? `${e.protocol}:` : ``,
        n = e.port ? `:${e.port}` : ``;
    return `${t}//${e.host}${n}${e.path?`/${e.path}`:``}/api/`
}

function mi(e) {
    return `${pi(e)}${e.projectId}/envelope/`
}

function hi(e, t) {
    let n = {
        sentry_version: fi
    };
    return e.publicKey && (n.sentry_key = e.publicKey), t && (n.sentry_client = `${t.name}/${t.version}`), new URLSearchParams(n).toString()
}

function gi(e, t, n) {
    return t || `${mi(e)}?${hi(e,n)}`
}
var _i = [];

function vi(e) {
    let t = {};
    return e.forEach(e => {
        let {
            name: n
        } = e, r = t[n];
        r && !r.isDefaultInstance && e.isDefaultInstance || (t[n] = e)
    }), Object.values(t)
}

function yi(e) {
    let t = e.defaultIntegrations || [],
        n = e.integrations;
    t.forEach(e => {
        e.isDefaultInstance = !0
    });
    let r;
    if (Array.isArray(n)) r = [...t, ...n];
    else if (typeof n == `function`) {
        let e = n(t);
        r = Array.isArray(e) ? e : [e]
    } else r = t;
    return vi(r)
}

function bi(e, t) {
    let n = {};
    return t.forEach(t => {
        t && Si(e, t, n)
    }), n
}

function xi(e, t) {
    for (let n of t) n ? .afterAllSetup && n.afterAllSetup(e)
}

function Si(e, t, n) {
    if (n[t.name]) {
        E && w.log(`Integration skipped because it was already installed: ${t.name}`);
        return
    }
    if (n[t.name] = t, _i.indexOf(t.name) === -1 && typeof t.setupOnce == `function` && (t.setupOnce(), _i.push(t.name)), t.setup && typeof t.setup == `function` && t.setup(e), typeof t.preprocessEvent == `function`) {
        let n = t.preprocessEvent.bind(t);
        e.on(`preprocessEvent`, (t, r) => n(t, r, e))
    }
    if (typeof t.processEvent == `function`) {
        let n = t.processEvent.bind(t),
            r = Object.assign((t, r) => n(t, r, e), {
                id: t.name
            });
        e.addEventProcessor(r)
    }
    E && w.log(`Integration installed: ${t.name}`)
}

function W(e) {
    return e
}

function Ci(e, t, n) {
    let r = [{
        type: `client_report`
    }, {
        timestamp: n || ne(),
        discarded_events: e
    }];
    return Nn(t ? {
        dsn: t
    } : {}, [r])
}

function wi(e) {
    let t = [];
    e.message && t.push(e.message);
    try {
        let n = e.exception.values[e.exception.values.length - 1];
        n ? .value && (t.push(n.value), n.type && t.push(`${n.type}: ${n.value}`))
    } catch {}
    return t
}

function Ti(e) {
    let {
        trace_id: t,
        parent_span_id: n,
        span_id: r,
        status: i,
        origin: a,
        data: o,
        op: s
    } = e.contexts ? .trace ? ? {};
    return {
        data: o ? ? {},
        description: e.transaction,
        op: s,
        parent_span_id: n,
        span_id: r ? ? ``,
        start_timestamp: e.start_timestamp ? ? 0,
        status: i,
        timestamp: e.timestamp,
        trace_id: t ? ? ``,
        origin: a,
        profile_id: o ? .[Tt],
        exclusive_time: o ? .[Et],
        measurements: e.measurements,
        is_segment: !0
    }
}

function Ei(e) {
    return {
        type: `transaction`,
        timestamp: e.timestamp,
        start_timestamp: e.start_timestamp,
        transaction: e.description,
        contexts: {
            trace: {
                trace_id: e.trace_id,
                span_id: e.span_id,
                parent_span_id: e.parent_span_id,
                op: e.op,
                status: e.status,
                origin: e.origin,
                data: { ...e.data,
                    ...e.profile_id && {
                        "sentry.profile_id": e.profile_id
                    },
                    ...e.exclusive_time && {
                        "sentry.exclusive_time": e.exclusive_time
                    }
                }
            }
        },
        measurements: e.measurements
    }
}
var Di = `Not capturing exception because it's already been captured.`,
    Oi = `Discarded session because of missing or non-string release`,
    ki = Symbol.for(`SentryInternalError`),
    Ai = Symbol.for(`SentryDoNotSendEventError`);

function ji(e) {
    return {
        message: e,
        [ki]: !0
    }
}

function Mi(e) {
    return {
        message: e,
        [Ai]: !0
    }
}

function Ni(e) {
    return !!e && typeof e == `object` && ki in e
}

function Pi(e) {
    return !!e && typeof e == `object` && Ai in e
}
var Fi = class {
    constructor(e) {
        if (this._options = e, this._integrations = {}, this._numProcessing = 0, this._outcomes = {}, this._hooks = {}, this._eventProcessors = [], e.dsn ? this._dsn = Xt(e.dsn) : E && w.warn(`No DSN provided, client will not send events.`), this._dsn) {
            let t = gi(this._dsn, e.tunnel, e._metadata ? e._metadata.sdk : void 0);
            this._transport = e.transport({
                tunnel: this._options.tunnel,
                recordDroppedEvent: this.recordDroppedEvent.bind(this),
                ...e.transportOptions,
                url: t
            })
        }
    }
    captureException(e, t, n) {
        let r = Je();
        if (ee(e)) return E && w.log(Di), r;
        let i = {
            event_id: r,
            ...t
        };
        return this._process(this.eventFromException(e, i).then(e => this._captureEvent(e, i, n))), i.event_id
    }
    captureMessage(e, t, n, r) {
        let i = {
                event_id: Je(),
                ...n
            },
            a = Oe(e) ? e : String(e),
            o = Ne(e) ? this.eventFromMessage(a, t, i) : this.eventFromException(e, i);
        return this._process(o.then(e => this._captureEvent(e, i, r))), i.event_id
    }
    captureEvent(e, t, n) {
        let r = Je();
        if (t ? .originalException && ee(t.originalException)) return E && w.log(Di), r;
        let i = {
                event_id: r,
                ...t
            },
            a = e.sdkProcessingMetadata || {},
            o = a.capturedSpanScope,
            s = a.capturedSpanIsolationScope;
        return this._process(this._captureEvent(e, i, o || n, s)), i.event_id
    }
    captureSession(e) {
        this.sendSession(e), ke(e, {
            init: !1
        })
    }
    getDsn() {
        return this._dsn
    }
    getOptions() {
        return this._options
    }
    getSdkMetadata() {
        return this._options._metadata
    }
    getTransport() {
        return this._transport
    }
    flush(e) {
        let t = this._transport;
        return t ? (this.emit(`flush`), this._isClientDoneProcessing(e).then(n => t.flush(e).then(e => n && e))) : kr(!0)
    }
    close(e) {
        return this.flush(e).then(e => (this.getOptions().enabled = !1, this.emit(`close`), e))
    }
    getEventProcessors() {
        return this._eventProcessors
    }
    addEventProcessor(e) {
        this._eventProcessors.push(e)
    }
    init() {
        (this._isEnabled() || this._options.integrations.some(({
            name: e
        }) => e.startsWith(`Spotlight`))) && this._setupIntegrations()
    }
    getIntegrationByName(e) {
        return this._integrations[e]
    }
    addIntegration(e) {
        let t = this._integrations[e.name];
        Si(this, e, this._integrations), t || xi(this, [e])
    }
    sendEvent(e, t = {}) {
        this.emit(`beforeSendEvent`, e, t);
        let n = qn(e, this._dsn, this._options._metadata, this._options.tunnel);
        for (let e of t.attachments || []) n = Pn(n, Bn(e));
        let r = this.sendEnvelope(n);
        r && r.then(t => this.emit(`afterSendEvent`, e, t), null)
    }
    sendSession(e) {
        let {
            release: t,
            environment: n = xn
        } = this._options;
        if (`aggregates` in e) {
            let r = e.attrs || {};
            if (!r.release && !t) {
                E && w.warn(Oi);
                return
            }
            r.release = r.release || t, r.environment = r.environment || n, e.attrs = r
        } else {
            if (!e.release && !t) {
                E && w.warn(Oi);
                return
            }
            e.release = e.release || t, e.environment = e.environment || n
        }
        this.emit(`beforeSendSession`, e);
        let r = Kn(e, this._dsn, this._options._metadata, this._options.tunnel);
        this.sendEnvelope(r)
    }
    recordDroppedEvent(e, t, n = 1) {
        if (this._options.sendClientReports) {
            let r = `${e}:${t}`;
            E && w.log(`Recording outcome: "${r}"${n>1?` (${n} times)`:``}`), this._outcomes[r] = (this._outcomes[r] || 0) + n
        }
    }
    on(e, t) {
        let n = this._hooks[e] = this._hooks[e] || [];
        return n.push(t), () => {
            let e = n.indexOf(t);
            e > -1 && n.splice(e, 1)
        }
    }
    emit(e, ...t) {
        let n = this._hooks[e];
        n && n.forEach(e => e(...t))
    }
    sendEnvelope(e) {
        return this.emit(`beforeEnvelope`, e), this._isEnabled() && this._transport ? this._transport.send(e).then(null, e => (E && w.error(`Error while sending envelope:`, e), e)) : (E && w.error(`Transport disabled`), kr({}))
    }
    _setupIntegrations() {
        let {
            integrations: e
        } = this._options;
        this._integrations = bi(this, e), xi(this, e)
    }
    _updateSessionFromEvent(e, t) {
        let n = t.level === `fatal`,
            r = !1,
            i = t.exception ? .values;
        if (i) {
            r = !0;
            for (let e of i)
                if (e.mechanism ? .handled === !1) {
                    n = !0;
                    break
                }
        }
        let a = e.status === `ok`;
        (a && e.errors === 0 || a && n) && (ke(e, { ...n && {
                status: `crashed`
            },
            errors: e.errors || Number(r || n)
        }), this.captureSession(e))
    }
    _isClientDoneProcessing(e) {
        return new jr(t => {
            let n = 0,
                r = setInterval(() => {
                    this._numProcessing == 0 ? (clearInterval(r), t(!0)) : (n += 1, e && n >= e && (clearInterval(r), t(!1)))
                }, 1)
        })
    }
    _isEnabled() {
        return this.getOptions().enabled !== !1 && this._transport !== void 0
    }
    _prepareEvent(e, t, n, r) {
        let i = this.getOptions(),
            a = Object.keys(this._integrations);
        return !t.integrations && a ? .length && (t.integrations = a), this.emit(`preprocessEvent`, e, t), e.type || r.setLastEventId(e.event_id || t.event_id), Gr(i, e, t, n, this, r).then(e => e === null ? e : (this.emit(`postprocessEvent`, e, t), e.contexts = {
            trace: be(n),
            ...e.contexts
        }, e.sdkProcessingMetadata = {
            dynamicSamplingContext: Tn(this, n),
            ...e.sdkProcessingMetadata
        }, e))
    }
    _captureEvent(e, t = {}, n = x(), r = D()) {
        return E && Ri(e) && w.log(`Captured error event \`${wi(e)[0]||`<unknown>`}\``), this._processEvent(e, t, n, r).then(e => e.event_id, e => {
            E && (Pi(e) ? w.log(e.message) : Ni(e) ? w.warn(e.message) : w.warn(e))
        })
    }
    _processEvent(e, t, n, r) {
        let i = this.getOptions(),
            {
                sampleRate: a
            } = i,
            o = zi(e),
            s = Ri(e),
            c = e.type || `error`,
            l = `before send for type \`${c}\``,
            u = a === void 0 ? void 0 : Zt(a);
        if (s && typeof u == `number` && Math.random() > u) return this.recordDroppedEvent(`sample_rate`, `error`), Ar(Mi(`Discarding event because it's not included in the random sample (sampling rate = ${a})`));
        let d = c === `replay_event` ? `replay` : c;
        return this._prepareEvent(e, t, n, r).then(e => {
            if (e === null) throw this.recordDroppedEvent(`event_processor`, d), Mi("An event processor returned `null`, will not send event.");
            return t.data && t.data.__sentry__ === !0 ? e : Ii(Li(this, i, e, t), l)
        }).then(i => {
            if (i === null) {
                if (this.recordDroppedEvent(`before_send`, d), o) {
                    let t = 1 + (e.spans || []).length;
                    this.recordDroppedEvent(`before_send`, `span`, t)
                }
                throw Mi(`${l} returned \`null\`, will not send event.`)
            }
            let a = n.getSession() || r.getSession();
            if (s && a && this._updateSessionFromEvent(a, i), o) {
                let e = (i.sdkProcessingMetadata ? .spanCountBeforeProcessing || 0) - (i.spans ? i.spans.length : 0);
                e > 0 && this.recordDroppedEvent(`before_send`, `span`, e)
            }
            let c = i.transaction_info;
            return o && c && i.transaction !== e.transaction && (i.transaction_info = { ...c,
                source: `custom`
            }), this.sendEvent(i, t), i
        }).then(null, e => {
            throw Pi(e) || Ni(e) ? e : (this.captureException(e, {
                data: {
                    __sentry__: !0
                },
                originalException: e
            }), ji(`Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ${e}`))
        })
    }
    _process(e) {
        this._numProcessing++, e.then(e => (this._numProcessing--, e), e => (this._numProcessing--, e))
    }
    _clearOutcomes() {
        let e = this._outcomes;
        return this._outcomes = {}, Object.entries(e).map(([e, t]) => {
            let [n, r] = e.split(`:`);
            return {
                reason: n,
                category: r,
                quantity: t
            }
        })
    }
    _flushOutcomes() {
        E && w.log(`Flushing outcomes...`);
        let e = this._clearOutcomes();
        if (e.length === 0) {
            E && w.log(`No outcomes to send`);
            return
        }
        if (!this._dsn) {
            E && w.log(`No dsn provided, will not send outcomes`);
            return
        }
        E && w.log(`Sending outcomes:`, e);
        let t = Ci(e, this._options.tunnel && Wt(this._dsn));
        this.sendEnvelope(t)
    }
};

function Ii(e, t) {
    let n = `${t} must return \`null\` or a valid event.`;
    if (ze(e)) return e.then(e => {
        if (!ge(e) && e !== null) throw ji(n);
        return e
    }, e => {
        throw ji(`${t} rejected with ${e}`)
    });
    if (!ge(e) && e !== null) throw ji(n);
    return e
}

function Li(e, t, n, r) {
    let {
        beforeSend: i,
        beforeSendTransaction: a,
        beforeSendSpan: o
    } = t, s = n;
    if (Ri(s) && i) return i(s, r);
    if (zi(s)) {
        if (o) {
            let e = o(Ti(s));
            if (e ? s = re(n, Ei(e)) : vn(), s.spans) {
                let e = [];
                for (let t of s.spans) {
                    let n = o(t);
                    n ? e.push(n) : (vn(), e.push(t))
                }
                s.spans = e
            }
        }
        if (a) {
            if (s.spans) {
                let e = s.spans.length;
                s.sdkProcessingMetadata = { ...n.sdkProcessingMetadata,
                    spanCountBeforeProcessing: e
                }
            }
            return a(s, r)
        }
    }
    return s
}

function Ri(e) {
    return e.type === void 0
}

function zi(e) {
    return e.type === `transaction`
}

function Bi(e) {
    return [{
        type: `log`,
        item_count: e.length,
        content_type: `application/vnd.sentry.items.log+json`
    }, {
        items: e
    }]
}

function Vi(e, t, n, r) {
    let i = {};
    return t ? .sdk && (i.sdk = {
        name: t.sdk.name,
        version: t.sdk.version
    }), n && r && (i.dsn = Wt(r)), Nn(i, [Bi(e)])
}

function Hi(e, t) {
    let n = t ? ? Ui(e) ? ? [];
    if (n.length === 0) return;
    let r = e.getOptions(),
        i = Vi(n, r._metadata, r.tunnel, e.getDsn());
    Wi().set(e, []), e.emit(`flushLogs`), e.sendEnvelope(i)
}

function Ui(e) {
    return Wi().get(e)
}

function Wi() {
    return Ee(`clientToLogBufferMap`, () => new WeakMap)
}

function Gi(e, t) {
    t.debug === !0 && (E ? w.enable() : Pe(() => {
        console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.")
    })), x().update(t.initialScope);
    let n = new e(t);
    return Ki(n), n.init(), n
}

function Ki(e) {
    x().setClient(e)
}
var qi = Symbol.for(`SentryBufferFullError`);

function Ji(e) {
    let t = [];

    function n() {
        return e === void 0 || t.length < e
    }

    function r(e) {
        return t.splice(t.indexOf(e), 1)[0] || Promise.resolve(void 0)
    }

    function i(e) {
        if (!n()) return Ar(qi);
        let i = e();
        return t.indexOf(i) === -1 && t.push(i), i.then(() => r(i)).then(null, () => r(i).then(null, () => {})), i
    }

    function a(e) {
        return new jr((n, r) => {
            let i = t.length;
            if (!i) return n(!0);
            let a = setTimeout(() => {
                e && e > 0 && n(!1)
            }, e);
            t.forEach(e => {
                kr(e).then(() => {
                    --i || (clearTimeout(a), n(!0))
                }, r)
            })
        })
    }
    return {
        $: t,
        add: i,
        drain: a
    }
}
var Yi = 60 * 1e3;

function Xi(e, t = Date.now()) {
    let n = parseInt(`${e}`, 10);
    if (!isNaN(n)) return n * 1e3;
    let r = Date.parse(`${e}`);
    return isNaN(r) ? Yi : r - t
}

function Zi(e, t) {
    return e[t] || e.all || 0
}

function Qi(e, t, n = Date.now()) {
    return Zi(e, t) > n
}

function $i(e, {
    statusCode: t,
    headers: n
}, r = Date.now()) {
    let i = { ...e
        },
        a = n ? .[`x-sentry-rate-limits`],
        o = n ? .[`retry-after`];
    if (a)
        for (let e of a.trim().split(`,`)) {
            let [t, n, , , a] = e.split(`:`, 5), o = parseInt(t, 10), s = (isNaN(o) ? 60 : o) * 1e3;
            if (!n) i.all = r + s;
            else
                for (let e of n.split(`;`)) e === `metric_bucket` ? (!a || a.split(`;`).includes(`custom`)) && (i[e] = r + s) : i[e] = r + s
        } else o ? i.all = r + Xi(o, r) : t === 429 && (i.all = r + 60 * 1e3);
    return i
}

function ea(e, t, n = Ji(e.bufferSize || 64)) {
    let r = {},
        i = e => n.drain(e);

    function a(i) {
        let a = [];
        if (Fn(i, (t, n) => {
                let i = Hn(n);
                Qi(r, i) ? e.recordDroppedEvent(`ratelimit_backoff`, i) : a.push(t)
            }), a.length === 0) return kr({});
        let o = Nn(i[0], a),
            s = t => {
                Fn(o, (n, r) => {
                    e.recordDroppedEvent(t, Hn(r))
                })
            };
        return n.add(() => t({
            body: Ln(o)
        }).then(e => (e.statusCode !== void 0 && (e.statusCode < 200 || e.statusCode >= 300) && E && w.warn(`Sentry responded with status code ${e.statusCode} to sent event.`), r = $i(r, e), e), e => {
            throw s(`network_error`), E && w.error(`Encountered error running transport request:`, e), e
        })).then(e => e, e => {
            if (e === qi) return E && w.error(`Skipped sending event because buffer is full.`), s(`queue_overflow`), kr({});
            throw e
        })
    }
    return {
        send: a,
        flush: i
    }
}

function ta(e) {
    e.user ? .ip_address === void 0 && (e.user = { ...e.user,
        ip_address: `{{auto}}`
    })
}

function na(e) {
    `aggregates` in e ? e.attrs ? .ip_address === void 0 && (e.attrs = { ...e.attrs,
        ip_address: `{{auto}}`
    }) : e.ipAddress === void 0 && (e.ipAddress = `{{auto}}`)
}

function ra(e, t, n = [t], r = `npm`) {
    let i = e._metadata || {};
    i.sdk || = {
        name: `sentry.javascript.${t}`,
        packages: n.map(e => ({
            name: `${r}:@sentry/${e}`,
            version: qe
        })),
        version: qe
    }, e._metadata = i
}

function ia(e = {}) {
    let t = e.client || C();
    if (!si() || !t) return {};
    let n = oe(he());
    if (n.getTraceData) return n.getTraceData(e);
    let r = e.scope || x(),
        i = e.span || z(),
        a = i ? sn(i) : aa(r),
        o = Lt(i ? V(i) : Tn(t, r));
    return Qt.test(a) ? {
        "sentry-trace": a,
        baggage: o
    } : (w.warn(`Invalid sentry-trace data. Cannot generate trace data`), {})
}

function aa(e) {
    let {
        traceId: t,
        sampled: n,
        propagationSpanId: r
    } = e.getPropagationContext();
    return tn(t, r, n)
}
var oa = 100;

function sa(e, t) {
    let n = C(),
        r = D();
    if (!n) return;
    let {
        beforeBreadcrumb: i = null,
        maxBreadcrumbs: a = oa
    } = n.getOptions();
    if (a <= 0) return;
    let o = {
            timestamp: ne(),
            ...e
        },
        s = i ? Pe(() => i(o, t)) : o;
    s !== null && (n.emit && n.emit(`beforeAddBreadcrumb`, s, t), r.addBreadcrumb(s, a))
}
var ca, la = `FunctionToString`,
    ua = new WeakMap,
    da = W((() => ({
        name: la,
        setupOnce() {
            ca = Function.prototype.toString;
            try {
                Function.prototype.toString = function(...e) {
                    let t = de(this),
                        n = ua.has(C()) && t !== void 0 ? t : this;
                    return ca.apply(n, e)
                }
            } catch {}
        },
        setup(e) {
            ua.set(e, !0)
        }
    }))),
    fa = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/, /^ResizeObserver loop completed with undelivered notifications.$/, /^Cannot redefine property: googletag$/, /^Can't find variable: gmo$/, /^undefined is not an object \(evaluating 'a\.[A-Z]'\)$/, `can't redefine non-configurable property "solana"`, `vv().getRestrictions is not a function. (In 'vv().getRestrictions(1,a)', 'vv().getRestrictions' is undefined)`, `Can't find variable: _AutofillCallbackHandler`, /^Non-Error promise rejection captured with value: Object Not Found Matching Id:\d+, MethodName:simulateEvent, ParamCount:\d+$/, /^Java exception was raised during method invocation$/],
    pa = `EventFilters`,
    ma = W((e = {}) => {
        let t;
        return {
            name: pa,
            setup(n) {
                t = ga(e, n.getOptions())
            },
            processEvent(n, r, i) {
                return t || = ga(e, i.getOptions()), _a(n, t) ? null : n
            }
        }
    }),
    ha = W(((e = {}) => ({ ...ma(e),
        name: `InboundFilters`
    })));

function ga(e = {}, t = {}) {
    return {
        allowUrls: [...e.allowUrls || [], ...t.allowUrls || []],
        denyUrls: [...e.denyUrls || [], ...t.denyUrls || []],
        ignoreErrors: [...e.ignoreErrors || [], ...t.ignoreErrors || [], ...e.disableErrorDefaults ? [] : fa],
        ignoreTransactions: [...e.ignoreTransactions || [], ...t.ignoreTransactions || []]
    }
}

function _a(e, t) {
    if (!e.type) {
        if (va(e, t.ignoreErrors)) return E && w.warn(`Event dropped due to being matched by \`ignoreErrors\` option.\nEvent: ${v(e)}`), !0;
        if (wa(e)) return E && w.warn(`Event dropped due to not having an error message, error type or stacktrace.\nEvent: ${v(e)}`), !0;
        if (ba(e, t.denyUrls)) return E && w.warn(`Event dropped due to being matched by \`denyUrls\` option.\nEvent: ${v(e)}.\nUrl: ${Ca(e)}`), !0;
        if (!xa(e, t.allowUrls)) return E && w.warn(`Event dropped due to not being matched by \`allowUrls\` option.\nEvent: ${v(e)}.\nUrl: ${Ca(e)}`), !0
    } else if (e.type === `transaction` && ya(e, t.ignoreTransactions)) return E && w.warn(`Event dropped due to being matched by \`ignoreTransactions\` option.\nEvent: ${v(e)}`), !0;
    return !1
}

function va(e, t) {
    return t ? .length ? wi(e).some(e => T(e, t)) : !1
}

function ya(e, t) {
    if (!t ? .length) return !1;
    let n = e.transaction;
    return n ? T(n, t) : !1
}

function ba(e, t) {
    if (!t ? .length) return !1;
    let n = Ca(e);
    return n ? T(n, t) : !1
}

function xa(e, t) {
    if (!t ? .length) return !0;
    let n = Ca(e);
    return n ? T(n, t) : !0
}

function Sa(e = []) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (n && n.filename !== `<anonymous>` && n.filename !== `[native code]`) return n.filename || null
    }
    return null
}

function Ca(e) {
    try {
        let t = [...e.exception ? .values ? ? []].reverse().find(e => e.mechanism ? .parent_id === void 0 && e.stacktrace ? .frames ? .length) ? .stacktrace ? .frames;
        return t ? Sa(t) : null
    } catch {
        return E && w.error(`Cannot extract url for event ${v(e)}`), null
    }
}

function wa(e) {
    return e.exception ? .values ? .length ? !e.message && !e.exception.values.some(e => e.stacktrace || e.type && e.type !== `Error` || e.value) : !1
}

function Ta(e, t, n, r, i, a) {
    if (!i.exception ? .values || !a || !Fe(a.originalException, Error)) return;
    let o = i.exception.values.length > 0 ? i.exception.values[i.exception.values.length - 1] : void 0;
    o && (i.exception.values = Ea(e, t, r, a.originalException, n, i.exception.values, o, 0))
}

function Ea(e, t, n, r, i, a, o, s) {
    if (a.length >= n + 1) return a;
    let c = [...a];
    if (Fe(r[i], Error)) {
        Da(o, s);
        let a = e(t, r[i]),
            l = c.length;
        Oa(a, i, l, s), c = Ea(e, t, n, r[i], i, [a, ...c], a, l)
    }
    return Array.isArray(r.errors) && r.errors.forEach((r, a) => {
        if (Fe(r, Error)) {
            Da(o, s);
            let l = e(t, r),
                u = c.length;
            Oa(l, `errors[${a}]`, u, s), c = Ea(e, t, n, r, i, [l, ...c], l, u)
        }
    }), c
}

function Da(e, t) {
    e.mechanism = e.mechanism || {
        type: `generic`,
        handled: !0
    }, e.mechanism = { ...e.mechanism,
        ...e.type === `AggregateError` && {
            is_exception_group: !0
        },
        exception_id: t
    }
}

function Oa(e, t, n, r) {
    e.mechanism = e.mechanism || {
        type: `generic`,
        handled: !0
    }, e.mechanism = { ...e.mechanism,
        type: `chained`,
        source: t,
        exception_id: n,
        parent_id: r
    }
}

function ka(e) {
    let t = `console`;
    k(t, e), A(t, Aa)
}

function Aa() {
    `console` in S && we.forEach(function(e) {
        e in S.console && y(S.console, e, function(t) {
            return De[e] = t,
                function(...t) {
                    j(`console`, {
                        args: t,
                        level: e
                    }), De[e] ? .apply(S.console, t)
                }
        })
    })
}

function ja(e) {
    return e === `warn` ? `warning` : [`fatal`, `error`, `warning`, `log`, `info`, `debug`].includes(e) ? e : `log`
}
var Ma = `Dedupe`,
    Na = W((() => {
        let e;
        return {
            name: Ma,
            processEvent(t) {
                if (t.type) return t;
                try {
                    if (Pa(t, e)) return E && w.warn(`Event dropped due to being a duplicate of previously captured event.`), null
                } catch {}
                return e = t
            }
        }
    }));

function Pa(e, t) {
    return t ? !!(Fa(e, t) || Ia(e, t)) : !1
}

function Fa(e, t) {
    let n = e.message,
        r = t.message;
    return !(!n && !r || n && !r || !n && r || n !== r || !Ra(e, t) || !La(e, t))
}

function Ia(e, t) {
    let n = za(t),
        r = za(e);
    return !(!n || !r || n.type !== r.type || n.value !== r.value || !Ra(e, t) || !La(e, t))
}

function La(e, t) {
    let n = ut(e),
        r = ut(t);
    if (!n && !r) return !0;
    if (n && !r || !n && r || (n = n, r = r, r.length !== n.length)) return !1;
    for (let e = 0; e < r.length; e++) {
        let t = r[e],
            i = n[e];
        if (t.filename !== i.filename || t.lineno !== i.lineno || t.colno !== i.colno || t.function !== i.function) return !1
    }
    return !0
}

function Ra(e, t) {
    let n = e.fingerprint,
        r = t.fingerprint;
    if (!n && !r) return !0;
    if (n && !r || !n && r) return !1;
    n = n, r = r;
    try {
        return n.join(``) === r.join(``)
    } catch {
        return !1
    }
}

function za(e) {
    return e.exception ? .values ? .[0]
}
var Ba = `thismessage:/`;

function Va(e) {
    return `isRelative` in e
}

function Ha(e, t) {
    let n = e.indexOf(`://`) <= 0 && e.indexOf(`//`) !== 0,
        r = t ? ? (n ? Ba : void 0);
    try {
        if (`canParse` in URL && !URL.canParse(e, r)) return;
        let t = new URL(e, r);
        return n ? {
            isRelative: n,
            pathname: t.pathname,
            search: t.search,
            hash: t.hash
        } : t
    } catch {}
}

function Ua(e) {
    if (Va(e)) return e.pathname;
    let t = new URL(e);
    return t.search = ``, t.hash = ``, [`80`, `443`].includes(t.port) && (t.port = ``), t.password && = `%filtered%`, t.username && = `%filtered%`, t.toString()
}

function Wa(e) {
    if (!e) return {};
    let t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (!t) return {};
    let n = t[6] || ``,
        r = t[8] || ``;
    return {
        host: t[4],
        path: t[5],
        protocol: t[2],
        search: n,
        hash: r,
        relative: t[5] + n + r
    }
}

function Ga(e) {
    return e.split(/[?#]/, 1)[0]
}

function Ka(e, t, n, r, i = `auto.http.browser`) {
    if (!e.fetchData) return;
    let {
        method: a,
        url: o
    } = e.fetchData, s = B() && t(o);
    if (e.endTimestamp && s) {
        let t = e.fetchData.__span;
        if (!t) return;
        let n = r[t];
        n && (Ja(n, e), delete r[t]);
        return
    }
    let c = !!z(),
        l = s && c ? ur(Za(o, a, i)) : new H;
    if (e.fetchData.__span = l.spanContext().spanId, r[l.spanContext().spanId] = l, n(e.fetchData.url)) {
        let t = e.args[0],
            n = e.args[1] || {},
            r = qa(t, n, B() && c ? l : void 0);
        r && (e.args[1] = n, n.headers = r)
    }
    let u = C();
    if (u) {
        let t = {
            input: e.args,
            response: e.response,
            startTimestamp: e.startTimestamp,
            endTimestamp: e.endTimestamp
        };
        u.emit(`beforeOutgoingRequestSpan`, l, t)
    }
    return l
}

function qa(e, t, n) {
    let r = ia({
            span: n
        }),
        i = r[`sentry-trace`],
        a = r.baggage;
    if (!i) return;
    let o = t.headers || (Ie(e) ? e.headers : void 0);
    if (!o) return { ...r
    };
    if (Xa(o)) {
        let e = new Headers(o);
        if (e.get(`sentry-trace`) || e.set(`sentry-trace`, i), a) {
            let t = e.get(`baggage`);
            t ? Ya(t) || e.set(`baggage`, `${t},${a}`) : e.set(`baggage`, a)
        }
        return e
    } else if (Array.isArray(o)) {
        let e = [...o];
        o.find(e => e[0] === `sentry-trace`) || e.push([`sentry-trace`, i]);
        let t = o.find(e => e[0] === `baggage` && Ya(e[1]));
        return a && !t && e.push([`baggage`, a]), e
    } else {
        let e = `sentry-trace` in o ? o[`sentry-trace`] : void 0,
            t = `baggage` in o ? o.baggage : void 0,
            n = t ? Array.isArray(t) ? [...t] : [t] : [],
            r = t && (Array.isArray(t) ? t.find(e => Ya(e)) : Ya(t));
        return a && !r && n.push(a), { ...o,
            "sentry-trace": e ? ? i,
            baggage: n.length > 0 ? n.join(`,`) : void 0
        }
    }
}

function Ja(e, t) {
    if (t.response) {
        kt(e, t.response.status);
        let n = t.response ? .headers ? .get(`content-length`);
        if (n) {
            let t = parseInt(n);
            t > 0 && e.setAttribute(`http.response_content_length`, t)
        }
    } else t.error && e.setStatus({
        code: 2,
        message: `internal_error`
    });
    e.end()
}

function Ya(e) {
    return e.split(`,`).some(e => e.trim().startsWith(Pt))
}

function Xa(e) {
    return typeof Headers < `u` && Fe(e, Headers)
}

function Za(e, t, n) {
    let r = Ha(e);
    return {
        name: r ? `${t} ${Ua(r)}` : t,
        attributes: Qa(e, r, t, n)
    }
}

function Qa(e, t, n, r) {
    let i = {
        url: e,
        type: `fetch`,
        "http.method": n,
        [P]: r,
        [N]: `http.client`
    };
    return t && (Va(t) || (i[`http.url`] = t.href, i[`server.address`] = t.host), t.search && (i[`http.query`] = t.search), t.hash && (i[`http.fragment`] = t.hash)), i
}

function $a(e) {
    if (e !== void 0) {
        if (e >= 400 && e < 500) return `warning`;
        if (e >= 500) return `error`
    }
}
var eo = S;

function to() {
    return `history` in eo && !!eo.history
}

function no() {
    if (!(`fetch` in eo)) return !1;
    try {
        return new Headers, new Request(`http://www.example.com`), new Response, !0
    } catch {
        return !1
    }
}

function ro(e) {
    return e && /^function\s+\w+\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
}

function io() {
    if (typeof EdgeRuntime == `string`) return !0;
    if (!no()) return !1;
    if (ro(eo.fetch)) return !0;
    let e = !1,
        t = eo.document;
    if (t && typeof t.createElement == `function`) try {
        let n = t.createElement(`iframe`);
        n.hidden = !0, t.head.appendChild(n), n.contentWindow ? .fetch && (e = ro(n.contentWindow.fetch)), t.head.removeChild(n)
    } catch (e) {
        E && w.warn(`Could not create sandbox iframe for pure fetch check, bailing to window.fetch: `, e)
    }
    return e
}

function ao(e, t) {
    let n = `fetch`;
    k(n, e), A(n, () => so(void 0, t))
}

function oo(e) {
    let t = `fetch-body-resolved`;
    k(t, e), A(t, () => so(lo))
}

function so(e, t = !1) {
    t && !io() || y(S, `fetch`, function(t) {
        return function(...n) {
            let r = Error(),
                {
                    method: i,
                    url: o
                } = po(n),
                s = {
                    args: n,
                    fetchData: {
                        method: i,
                        url: o
                    },
                    startTimestamp: _() * 1e3,
                    virtualError: r,
                    headers: mo(n)
                };
            return e || j(`fetch`, { ...s
            }), t.apply(S, n).then(async t => (e ? e(t) : j(`fetch`, { ...s,
                endTimestamp: _() * 1e3,
                response: t
            }), t), e => {
                if (j(`fetch`, { ...s,
                        endTimestamp: _() * 1e3,
                        error: e
                    }), Ce(e) && e.stack === void 0 && (e.stack = r.stack, a(e, `framesToPop`, 1)), e instanceof TypeError && (e.message === `Failed to fetch` || e.message === `Load failed` || e.message === `NetworkError when attempting to fetch resource.`)) try {
                    let t = new URL(s.fetchData.url);
                    e.message = `${e.message} (${t.host})`
                } catch {}
                throw e
            })
        }
    })
}
async function co(e, t) {
    if (e ? .body) {
        let n = e.body,
            r = n.getReader(),
            i = setTimeout(() => {
                n.cancel().then(null, () => {})
            }, 90 * 1e3),
            a = !0;
        for (; a;) {
            let e;
            try {
                e = setTimeout(() => {
                    n.cancel().then(null, () => {})
                }, 5e3);
                let {
                    done: i
                } = await r.read();
                clearTimeout(e), i && (t(), a = !1)
            } catch {
                a = !1
            } finally {
                clearTimeout(e)
            }
        }
        clearTimeout(i), r.releaseLock(), n.cancel().then(null, () => {})
    }
}

function lo(e) {
    let t;
    try {
        t = e.clone()
    } catch {
        return
    }
    co(t, () => {
        j(`fetch-body-resolved`, {
            endTimestamp: _() * 1e3,
            response: e
        })
    })
}

function uo(e, t) {
    return !!e && typeof e == `object` && !!e[t]
}

function fo(e) {
    return typeof e == `string` ? e : e ? uo(e, `url`) ? e.url : e.toString ? e.toString() : `` : ``
}

function po(e) {
    if (e.length === 0) return {
        method: `GET`,
        url: ``
    };
    if (e.length === 2) {
        let [t, n] = e;
        return {
            url: fo(t),
            method: uo(n, `method`) ? String(n.method).toUpperCase() : `GET`
        }
    }
    let t = e[0];
    return {
        url: fo(t),
        method: uo(t, `method`) ? String(t.method).toUpperCase() : `GET`
    }
}

function mo(e) {
    let [t, n] = e;
    try {
        if (typeof n == `object` && n && `headers` in n && n.headers) return new Headers(n.headers);
        if (Ie(t)) return new Headers(t.headers)
    } catch {}
}

function ho() {
    return `npm`
}
var G = S,
    go = 0;

function _o() {
    return go > 0
}

function vo() {
    go++, setTimeout(() => {
        go--
    })
}

function yo(e, t = {}) {
    function n(e) {
        return typeof e == `function`
    }
    if (!n(e)) return e;
    try {
        let t = e.__sentry_wrapped__;
        if (t) return typeof t == `function` ? t : e;
        if (de(e)) return e
    } catch {
        return e
    }
    let r = function(...n) {
        try {
            let r = n.map(e => yo(e, t));
            return e.apply(this, r)
        } catch (e) {
            throw vo(), Ke(r => {
                r.addEventProcessor(e => (t.mechanism && (p(e, void 0, void 0), l(e, t.mechanism)), e.extra = { ...e.extra,
                    arguments: n
                }, e)), ni(e)
            }), e
        }
    };
    try {
        for (let t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t])
    } catch {}
    u(r, e), a(e, `__sentry_wrapped__`, r);
    try {
        Object.getOwnPropertyDescriptor(r, `name`).configurable && Object.defineProperty(r, `name`, {
            get() {
                return e.name
            }
        })
    } catch {}
    return r
}

function bo() {
    let e = pe(),
        {
            referrer: t
        } = G.document || {},
        {
            userAgent: n
        } = G.navigator || {};
    return {
        url: e,
        headers: { ...t && {
                Referer: t
            },
            ...n && {
                "User-Agent": n
            }
        }
    }
}

function xo(e, t) {
    let n = wo(e, t),
        r = {
            type: ko(t),
            value: Ao(t)
        };
    return n.length && (r.stacktrace = {
        frames: n
    }), r.type === void 0 && r.value === `` && (r.value = `Unrecoverable error caught`), r
}

function So(e, t, n, r) {
    let i = C() ? .getOptions().normalizeDepth,
        a = Lo(t),
        o = {
            __serialized__: En(t, i)
        };
    if (a) return {
        exception: {
            values: [xo(e, a)]
        },
        extra: o
    };
    let s = {
        exception: {
            values: [{
                type: Me(t) ? t.constructor.name : r ? `UnhandledRejection` : `Error`,
                value: Fo(t, {
                    isUnhandledRejection: r
                })
            }]
        },
        extra: o
    };
    if (n) {
        let t = wo(e, n);
        t.length && (s.exception.values[0].stacktrace = {
            frames: t
        })
    }
    return s
}

function Co(e, t) {
    return {
        exception: {
            values: [xo(e, t)]
        }
    }
}

function wo(e, t) {
    let n = t.stacktrace || t.stack || ``,
        r = Eo(t),
        i = Do(t);
    try {
        return e(n, r, i)
    } catch {}
    return []
}
var To = /Minified React error #\d+;/i;

function Eo(e) {
    return e && To.test(e.message) ? 1 : 0
}

function Do(e) {
    return typeof e.framesToPop == `number` ? e.framesToPop : 0
}

function Oo(e) {
    return typeof WebAssembly < `u` && WebAssembly.Exception !== void 0 ? e instanceof WebAssembly.Exception : !1
}

function ko(e) {
    let t = e ? .name;
    return !t && Oo(e) ? e.message && Array.isArray(e.message) && e.message.length == 2 ? e.message[0] : `WebAssembly.Exception` : t
}

function Ao(e) {
    let t = e ? .message;
    return Oo(e) ? Array.isArray(e.message) && e.message.length == 2 ? e.message[1] : `wasm exception` : t ? t.error && typeof t.error.message == `string` ? t.error.message : t : `No error message`
}

function jo(e, t, n, r) {
    let i = No(e, t, n ? .syntheticException || void 0, r);
    return l(i), i.level = `error`, n ? .event_id && (i.event_id = n.event_id), kr(i)
}

function Mo(e, t, n = `info`, r, i) {
    let a = Po(e, t, r ? .syntheticException || void 0, i);
    return a.level = n, r ? .event_id && (a.event_id = r.event_id), kr(a)
}

function No(e, t, n, i, a) {
    let o;
    if (Le(t) && t.error) return Co(e, t.error);
    if (ie(t) || r(t)) {
        let r = t;
        if (`stack` in t) o = Co(e, t);
        else {
            let t = r.name || (ie(r) ? `DOMError` : `DOMException`),
                a = r.message ? `${t}: ${r.message}` : t;
            o = Po(e, a, n, i), p(o, a)
        }
        return `code` in r && (o.tags = { ...o.tags,
            "DOMException.code": `${r.code}`
        }), o
    }
    return Ce(t) ? Co(e, t) : ge(t) || Me(t) ? (o = So(e, t, n, a), l(o, {
        synthetic: !0
    }), o) : (o = Po(e, t, n, i), p(o, `${t}`, void 0), l(o, {
        synthetic: !0
    }), o)
}

function Po(e, t, n, r) {
    let i = {};
    if (r && n) {
        let r = wo(e, n);
        r.length && (i.exception = {
            values: [{
                value: t,
                stacktrace: {
                    frames: r
                }
            }]
        }), l(i, {
            synthetic: !0
        })
    }
    if (Oe(t)) {
        let {
            __sentry_template_string__: e,
            __sentry_template_values__: n
        } = t;
        return i.logentry = {
            message: e,
            params: n
        }, i
    }
    return i.message = t, i
}

function Fo(e, {
    isUnhandledRejection: t
}) {
    let n = f(e),
        r = t ? `promise rejection` : `exception`;
    return Le(e) ? `Event \`ErrorEvent\` captured as ${r} with message \`${e.message}\`` : Me(e) ? `Event \`${Io(e)}\` (type=${e.type}) captured as ${r}` : `Object captured as ${r} with keys: ${n}`
}

function Io(e) {
    try {
        let t = Object.getPrototypeOf(e);
        return t ? t.constructor.name : void 0
    } catch {}
}

function Lo(e) {
    for (let t in e)
        if (Object.prototype.hasOwnProperty.call(e, t)) {
            let n = e[t];
            if (n instanceof Error) return n
        }
}
var Ro = 5e3,
    zo = class extends Fi {
        constructor(e) {
            let t = Bo(e);
            ra(t, `browser`, [`browser`], G.SENTRY_SDK_SOURCE || ho()), super(t);
            let {
                sendDefaultPii: n,
                sendClientReports: r,
                enableLogs: i
            } = this._options;
            G.document && (r || i) && G.document.addEventListener(`visibilitychange`, () => {
                G.document.visibilityState === `hidden` && (r && this._flushOutcomes(), i && Hi(this))
            }), i && (this.on(`flush`, () => {
                Hi(this)
            }), this.on(`afterCaptureLog`, () => {
                this._logFlushIdleTimeout && clearTimeout(this._logFlushIdleTimeout), this._logFlushIdleTimeout = setTimeout(() => {
                    Hi(this)
                }, Ro)
            })), n && (this.on(`postprocessEvent`, ta), this.on(`beforeSendSession`, na))
        }
        eventFromException(e, t) {
            return jo(this._options.stackParser, e, t, this._options.attachStacktrace)
        }
        eventFromMessage(e, t = `info`, n) {
            return Mo(this._options.stackParser, e, t, n, this._options.attachStacktrace)
        }
        _prepareEvent(e, t, n, r) {
            return e.platform = e.platform || `javascript`, super._prepareEvent(e, t, n, r)
        }
    };

function Bo(e) {
    return {
        release: typeof __SENTRY_RELEASE__ == `string` ? __SENTRY_RELEASE__ : G.SENTRY_RELEASE ? .id,
        sendClientReports: !0,
        parentSpanIsAlwaysRootSpan: !0,
        ...e
    }
}
var Vo = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__,
    K = S,
    Ho = (e, t) => e > t[1] ? `poor` : e > t[0] ? `needs-improvement` : `good`,
    Uo = (e, t, n, r) => {
        let i, a;
        return o => {
            t.value >= 0 && (o || r) && (a = t.value - (i ? ? 0), (a || i === void 0) && (i = t.value, t.delta = a, t.rating = Ho(t.value, n), e(t)))
        }
    },
    Wo = () => `v5-${Date.now()}-${Math.floor(Math.random()*8999999999999)+0xe8d4a51000}`,
    Go = (e = !0) => {
        let t = K.performance ? .getEntriesByType ? .(`navigation`)[0];
        if (!e || t && t.responseStart > 0 && t.responseStart < performance.now()) return t
    },
    Ko = () => Go() ? .activationStart ? ? 0,
    qo = (e, t = -1) => {
        let n = Go(),
            r = `navigate`;
        return n && (K.document ? .prerendering || Ko() > 0 ? r = `prerender` : K.document ? .wasDiscarded ? r = `restore` : n.type && (r = n.type.replace(/_/g, `-`))), {
            name: e,
            value: t,
            rating: `good`,
            delta: 0,
            entries: [],
            id: Wo(),
            navigationType: r
        }
    },
    Jo = new WeakMap;

function Yo(e, t) {
    return Jo.get(e) || Jo.set(e, new t), Jo.get(e)
}
var Xo = class e {
        constructor() {
            e.prototype.__init.call(this), e.prototype.__init2.call(this)
        }
        __init() {
            this._sessionValue = 0
        }
        __init2() {
            this._sessionEntries = []
        }
        _processEntry(e) {
            if (e.hadRecentInput) return;
            let t = this._sessionEntries[0],
                n = this._sessionEntries[this._sessionEntries.length - 1];
            this._sessionValue && t && n && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (this._sessionValue += e.value, this._sessionEntries.push(e)) : (this._sessionValue = e.value, this._sessionEntries = [e]), this._onAfterProcessingUnexpectedShift ? .(e)
        }
    },
    Zo = (e, t, n = {}) => {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                let r = new PerformanceObserver(e => {
                    Promise.resolve().then(() => {
                        t(e.getEntries())
                    })
                });
                return r.observe({
                    type: e,
                    buffered: !0,
                    ...n
                }), r
            }
        } catch {}
    },
    Qo = e => {
        let t = !1;
        return () => {
            t || = (e(), !0)
        }
    },
    $o = -1,
    es = () => K.document ? .visibilityState === `hidden` && !K.document ? .prerendering ? 0 : 1 / 0,
    ts = e => {
        K.document.visibilityState === `hidden` && $o > -1 && ($o = e.type === `visibilitychange` ? e.timeStamp : 0, rs())
    },
    ns = () => {
        addEventListener(`visibilitychange`, ts, !0), addEventListener(`prerenderingchange`, ts, !0)
    },
    rs = () => {
        removeEventListener(`visibilitychange`, ts, !0), removeEventListener(`prerenderingchange`, ts, !0)
    },
    is = () => {
        if (K.document && $o < 0) {
            let e = Ko();
            $o = (K.document.prerendering ? void 0 : globalThis.performance.getEntriesByType(`visibility-state`).filter(t => t.name === `hidden` && t.startTime > e)[0] ? .startTime) ? ? es(), ns()
        }
        return {
            get firstHiddenTime() {
                return $o
            }
        }
    },
    as = e => {
        K.document ? .prerendering ? addEventListener(`prerenderingchange`, () => e(), !0) : e()
    },
    os = [1800, 3e3],
    ss = (e, t = {}) => {
        as(() => {
            let n = is(),
                r = qo(`FCP`),
                i, a = Zo(`paint`, e => {
                    for (let t of e) t.name === `first-contentful-paint` && (a.disconnect(), t.startTime < n.firstHiddenTime && (r.value = Math.max(t.startTime - Ko(), 0), r.entries.push(t), i(!0)))
                });
            a && (i = Uo(e, r, os, t.reportAllChanges))
        })
    },
    cs = [.1, .25],
    ls = (e, t = {}) => {
        ss(Qo(() => {
            let n = qo(`CLS`, 0),
                r, i = Yo(t, Xo),
                a = e => {
                    for (let t of e) i._processEntry(t);
                    i._sessionValue > n.value && (n.value = i._sessionValue, n.entries = i._sessionEntries, r())
                },
                o = Zo(`layout-shift`, a);
            o && (r = Uo(e, n, cs, t.reportAllChanges), K.document ? .addEventListener(`visibilitychange`, () => {
                K.document ? .visibilityState === `hidden` && (a(o.takeRecords()), r(!0))
            }), K ? .setTimeout ? .(r))
        }))
    },
    us = 0,
    ds = 1 / 0,
    fs = 0,
    ps = e => {
        e.forEach(e => {
            e.interactionId && (ds = Math.min(ds, e.interactionId), fs = Math.max(fs, e.interactionId), us = fs ? (fs - ds) / 7 + 1 : 0)
        })
    },
    ms, hs = () => ms ? us : performance.interactionCount || 0,
    gs = () => {
        `interactionCount` in performance || ms || (ms = Zo(`event`, ps, {
            type: `event`,
            buffered: !0,
            durationThreshold: 0
        }))
    },
    _s = 10,
    vs = 0,
    ys = () => hs() - vs,
    bs = class e {
        constructor() {
            e.prototype.__init.call(this), e.prototype.__init2.call(this)
        }
        __init() {
            this._longestInteractionList = []
        }
        __init2() {
            this._longestInteractionMap = new Map
        }
        _resetInteractions() {
            vs = hs(), this._longestInteractionList.length = 0, this._longestInteractionMap.clear()
        }
        _estimateP98LongestInteraction() {
            let e = Math.min(this._longestInteractionList.length - 1, Math.floor(ys() / 50));
            return this._longestInteractionList[e]
        }
        _processEntry(e) {
            if (this._onBeforeProcessingEntry ? .(e), !(e.interactionId || e.entryType === `first-input`)) return;
            let t = this._longestInteractionList.at(-1),
                n = this._longestInteractionMap.get(e.interactionId);
            if (n || this._longestInteractionList.length < _s || e.duration > t._latency) {
                if (n ? e.duration > n._latency ? (n.entries = [e], n._latency = e.duration) : e.duration === n._latency && e.startTime === n.entries[0].startTime && n.entries.push(e) : (n = {
                        id: e.interactionId,
                        entries: [e],
                        _latency: e.duration
                    }, this._longestInteractionMap.set(n.id, n), this._longestInteractionList.push(n)), this._longestInteractionList.sort((e, t) => t._latency - e._latency), this._longestInteractionList.length > _s) {
                    let e = this._longestInteractionList.splice(_s);
                    for (let t of e) this._longestInteractionMap.delete(t.id)
                }
                this._onAfterProcessingINPCandidate ? .(n)
            }
        }
    },
    xs = e => {
        let t = t => {
            (t.type === `pagehide` || K.document ? .visibilityState === `hidden`) && e(t)
        };
        K.document && (addEventListener(`visibilitychange`, t, !0), addEventListener(`pagehide`, t, !0))
    },
    Ss = e => {
        let t = K.requestIdleCallback || K.setTimeout;
        K.document ? .visibilityState === `hidden` ? e() : (e = Qo(e), t(e), xs(e))
    },
    Cs = [200, 500],
    ws = 40,
    Ts = (e, t = {}) => {
        globalThis.PerformanceEventTiming && `interactionId` in PerformanceEventTiming.prototype && as(() => {
            gs();
            let n = qo(`INP`),
                r, i = Yo(t, bs),
                a = e => {
                    Ss(() => {
                        for (let t of e) i._processEntry(t);
                        let t = i._estimateP98LongestInteraction();
                        t && t._latency !== n.value && (n.value = t._latency, n.entries = t.entries, r())
                    })
                },
                o = Zo(`event`, a, {
                    durationThreshold: t.durationThreshold ? ? ws
                });
            r = Uo(e, n, Cs, t.reportAllChanges), o && (o.observe({
                type: `first-input`,
                buffered: !0
            }), xs(() => {
                a(o.takeRecords()), r(!0)
            }))
        })
    },
    Es = class {
        _processEntry(e) {
            this._onBeforeProcessingEntry ? .(e)
        }
    },
    Ds = [2500, 4e3],
    Os = (e, t = {}) => {
        as(() => {
            let n = is(),
                r = qo(`LCP`),
                i, a = Yo(t, Es),
                o = e => {
                    t.reportAllChanges || (e = e.slice(-1));
                    for (let t of e) a._processEntry(t), t.startTime < n.firstHiddenTime && (r.value = Math.max(t.startTime - Ko(), 0), r.entries = [t], i())
                },
                s = Zo(`largest-contentful-paint`, o);
            if (s) {
                i = Uo(e, r, Ds, t.reportAllChanges);
                let n = Qo(() => {
                    o(s.takeRecords()), s.disconnect(), i(!0)
                });
                for (let e of [`keydown`, `click`, `visibilitychange`]) K.document && addEventListener(e, () => Ss(n), {
                    capture: !0,
                    once: !0
                })
            }
        })
    },
    ks = [800, 1800],
    As = e => {
        K.document ? .prerendering ? as(() => As(e)) : K.document ? .readyState === `complete` ? setTimeout(e) : addEventListener(`load`, () => As(e), !0)
    },
    js = (e, t = {}) => {
        let n = qo(`TTFB`),
            r = Uo(e, n, ks, t.reportAllChanges);
        As(() => {
            let e = Go();
            e && (n.value = Math.max(e.responseStart - Ko(), 0), n.entries = [e], r(!0))
        })
    },
    Ms = {},
    Ns = {},
    Ps, Fs, Is, Ls;

function Rs(e, t = !1) {
    return Js(`cls`, e, Ws, Ps, t)
}

function zs(e, t = !1) {
    return Js(`lcp`, e, Gs, Fs, t)
}

function Bs(e) {
    return Js(`ttfb`, e, Ks, Is)
}

function Vs(e) {
    return Js(`inp`, e, qs, Ls)
}

function Hs(e, t) {
    return Xs(e, t), Ns[e] || (Ys(e), Ns[e] = !0), Zs(e, t)
}

function Us(e, t) {
    let n = Ms[e];
    if (n ? .length)
        for (let r of n) try {
            r(t)
        } catch (t) {
            Vo && w.error(`Error while triggering instrumentation handler.\nType: ${e}\nName: ${O(r)}\nError:`, t)
        }
}

function Ws() {
    return ls(e => {
        Us(`cls`, {
            metric: e
        }), Ps = e
    }, {
        reportAllChanges: !0
    })
}

function Gs() {
    return Os(e => {
        Us(`lcp`, {
            metric: e
        }), Fs = e
    }, {
        reportAllChanges: !0
    })
}

function Ks() {
    return js(e => {
        Us(`ttfb`, {
            metric: e
        }), Is = e
    })
}

function qs() {
    return Ts(e => {
        Us(`inp`, {
            metric: e
        }), Ls = e
    })
}

function Js(e, t, n, r, i = !1) {
    Xs(e, t);
    let a;
    return Ns[e] || (a = n(), Ns[e] = !0), r && t({
        metric: r
    }), Zs(e, t, i ? a : void 0)
}

function Ys(e) {
    let t = {};
    e === `event` && (t.durationThreshold = 0), Zo(e, t => {
        Us(e, {
            entries: t
        })
    }, t)
}

function Xs(e, t) {
    Ms[e] = Ms[e] || [], Ms[e].push(t)
}

function Zs(e, t, n) {
    return () => {
        n && n();
        let r = Ms[e];
        if (!r) return;
        let i = r.indexOf(t);
        i !== -1 && r.splice(i, 1)
    }
}

function Qs(e) {
    return `duration` in e
}

function $s(e) {
    return typeof e == `number` && isFinite(e)
}

function q(e, t, n, { ...r
}) {
    let i = I(e).start_timestamp;
    return i && i > t && typeof e.updateStartTime == `function` && e.updateStartTime(t), dr(e, () => {
        let e = ur({
            startTime: t,
            ...r
        });
        return e && e.end(n), e
    })
}

function ec(e) {
    let t = C();
    if (!t) return;
    let {
        name: n,
        transaction: r,
        attributes: i,
        startTime: a
    } = e, {
        release: o,
        environment: s,
        sendDefaultPii: c
    } = t.getOptions(), l = t.getIntegrationByName(`Replay`) ? .getReplayId(), u = x(), d = u.getUser(), f = d === void 0 ? void 0 : d.email || d.id || d.ip_address, p;
    try {
        p = u.getScopeData().contexts.profile.profile_id
    } catch {}
    return ur({
        name: n,
        attributes: {
            release: o,
            environment: s,
            user: f || void 0,
            profile_id: p || void 0,
            replay_id: l || void 0,
            transaction: r,
            "user_agent.original": K.navigator ? .userAgent,
            "client.address": c ? `{{auto}}` : void 0,
            ...i
        },
        startTime: a,
        experimental: {
            standalone: !0
        }
    })
}

function tc() {
    return K.addEventListener && K.performance
}

function J(e) {
    return e / 1e3
}

function nc(e) {
    let t = `unknown`,
        n = `unknown`,
        r = ``;
    for (let i of e) {
        if (i === `/`) {
            [t, n] = e.split(`/`);
            break
        }
        if (!isNaN(Number(i))) {
            t = r === `h` ? `http` : r, n = e.split(r)[1];
            break
        }
        r += i
    }
    return r === e && (t = r), {
        name: t,
        version: n
    }
}

function rc(e) {
    try {
        return PerformanceObserver.supportedEntryTypes.includes(e)
    } catch {
        return !1
    }
}

function ic(e, t) {
    let n, r = !1;

    function i(e) {
        !r && n && t(e, n), r = !0
    }
    xs(() => {
        i(`pagehide`)
    });
    let a = e.on(`beforeStartNavigationSpan`, (e, t) => {
            t ? .isRedirect || (i(`navigation`), ac(a, o))
        }),
        o = e.on(`afterStartPageLoadSpan`, e => {
            n = e.spanContext().spanId, ac(o)
        })
}

function ac(...e) {
    e.forEach(e => e && setTimeout(e, 0))
}

function oc(e) {
    let t = 0,
        n;
    if (!rc(`layout-shift`)) return;
    let r = Rs(({
        metric: e
    }) => {
        let r = e.entries[e.entries.length - 1];
        r && (t = e.value, n = r)
    }, !0);
    ic(e, (e, i) => {
        sc(t, n, i, e), r()
    })
}

function sc(e, t, n, r) {
    Vo && w.log(`Sending CLS span (${e})`);
    let i = J((g() || 0) + (t ? .startTime || 0)),
        a = x().getScopeData().transactionName,
        o = t ? b(t.sources[0] ? .node) : `Layout shift`,
        s = {
            [P]: `auto.http.browser.cls`,
            [N]: `ui.webvital.cls`,
            [Et]: t ? .duration || 0,
            "sentry.pageload.span_id": n,
            "sentry.report_event": r
        };
    t ? .sources && t.sources.forEach((e, t) => {
        s[`cls.source.${t+1}`] = b(e.node)
    });
    let c = ec({
        name: o,
        transaction: a,
        attributes: s,
        startTime: i
    });
    c && (c.addEvent(`cls`, {
        [St]: ``,
        [Ct]: e
    }), c.end(i))
}

function cc(e) {
    let t = 0,
        n;
    if (!rc(`largest-contentful-paint`)) return;
    let r = zs(({
        metric: e
    }) => {
        let r = e.entries[e.entries.length - 1];
        r && (t = e.value, n = r)
    }, !0);
    ic(e, (e, i) => {
        lc(t, n, i, e), r()
    })
}

function lc(e, t, n, r) {
    Vo && w.log(`Sending LCP span (${e})`);
    let i = J((g() || 0) + (t ? .startTime || 0)),
        a = x().getScopeData().transactionName,
        o = t ? b(t.element) : `Largest contentful paint`,
        s = {
            [P]: `auto.http.browser.lcp`,
            [N]: `ui.webvital.lcp`,
            [Et]: 0,
            "sentry.pageload.span_id": n,
            "sentry.report_event": r
        };
    t && (t.element && (s[`lcp.element`] = b(t.element)), t.id && (s[`lcp.id`] = t.id), t.url && (s[`lcp.url`] = t.url.trim().slice(0, 200)), t.loadTime != null && (s[`lcp.loadTime`] = t.loadTime), t.renderTime != null && (s[`lcp.renderTime`] = t.renderTime), t.size != null && (s[`lcp.size`] = t.size));
    let c = ec({
        name: o,
        transaction: a,
        attributes: s,
        startTime: i
    });
    c && (c.addEvent(`lcp`, {
        [St]: `millisecond`,
        [Ct]: e
    }), c.end(i))
}
var uc = 2147483647,
    dc = 0,
    Y = {},
    X, fc;

function pc({
    recordClsStandaloneSpans: e,
    recordLcpStandaloneSpans: t,
    client: n
}) {
    let r = tc();
    if (r && g()) {
        r.mark && K.performance.mark(`sentry-tracing-init`);
        let i = t ? cc(n) : vc(),
            a = yc(),
            o = e ? oc(n) : _c();
        return () => {
            i ? .(), a(), o ? .()
        }
    }
    return () => void 0
}

function mc() {
    Hs(`longtask`, ({
        entries: e
    }) => {
        let t = z();
        if (!t) return;
        let {
            op: n,
            start_timestamp: r
        } = I(t);
        for (let i of e) {
            let e = J(g() + i.startTime),
                a = J(i.duration);
            n === `navigation` && r && e < r || q(t, e, e + a, {
                name: `Main UI thread blocked`,
                op: `ui.long-task`,
                attributes: {
                    [P]: `auto.ui.browser.metrics`
                }
            })
        }
    })
}

function hc() {
    new PerformanceObserver(e => {
        let t = z();
        if (t)
            for (let n of e.getEntries()) {
                if (!n.scripts[0]) continue;
                let e = J(g() + n.startTime),
                    {
                        start_timestamp: r,
                        op: i
                    } = I(t);
                if (i === `navigation` && r && e < r) continue;
                let a = J(n.duration),
                    o = {
                        [P]: `auto.ui.browser.metrics`
                    },
                    {
                        invoker: s,
                        invokerType: c,
                        sourceURL: l,
                        sourceFunctionName: u,
                        sourceCharPosition: d
                    } = n.scripts[0];
                o[`browser.script.invoker`] = s, o[`browser.script.invoker_type`] = c, l && (o[`code.filepath`] = l), u && (o[`code.function`] = u), d !== -1 && (o[`browser.script.source_char_position`] = d), q(t, e, e + a, {
                    name: `Main UI thread blocked`,
                    op: `ui.long-animation-frame`,
                    attributes: o
                })
            }
    }).observe({
        type: `long-animation-frame`,
        buffered: !0
    })
}

function gc() {
    Hs(`event`, ({
        entries: e
    }) => {
        let t = z();
        if (t) {
            for (let n of e)
                if (n.name === `click`) {
                    let e = J(g() + n.startTime),
                        r = J(n.duration),
                        i = {
                            name: b(n.target),
                            op: `ui.interaction.${n.name}`,
                            startTime: e,
                            attributes: {
                                [P]: `auto.ui.browser.metrics`
                            }
                        },
                        a = me(n.target);
                    a && (i.attributes[`ui.component_name`] = a), q(t, e, e + r, i)
                }
        }
    })
}

function _c() {
    return Rs(({
        metric: e
    }) => {
        let t = e.entries[e.entries.length - 1];
        t && (Y.cls = {
            value: e.value,
            unit: ``
        }, fc = t)
    }, !0)
}

function vc() {
    return zs(({
        metric: e
    }) => {
        let t = e.entries[e.entries.length - 1];
        t && (Y.lcp = {
            value: e.value,
            unit: `millisecond`
        }, X = t)
    }, !0)
}

function yc() {
    return Bs(({
        metric: e
    }) => {
        e.entries[e.entries.length - 1] && (Y.ttfb = {
            value: e.value,
            unit: `millisecond`
        })
    })
}

function bc(e, t) {
    let n = tc(),
        r = g();
    if (!n ? .getEntries || !r) return;
    let i = J(r),
        a = n.getEntries(),
        {
            op: o,
            start_timestamp: s
        } = I(e);
    a.slice(dc).forEach(n => {
        let r = J(n.startTime),
            a = J(Math.max(0, n.duration));
        if (!(o === `navigation` && s && i + r < s)) switch (n.entryType) {
            case `navigation`:
                Cc(e, n, i);
                break;
            case `mark`:
            case `paint`:
            case `measure`:
                {
                    xc(e, n, r, a, i, t.ignorePerformanceApiSpans);
                    let o = is(),
                        s = n.startTime < o.firstHiddenTime;n.name === `first-paint` && s && (Y.fp = {
                        value: n.startTime,
                        unit: `millisecond`
                    }),
                    n.name === `first-contentful-paint` && s && (Y.fcp = {
                        value: n.startTime,
                        unit: `millisecond`
                    });
                    break
                }
            case `resource`:
                Dc(e, n, n.name, r, a, i, t.ignoreResourceSpans);
                break
        }
    }), dc = Math.max(a.length - 1, 0), Oc(e), o === `pageload` && (jc(Y), t.recordClsOnPageloadSpan || delete Y.cls, t.recordLcpOnPageloadSpan || delete Y.lcp, Object.entries(Y).forEach(([e, t]) => {
        Zn(e, t.value, t.unit)
    }), e.setAttribute(`performance.timeOrigin`, i), e.setAttribute(`performance.activationStart`, Ko()), kc(e, t)), X = void 0, fc = void 0, Y = {}
}

function xc(e, t, n, r, i, a) {
    if ([`mark`, `measure`].includes(t.entryType) && T(t.name, a)) return;
    let o = Go(!1),
        s = J(o ? o.requestStart : 0),
        c = i + Math.max(n, s),
        l = i + n,
        u = l + r,
        d = {
            [P]: `auto.resource.browser.metrics`
        };
    c !== l && (d[`sentry.browser.measure_happened_before_request`] = !0, d[`sentry.browser.measure_start_time`] = c), Sc(d, t), c <= u && q(e, c, u, {
        name: t.name,
        op: t.entryType,
        attributes: d
    })
}

function Sc(e, t) {
    try {
        let n = t.detail;
        if (!n) return;
        if (typeof n == `object`) {
            for (let [t, r] of Object.entries(n))
                if (r && Ne(r)) e[`sentry.browser.measure.detail.${t}`] = r;
                else if (r !== void 0) try {
                e[`sentry.browser.measure.detail.${t}`] = JSON.stringify(r)
            } catch {}
            return
        }
        if (Ne(n)) {
            e[`sentry.browser.measure.detail`] = n;
            return
        }
        try {
            e[`sentry.browser.measure.detail`] = JSON.stringify(n)
        } catch {}
    } catch {}
}

function Cc(e, t, n) {
    [`unloadEvent`, `redirect`, `domContentLoadedEvent`, `loadEvent`, `connect`].forEach(r => {
        wc(e, t, r, n)
    }), wc(e, t, `secureConnection`, n, `TLS/SSL`), wc(e, t, `fetch`, n, `cache`), wc(e, t, `domainLookup`, n, `DNS`), Ec(e, t, n)
}

function wc(e, t, n, r, i = n) {
    let a = t[Tc(n)],
        o = t[`${n}Start`];
    !o || !a || q(e, r + J(o), r + J(a), {
        op: `browser.${i}`,
        name: t.name,
        attributes: {
            [P]: `auto.ui.browser.metrics`,
            ...n === `redirect` && t.redirectCount != null ? {
                "http.redirect_count": t.redirectCount
            } : {}
        }
    })
}

function Tc(e) {
    return e === `secureConnection` ? `connectEnd` : e === `fetch` ? `domainLookupStart` : `${e}End`
}

function Ec(e, t, n) {
    let r = n + J(t.requestStart),
        i = n + J(t.responseEnd),
        a = n + J(t.responseStart);
    t.responseEnd && (q(e, r, i, {
        op: `browser.request`,
        name: t.name,
        attributes: {
            [P]: `auto.ui.browser.metrics`
        }
    }), q(e, a, i, {
        op: `browser.response`,
        name: t.name,
        attributes: {
            [P]: `auto.ui.browser.metrics`
        }
    }))
}

function Dc(e, t, n, r, i, a, o) {
    if (t.initiatorType === `xmlhttprequest` || t.initiatorType === `fetch`) return;
    let s = t.initiatorType ? `resource.${t.initiatorType}` : `resource.other`;
    if (o ? .includes(s)) return;
    let c = Wa(n),
        l = {
            [P]: `auto.resource.browser.metrics`
        };
    Ac(l, t, `transferSize`, `http.response_transfer_size`), Ac(l, t, `encodedBodySize`, `http.response_content_length`), Ac(l, t, `decodedBodySize`, `http.decoded_response_content_length`);
    let u = t.deliveryType;
    u != null && (l[`http.response_delivery_type`] = u);
    let d = t.renderBlockingStatus;
    if (d && (l[`resource.render_blocking_status`] = d), c.protocol && (l[`url.scheme`] = c.protocol.split(`:`).pop()), c.host && (l[`server.address`] = c.host), l[`url.same_origin`] = n.includes(K.location.origin), t.nextHopProtocol != null) {
        let {
            name: e,
            version: n
        } = nc(t.nextHopProtocol);
        l[`network.protocol.name`] = e, l[`network.protocol.version`] = n
    }
    let f = a + r;
    q(e, f, f + i, {
        name: n.replace(K.location.origin, ``),
        op: s,
        attributes: l
    })
}

function Oc(e) {
    let t = K.navigator;
    if (!t) return;
    let n = t.connection;
    n && (n.effectiveType && e.setAttribute(`effectiveConnectionType`, n.effectiveType), n.type && e.setAttribute(`connectionType`, n.type), $s(n.rtt) && (Y[`connection.rtt`] = {
        value: n.rtt,
        unit: `millisecond`
    })), $s(t.deviceMemory) && e.setAttribute(`deviceMemory`, `${t.deviceMemory} GB`), $s(t.hardwareConcurrency) && e.setAttribute(`hardwareConcurrency`, String(t.hardwareConcurrency))
}

function kc(e, t) {
    X && t.recordLcpOnPageloadSpan && (X.element && e.setAttribute(`lcp.element`, b(X.element)), X.id && e.setAttribute(`lcp.id`, X.id), X.url && e.setAttribute(`lcp.url`, X.url.trim().slice(0, 200)), X.loadTime != null && e.setAttribute(`lcp.loadTime`, X.loadTime), X.renderTime != null && e.setAttribute(`lcp.renderTime`, X.renderTime), e.setAttribute(`lcp.size`, X.size)), fc ? .sources && t.recordClsOnPageloadSpan && fc.sources.forEach((t, n) => e.setAttribute(`cls.source.${n+1}`, b(t.node)))
}

function Ac(e, t, n, r) {
    let i = t[n];
    i != null && i < uc && (e[r] = i)
}

function jc(e) {
    let t = Go(!1);
    if (!t) return;
    let {
        responseStart: n,
        requestStart: r
    } = t;
    r <= n && (e[`ttfb.requestTime`] = {
        value: n - r,
        unit: `millisecond`
    })
}

function Mc() {
    return tc() && g() ? Hs(`element`, Nc) : () => void 0
}
var Nc = ({
        entries: e
    }) => {
        let t = z(),
            n = t ? R(t) : void 0,
            r = n ? I(n).description : x().getScopeData().transactionName;
        e.forEach(e => {
            let t = e;
            if (!t.identifier) return;
            let n = t.name,
                i = t.renderTime,
                a = t.loadTime,
                [o, s] = a ? [J(a), `load-time`] : i ? [J(i), `render-time`] : [_(), `entry-emission`],
                c = n === `image-paint` ? J(Math.max(0, (i ? ? 0) - (a ? ? 0))) : 0,
                l = {
                    [P]: `auto.ui.browser.elementtiming`,
                    [N]: `ui.elementtiming`,
                    [M]: `component`,
                    "sentry.span_start_time_source": s,
                    "sentry.transaction_name": r,
                    "element.id": t.id,
                    "element.type": t.element ? .tagName ? .toLowerCase() || `unknown`,
                    "element.size": t.naturalWidth && t.naturalHeight ? `${t.naturalWidth}x${t.naturalHeight}` : void 0,
                    "element.render_time": i,
                    "element.load_time": a,
                    "element.url": t.url || void 0,
                    "element.identifier": t.identifier,
                    "element.paint_type": n
                };
            lr({
                name: `element[${t.identifier}]`,
                attributes: l,
                startTime: o,
                onlyIfParent: !0
            }, e => {
                e.end(o + c)
            })
        })
    },
    Pc = 1e3,
    Fc, Ic, Lc;

function Rc(e) {
    k(`dom`, e), A(`dom`, zc)
}

function zc() {
    if (!K.document) return;
    let e = j.bind(null, `dom`),
        t = Hc(e, !0);
    K.document.addEventListener(`click`, t, !1), K.document.addEventListener(`keypress`, t, !1), [`EventTarget`, `Node`].forEach(t => {
        let n = K[t] ? .prototype;
        n ? .hasOwnProperty ? .(`addEventListener`) && (y(n, `addEventListener`, function(t) {
            return function(n, r, i) {
                if (n === `click` || n == `keypress`) try {
                    let r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                        a = r[n] = r[n] || {
                            refCount: 0
                        };
                    if (!a.handler) {
                        let r = Hc(e);
                        a.handler = r, t.call(this, n, r, i)
                    }
                    a.refCount++
                } catch {}
                return t.call(this, n, r, i)
            }
        }), y(n, `removeEventListener`, function(e) {
            return function(t, n, r) {
                if (t === `click` || t == `keypress`) try {
                    let n = this.__sentry_instrumentation_handlers__ || {},
                        i = n[t];
                    i && (i.refCount--, i.refCount <= 0 && (e.call(this, t, i.handler, r), i.handler = void 0, delete n[t]), Object.keys(n).length === 0 && delete this.__sentry_instrumentation_handlers__)
                } catch {}
                return e.call(this, t, n, r)
            }
        }))
    })
}

function Bc(e) {
    if (e.type !== Ic) return !1;
    try {
        if (!e.target || e.target._sentryId !== Lc) return !1
    } catch {}
    return !0
}

function Vc(e, t) {
    return e === `keypress` ? t ? .tagName ? !(t.tagName === `INPUT` || t.tagName === `TEXTAREA` || t.isContentEditable) : !0 : !1
}

function Hc(e, t = !1) {
    return n => {
        if (!n || n._sentryCaptured) return;
        let r = Uc(n);
        if (Vc(n.type, r)) return;
        a(n, `_sentryCaptured`, !0), r && !r._sentryId && a(r, `_sentryId`, Je());
        let i = n.type === `keypress` ? `input` : n.type;
        Bc(n) || (e({
            event: n,
            name: i,
            global: t
        }), Ic = n.type, Lc = r ? r._sentryId : void 0), clearTimeout(Fc), Fc = K.setTimeout(() => {
            Lc = void 0, Ic = void 0
        }, Pc)
    }
}

function Uc(e) {
    try {
        return e.target
    } catch {
        return null
    }
}
var Wc;

function Gc(e) {
    let t = `history`;
    k(t, e), A(t, Kc)
}

function Kc() {
    if (K.addEventListener(`popstate`, () => {
            let e = K.location.href,
                t = Wc;
            Wc = e, t !== e && j(`history`, {
                from: t,
                to: e
            })
        }), !to()) return;

    function e(e) {
        return function(...t) {
            let n = t.length > 2 ? t[2] : void 0;
            if (n) {
                let r = Wc,
                    i = qc(String(n));
                if (Wc = i, r === i) return e.apply(this, t);
                j(`history`, {
                    from: r,
                    to: i
                })
            }
            return e.apply(this, t)
        }
    }
    y(K.history, `pushState`, e), y(K.history, `replaceState`, e)
}

function qc(e) {
    try {
        return new URL(e, K.location.origin).toString()
    } catch {
        return e
    }
}
var Jc = {};

function Yc(e) {
    let t = Jc[e];
    if (t) return t;
    let n = K[e];
    if (ro(n)) return Jc[e] = n.bind(K);
    let r = K.document;
    if (r && typeof r.createElement == `function`) try {
        let t = r.createElement(`iframe`);
        t.hidden = !0, r.head.appendChild(t);
        let i = t.contentWindow;
        i ? .[e] && (n = i[e]), r.head.removeChild(t)
    } catch (t) {
        Vo && w.warn(`Could not create sandbox iframe for ${e} check, bailing to window.${e}: `, t)
    }
    return n && (Jc[e] = n.bind(K))
}

function Xc(e) {
    Jc[e] = void 0
}
var Zc = `__sentry_xhr_v3__`;

function Qc(e) {
    k(`xhr`, e), A(`xhr`, $c)
}

function $c() {
    if (!K.XMLHttpRequest) return;
    let e = XMLHttpRequest.prototype;
    e.open = new Proxy(e.open, {
        apply(e, t, n) {
            let r = Error(),
                i = _() * 1e3,
                a = xe(n[0]) ? n[0].toUpperCase() : void 0,
                o = el(n[1]);
            if (!a || !o) return e.apply(t, n);
            t[Zc] = {
                method: a,
                url: o,
                request_headers: {}
            }, a === `POST` && o.match(/sentry_key/) && (t.__sentry_own_request__ = !0);
            let s = () => {
                let e = t[Zc];
                if (e && t.readyState === 4) {
                    try {
                        e.status_code = t.status
                    } catch {}
                    j(`xhr`, {
                        endTimestamp: _() * 1e3,
                        startTimestamp: i,
                        xhr: t,
                        virtualError: r
                    })
                }
            };
            return `onreadystatechange` in t && typeof t.onreadystatechange == `function` ? t.onreadystatechange = new Proxy(t.onreadystatechange, {
                apply(e, t, n) {
                    return s(), e.apply(t, n)
                }
            }) : t.addEventListener(`readystatechange`, s), t.setRequestHeader = new Proxy(t.setRequestHeader, {
                apply(e, t, n) {
                    let [r, i] = n, a = t[Zc];
                    return a && xe(r) && xe(i) && (a.request_headers[r.toLowerCase()] = i), e.apply(t, n)
                }
            }), e.apply(t, n)
        }
    }), e.send = new Proxy(e.send, {
        apply(e, t, n) {
            let r = t[Zc];
            return r ? (n[0] !== void 0 && (r.body = n[0]), j(`xhr`, {
                startTimestamp: _() * 1e3,
                xhr: t
            }), e.apply(t, n)) : e.apply(t, n)
        }
    })
}

function el(e) {
    if (xe(e)) return e;
    try {
        return e.toString()
    } catch {}
}
var tl = [],
    nl = new Map,
    rl = 60;

function il() {
    if (tc() && g()) {
        let e = ol();
        return () => {
            e()
        }
    }
    return () => void 0
}
var al = {
    click: `click`,
    pointerdown: `click`,
    pointerup: `click`,
    mousedown: `click`,
    mouseup: `click`,
    touchstart: `click`,
    touchend: `click`,
    mouseover: `hover`,
    mouseout: `hover`,
    mouseenter: `hover`,
    mouseleave: `hover`,
    pointerover: `hover`,
    pointerout: `hover`,
    pointerenter: `hover`,
    pointerleave: `hover`,
    dragstart: `drag`,
    dragend: `drag`,
    drag: `drag`,
    dragenter: `drag`,
    dragleave: `drag`,
    dragover: `drag`,
    drop: `drag`,
    keydown: `press`,
    keyup: `press`,
    keypress: `press`,
    input: `press`
};

function ol() {
    return Vs(sl)
}
var sl = ({
    metric: e
}) => {
    if (e.value == null) return;
    let t = J(e.value);
    if (t > rl) return;
    let n = e.entries.find(t => t.duration === e.value && al[t.name]);
    if (!n) return;
    let {
        interactionId: r
    } = n, i = al[n.name], a = J(g() + n.startTime), o = z(), s = o ? R(o) : void 0, c = (r == null ? void 0 : nl.get(r)) || s, l = c ? I(c).description : x().getScopeData().transactionName, u = ec({
        name: b(n.target),
        transaction: l,
        attributes: {
            [P]: `auto.http.browser.inp`,
            [N]: `ui.interaction.${i}`,
            [Et]: n.duration
        },
        startTime: a
    });
    u && (u.addEvent(`inp`, {
        [St]: `millisecond`,
        [Ct]: e.value
    }), u.end(a + t))
};

function cl() {
    let e = ({
        entries: e
    }) => {
        let t = z(),
            n = t && R(t);
        e.forEach(e => {
            if (!Qs(e) || !n) return;
            let t = e.interactionId;
            if (t != null && !nl.has(t)) {
                if (tl.length > 10) {
                    let e = tl.shift();
                    nl.delete(e)
                }
                tl.push(t), nl.set(t, n)
            }
        })
    };
    Hs(`event`, e), Hs(`first-input`, e)
}

function ll(e, t = Yc(`fetch`)) {
    let n = 0,
        r = 0;

    function i(i) {
        let a = i.body.length;
        n += a, r++;
        let o = {
            body: i.body,
            method: `POST`,
            referrerPolicy: `strict-origin`,
            headers: e.headers,
            keepalive: n <= 6e4 && r < 15,
            ...e.fetchOptions
        };
        if (!t) return Xc(`fetch`), Ar(`No fetch implementation available`);
        try {
            return t(e.url, o).then(e => (n -= a, r--, {
                statusCode: e.status,
                headers: {
                    "x-sentry-rate-limits": e.headers.get(`X-Sentry-Rate-Limits`),
                    "retry-after": e.headers.get(`Retry-After`)
                }
            }))
        } catch (e) {
            return Xc(`fetch`), n -= a, r--, Ar(e)
        }
    }
    return ea(e, i)
}
var ul = 30,
    dl = 50;

function fl(e, t, n, r) {
    let i = {
        filename: e,
        function: t === `<anonymous>` ? `?` : t,
        in_app: !0
    };
    return n !== void 0 && (i.lineno = n), r !== void 0 && (i.colno = r), i
}
var pl = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
    ml = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
    hl = /\((\S*)(?::(\d+))(?::(\d+))\)/,
    gl = [ul, e => {
        let t = pl.exec(e);
        if (t) {
            let [, e, n, r] = t;
            return fl(e, `?`, +n, +r)
        }
        let n = ml.exec(e);
        if (n) {
            if (n[2] && n[2].indexOf(`eval`) === 0) {
                let e = hl.exec(n[2]);
                e && (n[2] = e[1], n[3] = e[2], n[4] = e[3])
            }
            let [e, t] = bl(n[1] || `?`, n[2]);
            return fl(t, e, n[3] ? +n[3] : void 0, n[4] ? +n[4] : void 0)
        }
    }],
    _l = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
    vl = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
    yl = at(gl, [dl, e => {
        let t = _l.exec(e);
        if (t) {
            if (t[3] && t[3].indexOf(` > eval`) > -1) {
                let e = vl.exec(t[3]);
                e && (t[1] = t[1] || `eval`, t[3] = e[1], t[4] = e[2], t[5] = ``)
            }
            let e = t[3],
                n = t[1] || `?`;
            return [n, e] = bl(n, e), fl(e, n, t[4] ? +t[4] : void 0, t[5] ? +t[5] : void 0)
        }
    }]),
    bl = (e, t) => {
        let n = e.indexOf(`safari-extension`) !== -1,
            r = e.indexOf(`safari-web-extension`) !== -1;
        return n || r ? [e.indexOf(`@`) === -1 ? `?` : e.split(`@`)[0], n ? `safari-extension:${t}` : `safari-web-extension:${t}`] : [e, t]
    },
    Z = typeof __SENTRY_DEBUG__ > `u` || __SENTRY_DEBUG__,
    xl = 1024,
    Sl = `Breadcrumbs`,
    Cl = W(((e = {}) => {
        let t = {
            console: !0,
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0,
            ...e
        };
        return {
            name: Sl,
            setup(e) {
                t.console && ka(El(e)), t.dom && Rc(Tl(e, t.dom)), t.xhr && Qc(Dl(e)), t.fetch && ao(Ol(e)), t.history && Gc(kl(e)), t.sentry && e.on(`beforeSendEvent`, wl(e))
            }
        }
    }));

function wl(e) {
    return function(t) {
        C() === e && sa({
            category: `sentry.${t.type===`transaction`?`transaction`:`event`}`,
            event_id: t.event_id,
            level: t.level,
            message: v(t)
        }, {
            event: t
        })
    }
}

function Tl(e, t) {
    return function(n) {
        if (C() !== e) return;
        let r, i, a = typeof t == `object` ? t.serializeAttribute : void 0,
            o = typeof t == `object` && typeof t.maxStringLength == `number` ? t.maxStringLength : void 0;
        o && o > xl && (Z && w.warn(`\`dom.maxStringLength\` cannot exceed ${xl}, but a value of ${o} was configured. Sentry will use ${xl} instead.`), o = xl), typeof a == `string` && (a = [a]);
        try {
            let e = n.event,
                t = Al(e) ? e.target : e;
            r = b(t, {
                keyAttrs: a,
                maxStringLength: o
            }), i = me(t)
        } catch {
            r = `<unknown>`
        }
        if (r.length === 0) return;
        let s = {
            category: `ui.${n.name}`,
            message: r
        };
        i && (s.data = {
            "ui.component_name": i
        }), sa(s, {
            event: n.event,
            name: n.name,
            global: n.global
        })
    }
}

function El(e) {
    return function(t) {
        if (C() !== e) return;
        let n = {
            category: `console`,
            data: {
                arguments: t.args,
                logger: `console`
            },
            level: ja(t.level),
            message: h(t.args, ` `)
        };
        if (t.level === `assert`)
            if (t.args[0] === !1) n.message = `Assertion failed: ${h(t.args.slice(1),` `)||`console.assert`}`, n.data.arguments = t.args.slice(1);
            else return;
        sa(n, {
            input: t.args,
            level: t.level
        })
    }
}

function Dl(e) {
    return function(t) {
        if (C() !== e) return;
        let {
            startTimestamp: n,
            endTimestamp: r
        } = t, i = t.xhr[Zc];
        if (!n || !r || !i) return;
        let {
            method: a,
            url: o,
            status_code: s,
            body: c
        } = i, l = {
            method: a,
            url: o,
            status_code: s
        }, u = {
            xhr: t.xhr,
            input: c,
            startTimestamp: n,
            endTimestamp: r
        }, d = {
            category: `xhr`,
            data: l,
            type: `http`,
            level: $a(s)
        };
        e.emit(`beforeOutgoingRequestBreadcrumb`, d, u), sa(d, u)
    }
}

function Ol(e) {
    return function(t) {
        if (C() !== e) return;
        let {
            startTimestamp: n,
            endTimestamp: r
        } = t;
        if (r && !(t.fetchData.url.match(/sentry_key/) && t.fetchData.method === `POST`))
            if (t.fetchData.method, t.fetchData.url, t.error) {
                let i = t.fetchData,
                    a = {
                        data: t.error,
                        input: t.args,
                        startTimestamp: n,
                        endTimestamp: r
                    },
                    o = {
                        category: `fetch`,
                        data: i,
                        level: `error`,
                        type: `http`
                    };
                e.emit(`beforeOutgoingRequestBreadcrumb`, o, a), sa(o, a)
            } else {
                let i = t.response,
                    a = { ...t.fetchData,
                        status_code: i ? .status
                    };
                t.fetchData.request_body_size, t.fetchData.response_body_size, i ? .status;
                let o = {
                        input: t.args,
                        response: i,
                        startTimestamp: n,
                        endTimestamp: r
                    },
                    s = {
                        category: `fetch`,
                        data: a,
                        type: `http`,
                        level: $a(a.status_code)
                    };
                e.emit(`beforeOutgoingRequestBreadcrumb`, s, o), sa(s, o)
            }
    }
}

function kl(e) {
    return function(t) {
        if (C() !== e) return;
        let n = t.from,
            r = t.to,
            i = Wa(G.location.href),
            a = n ? Wa(n) : void 0,
            o = Wa(r);
        a ? .path || (a = i), i.protocol === o.protocol && i.host === o.host && (r = o.relative), i.protocol === a.protocol && i.host === a.host && (n = a.relative), sa({
            category: `navigation`,
            data: {
                from: n,
                to: r
            }
        })
    }
}

function Al(e) {
    return !!e && !!e.target
}
var jl = `EventTarget.Window.Node.ApplicationCache.AudioTrackList.BroadcastChannel.ChannelMergerNode.CryptoOperation.EventSource.FileReader.HTMLUnknownElement.IDBDatabase.IDBRequest.IDBTransaction.KeyOperation.MediaController.MessagePort.ModalWindow.Notification.SVGElementInstance.Screen.SharedWorker.TextTrack.TextTrackCue.TextTrackList.WebSocket.WebSocketWorker.Worker.XMLHttpRequest.XMLHttpRequestEventTarget.XMLHttpRequestUpload`.split(`.`),
    Ml = `BrowserApiErrors`,
    Nl = W(((e = {}) => {
        let t = {
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0,
            unregisterOriginalCallbacks: !1,
            ...e
        };
        return {
            name: Ml,
            setupOnce() {
                t.setTimeout && y(G, `setTimeout`, Pl), t.setInterval && y(G, `setInterval`, Pl), t.requestAnimationFrame && y(G, `requestAnimationFrame`, Fl), t.XMLHttpRequest && `XMLHttpRequest` in G && y(XMLHttpRequest.prototype, `send`, Il);
                let e = t.eventTarget;
                e && (Array.isArray(e) ? e : jl).forEach(e => Ll(e, t))
            }
        }
    }));

function Pl(e) {
    return function(...t) {
        let n = t[0];
        return t[0] = yo(n, {
            mechanism: {
                data: {
                    function: O(e)
                },
                handled: !1,
                type: `instrument`
            }
        }), e.apply(this, t)
    }
}

function Fl(e) {
    return function(t) {
        return e.apply(this, [yo(t, {
            mechanism: {
                data: {
                    function: `requestAnimationFrame`,
                    handler: O(e)
                },
                handled: !1,
                type: `instrument`
            }
        })])
    }
}

function Il(e) {
    return function(...t) {
        let n = this;
        return [`onload`, `onerror`, `onprogress`, `onreadystatechange`].forEach(e => {
            e in n && typeof n[e] == `function` && y(n, e, function(t) {
                let n = {
                        mechanism: {
                            data: {
                                function: e,
                                handler: O(t)
                            },
                            handled: !1,
                            type: `instrument`
                        }
                    },
                    r = de(t);
                return r && (n.mechanism.data.handler = O(r)), yo(t, n)
            })
        }), e.apply(this, t)
    }
}

function Ll(e, t) {
    let n = G[e] ? .prototype;
    n ? .hasOwnProperty ? .(`addEventListener`) && (y(n, `addEventListener`, function(n) {
        return function(r, i, a) {
            try {
                Rl(i) && (i.handleEvent = yo(i.handleEvent, {
                    mechanism: {
                        data: {
                            function: `handleEvent`,
                            handler: O(i),
                            target: e
                        },
                        handled: !1,
                        type: `instrument`
                    }
                }))
            } catch {}
            return t.unregisterOriginalCallbacks && zl(this, r, i), n.apply(this, [r, yo(i, {
                mechanism: {
                    data: {
                        function: `addEventListener`,
                        handler: O(i),
                        target: e
                    },
                    handled: !1,
                    type: `instrument`
                }
            }), a])
        }
    }), y(n, `removeEventListener`, function(e) {
        return function(t, n, r) {
            try {
                let i = n.__sentry_wrapped__;
                i && e.call(this, t, i, r)
            } catch {}
            return e.call(this, t, n, r)
        }
    }))
}

function Rl(e) {
    return typeof e.handleEvent == `function`
}

function zl(e, t, n) {
    e && typeof e == `object` && `removeEventListener` in e && typeof e.removeEventListener == `function` && e.removeEventListener(t, n)
}
var Bl = W(() => ({
        name: `BrowserSession`,
        setupOnce() {
            if (G.document === void 0) {
                Z && w.warn("Using the `browserSessionIntegration` in non-browser environments is not supported.");
                return
            }
            ci({
                ignoreDuration: !0
            }), di(), Gc(({
                from: e,
                to: t
            }) => {
                e !== void 0 && e !== t && (ci({
                    ignoreDuration: !0
                }), di())
            })
        }
    })),
    Vl = `GlobalHandlers`,
    Hl = W(((e = {}) => {
        let t = {
            onerror: !0,
            onunhandledrejection: !0,
            ...e
        };
        return {
            name: Vl,
            setupOnce() {
                Error.stackTraceLimit = 50
            },
            setup(e) {
                t.onerror && (Ul(e), Jl(`onerror`)), t.onunhandledrejection && (Wl(e), Jl(`onunhandledrejection`))
            }
        }
    }));

function Ul(e) {
    mt(t => {
        let {
            stackParser: n,
            attachStacktrace: r
        } = Yl();
        if (C() !== e || _o()) return;
        let {
            msg: i,
            url: a,
            line: o,
            column: s,
            error: c
        } = t, l = ql(No(n, c || i, void 0, r, !1), a, o, s);
        l.level = `error`, ri(l, {
            originalException: c,
            mechanism: {
                handled: !1,
                type: `onerror`
            }
        })
    })
}

function Wl(e) {
    _t(t => {
        let {
            stackParser: n,
            attachStacktrace: r
        } = Yl();
        if (C() !== e || _o()) return;
        let i = Gl(t),
            a = Ne(i) ? Kl(i) : No(n, i, void 0, r, !0);
        a.level = `error`, ri(a, {
            originalException: i,
            mechanism: {
                handled: !1,
                type: `onunhandledrejection`
            }
        })
    })
}

function Gl(e) {
    if (Ne(e)) return e;
    try {
        if (`reason` in e) return e.reason;
        if (`detail` in e && `reason` in e.detail) return e.detail.reason
    } catch {}
    return e
}

function Kl(e) {
    return {
        exception: {
            values: [{
                type: `UnhandledRejection`,
                value: `Non-Error promise rejection captured with value: ${String(e)}`
            }]
        }
    }
}

function ql(e, t, n, r) {
    let i = e.exception = e.exception || {},
        a = i.values = i.values || [],
        o = a[0] = a[0] || {},
        s = o.stacktrace = o.stacktrace || {},
        c = s.frames = s.frames || [],
        l = r,
        u = n,
        d = xe(t) && t.length > 0 ? t : pe();
    return c.length === 0 && c.push({
        colno: l,
        filename: d,
        function: `?`,
        in_app: !0,
        lineno: u
    }), e
}

function Jl(e) {
    Z && w.log(`Global Handler attached: ${e}`)
}

function Yl() {
    return C() ? .getOptions() || {
        stackParser: () => [],
        attachStacktrace: !1
    }
}
var Xl = W(() => ({
        name: `HttpContext`,
        preprocessEvent(e) {
            if (!G.navigator && !G.location && !G.document) return;
            let t = bo(),
                n = { ...t.headers,
                    ...e.request ? .headers
                };
            e.request = { ...t,
                ...e.request,
                headers: n
            }
        }
    })),
    Zl = `cause`,
    Ql = 5,
    $l = `LinkedErrors`,
    eu = W(((e = {}) => {
        let t = e.limit || Ql,
            n = e.key || Zl;
        return {
            name: $l,
            preprocessEvent(e, r, i) {
                Ta(xo, i.getOptions().stackParser, n, t, e, r)
            }
        }
    }));

function tu() {
    return nu() ? (Z && Pe(() => {
        console.error(`[Sentry] You cannot use Sentry.init() in a browser extension, see: https://docs.sentry.io/platforms/javascript/best-practices/browser-extensions/`)
    }), !0) : !1
}

function nu() {
    if (G.window === void 0) return !1;
    let e = G;
    if (e.nw || !(e.chrome || e.browser) ? .runtime ? .id) return !1;
    let t = pe();
    return !(G === G.top && [`chrome-extension`, `moz-extension`, `ms-browser-extension`, `safari-web-extension`].some(e => t.startsWith(`${e}://`)))
}

function ru(e) {
    return [ha(), da(), Nl(), Cl(), Hl(), eu(), Na(), Xl(), Bl()]
}

function iu(e = {}) {
    let t = !e.skipBrowserExtensionCheck && tu();
    return Gi(zo, { ...e,
        enabled: t ? !1 : e.enabled,
        stackParser: ot(e.stackParser || yl),
        integrations: yi({
            integrations: e.integrations,
            defaultIntegrations: e.defaultIntegrations == null ? ru() : e.defaultIntegrations
        }),
        transport: e.transport || ll
    })
}

function Q(e = 0) {
    return ((g() || performance.timeOrigin) + e) / 1e3
}

function au(e) {
    let t = [];
    if (e.nextHopProtocol != null) {
        let {
            name: n,
            version: r
        } = nc(e.nextHopProtocol);
        t.push([`network.protocol.version`, r], [`network.protocol.name`, n])
    }
    return g() ? [...t, [`http.request.redirect_start`, Q(e.redirectStart)],
        [`http.request.fetch_start`, Q(e.fetchStart)],
        [`http.request.domain_lookup_start`, Q(e.domainLookupStart)],
        [`http.request.domain_lookup_end`, Q(e.domainLookupEnd)],
        [`http.request.connect_start`, Q(e.connectStart)],
        [`http.request.secure_connection_start`, Q(e.secureConnectionStart)],
        [`http.request.connection_end`, Q(e.connectEnd)],
        [`http.request.request_start`, Q(e.requestStart)],
        [`http.request.response_start`, Q(e.responseStart)],
        [`http.request.response_end`, Q(e.responseEnd)]
    ] : t
}
var ou = new WeakMap,
    su = new Map,
    cu = {
        traceFetch: !0,
        traceXHR: !0,
        enableHTTPTimings: !0,
        trackFetchStreamPerformance: !1
    };

function lu(e, t) {
    let {
        traceFetch: n,
        traceXHR: r,
        trackFetchStreamPerformance: i,
        shouldCreateSpanForRequest: a,
        enableHTTPTimings: o,
        tracePropagationTargets: s,
        onRequestSpanStart: c
    } = { ...cu,
        ...t
    }, l = typeof a == `function` ? a : e => !0, u = e => fu(e, s), d = {};
    n && (e.addEventProcessor(e => (e.type === `transaction` && e.spans && e.spans.forEach(e => {
        if (e.op === `http.client`) {
            let t = su.get(e.span_id);
            t && (e.timestamp = t / 1e3, su.delete(e.span_id))
        }
    }), e)), i && oo(e => {
        if (e.response) {
            let t = ou.get(e.response);
            t && e.endTimestamp && su.set(t, e.endTimestamp)
        }
    }), ao(e => {
        let t = Ka(e, l, u, d);
        if (e.response && e.fetchData.__span && ou.set(e.response, e.fetchData.__span), t) {
            let n = _u(e.fetchData.url),
                r = n ? Wa(n).host : void 0;
            t.setAttributes({
                "http.url": n,
                "server.address": r
            }), o && du(t), c ? .(t, {
                headers: e.headers
            })
        }
    })), r && Qc(e => {
        let t = pu(e, l, u, d);
        if (t) {
            o && du(t);
            let n;
            try {
                n = new Headers(e.xhr.__sentry_xhr_v3__ ? .request_headers)
            } catch {}
            c ? .(t, {
                headers: n
            })
        }
    })
}

function uu(e) {
    return e.entryType === `resource` && `initiatorType` in e && typeof e.nextHopProtocol == `string` && (e.initiatorType === `fetch` || e.initiatorType === `xmlhttprequest`)
}

function du(e) {
    let {
        url: t
    } = I(e).data;
    if (!t || typeof t != `string`) return;
    let n = Hs(`resource`, ({
        entries: r
    }) => {
        r.forEach(r => {
            uu(r) && r.name.endsWith(t) && (au(r).forEach(t => e.setAttribute(...t)), setTimeout(n))
        })
    })
}

function fu(e, t) {
    let n = pe();
    if (n) {
        let r, i;
        try {
            r = new URL(e, n), i = new URL(n).origin
        } catch {
            return !1
        }
        let a = r.origin === i;
        return t ? T(r.toString(), t) || a && T(r.pathname, t) : a
    } else {
        let n = !!e.match(/^\/(?!\/)/);
        return t ? T(e, t) : n
    }
}

function pu(e, t, n, r) {
    let i = e.xhr,
        a = i ? .[Zc];
    if (!i || i.__sentry_own_request__ || !a) return;
    let {
        url: o,
        method: s
    } = a, c = B() && t(o);
    if (e.endTimestamp && c) {
        let e = i.__sentry_xhr_span_id__;
        if (!e) return;
        let t = r[e];
        t && a.status_code !== void 0 && (kt(t, a.status_code), t.end(), delete r[e]);
        return
    }
    let l = _u(o),
        u = Wa(l || o),
        d = Ga(o),
        f = !!z(),
        p = c && f ? ur({
            name: `${s} ${d}`,
            attributes: {
                url: o,
                type: `xhr`,
                "http.method": s,
                "http.url": l,
                "server.address": u ? .host,
                [P]: `auto.http.browser`,
                [N]: `http.client`,
                ...u ? .search && {
                    "http.query": u ? .search
                },
                ...u ? .hash && {
                    "http.fragment": u ? .hash
                }
            }
        }) : new H;
    i.__sentry_xhr_span_id__ = p.spanContext().spanId, r[i.__sentry_xhr_span_id__] = p, n(o) && mu(i, B() && f ? p : void 0);
    let m = C();
    return m && m.emit(`beforeOutgoingRequestSpan`, p, e), p
}

function mu(e, t) {
    let {
        "sentry-trace": n,
        baggage: r
    } = ia({
        span: t
    });
    n && hu(e, n, r)
}

function hu(e, t, n) {
    let r = e.__sentry_xhr_v3__ ? .request_headers;
    if (!r ? .[`sentry-trace`]) try {
        if (e.setRequestHeader(`sentry-trace`, t), n) {
            let t = r ? .baggage;
            (!t || !gu(t)) && e.setRequestHeader(`baggage`, n)
        }
    } catch {}
}

function gu(e) {
    return e.split(`,`).some(e => e.trim().startsWith(`sentry-`))
}

function _u(e) {
    try {
        return new URL(e, G.location.origin).href
    } catch {
        return
    }
}

function vu() {
    G.document ? G.document.addEventListener(`visibilitychange`, () => {
        let e = z();
        if (!e) return;
        let t = R(e);
        if (G.document.hidden && t) {
            let e = `cancelled`,
                {
                    op: n,
                    status: r
                } = I(t);
            Z && w.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${n}`), r || t.setStatus({
                code: 2,
                message: e
            }), t.setAttribute(`sentry.cancellation_reason`, `document.hidden`), t.end()
        }
    }) : Z && w.warn(`[Tracing] Could not set up background tab detection due to lack of global document`)
}
var yu = `sentry_previous_trace`,
    bu = `sentry.previous_trace`;

function xu(e, {
    linkPreviousTrace: t,
    consistentTraceSampling: n
}) {
    let r = t === `session-storage`,
        i = r ? wu() : void 0;
    e.on(`spanStart`, e => {
        if (R(e) !== e) return;
        let t = x().getPropagationContext();
        i = Su(i, e, t), r && Cu(i)
    });
    let a = !0;
    n && e.on(`beforeSampling`, e => {
        if (!i) return;
        let t = x(),
            n = t.getPropagationContext();
        if (a && n.parentSpanId) {
            a = !1;
            return
        }
        t.setPropagationContext({ ...n,
            dsc: { ...n.dsc,
                sample_rate: String(i.sampleRate),
                sampled: String(Tu(i.spanContext))
            },
            sampleRand: i.sampleRand
        }), e.parentSampled = Tu(i.spanContext), e.parentSampleRate = i.sampleRate, e.spanAttributes = { ...e.spanAttributes,
            [bt]: i.sampleRate
        }
    })
}

function Su(e, t, n) {
    let r = I(t);

    function i() {
        try {
            return Number(n.dsc ? .sample_rate) ? ? Number(r.data ? .[`sentry.sample_rate`])
        } catch {
            return 0
        }
    }
    let a = {
        spanContext: t.spanContext(),
        startTimestamp: r.start_timestamp,
        sampleRate: i(),
        sampleRand: n.sampleRand
    };
    if (!e) return a;
    let o = e.spanContext;
    return o.traceId === r.trace_id ? e : (Date.now() / 1e3 - e.startTimestamp <= 3600 && (Z && w.log(`Adding previous_trace ${o} link to span ${{op:r.op,...t.spanContext()}}`), t.addLink({
        context: o,
        attributes: {
            [Dt]: `previous_trace`
        }
    }), t.setAttribute(bu, `${o.traceId}-${o.spanId}-${+!!Tu(o)}`)), a)
}

function Cu(e) {
    try {
        G.sessionStorage.setItem(yu, JSON.stringify(e))
    } catch (e) {
        Z && w.warn(`Could not store previous trace in sessionStorage`, e)
    }
}

function wu() {
    try {
        let e = G.sessionStorage ? .getItem(yu);
        return JSON.parse(e)
    } catch {
        return
    }
}

function Tu(e) {
    return e.traceFlags === 1
}
var Eu = `BrowserTracing`,
    Du = { ...yr,
        instrumentNavigation: !0,
        instrumentPageLoad: !0,
        markBackgroundSpan: !0,
        enableLongTask: !0,
        enableLongAnimationFrame: !0,
        enableInp: !0,
        enableElementTiming: !0,
        ignoreResourceSpans: [],
        ignorePerformanceApiSpans: [],
        detectRedirects: !0,
        linkPreviousTrace: `in-memory`,
        consistentTraceSampling: !1,
        _experiments: {},
        ...cu
    },
    Ou = ((e = {}) => {
        let t = {
                name: void 0,
                source: void 0
            },
            n = G.document,
            {
                enableInp: r,
                enableElementTiming: i,
                enableLongTask: a,
                enableLongAnimationFrame: o,
                _experiments: {
                    enableInteractions: c,
                    enableStandaloneClsSpans: l,
                    enableStandaloneLcpSpans: u
                },
                beforeStartSpan: d,
                idleTimeout: f,
                finalTimeout: p,
                childSpanTimeout: m,
                markBackgroundSpan: h,
                traceFetch: ee,
                traceXHR: te,
                trackFetchStreamPerformance: re,
                shouldCreateSpanForRequest: ie,
                enableHTTPTimings: v,
                ignoreResourceSpans: ae,
                ignorePerformanceApiSpans: oe,
                instrumentPageLoad: se,
                instrumentNavigation: ce,
                detectRedirects: y,
                linkPreviousTrace: le,
                consistentTraceSampling: ue,
                onRequestSpanStart: de
            } = { ...Du,
                ...e
            },
            fe, me;

        function b(e, r, i = !0) {
            let a = r.op === `pageload`,
                o = d ? d(r) : r,
                s = o.attributes || {};
            if (r.name !== o.name && (s[M] = `custom`, o.attributes = s), !i) {
                let e = ne();
                ur({ ...o,
                    startTime: e
                }).end(e);
                return
            }
            t.name = o.name, t.source = s[M];
            let c = wr(o, {
                idleTimeout: f,
                finalTimeout: p,
                childSpanTimeout: m,
                disableAutoFinish: a,
                beforeSpanEnd: t => {
                    fe ? .(), bc(t, {
                        recordClsOnPageloadSpan: !l,
                        recordLcpOnPageloadSpan: !u,
                        ignoreResourceSpans: ae,
                        ignorePerformanceApiSpans: oe
                    }), Fu(e, void 0);
                    let n = x(),
                        r = n.getPropagationContext();
                    n.setPropagationContext({ ...r,
                        traceId: c.spanContext().traceId,
                        sampled: L(c),
                        dsc: V(t)
                    })
                }
            });
            Fu(e, c);

            function h() {
                n && [`interactive`, `complete`].includes(n.readyState) && e.emit(`idleSpanEnableAutoFinish`, c)
            }
            a && n && (n.addEventListener(`readystatechange`, () => {
                h()
            }), h())
        }
        return {
            name: Eu,
            setup(e) {
                if (bn(), fe = pc({
                        recordClsStandaloneSpans: l || !1,
                        recordLcpStandaloneSpans: u || !1,
                        client: e
                    }), r && il(), i && Mc(), o && S.PerformanceObserver && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.includes(`long-animation-frame`) ? hc() : a && mc(), c && gc(), y && n) {
                    let e = () => {
                        me = _()
                    };
                    addEventListener(`click`, e, {
                        capture: !0
                    }), addEventListener(`keydown`, e, {
                        capture: !0,
                        passive: !0
                    })
                }

                function t() {
                    let t = Pu(e);
                    t && !I(t).timestamp && (Z && w.log(`[Tracing] Finishing current active span with op: ${I(t).op}`), t.setAttribute(xt, `cancelled`), t.end())
                }
                e.on(`startNavigationSpan`, (n, r) => {
                    if (C() !== e) return;
                    if (r ? .isRedirect) {
                        Z && w.warn(`[Tracing] Detected redirect, navigation span will not be the root span, but a child span.`), b(e, {
                            op: `navigation.redirect`,
                            ...n
                        }, !1);
                        return
                    }
                    t(), D().setPropagationContext({
                        traceId: s(),
                        sampleRand: Math.random()
                    });
                    let i = x();
                    i.setPropagationContext({
                        traceId: s(),
                        sampleRand: Math.random()
                    }), i.setSDKProcessingMetadata({
                        normalizedRequest: void 0
                    }), b(e, {
                        op: `navigation`,
                        ...n
                    })
                }), e.on(`startPageLoadSpan`, (n, r = {}) => {
                    if (C() !== e) return;
                    t();
                    let i = en(r.sentryTrace || ju(`sentry-trace`), r.baggage || ju(`baggage`)),
                        a = x();
                    a.setPropagationContext(i), a.setSDKProcessingMetadata({
                        normalizedRequest: bo()
                    }), b(e, {
                        op: `pageload`,
                        ...n
                    })
                })
            },
            afterAllSetup(e) {
                let n = pe();
                if (le !== `off` && xu(e, {
                        linkPreviousTrace: le,
                        consistentTraceSampling: ue
                    }), G.location) {
                    if (se) {
                        let t = g();
                        ku(e, {
                            name: G.location.pathname,
                            startTime: t ? t / 1e3 : void 0,
                            attributes: {
                                [M]: `url`,
                                [P]: `auto.pageload.browser`
                            }
                        })
                    }
                    ce && Gc(({
                        to: t,
                        from: r
                    }) => {
                        if (r === void 0 && n ? .indexOf(t) !== -1) {
                            n = void 0;
                            return
                        }
                        n = void 0;
                        let i = Ha(t),
                            a = Pu(e),
                            o = a && y && Lu(a, me);
                        Au(e, {
                            name: i ? .pathname || G.location.pathname,
                            attributes: {
                                [M]: `url`,
                                [P]: `auto.navigation.browser`
                            }
                        }, {
                            url: t,
                            isRedirect: o
                        })
                    })
                }
                h && vu(), c && Mu(e, f, p, m, t), r && cl(), lu(e, {
                    traceFetch: ee,
                    traceXHR: te,
                    trackFetchStreamPerformance: re,
                    tracePropagationTargets: e.getOptions().tracePropagationTargets,
                    shouldCreateSpanForRequest: ie,
                    enableHTTPTimings: v,
                    onRequestSpanStart: de
                })
            }
        }
    });

function ku(e, t, n) {
    e.emit(`startPageLoadSpan`, t, n), x().setTransactionName(t.name);
    let r = Pu(e);
    return r && e.emit(`afterStartPageLoadSpan`, r), r
}

function Au(e, t, n) {
    let {
        url: r,
        isRedirect: i
    } = n || {};
    e.emit(`beforeStartNavigationSpan`, t, {
        isRedirect: i
    }), e.emit(`startNavigationSpan`, t, {
        isRedirect: i
    });
    let a = x();
    return a.setTransactionName(t.name), r && !i && a.setSDKProcessingMetadata({
        normalizedRequest: { ...bo(),
            url: r
        }
    }), Pu(e)
}

function ju(e) {
    return (G.document ? .querySelector(`meta[name=${e}]`)) ? .getAttribute(`content`) || void 0
}

function Mu(e, t, n, r, i) {
    let a = G.document,
        o;
    a && addEventListener(`click`, () => {
        let a = `ui.action.click`,
            s = Pu(e);
        if (s) {
            let e = I(s).op;
            if ([`navigation`, `pageload`].includes(e)) {
                Z && w.warn(`[Tracing] Did not create ${a} span because a pageload or navigation span is in progress.`);
                return
            }
        }
        if (o && = (o.setAttribute(xt, `interactionInterrupted`), o.end(), void 0), !i.name) {
            Z && w.warn(`[Tracing] Did not create ${a} transaction because _latestRouteName is missing.`);
            return
        }
        o = wr({
            name: i.name,
            op: a,
            attributes: {
                [M]: i.source || `url`
            }
        }, {
            idleTimeout: t,
            finalTimeout: n,
            childSpanTimeout: r
        })
    }, {
        capture: !0
    })
}
var Nu = `_sentry_idleSpan`;

function Pu(e) {
    return e[Nu]
}

function Fu(e, t) {
    a(e, Nu, t)
}
var Iu = .3;

function Lu(e, t) {
    let n = I(e),
        r = ne();
    return !(r - n.start_timestamp > Iu || t && r - t <= Iu)
}
var $ = n(e());

function Ru(e) {
    let t = { ...e
    };
    return ra(t, `react`), ii(`react`, {
        version: $.version
    }), iu(t)
}
var zu = () => {
        let {
            state: {
                checkoutItems: e,
                itemVariants: t
            },
            actions: {
                setItemVariants: n
            }
        } = Be(), {
            state: {
                merchant: r
            }
        } = ye(), {
            productIdsKey: i,
            variantIds: a
        } = (0, $.useMemo)(() => {
            let t = new Set,
                n = [],
                r = [];
            return (e ? ? []).forEach(e => {
                !e ? .product_id || !e ? .variant_id || t.has(e.product_id) || (t.add(e.product_id), n.push(e.variant_id), r.push(`${e.product_id}:${e.variant_id}`))
            }), {
                productIdsKey: r.sort().join(`,`),
                variantIds: n
            }
        }, [e]);
        return (0, $.useEffect)(() => {
            if (!i || !r ? .merchantId) return;
            let e = !1;
            return (async () => {
                try {
                    let t = await tt(r ? .merchantId ? ? ``, a);
                    if (e) return;
                    n(t.reduce((e, t) => {
                        let n = t ? .product ? .product_id;
                        if (!n || e[n]) return e;
                        let r = t ? .product ? .images ? ? [],
                            i = Qe(r);
                        return e[n] = (t ? .product ? .variants ? ? []).map(e => ({ ...e,
                            imageUrl: et(r, e.variant_id, i)
                        })), e
                    }, {}))
                } catch (e) {
                    console.error(e)
                }
            })(), () => {
                e = !0
            }
        }, [i, r ? .merchantId]), {
            itemVariants: t
        }
    },
    Bu = () => {
        Promise.allSettled || Vu(), Hu()
    },
    Vu = () => {
        let e = e => ({
                status: `rejected`,
                reason: e
            }),
            t = e => ({
                status: `fulfilled`,
                value: e
            });
        Promise.allSettled = function(n) {
            let r = n.map(n => Promise.resolve(n).then(t, e));
            return Promise.all(r)
        }
    },
    Hu = () => {
        if (!String.prototype.replaceAll) try {
            String.prototype.replaceAll = function(e, t) {
                return Object.prototype.toString.call(e).toLowerCase() === `[object regexp]` ? this.replace(e, t) : this.replace(new RegExp(e, `g`), t)
            }
        } catch (e) {
            console.error(`polyfill not added`, e)
        }
    },
    Uu = () => {
        let [e, t] = (0, $.useState)(!1), {
            state: {
                merchant: n
            }
        } = ye(), {
            state: {
                user: r
            }
        } = te(), i = n ? .isDebugLoggingEnabled ? ? !1;
        (0, $.useEffect)(() => {
            let a = 1,
                o = !1;
            [`production`].includes(`production`) && (a = .1, o = !0), !e && o && (Ru({
                dsn: `https://d97a825a449bcf2e640608e705016d56@o4508131579002880.ingest.us.sentry.io/4508131592241152`,
                enableLogs: i,
                environment: `production`,
                integrations: [Ou(), ...[]],
                tracesSampler(e) {
                    return e.parentSampled === void 0 ? .1 : e.parentSampled
                },
                replaysSessionSampleRate: a,
                replaysOnErrorSampleRate: 1,
                ignoreErrors: [/^Clarity/, /TypeError: Network request failed/, /Load failed/, /TypeError: Failed to fetch dynamically imported module/, /TypeError: Importing a module script failed/, /TypeError: error loading dynamically imported module/, /TypeError: cancelled/, /The string did not match the expected pattern/, /is not a valid JavaScript MIME type/, /Can't find variable: clearClarity/],
                beforeSend(e, t) {
                    if (e ? .exception ? .values ? .some(e => e ? .stacktrace ? .frames ? .some(e => e ? .filename ? .includes(`clarity.ms`) || e ? .filename ? .includes(`clarity.js`)))) return null;
                    let n = t ? .originalException;
                    if (n && typeof n == `object` && `isAxiosError` in n && n.isAxiosError) {
                        let t = n;
                        if (!t.response ? .status) return null;
                        let r = t.response ? .data ? .error;
                        if (r ? .message ? .toLowerCase() && [`Checkout already completed`, `Checkout already finished`].some(e => r.message ? .toLowerCase() ? .includes(e.toLowerCase()))) return null;
                        if (r ? .message && e.exception ? .values ? .length) {
                            let n = e.exception.values[e.exception.values.length - 1];
                            n.value = `${t.response.status} ${t.config?.url??``} - ${r.code?`${r.code}: `:``}${r.message}`
                        }
                        t.config && (e.contexts = { ...e.contexts,
                            axios: {
                                url: t.config.url,
                                method: t.config.method,
                                baseURL: t.config.baseURL,
                                headers: t.config.headers
                            }
                        }, t.response && (e.contexts.axios_response = {
                            status: t.response.status,
                            statusText: t.response.statusText,
                            headers: t.response.headers
                        }))
                    }
                    return e
                },
                denyUrls: [/extensions\//i, /^chrome:\/\//i, /clarity\.ms/, /www\.clarity\.ms/, /https:\/\/www\.clarity\.ms\//]
            }), t(!0)), r ? .uid && n ? .merchantId && (oi({
                id: r ? .uid,
                email: r ? .email,
                username: r ? .email,
                phone: r ? .phone
            }), ai({
                "user.id": r ? .uid,
                "user.email": r ? .email,
                "user.name": r ? .name,
                "merchant.name": n ? .displayName,
                "merchant.id": n ? .merchantId
            }))
        }, [e, t, i, r ? .uid, n ? .merchantId])
    },
    Wu = t(),
    Gu = ({
        children: e
    }) => {
        let {
            state: {
                tokenId: t,
                cartPayload: n
            }
        } = se(), [r] = ve(), i = r.get(`page`) ? .toLowerCase();
        return !t && (!i || i === `mock-checkout`) || !n && !t && i === `cart` ? (0, Wu.jsx)(Ye, {}) : (0, Wu.jsx)(Wu.Fragment, {
            children: e
        })
    },
    Ku = ({
        children: e
    }) => (0, Wu.jsx)(We, {
        "data-sentry-element": `TokenProvider`,
        "data-sentry-component": `AppWrapper`,
        "data-sentry-source-file": `AppWrapper.tsx`,
        children: (0, Wu.jsx)(Gu, {
            "data-sentry-element": `AppWrapperContent`,
            "data-sentry-source-file": `AppWrapper.tsx`,
            children: e
        })
    }),
    qu = (e, t) => t === `INR` ? `₹${e.toLocaleString(`en-IN`)}` : `${e.toLocaleString()}`,
    Ju = e => new Date(e).toLocaleDateString(`en-IN`, {
        day: `2-digit`,
        month: `short`,
        year: `numeric`
    }),
    Yu = e => {
        if (e ? .cancelled) return `cancelled`;
        let t = e ? .display_financial_status ? ? ``;
        return t === `PARTIALLY_REFUNDED` || t === `REFUNDED` ? `refunded` : (e ? .fulfillments ? ? []).some(e => e ? .display_status === `DELIVERED` || e ? .display_status === `PICKED_UP`) ? `delivered` : `in_transit`
    },
    Xu = e => {
        let t = new Set;
        return (e ? ? []).flatMap(e => e ? .tracking_info ? ? []).filter(e => {
            if (!e ? .url) return !1;
            let n = `${e.number??``}|${e.url}`;
            return t.has(n) ? !1 : (t.add(n), !0)
        }).map(e => ({
            number: e.number ? ? ``,
            url: e.url,
            company: e.company ? ? ``
        }))
    },
    Zu = e => e.map(e => ({
        id: e.variant_id ? ? e.product_id,
        name: e.title,
        qty: e.quantity,
        variant: e.variant_title ? ? null,
        price: qu(parseFloat(e.discounted_price ? ? `0`), e.currency_code ? ? `INR`),
        imageUrl: e.image_url ? ? void 0,
        productUrl: e.product_url ? ? void 0
    })),
    Qu = e => e ? {
        firstName: e.first_name ? ? ``,
        lastName: e.last_name,
        address1: e.address1 ? ? ``,
        address2: e.address2,
        city: e.city ? ? ``,
        province: e.province ? ? ``,
        country: e.country ? ? ``,
        zip: e.zip ? ? ``,
        phone: e.phone
    } : void 0,
    $u = e => {
        let t = e.line_items ? ? [],
            n = t.reduce((e, t) => e + parseFloat(t.discounted_price ? ? `0`) * (t.quantity ? ? 1), 0),
            r = t[0] ? .currency_code ? ? `INR`;
        return {
            id: e.id,
            orderNumber: e.name,
            date: Ju(e.created_at),
            cancelled: !!e.cancelled,
            financialStatus: e.display_financial_status ? ? ``,
            fulfillmentStatus: e.display_fulfillment_status ? ? ``,
            status: Yu(e),
            totalPrice: qu(n, r),
            items: Zu(t),
            trackingInfo: Xu(e.fulfillments)
        }
    },
    ed = e => ({ ...$u(e),
        shippingAddress: Qu(e.shipping_address),
        billingAddress: Qu(e.billing_address),
        transactions: (e.transactions ? ? []).map(e => {
            let t = parseFloat(e.amount ? ? `0`),
                n = e.currency_code ? ? `INR`;
            return {
                id: e.id,
                kind: e.kind,
                status: e.status,
                gateway: e.gateway,
                amount: qu(t, n),
                currencyCode: n
            }
        }),
        note: e.note
    }),
    td = e => ({
        id: e ? .id,
        name: e ? .name,
        description: e ? .description,
        status: e ? .status,
        module: e ? .module,
        testGroups: e ? .test_group_configs ? .map(e => ({
            segmentId: e ? .segment_id,
            name: e ? .name,
            description: e ? .description,
            trafficPercentage: e ? .percent_share,
            isControlGroup: e ? .is_control_group
        }))
    }),
    nd = (e, t) => {
        let {
            t: n
        } = He(), {
            sendAnalyticsEvent: r
        } = ae(), {
            state: {
                isLoggedInOnStore: i
            }
        } = Te(), a = !i, o = (0, $.useCallback)(e => {
            d(e, {
                success: !1,
                error: {
                    message: n(`store_logged_out_error`)
                },
                context: `SDK`
            })
        }, [n]);
        return {
            addItem: (0, $.useCallback)(async n => {
                if (a) {
                    o(Re.WISHLIST_ITEM_ADDED);
                    return
                }
                await $e(e, t, n, `SDK`) && r({
                    eventName: fe.ADDED_TO_WISHLIST,
                    eventType: `flo_action`,
                    metaData: {
                        wishlistData: {
                            productId: n ? .productId,
                            variantId: n ? .variantId
                        }
                    }
                })
            }, [e, t, r, a, o]),
            removeItem: (0, $.useCallback)(async n => {
                if (a) {
                    o(Re.WISHLIST_ITEM_REMOVED);
                    return
                }
                await Ze(e, t, n, `SDK`) && r({
                    eventName: fe.REMOVED_FROM_WISHLIST,
                    eventType: `flo_action`,
                    metaData: {
                        wishlistData: {
                            productId: n ? .productId,
                            variantId: n ? .variantId
                        }
                    }
                })
            }, [e, t, r, a, o]),
            getItems: (0, $.useCallback)(n => {
                if (a) {
                    o(Re.WISHLIST_ITEMS_DATA);
                    return
                }
                return Xe(e, t, n)
            }, [e, t, a, o])
        }
    };
async function rd(e) {
    let t = await _e(`/checkout/v1/checkout/${e}?include=token`),
        n = t ? .token ? .data ? .redirect_url ? ? t ? .token ? .data ? .back_url ? ? ``,
        r = le(t ? .pricing) ? ? {
            total_payable: 0,
            sub_total: 0,
            total: 0,
            tax: 0,
            rewards: 0,
            discount: 0,
            shipping: 0,
            cod: 0,
            cod_enabled: !1,
            taxes_included: !0,
            serviceable: !0,
            prepaid_total: 0,
            prepaid_discount: 0,
            original_sub_total: 0,
            addon_total: 0,
            gift_card: 0
        };
    return {
        checkout: {
            checkoutResponse: t,
            brandUrl: t ? .token ? .data ? .origin_url ? ? ``,
            analyticsMeta: t ? .metadata ? .analytics ? ? {},
            redirectUrl: n,
            checkoutToken: t ? .checkout_token_id ? ? ``,
            isCheckoutC2P: t ? .metadata ? .c2p ? .enabled ? ? !1,
            sessionId: t ? .token ? .sf_session_id ? ? ``,
            parsedBilling: r,
            longSessionId: t ? .metadata ? .long_session_id ? ? ``,
            thirdPartyAnalyticsData: t ? .metadata ? .analytics ? ? {},
            clientMetadata: t ? .metadata ? .client_meta ? ? {},
            checkoutChannel: t ? .metadata ? .application_id ? ? ``,
            segmentId: t ? .segment_id ? ? ``
        }
    }
}
var id = `https://image.shopflo.com/third-party-check.html`,
    ad = `FLO_THIRD_PARTY_COOKIE_RESULT`,
    od = 5e3;

function sd() {
    return new Promise(e => {
        let t = document.createElement(`iframe`);
        t.src = id, t.style.cssText = `display:none;width:0;height:0;border:none;position:absolute;top:-9999px;left:-9999px;`;
        let n = !1,
            r = setTimeout(() => {
                n || (n = !0, a(), e(!1))
            }, od),
            i = t => {
                t.data ? .type === ad && !n && (n = !0, a(), e(!!t.data ? .payload ? .enabled))
            },
            a = () => {
                clearTimeout(r), window.removeEventListener(`message`, i), t.remove()
            };
        window.addEventListener(`message`, i), document.body.appendChild(t)
    })
}
export {
    $u as a, Uu as c, td as i, Bu as l, rd as n, ed as o, nd as r, Ku as s, sd as t, zu as u
};
//# sourceMappingURL=lib-bcMqzpY1.js.map