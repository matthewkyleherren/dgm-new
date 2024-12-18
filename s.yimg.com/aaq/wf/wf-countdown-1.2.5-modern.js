!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define("wafer-countdown", [], t)
      : "object" == typeof exports
        ? (exports["wafer-countdown"] = t())
        : ((e.wafer = e.wafer || {}),
          (e.wafer.wafers = e.wafer.wafers || {}),
          (e.wafer.wafers["wafer-countdown"] = t()));
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function (e, n, r) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = "https://s.yimg.com/aaq/wf/"),
      t((t.s = "./src/entry.js"))
    );
  })({
    "./src/entry.js": function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function a(e, t) {
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
      Object.defineProperty(t, "__esModule", { value: !0 });
      var u = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        i = window.wafer.base,
        f = 24,
        c = { HOUR: "hours" },
        l = function (e) {
          var t = [];
          return (
            e &&
              "string" == typeof e &&
              e.split(";").forEach(function (e) {
                t.push(e);
              }),
            t
          );
        },
        d = function (e) {
          var t = Date.parse(e) - Date.parse(new Date()),
            n = new Map();
          if (t > 0) {
            var r = Math.floor((t / 1e3) % 60),
              o = Math.floor((t / 1e3 / 60) % 60),
              a = Math.floor((t / 36e5) % f),
              s = Math.floor(t / 864e5);
            n.set("total", t),
              n.set("days", s),
              n.set("hours", a),
              n.set("minutes", o),
              n.set("seconds", r);
          } else
            n.set("total", 0),
              n.set("days", 0),
              n.set("hours", 0),
              n.set("minutes", 0),
              n.set("seconds", 0);
          return n;
        },
        w = (function () {
          function e(t) {
            r(this, e), (this._util = { elem: t });
            var n = t.getAttribute("data-wf-countdown-type") || "",
              o = t.getAttribute("data-wf-countdown-largest-unit") || "";
            if (n && c.HOUR === o) {
              var a = new RegExp("(\\b" + o + ";.*)", "gm").exec(n),
                s = Array.isArray(a) && a[1];
              s && (n = s);
            }
            if (n) {
              var u = l(n),
                i = new Map();
              u.forEach(function (e) {
                i.set(e, t.getElementsByClassName("wafer-countdown-" + e)[0]);
              });
              var f = t.getAttribute("data-wf-countdown-enddate");
              f && i.size === u.length && this.setupCount(i, f, o);
            }
          }
          return (
            u(e, [
              {
                key: "addBreakpointClass",
                value: function (e) {
                  var t = this._util.elem,
                    n = t.classList,
                    r = e.get("days"),
                    o = e.get("hours"),
                    a = e.get("minutes"),
                    s = e.get("seconds"),
                    u = 0 === r && 0 !== o,
                    f = 0 === r && 0 === o && 0 !== a,
                    c = 0 === r && 0 === o && 0 === a && 0 === s,
                    l = void 0;
                  c
                    ? (n.remove(
                        "wafer-countdown-lessthan24h",
                        "wafer-countdown-lessthan1h",
                      ),
                      n.add("wafer-countdown-expired"),
                      (l = "expired"))
                    : f
                      ? (n.remove("wafer-countdown-lessthan24h"),
                        n.add("wafer-countdown-lessthan1h"),
                        (l = "lessThanAnHour"))
                      : u &&
                        (n.add("wafer-countdown-lessthan24h"),
                        (l = "lessThanADay")),
                    l &&
                      i.emitWaferEvent("countdown:" + l, { elem: t, meta: {} });
                },
              },
              {
                key: "setupCount",
                value: function (e, t, n) {
                  function r() {
                    var r = d(t);
                    o.addBreakpointClass(r),
                      e.forEach(function (e, t) {
                        var o = r.get(t);
                        t === c.HOUR &&
                          n === c.HOUR &&
                          (o += r.get("days") * f);
                        var a = o >= 10 ? "" + o : ("0" + o).slice(-2);
                        e.innerHTML !== a && (e.innerHTML = a);
                      }),
                      r.get("total") <= 0 &&
                        clearInterval(o._util.countTimeInterval);
                  }
                  var o = this,
                    a = o._util.elem;
                  r(),
                    a.classList.add("wafer-countdown-started"),
                    (o._util.countTimeInterval = setInterval(r, 1e3));
                },
              },
              {
                key: "destroy",
                value: function () {
                  clearInterval(this._util.countTimeInterval);
                },
              },
            ]),
            e
          );
        })(),
        p = w,
        h = window.wafer.controllers.WaferBaseController,
        y = (function (e) {
          function t() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = e.root,
              r = void 0 === n ? document : n,
              s = e.selector,
              u = void 0 === s ? ".wafer-countdown" : s;
            o(this, t);
            var i = a(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                root: r,
                selector: u,
                WaferClass: p,
              }),
            );
            return i.sync(), i;
          }
          return s(t, e), t;
        })(h),
        v = y;
      t.default = new v({ selector: ".wafer-countdown" });
    },
  });
});
