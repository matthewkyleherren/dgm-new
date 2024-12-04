import {
  a as at,
  b as ve,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-SJFLVUQV.js";
import {
  a as z,
  b as ie,
  c as Z,
  d as M,
  e as Qe,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-ENIZGE37.js";
import {
  a as rt,
  c as ot,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-6SVZX2EL.js";
import { a as an } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-YC6QRCLG.js";
import {
  C as tt,
  D as nt,
  a as rn,
  n as Ye,
  p as Y,
  q as N,
  r as T,
  s as q,
  t as Ge,
  v as Ze,
  w as $e,
  z as et,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-N4MC5J4H.js";
import {
  a as Xe,
  c as me,
  d as oe,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-LNKWYQRG.js";
var st = me((De) => {
  "use strict";
  var it = an();
  (De.createRoot = it.createRoot), (De.hydrateRoot = it.hydrateRoot);
  var fr;
});
var It = me((J, Dt) => {
  var je =
      (typeof globalThis < "u" && globalThis) ||
      (typeof self < "u" && self) ||
      (typeof globalThis < "u" && globalThis),
    Pe = (function () {
      function i() {
        (this.fetch = !1), (this.DOMException = je.DOMException);
      }
      return (i.prototype = je), new i();
    })();
  (function (i) {
    var r = (function (t) {
      var n =
          (typeof i < "u" && i) ||
          (typeof self < "u" && self) ||
          (typeof n < "u" && n),
        e = {
          searchParams: "URLSearchParams" in n,
          iterable: "Symbol" in n && "iterator" in Symbol,
          blob:
            "FileReader" in n &&
            "Blob" in n &&
            (function () {
              try {
                return new Blob(), !0;
              } catch {
                return !1;
              }
            })(),
          formData: "FormData" in n,
          arrayBuffer: "ArrayBuffer" in n,
        };
      function a(l) {
        return l && DataView.prototype.isPrototypeOf(l);
      }
      if (e.arrayBuffer)
        var o = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          s =
            ArrayBuffer.isView ||
            function (l) {
              return l && o.indexOf(Object.prototype.toString.call(l)) > -1;
            };
      function u(l) {
        if (
          (typeof l != "string" && (l = String(l)),
          /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(l) || l === "")
        )
          throw new TypeError(
            'Invalid character in header field name: "' + l + '"',
          );
        return l.toLowerCase();
      }
      function d(l) {
        return typeof l != "string" && (l = String(l)), l;
      }
      function c(l) {
        var p = {
          next: function () {
            var O = l.shift();
            return { done: O === void 0, value: O };
          },
        };
        return (
          e.iterable &&
            (p[Symbol.iterator] = function () {
              return p;
            }),
          p
        );
      }
      function f(l) {
        (this.map = {}),
          l instanceof f
            ? l.forEach(function (p, O) {
                this.append(O, p);
              }, this)
            : Array.isArray(l)
              ? l.forEach(function (p) {
                  this.append(p[0], p[1]);
                }, this)
              : l &&
                Object.getOwnPropertyNames(l).forEach(function (p) {
                  this.append(p, l[p]);
                }, this);
      }
      (f.prototype.append = function (l, p) {
        (l = u(l)), (p = d(p));
        var O = this.map[l];
        this.map[l] = O ? O + ", " + p : p;
      }),
        (f.prototype.delete = function (l) {
          delete this.map[u(l)];
        }),
        (f.prototype.get = function (l) {
          return (l = u(l)), this.has(l) ? this.map[l] : null;
        }),
        (f.prototype.has = function (l) {
          return this.map.hasOwnProperty(u(l));
        }),
        (f.prototype.set = function (l, p) {
          this.map[u(l)] = d(p);
        }),
        (f.prototype.forEach = function (l, p) {
          for (var O in this.map)
            this.map.hasOwnProperty(O) && l.call(p, this.map[O], O, this);
        }),
        (f.prototype.keys = function () {
          var l = [];
          return (
            this.forEach(function (p, O) {
              l.push(O);
            }),
            c(l)
          );
        }),
        (f.prototype.values = function () {
          var l = [];
          return (
            this.forEach(function (p) {
              l.push(p);
            }),
            c(l)
          );
        }),
        (f.prototype.entries = function () {
          var l = [];
          return (
            this.forEach(function (p, O) {
              l.push([O, p]);
            }),
            c(l)
          );
        }),
        e.iterable && (f.prototype[Symbol.iterator] = f.prototype.entries);
      function h(l) {
        if (l.bodyUsed) return Promise.reject(new TypeError("Already read"));
        l.bodyUsed = !0;
      }
      function g(l) {
        return new Promise(function (p, O) {
          (l.onload = function () {
            p(l.result);
          }),
            (l.onerror = function () {
              O(l.error);
            });
        });
      }
      function y(l) {
        var p = new FileReader(),
          O = g(p);
        return p.readAsArrayBuffer(l), O;
      }
      function w(l) {
        var p = new FileReader(),
          O = g(p);
        return p.readAsText(l), O;
      }
      function b(l) {
        for (
          var p = new Uint8Array(l), O = new Array(p.length), j = 0;
          j < p.length;
          j++
        )
          O[j] = String.fromCharCode(p[j]);
        return O.join("");
      }
      function m(l) {
        if (l.slice) return l.slice(0);
        var p = new Uint8Array(l.byteLength);
        return p.set(new Uint8Array(l)), p.buffer;
      }
      function v() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (l) {
            (this.bodyUsed = this.bodyUsed),
              (this._bodyInit = l),
              l
                ? typeof l == "string"
                  ? (this._bodyText = l)
                  : e.blob && Blob.prototype.isPrototypeOf(l)
                    ? (this._bodyBlob = l)
                    : e.formData && FormData.prototype.isPrototypeOf(l)
                      ? (this._bodyFormData = l)
                      : e.searchParams &&
                          URLSearchParams.prototype.isPrototypeOf(l)
                        ? (this._bodyText = l.toString())
                        : e.arrayBuffer && e.blob && a(l)
                          ? ((this._bodyArrayBuffer = m(l.buffer)),
                            (this._bodyInit = new Blob([
                              this._bodyArrayBuffer,
                            ])))
                          : e.arrayBuffer &&
                              (ArrayBuffer.prototype.isPrototypeOf(l) || s(l))
                            ? (this._bodyArrayBuffer = m(l))
                            : (this._bodyText = l =
                                Object.prototype.toString.call(l))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                (typeof l == "string"
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                    ? this.headers.set("content-type", this._bodyBlob.type)
                    : e.searchParams &&
                      URLSearchParams.prototype.isPrototypeOf(l) &&
                      this.headers.set(
                        "content-type",
                        "application/x-www-form-urlencoded;charset=UTF-8",
                      ));
          }),
          e.blob &&
            ((this.blob = function () {
              var l = h(this);
              if (l) return l;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              if (this._bodyArrayBuffer) {
                var l = h(this);
                return (
                  l ||
                  (ArrayBuffer.isView(this._bodyArrayBuffer)
                    ? Promise.resolve(
                        this._bodyArrayBuffer.buffer.slice(
                          this._bodyArrayBuffer.byteOffset,
                          this._bodyArrayBuffer.byteOffset +
                            this._bodyArrayBuffer.byteLength,
                        ),
                      )
                    : Promise.resolve(this._bodyArrayBuffer))
                );
              } else return this.blob().then(y);
            })),
          (this.text = function () {
            var l = h(this);
            if (l) return l;
            if (this._bodyBlob) return w(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(b(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          e.formData &&
            (this.formData = function () {
              return this.text().then(A);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var P = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function x(l) {
        var p = l.toUpperCase();
        return P.indexOf(p) > -1 ? p : l;
      }
      function L(l, p) {
        if (!(this instanceof L))
          throw new TypeError(
            'Please use the "new" operator, this DOM object constructor cannot be called as a function.',
          );
        p = p || {};
        var O = p.body;
        if (l instanceof L) {
          if (l.bodyUsed) throw new TypeError("Already read");
          (this.url = l.url),
            (this.credentials = l.credentials),
            p.headers || (this.headers = new f(l.headers)),
            (this.method = l.method),
            (this.mode = l.mode),
            (this.signal = l.signal),
            !O && l._bodyInit != null && ((O = l._bodyInit), (l.bodyUsed = !0));
        } else this.url = String(l);
        if (
          ((this.credentials =
            p.credentials || this.credentials || "same-origin"),
          (p.headers || !this.headers) && (this.headers = new f(p.headers)),
          (this.method = x(p.method || this.method || "GET")),
          (this.mode = p.mode || this.mode || null),
          (this.signal = p.signal || this.signal),
          (this.referrer = null),
          (this.method === "GET" || this.method === "HEAD") && O)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        if (
          (this._initBody(O),
          (this.method === "GET" || this.method === "HEAD") &&
            (p.cache === "no-store" || p.cache === "no-cache"))
        ) {
          var j = /([?&])_=[^&]*/;
          if (j.test(this.url))
            this.url = this.url.replace(j, "$1_=" + new Date().getTime());
          else {
            var k = /\?/;
            this.url +=
              (k.test(this.url) ? "&" : "?") + "_=" + new Date().getTime();
          }
        }
      }
      L.prototype.clone = function () {
        return new L(this, { body: this._bodyInit });
      };
      function A(l) {
        var p = new FormData();
        return (
          l
            .trim()
            .split("&")
            .forEach(function (O) {
              if (O) {
                var j = O.split("="),
                  k = j.shift().replace(/\+/g, " "),
                  S = j.join("=").replace(/\+/g, " ");
                p.append(decodeURIComponent(k), decodeURIComponent(S));
              }
            }),
          p
        );
      }
      function H(l) {
        var p = new f(),
          O = l.replace(/\r?\n[\t ]+/g, " ");
        return (
          O.split("\r")
            .map(function (j) {
              return j.indexOf(`
`) === 0
                ? j.substr(1, j.length)
                : j;
            })
            .forEach(function (j) {
              var k = j.split(":"),
                S = k.shift().trim();
              if (S) {
                var F = k.join(":").trim();
                p.append(S, F);
              }
            }),
          p
        );
      }
      v.call(L.prototype);
      function E(l, p) {
        if (!(this instanceof E))
          throw new TypeError(
            'Please use the "new" operator, this DOM object constructor cannot be called as a function.',
          );
        p || (p = {}),
          (this.type = "default"),
          (this.status = p.status === void 0 ? 200 : p.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = p.statusText === void 0 ? "" : "" + p.statusText),
          (this.headers = new f(p.headers)),
          (this.url = p.url || ""),
          this._initBody(l);
      }
      v.call(E.prototype),
        (E.prototype.clone = function () {
          return new E(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new f(this.headers),
            url: this.url,
          });
        }),
        (E.error = function () {
          var l = new E(null, { status: 0, statusText: "" });
          return (l.type = "error"), l;
        });
      var X = [301, 302, 303, 307, 308];
      (E.redirect = function (l, p) {
        if (X.indexOf(p) === -1) throw new RangeError("Invalid status code");
        return new E(null, { status: p, headers: { location: l } });
      }),
        (t.DOMException = n.DOMException);
      try {
        new t.DOMException();
      } catch {
        (t.DOMException = function (p, O) {
          (this.message = p), (this.name = O);
          var j = Error(p);
          this.stack = j.stack;
        }),
          (t.DOMException.prototype = Object.create(Error.prototype)),
          (t.DOMException.prototype.constructor = t.DOMException);
      }
      function I(l, p) {
        return new Promise(function (O, j) {
          var k = new L(l, p);
          if (k.signal && k.signal.aborted)
            return j(new t.DOMException("Aborted", "AbortError"));
          var S = new XMLHttpRequest();
          function F() {
            S.abort();
          }
          (S.onload = function () {
            var _ = {
              status: S.status,
              statusText: S.statusText,
              headers: H(S.getAllResponseHeaders() || ""),
            };
            _.url =
              "responseURL" in S
                ? S.responseURL
                : _.headers.get("X-Request-URL");
            var G = "response" in S ? S.response : S.responseText;
            setTimeout(function () {
              O(new E(G, _));
            }, 0);
          }),
            (S.onerror = function () {
              setTimeout(function () {
                j(new TypeError("Network request failed"));
              }, 0);
            }),
            (S.ontimeout = function () {
              setTimeout(function () {
                j(new TypeError("Network request failed"));
              }, 0);
            }),
            (S.onabort = function () {
              setTimeout(function () {
                j(new t.DOMException("Aborted", "AbortError"));
              }, 0);
            });
          function ge(_) {
            try {
              return _ === "" && n.location.href ? n.location.href : _;
            } catch {
              return _;
            }
          }
          S.open(k.method, ge(k.url), !0),
            k.credentials === "include"
              ? (S.withCredentials = !0)
              : k.credentials === "omit" && (S.withCredentials = !1),
            "responseType" in S &&
              (e.blob
                ? (S.responseType = "blob")
                : e.arrayBuffer &&
                  k.headers.get("Content-Type") &&
                  k.headers
                    .get("Content-Type")
                    .indexOf("application/octet-stream") !== -1 &&
                  (S.responseType = "arraybuffer")),
            p && typeof p.headers == "object" && !(p.headers instanceof f)
              ? Object.getOwnPropertyNames(p.headers).forEach(function (_) {
                  S.setRequestHeader(_, d(p.headers[_]));
                })
              : k.headers.forEach(function (_, G) {
                  S.setRequestHeader(G, _);
                }),
            k.signal &&
              (k.signal.addEventListener("abort", F),
              (S.onreadystatechange = function () {
                S.readyState === 4 && k.signal.removeEventListener("abort", F);
              })),
            S.send(typeof k._bodyInit > "u" ? null : k._bodyInit);
        });
      }
      return (
        (I.polyfill = !0),
        n.fetch ||
          ((n.fetch = I), (n.Headers = f), (n.Request = L), (n.Response = E)),
        (t.Headers = f),
        (t.Request = L),
        (t.Response = E),
        (t.fetch = I),
        t
      );
    })({});
  })(Pe);
  Pe.fetch.ponyfill = !0;
  delete Pe.fetch.polyfill;
  var te = je.fetch ? je : Pe;
  J = te.fetch;
  J.default = te.fetch;
  J.fetch = te.fetch;
  J.Headers = te.Headers;
  J.Request = te.Request;
  J.Response = te.Response;
  Dt.exports = J;
});
var Ut = me((qe, Ft) => {
  var ke;
  typeof fetch == "function" &&
    (typeof globalThis < "u" && globalThis.fetch
      ? (ke = globalThis.fetch)
      : typeof window < "u" && window.fetch
        ? (ke = window.fetch)
        : (ke = fetch));
  typeof Xe < "u" &&
    (typeof window > "u" || typeof window.document > "u") &&
    ((ce = ke || It()),
    ce.default && (ce = ce.default),
    (qe.default = ce),
    (Ft.exports = qe.default));
  var ce;
});
var Xt = me((Zr, or) => {
  or.exports = {
    "locales/de/board.json": "rythi6V-rJXaw0OUqPSZGrWY6rmxiFPE3jFDfpHlj_g",
    "locales/de/common.json": "qG0HhUaJNmzLGISaJ0hsEffjjbzhu3A80iZ8-SjgUzE",
    "locales/de/confirmation.json":
      "8yF7ZFfFuFxedBuUjaISWgVf8oJcI7ltqbMF0sRRbpw",
    "locales/de/job_post.json": "WdxRq0TtcomeUpJ76Ww5DBIYkzT1ANGjbQA-iE8YeSM",
    "locales/en/board.json": "8ClphKApK8EcQ0dmF4_ubuVIeDOrS9PactnSToCT-RY",
    "locales/en/common.json": "JhgW1MtlxQMWLxqjNtT6nMMubUGRVw8hHuLsUmHD0-8",
    "locales/en/confirmation.json":
      "_OWBVTjoEu7ioO7thFxUV_i1rWp2NMcHb51ydG8GJl8",
    "locales/en/job_post.json": "KIEKfQevRqxIWcar5WH3XkVvYUSosOOTiam7LtWYWak",
    "locales/en/job_trust_profiles.json":
      "BKYl6-1lsYIgQQ5VA3-aX8eWzUyAytCcgUCOHr8LKVw",
    "locales/es/board.json": "6IvGhie3zQ47EkV9CZnNleqhFBVs2VAg_NM5r1RttG8",
    "locales/es/common.json": "aOoXhXCYag1BYrnZTOt74dFenBx1-nIxiyr6duwsMTI",
    "locales/es/confirmation.json":
      "7Rg9LAfnu-03JnjuYhF6OM6pWdHP_Y6Lmb0Vse7mLfo",
    "locales/es/job_post.json": "pRL0hhaDFVW-n0zx_ALHrufhJdJQ_m1d5_tJqcFXBYM",
    "locales/fi/board.json": "munXxntBE_9qTkVf35zQOMWSZ4TR87a5pCsK6Ui5_kw",
    "locales/fi/common.json": "dOSESDDozDBPAgUGC4b-gTfB0UTSGJ1dKavVWhb-Z48",
    "locales/fi/confirmation.json":
      "qaK_JIyOdhg1iWB4wHpgLsY8i_Z-8qxCR440R0pPReY",
    "locales/fi/job_post.json": "cn3aeavtcDP2PFFHoly2DXpJGpUWWvKUm2IT8kbojko",
    "locales/fr/board.json": "2iT_QMbLbkK1Gw9BpIEAjZRgtWJ7xk8ZVGf2HiOsRMs",
    "locales/fr/common.json": "fGHEUoC1pC-ADgxrAWrWnGRtgrY2ARjplnPkn0DG3xQ",
    "locales/fr/confirmation.json":
      "3OHydyc77nwmaYQM_F1PY2pHq2nW5ApgUXxtyFtkPls",
    "locales/fr/job_post.json": "1YnqBImZx7J9QryzZUVTfPFJ1i55kKwjI7XwPx5Pz3w",
    "locales/he/board.json": "Bj1O3KGVkdFEtxst6peVLj0d-2QTGtdn_FILEqwzQLQ",
    "locales/he/common.json": "ri7ddkslNhK3Wpy_OmKmHgxq9fAYL-oYFg90hDPPWqE",
    "locales/he/confirmation.json":
      "QKBawHlq1ntoZR0DeYPFsdNooKOUgBVyzm53xfJwcl4",
    "locales/he/job_post.json": "Wve9eEbql4BCmq200MZDP0k8Sdpgp016evp6ztJqdq4",
    "locales/it/board.json": "lDHuvTDNlvrWlX8BR1hEBx0TfRo30WGHygZS2Xjz-B0",
    "locales/it/common.json": "cPnWOMurFBc9rUj1Qgg69lm7T7y7jtbp6h4zDAESTdg",
    "locales/it/confirmation.json":
      "2WYewwXJPn7_9AKqSX2gvqGq_AUlR4Zg3f43mb1n0f4",
    "locales/it/job_post.json": "nk6yk-sUH9K5ak-oRX-8OUwVS6DXM29GGRFhISMfvfk",
    "locales/ja/board.json": "aXJy3zWmeIk8NewWXL0KoMXcJsareD_X5ufqAIT-QwI",
    "locales/ja/common.json": "EVaOhGTpY5Fy2gt4a0JXZEcghukKFFSGFeVbvVOn_DE",
    "locales/ja/confirmation.json":
      "McAtmsC3Pfe6UkfQFdLRyO0F1QNMGF07Gi_avGkQ0oQ",
    "locales/ja/job_post.json": "7PluHl0-Au4U-bRkmskCjN9CV0xWeqAaJOU_TAqx6d4",
    "locales/ko/board.json": "MdBiefJnlKTy9_8uRkMZE7bMvNTe69LzXMWJCG4W8Co",
    "locales/ko/common.json": "BVbdQvVujqk0iLYtK_ad1EjJooNgHJkjFHCbzRUrDy4",
    "locales/ko/confirmation.json":
      "X7O9nE02wX4eICrLauX7W84UAFPuBGtwHKeEA-Po6Tc",
    "locales/ko/job_post.json": "c9r6v-No6lMuk8m2hMrF7jVWsmlelygHFBaZTAaKP0E",
    "locales/nl/board.json": "04bnzL-pUF-vs_Ljc0uMhinuys47zhQVXizBP_PflUw",
    "locales/nl/common.json": "L3e93nxokqoef9x8pXZ9jG5nwiHtoMopj7XWYtVu7Pg",
    "locales/nl/confirmation.json":
      "PM5ybQiZQiqjdqFkXKN9gXEs9Rkv9wkOvEjoQHzk4wo",
    "locales/nl/job_post.json": "6QnCli_SYkYQ1b3668S6NAw8zmOKCkSWNg2k_rbxaGA",
    "locales/no/board.json": "2cwmkjLU2jikWJiCWdrIteEWntn9YIRJko3aVw1BEw4",
    "locales/no/common.json": "YcFGvzcmVCdSlJqajiqfN9l6RF2Ep3CPVLGlN6sidTE",
    "locales/no/confirmation.json":
      "3Yof1QbMBwI3Kwd9oiy7QNKePTCoYlxOElaVdb-UPjQ",
    "locales/no/job_post.json": "yzEfgMd34Wmn2zNDjmu9w5CrrgbY1giYykk4aP9GwJQ",
    "locales/pl/board.json": "Fh2rcJcnJYygVaIgfYFHEjoSUuSK6D-fsh2B81ZI88I",
    "locales/pl/common.json": "H6EP3oM6rnnlfR--_cVMCzb8tZWIEwfI8CLaTAgBmE0",
    "locales/pl/confirmation.json":
      "6N-icn7w1UKFsSY-PTdFK3g51t8a91iWH6SZKfA9YR8",
    "locales/pl/job_post.json": "8nZl94vGXTNDK5WuRWX5wXC5IU1ztZIWOAI7A6u4cx4",
    "locales/pt/board.json": "9n5HzKwB9d-G5DqYVNe8kc7_VXfnGpws3psJM466lfI",
    "locales/pt/common.json": "cF-Bjytz0DgmqqrOH-c-QvzefpoxKw7EkmUvu_NDNeY",
    "locales/pt/confirmation.json":
      "u92VasnUEvmlgWuhMsnIJ5jgoecid00w5V_bnW9YefU",
    "locales/pt/job_post.json": "JsEkDjAEJlVPAYRvG3Pp_bkg-Kh5YnIigMFBOb5jWJI",
    "locales/ru/board.json": "xBfA_yi8RWtnvKoANq9w2rfE30jq4Fr2It9dtJ_WpHM",
    "locales/ru/common.json": "JtenTnG-0t3XPDWaaNeAqV7QPgHEcjKHg90O_zCe768",
    "locales/ru/confirmation.json":
      "Yc-Z11zZm_sP8UonBoIaLn7JlLXTQSPl9-S9o6fKJxw",
    "locales/ru/job_post.json": "s2U4Uo_yyZ9HMH_bD8tXuOHBQfzTmmjTNVF4U3-RFqc",
    "locales/sv/board.json": "DnSTJDP7Po64GhMNtQ5xdYFSYjn7_ZZQfTMCBb47G4k",
    "locales/sv/common.json": "iw5M3AO6OV379lOAPphnaJzymwWf1Xb8eGVkjIVE0oE",
    "locales/sv/confirmation.json":
      "rQlFSZAsjv3O-hVj5_cbL_36eetuEGd1JBbQqlQ95Jw",
    "locales/sv/job_post.json": "pRahRoi9o4XRn8N0ygIIEnHgyMCghrEoNjHfUFP1qW8",
    "locales/tg/board.json": "8f8P1nv836R0QNpEbi6aqqP226Rwef1mUlmrndHCgqk",
    "locales/tg/common.json": "JaDKWCPRqBwoGxDVv-oQqOaY03JJ6SoycftAmAIY8XM",
    "locales/tg/confirmation.json":
      "wh5sIiHLEYXpA4v_Xs6KCsE6baNtq03WLgN_kJNwJ9s",
    "locales/tg/job_post.json": "8GZsfFNOcf6XS6T5AV5HpcEwebMi8LYGp3yQjGffH1c",
    "locales/th/board.json": "kH1J-Un1jDIP3L79goYZBn0-QGrzdn6x3e628bZKj5o",
    "locales/th/common.json": "AeLvs0MPcGchZWmtY7Esr0hAMldkN-gzQEiyMO_BizQ",
    "locales/th/confirmation.json":
      "3xELVgg21O1YgRjRXu4fwTwOopw8iFbZZpu5H5O8gfM",
    "locales/th/job_post.json": "x28Zp59xMLPf9y3ZIQhTcSy548WVDO1aEVG8mWFUWOk",
    "locales/zh/board.json": "CphqWjQQnsZq97dt8dsE5Hv5Kkyeku6bq3lgdplNYeg",
    "locales/zh/common.json": "H06Wzq0KvBZqDD3yta5LjDHLcEWRrvXTd1qn0BoRU-E",
    "locales/zh/confirmation.json":
      "9qWAB2ZFxnodg0KV5Uqh3ZQf4bUrO0hUPboh0YyiB3s",
    "locales/zh/job_post.json": "UeSBwbxvUgxKJw1C3cwdHvKHuZDjbdeQOm-4sTv7Sd0",
    "locales/zhHant/board.json": "q_S7igz-OxkSy6FBFu2H8uMtzwOciAZympyBunBu-7E",
    "locales/zhHant/common.json": "2y0F76y6HyMCLeSxTVTebeG_sECs1sFy2IjqSFMYzA8",
    "locales/zhHant/confirmation.json":
      "xYONU8vLm9KmxYp_pRVD2Hx_QBL0L2Mby1_GrNFkJJA",
    "locales/zhHant/job_post.json":
      "4OrK9m4cQrKRxgBDcCEWHr46dCYszNhuv5NSsTbWKXM",
  };
});
var Ce = oe(rn()),
  en = oe(st());
function Ie(i) {
  return Ge(i) || Qe(i) || Ze(i) || $e();
}
function ut(i, r) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(i);
    r &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(i, e).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function ft(i) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? ut(Object(t), !0).forEach(function (n) {
          q(i, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t))
        : ut(Object(t)).forEach(function (n) {
            Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(t, n));
          });
  }
  return i;
}
var on = {
    type: "logger",
    log: function (r) {
      this.output("log", r);
    },
    warn: function (r) {
      this.output("warn", r);
    },
    error: function (r) {
      this.output("error", r);
    },
    output: function (r, t) {
      console && console[r] && console[r].apply(console, t);
    },
  },
  sn = (function () {
    function i(r) {
      var t =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      N(this, i), this.init(r, t);
    }
    return (
      T(i, [
        {
          key: "init",
          value: function (t) {
            var n =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            (this.prefix = n.prefix || "i18next:"),
              (this.logger = t || on),
              (this.options = n),
              (this.debug = n.debug);
          },
        },
        {
          key: "setDebug",
          value: function (t) {
            this.debug = t;
          },
        },
        {
          key: "log",
          value: function () {
            for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
              n[e] = arguments[e];
            return this.forward(n, "log", "", !0);
          },
        },
        {
          key: "warn",
          value: function () {
            for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
              n[e] = arguments[e];
            return this.forward(n, "warn", "", !0);
          },
        },
        {
          key: "error",
          value: function () {
            for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
              n[e] = arguments[e];
            return this.forward(n, "error", "");
          },
        },
        {
          key: "deprecate",
          value: function () {
            for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++)
              n[e] = arguments[e];
            return this.forward(n, "warn", "WARNING DEPRECATED: ", !0);
          },
        },
        {
          key: "forward",
          value: function (t, n, e, a) {
            return a && !this.debug
              ? null
              : (typeof t[0] == "string" &&
                  (t[0] = "".concat(e).concat(this.prefix, " ").concat(t[0])),
                this.logger[n](t));
          },
        },
        {
          key: "create",
          value: function (t) {
            return new i(
              this.logger,
              ft(
                ft({}, { prefix: "".concat(this.prefix, ":").concat(t, ":") }),
                this.options,
              ),
            );
          },
        },
        {
          key: "clone",
          value: function (t) {
            return (
              (t = t || this.options),
              (t.prefix = t.prefix || this.prefix),
              new i(this.logger, t)
            );
          },
        },
      ]),
      i
    );
  })(),
  B = new sn(),
  W = (function () {
    function i() {
      N(this, i), (this.observers = {});
    }
    return (
      T(i, [
        {
          key: "on",
          value: function (t, n) {
            var e = this;
            return (
              t.split(" ").forEach(function (a) {
                (e.observers[a] = e.observers[a] || []), e.observers[a].push(n);
              }),
              this
            );
          },
        },
        {
          key: "off",
          value: function (t, n) {
            if (this.observers[t]) {
              if (!n) {
                delete this.observers[t];
                return;
              }
              this.observers[t] = this.observers[t].filter(function (e) {
                return e !== n;
              });
            }
          },
        },
        {
          key: "emit",
          value: function (t) {
            for (
              var n = arguments.length, e = new Array(n > 1 ? n - 1 : 0), a = 1;
              a < n;
              a++
            )
              e[a - 1] = arguments[a];
            if (this.observers[t]) {
              var o = [].concat(this.observers[t]);
              o.forEach(function (u) {
                u.apply(void 0, e);
              });
            }
            if (this.observers["*"]) {
              var s = [].concat(this.observers["*"]);
              s.forEach(function (u) {
                u.apply(u, [t].concat(e));
              });
            }
          },
        },
      ]),
      i
    );
  })();
function se() {
  var i,
    r,
    t = new Promise(function (n, e) {
      (i = n), (r = e);
    });
  return (t.resolve = i), (t.reject = r), t;
}
function lt(i) {
  return i == null ? "" : "" + i;
}
function un(i, r, t) {
  i.forEach(function (n) {
    r[n] && (t[n] = r[n]);
  });
}
function Ue(i, r, t) {
  function n(s) {
    return s && s.indexOf("###") > -1 ? s.replace(/###/g, ".") : s;
  }
  function e() {
    return !i || typeof i == "string";
  }
  for (
    var a = typeof r != "string" ? [].concat(r) : r.split(".");
    a.length > 1;

  ) {
    if (e()) return {};
    var o = n(a.shift());
    !i[o] && t && (i[o] = new t()),
      Object.prototype.hasOwnProperty.call(i, o) ? (i = i[o]) : (i = {});
  }
  return e() ? {} : { obj: i, k: n(a.shift()) };
}
function ct(i, r, t) {
  var n = Ue(i, r, Object),
    e = n.obj,
    a = n.k;
  e[a] = t;
}
function fn(i, r, t, n) {
  var e = Ue(i, r, Object),
    a = e.obj,
    o = e.k;
  (a[o] = a[o] || []), n && (a[o] = a[o].concat(t)), n || a[o].push(t);
}
function we(i, r) {
  var t = Ue(i, r),
    n = t.obj,
    e = t.k;
  if (n) return n[e];
}
function ln(i, r, t) {
  var n = we(i, t);
  return n !== void 0 ? n : we(r, t);
}
function kt(i, r, t) {
  for (var n in r)
    n !== "__proto__" &&
      n !== "constructor" &&
      (n in i
        ? typeof i[n] == "string" ||
          i[n] instanceof String ||
          typeof r[n] == "string" ||
          r[n] instanceof String
          ? t && (i[n] = r[n])
          : kt(i[n], r[n], t)
        : (i[n] = r[n]));
  return i;
}
function $(i) {
  return i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
var cn = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
function dn(i) {
  return typeof i == "string"
    ? i.replace(/[&<>"'\/]/g, function (r) {
        return cn[r];
      })
    : i;
}
var xe =
    typeof window < "u" &&
    window.navigator &&
    typeof window.navigator.userAgentData > "u" &&
    window.navigator.userAgent &&
    window.navigator.userAgent.indexOf("MSIE") > -1,
  hn = [" ", ",", "?", "!", ";"];
function gn(i, r, t) {
  (r = r || ""), (t = t || "");
  var n = hn.filter(function (s) {
    return r.indexOf(s) < 0 && t.indexOf(s) < 0;
  });
  if (n.length === 0) return !0;
  var e = new RegExp(
      "(".concat(
        n
          .map(function (s) {
            return s === "?" ? "\\?" : s;
          })
          .join("|"),
        ")",
      ),
    ),
    a = !e.test(i);
  if (!a) {
    var o = i.indexOf(t);
    o > 0 && !e.test(i.substring(0, o)) && (a = !0);
  }
  return a;
}
function Oe(i, r) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (i) {
    if (i[r]) return i[r];
    for (var n = r.split(t), e = i, a = 0; a < n.length; ++a) {
      if (!e || (typeof e[n[a]] == "string" && a + 1 < n.length)) return;
      if (e[n[a]] === void 0) {
        for (
          var o = 2, s = n.slice(a, a + o).join(t), u = e[s];
          u === void 0 && n.length > a + o;

        )
          o++, (s = n.slice(a, a + o).join(t)), (u = e[s]);
        if (u === void 0) return;
        if (u === null) return null;
        if (r.endsWith(s)) {
          if (typeof u == "string") return u;
          if (s && typeof u[s] == "string") return u[s];
        }
        var d = n.slice(a + o).join(t);
        return d ? Oe(u, d, t) : void 0;
      }
      e = e[n[a]];
    }
    return e;
  }
}
function dt(i, r) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(i);
    r &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(i, e).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function ye(i) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? dt(Object(t), !0).forEach(function (n) {
          q(i, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t))
        : dt(Object(t)).forEach(function (n) {
            Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(t, n));
          });
  }
  return i;
}
function pn(i) {
  var r = mn();
  return function () {
    var n = M(i),
      e;
    if (r) {
      var a = M(this).constructor;
      e = Reflect.construct(n, arguments, a);
    } else e = n.apply(this, arguments);
    return Z(this, e);
  };
}
function mn() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
var vn = (function (i) {
    ie(t, i);
    var r = pn(t);
    function t(n) {
      var e,
        a =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : { ns: ["translation"], defaultNS: "translation" };
      return (
        N(this, t),
        (e = r.call(this)),
        xe && W.call(z(e)),
        (e.data = n || {}),
        (e.options = a),
        e.options.keySeparator === void 0 && (e.options.keySeparator = "."),
        e.options.ignoreJSONStructure === void 0 &&
          (e.options.ignoreJSONStructure = !0),
        e
      );
    }
    return (
      T(t, [
        {
          key: "addNamespaces",
          value: function (e) {
            this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
          },
        },
        {
          key: "removeNamespaces",
          value: function (e) {
            var a = this.options.ns.indexOf(e);
            a > -1 && this.options.ns.splice(a, 1);
          },
        },
        {
          key: "getResource",
          value: function (e, a, o) {
            var s =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : {},
              u =
                s.keySeparator !== void 0
                  ? s.keySeparator
                  : this.options.keySeparator,
              d =
                s.ignoreJSONStructure !== void 0
                  ? s.ignoreJSONStructure
                  : this.options.ignoreJSONStructure,
              c = [e, a];
            o && typeof o != "string" && (c = c.concat(o)),
              o && typeof o == "string" && (c = c.concat(u ? o.split(u) : o)),
              e.indexOf(".") > -1 && (c = e.split("."));
            var f = we(this.data, c);
            return f || !d || typeof o != "string"
              ? f
              : Oe(this.data && this.data[e] && this.data[e][a], o, u);
          },
        },
        {
          key: "addResource",
          value: function (e, a, o, s) {
            var u =
                arguments.length > 4 && arguments[4] !== void 0
                  ? arguments[4]
                  : { silent: !1 },
              d =
                u.keySeparator !== void 0
                  ? u.keySeparator
                  : this.options.keySeparator,
              c = [e, a];
            o && (c = c.concat(d ? o.split(d) : o)),
              e.indexOf(".") > -1 && ((c = e.split(".")), (s = a), (a = c[1])),
              this.addNamespaces(a),
              ct(this.data, c, s),
              u.silent || this.emit("added", e, a, o, s);
          },
        },
        {
          key: "addResources",
          value: function (e, a, o) {
            var s =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : { silent: !1 };
            for (var u in o)
              (typeof o[u] == "string" ||
                Object.prototype.toString.apply(o[u]) === "[object Array]") &&
                this.addResource(e, a, u, o[u], { silent: !0 });
            s.silent || this.emit("added", e, a, o);
          },
        },
        {
          key: "addResourceBundle",
          value: function (e, a, o, s, u) {
            var d =
                arguments.length > 5 && arguments[5] !== void 0
                  ? arguments[5]
                  : { silent: !1 },
              c = [e, a];
            e.indexOf(".") > -1 &&
              ((c = e.split(".")), (s = o), (o = a), (a = c[1])),
              this.addNamespaces(a);
            var f = we(this.data, c) || {};
            s ? kt(f, o, u) : (f = ye(ye({}, f), o)),
              ct(this.data, c, f),
              d.silent || this.emit("added", e, a, o);
          },
        },
        {
          key: "removeResourceBundle",
          value: function (e, a) {
            this.hasResourceBundle(e, a) && delete this.data[e][a],
              this.removeNamespaces(a),
              this.emit("removed", e, a);
          },
        },
        {
          key: "hasResourceBundle",
          value: function (e, a) {
            return this.getResource(e, a) !== void 0;
          },
        },
        {
          key: "getResourceBundle",
          value: function (e, a) {
            return (
              a || (a = this.options.defaultNS),
              this.options.compatibilityAPI === "v1"
                ? ye(ye({}, {}), this.getResource(e, a))
                : this.getResource(e, a)
            );
          },
        },
        {
          key: "getDataByLanguage",
          value: function (e) {
            return this.data[e];
          },
        },
        {
          key: "hasLanguageSomeTranslations",
          value: function (e) {
            var a = this.getDataByLanguage(e),
              o = (a && Object.keys(a)) || [];
            return !!o.find(function (s) {
              return a[s] && Object.keys(a[s]).length > 0;
            });
          },
        },
        {
          key: "toJSON",
          value: function () {
            return this.data;
          },
        },
      ]),
      t
    );
  })(W),
  Lt = {
    processors: {},
    addPostProcessor: function (r) {
      this.processors[r.name] = r;
    },
    handle: function (r, t, n, e, a) {
      var o = this;
      return (
        r.forEach(function (s) {
          o.processors[s] && (t = o.processors[s].process(t, n, e, a));
        }),
        t
      );
    },
  };
function ht(i, r) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(i);
    r &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(i, e).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function C(i) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? ht(Object(t), !0).forEach(function (n) {
          q(i, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t))
        : ht(Object(t)).forEach(function (n) {
            Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(t, n));
          });
  }
  return i;
}
function yn(i) {
  var r = bn();
  return function () {
    var n = M(i),
      e;
    if (r) {
      var a = M(this).constructor;
      e = Reflect.construct(n, arguments, a);
    } else e = n.apply(this, arguments);
    return Z(this, e);
  };
}
function bn() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
var gt = {},
  pt = (function (i) {
    ie(t, i);
    var r = yn(t);
    function t(n) {
      var e,
        a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      return (
        N(this, t),
        (e = r.call(this)),
        xe && W.call(z(e)),
        un(
          [
            "resourceStore",
            "languageUtils",
            "pluralResolver",
            "interpolator",
            "backendConnector",
            "i18nFormat",
            "utils",
          ],
          n,
          z(e),
        ),
        (e.options = a),
        e.options.keySeparator === void 0 && (e.options.keySeparator = "."),
        (e.logger = B.create("translator")),
        e
      );
    }
    return (
      T(
        t,
        [
          {
            key: "changeLanguage",
            value: function (e) {
              e && (this.language = e);
            },
          },
          {
            key: "exists",
            value: function (e) {
              var a =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : { interpolation: {} };
              if (e == null) return !1;
              var o = this.resolve(e, a);
              return o && o.res !== void 0;
            },
          },
          {
            key: "extractFromKey",
            value: function (e, a) {
              var o =
                a.nsSeparator !== void 0
                  ? a.nsSeparator
                  : this.options.nsSeparator;
              o === void 0 && (o = ":");
              var s =
                  a.keySeparator !== void 0
                    ? a.keySeparator
                    : this.options.keySeparator,
                u = a.ns || this.options.defaultNS || [],
                d = o && e.indexOf(o) > -1,
                c =
                  !this.options.userDefinedKeySeparator &&
                  !a.keySeparator &&
                  !this.options.userDefinedNsSeparator &&
                  !a.nsSeparator &&
                  !gn(e, o, s);
              if (d && !c) {
                var f = e.match(this.interpolator.nestingRegexp);
                if (f && f.length > 0) return { key: e, namespaces: u };
                var h = e.split(o);
                (o !== s || (o === s && this.options.ns.indexOf(h[0]) > -1)) &&
                  (u = h.shift()),
                  (e = h.join(s));
              }
              return (
                typeof u == "string" && (u = [u]), { key: e, namespaces: u }
              );
            },
          },
          {
            key: "translate",
            value: function (e, a, o) {
              var s = this;
              if (
                (Y(a) !== "object" &&
                  this.options.overloadTranslationOptionHandler &&
                  (a =
                    this.options.overloadTranslationOptionHandler(arguments)),
                Y(a) === "object" && (a = C({}, a)),
                a || (a = {}),
                e == null)
              )
                return "";
              Array.isArray(e) || (e = [String(e)]);
              var u =
                  a.returnDetails !== void 0
                    ? a.returnDetails
                    : this.options.returnDetails,
                d =
                  a.keySeparator !== void 0
                    ? a.keySeparator
                    : this.options.keySeparator,
                c = this.extractFromKey(e[e.length - 1], a),
                f = c.key,
                h = c.namespaces,
                g = h[h.length - 1],
                y = a.lng || this.language,
                w =
                  a.appendNamespaceToCIMode ||
                  this.options.appendNamespaceToCIMode;
              if (y && y.toLowerCase() === "cimode") {
                if (w) {
                  var b = a.nsSeparator || this.options.nsSeparator;
                  return u
                    ? {
                        res: "".concat(g).concat(b).concat(f),
                        usedKey: f,
                        exactUsedKey: f,
                        usedLng: y,
                        usedNS: g,
                      }
                    : "".concat(g).concat(b).concat(f);
                }
                return u
                  ? {
                      res: f,
                      usedKey: f,
                      exactUsedKey: f,
                      usedLng: y,
                      usedNS: g,
                    }
                  : f;
              }
              var m = this.resolve(e, a),
                v = m && m.res,
                P = (m && m.usedKey) || f,
                x = (m && m.exactUsedKey) || f,
                L = Object.prototype.toString.apply(v),
                A = ["[object Number]", "[object Function]", "[object RegExp]"],
                H =
                  a.joinArrays !== void 0
                    ? a.joinArrays
                    : this.options.joinArrays,
                E = !this.i18nFormat || this.i18nFormat.handleAsObject,
                X =
                  typeof v != "string" &&
                  typeof v != "boolean" &&
                  typeof v != "number";
              if (
                E &&
                v &&
                X &&
                A.indexOf(L) < 0 &&
                !(typeof H == "string" && L === "[object Array]")
              ) {
                if (!a.returnObjects && !this.options.returnObjects) {
                  this.options.returnedObjectHandler ||
                    this.logger.warn(
                      "accessing an object - but returnObjects options is not enabled!",
                    );
                  var I = this.options.returnedObjectHandler
                    ? this.options.returnedObjectHandler(
                        P,
                        v,
                        C(C({}, a), {}, { ns: h }),
                      )
                    : "key '"
                        .concat(f, " (")
                        .concat(
                          this.language,
                          ")' returned an object instead of string.",
                        );
                  return u ? ((m.res = I), m) : I;
                }
                if (d) {
                  var l = L === "[object Array]",
                    p = l ? [] : {},
                    O = l ? x : P;
                  for (var j in v)
                    if (Object.prototype.hasOwnProperty.call(v, j)) {
                      var k = "".concat(O).concat(d).concat(j);
                      (p[j] = this.translate(
                        k,
                        C(C({}, a), { joinArrays: !1, ns: h }),
                      )),
                        p[j] === k && (p[j] = v[j]);
                    }
                  v = p;
                }
              } else if (E && typeof H == "string" && L === "[object Array]")
                (v = v.join(H)), v && (v = this.extendTranslation(v, e, a, o));
              else {
                var S = !1,
                  F = !1,
                  ge = a.count !== void 0 && typeof a.count != "string",
                  _ = t.hasDefaultValue(a),
                  G = ge ? this.pluralResolver.getSuffix(y, a.count, a) : "",
                  ne = a["defaultValue".concat(G)] || a.defaultValue;
                !this.isValidLookup(v) && _ && ((S = !0), (v = ne)),
                  this.isValidLookup(v) || ((F = !0), (v = f));
                var tn =
                    a.missingKeyNoValueFallbackToKey ||
                    this.options.missingKeyNoValueFallbackToKey,
                  nn = tn && F ? void 0 : v,
                  re = _ && ne !== v && this.options.updateMissing;
                if (F || S || re) {
                  if (
                    (this.logger.log(
                      re ? "updateKey" : "missingKey",
                      y,
                      g,
                      f,
                      re ? ne : v,
                    ),
                    d)
                  ) {
                    var Ke = this.resolve(
                      f,
                      C(C({}, a), {}, { keySeparator: !1 }),
                    );
                    Ke &&
                      Ke.res &&
                      this.logger.warn(
                        "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.",
                      );
                  }
                  var ae = [],
                    pe = this.languageUtils.getFallbackCodes(
                      this.options.fallbackLng,
                      a.lng || this.language,
                    );
                  if (this.options.saveMissingTo === "fallback" && pe && pe[0])
                    for (var Ne = 0; Ne < pe.length; Ne++) ae.push(pe[Ne]);
                  else
                    this.options.saveMissingTo === "all"
                      ? (ae = this.languageUtils.toResolveHierarchy(
                          a.lng || this.language,
                        ))
                      : ae.push(a.lng || this.language);
                  var ze = function (Q, Ae, We) {
                    var Je = _ && We !== v ? We : nn;
                    s.options.missingKeyHandler
                      ? s.options.missingKeyHandler(Q, g, Ae, Je, re, a)
                      : s.backendConnector &&
                        s.backendConnector.saveMissing &&
                        s.backendConnector.saveMissing(Q, g, Ae, Je, re, a),
                      s.emit("missingKey", Q, g, Ae, v);
                  };
                  this.options.saveMissing &&
                    (this.options.saveMissingPlurals && ge
                      ? ae.forEach(function (Te) {
                          s.pluralResolver
                            .getSuffixes(Te, a)
                            .forEach(function (Q) {
                              ze(
                                [Te],
                                f + Q,
                                a["defaultValue".concat(Q)] || ne,
                              );
                            });
                        })
                      : ze(ae, f, ne));
                }
                (v = this.extendTranslation(v, e, a, m, o)),
                  F &&
                    v === f &&
                    this.options.appendNamespaceToMissingKey &&
                    (v = "".concat(g, ":").concat(f)),
                  (F || S) &&
                    this.options.parseMissingKeyHandler &&
                    (this.options.compatibilityAPI !== "v1"
                      ? (v = this.options.parseMissingKeyHandler(
                          this.options.appendNamespaceToMissingKey
                            ? "".concat(g, ":").concat(f)
                            : f,
                          S ? v : void 0,
                        ))
                      : (v = this.options.parseMissingKeyHandler(v)));
              }
              return u ? ((m.res = v), m) : v;
            },
          },
          {
            key: "extendTranslation",
            value: function (e, a, o, s, u) {
              var d = this;
              if (this.i18nFormat && this.i18nFormat.parse)
                e = this.i18nFormat.parse(
                  e,
                  C(C({}, this.options.interpolation.defaultVariables), o),
                  s.usedLng,
                  s.usedNS,
                  s.usedKey,
                  { resolved: s },
                );
              else if (!o.skipInterpolation) {
                o.interpolation &&
                  this.interpolator.init(
                    C(C({}, o), {
                      interpolation: C(
                        C({}, this.options.interpolation),
                        o.interpolation,
                      ),
                    }),
                  );
                var c =
                    typeof e == "string" &&
                    (o &&
                    o.interpolation &&
                    o.interpolation.skipOnVariables !== void 0
                      ? o.interpolation.skipOnVariables
                      : this.options.interpolation.skipOnVariables),
                  f;
                if (c) {
                  var h = e.match(this.interpolator.nestingRegexp);
                  f = h && h.length;
                }
                var g =
                  o.replace && typeof o.replace != "string" ? o.replace : o;
                if (
                  (this.options.interpolation.defaultVariables &&
                    (g = C(
                      C({}, this.options.interpolation.defaultVariables),
                      g,
                    )),
                  (e = this.interpolator.interpolate(
                    e,
                    g,
                    o.lng || this.language,
                    o,
                  )),
                  c)
                ) {
                  var y = e.match(this.interpolator.nestingRegexp),
                    w = y && y.length;
                  f < w && (o.nest = !1);
                }
                !o.lng &&
                  this.options.compatibilityAPI !== "v1" &&
                  s &&
                  s.res &&
                  (o.lng = s.usedLng),
                  o.nest !== !1 &&
                    (e = this.interpolator.nest(
                      e,
                      function () {
                        for (
                          var v = arguments.length, P = new Array(v), x = 0;
                          x < v;
                          x++
                        )
                          P[x] = arguments[x];
                        return u && u[0] === P[0] && !o.context
                          ? (d.logger.warn(
                              "It seems you are nesting recursively key: "
                                .concat(P[0], " in key: ")
                                .concat(a[0]),
                            ),
                            null)
                          : d.translate.apply(d, P.concat([a]));
                      },
                      o,
                    )),
                  o.interpolation && this.interpolator.reset();
              }
              var b = o.postProcess || this.options.postProcess,
                m = typeof b == "string" ? [b] : b;
              return (
                e != null &&
                  m &&
                  m.length &&
                  o.applyPostProcessor !== !1 &&
                  (e = Lt.handle(
                    m,
                    e,
                    a,
                    this.options && this.options.postProcessPassResolved
                      ? C({ i18nResolved: s }, o)
                      : o,
                    this,
                  )),
                e
              );
            },
          },
          {
            key: "resolve",
            value: function (e) {
              var a = this,
                o =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
                s,
                u,
                d,
                c,
                f;
              return (
                typeof e == "string" && (e = [e]),
                e.forEach(function (h) {
                  if (!a.isValidLookup(s)) {
                    var g = a.extractFromKey(h, o),
                      y = g.key;
                    u = y;
                    var w = g.namespaces;
                    a.options.fallbackNS &&
                      (w = w.concat(a.options.fallbackNS));
                    var b = o.count !== void 0 && typeof o.count != "string",
                      m =
                        b &&
                        !o.ordinal &&
                        o.count === 0 &&
                        a.pluralResolver.shouldUseIntlApi(),
                      v =
                        o.context !== void 0 &&
                        (typeof o.context == "string" ||
                          typeof o.context == "number") &&
                        o.context !== "",
                      P = o.lngs
                        ? o.lngs
                        : a.languageUtils.toResolveHierarchy(
                            o.lng || a.language,
                            o.fallbackLng,
                          );
                    w.forEach(function (x) {
                      a.isValidLookup(s) ||
                        ((f = x),
                        !gt["".concat(P[0], "-").concat(x)] &&
                          a.utils &&
                          a.utils.hasLoadedNamespace &&
                          !a.utils.hasLoadedNamespace(f) &&
                          ((gt["".concat(P[0], "-").concat(x)] = !0),
                          a.logger.warn(
                            'key "'
                              .concat(u, '" for languages "')
                              .concat(
                                P.join(", "),
                                `" won't get resolved as namespace "`,
                              )
                              .concat(f, '" was not yet loaded'),
                            "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
                          )),
                        P.forEach(function (L) {
                          if (!a.isValidLookup(s)) {
                            c = L;
                            var A = [y];
                            if (a.i18nFormat && a.i18nFormat.addLookupKeys)
                              a.i18nFormat.addLookupKeys(A, y, L, x, o);
                            else {
                              var H;
                              b &&
                                (H = a.pluralResolver.getSuffix(L, o.count, o));
                              var E = "".concat(
                                a.options.pluralSeparator,
                                "zero",
                              );
                              if (
                                (b && (A.push(y + H), m && A.push(y + E)), v)
                              ) {
                                var X = ""
                                  .concat(y)
                                  .concat(a.options.contextSeparator)
                                  .concat(o.context);
                                A.push(X),
                                  b && (A.push(X + H), m && A.push(X + E));
                              }
                            }
                            for (var I; (I = A.pop()); )
                              a.isValidLookup(s) ||
                                ((d = I), (s = a.getResource(L, x, I, o)));
                          }
                        }));
                    });
                  }
                }),
                { res: s, usedKey: u, exactUsedKey: d, usedLng: c, usedNS: f }
              );
            },
          },
          {
            key: "isValidLookup",
            value: function (e) {
              return (
                e !== void 0 &&
                !(!this.options.returnNull && e === null) &&
                !(!this.options.returnEmptyString && e === "")
              );
            },
          },
          {
            key: "getResource",
            value: function (e, a, o) {
              var s =
                arguments.length > 3 && arguments[3] !== void 0
                  ? arguments[3]
                  : {};
              return this.i18nFormat && this.i18nFormat.getResource
                ? this.i18nFormat.getResource(e, a, o, s)
                : this.resourceStore.getResource(e, a, o, s);
            },
          },
        ],
        [
          {
            key: "hasDefaultValue",
            value: function (e) {
              var a = "defaultValue";
              for (var o in e)
                if (
                  Object.prototype.hasOwnProperty.call(e, o) &&
                  a === o.substring(0, a.length) &&
                  e[o] !== void 0
                )
                  return !0;
              return !1;
            },
          },
        ],
      ),
      t
    );
  })(W);
function Fe(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
var mt = (function () {
    function i(r) {
      N(this, i),
        (this.options = r),
        (this.supportedLngs = this.options.supportedLngs || !1),
        (this.logger = B.create("languageUtils"));
    }
    return (
      T(i, [
        {
          key: "getScriptPartFromCode",
          value: function (t) {
            if (!t || t.indexOf("-") < 0) return null;
            var n = t.split("-");
            return n.length === 2 ||
              (n.pop(), n[n.length - 1].toLowerCase() === "x")
              ? null
              : this.formatLanguageCode(n.join("-"));
          },
        },
        {
          key: "getLanguagePartFromCode",
          value: function (t) {
            if (!t || t.indexOf("-") < 0) return t;
            var n = t.split("-");
            return this.formatLanguageCode(n[0]);
          },
        },
        {
          key: "formatLanguageCode",
          value: function (t) {
            if (typeof t == "string" && t.indexOf("-") > -1) {
              var n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                e = t.split("-");
              return (
                this.options.lowerCaseLng
                  ? (e = e.map(function (a) {
                      return a.toLowerCase();
                    }))
                  : e.length === 2
                    ? ((e[0] = e[0].toLowerCase()),
                      (e[1] = e[1].toUpperCase()),
                      n.indexOf(e[1].toLowerCase()) > -1 &&
                        (e[1] = Fe(e[1].toLowerCase())))
                    : e.length === 3 &&
                      ((e[0] = e[0].toLowerCase()),
                      e[1].length === 2 && (e[1] = e[1].toUpperCase()),
                      e[0] !== "sgn" &&
                        e[2].length === 2 &&
                        (e[2] = e[2].toUpperCase()),
                      n.indexOf(e[1].toLowerCase()) > -1 &&
                        (e[1] = Fe(e[1].toLowerCase())),
                      n.indexOf(e[2].toLowerCase()) > -1 &&
                        (e[2] = Fe(e[2].toLowerCase()))),
                e.join("-")
              );
            }
            return this.options.cleanCode || this.options.lowerCaseLng
              ? t.toLowerCase()
              : t;
          },
        },
        {
          key: "isSupportedCode",
          value: function (t) {
            return (
              (this.options.load === "languageOnly" ||
                this.options.nonExplicitSupportedLngs) &&
                (t = this.getLanguagePartFromCode(t)),
              !this.supportedLngs ||
                !this.supportedLngs.length ||
                this.supportedLngs.indexOf(t) > -1
            );
          },
        },
        {
          key: "getBestMatchFromCodes",
          value: function (t) {
            var n = this;
            if (!t) return null;
            var e;
            return (
              t.forEach(function (a) {
                if (!e) {
                  var o = n.formatLanguageCode(a);
                  (!n.options.supportedLngs || n.isSupportedCode(o)) && (e = o);
                }
              }),
              !e &&
                this.options.supportedLngs &&
                t.forEach(function (a) {
                  if (!e) {
                    var o = n.getLanguagePartFromCode(a);
                    if (n.isSupportedCode(o)) return (e = o);
                    e = n.options.supportedLngs.find(function (s) {
                      if (s === o) return s;
                      if (
                        !(s.indexOf("-") < 0 && o.indexOf("-") < 0) &&
                        s.indexOf(o) === 0
                      )
                        return s;
                    });
                  }
                }),
              e || (e = this.getFallbackCodes(this.options.fallbackLng)[0]),
              e
            );
          },
        },
        {
          key: "getFallbackCodes",
          value: function (t, n) {
            if (!t) return [];
            if (
              (typeof t == "function" && (t = t(n)),
              typeof t == "string" && (t = [t]),
              Object.prototype.toString.apply(t) === "[object Array]")
            )
              return t;
            if (!n) return t.default || [];
            var e = t[n];
            return (
              e || (e = t[this.getScriptPartFromCode(n)]),
              e || (e = t[this.formatLanguageCode(n)]),
              e || (e = t[this.getLanguagePartFromCode(n)]),
              e || (e = t.default),
              e || []
            );
          },
        },
        {
          key: "toResolveHierarchy",
          value: function (t, n) {
            var e = this,
              a = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
              o = [],
              s = function (d) {
                d &&
                  (e.isSupportedCode(d)
                    ? o.push(d)
                    : e.logger.warn(
                        "rejecting language code not found in supportedLngs: ".concat(
                          d,
                        ),
                      ));
              };
            return (
              typeof t == "string" && t.indexOf("-") > -1
                ? (this.options.load !== "languageOnly" &&
                    s(this.formatLanguageCode(t)),
                  this.options.load !== "languageOnly" &&
                    this.options.load !== "currentOnly" &&
                    s(this.getScriptPartFromCode(t)),
                  this.options.load !== "currentOnly" &&
                    s(this.getLanguagePartFromCode(t)))
                : typeof t == "string" && s(this.formatLanguageCode(t)),
              a.forEach(function (u) {
                o.indexOf(u) < 0 && s(e.formatLanguageCode(u));
              }),
              o
            );
          },
        },
      ]),
      i
    );
  })(),
  wn = [
    {
      lngs: [
        "ach",
        "ak",
        "am",
        "arn",
        "br",
        "fil",
        "gun",
        "ln",
        "mfe",
        "mg",
        "mi",
        "oc",
        "pt",
        "pt-BR",
        "tg",
        "tl",
        "ti",
        "tr",
        "uz",
        "wa",
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        "af",
        "an",
        "ast",
        "az",
        "bg",
        "bn",
        "ca",
        "da",
        "de",
        "dev",
        "el",
        "en",
        "eo",
        "es",
        "et",
        "eu",
        "fi",
        "fo",
        "fur",
        "fy",
        "gl",
        "gu",
        "ha",
        "hi",
        "hu",
        "hy",
        "ia",
        "it",
        "kk",
        "kn",
        "ku",
        "lb",
        "mai",
        "ml",
        "mn",
        "mr",
        "nah",
        "nap",
        "nb",
        "ne",
        "nl",
        "nn",
        "no",
        "nso",
        "pa",
        "pap",
        "pms",
        "ps",
        "pt-PT",
        "rm",
        "sco",
        "se",
        "si",
        "so",
        "son",
        "sq",
        "sv",
        "sw",
        "ta",
        "te",
        "tk",
        "ur",
        "yo",
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        "ay",
        "bo",
        "cgg",
        "fa",
        "ht",
        "id",
        "ja",
        "jbo",
        "ka",
        "km",
        "ko",
        "ky",
        "lo",
        "ms",
        "sah",
        "su",
        "th",
        "tt",
        "ug",
        "vi",
        "wo",
        "zh",
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
    { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
    { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ["fr"], nr: [1, 2], fc: 9 },
    { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ["is"], nr: [1, 2], fc: 12 },
    { lngs: ["jv"], nr: [0, 1], fc: 13 },
    { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
    { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
    { lngs: ["mk"], nr: [1, 2], fc: 17 },
    { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
    { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ["or"], nr: [2, 1], fc: 2 },
    { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
    { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
  ],
  On = {
    1: function (r) {
      return Number(r > 1);
    },
    2: function (r) {
      return Number(r != 1);
    },
    3: function (r) {
      return 0;
    },
    4: function (r) {
      return Number(
        r % 10 == 1 && r % 100 != 11
          ? 0
          : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20)
            ? 1
            : 2,
      );
    },
    5: function (r) {
      return Number(
        r == 0
          ? 0
          : r == 1
            ? 1
            : r == 2
              ? 2
              : r % 100 >= 3 && r % 100 <= 10
                ? 3
                : r % 100 >= 11
                  ? 4
                  : 5,
      );
    },
    6: function (r) {
      return Number(r == 1 ? 0 : r >= 2 && r <= 4 ? 1 : 2);
    },
    7: function (r) {
      return Number(
        r == 1
          ? 0
          : r % 10 >= 2 && r % 10 <= 4 && (r % 100 < 10 || r % 100 >= 20)
            ? 1
            : 2,
      );
    },
    8: function (r) {
      return Number(r == 1 ? 0 : r == 2 ? 1 : r != 8 && r != 11 ? 2 : 3);
    },
    9: function (r) {
      return Number(r >= 2);
    },
    10: function (r) {
      return Number(r == 1 ? 0 : r == 2 ? 1 : r < 7 ? 2 : r < 11 ? 3 : 4);
    },
    11: function (r) {
      return Number(
        r == 1 || r == 11 ? 0 : r == 2 || r == 12 ? 1 : r > 2 && r < 20 ? 2 : 3,
      );
    },
    12: function (r) {
      return Number(r % 10 != 1 || r % 100 == 11);
    },
    13: function (r) {
      return Number(r !== 0);
    },
    14: function (r) {
      return Number(r == 1 ? 0 : r == 2 ? 1 : r == 3 ? 2 : 3);
    },
    15: function (r) {
      return Number(
        r % 10 == 1 && r % 100 != 11
          ? 0
          : r % 10 >= 2 && (r % 100 < 10 || r % 100 >= 20)
            ? 1
            : 2,
      );
    },
    16: function (r) {
      return Number(r % 10 == 1 && r % 100 != 11 ? 0 : r !== 0 ? 1 : 2);
    },
    17: function (r) {
      return Number(r == 1 || (r % 10 == 1 && r % 100 != 11) ? 0 : 1);
    },
    18: function (r) {
      return Number(r == 0 ? 0 : r == 1 ? 1 : 2);
    },
    19: function (r) {
      return Number(
        r == 1
          ? 0
          : r == 0 || (r % 100 > 1 && r % 100 < 11)
            ? 1
            : r % 100 > 10 && r % 100 < 20
              ? 2
              : 3,
      );
    },
    20: function (r) {
      return Number(
        r == 1 ? 0 : r == 0 || (r % 100 > 0 && r % 100 < 20) ? 1 : 2,
      );
    },
    21: function (r) {
      return Number(
        r % 100 == 1
          ? 1
          : r % 100 == 2
            ? 2
            : r % 100 == 3 || r % 100 == 4
              ? 3
              : 0,
      );
    },
    22: function (r) {
      return Number(
        r == 1 ? 0 : r == 2 ? 1 : (r < 0 || r > 10) && r % 10 == 0 ? 2 : 3,
      );
    },
  },
  Sn = ["v1", "v2", "v3"],
  vt = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
function xn() {
  var i = {};
  return (
    wn.forEach(function (r) {
      r.lngs.forEach(function (t) {
        i[t] = { numbers: r.nr, plurals: On[r.fc] };
      });
    }),
    i
  );
}
var jn = (function () {
  function i(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    N(this, i),
      (this.languageUtils = r),
      (this.options = t),
      (this.logger = B.create("pluralResolver")),
      (!this.options.compatibilityJSON ||
        this.options.compatibilityJSON === "v4") &&
        (typeof Intl > "u" || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = "v3"),
        this.logger.error(
          "Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.",
        )),
      (this.rules = xn());
  }
  return (
    T(i, [
      {
        key: "addRule",
        value: function (t, n) {
          this.rules[t] = n;
        },
      },
      {
        key: "getRule",
        value: function (t) {
          var n =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (this.shouldUseIntlApi())
            try {
              return new Intl.PluralRules(t, {
                type: n.ordinal ? "ordinal" : "cardinal",
              });
            } catch {
              return;
            }
          return (
            this.rules[t] ||
            this.rules[this.languageUtils.getLanguagePartFromCode(t)]
          );
        },
      },
      {
        key: "needsPlural",
        value: function (t) {
          var n =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            e = this.getRule(t, n);
          return this.shouldUseIntlApi()
            ? e && e.resolvedOptions().pluralCategories.length > 1
            : e && e.numbers.length > 1;
        },
      },
      {
        key: "getPluralFormsOfKey",
        value: function (t, n) {
          var e =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return this.getSuffixes(t, e).map(function (a) {
            return "".concat(n).concat(a);
          });
        },
      },
      {
        key: "getSuffixes",
        value: function (t) {
          var n = this,
            e =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            a = this.getRule(t, e);
          return a
            ? this.shouldUseIntlApi()
              ? a
                  .resolvedOptions()
                  .pluralCategories.sort(function (o, s) {
                    return vt[o] - vt[s];
                  })
                  .map(function (o) {
                    return "".concat(n.options.prepend).concat(o);
                  })
              : a.numbers.map(function (o) {
                  return n.getSuffix(t, o, e);
                })
            : [];
        },
      },
      {
        key: "getSuffix",
        value: function (t, n) {
          var e =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {},
            a = this.getRule(t, e);
          return a
            ? this.shouldUseIntlApi()
              ? "".concat(this.options.prepend).concat(a.select(n))
              : this.getSuffixRetroCompatible(a, n)
            : (this.logger.warn("no plural rule found for: ".concat(t)), "");
        },
      },
      {
        key: "getSuffixRetroCompatible",
        value: function (t, n) {
          var e = this,
            a = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n)),
            o = t.numbers[a];
          this.options.simplifyPluralSuffix &&
            t.numbers.length === 2 &&
            t.numbers[0] === 1 &&
            (o === 2 ? (o = "plural") : o === 1 && (o = ""));
          var s = function () {
            return e.options.prepend && o.toString()
              ? e.options.prepend + o.toString()
              : o.toString();
          };
          return this.options.compatibilityJSON === "v1"
            ? o === 1
              ? ""
              : typeof o == "number"
                ? "_plural_".concat(o.toString())
                : s()
            : this.options.compatibilityJSON === "v2" ||
                (this.options.simplifyPluralSuffix &&
                  t.numbers.length === 2 &&
                  t.numbers[0] === 1)
              ? s()
              : this.options.prepend && a.toString()
                ? this.options.prepend + a.toString()
                : a.toString();
        },
      },
      {
        key: "shouldUseIntlApi",
        value: function () {
          return !Sn.includes(this.options.compatibilityJSON);
        },
      },
    ]),
    i
  );
})();
function yt(i, r) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(i);
    r &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(i, e).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function D(i) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? yt(Object(t), !0).forEach(function (n) {
          q(i, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t))
        : yt(Object(t)).forEach(function (n) {
            Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(t, n));
          });
  }
  return i;
}
function bt(i, r, t) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".",
    e = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
    a = ln(i, r, t);
  return (
    !a &&
      e &&
      typeof t == "string" &&
      ((a = Oe(i, t, n)), a === void 0 && (a = Oe(r, t, n))),
    a
  );
}
var Pn = (function () {
  function i() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    N(this, i),
      (this.logger = B.create("interpolator")),
      (this.options = r),
      (this.format =
        (r.interpolation && r.interpolation.format) ||
        function (t) {
          return t;
        }),
      this.init(r);
  }
  return (
    T(i, [
      {
        key: "init",
        value: function () {
          var t =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          t.interpolation || (t.interpolation = { escapeValue: !0 });
          var n = t.interpolation;
          (this.escape = n.escape !== void 0 ? n.escape : dn),
            (this.escapeValue = n.escapeValue !== void 0 ? n.escapeValue : !0),
            (this.useRawValueToEscape =
              n.useRawValueToEscape !== void 0 ? n.useRawValueToEscape : !1),
            (this.prefix = n.prefix ? $(n.prefix) : n.prefixEscaped || "{{"),
            (this.suffix = n.suffix ? $(n.suffix) : n.suffixEscaped || "}}"),
            (this.formatSeparator = n.formatSeparator
              ? n.formatSeparator
              : n.formatSeparator || ","),
            (this.unescapePrefix = n.unescapeSuffix
              ? ""
              : n.unescapePrefix || "-"),
            (this.unescapeSuffix = this.unescapePrefix
              ? ""
              : n.unescapeSuffix || ""),
            (this.nestingPrefix = n.nestingPrefix
              ? $(n.nestingPrefix)
              : n.nestingPrefixEscaped || $("$t(")),
            (this.nestingSuffix = n.nestingSuffix
              ? $(n.nestingSuffix)
              : n.nestingSuffixEscaped || $(")")),
            (this.nestingOptionsSeparator = n.nestingOptionsSeparator
              ? n.nestingOptionsSeparator
              : n.nestingOptionsSeparator || ","),
            (this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3),
            (this.alwaysFormat =
              n.alwaysFormat !== void 0 ? n.alwaysFormat : !1),
            this.resetRegExp();
        },
      },
      {
        key: "reset",
        value: function () {
          this.options && this.init(this.options);
        },
      },
      {
        key: "resetRegExp",
        value: function () {
          var t = "".concat(this.prefix, "(.+?)").concat(this.suffix);
          this.regexp = new RegExp(t, "g");
          var n = ""
            .concat(this.prefix)
            .concat(this.unescapePrefix, "(.+?)")
            .concat(this.unescapeSuffix)
            .concat(this.suffix);
          this.regexpUnescape = new RegExp(n, "g");
          var e = ""
            .concat(this.nestingPrefix, "(.+?)")
            .concat(this.nestingSuffix);
          this.nestingRegexp = new RegExp(e, "g");
        },
      },
      {
        key: "interpolate",
        value: function (t, n, e, a) {
          var o = this,
            s,
            u,
            d,
            c =
              (this.options &&
                this.options.interpolation &&
                this.options.interpolation.defaultVariables) ||
              {};
          function f(b) {
            return b.replace(/\$/g, "$$$$");
          }
          var h = function (m) {
            if (m.indexOf(o.formatSeparator) < 0) {
              var v = bt(
                n,
                c,
                m,
                o.options.keySeparator,
                o.options.ignoreJSONStructure,
              );
              return o.alwaysFormat
                ? o.format(
                    v,
                    void 0,
                    e,
                    D(D(D({}, a), n), {}, { interpolationkey: m }),
                  )
                : v;
            }
            var P = m.split(o.formatSeparator),
              x = P.shift().trim(),
              L = P.join(o.formatSeparator).trim();
            return o.format(
              bt(
                n,
                c,
                x,
                o.options.keySeparator,
                o.options.ignoreJSONStructure,
              ),
              L,
              e,
              D(D(D({}, a), n), {}, { interpolationkey: x }),
            );
          };
          this.resetRegExp();
          var g =
              (a && a.missingInterpolationHandler) ||
              this.options.missingInterpolationHandler,
            y =
              a && a.interpolation && a.interpolation.skipOnVariables !== void 0
                ? a.interpolation.skipOnVariables
                : this.options.interpolation.skipOnVariables,
            w = [
              {
                regex: this.regexpUnescape,
                safeValue: function (m) {
                  return f(m);
                },
              },
              {
                regex: this.regexp,
                safeValue: function (m) {
                  return o.escapeValue ? f(o.escape(m)) : f(m);
                },
              },
            ];
          return (
            w.forEach(function (b) {
              for (d = 0; (s = b.regex.exec(t)); ) {
                var m = s[1].trim();
                if (((u = h(m)), u === void 0))
                  if (typeof g == "function") {
                    var v = g(t, s, a);
                    u = typeof v == "string" ? v : "";
                  } else if (a && Object.prototype.hasOwnProperty.call(a, m))
                    u = "";
                  else if (y) {
                    u = s[0];
                    continue;
                  } else
                    o.logger.warn(
                      "missed to pass in variable "
                        .concat(m, " for interpolating ")
                        .concat(t),
                    ),
                      (u = "");
                else
                  typeof u != "string" && !o.useRawValueToEscape && (u = lt(u));
                var P = b.safeValue(u);
                if (
                  ((t = t.replace(s[0], P)),
                  y
                    ? ((b.regex.lastIndex += u.length),
                      (b.regex.lastIndex -= s[0].length))
                    : (b.regex.lastIndex = 0),
                  d++,
                  d >= o.maxReplaces)
                )
                  break;
              }
            }),
            t
          );
        },
      },
      {
        key: "nest",
        value: function (t, n) {
          var e = this,
            a =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {},
            o,
            s,
            u;
          function d(g, y) {
            var w = this.nestingOptionsSeparator;
            if (g.indexOf(w) < 0) return g;
            var b = g.split(new RegExp("".concat(w, "[ ]*{"))),
              m = "{".concat(b[1]);
            (g = b[0]), (m = this.interpolate(m, u));
            var v = m.match(/'/g),
              P = m.match(/"/g);
            ((v && v.length % 2 === 0 && !P) || P.length % 2 !== 0) &&
              (m = m.replace(/'/g, '"'));
            try {
              (u = JSON.parse(m)), y && (u = D(D({}, y), u));
            } catch (x) {
              return (
                this.logger.warn(
                  "failed parsing options string in nesting for key ".concat(g),
                  x,
                ),
                "".concat(g).concat(w).concat(m)
              );
            }
            return delete u.defaultValue, g;
          }
          for (; (o = this.nestingRegexp.exec(t)); ) {
            var c = [];
            (u = D({}, a)),
              (u = u.replace && typeof u.replace != "string" ? u.replace : u),
              (u.applyPostProcessor = !1),
              delete u.defaultValue;
            var f = !1;
            if (
              o[0].indexOf(this.formatSeparator) !== -1 &&
              !/{.*}/.test(o[1])
            ) {
              var h = o[1].split(this.formatSeparator).map(function (g) {
                return g.trim();
              });
              (o[1] = h.shift()), (c = h), (f = !0);
            }
            if (
              ((s = n(d.call(this, o[1].trim(), u), u)),
              s && o[0] === t && typeof s != "string")
            )
              return s;
            typeof s != "string" && (s = lt(s)),
              s ||
                (this.logger.warn(
                  "missed to resolve ".concat(o[1], " for nesting ").concat(t),
                ),
                (s = "")),
              f &&
                (s = c.reduce(function (g, y) {
                  return e.format(
                    g,
                    y,
                    a.lng,
                    D(D({}, a), {}, { interpolationkey: o[1].trim() }),
                  );
                }, s.trim())),
              (t = t.replace(o[0], s)),
              (this.regexp.lastIndex = 0);
          }
          return t;
        },
      },
    ]),
    i
  );
})();
function wt(i, r) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(i);
    r &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(i, e).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function V(i) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? wt(Object(t), !0).forEach(function (n) {
          q(i, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t))
        : wt(Object(t)).forEach(function (n) {
            Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(t, n));
          });
  }
  return i;
}
function kn(i) {
  var r = i.toLowerCase().trim(),
    t = {};
  if (i.indexOf("(") > -1) {
    var n = i.split("(");
    r = n[0].toLowerCase().trim();
    var e = n[1].substring(0, n[1].length - 1);
    if (r === "currency" && e.indexOf(":") < 0)
      t.currency || (t.currency = e.trim());
    else if (r === "relativetime" && e.indexOf(":") < 0)
      t.range || (t.range = e.trim());
    else {
      var a = e.split(";");
      a.forEach(function (o) {
        if (o) {
          var s = o.split(":"),
            u = Ie(s),
            d = u[0],
            c = u.slice(1),
            f = c
              .join(":")
              .trim()
              .replace(/^'+|'+$/g, "");
          t[d.trim()] || (t[d.trim()] = f),
            f === "false" && (t[d.trim()] = !1),
            f === "true" && (t[d.trim()] = !0),
            isNaN(f) || (t[d.trim()] = parseInt(f, 10));
        }
      });
    }
  }
  return { formatName: r, formatOptions: t };
}
function ee(i) {
  var r = {};
  return function (n, e, a) {
    var o = e + JSON.stringify(a),
      s = r[o];
    return s || ((s = i(e, a)), (r[o] = s)), s(n);
  };
}
var Ln = (function () {
  function i() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    N(this, i),
      (this.logger = B.create("formatter")),
      (this.options = r),
      (this.formats = {
        number: ee(function (t, n) {
          var e = new Intl.NumberFormat(t, V({}, n));
          return function (a) {
            return e.format(a);
          };
        }),
        currency: ee(function (t, n) {
          var e = new Intl.NumberFormat(
            t,
            V(V({}, n), {}, { style: "currency" }),
          );
          return function (a) {
            return e.format(a);
          };
        }),
        datetime: ee(function (t, n) {
          var e = new Intl.DateTimeFormat(t, V({}, n));
          return function (a) {
            return e.format(a);
          };
        }),
        relativetime: ee(function (t, n) {
          var e = new Intl.RelativeTimeFormat(t, V({}, n));
          return function (a) {
            return e.format(a, n.range || "day");
          };
        }),
        list: ee(function (t, n) {
          var e = new Intl.ListFormat(t, V({}, n));
          return function (a) {
            return e.format(a);
          };
        }),
      }),
      this.init(r);
  }
  return (
    T(i, [
      {
        key: "init",
        value: function (t) {
          var n =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : { interpolation: {} },
            e = n.interpolation;
          this.formatSeparator = e.formatSeparator
            ? e.formatSeparator
            : e.formatSeparator || ",";
        },
      },
      {
        key: "add",
        value: function (t, n) {
          this.formats[t.toLowerCase().trim()] = n;
        },
      },
      {
        key: "addCached",
        value: function (t, n) {
          this.formats[t.toLowerCase().trim()] = ee(n);
        },
      },
      {
        key: "format",
        value: function (t, n, e) {
          var a = this,
            o =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : {},
            s = n.split(this.formatSeparator),
            u = s.reduce(function (d, c) {
              var f = kn(c),
                h = f.formatName,
                g = f.formatOptions;
              if (a.formats[h]) {
                var y = d;
                try {
                  var w =
                      (o &&
                        o.formatParams &&
                        o.formatParams[o.interpolationkey]) ||
                      {},
                    b = w.locale || w.lng || o.locale || o.lng || e;
                  y = a.formats[h](d, b, V(V(V({}, g), o), w));
                } catch (m) {
                  a.logger.warn(m);
                }
                return y;
              } else
                a.logger.warn("there was no format function for ".concat(h));
              return d;
            }, t);
          return u;
        },
      },
    ]),
    i
  );
})();
function Ot(i, r) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(i);
    r &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(i, e).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function St(i) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? Ot(Object(t), !0).forEach(function (n) {
          q(i, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t))
        : Ot(Object(t)).forEach(function (n) {
            Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(t, n));
          });
  }
  return i;
}
function Rn(i) {
  var r = En();
  return function () {
    var n = M(i),
      e;
    if (r) {
      var a = M(this).constructor;
      e = Reflect.construct(n, arguments, a);
    } else e = n.apply(this, arguments);
    return Z(this, e);
  };
}
function En() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function _n(i, r) {
  i.pending[r] !== void 0 && (delete i.pending[r], i.pendingCount--);
}
var Cn = (function (i) {
  ie(t, i);
  var r = Rn(t);
  function t(n, e, a) {
    var o,
      s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (
      N(this, t),
      (o = r.call(this)),
      xe && W.call(z(o)),
      (o.backend = n),
      (o.store = e),
      (o.services = a),
      (o.languageUtils = a.languageUtils),
      (o.options = s),
      (o.logger = B.create("backendConnector")),
      (o.waitingReads = []),
      (o.maxParallelReads = s.maxParallelReads || 10),
      (o.readingCalls = 0),
      (o.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5),
      (o.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350),
      (o.state = {}),
      (o.queue = []),
      o.backend && o.backend.init && o.backend.init(a, s.backend, s),
      o
    );
  }
  return (
    T(t, [
      {
        key: "queueLoad",
        value: function (e, a, o, s) {
          var u = this,
            d = {},
            c = {},
            f = {},
            h = {};
          return (
            e.forEach(function (g) {
              var y = !0;
              a.forEach(function (w) {
                var b = "".concat(g, "|").concat(w);
                !o.reload && u.store.hasResourceBundle(g, w)
                  ? (u.state[b] = 2)
                  : u.state[b] < 0 ||
                    (u.state[b] === 1
                      ? c[b] === void 0 && (c[b] = !0)
                      : ((u.state[b] = 1),
                        (y = !1),
                        c[b] === void 0 && (c[b] = !0),
                        d[b] === void 0 && (d[b] = !0),
                        h[w] === void 0 && (h[w] = !0)));
              }),
                y || (f[g] = !0);
            }),
            (Object.keys(d).length || Object.keys(c).length) &&
              this.queue.push({
                pending: c,
                pendingCount: Object.keys(c).length,
                loaded: {},
                errors: [],
                callback: s,
              }),
            {
              toLoad: Object.keys(d),
              pending: Object.keys(c),
              toLoadLanguages: Object.keys(f),
              toLoadNamespaces: Object.keys(h),
            }
          );
        },
      },
      {
        key: "loaded",
        value: function (e, a, o) {
          var s = e.split("|"),
            u = s[0],
            d = s[1];
          a && this.emit("failedLoading", u, d, a),
            o && this.store.addResourceBundle(u, d, o),
            (this.state[e] = a ? -1 : 2);
          var c = {};
          this.queue.forEach(function (f) {
            fn(f.loaded, [u], d),
              _n(f, e),
              a && f.errors.push(a),
              f.pendingCount === 0 &&
                !f.done &&
                (Object.keys(f.loaded).forEach(function (h) {
                  c[h] || (c[h] = {});
                  var g = f.loaded[h];
                  g.length &&
                    g.forEach(function (y) {
                      c[h][y] === void 0 && (c[h][y] = !0);
                    });
                }),
                (f.done = !0),
                f.errors.length ? f.callback(f.errors) : f.callback());
          }),
            this.emit("loaded", c),
            (this.queue = this.queue.filter(function (f) {
              return !f.done;
            }));
        },
      },
      {
        key: "read",
        value: function (e, a, o) {
          var s = this,
            u =
              arguments.length > 3 && arguments[3] !== void 0
                ? arguments[3]
                : 0,
            d =
              arguments.length > 4 && arguments[4] !== void 0
                ? arguments[4]
                : this.retryTimeout,
            c = arguments.length > 5 ? arguments[5] : void 0;
          if (!e.length) return c(null, {});
          if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
              lng: e,
              ns: a,
              fcName: o,
              tried: u,
              wait: d,
              callback: c,
            });
            return;
          }
          this.readingCalls++;
          var f = function (w, b) {
              if ((s.readingCalls--, s.waitingReads.length > 0)) {
                var m = s.waitingReads.shift();
                s.read(m.lng, m.ns, m.fcName, m.tried, m.wait, m.callback);
              }
              if (w && b && u < s.maxRetries) {
                setTimeout(function () {
                  s.read.call(s, e, a, o, u + 1, d * 2, c);
                }, d);
                return;
              }
              c(w, b);
            },
            h = this.backend[o].bind(this.backend);
          if (h.length === 2) {
            try {
              var g = h(e, a);
              g && typeof g.then == "function"
                ? g
                    .then(function (y) {
                      return f(null, y);
                    })
                    .catch(f)
                : f(null, g);
            } catch (y) {
              f(y);
            }
            return;
          }
          return h(e, a, f);
        },
      },
      {
        key: "prepareLoading",
        value: function (e, a) {
          var o = this,
            s =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {},
            u = arguments.length > 3 ? arguments[3] : void 0;
          if (!this.backend)
            return (
              this.logger.warn(
                "No backend was added via i18next.use. Will not load resources.",
              ),
              u && u()
            );
          typeof e == "string" &&
            (e = this.languageUtils.toResolveHierarchy(e)),
            typeof a == "string" && (a = [a]);
          var d = this.queueLoad(e, a, s, u);
          if (!d.toLoad.length) return d.pending.length || u(), null;
          d.toLoad.forEach(function (c) {
            o.loadOne(c);
          });
        },
      },
      {
        key: "load",
        value: function (e, a, o) {
          this.prepareLoading(e, a, {}, o);
        },
      },
      {
        key: "reload",
        value: function (e, a, o) {
          this.prepareLoading(e, a, { reload: !0 }, o);
        },
      },
      {
        key: "loadOne",
        value: function (e) {
          var a = this,
            o =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : "",
            s = e.split("|"),
            u = s[0],
            d = s[1];
          this.read(u, d, "read", void 0, void 0, function (c, f) {
            c &&
              a.logger.warn(
                ""
                  .concat(o, "loading namespace ")
                  .concat(d, " for language ")
                  .concat(u, " failed"),
                c,
              ),
              !c &&
                f &&
                a.logger.log(
                  ""
                    .concat(o, "loaded namespace ")
                    .concat(d, " for language ")
                    .concat(u),
                  f,
                ),
              a.loaded(e, c, f);
          });
        },
      },
      {
        key: "saveMissing",
        value: function (e, a, o, s, u) {
          var d =
              arguments.length > 5 && arguments[5] !== void 0
                ? arguments[5]
                : {},
            c =
              arguments.length > 6 && arguments[6] !== void 0
                ? arguments[6]
                : function () {};
          if (
            this.services.utils &&
            this.services.utils.hasLoadedNamespace &&
            !this.services.utils.hasLoadedNamespace(a)
          ) {
            this.logger.warn(
              'did not save key "'
                .concat(o, '" as the namespace "')
                .concat(a, '" was not yet loaded'),
              "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!",
            );
            return;
          }
          if (!(o == null || o === "")) {
            if (this.backend && this.backend.create) {
              var f = St(St({}, d), {}, { isUpdate: u }),
                h = this.backend.create.bind(this.backend);
              if (h.length < 6)
                try {
                  var g;
                  h.length === 5 ? (g = h(e, a, o, s, f)) : (g = h(e, a, o, s)),
                    g && typeof g.then == "function"
                      ? g
                          .then(function (y) {
                            return c(null, y);
                          })
                          .catch(c)
                      : c(null, g);
                } catch (y) {
                  c(y);
                }
              else h(e, a, o, s, c, f);
            }
            !e || !e[0] || this.store.addResource(e[0], a, o, s);
          }
        },
      },
    ]),
    t
  );
})(W);
function xt() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !0,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function (r) {
      var t = {};
      if (
        (Y(r[1]) === "object" && (t = r[1]),
        typeof r[1] == "string" && (t.defaultValue = r[1]),
        typeof r[2] == "string" && (t.tDescription = r[2]),
        Y(r[2]) === "object" || Y(r[3]) === "object")
      ) {
        var n = r[3] || r[2];
        Object.keys(n).forEach(function (e) {
          t[e] = n[e];
        });
      }
      return t;
    },
    interpolation: {
      escapeValue: !0,
      format: function (r, t, n, e) {
        return r;
      },
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  };
}
function jt(i) {
  return (
    typeof i.ns == "string" && (i.ns = [i.ns]),
    typeof i.fallbackLng == "string" && (i.fallbackLng = [i.fallbackLng]),
    typeof i.fallbackNS == "string" && (i.fallbackNS = [i.fallbackNS]),
    i.supportedLngs &&
      i.supportedLngs.indexOf("cimode") < 0 &&
      (i.supportedLngs = i.supportedLngs.concat(["cimode"])),
    i
  );
}
function Pt(i, r) {
  var t = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(i);
    r &&
      (n = n.filter(function (e) {
        return Object.getOwnPropertyDescriptor(i, e).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function U(i) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? Pt(Object(t), !0).forEach(function (n) {
          q(i, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(t))
        : Pt(Object(t)).forEach(function (n) {
            Object.defineProperty(i, n, Object.getOwnPropertyDescriptor(t, n));
          });
  }
  return i;
}
function Nn(i) {
  var r = Tn();
  return function () {
    var n = M(i),
      e;
    if (r) {
      var a = M(this).constructor;
      e = Reflect.construct(n, arguments, a);
    } else e = n.apply(this, arguments);
    return Z(this, e);
  };
}
function Tn() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function be() {}
function An(i) {
  var r = Object.getOwnPropertyNames(Object.getPrototypeOf(i));
  r.forEach(function (t) {
    typeof i[t] == "function" && (i[t] = i[t].bind(i));
  });
}
var Se = (function (i) {
  ie(t, i);
  var r = Nn(t);
  function t() {
    var n,
      e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (N(this, t),
      (n = r.call(this)),
      xe && W.call(z(n)),
      (n.options = jt(e)),
      (n.services = {}),
      (n.logger = B),
      (n.modules = { external: [] }),
      An(z(n)),
      a && !n.isInitialized && !e.isClone)
    ) {
      if (!n.options.initImmediate) return n.init(e, a), Z(n, z(n));
      setTimeout(function () {
        n.init(e, a);
      }, 0);
    }
    return n;
  }
  return (
    T(t, [
      {
        key: "init",
        value: function () {
          var e = this,
            a =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            o = arguments.length > 1 ? arguments[1] : void 0;
          typeof a == "function" && ((o = a), (a = {})),
            !a.defaultNS &&
              a.defaultNS !== !1 &&
              a.ns &&
              (typeof a.ns == "string"
                ? (a.defaultNS = a.ns)
                : a.ns.indexOf("translation") < 0 && (a.defaultNS = a.ns[0]));
          var s = xt();
          (this.options = U(U(U({}, s), this.options), jt(a))),
            this.options.compatibilityAPI !== "v1" &&
              (this.options.interpolation = U(
                U({}, s.interpolation),
                this.options.interpolation,
              )),
            a.keySeparator !== void 0 &&
              (this.options.userDefinedKeySeparator = a.keySeparator),
            a.nsSeparator !== void 0 &&
              (this.options.userDefinedNsSeparator = a.nsSeparator);
          function u(m) {
            return m ? (typeof m == "function" ? new m() : m) : null;
          }
          if (!this.options.isClone) {
            this.modules.logger
              ? B.init(u(this.modules.logger), this.options)
              : B.init(null, this.options);
            var d;
            this.modules.formatter
              ? (d = this.modules.formatter)
              : typeof Intl < "u" && (d = Ln);
            var c = new mt(this.options);
            this.store = new vn(this.options.resources, this.options);
            var f = this.services;
            (f.logger = B),
              (f.resourceStore = this.store),
              (f.languageUtils = c),
              (f.pluralResolver = new jn(c, {
                prepend: this.options.pluralSeparator,
                compatibilityJSON: this.options.compatibilityJSON,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix,
              })),
              d &&
                (!this.options.interpolation.format ||
                  this.options.interpolation.format ===
                    s.interpolation.format) &&
                ((f.formatter = u(d)),
                f.formatter.init(f, this.options),
                (this.options.interpolation.format = f.formatter.format.bind(
                  f.formatter,
                ))),
              (f.interpolator = new Pn(this.options)),
              (f.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this),
              }),
              (f.backendConnector = new Cn(
                u(this.modules.backend),
                f.resourceStore,
                f,
                this.options,
              )),
              f.backendConnector.on("*", function (m) {
                for (
                  var v = arguments.length,
                    P = new Array(v > 1 ? v - 1 : 0),
                    x = 1;
                  x < v;
                  x++
                )
                  P[x - 1] = arguments[x];
                e.emit.apply(e, [m].concat(P));
              }),
              this.modules.languageDetector &&
                ((f.languageDetector = u(this.modules.languageDetector)),
                f.languageDetector.init &&
                  f.languageDetector.init(
                    f,
                    this.options.detection,
                    this.options,
                  )),
              this.modules.i18nFormat &&
                ((f.i18nFormat = u(this.modules.i18nFormat)),
                f.i18nFormat.init && f.i18nFormat.init(this)),
              (this.translator = new pt(this.services, this.options)),
              this.translator.on("*", function (m) {
                for (
                  var v = arguments.length,
                    P = new Array(v > 1 ? v - 1 : 0),
                    x = 1;
                  x < v;
                  x++
                )
                  P[x - 1] = arguments[x];
                e.emit.apply(e, [m].concat(P));
              }),
              this.modules.external.forEach(function (m) {
                m.init && m.init(e);
              });
          }
          if (
            ((this.format = this.options.interpolation.format),
            o || (o = be),
            this.options.fallbackLng &&
              !this.services.languageDetector &&
              !this.options.lng)
          ) {
            var h = this.services.languageUtils.getFallbackCodes(
              this.options.fallbackLng,
            );
            h.length > 0 && h[0] !== "dev" && (this.options.lng = h[0]);
          }
          !this.services.languageDetector &&
            !this.options.lng &&
            this.logger.warn(
              "init: no languageDetector is used and no lng is defined",
            );
          var g = [
            "getResource",
            "hasResourceBundle",
            "getResourceBundle",
            "getDataByLanguage",
          ];
          g.forEach(function (m) {
            e[m] = function () {
              var v;
              return (v = e.store)[m].apply(v, arguments);
            };
          });
          var y = [
            "addResource",
            "addResources",
            "addResourceBundle",
            "removeResourceBundle",
          ];
          y.forEach(function (m) {
            e[m] = function () {
              var v;
              return (v = e.store)[m].apply(v, arguments), e;
            };
          });
          var w = se(),
            b = function () {
              var v = function (x, L) {
                e.isInitialized &&
                  !e.initializedStoreOnce &&
                  e.logger.warn(
                    "init: i18next is already initialized. You should call init just once!",
                  ),
                  (e.isInitialized = !0),
                  e.options.isClone || e.logger.log("initialized", e.options),
                  e.emit("initialized", e.options),
                  w.resolve(L),
                  o(x, L);
              };
              if (
                e.languages &&
                e.options.compatibilityAPI !== "v1" &&
                !e.isInitialized
              )
                return v(null, e.t.bind(e));
              e.changeLanguage(e.options.lng, v);
            };
          return (
            this.options.resources || !this.options.initImmediate
              ? b()
              : setTimeout(b, 0),
            w
          );
        },
      },
      {
        key: "loadResources",
        value: function (e) {
          var a = this,
            o =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : be,
            s = o,
            u = typeof e == "string" ? e : this.language;
          if (
            (typeof e == "function" && (s = e),
            !this.options.resources || this.options.partialBundledLanguages)
          ) {
            if (u && u.toLowerCase() === "cimode") return s();
            var d = [],
              c = function (g) {
                if (g) {
                  var y = a.services.languageUtils.toResolveHierarchy(g);
                  y.forEach(function (w) {
                    d.indexOf(w) < 0 && d.push(w);
                  });
                }
              };
            if (u) c(u);
            else {
              var f = this.services.languageUtils.getFallbackCodes(
                this.options.fallbackLng,
              );
              f.forEach(function (h) {
                return c(h);
              });
            }
            this.options.preload &&
              this.options.preload.forEach(function (h) {
                return c(h);
              }),
              this.services.backendConnector.load(
                d,
                this.options.ns,
                function (h) {
                  !h &&
                    !a.resolvedLanguage &&
                    a.language &&
                    a.setResolvedLanguage(a.language),
                    s(h);
                },
              );
          } else s(null);
        },
      },
      {
        key: "reloadResources",
        value: function (e, a, o) {
          var s = se();
          return (
            e || (e = this.languages),
            a || (a = this.options.ns),
            o || (o = be),
            this.services.backendConnector.reload(e, a, function (u) {
              s.resolve(), o(u);
            }),
            s
          );
        },
      },
      {
        key: "use",
        value: function (e) {
          if (!e)
            throw new Error(
              "You are passing an undefined module! Please check the object you are passing to i18next.use()",
            );
          if (!e.type)
            throw new Error(
              "You are passing a wrong module! Please check the object you are passing to i18next.use()",
            );
          return (
            e.type === "backend" && (this.modules.backend = e),
            (e.type === "logger" || (e.log && e.warn && e.error)) &&
              (this.modules.logger = e),
            e.type === "languageDetector" &&
              (this.modules.languageDetector = e),
            e.type === "i18nFormat" && (this.modules.i18nFormat = e),
            e.type === "postProcessor" && Lt.addPostProcessor(e),
            e.type === "formatter" && (this.modules.formatter = e),
            e.type === "3rdParty" && this.modules.external.push(e),
            this
          );
        },
      },
      {
        key: "setResolvedLanguage",
        value: function (e) {
          if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1))
            for (var a = 0; a < this.languages.length; a++) {
              var o = this.languages[a];
              if (
                !(["cimode", "dev"].indexOf(o) > -1) &&
                this.store.hasLanguageSomeTranslations(o)
              ) {
                this.resolvedLanguage = o;
                break;
              }
            }
        },
      },
      {
        key: "changeLanguage",
        value: function (e, a) {
          var o = this;
          this.isLanguageChangingTo = e;
          var s = se();
          this.emit("languageChanging", e);
          var u = function (h) {
              (o.language = h),
                (o.languages = o.services.languageUtils.toResolveHierarchy(h)),
                (o.resolvedLanguage = void 0),
                o.setResolvedLanguage(h);
            },
            d = function (h, g) {
              g
                ? (u(g),
                  o.translator.changeLanguage(g),
                  (o.isLanguageChangingTo = void 0),
                  o.emit("languageChanged", g),
                  o.logger.log("languageChanged", g))
                : (o.isLanguageChangingTo = void 0),
                s.resolve(function () {
                  return o.t.apply(o, arguments);
                }),
                a &&
                  a(h, function () {
                    return o.t.apply(o, arguments);
                  });
            },
            c = function (h) {
              !e && !h && o.services.languageDetector && (h = []);
              var g =
                typeof h == "string"
                  ? h
                  : o.services.languageUtils.getBestMatchFromCodes(h);
              g &&
                (o.language || u(g),
                o.translator.language || o.translator.changeLanguage(g),
                o.services.languageDetector &&
                  o.services.languageDetector.cacheUserLanguage &&
                  o.services.languageDetector.cacheUserLanguage(g)),
                o.loadResources(g, function (y) {
                  d(y, g);
                });
            };
          return (
            !e &&
            this.services.languageDetector &&
            !this.services.languageDetector.async
              ? c(this.services.languageDetector.detect())
              : !e &&
                  this.services.languageDetector &&
                  this.services.languageDetector.async
                ? this.services.languageDetector.detect.length === 0
                  ? this.services.languageDetector.detect().then(c)
                  : this.services.languageDetector.detect(c)
                : c(e),
            s
          );
        },
      },
      {
        key: "getFixedT",
        value: function (e, a, o) {
          var s = this,
            u = function d(c, f) {
              var h;
              if (Y(f) !== "object") {
                for (
                  var g = arguments.length,
                    y = new Array(g > 2 ? g - 2 : 0),
                    w = 2;
                  w < g;
                  w++
                )
                  y[w - 2] = arguments[w];
                h = s.options.overloadTranslationOptionHandler(
                  [c, f].concat(y),
                );
              } else h = U({}, f);
              (h.lng = h.lng || d.lng),
                (h.lngs = h.lngs || d.lngs),
                (h.ns = h.ns || d.ns),
                (h.keyPrefix = h.keyPrefix || o || d.keyPrefix);
              var b = s.options.keySeparator || ".",
                m;
              return (
                h.keyPrefix && Array.isArray(c)
                  ? (m = c.map(function (v) {
                      return "".concat(h.keyPrefix).concat(b).concat(v);
                    }))
                  : (m = h.keyPrefix
                      ? "".concat(h.keyPrefix).concat(b).concat(c)
                      : c),
                s.t(m, h)
              );
            };
          return (
            typeof e == "string" ? (u.lng = e) : (u.lngs = e),
            (u.ns = a),
            (u.keyPrefix = o),
            u
          );
        },
      },
      {
        key: "t",
        value: function () {
          var e;
          return (
            this.translator &&
            (e = this.translator).translate.apply(e, arguments)
          );
        },
      },
      {
        key: "exists",
        value: function () {
          var e;
          return (
            this.translator && (e = this.translator).exists.apply(e, arguments)
          );
        },
      },
      {
        key: "setDefaultNamespace",
        value: function (e) {
          this.options.defaultNS = e;
        },
      },
      {
        key: "hasLoadedNamespace",
        value: function (e) {
          var a = this,
            o =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
          if (!this.isInitialized)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18next was not initialized",
                this.languages,
              ),
              !1
            );
          if (!this.languages || !this.languages.length)
            return (
              this.logger.warn(
                "hasLoadedNamespace: i18n.languages were undefined or empty",
                this.languages,
              ),
              !1
            );
          var s = o.lng || this.resolvedLanguage || this.languages[0],
            u = this.options ? this.options.fallbackLng : !1,
            d = this.languages[this.languages.length - 1];
          if (s.toLowerCase() === "cimode") return !0;
          var c = function (g, y) {
            var w =
              a.services.backendConnector.state["".concat(g, "|").concat(y)];
            return w === -1 || w === 2;
          };
          if (o.precheck) {
            var f = o.precheck(this, c);
            if (f !== void 0) return f;
          }
          return !!(
            this.hasResourceBundle(s, e) ||
            !this.services.backendConnector.backend ||
            (this.options.resources && !this.options.partialBundledLanguages) ||
            (c(s, e) && (!u || c(d, e)))
          );
        },
      },
      {
        key: "loadNamespaces",
        value: function (e, a) {
          var o = this,
            s = se();
          return this.options.ns
            ? (typeof e == "string" && (e = [e]),
              e.forEach(function (u) {
                o.options.ns.indexOf(u) < 0 && o.options.ns.push(u);
              }),
              this.loadResources(function (u) {
                s.resolve(), a && a(u);
              }),
              s)
            : (a && a(), Promise.resolve());
        },
      },
      {
        key: "loadLanguages",
        value: function (e, a) {
          var o = se();
          typeof e == "string" && (e = [e]);
          var s = this.options.preload || [],
            u = e.filter(function (d) {
              return s.indexOf(d) < 0;
            });
          return u.length
            ? ((this.options.preload = s.concat(u)),
              this.loadResources(function (d) {
                o.resolve(), a && a(d);
              }),
              o)
            : (a && a(), Promise.resolve());
        },
      },
      {
        key: "dir",
        value: function (e) {
          if (
            (e ||
              (e =
                this.resolvedLanguage ||
                (this.languages && this.languages.length > 0
                  ? this.languages[0]
                  : this.language)),
            !e)
          )
            return "rtl";
          var a = [
              "ar",
              "shu",
              "sqr",
              "ssh",
              "xaa",
              "yhd",
              "yud",
              "aao",
              "abh",
              "abv",
              "acm",
              "acq",
              "acw",
              "acx",
              "acy",
              "adf",
              "ads",
              "aeb",
              "aec",
              "afb",
              "ajp",
              "apc",
              "apd",
              "arb",
              "arq",
              "ars",
              "ary",
              "arz",
              "auz",
              "avl",
              "ayh",
              "ayl",
              "ayn",
              "ayp",
              "bbz",
              "pga",
              "he",
              "iw",
              "ps",
              "pbt",
              "pbu",
              "pst",
              "prp",
              "prd",
              "ug",
              "ur",
              "ydd",
              "yds",
              "yih",
              "ji",
              "yi",
              "hbo",
              "men",
              "xmn",
              "fa",
              "jpr",
              "peo",
              "pes",
              "prs",
              "dv",
              "sam",
              "ckb",
            ],
            o = (this.services && this.services.languageUtils) || new mt(xt());
          return a.indexOf(o.getLanguagePartFromCode(e)) > -1 ||
            e.toLowerCase().indexOf("-arab") > 1
            ? "rtl"
            : "ltr";
        },
      },
      {
        key: "cloneInstance",
        value: function () {
          var e = this,
            a =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : {},
            o =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : be,
            s = U(U(U({}, this.options), a), { isClone: !0 }),
            u = new t(s);
          (a.debug !== void 0 || a.prefix !== void 0) &&
            (u.logger = u.logger.clone(a));
          var d = ["store", "services", "language"];
          return (
            d.forEach(function (c) {
              u[c] = e[c];
            }),
            (u.services = U({}, this.services)),
            (u.services.utils = {
              hasLoadedNamespace: u.hasLoadedNamespace.bind(u),
            }),
            (u.translator = new pt(u.services, u.options)),
            u.translator.on("*", function (c) {
              for (
                var f = arguments.length,
                  h = new Array(f > 1 ? f - 1 : 0),
                  g = 1;
                g < f;
                g++
              )
                h[g - 1] = arguments[g];
              u.emit.apply(u, [c].concat(h));
            }),
            u.init(s, o),
            (u.translator.options = u.options),
            (u.translator.backendConnector.services.utils = {
              hasLoadedNamespace: u.hasLoadedNamespace.bind(u),
            }),
            u
          );
        },
      },
      {
        key: "toJSON",
        value: function () {
          return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage,
          };
        },
      },
    ]),
    t
  );
})(W);
q(Se, "createInstance", function () {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    r = arguments.length > 1 ? arguments[1] : void 0;
  return new Se(i, r);
});
var R = Se.createInstance();
R.createInstance = Se.createInstance;
var Pr = R.createInstance,
  kr = R.dir,
  Lr = R.init,
  Rr = R.loadResources,
  Er = R.reloadResources,
  _r = R.use,
  Cr = R.changeLanguage,
  Nr = R.getFixedT,
  Tr = R.t,
  Ar = R.exists,
  Dr = R.setDefaultNamespace,
  Ir = R.hasLoadedNamespace,
  Fr = R.loadNamespaces,
  Ur = R.loadLanguages;
