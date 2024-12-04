!(function (a, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
      ? define("wafer-loader", [], e)
      : "object" == typeof exports
        ? (exports["wafer-loader"] = e())
        : ((a.wafer = a.wafer || {}),
          (a.wafer.wafers = a.wafer.wafers || {}),
          (a.wafer.wafers["wafer-loader"] = e()));
})("undefined" != typeof self ? self : this, function () {
  return (function (a) {
    function e(w) {
      if (r[w]) return r[w].exports;
      var f = (r[w] = { i: w, l: !1, exports: {} });
      return a[w].call(f.exports, f, f.exports, e), (f.l = !0), f.exports;
    }
    var r = {};
    return (
      (e.m = a),
      (e.c = r),
      (e.d = function (a, r, w) {
        e.o(a, r) ||
          Object.defineProperty(a, r, {
            configurable: !1,
            enumerable: !0,
            get: w,
          });
      }),
      (e.n = function (a) {
        var r =
          a && a.__esModule
            ? function () {
                return a.default;
              }
            : function () {
                return a;
              };
        return e.d(r, "a", r), r;
      }),
      (e.o = function (a, e) {
        return Object.prototype.hasOwnProperty.call(a, e);
      }),
      (e.p = "https://s.yimg.com/aaq/wf/"),
      e((e.s = "./src/entry.js"))
    );
  })({
    "../../manifest.json": function (a, e) {
      a.exports = {
        "wafer-account-switch": {
          meta: { version: "1.1.7" },
          modern: {
            min: "/aaq/wf/wf-account-switch-1.1.7-modern.js",
            raw: "/aaq/wf/wf-account-switch-1.1.7-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-account-switch-1.1.7.js",
            raw: "/aaq/wf/wf-account-switch-1.1.7.raw.js",
          },
        },
        "wafer-action": {
          meta: { version: "1.8.1" },
          modern: {
            min: "/aaq/wf/wf-action-1.8.1-modern.js",
            raw: "/aaq/wf/wf-action-1.8.1-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-action-1.8.1.js",
            raw: "/aaq/wf/wf-action-1.8.1.raw.js",
          },
        },
        "wafer-autocomplete": {
          meta: { version: "1.31.8" },
          modern: {
            min: "/aaq/wf/wf-autocomplete-1.31.8-modern.js",
            raw: "/aaq/wf/wf-autocomplete-1.31.8-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-autocomplete-1.31.8.js",
            raw: "/aaq/wf/wf-autocomplete-1.31.8.raw.js",
          },
        },
        "wafer-beacon": {
          meta: { version: "1.3.4" },
          modern: {
            min: "/aaq/wf/wf-beacon-1.3.4-modern.js",
            raw: "/aaq/wf/wf-beacon-1.3.4-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-beacon-1.3.4.js",
            raw: "/aaq/wf/wf-beacon-1.3.4.raw.js",
          },
        },
        "wafer-benji": {
          meta: { version: "1.2.0" },
          modern: {
            min: "/aaq/wf/wf-benji-1.2.0-modern.js",
            raw: "/aaq/wf/wf-benji-1.2.0-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-benji-1.2.0.js",
            raw: "/aaq/wf/wf-benji-1.2.0.raw.js",
          },
        },
        "wafer-bind": {
          meta: { version: "1.1.3" },
          modern: {
            min: "/aaq/wf/wf-bind-1.1.3-modern.js",
            raw: "/aaq/wf/wf-bind-1.1.3-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-bind-1.1.3.js",
            raw: "/aaq/wf/wf-bind-1.1.3.raw.js",
          },
        },
        "wafer-caas": {
          meta: { version: "1.36.6" },
          modern: {
            min: "/aaq/wf/wf-caas-1.36.6-modern.js",
            raw: "/aaq/wf/wf-caas-1.36.6-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-caas-1.36.6.js",
            raw: "/aaq/wf/wf-caas-1.36.6.raw.js",
          },
        },
        "wafer-clipboard-copy": {
          meta: { version: "1.0.2" },
          modern: {
            min: "/aaq/wf/wf-clipboard-copy-1.0.2-modern.js",
            raw: "/aaq/wf/wf-clipboard-copy-1.0.2-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-clipboard-copy-1.0.2.js",
            raw: "/aaq/wf/wf-clipboard-copy-1.0.2.raw.js",
          },
        },
        "wafer-core": {
          meta: { version: "1.65.1" },
          modern: {
            min: "/aaq/wf/wf-core-1.65.1-modern.js",
            raw: "/aaq/wf/wf-core-1.65.1-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-core-1.65.1.js",
            raw: "/aaq/wf/wf-core-1.65.1.raw.js",
          },
        },
        "wafer-countdown": {
          meta: { version: "1.2.5" },
          modern: {
            min: "/aaq/wf/wf-countdown-1.2.5-modern.js",
            raw: "/aaq/wf/wf-countdown-1.2.5-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-countdown-1.2.5.js",
            raw: "/aaq/wf/wf-countdown-1.2.5.raw.js",
          },
        },
        "wafer-debug": {
          meta: { version: "1.3.2" },
          modern: {
            min: "/aaq/wf/wf-debug-1.3.2-modern.js",
            raw: "/aaq/wf/wf-debug-1.3.2-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-debug-1.3.2.js",
            raw: "/aaq/wf/wf-debug-1.3.2.raw.js",
          },
        },
        "wafer-dl": {
          meta: { version: "1.7.0" },
          modern: {
            min: "/aaq/wf/wf-dl-1.7.0-modern.js",
            raw: "/aaq/wf/wf-dl-1.7.0-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-dl-1.7.0.js",
            raw: "/aaq/wf/wf-dl-1.7.0.raw.js",
          },
        },
        "wafer-drawer": {
          meta: { version: "1.0.13" },
          modern: {
            min: "/aaq/wf/wf-drawer-1.0.13-modern.js",
            raw: "/aaq/wf/wf-drawer-1.0.13-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-drawer-1.0.13.js",
            raw: "/aaq/wf/wf-drawer-1.0.13.raw.js",
          },
        },
        "wafer-dropdown-drawer": {
          meta: { version: "1.1.3" },
          modern: {
            min: "/aaq/wf/wf-dropdown-drawer-1.1.3-modern.js",
            raw: "/aaq/wf/wf-dropdown-drawer-1.1.3-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-dropdown-drawer-1.1.3.js",
            raw: "/aaq/wf/wf-dropdown-drawer-1.1.3.raw.js",
          },
        },
        "wafer-experiment-scrollview": {
          meta: { version: "1.2.10" },
          modern: {
            min: "/aaq/wf/wf-experiment-scrollview-1.2.10-modern.js",
            raw: "/aaq/wf/wf-experiment-scrollview-1.2.10-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-experiment-scrollview-1.2.10.js",
            raw: "/aaq/wf/wf-experiment-scrollview-1.2.10.raw.js",
          },
        },
        "wafer-fetch": {
          meta: { version: "1.19.1" },
          modern: {
            min: "/aaq/wf/wf-fetch-1.19.1-modern.js",
            raw: "/aaq/wf/wf-fetch-1.19.1-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-fetch-1.19.1.js",
            raw: "/aaq/wf/wf-fetch-1.19.1.raw.js",
          },
        },
        "wafer-form": {
          meta: { version: "1.34.5" },
          modern: {
            min: "/aaq/wf/wf-form-1.34.5-modern.js",
            raw: "/aaq/wf/wf-form-1.34.5-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-form-1.34.5.js",
            raw: "/aaq/wf/wf-form-1.34.5.raw.js",
          },
        },
        "wafer-geolocation": {
          meta: { version: "1.3.0" },
          modern: {
            min: "/aaq/wf/wf-geolocation-1.3.0-modern.js",
            raw: "/aaq/wf/wf-geolocation-1.3.0-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-geolocation-1.3.0.js",
            raw: "/aaq/wf/wf-geolocation-1.3.0.raw.js",
          },
        },
        "wafer-iframe": {
          meta: { version: "1.2.2" },
          modern: {
            min: "/aaq/wf/wf-iframe-1.2.2-modern.js",
            raw: "/aaq/wf/wf-iframe-1.2.2-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-iframe-1.2.2.js",
            raw: "/aaq/wf/wf-iframe-1.2.2.raw.js",
          },
        },
        "wafer-image": {
          meta: { version: "1.4.0" },
          modern: {
            min: "/aaq/wf/wf-image-1.4.0-modern.js",
            raw: "/aaq/wf/wf-image-1.4.0-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-image-1.4.0.js",
            raw: "/aaq/wf/wf-image-1.4.0.raw.js",
          },
        },
        "wafer-lightbox": {
          meta: { version: "1.10.6" },
          modern: {
            min: "/aaq/wf/wf-lightbox-1.10.6-modern.js",
            raw: "/aaq/wf/wf-lightbox-1.10.6-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-lightbox-1.10.6.js",
            raw: "/aaq/wf/wf-lightbox-1.10.6.raw.js",
          },
        },
        "wafer-loader": {
          meta: { version: "2.7.21" },
          modern: {
            min: "/aaq/wf/wf-loader-2.7.21-modern.js",
            raw: "/aaq/wf/wf-loader-2.7.21-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-loader-2.7.21.js",
            raw: "/aaq/wf/wf-loader-2.7.21.raw.js",
          },
        },
        "wafer-menu": {
          meta: { version: "1.3.5" },
          modern: {
            min: "/aaq/wf/wf-menu-1.3.5-modern.js",
            raw: "/aaq/wf/wf-menu-1.3.5-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-menu-1.3.5.js",
            raw: "/aaq/wf/wf-menu-1.3.5.raw.js",
          },
        },
        "wafer-module": {
          meta: { version: "2.0.0" },
          modern: {
            min: "/aaq/wf/wf-module-2.0.0-modern.js",
            raw: "/aaq/wf/wf-module-2.0.0-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-module-2.0.0.js",
            raw: "/aaq/wf/wf-module-2.0.0.raw.js",
          },
        },
        "wafer-move": {
          meta: { version: "1.1.1" },
          modern: {
            min: "/aaq/wf/wf-move-1.1.1-modern.js",
            raw: "/aaq/wf/wf-move-1.1.1-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-move-1.1.1.js",
            raw: "/aaq/wf/wf-move-1.1.1.raw.js",
          },
        },
        "wafer-native-da": {
          meta: { version: "1.0.5" },
          modern: {
            min: "/aaq/wf/wf-native-da-1.0.5-modern.js",
            raw: "/aaq/wf/wf-native-da-1.0.5-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-native-da-1.0.5.js",
            raw: "/aaq/wf/wf-native-da-1.0.5.raw.js",
          },
        },
        "wafer-progress-loader": {
          meta: { version: "1.2.10" },
          modern: {
            min: "/aaq/wf/wf-progress-loader-1.2.10-modern.js",
            raw: "/aaq/wf/wf-progress-loader-1.2.10-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-progress-loader-1.2.10.js",
            raw: "/aaq/wf/wf-progress-loader-1.2.10.raw.js",
          },
        },
        "wafer-rapid": {
          meta: { version: "1.10.9" },
          modern: {
            min: "/aaq/wf/wf-rapid-1.10.9-modern.js",
            raw: "/aaq/wf/wf-rapid-1.10.9-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-rapid-1.10.9.js",
            raw: "/aaq/wf/wf-rapid-1.10.9.raw.js",
          },
        },
        "wafer-scrollview": {
          meta: { version: "2.23.3" },
          modern: {
            min: "/aaq/wf/wf-scrollview-2.23.3-modern.js",
            raw: "/aaq/wf/wf-scrollview-2.23.3-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-scrollview-2.23.3.js",
            raw: "/aaq/wf/wf-scrollview-2.23.3.raw.js",
          },
        },
        "wafer-sticky": {
          meta: { version: "1.2.6" },
          modern: {
            min: "/aaq/wf/wf-sticky-1.2.6-modern.js",
            raw: "/aaq/wf/wf-sticky-1.2.6-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-sticky-1.2.6.js",
            raw: "/aaq/wf/wf-sticky-1.2.6.raw.js",
          },
        },
        "wafer-tabs": {
          meta: { version: "1.12.6" },
          modern: {
            min: "/aaq/wf/wf-tabs-1.12.6-modern.js",
            raw: "/aaq/wf/wf-tabs-1.12.6-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-tabs-1.12.6.js",
            raw: "/aaq/wf/wf-tabs-1.12.6.raw.js",
          },
        },
        "wafer-template": {
          meta: { version: "1.4.3" },
          modern: {
            min: "/aaq/wf/wf-template-1.4.3-modern.js",
            raw: "/aaq/wf/wf-template-1.4.3-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-template-1.4.3.js",
            raw: "/aaq/wf/wf-template-1.4.3.raw.js",
          },
        },
        "wafer-text": {
          meta: { version: "1.2.0" },
          modern: {
            min: "/aaq/wf/wf-text-1.2.0-modern.js",
            raw: "/aaq/wf/wf-text-1.2.0-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-text-1.2.0.js",
            raw: "/aaq/wf/wf-text-1.2.0.raw.js",
          },
        },
        "wafer-time": {
          meta: { version: "1.0.3" },
          modern: {
            min: "/aaq/wf/wf-time-1.0.3-modern.js",
            raw: "/aaq/wf/wf-time-1.0.3-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-time-1.0.3.js",
            raw: "/aaq/wf/wf-time-1.0.3.raw.js",
          },
        },
        "wafer-toast": {
          meta: { version: "1.0.2" },
          modern: {
            min: "/aaq/wf/wf-toast-1.0.2-modern.js",
            raw: "/aaq/wf/wf-toast-1.0.2-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-toast-1.0.2.js",
            raw: "/aaq/wf/wf-toast-1.0.2.raw.js",
          },
        },
        "wafer-toggle": {
          meta: { version: "1.15.4" },
          modern: {
            min: "/aaq/wf/wf-toggle-1.15.4-modern.js",
            raw: "/aaq/wf/wf-toggle-1.15.4-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-toggle-1.15.4.js",
            raw: "/aaq/wf/wf-toggle-1.15.4.raw.js",
          },
        },
        "wafer-tooltip": {
          meta: { version: "1.3.2" },
          modern: {
            min: "/aaq/wf/wf-tooltip-1.3.2-modern.js",
            raw: "/aaq/wf/wf-tooltip-1.3.2-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-tooltip-1.3.2.js",
            raw: "/aaq/wf/wf-tooltip-1.3.2.raw.js",
          },
        },
        "wafer-video": {
          meta: { version: "3.2.2" },
          modern: {
            min: "/aaq/wf/wf-video-3.2.2-modern.js",
            raw: "/aaq/wf/wf-video-3.2.2-modern.raw.js",
          },
          default: {
            min: "/aaq/wf/wf-video-3.2.2.js",
            raw: "/aaq/wf/wf-video-3.2.2.raw.js",
          },
        },
      };
    },
    "./src/entry.js": function (a, e, r) {
      "use strict";
      function w(a, e) {
        if (!(a instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(e, "__esModule", { value: !0 });
      var f = (function () {
          function a(a, e) {
            for (var r = 0; r < e.length; r++) {
              var w = e[r];
              (w.enumerable = w.enumerable || !1),
                (w.configurable = !0),
                "value" in w && (w.writable = !0),
                Object.defineProperty(a, w.key, w);
            }
          }
          return function (e, r, w) {
            return r && a(e.prototype, r), w && a(e, w), e;
          };
        })(),
        o = window.wafer,
        n = o.base,
        s = o.utils,
        t = o.wafers,
        i = s.loadScriptAsync,
        m = r("../../manifest.json"),
        d = { "wafer-core": !0, "wafer-loader": !0 },
        l = { "wafer-rapid": "wafer-rapid-module", "wafer-image": "wafer-img" },
        c = { "wafer-rapid-module": "wafer-rapid", "wafer-img": "wafer-image" },
        j = [];
      for (var u in m)
        if (m.hasOwnProperty(u)) {
          if (d[u]) continue;
          j.push(u);
        }
      var q = (function () {
          function a() {
            var e = this,
              r =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              f = r.errorClass,
              o = void 0 === f ? "wafer-loader-error" : f,
              n = r.root,
              s = void 0 === n ? document : n,
              t = r.successClass,
              i = void 0 === t ? "wafer-loader-success" : t;
            w(this, a),
              (this._state = { pendingLoadingMap: {} }),
              (this._options = {
                props: {
                  debug: !1,
                  errorClass: o,
                  modern: !0,
                  successClass: i,
                },
                root: s,
              }),
              window.wafer.ready(function () {
                setTimeout(function () {
                  e.loadWafersForWrapperElem(document);
                }, 0);
              }),
              this.sync();
          }
          return (
            f(a, [
              {
                key: "loadWafersForWrapperElem",
                value: function (a) {
                  var e = this,
                    r = [];
                  j.forEach(function (w) {
                    var f = l[w] || w,
                      o = w.replace("wafer", "wf"),
                      n = a.getElementsByClassName(f)[0];
                    if (n) {
                      return void (
                        document.querySelector('script[src*="wf/' + o + '"]') ||
                        e._loadWafersForElem(n)
                      );
                    }
                    r.push(w);
                  }),
                    (j = r);
                },
              },
              {
                key: "sync",
                value: function (a) {
                  a && this.loadWafersForWrapperElem(a);
                },
              },
              {
                key: "_loadWafersForElem",
                value: function (a) {
                  var e = this,
                    r = this._options.props,
                    w = r.errorClass,
                    f = r.successClass;
                  return new Promise(function (e) {
                    var r = [],
                      w = a.className;
                    (void 0 === w ? "" : w).split(" ").forEach(function (a) {
                      (a = c[a] || a), m[a] && r.push(a.replace("wafer-", ""));
                    }),
                      e(r);
                  })
                    .then(function (a) {
                      return e._loadWaferScripts(a);
                    })
                    .then(function () {
                      a.classList.add(f);
                    })
                    .catch(function (e) {
                      a.classList.add(w);
                    });
                },
              },
              {
                key: "_loadWaferScripts",
                value: function () {
                  var a =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    e = this._state.pendingLoadingMap,
                    r = this._options.props,
                    w = r.debug,
                    f = r.modern;
                  return Promise.all(
                    a.map(function (a) {
                      var r = "wafer-" + a;
                      return new Promise(function (o, s) {
                        if ("core" === a || t[r] || e[r]) return void o();
                        var d = m[r];
                        if (!d) return void o();
                        var l = d[f ? "modern" : "default"][w ? "raw" : "min"];
                        if (n._assetLoadedMapping.get(l)) return void o();
                        (e[r] = !0),
                          n._assetLoadedMapping.set(l, !0),
                          i({ src: "https://s.yimg.com" + l }, function (a) {
                            if (((e[r] = !1), a)) return void s(a);
                            o();
                          });
                      });
                    }),
                  );
                },
              },
            ]),
            a
          );
        })(),
        p = q;
      e.default = new p({ selector: ".wafer" });
    },
  });
});