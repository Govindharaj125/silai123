async function essentialFetchGeolocation() {
    let clientCountry;
    try {
        const geolocationUrl = "https://essential-icon-badge.uk/api/geolocation";
        const response = await fetch(geolocationUrl);

        if (response.headers.has("country")) {
            clientCountry = response.headers.get("country");
            console.log("Client country:", clientCountry);
        }
    } catch (error) {
        console.error("Error fetching geolocation:", error);
    }
    return clientCountry;
}

function hasEnded(config) {
    if (!config || !config.content ? .endDate) {
        return false;
    }

    const currentDate = new Date().getTime();
    const endDate = new Date(config.content.endDate).getTime();
    return currentDate >= endDate;
}

function isScheduled(config) {
    if (!config || !config.content ? .startDate) {
        return false;
    }

    const currentDate = new Date().getTime();
    const startDate = new Date(config.content.startDate).getTime();
    return currentDate < startDate;
}

function isBannerActive(config) {
    if (!config) {
        return true; // If no config, show banner (backward compatibility)
    }
    return !isScheduled(config) && !hasEnded(config);
}

function displayCodeSnippets(snippets, bannerId, banner) {
    if (snippets && snippets.length > 0) {
        snippets.forEach((codeSnippet) => {
            if (
                codeSnippet.id === bannerId &&
                !codeSnippet.querySelector("[data-banner]")
            ) {
                banner.style.display = "flex";
                //removes banner from the orginal position
                codeSnippet.append(banner);
            }
        });
    }
}

function sideCartNode(position = "top") {
    let bannersNode;
    const root = window.Shopify ? .routes ? .root || "/";
    const cartForm = document.querySelector(`form[action="${root}cart"]`);
    // cart notification - popup notification
    const knownSideCarts = document.querySelectorAll(
        'cart-notification .cart-notification__links, #essential-cart-drawer-portal, [data-essential-cart-element="cart-drawer-item-list-wrapper"]'
    );
    const knownSideCartsBottomPositionNodes = document.querySelectorAll(
        'cart-notification .cart-notification__links, #essential-cart-drawer-portal, [data-essential-cart-element="checkout-button-wrapper"]'
    );
    const bottomPositionNodes = document.querySelectorAll(
        ".cart-drawer.drawer .cart-drawer__footer, .ajaxcart-form .drawer__footer, .cart-drawer .drawer__footer, cart-items-component .cart-drawer__summary"
    );

    // Debutify theme: {"top: '.drawer.ajaxcart--is-loading .flex'"}
    // Prestige: { bottom:".cart-drawer.drawer .cart-drawer__footer"}
    const sideCartNodes = document.querySelectorAll(
        ".side-cart, .drawer.ajaxcart--is-loading .flex, cart-items-component .cart-items__wrapper"
    );

    const sideCartTopSnippet = document.querySelector(
        ".essential-banners-block-side-cart-top"
    );
    const sideCartBottomSnippet = document.querySelector(
        ".essential-banners-block-side-cart-bottom"
    );

    if (position === "top" && sideCartTopSnippet) {
        return sideCartTopSnippet;
    }

    if (position === "bottom" && sideCartBottomSnippet) {
        return sideCartBottomSnippet;
    }

    if (position === "bottom") {
        if (knownSideCartsBottomPositionNodes.length > 0) {
            bannersNode =
                knownSideCartsBottomPositionNodes[
                    knownSideCartsBottomPositionNodes.length - 1
                ];
        } else {
            if (
                bottomPositionNodes.length &&
                bottomPositionNodes[bottomPositionNodes.length - 1]
            ) {
                bannersNode = bottomPositionNodes[bottomPositionNodes.length - 1];
            }
        }
        return bannersNode;
    }

    if (knownSideCarts.length > 0) {
        bannersNode = knownSideCarts[knownSideCarts.length - 1];
    } else if (cartForm) {
        bannersNode = cartForm;
    } else if (sideCartNodes.length > 0) {
        bannersNode = sideCartNodes[sideCartNodes.length - 1];
    }
    return bannersNode;
}

const essentialAnalyticsBaseUrl =
    "https://essential-apps-analytics.herokuapp.com";

function essentialBannerCtaType(config) {
    const selected = config ? .content ? .selectedCta;
    if (Array.isArray(selected)) {
        return selected[0] || "";
    }
    return selected || "";
}

