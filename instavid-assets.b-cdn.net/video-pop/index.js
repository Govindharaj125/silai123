import {
    B as _n,
    R as Tn,
    p as _,
    F as En,
    o as i,
    q as bn,
    n as so,
    a as Sn,
    b as Cn,
    j as An,
    c as Pn,
    _ as Ie,
    h as K,
    u as Co,
    r as ao,
    s as co,
    X as lo,
    P as In,
    t as kn,
    d as Ht,
    i as uo,
    v as po,
    Q as mo,
    w as fo,
    x as ho,
    m as Do,
    g as Xt,
    e as Mo,
    f as Ro,
    S as Vo,
    y as Nn,
    D as Ln,
    a1 as On,
    a2 as xn,
    G as Dn,
    H as Ct,
    I as go,
    J as Fo,
    K as Mn,
    L as Rn,
    O as Vn,
    Y as Fn,
    V as Un,
    W as Bn,
    Z as $n,
    U as Gn
} from "./index2.js";
const Hn = {
        shortVideos: [],
        setShortVideos: () => {},
        shortVideo: null,
        setShortVideo: () => {},
        isLoadingShortVideos: !0,
        setIsLoadingShortVideos: () => {},
        isDesktop: !1,
        setIsDesktop: () => {},
        activeVideoId: null,
        setActiveVideoId: () => {},
        isPipActive: !1,
        setIsPipActive: () => {},
        customCode: null,
        setCustomCode: () => {},
        isProductDetailsModalOpen: !1,
        setIsProductDetailsModalOpen: () => {},
        googleAnalyticsEnabled: !1,
        setGoogleAnalyticsEnabled: () => {},
        useGtmForAnalytics: !1,
        setUseGtmForAnalytics: () => {},
        videoPipSessionToken: "",
        setVideoPipSessionToken: () => {},
        purchaseFlowAction: "popUp",
        setPurchaseFlowAction: m => {},
        clevertapAnalyticsEnabled: !1,
        setClevertapAnalyticsEnabled: () => {},
        mixpanelAnalyticsEnabled: !1,
        setMixpanelAnalyticsEnabled: m => {},
        closeVideoPipWhenClosedFromFullScreenMode: !1,
        setCloseVideoPipWhenClosedFromFullScreenMode: () => {},
        metaRetargetingEnabled: !1,
        setMetaRetargetingEnabled: () => {},
        showTaggedVideos: !1,
        setShowTaggedVideos: () => {},
        discountBadgeEnabled: !1,
        setDiscountBadgeEnabled: () => {},
        displayAllProductImagesEnabled: !1,
        setDisplayAllProductImagesEnabled: () => {},
        comparePriceEnabled: !1,
        setComparePriceEnabled: () => {},
        storeFrontCartOperation: !1,
        setStoreFrontCartOperation: () => {},
        storeFrontAccessKey: "",
        setStoreFrontAccessKey: () => {},
        videoBehavior: 0,
        setVideoBehavior: () => {},
        enableStoryModeOnClose: !0,
        setEnableStoryModeOnClose: () => {}
    },
    Zo = _n(Hn),
    zn = Tn(function({
        children: l
    }) {
        const [h, f] = _(!0), [b, w] = _([]), [E, C] = _(null), [H, B] = _(null), [Z, me] = _(!1), [J, U] = _(window.innerWidth > 600), [Q, fe] = _(null), [Se, Ye] = _(!1), [ke, F] = _(!1), [D, ae] = _(!1), [we, re] = _(!1), [Xe, Be] = _(""), [pe, N] = _(!1), [ce, _e] = _(!1), [Ce, ee] = _(!1), [le, A] = _(!1), [Te, se] = _(!1), [c, L] = _(!1), [$, O] = _(!1), [R, x] = _(!1), [te, S] = _(""), [Me, qe] = _(0), [at, he] = _(!1), [I, Re] = _("popUp"), Ve = z => {
            B(z), z && localStorage.setItem("__IS_LAST_ACTIVE_SV", z)
        }, mt = En(() => ({
            isLoadingShortVideos: h,
            setIsLoadingShortVideos: f,
            shortVideo: E,
            setShortVideo: C,
            activeVideoId: H,
            setActiveVideoId: Ve,
            isPipActive: Z,
            setIsPipActive: me,
            isDesktop: J,
            setIsDesktop: U,
            customCode: Q,
            setCustomCode: fe,
            isProductDetailsModalOpen: Se,
            setIsProductDetailsModalOpen: Ye,
            googleAnalyticsEnabled: ke,
            setGoogleAnalyticsEnabled: F,
            useGtmForAnalytics: D,
            setUseGtmForAnalytics: ae,
            setVideoPipSessionToken: Be,
            videoPipSessionToken: Xe,
            purchaseFlowAction: I,
            setPurchaseFlowAction: Re,
            clevertapAnalyticsEnabled: pe,
            setClevertapAnalyticsEnabled: N,
            mixpanelAnalyticsEnabled: ce,
            setMixpanelAnalyticsEnabled: _e,
            closeVideoPipWhenClosedFromFullScreenMode: Ce,
            setCloseVideoPipWhenClosedFromFullScreenMode: ee,
            setMetaRetargetingEnabled: re,
            metaRetargetingEnabled: we,
            shortVideos: b,
            setShortVideos: w,
            setShowTaggedVideos: A,
            showTaggedVideos: le,
            discountBadgeEnabled: Te,
            setDiscountBadgeEnabled: se,
            displayAllProductImagesEnabled: c,
            setDisplayAllProductImagesEnabled: L,
            comparePriceEnabled: $,
            setComparePriceEnabled: O,
            storeFrontCartOperation: R,
            setStoreFrontCartOperation: x,
            storeFrontAccessKey: te,
            setStoreFrontAccessKey: S,
            videoBehavior: Me,
            setVideoBehavior: qe,
            enableStoryModeOnClose: at,
            setEnableStoryModeOnClose: he
        }), [h, E, H, Z, J, Q, ke, D, Xe, Se, I, pe, ce, Ce, we, b, le, $, Te, c, te, Me, at]);
        return i(Zo.Provider, {
            value: mt,
            children: l
        })
    }),
    Jo = () => {
        const m = bn(Zo);
        if (!m) throw new Error("useVideoPopContext must be used within a VideoPopContextProvider");
        return m
    }; /*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE */
const {
    entries: Qo,
    setPrototypeOf: Uo,
    isFrozen: Wn,
    getPrototypeOf: jn,
    getOwnPropertyDescriptor: Yn
} = Object;
let {
    freeze: ve,
    seal: De,
    create: en
} = Object, {
    apply: Eo,
    construct: bo
} = typeof Reflect < "u" && Reflect;
ve || (ve = function(l) {
    return l
});
De || (De = function(l) {
    return l
});
Eo || (Eo = function(l, h, f) {
    return l.apply(h, f)
});
bo || (bo = function(l, h) {
    return new l(...h)
});
const zt = ye(Array.prototype.forEach),
    Xn = ye(Array.prototype.lastIndexOf),
    Bo = ye(Array.prototype.pop),
    xt = ye(Array.prototype.push),
    qn = ye(Array.prototype.splice),
    Yt = ye(String.prototype.toLowerCase),
    vo = ye(String.prototype.toString),
    $o = ye(String.prototype.match),
    Dt = ye(String.prototype.replace),
    Kn = ye(String.prototype.indexOf),
    Zn = ye(String.prototype.trim),
    Ue = ye(Object.prototype.hasOwnProperty),
    ge = ye(RegExp.prototype.test),
    Mt = Jn(TypeError);

function ye(m) {
    return function(l) {
        l instanceof RegExp && (l.lastIndex = 0);
        for (var h = arguments.length, f = new Array(h > 1 ? h - 1 : 0), b = 1; b < h; b++) f[b - 1] = arguments[b];
        return Eo(m, l, f)
    }
}

function Jn(m) {
    return function() {
        for (var l = arguments.length, h = new Array(l), f = 0; f < l; f++) h[f] = arguments[f];
        return bo(m, h)
    }
}

function P(m, l) {
    let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Yt;
    Uo && Uo(m, null);
    let f = l.length;
    for (; f--;) {
        let b = l[f];
        if (typeof b == "string") {
            const w = h(b);
            w !== b && (Wn(l) || (l[f] = w), b = w)
        }
        m[b] = !0
    }
    return m
}

function Qn(m) {
    for (let l = 0; l < m.length; l++) Ue(m, l) || (m[l] = null);
    return m
}

function rt(m) {
    const l = en(null);
    for (const [h, f] of Qo(m)) Ue(m, h) && (Array.isArray(f) ? l[h] = Qn(f) : f && typeof f == "object" && f.constructor === Object ? l[h] = rt(f) : l[h] = f);
    return l
}

