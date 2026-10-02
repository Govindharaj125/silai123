var ce, y, Xe, N, Se, Je, te = {},
    Ke = [],
    vt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

function $(n, e) {
    for (var t in e) n[t] = e[t];
    return n
}

function Qe(n) {
    var e = n.parentNode;
    e && e.removeChild(n)
}

function I(n, e, t) {
    var r, a, o, s = {};
    for (o in e) o == "key" ? r = e[o] : o == "ref" ? a = e[o] : s[o] = e[o];
    if (arguments.length > 2 && (s.children = arguments.length > 3 ? ce.call(arguments, 2) : t), typeof n == "function" && n.defaultProps != null)
        for (o in n.defaultProps) s[o] === void 0 && (s[o] = n.defaultProps[o]);
    return Q(n, s, r, a, null)
}

function Q(n, e, t, r, a) {
    var o = {
        type: n,
        props: e,
        key: t,
        ref: r,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: a ? ? ++Xe
    };
    return a == null && y.vnode != null && y.vnode(o), o
}

function O(n) {
    return n.children
}

function M(n, e) {
    this.props = n, this.context = e
}

function V(n, e) {
    if (e == null) return n.__ ? V(n.__, n.__.__k.indexOf(n) + 1) : null;
    for (var t; e < n.__k.length; e++)
        if ((t = n.__k[e]) != null && t.__e != null) return t.__e;
    return typeof n.type == "function" ? V(n) : null
}

function Ze(n) {
    var e, t;
    if ((n = n.__) != null && n.__c != null) {
        for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++)
            if ((t = n.__k[e]) != null && t.__e != null) {
                n.__e = n.__c.base = t.__e;
                break
            }
        return Ze(n)
    }
}

function pe(n) {
    (!n.__d && (n.__d = !0) && N.push(n) && !ne.__r++ || Se !== y.debounceRendering) && ((Se = y.debounceRendering) || setTimeout)(ne)
}

function ne() {
    for (var n; ne.__r = N.length;) n = N.sort(function(e, t) {
        return e.__v.__b - t.__v.__b
    }), N = [], n.some(function(e) {
        var t, r, a, o, s, i;
        e.__d && (s = (o = (t = e).__v).__e, (i = t.__P) && (r = [], (a = $({}, o)).__v = o.__v + 1, ye(i, o, a, t.__n, i.ownerSVGElement !== void 0, o.__h != null ? [s] : null, r, s ? ? V(o), o.__h), nt(r, o), o.__e != s && Ze(o)))
    })
}

function Ye(n, e, t, r, a, o, s, i, u, l) {
    var c, f, m, d, p, h, b, v = r && r.__k || Ke,
        w = v.length;
    for (t.__k = [], c = 0; c < e.length; c++)
        if ((d = t.__k[c] = (d = e[c]) == null || typeof d == "boolean" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" ? Q(null, d, null, null, d) : Array.isArray(d) ? Q(O, {
                children: d
            }, null, null, null) : d.__b > 0 ? Q(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null) {
            if (d.__ = t, d.__b = t.__b + 1, (m = v[c]) === null || m && d.key == m.key && d.type === m.type) v[c] = void 0;
            else
                for (f = 0; f < w; f++) {
                    if ((m = v[f]) && d.key == m.key && d.type === m.type) {
                        v[f] = void 0;
                        break
                    }
                    m = null
                }
            ye(n, d, m = m || te, a, o, s, i, u, l), p = d.__e, (f = d.ref) && m.ref != f && (b || (b = []), m.ref && b.push(m.ref, null, d), b.push(f, d.__c || p, d)), p != null ? (h == null && (h = p), typeof d.type == "function" && d.__k === m.__k ? d.__d = u = et(d, u, n) : u = tt(n, d, m, v, p, u), typeof t.type == "function" && (t.__d = u)) : u && m.__e == u && u.parentNode != n && (u = V(m))
        }
    for (t.__e = h, c = w; c--;) v[c] != null && ot(v[c], v[c]);
    if (b)
        for (c = 0; c < b.length; c++) rt(b[c], b[++c], b[++c])
}

function et(n, e, t) {
    for (var r, a = n.__k, o = 0; a && o < a.length; o++)(r = a[o]) && (r.__ = n, e = typeof r.type == "function" ? et(r, e, t) : tt(t, r, r, a, r.__e, e));
    return e
}

function re(n, e) {
    return e = e || [], n == null || typeof n == "boolean" || (Array.isArray(n) ? n.some(function(t) {
        re(t, e)
    }) : e.push(n)), e
}

function tt(n, e, t, r, a, o) {
    var s, i, u;
    if (e.__d !== void 0) s = e.__d, e.__d = void 0;
    else if (t == null || a != o || a.parentNode == null) e: if (o == null || o.parentNode !== n) n.appendChild(a), s = null;
        else {
            for (i = o, u = 0;
                (i = i.nextSibling) && u < r.length; u += 1)
                if (i == a) break e;
            n.insertBefore(a, o), s = o
        }
    return s !== void 0 ? s : a.nextSibling
}

function gt(n, e, t, r, a) {
    var o;
    for (o in t) o === "children" || o === "key" || o in e || oe(n, o, null, t[o], r);
    for (o in e) a && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === e[o] || oe(n, o, e[o], t[o], r)
}

function ke(n, e, t) {
    e[0] === "-" ? n.setProperty(e, t) : n[e] = t == null ? "" : typeof t != "number" || vt.test(e) ? t : t + "px"
}

function oe(n, e, t, r, a) {
    var o;
    e: if (e === "style")
        if (typeof t == "string") n.style.cssText = t;
        else {
            if (typeof r == "string" && (n.style.cssText = r = ""), r)
                for (e in r) t && e in t || ke(n.style, e, "");
            if (t)
                for (e in t) r && t[e] === r[e] || ke(n.style, e, t[e])
        }
    else if (e[0] === "o" && e[1] === "n") o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2), n.l || (n.l = {}), n.l[e + o] = t, t ? r || n.addEventListener(e, o ? Ee : Ce, o) : n.removeEventListener(e, o ? Ee : Ce, o);
    else if (e !== "dangerouslySetInnerHTML") {
        if (a) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e in n) try {
            n[e] = t ? ? "";
            break e
        } catch {}
        typeof t == "function" || (t == null || t === !1 && e.indexOf("-") == -1 ? n.removeAttribute(e) : n.setAttribute(e, t))
    }
}

function Ce(n) {
    this.l[n.type + !1](y.event ? y.event(n) : n)
}

function Ee(n) {
    this.l[n.type + !0](y.event ? y.event(n) : n)
}

function ye(n, e, t, r, a, o, s, i, u) {
    var l, c, f, m, d, p, h, b, v, w, S, E, x, A, G, P = e.type;
    if (e.constructor !== void 0) return null;
    t.__h != null && (u = t.__h, i = e.__e = t.__e, e.__h = null, o = [i]), (l = y.__b) && l(e);
    try {
        e: if (typeof P == "function") {
            if (b = e.props, v = (l = P.contextType) && r[l.__c], w = l ? v ? v.props.value : l.__ : r, t.__c ? h = (c = e.__c = t.__c).__ = c.__E : ("prototype" in P && P.prototype.render ? e.__c = c = new P(b, w) : (e.__c = c = new M(b, w), c.constructor = P, c.render = kt), v && v.sub(c), c.props = b, c.state || (c.state = {}), c.context = w, c.__n = r, f = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), P.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = $({}, c.__s)), $(c.__s, P.getDerivedStateFromProps(b, c.__s))), m = c.props, d = c.state, f) P.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
            else {
                if (P.getDerivedStateFromProps == null && b !== m && c.componentWillReceiveProps != null && c.componentWillReceiveProps(b, w), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(b, c.__s, w) === !1 || e.__v === t.__v) {
                    for (c.props = b, c.state = c.__s, e.__v !== t.__v && (c.__d = !1), c.__v = e, e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(X) {
                            X && (X.__ = e)
                        }), S = 0; S < c._sb.length; S++) c.__h.push(c._sb[S]);
                    c._sb = [], c.__h.length && s.push(c);
                    break e
                }
                c.componentWillUpdate != null && c.componentWillUpdate(b, c.__s, w), c.componentDidUpdate != null && c.__h.push(function() {
                    c.componentDidUpdate(m, d, p)
                })
            }
            if (c.context = w, c.props = b, c.__v = e, c.__P = n, E = y.__r, x = 0, "prototype" in P && P.prototype.render) {
                for (c.state = c.__s, c.__d = !1, E && E(e), l = c.render(c.props, c.state, c.context), A = 0; A < c._sb.length; A++) c.__h.push(c._sb[A]);
                c._sb = []
            } else
                do c.__d = !1, E && E(e), l = c.render(c.props, c.state, c.context), c.state = c.__s; while (c.__d && ++x < 25);
            c.state = c.__s, c.getChildContext != null && (r = $($({}, r), c.getChildContext())), f || c.getSnapshotBeforeUpdate == null || (p = c.getSnapshotBeforeUpdate(m, d)), G = l != null && l.type === O && l.key == null ? l.props.children : l, Ye(n, Array.isArray(G) ? G : [G], e, t, r, a, o, s, i, u), c.base = e.__e, e.__h = null, c.__h.length && s.push(c), h && (c.__E = c.__ = null), c.__e = !1
        } else o == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = St(t.__e, e, t, r, a, o, s, u);
        (l = y.diffed) && l(e)
    }
    catch (X) {
        e.__v = null, (u || o != null) && (e.__e = i, e.__h = !!u, o[o.indexOf(i)] = null), y.__e(X, e, t)
    }
}

function nt(n, e) {
    y.__c && y.__c(e, n), n.some(function(t) {
        try {
            n = t.__h, t.__h = [], n.some(function(r) {
                r.call(t)
            })
        } catch (r) {
            y.__e(r, t.__v)
        }
    })
}

function St(n, e, t, r, a, o, s, i) {
    var u, l, c, f = t.props,
        m = e.props,
        d = e.type,
        p = 0;
    if (d === "svg" && (a = !0), o != null) {
        for (; p < o.length; p++)
            if ((u = o[p]) && "setAttribute" in u == !!d && (d ? u.localName === d : u.nodeType === 3)) {
                n = u, o[p] = null;
                break
            }
    }
    if (n == null) {
        if (d === null) return document.createTextNode(m);
        n = a ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, m.is && m), o = null, i = !1
    }
    if (d === null) f === m || i && n.data === m || (n.data = m);
    else {
        if (o = o && ce.call(n.childNodes), l = (f = t.props || te).dangerouslySetInnerHTML, c = m.dangerouslySetInnerHTML, !i) {
            if (o != null)
                for (f = {}, p = 0; p < n.attributes.length; p++) f[n.attributes[p].name] = n.attributes[p].value;
            (c || l) && (c && (l && c.__html == l.__html || c.__html === n.innerHTML) || (n.innerHTML = c && c.__html || ""))
        }
        if (gt(n, m, f, a, i), c) e.__k = [];
        else if (p = e.props.children, Ye(n, Array.isArray(p) ? p : [p], e, t, r, a && d !== "foreignObject", o, s, o ? o[0] : t.__k && V(t, 0), i), o != null)
            for (p = o.length; p--;) o[p] != null && Qe(o[p]);
        i || ("value" in m && (p = m.value) !== void 0 && (p !== n.value || d === "progress" && !p || d === "option" && p !== f.value) && oe(n, "value", p, f.value, !1), "checked" in m && (p = m.checked) !== void 0 && p !== n.checked && oe(n, "checked", p, f.checked, !1))
    }
    return n
}

function rt(n, e, t) {
    try {
        typeof n == "function" ? n(e) : n.current = e
    } catch (r) {
        y.__e(r, t)
    }
}

function ot(n, e, t) {
    var r, a;
    if (y.unmount && y.unmount(n), (r = n.ref) && (r.current && r.current !== n.__e || rt(r, null, e)), (r = n.__c) != null) {
        if (r.componentWillUnmount) try {
            r.componentWillUnmount()
        } catch (o) {
            y.__e(o, e)
        }
        r.base = r.__P = null, n.__c = void 0
    }
    if (r = n.__k)
        for (a = 0; a < r.length; a++) r[a] && ot(r[a], e, t || typeof n.type != "function");
    t || n.__e == null || Qe(n.__e), n.__ = n.__e = n.__d = void 0
}

function kt(n, e, t) {
    return this.constructor(n, t)
}

function fe(n, e, t) {
    var r, a, o;
    y.__ && y.__(n, e), a = (r = typeof t == "function") ? null : t && t.__k || e.__k, o = [], ye(e, n = (!r && t || e).__k = I(O, null, [n]), a || te, te, e.ownerSVGElement !== void 0, !r && t ? [t] : a ? null : e.firstChild ? ce.call(e.childNodes) : null, o, !r && t ? t : a ? a.__e : e.firstChild, r), nt(o, n)
}

function W(n, e) {
    var t = {
        __c: e = "__cC" + Je++,
        __: n,
        Consumer: function(r, a) {
            return r.children(a)
        },
        Provider: function(r) {
            var a, o;
            return this.getChildContext || (a = [], (o = {})[e] = this, this.getChildContext = function() {
                return o
            }, this.shouldComponentUpdate = function(s) {
                this.props.value !== s.value && a.some(pe)
            }, this.sub = function(s) {
                a.push(s);
                var i = s.componentWillUnmount;
                s.componentWillUnmount = function() {
                    a.splice(a.indexOf(s), 1), i && i.call(s)
                }
            }), r.children
        }
    };
    return t.Provider.__ = t.Consumer.contextType = t
}
ce = Ke.slice, y = {
    __e: function(n, e, t, r) {
        for (var a, o, s; e = e.__;)
            if ((a = e.__c) && !a.__) try {
                if ((o = a.constructor) && o.getDerivedStateFromError != null && (a.setState(o.getDerivedStateFromError(n)), s = a.__d), a.componentDidCatch != null && (a.componentDidCatch(n, r || {}), s = a.__d), s) return a.__E = a
            } catch (i) {
                n = i
            }
        throw n
    }
}, Xe = 0, M.prototype.setState = function(n, e) {
    var t;
    t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = $({}, this.state), typeof n == "function" && (n = n($({}, t), this.props)), n && $(t, n), n != null && this.__v && (e && this._sb.push(e), pe(this))
}, M.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), pe(this))
}, M.prototype.render = O, N = [], ne.__r = 0, Je = 0;
var H, k, de, Te, B = 0,
    at = [],
    Z = [],
    qe = y.__b,
    Pe = y.__r,
    Ae = y.diffed,
    xe = y.__c,
    Me = y.unmount;

function U(n, e) {
    y.__h && y.__h(k, n, B || e), B = 0;
    var t = k.__H || (k.__H = {
        __: [],
        __h: []
    });
    return n >= t.__.length && t.__.push({
        __V: Z
    }), t.__[n]
}

function q(n) {
    return B = 1, Ct(st, n)
}

function Ct(n, e, t) {
    var r = U(H++, 2);
    if (r.t = n, !r.__c && (r.__ = [t ? t(e) : st(void 0, e), function(o) {
            var s = r.__N ? r.__N[0] : r.__[0],
                i = r.t(s, o);
            s !== i && (r.__N = [i, r.__[1]], r.__c.setState({}))
        }], r.__c = k, !k.u)) {
        k.u = !0;
        var a = k.shouldComponentUpdate;
        k.shouldComponentUpdate = function(o, s, i) {
            if (!r.__c.__H) return !0;
            var u = r.__c.__H.__.filter(function(c) {
                return c.__c
            });
            if (u.every(function(c) {
                    return !c.__N
                })) return !a || a.call(this, o, s, i);
            var l = !1;
            return u.forEach(function(c) {
                if (c.__N) {
                    var f = c.__[0];
                    c.__ = c.__N, c.__N = void 0, f !== c.__[0] && (l = !0)
                }
            }), !(!l && r.__c.props === o) && (!a || a.call(this, o, s, i))
        }
    }
    return r.__N || r.__
}

function ue(n, e) {
    var t = U(H++, 3);
    !y.__s && be(t.__H, e) && (t.__ = n, t.i = e, k.__H.__h.push(t))
}

function mn(n, e) {
    var t = U(H++, 4);
    !y.__s && be(t.__H, e) && (t.__ = n, t.i = e, k.__h.push(t))
}

function Et(n) {
    return B = 5, we(function() {
        return {
            current: n
        }
    }, [])
}

function we(n, e) {
    var t = U(H++, 7);
    return be(t.__H, e) ? (t.__V = n(), t.i = e, t.__h = n, t.__V) : t.__
}

function Tt(n, e) {
    return B = 8, we(function() {
        return n
    }, e)
}

function z(n) {
    var e = k.context[n.__c],
        t = U(H++, 9);
    return t.c = n, e ? (t.__ == null && (t.__ = !0, e.sub(k)), e.props.value) : n.__
}

function qt() {
    for (var n; n = at.shift();)
        if (n.__P && n.__H) try {
            n.__H.__h.forEach(Y), n.__H.__h.forEach(me), n.__H.__h = []
        } catch (e) {
            n.__H.__h = [], y.__e(e, n.__v)
        }
}
y.__b = function(n) {
    k = null, qe && qe(n)
}, y.__r = function(n) {
    Pe && Pe(n), H = 0;
    var e = (k = n.__c).__H;
    e && (de === k ? (e.__h = [], k.__h = [], e.__.forEach(function(t) {
        t.__N && (t.__ = t.__N), t.__V = Z, t.__N = t.i = void 0
    })) : (e.__h.forEach(Y), e.__h.forEach(me), e.__h = [])), de = k
}, y.diffed = function(n) {
    Ae && Ae(n);
    var e = n.__c;
    e && e.__H && (e.__H.__h.length && (at.push(e) !== 1 && Te === y.requestAnimationFrame || ((Te = y.requestAnimationFrame) || Pt)(qt)), e.__H.__.forEach(function(t) {
        t.i && (t.__H = t.i), t.__V !== Z && (t.__ = t.__V), t.i = void 0, t.__V = Z
    })), de = k = null
}, y.__c = function(n, e) {
    e.some(function(t) {
        try {
            t.__h.forEach(Y), t.__h = t.__h.filter(function(r) {
                return !r.__ || me(r)
            })
        } catch (r) {
            e.some(function(a) {
                a.__h && (a.__h = [])
            }), e = [], y.__e(r, t.__v)
        }
    }), xe && xe(n, e)
}, y.unmount = function(n) {
    Me && Me(n);
    var e, t = n.__c;
    t && t.__H && (t.__H.__.forEach(function(r) {
        try {
            Y(r)
        } catch (a) {
            e = a
        }
    }), t.__H = void 0, e && y.__e(e, t.__v))
};
var $e = typeof requestAnimationFrame == "function";

function Pt(n) {
    var e, t = function() {
            clearTimeout(r), $e && cancelAnimationFrame(e), setTimeout(n)
        },
        r = setTimeout(t, 100);
    $e && (e = requestAnimationFrame(t))
}

function Y(n) {
    var e = k,
        t = n.__c;
    typeof t == "function" && (n.__c = void 0, t()), k = e
}

function me(n) {
    var e = k;
    n.__c = n.__(), k = e
}

function be(n, e) {
    return !n || n.length !== e.length || e.some(function(t, r) {
        return t !== n[r]
    })
}

function st(n, e) {
    return typeof e == "function" ? e(n) : e
}

function At(n, e) {
    for (var t in e) n[t] = e[t];
    return n
}