var Nt = [],
  Dn = Nt.forEach,
  In = Nt.slice;
function Fn(i) {
  return (
    Dn.call(In.call(arguments, 1), function (r) {
      if (r) for (var t in r) i[t] === void 0 && (i[t] = r[t]);
    }),
    i
  );
}
var Rt = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  Un = function (r, t, n) {
    var e = n || {};
    e.path = e.path || "/";
    var a = encodeURIComponent(t),
      o = "".concat(r, "=").concat(a);
    if (e.maxAge > 0) {
      var s = e.maxAge - 0;
      if (Number.isNaN(s)) throw new Error("maxAge should be a Number");
      o += "; Max-Age=".concat(Math.floor(s));
    }
    if (e.domain) {
      if (!Rt.test(e.domain)) throw new TypeError("option domain is invalid");
      o += "; Domain=".concat(e.domain);
    }
    if (e.path) {
      if (!Rt.test(e.path)) throw new TypeError("option path is invalid");
      o += "; Path=".concat(e.path);
    }
    if (e.expires) {
      if (typeof e.expires.toUTCString != "function")
        throw new TypeError("option expires is invalid");
      o += "; Expires=".concat(e.expires.toUTCString());
    }
    if (
      (e.httpOnly && (o += "; HttpOnly"),
      e.secure && (o += "; Secure"),
      e.sameSite)
    ) {
      var u =
        typeof e.sameSite == "string" ? e.sameSite.toLowerCase() : e.sameSite;
      switch (u) {
        case !0:
          o += "; SameSite=Strict";
          break;
        case "lax":
          o += "; SameSite=Lax";
          break;
        case "strict":
          o += "; SameSite=Strict";
          break;
        case "none":
          o += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return o;
  },
  Et = {
    create: function (r, t, n, e) {
      var a =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: "/", sameSite: "strict" };
      n &&
        ((a.expires = new Date()),
        a.expires.setTime(a.expires.getTime() + n * 60 * 1e3)),
        e && (a.domain = e),
        (document.cookie = Un(r, encodeURIComponent(t), a));
    },
    read: function (r) {
      for (
        var t = "".concat(r, "="), n = document.cookie.split(";"), e = 0;
        e < n.length;
        e++
      ) {
        for (var a = n[e]; a.charAt(0) === " "; ) a = a.substring(1, a.length);
        if (a.indexOf(t) === 0) return a.substring(t.length, a.length);
      }
      return null;
    },
    remove: function (r) {
      this.create(r, "", -1);
    },
  },
  Bn = {
    name: "cookie",
    lookup: function (r) {
      var t;
      if (r.lookupCookie && typeof document < "u") {
        var n = Et.read(r.lookupCookie);
        n && (t = n);
      }
      return t;
    },
    cacheUserLanguage: function (r, t) {
      t.lookupCookie &&
        typeof document < "u" &&
        Et.create(
          t.lookupCookie,
          r,
          t.cookieMinutes,
          t.cookieDomain,
          t.cookieOptions,
        );
    },
  },
  Hn = {
    name: "querystring",
    lookup: function (r) {
      var t;
      if (typeof window < "u") {
        var n = window.location.search;
        !window.location.search &&
          window.location.hash &&
          window.location.hash.indexOf("?") > -1 &&
          (n = window.location.hash.substring(
            window.location.hash.indexOf("?"),
          ));
        for (
          var e = n.substring(1), a = e.split("&"), o = 0;
          o < a.length;
          o++
        ) {
          var s = a[o].indexOf("=");
          if (s > 0) {
            var u = a[o].substring(0, s);
            u === r.lookupQuerystring && (t = a[o].substring(s + 1));
          }
        }
      }
      return t;
    },
  },
  ue = null,
  _t = function () {
    if (ue !== null) return ue;
    try {
      ue = window !== "undefined" && window.localStorage !== null;
      var r = "i18next.translate.boo";
      window.localStorage.setItem(r, "foo"), window.localStorage.removeItem(r);
    } catch {
      ue = !1;
    }
    return ue;
  },
  Mn = {
    name: "localStorage",
    lookup: function (r) {
      var t;
      if (r.lookupLocalStorage && _t()) {
        var n = window.localStorage.getItem(r.lookupLocalStorage);
        n && (t = n);
      }
      return t;
    },
    cacheUserLanguage: function (r, t) {
      t.lookupLocalStorage &&
        _t() &&
        window.localStorage.setItem(t.lookupLocalStorage, r);
    },
  },
  fe = null,
  Ct = function () {
    if (fe !== null) return fe;
    try {
      fe = window !== "undefined" && window.sessionStorage !== null;
      var r = "i18next.translate.boo";
      window.sessionStorage.setItem(r, "foo"),
        window.sessionStorage.removeItem(r);
    } catch {
      fe = !1;
    }
    return fe;
  },
  qn = {
    name: "sessionStorage",
    lookup: function (r) {
      var t;
      if (r.lookupSessionStorage && Ct()) {
        var n = window.sessionStorage.getItem(r.lookupSessionStorage);
        n && (t = n);
      }
      return t;
    },
    cacheUserLanguage: function (r, t) {
      t.lookupSessionStorage &&
        Ct() &&
        window.sessionStorage.setItem(t.lookupSessionStorage, r);
    },
  },
  Vn = {
    name: "navigator",
    lookup: function (r) {
      var t = [];
      if (typeof navigator < "u") {
        if (navigator.languages)
          for (var n = 0; n < navigator.languages.length; n++)
            t.push(navigator.languages[n]);
        navigator.userLanguage && t.push(navigator.userLanguage),
          navigator.language && t.push(navigator.language);
      }
      return t.length > 0 ? t : void 0;
    },
  },
  Kn = {
    name: "htmlTag",
    lookup: function (r) {
      var t,
        n =
          r.htmlTag ||
          (typeof document < "u" ? document.documentElement : null);
      return (
        n &&
          typeof n.getAttribute == "function" &&
          (t = n.getAttribute("lang")),
        t
      );
    },
  },
  zn = {
    name: "path",
    lookup: function (r) {
      var t;
      if (typeof window < "u") {
        var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
        if (n instanceof Array)
          if (typeof r.lookupFromPathIndex == "number") {
            if (typeof n[r.lookupFromPathIndex] != "string") return;
            t = n[r.lookupFromPathIndex].replace("/", "");
          } else t = n[0].replace("/", "");
      }
      return t;
    },
  },
  Wn = {
    name: "subdomain",
    lookup: function (r) {
      var t =
          typeof r.lookupFromSubdomainIndex == "number"
            ? r.lookupFromSubdomainIndex + 1
            : 1,
        n =
          typeof window < "u" &&
          window.location &&
          window.location.hostname &&
          window.location.hostname.match(
            /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i,
          );
      if (n) return n[t];
    },
  };
function Jn() {
  return {
    order: [
      "querystring",
      "cookie",
      "localStorage",
      "sessionStorage",
      "navigator",
      "htmlTag",
    ],
    lookupQuerystring: "lng",
    lookupCookie: "i18next",
    lookupLocalStorage: "i18nextLng",
    lookupSessionStorage: "i18nextLng",
    caches: ["localStorage"],
    excludeCacheFor: ["cimode"],
    convertDetectedLanguage: function (r) {
      return r;
    },
  };
}
var Be = (function () {
  function i(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    N(this, i),
      (this.type = "languageDetector"),
      (this.detectors = {}),
      this.init(r, t);
  }
  return (
    T(i, [
      {
        key: "init",
        value: function (t) {
          var n =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            e =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {};
          (this.services = t || { languageUtils: {} }),
            (this.options = Fn(n, this.options || {}, Jn())),
            typeof this.options.convertDetectedLanguage == "string" &&
              this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
              (this.options.convertDetectedLanguage = function (a) {
                return a.replace("-", "_");
              }),
            this.options.lookupFromUrlIndex &&
              (this.options.lookupFromPathIndex =
                this.options.lookupFromUrlIndex),
            (this.i18nOptions = e),
            this.addDetector(Bn),
            this.addDetector(Hn),
            this.addDetector(Mn),
            this.addDetector(qn),
            this.addDetector(Vn),
            this.addDetector(Kn),
            this.addDetector(zn),
            this.addDetector(Wn);
        },
      },
      {
        key: "addDetector",
        value: function (t) {
          this.detectors[t.name] = t;
        },
      },
      {
        key: "detect",
        value: function (t) {
          var n = this;
          t || (t = this.options.order);
          var e = [];
          return (
            t.forEach(function (a) {
              if (n.detectors[a]) {
                var o = n.detectors[a].lookup(n.options);
                o && typeof o == "string" && (o = [o]), o && (e = e.concat(o));
              }
            }),
            (e = e.map(function (a) {
              return n.options.convertDetectedLanguage(a);
            })),
            this.services.languageUtils.getBestMatchFromCodes
              ? e
              : e.length > 0
                ? e[0]
                : null
          );
        },
      },
      {
        key: "cacheUserLanguage",
        value: function (t, n) {
          var e = this;
          n || (n = this.options.caches),
            n &&
              ((this.options.excludeCacheFor &&
                this.options.excludeCacheFor.indexOf(t) > -1) ||
                n.forEach(function (a) {
                  e.detectors[a] &&
                    e.detectors[a].cacheUserLanguage(t, e.options);
                }));
        },
      },
    ]),
    i
  );
})();
Be.type = "languageDetector";
function He(i) {
  return (
    (He =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              typeof Symbol == "function" &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? "symbol"
              : typeof r;
          }),
    He(i)
  );
}
var Tt = [],
  Xn = Tt.forEach,
  Yn = Tt.slice;
