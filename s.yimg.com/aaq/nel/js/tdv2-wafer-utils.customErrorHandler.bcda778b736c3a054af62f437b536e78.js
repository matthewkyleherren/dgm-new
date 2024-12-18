"use strict";
function _typeof(e) {
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    _typeof(e)
  );
}
!(function () {
  var e,
    n,
    t,
    o,
    r = window,
    a = r.onerror,
    i = [
      "apptype",
      "rid",
      "bucketId",
      "bucket",
      "device",
      "osName",
      "browserName",
      "browserVersion",
    ],
    c = /^resource:\/\//,
    s = /ActionScript|Decompress\sfail/,
    f = { beaconPath: "p.gif", site: "fp" },
    d = 0,
    w = function () {
      var e =
        (r.navigator &&
          (navigator.connection ||
            navigator.mozConnection ||
            navigator.webkitConnection)) ||
        {};
      return {
        downlink: e.downlink || "",
        downlinkMax: e.downlinkMax || "",
        effectiveType: e.effectiveType || "",
        rtt: e.rtt || "",
        saveData: e.saveData || "",
        type: e.type || "",
      };
    },
    u = function () {
      var e = (r.YAHOO && r.YAHOO.context) || (r.Af && r.Af.context) || {},
        n = "";
      return (
        i.forEach(function (t) {
          "undefined" !== _typeof(e[t]) &&
            (n += "&"
              .concat(encodeURIComponent(t), "=")
              .concat(encodeURIComponent(e[t])));
        }),
        n
      );
    },
    g = function (e, n, t, o) {
      if (!(d > 3 || (r.navigator && !1 === r.navigator.onLine))) {
        (e && n) ||
          (o &&
            o(
              "Missing required params - type: ".concat(e, ", src: ").concat(n),
            ));
        var a = t || {};
        n && (a.src = n), (a._rdn = new Date().getTime().toString().substr(7));
        var i = Object.keys(a)
            .map(function (e) {
              return encodeURIComponent(e) + "=" + encodeURIComponent(a[e]);
            })
            .join("&"),
          c = !!window.wafer,
          s = !(!window.wafer || !window.wafer.ready),
          g = ""
            .concat("/_td_api/beacon", "/")
            .concat(e, "?")
            .concat(i)
            .concat(u(), "&site=")
            .concat(f.site, "&connection=")
            .concat(escape(JSON.stringify(w())), "&hasWf=")
            .concat(c, "&hasWfR=")
            .concat(s);
        v(g), r.__testError && (r.__testImg = g);
      }
    },
    l =
      ((e = function (e, n) {
        if (n) {
          var t = "string" == typeof n ? n : n.message;
          if (!t || !s.test(t)) {
            var o,
              r = n.toString();
            if (n) {
              switch (r) {
                case "[object String]":
                  o = { code: 999, message: n };
                  break;
                case "[object Error]":
                  o = {
                    code: n.code || n.name || 999,
                    file: n.fileName || "",
                    line: n.lineNumber || "",
                    message: n.message,
                  };
                  break;
                case "[object Object]":
                  o = n;
                  break;
                default:
                  try {
                    o = { code: 999, message: JSON.stringify(n) };
                  } catch (e) {}
              }
              o.message = (o.message && o.message.substring(0, 300)) || "";
            }
            g("error", e, o);
          }
        }
      }),
      (n = 20),
      (o = 0),
      function () {
        for (var a = arguments.length, i = new Array(a), c = 0; c < a; c++)
          i[c] = arguments[c];
        if (r.__testError) e.apply(t, i);
        else {
          var s = +new Date();
          s - o < n || ((o = s), e.apply(t, i));
        }
      });
  r.onerror = function (e, n, t) {
    try {
      if (!c.test(n)) {
        var o = {
          code: e.name,
          file: e.fileName || "",
          line: e.lineNumber || t || "",
          message: e.message || e,
          url: n && n.substring(0, 300),
        };
        l("winerror", o);
      }
    } catch (e) {}
    return "function" == typeof a && a(e, n, t);
  };
  var y,
    p = function (e) {
      if (e && "IDB-connection-success" === e.name)
        window.wafer.base.clearOldCache({ timeDiffToDelete: 13824e5 });
    },
    v = function (e) {
      var n = new Image();
      (n.onerror = function () {
        d++;
      }),
        (n.src = e);
    },
    m = function (e) {
      if (!(d > 3) && (!r.navigator || !1 !== r.navigator.onLine) && e) {
        var n = e.meta,
          t = e.name,
          o = e.stack,
          a = (o && o.message) || o || "",
          i = "/"
            .concat(f.beaconPath, "?err=")
            .concat(t, "&beaconType=wafer_err&info=")
            .concat(escape(JSON.stringify(n)), "&stack=")
            .concat(a, "&connection=")
            .concat(escape(JSON.stringify(w())))
            .concat(u());
        v(i), r.__testError && (r.__testBeaconUrl = i);
      }
    },
    b = function () {
      if (y) return !0;
      window.wafer.on("log", p),
        window.wafer.on("error", m),
        (y = !0),
        window.YAHOO &&
          (window.YAHOO.errBeaconConfig &&
            Object.assign(f, window.YAHOO.errBeaconConfig),
          (window.YAHOO.utils = window.YAHOO.utils || {}),
          (window.YAHOO.utils.sendToBeaconeater = g)),
        "ReportingObserver" in window &&
          new window.ReportingObserver(
            function (e, n) {
              for (var t = 0; t < e.length; t++) {
                var o = e[t];
                if (o && "csp-violation" !== o.type) {
                  var r = o.body || {};
                  r.url = o.url;
                  var a = r.id,
                    i = r.sourceFile;
                  ("PreventDefaultPassive" === a &&
                    i.indexOf("oath-player") > -1) ||
                    g("reporting-observer", o.type, {
                      meta: JSON.stringify(r),
                    });
                }
              }
            },
            { buffered: !0 },
          ).observe();
    };
  window.wafer && window.wafer.ready
    ? window.wafer.ready(function () {
        b();
      })
    : window.addEventListener("load", function () {
        b();
      }),
    r.__testError && b();
  var O = (r.YAHOO && r.YAHOO.context) || (r.Af && r.Af.context) || {};
  if (1 !== (O.feature || []).indexOf("enableClientSideOtel")) {
    var A = O.bucket || [];
    window.addEventListener("yob:ready", function (e) {
      var n = e.details.tracesCreator;
      r.YAHOO.utils.traces = n.createTracesInstance({
        traces: {
          globalAttributes: {
            authed: O.authed || "0",
            bucket: (Array.isArray(A) && A.join(",")) || A,
            connect: "".concat(escape(JSON.stringify(w()))).concat(u()),
            device: O.device,
            env: O.env || "production",
            lang: O.lang,
            region: O.region,
            site: O.site,
            ynet: O.ynet,
          },
          serviceName: O.serviceName || "news.frontpage",
        },
      });
    });
  }
})();
