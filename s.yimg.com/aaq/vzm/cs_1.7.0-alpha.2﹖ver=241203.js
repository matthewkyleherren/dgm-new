!(function () {
  "use strict";
  var c = window,
    t = c.document,
    s = [1, 9, 10],
    n = "*null";
  function e(t, s, n, e) {
    if (!t || !s || "function" != typeof c[t]) return e();
    try {
      c[t](s, n, function (c, t) {
        e(c, t);
      });
    } catch (c) {
      e();
    }
  }
  (c.COMSCORE = {
    _version: "1.7.0-alpha.2",
    _lastTcString: "",
    beacon: function (r) {
      e("__uspapi", "getUSPData", 1, function (i, p) {
        e("__tcfapi", "addEventListener", 2, function (e, f) {
          if (
            f &&
            e &&
            ("tcloaded" === e.eventStatus ||
              "useractioncomplete" === e.eventStatus) &&
            (!c.COMSCORE._lastTcString ||
              !e ||
              e.tcString !== c.COMSCORE._lastTcString)
          ) {
            var a = JSON.parse(JSON.stringify(r || {})),
              o = (e && e.gdprApplies) || !1,
              _ = (c.YAHOO && c.YAHOO.comscore) || {},
              d = c.rapidInstance && c.rapidInstance.getRapidAttribute;
            if (
              ((a.c1 = a.c1 || "2"),
              (a.c2 = a.c2 || _.c2 || "7241469"),
              (a.c5 = a.c5 || (d && d("spaceid"))),
              (a.c7 = a.c7 || t.location.href),
              (a.c8 = a.c8 || t.title || ""),
              (a.c9 = a.c9 || t.referrer || ""),
              (a.c14 = a.c14 || _.c14 || "-1"),
              (a.gdpr = o ? 1 : 0),
              (a.gdpr_consent = ""),
              o)
            ) {
              var u = s.every((c) => !0 === e.purpose.consents[c]),
                g = !0 === e.vendor.consents[77];
              a.cs_ucfr = u && g ? 1 : u && g ? "" : 0;
              var O = e.tcString || "";
              (c.COMSCORE._lastTcString = O), (a.gdpr_consent = O);
            } else
              p && i && "string" == typeof i.uspString
                ? (a.cs_ucfr = "Y" === i.uspString[2] ? 0 : 1)
                : (a.cs_ucfr = 0);
            var S = a.cs_fpid || _.cs_fpid;
            if (S)
              if (a.cs_ucfr) {
                var l = a.cs_fpdm || _.cs_fpdm;
                l && l !== n
                  ? ((a.cs_fpdm = l),
                    (a.cs_fpdt = a.cs_fpdt || _.cs_fpdt || "01"))
                  : ((a.cs_fpdm = n), (a.cs_fpdt = n)),
                  S
                    ? ((a.cs_fpid = S),
                      (a.cs_fpit = a.cs_fpit || _.cs_fpit || "c"))
                    : ((a.cs_fpid = n), (a.cs_fpit = n));
              } else
                (a.cs_fpdm = n),
                  (a.cs_fpdt = n),
                  (a.cs_fpid = n),
                  (a.cs_fpit = n);
            (a.ns_c = "UTF-8"), (a.ns__t = new Date().getTime());
            var v = [];
            for (var m in a)
              if (a.hasOwnProperty(m)) {
                var C = a[m],
                  h = typeof C;
                "string" === h || "number" === h
                  ? v.push(m + "=" + encodeURIComponent(C))
                  : "options" === m &&
                    C &&
                    "string" == typeof C.url_append &&
                    v.push(C.url_append);
              }
            new Image().src =
              "https://sb.scorecardresearch.com/p?" + v.join("&");
          }
        });
      });
    },
    purge: function () {
      for (var t = c._comscore || []; t.length > 0; )
        c.COMSCORE.beacon(t.shift());
    },
  }),
    c.COMSCORE.purge();
})();
