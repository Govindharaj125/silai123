(function() {
    var __sections__ = {};
    (function() {
        for (var i = 0, s = document.getElementById('sections-script').getAttribute('data-sections').split(','); i < s.length; i++)
            __sections__[s[i]] = true;
    })();
    (function() {
        if (!__sections__["footer"]) return;
        try {

            customElements.whenDefined('details-disclosure').then(() => {
                class MobileDisclosure extends DetailsDisclosure {
                    constructor() {
                        super();
                        this.reset();
                        window.addEventListener('on:breakpoint-change', this.reset.bind(this));
                    }

                    reset() {
                        const isLargeScreen = window.matchMedia(theme.mediaQueries.md).matches;
                        this.disclosure.open = isLargeScreen;

                        if (isLargeScreen) {
                            this.toggle.setAttribute('tabindex', '-1');
                            this.querySelectorAll('.disclosure, .disclosure__title, .disclosure__panel, .disclosure__content').forEach((el) => {
                                [...el.classList].filter((cl) => cl.indexOf('disclosure') === 0).forEach((cl) => {
                                    el.classList.remove(cl);
                                    el.classList.add(`mobile-${cl}`);
                                });
                            });
                        } else {
                            this.toggle.removeAttribute('tabindex');
                            this.querySelectorAll('.mobile-disclosure, .mobile-disclosure__title, .mobile-disclosure__panel, .mobile-disclosure__content').forEach((el) => {
                                [...el.classList].filter((cl) => cl.indexOf('mobile-disclosure') === 0).forEach((cl) => {
                                    el.classList.remove(cl);
                                    el.classList.add(cl.substr(7));
                                });
                            });
                        }
                    }
                }

                customElements.define('mobile-disclosure', MobileDisclosure);
            });

        } catch (e) {
            console.error(e);
        }
    })();

    (function() {
        if (!__sections__["product-recommendations"]) return;
        try {

            var loadProductRecommendationsIntoSection = function() {
                // Look for an element with class 'product-recommendations'
                var productRecommendationsSection = document.querySelector(".product-recommendations");
                if (productRecommendationsSection === null) {
                    return;
                }
                // Create request and submit it using Ajax
                var request = new XMLHttpRequest();
                request.open("GET", productRecommendationsSection.dataset.url);
                request.onload = function() {
                    if (request.status >= 200 && request.status < 300) {
                        var container = document.createElement("div");
                        container.innerHTML = request.response;
                        productRecommendationsSection.innerHTML = container.querySelector(".product-recommendations").innerHTML;
                        theme.ProductBlockManager.loadImages(productRecommendationsSection);
                        theme.initAnimateOnScroll();
                    }
                };
                request.send();
            };
            // fetch when section reloads in editor
            document.addEventListener("shopify:section:load", function(event) {
                if (document.querySelector('[data-section-id="' + event.detail.sectionId + '"].product-recommendations')) {
                    loadProductRecommendationsIntoSection();
                }
            });
            // Fetching the recommendations on page load
            loadProductRecommendationsIntoSection();

        } catch (e) {
            console.error(e);
        }
    })();

    (function() {
        if (!__sections__["related-products"]) return;
        try {

            var loadProductRecommendationsIntoSection = function() {
                // Look for an element with class 'related-products'
                var productRecommendationsSection = document.querySelector(".related-products");
                if (productRecommendationsSection === null) {
                    return;
                }
                // Create request and submit it using Ajax
                var request = new XMLHttpRequest();
                request.open("GET", productRecommendationsSection.dataset.url);
                request.onload = function() {
                    if (request.status >= 200 && request.status < 300) {
                        var container = document.createElement("div");
                        container.innerHTML = request.response;
                        productRecommendationsSection.innerHTML = container.querySelector(".related-products").innerHTML;
                    }
                };
                request.send();
            };
            // fetch when section reloads in editor
            document.addEventListener("shopify:section:load", function(event) {
                if (document.querySelector('[data-section-id="' + event.detail.sectionId + '"].related-products')) {
                    loadProductRecommendationsIntoSection();
                }
            });
            // Fetching the recommendations on page load
            loadProductRecommendationsIntoSection();

        } catch (e) {
            console.error(e);
        }
    })();
})();