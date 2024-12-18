!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define("wafer-beacon", [], t)
      : "object" == typeof exports
        ? (exports["wafer-beacon"] = t())
        : ((e.wafer = e.wafer || {}),
          (e.wafer.wafers = e.wafer.wafers || {}),
          (e.wafer.wafers["wafer-beacon"] = t()));
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    function t(n) {
      if (r[n]) return r[n].exports;
      var i = (r[n] = { i: n, l: !1, exports: {} });
      return e[n].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
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
      function i(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function o(e, t) {
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
      var l =
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
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(n = (a = s.next()).done) &&
                (r.push(a.value), !t || r.length !== t);
                n = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                !n && s.return && s.return();
              } finally {
                if (i) throw o;
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
        u = (function () {
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
        h = function e(t, r, n) {
          null === t && (t = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(t, r);
          if (void 0 === i) {
            var o = Object.getPrototypeOf(t);
            return null === o ? void 0 : e(o, r, n);
          }
          if ("value" in i) return i.value;
          var a = i.get;
          if (void 0 !== a) return a.call(n);
        },
        v = ["image-beacons", "beacons"],
        p = window.wafer,
        d = p.base,
        y = p.constants,
        b = p.WaferBaseClass,
        g = window.wafer.utils,
        w = g.elementInView,
        m = g.fireBeacon,
        _ = ["handleBeaconClick", "handleBeaconMouseenter"],
        O = y.ATTR_PREFIX,
        k = (function (e) {
          function t(e) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              o = r.selector,
              a = r.successClass;
            n(this, t);
            var s = i(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(
                  this,
                  e,
                  { selector: o, successClass: a },
                  { STATE_ATTRS: v },
                ),
              ),
              c = e.getAttribute(O + "trigger-delay"),
              u =
                s._util["image-beacons"] || e.getAttribute(O + "image-beacons"),
              h = s._util.beacons || e.getAttribute(O + "beacons"),
              p = (e.getAttribute(O + "trigger-offset") || "").split(" "),
              d = f(p, 2),
              y = d[0],
              b = d[1],
              g = e.getAttribute(O + "trigger") || "viewport",
              w = (e.getAttribute(O + "trigger-percentage") || "").split(" "),
              m = f(w, 2),
              k = m[0],
              T = m[1],
              j = k ? Math.max(Math.min(100, parseInt(k, 10)), 0) : 50,
              C = T ? Math.max(Math.min(100, parseInt(T, 10)), 0) : 50,
              P = e.hasAttribute(O + "trigger-cumulative"),
              A = e.getAttribute(O + "beacon-container-class") || "",
              E = !!P,
              x = c && parseInt(c, 10);
            return (
              x ||
                (x =
                  "click" === g ||
                  "eachClick" === g ||
                  "mouseenter" === g ||
                  "onLoad" === g
                    ? 0
                    : 1e3),
              (s._util = l({}, s._util, {
                "image-beacons": u,
                beacons: h,
                delay: x,
                elem: e,
                hasOffsetY: !!y,
                hasOffsetX: !!b,
                offsetX: Number(b) || 0,
                offsetY: Number(y) || 0,
                selector: o,
                containerClass: A,
                successClass: a,
                trigger: g,
                triggerCumulative: E,
                inviewTime: 0,
                inviewStartTime: 0,
                triggerPercentY: isNaN(j) ? 50 : j,
                triggerPercentX: isNaN(C) ? 50 : C,
                url: e.getAttribute(O + "url"),
              })),
              _.forEach(function (e) {
                s[e] = s[e].bind(s);
              }),
              "mouseenter" === g && s.addEventListeners(),
              s
            );
          }
          return (
            o(t, e),
            u(t, [
              {
                key: "load",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    r = t.checkViewport,
                    n = void 0 === r || r,
                    i = this._util,
                    o = i.elem,
                    a = i.inviewStartTime,
                    s = i.successClass,
                    c = i.triggerCumulative,
                    f = this.shouldAlwaysTrigger();
                  return (
                    c && 0 === a && (this._util.inviewStartTime = Date.now()),
                    new Promise(function (t) {
                      if (
                        (!f && o.classList.contains(s) && t(!1),
                        o.classList.contains("wafer-beacon-in-progress"))
                      )
                        t(!1);
                      else {
                        var r = i["image-beacons"],
                          a = i.beacons,
                          c = i.delay,
                          u = i.inviewTime,
                          h = i.offsetX,
                          v = i.offsetY,
                          p = i.selector,
                          y = Math.max(0, c - u);
                        o.classList.add("wafer-beacon-in-progress"),
                          setTimeout(function () {
                            if (
                              (f || !o.classList.contains(s)) &&
                              (0 === y ||
                                !1 === n ||
                                (d.isPageVisible &&
                                  w(
                                    o,
                                    l({}, i, { offsetX: h, offsetY: v }),
                                    d.viewport,
                                  )))
                            )
                              return (
                                a &&
                                  a.split("|").forEach(function (e) {
                                    return m(e);
                                  }),
                                r &&
                                  r.split("|").forEach(function (e) {
                                    return m(e, {
                                      useNavigator: !1,
                                      useTimestamp: !1,
                                    });
                                  }),
                                e.shouldAlwaysTrigger() ||
                                  o.classList.remove(p.replace(".", "")),
                                o.classList.add(s),
                                o.classList.remove("wafer-beacon-in-progress"),
                                void t(!0)
                              );
                            o.classList.remove("wafer-beacon-in-progress"),
                              t(!1);
                          }, y);
                      }
                    })
                  );
                },
              },
              {
                key: "shouldAlwaysTrigger",
                value: function () {
                  return "eachClick" === this._util.trigger;
                },
              },
              {
                key: "nodeOutofView",
                value: function () {
                  var e = this._util,
                    t = e.inviewStartTime;
                  if (t > 0) {
                    var r = Date.now();
                    this._util.inviewTime += r - t;
                  }
                  this._util.inviewStartTime = 0;
                },
              },
              { key: "stateDidUpdate", value: function () {} },
              {
                key: "destroy",
                value: function () {
                  "mouseenter" === this._util.trigger &&
                    this.removeEventListeners(),
                    h(
                      t.prototype.__proto__ ||
                        Object.getPrototypeOf(t.prototype),
                      "destroy",
                      this,
                    ).call(this);
                },
              },
              {
                key: "handleBeaconClick",
                value: function () {
                  var e = this,
                    t = this._util.trigger;
                  this.load({ checkViewport: !1 }).then(function (r) {
                    r && "click" === t && e.destroy();
                  });
                },
              },
              {
                key: "handleBeaconMouseenter",
                value: function () {
                  var e = this,
                    t = this._util.trigger;
                  this.load({ checkViewport: !1 }).then(function (r) {
                    r && "mouseenter" === t && e.destroy();
                  });
                },
              },
              {
                key: "offsetY",
                set: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  this._util.offsetY = this._util.offsetY || e;
                },
              },
              {
                key: "offsetX",
                set: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  this._util.offsetX = this._util.offsetX || e;
                },
              },
              {
                key: "config",
                get: function () {
                  var e = this._util;
                  return {
                    offsetX: e.offsetX,
                    offsetY: e.offsetY,
                    successClass: e.successClass,
                    trigger: e.trigger,
                  };
                },
              },
            ]),
            t
          );
        })(b);
      k.events = {
        click: [["has-beacon-click", "handleBeaconClick"]],
        mouseenter: [["_self", "handleBeaconMouseenter"]],
      };
      var T = k,
        j = (function () {
          function e(e, t) {
            var r = [],
              n = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(n = (a = s.next()).done) &&
                (r.push(a.value), !t || r.length !== t);
                n = !0
              );
            } catch (e) {
              (i = !0), (o = e);
            } finally {
              try {
                !n && s.return && s.return();
              } finally {
                if (i) throw o;
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
        C =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        P = (function () {
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
        A = window.wafer.utils,
        E = A.bindEvent,
        x = A.each,
        S = A.elementInView,
        X = A.throttle,
        Y = A.unbindEvent,
        I = window.wafer.base,
        L = window.wafer.controllers.WaferBaseController,
        V = (function (e) {
          function t() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = e.containerClass,
              n = void 0 === r ? null : r,
              i = e.root,
              o = void 0 === i ? document : i,
              c = e.selector,
              l = e.successClass,
              f = void 0 === l ? "wafer-beacon-loaded" : l,
              u = e.validateDelay,
              h = void 0 === u ? 25 : u;
            a(this, t);
            var v = s(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                root: o,
                selector: c,
                props: { selector: c, successClass: f },
                WaferClass: T,
              }),
            );
            return (
              (v._options = C({}, v._options, {
                container: !!n && o.getElementsByClassName(n),
              })),
              (v._validateWithThrottle = X(
                function () {
                  v.validate();
                },
                h,
                v,
              )),
              v.sync(),
              v
            );
          }
          return (
            c(t, e),
            P(t, [
              {
                key: "handleScroll",
                value: function () {
                  this._validateWithThrottle();
                },
              },
              {
                key: "handleVisibilityChange",
                value: function () {
                  if (
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    !arguments[0]
                  ) {
                    var e = this._state.elementInstances,
                      t = !0,
                      r = !1,
                      n = void 0;
                    try {
                      for (
                        var i, o = e.values()[Symbol.iterator]();
                        !(t = (i = o.next()).done);
                        t = !0
                      )
                        i.value.instance.nodeOutofView();
                    } catch (e) {
                      (r = !0), (n = e);
                    } finally {
                      try {
                        !t && o.return && o.return();
                      } finally {
                        if (r) throw n;
                      }
                    }
                  } else this._validateWithThrottle();
                },
              },
              {
                key: "handleResize",
                value: function () {
                  this._mapOffset(), this._validateWithThrottle();
                },
              },
              {
                key: "willDestroy",
                value: function () {
                  var e = this,
                    t = this._options.container;
                  t &&
                    x(t, function (t) {
                      Y(t, "scroll", e._validateWithThrottle);
                    });
                },
              },
              {
                key: "didSync",
                value: function () {
                  var e = this,
                    t = this._state,
                    r = t.elementInstances,
                    n = t.mounted;
                  if (0 !== r.size) {
                    if (!n) {
                      var i = this._options.container;
                      (this._state.mounted = !0),
                        i &&
                          x(i, function (t) {
                            E(t, "scroll", e._validateWithThrottle);
                          });
                    }
                    this._mapOffset();
                  }
                },
              },
              {
                key: "willValidate",
                value: function (e) {
                  var t = this._state.elementInstances,
                    r = this._options;
                  this._mapOffset(),
                    e.forEach(function (e) {
                      var n = t.get(e),
                        i = n.instance,
                        o = i.config,
                        a = o.offsetX,
                        s = o.offsetY,
                        c = o.successClass;
                      switch (o.trigger) {
                        case "viewport":
                          e.classList.contains(c) ||
                          S(e, C({}, r, { offsetX: a, offsetY: s }), I.viewport)
                            ? i.load(e).then(function (e) {
                                e && i.destroy();
                              })
                            : i.nodeOutofView();
                        case "click":
                        case "eachClick":
                          e.classList.add(
                            "has-beacon-click",
                            "has-wafer-click",
                          );
                          break;
                        case "onLoad":
                          i.load(e).then(function () {
                            i.destroy();
                          });
                      }
                    });
                },
              },
              {
                key: "_mapOffset",
                value: function () {
                  var e = this._state.elementInstances,
                    t = !0,
                    r = !1,
                    n = void 0;
                  try {
                    for (
                      var i, o = e.entries()[Symbol.iterator]();
                      !(t = (i = o.next()).done);
                      t = !0
                    ) {
                      var a = i.value,
                        s = j(a, 2),
                        c = s[0],
                        l = s[1],
                        f = l.instance,
                        u = f._util,
                        h = u.hasOffsetY,
                        v = u.hasOffsetX,
                        p = u.triggerPercentY,
                        d = u.triggerPercentX;
                      !h &&
                        (l.instance.offsetY = -parseInt(
                          (c.clientHeight * p) / 100,
                          10,
                        )),
                        !v &&
                          (l.instance.offsetX = -parseInt(
                            (c.clientWidth * d) / 100,
                            10,
                          ));
                    }
                  } catch (e) {
                    (r = !0), (n = e);
                  } finally {
                    try {
                      !t && o.return && o.return();
                    } finally {
                      if (r) throw n;
                    }
                  }
                },
              },
            ]),
            t
          );
        })(L),
        B = V;
      t.default = new B({ selector: ".wafer-beacon" });
    },
  });
});