function _e(n, e) {
    for (var t in n)
        if (t !== "__source" && !(t in e)) return !0;
    for (var r in e)
        if (r !== "__source" && n[r] !== e[r]) return !0;
    return !1
}

function De(n) {
    this.props = n
}

function xt(n, e) {
    function t(a) {
        var o = this.props.ref,
            s = o == a.ref;
        return !s && o && (o.call ? o(null) : o.current = null), e ? !e(this.props, a) || !s : _e(this.props, a)
    }

    function r(a) {
        return this.shouldComponentUpdate = t, I(n, a)
    }
    return r.displayName = "Memo(" + (n.displayName || n.name) + ")", r.prototype.isReactComponent = !0, r.__f = !0, r
}(De.prototype = new M).isPureReactComponent = !0, De.prototype.shouldComponentUpdate = function(n, e) {
    return _e(this.props, n) || _e(this.state, e)
};
var Ie = y.__b;
y.__b = function(n) {
    n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), Ie && Ie(n)
};
var Mt = y.__e;
y.__e = function(n, e, t, r) {
    if (n.then) {
        for (var a, o = e; o = o.__;)
            if ((a = o.__c) && a.__c) return e.__e == null && (e.__e = t.__e, e.__k = t.__k), a.__c(n, e)
    }
    Mt(n, e, t, r)
};
var je = y.unmount;

function it(n, e, t) {
    return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function(r) {
        typeof r.__c == "function" && r.__c()
    }), n.__c.__H = null), (n = At({}, n)).__c != null && (n.__c.__P === t && (n.__c.__P = e), n.__c = null), n.__k = n.__k && n.__k.map(function(r) {
        return it(r, e, t)
    })), n
}

function ct(n, e, t) {
    return n && (n.__v = null, n.__k = n.__k && n.__k.map(function(r) {
        return ct(r, e, t)
    }), n.__c && n.__c.__P === e && (n.__e && t.insertBefore(n.__e, n.__d), n.__c.__e = !0, n.__c.__P = t)), n
}

function le() {
    this.__u = 0, this.t = null, this.__b = null
}

function ut(n) {
    var e = n.__.__c;
    return e && e.__a && e.__a(n)
}

function J() {
    this.u = null, this.o = null
}
y.unmount = function(n) {
    var e = n.__c;
    e && e.__R && e.__R(), e && n.__h === !0 && (n.type = null), je && je(n)
}, (le.prototype = new M).__c = function(n, e) {
    var t = e.__c,
        r = this;
    r.t == null && (r.t = []), r.t.push(t);
    var a = ut(r.__v),
        o = !1,
        s = function() {
            o || (o = !0, t.__R = null, a ? a(i) : i())
        };
    t.__R = s;
    var i = function() {
            if (!--r.__u) {
                if (r.state.__a) {
                    var l = r.state.__a;
                    r.__v.__k[0] = ct(l, l.__c.__P, l.__c.__O)
                }
                var c;
                for (r.setState({
                        __a: r.__b = null
                    }); c = r.t.pop();) c.forceUpdate()
            }
        },
        u = e.__h === !0;
    r.__u++ || u || r.setState({
        __a: r.__b = r.__v.__k[0]
    }), n.then(s, s)
}, le.prototype.componentWillUnmount = function() {
    this.t = []
}, le.prototype.render = function(n, e) {
    if (this.__b) {
        if (this.__v.__k) {
            var t = document.createElement("div"),
                r = this.__v.__k[0].__c;
            this.__v.__k[0] = it(this.__b, t, r.__O = r.__P)
        }
        this.__b = null
    }
    var a = e.__a && I(O, null, n.fallback);
    return a && (a.__h = null), [I(O, null, e.__a ? null : n.children), a]
};
var Re = function(n, e, t) {
    if (++t[1] === t[0] && n.o.delete(e), n.props.revealOrder && (n.props.revealOrder[0] !== "t" || !n.o.size))
        for (t = n.u; t;) {
            for (; t.length > 3;) t.pop()();
            if (t[1] < t[0]) break;
            n.u = t = t[2]
        }
};

function $t(n) {
    return this.getChildContext = function() {
        return n.context
    }, n.children
}

function Dt(n) {
    var e = this,
        t = n.i;
    e.componentWillUnmount = function() {
        fe(null, e.l), e.l = null, e.i = null
    }, e.i && e.i !== t && e.componentWillUnmount(), n.__v ? (e.l || (e.i = t, e.l = {
        nodeType: 1,
        parentNode: t,
        childNodes: [],
        appendChild: function(r) {
            this.childNodes.push(r), e.i.appendChild(r)
        },
        insertBefore: function(r, a) {
            this.childNodes.push(r), e.i.appendChild(r)
        },
        removeChild: function(r) {
            this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1), e.i.removeChild(r)
        }
    }), fe(I($t, {
        context: e.context
    }, n.__v), e.l)) : e.l && e.componentWillUnmount()
}

function _n(n, e) {
    var t = I(Dt, {
        __v: n,
        i: e
    });
    return t.containerInfo = e, t
}(J.prototype = new M).__a = function(n) {
    var e = this,
        t = ut(e.__v),
        r = e.o.get(n);
    return r[0]++,
        function(a) {
            var o = function() {
                e.props.revealOrder ? (r.push(a), Re(e, n, r)) : a()
            };
            t ? t(o) : o()
        }
}, J.prototype.render = function(n) {
    this.u = null, this.o = new Map;
    var e = re(n.children);
    n.revealOrder && n.revealOrder[0] === "b" && e.reverse();
    for (var t = e.length; t--;) this.o.set(e[t], this.u = [1, 0, this.u]);
    return n.children
}, J.prototype.componentDidUpdate = J.prototype.componentDidMount = function() {
    var n = this;
    this.o.forEach(function(e, t) {
        Re(n, t, e)
    })
};
var It = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103,
    jt = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    Rt = typeof document < "u",
    Ot = function(n) {
        return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/i : /fil|che|ra/i).test(n)
    };
M.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(n) {
    Object.defineProperty(M.prototype, n, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + n]
        },
        set: function(e) {
            Object.defineProperty(this, n, {
                configurable: !0,
                writable: !0,
                value: e
            })
        }
    })
});
var Oe = y.event;

function Lt() {}

function Ht() {
    return this.cancelBubble
}

function Nt() {
    return this.defaultPrevented
}
y.event = function(n) {
    return Oe && (n = Oe(n)), n.persist = Lt, n.isPropagationStopped = Ht, n.isDefaultPrevented = Nt, n.nativeEvent = n
};
var Le = {
        configurable: !0,
        get: function() {
            return this.class
        }
    },
    He = y.vnode;
y.vnode = function(n) {
    var e = n.type,
        t = n.props,
        r = t;
    if (typeof e == "string") {
        var a = e.indexOf("-") === -1;
        for (var o in r = {}, t) {
            var s = t[o];
            Rt && o === "children" && e === "noscript" || o === "value" && "defaultValue" in t && s == null || (o === "defaultValue" && "value" in t && t.value == null ? o = "value" : o === "download" && s === !0 ? s = "" : /ondoubleclick/i.test(o) ? o = "ondblclick" : /^onchange(textarea|input)/i.test(o + e) && !Ot(t.type) ? o = "oninput" : /^onfocus$/i.test(o) ? o = "onfocusin" : /^onblur$/i.test(o) ? o = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o) ? o = o.toLowerCase() : a && jt.test(o) ? o = o.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : s === null && (s = void 0), /^oninput$/i.test(o) && (o = o.toLowerCase(), r[o] && (o = "oninputCapture")), r[o] = s)
        }
        e == "select" && r.multiple && Array.isArray(r.value) && (r.value = re(t.children).forEach(function(i) {
            i.props.selected = r.value.indexOf(i.props.value) != -1
        })), e == "select" && r.defaultValue != null && (r.value = re(t.children).forEach(function(i) {
            i.props.selected = r.multiple ? r.defaultValue.indexOf(i.props.value) != -1 : r.defaultValue == i.props.value
        })), n.props = r, t.class != t.className && (Le.enumerable = "className" in t, t.className != null && (r.class = t.className), Object.defineProperty(r, "className", Le))
    }
    n.$$typeof = It, He && He(n)
};
var Ne = y.__r;
y.__r = function(n) {
    Ne && Ne(n), n.__c
};
const C = "https://instavid-1075375559878.us-east4.run.app",
    g = "instavid";
var Ft = 0;

function _(n, e, t, r, a) {
    var o, s, i = {};
    for (s in e) s == "ref" ? o = e[s] : i[s] = e[s];
    var u = {
        type: n,
        props: i,
        key: t,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: --Ft,
        __source: a,
        __self: r
    };
    if (typeof n == "function" && (o = n.defaultProps))
        for (s in o) i[s] === void 0 && (i[s] = o[s]);
    return y.vnode && y.vnode(u), u
}
const Vt = ({
    supportToken: n
}) => {
    const [e, t] = q(!1), r = () => {
        navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(n).then(() => {
            t(!0), setTimeout(() => t(!1), 2e3)
        }).catch(c => {
            console.error("Failed to copy:", c), a()
        }) : a()
    }, a = () => {
        const c = document.createElement("textarea");
        c.value = n, c.style.position = "fixed", c.style.left = "-999999px", c.style.top = "0", document.body.appendChild(c), c.focus(), c.select();
        try {
            document.execCommand("copy") && (t(!0), setTimeout(() => t(!1), 2e3))
        } catch (f) {
            console.error("Fallback copy failed:", f)
        }
        document.body.removeChild(c)
    }, o = {
        position: "fixed",
        top: "16px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 2147483647,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        pointerEvents: "none"
    }, s = {
        background: "rgba(15, 15, 15, 0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderRadius: "24px",
        padding: "6px 14px",
        boxShadow: "0 4px 24px rgba(0, 0, 0, 0.4)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        pointerEvents: "auto",
        whiteSpace: "nowrap"
    }, i = {
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: "11px",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.5px"
    }, u = {
        color: "#4a9eff",
        fontSize: "13px",
        fontWeight: 700,
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    }, l = {
        background: "transparent",
        border: "none",
        padding: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: e ? "#4ade80" : "rgba(255, 255, 255, 0.4)",
        borderRadius: "4px",
        transition: "all 0.2s ease"
    };
    return _("div", {
        className: "instasell-debug-overlay",
        style: o,
        children: _("div", {
            className: "instasell-debug-content",
            style: s,
            children: [_("div", {
                style: i,
                children: "Debug Session:"
            }), _("div", {
                style: u,
                children: n
            }), _("button", {
                onClick: r,
                style: l,
                title: "Copy Session ID",
                children: e ? _("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "3",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    children: _("polyline", {
                        points: "20 6 9 17 4 12"
                    })
                }) : _("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    children: [_("rect", {
                        x: "9",
                        y: "9",
                        width: "13",
                        height: "13",
                        rx: "2",
                        ry: "2"
                    }), _("path", {
                        d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
                    })]
                })
            })]
        })
    })
};
class Bt {
    debugMode = !1;
    supportSessionId = "";
    widgetVersion = "0.0.0";
    widgetHash = "unknown";
    shopDomain = "";
    environment = "prod";
    cachedDeviceInfo = null;
    eventTimestamps = [];
    MAX_EVENTS_PER_MINUTE = 100;
    overlayContainer = null;
    IPHONE_MODEL_MAP = {
        "iPhone14,7": "iPhone 14",
        "iPhone14,8": "iPhone 14 Plus",
        "iPhone15,2": "iPhone 14 Pro",
        "iPhone15,3": "iPhone 14 Pro Max",
        "iPhone15,4": "iPhone 15",
        "iPhone15,5": "iPhone 15 Plus",
        "iPhone16,1": "iPhone 15 Pro",
        "iPhone16,2": "iPhone 15 Pro Max",
        "iPhone17,3": "iPhone 16",
        "iPhone17,4": "iPhone 16 Plus",
        "iPhone17,1": "iPhone 16 Pro",
        "iPhone17,2": "iPhone 16 Pro Max",
        "iPhone17,5": "iPhone 16e",
        "iPhone18,1": "iPhone 17 Pro",
        "iPhone18,2": "iPhone 17 Pro Max",
        "iPhone18,3": "iPhone 17",
        "iPhone18,4": "iPhone Air"
    };
    constructor() {
        this.initialize()
    }
    initialize() {
        const e = new URLSearchParams(window.location.search);
        if (this.debugMode = e.get("instavid_debug") === "1", !this.debugMode) return;
        this.supportSessionId = this.generateSupportToken(), this.widgetVersion = "0.0.0", this.widgetHash = "23c6022", this.shopDomain = window.Shopify ? .shop || window.location.hostname;
        const t = "prod";
        this.environment = t, this.cachedDeviceInfo = this.getDeviceInfo(), this.renderOverlay()
    }
    generateSupportToken() {
        return "dbg_" + Math.random().toString(36).substring(2, 8).toUpperCase()
    }
    renderOverlay() {
        if (!this.debugMode || this.overlayContainer) return;
        const e = () => {
            try {
                this.overlayContainer = document.createElement("div"), this.overlayContainer.id = "instasell-debug-overlay-root", document.body.appendChild(this.overlayContainer), fe(I(Vt, {
                    supportToken: this.supportSessionId
                }), this.overlayContainer)
            } catch (t) {
                console.error("[Instasell Debug] Failed to render overlay:", t)
            }
        };
        document.readyState === "complete" || document.readyState === "interactive" ? setTimeout(e, 0) : window.addEventListener("DOMContentLoaded", e)
    }
    isDebugMode() {
        return this.debugMode
    }
    getSupportSessionId() {
        return this.supportSessionId
    }
    getWidgetVersion() {
        return this.widgetVersion
    }
    getWidgetHash() {
        return this.widgetHash
    }
    getShopDomain() {
        return this.shopDomain
    }
    getEnvironment() {
        return this.environment
    }
    getNetworkInfo() {
        const e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        return e ? {
            effectiveType: e.effectiveType,
            downlink: e.downlink,
            rtt: e.rtt
        } : {}
    }
    isRateLimited() {
        const e = Date.now(),
            t = e - 6e4;
        return this.eventTimestamps = this.eventTimestamps.filter(r => r > t), this.eventTimestamps.length >= this.MAX_EVENTS_PER_MINUTE ? (console.warn(`[Instasell Debug] Rate limit exceeded: ${this.MAX_EVENTS_PER_MINUTE} events/minute`), !0) : (this.eventTimestamps.push(e), !1)
    }
    emitEvent(e, t) {
        !this.debugMode || this.isRateLimited() || this.sendEventToLogs(e, t)
    }
    async sendEventToLogs(e, t) {
        if (!this.debugMode) return;
        const r = this.getNetworkInfo(),
            a = this.detectPlatform(),
            o = this.cachedDeviceInfo,
            s = {
                event: e,
                timestamp: Date.now(),
                support_session_id: this.supportSessionId,
                widget_version: this.widgetVersion,
                widget_hash: this.widgetHash,
                shop_domain: this.shopDomain,
                environment: this.environment,
                user_agent: navigator.userAgent,
                platform: a,
                network: Object.keys(r).length > 0 ? r : void 0,
                device: o,
                data: t
            };
        try {
            fetch(`${C}/_/DebugEvent`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(s),
                keepalive: !0
            }).catch(i => {
                console.error("Failed to send debug event:", i)
            })
        } catch (i) {
            console.error("Error sending debug event:", i)
        }
    }
    detectPlatform() {
        const e = navigator.userAgent;
        return /iPhone|iPad|iPod/.test(e) ? "iOS" : /Android/.test(e) ? "Android" : /Macintosh/.test(e) ? "macOS" : /Windows NT/.test(e) ? "Windows" : /CrOS/.test(e) ? "ChromeOS" : "Desktop"
    }
    getDeviceInfo() {
        const e = navigator.userAgent,
            t = this.detectPlatform();
        let r = "Unknown",
            a;
        if (e.includes("Edg/")) {
            r = "Edge";
            const p = e.match(/Edg\/([\d.]+)/);
            p && (a = p[1])
        } else if (e.includes("Chrome/") && !e.includes("Edg/")) {
            r = "Chrome";
            const p = e.match(/Chrome\/([\d.]+)/);
            p && (a = p[1])
        } else if (e.includes("Safari/") && !e.includes("Chrome/")) {
            r = "Safari";
            const p = e.match(/Version\/([\d.]+)/);
            p && (a = p[1])
        } else if (e.includes("Firefox/")) {
            r = "Firefox";
            const p = e.match(/Firefox\/([\d.]+)/);
            p && (a = p[1])
        } else if (e.includes("Opera/") || e.includes("OPR/")) {
            r = "Opera";
            const p = e.match(/(?:Opera|OPR)\/([\d.]+)/);
            p && (a = p[1])
        } else if (e.includes("SamsungBrowser/")) {
            r = "Samsung Internet";
            const p = e.match(/SamsungBrowser\/([\d.]+)/);
            p && (a = p[1])
        }
        let o, s;
        if (t === "iOS") {
            const p = e.match(/OS ([\d_]+)/);
            if (p && (s = `iOS ${p[1].replace(/_/g,".")}`), e.includes("iPhone")) {
                const h = e.match(/iPhone(\d+,\d+)/);
                if (h) {
                    const b = `iPhone${h[1]}`;
                    o = this.IPHONE_MODEL_MAP[b] || `iPhone ${h[1]}`
                } else o = "iPhone"
            } else if (e.includes("iPad")) {
                o = "iPad";
                const h = e.match(/iPad(\d+,\d+)/);
                h && (o = `iPad ${h[1]}`)
            } else e.includes("iPod") && (o = "iPod")
        } else if (t === "Android") {
            const p = e.match(/Android ([\d.]+)/);
            p && (s = `Android ${p[1]}`);
            const h = e.match(/; ([^;)]+)\)/);
            h && (o = h[1].trim().replace(/Build\/.*$/, "").replace(/wv\)/, "").trim(), o && o.length < 50 || (o = void 0))
        } else if (t === "macOS") {
            const p = e.match(/Mac OS X ([\d_]+)/);
            p ? s = `macOS ${p[1].replace(/_/g,".")}` : s = "macOS", o = "Mac"
        } else if (t === "Windows") {
            const p = e.match(/Windows NT ([\d.]+)/);
            if (p) {
                const h = p[1],
                    v = {
                        "10.0": "10/11",
                        "6.3": "8.1",
                        "6.2": "8",
                        "6.1": "7"
                    }[h];
                s = v ? `Windows ${v}` : `Windows NT ${h}`
            } else s = "Windows";
            o = "PC"
        } else o = "Desktop";
        const i = window.screen.width || 0,
            u = window.screen.height || 0,
            l = window.innerWidth || 0,
            c = window.innerHeight || 0,
            f = window.devicePixelRatio || 1,
            m = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        let d;
        if (window.screen.orientation) d = window.screen.orientation.type.split("-")[0];
        else if (typeof window.orientation == "number") {
            const p = window.orientation;
            d = p === 0 || p === 180 ? "portrait" : "landscape"
        } else d = l > c ? "landscape" : "portrait";
        return {
            platform: t,
            browser: r,
            browserVersion: a,
            deviceModel: o,
            osVersion: s,
            screenWidth: i,
            screenHeight: u,
            viewportWidth: l,
            viewportHeight: c,
            devicePixelRatio: f,
            isTouchDevice: m,
            orientation: d
        }
    }
}

function D() {
    const n = window;
    return n.__InstasellDebugManager || (n.__InstasellDebugManager = new Bt), n.__InstasellDebugManager
}

