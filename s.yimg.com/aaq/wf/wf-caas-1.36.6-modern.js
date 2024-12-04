!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define("wafer-caas", [], t)
      : "object" == typeof exports
        ? (exports["wafer-caas"] = t())
        : ((e.wafer = e.wafer || {}),
          (e.wafer.wafers = e.wafer.wafers || {}),
          (e.wafer.wafers["wafer-caas"] = t()));
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    function t(r) {
      if (a[r]) return a[r].exports;
      var i = (a[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
    }
    var a = {};
    return (
      (t.m = e),
      (t.c = a),
      (t.d = function (e, a, r) {
        t.o(e, a) ||
          Object.defineProperty(e, a, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (t.n = function (e) {
        var a =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(a, "a", a), a;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = "https://s.yimg.com/aaq/wf/"),
      t((t.s = "./src/entry.js"))
    );
  })({
    "./src/entry.js": function (e, t, a) {
      "use strict";
      function r(e, t) {
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
      var l = window.wafer,
        d = l.features,
        f = l.utils,
        u = f.findAncestor,
        h = f.getUrlParameterValueByName,
        v = f.loadCSSSync,
        p = f.loadScriptAsync,
        w = /^https:\/\/s.yimg.com\/(os|aaq|ec\/content-service)\/c/,
        m = function (e, t, a) {
          var r = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
            i = -1 !== e.indexOf("?") ? "&" : "?";
          return e.match(r)
            ? e.replace(r, "$1" + t + "=" + a + "$2")
            : e + i + t + "=" + a;
        },
        g = function (e, t, a, r) {
          return Promise.all(
            e.map(function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                i = arguments[1],
                s = e.data,
                n = void 0 === s ? {} : s,
                o = e.markup,
                c = n.partnerData;
              if (!c || !o) return r && r(i), Promise.resolve();
              a && (e.data.partnerData.groupName = a);
              var l = c.uuid,
                d = { assets: t, items: [e] };
              return window.__waferCaasCollection.set(l, d), e;
            }),
          );
        },
        y = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            a = arguments[2];
          return new Promise(function (r) {
            var i = "sidekick" === a ? "CAAS_SIDEKICK" : "CAAS",
              s = void 0,
              n = !0,
              o = !0;
            (window.__caasModules = window.__caasModules || {}),
              e.forEach(function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  t = e.type,
                  a = e.asset;
                "js" === t && a.value && (n = !1), "css" === t && (o = !1);
              }),
              e.forEach(function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  a = e.type,
                  c = e.asset;
                (s = (void 0 === c ? {} : c).value),
                  w.test(s) &&
                    ("js" === a
                      ? p(
                          { src: s },
                          function () {
                            (n = !0), o && r();
                          },
                          i,
                        )
                      : "css" === a &&
                        (window.__caasModules[i]
                          ? ((o = !0), n && r())
                          : ((window.__caasModules[i] = !0),
                            v({ src: s, text: t }, function () {
                              (o = !0), n && r();
                            }))));
              });
          });
        },
        _ = function (e) {
          var t = [],
            a = window.wafer.base.colorSchema;
          d.isPWA && t.push("pwa"), a && t.push("darkmode");
          var r = t.join(",");
          if (r) {
            var i = h("features", e);
            e = i ? m(e, "features", i + "," + r) : e + "&features=" + r;
          }
          return e;
        },
        b = function (e) {
          var t = u(e, "caas"),
            a = t.getAttribute("data-params");
          if (!a) return {};
          try {
            a = JSON.parse(a);
          } catch (e) {
            return {};
          }
          return a.features || {};
        },
        A =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var a = arguments[t];
              for (var r in a)
                Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
            }
            return e;
          },
        C = (function () {
          function e(e, t) {
            var a = [],
              r = !0,
              i = !1,
              s = void 0;
            try {
              for (
                var n, o = e[Symbol.iterator]();
                !(r = (n = o.next()).done) &&
                (a.push(n.value), !t || a.length !== t);
                r = !0
              );
            } catch (e) {
              (i = !0), (s = e);
            } finally {
              try {
                !r && o.return && o.return();
              } finally {
                if (i) throw s;
              }
            }
            return a;
          }
          return function (t, a) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, a);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance",
            );
          };
        })(),
        E = (function () {
          function e(e, t) {
            for (var a = 0; a < t.length; a++) {
              var r = t[a];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, a, r) {
            return a && e(t.prototype, a), r && e(t, r), t;
          };
        })(),
        k = function e(t, a, r) {
          null === t && (t = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(t, a);
          if (void 0 === i) {
            var s = Object.getPrototypeOf(t);
            return null === s ? void 0 : e(s, a, r);
          }
          if ("value" in i) return i.value;
          var n = i.get;
          if (void 0 !== n) return n.call(r);
        },
        P = window.wafer,
        S = P.base,
        O = P.constants,
        R = P.utils,
        I = P.WaferBaseClass,
        T = O.ATTR_PREFIX,
        N = R.clearAndSetInnerHTML,
        L = R.clearTimeout,
        j = R.convertNodeListToArray,
        B = R.debounce,
        V = R.fetchWithCache,
        x = R.findAncestor,
        W = R.getConfigFromJSONScriptNode,
        M = R.getUrlParameterValueByName,
        D = R.getWaferForType,
        F = R.getWaferInstanceForElem,
        z = R.setTimeout,
        H = ["caas-collapsed", "caas-url", "caas-uuid"],
        Y = {},
        U = {},
        G = (function (e) {
          function t(e) {
            var a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              s = a.caasConfig,
              n = a.errorClass,
              o = a.selector,
              c = a.successClass;
            r(this, t);
            var l = i(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(
                  this,
                  e,
                  { errorClass: n, selector: o, successClass: c },
                  { STATE_ATTRS: H },
                ),
              ),
              d = e.getAttribute(T + "caas-cache"),
              f = e.getAttribute(T + "caas-collapsed"),
              u = e.getAttribute(T + "caas-url"),
              h = e.getAttribute(T + "caas-uuid"),
              v = e.getAttribute(T + "caas-cache-strategy") || "cacheFirst",
              p = e.getAttribute(T + "caas-cache-ttl"),
              w = e.getAttribute("href"),
              m = e.getAttribute(T + "caas-prefetch"),
              g = e.getAttribute(T + "caas-prefetch-group"),
              y = e.getAttribute(T + "caas-timeout"),
              _ = e.getAttribute(T + "caas-type") || "default",
              b = e.getAttribute(T + "caas-wrapper"),
              E = e.getAttribute(T + "caas-dependency"),
              k = e.getAttribute(T + "caas-has-rightrail-ads"),
              P = E && document.querySelector(E),
              S = (e.getAttribute(T + "caas-trigger-offset") || "").split(" "),
              O = C(S, 2),
              R = O[0],
              I = O[1],
              N = e.getAttribute(T + "caas-item-count-balanced"),
              L = e.getAttribute(T + "caas-target"),
              j = (L && e.querySelector(L)) || e,
              B = parseInt(e.getAttribute(T + "caas-top-view-offset") || 0),
              V = e.getAttribute(T + "caas-trigger") || "viewport";
            if (
              ((l._util = A({}, l._util, {
                "caas-collapsed": null === f || void 0 === f ? 0 : Number(f),
                "caas-url": u,
                "caas-uuid": h,
                cache: null === d || void 0 === d ? 1 : Number(d),
                caasConfig: s,
                cacheStrategy: v,
                cacheTtl: null === p || void 0 === p ? 300 : Number(p),
                dependencyElem: P,
                isPrefetch: null === m || void 0 === m ? 0 : Number(m),
                targetElem: j,
                timeout: null === y || void 0 === y ? 6e3 : Number(y),
                elem: e,
                errorClass: n,
                hasRightRailAds: null === k || void 0 === k ? 0 : Number(k),
                href: w,
                offsetX: Number(I) || 0,
                offsetY: Number(R) || 0,
                prefetchGroup: g,
                selector: o,
                successClass: c,
                trigger: V,
                type: _,
                viewportEventOffset: B,
                wrapper: b,
                isItemCountBalanced: null === N || void 0 === N ? 0 : Number(N),
              })),
              g && (U[h] = g),
              (l._state = {
                fullInView: !1,
                halfInView: !1,
                preInViewTriggered: !1,
                shouldPrefetchForViewport: "viewportWithPrefetch" === V,
                topViewportTriggered: !1,
                status: void 0,
              }),
              l._util.hasRightRailAds && (l._state.resizeObserver = null),
              h &&
                l._util.isPrefetch &&
                window.__waferCaasCollection.addAndBeaconDuplicateId(h),
              "sidekick" === _)
            ) {
              var x = e.getAttribute(T + "caas-second-node"),
                M = x && document.getElementById(x);
              M && (l._util.secondNode = M);
            } else
              "renderedArticle" === _ &&
                z(
                  function () {
                    var t = e.getElementsByClassName("wafer-caas-data")[0],
                      a = t && W(t);
                    l.handleRenderedArticle(a);
                  },
                  0,
                  l,
                );
            return l;
          }
          return (
            s(t, e),
            E(t, [
              {
                key: "fetch",
                value: function () {
                  var e = this,
                    t = this._util["caas-url"],
                    a = this._util["caas-uuid"];
                  if (!t && !a)
                    return Promise.reject(new Error("uuid and url is missing"));
                  var r = this._util,
                    i = r.dependencyElem,
                    s = r.successClass;
                  if (i && !i.classList.contains(s))
                    return Promise.reject(
                      new Error("dependency not yet complete"),
                    );
                  var n = this._util.elem;
                  if (n.classList.contains(s)) return Promise.resolve(!0);
                  var o = this._util,
                    c = o.caasConfig,
                    l = void 0 === c ? {} : c,
                    d = o.cacheStrategy,
                    f = o.cacheTtl,
                    u = o.errorClass,
                    h = o.secondNode,
                    v = o.targetElem,
                    p = o.timeout,
                    w = o.type,
                    m = a + ":1:" + l.contextParams;
                  if (0 !== this._state.status) {
                    var g = !1;
                    if (t) {
                      var b = -1 === t.indexOf("?") ? "?" : "&";
                      t = t + b + l.contextParams;
                    } else
                      t =
                        (l.caasUrl ||
                          "https://www.yahoo.com/caas/content/article/") +
                        "?uuid=" +
                        a +
                        "&" +
                        l.contextParams;
                    return (
                      (t = _(t)),
                      n.classList.add("wafer-caas-trigger-inprogress"),
                      (this._state.status = 0),
                      new Promise(function (e, r) {
                        if ("default" === w) {
                          var i = window.__waferCaasCollection.get(a);
                          if (i) return (g = !0), void e(i);
                        }
                        var s = {
                            cache: 0,
                            cacheKey: m,
                            cacheStrategy: d,
                            cacheTtl: f,
                            timeout: p,
                          },
                          n = !0;
                        if (
                          (-1 === t.indexOf("s.yimg.com") &&
                            (s.credentials = "include"),
                          "sidekick" === w)
                        ) {
                          var o = M("uuid", t);
                          if (o) {
                            var c = o.split(",")[0];
                            c &&
                              ((n = !1),
                              window.wafer.caas.getData([c]).then(function () {
                                var a =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : [],
                                  i = C(a, 1),
                                  n = i[0],
                                  o = n || {},
                                  c = o.adMeta,
                                  l = o.wikiids,
                                  d = c.site_attribute || "";
                                (s.body = JSON.stringify({
                                  wikis: l,
                                  siteAttribute: d,
                                })),
                                  V(t, s)
                                    .then(function (t) {
                                      e(t);
                                    })
                                    .catch(function (e) {
                                      r(e);
                                    });
                              }));
                          }
                        }
                        n &&
                          V(t, s)
                            .then(function (t) {
                              e(t);
                            })
                            .catch(function (e) {
                              r(e);
                            });
                      })
                        .then(function (e) {
                          var t = e.assets;
                          if (!t.length) return e;
                          if ("sidekick" !== w && window.CAAS) return e;
                          var a = e.style,
                            r = Y[w];
                          return r
                            ? r.then(function () {
                                return e;
                              })
                            : ((Y[w] = y(t, a, w).then(function () {
                                return e;
                              })),
                              Y[w]);
                        })
                        .then(function (r) {
                          var i = w.length
                              ? w[0].toUpperCase() + w.slice(1)
                              : "",
                            o = e["handle" + i],
                            c = r._fetchMeta || {},
                            l = c.duration,
                            d = c.source;
                          S.destroy(n, { destroySelf: !1 });
                          var f = void 0;
                          if ("default" === w) {
                            var u = r || {},
                              p = u.assets,
                              m = u.items,
                              y = void 0 === m ? [] : m,
                              _ = {};
                            y.length > 1
                              ? y.some(function (e) {
                                  return (
                                    ((e || {}).data || {}).partnerData.uuid ===
                                      a && ((_ = e), !0)
                                  );
                                })
                              : (_ = y[0]);
                            var b = U[a];
                            b &&
                              (_.data.partnerData.groupName =
                                y[0].data.partnerData.groupName =
                                  b),
                              (f = (_ || {}).markup),
                              N(v, f),
                              f &&
                                !g &&
                                window.__waferCaasCollection.set(a, {
                                  assets: p,
                                  items: [_],
                                });
                          } else if ("sidekick" === w)
                            if (((f = r.markup), h)) {
                              var A = e._util.isItemCountBalanced,
                                C = document.createElement("div"),
                                E = document.createElement("div");
                              (C.innerHTML = f), (E.innerHTML = f);
                              for (
                                var k = j(
                                    C.getElementsByClassName("sidekick-item"),
                                  ),
                                  P = k.length,
                                  O = Math.round(P / 2) + +!A,
                                  R = O;
                                R < P;
                                R++
                              ) {
                                var I = k[R].parentNode;
                                I.parentNode.removeChild(I);
                              }
                              N(v, C.innerHTML);
                              for (
                                var T = j(
                                    E.getElementsByClassName("sidekick-item"),
                                  ),
                                  L = 0;
                                L < O;
                                L++
                              ) {
                                var B = T[L].parentNode;
                                B.parentNode.removeChild(B);
                              }
                              (v.innerHTML = C.innerHTML), N(h, E.innerHTML);
                            } else N(v, f);
                          if (e._util["caas-collapsed"]) {
                            var V = j(
                              v.getElementsByClassName("caas-body-wrapper"),
                            )[0];
                            V && V.classList.add("caas-body-collapsed");
                          }
                          if (
                            (o && o.call(e, n, r),
                            n.classList.remove("wafer-caas-trigger-inprogress"),
                            n.classList.add(s),
                            S.emitLog({
                              name: "WaferCaas",
                              elem: n,
                              meta: {
                                duration: l,
                                source: g ? "MEMORY" : d,
                                url: t,
                              },
                            }),
                            "default" === w)
                          ) {
                            var x = r.items[0].data.partnerData;
                            S.emitWaferEvent("caas:article:fetch", {
                              elem: n,
                              meta: { data: x, url: t },
                            });
                          }
                          return !0;
                        })
                        .catch(function (r) {
                          return (
                            S.emitWaferEvent(
                              "caas:" +
                                ("default" === w ? "article" : w) +
                                ":error",
                              {
                                elem: n,
                                meta: { url: t, uuid: a },
                                stack: r.stack || r.message,
                              },
                            ),
                            n.classList.remove("wafer-caas-trigger-inprogress"),
                            n.classList.add(u),
                            n.classList.remove(s),
                            S.destroy(n),
                            (e._state.status = 2),
                            !1
                          );
                        })
                    );
                  }
                  return Promise.resolve(!1);
                },
              },
              {
                key: "handleSidekick",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    a = this._util,
                    r = a["caas-url"],
                    i = a.elem,
                    s = a.secondNode;
                  if (!t.markup)
                    return void S.emitWaferEvent("caas:sidekick:error", {
                      elem: i,
                      meta: { url: r },
                    });
                  S.emitWaferEvent("caas:sidekick:init", {
                    elem: i,
                    meta: { url: r },
                  }),
                    (this._state.status = 1),
                    S.sync(e),
                    s && S.sync(s);
                },
              },
              {
                key: "handleRenderedArticle",
                value: function (e) {
                  var t = this._util,
                    a = t["caas-uuid"],
                    r = t.elem,
                    i = t.successClass,
                    s = t.targetElem;
                  if (
                    (window.__waferCaasCollection.set(a, {
                      items: [{ data: { partnerData: A({}, e, { uuid: a }) } }],
                    }),
                    this.handleDefault(r),
                    this._util["caas-collapsed"])
                  ) {
                    var n = j(s.getElementsByClassName("caas-body-wrapper"))[0];
                    n && n.classList.add("caas-body-collapsed");
                  }
                  r.classList.add(i),
                    S.emitLog({ name: "WaferCaas", elem: r, meta: {} });
                },
              },
              {
                key: "handleSpacingAndGetOffsetAboveRightRailAds",
                value: function (e) {
                  var t = this._util,
                    a = t.caasBody,
                    r = t.caasConfig,
                    i = void 0 === r ? {} : r,
                    s = i.rightRailAdsAlignWithCover,
                    n = i.rightRailAdsAlignWithFirstParagraph,
                    o = b(a),
                    c = 0,
                    l = a.getElementsByClassName("caas-body")[0];
                  if (o.rrAdsAlignWithCover || s) {
                    var d = a.getElementsByClassName("caas-cover")[0];
                    if (d) c = d.offsetTop || 0;
                    else {
                      var f = l.getElementsByTagName("p")[0];
                      c = l.offsetTop + (f ? f.offsetTop : 0);
                    }
                  } else if (o.rrPosFix || n) {
                    var u = l.getElementsByTagName("p")[0];
                    c = l.offsetTop + (u ? u.offsetTop : 0);
                  }
                  return c && e && (e.style.marginTop = c + "px"), c;
                },
              },
              {
                key: "triggerAdsAfterShowMore",
                value: function () {
                  var e = this._util.caasBody;
                  if (e) {
                    var t = D("wafer-benji");
                    if (t) {
                      var a = j(
                        e.getElementsByClassName(
                          "wafer-benji-showmore-pending",
                        ),
                      );
                      a.length &&
                        (a.forEach(function (e) {
                          e.classList.add("wafer-benji"),
                            e.classList.remove("wafer-benji-showmore-pending"),
                            S.sync(e.parentNode);
                        }),
                        t.triggerForElements(a));
                    }
                  }
                },
              },
              {
                key: "handleAdsAfterShowMore",
                value: function () {
                  var e = this._util.elem;
                  this._util.caasBody =
                    this._util.caasBody ||
                    e.getElementsByClassName("caas-body")[0];
                  var t = this._util.caasBody,
                    a = b(t);
                  if (
                    t &&
                    a.enableShowMoreOnLoad &&
                    t.getElementsByClassName("caas-readmore")[0]
                  )
                    for (var r = t.children, i = !1, s = 0; s < r.length; s++) {
                      var n = r[s];
                      if (
                        (n.classList.contains("caas-readmore") && (i = !0),
                        i && n.classList.contains("caas-da"))
                      ) {
                        var o = n.getElementsByClassName("wafer-benji")[0];
                        o.classList.remove("wafer-benji"),
                          o.classList.add("wafer-benji-showmore-pending");
                      }
                    }
                },
              },
              {
                key: "handleRightRailAds",
                value: function () {
                  if (this._util.hasRightRailAds) {
                    var e = D("wafer-benji");
                    if (e) {
                      var t = this._util.targetElem,
                        a = t.getElementsByClassName("caas-slotted-aside")[0];
                      if (a) {
                        this._util.caasBody =
                          this._util.caasBody ||
                          t.getElementsByClassName("caas-body-content")[0];
                        var r = this._util.caasBody;
                        if (r) {
                          var i = j(a.getElementsByClassName("caas-da")),
                            s = i.length;
                          if (s) {
                            for (
                              var n =
                                  this.handleSpacingAndGetOffsetAboveRightRailAds(
                                    a,
                                  ),
                                o = this._util.caasConfig,
                                c = void 0 === o ? {} : o,
                                l = c.rightRailAdSpacing,
                                d = c.stickyRightFirstAdSpacing,
                                f = c.stickyRightAdSpacing,
                                u = [],
                                h = d || 300,
                                v = f || 500,
                                p = l || v,
                                w = r.offsetHeight - n,
                                m = 0,
                                g = 0,
                                y = x(i[0], "caas-docked-sda-container"),
                                _ = !1,
                                b = 0;
                              b < s;
                              b++
                            ) {
                              var A = i[b],
                                C = void 0;
                              y &&
                                (C =
                                  0 === b
                                    ? y
                                    : x(A, "caas-docked-sda-container"));
                              var E = void 0,
                                k = void 0;
                              C
                                ? ((E = window.getComputedStyle(C).marginTop),
                                  (k = 0 === b ? h : v))
                                : (E = window.getComputedStyle(A).marginTop);
                              var P = parseInt(E.replace("px", ""), 10);
                              if (
                                ((p = (E && P) || p),
                                A.getElementsByClassName("wafer-destroyed")[0])
                              ) {
                                var O = A.offsetHeight;
                                if (C) {
                                  var R = void 0;
                                  (R = 0 === b ? h : v),
                                    O < 10
                                      ? (g += R + 607) > w &&
                                        ((g -= R), (_ = !0))
                                      : (g += O + R) > w &&
                                        ((g -= R), (_ = !0));
                                } else g += O < 10 ? p + 607 : O + p;
                              } else
                                C
                                  ? (g += k + 607) > w && ((g -= k), (_ = !0))
                                  : (g += p + 607);
                              if (g > w + p && !C) break;
                              if (_ && C) break;
                              ++m;
                            }
                            m = m || 1;
                            for (var I = 0; I < m; I++) {
                              var T = i[I],
                                N = void 0,
                                L = void 0;
                              if (
                                (y &&
                                  (0 === I
                                    ? ((N = y), (L = h))
                                    : ((N = x(T, "caas-docked-sda-container")),
                                      (L = v))),
                                N ||
                                  !T.classList.contains(
                                    "wafer-caas-ad-visited",
                                  ))
                              ) {
                                (T.style.display = "block"),
                                  T.classList.add("wafer-caas-ad-visited");
                                var B = T.getElementsByClassName(
                                  "wafer-benji-pending",
                                )[0];
                                B &&
                                  (B.classList.remove("wafer-benji-pending"),
                                  B.classList.add("wafer-benji"),
                                  "onCaasArticleLoad" ===
                                  B.getAttribute("data-wf-trigger")
                                    ? (S.sync(B.parentNode), u.push(B))
                                    : S.sync(T));
                                var V =
                                  T.getElementsByClassName("wafer-benji")[0];
                                if (
                                  (V &&
                                    "onCaasArticleLoad" ===
                                      V.getAttribute("data-wf-trigger") &&
                                    u.push(V),
                                  N)
                                ) {
                                  var W = void 0;
                                  (W =
                                    I === m - 1
                                      ? T.offsetHeight
                                      : L + T.offsetHeight),
                                    I + 1 === m
                                      ? N.classList.add(
                                          "docked-last-active-wrapper",
                                        )
                                      : (N.classList.add(
                                          "docked-active-wrapper",
                                        ),
                                        N.classList.remove(
                                          "docked-last-active-wrapper",
                                        )),
                                    Object.assign(N.style, {
                                      display: "block",
                                      height: W + "px",
                                      flexGrow: I + 1 === m ? "1" : "unset",
                                    });
                                }
                              }
                            }
                            if ((u.length && e.triggerForElements(u), s > m))
                              for (var M = s - 1; M >= m; M--) {
                                var F = i[M],
                                  z = void 0;
                                if (
                                  (y &&
                                    (z =
                                      0 === M
                                        ? y
                                        : x(F, "caas-docked-sda-container")),
                                  y ||
                                    !F.classList.contains(
                                      "wafer-caas-ad-visited",
                                    ))
                                ) {
                                  if (
                                    (z &&
                                      !F.classList.contains(
                                        "wafer-caas-ad-visited",
                                      )) ||
                                    !z
                                  ) {
                                    var H =
                                      F.getElementsByClassName(
                                        "wafer-benji",
                                      )[0];
                                    H &&
                                      (H.classList.remove("wafer-benji"),
                                      H.classList.add("wafer-benji-pending"));
                                  }
                                  (F.style.display = "none"),
                                    z &&
                                      ((z.style.display = "none"),
                                      z.classList.remove(
                                        "docked-active-wrapper",
                                      ));
                                }
                              }
                            else this.disconnectResizeObserver();
                          }
                        }
                      }
                    }
                  }
                },
              },
              {
                key: "addResizeObserver",
                value: function () {
                  var e = this;
                  if (window.ResizeObserver) {
                    var t =
                      this._util.targetElem.getElementsByClassName(
                        "caas-body-content",
                      )[0];
                    t &&
                      ((this._state.resizeObserver = new ResizeObserver(
                        B(function () {
                          e.handleRightRailAds();
                        }, 50),
                      )),
                      this._state.resizeObserver.observe(t));
                  }
                },
              },
              {
                key: "handleDefault",
                value: function (e) {
                  var t = this;
                  if (!this._destroyed) {
                    var a = this._util,
                      r = a["caas-uuid"],
                      i = a.elem,
                      s = a.type,
                      n = window.__waferCaasCollection.get(r) || {},
                      o = n.items,
                      c = void 0 === o ? [] : o,
                      l = C(c, 1),
                      d = l[0];
                    d = void 0 === d ? {} : d;
                    var f = d.data,
                      u = d.markup;
                    if (!("renderedArticle" === s || (u && f)))
                      return void S.emitWaferEvent("caas:article:error", {
                        elem: i,
                        meta: { hasData: !!f, hasMarkup: !!u, uuid: r },
                      });
                    var h = f.partnerData;
                    if (window._caasInstance)
                      z(
                        function () {
                          t._destroyed ||
                            (t.handleRightRailAds(),
                            t.handleAdsAfterShowMore(),
                            window._caasInstance.sync(),
                            S.sync(e));
                        },
                        window.__waferCaasRenderInProgress ? 300 : 0,
                        this,
                      );
                    else {
                      var v = this._util.wrapper;
                      window.wafer.base.pauseVideo("wafer-caas"),
                        (window._caasInstance = new window.CAAS.BASE({
                          container: v,
                        })),
                        this.handleColorSchemaChange(),
                        window._caasInstance.on("link:clicked", function (e) {
                          if (
                            (e.isYahoo &&
                              S.emitWaferEvent("caas:yahooLink:clicked", {
                                elem: i,
                                meta: {
                                  data: e,
                                  instance: window._caasInstance,
                                },
                              }),
                            "story-continues" === e.type)
                          ) {
                            var t = document.body.querySelector(
                              ".caas-readmore-collapse:not(.readmore-triggered)",
                            );
                            if (t) {
                              t.classList.add("readmore-triggered");
                              var a = x(t, "wafer-caas-complete"),
                                r = F(a, "wafer-caas");
                              if (r) {
                                var s = r.instance;
                                s &&
                                  (s._state.resizeObserver ||
                                    s.handleRightRailAds(),
                                  s.triggerAdsAfterShowMore());
                              }
                            }
                          }
                          S.emitWaferEvent("caas:link:clicked", {
                            elem: i,
                            meta: { data: e, instance: window._caasInstance },
                          });
                        }),
                        (this._state.status = 1),
                        S.emitWaferEvent("caas:article:init", {
                          elem: i,
                          meta: { data: h, instance: window._caasInstance },
                        }),
                        this.handleRightRailAds(),
                        this.handleAdsAfterShowMore(),
                        S.sync(e);
                    }
                    this._util.hasRightRailAds && this.addResizeObserver(),
                      (window.__waferCaasRenderInProgress = !0),
                      L(window.__waferCaasRenderInProgressTimeout),
                      (window.__waferCaasRenderInProgressTimeout = z(
                        function () {
                          window.__waferCaasRenderInProgress = !1;
                        },
                        300,
                        this,
                      )),
                      (this._state.status = 1);
                  }
                },
              },
              {
                key: "handleArticleViewEvent",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "inview";
                  if ("pre:inview" === e) {
                    if (this._state.preInViewTriggered) return;
                    this._state.preInViewTriggered = !0;
                  } else if ("half:inview" === e) {
                    if (this._state.halfInView) return;
                    this._state.halfInView = !0;
                  } else if ("full:inview" === e) {
                    if (this._state.fullInView) return;
                    this._state.fullInView = !0;
                  } else if ("top:viewport:triggered" === e) {
                    if (this._state.topViewportTriggered) return;
                    this._state.topViewportTriggered = !0;
                  } else if ("half:not:inview" === e) {
                    if (!this._state.halfInView) return;
                    (this._state.halfInView = !1),
                      (this._state.fullInView = !1),
                      (this._state.topViewportTriggered = !1);
                  } else
                    "inview" === e &&
                      ((this._state.halfInView = !1),
                      (this._state.fullInView = !1),
                      (this._state.topViewportTriggered = !1));
                  var t = this._util,
                    a = t.elem,
                    r = t.type,
                    i = t["caas-uuid"],
                    s = window.__waferCaasCollection.get(i) || {},
                    n = s.items,
                    o = void 0 === n ? [] : n,
                    c = C(o, 1),
                    l = c[0];
                  l = void 0 === l ? {} : l;
                  var d = l.data,
                    f = l.markup;
                  if ("renderedArticle" === r || (f && d)) {
                    var u = d.partnerData;
                    S.emitWaferEvent("caas:article:" + e, {
                      elem: a,
                      meta: { data: u, instance: window._caasInstance },
                    });
                  }
                },
              },
              {
                key: "handleColorSchemaChange",
                value: function () {
                  var e = window._caasInstance;
                  if (e) {
                    var t = window.wafer.base.colorSchema,
                      a = void 0;
                    (a =
                      "dark" === t
                        ? e.componentShouldSwitchToDarkmode
                        : e.componentShouldSwitchToLightmode),
                      a && a.call(e);
                  }
                },
              },
              {
                key: "stateDidUpdate",
                value: function () {
                  if (
                    "caas-collapsed" !==
                    (arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {}
                    ).stateAttr
                  )
                    "stateChange" === this._util.trigger &&
                      this.fetch().catch(function () {});
                  else {
                    if (!this._util.targetElem) return;
                    if (
                      ((this._util["caas-collapsed"] = Number(
                        this._util["caas-collapsed"],
                      )),
                      this._util["caas-collapsed"])
                    ) {
                      var e = j(
                        this._util.targetElem.getElementsByClassName(
                          "caas-body-wrapper",
                        ),
                      )[0];
                      e && e.classList.add("caas-body-collapsed");
                    }
                  }
                },
              },
              {
                key: "disconnectResizeObserver",
                value: function () {
                  var e = this._state.resizeObserver;
                  e && e.disconnect();
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.disconnectResizeObserver(),
                    k(
                      t.prototype.__proto__ ||
                        Object.getPrototypeOf(t.prototype),
                      "destroy",
                      this,
                    ).call(this);
                },
              },
              {
                key: "config",
                get: function () {
                  var e = this._util,
                    t = e["caas-url"],
                    a = e["caas-uuid"],
                    r = e.caasConfig,
                    i = e.elem,
                    s = e.href,
                    n = e.isPrefetch,
                    o = e.offsetX,
                    c = e.offsetY,
                    l = e.prefetchGroup,
                    d = e.selector,
                    f = e.trigger,
                    u = e.type,
                    h = e.viewportEventOffset;
                  return {
                    caasConfig: r,
                    elem: i,
                    href: s,
                    isPrefetch: n,
                    offsetX: o,
                    offsetY: c,
                    prefetchGroup: l,
                    selector: d,
                    shouldPrefetchForViewport:
                      this._state.shouldPrefetchForViewport,
                    trigger: f,
                    type: u,
                    url: t,
                    uuid: a,
                    viewportEventOffset: h,
                  };
                },
              },
              {
                key: "shouldPrefetchForViewport",
                set: function (e) {
                  this._state.shouldPrefetchForViewport = e;
                },
              },
            ]),
            t
          );
        })(I),
        X = G,
        q = (function () {
          function e(e, t) {
            var a = [],
              r = !0,
              i = !1,
              s = void 0;
            try {
              for (
                var n, o = e[Symbol.iterator]();
                !(r = (n = o.next()).done) &&
                (a.push(n.value), !t || a.length !== t);
                r = !0
              );
            } catch (e) {
              (i = !0), (s = e);
            } finally {
              try {
                !r && o.return && o.return();
              } finally {
                if (i) throw s;
              }
            }
            return a;
          }
          return function (t, a) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, a);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance",
            );
          };
        })(),
        J = (function () {
          function e(e, t) {
            for (var a = 0; a < t.length; a++) {
              var r = t[a];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, a, r) {
            return a && e(t.prototype, a), r && e(t, r), t;
          };
        })(),
        K = window.wafer,
        $ = K.base,
        Q = K.utils,
        Z = Q.elementInView,
        ee = Q.fetchWithCache,
        te = Q.findAncestor,
        ae = Q.getConfigFromJSONScriptNode,
        re = Q.getWaferInstanceForElem,
        ie = Q.throttle,
        se = void 0,
        ne = !1,
        oe = K.controllers.WaferBaseController;
      window.__waferCaasCollection = (function () {
        var e = new Map(),
          t = new Map(),
          a = {};
        return {
          addAndBeaconDuplicateId: function (t) {
            if (e.has(t))
              return void setTimeout(function () {
                $.emitWaferEvent("caas:prefetch:duplicate:id", {
                  meta: { uuid: t },
                });
              }, 0);
            e.set(t, !0);
          },
          set: function (e, a) {
            t.set(e, a);
          },
          get: function (e) {
            return (a[e] = !0), t.get(e);
          },
          clearVisitedNodes: function () {
            a = {};
          },
        };
      })();
      var ce = (function (e) {
          function t() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              a = e.errorClass,
              r = void 0 === a ? "wafer-caas-error" : a,
              i = e.root,
              s = void 0 === i ? document : i,
              c = e.selector,
              l = e.successClass,
              d = void 0 === l ? "wafer-caas-complete" : l,
              f = e.validateDelay,
              u = void 0 === f ? 10 : f;
            n(this, t);
            var h = ae(document.getElementById("wafer-caas-config"));
            if (
              ((h.contextParams && -1 !== h.contextParams.indexOf("appid")) ||
                (ne = !0),
              h.caasUrl && !h.forceOverride)
            ) {
              var v = location,
                p = v.hostname,
                w = v.port,
                m = v.protocol;
              "localhost" === p ||
                "4443" === w ||
                "https:" !== m ||
                h.mock ||
                (h.caasUrl = "/caas/content/article/");
            }
            var g = o(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                root: s,
                selector: c,
                props: {
                  caasConfig: h,
                  errorClass: r,
                  selector: c,
                  successClass: d,
                },
                WaferClass: X,
              }),
            );
            return (
              (g._validateWithThrottle = ie(
                function () {
                  for (
                    var e = arguments.length, t = Array(e), a = 0;
                    a < e;
                    a++
                  )
                    t[a] = arguments[a];
                  g.validate.apply(g, t);
                },
                u,
                g,
              )),
              (g._state = g._state || {}),
              (g._state.lastScrollTop = 0),
              (g._state.progressLoader = null),
              g.sync(),
              K.ready(function () {
                g.listenToWaferEvents();
              }),
              g.addPublicAPIs(h),
              g
            );
          }
          return (
            c(t, e),
            J(t, [
              {
                key: "listenToWaferEvents",
                value: function () {
                  var e = this;
                  K.on("darla:fetch:success", function (t) {
                    var a = t.elem;
                    e._handleRightRailAds(a);
                  }),
                    K.on("jac:success", function (t) {
                      var a = t.elem;
                      e._handleRightRailAds(a);
                    }),
                    K.on("benji:success", function (t) {
                      var a = t.elem;
                      e._handleRightRailAds(a);
                    });
                },
              },
              {
                key: "addPublicAPIs",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = e.contextParams,
                    a = void 0 === t ? {} : t;
                  window.wafer.caas ||
                    (window.wafer.caas = {
                      getData: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [];
                        return Promise.all(
                          e.map(function (e) {
                            return new Promise(function (t) {
                              var r = window.__waferCaasCollection.get(e);
                              if (r) {
                                var i = q(r.items, 1),
                                  s = i[0].data;
                                return t(
                                  (void 0 === s ? {} : s).partnerData || {},
                                );
                              }
                              if (!window.wafer.db) return t({});
                              window.wafer.db
                                .get(e + ":1:" + a, "fetch", { timeout: 3e3 })
                                .then(function (e) {
                                  try {
                                    var a = JSON.parse(e.value),
                                      r = a.items,
                                      i = q(r, 1),
                                      s = i[0].data;
                                    return t(
                                      (void 0 === s ? {} : s).partnerData || {},
                                    );
                                  } catch (e) {
                                    return t({});
                                  }
                                })
                                .catch(function (e) {
                                  t({});
                                });
                            });
                          }),
                        );
                      },
                    });
                },
              },
              {
                key: "prefetch",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "";
                  if (!window.wafer.base.isBot) {
                    var t = this._state.elementInstances,
                      a = {},
                      r = [],
                      i = [],
                      s = {},
                      n = void 0,
                      o = void 0,
                      c = void 0,
                      l = 0,
                      d = 0,
                      f = !0,
                      u = !1,
                      h = void 0;
                    try {
                      for (
                        var v, p = t.values()[Symbol.iterator]();
                        !(f = (v = p.next()).done);
                        f = !0
                      ) {
                        var w = v.value;
                        r[l] = r[l] || [];
                        var m = w.instance,
                          b = m.config,
                          A = b.caasConfig,
                          C = void 0 === A ? {} : A,
                          E = b.elem,
                          k = b.href,
                          P = b.isPrefetch,
                          S = b.prefetchGroup,
                          O = b.shouldPrefetchForViewport,
                          R = b.uuid;
                        if (
                          ((c = c || C.caasUrl),
                          (o = o || C.contextParams || ""),
                          S)
                        ) {
                          if (!e) {
                            s[S] = !0;
                            continue;
                          }
                          if (S !== e) continue;
                          o = C[S + "ContextParams"] || o;
                        }
                        if ((P || O) && R) {
                          var I = a[R] || !!window.__waferCaasCollection.get(R);
                          !I && r[l].push({ href: k, uuid: R }),
                            (a[R] = !0),
                            O
                              ? (E.classList.add("did-prefetch"),
                                (m.shouldPrefetchForViewport = !1))
                              : m.destroy(),
                            !I && ++d >= 10 && ((d = 0), l++);
                        }
                      }
                    } catch (e) {
                      (u = !0), (h = e);
                    } finally {
                      try {
                        !f && p.return && p.return();
                      } finally {
                        if (u) throw h;
                      }
                    }
                    for (var T in s) s.hasOwnProperty(T) && this.prefetch(T);
                    return Promise.all(
                      r.map(function (t) {
                        var a = t.map(function () {
                          return (
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : {}
                          ).uuid;
                        });
                        if (a.length)
                          return (
                            (n =
                              (c ||
                                "https://www.yahoo.com/caas/content/article/") +
                              "?uuid=" +
                              a.join(",") +
                              "&" +
                              o),
                            (n = _(n)),
                            ee(n, { cache: 0, timeout: 8e3 })
                              .then(function () {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : {},
                                  t = e.assets,
                                  a = e.items,
                                  r = void 0 === a ? [] : a,
                                  i = { items: r, assets: t };
                                return window.CAAS
                                  ? i
                                  : (se = se || y(t, "", "default")).then(
                                      function () {
                                        return i;
                                      },
                                    );
                              })
                              .then(function () {
                                var a =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : {},
                                  r = a.assets,
                                  s = a.items;
                                return g(
                                  void 0 === s ? [] : s,
                                  r,
                                  e,
                                  function (e) {
                                    var a = t[e].href;
                                    a && i.push(a);
                                  },
                                );
                              })
                          );
                      }),
                    )
                      .then(function () {
                        if (i.length)
                          return Promise.all(
                            i.map(function (t) {
                              return ee(
                                (c ||
                                  "https://www.yahoo.com/caas/content/article/") +
                                  "?url=" +
                                  t +
                                  "&" +
                                  o,
                                { cache: 0 },
                              ).then(function () {
                                var t =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                      ? arguments[0]
                                      : {},
                                  a = t.items,
                                  r = void 0 === a ? [] : a,
                                  i = t.assets;
                                return g(r, i, e);
                              });
                            }),
                          );
                      })
                      .then(function () {
                        $.emitWaferEvent("caas:prefetch:success", {
                          meta: { url: n },
                        });
                      })
                      .catch(function () {
                        $.emitWaferEvent("caas:prefetch:failed", {
                          meta: { url: n },
                        });
                      });
                  }
                },
              },
              {
                key: "_handleArticleInView",
                value: function (e, t) {
                  if (this._state.activeElem !== t) {
                    var a = this._state.progressLoader;
                    (a && !a.instance._destroyed) ||
                      (this._state.progressLoader = re(
                        document.getElementsByClassName(
                          "wafer-caas-progress-loader",
                        )[0],
                        "wafer-progress-loader",
                      )),
                      (a = this._state.progressLoader),
                      a && (a.instance.target = t),
                      e.handleArticleViewEvent(),
                      (this._state.activeElem = t);
                  }
                },
              },
              {
                key: "_handleRightRailAds",
                value: function (e) {
                  var t = te(e, "wafer-caas") || te(e, "wafer-caas-complete");
                  if (t) {
                    var a = this._state.elementInstances,
                      r = a.get(t);
                    if (r) {
                      r.instance.handleRightRailAds();
                    }
                  }
                },
              },
              {
                key: "handleScroll",
                value: function () {
                  var e =
                      window.pageYOffset || document.documentElement.scrollTop,
                    t = 1;
                  (t = e > this._state.lastScrollTop ? 1 : 0),
                    (this._state.lastScrollTop = e <= 0 ? 0 : e),
                    this._validateWithThrottle({ scrollDirection: t });
                },
              },
              {
                key: "handleResize",
                value: function () {
                  this._validateWithThrottle();
                },
              },
              {
                key: "didSync",
                value: function () {
                  var e = this,
                    t = this._state,
                    a = t.elementInstances,
                    r = t.mounted;
                  0 === a.size || r || (this._state.mounted = !0),
                    setTimeout(function () {
                      e.prefetch();
                    }, 10);
                },
              },
              {
                key: "trigger",
                value: function (e) {
                  var t = this._state.elementInstances.get(e);
                  if (t) {
                    var a = t.instance;
                    if ("renderedArticle" === a.config.type) return;
                    a.fetch();
                  }
                },
              },
              {
                key: "handleColorSchemaChange",
                value: function () {
                  if (this._state && this._state.mounted) {
                    var e = this._state.elementInstances,
                      t = !0,
                      a = !1,
                      r = void 0;
                    try {
                      for (
                        var i, s = e.values()[Symbol.iterator]();
                        !(t = (i = s.next()).done);
                        t = !0
                      ) {
                        i.value.instance.handleColorSchemaChange();
                      }
                    } catch (e) {
                      (a = !0), (r = e);
                    } finally {
                      try {
                        !t && s.return && s.return();
                      } finally {
                        if (a) throw r;
                      }
                    }
                  }
                },
              },
              {
                key: "willValidate",
                value: function (e) {
                  var t = this,
                    a = this._state.elementInstances;
                  e.forEach(function (e) {
                    var r = a.get(e),
                      i = r.instance;
                    if (ne) return void i.destroy();
                    if (!i.config.isPrefetch) {
                      var s = i.config,
                        n = s.offsetX,
                        o = s.offsetY,
                        c = s.selector,
                        l = s.trigger,
                        d = s.type,
                        f = s.viewportEventOffset,
                        u = Z(e, { offsetX: n, offsetY: o }, $.viewport);
                      if ("renderedArticle" !== d)
                        switch (l) {
                          case "viewport":
                          case "viewportWithPrefetch":
                            1 !== i._state.status &&
                              u &&
                              i
                                .fetch()
                                .then(function (t) {
                                  t &&
                                    c &&
                                    e.classList.remove(c.replace(".", ""));
                                })
                                .catch(function () {});
                            break;
                          case "onLoad":
                            i.fetch()
                              .then(function (t) {
                                t &&
                                  c &&
                                  e.classList.remove(c.replace(".", ""));
                              })
                              .catch(function () {});
                        }
                      var h = !1;
                      if (u) {
                        (h =
                          1 === i._state.status &&
                          ("default" === d || "renderedArticle" === d)) &&
                          i.handleArticleViewEvent("pre:inview");
                        var v = t._state.activeElem;
                        if (v === e) {
                          if (h) {
                            var p = v.getBoundingClientRect(),
                              w = p.bottom,
                              m = p.top,
                              g = v.offsetHeight,
                              y = g / 2,
                              _ = $.viewport,
                              b = w + 0 >= _.top && m + y <= _.bottom;
                            m - f <= 0 &&
                              i.handleArticleViewEvent(
                                "top:viewport:triggered",
                              ),
                              b
                                ? (i.handleArticleViewEvent("half:inview"),
                                  w + 0 >= _.top &&
                                    m + g <= _.bottom &&
                                    i.handleArticleViewEvent("full:inview"))
                                : i.handleArticleViewEvent("half:not:inview");
                          }
                          return;
                        }
                      }
                      (t._state.activeElem &&
                        Z(
                          t._state.activeElem,
                          { offsetX: n, offsetY: o },
                          $.viewport,
                        )) ||
                        (h && t._handleArticleInView(i, e));
                    }
                  });
                },
              },
              {
                key: "didDestroy",
                value: function () {
                  var e = !0,
                    t = this._state.elementInstances,
                    a = !0,
                    r = !1,
                    i = void 0;
                  try {
                    for (
                      var s, n = t.values()[Symbol.iterator]();
                      !(a = (s = n.next()).done);
                      a = !0
                    ) {
                      var o = s.value,
                        c = o.instance.config,
                        l = c.isPrefetch;
                      if ("default" === c.type && !l) {
                        e = !1;
                        break;
                      }
                    }
                  } catch (e) {
                    (r = !0), (i = e);
                  } finally {
                    try {
                      !a && n.return && n.return();
                    } finally {
                      if (r) throw i;
                    }
                  }
                  e &&
                    (window._caasInstance &&
                      (window._caasInstance.destructor(),
                      (window._caasInstance = null),
                      window.__waferCaasCollection.clearVisitedNodes()),
                    window.wafer.base.resumeVideo("wafer-caas"));
                },
              },
            ]),
            t
          );
        })(oe),
        le = ce;
      t.default = new le({ selector: "wafer-caas" });
    },
  });
});
