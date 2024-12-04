import {
  c as z,
  d as V,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-LNKWYQRG.js";
var M = z((D, U) => {
  (function (k, L) {
    typeof D == "object" && typeof U == "object"
      ? (U.exports = L())
      : typeof define == "function" && define.amd
        ? define([], L)
        : typeof D == "object"
          ? (D.rollbar = L())
          : (k.rollbar = L());
  })(D, function () {
    return (function (k) {
      var L = {};
      function _(l) {
        if (L[l]) return L[l].exports;
        var c = (L[l] = { i: l, l: !1, exports: {} });
        return k[l].call(c.exports, c, c.exports, _), (c.l = !0), c.exports;
      }
      return (
        (_.m = k),
        (_.c = L),
        (_.d = function (l, c, a) {
          _.o(l, c) || Object.defineProperty(l, c, { enumerable: !0, get: a });
        }),
        (_.r = function (l) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(l, "__esModule", { value: !0 });
        }),
        (_.t = function (l, c) {
          if (
            (1 & c && (l = _(l)),
            8 & c || (4 & c && typeof l == "object" && l && l.__esModule))
          )
            return l;
          var a = Object.create(null);
          if (
            (_.r(a),
            Object.defineProperty(a, "default", { enumerable: !0, value: l }),
            2 & c && typeof l != "string")
          )
            for (var t in l)
              _.d(
                a,
                t,
                function (e) {
                  return l[e];
                }.bind(null, t),
              );
          return a;
        }),
        (_.n = function (l) {
          var c =
            l && l.__esModule
              ? function () {
                  return l.default;
                }
              : function () {
                  return l;
                };
          return _.d(c, "a", c), c;
        }),
        (_.o = function (l, c) {
          return Object.prototype.hasOwnProperty.call(l, c);
        }),
        (_.p = ""),
        _((_.s = 6))
      );
    })([
      function (k, L, _) {
        "use strict";
        var l = _(12),
          c = {};
        function a(d, g) {
          return g === t(d);
        }
        function t(d) {
          var g = typeof d;
          return g !== "object"
            ? g
            : d
              ? d instanceof Error
                ? "error"
                : {}.toString
                    .call(d)
                    .match(/\s([a-zA-Z]+)/)[1]
                    .toLowerCase()
              : "null";
        }
        function e(d) {
          return a(d, "function");
        }
        function s(d) {
          var g = Function.prototype.toString
              .call(Object.prototype.hasOwnProperty)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?",
              ),
            x = RegExp("^" + g + "$");
          return u(d) && x.test(d);
        }
        function u(d) {
          var g = typeof d;
          return d != null && (g == "object" || g == "function");
        }
        function n() {
          var d = y();
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (g) {
              var x = (d + 16 * Math.random()) % 16 | 0;
              return (
                (d = Math.floor(d / 16)),
                (g === "x" ? x : (7 & x) | 8).toString(16)
              );
            },
          );
        }
        var o = {
          strictMode: !1,
          key: [
            "source",
            "protocol",
            "authority",
            "userInfo",
            "user",
            "password",
            "host",
            "port",
            "relative",
            "path",
            "directory",
            "file",
            "query",
            "anchor",
          ],
          q: { name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g },
          parser: {
            strict:
              /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
            loose:
              /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
          },
        };
        function r(d, g) {
          var x, w;
          try {
            x = c.stringify(d);
          } catch (h) {
            if (g && e(g))
              try {
                x = g(d);
              } catch (b) {
                w = b;
              }
            else w = h;
          }
          return { error: w, value: x };
        }
        function i(d, g) {
          return function (x, w) {
            try {
              g(x, w);
            } catch (h) {
              d.error(h);
            }
          };
        }
        function f(d) {
          return (function g(x, w) {
            var h,
              b,
              E,
              I = {};
            try {
              for (b in x)
                (h = x[b]) && (a(h, "object") || a(h, "array"))
                  ? w.includes(h)
                    ? (I[b] = "Removed circular reference: " + t(h))
                    : ((E = w.slice()).push(h), (I[b] = g(h, E)))
                  : (I[b] = h);
            } catch (O) {
              I = "Failed cloning custom data: " + O.message;
            }
            return I;
          })(d, [d]);
        }
        var p = ["log", "network", "dom", "navigation", "error", "manual"],
          m = ["critical", "error", "warning", "info", "debug"];
        function v(d, g) {
          for (var x = 0; x < d.length; ++x) if (d[x] === g) return !0;
          return !1;
        }
        function y() {
          return Date.now ? +Date.now() : +new Date();
        }
        k.exports = {
          addParamsAndAccessTokenToPath: function (d, g, x) {
            (x = x || {}).access_token = d;
            var w,
              h = [];
            for (w in x)
              Object.prototype.hasOwnProperty.call(x, w) &&
                h.push([w, x[w]].join("="));
            var b = "?" + h.sort().join("&");
            (g = g || {}).path = g.path || "";
            var E,
              I = g.path.indexOf("?"),
              O = g.path.indexOf("#");
            I !== -1 && (O === -1 || O > I)
              ? ((E = g.path),
                (g.path = E.substring(0, I) + b + "&" + E.substring(I + 1)))
              : O !== -1
                ? ((E = g.path),
                  (g.path = E.substring(0, O) + b + E.substring(O)))
                : (g.path = g.path + b);
          },
          createItem: function (d, g, x, w, h) {
            for (
              var b, E, I, O, T, S, C = [], R = [], P = 0, N = d.length;
              P < N;
              ++P
            ) {
              var F = t((S = d[P]));
              switch ((R.push(F), F)) {
                case "undefined":
                  break;
                case "string":
                  b ? C.push(S) : (b = S);
                  break;
                case "function":
                  O = i(g, S);
                  break;
                case "date":
                  C.push(S);
                  break;
                case "error":
                case "domexception":
                case "exception":
                  E ? C.push(S) : (E = S);
                  break;
                case "object":
                case "array":
                  if (
                    S instanceof Error ||
                    (typeof DOMException < "u" && S instanceof DOMException)
                  ) {
                    E ? C.push(S) : (E = S);
                    break;
                  }
                  if (w && F === "object" && !T) {
                    for (var q = 0, W = w.length; q < W; ++q)
                      if (S[w[q]] !== void 0) {
                        T = S;
                        break;
                      }
                    if (T) break;
                  }
                  I ? C.push(S) : (I = S);
                  break;
                default:
                  if (
                    S instanceof Error ||
                    (typeof DOMException < "u" && S instanceof DOMException)
                  ) {
                    E ? C.push(S) : (E = S);
                    break;
                  }
                  C.push(S);
              }
            }
            I && (I = f(I)),
              C.length > 0 && (I || (I = f({})), (I.extraArgs = f(C)));
            var A = {
              message: b,
              err: E,
              custom: I,
              timestamp: y(),
              callback: O,
              notifier: x,
              diagnostic: {},
              uuid: n(),
            };
            return (
              (function (H, j) {
                j &&
                  j.level !== void 0 &&
                  ((H.level = j.level), delete j.level),
                  j &&
                    j.skipFrames !== void 0 &&
                    ((H.skipFrames = j.skipFrames), delete j.skipFrames);
              })(A, I),
              w && T && (A.request = T),
              h && (A.lambdaContext = h),
              (A._originalArgs = d),
              (A.diagnostic.original_arg_types = R),
              A
            );
          },
          addErrorContext: function (d, g) {
            var x = d.data.custom || {},
              w = !1;
            try {
              for (var h = 0; h < g.length; ++h)
                g[h].hasOwnProperty("rollbarContext") &&
                  ((x = l(x, f(g[h].rollbarContext))), (w = !0));
              w && (d.data.custom = x);
            } catch (b) {
              d.diagnostic.error_context = "Failed: " + b.message;
            }
          },
          createTelemetryEvent: function (d) {
            for (var g, x, w, h, b = 0, E = d.length; b < E; ++b)
              switch (t((h = d[b]))) {
                case "string":
                  !g && v(p, h) ? (g = h) : !w && v(m, h) && (w = h);
                  break;
                case "object":
                  x = h;
              }
            return { type: g || "manual", metadata: x || {}, level: w };
          },
          filterIp: function (d, g) {
            if (d && d.user_ip && g !== !0) {
              var x = d.user_ip;
              if (g)
                try {
                  var w;
                  if (x.indexOf(".") !== -1)
                    (w = x.split(".")).pop(), w.push("0"), (x = w.join("."));
                  else if (x.indexOf(":") !== -1) {
                    if ((w = x.split(":")).length > 2) {
                      var h = w.slice(0, 3),
                        b = h[2].indexOf("/");
                      b !== -1 && (h[2] = h[2].substring(0, b)),
                        (x = h.concat("0000:0000:0000:0000:0000").join(":"));
                    }
                  } else x = null;
                } catch {
                  x = null;
                }
              else x = null;
              d.user_ip = x;
            }
          },
          formatArgsAsString: function (d) {
            var g,
              x,
              w,
              h = [];
            for (g = 0, x = d.length; g < x; ++g) {
              switch (t((w = d[g]))) {
                case "object":
                  (w = (w = r(w)).error || w.value).length > 500 &&
                    (w = w.substr(0, 497) + "...");
                  break;
                case "null":
                  w = "null";
                  break;
                case "undefined":
                  w = "undefined";
                  break;
                case "symbol":
                  w = w.toString();
              }
              h.push(w);
            }
            return h.join(" ");
          },
          formatUrl: function (d, g) {
            if (
              (!(g = g || d.protocol) &&
                d.port &&
                (d.port === 80
                  ? (g = "http:")
                  : d.port === 443 && (g = "https:")),
              (g = g || "https:"),
              !d.hostname)
            )
              return null;
            var x = g + "//" + d.hostname;
            return d.port && (x = x + ":" + d.port), d.path && (x += d.path), x;
          },
          get: function (d, g) {
            if (d) {
              var x = g.split("."),
                w = d;
              try {
                for (var h = 0, b = x.length; h < b; ++h) w = w[x[h]];
              } catch {
                w = void 0;
              }
              return w;
            }
          },
          handleOptions: function (d, g, x, w) {
            var h = l(d, g, x);
            return (
              (h = (function (b, E) {
                return (
                  b.hostWhiteList &&
                    !b.hostSafeList &&
                    ((b.hostSafeList = b.hostWhiteList),
                    (b.hostWhiteList = void 0),
                    E &&
                      E.log("hostWhiteList is deprecated. Use hostSafeList.")),
                  b.hostBlackList &&
                    !b.hostBlockList &&
                    ((b.hostBlockList = b.hostBlackList),
                    (b.hostBlackList = void 0),
                    E &&
                      E.log("hostBlackList is deprecated. Use hostBlockList.")),
                  b
                );
              })(h, w)),
              !g ||
                g.overwriteScrubFields ||
                (g.scrubFields &&
                  (h.scrubFields = (d.scrubFields || []).concat(
                    g.scrubFields,
                  ))),
              h
            );
          },
          isError: function (d) {
            return a(d, "error") || a(d, "exception");
          },
          isFiniteNumber: function (d) {
            return Number.isFinite(d);
          },
          isFunction: e,
          isIterable: function (d) {
            var g = t(d);
            return g === "object" || g === "array";
          },
          isNativeFunction: s,
          isObject: u,
          isString: function (d) {
            return typeof d == "string" || d instanceof String;
          },
          isType: a,
          isPromise: function (d) {
            return u(d) && a(d.then, "function");
          },
          jsonParse: function (d) {
            var g, x;
            try {
              g = c.parse(d);
            } catch (w) {
              x = w;
            }
            return { error: x, value: g };
          },
          LEVELS: { debug: 0, info: 1, warning: 2, error: 3, critical: 4 },
          makeUnhandledStackInfo: function (d, g, x, w, h, b, E, I) {
            var O = { url: g || "", line: x, column: w };
            (O.func = I.guessFunctionName(O.url, O.line)),
              (O.context = I.gatherContext(O.url, O.line));
            var T =
                typeof document < "u" &&
                document &&
                document.location &&
                document.location.href,
              S =
                typeof window < "u" &&
                window &&
                window.navigator &&
                window.navigator.userAgent;
            return {
              mode: b,
              message: h ? String(h) : d || E,
              url: T,
              stack: [O],
              useragent: S,
            };
          },
          merge: l,
          now: y,
          redact: function () {
            return "********";
          },
          RollbarJSON: c,
          sanitizeUrl: function (d) {
            var g = (function (x) {
              if (a(x, "string")) {
                for (
                  var w = o,
                    h = w.parser[w.strictMode ? "strict" : "loose"].exec(x),
                    b = {},
                    E = 0,
                    I = w.key.length;
                  E < I;
                  ++E
                )
                  b[w.key[E]] = h[E] || "";
                return (
                  (b[w.q.name] = {}),
                  b[w.key[12]].replace(w.q.parser, function (O, T, S) {
                    T && (b[w.q.name][T] = S);
                  }),
                  b
                );
              }
            })(d);
            return g
              ? (g.anchor === "" && (g.source = g.source.replace("#", "")),
                (d = g.source.replace("?" + g.query, "")))
              : "(unknown)";
          },
          set: function (d, g, x) {
            if (d) {
              var w = g.split("."),
                h = w.length;
              if (!(h < 1))
                if (h !== 1)
                  try {
                    for (var b = d[w[0]] || {}, E = b, I = 1; I < h - 1; ++I)
                      (b[w[I]] = b[w[I]] || {}), (b = b[w[I]]);
                    (b[w[h - 1]] = x), (d[w[0]] = E);
                  } catch {
                    return;
                  }
                else d[w[0]] = x;
            }
          },
          setupJSON: function (d) {
            (e(c.stringify) && e(c.parse)) ||
              (a(JSON, "undefined") ||
                (d
                  ? (s(JSON.stringify) && (c.stringify = JSON.stringify),
                    s(JSON.parse) && (c.parse = JSON.parse))
                  : (e(JSON.stringify) && (c.stringify = JSON.stringify),
                    e(JSON.parse) && (c.parse = JSON.parse))),
              (e(c.stringify) && e(c.parse)) || (d && d(c)));
          },
          stringify: r,
          maxByteSize: function (d) {
            for (var g = 0, x = d.length, w = 0; w < x; w++) {
              var h = d.charCodeAt(w);
              h < 128 ? (g += 1) : h < 2048 ? (g += 2) : h < 65536 && (g += 3);
            }
            return g;
          },
          typeName: t,
          uuid4: n,
        };
      },
      function (k, L, _) {
        "use strict";
        _(17);
        var l = _(18),
          c = _(0);
        k.exports = {
          error: function () {
            var a = Array.prototype.slice.call(arguments, 0);
            a.unshift("Rollbar:"),
              l.ieVersion() <= 8
                ? console.error(c.formatArgsAsString(a))
                : console.error.apply(console, a);
          },
          info: function () {
            var a = Array.prototype.slice.call(arguments, 0);
            a.unshift("Rollbar:"),
              l.ieVersion() <= 8
                ? console.info(c.formatArgsAsString(a))
                : console.info.apply(console, a);
          },
          log: function () {
            var a = Array.prototype.slice.call(arguments, 0);
            a.unshift("Rollbar:"),
              l.ieVersion() <= 8
                ? console.log(c.formatArgsAsString(a))
                : console.log.apply(console, a);
          },
        };
      },
      function (k, L, _) {
        "use strict";
        k.exports = {
          parse: function (l) {
            var c,
              a,
              t = {
                protocol: null,
                auth: null,
                host: null,
                path: null,
                hash: null,
                href: l,
                hostname: null,
                port: null,
                pathname: null,
                search: null,
                query: null,
              };
            if (
              ((c = l.indexOf("//")) !== -1
                ? ((t.protocol = l.substring(0, c)), (a = c + 2))
                : (a = 0),
              (c = l.indexOf("@", a)) !== -1 &&
                ((t.auth = l.substring(a, c)), (a = c + 1)),
              (c = l.indexOf("/", a)) === -1)
            ) {
              if ((c = l.indexOf("?", a)) === -1)
                return (
                  (c = l.indexOf("#", a)) === -1
                    ? (t.host = l.substring(a))
                    : ((t.host = l.substring(a, c)), (t.hash = l.substring(c))),
                  (t.hostname = t.host.split(":")[0]),
                  (t.port = t.host.split(":")[1]),
                  t.port && (t.port = parseInt(t.port, 10)),
                  t
                );
              (t.host = l.substring(a, c)),
                (t.hostname = t.host.split(":")[0]),
                (t.port = t.host.split(":")[1]),
                t.port && (t.port = parseInt(t.port, 10)),
                (a = c);
            } else
              (t.host = l.substring(a, c)),
                (t.hostname = t.host.split(":")[0]),
                (t.port = t.host.split(":")[1]),
                t.port && (t.port = parseInt(t.port, 10)),
                (a = c);
            if (
              ((c = l.indexOf("#", a)) === -1
                ? (t.path = l.substring(a))
                : ((t.path = l.substring(a, c)), (t.hash = l.substring(c))),
              t.path)
            ) {
              var e = t.path.split("?");
              (t.pathname = e[0]),
                (t.query = e[1]),
                (t.search = t.query ? "?" + t.query : null);
            }
            return t;
          },
        };
      },
      function (k, L, _) {
        "use strict";
        var l = _(24),
          c = new RegExp(
            "^(([a-zA-Z0-9-_$ ]*): *)?(Uncaught )?([a-zA-Z0-9-_$ ]*): ",
          );
        function a() {
          return null;
        }
        function t(u) {
          var n = {};
          return (
            (n._stackFrame = u),
            (n.url = u.fileName),
            (n.line = u.lineNumber),
            (n.func = u.functionName),
            (n.column = u.columnNumber),
            (n.args = u.args),
            (n.context = null),
            n
          );
        }
        function e(u, n) {
          return {
            stack: (function () {
              var o = [];
              n = n || 0;
              try {
                o = l.parse(u);
              } catch {
                o = [];
              }
              for (var r = [], i = n; i < o.length; i++) r.push(new t(o[i]));
              return r;
            })(),
            message: u.message,
            name: s(u),
            rawStack: u.stack,
            rawException: u,
          };
        }
        function s(u) {
          var n = u.name && u.name.length && u.name,
            o =
              u.constructor.name &&
              u.constructor.name.length &&
              u.constructor.name;
          return n && o ? (n === "Error" ? o : n) : n || o;
        }
        k.exports = {
          guessFunctionName: function () {
            return "?";
          },
          guessErrorClass: function (u) {
            if (!u || !u.match)
              return [
                "Unknown error. There was no error message to display.",
                "",
              ];
            var n = u.match(c),
              o = "(unknown)";
            return (
              n &&
                ((o = n[n.length - 1]),
                (u = (u = u.replace(
                  (n[n.length - 2] || "") + o + ":",
                  "",
                )).replace(/(^[\s]+|[\s]+$)/g, ""))),
              [o, u]
            );
          },
          gatherContext: a,
          parse: function (u, n) {
            var o = u;
            if (o.nested || o.cause) {
              for (var r = []; o; )
                r.push(new e(o, n)), (o = o.nested || o.cause), (n = 0);
              return (r[0].traceChain = r), r[0];
            }
            return new e(o, n);
          },
          Stack: e,
          Frame: t,
        };
      },
      function (k, L, _) {
        "use strict";
        var l = _(0),
          c = _(5);
        function a(t, e) {
          var s = e.split("."),
            u = s.length - 1;
          try {
            for (var n = 0; n <= u; ++n)
              n < u ? (t = t[s[n]]) : (t[s[n]] = l.redact());
          } catch {}
        }
        k.exports = function (t, e, s) {
          if (((e = e || []), s)) for (var u = 0; u < s.length; ++u) a(t, s[u]);
          var n = (function (i) {
              for (var f, p = [], m = 0; m < i.length; ++m)
                (f = "^\\[?(%5[bB])?" + i[m] + "\\[?(%5[bB])?\\]?(%5[dD])?$"),
                  p.push(new RegExp(f, "i"));
              return p;
            })(e),
            o = (function (i) {
              for (var f, p = [], m = 0; m < i.length; ++m)
                (f = "\\[?(%5[bB])?" + i[m] + "\\[?(%5[bB])?\\]?(%5[dD])?"),
                  p.push(new RegExp("(" + f + "=)([^&\\n]+)", "igm"));
              return p;
            })(e);
          function r(i, f) {
            return f + l.redact();
          }
          return c(t, function i(f, p, m) {
            var v = (function (y, d) {
              var g;
              for (g = 0; g < n.length; ++g)
                if (n[g].test(y)) {
                  d = l.redact();
                  break;
                }
              return d;
            })(f, p);
            return v === p
              ? l.isType(p, "object") || l.isType(p, "array")
                ? c(p, i, m)
                : (function (y) {
                    var d;
                    if (l.isType(y, "string"))
                      for (d = 0; d < o.length; ++d) y = y.replace(o[d], r);
                    return y;
                  })(v)
              : v;
          });
        };
      },
      function (k, L, _) {
        "use strict";
        var l = _(0);
        k.exports = function (c, a, t) {
          var e,
            s,
            u,
            n,
            o = l.isType(c, "object"),
            r = l.isType(c, "array"),
            i = [];
          if (((t = t || { obj: [], mapped: [] }), o)) {
            if (((n = t.obj.indexOf(c)), o && n !== -1))
              return t.mapped[n] || t.obj[n];
            t.obj.push(c), (n = t.obj.length - 1);
          }
          if (o)
            for (e in c)
              Object.prototype.hasOwnProperty.call(c, e) && i.push(e);
          else if (r) for (u = 0; u < c.length; ++u) i.push(u);
          var f = o ? {} : [],
            p = !0;
          for (u = 0; u < i.length; ++u)
            (s = c[(e = i[u])]), (f[e] = a(e, s, t)), (p = p && f[e] === c[e]);
          return o && !p && (t.mapped[n] = f), p ? c : f;
        };
      },
      function (k, L, _) {
        k.exports = _(7);
      },
      function (k, L, _) {
        "use strict";
        var l = _(8),
          c = typeof window < "u" && window._rollbarConfig,
          a = (c && c.globalAlias) || "Rollbar",
          t =
            typeof window < "u" &&
            window[a] &&
            typeof window[a].shimId == "function" &&
            window[a].shimId() !== void 0;
        if (
          (typeof window > "u" ||
            window._rollbarStartTime ||
            (window._rollbarStartTime = new Date().getTime()),
          !t && c)
        ) {
          var e = new l(c);
          window[a] = e;
        } else
          typeof window < "u"
            ? ((window.rollbar = l), (window._rollbarDidLoad = !0))
            : typeof self < "u" &&
              ((self.rollbar = l), (self._rollbarDidLoad = !0));
        k.exports = l;
      },
      function (k, L, _) {
        "use strict";
        var l = _(9),
          c = _(31),
          a = _(32),
          t = _(35),
          e = _(37),
          s = _(4),
          u = _(38);
        l.setComponents({
          telemeter: c,
          instrumenter: a,
          polyfillJSON: t,
          wrapGlobals: e,
          scrub: s,
          truncation: u,
        }),
          (k.exports = l);
      },
      function (k, L, _) {
        "use strict";
        var l = _(10),
          c = _(0),
          a = _(15),
          t = _(1),
          e = _(19),
          s = _(20),
          u = _(2),
          n = _(23),
          o = _(26),
          r = _(27),
          i = _(28),
          f = _(3);
        function p(h, b) {
          (this.options = c.handleOptions(w, h, null, t)),
            (this.options._configuredOptions = h);
          var E = this.components.telemeter,
            I = this.components.instrumenter,
            O = this.components.polyfillJSON;
          (this.wrapGlobals = this.components.wrapGlobals),
            (this.scrub = this.components.scrub);
          var T = this.components.truncation,
            S = new s(T),
            C = new a(this.options, S, u, T);
          E && (this.telemeter = new E(this.options)),
            (this.client =
              b || new l(this.options, C, t, this.telemeter, "browser"));
          var R = d(),
            P = typeof document < "u" && document;
          (this.isChrome = R.chrome && R.chrome.runtime),
            (this.anonymousErrorsPending = 0),
            (function (N, F, q) {
              N.addTransform(n.handleDomException)
                .addTransform(n.handleItemWithError)
                .addTransform(n.ensureItemHasSomethingToSay)
                .addTransform(n.addBaseInfo)
                .addTransform(n.addRequestInfo(q))
                .addTransform(n.addClientInfo(q))
                .addTransform(n.addPluginInfo(q))
                .addTransform(n.addBody)
                .addTransform(o.addMessageWithError)
                .addTransform(o.addTelemetryData)
                .addTransform(o.addConfigToPayload)
                .addTransform(n.addScrubber(F.scrub))
                .addTransform(o.addPayloadOptions)
                .addTransform(o.userTransform(t))
                .addTransform(o.addConfiguredOptions)
                .addTransform(o.addDiagnosticKeys)
                .addTransform(o.itemToPayload);
            })(this.client.notifier, this, R),
            this.client.queue
              .addPredicate(i.checkLevel)
              .addPredicate(r.checkIgnore)
              .addPredicate(i.userCheckIgnore(t))
              .addPredicate(i.urlIsNotBlockListed(t))
              .addPredicate(i.urlIsSafeListed(t))
              .addPredicate(i.messageIsIgnored(t)),
            this.setupUnhandledCapture(),
            I &&
              ((this.instrumenter = new I(
                this.options,
                this.client.telemeter,
                this,
                R,
                P,
              )),
              this.instrumenter.instrument()),
            c.setupJSON(O),
            (this.rollbar = this);
        }
        var m = null;
        function v(h) {
          var b = "Rollbar is not initialized";
          t.error(b), h && h(new Error(b));
        }
        function y(h) {
          for (var b = 0, E = h.length; b < E; ++b)
            if (c.isFunction(h[b])) return h[b];
        }
        function d() {
          return (typeof window < "u" && window) || (typeof self < "u" && self);
        }
        (p.init = function (h, b) {
          return m ? m.global(h).configure(h) : (m = new p(h, b));
        }),
          (p.prototype.components = {}),
          (p.setComponents = function (h) {
            p.prototype.components = h;
          }),
          (p.prototype.global = function (h) {
            return this.client.global(h), this;
          }),
          (p.global = function (h) {
            if (m) return m.global(h);
            v();
          }),
          (p.prototype.configure = function (h, b) {
            var E = this.options,
              I = {};
            return (
              b && (I = { payload: b }),
              (this.options = c.handleOptions(E, h, I, t)),
              (this.options._configuredOptions = c.handleOptions(
                E._configuredOptions,
                h,
                I,
              )),
              this.client.configure(this.options, b),
              this.instrumenter && this.instrumenter.configure(this.options),
              this.setupUnhandledCapture(),
              this
            );
          }),
          (p.configure = function (h, b) {
            if (m) return m.configure(h, b);
            v();
          }),
          (p.prototype.lastError = function () {
            return this.client.lastError;
          }),
          (p.lastError = function () {
            if (m) return m.lastError();
            v();
          }),
          (p.prototype.log = function () {
            var h = this._createItem(arguments),
              b = h.uuid;
            return this.client.log(h), { uuid: b };
          }),
          (p.log = function () {
            if (m) return m.log.apply(m, arguments);
            var h = y(arguments);
            v(h);
          }),
          (p.prototype.debug = function () {
            var h = this._createItem(arguments),
              b = h.uuid;
            return this.client.debug(h), { uuid: b };
          }),
          (p.debug = function () {
            if (m) return m.debug.apply(m, arguments);
            var h = y(arguments);
            v(h);
          }),
          (p.prototype.info = function () {
            var h = this._createItem(arguments),
              b = h.uuid;
            return this.client.info(h), { uuid: b };
          }),
          (p.info = function () {
            if (m) return m.info.apply(m, arguments);
            var h = y(arguments);
            v(h);
          }),
          (p.prototype.warn = function () {
            var h = this._createItem(arguments),
              b = h.uuid;
            return this.client.warn(h), { uuid: b };
          }),
          (p.warn = function () {
            if (m) return m.warn.apply(m, arguments);
            var h = y(arguments);
            v(h);
          }),
          (p.prototype.warning = function () {
            var h = this._createItem(arguments),
              b = h.uuid;
            return this.client.warning(h), { uuid: b };
          }),
          (p.warning = function () {
            if (m) return m.warning.apply(m, arguments);
            var h = y(arguments);
            v(h);
          }),
          (p.prototype.error = function () {
            var h = this._createItem(arguments),
              b = h.uuid;
            return this.client.error(h), { uuid: b };
          }),
          (p.error = function () {
            if (m) return m.error.apply(m, arguments);
            var h = y(arguments);
            v(h);
          }),
          (p.prototype.critical = function () {
            var h = this._createItem(arguments),
              b = h.uuid;
            return this.client.critical(h), { uuid: b };
          }),
          (p.critical = function () {
            if (m) return m.critical.apply(m, arguments);
            var h = y(arguments);
            v(h);
          }),
          (p.prototype.buildJsonPayload = function (h) {
            return this.client.buildJsonPayload(h);
          }),
          (p.buildJsonPayload = function () {
            if (m) return m.buildJsonPayload.apply(m, arguments);
            v();
          }),
          (p.prototype.sendJsonPayload = function (h) {
            return this.client.sendJsonPayload(h);
          }),
          (p.sendJsonPayload = function () {
            if (m) return m.sendJsonPayload.apply(m, arguments);
            v();
          }),
          (p.prototype.setupUnhandledCapture = function () {
            var h = d();
            this.unhandledExceptionsInitialized ||
              ((this.options.captureUncaught ||
                this.options.handleUncaughtExceptions) &&
                (e.captureUncaughtExceptions(h, this),
                this.wrapGlobals &&
                  this.options.wrapGlobalEventHandlers &&
                  this.wrapGlobals(h, this),
                (this.unhandledExceptionsInitialized = !0))),
              this.unhandledRejectionsInitialized ||
                ((this.options.captureUnhandledRejections ||
                  this.options.handleUnhandledRejections) &&
                  (e.captureUnhandledRejections(h, this),
                  (this.unhandledRejectionsInitialized = !0)));
          }),
          (p.prototype.handleUncaughtException = function (h, b, E, I, O, T) {
            if (
              this.options.captureUncaught ||
              this.options.handleUncaughtExceptions
            ) {
              if (
                this.options.inspectAnonymousErrors &&
                this.isChrome &&
                O === null &&
                b === ""
              )
                return "anonymous";
              var S,
                C = c.makeUnhandledStackInfo(
                  h,
                  b,
                  E,
                  I,
                  O,
                  "onerror",
                  "uncaught exception",
                  f,
                );
              c.isError(O)
                ? ((S = this._createItem([h, O, T]))._unhandledStackInfo = C)
                : c.isError(b)
                  ? ((S = this._createItem([h, b, T]))._unhandledStackInfo = C)
                  : ((S = this._createItem([h, T])).stackInfo = C),
                (S.level = this.options.uncaughtErrorLevel),
                (S._isUncaught = !0),
                this.client.log(S);
            }
          }),
          (p.prototype.handleAnonymousErrors = function () {
            if (this.options.inspectAnonymousErrors && this.isChrome) {
              var h = this;
              try {
                Error.prepareStackTrace = function (b, E) {
                  if (
                    h.options.inspectAnonymousErrors &&
                    h.anonymousErrorsPending
                  ) {
                    if (((h.anonymousErrorsPending -= 1), !b)) return;
                    (b._isAnonymous = !0),
                      h.handleUncaughtException(b.message, null, null, null, b);
                  }
                  return b.stack;
                };
              } catch (b) {
                (this.options.inspectAnonymousErrors = !1),
                  this.error("anonymous error handler failed", b);
              }
            }
          }),
          (p.prototype.handleUnhandledRejection = function (h, b) {
            if (
              this.options.captureUnhandledRejections ||
              this.options.handleUnhandledRejections
            ) {
              var E = "unhandled rejection was null or undefined!";
              if (h)
                if (h.message) E = h.message;
                else {
                  var I = c.stringify(h);
                  I.value && (E = I.value);
                }
              var O,
                T = (h && h._rollbarContext) || (b && b._rollbarContext);
              c.isError(h)
                ? (O = this._createItem([E, h, T]))
                : ((O = this._createItem([E, h, T])).stackInfo =
                    c.makeUnhandledStackInfo(
                      E,
                      "",
                      0,
                      0,
                      null,
                      "unhandledrejection",
                      "",
                      f,
                    )),
                (O.level = this.options.uncaughtErrorLevel),
                (O._isUncaught = !0),
                (O._originalArgs = O._originalArgs || []),
                O._originalArgs.push(b),
                this.client.log(O);
            }
          }),
          (p.prototype.wrap = function (h, b, E) {
            try {
              var I;
              if (
                ((I = c.isFunction(b)
                  ? b
                  : function () {
                      return b || {};
                    }),
                !c.isFunction(h) || h._isWrap)
              )
                return h;
              if (
                !h._rollbar_wrapped &&
                ((h._rollbar_wrapped = function () {
                  E && c.isFunction(E) && E.apply(this, arguments);
                  try {
                    return h.apply(this, arguments);
                  } catch (S) {
                    var T = S;
                    throw (
                      (T &&
                        window._rollbarWrappedError !== T &&
                        (c.isType(T, "string") && (T = new String(T)),
                        (T._rollbarContext = I() || {}),
                        (T._rollbarContext._wrappedSource = h.toString()),
                        (window._rollbarWrappedError = T)),
                      T)
                    );
                  }
                }),
                (h._rollbar_wrapped._isWrap = !0),
                h.hasOwnProperty)
              )
                for (var O in h)
                  h.hasOwnProperty(O) &&
                    O !== "_rollbar_wrapped" &&
                    (h._rollbar_wrapped[O] = h[O]);
              return h._rollbar_wrapped;
            } catch {
              return h;
            }
          }),
          (p.wrap = function (h, b) {
            if (m) return m.wrap(h, b);
            v();
          }),
          (p.prototype.captureEvent = function () {
            var h = c.createTelemetryEvent(arguments);
            return this.client.captureEvent(h.type, h.metadata, h.level);
          }),
          (p.captureEvent = function () {
            if (m) return m.captureEvent.apply(m, arguments);
            v();
          }),
          (p.prototype.captureDomContentLoaded = function (h, b) {
            return (
              b || (b = new Date()), this.client.captureDomContentLoaded(b)
            );
          }),
          (p.prototype.captureLoad = function (h, b) {
            return b || (b = new Date()), this.client.captureLoad(b);
          }),
          (p.prototype.loadFull = function () {
            t.info(
              "Unexpected Rollbar.loadFull() called on a Notifier instance. This can happen when Rollbar is loaded multiple times.",
            );
          }),
          (p.prototype._createItem = function (h) {
            return c.createItem(h, t, this);
          });
        var g = _(29),
          x = _(30),
          w = {
            version: g.version,
            scrubFields: x.scrubFields,
            logLevel: g.logLevel,
            reportLevel: g.reportLevel,
            uncaughtErrorLevel: g.uncaughtErrorLevel,
            endpoint: g.endpoint,
            verbose: !1,
            enabled: !0,
            transmit: !0,
            sendConfig: !1,
            includeItemsInTelemetry: !0,
            captureIp: !0,
            inspectAnonymousErrors: !0,
            ignoreDuplicateErrors: !0,
            wrapGlobalEventHandlers: !1,
          };
        k.exports = p;
      },
      function (k, L, _) {
        "use strict";
        var l = _(11),
          c = _(13),
          a = _(14),
          t = _(0);
        function e(n, o, r, i, f) {
          (this.options = t.merge(n)),
            (this.logger = r),
            e.rateLimiter.configureGlobal(this.options),
            e.rateLimiter.setPlatformOptions(f, this.options),
            (this.api = o),
            (this.queue = new c(e.rateLimiter, o, r, this.options));
          var p = this.options.tracer || null;
          u(p)
            ? ((this.tracer = p),
              (this.options.tracer = "opentracing-tracer-enabled"),
              (this.options._configuredOptions.tracer =
                "opentracing-tracer-enabled"))
            : (this.tracer = null),
            (this.notifier = new a(this.queue, this.options)),
            (this.telemeter = i),
            s(n),
            (this.lastError = null),
            (this.lastErrorHash = "none");
        }
        function s(n) {
          n.stackTraceLimit && (Error.stackTraceLimit = n.stackTraceLimit);
        }
        function u(n) {
          if (!n || !n.scope || typeof n.scope != "function") return !1;
          var o = n.scope();
          return !(!o || !o.active || typeof o.active != "function");
        }
        (e.rateLimiter = new l({ maxItems: 0, itemsPerMinute: 60 })),
          (e.prototype.global = function (n) {
            return e.rateLimiter.configureGlobal(n), this;
          }),
          (e.prototype.configure = function (n, o) {
            var r = this.options,
              i = {};
            o && (i = { payload: o }), (this.options = t.merge(r, n, i));
            var f = this.options.tracer || null;
            return (
              u(f)
                ? ((this.tracer = f),
                  (this.options.tracer = "opentracing-tracer-enabled"),
                  (this.options._configuredOptions.tracer =
                    "opentracing-tracer-enabled"))
                : (this.tracer = null),
              this.notifier && this.notifier.configure(this.options),
              this.telemeter && this.telemeter.configure(this.options),
              s(n),
              this.global(this.options),
              u(n.tracer) && (this.tracer = n.tracer),
              this
            );
          }),
          (e.prototype.log = function (n) {
            var o = this._defaultLogLevel();
            return this._log(o, n);
          }),
          (e.prototype.debug = function (n) {
            this._log("debug", n);
          }),
          (e.prototype.info = function (n) {
            this._log("info", n);
          }),
          (e.prototype.warn = function (n) {
            this._log("warning", n);
          }),
          (e.prototype.warning = function (n) {
            this._log("warning", n);
          }),
          (e.prototype.error = function (n) {
            this._log("error", n);
          }),
          (e.prototype.critical = function (n) {
            this._log("critical", n);
          }),
          (e.prototype.wait = function (n) {
            this.queue.wait(n);
          }),
          (e.prototype.captureEvent = function (n, o, r) {
            return this.telemeter && this.telemeter.captureEvent(n, o, r);
          }),
          (e.prototype.captureDomContentLoaded = function (n) {
            return this.telemeter && this.telemeter.captureDomContentLoaded(n);
          }),
          (e.prototype.captureLoad = function (n) {
            return this.telemeter && this.telemeter.captureLoad(n);
          }),
          (e.prototype.buildJsonPayload = function (n) {
            return this.api.buildJsonPayload(n);
          }),
          (e.prototype.sendJsonPayload = function (n) {
            this.api.postJsonPayload(n);
          }),
          (e.prototype._log = function (n, o) {
            var r;
            if (
              (o.callback && ((r = o.callback), delete o.callback),
              this.options.ignoreDuplicateErrors && this._sameAsLastError(o))
            ) {
              if (r) {
                var i = new Error("ignored identical item");
                (i.item = o), r(i);
              }
            } else
              try {
                this._addTracingInfo(o),
                  (o.level = o.level || n),
                  this.telemeter && this.telemeter._captureRollbarItem(o),
                  (o.telemetryEvents =
                    (this.telemeter && this.telemeter.copyEvents()) || []),
                  this.notifier.log(o, r);
              } catch (f) {
                r && r(f), this.logger.error(f);
              }
          }),
          (e.prototype._defaultLogLevel = function () {
            return this.options.logLevel || "debug";
          }),
          (e.prototype._sameAsLastError = function (n) {
            if (!n._isUncaught) return !1;
            var o = (function (r) {
              var i = r.message || "",
                f = (r.err || {}).stack || String(r.err);
              return i + "::" + f;
            })(n);
            return (
              this.lastErrorHash === o ||
              ((this.lastError = n.err), (this.lastErrorHash = o), !1)
            );
          }),
          (e.prototype._addTracingInfo = function (n) {
            if (this.tracer) {
              var o = this.tracer.scope().active();
              if (
                (function (f) {
                  if (!f || !f.context || typeof f.context != "function")
                    return !1;
                  var p = f.context();
                  return !(
                    !p ||
                    !p.toSpanId ||
                    !p.toTraceId ||
                    typeof p.toSpanId != "function" ||
                    typeof p.toTraceId != "function"
                  );
                })(o)
              ) {
                o.setTag("rollbar.error_uuid", n.uuid),
                  o.setTag("rollbar.has_error", !0),
                  o.setTag("error", !0),
                  o.setTag(
                    "rollbar.item_url",
                    "https://rollbar.com/item/uuid/?uuid=" + n.uuid,
                  ),
                  o.setTag(
                    "rollbar.occurrence_url",
                    "https://rollbar.com/occurrence/uuid/?uuid=" + n.uuid,
                  );
                var r = o.context().toSpanId(),
                  i = o.context().toTraceId();
                n.custom
                  ? ((n.custom.opentracing_span_id = r),
                    (n.custom.opentracing_trace_id = i))
                  : (n.custom = {
                      opentracing_span_id: r,
                      opentracing_trace_id: i,
                    });
              }
            }
          }),
          (k.exports = e);
      },
      function (k, L, _) {
        "use strict";
        var l = _(0);
        function c(e) {
          (this.startTime = l.now()),
            (this.counter = 0),
            (this.perMinCounter = 0),
            (this.platform = null),
            (this.platformOptions = {}),
            this.configureGlobal(e);
        }
        function a(e, s, u) {
          return !e.ignoreRateLimit && s >= 1 && u > s;
        }
        function t(e, s, u, n, o, r, i) {
          var f = null;
          return (
            u && (u = new Error(u)),
            u ||
              n ||
              (f = (function (p, m, v, y, d) {
                var g,
                  x = m.environment || (m.payload && m.payload.environment);
                g = d
                  ? "item per minute limit reached, ignoring errors until timeout"
                  : "maxItems has been hit, ignoring errors until reset.";
                var w = {
                  body: {
                    message: {
                      body: g,
                      extra: { maxItems: v, itemsPerMinute: y },
                    },
                  },
                  language: "javascript",
                  environment: x,
                  notifier: {
                    version: (m.notifier && m.notifier.version) || m.version,
                  },
                };
                return (
                  p === "browser"
                    ? ((w.platform = "browser"),
                      (w.framework = "browser-js"),
                      (w.notifier.name = "rollbar-browser-js"))
                    : p === "server"
                      ? ((w.framework = m.framework || "node-js"),
                        (w.notifier.name = m.notifier.name))
                      : p === "react-native" &&
                        ((w.framework = m.framework || "react-native"),
                        (w.notifier.name = m.notifier.name)),
                  w
                );
              })(e, s, o, r, i)),
            { error: u, shouldSend: n, payload: f }
          );
        }
        (c.globalSettings = {
          startTime: l.now(),
          maxItems: void 0,
          itemsPerMinute: void 0,
        }),
          (c.prototype.configureGlobal = function (e) {
            e.startTime !== void 0 &&
              (c.globalSettings.startTime = e.startTime),
              e.maxItems !== void 0 && (c.globalSettings.maxItems = e.maxItems),
              e.itemsPerMinute !== void 0 &&
                (c.globalSettings.itemsPerMinute = e.itemsPerMinute);
          }),
          (c.prototype.shouldSend = function (e, s) {
            var u = (s = s || l.now()) - this.startTime;
            (u < 0 || u >= 6e4) &&
              ((this.startTime = s), (this.perMinCounter = 0));
            var n = c.globalSettings.maxItems,
              o = c.globalSettings.itemsPerMinute;
            if (a(e, n, this.counter))
              return t(
                this.platform,
                this.platformOptions,
                n + " max items reached",
                !1,
              );
            if (a(e, o, this.perMinCounter))
              return t(
                this.platform,
                this.platformOptions,
                o + " items per minute reached",
                !1,
              );
            this.counter++, this.perMinCounter++;
            var r = !a(e, n, this.counter),
              i = r;
            return (
              (r = r && !a(e, o, this.perMinCounter)),
              t(this.platform, this.platformOptions, null, r, n, o, i)
            );
          }),
          (c.prototype.setPlatformOptions = function (e, s) {
            (this.platform = e), (this.platformOptions = s);
          }),
          (k.exports = c);
      },
      function (k, L, _) {
        "use strict";
        var l = Object.prototype.hasOwnProperty,
          c = Object.prototype.toString,
          a = function (t) {
            if (!t || c.call(t) !== "[object Object]") return !1;
            var e,
              s = l.call(t, "constructor"),
              u =
                t.constructor &&
                t.constructor.prototype &&
                l.call(t.constructor.prototype, "isPrototypeOf");
            if (t.constructor && !s && !u) return !1;
            for (e in t);
            return e === void 0 || l.call(t, e);
          };
        k.exports = function t() {
          var e,
            s,
            u,
            n,
            o,
            r = {},
            i = null,
            f = arguments.length;
          for (e = 0; e < f; e++)
            if ((i = arguments[e]) != null)
              for (o in i)
                (s = r[o]),
                  r !== (u = i[o]) &&
                    (u && a(u)
                      ? ((n = s && a(s) ? s : {}), (r[o] = t(n, u)))
                      : u !== void 0 && (r[o] = u));
          return r;
        };
      },
      function (k, L, _) {
        "use strict";
        var l = _(0);
        function c(t, e, s, u) {
          (this.rateLimiter = t),
            (this.api = e),
            (this.logger = s),
            (this.options = u),
            (this.predicates = []),
            (this.pendingItems = []),
            (this.pendingRequests = []),
            (this.retryQueue = []),
            (this.retryHandle = null),
            (this.waitCallback = null),
            (this.waitIntervalID = null);
        }
        (c.prototype.configure = function (t) {
          this.api && this.api.configure(t);
          var e = this.options;
          return (this.options = l.merge(e, t)), this;
        }),
          (c.prototype.addPredicate = function (t) {
            return l.isFunction(t) && this.predicates.push(t), this;
          }),
          (c.prototype.addPendingItem = function (t) {
            this.pendingItems.push(t);
          }),
          (c.prototype.removePendingItem = function (t) {
            var e = this.pendingItems.indexOf(t);
            e !== -1 && this.pendingItems.splice(e, 1);
          }),
          (c.prototype.addItem = function (t, e, s, u) {
            (e && l.isFunction(e)) || (e = function () {});
            var n = this._applyPredicates(t);
            if (n.stop) return this.removePendingItem(u), void e(n.err);
            if (
              (this._maybeLog(t, s),
              this.removePendingItem(u),
              this.options.transmit)
            ) {
              this.pendingRequests.push(t);
              try {
                this._makeApiRequest(
                  t,
                  function (o, r) {
                    this._dequeuePendingRequest(t), e(o, r);
                  }.bind(this),
                );
              } catch (o) {
                this._dequeuePendingRequest(t), e(o);
              }
            } else e(new Error("Transmit disabled"));
          }),
          (c.prototype.wait = function (t) {
            l.isFunction(t) &&
              ((this.waitCallback = t),
              this._maybeCallWait() ||
                (this.waitIntervalID &&
                  (this.waitIntervalID = clearInterval(this.waitIntervalID)),
                (this.waitIntervalID = setInterval(
                  function () {
                    this._maybeCallWait();
                  }.bind(this),
                  500,
                ))));
          }),
          (c.prototype._applyPredicates = function (t) {
            for (var e = null, s = 0, u = this.predicates.length; s < u; s++)
              if (
                !(e = this.predicates[s](t, this.options)) ||
                e.err !== void 0
              )
                return { stop: !0, err: e.err };
            return { stop: !1, err: null };
          }),
          (c.prototype._makeApiRequest = function (t, e) {
            var s = this.rateLimiter.shouldSend(t);
            s.shouldSend
              ? this.api.postItem(
                  t,
                  function (u, n) {
                    u ? this._maybeRetry(u, t, e) : e(u, n);
                  }.bind(this),
                )
              : s.error
                ? e(s.error)
                : this.api.postItem(s.payload, e);
          });
        var a = [
          "ECONNRESET",
          "ENOTFOUND",
          "ESOCKETTIMEDOUT",
          "ETIMEDOUT",
          "ECONNREFUSED",
          "EHOSTUNREACH",
          "EPIPE",
          "EAI_AGAIN",
        ];
        (c.prototype._maybeRetry = function (t, e, s) {
          var u = !1;
          if (this.options.retryInterval) {
            for (var n = 0, o = a.length; n < o; n++)
              if (t.code === a[n]) {
                u = !0;
                break;
              }
            u &&
              l.isFiniteNumber(this.options.maxRetries) &&
              ((e.retries = e.retries ? e.retries + 1 : 1),
              e.retries > this.options.maxRetries && (u = !1));
          }
          u ? this._retryApiRequest(e, s) : s(t);
        }),
          (c.prototype._retryApiRequest = function (t, e) {
            this.retryQueue.push({ item: t, callback: e }),
              this.retryHandle ||
                (this.retryHandle = setInterval(
                  function () {
                    for (; this.retryQueue.length; ) {
                      var s = this.retryQueue.shift();
                      this._makeApiRequest(s.item, s.callback);
                    }
                  }.bind(this),
                  this.options.retryInterval,
                ));
          }),
          (c.prototype._dequeuePendingRequest = function (t) {
            var e = this.pendingRequests.indexOf(t);
            e !== -1 &&
              (this.pendingRequests.splice(e, 1), this._maybeCallWait());
          }),
          (c.prototype._maybeLog = function (t, e) {
            if (this.logger && this.options.verbose) {
              var s = e;
              if (
                (s =
                  (s = s || l.get(t, "body.trace.exception.message")) ||
                  l.get(t, "body.trace_chain.0.exception.message"))
              )
                return void this.logger.error(s);
              (s = l.get(t, "body.message.body")) && this.logger.log(s);
            }
          }),
          (c.prototype._maybeCallWait = function () {
            return (
              !(
                !l.isFunction(this.waitCallback) ||
                this.pendingItems.length !== 0 ||
                this.pendingRequests.length !== 0
              ) &&
              (this.waitIntervalID &&
                (this.waitIntervalID = clearInterval(this.waitIntervalID)),
              this.waitCallback(),
              !0)
            );
          }),
          (k.exports = c);
      },
      function (k, L, _) {
        "use strict";
        var l = _(0);
        function c(a, t) {
          (this.queue = a),
            (this.options = t),
            (this.transforms = []),
            (this.diagnostic = {});
        }
        (c.prototype.configure = function (a) {
          this.queue && this.queue.configure(a);
          var t = this.options;
          return (this.options = l.merge(t, a)), this;
        }),
          (c.prototype.addTransform = function (a) {
            return l.isFunction(a) && this.transforms.push(a), this;
          }),
          (c.prototype.log = function (a, t) {
            if (
              ((t && l.isFunction(t)) || (t = function () {}),
              !this.options.enabled)
            )
              return t(new Error("Rollbar is not enabled"));
            this.queue.addPendingItem(a);
            var e = a.err;
            this._applyTransforms(
              a,
              function (s, u) {
                if (s) return this.queue.removePendingItem(a), t(s, null);
                this.queue.addItem(u, t, e, a);
              }.bind(this),
            );
          }),
          (c.prototype._applyTransforms = function (a, t) {
            var e = -1,
              s = this.transforms.length,
              u = this.transforms,
              n = this.options,
              o = function (r, i) {
                r ? t(r, null) : ++e !== s ? u[e](i, n, o) : t(null, i);
              };
            o(null, a);
          }),
          (k.exports = c);
      },
      function (k, L, _) {
        "use strict";
        var l = _(0),
          c = _(16),
          a = {
            hostname: "api.rollbar.com",
            path: "/api/1/item/",
            search: null,
            version: "1",
            protocol: "https:",
            port: 443,
          };
        function t(s, u, n, o, r) {
          (this.options = s),
            (this.transport = u),
            (this.url = n),
            (this.truncation = o),
            (this.jsonBackup = r),
            (this.accessToken = s.accessToken),
            (this.transportOptions = e(s, n));
        }
        function e(s, u) {
          return c.getTransportFromOptions(s, a, u);
        }
        (t.prototype.postItem = function (s, u) {
          var n = c.transportOptions(this.transportOptions, "POST"),
            o = c.buildPayload(this.accessToken, s, this.jsonBackup),
            r = this;
          setTimeout(function () {
            r.transport.post(r.accessToken, n, o, u);
          }, 0);
        }),
          (t.prototype.buildJsonPayload = function (s, u) {
            var n,
              o = c.buildPayload(this.accessToken, s, this.jsonBackup);
            return (n = this.truncation
              ? this.truncation.truncate(o)
              : l.stringify(o)).error
              ? (u && u(n.error), null)
              : n.value;
          }),
          (t.prototype.postJsonPayload = function (s, u) {
            var n = c.transportOptions(this.transportOptions, "POST");
            this.transport.postJsonPayload(this.accessToken, n, s, u);
          }),
          (t.prototype.configure = function (s) {
            var u = this.oldOptions;
            return (
              (this.options = l.merge(u, s)),
              (this.transportOptions = e(this.options, this.url)),
              this.options.accessToken !== void 0 &&
                (this.accessToken = this.options.accessToken),
              this
            );
          }),
          (k.exports = t);
      },
      function (k, L, _) {
        "use strict";
        var l = _(0);
        k.exports = {
          buildPayload: function (c, a, t) {
            if (!l.isType(a.context, "string")) {
              var e = l.stringify(a.context, t);
              e.error
                ? (a.context = "Error: could not serialize 'context'")
                : (a.context = e.value || ""),
                a.context.length > 255 &&
                  (a.context = a.context.substr(0, 255));
            }
            return { access_token: c, data: a };
          },
          getTransportFromOptions: function (c, a, t) {
            var e = a.hostname,
              s = a.protocol,
              u = a.port,
              n = a.path,
              o = a.search,
              r = c.timeout,
              i = (function (m) {
                var v =
                    (typeof window < "u" && window) ||
                    (typeof self < "u" && self),
                  y = m.defaultTransport || "xhr";
                return (
                  v.fetch === void 0 && (y = "xhr"),
                  v.XMLHttpRequest === void 0 && (y = "fetch"),
                  y
                );
              })(c),
              f = c.proxy;
            if (c.endpoint) {
              var p = t.parse(c.endpoint);
              (e = p.hostname),
                (s = p.protocol),
                (u = p.port),
                (n = p.pathname),
                (o = p.search);
            }
            return {
              timeout: r,
              hostname: e,
              protocol: s,
              port: u,
              path: n,
              search: o,
              proxy: f,
              transport: i,
            };
          },
          transportOptions: function (c, a) {
            var t = c.protocol || "https:",
              e =
                c.port || (t === "http:" ? 80 : t === "https:" ? 443 : void 0),
              s = c.hostname,
              u = c.path,
              n = c.timeout,
              o = c.transport;
            return (
              c.search && (u += c.search),
              c.proxy &&
                ((u = t + "//" + s + u),
                (s = c.proxy.host || c.proxy.hostname),
                (e = c.proxy.port),
                (t = c.proxy.protocol || t)),
              {
                timeout: n,
                protocol: t,
                hostname: s,
                path: u,
                port: e,
                method: a,
                transport: o,
              }
            );
          },
          appendPathToPath: function (c, a) {
            var t = /\/$/.test(c),
              e = /^\//.test(a);
            return (
              t && e ? (a = a.substring(1)) : t || e || (a = "/" + a), c + a
            );
          },
        };
      },
      function (k, L) {
        (function (_) {
          "use strict";
          _.console || (_.console = {});
          for (
            var l,
              c,
              a = _.console,
              t = function () {},
              e = ["memory"],
              s =
                "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(
                  ",",
                );
            (l = e.pop());

          )
            a[l] || (a[l] = {});
          for (; (c = s.pop()); ) a[c] || (a[c] = t);
        })(typeof window > "u" ? this : window);
      },
      function (k, L, _) {
        "use strict";
        var l = {
          ieVersion: function () {
            if (typeof document < "u") {
              for (
                var c = 3,
                  a = document.createElement("div"),
                  t = a.getElementsByTagName("i");
                (a.innerHTML =
                  "<!--[if gt IE " + ++c + "]><i></i><![endif]-->"),
                  t[0];

              );
              return c > 4 ? c : void 0;
            }
          },
        };
        k.exports = l;
      },
      function (k, L, _) {
        "use strict";
        function l(c, a, t, e) {
          c._rollbarWrappedError &&
            (e[4] || (e[4] = c._rollbarWrappedError),
            e[5] || (e[5] = c._rollbarWrappedError._rollbarContext),
            (c._rollbarWrappedError = null));
          var s = a.handleUncaughtException.apply(a, e);
          t && t.apply(c, e),
            s === "anonymous" && (a.anonymousErrorsPending += 1);
        }
        k.exports = {
          captureUncaughtExceptions: function (c, a, t) {
            if (c) {
              var e;
              if (typeof a._rollbarOldOnError == "function")
                e = a._rollbarOldOnError;
              else if (c.onerror) {
                for (e = c.onerror; e._rollbarOldOnError; )
                  e = e._rollbarOldOnError;
                a._rollbarOldOnError = e;
              }
              a.handleAnonymousErrors();
              var s = function () {
                var u = Array.prototype.slice.call(arguments, 0);
                l(c, a, e, u);
              };
              t && (s._rollbarOldOnError = e), (c.onerror = s);
            }
          },
          captureUnhandledRejections: function (c, a, t) {
            if (c) {
              typeof c._rollbarURH == "function" &&
                c._rollbarURH.belongsToShim &&
                c.removeEventListener("unhandledrejection", c._rollbarURH);
              var e = function (s) {
                var u, n, o;
                try {
                  u = s.reason;
                } catch {
                  u = void 0;
                }
                try {
                  n = s.promise;
                } catch {
                  n = "[unhandledrejection] error getting `promise` from event";
                }
                try {
                  (o = s.detail), !u && o && ((u = o.reason), (n = o.promise));
                } catch {}
                u ||
                  (u =
                    "[unhandledrejection] error getting `reason` from event"),
                  a &&
                    a.handleUnhandledRejection &&
                    a.handleUnhandledRejection(u, n);
              };
              (e.belongsToShim = t),
                (c._rollbarURH = e),
                c.addEventListener("unhandledrejection", e);
            }
          },
        };
      },
      function (k, L, _) {
        "use strict";
        var l = _(0),
          c = _(21),
          a = _(22);
        function t(e) {
          this.truncation = e;
        }
        (t.prototype.get = function (e, s, u, n, o) {
          (n && l.isFunction(n)) || (n = function () {}),
            l.addParamsAndAccessTokenToPath(e, s, u);
          var r = l.formatUrl(s);
          this._makeZoneRequest(
            e,
            r,
            "GET",
            null,
            n,
            o,
            s.timeout,
            s.transport,
          );
        }),
          (t.prototype.post = function (e, s, u, n, o) {
            if (((n && l.isFunction(n)) || (n = function () {}), !u))
              return n(new Error("Cannot send empty request"));
            var r;
            if (
              (r = this.truncation
                ? this.truncation.truncate(u)
                : l.stringify(u)).error
            )
              return n(r.error);
            var i = r.value,
              f = l.formatUrl(s);
            this._makeZoneRequest(
              e,
              f,
              "POST",
              i,
              n,
              o,
              s.timeout,
              s.transport,
            );
          }),
          (t.prototype.postJsonPayload = function (e, s, u, n, o) {
            (n && l.isFunction(n)) || (n = function () {});
            var r = l.formatUrl(s);
            this._makeZoneRequest(
              e,
              r,
              "POST",
              u,
              n,
              o,
              s.timeout,
              s.transport,
            );
          }),
          (t.prototype._makeZoneRequest = function () {
            var e = (typeof window < "u" && window) || (o !== void 0 && o),
              s = e && e.Zone && e.Zone.current,
              u = Array.prototype.slice.call(arguments);
            if (s && s._name === "angular") {
              var n = s._parent,
                o = this;
              n.run(function () {
                o._makeRequest.apply(void 0, u);
              });
            } else this._makeRequest.apply(void 0, u);
          }),
          (t.prototype._makeRequest = function (e, s, u, n, o, r, i, f) {
            if (typeof RollbarProxy < "u")
              return (function (p, m) {
                new RollbarProxy().sendJsonPayload(
                  p,
                  function (v) {},
                  function (v) {
                    m(new Error(v));
                  },
                );
              })(n, o);
            f === "fetch" ? c(e, s, u, n, o, i) : a(e, s, u, n, o, r, i);
          }),
          (k.exports = t);
      },
      function (k, L, _) {
        "use strict";
        var l = _(1),
          c = _(0);
        k.exports = function (a, t, e, s, u, n) {
          var o, r;
          c.isFiniteNumber(n) &&
            ((o = new AbortController()),
            (r = setTimeout(function () {
              o.abort();
            }, n))),
            fetch(t, {
              method: e,
              headers: {
                "Content-Type": "application/json",
                "X-Rollbar-Access-Token": a,
                signal: o && o.signal,
              },
              body: s,
            })
              .then(function (i) {
                return r && clearTimeout(r), i.json();
              })
              .then(function (i) {
                u(null, i);
              })
              .catch(function (i) {
                l.error(i.message), u(i);
              });
        };
      },
      function (k, L, _) {
        "use strict";
        var l = _(0),
          c = _(1);
        function a(t, e) {
          var s = new Error(t);
          return (s.code = e || "ENOTFOUND"), s;
        }
        k.exports = function (t, e, s, u, n, o, r) {
          var i;
          if (
            !(i = o
              ? o()
              : (function () {
                  var m,
                    v,
                    y = [
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
                    ],
                    d = y.length;
                  for (v = 0; v < d; v++)
                    try {
                      m = y[v]();
                      break;
                    } catch {}
                  return m;
                })())
          )
            return n(new Error("No way to send a request"));
          try {
            try {
              var f = function () {
                try {
                  if (f && i.readyState === 4) {
                    f = void 0;
                    var m = l.jsonParse(i.responseText);
                    if ((d = i) && d.status && d.status === 200)
                      return void n(m.error, m.value);
                    if (
                      (function (g) {
                        return (
                          g &&
                          l.isType(g.status, "number") &&
                          g.status >= 400 &&
                          g.status < 600
                        );
                      })(i)
                    ) {
                      if (i.status === 403) {
                        var v = m.value && m.value.message;
                        c.error(v);
                      }
                      n(new Error(String(i.status)));
                    } else
                      n(
                        a(
                          "XHR response had no status code (likely connection failure)",
                        ),
                      );
                  }
                } catch (g) {
                  var y;
                  (y = g && g.stack ? g : new Error(g)), n(y);
                }
                var d;
              };
              i.open(s, e, !0),
                i.setRequestHeader &&
                  (i.setRequestHeader("Content-Type", "application/json"),
                  i.setRequestHeader("X-Rollbar-Access-Token", t)),
                l.isFiniteNumber(r) && (i.timeout = r),
                (i.onreadystatechange = f),
                i.send(u);
            } catch {
              if (typeof XDomainRequest < "u") {
                if (!window || !window.location)
                  return n(
                    new Error(
                      "No window available during request, unknown environment",
                    ),
                  );
                window.location.href.substring(0, 5) === "http:" &&
                  e.substring(0, 5) === "https" &&
                  (e = "http" + e.substring(5));
                var p = new XDomainRequest();
                (p.onprogress = function () {}),
                  (p.ontimeout = function () {
                    n(a("Request timed out", "ETIMEDOUT"));
                  }),
                  (p.onerror = function () {
                    n(new Error("Error during request"));
                  }),
                  (p.onload = function () {
                    var v = l.jsonParse(p.responseText);
                    n(v.error, v.value);
                  }),
                  p.open(s, e, !0),
                  p.send(u);
              } else
                n(new Error("Cannot find a method to transport a request"));
            }
          } catch (m) {
            n(m);
          }
        };
      },
      function (k, L, _) {
        "use strict";
        var l = _(0),
          c = _(3),
          a = _(1);
        function t(n, o, r) {
          var i = n.message,
            f = n.custom;
          i || (i = "Item sent with null or missing arguments.");
          var p = { body: i };
          f && (p.extra = l.merge(f)),
            l.set(n, "data.body", { message: p }),
            r(null, n);
        }
        function e(n) {
          var o = n.stackInfo.stack;
          return (
            o &&
              o.length === 0 &&
              n._unhandledStackInfo &&
              n._unhandledStackInfo.stack &&
              (o = n._unhandledStackInfo.stack),
            o
          );
        }
        function s(n, o, r) {
          var i = n && n.data.description,
            f = n && n.custom,
            p = e(n),
            m = c.guessErrorClass(o.message),
            v = { exception: { class: u(o, m[0], r), message: m[1] } };
          if ((i && (v.exception.description = i), p)) {
            var y, d, g, x, w, h, b, E;
            for (
              p.length === 0 &&
                ((v.exception.stack = o.rawStack),
                (v.exception.raw = String(o.rawException))),
                v.frames = [],
                b = 0;
              b < p.length;
              ++b
            )
              (d = {
                filename: (y = p[b]).url ? l.sanitizeUrl(y.url) : "(unknown)",
                lineno: y.line || null,
                method: y.func && y.func !== "?" ? y.func : "[anonymous]",
                colno: y.column,
              }),
                r.sendFrameUrl && (d.url = y.url),
                (d.method &&
                  d.method.endsWith &&
                  d.method.endsWith("_rollbar_wrapped")) ||
                  ((g = x = w = null),
                  (h = y.context ? y.context.length : 0) &&
                    ((E = Math.floor(h / 2)),
                    (x = y.context.slice(0, E)),
                    (g = y.context[E]),
                    (w = y.context.slice(E))),
                  g && (d.code = g),
                  (x || w) &&
                    ((d.context = {}),
                    x && x.length && (d.context.pre = x),
                    w && w.length && (d.context.post = w)),
                  y.args && (d.args = y.args),
                  v.frames.push(d));
            v.frames.reverse(), f && (v.extra = l.merge(f));
          }
          return v;
        }
        function u(n, o, r) {
          return n.name ? n.name : r.guessErrorClass ? o : "(unknown)";
        }
        k.exports = {
          handleDomException: function (n, o, r) {
            if (n.err && c.Stack(n.err).name === "DOMException") {
              var i = new Error();
              (i.name = n.err.name),
                (i.message = n.err.message),
                (i.stack = n.err.stack),
                (i.nested = n.err),
                (n.err = i);
            }
            r(null, n);
          },
          handleItemWithError: function (n, o, r) {
            if (((n.data = n.data || {}), n.err))
              try {
                (n.stackInfo =
                  n.err._savedStackTrace || c.parse(n.err, n.skipFrames)),
                  o.addErrorContext &&
                    (function (i) {
                      var f = [],
                        p = i.err;
                      for (f.push(p); p.nested || p.cause; )
                        (p = p.nested || p.cause), f.push(p);
                      l.addErrorContext(i, f);
                    })(n);
              } catch (i) {
                a.error("Error while parsing the error object.", i);
                try {
                  n.message =
                    n.err.message ||
                    n.err.description ||
                    n.message ||
                    String(n.err);
                } catch (f) {
                  n.message = String(n.err) || String(f);
                }
                delete n.err;
              }
            r(null, n);
          },
          ensureItemHasSomethingToSay: function (n, o, r) {
            n.message ||
              n.stackInfo ||
              n.custom ||
              r(new Error("No message, stack info, or custom data"), null),
              r(null, n);
          },
          addBaseInfo: function (n, o, r) {
            var i = (o.payload && o.payload.environment) || o.environment;
            (n.data = l.merge(n.data, {
              environment: i,
              level: n.level,
              endpoint: o.endpoint,
              platform: "browser",
              framework: "browser-js",
              language: "javascript",
              server: {},
              uuid: n.uuid,
              notifier: { name: "rollbar-browser-js", version: o.version },
              custom: n.custom,
            })),
              r(null, n);
          },
          addRequestInfo: function (n) {
            return function (o, r, i) {
              var f = {};
              n &&
                n.location &&
                ((f.url = n.location.href),
                (f.query_string = n.location.search));
              var p = "$remote_ip";
              r.captureIp
                ? r.captureIp !== !0 && (p += "_anonymize")
                : (p = null),
                p && (f.user_ip = p),
                Object.keys(f).length > 0 && l.set(o, "data.request", f),
                i(null, o);
            };
          },
          addClientInfo: function (n) {
            return function (o, r, i) {
              if (!n) return i(null, o);
              var f = n.navigator || {},
                p = n.screen || {};
              l.set(o, "data.client", {
                runtime_ms: o.timestamp - n._rollbarStartTime,
                timestamp: Math.round(o.timestamp / 1e3),
                javascript: {
                  browser: f.userAgent,
                  language: f.language,
                  cookie_enabled: f.cookieEnabled,
                  screen: { width: p.width, height: p.height },
                },
              }),
                i(null, o);
            };
          },
          addPluginInfo: function (n) {
            return function (o, r, i) {
              if (!n || !n.navigator) return i(null, o);
              for (
                var f,
                  p = [],
                  m = n.navigator.plugins || [],
                  v = 0,
                  y = m.length;
                v < y;
                ++v
              )
                (f = m[v]),
                  p.push({ name: f.name, description: f.description });
              l.set(o, "data.client.javascript.plugins", p), i(null, o);
            };
          },
          addBody: function (n, o, r) {
            n.stackInfo
              ? n.stackInfo.traceChain
                ? (function (i, f, p) {
                    for (
                      var m = i.stackInfo.traceChain,
                        v = [],
                        y = m.length,
                        d = 0;
                      d < y;
                      d++
                    ) {
                      var g = s(i, m[d], f);
                      v.push(g);
                    }
                    l.set(i, "data.body", { trace_chain: v }), p(null, i);
                  })(n, o, r)
                : (function (i, f, p) {
                    if (e(i)) {
                      var m = s(i, i.stackInfo, f);
                      l.set(i, "data.body", { trace: m }), p(null, i);
                    } else {
                      var v = i.stackInfo,
                        y = c.guessErrorClass(v.message),
                        d = u(v, y[0], f),
                        g = y[1];
                      (i.message = d + ": " + g), t(i, f, p);
                    }
                  })(n, o, r)
              : t(n, o, r);
          },
          addScrubber: function (n) {
            return function (o, r, i) {
              if (n) {
                var f = r.scrubFields || [],
                  p = r.scrubPaths || [];
                o.data = n(o.data, f, p);
              }
              i(null, o);
            };
          },
        };
      },
      function (k, L, _) {
        var l, c, a;
        (function (t, e) {
          "use strict";
          (c = [_(25)]),
            (a =
              typeof (l = function (s) {
                var u = /(^|@)\S+:\d+/,
                  n = /^\s*at .*(\S+:\d+|\(native\))/m,
                  o = /^(eval@)?(\[native code])?$/;
                return {
                  parse: function (r) {
                    if (
                      r.stacktrace !== void 0 ||
                      r["opera#sourceloc"] !== void 0
                    )
                      return this.parseOpera(r);
                    if (r.stack && r.stack.match(n)) return this.parseV8OrIE(r);
                    if (r.stack) return this.parseFFOrSafari(r);
                    throw new Error("Cannot parse given Error object");
                  },
                  extractLocation: function (r) {
                    if (r.indexOf(":") === -1) return [r];
                    var i = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(
                      r.replace(/[()]/g, ""),
                    );
                    return [i[1], i[2] || void 0, i[3] || void 0];
                  },
                  parseV8OrIE: function (r) {
                    return r.stack
                      .split(
                        `
`,
                      )
                      .filter(function (i) {
                        return !!i.match(n);
                      }, this)
                      .map(function (i) {
                        i.indexOf("(eval ") > -1 &&
                          (i = i
                            .replace(/eval code/g, "eval")
                            .replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                        var f = i
                            .replace(/^\s+/, "")
                            .replace(/\(eval code/g, "(")
                            .replace(/^.*?\s+/, ""),
                          p = f.match(/ (\(.+\)$)/);
                        f = p ? f.replace(p[0], "") : f;
                        var m = this.extractLocation(p ? p[1] : f),
                          v = (p && f) || void 0,
                          y =
                            ["eval", "<anonymous>"].indexOf(m[0]) > -1
                              ? void 0
                              : m[0];
                        return new s({
                          functionName: v,
                          fileName: y,
                          lineNumber: m[1],
                          columnNumber: m[2],
                          source: i,
                        });
                      }, this);
                  },
                  parseFFOrSafari: function (r) {
                    return r.stack
                      .split(
                        `
`,
                      )
                      .filter(function (i) {
                        return !i.match(o);
                      }, this)
                      .map(function (i) {
                        if (
                          (i.indexOf(" > eval") > -1 &&
                            (i = i.replace(
                              / line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,
                              ":$1",
                            )),
                          i.indexOf("@") === -1 && i.indexOf(":") === -1)
                        )
                          return new s({ functionName: i });
                        var f = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                          p = i.match(f),
                          m = p && p[1] ? p[1] : void 0,
                          v = this.extractLocation(i.replace(f, ""));
                        return new s({
                          functionName: m,
                          fileName: v[0],
                          lineNumber: v[1],
                          columnNumber: v[2],
                          source: i,
                        });
                      }, this);
                  },
                  parseOpera: function (r) {
                    return !r.stacktrace ||
                      (r.message.indexOf(`
`) > -1 &&
                        r.message.split(`
`).length >
                          r.stacktrace.split(`
`).length)
                      ? this.parseOpera9(r)
                      : r.stack
                        ? this.parseOpera11(r)
                        : this.parseOpera10(r);
                  },
                  parseOpera9: function (r) {
                    for (
                      var i = /Line (\d+).*script (?:in )?(\S+)/i,
                        f = r.message.split(`
`),
                        p = [],
                        m = 2,
                        v = f.length;
                      m < v;
                      m += 2
                    ) {
                      var y = i.exec(f[m]);
                      y &&
                        p.push(
                          new s({
                            fileName: y[2],
                            lineNumber: y[1],
                            source: f[m],
                          }),
                        );
                    }
                    return p;
                  },
                  parseOpera10: function (r) {
                    for (
                      var i =
                          /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                        f = r.stacktrace.split(`
`),
                        p = [],
                        m = 0,
                        v = f.length;
                      m < v;
                      m += 2
                    ) {
                      var y = i.exec(f[m]);
                      y &&
                        p.push(
                          new s({
                            functionName: y[3] || void 0,
                            fileName: y[2],
                            lineNumber: y[1],
                            source: f[m],
                          }),
                        );
                    }
                    return p;
                  },
                  parseOpera11: function (r) {
                    return r.stack
                      .split(
                        `
`,
                      )
                      .filter(function (i) {
                        return !!i.match(u) && !i.match(/^Error created at/);
                      }, this)
                      .map(function (i) {
                        var f,
                          p = i.split("@"),
                          m = this.extractLocation(p.pop()),
                          v = p.shift() || "",
                          y =
                            v
                              .replace(/<anonymous function(: (\w+))?>/, "$2")
                              .replace(/\([^)]*\)/g, "") || void 0;
                        v.match(/\(([^)]*)\)/) &&
                          (f = v.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                        var d =
                          f === void 0 || f === "[arguments not available]"
                            ? void 0
                            : f.split(",");
                        return new s({
                          functionName: y,
                          args: d,
                          fileName: m[0],
                          lineNumber: m[1],
                          columnNumber: m[2],
                          source: i,
                        });
                      }, this);
                  },
                };
              }) == "function"
                ? l.apply(L, c)
                : l) === void 0 || (k.exports = a);
        })();
      },
      function (k, L, _) {
        var l, c, a;
        (function (t, e) {
          "use strict";
          (c = []),
            (a =
              typeof (l = function () {
                function s(y) {
                  return y.charAt(0).toUpperCase() + y.substring(1);
                }
                function u(y) {
                  return function () {
                    return this[y];
                  };
                }
                var n = ["isConstructor", "isEval", "isNative", "isToplevel"],
                  o = ["columnNumber", "lineNumber"],
                  r = ["fileName", "functionName", "source"],
                  i = n.concat(o, r, ["args"], ["evalOrigin"]);
                function f(y) {
                  if (y)
                    for (var d = 0; d < i.length; d++)
                      y[i[d]] !== void 0 && this["set" + s(i[d])](y[i[d]]);
                }
                (f.prototype = {
                  getArgs: function () {
                    return this.args;
                  },
                  setArgs: function (y) {
                    if (Object.prototype.toString.call(y) !== "[object Array]")
                      throw new TypeError("Args must be an Array");
                    this.args = y;
                  },
                  getEvalOrigin: function () {
                    return this.evalOrigin;
                  },
                  setEvalOrigin: function (y) {
                    if (y instanceof f) this.evalOrigin = y;
                    else {
                      if (!(y instanceof Object))
                        throw new TypeError(
                          "Eval Origin must be an Object or StackFrame",
                        );
                      this.evalOrigin = new f(y);
                    }
                  },
                  toString: function () {
                    var y = this.getFileName() || "",
                      d = this.getLineNumber() || "",
                      g = this.getColumnNumber() || "",
                      x = this.getFunctionName() || "";
                    return this.getIsEval()
                      ? y
                        ? "[eval] (" + y + ":" + d + ":" + g + ")"
                        : "[eval]:" + d + ":" + g
                      : x
                        ? x + " (" + y + ":" + d + ":" + g + ")"
                        : y + ":" + d + ":" + g;
                  },
                }),
                  (f.fromString = function (y) {
                    var d = y.indexOf("("),
                      g = y.lastIndexOf(")"),
                      x = y.substring(0, d),
                      w = y.substring(d + 1, g).split(","),
                      h = y.substring(g + 1);
                    if (h.indexOf("@") === 0)
                      var b = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(h, ""),
                        E = b[1],
                        I = b[2],
                        O = b[3];
                    return new f({
                      functionName: x,
                      args: w || void 0,
                      fileName: E,
                      lineNumber: I || void 0,
                      columnNumber: O || void 0,
                    });
                  });
                for (var p = 0; p < n.length; p++)
                  (f.prototype["get" + s(n[p])] = u(n[p])),
                    (f.prototype["set" + s(n[p])] = (function (y) {
                      return function (d) {
                        this[y] = Boolean(d);
                      };
                    })(n[p]));
                for (var m = 0; m < o.length; m++)
                  (f.prototype["get" + s(o[m])] = u(o[m])),
                    (f.prototype["set" + s(o[m])] = (function (y) {
                      return function (d) {
                        if (((g = d), isNaN(parseFloat(g)) || !isFinite(g)))
                          throw new TypeError(y + " must be a Number");
                        var g;
                        this[y] = Number(d);
                      };
                    })(o[m]));
                for (var v = 0; v < r.length; v++)
                  (f.prototype["get" + s(r[v])] = u(r[v])),
                    (f.prototype["set" + s(r[v])] = (function (y) {
                      return function (d) {
                        this[y] = String(d);
                      };
                    })(r[v]));
                return f;
              }) == "function"
                ? l.apply(L, c)
                : l) === void 0 || (k.exports = a);
        })();
      },
      function (k, L, _) {
        "use strict";
        var l = _(0);
        function c(a, t) {
          l.isFunction(a[t]) && (a[t] = a[t].toString());
        }
        k.exports = {
          itemToPayload: function (a, t, e) {
            var s = a.data;
            a._isUncaught && (s._isUncaught = !0),
              a._originalArgs && (s._originalArgs = a._originalArgs),
              e(null, s);
          },
          addPayloadOptions: function (a, t, e) {
            var s = t.payload || {};
            s.body && delete s.body, (a.data = l.merge(a.data, s)), e(null, a);
          },
          addTelemetryData: function (a, t, e) {
            a.telemetryEvents &&
              l.set(a, "data.body.telemetry", a.telemetryEvents),
              e(null, a);
          },
          addMessageWithError: function (a, t, e) {
            if (a.message) {
              var s = "data.body.trace_chain.0",
                u = l.get(a, s);
              if ((u || ((s = "data.body.trace"), (u = l.get(a, s))), u)) {
                if (!u.exception || !u.exception.description)
                  return (
                    l.set(a, s + ".exception.description", a.message),
                    void e(null, a)
                  );
                var n = l.get(a, s + ".extra") || {},
                  o = l.merge(n, { message: a.message });
                l.set(a, s + ".extra", o);
              }
              e(null, a);
            } else e(null, a);
          },
          userTransform: function (a) {
            return function (t, e, s) {
              var u = l.merge(t),
                n = null;
              try {
                l.isFunction(e.transform) && (n = e.transform(u.data, t));
              } catch (o) {
                return (
                  (e.transform = null),
                  a.error(
                    "Error while calling custom transform() function. Removing custom transform().",
                    o,
                  ),
                  void s(null, t)
                );
              }
              l.isPromise(n)
                ? n.then(
                    function (o) {
                      o && (u.data = o), s(null, u);
                    },
                    function (o) {
                      s(o, t);
                    },
                  )
                : s(null, u);
            };
          },
          addConfigToPayload: function (a, t, e) {
            if (!t.sendConfig) return e(null, a);
            var s = l.get(a, "data.custom") || {};
            (s._rollbarConfig = t), (a.data.custom = s), e(null, a);
          },
          addConfiguredOptions: function (a, t, e) {
            var s = t._configuredOptions;
            c(s, "transform"),
              c(s, "checkIgnore"),
              c(s, "onSendCallback"),
              delete s.accessToken,
              (a.data.notifier.configured_options = s),
              e(null, a);
          },
          addDiagnosticKeys: function (a, t, e) {
            var s = l.merge(
              a.notifier.client.notifier.diagnostic,
              a.diagnostic,
            );
            if (
              (l.get(a, "err._isAnonymous") && (s.is_anonymous = !0),
              a._isUncaught && (s.is_uncaught = a._isUncaught),
              a.err)
            )
              try {
                s.raw_error = {
                  message: a.err.message,
                  name: a.err.name,
                  constructor_name: a.err.constructor && a.err.constructor.name,
                  filename: a.err.fileName,
                  line: a.err.lineNumber,
                  column: a.err.columnNumber,
                  stack: a.err.stack,
                };
              } catch (u) {
                s.raw_error = { failed: String(u) };
              }
            (a.data.notifier.diagnostic = l.merge(
              a.data.notifier.diagnostic,
              s,
            )),
              e(null, a);
          },
        };
      },
      function (k, L, _) {
        "use strict";
        var l = _(0);
        k.exports = {
          checkIgnore: function (c, a) {
            return (
              !l.get(a, "plugins.jquery.ignoreAjaxErrors") ||
              !l.get(c, "body.message.extra.isAjax")
            );
          },
        };
      },
      function (k, L, _) {
        "use strict";
        var l = _(0);
        function c(t, e, s) {
          if (!t) return !s;
          var u,
            n,
            o = t.frames;
          if (!o || o.length === 0) return !s;
          for (var r = e.length, i = o.length, f = 0; f < i; f++) {
            if (((u = o[f].filename), !l.isType(u, "string"))) return !s;
            for (var p = 0; p < r; p++)
              if (((n = e[p]), new RegExp(n).test(u))) return !0;
          }
          return !1;
        }
        function a(t, e, s, u) {
          var n,
            o,
            r = !1;
          s === "blocklist" && (r = !0);
          try {
            if (
              ((n = r ? e.hostBlockList : e.hostSafeList),
              (o = l.get(t, "body.trace_chain") || [l.get(t, "body.trace")]),
              !n || n.length === 0 || o.length === 0 || !o[0])
            )
              return !r;
            for (var i = o.length, f = 0; f < i; f++)
              if (c(o[f], n, r)) return !0;
          } catch (m) {
            r ? (e.hostBlockList = null) : (e.hostSafeList = null);
            var p = r ? "hostBlockList" : "hostSafeList";
            return (
              u.error(
                "Error while reading your configuration's " +
                  p +
                  " option. Removing custom " +
                  p +
                  ".",
                m,
              ),
              !r
            );
          }
          return !1;
        }
        k.exports = {
          checkLevel: function (t, e) {
            var s = t.level,
              u = l.LEVELS[s] || 0,
              n = e.reportLevel;
            return !(u < (l.LEVELS[n] || 0));
          },
          userCheckIgnore: function (t) {
            return function (e, s) {
              var u = !!e._isUncaught;
              delete e._isUncaught;
              var n = e._originalArgs;
              delete e._originalArgs;
              try {
                l.isFunction(s.onSendCallback) && s.onSendCallback(u, n, e);
              } catch (o) {
                (s.onSendCallback = null),
                  t.error("Error while calling onSendCallback, removing", o);
              }
              try {
                if (l.isFunction(s.checkIgnore) && s.checkIgnore(u, n, e))
                  return !1;
              } catch (o) {
                (s.checkIgnore = null),
                  t.error(
                    "Error while calling custom checkIgnore(), removing",
                    o,
                  );
              }
              return !0;
            };
          },
          urlIsNotBlockListed: function (t) {
            return function (e, s) {
              return !a(e, s, "blocklist", t);
            };
          },
          urlIsSafeListed: function (t) {
            return function (e, s) {
              return a(e, s, "safelist", t);
            };
          },
          messageIsIgnored: function (t) {
            return function (e, s) {
              var u, n, o, r, i, f;
              try {
                if (
                  !(o = s.ignoredMessages) ||
                  o.length === 0 ||
                  (f = (function (p) {
                    var m = p.body,
                      v = [];
                    if (m.trace_chain)
                      for (var y = m.trace_chain, d = 0; d < y.length; d++) {
                        var g = y[d];
                        v.push(l.get(g, "exception.message"));
                      }
                    return (
                      m.trace && v.push(l.get(m, "trace.exception.message")),
                      m.message && v.push(l.get(m, "message.body")),
                      v
                    );
                  })(e)).length === 0
                )
                  return !0;
                for (r = o.length, u = 0; u < r; u++)
                  for (i = new RegExp(o[u], "gi"), n = 0; n < f.length; n++)
                    if (i.test(f[n])) return !1;
              } catch {
                (s.ignoredMessages = null),
                  t.error(
                    "Error while reading your configuration's ignoredMessages option. Removing custom ignoredMessages.",
                  );
              }
              return !0;
            };
          },
        };
      },
      function (k, L, _) {
        "use strict";
        k.exports = {
          version: "2.26.2",
          endpoint: "api.rollbar.com/api/1/item/",
          logLevel: "debug",
          reportLevel: "debug",
          uncaughtErrorLevel: "error",
          maxItems: 0,
          itemsPerMin: 60,
        };
      },
      function (k, L, _) {
        "use strict";
        k.exports = {
          scrubFields: [
            "pw",
            "pass",
            "passwd",
            "password",
            "secret",
            "confirm_password",
            "confirmPassword",
            "password_confirmation",
            "passwordConfirmation",
            "access_token",
            "accessToken",
            "X-Rollbar-Access-Token",
            "secret_key",
            "secretKey",
            "secretToken",
            "cc-number",
            "card number",
            "cardnumber",
            "cardnum",
            "ccnum",
            "ccnumber",
            "cc num",
            "creditcardnumber",
            "credit card number",
            "newcreditcardnumber",
            "new credit card",
            "creditcardno",
            "credit card no",
            "card#",
            "card #",
            "cc-csc",
            "cvc",
            "cvc2",
            "cvv2",
            "ccv2",
            "security code",
            "card verification",
            "name on credit card",
            "name on card",
            "nameoncard",
            "cardholder",
            "card holder",
            "name des karteninhabers",
            "ccname",
            "card type",
            "cardtype",
            "cc type",
            "cctype",
            "payment type",
            "expiration date",
            "expirationdate",
            "expdate",
            "cc-exp",
            "ccmonth",
            "ccyear",
          ],
        };
      },
      function (k, L, _) {
        "use strict";
        var l = _(0);
        function c(t) {
          (this.queue = []), (this.options = l.merge(t));
          var e = this.options.maxTelemetryEvents || 100;
          this.maxQueueSize = Math.max(0, Math.min(e, 100));
        }
        function a(t, e) {
          return e || { error: "error", manual: "info" }[t] || "info";
        }
        (c.prototype.configure = function (t) {
          var e = this.options;
          this.options = l.merge(e, t);
          var s = this.options.maxTelemetryEvents || 100,
            u = Math.max(0, Math.min(s, 100)),
            n = 0;
          this.queue.length > u && (n = this.queue.length - u),
            (this.maxQueueSize = u),
            this.queue.splice(0, n);
        }),
          (c.prototype.copyEvents = function () {
            var t = Array.prototype.slice.call(this.queue, 0);
            if (l.isFunction(this.options.filterTelemetry))
              try {
                for (var e = t.length; e--; )
                  this.options.filterTelemetry(t[e]) && t.splice(e, 1);
              } catch {
                this.options.filterTelemetry = null;
              }
            return t;
          }),
          (c.prototype.capture = function (t, e, s, u, n) {
            var o = {
              level: a(t, s),
              type: t,
              timestamp_ms: n || l.now(),
              body: e,
              source: "client",
            };
            u && (o.uuid = u);
            try {
              if (
                l.isFunction(this.options.filterTelemetry) &&
                this.options.filterTelemetry(o)
              )
                return !1;
            } catch {
              this.options.filterTelemetry = null;
            }
            return this.push(o), o;
          }),
          (c.prototype.captureEvent = function (t, e, s, u) {
            return this.capture(t, e, s, u);
          }),
          (c.prototype.captureError = function (t, e, s, u) {
            var n = { message: t.message || String(t) };
            return (
              t.stack && (n.stack = t.stack), this.capture("error", n, e, s, u)
            );
          }),
          (c.prototype.captureLog = function (t, e, s, u) {
            return this.capture("log", { message: t }, e, s, u);
          }),
          (c.prototype.captureNetwork = function (t, e, s, u) {
            (e = e || "xhr"),
              (t.subtype = t.subtype || e),
              u && (t.request = u);
            var n = this.levelFromStatus(t.status_code);
            return this.capture("network", t, n, s);
          }),
          (c.prototype.levelFromStatus = function (t) {
            return t >= 200 && t < 400
              ? "info"
              : t === 0 || t >= 400
                ? "error"
                : "info";
          }),
          (c.prototype.captureDom = function (t, e, s, u, n) {
            var o = { subtype: t, element: e };
            return (
              s !== void 0 && (o.value = s),
              u !== void 0 && (o.checked = u),
              this.capture("dom", o, "info", n)
            );
          }),
          (c.prototype.captureNavigation = function (t, e, s) {
            return this.capture("navigation", { from: t, to: e }, "info", s);
          }),
          (c.prototype.captureDomContentLoaded = function (t) {
            return this.capture(
              "navigation",
              { subtype: "DOMContentLoaded" },
              "info",
              void 0,
              t && t.getTime(),
            );
          }),
          (c.prototype.captureLoad = function (t) {
            return this.capture(
              "navigation",
              { subtype: "load" },
              "info",
              void 0,
              t && t.getTime(),
            );
          }),
          (c.prototype.captureConnectivityChange = function (t, e) {
            return this.captureNetwork({ change: t }, "connectivity", e);
          }),
          (c.prototype._captureRollbarItem = function (t) {
            if (this.options.includeItemsInTelemetry)
              return t.err
                ? this.captureError(t.err, t.level, t.uuid, t.timestamp)
                : t.message
                  ? this.captureLog(t.message, t.level, t.uuid, t.timestamp)
                  : t.custom
                    ? this.capture(
                        "log",
                        t.custom,
                        t.level,
                        t.uuid,
                        t.timestamp,
                      )
                    : void 0;
          }),
          (c.prototype.push = function (t) {
            this.queue.push(t),
              this.queue.length > this.maxQueueSize && this.queue.shift();
          }),
          (k.exports = c);
      },
      function (k, L, _) {
        "use strict";
        var l = _(0),
          c = _(33),
          a = _(4),
          t = _(2),
          e = _(34),
          s = {
            network: !0,
            networkResponseHeaders: !1,
            networkResponseBody: !1,
            networkRequestHeaders: !1,
            networkRequestBody: !1,
            networkErrorOnHttp5xx: !1,
            networkErrorOnHttp4xx: !1,
            networkErrorOnHttp0: !1,
            log: !0,
            dom: !0,
            navigation: !0,
            connectivity: !0,
            contentSecurityPolicy: !0,
            errorOnContentSecurityPolicy: !1,
          };
        function u(r, i, f, p, m) {
          var v = r[i];
          (r[i] = f(v)), p && p[m].push([r, i, v]);
        }
        function n(r, i) {
          for (var f; r[i].length; ) (f = r[i].shift())[0][f[1]] = f[2];
        }
        function o(r, i, f, p, m) {
          this.options = r;
          var v = r.autoInstrument;
          r.enabled === !1 || v === !1
            ? (this.autoInstrument = {})
            : (l.isType(v, "object") || (v = s),
              (this.autoInstrument = l.merge(s, v))),
            (this.scrubTelemetryInputs = !!r.scrubTelemetryInputs),
            (this.telemetryScrubber = r.telemetryScrubber),
            (this.defaultValueScrubber = (function (y) {
              for (var d = [], g = 0; g < y.length; ++g)
                d.push(new RegExp(y[g], "i"));
              return function (x) {
                var w = (function (b) {
                  if (!b || !b.attributes) return null;
                  for (var E = b.attributes, I = 0; I < E.length; ++I)
                    if (E[I].key === "name") return E[I].value;
                  return null;
                })(x);
                if (!w) return !1;
                for (var h = 0; h < d.length; ++h) if (d[h].test(w)) return !0;
                return !1;
              };
            })(r.scrubFields)),
            (this.telemeter = i),
            (this.rollbar = f),
            (this.diagnostic = f.client.notifier.diagnostic),
            (this._window = p || {}),
            (this._document = m || {}),
            (this.replacements = {
              network: [],
              log: [],
              navigation: [],
              connectivity: [],
            }),
            (this.eventRemovers = {
              dom: [],
              connectivity: [],
              contentsecuritypolicy: [],
            }),
            (this._location = this._window.location),
            (this._lastHref = this._location && this._location.href);
        }
        (o.prototype.configure = function (r) {
          this.options = l.merge(this.options, r);
          var i = r.autoInstrument,
            f = l.merge(this.autoInstrument);
          r.enabled === !1 || i === !1
            ? (this.autoInstrument = {})
            : (l.isType(i, "object") || (i = s),
              (this.autoInstrument = l.merge(s, i))),
            this.instrument(f),
            r.scrubTelemetryInputs !== void 0 &&
              (this.scrubTelemetryInputs = !!r.scrubTelemetryInputs),
            r.telemetryScrubber !== void 0 &&
              (this.telemetryScrubber = r.telemetryScrubber);
        }),
          (o.prototype.instrument = function (r) {
            !this.autoInstrument.network || (r && r.network)
              ? !this.autoInstrument.network &&
                r &&
                r.network &&
                this.deinstrumentNetwork()
              : this.instrumentNetwork(),
              !this.autoInstrument.log || (r && r.log)
                ? !this.autoInstrument.log &&
                  r &&
                  r.log &&
                  this.deinstrumentConsole()
                : this.instrumentConsole(),
              !this.autoInstrument.dom || (r && r.dom)
                ? !this.autoInstrument.dom &&
                  r &&
                  r.dom &&
                  this.deinstrumentDom()
                : this.instrumentDom(),
              !this.autoInstrument.navigation || (r && r.navigation)
                ? !this.autoInstrument.navigation &&
                  r &&
                  r.navigation &&
                  this.deinstrumentNavigation()
                : this.instrumentNavigation(),
              !this.autoInstrument.connectivity || (r && r.connectivity)
                ? !this.autoInstrument.connectivity &&
                  r &&
                  r.connectivity &&
                  this.deinstrumentConnectivity()
                : this.instrumentConnectivity(),
              !this.autoInstrument.contentSecurityPolicy ||
              (r && r.contentSecurityPolicy)
                ? !this.autoInstrument.contentSecurityPolicy &&
                  r &&
                  r.contentSecurityPolicy &&
                  this.deinstrumentContentSecurityPolicy()
                : this.instrumentContentSecurityPolicy();
          }),
          (o.prototype.deinstrumentNetwork = function () {
            n(this.replacements, "network");
          }),
          (o.prototype.instrumentNetwork = function () {
            var r = this;
            function i(p, m) {
              p in m &&
                l.isFunction(m[p]) &&
                u(m, p, function (v) {
                  return r.rollbar.wrap(v);
                });
            }
            if ("XMLHttpRequest" in this._window) {
              var f = this._window.XMLHttpRequest.prototype;
              u(
                f,
                "open",
                function (p) {
                  return function (m, v) {
                    return (
                      l.isType(v, "string") &&
                        (this.__rollbar_xhr
                          ? ((this.__rollbar_xhr.method = m),
                            (this.__rollbar_xhr.url = v),
                            (this.__rollbar_xhr.status_code = null),
                            (this.__rollbar_xhr.start_time_ms = l.now()),
                            (this.__rollbar_xhr.end_time_ms = null))
                          : (this.__rollbar_xhr = {
                              method: m,
                              url: v,
                              status_code: null,
                              start_time_ms: l.now(),
                              end_time_ms: null,
                            })),
                      p.apply(this, arguments)
                    );
                  };
                },
                this.replacements,
                "network",
              ),
                u(
                  f,
                  "setRequestHeader",
                  function (p) {
                    return function (m, v) {
                      return (
                        this.__rollbar_xhr || (this.__rollbar_xhr = {}),
                        l.isType(m, "string") &&
                          l.isType(v, "string") &&
                          (r.autoInstrument.networkRequestHeaders &&
                            (this.__rollbar_xhr.request_headers ||
                              (this.__rollbar_xhr.request_headers = {}),
                            (this.__rollbar_xhr.request_headers[m] = v)),
                          m.toLowerCase() === "content-type" &&
                            (this.__rollbar_xhr.request_content_type = v)),
                        p.apply(this, arguments)
                      );
                    };
                  },
                  this.replacements,
                  "network",
                ),
                u(
                  f,
                  "send",
                  function (p) {
                    return function (m) {
                      var v = this;
                      function y() {
                        if (
                          v.__rollbar_xhr &&
                          (v.__rollbar_xhr.status_code === null &&
                            ((v.__rollbar_xhr.status_code = 0),
                            r.autoInstrument.networkRequestBody &&
                              (v.__rollbar_xhr.request = m),
                            (v.__rollbar_event = r.captureNetwork(
                              v.__rollbar_xhr,
                              "xhr",
                              void 0,
                            ))),
                          v.readyState < 2 &&
                            (v.__rollbar_xhr.start_time_ms = l.now()),
                          v.readyState > 3)
                        ) {
                          v.__rollbar_xhr.end_time_ms = l.now();
                          var d = null;
                          if (
                            ((v.__rollbar_xhr.response_content_type =
                              v.getResponseHeader("Content-Type")),
                            r.autoInstrument.networkResponseHeaders)
                          ) {
                            var g = r.autoInstrument.networkResponseHeaders;
                            d = {};
                            try {
                              var x, w;
                              if (g === !0) {
                                var h = v.getAllResponseHeaders();
                                if (h) {
                                  var b,
                                    E,
                                    I = h.trim().split(/[\r\n]+/);
                                  for (w = 0; w < I.length; w++)
                                    (x = (b = I[w].split(": ")).shift()),
                                      (E = b.join(": ")),
                                      (d[x] = E);
                                }
                              } else
                                for (w = 0; w < g.length; w++)
                                  d[(x = g[w])] = v.getResponseHeader(x);
                            } catch {}
                          }
                          var O = null;
                          if (r.autoInstrument.networkResponseBody)
                            try {
                              O = v.responseText;
                            } catch {}
                          var T = null;
                          (O || d) &&
                            ((T = {}),
                            O &&
                              (r.isJsonContentType(
                                v.__rollbar_xhr.response_content_type,
                              )
                                ? (T.body = r.scrubJson(O))
                                : (T.body = O)),
                            d && (T.headers = d)),
                            T && (v.__rollbar_xhr.response = T);
                          try {
                            var S = v.status;
                            (S = S === 1223 ? 204 : S),
                              (v.__rollbar_xhr.status_code = S),
                              (v.__rollbar_event.level =
                                r.telemeter.levelFromStatus(S)),
                              r.errorOnHttpStatus(v.__rollbar_xhr);
                          } catch {}
                        }
                      }
                      return (
                        i("onload", v),
                        i("onerror", v),
                        i("onprogress", v),
                        "onreadystatechange" in v &&
                        l.isFunction(v.onreadystatechange)
                          ? u(v, "onreadystatechange", function (d) {
                              return r.rollbar.wrap(d, void 0, y);
                            })
                          : (v.onreadystatechange = y),
                        v.__rollbar_xhr &&
                          r.trackHttpErrors() &&
                          (v.__rollbar_xhr.stack = new Error().stack),
                        p.apply(this, arguments)
                      );
                    };
                  },
                  this.replacements,
                  "network",
                );
            }
            "fetch" in this._window &&
              u(
                this._window,
                "fetch",
                function (p) {
                  return function (m, v) {
                    for (
                      var y = new Array(arguments.length), d = 0, g = y.length;
                      d < g;
                      d++
                    )
                      y[d] = arguments[d];
                    var x,
                      w = y[0],
                      h = "GET";
                    l.isType(w, "string")
                      ? (x = w)
                      : w && ((x = w.url), w.method && (h = w.method)),
                      y[1] && y[1].method && (h = y[1].method);
                    var b = {
                      method: h,
                      url: x,
                      status_code: null,
                      start_time_ms: l.now(),
                      end_time_ms: null,
                    };
                    if (y[1] && y[1].headers) {
                      var E = c(y[1].headers);
                      (b.request_content_type = E.get("Content-Type")),
                        r.autoInstrument.networkRequestHeaders &&
                          (b.request_headers = r.fetchHeaders(
                            E,
                            r.autoInstrument.networkRequestHeaders,
                          ));
                    }
                    return (
                      r.autoInstrument.networkRequestBody &&
                        (y[1] && y[1].body
                          ? (b.request = y[1].body)
                          : y[0] &&
                            !l.isType(y[0], "string") &&
                            y[0].body &&
                            (b.request = y[0].body)),
                      r.captureNetwork(b, "fetch", void 0),
                      r.trackHttpErrors() && (b.stack = new Error().stack),
                      p.apply(this, y).then(function (I) {
                        (b.end_time_ms = l.now()),
                          (b.status_code = I.status),
                          (b.response_content_type =
                            I.headers.get("Content-Type"));
                        var O = null;
                        r.autoInstrument.networkResponseHeaders &&
                          (O = r.fetchHeaders(
                            I.headers,
                            r.autoInstrument.networkResponseHeaders,
                          ));
                        var T = null;
                        return (
                          r.autoInstrument.networkResponseBody &&
                            typeof I.text == "function" &&
                            (T = I.clone().text()),
                          (O || T) &&
                            ((b.response = {}),
                            T &&
                              (typeof T.then == "function"
                                ? T.then(function (S) {
                                    S &&
                                    r.isJsonContentType(b.response_content_type)
                                      ? (b.response.body = r.scrubJson(S))
                                      : (b.response.body = S);
                                  })
                                : (b.response.body = T)),
                            O && (b.response.headers = O)),
                          r.errorOnHttpStatus(b),
                          I
                        );
                      })
                    );
                  };
                },
                this.replacements,
                "network",
              );
          }),
          (o.prototype.captureNetwork = function (r, i, f) {
            return (
              r.request &&
                this.isJsonContentType(r.request_content_type) &&
                (r.request = this.scrubJson(r.request)),
              this.telemeter.captureNetwork(r, i, f)
            );
          }),
          (o.prototype.isJsonContentType = function (r) {
            return !!(
              r &&
              l.isType(r, "string") &&
              r.toLowerCase().includes("json")
            );
          }),
          (o.prototype.scrubJson = function (r) {
            return JSON.stringify(a(JSON.parse(r), this.options.scrubFields));
          }),
          (o.prototype.fetchHeaders = function (r, i) {
            var f = {};
            try {
              var p;
              if (i === !0) {
                if (typeof r.entries == "function")
                  for (var m = r.entries(), v = m.next(); !v.done; )
                    (f[v.value[0]] = v.value[1]), (v = m.next());
              } else
                for (p = 0; p < i.length; p++) {
                  var y = i[p];
                  f[y] = r.get(y);
                }
            } catch {}
            return f;
          }),
          (o.prototype.trackHttpErrors = function () {
            return (
              this.autoInstrument.networkErrorOnHttp5xx ||
              this.autoInstrument.networkErrorOnHttp4xx ||
              this.autoInstrument.networkErrorOnHttp0
            );
          }),
          (o.prototype.errorOnHttpStatus = function (r) {
            var i = r.status_code;
            if (
              (i >= 500 && this.autoInstrument.networkErrorOnHttp5xx) ||
              (i >= 400 && this.autoInstrument.networkErrorOnHttp4xx) ||
              (i === 0 && this.autoInstrument.networkErrorOnHttp0)
            ) {
              var f = new Error("HTTP request failed with Status " + i);
              (f.stack = r.stack), this.rollbar.error(f, { skipFrames: 1 });
            }
          }),
          (o.prototype.deinstrumentConsole = function () {
            if ("console" in this._window && this._window.console.log)
              for (var r; this.replacements.log.length; )
                (r = this.replacements.log.shift()),
                  (this._window.console[r[0]] = r[1]);
          }),
          (o.prototype.instrumentConsole = function () {
            if ("console" in this._window && this._window.console.log) {
              var r = this,
                i = this._window.console,
                f = ["debug", "info", "warn", "error", "log"];
              try {
                for (var p = 0, m = f.length; p < m; p++) v(f[p]);
              } catch (y) {
                this.diagnostic.instrumentConsole = { error: y.message };
              }
            }
            function v(y) {
              var d = i[y],
                g = i,
                x = y === "warn" ? "warning" : y;
              (i[y] = function () {
                var w = Array.prototype.slice.call(arguments),
                  h = l.formatArgsAsString(w);
                r.telemeter.captureLog(h, x),
                  d && Function.prototype.apply.call(d, g, w);
              }),
                r.replacements.log.push([y, d]);
            }
          }),
          (o.prototype.deinstrumentDom = function () {
            ("addEventListener" in this._window ||
              "attachEvent" in this._window) &&
              this.removeListeners("dom");
          }),
          (o.prototype.instrumentDom = function () {
            if (
              "addEventListener" in this._window ||
              "attachEvent" in this._window
            ) {
              var r = this.handleClick.bind(this),
                i = this.handleBlur.bind(this);
              this.addListener("dom", this._window, "click", "onclick", r, !0),
                this.addListener(
                  "dom",
                  this._window,
                  "blur",
                  "onfocusout",
                  i,
                  !0,
                );
            }
          }),
          (o.prototype.handleClick = function (r) {
            try {
              var i = e.getElementFromEvent(r, this._document),
                f = i && i.tagName,
                p =
                  e.isDescribedElement(i, "a") ||
                  e.isDescribedElement(i, "button");
              f && (p || e.isDescribedElement(i, "input", ["button", "submit"]))
                ? this.captureDomEvent("click", i)
                : e.isDescribedElement(i, "input", ["checkbox", "radio"]) &&
                  this.captureDomEvent("input", i, i.value, i.checked);
            } catch {}
          }),
          (o.prototype.handleBlur = function (r) {
            try {
              var i = e.getElementFromEvent(r, this._document);
              i &&
                i.tagName &&
                (e.isDescribedElement(i, "textarea")
                  ? this.captureDomEvent("input", i, i.value)
                  : e.isDescribedElement(i, "select") &&
                      i.options &&
                      i.options.length
                    ? this.handleSelectInputChanged(i)
                    : e.isDescribedElement(i, "input") &&
                      !e.isDescribedElement(i, "input", [
                        "button",
                        "submit",
                        "hidden",
                        "checkbox",
                        "radio",
                      ]) &&
                      this.captureDomEvent("input", i, i.value));
            } catch {}
          }),
          (o.prototype.handleSelectInputChanged = function (r) {
            if (r.multiple)
              for (var i = 0; i < r.options.length; i++)
                r.options[i].selected &&
                  this.captureDomEvent("input", r, r.options[i].value);
            else
              r.selectedIndex >= 0 &&
                r.options[r.selectedIndex] &&
                this.captureDomEvent(
                  "input",
                  r,
                  r.options[r.selectedIndex].value,
                );
          }),
          (o.prototype.captureDomEvent = function (r, i, f, p) {
            if (f !== void 0)
              if (
                this.scrubTelemetryInputs ||
                e.getElementType(i) === "password"
              )
                f = "[scrubbed]";
              else {
                var m = e.describeElement(i);
                this.telemetryScrubber
                  ? this.telemetryScrubber(m) && (f = "[scrubbed]")
                  : this.defaultValueScrubber(m) && (f = "[scrubbed]");
              }
            var v = e.elementArrayToString(e.treeToArray(i));
            this.telemeter.captureDom(r, v, f, p);
          }),
          (o.prototype.deinstrumentNavigation = function () {
            var r = this._window.chrome;
            !(r && r.app && r.app.runtime) &&
              this._window.history &&
              this._window.history.pushState &&
              n(this.replacements, "navigation");
          }),
          (o.prototype.instrumentNavigation = function () {
            var r = this._window.chrome;
            if (
              !(r && r.app && r.app.runtime) &&
              this._window.history &&
              this._window.history.pushState
            ) {
              var i = this;
              u(
                this._window,
                "onpopstate",
                function (f) {
                  return function () {
                    var p = i._location.href;
                    i.handleUrlChange(i._lastHref, p),
                      f && f.apply(this, arguments);
                  };
                },
                this.replacements,
                "navigation",
              ),
                u(
                  this._window.history,
                  "pushState",
                  function (f) {
                    return function () {
                      var p = arguments.length > 2 ? arguments[2] : void 0;
                      return (
                        p && i.handleUrlChange(i._lastHref, p + ""),
                        f.apply(this, arguments)
                      );
                    };
                  },
                  this.replacements,
                  "navigation",
                );
            }
          }),
          (o.prototype.handleUrlChange = function (r, i) {
            var f = t.parse(this._location.href),
              p = t.parse(i),
              m = t.parse(r);
            (this._lastHref = i),
              f.protocol === p.protocol &&
                f.host === p.host &&
                (i = p.path + (p.hash || "")),
              f.protocol === m.protocol &&
                f.host === m.host &&
                (r = m.path + (m.hash || "")),
              this.telemeter.captureNavigation(r, i);
          }),
          (o.prototype.deinstrumentConnectivity = function () {
            ("addEventListener" in this._window || "body" in this._document) &&
              (this._window.addEventListener
                ? this.removeListeners("connectivity")
                : n(this.replacements, "connectivity"));
          }),
          (o.prototype.instrumentConnectivity = function () {
            if ("addEventListener" in this._window || "body" in this._document)
              if (this._window.addEventListener)
                this.addListener(
                  "connectivity",
                  this._window,
                  "online",
                  void 0,
                  function () {
                    this.telemeter.captureConnectivityChange("online");
                  }.bind(this),
                  !0,
                ),
                  this.addListener(
                    "connectivity",
                    this._window,
                    "offline",
                    void 0,
                    function () {
                      this.telemeter.captureConnectivityChange("offline");
                    }.bind(this),
                    !0,
                  );
              else {
                var r = this;
                u(
                  this._document.body,
                  "ononline",
                  function (i) {
                    return function () {
                      r.telemeter.captureConnectivityChange("online"),
                        i && i.apply(this, arguments);
                    };
                  },
                  this.replacements,
                  "connectivity",
                ),
                  u(
                    this._document.body,
                    "onoffline",
                    function (i) {
                      return function () {
                        r.telemeter.captureConnectivityChange("offline"),
                          i && i.apply(this, arguments);
                      };
                    },
                    this.replacements,
                    "connectivity",
                  );
              }
          }),
          (o.prototype.handleCspEvent = function (r) {
            var i =
              "Security Policy Violation: blockedURI: " +
              r.blockedURI +
              ", violatedDirective: " +
              r.violatedDirective +
              ", effectiveDirective: " +
              r.effectiveDirective +
              ", ";
            r.sourceFile &&
              (i +=
                "location: " +
                r.sourceFile +
                ", line: " +
                r.lineNumber +
                ", col: " +
                r.columnNumber +
                ", "),
              (i += "originalPolicy: " + r.originalPolicy),
              this.telemeter.captureLog(i, "error"),
              this.handleCspError(i);
          }),
          (o.prototype.handleCspError = function (r) {
            this.autoInstrument.errorOnContentSecurityPolicy &&
              this.rollbar.error(r);
          }),
          (o.prototype.deinstrumentContentSecurityPolicy = function () {
            "addEventListener" in this._document &&
              this.removeListeners("contentsecuritypolicy");
          }),
          (o.prototype.instrumentContentSecurityPolicy = function () {
            if ("addEventListener" in this._document) {
              var r = this.handleCspEvent.bind(this);
              this.addListener(
                "contentsecuritypolicy",
                this._document,
                "securitypolicyviolation",
                null,
                r,
                !1,
              );
            }
          }),
          (o.prototype.addListener = function (r, i, f, p, m, v) {
            i.addEventListener
              ? (i.addEventListener(f, m, v),
                this.eventRemovers[r].push(function () {
                  i.removeEventListener(f, m, v);
                }))
              : p &&
                (i.attachEvent(p, m),
                this.eventRemovers[r].push(function () {
                  i.detachEvent(p, m);
                }));
          }),
          (o.prototype.removeListeners = function (r) {
            for (; this.eventRemovers[r].length; )
              this.eventRemovers[r].shift()();
          }),
          (k.exports = o);
      },
      function (k, L, _) {
        "use strict";
        function l(a) {
          return typeof a != "string" && (a = String(a)), a.toLowerCase();
        }
        function c(a) {
          (this.map = {}),
            a instanceof c
              ? a.forEach(function (t, e) {
                  this.append(e, t);
                }, this)
              : Array.isArray(a)
                ? a.forEach(function (t) {
                    this.append(t[0], t[1]);
                  }, this)
                : a &&
                  Object.getOwnPropertyNames(a).forEach(function (t) {
                    this.append(t, a[t]);
                  }, this);
        }
        (c.prototype.append = function (a, t) {
          (a = l(a)),
            (t = (function (s) {
              return typeof s != "string" && (s = String(s)), s;
            })(t));
          var e = this.map[a];
          this.map[a] = e ? e + ", " + t : t;
        }),
          (c.prototype.get = function (a) {
            return (a = l(a)), this.has(a) ? this.map[a] : null;
          }),
          (c.prototype.has = function (a) {
            return this.map.hasOwnProperty(l(a));
          }),
          (c.prototype.forEach = function (a, t) {
            for (var e in this.map)
              this.map.hasOwnProperty(e) && a.call(t, this.map[e], e, this);
          }),
          (c.prototype.entries = function () {
            var a = [];
            return (
              this.forEach(function (t, e) {
                a.push([e, t]);
              }),
              (function (t) {
                return {
                  next: function () {
                    var e = t.shift();
                    return { done: e === void 0, value: e };
                  },
                };
              })(a)
            );
          }),
          (k.exports = function (a) {
            return typeof Headers > "u" ? new c(a) : new Headers(a);
          });
      },
      function (k, L, _) {
        "use strict";
        function l(t) {
          return (t.getAttribute("type") || "").toLowerCase();
        }
        function c(t) {
          if (!t || !t.tagName) return "";
          var e = [t.tagName];
          t.id && e.push("#" + t.id),
            t.classes && e.push("." + t.classes.join("."));
          for (var s = 0; s < t.attributes.length; s++)
            e.push(
              "[" + t.attributes[s].key + '="' + t.attributes[s].value + '"]',
            );
          return e.join("");
        }
        function a(t) {
          if (!t || !t.tagName) return null;
          var e,
            s,
            u,
            n,
            o = {};
          (o.tagName = t.tagName.toLowerCase()),
            t.id && (o.id = t.id),
            (e = t.className) &&
              typeof e == "string" &&
              (o.classes = e.split(/\s+/));
          var r = ["type", "name", "title", "alt"];
          for (o.attributes = [], n = 0; n < r.length; n++)
            (s = r[n]),
              (u = t.getAttribute(s)) &&
                o.attributes.push({ key: s, value: u });
          return o;
        }
        k.exports = {
          describeElement: a,
          descriptionToString: c,
          elementArrayToString: function (t) {
            for (
              var e, s, u = 3, n = [], o = 0, r = t.length - 1;
              r >= 0;
              r--
            ) {
              if (
                ((e = c(t[r])),
                (s = o + n.length * u + e.length),
                r < t.length - 1 && s >= 83)
              ) {
                n.unshift("...");
                break;
              }
              n.unshift(e), (o += e.length);
            }
            return n.join(" > ");
          },
          treeToArray: function (t) {
            for (
              var e, s = [], u = 0;
              t && u < 5 && (e = a(t)).tagName !== "html";
              u++
            )
              s.unshift(e), (t = t.parentNode);
            return s;
          },
          getElementFromEvent: function (t, e) {
            return t.target
              ? t.target
              : e && e.elementFromPoint
                ? e.elementFromPoint(t.clientX, t.clientY)
                : void 0;
          },
          isDescribedElement: function (t, e, s) {
            if (t.tagName.toLowerCase() !== e.toLowerCase()) return !1;
            if (!s) return !0;
            t = l(t);
            for (var u = 0; u < s.length; u++) if (s[u] === t) return !0;
            return !1;
          },
          getElementType: l,
        };
      },
      function (k, L, _) {
        "use strict";
        var l = _(36);
        k.exports = l;
      },
      function (k, L) {
        k.exports = function (_) {
          var l,
            c,
            a,
            t,
            e,
            s,
            u,
            n,
            o,
            r,
            i,
            f,
            p,
            m =
              /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
          function v(g) {
            return g < 10 ? "0" + g : g;
          }
          function y() {
            return this.valueOf();
          }
          function d(g) {
            return (
              (m.lastIndex = 0),
              m.test(g)
                ? '"' +
                  g.replace(m, function (x) {
                    var w = a[x];
                    return typeof w == "string"
                      ? w
                      : "\\u" +
                          ("0000" + x.charCodeAt(0).toString(16)).slice(-4);
                  }) +
                  '"'
                : '"' + g + '"'
            );
          }
          typeof Date.prototype.toJSON != "function" &&
            ((Date.prototype.toJSON = function () {
              return isFinite(this.valueOf())
                ? this.getUTCFullYear() +
                    "-" +
                    v(this.getUTCMonth() + 1) +
                    "-" +
                    v(this.getUTCDate()) +
                    "T" +
                    v(this.getUTCHours()) +
                    ":" +
                    v(this.getUTCMinutes()) +
                    ":" +
                    v(this.getUTCSeconds()) +
                    "Z"
                : null;
            }),
            (Boolean.prototype.toJSON = y),
            (Number.prototype.toJSON = y),
            (String.prototype.toJSON = y)),
            typeof _.stringify != "function" &&
              ((a = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\",
              }),
              (_.stringify = function (g, x, w) {
                var h;
                if (((l = ""), (c = ""), typeof w == "number"))
                  for (h = 0; h < w; h += 1) c += " ";
                else typeof w == "string" && (c = w);
                if (
                  ((t = x),
                  x &&
                    typeof x != "function" &&
                    (typeof x != "object" || typeof x.length != "number"))
                )
                  throw new Error("JSON.stringify");
                return (function b(E, I) {
                  var O,
                    T,
                    S,
                    C,
                    R,
                    P = l,
                    N = I[E];
                  switch (
                    (N &&
                      typeof N == "object" &&
                      typeof N.toJSON == "function" &&
                      (N = N.toJSON(E)),
                    typeof t == "function" && (N = t.call(I, E, N)),
                    typeof N)
                  ) {
                    case "string":
                      return d(N);
                    case "number":
                      return isFinite(N) ? String(N) : "null";
                    case "boolean":
                    case "null":
                      return String(N);
                    case "object":
                      if (!N) return "null";
                      if (
                        ((l += c),
                        (R = []),
                        Object.prototype.toString.apply(N) === "[object Array]")
                      ) {
                        for (C = N.length, O = 0; O < C; O += 1)
                          R[O] = b(O, N) || "null";
                        return (
                          (S =
                            R.length === 0
                              ? "[]"
                              : l
                                ? `[
` +
                                  l +
                                  R.join(
                                    `,
` + l,
                                  ) +
                                  `
` +
                                  P +
                                  "]"
                                : "[" + R.join(",") + "]"),
                          (l = P),
                          S
                        );
                      }
                      if (t && typeof t == "object")
                        for (C = t.length, O = 0; O < C; O += 1)
                          typeof t[O] == "string" &&
                            (S = b((T = t[O]), N)) &&
                            R.push(d(T) + (l ? ": " : ":") + S);
                      else
                        for (T in N)
                          Object.prototype.hasOwnProperty.call(N, T) &&
                            (S = b(T, N)) &&
                            R.push(d(T) + (l ? ": " : ":") + S);
                      return (
                        (S =
                          R.length === 0
                            ? "{}"
                            : l
                              ? `{
` +
                                l +
                                R.join(
                                  `,
` + l,
                                ) +
                                `
` +
                                P +
                                "}"
                              : "{" + R.join(",") + "}"),
                        (l = P),
                        S
                      );
                  }
                })("", { "": g });
              })),
            typeof _.parse != "function" &&
              (_.parse =
                ((r = {
                  "\\": "\\",
                  '"': '"',
                  "/": "/",
                  t: "	",
                  n: `
`,
                  r: "\r",
                  f: "\f",
                  b: "\b",
                }),
                (i = {
                  go: function () {
                    e = "ok";
                  },
                  firstokey: function () {
                    (n = o), (e = "colon");
                  },
                  okey: function () {
                    (n = o), (e = "colon");
                  },
                  ovalue: function () {
                    e = "ocomma";
                  },
                  firstavalue: function () {
                    e = "acomma";
                  },
                  avalue: function () {
                    e = "acomma";
                  },
                }),
                (f = {
                  go: function () {
                    e = "ok";
                  },
                  ovalue: function () {
                    e = "ocomma";
                  },
                  firstavalue: function () {
                    e = "acomma";
                  },
                  avalue: function () {
                    e = "acomma";
                  },
                }),
                (p = {
                  "{": {
                    go: function () {
                      s.push({ state: "ok" }), (u = {}), (e = "firstokey");
                    },
                    ovalue: function () {
                      s.push({ container: u, state: "ocomma", key: n }),
                        (u = {}),
                        (e = "firstokey");
                    },
                    firstavalue: function () {
                      s.push({ container: u, state: "acomma" }),
                        (u = {}),
                        (e = "firstokey");
                    },
                    avalue: function () {
                      s.push({ container: u, state: "acomma" }),
                        (u = {}),
                        (e = "firstokey");
                    },
                  },
                  "}": {
                    firstokey: function () {
                      var g = s.pop();
                      (o = u), (u = g.container), (n = g.key), (e = g.state);
                    },
                    ocomma: function () {
                      var g = s.pop();
                      (u[n] = o),
                        (o = u),
                        (u = g.container),
                        (n = g.key),
                        (e = g.state);
                    },
                  },
                  "[": {
                    go: function () {
                      s.push({ state: "ok" }), (u = []), (e = "firstavalue");
                    },
                    ovalue: function () {
                      s.push({ container: u, state: "ocomma", key: n }),
                        (u = []),
                        (e = "firstavalue");
                    },
                    firstavalue: function () {
                      s.push({ container: u, state: "acomma" }),
                        (u = []),
                        (e = "firstavalue");
                    },
                    avalue: function () {
                      s.push({ container: u, state: "acomma" }),
                        (u = []),
                        (e = "firstavalue");
                    },
                  },
                  "]": {
                    firstavalue: function () {
                      var g = s.pop();
                      (o = u), (u = g.container), (n = g.key), (e = g.state);
                    },
                    acomma: function () {
                      var g = s.pop();
                      u.push(o),
                        (o = u),
                        (u = g.container),
                        (n = g.key),
                        (e = g.state);
                    },
                  },
                  ":": {
                    colon: function () {
                      if (Object.hasOwnProperty.call(u, n))
                        throw new SyntaxError("Duplicate key '" + n + '"');
                      e = "ovalue";
                    },
                  },
                  ",": {
                    ocomma: function () {
                      (u[n] = o), (e = "okey");
                    },
                    acomma: function () {
                      u.push(o), (e = "avalue");
                    },
                  },
                  true: {
                    go: function () {
                      (o = !0), (e = "ok");
                    },
                    ovalue: function () {
                      (o = !0), (e = "ocomma");
                    },
                    firstavalue: function () {
                      (o = !0), (e = "acomma");
                    },
                    avalue: function () {
                      (o = !0), (e = "acomma");
                    },
                  },
                  false: {
                    go: function () {
                      (o = !1), (e = "ok");
                    },
                    ovalue: function () {
                      (o = !1), (e = "ocomma");
                    },
                    firstavalue: function () {
                      (o = !1), (e = "acomma");
                    },
                    avalue: function () {
                      (o = !1), (e = "acomma");
                    },
                  },
                  null: {
                    go: function () {
                      (o = null), (e = "ok");
                    },
                    ovalue: function () {
                      (o = null), (e = "ocomma");
                    },
                    firstavalue: function () {
                      (o = null), (e = "acomma");
                    },
                    avalue: function () {
                      (o = null), (e = "acomma");
                    },
                  },
                }),
                function (g, x) {
                  var w,
                    h,
                    b =
                      /^[\u0020\t\n\r]*(?:([,:\[\]{}]|true|false|null)|(-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)|"((?:[^\r\n\t\\\"]|\\(?:["\\\/trnfb]|u[0-9a-fA-F]{4}))*)")/;
                  (e = "go"), (s = []);
                  try {
                    for (; (w = b.exec(g)); )
                      w[1]
                        ? p[w[1]][e]()
                        : w[2]
                          ? ((o = +w[2]), f[e]())
                          : ((h = w[3]),
                            (o = h.replace(
                              /\\(?:u(.{4})|([^u]))/g,
                              function (E, I, O) {
                                return I
                                  ? String.fromCharCode(parseInt(I, 16))
                                  : r[O];
                              },
                            )),
                            i[e]()),
                        (g = g.slice(w[0].length));
                  } catch (E) {
                    e = E;
                  }
                  if (e !== "ok" || /[^\u0020\t\n\r]/.test(g))
                    throw e instanceof SyntaxError
                      ? e
                      : new SyntaxError("JSON");
                  return typeof x == "function"
                    ? (function E(I, O) {
                        var T,
                          S,
                          C = I[O];
                        if (C && typeof C == "object")
                          for (T in o)
                            Object.prototype.hasOwnProperty.call(C, T) &&
                              ((S = E(C, T)) !== void 0
                                ? (C[T] = S)
                                : delete C[T]);
                        return x.call(I, O, C);
                      })({ "": o }, "")
                    : o;
                }));
        };
      },
      function (k, L, _) {
        "use strict";
        function l(c, a, t) {
          if (a.hasOwnProperty && a.hasOwnProperty("addEventListener")) {
            for (
              var e = a.addEventListener;
              e._rollbarOldAdd && e.belongsToShim;

            )
              e = e._rollbarOldAdd;
            var s = function (o, r, i) {
              e.call(this, o, c.wrap(r), i);
            };
            (s._rollbarOldAdd = e),
              (s.belongsToShim = t),
              (a.addEventListener = s);
            for (
              var u = a.removeEventListener;
              u._rollbarOldRemove && u.belongsToShim;

            )
              u = u._rollbarOldRemove;
            var n = function (o, r, i) {
              u.call(this, o, (r && r._rollbar_wrapped) || r, i);
            };
            (n._rollbarOldRemove = u),
              (n.belongsToShim = t),
              (a.removeEventListener = n);
          }
        }
        k.exports = function (c, a, t) {
          if (c) {
            var e,
              s,
              u =
                "EventTarget,Window,Node,ApplicationCache,AudioTrackList,ChannelMergerNode,CryptoOperation,EventSource,FileReader,HTMLUnknownElement,IDBDatabase,IDBRequest,IDBTransaction,KeyOperation,MediaController,MessagePort,ModalWindow,Notification,SVGElementInstance,Screen,TextTrack,TextTrackCue,TextTrackList,WebSocket,WebSocketWorker,Worker,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload".split(
                  ",",
                );
            for (e = 0; e < u.length; ++e)
              c[(s = u[e])] && c[s].prototype && l(a, c[s].prototype, t);
          }
        };
      },
      function (k, L, _) {
        "use strict";
        var l = _(0),
          c = _(5);
        function a(i, f) {
          return [i, l.stringify(i, f)];
        }
        function t(i, f) {
          var p = i.length;
          return p > 2 * f ? i.slice(0, f).concat(i.slice(p - f)) : i;
        }
        function e(i, f, p) {
          p = p === void 0 ? 30 : p;
          var m,
            v = i.data.body;
          if (v.trace_chain)
            for (var y = v.trace_chain, d = 0; d < y.length; d++)
              (m = t((m = y[d].frames), p)), (y[d].frames = m);
          else
            v.trace && ((m = t((m = v.trace.frames), p)), (v.trace.frames = m));
          return [i, l.stringify(i, f)];
        }
        function s(i, f) {
          return f && f.length > i ? f.slice(0, i - 3).concat("...") : f;
        }
        function u(i, f, p) {
          return [
            (f = c(f, function m(v, y, d) {
              switch (l.typeName(y)) {
                case "string":
                  return s(i, y);
                case "object":
                case "array":
                  return c(y, m, d);
                default:
                  return y;
              }
            })),
            l.stringify(f, p),
          ];
        }
        function n(i) {
          return (
            i.exception &&
              (delete i.exception.description,
              (i.exception.message = s(255, i.exception.message))),
            (i.frames = t(i.frames, 1)),
            i
          );
        }
        function o(i, f) {
          var p = i.data.body;
          if (p.trace_chain)
            for (var m = p.trace_chain, v = 0; v < m.length; v++)
              m[v] = n(m[v]);
          else p.trace && (p.trace = n(p.trace));
          return [i, l.stringify(i, f)];
        }
        function r(i, f) {
          return l.maxByteSize(i) > f;
        }
        k.exports = {
          truncate: function (i, f, p) {
            p = p === void 0 ? 524288 : p;
            for (
              var m,
                v,
                y,
                d = [
                  a,
                  e,
                  u.bind(null, 1024),
                  u.bind(null, 512),
                  u.bind(null, 256),
                  o,
                ];
              (m = d.shift());

            )
              if (((i = (v = m(i, f))[0]), (y = v[1]).error || !r(y.value, p)))
                return y;
            return y;
          },
          raw: a,
          truncateFrames: e,
          truncateStrings: u,
          maybeTruncateValue: s,
        };
      },
    ]);
  });
});
var B = V(M()),
  J = {
    hydrationErrors: {
      shouldFilter: window.ENV.ROLLBAR_FILTER_HYDRATION_ERRORS || !1,
      ignoreList: [
        /Minified React error #418/,
        /Minified React error #423/,
        /Minified React error #425/,
      ],
    },
    jsErrors: {
      shouldFilter: !0,
      ignoreList: [
        /The user aborted a request/,
        /Fetch is aborted/,
        /Unexpected token ';'/,
        /Script error/,
        /Cannot read properties of undefined \(reading 'parentNode'\)/,
        /ResizeObserver loop completed with undelivered notifications/,
        /Load failed/,
        /Identifier 'originalPrompt' has already been declared/,
        /Cannot read properties of undefined \(reading '(fireEvent|setScreenSize|setMaxSize|setDefaultPosition|setCurrentPosition|fireChangeEvent|audioVolumeChange|fireReadyEvent)'\)/,
        /ethereum/,
        /Identifier 'listenerName' has already been declared/,
        /evaluating 'a.L'/,
        /zaloJSV2/,
        /supportedSites/,
        /AbortSignal.timeout is not a function/,
        /Maximum call stack size exceeded/,
      ],
    },
  },
  $ = {
    accessToken: window.ENV.ROLLBAR_POST_CLIENT_ITEM_TOKEN,
    captureUncaught: !0,
    captureUnhandledRejections: !1,
    transmit: window.ENV.ROLLBAR_FE_ENABLED,
    environment: window.ENV.ROLLBAR_ENV,
    payload: {
      client: {
        javascript: {
          source_map_enabled: !0,
          code_version: window.ENV.LOTUS_GIT_COMMIT,
          guess_uncaught_frames: !0,
        },
      },
    },
    checkIgnore: (k, L, _) => {
      var c, a, t;
      let l = (e) =>
        [
          /^chrome-extension/,
          /^safari-extension/,
          /^moz-extension/,
          /^pptr/,
        ].some((u) => u.test(e.filename));
      return (
        ((t =
          (a = (c = _.body) == null ? void 0 : c.trace) == null
            ? void 0
            : a.frames) == null
          ? void 0
          : t.some(l)) || !1
      );
    },
    ignoredMessages: J.jsErrors.shouldFilter ? J.jsErrors.ignoreList : [],
  },
  X = new B.default($),
  G = X;
export { J as a, G as b };
//# sourceMappingURL=https://job-boards.cdn.greenhouse.io/build/_shared/chunk-SJFLVUQV.js.map
