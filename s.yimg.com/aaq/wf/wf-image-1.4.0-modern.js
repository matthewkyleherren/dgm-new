!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define("wafer-image", [], t)
      : "object" == typeof exports
        ? (exports["wafer-image"] = t())
        : ((e.wafer = e.wafer || {}),
          (e.wafer.wafers = e.wafer.wafers || {}),
          (e.wafer.wafers["wafer-image"] = t()));
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    function t(a) {
      if (r[a]) return r[a].exports;
      var o = (r[a] = { i: a, l: !1, exports: {} });
      return e[a].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var r = {};
    return (
      (t.m = e),
      (t.c = r),
      (t.d = function (e, r, a) {
        t.o(e, r) ||
          Object.defineProperty(e, r, {
            configurable: !1,
            enumerable: !0,
            get: a,
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
      function a(e, t) {
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
      function n(e, t, r) {
        r && e.setAttribute("srcset", r), (e.src = t);
      }
      function i(e, t, r) {
        var a = e.getAttribute(r);
        a && e.setAttribute(t, a);
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var c =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var a in r)
                Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
            }
            return e;
          },
        l = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var a = t[r];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function (t, r, a) {
            return r && e(t.prototype, r), a && e(t, a), t;
          };
        })(),
        u = function e(t, r, a) {
          null === t && (t = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(t, r);
          if (void 0 === o) {
            var s = Object.getPrototypeOf(t);
            return null === s ? void 0 : e(s, r, a);
          }
          if ("value" in o) return o.value;
          var n = o.get;
          if (void 0 !== n) return n.call(a);
        },
        f = window.wafer,
        d = f.constants,
        p = f.utils,
        y = p.bindEvent,
        m = p.convertNodeListToArray,
        v = p.each,
        b = p.findAncestor,
        g = p.isNodeName,
        w = p.unbindEvent,
        h = d.ATTR_PREFIX,
        _ = window.wafer.controllers.WaferLazyController,
        k = window.wafer.base,
        S = (function (e) {
          function t() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = e.root,
              s = void 0 === r ? document : r;
            a(this, t);
            var n = t.prototype.configs,
              i = n.darkSrcset,
              l = n.nativeClass,
              u = n.selector,
              f = n.separator,
              d = n.srcset,
              p = n.successClass,
              y = o(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                  root: s,
                  selector: u,
                  successClass: p,
                }),
              );
            return (
              (y._options = c({}, y._options, {
                darkSrcset: i,
                defaultOffsetX: 0,
                defaultOffsetY: 500,
                nativeClass: l,
                separator: f,
                srcset: d,
              })),
              y.sync(),
              y
            );
          }
          return (
            s(t, e),
            l(t, [
              {
                key: "nativeLazyLoadElement",
                value: function (e) {
                  var t = this._getImageMetaWithType(e),
                    r = t.type;
                  if (r) {
                    var a = window.wafer.base.colorSchema,
                      o = "dark" === a,
                      s = this._options,
                      n = s.darkSrcset,
                      c = s.srcset,
                      l = s.nativeClass,
                      u = s.selector,
                      f = (o && n) || c;
                    e.setAttribute("loading", "lazy"),
                      e.classList.remove(u.replace(".", "")),
                      e.classList.add(l),
                      "picture" === r &&
                        v(
                          m(e.parentNode.getElementsByTagName("source")),
                          function (e) {
                            i(e, "srcset", f);
                          },
                        ),
                      this._addEventsToElement(e, e, "native", t);
                  }
                },
              },
              {
                key: "loadElement",
                value: function (e) {
                  var t = this,
                    r =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  return new Promise(function (a) {
                    if (t._shouldLoadElement(e) || r) {
                      var o = t._getImageMetaWithType(e),
                        s = o.type;
                      if (!s) return a();
                      var n = t._options,
                        c = n.darkSrcset,
                        l = n.srcset,
                        u = window.wafer.base.colorSchema,
                        f = "dark" === u,
                        d = (f && c) || l,
                        p = new Image();
                      "picture" === s &&
                        ((p = e),
                        v(
                          m(e.parentNode.getElementsByTagName("source")),
                          function (e) {
                            i(e, "srcset", d);
                          },
                        )),
                        t._addEventsToElement(e, p, "default", o);
                    }
                    return a();
                  });
                },
              },
              {
                key: "handleColorSchemaChange",
                value: function () {
                  var e = this._state.darkmodeInstances,
                    t = !0,
                    r = !1,
                    a = void 0;
                  try {
                    for (
                      var o, s = e.keys()[Symbol.iterator]();
                      !(t = (o = s.next()).done);
                      t = !0
                    ) {
                      var n = o.value;
                      this.loadElement(n, !0);
                    }
                  } catch (e) {
                    (r = !0), (a = e);
                  } finally {
                    try {
                      !t && s.return && s.return();
                    } finally {
                      if (r) throw a;
                    }
                  }
                },
              },
              {
                key: "_addBoundarySuccessClass",
                value: function (e) {
                  var t = e.getAttribute("data-wf-boundary"),
                    r = t && b(e, t);
                  r &&
                    (r.classList.add("wafer-image-boundary-success"),
                    r.classList.remove("wafer-image-boundary-error"));
                },
              },
              {
                key: "_itemLoaded",
                value: function (e) {
                  u(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    "_itemLoaded",
                    this,
                  ).call(this, e),
                    this._addBoundarySuccessClass(e);
                },
              },
              {
                key: "_addEventsToElement",
                value: function (e, t, r, a) {
                  var o = this,
                    s = a.elemSrc,
                    i = a.elemSrcset,
                    c = a.fallbackSrc,
                    l = a.type,
                    u = this._options,
                    f = u.error,
                    d = u.errorClass,
                    p = u.successClass;
                  this._addDarkmodeAttribute(e);
                  var m = function r() {
                      f && f(e, "invalid");
                      var a = e.getAttribute("data-wf-add-error-to-parent"),
                        o = e.getAttribute("data-wf-boundary"),
                        n = o && b(e, o);
                      (a = Number(a) || 0),
                        a && e.parentNode.classList.add(d),
                        c &&
                          (e.classList.add("wafer-img-fallback"), (e.src = c)),
                        n &&
                          (n.classList.remove("wafer-image-boundary-success"),
                          n.classList.add("wafer-image-boundary-error")),
                        e.classList.add(d),
                        k.emitError({
                          elem: e,
                          meta: { src: s, srcset: i },
                          name: "WaferImage",
                          stack: null,
                        }),
                        w(t, "error", r),
                        w(t, "load", v);
                    },
                    v = function a() {
                      "native" !== r
                        ? ("image" === l || "picture" === l
                            ? n(e, s, i)
                            : (e.style.backgroundImage = 'url("' + s + '")'),
                          o._itemLoaded(e))
                        : (o._addBoundarySuccessClass(e), e.classList.add(p)),
                        w(t, "error", m),
                        w(t, "load", a);
                    };
                  y(t, "error", m), y(t, "load", v), n(t, s, i);
                },
              },
              {
                key: "_addDarkmodeAttribute",
                value: function (e) {
                  var t = this._options,
                    r = t.darkSrc,
                    a = t.darkSrcset;
                  (e.getAttribute(r) ||
                    e.getAttribute(a) ||
                    e.getAttribute(h + "darkmode-fallback-src")) &&
                    e.setAttribute("data-wf-has-darkmode", "1");
                },
              },
              {
                key: "_getImageMetaWithType",
                value: function (e) {
                  var t = this._options,
                    r = t.darkSrc,
                    a = t.darkSrcset,
                    o = t.isRetina,
                    s = t.separator,
                    n = t.src,
                    i = t.srcset,
                    c = window.wafer.base.colorSchema,
                    l = "dark" === c,
                    u = e.getAttribute(l && r) || e.getAttribute(n),
                    f = e.getAttribute(h + "darkmode-fallback-src"),
                    d = e.getAttribute(h + "fallback-src");
                  if (u) {
                    var p = u.split(s),
                      y = p[o && p.length > 1 ? 1 : 0],
                      m = e.getAttribute((l && a) || i),
                      v = e.tagName.toLowerCase(),
                      b = "img" === v,
                      w = e.parentNode,
                      _ = w && g(w, "picture");
                    if (b || void 0 === e.src)
                      return (
                        (d = (l && f) || d),
                        _
                          ? {
                              elemSrc: y,
                              elemSrcset: m,
                              fallbackSrc: d,
                              type: "picture",
                            }
                          : {
                              elemSrc: y,
                              elemSrcset: m,
                              fallbackSrc: d,
                              type: b ? "image" : v,
                            }
                      );
                  }
                  return {};
                },
              },
            ]),
            t
          );
        })(_);
      S.prototype.configs = {
        darkSrcset: "data-wf-darkmode-srcsrt",
        selector: ".wafer-img",
        separator: "|",
        srcset: "data-wf-srcset",
        nativeClass: "wafer-img-native",
        successClass: "wafer-img-loaded",
        allowPrefetch: !0,
      };
      var O = S;
      t.default = new O({ selector: O.prototype.configs.selector });
    },
  });
});