function le(i) {
  return (
    Xn.call(Yn.call(arguments, 1), function (r) {
      if (r) for (var t in r) i[t] === void 0 && (i[t] = r[t]);
    }),
    i
  );
}
function Me() {
  return (
    typeof XMLHttpRequest == "function" ||
    (typeof XMLHttpRequest > "u" ? "undefined" : He(XMLHttpRequest)) ===
      "object"
  );
}
function Gn(i) {
  return !!i && typeof i.then == "function";
}
function At(i) {
  return Gn(i) ? i : Promise.resolve(i);
}
var Re = oe(Ut(), 1);
function Le(i) {
  return (
    (Le =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              typeof Symbol == "function" &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? "symbol"
              : typeof r;
          }),
    Le(i)
  );
}
var K;
typeof fetch == "function" &&
  (typeof globalThis < "u" && globalThis.fetch
    ? (K = globalThis.fetch)
    : typeof window < "u" && window.fetch
      ? (K = window.fetch)
      : (K = fetch));
var de;
Me() &&
  (typeof globalThis < "u" && globalThis.XMLHttpRequest
    ? (de = globalThis.XMLHttpRequest)
    : typeof window < "u" &&
      window.XMLHttpRequest &&
      (de = window.XMLHttpRequest));
var Ee;
typeof ActiveXObject == "function" &&
  (typeof globalThis < "u" && globalThis.ActiveXObject
    ? (Ee = globalThis.ActiveXObject)
    : typeof window < "u" &&
      window.ActiveXObject &&
      (Ee = window.ActiveXObject));
