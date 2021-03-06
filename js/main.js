(function() {
    "use strict";
    var e = this
      , t = function(e) {
        return e instanceof t ? e : this instanceof t ? void (this._wrapped = e) : new t(e)
    };
    if (t.userAgent = null,
    t.getUserAgent = function() {
        return this.userAgent
    }
    ,
    t.setUserAgent = function(e) {
        this.userAgent = e
    }
    ,
    t.isAndroid = function() {
        return this.getUserAgent().match(/Android/i)
    }
    ,
    t.isBlackBerry = function() {
        return this.getUserAgent().match(/BlackBerry/i)
    }
    ,
    t.isBlackBerryPlayBook = function() {
        return this.getUserAgent().match(/PlayBook/i)
    }
    ,
    t.isBlackBerry10 = function() {
        return this.getUserAgent().match(/BB10/i)
    }
    ,
    t.isIOS = function() {
        return this.isIPhone() || this.isIPad() || this.isIPod()
    }
    ,
    t.isIPhone = function() {
        return this.getUserAgent().match(/iPhone/i)
    }
    ,
    t.isIPad = function() {
        return this.getUserAgent().match(/iPad/i)
    }
    ,
    t.isIPod = function() {
        return this.getUserAgent().match(/iPod/i)
    }
    ,
    t.isOpera = function() {
        return this.getUserAgent().match(/Opera Mini/i)
    }
    ,
    t.isWindows = function() {
        return this.isWindowsDesktop() || this.isWindowsMobile()
    }
    ,
    t.isWindowsMobile = function() {
        return this.getUserAgent().match(/IEMobile/i)
    }
    ,
    t.isWindowsDesktop = function() {
        return this.getUserAgent().match(/WPDesktop/i)
    }
    ,
    t.isFireFox = function() {
        return this.getUserAgent().match(/Firefox/i)
    }
    ,
    t.isNexus = function() {
        return this.getUserAgent().match(/Nexus/i)
    }
    ,
    t.isKindleFire = function() {
        return this.getUserAgent().match(/Kindle Fire/i)
    }
    ,
    t.isPalm = function() {
        return this.getUserAgent().match(/PalmSource|Palm/i)
    }
    ,
    t.isAny = function() {
        var e = !1
          , i = Object.getOwnPropertyNames(t).filter(function(e) {
            return "function" == typeof t[e]
        });
        for (var n in i)
            if ("setUserAgent" !== i[n] && "getUserAgent" !== i[n] && "isAny" !== i[n] && "isWindows" !== i[n] && "isIOS" !== i[n] && t[i[n]]()) {
                e = !0;
                break
            }
        return e
    }
    ,
    "function" != typeof window && "object" != typeof window || t.setUserAgent(navigator.userAgent),
    "undefined" != typeof exports) {
        var i = function(e) {
            return e = void 0 === e || e,
            e ? function(e, i, n) {
                var a = e.headers["user-agent"] || "";
                t.setUserAgent(a),
                e.SmartPhone = t,
                "function" == typeof i.locals ? i.locals({
                    SmartPhone: t
                }) : i.locals.SmartPhone = t,
                n()
            }
            : t
        };
        "undefined" != typeof module && module.exports && (exports = module.exports = i),
        exports = i
    } else
        e.SmartPhone = t
}
).call(this),
function(e) {
    "use strict";
    var t = function(e) {
        return parseInt(e, 10) || 0
    };
    e.each(["min", "max"], function(i, n) {
        e.fn[n + "Size"] = function(e) {
            var i, a;
            return e ? (void 0 !== e.width && this.css(n + "-width", e.width),
            void 0 !== e.height && this.css(n + "-height", e.height),
            this) : (i = this.css(n + "-width"),
            a = this.css(n + "-height"),
            {
                width: "max" === n && (void 0 === i || "none" === i || t(i) === -1) && Number.MAX_VALUE || t(i),
                height: "max" === n && (void 0 === a || "none" === a || t(a) === -1) && Number.MAX_VALUE || t(a)
            })
        }
    }),
    e.fn.isVisible = function() {
        return this.is(":visible")
    }
    ,
    e.each(["border", "margin", "padding"], function(i, n) {
        e.fn[n] = function(e) {
            return e ? (void 0 !== e.top && this.css(n + "-top" + ("border" === n ? "-width" : ""), e.top),
            void 0 !== e.bottom && this.css(n + "-bottom" + ("border" === n ? "-width" : ""), e.bottom),
            void 0 !== e.left && this.css(n + "-left" + ("border" === n ? "-width" : ""), e.left),
            void 0 !== e.right && this.css(n + "-right" + ("border" === n ? "-width" : ""), e.right),
            this) : {
                top: t(this.css(n + "-top" + ("border" === n ? "-width" : ""))),
                bottom: t(this.css(n + "-bottom" + ("border" === n ? "-width" : ""))),
                left: t(this.css(n + "-left" + ("border" === n ? "-width" : ""))),
                right: t(this.css(n + "-right" + ("border" === n ? "-width" : "")))
            }
        }
    })
}(jQuery),
function(e) {
    e.fn.insightSwiper = function() {
        this.each(function() {
            var t = e(this)
              , i = t.data();
            if ("0" != i.queueInit) {
                var n = t.children(".swiper-container").first()
                  , a = i.lgItems ? i.lgItems : 1
                  , s = i.mdItems ? i.mdItems : a
                  , r = i.smItems ? i.smItems : s
                  , o = i.xsItems ? i.xsItems : r
                  , d = i.lgGutter ? i.lgGutter : 0
                  , l = i.mdGutter ? i.mdGutter : d
                  , c = i.smGutter ? i.smGutter : l
                  , h = i.xsGutter ? i.xsGutter : c
                  , p = i.speed ? i.speed : 1e3;
                if (i.slideWrap && t.children(".swiper-container").children(".swiper-wrapper").children("div").wrap("<div class='swiper-slide'></div>"),
                "auto" == a)
                    var u = {
                        slidesPerView: "auto",
                        spaceBetween: d,
                        breakpoints: {
                            767: {
                                spaceBetween: h
                            },
                            990: {
                                spaceBetween: c
                            },
                            1199: {
                                spaceBetween: l
                            }
                        }
                    };
                else {
                    var u = {
                        slidesPerView: a,
                        spaceBetween: d,
                        breakpoints: {
                            767: {
                                slidesPerView: o,
                                spaceBetween: h
                            },
                            990: {
                                slidesPerView: r,
                                spaceBetween: c
                            },
                            1199: {
                                slidesPerView: s,
                                spaceBetween: l
                            }
                        }
                    };
                    "inherit" == i.slidesPerGroup && (u.slidesPerGroup = a,
                    u.breakpoints[767].slidesPerGroup = o,
                    u.breakpoints[990].slidesPerGroup = r,
                    u.breakpoints[1199].slidesPerGroup = s)
                }
                u.el = n,
                i.slideColumns && (u.slidesPerColumn = i.slideColumns),
                i.autoHeight && (u.autoHeight = !0),
                p && (u.speed = p),
                i.effect && (u.effect = i.effect),
                i.loop && (u.loop = !0),
                i.centered && (u.centeredSlides = !0),
                i.autoplay && (u.autoplay = {
                    delay: i.autoplay,
                    disableOnInteraction: !1
                });
                var f;
                if (i.wrapTools && (f = e('<div class="swiper-tools"></div>'),
                t.append(f)),
                i.nav) {
                    var m = e('<div class="swiper-nav-button swiper-button-prev"><i class="nav-button-icon"></i></div>')
                      , g = e('<div class="swiper-nav-button swiper-button-next"><i class="nav-button-icon"></i></div>');
                    f ? f.append(m).append(g) : t.append(m).append(g),
                    u.navigation = {
                        nextEl: g,
                        prevEl: m
                    }
                }
                if (i.pagination) {
                    var v = e('<div class="swiper-pagination"></div>');
                    t.addClass("has-pagination"),
                    f ? f.append(v) : t.append(v),
                    u.pagination = {
                        el: v,
                        clickable: !0
                    }
                }
                if (i.scrollbar) {
                    var w = e('<div class="swiper-scrollbar"></div>');
                    n.prepend(w),
                    u.scrollbar = {
                        el: w,
                        draggable: !0
                    },
                    u.loop = !1
                }
                i.mousewheel && (u.mousewheel = {
                    enabled: !0
                }),
                i.vertical && (u.direction = "vertical");
                var b = new Swiper(u);
                if (i.reinitOnResize) {
                    var y;
                    e(window).resize(function() {
                        clearTimeout(y),
                        y = setTimeout(function() {
                            b.destroy(!0, !0),
                            b = new Swiper(n,u)
                        }, 300)
                    })
                }
                return e(document).trigger("insightSwiperInit", [b, t, u]),
                this
            }
        })
    }
}(jQuery),
jQuery(document).ready(function(e) {
    "use strict";
    function t(i) {
        void 0 === i && (i = q),
        E || (E = window.setInterval(function() {
            J.length ? (e(J.shift()).addClass("animate"),
            t()) : (window.clearInterval(E),
            E = null)
        }, i))
    }
    function i() {
        e(".tm-light-gallery").each(function() {
            l(e(this))
        })
    }
    function n() {
        e(".tm-popup-video").each(function() {
            var t = {
                fullScreen: !1,
                zoom: !1
            };
            e(this).lightGallery(t)
        })
    }
    function a() {
        if (1 == $insight.lazyLoadImages) {
            new LazyLoad({
                elements_selector: ".tm-lazy-load"
            })
        }
    }
    function s() {
        e(".background-marque").each(function() {
            var t = e(this)
              , i = 0
              , n = 1
              , a = 10;
            t.hasClass("to-left") && (n = -1),
            t.css("background-repeat", "repeat-x");
            var s = setInterval(function() {
                i += n,
                t.css("background-position-x", i + "px")
            }, a);
            1 == t.data("marque-pause-on-hover") && e(this).hover(function() {
                clearInterval(s)
            }, function() {
                s = setInterval(function() {
                    i += n,
                    t.css("background-position-x", i + "px")
                }, a)
            })
        })
    }
    function r() {
        e(".smooth-scroll-link").on("click", function(t) {
            var i = e(this).attr("href");
            i || (i = e(this).data("href"));
            var n = window.innerWidth;
            if (i.match(/^([.#])(.+)/)) {
                t.preventDefault();
                var a = 0;
                if (1 == $insight.header_sticky_enable && H.length > 0 && "1" == N.data("sticky") && ("left" === N.data("header-position") ? n < $insight.mobile_menu_breakpoint && (a += L) : a += L),
                n > 600) {
                    var s = e("#wpadminbar").height();
                    a += s
                }
                e.smoothScroll({
                    offset: -a,
                    scrollTarget: e(i),
                    speed: 600,
                    easing: "linear"
                })
            }
        })
    }
    function o() {
        e(".tm-animation").waypoint(function() {
            var t = this.element ? this.element : e(this);
            e(t).addClass("animate")
        }, {
            offset: "100%"
        })
    }
    function d() {
        var t = H.find("#page-navigation").find("ul").first();
        t.hasClass("sm") && (t.smartmenus({
            subMenusSubOffsetX: -2,
            subMenusSubOffsetY: -17
        }),
        t.bind({
            "show.smapi": function(t, i) {
                e(i).removeClass("hide-animation").addClass("show-animation")
            },
            "hide.smapi": function(t, i) {
                e(i).removeClass("show-animation").addClass("hide-animation")
            }
        }).on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", "ul", function(t) {
            e(this).removeClass("show-animation hide-animation"),
            t.stopPropagation()
        }))
    }
    function l(e) {
        var t = "1" === $insight.light_gallery_download
          , i = "1" === $insight.light_gallery_auto_play
          , n = "1" === $insight.light_gallery_zoom
          , a = "1" === $insight.light_gallery_full_screen
          , s = "1" === $insight.light_gallery_share
          , r = "1" === $insight.light_gallery_thumbnail
          , o = {
            selector: ".zoom",
            thumbnail: r,
            download: t,
            autoplay: i,
            zoom: n,
            share: s,
            fullScreen: a,
            hash: !1,
            animateThumb: !1,
            showThumbByDefault: !1,
            getCaptionFromTitleOrAlt: !1
        };
        e.lightGallery(o)
    }
    function c(t, i, n, a) {
        0 == n && t.each(function() {
            var t = e(this).children('a[href*="#"]:not([href="#"])');
            if (t.attr("href") == a) {
                if (i) {
                    var n = e(this).position().left + t.padding().left
                      , s = t.width();
                    i.stop().animate({
                        left: n,
                        width: s
                    }),
                    i.attr("data-left", n).attr("data-width", s)
                }
                return e(this).siblings("li").removeClass("current-menu-item"),
                e(this).addClass("current-menu-item"),
                !0
            }
        })
    }
    function h() {
        if (D.hasClass("one-page")) {
            var t, i, n, a = e("#page-header"), s = a.children("#page-header-inner"), r = s.data("magic-line"), o = e("#page-navigation").find(".menu__container").first(), d = o.children(".menu-item"), l = d.children('a[href^="#"]:not([href="#"])'), h = !1;
            r && (o.append('<li id="magic-line"></li>'),
            n = e("#magic-line")),
            d.each(function() {
                var t = e(this).children('a[href^="#"]:not([href="#"])');
                if (t.length > 0) {
                    var i = t.attr("href");
                    e(i).length > 0 && (e(i).waypoint(function(e) {
                        "down" === e && c(d, n, h, i)
                    }, {
                        offset: "25%"
                    }),
                    e(i).waypoint(function(e) {
                        "up" === e && c(d, n, h, i)
                    }, {
                        offset: "-25%"
                    }))
                }
            }),
            n && d.hover(function() {
                t = e(this);
                var a = t.children("a")
                  , s = e(this).position().left + a.padding().left;
                i = t.children("a").width(),
                n.stop().animate({
                    left: s,
                    width: i
                })
            }, function() {
                e(this).hasClass("current-menu-item") || n.stop().animate({
                    left: n.attr("data-left"),
                    width: n.attr("data-width")
                })
            }),
            l.on("click", function() {
                var t = e(this)
                  , i = e(this).attr("href")
                  , a = 0;
                D.hasClass("admin-bar") && (a += 32),
                1 == R && "1" == s.data("sticky") && (a += L,
                a = -a);
                var r = t.parent("li");
                if (n) {
                    var o = r.position().left + t.padding().left;
                    n.attr("data-left", o).attr("data-width", t.width())
                }
                return r.siblings("li").removeClass("current-menu-item"),
                r.addClass("current-menu-item"),
                e.smoothScroll({
                    offset: a,
                    scrollTarget: e(i),
                    speed: 600,
                    easing: "linear",
                    beforeScroll: function() {
                        h = !0
                    },
                    afterScroll: function() {
                        h = !1
                    }
                }),
                !1
            })
        }
    }
    function p() {
        var t = e("#page-footer-wrapper");
        if (t.hasClass("parallax") && !D.hasClass("page-template-one-page-scroll") && t.length > 0) {
            var i = W.children(".content-wrapper");
            if (M >= 1024) {
                var n = t.height()+45;
                D.addClass("page-footer-parallax"),
                i.css({
                    marginBottom: n
                })
            } else
                D.removeClass("page-footer-parallax"),
                i.css({
                    marginBottom: 0
                })
        }
    }
    function u() {
        if (1 == $insight.scroll_top_enable) {
            var t = e("#page-scroll-up")
              , i = 0;
            G.scroll(function() {
                var n = e(this).scrollTop();
                n > i ? t.removeClass("show") : G.scrollTop() > 200 ? t.addClass("show") : t.removeClass("show"),
                i = n
            }),
            t.on("click", function(t) {
                e("html, body").animate({
                    scrollTop: 0
                }, 600),
                t.preventDefault()
            })
        }
    }
    function f() {
        D.addClass("page-mobile-menu-opened")
    }
    function m() {
        D.removeClass("page-mobile-menu-opened")
    }
    function g() {
        var e = $insight.mobile_menu_breakpoint;
        M <= e ? D.removeClass("desktop-menu").addClass("mobile-menu") : D.addClass("desktop-menu").removeClass("mobile-menu")
    }
    function v() {
        e("#page-open-mobile-menu").on("click", function(e) {
            e.preventDefault(),
            f()
        }),
        e("#page-close-mobile-menu").on("click", function(e) {
            e.preventDefault(),
            m()
        });
        var t = e("#mobile-menu-primary");
        t.on("click", "a", function(t) {
            var i = e(this)
              , n = e(this).parent("li")
              , a = i.attr("href");
            if (D.hasClass("one-page") && a && a.match(/^([.#])(.+)/)) {
                m();
                var s = 0;
                return D.hasClass("admin-bar") && (s += 32),
                1 == R && "1" == N.data("sticky") && (s += L),
                s > 0 && (s = -s),
                n.siblings("li").removeClass("current-menu-item"),
                n.addClass("current-menu-item"),
                setTimeout(function() {
                    e.smoothScroll({
                        offset: s,
                        scrollTarget: e(a),
                        speed: 600,
                        easing: "linear"
                    })
                }, 300),
                !1
            }
        }),
        t.on("click", ".toggle-sub-menu", function(t) {
            var i = e(this).parents("li").first();
            t.preventDefault(),
            t.stopPropagation();
            var n = i.siblings(".opened");
            n.removeClass("opened"),
            n.find(".opened").removeClass("opened"),
            n.find(".sub-menu").stop().slideUp(),
            i.hasClass("opened") ? (i.removeClass("opened"),
            i.find(".opened").removeClass("opened"),
            i.find(".sub-menu").stop().slideUp()) : (i.addClass("opened"),
            i.children(".sub-menu").stop().slideDown())
        });
        var i = e("#page-mobile-main-menu")
          , n = i.children(".page-mobile-menu-header").outerHeight()
          , a = window.innerHeight
          , s = a - n;
        e(".page-mobile-menu-content").slimScroll({
            height: s + "px",
            size: "5px",
            borderRadius: 0,
            distance: 0
        })
    }
    function w() {
        var t = e("#off-canvas-menu-primary")
          , i = t.children("li");
        e("#page-open-main-menu").on("click", function(e) {
            e.preventDefault(),
            D.addClass("page-off-canvas-menu-opened")
        }),
        e("#page-close-main-menu").on("click", function(e) {
            e.preventDefault(),
            t.fadeOut(function() {
                D.removeClass("page-off-canvas-menu-opened"),
                t.fadeIn(),
                t.find(".sub-menu").slideUp()
            })
        });
        var n = .1;
        i.each(function() {
            e(this)[0].setAttribute("style", "-webkit-transition-delay:" + n + "s; -moz-transition-delay:" + n + "s; -ms-transition-delay:" + n + "s; -o-transition-delay:" + n + "s; transition-delay:" + n + "s"),
            n += .1
        }),
        t.on("click", ".menu-item-has-children > a", function(t) {
            t.preventDefault(),
            t.stopPropagation();
            var i = e(this).parent("li")
              , n = i.siblings(".opened");
            n.removeClass("opened"),
            n.find(".opened").removeClass("opened"),
            n.find(".sub-menu").stop().slideUp(),
            i.hasClass("opened") ? (i.removeClass("opened"),
            i.find(".opened").removeClass("opened"),
            i.find(".sub-menu").stop().slideUp()) : (i.addClass("opened"),
            i.children(".sub-menu").stop().slideDown())
        })
    }
    function b() {
        if (1 == $insight.header_sticky_enable && H.length > 0 && "1" == N.data("sticky"))
            if ("left" != N.data("header-position")) {
                var e = N.offset().top
                  , t = N.outerHeight()
                  , i = e + t;
                H.headroom({
                    offset: i,
                    onTop: function() {
                        H.hasClass("header-layout-fixed") || W.css({
                            paddingTop: 0
                        })
                    },
                    onNotTop: function() {
                        H.hasClass("header-layout-fixed") || W.css({
                            paddingTop: t + "px"
                        })
                    }
                })
            } else if (M <= $insight.mobile_menu_breakpoint) {
                if (!H.data("headroom")) {
                    var e = N.offset().top
                      , t = N.outerHeight()
                      , i = e + t;
                    H.headroom({
                        offset: i
                    })
                }
            } else
                H.data("headroom") && (H.data("headroom").destroy(),
                H.removeData("headroom"))
    }
    function y() {
        var t = e("#page-popup-search")
          , i = t.find(".search-field");
        e("#btn-open-popup-search").on("click", function(e) {
            e.preventDefault(),
            D.addClass("popup-search-opened"),
            z.css({
                overflow: "hidden"
            }),
            i.val(""),
            setTimeout(function() {
                i.focus()
            }, 500)
        }),
        e("#popup-search-close").on("click", function(e) {
            e.preventDefault(),
            D.removeClass("popup-search-opened"),
            z.css({
                overflow: ""
            })
        }),
        e(document).on("keyup", function(e) {
            27 == e.keyCode && (D.removeClass("popup-search-opened"),
            z.css({
                overflow: ""
            }))
        })
    }
    function C() {
        if ("left" == N.data("header-position")) {
            var t = window.innerWidth
              , i = parseInt(D.data("content-width"));
            if (t <= $insight.mobile_menu_breakpoint)
                z.css({
                    marginLeft: 0
                });
            else {
                var n = N.outerWidth();
                z.css({
                    marginLeft: n + "px"
                });
                var a = e("#page-main-content").children("article").children(".vc_row")
                  , s = e("#page").width();
                a.each(function() {
                    if (e(this).attr("data-vc-full-width")) {
                        var t = 0;
                        s > $insight.mobile_menu_breakpoint && (t = -((s - i) / 2) + "px");
                        var n = s + "px";
                        if (e(this).css({
                            left: t,
                            width: n
                        }),
                        e(this).attr("data-vc-stretch-content"))
                            ;
                        else {
                            var a = 0;
                            s > $insight.mobile_menu_breakpoint && (a = (s - i) / 2),
                            e(this).css({
                                paddingLeft: a,
                                paddingRight: a
                            })
                        }
                    }
                }),
                "undefined" != typeof revapi6 && revapi6.revredraw()
            }
        }
    }
    function x() {
        if ("1" == N.data("has-fixed-section")) {
            var t = window.innerWidth
              , i = (window.innerHeight,
            parseInt(D.data("content-width")))
              , n = window.innerHeight
              , a = N.outerHeight()
              , s = N.outerHeight();
            if (D.hasClass("admin-bar")) {
                var r = e("#wpadminbar").outerHeight();
                n -= r,
                s += r
            }
            n -= a,
            s -= 1;
            var o = e("#header-left-fixed")
              , d = e("#header-right-fixed");
            if (o.length > 0) {
                o.css({
                    top: s + "px",
                    height: n + "px"
                });
                var l = o.children(".inner");
                "1" == l.data("slim-scroll") && l.slimScroll({
                    height: n + "px",
                    size: "5px",
                    borderRadius: 0,
                    distance: 0
                })
            }
            if (d.length > 0) {
                d.css({
                    top: s + "px",
                    height: n + "px"
                });
                var c = d.children(".inner");
                "1" == c.data("slim-scroll") && c.slimScroll({
                    height: n + "px",
                    size: "5px",
                    borderRadius: 0,
                    distance: 0
                })
            }
            if (t <= $insight.mobile_menu_breakpoint)
                z.css({
                    marginLeft: 0
                }),
                z.css({
                    marginRight: 0
                });
            else {
                if (o.length > 0) {
                    var h = o.outerWidth();
                    z.css({
                        marginLeft: h + "px"
                    })
                }
                if (d.length > 0) {
                    var p = d.outerWidth();
                    z.css({
                        marginRight: p + "px"
                    })
                }
                var u = W.find(".vc_row")
                  , f = W.width();
                u.each(function() {
                    if (e(this).attr("data-vc-full-width")) {
                        var t = 0;
                        f > $insight.mobile_menu_breakpoint && (t = -((f - i) / 2) + "px");
                        var n = f + "px";
                        if (e(this).css({
                            left: t,
                            width: n
                        }),
                        e(this).attr("data-vc-stretch-content"))
                            ;
                        else {
                            var a = 0;
                            f > $insight.mobile_menu_breakpoint && (a = (f - i) / 2),
                            e(this).css({
                                paddingLeft: a,
                                paddingRight: a
                            })
                        }
                    }
                }),
                "undefined" != typeof revapi6 && revapi6.revredraw()
            }
        }
    }
    function k() {
        if (D.hasClass("boxed")) {
            var t = e("#page").outerWidth();
            e("#page-content").find(".vc_row").each(function() {
                1 == e(this).data("vc-stretch-content") && 1 == e(this).data("vc-stretch-content") && e(this).css({
                    left: 0,
                    width: t + "px"
                })
            })
        }
    }
    function _() {
        if (D.hasClass("single-portfolio-style-fullscreen")) {
            var t = window.innerHeight;
            if (D.hasClass("admin-bar")) {
                var i = e("#wpadminbar").outerHeight();
                t -= i
            }
            e("#portfolio-main-info-wrap").slimScroll({
                height: t + "px",
                size: "5px",
                borderRadius: 0,
                distance: 0
            })
        }
    }
    function S() {
        if (D.hasClass("error404")) {
            var t = e("#page").children(".content-wrapper")
              , i = e(window).height();
            t.css({
                "min-height": i
            }),
            e(window).resize(function() {
                i = e(window).height(),
                t.css({
                    "min-height": i
                })
            })
        }
    }
    function I() {
        e(".tm-testimonial").each(function() {
            var t = e(this);
            if (t.hasClass("style-1")) {
                var i = t.children(".swiper-container").first()
                  , n = t.data("lg-items") ? t.data("lg-items") : 1
                  , a = t.data("md-items") ? t.data("md-items") : n
                  , s = t.data("sm-items") ? t.data("sm-items") : a
                  , r = t.data("xs-items") ? t.data("xs-items") : s
                  , o = t.data("lg-gutter") ? t.data("lg-gutter") : 0
                  , d = t.data("md-gutter") ? t.data("md-gutter") : o
                  , l = t.data("sm-gutter") ? t.data("sm-gutter") : d
                  , c = t.data("xs-gutter") ? t.data("xs-gutter") : l
                  , h = t.data("autoplay")
                  , p = t.data("speed") ? t.data("speed") : 1e3
                  , u = t.data("nav")
                  , f = t.data("pagination")
                  , m = {
                    loop: !0,
                    slidesPerView: n,
                    spaceBetween: o,
                    breakpoints: {
                        767: {
                            slidesPerView: r,
                            spaceBetween: c
                        },
                        990: {
                            slidesPerView: s,
                            spaceBetween: l
                        },
                        1199: {
                            slidesPerView: a,
                            spaceBetween: d
                        }
                    }
                };
                if (p && (m.speed = p),
                h && (m.autoplay = {
                    delay: h,
                    disableOnInteraction: !1
                }),
                u) {
                    var g = e('<div class="swiper-nav-button swiper-button-prev"><i class="nav-button-icon"></i></div>')
                      , v = e('<div class="swiper-nav-button swiper-button-next"><i class="nav-button-icon"></i></div>');
                    t.append(g).append(v),
                    m.navigation = {
                        nextEl: v,
                        prevEl: g
                    }
                }
                if (f) {
                    var w = e('<div class="swiper-pagination"></div>');
                    t.addClass("has-pagination"),
                    t.append(w),
                    m.pagination = {
                        el: w,
                        clickable: !0
                    }
                }
                var b = new Swiper(i,m)
                  , y = t.children(".tm-testimonial-pagination").children(".swiper-container").first()
                  , C = new Swiper(y,{
                    slidesPerView: 3,
                    spaceBetween: 30,
                    centeredSlides: !0,
                    loop: !0
                });
                b.on("slideChange", function() {
                    var t = y.children(".swiper-wrapper").children(".swiper-slide");
                    t.each(function(t, i) {
                        return !!e(this).hasClass("swiper-slide-duplicate") || void (e(this).data("swiper-slide-index") === b.realIndex && C.slideTo(t))
                    })
                }),
                C.on("slideChange", function() {
                    var t = i.children(".swiper-wrapper").children(".swiper-slide");
                    t.each(function(t, i) {
                        return !!e(this).hasClass("swiper-slide-duplicate") || void (e(this).data("swiper-slide-index") === C.realIndex && b.slideTo(t))
                    })
                }),
                C.on("click", function() {
                    C.slideTo(C.clickedIndex)
                })
            }
        })
    }
    function P() {
        e(".tm-grid-wrapper").each(function() {
            var t, i = e(this), n = i.find(".tm-grid"), a = i.data("gutter") ? i.data("gutter") : 0, s = i.data("item-wrap");
            "1" == s && n.children().not(".grid-sizer").wrap('<div class="grid-item"></div>');
            var r = n.children(".grid-item");
            if (e(document).trigger("insightGridBeforeInit", [i, n]),
            "masonry" == i.data("type")) {
                var o = {
                    itemSelector: ".grid-item",
                    percentPosition: !0
                };
                i.data("grid-fitrows") ? o.layoutMode = "fitRows" : (o.layoutMode = "packery",
                o.packery = {
                    columnWidth: ".grid-sizer"
                }),
                "fitRows" === o.layoutMode ? (o.fitRows = {},
                o.fitRows.gutter = a) : "packery" === o.layoutMode ? o.packery.gutter = a : o.masonry.gutter = a,
                n.hasClass("has-animation") && (o.transitionDuration = 0),
                e(window).resize(function() {
                    A(i, n, o),
                    clearTimeout(Q),
                    Q = setTimeout(function() {
                        A(i, n, o)
                    }, 300)
                }),
                A(i, n),
                t = n.imagesLoaded(function() {
                    n.isotope(o),
                    i.data("match-height") && r.matchHeight(),
                    e(document).trigger("insightGridInit", [i, n, o])
                }),
                t.one("arrangeComplete", function() {
                    $(n, r),
                    U(i, n)
                })
            } else if ("justified" == i.data("type")) {
                var d = i.data("justified-height") ? i.data("justified-height") : 300
                  , l = i.data("justified-max-height") ? i.data("justified-max-height") : 0
                  , c = i.data("justified-last-row") ? i.data("justified-last-row") : "justify"
                  , h = {
                    rowHeight: d,
                    margins: a,
                    border: 0,
                    lastRow: c
                };
                l && l > 0 && (h.maxRowHeight = l),
                n.justifiedGallery(h),
                U(i, n),
                $(n, r)
            } else
                U(i, n),
                $(n, r);
            if (O(i, n),
            "loadmore" == i.data("pagination"))
                i.children(".tm-grid-pagination").find(".tm-grid-loadmore-btn").on("click", function(t) {
                    if (t.preventDefault(),
                    !V) {
                        e(this).hide();
                        var a = i.find(".tm-grid-query").first()
                          , s = jQuery.parseJSON(a.val());
                        s.paged++,
                        a.val(JSON.stringify(s)),
                        j(i, n, !0)
                    }
                });
            else if ("loadmore_alt" == i.data("pagination")) {
                var p = e(i.data("pagination-custom-button-id"));
                p.on("click", function(t) {
                    if (t.preventDefault(),
                    !V) {
                        e(this).hide();
                        var a = i.find(".tm-grid-query").first()
                          , s = jQuery.parseJSON(a.val());
                        s.paged++,
                        a.val(JSON.stringify(s)),
                        j(i, n, !0)
                    }
                })
            } else
                "infinite" == i.data("pagination") && e(".tm-grid-pagination", i).waypoint(function(e) {
                    if ("down" === e && !V) {
                        var t = i.find(".tm-grid-query").first()
                          , a = jQuery.parseJSON(t.val());
                        a.paged++,
                        t.val(JSON.stringify(a)),
                        j(i, n, !0)
                    }
                }, {
                    offset: "100%"
                });
            e(document).on("insightGridInfinityLoad", function(e) {
                var t = i.find(".tm-grid-query").first()
                  , a = jQuery.parseJSON(t.val());
                a.paged = 1,
                t.val(JSON.stringify(a)),
                j(i, n)
            })
        })
    }
    function A(t, i, n) {
        var a = window.innerWidth
          , s = i[0].getBoundingClientRect().width
          , r = t.data("gutter") ? t.data("gutter") : 0
          , o = 1
          , d = t.data("lg-columns") ? t.data("lg-columns") : 1
          , l = t.data("md-columns") ? t.data("md-columns") : d
          , c = t.data("sm-columns") ? t.data("sm-columns") : l
          , h = t.data("xs-columns") ? t.data("xs-columns") : c;
        o = a >= 1200 ? d : a >= 961 ? l : a >= 641 ? c : h;
        var p = (o - 1) * r
          , u = (s - p) / o;
        u = Math.floor(u);
        var f = u;
        o > 1 && (f = 2 * u + r),
        i.children(".grid-sizer").css({
            width: u + "px"
        });
        var m = u
          , g = m
          , v = t.data("grid-ratio");
        if (v) {
            var w = v.split(":")
              , b = parseFloat(w[0])
              , y = parseFloat(w[1]);
            m = u * y / b,
            m = Math.floor(m),
            g = o > 1 ? 2 * m + r : m
        }
        i.children(".grid-item").each(function() {
            "2" == e(this).data("width") ? e(this).css({
                width: f + "px"
            }) : e(this).css({
                width: u + "px"
            }),
            v && ("2" == e(this).data("height") ? e(this).css({
                height: g + "px"
            }) : e(this).css({
                height: m + "px"
            }))
        }),
        n && i.isotope("layout", n)
    }
    function j(t, i, n) {
        var a = t.children(".tm-grid-pagination").find(".tm-loader");
        a.css({
            display: "inline-block"
        }),
        setTimeout(function() {
            var s = t.find(".tm-grid-query").first()
              , r = jQuery.parseJSON(s.val())
              , o = e.param(r);
            e.ajax({
                url: $insight.ajaxurl,
                type: "POST",
                data: o,
                dataType: "json",
                success: function(o) {
                    o.found_posts && (r.found_posts = o.found_posts,
                    t.find(".result-found-text").children("mark").text(o.found_posts)),
                    o.max_num_pages && (r.max_num_pages = o.max_num_pages),
                    o.count && (r.count = o.count),
                    s.val(JSON.stringify(r));
                    var d = o.template
                      , l = e(d);
                    if ("masonry" == t.data("type"))
                        1 != n && i.isotope("remove", i.isotope("getItemElements")),
                        i.isotope().append(l).isotope("appended", l).imagesLoaded().always(function() {
                            i.isotope("layout"),
                            t.data("match-height") && i.children(".grid-item").matchHeight(),
                            e(document).trigger("insightGridUpdate", [t, i, l])
                        }),
                        U(t, i),
                        A(t, i);
                    else if ("swiper" == t.data("type")) {
                        var c = t.find(".swiper-container")[0].swiper;
                        c.appendSlide(l),
                        c.update()
                    } else
                        "justified" == t.data("type") ? (i.append(d),
                        i.justifiedGallery("norewind")) : i.append(l);
                    $(i, l),
                    T(i, l),
                    B(t, r),
                    a.hide()
                },
                error: function(e) {
                    alert(e)
                }
            })
        }, 500)
    }
    function T(t, i) {
        1 == t.data("grid-has-gallery") && i.each(function() {
            if (e(this).hasClass("format-gallery")) {
                var t = e(this).children(".post-gallery");
                insightInitSwiper(t)
            }
        })
    }
    function B(t, i) {
        if (i.found_posts <= i.paged * i.posts_per_page) {
            if ("loadmore_alt" === t.data("pagination")) {
                var n = e(t.data("pagination-custom-button-id"));
                n.hide()
            } else
                t.children(".tm-grid-pagination").hide();
            t.children(".tm-grid-messages").show(1),
            setTimeout(function() {
                t.children(".tm-grid-messages").remove()
            }, 5e3)
        } else if ("loadmore_alt" === t.data("pagination")) {
            var n = e(t.data("pagination-custom-button-id"));
            n.show()
        } else
            t.children(".tm-grid-pagination").show(),
            t.children(".tm-grid-pagination").find(".tm-grid-loadmore-btn").show()
    }
    function U(t, i) {
        if (1 == t.children(".tm-filter-button-group").data("filter-counter")) {
            var n = i.children(".grid-item")
              , a = n.length;
            t.find(".btn-filter").each(function() {
                var t = e(this).data("filter")
                  , i = 0;
                "*" == t ? e(this).children(".filter-counter").length > 0 ? e(this).children(".filter-counter").text(a) : e(this).append('<span class="filter-counter">' + a + "</span>") : (t = t.replace(".", ""),
                n.each(function() {
                    e(this).hasClass(t) && i++
                }),
                e(this).children(".filter-counter").length > 0 ? e(this).children(".filter-counter").text(i) : e(this).append('<span class="filter-counter">' + i + "</span>"))
            })
        }
    }
    function O(i, n) {
        i.children(".tm-filter-button-group").on("click", ".btn-filter", function() {
            if (!e(this).hasClass("current")) {
                var a = e(this).attr("data-filter");
                if ("masonry" == i.data("type"))
                    n.children(".grid-item").each(function() {
                        e(this).removeClass("animate")
                    }),
                    n.isotope({
                        filter: a
                    }),
                    n.hasClass("has-animation") && n.children(".grid-item:not(.isotope-hidden)").each(function() {
                        J.push(e(this)),
                        t()
                    });
                else if ("swiper" == i.data("type")) {
                    a = a.replace(".", ""),
                    n.children(".grid-item").each(function() {
                        "*" == a ? (e(this).show(),
                        e(this).addClass("animate")) : e(this).hasClass(a) ? (e(this).show(),
                        e(this).addClass("animate")) : e(this).hide()
                    });
                    var s = i.children(".tm-swiper").children(".swiper-container")[0].swiper;
                    s.update(),
                    s.slideTo(0)
                } else
                    "justified" == i.data("type") && ("*" == a ? n.justifiedGallery({
                        filter: !1
                    }) : n.justifiedGallery({
                        filter: a
                    }));
                e(this).siblings().removeClass("current"),
                e(this).addClass("current")
            }
        })
    }
    function $(i, n) {
        i.hasClass("has-animation") && n.waypoint(function() {
            var i = this.element ? this.element : e(this);
            J.push(i),
            t()
        }, {
            offset: "90%",
            triggerOnce: !0
        })
    }
    var G = e(window)
      , z = e("html")
      , D = e("body")
      , W = e("#page")
      , H = e("#page-header")
      , N = e("#page-header-inner")
      , R = (e("#page-content"),
    $insight.header_sticky_enable)
      , L = parseInt($insight.header_sticky_height)
      , M = window.innerWidth
      , V = !1;
    e(document).ajaxStart(function() {
        V = !0
    }).ajaxStop(function() {
        V = !1
    });
    var E, J = [], q = 200;
    e(window).on("resize", function() {
        D.addClass("window-resized"),
        M = window.innerWidth,
        g(),
        k(),
        x(),
        C(),
        b(),
        p(),
        _()
    }),
    e(window).on("load", function() {
        D.addClass("loaded"),
        setTimeout(function() {
            e("#page-preloader").remove()
        }, 600)
    }),
    e(".tm-animation-queue").each(function() {
        var i = e(this).data("animation-delay");
        e(this).children(".item").waypoint(function() {
            var n = this.element ? this.element : e(this);
            J.push(n),
            t(i)
        }, {
            offset: "90%",
            triggerOnce: !0
        })
    }),
    g(),
    k(),
    b(),
    d(),
    S(),
    s(),
    _(),
    I(),
    u(),
    e("p:empty").remove(),
    x(),
    C(),
    o(),
    P(),
    e(".tm-swiper").insightSwiper(),
    setTimeout(function() {
        h()
    }, 100),
    p(),
    a(),
    r(),
    i(),
    n(),
    y(),
    v(),
    w();
    var Q, F = Isotope.Item.prototype.reveal, X = Isotope.Item.prototype.hide;
    Isotope.Item.prototype.reveal = function() {
        F.apply(this, arguments),
        e(this.element).removeClass("isotope-hidden")
    }
    ,
    Isotope.Item.prototype.hide = function() {
        X.apply(this, arguments),
        e(this.element).addClass("isotope-hidden")
    }
}),
function(e) {
    "use strict";
    e(document).on("click", ".sl-button", function() {
        var t, i = e(this), n = i.attr("data-post-id"), a = i.attr("data-nonce"), s = i.attr("data-iscomment");
        t = e("1" === s ? ".sl-comment-button-" + n : ".sl-button-" + n);
        var r = t.next(".sl-loader");
        return "" !== n && e.ajax({
            type: "POST",
            url: $insight.ajaxurl,
            data: {
                action: "process_simple_like",
                post_id: n,
                nonce: a,
                is_comment: s
            },
            beforeSend: function() {
                r.html('&nbsp;<div class="loader">Loading&hellip;</div>')
            },
            success: function(e) {
                var i = e.icon
                  , n = e.count;
                if (t.html(i + n),
                "unliked" === e.status) {
                    var a = $insight.like;
                    t.prop("title", a),
                    t.removeClass("liked")
                } else {
                    var s = $insight.unlike;
                    t.prop("title", s),
                    t.addClass("liked")
                }
                r.empty()
            }
        }),
        !1
    })
}(jQuery);
