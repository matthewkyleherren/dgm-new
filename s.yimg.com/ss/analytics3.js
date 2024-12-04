(function (Te) {
  typeof define == "function" && define.amd ? define(Te) : Te();
})(function () {
  "use strict";
  function Te(L) {
    if (L.__esModule) return L;
    var D = L.default;
    if (typeof D == "function") {
      var K = function oe() {
        return this instanceof oe
          ? Reflect.construct(D, arguments, this.constructor)
          : D.apply(this, arguments);
      };
      K.prototype = D.prototype;
    } else K = {};
    return (
      Object.defineProperty(K, "__esModule", { value: !0 }),
      Object.keys(L).forEach(function (oe) {
        var ie = Object.getOwnPropertyDescriptor(L, oe);
        Object.defineProperty(
          K,
          oe,
          ie.get
            ? ie
            : {
                enumerable: !0,
                get: function () {
                  return L[oe];
                },
              },
        );
      }),
      K
    );
  }
  var Ie = {},
    Fe = {};
  const nt = Te(
    Object.freeze(
      Object.defineProperty(
        { __proto__: null, default: {} },
        Symbol.toStringTag,
        { value: "Module" },
      ),
    ),
  );
  (function (L) {
    Object.defineProperty(L, "__esModule", { value: !0 }),
      (L.generateRandomBytes =
        L.psuedoRandomBytes =
        L.base64UrlEncode =
          void 0);
    let D;
    if (typeof window > "u")
      try {
        D = nt;
      } catch {}
    else D = window.crypto;
    const K = (Z) =>
      btoa(String.fromCharCode.apply(null, Array.from(Z)))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
    L.base64UrlEncode = K;
    const oe = (Z) => {
      const ee = new Uint8Array(Z);
      for (let ce = 0; ce < Z; ce++) ee[ce] = Math.floor(Math.random() * 256);
      return ee;
    };
    L.psuedoRandomBytes = oe;
    const ie = (Z) => {
      if (typeof D < "u" && D.getRandomValues) {
        const ee = new Uint8Array(Z);
        return D.getRandomValues(ee), ee;
      } else return (0, L.psuedoRandomBytes)(Z);
    };
    L.generateRandomBytes = ie;
  })(Fe),
    (function (L) {
      Object.defineProperty(L, "__esModule", { value: !0 }), (L.vuid = void 0);
      const D = Fe,
        K = () => {
          const ie = (0, D.generateRandomBytes)(16);
          return (0, D.base64UrlEncode)(ie);
        };
      (L.vuid = K), (L.default = L.vuid);
    })(Ie);
  const Ge = 100,
    $e = 25;
  let Oe = !1;
  function it(L) {
    let D = 0;
    const K = setInterval(() => {
      window.YahooCJS
        ? (clearInterval(K), L())
        : (D++,
          D === $e
            ? (clearInterval(K),
              console.log(`window.YahooCJS failed to load after ${$e} retries`))
            : console.log(
                `window.YahooCJS is not defined, retrying in ${Ge}ms...`,
              ));
    }, Ge);
  }
  function rt(L) {
    const D = () => xe({ gtag: L, state: "update" });
    window.YahooCJS
      ? xe({ gtag: L, state: "default" })
      : ((Oe = !0),
        console.time("GA consent"),
        xe({
          gtag: L,
          state: "default",
          logError: !1,
          additionalArgs: { wait_for_update: 500 },
        }),
        it(D)),
      document.addEventListener("cjsUserConsentUpdated", D);
  }
  function xe({ gtag: L, state: D, logError: K = !0, additionalArgs: oe }) {
    var Y, S;
    let ie = "denied",
      Z = "denied",
      ee = "denied",
      ce = "denied";
    try {
      const { consentTypes: P, errorMessage: V } =
        ((Y = window.YahooCJS) == null ? void 0 : Y.getConsentInfo()) ?? {};
      if (V !== null) throw new Error(V);
      const { jurisdiction: X } =
        ((S = window.YahooCJS) == null ? void 0 : S.getJurisdictionInfo()) ??
        {};
      X === "US" &&
        ((ce = "granted"),
        [
          "SELL_PERSONAL_INFORMATION",
          "FIRST_PARTY_ADS",
          "OATH_AS_THIRD_PARTY",
        ].forEach((n) => {
          (P == null ? void 0 : P.get(n)) === !1
            ? ((ie = "denied"), (Z = "denied"), (ee = "denied"))
            : ((ie = "granted"), (Z = "granted"), (ee = "granted"));
        }));
    } catch (P) {
      K && console.error("GA consent error", P);
    }
    L("consent", D, {
      ...oe,
      ad_storage: ie,
      ad_user_data: Z,
      ad_personalization: ee,
      analytics_storage: ce,
    }),
      Oe && D === "update" && (console.timeEnd("GA consent"), (Oe = !1));
  }
  window.dataLayer = window.dataLayer || [];
  let Ke = !1;
  function ye(...L) {
    var D;
    Ke && ((D = window.dataLayer) == null || D.push(arguments));
  }
  const at = { groups: "yahoo_analytics" },
    qe = { sent_to: "yahoo_analytics" };
  function ot(L, D = {}) {
    if (
      L &&
      ((Ke = !0),
      rt(ye),
      ye("js", new Date()),
      ye("config", `${L}`, { ...at, ...D }),
      !document.getElementById("ga-script"))
    ) {
      const K = document.createElement("script");
      (K.id = "ga-script"),
        (K.async = !0),
        (K.src = `https://www.googletagmanager.com/gtag/js?id=${L}`),
        document.head.appendChild(K);
    }
  }
  function Me(L) {
    ye("set", { ...qe, ...L });
  }
  function st(L, D) {
    ye("event", L, { ...qe, ...D });
  }
  (function () {
    function L(Y) {
      var S = {
          A1S: { log: !0, key: "_a1s" },
          WV: { log: !0, key: "_wv" },
          _ga: { log: !0, key: "_ga" },
          OTH: {
            log: !0,
            key: "_li",
            filter: function () {
              return "1";
            },
          },
        },
        P = {};
      this.getCookieByName = function (re) {
        return P[re];
      };
      var V = null;
      try {
        V = document.cookie;
      } catch (re) {
        console.warn("Rapid Was Prevented From Accessing Cookies:", re);
      }
      if (V && /[^=]+=[^=;]?(?:; [^=]+=[^=]?)?/.test(V))
        for (
          var X = V.split(/;\s/g),
            n = null,
            C = null,
            x = null,
            te = 0,
            Ae = X.length;
          te < Ae;
          te++
        ) {
          if (((x = X[te].match(/([^=]+)=/i)), x instanceof Array))
            try {
              (n = decodeURIComponent(x[1])),
                (C = X[te].substring(x[1].length + 1));
            } catch (re) {
              console.error(re);
            }
          else (n = decodeURIComponent(X[te])), (C = n);
          var se = S[n];
          if (se && !P[n]) {
            if (
              ((C = C.replace(/(^["']|["']$)/g, "")),
              se.filter && typeof se.filter == "function")
            )
              try {
                C = se.filter(C);
              } catch {
                console.error(
                  n + " Has an Invalid Value; Cookie is not captured",
                ),
                  (C = null);
              }
            C &&
              ((C = decodeURIComponent(C)),
              P[n] || ((P[n] = C), Y && se.log && Y.set(se.key || n, C)));
          }
        }
    }
    (typeof window.YAHOO > "u" || !window.YAHOO) && (window.YAHOO = {});
    const D = window.YAHOO;
    D.i13n = D.i13n || {};
    function K(Y) {
      if (Y) {
        var S = Y.split(":");
        if (S[0] === "1")
          return {
            version: S[0],
            creation_time: S[1],
            app_spaceid: S[2],
            os: S[3],
            bundleid: S[4],
            app_version: S[5],
            effective_deviceid: S[6],
            deviceid_type: S[7],
            limit_ad_tracking: S[8],
          };
        if (S[0] === "2")
          return {
            version: S[0],
            creation_time: S[1],
            app_spaceid: S[2],
            os: S[3],
            bundleid: S[4],
            app_version: S[5],
            effective_deviceid: S[6],
            deviceid_type: S[7],
            limit_ad_tracking: S[8],
            tracking_auth_status: S[9],
          };
      }
      return {};
    }
    function oe() {
      return document.domain.split(".").slice(-2).join(".") === "yahoo.com";
    }
    (D.i13n.hasTAS = function () {
      var Y = new L(),
        S = Y.getCookieByName("WV"),
        P = K(S),
        V = P.tracking_auth_status || -1;
      return V === "3";
    }),
      (D.i13n.EventTypes = (function () {
        var Y = "richview",
          S = "contentmodification";
        function P(X, n, C) {
          (this.yqlid = X), (this.eventName = n), (this.spaceidPrefix = C);
        }
        P.prototype = {
          getYQLID: function () {
            return this.yqlid;
          },
          getEventName: function () {
            return this.eventName;
          },
        };
        var V = {
          pageview: new P("pv", "pageview", ""),
          simple: new P("lv", "event", "P"),
          linkview: new P("lv", "linkview", "P"),
          richview: new P(Y, Y, "R"),
          contentmodification: new P(Y, S, "R"),
          dwell: new P("lv", "dwell", "D"),
        };
        return {
          getEventByName: function (X) {
            return V[X];
          },
        };
      })());
    var ie = "3.60.0",
      Z = "ANALYTICS-EVERGREEN-PROD",
      ee = [];
    (D.i13n.__RAPID_INSTANCES__ = ee),
      (D.i13n.__RAPID_INFO__ = { version: ie, comboName: Z });
    function ce(Y) {
      var S = "interaction",
        P = "view",
        V = "impression",
        X = "event";
      try {
        window.addEventListener("message", function (n) {
          try {
            var C = n.data,
              x = C === void 0 ? {} : C,
              te = x.type,
              Ae = te === void 0 ? null : te,
              se = x.data,
              re = se === void 0 ? {} : se,
              fe = re.eventName,
              _e = fe === void 0 ? null : fe,
              Ee = re.impressionData,
              we = Ee === void 0 ? null : Ee,
              ke = re.interactionData,
              Re = ke === void 0 ? null : ke,
              Ce = re.pageData,
              be = Ce === void 0 ? null : Ce;
            switch (Ae) {
              case X:
                Y.beaconEvent(_e, be, _e);
                break;
              case V:
                Y.beaconLinkViews(we, 2, { pp: be });
                break;
              case S:
                Y.beaconClick(null, null, null, Re, _e, null, { pp: be });
                break;
              case P:
                Y.beaconPageview(be);
                break;
              default:
                break;
            }
          } catch {}
        });
      } catch {
        console.error("Issue finding Rapid Instance");
      }
    }
    D.i13n.Rapid = function (Y) {
      var S = {};
      (typeof console > "u" || typeof console.log > "u") &&
        (console = { log: function () {} }),
        typeof console.error > "u" && (console.error = console.log),
        typeof console.warn > "u" && (console.warn = console.log);
      function P() {}
      P.prototype = {
        ser: function () {
          return n.ser(this.map);
        },
        set: function (e, i) {
          var r = i && n.norm(i);
          r == null && (r = ""),
            r !== null && n.isStr(r) && (r = r.replace(/\\/g, "\\\\")),
            (e = e.replace(/[^a-zA-Z0-9-_\u0080-\uFFFF]/g, "_")),
            n.isValidPair(e, r) && ((this.map[n.norm(e)] = r), this.count++);
        },
        get: function (e) {
          return this.map[e];
        },
        getAll: function () {
          return this.map;
        },
        absorb: function (e) {
          if (!(!e || !n.isObj(e)))
            for (var i in e) n.hasOwn(e, i) && this.set(i, e[i]);
        },
        absorb_filter: function (e, i) {
          if (!(!e || !n.isObj(e)))
            for (var r in e)
              (i && !i.call(null, r)) || (n.hasOwn(e, r) && this.set(r, e[r]));
        },
        getSize: function () {
          return this.count;
        },
      };
      function V(e) {
        (this.map = {}), (this.count = 0), e && this.absorb(e);
      }
      function X() {
        (this.map = {}), (this.count = 0);
      }
      (V.prototype = new P()),
        (V.prototype.constructor = P),
        (X.prototype = new P()),
        (X.prototype.constructor = P),
        (V.makeFromPP = function (e) {
          var i = new V();
          return e && i.absorb(e.getAll()), i;
        });
      var n = Ze(Y),
        C = new je(window),
        x = new V();
      S.keys = x;
      var te = C.getModules(),
        Ae = { none: 0, gzip: 1, lzw: 2, deflate: 3 };
      function se(e, i) {
        var r = new X(),
          s = n.getAttribute(e, "data-ylk");
        try {
          let f = JSON.parse(s);
          if (f && typeof f == "object") r.absorb(f);
          else throw new error("Invalid JSON - fall back to string parsing");
        } catch {
          if (s === null || s.length === 0) return r;
          for (
            var d = s.split(n.ylk_pair_delim), u = 0, m = d.length;
            u < m;
            u++
          ) {
            var _ = d[u].split(n.ylk_kv_delim);
            if (_.length === 2) {
              var A = _[0],
                l = _[1];
              A === null ||
                A === "" ||
                l === null ||
                ((A !== "_p" || i) && r.set(A, l));
            }
          }
        }
        return r;
      }
      function re(e) {
        var i = Object.keys(e),
          r = i.map(function (s) {
            return s + ":" + e[s];
          });
        return r.join(";");
      }
      function fe(e, i) {
        if (!e) return null;
        i === null && (i = !1);
        var r = new X(),
          s = n.getAttribute(e, n.data_action_outcome);
        return s && r.set("outcm", s), r.absorb(se(e, i).getAll()), r;
      }
      function _e(e) {
        var r;
        if (e.ncid) x.set("ncid", e.ncid);
        else {
          const s = new URLSearchParams(window.location.search).get("ncid");
          s && x.set("ncid", s);
        }
        const i = x.get("ncid");
        i &&
          typeof ((r = e == null ? void 0 : e.keys) == null ? void 0 : r.set) ==
            "function" &&
          e.keys.set("ncid", i);
      }
      function Ee(e) {
        return /^[A-Za-z0-9_-]{22}$/.test(e)
          ? !0
          : (e && console.error(`Found invalid vuid: ${e}`), !1);
      }
      function we(e) {
        return e.split(",").filter(Ee);
      }
      function ke() {
        const e = we(x.get("_vuidList") || "");
        for (; e.length < 5; ) e.push(Ie.vuid());
        x.set("_vuidList", e.join(",")),
          a == null || a.keys.set("_vuidList", x.get("_vuidList"));
      }
      function Re() {
        let e;
        const i = we(x.get("_vuidList") || "");
        i.length > 0
          ? ((e = i.shift()), x.set("_vuidList", i.join(",")))
          : (e = Ie.vuid()),
          ke(),
          x.set("_vuid", e),
          a == null || a.keys.set("_vuid", e),
          Me({ _vuid: e });
      }
      function Ce(e, i, r) {
        return e < i ? i : e > r ? r : e;
      }
      function be(e, i) {
        _e(e);
        let r = [];
        e._vuidList && (r = we(e._vuidList)),
          e._vuid && Ee(e._vuid) && r.unshift(e._vuid),
          x.set("_vuidList", r.join(",")),
          Re(),
          x.set("A_sid", D.i13n.A_SID || n.rand()),
          x.set("_w", n.rmProto(i)),
          e.keys ? x.absorb(e.keys) : Y.keys && x.absorb(Y.keys);
      }
      function Ue(e) {
        D.i13n;
        var i = D.i13n.TEST_ID || e.test_id,
          r = e.location || (document.location && document.location.href) || "";
        be(e, r), i && (i = n.norm("" + i));
        var s = 300,
          d = 700,
          u = 1e4,
          m = "ganon.yahoo.com",
          _ = e.override || {},
          A = "geo.yahoo.com",
          l = "udc.yahoo.com";
        oe() || ((A = "3p-" + A), (l = "3p-" + l));
        var f = {
          override: _,
          version: ie,
          comboName: Z,
          keys: x,
          referrer: e.referrer,
          getReferrer: function () {
            return n.norm(
              n.clref(
                typeof this.referrer < "u" ? this.referrer : document.referrer,
              ),
            );
          },
          spaceid: n.norm(_.spaceid || D.i13n.SPACEID || e.spaceid),
          yrid: n.norm(e.yrid || ""),
          oo: e.oo ? "1" : "0",
          nol: e.nol ? "1" : "0",
          yql_enabled: e.yql_enabled !== !1,
          fing: e.use_fing == 1,
          linktrack_attribut: e.lt_attr || "text",
          tracked_mods: e.tracked_mods || [],
          tracked_mods_viewability: e.tracked_mods_viewability || [],
          viewability: e.viewability !== !1,
          useIntersectionObserver:
            window.IntersectionObserver !== void 0 &&
            e.useIntersectionObserver !== !1,
          intersectionObserverThreshold: e.intersectionObserverThreshold || 0.5,
          regionDwellThreshold: e.regionDwellThreshold || 0.75,
          intersectingTime: e.intersectingTime || 300,
          intersectingDelay: e.intersectingDelay || 500,
          viewability_time: e.viewability_time || 300,
          viewability_px: e.viewability_px || 50,
          lt_attr: e.lt_attr || "text",
          client_only: typeof e.client_only > "u" ? !0 : !!e.client_only,
          text_link_len: e.text_link_len || -1,
          test_id: i,
          yql_host: e.yql_host || l,
          yql_path: e.yql_path || "/v2/public/yql",
          geo_host: e.geo_host || A,
          anonymized: e.anonymized === !0,
          click_timeout: e.click_timeout || u,
          compr_timeout: e.compr_timeout || d,
          compr_on: e.compr_on !== !1,
          compr_type: e.compr_type || "deflate",
          webworker_file: D.i13n.WEBWORKER_FILE || e.webworker_file || null,
          nofollow_classname: e.nofollow_class || "rapidnofollow",
          no_click_listen: e.rapid_noclick_resp || "rapid-noclick-resp",
          nonanchor_track_class:
            e.nonanchor_track_class || "rapid-nonanchor-lt",
          track_input: e.track_input || "rapid-track-input",
          click_id_class: e.click_id_class || "rapid-with-clickid",
          anc_pos_attr: "data-rapid_p",
          anc_v9y_attr: "data-v9y",
          deb: e.debug === !0,
          ldbg: e.ldbg > 0 ? !0 : r.indexOf("yhldebug=1") > 0,
          addmod_timeout: e.addmodules_timeout || 300,
          ult_token_capture:
            typeof e.ult_token_capture == "boolean" ? e.ult_token_capture : !1,
          track_type: e.track_type || "data-tracktype",
          dwell_on: e.dwell_on !== !1,
          prerender: e.prerender === !0,
          query_parameters: e.query_parameters !== !1,
          async_all_clicks: e.async_all_clicks === !0,
          click_postmsg: e.click_postmsg || {},
          apv: e.apv !== !1,
          apv_time: e.apv_time || 500,
          apv_px: e.apv_px || 500,
          ex: e.ex === !0,
          persist_asid: e.persist_asid === !0,
          track_right_click: e.track_right_click !== !1,
          gen_bcookie: e.gen_bcookie === !0,
          bcookie_override: e.bcookie_override || null,
          skip_attr: e.skip_attr || "data-rapid-skip",
          parse_dom: e.parse_dom === !0,
          pageview_on_init: e.pageview_on_init !== !1,
          perf_navigationtime: e.perf_navigationtime || 0,
          perf_commontime: e.perf_commontime || null,
          perf_usertime: e.perf_usertime || null,
          perf_resourcetime: e.perf_resourcetime || 0,
          sample: e.sample || {},
          loc: r,
          accountGUID: e.accountGUID || null,
          customUID: e.customUID || null,
          ncid: e.ncid || null,
          tag_id: e.tag_id || null,
        };
        if (
          (f.anonymized && (f.geo_host = m),
          (f.anonymized || f.bcookie_override) && (f.yql_enabled = !1),
          f.customUID)
        ) {
          var p = f.customUID;
          typeof p == "object" && p.type && p.id
            ? (f.customUID = n.aug({}, p))
            : (console.error(
                'customUID must be an Object with "id" and "type"',
              ),
              (f.customUID = null));
        }
        var k = f.compr_timeout * 1;
        return (
          n.isNum(k) ? (f.compr_timeout = Ce(k, s, d)) : (f.compr_timeout = d),
          f.ldbg &&
            f.click_timeout != u &&
            console.warn(
              "Click timeout set to " +
                f.click_timeout +
                "ms (default 10000ms)",
            ),
          e.apv_callback && typeof e.apv_callback == "function"
            ? (f.apv_callback = e.apv_callback)
            : (f.apv_callback = null),
          f
        );
      }
      function Ne() {
        const e = n.rand();
        x.set("A_sid", e), a.keys.set("A_sid", e), Me({ A_sid: e });
      }
      function Ve(e = !0) {
        return `Rapid-${a.version}${e ? `(${new Date().getTime()})` : ""}:`;
      }
      function lt(e) {
        a.ldbg && console.warn("RAPID WARNING: " + e);
      }
      function ve(e) {
        a.ldbg && console.error("RAPID ERROR: " + e);
      }
      function O(e, ...i) {
        a.ldbg && console.log(Ve() + e, ...i);
      }
      function ut(e) {
        a.ldbg && console.time && console.time(`${Ve(!1)} ${e}`);
      }
      function Pe(e) {
        a.ldbg && console.timeEnd && console.timeEnd(`${Ve(!1)} ${e}`);
      }
      var dt = { tumblr: !0 };
      function ct() {
        if (!(!a.ult_token_capture || D.i13n.__handled_ult_tokens__ === !0)) {
          D.i13n.__handled_ult_tokens__ = !0;
          var e = a.loc;
          if (e.match(/;_yl[a-z]{1}=/))
            O("Found ULT Token on URL."), ne.sendGeoT(e);
          else {
            var i = new L(),
              r = i.getCookieByName("D");
            r && (n.clearCookie("D", "/", ".yahoo.com"), ne.sendGeoT(r));
          }
        }
      }
      var a = Ue(Y);
      S.conf = a;
      var ne = ft(),
        j = null,
        Q = null;
      new L(x), n.clearCookie("rx", "/", n.isIE ? document.domain : "");
      function ge() {
        var e = null,
          i = null;
        function r() {
          (e = new Date().valueOf().toString()), (i = e.length);
        }
        return r(), { ts: e.substr(0, i - 3), ms: e.substr(i - 3) };
      }
      function ft() {
        var e = a.geo_host || D.i13n.beacon_server;
        function i(v, g) {
          O(v);
          var w = g && typeof g == "function" ? g : function () {};
          function b(R) {
            var M = new Image(),
              H = null;
            (M.onload =
              M.onabort =
              M.onerror =
                function () {
                  clearTimeout(H), R.call(null);
                }),
              (M.src = v),
              R &&
                typeof R == "function" &&
                (H = setTimeout(function () {
                  R.call(null);
                }, a.click_timeout)),
              setTimeout(function () {
                M = null;
              }, 1e7);
          }
          navigator && navigator.sendBeacon && navigator.sendBeacon(v)
            ? w()
            : b(w);
        }
        function r() {
          return "rapid_if_" + n.rand();
        }
        function s(v) {
          var g = "display:none;";
          n.isIE && (n.ieV === 6 || n.ieV === 7 || n.ieV === 8)
            ? v.style.setAttribute("cssText", g, 0)
            : n.sa(v, "style", g);
        }
        function d(v) {
          var g = null;
          if (n.isIE && n.ieV <= 8) {
            var w = "";
            n.isSecure() &&
              n.ieV == 6 &&
              (w = 'src="https://' + a.geo_host + '/b.html"'),
              (g = document.createElement(
                "<iframe " + w + ' name="' + v + '"></iframe>',
              ));
          } else g = document.createElement("iframe");
          return (g.name = v), g;
        }
        function u() {
          setTimeout(function () {
            var v = d("");
            n.addEvent(v, "load", function () {
              n.rmBodyEl(v);
            }),
              n.appBodyEl(v);
          }, 1);
        }
        function m(v, g) {
          var w = null,
            b = n.make("form"),
            R = n.make("input"),
            M = r(),
            H = r(),
            J = "application/x-www-form-urlencoded;charset=UTF-8";
          (w = d(M)),
            s(w),
            s(b),
            (b.id = H),
            (b.method = "POST"),
            (b.action = _(g)),
            (b.target = M),
            n.isIE && n.ieV <= 7
              ? b.setAttribute("enctype", J)
              : (b.setAttribute("enctype", J), b.setAttribute("encoding", J)),
            (R.name = "q"),
            (R.value = v),
            n.isIE && n.ieV >= 10 && (R.type = "submit"),
            b.appendChild(R);
          var F = "load",
            N = function () {
              var ue = "";
              if (a.ldbg && (!n.isIE || n.ieV >= 9)) {
                var me = w.contentDocument || w.contentWindow.document;
                ue = me.body.innerHTML;
              }
              n.rmEvent(w, F, N),
                setTimeout(function () {
                  n.rmBodyEl(w), n.rmBodyEl(b);
                }, 0),
                O("iframe resp: " + ue),
                n.isIE && n.ieV <= 7 && u();
            };
          n.addEvent(w, F, N), n.appBodyEl(w), n.appBodyEl(b), b.submit();
        }
        function _(v) {
          var g = a.deb,
            w = n.rand(),
            b = [
              window.location.protocol === "http:" ? "http://" : "https://",
              a.yql_host,
              a.yql_path,
              "?yhlVer=2&yhlClient=rapid&yhlS=",
              a.spaceid,
              g === !0 ? "&yhlEnv=staging" : "",
              g === !0 || a.ldbg ? "&debug=true&diagnostics=true" : "",
              n.isIE && n.ieV ? "&yhlUA=ie" + n.ieV : "",
              n.isIE && n.ieV == 8 ? "&format=json" : "",
              "&yhlCT=2",
              "&yhlBTMS=",
              new Date().valueOf(),
              "&yhlClientVer=",
              a.version,
              "&yhlRnd=",
              w,
              "&yhlCompressed=",
              v || 0,
              a.gen_bcookie ? "&yhlBcookie=1" : "",
            ].join("");
          return O(b), b;
        }
        function A(v) {
          var g = new V(v);
          i(E("p", g, 1197799914));
        }
        function l(v, g) {
          var w = _(g);
          try {
            var b = n.getXHR();
            b.open("POST", w, !0),
              (b.withCredentials = !0),
              b.setRequestHeader(
                "Content-Type",
                "application/x-www-form-urlencoded; charset=UTF-8",
              ),
              a.ldbg &&
                (b.onreadystatechange = function () {
                  b.readyState === 4 &&
                    O(b.status + ":xhr response: " + b.responseText);
                }),
              b.send(v);
          } catch (R) {
            A({
              _err_nm: "sendToYQL Failed",
              _err_msg: "sendToYQL Failed",
              _err_rs: String(R),
              _err_st: R.stack,
              urlUsed: w,
            });
          }
        }
        var f = function (v) {
          var g = new V();
          new L(g),
            g.set("_pl", 1),
            g.set("A_v", a.version),
            g.set("A_cn", a.comboName);
          var w = a.getReferrer();
          if (
            (w && v !== !1 && g.set("_R", w),
            a.test_id && g.set("test", a.test_id),
            a.customUID)
          ) {
            var b = a.customUID;
            g.set("user_id", b.id), g.set("user_id_type", b.type);
          }
          if (
            (a.accountGUID && g.set("_lGUID", a.accountGUID),
            a.ex && g.set("_ex", 1),
            g.get("_bt") || g.set("_bt", "rapid"),
            a.query_parameters)
          ) {
            var R =
                /^(test|outcm|etrg|usergenf|etag|sec|slk|tar|tar_uri|yhldebug|tsrc|action)$|^(A_|_)/,
              M = document.location.search;
            if (M) {
              (M = M.substring(1)), (M = M.split("&"));
              for (var H in M)
                if (M.hasOwnProperty(H)) {
                  var J = M[H].split("=");
                  if (J.length >= 2) {
                    var F = decodeURIComponent(J[0]),
                      N = decodeURIComponent(J[1]),
                      ue = !R.test(F);
                    O("Queryparams decoded: " + F + " : " + N),
                      O("Blacklist filter: " + ue),
                      ue && g.set(F, N);
                  }
                }
            }
          }
          var me = window.location.protocol || "";
          (me = me.replace(/:$/, "")), g.set("A_pr", me);
          var de = new Date().getTimezoneOffset();
          return (de = de ? (-1 * de) / 60 : 0), g.set("A_tzoff", de), g;
        };
        function p(v, g, w) {
          var b = {};
          return n.isObj(v) && n.aug(b, v, w), b;
        }
        function k(v, g, w) {
          w = w || {};
          var b = { m: n.norm(v.moduleName), l: [] };
          v.moduleYLK && (b.ylk = v.moduleYLK.getAll());
          var R = b.ylk && b.ylk.sec ? b.ylk.sec : "",
            M = v.links,
            M = v.links,
            H = function (de, et) {
              var tt = de === "_p";
              return tt || (de == "sec" && et != b.m && et != R)
                ? !0
                : de !== "sec" && !tt;
            };
          const J = [],
            F = [];
          for (var N = 0, ue = M.length; N < ue; N++)
            if (M[N]) {
              if ((w.useViewability || a.viewability) && !M[N].viewable) {
                J.push(M[N].DOMElement ?? M[N].data.slk);
                continue;
              }
              var me = n.aug({}, M[N].data, function (de) {
                return de !== "DOMElement";
              });
              F.push(M[N].DOMElement ?? M[N].data.slk), b.l.push(p(me, g, H));
            }
          return (
            J.length &&
              O(`module ${v.moduleName} skipping non-viewable elements:`, J, {
                moduleElement: v.moduleElement,
              }),
            F.length &&
              O(`module ${v.moduleName} capturing viewable elements:`, F, {
                moduleElement: v.moduleElement,
              }),
            b
          );
        }
        function U(v, g, w) {
          var b = [],
            R = null;
          for (var M in v)
            if (n.hasOwn(v, M) && ((R = v[M]), !!R)) {
              var H = k(R, g, w);
              H.l.length > 0
                ? b.push(H)
                : O('Not capturing 0 links mod: "' + R.moduleName + '"');
            }
          return b;
        }
        function B(v, g) {
          return v ? "pv" : g && g.event ? g.event.type.getYQLID() : "lv";
        }
        function G(v, g, w, b, R) {
          var M;
          return (
            Q ? (M = z) : (M = ge()),
            [
              {
                t: B(g, R),
                s: a.spaceid,
                pp: W(g, b).getAll(),
                _ts: M.ts,
                _ms: M.ms,
                lv: U(v, w, R),
              },
            ]
          );
        }
        function W(v, g) {
          var w = V.makeFromPP(a.keys);
          return (
            w.absorb(g),
            v && w.set("A_", 1),
            w.set("A_sr", n.sr()),
            w.set("A_vr", n.vr()),
            w.set("A_do", n.dor()),
            w.set("A_ib", n.ib()),
            w.set("A_ob", n.ob()),
            w.set("A_srr", n.srr()),
            w
          );
        }
        function ae(v, g, w) {
          var b = "select * from x where a = '" + v + "'";
          return (g ? "q=" : "") + (w ? n.enc(b) : b);
        }
        function t(v) {
          var g = n.aug({}, Y);
          delete g.keys;
          var w = f();
          w.set("A_cnf", n.toJSON(g));
          var b = {
            bp: w.getAll(),
            r: v.call(0),
            yrid: a.yrid,
            optout: a.oo,
            nol: a.nol,
          };
          return n.toJSON(b);
        }
        function o(v, g, w) {
          var b = {};
          g &&
            Q &&
            Q.start_dwell() &&
            ((b.etag = "dwell,start"),
            (b.usergenf = 1),
            (b.A_prets = $ ? $.ts : null),
            (b.A_prems = $ ? $.ms : null)),
            w.event && n.aug(b, w.event.data),
            w.pp && n.aug(b, w.pp);
          var R = t(function () {
            return G([v], g, !0, b, w);
          });
          T(R);
        }
        function c(v, g, w, b) {
          var R = t(function () {
            return G(v, g, !0, w, b);
          });
          T(R);
        }
        function h(v) {
          return v.identifier;
        }
        var y = (function () {
          var v = null,
            g = [],
            w = 0,
            b = a.addmod_timeout;
          return function (R, M, H, J) {
            clearTimeout(v);
            var F = +new Date() - w;
            if (((g = n.uniqConcat(g, R, h)), F > b))
              (w = +new Date()), c(g, M, H, J), (g = []);
            else {
              var N = b - F;
              v = setTimeout(function () {
                O("queueing send in addMods"), c(g, M, H, J), (g = []);
              }, N);
            }
          };
        })();
        function T(v) {
          function g(F, N) {
            N === 0 && (F = F.replace(/'/g, "\\'")),
              O("body: " + F),
              n.hasCORS()
                ? ((w = ae(F, !0, !0)), l(w, N))
                : ((w = ae(F, 0, 0)),
                  n.addEvent(document, "load", function () {
                    m(w, N);
                  }));
          }
          var w = "",
            b = Ae[a.compr_type];
          if (
            a.compr_on &&
            a.webworker_file &&
            n.hasWorkers() &&
            b > 1 &&
            v.length > 2 * 1024
          ) {
            O(
              "Looking for worker:" +
                a.webworker_file +
                ", compr timeout:" +
                a.compr_timeout,
            );
            try {
              let F = function () {
                M || ((M = !0), g(v, 0), O("sent in failSend"));
              };
              var R = new Worker(a.webworker_file),
                M = !1,
                H = null,
                J = 0;
              (R.onerror = function (N) {
                clearTimeout(H), F(), lt(N.message), R.terminate();
              }),
                (R.onmessage = function (N) {
                  clearTimeout(H);
                  var ue = n.tms();
                  (N.data === "Decompress fail" ||
                    N.data === "Compress fail" ||
                    N.data.indexOf("error:") == 0) &&
                    (O(N.data), F()),
                    M || ((M = !0), g(N.data, b)),
                    O(
                      "Ratio (" +
                        N.data.length +
                        "/" +
                        v.length +
                        "): " +
                        ((N.data.length * 100) / v.length).toFixed(2) +
                        "% -> C_T: " +
                        (ue - J) +
                        " ms (" +
                        ue +
                        "-" +
                        J +
                        ")",
                    ),
                    R.terminate();
                }),
                O("posting to worker: " + v),
                (J = n.tms()),
                R.postMessage({ type: b, json: v }),
                (H = setTimeout(function () {
                  F(), R.terminate();
                }, a.compr_timeout));
            } catch (F) {
              O("compression worker exception " + F), g(v, 0);
            }
          } else g(v, 0);
        }
        function E(v, g, w) {
          var b = [
            "?s=" + (w || a.spaceid),
            "t=" + n.rand() + "," + Math.random(),
            "_I=" + a.yrid,
            "_AO=" + a.oo,
            "_NOL=" + a.nol,
            "_R=" + n.enc(a.getReferrer()),
            (v === "c" ? "_K=" : "_P=") + I(g),
          ];
          a.bcookie_override && b.push("_BM=" + a.bcookie_override);
          var R = b.join("&");
          return (
            (window.location.protocol === "http:" ? "http://" : "https://") +
            e +
            "/" +
            v +
            R
          );
        }
        function I(v) {
          new L(a.keys);
          var g = new V(f(!1).getAll());
          g.absorb(a.keys.getAll()),
            v &&
              (v instanceof V
                ? g.absorb(v.getAll())
                : ve("Internal error in buildGeoPP: not PP type"));
          var w;
          return (
            g.get("etag") === "dwell,start"
              ? (w = z)
              : g.get("etag") === "dwell,stop"
                ? (w = $)
                : (w = ge()),
            g.set("_ts", w.ts),
            g.set("_ms", w.ms),
            g.set("A_sr", n.sr()),
            g.set("A_vr", n.vr()),
            g.set("A_do", n.dor()),
            g.set("A_ib", n.ib()),
            g.set("A_ob", n.ob()),
            g.set("A_srr", n.srr()),
            a.version + "%05" + g.ser()
          );
        }
        function q(v) {
          var g = new V(v.pp),
            w = [E("c", g) + "&_C=" + n.ser(v.data)];
          return w.join("&");
        }
        return {
          sendGeoT: function (v) {
            var g = [
              window.location.protocol === "http:" ? "http://" : "https://",
              e,
              "/t?",
              v,
            ].join("");
            i(g);
          },
          sendGeoPV: function () {
            i(E("b"));
          },
          sendRapidNoDelay: function (v, g, w, b, R) {
            if (
              (g &&
                Q &&
                Q.start_dwell() &&
                ((w.etag = "dwell,start"),
                (w.usergenf = 1),
                (w.A_prets = $ ? $.ts : null),
                (w.A_prems = $ ? $.ms : null)),
              !a.yql_enabled || R)
            ) {
              var M = null;
              w && (M = new V(w)), i(E(g ? "b" : "p", M));
            } else c(v, g, w, b);
          },
          sendRapid: function (v, g, w, b) {
            g &&
              Q &&
              Q.start_dwell() &&
              ((w.etag = "dwell,start"),
              (w.usergenf = 1),
              (w.A_prets = $ ? $.ts : null),
              (w.A_prems = $ ? $.ms : null)),
              y(v, g, w, b);
          },
          sendRefreshedContent: o,
          sendULTEvent: function (v, g, w) {
            var b = {};
            v && v.data && (b = v.data);
            var R = E("p", new V(b), g || 0);
            v.type && (R += "&_V=" + v.type.spaceidPrefix), i(R, w);
          },
          sendEvents: function (v, g) {
            this.sendULTEvent(v, g);
          },
          sendClick: function (v, g) {
            var w = null,
              b = q(v),
              R = !1;
            if (a.async_all_clicks || !v.synch) {
              b && i(b, g);
              return;
            }
            n.prevDef(v.event),
              (w = function () {
                if (!R) {
                  if (((R = !0), g)) {
                    g.call();
                    return;
                  }
                  var M = v.targetElement.href;
                  if (a.click_postmsg.origin) {
                    var H = a.click_postmsg.window || top,
                      J = a.click_postmsg.payload || {};
                    (J.href = M),
                      H.postMessage(n.toJSON(J), a.click_postmsg.origin);
                  } else
                    v.hasTargetTop
                      ? (top.document.location = M)
                      : (document.location = M);
                }
              }),
              i(b, w);
          },
        };
      }
      function Je(e, i, r) {
        const s = i && a.useIntersectionObserver,
          d = e.DOMElement;
        let u = !1;
        i
          ? s
            ? n.getAttribute(d, a.anc_v9y_attr) === "1"
              ? (u = !0)
              : d.dataset.rapidIntersectedVisHidden &&
                n.getCompStyle(d).visibility !== "hidden" &&
                ((u = !0),
                delete d.dataset.rapidIntersectedVisHidden,
                C.unobserveElement(d))
            : (u = n.isInView(d, r))
          : (u = !0),
          u && d.setAttribute(a.anc_v9y_attr, "1"),
          (e.viewable = u);
      }
      function vt(e, i, r, s, d, u, m, _) {
        const A = m && a.useIntersectionObserver;
        var l = "",
          f = null,
          p = { data: { sec: r, _p: s } };
        return (
          m && n.aug(p.data, { A_lv: 1 }),
          (p.DOMElement = d),
          d.setAttribute(a.anc_pos_attr, s),
          A && C.observeElementIntersection(d, e),
          Je(p, m, _),
          n.getAttribute(d, a.skip_attr) !== "true"
            ? ((l = n.getLT(d, i)),
              l && l !== "" ? (f = fe(d)) : (l = "_ELINK_"),
              (p.data.slk = u || l))
            : ((p.data.slk = u || "section"), (f = fe(d))),
          f !== null && n.aug(p.data, f.getAll()),
          p
        );
      }
      function gt(e) {
        var i = {},
          r = e || window;
        return {
          addModule: function (s, d) {
            i[n.norm(s)] = d;
          },
          addModules: function (s, d) {
            if (
              (O("addModules() called modules:", s, "useViewability:", d), !s)
            )
              return console.error("addModules() modules is required"), [];
            var u = n.isArr(s),
              m = [];
            u ||
              ((n.isStr(s) || n.getAttribute(s, "id")) &&
                ((s = new Array(s)), (u = !0)));
            for (var _ in s) {
              if (!n.hasOwn(s, _)) continue;
              const l = u
                ? typeof s[_] == "string"
                  ? s[_]
                  : n.getAttribute(s[_], "id")
                : _;
              if (!l) {
                console.error("addModules() could not get element id", s);
                continue;
              }
              const f =
                  typeof s[_] == "string" ? document.getElementById(l) : s[_],
                p = n.trim(u ? l : s[_]);
              if (!f) {
                console.error("addModules() could not find element", p, l);
                continue;
              }
              if (this.exists(l))
                console.error(
                  `addModules() called with already existing id: ${l}`,
                );
              else {
                var A = At(p, f, d, r);
                A && (this.addModule(l, A), m.push(A));
              }
            }
            return m;
          },
          getModules: function () {
            return i;
          },
          getModulesWithViewability: function () {
            var s = {};
            for (var d in i) {
              var u = i[d];
              u.useViewability && (s[d] = u);
            }
            return s;
          },
          reevaluateModuleViewability: function (s, d = 0) {
            var u = this.getModulesWithViewability(),
              m;
            const _ = typeof s == "string" ? s : n.getAttribute(s, "id");
            if (_) (m = u[_]), m && m.reevaluateViewableLinks(d);
            else for (var A in u) (m = u[A]), m.reevaluateViewableLinks(d);
          },
          refreshModule: function (s, d, u, m) {
            const _ = typeof s == "string" ? s : n.getAttribute(s, "id"),
              A = i[n.norm(_)];
            A
              ? A.refreshModule(s, d, u, m)
              : console.error("refreshModule could not find element:", s);
          },
          removeModule: function (s) {
            var d = i[n.norm(s)];
            d && (d.removeHandlers(), d.removeObservers(), delete i[s]);
          },
          destroy: function () {
            for (var s in i) n.hasOwn(i, s) && this.removeModule(s);
            i = {};
          },
          exists: function (s) {
            return i[n.norm(s)];
          },
        };
      }
      function ht(e, i) {
        return n.hasClass(e, "rapid_track_href")
          ? "href"
          : n.hasClass(e, "rapid_track_text")
            ? "text"
            : n.hasClass(e, "rapid_track_title")
              ? "title"
              : n.hasClass(e, "rapid_track_id")
                ? "id"
                : i;
      }
      function pt(e) {
        return (
          e.nodeName.toLowerCase() === "input" &&
          n.getAttribute(e, "type") === "submit"
        );
      }
      function mt(e, i) {
        var r = wt(e, i);
        r &&
          (!e.ctrlKey &&
            !e.metaKey &&
            e.type !== "contextmenu" &&
            Q &&
            Q.stop_dwell() &&
            (r.pp = {
              etag: "dwell,stop",
              usergenf: 1,
              A_prets: z ? z.ts : null,
              A_prems: z ? z.ms : null,
            }),
          ne.sendClick(r));
      }
      function _t(e, i, r) {
        var s = n.getAttribute;
        return (
          (i.target && i.target.toLowerCase() === "_blank") ||
          e.which === 2 ||
          e.button === 4 ||
          e.altKey ||
          e.ctrlKey ||
          e.shiftKey ||
          e.metaKey ||
          s(i, "data-nofollow") === "on" ||
          (s(i, "href") &&
            s(i, "href").substr(0, 11).toLowerCase() === "javascript:") ||
          n.hasClass(i, a.nofollow_classname) ||
          n.hasClass(r, a.nofollow_classname)
        );
      }
      function he(e, i, r, s) {
        r = r || {};
        var d = null;
        return (
          e
            ? ((d = D.i13n.EventTypes.getEventByName(e)),
              (r._E = d.getEventName()),
              (i = r._E))
            : (r._E = i || "_"),
          s && (r.outcm = s),
          { type: d, name: i, data: r, outcome: s }
        );
      }
      function wt(e, i) {
        e = e || event;
        for (
          var r = n.getTarget(e),
            s = "button",
            d = "input",
            u = "",
            m = !1,
            _ = null;
          r &&
          (u = r.nodeName.toLowerCase()) &&
          u !== "a" &&
          u !== s &&
          !pt(r) &&
          !n.hasClass(r, a.nonanchor_track_class);

        )
          r = r.parentNode;
        if (!r || n.hasClass(r, a.no_click_listen)) return 0;
        if (n.hasClass(r, a.nonanchor_track_class)) {
          _ = { pos: 0, sec: i.moduleName, slk: "_" };
          var A = fe(r, 1);
          A && n.aug(_, A.getAll());
        } else {
          if (
            ((_ = i.links[Number(n.getAttribute(r, a.anc_pos_attr)) - 1]), !_)
          )
            return 0;
          (_ = n.aug({}, _.data)),
            u !== d && u !== s && !_t(e, r, i.moduleElement) && (m = !0);
        }
        if (!_.tar) {
          var l = n.getAttribute(r, "href");
          l && (_.tar = n.extDomain(l)),
            (!l || !_.tar) && (_.tar = n.extDomain(a.loc));
        }
        _.tar_uri || (r.pathname ? (_.tar_uri = r.pathname) : (_.tar_uri = ""));
        var f = i.moduleYLK;
        if (f) {
          var p = f.getAll();
          n.aug(_, p, function (k) {
            return !(k in _);
          });
        }
        return (
          (_.A_xy = n.xy(e)),
          e.type == "contextmenu" && ((_.A_cl = 3), (m = !1)),
          {
            data: _,
            event: e,
            moduleElement: i.moduleElement,
            targetElement: r,
            synch: m,
            hasTargetTop: r && r.target && r.target.toLowerCase() === "_top",
          }
        );
      }
      function bt(e, i, r, s, d) {
        var u = {};
        return (
          n.aug(u, s),
          (u.sec = e || u.sec),
          (u.slk = i || u.slk),
          (u._p = r || u._p),
          {
            data: u,
            outcome: d,
            event: null,
            moduleElement: null,
            targetElement: null,
            synch: !1,
            hasTargetTop: !1,
          }
        );
      }
      function ze(e) {
        return e.length
          ? e[0].sourceIndex
            ? e.sort(function (i, r) {
                return i.sourceIndex - r.sourceIndex;
              })
            : e[0].compareDocumentPosition
              ? e.sort(function (i, r) {
                  return 3 - (i.compareDocumentPosition(r) & 6);
                })
              : e
          : [];
      }
      function yt(e, i) {
        const r = Object.values(e).flatMap((s) => Array.from(s));
        return ze(typeof i == "function" ? r.filter(i) : r);
      }
      function He(e, i, r, s, d) {
        return e
          ? (d && Object.keys(r).forEach((u) => delete r[u]),
            i.split(",").forEach((u) => {
              r[u] || (r[u] = e.getElementsByTagName(u));
            }),
            yt(
              r,
              (u) => n.getAttribute(u, a.skip_attr) !== "true" && (!s || s(u)),
            ))
          : [];
      }
      function Se(e, i, r, s, d = !0) {
        if (!i) return [];
        const u = e.split(",");
        r = r || [];
        const m = n.getAttribute(i, a.skip_attr) === "true",
          _ = n.isTagOfInterest(i, u),
          A = typeof s == "function" && !s.call(0, i);
        return (
          m
            ? !_ && !A && r.push(i)
            : (_ && !A && r.push(i),
              i.childNodes.forEach((l) => Se(e, l, r, s, !1))),
          d ? ze(r) : r
        );
      }
      function At(e, i, r, s) {
        var d = i,
          u = n.getAttribute(i, "id"),
          m = "a,button,input",
          _ = {},
          A,
          l = fe(d),
          f = [],
          p = a.parse_dom ? Se(m, d) : He(d, m, _),
          k = ht(d, a.lt_attr),
          U = n.getAttribute(d, a.track_type),
          B = 0;
        function G(h) {
          var y = n.rand() + B++ + ge().ms,
            T = se(h);
          T.set("uuid", y);
          var E = re(T.getAll());
          h.setAttribute("data-ylk", E);
          var I = h.search;
          h.search = I + (I ? "&" : "") + "uuid=" + y;
        }
        function W(h) {
          return h.map((y) => {
            const T = n.getAttribute(y, a.skip_attr) === "true";
            let E;
            T
              ? (E = y === d ? l.map.slk : fe(y).map.slk || l.map.slk)
              : ((E = l.map.slk), n.hasClass(y, a.click_id_class) && G(y));
            const I = vt(u, k, l.map.sec || e, f.length + 1, y, E, r, s);
            return f.push(I), I;
          });
        }
        function ae(h) {
          return !n.getAttribute(h, a.anc_pos_attr);
        }
        W(p), C.observeElementMutation(d, u, { subtree: !0, childList: !0 });
        var t = {
            useViewability: r,
            moduleYLK: l,
            links: f,
            moduleName: e,
            trackType: U,
            get moduleElement() {
              return d;
            },
            refreshModule: function (h, y, T, E) {
              const I = typeof h == "string" ? document.getElementById(h) : h;
              if (!I) {
                console.error("refreshModule: element", h, "is not in the DOM");
                return;
              }
              this.removeHandlers(), (d = I), (E.isRefreshed = !0), c();
              var q = a.parse_dom ? Se(m, d, null, ae) : He(d, m, _, ae, !0);
              if (y === !0 || q.length > 0) {
                const g = W(q),
                  w = g.filter((b) => b.viewable).length;
                if (y === !0 || w > 0) {
                  var v = {};
                  n.aug(v, this),
                    T ? (v.links = g) : (v.links = []),
                    (y === !0 || T) && ne.sendRefreshedContent(v, y, E);
                }
              } else n.ldbg && O("refreshModule", h, "no new links.");
              y === !0 && a.apv && j && j.reInit(),
                C.observeElementMutation(d, u, { subtree: !0, childList: !0 });
            },
            reevaluateViewableLinks: function (h = 0) {
              h
                ? (A && clearTimeout(A),
                  (A = setTimeout(() => this.doReevaluateViewableLinks(), h)))
                : this.doReevaluateViewableLinks();
            },
            doReevaluateViewableLinks: function () {
              ut(`reevaluateViewableLinks ${e}`);
              const h = a.parse_dom ? Se(m, d) : He(d, m, _);
              if (!h) {
                Pe(`reevaluateViewableLinks ${e}`);
                return;
              }
              const y = f.filter((v) =>
                  v.viewable ? !1 : (Je(v, r, s), v.viewable),
                ),
                T = W(h.filter((v) => !n.getAttribute(v, a.anc_pos_attr))),
                E = [...y, ...T.filter((v) => v.viewable)];
              if (!E.length) {
                Pe(`reevaluateViewableLinks ${e}`);
                return;
              }
              Pe(`reevaluateViewableLinks ${e}`);
              var I = {};
              n.aug(I, this), (I.links = E);
              var q = { event: he("contentmodification", "", {}) };
              ne.sendRefreshedContent(I, !1, q);
            },
            removeHandlers: function () {
              n.rmEvent(d, "click", o),
                a.track_right_click && n.rmEvent(d, "contextmenu", o);
            },
            removeObserver: function (h) {
              C.unobserveElement(h);
            },
            removeObservers: function () {
              f.forEach((h) => this.removeObserver(h.DOMElement));
            },
            identifier: u,
          },
          o = function (h) {
            mt(h, t);
          };
        function c() {
          n.addEvent(d, "click", o),
            a.track_right_click && n.addEvent(d, "contextmenu", o);
        }
        return c(), t;
      }
      function pe(e, i, r) {
        (typeof e != "object" || !e) && (e = {}),
          O("beaconPageview called, pp=" + n.fData(e)),
          i && !a.persist_asid && Ne(),
          e.A_apv || Re(),
          ne.sendRapidNoDelay([], !0, e, null, r),
          a.apv && j != null && j.reInit();
      }
      function Le(e, i, r, s) {
        O(
          'beaconEvent: event="' + e + '" data=' + n.fData(i) + " outcome=" + r,
        );
        var d = he(0, e, i, r);
        ne.sendEvents(d, s), st(e, i);
      }
      function Et(e) {
        console.log("_beaconRegionDwell", e.elementId, e.dwellTime, e.element),
          navigator.sendBeacon(
            `http://localhost:9000/?region=${e.elementId}&dwellTime=${e.dwellTime}`,
          );
      }
      var De = {};
      function Xe(e) {
        const i = typeof e == "string" ? e : n.getAttribute(e, "id");
        if (!i)
          throw new Error(
            `Rapid trackModuleProgression(): element id ${i} not found.`,
          );
        if (De[i])
          throw new Error(
            `Rapid trackModuleProgression(): element id ${i} is already tracked.`,
          );
        var r = !1;
        const s = typeof e == "string" ? document.getElementById(e) : e;
        if (!s)
          throw new Error(
            `Rapid trackModuleProgression(): element id ${i} not found.`,
          );
        var d = n.getElementViewDeltaAndMax(s),
          u = Math.max(0, d.delta),
          m = Math.max(0, d.max),
          _ = null,
          A = function () {
            _ != null && clearTimeout(_),
              (_ = setTimeout(function () {
                (d = n.getElementViewDeltaAndMax(s)),
                  (u = Math.max(u, d.delta)),
                  (m = Math.max(m, d.max));
              }, a.apv_time));
          },
          l = function () {
            Le(
              "content-progression",
              { A_cpt: "article", A_cpr: u, A_cpm: m },
              "content-progression",
            ),
              n.rmEvent(window, "beforeunload", l);
          };
        n.addEvent(window, "scroll", A), n.addEvent(window, "beforeunload", l);
        var f = function () {
          r || (n.rmEvent(window, "scroll", A), l(), (r = !0), delete De[i]);
        };
        return (De[i] = f);
      }
      function kt(e) {
        var i = De[e];
        if (!i)
          throw new Error(
            "Rapid.js - Module Progression Tracking for #" +
              e +
              " does not exist, please check the element Id.",
          );
        i();
      }
      function Tt(e, i) {
        let r = e,
          s = i,
          d = 0,
          u = 0,
          m = !1,
          _ = !1;
        return {
          get elementId() {
            return r;
          },
          get element() {
            return s;
          },
          get isDisabled() {
            return m;
          },
          get isIntersecting() {
            return _;
          },
          get dwellTime() {
            return d && u ? u - d : 0;
          },
          setIntersecting(A) {
            _ = A;
          },
          startDwell() {
            !d && !m && _ && (d = Date.now());
          },
          stopDwell() {
            d &&
              ((u = Date.now()), this.dwellTime && Et(this), this.resetDwell());
          },
          resetDwell() {
            (d = 0), (u = 0);
          },
          enable() {
            (m = !1), this.startDwell();
          },
          disable() {
            this.stopDwell(), (m = !0);
          },
        };
      }
      function Mt() {
        const e = new Map();
        function i() {
          e.forEach((u) => u.startDwell());
        }
        function r() {
          e.forEach((u) => u.stopDwell());
        }
        function s(u, m) {
          if (!["enable", "disable"].includes(m)) {
            ve(`callRegionAction() invalid actionName ${m}`);
            return;
          }
          if (!u) {
            e.forEach((A) => A[m]());
            return;
          }
          (Array.isArray(u) ? u : [u]).forEach((A) => {
            var l;
            return (l = e.get(A)) == null ? void 0 : l[m]();
          });
        }
        function d() {
          document.hidden ? r() : i();
        }
        return (
          document.addEventListener("visibilitychange", d),
          {
            add(u) {
              const m =
                typeof u == "string"
                  ? u
                  : u == null
                    ? void 0
                    : u.getAttribute("id");
              if (
                (m ||
                  console.error(
                    "Rapid addRegions() element id for region not found",
                    u,
                  ),
                e.get(m))
              ) {
                console.error("Rapid addRegions() region already added", m);
                return;
              }
              const _ = Tt(
                m,
                typeof u == "string" ? document.getElementById(u) : u,
              );
              return e.set(m, _), _;
            },
            exists(u) {
              return !!this.get(u);
            },
            get(u) {
              return e.get(u);
            },
            getAll() {
              return [...e.values()];
            },
            remove(u) {
              var m;
              (m = e.get(u)) == null || m.stopDwell(), e.delete(u);
            },
            removeAll() {
              r(), e.clear();
            },
            enableRegions(u) {
              s(u, "enable");
            },
            disableRegions(u) {
              s(u, "disable");
            },
            destroy() {
              document.removeEventListener("visibilitychange", d),
                this.removeAll();
            },
          }
        );
      }
      function je(i) {
        var i = document.getElementById(i) || window,
          r = new gt(i);
        const s = new Map(),
          d = Mt();
        let u, m;
        S.moduleMaps && Array.isArray(S.module)
          ? S.moduleMaps.push(r)
          : (S.moduleMaps = [r]);
        var _ = null;
        function A() {
          var l = null,
            f = new Date().getTime(),
            p = n.getScrollY(i),
            k = -1,
            U = function () {
              var G = n.getScrollY(i),
                W = k === -1 ? G - p : G - k;
              Math.abs(W) > a.viewability_px &&
                (r.reevaluateModuleViewability(),
                (k = G),
                new Date().getTime());
            },
            B = function () {
              l != null && clearTimeout(l);
              var G = new Date().getTime();
              G - f < a.viewability_time && (p = n.getScrollY(i)),
                (l = setTimeout(function () {
                  U();
                }, a.viewability_time));
            };
          n.addEvent(i, "scroll", B),
            (this.reInit = function () {
              (p = n.getScrollY(i)), (k = -1), (f = new Date().getTime());
            }),
            (this.destroy = function () {
              n.rmEvent(i, "scroll", B);
            });
        }
        n.executeOnLoad(function () {
          a.useIntersectionObserver || (_ = new A());
        }),
          (this.createObservers = function () {
            u ||
              (u = new IntersectionObserver(
                (l, f) => {
                  l.forEach((p) => {
                    const k = p.target.getAttribute("id");
                    if (k && d.exists(k)) {
                      this.handleRegionIntersecting(
                        k,
                        p.isIntersecting,
                        p.intersectionRatio,
                      );
                      return;
                    }
                    p.isIntersecting
                      ? p.target.dataset.rapidintersectingTimer ||
                        (p.target.dataset.rapidintersectingTimer = setTimeout(
                          () => this.handleIntersecting(p.target, f),
                          a.intersectingTime,
                        ))
                      : (p.target.dataset.rapidintersectingTimer &&
                          (clearTimeout(
                            p.target.dataset.rapidintersectingTimer,
                          ),
                          delete p.target.dataset.rapidintersectingTimer),
                        delete p.target.dataset.rapidIntersectedVisHidden);
                  });
                },
                {
                  threshold: [
                    a.intersectionObserverThreshold,
                    a.regionDwellThreshold,
                  ],
                },
              )),
              !m &&
                MutationObserver &&
                (m = new MutationObserver((l, f) => {
                  for (const p of l) this.handleMutation(p, f);
                }));
          }),
          (this.handleIntersecting = function (l, f) {
            delete l.dataset.rapidintersectingTimer,
              n.getCompStyle(l).visibility === "hidden"
                ? this.handleHiddenIntersecting(l)
                : (delete l.dataset.rapidIntersectedVisHidden,
                  l.setAttribute(a.anc_v9y_attr, "1"),
                  f.unobserve(l),
                  this.reevaluateModulesOfElement(l));
          }),
          (this.handleRegionIntersecting = function (l, f, p) {
            const k = d.get(l);
            k &&
              (f && p >= a.regionDwellThreshold
                ? (k.setIntersecting(!0), k.startDwell())
                : (k.setIntersecting(!1), k.stopDwell()));
          }),
          (this.handleMutation = function (l, f) {
            if (l.type === "attributes")
              this.reevaluateModulesOfElement(l.target);
            else if (l.type === "childList") {
              let p = l.target;
              for (; p.parentNode; )
                this.reevaluateModulesOfElement(p), (p = p.parentNode);
            }
          }),
          (this.handleHiddenIntersecting = function (l) {
            if (((l.dataset.rapidIntersectedVisHidden = !0), !m)) return;
            let f = l;
            try {
              for (
                ;
                f.parentNode &&
                n.getCompStyle(f.parentNode).visibility === "hidden";

              )
                f = f.parentNode;
            } catch {
              ve("failed to find hidden parent for");
              return;
            }
            this.observeElementMutation(f, this.getModulesOfElement(l), {
              attributes: !0,
            });
          }),
          (this.observeElementIntersection = function (l, f) {
            if ((f && this.mapElementToModules(l, f), !u)) {
              console.error("IntersectionObserver has not been instantiated");
              return;
            }
            u.observe(l);
          }),
          (this.observeElementMutation = function (l, f, p) {
            if ((this.mapElementToModules(l, f), !m)) {
              console.error("MutationObserver has not been instantiated");
              return;
            }
            m.observe(l, p);
          }),
          (this.getModulesOfElement = function (l) {
            const f = s.get(l);
            return Array.from(f ?? []);
          }),
          (this.mapElementToModules = function (l, f) {
            let p = s.get(l);
            p || (p = new Set()),
              (Array.isArray(f) ? f : [f]).forEach((k) => p.add(k)),
              s.set(l, p);
          }),
          (this.unobserveElement = function (l) {
            u == null || u.unobserve(l), s.delete(l);
          }),
          (this.getModules = function () {
            return r;
          }),
          (this.addModules = function (l, f, p) {
            p = p || {};
            var k = { A_am: 1 };
            p.pp && n.aug(k, p.pp),
              (p.useViewability = p.useViewability || !1),
              (p.clickonly = p.clickonly || !1);
            var U = !1;
            switch ((f || (f = p.useViewability ? 2 : !1), f)) {
              case 1:
              case "1":
              case !0:
                (f = !0), (U = !0);
                break;
              default:
                (f = !1), (p.event = he("contentmodification", "", {}));
                break;
            }
            if (!a.yql_enabled) {
              O("LVs is are disabled when geo only"), f && pe(k, U);
              return;
            }
            p &&
              p.event &&
              f &&
              (ve("Cannot track event type and pageview at same time."),
              (p.event = null));
            var B = r.addModules(l, p.useViewability);
            const G = B.some((W) => W.links.some((ae) => ae.viewable));
            (!G && !p.event) ||
              (p.clickonly && (B = []),
              f || p.event || p.pp
                ? (U && !a.persist_asid && Ne(),
                  p.event && p.event.data && n.aug(k, p.event.data),
                  (G || f) && ne.sendRapidNoDelay(B, f, k, p))
                : G && ne.sendRapid(B, f, k, p),
              f === !0 && a.apv && j && j.reInit());
          }),
          (this.addModulesWithViewability = function (l, f, p) {
            (p = p || {}),
              (p.useViewability = p.useViewability || a.viewability),
              this.addModules(l, f, p);
          }),
          (this.reevaluateModulesOfElement = function (l) {
            const f = this.getModulesOfElement(l);
            f.length &&
              f.forEach((p) =>
                r.reevaluateModuleViewability(p, a.intersectingDelay),
              );
          }),
          (this.reevaluateModulesViewability = function () {
            r.reevaluateModuleViewability();
          }),
          (this.refreshModules = function (l, f, p, k) {
            O(
              "refreshModule called elementOrId:",
              l,
              "isPV:",
              f,
              "sendLinks:",
              p,
              "options:",
              n.fData(k),
            );
            var U = !1;
            switch (((k = k || {}), f || (f = !1), f)) {
              case 1:
              case "1":
              case !0:
                (f = !0), (U = !0);
                break;
              default:
                (f = !1), (k.event = he("contentmodification", "", {}));
                break;
            }
            if (!a.yql_enabled) {
              var B = k.pp || {};
              O("LVs is are disabled when geo only"), f && pe(B, U);
              return;
            }
            var G = p !== !1;
            U && !a.persist_asid && Ne(),
              f && k && k.event && (k.event = null),
              r.refreshModule(l, f, G, k),
              r.reevaluateModuleViewability(l);
          }),
          (this.removeModule = function (l) {
            r.removeModule(l);
          }),
          (this.isModuleTracked = function (l) {
            return O("isTracked called: " + l), te && te.exists(l) !== void 0;
          }),
          (this.addRegions = function (l) {
            (Array.isArray(l) ? l : [l]).forEach((p) => {
              const k = d.add(p);
              k && this.observeElementIntersection(k.element);
            });
          }),
          (this.removeRegions = function (l) {
            (Array.isArray(l) ? l : [l]).forEach((p) => {
              var U;
              const k =
                typeof p == "string"
                  ? (U = d.get(p)) == null
                    ? void 0
                    : U.element
                  : p;
              k && this.unobserveElement(k),
                d.remove(typeof p == "string" ? p : p.getAttribute("id"));
            });
          }),
          (this.removeAllRegions = function () {
            d.getAll().forEach((l) => this.unobserveElement(l.element)),
              d.removeAll();
          }),
          (this.enableRegions = function (l) {
            let f = (Array.isArray(l) ? l : [l]).map((p) =>
              typeof p == "string" ? p : p.getAttribute("id"),
            );
            d.enableRegions(f);
          }),
          (this.enableAllRegions = function () {
            d.enableRegions();
          }),
          (this.disableRegions = function (l) {
            let f = (Array.isArray(l) ? l : [l]).map((p) =>
              typeof p == "string" ? p : p.getAttribute("id"),
            );
            d.disableRegions(f);
          }),
          (this.disableAllRegions = function () {
            d.disableRegions();
          }),
          (this.refreshRegions = function (l) {
            this.removeRegions(l), this.addRegions(l);
          }),
          (this.destroy = function () {
            _ && _.destroy(),
              d.destroy(),
              u == null || u.disconnect(),
              (u = null),
              m == null || m.disconnect(),
              (m = null);
          });
      }
      function Be(i) {
        var i = i ? document.getElementById(i) : window,
          r = null,
          s = new Date().getTime(),
          d = s,
          u = n.getScrollY(i),
          m = -1,
          _ = function () {
            var l = n.getScrollY(i),
              f = m === -1 ? l - u : l - m,
              p = f > 0 ? 0 : 1;
            if (Math.abs(f) > a.apv_px) {
              var k = { A_apv: 1, A_apx: l, A_asd: p };
              pe(k, !1, !0),
                (m = l),
                (s = new Date().getTime()),
                a.apv_callback &&
                  a.apv_callback.call(this, { pixel_pos: l, scroll_dir: p });
            }
          },
          A = function () {
            r != null && clearTimeout(r);
            var l = new Date().getTime();
            l - d < a.apv_time && ((u = n.getScrollY(i)), (s = l)),
              (r = setTimeout(function () {
                _();
              }, a.apv_time));
          };
        n.addEvent(i, "scroll", A),
          (this.reInit = function () {
            (u = n.getScrollY(i)), (m = -1), (d = s = new Date().getTime());
          }),
          (this.destroy = function () {
            n.rmEvent(i, "scroll", A);
          });
      }
      function Rt() {
        var e = {
            focus: {
              state: "start",
              etrg: "show",
              etag: "dwell,start",
              jse: "window.focus",
            },
            pageshow: {
              state: "start",
              etrg: "show",
              etag: "dwell,start",
              jse: "window.pageshow",
            },
            "visibilitychange-visible": {
              state: "start",
              etrg: "show",
              etag: "dwell,start",
              jse: "document.visibilitychange",
            },
            blur: {
              state: "stop",
              etrg: "hide",
              etag: "dwell,stop",
              jse: "window.blur",
            },
            pagehide: {
              state: "stop",
              etrg: "hide",
              etag: "dwell,stop",
              jse: "window.pagehide",
            },
            "visibilitychange-hidden": {
              state: "stop",
              etrg: "hide",
              etag: "dwell,stop",
              jse: "document.visibilitychange",
            },
            beforeunload: {
              state: "stop",
              etrg: "close",
              etag: "dwell,stop",
              jse: "window.beforeunload",
            },
          },
          i = "start";
        z = ge();
        var r, s;
        typeof document.hidden < "u"
          ? ((r = "hidden"), (s = "visibilitychange"))
          : typeof document.mozHidden < "u"
            ? ((r = "mozHidden"), (s = "mozvisibilitychange"))
            : typeof document.msHidden < "u"
              ? ((r = "msHidden"), (s = "msvisibilitychange"))
              : typeof document.webkitHidden < "u" &&
                ((r = "webkitHidden"), (s = "webkitvisibilitychange"));
        var d = function (m) {
          var _ = "",
            A = m.type;
          if (
            (m.type == s &&
              (document[r]
                ? (A = "visibilitychange-hidden")
                : (A = "visibilitychange-visible")),
            n.hasOwn(e, A) && (_ = e[A].state),
            _.length != 0)
          ) {
            if (i == _) {
              O("dwell: -- state already " + i + " (event=" + A + ")");
              return;
            }
            i = _;
            var l = e[A];
            O("dwell: change state to " + i + " (event=" + A + ")");
            var f = {
              etrg: l.etrg,
              outcm: "window",
              usergenf: 1,
              etag: l.etag,
              A_jse: l.jse,
            };
            i === "start" &&
              ((z = ge()),
              $ != null && ((f.A_prets = $.ts), (f.A_prems = $.ms))),
              i === "stop" &&
                (($ = ge()),
                z != null && ((f.A_prets = z.ts), (f.A_prems = z.ms)),
                n.rmEvent(window, "beforeunload", d)),
              Le("dwell", f, "");
          }
        };
        for (var u in e) e.hasOwnProperty(u) && n.addEvent(window, u, d);
        n.addEvent(window, s, d),
          (this.set_state = function (m) {
            i = m;
          }),
          (this.start_dwell = function () {
            return i === "start"
              ? (O("dwell: -- state already " + i), !1)
              : ((i = "start"), (z = ge()), !0);
          }),
          (this.stop_dwell = function () {
            return (
              n.rmEvent(window, "beforeunload", d),
              i === "stop"
                ? (O("dwell: -- state already " + i), !1)
                : ((i = "stop"), ($ = ge()), !0)
            );
          }),
          (this.destroy = function () {
            for (var m in e) e.hasOwnProperty(m) && n.rmEvent(window, m, d);
            n.rmEvent(window, s, d);
          });
      }
      var Qe = 0;
      function We(e, i) {
        var r = 10;
        if (!window.performance || !window.performance.timing) return;
        var s = e ? e.perf_navigationtime || 0 : a.perf_navigationtime || 0,
          d = e ? e.perf_resourcetime || 0 : a.perf_resourcetime || 0,
          u = e ? e.perf_commontime || null : a.perf_commontime || null,
          m = e ? e.perf_usertime || null : a.perf_usertime || null;
        if (s < 1 && d < 1 && !u && !m) return;
        var _ = n.hasOwn(a.sample, "perf_navigationtime")
            ? a.sample.perf_navigationtime
            : 100,
          A = n.hasOwn(a.sample, "perf_resourcetime")
            ? a.sample.perf_resourcetime
            : 100,
          l = n.samplingSuccess(_),
          f = n.samplingSuccess(A);
        if (!l && !f) return;
        function p() {
          var k = Ct(s, d, u, m, l, f),
            U = new V(k);
          typeof i == "object" && U.absorb(i);
          var B = he(0, "pageperf", U.getAll(), "");
          ne.sendEvents(B);
        }
        if (
          (s > 0 || d > 0) &&
          window.performance.timing.loadEventStart === 0 &&
          ((Qe += r), Qe <= 200)
        ) {
          setTimeout(function () {
            We(e, i);
          }, r);
          return;
        }
        p();
      }
      function Ct(e, i, r, s, d, u) {
        var m = {},
          _ = window.performance.timing;
        if (
          (d &&
            e > 0 &&
            (le(_.responseStart, _.navigationStart, m, "A_pfb"),
            le(_.responseEnd, _.responseStart, m, "A_pbp"),
            le(_.responseEnd, _.requestStart, m, "A_psr"),
            le(_.loadEventStart, _.navigationStart, m, "A_pol"),
            le(_.domInteractive, _.navigationStart, m, "A_pdi")),
          d &&
            e > 1 &&
            (le(_.redirectEnd, _.redirectStart, m, "A_prd"),
            le(_.domainLookupEnd, _.domainLookupStart, m, "A_pdl"),
            le(_.connectEnd, _.secureConnectionStart, m, "A_psh"),
            le(_.connectEnd, _.connectStart, m, "A_psc"),
            le(_.loadEventStart, _.responseEnd, m, "A_pfe")),
          u && i > 0 && typeof window.performance.getEntries < "u")
        ) {
          var A = [],
            l = window.performance.getEntries();
          l.sort(function (W, ae) {
            return W.duration > ae.duration
              ? -1
              : W.duration < ae.duration
                ? 1
                : 0;
          });
          for (var f = l.slice(0, 10), p = f.length, k = 0; k < p; k++) {
            var U = {},
              B = f[k].name.replace(/\?.+$/, "");
            (B = B.replace(/^.+\//, "")),
              (U.name = B),
              (U.dur = Math.floor(f[k].duration)),
              (U.st = Math.floor(f[k].startTime)),
              A.push(U);
          }
          m.A_res = n.sfy(A);
        }
        if (
          (r &&
            (n.hasOwn(r, "initialPageLoad") &&
              (m.A_cmi = n.sfy(r.initialPageLoad)),
            n.hasOwn(r, "afterPageLoad") && (m.A_cma = n.sfy(r.afterPageLoad))),
          s)
        )
          for (var G = ["utm"], k = 0; k < G.length; k++)
            n.hasOwn(s, G[k]) && (m.A_utm = n.sfy(s[G[k]]));
        return (
          (m.etrg = "backgroundPost"),
          (m.outcm = "performance"),
          (m.usergenf = 0),
          (m.etag = "performance"),
          m
        );
      }
      function le(e, i, r, s) {
        if (typeof e == "number" && typeof i == "number" && i > 0 && e > i) {
          var d = e - i;
          d < Date.now() && (r[s] = d);
        }
      }
      function St() {
        if (document.visibilityState == "prerender") {
          var e = {
              etrg: "prerender",
              outcm: "page",
              usergenf: 0,
              etag: "prerender",
            },
            i = he(0, "prerender", e, "");
          ne.sendEvents(i);
        }
      }
      var z = null,
        $ = null;
      function Lt() {
        a.useIntersectionObserver && C.createObservers(),
          a.dwell_on && (Q = new Rt()),
          ct(),
          O("tracked_mods:", a.tracked_mods),
          O("tracked_mods_viewability:", a.tracked_mods_viewability);
        var e = te.addModules(a.tracked_mods, !1),
          i = te.addModules(a.tracked_mods_viewability, a.viewability);
        if (a.pageview_on_init) {
          var r = e.concat(i),
            s = r.length ? { event: he("contentmodification", "", {}) } : null;
          ne.sendRapidNoDelay(e.concat(i), a.client_only, {}, s);
        }
        a.prerender && St(),
          n.executeOnLoad(function () {
            a.apv && (j = new Be()), We();
          });
      }
      Lt(), ot(a.tag_id);
      var Dt = { utils: n },
        Ye = {
          init: function () {},
          beaconEvent: function (e, i, r, s) {
            Le(e, i, r, s);
          },
          beaconClick: function (e, i, r, s, d, u, m) {
            O("beaconClick: sec=", e, "slk=", i, "options=", m, "callback=", u),
              !s && d && (s = {});
            var _ = {};
            if (
              (d && ((s.outcm = d), (_.outcm = d)),
              m && m.pp && n.aug(_, m.pp),
              m && m.dwell && a.dwell_on)
            ) {
              var A = m.dwell;
              (A === "start" || A === "stop") &&
                (A === "start"
                  ? Q.start_dwell() &&
                    ((_.etag = "dwell," + A),
                    (_.usergenf = 1),
                    (_.A_prets = $ ? $.ts : null),
                    (_.A_prems = $ ? $.ms : null))
                  : Q.stop_dwell() &&
                    ((_.etag = "dwell," + A),
                    (_.usergenf = 1),
                    (_.A_prets = z ? z.ts : null),
                    (_.A_prems = z ? z.ms : null)));
            }
            var l = bt(e, i, r, s, d);
            (l.pp = _), ne.sendClick(l, u);
          },
          addModuleAPV: function (e) {
            return new Be(e);
          },
          beaconAPV: function (e, i) {
            pe({ A_apv: 1, A_apx: e || 0, A_asd: i || 0 }, !1, !0);
          },
          addTargetedModuleViewabilityManager: function (e) {
            return new je(e);
          },
          addModules: C.addModules,
          addModulesWithViewability: C.addModulesWithViewability,
          trackModuleProgression: Xe,
          addModuleProgression: Xe,
          endModuleProgression: kt,
          refreshModule: C.refreshModules,
          reevaluateModulesViewability: C.reevaluateModulesViewability,
          removeModule: C.removeModule,
          isModuleTracked: C.isModuleTracked,
          addRegions: C.addRegions.bind(C),
          removeRegions: C.removeRegions.bind(C),
          removeAllRegions: C.removeAllRegions.bind(C),
          disableRegions: C.disableRegions.bind(C),
          disableAllRegions: C.disableAllRegions.bind(C),
          enableRegions: C.enableRegions.bind(C),
          enableAllRegions: C.enableAllRegions.bind(C),
          refreshRegions: C.refreshRegions.bind(C),
          destroy: function () {
            O("destroy called"),
              te.destroy(),
              j && (j.destroy(), (j = null)),
              C && (C.destroy(), (C = null)),
              Q && (Q.destroy(), (Q = null));
          },
          reInit: function (e) {
            if (
              (O("reInit called with: " + n.fData(e)),
              (e = e || {}),
              !e.spaceid)
            ) {
              ve("Invalid spid in reInit config: " + n.fData(e));
              return;
            }
            e._vuidList || (e._vuidList = x.get("_vuidList")),
              (x = new V()),
              (S.keys = x),
              (a = Ue(e)),
              Me(a.keys.getAll()),
              (S.conf = a),
              (n = Ze(e)),
              new L(x);
          },
          setRapidAttribute: function (e) {
            if (
              (e.ncid && ((a.ncid = e.ncid), _e(a)),
              e.keys && a.keys.absorb(e.keys),
              e.spaceid && (a.spaceid = e.spaceid),
              e.referrer && (a.referrer = e.referrer),
              e.A_sid && (a.keys.set("A_sid", e.A_sid), (a.persist_asid = !0)),
              e.accountGUID && (a.accountGUID = e.accountGUID),
              e.customUID)
            ) {
              var i = e.customUID;
              if (typeof i == "object" && i.type && i.id) {
                var r = i.type;
                dt[r]
                  ? (a.customUID = n.aug({}, e.customUID))
                  : console.error('customUID type: "' + r + '", is not valid');
              } else
                console.error(
                  'customUID must be an Object with "id" and "type"',
                );
            }
            e.location &&
              ((a.loc = e.location), a.keys.set("_w", n.rmProto(e.location))),
              n.hasOwn(e, "apv") &&
                (e.apv
                  ? j
                    ? j.reInit()
                    : (j = new Be())
                  : j && (j.destroy(), (j = null))),
              Me(a.keys.getAll());
          },
          getRapidAttribute: function (e) {
            switch (e) {
              case "accountGUID":
                return a.accountGUID;
              case "customUID":
                return n.aug({}, a.customUID);
              case "spaceid":
                return a.spaceid;
              case "keys":
                return n.aug({}, a.keys.getAll());
              default:
                return null;
            }
          },
          setAccountGUID: function (e) {
            this.setRapidAttribute({ accountGUID: e });
          },
          getAccountGUID: function () {
            return this.getRapidAttribute("accountGUID");
          },
          clearAccountGUID: function () {
            this.clearRapidAttribute(["accountGUID"]);
          },
          setCustomUID: function (e) {
            this.setRapidAttribute({ customUID: e });
          },
          getCustomUID: function () {
            return this.getRapidAttribute("customUID");
          },
          clearCustomUID: function () {
            this.clearRapidAttribute(["customUID"]);
          },
          clearRapidAttribute: function (e) {
            for (var i in e)
              if (e[i] === "keys") {
                var r = a.keys.get("_w"),
                  s = a.keys.get("A_sid");
                (a.keys = new V()), a.keys.set("_w", r), a.keys.set("A_sid", s);
              } else
                e[i] === "referrer"
                  ? (a.referrer = "")
                  : e[i] === "A_sid"
                    ? (a.keys.set("A_sid", ""), (a.persist_asid = !0))
                    : e[i] === "location"
                      ? ((a.loc = ""), a.keys.set("_w", ""))
                      : e[i] === "accountGUID"
                        ? (a.accountGUID = null)
                        : e[i] === "customUID" && (a.customUID = null);
          },
          beaconPageview: function (e) {
            pe(e, !0);
          },
          beaconRouteChange: function (e) {
            O("beaconRouteChange()", e),
              a.dwell_on &&
                Q.stop_dwell() &&
                Le(
                  "dwell",
                  {
                    etag: "dwell,stop",
                    usergenf: 1,
                    A_prets: z ? z.ts : null,
                    A_prems: z ? z.ms : null,
                  },
                  "",
                ),
              this.clearRapidAttribute(["keys"]),
              this.setRapidAttribute(e),
              pe();
          },
          beaconECommerce: function () {},
          beaconInternalSearch: function () {},
          getCurrentSID: function () {
            return x.get("A_sid");
          },
          notifyHistoryPushStateCalled: function () {},
          beaconLinkViews: function (e, i, r, s) {
            O("beaconLinkViews() called"), (r = r || {});
            var d = {};
            r.pp && n.aug(d, r.pp);
            var u = !1;
            switch (i) {
              case 1:
              case "1":
              case !0:
                u = !0;
                break;
              default:
                (u = !1), (r.event = he("contentmodification", "", {}));
                break;
            }
            if (!a.yql_enabled) {
              O("LVs is are disable when geo only"), u && pe(d, !1);
              return;
            }
            if (
              (r &&
                r.event &&
                u &&
                (ve("Cannot track event type and pageview at same time."),
                (r.event = null)),
              !(e.length === 0 && !r.event))
            ) {
              for (var m = [], _ = 0; _ < e.length; _++) {
                var A = e[_],
                  l = new X();
                l.absorb_filter(A, function (W) {
                  return W != "sec" && W != "_links";
                });
                for (var f = [], p = 1, k = 0; k < A._links.length; k++) {
                  var U = A._links[k],
                    B = {
                      viewable: !0,
                      data: { sec: A.sec, _p: p++, A_lv: 2 },
                    };
                  n.aug(B.data, U), f.push(B);
                }
                var G = {
                  moduleName: A.sec,
                  moduleYLK: l,
                  links: f,
                  identifier: A.sec,
                };
                m.push(G);
              }
              r.hasDOMElement &&
                (S.beaconedLinkViews && Array.isArray(S.beaconedLinkViews)
                  ? (S.beaconedLinkViews = S.beaconedLinkViews.concat(m))
                  : (S.beaconedLinkViews = m)),
                (u || r.event || r.pp) &&
                  r.event &&
                  r.event.data &&
                  n.aug(d, r.event.data),
                ne.sendRapidNoDelay(m, u, d, r),
                s && s.call();
            }
          },
          beaconLinkViewsWithDOM: function (e, i, r, s) {
            var d = n.aug({}, r),
              u = n.aug(d, { hasDOMElement: !0 });
            this.beaconLinkViews(e, i, u, s);
          },
          beaconPerformanceData: function (e, i) {
            We(e, i);
          },
          nextVuid: function () {
            return ke(), we(x.get("_vuidList") || "")[0];
          },
          __test_only__: function () {
            return Dt;
          },
        };
      return ee.push({ state: S, instance: Ye }), ee.length === 1 && ce(Ye), Ye;
      function Ze(e) {
        var i = navigator.userAgent,
          r = Object.prototype,
          s = i.match(/MSIE\s[^;]*/) || i.match(/Trident\/[^;]*/) ? 1 : 0,
          d = /KHTML/.test(i) ? 1 : 0,
          u = i.match(/(iPhone|iPad|iPod)/gi) !== null;
        i.indexOf("Android") > -1;
        var m = u && i.match(/AppleWebKit/) !== null,
          _ = i.match(/AppleWebKit/) !== null && i.match(/Chrome/) === null,
          A = new RegExp(/\ufeff|\uffef|[\u0000-\u001f]|[\ue000-\uf8ff]/g),
          l = new RegExp(/[\u007f-\u00a0]|\s{2,}/g),
          f = "http://",
          p = "https://",
          k = "class",
          U = " ",
          B = -1,
          G = ["A_res", "A_cmi", "A_cma", "A_utm"],
          W = -1,
          ae = window.location.protocol === "https:";
        return (
          s &&
            (document.documentMode
              ? (W = document.documentMode)
              : ((W = 5),
                document.compatMode &&
                  document.compatMode == "CSS1Compat" &&
                  (W = 7))),
          {
            ca: "%01",
            cb: "%02",
            cc: "%03",
            cd: "%04",
            ce: "%05",
            cf: "%06",
            cg: "%07",
            ch: "%08",
            ylk_kv_delim: e.ylk_kv_delim || ":",
            ylk_pair_delim: e.ylk_pair_delim || ";",
            DATA_ACTION: "data-action",
            data_action_outcome: "data-action-outcome",
            isIE: s,
            isIOSSafari: m,
            isSafari: _,
            isWebkit: d,
            ieV: W,
            value_len_whitelist: G,
            hasOwn: function (t, o) {
              return r.hasOwnProperty.call(t, o);
            },
            enc: encodeURIComponent,
            dec: decodeURIComponent,
            getQueryStringValue: function (t, o) {
              return decodeURIComponent(
                t.replace(
                  new RegExp(
                    "^(?:.*[&\\?]" +
                      encodeURIComponent(o).replace(/[\.\+\*]/g, "\\$&") +
                      "(?:\\=([^&]*))?)?.*$",
                    "i",
                  ),
                  "$1",
                ),
              );
            },
            curProto: function () {
              return ae ? p : f;
            },
            isSecure: function () {
              return ae;
            },
            isScrollHorizontalVisible: function (o) {
              var o = o || document.documentElement;
              return o.scrollWidth > o.clientWidth;
            },
            getCompStyle: function (t, o) {
              return window.getComputedStyle !== void 0
                ? window.getComputedStyle(t, o)
                : ((this.el = t),
                  (this.getPropertyValue = function (c) {
                    var h = /(\-([a-z]){1})/g;
                    return (
                      c == "float" && (c = "styleFloat"),
                      h.test(c) &&
                        (c = c.replace(h, function () {
                          return arguments[2].toUpperCase();
                        })),
                      t.currentStyle[c] ? t.currentStyle[c] : 0
                    );
                  }),
                  this);
            },
            getBorder: function (t, o) {
              if (!t || !o) return 0;
              var c = parseInt(
                this.getCompStyle(t, null).getPropertyValue(o),
                10,
              );
              return isNaN(c) && (c = 0), c;
            },
            getElementHeight: function (t) {
              if (!t) return 0;
              var o = t.offsetHeight || 0;
              return o
                ? o -
                    this.getBorder(t, "border-top-width") -
                    this.getBorder(t, "border-bottom-width")
                : 0;
            },
            getPositionTop: function (t) {
              for (var o = 0; t; ) (o += t.offsetTop), (t = t.offsetParent);
              return o;
            },
            getScrollbarWidthHeight: function () {
              var t = this.make("div");
              (t.style.overflow = "scroll"),
                (t.style.visibility = "hidden"),
                (t.style.position = "absolute"),
                (t.style.width = "100px"),
                (t.style.height = "100px"),
                document.body.appendChild(t);
              var o = {
                width: t.offsetWidth - t.clientWidth,
                height: t.offsetHeight - t.clientHeight,
              };
              return this.rmBodyEl(t), o;
            },
            getElementViewDeltaAndMax: function (t) {
              var o = t.getBoundingClientRect(),
                c = o.top,
                h = o.height,
                y = this.getViewableHeight(),
                T = Math.min(Math.max(y - c, 0), h);
              return { delta: Math.floor(T), max: Math.floor(h) };
            },
            isInView: function (t, o) {
              if (s && W <= 7) return !0;
              if (!c(t)) return !1;
              function c(E) {
                const I = n.getCompStyle(E);
                return !(
                  I.visibility == "hidden" ||
                  I.display == "none" ||
                  !(
                    E.offsetWidth ||
                    E.offsetHeight ||
                    E.getClientRects().length
                  )
                );
              }
              function h(E) {
                var I = E.getBoundingClientRect(),
                  q = I.left,
                  v = I.top,
                  g = E.clientWidth / 2,
                  w = E.clientHeight / 2;
                return { x: q + g, y: v + w };
              }
              function y(E, I) {
                var q = h(E),
                  v = q.x,
                  g = q.y,
                  w = I.getBoundingClientRect(),
                  b = w.left,
                  R = w.right,
                  M = w.top,
                  H = w.bottom;
                return v >= b && v <= R && g >= M && g <= H;
              }
              function T(E) {
                var I = h(E),
                  q = I.x,
                  v = I.y,
                  g = n.getViewableHeight(),
                  w = n.getViewableWidth();
                return q >= 0 && q <= w && v >= 0 && v <= g;
              }
              return o !== window ? y(t, o) && T(t) : T(t);
            },
            strip: function (t) {
              for (
                var o = { "/": "P", ";": "1", "?": "P", "&": "1", "#": "P" },
                  c = { url: t, clean: "", cookie: "", keys: [] },
                  h = 0;
                t.indexOf("_yl", h) !== -1;

              ) {
                var y = t.indexOf("_yl", h);
                if (
                  (h < y && (c.clean += t.slice(h, y - 1)),
                  (h = y + 3),
                  o[t.charAt(y - 1)] && t.charAt(y + 4) === "=")
                ) {
                  c.ult = 1;
                  var T = "_yl" + t.charAt(y + 3),
                    E = "";
                  for (y = y + 5; y < t.length && !o[t.charAt(y)]; y++)
                    E += t.charAt(y);
                  c.keys.push(T),
                    (c[T] = E),
                    T !== "_ylv" && (c.cookie += "&" + T + "=" + E),
                    o[t.charAt(y)] &&
                      o[t.charAt(y)] === "P" &&
                      (c.clean += t.charAt(y)),
                    (h = y + 1);
                } else c.clean += t.slice(y - 1, h);
              }
              return (
                c.ult &&
                  ((c.cookie = c.cookie.substr(1)), (c.clean += t.substr(h))),
                c
              );
            },
            prevDef: function (t) {
              t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
            },
            appBodyEl: function (t) {
              document.body.appendChild(t);
            },
            rmBodyEl: function (t) {
              document.body.removeChild(t);
            },
            sa: function (t, o, c) {
              t.setAttribute(o, c);
            },
            getScrollY: function (t) {
              return t && t !== window
                ? t.scrollTop
                : window.pageYOffset !== void 0
                  ? window.pageYOffset
                  : (
                      document.documentElement ||
                      document.body.parentNode ||
                      document.body
                    ).scrollTop;
            },
            make: function (t, o) {
              var c = document.createElement(t);
              if (o && this.isObj(o)) for (var h in o) this.sa(c, h, o[h]);
              return c;
            },
            getXHR: function () {
              var t = [
                function () {
                  return new XMLHttpRequest();
                },
                function () {
                  return new ActiveXObject("Msxml2.XMLHTTP");
                },
                function () {
                  return new ActiveXObject("Msxml3.XMLHTTP");
                },
                function () {
                  return new ActiveXObject("Microsoft.XMLHTTP");
                },
              ];
              function o() {
                for (var c = !1, h = t.length, y = 0; y < h; y++) {
                  try {
                    c = t[y]();
                  } catch {
                    continue;
                  }
                  break;
                }
                return c;
              }
              return o();
            },
            hasLS: function () {
              try {
                return "localStorage" in window && window.localStorage !== null;
              } catch {
                return !1;
              }
            },
            hasCORS: function () {
              return s && W < 10
                ? !1
                : "withCredentials" in new XMLHttpRequest()
                  ? !0
                  : typeof XDomainRequest < "u";
            },
            hasWorkers: function () {
              return !!window.Worker;
            },
            clearCookie: function (t, o, c) {
              (o = o || "/"), (c = c || "");
              try {
                document.cookie =
                  t +
                  "= ; path=" +
                  o +
                  "; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Domain=" +
                  c +
                  ";";
              } catch (h) {
                console.warn("Rapid Was Prevented From Accessing Cookies:", h);
              }
            },
            uniqConcat: function (t, o, c) {
              var h = [],
                y = {};
              function T(E) {
                for (var I = 0, q = E.length; I < q; I++) {
                  var v = E[I];
                  if (v) {
                    var g = c(v);
                    y[g] || ((y[g] = 1), h.push(v));
                  }
                }
              }
              return T(t), T(o), h;
            },
            trim: function (t) {
              return t && t.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
            },
            extDomain: function (t) {
              var o = t.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
              return o && o[1];
            },
            getAttribute: function (t, o) {
              var c = "";
              return (
                !document.documentElement.hasAttribute &&
                  o === k &&
                  (o = "className"),
                t && t.getAttribute && (c = t.getAttribute(o, 2)),
                c
              );
            },
            isDate: function (t) {
              return r.toString.call(t) === "[object Date]";
            },
            isArr: function (t) {
              return r.toString.apply(t) === "[object Array]";
            },
            isStr: function (t) {
              return typeof t == "string";
            },
            isNum: function (t) {
              return typeof t == "number" && isFinite(t);
            },
            isNumeric: function (t) {
              return (
                t - 0 == t && (t + "").replace(/^\s+|\s+$/g, "").length > 0
              );
            },
            isObj: function (t) {
              return t && typeof t == "object";
            },
            rTN: function (t) {
              try {
                if (t && t.nodeType === 3) return t.parentNode;
              } catch (o) {
                ve(o);
              }
              return t;
            },
            getTarget: function (t) {
              var o = t.target || t.srcElement;
              return (
                o &&
                  !o.nodeName &&
                  (o.correspondingUseElement &&
                  o.correspondingUseElement.parentNode
                    ? (o = o.correspondingUseElement.parentNode)
                    : (o = null)),
                this.rTN(o)
              );
            },
            addEvent: function (t, o, c) {
              t.addEventListener
                ? t.addEventListener(o, c, !1)
                : t.attachEvent && t.attachEvent("on" + o, c);
            },
            rmEvent: function (t, o, c) {
              t.removeEventListener
                ? t.removeEventListener(o, c, !1)
                : t.detachEvent && t.detachEvent("on" + o, c);
            },
            aug: function (t, o, c) {
              if (!o) return t;
              for (var h in o)
                if (this.hasOwn(o, h)) {
                  if (c && !c.call(null, h, o[h])) continue;
                  t[h] = o[h];
                }
              return t;
            },
            rmProto: function (t) {
              return t
                ? t.substr(0, 7) === f
                  ? t.substr(7, t.length)
                  : t.substr(0, 8) === p
                    ? t.substr(8, t.length)
                    : t
                : "";
            },
            norm: function (t) {
              return t === null
                ? ""
                : ((t = "" + t), this.trim(t.replace(l, " ").replace(A, "")));
            },
            _hasClass: function (t, o) {
              var c = !1,
                h;
              return (
                t &&
                  o &&
                  ((h = this.getAttribute(t, k) || ""),
                  o.exec
                    ? (c = o.test(h))
                    : (c = o && (U + h + U).indexOf(U + o + U) > -1)),
                c
              );
            },
            hasClass: function (t, o) {
              if (this.isArr(o)) {
                for (var c = 0, h = o.length; c < h; c++)
                  if (this._hasClass(t, o[c])) return !0;
                return !1;
              } else return this.isStr(o) ? this._hasClass(t, o) : !1;
            },
            quote: function (t) {
              var o = /["\\\x00-\x1f\x7f-\x9f]/g,
                c = {
                  "\b": "\\b",
                  "	": "\\t",
                  "\n": "\\n",
                  "\f": "\\f",
                  "\r": "\\r",
                  '"': '\\"',
                  "\\": "\\\\",
                },
                h = '"',
                y = '"';
              if (t.match(o)) {
                var T = t.replace(o, function (E) {
                  var I = c[E];
                  return typeof I == "string"
                    ? I
                    : ((I = E.charCodeAt()),
                      "\\u00" +
                        Math.floor(I / 16).toString(16) +
                        (E % 16).toString(16));
                });
                return h + T + h;
              }
              return y + t + y;
            },
            sfy: function (t) {
              if (!t && t !== "") return {};
              var o,
                c = typeof t;
              if (c === "undefined") return "undefined";
              if (c === "number" || c === "boolean") return "" + t;
              if (c === "string") return this.quote(t);
              if (typeof t.toJSON == "function") return this.sfy(t.toJSON());
              if (this.isDate(t)) {
                var h = t.getUTCMonth() + 1,
                  y = t.getUTCDate(),
                  T = t.getUTCFullYear(),
                  E = t.getUTCHours(),
                  I = t.getUTCMinutes(),
                  q = t.getUTCSeconds(),
                  v = t.getUTCMilliseconds();
                return (
                  h < 10 && (h = "0" + h),
                  y < 10 && (y = "0" + y),
                  E < 10 && (E = "0" + E),
                  I < 10 && (I = "0" + I),
                  q < 10 && (q = "0" + q),
                  v < 100 && (v = "0" + v),
                  v < 10 && (v = "0" + v),
                  '"' +
                    T +
                    "-" +
                    h +
                    "-" +
                    y +
                    "T" +
                    E +
                    ":" +
                    I +
                    ":" +
                    q +
                    "." +
                    v +
                    'Z"'
                );
              }
              if (((o = []), this.isArr(t))) {
                for (var g = 0, w = t.length; g < w; g++)
                  o.push(this.sfy(t[g]));
                return "[" + o.join(",") + "]";
              }
              if (c === "object") {
                for (var b in t)
                  if (this.hasOwn(t, b)) {
                    var R = typeof b,
                      M = null;
                    if (R === "string") M = this.quote(b);
                    else if (R === "number") M = '"' + b + '"';
                    else continue;
                    if (
                      ((R = typeof t[b]), R !== "function" && R !== "undefined")
                    ) {
                      var H = "";
                      t[b] === null
                        ? (H = '""')
                        : t[b] === 0
                          ? (H = 0)
                          : (H = this.sfy(t[b])),
                        o.push(M + ":" + H);
                    }
                  }
                return "{" + o.join(",") + "}";
              }
            },
            toJSON: (function () {
              var t = null;
              return function (o) {
                return (
                  t ||
                    (t =
                      typeof JSON == "object" &&
                      JSON.stringify &&
                      W !== 6 &&
                      W !== 7 &&
                      W !== 8
                        ? JSON.stringify
                        : this.sfy),
                  t.call(this, o)
                );
              };
            })(),
            executeOnLoad: function (t) {
              var o = !1,
                c = function (T) {
                  (document.addEventListener ||
                    (T && T.type === "load") ||
                    document.readyState === "complete") &&
                    ((o = !0), h(), t.call(this));
                },
                h = function () {
                  document.addEventListener
                    ? (document.removeEventListener("DOMContentLoaded", c, !1),
                      window.removeEventListener("load", c, !1))
                    : (document.detachEvent("onreadystatechange", c),
                      window.detachEvent("onload", c));
                };
              if (document.readyState === "complete") setTimeout(c);
              else if (document.addEventListener)
                document.addEventListener("DOMContentLoaded", c, !1),
                  window.addEventListener("load", c, !1);
              else {
                document.attachEvent("onreadystatechange", c),
                  window.attachEvent("onload", c);
                var y = !1;
                try {
                  y = window.frameElement == null && document.documentElement;
                } catch {}
                y &&
                  y.doScroll &&
                  (function T() {
                    if (!o) {
                      try {
                        y.doScroll("left");
                      } catch {
                        return setTimeout(T, 50);
                      }
                      h(), t.call(this);
                    }
                  })();
              }
            },
            getLinkContent: function (t) {
              for (var o = 0, c = "", h; (h = t.childNodes[o]) && h; o++)
                h.nodeType === 1 &&
                  (h.nodeName.toLowerCase() === "img" &&
                    (c += (this.getAttribute(h, "alt") || "") + " "),
                  (c += this.getLinkContent(h)));
              return c;
            },
            fData: function (t) {
              return this.isStr(t) ? t : this.toJSON(t);
            },
            getLT: function (t, o) {
              if (!t) return "_";
              var c = "";
              o = o.toLowerCase();
              var h = t.nodeName.toLowerCase(),
                y = ["button", "submit"];
              if (h === "input") {
                var T = t.type.toLowerCase(),
                  E = n.hasClass(t, a.track_input);
                (y.indexOf(T) >= 0 || E) && (c = this.getAttribute(t, "value"));
              } else
                o === "text"
                  ? d
                    ? (c = t.textContent)
                    : (c = t.innerText ? t.innerText : t.textContent)
                  : o === "href"
                    ? (c = this.rmProto(this.getAttribute(t, "href")))
                    : (c = this.getAttribute(t, o) || "");
              return (
                (c = this.norm(c)),
                c === "" && (c = this.norm(this.getLinkContent(t))),
                c === "" ? "_" : c
              );
            },
            clref: function (t) {
              if (t.indexOf(f) !== 0 && t.indexOf(p) !== 0) return "";
              var o = this.strip(t);
              return o.clean || o.url;
            },
            cold: function () {
              return screen
                ? screen.colorDepth || screen.pixelDepth
                : "unknown";
            },
            sr: function () {
              return screen && screen.width && screen.height
                ? screen.width + "x" + screen.height
                : "";
            },
            vr: function () {
              return screen && screen.availHeight && screen.availWidth
                ? screen.availWidth + "x" + screen.availHeight
                : "";
            },
            dor: function () {
              return screen && screen.orientation && screen.orientation.type
                ? screen.orientation.type.indexOf("landscape") > -1
                  ? 1
                  : 0
                : "";
            },
            getViewableHeight: function () {
              return (
                window.innerHeight ||
                document.documentElement.clientHeight ||
                document.body.clientHeight ||
                0
              );
            },
            getViewableWidth: function () {
              return (
                window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth ||
                0
              );
            },
            clientDimensions: function () {
              var t = (document && document.documentElement) || null,
                o = (t && t.clientHeight) || null,
                c = (t && t.clientWidth) || null;
              return {
                height: o == null || o == null ? 0 : o,
                width: c == null || c == null ? 0 : c,
              };
            },
            windowInnerDimensions: function () {
              var t = window && window.innerHeight,
                o = window && window.innerWidth;
              return {
                height: t == null || t == null ? 0 : t,
                width: o == null || o == null ? 0 : o,
              };
            },
            windowOuterDimensions: function () {
              var t = window && window.outerHeight,
                o = window && window.outerWidth;
              return {
                height: t == null || t == null ? 0 : t,
                width: o == null || o == null ? 0 : o,
              };
            },
            ib: function () {
              try {
                var t = this.clientDimensions(),
                  o = this.windowInnerDimensions(),
                  c = o.width || t.width || 0,
                  h = o.height || t.height || 0;
                return c + "x" + h;
              } catch {
                return "0x0";
              }
            },
            ob: function () {
              try {
                var t = this.clientDimensions(),
                  o = this.windowOuterDimensions(),
                  c = o.width || t.width || 0,
                  h = o.height || t.height || 0;
                return c + "x" + h;
              } catch {
                return "0x0";
              }
            },
            srr: function () {
              return window && window.devicePixelRatio
                ? window.devicePixelRatio
                : "1";
            },
            xy: function (t) {
              function o() {
                var T = document.documentElement,
                  E = document.body;
                return T && (T.scrollTop || T.scrollLeft)
                  ? [T.scrollTop, T.scrollLeft]
                  : E
                    ? [E.scrollTop, E.scrollLeft]
                    : [0, 0];
              }
              var c = null,
                h = t.pageX,
                y = t.pageY;
              return (
                s && (c = o()),
                !h && h !== 0 && ((h = t.clientX || 0), s && (h += c[1])),
                !y && y !== 0 && ((y = t.clientY || 0), s && (y += c[0])),
                h + "," + y
              );
            },
            hasCC: function (t) {
              for (var o = 0, c = t.length; o < c; o++) {
                var h = t.charCodeAt(o);
                if (h < 32 || h === "=") return !0;
              }
              return !1;
            },
            isValidPair: function (t, o) {
              return n.in_value_whitelist(t)
                ? !0
                : t.length <= 0 || t.length > 32
                  ? (n.ldbg &&
                      console.warn(
                        "Invalid key (" + t + ") length. Keys Must be <=32.",
                      ),
                    !1)
                  : !0;
            },
            ser: function (t, o) {
              if (!t) return "";
              typeof o === void 0 && (o = !0);
              var c = [],
                h = "";
              for (var y in t)
                if (this.hasOwn(t, y)) {
                  var T = y,
                    E = t[y];
                  if (
                    T === null ||
                    E === null ||
                    ((T = T + ""), (E = E + ""), !this.isValidPair(T, E))
                  )
                    continue;
                  if (!this.hasCC(T) && !this.hasCC(E)) {
                    (h = ""),
                      (E = this.trim(E)),
                      (E === "" || E === " ") && o && (E = "_");
                    try {
                      (h = this.enc(T + "" + E)), (h = h.replace(/'/g, "%27"));
                    } catch (I) {
                      (h = "_ERR_ENCODE_"), ve(I);
                    }
                    c.push(h);
                  }
                }
              return c.join(this.cd);
            },
            rand: function () {
              for (var t = 0, o = "", c = ""; t++ < 16; ) {
                var h = Math.floor(Math.random() * 62);
                h < 10
                  ? (c = h)
                  : (c = String.fromCharCode(h < 36 ? h + 55 : h + 61)),
                  (o += c);
              }
              return o;
            },
            tms: function () {
              return +new Date();
            },
            cookEn: function () {
              var t = navigator.cookieEnabled ? 1 : 0,
                o = "rapidtc";
              if (typeof navigator.cookieEnabled > "u" && !t)
                try {
                  (document.cookie = o + "=1"),
                    (t = document.cookie.indexOf("testcookie") != -1),
                    (document.cookie =
                      o + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;");
                } catch (c) {
                  console.warn(
                    "Rapid Was Prevented From Accessing Cookies:",
                    c,
                  );
                }
              return t;
            },
            isResCF: function (t) {
              var o = { 14: 1, 15: 1, 18: 1, 19: 1, 20: 1 };
              return o[t];
            },
            isTagOfInterest: function (t, o) {
              for (var c = 0, h = o.length; c < h; c++)
                if (t.tagName && t.tagName.toLowerCase() == o[c].toLowerCase())
                  return !0;
              return !1;
            },
            samplingSuccess: function (t) {
              var o = function (h) {
                  for (var y = 33554467, T = y, E = 0, I = h.length; E < I; E++)
                    (T +=
                      (T << 1) + (T << 4) + (T << 7) + (T << 8) + (T << 24)),
                      (T ^= h.charCodeAt(E));
                  return T < 0 && ((T &= 2147483647), (T += 2147483648)), T;
                },
                c = function (h) {
                  var y = 1e3;
                  h *= 10;
                  var T = new L(),
                    E = "" + T.getCookieByName("B");
                  return E ? (B < 0 && (B = o(E) % y), B < h) : !1;
                };
              return c(t);
            },
            in_value_whitelist: function (t) {
              return s && W <= 8 ? !1 : n.value_len_whitelist.indexOf(t) !== -1;
            },
          }
        );
      }
    };
  })();
});