function essentialLogBannerEvent(bannerEl, eventName, ctaTypeOverride) {
    if (!bannerEl || !eventName) {
        return;
    }

    if (Shopify ? .previewMode === true || Shopify ? .designMode === true) {
        return;
    }

    const shop = window.Shopify ? .shop;
    const id = bannerEl.getAttribute("data-id");
    if (!shop || !id) {
        return;
    }

    const config = (window.essentialBannersConfigs || []).find(
        (banner) => banner.id === id
    );
    const payload = new URLSearchParams();
    payload.set("event", eventName);
    payload.set("shop", shop);
    payload.set("id", id);
    payload.set("name", config ? .content ? .name || "");
    payload.set(
        "type",
        bannerEl.getAttribute("data-type") || config ? .placement ? .type || ""
    );
    payload.set(
        "ctaType",
        ctaTypeOverride || essentialBannerCtaType(config)
    );

    const analyticsBaseUrl =
        window.essentialAnalyticsBaseUrl || essentialAnalyticsBaseUrl;
    navigator.sendBeacon(`${analyticsBaseUrl}/banner_event`, payload);
}

const essentialSideCartViewedBannerIds = new Set();

function essentialBannerIsEffectivelyVisible(bannerEl) {
    if (!bannerEl ? .isConnected) {
        return false;
    }

    const rect = bannerEl.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) {
        return false;
    }

    let current = bannerEl;
    while (current && current !== document.documentElement) {
        const style = window.getComputedStyle(current);

        if (
            style.display === "none" ||
            style.visibility === "hidden" ||
            style.visibility === "collapse" ||
            parseFloat(style.opacity) === 0
        ) {
            return false;
        }

        if (current.tagName === "DIALOG" && !current.open) {
            return false;
        }

        current = current.parentElement;
    }

    return true;
}

function essentialBannerTryLogSideCartView(bannerEl) {
    const bannerId = bannerEl.getAttribute("data-id");
    if (!bannerId || essentialSideCartViewedBannerIds.has(bannerId)) {
        return false;
    }

    if (!essentialBannerIsEffectivelyVisible(bannerEl)) {
        return false;
    }

    essentialSideCartViewedBannerIds.add(bannerId);
    essentialLogBannerEvent(bannerEl, "view");
    return true;
}

function essentialBannerObserveSideCartView(bannerEl) {
    const bannerId = bannerEl.getAttribute("data-id");
    if (bannerId && essentialSideCartViewedBannerIds.has(bannerId)) {
        return;
    }

    if (typeof IntersectionObserver !== "function") {
        return;
    }

    const viewObserver = new IntersectionObserver(
        (entries, observer) => {
            if (!bannerEl.isConnected) {
                observer.disconnect();
                return;
            }

            for (const entry of entries) {
                if (!entry.isIntersecting) {
                    continue;
                }

                if (essentialBannerTryLogSideCartView(bannerEl)) {
                    observer.disconnect();
                    break;
                }
            }
        }, {
            threshold: 0.1
        }
    );

    viewObserver.observe(bannerEl);
}

function essentialVisibleBanners() {
    const banners = document.querySelectorAll("[data-banner]");
    return [...banners].filter((banner) => {
        if (banner.classList.contains("essential-side-cart-banner")) {
            return false;
        }

        if (
            banner.style.display.includes("flex") &&
            banner.parentNode.hasAttribute("data-banners")
        ) {
            return banner.parentNode.style.display.includes("block");
        }

        return banner.style.display.includes("flex");
    });
}

function essentialBannerCountViews() {
    essentialVisibleBanners().forEach((banner) => {
        const bannerId = banner.getAttribute("data-id");
        if (bannerId && essentialSideCartViewedBannerIds.has(bannerId)) {
            return;
        }
        essentialLogBannerEvent(banner, "view");
        if (bannerId) {
            essentialSideCartViewedBannerIds.add(bannerId);
        }
    });
}

function essentialInitBannerEventClicks() {
    if (window.essentialBannerClicksBound) {
        return;
    }
    window.essentialBannerClicksBound = true;

    document.addEventListener(
        "click",
        (event) => {
            const cta = event.target.closest(
                "#cta-button, #cta-whole, .cta-button, .cta-whole, .icon-block[data-cta]"
            );
            if (!cta) {
                return;
            }

            const banner = cta.closest("[data-banner]");
            if (!banner) {
                return;
            }

            if (
                banner.classList.contains("essential-side-cart-banner") &&
                !essentialBannerIsEffectivelyVisible(banner)
            ) {
                return;
            }

            essentialLogBannerEvent(
                banner,
                "click_cta_button",
                cta.getAttribute("data-cta") || undefined
            );
        },
        true
    );
}

