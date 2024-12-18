!(function () {
  "use strict";
  var t = function () {
    return (
      (t =
        Object.assign ||
        function (t) {
          for (var e, n = 1, o = arguments.length; n < o; n++)
            for (var i in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t;
        }),
      t.apply(this, arguments)
    );
  };
  "function" == typeof SuppressedError && SuppressedError,
    (function (e) {
      var n = e.YAHOO,
        o = e.wafer,
        i = n.context,
        a = i.feature,
        c = void 0 === a ? "" : a;
      if (-1 !== c.indexOf("cluster")) {
        var r,
          s = i.device,
          d = i.site,
          m = -1 !== c.indexOf("clusterLoadSpotImOnClick"),
          u = -1 !== c.indexOf("viewCommentsCTA"),
          l = -1 !== c.indexOf("sportsV2"),
          f = "engadget" === d,
          v =
            -1 !== c.indexOf("viewCommentsCTAv2") ||
            -1 !== c.indexOf("newsRedesign") ||
            l ||
            f,
          p = l || f,
          w = "spotIm-conversations-module-wrapper",
          y = {},
          g = {};
        !(function () {
          var t = document.getElementById("spotim-config"),
            n = (t && o.utils.getConfigFromJSONScriptNode(t)) || {};
          if (null == n ? void 0 : n.enabled) {
            r = n;
            var i = function () {
              var t = document.querySelector(
                '[data-wf-caas-type="renderedArticle"]',
              );
              if (t) {
                var e = t.getElementsByClassName("wafer-caas-data")[0];
                O(
                  {
                    elem: t,
                    meta: { data: e && o.utils.getConfigFromJSONScriptNode(e) },
                  },
                  !0,
                );
              }
              o.on("caas:article:init", b),
                o.on("caas:article:pre:inview", O),
                o.on("caas:article:fetch", I),
                o.on("caas:link:clicked", E);
            };
            o
              ? o.ready(function () {
                  i();
                }, e)
              : document.body.addEventListener("wafer:ready", function () {
                  i();
                }),
              (function () {
                if (!u || !m) return;
                e.document.body.addEventListener("click", function (t) {
                  var e,
                    n,
                    o = t.target;
                  if (
                    null === (n = (e = o.classList).contains) || void 0 === n
                      ? void 0
                      : n.call(e, "view-cmnts-btn")
                  ) {
                    var i = o.getAttribute("data-uuid");
                    if (i) N({ meta: { data: { uuid: i } } }, "ON_CLICK");
                  }
                });
              })();
          }
        })();
      }
      function C(t) {
        var e = t.meta.data,
          n = e.uuid;
        if (n && !g[n]) {
          g[n] = e;
          var o = t.elem.getAttribute("data-comments-id");
          o && (g[n].commentsNodeId = o);
        }
      }
      function b(t) {
        -1 === c.indexOf("enableCommentsCountInViewCommentsCta") && S(t), C(t);
      }
      function O(t, n) {
        void 0 === n && (n = !1),
          (n ||
            "renderedArticle" !== t.elem.getAttribute("data-wf-caas-type")) &&
            (C(t),
            m
              ? (function (t) {
                  var n,
                    o = t.meta.data,
                    i = o.uuid,
                    a =
                      null === (n = g[i]) || void 0 === n
                        ? void 0
                        : n.commentsNodeId,
                    c = document.querySelector(
                      "[data-comments-id=".concat(
                        a,
                        "] .caas-share-buttons .caas-comment",
                      ),
                    );
                  if (!document.getElementById(a) || !c) return;
                  var r = a === w,
                    s = /(\?|&)(spot_im|spotim_)/gi.test(e.location.search),
                    d = /(\?|&)a20_comeback_from_auth=1/gi.test(
                      e.location.search,
                    );
                  r &&
                    (s || d) &&
                    (h(i),
                    setTimeout(function () {
                      N(t, "ON_CLICK");
                    }, 1e3));
                  var m = (function (t) {
                      var e,
                        n = {},
                        o = t.getAttribute("data-ylk") || "",
                        i = [];
                      return (
                        o.split(";").forEach(function (t) {
                          (i = t.split(":")),
                            void 0 !== (e = i[1]) && (n[i[0]] = e);
                        }),
                        n
                      );
                    })(c),
                    u = m.sec,
                    l = void 0 === u ? "content-canvas" : u,
                    f = m.slk,
                    v = m.pos,
                    p = void 0 === v ? 0 : v,
                    y = (function (t, e) {
                      var n = {};
                      for (var o in t)
                        Object.prototype.hasOwnProperty.call(t, o) &&
                          e.indexOf(o) < 0 &&
                          (n[o] = t[o]);
                      if (
                        null != t &&
                        "function" == typeof Object.getOwnPropertySymbols
                      ) {
                        var i = 0;
                        for (
                          o = Object.getOwnPropertySymbols(t);
                          i < o.length;
                          i++
                        )
                          e.indexOf(o[i]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(
                              t,
                              o[i],
                            ) &&
                            (n[o[i]] = t[o[i]]);
                      }
                      return n;
                    })(m, ["sec", "slk", "pos"]);
                  c.addEventListener("click", function (n) {
                    n.preventDefault(),
                      n.stopPropagation(),
                      e.rapidInstance.beaconClick(l, f, p, y),
                      h(i),
                      N(t, "ON_CLICK");
                  });
                })(t)
              : N(t, "ON_VIEW"));
      }
      function I(t) {
        -1 === c.indexOf("enableCommentsCountInViewCommentsCta") && S(t),
          C(t),
          (function (t) {
            if (!u) return;
            var e = t.meta.data,
              n = e.hasXraySideRail,
              o = e.uuid,
              i = document.querySelector(
                "#view-cmts-container-".concat(o, " .view-cmnts-btn"),
              );
            if (!i) return;
            var a = n ? "183px" : "106px";
            Object.assign(i.style, { display: "inline-block", marginLeft: a });
          })(t);
      }
      function h(t) {
        var e,
          n = null === (e = g[t]) || void 0 === e ? void 0 : e.commentsNodeId,
          o = n && document.getElementById(n),
          i = document.getElementById("view-cmts-container-".concat(t)),
          a = document.getElementById("view-cmts-cta-".concat(t));
        i && i.classList.add("showComments"), a && a.classList.add("hide");
        var c = i || o,
          r = function () {
            return c.scrollIntoView({ behavior: "smooth", block: "center" });
          };
        r(), setTimeout(r, 1e3);
      }
      function E(t) {
        if (v) {
          C(t);
          var n = t.meta.data,
            o = n.type,
            i = n.uuid;
          if (("view-cmnts-cta" === o || "comment" === o) && i) {
            var a = document.getElementById("view-cmts-container-".concat(i));
            a && a.classList.add("showComments"),
              m
                ? N(t, "ON_CLICK")
                : e.rapidInstance.beaconEvent("openweb_module_view", {
                    etrg: "show",
                    outcm: "openweb_module_view",
                    sec: "cmmts",
                    subsec: "openweb",
                  });
          }
        }
      }
      function N(n, o) {
        if (e.YAHOO) {
          var i = n.meta.data,
            a = i.uuid,
            c = void 0;
          if ("smartphone" === s) {
            if (!i.commentsAllowed) {
              if (!(c = document.getElementById("spot-im-wafer-lightbox")))
                return;
              c.style.display = "none";
            }
          } else if (
            (v
              ? ((c = document.getElementById("view-cmts-cta-".concat(a))),
                p &&
                  !c &&
                  (c = document.getElementById(
                    "view-cmts-container-".concat(a),
                  )))
              : u &&
                (c = document.getElementById("view-cmts-container-".concat(a))),
            !c)
          )
            return;
          if (y[a]) return;
          if ("ON_VIEW" === o && g[a].commentsNodeId === w) return;
          !(function (n) {
            if (!n) return;
            var o = g[n] || {},
              i = o.title || document.title,
              a = o.finalUrl || o.url || e.location.href,
              c = o.commentsCount || "",
              s = o.adMeta || {},
              d = s.site_attribute,
              m = s.spaceid,
              u = o.commentsNodeId || w,
              l = document.getElementById(u);
            if (!l) return;
            var f = r.config,
              v = void 0 === f ? {} : f,
              p = v.wfDarlaConfig,
              C = void 0 === p ? {} : p,
              b = t(t({}, v), {
                commentsCount: c,
                wfDarlaConfig: t(t({}, C), { siteAttribute: d, spaceid: m }),
              }),
              O = t(t({}, b), {
                title: encodeURIComponent(i),
                url: a,
                uuid: n,
              }),
              I = { detail: { config: t({}, O), elem: l } };
            dispatchEvent(new CustomEvent("initSpotImComments", I)),
              (y[n] = { commentsNode: l, commentsNodeId: u });
          })(a);
        }
      }
      function S(t) {
        var e = t.meta.data,
          n = e.commentsCount,
          o = void 0 === n ? "" : n;
        if ("smartphone" !== s && o) {
          var i,
            a = e.uuid;
          if (
            (v
              ? (i = document.querySelector(
                  "#view-cmts-cta-".concat(a, " .view-cmts-cta"),
                ))
              : u &&
                (i = document.querySelector(
                  "#view-cmts-container-".concat(a, " .view-cmnts-btn"),
                )),
            i && !i.classList.contains("showCmtCount"))
          ) {
            var c = document.createElement("span");
            (c.innerText = " (".concat(o, ")")),
              i.appendChild(c),
              i.classList.add("showCmtCount");
          }
        }
      }
    })(window);
})();
//# sourceMappingURL=clusterComments.js.map
