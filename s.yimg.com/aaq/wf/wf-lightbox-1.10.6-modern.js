!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define("wafer-lightbox", [], t)
      : "object" == typeof exports
        ? (exports["wafer-lightbox"] = t())
        : ((e.wafer = e.wafer || {}),
          (e.wafer.wafers = e.wafer.wafers || {}),
          (e.wafer.wafers["wafer-lightbox"] = t()));
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    function t(n) {
      if (o[n]) return o[n].exports;
      var l = (o[n] = { i: n, l: !1, exports: {} });
      return e[n].call(l.exports, l, l.exports, t), (l.l = !0), l.exports;
    }
    var o = {};
    return (
      (t.m = e),
      (t.c = o),
      (t.d = function (e, o, n) {
        t.o(e, o) ||
          Object.defineProperty(e, o, {
            configurable: !1,
            enumerable: !0,
            get: n,
          });
      }),
      (t.n = function (e) {
        var o =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(o, "a", o), o;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = "https://s.yimg.com/aaq/wf/"),
      t((t.s = "./src/entry.js"))
    );
  })({
    "./src/entry.js": function (e, t, o) {
      "use strict";
      function n(e, t, o) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = o),
          e
        );
      }
      function l(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function r(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function s(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function c(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t];
              for (var n in o)
                Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
            }
            return e;
          },
        h = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t;
          };
        })(),
        p = window.wafer,
        f = p.base,
        d = p.constants,
        w = p.features,
        b = p.utils,
        y = p.WaferBaseClass,
        g = b.bindEvent,
        v = b.findAncestor,
        m = b.getFocusableElems,
        _ = b.getTemplateContent,
        C = b.removeTransition,
        x = b.setTimeout,
        E = b.setTransition,
        k = b.unbindEvent,
        O = w.mutationObserver,
        T = w.transformProperty,
        S = [
          "handleClick",
          "handleKeyDown",
          "handleSwipeUp",
          "handleTouchEnd",
          "handleTouchMove",
          "handleTouchStart",
        ],
        j = [],
        D = d.ATTR_PREFIX,
        L = document,
        M = L.body,
        A = (function (e) {
          function t(e) {
            var o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = o.errorClass,
              s = o.lightboxConfig,
              a = o.selector,
              i = o.successClass,
              c = o.wrapperMap;
            l(this, t);
            var h = r(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(
                  this,
                  e,
                  { errorClass: n, selector: a, successClass: i },
                  { STATE_ATTRS: j },
                ),
              ),
              p = e.getAttribute(D + "boundary"),
              f = e.getAttribute(D + "lightbox-target"),
              d = e.getAttribute(D + "lightbox-key"),
              w = e.getAttribute(D + "lightbox-trigger") || "click",
              b = e.getAttribute(D + "lightbox-delay"),
              y = e.getAttribute(D + "lightbox-close-delay"),
              g = e.getAttribute(D + "lightbox-close-on-swipe"),
              v = e.getAttribute(D + "lightbox-close-on-swipe-down"),
              m = s.pageTarget;
            return (
              (h._util = {
                boundary: p,
                closeDelay: null === y || void 0 === y ? 0 : Number(y),
                closeOnSwipe: null === g || void 0 === g ? 0 : Number(g),
                closeOnSwipeDown: null === v || void 0 === v ? 0 : Number(v),
                elem: e,
                errorClass: n,
                delay: null === b || void 0 === b ? 0 : Number(b),
                key: d,
                selector: a,
                successClass: i,
                target: f,
                trigger: w,
                wrapperMap: c,
              }),
              m && (h._util.pageTarget = document.querySelector(m)),
              (h._state = u(
                {
                  contentObserver: null,
                  firstFocusableElem: null,
                  lastFocusableElem: null,
                  touchendY: 0,
                  touchstartY: 0,
                  willClose: null,
                },
                h._state,
              )),
              S.forEach(function (e) {
                h[e] = h[e].bind(h);
              }),
              h.addEventListeners(),
              "onLoad" === w && h.open(),
              h
            );
          }
          return (
            s(t, e),
            h(t, [
              {
                key: "destroy",
                value: function () {
                  this._util.elem.classList.add("wafer-destroyed");
                },
              },
              {
                key: "open",
                value: function () {
                  var e = this,
                    t = this._util,
                    o = t.closeOnSwipe,
                    n = t.closeOnSwipeDown,
                    l = t.delay,
                    r = t.elem,
                    s = t.key,
                    a = t.pageTarget,
                    i = t.wrapperMap,
                    c = i.contentElem,
                    u = i.elem,
                    h = i.elementToScroll,
                    p = i.wrapperElem;
                  this.willOpen(),
                    (u.style.display = ""),
                    (c.innerHTML = this.templateText);
                  var d = c.getElementsByClassName("wafer-lightbox-label")[0],
                    w = p.querySelector("[autofocus]") || p;
                  if (
                    (p.setAttribute("tabIndex", -1),
                    g(p, "keydown", this.handleKeyDown, { passive: !1 }),
                    O &&
                      ((this._state.contentObserver = new MutationObserver(
                        function () {
                          e.setFocusableElements();
                        },
                      )),
                      this._state.contentObserver.observe(c, {
                        childList: !0,
                        subtree: !0,
                      })),
                    (o || n) &&
                      (g(p, "touchstart", this.handleTouchStart),
                      g(p, "touchend", this.handleTouchEnd)),
                    n && g(p, "touchmove", this.handleTouchMove),
                    E(h, "transform", 200, "ease-out"),
                    a && a.setAttribute("aria-hidden", !0),
                    d)
                  ) {
                    var b = d.getAttribute("id");
                    if (!b) {
                      var y = (b = "wafer-lightbox-label-" + Date.now());
                      d.setAttribute("id", y);
                    }
                    p.setAttribute("aria-labelledby", b);
                  }
                  s &&
                    (p.classList.add("wafer-ligthbox-source-" + s),
                    M.classList.add("wafer-ligthbox-source-" + s + "-open")),
                    p.setAttribute("aria-modal", !0),
                    p.setAttribute("role", "dialog"),
                    this.setFocusableElements(),
                    w.focus(),
                    x(function () {
                      return w.focus();
                    }, 5),
                    f.lock(M),
                    x(function () {
                      p.classList.add("wafer-lightbox-open"),
                        M.classList.add("wafer-lightbox-open");
                    }, 0),
                    x(function () {
                      f.unlock(c),
                        f.sync(c),
                        f.emitWaferEvent("lightbox:open", {
                          elem: u,
                          meta: { targetElem: r },
                        });
                    }, l);
                },
              },
              {
                key: "close",
                value: function () {
                  var e = this._util,
                    t = e.closeOnSwipe,
                    o = e.closeOnSwipeDown,
                    n = e.key,
                    l = e.wrapperMap,
                    r = l.wrapperElem,
                    s = this._state.contentObserver;
                  s && s.disconnect(),
                    n && r.classList.remove("wafer-ligthbox-source-" + n),
                    k(r, "keydown", this.handleKeyDown, { passive: !1 }),
                    (t || o) &&
                      (k(r, "touchstart", this.handleTouchStart),
                      k(r, "touchend", this.handleTouchEnd)),
                    o && k(r, "touchmove", this.handleTouchMove);
                },
              },
              {
                key: "handleKeyDown",
                value: function (e) {
                  if ("tab" === e.key.toLowerCase() || 9 === e.keyCode) {
                    var t = this._state,
                      o = t.firstFocusableElem,
                      n = t.lastFocusableElem;
                    o &&
                      (e.shiftKey
                        ? document.activeElement === o &&
                          (n.focus(), e.preventDefault())
                        : document.activeElement === n &&
                          (o.focus(), e.preventDefault()));
                  }
                },
              },
              {
                key: "handleClick",
                value: function () {
                  this._util.wrapperMap &&
                    "click" === this._util.trigger &&
                    this.open();
                },
              },
              {
                key: "handleTouchStart",
                value: function (e) {
                  this._state.touchstartY = e.changedTouches[0].screenY;
                },
              },
              {
                key: "handleTouchMove",
                value: function (e) {
                  var t = this,
                    o = this._util.wrapperMap,
                    l = o.elementToScroll;
                  if (0 === l.scrollTop) {
                    var r = e.changedTouches[0].screenY,
                      s = r - this._state.touchstartY;
                    s > 20 &&
                      Object.assign(
                        l.style,
                        n({}, T, "translateY(" + (s - 20) + "px)"),
                      ),
                      s > 100 &&
                        (Object.assign(l.style, n({}, T, "translateY(100%)")),
                        (this._state.willClose = !0),
                        x(function () {
                          t.handleSwipeClose(),
                            C(l),
                            Object.assign(l.style, n({}, T, ""));
                        }, 210));
                  }
                },
              },
              {
                key: "handleTouchEnd",
                value: function (e) {
                  if (this._util.closeOnSwipeDown) {
                    if (!this._state.willClose) {
                      var t = this._util.wrapperMap,
                        o = t.elementToScroll;
                      Object.assign(o.style, n({}, T, ""));
                    }
                    this._state.willClose = !1;
                  } else {
                    this._state.touchendY = e.changedTouches[0].screenY;
                    var l = this._state,
                      r = l.touchstartY;
                    l.touchendY < r && this.handleSwipeUp();
                  }
                  (this._state.touchstartY = 0), (this._state.touchendY = 0);
                },
              },
              {
                key: "handleSwipeUp",
                value: function () {
                  var e = this._util.wrapperMap,
                    t = e.wrapperElem,
                    o = e.elementToScroll,
                    n = o.scrollHeight,
                    l = o.scrollTop;
                  n - t.offsetHeight - l < 1 && this.handleSwipeClose();
                },
              },
              {
                key: "setFocusableElements",
                value: function () {
                  var e = this._util.wrapperMap,
                    t = e.wrapperElem,
                    o = m(t);
                  (this._state.firstFocusableElem = o[0]),
                    (this._state.lastFocusableElem = o[o.length - 1]);
                },
              },
              {
                key: "templateText",
                get: function () {
                  var e = this._util,
                    t = e.boundary,
                    o = e.elem,
                    n = e.target,
                    l = e.templateText;
                  return (
                    (this._util.templateText =
                      l || (n && _(((t && v(o, t)) || M).querySelector(n)))),
                    this._util.templateText
                  );
                },
              },
            ]),
            t
          );
        })(y);
      A.events = { click: [["wafer-lightbox", "handleClick"]] };
      var P = A,
        Y =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var o = arguments[t];
              for (var n in o)
                Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
            }
            return e;
          },
        B = (function () {
          function e(e, t) {
            for (var o = 0; o < t.length; o++) {
              var n = t[o];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t;
          };
        })(),
        N = function e(t, o, n) {
          null === t && (t = Function.prototype);
          var l = Object.getOwnPropertyDescriptor(t, o);
          if (void 0 === l) {
            var r = Object.getPrototypeOf(t);
            return null === r ? void 0 : e(r, o, n);
          }
          if ("value" in l) return l.value;
          var s = l.get;
          if (void 0 !== s) return s.call(n);
        },
        F = window.wafer.features.isTouchSafariDevice,
        K = [
          "_handleCloseClick",
          "_handleBgCloseClick",
          "_handleContentScroll",
          "_handleKeyDown",
        ],
        W = {
          background: "rgba(255 , 255, 255 ,0.8)",
          bottom: "0",
          display: "none",
          height: "100%",
          left: "0",
          position: "fixed",
          right: "0",
          top: "0",
          width: "100%",
        },
        I = window.wafer.utils,
        R = I.bindEvent,
        q = I.getConfigFromJSONScriptNode,
        H = I.getTemplateContent,
        U = I.setTimeout,
        V = I.throttle,
        J = I.unbindEvent,
        X = window.wafer.base,
        z = window.wafer.controllers.WaferBaseController,
        G = document,
        Q = G.body,
        Z = G.documentElement,
        $ =
          "scroll" === window.getComputedStyle(document.body).overflowY ? Q : Z,
        ee = void 0,
        te = void 0,
        oe = (function (e) {
          function t() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              o = e.containerClass,
              n = void 0 === o ? null : o,
              l = e.root,
              r = void 0 === l ? document : l,
              s = e.selector,
              c = e.src,
              u = void 0 === c ? "data-wf-lightbox" : c,
              h = e.successClass,
              p = void 0 === h ? "wafer-lightbox-loaded" : h,
              f = e.scrollDelay,
              d = void 0 === f ? 25 : f;
            a(this, t);
            var w = q(document.getElementById("wafer-lightbox-config")),
              b = i(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                  root: r,
                  selector: s,
                  WaferClass: P,
                }),
              );
            (b._options = Y({}, b._options, {
              props: { lightboxConfig: w },
              container: !!n && r.getElementsByClassName(n),
              src: u,
              successClass: p,
            })),
              K.forEach(function (e) {
                b[e] = b[e].bind(b);
              }),
              (b._handleContentScrollWithThrottle = V(
                function () {
                  return b._handleContentScroll.call(b);
                },
                d,
                b,
              )),
              (b._state = Y({}, b._state, {
                closeElem: null,
                currentInstance: null,
                lastScrollY: 0,
                open: !1,
              }));
            var y = b;
            return (
              (P.prototype.willOpen = function () {
                window.wafer.base.pauseVideo();
                var e = window.scrollY || 0;
                F
                  ? ((ee = Q.style),
                    Object.assign(Q.style, {
                      overflow: "hidden",
                      position: "fixed",
                      top: "-" + e + "px",
                      width: "100%",
                    }),
                    (te = $.style),
                    Object.assign($.style, { height: "100vh" }))
                  : ((te = $.style),
                    Object.assign($.style, { overflow: "hidden" })),
                  (y._state.lastScrollY = e),
                  (y._state.currentInstance = this),
                  (y._state.open = !0);
              }),
              (P.prototype.handleSwipeClose = function () {
                y._close({ source: "swipeClose" });
              }),
              b._renderLightBoxWrapper(),
              b.sync(),
              b
            );
          }
          return (
            c(t, e),
            B(t, [
              {
                key: "_close",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    o = t.source,
                    n = void 0 === o ? "closeClick" : o,
                    l = t.scrollRestore,
                    r = void 0 === l || l;
                  if (this._state.open) {
                    this._state.open = !1;
                    var s = this._options.props.wrapperMap,
                      a = s.contentElem,
                      i = s.elem,
                      c = s.wrapperElem,
                      u = this._state.currentInstance,
                      h = u._util,
                      p = h.closeDelay,
                      f = h.elem,
                      d = h.key,
                      w = h.pageTarget;
                    c.classList.add("wafer-lightbox-close-in-progress"),
                      Q.classList.add("wafer-lightbox-close-in-progress"),
                      U(function () {
                        Q.classList.remove(
                          "wafer-lightbox-open",
                          "wafer-lightbox-close-in-progress",
                        ),
                          c.classList.remove(
                            "wafer-lightbox-open",
                            "wafer-lightbox-close-in-progress",
                          ),
                          window.wafer.base.pauseVideo(),
                          X.destroy(a),
                          X.lock(a),
                          X.unlock(Q),
                          r &&
                            U(function () {
                              f.focus({ preventScroll: !0 });
                            }, 2),
                          F &&
                            ((Q.style = ee),
                            (document.documentElement.style = te)),
                          U(function () {
                            r && window.scrollTo(0, e._state.lastScrollY || 0),
                              (e._state.lastScrollY = 0);
                          }, 10),
                          F || ($.style = te),
                          Object.assign(i.style, { display: "none" }),
                          w && w.removeAttribute("aria-hidden"),
                          u.close(),
                          d &&
                            Q.classList.remove(
                              "wafer-ligthbox-source-" + d + "-open",
                            ),
                          X.emitWaferEvent("lightbox:close", {
                            elem: i,
                            meta: { source: n, targetElem: f },
                          });
                      }, p);
                  }
                },
              },
              {
                key: "_handleCloseClick",
                value: function (e) {
                  e.preventDefault(), this._close();
                },
              },
              {
                key: "_handleBgCloseClick",
                value: function (e) {
                  var t = this._options.props.wrapperMap,
                    o = t.wrapperElem;
                  e.target === o &&
                    this._close({ source: "backgroundCloseClick" });
                },
              },
              {
                key: "_handleContentScroll",
                value: function () {
                  X._handleScroll();
                },
              },
              {
                key: "_handleKeyDown",
                value: function (e) {
                  switch (((e = e || window.event), e.keyCode)) {
                    case 27:
                      this._close({ source: "escapeKeyPress" });
                  }
                },
              },
              {
                key: "handleEvent",
                value: function (e, o, n) {
                  if (
                    (N(
                      t.prototype.__proto__ ||
                        Object.getPrototypeOf(t.prototype),
                      "handleEvent",
                      this,
                    ).call(this, e, o, n),
                    n && "click" === n.type)
                  ) {
                    var l = n.target;
                    if (l === this._state.closeButton) return;
                    l.className &&
                      l.classList.contains("wafer-lightbox-close") &&
                      this._close();
                  }
                },
              },
              {
                key: "willDestroy",
                value: function (e) {
                  var t = this._options.props.wrapperMap;
                  if (t && e === Q) {
                    var o = t.wrapperElem,
                      n = t.closeElem,
                      l = t.contentElem,
                      r = window.getComputedStyle(o),
                      s = "none" !== r.overflow ? o : l;
                    J(s, "scroll", this._handleContentScrollWithThrottle),
                      n && J(n, "click", this._handleCloseClick),
                      J(o, "keydown", this._handleKeyDown),
                      J(o, "click", this._handleBgCloseClick);
                  }
                },
              },
              {
                key: "_renderLightBoxWrapper",
                value: function () {
                  var e = document.createElement("div"),
                    t = document.getElementById(
                      "wafer-lightbox-wrapper-template",
                    ),
                    o = void 0;
                  t && ((o = H(t)), (e.className = t.className)),
                    o ||
                      (o =
                        '\n<div class="wafer-lightbox-wrapper" tabindex="-1">\n    <div class="wafer-lightbox-content"/>\n</div>\n'),
                    e.classList.add("wafer-lightbox-overlay"),
                    Object.assign(e.style, W),
                    (e.innerHTML = o);
                  var n = e.getElementsByClassName("wafer-lightbox-wrapper")[0],
                    l = e.getElementsByClassName("wafer-lightbox-content")[0],
                    r = e.getElementsByClassName("wafer-lightbox-close")[0];
                  (this._state.closeButton = r),
                    Q.appendChild(e),
                    r && R(r, "click", this._handleCloseClick, { passive: !1 });
                  var s = window.getComputedStyle(n),
                    a = "hidden" !== s.overflow ? n : l;
                  a.classList.add("wafer-lightbox-element-to-scroll"),
                    R(n, "keydown", this._handleKeyDown),
                    R(a, "scroll", this._handleContentScrollWithThrottle),
                    R(n, "click", this._handleBgCloseClick),
                    (this._options.props = Y({}, this._options.props, {
                      wrapperMap: {
                        elem: e,
                        contentElem: l,
                        elementToScroll: a,
                        wrapperElem: n,
                      },
                    }));
                },
              },
            ]),
            t
          );
        })(z),
        ne = oe;
      t.default = new ne({ selector: "wafer-lightbox" });
    },
  });
});
