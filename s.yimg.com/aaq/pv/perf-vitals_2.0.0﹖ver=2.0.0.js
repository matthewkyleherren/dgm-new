!(function () {
  "use strict";
  var e = function (e, t) {
      return {
        name: e,
        value: void 0 === t ? -1 : t,
        delta: 0,
        entries: [],
        id: "v2-"
          .concat(Date.now(), "-")
          .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
      };
    },
    t = function (e, t) {
      try {
        if (PerformanceObserver.supportedEntryTypes.includes(e)) {
          if ("first-input" === e && !("PerformanceEventTiming" in self))
            return;
          var n = new PerformanceObserver(function (e) {
            return e.getEntries().map(t);
          });
          return n.observe({ type: e, buffered: !0 }), n;
        }
      } catch (e) {}
    },
    n = function (e, t) {
      var n = function n(i) {
        ("pagehide" !== i.type && "hidden" !== document.visibilityState) ||
          (e(i),
          t &&
            (removeEventListener("visibilitychange", n, !0),
            removeEventListener("pagehide", n, !0)));
      };
      addEventListener("visibilitychange", n, !0),
        addEventListener("pagehide", n, !0);
    },
    i = function (e) {
      addEventListener(
        "pageshow",
        function (t) {
          t.persisted && e(t);
        },
        !0,
      );
    },
    a = "function" == typeof WeakSet ? new WeakSet() : new Set(),
    r = function (e, t, n) {
      var i;
      return function () {
        t.value >= 0 &&
          (n || a.has(t) || "hidden" === document.visibilityState) &&
          ((t.delta = t.value - (i || 0)),
          (t.delta || void 0 === i) && ((i = t.value), e(t)));
      };
    },
    o = -1,
    s = function () {
      n(function (e) {
        var t = e.timeStamp;
        o = t;
      }, !0);
    },
    u = function () {
      return (
        o < 0 &&
          ((o = self.webVitals.firstHiddenTime) === 1 / 0 && s(),
          i(function () {
            setTimeout(function () {
              (o = "hidden" === document.visibilityState ? 0 : 1 / 0), s();
            }, 0);
          })),
        {
          get firstHiddenTime() {
            return o;
          },
        }
      );
    },
    c = function (n, o) {
      var s,
        c = u(),
        d = e("FCP"),
        f = function (e) {
          "first-contentful-paint" === e.name &&
            (v && v.disconnect(),
            e.startTime < c.firstHiddenTime &&
              ((d.value = e.startTime), d.entries.push(e), a.add(d), s()));
        },
        l =
          performance.getEntriesByName &&
          performance.getEntriesByName("first-contentful-paint")[0],
        v = l ? null : t("paint", f);
      (l || v) &&
        ((s = r(n, d, o)),
        l && f(l),
        i(function (t) {
          (d = e("FCP")),
            (s = r(n, d, o)),
            requestAnimationFrame(function () {
              requestAnimationFrame(function () {
                (d.value = performance.now() - t.timeStamp), a.add(d), s();
              });
            });
        }));
    },
    d = !1,
    f = -1;
  var l,
    v,
    m = /\s+/g,
    p = window,
    h = [];
  function g() {
    var e = p.rapidInstance;
    if (e)
      for (
        l = l || e.getRapidAttribute("keys"),
          v = v || e.getRapidAttribute("spaceid");
        h.length;

      )
        y(h.shift());
  }
  function y(e) {
    var t = e.entries,
      n = void 0 === t ? [] : t,
      i = e.name,
      a = e.value,
      r = p.rapidInstance;
    if (
      r &&
      r.beaconPerformanceData &&
      r.getRapidAttribute &&
      r.setRapidAttribute
    ) {
      for (
        var o = "CLS" === i ? parseFloat(a.toFixed(3)) : Math.round(a),
          s = "perf_" + i.toLowerCase(),
          u = n.length,
          c = n[u - 1] || {},
          d = u - 2;
        d >= 0;
        d--
      )
        n[d].value > c.value && (c = n[d]);
      var f =
          c.element ||
          c.target ||
          (c.sources && c.sources[0] && c.sources[0].node),
        h = {};
      (h[s] = o),
        f &&
          ((h[s + "_elmt"] = (f.nodeName || "").toLowerCase()),
          (h[s + "_id"] = f.id || f.className || ""),
          (h[s + "_slk"] = (f.innerText || f.alt || f.title || "")
            .replace(m, " ")
            .substr(0, 150))),
        c.url && (h[s + "_url"] = c.url);
      var g = r.getRapidAttribute("keys"),
        y = r.getRapidAttribute("spaceid");
      if (g && l)
        for (var w in g)
          g.hasOwnProperty(w) && !l.hasOwnProperty(w) && (l[w] = "");
      r.setRapidAttribute({ spaceid: v }),
        r.beaconPerformanceData({ perf_usertime: { utm: h } }, l),
        r.setRapidAttribute({ spaceid: y });
    }
  }
  function w(e) {
    p.rapidInstance ? (g(), y(e)) : h.push(e);
  }
  c(w),
    (function (o, s) {
      var c,
        d = u(),
        f = e("FID"),
        l = function (e) {
          e.startTime < d.firstHiddenTime &&
            ((f.value = e.processingStart - e.startTime),
            f.entries.push(e),
            a.add(f),
            c());
        },
        v = t("first-input", l);
      (c = r(o, f, s)),
        v &&
          n(function () {
            v.takeRecords().map(l), v.disconnect();
          }, !0),
        v || window.webVitals.firstInputPolyfill(l),
        i(function () {
          (f = e("FID")),
            (c = r(o, f, s)),
            window.webVitals.resetFirstInputPolyfill(),
            window.webVitals.firstInputPolyfill(l);
        });
    })(w),
    (function (o, s) {
      var c,
        d = u(),
        f = e("LCP"),
        l = function (e) {
          var t = e.startTime;
          t < d.firstHiddenTime && ((f.value = t), f.entries.push(e)), c();
        },
        v = t("largest-contentful-paint", l);
      if (v) {
        c = r(o, f, s);
        var m = function () {
          a.has(f) || (v.takeRecords().map(l), v.disconnect(), a.add(f), c());
        };
        ["keydown", "click"].forEach(function (e) {
          addEventListener(e, m, { once: !0, capture: !0 });
        }),
          n(m, !0),
          i(function (t) {
            (f = e("LCP")),
              (c = r(o, f, s)),
              requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                  (f.value = performance.now() - t.timeStamp), a.add(f), c();
                });
              });
          });
      }
    })(w),
    (function (e, t, n) {
      try {
        var i = window.performance,
          a = (i.getEntriesByType && i.getEntriesByType("navigation")[0]) || {
            entryType: "navigation",
            startTime: 0,
          },
          r = i.timing || {};
        !a[n] && r[n] && (a[n] = Math.max(r[n] - r.navigationStart, 0));
        var o = a[n];
        o > 0 && e({ delta: o, entries: [a], id: t, name: t, value: o });
      } catch (e) {}
    })(w, "TTFB", "responseStart"),
    p.addEventListener &&
      (p.addEventListener("DOMContentLoaded", g),
      p.addEventListener("beforeunload", function () {
        !(function (a, o) {
          d ||
            (c(function (e) {
              f = e.value;
            }),
            (d = !0));
          var s,
            u = function (e) {
              f > -1 && a(e);
            },
            l = e("CLS", 0),
            v = 0,
            m = [],
            p = function (e) {
              if (!e.hadRecentInput) {
                var t = m[0],
                  n = m[m.length - 1];
                v &&
                e.startTime - n.startTime < 1e3 &&
                e.startTime - t.startTime < 5e3
                  ? ((v += e.value), m.push(e))
                  : ((v = e.value), (m = [e])),
                  v > l.value && ((l.value = v), (l.entries = m), s());
              }
            },
            h = t("layout-shift", p);
          h &&
            ((s = r(u, l, o)),
            n(function () {
              h.takeRecords().map(p), s();
            }),
            i(function () {
              (v = 0), (f = -1), (l = e("CLS", 0)), (s = r(u, l, o));
            }));
        })(w);
      }));
})();
