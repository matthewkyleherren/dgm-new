!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
      ? define("wafer-sticky", [], e)
      : "object" == typeof exports
        ? (exports["wafer-sticky"] = e())
        : ((t.wafer = t.wafer || {}),
          (t.wafer.wafers = t.wafer.wafers || {}),
          (t.wafer.wafers["wafer-sticky"] = e()));
})("undefined" != typeof self ? self : this, function () {
  return (function (t) {
    function e(i) {
      if (o[i]) return o[i].exports;
      var r = (o[i] = { i: i, l: !1, exports: {} });
      return t[i].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
    }
    var o = {};
    return (
      (e.m = t),
      (e.c = o),
      (e.d = function (t, o, i) {
        e.o(t, o) ||
          Object.defineProperty(t, o, {
            configurable: !1,
            enumerable: !0,
            get: i,
          });
      }),
      (e.n = function (t) {
        var o =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(o, "a", o), o;
      }),
      (e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (e.p = "https://s.yimg.com/aaq/wf/"),
      e((e.s = "./src/entry.js"))
    );
  })({
    "./src/entry.js": function (t, e, o) {
      "use strict";
      function i(t) {
        if (Array.isArray(t)) {
          for (var e = 0, o = Array(t.length); e < t.length; e++) o[e] = t[e];
          return o;
        }
        return Array.from(t);
      }
      function r(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function n(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function s(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e,
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      function a(t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function l(t, e) {
        if (!t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
      }
      function c(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof e,
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          e &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(t, e)
              : (t.__proto__ = e));
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var f =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var o = arguments[e];
              for (var i in o)
                Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
            }
            return t;
          },
        u = (function () {
          function t(t, e) {
            var o = [],
              i = !0,
              r = !1,
              n = void 0;
            try {
              for (
                var s, a = t[Symbol.iterator]();
                !(i = (s = a.next()).done) &&
                (o.push(s.value), !e || o.length !== e);
                i = !0
              );
            } catch (t) {
              (r = !0), (n = t);
            } finally {
              try {
                !i && a.return && a.return();
              } finally {
                if (r) throw n;
              }
            }
            return o;
          }
          return function (e, o) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return t(e, o);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance",
            );
          };
        })(),
        y = (function () {
          function t(t, e) {
            for (var o = 0; o < e.length; o++) {
              var i = e[o];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function (e, o, i) {
            return o && t(e.prototype, o), i && t(e, i), e;
          };
        })(),
        p = function t(e, o, i) {
          null === e && (e = Function.prototype);
          var r = Object.getOwnPropertyDescriptor(e, o);
          if (void 0 === r) {
            var n = Object.getPrototypeOf(e);
            return null === n ? void 0 : t(n, o, i);
          }
          if ("value" in r) return r.value;
          var s = r.get;
          if (void 0 !== s) return s.call(i);
        },
        d = window.wafer,
        v = d.constants,
        h = d.features,
        b = d.utils,
        g = d.WaferBaseClass,
        m = b.findAncestor,
        w = v.ATTR_PREFIX,
        k = (function (t) {
          function e(t) {
            var o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i = o.selector;
            r(this, e);
            var s = n(
                this,
                (e.__proto__ || Object.getPrototypeOf(e)).call(
                  this,
                  t,
                  { selector: i },
                  {},
                ),
              ),
              a = t.getAttribute(w + "sticky-boundary"),
              l = t.getAttribute(w + "sticky-target"),
              c = t.getAttribute(w + "sticky-position"),
              y = (t.getAttribute(w + "sticky-offset") || "").split(" "),
              p = u(y, 4),
              d = p[0],
              v = p[1],
              h = p[2],
              b = p[3],
              g = t.getAttribute(w + "sticky-body-classname") || "";
            g && (g = g.split(" ")),
              (s._util = f({}, s._util, {
                bodyClassname: g,
                elem: t,
                targetElem:
                  (l && ((a && m(t, a)) || document.body).querySelector(l)) ||
                  t,
                offsetBottom: void 0 !== b && b,
                offsetLeft: void 0 !== v && v,
                offsetRight: void 0 !== h && h,
                offsetTop: void 0 !== d && d,
                stickyPosition: c,
              }));
            var k = s._util.targetElem,
              _ = k.style,
              O = _.bottom,
              S = _.left,
              j = _.position,
              E = _.right,
              P = _.top,
              T = _.width,
              C = k.getBoundingClientRect(),
              x = C.height,
              A = t.getBoundingClientRect(),
              R = A.height;
            return (
              (s._util.stickyAllowed = x <= R),
              (s._state = {
                isSticky: !1,
                targetElemOffsetTop: k.offsetTop,
                previousPositionValue: {
                  bottom: O,
                  left: S,
                  position: j,
                  right: E,
                  top: P,
                  width: T,
                },
                scrollContainerObserver: null,
              }),
              t === k && s.addEventListeners(),
              s
            );
          }
          return (
            s(e, t),
            y(e, [
              {
                key: "addEventListeners",
                value: function () {
                  var t = this;
                  if (h.mutationObserver) {
                    var e = this._util.targetElem;
                    (this._state.scrollContainerObserver = new MutationObserver(
                      function () {
                        t._state.isSticky && t.addSticky("resize");
                      },
                    )),
                      this._state.scrollContainerObserver.observe(e, {
                        childList: !0,
                        subtree: !0,
                      });
                  }
                },
              },
              {
                key: "updateStickyProperties",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    e = this._util.targetElem;
                  Object.assign(e.style, { width: "", position: "" }),
                    Object.assign(
                      e.style,
                      { position: "fixed", width: e.offsetWidth + "px" },
                      t,
                    );
                },
              },
              {
                key: "destroy",
                value: function () {
                  var t = this._state.scrollContainerObserver;
                  t && t.disconnect(),
                    p(
                      e.prototype.__proto__ ||
                        Object.getPrototypeOf(e.prototype),
                      "destroy",
                      this,
                    ).call(this);
                },
              },
              {
                key: "addSticky",
                value: function (t) {
                  var e = "resize" === t,
                    o = this._state.isSticky;
                  if (e || !o) {
                    var r = this._util,
                      n = r.bodyClassname,
                      s = r.elem,
                      a = r.offsetLeft,
                      l = r.offsetRight,
                      c = r.offsetTop,
                      f = r.stickyPosition,
                      u = r.targetElem,
                      y = {};
                    if (
                      (o || (this._state.targetElemOffsetTop = u.offsetTop),
                      "bottom" === f ? (y.bottom = "0") : c && (y.top = c),
                      a ? (y.left = a) : l && (y.right = l),
                      (this._state.isSticky = !0),
                      s !== u
                        ? Object.assign(u.style, { position: "fixed" }, y)
                        : this.updateStickyProperties(y),
                      u.classList.add("sticky-active"),
                      n)
                    ) {
                      var p;
                      (p = document.body.classList).add.apply(p, i(n));
                    }
                  }
                },
              },
              {
                key: "makeStickyFlow",
                value: function () {
                  var t = this._util,
                    e = t.bodyClassname,
                    o = t.elem,
                    r = t.offsetBottom,
                    n = t.offsetLeft,
                    s = t.offsetRight,
                    a = t.stickyPosition,
                    l = t.targetElem,
                    c = o.getBoundingClientRect(),
                    f = l.getBoundingClientRect(),
                    u = f.height,
                    y = c.bottom,
                    p = {};
                  if (
                    ("bottom" === a
                      ? (p.bottom = parseInt(r, 10) + "px")
                      : (p.top = y - u - parseInt(r, 10) + "px"),
                    n ? (p.left = n) : s && (p.right = s),
                    (this._state.isSticky = !0),
                    Object.assign(l.style, { position: "fixed" }, p),
                    l.classList.add("sticky-flow"),
                    e)
                  ) {
                    var d;
                    (d = document.body.classList).add.apply(d, i(e));
                  }
                },
              },
              {
                key: "removeSticky",
                value: function () {
                  if (this._state.isSticky) {
                    var t = this._util,
                      e = t.bodyClassname,
                      o = t.targetElem;
                    if (
                      (o.classList.remove("sticky-flow", "sticky-active"), e)
                    ) {
                      var r;
                      (r = document.body.classList).remove.apply(r, i(e));
                    }
                    (this._state.isSticky = !1),
                      Object.assign(o.style, this._state.previousPositionValue);
                  }
                },
              },
              {
                key: "config",
                get: function () {
                  var t = this._util,
                    e = t.offsetBottom,
                    o = t.offsetTop,
                    i = t.stickyAllowed,
                    r = t.targetElem;
                  return {
                    isSticky: this._state.isSticky,
                    offsetBottom: e,
                    offsetTop: o,
                    stickyAllowed: i,
                    targetElem: r,
                  };
                },
              },
            ]),
            e
          );
        })(g),
        _ = k,
        O = (function () {
          function t(t, e) {
            for (var o = 0; o < e.length; o++) {
              var i = e[o];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i);
            }
          }
          return function (e, o, i) {
            return o && t(e.prototype, o), i && t(e, i), e;
          };
        })(),
        S = window.wafer,
        j = S.base,
        E = S.controllers,
        P = S.utils,
        T = P.elementInView,
        C = P.throttle,
        x = E.WaferBaseController,
        A = (function (t) {
          function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              o = t.root,
              i = void 0 === o ? document : o,
              r = t.selector,
              n = t.validateDelay,
              s = void 0 === n ? 15 : n;
            a(this, e);
            var c = l(
              this,
              (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
                root: i,
                selector: r,
                props: { selector: r },
                WaferClass: _,
              }),
            );
            return (
              (c._validateWithThrottle = C(
                function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    e = t.source;
                  c.validate({ source: e });
                },
                s,
                c,
              )),
              c.sync(),
              c
            );
          }
          return (
            c(e, t),
            O(e, [
              {
                key: "handleScroll",
                value: function () {
                  this._validateWithThrottle();
                },
              },
              {
                key: "handleResize",
                value: function () {
                  this._validateWithThrottle({ source: "resize" });
                },
              },
              {
                key: "didSync",
                value: function () {
                  var t = this._state,
                    e = t.elementInstances,
                    o = t.mounted;
                  0 !== e.size && !o && (this._state.mounted = !0);
                },
              },
              {
                key: "handleSelfSticky",
                value: function (t, e, o) {
                  if (
                    window.pageYOffset + window.innerHeight >
                    t + e._state.targetElemOffsetTop
                  )
                    return void e.addSticky(o);
                  e.removeSticky(o);
                },
              },
              {
                key: "willValidate",
                value: function (t) {
                  var e = this,
                    o =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    i = o.source,
                    r = this._state.elementInstances;
                  t.forEach(function (t) {
                    var o = r.get(t),
                      n = o.instance,
                      s = T(t, {}, j.viewport),
                      a = n.config,
                      l = a.isSticky,
                      c = a.stickyAllowed;
                    if (!s || !c) return void (l && n.removeSticky());
                    var f = n.config.targetElem,
                      u = f.getBoundingClientRect(),
                      y = u.height;
                    if (f !== t) {
                      var p = t.getBoundingClientRect(),
                        d = p.bottom,
                        v = p.top;
                      if (p.height <= y) return;
                      var h = n.config,
                        b = h.offsetTop,
                        g = h.offsetBottom;
                      (g = g && parseInt(g, 10)),
                        (b = b && parseInt(b, 10)),
                        d - (y + g + b) < 0
                          ? n.makeStickyFlow(i)
                          : l && v - b >= 0
                            ? n.removeSticky(i)
                            : v - b < 0 && n.addSticky(i);
                    } else e.handleSelfSticky(y, n, i);
                  });
                },
              },
            ]),
            e
          );
        })(x),
        R = A;
      e.default = new R({ selector: ".wafer-sticky" });
    },
  });
});
