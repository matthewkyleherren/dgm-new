!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define("wafer-fetch", [], t)
      : "object" == typeof exports
        ? (exports["wafer-fetch"] = t())
        : ((e.wafer = e.wafer || {}),
          (e.wafer.wafers = e.wafer.wafers || {}),
          (e.wafer.wafers["wafer-fetch"] = t()));
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
        var r = {};
        for (var n in e)
          t.indexOf(n) >= 0 ||
            (Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]));
        return r;
      }
      function i(e, t) {
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
      function s(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, t) {
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
              a = void 0;
            try {
              for (
                var o, s = e[Symbol.iterator]();
                !(n = (o = s.next()).done) &&
                (r.push(o.value), !t || r.length !== t);
                n = !0
              );
            } catch (e) {
              (i = !0), (a = e);
            } finally {
              try {
                !n && s.return && s.return();
              } finally {
                if (i) throw a;
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
        h = (function () {
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
          var i = Object.getOwnPropertyDescriptor(t, r);
          if (void 0 === i) {
            var a = Object.getPrototypeOf(t);
            return null === a ? void 0 : e(a, r, n);
          }
          if ("value" in i) return i.value;
          var o = i.get;
          if (void 0 !== o) return o.call(n);
        },
        y = window.wafer,
        g = y.base,
        v = y.constants,
        m = y.utils,
        p = y.WaferBaseClass,
        b = v.ATTR_PREFIX,
        w = m.clearAndSetInnerHTML,
        _ = m.convertNodeListToArray,
        A = m.fetchWithCache,
        C = m.findAncestor,
        T = m.getConfigFromJSONScriptNode,
        k = m.getFocusableElems,
        E = m.loadScriptAsync,
        O = ["handleFetchClick", "handleMouseenter"],
        L = ["body", "cacheKey", "target", "url"],
        S = (function (e) {
          function t(e) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = r.errorClass,
              o = r.selector,
              s = r.successClass;
            i(this, t);
            var c = a(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(
                  this,
                  e,
                  { errorClass: n, selector: o, successClass: s },
                  { STATE_ATTRS: L },
                ),
              ),
              u = c._util.url || e.getAttribute(b + "url"),
              h = e.getAttribute(b + "boundary"),
              d = e.getAttribute(b + "cache"),
              y = e.getAttribute(b + "credentials"),
              v = c._util.cacheKey || e.getAttribute(b + "cache-key"),
              m = e.getAttribute(b + "cache-strategy") || "networkFirst",
              p = e.getAttribute(b + "cache-ttl"),
              w = e.getAttribute(b + "replace"),
              A = e.getAttribute(b + "result-selector"),
              k = e.getAttribute(b + "destroy-target-on-failure"),
              E = e.getAttribute(b + "dependency"),
              S = E && document.querySelector(E),
              j = e.getAttribute(b + "silent"),
              P = T(e.getElementsByClassName("wafer-fetch-config")[0]),
              I = e.getAttribute(b + "importance"),
              N = e.getAttribute(b + "target"),
              x = e.getAttribute(b + "timeout"),
              F = e.getAttribute(b + "type") || "default",
              R = e.getAttribute(b + "use-page-rid"),
              M = (
                e.getAttribute(b + "fetch-trigger-offset") ||
                e.getAttribute(b + "trigger-offset") ||
                ""
              ).split(" "),
              W = f(M, 2),
              B = W[0],
              D = W[1],
              q = e.getAttribute(b + "retry-reset-for-state-change"),
              H = e.getAttribute(b + "delay"),
              X =
                e.getAttribute(b + "fetch-trigger") ||
                e.getAttribute(b + "trigger") ||
                "viewport",
              K = c._util.body || e.getAttribute(b + "body"),
              Y = e.getAttribute(b + "retry-count"),
              V = e.getAttribute(b + "session-retry-count"),
              z = !1,
              U = e.getAttribute(b + "set-focus");
            if (
              ((U = null === U || void 0 === U ? 0 : Number(U)),
              (Y = null === Y || void 0 === Y ? null : Number(Y)),
              (V = null === V || void 0 === V ? null : Number(V)),
              g.isIORetrySupported
                ? V && (V = Math.min(V, 3))
                : ("interval" === X && (X = "delay"), (V = null)),
              "stateChange" !== X || H || (H = 0),
              0 !== Y)
            )
              switch (X) {
                case "interval":
                case "onLoad":
                case "stateChange":
                case "viewport":
                  Y = 2;
              }
            if (
              (("activate" !== X &&
                "eachClick" !== X &&
                "interval" !== X &&
                "stateChange" !== X &&
                "tabActivate" !== X) ||
                (z = !0),
              !K)
            ) {
              var J = _(e.getElementsByClassName("fetch-body")),
                G = f(J, 1),
                Q = G[0],
                Z = void 0 === Q ? null : Q;
              Z && (K = Z.innerHTML);
            }
            var $ = h && C(e, h),
              ee = (N && ($ || document.body).querySelector(N)) || e;
            return (
              (c._util = l({ boundary: h, target: N }, c._util, {
                body: K,
                boundaryElem: $,
                cache: null === d || void 0 === d ? 1 : Number(d),
                cacheKey: v,
                cacheStrategy: m,
                cacheTtl: null === p || void 0 === p ? 60 : Number(p),
                config: P,
                credentials: y,
                delay: null === H || void 0 === H ? 1e4 : Number(H),
                dependencyElem: S,
                destroyTargetOnFailure:
                  null === k || void 0 === k ? 1 : Number(k),
                importance: I,
                timeout: null === x || void 0 === x ? 6e3 : Number(x),
                elem: e,
                errorClass: n,
                isPostWithState:
                  e.getAttribute(b + "[body]") ||
                  e.getAttribute(b + "state-body"),
                offsetX: Number(D) || 0,
                offsetY: Number(B) || 0,
                replace: null === w || void 0 === w ? 0 : Number(w),
                resultSelector: A,
                retryCount: Y,
                retryResetForStateChange: q,
                selector: o,
                sessionRetryCount: V,
                setFocus: U,
                shouldAlwaysTrigger: z,
                targetElem: ee,
                trigger: X,
                type: F,
                silent: null === j || void 0 === j ? 0 : Number(j),
                successClass: s,
                url: u,
                usePageRid: Number(R) || 0,
              })),
              (c._state = { retries: 0, status: void 0 }),
              O.forEach(function (e) {
                c[e] = c[e].bind(c);
              }),
              "eachClick" === X || "click" === X
                ? (c._util.hasClick = !0)
                : "mouseenter" === X
                  ? ((c._util.hasMouseenter = !0), c.addEventListeners())
                  : "tabActivate" === X &&
                      e.classList.contains("wf-trigger-activated") &&
                      !e.classList.contains(s)
                    ? c.fetch()
                    : "onLoad" === X &&
                      c.fetch().then(function (e) {
                        e && c.destroy();
                      }),
              c
            );
          }
          return (
            o(t, e),
            h(t, [
              {
                key: "fetchDependency",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0;
                  if (!this._destroyed) {
                    var r = this._util.dependencyElem;
                    return new Promise(function (n) {
                      if (!r) return void n();
                      setTimeout(function () {
                        var i = void 0;
                        if (
                          (window.wafer.base._wafers.some(function (e) {
                            var t = e._options;
                            return (
                              !(!t || "wafer-fetch" !== t.selector) &&
                              ((i = e), !0)
                            );
                          }),
                          !i)
                        )
                          return n();
                        var a = i._state.elementInstances.get(r) || {},
                          o = a.instance;
                        if (!o) return n();
                        var s = o._state.status;
                        if (s) return n();
                        t < 5 &&
                          0 === s &&
                          setTimeout(
                            function () {
                              e.fetchDependency(t++).then(function () {
                                n();
                              });
                            },
                            100 * (t + 1),
                          ),
                          s ||
                            i
                              .trigger(r)
                              .then(function () {
                                (e._util.dependencyElem = null),
                                  setTimeout(function () {
                                    n();
                                  }, 100);
                              })
                              .catch(function () {
                                e._util.status = void 0;
                              });
                      }, 0);
                    });
                  }
                },
              },
              {
                key: "getTargetForBoundary",
                value: function () {
                  var e = this._util,
                    t = e.boundary,
                    r = e.elem,
                    n = e.target,
                    i = e.targetElem;
                  return (
                    (n && ((t && C(r, t)) || document.body).querySelector(n)) ||
                    i
                  );
                },
              },
              {
                key: "getTargetElem",
                value: function () {
                  var e = this._util,
                    t = e.elem,
                    r = e.target,
                    n = e.targetElem;
                  return (
                    r &&
                      t === n &&
                      (this._util.targetElem = this.getTargetForBoundary()),
                    this._util.targetElem
                  );
                },
              },
              {
                key: "fetch",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    r = t.disable,
                    i = void 0 === r || r,
                    a = t.currentSessionRetryCount,
                    o = void 0 === a ? 0 : a,
                    s = this._util,
                    c = s.elem,
                    u = s.shouldAlwaysTrigger,
                    l = s.successClass;
                  if (this._destroyed || (!u && c.classList.contains(l)))
                    return Promise.resolve(!1);
                  var h = this._util,
                    d = h.boundaryElem,
                    y = h.errorClass,
                    v = h.replace,
                    m = h.resultSelector,
                    p = h.selector,
                    b = h.sessionRetryCount,
                    _ = h.setFocus,
                    C = h.silent,
                    T = h.timeout,
                    E = h.trigger,
                    O = h.type,
                    L = h.usePageRid,
                    S = this.getTargetElem(),
                    j = void 0;
                  if (0 !== this._state.status) {
                    var P = this._state.retries,
                      I = {};
                    return (
                      c.classList.add("wafer-fetch-trigger-inprogress"),
                      S.classList.add("wafer-fetch-target-inprogress"),
                      d && d.classList.add("wafer-fetch-boundary-inprogress"),
                      P && (I.retries = P),
                      (this._state.status = 0),
                      this.fetchDependency()
                        .then(function () {
                          if (!e._destroyed) {
                            j = e._util.url;
                            var t = e._util,
                              r = t.body;
                            if (t.isPostWithState && !r)
                              throw new Error("Post without body");
                            var n = e._util,
                              i = n.cache,
                              a = n.cacheKey,
                              o = n.cacheStrategy,
                              s = n.cacheTtl,
                              c = n.config,
                              u = n.credentials,
                              l = n.importance,
                              f = c.headers || {};
                            return A(j, {
                              body: r,
                              cache: i,
                              cacheKey: a,
                              cacheStrategy: o,
                              cacheTtl: s,
                              clientHeaders: f,
                              credentials: u,
                              importance: l,
                              paramsToNotCache: I,
                              retries: P,
                              timeout: T,
                              useRid: L,
                            });
                          }
                        })
                        .then(function (t) {
                          if (!e._destroyed) {
                            var r = O.length
                                ? O[0].toUpperCase() + O.slice(1)
                                : "",
                              a = e["handle" + r],
                              o = t._fetchMeta,
                              s = void 0 === o ? {} : o,
                              h = n(t, ["_fetchMeta"]),
                              b = s.duration,
                              A = s.source,
                              T = void 0;
                            if (
                              (i &&
                                (u || c.classList.remove(p.replace(".", "")),
                                d &&
                                  d.classList.remove(
                                    "has-wafer-fetch-error",
                                    "wafer-fetch-boundary-inprogress",
                                  ),
                                c.classList.remove(y),
                                c.classList.remove(
                                  "wafer-fetch-trigger-inprogress",
                                ),
                                c.classList.add(l),
                                S !== c &&
                                  (S.classList.remove(
                                    "wafer-fetch-target-error",
                                  ),
                                  S.classList.add(
                                    "wafer-fetch-target-complete",
                                  )),
                                S.classList.remove(
                                  "wafer-fetch-target-inprogress",
                                )),
                              C)
                            )
                              e._state.status = 1;
                            else {
                              g.destroy(S, { destroySelf: "click" === E || v });
                              var L = void 0,
                                P = void 0,
                                I = t.html,
                                N = void 0 === I ? t.markup : I;
                              if (m) {
                                var x = document.createElement("div");
                                x.innerHTML = N;
                                var F = x.querySelector(m);
                                N = (F && F.innerHTML) || N;
                              }
                              if (v) {
                                var R = S.parentNode,
                                  M = S.previousElementSibling;
                                S.insertAdjacentHTML("beforebegin", N),
                                  R.removeChild(S),
                                  (L = R),
                                  (P = M ? M.nextElementSibling : L),
                                  (T = P);
                              } else w(S, N), (L = S), (P = S);
                              if (_ && S) {
                                var W = k(P),
                                  B = f(W, 1),
                                  D = B[0];
                                D ||
                                  (S.setAttribute("tabIndex", "-1"),
                                  (D = S || L)),
                                  setTimeout(function () {
                                    return D.focus();
                                  }, 5);
                              }
                              a &&
                                (a.call(e, L),
                                g.syncAssets(t.assets),
                                window.wafer.___debugContent &&
                                  window.wafer.___debugContent(
                                    t.html || t.markup,
                                  ));
                            }
                            return (
                              (e._state.retries = 0),
                              g.emitLog({
                                name: "WaferFetch",
                                elem: c,
                                meta: { duration: b, source: A, url: j },
                              }),
                              g.emitWaferEvent("fetch:success", {
                                elem: c,
                                meta: {
                                  data: h,
                                  duration: b,
                                  source: A,
                                  targetElem: T || S,
                                  url: j,
                                },
                              }),
                              !0
                            );
                          }
                        })
                        .catch(function (t) {
                          if (!e._destroyed) {
                            var r = t || {},
                              n = r.message;
                            if (
                              ((j = e._util.url),
                              ++o,
                              "Not found" !== n && b && o < b)
                            )
                              return (
                                (e._state.status = 2),
                                c.setAttribute(
                                  "data-wf-session-retry-counter",
                                  o,
                                ),
                                setTimeout(
                                  function () {
                                    e.fetch({
                                      disable: i,
                                      currentSessionRetryCount: o,
                                    });
                                  },
                                  T * (o + 1),
                                ),
                                !1
                              );
                            if ("Post without body" === n)
                              return (
                                d &&
                                  d.class.remove(
                                    "wafer-fetch-boundary-inprogress",
                                  ),
                                c.classList.remove(
                                  "wafer-fetch-trigger-inprogress",
                                ),
                                S.classList.remove(
                                  "wafer-fetch-target-inprogress",
                                ),
                                (e._state.status = void 0),
                                !1
                              );
                            var a = e._util,
                              s = a.destroyTargetOnFailure,
                              u = a.retryCount,
                              l = ++e._state.retries;
                            return (
                              g.emitError({
                                name: "WaferFetch",
                                elem: c,
                                meta: {
                                  message: n,
                                  retryCount: l,
                                  targetElem: S,
                                  url: j,
                                },
                                stack: t.stack || t.message,
                              }),
                              c.classList.remove(
                                "wafer-fetch-trigger-inprogress",
                              ),
                              d &&
                                (d.classList.remove(
                                  "wafer-fetch-boundary-inprogress",
                                ),
                                d.classList.add("has-wafer-fetch-error")),
                              c.classList.add(y),
                              S !== c &&
                                (S.classList.add("wafer-fetch-target-error"),
                                S.classList.remove(
                                  "wafer-fetch-target-complete",
                                )),
                              S.classList.remove(
                                "wafer-fetch-target-inprogress",
                              ),
                              (e._state.status = 2),
                              !!(("Not found" === n && u) || l === u) &&
                                (s ? g.destroy(c) : e.destroy(), !0)
                            );
                          }
                        })
                    );
                  }
                  return Promise.resolve(!1);
                },
              },
              {
                key: "handleDefault",
                value: function (e) {
                  (this._state.status = 1), g.sync(e);
                },
              },
              {
                key: "handleTdv1",
                value: function (e) {
                  this._util.head =
                    this._util.head || document.getElementsByTagName("head")[0];
                  var t = this._util.head;
                  _(e.querySelectorAll("script")).forEach(function (e) {
                    var r = e.getAttribute("type") || "text/javascript",
                      n = e.innerText;
                    n &&
                      "text/javascript" === r &&
                      (t.appendChild(e),
                      E(
                        { checkPageForScript: !0, type: r, text: n },
                        function (r) {
                          r || t.removeChild(e);
                        },
                      ));
                  }),
                    (this._state.status = 1),
                    g.sync(e);
                },
              },
              {
                key: "stateDidUpdate",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    r = t.stateAttr,
                    n = this._util,
                    i = n.retryResetForStateChange,
                    a = n.trigger;
                  if (
                    ("target" === r &&
                      (this._util.targetElem = this.getTargetForBoundary()),
                    "stateChange" === a)
                  ) {
                    i && (this._state.retries = 0);
                    var o = this._util.retryCount;
                    if (this._state.retries === o) return;
                    var s = this._util.delay;
                    return void (s
                      ? setTimeout(
                          function () {
                            e.fetch();
                          },
                          s,
                          this,
                        )
                      : this.fetch());
                  }
                },
              },
              {
                key: "destroy",
                value: function () {
                  var e = this._util,
                    r = e.timeoutInstance,
                    n = e.trigger;
                  r && (clearTimeout(r), (this._util.timeoutInstance = null)),
                    "mouseenter" === n && this.removeEventListeners(),
                    d(
                      t.prototype.__proto__ ||
                        Object.getPrototypeOf(t.prototype),
                      "destroy",
                      this,
                    ).call(this);
                },
              },
              {
                key: "handleFetchClick",
                value: function (e) {
                  this._util.hasClick && this.fetch();
                },
              },
              {
                key: "handleMouseenter",
                value: function (e) {
                  this._util.hasMouseenter && this.fetch();
                },
              },
              {
                key: "config",
                get: function () {
                  var e = this._util;
                  return {
                    delay: e.delay,
                    offsetX: e.offsetX,
                    offsetY: e.offsetY,
                    trigger: e.trigger,
                  };
                },
              },
            ]),
            t
          );
        })(p);
      S.events = {
        click: [["has-fetch-click", "handleFetchClick"]],
        mouseenter: [["_self", "handleMouseenter"]],
      };
      var j = S,
        P = (function () {
          function e(e, t) {
            var r = [],
              n = !0,
              i = !1,
              a = void 0;
            try {
              for (
                var o, s = e[Symbol.iterator]();
                !(n = (o = s.next()).done) &&
                (r.push(o.value), !t || r.length !== t);
                n = !0
              );
            } catch (e) {
              (i = !0), (a = e);
            } finally {
              try {
                !n && s.return && s.return();
              } finally {
                if (i) throw a;
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
        I = (function () {
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
        N = this,
        x = window.wafer.utils,
        F = x.elementInView,
        R = x.throttle,
        M = window.wafer.base,
        W = window.wafer.controllers.WaferBaseController,
        B = function (e, t, r) {
          var n =
            parseInt(t.getAttribute("data-wf-fetch-iteration-count"), 10) || 0;
          return (
            t.setAttribute("data-wf-fetch-iteration-count", n + 1),
            clearTimeout(e._util.timeoutInstance),
            (e._util.timeoutInstance = null),
            D.call(N, e, t, r)
          );
        },
        D = function (e, t, r) {
          var n =
            arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          n && e.fetch().catch(function (e) {}),
            !e._util.timeoutInstance &&
              (e._util.timeoutInstance = setTimeout(function () {
                e.fetch()
                  .then(function () {
                    return B.call(N, e, t, r, n);
                  })
                  .catch(function () {
                    return B.call(N, e, t, r, n);
                  });
              }, r));
        },
        q = (function (e) {
          function t() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = e.errorClass,
              n = void 0 === r ? "wafer-fetch-error" : r,
              i = e.root,
              a = void 0 === i ? document : i,
              o = e.selector,
              u = e.successClass,
              l = void 0 === u ? "wafer-fetch-complete" : u,
              f = e.validateDelay,
              h = void 0 === f ? 25 : f;
            s(this, t);
            var d = c(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                root: a,
                selector: o,
                props: { errorClass: n, selector: o, successClass: l },
                WaferClass: j,
              }),
            );
            return (
              (d._validateWithThrottle = R(
                function () {
                  d.validate();
                },
                h,
                d,
              )),
              d.sync(),
              d
            );
          }
          return (
            u(t, e),
            I(t, [
              {
                key: "handleScroll",
                value: function () {
                  this._validateWithThrottle();
                },
              },
              {
                key: "handleResize",
                value: function () {
                  this._validateWithThrottle();
                },
              },
              {
                key: "handleVisibilityChange",
                value: function () {
                  var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    t = this._state.elementInstances,
                    r = !0,
                    n = !1,
                    i = void 0;
                  try {
                    for (
                      var a, o = t.entries()[Symbol.iterator]();
                      !(r = (a = o.next()).done);
                      r = !0
                    ) {
                      var s = a.value,
                        c = P(s, 2),
                        u = c[0],
                        l = c[1],
                        f = l.instance,
                        h = f.config,
                        d = h.delay;
                      switch (h.trigger) {
                        case "interval":
                          e
                            ? D.call(this, f, u, d, !0)
                            : (clearTimeout(f._util.timeoutInstance),
                              (f._util.timeoutInstance = null));
                      }
                    }
                  } catch (e) {
                    (n = !0), (i = e);
                  } finally {
                    try {
                      !r && o.return && o.return();
                    } finally {
                      if (n) throw i;
                    }
                  }
                },
              },
              {
                key: "didSync",
                value: function () {
                  var e = this._state,
                    t = e.elementInstances,
                    r = e.mounted;
                  0 === t.size || r || (this._state.mounted = !0);
                },
              },
              {
                key: "trigger",
                value: function (e) {
                  var t = this._state.elementInstances,
                    r = t.get(e);
                  return new Promise(function (e) {
                    if (r) {
                      var t = r.instance;
                      if (!t) return e();
                      t.fetch()
                        .then(function (r) {
                          if (!r) return e();
                          var n = t.config.trigger;
                          return (
                            ("viewport" !== n && "onLoad" !== n) || t.destroy(),
                            e()
                          );
                        })
                        .catch(function () {
                          return e();
                        });
                    }
                  });
                },
              },
              {
                key: "willValidate",
                value: function (e) {
                  var t = this,
                    r = this._state.elementInstances;
                  e.forEach(function (e) {
                    var n = r.get(e),
                      i = n.instance,
                      a = i.config,
                      o = a.delay,
                      s = a.trigger,
                      c = a.offsetX,
                      u = a.offsetY;
                    switch (s) {
                      case "delay":
                        !i._util.timeoutInstance &&
                          (i._util.timeoutInstance = setTimeout(function () {
                            i.fetch()
                              .then(function (e) {
                                clearTimeout(i._util.timeoutInstance),
                                  e && i.destroy();
                              })
                              .catch(function () {
                                clearTimeout(i._util.timeoutInstance);
                              });
                          }, o));
                        break;
                      case "interval":
                        D.call(t, i, e, o);
                        break;
                      case "viewport":
                        F(e, { offsetX: c, offsetY: u }, M.viewport) &&
                          i.fetch().then(function (e) {
                            e && i.destroy();
                          });
                        break;
                      case "click":
                      case "eachClick":
                        e.classList.add("has-fetch-click", "has-wafer-click");
                    }
                  });
                },
              },
            ]),
            t
          );
        })(W),
        H = q;
      t.default = new H({ selector: "wafer-fetch" });
    },
  });
});