function j(n, e, t) {
    const r = D();
    if (!r.isDebugMode()) return;
    const a = Math.round(performance.now()),
        o = t ? ? a,
        s = window.__INSTASELL_TIMING__;
    r.emitEvent("carousel_timing", {
        label: n,
        event_at_ms: o,
        observed_at_ms: a,
        time_from_bootstrap_ms: s ? .bootstrapAt === void 0 ? void 0 : o - Math.round(s.bootstrapAt),
        time_from_load_decision_ms: s ? .decisionAt === void 0 ? void 0 : o - Math.round(s.decisionAt),
        time_from_load_trigger_ms: s ? .loadTriggeredAt === void 0 ? void 0 : o - Math.round(s.loadTriggeredAt),
        ...e
    })
}

function hn() {
    if (!D().isDebugMode()) return;
    const n = window.__INSTASELL_TIMING__;
    if (!!n) {
        if (n.bootstrapAt !== void 0) {
            const e = Math.round(n.bootstrapAt);
            j("bootstrap executed (liquid)", {
                phase: "bootstrap",
                bootstrap_at_ms: e
            }, e)
        }
        if (n.decisionAt !== void 0) {
            const e = Math.round(n.decisionAt);
            j(`load decision: ${n.decisionReason}`, {
                phase: "load_decision",
                reason: n.decisionReason,
                decision_at_ms: e,
                time_from_bootstrap_ms: n.bootstrapAt === void 0 ? void 0 : e - Math.round(n.bootstrapAt)
            }, e)
        }
        if (n.loadTriggeredAt !== void 0) {
            const e = Math.round(n.loadTriggeredAt);
            j("loadCarousel() triggered (liquid)", {
                phase: "load_triggered",
                load_triggered_at_ms: e,
                time_from_decision_ms: n.decisionAt === void 0 ? void 0 : e - Math.round(n.decisionAt),
                time_from_bootstrap_ms: n.bootstrapAt === void 0 ? void 0 : e - Math.round(n.bootstrapAt)
            }, e)
        }
    }
}
const Wt = ["short-videos/index.js", "short-videos/index.css", "short-videos/index2.js"];
async function Ut(n) {
    try {
        const e = await fetch(n, {
            cache: "force-cache",
            credentials: "omit"
        });
        return e.ok ? (await e.blob()).size : void 0
    } catch {
        return
    }
}

function yn() {
    if (!D().isDebugMode() || !("PerformanceObserver" in window)) return;
    const n = {};

    function e(t) {
        for (const r of Wt) t.name.indexOf(r) !== -1 && !n[t.name] && (n[t.name] = !0, (async () => {
            const a = Math.round(t.startTime),
                o = Math.round(t.responseEnd),
                s = Math.round(t.duration),
                i = t.encodedBodySize > 0 || t.decodedBodySize > 0,
                u = i ? t.decodedBodySize : await Ut(t.name);
            j(`network: ${r}`, {
                phase: "resource_loaded",
                resource: r,
                url: t.name,
                started_at_ms: a,
                finished_at_ms: o,
                duration_ms: s,
                initiator_type: t.initiatorType,
                transfer_size_bytes: t.transferSize,
                encoded_body_size_bytes: t.encodedBodySize,
                decoded_body_size_bytes: t.decodedBodySize,
                measured_body_size_bytes: u,
                size_source: i ? "resource_timing" : u === void 0 ? "unavailable" : "debug_cache_read"
            }, o)
        })())
    }
    try {
        new PerformanceObserver(r => {
            r.getEntries().forEach(a => e(a))
        }).observe({
            type: "resource",
            buffered: !0
        })
    } catch {
        performance.getEntriesByType("resource").forEach(e)
    }
}
const ae = new Map;

function dt(n) {
    try {
        const e = n === "local" ? window.localStorage : window.sessionStorage,
            t = "__storage_test__";
        return e.setItem(t, "1"), e.removeItem(t), e
    } catch {
        return null
    }
}

function L(n, e = "local") {
    const t = `${e}:${n}`;
    if (ae.has(t)) return ae.get(t) ? ? null;
    try {
        const r = dt(e);
        if (r) return r.getItem(n)
    } catch (r) {
        console.warn(`[safeStorage] Failed to get "${n}" from ${e}Storage:`, r)
    }
    return null
}

function ve(n, e, t = "local") {
    const r = `${t}:${n}`;
    try {
        const a = dt(t);
        if (a) return a.setItem(n, e), ae.set(r, e), !0
    } catch (a) {
        console.warn(`[safeStorage] Failed to set "${n}" in ${t}Storage:`, a)
    }
    return ae.set(r, e), !1
}

function wn() {
    const n = document.querySelector('link[rel="canonical"]') ? .getAttribute("href");
    try {
        if (n && n.startsWith("http")) return new URL(n).origin
    } catch {}
    return window.location.origin
}
const he = new Set;

function zt(n) {
    document.querySelectorAll(`[id^="video-structured-data-${n}"]`).forEach(t => t.remove()), he.delete(n)
}

function Gt(n) {
    if (!n.products || n.products.length === 0 || he.has(n.videoId)) return;
    zt(n.videoId);
    const e = n.products.filter(o => o.title && o.url && !o.url.endsWith("/products/")).map(o => {
        const s = {
            "@type": "Product",
            name: o.title,
            url: o.url
        };
        return o.image && (s.image = o.image), o.price && o.price !== "0" && (s.offers = {
            "@type": "Offer",
            price: o.price,
            priceCurrency: o.currency || "USD",
            availability: "https://schema.org/InStock"
        }), s
    });
    if (e.length === 0) return;
    const t = document.querySelector('link[rel="canonical"]') ? .getAttribute("href") || window.location.href,
        r = {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "@id": `${n.businessUrl}/#video-${n.videoId}`,
            name: n.title,
            description: n.description || n.title,
            thumbnailUrl: n.thumbnailUrl,
            uploadDate: n.uploadDate,
            contentUrl: n.videoUrl,
            mainEntityOfPage: {
                "@type": "WebPage",
                "@id": t
            },
            publisher: {
                "@type": "Organization",
                name: n.businessName,
                url: n.businessUrl
            },
            about: e.length === 1 ? e[0] : e
        },
        a = document.createElement("script");
    a.id = `video-structured-data-${n.videoId}`, a.type = "application/ld+json", a.textContent = JSON.stringify(r), document.head.appendChild(a), he.add(n.videoId)
}

function Xt(n, e, t, r) {
    if (!n || !n.m || n.m.length === 0) return null;
    const a = n.m[0],
        o = n.p || [];
    if (!a.v || !a.t) return null;
    const s = typeof n.c == "bigint" ? Number(n.c) : typeof n.c == "number" ? n.c : 0,
        i = r ? .() || (typeof window.Shopify < "u" ? window.Shopify ? .currency ? .active : null) || "USD";
    return {
        videoId: n.i || "",
        title: n.t || "Product Video",
        description: n.s || n.t || "Watch this product video",
        thumbnailUrl: a.t,
        videoUrl: a.v,
        uploadDate: new Date(s * 1e3).toISOString(),
        products: o.filter(u => u && u.i).map(u => {
            let l = u.p;
            (!l || l.trim() === "") && (u.h && u.h.trim() !== "" ? l = `${t}/products/${u.h}` : l = t);
            let c;
            return u.pr !== void 0 && u.pr !== null && u.pr > 0 && (c = u.pr.toString()), {
                productId: u.i || "",
                title: u.t || "Product",
                url: l,
                image: u.im || void 0,
                price: c,
                currency: i
            }
        }).filter(u => u.title && u.title !== ""),
        businessName: e,
        businessUrl: t
    }
}
let K = null,
    se = [],
    R = !1,
    ee = 0,
    F = null;
const Fe = 5,
    lt = 50;

function ie() {
    if (!F) {
        R = !1;
        return
    }
    const {
        videos: n,
        businessName: e,
        businessUrl: t,
        getCurrencyCode: r
    } = F, a = ee * Fe, o = Math.min(a + Fe, n.length);
    n.slice(a, o).forEach(i => {
        const u = Xt(i, e, t, r);
        u && u.products.length > 0 && Gt(u)
    }), ee++, o < n.length ? setTimeout(() => {
        typeof window < "u" && "requestIdleCallback" in window ? window.requestIdleCallback(() => ie(), {
            timeout: 1e3
        }) : setTimeout(() => ie(), 0)
    }, lt) : (F = null, ee = 0, R = !1, se.length > 0 && pt())
}

function pt() {
    if (!(R || se.length === 0)) {
        if (R = !0, F = se.shift() || null, ee = 0, !F) {
            R = !1;
            return
        }
        typeof window < "u" && "requestIdleCallback" in window ? window.requestIdleCallback(() => ie(), {
            timeout: 1e3
        }) : setTimeout(() => ie(), 0)
    }
}

function bn(n, e, t, r) {
    !n || n.length === 0 || (K && clearTimeout(K), K = setTimeout(() => {
        se.push({
            videos: n,
            businessName: e,
            businessUrl: t,
            getCurrencyCode: r
        }), R || pt(), K = null
    }, lt))
}
const Ve = ["/GetShortVideos", "/CheckCarousel"],
    vn = ["hyphen-mcaffeine.myshopify.com", "beyours-india.myshopify.com", "theluxurykase.myshopify.com", "4d032d-2.myshopify.com", "mantara-hardware.myshopify.com", "nysh-website.myshopify.com", "77cebf-2.myshopify.com"],
    ft = W(null);
class Jt {
    shopifyApiVersion = "2025-01";
    async shopifyGraphQL(e, t, r, a) {
        const o = await fetch(`https://${r}/api/${this.shopifyApiVersion}/graphql.json`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Shopify-Storefront-Access-Token": a
            },
            body: JSON.stringify({
                query: e,
                variables: t
            })
        });
        if (!o.ok) throw new Error(`Shopify GraphQL request failed: ${o.status} ${o.statusText}`);
        return o.json()
    }
    async createCartWithAttribution({
        productVariantId: e,
        quantity: t = 1,
        attributionToken: r,
        countryCode: a = "IN",
        customAttributes: o = [],
        shopDomain: s,
        storefrontAccessToken: i
    }) {
        const u = D(),
            l = Date.now();
        u.emitEvent("atc_start", {
            variant_id: e,
            quantity: t,
            method: "graphql",
            source: "api_service_create_cart"
        });
        try {
            const c = `
        mutation createCart($cartInput: CartInput!, $country: CountryCode!) @inContext(country: $country) {
          cartCreate(input: $cartInput) {
            cart {
              id
              createdAt
              lines(first: 10) {
                edges {
                  node {
                    id
                    quantity
                    merchandise {
                      ... on ProductVariant {
                        id
                        title
                        sku
                        price {
                          amount
                          currencyCode
                        }
                        product {
                          id
                          handle
                          title
                        }
                      }
                    }
                  }
                }
              }
              estimatedCost {
                totalAmount {
                  amount
                  currencyCode
                }
              }
              attributes {
                key
                value
              }
            }
            userErrors {
              field
              message
            }
          }
        }
      `,
                f = [...o];
            r && f.push({
                key: "instavid_attribution_token",
                value: r
            });
            const m = {
                country: a,
                cartInput: {
                    buyerIdentity: {
                        countryCode: a
                    },
                    ...f.length > 0 && {
                        attributes: f
                    },
                    lines: [{
                        quantity: t,
                        merchandiseId: e
                    }]
                }
            };
            u.emitEvent("atc_api_call", {
                endpoint: "Shopify GraphQL - cartCreate",
                method: "POST",
                variant_id: e
            });
            const d = await this.shopifyGraphQL(c, m, s, i);
            if (d.data.cartCreate.userErrors.length > 0) throw u.emitEvent("atc_error", {
                duration_ms: Date.now() - l,
                error_message: "GraphQL userErrors",
                user_errors: d.data.cartCreate.userErrors,
                method: "graphql"
            }), new Error(`Cart creation failed: ${JSON.stringify(d.data.cartCreate.userErrors)}`);
            return u.emitEvent("atc_success", {
                duration_ms: Date.now() - l,
                cart_id: d.data.cartCreate.cart.id,
                method: "graphql"
            }), d.data.cartCreate.cart.id
        } catch (c) {
            throw u.emitEvent("atc_error", {
                duration_ms: Date.now() - l,
                error_message: c ? .message || "Unknown error",
                method: "graphql"
            }), c
        }
    }
    async addItemToCartWithAttribution({
        cartId: e,
        productVariantId: t,
        quantity: r = 1,
        attributionToken: a,
        customAttributes: o = [],
        shopDomain: s,
        storefrontAccessToken: i
    }) {
        const u = D(),
            l = Date.now();
        u.emitEvent("atc_start", {
            cart_id: e,
            variant_id: t,
            quantity: r,
            method: "graphql",
            source: "api_service"
        });
        try {
            const c = `
        mutation addItemToCart($cartId: ID!, $lines: [CartLineInput!]!) {
          cartLinesAdd(cartId: $cartId, lines: $lines) {
            cart {
              id
              lines(first: 20) {
                edges {
                  node {
                    id
                    quantity
                    merchandise {
                      ... on ProductVariant {
                        id
                        title
                        sku
                        price {
                          amount
                          currencyCode
                        }
                        product {
                          id
                          handle
                          title
                        }
                      }
                    }
                  }
                }
              }
              estimatedCost {
                totalAmount {
                  amount
                  currencyCode
                }
              }
              attributes {
                key
                value
              }
            }
            userErrors {
              field
              message
            }
          }
        }
      `,
                f = [...o],
                m = {
                    cartId: e,
                    lines: [{
                        merchandiseId: t,
                        quantity: r,
                        ...f.length > 0 && {
                            attributes: f
                        }
                    }]
                };
            u.emitEvent("atc_api_call", {
                endpoint: "Shopify GraphQL - cartLinesAdd",
                method: "POST",
                variant_id: t,
                cart_id: e
            });
            const d = await this.shopifyGraphQL(c, m, s, i);
            if (d.data.cartLinesAdd.userErrors.length > 0) throw u.emitEvent("atc_error", {
                duration_ms: Date.now() - l,
                error_message: "GraphQL userErrors",
                user_errors: d.data.cartLinesAdd.userErrors,
                method: "graphql"
            }), new Error(`Add to cart failed: ${JSON.stringify(d.data.cartLinesAdd.userErrors)}`);
            return a && await this.updateCartAttributes(e, [{
                key: "instavid_attribution_token",
                value: a
            }], s, i), u.emitEvent("atc_success", {
                duration_ms: Date.now() - l,
                cart_id: d.data.cartLinesAdd.cart.id,
                method: "graphql"
            }), d.data.cartLinesAdd.cart.id
        } catch (c) {
            throw u.emitEvent("atc_error", {
                duration_ms: Date.now() - l,
                error_message: c ? .message || "Unknown error",
                method: "graphql"
            }), c
        }
    }
    async updateCartAttributes(e, t, r, a) {
        const o = `
      mutation updateCartAttributes($cartId: ID!, $attributes: [AttributeInput!]!) {
        cartAttributesUpdate(cartId: $cartId, attributes: $attributes) {
          cart {
            id
            attributes {
              key
              value
            }
          }
          userErrors {
            field
            message
          }
        }
      }
    `,
            s = {
                cartId: e,
                attributes: t
            },
            i = await this.shopifyGraphQL(o, s, r, a);
        if (i.data.cartAttributesUpdate.userErrors.length > 0) throw new Error(`Cart attributes update failed: ${JSON.stringify(i.data.cartAttributesUpdate.userErrors)}`);
        return i.data.cartAttributesUpdate.cart
    }
    async debugFetchJson(e, t, r) {
        const a = D(),
            o = Date.now();
        let s = 0;
        try {
            const i = await t();
            if (s = i.status, !(typeof r == "function" ? r(s) : s >= 200 && s < 300)) {
                const c = `Failed to fetch ${e}: ${s} ${i.statusText}`;
                throw new Error(c)
            }
            return await i.json()
        } catch (i) {
            throw a.emitEvent("error", {
                code: "API_FETCH_ERROR",
                message: i ? .message || "Unknown error",
                stage: "api_fetch"
            }), i
        } finally {
            const i = Date.now(),
                u = i - o,
                l = s !== 0 && (typeof r == "function" ? r(s) : s >= 200 && s < 300);
            a.emitEvent("api_fetch", {
                endpoint: e,
                start_ts: o,
                end_ts: i,
                status: s,
                ok: l,
                duration_ms: u
            }), Ve.includes(e) && j(`api: ${e}`, {
                status: s,
                ok: l,
                duration: u + "ms"
            })
        }
    }
    async debugHead(e, t, r) {
        const a = D(),
            o = Date.now();
        let s = 0,
            i;
        try {
            return i = await t(), s = i.status, r(s) || a.emitEvent("error", {
                code: "API_FETCH_ERROR",
                message: `Unexpected response status: ${s}`,
                stage: "api_fetch"
            }), {
                status: s,
                response: i
            }
        } catch (u) {
            return a.emitEvent("error", {
                code: "API_FETCH_ERROR",
                message: u ? .message || "Unknown error",
                stage: "api_fetch"
            }), {
                status: 0,
                response: void 0
            }
        } finally {
            const u = Date.now(),
                l = u - o,
                c = s !== 0 && r(s);
            a.emitEvent("api_fetch", {
                endpoint: e,
                start_ts: o,
                end_ts: u,
                status: s,
                ok: c,
                duration_ms: l
            }), Ve.includes(e) && j(`api: ${e}`, {
                status: s,
                ok: c,
                duration: l + "ms"
            })
        }
    }
    async getShortVideos({
        originFqdn: e,
        pageType: t,
        currentProductId: r,
        currentCollectionId: a,
        carouselName: o
    }) {
        const s = "/GetShortVideos",
            i = new URLSearchParams({
                origin_fqdn: e,
                page_type: t,
                ...r && {
                    current_product_id: r
                },
                ...a && {
                    current_collection_id: a
                },
                ...o && {
                    carousel_name: o
                }
            }).toString();
        return await this.debugFetchJson(s, () => fetch(`${C}/_/GetShortVideos?${i}`, {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        }))
    }
    async getVideoBanners({
        originFqdn: e,
        pageType: t,
        currentProductId: r,
        currentCollectionId: a
    }) {
        const o = "/GetBanners",
            s = new URLSearchParams({
                origin_fqdn: e,
                page_type: t,
                ...r && {
                    current_product_id: r
                },
                ...a && {
                    current_collection_id: a
                }
            }).toString();
        return await this.debugFetchJson(o, () => fetch(`${C}/_/GetBanners?${s}`, {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        }))
    }
    async checkVideoBannersExist(e) {
        const t = "/CheckBanners",
            r = Object.entries(e).filter(([i, u]) => u !== void 0).reduce((i, [u, l]) => ({ ...i,
                [u]: l.toString()
            }), {}),
            a = new URLSearchParams(r).toString(),
            o = `${C}/_/CheckBanners?${a}`,
            {
                status: s
            } = await this.debugHead(t, () => fetch(o, {
                method: "HEAD"
            }), i => i === 200 || i === 204);
        return s === 200 ? !0 : (s === 204, !1)
    }
    async checkVideosExist(e) {
        const t = "/CheckCarousel",
            r = { ...e,
                originHostName: window.location.hostname
            },
            a = Object.entries(r).filter(([p, h]) => h != null).map(([p, h]) => `${p}=${encodeURIComponent(h)}`).join("&"),
            o = `${C}/_/CheckCarousel?${a}`,
            {
                status: s,
                response: i
            } = await this.debugHead(t, () => fetch(o, {
                method: "HEAD"
            }), p => p === 200 || p === 204);
        if (s !== 200 || !i) return s === 204 ? {
            exists: !1
        } : {
            exists: !1
        };
        const u = Array.from(i.headers.entries()),
            l = p => {
                const h = p.toLowerCase();
                for (const [b, v] of u)
                    if (b.toLowerCase() === h) return v;
                return null
            };
        console.log("Response headers:", Array.from(i.headers.entries()));
        const c = l("X-Single-Video"),
            f = c === "true",
            d = l("X-Has-Default-Video-Pip") === "true";
        return console.log("X-Single-Video header:", c), console.log("Parsed isSingleVideo:", f), {
            exists: !0,
            isSingleVideo: f,
            hasDefaultVideoPip: d
        }
    }
    async checkStoriesExist(e) {
        const t = "/CheckStory",
            r = { ...e,
                originHostName: window.location.hostname
            },
            a = Object.entries(r).filter(([u, l]) => l !== void 0).reduce((u, [l, c]) => ({ ...u,
                [l]: c.toString()
            }), {}),
            o = new URLSearchParams(a).toString(),
            s = `${C}/_/CheckStory?${o}`,
            {
                status: i
            } = await this.debugHead(t, () => fetch(s, {
                method: "HEAD"
            }), u => u === 200 || u === 204);
        return i === 200 ? !0 : (i === 204, !1)
    }
    async shortVideosBoron(e) {
        const t = { ...e,
            sessionToken: localStorage ? .getItem("__IS_STOK") ? ? "",
            viewerToken: localStorage ? .getItem("__IS_VTOK") ? ? ""
        };
        return await (await fetch(`${C}/_/ShortVideosBoron`, {
            method: "POST",
            body: JSON.stringify(t),
            keepalive: !0
        })).json()
    }
    async getProductDetails(e) {
        const t = await fetch(`${C}/_/GetProductDetails`, {
            method: "POST",
            body: JSON.stringify({
                productId: e
            })
        });
        return t.ok || console.log(`%cFailed to fetch product details ${t.statusText}`, "color: red;"), t.json()
    }
    async getStories({
        originFqdn: e,
        pageType: t,
        pageId: r,
        customPageRoute: a,
        originHostName: o
    }) {
        const s = "/GetStories",
            i = new URLSearchParams({
                origin_fqdn: e,
                page_type: t,
                customPageRoute: a ? ? "",
                ...r && {
                    page_id: r
                },
                ...o && {
                    originHostName: o
                }
            }).toString();
        return await this.debugFetchJson(s, () => fetch(`${C}/_/GetStories?${i}`, {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        }))
    }
    async getHighlights({
        originFqdn: e,
        pageType: t,
        pageId: r,
        originHostName: a
    }) {
        const o = new URLSearchParams({
                origin_fqdn: e,
                page_type: t,
                ...r && {
                    page_id: r
                },
                ...a && {
                    originHostName: a
                }
            }).toString(),
            s = await fetch(`${C}/_/GetHighlights?${o}`, {
                method: "GET",
                headers: {
                    Accept: "application/json"
                }
            });
        return s.ok || console.log(`%cFailed to fetch highlights banners ${s.statusText}`, "color: red;"), await s.json()
    }
    async getViewerToken({
        originFqdn: e
    }) {
        const t = {
            originFqdn: e
        };
        return await (await fetch(`${C}/_/GetViewerToken`, {
            method: "POST",
            body: JSON.stringify(t)
        })).json()
    }
    async getLibraryVideos({
        originFqdn: e,
        viewerToken: t
    }) {
        const r = new URLSearchParams({
                origin_fqdn: e,
                ...t && {
                    viewer_token: t
                }
            }).toString(),
            a = await fetch(`${C}/_/GetLibraryVideos?${r}`, {
                method: "GET"
            });
        return a.ok || console.log(`%cFailed to fetch library videos ${a.statusText}`, "color: red;"), (await a.json()).v
    }
    async getVideoPop({
        originFqdn: e,
        pageType: t,
        currentProductId: r,
        currentCollectionId: a
    }) {
        const o = "/GetVideoPop",
            s = new URLSearchParams({
                origin_fqdn: e,
                page_type: t,
                ...r && {
                    current_product_id: r
                },
                ...a && {
                    current_collection_id: a
                },
                originHostName: window.location.hostname
            }).toString();
        return await this.debugFetchJson(o, () => fetch(`${C}/_/GetVideoPop?${s}`, {
            method: "GET"
        }))
    }
    async checkStock({
        productId: e,
        variantId: t
    }) {
        try {
            console.log(`%c[CheckStock] Making request to ${C}/_/CheckStock`, "color: blue;"), console.log("%c[CheckStock] Request body:", "color: blue;", {
                productId: e,
                variantId: t
            });
            const r = await fetch(`${C}/_/CheckStock`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    productId: e,
                    variantId: t
                })
            });
            if (console.log(`%c[CheckStock] Response status: ${r.status} ${r.statusText}`, "color: blue;"), console.log("%c[CheckStock] Response headers:", "color: blue;", Array.from(r.headers.entries())), !r.ok) {
                const o = await r.text();
                throw console.log(`%c[CheckStock] Error response body: ${o}`, "color: red;"), new Error(`Stock check failed: ${r.status} ${r.statusText} - ${o}`)
            }
            const a = await r.json();
            return console.log("%c[CheckStock] Success:", "color: green;", a), a.stock
        } catch (r) {
            throw console.log(`%c[CheckStock] Fetch error: ${r}`, "color: red;"), r
        }
    }
    async getFormForVideo({
        originFqdn: e,
        videoId: t
    }) {
        try {
            const r = new URLSearchParams({
                    origin_fqdn: e,
                    video_id: t
                }).toString(),
                a = await fetch(`${C}/_/GetFormForVideo?${r}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json"
                    }
                });
            return a.status === 204 || !a.ok ? null : await a.json()
        } catch {
            return null
        }
    }
    async submitFormResponse(e) {
        const t = await fetch(`${C}/_/SubmitFormResponse`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(e)
        });
        if (!t.ok) throw new Error(`SubmitFormResponse failed: ${t.status}`);
        return await t.json()
    }
    async getPollForVideo({
        originFqdn: e,
        videoId: t
    }) {
        try {
            const r = new URLSearchParams({
                    origin_fqdn: e,
                    video_id: t
                }).toString(),
                a = await fetch(`${C}/_/GetPollForVideo?${r}`, {
                    method: "GET",
                    headers: {
                        Accept: "application/json"
                    }
                });
            return a.status === 204 || !a.ok ? null : await a.json()
        } catch {
            return null
        }
    }
    async submitPollVote(e) {
        const t = await fetch(`${C}/_/SubmitPollVote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(e)
        });
        if (!t.ok) throw new Error(`SubmitPollVote failed: ${t.status}`);
        return await t.json()
    }
    async getQuizForVideo({
        originFqdn: e,
        videoId: t
    }) {
        const r = new URLSearchParams({
            origin_fqdn: e,
            video_id: t
        }).toString();
        try {
            const a = await fetch(`${C}/_/GetQuizForVideo?${r}`, {
                method: "GET",
                headers: {
                    Accept: "application/json"
                }
            });
            return a.status === 204 || !a.ok ? null : await a.json()
        } catch {
            return null
        }
    }
    async submitQuizResponse(e) {
        const t = await fetch(`${C}/_/SubmitQuizResponse`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(e)
        });
        if (!t.ok) throw new Error(`SubmitQuizResponse failed: ${t.status}`);
        return await t.json()
    }
}
const Kt = new Jt,
    gn = xt(({
        children: n
    }) => {
        const e = we(() => Kt, []);
        return _(ft.Provider, {
            value: e,
            children: n
        })
    }),
    ge = () => z(ft),
    Sn = n => !n || typeof n != "object" ? !1 : !n.is,
    kn = n => !n || !Array.isArray(n) || n.length === 0 ? !1 : !n.some(t => t.is === !0),
    Cn = () => {
        if (typeof window > "u") return "";
        try {
            return localStorage.getItem("__IS_VTOK") || ""
        } catch {
            return ""
        }
    };

