"use strict";
function _createForOfIteratorHelper(e, t) {
  var n =
    ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
  if (!n) {
    if (
      Array.isArray(e) ||
      (n = _unsupportedIterableToArray(e)) ||
      (t && e && "number" == typeof e.length)
    ) {
      n && (e = n);
      var o = 0,
        i = function () {};
      return {
        s: i,
        n: function () {
          return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
        },
        e: function (e) {
          throw e;
        },
        f: i,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
  }
  var a,
    r = !0,
    s = !1;
  return {
    s: function () {
      n = n.call(e);
    },
    n: function () {
      var e = n.next();
      return (r = e.done), e;
    },
    e: function (e) {
      (s = !0), (a = e);
    },
    f: function () {
      try {
        r || null == n.return || n.return();
      } finally {
        if (s) throw a;
      }
    },
  };
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ("string" == typeof e) return _arrayLikeToArray(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return (
      "Object" === n && e.constructor && (n = e.constructor.name),
      "Map" === n || "Set" === n
        ? Array.from(e)
        : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? _arrayLikeToArray(e, t)
          : void 0
    );
  }
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
  return o;
}
!(function (e) {
  var t = window,
    n = document,
    o = "engadget-share";
  function i(e, t, o) {
    var i = e.getElementsByClassName("vdb-player")[0],
      a = e.getAttribute("data-video-id") || "",
      r = i.getAttribute("data-exp-name") || "",
      s = i.getAttribute("data-cont-id") || "";
    if (a.length <= 0) console.warn("No video metadata found.");
    else if ("oath" === t)
      !(function (e, t, n, o, i, a) {
        var r,
          s,
          d,
          l,
          c,
          u = {
            mediaItems: [{ mimetype: "media/sapi", id: n }],
            autoplay: a,
            region:
              null === (r = window.YAHOO) ||
              void 0 === r ||
              null === (r = r.context) ||
              void 0 === r
                ? void 0
                : r.region,
            lang:
              null === (s = window.YAHOO) ||
              void 0 === s ||
              null === (s = s.context) ||
              void 0 === s
                ? void 0
                : s.lang,
            site:
              null === (d = window.YAHOO) ||
              void 0 === d ||
              null === (d = d.context) ||
              void 0 === d
                ? void 0
                : d.site,
            expBucket:
              null === (l = window.YAHOO) ||
              void 0 === l ||
              null === (l = l.context) ||
              void 0 === l
                ? void 0
                : l.bucket,
            pageSpaceId:
              null === (c = window.YAHOO) ||
              void 0 === c ||
              null === (c = c.i13n) ||
              void 0 === c
                ? void 0
                : c.SPACEID,
            comscoreC4: "US Engadget",
            expName: i,
          },
          p = new OATH.VideoPlatform.VideoPlayer(u),
          m = document.createElement("div");
        (m.id = o),
          (m.className = "unifiedplayer"),
          m.appendChild(document.createTextNode("")),
          null != e &&
            e.getAttribute("data-video-height") &&
            m.setAttribute(
              "style",
              "height:".concat(e.getAttribute("data-video-height")),
            ),
          e.appendChild(m),
          (t.style.display = "none"),
          p.render("#".concat(o)),
          a && p.play();
      })(e, i, a, s, r, "true" === o);
    else if ("youtube" === t)
      !(function (e, t, n) {
        var o;
        if (
          "smartphone" ===
          (null === (o = window) ||
          void 0 === o ||
          null === (o = o.YAHOO) ||
          void 0 === o ||
          null === (o = o.context) ||
          void 0 === o
            ? void 0
            : o.device)
        )
          window.onYouTubePlayerAPIReady = function () {
            new YT.Player(n, {
              width: e.offsetWidth,
              height: e.offsetHeight,
              videoId: n,
              playerVars: { autoplay: 1, playsinline: 1 },
              events: {
                onReady: function (e) {
                  e.target.mute(), e.target.playVideo();
                },
              },
            }),
              (t.style.display = "none");
          };
        else {
          var i = document.createElement("iframe");
          i.setAttribute("allowfullscreen", ""),
            i.setAttribute("frameborder", "0"),
            i.setAttribute(
              "src",
              "https://www.youtube.com/embed/".concat(
                n,
                "?rel=0&showinfo=0&autoplay=1&mute=1&enablejsapi=1",
              ),
            ),
            i.setAttribute("height", e.offsetHeight),
            i.setAttribute("width", e.offsetWidth),
            (e.innerHTML = ""),
            e.appendChild(i),
            (t.style.display = "none");
        }
      })(e, i, a);
    else {
      var d = o ? "576b1dbfe4b0c3d3818a1a7b" : "57e1a162a01b4d79f28c433a";
      e.classList.add("vdb_" + d + "564f3144ff690c0a7c285e51");
      var l = n.createElement("script");
      (l.src =
        "//delivery.vidible.tv/jsonp/pid=" +
        d +
        "/vid=" +
        a +
        "/564f3144ff690c0a7c285e51.js"),
        e.appendChild(l);
      var c = i.getElementsByClassName("video-player-element")[0],
        u = e.getElementsByClassName("video-loader")[0];
      new (window.MutationObserver ||
        window.WebKitMutationObserver ||
        window.MozMutationObserver)(function (t) {
        var n,
          o = _createForOfIteratorHelper(t);
        try {
          for (o.s(); !(n = o.n()).done; ) {
            if ("style" === n.value.attributeName) {
              var a = e.getAttribute("style");
              a && -1 !== a.indexOf("width") && (i.style.display = "none");
            }
          }
        } catch (e) {
          o.e(e);
        } finally {
          o.f();
        }
      }).observe(e, { attributes: !0 }),
        (c.style.display = "none"),
        (u.style.display = "block");
    }
  }
  function a(e, t) {
    document.addEventListener(
      "DOMContentLoaded",
      function () {
        !(function (e, t) {
          var n = new Request("https://s.yimg.com/kw/assets/adchoices.png", {
            method: "HEAD",
            mode: "no-cors",
          });
          fetch(n)
            .then(function (e) {
              return e;
            })
            .then(function (t) {
              e && e(t);
            })
            .catch(function (e) {
              t && t(e);
            });
        })(e, t);
      },
      !1,
    );
  }
  function r() {
    document
      .querySelectorAll('.o-safeframe[data-src="skimlinks"]')
      .forEach(function (e) {
        (e.style.height = "0px"), (e.parentElement.style.display = "none");
      });
  }
  function s(e) {
    var t, n, o;
    if ("https://m.skimresources.com" === e.origin)
      try {
        var i = JSON.parse(e.data),
          a = i.docHeight,
          r = i.nameKeywords,
          s =
            i.template +
            encodeURIComponent(r)
              .replace(/\(/g, "%28")
              .replace(/\)/g, "%29")
              .replace(/\*/g, "%2A"),
          d = (function (e, t) {
            var n = document.querySelector(e),
              o = document.querySelector(t),
              i = n.getAttribute("data-pagetype") || "";
            return Object.assign(
              {},
              {
                safeFrameContainer: n,
                safeTitleFrameContainer: o,
                pageType: i,
              },
            );
          })(
            '[data-compositeid="'.concat(s, '"]'),
            '[data-titleframeid="'.concat(s, '"]'),
          );
        switch (a > 0) {
          case !0:
            !(function (e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 3,
                o = e.safeFrameContainer;
              o && (o.style.height = "".concat(t + n, "px"));
            })(d, a, 0);
            break;
          case !1:
            (n = (t = d).safeFrameContainer),
              (o = t.safeTitleFrameContainer),
              n &&
                ((n.style.display = "none"),
                (n.parentElement.style.display = "none")),
              o &&
                "0" === o.getAttribute("data-sponsored-cnt") &&
                (o.style.display = "none");
        }
      } catch (e) {
        console.warn(e);
      }
  }
  function d(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      o =
        arguments.length > 3 && void 0 !== arguments[3]
          ? arguments[3]
          : "cmmts";
    rapidInstance &&
      rapidInstance.beaconClick &&
      rapidInstance.beaconClick(o, e, t, n);
  }
  var l = window.wafer,
    c = l.base,
    u = l.utils,
    p = u.elementInView,
    m = u.debounce;
  function f() {
    var e = document
        .querySelector("body")
        .classList.contains("display-push-promos"),
      t = document.getElementsByClassName("notification-upsell-push"),
      n = document.getElementById("group-bell-icon");
    if (e && t && t.length > 0 && n) {
      var o = t.item(0);
      p(o, {}, c.viewport)
        ? n.classList.add("start")
        : n.classList.remove("start");
    }
  }
  function v() {
    var e =
      document
        .getElementById("upsellPushNotify")
        .getAttribute("data-subscription-topic") || "";
    t.subscriptionHelperInstance &&
      t.subscriptionHelperInstance.pushNotificationSubscribe({
        targetType: "topic",
        topic: e,
      });
  }
  if (
    (n.addEventListener("DOMContentLoaded", function () {
      window.wafer.on("lightbox:open", function (e) {
        var t,
          o,
          a,
          r,
          s,
          d = e.elem,
          l = void 0 === d ? {} : d,
          c =
            (null == l ||
            null === (t = l.childNodes[0]) ||
            void 0 === t ||
            null === (t = t.childNodes[0]) ||
            void 0 === t
              ? void 0
              : t.childNodes[0]) ||
            (null == l ||
            null === (o = l.childNodes[1]) ||
            void 0 === o ||
            null === (o = o.childNodes[3]) ||
            void 0 === o
              ? void 0
              : o.childNodes[0]),
          u =
            null === (a = window) ||
            void 0 === a ||
            null === (a = a.YAHOO) ||
            void 0 === a ||
            null === (a = a.context) ||
            void 0 === a
              ? void 0
              : a.device,
          p = null == c ? void 0 : c.getAttribute("id");
        if (null != p && p.indexOf("-comments")) {
          var m,
            f =
              null === (m = JSON.parse(c.getAttribute("data-ad-config"))) ||
              void 0 === m
                ? void 0
                : m.mn,
            v = n.createElement("div");
          v.setAttribute("id", "LB-BTF-".concat(p)),
            v.setAttribute(
              "style",
              "display:flex;justify-content:center;padding-top:30px;padding-bottom:10px;background-color:#efefef;",
            ),
            c.insertBefore(v, c.firstChild),
            JAC &&
              JAC.createPosition("LB-BTF", {
                service: { alias: f, sizes: "smartphone" === u ? "MM" : "LB" },
                client: {
                  safeFrame: {
                    features: {
                      expandPush: { enabled: !0 },
                      resize: { enabled: !0 },
                    },
                  },
                  targetElement: "LB-BTF-".concat(p),
                  render: { requireViewable: !0 },
                },
              }),
            0 === firedSpotimLoadEvent &&
              (rapidInstance &&
                rapidInstance.beaconEvent &&
                rapidInstance.beaconEvent(
                  "openweb_module_view",
                  {
                    g: postID,
                    subsec: "openweb",
                    etrg: "show",
                    _E: "openweb_module_view",
                    sec: "cmmts",
                  },
                  "openweb_module_view",
                ),
              (firedSpotimLoadEvent = 1));
        }
        var y =
          null == l ||
          null === (r = l.childNodes[0]) ||
          void 0 === r ||
          null === (r = r.childNodes[0]) ||
          void 0 === r
            ? void 0
            : r.childNodes[1];
        (null == y ||
        null === (s = y.getAttribute("data-video-id")) ||
        void 0 === s
          ? void 0
          : s.length) > 0 && i(y, "oath", "true");
      });
    }),
    n.addEventListener("DOMContentLoaded", function () {
      window.wafer.on("lightbox:close", function (e) {
        var t,
          o = _createForOfIteratorHelper(
            n.getElementsByClassName("featured-video"),
          );
        try {
          for (o.s(); !(t = o.n()).done; ) {
            var i = t.value,
              a = null == i ? void 0 : i.getAttribute("data-cont-id"),
              r = n.getElementById(a);
            "unifiedplayer" ===
              (null == r ? void 0 : r.getAttribute("class")) && r.remove();
          }
        } catch (e) {
          o.e(e);
        } finally {
          o.f();
        }
      });
    }),
    "smartphone" ===
      (null === (e = window) ||
      void 0 === e ||
      null === (e = e.YAHOO) ||
      void 0 === e ||
      null === (e = e.context) ||
      void 0 === e
        ? void 0
        : e.device) &&
      ("undefined" == typeof YT || void 0 === YT.Player))
  ) {
    var y = document.createElement("script");
    y.src = "https://www.youtube.com/iframe_api";
    var g = document.getElementsByTagName("script")[0];
    g.parentNode.insertBefore(y, g);
  }
  n.addEventListener("DOMContentLoaded", function () {
    var e = n.getElementsByName("post_id") && n.getElementsByName("post_id")[0];
    e &&
      e.content &&
      (function (e) {
        var t = "spot-im-sort-by-drop-down",
          o = "spot-im-clicked-like-thumbs-up",
          i = "spot-im-clicked-like-thumbs-down",
          a = "spot-im-current-user-sent-message",
          r = "spot-im-recirculation-left-clicked",
          s = "spot-im-recirculation-right-clicked",
          l = "spot-im-recirculation-item-clicked",
          c = "spot-im-show-more-comments-clicked";
        n.addEventListener(t, function () {
          d("cmmt_sort_btn", 0, {
            elm: "cmmt_post",
            itc: 1,
            g: e,
            outcm: "sort",
            subsec: "openweb",
          });
        }),
          n.addEventListener(a, function () {
            d("post", 0, {
              elm: "cmmt_post",
              itc: 1,
              g: e,
              outcm: "post",
              subsec: "openweb",
            });
          }),
          n.addEventListener(o, function () {
            d("vote thumb_up", 0, {
              elm: "cmmt_vote",
              itc: 1,
              g: e,
              outcm: "rate",
              subsec: "openweb",
            });
          }),
          n.addEventListener(i, function () {
            d("vote thumb_down", 0, {
              elm: "cmmt_vote",
              itc: 1,
              g: e,
              outcm: "rate",
              subsec: "openweb",
            });
          }),
          n.addEventListener(a, function () {
            d("post", 0, { elm: "cmmt_post", itc: 1, g: e, subsec: "openweb" });
          }),
          n.addEventListener(c, function () {
            d("load more", 0, {
              elm: "cmmt_more",
              itc: 1,
              g: e,
              outcm: "more",
              subsec: "openweb",
            });
          }),
          n.addEventListener(l, function () {
            d(
              "deeplink",
              0,
              {
                elm: "cmmt_body",
                itc: 1,
                g: e,
                outcm: "clicked",
                subsec: "openweb",
              },
              "pitc",
            );
          }),
          n.addEventListener(r, function () {
            d(
              "prev",
              0,
              {
                elm: "cmmt_arrow",
                itc: 1,
                g: e,
                outcm: "clicked",
                subsec: "openweb",
              },
              "pitc",
            );
          }),
          n.addEventListener(s, function () {
            d(
              "next",
              0,
              {
                elm: "cmmt_arrow",
                itc: 1,
                g: e,
                outcm: "clicked",
                subsec: "openweb",
              },
              "pitc",
            );
          });
      })(e.content);
  }),
    n.addEventListener("DOMContentLoaded", function () {
      if (!document.querySelector('script[id="assistjs"]')) {
        var e = document.createElement("script");
        (e.src = "https://s.yimg.com/pv/static/assistjs/desktop-v1.0.70.js"),
          (e.id = "assistjs"),
          (e.onload = function () {
            window.YAHOO.SA.init({
              elems: {
                sbForm: "search",
                sbInput: "search-terms",
                sbClear: "sb-clr",
              },
              plugins: {
                saTray: { parent: "search-results" },
                saPCActn: { css: "search-result" },
                saFr: { def: "engadget", fr: "engadget-s" },
                anykey: { disable: !0 },
              },
              highlight: { boldTag: "" },
              saBE: {
                params: { appid: '"'.concat(window.location.hostname, '"') },
                host: "//search.engadget.com",
                base: "/sugg/gossip/gossip-us-engadget/",
              },
            });
          }),
          document.body.appendChild(e);
      }
    }),
    n.addEventListener("DOMContentLoaded", function () {
      var e = document.getElementById("upsellPushNotify");
      e && e.addEventListener("click", v),
        window.addEventListener("scroll", m(f, 100));
    }),
    n.addEventListener("DOMContentLoaded", function () {
      var e;
      null === (e = n.getElementById("searchCancelBtn")) ||
        void 0 === e ||
        e.addEventListener("click", function (e) {
          n.getElementById("searchBtn").focus();
        });
      var i = n.getElementsByClassName("collapse-button"),
        a = n.getElementsByClassName("below-collapse");
      if (i.length > 0)
        for (var r = 0; r < a.length; r++) a[r].classList.add("hide");
      n.addEventListener("click", function (e) {
        var n = e.target,
          i = n.classList.contains(o)
            ? n
            : (function (e, t) {
                if (e.closest) return e.closest("." + t);
                for (; e.parentElement && !e.classList.contains(t); )
                  e = e.parentElement;
                return e;
              })(n, o),
          r = i && i.getAttribute("data-share");
        if (
          (r && t.open(r, "engadget_share", "width=670, height=430"),
          n.classList.contains("collapse-button"))
        ) {
          n.classList.add("active"),
            n.parentNode.classList.contains("engadget-readmore-collapse") &&
              n.parentNode.classList.add("active");
          for (var s = 0; s < a.length; s++) a[s].classList.remove("hide");
        }
      });
    }),
    n.addEventListener("DOMContentLoaded", function () {
      var e = document.body.style,
        t = 0;
      document.addEventListener("click", function (n) {
        n.target &&
          n.target.dataset &&
          "hamburger" === n.target.dataset.drawerTarget &&
          ("open-left" === n.target.dataset.wfDrawerState
            ? ((t = window.pageYOffset),
              (e.top = -t + "px"),
              (e.position = "fixed"),
              (e.left = "0"),
              (e.overflow = "hidden"))
            : "closed" === n.target.dataset.wfDrawerState &&
              ((e.top = ""),
              (e.position = ""),
              (e.left = ""),
              (e.overflow = ""),
              window.scrollTo(0, t)));
      });
    }),
    n.addEventListener("DOMContentLoaded", function () {
      for (
        var e = /^\w(?:\.?[\w%+-]+)*@\w(?:[\w-]*\.)+?[a-z]{2,}$/i,
          t = document.querySelectorAll("form.newsletter-form"),
          n = function () {
            var n = t[o],
              i = n.querySelector('[type="email"]'),
              a = n.querySelector('[name="epsilonRef"]'),
              r = n.querySelector("p.email-err"),
              s = n.querySelector("p.opts-err");
            n.addEventListener("submit", function (t) {
              t.preventDefault();
              var o = i && i.value,
                d = a && a.value,
                l = e.test(o),
                c = {},
                u = n.querySelectorAll("input[type=checkbox]"),
                p = [].filter.call(u, function (e) {
                  return (c[e.name] = e.checked), e.checked;
                });
              if (!l)
                return (
                  (s.style.display = "none"),
                  (r.style.display = "block"),
                  (i.style.borderColor = "red"),
                  void i.setAttribute("aria-invalid", "true")
                );
              if (p.length < 1)
                return (
                  (r.style.display = "none"), void (s.style.display = "block")
                );
              if (
                ((r.style.display = "none"),
                (s.style.display = "none"),
                i.setAttribute("aria-invalid", "false"),
                "undefined" != typeof grecaptcha)
              )
                grecaptcha.enterprise
                  .execute("6LeenUQlAAAAADouFUOHg_I1S_DxXt4g1r7PuvS9", {
                    action: "submit",
                  })
                  .then(function (e) {
                    var t = new XMLHttpRequest();
                    t.open("POST", "/newsletter/?src=".concat(d)),
                      t.setRequestHeader("Content-type", "application/json"),
                      (t.onreadystatechange = function () {
                        4 === t.readyState &&
                          (200 === t.status
                            ? window.location.assign("/thanks/")
                            : window.location.assign("/500/"));
                      }),
                      t.send(
                        JSON.stringify({ email: o, alerts: c, googletoken: e }),
                      );
                  });
              else {
                var m = new XMLHttpRequest();
                m.open("POST", "/newsletter/?src=".concat(d)),
                  m.setRequestHeader("Content-type", "application/json"),
                  (m.onreadystatechange = function () {
                    4 === m.readyState &&
                      (200 === m.status
                        ? window.location.assign("/thanks/")
                        : window.location.assign("/500/"));
                  }),
                  m.send(JSON.stringify({ email: o, alerts: c }));
              }
            }),
              i.addEventListener("input", function (e) {
                e.preventDefault(),
                  (r.style.display = "none"),
                  (s.style.display = "none"),
                  i.setAttribute("aria-invalid", "false");
              });
          },
          o = 0;
        o < t.length;
        o++
      )
        n();
    }),
    n.addEventListener("DOMContentLoaded", function () {
      var e,
        t = _createForOfIteratorHelper(
          document.getElementsByClassName("video-card"),
        );
      try {
        var n = function () {
          var t = e.value,
            n = t.getAttribute("data-video-type"),
            o = t.getAttribute("data-autoplay"),
            a = t.getAttribute("data-video-cont-render") || "";
          "true" === o || "true" === a
            ? i(t, n, o)
            : t
                .getElementsByClassName("vdb-player")[0]
                .addEventListener("click", function (e) {
                  "none" !==
                    t.getElementsByClassName("video-player-element")[0].style
                      .display && i(t, n, "true");
                });
        };
        for (t.s(); !(e = t.n()).done; ) n();
      } catch (e) {
        t.e(e);
      } finally {
        t.f();
      }
    }),
    n.addEventListener("DOMContentLoaded", function () {
      a(function () {}, r), window.addEventListener("message", s, !1);
    }),
    n.addEventListener("DOMContentLoaded", function () {
      for (
        var e = document.getElementsByClassName("faq-question"),
          t = function () {
            var t = e[n],
              o = t.nextElementSibling;
            t.addEventListener("click", function () {
              t.classList.toggle("faq-question-active"),
                "block" === o.style.display
                  ? (o.style.display = "none")
                  : (o.style.display = "block");
            });
          },
          n = 0;
        n < e.length;
        n++
      )
        t();
    });
})();
