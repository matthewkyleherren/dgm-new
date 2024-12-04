!(function () {
  "use strict";
  var t = function (e, o) {
    return (
      (t =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
        }),
      t(e, o)
    );
  };
  var e = function () {
    return (
      (e =
        Object.assign ||
        function (t) {
          for (var e, o = 1, n = arguments.length; o < n; o++)
            for (var i in (e = arguments[o]))
              Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
          return t;
        }),
      e.apply(this, arguments)
    );
  };
  "function" == typeof SuppressedError && SuppressedError;
  var o = "messages-count",
    n = "navigate",
    i = "scroll-lock",
    a = "scroll-release",
    s = "spotim_error",
    r = "spotim_event",
    c = "sso_api_ready",
    d = "spot-im-renew-sso",
    l = "sso_code_a",
    p = "sso_login_error",
    m = "sso_login_success",
    u = "storage_update",
    h = "spot-im-share-type",
    f = "spot-im-comment-reported",
    v = "spot-im-conversation-failed",
    g = "spot-im-conversation-loaded",
    w = "ow-error-event",
    y = "spot-im-launcher-failed",
    S = "spot-im-notification-drop-down-link",
    C = "spot-im-user-notifications-click",
    _ = "ow-performance-event",
    A = "spot-im-show-more-replies-clicked",
    I = "spot-im-show-more-comments-clicked",
    E = "spot-im-sort-by-select",
    O = "spot-im-user-down-vote-click",
    b = "spot-im-user-up-vote-click",
    k = "spot-im-clicked-settings",
    R = "spot-im-login-start",
    T = "spot-im-signup-start",
    N = "spot-im-clicked-mute-user",
    P = "spot-im-user-clicked-reply",
    D = "spot-im-clicked-privacy",
    M = "spot-im-clicked-flag",
    L = "spot-im-current-user-sent-message-clicked",
    x = "logout",
    W = "startSafeframeSso",
    J = "completeSSOCallback",
    B = "resizeSafeframeWidth",
    j = "deeplink",
    F = "qsp",
    H = "conversation",
    V = (function () {
      function t(t) {
        var o, n, i;
        if (
          ((this.CONVERSATIONS_POSITION_NAME = "OpenWebWidget"),
          (this.CONVERSATIONS_NODE_ID = "spotIm-conversations-module-wrapper"),
          (this.LIGHTBOX_HEADER_CLASSNAME = "wafer-lightbox-spotIm-header"),
          (this.LIGHTBOX_AD_NODE_ID = "sda-WFPAD2"),
          (this.LIGHTBOX_AD_NODE_ID_2 = "sda-COMMENTSWFPAD"),
          (this.LIGHTBOX_AD_ID = "WFPAD2"),
          (this.LIGHTBOX_AD_ID_2 = "COMMENTSWFPAD"),
          (this.DARLA_AD_REFRESH_EVENT = "refreshAdsOnCommentActions"),
          (this.DARLA_WFPAD2_REFRESH_EVENT = "wfpad2Fetch"),
          (this.UPDATE_STORAGE_THROTTLE_MS = 500),
          (this.WINDOW_RESIZE_THROTTLE_MS = 200),
          (this.SPOT_IM_QUERY_PREFIXES = [
            "openweb_",
            "ow_",
            "ow-",
            "spot_im",
            "spot_reset_password",
            "spot_ticket",
            "spotim_",
            "tenant_config",
          ]),
          (this.NAVIGATE_ALLOWED_LIST = [
            "https://www.engadget.com",
            "https://www.yahoo.com",
            "https://autos.yahoo.com",
            "https://finance.yahoo.com",
            "https://money.yahoo.com",
            "https://news.yahoo.com",
            "https://sports.yahoo.com",
            "https://api-2-0.spot.im",
            "mailto:",
          ]),
          (this.isDebug = !1),
          (this.isStaging = !1),
          (this.devJACVersion = ""),
          (this.RRFirstAdSlotPosCount = 0),
          (this.RRSecondAdSlotPosCount = 0),
          (this.RRThirdAdSlotPosCount = 0),
          (this.RRBenjiAdPosCount = 0),
          (this.minCommentCountToSlotAds = 2),
          (this.modalJacPositionsMap = {}),
          t)
        ) {
          (this.spotImConfiguration = t),
            void 0 === this.spotImConfiguration.conversationEnabled &&
              (this.spotImConfiguration.conversationEnabled = !0),
            (this.pageContext = e(
              e(
                {},
                null === (o = window.YAHOO) || void 0 === o
                  ? void 0
                  : o.context,
              ),
              null ===
                (i =
                  null === (n = window.vzm) || void 0 === n
                    ? void 0
                    : n.getPageContext) || void 0 === i
                ? void 0
                : i.call(n),
            ));
          try {
            (this.isDebug = "1" === localStorage.getItem("SPOTIM_JAC_DEBUG")),
              "1" === localStorage.getItem("SPOTIM_JAC_STAGE") &&
                (this.isStaging = !0);
            var a = localStorage.getItem("SPOTIM_JAC_VERSION") || "";
            a && /^(\d+)\.(\d+)\.(\d+)$/.test(a) && (this.devJACVersion = a);
          } catch (t) {}
          (this.updateStorageThrottled = window.wafer.utils.throttle(
            this.updateStorage,
            this.UPDATE_STORAGE_THROTTLE_MS,
            this,
          )),
            (this.handleWindowResizeThrottled = window.wafer.utils.throttle(
              this.handleWindowResizeEvent,
              this.WINDOW_RESIZE_THROTTLE_MS,
              this,
            ));
        } else console.error("SpotImJAC: invalid configuration");
      }
      return (
        (t.prototype.getIsOpenWebParam = function () {
          var t = this;
          return window.location.search
            .slice(1)
            .split("&")
            .some(function (e) {
              return t.SPOT_IM_QUERY_PREFIXES.some(function (t) {
                return 0 === e.split("=")[0].indexOf(t);
              });
            });
        }),
        (t.prototype.injectJAC = function () {
          var t = this,
            e = this.spotImConfiguration,
            o = e.enableFocusProtection,
            n = e.jacUrl,
            i = e.disableJill;
          return new Promise(function (e, a) {
            var s = function () {
              e(),
                window.JAC.on("AD_MESSAGE", function (e) {
                  var o = e.meta;
                  try {
                    var n = o.message,
                      i = void 0 === n ? "" : n,
                      a = o.positionName,
                      s = JSON.parse(i),
                      r = s.type,
                      c = s.messages,
                      d = void 0 === c ? [] : c;
                    if ("spotim" !== String(r).toLowerCase()) return;
                    d.forEach(function (e) {
                      return t.onMessageFromJAC(a, e);
                    });
                  } catch (e) {
                    console.error(e), t.sendBeacon("spotIm-on-ad-message-fail");
                  }
                }),
                window.JAC.on("POSITION_RENDER_COMPLETE", function (t) {
                  var e = t.meta.positionName,
                    o = void 0 === e ? "" : e;
                  if (0 === o.indexOf("OpenWebWidget")) {
                    var n = document.querySelector(
                      "#jacPosition_".concat(o, " iframe"),
                    );
                    n &&
                      (n.setAttribute("title", "Conversations"),
                      n.setAttribute("tabindex", "0"));
                  }
                });
            };
            if (
              ((window.JAC_CONFIG = {
                client: {
                  focusProtection: !1,
                  positions: {},
                  trackers: { opus: !1 },
                  onReady: s,
                },
              }),
              i &&
                ((window.JAC_CONFIG.client.metrics = {}),
                (window.JAC_CONFIG.client.metrics.samplingPercent = 0)),
              o && (window.JAC_CONFIG.client.focusProtection = !0),
              window.JAC)
            )
              s();
            else {
              var r = document.createElement("script");
              (r.async = !0),
                (r.src = n),
                t.devJACVersion &&
                  (r.src = "https://jac.yahoosandbox.com/".concat(
                    t.devJACVersion,
                    "/jac.js",
                  )),
                (r.onerror = function (e) {
                  console.error(e),
                    t.sendBeacon("spotIm-jac-inject-fail", { message: e }),
                    a(e);
                }),
                document.body.appendChild(r);
            }
          });
        }),
        (t.prototype.renderJACPosition = function (t, e, o, n) {
          void 0 === e && (e = ""),
            void 0 === o && (o = ""),
            void 0 === n && (n = "");
          var i = o || document.getElementById(this.CONVERSATIONS_NODE_ID);
          if (i) {
            var a = this.getJACPositionConfig({
                spotImConfig: t,
                spotImType: H,
                targetElement: i,
                useCase: e || j,
              }),
              s = n || this.CONVERSATIONS_POSITION_NAME;
            window.JAC.createPosition(s, { client: a, service: {} }),
              window.JAC.render([s]);
          }
        }),
        (t.prototype.onLightboxOpen = function (t, e) {
          var o,
            n,
            i = document.getElementById(this.CONVERSATIONS_NODE_ID);
          if (i) {
            if (t.showAdOnLightBox && !t.enableGAMAds) {
              var a = t.useCommentWfpad
                  ? this.LIGHTBOX_AD_NODE_ID_2
                  : this.LIGHTBOX_AD_NODE_ID,
                s = t.useCommentWfpad
                  ? this.LIGHTBOX_AD_ID_2
                  : this.LIGHTBOX_AD_ID;
              if (document.getElementById(a)) {
                var r = window.adsConfig,
                  c = window.DARLA,
                  d = c.config() && c.config().positions;
                if (
                  (null === (o = null == r ? void 0 : r.clientPositionMeta) ||
                  void 0 === o
                    ? void 0
                    : o.positions.length) &&
                  (!d || !d[s])
                ) {
                  var l =
                    null === (n = null == r ? void 0 : r.clientPositionMeta) ||
                    void 0 === n
                      ? void 0
                      : n.positions.filter(function (t) {
                          return t.id === s;
                        });
                  l.length && c.addPos(l[0]);
                }
                this.refreshAds();
              }
            }
            this.renderJACPosition(t, e, i);
          }
        }),
        (t.prototype.onLightboxClose = function (t) {
          document.getElementById(this.CONVERSATIONS_NODE_ID) &&
            (this.sendRapid(
              { slk: "close-back-btn", elm: "backbtn", noContent: !0 },
              t,
            ),
            window.JAC.destroyPosition(this.CONVERSATIONS_POSITION_NAME));
        }),
        (t.prototype.handleWindowResizeEvent = function (t) {
          if (t && t.offsetWidth) {
            var e = t.offsetWidth,
              o = window.JAC._positions || {};
            if (o) {
              var n = Object.keys(o).filter(function (t) {
                return 0 === o[t].name.indexOf("OpenWebWidget");
              });
              n && n.length && this.sendMessageToJAC({ action: B, args: e }, n);
            }
          }
        }),
        (t.prototype.openMobileModalIfNeeded = function () {
          var t = document.getElementById("spot-im-wafer-lightbox");
          if (t) {
            var e = this.getIsOpenWebParam(),
              o = /(\?|&)a20_comeback_from_auth=1/gi.test(
                window.location.search,
              );
            (e || o) && t.click();
          }
        }),
        (t.prototype.getConversationStyles = function (t) {
          var e = t.doNotUseshareWidth,
            o = t.isMobile,
            n = t.isTablet,
            i = t.isHorizontalLayoutPage,
            a = t.isPrestigeLayoutPage,
            s = t.shareSectionWidth,
            r = t.contentWidth,
            c = e ? 0 : s,
            d = c
              ? "width:auto; margin-left: ".concat(c, "px;")
              : "width: 85%; left: 9%;";
          return i
            ? "#spotIm-in-jac-conversations.deeplink-desktop, #spotIm-in-jac-conversations.deeplink-desktop.news-en-US {\n                    position: relative;\n                    margin: auto;\n                    width: 830px;\n                    left: unset;\n            }"
            : o
              ? "#spotIm-in-jac-conversations.deeplink-smartphone {\n                width: calc(100% - 20px);\n                margin: 0 auto;\n            }"
              : a
                ? "#spotIm-in-jac-conversations.deeplink-desktop {\n                max-width: 646px;\n                margin: auto;\n            }"
                : n
                  ? "#spotIm-in-jac-conversations.deeplink-tablet {\n                max-width: "
                      .concat(r, "px;\n                margin-left: ")
                      .concat(c, "px;\n            }")
                  : "#spotIm-in-jac-conversations.deeplink-desktop {\n            width: calc(85% - 300px);\n            margin-left: "
                      .concat(
                        c,
                        "px;\n            }\n            #spotIm-in-jac-conversations.deeplink-desktop.adsStreamLayout {\n                width: auto;\n            }\n            #spotIm-in-jac-conversations.deeplink-desktop.news-en-US {\n                position: relative;\n                ",
                      )
                      .concat(d, "\n            }\n        ");
        }),
        (t.prototype.scrollToCommentsIfNeeded = function (t, o, n) {
          var i = t || document.getElementById(this.CONVERSATIONS_NODE_ID);
          if (i) {
            var a = this.getIsOpenWebParam(),
              s = /(\?|&)a20_comeback_from_auth=1/gi.test(
                window.location.search,
              ),
              r = function () {
                var t = document.getElementById(
                    "view-cmts-container-".concat(n),
                  ),
                  e = document.getElementById("view-cmts-cta-".concat(n));
                t && t.classList.add("showComments"),
                  e && e.classList.add("hide");
                var o = t || i,
                  a = function () {
                    return o.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  };
                a(), setTimeout(a, 1e3);
              };
            (a || s) && r();
            var c = {
                elm: "cmmt_open",
                elmt: "cmnt",
                g: n,
                itc: 1,
                pos: 0,
                sec: "content-canvas",
                slk: "comments",
                _p: 1,
              },
              d = c.sec,
              l = c.slk,
              p = c.pos,
              m = (function (t, e) {
                var o = {};
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) &&
                    e.indexOf(n) < 0 &&
                    (o[n] = t[n]);
                if (
                  null != t &&
                  "function" == typeof Object.getOwnPropertySymbols
                ) {
                  var i = 0;
                  for (n = Object.getOwnPropertySymbols(t); i < n.length; i++)
                    e.indexOf(n[i]) < 0 &&
                      Object.prototype.propertyIsEnumerable.call(t, n[i]) &&
                      (o[n[i]] = t[n[i]]);
                }
                return o;
              })(c, ["sec", "slk", "pos"]);
            o &&
              o.addEventListener("click", function (t) {
                t.preventDefault(),
                  t.stopPropagation(),
                  r(),
                  window.rapidInstance.beaconClick(
                    d,
                    l,
                    p,
                    e({}, m) || {},
                    null,
                  );
              });
          }
        }),
        (t.prototype.getJACPositionConfig = function (t) {
          var e,
            o,
            n,
            i,
            a,
            s,
            r = this,
            c = t.spotImConfig,
            d = t.targetElement,
            l = t.spotImType,
            p = t.useCase;
          if (
            (["spotImConfig", "targetElement", "spotImType", "useCase"].forEach(
              function (e) {
                if (!t[e])
                  throw new Error(
                    "getJACPositionConfig: param '".concat(e, "' is missed"),
                  );
              },
            ),
            !d.id)
          )
            throw new Error(
              "getJACPositionConfig: targetElement doesn't have required DOM id attribute",
            );
          var m = c.commentsCount,
            u = void 0 === m ? "0" : m,
            h = c.device,
            f = void 0 === h ? "" : h,
            v = c.doNotUseshareWidth,
            g = c.jacDomain,
            w = c.launcherUrl,
            y = c.leftRailWidth,
            S = void 0 === y ? "" : y,
            C = c.messages_cnt,
            _ = c.passiveReactionEnabled,
            A = c.showAdOnLightBox,
            I = void 0 === A || A,
            E = c.showRightRailAds,
            O = void 0 !== E && E,
            b = c.showViewCommentsCTA,
            k = void 0 !== b && b,
            R = c.stageSpotId,
            T = c.url,
            N = c.useCaasBodyOffsetLeft,
            P = void 0 !== N && N,
            D = c.uuid,
            M = c.spotId,
            L = "";
          this.isStaging && R && ((L = w.replace(M, R)), (M = R)),
            (L =
              w.replace("{spotId}", M) +
              (0 === w.indexOf("https://s.yimg.com/") ? "" : M));
          var x = this.pageContext,
            W = x.device,
            J = void 0 === W ? f : W,
            B = x.contentSite,
            j = void 0 === B ? "" : B,
            V = x.site,
            U = void 0 === V ? "" : V,
            q = x.lang,
            G = void 0 === q ? "" : q,
            z = x.meta,
            X = void 0 === z ? {} : z,
            Y = X.contentType,
            Q = void 0 === Y ? "story" : Y,
            Z = X.siteAttribute,
            $ = void 0 === Z ? "" : Z,
            K = "smartphone" === J,
            tt = "tablet" === J,
            et = l === H,
            ot =
              K &&
              document.getElementsByClassName(this.LIGHTBOX_HEADER_CLASSNAME) &&
              document.getElementsByClassName(
                this.LIGHTBOX_HEADER_CLASSNAME,
              )[0],
            nt = (ot && ot.offsetHeight) || 57,
            it = I ? 70 : 0,
            at = this.checkCommentCount(u),
            st = d.offsetWidth;
          if (k && !st) {
            var rt =
              null ===
                (e = document.getElementById(
                  "view-cmts-container-".concat(D),
                )) || void 0 === e
                ? void 0
                : e.offsetWidth;
            rt && (st = O && at ? rt - 320 : rt);
          }
          var ct = K && et ? window.innerWidth : st,
            dt = K ? window.innerHeight - nt - it : 330,
            lt = parseInt(S) || 0,
            pt = 640;
          if (P) {
            var mt = document.querySelector(
              "[data-wf-caas-uuid='".concat(D, "'] .caas-body"),
            );
            (lt = mt
              ? parseInt(
                  window.getComputedStyle(mt).getPropertyValue("margin-left"),
                )
              : 160),
              (pt = mt
                ? parseInt(
                    window.getComputedStyle(mt).getPropertyValue("width"),
                  )
                : pt);
          }
          var ut =
              (null ===
                (o = document.querySelector(
                  "[data-comments-id=".concat(d.id, "] .caas-share-section"),
                )) || void 0 === o
                ? void 0
                : o.clientWidth) || 0,
            ht =
              (null ===
                (n = document.querySelector(
                  "#Masterwrap .caas-share-section, #content-articles-wrapper .caas-share-section",
                )) || void 0 === n
                ? void 0
                : n.clientWidth) || 0,
            ft =
              (null ===
                (i = document.querySelector(
                  "#Masterwrap2Col .caas-share-section, #content-articles-wrapper .caas-share-section",
                )) || void 0 === i
                ? void 0
                : i.clientWidth) || 0,
            vt = P ? lt : ut || ht || ft,
            gt =
              (null ===
                (a = document.querySelector(
                  "[data-comments-id=".concat(d.id, "] .caas-content-wrapper"),
                )) || void 0 === a
                ? void 0
                : a.clientWidth) || 0,
            wt =
              (null ===
                (s = document.querySelector(
                  "#Masterwrap .caas-content-wrapper, #content-articles-wrapper .caas-content-wrapper",
                )) || void 0 === s
                ? void 0
                : s.clientWidth) || 0,
            yt = P ? pt : gt || wt,
            St = document.getElementsByClassName("adsStreamWrapper")[0]
              ? " adsStreamLayout"
              : "",
            Ct = document.querySelector("#Masterwrap2Col.horizontalLayout"),
            _t = document.querySelector("#Masterwrap .prestige-layout"),
            At = document.querySelector(
              ".caas-prestige-layout#caas-art-".concat(D),
            ),
            It = this.getConversationStyles({
              useCase: p,
              isMobile: K,
              isTablet: tt,
              isHorizontalLayoutPage: Ct,
              isPrestigeLayoutPage: _t,
              doNotUseshareWidth: v,
              shareSectionWidth: vt,
              contentWidth: yt,
              isPrestigeLayoutModalPage: At,
            }),
            Et = new URL(T);
          if ("qsp" !== p) {
            Et.searchParams.append("ref", "spot-im-jac");
          }
          var Ot = Et.toString(),
            bt = (function (t, e, o) {
              if (o || 2 === arguments.length)
                for (var n, i = 0, a = e.length; i < a; i++)
                  (!n && i in e) ||
                    (n || (n = Array.prototype.slice.call(e, 0, i)),
                    (n[i] = e[i]));
              return t.concat(n || Array.prototype.slice.call(e));
            })([], /rs="lmsid:([\w]+);?/gi.exec($) || [], !0),
            kt = bt[1],
            Rt = void 0 === kt ? "yahoo" : kt,
            Tt = "";
          try {
            Tt = localStorage.getItem("OW_STORAGE") || "";
          } catch (t) {
            (d.style.display = "none"),
              console.error("SpotIm(JAC) OW_STORAGE LS read error: ", t),
              this.sendBeacon("spotIm-ow-storage-LS-read-error");
          }
          var Nt = window.location.search
              .slice(1)
              .split("&")
              .filter(function (t) {
                return r.SPOT_IM_QUERY_PREFIXES.some(function (e) {
                  var o = t.split("="),
                    n = o[0],
                    i = o[1];
                  return (
                    ("ref" === n &&
                      0 === (void 0 === i ? "" : i).indexOf("spot-im")) ||
                    0 === n.indexOf(e)
                  );
                });
              })
              .join("&"),
            Pt =
              window.location.href.split("?")[0] + (Nt ? "?".concat(Nt) : ""),
            Dt = j || U;
          ("finance" !== U && "sports" !== U) || (Dt = U);
          var Mt = _
              ? "data-labels-section=".concat(
                  "finance" === Dt && p === F ? "stock" : Dt,
                )
              : "",
            Lt =
              "modal" !== p
                ? "data-custom-product-type=non-modal"
                : "data-custom-product-type=modal",
            xt = "engadget" === U ? "post-".concat(D) : D;
          if (l !== H) throw new Error("Unexpected spotImType: ".concat(l));
          return {
            safeFrame: { enabled: !0, features: { resize: { enabled: !0 } } },
            sandbox: { baseUrl: g },
            meta: { OpenWeb: { hostUrl: Pt, localStorage: Tt } },
            content: {
              markup: "\n                    "
                .concat(
                  "qsp" === p ? '<meta name="filter-finmb"/>' : "",
                  "\n                    <style>\n                        #fc_align {\n                            width: 100%;\n                            ",
                )
                .concat(
                  K ? "overflow-y: auto; height: 100%;" : "",
                  "\n                        }\n                        ",
                )
                .concat(
                  It,
                  '\n                    </style>\n                    <div id="spotIm-in-jac-conversations" class="',
                )
                .concat(p, "-")
                .concat(J, " ")
                .concat(Dt, "-")
                .concat(G)
                .concat(
                  St,
                  '">\n                        <script\n                            async\n                            type="text/javascript"\n                            src="',
                )
                .concat(
                  L,
                  '"\n                            data-safeframe-height="',
                )
                .concat(
                  dt,
                  '"\n                            data-safeframe-width="',
                )
                .concat(
                  ct,
                  '"\n                            data-spotim-module="spotim-launcher"\n                            data-spot-id="',
                )
                .concat(M, '"\n                            data-post-id="')
                .concat(xt, '"\n                            data-post-url="')
                .concat(
                  Ot,
                  '"\n                            data-article-tags="',
                )
                .concat(
                  Dt,
                  '"\n                            data-custom-page-structure="additive"\n                            data-is-full-screen="',
                )
                .concat(
                  K,
                  '"\n                            data-messages-count="',
                )
                .concat(
                  C,
                  '"\n                            data-custom-partner-id="',
                )
                .concat(
                  Rt,
                  '"\n                            data-custom-page-type="',
                )
                .concat(
                  Q,
                  '"\n                            data-custom-product-id="yahoo_',
                )
                .concat(Dt, '"\n                            ')
                .concat(Mt, "\n                            ")
                .concat(Lt, "\n                            ")
                .concat(
                  "qsp" === p ? "data-post-staleness-days=0" : "",
                  "\n                        >\n                        <\/script>\n                    </div>",
                ),
              size: { width: ct, height: dt },
            },
            render: { auto: !1 },
            targetElement: d.id,
          };
        }),
        (t.prototype.onMessageFromJAC = function (t, e) {
          var h = e.action,
            f = e.args;
          this.debugLog("onMessageFromJAC", {
            action: h,
            args: f,
            positionName: t,
          });
          var v = this.modalJacPositionsMap[t] || this.spotImConfiguration;
          switch (h) {
            case c:
            case d:
              this.onSSOReady(t);
              break;
            case l:
              this.startSSOFlow(f.code_a, v, t);
              break;
            case p:
              this.sendBeacon("spotIm-sso-fail");
              break;
            case m:
              this.sendBeacon("spotIm-sso-success");
          }
          switch (h) {
            case r:
              var g = f.params,
                w = f.type;
              this.onSpotImEvent(w, g, v, t);
              break;
            case u:
              var y = f.storage;
              this.updateStorageThrottled(y);
              break;
            case n:
              var S = f.url;
              this.openLinkFromSpotIm(S);
              break;
            case s:
              w = f.type;
              var C = f.error;
              this.sendBeacon("spotIm-inner-error", { type: w, error: C });
              break;
            case i:
              window.document.body.classList.add("ow-modal-opened");
              break;
            case a:
              window.document.body.classList.remove("ow-modal-opened");
              break;
            case o:
              var _ = Number(f),
                A = v.uuid;
              if (!isNaN(_)) {
                var I = document.querySelector(
                  '.reactions-count[data-id="'.concat(A, '"]'),
                );
                I &&
                  ((I.innerHTML = "".concat(_)),
                  I.setAttribute("style", "display:block"));
              }
          }
        }),
        (t.prototype.onSpotImEvent = function (t, e, o, n) {
          var i = this;
          this.debugLog("onSpotImEvent", { eventName: t, params: e });
          var a = function (t) {
              i.sendRapid(t, o);
            },
            s = e || {},
            r = s.message_id,
            c = void 0 === r ? "" : r,
            d = s.parent_id,
            l = void 0 === d ? "" : d,
            p = s.message_type,
            m = void 0 === p ? "" : p,
            u = s.type,
            x = void 0 === u ? "" : u;
          switch (t) {
            case R:
            case T:
              this.goToAuth();
              break;
            case N:
              a({ slk: "mute", elm: "cmmt_mute", outcm: "close" });
              break;
            case h:
              a({
                slk: x,
                elm: m ? "cmmt_share_" + m : "cmmt_share",
                msg_id: c,
                outcm: "open",
                parent_id: l,
              });
              break;
            case f:
              var W = e.reason;
              a({
                slk: void 0 === W ? "" : W,
                elm: "cmmt_abuse",
                outcm: "open",
                msg_id: c,
                parent_id: l,
              });
              break;
            case C:
              var J = e.targetUrl,
                B = void 0 === J ? "" : J;
              this.openLinkFromSpotIm(B),
                a({
                  sec: "cmmt_notif_bell",
                  slk: x,
                  elm: "cmmt_open",
                  itc: 0,
                  outcm: "open",
                });
              break;
            case S:
              a({ slk: "notification-open", elm: "cmmt_bell", outcm: "open" });
              break;
            case E:
              var j = e.sortedBy;
              a({
                slk: void 0 === j ? "" : j,
                elm: "cmmt_sort_btn",
                outcm: "sort",
              });
              break;
            case L:
              this.refreshAds(),
                a({ slk: m, elm: "cmmt_post", msg_id: l, outcm: "post" });
              break;
            case P:
              this.refreshAds(), a({ slk: "reply", elm: "cmmt_reply" });
              break;
            case A:
              this.refreshAds(),
                a({
                  slk: "open reply",
                  elm: "cmmt_more",
                  elmt: "showreply",
                  outcm: "show",
                  parent_id: l,
                  msg_id: c,
                  sec: "cmmts",
                });
              break;
            case M:
              a({
                slk: "abuse",
                elm: "cmmt_abuse",
                outcm: "open",
                msg_id: c,
                parent_id: l,
              });
              break;
            case D:
              a({ slk: "privacy", elm: "cmmt_username", sec: "cmmt_his" });
              break;
            case k:
              a({
                slk: "your settings",
                elm: "cmmt_username",
                sec: "cmmt_his",
              });
              break;
            case b:
              a({
                slk: "vote thumb_up",
                elm: "cmmt_vote",
                parent_id: l,
                msg_id: c,
                outcm: "rate",
              });
              break;
            case O:
              a({
                slk: "vote thumb_down",
                elm: "cmmt_vote",
                parent_id: l,
                msg_id: c,
                outcm: "rate",
              });
              break;
            case I:
              this.refreshAds(),
                this.updateUser(o),
                a({ slk: "load more", elm: "cmmt_more", outcm: "more" });
              break;
            case v:
            case y:
              this.sendBeacon("spotIm-inner-fail:".concat(t));
              break;
            case g:
              var F = o.showFooterOnLightBox,
                H = void 0 !== F && F,
                V = o.showViewCommentsCTA,
                U = o.initLauncherOnClick,
                q = void 0 !== U && U,
                G = document.getElementById("spotIm-footer-wrapper");
              if (
                (G &&
                  H &&
                  (window.wafer.base.sync(G),
                  Object.assign(G.style, {
                    display: "block",
                    top: "50px",
                    "z-index": "12",
                  })),
                V && !q)
              )
                return;
              window.rapidInstance.beaconEvent("openweb_module_view", {
                sec: "cmmts",
                subsec: "openweb",
                etrg: "show",
                outcm: "openweb_module_view",
              });
              break;
            case _:
              this.reportPerformance(e);
              break;
            case w:
              this.reportError(e);
          }
        }),
        (t.prototype.refreshAds = function () {
          var t = window.DARLA,
            e = null == t ? void 0 : t.evtSettings(this.DARLA_AD_REFRESH_EVENT),
            o =
              null == t
                ? void 0
                : t.evtSettings(this.DARLA_WFPAD2_REFRESH_EVENT);
          e && e.ps && t.event(this.DARLA_AD_REFRESH_EVENT),
            o && o.ps && t.event(this.DARLA_WFPAD2_REFRESH_EVENT);
        }),
        (t.prototype.checkCommentCount = function (t) {
          var e = /[A-Za-z]$/.test(t);
          return (
            ((t && parseFloat(t)) || 0) >= this.minCommentCountToSlotAds || e
          );
        }),
        (t.prototype.goToAuth = function () {
          var t = this.pageContext,
            e = t.lang,
            o = void 0 === e ? "en-US" : e,
            n = t.site,
            i = "fp" === n ? "homepage" : n,
            a = (window.YAHOO.i13n && window.YAHOO.i13n.SPACEID) || 2023538075,
            s =
              window.location.href +
              (window.location.search ? "&" : "?") +
              "a20_comeback_from_auth=1",
            r = "https://login.yahoo.com/?.lang="
              .concat(o, "&src=")
              .concat(i, "&pspid=")
              .concat(a, "&activity=comments&.done=")
              .concat(encodeURIComponent(s));
          window.location.href = r;
        }),
        (t.prototype.onSSOReady = function (t) {
          var e = this.pageContext,
            o = e.authed,
            n = void 0 === o ? "0" : o,
            i = e.guid;
          "1" === n
            ? this.sendMessageToJAC({ action: W, args: { userId: i } }, t)
            : this.sendMessageToJAC({ action: x }, t);
        }),
        (t.prototype.sendMessageToJAC = function (t, o) {
          var n,
            i = Math.random().toString(36).substring(2, 15) + Date.now();
          this.debugLog("sendMessageToJAC", t),
            (n = Array.isArray(o)
              ? o
              : [o || this.CONVERSATIONS_POSITION_NAME]),
            window.JAC.updateMeta(
              n,
              "openWeb",
              JSON.stringify(e({ type: "SPOTIM", id: i }, t)),
            );
        }),
        (t.prototype.startSSOFlow = function (t, e, o) {
          var n = this;
          this.debugLog("startSSOFlow", { codeA: t });
          var i = e.xhrPathPrefix,
            a = e.useStageToken,
            s = void 0 !== a && a,
            r = e.useCase,
            c = e.spotId,
            d = e.stageSpotId,
            l = "".concat(i, "?m_id=spotIm&ctrl=SpotImSSO&m_mode=json");
          fetch(l, {
            body: JSON.stringify({
              m_id: "spotIm",
              ctrl: "SpotImSSO",
              m_mode: "json",
              code_a: t,
              useStageToken: Boolean(s || this.isStaging),
              useCase: r,
              spotId: this.isStaging ? d : c,
            }),
            headers: { "Content-Type": "application/json" },
            method: "POST",
          })
            .then(function (t) {
              if (200 !== t.status) throw new Error("Request error");
              return t.json();
            })
            .then(function (t) {
              var e = t.html;
              if (!e) throw new Error("SpotIm: codeB getting error");
              n.sendMessageToJAC({ action: J, args: e }, o);
            })
            .catch(function (t) {
              n.sendBeacon("spotIm-sso-fail");
            });
        }),
        (t.prototype.updateStorage = function (t) {
          try {
            localStorage.setItem("OW_STORAGE", JSON.stringify(t));
          } catch (t) {
            this.sendBeacon("spotIm-storage-update-fail");
          }
        }),
        (t.prototype.openLinkFromSpotIm = function (t) {
          void 0 === t && (t = ""),
            this.NAVIGATE_ALLOWED_LIST.some(function (e) {
              return 0 === t.indexOf(e);
            }) && (window.location.href = t);
        }),
        (t.prototype.sendBeacon = function (t, e) {
          var o, n, i, a, s;
          void 0 === e && (e = {});
          var r = this.pageContext,
            c = [
              "browserName",
              "device",
              "lang",
              "region",
              "rid",
              "site",
            ].reduce(function (t, e) {
              return ""
                .concat(t, "&")
                .concat(e, "=")
                .concat(r[e] || "");
            }, ""),
            d = Object.keys(e).reduce(function (t, o) {
              return "".concat(t, "&").concat(o, "=").concat(e[o]);
            }, ""),
            l =
              (null ===
                (n =
                  null === (o = window.YAHOO) || void 0 === o
                    ? void 0
                    : o.errBeaconConfig) || void 0 === n
                ? void 0
                : n.beaconPath) || "_td_api/beacon/error";
          null ===
            (s =
              null ===
                (a =
                  null === (i = window.wafer) || void 0 === i
                    ? void 0
                    : i.utils) || void 0 === a
                ? void 0
                : a.fireBeacon) ||
            void 0 === s ||
            s.call(
              a,
              "/".concat(l, "?beaconName=").concat(t).concat(d).concat(c),
            );
        }),
        (t.prototype.sendRapid = function (t, e) {
          var o = t.elm,
            n = void 0 === o ? "" : o,
            i = t.elmt,
            a = void 0 === i ? "" : i,
            s = t.eventType,
            r = void 0 === s ? "click" : s,
            c = t.itc,
            d = void 0 === c ? 1 : c,
            l = t.msg_id,
            p = void 0 === l ? "" : l,
            m = t.parent_id,
            u = void 0 === m ? "" : m,
            h = t.noContent,
            f = void 0 !== h && h,
            v = t.outcm,
            g = void 0 === v ? "" : v,
            w = t.pos,
            y = void 0 === w ? 0 : w,
            S = t.sec,
            C = void 0 === S ? "cmmts" : S,
            _ = t.slk,
            A = void 0 === _ ? "" : _,
            I = t.subsec,
            E = void 0 === I ? "openweb" : I,
            O = t.tar,
            b = void 0 === O ? "" : O,
            k = t.tar_uri,
            R = void 0 === k ? "" : k,
            T = e.uuid,
            N = void 0 === T ? "" : T;
          if (window.rapidInstance) {
            var P = {
              elm: n,
              elmt: a,
              g: "",
              itc: d,
              outcm: g,
              subsec: E,
              tar: b,
              tar_uri: R,
              msg_id: p,
              parent_id: u,
            };
            (P.g = f ? "" : N),
              "view" === r
                ? window.rapidInstance.beaconLinkViews([
                    { sec: C, _links: [{ slk: A, elm: n, itc: d }] },
                  ])
                : "click" === r && window.rapidInstance.beaconClick(C, A, y, P);
          }
        }),
        (t.prototype.updateUser = function (t) {
          var e = this,
            o = this.pageContext.authed;
          if ("1" === (void 0 === o ? "0" : o)) {
            this.debugLog("updateUser", t);
            var n = t.xhrPathPrefix,
              i = t.useStageToken,
              a = void 0 !== i && i,
              s = t.useCase,
              r = t.spotId,
              c = t.stageSpotId,
              d = "".concat(n, "?m_id=spotIm&ctrl=SpotImSSO&m_mode=json");
            fetch(d, {
              body: JSON.stringify({
                action: "update",
                m_id: "spotIm",
                ctrl: "SpotImSSO",
                m_mode: "json",
                useStageToken: Boolean(a || this.isStaging),
                useCase: s,
                spotId: this.isStaging ? c : r,
              }),
              headers: { "Content-Type": "application/json" },
              method: "POST",
            })
              .then(function (t) {
                if (200 !== t.status) throw new Error("Request error");
              })
              .catch(function (t) {
                e.debugLog("SpotIm updateUser fetch error", { error: t }),
                  e.sendBeacon("spotIm-update-user-failure");
              });
          }
        }),
        (t.prototype.debugLog = function (t, e) {
          this.isDebug && console.warn("[SpotIm-JAC-Debug]: ", t, e);
        }),
        (t.prototype.reportPerformance = function (t) {
          var e = t.source,
            o = t.time,
            n = t.type;
          this.sendBeacon("spotIm-perf", { source: e, time: o, type: n });
        }),
        (t.prototype.reportError = function (t) {
          var e = t.source,
            o = t.type;
          this.sendBeacon("spotIm-ow-error", { source: e, type: o });
        }),
        t
      );
    })(),
    U = "spot-im-conversation-loaded",
    q = "spot-im-show-more-comments-clicked";
  !(function () {
    var o = (function (o) {
      function i(t) {
        var e = this;
        if (!t) return console.error("SpotImJAC: invalid configuration"), e;
        (e = o.call(this, t) || this).spotImConfiguration = t;
        try {
          e.initialize();
        } catch (t) {
          console.error(t),
            e.sendBeacon("spotIm-init-error", { message: t.message });
        }
        return e;
      }
      return (
        (function (e, o) {
          if ("function" != typeof o && null !== o)
            throw new TypeError(
              "Class extends value " +
                String(o) +
                " is not a constructor or null",
            );
          function n() {
            this.constructor = e;
          }
          t(e, o),
            (e.prototype =
              null === o
                ? Object.create(o)
                : ((n.prototype = o.prototype), new n()));
        })(i, o),
        (i.prototype.initialize = function () {
          var t = this.spotImConfiguration.device,
            e = void 0 === t ? "" : t,
            o = this.pageContext.device,
            n = "smartphone" === (void 0 === o ? e : o);
          this.initForSeamless(n);
        }),
        (i.prototype.initForSeamless = function (t) {
          var o = this,
            i = this.spotImConfiguration,
            a = i.conversationEnabled,
            s = i.initLauncherOnClick,
            r = void 0 !== s && s,
            c = i.showViewCommentsCTA,
            d = this.injectJAC(),
            l = document.getElementById(this.CONVERSATIONS_NODE_ID);
          if (!t) {
            var p = function () {
                for (var t = Object.keys(o.modalJacPositionsMap); t.length; ) {
                  var e = t.pop() || "";
                  window.JAC.destroyPosition(e);
                }
                o.modalJacPositionsMap = {};
              },
              m = function (t) {
                var e = t.detail,
                  n = e.elem,
                  i = e.config,
                  s = e.isMain;
                a &&
                  d.then(function () {
                    return o.initComments(n, i, s);
                  });
              };
            if (c && !r) {
              var u = n(),
                h = window.YAHOO.context.meta,
                f = h.commentsCount,
                v = void 0 === f ? "0" : f,
                g = h.title,
                w = h.url,
                y = h.uuid,
                S = e(e({ commentsCount: v }, u), {
                  title: encodeURIComponent(g),
                  url: w,
                  uuid: y,
                });
              m({ detail: { config: e({}, S), elem: l, isMain: !0 } });
            }
            window.addEventListener("initSpotImComments", m),
              window.addEventListener("viewerContentChanged", p),
              window.addEventListener("viewerClosed", p),
              window.addEventListener("resize", function () {
                return o.handleWindowResizeThrottled(l);
              });
          }
        }),
        (i.prototype.initComments = function (t, e, o) {
          var n = o
              ? this.CONVERSATIONS_POSITION_NAME
              : "".concat(this.CONVERSATIONS_POSITION_NAME, "-").concat(e.uuid),
            i = e.initLauncherOnClick,
            a = void 0 !== i && i,
            s = e.showRightRailAds,
            r = void 0 !== s && s,
            c = e.uuid;
          if (!a) {
            var d = document.querySelector(
              "[data-comments-id=".concat(
                t.id,
                "] .caas-share-buttons .caas-comment",
              ),
            );
            this.scrollToCommentsIfNeeded(t, d, c);
          }
          var l = t;
          r &&
            (this.addSpotImRightRailMarkup(t, e),
            (l = document.getElementById("".concat(t.id)))),
            this.renderJACPosition(e, "seamless", l, n),
            (this.modalJacPositionsMap[n] = e);
        }),
        (i.prototype.goToAuth = function () {
          var t = this.pageContext,
            e = t.lang,
            o = void 0 === e ? "en-US" : e,
            n = t.site,
            i = (window.YAHOO.i13n && window.YAHOO.i13n.SPACEID) || 2023538075,
            a =
              window.location.href +
              (window.location.search ? "&" : "?") +
              "a20_comeback_from_auth=1",
            s = "https://oidc.engadget.com/login/?src="
              .concat(n, "&.lang=")
              .concat(o, "&pspid=")
              .concat(i, "&activity=comments&dest=")
              .concat(encodeURIComponent(a));
          window.location.href = s;
        }),
        (i.prototype.getConversationStyles = function (t) {
          var e = t.doNotUseshareWidth,
            o = t.shareSectionWidth,
            n = e ? 0 : o;
          return "#spotIm-in-jac-conversations.seamless-desktop {\n                width: 85%;\n                position: relative;\n                margin-left: "
            .concat(
              n,
              "px;\n            }\n            #spotIm-in-jac-conversations.seamless-desktop.engadget-en-US {\n                width: auto;\n                position: relative;\n                margin-left: ",
            )
            .concat(n, "px;\n            }");
        }),
        (i.prototype.onSpotImEvent = function (t, e, n, i) {
          var a = n.adPositions,
            s = void 0 === a ? "" : a,
            r = n.rightRailAdClasses,
            c = void 0 === r ? "" : r,
            d = n.showRightRailAds,
            l = void 0 !== d && d,
            p = n.uuid,
            m = n.wfDarlaConfig,
            u = void 0 === m ? {} : m;
          switch (t) {
            case U:
              l &&
                this.initRightRailAds({
                  adPositions: s,
                  rightRailAdClasses: c,
                  uuid: p,
                  wfDarlaConfig: u,
                });
              break;
            case q:
              l && this.loadRightRailAdSlot(n);
          }
          o.prototype.onSpotImEvent.call(this, t, e, n, i);
        }),
        (i.prototype.addSpotImRightRailMarkup = function (t, e) {
          var o = e.adPositions,
            n = void 0 === o ? "" : o,
            i = e.commentsCount,
            a = void 0 === i ? "0" : i,
            s = e.rightRailAdClasses,
            r = void 0 === s ? "" : s,
            c = e.uuid,
            d = e.wfDarlaConfig,
            l = void 0 === d ? {} : d,
            p = this.checkCommentCount(a),
            m = n,
            u = {
              adPositions: (m = m.split(";"))[0] || "COMMENTSLREC,COMMENTSMON",
              rightRailAdClasses: r,
              uuid: c,
              wfDarlaConfig: l,
            },
            h = t.parentElement,
            f = t.cloneNode(!0),
            v = document.createElement("div");
          v.className = "module-spotim-rr comments-block D(n)";
          var g = document.createElement("div");
          g.className = "W(100%) D(f)";
          var w = document.createElement("main");
          (w.className = "spotim-main-section W($mainColWidth) Mend(20px)"),
            w.appendChild(f);
          var y = document.createElement("aside");
          y.className = "spotim-aside-section W(300px) D(f) Fld(c)";
          var S = document.createElement("div");
          if (((S.className = "spotim-non-sticky-sda"), p)) {
            S.style.marginTop = "240px";
            var C = this.getDarlaMarkup(u, this.RRFirstAdSlotPosCount++);
            S.appendChild(C);
          }
          y.appendChild(S);
          var _ = document.createElement("div");
          (_.className = "spotim-sticky-sda-wrapper Fxg(1) wafer-sticky"),
            _.setAttribute("data-wf-sticky-boundary", "spotim-aside-section"),
            _.setAttribute("data-wf-sticky-offset", "165px   10px"),
            _.setAttribute("data-wf-sticky-target", ".spotim-sticky-sda");
          var A = document.createElement("div");
          (A.className = "spotim-sticky-sda"),
            _.appendChild(A),
            y.appendChild(_),
            g.appendChild(w),
            g.appendChild(y),
            v.appendChild(g),
            h.replaceChild(v, t),
            window.wafer.base.sync(h);
        }),
        (i.prototype.getDarlaMarkup = function (t, e, o) {
          void 0 === o && (o = !1);
          var n = t.adPositions,
            i = void 0 === n ? "" : n,
            a = t.rightRailAdClasses,
            s = void 0 === a ? "" : a,
            r = t.uuid,
            c = t.wfDarlaConfig,
            d = void 0 === c ? {} : c,
            l = this.pageContext.bucket,
            p = d.offsetX,
            m = d.offsetY,
            u = i.split(","),
            h = d.siteAttribute || "",
            f = -1 !== h.indexOf("geminifed") ? h : h.concat(" geminifed=1"),
            v = {
              addAutoEvent: d.addAutoEvent || !0,
              addCleanContainer: d.addCleanContainer || !0,
              bucket: l,
              device: "desktop",
              meta: {},
              pos: "",
              siteAttribute: f,
              spaceid: d.spaceid,
              uuid: r,
            };
          v.pos = u.reduce(function (t, o) {
            var n = e ? "".concat(o, "-").concat(e) : o;
            return (
              d.meta[o] && (v.meta[n] = d.meta[o]),
              t ? "".concat(t, ",").concat(n) : n
            );
          }, "");
          var g = document.createElement("div");
          return (
            (g.className = "".concat(s, " wafer-darla")),
            g.setAttribute(
              "data-wf-darla-config",
              "".concat(JSON.stringify(v)),
            ),
            o
              ? (g.setAttribute("data-wf-trigger", "viewport"),
                g.setAttribute("data-wf-margin", "".concat(m, " ").concat(p)))
              : g.setAttribute("data-wf-trigger", "onLoad"),
            u.forEach(function (t) {
              var o = e ? "".concat(t, "-").concat(e) : t,
                n = document.createElement("div");
              n.setAttribute(
                "id",
                "wafer-darla-clean-".concat(r, "-").concat(o),
              );
              var i = document.createElement("div");
              i.setAttribute("id", "wafer-darla-".concat(r, "-").concat(o)),
                n.appendChild(i),
                g.appendChild(n);
            }),
            g
          );
        }),
        (i.prototype.initRightRailAds = function (t) {
          var e = this;
          void 0 === t && (t = {});
          var o = t.adPositions,
            n = t.rightRailAdClasses,
            i = t.uuid,
            a = t.wfDarlaConfig,
            s = document.querySelector(
              "#view-cmts-container-".concat(i, " .spotim-non-sticky-sda"),
            );
          s &&
            setTimeout(function () {
              var t = document.querySelector(
                "#view-cmts-container-".concat(
                  i,
                  " .spotim-sticky-sda-wrapper",
                ),
              );
              if (((null == t ? void 0 : t.offsetHeight) || 0) > 1100) {
                var r = o.split(";")[1] || "COMMENTSLREC2,COMMENTSMON2",
                  c = {
                    offsetTop: 500,
                    rightRailAdClasses: n,
                    uuid: i,
                    wfDarlaConfig: a,
                  };
                e.fetch2ndRRAdSlot(r, c),
                  s.classList.add("da-spotim-loaded"),
                  window.wafer.base.sync(s);
              }
            }, 2e3);
        }),
        (i.prototype.fetch2ndRRAdSlot = function (t, e) {
          if (t) {
            var o = e.rightRailAdClasses,
              n = e.offsetTop,
              i = e.uuid,
              a = e.wfDarlaConfig,
              s = document.querySelector(
                "#view-cmts-container-".concat(i, " .spotim-non-sticky-sda"),
              ),
              r = this.getDarlaMarkup(
                {
                  adPositions: t,
                  rightRailAdClasses: o.concat(" da-2"),
                  uuid: i,
                  wfDarlaConfig: a,
                },
                this.RRSecondAdSlotPosCount++,
              );
            (r.style.marginTop = "".concat(n, "px")),
              s.appendChild(r),
              window.wafer.base.sync(s);
          }
        }),
        (i.prototype.loadRightRailAdSlot = function (t) {
          var e = this,
            o = t.adPositions,
            n = void 0 === o ? "" : o,
            i = t.rightRailAdClasses,
            a = void 0 === i ? "" : i,
            s = t.uuid,
            r = void 0 === s ? "" : s,
            c = t.wfDarlaConfig,
            d = void 0 === c ? {} : c,
            l = document.querySelector(
              "#view-cmts-container-".concat(r, " .spotim-sticky-sda"),
            );
          if (!l || !l.classList.contains("da-spotim-complete")) {
            var p =
              (document.querySelector(
                "#view-cmts-container-".concat(
                  r,
                  " .spotim-sticky-sda-wrapper",
                ),
              ).offsetHeight || 0) - 115;
            p = p > 500 ? p : 500;
            var m = function (t, e) {
                var o = "";
                if (t > 605) o = e;
                else if (t > 305) {
                  o = e.split(",")[0];
                }
                return o;
              },
              u = n.split(";"),
              h = u[1] || "COMMENTSLREC2,COMMENTSMON2",
              f = u[2] || "COMMENTSLREC3,COMMENTSMON3";
            setTimeout(function () {
              if (
                !document.querySelector(
                  "#view-cmts-container-".concat(
                    r,
                    " .spotim-non-sticky-sda.da-spotim-loaded",
                  ),
                )
              ) {
                var t = document.querySelector(
                    "#view-cmts-container-".concat(
                      r,
                      " .spotim-sticky-sda-wrapper",
                    ),
                  ),
                  o = null == t ? void 0 : t.offsetHeight,
                  n = m(o, h);
                if (!n) return;
                var i = {
                  rightRailAdClasses: a,
                  offsetTop: p,
                  uuid: r,
                  wfDarlaConfig: d,
                };
                e.fetch2ndRRAdSlot(n, i);
              }
              var s = document.querySelector(
                  "#view-cmts-container-".concat(
                    r,
                    " .spotim-sticky-sda-wrapper",
                  ),
                ),
                c = null == s ? void 0 : s.offsetHeight,
                u = m(c, f);
              if (u) {
                var v = e.getDarlaMarkup(
                  {
                    adPositions: u,
                    rightRailAdClasses: a,
                    uuid: r,
                    wfDarlaConfig: d,
                  },
                  e.RRThirdAdSlotPosCount++,
                  !0,
                );
                l.appendChild(v),
                  (document.querySelector(
                    "#view-cmts-container-".concat(
                      r,
                      " .spotim-non-sticky-sda .da-2",
                    ),
                  ).style.marginBottom = "500px"),
                  window.wafer.base.sync(l),
                  l.classList.add("da-spotim-complete");
              } else l.classList.add("da-spotim-complete");
            }, 1e3);
          }
        }),
        i
      );
    })(V);
    function n() {
      var t = document.getElementById("spotim-config");
      return (
        (t && window.wafer.utils.getConfigFromJSONScriptNode(t).config) ||
        window.wafer.base.state.spotIm
      );
    }
    "undefined" != typeof process && (window.__SpotImJAC = o),
      window.wafer &&
        window.wafer.ready(function () {
          var t = n();
          new o(t);
        }, window);
  })();
})();