function mt() {
    try {
        return localStorage.getItem("wscc-show-modal") === "1"
    } catch {
        return !1
    }
}

function En() {
    try {
        if (!mt()) return null;
        const n = sessionStorage.getItem("wscc-data");
        return n && JSON.parse(n).currency || null
    } catch (n) {
        return console.error("Error reading WebRex currency:", n), null
    }
}

function Tn() {
    try {
        if (!mt()) return null;
        const n = sessionStorage.getItem("wscc-data"),
            e = sessionStorage.getItem("wscc-liveRates");
        if (!n || !e) return null;
        const t = JSON.parse(n),
            r = JSON.parse(e),
            a = t.currency,
            o = t.marketCurrency;
        if (a === o) return 1;
        const s = r[o],
            i = r[a];
        if (o === "USD") {
            if (i && i > 0) return i
        } else if (a === "USD") {
            if (s && s > 0) return s
        } else if (s && i && s > 0 && i > 0) return s / i;
        return null
    } catch (n) {
        return console.error("Error reading WebRex currency rate:", n), null
    }
}
const Be = n => `__IS_SUBMITTED_QUIZ_${n}`;

function qn({
    videoId: n,
    originFqdn: e,
    isActive: t
}) {
    const r = ge(),
        [a, o] = q(null),
        [s, i] = q("loading"),
        [u, l] = q(0),
        [c, f] = q({});
    if (ue(() => {
            if (!t) return;
            let v = !1;
            return i("loading"), r.getQuizForVideo({
                originFqdn: e,
                videoId: n
            }).then(w => {
                if (!v)
                    if (w && w.qs && w.qs.length > 0) {
                        if (L(Be(w.i))) {
                            i("idle");
                            return
                        }
                        o(w), l(0), f({}), i("answering")
                    } else i("idle")
            }), () => {
                v = !0
            }
        }, [t, n]), !t || s === "idle" || s === "loading" || !a) return null;
    if (s === "done") return _("div", {
        class: "ins-quiz-pane ins-quiz-pane--done",
        children: _("p", {
            class: "ins-quiz-pane__thank-you",
            children: "\u{1F389} Thanks for completing the quiz!"
        })
    });
    const m = a.qs,
        d = m[u],
        p = u === m.length - 1,
        h = c[d.i],
        b = async () => {
            if (!h) return;
            i("submitting");
            const v = L("__IS_STOK") ? ? `anon-${Date.now()}`,
                w = Object.entries({ ...c,
                    [d.i]: h
                }).map(([S, E]) => ({
                    question_id: S,
                    option_id: E
                }));
            try {
                await r.submitQuizResponse({
                    quiz_id: a.i,
                    session_id: v,
                    origin_fqdn: e,
                    answers: w
                })
            } catch {}
            ve(Be(a.i), "1"), i("done")
        };
    return _("div", {
        class: "ins-quiz-pane",
        children: [_("div", {
            class: "ins-quiz-pane__progress",
            children: m.length > 1 && _("span", {
                class: "ins-quiz-pane__counter",
                children: [u + 1, " / ", m.length]
            })
        }), _("p", {
            class: "ins-quiz-pane__question",
            children: d.t
        }), _("div", {
            class: "ins-quiz-pane__options",
            children: d.op.map(v => _("button", {
                class: `ins-quiz-pane__option${h===v.i?" ins-quiz-pane__option--selected":""}`,
                onClick: w => {
                    w.stopPropagation(), f(S => ({ ...S,
                        [d.i]: v.i
                    }))
                },
                children: [_("span", {
                    class: "ins-quiz-pane__option-radio"
                }), _("span", {
                    class: "ins-quiz-pane__option-text",
                    children: v.t
                })]
            }, v.i))
        }), _("button", {
            class: `ins-quiz-pane__submit${h?"":" ins-quiz-pane__submit--disabled"}`,
            disabled: !h || s === "submitting",
            onClick: v => {
                v.stopPropagation(), p ? b() : l(w => w + 1)
            },
            children: s === "submitting" ? "Submitting\u2026" : p ? "Submit Quiz" : "Next"
        })]
    })
}
const We = n => `__IS_SUBMITTED_POLL_${n}`;

function Ue(n, e) {
    return n.op.reduce((t, r) => t + (e[r.i] ? ? r.c), 0)
}

function Pn({
    videoId: n,
    originFqdn: e,
    isActive: t
}) {
    const r = ge(),
        [a, o] = q(null),
        [s, i] = q("loading"),
        [u, l] = q(0),
        [c, f] = q(null),
        [m, d] = q({});
    if (ue(() => {
            if (!t) return;
            let w = !1;
            return i("loading"), r.getPollForVideo({
                originFqdn: e,
                videoId: n
            }).then(S => {
                if (!w)
                    if (S && S.qs && S.qs.length > 0) {
                        if (L(We(S.i))) {
                            i("idle");
                            return
                        }
                        const E = {};
                        for (const x of S.qs)
                            for (const A of x.op) E[A.i] = A.c;
                        o(S), d(E), l(0), f(null), i("voting")
                    } else i("idle")
            }), () => {
                w = !0
            }
        }, [t, n]), !t || s === "idle" || s === "loading" || !a) return null;
    const p = a.qs[u],
        h = Ue(p, m),
        b = w => {
            const S = Ue(p, m);
            return S === 0 ? 0 : Math.round((m[w] ? ? 0) / S * 100)
        },
        v = async () => {
            if (!c || s === "submitted") return;
            const w = L("__IS_STOK") ? ? `anon-${Date.now()}`;
            try {
                const E = await r.submitPollVote({
                        poll_id: a.i,
                        question_id: p.i,
                        option_id: c,
                        session_id: w,
                        origin_fqdn: e
                    }),
                    x = { ...m
                    };
                for (const A of E.counts) x[A.option_id] = A.count;
                d(x)
            } catch {
                d(E => ({ ...E,
                    [c]: (E[c] ? ? 0) + 1
                }))
            }
            u === a.qs.length - 1 ? (ve(We(a.i), "1"), i("submitted")) : (l(E => E + 1), f(null))
        };
    return _("div", {
        class: "ins-poll-pane",
        children: [_("p", {
            class: "ins-poll-pane__question",
            children: p.t
        }), _("div", {
            class: "ins-poll-pane__options",
            children: p.op.map(w => {
                const S = c === w.i,
                    E = b(w.i);
                return _("button", {
                    class: `ins-poll-pane__option${S?" ins-poll-pane__option--selected":""}`,
                    onClick: x => {
                        x.stopPropagation(), s !== "submitted" && f(w.i)
                    },
                    children: [_("div", {
                        class: "ins-poll-pane__option-row",
                        children: [_("span", {
                            class: "ins-poll-pane__option-radio"
                        }), _("span", {
                            class: "ins-poll-pane__option-text",
                            children: w.t
                        }), s === "submitted" && _("span", {
                            class: "ins-poll-pane__option-pct",
                            children: [E, "%"]
                        })]
                    }), s === "submitted" && _("div", {
                        class: "ins-poll-pane__bar-track",
                        children: _("div", {
                            class: "ins-poll-pane__bar-fill",
                            style: {
                                width: `${E}%`
                            }
                        })
                    })]
                }, w.i)
            })
        }), s === "submitted" ? _("p", {
            class: "ins-poll-pane__votes",
            children: [h, " vote", h !== 1 ? "s" : ""]
        }) : _("button", {
            class: `ins-poll-pane__submit${c?"":" ins-poll-pane__submit--disabled"}`,
            disabled: !c,
            onClick: w => {
                w.stopPropagation(), v()
            },
            children: "Vote"
        })]
    })
}
const ze = n => `__IS_SUBMITTED_FORM_${n}`,
    Ge = () => _("svg", {
        width: "22",
        height: "22",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [_("circle", {
            cx: "12",
            cy: "12",
            r: "11",
            stroke: "#888",
            "stroke-width": "1.5"
        }), _("path", {
            d: "M8 8l8 8M16 8l-8 8",
            stroke: "#888",
            "stroke-width": "1.5",
            "stroke-linecap": "round"
        })]
    });

