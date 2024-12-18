var ACookie = (function () {
  "use strict";
  var e;
  !(function (e) {
    (e[(e.AOL = 0)] = "AOL"),
      (e[(e.ENGADGET = 1)] = "ENGADGET"),
      (e[(e.HUFFPOST = 2)] = "HUFFPOST"),
      (e[(e.MAPQUEST = 3)] = "MAPQUEST"),
      (e[(e.MOVIEFONE = 4)] = "MOVIEFONE"),
      (e[(e.PROJECTLITTLE = 5)] = "PROJECTLITTLE"),
      (e[(e.TECHCRUNCH = 6)] = "TECHCRUNCH"),
      (e[(e.YAHOO = 7)] = "YAHOO");
  })(e || (e = {}));
  var t = {
      NONCE: "00",
      CREATION_TS: "01",
      TEMP_ID: "02",
      AGENT_ID: "03",
      EXPIRY_TS: "04",
      GUC: "05",
      LEGACY_BID: "07",
      E_SID: "08",
      E_SID_NAMESPACE: "09",
      E_DEMOG: "10",
      R_SYNTH_ID: "11",
      E_DEMOG_2: "12",
    },
    r = [
      "AF",
      "AX",
      "AL",
      "DZ",
      "AS",
      "AD",
      "AO",
      "AI",
      "AQ",
      "AG",
      "AR",
      "AM",
      "AW",
      "AU",
      "AZ",
      "BS",
      "BH",
      "BD",
      "BB",
      "BY",
      "BE",
      "BZ",
      "BJ",
      "BM",
      "BT",
      "BO",
      "BQ",
      "BA",
      "BW",
      "BV",
      "BR",
      "IO",
      "BN",
      "BF",
      "BI",
      "KH",
      "CM",
      "CA",
      "CV",
      "KY",
      "CF",
      "TD",
      "CL",
      "CN",
      "CX",
      "CC",
      "CO",
      "KM",
      "CG",
      "CD",
      "CK",
      "CR",
      "CI",
      "CU",
      "CW",
      "DJ",
      "DM",
      "EC",
      "EG",
      "SV",
      "GQ",
      "ER",
      "ET",
      "FK",
      "FO",
      "FJ",
      "GF",
      "PF",
      "TF",
      "GA",
      "GM",
      "GE",
      "GH",
      "GI",
      "GR",
      "GL",
      "GD",
      "GP",
      "GU",
      "GT",
      "GG",
      "GN",
      "GW",
      "GY",
      "HT",
      "HM",
      "VA",
      "HN",
      "HK",
      "IN",
      "ID",
      "IR",
      "IQ",
      "IM",
      "IL",
      "JM",
      "JP",
      "JE",
      "JO",
      "KZ",
      "KE",
      "KI",
      "KP",
      "KR",
      "KW",
      "KG",
      "LA",
      "LV",
      "LB",
      "LS",
      "LR",
      "LY",
      "MO",
      "MK",
      "MG",
      "MW",
      "MY",
      "MV",
      "ML",
      "MH",
      "MQ",
      "MR",
      "MU",
      "YT",
      "MX",
      "FM",
      "MD",
      "MC",
      "MN",
      "ME",
      "MS",
      "MA",
      "MZ",
      "MM",
      "NA",
      "NR",
      "NP",
      "NC",
      "NZ",
      "NI",
      "NE",
      "NG",
      "NU",
      "NF",
      "MP",
      "OM",
      "PK",
      "PW",
      "PS",
      "PA",
      "PG",
      "PY",
      "PE",
      "PH",
      "PN",
      "PR",
      "QA",
      "RE",
      "RU",
      "RW",
      "BL",
      "SH",
      "KN",
      "LC",
      "MF",
      "PM",
      "VC",
      "WS",
      "SM",
      "ST",
      "SA",
      "SN",
      "RS",
      "SC",
      "SL",
      "SG",
      "SX",
      "SB",
      "SO",
      "ZA",
      "GS",
      "SS",
      "LK",
      "SD",
      "SR",
      "SJ",
      "SZ",
      "CH",
      "SY",
      "TW",
      "TJ",
      "TZ",
      "TH",
      "TL",
      "TG",
      "TK",
      "TO",
      "TT",
      "TN",
      "TR",
      "TM",
      "TC",
      "TV",
      "UG",
      "UA",
      "AE",
      "GB",
      "UM",
      "UY",
      "UZ",
      "VU",
      "VE",
      "VN",
      "VG",
      "VI",
      "WF",
      "EH",
      "YE",
      "ZM",
      "ZW",
      "US",
      "BG",
      "CZ",
      "DK",
      "DE",
      "EE",
      "IE",
      "EL",
      "ES",
      "FR",
      "HR",
      "IT",
      "CY",
      "LT",
      "LU",
      "HU",
      "MT",
      "NL",
      "AT",
      "PL",
      "PT",
      "RO",
      "SI",
      "SK",
      "FI",
      "SE",
      "UK",
      "IS",
      "LI",
      "NO",
    ],
    n = {
      TOS: 2,
      USER_TYPE: 2,
      CONSENT_VERSION: 2,
      CONSENTED: 2,
      VALIDITY_CHECK_TIME: 6,
      EXPIRY_TIME: 4,
      JURISDICTION: 2,
      HOME_LOCATION: 8,
      CONSENT_TYPES: 8,
    },
    i = ["EU_OATH", "NON_EU_OATH"],
    o = ["REG", "NON_REG"],
    a = ["NOT_CONSENTED", "CONSENTED", "DECLARED_NON_EU"],
    c = {
      1: "NON_EU_CONSENT",
      2: "CORE_EU_CONSENT",
      4: "OATH_AS_THIRD_PARTY",
      8: "ANALYSIS_OF_COMMUNICATIONS",
      16: "PRECISE_GEOLOCATION",
      32: "CROSS_DEVICE_MAPPING",
      64: "ACCOUNT_MATCHING",
      128: "SEARCH_HISTORY",
      256: "FIRST_PARTY_ADS",
      512: "CONTENT_PERSONALIZATION",
      1024: "IAB",
      2048: "THIRD_PARTY_CONSENT",
      4096: "ALLOW_HUMANS_TO_READ_EMAILS",
      8192: "SELL_PERSONAL_INFORMATION",
      16384: "GENERAL_ANALYSIS_CONSENT",
      32768: "THIRD_PARTY_CONTENT_EMBED",
    },
    s = e,
    u =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
              ? self
              : {};
  var E,
    T,
    g =
      ((E = function (e, t) {
        !(function (r) {
          var n = t,
            i = e && e.exports == n && e,
            o = "object" == typeof u && u;
          (o.global !== o && o.window !== o) || (r = o);
          var a = function (e) {
            this.message = e;
          };
          (a.prototype = new Error()).name = "InvalidCharacterError";
          var c = function (e) {
              throw new a(e);
            },
            s =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            E = /[\t\n\f\r ]/g,
            T = {
              encode: function (e) {
                (e = String(e)),
                  /[^\0-\xFF]/.test(e) &&
                    c(
                      "The string to be encoded contains characters outside of the Latin1 range.",
                    );
                for (
                  var t,
                    r,
                    n,
                    i,
                    o = e.length % 3,
                    a = "",
                    u = -1,
                    E = e.length - o;
                  ++u < E;

                )
                  (t = e.charCodeAt(u) << 16),
                    (r = e.charCodeAt(++u) << 8),
                    (n = e.charCodeAt(++u)),
                    (a +=
                      s.charAt(((i = t + r + n) >> 18) & 63) +
                      s.charAt((i >> 12) & 63) +
                      s.charAt((i >> 6) & 63) +
                      s.charAt(63 & i));
                return (
                  2 == o
                    ? ((t = e.charCodeAt(u) << 8),
                      (r = e.charCodeAt(++u)),
                      (a +=
                        s.charAt((i = t + r) >> 10) +
                        s.charAt((i >> 4) & 63) +
                        s.charAt((i << 2) & 63) +
                        "="))
                    : 1 == o &&
                      ((i = e.charCodeAt(u)),
                      (a += s.charAt(i >> 2) + s.charAt((i << 4) & 63) + "==")),
                  a
                );
              },
              decode: function (e) {
                var t = (e = String(e).replace(E, "")).length;
                t % 4 == 0 && (t = (e = e.replace(/==?$/, "")).length),
                  (t % 4 == 1 || /[^+a-zA-Z0-9/]/.test(e)) &&
                    c(
                      "Invalid character: the string to be decoded is not correctly encoded.",
                    );
                for (var r, n, i = 0, o = "", a = -1; ++a < t; )
                  (n = s.indexOf(e.charAt(a))),
                    (r = i % 4 ? 64 * r + n : n),
                    i++ % 4 &&
                      (o += String.fromCharCode(255 & (r >> ((-2 * i) & 6))));
                return o;
              },
              version: "1.0.0",
            };
          if (n && !n.nodeType)
            if (i) i.exports = T;
            else for (var g in T) T.hasOwnProperty(g) && (n[g] = T[g]);
          else r.base64 = T;
        })(u);
      }),
      E((T = { exports: {} }), T.exports),
      T.exports),
    f = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
    ],
    d = function (e) {
      if (e)
        return (function (e) {
          if (e)
            return e.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
        })(
          g.encode(
            String.fromCharCode.apply(
              null,
              e
                .replace(/\r|\n/g, "")
                .replace(/([\da-fA-F]{2}) ?/g, "0x$1 ")
                .replace(/ +$/, "")
                .split(" "),
            ),
          ),
        );
    },
    S = function (e) {
      if (void 0 !== e) {
        var t = [
          "0000",
          "0001",
          "0010",
          "0011",
          "0100",
          "0101",
          "0110",
          "0111",
          "1000",
          "1001",
          "1010",
          "1011",
          "1100",
          "1101",
          "1110",
          "1111",
        ];
        return t[(e >>> 4) & 15] + t[15 & e];
      }
    },
    I = function (e) {
      if (e) {
        for (var t = [], r = e.length - 2; r >= 0; )
          t.push(e.substr(r, 2)), (r -= 2);
        return t.join("");
      }
    },
    O = function (e) {
      if (e) return parseInt(I(e), 16);
    },
    p = { version: void 0, flags: void 0, tlv: void 0 };
  return (function () {
    function e(e) {
      void 0 === e && (e = ""), (this._raw = e);
      var t = this.getPartitions(),
        r = t.version,
        n = t.flags,
        i = t.tlv;
      (this._version = r), (this._flags = n), (this._tlv = i);
    }
    return (
      (e.prototype.getPartitions = function () {
        var e = { data: "", jurisdiction: "" };
        if (
          (this._raw.split("&").forEach(function (t) {
            0 === t.indexOf("d=") && (e.data = t.slice(2)),
              0 === t.indexOf("j=") && (e.jurisdiction = t.slice(2));
          }),
          !e.data)
        )
          return p;
        var t = (function (e) {
            if (void 0 !== e) {
              for (var t = "", r = 0; r < e.length; r++)
                t += S(e.charCodeAt(r));
              return {
                string: t,
                pos: 0,
                readByteAsInt: function () {
                  var e = parseInt(this.string.substr(this.pos, 8), 2);
                  return (this.pos += 8), e;
                },
                readRemainingBinary: function () {
                  return this.string.substr(this.pos);
                },
              };
            }
          })(
            (function (e) {
              if (e) {
                var t = "";
                try {
                  t = g.decode(
                    (function (e) {
                      if (e) return e.replace(/-/g, "+").replace(/_/g, "/");
                    })(e),
                  );
                } catch (e) {}
                return t;
              }
            })(e.data),
          ),
          r = [t.readByteAsInt(), t.readByteAsInt(), t.readRemainingBinary()];
        return {
          version: r[0],
          flags: r[1],
          tlv: (function (e) {
            if (e) {
              for (
                var t = {},
                  r = function (r) {
                    e = e.slice(r.length);
                    var n = 2 * parseInt(e.slice(0, 2), 16);
                    (e = e.slice(2)), (t[r] = e.slice(0, n)), (e = e.slice(n));
                  };
                "" !== e;

              )
                r(e.slice(0, 2).toUpperCase());
              return t;
            }
          })(
            (function (e) {
              if (e) {
                for (var t = "", r = 0; !(r >= e.length); )
                  (t += parseInt(e.substr(r, 4), 2).toString(16).toUpperCase()),
                    (r += 4);
                return t;
              }
            })(r[2]),
          ),
        };
      }),
      Object.defineProperty(e.prototype, "raw", {
        get: function () {
          return this._raw;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "value", {
        get: function () {
          return this._parsed || (this._parsed = this.parse()), this._parsed;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "gucString", {
        get: function () {
          return this._tlv[t.GUC] || "";
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "creationTime", {
        get: function () {
          return O(this._tlv[t.CREATION_TS]);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "nonce", {
        get: function () {
          return this._tlv[t.NONCE];
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "temporaryId", {
        get: function () {
          return d(this._tlv[t.TEMP_ID]);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "agentId", {
        get: function () {
          return d(this._tlv[t.AGENT_ID]);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "expiryTime", {
        get: function () {
          return O(this._tlv[t.EXPIRY_TS]);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "esid", {
        get: function () {
          return d(this._tlv[t.E_SID]);
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "esidNamespace", {
        get: function () {
          return s[O(this._tlv[t.E_SID_NAMESPACE])];
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "edemog", {
        get: function () {
          return this._tlv[t.E_DEMOG];
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "edemog2", {
        get: function () {
          return this._tlv[t.E_DEMOG_2];
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "rSynthId", {
        get: function () {
          return this._tlv[t.R_SYNTH_ID];
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "legacyBid", {
        get: function () {
          var e = this._tlv[t.LEGACY_BID];
          if (e && "function" == typeof BigInt)
            return (function (e) {
              for (var t = [], r = 12; r >= 0; --r) {
                var n = parseInt("".concat(BigInt(e) & BigInt(31)));
                (t[r] = f[n]), (e >>= BigInt(5));
              }
              return t.join("");
            })(BigInt("0x".concat(I(e))));
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.parse = function () {
        if (!this._raw || !this._version || !this.creationTime) return {};
        var e = {
            version: this._version,
            creationTime: this.creationTime,
            nonce: this.nonce,
            temporaryId: this.temporaryId,
            agentId: this.agentId,
            expiryTime: this.expiryTime,
            gucToS: void 0,
            gucUserType: void 0,
            gucConsentVersion: void 0,
            gucConsentTypes: void 0,
            gucConsented: void 0,
            gucValidityCheckTime: void 0,
            gucExpiryTime: void 0,
            gucJurisdiction: void 0,
            gucHomeLocation: void 0,
            bid: this.legacyBid,
            esid: this.esid,
            esidNamespace: this.esidNamespace,
            edemog: this.edemog,
            edemog2: this.edemog2,
            rSynthId: this.rSynthId,
          },
          t = 0,
          s = O(this.gucString.substr(t, n.TOS));
        (e.gucToS = i[s]), (t += n.TOS);
        var u = O(this.gucString.substr(t, n.USER_TYPE));
        (e.gucUserType = o[u]), (t += n.USER_TYPE);
        var E = O(this.gucString.substr(t, n.CONSENT_VERSION));
        (e.gucConsentVersion = E), (t += n.CONSENT_VERSION);
        var T = O(this.gucString.substr(t, n.CONSENTED));
        (e.gucConsented = a[T]), (t += n.CONSENTED);
        var g = O("00" + this.gucString.substr(t, n.VALIDITY_CHECK_TIME));
        (e.gucValidityCheckTime = g), (t += n.VALIDITY_CHECK_TIME);
        var f = O("0000" + this.gucString.substr(t, n.EXPIRY_TIME));
        (e.gucExpiryTime = f), (t += n.EXPIRY_TIME);
        var d = O(this.gucString.substr(t, n.JURISDICTION));
        (e.gucJurisdiction = r[d]), (t += n.JURISDICTION);
        var S = O(this.gucString.substr(t, n.HOME_LOCATION));
        (e.gucHomeLocation = S), (t += n.HOME_LOCATION);
        var I = O(this.gucString.substr(t, n.CONSENT_TYPES));
        if (((t += n.CONSENT_TYPES), this.gucString.length >= t)) {
          e.gucConsentTypes = [];
          for (var p = Object.keys(c).length, N = 0; N < p; N++)
            I & (1 << N) && e.gucConsentTypes.push(c[1 << N]);
        }
        return (
          Object.keys(e).forEach(function (t) {
            return void 0 === e[t] && delete e[t];
          }),
          e
        );
      }),
      e
    );
  })();
})();