!K && Re && !de && !Ee && (K = Re.default || Re);
typeof K != "function" && (K = void 0);
var Ve = function (r, t) {
    if (t && Le(t) === "object") {
      var n = "";
      for (var e in t)
        n += "&" + encodeURIComponent(e) + "=" + encodeURIComponent(t[e]);
      if (!n) return r;
      r = r + (r.indexOf("?") !== -1 ? "&" : "?") + n.slice(1);
    }
    return r;
  },
  Bt = function (r, t, n) {
    var e = function (o) {
      if (!o.ok) return n(o.statusText || "Error", { status: o.status });
      o.text()
        .then(function (s) {
          n(null, { status: o.status, data: s });
        })
        .catch(n);
    };
    typeof fetch == "function"
      ? fetch(r, t).then(e).catch(n)
      : K(r, t).then(e).catch(n);
  },
  Ht = !1,
  Qn = function (r, t, n, e) {
    r.queryStringParams && (t = Ve(t, r.queryStringParams));
    var a = le(
      {},
      typeof r.customHeaders == "function"
        ? r.customHeaders()
        : r.customHeaders,
    );
    typeof window > "u" &&
      typeof globalThis < "u" &&
      typeof globalThis.process < "u" &&
      globalThis.process.versions &&
      globalThis.process.versions.node &&
      (a["User-Agent"] = "i18next-http-backend (node/"
        .concat(globalThis.process.version, "; ")
        .concat(globalThis.process.platform, " ")
        .concat(globalThis.process.arch, ")")),
      n && (a["Content-Type"] = "application/json");
    var o =
        typeof r.requestOptions == "function"
          ? r.requestOptions(n)
          : r.requestOptions,
      s = le(
        {
          method: n ? "POST" : "GET",
          body: n ? r.stringify(n) : void 0,
          headers: a,
        },
        Ht ? {} : o,
      );
    try {
      Bt(t, s, e);
    } catch (u) {
      if (
        !o ||
        Object.keys(o).length === 0 ||
        !u.message ||
        u.message.indexOf("not implemented") < 0
      )
        return e(u);
      try {
        Object.keys(o).forEach(function (d) {
          delete s[d];
        }),
          Bt(t, s, e),
          (Ht = !0);
      } catch (d) {
        e(d);
      }
    }
  },
  Zn = function (r, t, n, e) {
    n && Le(n) === "object" && (n = Ve("", n).slice(1)),
      r.queryStringParams && (t = Ve(t, r.queryStringParams));
    try {
      var a;
      de ? (a = new de()) : (a = new Ee("MSXML2.XMLHTTP.3.0")),
        a.open(n ? "POST" : "GET", t, 1),
        r.crossDomain ||
          a.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
        (a.withCredentials = !!r.withCredentials),
        n &&
          a.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded",
          ),
        a.overrideMimeType && a.overrideMimeType("application/json");
      var o = r.customHeaders;
      if (((o = typeof o == "function" ? o() : o), o))
        for (var s in o) a.setRequestHeader(s, o[s]);
      (a.onreadystatechange = function () {
        a.readyState > 3 &&
          e(a.status >= 400 ? a.statusText : null, {
            status: a.status,
            data: a.responseText,
          });
      }),
        a.send(n);
    } catch (u) {
      console && console.log(u);
    }
  },
  $n = function (r, t, n, e) {
    if (
      (typeof n == "function" && ((e = n), (n = void 0)),
      (e = e || function () {}),
      K && t.indexOf("file:") !== 0)
    )
      return Qn(r, t, n, e);
    if (Me() || typeof ActiveXObject == "function") return Zn(r, t, n, e);
    e(new Error("No fetch and no xhr implementation found!"));
  },
  Mt = $n;