function An({
    videoId: n,
    originFqdn: e,
    isActive: t
}) {
    const r = ge(),
        [a, o] = q(null),
        [s, i] = q("loading"),
        [u, l] = q({}),
        [c, f] = q({});
    if (ue(() => {
            if (!t) return;
            let d = !1;
            return i("loading"), r.getFormForVideo({
                originFqdn: e,
                videoId: n
            }).then(p => {
                if (!d)
                    if (p && p.fs && p.fs.length > 0) {
                        if (L(ze(p.i))) {
                            i("idle");
                            return
                        }
                        o(p), l({}), f({}), i("teaser")
                    } else i("idle")
            }), () => {
                d = !0
            }
        }, [t, n]), !t || s === "idle" || s === "loading" || !a) return null;
    if (s === "teaser") return _("div", {
        class: "ins-form-pane ins-form-pane--teaser",
        onClick: d => d.stopPropagation(),
        children: _("div", {
            class: "ins-form-pane__teaser-inner",
            children: [_("p", {
                class: "ins-form-pane__teaser-title",
                children: a.t
            }), _("p", {
                class: "ins-form-pane__teaser-subtitle",
                children: "Tell us a little about you \u2014 we'll handle the surprises!"
            }), _("button", {
                class: "ins-form-pane__teaser-btn",
                onClick: d => {
                    d.stopPropagation(), i("filling")
                },
                children: "Get Exclusive Discounts"
            })]
        })
    });
    if (s === "done") return _("div", {
        class: "ins-form-pane ins-form-pane--sheet",
        onClick: d => d.stopPropagation(),
        children: _("div", {
            class: "ins-form-pane__card",
            children: [_("button", {
                class: "ins-form-pane__close",
                onClick: d => {
                    d.stopPropagation(), i("idle")
                },
                children: _(Ge, {})
            }), _("div", {
                class: "ins-form-pane__done",
                children: [_("p", {
                    class: "ins-form-pane__done-title",
                    children: "Thank you for your response!"
                }), _("p", {
                    class: "ins-form-pane__done-subtitle",
                    children: "We're sending you exclusive offer details shortly, Happy shopping!"
                }), _("p", {
                    class: "ins-form-pane__done-emoji",
                    children: "\u{1F389}\u{1F64C}\u2728"
                })]
            })]
        })
    });
    const m = async d => {
        d ? .preventDefault(), d ? .stopPropagation();
        const p = {};
        let h = !1;
        for (const w of a.fs) !w.op && !u[w.i] ? .trim() && (p[w.i] = !0, h = !0);
        if (h) {
            f(p);
            return
        }
        i("submitting");
        const b = L("__IS_STOK") ? ? `anon-${Date.now()}`,
            v = a.fs.filter(w => u[w.i] ? .trim()).map(w => ({
                field_id: w.i,
                value: u[w.i].trim()
            }));
        try {
            await r.submitFormResponse({
                form_id: a.i,
                session_id: b,
                origin_fqdn: e,
                answers: v
            })
        } catch {}
        ve(ze(a.i), "1"), i("done")
    };
    return _("div", {
        class: "ins-form-pane ins-form-pane--sheet",
        onClick: d => d.stopPropagation(),
        children: [_("div", {
            class: "ins-form-pane__card",
            children: [_("button", {
                class: "ins-form-pane__close",
                onClick: d => {
                    d.stopPropagation(), i("teaser")
                },
                children: _(Ge, {})
            }), _("h3", {
                class: "ins-form-pane__sheet-title",
                children: a.t
            }), _("div", {
                class: "ins-form-pane__fields",
                children: a.fs.map(d => _("div", {
                    class: "ins-form-pane__field",
                    children: [_("label", {
                        class: "ins-form-pane__label",
                        children: [d.l, !d.op && _("span", {
                            class: "ins-form-pane__required",
                            children: "*"
                        })]
                    }), _("input", {
                        type: "text",
                        placeholder: d.l,
                        value: u[d.i] ? ? "",
                        onInput: p => {
                            l(h => ({ ...h,
                                [d.i]: p.target.value
                            })), p.target.value.trim() && f(h => ({ ...h,
                                [d.i]: !1
                            }))
                        },
                        onClick: p => p.stopPropagation(),
                        class: `ins-form-pane__input${c[d.i]?" ins-form-pane__input--error":""}`
                    }), c[d.i] && _("span", {
                        class: "ins-form-pane__error-msg",
                        children: "This field is required"
                    })]
                }, d.i))
            })]
        }), _("button", {
            type: "button",
            disabled: s === "submitting",
            class: "ins-form-pane__submit",
            onClick: d => {
                d.stopPropagation(), m(d)
            },
            children: s === "submitting" ? "Submitting\u2026" : "Submit Details"
        })]
    })
}
const Qt = ["#product-grid", "#CollectionProductGrid", "#main-collection-product-grid", ".collection-grid", ".collection__products", ".product-grid", ".products-grid", ".collection-product-grid", "[data-collection-product-grid]"],
    Zt = () => {
        for (const n of Qt) {
            const e = document.querySelector(n);
            if (e && e.children.length > 0) return Array.from(e.children)
        }
        return null
    },
    Yt = () => {
        const n = Array.from(document.querySelectorAll('a[href*="/products/"]')),
            e = new Map;
        for (const a of n) {
            let o = a;
            for (let s = 0; s < 6 && o; s++) {
                const i = o.parentElement;
                if (!i) break;
                i.children.length >= 2 && (e.has(i) || e.set(i, new Set), e.get(i).add(o)), o = i
            }
        }
        let t = null,
            r = null;
        for (const [a, o] of e.entries())(!r || o.size > r.size) && (t = a, r = o);
        return !t || !r || r.size < 2 ? null : Array.from(t.children).filter(a => r.has(a))
    },
    en = (n, e) => {
        if (n.length === 0) return -1;
        let t = 1,
            r = Math.round(n[0].getBoundingClientRect().top),
            a = 0;
        for (let o = 1; o < n.length; o++) {
            const s = Math.round(n[o].getBoundingClientRect().top);
            if (Math.abs(s - r) > 2) {
                if (t === e) break;
                t++, r = s
            }
            a = o
        }
        return a
    },
    tn = 2,
    nn = n => {
        const e = Zt() ? ? Yt();
        if (!e || e.length === 0) return !1;
        const t = en(e, tn),
            r = e[t];
        return !r || r === n ? !1 : (n.style.gridColumn = "1 / -1", n.style.flexBasis = "100%", n.style.width = "100%", r.insertAdjacentElement("afterend", n), !0)
    },
    rn = (n, e = 10) => {
        nn(n) || e <= 0 || setTimeout(() => rn(n, e - 1), 300)
    },
    on = n => {
        if (!n || n === "transparent") return !0;
        const e = n.match(/rgba?\(([^)]+)\)/);
        if (e) {
            const t = e[1].split(",").map(r => parseFloat(r.trim()));
            if (t.length === 4 && t[3] === 0) return !0
        }
        return !1
    },
    an = (n, e = ".ins-shoppable-video-with-heading") => {
        const t = n.matches(e) ? n : n.querySelector(e);
        if (!t) return !1;
        let r = n.parentElement;
        for (let a = 0; a < 8 && r; a++) {
            const o = window.getComputedStyle(r).backgroundColor;
            if (!on(o)) return t.style.setProperty("--instasell-section-bg", o), !0;
            r = r.parentElement
        }
        return !1
    },
    sn = (n, e = 10) => {
        an(n) || e <= 0 || setTimeout(() => sn(n, e - 1), 300)
    },
    xn = {
        display: "-webkit-box",
        minWidth: 0,
        maxWidth: "100%",
        maxHeight: "2.5em",
        margin: 0,
        overflow: "hidden",
        overflowWrap: "anywhere",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        fontSize: "inherit",
        lineHeight: "1.25",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 2
    },
    Mn = () => {
        const n = Et();
        return Tt(e => {
            n.current ? .(), n.current = void 0;
            const t = e ? .closest("button");
            if (!e || !t) return;
            let r = !1;
            const a = () => {
                if (r || (e.style.fontSize = "inherit", e.style.whiteSpace = "nowrap", !e.clientWidth || e.scrollWidth <= e.clientWidth)) return;
                const i = parseFloat(getComputedStyle(e).fontSize),
                    u = Math.min(12, i);
                let l = Math.max(u, i * .9);
                for (e.style.whiteSpace = "normal", e.style.fontSize = `${l}px`;
                    (e.scrollHeight > e.clientHeight + 1 || e.scrollWidth > e.clientWidth) && l > u;) l = Math.max(u, l - .5), e.style.fontSize = `${l}px`
            };
            a();
            const o = new ResizeObserver(a);
            o.observe(t), document.fonts ? .ready.then(a), document.fonts ? .addEventListener("loadingdone", a);
            const s = new MutationObserver(a);
            s.observe(e, {
                childList: !0,
                characterData: !0,
                subtree: !0
            }), n.current = () => {
                r = !0, o.disconnect(), s.disconnect(), document.fonts ? .removeEventListener("loadingdone", a)
            }
        }, [])
    },
    _t = W(null),
    $n = ({
        children: n
    }) => {
        const e = typeof window.gtag == "function",
            t = typeof window.dataLayer == "object" && Array.isArray(window.dataLayer),
            r = localStorage ? .getItem("__IS_VTOK") ? ? void 0,
            a = {
                trackImpression: (o, s, i = !1) => {
                    i && t ? window.dataLayer.push({
                        event: `impression_${g}`,
                        app_name: g,
                        widget: o,
                        page_Type: s,
                        viewer_Token: r
                    }) : !i && e && window.gtag("event", `impression_${g}`, {
                        app_name: g,
                        widget: o,
                        page_Type: s,
                        viewer_Token: r
                    })
                },
                trackClick: (o, s, i, u = !1) => {
                    u && t ? window.dataLayer.push({
                        event: `video_click_${g}`,
                        app_name: g,
                        widget: o,
                        page_Type: s,
                        viewer_Token: r,
                        video_url: i
                    }) : !u && e && window.gtag("event", `video_click_${g}`, {
                        app_name: g,
                        widget: o,
                        page_Type: s,
                        viewer_Token: r,
                        video_url: i
                    })
                },
                trackView: (o, s, i, u = !1) => {
                    u && t ? window.dataLayer.push({
                        event: `video_view_${g}`,
                        app_name: g,
                        widget: o,
                        page_Type: s,
                        viewer_Token: r,
                        video_url: i
                    }) : !u && e && window.gtag("event", `video_view_${g}`, {
                        app_name: g,
                        widget: o,
                        page_Type: s,
                        viewer_Token: r,
                        video_url: i
                    })
                },
                trackAddToCart: (o, s, i, u, l, c, f = !1) => {
                    f && t ? window.dataLayer.push({
                        event: `add_to_cart_${g}`,
                        app_name: g,
                        product_id: o,
                        widget: u,
                        page_Type: l,
                        viewer_Token: r,
                        video_url: c,
                        quantity: s,
                        variant_id: i
                    }) : !f && e && window.gtag("event", `add_to_cart_${g}`, {
                        app_name: g,
                        product_id: o,
                        widget: u,
                        page_Type: l,
                        viewer_Token: r,
                        video_url: c,
                        quantity: s,
                        variant_id: i
                    })
                }
            };
        return _(_t.Provider, {
            value: a,
            children: n
        })
    },
    Dn = () => z(_t),
    cn = async (n, e) => {
        const t = new FormData;
        t.append("id", n), t.append("quantity", "1"), t.append("sections", e), t.append("sections_url", window.location.pathname);
        try {
            const r = await fetch("/cart/add", {
                method: "POST",
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    Accept: "application/json"
                },
                body: t
            });
            if (!r.ok) return null;
            const a = await r.json();
            let o = a.sections ? .[e];
            if (!o) {
                const s = await fetch(`/?section_id=${e}`);
                s.ok && (o = await s.text())
            }
            return {
                json: a,
                html: o
            }
        } catch (r) {
            return console.error("AJAX Cart Error:", r), null
        }
    },
    ht = {
        selectors: {
            forms: ["#product-form-template--18762141761757__cc770632-b78d-42ab-89fe-7f766e1a3d7a", "#template--25223422673171__featured_collection_8jFDVT", "#quick-add-template--25223422673171__featured_collection_8jFDVT9865422536979", "product-form[data-section-id='template--25223422673171__featured_collection_8jFDVT'] form", 'form[action="/cart/add"]', ".product-item__action-list", "product-form form", ".shopify-product-form", ".product-form", "[data-product-form]", '[data-type="add-to-cart-form"]', "quick-add-product form", "product-form .shopify-product-form", 'form[id*="product-form-template"]', "form.main-product-form", 'form[class*="product-form-template"]'],
            buttons: ["#quick-add-template--25223422673171__featured_collection_8jFDVT9865422536979-submit", ".quick-add__submit", "product-item .addtocart-showbag", ".product-card__mobile-quick-buy-button", 'button[is="custom-button"]', 'button[data-action="add-to-cart"]', '.product-item__action-button[data-action="add-to-cart"]', "#product-form-template--18762141761757__cc770632-b78d-42ab-89fe-7f766e1a3d7a .Sd_addProduct", 'button[name="add"]', "button[data-atc-form]", ".t4s-product-form__submit", 'button[type="submit"][name="add"]', ".product-form__submit", ".js-product-button-add-to-cart", ".addtocart-showbag", ".tt-btn-addtocart", '.button--secondary[type="submit"]', "[data-add-to-cart]", ".add-to-cart-button", 'gp-product-button button[type="submit"][data-state="idle"]', ".quick-add__button[data-add-to-cart]", ".product-form__submit.button.button--full-width", "add-to-cart[data-variant-id]", 'button[type="submit"][name="add"].add-to-cart', "button.add-to-cart", "button[data-atc-text]", "button.add-to-cart.sf__btn"]
        },
        specialStores: {
            "hoindiacl.myshopify.com": {
                name: "HOIndia",
                handler: async (n, e) => {
                    try {
                        const t = document.querySelector('form[action="/cart/add"]');
                        if (!t) return !1;
                        const r = t.querySelector('input[name="id"]'),
                            a = t.querySelector('input[name="product-id"]'),
                            o = t.querySelector('input[name="properties[offer]"]');
                        if (!r) return !1;
                        const s = ['button[name="add"]', 'button[type="submit"]', ".add-to-cart-button", ".product-form__submit", ".quick-add__submit", ".atc-button", "button[data-cart-quantity]"];
                        let i = null;
                        for (const f of s)
                            if (i = t.querySelector(f), i) break;
                        if (!i) {
                            const f = t.parentElement;
                            if (f) {
                                for (const m of s)
                                    if (i = f.querySelector(m), i) break
                            }
                        }
                        if (!i)
                            for (const f of s) {
                                const m = document.querySelectorAll(f);
                                for (const d of m) {
                                    const p = t.closest(".product-form, .product, [data-product-id], .product-item"),
                                        h = d.closest(".product-form, .product, [data-product-id], .product-item");
                                    if (p && h && p === h) {
                                        i = d;
                                        break
                                    }
                                }
                                if (i) break;
                                if (m.length > 0) {
                                    i = m[0];
                                    break
                                }
                            }
                        if (!i) {
                            await new Promise(f => setTimeout(f, 300));
                            for (const f of s)
                                if (i = t.querySelector(f), i) break;
                            if (!i && t.parentElement) {
                                for (const f of s)
                                    if (i = t.parentElement.querySelector(f), i) break
                            }
                        }
                        if (!i) try {
                            T(t), t.querySelectorAll("[required]").forEach(d => {
                                d.removeAttribute("required")
                            });
                            const m = document.createElement("button");
                            return m.type = "submit", m.style.display = "none", t.appendChild(m), typeof t.requestSubmit == "function" ? t.requestSubmit() : t.submit(), setTimeout(() => {
                                m.remove()
                            }, 1e3), !0
                        } catch {
                            return !1
                        }
                        r.value = n, i.getAttribute("data-cart-quantity") && i.setAttribute("data-cart-quantity", n), e && a && (a.value = e), o && (o.removeAttribute("required"), o.classList.remove("required")), T(i), T(t), t.querySelectorAll("[required]").forEach(f => {
                            f.removeAttribute("required")
                        });
                        const c = [new MouseEvent("mousedown", {
                            bubbles: !0,
                            cancelable: !0
                        }), new MouseEvent("mouseup", {
                            bubbles: !0,
                            cancelable: !0
                        }), new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0
                        })];
                        for (const f of c) i.dispatchEvent(f), await new Promise(m => setTimeout(m, 50));
                        return !0
                    } catch {
                        return !1
                    }
                }
            },
            "beyours-india.myshopify.com": {
                name: "BeyoursNativeATC",
                handler: async (n, e) => {
                    try {
                        const t = document.querySelector('form.shopify-product-form[action="/cart/add"]');
                        if (!t) return console.log("[BeyoursATC] form not found"), !1;
                        let r = t.querySelector('input[name="id"]');
                        r || (r = document.createElement("input"), r.type = "hidden", r.name = "id", t.appendChild(r)), r.value = n;
                        const a = t.querySelector('input[name="product-id"]');
                        a && e && (a.value = e);
                        const o = t.querySelector("#AddToCart") || t.querySelector(".product-form__add-button.button") || t.querySelector('button[type="submit"][data-product-add-to-cart-button]');
                        if (!o) return console.log("[BeyoursATC] button not found"), !1;
                        T(t), T(o);
                        const s = [new MouseEvent("mousedown", {
                            bubbles: !0,
                            cancelable: !0
                        }), new MouseEvent("mouseup", {
                            bubbles: !0,
                            cancelable: !0
                        }), new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0
                        })];
                        for (const i of s) o.dispatchEvent(i), await new Promise(u => setTimeout(u, 50));
                        return !0
                    } catch (t) {
                        return console.log("[BeyoursATC] error", t), !1
                    }
                }
            },
            "mydesignation-store.myshopify.com": {
                name: "MyDesignation",
                handler: async n => {
                    const e = document.createElement("add-to-cart");
                    e.setAttribute("data-variant-id", n), e.style.display = "none", document.body.appendChild(e);
                    try {
                        const t = [new MouseEvent("mousedown", {
                            bubbles: !0,
                            cancelable: !0
                        }), new MouseEvent("mouseup", {
                            bubbles: !0,
                            cancelable: !0
                        }), new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0
                        })];
                        for (const r of t) e.dispatchEvent(r), await new Promise(a => setTimeout(a, 50));
                        return setTimeout(() => {
                            const r = document.getElementById("CartPopup");
                            r && r.classList.add("styles_active__")
                        }, 1e3), !0
                    } finally {
                        e.remove()
                    }
                }
            },
            "primal-gray.myshopify.com": {
                name: "PrimalGray",
                handler: async n => {
                    const e = document.querySelector('product-item form[action="/cart/add"]');
                    if (!e) return !1;
                    const t = e.querySelector('input[name="id"]');
                    t && (t.value = n);
                    const r = e.querySelector(".addtocart-showbag");
                    if (!r) return !1;
                    const a = [new MouseEvent("mousedown", {
                        bubbles: !0,
                        cancelable: !0
                    }), new MouseEvent("mouseup", {
                        bubbles: !0,
                        cancelable: !0
                    }), new MouseEvent("click", {
                        bubbles: !0,
                        cancelable: !0
                    })];
                    for (const o of a) r.dispatchEvent(o), await new Promise(s => setTimeout(s, 50));
                    return !0
                }
            },
            "dchica.myshopify.com": {
                name: "DChica",
                handler: async n => (await fetch("/cart/add.js", {
                    method: "POST",
                    body: `id=${n}`,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }), document.querySelector("#cart-icon-bubble") ? .click(), !0)
            },
            "in07qc-pz.myshopify.com": {
                name: "In07qcPz",
                handler: async n => {
                    try {
                        if (!(await fetch("/cart/add", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    Accept: "application/json"
                                },
                                body: JSON.stringify({
                                    id: n,
                                    quantity: 1
                                })
                            })).ok) return console.log("[In07qcPz] Add to cart failed"), !1;
                        const t = await fetch("/?sections=cart-drawer");
                        if (t.ok) {
                            const o = (await t.json())["cart-drawer"];
                            if (o) {
                                const s = document.querySelector("cart-drawer");
                                if (s) {
                                    const l = new DOMParser().parseFromString(o, "text/html").querySelector("cart-drawer");
                                    l && (s.innerHTML = l.innerHTML, s.classList.remove("is-empty"))
                                }
                            }
                        }
                        await new Promise(a => setTimeout(a, 100));
                        const r = document.querySelector("cart-drawer");
                        if (r && typeof r.open == "function") r.open();
                        else {
                            const a = document.querySelector("#cart-icon-bubble, .header__icon--cart, a[href='/cart'], [data-cart-toggle]");
                            a && a.click()
                        }
                        return !0
                    } catch (e) {
                        return console.log("[In07qcPz] Error:", e), !1
                    }
                }
            },
            "charmacy-india-store.myshopify.com": {
                name: "CharmacyIndia",
                handler: async (n, e, t) => {
                    if (!n || !e) return !1;
                    const r = window.Shopify ? .routes ? .root || "/";
                    if (t && !(await fetch(`${r}cart/update.js`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                attributes: {
                                    instavid_attribution_token: t
                                }
                            })
                        })).ok) return !1;
                    const a = new URLSearchParams({
                            form_type: "product",
                            utf8: "\u2713",
                            id: n,
                            "product-id": e,
                            quantity: "1"
                        }),
                        o = await fetch(`${r}cart/add.js`, {
                            method: "POST",
                            credentials: "same-origin",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                                "X-Requested-With": "XMLHttpRequest",
                                Accept: "application/json"
                            },
                            body: a.toString()
                        });
                    if (!o.ok) return !1;
                    try {
                        const s = await o.json();
                        document.dispatchEvent(new CustomEvent("ajaxProduct:added", {
                            detail: {
                                product: s
                            },
                            bubbles: !0
                        }))
                    } catch (s) {
                        console.error("CharmacyIndia: item added but drawer refresh failed", s)
                    }
                    return !0
                }
            },
            "bamboo-india-pune.myshopify.com": {
                name: "BambooIndiaPune",
                handler: async n => {
                    await fetch("/cart/add.js", {
                        method: "POST",
                        body: `id=${n}`,
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    });
                    const e = async () => {
                        const [t, r] = await Promise.all([fetch("/cart.js").then(l => l.json()), fetch("/cart?view=ajax-drawer").then(l => l.text())]), a = document.querySelector(".cart--external--total-items"), o = document.querySelector(".cart--external--total-price");
                        a && (a.textContent = t.item_count), o && (o.textContent = `Rs. ${(t.total_price/100).toFixed(2)}`);
                        const s = document.createElement("div");
                        s.innerHTML = r;
                        const i = s.querySelector(".cart--root"),
                            u = document.querySelector(".cart--root");
                        i && u && u.replaceWith(i), document.querySelectorAll('.cart--root a[href*="/cart/change"]').forEach(l => {
                            l.addEventListener("click", async c => {
                                c.preventDefault();
                                const f = new URL(l.href),
                                    m = f.searchParams.get("line"),
                                    d = f.searchParams.get("quantity");
                                m && d !== null && (await fetch("/cart/change.js", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        line: parseInt(m),
                                        quantity: parseInt(d)
                                    })
                                }), await e())
                            })
                        })
                    };
                    return await e(), document.querySelector(".header--cart-toggle") ? .click(), !0
                }
            },
            "perfora-care.myshopify.com": {
                name: "PerforaCare",
                handler: async (n, e) => {
                    try {
                        const t = document.createElement("form");
                        t.setAttribute("method", "post"), t.setAttribute("action", "/cart/add"), t.setAttribute("accept-charset", "UTF-8"), t.classList.add("form"), t.setAttribute("enctype", "multipart/form-data"), t.setAttribute("novalidate", "novalidate"), t.setAttribute("data-type", "add-to-cart-form"), t.style.display = "none", t.innerHTML = `
                        <input type="hidden" name="form_type" value="product">
                        <input type="hidden" name="utf8" value="\u2713">
                        <input type="hidden" name="id" value="${n}">
                        <button type="button" name="add" class="customaddbtn" data-sold-out-message="true">
                            <span class="atc-text">Add to cart</span>
                        </button>
                        <input type="hidden" name="product-id" value="${e||"7581284204751"}">
                        <input type="hidden" name="section-id" value="template--16095960694991__featured_collections_9mbR4c">
                    `, document.body.appendChild(t);
                        const r = t.querySelector(".customaddbtn");
                        if (!r) return !1;
                        if (typeof window.addToCartOnClick == "function") {
                            const a = {
                                preventDefault: function() {},
                                stopPropagation: function() {},
                                currentTarget: r,
                                target: r,
                                type: "click"
                            };
                            return window.addToCartOnClick(a), await new Promise(o => setTimeout(o, 2e3)), !0
                        } else {
                            const a = [new MouseEvent("mousedown", {
                                bubbles: !0,
                                cancelable: !0
                            }), new MouseEvent("mouseup", {
                                bubbles: !0,
                                cancelable: !0
                            }), new MouseEvent("click", {
                                bubbles: !0,
                                cancelable: !0
                            })];
                            for (const o of a) r.dispatchEvent(o), await new Promise(s => setTimeout(s, 50));
                            return !0
                        }
                    } catch {
                        return !1
                    } finally {
                        document.querySelectorAll('form[style="display: none;"]').forEach(r => r.remove())
                    }
                }
            },
            "attrangi1.myshopify.com": {
                name: "Attrangi",
                handler: async n => {
                    try {
                        return (await fetch("/cart/add.js", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            body: `id=${n}&quantity=1`
                        })).ok
                    } catch {
                        return !1
                    }
                }
            },
            "jccspx-1p.myshopify.com": {
                name: "JCCSPX",
                handler: async n => {
                    if (!(await fetch("/cart/add.js", {
                            method: "POST",
                            body: `id=${n}`,
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            }
                        })).ok) return !1;
                    const t = await fetch("/cart.json");
                    if (t.ok) {
                        const r = await t.json(),
                            a = document.getElementById("cart-count");
                        a && (a.textContent = (r.item_count || 0).toString())
                    }
                    return !0
                }
            },
            "56e65e-43.myshopify.com": {
                name: "Wellness Shop",
                handler: async n => {
                    const e = document.querySelector("add-to-cart");
                    if (!e) return !1;
                    const t = e.getAttribute("data-variant-id");
                    try {
                        e.setAttribute("data-variant-id", n), console.log("Variant ID set to:", n), await new Promise(a => requestAnimationFrame(a));
                        const r = new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0,
                            view: window
                        });
                        return e.dispatchEvent(r), await new Promise(a => setTimeout(a, 500)), !0
                    } finally {
                        t && e.setAttribute("data-variant-id", t)
                    }
                }
            },
            "ethnic-trends-by-shaheen.myshopify.com": {
                name: "EthnicTrendsByShaheen",
                handler: async (n, e) => {
                    try {
                        const r = document.querySelector("cart-drawer") ? .getSectionsToRender ? .().map(u => u.id) ? ? ["cart-drawer", "cart-icon-bubble"],
                            a = new FormData;
                        a.append("form_type", "product"), a.append("id", n), a.append("quantity", "1"), e && a.append("product-id", e), a.append("sections", r.join(",")), a.append("sections_url", window.location.pathname);
                        const o = await fetch("/cart/add.js", {
                                method: "POST",
                                headers: {
                                    Accept: "application/json",
                                    "X-Requested-With": "XMLHttpRequest"
                                },
                                body: a
                            }),
                            s = await o.json();
                        if (!o.ok || s ? .status) return !1;
                        await Promise.race([customElements.whenDefined("cart-drawer"), new Promise(u => setTimeout(u, 1500))]);
                        const i = document.querySelector("cart-drawer");
                        return typeof i ? .renderContents == "function" ? (i.renderContents(s), i.classList.remove("is-empty")) : document.querySelector("#cart-icon-bubble") ? .click(), !0
                    } catch {
                        return !1
                    }
                }
            },
            "buy-wavex.myshopify.com": {
                name: "BuyWavex",
                handler: async (n, e) => {
                    try {
                        const t = document.querySelector("cart-drawer"),
                            r = t ? .getSectionsToRender ? .().map(i => i.id) ? ? ["cart-drawer", "cart-icon-bubble"],
                            a = new FormData;
                        a.append("form_type", "product"), a.append("id", n), a.append("quantity", "1"), e && a.append("product-id", e), a.append("sections", r.join(",")), a.append("sections_url", window.location.pathname);
                        const o = await fetch("/cart/add.js", {
                                method: "POST",
                                headers: {
                                    Accept: "application/json",
                                    "X-Requested-With": "XMLHttpRequest"
                                },
                                body: a
                            }),
                            s = await o.json();
                        return !o.ok || s ? .status ? !1 : (typeof t ? .renderContents == "function" ? t.renderContents(s) : document.querySelector("#cart-icon-bubble, .cart-icon--drawer") ? .click(), !0)
                    } catch {
                        return !1
                    }
                }
            },
            "nytarranaturals.myshopify.com": {
                name: "NytarraNaturals",
                handler: async n => {
                    try {
                        const e = document.querySelector('form[id*="AddToCartForm-template"][action="/cart/add"]');
                        if (!e) return console.log("NytarraNaturals: Form not found"), !1;
                        const t = e.querySelector('select[name="id"]'),
                            r = e.querySelector('input[name="id"]'),
                            a = e.querySelector('button[type="submit"][name="add"][data-add-to-cart]');
                        if (!a) return console.log("NytarraNaturals: Button not found"), !1;
                        if (t) {
                            let s = t.querySelector(`option[value="${n}"]`);
                            if (!s) {
                                const i = document.createElement("option");
                                i.value = n, i.text = "_", i.selected = !0, t.appendChild(i), s = i
                            }
                            t.value = n, s && (s.selected = !0), t.dispatchEvent(new Event("change", {
                                bubbles: !0
                            })), t.dispatchEvent(new Event("input", {
                                bubbles: !0
                            }))
                        } else if (r) r.value = n;
                        else {
                            const s = document.createElement("input");
                            s.type = "hidden", s.name = "id", s.value = n, e.appendChild(s)
                        }
                        await new Promise(s => setTimeout(s, 100)), T(a), T(e);
                        const o = [new MouseEvent("mousedown", {
                            bubbles: !0,
                            cancelable: !0
                        }), new MouseEvent("mouseup", {
                            bubbles: !0,
                            cancelable: !0
                        }), new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0
                        })];
                        for (const s of o) a.dispatchEvent(s), await new Promise(i => setTimeout(i, 50));
                        return !0
                    } catch (e) {
                        return console.log(`%cNytarraNaturals cart handler error: ${e}`, "color: red;"), !1
                    }
                }
            },
            "6facc6-ae.myshopify.com": {
                name: "MyshkaaATC",
                handler: async n => {
                    console.log(`%c[MyshkaaATC] Starting addToCart with variantId: ${n}`, "color: blue; font-weight: bold;");
                    try {
                        const e = 'form[id*="product_form_"][action="/cart/add"]',
                            t = document.querySelector(e);
                        if (!t) {
                            const f = document.querySelectorAll("form[action*='/cart/add']"),
                                m = document.querySelectorAll('form[id*="product"]');
                            return f.length > 0, !1
                        }
                        let r = t.querySelector('input[name="id"]'),
                            a = t.querySelector('select[name="id"]');
                        if (a || (a = t.querySelector('#variant-selector, select.variant-selector, select[id*="variant"]')), !r && !a) {
                            const f = t.querySelectorAll("input"),
                                m = t.querySelectorAll("select");
                            return !1
                        }
                        a ? console.log(`%c[MyshkaaATC] \u2705 Variant select found. Current value: ${a.value}`, "color: green;") : r && console.log(`%c[MyshkaaATC] \u2705 Variant input found. Current value: ${r.value}`, "color: green;");
                        const o = ['button[data-quick-shop-trigger="quick-add"]', 'button[type="submit"][name="add"]', 'button[type="submit"]', 'button[name="add"]', ".product-form__submit", "button.add-to-cart", "button[data-add-to-cart]"];
                        let s = null,
                            i = "";
                        for (const f of o)
                            if (s = t.querySelector(f), s) {
                                i = f;
                                break
                            }
                        if (console.log("%c[MyshkaaATC] Button search result:", "color: blue;", s), !s) {
                            const f = t.querySelectorAll("button"),
                                m = Array.from(f).filter(d => d.type === "submit" || d.getAttribute("type") === "submit");
                            m.length > 0 && (s = m[0], i = "fallback: first submit button", console.log("%c[MyshkaaATC] Using fallback: first submit button found", "color: orange;"))
                        }
                        if (!s) {
                            const f = t.querySelectorAll("button");
                            return console.log("%c[MyshkaaATC] \u274C Button not found with any selector", "color: red; font-weight: bold;"), console.log(`%c[MyshkaaATC] Found ${f.length} buttons in form`, "color: orange;"), f.length > 0 && console.log("%c[MyshkaaATC] Available buttons:", "color: orange;", Array.from(f).map(m => ({
                                type: m.type,
                                name: m.name,
                                className: m.className,
                                text: m.textContent ? .trim().substring(0, 50),
                                dataAttributes: Array.from(m.attributes).filter(d => d.name.startsWith("data-")).map(d => `${d.name}="${d.value}"`)
                            }))), console.log("%c[MyshkaaATC] Returning false - Button not found", "color: red; font-weight: bold;"), !1
                        }
                        if (console.log(`%c[MyshkaaATC] \u2705 Button found using selector: ${i}`, "color: green;"), console.log(`%c[MyshkaaATC] \u2705 Button found. Current data-product-id: ${s.getAttribute("data-product-id")}`, "color: green;"), a) {
                            const f = a.value;
                            let m = a.querySelector(`option[value="${n}"]`);
                            m || (m = document.createElement("option"), m.value = n, m.text = "_", m.selected = !0, a.appendChild(m)), a.value = n, m && (m.selected = !0), a.dispatchEvent(new Event("change", {
                                bubbles: !0
                            })), a.dispatchEvent(new Event("input", {
                                bubbles: !0
                            }))
                        } else if (r) {
                            const f = r.value;
                            r.value = n
                        }
                        const u = s.getAttribute("data-product-id");
                        s.setAttribute("data-product-id", n), T(s), T(t);
                        const l = [new MouseEvent("mousedown", {
                            bubbles: !0,
                            cancelable: !0
                        }), new MouseEvent("mouseup", {
                            bubbles: !0,
                            cancelable: !0
                        }), new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0
                        })];
                        for (const f of l) s.dispatchEvent(f), await new Promise(m => setTimeout(m, 50));
                        const c = new CustomEvent("quick-shop-trigger", {
                            bubbles: !0,
                            cancelable: !0,
                            detail: {
                                productId: n
                            }
                        });
                        return s.dispatchEvent(c), !0
                    } catch {
                        return !1
                    }
                }
            },
            "green-protein-web.myshopify.com": {
                name: "GreenProteinWeb",
                handler: async (n, e) => {
                    try {
                        const t = new FormData;
                        t.append("form_type", "product"), t.append("utf8", "\u2713"), t.append("quantity", "1"), t.append("id", n), e && t.append("product-id", e);
                        const r = document.querySelector('form[action="/cart/add"]');
                        if (r) {
                            const i = r.querySelector('input[name="section-id"]');
                            i && i.value && t.append("section-id", i.value)
                        }
                        t.append("sections", "mini-cart");
                        const a = await fetch("/cart/add.js", {
                            method: "POST",
                            headers: {
                                "X-Requested-With": "XMLHttpRequest"
                            },
                            body: t
                        });
                        if (!a.ok) return console.log(`%cGreenProteinWeb: Cart add failed with status ${a.status}`, "color: red;"), !1;
                        const o = await a.json();
                        if (o.sections && o.sections["mini-cart"]) {
                            const i = o.sections["mini-cart"],
                                u = document.createElement("div");
                            u.innerHTML = i;
                            const l = u.querySelector("cart-drawer#mini-cart"),
                                c = document.querySelector("cart-drawer#mini-cart");
                            l && c && c.replaceWith(l)
                        }
                        document.dispatchEvent(new CustomEvent("cart:updated", {
                            bubbles: !0
                        })), window.dispatchEvent(new CustomEvent("cart:updated", {
                            bubbles: !0
                        })), await new Promise(i => setTimeout(i, 300));
                        const s = document.querySelector('a[href="/cart"][is="toggle-link"][aria-controls="mini-cart"]');
                        return s && s.click(), !0
                    } catch (t) {
                        return console.log(`%cGreenProteinWeb cart handler error: ${t}`, "color: red;"), !1
                    }
                }
            },
            "indethnic-brand.myshopify.com": {
                name: "IndEthnicATC",
                handler: async n => {
                    try {
                        const e = document.querySelector('form[id*="product_form_"][action="/cart/add"]');
                        if (!e) return console.log("IndEthnicBrand: Form not found"), !1;
                        const t = e.querySelector('input[name="id"]');
                        if (!t) return console.log("IndEthnicBrand: Variant input not found"), !1;
                        const r = e.querySelector('button[type="submit"].product-card__quick-add-button');
                        if (!r) return console.log("IndEthnicBrand: Button not found"), !1;
                        t.value = n;
                        let a = e.querySelector('input[name="on_success"]');
                        a || (a = document.createElement("input"), a.type = "hidden", a.name = "on_success", e.appendChild(a)), a.value = "force_open_drawer", T(r), T(e);
                        const o = [new MouseEvent("mousedown", {
                            bubbles: !0,
                            cancelable: !0
                        }), new MouseEvent("mouseup", {
                            bubbles: !0,
                            cancelable: !0
                        }), new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0
                        })];
                        for (const s of o) r.dispatchEvent(s), await new Promise(i => setTimeout(i, 50));
                        return !0
                    } catch (e) {
                        return console.log(`%cIndEthnicBrand cart handler error: ${e}`, "color: red;"), !1
                    }
                }
            },
            "manetain-store.myshopify.com": {
                name: "ManetainStore",
                handler: async n => (await fetch("/cart/add.js", {
                    method: "POST",
                    body: `id=${n}`,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }), document.querySelector("#flo-cart-icon") ? .click(), !0)
            },
            "origin-shop-official.myshopify.com": {
                name: "OriginShopOfficial",
                handler: async n => {
                    try {
                        const e = document.querySelector("add-to-cart");
                        if (e) {
                            const t = e.getAttribute("data-variant-id");
                            try {
                                e.setAttribute("data-variant-id", n), await new Promise(a => requestAnimationFrame(a));
                                const r = [new MouseEvent("mousedown", {
                                    bubbles: !0,
                                    cancelable: !0
                                }), new MouseEvent("mouseup", {
                                    bubbles: !0,
                                    cancelable: !0
                                }), new MouseEvent("click", {
                                    bubbles: !0,
                                    cancelable: !0
                                })];
                                for (const a of r) e.dispatchEvent(a), await new Promise(o => setTimeout(o, 50));
                                return await new Promise(a => setTimeout(a, 500)), !0
                            } finally {
                                t && e.setAttribute("data-variant-id", t)
                            }
                        } else {
                            const t = document.createElement("add-to-cart");
                            t.setAttribute("data-variant-id", n), t.className = "button button--small", t.appendChild(document.createTextNode("Add to cart"));
                            const r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                            r.setAttribute("class", "icon icon-cart"), r.setAttribute("aria-hidden", "true"), r.setAttribute("focusable", "false");
                            const a = document.createElementNS("http://www.w3.org/2000/svg", "use");
                            a.setAttribute("href", "#icon-cart"), r.appendChild(a), t.appendChild(r), t.style.display = "none", document.body.appendChild(t);
                            try {
                                await new Promise(s => requestAnimationFrame(s));
                                const o = [new MouseEvent("mousedown", {
                                    bubbles: !0,
                                    cancelable: !0
                                }), new MouseEvent("mouseup", {
                                    bubbles: !0,
                                    cancelable: !0
                                }), new MouseEvent("click", {
                                    bubbles: !0,
                                    cancelable: !0
                                })];
                                for (const s of o) t.dispatchEvent(s), await new Promise(i => setTimeout(i, 50));
                                return await new Promise(s => setTimeout(s, 500)), !0
                            } finally {
                                t.remove()
                            }
                        }
                    } catch (e) {
                        return console.log(`%cOriginShopOfficial cart handler error: ${e}`, "color: red;"), !1
                    }
                }
            },
            "the-sass-bar.myshopify.com": {
                name: "TheSassBar",
                handler: async (n, e) => {
                    try {
                        const t = new FormData;
                        t.append("form_type", "product"), t.append("utf8", "\u2713"), t.append("id", n), t.append("quantity", "1"), e && t.append("product-id", e), t.append("sections", "cart-items,cart-footer,cart-item-count"), t.append("sections_url", window.location.pathname);
                        const r = await fetch("/cart/add.js", {
                                method: "POST",
                                headers: {
                                    "X-Requested-With": "XMLHttpRequest",
                                    Accept: "application/json"
                                },
                                body: t
                            }),
                            a = await r.json();
                        if (!r.ok || a ? .status) return !1;
                        const o = a ? .sections;
                        return !o ? .["cart-items"] || !o ? .["cart-footer"] || !o ? .["cart-item-count"] ? !1 : (document.body.dispatchEvent(new CustomEvent("shapes:modalcart:afteradditem", {
                            bubbles: !0,
                            detail: {
                                response: a
                            }
                        })), !0)
                    } catch (t) {
                        return console.log(`%cThe Sass Bar cart handler error: ${t}`, "color: red;"), !1
                    }
                }
            },
            "nysh-website.myshopify.com": {
                name: "NyshWebsite",
                handler: async (n, e) => {
                    let t = !1;
                    try {
                        const r = new FormData;
                        r.append("form_type", "product"), r.append("utf8", "\u2713"), r.append("id", n), r.append("quantity", "1"), e && r.append("product-id", e);
                        const a = await fetch("/cart/add.js", {
                                method: "POST",
                                headers: {
                                    "X-Requested-With": "XMLHttpRequest",
                                    Accept: "application/json"
                                },
                                body: r
                            }),
                            o = await a.json();
                        if (!a.ok || o ? .status) return !1;
                        t = !0;
                        const s = window.Shopify ? .theme,
                            i = s ? .ajaxCart,
                            u = document.getElementById("cart-config");
                        if (i && typeof i.updateView == "function" && typeof i.showDrawer == "function" && typeof s ? .cart ? .getCart == "function" && u ? .textContent) {
                            const l = JSON.parse(u.textContent),
                                c = await s.cart.getCart();
                            i.showDrawer(l), i.updateView(l, c)
                        } else document.querySelector(".js-mini-cart-trigger") ? .click();
                        return !0
                    } catch (r) {
                        return console.log(`%cNYSH cart handler error: ${r}`, "color: red;"), t
                    }
                }
            },
            "haltnutrition.myshopify.com": {
                name: "HaltNutrition",
                handler: async n => {
                    try {
                        const e = document.querySelector("a.t4s-pr-addtocart[data-variant-id][data-action-atc]");
                        if (!e) return console.log("HaltNutrition: Add to cart button not found"), !1;
                        e.setAttribute("data-variant-id", n);
                        const t = [new MouseEvent("mousedown", {
                            bubbles: !0,
                            cancelable: !0
                        }), new MouseEvent("mouseup", {
                            bubbles: !0,
                            cancelable: !0
                        }), new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0
                        })];
                        for (const r of t) e.dispatchEvent(r), await new Promise(a => setTimeout(a, 50));
                        return !0
                    } catch (e) {
                        return console.log(`%cHaltNutrition cart handler error: ${e}`, "color: red;"), !1
                    }
                }
            },
            "vastramay.myshopify.com": {
                name: "Vastramay",
                handler: async (n, e) => {
                    try {
                        const t = document.querySelector('form[action="/cart/add"][data-type="add-to-cart-form"], form[id*="quick-add"][action="/cart/add"]');
                        if (t) {
                            let f = t.querySelector('input[name="id"]');
                            f || (f = document.createElement("input"), f.type = "hidden", f.name = "id", t.appendChild(f)), f.value = n;
                            const m = t.querySelector('input[name="product-id"]');
                            e && m && (m.value = e);
                            const d = t.querySelector('button[type="submit"].js-product-button-add-to-cart, button[data-js-product-button-add-to-cart]');
                            if (d) {
                                T(d), T(t);
                                for (const p of ["mousedown", "mouseup", "click"]) d.dispatchEvent(new MouseEvent(p, {
                                    bubbles: !0,
                                    cancelable: !0
                                })), await new Promise(h => setTimeout(h, 50));
                                return !0
                            }
                        }
                        const r = document.querySelector('form[action="/cart/add"][data-type="add-to-cart-form"]'),
                            a = e || r ? .querySelector('input[name="product-id"]') ? .value || "",
                            o = r ? .querySelector('input[name="section-id"]') ? .value || "",
                            s = document.createElement("form");
                        s.setAttribute("method", "post"), s.setAttribute("action", "/cart/add"), s.className = "form m-0", s.setAttribute("accept-charset", "UTF-8"), s.setAttribute("enctype", "multipart/form-data"), s.setAttribute("novalidate", "novalidate"), s.setAttribute("data-type", "add-to-cart-form"), s.setAttribute("data-js-product-form", ""), s.style.position = "absolute", s.style.left = "-99999px", s.innerHTML = `
            <input type="hidden" name="form_type" value="product" tabindex="0">
            <input type="hidden" name="utf8" value="\u2713" tabindex="0">
            <button type="submit" name="add" class="btn btn--status js-product-button-add-to-cart" data-js-product-button-add-to-cart tabindex="0">
              <span class="d-flex flex-center"><span class="btn__text">Add To Cart</span></span>
              <span class="d-flex flex-center" data-button-content="added">Added</span>
              <span class="d-flex flex-center" data-button-content="sold-out">Sold Out</span>
              <span class="d-flex flex-center" data-button-content="pre-order"><span class="btn__text">Pre-Order</span></span>
            </button>
          `;
                        const i = document.createElement("input");
                        i.type = "hidden", i.name = "id", i.value = n;
                        const u = document.createElement("input");
                        u.type = "hidden", u.name = "product-id", a && (u.value = a);
                        const l = document.createElement("input");
                        l.type = "hidden", l.name = "section-id", o && (l.value = o), s.appendChild(i), s.appendChild(u), s.appendChild(l), document.body.appendChild(s);
                        const c = s.querySelector("button.js-product-button-add-to-cart");
                        if (!c) return s.remove(), console.log("Vastramay: Temp button not created"), !1;
                        T(c), T(s);
                        for (const f of ["mousedown", "mouseup", "click"]) c.dispatchEvent(new MouseEvent(f, {
                            bubbles: !0,
                            cancelable: !0
                        })), await new Promise(m => setTimeout(m, 50));
                        return await new Promise(f => setTimeout(f, 300)), s.remove(), !0
                    } catch (t) {
                        return console.log(`%cVastramay cart handler error: ${t}`, "color: red;"), !1
                    }
                }
            },
            "ekadhi.myshopify.com": {
                name: "EkadhiJewels",
                handler: async (n, e) => {
                    try {
                        const t = document.querySelector('form[id*="product_form_"][action="/cart/add"].shopify-product-form');
                        if (!t) return console.log("EkadhiJewels: Form not found"), !1;
                        const r = t.querySelector('input[name="id"]');
                        if (!r) return console.log("EkadhiJewels: Variant input not found"), !1;
                        const a = t.querySelector('button[type="submit"].product-card__quick-add-button');
                        if (!a) return console.log("EkadhiJewels: Button not found"), !1;
                        if (r.value = n, e) {
                            const i = t.querySelector('input[name="product-id"]');
                            i && (i.value = e)
                        }
                        let o = t.querySelector('input[name="on_success"]');
                        o || (o = document.createElement("input"), o.type = "hidden", o.name = "on_success", t.appendChild(o)), o.value = "force_open_drawer", T(a), T(t);
                        const s = [new MouseEvent("mousedown", {
                            bubbles: !0,
                            cancelable: !0
                        }), new MouseEvent("mouseup", {
                            bubbles: !0,
                            cancelable: !0
                        }), new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0
                        })];
                        for (const i of s) a.dispatchEvent(i), await new Promise(u => setTimeout(u, 50));
                        return !0
                    } catch (t) {
                        return console.log(`%cEkadhiJewels cart handler error: ${t}`, "color: red;"), !1
                    }
                }
            },
            "artociti.myshopify.com": {
                name: "Artociti",
                handler: async n => (await fetch("/cart/add.js", {
                    method: "POST",
                    body: `id=${n}`,
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }), document.querySelector('a[href="/cart"][data-drawer-options]') ? .click(), !0)
            },
            "radboards.myshopify.com": {
                name: "Radboards",
                handler: async (n, e) => {
                    try {
                        const a = document.querySelector('form[action="/cart/add"], form[action*="/cart/add"]') ? .querySelector('input[name="section-id"]') ? .value || "",
                            o = new URLSearchParams;
                        if (o.append("form_type", "product"), o.append("utf8", "\u2713"), o.append("id", n), o.append("quantity", "1"), e && o.append("product-id", e), a && o.append("section-id", a), !(await fetch("/cart/add.js", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded",
                                    Accept: "*/*",
                                    "X-Requested-With": "XMLHttpRequest"
                                },
                                body: o.toString()
                            })).ok) return console.log("Radboards: Add to cart failed"), !1;
                        await new Promise(l => setTimeout(l, 1e3));
                        try {
                            const l = await fetch("/cart.json", {
                                method: "GET",
                                headers: {
                                    Accept: "application/json"
                                }
                            });
                            if (l.ok) {
                                const f = (await l.json()).item_count || 0,
                                    m = document.querySelector("[data-header-cart-count]");
                                m && (m.textContent = f.toString(), m.setAttribute("data-header-cart-count", f.toString()))
                            }
                        } catch (l) {
                            console.log(`%cRadboards: Failed to fetch cart.json: ${l}`, "color: orange;")
                        }
                        const i = await fetch("/?section_id=cart-helper", {
                            method: "GET",
                            headers: {
                                Accept: "*/*"
                            }
                        });
                        if (i.ok) {
                            const l = await i.text(),
                                c = document.createElement("div");
                            c.innerHTML = l;
                            const f = c.querySelector("cart-form#AjaxCartForm"),
                                m = c.querySelector("#AjaxCartSubtotal");
                            if (f) {
                                const h = document.querySelector("sidebar-drawer#site-cart-sidebar") ? .querySelector("cart-form#AjaxCartForm") || document.querySelector("cart-form#AjaxCartForm");
                                h && h.replaceWith(f)
                            }
                            if (m) {
                                const h = document.querySelector("sidebar-drawer#site-cart-sidebar") ? .querySelector("#AjaxCartSubtotal") || document.querySelector("#AjaxCartSubtotal");
                                h && h.replaceWith(m)
                            }
                            const d = c.querySelector("[data-header-cart-count]");
                            if (d) {
                                const p = document.querySelector("[data-header-cart-count]");
                                p && (p.textContent = d.textContent, p.setAttribute("data-header-cart-count", d.getAttribute("data-header-cart-count") || ""))
                            }
                            document.dispatchEvent(new CustomEvent("cart:updated", {
                                bubbles: !0
                            })), window.dispatchEvent(new CustomEvent("cart:updated", {
                                bubbles: !0
                            })), await new Promise(p => setTimeout(p, 200))
                        }
                        const u = document.querySelector("#cart-open-button");
                        if (u) {
                            u.click(), await new Promise(c => setTimeout(c, 100));
                            const l = document.querySelector("sidebar-drawer#site-cart-sidebar");
                            l && l.dispatchEvent(new CustomEvent("cart:updated", {
                                bubbles: !0
                            }))
                        }
                        return !0
                    } catch (t) {
                        return console.log(`%cRadboards cart handler error: ${t}`, "color: red;"), !1
                    }
                }
            },
            "phuljadi.myshopify.com": {
                name: "Phuljadi",
                handler: async (n, e) => {
                    try {
                        const a = document.querySelector('form[id*="product-form-template"][action="/cart/add"]') ? .querySelector('input[name="section-id"]') ? .value || "",
                            o = window.location.pathname,
                            s = new FormData;
                        if (s.append("form_type", "product"), s.append("utf8", "\u2713"), s.append("id", n), e && s.append("product-id", e), a && s.append("section-id", a), s.append("sections", "cart-drawer,cart-icon-bubble"), s.append("sections_url", o), !(await fetch("/cart/add", {
                                method: "POST",
                                headers: {
                                    Accept: "application/javascript",
                                    "X-Requested-With": "XMLHttpRequest"
                                },
                                body: s
                            })).ok) return console.log("Phuljadi: Add to cart failed"), !1;
                        const u = await fetch("/cart?section_id=cart-drawer", {
                            method: "GET",
                            headers: {
                                Accept: "*/*"
                            }
                        });
                        if (u.ok) {
                            const c = await u.text(),
                                f = document.querySelector("cart-drawer");
                            if (f) {
                                const m = document.createElement("div");
                                m.innerHTML = c;
                                const d = m.querySelector("cart-drawer");
                                d && f.replaceWith(d)
                            }
                        }
                        await new Promise(c => setTimeout(c, 300));
                        const l = document.querySelector("#cart-icon-bubble, a[href='/cart'].header__icon--cart");
                        return l && l.click(), !0
                    } catch (t) {
                        return console.log(`%cPhuljadi cart handler error: ${t}`, "color: red;"), !1
                    }
                }
            },
            "theluxurykase.myshopify.com": {
                name: "TheLuxuryKase",
                handler: async n => {
                    try {
                        console.log("[LuxuryKase] Adding to cart:", n);
                        const e = await cn(n, "cart-notification-product");
                        if (!e ? .html) return !1;
                        const t = document.getElementById("cart-notification-product");
                        t && (t.innerHTML = e.html);
                        try {
                            const r = await fetch("/cart.js");
                            if (r.ok) {
                                const a = await r.json(),
                                    o = document.getElementById("cart-notification-subtotal");
                                o && (o.textContent = "Rs. " + (a.total_price / 100).toFixed(2))
                            }
                        } catch {}
                        return document.querySelector(".empty__cart__item") ? .setAttribute("style", "display: none"), ["cart__items", "empty__cart__button", "item__success_message"].forEach(r => {
                            (document.getElementsByClassName(r)[0] || document.getElementById(r)) ? .classList.remove("no-js-inline")
                        }), document.getElementById("mini-cart-drawer") ? .classList.add("active"), document.querySelector("cart-notification") ? .renderContents ? .(e.json), console.log("[LuxuryKase] Drawer opened"), !0
                    } catch (e) {
                        return console.error("[LuxuryKase] Handler error:", e), !1
                    }
                }
            },
            "athomstore.myshopify.com": {
                name: "AthomStore",
                handler: async n => (await fetch("/cart/add.js", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: `id=${n}&quantity=1`
                })).ok ? (await fetch("/cart.js"), document.querySelector(".cart-icon.openCartDrawer") ? .click(), !0) : !1
            },
            "lazo-india-store.myshopify.com": {
                name: "LazoIndia",
                handler: async n => {
                    const e = new FormData;
                    e.append("id", n), e.append("quantity", "1"), e.append("sections", "cart-drawer,cart-icon-bubble");
                    const r = await (await fetch("/cart/add", {
                        method: "POST",
                        headers: {
                            "X-Requested-With": "XMLHttpRequest",
                            Accept: "application/json"
                        },
                        body: e
                    })).json();
                    if (r.sections ? .["cart-drawer"]) {
                        const o = document.createElement("div");
                        o.innerHTML = r.sections["cart-drawer"];
                        const s = document.querySelector("cart-drawer");
                        if (s) {
                            const i = o.querySelector("cart-drawer");
                            if (i) s.innerHTML = i.innerHTML, s.classList.remove("is-empty");
                            else {
                                const u = document.getElementById("CartDrawer-CartItems"),
                                    l = o.querySelector("#CartDrawer-CartItems");
                                u && l && (u.innerHTML = l.innerHTML);
                                const c = document.getElementById("CartDrawer-Footer"),
                                    f = o.querySelector("#CartDrawer-Footer");
                                c && f && (c.innerHTML = f.innerHTML, c.classList.remove("is-empty"));
                                const m = document.querySelector("cart-drawer-items");
                                m && m.classList.remove("is-empty")
                            }
                        }
                    }
                    if (r.sections ? .["cart-icon-bubble"]) {
                        const o = document.getElementById("cart-icon-bubble");
                        o && (o.innerHTML = r.sections["cart-icon-bubble"])
                    }
                    document.documentElement.dispatchEvent(new CustomEvent("cart:updated", {
                        bubbles: !0
                    })), document.documentElement.dispatchEvent(new CustomEvent("cart:refresh", {
                        bubbles: !0
                    }));
                    const a = document.querySelector("cart-drawer");
                    if (a && typeof a.open == "function") a.open();
                    else {
                        const o = document.getElementById("cart-icon-bubble");
                        o && o.click()
                    }
                    return !0
                }
            },
            "mi2dca-rx.myshopify.com": {
                name: "AshtoNava",
                handler: async (n, e) => {
                    try {
                        const t = new FormData;
                        if (t.append("id", n), t.append("quantity", "1"), e && t.append("product-id", e), !(await fetch("/cart/add", {
                                method: "POST",
                                headers: {
                                    "X-Requested-With": "XMLHttpRequest"
                                },
                                body: t
                            })).ok) return !1;
                        const o = (await (await fetch("/cart.json")).json()).item_count || 0;
                        document.querySelectorAll("#cart-icon-bubble .cart-count, #cart-icon-bubble .visually-hidden").forEach((u, l) => u.textContent = l === 0 ? o : `${o} item${o!==1?"s":""}`);
                        const s = await (await fetch("/?section_id=minicart-form")).text(),
                            i = document.createElement("div");
                        return i.innerHTML = s, document.querySelector("#minicart-form") ? .replaceWith(i.querySelector("#minicart-form")), document.querySelector("#cart-icon-bubble") ? .click(), !0
                    } catch {
                        return !1
                    }
                }
            },
            "b529c3-fb.myshopify.com": {
                name: "WizCheckout",
                handler: async (n, e) => {
                    try {
                        const t = new URLSearchParams({
                            id: n,
                            quantity: "1"
                        });
                        if (!(await fetch("/cart/add.js", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/x-www-form-urlencoded",
                                    "X-Requested-With": "XMLHttpRequest",
                                    Accept: "application/json"
                                },
                                body: t.toString()
                            })).ok) return !1;
                        const a = new CustomEvent("cart:updated", {
                            bubbles: !0
                        });
                        document.dispatchEvent(a), window.dispatchEvent(a), document.documentElement.dispatchEvent(new CustomEvent("cart:refresh", {
                            bubbles: !0
                        })), await new Promise(u => setTimeout(u, 300));
                        const o = ["button[data-wiz-cart-trigger]", "a[data-wiz-cart-trigger]", ".wiz-cart-trigger", "#wiz-cart-button", "[data-cart-drawer-trigger]", ".cart-trigger", 'a[href="/cart"]', "#cart-icon-bubble"];
                        for (const u of o) {
                            const l = document.querySelector(u);
                            if (l) return l.click(), !0
                        }
                        const s = window.wizz4 || window.WizCheckout || window.Wiz;
                        if (s ? .openCart instanceof Function) return s.openCart(), !0;
                        if (s ? .cart ? .open instanceof Function) return s.cart.open(), !0;
                        const i = new CustomEvent("wiz:cart:open", {
                            bubbles: !0
                        });
                        return window.dispatchEvent(i), document.dispatchEvent(i), !0
                    } catch {
                        return !1
                    }
                }
            },
            "77cebf-2.myshopify.com": {
                name: "77cebf-2 Halo Cart",
                handler: async (n, e) => {
                    try {
                        const t = document.createElement("form");
                        t.setAttribute("action", "/cart/add"), t.setAttribute("method", "post"), t.setAttribute("enctype", "multipart/form-data"), t.setAttribute("class", "variants"), e && (t.setAttribute("data-product-id", e), t.id = `form-${e}-instasell-dynamic`);
                        const r = document.createElement("input");
                        r.type = "hidden", r.name = "id", r.value = n, t.appendChild(r);
                        const a = document.createElement("input");
                        a.type = "hidden", a.name = "quantity", a.value = "1", t.appendChild(a);
                        const o = document.createElement("button");
                        return o.type = "submit", o.name = "add", o.className = "product-form__submit button button--primary", o.setAttribute("data-btn-addtocart", ""), o.textContent = "Add to cart", t.appendChild(o), t.style.position = "absolute", t.style.left = "-9999px", document.body.appendChild(t), o.click(), await new Promise(s => setTimeout(s, 1500)), t.remove(), !0
                    } catch (t) {
                        return console.log("%c77cebf-2 cart handler error: " + t, "color: red;"), !1
                    }
                }
            },
            "vahdamindia.myshopify.com": {
                name: "VahdamShopflo",
                handler: async (n, e) => {
                    try {
                        const t = document.querySelector('form[action="/cart/add"]'),
                            r = t ? .querySelector('input[name="product-id"]') ? .value || "",
                            a = t ? .querySelector('input[name="section-id"]') ? .value || "",
                            o = e && r && e === r ? a : "",
                            i = document.querySelector('[id^="shopify-section-"][id*="cart-drawer"]') ? .id ? .replace("shopify-section-", "") || "",
                            u = new URLSearchParams;
                        u.append("form_type", "product"), u.append("utf8", "\u2713"), u.append("id", n), u.append("quantity", "1"), e && u.append("product-id", e), o && u.append("section-id", o), u.append("sections", i ? `variant-added,${i}` : "variant-added"), u.append("sections_url", window.location.pathname);
                        const l = await fetch("/cart/add.js", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                                "X-Requested-With": "XMLHttpRequest",
                                Accept: "application/json"
                            },
                            body: u.toString()
                        });
                        if (!l.ok) return !1;
                        const c = await l.json(),
                            f = Object.keys(c.sections || {}).find(d => d !== "variant-added" && d.includes("cart-drawer"));
                        if (f && c.sections[f]) {
                            const d = document.createElement("div");
                            d.innerHTML = c.sections[f];
                            const p = d.querySelector("cart-drawer"),
                                h = document.querySelector("cart-drawer#cart-drawer");
                            p && h && (h.innerHTML = p.innerHTML, h.classList.remove("is-empty"))
                        } else {
                            const p = await fetch(`/?sections=${encodeURIComponent(i||"cart-drawer")}`);
                            if (p.ok) {
                                const h = await p.json(),
                                    b = h[i] ? ? h["cart-drawer"];
                                if (b) {
                                    const v = document.createElement("div");
                                    v.innerHTML = b;
                                    const w = v.querySelector("cart-drawer"),
                                        S = document.querySelector("cart-drawer#cart-drawer");
                                    w && S && (S.innerHTML = w.innerHTML, S.classList.remove("is-empty"))
                                }
                            }
                        }
                        await new Promise(d => setTimeout(d, 100));
                        const m = document.querySelector('a[aria-controls="cart-drawer"]');
                        if (m) m.click();
                        else {
                            const d = document.querySelector("cart-drawer#cart-drawer");
                            typeof d ? .open == "function" && d.open()
                        }
                        try {
                            const d = await fetch("/cart.js");
                            if (d.ok) {
                                const h = (await d.json()).item_count ? ? 0,
                                    b = document.querySelector(".header__cart-count cart-count");
                                b && (b.textContent = h.toString(), b.style.opacity = h > 0 ? "1" : "0")
                            }
                        } catch {}
                        return document.dispatchEvent(new CustomEvent("cart:updated", {
                            bubbles: !0
                        })), window.dispatchEvent(new CustomEvent("cart:updated", {
                            bubbles: !0
                        })), !0
                    } catch {
                        return !1
                    }
                }
            },
            "dxn1df-8n.myshopify.com": {
                name: "KaydotATC",
                handler: async (n, e) => {
                    try {
                        const t = new FormData;
                        t.append("form_type", "product"), t.append("utf8", "\u2713"), t.append("id", n), e && t.append("product-id", e), t.append("sections", "minicart-form"), t.append("sections_url", "/");
                        const r = await fetch("/cart/add", {
                            method: "POST",
                            headers: {
                                Accept: "application/javascript",
                                "X-Requested-With": "XMLHttpRequest"
                            },
                            body: t
                        });
                        if (!r.ok) return !1;
                        const a = await r.json();
                        if (a.sections ? .["minicart-form"]) {
                            const o = document.createElement("div");
                            o.innerHTML = a.sections["minicart-form"];
                            const s = o.querySelector("#minicart-form");
                            s && document.querySelector("#minicart-form") ? .replaceWith(s)
                        }
                        return document.querySelector("#cart-icon-bubble") ? .click(), !0
                    } catch {
                        return !1
                    }
                }
            },
            "nisarabeauty.myshopify.com": {
                name: "NisaraBeauty",
                handler: async (n, e) => {
                    try {
                        const r = document.querySelector('form[action="/cart/add"]') ? .querySelector('input[name="section-id"]') ? .value || "",
                            a = new FormData;
                        if (a.append("quantity", "1"), a.append("form_type", "product"), a.append("utf8", "\u2713"), a.append("id", n), e && a.append("product-id", e), r && a.append("section-id", r), !(await fetch(`/cart/add.js?v=${Date.now()}&hsfastcart=true`, {
                                method: "POST",
                                headers: {
                                    Accept: "application/json, text/javascript",
                                    "X-Requested-With": "XMLHttpRequest"
                                },
                                body: a
                            })).ok) return console.log("NisaraBeauty: Add to cart failed"), !1;
                        const s = document.querySelector("a.js-drawer-open-cart, a[aria-controls='CartDrawer']");
                        return s && s.click(), !0
                    } catch (t) {
                        return console.log(`%cNisaraBeauty cart handler error: ${t}`, "color: red;"), !1
                    }
                }
            }
        }
    },
    un = ["dff598-2.myshopify.com"],
    dn = ["dreambiglittleco.myshopify.com", "dev-solara.myshopify.com"];