function Rt(m, l) {
    for (; m !== null;) {
        const f = Yn(m, l);
        if (f) {
            if (f.get) return ye(f.get);
            if (typeof f.value == "function") return ye(f.value)
        }
        m = jn(m)
    }

    function h() {
        return null
    }
    return h
}
const Go = ve(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
    yo = ve(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
    wo = ve(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
    ei = ve(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
    _o = ve(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
    ti = ve(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
    Ho = ve(["#text"]),
    zo = ve(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]),
    To = ve(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
    Wo = ve(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
    Wt = ve(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    oi = De(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
    ni = De(/<%[\w\W]*|[\w\W]*%>/gm),
    ii = De(/\$\{[\w\W]*/gm),
    ri = De(/^data-[\-\w.\u00B7-\uFFFF]+$/),
    si = De(/^aria-[\-\w]+$/),
    tn = De(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
    ai = De(/^(?:\w+script|data):/i),
    ci = De(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    on = De(/^html$/i),
    li = De(/^[a-z][.\w]*(-[.\w]+)+$/i);
var jo = Object.freeze({
    __proto__: null,
    ARIA_ATTR: si,
    ATTR_WHITESPACE: ci,
    CUSTOM_ELEMENT: li,
    DATA_ATTR: ri,
    DOCTYPE_NAME: on,
    ERB_EXPR: ni,
    IS_ALLOWED_URI: tn,
    IS_SCRIPT_OR_DATA: ai,
    MUSTACHE_EXPR: oi,
    TMPLIT_EXPR: ii
});
const Vt = {
        element: 1,
        attribute: 2,
        text: 3,
        cdataSection: 4,
        entityReference: 5,
        entityNode: 6,
        progressingInstruction: 7,
        comment: 8,
        document: 9,
        documentType: 10,
        documentFragment: 11,
        notation: 12
    },
    di = function() {
        return typeof window > "u" ? null : window
    },
    ui = function(l, h) {
        if (typeof l != "object" || typeof l.createPolicy != "function") return null;
        let f = null;
        const b = "data-tt-policy-suffix";
        h && h.hasAttribute(b) && (f = h.getAttribute(b));
        const w = "dompurify" + (f ? "#" + f : "");
        try {
            return l.createPolicy(w, {
                createHTML(E) {
                    return E
                },
                createScriptURL(E) {
                    return E
                }
            })
        } catch {
            return console.warn("TrustedTypes policy " + w + " could not be created."), null
        }
    },
    Yo = function() {
        return {
            afterSanitizeAttributes: [],
            afterSanitizeElements: [],
            afterSanitizeShadowDOM: [],
            beforeSanitizeAttributes: [],
            beforeSanitizeElements: [],
            beforeSanitizeShadowDOM: [],
            uponSanitizeAttribute: [],
            uponSanitizeElement: [],
            uponSanitizeShadowNode: []
        }
    };

function nn() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : di();
    const l = d => nn(d);
    if (l.version = "3.2.6", l.removed = [], !m || !m.document || m.document.nodeType !== Vt.document || !m.Element) return l.isSupported = !1, l;
    let {
        document: h
    } = m;
    const f = h,
        b = f.currentScript,
        {
            DocumentFragment: w,
            HTMLTemplateElement: E,
            Node: C,
            Element: H,
            NodeFilter: B,
            NamedNodeMap: Z = m.NamedNodeMap || m.MozNamedAttrMap,
            HTMLFormElement: me,
            DOMParser: J,
            trustedTypes: U
        } = m,
        Q = H.prototype,
        fe = Rt(Q, "cloneNode"),
        Se = Rt(Q, "remove"),
        Ye = Rt(Q, "nextSibling"),
        ke = Rt(Q, "childNodes"),
        F = Rt(Q, "parentNode");
    if (typeof E == "function") {
        const d = h.createElement("template");
        d.content && d.content.ownerDocument && (h = d.content.ownerDocument)
    }
    let D, ae = "";
    const {
        implementation: we,
        createNodeIterator: re,
        createDocumentFragment: Xe,
        getElementsByTagName: Be
    } = h, {
        importNode: pe
    } = f;
    let N = Yo();
    l.isSupported = typeof Qo == "function" && typeof F == "function" && we && we.createHTMLDocument !== void 0;
    const {
        MUSTACHE_EXPR: ce,
        ERB_EXPR: _e,
        TMPLIT_EXPR: Ce,
        DATA_ATTR: ee,
        ARIA_ATTR: le,
        IS_SCRIPT_OR_DATA: A,
        ATTR_WHITESPACE: Te,
        CUSTOM_ELEMENT: se
    } = jo;
    let {
        IS_ALLOWED_URI: c
    } = jo, L = null;
    const $ = P({}, [...Go, ...yo, ...wo, ..._o, ...Ho]);
    let O = null;
    const R = P({}, [...zo, ...To, ...Wo, ...Wt]);
    let x = Object.seal(en(null, {
            tagNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
            },
            attributeNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
            },
            allowCustomizedBuiltInElements: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: !1
            }
        })),
        te = null,
        S = null,
        Me = !0,
        qe = !0,
        at = !1,
        he = !0,
        I = !1,
        Re = !0,
        Ve = !1,
        mt = !1,
        z = !1,
        $e = !1,
        ct = !1,
        r = !1,
        Ge = !0,
        Ke = !1;
    const Ze = "user-content-";
    let lt = !0,
        Je = !1,
        Qe = {},
        dt = null;
    const et = P({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
    let Ft = null;
    const qt = P({}, ["audio", "video", "img", "source", "image", "track"]);
    let wt = null;
    const de = P({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
        He = "http://www.w3.org/1998/Math/MathML",
        Y = "http://www.w3.org/2000/svg",
        ze = "http://www.w3.org/1999/xhtml";
    let tt = ze,
        At = !1,
        X = null;
    const Ao = P({}, [He, Y, ze], vo);
    let ft = P({}, ["mi", "mo", "mn", "ms", "mtext"]),
        G = P({}, ["annotation-xml"]);
    const Kt = P({}, ["title", "style", "font", "a", "script"]);
    let ht = null;
    const V = ["application/xhtml+xml", "text/html"],
        Ut = "text/html";
    let oe = null,
        We = null;
    const Ee = h.createElement("form"),
        Ae = function(n) {
            return n instanceof RegExp || n instanceof Function
        },
        gt = function() {
            let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (!(We && We === n)) {
                if ((!n || typeof n != "object") && (n = {}), n = rt(n), ht = V.indexOf(n.PARSER_MEDIA_TYPE) === -1 ? Ut : n.PARSER_MEDIA_TYPE, oe = ht === "application/xhtml+xml" ? vo : Yt, L = Ue(n, "ALLOWED_TAGS") ? P({}, n.ALLOWED_TAGS, oe) : $, O = Ue(n, "ALLOWED_ATTR") ? P({}, n.ALLOWED_ATTR, oe) : R, X = Ue(n, "ALLOWED_NAMESPACES") ? P({}, n.ALLOWED_NAMESPACES, vo) : Ao, wt = Ue(n, "ADD_URI_SAFE_ATTR") ? P(rt(de), n.ADD_URI_SAFE_ATTR, oe) : de, Ft = Ue(n, "ADD_DATA_URI_TAGS") ? P(rt(qt), n.ADD_DATA_URI_TAGS, oe) : qt, dt = Ue(n, "FORBID_CONTENTS") ? P({}, n.FORBID_CONTENTS, oe) : et, te = Ue(n, "FORBID_TAGS") ? P({}, n.FORBID_TAGS, oe) : rt({}), S = Ue(n, "FORBID_ATTR") ? P({}, n.FORBID_ATTR, oe) : rt({}), Qe = Ue(n, "USE_PROFILES") ? n.USE_PROFILES : !1, Me = n.ALLOW_ARIA_ATTR !== !1, qe = n.ALLOW_DATA_ATTR !== !1, at = n.ALLOW_UNKNOWN_PROTOCOLS || !1, he = n.ALLOW_SELF_CLOSE_IN_ATTR !== !1, I = n.SAFE_FOR_TEMPLATES || !1, Re = n.SAFE_FOR_XML !== !1, Ve = n.WHOLE_DOCUMENT || !1, $e = n.RETURN_DOM || !1, ct = n.RETURN_DOM_FRAGMENT || !1, r = n.RETURN_TRUSTED_TYPE || !1, z = n.FORCE_BODY || !1, Ge = n.SANITIZE_DOM !== !1, Ke = n.SANITIZE_NAMED_PROPS || !1, lt = n.KEEP_CONTENT !== !1, Je = n.IN_PLACE || !1, c = n.ALLOWED_URI_REGEXP || tn, tt = n.NAMESPACE || ze, ft = n.MATHML_TEXT_INTEGRATION_POINTS || ft, G = n.HTML_INTEGRATION_POINTS || G, x = n.CUSTOM_ELEMENT_HANDLING || {}, n.CUSTOM_ELEMENT_HANDLING && Ae(n.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (x.tagNameCheck = n.CUSTOM_ELEMENT_HANDLING.tagNameCheck), n.CUSTOM_ELEMENT_HANDLING && Ae(n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (x.attributeNameCheck = n.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), n.CUSTOM_ELEMENT_HANDLING && typeof n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (x.allowCustomizedBuiltInElements = n.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), I && (qe = !1), ct && ($e = !0), Qe && (L = P({}, Ho), O = [], Qe.html === !0 && (P(L, Go), P(O, zo)), Qe.svg === !0 && (P(L, yo), P(O, To), P(O, Wt)), Qe.svgFilters === !0 && (P(L, wo), P(O, To), P(O, Wt)), Qe.mathMl === !0 && (P(L, _o), P(O, Wo), P(O, Wt))), n.ADD_TAGS && (L === $ && (L = rt(L)), P(L, n.ADD_TAGS, oe)), n.ADD_ATTR && (O === R && (O = rt(O)), P(O, n.ADD_ATTR, oe)), n.ADD_URI_SAFE_ATTR && P(wt, n.ADD_URI_SAFE_ATTR, oe), n.FORBID_CONTENTS && (dt === et && (dt = rt(dt)), P(dt, n.FORBID_CONTENTS, oe)), lt && (L["#text"] = !0), Ve && P(L, ["html", "head", "body"]), L.table && (P(L, ["tbody"]), delete te.tbody), n.TRUSTED_TYPES_POLICY) {
                    if (typeof n.TRUSTED_TYPES_POLICY.createHTML != "function") throw Mt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                    if (typeof n.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Mt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                    D = n.TRUSTED_TYPES_POLICY, ae = D.createHTML("")
                } else D === void 0 && (D = ui(U, b)), D !== null && typeof ae == "string" && (ae = D.createHTML(""));
                ve && ve(n), We = n
            }
        },
        Pe = P({}, [...yo, ...wo, ...ei]),
        Pt = P({}, [..._o, ...ti]),
        _t = function(n) {
            let u = F(n);
            (!u || !u.tagName) && (u = {
                namespaceURI: tt,
                tagName: "template"
            });
            const g = Yt(n.tagName),
                M = Yt(u.tagName);
            return X[n.namespaceURI] ? n.namespaceURI === Y ? u.namespaceURI === ze ? g === "svg" : u.namespaceURI === He ? g === "svg" && (M === "annotation-xml" || ft[M]) : Boolean(Pe[g]) : n.namespaceURI === He ? u.namespaceURI === ze ? g === "math" : u.namespaceURI === Y ? g === "math" && G[M] : Boolean(Pt[g]) : n.namespaceURI === ze ? u.namespaceURI === Y && !G[M] || u.namespaceURI === He && !ft[M] ? !1 : !Pt[g] && (Kt[g] || !Pe[g]) : !!(ht === "application/xhtml+xml" && X[n.namespaceURI]) : !1
        },
        Ne = function(n) {
            xt(l.removed, {
                element: n
            });
            try {
                F(n).removeChild(n)
            } catch {
                Se(n)
            }
        },
        W = function(n, u) {
            try {
                xt(l.removed, {
                    attribute: u.getAttributeNode(n),
                    from: u
                })
            } catch {
                xt(l.removed, {
                    attribute: null,
                    from: u
                })
            }
            if (u.removeAttribute(n), n === "is")
                if ($e || ct) try {
                    Ne(u)
                } catch {} else try {
                    u.setAttribute(n, "")
                } catch {}
        },
        Tt = function(n) {
            let u = null,
                g = null;
            if (z) n = "<remove></remove>" + n;
            else {
                const q = $o(n, /^[\r\n\t ]+/);
                g = q && q[0]
            }
            ht === "application/xhtml+xml" && tt === ze && (n = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + n + "</body></html>");
            const M = D ? D.createHTML(n) : n;
            if (tt === ze) try {
                u = new J().parseFromString(M, ht)
            } catch {}
            if (!u || !u.documentElement) {
                u = we.createDocument(tt, "template", null);
                try {
                    u.documentElement.innerHTML = At ? ae : M
                } catch {}
            }
            const ne = u.body || u.documentElement;
            return n && g && ne.insertBefore(h.createTextNode(g), ne.childNodes[0] || null), tt === ze ? Be.call(u, Ve ? "html" : "body")[0] : Ve ? u.documentElement : ne
        },
        It = function(n) {
            return re.call(n.ownerDocument || n, n, B.SHOW_ELEMENT | B.SHOW_COMMENT | B.SHOW_TEXT | B.SHOW_PROCESSING_INSTRUCTION | B.SHOW_CDATA_SECTION, null)
        },
        Et = function(n) {
            return n instanceof me && (typeof n.nodeName != "string" || typeof n.textContent != "string" || typeof n.removeChild != "function" || !(n.attributes instanceof Z) || typeof n.removeAttribute != "function" || typeof n.setAttribute != "function" || typeof n.namespaceURI != "string" || typeof n.insertBefore != "function" || typeof n.hasChildNodes != "function")
        },
        ot = function(n) {
            return typeof C == "function" && n instanceof C
        };

    function Le(d, n, u) {
        zt(d, g => {
            g.call(l, n, u, We)
        })
    }
    const Fe = function(n) {
            let u = null;
            if (Le(N.beforeSanitizeElements, n, null), Et(n)) return Ne(n), !0;
            const g = oe(n.nodeName);
            if (Le(N.uponSanitizeElement, n, {
                    tagName: g,
                    allowedTags: L
                }), Re && n.hasChildNodes() && !ot(n.firstElementChild) && ge(/<[/\w!]/g, n.innerHTML) && ge(/<[/\w!]/g, n.textContent) || n.nodeType === Vt.progressingInstruction || Re && n.nodeType === Vt.comment && ge(/<[/\w]/g, n.data)) return Ne(n), !0;
            if (!L[g] || te[g]) {
                if (!te[g] && kt(g) && (x.tagNameCheck instanceof RegExp && ge(x.tagNameCheck, g) || x.tagNameCheck instanceof Function && x.tagNameCheck(g))) return !1;
                if (lt && !dt[g]) {
                    const M = F(n) || n.parentNode,
                        ne = ke(n) || n.childNodes;
                    if (ne && M) {
                        const q = ne.length;
                        for (let ue = q - 1; ue >= 0; --ue) {
                            const be = fe(ne[ue], !0);
                            be.__removalCount = (n.__removalCount || 0) + 1, M.insertBefore(be, Ye(n))
                        }
                    }
                }
                return Ne(n), !0
            }
            return n instanceof H && !_t(n) || (g === "noscript" || g === "noembed" || g === "noframes") && ge(/<\/no(script|embed|frames)/i, n.innerHTML) ? (Ne(n), !0) : (I && n.nodeType === Vt.text && (u = n.textContent, zt([ce, _e, Ce], M => {
                u = Dt(u, M, " ")
            }), n.textContent !== u && (xt(l.removed, {
                element: n.cloneNode()
            }), n.textContent = u)), Le(N.afterSanitizeElements, n, null), !1)
        },
        ut = function(n, u, g) {
            if (Ge && (u === "id" || u === "name") && (g in h || g in Ee)) return !1;
            if (!(qe && !S[u] && ge(ee, u))) {
                if (!(Me && ge(le, u))) {
                    if (!O[u] || S[u]) {
                        if (!(kt(n) && (x.tagNameCheck instanceof RegExp && ge(x.tagNameCheck, n) || x.tagNameCheck instanceof Function && x.tagNameCheck(n)) && (x.attributeNameCheck instanceof RegExp && ge(x.attributeNameCheck, u) || x.attributeNameCheck instanceof Function && x.attributeNameCheck(u)) || u === "is" && x.allowCustomizedBuiltInElements && (x.tagNameCheck instanceof RegExp && ge(x.tagNameCheck, g) || x.tagNameCheck instanceof Function && x.tagNameCheck(g)))) return !1
                    } else if (!wt[u]) {
                        if (!ge(c, Dt(g, Te, ""))) {
                            if (!((u === "src" || u === "xlink:href" || u === "href") && n !== "script" && Kn(g, "data:") === 0 && Ft[n])) {
                                if (!(at && !ge(A, Dt(g, Te, "")))) {
                                    if (g) return !1
                                }
                            }
                        }
                    }
                }
            }
            return !0
        },
        kt = function(n) {
            return n !== "annotation-xml" && $o(n, se)
        },
        k = function(n) {
            Le(N.beforeSanitizeAttributes, n, null);
            const {
                attributes: u
            } = n;
            if (!u || Et(n)) return;
            const g = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: O,
                forceKeepAttr: void 0
            };
            let M = u.length;
            for (; M--;) {
                const ne = u[M],
                    {
                        name: q,
                        namespaceURI: ue,
                        value: be
                    } = ne,
                    pt = oe(q),
                    bt = be;
                let ie = q === "value" ? bt : Zn(bt);
                if (g.attrName = pt, g.attrValue = ie, g.keepAttr = !0, g.forceKeepAttr = void 0, Le(N.uponSanitizeAttribute, n, g), ie = g.attrValue, Ke && (pt === "id" || pt === "name") && (W(q, n), ie = Ze + ie), Re && ge(/((--!?|])>)|<\/(style|title)/i, ie)) {
                    W(q, n);
                    continue
                }
                if (g.forceKeepAttr) continue;
                if (!g.keepAttr) {
                    W(q, n);
                    continue
                }
                if (!he && ge(/\/>/i, ie)) {
                    W(q, n);
                    continue
                }
                I && zt([ce, _e, Ce], nt => {
                    ie = Dt(ie, nt, " ")
                });
                const $t = oe(n.nodeName);
                if (!ut($t, pt, ie)) {
                    W(q, n);
                    continue
                }
                if (D && typeof U == "object" && typeof U.getAttributeType == "function" && !ue) switch (U.getAttributeType($t, pt)) {
                    case "TrustedHTML":
                        {
                            ie = D.createHTML(ie);
                            break
                        }
                    case "TrustedScriptURL":
                        {
                            ie = D.createScriptURL(ie);
                            break
                        }
                }
                if (ie !== bt) try {
                    ue ? n.setAttributeNS(ue, q, ie) : n.setAttribute(q, ie), Et(n) ? Ne(n) : Bo(l.removed)
                } catch {
                    W(q, n)
                }
            }
            Le(N.afterSanitizeAttributes, n, null)
        },
        Bt = function d(n) {
            let u = null;
            const g = It(n);
            for (Le(N.beforeSanitizeShadowDOM, n, null); u = g.nextNode();) Le(N.uponSanitizeShadowNode, u, null), Fe(u), k(u), u.content instanceof w && d(u.content);
            Le(N.afterSanitizeShadowDOM, n, null)
        };
    return l.sanitize = function(d) {
        let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            u = null,
            g = null,
            M = null,
            ne = null;
        if (At = !d, At && (d = "<!-->"), typeof d != "string" && !ot(d))
            if (typeof d.toString == "function") {
                if (d = d.toString(), typeof d != "string") throw Mt("dirty is not a string, aborting")
            } else throw Mt("toString is not a function");
        if (!l.isSupported) return d;
        if (mt || gt(n), l.removed = [], typeof d == "string" && (Je = !1), Je) {
            if (d.nodeName) {
                const be = oe(d.nodeName);
                if (!L[be] || te[be]) throw Mt("root node is forbidden and cannot be sanitized in-place")
            }
        } else if (d instanceof C) u = Tt("<!---->"), g = u.ownerDocument.importNode(d, !0), g.nodeType === Vt.element && g.nodeName === "BODY" || g.nodeName === "HTML" ? u = g : u.appendChild(g);
        else {
            if (!$e && !I && !Ve && d.indexOf("<") === -1) return D && r ? D.createHTML(d) : d;
            if (u = Tt(d), !u) return $e ? null : r ? ae : ""
        }
        u && z && Ne(u.firstChild);
        const q = It(Je ? d : u);
        for (; M = q.nextNode();) Fe(M), k(M), M.content instanceof w && Bt(M.content);
        if (Je) return d;
        if ($e) {
            if (ct)
                for (ne = Xe.call(u.ownerDocument); u.firstChild;) ne.appendChild(u.firstChild);
            else ne = u;
            return (O.shadowroot || O.shadowrootmode) && (ne = pe.call(f, ne, !0)), ne
        }
        let ue = Ve ? u.outerHTML : u.innerHTML;
        return Ve && L["!doctype"] && u.ownerDocument && u.ownerDocument.doctype && u.ownerDocument.doctype.name && ge(on, u.ownerDocument.doctype.name) && (ue = "<!DOCTYPE " + u.ownerDocument.doctype.name + `>
` + ue), I && zt([ce, _e, Ce], be => {
            ue = Dt(ue, be, " ")
        }), D && r ? D.createHTML(ue) : ue
    }, l.setConfig = function() {
        let d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        gt(d), mt = !0
    }, l.clearConfig = function() {
        We = null, mt = !1
    }, l.isValidAttribute = function(d, n, u) {
        We || gt({});
        const g = oe(d),
            M = oe(n);
        return ut(g, M, u)
    }, l.addHook = function(d, n) {
        typeof n == "function" && xt(N[d], n)
    }, l.removeHook = function(d, n) {
        if (n !== void 0) {
            const u = Xn(N[d], n);
            return u === -1 ? void 0 : qn(N[d], u, 1)[0]
        }
        return Bo(N[d])
    }, l.removeHooks = function(d) {
        N[d] = []
    }, l.removeAllHooks = function() {
        N = Yo()
    }, l
}
var pi = nn();
const Xo = m => pi.sanitize(m || "", {
        ALLOWED_TAGS: ["b", "i", "em", "strong", "a", "p", "ul", "ol", "li", "br", "span"],
        ALLOWED_ATTR: ["href", "target", "rel", "class", "style"],
        FORBID_ATTR: ["onerror", "onclick", "onload"]
    }),
    jt = m => Object.keys(m).filter(l => m[l]).join(" "),
    xe = (m, l = "INR") => {
        try {
            return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: l
            }).format(m)
        } catch {
            return `\u20B9${m}`
        }
    },
    qo = () => {
        const m = so(),
            l = so(),
            h = so(),
            {
                shortVideo: f,
                setActiveVideoId: b,
                isPipActive: w,
                setIsPipActive: E,
                isDesktop: C,
                isProductDetailsModalOpen: H,
                setIsProductDetailsModalOpen: B,
                purchaseFlowAction: Z,
                googleAnalyticsEnabled: me,
                useGtmForAnalytics: J,
                videoPipSessionToken: U,
                setVideoPipSessionToken: Q,
                clevertapAnalyticsEnabled: fe,
                mixpanelAnalyticsEnabled: Se,
                closeVideoPipWhenClosedFromFullScreenMode: Ye,
                metaRetargetingEnabled: ke,
                shortVideos: F,
                comparePriceEnabled: D,
                discountBadgeEnabled: ae,
                displayAllProductImagesEnabled: we,
                storeFrontCartOperation: re,
                storeFrontAccessKey: Xe,
                enableStoryModeOnClose: Be
            } = Jo(),
            pe = Sn(),
            N = Cn(),
            ce = An(),
            _e = Pn(),
            [Ce, ee] = _(!1),
            [le, A] = _(!1),
            [Te, se] = _(!0),
            [c, L] = _(!1),
            [$, O] = _(0),
            [R, x] = _(!1),
            te = Ie(null),
            S = Ie(null),
            Me = Ie(null),
            qe = Ie(0),
            at = Ie(0),
            he = Ie(!0),
            I = Ie({
                mousemove: null,
                mouseup: null,
                touchmove: null,
                touchend: null
            }),
            [Re, Ve] = _(!1),
            mt = () => typeof window < "u" && window.localStorage ? localStorage.getItem("instasell_video_story_mode") === "true" : !1,
            [z, $e] = _(mt),
            ct = e => {
                typeof window < "u" && window.localStorage && localStorage.setItem("instasell_video_story_mode", String(e))
            };
        K(() => {
            if (!w || C) return;
            const e = t => {
                t.preventDefault(), Ot(), window.history.pushState(null, "", window.location.href)
            };
            return window.history.pushState(null, "", window.location.href), window.addEventListener("popstate", e), () => {
                window.removeEventListener("popstate", e)
            }
        }, [w, C]), K(() => {
            if (!w || !Me.current) return;
            const e = new IntersectionObserver(t => {
                t.forEach(o => {
                    o.isIntersecting && !Re && Ve(!0)
                })
            }, {
                threshold: .1,
                rootMargin: "0px"
            });
            return e.observe(Me.current), () => {
                e.disconnect()
            }
        }, [w, Re]);
        const [r, Ge] = _(null), [Ke, Ze] = _(null), [lt, Je] = _({}), [Qe, dt] = _(null), [et, Ft] = _([]), [qt, wt] = _(!1), de = Co(), [He, Y] = _({}), [ze, tt] = _({}), [At, X] = _({}), [Ao, ft] = _(!1), G = v.getShopDomain() || "";
        let Kt = v.getCurrencyRate ? .() || 1,
            ht = v.getCurrencyCode ? .() || "INR",
            V = v.getCountry ? .() || "IN";
        const Ut = G === "0f0dbc-4b.myshopify.com",
            We = (() => {
                if (!Ut || !window._convercy) return null;
                try {
                    const e = window._convercy,
                        t = e.currencyCurrent || {};
                    return {
                        enabled: e.isConvertCurrency || !1,
                        base: e.currencyShopify || "AED",
                        curr: t.code || e.currencyCurrent || "AED",
                        rate: e.rateCurrencyCurrent || 1,
                        round: t.round || 1
                    }
                } catch (e) {
                    return console.error("Error reading Convercy settings:", e), null
                }
            })(),
            Ee = v.getPageType ? .(),
            Ae = Ee == "home" ? "" : Ee == "product" ? v.currentProductId ? ? "" : v.currentCollectionId ? ? "",
            [gt, Pe] = _(!1),
            Pt = Ie(!1),
            [_t, Ne] = _(!1),
            [W, Tt] = _(!1),
            [It, Et] = _({
                x: 0,
                y: 0
            }),
            [ot, Le] = _({
                x: 0,
                y: 0
            }),
            [Fe, ut] = _(!1),
            kt = 5,
            k = F && F.length > 1,
            Bt = () => k && F ? F[$] || null : f,
            d = Bt();
        K(() => () => {
            vt.current && (I.current.mousemove && document.removeEventListener("mousemove", I.current.mousemove), I.current.mouseup && document.removeEventListener("mouseup", I.current.mouseup), I.current.touchmove && document.removeEventListener("touchmove", I.current.touchmove), I.current.touchend && document.removeEventListener("touchend", I.current.touchend), I.current = {
                mousemove: null,
                mouseup: null,
                touchmove: null,
                touchend: null
            }, vt.current = !1), document.body.style.userSelect = "", document.body.style.webkitUserSelect = ""
        }, []);
        const n = r ? .product ? .cp != null,
            u = (e, t) => {
                if (Ut && We ? .enabled) {
                    const {
                        base: o,
                        curr: s,
                        rate: a
                    } = We;
                    let p;
                    if (n && t ? .cp ? .[V] ? .cc ? p = t.cp[V].cc : n && r ? .product ? .cp ? .[V] ? .cc ? p = r.product.cp[V].cc : p = o, p === o && s !== o && a && a !== 1) {
                        const y = e / a,
                            T = We.round || 1;
                        return {
                            price: Math.ceil(y / T) * T,
                            currency: s
                        }
                    }
                }
                return {
                    price: e * (Kt || 1),
                    currency: ht
                }
            },
            g = e => {
                const t = e ? .cp != null ? e ? .cp ? .[V].pr ? ? e.pr ? ? 0 : e.pr || 0,
                    o = e ? .cp != null ? e.cp ? .[V] ? .cs || 0 : e ? .c || 0;
                if (o > 0 && t > 0 && o > t) {
                    const s = (o - t) / o * 100;
                    return Math.round(s)
                }
                return 0
            },
            M = () => {
                if (k && F) {
                    if (C && c) {
                        const e = document.querySelector(".ins-carousel-video-item--active .ins-carousel-video");
                        e && (he.current = !0, e.pause(), e.muted = !0)
                    }
                    O(e => e >= F.length - 1 ? 0 : e + 1)
                }
            },
            ne = () => {
                if (k && F) {
                    if (C && c) {
                        const e = document.querySelector(".ins-carousel-video-item--active .ins-carousel-video");
                        e && (he.current = !0, e.pause(), e.muted = !0)
                    }
                    O(e => e <= 0 ? F.length - 1 : e - 1)
                }
            },
            q = e => {
                if (k && F && e >= 0 && e < F.length) {
                    if (C && c) {
                        const t = document.querySelector(".ins-carousel-video-item--active .ins-carousel-video");
                        t && (he.current = !0, t.pause(), t.muted = !0)
                    }
                    O(e)
                }
            };
        K(() => {
            c && !_t && Ne(!0)
        }, [c, _t]), K(() => {
            c && k && setTimeout(() => {
                if (C) {
                    const t = document.querySelector(".ins-carousel-video-item--active .ins-carousel-video");
                    t && (t.muted = R, t.play().catch(o => console.log(`%c${o}`, "color: red;")), A(!0))
                } else S.current && (S.current.muted = R, S.current.play().then(() => A(!0)).catch(t => console.log(`%c${t}`, "color: red;")));
                const e = Bt();
                if (e) {
                    const t = e.m.find(o => o.s === "high") ? .v;
                    t && dn(e.i, t)
                }
            }, 100)
        }, [$, c, k]);
        const ue = Ie(0),
            be = Ie(!1),
            pt = e => {
                if (!c || !k) return;
                const t = e.target;
                t.closest(".ins-mobile-reel-controls") || t.closest(".ins-reel-pop-player-product-panel") || t.closest("button") || t.closest("[role='button']") || (qe.current = e.touches[0].clientY, ue.current = e.touches[0].clientX, be.current = !1)
            },
            bt = e => {
                if (!c || !k) return;
                const t = e.target;
                if (t.closest(".ins-mobile-reel-controls") || t.closest(".ins-reel-pop-player-product-panel") || t.closest("button") || t.closest("[role='button']")) return;
                const o = e.touches[0].clientY,
                    s = e.touches[0].clientX,
                    a = Math.abs(o - qe.current),
                    p = Math.abs(s - ue.current);
                a > 5 && a > p && (be.current = !0, e.preventDefault(), e.stopPropagation())
            },
            ie = e => {
                if (!c || !k) return;
                const t = e.target;
                t.closest(".ins-mobile-reel-controls") || t.closest(".ins-reel-pop-player-product-panel") || t.closest("button") || t.closest("[role='button']") || (at.current = e.changedTouches[0].clientY, be.current && (e.preventDefault(), e.stopPropagation(), $t()), be.current = !1)
            },
            $t = () => {
                if (!k || !c) return;
                const e = 50,
                    t = qe.current - at.current;
                Math.abs(t) > e && (t > 0 ? M() : ne())
            },
            nt = e => e ? e.tagName === "BUTTON" || e.tagName === "A" || !!e.closest("button") || !!e.closest("a") || !!e.closest(".ins-reel-pop-modal-player-pip-close-button") || !!e.closest(".ins-reel-pop-player-pip-play-controls") || !!e.closest(".ins-reel-pop-modal-player-mute-button") || !!e.closest(".ins-carousel-close-button") || !!e.closest(".ins-carousel-mute-button") : !1,
            Nt = Ie(!1),
            vt = Ie(!1),
            Zt = (e, t) => {
                c || (Tt(!0), Et({
                    x: e,
                    y: t
                }), ut(!1), document.body.style.userSelect = "none", document.body.style.webkitUserSelect = "none", vt.current || (I.current.mousemove = Po, I.current.mouseup = Io, I.current.touchmove = ko, I.current.touchend = No, document.addEventListener("mousemove", I.current.mousemove), document.addEventListener("mouseup", I.current.mouseup), document.addEventListener("touchmove", I.current.touchmove, {
                    passive: !1
                }), document.addEventListener("touchend", I.current.touchend, {
                    passive: !1
                }), vt.current = !0))
            },
            rn = e => {
                if (c) return;
                const t = e.target;
                if (!nt(t)) {
                    Nt.current = !0;
                    try {
                        e.currentTarget ? .setPointerCapture ? .(e.pointerId)
                    } catch {}
                    e.preventDefault(), e.stopPropagation(), Zt(e.clientX, e.clientY)
                }
            },
            sn = e => {
                !W || (e.preventDefault(), requestAnimationFrame(() => {
                    Jt(e.clientX, e.clientY)
                }))
            },
            an = e => {
                if (!W) return;
                const t = e.target;
                if (Fe) e.preventDefault(), e.stopPropagation();
                else {
                    const o = new MouseEvent("click", {
                        bubbles: !0,
                        cancelable: !0,
                        clientX: e.clientX,
                        clientY: e.clientY
                    });
                    setTimeout(() => {
                        const s = t.closest("button") || t.closest("a") || null;
                        if (s) {
                            s.dispatchEvent(o);
                            return
                        }
                        if (S.current) {
                            S.current.dispatchEvent(o);
                            return
                        }
                        t.dispatchEvent(o)
                    }, 10)
                }
                Lt(), Nt.current = !1
            },
            Jt = (e, t) => {
                if (!W || c) return;
                const o = e - It.x,
                    s = t - It.y;
                !Fe && (Math.abs(o) > kt || Math.abs(s) > kt) && ut(!0);
                const a = ot.x + o,
                    p = ot.y + s;
                Le({
                    x: a,
                    y: p
                }), Et({
                    x: e,
                    y: t
                })
            },
            Lt = () => {
                !W || (Tt(!1), document.body.style.userSelect = "", document.body.style.webkitUserSelect = "", vt.current && (I.current.mousemove && document.removeEventListener("mousemove", I.current.mousemove), I.current.mouseup && document.removeEventListener("mouseup", I.current.mouseup), I.current.touchmove && document.removeEventListener("touchmove", I.current.touchmove), I.current.touchend && document.removeEventListener("touchend", I.current.touchend), I.current = {
                    mousemove: null,
                    mouseup: null,
                    touchmove: null,
                    touchend: null
                }, vt.current = !1), Fe && setTimeout(() => {
                    ut(!1)
                }, 100))
            },
            cn = e => {
                if (c) return;
                const t = e.target;
                nt(t) || (e.stopPropagation(), Zt(e.clientX, e.clientY))
            },
            Po = e => {
                if (!W) return;
                const t = e.target;
                if (nt(t)) {
                    Fe && Lt();
                    return
                }
                e.preventDefault(), requestAnimationFrame(() => {
                    Jt(e.clientX, e.clientY)
                })
            },
            Io = e => {
                !W || (Fe && (e.preventDefault(), e.stopPropagation()), Lt())
            },
            ln = e => {
                if (Nt.current || c) return;
                const t = e.target;
                if (nt(t)) return;
                const o = e.touches[0];
                e.preventDefault(), e.stopPropagation(), Zt(o.clientX, o.clientY)
            },
            ko = e => {
                if (Nt.current || !W || c) return;
                const t = e.target;
                if (nt(t)) {
                    Fe && Lt();
                    return
                }
                e.preventDefault(), e.stopPropagation();
                const o = e.touches[0];
                requestAnimationFrame(() => {
                    Jt(o.clientX, o.clientY)
                })
            },
            No = e => {
                if (Nt.current) return;
                const t = e.target,
                    o = e.changedTouches[0],
                    s = nt(t);
                if (!W) {
                    if (s && t) {
                        const a = new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0,
                            clientX: o.clientX,
                            clientY: o.clientY
                        });
                        (t.closest("button") || t.closest("a") || t).dispatchEvent(a)
                    } else if (t) {
                        const a = new MouseEvent("click", {
                            bubbles: !0,
                            cancelable: !0,
                            clientX: o.clientX,
                            clientY: o.clientY
                        });
                        t.dispatchEvent(a)
                    }
                    return
                }
                if (Fe) e.preventDefault(), e.stopPropagation();
                else if (s && t) {
                    const a = new MouseEvent("click", {
                        bubbles: !0,
                        cancelable: !0,
                        clientX: o.clientX,
                        clientY: o.clientY
                    });
                    setTimeout(() => {
                        (t.closest("button") || t.closest("a") || t).dispatchEvent(a)
                    }, 10)
                } else if (t) {
                    const a = new MouseEvent("click", {
                        bubbles: !0,
                        cancelable: !0,
                        clientX: o.clientX,
                        clientY: o.clientY
                    });
                    setTimeout(() => {
                        t.dispatchEvent(a)
                    }, 10)
                }
                Lt()
            };
        K(() => {
            (async () => {
                try {
                    if (Pt.current || !Re) return;
                    de.shortVideosBoron({
                        eventType: "shortVideoImpression",
                        source: "videoPop",
                        shortVideoView: {
                            shortVideoId: d ? .i ? ? ""
                        },
                        pageId: Ae,
                        pageType: Ee
                    }).then(() => {
                        Pt.current = !0
                    }).catch(e => console.log(`%cFailed to call error${e}`, "color: red;")), me && pe.trackImpression("video-pop", v.pageType, J), fe && N.trackImpression("video-carousel", v.pageType), Se && ce.trackImpression("video-carousel", v.pageType), ke && _e.trackImpression("video-carousel", v.pageType)
                } catch (e) {
                    console.log(`%cFailed to track feed impression ${e}`, "color: red;")
                }
            })()
        }, [d, Re]), K(() => {
            if (r ? .product) {
                const e = r.product,
                    t = e.v.find(o => o.is);
                if (e.o && e.o.length > 0)
                    if (t) {
                        const o = t.v.split(" / "),
                            s = e.o.reduce((a, p, y) => (a[p.n] = o[y], a), {});
                        Je(s), Ze(t.pi)
                    } else {
                        const o = e.o.reduce((s, a) => (s[a.n] = a.v[0], s), {});
                        Je(o), Ze(e.v[0] ? .pi || null)
                    }
                else Ze(t ? .pi || e.v[0] ? .pi || null)
            }
        }, [r]), K(() => {
            (async () => {
                if (!(!we || !r ? .product ? .h || Qe)) try {
                    wt(!0);
                    const t = await v.fetchProductDetails(r.product.h);
                    if (t) {
                        dt(t);
                        const o = v.getProductImages(t);
                        Ft(o)
                    }
                } catch (t) {
                    console.log(`%cFailed to fetch full product data: ${t}`, "color: red;")
                } finally {
                    wt(!1)
                }
            })()
        }, [we, r ? .product ? .h, Qe]), K(() => {
            c && k ? (x(!1), S.current && (he.current = !0, S.current.pause(), S.current.muted = !0)) : c && !k ? (se(!1), S.current && (S.current.muted = !1)) : c || (se(!0), S.current && (he.current = !0, S.current.muted = !0))
        }, [c]), K(() => {
            if (!C && c && k && Me.current) {
                const e = Me.current;
                return e.addEventListener("touchstart", pt, {
                    passive: !1
                }), e.addEventListener("touchmove", bt, {
                    passive: !1
                }), e.addEventListener("touchend", ie, {
                    passive: !1
                }), () => {
                    e.removeEventListener("touchstart", pt), e.removeEventListener("touchmove", bt), e.removeEventListener("touchend", ie)
                }
            }
        }, [C, c, k]), K(() => {
            if (!S.current) return;
            const e = S.current,
                t = e.pause.bind(e);
            return e.pause = function() {
                (w && !z || c) && !he.current || t()
            }, () => {
                e && e.pause !== t && (e.pause = t)
            }
        }, [S.current, w, c, z]), K(() => {
            he.current = !1
        }, [$, c]), K(() => {
            if (!w || c || !te.current) return;
            const e = te.current,
                t = o => {
                    ln(o)
                };
            return e.addEventListener("touchstart", t, {
                passive: !1
            }), () => {
                e.removeEventListener("touchstart", t)
            }
        }, [w, c]), K(() => {
            if (!w || c || vt.current) return;
            const e = a => {
                    Po(a)
                },
                t = a => {
                    Io(a)
                },
                o = a => {
                    ko(a)
                },
                s = a => {
                    No(a)
                };
            if (W) return document.addEventListener("mousemove", e), document.addEventListener("mouseup", t), document.addEventListener("touchmove", o, {
                passive: !1
            }), document.addEventListener("touchend", s, {
                passive: !1
            }), () => {
                document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", t), document.removeEventListener("touchmove", o), document.removeEventListener("touchend", s)
            }
        }, [W, w, c]), K(() => {
            if (c) {
                const e = document.body.style.overflow,
                    t = document.documentElement.style.overflow;
                return document.body.style.overflow = "hidden", document.documentElement.style.overflow = "hidden", () => {
                    document.body.style.overflow = e, document.documentElement.style.overflow = t
                }
            }
        }, [c]);
        const dn = async (e, t) => {
                try {
                    await de.shortVideosBoron({
                        eventType: "shortVideoView",
                        source: "videoPop",
                        shortVideoView: {
                            shortVideoId: e
                        },
                        pageId: Ae,
                        pageType: Ee
                    }), me && pe.trackView("video-pop", v.pageType, t, J), fe && N.trackView("video-pop", v.pageType, t), Se && ce.trackView("video-pop", v.pageType, t)
                } catch (o) {
                    console.log(`%c${o}`, "color: red;")
                } finally {
                    sessionStorage.setItem("sessionTime", Date.now().toString())
                }
            },
            un = async (e, t) => {
                try {
                    await de.shortVideosBoron({
                        eventType: "shortVideoClick",
                        shortVideoView: {
                            shortVideoId: e
                        },
                        source: "videoPop",
                        pageId: Ae,
                        pageType: Ee
                    });
                    const o = Date.now(),
                        s = {
                            value: !0,
                            timestamp: o,
                            expiry: o + 7 * 24 * 60 * 60 * 1e3
                        };
                    localStorage.setItem("influenced_click_attribute", JSON.stringify(s)), me && pe.trackClick("video-pop", v.pageType, t, J), fe && N.trackClick("video-pop", v.pageType, t), Se && ce.trackClick("video-pop", v.pageType, t)
                } catch (o) {
                    console.log(`%c${o}`, "color: red;")
                } finally {
                    sessionStorage.setItem("sessionTime", Date.now().toString())
                }
            },
            pn = async (e, t) => {
                try {
                    await de.shortVideosBoron({
                        eventType: "shortVideoClick",
                        shortVideoView: {
                            shortVideoId: e
                        },
                        source: "videoPop",
                        pageId: Ae,
                        pageType: Ee
                    });
                    const o = Date.now(),
                        s = {
                            value: !0,
                            timestamp: o,
                            expiry: o + 7 * 24 * 60 * 60 * 1e3
                        };
                    localStorage.setItem("influenced_click_attribute", JSON.stringify(s)), await de.shortVideosBoron({
                        eventType: "shortVideoView",
                        source: "videoPop",
                        shortVideoView: {
                            shortVideoId: e
                        },
                        pageId: Ae,
                        pageType: Ee
                    }), me && (pe.trackClick("video-pop", v.pageType, t, J), pe.trackView("video-pop", v.pageType, t, J)), fe && (N.trackClick("video-pop", v.pageType, t), N.trackView("video-pop", v.pageType, t)), Se && (ce.trackClick("video-pop", v.pageType, t), ce.trackView("video-pop", v.pageType, t)), ke && (_e.trackClick("video-pop", v.pageType, t), _e.trackView("video-pop", v.pageType, t))
                } catch (o) {
                    console.log(`%c${o}`, "color: red;")
                } finally {
                    sessionStorage.setItem("sessionTime", Date.now().toString())
                }
            },
            Lo = e => {
                if (e.preventDefault(), e.stopPropagation(), C || window.scrollTo(0, window.scrollY + 200), e.target === e.currentTarget && c && C) {
                    L(!1), B(!1);
                    return
                }
                e.target === e.currentTarget && (L(!1), B(!1))
            },
            Oo = d ? .m.find(e => e.s === "low") ? .v ? ? d ? .m[0] ? .v,
            Qt = d ? .m.find(e => e.s === "high") ? .v ? ? Oo,
            mn = G === "dxn1df-8n.myshopify.com" ? Qt : Oo,
            eo = d ? .m.find(e => e.s === "high") ? .t,
            Ot = () => {
                if (S.current) {
                    try {
                        he.current = !0, S.current.pause()
                    } catch {}
                    S.current.muted = !0;
                    try {
                        S.current.currentTime = 0
                    } catch {}
                }
                document.querySelectorAll(".ins-carousel-video, .ins-reel-video").forEach(e => {
                    const t = e;
                    try {
                        t.pause()
                    } catch {}
                    t.muted = !0
                }), L(!1), !_t && d && de.shortVideosBoron({
                    eventType: "closePip",
                    source: "videoPop",
                    shortVideoView: {
                        shortVideoId: d.i
                    },
                    pageId: Ae,
                    pageType: Ee
                }).catch(e => {
                    console.log(`%cClose PIP API call failed ${e}`, "color: red;")
                }), Be && !_t ? ($e(!0), ct(!0)) : (E(!1), $e(!1), ct(!1)), Le({
                    x: 0,
                    y: 0
                }), ut(!1), Tt(!1), te.current && (te.current.style.cssText = "")
            },
            xo = e => {
                if (e.stopPropagation(), Fe) {
                    ut(!1);
                    return
                }
                z && ($e(!1), ct(!1)), c || (L(!0), d && !k && pn(d.i, d ? .m[0] ? .v), d && k && un(d.i, d ? .m[0] ? .v), te.current && (te.current.style.top = "", te.current.style.left = "", te.current.style.bottom = "", te.current.style.right = ""))
            },
            fn = e => {
                e.stopPropagation(), S.current && (S.current.paused ? S.current.play().then(() => A(!0)).catch(t => console.log(`%c${t}`, "color: red;")) : (he.current = !0, S.current.pause(), A(!1)))
            },
            to = async e => {
                c && k ? (x(!0), document.querySelectorAll(".ins-carousel-video, .ins-reel-video").forEach(s => {
                    s.muted = !0
                })) : (se(!0), S.current && (S.current.muted = !0));
                const t = d ? .p.find(o => o.i === e);
                try {
                    if (t) {
                        if (t.v && t.v.length > 0 && Do(t.v)) {
                            X(o => ({ ...o,
                                [t.i]: !0
                            }));
                            return
                        }
                        if (Z === "popUp") {
                            if (G === "sisuv5-wp.myshopify.com" || t ? .v && t ? .v.length > 1) {
                                Ge({
                                    product: t,
                                    videoUrl: Qt
                                }), B(!0);
                                return
                            }
                        } else if (Z === "pdp" && t ? .v && t ? .v.length > 1 && !window.location.pathname.includes("/products/") && !re) {
                            window.location.href = "/products/" + t.h;
                            return
                        }
                        await hn(t)
                    }
                } catch (o) {
                    console.log(`%cFFailed to fetch product details ${o}`, "color: red;")
                }
            },
            hn = async e => {
                if (!e.vi) return;
                const t = Xt(),
                    o = Date.now();
                if (t.emitEvent("atc_user_flow_start", {
                        product_id: e.i,
                        source: "video_pop_purchase"
                    }), Oe(e)) {
                    X(p => ({ ...p,
                        [e.i]: !0
                    })), Y(p => ({ ...p,
                        [e.i]: !1
                    }));
                    return
                }
                const s = e.vi;
                Y(p => ({ ...p,
                    [e.i]: !0
                })), X(p => ({ ...p,
                    [e.i]: !1
                }));
                const a = Mo();
                if (re) {
                    try {
                        if (G === "buywow.in") try {
                            const p = await de.checkStock({
                                productId: e.pi,
                                variantId: s
                            });
                            if (console.log("Stock status :", p), p !== "in stock") {
                                X(y => ({ ...y,
                                    [e.i]: !0
                                })), Y(y => ({ ...y,
                                    [e.i]: !1
                                }));
                                return
                            }
                            X(y => ({ ...y,
                                [e.i]: !1
                            }))
                        } catch (p) {
                            console.log(`%cStock check failed: ${p}`, "color: red;")
                        }
                        "handleEventAfterCartEvent" in window && typeof window.handleEventAfterCartEvent == "function" && (window.handleEventAfterCartEvent({
                            productId: e.pi,
                            variantId: s,
                            orderAttributionToken: a
                        }), await de.shortVideosBoron({
                            eventType: "addToCart",
                            addToCart: {
                                shortVideoId: d ? .i,
                                productId: e.i,
                                providerCartId: "",
                                variantId: s,
                                quantity: 1,
                                orderAttributionToken: a
                            },
                            source: "videoPop",
                            pageType: Ee,
                            pageId: Ae
                        }), sessionStorage.setItem("sessionTime", Date.now().toString())), me && pe.trackAddToCart(e.i, 1, s, "video-carousel", v.pageType, d ? .m[0].v ? ? "", J), fe && N.trackAddToCart(e.i, 1, s, "video-carousel", v.pageType, d ? .m[0].v ? ? ""), Se && ce.trackAddToCart(e.i, 1, s, "video-carousel", v.pageType, d ? .m[0].v ? ? ""), ke && _e.trackAddToCart(e.i, 1, s, "video-carousel", v.pageType, d ? .m[0].v ? ? ""), tt(p => ({ ...p,
                            [e.i]: !0
                        })), setTimeout(() => {
                            tt(p => ({ ...p,
                                [e.i]: !1
                            }))
                        }, 5e3), X(p => ({ ...p,
                            [e.i]: !1
                        })), t.emitEvent("atc_user_flow_complete", {
                            duration_ms: Date.now() - o,
                            product_id: e.i,
                            source: "video_pop_purchase"
                        })
                    } catch (p) {
                        console.log(`%cError in storefront cart operation: ${p}`, "color: red;"), t.emitEvent("atc_user_flow_error", {
                            duration_ms: Date.now() - o,
                            error_message: p ? .message || "Unknown error",
                            product_id: e.i,
                            source: "video_pop_purchase"
                        })
                    } finally {
                        Y(p => ({ ...p,
                            [e.i]: !1
                        }))
                    }
                    return
                }
                try {
                    let p = !1;
                    (Z !== "pdp" || Z === "pdp" && window.location.pathname.includes("/products/")) && (re || (p = await Ro(s, a, e.pi))), !p && !re && (await v.addToCart(s, "REELS", e.h, a), await new Promise(y => setTimeout(y, 500)));
                    try {
                        await v.updateCartInfo(a)
                    } catch (y) {
                        console.log(`%cFailed to update cart ${y}`, "color: red;")
                    }
                    if (re) {
                        if (G === "buywow.in") try {
                            const y = await de.checkStock({
                                productId: e.pi,
                                variantId: s
                            });
                            if (console.log("Stock status :", y), y !== "in stock") {
                                X(T => ({ ...T,
                                    [e.i]: !0
                                })), Y(T => ({ ...T,
                                    [e.i]: !1
                                }));
                                return
                            }
                            X(T => ({ ...T,
                                [e.i]: !1
                            }))
                        } catch (y) {
                            console.log(`%cStock check failed: ${y}`, "color: red;")
                        }
                        "handleEventAfterCartEvent" in window && typeof window.handleEventAfterCartEvent == "function" && window.handleEventAfterCartEvent({
                            productId: e.pi,
                            variantId: s,
                            orderAttributionToken: a
                        })
                    } else {
                        const y = await v.getCurrentCart();
                        if (!y) throw new Error("Failed to verify cart update");
                        await de.shortVideosBoron({
                            eventType: "addToCart",
                            addToCart: {
                                shortVideoId: d ? .i,
                                productId: e.i,
                                providerCartId: y.token,
                                variantId: s,
                                quantity: 1,
                                orderAttributionToken: a
                            },
                            source: "videoPop",
                            pageType: Ee,
                            pageId: Ae
                        }), sessionStorage.setItem("sessionTime", Date.now().toString())
                    }
                    me && pe.trackAddToCart(e.i, 1, s, "video-pop", v.pageType, d ? .m[0] ? .v ? ? "", J), fe && N.trackAddToCart(e.i, 1, s, "video-pop", v.pageType, f ? .m[0] ? .v ? ? ""), Se && ce.trackAddToCart(e.i, 1, s, "video-pop", v.pageType, f ? .m[0] ? .v ? ? ""), ke && _e.trackAddToCart(e.i, 1, s, "video-pop", v.pageType, f ? .m[0] ? .v ? ? ""), Z === "pdp" ? !window.location.pathname.includes("/products/") && !re && (window.location.href = "/products/" + e.h) : !p && !re && (Vo.includes(window.Shopify ? .shop) || (window.location.href = "/cart")), X(y => ({ ...y,
                        [e.i]: !1
                    })), t.emitEvent("atc_user_flow_complete", {
                        duration_ms: Date.now() - o,
                        product_id: e.i,
                        source: "video_pop_purchase"
                    })
                } catch (p) {
                    console.log(`%cError in purchase flow ${p}`, "color: red;"), t.emitEvent("atc_user_flow_error", {
                        duration_ms: Date.now() - o,
                        error_message: p ? .message || "Unknown error",
                        product_id: e.i,
                        source: "video_pop_purchase"
                    })
                } finally {
                    Y(p => ({ ...p,
                        [e.i]: !1
                    })), sessionStorage.setItem("sessionTime", Date.now().toString())
                }
            },
            gn = e => {
                e.stopPropagation(), c && k ? (x(!R), document.querySelectorAll(".ins-carousel-video, .ins-reel-video").forEach(o => {
                    o.muted = !R
                })) : S.current && (S.current.muted = !S.current.muted, se(S.current.muted))
            },
            j = () => !r ? .product ? .v || !Ke ? null : r.product.v.find(e => e.pi === Ke),
            oo = (e, t) => {
                if (!r ? .product) return;
                const o = { ...lt,
                    [e]: t
                };
                Je(o);
                const s = r.product.o.map(p => o[p.n] || p.v[0]).join(" / "),
                    a = r.product.v.find(p => p.v === s);
                a && Ze(a.pi)
            },
            it = (e, t) => {
                if (!lt[e.n]) return "";
                const o = lt[e.n] === t,
                    s = { ...lt,
                        [e.n]: t
                    },
                    a = r ? .product ? .o.map(T => s[T.n] || T.v[0]).join(" / "),
                    p = r ? .product ? .v.find(T => T.v === a),
                    y = p ? !p.is : !0;
                return o ? y ? "ins-pip-product-details-variants-item__active ins-pip-product-details-variants-item__out-of-stock" : "ins-pip-product-details-variants-item__active" : y ? "ins-pip-product-details-variants-item__out-of-stock" : ""
            },
            Oe = e => {
                const t = j();
                if (t) return !t.is;
                const o = e || r ? .product;
                if (o && o.v && o.v.length > 0) {
                    const s = o.v.find(a => a.pi === o.vi) || o.v[0];
                    if (s) return !s.is
                }
                return !1
            },
            St = e => {
                const t = e || r ? .product;
                if (t && t.v && t.v.length > 0) {
                    if (Do(t.v)) return G === "terredefrance.myshopify.com" ? "Rupture de stock" : G === "37f807-2.myshopify.com" ? "Agotado" : "Out of stock"
                } else if (t && (!t.v || t.v.length === 0) && Oe(t)) return G === "terredefrance.myshopify.com" ? "Rupture de stock" : G === "37f807-2.myshopify.com" ? "Agotado" : "Out of stock";
                return G === "buywow.in" && At[e.i] ? "Out of stock" : G === "terredefrance.myshopify.com" ? He[e.i] ? "Ajout au panier" : "Ajouter au panier" : G === "336df5.myshopify.com" ? He[e.i] ? "Adding to cart.." : "ADD TO CART" : G === "37f807-2.myshopify.com" ? He[e.i] ? "comprando" : "comprar" : G == "" ? He[e.i] ? (r ? .product ? .v.length ? ? 0) > 1 ? "Loading..." : "Adding to cart.." : (r ? .product ? .v.length ? ? 0) > 1 ? "Shop now" : "ADD TO CART" : He[e.i] ? "Adding to cart.." : "ADD TO CART"
            },
            no = async () => {
                if (!r) return;
                const e = Xt(),
                    t = Date.now();
                if (e.emitEvent("atc_user_flow_start", {
                        product_id: r.product.i,
                        source: "video_pop_add_to_cart"
                    }), Oe(r.product)) {
                    X(a => ({ ...a,
                        [r.product.i]: !0
                    })), Y(a => ({ ...a,
                        [r.product.i]: !1
                    })), Pe(!1);
                    return
                }
                c && k ? (x(!0), document.querySelectorAll(".ins-carousel-video, .ins-reel-video").forEach(p => {
                    p.muted = !0
                })) : (se(!0), S.current && (S.current.muted = !0)), Pe(!0), Y(a => ({ ...a,
                    [r.product.i]: !0
                }));
                const o = Ke || r.product ? .v[0] ? .pi;
                if (!o) {
                    console.log("%cNo variant selected", "color: red;"), Y(a => ({ ...a,
                        [r.product.i]: !1
                    })), Pe(!1);
                    return
                }
                X(a => ({ ...a,
                    [r.product.i]: !1
                }));
                const s = Mo();
                if (re) {
                    try {
                        if (G === "buywow.in") try {
                            const a = await de.checkStock({
                                productId: r.product.pi,
                                variantId: o
                            });
                            if (console.log("Stock status :", a), a !== "in stock") {
                                X(p => ({ ...p,
                                    [r.product.i]: !0
                                })), Y(p => ({ ...p,
                                    [r.product.i]: !1
                                })), Pe(!1);
                                return
                            }
                            X(p => ({ ...p,
                                [r.product.i]: !1
                            }))
                        } catch (a) {
                            console.log(`%cStock check failed: ${a}`, "color: red;")
                        }
                        "handleEventAfterCartEvent" in window && typeof window.handleEventAfterCartEvent == "function" && (window.handleEventAfterCartEvent({
                            productId: r.product.pi,
                            variantId: o,
                            orderAttributionToken: s
                        }), await de.shortVideosBoron({
                            eventType: "addToCart",
                            addToCart: {
                                shortVideoId: d ? .i ? ? "",
                                productId: r.product.i,
                                providerCartId: "",
                                variantId: o,
                                quantity: 1,
                                orderAttributionToken: s
                            },
                            source: "videoPop",
                            pageId: Ae,
                            pageType: Ee
                        })), me && pe.trackAddToCart(r.product.i, 1, o, "video-carousel", v.pageType, d ? .m[0].v ? ? "", J), fe && N.trackAddToCart(r.product.i, 1, o, "video-carousel", v.pageType, d ? .m[0].v ? ? ""), Se && ce.trackAddToCart(r.product.i, 1, o, "video-carousel", v.pageType, d ? .m[0].v ? ? ""), ke && _e.trackAddToCart(r.product.i, 1, o, "video-carousel", v.pageType, d ? .m[0].v ? ? ""), Y(a => ({ ...a,
                            [r.product.i]: !1
                        })), Pe(!1), ft(!0), setTimeout(() => {
                            ft(!1)
                        }, 5e3), X(a => ({ ...a,
                            [r.product.i]: !1
                        })), e.emitEvent("atc_user_flow_complete", {
                            duration_ms: Date.now() - t,
                            product_id: r.product.i,
                            source: "video_pop_add_to_cart"
                        })
                    } catch (a) {
                        console.log(`%cError in storefront cart operation: ${a}`, "color: red;"), Y(p => ({ ...p,
                            [r.product.i]: !1
                        })), Pe(!1), e.emitEvent("atc_user_flow_error", {
                            duration_ms: Date.now() - t,
                            error_message: a ? .message || "Unknown error",
                            product_id: r.product.i,
                            source: "video_pop_add_to_cart"
                        })
                    }
                    return
                }
                try {
                    let a = !1;
                    re || (a = await Ro(o, s, r.product.pi)), !a && !re && (await v.addToCart(o, "REELS", r.product.h, s), await new Promise(p => setTimeout(p, 500)));
                    try {
                        await v.updateCartInfo(s)
                    } catch (p) {
                        console.log(`%cFailed to update cart ${p}`, "color: red;")
                    }
                    if (re) {
                        if (G === "buywow.in") try {
                            const p = await de.checkStock({
                                productId: r.product.pi,
                                variantId: o
                            });
                            if (console.log("Stock status :", p), p !== "in stock") {
                                X(y => ({ ...y,
                                    [r.product.i]: !0
                                })), Y(y => ({ ...y,
                                    [r.product.i]: !1
                                })), Pe(!1);
                                return
                            }
                            X(y => ({ ...y,
                                [r.product.i]: !1
                            }))
                        } catch (p) {
                            console.log(`%cStock check failed: ${p}`, "color: red;")
                        }
                        "handleEventAfterCartEvent" in window && typeof window.handleEventAfterCartEvent == "function" && window.handleEventAfterCartEvent({
                            productId: r.product.pi,
                            variantId: o,
                            orderAttributionToken: s
                        })
                    } else {
                        const p = await v.getCurrentCart();
                        if (!p) throw Y(y => ({ ...y,
                            [r.product.i]: !1
                        })), Pe(!1), new Error("Failed to verify cart update");
                        await de.shortVideosBoron({
                            eventType: "addToCart",
                            addToCart: {
                                shortVideoId: d ? .i ? ? "",
                                productId: r.product.i,
                                providerCartId: p.token,
                                variantId: o,
                                quantity: 1,
                                orderAttributionToken: s
                            },
                            source: "videoPop",
                            pageId: Ae,
                            pageType: Ee
                        })
                    }
                    me && pe.trackAddToCart(r.product.i, 1, o, "video-carousel", v.pageType, d ? .m[0].v ? ? "", J), !a && !re && (Vo.includes(window.Shopify ? .shop) || (window.location.href = "/cart")), X(p => ({ ...p,
                        [r.product.i]: !1
                    })), Y(p => ({ ...p,
                        [r.product.i]: !1
                    })), Pe(!1), e.emitEvent("atc_user_flow_complete", {
                        duration_ms: Date.now() - t,
                        product_id: r.product.i,
                        source: "video_pop_add_to_cart"
                    })
                } catch (a) {
                    console.log(`%cError in purchase flow ${a}`, "color: red;"), Y(p => ({ ...p,
                        [r.product.i]: !1
                    })), Pe(!1), e.emitEvent("atc_user_flow_error", {
                        duration_ms: Date.now() - t,
                        error_message: a ? .message || "Unknown error",
                        product_id: r.product.i,
                        source: "video_pop_add_to_cart"
                    })
                } finally {
                    sessionStorage.setItem("sessionTime", Date.now().toString())
                }
            },
            vn = () => !k || !F || !c ? null : i("div", {
                className: "ins-desktop-video-carousel",
                onClick: Lo,
                children: [F.map((e, t) => {
                    const o = t === $,
                        s = t === $ - 1,
                        a = t === $ + 1,
                        p = e.m.find(y => y.s === "high") ? .v;
                    return i("div", {
                        className: jt({
                            "ins-carousel-video-item": !0,
                            "ins-carousel-video-item--active": o,
                            "ins-carousel-video-item--previous": s,
                            "ins-carousel-video-item--next": a,
                            "ins-carousel-video-item--hidden": !o && !s && !a
                        }),
                        onClick: y => {
                            y.stopPropagation(), o || q(t)
                        },
                        children: [i("video", {
                            className: "ins-carousel-video",
                            src: p,
                            autoPlay: o,
                            loop: !0,
                            muted: R,
                            controls: !1,
                            playsInline: !0,
                            onPlay: () => o && A(!0),
                            onPause: () => o && A(!1),
                            onLoadedMetadata: y => {
                                if (o) {
                                    const T = y.currentTarget;
                                    T.muted = R, T.play().then(() => A(!0)).catch(je => console.log(`%c${je}`, "color: red;"))
                                }
                            },
                            ref: o ? S : null
                        }), o && i("div", {
                            className: "ins-carousel-video-controls",
                            children: [i("div", {
                                onClick: y => {
                                    y.stopPropagation(), x(!R), document.querySelectorAll(".ins-carousel-video, .ins-reel-video").forEach(je => {
                                        je.muted = !R
                                    })
                                },
                                className: "ins-carousel-mute-button",
                                children: R ? i(ao, {
                                    className: "ins-carousel-speaker-icon"
                                }) : i(co, {
                                    className: "ins-carousel-speaker-icon"
                                })
                            }), i("button", {
                                onClick: y => {
                                    y.stopPropagation(), S.current && (he.current = !0, S.current.pause(), S.current.muted = !0, S.current = null), Ye ? Ot() : L(!1)
                                },
                                className: "ins-carousel-close-button",
                                children: i(lo, {
                                    className: "ins-carousel-close-icon"
                                })
                            })]
                        }), o && e ? .b === 2 && e ? .ct ? i("div", {
                            className: "ins-reel-pop-player-product-panel",
                            style: {
                                bottom: "50px"
                            },
                            children: i("div", {
                                className: "ins-pip-product-panel-item",
                                style: {
                                    justifyContent: "center",
                                    backgroundColor: "unset",
                                    width: "100%",
                                    margin: "unset",
                                    display: "flex"
                                },
                                children: i("button", {
                                    className: "ins-custom-cta-button",
                                    onClick: () => {
                                        e ? .ct ? .cl && window.open(e.ct.cl, "_blank")
                                    },
                                    title: e ? .ct ? .cn,
                                    children: i("span", {
                                        ref: m,
                                        className: "ins-custom-cta-text",
                                        style: po,
                                        children: e ? .ct ? .cn || "Custom Button"
                                    })
                                })
                            })
                        }) : o && e.p && e.p.length > 0 && i("div", {
                            className: "ins-reel-pop-player-product-panel",
                            children: (() => {
                                let y = d ? .p ? [...d.p] : [];
                                if (v.currentProductId) {
                                    const T = y.findIndex(je => je.pi === v.currentProductId);
                                    if (T !== -1) {
                                        const je = y.splice(T, 1)[0];
                                        y.unshift(je)
                                    }
                                }
                                return y.map((T, je) => i("div", {
                                    className: "ins-pip-product-panel-item",
                                    onClick: Gt => to(T.i),
                                    children: [i("div", {
                                        className: "ins-pip-product-panel-item-inner",
                                        children: [i("div", {
                                            className: "ins-pip-product-panel-item-thumbnail",
                                            style: {
                                                backgroundImage: `url(${T.im})`
                                            }
                                        }), i("div", {
                                            className: "ins-pip-product-panel-item-details",
                                            children: i("div", {
                                                children: [i("p", {
                                                    className: "ins-pip-product-panel-item-title",
                                                    children: T.t ? .toLowerCase() ? ? ""
                                                }), i("p", {
                                                    className: "ins-pip-product-panel-item-price",
                                                    children: [(() => {
                                                        const Gt = T ? .cp != null ? T ? .cp ? .[V].pr ? ? T.pr ? ? 0 : T.pr || 0,
                                                            {
                                                                price: io,
                                                                currency: ro
                                                            } = u(Gt, T);
                                                        return xe(io, ro)
                                                    })(), D && T.c && T.c > T.pr ? i("span", {
                                                        className: "ins-product-panel-item-strikeoff-price",
                                                        children: (() => {
                                                            const Gt = T ? .cp != null ? T.cp ? .[V] ? .cs || 0 : T ? .c || 0,
                                                                {
                                                                    price: io,
                                                                    currency: ro
                                                                } = u(Gt, T);
                                                            return xe(io, ro)
                                                        })()
                                                    }) : null, ae && T.c && T.c > T.pr && g(T) > 0 ? i("span", {
                                                        className: "ins-pip-product-panel-item-discount-badge",
                                                        children: ["Save", " ", g(T), "%"]
                                                    }) : null]
                                                })]
                                            })
                                        })]
                                    }), i("p", {
                                        className: "ins-pip-product-panel-item-buy-now",
                                        children: St(T)
                                    })]
                                }, T.pi || je))
                            })()
                        }), o && i(Ht, {
                            children: [i(mo, {
                                videoId: e.i,
                                originFqdn: window.Shopify ? .shop || window.location.hostname,
                                isActive: o
                            }), i(fo, {
                                videoId: e.i,
                                originFqdn: window.Shopify ? .shop || window.location.hostname,
                                isActive: o
                            }), i(ho, {
                                videoId: e.i,
                                originFqdn: window.Shopify ? .shop || window.location.hostname,
                                isActive: o
                            })]
                        })]
                    }, e.i)
                }), $ > 0 && i("button", {
                    className: "ins-carousel-nav-button ins-carousel-nav-button--prev",
                    onClick: e => {
                        e.stopPropagation(), ne()
                    },
                    children: i("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "2.5",
                        stroke: "currentColor",
                        children: i("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M15.75 19.5L8.25 12l7.5-7.5"
                        })
                    })
                }), F && $ < F.length - 1 && i("button", {
                    className: "ins-carousel-nav-button ins-carousel-nav-button--next",
                    onClick: e => {
                        e.stopPropagation(), M()
                    },
                    children: i("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "2.5",
                        stroke: "currentColor",
                        children: i("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "M8.25 4.5l7.5 7.5-7.5 7.5"
                        })
                    })
                }), c && r && k && i("div", {
                    className: `${r?"ins-pip-product-details-modal-overlay__show":"ins-pip-product-details-modal-overlay__hidden"} ${C?"ins-pip-product-details-modal-overlay__is-desktop":"ins-pip-product-details-modal-overlay__is-mobile"}`,
                    onClick: () => Ge(null),
                    style: C ? {
                        position: "absolute",
                        top: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "calc(100vh * 9 / 16)",
                        maxWidth: "100vw",
                        height: "100vh",
                        zIndex: 1e3
                    } : {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 1e3
                    },
                    children: i("div", {
                        className: `ins-pip-product-details-modal ${r?"ins-pip-product-details-modal__show":"ins-pip-product-details-modal__hidden"} ${C?"ins-pip-product-details-modal__is-desktop":"ins-pip-product-details-modal__is-mobile"}`,
                        onClick: e => {
                            e.stopPropagation()
                        },
                        children: [i("div", {
                            className: `${r?"ins-pip-product-details-modal-close-button__show":"ins-pip-product-details-modal-close-button__hidden"}`,
                            onClick: () => Ge(null),
                            children: i("svg", {
                                width: "40",
                                height: "40",
                                viewBox: "0 0 28 28",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: i("path", {
                                    d: "M14 25.6667C10.905 25.6695 7.93587 24.4412 5.74735 22.2527C3.55882 20.0642 2.33055 17.0951 2.33333 14.0001V13.7667C2.42875 9.09098 5.30577 4.92357 9.64409 3.17696C13.9824 1.43035 18.9444 2.44177 22.253 5.74706C25.5925 9.08382 26.592 14.1043 24.7851 18.4656C22.9781 22.827 18.7209 25.6695 14 25.6667ZM14 15.6451L17.0217 18.6667L18.6667 17.0217L15.645 14.0001L18.6667 10.9784L17.0217 9.33339L14 12.3551L10.9783 9.33339L9.33334 10.9784L12.355 14.0001L9.33334 17.0217L10.9783 18.6667L14 15.6462V15.6451Z",
                                    fill: "white"
                                })
                            })
                        }), i("div", {
                            className: "ins-pip-product-details-section",
                            children: r && i("div", {
                                className: "ins-pip-product-details-container",
                                children: [i("header", {
                                    className: "ins-pip-product-details-header",
                                    children: [r ? .product ? .im != "" && i("div", {
                                        style: {
                                            "background-image": `url(${r?.product?.im})`
                                        },
                                        className: "ins-pip-product-details-image"
                                    }), we && et.length > 0 ? et.filter(e => e !== r ? .product ? .im).map((e, t) => i("div", {
                                        style: {
                                            "background-image": `url(${e})`
                                        },
                                        className: "ins-pip-product-details-image"
                                    }, t)) : r ? (() => [...new Set(r.product.v.filter(t => t.im.length !== 0).map(t => t.im).filter(t => t !== r ? .product ? .im))].map((t, o) => i("div", {
                                        style: {
                                            "background-image": `url(${t})`
                                        },
                                        className: "ins-pip-product-details-image"
                                    }, o)))() : null]
                                }), i("div", {
                                    className: "ins-pip-product-details-info",
                                    children: [i("h2", {
                                        className: "ins-pip-product-details-name",
                                        children: r ? .product ? .t ? .toLowerCase() ? ? ""
                                    }), i("p", {
                                        className: "ins-pip-product-details-price",
                                        children: [(() => {
                                            const e = j() ? .cp != null ? j() ? .cp ? .[V].pr ? ? r.product.pr ? ? 0 : j() ? .pr ? ? r.product.pr ? ? 0,
                                                {
                                                    price: t,
                                                    currency: o
                                                } = u(e, r.product);
                                            return xe(t, o)
                                        })(), (() => {
                                            const {
                                                pr: e = 0,
                                                c: t
                                            } = j() ? ? r.product, o = j() ? .cp ? j() ? .cp ? .[V] ? .cs ? ? t : t;
                                            if (t !== void 0 && t > e && o) {
                                                const {
                                                    price: s,
                                                    currency: a
                                                } = u(o, r.product);
                                                return i("span", {
                                                    className: "ins-pip-product-details-strikeoff-price",
                                                    children: xe(s, a)
                                                })
                                            }
                                            return null
                                        })(), ae && D && (() => {
                                            const e = j() ? ? r.product,
                                                {
                                                    pr: t = 0,
                                                    c: o
                                                } = e,
                                                s = e ? .cp != null ? e ? .cp ? .[V].pr ? ? t : t,
                                                a = e ? .cp != null ? e.cp ? .[V] ? .cs || 0 : o || 0,
                                                p = a > 0 && s > 0 && a > s ? Math.round((a - s) / a * 100) : 0;
                                            return o !== void 0 && o > t && p > 0 ? i("span", {
                                                className: "ins-pip-product-details-discount-badge",
                                                children: ["Save ", p, "%"]
                                            }) : null
                                        })()]
                                    })]
                                }), r ? .product ? .o && r ? .product ? .o.length > 0 ? i("div", {
                                    style: {
                                        padding: "0px 20px",
                                        marginTop: "10px"
                                    },
                                    children: r ? .product ? .o.map(e => {
                                        const t = G === "rasayanam.myshopify.com" && e.v.length >= 2 ? [e.v[1], e.v[0], ...e.v.slice(2)] : e.v;
                                        return i("div", {
                                            style: {
                                                "margin-bottom": "14px"
                                            },
                                            children: [i("label", {
                                                style: {
                                                    "font-size": "15px",
                                                    "margin-bottom": "8px"
                                                },
                                                children: e.n
                                            }), i("div", {
                                                className: "ins-pip-product-details-variants-button",
                                                style: {
                                                    "margin-top": "4px",
                                                    whiteSpace: "nowrap",
                                                    overflowX: "auto",
                                                    display: "flex",
                                                    gap: "10px"
                                                },
                                                children: t.map(o => i("button", {
                                                    className: `ins-pip-product-details-variants-item ${it(e,o)}`,
                                                    onClick: () => oo(e.n, o),
                                                    disabled: it(e, o).includes("out-of-stock"),
                                                    style: it(e, o).includes("out-of-stock") ? {
                                                        backgroundColor: "#f5f5f5",
                                                        color: "#999",
                                                        textDecoration: "line-through"
                                                    } : {},
                                                    children: o
                                                }, o))
                                            })]
                                        }, e.n)
                                    })
                                }) : r ? .product ? .v.length && r ? .product ? .v.length > 1 ? i("div", {
                                    className: "ins-pip-product-details-variants-list",
                                    children: r ? .product ? .v.map(e => i("button", {
                                        className: `ins-pip-product-details-variants-item ${e.pi===Ke?"ins-pip-product-details-variants-item__active":""}`,
                                        onClick: () => {
                                            uo(e) || Ze(e.pi)
                                        },
                                        disabled: !e.is,
                                        style: e.is ? {} : {
                                            backgroundColor: "#f5f5f5",
                                            color: "#999",
                                            textDecoration: "line-through"
                                        },
                                        children: e.v
                                    }, e.pi))
                                }) : null, r && i("div", {
                                    className: "ins-pip-product-details-description-container",
                                    dangerouslySetInnerHTML: {
                                        __html: Xo(r.product.d)
                                    }
                                }), i("div", {
                                    className: "ins-pip-product-details-button-container",
                                    children: r ? .product ? .v && i("button", {
                                        className: `ins-pip-product-details-buy-now-button ${Oe()?"ins-pip-product-details-out-of-stock-button":""}`,
                                        onClick: no,
                                        disabled: gt || Oe(),
                                        style: Oe() ? {
                                            backgroundColor: "#f5f5f5",
                                            color: "#999",
                                            cursor: "not-allowed"
                                        } : {},
                                        children: St(r.product)
                                    })
                                })]
                            })
                        })]
                    })
                })]
            }),
            yn = () => {
                if (!k || !F || !c) return null;
                const e = F[$],
                    t = e ? .m.find(o => o.s === "high") ? .v;
                return i("div", {
                    className: "ins-mobile-video-reel",
                    children: [i("video", {
                        className: "ins-reel-video",
                        style: {
                            background: "#000000"
                        },
                        src: t,
                        autoPlay: !0,
                        loop: !0,
                        muted: R,
                        controls: !1,
                        playsInline: !0,
                        onPlay: () => A(!0),
                        onPause: () => A(!1),
                        onLoadedMetadata: o => {
                            const s = o.currentTarget;
                            s.muted = R, s.play().then(() => A(!0)).catch(a => console.log(`%c${a}`, "color: red;"))
                        },
                        ref: S,
                        onClick: xo
                    }), i("div", {
                        className: "ins-mobile-reel-controls",
                        children: [i("div", {
                            onClick: o => {
                                o.stopPropagation(), x(!R), S.current && (S.current.muted = !R)
                            },
                            className: "ins-mobile-mute-button",
                            children: R ? i(ao, {
                                className: "ins-mobile-speaker-icon"
                            }) : i(co, {
                                className: "ins-mobile-speaker-icon"
                            })
                        }), i("button", {
                            onClick: o => {
                                o.stopPropagation(), Ye ? Ot() : L(!1)
                            },
                            className: "ins-mobile-close-button",
                            children: i(lo, {
                                className: "ins-mobile-close-icon"
                            })
                        })]
                    }), e ? .b === 2 && e ? .ct ? i("div", {
                        className: "ins-reel-pop-player-product-panel",
                        style: {
                            bottom: "50px"
                        },
                        children: i("div", {
                            className: "ins-pip-product-panel-item",
                            style: {
                                justifyContent: "center",
                                backgroundColor: "unset",
                                width: "100%",
                                margin: "unset",
                                display: "flex"
                            },
                            children: i("button", {
                                className: "ins-custom-cta-button",
                                onClick: () => {
                                    e ? .ct ? .cl && window.open(e.ct.cl, "_blank")
                                },
                                title: e ? .ct ? .cn,
                                children: i("span", {
                                    ref: l,
                                    className: "ins-custom-cta-text",
                                    style: po,
                                    children: e ? .ct ? .cn || "Custom Button"
                                })
                            })
                        })
                    }) : e ? .p && e.p.length > 0 && i("div", {
                        className: "ins-reel-pop-player-product-panel",
                        children: (() => {
                            let o = d ? .p ? [...d.p] : [];
                            if (v.currentProductId) {
                                const s = o.findIndex(a => a.pi === v.currentProductId);
                                if (s !== -1) {
                                    const a = o.splice(s, 1)[0];
                                    o.unshift(a)
                                }
                            }
                            return o.map((s, a) => i("div", {
                                className: "ins-pip-product-panel-item",
                                onClick: p => to(s.i),
                                children: [i("div", {
                                    className: "ins-pip-product-panel-item-inner",
                                    children: [i("div", {
                                        className: "ins-pip-product-panel-item-thumbnail",
                                        style: {
                                            backgroundImage: `url(${s.im})`
                                        }
                                    }), i("div", {
                                        className: "ins-pip-product-panel-item-details",
                                        children: i("div", {
                                            children: [i("p", {
                                                className: "ins-pip-product-panel-item-title",
                                                children: s.t
                                            }), i("p", {
                                                className: "ins-pip-product-panel-item-price",
                                                children: [(() => {
                                                    const p = s ? .cp != null ? s ? .cp ? .[V].pr ? ? s.pr ? ? 0 : s.pr || 0,
                                                        {
                                                            price: y,
                                                            currency: T
                                                        } = u(p, s);
                                                    return xe(y, T)
                                                })(), D && s.c && s.c > s.pr ? i("span", {
                                                    className: "ins-pip-product-panel-item-strikeoff-price",
                                                    children: (() => {
                                                        const p = s ? .cp != null ? s.cp ? .[V] ? .cs || 0 : s ? .c || 0,
                                                            {
                                                                price: y,
                                                                currency: T
                                                            } = u(p, s);
                                                        return xe(y, T)
                                                    })()
                                                }) : null, ae && s.c && s.c > s.pr && g(s) > 0 ? i("span", {
                                                    className: "ins-pip-product-panel-item-discount-badge",
                                                    children: ["Save ", g(s), "%"]
                                                }) : null]
                                            })]
                                        })
                                    })]
                                }), i("p", {
                                    className: "ins-pip-product-panel-item-buy-now",
                                    children: St(s)
                                })]
                            }, s.pi || a))
                        })()
                    }), c && r && k && i("div", {
                        className: `${r?"ins-pip-product-details-modal-overlay__show":"ins-pip-product-details-modal-overlay__hidden"} ${C?"ins-pip-product-details-modal-overlay__is-desktop":"ins-pip-product-details-modal-overlay__is-mobile"}`,
                        onClick: () => Ge(null),
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 1e3
                        },
                        children: i("div", {
                            className: `ins-pip-product-details-modal ${r?"ins-pip-product-details-modal__show":"ins-pip-product-details-modal__hidden"} ${C?"ins-pip-product-details-modal__is-desktop":"ins-pip-product-details-modal__is-mobile"}`,
                            onClick: o => {
                                o.stopPropagation()
                            },
                            children: [i("div", {
                                className: `${r?"ins-pip-product-details-modal-close-button__show":"ins-pip-product-details-modal-close-button__hidden"}`,
                                onClick: () => Ge(null),
                                children: i("svg", {
                                    width: "40",
                                    height: "40",
                                    viewBox: "0 0 28 28",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: i("path", {
                                        d: "M14 25.6667C10.905 25.6695 7.93587 24.4412 5.74735 22.2527C3.55882 20.0642 2.33055 17.0951 2.33333 14.0001V13.7667C2.42875 9.09098 5.30577 4.92357 9.64409 3.17696C13.9824 1.43035 18.9444 2.44177 22.253 5.74706C25.5925 9.08382 26.592 14.1043 24.7851 18.4656C22.9781 22.827 18.7209 25.6695 14 25.6667ZM14 15.6451L17.0217 18.6667L18.6667 17.0217L15.645 14.0001L18.6667 10.9784L17.0217 9.33339L14 12.3551L10.9783 9.33339L9.33334 10.9784L12.355 14.0001L9.33334 17.0217L10.9783 18.6667L14 15.6462V15.6451Z",
                                        fill: "white"
                                    })
                                })
                            }), i("div", {
                                className: "ins-pip-product-details-section",
                                children: r && i("div", {
                                    className: "ins-pip-product-details-container",
                                    children: [i("header", {
                                        className: "ins-pip-product-details-header",
                                        children: [r ? .product ? .im != "" && i("div", {
                                            style: {
                                                "background-image": `url(${r?.product?.im})`
                                            },
                                            className: "ins-pip-product-details-image"
                                        }), we && et.length > 0 ? et.filter(o => o !== r ? .product ? .im).map((o, s) => i("div", {
                                            style: {
                                                "background-image": `url(${o})`
                                            },
                                            className: "ins-pip-product-details-image"
                                        }, s)) : r ? (() => [...new Set(r.product.v.filter(s => s.im.length !== 0).map(s => s.im).filter(s => s !== r ? .product ? .im))].map((s, a) => i("div", {
                                            style: {
                                                "background-image": `url(${s})`
                                            },
                                            className: "ins-pip-product-details-image"
                                        }, a)))() : null]
                                    }), i("div", {
                                        className: "ins-pip-product-details-info",
                                        children: [i("h2", {
                                            className: "ins-pip-product-details-name",
                                            children: r ? .product ? .t ? .toLowerCase() ? ? ""
                                        }), i("p", {
                                            className: "ins-pip-product-details-price",
                                            children: [(() => {
                                                const o = j() ? .cp != null ? j() ? .cp ? .[V].pr ? ? r.product.pr ? ? 0 : j() ? .pr ? ? r.product.pr ? ? 0,
                                                    {
                                                        price: s,
                                                        currency: a
                                                    } = u(o, r.product);
                                                return xe(s, a)
                                            })(), (() => {
                                                const {
                                                    pr: o = 0,
                                                    c: s
                                                } = j() ? ? r.product, a = j() ? .cp ? j() ? .cp ? .[V] ? .cs ? ? s : s;
                                                if (s !== void 0 && s > o && a) {
                                                    const {
                                                        price: p,
                                                        currency: y
                                                    } = u(a, r.product);
                                                    return i("span", {
                                                        className: "ins-pip-product-details-strikeoff-price",
                                                        children: xe(p, y)
                                                    })
                                                }
                                                return null
                                            })(), ae && D && (() => {
                                                const o = j() ? ? r.product,
                                                    {
                                                        pr: s = 0,
                                                        c: a
                                                    } = o,
                                                    p = o ? .cp != null ? o ? .cp ? .[V].pr ? ? s : s,
                                                    y = o ? .cp != null ? o.cp ? .[V] ? .cs || 0 : a || 0,
                                                    T = y > 0 && p > 0 && y > p ? Math.round((y - p) / y * 100) : 0;
                                                return a !== void 0 && a > s && T > 0 ? i("span", {
                                                    className: "ins-pip-product-details-discount-badge",
                                                    children: ["Save ", T, "%"]
                                                }) : null
                                            })()]
                                        })]
                                    }), r ? .product ? .o && r ? .product ? .o.length > 0 ? i("div", {
                                        style: {
                                            padding: "0px 20px",
                                            marginTop: "10px"
                                        },
                                        children: r ? .product ? .o.map(o => {
                                            const s = G === "rasayanam.myshopify.com" && o.v.length >= 2 ? [o.v[1], o.v[0], ...o.v.slice(2)] : o.v;
                                            return i("div", {
                                                style: {
                                                    "margin-bottom": "14px"
                                                },
                                                children: [i("label", {
                                                    style: {
                                                        "font-size": "15px",
                                                        "margin-bottom": "8px"
                                                    },
                                                    children: o.n
                                                }), i("div", {
                                                    className: "ins-pip-product-details-variants-button",
                                                    style: {
                                                        "margin-top": "4px",
                                                        whiteSpace: "nowrap",
                                                        overflowX: "auto",
                                                        display: "flex",
                                                        gap: "10px"
                                                    },
                                                    children: s.map(a => i("button", {
                                                        className: `ins-pip-product-details-variants-item ${it(o,a)}`,
                                                        onClick: () => oo(o.n, a),
                                                        disabled: it(o, a).includes("out-of-stock"),
                                                        style: it(o, a).includes("out-of-stock") ? {
                                                            backgroundColor: "#f5f5f5",
                                                            color: "#999",
                                                            textDecoration: "line-through"
                                                        } : {},
                                                        children: a
                                                    }, a))
                                                })]
                                            }, o.n)
                                        })
                                    }) : r ? .product ? .v.length && r ? .product ? .v.length > 1 ? i("div", {
                                        className: "ins-pip-product-details-variants-list",
                                        children: r ? .product ? .v.map(o => i("button", {
                                            className: `ins-pip-product-details-variants-item ${o.pi===Ke?"ins-pip-product-details-variants-item__active":""}`,
                                            onClick: () => {
                                                uo(o) || Ze(o.pi)
                                            },
                                            disabled: !o.is,
                                            style: o.is ? {} : {
                                                backgroundColor: "#f5f5f5",
                                                color: "#999",
                                                textDecoration: "line-through"
                                            },
                                            children: o.v
                                        }, o.pi))
                                    }) : null, r && i("div", {
                                        className: "ins-pip-product-details-description-container",
                                        dangerouslySetInnerHTML: {
                                            __html: Xo(r.product.d)
                                        }
                                    }), i("div", {
                                        className: "ins-pip-product-details-button-container",
                                        children: r ? .product ? .v && i("button", {
                                            className: `ins-pip-product-details-buy-now-button ${Oe()?"ins-pip-product-details-out-of-stock-button":""}`,
                                            onClick: no,
                                            disabled: gt || Oe(),
                                            style: Oe() ? {
                                                backgroundColor: "#f5f5f5",
                                                color: "#999",
                                                cursor: "not-allowed"
                                            } : {},
                                            children: St(r.product)
                                        })
                                    })]
                                })
                            })]
                        })
                    }), e && i(Ht, {
                        children: [i(mo, {
                            videoId: e.i,
                            originFqdn: window.Shopify ? .shop || window.location.hostname,
                            isActive: !0
                        }), i(fo, {
                            videoId: e.i,
                            originFqdn: window.Shopify ? .shop || window.location.hostname,
                            isActive: !0
                        }), i(ho, {
                            videoId: e.i,
                            originFqdn: window.Shopify ? .shop || window.location.hostname,
                            isActive: !0
                        })]
                    })]
                })
            },
            wn = () => i("div", {
                className: "ins-video-container-wrapper",
                style: z ? {
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    position: "relative"
                } : {},
                children: [!Ce && eo && i("div", {
                    className: "ins-video-thumbnail-overlay",
                    style: {
                        backgroundImage: `url(${eo})`,
                        ...z && {
                            borderRadius: "50%",
                            overflow: "hidden",
                            width: "100%",
                            height: "100%"
                        }
                    },
                    children: i("div", {
                        className: "ins-video-loading-spinner",
                        children: i("div", {
                            className: "ins-spinner"
                        })
                    })
                }), i("video", {
                    className: jt({
                        "ins-reel-pop-player-modal-reel-video__in-view": !0,
                        "ins-reel-pop-player-modal-reel-video__is-desktop": C,
                        "ins-video-hidden": !Ce
                    }),
                    style: z ? {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%",
                        display: "block",
                        position: "absolute",
                        top: "0",
                        left: "0"
                    } : {},
                    autoPlay: !0,
                    src: H && r ? .videoUrl ? r.videoUrl : c ? Qt : mn,
                    ref: S,
                    onLoadedMetadata: e => {
                        const t = e.currentTarget;
                        t.src && (ee(!0), t.play().then(() => A(!0)).catch(o => console.log(`%c${o}`, "color: red;")))
                    },
                    onLoadedData: () => {
                        ee(!0)
                    },
                    onCanPlay: () => {
                        ee(!0)
                    },
                    loop: !0,
                    preload: "metadata",
                    muted: Te,
                    controls: !1,
                    playsInline: !0,
                    onClick: xo,
                    onPause: () => A(!1),
                    onPlay: () => A(!0),
                    poster: eo
                })]
            });
        return !d || !w ? null : i("div", {
            ref: te,
            className: jt({
                "ins-reel-pop-player-modal-overlay": !0,
                "ins-reel-pop-player-modal-overlay__is-pip-active": !c,
                "ins-reel-pop-player-modal-overlay__is-full-modal": c,
                "ins-reel-pop-player-modal-overlay__is-multi-video": c && k,
                "ins-reel-pop-player-modal-overlay__is-story-mode": z,
                "ins-reel-pop-player-modal-overlay__is-dragging": W
            }),
            style: { ...z ? {
                    width: "80px",
                    height: "80px",
                    maxWidth: "80px",
                    maxHeight: "80px",
                    minWidth: "80px",
                    minHeight: "80px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    position: "fixed",
                    bottom: "6em",
                    right: "1em",
                    zIndex: 100,
                    transform: `translate3d(${ot.x}px, ${ot.y}px, 0)`,
                    cursor: W ? "grabbing" : "grab",
                    touchAction: "none",
                    transition: "none",
                    willChange: W ? "transform" : "auto",
                    boxSizing: "border-box",
                    background: "transparent"
                } : c ? {} : {
                    transform: `translate3d(${ot.x}px, ${ot.y}px, 0)`,
                    cursor: W ? "grabbing" : "grab",
                    touchAction: "none",
                    transition: "none",
                    willChange: W ? "transform" : "auto"
                }
            },
            onPointerDown: c ? void 0 : rn,
            onPointerMove: c ? void 0 : sn,
            onPointerUp: c ? void 0 : an,
            onClick: Lo,
            onMouseDown: c ? void 0 : cn,
            children: i("div", {
                ref: Me,
                className: jt({
                    "ins-reel-pop-player-modal-reel": !0,
                    "ins-reel-pop-player-modal-reel__is-active": !0,
                    "ins-reel-pop-player-modal-reel__is-pip-active": !c,
                    "ins-reel-pop-player-modal-reel__is-full-modal": c,
                    "ins-reel-pop-player-modal-reel__is-desktop": C,
                    "ins-reel-pop-player-modal-reel__is-multi-video": c && k,
                    "ins-reel-pop-player-modal-reel__is-story-mode": z
                }),
                style: z ? {
                    width: "80px",
                    height: "80px",
                    maxWidth: "80px",
                    maxHeight: "80px",
                    minWidth: "80px",
                    minHeight: "80px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    position: "relative",
                    boxSizing: "border-box"
                } : c ? {} : {
                    position: "relative"
                },
                children: [c && k ? C ? vn() : yn() : wn(), (!c || !k) && Ce && !z && i("div", {
                    className: "ins-reel-pop-modal-player-pip-top-controls",
                    children: [c && i("div", {
                        onClick: gn,
                        className: "ins-reel-pop-modal-player-mute-button",
                        children: Te ? i(ao, {
                            className: "ins-reel-pop-modal-player-speaker-icon"
                        }) : i(co, {
                            className: "ins-reel-pop-modal-player-speaker-icon"
                        })
                    }), i("button", {
                        onClick: () => {
                            c ? Ye ? Ot() : L(!1) : Ot()
                        },
                        className: "ins-reel-pop-modal-player-pip-close-button",
                        children: i(lo, {
                            className: "ins-reel-pop-modal-player-pip-close-button-icon"
                        })
                    })]
                }), !c && Ce && !z && i("button", {
                    className: "ins-reel-pop-modal-player-pip-play-controls",
                    onClick: fn,
                    children: le ? i(In, {
                        className: "ins-reel-pop-modal-player-pause-icon"
                    }) : i(kn, {
                        className: "ins-reel-pop-modal-player-play-icon"
                    })
                }), c && r && !k && !z && i(Ht, {
                    children: i("div", {
                        className: `${r?"ins-pip-product-details-modal-overlay__show":"ins-pip-product-details-modal-overlay__hidden"} ${C?"ins-pip-product-details-modal-overlay__is-desktop":"ins-pip-product-details-modal-overlay__is-mobile"}`,
                        onClick: () => Ge(null),
                        children: i("div", {
                            className: `ins-pip-product-details-modal ${r?"ins-pip-product-details-modal__show":"ins-pip-product-details-modal__hidden"} ${C?"ins-pip-product-details-modal__is-desktop":"ins-pip-product-details-modal__is-mobile"}`,
                            onClick: e => {
                                e.stopPropagation()
                            },
                            children: [i("div", {
                                className: `${r?"ins-pip-product-details-modal-close-button__show":"ins-pip-product-details-modal-close-button__hidden"}`,
                                onClick: () => Ge(null),
                                children: i("svg", {
                                    width: "40",
                                    height: "40",
                                    viewBox: "0 0 28 28",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: i("path", {
                                        d: "M14 25.6667C10.905 25.6695 7.93587 24.4412 5.74735 22.2527C3.55882 20.0642 2.33055 17.0951 2.33333 14.0001V13.7667C2.42875 9.09098 5.30577 4.92357 9.64409 3.17696C13.9824 1.43035 18.9444 2.44177 22.253 5.74706C25.5925 9.08382 26.592 14.1043 24.7851 18.4656C22.9781 22.827 18.7209 25.6695 14 25.6667ZM14 15.6451L17.0217 18.6667L18.6667 17.0217L15.645 14.0001L18.6667 10.9784L17.0217 9.33339L14 12.3551L10.9783 9.33339L9.33334 10.9784L12.355 14.0001L9.33334 17.0217L10.9783 18.6667L14 15.6462V15.6451Z",
                                        fill: "white"
                                    })
                                })
                            }), i("div", {
                                className: "ins-pip-product-details-section",
                                children: r && i("div", {
                                    className: "ins-pip-product-details-container",
                                    children: [i("header", {
                                        className: "ins-pip-product-details-header",
                                        children: [r ? .product ? .im != "" && i("div", {
                                            style: {
                                                "background-image": `url(${r?.product?.im})`
                                            },
                                            className: "ins-pip-product-details-image"
                                        }), we && et.length > 0 ? et.filter(e => e !== r ? .product ? .im).map((e, t) => i("div", {
                                            style: {
                                                "background-image": `url(${e})`
                                            },
                                            className: "ins-pip-product-details-image"
                                        }, t)) : r ? (() => [...new Set(r.product.v.filter(t => t.im.length !== 0).map(t => t.im).filter(t => t !== r ? .product ? .im))].map((t, o) => i("div", {
                                            style: {
                                                "background-image": `url(${t})`
                                            },
                                            className: "ins-pip-product-details-image"
                                        }, o)))() : null]
                                    }), i("div", {
                                        className: "ins-pip-product-details-info",
                                        children: [i("h2", {
                                            className: "ins-pip-product-details-name",
                                            children: r ? .product ? .t
                                        }), i("p", {
                                            className: "ins-pip-product-details-price",
                                            children: [(() => {
                                                const e = j() ? .cp != null ? j() ? .cp ? .[V].pr ? ? r.product.pr ? ? 0 : j() ? .pr ? ? r.product.pr ? ? 0,
                                                    {
                                                        price: t,
                                                        currency: o
                                                    } = u(e, r.product);
                                                return xe(t, o)
                                            })(), D && (() => {
                                                const {
                                                    pr: e = 0,
                                                    c: t
                                                } = j() ? ? r.product, o = j() ? .cp && j() ? .cp ? .[V].cs || t;
                                                if (t !== void 0 && t > e && o) {
                                                    const {
                                                        price: s,
                                                        currency: a
                                                    } = u(o, r.product);
                                                    return i("span", {
                                                        className: "ins-pip-product-details-strikeoff-price",
                                                        children: xe(s, a)
                                                    })
                                                }
                                                return null
                                            })(), ae && D && (() => {
                                                const e = j() ? ? r.product,
                                                    {
                                                        pr: t = 0,
                                                        c: o
                                                    } = e,
                                                    s = e ? .cp != null ? e ? .cp ? .[V].pr ? ? t : t,
                                                    a = e ? .cp != null ? e.cp ? .[V] ? .cs || 0 : o || 0,
                                                    p = a > 0 && s > 0 && a > s ? Math.round((a - s) / a * 100) : 0;
                                                return o !== void 0 && o > t && p > 0 ? i("span", {
                                                    className: "ins-pip-product-details-discount-badge",
                                                    children: ["Save ", p, "%"]
                                                }) : null
                                            })()]
                                        })]
                                    }), r ? .product ? .o && r ? .product ? .o.length > 0 ? i("div", {
                                        style: {
                                            padding: "0px 20px",
                                            marginTop: "10px"
                                        },
                                        children: r ? .product ? .o.map(e => i("div", {
                                            style: {
                                                "margin-bottom": "14px"
                                            },
                                            children: [i("label", {
                                                style: {
                                                    "font-size": "15px",
                                                    "margin-bottom": "8px"
                                                },
                                                children: e.n
                                            }), i("div", {
                                                className: "ins-pip-product-details-variants-button",
                                                style: {
                                                    "margin-top": "4px",
                                                    whiteSpace: "nowrap",
                                                    overflowX: "auto",
                                                    display: "flex",
                                                    gap: "10px"
                                                },
                                                children: e.v.map(t => i("button", {
                                                    className: `ins-pip-product-details-variants-item ${it(e,t)}`,
                                                    onClick: () => oo(e.n, t),
                                                    disabled: it(e, t).includes("out-of-stock"),
                                                    style: it(e, t).includes("out-of-stock") ? {
                                                        backgroundColor: "#f5f5f5",
                                                        color: "#999",
                                                        textDecoration: "line-through"
                                                    } : {},
                                                    children: t
                                                }, t))
                                            })]
                                        }, e.n))
                                    }) : r ? .product ? .v.length && r ? .product ? .v.length > 1 ? i("div", {
                                        className: "ins-pip-product-details-variants-list",
                                        children: r ? .product ? .v.map(e => i("button", {
                                            className: `ins-pip-product-details-variants-item ${e.pi===Ke?"ins-pip-product-details-variants-item__active":""}`,
                                            onClick: () => {
                                                uo(e) || Ze(e.pi)
                                            },
                                            disabled: !e.is,
                                            style: e.is ? {} : {
                                                backgroundColor: "#f5f5f5",
                                                color: "#999",
                                                textDecoration: "line-through"
                                            },
                                            children: e.v
                                        }, e.pi))
                                    }) : null, r && i("div", {
                                        className: "ins-pip-product-details-description-container",
                                        dangerouslySetInnerHTML: {
                                            __html: r.product.d
                                        }
                                    }), i("div", {
                                        className: "ins-pip-product-details-button-container",
                                        children: r ? .product ? .v && i("button", {
                                            className: `ins-pip-product-details-buy-now-button ${Oe()?"ins-pip-product-details-out-of-stock-button":""}`,
                                            onClick: no,
                                            disabled: gt || Oe(),
                                            style: Oe() ? {
                                                backgroundColor: "#f5f5f5",
                                                color: "#999",
                                                cursor: "not-allowed"
                                            } : {},
                                            children: St(r.product)
                                        })
                                    })]
                                })
                            })]
                        })
                    })
                }), c && !k && d ? .b === 2 && d ? .ct && i("div", {
                    className: "ins-reel-pop-player-product-panel",
                    style: {
                        bottom: "50px"
                    },
                    children: i("div", {
                        className: "ins-pip-product-panel-item",
                        style: {
                            justifyContent: "center",
                            backgroundColor: "unset",
                            width: "100%",
                            margin: "unset",
                            display: "flex"
                        },
                        children: i("button", {
                            className: "ins-custom-cta-button",
                            onClick: () => {
                                d ? .ct ? .cl && window.open(d.ct.cl, "_blank")
                            },
                            title: d ? .ct ? .cn,
                            children: i("span", {
                                ref: h,
                                className: "ins-custom-cta-text",
                                style: po,
                                children: d ? .ct ? .cn || "Custom Button"
                            })
                        })
                    })
                }), c && !k && !(d ? .b === 2 && d ? .ct) && i("div", {
                    className: "ins-reel-pop-player-product-panel",
                    children: (() => {
                        let e = d ? .p ? [...d.p] : [];
                        if (v.currentProductId) {
                            const t = e.findIndex(o => o.pi === v.currentProductId);
                            if (t !== -1) {
                                const o = e.splice(t, 1)[0];
                                e.unshift(o)
                            }
                        }
                        return e.map((t, o) => i("div", {
                            className: "ins-pip-product-panel-item",
                            onClick: s => to(t.i),
                            children: [i("div", {
                                className: "ins-pip-product-panel-item-inner",
                                children: [i("div", {
                                    className: "ins-pip-product-panel-item-thumbnail",
                                    style: {
                                        backgroundImage: `url(${t.im})`
                                    }
                                }), i("div", {
                                    className: "ins-pip-product-panel-item-details",
                                    children: i("div", {
                                        children: [i("p", {
                                            className: "ins-pip-product-panel-item-title",
                                            children: t.t ? .toLowerCase() ? ? ""
                                        }), i("p", {
                                            className: "ins-pip-product-panel-item-price",
                                            children: [(() => {
                                                const s = t ? .cp != null ? t ? .cp ? .[V].pr ? ? t.pr ? ? 0 : t.pr || 0,
                                                    {
                                                        price: a,
                                                        currency: p
                                                    } = u(s, t);
                                                return xe(a, p)
                                            })(), D && t.c && t.c > t.pr ? i("span", {
                                                className: "ins-pip-product-panel-item-strikeoff-price",
                                                children: (() => {
                                                    const s = t ? .cp != null ? t.cp ? .[V] ? .cs || 0 : t ? .c || 0,
                                                        {
                                                            price: a,
                                                            currency: p
                                                        } = u(s, t);
                                                    return xe(a, p)
                                                })()
                                            }) : null, ae && t.c && t.c > t.pr && g(t) > 0 ? i("span", {
                                                className: "ins-pip-product-panel-item-discount-badge",
                                                children: ["Save ", g(t), "%"]
                                            }) : null]
                                        })]
                                    })
                                })]
                            }), i("p", {
                                className: "ins-pip-product-panel-item-buy-now",
                                children: St(t)
                            })]
                        }, t.pi || o))
                    })()
                }), c && !z && !k && d && i(Ht, {
                    children: [i(mo, {
                        videoId: d.i,
                        originFqdn: window.Shopify ? .shop || window.location.hostname,
                        isActive: c
                    }), i(fo, {
                        videoId: d.i,
                        originFqdn: window.Shopify ? .shop || window.location.hostname,
                        isActive: c
                    }), i(ho, {
                        videoId: d.i,
                        originFqdn: window.Shopify ? .shop || window.location.hostname,
                        isActive: c
                    })]
                })]
            })
        })
    },
    mi = m => Nn(m.children, document.body),
    fi = () => {
        const m = Co(),
            {
                setIsLoadingShortVideos: l,
                setShortVideo: h,
                isLoadingShortVideos: f,
                setIsPipActive: b,
                setPurchaseFlowAction: w,
                shortVideo: E,
                setGoogleAnalyticsEnabled: C,
                setUseGtmForAnalytics: H,
                setClevertapAnalyticsEnabled: B,
                setMixpanelAnalyticsEnabled: Z,
                setMetaRetargetingEnabled: me,
                setCloseVideoPipWhenClosedFromFullScreenMode: J,
                setShortVideos: U,
                shortVideos: Q,
                setShowTaggedVideos: fe,
                showTaggedVideos: Se,
                setComparePriceEnabled: Ye,
                setDisplayAllProductImagesEnabled: ke,
                setDiscountBadgeEnabled: F,
                setStoreFrontCartOperation: D,
                setStoreFrontAccessKey: ae,
                setEnableStoryModeOnClose: we,
                setVideoBehavior: re
            } = Jo(),
            [Xe, Be] = _(!1),
            pe = window.__headless_env__,
            N = Ie(null),
            ce = ee => {
                const le = document.getElementById("instasell-custom-script");
                if (le && le.remove(), !(!ee || ee.trim() === "")) try {
                    const A = document.createElement("script");
                    A.id = "instasell-custom-script", A.type = "text/javascript";
                    const Te = `
        (function() {
          try {
            ${ee}
          } catch (e) {
            console.log("%c[Instaell custom script error]", "color: red;");
          }
        })();
      `;
                    A.textContent = Te, document.head.appendChild(A)
                } catch (A) {
                    console.log(`%cFailed to inject custom script: ${A}`, "color: red;")
                }
            },
            _e = (ee, le) => {
                const A = document.createElement("style");
                A.id = le;
                const Te = ee.split("}").filter(se => se.trim()).map(se => {
                    const [c, L] = se.split("{");
                    if (!L) return "";
                    const $ = L.trim().replace(/!important !important/g, "!important").replace(/;$/, "");
                    return `.ins-shoppable-videos ${c.trim()} {
          ${$}
        }`
                }).join(`
`);
                return A.innerHTML = Te, document.head.appendChild(A), A
            },
            Ce = async () => {
                console.log("LOG 1: Starting fetchShortVideos");
                const ee = v.getPageType ? .();
                console.log("LOG 2: Page type:", ee);
                const le = v.getShopDomain ? .(),
                    A = window.location.hostname,
                    Te = ["localhost", "192.168.1.33", "127.0.0.1"].includes(A);
                let se;
                le && le !== "" ? se = le : Te ? se = "utkarsh-s.myshopify.com" : se = typeof window.Shopify > "u" ? A : window.Shopify ? .shop || A;
                const c = await m.getVideoPop({
                    originFqdn: se,
                    pageType: ee,
                    currentProductId: v.currentProductId,
                    currentCollectionId: v.currentCollectionId
                }).catch(L => {
                    l(!1), h(null), b(!1), Be(!1)
                });
                if (console.log("LOG 4: getVideoPop response:", c), c != null) {
                    if (console.log("LOG 5: Response is not null, processing..."), c.so) {
                        console.log("LOG 6: Response has 'so' property, returning early");
                        return
                    }
                    if (c.cp && (console.log("LOG 7: Setting closeVideoPipWhenClosedFromFullScreenMode to true"), J(!0)), c.es !== void 0 && we(c.es), c.sv) {
                        if (console.log("LOG 8: Response has shortVideo (sv), processing video data"), h(c.sv), b(!0), c.sv.b !== void 0 && re(c.sv.b), c.pa && w(c.pa), c.st && (fe(!0), c.v && c.v.length > 0)) {
                            const O = [c.sv, ...c.v];
                            U(O)
                        }
                        c.ga && C(c.ga), c.gt !== void 0 && H(c.gt), c.ca && B(c ? .ca), c.ck && ce(c.ck), c.mr && me(c.mr), c.mx && Z(c.mx), c.ce && Ye(c.ce), c.db && F(c.db), c.da && ke(c.da), "storeFrontApiAccessKey" in window && typeof window.storeFrontApiAccessKey == "string" ? ae(window.storeFrontApiAccessKey) : ae(c.sa ? ? ""), window.__headless_env__ && D(!0), document.getElementById("instasell-videos-pop-custom-css") ? .remove(), document.getElementById("instasell-video-pop-ai-css") ? .remove();
                        const $ = [];
                        c.cs && (console.log("LOG 9: Adding custom styles promise"), $.push(new Promise(O => {
                            const R = document.createElement("style");
                            R.id = "instasell-videos-pop-custom-css", R.innerHTML = c.cs, R.onload = O, setTimeout(O, 100), document.head.appendChild(R)
                        }))), c.ac && (console.log("LOG 10: Adding AI styles promise"), $.push(new Promise(O => {
                            const R = _e(c.ac, "instasell-video-pop-ai-css");
                            R.onload = O, setTimeout(O, 100)
                        }))), console.log("LOG 11: Style promises count:", $.length), $.length > 0 ? (await Promise.all($), console.log("LOG 12: All style promises resolved")) : console.log("LOG 13: No style promises to wait for"), Be(!0), console.log("LOG 14: stylesInjected set to true"), typeof Ko == "function" ? (N.current && N.current(), N.current = Ko(ee), console.log("LOG 15: initializeStoreStylesVideoPop called")) : console.log("LOG 16: initializeStoreStylesVideoPop function not found")
                    } else console.log("LOG 17: Response does not have shortVideo (sv)"), h(null), b(!1), Be(!1);
                    console.log("LOG 18: Setting isLoadingShortVideos to false"), l(!1)
                } else console.log("LOG 19: Response is null"), l(!1), h(null), b(!1), Be(!1)
            };
        return K(() => (Ce(), () => {
            document.getElementById("instasell-videos-pop-custom-css") ? .remove(), document.getElementById("instasell-video-pop-ai-css") ? .remove(), document.getElementById("instasell-custom-script") ? .remove(), N.current && (N.current(), N.current = null)
        }), [v.currentProductId, v.currentCollectionId, v.pageType]), K(() => {
            if (E) {
                const ee = v.getShopDomain ? .() || (typeof window.Shopify < "u" ? window.Shopify ? .shop : null) || window.location.hostname || "Store",
                    le = Ln(),
                    A = On(E, ee, le, v.getCurrencyCode);
                A && A.products.length > 0 && xn(A)
            }
            return () => {
                E ? .i && Dn(E.i)
            }
        }, [E]), console.log("RENDER CONDITIONS:", {
            isLoadingShortVideos: f,
            hasShortVideo: !!E,
            stylesInjected: Xe,
            shouldRender: !f && E && Xe
        }), pe ? (console.log("RENDERING VIDEO COMPONENT"), i("div", {
            className: "ins-video-pip",
            children: i(qo, {})
        })) : !f && E && Xe ? (console.log("RENDERING VIDEO COMPONENT"), i(mi, {
            children: i("div", {
                className: "ins-video-pip",
                children: i(qo, {})
            })
        })) : (console.log("NOT RENDERING - Conditions not met"), null)
    },
    Ko = m => {
        switch (window.Shopify ? .shop) {
            case "attrangi1.myshopify.com":
                {
                    const h = document.createElement("style");
                    if (m == "home") return h.textContent = `
        .ins-video-pip .ins-reel-pop-player-modal-overlay.ins-reel-pop-player-modal-overlay__is-pip-active {
          transition: opacity 0.3s ease !important;
        }
      `, document.head.appendChild(h), null; {
                        h.textContent = `
        .ins-video-pip .ins-reel-pop-player-modal-overlay.ins-reel-pop-player-modal-overlay__is-pip-active {
          opacity: 1 !important;
          pointer-events: auto !important;
          transition: opacity 0.3s ease !important;
        }
      `, document.head.appendChild(h);
                        let f = null;
                        return setTimeout(() => {
                            const b = document.querySelector(".ins-video-pip .ins-reel-pop-player-modal-overlay.ins-reel-pop-player-modal-overlay__is-pip-active");
                            if (b) {
                                let w = !1;
                                f = () => {
                                    !w && window.scrollY > document.documentElement.scrollHeight * .2 && (w = !0, b.style.setProperty("opacity", "1", "important"), b.style.setProperty("pointer-events", "auto", "important"))
                                }, window.addEventListener("scroll", f), f()
                            }
                        }, 500), () => {
                            f && window.removeEventListener("scroll", f)
                        }
                    }
                }
            case "utkarsh-s.myshopify.com":
                {
                    const h = document.createElement("style");h.textContent = `
        .ins-video-pip .ins-reel-pop-player-modal-overlay.ins-reel-pop-player-modal-overlay__is-pip-active {
          transition: opacity 0.3s ease !important;
        }
      `,
                    document.head.appendChild(h);
                    let f = null;
                    return setTimeout(() => {
                        const b = document.querySelector(".ins-video-pip .ins-reel-pop-player-modal-overlay.ins-reel-pop-player-modal-overlay__is-pip-active");
                        if (b) {
                            let w = !1;
                            f = () => {
                                !w && window.scrollY > document.documentElement.scrollHeight * .2 && (w = !0, b.style.setProperty("opacity", "1", "important"), b.style.setProperty("pointer-events", "auto", "important"))
                            }, window.addEventListener("scroll", f), f()
                        }
                    }, 500),
                    () => {
                        f && window.removeEventListener("scroll", f)
                    }
                }
            case "rasayanam.myshopify.com":
                {
                    if (m === "product") {
                        const h = document.createElement("style");
                        h.textContent = `
      .ins-video-pip .ins-reel-pop-player-modal-overlay.ins-reel-pop-player-modal-overlay__is-pip-active {
        opacity: 0 !important;
        pointer-events: none !important;
        transition: opacity 0.3s ease !important;
      }
    `, document.head.appendChild(h);
                        let f = null,
                            b = null,
                            w = null;
                        return setTimeout(() => {
                            const E = document.querySelector(".ins-video-pip .ins-reel-pop-player-modal-overlay.ins-reel-pop-player-modal-overlay__is-pip-active");
                            E && (f = () => {
                                if (E.classList.contains("ins-reel-pop-player-modal-overlay__is-full-modal") || document.querySelector(".ins-reel-pop-player-modal-overlay__is-full-modal") !== null) {
                                    E.style.setProperty("opacity", "1", "important"), E.style.setProperty("pointer-events", "auto", "important");
                                    return
                                }
                                const H = window.scrollY,
                                    B = document.documentElement.scrollHeight;
                                H > B * .12 && H < B * .7 ? (E.style.setProperty("opacity", "1", "important"), E.style.setProperty("pointer-events", "auto", "important")) : (E.style.setProperty("opacity", "0", "important"), E.style.setProperty("pointer-events", "none", "important"))
                            }, window.addEventListener("scroll", f), b = new MutationObserver(() => {
                                f ? .()
                            }), b.observe(E, {
                                attributes: !0,
                                attributeFilter: ["class"]
                            }), w = new MutationObserver(() => {
                                f ? .()
                            }), document.body && w.observe(document.body, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0,
                                attributeFilter: ["class"]
                            }), f())
                        }, 500), () => {
                            f && window.removeEventListener("scroll", f), b && b.disconnect(), w && w.disconnect()
                        }
                    }
                    return null
                }
            default:
                return null
        }
    };

function hi() {
    const m = Co(),
        [l, h] = _(Ct("__IS_VTOK") ? ? void 0),
        [f, b] = _(Ct("__IS_STOK") ? ? void 0);
    return K(() => {
        if (!l) {
            const w = setInterval(() => {
                const E = Ct("__IS_VTOK");
                E && (h(E), clearInterval(w))
            }, 100);
            return () => clearInterval(w)
        }
    }, [l]), K(() => {
        if (!f) {
            const w = setInterval(() => {
                const E = Ct("__IS_STOK");
                E && (b(E), clearInterval(w))
            }, 100);
            return () => clearInterval(w)
        }
    }, [f]), K(() => {
        if (!l) {
            const w = document.getElementById("ins-shoppable-video-feed-wrapper"),
                E = document.getElementById("instasell-live-story-reels");
            !w && !E && (async () => {
                console.log("entering video pip to create viewer");
                try {
                    const C = v.getShopDomain ? .(),
                        H = ["localhost", "192.168.1.33", "127.0.0.1"].includes(window.location.hostname);
                    let B;
                    C && C !== "" ? B = C : H ? B = "utkarsh-s.myshopify.com" : B = typeof window.Shopify > "u" ? window.location.hostname : window.Shopify ? .shop || window.location.hostname;
                    const Z = await m.getViewerToken({
                        originFqdn: B
                    });
                    Z.vt && (go("__IS_VTOK", Z.vt), h(Z.vt))
                } catch (C) {
                    console.log(`%c${C}`, "color: red;")
                }
            })()
        }
    }, [l]), K(() => {
        if (l) {
            const w = Date.now(),
                E = Ct("sessionTime", "session"),
                C = E ? parseInt(E) : null,
                H = document.getElementById("ins-shoppable-video-feed-wrapper"),
                B = document.getElementById("instasell-live-story-reels");
            let Z = !1;
            if (Z = (() => {
                    if (!C) return !0;
                    const U = new Date(C),
                        Q = new Date(w);
                    if (U.getFullYear() !== Q.getFullYear() || U.getMonth() !== Q.getMonth() || U.getDate() !== Q.getDate()) return !0;
                    const fe = 30 * 60 * 1e3;
                    return w - C > fe
                })(), !Z) return;
            const J = async U => {
                try {
                    await m.shortVideosBoron({
                        eventType: "newSession",
                        source: "videoPop",
                        newSession: U
                    }), go("sessionTime", w.toString(), "session")
                } catch (Q) {
                    console.log(`%cError creating new session event ${Q}`, "color: red;")
                }
            };
            if (H || B)
                if (f) J(f);
                else {
                    const U = setInterval(() => {
                        const Q = Ct("__IS_STOK");
                        Q && (clearInterval(U), b(Q), J(Q))
                    }, 100);
                    return () => clearInterval(U)
                }
            else {
                let U = "";
                f ? U = f : (U = gi(), go("__IS_STOK", U), b(U)), J(U)
            }
        }
    }, [l, f, m]), l ? i(fi, {}) : null
}
const gi = () => {
    try {
        return crypto.randomUUID()
    } catch {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, l => {
            const h = Math.random() * 16 | 0;
            return (l === "x" ? h : h & 3 | 8).toString(16)
        })
    }
};
typeof window < "u" && window.localStorage && (localStorage.getItem("instasell_video_story_mode") || localStorage.setItem("instasell_video_story_mode", "false"));
const yt = window.Shopify.routes.root,
    st = {
        element: document.querySelector("#instasell-live-short-videos"),
        widgetType: "shoppable-reels",
        async addToCart(m, l, h, f) {
            const b = Xt(),
                w = Date.now();
            b.emitEvent("atc_start", {
                variant_id: m,
                handle: h,
                quantity: 1,
                method: "rest_api",
                source: "config_video_pop"
            });
            try {
                await fetch(yt + "products/" + h + ".js").then(H => H.json()).catch(H => {
                    console.log(`%cError fetching product: ${H}`, "color: red;")
                }), b.emitEvent("atc_api_call", {
                    endpoint: yt + "cart/add.json",
                    method: "POST",
                    variant_id: m
                });
                const E = await fetch(yt + "cart/add.json", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        items: [{
                            id: m,
                            quantity: 1
                        }]
                    })
                });
                if (!E.ok) {
                    const H = await E.text().catch(() => "Unable to read error body");
                    throw b.emitEvent("atc_error", {
                        duration_ms: Date.now() - w,
                        error_message: "HTTP error",
                        response_status: E.status,
                        response_body: H,
                        method: "rest_api"
                    }), new Error("Failed to add to cart")
                }
                const C = await E.json();
                return b.emitEvent("atc_success", {
                    duration_ms: Date.now() - w,
                    method: "rest_api"
                }), C
            } catch (E) {
                throw b.emitEvent("atc_error", {
                    duration_ms: Date.now() - w,
                    error_message: E ? .message || "Unknown error",
                    method: "rest_api"
                }), E
            }
        },
        async updateCartInfo(m) {
            const h = await fetch(yt + "cart/update.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    attributes: {
                        instavid_attribution_token: m
                    }
                })
            });
            if (!h.ok) throw new Error("Failed to add to cart");
            return h.json()
        },
        async getCurrentCart() {
            const m = await fetch(yt + "cart.json");
            if (!m.ok) throw new Error("Failed to get cart");
            return m.json()
        },
        async getCurrentCartId() {
            return await fetch(yt + "cart.json").then(m => m.json()).then(m => m.token).catch(m => console.log(m))
        },
        async getProductDetailsBySlug(m) {
            return await fetch(yt + "/products/" + m + ".js").then(l => l.json()).catch(l => console.log(l))
        },
        getCurrencyCode() {
            if (window.Shopify ? .shop === "hoindiacl.myshopify.com" && Fo()) {
                const m = Mn();
                if (m) return m
            }
            return window.Shopify ? .currency ? .active ? window.Shopify.currency.active : "INR"
        },
        getShopDomain() {
            return window.Shopify.shop
        },
        getCurrencyRate() {
            if (window.Shopify ? .shop === "hoindiacl.myshopify.com" && Fo()) {
                const m = Rn();
                if (m !== null) return m
            }
            return window.Shopify ? .currency ? .rate && window.Shopify.currency.rate !== 1 ? window.Shopify.currency.rate : 1
        },
        redirectToCart() {
            window.location.href = "/cart"
        },
        getCountry() {
            return window.Shopify.country
        },
        skeletonLength: 6,
        getPageType() {
            return location.pathname.startsWith("/products/") || location.pathname.includes("/collections/") && location.pathname.includes("/products/") ? "product" : location.pathname.startsWith("/collections/") ? "collection" : "home"
        },
        getActiveProductPageId: null,
        showFeedOnHomePageOnly: !1,
        pageType: null,
        async fetchProductDetails(m) {
            try {
                const l = window.Shopify ? .routes ? .root || "/",
                    h = await fetch(`${l}products/${m}.js`);
                if (!h.ok) throw new Error(`Failed to fetch product: ${h.status}`);
                return await h.json()
            } catch (l) {
                return console.log(`%cError fetching product details: ${l}`, "color: red;"), null
            }
        },
        getProductImages(m) {
            return !m || !m.images ? [] : m.images.map(l => l.startsWith("//") ? `https:${l}` : l)
        }
    };
