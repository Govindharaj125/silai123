(() => {
    "use strict";
    let e, t, n, o, i, a, r, s;
    var l, d, c, u, _, p, m, g, h = {};
    h.d = (e, t) => {
        for (var n in t) h.o(t, n) && !h.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, h.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), h.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), h.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        if (void 0 !== h) {
            var e = h.u,
                t = h.e,
                n = {},
                o = {};
            h.u = function(t) {
                return e(t) + (n.hasOwnProperty(t) ? "?" + n[t] : "")
            }, h.e = function(i) {
                return t(i).catch(function(t) {
                    var a = o.hasOwnProperty(i) ? o[i] : 10;
                    if (a < 1) {
                        var r = e(i);
                        throw t.message = "Loading chunk " + i + " failed after 10 retries.\n(" + r + ")", t.request = r, t
                    }
                    return new Promise(function(e) {
                        var t = 10 - a + 1;
                        setTimeout(function() {
                            n[i] = "cache-bust=true&retry-attempt=" + t, o[i] = a - 1, e(h.e(i))
                        }, 200)
                    })
                })
            }
        }
    })();
    var E = {};

    function f(e) {
        let t = e;
        return {
            set: function(e) {
                if (null != e) {
                    if (e instanceof Function) try {
                        t = e(t)
                    } catch (e) {} else t = e
                }
            },
            get: function() {
                return t
            }
        }
    }
    h.r(E), h.d(E, {
        openRzpSSOCheckout: () => nP,
        openRzpSSOModal: () => tx
    });
    let v = "rzp_sso_logout_clicked",
        y = "rzp-account-icon",
        S = "rzp_recent_sso_login_try",
        T = "rzp_sso_logged_in",
        C = "rzp_sso_landing_page_init",
        w = "rzp_sso_add_to_cart_init",
        A = "rzp_sso_checkout_init",
        I = "rzp_sso_login_error",
        O = "rzp_v4sda",
        N = "rzp_session_timestamp",
        b = "rzp_international_customer",
        R = "https://checkout.razorpay.com/v1/sso.js",
        k = {
            LANDING_PAGE: "landing_page",
            CHECKOUT_INIT: "checkout_init",
            ADD_TO_CART: "add_to_cart"
        },
        L = /incorrect email or password|please try that again/i,
        D = /missing recaptcha/i,
        U = "/pages/rzp-account",
        P = "rzp-account-overlay";

    function M(e) {
        return e.email && "string" == typeof e.email ? { ...e,
            email: e.email.toLowerCase()
        } : { ...e
        }
    }
    let G = {
            webengage_ls_key: "WEBENGAGE_SHOP_INFO",
            user: {
                email: "",
                phone: "",
                country: "",
                email_opt_in: !1,
                sms_opt_in: !1,
                whatsapp_opt_in: !1
            },
            webengage_attributes_values: {
                email: "we_email",
                phone: "we_phone",
                email_opt_in: "we_email_opt_in",
                sms_opt_in: "we_sms_opt_in",
                whatsapp_opt_in: "we_whatsapp_opt_in",
                country: "country"
            },
            actions: {
                LOGIN: "login",
                SET_ATTRIBUTE: "setAttribute"
            },
            setUser: e => {
                (e.email || e.phone) && (G.user = M(e))
            },
            setAttributes: (e, t) => {
                var n, o, i;
                null == (i = window) || null == (o = i.webengage) || null == (n = o.user) || n.setAttribute(e, t)
            },
            handlers: {
                login_user: (e, t) => {
                    if (G.setUser(e), G.user.email || G.user.phone) {
                        var n, o, i, a, r;
                        let e = JSON.parse(localStorage.getItem("WEBENGAGE_SHOP_INFO") || "{}"),
                            s = null != (n = null == e ? void 0 : e.id_type) ? n : t.identifyType;
                        s && (null == (a = window) || null == (i = a.webengage) || null == (o = i.user) || o.login(null != (r = G.user[s]) ? r : s)), Object.entries(G.webengage_attributes_values).forEach(([e, t]) => {
                            let n = G.user[e];
                            n && G.setAttributes(t, n)
                        })
                    }
                }
            }
        },
        z = {
            SEND_MX_ANALYTICS_ERROR: "error:send_mx_analytics_failed"
        };

    function H(e) {
        return "string" == typeof e && 14 === e.length && /[0-9a-z]/i.test(e)
    }

    function x(e, t) {
        try {
            let t = document.cookie.split(";");
            for (let n of t) {
                let t = n.indexOf("=");
                if (-1 === t) continue;
                let o = n.slice(0, t).trim();
                if (o === e) return n.slice(t + 1)
            }
            return ""
        } catch (e) {
            return null == t || t("exception:cookie_parsing_failed", {}), ""
        }
    }

    function V(e, t, n, o) {
        let i = "";
        if (n) {
            let e = new Date;
            e.setTime(e.getTime() + 1e3 * n), i = "; expires=" + e.toUTCString()
        }
        document.cookie = e + "=" + (t || "") + i + "; path=" + (o || "/")
    }

    function B(e) {
        let t = document.cookie.split(";");
        for (let n of t) {
            let [t] = n.split("=");
            t.trim() === e && (document.cookie = t + "=; Max-Age=-99999999;")
        }
    }
    let F = {
        cookieName: "rzp_unified_session_id",
        ttlSeconds: 1800,
        path: "/"
    };

    function K(e) {
        try {
            V(F.cookieName, e, F.ttlSeconds, F.path)
        } catch (e) {}
    }

    function W() {
        try {
            return x(F.cookieName) || null
        } catch (e) {
            return null
        }
    }

    function j() {
        let e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
            t = e.split("").reduce((e, t, n) => ({ ...e,
                [t]: n
            }), {});

        function n(t) {
            let n = "";
            for (; t;) n = e[t % 62] + n, t = Math.floor(t / 62);
            return n
        }
        let o = n(+(String(Date.now() - 13885344e5) + String(`000000${Math.floor(1e6*Math.random())}`).slice(-6))) + n(Math.floor(238328 * Math.random())) + "0",
            i = 0,
            a = 0;
        return o.split("").forEach(function(e, n) {
            a = t[o[o.length - 1 - n]], (o.length - n) % 2 && (a *= 2), a >= 62 && (a = a % 62 + 1), i += a
        }), (a = i % 62) && (a = e[62 - a]), `${String(o).slice(0,13)}${a}`
    }
    let q = j(),
        $ = !1,
        Q = !1;

    function Y() {
        let e = W();
        return e && H(e) ? e : function() {
            let e = q && H(q) ? q : j();
            return K(e), e
        }()
    }

    function J() {
        let e = W();
        e && H(e) && K(e)
    }
    let Z = navigator.userAgent;

    function X(e) {
        return e.test(Z)
    }
    let ee = X(/Storebot|Googlebot/);

    function et(e, t, n, o, i) {
        return {
            name: e.name || "network_request",
            url: t,
            method: n,
            latency: Date.now() - o,
            xhrStatus: i.status,
            xhrReadyState: i.readyState,
            xhrResponseURL: i.responseURL,
            xhrStatusText: i.statusText
        }
    }

    function en(e, t, n, o) {
        return {
            status: e,
            data: {
                error: t,
                message: n,
                ...o
            }
        }
    }
    X(/iPhone/), X(/iPad/), X(/^((?!chrome|android).)*safari/i), X(/Android/), X(/Windows NT/), X(/Linux/), X(/Mac OS/), X(/Chrome/), X(/; wv\) |Gecko\) Version\/[^ ]+ Chrome/), X(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/), X(/Firefox/), X(/Dalvik\//), X(/SamsungBrowser/), X(/HeadlessChrome/), X(/FB_IAB/), X(/FBAN/), X(/Instagram/);
    let eo = new WeakMap;
    if ("undefined" != typeof XMLHttpRequest) {
        let e = XMLHttpRequest;
        Array.isArray(e.callbacks) || (e.callbacks = [])
    }

    function ei(e) {
        let {
            url: t,
            method: n = "GET",
            data: o,
            timeout: i = 6e4,
            abortController: a,
            responseType: r = "json",
            credentials: s,
            onTrack: l
        } = e, d = Date.now(), c = (e, t) => {
            l && l(e, t)
        };
        return new Promise((l, u) => {
            let _;
            let p = new XMLHttpRequest,
                m = !1;
            if (a) {
                if (eo.set(a, p), a.signal.aborted) {
                    p.abort(), clearTimeout(_), eo.delete(a);
                    let e = en(0, "REQUEST_ABORTED", "network request aborted");
                    u(e);
                    return
                }
                a.signal.addEventListener("abort", () => {
                    p.abort(), clearTimeout(_), eo.delete(a);
                    let e = en(0, "REQUEST_ABORTED", "network request aborted");
                    u(e)
                })
            }
            i > 0 && (_ = setTimeout(() => {
                    m = !0, p.abort();
                    let o = en(p.status || 0, "REQUEST_TIMEOUT", "Request timeout");
                    u(o), c("network_request_timeout", { ...et(e, t, n, d, p),
                        errorType: "REQUEST_TIMEOUT",
                        timeout: i
                    })
                }, i)), p.onreadystatechange = () => {
                    if (4 === p.readyState) {
                        let o;
                        clearTimeout(_), a && eo.delete(a);
                        let i = function(e) {
                            let t = {},
                                n = e.getAllResponseHeaders();
                            if (!n) return t;
                            let o = n.trim().split("\r\n");
                            for (let e of o) {
                                let n = e.indexOf(":");
                                if (-1 === n) continue;
                                let o = e.substring(0, n).trim(),
                                    i = e.substring(n + 1).trim();
                                o && i && (t[o.toLowerCase()] = i)
                            }
                            return t
                        }(p);
                        if (0 === p.status && !p.responseURL) {
                            if (!m) {
                                let o = en(p.status, "REQUEST_CANCELLED", "network request cancelled");
                                u(o), c("network_request_cancelled", { ...et(e, t, n, d, p),
                                    errorType: "REQUEST_CANCELLED"
                                })
                            }
                            return
                        }
                        try {
                            o = "text" === r ? p.responseText : p.responseText ? JSON.parse(p.responseText) : null
                        } catch (i) {
                            let o = en(p.status, "PARSE_ERROR", "Failed to parse response", {
                                originalError: String(i)
                            });
                            u(o), c("network_request_parse_error", { ...et(e, t, n, d, p),
                                errorType: "PARSE_ERROR",
                                error: String(i)
                            });
                            return
                        }
                        if (p.status >= 200 && p.status < 300) {
                            let a = {
                                status: p.status,
                                data: o,
                                headers: i
                            };
                            l(a), c("network_request_success", { ...et(e, t, n, d, p),
                                status: p.status
                            })
                        } else {
                            let i = en(p.status, "REQUEST_FAILED", p.statusText || "Request failed", { ...o ? {
                                    response: o
                                } : {},
                                responseURL: p.responseURL
                            });
                            u(i), c("network_request_failed", { ...et(e, t, n, d, p),
                                errorType: "REQUEST_FAILED"
                            })
                        }
                    }
                }, p.onerror = () => {
                    if (clearTimeout(_), a && eo.delete(a), 0 === p.status && !p.responseURL) return;
                    let o = en(p.status || 0, "NETWORK_ERROR", "Network request failed");
                    u(o), c("network_request_error", { ...et(e, t, n, d, p),
                        errorType: "NETWORK_ERROR"
                    })
                }, p.open(n, t, !0), "include" === s && (p.withCredentials = !0), c("network_request_initiated", { ...et(e, t, n, d, p)
                }),
                function(e, t, n) {
                    if (!(n instanceof FormData)) {
                        let o = Object.keys(t).find(e => "content-type" === e.toLowerCase());
                        o ? e.setRequestHeader("Content-Type", t[o]) : n && "object" == typeof n && e.setRequestHeader("Content-Type", "application/json")
                    }
                    Object.keys(t).forEach(n => {
                        "content-type" !== n.toLowerCase() && e.setRequestHeader(n, t[n])
                    })
                }(p, e.headers || {}, o);
            let g = o ? o instanceof FormData || "string" == typeof o ? o : JSON.stringify(o) : null;
            null !== g ? p.send(g) : p.send()
        })
    }

    function ea() {
        var e;
        return null == (e = document.cookie.match(/_shopify_s=([^;]*)/)) ? void 0 : e[1]
    }

    function er(e) {
        return 0 === Object.keys(e).length
    }
    let es = {
            initiate: "Started_Checkout_MAGIC",
            contact_input_entered: "Mobile_Added_MAGIC",
            pincode_entered: "PIN_Code_Added_MAGIC",
            address_added: "Address_Added_MAGIC",
            address_selected: "Address_Selected_MAGIC",
            shipping_info_submitted: "Shipping_Info_Submitted_MAGIC",
            payment_initiated: "Payment_Method_Selected_MAGIC",
            purchase: "Payment_Complete_MAGIC"
        },
        el = {
            ADD_USER: "add_unique_user_id",
            DESTROY_SESSION: "destroy_session",
            ADD_EMAIL: "add_email",
            ADD_USERNAME: "add_user_name"
        },
        ed = "",
        ec = {
            isUserAdded: !1,
            previousPhone: "",
            previousEmail: "",
            addUser: e => {
                var t;
                if (ec.isUserAdded || (ec.isUserAdded = !0), (null == e ? void 0 : e.phone) && ec.trackMoEngageEvent({
                        actionType: el.ADD_USER,
                        value: e.phone
                    }), (null == e ? void 0 : e.email) && ec.trackMoEngageEvent({
                        actionType: el.ADD_EMAIL,
                        value: e.email
                    }), null == e ? void 0 : e.first_name) {
                    let n = `${e.first_name} ${null!=(t=null==e?void 0:e.last_name)?t:""}`;
                    ec.trackMoEngageEvent({
                        actionType: el.ADD_USERNAME,
                        value: n
                    })
                }
            },
            isUserChanged: e => {
                ((null == e ? void 0 : e.phone) !== ec.previousPhone || (null == e ? void 0 : e.email) !== ec.previousEmail) && ec.logoutUser()
            },
            logoutUser: () => {
                ec.isUserAdded = !1, ec.trackMoEngageEvent({
                    actionType: el.DESTROY_SESSION
                })
            },
            checkout_initiated: e => {
                let t = {
                    eventData: e,
                    eventName: es[null == e ? void 0 : e.event]
                };
                ec.trackMoEngageEvent(t)
            },
            contact_input_entered: e => {
                ec.isUserChanged(e), ec.previousPhone = (null == e ? void 0 : e.phone) || "", ec.previousEmail = (null == e ? void 0 : e.email) || "";
                let t = {
                    eventData: e,
                    eventName: es[null == e ? void 0 : e.event]
                };
                ec.trackMoEngageEvent(t)
            },
            pincode_entered: e => {
                let t = {
                    eventData: e,
                    eventName: es[null == e ? void 0 : e.event]
                };
                ec.trackMoEngageEvent(t)
            },
            address_added: e => {
                let t = {
                    eventData: e,
                    eventName: es[null == e ? void 0 : e.event]
                };
                ec.trackMoEngageEvent(t)
            },
            address_selected: e => {
                let t = {
                    eventData: e,
                    eventName: es[null == e ? void 0 : e.event]
                };
                ec.trackMoEngageEvent(t)
            },
            address_info_submitted: e => {
                let t = {
                    eventData: e,
                    eventName: es[null == e ? void 0 : e.event]
                };
                ec.addUser(e), ec.trackMoEngageEvent(t)
            },
            payment_initiated: e => {
                let t = {
                    eventData: e,
                    eventName: es[null == e ? void 0 : e.event]
                };
                ed = (null == e ? void 0 : e.paymentMethod) || (null == e ? void 0 : e.paymentMode), ec.trackMoEngageEvent(t)
            },
            purchase: e => {
                let t = {
                    eventData: { ...e,
                        paymentMethod: ed
                    },
                    eventName: "Payment_Complete_MAGIC"
                };
                ec.trackMoEngageEvent(t)
            },
            trackMoEngageEvent: e => {
                var t, n;
                let {
                    eventData: o = {},
                    eventName: i,
                    actionType: a,
                    value: r
                } = e;
                if ("function" == typeof(null == (t = window.Moengage) ? void 0 : t.track_event) && !a && i) {
                    window.Moengage.track_event(i, o);
                    return
                }
                if (a && "function" == typeof(null == (n = window.Moengage) ? void 0 : n[a]) && void 0 !== r) {
                    let e = window.Moengage[a];
                    e(r)
                }
            }
        },
        eu = (ec.checkout_initiated, ec.contact_input_entered, ec.pincode_entered, ec.address_added, ec.address_selected, ec.address_info_submitted, ec.payment_initiated, ec.purchase, e => {
            window.tdSubmit && window.tdSubmit(e, "event_shopatsc")
        }),
        e_ = {
            address_contact_input_entered: () => {
                eu({
                    event: "Shipping Address",
                    eventCategory: "SC Contact information Shipping Address",
                    eventAction: "Click",
                    eventLabel: "Enter Mobile"
                })
            },
            address_name_input_entered: () => {
                eu({
                    event: "Shipping Address",
                    eventCategory: "SC Contact information Shipping Address",
                    eventAction: "Click",
                    eventLabel: "Enter First Name"
                })
            },
            address_zipcode_input_entered: e => {
                let t = {
                    event: "Shipping Address",
                    eventCategory: "SC Contact information Shipping Address",
                    eventAction: "Click",
                    eventLabel: (null == e ? void 0 : e.zipcode) || ""
                };
                eu(t)
            },
            city_input_entered: e => {
                let t = {
                    event: "Shipping Address",
                    eventCategory: "SC Contact information Shipping Address",
                    eventAction: "Click",
                    eventLabel: (null == e ? void 0 : e.city) || ""
                };
                eu(t)
            },
            state_input_entered: e => {
                let t = {
                    event: "Shipping Address",
                    eventCategory: "SC Contact information Shipping Address",
                    eventAction: "Click",
                    eventLabel: (null == e ? void 0 : e.state) || ""
                };
                eu(t)
            },
            country_name_input_entered: e => {
                let t = {
                    event: "Shipping Address",
                    eventCategory: "SC Contact information Shipping Address",
                    eventAction: "Click",
                    eventLabel: (null == e ? void 0 : e.country_name) || ""
                };
                eu(t)
            },
            address_screen_continue_cta_clicked: () => {
                eu({
                    event: "Continue Shopping",
                    eventCategory: "SC Contact information Shipping Address - Continue Shopping",
                    eventAction: "Click",
                    eventLabel: "Continue Shopping"
                })
            },
            payment_screen_back_cta_clicked: () => {
                eu({
                    event: "Return to shipping",
                    eventCategory: "SC Return to shipping",
                    eventAction: "Click",
                    eventLabel: "Return to shipping"
                })
            },
            apply_coupon_clicked: () => {
                eu({
                    event: "Discount code",
                    eventCategory: "SC Discount code - Apply",
                    eventAction: "Click",
                    eventLabel: "Apply"
                })
            },
            show_coupon_clicked: () => {
                eu({
                    event: "Discount code",
                    eventCategory: "SC Discount code",
                    eventAction: "Click",
                    eventLabel: "Enter Discount code"
                })
            },
            new_offer_update_clicked: () => {
                eu({
                    event: "Contact information",
                    eventCategory: "SC Contact information",
                    eventAction: "Click",
                    eventLabel: "Email me with news and offers"
                })
            },
            gstin_input_entered: e => {
                let t = {
                    event: "Contact information",
                    eventCategory: "SC Contact information Gstin",
                    eventAction: "Click",
                    eventLabel: (null == e ? void 0 : e.gstin) || ""
                };
                eu(t)
            },
            email_input_entered: () => {
                eu({
                    event: "Contact information",
                    eventCategory: "SC contact information Email",
                    eventAction: "Click",
                    eventLabel: "Enter Email"
                })
            },
            address_line1_input_entered: e => {
                let t = {
                    event: "Shipping Address",
                    eventCategory: "SC Contact information Shipping Address",
                    eventAction: "Click",
                    eventLabel: (null == e ? void 0 : e.line1) || ""
                };
                eu(t)
            },
            address_line2_input_entered: e => {
                let t = {
                    event: "Shipping Address",
                    eventCategory: "SC Contact information Shipping Address",
                    eventAction: "Click",
                    eventLabel: (null == e ? void 0 : e.line2) || ""
                };
                eu(t)
            },
            save_address_consent_clicked: () => {
                eu({
                    event: "Shipping Address",
                    eventCategory: "SC Contact information Shipping Address",
                    eventAction: "Click",
                    eventLabel: "Save this information for next time"
                })
            },
            billing_same_as_shipping_address_clicked: e => {
                let t = {
                    event: "Billing Address",
                    eventCategory: "SC Billing Address",
                    eventAction: "Click",
                    eventLabel: (null == e ? void 0 : e.checked) ? "checked" : "unchecked"
                };
                eu(t)
            },
            contact_input_entered: () => {
                eu({
                    event: "Contact information",
                    eventCategory: "SC Contact information Phone",
                    eventAction: "Click",
                    eventLabel: "Enter phone"
                })
            }
        };
    e_.address_contact_input_entered, e_.address_name_input_entered, e_.address_zipcode_input_entered, e_.city_input_entered, e_.state_input_entered, e_.country_name_input_entered, e_.address_screen_continue_cta_clicked, e_.payment_screen_back_cta_clicked, e_.apply_coupon_clicked, e_.show_coupon_clicked, e_.new_offer_update_clicked, e_.gstin_input_entered, e_.email_input_entered, e_.address_line1_input_entered, e_.address_line2_input_entered, e_.save_address_consent_clicked, e_.billing_same_as_shipping_address_clicked, e_.contact_input_entered;
    let [ep, em] = (() => {
        let e;
        let t = new Promise(t => {
            e = t
        });
        return [t, e]
    })();
    async function eg(e) {
        let t = await ep;
        ew.handlers.checkoutCreated({ ...e,
            order_id: t
        })
    }
    let eh = [];

    function eE(e) {
        return "number" == typeof e ? e / 100 : e
    }
    let ef = window.dataLayer = window.dataLayer || [],
        ev = {},
        ey = {
            GTAG: "",
            COUPON: "",
            CUSTOM_EVENTS: "",
            EVENTS: {
                BEGIN_CHECKOUT: "begin_checkout",
                ADD_SHIPPING_INFO: "add_shipping_info",
                ADD_PAYMENT_INFO: "add_payment_info",
                SELECT_PROMOTION: "select_promotion",
                PURCHASE: "purchase",
                CHECKOUT_ABANDONED: "checkout_abandoned",
                OTP_SUBMITTED: "otp_submitted",
                ADDRESS_ADDED: "address_added",
                ADDRESS_EDITED: "address_edited",
                NOTIFICATION_OPT_IN: "notification_opt_in",
                OTP_SKIPPED: "otp_skipped"
            },
            handlers: {
                setCoupon: e => ey.COUPON = e,
                resetCoupon: () => ey.COUPON = "",
                getCustomEventName: e => ({
                    [ey.EVENTS.BEGIN_CHECKOUT]: "beginCheckout",
                    [ey.EVENTS.ADD_SHIPPING_INFO]: "addShippingInfo",
                    [ey.EVENTS.ADD_PAYMENT_INFO]: "addPaymentInfo",
                    [ey.EVENTS.SELECT_PROMOTION]: "selectPromotion",
                    [ey.EVENTS.PURCHASE]: "Purchase",
                    [ey.EVENTS.CHECKOUT_ABANDONED]: "checkoutAbandoned",
                    [ey.EVENTS.OTP_SUBMITTED]: "otpSubmitted",
                    [ey.EVENTS.ADDRESS_ADDED]: "addressAdded",
                    [ey.EVENTS.ADDRESS_EDITED]: "addressEdited",
                    [ey.EVENTS.NOTIFICATION_OPT_IN]: "notificationOptIn",
                    [ey.EVENTS.OTP_SKIPPED]: "otpSkipped"
                })[e],
                formatLineItems() {
                    if (!eh) return [];
                    let e = eh.map((e, t) => {
                        let n = {
                            index: t,
                            product_id: e.product_id || "",
                            item_id: e.sku || e.id,
                            item_name: e.title || e.name,
                            price: e.price.toFixed(2),
                            quantity: e.quantity,
                            discount: e.discount.toFixed(2),
                            item_brand: e.brand || e.vendor || "",
                            item_variant: e.id || "",
                            item_category: e.type || e.product_type || ""
                        };
                        return ey.COUPON && (n.coupon = ey.COUPON), n
                    });
                    return e
                },
                beginCheckout: e => {
                    let t = ey.handlers.generatePayload(e);
                    ey.handlers.triggerEvent(ey.EVENTS.BEGIN_CHECKOUT, t)
                },
                addShippingInfo: e => {
                    let t = ey.handlers.generatePayload(e);
                    ey.handlers.triggerEvent(ey.EVENTS.ADD_SHIPPING_INFO, t)
                },
                addPaymentInfo: e => {
                    let t = ey.handlers.generatePayload(e);
                    ey.handlers.triggerEvent(ey.EVENTS.ADD_PAYMENT_INFO, t)
                },
                selectPromotion: e => {
                    let t = ey.handlers.generatePayload(e);
                    ey.handlers.triggerEvent(ey.EVENTS.SELECT_PROMOTION, t)
                },
                purchase: t => {
                    var n;
                    let {
                        id: o,
                        total_amount: a,
                        tax: r,
                        shipping_fee: s,
                        cod_fee: l = 0,
                        promotions: d = [],
                        customer_details: c = {}
                    } = t, u = (null == c ? void 0 : c.email) || "", _ = (null == c ? void 0 : c.contact) || "", p = ey.handlers.formatLineItems() || [], m = +s + +(null != l ? l : 0), g = !!(ey.CUSTOM_EVENTS || window.gtag) && !!ey.GTAG;
                    null == i || i("third_party_analytics:dispatch", {
                        platform: "ga4",
                        event_name: ey.EVENTS.PURCHASE,
                        event_type: "purchase",
                        dispatched: g,
                        gtag_present: "function" == typeof window.gtag,
                        measurement_id: ey.GTAG || null,
                        custom_events_mode: !!ey.CUSTOM_EVENTS,
                        params: {
                            transaction_id: o
                        }
                    }), ey.handlers.triggerEvent(ey.EVENTS.PURCHASE, {
                        transaction_id: o,
                        currency: e,
                        items: p,
                        tax: +r.toFixed(2),
                        value: +(a - m).toFixed(2),
                        shipping: +m.toFixed(2),
                        coupon: (null == (n = d[0]) ? void 0 : n.code) || ey.COUPON || "",
                        email: u,
                        contact: _
                    })
                },
                checkoutAbandoned: e => {
                    let t = ey.handlers.generatePayload(e);
                    ey.handlers.triggerEvent(ey.EVENTS.CHECKOUT_ABANDONED, t)
                },
                otpSubmitted: e => {
                    let t = ey.handlers.generatePayload(e);
                    ey.handlers.triggerEvent(ey.EVENTS.OTP_SUBMITTED, t)
                },
                otpSkipped: e => {
                    let t = ey.handlers.generatePayload(e);
                    ey.handlers.triggerEvent(ey.EVENTS.OTP_SKIPPED, t)
                },
                addressAdded: () => {
                    ey.handlers.triggerEvent(ey.EVENTS.ADDRESS_ADDED, {})
                },
                addressEdited: () => {
                    ey.handlers.triggerEvent(ey.EVENTS.ADDRESS_EDITED, {})
                },
                notificationOptIn: e => {
                    let {
                        checked: t
                    } = e;
                    ey.handlers.triggerEvent(ey.EVENTS.NOTIFICATION_OPT_IN, {
                        checked: t
                    })
                },
                generatePayload(t) {
                    (null == t ? void 0 : t.appliedCouponCode) && ey.handlers.setCoupon(t.appliedCouponCode);
                    let n = ey.handlers.formatLineItems() || [],
                        o = function(e, t) {
                            return e.isScriptCouponApplied && er(t) ? e.lineItems.reduce((e, t) => e + (t.quantity || 0) * +(t.price || 0), 0) / 100 : (e.totalAmount || t.original_total_price) / 100
                        }(t, ev) - (t.isScriptCouponApplied && er(ev) ? t.lineItems.reduce((e, t) => e + ((t.price || 0) - (t.offer_price || 0)), 0) / 100 : ((ev.total_discount || 0) + (t.couponDiscount || t.couponDiscountValue || 0)) / 100),
                        i = {
                            items: n,
                            value: isNaN(o) ? 0 : o,
                            currency: e
                        };
                    return ey.COUPON && (i.coupon = ey.COUPON), t.paymentMode && (i.payment_type = t.paymentMode), i
                },
                triggerEvent(e, t) {
                    var n, o;
                    let a = !!(ey.CUSTOM_EVENTS || window.gtag);
                    if (a && ey.GTAG || null == i || i("third_party_analytics:event_failed", {
                            platform: "ga4",
                            event_name: e,
                            params: t,
                            gtag_present: "function" == typeof window.gtag,
                            measurement_id: ey.GTAG || null,
                            custom_events_mode: !!ey.CUSTOM_EVENTS,
                            dispatched: a
                        }), t.type = "Magic", ey.GTAG && (t.send_to = ey.GTAG), ey.CUSTOM_EVENTS) {
                        ef.push({
                            ecommerce: null
                        }), ef.push({
                            event: ey.handlers.getCustomEventName(e),
                            ecommerce: t
                        });
                        return
                    }
                    null == (o = window) || null == (n = o.gtag) || n.call(o, "event", e, t)
                }
            }
        },
        eS = (ey.handlers.beginCheckout, ey.handlers.addShippingInfo, ey.handlers.addPaymentInfo, ey.handlers.selectPromotion, ey.handlers.resetCoupon, ey.handlers.purchase, ey.handlers.checkoutAbandoned, ey.handlers.otpSubmitted, ey.handlers.otpSkipped, ey.handlers.addressAdded, ey.handlers.addressEdited, ey.handlers.notificationOptIn, {
            handlers: {
                triggerEvent: (e, t) => {
                    window.VWO && (window.VWO.event = window.VWO.event || function(e, t) {
                        var n, o;
                        null == (o = window.VWO) || null == (n = o.push) || n.call(o, ["event", e, t])
                    }, window.VWO.event(e, t))
                },
                purchase: t => {
                    let {
                        id: n,
                        total_amount: o
                    } = t;
                    eS.handlers.triggerEvent("revenue", {
                        currency: e,
                        revenue: o,
                        transaction_id: n
                    })
                }
            }
        }),
        eT = (eS.handlers.purchase, {
            handlers: {
                initiate: () => {
                    eT.triggerEvent("info", "checkout")
                },
                shipping_selected: () => {
                    eT.triggerEvent("shipping", "checkout")
                },
                payment_initiated: () => {
                    eT.triggerEvent("payment", "checkout")
                }
            },
            triggerEvent: (e, t) => {
                let {
                    digitalData: n
                } = window.sony || {};
                if (n) {
                    let {
                        page: o = {}
                    } = n;
                    o.name = e, o.template = t
                }
            }
        }),
        eC = (eT.handlers.initiate, eT.handlers.shipping_selected, eT.handlers.payment_initiated, {
            IS_LOGIN_TRIGGERED: !1,
            processEvent: (e, t, n) => {
                var o;
                let i = function(e, t, n) {
                    var o, i;
                    if (null == (o = window.RzpAnalyticsPayloadTransformer) ? void 0 : o[e]) {
                        let n = null == (i = window.RzpAnalyticsPayloadTransformer) ? void 0 : i[e](t);
                        if (null == n ? void 0 : n.event) return n
                    }
                    return {
                        event: e,
                        ...n
                    }
                }(e, t, n);
                return null == (o = window.clevertap) ? void 0 : o.event.push(i.event, i)
            },
            handlers: {
                initiate: t => {
                    let n = {
                        Currency: e,
                        "Total Items": eh.length,
                        "Total Price": t.latestTotal / 100,
                        ...t.custom
                    };
                    eC.processEvent("Checkout", t, n)
                },
                contact_input_entered: e => {
                    var t, n, i;
                    if (null == o ? void 0 : null == (n = o.clevertap) ? void 0 : null == (t = n.events) ? void 0 : t.enableContactInputEvents) {
                        let {
                            email: t,
                            phone: n,
                            custom: o
                        } = e;
                        n && (eC.IS_LOGIN_TRIGGERED = !0, null == (i = window.clevertap) || i.onUserLogin.push({
                            Site: {
                                Email: t,
                                Phone: n,
                                Identity: n,
                                ...o
                            }
                        }))
                    }
                },
                otp_initiated: e => {
                    let t = {
                        email: e.email,
                        phone: e.phone,
                        razorpay_verification_initiated: !0,
                        ...e.custom
                    };
                    eC.processEvent("Razorpay Verification Initiated", e, t)
                },
                otp_submitted: e => {
                    let t = {
                        email: e.email,
                        phone: e.phone,
                        first_name: e.first_name,
                        last_name: e.last_name,
                        razorpay_verification_completed: !0,
                        ...e.custom
                    };
                    eC.processEvent("Razorpay Verification Completed", e, t)
                },
                shipping_selected: e => {
                    let t = {
                        "Shipping Amount": e.shippingAmount / 100,
                        Amount: e.latestTotal / 100,
                        ...e.custom
                    };
                    eC.processEvent("Shipping Selected", e, t)
                },
                payment_initiated: e => {
                    let t = {
                        Amount: e.latestTotal / 100,
                        "Payment mode": e.paymentMethod || e.paymentMode,
                        ...e.custom
                    };
                    eC.processEvent("Payment Initiated", e, t)
                },
                payment_failed: e => {
                    let t = {
                        "Payment mode": "",
                        Reason: e.failureReason,
                        Amount: e.latestTotal / 100,
                        ...e.custom
                    };
                    eC.processEvent("Payment Failed", e, t)
                },
                coupon_applied: e => {
                    let t = {
                        "Cart Value Before Discount": eE(e.amountBeforeDisc),
                        "Cart Value After Discount": eE(e.amountAfterDisc),
                        "Coupon Code": e.appliedCouponCode,
                        "Discount Amount": eE(e.couponDiscountValue),
                        ...e.custom
                    };
                    eC.processEvent("Coupon Code Applied", e, t)
                },
                coupon_failed: e => {
                    let t = {
                        "Coupon Code": e.appliedCouponCode,
                        Message: e.errorMsg,
                        ...e.custom
                    };
                    eC.processEvent("Coupon Code Failed", e, t)
                },
                loginUser: e => {
                    let {
                        email: t,
                        phone: n,
                        custom: o
                    } = e, i = e.isEmailRequired ? !!(t && n) : !!(t || n);
                    if (!eC.IS_LOGIN_TRIGGERED && i) {
                        var a;
                        eC.IS_LOGIN_TRIGGERED = !0, null == (a = window.clevertap) || a.onUserLogin.push({
                            Site: {
                                Email: t,
                                Phone: n,
                                ...o
                            }
                        })
                    }
                },
                purchase: t => {
                    var n;
                    let {
                        id: o,
                        total_amount: i,
                        tax: a,
                        shipping_fee: r,
                        promotions: s = [],
                        payment_method: l = ""
                    } = t, d = {
                        "Order ID": o,
                        Items: eh,
                        "Discount Code": (null == (n = s[0]) ? void 0 : n.code) || "",
                        "Payment mode": l || "",
                        "Total Amount": i,
                        Tax: a,
                        "Shipping Fee": r,
                        Currency: e
                    };
                    eC.processEvent("purchase", t, d)
                }
            }
        }),
        ew = (eC.handlers.initiate, eC.handlers.contact_input_entered, eC.handlers.otp_initiated, eC.handlers.otp_submitted, eC.handlers.shipping_selected, eC.handlers.payment_initiated, eC.handlers.payment_failed, eC.handlers.coupon_applied, eC.handlers.coupon_failed, eC.handlers.loginUser, eC.handlers.purchase, {
            IS_LOGIN_TRIGGERED: !1,
            HAS_GUEST_LOGGED_OUT: !1,
            CHECKOUT_OPEN_SEQUENCE: 0,
            AUTH_INTENT_CHECKOUT_SEQUENCE: -1,
            USER: {},
            WEBENGAGE_LS_KEY: "WEBENGAGE_SHOP_INFO",
            EVENTS: {
                CHECKOUT_CREATED: "Checkout created",
                CHECKOUT_UPDATED: "Checkout updated",
                CHECKOUT_SUCCESS: "checkout success",
                CHECKOUT_FAILED: "checkout failed",
                CHECKOUT_ABANDONED: "checkout abandoned",
                PAYMENT_PAGE_REACHED: "payment page reached"
            },
            ACTIONS: {
                LOGIN: "login",
                SET_ATTRIBUTE: "setAttribute"
            },
            WEBENGAGE_ACTION_PARAMS: {
                EMAIL: "we_email",
                PHONE: "we_phone",
                FIRST_NAME: "we_first_name",
                LAST_NAME: "we_last_name"
            },
            prevMobile: "",
            handlers: {
                setUser: e => {
                    (function(e) {
                        return !!(e.email || e.phone)
                    })(e) && (ew.USER = M(e))
                },
                formatLineItems: t => t.map(t => ({
                    Title: t.name,
                    "Product ID": t.sku,
                    Quantity: t.quantity,
                    "Variant ID": t.id,
                    Currency: e,
                    Price: t.price
                })),
                processEvent: (e, t) => {
                    var n;
                    if (null == (n = window.RzpAnalyticsPayloadTransformer) || !n[e]) return ew.handlers.triggerEvent(e, t); {
                        let n = window.RzpAnalyticsPayloadTransformer[e](t);
                        if (null == n ? void 0 : n.event) return ew.handlers.triggerEvent(n.event, n)
                    }
                },
                startCheckoutIdentityScope: () => {
                    ew.CHECKOUT_OPEN_SEQUENCE += 1, ew.AUTH_INTENT_CHECKOUT_SEQUENCE = -1
                },
                markAuthIntent: () => {
                    ew.AUTH_INTENT_CHECKOUT_SEQUENCE = ew.CHECKOUT_OPEN_SEQUENCE
                },
                hasCurrentCheckoutAuthIntent: () => ew.AUTH_INTENT_CHECKOUT_SEQUENCE === ew.CHECKOUT_OPEN_SEQUENCE,
                checkoutCreated: e => {
                    let t = e.order_id || "";
                    return ew.handlers.processEventWithIdentity({
                        data: e,
                        eventName: ew.EVENTS.CHECKOUT_CREATED,
                        identityMode: "passive",
                        buildPayload: e => ({ ...e,
                            line_items: ew.handlers.formatLineItems(eh),
                            abandoned_checkout_url: t ? function(e) {
                                if (!e) return null;
                                let t = window.location.origin;
                                return `${t}/cart?magic_order_id=${e}`
                            }(t) : null
                        })
                    })
                },
                checkoutUpdated: e => ew.handlers.processEventWithIdentity({
                    data: e,
                    eventName: ew.EVENTS.CHECKOUT_UPDATED,
                    identityMode: "passive"
                }),
                checkoutSuccess: e => ew.handlers.processEventWithIdentity({
                    data: e,
                    eventName: ew.EVENTS.CHECKOUT_SUCCESS,
                    identityMode: "passive"
                }),
                checkoutFailed: e => ew.handlers.processEventWithIdentity({
                    data: e,
                    eventName: ew.EVENTS.CHECKOUT_FAILED,
                    identityMode: "passive",
                    buildPayload: e => ({ ...e,
                        failure_reason: e.failureReason
                    })
                }),
                addressSelected: e => ew.handlers.processEventWithIdentity({
                    data: e,
                    eventName: "address_selected",
                    identityMode: "passive"
                }),
                addressInfoSubmitted: e => ew.handlers.processEventWithIdentity({
                    data: e,
                    eventName: "address_info_submitted",
                    identityMode: "passive"
                }),
                paymentInitiated: e => ew.handlers.processEventWithIdentity({
                    data: e,
                    eventName: "payment_initiated",
                    identityMode: "passive"
                }),
                couponApplied: e => {
                    let t = { ...e,
                        amountBeforeDisc: eE(e.amountBeforeDisc),
                        amountAfterDisc: eE(e.amountAfterDisc),
                        couponDiscountValue: eE(e.couponDiscountValue)
                    };
                    return ew.handlers.processEventWithIdentity({
                        data: t,
                        eventName: "coupon_applied",
                        identityMode: "passive"
                    })
                },
                couponFailed: e => ew.handlers.processEventWithIdentity({
                    data: e,
                    eventName: "coupon_failed",
                    identityMode: "passive"
                }),
                addressAdded: e => ew.handlers.processEventWithIdentity({
                    data: e,
                    eventName: "address_added"
                }),
                checkoutAbandoned: e => ew.handlers.processEventWithIdentity({
                    data: e,
                    eventName: ew.EVENTS.CHECKOUT_ABANDONED
                }),
                paymentMethodSelected: e => ew.handlers.processEventWithIdentity({
                    data: e,
                    eventName: ew.EVENTS.PAYMENT_PAGE_REACHED
                }),
                phoneUpdated: e => {
                    if (ew.prevMobile !== e.phone) return ew.prevMobile = e.phone || "", ew.handlers.processEventWithIdentity({
                        data: e,
                        eventName: "mobile_added"
                    })
                },
                otpInitiated: () => {
                    ew.handlers.markAuthIntent()
                },
                otpSubmitted: e => ew.handlers.processEventWithIdentity({
                    data: e,
                    eventName: "otp_submitted",
                    identityMode: "explicit"
                }),
                otpSkipped: e => ew.handlers.processEventWithIdentity({
                    data: e,
                    eventName: "otp_skipped",
                    identityMode: "none"
                }),
                pincodeUpdated: e => ew.handlers.processEventWithIdentity({
                    data: e,
                    eventName: "pincode_entered"
                }),
                applyUserIdentity: (e, t = "none") => {
                    var n, o;
                    let i = function(e, t) {
                        return "none" !== t && ("string" == typeof e.auth_context ? "otp_verified" === e.auth_context || "authenticated" === e.auth_context : "explicit" === t && ew.handlers.hasCurrentCheckoutAuthIntent())
                    }(e, t);
                    if (!i) return;
                    ew.handlers.setUser(e);
                    let a = function(e) {
                        var t, n;
                        return "email" === e ? "" === ew.USER.email ? "" : "string" == typeof ew.USER.email ? ew.USER.email : null != (t = ew.USER.phone) ? t : "" : "phone" === e ? "" === ew.USER.phone ? "" : "string" == typeof ew.USER.phone ? ew.USER.phone : null != (n = ew.USER.email) ? n : "" : "string" == typeof ew.USER.phone && ew.USER.phone ? ew.USER.phone : "string" == typeof ew.USER.email ? ew.USER.email : ""
                    }(function() {
                        let e = function() {
                            let e = localStorage.getItem(ew.WEBENGAGE_LS_KEY);
                            if (!e) return {};
                            try {
                                let t = JSON.parse(e);
                                return t
                            } catch (e) {
                                return {}
                            }
                        }();
                        return "object" == typeof e && null !== e && "string" == typeof e.id_type ? e.id_type : ""
                    }());
                    a && ((null == (o = window) ? void 0 : null == (n = o.RzpAnalyticsPayloadTransformer) ? void 0 : n.isLoginTriggered) || ew.IS_LOGIN_TRIGGERED || (ew.IS_LOGIN_TRIGGERED = !0, ew.HAS_GUEST_LOGGED_OUT = !1, ew.AUTH_INTENT_CHECKOUT_SEQUENCE = -1, "object" == typeof window.RzpAnalyticsPayloadTransformer && null !== window.RzpAnalyticsPayloadTransformer && (window.RzpAnalyticsPayloadTransformer.isLoginTriggered = !0), ew.handlers.triggerAction(ew.ACTIONS.LOGIN, [a, ""]), Object.entries(ew.WEBENGAGE_ACTION_PARAMS).forEach(([e, t]) => {
                        ew.handlers.setAttributes(t, function(e) {
                            var t, n, o, i;
                            switch (e) {
                                case "EMAIL":
                                    return null != (t = ew.USER.email) ? t : "";
                                case "PHONE":
                                    return null != (n = ew.USER.phone) ? n : "";
                                case "FIRST_NAME":
                                    return null != (o = ew.USER.first_name) ? o : "";
                                case "LAST_NAME":
                                    return null != (i = ew.USER.last_name) ? i : "";
                                default:
                                    return ""
                            }
                        }(e))
                    })))
                },
                processEventWithIdentity: ({
                    data: e,
                    eventName: t,
                    identityMode: n = "none",
                    buildPayload: o
                }) => {
                    if (ew.handlers.applyUserIdentity(e, n), t) return ew.handlers.processEvent(t, o ? o(e) : e)
                },
                setAttributes: (e, t) => {
                    ew.IS_LOGIN_TRIGGERED && ew.handlers.triggerAction(ew.ACTIONS.SET_ATTRIBUTE, [e, t])
                },
                triggerEvent: (e, t) => {
                    window.webengage && window.webengage.track(e, t)
                },
                logoutUser: () => {
                    var e, t, n;
                    ew.IS_LOGIN_TRIGGERED = !1, ew.USER = {}, ew.prevMobile = "", ew.AUTH_INTENT_CHECKOUT_SEQUENCE = -1, "object" == typeof window.RzpAnalyticsPayloadTransformer && null !== window.RzpAnalyticsPayloadTransformer && (window.RzpAnalyticsPayloadTransformer.isLoginTriggered = !1), ew.HAS_GUEST_LOGGED_OUT = !0, null == (n = window.webengage) || null == (t = n.user) || null == (e = t.logout) || e.call(t)
                },
                triggerAction: (e, t) => {
                    var n;
                    (null == (n = window.webengage) ? void 0 : n.user) && window.webengage.user[e](...t)
                }
            }
        }),
        eA = {
            handlers: {
                normalizeLineItems: e => e.map((e, t) => ({
                    index: t,
                    product_id: String(null != (l = e.product_id) ? l : ""),
                    item_id: String(null != (d = e.id) ? d : ""),
                    item_name: String(null != (c = e.item_name) ? c : ""),
                    price: Number(null != (u = e.price) ? u : 0),
                    quantity: Number(null != (_ = e.quantity) ? _ : 0)
                })),
                conversion: o => {
                    let {
                        customer_details: {
                            email: a,
                            contact: r
                        }
                    } = o;
                    window.gtag && a && r && window.gtag("set", "user_data", {
                        email: a,
                        phone_number: r
                    });
                    let s = eA.handlers.normalizeLineItems(eh),
                        l = !!(window.gtag && t && n);
                    l || null == i || i("third_party_analytics:event_failed", {
                            platform: "google_ads",
                            gtag_present: "function" == typeof window.gtag,
                            gtag_id_present: !!t,
                            gtag_label_present: !!n,
                            dispatched: !1,
                            params: {
                                order_id: o.order_id
                            }
                        }), null == i || i("third_party_analytics:dispatch", {
                            platform: "google_ads",
                            event_name: "conversion",
                            event_type: "purchase",
                            dispatched: l,
                            gtag_present: "function" == typeof window.gtag,
                            gtag_id_present: !!t,
                            gtag_label_present: !!n,
                            params: {
                                order_id: o.order_id
                            }
                        }),
                        function(e, t, n, o, i, a) {
                            window.gtag && i && a && window.gtag("event", "conversion", {
                                transaction_id: e.id,
                                event_callback: null,
                                items: t,
                                send_to: `${i}/${a}`,
                                value: e.total_amount,
                                currency: o
                            })
                        }(o, s, 0, e, t, n)
                }
            }
        },
        eI = (ew.handlers.logoutUser, ew.handlers.addressSelected, ew.handlers.addressAdded, ew.handlers.addressInfoSubmitted, ew.handlers.pincodeUpdated, ew.handlers.paymentInitiated, ew.handlers.couponApplied, ew.handlers.couponFailed, ew.handlers.paymentMethodSelected, ew.handlers.phoneUpdated, ew.handlers.otpInitiated, ew.handlers.otpSubmitted, ew.handlers.otpSkipped, ew.handlers.checkoutSuccess, ew.handlers.checkoutFailed, ew.handlers.checkoutAbandoned, eA.handlers.conversion, {
            IS_LOGIN_TRIGGERED: !1,
            EVENTS: {
                CHECKOUT_STARTED: "Checkout started",
                CONTACT_INFO_SUBMITTED: "Checkout Contact info submitted",
                ADDRESS_INFO_SUBMITTED: "Checkout Address info submitted",
                PAYMENT_INFO_SUBMITTED: "Payment info submitted",
                SHIPPING_INFO_SUBMITTED: "Checkout Shipping info submitted"
            },
            triggerAnalyticsEvent: (e, t) => {
                window.mixpanel && window.mixpanel.track(e, t)
            },
            registerAnalyticsEvent: e => {
                window.mixpanel && window.mixpanel.register(e)
            },
            handlers: {
                getUserIdentificationToken: () => x("_shopify_y"),
                initiate: e => {
                    var t, n, o, i;
                    null == (n = window) || null == (t = n.mixpanel) || t.init(a, {
                        debug: !1
                    });
                    let r = eI.handlers.getUserIdentificationToken();
                    eI.registerAnalyticsEvent({
                        distinct_id: r,
                        $device_id: r,
                        order_id: e.order_id,
                        firstName: e.first_name,
                        lastName: e.last_name,
                        products: eh.map(e => ({
                            id: e.id,
                            quantity: e.quantity,
                            title: e.name,
                            type: e.type,
                            untranslated_title: e.name,
                            variant_curreny_code: e.currency,
                            variant_id: e.variant_id,
                            variant_price: e.price,
                            variant_sku: e.sku,
                            variant_image: e.image,
                            vendor: e.vendor,
                            variant_untranslated_title: e.name
                        })),
                        cart_subtotal_amount: (null != (o = e.totalAmount) ? o : 0) / 100,
                        cart_total_amount: (null != (i = e.totalAmount) ? i : 0) / 100,
                        shipping_address: {
                            address1: e.line1,
                            address2: e.line2,
                            city: e.city,
                            country: e.country_name,
                            zip: e.zipcode,
                            state: e.state,
                            firstName: e.first_name,
                            lastName: e.last_name,
                            email: e.email,
                            phone: e.phone
                        },
                        currency: e.currency,
                        page_title: document.title,
                        page_name: document.location.pathname
                    }), eI.triggerAnalyticsEvent(eI.EVENTS.CHECKOUT_STARTED, {
                        event_type: "standard"
                    })
                },
                contactInfoSubmitted: e => {
                    !eI.IS_LOGIN_TRIGGERED && (e.email || e.phone) && (eI.IS_LOGIN_TRIGGERED = !0, eI.registerAnalyticsEvent({
                        email: e.email,
                        phone: e.phone
                    }), eI.triggerAnalyticsEvent(eI.EVENTS.CONTACT_INFO_SUBMITTED, {
                        event_type: "custom"
                    }))
                },
                addressInfoSubmitted: e => {
                    eI.registerAnalyticsEvent({
                        firstName: e.first_name,
                        lastName: e.last_name,
                        shipping_address: {
                            address1: e.line1,
                            address2: e.line2,
                            city: e.city,
                            countryCode: e.country_name,
                            zip: e.zipcode,
                            province: e.state,
                            provinceCode: e.state_code,
                            email: e.email,
                            phone: e.phone
                        }
                    }), eI.triggerAnalyticsEvent(eI.EVENTS.ADDRESS_INFO_SUBMITTED, {
                        event_type: "standard"
                    })
                },
                shippingInfoSubmitted: e => {
                    let {
                        shippingAmount: t,
                        totalAmount: n,
                        latestTotal: o
                    } = e, {
                        tax: i
                    } = e;
                    eI.registerAnalyticsEvent({
                        shipping_amount: (null != t ? t : 0) / 100,
                        cart_subtotal_amount: (null != n ? n : 0) / 100,
                        cart_total_amount: (null != o ? o : 0) / 100,
                        tax_amount: i / 100 || 0
                    }), eI.triggerAnalyticsEvent(eI.EVENTS.SHIPPING_INFO_SUBMITTED, {
                        event_type: "custom"
                    })
                },
                paymentInfoSubmitted: e => {
                    let {
                        paymentMethod: t
                    } = e;
                    eI.triggerAnalyticsEvent(eI.EVENTS.PAYMENT_INFO_SUBMITTED, {
                        event_type: "standard",
                        paymeny_gateway: ["magic"],
                        processing_method: "cod" === t ? "cod" : "prepaid"
                    })
                }
            }
        }),
        eO = (eI.handlers.initiate, eI.handlers.contactInfoSubmitted, eI.handlers.addressInfoSubmitted, eI.handlers.shippingInfoSubmitted, eI.handlers.paymentInfoSubmitted, {
            bob: {
                name: "bob",
                storageKeys: {
                    localStorage: [],
                    sessionStorage: ["bob_rzp_id", "client_id"]
                }
            }
        });
    (function() {
        let e = location.search;
        "string" == typeof e ? function(e) {
            let t = {};
            return e.split(/=|&/).forEach((e, n, o) => {
                n % 2 && (t[o[n - 1]] = decodeURIComponent(e))
            }), t
        }(e.slice(1)) : {}
    })(), window.rzpApi, window.rzpMode;
    let eN = {},
        eb = {
            properties: {},
            timestamp: Date.now(),
            referer: "",
            amount: "",
            currency: "",
            event_version: "v2",
            event_type: "",
            caller_id: "",
            order_id: "",
            experiments: [],
            features: [],
            platform: "",
            value: "",
            previous: "",
            parent: "",
            caller_tags: [],
            checkout_tags: [],
            content: [],
            merchant_tags: [],
            tags: [],
            network: 0,
            merchant_id: "",
            env: 1
        },
        eR = new class {
            pushToEventQ(e) {
                this.EVT_Q.push(e)
            }
            async sendEvent(e) {
                let t = {
                    mode: "live",
                    key: "ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk",
                    events: e,
                    context: { ...this.props,
                        user_agent: navigator.userAgent,
                        referer: location.href,
                        hostname: encodeURIComponent(window.location.hostname),
                        key: ""
                    }
                };
                try {
                    await fetch("https://lumberjack.razorpay.com/v1/track", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(t)
                    })
                } catch (e) {}
            }
            flushEvents() {
                let e = this.EVT_Q.splice(0, this.EVT_Q.length);
                e.length && this.sendEvent(e).then(() => {}).catch(() => {})
            }
            track(e, t = {}, n = !1, o = "", i = {}) {
                var a;
                let r = { ...eb,
                    event: e,
                    event_type: "magic_sopc" === o || "magic_shopify" === o ? "checkout" : "checkout-widgets",
                    checkout_id: q,
                    view: (null == (a = window) ? void 0 : a.innerWidth) >= 1e3 ? 1 : 0,
                    unified_session_id: Y() || "",
                    device: function() {
                        let e, t;
                        let n = navigator.userAgent,
                            o = n.match(/iPhone; CPU iPhone OS (\d+)/);
                        return o ? (e = 1, t = o[1]) : (o = n.match(/iPad; CPU OS (\d+)/)) ? (e = 2, t = o[1]) : (o = n.match(/Mac OS X (\w+)/)) ? (e = 3, t = o[1].split("_").join("")) : (o = n.match(/Windows NT (\d+)/)) ? (e = 4, t = o[1]) : (o = n.match(/Linux; Android (\d+)/)) ? (e = 5, t = o[1]) : (o = n.match(/Linux/)) && (e = 6), [e || 0, Number(t) || 0]
                    }(),
                    timestamp: Date.now(),
                    properties: t,
                    product: "magic_sopc" === o ? 3 : "magic_sidecart" === o ? 4 : "magic_sso" === o ? 5 : 2,
                    lj_data: (null == eN ? void 0 : eN.lj_data) || "",
                    ...i
                };
                "magic_sso" === o && (r.lj_data && "" !== r.lj_data || delete r.lj_data), this.pushToEventQ(r), n && this.flushEvents()
            }
            destroy() {
                this.flushInterval && clearInterval(this.flushInterval), this.flushEvents()
            }
            constructor() {
                this.props = {
                    referer: window.location.href
                }, this.EVT_Q = [], this.flushInterval = window.setInterval(this.flushEvents.bind(this), 1e3)
            }
        },
        ek = null == (p = document.currentScript) ? void 0 : p.getAttribute("src"),
        eL = (null == ek ? void 0 : ek.includes("magic-plugins.razorpay.com")) ? "production" : ek || "unknown";

    function eD(e) {
        try {
            if (!e.lumberjackKey || !e.origin || !e.lib || ee) return !0;
            return window.Shopify && "main" !== window.Shopify.theme.role
        } catch (e) {
            return !1
        }
    }

    function eU(e, t) {
        r.trackError(e, t)
    }

    function eP(e, t = {}, n = !1, o = {}) {
        r.track(e, t, n, o)
    }
    let eM = {
            webengage: {
                enabled: () => !1,
                identifyType: ""
            }
        },
        eG = {
            webengage: G.handlers
        },
        ez = {
            login_user: e => {
                ! function(e, t) {
                    Object.entries(eM).forEach(([n, o]) => {
                        var i, a, r, s;
                        let l = null == o ? void 0 : null == (i = o.enabled) ? void 0 : i.call(o);
                        if (l && "function" == typeof(null == eG ? void 0 : null == (a = eG[n]) ? void 0 : a[e])) try {
                            null == (r = (s = eG[n])[e]) || r.call(s, { ...t
                            }, o)
                        } catch (e) {
                            eU(e, z.SEND_MX_ANALYTICS_ERROR)
                        }
                    })
                }("login_user", e)
            }
        },
        eH = {
            NO_SSO_CONFIG_FOUND: "error:no_sso_config_found",
            GLOBAL_CONFIG_INIT_ERROR: "error:global_config_init_failed",
            SSO_OPTIONS_PRESENT: "error:sso_options_present"
        },
        ex = {
            GET_STORAGE_DATA_ERROR: "error:get_storage_data_failed"
        };

    function eV(e, t, n) {
        "function" == typeof e && e(t, n)
    }

    function eB(e) {
        try {
            var t;
            if ("undefined" == typeof window) return eV(e, "local_storage_unavailable"), null;
            return null != (t = window.localStorage) ? t : null
        } catch (t) {
            return eV(e, "local_storage_unavailable"), null
        }
    }

    function eF(e, t) {
        try {
            var n;
            let o = eB(t),
                i = null != (n = null == o ? void 0 : o.getItem(e)) ? n : null;
            return null === i && eV(t, "local_storage_item_not_found", {
                key: e
            }), i
        } catch (n) {
            return eV(t, "local_storage_unavailable", {
                key: e,
                error: String(n)
            }), null
        }
    }

    function eK(e, t, n) {
        try {
            let o = eB(n);
            null == o || o.setItem(e, t)
        } catch (t) {
            eV(n, "local_storage_unavailable", {
                key: e,
                error: String(t)
            })
        }
    }

    function eW(e, t) {
        try {
            let n = eB(t);
            null == n || n.removeItem(e)
        } catch (n) {
            eV(t, "local_storage_unavailable", {
                key: e,
                error: String(n)
            })
        }
    }
    let ej = "rzp_id_account_state";

    function eq() {
        try {
            let e = eF(ej);
            if (!e) return null;
            let t = JSON.parse(e);
            if ((null == t ? void 0 : t.version) === 1 && (null == t ? void 0 : t.state) === "merchant_signed_out" && "string" == typeof(null == t ? void 0 : t.contactHash)) {
                if ("number" == typeof t.expiresAt && Date.now() >= t.expiresAt) return eW(ej), null;
                return t
            }
        } catch (e) {}
        return null
    }

    function e$() {
        return null !== eq()
    }
    let eQ = f("test"),
        eY = f(""),
        eJ = f(""),
        eZ = f(""),
        eX = f(!1),
        e0 = f([]),
        e1 = f(null),
        e2 = f(!1),
        e5 = f(!1);
    f([]);
    let e3 = f(null),
        e9 = f(""),
        e7 = f(!1),
        e8 = f(!1),
        e4 = f(!1),
        e6 = f({}),
        te = f(null),
        tt = f(window.rzpApi || "https://api.razorpay.com/v1/"),
        tn = f(!1),
        to = f({}),
        ti = f([]),
        ta = f(!1),
        tr = f(""),
        ts = f(!1),
        tl = f(!1),
        td = f(!1),
        tc = f(""),
        tu = f("none"),
        t_ = f(!1);

    function tp() {
        let e = tl.get();
        return !!e && "function" == typeof e.fn && (tl.set(!1), e.fn(), !0)
    }
    let tm = '.header__icon-account, .header__icon--account, shopify-account, button[aria-label="Open account menu"], .m-header__account',
        tg = {
            unbranded_buy_with_form: 'form[action="/cart/add"] button.shopify-payment-button__button--unbranded:not(.shopify-payment-button__button--hidden)',
            unbranded_buy_without_form: "button.shopify-payment-button__button--unbranded:not(.shopify-payment-button__button--hidden)",
            cart: 'form[action="/cart"] [type="submit"][name="checkout"], form[action="/cart"] button[name="checkout"], button[type="submit"][name="checkout"], button[type="button"][name="checkout"], form[action="/cart"] a[href="/checkout"]',
            checkout: 'form[action="/checkout"] [type="submit"][name="checkout"], input[name="checkout"]:not([type="text"]), cart-form a[href="/checkout"], .cart-form a[href="/checkout"], .rzp-sidecart-checkout a[href="/checkout"], magic-checkout-btn',
            add_to_cart: 'form[action="/cart/add"] [name="add"], .add-to-cart, .product-form__submit, #add-to-bag, .atb-button',
            account_btn: ['a[href="/account/login"]', 'a[href="/account"]', "#rzp-account-icon", tm].join(", ")
        },
        th = tg,
        tE = () => [th.checkout, th.cart, th.unbranded_buy_with_form, th.unbranded_buy_without_form, th.checkout_custom].filter(Boolean).join(","),
        tf = {
            HANDLE_LOGOUT_ERROR: "error:handle_logout_failed",
            ACCOUNT_BUTTON_MISS: "sso:account_button_miss"
        },
        tv = new WeakMap,
        ty = new WeakMap,
        tS = null,
        tT = () => {
            tS && (window.clearTimeout(tS), tS = null)
        },
        tC = () => {
            tT(), tS = window.setTimeout(() => {
                tS = null, tL()
            }, 15e3)
        },
        tw = e => Array.from(e.attributes).map(({
            name: e,
            value: t
        }) => ({
            name: e,
            value: t
        })),
        tA = (e, t) => {
            Array.from(e.attributes).forEach(({
                name: t
            }) => {
                e.removeAttribute(t)
            }), t.forEach(({
                name: t,
                value: n
            }) => {
                null !== n && e.setAttribute(t, n)
            })
        },
        tI = e => {
            tv.has(e) || tv.set(e, {
                attributes: tw(e),
                innerHTML: e.innerHTML
            })
        },
        tO = e => {
            var t;
            let n = tv.get(e);
            n && (null == (t = ty.get(e)) || t.disconnect(), ty.delete(e), tA(e, n.attributes), e.innerHTML = n.innerHTML, tv.delete(e))
        },
        tN = () => {
            let e = [th.account_btn];
            return td.get() && (th.account_btn_custom && e.push(th.account_btn_custom), e.push('a[href*="customer_authentication/redirect"]')), e
        };

    function tb(e, t) {
        if ("default" === t) {
            e.innerHTML = '<svg data-rzp-icon="true" width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2ZM9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7Z" fill="currentColor"/><path d="M8 14C5.23858 14 3 16.2386 3 19V21C3 21.5523 3.44772 22 4 22C4.55228 22 5 21.5523 5 21V19C5 17.3431 6.34315 16 8 16H16C17.6569 16 19 17.3431 19 19V21C19 21.5523 19.4477 22 20 22C20.5523 22 21 21.5523 21 21V19C21 16.2386 18.7614 14 16 14H8Z" fill="currentColor"/><g clip-path="url(#rzp-icon-clip)"><mask id="rzp-icon-mask" maskUnits="userSpaceOnUse" x="14.835" y="6" width="12" height="18" fill="black"><rect fill="white" x="14.835" y="6" width="12" height="18"/><path d="M17.5621 11.8575L16.835 14.5337L20.9968 11.8423L18.2749 21.9977L21.0392 22L25.0602 7"/></mask><path d="M17.5621 11.8575L16.835 14.5337L20.9968 11.8423L18.2749 21.9977L21.0392 22L25.0602 7" fill="#3395FF"/><path d="M16.835 14.5337L15.8699 14.2715L15.1853 16.7914L17.378 15.3734L16.835 14.5337ZM20.9968 11.8423L21.9627 12.1012L22.6352 9.59177L20.4537 11.0026L20.9968 11.8423ZM18.2749 21.9977L17.3089 21.7388L16.9718 22.9966L18.274 22.9977L18.2749 21.9977ZM21.0392 22L21.0384 23L21.8063 23.0006L22.0051 22.2589L21.0392 22ZM17.5621 11.8575L16.597 11.5953L15.8699 14.2715L16.835 14.5337L17.8 14.7959L18.5271 12.1197L17.5621 11.8575ZM16.835 14.5337L17.378 15.3734L21.5398 12.682L20.9968 11.8423L20.4537 11.0026L16.2919 13.694L16.835 14.5337ZM20.9968 11.8423L20.0308 11.5834L17.3089 21.7388L18.2749 21.9977L19.2408 22.2566L21.9627 12.1012L20.9968 11.8423ZM18.2749 21.9977L18.274 22.9977L21.0384 23L21.0392 22L21.0401 21L18.2757 20.9977L18.2749 21.9977ZM21.0392 22L22.0051 22.2589L26.0261 7.25892L25.0602 7L24.0943 6.74108L20.0733 21.7411L21.0392 22Z" fill="white" mask="url(#rzp-icon-mask)"/><path d="M20.4053 13.4438L18.0869 22.1294L17.9873 22.5005H11.2861L11.4541 21.8706L12.5996 17.6011L12.6494 17.4155L12.8115 17.311L19.6504 12.895L20.7393 12.1919L20.4053 13.4438Z" fill="#0C2651" stroke="white"/></g><defs><clipPath id="rzp-icon-clip"><rect width="15" height="15" fill="white" transform="translate(11 7)"/></clipPath></defs></svg>';
            return
        }
        let n = document.createElement("img");
        n.dataset.rzpIcon = "true", n.src = t, n.alt = "", n.setAttribute("aria-hidden", "true"), e.replaceChildren(n)
    }
    let tR = (e, t) => {
        tI(e);
        let n = t.trim(),
            o = e.matches(tm) || !!th.account_btn_custom && e.matches(th.account_btn_custom);
        e.id = y, e.removeAttribute("onclick"), e.removeAttribute("popovertarget"), e.removeAttribute("popovertargetaction"), e.classList.remove("small-hide"), o && n && "none" !== n && ("default" === n || function(e) {
            try {
                return "https:" === new URL(e).protocol
            } catch (e) {
                return !1
            }
        }(n)) && function(e, t) {
            var n;
            null == (n = ty.get(e)) || n.disconnect(), tb(e, t);
            let o = 0,
                i = new MutationObserver(() => {
                    if (!e.querySelector("[data-rzp-icon]")) {
                        if (++o > 10) {
                            i.disconnect();
                            return
                        }
                        i.disconnect(), tb(e, t), i.observe(e, {
                            childList: !0
                        })
                    }
                });
            i.observe(e, {
                childList: !0
            }), ty.set(e, i)
        }(e, n)
    };

    function tk() {
        tT();
        let e = document.querySelectorAll(th.account_btn);
        e.forEach(e => {
            e.classList.add("show-account-btn")
        })
    }

    function tL() {
        tT();
        let e = Array.from(document.querySelectorAll(tN().join(", "))).filter(e => e instanceof HTMLElement);
        e.forEach(tO)
    }
    let tD = () => {
        var e;
        return ['a[href="/account/logout"]', null == (e = e6.get()) ? void 0 : e.logoutBtn].filter(Boolean).join(",")
    };

    function tU(e) {
        try {
            e.preventDefault(), e.stopPropagation(), B("discount_code"), B(O), sessionStorage.setItem(v, "true"), localStorage.removeItem(T), sessionStorage.removeItem(S), window.location.replace("/account/logout")
        } catch (e) {
            eU(e, tf.HANDLE_LOGOUT_ERROR)
        }
    }
    let tP = () => {
            let e = document.createElement("style");
            e.innerHTML = `
  @-webkit-keyframes pulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
  @keyframes pulse {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  #${y} {
    cursor: pointer;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    opacity: 0.5;
    position: relative;
    -webkit-animation: pulse 1s infinite;
    animation: pulse 1s infinite;
  }

  #${y}.show-account-btn {
    opacity: 1;
    -webkit-animation: none;
    animation: none;
  }
`, document.getElementsByTagName("head")[0].appendChild(e)
        },
        tM = new WeakMap,
        tG = () => document.querySelectorAll(tE()),
        tz = () => {
            tG().forEach(e => {
                e.removeAttribute("data-magic"), e.removeAttribute("data-magicx");
                let t = tM.get(e);
                t && (e.setAttribute("type", t), tM.delete(e))
            })
        },
        tH = () => {
            tG().forEach(e => {
                e.setAttribute("data-magic", "inactive"), e.setAttribute("data-magicx", "inactive"), "submit" === e.getAttribute("type") && (tM.set(e, "submit"), e.setAttribute("type", "button"))
            })
        };

    function tx() {
        if (e2.get() || eX.get() || e5.get() && !e$() || window.location.pathname.includes("account/login") && "true" === sessionStorage.getItem(b)) return;
        let e = e3.get();
        e && (e2.set(!0), e.open())
    }
    let tV = e => {
            var t;
            return null == (t = e0.get()) ? void 0 : t.findIndex(t => t.type === e)
        },
        tB = e => {
            var t;
            return 1e3 * ((null == (t = e0.get()[e]) ? void 0 : t.delay) || 0)
        },
        tF = e => "true" === sessionStorage.getItem(e),
        tK = e => sessionStorage.setItem(e, "true"),
        tW = () => {
            var e;
            let t = e0.get()[tV(k.CHECKOUT_INIT)];
            return null != (e = null == t ? void 0 : t.mandatory) && e
        },
        tj = () => {
            let e = tW();
            if (e && !e5.get()) return !0;
            let t = tV(k.CHECKOUT_INIT),
                n = tF(A);
            return -1 !== t && !e && !n
        },
        tq = () => -1 !== tV(k.ADD_TO_CART),
        t$ = (e, t, n) => {
            let o = tV(e);
            if (-1 === o || tF(t)) return;
            let i = tB(o);
            i > 0 ? setTimeout(() => {
                tK(t), n()
            }, i) : (tK(t), n())
        },
        tQ = () => {
            t$(k.LANDING_PAGE, C, tx)
        },
        tY = () => {
            t$(k.ADD_TO_CART, w, tx)
        },
        tJ = e => (tF(A) && !tW() || e5.get() && !ta.get() ? (null == e ? void 0 : e.target) || tp() : (null == e || e.stopPropagation(), null == e || e.stopImmediatePropagation(), null == e || e.preventDefault(), tZ(e)), !0),
        tZ = e => {
            (null == e ? void 0 : e.target) ? ta.set(e.target): ta.set(!0);
            let t = "true" === sessionStorage.getItem(I);
            if (tW() && !t) {
                tx();
                return
            }
            tF(A) || t ? (ta.set(!1), tz(), (null == e ? void 0 : e.target) ? e.target.click() : tp()) : tx(), tK(A)
        },
        tX = e => {
            e.stopPropagation(), e.stopImmediatePropagation(), e.preventDefault()
        },
        t0 = e => {
            let t = e$();
            if (td.get() && e5.get() && !t) {
                tX(e), window.location.href = U;
                return
            }(!e5.get() || t) && (sessionStorage.removeItem(v), tX(e), td.get() && window.location.pathname !== U && t_.set(!0), tx())
        },
        t1 = {
            unbranded_buy_with_form: tJ,
            unbranded_buy_without_form: tJ,
            cart: tJ,
            checkout: tJ,
            add_to_cart: e => (e.stopPropagation(), e.stopImmediatePropagation(), tY(), !0),
            account_btn: e => (t0(e), !0),
            add_to_cart_custom: e => (e.stopPropagation(), e.stopImmediatePropagation(), tY(), !0),
            checkout_custom: tJ,
            account_btn_custom: e => (t0(e), !0)
        },
        t2 = e => {
            let t = e.target;
            (null == t ? void 0 : t.nodeType) === Node.ELEMENT_NODE && (! function() {
                if (!$ || !Q) {
                    if ($) {
                        Q = !0;
                        return
                    }
                    J(),
                        function e() {
                            $ = !0, setTimeout(() => {
                                $ = !1, Q && (Q = !1, J(), e())
                            }, 12e4)
                        }()
                }
            }(), tj() && tH(), function(e) {
                var t;
                let n = (t = e.target, e => !!(t.matches(e || "") || t.closest(e || "")));
                for (let t in tj() || (delete th.cart, delete th.checkout, delete th.unbranded_buy_without_form, delete th.unbranded_buy_with_form, delete th.checkout_custom), tq() || (delete th.add_to_cart, delete th.add_to_cart_custom), th) {
                    let o = th[t],
                        i = !!o && n(o);
                    if (i) {
                        let n = t1[t](e);
                        if (n) break
                    }
                }
            }(e))
        },
        t5 = () => {
            tj() && tH(), window.removeEventListener("click", t2, !0), window.addEventListener("click", t2, !0)
        },
        t3 = () => {
            if (!tj()) return;
            let e = new MutationObserver(t => {
                let n = tE();
                t.filter(e => "childList" === e.type).forEach(t => {
                    let o = Array.from(t.addedNodes);
                    o.filter(e => e.nodeType === Node.ELEMENT_NODE).forEach(t => {
                        0 !== t.querySelectorAll(n).length && (e5.get() ? (e.disconnect(), tz()) : tH())
                    })
                })
            });
            e.observe(document.body, {
                childList: !0,
                subtree: !0
            })
        },
        t9 = () => {
            let e = parseInt(sessionStorage.getItem(S) || "", 10);
            return !!e && Date.now() - e < 5e3
        },
        t7 = ({
            data: e
        }) => {
            if (!e.is_sso_enabled) {
                tL();
                return
            }
            eX.get() || tk(), e0.set((null == e ? void 0 : e.trigger_configs) || []);
            let t = td.get();
            t && t5(), !(eX.get() || e2.get() || e5.get()) && (!window.location.pathname.includes("account") || window.location.pathname.includes("rzp-account") || t || tx(), t || t5(), t3(), "true" !== sessionStorage.getItem(v) && (t9() || tQ()))
        },
        t8 = () => {
            var e;
            let t = document.referrer,
                n = new URLSearchParams(window.location.search).get("checkout_url"),
                o = !!n || null != (e = null == t ? void 0 : t.includes("/checkout")) && e;
            return o && !window.location.pathname.startsWith("/checkout") ? n || "/checkout" : window.location.pathname.includes("account") ? "/account" : null
        },
        t4 = () => {
            let e = t8();
            e ? window.location.href = e : window.location.reload()
        },
        t6 = window.location !== window.parent.location;
    t6 ? h.g.parent : h.g.opener;
    let ne = () => {
            if (window.postMessage({
                    source: "rzp_sso_iframe",
                    type: "rzp_sso_redirect"
                }, window.location.origin), e2.set(!1), tz(), tp()) {
                ta.set(!1);
                return
            }
            let e = ta.get();
            ta.set(!1), e instanceof HTMLElement && e.click()
        },
        nt = e => {
            if (td.get()) {
                eX.set(!1), e2.set(!1), t_.set(!1);
                return
            }
            if (e.data.is_cross_button_clicked && tW()) {
                e.data.is_success_screen && tz(), e2.set(!1), ta.set(!1), tl.set(!1);
                return
            }
            if (ta.get()) {
                ne();
                return
            }
            e.data.is_success_screen && e5.get() && t4(), e.data.is_cross_button_clicked && e2.set(!1)
        },
        nn = {
            COUPON_APPLIED_ERROR: "error:coupon_applied_failed",
            LOGOUT_HANDLER_ERROR: "error:logout_handler_failed",
            CUSTOMER_CREDENTIALS_GENERATED_ERROR: "error:customer_credentials_generated_failed"
        },
        no = e => {
            try {
                e.data.coupon_code && (B("discount_code"), V("discount_code", e.data.coupon_code, 7))
            } catch (e) {
                eU(e, nn.COUPON_APPLIED_ERROR)
            }
        },
        ni = "rzp_shopify_customer_id",
        na = {
            SESSION_INIT_ERROR: "error:session_init_failed",
            SET_EMAIL_IN_COOKIE_ERROR: "error:email_set_in_cookie_failed",
            NETWORK_REQUEST_ERROR_GEOLOCATION: "error:network_request_geolocation_failed",
            CRYPTO_API_UNAVAILABLE: "error:crypto_api_unavailable",
            CUSTOMER_LOCATION_OUTSIDE: "error:customer_location_outside_india"
        },
        nr = e => {
            try {
                B(O);
                let t = btoa(unescape(encodeURIComponent("12c2ab1ac01b9e36" + e)));
                V(O, t)
            } catch (e) {
                eU(e, na.SET_EMAIL_IN_COOKIE_ERROR)
            }
        },
        ns = () => {
            let e = document.createElement("div");
            e.classList.add("rzp-sso-backdrop"), document.body.appendChild(e), e.style.position = "fixed", e.style.top = "0", e.style.left = "0", e.style.width = "100%", e.style.height = "100%", e.style.backgroundColor = "rgba(0, 0, 0, 0.25)", e.style.zIndex = "1000", e.style.display = "flex", e.style.justifyContent = "center", e.style.alignItems = "center", e.style.transition = "opacity 0.3s ease-in-out", e.style.opacity = "1", e.style.pointerEvents = "none", e.style.backdropFilter = "blur(5px)";
            let t = document.createElement("div");
            t.classList.add("rzp-sso-loading-dots"), t.style.display = "flex", t.style.justifyContent = "center", t.style.alignItems = "center", t.style.fontSize = "64px", t.style.color = "#fff", t.style.fontWeight = "bold", t.innerHTML = `
    <span class="dot">.</span>
    <span class="dot">.</span>  
    <span class="dot">.</span>
  `, e.appendChild(t);
            let n = t.querySelectorAll(".dot");
            n.forEach((e, t) => {
                e.style.animation = `dot-blink 1.5s infinite ${.2*t}s`, e.style.fontSize = "64px", e.style.color = "#fff", e.style.fontWeight = "bold"
            });
            let o = document.createElement("style");
            o.textContent = `
    @keyframes dot-blink {
      0%, 20% {
        opacity: 1;
      }
      50% {
        opacity: 0.2;
      }
      80%, 100% {
        opacity: 1;
      }
    }
  `, document.head.appendChild(o)
        },
        nl = () => {
            let e = document.querySelector(".rzp-sso-backdrop");
            e && e.remove()
        };

    function nd(e) {
        if (e && "object" == typeof e && "status" in e && "data" in e) {
            let {
                error: t,
                message: n,
                ...o
            } = e.data;
            return {
                errorType: t || "UNKNOWN_ERROR",
                message: n || "Unknown error",
                status: e.status,
                diagnosticInfo: o
            }
        }
        return e instanceof Error ? {
            errorType: "UNKNOWN_ERROR",
            message: e.message,
            status: 0,
            diagnosticInfo: {
                stack: e.stack
            }
        } : {
            errorType: "UNKNOWN_ERROR",
            message: String(e),
            status: 0,
            diagnosticInfo: {}
        }
    }
    let nc = async e => {
            var t, n, o, i, a;
            let {
                email: r,
                password: s,
                shopify: l
            } = e.data;
            if (eW(ej), nr(r), (null == l ? void 0 : l.customer_id) && eK(ni, l.customer_id), td.get()) {
                if (eX.set(!1), localStorage.setItem(T, "true"), e5.set(!0), t_.get()) {
                    t_.set(!1), window.location.href = U;
                    return
                }
                null == (t = e3.get()) || t.loginSuccess();
                return
            }
            if (!t9()) try {
                if ((null == (n = e.data) ? void 0 : n.is_auto_login) || ns(), eX.set(!0), !s) throw Error("loginToShopify called without password");
                let t = await
                function(e, t, n = "", o = "") {
                    return n && o ? function(e, t, n) {
                        let o = new FormData;
                        return o.append("form_type", "activate_customer_password"), o.append("utf8", "✓"), o.append("customer[password]", n), o.append("customer[password_confirmation]", n), ei({
                            url: `/account/activate/${e}/${t}`,
                            method: "POST",
                            data: o,
                            name: "shopify_account_activation",
                            timeout: 6e4,
                            responseType: "text",
                            onTrack: eP
                        })
                    }(n, o, t) : function(e, t) {
                        let n = new FormData;
                        return n.append("form_type", "customer_login"), n.append("utf8", "✓"), n.append("customer[email]", e), n.append("customer[password]", t), ei({
                            url: "/account/login",
                            method: "POST",
                            data: n,
                            name: "shopify_customer_login",
                            timeout: 6e4,
                            credentials: "include",
                            responseType: "text",
                            onTrack: eP
                        })
                    }(e, t)
                }(r, s, null == l ? void 0 : l.customer_id, null == l ? void 0 : l.activation_token);
                if (!t || t.status < 200 || t.status >= 300) {
                    let e = (null == t ? void 0 : t.status) || 0,
                        n = (null == t ? void 0 : t.headers) || {},
                        o = (null == t ? void 0 : t.status) !== void 0 && t.status >= 200 && t.status < 300;
                    throw Error(`Login failed: isResponseSuccess: ${o} status: ${e}
Headers: ${JSON.stringify(n)}`)
                }
                let a = "string" == typeof t.data ? t.data : "",
                    d = L.test(a);
                if (d) throw Error(`Incorrect email or password.
Email: ${r}
status: ${t.status}
Headers: ${JSON.stringify(t.headers)}`);
                if (D.test(a)) throw Error(`Missing Recaptcha Token.
Email: ${r}
status: ${t.status}
Headers: ${JSON.stringify(t.headers)}`);
                null == (o = e3.get()) || o.loginSuccess();
                let c = Date.now().toString();
                sessionStorage.setItem(S, c), localStorage.setItem(T, "true"), e5.set(!0), eZ.set(r), V(N, new Date().toISOString(), 1800), nl(), (null == (i = e.data) ? void 0 : i.is_auto_login) && (tk(), t4())
            } catch (t) {
                let {
                    message: e
                } = nd(t);
                eU(Error(e), nn.CUSTOMER_CREDENTIALS_GENERATED_ERROR), null == (a = e3.get()) || a.loginFailed(e), sessionStorage.setItem(I, "true"), nl()
            } finally {
                eX.set(!1)
            }
        },
        nu = () => {
            eX.set(!1), tk()
        },
        n_ = () => {
            try {
                B(O), localStorage.removeItem(T), sessionStorage.removeItem(I), eW(ni), e5.set(!1)
            } catch (e) {
                eU(e, nn.LOGOUT_HANDLER_ERROR)
            }
        },
        np = e => {
            "international_customer" === e.data.type && sessionStorage.setItem(b, "true"), e.data.url && (window.location.href = `${e.data.url}`)
        },
        nm = e => {
            var t;
            let n = null == e ? void 0 : e.data;
            n && n.event && (null == (t = ez[n.event]) || t.call(ez, n))
        },
        ng = "rzp_customer_session_read_token",
        nh = ({
            data: e
        }) => {
            let t = null == e ? void 0 : e.token;
            t && eK(ng, t)
        },
        nE = () => !("true" === sessionStorage.getItem(I) || window.location.pathname.includes("account") && "true" === sessionStorage.getItem(v)) && !("true" === sessionStorage.getItem(v) || "true" === sessionStorage.getItem(w) || "true" === sessionStorage.getItem(A) || "true" === sessionStorage.getItem(C)),
        nf = "rzp_magic_utm",
        nv = /(?:^|&)utm_source=(razorpay|rzp)(?:&|$)/i;

    function ny(e, t) {
        try {
            let n = e.split("&").map(e => e.split("=")).reduce((e, t) => {
                try {
                    e[t[0]] = decodeURIComponent(t[1])
                } catch (n) {
                    e[t[0]] = t[1]
                }
                return e
            }, {});
            return t && "function" == typeof t && t("utm_parsing_finished", {
                keys: Object.keys(n)
            }), n
        } catch (e) {
            return t && "function" == typeof t && t("utm_parsing_failed", {
                error: null == e ? void 0 : e.message
            }), {}
        }
    }

    function nS(e, t) {
        if (!e) return "";
        try {
            return decodeURIComponent(e)
        } catch (e) {
            var n;
            return t.localStorageKey && eW(t.localStorageKey, t.track), null == (n = t.track) || n.call(t, "utm_value_decoding_failed", {
                source: t.source,
                error: e instanceof Error ? e.message : String(e)
            }), ""
        }
    }
    let nT = {
            SSO_SCRIPT_LOAD_ERROR: "error:sso_script_load_failed",
            SSO_SCRIPT_INJECT_ERROR: "error:sso_script_inject_failed",
            SSO_INSTANCE_CREATE_ERROR: "error:sso_instance_create_failed",
            SSO_INSTANCE_INIT_ERROR: "error:sso_instance_init_failed",
            SCRIPT_LOADING_TIMEOUT: "error:script_loading_timeout",
            ACCOUNT_PAGE_SCRIPT_LOAD_ERROR: "error:account_page_script_load_failed"
        },
        nC = () => {
            let e = ti.get();
            return ! function(e) {
                return Array.isArray(e) && e.length > 0
            }(e) ? {} : {
                partnership_data: function(e) {
                    let t = e.filter(e => e.enabled).reduce((e, t) => {
                        let n = function(e) {
                            let t = [
                                [localStorage, e.storageKeys.localStorage],
                                [sessionStorage, e.storageKeys.sessionStorage]
                            ];
                            return t.reduce((e, [t, n]) => (null == n || n.forEach(n => {
                                try {
                                    let o = t.getItem(n);
                                    o && (e[n] = o)
                                } catch (e) {
                                    ! function(e, t = "") {
                                        s.trackError(e, t)
                                    }(e, ex.GET_STORAGE_DATA_ERROR)
                                }
                            }), e), {})
                        }(t);
                        return Object.keys(n).length > 0 && (e[t.name] = n), e
                    }, {});
                    return Object.keys(t).length > 0 ? t : null
                }(e)
            }
        },
        nw = 0,
        nA = ["IND", "IN", "India"],
        nI = async () => {
            try {
                let e = await ei({
                    url: `${tt.get()}magic/locations/country-code-from-ip`,
                    method: "GET",
                    name: "geolocation_fetch",
                    onTrack: eP
                });
                if (e.status < 200 || e.status >= 300) throw Error(`Failed to fetch country code: ${e.status}`);
                return e.data.country_code || ""
            } catch (n) {
                let {
                    message: e
                } = nd(n);
                eU(Error(e), na.NETWORK_REQUEST_ERROR_GEOLOCATION);
                let t = x("_shopify_country") || window.sessionStorage.CountryCode || window.sessionStorage.Country || x("localization");
                return t
            }
        };
    async function nO() {
        let e = await nI();
        return nA.includes(e.trim()) ? "India" : e
    }
    let nN = async () => {
            if (!window.crypto || !window.crypto.subtle) return eU(Error("crypto apis are not supported"), na.CRYPTO_API_UNAVAILABLE), !1;
            let e = await nO();
            return "" === e || "India" === e || (eU(Error("customer geolocation is outside of india"), na.CUSTOMER_LOCATION_OUTSIDE), !1)
        },
        nb = ["/account", "/account/login"],
        nR = () => {
            if (td.get() && nb.includes(window.location.pathname)) {
                window.location.replace(U);
                return
            }
            "/account/login" === window.location.pathname && e5.get() && (window.location.href = "/account")
        },
        nk = null != (g = null == (m = document.currentScript) ? void 0 : m.src) ? g : "",
        nL = nk ? `${nk.slice(0,nk.lastIndexOf("/")+1)}account-page.js` : "",
        nD = !1;
    async function nU() {
        return !nD && ((nD = !0, await nN() && "test" !== eQ.get()) ? ((nR(), function() {
            let e = e6.get() || {};
            th = {
                add_to_cart_custom: `${e.addToCartBtn||""}`,
                checkout_custom: `${e.checkoutBtn||""}`,
                account_btn_custom: `${e.accountBtn||""}`,
                ...tg
            }
        }(), tP(), function(e = "none") {
            let t = tN(),
                n = Array.from(document.querySelectorAll(t.join(", "))).filter(e => e instanceof HTMLElement);
            0 === n.length && eP(tf.ACCOUNT_BUTTON_MISS, {
                url: window.location.href,
                selectors: t
            }), n.forEach(t => tR(t, e)), n.length > 0 && tC()
        }(td.get() ? tu.get() : "none"), function() {
            let e = document.querySelectorAll(tD());
            e.forEach(e => e.addEventListener("click", tU))
        }(), td.get() && window.location.pathname === U) ? (t5(), function() {
            if (!nL) {
                var e;
                eU(Error("account-page.js src could not be resolved from currentScript"), nT.ACCOUNT_PAGE_SCRIPT_LOAD_ERROR), null == (e = document.getElementById(P)) || e.remove(), tk();
                return
            }
            let t = document.createElement("script");
            t.src = nL, t.onload = () => {
                tk()
            }, t.onerror = () => {
                var e;
                eU(Error("account-page.js CDN load failed"), nT.ACCOUNT_PAGE_SCRIPT_LOAD_ERROR), null == (e = document.getElementById(P)) || e.remove(), tk()
            }, document.body.appendChild(t)
        }()) : function e(t) {
            try {
                let n = document.createElement("script");
                n.src = eJ.get(), n.id = "sso-js", n.onload = () => {
                    if (!window.RazorpaySSO) {
                        eU(Error("RazorpaySSO not available after script load"), nT.SSO_SCRIPT_LOAD_ERROR);
                        return
                    }(function() {
                        if (!window.RazorpaySSO) {
                            eU(Error("RazorpaySSO not available"), nT.SSO_INSTANCE_INIT_ERROR);
                            return
                        }
                        e3.get() && e3.set(null),
                            function() {
                                try {
                                    let e = x(N),
                                        t = ea();
                                    e9.set(t), t !== e && (tn.set(!0), V(N, t))
                                } catch (e) {
                                    eU(e, na.SESSION_INIT_ERROR)
                                }
                            }(),
                            function() {
                                try {
                                    var e;
                                    if ("function" != typeof window.RazorpaySSO) {
                                        eU(Error("RazorpaySSO constructor not available"), nT.SSO_INSTANCE_CREATE_ERROR);
                                        return
                                    }
                                    let t = eF(ng),
                                        n = eq(),
                                        o = new window.RazorpaySSO({ ...to.get(),
                                            ...t && {
                                                customer_session_read_token: t
                                            },
                                            account_state: n,
                                            email: eZ.get(),
                                            auto_fetch_credentials: nE(),
                                            is_logged_in: e5.get() && !n,
                                            hide_razorpay_login_branding: e7.get(),
                                            is_consent_pre_checked: !e8.get(),
                                            consent_message: tr.get(),
                                            key: eY.get(),
                                            is_magic_x: function() {
                                                var e, t;
                                                let n = null == (e = e1.get()) ? void 0 : e.overrideAppType;
                                                return "sopc" === n || "magic" !== n && !!(null == (t = document.getElementById("RazorpayMagicSopcConfig")) ? void 0 : t.textContent)
                                            }(),
                                            platform_data: {
                                                session_id: e9.get(),
                                                should_send_analytics: tn.get()
                                            },
                                            utm_parameters: function() {
                                                let e = function(e) {
                                                    var t, n, o, i, a, r, s;
                                                    let l = e && "function" == typeof e,
                                                        d = x(nf, e),
                                                        c = x("_shopify_sa_p", e),
                                                        u = d ? "" : function(e, t) {
                                                            try {
                                                                let n = eF(e, t);
                                                                if (!n) return "";
                                                                let o = JSON.parse(n);
                                                                if (!o || "string" != typeof o.value || "number" != typeof o.expiresAt || Date.now() >= o.expiresAt) return "";
                                                                return o.value
                                                            } catch (n) {
                                                                return null == t || t("utm_local_storage_read_failed", {
                                                                    key: e,
                                                                    error: n instanceof Error ? n.message : String(n)
                                                                }), ""
                                                            }
                                                        }(nf, e),
                                                        _ = u ? nS(u, {
                                                            source: "utm_local_storage",
                                                            track: e,
                                                            localStorageKey: nf
                                                        }) : "";
                                                    u && (_ ? nv.test(_) && (eW(nf, e), l && e("utm_poisoned_local_storage_cleared", {
                                                        existing_local_storage: u
                                                    }), u = "") : u = "");
                                                    let p = d || u;
                                                    if (l && e("evaluate_utm_params", {
                                                            rzpUTMCookieData: d,
                                                            shopifyUTMCookieData: c,
                                                            localStorage_fallback: !!u,
                                                            cookies_enabled: null == (s = window) ? void 0 : null == (r = s.navigator) ? void 0 : r.cookieEnabled
                                                        }), !p && !c && l) {
                                                        e("shopify_analytics_empty");
                                                        return
                                                    }
                                                    let m = {},
                                                        g = {},
                                                        h = {};
                                                    if (p) {
                                                        let t = d ? nS(p, {
                                                            source: "utm_cookie",
                                                            track: e
                                                        }) : _;
                                                        t && (m = ny(t, e))
                                                    }
                                                    if (c) {
                                                        let t = nS(c, {
                                                            source: "shopify_utm_cookie",
                                                            track: e
                                                        });
                                                        t && (g = ny(t, e))
                                                    }
                                                    return Object.keys(h = { ...g,
                                                        ...m
                                                    }).length && l && e("shopify_analytics_present", {
                                                        value: h,
                                                        shopify_cookie: c,
                                                        rzp_cookie: d,
                                                        localStorage_fallback: !!u,
                                                        cookieUsed: d && c ? "combined" : d ? "rzp" : u ? "localStorage" : "shopify"
                                                    }), {
                                                        utm_source: (null == (t = h) ? void 0 : t.utm_source) || null,
                                                        utm_medium: (null == (n = h) ? void 0 : n.utm_medium) || null,
                                                        utm_campaign: (null == (o = h) ? void 0 : o.utm_campaign) || null,
                                                        utm_term: (null == (i = h) ? void 0 : i.utm_term) || null,
                                                        utm_content: (null == (a = h) ? void 0 : a.utm_content) || null,
                                                        gclid: h.gclid || null,
                                                        fbclid: h.fbclid || null,
                                                        wbraid: h.wbraid || null,
                                                        gbraid: h.gbraid || null,
                                                        ref: h.ref || null
                                                    }
                                                }();
                                                return {
                                                    utm_source: null == e ? void 0 : e.utm_source,
                                                    utm_medium: null == e ? void 0 : e.utm_medium,
                                                    utm_campaign: null == e ? void 0 : e.utm_campaign
                                                }
                                            }(),
                                            show_international_login_link: e4.get(),
                                            login_reward: null == (e = e1.get()) ? void 0 : e.loginReward,
                                            ...nC(),
                                            analytics_data: {
                                                session_start_time: te.get(),
                                                merchant_url: window.location.hostname
                                            },
                                            account_page_enabled: td.get()
                                        });
                                    o.on("customer_credentials_generated", e => {
                                        nc(e).catch(() => {})
                                    }), o.on("app_mounted", t7), o.on("coupon_applied", no), o.on("app_closed", nt), o.on("auto_login", () => {
                                        eX.set(!0)
                                    }), o.on("mx_analytics", nm), o.on("customer-read-token", nh), o.on("login_error", nu), o.on("customer_logout", n_), o.on("redirect", np), e3.set(o)
                                } catch (e) {
                                    eU(e, nT.SSO_INSTANCE_CREATE_ERROR)
                                }
                            }()
                    })(), null == t || t()
                }, n.onerror = () => {
                    if (nw++, eU(Error(`Script load failed, attempt: ${nw}`), nT.SSO_SCRIPT_LOAD_ERROR), nw >= 5) {
                        eU(Error("Max script load attempts reached: 5"), nT.SCRIPT_LOADING_TIMEOUT);
                        return
                    }
                    window.setTimeout(() => {
                        e()
                    }, 500)
                }, document.body.appendChild(n)
            } catch (e) {
                eU(e, nT.SSO_SCRIPT_INJECT_ERROR)
            }
        }(), !0) : void 0)
    }! function() {
        try {
            var e, t, n, o, i, a, s;
            te.set(new Date);
            let l = function() {
                var e;
                let t = (null == (e = document.getElementById("RazorpayMagicSSOConfig")) ? void 0 : e.textContent) || "";
                try {
                    return JSON.parse(t)
                } catch (e) {
                    return {
                        email: "",
                        phone: "",
                        ssoConfig: {
                            status: "test",
                            key: "",
                            ssoSrc: "",
                            hideRazorpayLoginBranding: !1,
                            disablePrecheckedConsent: !1,
                            showInternationalLoginLink: !1,
                            customSelectors: {},
                            checkoutOptions: {},
                            enabledPartners: [],
                            consentMessage: ""
                        }
                    }
                }
            }();
            if (function(e = "", t = "") {
                    r = function(e) {
                        let {
                            lumberjackKey: t,
                            lumberjackUrl: n,
                            eventType: o,
                            eventVersion: i,
                            trackingKey: a,
                            origin: r,
                            lib: s,
                            context: l,
                            enableV3: d = !1
                        } = e, c = n || "https://lumberjack.razorpay.com/v1/track";
                        if (!t || !r || !s) throw Error("cannot initialize tracking context, missing fields");
                        let u = !!navigator.sendBeacon;

                        function _(n, _ = {}, p = !1, m = {}) {
                            if (eD(e)) return;
                            if (p || d) try {
                                eR.track(`${r}:${n}`, _, !1, r, m)
                            } catch (e) {}
                            let g = Object.keys(null != l ? l : {}).reduce((e, t) => {
                                    let n = (null != l ? l : {})[t];
                                    return e[t] = "function" == typeof n ? n() : n, e
                                }, {}),
                                h = {
                                    key: t,
                                    data: encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify({
                                        addons: [],
                                        context: {
                                            env: eL,
                                            hostname: window.location.hostname,
                                            url: location.href,
                                            lib: s,
                                            build: 30957745597,
                                            sha: "5cb73d8c0ca16fc25047f277155c6e8288e4f8e6",
                                            key: a,
                                            ...g
                                        },
                                        mode: "live",
                                        events: [{
                                            event: `${r}:${n}`,
                                            timestamp: Date.now(),
                                            ...o ? {
                                                event_type: o
                                            } : {},
                                            ...i ? {
                                                event_version: i
                                            } : {},
                                            properties: { ..._
                                            }
                                        }]
                                    })))))
                                };
                            try {
                                let e = navigator.sendBeacon.bind(navigator);
                                window.setTimeout(() => {
                                    let t = !1;
                                    if (u) try {
                                        t = e(c, JSON.stringify(h))
                                    } catch (e) {
                                        t = !1
                                    }
                                    t || window.fetch(c, {
                                        body: JSON.stringify(h),
                                        method: "post",
                                        keepalive: !0
                                    }).catch(() => {})
                                })
                            } catch (e) {}
                        }
                        return {
                            track: _,
                            trackError: function(e, t = "") {
                                e instanceof Error ? _(t || "error", {
                                    message: e.message,
                                    stack: e.stack
                                }) : _(t || "custom_error", null != e ? e : {})
                            },
                            trackV3Only: function(t, n = {}, o = !1, i = {}) {
                                if (!eD(e) && r) try {
                                    eR.track(`${r}:${t}`, n, o, r, i)
                                } catch (e) {}
                            }
                        }
                    }({
                        lumberjackKey: "ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk",
                        trackingKey: e,
                        origin: "magic_sso",
                        lib: "magic-plugins",
                        context: {
                            magic_plugin_id: () => q,
                            checkoutSrc: t === R ? "production" : t,
                            shopifySessionToken: ea(),
                            sso_id: () => q,
                            unified_session_id: () => Y()
                        },
                        enableV3: !1
                    })
                }(String(null == l ? void 0 : null == (e = l.ssoConfig) ? void 0 : e.key) || String(null == l ? void 0 : null == (t = l.ssoOptions) ? void 0 : t.key), String(null == l ? void 0 : null == (n = l.ssoConfig) ? void 0 : n.ssoSrc) || String(null == l ? void 0 : null == (o = l.ssoOptions) ? void 0 : o.ssoSrc)), !(null == l ? void 0 : l.ssoConfig)) {
                eU(Error("No SSO config found"), eH.NO_SSO_CONFIG_FOUND);
                return
            }
            let d = l.ssoConfig,
                c = !!(null == d ? void 0 : d.accountPageEnabled);
            l.email ? eZ.set(l.email) : c || localStorage.removeItem(T), "true" === localStorage.getItem(T) && (l.email || c) && !e$() && e5.set(!0), (null == l ? void 0 : l.ssoOptions) && eU(null == l ? void 0 : l.ssoOptions, eH.SSO_OPTIONS_PRESENT), eY.set((null == d ? void 0 : d.key) || (null == l ? void 0 : null == (i = l.ssoOptions) ? void 0 : i.key) || ""), eJ.set((null == d ? void 0 : d.ssoSrc) || R), e1.set(d || {}), e6.set((null == d ? void 0 : d.customSelectors) || {}), eQ.set((null == d ? void 0 : d.status) || "test"), e7.set(!!(null == d ? void 0 : d.hideRazorpayLoginBranding)), e8.set(!!(null == d ? void 0 : d.disablePrecheckedConsent)), tr.set((null == d ? void 0 : d.consentMessage) || ""), ts.set(!!(null == d ? void 0 : d.isThirdPartyCheckoutIntegration)), to.set((null == d ? void 0 : d.checkoutOptions) || {}), e4.set(!!(null == d ? void 0 : d.showInternationalLoginLink)), td.set(c), tc.set((null == d ? void 0 : d.accountPageFrame) || ""), tu.set(null != (s = null == d ? void 0 : d.accountIcon) ? s : "none"),
                function(e) {
                    var t, n;
                    let o = {
                        webengage: {
                            enabled: () => {
                                var t, n;
                                return !!((null == (n = e.mxAnalyticsConfig) ? void 0 : null == (t = n.webengage) ? void 0 : t.enabled) && window.webengage)
                            },
                            identifyType: null == (n = e.mxAnalyticsConfig) ? void 0 : null == (t = n.webengage) ? void 0 : t.identifyType
                        }
                    };
                    eM = { ...eM,
                        ...o
                    }
                }(l.ssoConfig);
            let u = (null == (a = l.ssoConfig) ? void 0 : a.enabledPartners) || [];
            if (u.length > 0) {
                let e = u.map(e => {
                    let t = eO[e] || null;
                    return t ? { ...t,
                        enabled: !0
                    } : null
                }).filter(Boolean);
                ti.set(e)
            }! function(e = {}) {
                let t = sessionStorage.getItem("ssoLastTracked"),
                    n = Date.now(),
                    o = !t || n - parseInt(t, 10) > 6e5;
                o && (sessionStorage.setItem("ssoLastTracked", n.toString()), eP("sso-config", {
                    data: e
                }, !0))
            }(l)
        } catch (e) {
            eQ.set("test"), eU(e, eH.GLOBAL_CONFIG_INIT_ERROR)
        }
    }(), nU().catch(e => {
        eU(e, nT.SSO_INSTANCE_INIT_ERROR)
    });
    let nP = e => !!ts.get() && "function" == typeof e && (tl.set({
        fn: e
    }), tJ());
    for (var nM in window.__init_magic_sso__ = nU, E) this[nM] = E[nM];
    E.__esModule && Object.defineProperty(this, "__esModule", {
        value: !0
    })
})();