function T(n) {
    if (!n) return;
    n.querySelectorAll("[required]").forEach(a => {
        a.removeAttribute("required")
    });
    const t = n.closest("form");
    if (t) {
        const a = t.onsubmit;
        t.onsubmit = function(o) {
            return o.stopImmediatePropagation(), !0
        }, setTimeout(() => {
            t.onsubmit = a
        }, 1e3)
    }
    n.removeAttribute("data-variant-selection-required"), n.removeAttribute("data-requires-variant-selection"), n.removeAttribute("data-validation"), n.disabled = !1, n.classList.remove("disabled"), document.querySelectorAll(".product-form__error-message-wrapper").forEach(a => {
        a.setAttribute("hidden", "")
    })
}
async function ln(n) {
    if (document.querySelector(".side-cart-header") !== null || dn.includes(window.Shopify ? .shop)) try {
        if ((await fetch("/cart/add.js", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `id=${n}&quantity=1`
            })).ok) return !0
    } catch {
        return !1
    }
    const t = Array.from(document.querySelectorAll("button")).find(r => r.textContent ? .trim().toLowerCase().includes("add to cart") && r.dataset.productId);
    if (t) return t.dataset.productId = n, t.click(), !0;
    for (const r of ht.selectors.buttons) {
        const a = document.querySelector(r);
        if (a) {
            T(a);
            const o = a.closest("form");
            if (o) {
                T(o);
                const s = o.querySelector('input[name="id"]');
                if (s) {
                    s.value = n;
                    const i = [new MouseEvent("mousedown", {
                        bubbles: !0,
                        cancelable: !0
                    }), new MouseEvent("mouseup", {
                        bubbles: !0,
                        cancelable: !0
                    }), new MouseEvent("click", {
                        bubbles: !0,
                        cancelable: !0
                    })];
                    for (const u of i) a.dispatchEvent(u), await new Promise(l => setTimeout(l, 50));
                    return !0
                }
            }
        }
    }
    return !1
}
const pn = async (n, e) => {
        await fetch("/cart/add.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                items: [{
                    id: n,
                    quantity: 1
                }],
                attributes: {
                    instavid_attribution_token: e
                }
            })
        });
        const t = window.handleFloCartBtn;
        t && t()
    },
    fn = async (n, e, t) => {
        const r = new URLSearchParams({
            id: n,
            quantity: "1",
            "attributes[instavid_attribution_token]": e
        }).toString();
        if (!(await fetch("/cart/add.js", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: r
            })).ok) return !1;
        const o = window.gokwikCheckoutClickFn;
        return o && typeof o == "function" && o(n, t), !0
    };
