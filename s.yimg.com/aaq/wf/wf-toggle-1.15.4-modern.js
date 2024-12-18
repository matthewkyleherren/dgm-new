!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define("wafer-toggle", [], t)
      : "object" == typeof exports
        ? (exports["wafer-toggle"] = t())
        : ((e.wafer = e.wafer || {}),
          (e.wafer.wafers = e.wafer.wafers || {}),
          (e.wafer.wafers["wafer-toggle"] = t()));
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    function t(n) {
      if (r[n]) return r[n].exports;
      var o = (r[n] = { i: n, l: !1, exports: {} });
      return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var r = {};
    return (
      (t.m = e),
      (t.c = r),
      (t.d = function (e, r, n) {
        t.o(e, r) ||
          Object.defineProperty(e, r, {
            configurable: !1,
            enumerable: !0,
            get: n,
          });
      }),
      (t.n = function (e) {
        var r =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(r, "a", r), r;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = "https://s.yimg.com/aaq/wf/"),
      t((t.s = "./src/entry.js"))
    );
  })({
    "./src/entry.js": function (e, t, r) {
      "use strict";
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function i(e, t) {
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
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function u(e, t) {
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
      var l = (function () {
          function e(e, t) {
            var r = [],
              n = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(n = (a = s.next()).done) &&
                (r.push(a.value), !t || r.length !== t);
                n = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                !n && s.return && s.return();
              } finally {
                if (o) throw i;
              }
            }
            return r;
          }
          return function (t, r) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, r);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance",
            );
          };
        })(),
        c =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        f = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        d = function e(t, r, n) {
          null === t && (t = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(t, r);
          if (void 0 === o) {
            var i = Object.getPrototypeOf(t);
            return null === i ? void 0 : e(i, r, n);
          }
          if ("value" in o) return o.value;
          var a = o.get;
          if (void 0 !== a) return a.call(n);
        },
        v = window.wafer,
        h = v.constants,
        y = v.utils,
        p = v.WaferBaseClass,
        g = y.bindEvent,
        m = y.convertNodeListToArray,
        b = y.findAncestor,
        w = y.setTimeout,
        _ = y.unbindEvent,
        k = h.ATTR_PREFIX,
        E = ["key"],
        O = [
          "click",
          "mouseenter",
          "mouseEnterDelay",
          "mouseleave",
          "mouseLeaveDelay",
          "onLoad",
          "touchend",
          "touchmove",
          "touchstart",
        ],
        x = window.wafer.base,
        A = function (e) {
          var t = new Map();
          return (
            e &&
              "string" == typeof e &&
              e.split(";").forEach(function (e) {
                var r = e.split(":");
                if (3 === r.length) {
                  var n = r[0];
                  t.has(n) || t.set(n, []), t.get(n).push(r.slice(1));
                }
              }),
            t
          );
        },
        T = (function (e) {
          function t(e) {
            n(this, t);
            var r = o(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(
                  this,
                  e,
                  {},
                  { STATE_ATTRS: E },
                ),
              ),
              i = e.getAttribute(k + "toggle-aria-expanded"),
              a = e.getAttribute(k + "toggle-delay"),
              s = e.getAttribute(k + "toggle-class") || "",
              u = e.getAttribute(k + "toggle-prevent-browser-default-behavior"),
              l = e.getAttribute(k + "toggle-prevent-scroll"),
              f = e.getAttribute(k + "sync-delay"),
              d = e.getAttribute(k + "toggle-target"),
              v = e.getAttribute(k + "toggle-boundary"),
              h = e.getAttribute(k + "toggle-aria-expanded-class"),
              y = e.getAttribute(k + "toggle-set-focus"),
              p = null;
            "string" == typeof y &&
              "NaN" === String(Number(y)) &&
              ((p = y), (y = "1"));
            var g = (r._util = c({}, r._util, {
              ariaExpanded: i,
              ariaExpandedClass: null === h || void 0 === h ? 0 : h,
              boundaryElem: v && b(e, v),
              delay: null === a || void 0 === a ? 0 : Number(a),
              drag: {
                endX: 0,
                endY: 0,
                overallDirectionX: 0,
                startX: 0,
                startY: 0,
              },
              elem: e,
              focusSelector: p,
              focusTarget: null,
              preventBrowserDefaultBehavior:
                null === u || void 0 === u ? 0 : Number(u),
              preventScroll: null === l || void 0 === l ? 0 : Number(l),
              setFocus: null === y || void 0 === y ? 0 : Number(y),
              syncDelay: null === f || void 0 === f ? 0 : Number(f),
              targetSelector: d,
            }));
            return (
              (r._state = c({}, r._state, {
                clickAndMouseExitTimeout: null,
                isClickAndMouseExit: !1,
              })),
              i && r.addAria(),
              s &&
                (O.forEach(function (e) {
                  r[e] = r[e].bind(r);
                }),
                (g.events = A(s)),
                g.events.get("onLoad") && r.processTargets("onLoad"),
                r.addEventListeners()),
              r
            );
          }
          return (
            i(t, e),
            f(t, [
              {
                key: "addAria",
                value: function () {
                  var e = this._util,
                    t = e.ariaExpanded,
                    r = e.elem,
                    n = e.targetSelector;
                  r.setAttribute("aria-expanded", Boolean(Number(t)));
                  var o = n.substring(1);
                  document.getElementById(o) &&
                    r.setAttribute("aria-controls", o);
                },
              },
              {
                key: "addEventListeners",
                value: function () {
                  var e = this._util,
                    t = e.elem,
                    r = e.events;
                  if (0 !== r.size) {
                    var n = !0,
                      o = !1,
                      i = void 0;
                    try {
                      for (
                        var a, s = r.keys()[Symbol.iterator]();
                        !(n = (a = s.next()).done);
                        n = !0
                      ) {
                        var u = a.value,
                          l = (this._state.isClickAndMouseExit =
                            "clickAndMouseExit" === u);
                        "click" === u || l
                          ? t.classList.add(
                              "has-toggle-click",
                              "has-wafer-click",
                            )
                          : "onLoad" !== u &&
                            ("clickOutside" !== u
                              ? 0 === u.indexOf("swipe")
                                ? (g(t, "touchstart", this.touchstart),
                                  g(t, "touchend", this.touchend),
                                  g(t, "touchmove", this.touchmove, {
                                    passive: !1,
                                  }))
                                : 0 === u.indexOf("touch") || g(t, u, this[u])
                              : (this._state.isClickOutside = !0));
                      }
                    } catch (e) {
                      (o = !0), (i = e);
                    } finally {
                      try {
                        !n && s.return && s.return();
                      } finally {
                        if (o) throw i;
                      }
                    }
                  }
                },
              },
              {
                key: "removeEventListeners",
                value: function () {
                  var e = this._util.elem;
                  _(e, "touchstart", this.touchstart),
                    _(e, "touchend", this.touchend),
                    _(e, "touchmove", this.touchmove, { passive: !1 }),
                    _(e, "mouseenter", this.mouseEnterDelay),
                    _(e, "mouseleave", this.mouseLeaveDelay),
                    _(e, "mouseenter", this.mouseenter),
                    _(e, "mouseleave", this.mouseleave);
                },
              },
              {
                key: "click",
                value: function (e) {
                  if (
                    (this._util.preventBrowserDefaultBehavior &&
                      (e.preventDefault(), e.stopPropagation()),
                    this._state.isClickAndMouseExit)
                  ) {
                    var t = this._util.elem;
                    g(t, "mouseenter", this.mouseEnterDelay),
                      g(t, "mouseleave", this.mouseLeaveDelay);
                  }
                  this.processTargets("click");
                },
              },
              {
                key: "onLoad",
                value: function () {
                  this.processTargets("onLoad");
                },
              },
              {
                key: "mouseenter",
                value: function () {
                  this.processTargets("mouseenter");
                },
              },
              {
                key: "mouseEnterDelay",
                value: function () {
                  clearTimeout(this._state.clickAndMouseExitTimeout);
                },
              },
              {
                key: "mouseleave",
                value: function () {
                  this.processTargets("mouseleave");
                },
              },
              {
                key: "mouseLeaveDelay",
                value: function () {
                  var e = this;
                  this._state.clickAndMouseExitTimeout &&
                    clearTimeout(this._state.clickAndMouseExitTimeout);
                  var t = this._util.delay;
                  this._state.clickAndMouseExitTimeout = w(
                    function () {
                      e.processTargets("clickAndMouseExit");
                    },
                    t,
                    this,
                  );
                },
              },
              {
                key: "touchstart",
                value: function (e) {
                  var t = this._util.drag,
                    r = e.touches[0],
                    n = r.clientY,
                    o = r.pageX;
                  (t.startX = o), (t.startY = n);
                },
              },
              {
                key: "touchend",
                value: function (e) {
                  this.clearDrag();
                },
              },
              {
                key: "touchmove",
                value: function (e) {
                  var t = this._util.drag;
                  (t.endX = e.touches[0].pageX),
                    (t.endY = e.touches[0].clientY);
                  var r = 0;
                  t.startX !== t.endX && (r = t.startX > t.endX ? 1 : -1),
                    (t.overallDirectionX = r),
                    this.isValidSwipe() &&
                      (e.cancelable && e.preventDefault(),
                      this.triggerSwipe(),
                      this.clearDrag(),
                      this.touchstart(e));
                },
              },
              {
                key: "isValidSwipe",
                value: function () {
                  var e = this._util,
                    t = Math.abs(e.drag.startX - e.drag.endX);
                  return t > 30 && t > Math.abs(e.drag.startY - e.drag.endY);
                },
              },
              {
                key: "triggerSwipe",
                value: function () {
                  var e = this._util;
                  1 === e.drag.overallDirectionX
                    ? this.swipeleft()
                    : -1 === e.drag.overallDirectionX && this.swiperight();
                },
              },
              {
                key: "swipeleft",
                value: function () {
                  this.processTargets("swipeleft");
                },
              },
              {
                key: "swiperight",
                value: function () {
                  this.processTargets("swiperight");
                },
              },
              {
                key: "clearDrag",
                value: function () {
                  this._util.drag = {
                    endX: 0,
                    endY: 0,
                    overallDirectionX: 0,
                    startX: 0,
                    startY: 0,
                  };
                },
              },
              {
                key: "executeAction",
                value: function (e, r, n, o, i, a, s) {
                  var u = this._util,
                    l = u.ariaExpanded,
                    c = u.ariaExpandedClass,
                    f = u.elem,
                    d = u.focusTarget,
                    v = u.preventScroll,
                    h = u.setFocus,
                    y = u.syncDelay;
                  if (
                    (r.classList[o](i),
                    (a || s) &&
                      w(
                        function () {
                          window.wafer.base[a ? "sync" : "syncUI"](r);
                        },
                        y,
                        this,
                      ),
                    h)
                  ) {
                    var p = void 0;
                    v && (p = { preventScroll: !0 }),
                      w(function () {
                        d.focus(p),
                          d !== document.activeElement &&
                            (d.setAttribute("tabIndex", "-1"), d.focus(p));
                      }, 5);
                  }
                  l &&
                    ("true" === f.getAttribute("aria-expanded")
                      ? (f.setAttribute("aria-expanded", "false"),
                        f.classList.remove(c))
                      : (f.setAttribute("aria-expanded", "true"),
                        f.classList.add(c))),
                    x._emit(
                      {
                        elem: f,
                        meta: {
                          action: n,
                          className: i,
                          eventName: e,
                          target: r,
                        },
                        name: t.name,
                      },
                      "toggle:change",
                    );
                },
              },
              {
                key: "processTargets",
                value: function (e) {
                  var t = this,
                    r = this._util,
                    n = r.elem,
                    o = r.events;
                  if (!o)
                    return void x.emitError({
                      name: "WaferToggle",
                      elem: n,
                      meta: { elemClassName: n.getAttribute("class") },
                      stack: new Error("events missing for toggle"),
                    });
                  var i = this._util,
                    a = i.boundaryElem,
                    s = i.delay,
                    u = i.focusSelector,
                    c = i.setFocus,
                    f = i.targetSelector;
                  if (o.has(e)) {
                    var d = o.get(e);
                    this.getTargets(f, a).forEach(function (r) {
                      var n =
                        t._util.focusTarget || Boolean(c && u)
                          ? r.querySelector(u) || r
                          : r;
                      (t._util.focusTarget = t._util.focusTarget || n),
                        d.forEach(function (n) {
                          var o = l(n, 2),
                            i = o[0],
                            u = o[1],
                            c = r.classList,
                            f = i
                              .replace("WithSyncUIDelay", "")
                              .replace("WithSyncDelay", "")
                              .replace("WithSyncUI", "")
                              .replace("WithSync", "")
                              .replace("WithDelay", ""),
                            d = -1 !== i.indexOf("WithSyncDelay"),
                            v = d || -1 !== i.indexOf("WithSync"),
                            h = d || -1 !== i.indexOf("Delay"),
                            y = !1;
                          if (
                            (v &&
                              (y = -1 !== i.indexOf("WithSyncUI")) &&
                              (v = !1),
                            "removeFromOthers" === f)
                          )
                            m(
                              (a || document).getElementsByClassName(u),
                            ).forEach(function (e) {
                              e !== r && e.classList.remove(u);
                            });
                          else if (c[f]) {
                            var p = c.contains(u);
                            t.didComplete(null),
                              ("toggle" === f ||
                                ("remove" === f && p) ||
                                ("add" === f && !p)) &&
                                (h
                                  ? w(
                                      function () {
                                        t.executeAction(e, r, i, f, u, v, y);
                                      },
                                      s,
                                      t,
                                    )
                                  : t.executeAction(e, r, i, f, u, v, y));
                          }
                        });
                    });
                  }
                },
              },
              {
                key: "getTargets",
                value: function (e, t) {
                  return e && "string" == typeof e
                    ? m((t || document).querySelectorAll(e))
                    : [this._util.elem];
                },
              },
              {
                key: "remove",
                value: function () {
                  this._util.elem.remove();
                },
              },
              {
                key: "handleClickOutside",
                value: function (e) {
                  if (this._state.isClickOutside) {
                    (0, e.waferComposedMap)().get(this._util.elem) ||
                      this.processTargets("clickOutside");
                  }
                },
              },
              {
                key: "stateDidUpdate",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = e.stateAttr,
                    r = this._util.events;
                  "key" === t &&
                    r.has("stateChange") &&
                    ("1" === this._util.key
                      ? (r.get("stateChange")[0][0] = "add")
                      : (r.get("stateChange")[0][0] = "remove"),
                    this.processTargets("stateChange"));
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.removeEventListeners(),
                    d(
                      t.prototype.__proto__ ||
                        Object.getPrototypeOf(t.prototype),
                      "destroy",
                      this,
                    ).call(this);
                },
              },
            ]),
            t
          );
        })(p);
      T.events = { click: [["has-toggle-click", "click"]] };
      var D = T,
        S = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        j = function e(t, r, n) {
          null === t && (t = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(t, r);
          if (void 0 === o) {
            var i = Object.getPrototypeOf(t);
            return null === i ? void 0 : e(i, r, n);
          }
          if ("value" in o) return o.value;
          var a = o.get;
          if (void 0 !== a) return a.call(n);
        },
        L = window.wafer.controllers.WaferBaseController,
        C = window.wafer.utils,
        P = C.bindEvent,
        X = C.unbindEvent,
        M = ["_handleKeyDown"],
        N = (function (e) {
          function t() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = e.root,
              n = void 0 === r ? document : r,
              o = e.selector,
              i = void 0 === o ? ".wafer-toggle" : o;
            a(this, t);
            var u = s(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                root: n,
                selector: i,
                WaferClass: D,
              }),
            );
            return (
              u.sync(),
              M.forEach(function (e) {
                u[e] = u[e].bind(u);
              }),
              u.addEventListeners(),
              u
            );
          }
          return (
            u(t, e),
            S(t, [
              {
                key: "addEventListeners",
                value: function () {
                  P(document, "keydown", this._handleKeyDown);
                },
              },
              {
                key: "_handleKeyDown",
                value: function (e) {
                  switch (((e = e || window.event), e.keyCode)) {
                    case 27:
                      var t = this._state.elementInstances,
                        r = !0,
                        n = !1,
                        o = void 0;
                      try {
                        for (
                          var i, a = t.values()[Symbol.iterator]();
                          !(r = (i = a.next()).done);
                          r = !0
                        ) {
                          var s = i.value,
                            u = s.instance;
                          u.processTargets("clickOutside"),
                            u.processTargets("clickAndMouseExit");
                        }
                      } catch (e) {
                        (n = !0), (o = e);
                      } finally {
                        try {
                          !r && a.return && a.return();
                        } finally {
                          if (n) throw o;
                        }
                      }
                  }
                },
              },
              {
                key: "destroy",
                value: function (e) {
                  j(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    "destroy",
                    this,
                  ).call(this, e),
                    e || X(document, "keydown", this._handleKeyDown);
                },
              },
            ]),
            t
          );
        })(L),
        W = N;
      t.default = new W({});
    },
  });
});