function he(i) {
  return (
    (he =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              typeof Symbol == "function" &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? "symbol"
              : typeof r;
          }),
    he(i)
  );
}
function er(i, r) {
  if (!(i instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function qt(i, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(i, Vt(n.key), n);
  }
}
function tr(i, r, t) {
  return (
    r && qt(i.prototype, r),
    t && qt(i, t),
    Object.defineProperty(i, "prototype", { writable: !1 }),
    i
  );
}
function nr(i, r, t) {
  return (
    (r = Vt(r)),
    r in i
      ? Object.defineProperty(i, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (i[r] = t),
    i
  );
}
function Vt(i) {
  var r = rr(i, "string");
  return he(r) === "symbol" ? r : String(r);
}
function rr(i, r) {
  if (he(i) !== "object" || i === null) return i;
  var t = i[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(i, r || "default");
    if (he(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(i);
}
var ar = function () {
    return {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
      addPath: "/locales/add/{{lng}}/{{ns}}",
      parse: function (t) {
        return JSON.parse(t);
      },
      stringify: JSON.stringify,
      parsePayload: function (t, n, e) {
        return nr({}, n, e || "");
      },
      parseLoadPayload: function (t, n) {},
      request: Mt,
      reloadInterval: typeof window < "u" ? !1 : 60 * 60 * 1e3,
      customHeaders: {},
      queryStringParams: {},
      crossDomain: !1,
      withCredentials: !1,
      overrideMimeType: !1,
      requestOptions: {
        mode: "cors",
        credentials: "same-origin",
        cache: "default",
      },
    };
  },
  Kt = (function () {
    function i(r) {
      var t =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      er(this, i),
        (this.services = r),
        (this.options = t),
        (this.allOptions = n),
        (this.type = "backend"),
        this.init(r, t, n);
    }
    return (
      tr(i, [
        {
          key: "init",
          value: function (t) {
            var n = this,
              e =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {},
              a =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : {};
            (this.services = t),
              (this.options = le(e, this.options || {}, ar())),
              (this.allOptions = a),
              this.services &&
                this.options.reloadInterval &&
                setInterval(function () {
                  return n.reload();
                }, this.options.reloadInterval);
          },
        },
        {
          key: "readMulti",
          value: function (t, n, e) {
            this._readAny(t, t, n, n, e);
          },
        },
        {
          key: "read",
          value: function (t, n, e) {
            this._readAny([t], t, [n], n, e);
          },
        },
        {
          key: "_readAny",
          value: function (t, n, e, a, o) {
            var s = this,
              u = this.options.loadPath;
            typeof this.options.loadPath == "function" &&
              (u = this.options.loadPath(t, e)),
              (u = At(u)),
              u.then(function (d) {
                if (!d) return o(null, {});
                var c = s.services.interpolator.interpolate(d, {
                  lng: t.join("+"),
                  ns: e.join("+"),
                });
                s.loadUrl(c, o, n, a);
              });
          },
        },
        {
          key: "loadUrl",
          value: function (t, n, e, a) {
            var o = this,
              s = typeof e == "string" ? [e] : e,
              u = typeof a == "string" ? [a] : a,
              d = this.options.parseLoadPayload(s, u);
            this.options.request(this.options, t, d, function (c, f) {
              if (f && ((f.status >= 500 && f.status < 600) || !f.status))
                return n(
                  "failed loading " + t + "; status code: " + f.status,
                  !0,
                );
              if (f && f.status >= 400 && f.status < 500)
                return n(
                  "failed loading " + t + "; status code: " + f.status,
                  !1,
                );
              if (
                !f &&
                c &&
                c.message &&
                c.message.indexOf("Failed to fetch") > -1
              )
                return n("failed loading " + t + ": " + c.message, !0);
              if (c) return n(c, !1);
              var h, g;
              try {
                typeof f.data == "string"
                  ? (h = o.options.parse(f.data, e, a))
                  : (h = f.data);
              } catch {
                g = "failed parsing " + t + " to json";
              }
              if (g) return n(g, !1);
              n(null, h);
            });
          },
        },
        {
          key: "create",
          value: function (t, n, e, a, o) {
            var s = this;
            if (this.options.addPath) {
              typeof t == "string" && (t = [t]);
              var u = this.options.parsePayload(n, e, a),
                d = 0,
                c = [],
                f = [];
              t.forEach(function (h) {
                var g = s.options.addPath;
                typeof s.options.addPath == "function" &&
                  (g = s.options.addPath(h, n));
                var y = s.services.interpolator.interpolate(g, {
                  lng: h,
                  ns: n,
                });
                s.options.request(s.options, y, u, function (w, b) {
                  (d += 1),
                    c.push(w),
                    f.push(b),
                    d === t.length && typeof o == "function" && o(c, f);
                });
              });
            }
          },
        },
        {
          key: "reload",
          value: function () {
            var t = this,
              n = this.services,
              e = n.backendConnector,
              a = n.languageUtils,
              o = n.logger,
              s = e.language;
            if (!(s && s.toLowerCase() === "cimode")) {
              var u = [],
                d = function (f) {
                  var h = a.toResolveHierarchy(f);
                  h.forEach(function (g) {
                    u.indexOf(g) < 0 && u.push(g);
                  });
                };
              d(s),
                this.allOptions.preload &&
                  this.allOptions.preload.forEach(function (c) {
                    return d(c);
                  }),
                u.forEach(function (c) {
                  t.allOptions.ns.forEach(function (f) {
                    e.read(c, f, "read", null, null, function (h, g) {
                      h &&
                        o.warn(
                          "loading namespace "
                            .concat(f, " for language ")
                            .concat(c, " failed"),
                          h,
                        ),
                        !h &&
                          g &&
                          o.log(
                            "loaded namespace "
                              .concat(f, " for language ")
                              .concat(c),
                            g,
                          ),
                        e.loaded("".concat(c, "|").concat(f), h, g);
                    });
                  });
                });
            }
          },
        },
      ]),
      i
    );
  })();
Kt.type = "backend";
var zt = Kt;
var Wt = {
  supportedLngs: [
    "en",
    "es",
    "de",
    "fi",
    "fr",
    "he",
    "it",
    "ja",
    "ko",
    "nl",
    "no",
    "pl",
    "pt",
    "ru",
    "sv",
    "tg",
    "th",
    "zh",
    "zhHant",
  ],
  fallbackLng: "en",
  defaultNS: "common",
};
function Jt() {
  return [
    ...new Set(
      Object.values(window.__remixRouteModules)
        .filter((r) => {
          var t;
          return (
            ((t = r.handle) === null || t === void 0 ? void 0 : t.i18n) !==
            void 0
          );
        })
        .flatMap((r) => r.handle.i18n),
    ),
  ];
}
var ir = () => {
    let i = !1;
    return async () =>
      i
        ? R
        : (await (async function () {
            await R.use(et)
              .use(Be)
              .use(zt)
              .init({
                ...Wt,
                ns: Jt(),
                backend: {
                  loadPath: (r, t) => {
                    let n = Xt(),
                      e = r[0],
                      a = t[0],
                      o = `locales/${e}/${a}.json`,
                      s = `${n[o]}`;
                    return `${window.ENV.ASSET_URL}/locales/{{lng}}/{{ns}}.${s}.json`;
                  },
                },
                detection: { order: ["htmlTag"], caches: [] },
              }),
              (i = !0);
          })(),
          R);
  },
  sr = ir(),
  Yt = sr;
var { hydrationErrors: Gt } = at,
  Qt = "React recovered from an error during hydration.",
  ur = (i) => {
    if (!Gt.shouldFilter) return !1;
    let r = "";
    return (
      i instanceof Error ? (r = i.message) : typeof i == "string" && (r = i),
      r === "" ? !1 : Gt.ignoreList.some((t) => t.test(r))
    );
  };
function Zt(i, r) {
  console.warn(Qt, i), !ur(i) && ve.warn(Qt, i, r);
}
var _e = oe(nt());
async function $t() {
  let i = rt(window.location.pathname),
    r = await Yt(),
    t = (i && document.getElementById("job-board-renderer")) || document;
  (window.rollbar = ve),
    (0, Ce.startTransition)(() => {
      (0, en.hydrateRoot)(
        t,
        (0, _e.jsx)(tt, {
          i18n: r,
          children: (0, _e.jsx)(Ce.StrictMode, {
            children: (0, _e.jsx)(Ye, {}),
          }),
        }),
        { onRecoverableError: Zt },
      );
    });
}
window.requestIdleCallback
  ? window.requestIdleCallback($t)
  : window.setTimeout($t, 1);
ot.getInstance().handleResize();
//# sourceMappingURL=https://job-boards.cdn.greenhouse.io/build/entry.client-OQRAQOAI.js.map