async function In(n, e, t) {
    const r = D(),
        a = Date.now(),
        o = window.Shopify ? .shop,
        s = ht.specialStores[o],
        i = window.location.hostname;
    if (s) try {
        r.emitEvent("atc_api_call", {
            method: "cart_drawer",
            handler: "special_store",
            store_name: s.name
        });
        const d = await s.handler(n, t);
        return r.emitEvent(d ? "atc_success" : "atc_error", {
            duration_ms: Date.now() - a,
            method: "cart_drawer",
            handler: "special_store"
        }), d
    } catch (d) {
        return console.log(`%c${s.name} cart handler error: ${d}`, "color: red;"), r.emitEvent("atc_error", {
            duration_ms: Date.now() - a,
            error_message: d ? .message || "Special store handler failed",
            method: "cart_drawer",
            handler: "special_store"
        }), !1
    }
    if (!["www.muunhome.com", "muunhome.com", "www.mantara.in", "mantara.in", "nisarabeauty.com", "www.nisarabeauty.com"].includes(i) && window.Shopflo) try {
        return r.emitEvent("atc_api_call", {
            method: "cart_drawer",
            handler: "shopflo"
        }), await pn(n, e), r.emitEvent("atc_success", {
            duration_ms: Date.now() - a,
            method: "cart_drawer",
            handler: "shopflo"
        }), !0
    } catch (p) {
        throw r.emitEvent("atc_error", {
            duration_ms: Date.now() - a,
            error_message: p ? .message || "Shopflo handler failed",
            method: "cart_drawer",
            handler: "shopflo"
        }), p
    }
    if (!["www.bagsetcetera.in", "bagsetcetera.in", "www.voganow.com", "voganow.com", "1hairstop.in", "letshyphen.com", "arirotoys.com", "www.arirotoys.com", "www.kaydot.in", "kaydot.in", "www.mcaffeine.com", "mcaffeine.com", "wavex.in", "halocare.in", "letsdrip.in"].includes(i)) {
        const d = window.gokwikSdk,
            p = window.gokwik;
        if (d || p) try {
            return r.emitEvent("atc_api_call", {
                method: "cart_drawer",
                handler: "gokwik"
            }), await fn(n, e, t), r.emitEvent("atc_success", {
                duration_ms: Date.now() - a,
                method: "cart_drawer",
                handler: "gokwik"
            }), !0
        } catch (h) {
            throw r.emitEvent("atc_error", {
                duration_ms: Date.now() - a,
                error_message: h ? .message || "Gokwik handler failed",
                method: "cart_drawer",
                handler: "gokwik"
            }), h
        }
    }
    if (un.includes(o)) return r.emitEvent("atc_error", {
        duration_ms: Date.now() - a,
        error_message: "Store in bypass list",
        method: "cart_drawer",
        handler: "bypass"
    }), !1;
    let c = !1;
    const f = d => {
            const p = d.name || d.url || "",
                h = d.responseStatus || d.status || d.response ? .status || (d.transferSize > 0 ? 200 : 0);
            return p.includes("/cart/add") && h >= 200 && h < 300
        },
        m = new PerformanceObserver(d => {
            d.getEntries().forEach(p => {
                f(p) && (c = !0)
            })
        });
    m.observe({
        type: "resource",
        buffered: !0
    });
    try {
        const d = await ln(n);
        await new Promise(b => setTimeout(b, 2500));
        try {
            const b = performance.getEntriesByType("resource");
            for (const v of b)
                if (f(v)) {
                    c = !0;
                    break
                }
        } catch (b) {
            console.log(`%cError in checkCartAddEntry: ${b}`, "color: red;")
        }
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) && d && !c && !s && (c = !0);
        const h = d && c;
        return h ? r.emitEvent("atc_success", {
            duration_ms: Date.now() - a,
            method: "cart_drawer",
            handler: "performance_observer"
        }) : r.emitEvent("atc_error", {
            duration_ms: Date.now() - a,
            error_message: "No network success detected",
            method: "cart_drawer",
            handler: "performance_observer",
            existing_success: d,
            network_success: c
        }), h
    } catch (d) {
        return r.emitEvent("atc_error", {
            duration_ms: Date.now() - a,
            error_message: d ? .message || "Exception in addToCartDrawer",
            method: "cart_drawer",
            handler: "exception"
        }), !1
    } finally {
        m.disconnect()
    }
}
async function jn(n) {
    if (n) try {
        const e = await fetch("/cart/update.js", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                attributes: {
                    instavid_attribution_token: n
                }
            })
        });
        e.ok || console.log(`%cFailed to persist bundle attribution token: ${e.status}`, "color: red;")
    } catch (e) {
        console.log(`%cFailed to persist bundle attribution token: ${e}`, "color: red;")
    }
    try {
        const e = await fetch("/cart.js");
        if (e.ok) return (await e.json()) ? .token || "";
        console.log(`%cFailed to fetch Shopify cart token: ${e.status}`, "color: red;")
    } catch (e) {
        console.log(`%cFailed to fetch Shopify cart token: ${e}`, "color: red;")
    }
    return ""
}
async function Rn(n) {
    try {
        const e = await fetch("/cart/add.js", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                items: n,
                sections: "cart-drawer,cart-icon-bubble",
                sections_url: "/"
            })
        });
        if (!e.ok) return !1;
        const r = (await e.json()) ? .sections;
        if (r ? .["cart-drawer"]) {
            const o = document.querySelector("cart-drawer");
            if (o) {
                const i = new DOMParser().parseFromString(r["cart-drawer"], "text/html").querySelector("cart-drawer");
                i && (o.innerHTML = i.innerHTML, o.classList.remove("is-empty"))
            }
        }
        if (r ? .["cart-icon-bubble"]) {
            const o = document.querySelector("#cart-icon-bubble");
            if (o) {
                const i = new DOMParser().parseFromString(r["cart-icon-bubble"], "text/html").querySelector("#cart-icon-bubble");
                i && (o.innerHTML = i.innerHTML)
            }
        }
        const a = document.querySelector("cart-drawer");
        return a && typeof a.open == "function" ? a.open() : document.querySelector("#cart-icon-bubble, .header__icon--cart, a[href='/cart'], [data-cart-toggle]") ? .click(), !0
    } catch (e) {
        return console.log(`%cMulti-item add to cart drawer error: ${e}`, "color: red;"), !1
    }
}
const yt = W(null),
    On = ({
        children: n
    }) => {
        const e = typeof window.clevertap < "u",
            t = localStorage ? .getItem("__IS_VTOK") ? ? void 0,
            r = {
                trackImpression: (a, o) => {
                    !e || window.clevertap.event.push(`Impression_${g}`, {
                        app_name: g,
                        widget: a,
                        page_Type: o,
                        viewer_Token: t
                    })
                },
                trackClick: (a, o, s) => {
                    !e || window.clevertap.event.push(`Video_Click_${g}`, {
                        app_name: g,
                        widget: a,
                        page_Type: o,
                        viewer_Token: t,
                        video_url: s
                    })
                },
                trackView: (a, o, s) => {
                    !e || window.clevertap.event.push(`Video_View_${g}`, {
                        app_name: g,
                        widget: a,
                        page_Type: o,
                        viewer_Token: t,
                        video_url: s
                    })
                },
                trackAddToCart: (a, o, s, i, u, l) => {
                    !e || window.clevertap.event.push(`Add_To_Cart_${g}`, {
                        app_name: g,
                        product_id: a,
                        widget: i,
                        page_Type: u,
                        viewer_Token: t,
                        video_url: l,
                        quantity: o,
                        variant_id: s
                    })
                }
            };
        return _(yt.Provider, {
            value: r,
            children: n
        })
    },
    Ln = () => z(yt),
    wt = W(null),
    Hn = ({
        children: n,
        debug: e = !1
    }) => {
        const [t, r] = q(!1), a = localStorage ? .getItem("__IS_VTOK") ? ? void 0;
        ue(() => {
            const i = () => {
                typeof window.fbq == "function" ? (r(!0), e && console.log("[MetaEvents] Meta Pixel ready")) : e && console.warn("[MetaEvents] Meta Pixel not detected")
            };
            i();
            const u = setTimeout(i, 2e3);
            return () => clearTimeout(u)
        }, []);
        const o = (i, u) => {
                if (!t) {
                    e && console.warn(`[MetaEvents] Event ${i} skipped - Pixel not loaded`);
                    return
                }
                const l = { ...u,
                    content_name: g,
                    viewer_token: a,
                    timestamp: Date.now()
                };
                e && console.log(`[MetaEvents] Tracking: ${i}`, l);
                try {
                    window.fbq("trackCustom", i, l)
                } catch (c) {
                    console.log(`%c[MetaEvents] Failed to track event ${c}`, "color: red;")
                }
            },
            s = {
                isMetaLoaded: t,
                trackEvent: o,
                trackImpression: (i, u) => {
                    o(`${g}_Impression`, {
                        widget: i,
                        page_type: u,
                        event_source: "shoppable_video"
                    })
                },
                trackClick: (i, u, l) => {
                    o(`${g}_VideoClick`, {
                        widget: i,
                        page_type: u,
                        video_url: l,
                        interaction_type: "click"
                    })
                },
                trackView: (i, u, l, c = 25) => {
                    o(`${g}_VideoView`, {
                        widget: i,
                        page_type: u,
                        video_url: l,
                        video_percent_viewed: c,
                        view_duration: c === 100 ? "complete" : "partial"
                    })
                },
                trackAddToCart: (i, u, l, c, f, m) => {
                    o(`${g}_AddToCart`, {
                        product_id: i,
                        quantity: u,
                        variant_id: l,
                        widget: c,
                        page_type: f,
                        video_url: m,
                        event_source: "shoppable_video",
                        currency: "USD"
                    })
                }
            };
        return _(wt.Provider, {
            value: s,
            children: n
        })
    },
    Nn = () => {
        const n = z(wt);
        if (!n) throw new Error("useMetaEvents must be used within MetaEventsProvider");
        return n
    },
    bt = W(null),
    Fn = ({
        children: n
    }) => {
        const e = typeof window.mixpanel < "u",
            t = localStorage ? .getItem("__IS_VTOK") ? ? void 0,
            r = {
                trackImpression: (a, o) => {
                    !e || window.mixpanel.track(`Impression_${g}`, {
                        app_name: g,
                        widget: a,
                        page_Type: o,
                        viewer_Token: t
                    })
                },
                trackClick: (a, o, s) => {
                    !e || window.mixpanel.track(`Video_Click_${g}`, {
                        app_name: g,
                        widget: a,
                        page_Type: o,
                        viewer_Token: t,
                        video_url: s
                    })
                },
                trackView: (a, o, s) => {
                    !e || window.mixpanel.track(`Video_View_${g}`, {
                        app_name: g,
                        widget: a,
                        page_Type: o,
                        viewer_Token: t,
                        video_url: s
                    })
                },
                trackAddToCart: (a, o, s, i, u, l) => {
                    !e || window.mixpanel.track(`Add_To_Cart_${g}`, {
                        app_name: g,
                        product_id: a,
                        widget: i,
                        page_Type: u,
                        viewer_Token: t,
                        video_url: l,
                        quantity: o,
                        variant_id: s
                    })
                }
            };
        return _(bt.Provider, {
            value: r,
            children: n
        })
    },
    Vn = () => z(bt),
    Bn = n => _("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": 2.5,
        stroke: "currentColor",
        className: n.className,
        children: _("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M6 18L18 6M6 6l12 12"
        })
    }),
    Wn = n => _("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": 2.5,
        stroke: "currentColor",
        className: n.className,
        children: _("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
        })
    }),
    Un = n => _("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: n.className,
        children: _("path", {
            "fill-rule": "evenodd",
            d: "M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z",
            "clip-rule": "evenodd"
        })
    }),
    zn = n => _("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: n.className,
        children: _("path", {
            "fill-rule": "evenodd",
            d: "M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z",
            "clip-rule": "evenodd"
        })
    }),
    Gn = n => _("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        className: n.className,
        children: _("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
        })
    }),
    Xn = n => _("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        className: n.className,
        children: _("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
        })
    });
export {
    Kt as $, sn as A, W as B, Wn as C, wn as D, bn as E, we as F, zt as G, L as H, ve as I, mt as J, En as K, Tn as L, hn as M, yn as N, fe as O, zn as P, qn as Q, xt as R, vn as S, Tt as T, gn as U, On as V, Fn as W, Bn as X, $n as Y, Hn as Z, Et as _, Dn as a, mn as a0, Xt as a1, Gt as a2, Ln as b, Nn as c, O as d, Cn as e, In as f, D as g, ue as h, Sn as i, Vn as j, Rn as k, jn as l, kn as m, Mn as n, _ as o, q as p, z as q, Gn as r, Xn as s, Un as t, ge as u, xn as v, Pn as w, An as x, _n as y, rn as z
};