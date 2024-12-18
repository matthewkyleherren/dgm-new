!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define("wafer-benji", [], t)
      : "object" == typeof exports
        ? (exports["wafer-benji"] = t())
        : ((e.wafer = e.wafer || {}),
          (e.wafer.wafers = e.wafer.wafers || {}),
          (e.wafer.wafers["wafer-benji"] = t()));
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
      function f(e, t) {
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
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        u = (function () {
          function e(e, t) {
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                !r && s.return && s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          }
          return function (t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance",
            );
          };
        })(),
        l = (function () {
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
        p = window.wafer,
        d = p.constants,
        b = p.utils,
        v = p.WaferBaseClass,
        y = d.ATTR_PREFIX,
        h = ["benji-config", "benji-page-context"],
        g = b.findAncestor,
        w = (function (e) {
          function t(e) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i = n.errorClass,
              a = n.selector,
              s = n.successClass;
            r(this, t);
            var f = o(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(
                  this,
                  e,
                  { errorClass: i, selector: a, successClass: s },
                  { STATE_ATTRS: h },
                ),
              ),
              l = (e.getAttribute(y + "margin") || "").split(" "),
              p = u(l, 2),
              d = p[0],
              b = p[1],
              v = e.getAttribute(y + "boundary"),
              w = v && g(e, v),
              j = void 0 === d || "" === d ? 1200 : Number(d);
            return (
              (f._util = c({ boundary: v, boundaryElem: w }, f._util, {
                "benji-config": e.getAttribute(y + "benji-config"),
                benjiPageContext:
                  e.getAttribute(y + "benji-page-context") || "",
                benjiWaferConfig:
                  e.getAttribute(y + "benji-wafer-config") || "",
                offsetX: Number(b) || 0,
                offsetY: j,
                trigger: e.getAttribute(y + "trigger") || "viewport",
              })),
              f
            );
          }
          return (
            i(t, e),
            l(t, [
              {
                key: "stateDidUpdate",
                value: function () {
                  this._stateDidUpdate();
                },
              },
              {
                key: "config",
                get: function () {
                  var e = this._util;
                  return {
                    offsetX: e.offsetX,
                    offsetY: e.offsetY,
                    trigger: e.trigger,
                  };
                },
              },
            ]),
            t
          );
        })(v);
      w.events = {};
      var j = w,
        m = (function () {
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
        _ = function e(t, n, r) {
          null === t && (t = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(t, n);
          if (void 0 === o) {
            var i = Object.getPrototypeOf(t);
            return null === i ? void 0 : e(i, n, r);
          }
          if ("value" in o) return o.value;
          var a = o.get;
          if (void 0 !== a) return a.call(r);
        },
        E = window.wafer.controllers.WaferBaseController,
        O = window.wafer,
        C = O.base,
        P = O.utils,
        k = P.elementInView,
        x = P.debounce,
        I = (function (e) {
          function t(e) {
            var n = e.errorClass,
              r = void 0 === n ? "wafer-benji-error" : n,
              o = e.root,
              i = void 0 === o ? document : o,
              f = e.selector,
              c = void 0 === f ? ".wafer-benji" : f,
              u = e.successClass,
              l = void 0 === u ? "wafer-benji-success" : u,
              p = e.validateDelay,
              d = void 0 === p ? 25 : p;
            a(this, t);
            var b = s(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                root: i,
                selector: c,
                props: { errorClass: r, selector: c, successClass: l },
                WaferClass: j,
              }),
            );
            b._validateWithDebounce = x(
              function () {
                b.validate();
              },
              d,
              b,
            );
            var v = b;
            return (
              (j.prototype._stateDidUpdate = function () {
                var e = this._util.elem,
                  t = this.config,
                  n = t.offsetX,
                  r = t.offsetY,
                  o = t.trigger,
                  i = !0;
                "viewport" === o &&
                  (i = k(e, { offsetX: -1 * n, offsetY: -1 * r }, C.viewport)),
                  i && v.triggerForElements([e], { source: "state" });
              }),
              b.sync(),
              b
            );
          }
          return (
            f(t, e),
            m(t, [
              {
                key: "_checkIfBenjiNameSpaceExist",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0;
                  return new Promise(function (n, r) {
                    if (t > 5) return r(new Error("namespace does not exist"));
                    if (window.benji) return n();
                    var o = t + 1;
                    setTimeout(function () {
                      e._checkIfBenjiNameSpaceExist(o)
                        .then(function () {
                          n();
                        })
                        .catch(function (e) {
                          r(e);
                        });
                    }, 50 * o);
                  });
                },
              },
              {
                key: "handleRenderSuccess",
                value: function (e) {
                  var t = (e.data && e.data.id) || "",
                    n = document.getElementById(t);
                  if (n) {
                    var r =
                        this._state.elementInstances.get(n.parentElement) || {},
                      o = r.instance;
                    if (o) {
                      var i = o._util.boundaryElem;
                      i && i.classList.add("wafer-benji-boundary-success"),
                        o.destroy();
                    }
                    n.classList.remove("wafer-benji-in-progress"),
                      n.classList.add(this._options.props.successClass),
                      C.emitWaferEvent("benji:success", {
                        elem: n,
                        meta: { data: e, id: t },
                      });
                  }
                },
              },
              {
                key: "handlePositionFailure",
                value: function (e) {
                  var t = (e.data && e.data.id) || "",
                    n = document.getElementById(t);
                  if (n) {
                    var r =
                        this._state.elementInstances.get(n.parentElement) || {},
                      o = r.instance;
                    if (o) {
                      var i = o._util.boundaryElem;
                      i && i.classList.add("wafer-benji-boundary-error"),
                        o.destroy();
                    }
                    n.classList.remove("wafer-benji-in-progress"),
                      n.classList.add(this._options.props.errorClass),
                      C.emitWaferEvent("benji:error", {
                        elem: n,
                        meta: { data: e, id: t },
                      });
                  }
                },
              },
              {
                key: "listenToBenjiEvents",
                value: function () {
                  var e = this._state;
                  if (!e.addedListenerForbenjiEvents) {
                    e.addedListenerForbenjiEvents = !0;
                    var t = window.benji;
                    t.on(
                      "RENDER_SUCCEEDED",
                      this.handleRenderSuccess.bind(this),
                    ),
                      t.on(
                        "RENDER_FAILED",
                        this.handlePositionFailure.bind(this),
                      );
                  }
                },
              },
              {
                key: "makeBenjiCall",
                value: function (e, t, n) {
                  var r = window.benji;
                  if (r && "function" == typeof r.render) {
                    t && "function" == typeof r.updateI13N && r.updateI13N(n);
                    Object.keys(e.positions).forEach(function (e) {
                      document
                        .getElementById(e)
                        .classList.add("wafer-benji-in-progress");
                    }),
                      r.render(e.positions);
                  }
                },
              },
              {
                key: "triggerForElements",
                value: function (e) {
                  var t = this;
                  this._checkIfBenjiNameSpaceExist()
                    .then(function () {
                      t.listenToBenjiEvents();
                      var n = window.benji;
                      if (n && n.isReady) {
                        var r = t._state.elementInstances;
                        e.forEach(function (e) {
                          var n = r.get(e),
                            o = n.instance,
                            i = {},
                            a = {},
                            s = {},
                            f = !1;
                          try {
                            if (!(i = JSON.parse(o._util["benji-config"])))
                              return !1;
                            var c = o._util.benjiWaferConfig;
                            if (
                              c.length > 0 &&
                              ((s = JSON.parse(c)), (f = s.updateI13n))
                            ) {
                              var u = o._util.benjiPageContext;
                              u.length > 0 && (a = JSON.parse(u));
                            }
                            i.positions && t.makeBenjiCall(i, f, a);
                          } catch (n) {
                            e.classList.add(t._options.props.errorClass),
                              o.destroy();
                          }
                        });
                      }
                    })
                    .catch(function (e) {});
                },
              },
              {
                key: "handleScroll",
                value: function () {
                  this._validateWithDebounce();
                },
              },
              {
                key: "handleResize",
                value: function () {
                  this._validateWithDebounce();
                },
              },
              {
                key: "willValidate",
                value: function (e) {
                  var t = [],
                    n = this._state.elementInstances;
                  e.forEach(function (e) {
                    var r = n.get(e),
                      o = r.instance,
                      i = o.config,
                      a = i.offsetX,
                      s = i.offsetY,
                      f = i.trigger;
                    "viewport" === f &&
                    k(e, { offsetX: a, offsetY: s }, C.viewport)
                      ? t.push(e)
                      : "onLoad" === f && t.push(e);
                  }),
                    t.length && this.triggerForElements(t);
                },
              },
              {
                key: "destroy",
                value: function (e) {
                  _(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    "destroy",
                    this,
                  ).call(this, e);
                },
              },
            ]),
            t
          );
        })(E),
        S = I;
      t.default = new S({ selector: "wafer-benji" });
    },
  });
});
