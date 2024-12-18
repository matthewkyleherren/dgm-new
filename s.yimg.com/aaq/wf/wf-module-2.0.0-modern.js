!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define("wafer-module", [], t)
      : "object" == typeof exports
        ? (exports["wafer-module"] = t())
        : ((e.wafer = e.wafer || {}),
          (e.wafer.wafers = e.wafer.wafers || {}),
          (e.wafer.wafers["wafer-module"] = t()));
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    function t(o) {
      if (r[o]) return r[o].exports;
      var n = (r[o] = { i: o, l: !1, exports: {} });
      return e[o].call(n.exports, n, n.exports, t), (n.l = !0), n.exports;
    }
    var r = {};
    return (
      (t.m = e),
      (t.c = r),
      (t.d = function (e, r, o) {
        t.o(e, r) ||
          Object.defineProperty(e, r, {
            configurable: !1,
            enumerable: !0,
            get: o,
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
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function n(e, t) {
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
      var c =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            }
            return e;
          },
        f = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var o = t[r];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, r, o) {
            return r && e(t.prototype, r), o && e(t, o), t;
          };
        })(),
        l = function e(t, r, o) {
          null === t && (t = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(t, r);
          if (void 0 === n) {
            var i = Object.getPrototypeOf(t);
            return null === i ? void 0 : e(i, r, o);
          }
          if ("value" in n) return n.value;
          var a = n.get;
          if (void 0 !== a) return a.call(o);
        },
        p = [],
        d = window.wafer,
        y = d.base,
        b = d.constants,
        w = d.utils,
        v = d.WaferBaseClass,
        h = w.setTimeout,
        m = b.ATTR_PREFIX,
        _ = (function (e) {
          function t(e) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i = r.selector,
              a = r.successClass;
            o(this, t);
            var s = n(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(
                  this,
                  e,
                  { selector: i },
                  { STATE_ATTRS: p },
                ),
              ),
              u = e.getAttribute(m + "module-id");
            return (
              (s._util = c({}, s._util, { elem: e, id: u, successClass: a })),
              e.classList.add(a),
              h(
                function () {
                  y.emitWaferEvent("module:added", {
                    elem: e,
                    meta: { id: u },
                  });
                },
                s,
                0,
              ),
              s
            );
          }
          return (
            i(t, e),
            f(t, [
              {
                key: "destroy",
                value: function () {
                  var e,
                    r = this._util.elem;
                  if (r) {
                    var o = this._util.id;
                    y.emitWaferEvent("module:destroyed", {
                      elem: r,
                      meta: { id: o },
                    });
                    for (
                      var n = arguments.length, i = Array(n), a = 0;
                      a < n;
                      a++
                    )
                      i[a] = arguments[a];
                    (e = l(
                      t.prototype.__proto__ ||
                        Object.getPrototypeOf(t.prototype),
                      "destroy",
                      this,
                    )).call.apply(e, [this].concat(i));
                  }
                },
              },
            ]),
            t
          );
        })(v);
      _.events = {};
      var O = _,
        j = window.wafer.controllers.WaferBaseController,
        g = (function (e) {
          function t() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = e.root,
              o = void 0 === r ? document : r,
              n = e.selector,
              i = e.successClass,
              u = void 0 === i ? "wafer-module-complete" : i;
            a(this, t);
            var c = s(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                root: o,
                selector: n,
                props: { selector: n, successClass: u },
                WaferClass: O,
              }),
            );
            return c.sync(), c;
          }
          return u(t, e), t;
        })(j),
        P = g;
      t.default = new P({ selector: "wafer-module" });
    },
  });
});
