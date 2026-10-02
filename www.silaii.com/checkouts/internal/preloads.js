(function() {
    var preconnectOrigins = ["https://cdn.shopify.com"];
    var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.QSVzdYsv.js", "/cdn/shopifycloud/checkout-web/assets/c1/app.D2gvVyTR.js", "/cdn/shopifycloud/checkout-web/assets/c1/2c1ab0fe.BqEHHmaW.js", "/cdn/shopifycloud/checkout-web/assets/c1/6a2fc6d6.CBQKVWRG.js", "/cdn/shopifycloud/checkout-web/assets/c1/4c290a1e.FJVsH4yi.js", "/cdn/shopifycloud/checkout-web/assets/c1/ccdf3592.B7Ukng27.js", "/cdn/shopifycloud/checkout-web/assets/c1/e477f96c.CCUKKy0S.js", "/cdn/shopifycloud/checkout-web/assets/c1/cf29e63b.UPVrnMYo.js", "/cdn/shopifycloud/checkout-web/assets/c1/bb728e1c.uhKc-SJ5.js", "/cdn/shopifycloud/checkout-web/assets/c1/5587f402.CiejVPa1.js", "/cdn/shopifycloud/checkout-web/assets/c1/cadec7c0.COS2v60r.js", "/cdn/shopifycloud/checkout-web/assets/c1/bff2ff9b.BZBliUVS.js", "/cdn/shopifycloud/checkout-web/assets/c1/acc74f72.D0lORwj1.js", "/cdn/shopifycloud/checkout-web/assets/c1/2255f8fa.D0Ujb8qy.js", "/cdn/shopifycloud/checkout-web/assets/c1/b8733b27.DerGGsS-.js", "/cdn/shopifycloud/checkout-web/assets/c1/e39bc11c.w_dcLWzY.js", "/cdn/shopifycloud/checkout-web/assets/c1/08a3b809.BqMk-s3U.js", "/cdn/shopifycloud/checkout-web/assets/c1/8599b02a.DjDpxYLZ.js", "/cdn/shopifycloud/checkout-web/assets/c1/164ad2e3.BA-GikTU.js", "/cdn/shopifycloud/checkout-web/assets/c1/65f3d4da.BdKZt11Z.js", "/cdn/shopifycloud/checkout-web/assets/c1/60a453ce.BClq-svk.js", "/cdn/shopifycloud/checkout-web/assets/c1/0a7dffce.BHf0S_6c.js", "/cdn/shopifycloud/checkout-web/assets/c1/fb3b4968.CKr4Zfmc.js", "/cdn/shopifycloud/checkout-web/assets/c1/f8706cb6.Bnci6QEq.js", "/cdn/shopifycloud/checkout-web/assets/c1/dffdfb34.BGb6nQvv.js", "/cdn/shopifycloud/checkout-web/assets/c1/3ca8ef7e.D9Nch_50.js", "/cdn/shopifycloud/checkout-web/assets/c1/ac5a19ff.BHoedVx2.js", "/cdn/shopifycloud/checkout-web/assets/c1/0c0ad074.RgO7-3qK.js", "/cdn/shopifycloud/checkout-web/assets/c1/53bbdad9.6B8LHIua.js", "/cdn/shopifycloud/checkout-web/assets/c1/945a08d6.CbBX260S.js", "/cdn/shopifycloud/checkout-web/assets/c1/cb8fcd45.D99hrDC6.js", "/cdn/shopifycloud/checkout-web/assets/c1/2fdb3dd3.CC5MqUe3.js", "/cdn/shopifycloud/checkout-web/assets/c1/0e67bd3b.IdsrMiz7.js", "/cdn/shopifycloud/checkout-web/assets/c1/74835653.BtNhMTqJ.js", "/cdn/shopifycloud/checkout-web/assets/c1/47b970b2.BwzlBSwQ.js", "/cdn/shopifycloud/checkout-web/assets/c1/29034f35.CKhRr7lV.js", "/cdn/shopifycloud/checkout-web/assets/c1/064f6ac1.CtJPZ5b8.js", "/cdn/shopifycloud/checkout-web/assets/c1/efa0389a.CmzfQUTJ.js", "/cdn/shopifycloud/checkout-web/assets/c1/f1968089.DErP3-mp.js", "/cdn/shopifycloud/checkout-web/assets/c1/55098bf1.CRzNngQq.js", "/cdn/shopifycloud/checkout-web/assets/c1/cb5cf153.Cw_O6Mr1.js", "/cdn/shopifycloud/checkout-web/assets/c1/e3e348f2.CzOvkbpO.js", "/cdn/shopifycloud/checkout-web/assets/c1/ca5e9c49.COugV1Xp.js", "/cdn/shopifycloud/checkout-web/assets/c1/ed9f2238.ChGZ5py3.js", "/cdn/shopifycloud/checkout-web/assets/c1/0b8657b8.DAkNHzQn.js", "/cdn/shopifycloud/checkout-web/assets/c1/a422df8c.ggO-AlYl.js", "/cdn/shopifycloud/checkout-web/assets/c1/31cc568e.Dti0cJak.js", "/cdn/shopifycloud/checkout-web/assets/c1/79974aab.CiLYzGHS.js", "/cdn/shopifycloud/checkout-web/assets/c1/7b0c98ea.B-oVlYQI.js", "/cdn/shopifycloud/checkout-web/assets/c1/d22d2b80.CrBDr4H-.js", "/cdn/shopifycloud/checkout-web/assets/c1/f49d4216.DkTq21k4.js", "/cdn/shopifycloud/checkout-web/assets/c1/0e9ee714.CUvblzuU.js", "/cdn/shopifycloud/checkout-web/assets/c1/39921a74.BrTHyyCQ.js", "/cdn/shopifycloud/checkout-web/assets/c1/ec391382.K2o3oZbF.js", "/cdn/shopifycloud/checkout-web/assets/c1/f3fe2775.BuWC6GWF.js", "/cdn/shopifycloud/checkout-web/assets/c1/598fef4e.PfG1A8vt.js", "/cdn/shopifycloud/checkout-web/assets/c1/e77f7fe0.B6M5o7QB.js", "/cdn/shopifycloud/checkout-web/assets/c1/cc6ff67d.CQwyXWHD.js", "/cdn/shopifycloud/checkout-web/assets/c1/87bfafec.a5jzmgqb.js", "/cdn/shopifycloud/checkout-web/assets/c1/dfca5da5.BUxySJFd.js", "/cdn/shopifycloud/checkout-web/assets/c1/6720fa5f.CrCe0j_W.js", "/cdn/shopifycloud/checkout-web/assets/c1/01973ac7.BJK4F5Uy.js", "/cdn/shopifycloud/checkout-web/assets/c1/58314944.CBBsxtpI.js", "/cdn/shopifycloud/checkout-web/assets/c1/7a8217fd.CAuGvD85.js", "/cdn/shopifycloud/checkout-web/assets/c1/2b89a178.CeCOOCYG.js", "/cdn/shopifycloud/checkout-web/assets/c1/b684bff6.BBWgog5h.js", "/cdn/shopifycloud/checkout-web/assets/c1/910cd6e2.pc74Wwrs.js", "/cdn/shopifycloud/checkout-web/assets/c1/347b440c.DhRFIYzk.js", "/cdn/shopifycloud/checkout-web/assets/c1/d5d34b3b.D_UYHSjm.js", "/cdn/shopifycloud/checkout-web/assets/c1/181d38d3.Bx836TsC.js", "/cdn/shopifycloud/checkout-web/assets/c1/d6447d9e.C1rIjiBE.js", "/cdn/shopifycloud/checkout-web/assets/c1/f51e663e.BRJDCQ0a.js", "/cdn/shopifycloud/checkout-web/assets/c1/64de7b49.DBBYkFfY.js", "/cdn/shopifycloud/checkout-web/assets/c1/8e79be58.BAhOGoFB.js", "/cdn/shopifycloud/checkout-web/assets/c1/90e26f5f.RxBZE9Nq.js", "/cdn/shopifycloud/checkout-web/assets/c1/f3e117aa.2wtgPU0T.js", "/cdn/shopifycloud/checkout-web/assets/c1/a25deb9a.BtBRFgl8.js", "/cdn/shopifycloud/checkout-web/assets/c1/7aefefff.CyKAthR-.js", "/cdn/shopifycloud/checkout-web/assets/c1/a535174a.D8WAPvhF.js", "/cdn/shopifycloud/checkout-web/assets/c1/5fd968f2.BIYX8FeS.js", "/cdn/shopifycloud/checkout-web/assets/c1/73a9b0a0.CiCbpTRv.js", "/cdn/shopifycloud/checkout-web/assets/c1/86720dbb.B98R4NBr.js", "/cdn/shopifycloud/checkout-web/assets/c1/7114e006.D5JaP9sc.js", "/cdn/shopifycloud/checkout-web/assets/c1/f692f62f.1VqP6fD-.js", "/cdn/shopifycloud/checkout-web/assets/c1/e0989459.DUbIFUUJ.js", "/cdn/shopifycloud/checkout-web/assets/c1/fc21c11a.BL45iHKA.js", "/cdn/shopifycloud/checkout-web/assets/c1/4ea44c06.B-5F-oiB.js", "/cdn/shopifycloud/checkout-web/assets/c1/f78726c8.D1GQbjRB.js", "/cdn/shopifycloud/checkout-web/assets/c1/1ed8f5e3.CDOIq-vC.js", "/cdn/shopifycloud/checkout-web/assets/c1/7ee73f43.DtdhcMpw.js", "/cdn/shopifycloud/checkout-web/assets/c1/aea3fb03.BDHlih-c.js", "/cdn/shopifycloud/checkout-web/assets/c1/c10167e6.DJgpnUit.js", "/cdn/shopifycloud/checkout-web/assets/c1/b9c0319a.D5yZDWHr.js", "/cdn/shopifycloud/checkout-web/assets/c1/3a819064.Xmk2TvaB.js", "/cdn/shopifycloud/checkout-web/assets/c1/d2e6a587.CdnrCcyA.js"];
    var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.BuSMBobh.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/previous.BpuyvRSB.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/stopwatch.Kyhz8KoT.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.DxMZvmU_.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/VatNumberValidationField.CyiectWG.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/StickyPayButton.CPXhWoNv.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/hasViolationsIgnoringCodes.BcTJoNaV.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Section.CU18S7Ap.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Rollup.DKll7CHa.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentIcon.gzvCNwz_.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayProgressIntercepts.xO_7ctnq.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Choice.B7lVAtpz.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentLine.BGhbZYQP.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/BillingAddressForm.BdwN7V1K.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Switch.BS8yVgoP.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/EmptyState.BEvzDDvy.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/index.CIy8uDiZ.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.CpHF4L7Q.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PhoneField.uZEuHncj.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Middot.D7Ujmshx.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingLines.LcqrKXE1.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/EstimatedDeliveryContent.B_THySFF.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayNewSignupLoginExperiment.BYM12A8B.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/TransitionHeight.CuRoM9zv.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/FormLayout.CrYq3At_.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/BelowTheFoldContent.CmuzzmSI.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Captcha.CJQgLR0i.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/RememberMeSection.JBO5WNhc.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PayButtonSection.Bi0nhBOp.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentOptionSelector.s-Kd_X2E.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentMethodProgressionHost.BIxPaYCu.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.DjDhVpQB.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentButtons.CKE1iCma.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/Popover.Bi1nHaU-.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/floating-layer.DfWUBaTh.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/ShippingMethodSelector.B0hio2RO.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/SubscriptionPriceBreakdown.vTcdVGq4.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/MissingFields.BbxB_6wt.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/RedirectionNotice.B8v_QGNW.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/useHasOrdersFromMultipleShops.B_iZlQze.css"];
    var fontPreconnectUrls = [];
    var fontPrefetchUrls = [];
    var imgPrefetchUrls = [];

    function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
    }

    function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) preconnect(res, next);
        })();
    }

    function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
            link.rel = 'prefetch';
            link.fetchPriority = 'low';
            link.as = as;
            if (as === 'font') link.type = 'font/woff2';
            link.href = url;
            link.crossOrigin = '';
            link.onload = link.onerror = callback;
            document.head.appendChild(link);
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onloadend = callback;
            xhr.send();
        }
    }

    function prefetchAssets() {
        var resources = [].concat(
            scripts.map(function(url) {
                return [url, 'script'];
            }),
            styles.map(function(url) {
                return [url, 'style'];
            }),
            fontPrefetchUrls.map(function(url) {
                return [url, 'font'];
            }),
            imgPrefetchUrls.map(function(url) {
                return [url, 'image'];
            })
        );
        var index = 0;

        function run() {
            var res = resources[index++];
            if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
    }

    function onLoaded() {
        try {
            if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
                preconnectAssets();
                prefetchAssets();
            }
        } catch (e) {}
    }

    if (document.readyState === 'complete') {
        onLoaded();
    } else {
        addEventListener('load', onLoaded);
    }
})();