async function essentialInitBanners() {
    const essentialRoot = window.Shopify ? .routes ? .root || "/";
    const currentProductId = window.essentialCurrentProductId;
    const addToCartElements = document.querySelectorAll(
        `form[action*="${essentialRoot}cart/add"]`
    );
    const codeSnippetBlock = document.querySelector(
        ".essential-banners-default-placement"
    );
    const codeSnippets = document.querySelectorAll(".essential-banners-block");

    let isProductPage;
    if (Shopify.shop === "banzaihobby.myshopify.com") {
        isProductPage = Boolean(currentProductId);
    } else {
        isProductPage = window.location.href.includes("/products/");
    }

    const bannersEmbed = document.querySelector("[data-banners]");
    const bannersAppBlocks = document.querySelector("[data-app-block-banners]");
    const displayAllBannersAppBlock = document.querySelector(
        "[data-app-block-all-banners]"
    );
    const banners = document.querySelectorAll("[data-banner]");
    const isCountriesSelected = window.essentialBannersConfigs.some(
        (banner) => banner.placement.locationType === "on-countries"
    );
    const hasCartBanners = window.essentialBannersConfigs.find(
        (banner) => banner.placement.type === "cart-page"
    );
    const isCartPage =
        window.location && window.location.pathname.includes("/cart");
    const config = essentialBannersConfigs[essentialBannersConfigs.length - 1];
    const showAllBannersFeatureFlag =
        config ? .created_at && new Date(config.created_at).getTime() > 1715584657000;

    if (isCountriesSelected) {
        let clientCountry;

        try {
            clientCountry = await essentialFetchGeolocation();
        } catch (error) {
            console.error("Error fetching geolocation:", error);
        }

        if (clientCountry) {
            const isClientCountryMatch = window.essentialBannersConfigs.some(
                (banner) =>
                banner ? .placement ? .showInCountries &&
                banner.placement.showInCountries.includes(clientCountry)
            );

            essentialInitCartBanners(clientCountry, isClientCountryMatch);

            // Filter banners based on geolocation settings
            banners.forEach((banner) => {
                const bannerId = banner.getAttribute("data-id");

                // Scheduling check: Skip banner if it's scheduled for future or has ended
                const bannerConfig = window.essentialBannersConfigs.find(
                    (banner) => banner.id === bannerId
                );
                if (!isBannerActive(bannerConfig)) {
                    return;
                }
                const singleBannerId = banner.parentNode.getAttribute(
                    "data-app-block-single-banner"
                );
                const locationType = bannerConfig ? .placement.locationType;
                const placementType = bannerConfig ? .placement.placementType[0];
                const cartPlacement = bannerConfig ? .placement.cartPlacement;
                const type = bannerConfig ? .placement ? .type;
                const alreadyAdded = document.querySelector(
                    `[data-app-block-single-banner="${bannerId}"]`
                );
                const isInShowAllBannersBlock = banner.parentNode.hasAttribute(
                    "data-app-block-all-banners"
                );

                if (!isClientCountryMatch && !locationType) {
                    if (codeSnippets.length > 0) {
                        displayCodeSnippets(codeSnippets, bannerId, banner);
                    } else if (
                        (placementType !== "custom" || singleBannerId === bannerId) &&
                        (!alreadyAdded || singleBannerId === bannerId) &&
                        type !== "cart-page"
                    ) {
                        banner.style.display = "flex";
                    }

                    if (
                        showAllBannersFeatureFlag &&
                        (placementType !== "custom" || singleBannerId === bannerId) &&
                        (!alreadyAdded || singleBannerId === bannerId) &&
                        type !== "cart-page"
                    ) {
                        banner.style.display = "flex";
                    }

                    if (
                        hasCartBanners &&
                        isCartPage &&
                        isInShowAllBannersBlock &&
                        cartPlacement !== "custom"
                    ) {
                        banner.style.display = type === "cart-page" ? "flex" : "none";

                        if (alreadyAdded) {
                            banner.style.display = "none";
                        }
                    }

                    if (new Date(bannerConfig.created_at).getTime() > 1713347440000) {
                        if (singleBannerId === bannerId) {
                            banner.style.display = "flex";
                        }
                    }
                } else if (isClientCountryMatch && locationType === "on-countries") {
                    const countries = bannerConfig.placement.showInCountries;
                    const isCountryMatch = countries.includes(clientCountry);

                    if (isCountryMatch) {
                        if (codeSnippets.length > 0) {
                            displayCodeSnippets(codeSnippets, bannerId, banner);
                        } else if (
                            (placementType !== "custom" || singleBannerId === bannerId) &&
                            (!alreadyAdded || singleBannerId === bannerId) &&
                            type !== "cart-page"
                        ) {
                            banner.style.display = "flex";
                        }

                        if (
                            showAllBannersFeatureFlag &&
                            (placementType !== "custom" || singleBannerId === bannerId) &&
                            (!alreadyAdded || singleBannerId === bannerId) &&
                            type !== "cart-page"
                        ) {
                            banner.style.display = "flex";
                        }

                        if (
                            hasCartBanners &&
                            isCartPage &&
                            isInShowAllBannersBlock &&
                            cartPlacement !== "custom"
                        ) {
                            banner.style.display = type === "cart-page" ? "flex" : "none";

                            if (alreadyAdded) {
                                banner.style.display = "none";
                            }
                        }

                        if (new Date(bannerConfig.created_at).getTime() > 1713347440000) {
                            if (singleBannerId === bannerId) {
                                banner.style.display = "flex";
                            }
                        }
                    }
                }
            });
        }
    } else {
        // Show all banners if all banners use "All world"
        banners.forEach((banner) => {
            const bannerId = banner.getAttribute("data-id");
            const singleBannerId = banner.parentNode.getAttribute(
                "data-app-block-single-banner"
            );
            const isInShowAllBannersBlock = banner.parentNode.hasAttribute(
                "data-app-block-all-banners"
            );
            const alreadyAdded = document.querySelector(
                `[data-app-block-single-banner="${bannerId}"]`
            );

            const bannerConfig = window.essentialBannersConfigs.find(
                (banner) => banner.id === bannerId
            );
            const placementType = bannerConfig ? .placement.placementType[0];
            const cartPlacement = bannerConfig ? .placement.cartPlacement;
            const type = bannerConfig ? .placement ? .type;

            // Scheduling check: Skip banner if it's scheduled for future or has ended
            if (!isBannerActive(bannerConfig)) {
                return;
            }

            if (codeSnippets.length > 0) {
                displayCodeSnippets(codeSnippets, bannerId, banner);
            } else if (
                (placementType !== "custom" || singleBannerId === bannerId) &&
                (!alreadyAdded || singleBannerId === bannerId) &&
                type !== "cart-page"
            ) {
                banner.style.display = "flex";
            }

            if (
                showAllBannersFeatureFlag &&
                (!alreadyAdded || singleBannerId === bannerId) &&
                (placementType !== "custom" || singleBannerId === bannerId) &&
                type !== "cart-page"
            ) {
                banner.style.display = "flex";
            }

            if (
                hasCartBanners &&
                isCartPage &&
                isInShowAllBannersBlock &&
                cartPlacement !== "custom"
            ) {
                banner.style.display = type === "cart-page" ? "flex" : "none";

                if (alreadyAdded) {
                    banner.style.display = "none";
                }
            }

            if (
                Shopify.shop === "7a2610-2.myshopify.com" ||
                new Date(bannerConfig ? .created_at).getTime() > 1713347440000
            ) {
                if (singleBannerId === bannerId) {
                    banner.style.display = "flex";
                }
            }
        });
        essentialInitCartBanners();
    }

    setTimeout(() => {
        essentialBannerCountViews();
    }, 200);

    if (
        (!bannersAppBlocks || showAllBannersFeatureFlag) &&
        !displayAllBannersAppBlock &&
        addToCartElements &&
        addToCartElements.length > 0 &&
        isProductPage &&
        !codeSnippetBlock &&
        (!codeSnippets.length || showAllBannersFeatureFlag)
    ) {
        addToCartElements[addToCartElements.length - 1].insertAdjacentElement(
            "afterend",
            bannersEmbed
        );
        bannersEmbed.style.display = "block";
    }

    if (
        (!bannersAppBlocks || showAllBannersFeatureFlag) &&
        !displayAllBannersAppBlock &&
        isProductPage &&
        !codeSnippetBlock &&
        (!codeSnippets.length || showAllBannersFeatureFlag) &&
        Shopify ? .theme ? .name &&
        Shopify.theme.name.toLowerCase().includes("debutify")
    ) {
        if (
            config ? .created_at &&
            new Date(config.created_at).getTime() > 1707133374000
        ) {
            let placementNode;
            const debutifySingleForm = document.querySelector(
                "form.product-single__form"
            );
            const debutify84AddToCart = document.querySelector(
                'product-form form[action="/cart/add"]'
            );
            if (debutifySingleForm) {
                placementNode = debutifySingleForm;
            } else if (debutify84AddToCart) {
                placementNode = debutify84AddToCart;
            }

            if (placementNode) {
                placementNode.insertAdjacentElement("afterend", bannersEmbed);
                bannersEmbed.style.display = "block";
            }
        }
    }

    if (codeSnippetBlock) {
        bannersEmbed.style.display = "block";
        codeSnippetBlock.append(bannersEmbed);
    }
}

