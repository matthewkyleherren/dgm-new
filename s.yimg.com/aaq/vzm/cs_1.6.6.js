!(function () {
  "use strict";
  var c = window,
    t = c.document,
    e = "*null",
    s = [1, 9, 10];
  function n(t, e, s, n) {
    if (!t || !e || "function" != typeof c[t]) return n();
    try {
      c[t](e, s, function (c, t) {
        n(c, t);
      });
    } catch (c) {
      n();
    }
  }
  (c.COMSCORE = {
    _version: "1.6.6",
    beacon: function (r) {
      n("__uspapi", "getDoNotSell", 1, function (p, f) {
        n("__tcfapi", "getTCData", 2, function (n, o) {
          var i = JSON.parse(JSON.stringify(r || {})),
            _ = (n && n.gdprApplies) || !1,
            a = (c.YAHOO && c.YAHOO.comscore) || {},
            d = c.rapidInstance && c.rapidInstance.getRapidAttribute;
          if (
            ((i.c1 = i.c1 || "2"),
            (i.c2 = i.c2 || a.c2 || "7241469"),
            (i.c5 = i.c5 || (d && d("spaceid"))),
            (i.c7 = i.c7 || t.location.href),
            (i.c8 = i.c8 || t.title || ""),
            (i.c9 = i.c9 || t.referrer || ""),
            (i.c14 = i.c14 || a.c14 || "-1"),
            (i.gdpr = _ ? 1 : 0),
            (i.gdpr_consent = ""),
            _)
          ) {
            if (o && n) {
              var u = s.every((c) => !0 === n.purpose.consents[c]),
                l = !0 === n.vendor.consents[77];
              (i.cs_ucfr = u && l ? 1 : u && l ? "" : 0),
                (i.gdpr_consent = n.tcString || "");
            }
          } else
            f && p && "boolean" == typeof p.doNotSell
              ? (i.cs_ucfr = p.doNotSell ? 0 : 1)
              : (i.cs_ucfr = 0);
          var g = i.cs_fpid || a.cs_fpid;
          if (g)
            if (i.cs_ucfr) {
              var m = i.cs_fpdm || a.cs_fpdm;
              m && m !== e
                ? ((i.cs_fpdm = m),
                  (i.cs_fpdt = i.cs_fpdt || a.cs_fpdt || "01"))
                : ((i.cs_fpdm = e), (i.cs_fpdt = e)),
                g
                  ? ((i.cs_fpid = g),
                    (i.cs_fpit = i.cs_fpit || a.cs_fpit || "c"))
                  : ((i.cs_fpid = e), (i.cs_fpit = e));
            } else
              (i.cs_fpdm = e),
                (i.cs_fpdt = e),
                (i.cs_fpid = e),
                (i.cs_fpit = e);
          (i.ns_c = "UTF-8"), (i.ns__t = new Date().getTime());
          var O = [];
          for (var v in i)
            if (i.hasOwnProperty(v)) {
              var h = i[v],
                S = typeof h;
              "string" === S || "number" === S
                ? O.push(v + "=" + encodeURIComponent(h))
                : "options" === v &&
                  h &&
                  "string" == typeof h.url_append &&
                  O.push(h.url_append);
            }
          new Image().src = "https://sb.scorecardresearch.com/p?" + O.join("&");
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