st.pageType = st.getPageType();
const v = Object.assign(st, window.__INSTASELL_VIDEO_POP_CONFIG__ || {});
let So = Promise.resolve();
if (st.pageType == "product" && !window.__INSTASELL_VIDEO_POP_CONFIG__ ? .currentProductId) {
    const m = window.location.pathname.split("/").filter(l => l != "").reverse()[0];
    So = fetch(`/products/${m}.json`).then(l => l.json()).then(l => {
        const {
            id: h
        } = l.product;
        st.currentProductId = String(h)
    }).catch(() => {
        st.pageType = "home"
    })
} else if (st.pageType == "collection" && !window.__INSTASELL_VIDEO_POP_CONFIG__ ? .currentCollectionId) {
    const m = window.location.pathname.split("/").filter(l => l != "")[1];
    So = fetch(`/collections/${m}.json`).then(l => l.json()).then(l => {
        const {
            id: h
        } = l.collection;
        st.currentCollectionId = String(h)
    }).catch(() => {
        st.pageType = "home"
    })
}
So.then(() => {
    const m = Xt();
    m.isDebugMode() && m.emitEvent("widget_init", {
        debug_enabled: !0
    }), Vn(i(Gn, {
        children: i(zn, {
            children: i(Fn, {
                children: i(Un, {
                    children: i(Bn, {
                        children: i($n, {
                            children: i(hi, {})
                        })
                    })
                })
            })
        })
    }), document.getElementById("instasell-live-video-pop"))
});