function essentialInitCartBanners(clientCountry, isClientCountryMatch) {
    const isCartPage =
        window.location && window.location.pathname.includes("/cart");
    const cartBannersSelector = '[data-banners] [data-type="cart-page"]';

    const getBannersNode = (banner) => {
        const id = banner.getAttribute("data-id");
        const bannerConfig = window.essentialBannersConfigs.find(
            (banner) => banner.id === id
        );
        const position = bannerConfig ? .placement ? .cartPlacement;
        const bannersNode = sideCartNode(position);

        return {
            position,
            bannersNode,
        };
    };

    const showBannerOnGeolocation = (banner) => {
        const locationType = banner ? .placement ? .locationType;

        if (!clientCountry) {
            return true;
        }

        if (!isClientCountryMatch && !locationType) {
            return true;
        }

        if (isClientCountryMatch && locationType === "on-countries") {
            const countries = banner.placement.showInCountries;
            const isCountryMatch = countries.includes(clientCountry);

            return isCountryMatch;
        }

        return false;
    };

    const addBannerToSideCartNode = (cartBanner) => {
        const {
            position,
            bannersNode
        } = getBannersNode(cartBanner);
        const bannerId = cartBanner.getAttribute("data-id");
        const bannerConfig = window.essentialBannersConfigs.find(
            (banner) => banner.id === bannerId
        );
        let alreadyAdded = document.querySelector(
            `.essential-side-cart-banner[data-id="${bannerId}"]`
        );

        if (
            alreadyAdded ? .parentElement ? .matches("#essential-cart-drawer-portal") &&
            bannersNode &&
            !bannersNode.matches("#essential-cart-drawer-portal")
        ) {
            window._essentialMovingBanner = true;
            alreadyAdded.remove();
            window._essentialMovingBanner = false;
            alreadyAdded = null;
        }

        if (
            alreadyAdded ||
            !bannersNode ||
            !showBannerOnGeolocation(bannerConfig) ||
            !isBannerActive(bannerConfig) // Scheduling check: Skip banner if it's scheduled or has ended
        ) {
            return;
        }

        let addedBanner;
        if (position === "top") {
            addedBanner = bannersNode.insertAdjacentElement(
                "afterbegin",
                cartBanner.cloneNode(true)
            );
        }

        if (position === "bottom") {
            addedBanner = cartBanner.cloneNode(true);
            if (bannersNode.querySelector('div[data-type="cart-page"]')) {
                bannersNode
                    .querySelector('div[data-type="cart-page"]')
                    .insertAdjacentElement("beforebegin", addedBanner);
            } else {
                bannersNode.append(addedBanner);
            }
        }

        if (!addedBanner) {
            return;
        }

        if (!addedBanner.closest("dialog.cart-drawer--empty") &&
            !addedBanner ? .parentElement ? .matches("#essential-cart-drawer-portal")
        ) {
            addedBanner.style.display = "flex";
        }

        addedBanner.classList.add("essential-side-cart-banner");
        essentialBannerObserveSideCartView(addedBanner);
    };

    if (sideCartNode() && !isCartPage) {
        const cartBanners = document.querySelectorAll(cartBannersSelector);

        if (!cartBanners.length) {
            return;
        }

        for (let i = cartBanners.length - 1; i >= 0; i--) {
            addBannerToSideCartNode(cartBanners[i]);
        }

        const observer = new MutationObserver(() => {
            if (window._essentialMovingBanner) {
                return;
            }
            const cartBanners = document.querySelectorAll(cartBannersSelector);

            for (let i = cartBanners.length - 1; i >= 0; i--) {
                addBannerToSideCartNode(cartBanners[i]);
            }
        });

        if (sideCartNode()) {
            let current = sideCartNode();
            let count = 0;

            while (
                current.parentNode &&
                current.parentNode.tagName !== "BODY" &&
                current.parentNode.tagName !== "HTML" &&
                count < 3
            ) {
                current = current.parentNode;
                count++;
            }
            let observerNode = current;

            // Concept: the drawer re-renders the whole #MiniCart-{sectionId} wrapper,
            // which detaches an observer node placed inside it
            const conceptCartDrawer = observerNode
                .closest('[id^="MiniCart-"]') ?
                .closest("cart-drawer");
            if (conceptCartDrawer) {
                observerNode = conceptCartDrawer;
            }

            if (
                Shopify ? .theme ? .name &&
                Shopify.theme.name.toLowerCase().includes("debutify") &&
                document.querySelector("cart-drawer")
            ) {
                debutifyCardDrawerNode = document.querySelector("cart-drawer");
                if (debutifyCardDrawerNode) {
                    observerNode = debutifyCardDrawerNode;
                }
            }

            // Horizon only tags the drawer element with .cart-drawer in some
            // versions, so fall back to the plain custom element instead of
            // leaving observerNode null
            const cartDrawerComponent = document.querySelector(
                    "cart-drawer-component .cart-items-component"
                ) ?
                document.querySelector("cart-drawer-component.cart-drawer") ||
                document.querySelector("cart-drawer-component") :
                null;
            if (cartDrawerComponent) {
                observerNode = cartDrawerComponent;
            }

            const cartDrawerPortal = document.querySelector(
                "#essential-cart-drawer-portal"
            );
            if (cartDrawerPortal) {
                observerNode = cartDrawerPortal;
            }

            if (observerNode) {
                observer.observe(observerNode, {
                    childList: true,
                    subtree: true,
                });
            }
        }
    }

    // Themes like Impact render the drawer contents - and any placement snippet
    // inside them - only while the cart is not empty, so with an empty cart there
    // is no placement node when this runs: the block above bails out, no observer
    // is attached and the banner shows up only after a page refresh. Watch the
    // drawer in that case, and add the banners once it re-renders with its first
    // line item. Placements that resolve outside the watched drawer are left to
    // the block above, so nothing changes for themes that already work.
    if (!sideCartNode() && !isCartPage) {
        const cartDrawer = document.querySelector(
            "cart-drawer, cart-drawer-component, cart-notification, .cart-drawer"
        );
        const cartBanners = document.querySelectorAll(cartBannersSelector);
        // Placement nodes that are already in the DOM belong to the block above,
        // so only act on the ones that show up later, when the drawer renders its
        // contents - an empty drawer keeping e.g. its footer stays untouched
        const initialPlacementNodes = [sideCartNode("top"), sideCartNode("bottom")];

        if (cartDrawer && cartBanners.length) {
            const cartDrawerWrapper = cartDrawer.parentElement;
            // The wrapper survives themes that replace the drawer element itself,
            // but never widen the watched node to the whole document
            const cartDrawerObserverNode =
                cartDrawerWrapper &&
                cartDrawerWrapper !== document.body &&
                cartDrawerWrapper !== document.documentElement ?
                cartDrawerWrapper :
                cartDrawer;

            const cartDrawerObserver = new MutationObserver(() => {
                if (window._essentialMovingBanner) {
                    return;
                }

                const renderedCartBanners =
                    document.querySelectorAll(cartBannersSelector);

                for (let i = renderedCartBanners.length - 1; i >= 0; i--) {
                    const {
                        bannersNode
                    } = getBannersNode(renderedCartBanners[i]);

                    if (
                        bannersNode &&
                        !initialPlacementNodes.includes(bannersNode) &&
                        cartDrawerObserverNode.contains(bannersNode)
                    ) {
                        addBannerToSideCartNode(renderedCartBanners[i]);
                    }
                }
            });

            cartDrawerObserver.observe(cartDrawerObserverNode, {
                childList: true,
                subtree: true,
            });
        }
    }

    if (isCartPage) {
        const root = window.Shopify ? .routes ? .root || "/";
        const cartFormAll = document.querySelectorAll(`form[action="${root}cart"]`);
        const horizonTheme = document.querySelector("cart-items-component");
        let cartPageTopPlacementNode = cartFormAll[cartFormAll.length - 1];

        const hasShowAllBannersBlock = document.querySelector(
            "[data-app-block-all-banners]"
        );

        let cartPageBottomPlacementNode = document.getElementById("checkout");

        if (!cartPageBottomPlacementNode) {
            cartPageBottomPlacementNode = document.querySelector("[name='checkout']");
        }

        const cutoffDate = new Date("2026-01-22").getTime();
        const allBannersCreatedAfterCutoff =
            window.essentialBannersConfigs ? .length > 0 &&
            window.essentialBannersConfigs.every(
                (banner) =>
                banner ? .created_at &&
                new Date(banner.created_at).getTime() > cutoffDate
            );
        const horizonThemeCartPlacementFeatureFlag =
            horizonTheme && allBannersCreatedAfterCutoff;

        if (
            cartPageTopPlacementNode &&
            cartPageTopPlacementNode.parentNode &&
            !hasShowAllBannersBlock
        ) {
            const cartBanners = document.querySelectorAll(cartBannersSelector);

            for (let i = cartBanners.length - 1; i >= 0; i--) {
                const id = cartBanners[i].getAttribute("data-id");
                const alreadyAdded = document.querySelector(
                    `[data-app-block-single-banner="${id}"]`
                );
                const alreadyAddedToCartPage = document.querySelector(
                    `.essential-cart-page-banner[data-id="${id}"]`
                );
                const bannerConfig = window.essentialBannersConfigs.find(
                    (banner) => banner.id === id
                );
                const position = bannerConfig ? .placement ? .cartPlacement;

                if (alreadyAdded || alreadyAddedToCartPage) {
                    continue;
                }
                if (!showBannerOnGeolocation(bannerConfig)) {
                    continue;
                }
                // Scheduling check: Skip banner if it's scheduled or has ended
                if (!isBannerActive(bannerConfig)) {
                    continue;
                }

                if (horizonThemeCartPlacementFeatureFlag) {
                    cartPageTopPlacementNode = cartFormAll ? .[0];
                }

                let addedBanner;
                if (position === "top") {
                    addedBanner =
                        cartPageTopPlacementNode.parentNode.insertAdjacentElement(
                            "afterbegin",
                            cartBanners[i].cloneNode(true)
                        );
                }

                if (position === "bottom" && cartPageBottomPlacementNode) {
                    if (horizonThemeCartPlacementFeatureFlag) {
                        const horizonThemeBottomPlacementNode =
                            document.querySelector(".cart__ctas");
                        if (horizonThemeBottomPlacementNode) {
                            cartPageBottomPlacementNode = horizonThemeBottomPlacementNode;
                        }
                        addedBanner = cartBanners[i].cloneNode(true);
                        if (cartPageBottomPlacementNode) {
                            cartPageBottomPlacementNode.append(addedBanner);
                        }
                    } else {
                        addedBanner =
                            cartPageBottomPlacementNode.parentNode.insertAdjacentElement(
                                "afterend",
                                cartBanners[i].cloneNode(true)
                            );
                    }
                }
                if (addedBanner) {
                    addedBanner.style.display = "flex";
                    addedBanner.classList.add("essential-cart-page-banner");
                }
            }
        }

        // Re-add banners after cart DOM rebuild (e.g. quantity change)
        if (!window.essentialBannersCartPageObserver) {
            const cartPageObserverNode =
                horizonTheme || document.querySelector("main") || document.body;

            window.essentialBannersCartPageObserver = new MutationObserver(() => {
                window.essentialBannersCartPageObserver.disconnect();
                window.essentialBannersCartPageObserver = null;
                essentialInitCartBanners(clientCountry, isClientCountryMatch);
            });

            window.essentialBannersCartPageObserver.observe(cartPageObserverNode, {
                childList: true,
                subtree: true,
            });
        }
    }
}

essentialInitBannerEventClicks();
essentialInitBanners();