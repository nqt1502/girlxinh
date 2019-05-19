var backgroundElements = "div#tips,.thumb .label,.post-labels a,.copyright-inner,.tr-caption,.popular-post-item .item .item_content .item_labels a,#header-navigation,#header-search,#header-search input,#myBar,.popular-post-list .item_labels li a",
    colorElements = "div#bang-thong-tin,.post-body h2,.post-body h3,.post-body h4,#popular-wrapper,#footer-wrapper,.post-outer h1.post-title,#grouped-slide .owl-nav button,#sidebar h3.title,.blog-posts .post-item,a:not(.popular-post-list .item_content a),.popular-post-list .item_labels li a,.nav>li>ul,.lds-ripple div";
window.addEventListener("load", function() {
    var t, e, w, a, i, n, s, o, r = $(backgroundElements),
        h = $(colorElements),
        l = $("body").attr("data-type");
    if (window.jQuery) {
        console.log("Jquery load successfully"), (a = function(i, t) {
            function p() {
                var t, e;
                this.q = [], this.add = function(t) {
                    this.q.push(t)
                }, this.call = function() {
                    for (t = 0, e = this.q.length; t < e; t++) this.q[t].call()
                }
            }

            function e(t, e) {
                if (t.resizedAttached) {
                    if (t.resizedAttached) return void t.resizedAttached.add(e)
                } else t.resizedAttached = new p, t.resizedAttached.add(e);
                t.resizeSensor = document.createElement("div"), t.resizeSensor.className = "resize-sensor";
                var i, n, s = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
                    o = "position: absolute; left: 0; top: 0; transition: 0s;";
                t.resizeSensor.style.cssText = s, t.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + s + '"><div style="' + o + '"></div></div><div class="resize-sensor-shrink" style="' + s + '"><div style="' + o + ' width: 200%; height: 200%"></div></div>', t.appendChild(t.resizeSensor), {
                    fixed: 1,
                    absolute: 1
                } [(i = t, n = "position", i.currentStyle ? i.currentStyle[n] : window.getComputedStyle ? window.getComputedStyle(i, null).getPropertyValue(n) : i.style[n])] || (t.style.position = "relative");
                var r, a, l = t.resizeSensor.childNodes[0],
                    h = l.childNodes[0],
                    d = t.resizeSensor.childNodes[1],
                    c = (d.childNodes[0], function() {
                        h.style.width = l.offsetWidth + 10 + "px", h.style.height = l.offsetHeight + 10 + "px", l.scrollLeft = l.scrollWidth, l.scrollTop = l.scrollHeight, d.scrollLeft = d.scrollWidth, d.scrollTop = d.scrollHeight, r = t.offsetWidth, a = t.offsetHeight
                    });
                c();
                var u = function(t, e, i) {
                        t.attachEvent ? t.attachEvent("on" + e, i) : t.addEventListener(e, i)
                    },
                    f = function() {
                        t.offsetWidth == r && t.offsetHeight == a || t.resizedAttached && t.resizedAttached.call(), c()
                    };
                u(l, "scroll", f), u(d, "scroll", f)
            }
            var n = Object.prototype.toString.call(i),
                s = "[object Array]" === n || "[object NodeList]" === n || "[object HTMLCollection]" === n || "undefined" != typeof jQuery && i instanceof jQuery || "undefined" != typeof Elements && i instanceof Elements;
            if (s)
                for (var o = 0, r = i.length; o < r; o++) e(i[o], t);
            else e(i, t);
            this.detach = function() {
                if (s)
                    for (var t = 0, e = i.length; t < e; t++) a.detach(i[t]);
                else a.detach(i)
            }
        }).detach = function(t) {
            t.resizeSensor && (t.removeChild(t.resizeSensor), delete t.resizeSensor, delete t.resizedAttached)
        }, "undefined" != typeof module && void 0 !== module.exports ? module.exports = a : window.ResizeSensor = a, (w = jQuery).fn.theiaStickySidebar = function(t) {
            function e(t, e) {
                return !0 === t.initialized || !(w("body").width() < t.minWidth) && (i = e, (C = t).initialized = !0, 0 === w("#theia-sticky-sidebar-stylesheet-" + C.namespace).length && w("head").append(w('<style id="theia-sticky-sidebar-stylesheet-' + C.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), i.each(function() {
                    function y() {
                        t.fixedScrollTop = 0, t.sidebar.css({
                            "min-height": "1px"
                        }), t.stickySidebar.css({
                            position: "static",
                            width: "",
                            transform: "none"
                        })
                    }
                    var t = {};
                    if (t.sidebar = w(this), t.options = C || {}, t.container = w(t.options.containerSelector), 0 == t.container.length && (t.container = t.sidebar.parent()), t.sidebar.parents().css("-webkit-transform", "none"), t.sidebar.css({
                            position: t.options.defaultPosition,
                            overflow: "visible",
                            "-webkit-box-sizing": "border-box",
                            "-moz-box-sizing": "border-box",
                            "box-sizing": "border-box"
                        }), t.stickySidebar = t.sidebar.find(".theiaStickySidebar"), 0 == t.stickySidebar.length) {
                        var i = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                        t.sidebar.find("script").filter(function(t, e) {
                            return 0 === e.type.length || e.type.match(i)
                        }).remove(), t.stickySidebar = w("<div>").addClass("theiaStickySidebar").append(t.sidebar.children()), t.sidebar.append(t.stickySidebar)
                    }
                    t.marginBottom = parseInt(t.sidebar.css("margin-bottom")), t.paddingTop = parseInt(t.sidebar.css("padding-top")), t.paddingBottom = parseInt(t.sidebar.css("padding-bottom"));
                    var e, n, s, o = t.stickySidebar.offset().top,
                        r = t.stickySidebar.outerHeight();
                    t.stickySidebar.css("padding-top", 1), t.stickySidebar.css("padding-bottom", 1), o -= t.stickySidebar.offset().top, r = t.stickySidebar.outerHeight() - r - o, t.stickySidebarPaddingTop = 0 == o ? (t.stickySidebar.css("padding-top", 0), 0) : 1, t.stickySidebarPaddingBottom = 0 == r ? (t.stickySidebar.css("padding-bottom", 0), 0) : 1, t.previousScrollTop = null, t.fixedScrollTop = 0, y(), t.onScroll = function(t) {
                        if (t.stickySidebar.is(":visible")) {
                            if (w("body").width() < t.options.minWidth) return void y();
                            if (t.options.disableOnResponsiveLayouts) {
                                var e = t.sidebar.outerWidth("none" == t.sidebar.css("float"));
                                if (e + 50 > t.container.width()) return void y()
                            }
                            var i = w(document).scrollTop(),
                                n = "static";
                            if (i >= t.sidebar.offset().top + (t.paddingTop - t.options.additionalMarginTop)) {
                                var s, o = t.paddingTop + C.additionalMarginTop,
                                    r = t.paddingBottom + t.marginBottom + C.additionalMarginBottom,
                                    a = t.sidebar.offset().top,
                                    l = t.sidebar.offset().top + (v = t.container, b = v.height(), v.children().each(function() {
                                        b = Math.max(b, w(this).height())
                                    }), b),
                                    h = 0 + C.additionalMarginTop,
                                    d = t.stickySidebar.outerHeight() + o + r < w(window).height();
                                s = d ? h + t.stickySidebar.outerHeight() : w(window).height() - t.marginBottom - t.paddingBottom - C.additionalMarginBottom;
                                var c = a - i + t.paddingTop,
                                    u = l - i - t.paddingBottom - t.marginBottom,
                                    f = t.stickySidebar.offset().top - i,
                                    p = t.previousScrollTop - i;
                                "fixed" == t.stickySidebar.css("position") && "modern" == t.options.sidebarBehavior && (f += p), "stick-to-top" == t.options.sidebarBehavior && (f = C.additionalMarginTop), "stick-to-bottom" == t.options.sidebarBehavior && (f = s - t.stickySidebar.outerHeight()), f = 0 < p ? Math.min(f, h) : Math.max(f, s - t.stickySidebar.outerHeight()), f = Math.max(f, c), f = Math.min(f, u - t.stickySidebar.outerHeight());
                                var g = t.container.height() == t.stickySidebar.outerHeight();
                                n = !g && f == h || !g && f == s - t.stickySidebar.outerHeight() ? "fixed" : i + f - t.sidebar.offset().top - t.paddingTop <= C.additionalMarginTop ? "static" : "absolute"
                            }
                            if ("fixed" == n) {
                                var A = w(document).scrollLeft();
                                t.stickySidebar.css({
                                    position: "fixed",
                                    width: x(t.stickySidebar) + "px",
                                    transform: "translateY(" + f + "px)",
                                    left: t.sidebar.offset().left + parseInt(t.sidebar.css("padding-left")) - A + "px",
                                    top: "0px"
                                })
                            } else if ("absolute" == n) {
                                var m = {};
                                "absolute" != t.stickySidebar.css("position") && (m.position = "absolute", m.transform = "translateY(" + (i + f - t.sidebar.offset().top - t.stickySidebarPaddingTop - t.stickySidebarPaddingBottom) + "px)", m.top = "0px"), m.width = x(t.stickySidebar) + "px", m.left = "", t.stickySidebar.css(m)
                            } else "static" == n && y();
                            "static" != n && 1 == t.options.updateSidebarHeight && t.sidebar.css({
                                "min-height": t.stickySidebar.outerHeight() + t.stickySidebar.offset().top - t.sidebar.offset().top + t.paddingBottom
                            }), t.previousScrollTop = i
                        }
                        var v, b
                    }, t.onScroll(t), w(document).on("scroll." + t.options.namespace, (s = t, function() {
                        s.onScroll(s)
                    })), w(window).on("resize." + t.options.namespace, (n = t, function() {
                        n.stickySidebar.css({
                            position: "static"
                        }), n.onScroll(n)
                    })), "undefined" != typeof ResizeSensor && new ResizeSensor(t.stickySidebar[0], (e = t, function() {
                        e.onScroll(e)
                    }))
                }), !0);
                var C, i
            }

            function x(t) {
                var e;
                try {
                    e = t[0].getBoundingClientRect().width
                } catch (t) {}
                return void 0 === e && (e = t.width()), e
            }
            var i, n, s, o, r, a;
            return (t = w.extend({
                containerSelector: "",
                additionalMarginTop: 0,
                additionalMarginBottom: 0,
                updateSidebarHeight: !0,
                minWidth: 0,
                disableOnResponsiveLayouts: !0,
                sidebarBehavior: "modern",
                defaultPosition: "relative",
                namespace: "TSS"
            }, t)).additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0, e(i = t, n = this) || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), w(document).on("scroll." + i.namespace, (r = i, a = n, function(t) {
                e(r, a) && w(this).unbind(t)
            })), w(window).on("resize." + i.namespace, (s = i, o = n, function(t) {
                e(s, o) && w(this).unbind(t)
            }))), this
        };
        var d = function(t) {
            return this.list = [], this.fireStack = [], this.isFiring = !1, this.isDisabled = !1, this.Deferred = t.Deferred, this.fire = function(t) {
                var e = t[0],
                    i = t[1],
                    n = t[2];
                this.isFiring = !0;
                for (var s = 0, o = this.list.length; s < o; s++)
                    if (null != this.list[s] && !1 === this.list[s].fn.apply(e, n)) {
                        i.reject();
                        break
                    } this.isFiring = !1, i.resolve(), this.fireStack.length && this.fire(this.fireStack.shift())
            }, this.inList = function(t, e) {
                for (var i = e = e || 0, n = this.list.length; i < n; i++)
                    if (this.list[i].fn === t || t.guid && this.list[i].fn.guid && t.guid === this.list[i].fn.guid) return i;
                return -1
            }, this
        };
        d.prototype = {
                add: function(t, e) {
                    var i = {
                        fn: t,
                        priority: e
                    };
                    e = e || 0;
                    for (var n = 0, s = this.list.length; n < s; n++)
                        if (e > this.list[n].priority) return this.list.splice(n, 0, i), this;
                    return this.list.push(i), this
                },
                remove: function(t) {
                    for (var e = 0; - 1 < (e = this.inList(t, e));) this.list.splice(e, 1);
                    return this
                },
                has: function(t) {
                    return -1 < this.inList(t)
                },
                fireWith: function(t, e) {
                    var i = this.Deferred();
                    return this.isDisabled ? i.reject() : (e = [t, i, (e = e || []).slice ? e.slice() : e], this.isFiring ? this.fireStack.push(e) : this.fire(e), i)
                },
                disable: function() {
                    this.isDisabled = !0
                },
                enable: function() {
                    this.isDisabled = !1
                }
            },
            function(h) {
                "use strict";
                var r = function(t, e) {
                    return this.itemsContainerSelector = e.container, this.itemSelector = e.item, this.nextSelector = e.next, this.paginationSelector = e.pagination, this.$scrollContainer = t, this.$container = window === t.get(0) ? h(document) : t, this.defaultDelay = e.delay, this.negativeMargin = e.negativeMargin, this.nextUrl = null, this.isBound = !1, this.isPaused = !1, this.isInitialized = !1, this.jsXhr = !1, this.listeners = {
                        next: new d(h),
                        load: new d(h),
                        loaded: new d(h),
                        render: new d(h),
                        rendered: new d(h),
                        scroll: new d(h),
                        noneLeft: new d(h),
                        ready: new d(h)
                    }, this.extensions = [], this.scrollHandler = function() {
                        if (this.isBound && !this.isPaused) {
                            var t = this.getCurrentScrollOffset(this.$scrollContainer),
                                e = this.getScrollThreshold(); - 1 != e && (this.fire("scroll", [t, e]), e <= t && this.next())
                        }
                    }, this.getItemsContainer = function() {
                        return h(this.itemsContainerSelector, this.$container)
                    }, this.getLastItem = function() {
                        return h(this.itemSelector, this.getItemsContainer().get(0)).last()
                    }, this.getFirstItem = function() {
                        return h(this.itemSelector, this.getItemsContainer().get(0)).first()
                    }, this.getScrollThreshold = function(t) {
                        var e;
                        return t = 0 <= (t = t || this.negativeMargin) ? -1 * t : t, 0 === (e = this.getLastItem()).length ? -1 : e.offset().top + e.height() + t
                    }, this.getCurrentScrollOffset = function(t) {
                        var e, i = t.height();
                        return e = window === t.get(0) ? t.scrollTop() : t.offset().top, (-1 != navigator.platform.indexOf("iPhone") || -1 != navigator.platform.indexOf("iPod")) && (i += 80), e + i
                    }, this.getNextUrl = function(t) {
                        return t = t || this.$container, h(this.nextSelector, t).last().attr("href")
                    }, this.load = function(t, e, i) {
                        var n, s, o = this,
                            r = [],
                            a = +new Date;
                        i = i || this.defaultDelay;
                        var l = {
                            url: t,
                            ajaxOptions: {
                                dataType: "html"
                            }
                        };
                        return o.fire("load", [l]), this.jsXhr = h.ajax(l.url, l.ajaxOptions).done(h.proxy(function(t) {
                            0 === (n = h(this.itemsContainerSelector, t).eq(0)).length && (n = h(t).filter(this.itemsContainerSelector).eq(0)), n && n.find(this.itemSelector).each(function() {
                                r.push(this)
                            }), o.fire("loaded", [t, r]), e && ((s = +new Date - a) < i ? setTimeout(function() {
                                e.call(o, t, r)
                            }, i - s) : e.call(o, t, r))
                        }, o)), this.jsXhr
                    }, this.render = function(t, e) {
                        var i = this,
                            n = this.getLastItem(),
                            s = 0,
                            o = this.fire("render", [t]);
                        o.done(function() {
                            h(t).hide(), n.after(t), h(t).fadeIn(400, function() {
                                ++s < t.length || (i.fire("rendered", [t]), e && e())
                            })
                        }), o.fail(function() {
                            e && e()
                        })
                    }, this.hidePagination = function() {
                        this.paginationSelector && h(this.paginationSelector, this.$container).hide()
                    }, this.restorePagination = function() {
                        this.paginationSelector && h(this.paginationSelector, this.$container).show()
                    }, this.throttle = function(s, o) {
                        var t, r, a = 0;
                        return t = function() {
                            function t() {
                                a = +new Date, s.apply(e, i)
                            }
                            var e = this,
                                i = arguments,
                                n = +new Date - a;
                            r ? clearTimeout(r) : t(), o < n ? t() : r = setTimeout(t, o)
                        }, h.guid && (t.guid = s.guid = s.guid || h.guid++), t
                    }, this.fire = function(t, e) {
                        return this.listeners[t].fireWith(this, e)
                    }, this.pause = function() {
                        this.isPaused = !0
                    }, this.resume = function() {
                        this.isPaused = !1
                    }, this
                };
                r.prototype.initialize = function() {
                    if (this.isInitialized) return !1;
                    var t = !!("onscroll" in this.$scrollContainer.get(0)),
                        e = this.getCurrentScrollOffset(this.$scrollContainer),
                        i = this.getScrollThreshold();
                    return !!t && (this.hidePagination(), this.bind(), this.nextUrl = this.getNextUrl(), this.nextUrl || this.fire("noneLeft", [this.getLastItem()]), this.nextUrl && i <= e ? (this.next(), this.one("rendered", function() {
                        this.isInitialized = !0, this.fire("ready")
                    })) : (this.isInitialized = !0, this.fire("ready")), this)
                }, r.prototype.reinitialize = function() {
                    this.isInitialized = !1, this.unbind(), this.initialize()
                }, r.prototype.bind = function() {
                    if (!this.isBound) {
                        this.$scrollContainer.on("scroll", h.proxy(this.throttle(this.scrollHandler, 150), this));
                        for (var t = 0, e = this.extensions.length; t < e; t++) this.extensions[t].bind(this);
                        this.isBound = !0, this.resume()
                    }
                }, r.prototype.unbind = function() {
                    if (this.isBound) {
                        this.$scrollContainer.off("scroll", this.scrollHandler);
                        for (var t = 0, e = this.extensions.length; t < e; t++) void 0 !== this.extensions[t].unbind && this.extensions[t].unbind(this);
                        this.isBound = !1
                    }
                }, r.prototype.destroy = function() {
                    try {
                        this.jsXhr.abort()
                    } catch (t) {}
                    this.unbind(), this.$scrollContainer.data("ias", null)
                }, r.prototype.on = function(t, e, i) {
                    if (void 0 === this.listeners[t]) throw new Error('There is no event called "' + t + '"');
                    return i = i || 0, this.listeners[t].add(h.proxy(e, this), i), this.isInitialized && ("ready" === t ? h.proxy(e, this)() : "noneLeft" !== t || this.nextUrl || h.proxy(e, this)()), this
                }, r.prototype.one = function(t, e) {
                    var i = this,
                        n = function() {
                            i.off(t, e), i.off(t, n)
                        };
                    return this.on(t, e), this.on(t, n), this
                }, r.prototype.off = function(t, e) {
                    if (void 0 === this.listeners[t]) throw new Error('There is no event called "' + t + '"');
                    return this.listeners[t].remove(e), this
                }, r.prototype.next = function() {
                    var t = this.nextUrl,
                        i = this;
                    if (!t) return !1;
                    this.pause();
                    var e = this.fire("next", [t]);
                    return e.done(function() {
                        i.load(t, function(t, e) {
                            i.render(e, function() {
                                i.nextUrl = i.getNextUrl(t), i.nextUrl || i.fire("noneLeft", [i.getLastItem()]), i.resume()
                            })
                        })
                    }), e.fail(function() {
                        i.resume()
                    }), !0
                }, r.prototype.extension = function(t) {
                    if (void 0 === t.bind) throw new Error('Extension doesn\'t have required method "bind"');
                    return void 0 !== t.initialize && t.initialize(this), this.extensions.push(t), this.isBound && this.reinitialize(), this
                }, h.ias = function(t) {
                    var e = h(window);
                    return e.ias.apply(e, arguments)
                }, h.fn.ias = function(n) {
                    var s = Array.prototype.slice.call(arguments),
                        o = this;
                    return this.each(function() {
                        var t = h(this),
                            e = t.data("ias"),
                            i = h.extend({}, h.fn.ias.defaults, t.data(), "object" == typeof n && n);
                        if (e || (t.data("ias", e = new r(t, i)), i.initialize && h(document).ready(h.proxy(e.initialize, e))), "string" == typeof n) {
                            if ("function" != typeof e[n]) throw new Error('There is no method called "' + n + '"');
                            s.shift(), e[n].apply(e, s)
                        }
                        o = e
                    }), o
                }, h.fn.ias.defaults = {
                    item: ".item",
                    container: ".listing",
                    next: ".next",
                    pagination: !1,
                    delay: 600,
                    negativeMargin: 10,
                    initialize: !0
                }
            }(jQuery);
        (function(t) {
            var e = this;
            this.ias = t, jQuery.extend(t.listeners, this.listeners), t.prev = function() {
                return e.prev()
            }, this.prevUrl = this.getPrevUrl()
        }),
        function(t) {
            t.on("pageChange", jQuery.proxy(this.onPageChange, this)), t.on("scroll", jQuery.proxy(this.onScroll, this)), t.on("ready", jQuery.proxy(this.onReady, this))
        },
        function(t) {
            t.off("pageChange", this.onPageChange), t.off("scroll", this.onScroll), t.off("ready", this.onReady)
        },
        function() {
            var t = this.prevUrl,
                i = this,
                n = this.ias;
            if (!t) return !1;
            n.pause();
            var e = n.fire("prev", [t]);
            return e.done(function() {
                n.load(t, function(t, e) {
                    i.renderBefore(e, function() {
                        i.prevUrl = i.getPrevUrl(t), n.resume(), i.prevUrl && i.prev()
                    })
                })
            }), e.fail(function() {
                n.resume()
            }), !0
        }, {
            prev: ".prev"
        };
        (function(t) {
            (this.ias = t).on("noneLeft", jQuery.proxy(this.showNoneLeft, this))
        }),
        function(t) {
            t.off("noneLeft", this.showNoneLeft)
        }, {
            text: "You reached the end.",
            html: '<div class="ias-noneleft" style="text-align: center;">{text}</div>'
        };
        (function(t) {
            this.ias = t, jQuery.extend(t.listeners, this.listeners)
        }),
        function(t) {
            try {
                t.on("prev", jQuery.proxy(this.onPrev, this), this.priority)
            } catch (t) {}
            t.on("next", jQuery.proxy(this.onNext, this), this.priority), t.on("scroll", jQuery.proxy(this.onScroll, this), this.priority)
        },
        function(t) {
            try {
                t.off("prev", this.onPrev)
            } catch (t) {}
            t.off("next", this.onNext), t.off("scroll", this.onScroll)
        },
        function(t) {
            for (var e = this.pagebreaks.length - 1; 0 < e; e--)
                if (t > this.pagebreaks[e][0]) return e + 1;
            return 1
        },
        function(t) {
            for (var e = this.pagebreaks.length - 1; 0 <= e; e--)
                if (t > this.pagebreaks[e][0]) return this.pagebreaks[e];
            return null
        }, 500;
        (function(t) {
            (this.ias = t).on("next", jQuery.proxy(this.showSpinner, this)), t.on("render", jQuery.proxy(this.removeSpinner, this));
            try {
                t.on("prev", jQuery.proxy(this.showSpinnerBefore, this))
            } catch (t) {}
        }),
        function(t) {
            t.off("next", this.showSpinner), t.off("render", this.removeSpinner);
            try {
                t.off("prev", this.showSpinnerBefore)
            } catch (t) {}
        }, {
            src: "data:image/gif;base64,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",
            html: '<div class="ias-spinner" style="text-align: center;"><img src="{src}"/></div>'
        };
        (function(t) {
            (this.ias = t).on("next", jQuery.proxy(this.showTriggerNext, this), this.priority), t.on("rendered", jQuery.proxy(this.onRendered, this), this.priority);
            try {
                t.on("prev", jQuery.proxy(this.showTriggerPrev, this), this.priority)
            } catch (t) {}
        }),
        function(t) {
            t.off("next", this.showTriggerNext), t.off("rendered", this.onRendered);
            try {
                t.off("prev", this.showTriggerPrev)
            } catch (t) {}
        },
        function() {
            this.enabled = !1, this.ias.pause(), this.$triggerNext && (this.$triggerNext.remove(), this.$triggerNext = null), this.ias.next()
        },
        function() {
            this.enabled = !1, this.ias.pause(), this.$triggerPrev && (this.$triggerPrev.remove(), this.$triggerPrev = null), this.ias.prev()
        }, {
            text: "Load more items",
            html: '<div class="ias-trigger ias-trigger-next" style="text-align: center; cursor: pointer;"><a>{text}</a></div>',
            textPrev: "Load previous items",
            htmlPrev: '<div class="ias-trigger ias-trigger-prev" style="text-align: center; cursor: pointer;"><a>{text}</a></div>',
            offset: 0
        }, 1e3, $(".header-search-btn a").click(function(t) {
            t.preventDefault(), $("#header-search").fadeIn(), $("#header-search input").focus()
        }), $("#closeSearchBtn").click(function(t) {
            t.preventDefault(), $("#header-search").fadeOut(), $("#header-search input").blur()
        }), $("#header-search input").on("focus", function() {
            $(this).attr("placeholder", "")
        }), $("#header-search input").on("blur", function() {
            $(this).attr("placeholder", "Search...")
        }), $("a").click(function(t) {
            var e = $(t.target);
            if (e.is(".nav>li>.menu-btn") || e.is(".nav>li>.menu-btn>i") || e.is(".nav>li>.menu-btn>.noti-count")) {
                var i = $(this).next("ul"),
                    n = $(".nav>li>ul:visible").not(i);
                i.slideToggle().parent().toggleClass("active"), n.slideUp().parent().removeClass("active"), t.preventDefault()
            }
        });
        var c = readCookie("darkMode") || createCookie("darkMode", "off");
        $(".doi-chu-de button").click(function(t) {
            var e = $(this).find("i");
            e.hasClass("fa-toggle-off") ? ($(this).addClass("active"), e.attr("class", "fal fa-toggle-on"), createCookie("darkMode", "on"), $("body").addClass("night_mode")) : ($(this).removeClass("active"), e.attr("class", "fal fa-toggle-off"), createCookie("darkMode", "off"), $("body").removeClass("night_mode")), t.preventDefault()
        });
        var u = "#6183ff";
        if ($(document).ready(function() {
                $(".lds-css").fadeOut(), $("body").removeClass("loading"), r.attr("data-background", u), h.attr("data-color", u), "on" == c ? ($("body").addClass("night_mode"), $(".doi-chu-de button").addClass("active"), $(".doi-chu-de button").find("i").attr("class", "fal fa-toggle-on")) : ($("body").removeClass("night_mode"), $(".doi-chu-de button").removeClass("active"), $(".doi-chu-de button").find("i").attr("class", "fal fa-toggle-off"));
                var l = $("#notification"),
                    t = $(".noti-count");
                l = $("#notification");
                $.ajax({
                    type: "GET",
                    url: "/feeds/posts/summary?start-index=1&max-results=5&alt=json-in-script",
                    async: !0,
                    contentType: "application/json",
                    dataType: "jsonp",
                    success: function(t) {
                        for (var e = 0, i = t.feed.entry.length; e < i; e++) {
                            for (var n = 0, s = t.feed.entry[e], o = s.link.length; n < o; n++)
                                if ("alternate" === s.link[n].rel) {
                                    var r = s.link[n].href;
                                    break
                                } s.category.map(function(t) {
                                return t.term
                            }).join(", ");
                            var a = s.title.$t;
                            createCookie("notiItem", "<li class='noti_item new_post not-seen'><a target='_blank' href='" + r + "'><p class='text-1'>New update for a new girl<p class='text-2'>" + a + "</p><small class='text-3'>Watch now!</small></a></li>"), null == readCookie("notiHTML") && l.prepend(readCookie("notiItem"))
                        }
                    }
                }).done(function() {
                    $(document).ready(function() {
                        null != readCookie("notiHTML") && l.html(readCookie("notiHTML")), l.find("a").click(function() {
                            $(this).parent().removeClass("not-seen").addClass("seen"), t.html(l.children(".not-seen").length), createCookie("notiHTML", l.html())
                        }), t.html(l.children(".not-seen").length)
                    })
                }), $(".removeCookie").click(function(t) {
                    deleteAllCookies(), location.reload()
                }), $(".toggle_sidebar,toggle_sidebar a").click(function(t) {
                    t.preventDefault();
                    var e = $("#sidebar");
                    e.hasClass("toggle-off") ? (e.removeClass("toggle-off").addClass("toggle-on"), $(this).find("i").attr("class", "fal fa-arrow-right")) : (e.removeClass("toggle-on").addClass("toggle-off"), $(this).find("i").attr("class", "fal fa-arrow-left"))
                })
            }), $("#sidebar.toggle-off").theiaStickySidebar({
                additionalMarginTop: 55,
                defaultPosition: "fixed",
                minWidth: "300px"
            }), "item" === l) {
            t = this, e = function() {
                function e(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        if (i)
                            for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n])
                    }
                    return t
                }

                function n(t, e) {
                    t && e && (t.className += " " + e)
                }

                function s(t, e) {
                    t && e && (t.className = t.className.replace(new RegExp("(\\s|^)" + e + "(\\s|$)"), " ").trim())
                }

                function o(t) {
                    var e = document.createElement("div");
                    return e.innerHTML = t.trim(), e.childNodes[0]
                }

                function r(t, e) {
                    return (t.matches || t.matchesSelector || t.msMatchesSelector).call(t, e)
                }

                function a(t) {
                    this.init.apply(this, arguments)
                }
                return a.defaults = {
                    elementClass: "",
                    elementLoadingClass: "slbLoading",
                    htmlClass: "slbActive",
                    closeBtnClass: "",
                    nextBtnClass: "",
                    prevBtnClass: "",
                    loadingTextClass: "",
                    closeBtnCaption: "Close",
                    nextBtnCaption: "Next",
                    prevBtnCaption: "Previous",
                    loadingCaption: "Loading...",
                    bindToItems: !0,
                    closeOnOverlayClick: !0,
                    closeOnEscapeKey: !0,
                    nextOnImageClick: !0,
                    showCaptions: !0,
                    captionAttribute: "title",
                    urlAttribute: "href",
                    startAt: 0,
                    loadingTimeout: 100,
                    appendTarget: "body",
                    beforeSetContent: null,
                    beforeClose: null,
                    afterClose: null,
                    beforeDestroy: null,
                    afterDestroy: null,
                    videoRegex: new RegExp(/youtube.com|vimeo.com/)
                }, e(a.prototype, {
                    init: function(i) {
                        i = this.options = e({}, a.defaults, i);
                        var t, n = this;
                        i.$items && (t = i.$items.get()), i.elements && (t = [].slice.call("string" == typeof i.elements ? document.querySelectorAll(i.elements) : i.elements)), this.eventRegistry = {
                            lightbox: [],
                            thumbnails: []
                        }, this.items = [], this.captions = [], t && t.forEach(function(t, e) {
                            n.items.push(t.getAttribute(i.urlAttribute)), n.captions.push(t.getAttribute(i.captionAttribute)), i.bindToItems && n.addEvent(t, "click", function(t) {
                                t.preventDefault(), n.showPosition(e)
                            }, "thumbnails")
                        }), i.items && (this.items = i.items), i.captions && (this.captions = i.captions)
                    },
                    addEvent: function(t, e, i, n) {
                        return this.eventRegistry[n || "lightbox"].push({
                            element: t,
                            eventName: e,
                            callback: i
                        }), t.addEventListener(e, i), this
                    },
                    removeEvents: function(t) {
                        return this.eventRegistry[t].forEach(function(t) {
                            t.element.removeEventListener(t.eventName, t.callback)
                        }), this.eventRegistry[t] = [], this
                    },
                    next: function() {
                        return this.showPosition(this.currentPosition + 1)
                    },
                    prev: function() {
                        return this.showPosition(this.currentPosition - 1)
                    },
                    normalizePosition: function(t) {
                        return t >= this.items.length ? t = 0 : t < 0 && (t = this.items.length - 1), t
                    },
                    showPosition: function(t) {
                        var e = this.normalizePosition(t);
                        return void 0 !== this.currentPosition && (this.direction = e > this.currentPosition ? "next" : "prev"), this.currentPosition = e, this.setupLightboxHtml().prepareItem(this.currentPosition, this.setContent).show()
                    },
                    loading: function(t) {
                        var e = this,
                            i = this.options;
                        t ? this.loadingTimeout = setTimeout(function() {
                            n(e.$el, i.elementLoadingClass), e.$content.innerHTML = '<p class="slbLoadingText ' + i.loadingTextClass + '">' + i.loadingCaption + "</p>", e.show()
                        }, i.loadingTimeout) : (s(this.$el, i.elementLoadingClass), clearTimeout(this.loadingTimeout))
                    },
                    prepareItem: function(t, e) {
                        var i = this,
                            n = this.items[t];
                        if (this.loading(!0), this.options.videoRegex.test(n)) e.call(i, o('<div class="slbIframeCont"><iframe class="slbIframe" frameborder="0" allowfullscreen src="' + n + '"></iframe></div>'));
                        else {
                            var s = o('<div class="slbImageWrap"><img class="slbImage" src="' + n + '" /></div>');
                            this.$currentImage = s.querySelector(".slbImage"), this.options.showCaptions && this.captions[t] && s.appendChild(o('<div class="slbCaption">' + this.captions[t] + "</div>")), this.loadImage(n, function() {
                                i.setImageDimensions(), e.call(i, s), i.loadImage(i.items[i.normalizePosition(i.currentPosition + 1)])
                            })
                        }
                        return this
                    },
                    loadImage: function(t, e) {
                        if (!this.options.videoRegex.test(t)) {
                            var i = new Image;
                            e && (i.onload = e), i.src = t
                        }
                    },
                    setupLightboxHtml: function() {
                        var t = this.options;
                        return this.$el || (this.$el = o('<div class="slbElement ' + t.elementClass + '"><div class="slbOverlay"></div><div class="slbWrapOuter"><div class="slbWrap"><div class="slbContentOuter"><div class="slbContent"></div><button type="button" title="' + t.closeBtnCaption + '" class="slbCloseBtn ' + t.closeBtnClass + '">×</button>' + (1 < this.items.length ? '<div class="slbArrows"><button type="button" title="' + t.prevBtnCaption + '" class="prev slbArrow' + t.prevBtnClass + '">' + t.prevBtnCaption + '</button><button type="button" title="' + t.nextBtnCaption + '" class="next slbArrow' + t.nextBtnClass + '">' + t.nextBtnCaption + "</button></div>" : "") + "</div></div></div></div>"), this.$content = this.$el.querySelector(".slbContent")), this.$content.innerHTML = "", this
                    },
                    show: function() {
                        return this.modalInDom || (document.querySelector(this.options.appendTarget).appendChild(this.$el), n(document.documentElement, this.options.htmlClass), this.setupLightboxEvents(), this.modalInDom = !0), this
                    },
                    setContent: function(t) {
                        var e = "string" == typeof t ? o(t) : t;
                        return this.loading(!1), this.setupLightboxHtml(), s(this.$content, "slbDirectionNext"), s(this.$content, "slbDirectionPrev"), this.direction && n(this.$content, "next" === this.direction ? "slbDirectionNext" : "slbDirectionPrev"), this.options.beforeSetContent && this.options.beforeSetContent(e, this), this.$content.appendChild(e), this
                    },
                    setImageDimensions: function() {
                        this.$currentImage && (this.$currentImage.style.maxHeight = ("innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight) + "px")
                    },
                    setupLightboxEvents: function() {
                        var i = this;
                        return this.eventRegistry.lightbox.length || this.addEvent(this.$el, "click", function(t) {
                            var e = t.target;
                            r(e, ".slbCloseBtn") || i.options.closeOnOverlayClick && r(e, ".slbWrap") ? i.close() : r(e, ".slbArrow") ? r(e, ".next") ? i.next() : i.prev() : i.options.nextOnImageClick && 1 < i.items.length && r(e, ".slbImage") && i.next()
                        }).addEvent(document, "keyup", function(t) {
                            i.options.closeOnEscapeKey && 27 === t.keyCode && i.close(), 1 < i.items.length && ((39 === t.keyCode || 68 === t.keyCode) && i.next(), (37 === t.keyCode || 65 === t.keyCode) && i.prev())
                        }).addEvent(window, "resize", function() {
                            i.setImageDimensions()
                        }), this
                    },
                    close: function() {
                        this.modalInDom && (this.runHook("beforeClose"), this.removeEvents("lightbox"), this.$el && this.$el.parentNode.removeChild(this.$el), s(document.documentElement, this.options.htmlClass), this.modalInDom = !1, this.runHook("afterClose")), this.direction = void 0, this.currentPosition = this.options.startAt
                    },
                    destroy: function() {
                        this.close(), this.runHook("beforeDestroy"), this.removeEvents("thumbnails"), this.runHook("afterDestroy")
                    },
                    runHook: function(t) {
                        this.options[t] && this.options[t](this)
                    }
                }), a.open = function(t) {
                    var e = new a(t);
                    return t.content ? e.setContent(t.content).show() : e.showPosition(e.options.startAt)
                }, a.registerAsJqueryPlugin = function(n) {
                    n.fn.simpleLightbox = function(t) {
                        var e, i = this;
                        return this.each(function() {
                            n.data(this, "simpleLightbox") || (e = e || new a(n.extend({}, t, {
                                $items: i
                            })), n.data(this, "simpleLightbox", e))
                        })
                    }, n.SimpleLightbox = a
                }, "undefined" != typeof window && window.jQuery && a.registerAsJqueryPlugin(window.jQuery), a
            }, "function" == typeof define && define.amd ? define([], e) : "object" == typeof module && module.exports ? module.exports = e() : t.SimpleLightbox = e();
            var f = $(".post-body").html();
            if (f.match("[name]")) {
                var p = f.split(/\[name\](.*)\[\/name\]/gi);
                2 < p.length && $("#bang-thong-tin .ten h4").text(p[1])
            }
            if (/\[avatar\](.*)\[\/avatar\]/gi.test(f)) {
                if (f.match("[avatar]")) 2 < (g = f.split(/\[avatar\](.*)\[\/avatar\]/gi)).length && $("#bang-thong-tin .anh-dai-dien img").attr("src", g[1]) && $("#bang-thong-tin .bg-img").attr("style", "background:url(" + g[1] + ");filter: blur(8px);-webkit-filter: blur(8px);height:100%;background-position:center;background-repeat:no-repeat;background-size:cover")
            } else {
                var g = $(".post-body img:first");
                $("#bang-thong-tin .anh-dai-dien img").attr("src", g.attr("src")), $("#bang-thong-tin .bg-img").attr("style", "background:url(" + g.attr("src") + ");filter: blur(8px);-webkit-filter: blur(8px);height:100%;background-position:center;background-repeat:no-repeat;background-size:cover")
            }
            if (f.match("[fb]")) {
                var A = f.split(/\[dl\](.*)\[\/dl\]/gi);
                2 < A.length && $("#bang-thong-tin .lien-ket").append('<a target="_blank" class="link-fb" href="https://mshare.io/file/' + A[1] + '"><i class="fas fa-download"></i></a>')
            }
            if (f.match("[inst]")) {
                var m = f.split(/\[alb\](.*)\[\/alb\]/gi);
                2 < m.length && $("#bang-thong-tin .lien-ket").append('<a target="_blank" class="link-inst" href="https://www.facebook.com/' + m[1] + '"><i class="fab fa-facebook-f"></i></a>')
            }
            if (f.match("[ytb]")) {
                var v = f.split(/\[ytb\](.*)\[\/ytb\]/gi),
                    b = /(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/.exec(v[1]);
                2 < v.length && $("#sidebar .video-container").append('<iframe src="https://www.youtube.com/embed/' + b[5] + '?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
            }
            $(".post-body").html(f.replace(/\[(.*)\](.*)\[\/(.*)\]/gi, ""));
            var y = $(".post-body");

            function C(t) {
                var e = new Array;
                e[1] = "Jan", e[2] = "Feb", e[3] = "Mar", e[4] = "Apr", e[5] = "May", e[6] = "Jun", e[7] = "Jul", e[8] = "Aug", e[9] = "Sep", e[10] = "Oct", e[11] = "Nov", e[12] = "Dec";
                var i = t.substring(0, 4),
                    n = t.substring(5, 7),
                    s = t.substring(8, 10);
                if ("ltr" == $("HTML").attr("dir")) var o = "<small><i class='fal fa-calendar-alt'></i> " + e[parseInt(n, 10)] + " " + s + " " + i + "</small>";
                else o = "<small>" + e[parseInt(n, 10)] + " " + s + " " + i + " <i class='fal fa-calendar-alt'></i></small>";
                return o
            }

            function x(t) {
                for (var e = 0; e < t.length; e++)
                    if ("ltr" == $("HTML").attr("dir")) var i = "<small><i class='fal fa-user'></i> " + t[e].name.$t + "</small>";
                    else i = "<small>" + t[e].name.$t + " <i class='fal fa-user'></i></small>";
                return i
            }
            y.find("img").each(function() {
                var t = $(this).attr("src");
                $(this).clone().appendTo("#grouped-slide").wrap('<a class="group-item" href="' + t + '"/>'), y.find("img,.tr-caption-container,.separator").remove()
            }), $("#grouped-slide a.group-item").simpleLightbox(), $(document).ready(function() {
                $("#grouped-slide img").attr("src", function(t, e) {
                    return e.replace(/\/s[0-9]+(\-c)?\//gi, "/s1600-nu/")
                })
            }), shuffle = function(t) {
                for (var e, i, n = t.length; n; e = parseInt(Math.random() * n), i = t[--n], t[n] = t[e], t[e] = i);
                return t
            }, $(".related-posts").each(function() {
                $("body").attr("data-url");
                var t = $(this).attr("data-results"),
                    e = $(this).attr("data-label"),
                    c = function(t, e) {
                        if (void 0 === t) var i = e;
                        else i = t;
                        return i
                    }(t, 8),
                    i = "/feeds/posts/summary/-/" + e + "?max-results=500&alt=json-in-script",
                    u = $(this);
                u.append("<div class='bg-title'><h3>See more posts</h3></div><div class='owl-carousel relateds'></div>"), $.ajax({
                    type: "GET",
                    url: i,
                    async: !0,
                    contentType: "application/json",
                    dataType: "jsonp",
                    success: function(t) {
                        for (var e = t.feed.entry, i = function(t) {
                                var e, i = [];
                                for (e = 0; e < t; e++) i.push(e);
                                return shuffle(i)
                            }(e.length), n = 0; n < c; n++) {
                            for (var s = 0; s < t.feed.entry[i[n]].link.length; s++)
                                if ("alternate" == e[i[n]].link[s].rel) {
                                    var o = t.feed.entry[i[n]].link[s].href;
                                    break
                                } try {
                                var r = e[i[n]].media$thumbnail.url.replace(/\/s[0-9]+(\-c)?\//, "/s480/")
                            } catch (t) {
                                r = "https://1.bp.blogspot.com/-NgCak-F7GQU/Vy4QBjzY2kI/AAAAAAAAAMA/Eud4LcTJG10ESDW86HQ67Jr4w4BmDRMoQCK4B/s480/no-image.jpg"
                            }
                            var a = e[i[n]].title.$t,
                                l = e[i[n]].category[0].term,
                                h = x(e[i[n]].author),
                                d = C(e[i[n]].published.$t);
                            u.find(".owl-carousel.relateds").append("<div class='thumb item'><a href='" + o + "' title='" + a + "'><img src='" + r + "' alt='" + a + "'><div class='thumb-content'><span data-background='" + readCookie("siteColor") + "' class='label label-info'>" + l + "</span><h2>" + a + "</h2><div class='thumb-info'>" + h + " - " + d + "</div></div></a></div>")
                        }
                        $(".owl-carousel.relateds").owlCarousel("ltr" == $("HTML").attr("dir") ? {
                            autoplay: 500,
                            margin: 7.5,
                            nav: !0,
                            loop: !1,
                            rewind: !0,
                            navText: ['<i class="fas fa-chevron-square-left"></i>', '<i class="fas fa-chevron-square-right"></i>'],
                            responsive: {
                                0: {
                                    items: 1
                                },
                                480: {
                                    items: 2
                                },
                                768: {
                                    items: 2
                                }
                            }
                        } : {
                            rtl: !0,
                            autoplay: 500,
                            margin: 7.5,
                            nav: !0,
                            loop: !1,
                            rewind: !0,
                            navText: ['<i class="fas fa-chevron-square-right"></i>', '<i class="fas fa-chevron-square-left"></i>'],
                            responsive: {
                                0: {
                                    items: 1
                                },
                                480: {
                                    items: 2
                                },
                                768: {
                                    items: 2
                                }
                            }
                        }), $(".related-posts .owl-nav").insertAfter(".related-posts h3")
                    }
                })
            }), $(".sticky-shares a").click(function(t) {
                window.open($(this).attr("href"), "sharer", "toolbar=0,status=0,width=626,height=500"), t.preventDefault()
            })
        }
        loadscript("https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js", function() {
            if ("item" === l) var t = $("#grouped-slide").owlCarousel({
                    loop: !1,
                    rewind: !0,
                    margin: 0,
                    nav: !0,
                    autoHeight: !0,
                    lazyLoad: !1,
                    items: 1,
                    dots: !1,
                    navText: ['<i data-color="' + readCookie("siteColor") + '" class="fal fa-arrow-left" aria-hidden="true"></i>', '<i data-color="' + readCookie("siteColor") + '" class="fal fa-arrow-right" aria-hidden="true"></i>']
                }),
                e = setInterval(function() {
                    1 < t.height() && clearInterval(e), t.trigger("refresh.owl.carousel", [100])
                }, 300);
            $(".popular-post-list").owlCarousel({
                loop: !1,
                margin: 15,
                nav: !0,
                rewind: !0,
                dots: !1,
                autoplay: !0,
                autoplayTimeout: 3e3,
                autoplayHoverPause: !0,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    768: {
                        items: 3
                    },
                    1e3: {
                        items: 4
                    }
                }
            })
        }), "index" === l && jQuery.ias({
            container: ".blog-posts.row",
            item: ".row-item",
            pagination: "#blog-pager",
            next: ".older-link"
        })
    } else console.clear(), console.log("Jquery error ! Page will load it again, if any button you click won't work, please reload the site!");
    i = document, n = "facebook-jssdk", o = i.getElementsByTagName("script")[0], i.getElementById(n) || ((s = i.createElement("script")).id = n, s.async = !0, s.src = "https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v3.2&appId=439965360103686&autoLogAppEvents=1", o.parentNode.insertBefore(s, o))
});
