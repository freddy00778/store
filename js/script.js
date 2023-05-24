"use strict";
!(function () {
    var t = navigator.userAgent.toLowerCase(),
        a = new Date(),
        e = $(document),
        r = $(window),
        o = $("html"),
        i = $("body"),
        n = o.hasClass("desktop"),
        s = -1 !== t.indexOf("msie") ? parseInt(t.split("msie")[1], 10) : -1 !== t.indexOf("trident") ? 11 : -1 !== t.indexOf("edge") && 12,
        l = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        d = !1,
        c = {
            bootstrapTooltip: $("[data-bs-toggle='tooltip']"),
            bootstrapModalDialog: $(".modal"),
            bootstrapTabs: $(".tabs-custom"),
            counter: $(".counter"),
            circleProgress: $(".progress-bar-circle"),
            captcha: $(".recaptcha"),
            campaignMonitor: $(".campaign-mailform"),
            copyrightYear: $(".copyright-year"),
            checkbox: $("input[type='checkbox']"),
            dateCountdown: $(".DateCountdown"),
            isotope: $(".isotope-wrap"),
            lightGallery: $("[data-lightgallery='group']"),
            lightGalleryItem: $("[data-lightgallery='item']"),
            lightDynamicGalleryItem: $("[data-lightgallery='dynamic']"),
            materialParallax: $(".parallax-container"),
            mailchimp: $(".mailchimp-mailform"),
            owl: $(".owl-carousel"),
            popover: $('[data-bs-toggle="popover"]'),
            progressLinear: $(".progress-linear"),
            preloader: $(".preloader"),
            rdNavbar: $(".rd-navbar"),
            rdMailForm: $(".rd-mailform"),
            rdInputLabel: $(".form-label"),
            regula: $("[data-constraints]"),
            radio: $("input[type='radio']"),
            swiper: $(".swiper-container"),
            search: $(".rd-search"),
            searchResults: $(".rd-search-results"),
            statefulButton: $(".btn-stateful"),
            viewAnimate: $(".view-animate"),
            wow: $(".wow"),
            maps: $(".google-map-container"),
            countDown: $(".countdown"),
            multitoggles: document.querySelectorAll("[data-multitoggle]"),
            vide: $(".bg-vide"),
            bootstrapDateTimePicker: $("[data-time-picker]"),
            rdRange: $(".rd-range"),
            focusToggle: $(".focus-toggle"),
            waypoint: $("[data-waypoint-to]"),
            mParallax: $(".m-parallax"),
            slick: $(".slick-slider"),
        };
    function u(t) {
        return !!d || (t.offset().top + t.outerHeight() >= r.scrollTop() && t.offset().top <= r.scrollTop() + r.height());
    }

    r.on("load", function () {
        if (
            (c.preloader.length &&
            !d &&
            pageTransition({
                target: document.querySelector(".page"),
                delay: 0,
                duration: 500,
                classIn: "fadeIn",
                classOut: "fadeOut",
                classActive: "animated",
                conditions: function (t, a) {
                    return a && !/(\#|javascript:void\(0\)|callto:|tel:|mailto:|:\/\/)/.test(a) && !t.currentTarget.hasAttribute("data-lightgallery");
                },
                onTransitionStart: function (t) {
                    setTimeout(function () {
                        c.preloader.removeClass("loaded");
                    }, 0.75 * t.duration);
                },
                onReady: function () {
                    c.preloader.addClass("loaded"), !0;
                },
            }),
                c.counter.length)
        )
            for (var t = 0; t < c.counter.length; t++) {
                var a = $(c.counter[t]),
                    e = function () {
                        var t = $(this);
                        !t.hasClass("animated-first") && u(t) && (t.countTo({ refreshInterval: 40, speed: t.attr("data-speed") || 1e3, from: 0, to: parseInt(t.text(), 10) }), t.addClass("animated-first"));
                    };
                $.proxy(e, a)(), r.on("scroll", $.proxy(e, a));
            }
        if (c.progressLinear.length)
            for (t = 0; t < c.progressLinear.length; t++) {
                var o = $(c.progressLinear[t]),
                    i = function () {
                        var t = $(this),
                            a = parseInt($(this).find(".progress-value").text(), 10);
                        ((!t.hasClass("animated-first") && u(t)) || (!t.hasClass("animated-first") && t.hasClass("tab-progress-bar"))) &&
                        (t.find(".progress-bar-linear").css({ width: a + "%" }),
                            t.find(".progress-value").countTo({
                                refreshInterval: 40,
                                from: 0,
                                to: a,
                                speed: 1e3,
                                formatter: function (a) {
                                    if ("rating" === t.data("formatter")) return ("" + Math.round(10 * a) / 100).replace(".", ",");
                                },
                            }),
                            t.addClass("animated-first"));
                    };
                $.proxy(i, o)(), r.on("scroll", $.proxy(i, o));
            }
        if (c.circleProgress.length)
            for (t = 0; t < c.circleProgress.length; t++) {
                var n = $(c.circleProgress[t]);
                n
                    .circleProgress({
                        value: n.attr("data-value"),
                        size: n.attr("data-size") ? n.attr("data-size") : 175,
                        fill: { gradient: n.attr("data-gradient").split(","), gradientAngle: Math.PI / 4 },
                        startAngle: (-Math.PI / 4) * 2,
                        emptyFill: n.attr("data-empty-fill") ? n.attr("data-empty-fill") : "rgb(245,245,245)",
                    })
                    .on("circle-animation-progress", function (t, a, e) {
                        $(this)
                            .find("span")
                            .text(String(e.toFixed(2)).replace("0.", "").replace("1.", "1"));
                    }),
                u(n) && n.addClass("animated-first"),
                    r.on(
                        "scroll",
                        $.proxy(function () {
                            var t = $(this);
                            !t.hasClass("animated-first") && u(t) && (t.circleProgress("redraw"), t.addClass("animated-first"));
                        }, n)
                    );
            }
        if (c.isotope.length)
            for (t = 0; t < c.isotope.length; t++) {
                var p = c.isotope[t],
                    g = function (t) {
                        t.preventDefault();
                        for (var a = 0; a < this.isoGroup.filters.length; a++) this.isoGroup.filters[a].classList.remove("active");
                        this.classList.add("active"), this.isoGroup.isotope.arrange({ filter: "*" !== this.getAttribute("data-isotope-filter") ? '[data-filter*="' + this.getAttribute("data-isotope-filter") + '"]' : "*" });
                    };
                (p.isoGroup = {}),
                    (p.isoGroup.filters = p.querySelectorAll("[data-isotope-filter]")),
                    (p.isoGroup.node = p.querySelector(".isotope")),
                    (p.isoGroup.layout = p.isoGroup.node.getAttribute("data-isotope-layout") ? p.isoGroup.node.getAttribute("data-isotope-layout") : "masonry"),
                    (p.isoGroup.isotope = new Isotope(p.isoGroup.node, { itemSelector: ".isotope-item", layoutMode: p.isoGroup.layout, filter: "*" }));
                for (var m = 0; m < p.isoGroup.filters.length; m++) {
                    var f = p.isoGroup.filters[m];
                    (f.isoGroup = p.isoGroup), f.addEventListener("click", g);
                }
                window.addEventListener(
                    "resize",
                    function () {
                        this.isoGroup.isotope.layout();
                    }.bind(p)
                );
            }
        if (c.materialParallax.length)
            if (d || s || l)
                for (t = 0; t < c.materialParallax.length; t++) {
                    var h = $(c.materialParallax[t]);
                    h.addClass("parallax-disabled"), h.css({ "background-image": "url(" + h.data("parallax-img") + ")" });
                }
            else c.materialParallax.parallax();
    }),
        $(function () {
            function t(t) {
                for (var a, e = $(t.slides[t.previousIndex]), r = $(t.slides[t.activeIndex]), o = e.find("video"), i = 0; i < o.length; i++) o[i].pause();
                (a = r.find("video")).length && a.get(0).play();
            }
            function p(t) {
                for (var a, e, r, o, i = $(t.container).find("[data-caption-animate]"), n = $(t.slides[t.activeIndex]).find("[data-caption-animate]"), s = 0; s < i.length; s++)
                    (o = $(i[s])).removeClass("animated").removeClass(o.attr("data-caption-animate")).addClass("not-animated");
                var l = function (t, a) {
                    return function () {
                        t.removeClass("not-animated").addClass(t.attr("data-caption-animate")).addClass("animated"), a && t.css("animation-duration", a + "ms");
                    };
                };
                for (s = 0; s < n.length; s++) (a = (r = $(n[s])).attr("data-caption-delay")), (e = r.attr("data-caption-duration")), d ? r.removeClass("not-animated") : a ? setTimeout(l(r, e), parseInt(a, 10)) : l(r, e);
            }
            function g(t) {
                for (var a = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"], e = [0, 576, 768, 992, 1200, 1600], r = {}, o = 0; o < e.length; o++) {
                    r[e[o]] = {};
                    for (var i = o; i >= -1; i--)
                        !r[e[o]].items && t.attr("data" + a[i] + "items") && (r[e[o]].items = i < 0 ? 1 : parseInt(t.attr("data" + a[i] + "items"), 10)),
                        !r[e[o]].stagePadding && 0 !== r[e[o]].stagePadding && t.attr("data" + a[i] + "stage-padding") && (r[e[o]].stagePadding = i < 0 ? 0 : parseInt(t.attr("data" + a[i] + "stage-padding"), 10)),
                        !r[e[o]].margin && 0 !== r[e[o]].margin && t.attr("data" + a[i] + "margin") && (r[e[o]].margin = i < 0 ? 30 : parseInt(t.attr("data" + a[i] + "margin"), 10));
                }
                return (
                    t.attr("data-dots-custom") &&
                    t.on("initialized.owl.carousel", function (t) {
                        var a = $(t.currentTarget),
                            e = $(a.attr("data-dots-custom")),
                            r = 0;
                        a.attr("data-active") && (r = parseInt(a.attr("data-active"), 10)),
                            a.trigger("to.owl.carousel", [r, 300, !0]),
                            e.find("[data-owl-item='" + r + "']").addClass("active"),
                            e.find("[data-owl-item]").on("click", function (t) {
                                t.preventDefault(), a.trigger("to.owl.carousel", [parseInt(this.getAttribute("data-owl-item"), 10), 300, !0]);
                            }),
                            a.on("translate.owl.carousel", function (t) {
                                e.find(".active").removeClass("active"), e.find("[data-owl-item='" + t.item.index + "']").addClass("active");
                            });
                    }),
                    t.attr("data-nav-custom") &&
                    t.on("initialized.owl.carousel", function (t) {
                        var a = $(t.currentTarget),
                            e = $(a.attr("data-nav-custom"));
                        e.find(".owl-arrow-next").click(function (t) {
                            t.preventDefault(), a.trigger("next.owl.carousel");
                        }),
                            e.find(".owl-arrow-prev").click(function (t) {
                                t.preventDefault(), a.trigger("prev.owl.carousel");
                            });
                    }),
                        t.on("initialized.owl.carousel", function () {
                            w(t.find('[data-lightgallery="item"]'), "lightGallery-in-carousel");
                        }),
                        t.owlCarousel({
                            autoplay: !d && "true" === t.attr("data-autoplay"),
                            autoplayTimeout: t.attr("data-autoplay-speed") ? parseInt(t.attr("data-autoplay-speed")) : 3500,
                            loop: !d && "false" !== t.attr("data-loop"),
                            items: 1,
                            autoWidth: "true" === t.attr("data-auto-width"),
                            center: "true" === t.attr("data-center"),
                            dotsContainer: t.attr("data-pagination-container") || !1,
                            navContainer: t.attr("data-navigation-container") || !1,
                            mouseDrag: !d && "false" !== t.attr("data-mouse-drag"),
                            nav: "true" === t.attr("data-nav"),
                            dots: "true" === t.attr("data-dots"),
                            dotsEach: !!t.attr("data-dots-each") && parseInt(t.attr("data-dots-each"), 10),
                            animateIn: !!t.attr("data-animation-in") && t.attr("data-animation-in"),
                            animateOut: !!t.attr("data-animation-out") && t.attr("data-animation-out"),
                            responsive: r,
                            navText: t.attr("data-nav-text") ? $.parseJSON(t.attr("data-nav-text")) : [],
                            navClass: t.attr("data-nav-class") ? $.parseJSON(t.attr("data-nav-class")) : ["owl-prev", "owl-next"],
                        }),
                        t
                );
            }
            function m(t) {
                $("#" + t.live)
                    .removeClass("cleared")
                    .html(),
                    t.current++,
                    t.spin.addClass("loading"),
                    $.get(L, { s: decodeURI(t.term), liveSearch: t.live, dataType: "html", liveCount: t.liveCount, filter: t.filter, template: t.template }, function (a) {
                        t.processed++;
                        var e = $("#" + t.live);
                        t.processed !== t.current ||
                        e.hasClass("cleared") ||
                        (e.find("> #search-results").removeClass("active"),
                            e.html(a),
                            setTimeout(function () {
                                e.find("> #search-results").addClass("active");
                            }, 50)),
                            t.spin.parents(".rd-search").find(".input-group-addon").removeClass("loading");
                    });
            }
            function f(t, a) {
                var e,
                    r = 0;
                if (t.length) {
                    for (var o = 0; o < t.length; o++) {
                        var i = $(t[o]);
                        if ((e = i.regula("validate")).length) for (at = 0; at < e.length; at++) r++, i.siblings(".form-validation").text(e[at].message).parent().addClass("has-error");
                        else i.siblings(".form-validation").text("").parent().removeClass("has-error");
                    }
                    return a && a.length ? h(a) && 0 === r : 0 === r;
                }
                return !0;
            }
            function h(t) {
                return (
                    0 !== t.find(".g-recaptcha-response").val().length ||
                    (t.siblings(".form-validation").html("Please, prove that you are not robot.").addClass("active"),
                        t.closest(".form-wrap").addClass("has-error"),
                        t.on("propertychange", function () {
                            var t = $(this);
                            t.find(".g-recaptcha-response").val().length > 0 && (t.closest(".form-wrap").removeClass("has-error"), t.siblings(".form-validation").removeClass("active").html(""), t.off("propertychange"));
                        }),
                        !1)
                );
            }
            function v(t) {
                c.bootstrapTooltip.tooltip("dispose");
                for (var a = 0; a < c.bootstrapTooltip.length; a++) {
                    var e = $(c.bootstrapTooltip[a]);
                    window.innerWidth < 576 ? e.tooltip({ customClass: e.attr("data-class") ? e.attr("data-class") : "", placement: "bottom" }) : e.tooltip({ customClass: e.attr("data-class") ? e.attr("data-class") : "", placement: t });
                }
            }
            function y(t, a) {
                d ||
                $(t).lightGallery({
                    thumbnail: "false" !== $(t).attr("data-lg-thumbnail"),
                    selector: "[data-lightgallery='item']",
                    autoplay: "true" === $(t).attr("data-lg-autoplay"),
                    pause: parseInt($(t).attr("data-lg-autoplay-delay")) || 5e3,
                    addClass: a,
                    mode: $(t).attr("data-lg-animation") || "lg-slide",
                    loop: "false" !== $(t).attr("data-lg-loop"),
                });
            }
            function b(t, a) {
                d ||
                $(t).on("click", function () {
                    $(t).lightGallery({
                        thumbnail: "false" !== $(t).attr("data-lg-thumbnail"),
                        selector: "[data-lightgallery='item']",
                        autoplay: "true" === $(t).attr("data-lg-autoplay"),
                        pause: parseInt($(t).attr("data-lg-autoplay-delay")) || 5e3,
                        addClass: a,
                        mode: $(t).attr("data-lg-animation") || "lg-slide",
                        loop: "false" !== $(t).attr("data-lg-loop"),
                        dynamic: !0,
                        dynamicEl: JSON.parse($(t).attr("data-lg-dynamic-elements")) || [],
                    });
                });
            }
            function w(t, a) {
                (t = $(t)),
                d ||
                (t.length && t.attr("href").split("http").length > 1 && (a = "lightgallery-iframe"),
                    t.lightGallery({ selector: "this", addClass: a, counter: !1, iframeMaxWidth: "90%", youtubePlayerParams: { modestbranding: 1, showinfo: 1, rel: 1, controls: 1 }, vimeoPlayerParams: { byline: 0, portrait: 0 } }));
            }
            function C(t, a, e, r) {
                var o = {};
                try {
                    (o = JSON.parse(t)), r(new google.maps.LatLng(o.lat, o.lng), a, e);
                } catch (o) {
                    e.geocoder.geocode({ address: t }, function (t, o) {
                        if (o === google.maps.GeocoderStatus.OK) {
                            var i = t[0].geometry.location.lat(),
                                n = t[0].geometry.location.lng();
                            r(new google.maps.LatLng(parseFloat(i), parseFloat(n)), a, e);
                        }
                    });
                }
            }
            if (
                ((d = window.xMode),
                    (window.onloadCaptchaCallback = function () {
                        for (var t = 0; t < c.captcha.length; t++) {
                            var a = $(c.captcha[t]);
                            grecaptcha.render(a.attr("id"), {
                                sitekey: a.attr("data-sitekey"),
                                size: a.attr("data-size") ? a.attr("data-size") : "normal",
                                theme: a.attr("data-theme") ? a.attr("data-theme") : "light",
                                callback: function (t) {
                                    $(".recaptcha").trigger("propertychange");
                                },
                            }),
                                a.after("<span class='form-validation'></span>");
                        }
                    }),
                c.captcha.length && $.getScript("//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en"),
                navigator.platform.match(/(Mac)/i) && o.addClass("mac-os"),
                s && (12 === s && o.addClass("ie-edge"), 11 === s && o.addClass("ie-11"), s < 10 && o.addClass("lt-ie-10"), s < 11 && o.addClass("ie-10")),
                    c.bootstrapTooltip.length)
            ) {
                var k = c.bootstrapTooltip.attr("data-bs-placement");
                v(k),
                    r.on("resize orientationchange", function () {
                        v(k);
                    });
            }
            if (c.bootstrapModalDialog.length)
                for (var x = 0; x < c.bootstrapModalDialog.length; x++) {
                    var T = $(c.bootstrapModalDialog[x]);
                    T.on(
                        "hidden.bs.modal",
                        $.proxy(function () {
                            var t = $(this),
                                a = t.find("video"),
                                e = t.find("iframe");
                            if ((a.length && a[0].pause(), e.length)) {
                                var r = e.attr("src");
                                e.attr("src", "").attr("src", r);
                            }
                        }, T)
                    );
                }
            if (
                (c.popover.length && (window.innerWidth < 767 ? (c.popover.attr("data-bs-placement", "bottom"), c.popover.popover()) : c.popover.popover()),
                c.statefulButton.length &&
                $(c.statefulButton).on("click", function () {
                    var t = $(this).button("loading");
                    setTimeout(function () {
                        t.button("reset");
                    }, 2e3);
                }),
                    c.bootstrapTabs.length)
            )
                for (x = 0; x < c.bootstrapTabs.length; x++) {
                    var A = $(c.bootstrapTabs[x]);
                    A.find(".slick-slider").length &&
                    A.find(".tabs-custom-list > li > a").on(
                        "click",
                        $.proxy(function () {
                            var t = $(this);
                            setTimeout(
                                function () {
                                    t.find(".tab-content .tab-pane.active .slick-slider").slick("setPosition");
                                },
                                d ? 1500 : 300
                            );
                        }, A)
                    );
                }
            var I, M, S;
            if (
                (c.copyrightYear.length && c.copyrightYear.text(a.getFullYear()),
                c.maps.length &&
                ((I = c.maps),
                    (M = function () {
                        for (var t, a = 0; a < c.maps.length; a++)
                            if (c.maps[a].hasAttribute("data-key")) {
                                t = c.maps[a].getAttribute("data-key");
                                break;
                            }
                        $.getScript("//maps.google.com/maps/api/js?" + (t ? "key=" + t + "&" : "") + "sensor=false&libraries=geometry,places&v=quarterly", function () {
                            var t = document.getElementsByTagName("head")[0],
                                a = t.insertBefore;
                            t.insertBefore = function (e, r) {
                                (e.href && -1 !== e.href.indexOf("//fonts.googleapis.com/css?family=Roboto")) || -1 !== e.innerHTML.indexOf("gm-style") || a.call(t, e, r);
                            };
                            for (var e = new google.maps.Geocoder(), r = 0; r < c.maps.length; r++) {
                                var o = parseInt(c.maps[r].getAttribute("data-zoom"), 10) || 11,
                                    i = c.maps[r].hasAttribute("data-styles") ? JSON.parse(c.maps[r].getAttribute("data-styles")) : [],
                                    n = c.maps[r].getAttribute("data-center") || "New York",
                                    s = new google.maps.Map(c.maps[r].querySelectorAll(".google-map")[0], { zoom: o, styles: i, scrollwheel: !1, center: { lat: 0, lng: 0 } });
                                (c.maps[r].map = s),
                                    (c.maps[r].geocoder = e),
                                    (c.maps[r].google = google),
                                    C(n, null, c.maps[r], function (t, a, e) {
                                        e.map.setCenter(t);
                                    });
                                var l = c.maps[r].querySelectorAll(".google-map-markers li");
                                if (l.length)
                                    for (var d = [], u = 0; u < l.length; u++) {
                                        var p = l[u];
                                        C(p.getAttribute("data-location"), p, c.maps[r], function (t, a, e) {
                                            var r = a.getAttribute("data-icon") || e.getAttribute("data-icon"),
                                                o = (a.getAttribute("data-icon-active") || e.getAttribute("data-icon-active"), a.getAttribute("data-description") || ""),
                                                i = new google.maps.InfoWindow({ content: o });
                                            a.infoWindow = i;
                                            var n = { position: t, map: e.map };
                                            r && (n.icon = r);
                                            var l = new google.maps.Marker(n);
                                            (a.gmarker = l),
                                                d.push({ markerElement: a, infoWindow: i }),
                                                (l.isActive = !1),
                                                google.maps.event.addListener(
                                                    i,
                                                    "closeclick",
                                                    function (t, a) {
                                                        var e;
                                                        (t.gmarker.isActive = !1), (e = t.getAttribute("data-icon") || a.getAttribute("data-icon")), t.gmarker.setIcon(e);
                                                    }.bind(this, a, e)
                                                ),
                                                google.maps.event.addListener(
                                                    l,
                                                    "click",
                                                    function (t, a) {
                                                        if (0 !== t.infoWindow.getContent().length) {
                                                            for (var e, r, o = t.gmarker, i = 0; i < d.length; i++) {
                                                                var n;
                                                                d[i].markerElement === t && (r = d[i].infoWindow),
                                                                (e = d[i].markerElement.gmarker).isActive &&
                                                                d[i].markerElement !== t &&
                                                                ((e.isActive = !1), (n = d[i].markerElement.getAttribute("data-icon") || a.getAttribute("data-icon")), e.setIcon(n), d[i].infoWindow.close());
                                                            }
                                                            (o.isActive = !o.isActive),
                                                                o.isActive
                                                                    ? ((n = t.getAttribute("data-icon-active") || a.getAttribute("data-icon-active")) && o.setIcon(n), r.open(s, l))
                                                                    : ((n = t.getAttribute("data-icon") || a.getAttribute("data-icon")) && o.setIcon(n), r.close());
                                                        }
                                                    }.bind(this, a, e)
                                                );
                                        });
                                    }
                            }
                        });
                    }),
                    (S = function () {
                        !I.hasClass("lazy-loaded") && u(I) && (M.call(), I.addClass("lazy-loaded")), !I.hasClass("lazy-loaded") && $(I).parents().hasClass("tab-content") && (M.call(), I.addClass("lazy-loaded"));
                    })(),
                    r.on("scroll", S)),
                    c.radio.length)
            )
                for (var x = 0; x < c.radio.length; x++) $(c.radio[x]).addClass("radio-custom").after("<span class='radio-custom-dummy'></span>");
            if (c.checkbox.length) for (x = 0; x < c.checkbox.length; x++) $(c.checkbox[x]).addClass("checkbox-custom").after("<span class='checkbox-custom-dummy'></span>");
            if ((n && !d && $().UItoTop({ easingType: "easeOutQuad", containerClass: "ui-to-top fa fa-angle-up" }), c.rdNavbar.length)) {
                var P, D, G, N;
                for (P = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"], N = {}, x = K = 0, D = (G = [0, 576, 768, 992, 1200, 1600]).length; K < D; x = ++K)
                    G[x],
                    N[G[x]] || (N[G[x]] = {}),
                    c.rdNavbar.attr("data" + P[x] + "layout") && (N[G[x]].layout = c.rdNavbar.attr("data" + P[x] + "layout")),
                    c.rdNavbar.attr("data" + P[x] + "device-layout") && (N[G[x]].deviceLayout = c.rdNavbar.attr("data" + P[x] + "device-layout")),
                    c.rdNavbar.attr("data" + P[x] + "hover-on") && (N[G[x]].focusOnHover = "true" === c.rdNavbar.attr("data" + P[x] + "hover-on")),
                    c.rdNavbar.attr("data" + P[x] + "auto-height") && (N[G[x]].autoHeight = "true" === c.rdNavbar.attr("data" + P[x] + "auto-height")),
                        d ? (N[G[x]].stickUp = !1) : c.rdNavbar.attr("data" + P[x] + "stick-up") && (N[G[x]].stickUp = "true" === c.rdNavbar.attr("data" + P[x] + "stick-up")),
                    c.rdNavbar.attr("data" + P[x] + "stick-up-offset") && (N[G[x]].stickUpOffset = c.rdNavbar.attr("data" + P[x] + "stick-up-offset"));
                c.rdNavbar.RDNavbar({
                    anchorNav: !d,
                    stickUpClone: !(!c.rdNavbar.attr("data-stick-up-clone") || d) && "true" === c.rdNavbar.attr("data-stick-up-clone"),
                    responsive: N,
                    callbacks: {
                        onStuck: function () {
                            var t = this.$element.find(".rd-search input");
                            t && t.val("").trigger("propertychange");
                        },
                        onDropdownOver: function () {
                            return !d;
                        },
                        onUnstuck: function () {
                            if (null !== this.$clone) {
                                var t = this.$clone.find(".rd-search input");
                                t && (t.val("").trigger("propertychange"), t.trigger("blur"));
                            }
                        },
                    },
                }),
                c.rdNavbar.attr("data-body-class") && (document.body.className += " " + c.rdNavbar.attr("data-body-class"));
            }
            if (c.search.length || c.searchResults) {
                var L = "bat/rd-search.php",
                    F = '<h5 class="search-title"><a target="_top" href="#{href}" class="search-link">#{title}</a></h5><p>...#{token}...</p><p class="match"><em>Terms matched: #{count} - URL: #{href}</em></p>';
                if (c.search.length)
                    for (x = 0; x < c.search.length; x++) {
                        var O = $(c.search[x]),
                            E = {
                                element: O,
                                filter: O.attr("data-search-filter") ? O.attr("data-search-filter") : "*.html",
                                template: O.attr("data-search-template") ? O.attr("data-search-template") : F,
                                live: !!O.attr("data-search-live") && O.attr("data-search-live"),
                                liveCount: O.attr("data-search-live-count") ? parseInt(O.attr("data-search-live"), 10) : 4,
                                current: 0,
                                processed: 0,
                                timer: {},
                            },
                            z = $(".rd-navbar-search-toggle");
                        if (
                            (z.length &&
                            z.on(
                                "click",
                                (function (t) {
                                    return function () {
                                        $(this).hasClass("active") || t.find("input").val("").trigger("propertychange");
                                    };
                                })(O)
                            ),
                                E.live)
                        ) {
                            var R = !1;
                            O.find("input").on(
                                "input propertychange",
                                $.proxy(
                                    function () {
                                        (this.term = this.element.find("input").val().trim()),
                                            (this.spin = this.element.find(".input-group-addon")),
                                            clearTimeout(this.timer),
                                            this.term.length > 2
                                                ? ((this.timer = setTimeout(m(this), 200)),
                                                !1 === R &&
                                                ((R = !0),
                                                    i.on("click", function (t) {
                                                        0 === $(t.toElement).parents(".rd-search").length && $("#rd-search-results-live").addClass("cleared").html("");
                                                    })))
                                                : 0 === this.term.length &&
                                                $("#" + this.live)
                                                    .addClass("cleared")
                                                    .html("");
                                    },
                                    E,
                                    this
                                )
                            );
                        }
                        O.submit(
                            $.proxy(
                                function () {
                                    return $("<input />").attr("type", "hidden").attr("name", "filter").attr("value", this.filter).appendTo(this.element), !0;
                                },
                                E,
                                this
                            )
                        );
                    }
                if (c.searchResults.length) {
                    var q = /\?.*s=([^&]+)\&filter=([^&]+)/g.exec(location.search);
                    null !== q &&
                    $.get(L, { s: decodeURI(q[1]), dataType: "html", filter: q[2], template: F, live: "" }, function (t) {
                        c.searchResults.html(t);
                    });
                }
            }
            if (c.viewAnimate.length)
                for (x = 0; x < c.viewAnimate.length; x++) {
                    var Y = $(c.viewAnimate[x]).not(".active");
                    e.on(
                        "scroll",
                        $.proxy(function () {
                            u(this) && this.addClass("active");
                        }, Y)
                    ).trigger("scroll");
                }
            if (c.swiper.length)
                for (x = 0; x < c.swiper.length; x++) {
                    for (
                        var B = $(c.swiper[x]), W = B.find(".swiper-pagination"), H = B.find(".swiper-button-next"), j = B.find(".swiper-button-prev"), U = B.find(".swiper-scrollbar"), J = B.find(".swiper-slide"), K = 0;
                        K < J.length;
                        K++
                    ) {
                        var Q,
                            V = $(J[K]);
                        (Q = V.attr("data-slide-bg")) && V.css({ "background-image": "url(" + Q + ")", "background-size": "cover" });
                    }
                    J.end().find("[data-caption-animate]").addClass("not-animated").end(),
                        B.swiper({
                            autoplay: !(d || !$.isNumeric(B.attr("data-autoplay"))) && B.attr("data-autoplay"),
                            direction: B.attr("data-direction") ? B.attr("data-direction") : "horizontal",
                            effect: B.attr("data-slide-effect") ? B.attr("data-slide-effect") : "slide",
                            speed: B.attr("data-slide-speed") ? B.attr("data-slide-speed") : 600,
                            keyboardControl: "true" === B.attr("data-keyboard"),
                            mousewheelControl: "true" === B.attr("data-mousewheel"),
                            mousewheelReleaseOnEdges: "true" === B.attr("data-mousewheel-release"),
                            nextButton: H.length ? H.get(0) : null,
                            prevButton: j.length ? j.get(0) : null,
                            pagination: W.length ? W.get(0) : null,
                            paginationClickable: !!W.length && "false" !== W.attr("data-clickable"),
                            paginationBulletRender:
                                W.length && "true" === W.attr("data-index-bullet")
                                    ? function (t, a, e) {
                                        return '<span class="' + e + '">' + (a + 1) + "</span>";
                                    }
                                    : null,
                            scrollbar: U.length ? U.get(0) : null,
                            scrollbarDraggable: !U.length || "false" !== U.attr("data-draggable"),
                            scrollbarHide: !!U.length && "false" === U.attr("data-draggable"),
                            loop: !d && "false" !== B.attr("data-loop"),
                            simulateTouch: !(!B.attr("data-simulate-touch") || d) && "true" === B.attr("data-simulate-touch"),
                            onTransitionStart: function (a) {
                                t(a);
                            },
                            onTransitionEnd: function (t) {
                                p(t);
                            },
                            onInit: function (a) {
                                t(a), p(a), w(B.find('[data-lightgallery="item"]'), "lightGallery-in-carousel");
                            },
                        });
                }
            if (c.owl.length)
                for (x = 0; x < c.owl.length; x++) {
                    var _ = $(c.owl[x]);
                    (c.owl[x].owl = _), g(_);
                }
            if (
                (o.hasClass("wow-animation") && c.wow.length && !d && n && new WOW().init(),
                c.rdInputLabel.length && c.rdInputLabel.RDInputLabel(),
                c.regula.length &&
                (function (t) {
                    regula.custom({
                        name: "PhoneNumber",
                        defaultMessage: "Invalid phone number format",
                        validator: function () {
                            return "" === this.value || /^(\+\d)?[0-9\-\(\) ]{5,}$/i.test(this.value);
                        },
                    });
                    for (var a = 0; a < t.length; a++) {
                        var e = $(t[a]);
                        e.addClass("form-control-has-validation").after("<span class='form-validation'></span>"), e.parent().find(".form-validation").is(":last-child") && e.addClass("form-control-last-child");
                    }
                    t.on("input change propertychange blur", function (t) {
                        var e,
                            r = $(this);
                        if (("blur" === t.type || r.parent().hasClass("has-error")) && !r.parents(".rd-mailform").hasClass("success"))
                            if ((e = r.regula("validate")).length) for (a = 0; a < e.length; a++) r.siblings(".form-validation").text(e[a].message).parent().addClass("has-error");
                            else r.siblings(".form-validation").text("").parent().removeClass("has-error");
                    }).regula("bind");
                    var r = [
                        { type: regula.Constraint.Required, newMessage: "The text field is required." },
                        { type: regula.Constraint.Email, newMessage: "The email is not a valid email." },
                        { type: regula.Constraint.Numeric, newMessage: "Only numbers are required" },
                        { type: regula.Constraint.Selected, newMessage: "Please choose an option." },
                    ];
                    for (a = 0; a < r.length; a++) {
                        var o = r[a];
                        regula.override({ constraintType: o.type, defaultMessage: o.newMessage });
                    }
                })(c.regula),
                    c.mailchimp.length)
            )
                for (x = 0; x < c.mailchimp.length; x++) {
                    var X = $(c.mailchimp[x]),
                        Z = X.find('input[type="email"]');
                    X.attr("novalidate", "true"),
                        Z.attr("name", "EMAIL"),
                        X.on(
                            "submit",
                            $.proxy(
                                function (t, a) {
                                    a.preventDefault();
                                    var e = this,
                                        r = {},
                                        o = e.attr("action").replace("/post?", "/post-json?").concat("&c=?"),
                                        i = e.serializeArray(),
                                        n = $("#" + e.attr("data-form-output"));
                                    for (x = 0; x < i.length; x++) r[i[x].name] = i[x].value;
                                    return (
                                        $.ajax({
                                            data: r,
                                            url: o,
                                            dataType: "jsonp",
                                            error: function (t, a) {
                                                n.html("Server error: " + a),
                                                    setTimeout(function () {
                                                        n.removeClass("active");
                                                    }, 4e3);
                                            },
                                            success: function (a) {
                                                n.html(a.msg).addClass("active"), (t[0].value = "");
                                                var e = $('[for="' + t.attr("id") + '"]');
                                                e.length && e.removeClass("focus not-empty"),
                                                    setTimeout(function () {
                                                        n.removeClass("active");
                                                    }, 6e3);
                                            },
                                            beforeSend: function (t) {
                                                var a = window.xMode,
                                                    r = (function () {
                                                        var t,
                                                            a = 0,
                                                            r = e.find("[data-constraints]");
                                                        if (r.length) {
                                                            for (var o = 0; o < r.length; o++) {
                                                                var i = $(r[o]);
                                                                if ((t = i.regula("validate")).length) for (var n = 0; n < t.length; n++) a++, i.siblings(".form-validation").text(t[n].message).parent().addClass("has-error");
                                                                else i.siblings(".form-validation").text("").parent().removeClass("has-error");
                                                            }
                                                            return 0 === a;
                                                        }
                                                        return !0;
                                                    })();
                                                if (a || !r) return !1;
                                                n.html("Submitting...").addClass("active");
                                            },
                                        }),
                                            !1
                                    );
                                },
                                X,
                                Z
                            )
                        );
                }
            if (c.campaignMonitor.length)
                for (x = 0; x < c.campaignMonitor.length; x++) {
                    var tt = $(c.campaignMonitor[x]);
                    tt.on(
                        "submit",
                        $.proxy(function (t) {
                            var a = {},
                                e = this.attr("action"),
                                r = this.serializeArray(),
                                o = $("#" + c.campaignMonitor.attr("data-form-output")),
                                i = $(this);
                            for (s = 0; s < r.length; s++) a[r[s].name] = r[s].value;
                            $.ajax({
                                data: a,
                                url: e,
                                dataType: "jsonp",
                                error: function (t, a) {
                                    o.html("Server error: " + a),
                                        setTimeout(function () {
                                            o.removeClass("active");
                                        }, 4e3);
                                },
                                success: function (t) {
                                    o.html(t.Message).addClass("active"),
                                        setTimeout(function () {
                                            o.removeClass("active");
                                        }, 6e3);
                                },
                                beforeSend: function (t) {
                                    if (d || !f(i.find("[data-constraints]"))) return !1;
                                    o.html("Submitting...").addClass("active");
                                },
                            });
                            for (var n = i[0].getElementsByTagName("input"), s = 0; s < n.length; s++) {
                                n[s].value = "";
                                var l = document.querySelector('[for="' + n[s].getAttribute("id") + '"]');
                                l && l.classList.remove("focus", "not-empty");
                            }
                            return !1;
                        }, tt)
                    );
                }
            if (c.rdMailForm.length) {
                var at,
                    et = {
                        MF000: "Successfully sent!",
                        MF001: "Recipients are not set!",
                        MF002: "Form will not work locally!",
                        MF003: "Please, define email field in your form!",
                        MF004: "Please, define type of your form!",
                        MF254: "Something went wrong with PHPMailer!",
                        MF255: "Aw, snap! Something went wrong.",
                    };
                for (x = 0; x < c.rdMailForm.length; x++) {
                    var rt = $(c.rdMailForm[x]),
                        ot = !1;
                    rt.attr("novalidate", "novalidate").ajaxForm({
                        data: { "form-type": rt.attr("data-form-type") || "contact", counter: x },
                        beforeSubmit: function (t, a, e) {
                            if (!d) {
                                var r = $(c.rdMailForm[this.extraData.counter]),
                                    o = r.find("[data-constraints]"),
                                    i = $("#" + r.attr("data-form-output")),
                                    n = r.find(".recaptcha"),
                                    s = !0;
                                if ((i.removeClass("active error success"), !f(o, n))) return !1;
                                if (n.length) {
                                    var l = n.find(".g-recaptcha-response").val(),
                                        u = { CPT001: 'Please, setup you "site key" and "secret key" of reCaptcha', CPT002: "Something wrong with google reCaptcha" };
                                    (ot = !0),
                                        $.ajax({ method: "POST", url: "bat/reCaptcha.php", data: { "g-recaptcha-response": l }, async: !1 }).done(function (t) {
                                            "CPT000" !== t &&
                                            (i.hasClass("snackbars")
                                                ? (i.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + u[t] + "</span></p>"),
                                                    setTimeout(function () {
                                                        i.removeClass("active");
                                                    }, 3500),
                                                    (s = !1))
                                                : i.html(u[t]),
                                                i.addClass("active"));
                                        });
                                }
                                if (!s) return !1;
                                r.addClass("form-in-process"), i.hasClass("snackbars") && (i.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>'), i.addClass("active"));
                            }
                        },
                        error: function (t) {
                            if (!d) {
                                var a = $("#" + $(c.rdMailForm[this.extraData.counter]).attr("data-form-output")),
                                    e = $(c.rdMailForm[this.extraData.counter]);
                                a.text(et[t]), e.removeClass("form-in-process"), ot && grecaptcha.reset();
                            }
                        },
                        success: function (t) {
                            if (!d) {
                                var a = $(c.rdMailForm[this.extraData.counter]),
                                    e = $("#" + a.attr("data-form-output")),
                                    r = a.find("select");
                                a.addClass("success").removeClass("form-in-process"),
                                ot && grecaptcha.reset(),
                                    (t = 5 === t.length ? t : "MF255"),
                                    e.text(et[t]),
                                    "MF000" === t
                                        ? e.hasClass("snackbars")
                                        ? e.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + et[t] + "</span></p>")
                                        : e.addClass("active success")
                                        : e.hasClass("snackbars")
                                        ? e.html(' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>' + et[t] + "</span></p>")
                                        : e.addClass("active error"),
                                    a.clearForm(),
                                r.length && r.select2("val", ""),
                                    a.find("input, textarea").trigger("blur"),
                                    setTimeout(function () {
                                        e.removeClass("active error success"), a.removeClass("success");
                                    }, 3500);
                            }
                        },
                    });
                }
            }
            if (c.lightGallery.length) for (x = 0; x < c.lightGallery.length; x++) y(c.lightGallery[x]);
            if (c.lightGalleryItem.length) {
                for (var it = [], nt = 0; nt < c.lightGalleryItem.length; nt++)
                    $(c.lightGalleryItem[nt]).parents(".owl-carousel").length || $(c.lightGalleryItem[nt]).parents(".swiper-slider").length || $(c.lightGalleryItem[nt]).parents(".slick-slider").length || it.push(c.lightGalleryItem[nt]);
                c.lightGalleryItem = it;
                for (x = 0; x < c.lightGalleryItem.length; x++) w(c.lightGalleryItem[x]);
            }
            if (c.lightDynamicGalleryItem.length) for (x = 0; x < c.lightDynamicGalleryItem.length; x++) b(c.lightDynamicGalleryItem[x]);
            if (c.countDown.length)
                for (x = 0; x < c.countDown.length; x++) {
                    var st = $(c.countDown[x]),
                        lt = { format: st.attr("data-format"), layout: st.attr("data-layout") };
                    "short" === st.attr("data-style") && (lt.labels = ["Yeas", "Mons", "Weks", "Days", "Hrs", "Min", "Sec"]);
                    var dt = new Date();
                    dt.setDate(dt.getDate() + 42), (lt[st.attr("data-type")] = dt), st.countdown(lt);
                }
            function ct(t) {
                for (var a = 0; a < t.length; a++) {
                    for (var e = t[a].querySelectorAll('[aria-hidden="true"]'), r = t[a].querySelectorAll('[aria-hidden="false"]'), o = 0; o < e.length; o++) e[o].setAttribute("aria-hidden", "false");
                    for (o = 0; o < r.length; o++) r[o].setAttribute("aria-hidden", "true");
                }
            }
            if (c.multitoggles.length)
                for (x = 0; x < c.multitoggles.length; x++) {
                    var ut = c.multitoggles[x];
                    new Toggle({
                        node: ut,
                        targets: document.querySelectorAll(ut.getAttribute("data-multitoggle")),
                        scope: document.querySelectorAll(ut.getAttribute("data-scope")),
                        isolate: document.querySelectorAll(ut.getAttribute("data-isolate")),
                    });
                    c.multitoggles[x].classList.contains("content-toggle") &&
                    ut.addEventListener("click", function () {
                        ct(this.mt.targets);
                    });
                }
            if (c.vide.length)
                for (x = 0; x < c.vide.length; x++) {
                    E = (ht = $(c.vide[x])).data("vide-options");
                    var pt = ht.data("vide-bg");
                    ht.vide(pt, E);
                    var gt = ht.data("vide").getVideoObject(),
                        mt = $(ht.find("[data-vide-toggle]"));
                    gt.addEventListener(
                        "play",
                        (function (t) {
                            return function () {
                                t.removeClass("video-paused"), t.addClass("video-playing");
                            };
                        })(ht)
                    ),
                        gt.addEventListener(
                            "pause",
                            (function (t) {
                                return function () {
                                    t.removeClass("video-playing"), t.addClass("video-paused");
                                };
                            })(ht)
                        ),
                        mt.on(
                            "click",
                            (function (t) {
                                return function (a) {
                                    a.preventDefault(), t.paused ? t.play() : t.pause();
                                };
                            })(gt)
                        ),
                        d || !n
                            ? gt.pause()
                            : document.addEventListener(
                            "scroll",
                            (function (t, a) {
                                return function () {
                                    u(t) ? a.play() : a.pause();
                                };
                            })(ht, gt)
                            );
                }
            if (c.bootstrapDateTimePicker.length)
                for (x = 0; x < c.bootstrapDateTimePicker.length; x++) {
                    var ft = $(c.bootstrapDateTimePicker[x]);
                    E = { format: "dddd DD MMMM YYYY - HH:mm" };
                    "date" === ft.attr("data-time-picker") ? ((E.format = "MMM Do YY"), (E.minDate = new Date())) : "time" === ft.attr("data-time-picker") && (E.format = "HH:mm"),
                        (E.time = "date" !== ft.attr("data-time-picker")),
                        (E.date = "time" !== ft.attr("data-time-picker")),
                        (E.shortTime = !0),
                        ft.bootstrapMaterialDatePicker(E);
                }
            if ((c.rdRange.length && !d && c.rdRange.RDRange({}), c.focusToggle.length))
                for (x = 0; x < c.focusToggle.length; x++) {
                    var ht;
                    (ht = $(c.focusToggle[x])).hover(function (t) {
                        t.preventDefault(), $(this).parents(".focus-toggle-parent").addClass("focus");
                    }),
                        ht.parents(".focus-toggle-parent").hover(
                            function () {},
                            function () {
                                $(this).removeClass("focus");
                            }
                        );
                }
            if (c.waypoint.length && !d)
                for (x = 0; x < c.waypoint.length; x++) {
                    var vt = $(c.waypoint[x]);
                    vt.on(
                        "click",
                        (function (t) {
                            return function (a) {
                                a.preventDefault(), a.stopPropagation();
                                var e = $(t.attr("data-waypoint-to")).offset().top + 2;
                                if (t.attr("data-waypoint-relative-to")) for (var r = document.querySelectorAll(t.attr("data-waypoint-relative-to")), o = 0; o < r.length; o++) e -= r[o].offsetHeight;
                                t.attr("data-waypoint-offset") && (e -= t.attr("data-waypoint-offset")), $("html, body").stop().animate({ scrollTop: e }, 800);
                            };
                        })(vt)
                    );
                }
            if (c.mParallax.length && !d && !s && !l)
                for (x = 0; x < c.mParallax.length; x++) {
                    var yt = c.mParallax[x];
                    window.addEventListener("scroll", function () {
                        bt(yt);
                    }),
                        bt(yt);
                }
            function bt(t) {
                var a = t.getBoundingClientRect().top,
                    e = t.offsetHeight,
                    r = t.getElementsByClassName("m-parallax-image")[0];
                t.getElementsByClassName("m-parallax-content")[0];
                if (window.scrollY > a + window.scrollY || window.scrollY < a + window.scrollY + e) {
                    var o = (1 - (e - Math.abs(a)) / e).toFixed(2);
                    (r.style.transform = "scale(" + (1 + 0.2 * o) + ")"), (r.style.opacity = o < 1.2 ? 1 - o * (1 / 1.2) : 0);
                }
            }
            if (c.slick.length)
                for (x = 0; x < c.slick.length; x++) {
                    var $t = $(c.slick[x]);
                    $t.on("init", function (t) {
                        y($('[data-lightgallery="group-slick"]'), "lightGallery-in-carousel"), y($('[data-lightgallery="item-slick"]'), "lightGallery-in-carousel");
                    }),
                        $t
                            .slick({
                                slidesToScroll: parseInt($t.attr("data-slide-to-scroll"), 10) || 1,
                                asNavFor: $t.attr("data-for") || !1,
                                dots: "true" === $t.attr("data-dots"),
                                infinite: !d && "true" === $t.attr("data-loop"),
                                focusOnSelect: !0,
                                arrows: "true" === $t.attr("data-arrows"),
                                swipe: "true" === $t.attr("data-swipe"),
                                autoplay: "true" === $t.attr("data-autoplay"),
                                vertical: "true" === $t.attr("data-vertical"),
                                centerMode: "true" === $t.attr("data-center-mode"),
                                variableWidth: "true" === $t.attr("data-auto-width"),
                                centerPadding: $t.attr("data-center-padding") ? $t.attr("data-center-padding") : "0.50",
                                mobileFirst: !0,
                                responsive: [
                                    { breakpoint: 0, settings: { slidesToShow: parseInt($t.attr("data-items"), 10) || 1 } },
                                    { breakpoint: 575, settings: { slidesToShow: parseInt($t.attr("data-sm-items"), 10) || 1 } },
                                    { breakpoint: 767, settings: { slidesToShow: parseInt($t.attr("data-md-items"), 10) || 1 } },
                                    { breakpoint: 991, settings: { slidesToShow: parseInt($t.attr("data-lg-items"), 10) || 1 } },
                                    { breakpoint: 1199, settings: { slidesToShow: parseInt($t.attr("data-xl-items"), 10) || 1 } },
                                ],
                            })
                            .on("afterChange", function (t, a, e, r) {
                                var o = $(this).attr("data-child");
                                o &&
                                ($(o + " .slick-slide").removeClass("slick-current"),
                                    $(o + " .slick-slide")
                                        .eq(e)
                                        .addClass("slick-current"));
                            });
                }
        });
})();
