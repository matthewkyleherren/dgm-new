!(function () {
  "use strict";
  const e =
    "undefined" != typeof window
      ? window
      : {
          assertive: {},
          benji: {},
          googletag: { cmd: [] },
          pbjs: { que: [] },
          YAHOO: {},
        };
  Promise.allSettled =
    Promise.allSettled ||
    ((e) =>
      Promise.all(
        e.map((e) =>
          e
            .then((e) => ({ status: "fulfilled", value: e }))
            .catch((e) => ({ reason: e, status: "rejected" })),
        ),
      ));
  const t = [
      "localhost",
      "aol.com",
      "aol.co.uk",
      "aol.de",
      "autoblog.com",
      "cricket.yahoo.sportz.io",
      "engadget.com",
      "yahoo.com",
      "yahoo.com.hk",
      "yahoo.com.tw",
    ].map((e) => `([\\.\\w\\-]+\\.)?${e.replace(/\./g, "\\.")}`),
    n = ["cricket.yahoo.net"].map((e) => e.replace(/\./g, "\\.")),
    i = new RegExp(`^https?://(${t.concat(n).join("|")})(:\\d+)?$`);
  const s = "initialize",
    o = "initialize_ack",
    r = "initialize_i13n",
    a = "intersect",
    c = "render",
    d = "resize_ad",
    l = "start_ads",
    h = "tab_focus",
    u = "block",
    g = "index",
    p = !0,
    f = "DOMContentLoaded",
    m = "testid",
    b = "ncid",
    y = "fr",
    E = "pg_name",
    _ = "type",
    I = "auto",
    v = "VERSION",
    A = { ATS_DIRECT: "_lr_atsDirect" };
  var S, C;
  !(function (e) {
    (e.DynamicAllocation = "Dynamic Allocation"),
      (e.DirectSold = "Direct Sold");
  })(S || (S = {})),
    (function (e) {
      (e.House = "House"),
        (e.YahooPrebid = "YahooPrebid"),
        (e.AdX = "AdX"),
        (e.Unknown = "Unknown");
    })(C || (C = {}));
  const T = {
      BankRateWidget: { size: [970, 350] },
      BankRateWidgetLarge: { size: [750, 600] },
      FeaturedBroker: { size: [758, 198] },
      FeaturedBrokerMweb: { size: [343, 310] },
      Horizon: {
        breakpoints: {
          "0,480": [16, 9],
          "1331,Infinity": [16, 3],
          "481,1330": [40, 9],
        },
        size: [3, 1],
      },
      Lighthouse: { breakpoints: { "0,Infinity": [9, 16] }, size: [2, 2] },
      SmartAssetWidgetLarge: { size: [800, 635] },
      Spotlight: { breakpoints: { "0,480": [8, 9] }, size: [3, 2] },
      TradeNow: { size: [280, 55] },
    },
    R = {
      "[1440,1024]": "Login",
      "[2,2]": "Lighthouse",
      "[280,55]": "TradeNow",
      "[3,1]": "Horizon",
      "[3,2]": "Spotlight",
      "[343,310]": "FeaturedBrokerMweb",
      "[758,198]": "FeaturedBroker",
    },
    L = `https://s.yimg.com/aaq/prebid/prebid-${v}.js`,
    w = "TABOOLA_PUBLISHERID_MACRO",
    P = `https://cdn.taboola.com/libtrc/${w}/loader.js`,
    k = "yPrebid-script",
    D = "none",
    B = "identityLink",
    O = "ads:finish:parse",
    N = "caas:article:init",
    j = "darla:complete",
    M = "wafer:ready",
    U = ["enableCtrldSRABatch", "enableRefreshDebounce", "enableYahooPrebid"],
    z = "impressionViewable",
    F = "slotOnload",
    x = "slotRenderEnded",
    G = "slotRequested",
    Y = "slotResponseReceived",
    $ = "slotVisibilityChanged",
    H = "nocontent",
    V = "render",
    q = "auctionEnd",
    W = "auctionInit",
    K = "bidWon",
    Q = {
      e0: "-e0",
      e1: "-e1",
      EIDS_URL: "idx.liadm.com",
      HB_UI_MOD: "hb_uid_mod",
      LI_OFF: "liveIntentId_off",
      LI_ON_ENRICHED: "liveintentid_on_enriched",
      LI_ON_NOT_ENRICHED: "liveintentid_on_not_enriched",
      LI_REPORTING_KEY: "li-module-enabled",
      LIVEINTENT_ID: "liveIntentId",
      LOCAL_STORAGE_KEY: "_li_pbid",
      NO_ID_SOLUTION: "no_id_solution",
      t0: "t0",
      t1: "t1",
    },
    J = { limitedAds: !0, restrictDataProcessing: !0 },
    X = { nonPersonalizedAds: !0 },
    Z = {
      AdX: [5285812218],
      House: [5286843762, 5335252228],
      YahooPrebid: [5462617191],
    },
    ee = "benji:render",
    te = "benji:mounted",
    ne = "benji:ready",
    ie = "tabFocus",
    se = "userAction",
    oe = {
      aol: "aol",
      att: "att",
      bizmail: "bizmail",
      frontier: "frontier",
      ftr: "frontier",
      rogers: "rogers",
      sbc: "att",
      sky: "sky",
      smallbiz: "bizmail",
      verizon: "verizon",
      ycorp: "ycorp",
    },
    re = [
      "abk",
      "axid",
      "cobrand",
      "colo",
      "device",
      "fr",
      "frtype",
      "lang",
      "lmsid",
      "lu",
      "ncid",
      "pct",
      "pd",
      E,
      "pstaid",
      "pt",
      "region",
      "site",
      "ubid",
      "ver",
    ];
  var ae, ce;
  !(function (e) {
    (e.att = "att"),
      (e.attarticles = "attarticles"),
      (e.aol = "aol"),
      (e.autoblog = "autoblog"),
      (e.autos = "autos"),
      (e.engadget = "engadget"),
      (e.entertainment = "entertainment"),
      (e.finance = "finance"),
      (e.fp = "fp"),
      (e.frontpage = "frontpage"),
      (e.gma = "gma"),
      (e.intheknow = "intheknow"),
      (e.lifestyle = "lifestyle"),
      (e.money = "money"),
      (e.movies = "movies"),
      (e.music = "music"),
      (e.news = "news"),
      (e.rivals = "rivals"),
      (e.sports = "sports"),
      (e.style = "style"),
      (e.tech = "tech"),
      (e.techcrunch = "techcrunch");
  })(ae || (ae = {})),
    (function (e) {
      (e.yahoo_mail = "yahoo_mail"),
        (e.aol_webmail = "aol_webmail"),
        (e.yahoo_rogers_mail = "yahoo_rogers_mail"),
        (e.yahoo_bizmail_mail = "yahoo_bizmail_mail"),
        (e.yahoo_att_mail = "yahoo_att_mail"),
        (e.yahoo_frontier_mail = "yahoo_frontier_mail"),
        (e.yahoo_verizon_mail = "yahoo_verizon_mail"),
        (e.yahoo_login = "yahoo_login"),
        (e.aol_login = "aol_login");
    })(ce || (ce = {}));
  const de = { ...ce, ...ae },
    le = new Set([ae.aol, ae.engadget, ae.techcrunch, ae.rivals, ae.autoblog]);
  var he;
  !(function (e) {
    e.validSite = "validSite";
  })(he || (he = {}));
  const ue = "scriptId",
    ge = `https://cadmus.script.ac/${ue}/script.js`,
    pe = `https://s.yimg.com/aaq/f10d509c/${ue}.js`,
    fe = !0,
    me = {
      [ae.aol]: "d3decajspqn3ue",
      [ae.autoblog]: "dy348zlstbwc5",
      [ae.autos]: "dy348zlstbwc5",
      [ae.engadget]: "dnt3mrnrwwk1",
      [ae.entertainment]: "d25harazjdfhwp",
      [ae.finance]: "d3lm64ch1c76ug",
      [ae.fp]: "d1ccw66oyq8ex2",
      [ae.frontpage]: "d1ccw66oyq8ex2",
      [ae.intheknow]: "dlt600z2q25zi",
      [ae.lifestyle]: "d12h8q03mwvikl",
      [ae.news]: "d1irmdsmbztlvx",
      [ae.rivals]: "d24s7e71jngyhb",
      [ae.sports]: "d2ftq0ol13ke77",
      [ae.style]: "d12h8q03mwvikl",
      [ae.techcrunch]: "d2wmmfwby4fr6i",
      [ce.yahoo_mail]: "d49ph8jz3wewg",
      [ce.yahoo_rogers_mail]: "d49ph8jz3wewg",
      [ce.yahoo_bizmail_mail]: "d49ph8jz3wewg",
      [ce.yahoo_att_mail]: "d49ph8jz3wewg",
      [ce.yahoo_frontier_mail]: "d49ph8jz3wewg",
      [ce.yahoo_verizon_mail]: "d49ph8jz3wewg",
      [ce.aol_webmail]: "d2uev3i365z5q8",
      [ce.yahoo_login]: "d1tqrs7vz94d9k",
      [ce.aol_login]: "d3axh5emg5ece0",
      default: "d9pmsg6mvxzz6",
      sandbox: "d22u7q1sccu6up",
    },
    be = [
      1183335650, 980787690, 1183336089, 959522530, 959524012, 980751813,
      980751814, 980751815, 1197806876, 959522366, 959524013, 1197808162,
      1197808163, 1197808164, 1183336116, 959523426, 1183336115, 959523395,
      1183336116, 959523426, 1197809770, 1197809715, 980751846, 980751848,
      980751850, 980751822, 980751847, 980751926, 980751927, 980751928,
      1197809825, 1197809826, 1197809827, 1197809822, 959523854, 959523856,
      1197809837, 1197809838, 1197809839, 1197809828, 1197809829, 1197809830,
      1197809832, 959523853, 959523839, 1197810892, 964048854, 964048856,
      1197810152, 1197810153, 1197810154, 1197803691, 1197806445, 1197806450,
      1197806455, 1197808880, 1197808881, 1197808882, 1197811195, 964049433,
      1197811201, 1197811194, 964049432, 1197811200, 1197811197, 1197811205,
      1197811203, 1197811196, 1197811204, 1197811202, 1197811191, 1197811192,
      1197811193, 1197811555, 1197811556, 1197811557, 1197811558, 1197811559,
      1197811560, 1197811613, 1197811614, 1197811615, 1184336193, 964024914,
      964023856, 1184336194, 964024915, 964024916, 1197812077, 963974959,
      963974961, 1197812080, 1197812078, 1197812079, 1197812081, 1197812082,
      1197812083, 963998854, 1183836193, 1197812150, 1197812146, 1197812128,
      1197812125, 1197812126, 1197812127, 1197812133, 1197812132, 1197812134,
      1197812129, 1197812130, 1197812131, 1187336201, 964298854, 1187336202,
      1197812153, 1197812154, 1197812155, 1197812156, 1197812157, 1197812158,
      1197812159, 1197812160, 1197812161, 1197812162, 1197812163, 1197812164,
    ];
  var ye;
  !(function (e) {
    (e.aol_webtest = "aol-webtest"),
      (e.validPublisherId = "validPublisher"),
      (e.yahooweb_network = "yahooweb-network"),
      (e.yahoo_aol_network = "yahoo-aol-network"),
      (e.yahoo_engadget_network = "yahoo-engadget-network"),
      (e.yahootwhk_network = "yahootwhk-network"),
      (e.yahoo_hp_att = "yahoo-hp-att");
  })(ye || (ye = {}));
  const Ee = { default: ye.aol_webtest, [he.validSite]: ye.validPublisherId },
    _e = { _rid: "yrid", lpstaid: "pstaid", partner: "cobrand" },
    Ie = [m, b, y, _],
    ve = { bucket: "bucket", hashtag: "hashtag" },
    Ae = [
      "abk",
      "axid",
      "bucket",
      "partner",
      "colo",
      "device",
      "lang",
      "lu",
      "region",
      "site",
      "ver",
      "axidDv360",
      "usercountry",
      "cobrand",
    ],
    Se = [m, b, y, _, E];
  var Ce;
  !(function (e) {
    (e.content = "content"),
      (e.home = "home"),
      (e.minihome = "minihome"),
      (e.utility = "utility");
  })(Ce || (Ce = {}));
  const Te = {
      [Ce.content]: "article",
      [Ce.home]: "homepage",
      [Ce.minihome]: "category",
      [Ce.utility]: "category",
    },
    Re = {
      [ae.att]: "yhp",
      [ae.attarticles]: "ynews",
      [ae.autos]: "yautos",
      [ae.engadget]: "eng",
      [ae.entertainment]: "yent",
      [ae.finance]: "yfin",
      [ae.fp]: "yhp",
      [ae.gma]: "ynews",
      [ae.lifestyle]: "ylife",
      [ae.money]: "yfin",
      [ae.movies]: "ymov",
      [ae.music]: "yent",
      [ae.news]: "ynews",
      [ae.sports]: "ysports",
      [ae.style]: "ylife",
      [ae.tech]: "ytech",
    },
    Le = [
      "commerceArticleType",
      "extractedKeyWords",
      "abk",
      "hashtag",
      "pct",
      "pd",
      E,
      "pt",
      "pubid",
      "spaceid",
      "lmsid",
      "pstaid",
      "lpstaid",
      "mchnm",
      "_rid",
      "ticker",
      "site",
      "sck",
      "url",
      "expn",
      "p_cpos",
      "senderdomain",
      "senderkaminolevel1",
      "senderkaminolevel2",
      "commercesiteid",
    ],
    we = ["ticker"],
    Pe = { fetchMarginPercent: -1, mobileScaling: -1, renderMarginPercent: 50 },
    ke = "RENDER_SUCCEEDED",
    De = "RENDER_FAILED",
    Be = "SLOT_REQUESTED",
    Oe = "GAM_AD_PAGE_LOAD_COMPLETE",
    Ne = "SLOT_RESPONSE_RECEIVED",
    je = "IMPRESSION_VIEWABLE",
    Me = "YPB_AD_STACK_RESOLVED",
    Ue = { allowOverlayExpansion: !1, allowPushExpansion: !1, sandbox: !0 };
  var ze;
  !(function (e) {
    (e.RESERVED = "RESERVED"), (e.STANDARD = "STANDARD");
  })(ze || (ze = {}));
  const Fe = [
      "sellPersonalInformation",
      "accountMatching",
      "crossDeviceMapping",
    ],
    xe = ["firstPartyAds"],
    Ge = [
      "firstPartyAds",
      "sellPersonalInformation",
      "accountMatching",
      "crossDeviceMapping",
    ],
    Ye = [
      "firstPartyAds",
      "sellPersonalInformation",
      "accountMatching",
      "crossDeviceMapping",
    ],
    $e = [
      "firstPartyAds",
      "sellPersonalInformation",
      "accountMatching",
      "crossDeviceMapping",
    ],
    He = { flush: !0 },
    Ve = ["newPageLoad"],
    qe = {
      "ads-combo-col2Bottom": ["LREC", "MON"],
      col2Bottom: ["LREC", "MON"],
      mid_right_stack: ["LREC", "MON"],
      top_right: ["300_250", "300_600"],
      top_right_stack: ["LREC", "MON"],
    },
    We = [
      "ay_floor",
      "ay_floor_m",
      "ay_floor_g",
      "ay_hash",
      "hb_adomain",
      "hb_adid",
      "hb_bidder",
      "hb_bidder_seatid",
      "hb_cache_host",
      "hb_cache_id",
      "hb_cache_path",
      "hb_cache_region",
      "hb_crid",
      "hb_deal",
      "hb_dsp",
      "hb_dt",
      "hb_format",
      "hb_pb",
      "hb_pb100",
      "hb_responsive",
      "hb_size",
      "hb_source",
      "hb_uid_mod",
      "hb_uuid",
      "expn",
      "p_cpos",
      "contentcategorypath",
    ],
    Ke = {
      analytics: {
        override: {
          normalizeSlotId: function (e) {
            return e.replace(
              /-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,
              "",
            );
          },
        },
        useHistoryChangeTrigger: !0,
      },
      entityId: "wnsrvBJmEPrTfrnFX",
      floor: {
        addToHashKey: !1,
        currency: "USD",
        enabled: !1,
        limit: { percentage: 0.95 },
        prebid: !0,
        priceBuckets: { increment: 0.01, max: 100, min: 0 },
      },
    },
    Qe = [
      "aol",
      "att",
      "autoblog",
      "engadget",
      "intheknow",
      "makers",
      "oath",
      "rivals",
      "techcrunch",
      "yahoo",
      "yahoosandbox",
      "compuserve",
      "github",
      "localhost",
      "netscape",
      "rivals-acceptance",
      "rivals-local",
      "rivals-staging",
      "wmconnect",
      "betterme-magazine",
      "olo-magazine",
    ],
    Je = "dv360",
    Xe = "gam",
    Ze = "tbla",
    et = "BENJI_START",
    tt = "GPT_READY",
    nt = "PREBID_START",
    it = "PREBID_AUCTION_READY",
    st = "PREBID_AUCTION_START",
    ot = "PREBID_AUCTION_END",
    rt = "GAM_FETCH",
    at = "GAM_RENDER_START",
    ct = "GAM_RENDER_END",
    dt = "playing",
    lt = "ended",
    ht = {
      api: [1, 2],
      linearity: 1,
      maxduration: 30,
      mimes: ["video/mp4", "application/x-mpegURL", "application/javascript"],
      placement: 4,
      playbackmethod: [6],
      protocols: [1, 2, 3, 4, 5, 6, 7, 8],
      skip: 0,
    },
    ut = [et, tt, nt, it, st, ot, rt, at, ct];
  function gt(t) {
    const n = 1e3 * t,
      i = new CustomEvent(ie);
    let s = !0,
      o = null;
    e.addEventListener("focus", () => {
      !s && o && Date.now() - o > n && e.dispatchEvent(i), (s = !0);
    }),
      e.addEventListener("blur", () => {
        (s = !1), (o = Date.now());
      });
  }
  const pt = "default";
  function ft(e, t, n) {
    let i,
      s,
      o,
      r,
      a = -1;
    if ("up" === n)
      for (i = e.top, s = e.bottom; i <= s; )
        (a = Math.floor((i + s) / 2)),
          (o = document.elementFromPoint(e.left, a)),
          o === t ? (s = a - 1) : (i = a + 1);
    else if ("down" === n)
      for (i = e.top, s = e.bottom; i <= s; )
        (a = Math.floor((i + s) / 2)),
          (o = document.elementFromPoint(e.left, a)),
          o === t ? (i = a + 1) : (s = a - 1);
    else if ("left" === n)
      for (i = e.left, s = e.right; i <= s; )
        (a = Math.floor((i + s) / 2)),
          (o = document.elementFromPoint(a, e.top)),
          o === t ? (s = a - 1) : (i = a + 1);
    else
      for (i = e.left, s = e.right; i <= s; )
        (a = Math.floor((i + s) / 2)),
          (o = document.elementFromPoint(a, e.top)),
          o === t ? (i = a + 1) : (s = a - 1);
    const c = "up" === n || "left" === n ? i : s;
    if (
      ((r =
        "up" === n || "down" === n
          ? document.elementFromPoint(e.left, c)
          : document.elementFromPoint(c, e.top)),
      r !== t)
    )
      throw new Error("Element is completely obstructed " + n);
    return c;
  }
  const mt = (t) => {
    if (!t) return !1;
    if (!((n = t).offsetWidth || n.offsetHeight || n.getClientRects().length))
      return !1;
    var n;
    const i = t.getBoundingClientRect(),
      s = e.innerWidth,
      o = e.innerHeight;
    if (i.top > o || i.bottom < 0 || i.right < 0 || i.left > s) return !1;
    const r = i.left < 0 ? 1 : i.left + 1,
      a = i.right > s ? s - 1 : i.right - 1,
      c = i.top > 0 ? i.top + 1 : 1,
      d = i.bottom > o ? o - 1 : i.bottom - 1,
      l = i.height * i.width;
    if (((d - c) * (a - r)) / l < 0.5) return !1;
    if (
      (function (e, t) {
        const { left: n, top: i, bottom: s, right: o } = e,
          r = [
            [n, i],
            [n, s],
            [o, i],
            [o, s],
          ];
        for (const [e, n] of r) {
          const i = document.elementFromPoint(e, n);
          if (i !== t && !t.contains(i)) return !0;
        }
        return !1;
      })({ bottom: d, left: r, right: a, top: c }, t)
    ) {
      const e = (function (e, t, n) {
        const { top: i, bottom: s, left: o, right: r } = e;
        try {
          const e = ft({ bottom: s, left: o, right: r, top: i }, t, "up"),
            a = ft({ bottom: s, left: o, right: r, top: e }, t, "down"),
            c = ft({ bottom: a, left: o, right: r, top: e }, t, "left");
          return (
            ((a - e) *
              (ft({ bottom: a, left: c, right: r, top: e }, t, "right") - c)) /
            n
          );
        } catch (e) {
          return 0;
        }
      })({ bottom: d, left: r, right: a, top: c }, t, l);
      return e >= 0.5;
    }
    return !0;
  };
  function bt(t) {
    const n = e.document.getElementById(t);
    if (!n) return !1;
    const i = n?.querySelector("iframe"),
      s = n?.querySelector(".evp-player iframe"),
      o = s || i;
    return o instanceof HTMLElement && mt(o);
  }
  function yt(e, t) {
    let n = [];
    return (
      "string" == typeof t
        ? (n = e.store.getRegionAdComponents(t))
        : t?.forEach((t) => {
            const i = t.split(":"),
              s = i[0],
              o = i[1],
              r = s?.length,
              a = 2 === i.length && r && o?.length > 0;
            r && void 0 === o
              ? n.push(e.store.getAdComponentById(s))
              : a && n.push(e.store.getAdComponent(s, o));
          }),
      n
    );
  }
  const Et = (e, t) => {
    let n, i;
    t || (t = 4), (i = e);
    for (let e = 0; e <= t; e++)
      ((i?.id &&
        "string" == typeof i.id &&
        (i.id.startsWith("sda-") ||
          i.id.toLowerCase().startsWith("taboola-") ||
          i.id.toLowerCase().startsWith("ad-") ||
          i.id.toLowerCase().includes("-ad-") ||
          i.id.toLowerCase().endsWith("-ad"))) ||
        i?.className?.startsWith("ad-") ||
        i?.classList?.contains("native-ad")) &&
        (n = i),
        (i = i && i.parentElement);
    return n;
  };
  function _t(e) {
    if (e < 0 || e > 100) return !1;
    return Math.floor(100 * Math.random()) < e;
  }
  function It(e, t) {
    const n = {};
    return (
      Object.keys(e).forEach((i) => {
        let s = e[i];
        t.includes(i) && (s = Array.isArray(s) ? s.map((e) => vt(e)) : vt(s)),
          (n[i] = s);
      }),
      n
    );
  }
  function vt(e) {
    let t = (function (e) {
      const t = /%[0-9A-Fa-f]{2}/g,
        n = e.replace(t, (e) => {
          try {
            return decodeURIComponent(e);
          } catch (t) {
            return e;
          }
        });
      return n;
    })(e);
    return (
      [/(<([^>]+)>)/gm, /[\r\n]+/gm].forEach((e) => {
        t = t.replace(e, "");
      }),
      t
    );
  }
  function At(e) {
    const t = {};
    return (
      Object.keys(e).forEach((n) => {
        void 0 !== e[n] && (t[n] = e[n]);
      }),
      t
    );
  }
  function St(e) {
    return !!(
      e &&
      "object" == typeof e &&
      e.hasOwnProperty("path") &&
      e.hasOwnProperty("size")
    );
  }
  function Ct(e) {
    return "placement" in e && "mode" in e;
  }
  function Tt(e, t) {
    if (e && ((n = e), Object.values(ye).includes(n))) return e;
    {
      const e = void 0 === t || !Ee.hasOwnProperty(t);
      return Ee[e ? pt : t];
    }
    var n;
  }
  function Rt(e, t) {
    const n = {};
    for (const i of re)
      "axid" === i && t
        ? (n[i] = t)
        : void 0 !== e[i] && "" !== e[i] && (n[i] = e[i]);
    return [
      Object.entries(n)
        .map((e) => e.join(":"))
        .join(";"),
      "",
      e.spaceid,
      "",
      "",
      "",
      e.bucket,
      "",
    ].join("|");
  }
  function Lt(e) {
    e.features?.enableYahooPrebid ? wt(e) : e.gptComponent.refresh([e.slot]);
  }
  function wt(e) {
    const t = e._getInfoForPrebid();
    e.ypbComponent.startPrebid(t, () => {
      e.gptComponent.refresh([e.slot]);
    });
  }
  function Pt(e) {
    return (
      "string" == typeof e ||
      (Array.isArray(e) && 1 === e.length && "string" == typeof e[0]) ||
      (Array.isArray(e) &&
        2 === e.length &&
        "number" == typeof e[0] &&
        "number" == typeof e[1])
    );
  }
  function kt(e, t) {
    const n = Pt(e) ? [e] : e,
      i = Pt(t) ? [t] : t,
      s = n.filter((e) =>
        (function (e, t) {
          const n = JSON.stringify(t);
          return e.some((e) => JSON.stringify(e) === n);
        })(i, e),
      );
    return 1 === s.length ? s[0] : s;
  }
  function Dt(e, t) {
    const n = t && qe[t];
    if (n) {
      const t = n[1];
      return e.includes(t);
    }
    return !1;
  }
  function Bt(e) {
    try {
      const t = performance
        .getEntriesByType("resource")
        .find((t) => t.name.includes(e));
      if (!t) return null;
      const { startTime: n, responseEnd: i } = t;
      return { responseEnd: i, startTime: n };
    } catch (e) {}
    return null;
  }
  function Ot(t) {
    let n = "";
    if (t)
      try {
        const i = JSON.parse(e.atob?.("string" == typeof t ? t : ""));
        n = Array.isArray(i?.envelope) ? i.envelope.join() : "";
      } catch (e) {}
    return n;
  }
  function Nt() {
    let t;
    try {
      t = e.crypto.randomUUID();
    } catch (e) {
      t = Math.floor(1e15 * Math.random()).toString();
    }
    return t;
  }
  class jt {
    _googletag;
    features;
    refreshQueue;
    debounceTimer;
    constructor() {
      return (
        (this.features = {}),
        (this.refreshQueue = []),
        (this.debounceTimer = null),
        (this._googletag = {}),
        (this._googletag.cmd = []),
        void 0 !== e &&
          (e.googletag
            ? (this._googletag = e.googletag)
            : (e.googletag = this._googletag),
          this.addCallbackToCmdQueue(() => {
            e.benji.logger.updateDatastore({
              [tt]: Math.round(e.performance.now()),
            });
          })),
        this
      );
    }
    addCallbackToCmdQueue(e) {
      this._googletag.cmd.push(() => {
        e();
      });
    }
    addEventListener(e, t) {
      this._googletag.cmd.push(() => {
        this._googletag.pubads().addEventListener(e, t);
      });
    }
    create(...e) {
      const [t, n] = e,
        { path: i, size: s, id: o, gptSetting: r } = t,
        { safeFrameConfig: a = {} } = r || {};
      this._googletag.cmd.push(() => {
        const e = this._googletag
          .defineSlot(i, s, o)
          .setSafeFrameConfig(At(a))
          .addService(this._googletag.pubads());
        n.slot = e;
      });
    }
    clearTargeting(e) {
      this._googletag.cmd.push(() => {
        0 !== this._googletag.pubads().getTargeting(e).length &&
          this._googletag.pubads().clearTargeting(e);
      });
    }
    destroy(e) {
      this._googletag.cmd.push(() => {
        this._googletag.destroySlots(e);
      });
    }
    enableLazyLoad(e) {
      this._googletag.cmd.push(() => {
        const t = { ...Pe, ...e };
        this._googletag.pubads().enableLazyLoad({
          fetchMarginPercent: t.fetchMarginPercent,
          mobileScaling: t.mobileScaling,
          renderMarginPercent: t.renderMarginPercent,
        });
      });
    }
    enableSizeMappingForSlot(e, t, n) {
      this._googletag.cmd.push(() => {
        const i = this._googletag.sizeMapping().addSize(t, n).build();
        e.slot?.defineSizeMapping(i);
      });
    }
    refresh(e) {
      this.features.enableRefreshDebounce
        ? this._refreshWithDebounce(e)
        : this._refresh(e);
    }
    render(...e) {
      const [t, n] = e;
      this._googletag.cmd.push(() => {
        const e = this.features.enableYahooPrebid;
        (this.features.enableCtrldSRABatch || e) && n && n.slot
          ? this.refresh([n.slot])
          : this._display(t);
      });
    }
    setInitialPageUrl(t) {
      this._googletag.cmd.push(() => {
        const n = t || e.location.href;
        this._googletag.pubads().set("page_url", n);
      });
    }
    setPrivacySettings(e) {
      this._googletag.cmd.push(() => {
        this._googletag.pubads().setPrivacySettings(e);
      });
    }
    setPublisherProvidedId(e) {
      this._googletag.cmd.push(() => {
        this._googletag.pubads().setPublisherProvidedId(e);
      });
    }
    setupService(...e) {
      const [t, n] = e;
      (this.features = t),
        this._googletag.cmd.push(() => {
          const e = this.features.enableYahooPrebid;
          (this.features.enableCtrldSRABatch || e) &&
            this._googletag.pubads().disableInitialLoad(),
            this._googletag.pubads().enableSingleRequest(),
            this._googletag.pubads().setForceSafeFrame(!0);
          const { safeFrameConfig: t = {} } = n ?? {},
            i = { ...Ue, ...At(t) };
          this._googletag.pubads().setSafeFrameConfig(i),
            this._googletag.enableServices();
        });
    }
    setTargeting(e) {
      this._googletag.cmd.push(() => {
        Object.keys(e).forEach((t) => {
          this._googletag.pubads().setTargeting(t, e[t]);
        });
      });
    }
    setPageUrl(e) {
      this._googletag.cmd.push(() => {
        this._googletag.pubads().get("page_url") !== e &&
          this._googletag.pubads().set("page_url", e);
      });
    }
    getTargetings(e, t) {
      this._googletag.cmd.push(() => {
        const n = {};
        e.forEach((e) => {
          n[e] = this._googletag.pubads().getTargeting(e).join(",");
        }),
          t && t(n);
      });
    }
    setTargetingForSlot(e, t) {
      this._googletag.cmd.push(() => {
        Object.keys(t).forEach((n) => {
          const i = t[n];
          e.slot.setTargeting(n, i),
            void 0 === e.kvs && (e.kvs = {}),
            (e.kvs[n] = i);
        });
      });
    }
    collapseEmptyDivs(e) {
      this._googletag.cmd.push(() => {
        this._googletag.pubads().collapseEmptyDivs(e);
      });
    }
    _display(e) {
      this._googletag.cmd.push(() => {
        this._googletag.display(e);
      });
    }
    _refresh(e) {
      this._googletag.cmd.push(() => {
        this._googletag.pubads().refresh(e);
      });
    }
    _refreshWithDebounce(e) {
      this.refreshQueue.push(...e),
        this.debounceTimer && clearTimeout(this.debounceTimer),
        (this.debounceTimer = setTimeout(() => {
          this._refresh(this.refreshQueue),
            (this.refreshQueue = []),
            (this.debounceTimer = null);
        }, 20));
    }
  }
  const Mt = {};
  function Ut(e, t) {
    return t &&
      (function (e) {
        return Object.values(ce).includes(e);
      })(t)
      ? { gptEvent: e }
      : {};
  }
  class zt {
    nextHandler = null;
    handle(e) {
      const { positionId: t, positionConfig: n, context: i } = e,
        s = Ct(n);
      if (!(St(n) || s)) return null;
      const { id: o, region: r } = n;
      t !== o &&
        i.logger.sendDebugBeacon({
          id: o,
          outcm: "gamSchemaCheck",
          positionId: t,
          type: "positionKeyIdMismatch",
        });
      if (void 0 !== i.store.getAdComponent(r, o)) {
        const { taboola: e } = i;
        if (!s || (s && !e.isNewPageLoad())) return null;
      }
      return this.nextHandler ? this.nextHandler.handle(e) : void 0;
    }
    setNext(e) {
      this.nextHandler = e;
    }
  }
  const Ft = (function (e, t) {
    let n = 0;
    return (...i) => {
      const s = performance.now();
      if (!(s - n < t)) return (n = s), e(...i);
    };
  })(function () {
    const t = new CustomEvent(se);
    e.dispatchEvent(t);
  }, 200);
  const xt = {},
    Gt = {},
    Yt = {},
    $t = {},
    Ht = [];
  function Vt() {
    this.gpt.addEventListener(z, (e) => {
      const t = e.slot.getSlotElementId(),
        n = Gt[t];
      n && n();
    }),
      this.gpt.addEventListener($, (e) => {
        const t = e.slot.getSlotElementId(),
          n = xt[t];
        n && n(e.inViewPercentage);
      });
  }
  function qt() {
    ["pointermove", "pointerup", "scroll", "keydown"].forEach((t) => {
      e.addEventListener(t, Ft);
    }),
      e.addEventListener(se, () => {
        for (; Ht.length > 0; ) {
          const e = Ht.pop();
          e && e();
        }
      });
  }
  class Wt {
    action;
    duration;
    timerId;
    elapsedTime;
    constructor(e) {
      const { action: t, duration: n } = e;
      (this.action = t),
        (this.duration = n),
        (this.timerId = void 0),
        (this.elapsedTime = 0),
        this._resetElapsedTime();
    }
    getElapsedTime() {
      return this.elapsedTime;
    }
    pause() {
      this._cancelElapse();
    }
    resume() {
      void 0 === this.timerId && 0 !== this.elapsedTime && this._elapse();
    }
    start() {
      this._resetElapsedTime(), this._cancelElapse(), this._elapse();
    }
    stop() {
      this._resetElapsedTime(), this._cancelElapse();
    }
    _resetElapsedTime() {
      this.elapsedTime = 0;
    }
    _elapse() {
      this.timerId = e.setInterval(() => {
        (this.elapsedTime += 1),
          this.elapsedTime >= this.duration && (this.stop(), this.action());
      }, 1e3);
    }
    _cancelElapse() {
      clearInterval(this.timerId), (this.timerId = void 0);
    }
  }
  const Kt = {};
  function Qt(e, t) {
    const n = e?.config.setting?.lazyLoad;
    if (!0 === n) return;
    let i, s;
    const o = t?.id;
    Ct(t) ? (i = n?.lazyFetch?.taboola) : St(t) && (i = n?.lazyFetch?.gam),
      i?.placements
        ? Object.keys(i?.placements).forEach((e) => {
            -1 !== o.indexOf(e) && (s = i?.placements && i?.placements[e]);
          })
        : i?.positions
          ? i?.positions[o] && (s = i?.positions[o])
          : (s = i);
    const r = t.lazyFetch || s;
    return r || void 0;
  }
  function Jt() {
    Object.keys(Kt).forEach((t) => {
      const { offset: n = 0, callback: i } = Kt[t];
      (function (t, n) {
        const i = document.getElementById(t);
        if (!i) return;
        const s = Et(i) || i,
          o = e.innerHeight,
          r = s.getBoundingClientRect(),
          a = Math.min(r.bottom, o) - Math.abs(r.top);
        return a && Math.abs(a) < n;
      })(t, n) && (delete Kt[t], i());
    });
  }
  function Xt() {
    e.addEventListener(
      "scroll",
      (function (e, t) {
        let n = Date.now();
        return function () {
          n + t - Date.now() < 0 && (e(), (n = Date.now()));
        };
      })(Jt, 100),
    );
  }
  const Zt = "ERROR",
    en = "INFO",
    tn = "PREBID",
    nn = "LIVEINTENT",
    sn = "AUCTION_EVENTS_NOT_FIRED",
    on = "AY_JS_DISABLED",
    rn = "AY_JS_FAILURE",
    an = "AY_JS_SUCCESS",
    cn = "BP_CONFIG_FAILURE",
    dn = "CACHED_EIDS_NOT_SENT",
    ln = "ERROR_AY_SETUP",
    hn = "ERROR_PREBID_SETUP",
    un = "LI_MODULE_LOADED",
    gn = "LI_MODULE_NOT_LOADED",
    pn = "LIVEINTENT_FINISHED_IN_TIME",
    fn = "LIVEINTENT_FINISHED_LATE",
    mn = "LIVEINTENT_PRESENT_IN_CONFIG",
    bn = "NO_BIDS",
    yn = "PBJS_FAILURE",
    En = "PBJS_SUCCESS",
    _n = "PREBID_SESSION_START",
    In = "USER_ID_MODULE_BUCKET_CREATED",
    vn = "USER_ID_MODULE_NOT_ELIGIBLE_IP",
    An = "CONFIG_FAILURE",
    Sn = "IN_BANNER_VIDEO_PLAYER",
    Cn = "AD_CONTAINER_MISSING",
    Tn = "PLAYER_ALREADY_EXISTS",
    Rn = "PLAYER_RENDER_ERROR",
    Ln = "https://noa.yahoo.com/p",
    wn = "unknown",
    Pn = (e) => {
      "function" != typeof window.navigator?.sendBeacon
        ? (document.createElement("img").src = e)
        : window.navigator.sendBeacon(e);
    },
    kn = (e, t) => {
      const { spaceid: n, ...i } = t,
        s = Object.keys(i)
          .map((e) => `${e}=${encodeURIComponent(i[e])}`)
          .join("&");
      return `${e}?s=${n}&t=${Date.now()}&_I=&_AO=0&_NOL=0&${s}`;
    };
  function Dn(e, t) {
    const {
        currentI13n: { pd: n = wn, pt: i = wn },
      } = t,
      {
        test: s = wn,
        colo: o = wn,
        device: r = wn,
        lang: a = wn,
        site: c = wn,
        s: d = wn,
        ver: l = wn,
        partner: h = wn,
        pl1: u = wn,
        pl2: g = wn,
        pl3: p = wn,
        region: f = wn,
        src: m = wn,
        rid: b = wn,
        usercountry: y = wn,
      } = e.page;
    return {
      s: d,
      src: m,
      site: c,
      partner: h,
      lang: a,
      region: f,
      device: r,
      colo: o,
      test: s,
      rid: b,
      pd: n,
      pt: i,
      ver: l,
      pl1: u,
      pl2: g,
      pl3: p,
      usercountry: y,
    };
  }
  function Bn(e, t) {
    const {
        currentI13n: { pd: n = wn, pt: i = wn },
      } = t,
      {
        test: s = wn,
        colo: o = wn,
        device: r = wn,
        lang: a = wn,
        partner: c = wn,
        region: d = wn,
        site: l = wn,
        src: h = wn,
        s: u = wn,
        rid: g = wn,
        usercountry: p = wn,
        limitedAds: f = wn,
        NPA: m = wn,
        pl1: b = wn,
        pl2: y = wn,
        pl3: E = wn,
      } = e.page;
    return {
      spaceid: u,
      src: h,
      site: l,
      partner: c,
      lang: a,
      region: d,
      device: r,
      colo: o,
      bucket: s,
      rid: g,
      limitedAds: f,
      NPA: m,
      pd: n,
      pt: i,
      usercountry: p,
      benjiVersion: b,
      prebidVersion: y,
      yahooPrebidVersion: E,
    };
  }
  const On = "BENJI:LOGGER",
    Nn = "beforeunload",
    jn = "visibilitychange";
  const Mn = (e) => {
    const t = new CustomEvent(On, { detail: e });
    window.dispatchEvent(t);
  };
  const Un = {},
    {
      AD_START: zn,
      AD_PAUSE: Fn,
      AD_RESUME: xn,
      AD_ERROR: Gn,
      AD_COMPLETE: Yn,
      AD_END: $n,
      PLAYER_ERROR: Hn,
      PLAYBACK_START: Vn,
    } = {
      AD_COMPLETE: "AD_COMPLETE",
      AD_END: "AD_END",
      AD_ERROR: "AD_ERROR",
      AD_PAUSE: "AD_PAUSE",
      AD_PROGRESS: "AD_PROGRESS",
      AD_RESUME: "AD_RESUME",
      AD_START: "AD_START",
      DATERANGE_ENDED: "DATERANGE_ENDED",
      DATERANGE_STARTED: "DATERANGE_STARTED",
      DIMENSIONS_CHANGE: "DIMENSIONS_CHANGE",
      DOCK_CHANGE: "DOCK_CHANGE",
      FULLSCREEN_CHANGE: "FULLSCREEN_CHANGE",
      ITEM_END: "ITEM_END",
      ITEM_REQUEST: "ITEM_REQUEST",
      ITEM_START: "ITEM_START",
      MUTE_CHANGE: "MUTE_CHANGE",
      PLAYBACK_COMPLETE: "PLAYBACK_COMPLETE",
      PLAYBACK_END: "PLAYBACK_END",
      PLAYBACK_ERROR: "PLAYBACK_ERROR",
      PLAYBACK_PAUSE: "PLAYBACK_PAUSE",
      PLAYBACK_PROGRESS: "PLAYBACK_PROGRESS",
      PLAYBACK_RESUME: "PLAYBACK_RESUME",
      PLAYBACK_SEEKING: "PLAYBACK_SEEKING",
      PLAYBACK_START: "PLAYBACK_START",
      PLAYER_ERROR: "PLAYER_ERROR",
      PLAYER_READY: "PLAYER_READY",
      PLAYLIST_END: "PLAYLIST_END",
      PLAYLIST_ITEM_ADD: "PLAYLIST_ITEM_ADD",
      PLAYLIST_ITEM_REMOVE: "PLAYLIST_ITEM_REMOVE",
      PLAYLIST_POSITION_CHANGE: "PLAYLIST_POSITION_CHANGE",
      RENDER_FAIL: "RENDER_FAIL",
      TIMED_METADATA: "TIMED_METADATA",
      UI_INTERACT: "UI_INTERACT",
      VOLUME_CHANGE: "VOLUME_CHANGE",
    },
    qn = (e) => {
      const [t, n] = e.size.split("x");
      return {
        height: e.playerHeight || e.height || n,
        width: e.playerWidth || e.width || t,
      };
    },
    Wn = (e) => {
      const {
          adId: t,
          adUnitCode: n,
          bidder: i,
          creativeId: s,
          mediaType: o,
          source: r,
          statusMessage: a,
        } = e,
        c = qn(e);
      return {
        adId: t,
        adSize: `${c.width}x${c.height}`,
        adUnitCode: n,
        auctionSource: r,
        bidder: i,
        creativeId: s,
        mediaType: o,
        statusMessage: a,
      };
    },
    Kn = (e) => {
      if (!Un[e]) return;
      const t = Un[e].playerInstance;
      t && t.destroy(), delete Un[e];
    },
    Qn = (e, t) => {
      const n = Wn(t);
      Mn({
        logType: Zt,
        message: e,
        messageDetails: JSON.stringify({ ...n }),
        source: Sn,
      });
    },
    Jn = (e, t) => {
      Mn({
        logType: en,
        message: e,
        messageDetails: `adUnitCode: ${t}`,
        source: Sn,
      });
    },
    Xn = {
      [Yn]: (e) => {
        Un[e].status = lt;
      },
      [$n]: (e) => {
        Un[e].status = lt;
      },
      [Gn]: (e) => {
        Kn(e);
      },
      [Fn]: (e) => {
        Un[e].status = "paused";
      },
      [xn]: (e) => {
        Un[e].status = dt;
      },
      [zn]: (e) => {
        Un[e].status = dt;
      },
      [Hn]: (e) => {
        Kn(e);
      },
    },
    Zn = {
      [Yn]: ({ adUnitCode: e }) => {
        Jn(Yn, e);
      },
      [Gn]: (e) => {
        Qn(Gn, e);
      },
      [zn]: ({ adUnitCode: e }) => {
        Jn(zn, e);
      },
      [Vn]: (e) => {
        Qn(Vn, e);
      },
      [Hn]: (e) => {
        Qn(Hn, e);
      },
    },
    ei = (t, n) => ({
      render: function (i) {
        try {
          Un[i.adUnitCode] &&
            (Mn({
              logType: en,
              message: Tn,
              messageDetails: `adUnitCode: ${i.adUnitCode}`,
              source: Sn,
            }),
            Kn(i.adUnitCode));
          const s = ((e, t, n) => {
              const {
                  site: i,
                  region: s,
                  lang: o,
                  bucket: r,
                  ver: a,
                  pt: c,
                  pd: d,
                  pct: l,
                } = t,
                { adComponentPath: h } = n,
                { bidder: u } = e,
                g = e.vastXml,
                p = e.vastUrl,
                f = Array.isArray(r) ? r.join(",") : r,
                m = {
                  trackingParams: {
                    ad_sys: u,
                    pct: l,
                    pd: d,
                    plcid: h,
                    pt: c,
                    ver: a,
                  },
                };
              return (
                Object.keys(m.trackingParams).forEach((e) => {
                  const t = e;
                  void 0 === m.trackingParams[t] && delete m.trackingParams[t];
                }),
                {
                  autoplay: !0,
                  expBucket: f,
                  expName: "outstream",
                  lang: o,
                  monetization: m,
                  mute: !0,
                  outstream: {
                    ...((p && { adUrl: p }) || (g && { adXml: g })),
                  },
                  region: s,
                  site: i,
                }
              );
            })(i, t, n),
            o = ((e) => {
              const t = document.querySelector(`#${e.adUnitCode}`);
              if (!t)
                return (
                  Mn({
                    logType: en,
                    message: Cn,
                    messageDetails: `adUnitCode: ${e.adUnitCode}`,
                    source: Sn,
                  }),
                  null
                );
              const n = document.createElement("div"),
                { height: i, width: s } = qn(e);
              return (
                (n.id = `player-${e.adUnitCode}`),
                (n.style.width = `${s}px`),
                (n.style.height = `${i}px`),
                t.appendChild(n),
                n
              );
            })(i);
          if (!o) return;
          const r = new e.YAHOO.VideoPlatform.AdOnly.VideoPlayer(s);
          ((t, n) => {
            const i = e.YAHOO.VideoPlatform.AdOnly.VideoPlayer.Events;
            for (const e in i)
              i.hasOwnProperty(e) &&
                t.on?.(i[e], () => {
                  Xn[e] && Xn[e](n.adUnitCode), Zn[e] && Zn[e](n);
                });
          })(r, i),
            ((e, t, n) => {
              e.render(`#${t.id}`),
                (Un[n.adUnitCode] = {
                  playerInstance: e,
                  status: "initializing",
                });
            })(r, o, i);
        } catch (e) {
          Mn({
            logType: Zt,
            message: Rn,
            messageDetails: `adUnitCode: ${i.adUnitCode}`,
            source: Sn,
          });
        }
      },
      url: "https://s.yimg.com/rx/ev/prod/evplayer-adonly.js",
    });
  function ti() {
    function e(e) {
      e.timer?.stop(),
        e.creativeInteractionConfig &&
          (e.creativeInteractionConfig.refreshPauseTS = Date.now()),
        e.creativeInteractionConfig?.isYahooCreative &&
          (e.creativeInteractionConfig.ycInteractionActive = !0),
        e.creativeInteractionConfig &&
          (e.creativeInteractionConfig.interactionActive = !0);
    }
    if (this.stackGroup && this.features?.enableAdStacking) {
      this.store
        .getSameSideStackAdComponents(this.id, this.stackGroup)
        .forEach((t) => {
          e(t);
        });
    } else e(this);
  }
  function ni() {
    function t(t) {
      t.creativeInteractionConfig?.interactionActive &&
        (t.creativeInteractionConfig &&
          (t.creativeInteractionConfig.interactionActive = !1),
        t.timer?.start(),
        t.creativeInteractionConfig?.isYahooCreative &&
          (t.creativeInteractionConfig.ycInteractionActive = !1),
        _t(10) &&
          t.creativeInteractionConfig?.refreshPauseTS &&
          e.benji.logger.sendDebugBeacon({
            ad_type: t.creativeInteractionConfig?.isYahooCreative ? "yc" : "3p",
            id: t.id,
            refresh_delay:
              (Date.now() - t.creativeInteractionConfig?.refreshPauseTS) / 1e3,
            type: "ad_hover",
          }));
    }
    if (this.stackGroup && this.features?.enableAdStacking) {
      this.store
        .getSameSideStackAdComponents(this.id, this.stackGroup)
        .forEach((e) => {
          t(e);
        });
    } else t(this);
  }
  function ii() {
    if (this.stackGroup && this.features?.enableAdStacking) {
      this.store.getStackAdComponents(this.stackGroup).forEach((e) => {
        e.timer?.stop();
      });
      this.store
        .getSameSideStackAdComponents(this.id, this.stackGroup)
        .forEach((e) => {
          e.timer?.start();
        });
    } else this.timer?.start();
  }
  function si(e) {
    this.viewPercentage = e;
    !0 === this.eligibleForTimedRefresh && this.isInView() && this.refresh();
  }
  function oi() {
    this.isInView() && (this.timer?.start(), this.refresh());
  }
  class ri {
    containerMap;
    eligibleForTimedRefresh;
    features;
    gptComponent;
    ypbComponent;
    gptSetting;
    path;
    size;
    i13n;
    id;
    isEdgeToEdge;
    inBannerVideoAdEnabled;
    kvs;
    metrics;
    ntsFallBack;
    refreshConfig;
    region;
    renderInfo;
    slot;
    stackGroup;
    stickyConfig;
    store;
    timer;
    useSecure;
    viewPercentage;
    customSizeConfig;
    disableRefresh;
    adBlockPlusEnabled;
    _fetchCount;
    _failureCount;
    _isIntersecting;
    _stackAdLastRefreshedAt;
    lazyFetch;
    creativeInteractionConfig;
    constructor(t) {
      const {
        containerMap: n,
        disableRefresh: i,
        adBlockPlusEnabled: s,
        features: o,
        gptComponent: r,
        ypbComponent: a,
        gptSetting: c,
        kvs: d,
        ntsFallBack: l,
        refreshConfig: h,
        region: u,
        i13n: g,
        id: p,
        path: f,
        customSizeConfig: m,
        size: b,
        stackGroup: y,
        stickyConfig: E,
        store: _,
        useSecure: I,
        lazyFetch: v,
      } = t;
      (this.containerMap = n),
        (this.features = o),
        (this.id = p),
        (this.path = f),
        (this.size = b),
        (this.gptComponent = r),
        (this.ypbComponent = a),
        (this.metrics = {}),
        (this.ntsFallBack = l),
        (this.refreshConfig = h),
        (this.region = u),
        (this.renderInfo = {}),
        (this.stackGroup = y),
        (this.store = _),
        (this.useSecure = I),
        (this.viewPercentage = 0),
        (this._isIntersecting = !1),
        (this._stackAdLastRefreshedAt = 0),
        (this.gptSetting = c),
        (this._failureCount = 0),
        (this._fetchCount = 0),
        (this.i13n = g),
        (this.lazyFetch = v),
        (this.inBannerVideoAdEnabled = g?.feature?.includes(
          "prebid-inBannerVideo",
        ));
      const A = { gptSetting: this.gptSetting, id: p, path: f, size: b };
      if (o?.enableLazyFetch && this.lazyFetch) {
        const e = () => {
          this._createSlot(A), this.render();
        };
        Kt[p] = { callback: e, offset: this.lazyFetch.offset };
      } else this._createSlot(A);
      if (
        (d &&
          ((this.kvs = d),
          e.benji.logger.updateDatastore(p, { sec: d.loc }),
          this.gptComponent.setTargetingForSlot(this, d)),
        m && (this.customSizeConfig = m),
        E && (this.stickyConfig = E),
        !i && this.refreshConfig?.duration && !s)
      ) {
        this.eligibleForTimedRefresh = !1;
        const e = () => {
            this.isInView()
              ? this.refreshConfig.requireUserAction
                ? Ht.push(() => this.refresh())
                : this.refresh()
              : (this.eligibleForTimedRefresh = !0);
          },
          { duration: t } = this.refreshConfig;
        this.timer = new Wt({ action: e.bind(this), duration: t });
      }
      (this.disableRefresh = i),
        (this.adBlockPlusEnabled = s),
        this.store.add(u, p, this),
        this.features?.enableAdInteractionBasedRefresh &&
          (this.creativeInteractionConfig = {
            hoverTimerId: null,
            iframeContainer: null,
            interactionActive: !1,
            interactionEndHandler: ni.bind(this),
            interactionStartHandler: ti.bind(this),
            isYahooCreative: !1,
            scrollOffset: 150,
            ycInteractionActive: !1,
          });
    }
    disableAllRefresh() {
      this.disableRefresh = !0;
    }
    destroy() {
      this._unloadHandler(),
        this.timer && (this.timer.stop(), delete this.timer),
        this.gptComponent.destroy([this.slot]),
        this.store.delete(this.region, this.id);
    }
    increaseFailureCount() {
      this._failureCount += 1;
    }
    increaseFetchCount() {
      this._fetchCount += 1;
    }
    isInitiallyLoaded() {
      return 1 === this._fetchCount;
    }
    isInView() {
      return this.useSecure
        ? this._isIntersecting
        : bt(this.id) && this.viewPercentage >= 50;
    }
    getRenderCount() {
      return this._fetchCount - this._failureCount;
    }
    refresh() {
      if (
        this.refreshConfig.limit &&
        this.refreshConfig.limit <= this.getRenderCount()
      )
        return;
      const e = this.stackGroup && this.features?.enableAdStacking;
      var t;
      this.inBannerVideoAdEnabled && ((t = this.id), Un[t]) && Kn(this.id),
        (this.viewPercentage = 0);
      const n =
        this.refreshConfig.sameSizeRefresh &&
        !(function (e) {
          const t = e?.getSizes();
          if (!t) return !1;
          for (let e = 0; e < t.length; e++) if ("fluid" === t[e]) return !0;
          return !1;
        })(this.slot) &&
        this.slot?.getSizes().length > 1 &&
        1 === this._fetchCount;
      if (e) {
        if (!(Date.now() - this._stackAdLastRefreshedAt <= 150)) {
          const e = this.store
            .getStackAdComponents(this.stackGroup)
            .map(
              (e) => (
                e.id !== this.id && (e.eligibleForTimedRefresh = !1),
                (e._stackAdLastRefreshedAt = Date.now()),
                e
              ),
            );
          if (this.features?.enableYahooPrebid)
            e.forEach((e) => {
              wt(e);
            });
          else {
            const t = e.map((e) => e.slot);
            this.gptComponent.refresh(t);
          }
        }
      } else
        n
          ? (function (e) {
              try {
                const { slot: t, features: n, renderInfo: i } = e,
                  s = t.getSlotElementId(),
                  o = document.getElementById(s);
                if (o instanceof HTMLElement) {
                  if (!i.size) return void Lt(e);
                  const { height: s, width: r } = i.size,
                    a = [r, s],
                    c = t.getSizes();
                  let d = !1;
                  for (let e = 0; e < c.length; e++) {
                    const t = c[e];
                    t.height === s && t.width === r && (d = !0);
                  }
                  if (!d) return void Lt(e);
                  if (
                    ((e.size = a),
                    e.isEdgeToEdge || (o.style.minHeight = `${s}px`),
                    n?.enableSizeMapping)
                  )
                    return (
                      e.gptComponent.enableSizeMappingForSlot(e, [0, 0], a),
                      void Lt(e)
                    );
                  if (e.features?.enableYahooPrebid) {
                    const t = e.ypbComponent.removeAdUnit(e.id);
                    t &&
                      t.mediaTypes.banner &&
                      ((t.mediaTypes.banner.sizes = a),
                      e.ypbComponent.addAdUnit(t));
                  }
                  e.gptComponent.destroy([e.slot]);
                  const l = {
                    gptSetting: e.gptSetting,
                    id: e.id,
                    path: e.slot.getAdUnitPath(),
                    size: a,
                  };
                  e.gptComponent.create(l, e),
                    e.kvs && e.gptComponent.setTargetingForSlot(e, e.kvs),
                    (function (e) {
                      if (e.features?.enableYahooPrebid) {
                        const t = e._getInfoForPrebid();
                        e.ypbComponent.startPrebid(t, () => {
                          e.renderSlot();
                        });
                      } else e.renderSlot();
                    })(e);
                }
              } catch (t) {
                Lt(e);
              }
            })(this)
          : Lt(this);
      this.eligibleForTimedRefresh = !1;
    }
    _getInfoForPrebid() {
      return {
        adComponentId: this.id,
        adComponentPath: this.path,
        size: this.size,
        ...(this.kvs?.loc && { loc: this.kvs.loc }),
        ...(this.stackGroup && { stackGroup: this.stackGroup }),
      };
    }
    render() {
      if ((this._loadHandler(), Kt && Kt[this.id])) return;
      const t = () => {
        const t = document?.getElementById(this.id);
        "index" !== this.region || t
          ? this.renderSlot()
          : e.addEventListener(f, () => {
              this.renderSlot();
            });
      };
      if (!this.features?.enableYahooPrebid) return void t();
      const n = this._getInfoForPrebid();
      this.ypbComponent.startPrebid(n, t);
    }
    renderSlot() {
      this.gptComponent.render(
        this.useSecure && this.containerMap?.[this.id]
          ? this.containerMap[this.id]
          : this.id,
        this,
      );
    }
    renewTimer(e) {
      if (void 0 === this.timer) return;
      const t = this.timer.action;
      this.timer.stop(), (this.timer = new Wt({ action: t, duration: e }));
    }
    _createSlot(e) {
      this.gptComponent.create(e, this);
    }
    _loadHandler() {
      this.disableRefresh ||
        this.useSecure ||
        ((xt[this.id] = si.bind(this)),
        (Gt[this.id] = ii.bind(this)),
        (Yt[this.id] = oi.bind(this)));
    }
    _unloadHandler() {
      delete xt[this.id], delete Gt[this.id], delete Yt[this.id];
    }
    loadResizeHandler(e) {
      this.useSecure || ($t[this.id] = e);
    }
    unloadResizeHandler() {
      this.useSecure || delete $t[this.id];
    }
    setRenderInfo(e) {
      this.renderInfo = { ...this.renderInfo, ...e };
    }
  }
  function ai(e) {
    return e instanceof ri;
  }
  class ci {
    nextHandler = null;
    handle(t) {
      const { positionConfig: n, context: i } = t,
        {
          duration: s,
          limit: o,
          requireUserAction: r,
          sameSizeRefresh: a,
          reserved: c,
        } = i.config.setting?.refresh || {},
        { disableRefresh: d } = i.config.setting?.refresh || {},
        l = {
          disableRefresh: d,
          duration: s,
          limit: o,
          requireUserAction: r,
          reserved: c,
          sameSizeRefresh: a,
        },
        h = i.config.setting?.useSecure ?? !1;
      if (St(n)) {
        const t = i.i13nStore.currentI13n || {},
          s = "abp" === t.abk,
          {
            id: o,
            customSizeConfig: r,
            size: a,
            kvs: c,
            disableRefresh: d,
            ntsFallBack: u,
            stackGroup: g,
            stickyConfig: p,
            gptSetting: m,
            region: b,
          } = n,
          y = ((e, t) => {
            if (e && e.includes("${")) {
              const n = "yhp",
                i = t.region,
                s = t.site,
                o = Re[s] || n;
              return e
                .replace(/\${REGION}/g, i.toLowerCase())
                .replace(/\${SITE}/g, o);
            }
            return e;
          })(n.path, t),
          E = n.refresh,
          _ =
            E?.requireUserAction ?? n.requireUserAction ?? l?.requireUserAction,
          I = E?.sameSizeRefresh ?? n.sameSizeRefresh ?? l?.sameSizeRefresh,
          v = { ...l, ...E, requireUserAction: _, sameSizeRefresh: I },
          { feature: A } = i.config,
          S = {
            enableAdInteractionBasedRefresh:
              A?.enableAdInteractionBasedRefresh || !1,
            enableAdStacking: A?.enableAdStacking || !1,
            enableLazyFetch: A?.enableLazyFetch || !1,
            enableSizeMapping: A?.enableSizeMapping || !1,
            enableYahooPrebid: A?.enableYahooPrebid || !1,
          },
          C = Qt(i, n),
          T = {
            adBlockPlusEnabled: s,
            containerMap: i.containerMap,
            customSizeConfig: r,
            disableRefresh: l.disableRefresh ? l.disableRefresh : d,
            features: S,
            gptComponent: i.gpt,
            gptSetting: m,
            i13n: t,
            id: o,
            kvs: c,
            lazyFetch: C,
            ntsFallBack: u,
            path: y,
            refreshConfig: v,
            region: b,
            size: a,
            stackGroup: g,
            stickyConfig: p,
            store: i.store,
            useSecure: h,
            ypbComponent: i.ypb,
          },
          { allowOnlyNonPersonalizedAds: R, allowOnlyLimitedAds: L } =
            i.config.setting?.consent || {},
          w = L || R;
        if (
          i.config.feature?.enableYahooPrebid &&
          (!i.config.feature?.enableAdStacking || w) &&
          n.stackGroup &&
          Dt(o, n.stackGroup)
        )
          return (
            document.getElementById(o)?.remove(),
            void e.addEventListener(f, () => {
              document.getElementById(o)?.remove();
            })
          );
        return new ri(T);
      }
      if (this.nextHandler) return this.nextHandler.handle(t);
    }
    setNext(e) {
      this.nextHandler = e;
    }
  }
  class di {
    cseg;
    features;
    id;
    mode;
    placement;
    region;
    store;
    taboolaComponent;
    targetType;
    lazyFetch;
    constructor(e) {
      const {
        cseg: t,
        features: n,
        id: i,
        mode: s,
        placement: o,
        region: r,
        store: a,
        taboolaComponent: c,
        targetType: d,
        lazyFetch: l,
      } = e;
      (this.features = n),
        (this.id = i),
        (this.mode = s),
        (this.placement = o),
        (this.region = r),
        (this.store = a),
        (this.taboolaComponent = c),
        (this.targetType = d),
        (this.lazyFetch = l),
        void 0 !== t && (this.cseg = t);
      const h = {
        container: this.id,
        mode: this.mode,
        placement: this.placement,
        region: r,
        target_type: this.targetType,
        ...(void 0 !== this.cseg ? { cseg: t } : {}),
      };
      if (n?.enableLazyFetch && this.lazyFetch) {
        const e = () => {
          this.taboolaComponent.create(h), this.taboolaComponent.render();
        };
        Kt[i] = { callback: e, offset: this.lazyFetch.offset };
      } else this.taboolaComponent.create(h);
      this.store.add(r, i, this);
    }
    destroy() {
      this.store.delete(this.region, this.id);
    }
    refresh() {}
    render() {
      this.taboolaComponent.render();
    }
  }
  class li {
    nextHandler = null;
    handle(e) {
      const { positionConfig: t, context: n } = e,
        { feature: i } = n?.config,
        s = Qt(n, t),
        o = { enableLazyFetch: i?.enableLazyFetch || !1 },
        { cseg: r, mode: a, placement: c, targetType: d, region: l, id: h } = t,
        u = {
          cseg: r,
          features: o,
          id: h,
          lazyFetch: s,
          mode: a,
          placement: c,
          region: l,
          store: n.store,
          taboolaComponent: n.taboola,
          targetType: d,
        };
      return new di(u);
    }
    setNext() {}
  }
  function hi(e) {
    const t = [],
      n = new zt(),
      i = new ci(),
      s = new li();
    return (
      n.setNext(i),
      i.setNext(s),
      Object.entries(e).forEach(([e, i]) => {
        const s = n.handle({ context: this, positionConfig: i, positionId: e });
        s && t.push(s);
      }),
      t
    );
  }
  function ui(e) {
    e?.forEach((e) => {
      e.render();
    });
  }
  const gi = "INITIAL_RENDER_FAILURE",
    pi = "REFRESH_RENDER_FAILURE",
    fi = "REFRESH_RENDER",
    mi = "INITIAL_RENDER",
    bi = {
      ads_failure_total: 0,
      ads_fetch_total: 0,
      ads_refresh_total: 0,
      ads_slot_right_failure: 0,
      ads_slot_right_total: 0,
      ads_slot_top_failure: 0,
      ads_slot_top_total: 0,
    };
  function yi(e, t) {
    if (void 0 === t.kvs || void 0 === t.kvs.loc) return;
    const n = (function (e) {
      switch (e) {
        case "top_right":
          return "right";
        case "top_center":
          return "top";
        default:
          return;
      }
    })(t.kvs.loc);
    if (void 0 === n) return;
    let i;
    return (
      (i =
        !0 === e.isEmpty
          ? t.isInitiallyLoaded()
            ? gi
            : pi
          : t.isInitiallyLoaded()
            ? mi
            : fi),
      (function (e, t) {
        const n = { ...bi };
        switch (((n[`ads_slot_${t}_total`] = 1), e)) {
          case mi:
            return (n.ads_fetch_total = 1), n;
          case fi:
            return (n.ads_refresh_total = 1), n;
          case gi:
            return (
              (n[`ads_slot_${t}_failure`] = 1),
              (n.ads_failure_total = 1),
              (n.ads_fetch_total = 1),
              n
            );
          case pi:
            return (
              (n[`ads_slot_${t}_failure`] = 1),
              (n.ads_failure_total = 1),
              (n.ads_refresh_total = 1),
              n
            );
        }
      })(i, n)
    );
  }
  const Ei = {};
  function _i(e) {
    const t = e.slot.getSlotElementId(),
      n = this.store.getAdComponentById(t);
    void 0 !== n &&
      ai(n) &&
      n &&
      n.isInitiallyLoaded() &&
      "index" === n.region &&
      (this.store.isBeaconFiredForSlot(t) ||
        this.logger.sendPositionPerfBeacon(t));
  }
  function Ii() {
    const t = e.performance?.now;
    t &&
      (this.gpt.addEventListener(G, (t) => {
        const n = t.slot.getSlotElementId();
        this.logger.updateDatastore(n, {
          [rt]: Math.round(e.performance.now()),
        });
      }),
      this.gpt.addEventListener(x, (t) => {
        const n = t.slot.getSlotElementId();
        this.logger.updateDatastore(n, {
          [at]: Math.round(e.performance.now()),
        });
      }),
      this.gpt.addEventListener(F, (t) => {
        const n = t.slot.getSlotElementId();
        this.logger.updateDatastore(n, {
          [ct]: Math.round(e.performance.now()),
        }),
          _i.call(this, t);
      }));
  }
  function vi(e, t) {
    const n = Math.round(window.performance.now());
    (Ei[e] = n),
      "TABOOLA_RENDER_TIME" === e &&
        Ei.TABOOLA_FETCH_START_TIME &&
        Ei.TABOOLA_READY &&
        ((Ei.TABOOLA_RENDER_TIME = n),
        this.logger.sendPerfBeacon(Ei, { sec: t }));
  }
  function Ai() {
    this.gpt.addEventListener(x, (e) => {
      const t = e.slot.getSlotElementId(),
        n = this.store.getAdComponentById(t);
      if (void 0 === n || !ai(n)) return;
      const i = (function (e, t) {
        const { id: n } = t,
          i = t.getRenderCount(),
          s = i > 1 ? "true" : "false",
          o = t.kvs?.loc ? t.kvs.loc : "undefined",
          r = e.isEmpty ? "failed" : "succeeded";
        return {
          id: n,
          isRefresh: s,
          loc: Array.isArray(o) ? o[0] : o,
          renderCount: i,
          status: r,
        };
      })(e, n);
      this.logger.sendDebugBeacon(i);
    });
  }
  function Si() {
    let e = !0;
    const t = (t) => {
      this.taboola.addEventListener(t, (n) => {
        const i = n.detail,
          { container: s, mode: o, placement: r, reason: a } = i,
          c = this.store.getAdComponentById(s?.id);
        if (
          (void 0 === c ||
            !(function (e) {
              return e instanceof di;
            })(c)) &&
          t !== H
        )
          return;
        const d = {
          container: s?.id,
          mode: o,
          outcm: "taboolaDebug",
          placement: r,
          type: t,
          url: window.location.href,
        };
        a && (d.reason = a),
          e && (vi.call(this, "TABOOLA_RENDER_TIME", r), (e = !1)),
          this.logger.sendDebugBeacon(d);
      });
    };
    t(V), t(H);
  }
  function Ci(e, t) {
    e.logger.sendDebugBeacon({ id: t, type: "ID_MISMATCH" });
  }
  function Ti(e) {
    if ("object" != typeof e) {
      const t = "string" == typeof e ? e : g;
      return void ui(this.store.getRegionAdComponents(t));
    }
    const t = e;
    Object.entries(t).forEach(([e, t]) => {
      if (!St(t)) return;
      if (t.region === g) return;
      const n = document?.getElementById(e);
      null === n && Ci(this, e);
    }),
      this.config.feature?.enableYahooPrebid && this.ypb.updateStackGroupMap(t);
    ui(hi.call(this, t));
  }
  function Ri(e, t) {
    if (e) {
      const n = e.benjiAd?.slot,
        i =
          t && n.id
            ? (function (e) {
                return e + "-" + new Date().getUTCMilliseconds() + "-benji-ad";
              })(n.id)
            : n.id,
        s = { id: i, path: n.path, region: n.region, size: n.size };
      return t && t.elem && (t.elem.id = i), s;
    }
  }
  function Li(t) {
    const n = {};
    t && ((n[t.id] = t), Ti.call(e.benji, n));
  }
  const wi = {
    [N]: function (e) {
      const t = Ri(e && e.meta && e.meta.darlaConfig);
      t && Li(t);
    },
  };
  const Pi = {
    [j]: function (e) {
      const t = Ri(e && e.meta && e.meta.darlaConfig, e);
      t && Li(t);
    },
  };
  function ki() {
    const t = wi[N],
      n = Pi[j];
    e.wafer.ready(() => {
      e.wafer.on(N, t), e.wafer.on(j, n);
    });
  }
  function Di(e, t) {
    const n = (function (e) {
      const t = void 0 !== e && me.hasOwnProperty(e) ? e : pt,
        n = me[t];
      let i = !1;
      return (
        t in ce ? (i = !0) : t !== de.finance && (i = _t(1)),
        i ? ge.replace(ue, n) : pe.replace(ue, n)
      );
    })(t);
    Bi({ async: !0, id: "f10d509c-script", tagSrc: n, WIN: e });
  }
  function Bi({
    tagSrc: e,
    id: t,
    WIN: n,
    async: i = !1,
    onloadCb: s,
    onerrorCb: o,
  }) {
    const r = n.document.createElement("script");
    i && (r.async = !0),
      s && "function" == typeof s && (r.onload = s),
      o && "function" == typeof o && (r.onerror = o),
      (r.type = "text/javascript"),
      (r.src = e),
      (r.id = t),
      n.document.head.append(r);
  }
  function Oi(e, t, n) {
    const i = L.replace(v, "2.0");
    Bi({ id: k, onerrorCb: n, onloadCb: t, tagSrc: i, WIN: e });
  }
  function Ni(e, t) {
    let n = t;
    return (
      "object" == typeof e &&
        e.target instanceof HTMLScriptElement &&
        (n = e.target.src || t),
      n || "Unknown"
    );
  }
  const ji = (e, t, n) => {
    const i = e.document.createElement("meta");
    (i.name = t), (i.content = n), e.document?.head.append(i);
  };
  function Mi(e, t) {
    e.config.i13n?.axids &&
      e.i13nStore.updateCurrent({ axids: e.config.i13n?.axids });
    let n = e.getAxid(Xe);
    const i = ((e, t) => {
        try {
          return e?.localStorage?.getItem && Object.values(A).includes(t)
            ? e.localStorage.getItem(t)
            : null;
        } catch (e) {
          return null;
        }
      })(t, A.ATS_DIRECT),
      s = Gi(t, m),
      { allowOnlyNonPersonalizedAds: o, allowOnlyLimitedAds: r } =
        e.config.setting?.consent || {},
      a = !o && !r;
    (o || r) && (n = "");
    const { age: c = 0, gender: d = "" } =
        (a && e.config.setting?.userInfo) || {},
      l = (function (e) {
        const t = {},
          n = Gi(e, b);
        n && (t.ncid = n);
        const i = Gi(e, y);
        if (i) {
          t.fr = i;
          const n = Gi(e, _);
          n && (t.frtype = n);
        }
        return t;
      })(t),
      h = Ui(e.gpt, {
        age: c,
        atsd: Ot(i),
        axid: n,
        gender: d,
        i13n: e.config.i13n,
        queryI13n: l,
        testid: s,
      });
    if (e.taboola) {
      const t = e.config.i13n?.pt;
      e.taboola.updateTaboolaPageConfig(t, I);
    }
    e.i13nStore.updateCurrent(h);
  }
  function Ui(
    e,
    { age: t, atsd: n, axid: i, gender: s, i13n: o, queryI13n: r, testid: a },
  ) {
    const c = {};
    zi(Ae, o, c),
      zi(Le, o, c),
      i && (c.axid = Fi(i)),
      n && (c.atsd = Fi(n)),
      a && (c.testid = Fi(a)),
      t &&
        (c.bka = (function (e) {
          const t = [18, 21, 25, 35, 45, 50, 55, 65, 101].findIndex(
            (t) => e < t,
          );
          return -1 === t ? "0" : `${t}`;
        })(t)),
      s && "f" === s && (c.bkg = "1"),
      s && "m" === s && (c.bkg = "2"),
      o?.bka && (c.bka = o?.bka),
      o?.bkg && (c.bkg = o?.bkg),
      r && Object.assign(c, r);
    const d = It(c, Se);
    if (d && Object.keys(d).length) {
      const t = (function (e) {
        if ("" === e || null == e) return;
        if (Array.isArray(e)) {
          if (0 === e.length) return;
          e = e.join("");
        }
        const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
        let n = "",
          i = 0,
          s = 0;
        for (let r = 0; r < e.length; )
          r +=
            ("string" == typeof (o = e[r]) && (o = o.charCodeAt(0)),
            i < 0 ? (s |= o >> -i) : (s = (o << i) & 248),
            i > 3 ? ((i -= 8), 1) : (i < 4 && ((n += t[s >> 3]), (i += 5)), 0));
        var o;
        return n + (i < 0 ? t[s >> 3] : "");
      })(d.axid);
      e.setTargeting({ ...d, ...(t ? { axid: t } : {}) });
    }
    const l = {};
    return zi((o && Object.keys(o)) || [], o, l), { ...l, ...d };
  }
  function zi(e, t, n) {
    t &&
      "object" == typeof t &&
      !Array.isArray(t) &&
      0 !== Object.keys(t).length &&
      e.forEach((e) => {
        if (t[e]) {
          let i = e,
            s = Fi(t[e]);
          _e.hasOwnProperty(e) && (i = _e[e]),
            we.includes(e) &&
              "string" == typeof s &&
              (s = encodeURIComponent(s)),
            (n[i] = s),
            ve.hasOwnProperty(e) && (n[i] = xi(n[i]));
        }
      });
  }
  function Fi(e) {
    return "number" == typeof e ? `${e}` : e;
  }
  function xi(e) {
    return "string" == typeof e ? e.split(/[;,]+/) : e;
  }
  function Gi(e, t) {
    if (!Ie.includes(t)) return null;
    return new URLSearchParams(e.location?.search).get(t);
  }
  const Yi = (e) => {
    const t = document.getElementById(e);
    t?.style.setProperty("display", "none");
    const n = t?.parentElement && Et(t.parentElement);
    n?.style?.setProperty("display", "none");
  };
  const $i = {
    [x]: function (e) {
      if (e && e.isEmpty) {
        const t = e?.slot?.getSlotElementId(),
          n = this.store.getAdComponentById(t);
        if (n && ai(n)) {
          if (
            (this.nts.activated && n.ntsFallBack?.position) ||
            (this.config?.feature?.enableAdStacking && n.stackGroup)
          )
            return;
          n.destroy();
        }
        Yi(t);
      }
    },
  };
  function Hi() {
    const e = $i[x];
    this.gpt.addEventListener(x, e.bind(this));
  }
  const Vi = { BTN: "BTNA", "BTN-1": "BTNB", "BTN-2": "BTNC", "BTN-3": "BTND" },
    qi = {
      BTN: {},
      "BTN-1": {},
      "BTN-2": {},
      "BTN-3": {},
      BTNA: {},
      BTNB: {},
      BTNC: {},
      BTND: {},
      FB2A: {},
      FB2B: {},
      FB2C: {},
      FB2D: {},
    };
  let Wi = 0,
    Ki = 0;
  function Qi(t) {
    if (t) {
      let n = t?.slot?.getSlotElementId();
      (n = n.replace(/default|sda-|-sizer/gi, "")),
        (n = Vi[n] || n),
        qi[n] &&
          (Wi++,
          t.isEmpty ? t.isEmpty && (qi[n].validAd = !1) : (qi[n].validAd = !0)),
        Wi === Ki &&
          (((e, t) => {
            e.dispatchEvent(new CustomEvent(O, { detail: { positions: t } }));
          })(e, qi),
          (Wi = 0));
    }
  }
  function Ji() {
    Object.keys(this.config.positions).forEach((e) => {
      (e.includes("BTN") || e.includes("FB2")) && Ki++;
    }),
      this.gpt.addEventListener(x, (e) => {
        Qi.call(this, e);
      });
  }
  class Xi {
    constructor() {
      return (this.supplyTelemetrySent = []), this;
    }
    add(e, t, n) {
      return void 0 === this[e]
        ? ((this[e] = { [t]: n }), n)
        : void 0 === this[e][t]
          ? ((this[e][t] = n), n)
          : void 0;
    }
    delete(e, t) {
      this[e] && this[e][t] && delete this[e][t];
    }
    getAdComponent(e, t) {
      if (void 0 !== this[e]) return this[e][t];
    }
    getAdComponentById(e) {
      const t = Object.entries(this);
      for (let n = 0; n < t.length; n++) {
        const [, i] = t[n];
        if (void 0 !== i[e]) return i[e];
      }
    }
    getAdComponentByLoc(e) {
      const t = Object.entries(this);
      for (let n = 0; n < t.length; n++) {
        const [, i] = t[n],
          s = Object.values(i).find((t) => t?.kvs?.loc === e);
        if (s) return s;
      }
    }
    getRegionAdComponents(e) {
      return "object" == typeof this[e] ? Object.values(this[e]) : [];
    }
    getSameSideStackAdComponents(e, t) {
      const n = [],
        i = this.getStackAdComponents(t),
        s = qe[t];
      if (void 0 === s) return n;
      const o = e.includes(s[0]) ? s[0] : s[1];
      return (
        i.forEach((e) => {
          e.id.includes(o) && n.push(e);
        }),
        n
      );
    }
    getStackAdComponents(e) {
      const t = [],
        n = Object.entries(this);
      for (let i = 0; i < n.length; i++) {
        const [, s] = n[i];
        Object.values(s).forEach((n) => {
          ai(n) && n?.stackGroup === e && t.push(n);
        });
      }
      return t;
    }
    isBeaconFiredForSlot(e) {
      return Array.isArray(this.supplyTelemetrySent)
        ? !!this.supplyTelemetrySent.includes(e) ||
            (this.supplyTelemetrySent.push(e), !1)
        : ((this.supplyTelemetrySent = [e]), !1);
    }
  }
  class Zi {
    currentI13n = {};
    regions = {};
    constructor() {
      return this;
    }
    updateCurrent(e) {
      this.currentI13n = { ...this.currentI13n, ...e };
      const t = e.pstaid ?? e.lpstaid;
      t && this.putRegion(t, e);
    }
    clearKeysFromCurrent(e) {
      e.forEach((e) => {
        this.currentI13n[e] && delete this.currentI13n[e];
      });
    }
    putRegion(e, t) {
      this.regions[e]
        ? (this.regions[e] = { ...this.regions[e], ...t })
        : (this.regions[e] = t);
    }
    getRegion(e) {
      return this.regions[e];
    }
    getCurrent() {
      return this.currentI13n;
    }
    getKeyDifferences(e) {
      return Object.keys(e).reduce((t, n) => {
        let i = e[n],
          s = this.currentI13n[n];
        return (
          ve.hasOwnProperty(n) &&
            ((i = xi(i).join(",")), (s = Array.isArray(s) ? s.join(",") : s)),
          this.currentI13n.hasOwnProperty(n)
            ? i !== s && (t[n] = e[n])
            : (t[n] = e[n]),
          t
        );
      }, {});
    }
    createRSObject(e = this.currentI13n, t) {
      const n = {};
      for (const i of re)
        "axid" === i && t
          ? (n[i] = t)
          : void 0 !== e[i] && "" !== e[i] && (n[i] = e[i]);
      return n;
    }
    createPublisherBlob(e = this.currentI13n, t) {
      const n = this.createRSObject(e, t);
      return [
        Object.entries(n)
          .map((e) => e.join(":"))
          .join(";"),
        "",
        e.spaceid,
        "",
        "",
        "",
        e.bucket,
        "",
      ].join("|");
    }
  }
  const es = "liveintent.com";
  function ts(e) {
    return (
      e.source === es ||
      (e.uids && e.uids.some((e) => e.ext && e.ext.provider === es))
    );
  }
  function ns(e) {
    return e.userIdAsEids && e.userIdAsEids.some(ts);
  }
  function is(e) {
    return e.userSync?.userIds?.find((e) => e.name === Q.LIVEINTENT_ID);
  }
  function ss({
    areBidsEnrichedByLiveIntent: e,
    liveIntentEnabled: t,
    instrumentation: n,
  }) {
    const { LI_OFF: i, LI_ON_ENRICHED: s, LI_ON_NOT_ENRICHED: o } = n;
    return t ? (e ? s : o) : i;
  }
  var os = {
    applyLiveIntentSampling: function (t) {
      const n = _t(98);
      return (
        void 0 === e.liModuleEnabled &&
          ((e.liModuleEnabled = n), (e.liTreatmentRate = 100 / 98)),
        e.liModuleEnabled ? t : t.filter((e) => e.name !== Q.LIVEINTENT_ID)
      );
    },
    areBidsEnrichedByLiveIntent: !1,
    getLiveIntentInstrumentationKeys: function (e) {
      const t = is(e);
      if (!t) return Q;
      let n = Q;
      const { overrides: i } = t;
      return i && (n = { ...Q, ...i }), n;
    },
    getLiveIntentTargeting: ss,
    hasLiveIntentAdUnit: function (e) {
      return e.bids && e.bids.some(ns);
    },
    hasLiveIntentBid: ns,
    instrumentation: Q,
    isLiveIntentEnabled: function (e) {
      return !!is(e);
    },
    isLiveIntentSource: ts,
    liveIntentEnabled: !1,
    liveIntentInOriginalConfig: !1,
    logCachedEidsNotSent: function (t) {
      !t &&
        (function () {
          try {
            const t = e.localStorage?.getItem?.(Q.LOCAL_STORAGE_KEY);
            return !!t;
          } catch (e) {
            return !1;
          }
        })() &&
        Mn({ logType: Zt, message: dn, source: `${tn}:${nn}` });
    },
    logIfLiveIntentRequestFinishedInTime: function (e) {
      const t = Bt(Q.EIDS_URL),
        n = Bt("https://pbs.yahoo.com/openrtb2/auction");
      if (!t || !n) return;
      const i = t.responseEnd <= n.startTime ? pn : fn;
      e.sendDebugBeacon({
        message: `timeDifference:${Math.round(Math.abs(t.responseEnd - n.startTime))}ms`,
        type: i,
      });
    },
    logLiModuleLoadStatus: function (t) {
      const n = e.liQ_instances?.length > 0 ? un : gn;
      t.sendDebugBeacon({ logType: en, message: n, source: `${tn}:${nn}` });
    },
    sendLiveIntentBeacon: function ({
      instrumentation: e,
      areBidsEnrichedByLiveIntent: t,
      liveIntentEnabled: n,
      logger: i,
    }) {
      i.sendDebugBeacon({
        type: "YAHOO_PREBID_LIVEINTENT_TARGETING",
        [e.HB_UI_MOD]: ss({
          areBidsEnrichedByLiveIntent: t,
          instrumentation: e,
          liveIntentEnabled: n,
        }),
      });
    },
  };
  const rs = [
    "auctionEnd",
    "auctionInit",
    "beforeBidderHttp",
    "bidAccepted",
    "bidAdjustment",
    "bidderDone",
    "bidderError",
    "bidRejected",
    "bidRequested",
    "bidResponse",
    "bidTimeout",
    "bidWon",
  ];
  var as = {
    addNewAuctionToTracker: function (e, t) {
      const n = {
        auctionId: e,
        events: {
          auctionEnd: !1,
          auctionInit: !1,
          beforeBidderHttp: !1,
          bidAccepted: !1,
          bidAdjustment: !1,
          bidderDone: !1,
          bidderError: !1,
          bidRejected: !1,
          bidRequested: !1,
          bidResponse: !1,
          bidTimeout: !1,
          bidWon: !1,
        },
      };
      t[e] = n;
    },
    auctionEventsTrackerList: {},
    completedAuctions: 0,
    logAuctionEvents: function (e) {
      const { events: t, auctionId: n } = e,
        i = [];
      for (const e in t) t[e] || i.push(e);
      i.length &&
        ((e, t, n) => {
          Mn({
            logType: en,
            message: n,
            messageDetails: `auctionId:${e}|events:${t.join(",")}`,
            source: `${tn}:AUCTION`,
          });
        })(n, i, sn);
    },
    startAuctionEventsTracker: function (e, t) {
      rs.forEach((n) => {
        e.onEvent(n, (e) => {
          const i = t[e.auctionId];
          i && (i.events[n] = !0);
        });
      });
    },
  };
  const cs = "fast",
    ds = "normal",
    ls = {
      config: {
        setConfig: {
          bidderTimeout: 500,
          s2sConfig: { timeout: 500 },
          userSync: { auctionDelay: 0 },
        },
      },
      identifier: { locs: ["top_center"] },
    },
    hs = { delay: 200 },
    us = { [cs]: ls, [ds]: hs };
  function gs(e, t) {
    const n =
      e.config?.setConfig?.userSync?.auctionDelay ??
      t.setConfig.userSync?.auctionDelay ??
      300;
    return {
      setConfig: {
        bidderTimeout:
          e.config?.setConfig?.bidderTimeout ??
          t.setConfig.bidderTimeout ??
          2e3,
        s2sConfig: {
          timeout:
            e.config?.setConfig?.s2sConfig?.timeout ??
            t.setConfig.s2sConfig?.timeout ??
            2e3,
        },
        userSync: { auctionDelay: n },
      },
    };
  }
  const ps = {
    _batchPipeline(e, t) {
      if (!e.length || !this.requestBids || !this.pbjs) return;
      t && this.pbjs.mergeConfig(t.setConfig);
      const n = Nt();
      this.requestBids({ auctionId: n, auctionItems: e });
    },
    _process(e) {
      const t = { [cs]: [], [ds]: [] };
      e.forEach((e) => {
        const { stackGroup: n, loc: i } = e,
          { stackGroups: s, locs: o } = this.batchRule[cs]?.identifier;
        (n && s && s.includes(n)) || (i && o && o.includes(i))
          ? t[cs].push(e)
          : t[ds].push(e);
      }),
        Object.entries(t).forEach(([e, n]) => {
          if (!n.length) return;
          const i =
              this.features.enablePrebidBatchingDelay &&
              !!t[cs].length &&
              !!this.batchRule[e].delay,
            s = this.features.enablePrebidBatchingConfigs
              ? this.batchConfigMap[e]
              : void 0;
          setTimeout(
            () => {
              this._batchPipeline(n, s);
            },
            i ? this.batchRule[e].delay : 0,
          );
        });
    },
    add(e) {
      this.auctionQueue.push(e),
        this.debounceTimer && clearTimeout(this.debounceTimer),
        (this.debounceTimer = setTimeout(() => {
          const e = Nt();
          this.features.enablePrebidBatching
            ? this._process(this.auctionQueue)
            : null !== this.requestBids &&
              this.requestBids({
                auctionId: e,
                auctionItems: [...this.auctionQueue],
              }),
            (this.auctionQueue = []),
            (this.debounceTimer = null);
        }, 20));
    },
    auctionQueue: [],
    batchConfigMap: {},
    batchRule: us,
    debounceTimer: null,
    features: {},
    pbjs: null,
    requestBids: null,
    start(e) {
      const { pbjs: t, requestBids: n, prebidConfig: i, features: s } = e;
      (this.requestBids = n),
        (this.pbjs = t),
        (this.features = s || {}),
        this.features.enablePrebidBatching &&
          ((this.batchConfigMap[cs] = gs(this.batchRule[cs], i)),
          (this.batchConfigMap[ds] = gs(this.batchRule[ds], i)));
    },
  };
  function fs(e) {
    e.onEvent(K, (e) => {
      const t = (function (e) {
        const { adUnitCode: t, width: n, height: i } = e;
        return { data: { height: i, id: t, size: [n, i], width: n }, name: ke };
      })(e);
      Mt[ke] &&
        Mt[ke].forEach((e) => {
          e(t);
        });
    });
  }
  const ms = "pbjs",
    bs = "https://s.yimg.com/eh/prebid-config",
    ys = "Network error",
    Es = "fulfilled",
    _s = "rejected";
  var Is;
  !(function (e) {
    (e.READY = "READY"),
      (e.LOADING = "LOADING"),
      (e.ERROR = "ERROR"),
      (e.INIT = "INIT"),
      (e.DISABLED = "DISABLED");
  })(Is || (Is = {}));
  class vs {
    _pbjs;
    gptComponent;
    i13nStore;
    inBannerVideoAdEnabled;
    initialConfig;
    status;
    preSetupRequestsQueue;
    stackGroupAuctionState;
    auctionItemManager;
    stackGroupMap;
    logger;
    userModuleStatus;
    liveIntentUtils = os;
    auctionEventsTracking = as;
    constructor() {
      return (
        (this.status = Is.INIT),
        (this.preSetupRequestsQueue = []),
        (this.initialConfig = {
          prebid: {
            adUnits: {},
            bidders: {},
            filters: {},
            regionCountries: {},
            setConfig: {},
          },
        }),
        (this._pbjs = {}),
        (this._pbjs.que = []),
        void 0 !== e &&
          (e.pbjs ? (this._pbjs = e.pbjs) : (e.pbjs = this._pbjs)),
        (this.stackGroupMap = {}),
        (this.stackGroupAuctionState = {}),
        (this.auctionItemManager = ps),
        this._pbjs.que.push(() => {
          e.benji.logger.updateDatastore({
            [nt]: Math.round(e.performance.now()),
          });
        }),
        (this.userModuleStatus = {}),
        this
      );
    }
    start(t) {
      const { consent: n, gptComponent: i, benjiConfig: s, logger: o } = t;
      (this.gptComponent = i), (this.i13nStore = t.i13nStore);
      const {
        feature: r,
        i13n: a,
        positions: c,
        prebidSetting: { pbjs: d, pbConfig: l = {} },
      } = s;
      (this.inBannerVideoAdEnabled = a?.feature?.includes(
        "prebid-inBannerVideo",
      )),
        (this.logger = o),
        (this.status = Is.LOADING);
      const { allowOnlyLimitedAds: h, allowOnlyNonPersonalizedAds: u } = n;
      if (h || u) return void (this.status = Is.DISABLED);
      this._sendSessionStartBeacon(), (this.stackGroupMap = As(c));
      const g = !r.disableAssertiveYield;
      Promise.allSettled([
        this._fetchAYClientJS(e, g),
        this._fetchPBJS(e, d?.version),
        this._fetchConfig(a, l),
        this._fetchBPConfig(a),
      ])
        .then(([, e, t, n]) => {
          if (e.status === Es && t.status === Es && n.status === Es) {
            const e = t.value,
              {
                prebid: { setConfig: i },
              } = e;
            i.floors &&
              (i.floors.additionalSchemaFields = {
                gamPath: (e, t) => {
                  try {
                    const t = e?.ortb2Imp?.ext?.prebid?.storedrequest?.id;
                    return t || null;
                  } catch (e) {
                    return null;
                  }
                },
              }),
              (this.initialConfig = e);
            const s = this._filterUserIdModulesFromConfig(i);
            this.auctionItemManager.start({
              features: {
                enablePrebidBatching: a?.feature?.includes(
                  "enablePrebidBatching",
                ),
                enablePrebidBatchingConfigs: a?.feature?.includes(
                  "enablePrebidBatchingConfigs",
                ),
                enablePrebidBatchingDelay: a?.feature?.includes(
                  "enablePrebidBatchingDelay",
                ),
              },
              pbjs: this._pbjs,
              prebidConfig: e.prebid,
              requestBids: this._requestBids.bind(this),
            }),
              (this.liveIntentUtils.liveIntentInOriginalConfig =
                this.liveIntentUtils.isLiveIntentEnabled(s)),
              this.liveIntentUtils.liveIntentInOriginalConfig &&
                (this.logger.sendDebugBeacon({
                  logType: en,
                  message: mn,
                  messageDetails: nn,
                  source: ms,
                }),
                (s.userSync.userIds =
                  this.liveIntentUtils.applyLiveIntentSampling(
                    s.userSync.userIds,
                  ))),
              (this.liveIntentUtils.liveIntentEnabled =
                this.liveIntentUtils.isLiveIntentEnabled(s)),
              (this.liveIntentUtils.instrumentation =
                this.liveIntentUtils.getLiveIntentInstrumentationKeys(s));
            const o = n?.value;
            return (
              o &&
                (s.yahooRtdProvider = Object.assign({}, s.yahooRtdProvider, o)),
              this._setConfig(s),
              this._startObservables(),
              this._enableAnalytics(),
              this._enableSecureSignals(),
              void (this.status = Is.READY)
            );
          }
          throw new Error(hn);
        })
        .catch(() => {
          this.status = Is.ERROR;
        })
        .finally(() => {
          this.preSetupRequestsQueue.forEach((e) => {
            e();
          }),
            (this.preSetupRequestsQueue = []);
        }),
        fs(this);
    }
    startPrebid(e, t) {
      switch (this.status) {
        case Is.INIT:
        case Is.LOADING:
          this.preSetupRequestsQueue.push(() => {
            this.startPrebid(e, t);
          });
          break;
        case Is.ERROR:
        case Is.DISABLED:
          const { adComponentId: n, stackGroup: i } = e;
          if (i && Dt(n, i)) return;
          t();
          break;
        case Is.READY:
          try {
            const n = this._getAdUnitFromAdInfo(e);
            if (
              !(function (e) {
                return (
                  !!e && e.mediaTypes && Object.keys(e.mediaTypes).length > 0
                );
              })(n)
            ) {
              const { adComponentId: n, stackGroup: i } = e;
              if (i && Dt(n, i)) return;
              return void t();
            }
            this._splitAdUnitByMediaTypes(n).forEach((e) => {
              this.addAdUnit(e);
            });
            const { adComponentId: i, stackGroup: s, loc: o } = e,
              r = { adCode: i, callback: t, loc: o, stackGroup: s };
            this.auctionItemManager.add(r);
          } catch (e) {
            (this.status = Is.ERROR), t();
          }
      }
    }
    onEvent(e, t) {
      this._pbjs.que.push(() => {
        this._pbjs.onEvent(e, t);
      });
    }
    updateStackGroupMap(e) {
      this.stackGroupMap = { ...this.stackGroupMap, ...As(e) };
    }
    _enableAnalytics() {
      this._pbjs.que.push(() => {
        this._pbjs.enableAnalytics({ provider: "yahooAnalytics" });
      });
    }
    _enableSecureSignals() {
      const e = new Promise((e) => this._pbjs.que.push(e)),
        t = new Promise((e) => this.gptComponent.addCallbackToCmdQueue(e));
      return Promise.all([e, t]).then(() => {
        this._pbjs.registerSignalSources();
      });
    }
    _filterUserIdModulesFromConfig(e) {
      const t = e.userSync?.userIds;
      if (!t) return e;
      const n = t.filter((e) => {
        const t = e.name,
          n = this.isUserCountryEligible(t, "userIdModules");
        n ||
          this.logger.sendDebugBeacon({
            logType: en,
            message: vn,
            messageDetails: `${t}`,
            source: ms,
          });
        const i = this._isItemToBeDisabledUnderBucket(t, "userIdModules");
        this.userModuleStatus[t] = !i;
        return n && !i;
      });
      return { ...e, userSync: { ...e.userSync, userIds: n } };
    }
    _preAuction(e, t) {
      return t?.split("/").slice(-1)[0] || "";
    }
    _setConfig(t) {
      const { cobrand: n, site: i, region: s } = this.i13nStore.getCurrent(),
        o = this._getPrebidConfigPartnerKey(n);
      this._pbjs.que.push(() => {
        const { prebidVersion: n, yahooPrebidVersion: r } = e.benji;
        this.logger.updateDatastore({ pl2: n, pl3: r }),
          this._pbjs.setConfig({
            ...t,
            gptPreAuction: { customPreAuction: this._preAuction },
            realTimeData: {
              ...t.realTimeData,
              dataProviders: [
                ...(t.realTimeData?.dataProviders || []),
                {
                  name: "yahooRTDModule",
                  params: { cobrand: o, region: s, site: i },
                  waitForIt: !0,
                },
              ],
            },
          }),
          this._setBidderSettings();
      });
    }
    _setBidderSettings() {
      if (!this.initialConfig?.prebid?.bidderSettings) return;
      const e = this.initialConfig.prebid.bidderSettings;
      this._pbjs.bidderSettings || (this._pbjs.bidderSettings = {});
      for (const t of Object.keys(e)) this._pbjs.bidderSettings[t] = e[t];
    }
    _decideWinningAndLosingStackGroupSides(e, t) {
      let n = [];
      const i = [],
        s = [],
        o = {};
      return (
        new Set(e.map((e) => e.stackGroup).filter((e) => void 0 !== e)).forEach(
          (e) => {
            if (!this.stackGroupMap[e]) return;
            const [i, s] = this.stackGroupMap[e],
              o = Ss(i, t) < Ss(s, t) ? i : s;
            n = [...n, ...o];
          },
        ),
        e.forEach((e) => {
          n.includes(e.adCode)
            ? s.push(e)
            : (i.push(e), (o[e.adCode] = t[e.adCode]));
        }),
        [i, o, s]
      );
    }
    _completePostAuctionSteps(e, t) {
      this._pbjs.que.push(() => {
        this._updateAdServerTargeting(t),
          this._pbjs.setTargetingForGPTAsync(Object.keys(t)),
          e.forEach((e) => {
            e.callback();
          }),
          this.inBannerVideoAdEnabled &&
            ((e) => {
              Object.keys(e).forEach((t) => {
                e[t].bids.forEach((e) => {
                  const t = Wn(e);
                  Mn({
                    logType: en,
                    message: "BID_WON",
                    messageDetails: JSON.stringify({ ...t }),
                    source: Sn,
                  });
                });
              });
            })(t);
      });
    }
    _logLiveIntentRequestTiming() {
      !this.liveIntentUtils.liveIntentEnabled ||
        this.auctionEventsTracking.completedAuctions > 1 ||
        (this.liveIntentUtils.logLiModuleLoadStatus(this.logger),
        this.liveIntentUtils.logIfLiveIntentRequestFinishedInTime(this.logger));
    }
    _requestBids(t) {
      const { auctionId: n, auctionItems: i } = t,
        s = i.map((e) => e.adCode);
      this._pbjs.que.push(() => {
        this.auctionEventsTracking.addNewAuctionToTracker(
          n,
          this.auctionEventsTracking.auctionEventsTrackerList,
        ),
          s.forEach((t) => {
            e.benji.logger.updateDatastore(t, {
              [it]: Math.round(e.performance.now()),
            });
          }),
          this._pbjs.requestBids({
            adUnitCodes: s,
            auctionId: n,
            bidsBackHandler: (e = {}) => {
              this.auctionEventsTracking.completedAuctions++,
                0 === Object.keys(e).length &&
                  Mn({
                    logType: en,
                    message: bn,
                    messageDetails: `auctionId: ${n}`,
                    source: ms,
                  }),
                this._logLiveIntentRequestTiming(),
                this.gptComponent.addCallbackToCmdQueue(() => {
                  const t = [],
                    s = {},
                    o = [],
                    r = {};
                  i.forEach((n) => {
                    const { adCode: i, stackGroup: a } = n;
                    a ? (o.push(n), (r[i] = e[i])) : (t.push(n), (s[i] = e[i]));
                  }),
                    this._completePostAuctionSteps(t, s);
                  const [a, c, d] = this._decideWinningAndLosingStackGroupSides(
                      o,
                      r,
                    ),
                    l = (function (e, t) {
                      const n = { data: {}, name: Me },
                        i = {
                          losingSide: { adIds: [] },
                          winningSide: { adIds: [] },
                        };
                      return (
                        [...e, ...t].forEach((e) => {
                          const { stackGroup: t } = e;
                          void 0 !== t &&
                            void 0 === n.data[t] &&
                            (n.data[t] = i);
                        }),
                        e.forEach((e) => {
                          const { stackGroup: t, adCode: i } = e;
                          void 0 !== t && n.data[t].winningSide.adIds.push(i);
                        }),
                        t.forEach((e) => {
                          const { stackGroup: t, adCode: i } = e;
                          void 0 !== t && n.data[t].losingSide.adIds.push(i);
                        }),
                        n
                      );
                    })(a, d);
                  Mt[Me] &&
                    Mt[Me].forEach((e) => {
                      e(l);
                    });
                  const h = l.data;
                  if (
                    (Object.entries(h).forEach(([e, t]) => {
                      this.stackGroupAuctionState[e] = t;
                    }),
                    this._completePostAuctionSteps(a, c),
                    this._sendUserSyncModuleStatusToGAM(),
                    this.auctionEventsTracking.auctionEventsTrackerList.hasOwnProperty(
                      n,
                    ))
                  ) {
                    const e =
                      this.auctionEventsTracking.auctionEventsTrackerList[n];
                    this.auctionEventsTracking.logAuctionEvents(e);
                  }
                });
            },
          });
      });
    }
    _updateAdServerTargeting(e) {
      Object.keys(e).forEach((t) => {
        const n = e[t];
        n?.bids?.forEach((e) => {
          const t = e?.adserverTargeting?.hb_pb;
          if (t) {
            const n = parseFloat(t);
            !isNaN(n) && n > 100
              ? (e.adserverTargeting.hb_pb100 = !0)
              : (e.adserverTargeting.hb_pb100 = !1);
          }
          "380x100" === e?.adserverTargeting?.hb_size &&
            (e.adserverTargeting.hb_responsive = 1),
            Object.keys(e.adserverTargeting).forEach((t) => {
              We.includes(t) || delete e.adserverTargeting[t];
            });
        });
      });
    }
    _getPrebidConfigPartnerKey(e) {
      return (e && oe[e]) || D;
    }
    _fetchConfig(e, t) {
      if (
        (function (e) {
          return void 0 !== e.prebid;
        })(t)
      )
        return new Promise((e) => {
          e(t);
        });
      const { partner: n, device: i, region: s, site: o, feature: r } = e,
        a = this._getPrebidConfigPartnerKey(n),
        c =
          r && Array.isArray(r) ? r.find((e) => e.includes("prebid-")) : void 0,
        d = [],
        l = `${o}-${s}-${i}`.toLowerCase();
      let h = "",
        u = "";
      const g = `${bs}/${l}.json`;
      let p;
      d.push(fetch(g)),
        a && a !== D && ((h = `${bs}/${a}-${l}.json`), d.push(fetch(h))),
        c && ((u = `${bs}/${l}-${c}.json`), d.push(fetch(u)));
      const f = { error: An, type: hn };
      return Promise.allSettled(d)
        .then(([e, t, n]) => {
          if (n) {
            if (!(n.status === _s || (n.value && 403 === n.value.status)))
              return (p = n.value.url), n.value.json();
            this.logger.sendDebugBeacon({ ...f, errorMessage: `${ys}: ${u}` });
          }
          if (t) {
            if (!(t.status === _s || (t.value && 403 === t.value.status)))
              return (p = t.value.url), t.value.json();
            {
              const e = a && a !== D ? h : u;
              this.logger.sendDebugBeacon({
                ...f,
                errorMessage: `${ys}: ${e}`,
              });
            }
          }
          if (e.status === _s || (e.value && 403 === e.value.status))
            throw (
              (this.logger.sendDebugBeacon({
                ...f,
                errorMessage: `${ys}: ${g}`,
              }),
              new Error(An))
            );
          return (p = g), e.value.json();
        })
        .then((e) => {
          if (!e || !e.prebid)
            throw (
              (this.logger.sendDebugBeacon({
                ...f,
                errorMessage: `Parsing error: ${p}`,
              }),
              new Error(An))
            );
          return e;
        });
    }
    _fetchPBJS(e, t) {
      return new Promise((n, i) => {
        !(function (e, t, n, i) {
          if (t) {
            const s = L.replace(v, t);
            Bi({
              id: k,
              onerrorCb: () => {
                document.getElementById(k)?.remove(), Oi(e, n, i);
              },
              onloadCb: n,
              tagSrc: s,
              WIN: e,
            });
          } else Oi(e, n, i);
        })(
          e,
          t,
          () => {
            n(En);
          },
          (e, t) => {
            this.logger.sendDebugBeacon({
              error: yn,
              errorMessage: `${ys}: ${Ni(e, t)}`,
              type: hn,
            }),
              i(new Error(yn));
          },
        );
      });
    }
    _fetchAYClientJS(e, t) {
      return t
        ? ((e.assertive = Ke),
          new Promise((t, n) => {
            !(function (e, t, n) {
              Bi({
                async: !0,
                id: "ay-script",
                onerrorCb: n,
                onloadCb: t,
                tagSrc: "https://s.yimg.com/du/ay/wnsrvbjmeprtfrnfx.js",
                WIN: e,
              });
            })(
              e,
              () => {
                t(an);
              },
              (e, t) => {
                this.logger.sendDebugBeacon({
                  error: rn,
                  errorMessage: `${ys}: ${Ni(e, t)}`,
                  type: ln,
                }),
                  n(new Error(rn));
              },
            );
          }))
        : new Promise((e) => {
            e(on);
          });
    }
    _fetchBPConfig(e) {
      const { partner: t, site: n } = e;
      let i = `${bs}/bp-${n}`;
      return (
        t && "none" !== t && (i += `-${t}`),
        new Promise((t, n) => {
          const s = e?.feature?.includes("benji-bpConfigInBenji");
          (i += ".json"),
            s
              ? fetch(i)
                  .then((e) => {
                    if (!e.ok) throw new Error(cn);
                    t(e.json());
                  })
                  .catch(() => {
                    this.logger.sendDebugBeacon({
                      error: cn,
                      errorMessage: `${ys}: ${i}`,
                      type: hn,
                    }),
                      n(new Error(cn));
                  })
              : t();
        })
      );
    }
    _getMediaTypes(e) {
      const t = {},
        { adComponentPath: n, size: i } = e,
        s = n.split("/").slice(-1)[0],
        o = this.initialConfig.prebid.adUnits[s];
      if (!o) return t;
      if (o.formats?.banner) {
        const e = kt(o.formats.banner.sizes, i);
        e.length && (t.banner = { pos: o.pos, sizes: e });
      }
      if (this.inBannerVideoAdEnabled && o.formats?.video) {
        const e = kt(o.formats.video.sizes, i);
        e.length &&
          (t.video = {
            context: o.formats.video.context,
            playerSize: e,
            ...ht,
          });
      }
      return t;
    }
    _isItemToBeDisabledUnderBucket(e, t) {
      const n = this.initialConfig.prebid.filters?.[t]?.[e]?.disabledBucketRate;
      let i = !1;
      return n && "number" == typeof n && (i = _t(100 * n)), i;
    }
    isUserCountryEligible(e, t) {
      const n = this.initialConfig.prebid.filters?.[t];
      if (!n) return !0;
      const i = (this.i13nStore.getCurrent()?.usercountry ?? "").toString(),
        s = (this.i13nStore.getCurrent()?.toscountry ?? "").toString();
      if (!i && !s) return !0;
      const o = n[e] || n.DEFAULT,
        { allowList: r, blockList: a } = o,
        c = !i || this._isUserLocationEligible(i, r, a),
        d = !s || this._isUserLocationEligible(s, r, a);
      return c && d;
    }
    _isUserLocationEligible(e, t, n) {
      const i = this.initialConfig.prebid.regionCountries,
        s = n && this._isUserLocationInList(n, i, e),
        o = t && this._isUserLocationInList(t, i, e),
        r = !("*" === t?.userCountry || t?.userCountry?.includes(e)) && !o,
        a = n?.userCountry?.includes(e);
      let c = !0;
      return ((t && r) || a || s) && (c = !1), c;
    }
    _isUserLocationInList(e, t, n) {
      return t && e.userRegion?.some((e) => t[e]?.includes(n));
    }
    _getBids(e) {
      const { adComponentPath: t } = e,
        n = t.split("/"),
        i = n[n.length - 1],
        s = this.initialConfig.prebid.adUnits[i];
      if (void 0 === s) return;
      const { bidders: o } = s;
      return Object.keys(o)
        .filter((e) => this.isUserCountryEligible(e, "bidders"))
        .map((e) => ({
          bidder: e,
          params: { ...this.initialConfig.prebid.bidders[e], ...o[e] },
        }));
    }
    _getAdUnitFromAdInfo(e) {
      const t = this._getBids(e);
      if (!t) return;
      const n = this._getOrtb2Imp(e, t),
        i = this._getMediaTypes(e);
      return {
        bids: t,
        code: e.adComponentId,
        mediaTypes: i,
        ...(n && { ortb2Imp: n }),
        ...(i.video && { renderer: ei(this.i13nStore.getCurrent(), e) }),
      };
    }
    _splitAdUnitByMediaTypes(e) {
      const { mediaTypes: t, renderer: n, ...i } = e,
        s = [];
      return (
        t.banner && s.push({ ...i, mediaTypes: { banner: t.banner } }),
        this.inBannerVideoAdEnabled &&
          t.video &&
          s.push({ ...i, mediaTypes: { video: t.video }, renderer: n }),
        s
      );
    }
    _getOrtb2Imp(e, t) {
      const n = e.adComponentPath.split("/").slice(-1)[0],
        i = t.find((e) => "yahooPrebidServer" === e.bidder);
      if (i && !1 !== i.params?.enabled) {
        const t = this.i13nStore.createRSObject(),
          { axid: i, ...s } = t,
          o = this.i13nStore.getCurrent().bucket,
          r = Array.isArray(o) ? o.join(",") : o;
        return {
          ext: {
            prebid: {
              passthrough: {
                ...(r && { bucket: r }),
                client: ms,
                gamAdCode: n,
                liveintentenabled: this.liveIntentUtils.liveIntentEnabled,
                liveRampEnabled: this.userModuleStatus[B],
                pairIdEnabled: this.userModuleStatus.pairId,
                ...(e.loc && { gamLoc: e.loc }),
                ...s,
              },
              storedrequest: { id: n },
            },
          },
        };
      }
      return null;
    }
    addAdUnit(e) {
      this._adUnits().filter((t) => {
        const { code: n, mediaTypes: i } = t;
        if (n !== e.code) return !1;
        return (
          (i.banner && e.mediaTypes.banner) ||
          (this.inBannerVideoAdEnabled && i.video && e.mediaTypes.video)
        );
      }).length > 0 ||
        this._pbjs.que.push(() => {
          this._pbjs.addAdUnits(e);
        });
    }
    removeAdUnit(e) {
      const t = this._adUnits().filter((t) => t.code === e)[0];
      return t
        ? (this._pbjs.que.push(() => {
            this._pbjs.removeAdUnit(e);
          }),
          t)
        : null;
    }
    _adUnits() {
      return this._pbjs.adUnits || [];
    }
    _sendSessionStartBeacon() {
      this.logger.sendDebugBeacon({ type: _n });
    }
    _sendUserSyncModuleStatusToGAM() {
      this._userSyncSetTargetingHelper("liveramp.com", B, "lr_env");
    }
    _userSyncSetTargetingHelper(e, t, n) {
      let i = "off";
      if (this.userModuleStatus[t]) {
        i = this._pbjs.getUserIdsAsEids().find((t) => t.source === e)
          ? "id"
          : "no-id";
      }
      this.gptComponent.setTargeting({ [n]: i });
    }
    _startObservables() {
      this.onEvent(W, (t) => {
        const { adUnitCodes: n } = t;
        n?.forEach((t) => {
          e.benji.logger.updateDatastore(t, {
            [st]: Math.round(e.performance.now()),
          });
        });
      }),
        this.onEvent(q, (t) => {
          const { adUnitCodes: n } = t;
          n?.forEach((t) => {
            e.benji.logger.updateDatastore(t, {
              [ot]: Math.round(e.performance.now()),
            });
          });
        });
      const { liveIntentEnabled: t, liveIntentInOriginalConfig: n } =
        this.liveIntentUtils;
      n &&
        (t
          ? this._activateLiveIntentObservable()
          : this._setLiveIntentTargeting(),
        this.onEvent(W, () => {
          this.liveIntentUtils.sendLiveIntentBeacon({
            ...this.liveIntentUtils,
            logger: this.logger,
          });
        }),
        this.logger.sendDebugBeacon({
          logType: en,
          message: In,
          messageDetails: `${nn}-${t ? 98 : 2}`,
          source: ms,
        })),
        this._pbjs.que.push(() => {
          this.auctionEventsTracking.startAuctionEventsTracker(
            this._pbjs,
            this.auctionEventsTracking.auctionEventsTrackerList,
          );
        });
    }
    _setLiveIntentTargeting(e) {
      const { liveIntentEnabled: t, instrumentation: n } = this.liveIntentUtils,
        { t0: i, t1: s, e0: o, e1: r, LI_REPORTING_KEY: a, HB_UI_MOD: c } = n;
      this.gptComponent.addCallbackToCmdQueue(() => {
        let d = t ? s : i;
        const l = this.liveIntentUtils.getLiveIntentTargeting({
          areBidsEnrichedByLiveIntent: !!e,
          instrumentation: n,
          liveIntentEnabled: t,
        });
        void 0 !== e && (d += e ? r : o),
          this.gptComponent.setTargeting({ [c]: l, [a]: d });
      });
    }
    _activateLiveIntentObservable() {
      this.onEvent(W, (e) => {
        this._setBidsEnriched(e),
          this._setLiveIntentTargeting(
            this.liveIntentUtils.areBidsEnrichedByLiveIntent,
          ),
          this.liveIntentUtils.logCachedEidsNotSent(
            this.liveIntentUtils.areBidsEnrichedByLiveIntent,
          );
      });
    }
    _setBidsEnriched(e) {
      const { adUnits: t } = e;
      this.liveIntentUtils.areBidsEnrichedByLiveIntent = !!t?.some(
        this.liveIntentUtils.hasLiveIntentAdUnit,
      );
    }
  }
  function As(e) {
    const t = (function (e) {
        const t = {};
        for (const [n, i] of Object.entries(e)) {
          const e = St(i) && i?.stackGroup;
          e && (t[e] || (t[e] = []), t[e].push(n));
        }
        return t;
      })(e),
      n = {};
    for (const [e, i] of Object.entries(t)) {
      if (void 0 === qe[e]) continue;
      const [t, s] = qe[e],
        o = [[], []];
      i.forEach((e) => {
        e.includes(t) ? o[0].push(e) : e.includes(s) && o[1].push(e);
      }),
        (n[e] = o);
    }
    return n;
  }
  function Ss(e, t) {
    return e.reduce((e, n) => {
      const i = t[n]
        ? (function (e) {
            return 0 === e.length ? 0 : Math.max(...e.map((e) => e.cpm));
          })(t[n].bids)
        : 0;
      return e + i;
    }, 0);
  }
  class Cs {
    gpt;
    ypb;
    config;
    targetOrigin;
    containerMap;
    store;
    i13nStore;
    constructor() {
      (this.i13nStore = new Zi()),
        (this.config = {}),
        (this.store = new Xi()),
        (this.containerMap = {}),
        (this.targetOrigin = ""),
        (this.gpt = new jt()),
        (this.ypb = new vs());
    }
    getAdComponent = (e, t = g) => this.store.getAdComponent(t, e);
    handleSlotRenderEnded = (e) => {
      const { size: t } = e;
      this.postMessageToParent({
        payload: {
          id: e.slot.getSlotElementId(),
          size: t,
          sizes: e.slot.getSizes(),
        },
        type: d,
      });
    };
    handleIntersect = (e) => {
      e.forEach((e) => {
        const { id: t, isIntersecting: n } = e,
          i = this.getAdComponent(t);
        i &&
          ai(i) &&
          (i._isIntersecting !== n &&
            n &&
            i?.eligibleForTimedRefresh &&
            i?.refresh(),
          (i._isIntersecting = n));
      });
    };
    handleImpressionViewable = (e) => {
      const t = e.slot.getSlotElementId(),
        n = this.getAdComponent(t);
      n && ai(n) && n.timer?.start();
    };
    initialize() {
      const e = location.origin;
      this.containerMap = {};
      const t = window.parent.frames,
        n = Object.keys(this.config.positions);
      for (let i = 0; i < t.length; i++)
        try {
          const { location: s } = t[i];
          if (s.origin === e && s.href !== location.href)
            for (let e = 0; e < n.length; e++) {
              if (this.containerMap[n[e]]) continue;
              const s = t[i].window.document.getElementById(n[e]);
              if (s) {
                this.containerMap[n[e]] = s;
                break;
              }
            }
        } catch (e) {}
    }
    handleInit = ({ config: e, origin: t }) => {
      (this.config = e), (this.targetOrigin = t), this.initialize();
    };
    handleStart = () => {
      this.config?.positions && (this.fetch(), this.render());
    };
    handlePostMessage = (e) => {
      if (((t = e.origin), !i.test(t))) return;
      var t;
      const { payload: n, type: d } = e.data;
      switch (d) {
        case s:
          this.handleInit({ config: n.config, origin: e.origin }),
            this.postMessageToParent({ type: o });
          break;
        case l:
          this.handleStart();
          break;
        case c:
          this.render(n.config);
          break;
        case r: {
          const { age: e, atsd: t, axid: i, gender: s } = n;
          Ui(this.gpt, {
            age: e,
            atsd: Ot(t),
            axid: i,
            gender: s,
            i13n: this.config.i13n,
            queryI13n: null,
            testid: null,
          });
          break;
        }
        case a:
          this.handleIntersect(n);
          break;
        case h:
          this.store.getRegionAdComponents(g).forEach((e) => {
            ai(e) && e?._isIntersecting && (e.refresh(), e.timer?.start());
          });
      }
    };
    init() {
      const e = new URL(window.location.href);
      (this.targetOrigin = decodeURIComponent(e.searchParams.get("o") || "")),
        window.addEventListener("message", this.handlePostMessage),
        this.gpt.addEventListener(x, this.handleSlotRenderEnded),
        this.gpt.addEventListener(z, this.handleImpressionViewable);
    }
    postMessageToParent(e) {
      window.parent.postMessage(e, this.targetOrigin);
    }
    fetch(e) {
      return Ts.call(this, e ?? this.config.positions);
    }
    render(e) {
      (e ? this.fetch(e) : this.store.getRegionAdComponents(g)).forEach((e) => {
        e.render();
      });
    }
  }
  function Ts(e) {
    const t = [],
      n = new zt(),
      i = new ci();
    return (
      n.setNext(i),
      Object.entries(e).forEach(([e, i]) => {
        const s = n.handle({ context: this, positionConfig: i, positionId: e });
        s && t.push(s);
      }),
      t
    );
  }
  function Rs() {
    this instanceof Cs ||
      this.on(ke, (e) => {
        !(function (e) {
          const { data: t } = e,
            { id: n, height: i } = t,
            s = document.getElementById(n),
            o = s?.clientHeight;
          null !== i && i !== o && s?.style.setProperty("min-height", i + "px");
        })(e);
      });
  }
  function Ls() {
    this.gpt.addEventListener(x, (e) => {
      const t = e.slot.getSlotElementId(),
        n = this.store.getAdComponentById(t);
      if (void 0 === n || !ai(n)) return;
      const i = yi(e, n);
      void 0 !== i && this.logger.sendMetricsBeacon(i);
    });
  }
  function ws(e, t) {
    (Array.isArray(e) ? e : [e]).forEach((e) => {
      e.renewTimer(t);
    });
  }
  function Ps(e) {
    const t = (function (e) {
        return e.advertiserId && e.campaignId && e.creativeId && e.lineItemId
          ? S.DirectSold
          : S.DynamicAllocation;
      })(e),
      n = (function (e) {
        const { advertiserId: t } = e;
        return t
          ? Z.House.includes(t)
            ? C.House
            : Z.AdX.includes(t)
              ? C.AdX
              : Z.YahooPrebid.includes(t)
                ? C.YahooPrebid
                : C.Unknown
          : C.Unknown;
      })(e);
    return t === S.DirectSold && n === C.Unknown;
  }
  function ks(e, t, n, i = !1) {
    const s = e.config.setting?.refresh?.reserved,
      o = (function (e, t, n) {
        if (!n) return 0;
        const i = t && n.sponsorship ? n.sponsorship : n?.duration || 0,
          s = e.size;
        if (!Array.isArray(s)) return i;
        const o = JSON.stringify(s),
          r = n[R[o]];
        return r ? (t && r?.sponsorship ? r?.sponsorship : r?.duration) : i;
      })(t, i, s),
      r = n?.refreshConfig?.reserved;
    return (i && r?.sponsorship ? r?.sponsorship : r?.duration) || o;
  }
  function Ds(e, t) {
    const n = document.getElementById(e),
      i = Et(n);
    i &&
      (i.classList.add("gam-sticky-ad"),
      t.height && i.style.setProperty("min-height", t.height + "px"));
  }
  const Bs = "benji-premium-ad",
    Os = "D(n)--landscape";
  function Ns(e, t, n) {
    let i;
    const s = document.getElementById(e);
    if (!s) return;
    const o = s?.children[0],
      r = o?.children[0];
    if (t) {
      const e = Object.keys(t).find((e) => {
        const n = e && t[e];
        return !!n && !0 === n.isEligibleForResize;
      });
      i = e && t[e];
    }
    if (!i) return;
    const a = window.innerWidth,
      c = i?.breakpoints;
    let d,
      l = !0;
    for (const e in c)
      if (r && e) {
        const t = e.split(","),
          i = Number(t[0]),
          h = Number(t[1]);
        if (a >= i && a <= h) {
          const t = c[e];
          (d = (a * t[1]) / t[0]),
            l &&
              (n
                ? s.setAttribute("style", `all: revert; min-height: ${d}px;`)
                : s.setAttribute("style", `min-height: ${d}px;`),
              (l = !1)),
            (o.style.display = "block"),
            (r.height = d.toString()),
            (r.width = a.toString());
        }
      }
  }
  function js(e, t, n) {
    const i = [],
      s = document.getElementById(e);
    if (s) {
      if (!n) {
        for (const e of s.classList) {
          const t = e;
          t.toLowerCase().startsWith("sda") || i.push(t);
        }
        s.classList.remove(...i);
      }
      s.classList.add(`${Bs}`),
        t &&
          (function (e) {
            e.classList?.add(Os);
            const t = e.parentElement && Et(e.parentElement);
            t?.classList?.add(Os);
          })(s);
    }
  }
  function Ms(e) {
    const t = e.slot.getSlotElementId(),
      n = this.store.getAdComponentById(t),
      i = this.config,
      s = this.config.feature?.enableNewPremiumAdLogic;
    if (void 0 === n || !ai(n)) return;
    const o = n.customSizeConfig,
      r = n.stickyConfig;
    if (Ps(e)) {
      const t = ks(this, e, n, !1);
      t && ws(n, t);
    }
    if (
      ((n.isEdgeToEdge = !1),
      o &&
        (function (e, t, n) {
          n &&
            Object.keys(n).forEach((i) => {
              let s;
              s = i && !0 === n[i] ? {} : i && n[i];
              const o = T[i];
              if (
                ((s = Object.assign({}, o, s)),
                t &&
                  s?.size &&
                  e?.size &&
                  s.size[0] === e.size[0] &&
                  s.size[1] === e.size[1])
              ) {
                s.breakpoints &&
                  ((s.isEligibleForResize = !0), (t.isEdgeToEdge = !0));
                const n = t.refreshConfig,
                  o = n?.reserved && n.reserved[i],
                  r = o?.duration,
                  a = o?.disableRefresh;
                a ? t.disableAllRefresh() : r && ws(t, r),
                  s.stickyConfig &&
                    Ds(e.slot.getSlotElementId(), s.stickyConfig);
              } else s.isEligibleForResize = !1;
              n[i] = s;
            });
        })(e, n, o),
      n.isEdgeToEdge && o)
    ) {
      Ns(n.id, o, s);
      js(t, "smartphone" === i.i13n?.device, s),
        (function (e, t) {
          e.loadResizeHandler(() => {
            e.isEdgeToEdge &&
              e.customSizeConfig &&
              Ns(e.id, e.customSizeConfig, t);
          });
        })(n, s);
    } else {
      const e = document.getElementById(t);
      if (e) {
        e?.classList?.remove(Os, Bs);
        const t = e?.parentElement && Et(e.parentElement);
        t?.classList?.remove(Os), s && (e.style.all = "");
      }
    }
    r?.enabled && Ds(t, r);
  }
  function Us() {
    this.gpt.addEventListener(x, (e) => {
      Ms.call(this, e);
    });
  }
  function zs() {
    this.gpt.addEventListener(G, (e) => {
      const t = e.slot.getSlotElementId(),
        n = this.store.getAdComponentById(t);
      if (!n) return;
      ai(n) && n.increaseFetchCount();
      const i = this.i13nStore.currentI13n?.site,
        s = (function (e, t) {
          return {
            data: { id: e.slot.getSlotElementId() },
            name: Be,
            ...Ut(e, t),
          };
        })(e, i);
      Mt[Be] &&
        Mt[Be].forEach((e) => {
          e(s);
        }),
        ai(n) && n.getRenderCount() >= 1 && n.unloadResizeHandler();
    }),
      this.gpt.addEventListener(x, (e) => {
        const t = e.slot.getSlotElementId(),
          n = this.store.getAdComponentById(t);
        if (n)
          if (
            (ai(n) &&
              (function (e) {
                if (void 0 === e) return;
                const t = `${e.getRenderCount()}`;
                e.gptComponent.setTargetingForSlot(e, { ri: t });
              })(n),
            e.isEmpty)
          ) {
            ai(n) && n?.increaseFailureCount();
            const t = this.i13nStore.currentI13n?.site,
              i = (function (e, t) {
                return {
                  data: { id: e.slot.getSlotElementId() },
                  name: De,
                  ...Ut(e, t),
                };
              })(e, t);
            Mt[De] &&
              Mt[De].forEach((e) => {
                e(i);
              });
          } else {
            if (
              !(
                null !== e.advertiserId &&
                Z.YahooPrebid.includes(e.advertiserId)
              )
            ) {
              const t = this.i13nStore.currentI13n?.site,
                n = (function (e, t) {
                  const { slot: n, size: i } = e;
                  let s = null,
                    o = null,
                    r = null;
                  return (
                    Array.isArray(i) && ((s = i[0]), (o = i[1]), (r = [s, o])),
                    {
                      data: {
                        height: o,
                        id: n.getSlotElementId(),
                        size: r,
                        width: s,
                      },
                      name: ke,
                      ...Ut(e, t),
                    }
                  );
                })(e, t);
              Mt[ke] &&
                Mt[ke].forEach((e) => {
                  e(n);
                });
            }
          }
      }),
      this.gpt.addEventListener(Y, (e) => {
        const t = this.i13nStore.currentI13n?.site,
          n = (function (e, t) {
            return {
              data: { id: e.slot.getSlotElementId() },
              name: Ne,
              ...Ut(e, t),
            };
          })(e, t);
        Mt[Ne] &&
          Mt[Ne].forEach((e) => {
            e(n);
          });
      }),
      this.gpt.addEventListener(z, (e) => {
        const t = this.i13nStore.currentI13n?.site,
          n = (function (e, t) {
            return {
              data: { id: e.slot.getSlotElementId() },
              name: je,
              ...Ut(e, t),
            };
          })(e, t);
        Mt[je] &&
          Mt[je].forEach((e) => {
            e(n);
          });
      });
  }
  function Fs(e) {
    let t = !1;
    const n = (e || []).filter((e) => !!document?.getElementById(e)),
      i = new Set(n),
      s = { positions: {} },
      o = () => {
        (Mt[Oe] || []).forEach((e) => {
          e(s);
        }),
          (t = !0);
      };
    0 !== i.size
      ? this.gpt.addEventListener(x, (e) => {
          if (t) return;
          const n = e.slot.getSlotElementId(),
            r = this.config.positions[n];
          if (i.has(n) && St(r)) {
            i.delete(n);
            const t = Ps(e);
            s.positions[n] = {
              adType: t ? ze.RESERVED : ze.STANDARD,
              id: n,
              loc: r.kvs?.loc,
              renderStatus: e.isEmpty ? De : ke,
            };
          }
          0 === i.size && o();
        })
      : o();
  }
  function xs() {
    this.on(ke, (e) => {
      const { id: t, width: n, height: i } = e.data,
        s = this.store.getAdComponentById(t);
      if (void 0 !== s && ai(s)) {
        if (void 0 === s.renderInfo.originalDisplayVal) {
          const e = document?.getElementById(s.id),
            t = e?.style.display || u;
          s.setRenderInfo({ originalDisplayVal: t });
        }
        n && i && s.setRenderInfo({ size: { height: i, width: n } });
      }
    });
  }
  function Gs() {
    this.on(Me, (e) => {
      const { data: t } = e,
        n = [],
        i = [];
      Object.entries(t).forEach(([e, t]) => {
        const { winningSide: s, losingSide: o } = t;
        n.push(...s.adIds), i.push(...o.adIds);
      }),
        [...n, ...i].forEach((e) => {
          const t = document.getElementById(e);
          t?.style.setProperty("display", "none");
        });
    }),
      this.gpt.addEventListener(x, (e) => {
        const t = e.slot.getSlotElementId(),
          n = this.ypb.stackGroupAuctionState;
        Object.values(n).forEach((e) => {
          if (e.winningSide.adIds.includes(t)) {
            const e = this.store.getAdComponentById(t);
            if (void 0 !== e && ai(e)) {
              const n = document.getElementById(t);
              n?.style.setProperty(
                "display",
                e.renderInfo.originalDisplayVal || u,
              );
            }
          }
        });
      });
  }
  function Ys() {
    this.taboola.addEventListener(V, (e) => {
      const t = (function (e) {
        if (!e || 0 === Object.keys(e).length) return;
        const { container: t, mode: n, placement: i, items: s } = e;
        return { data: { container: t, items: s, mode: n, placement: i } };
      })(e.detail);
      Mt[ke] &&
        Mt[ke].forEach((e) => {
          e(t);
        });
    });
  }
  function $s() {
    let t;
    t = e.benji.isInTopLevelWindow
      ? e.location.hostname
      : document.referrer.replace(/^https?:\/\//, "");
    const n = (function (e) {
      for (const t of e) if (Qe.includes(t)) return !0;
      return !1;
    })(t.split("."));
    return (
      n ||
        e.benji.logger.sendDebugBeacon({ domain: t, type: "INVALID_DOMAIN" }),
      n
    );
  }
  const Hs = /;\s/g,
    Vs = /([^=]+)=/i,
    qs = (e, t) => {
      let n = null;
      return (
        (t = t.trim()),
        e.document?.cookie.split(Hs).some((e) => {
          let i, s;
          const o = e.match(Vs);
          if (Array.isArray(o))
            try {
              (i = decodeURIComponent(o[1])),
                (s = decodeURIComponent(e.substring(i.length + 1)));
            } catch (e) {}
          return !(i !== t || !s) && ((n = s.trim()), !0);
        }),
        n
      );
    };
  function Ws() {
    window.addEventListener("message", (e) => {
      const t = e?.data?.creativeOrigin;
      if (!t || !t.includes("yahoomedia") || !e.data?.loc) return;
      const n = e.data?.loc,
        i = this.store.getAdComponentByLoc(n);
      i &&
        (i.creativeInteractionConfig = {
          ...i.creativeInteractionConfig,
          isYahooCreative: !0,
        });
    });
  }
  function Ks() {
    this.gpt.addEventListener(z, (e) => {
      const t = e.slot.getSlotElementId(),
        n = this.store.getAdComponentById(t);
      if (n && this.config.feature.enableAdInteractionBasedRefresh && ai(n)) {
        const e = document
          .getElementById(t)
          ?.querySelector("div[id^='google_ads_iframe_/22888152279/']");
        e &&
          ((n.creativeInteractionConfig = {
            ...n.creativeInteractionConfig,
            iframeContainer: e,
          }),
          (function (e) {
            const t = e.creativeInteractionConfig,
              {
                iframeContainer: n,
                isYahooCreative: i,
                scrollOffset: s,
                interactionStartHandler: o,
                interactionEndHandler: r,
              } = t;
            n &&
              (n.addEventListener("mouseenter", () => {
                i
                  ? (t.hoverTimerId = setTimeout(() => {
                      if (t.ycInteractionActive) return;
                      o();
                      const e =
                          window.scrollY || document.documentElement.scrollTop,
                        n = () => {
                          const t =
                              window.scrollY ||
                              document.documentElement.scrollTop,
                            i = Math.abs(t - e);
                          s &&
                            i > s &&
                            (r(), window.removeEventListener("scroll", n));
                        };
                      window.addEventListener("scroll", n);
                    }, 1e3))
                  : o();
              }),
              n.addEventListener("mouseleave", () => {
                i ? clearTimeout(t.hoverTimerId) : r();
              }));
          })(n));
      }
    });
  }
  function Qs() {
    const t = e.YahooCJS?.getConsentInfo();
    if (!t || t.errorMessage)
      return (
        console.warn("no consent map"),
        Mn({
          logType: "error",
          message: "CONSENT_MAP_NOT_FOUND",
          messageDetails: "No consent map found",
          source: "DIDOMI_UTILS",
        }),
        {}
      );
    const { consentTypes: n } = t;
    return (function (e) {
      const t = {};
      return e instanceof Map
        ? (e.forEach((e, n) => {
            const i = n
              .toLowerCase()
              .replace(/_([a-z])/g, (e, t) => t.toUpperCase());
            t[i] = e;
          }),
          t)
        : t;
    })(n);
  }
  const Js = [
    (e) => {
      if (!e.i13n || !e.i13n.hasOwnProperty("dmi_consent")) return;
      const t = e.i13n.dmi_consent ? "dmi_consent_true" : "dmi_consent_false";
      Array.isArray(e.i13n.bucket)
        ? e.i13n.bucket.push(t)
        : "string" == typeof e.i13n.bucket &&
          (e.i13n.bucket = [e.i13n.bucket, t]);
    },
  ];
  function Xs(t) {
    if (
      ((this.config = {
        ...t,
        event: t.event || {},
        feature: t.feature || {},
        i13n: t.i13n || {},
        prebidSetting: t.prebidSetting || {},
        setting: t.setting || {},
      }),
      ((e) => {
        Js.forEach((t) => t(e));
      })(this.config),
      (this.isInTopLevelWindow = e.self === e.top),
      this.logger.start(this),
      this.logger.updateDatastore({ [et]: Math.round(e.performance.now()) }),
      !$s())
    )
      return;
    this.config.setting.tracking = {
      ...this.config.setting.tracking,
      metrics: this.config.setting.tracking?.metrics ?? true,
      performance: this.config.setting.tracking?.performance ?? true,
    };
    let n = "configFeature";
    if (!1 !== this.config.feature.enableYahooPrebid) {
      const e = Boolean(
        this.config.i13n.feature?.includes("benji-disableYahooPrebid"),
      );
      (this.config.feature.enableYahooPrebid = !e && true),
        e && (n = "i13nFeature");
    }
    !1 !== this.config.feature.enableRefreshDebounce &&
      (this.config.feature.enableRefreshDebounce = true),
      zs.call(this),
      this.config.feature.enableAdInteractionBasedRefresh &&
        (Ws.call(this), Ks.call(this)),
      !0 === this.config.setting.tracking?.performance && Ii.call(this),
      !0 === this.config.setting.tracking?.metrics && Ls.call(this),
      !0 === this.config.setting.tracking?.debug &&
        (Ai.call(this),
        e.addEventListener(f, () => {
          Object.entries(this.config.positions).forEach(([e, t]) => {
            if (!St(t)) return;
            if (t.region !== g) return;
            const n = document?.getElementById(e);
            null === n && Ci(this, e);
          });
        }));
    const {
      feature: {
        enablef10d509c: i = fe,
        enableNTSFallback: s,
        enableYahooPrebid: o,
      },
      setting: { gptSetting: r, taboolaSetting: a },
    } = this.config;
    o || this.logger.sendDebugBeacon({ reason: n, type: "PREBID_DISABLED" }),
      i && Di(e, this.config.i13n.site);
    const {
      allowFirstPartyAds: c,
      allowOnlyNonPersonalizedAds: d,
      allowOnlyLimitedAds: l,
    } = this.config.setting?.consent || {};
    !(function (e, t = !1) {
      const n = t
        ? "https://pagead2.googlesyndication.com/tag/js/gpt.js"
        : "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
      (function (e) {
        return !(!e.googletag || !e.googletag.apiReady);
      })(e) || Bi({ id: "gpt-tag", tagSrc: n, WIN: e });
    })(e, !!l),
      o &&
        this.ypb.start({
          benjiConfig: this.config,
          consent: {
            allowFirstPartyAds: !!c,
            allowOnlyLimitedAds: !!l,
            allowOnlyNonPersonalizedAds: !!d,
          },
          gptComponent: this.gpt,
          i13nStore: this.i13nStore,
          logger: this.logger,
        }),
      s && this.nts.start({ benji: this });
    const h = {};
    this.config.feature &&
      U.forEach((e) => {
        this.config.feature[e] && (h[e] = this.config.feature[e]);
      }),
      this.gpt.setupService(h, r),
      this.gpt.setInitialPageUrl(t.i13n?.url);
    const { useSecure: u = !1 } = this.config.setting;
    if (!u) {
      if ((Mi(this, e), this.config.setting.refresh)) {
        Vt.call(this);
        const { tabFocus: t, requireUserAction: n } =
          this.config.setting.refresh;
        if (t) {
          const { outOfFocusDuration: n } = t;
          gt(n),
            e.addEventListener(ie, () => {
              Object.keys(Yt).forEach((e) => {
                (0, Yt[e])();
              }),
                (Ht.length = 0);
            });
        }
        n && qt();
      }
      e.addEventListener("resize", () => {
        Object.keys($t).forEach((e) => {
          (0, $t[e])();
        });
      });
    }
    var m;
    this.i13nStore.getCurrent().tbla_id ||
      this.i13nStore.updateCurrent({
        tbla_id: ((m = e), qs(m, "tbla_id") || ""),
      });
    const b = ((e = "") =>
      ("string" == typeof e
        ? Array.from(e)
            .map((e) => e.charCodeAt(0).toString(16))
            .join("")
        : ""
      ).substring(0, 150))(this.getAxid(Xe));
    a &&
      (this.taboola.setupService(this.config.feature, a, this.config.i13n.site),
      Si.call(this),
      Ys.call(this)),
      !b || d || l || this.gpt.setPublisherProvidedId(b),
      d ? this.gpt.setPrivacySettings(X) : l && this.gpt.setPrivacySettings(J);
    const y =
      this.config.setting.lazyLoad &&
      (function (e) {
        if (e) {
          if (!0 === e || !0 === e.gptLazyLoad) return Pe;
          for (const t in Pe) {
            if (e[t] && !e.gptLazyLoad) return e;
            if (e.gptLazyLoad && e.gptLazyLoad[t]) return e.gptLazyLoad;
          }
        }
      })(this.config.setting.lazyLoad);
    y && this.gpt?.enableLazyLoad(y);
    const { positions: E } = this.config;
    u ? this.secureController.start(this.config) : hi.call(this, E);
    const _ = Object.keys(this.store.index || {});
    Fs.call(this, _);
    const {
      setting: { renderOnStart: I = p },
    } = this.config;
    !0 === I && (u ? this.secureController.render() : Ti.call(this)),
      e.addEventListener(ee, (e) => {
        const t = e.detail;
        u
          ? this.secureController.render(t.positions)
          : Ti.call(this, t.positions);
      }),
      e.wafer
        ? ki()
        : e.addEventListener(M, function () {
            ki();
          }),
      this.config.feature?.enableLazyFetch && Xt(),
      !1 !== this.config.feature?.collapseWhenNoFill && Hi.call(this),
      !1 !== this.config.feature?.adjustMinHeight && Rs.call(this),
      !1 !== this.config.feature?.enablePremiumAds && Us.call(this),
      this.config.feature?.fireBrokerButtonEvent && Ji.call(this),
      this.config.feature?.enableGooglePrivacySandboxPAIGTest &&
        (function (e) {
          ji(e, "opus:gps-paig-test", "true");
        })(e),
      this.config.feature?.enableGooglePrivacySandboxARTest &&
        (function (e) {
          ji(e, "opus:gps-ar-test", "true");
        })(e),
      (function (e) {
        Bi({
          id: "opus-script",
          tagSrc: "https://opus.analytics.yahoo.com/tag/opus.js",
          WIN: e,
        });
      })(e),
      ((e) => {
        const t = new CustomEvent(ne);
        e.dispatchEvent(t);
      })(e),
      (this.isReady = !0),
      this.logger.sendDebugBeacon({ type: "BENJI_SESSION_START" }),
      xs.call(this),
      Gs.call(this);
  }
  const Zs = (e, t) => {
    const { firstPartyAds: n } = e,
      i = ((e, t) => {
        const n = ((e) => e.region || e.usercountry || "")(t);
        let i = $e;
        return (
          t.gdpr ? (i = Ge) : "us" === n.toLocaleLowerCase() && (i = Ye),
          i.some((t) => !1 === e[t])
        );
      })(e, t),
      s = ((e) => {
        let t = !1;
        const n = xe.every((t) => !e[t]),
          i = Fe.every((t) => e[t]);
        return (t = n && i), t;
      })(e);
    return {
      allowFirstPartyAds: n,
      allowOnlyLimitedAds: i,
      allowOnlyNonPersonalizedAds: s,
    };
  };
  function eo() {
    this.gpt.addEventListener(G, (e) => {
      const t = e.slot.getSlotElementId();
      this.nts.unmonitorPosition(t);
    }),
      this.gpt.addEventListener(x, (e) => {
        const t = e.slot.getSlotElementId(),
          n = this.store.getAdComponentById(t);
        if (!e.isEmpty || !n || !ai(n)) return;
        const i = n.ntsFallBack?.position;
        i
          ? this.nts.getFallbackPosition(n)
          : this.nts.loggerUtils.adFailedWithNoFallback(n, this.logger);
      });
  }
  function to(e, t) {
    const { id: n } = t,
      i = t.getRenderCount(),
      s = t.kvs?.loc ? t.kvs.loc : "undefined",
      o = e.isEmpty ? "failed" : "succeeded";
    return {
      errorMessage: e.errorMessage || "",
      id: n,
      loc: Array.isArray(s) ? s[0] : s,
      renderCount: i,
      sourceType: "native",
      status: o,
    };
  }
  var no = {
    __proto__: null,
    adFailedWithNoFallback: function (e, t) {
      const n = to(
        { errorMessage: "Failed ad with no fallback", isEmpty: !0 },
        e,
      );
      t.sendDebugBeacon(n);
    },
    fallbackEmptyTemplateError: function (e, t, n) {
      const i = this.getDebugContext({ errorMessage: e, isEmpty: !0 }, t);
      n.sendDebugBeacon(i);
    },
    fallbackRendered: function (e, t) {
      const n = this.getDebugContext({ isEmpty: !1 }, e);
      t.sendDebugBeacon(n);
    },
    getDebugContext: to,
  };
  const io = [
    "bucket",
    "hashtag",
    "lmsid",
    "lpstaid",
    "lu",
    "pct",
    "pd",
    "pt",
    "site",
  ];
  const so = "2.2.17";
  so.split(".")[0];
  const oo = new Zi(),
    ro = new jt(),
    ao = new (class {
      benjiConfig = {};
      unLoggedEvents = [];
      loggedEvents = {};
      maxBatchSize = 10;
      datastore = { page: {}, positions: {} };
      i13nStore;
      sampling = 10;
      loggerActive = !1;
      perfOffset = 0;
      isInTopLevelWindow;
      constructor(e) {
        this.i13nStore = e;
      }
      start(e) {
        (this.isInTopLevelWindow = e.isInTopLevelWindow),
          (this.benjiConfig = e.config),
          this.benjiConfig.setting.logger?.sampling &&
            (this.sampling = this.benjiConfig.setting.logger.sampling),
          this.benjiConfig.setting.logger?.perfOffset &&
            (this.perfOffset = Math.round(
              this.benjiConfig.setting.logger.perfOffset,
            )),
          this.addWindowEventListeners(),
          (this.loggerActive = _t(this.sampling));
        const {
            setting: {
              consent: {
                allowOnlyNonPersonalizedAds: t,
                allowOnlyLimitedAds: n,
              } = { allowOnlyLimitedAds: !1, allowOnlyNonPersonalizedAds: !1 },
            },
            i13n: {
              colo: i,
              device: s,
              region: o,
              lang: r,
              site: a,
              spaceid: c,
              bucket: d,
              ver: l,
              src: h,
              _rid: u,
              usercountry: g,
              partner: p,
            },
          } = this.benjiConfig,
          f = e.version;
        this.updateDatastore({
          colo: i,
          device: s,
          lang: r,
          limitedAds: n,
          NPA: t,
          partner: p,
          pl1: f,
          region: o,
          rid: u,
          s: c,
          site: a,
          src: h,
          test: Array.isArray(d) ? d.join(",") : d,
          usercountry: g,
          ver: l,
        });
      }
      isValidEvent(e) {
        return !!(e && e.logType && e.message && e.source);
      }
      addWindowEventListeners() {
        window.addEventListener(On, (e) => this.handleWindowEvents(e)),
          window.addEventListener(jn, () => this.handleVisibilityChange()),
          window.addEventListener(Nn, () => this.handleBeforeUnload());
      }
      handleWindowEvents(e) {
        this.isValidEvent(e.detail) &&
          ("error" !== e.detail?.logType
            ? this.loggerActive && this.sendDebugBeacon(e.detail)
            : this.sendDebugBeacon(e.detail));
      }
      handleBeforeUnload() {
        this.sendBatchLogs(!0);
      }
      handleVisibilityChange() {
        this.sendBatchLogs();
      }
      log({ logType: e, message: t, source: n, messageDetails: i }) {
        this.unLoggedEvents.push({
          logType: e,
          message: t,
          messageDetails: i,
          source: n,
        }),
          this.sendBatchLogs();
      }
      sendDebugBeacon(e) {
        const t = Bn(this.datastore, this.i13nStore),
          n = kn(Ln, { etrg: "backgroundPost", outcm: "gamDebug", ...t, ...e });
        Pn(n);
      }
      sendPerfBeacon(e, t) {
        if (!this.isInTopLevelWindow && 0 === this.perfOffset) return;
        const n = {
            etag: "performance",
            etrg: "backgroundPost",
            outcm: "performance",
            usergenf: "0",
          },
          i = { ...Dn(this.datastore, this.i13nStore), ...t };
        var s;
        const o = ((e, t) => {
          const { s: n, ...i } = t,
            s = Object.keys(i)
              .map((e) => `${e}=${encodeURIComponent(i[e])}`)
              .join("&");
          return `${e}?s=${n}&t=${Date.now()}&_I=&_AO=0&_NOL=0&${s}`;
        })(
          ((s = i.site),
          le.has(s) ? "https://3p-geo.yahoo.com/p" : "https://geo.yahoo.com/p"),
          { ...n, ...i, A_utm: JSON.stringify(e) },
        );
        Pn(o);
      }
      sendPositionPerfBeacon(e) {
        const { sec: t, ...n } = this.datastore.positions[e],
          {
            BENJI_START: i,
            GPT_READY: s,
            PREBID_START: o,
          } = this.datastore.page,
          r = { BENJI_START: i, GPT_READY: s, PREBID_START: o };
        this.sendPerfBeacon({ ...r, ...n }, { sec: t });
      }
      sendMetricsBeacon(e) {
        const t = Bn(this.datastore, this.i13nStore),
          n = kn(Ln, {
            etrg: "backgroundPost",
            outcm: "gamMetric",
            ...t,
            ...e,
          });
        return Pn(n);
      }
      sendBatchLogs(e = !1) {
        if (this.unLoggedEvents.length >= this.maxBatchSize || e) {
          const e = this.unLoggedEvents;
          (this.unLoggedEvents = []),
            e.forEach((e) => {
              this.sendDebugBeacon(e);
            });
        }
      }
      removeListeners() {
        window.removeEventListener(On, this.handleWindowEvents),
          window.removeEventListener(jn, this.handleVisibilityChange),
          window.removeEventListener(Nn, this.handleBeforeUnload);
      }
      updateDatastore(e, t) {
        let n, i;
        "string" == typeof e
          ? (void 0 === this.datastore.positions[e] &&
              (this.datastore.positions[e] = {}),
            (n = this.datastore.positions[e]),
            (i = t))
          : ((n = this.datastore.page), (i = e)),
          Object.entries(i).forEach(([e, t]) => {
            void 0 === n[e] &&
              ((function (e) {
                return ut.includes(e);
              })(e) &&
                "number" == typeof t &&
                (t += this.perfOffset),
              (n[e] = t));
          });
      }
    })(oo),
    co = new (class {
      activated = !1;
      activePositions = [];
      activeScriptSrcs = [];
      _intersectionObserver = {};
      _impressionObserver = {};
      logger;
      loggerUtils = no;
      constructor() {}
      start({ benji: e }) {
        (this.activated = !0),
          (this._intersectionObserver = new IntersectionObserver(
            this.handleIntersection,
            { threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] },
          )),
          (this._impressionObserver = new IntersectionObserver(
            this.handleImpressionIntersection,
            { threshold: [0.5] },
          )),
          (this.logger = e.logger),
          eo.call(e);
      }
      destroyAndCollapsePosition(e) {
        this.unmonitorPosition(e.id), Yi(e.id), e.destroy();
      }
      encodePblob(e) {
        const t = JSON.stringify(e);
        return encodeURIComponent(t);
      }
      getTemplateUrl(e) {
        const t = this.logger.i13nStore.currentI13n?.spaceid,
          n =
            ((i = this.logger.i13nStore.currentI13n),
            io.reduce(
              (e, t) => (i && i.hasOwnProperty(t) && (e[t] = i[t]), e),
              {},
            ));
        var i;
        return `https://nts.media.yahoo.com/api/v2/template?spaceid=${t}&adPositions=${e}&pageContext=${this.encodePblob(n)}`;
      }
      handleIntersection = (e) => {
        e.forEach((e) => {
          const { target: t, intersectionRatio: n } = e,
            i = t.id,
            s = xt[i];
          s && s(100 * n);
        });
      };
      handleImpressionIntersection = (e) => {
        e.forEach((e) => {
          const { target: t, intersectionRatio: n } = e;
          n > 0.5 &&
            (this.triggerAdImpressionViewable(t),
            this._impressionObserver.unobserve(t));
        });
      };
      triggerAdImpressionViewable(e) {
        const t = e.id,
          n = Gt[t];
        n && n();
      }
      fetchTemplate(e) {
        return fetch(e)
          .then((e) => {
            if (e.ok) return e.json();
            throw new Error("Network error");
          })
          .then((e) => {
            if (!e.ads || !e.ads.length) throw new Error("No ads found");
            const { template: t, adSize: n } = e.ads[0],
              [i, s] = n.split("x");
            return { height: s, template: t, width: i };
          });
      }
      unmonitorPosition(e) {
        const t = document.getElementById(e);
        t &&
          (this._intersectionObserver.unobserve(t),
          this._impressionObserver.unobserve(t));
      }
      monitorPosition(e) {
        e &&
          (this._intersectionObserver.observe(e),
          this._impressionObserver.observe(e));
      }
      getBlobURL(e) {
        const t = new Blob([e], { type: "text/html" });
        return URL.createObjectURL(t);
      }
      addTemplateToAdContainer(e, t) {
        const { template: n, width: i, height: s } = t,
          o = this.getBlobURL(n),
          r = document.createElement("iframe");
        (r.width = (Number(i) + 10).toString()),
          (r.height = (Number(s) + 10).toString()),
          (r.style.border = "none"),
          (r.sandbox = "allow-scripts allow-popups"),
          (r.src = o),
          (r.scrolling = "no"),
          (e.style.display = "flex"),
          (e.style.flexDirection = "column"),
          (e.style.alignItems = "center"),
          (e.innerHTML = ""),
          e.appendChild(r),
          URL.revokeObjectURL(o);
      }
      getFallbackPosition(e) {
        const t = document.getElementById(e.id);
        if (!t) return Promise.reject();
        const n = this.getTemplateUrl(e.ntsFallBack.position);
        return this.fetchTemplate(n)
          .then((n) => {
            this.addTemplateToAdContainer(t, n),
              this.monitorPosition(t),
              this.loggerUtils.fallbackRendered(e, this.logger);
          })
          .catch((t) => {
            this.destroyAndCollapsePosition(e),
              this.loggerUtils.fallbackEmptyTemplateError(t, e, this.logger);
          });
      }
    })(),
    lo = new (class {
      config;
      _iframe;
      _iframeReady;
      _observer;
      _commandQueue;
      targetOrigin;
      constructor() {
        (this.config = {}),
          (this._iframeReady = !1),
          (this._commandQueue = []),
          (this.targetOrigin = "https://s.yimg.com");
      }
      handlePostMessage = (e) => {
        if (e.origin !== this.targetOrigin) return;
        const { type: t } = e.data;
        switch (t) {
          case o:
            this._iframeReady = !0;
            for (let e = 0; e < this._commandQueue.length; e++)
              this.postMessageToIframe({
                payload: this._commandQueue[e][1],
                type: this._commandQueue[e][0],
              });
            this._commandQueue = [];
            break;
          case d:
            const { id: t, size: n } = e.data.payload;
            if (n && Array.isArray(n)) {
              const e = document.getElementById(t);
              e?.querySelector("iframe")?.setAttribute(
                "style",
                `width:${n[0]}px;height:${n[1]}px;border:0px;margin:0;`,
              );
            }
        }
      };
      handleIntersection = (e) => {
        const t = e.map((e) => ({
          id: e.target.id,
          intersectionRatio: e.intersectionRatio,
          isIntersecting: e.isIntersecting,
          isVisible: e.isVisible,
          time: e.time,
        }));
        this._iframeReady
          ? this.postMessageToIframe({ payload: t, type: a })
          : this._commandQueue.push([a, t]);
      };
      handleTabFocus = () => {
        this.postMessageToIframe({ payload: !0, type: h });
      };
      createGPTIframe() {
        (this._iframe = document.createElement("iframe")),
          this._iframe.setAttribute(
            "src",
            `https://s.yimg.com/aaq/benji-safe/2.2.17/gpt.html?o=${encodeURIComponent(e.location.origin)}`,
          ),
          (this._iframe.onload = () => {
            this.initIframe(), this.initPagei13n();
          }),
          (this._iframe.style.display = "none"),
          document.body.appendChild(this._iframe);
      }
      createIframes(e) {
        const { positions: t } = e;
        Object.keys(t).forEach((e) => {
          const t = document.getElementById(e);
          if (!t?.querySelector("iframe")) {
            this._observer?.observe(t);
            const n = document.createElement("iframe");
            n.setAttribute(
              "src",
              `https://s.yimg.com/aaq/benji-safe/2.2.17/sda.html?p=${e}`,
            ),
              n.setAttribute("scrolling", "no"),
              n.setAttribute("style", "border:0px;margin:0px;");
            (document.createElement("div").id = e), t?.appendChild(n);
          }
        });
      }
      init(t) {
        if ("undefined" != typeof window) {
          if (((this.config = t), !this._iframe)) {
            window.addEventListener("message", this.handlePostMessage),
              (this._observer = new IntersectionObserver(
                this.handleIntersection,
                { threshold: 0.5 },
              ));
            const { tabFocus: t } = this.config.setting.refresh;
            if (t) {
              const { outOfFocusDuration: n } = t;
              e.addEventListener(ie, this.handleTabFocus), gt(n);
            }
            this.createGPTIframe();
          }
          this.createIframes(t);
        }
      }
      initIframe() {
        this.postMessageToIframe({ payload: { config: this.config }, type: s });
      }
      initPagei13n() {
        this.postMessageToIframe({ payload: {}, type: r });
      }
      render(e) {
        this._iframeReady
          ? this.postMessageToIframe({ payload: { config: e }, type: c })
          : this._commandQueue.push([c, { config: e }]);
      }
      start(e) {
        this.init(e),
          this._iframeReady
            ? this.postMessageToIframe({ type: l })
            : this._commandQueue.push([l, { config: e }]);
      }
      postMessageToIframe(e) {
        this._iframe?.contentWindow?.postMessage(e, this.targetOrigin);
      }
    })(),
    ho = new Xi(),
    uo = new (class {
      _taboola;
      axid;
      features;
      pageType;
      pageTypeValue;
      fetchCount;
      url;
      debounceTimer;
      collapseAds;
      newPageLoad;
      pageConfig;
      region;
      constructor() {
        return (
          (this.axid = void 0),
          (this.features = {}),
          (this.fetchCount = 0),
          (this._taboola = []),
          (this.pageType = void 0),
          (this.pageTypeValue = ""),
          (this.debounceTimer = null),
          (this.collapseAds = !1),
          (this.newPageLoad = !1),
          (this.pageConfig = {}),
          (this.region = ""),
          (this._onFailure = this._onFailure.bind(this)),
          void 0 !== e &&
            (e._taboola
              ? (this._taboola = e._taboola)
              : (e._taboola = this._taboola)),
          this
        );
      }
      create(...t) {
        this.fetchCount++;
        const [n] = t;
        if (!n) return;
        const {
            container: i,
            mode: s,
            placement: o,
            target_type: r,
            cseg: a,
            region: c,
          } = n,
          d = e.benji,
          l = d?.i13nStore?.currentI13n || {},
          { spaceid: h, pt: u } = l;
        if (((this.region = c), "viewer" === c)) {
          const e = window.location.href;
          this.sendPublisherURL(e);
          const t = Rt(l);
          this.sendPublisherBlob(t),
            u && this.updateTaboolaPageConfig(u.toString(), I);
        }
        const g = {
          container: i,
          mode: s,
          placement: o,
          target_type: r,
          ...(a && { cseg: a }),
        };
        if (this.collapseAds) {
          const e = document.getElementById(i);
          e && (e.style.display = "none");
        } else if (be.includes(Number(h))) {
          const e = document.getElementById(i),
            t = e && Et(e);
          t && (t.style.display = "none");
        } else
          this._taboola.push(g),
            d.logger.sendDebugBeacon({
              container: i,
              mode: s,
              outcm: "taboolaDebug",
              placement: o,
              type: "init",
            }),
            1 === this.fetchCount && vi.call(d, "TABOOLA_FETCH_START_TIME");
      }
      destroy(e) {}
      render() {
        this.debounceTimer && clearTimeout(this.debounceTimer),
          (this.debounceTimer = setTimeout(() => {
            this._taboola.push(He);
          }, 100));
      }
      setupService(...t) {
        const [n, i, s] = t,
          { publisherId: o, pageType: r, pageTypeValue: a, url: c } = i;
        if (((this.features = n), !e || !r)) return;
        (this.pageType = r), (this.pageTypeValue = a ?? I), (this.url = c);
        const d = ((e) => {
          const t = encodeURIComponent(e);
          return P.replace(w, t);
        })(Tt(o, s));
        Bi({
          async: !0,
          id: "taboola-script",
          onerrorCb: this._onFailure,
          onloadCb: this._onReady,
          tagSrc: d,
          WIN: e,
        });
        const l = e.benji,
          h = l?.i13nStore?.currentI13n,
          u = l?.config?.setting?.consent,
          g = u?.allowOnlyLimitedAds || u?.allowOnlyNonPersonalizedAds;
        this.axid = g ? this.axid : l.getAxid(Ze);
        const p = h && Rt(h, this.axid),
          f = {
            cex: JSON.stringify(!!g),
            [this.pageType]: this.pageTypeValue,
            pblob: p,
          };
        this.axid && (f.unified_id = this.axid);
        const m =
          this.url &&
          ((e) => {
            try {
              const t = new URL(e);
              return t.origin + t.pathname;
            } catch (e) {
              return null;
            }
          })(this.url);
        if (m) {
          const e = { ...f, url: m };
          this._taboola.push(e), (this.pageConfig = e);
        } else this._taboola.push(f), (this.pageConfig = f);
      }
      addEventListener(e, t) {
        const n = { handler: t, listenTo: e };
        this._taboola.push(n);
      }
      sendPublisherBlob(e) {
        this._taboola.push({ pblob: e });
      }
      sendPublisherURL(e) {
        this._taboola.push({ pageType: this.pageTypeValue, url: e });
      }
      notify(e) {
        const t = { ...this.pageConfig, ...e };
        this._taboola.push(t), (this.newPageLoad = !0);
      }
      isNewPageLoad() {
        return this.newPageLoad;
      }
      updateTaboolaPageConfig(e, t) {
        if (e && Te.hasOwnProperty(e)) {
          const n = Te[e];
          this.pageType &&
            this.pageType !== n &&
            ((this.pageType = n),
            (this.pageTypeValue = t ?? I),
            this._taboola.push({ [n]: this.pageTypeValue }));
        }
      }
      _onFailure() {
        this.collapseAds = !0;
      }
      _onReady() {
        const t = e.benji;
        vi.call(t, "TABOOLA_READY");
      }
    })(),
    go = {
      gpt: ro,
      i13nStore: oo,
      logger: ao,
      nts: co,
      secureController: lo,
      store: ho,
      taboola: uo,
      ypb: new vs(),
      on: function (e, t) {
        (function (e) {
          return (
            e === ke ||
            e === De ||
            e === Be ||
            e === Oe ||
            e === Ne ||
            e === je ||
            e === Me
          );
        })(e) && (Mt[e] || (Mt[e] = []), Mt[e].push(t));
      },
      start: function (t) {
        if (!t || !t.positions || !t.setting || 0 === Object.keys(t).length)
          return void console.warn(
            "Invalid config, config object should have positions and setting attributes",
          );
        if (!(e.YahooCJS?.didomiActive && e.YahooCJS?.isDidomiFlow()))
          return void Xs.call(this, t);
        const n = (e) => {
          const { region: n, usercountry: i } = t.i13n ?? {},
            s = this.getConsent({ region: n, usercountry: i }, e);
          (t.setting = { ...t.setting, consent: { ...s } }), Xs.call(this, t);
        };
        if (!!!e.YCJSDmi?.isConsented)
          return void document.addEventListener("cjsUserConsented", (e) => {
            const { consentData: t } = e.detail;
            n(t);
          });
        const i = Qs();
        n(i);
      },
    };
  (go.render = Ti),
    (go.refresh = function (e, t) {
      const n = yt(this, e);
      n?.forEach((e) => {
        (!t?.checkViewport || (t?.checkViewport && bt(e?.id))) && e?.refresh();
      });
    }),
    (go.destroy = function (e) {
      const t = yt(this, e);
      t?.forEach((e) => {
        e?.destroy();
      });
    }),
    (go.getI13N = function (e) {
      const { axid: t, ...n } = this.i13nStore.getCurrent();
      if (void 0 === e) return n;
      if (!Array.isArray(e) || 0 === e.length) return;
      const i = {};
      return (
        e.forEach((e) => {
          "string" == typeof e && void 0 !== n[e] && (i[e] = n[e]);
        }),
        i
      );
    }),
    (go.updateI13N = function (e, t = []) {
      if (!e || "object" != typeof e) return;
      const n = this.i13nStore.getKeyDifferences(e);
      (Object.keys(n).length || t.length) &&
        (function (e, t, n) {
          const { gpt: i, taboola: s } = e,
            o = {};
          let r;
          if (
            (t && t.url && ((r = t.url), i.setPageUrl(r)),
            zi(Le, t, o),
            n && n.length && "string" != typeof n)
          ) {
            const t = [];
            n?.forEach((e) => {
              Ae.includes(e) || (i.clearTargeting(e), t.push(e));
            }),
              e.i13nStore.clearKeysFromCurrent(t);
          }
          const a = It(o, Se);
          if (Object.keys(a).length > 0) {
            i.setTargeting(a);
            const n = e.i13nStore.currentI13n;
            e.i13nStore.updateCurrent(a);
            const o = e.i13nStore.currentI13n;
            if (s && "modal" === o.pd && "home" === n.pt) {
              let t = window.location.origin;
              const n = e.config.i13n.site;
              "https://www.yahoo.com" === t && "fp" !== n && (t = `${t}/${n}`),
                s.sendPublisherURL(t);
            }
            if (s && s.pageType && "modal" !== o.pd) {
              const e = Rt(o, s.axid);
              s.sendPublisherBlob(e), s.updateTaboolaPageConfig(t.pt, I);
            }
          }
        })(this, n, t);
    }),
    (go.getConsent = function (t, n) {
      const i = e.YahooCJS?.getJurisdictionInfo().isEU;
      return Zs(n, { gdpr: i, ...t });
    }),
    (go.isReady = !1),
    (go.version = so),
    (go.getAxid = function (t) {
      var n;
      this.i13nStore.getCurrent().axids ||
        this.i13nStore.updateCurrent({
          axids: ((n = e), qs(n, "axids") || ""),
        });
      const i = this.i13nStore.getCurrent().axids,
        s = new URLSearchParams(i).get(t);
      return (
        s ||
        (t === Xe
          ? this.i13nStore.currentI13n.axid || ""
          : (t === Je && this.i13nStore.currentI13n.axidDv360) || "")
      );
    }),
    (go.notify = function (e) {
      const { taboola: t } = this;
      t && e && Ve.includes(e.notify) && t.notify(e);
    });
  const po = go;
  !(function () {
    if (e) {
      const t = e.benji?.config && Object.assign({}, e.benji?.config);
      (e.benji = po),
        t && e.benji.start(t),
        ((e) => {
          const t = new CustomEvent(te);
          e.dispatchEvent(t);
        })(e);
    }
  })();
})();
//# sourceMappingURL=benji-2.2.17.js.map
