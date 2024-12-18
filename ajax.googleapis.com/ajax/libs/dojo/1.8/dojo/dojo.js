/*
	Copyright (c) 2004-2012, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

/*
	This is an optimized version of Dojo, built for deployment and not for
	development. To get sources and documentation, please visit:

		http://dojotoolkit.org
*/

//>>built
(function (b, k) {
  var f,
    n,
    m = function () {},
    o = function (a) {
      for (var b in a) return 0;
      return 1;
    },
    p = {}.toString,
    j = function (a) {
      return "[object Function]" == p.call(a);
    },
    i = function (a) {
      return "[object String]" == p.call(a);
    },
    a = function (a) {
      return "[object Array]" == p.call(a);
    },
    d = function (a, b) {
      if (a) for (var c = 0; c < a.length; ) b(a[c++]);
    },
    c = function (a, b) {
      for (var c in b) a[c] = b[c];
      return a;
    },
    e = function (a, b) {
      return c(Error(a), { src: "dojoLoader", info: b });
    },
    g = 1,
    l = function () {
      return "_" + g++;
    },
    h = function (a, b, c) {
      return Ha(a, b, c, 0, h);
    },
    r = this,
    q = r.document,
    t = q && q.createElement("DiV"),
    s = (h.has = function (a) {
      return j(x[a]) ? (x[a] = x[a](r, q, t)) : x[a];
    }),
    x = (s.cache = k.hasCache);
  s.add = function (a, b, c, e) {
    (void 0 === x[a] || e) && (x[a] = b);
    return c && s(a);
  };
  for (var v in b.has) s.add(v, b.has[v], 0, 1);
  var u = 0,
    w = [],
    H = 0,
    F = m,
    P = m,
    I;
  h.isXdUrl = m;
  h.initSyncLoader = function (a, b, c) {
    H || ((H = a), (F = b), (P = c));
    return {
      sync: "sync",
      requested: 1,
      arrived: 2,
      nonmodule: 3,
      executing: 4,
      executed: 5,
      syncExecStack: w,
      modules: y,
      execQ: M,
      getModule: R,
      injectModule: la,
      setArrived: Y,
      signal: E,
      finishExec: aa,
      execModule: ba,
      dojoRequirePlugin: H,
      getLegacyMode: function () {
        return u;
      },
      guardCheckComplete: ca,
    };
  };
  var N = location.protocol,
    V = location.host;
  h.isXdUrl = function (a) {
    if (/^\./.test(a)) return !1;
    return /^\/\//.test(a)
      ? !0
      : (a = a.match(/^([^\/\:]+\:)\/+([^\/]+)/)) &&
          (a[1] != N || (V && a[2] != V));
  };
  s.add(
    "dojo-force-activex-xhr",
    !q.addEventListener && "file:" == window.location.protocol,
  );
  s.add("native-xhr", "undefined" != typeof XMLHttpRequest);
  if (s("native-xhr") && !s("dojo-force-activex-xhr"))
    I = function () {
      return new XMLHttpRequest();
    };
  else {
    var z = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
      B;
    for (f = 0; 3 > f; )
      try {
        if (((B = z[f++]), new ActiveXObject(B))) break;
      } catch (K) {}
    I = function () {
      return new ActiveXObject(B);
    };
  }
  h.getXhr = I;
  s.add("dojo-gettext-api", 1);
  h.getText = function (a, b, c) {
    var d = I();
    d.open("GET", ma(a), !1);
    d.send(null);
    if (200 == d.status || (!location.host && !d.status))
      c && c(d.responseText, b);
    else throw e("xhrFailed", d.status);
    return d.responseText;
  };
  var D = new Function("return eval(arguments[0]);");
  h.eval = function (a, b) {
    return D(a + "\r\n////@ sourceURL=" + b);
  };
  var G = {},
    E = (h.signal = function (b, c) {
      var e = G[b];
      d(e && e.slice(0), function (b) {
        b.apply(null, a(c) ? c : [c]);
      });
    }),
    da = (h.on = function (a, b) {
      var c = G[a] || (G[a] = []);
      c.push(b);
      return {
        remove: function () {
          for (var a = 0; a < c.length; a++)
            if (c[a] === b) {
              c.splice(a, 1);
              break;
            }
        },
      };
    }),
    Q = [],
    W = {},
    L = [],
    C = {},
    S = (h.map = {}),
    A = [],
    y = {},
    ea = "",
    J = {},
    Z = {},
    T = {},
    na = function (a) {
      var b, c, e, d;
      for (b in Z)
        (c = Z[b]),
          (e = b.match(/^url\:(.+)/))
            ? (J["url:" + Ia(e[1], a)] = c)
            : "*now" == b
              ? (d = c)
              : "*noref" != b &&
                ((e = fa(b, a)), (J[e.mid] = J["url:" + e.url] = c));
      d && d(xa(a));
      Z = {};
    },
    Ja = function (a) {
      return a.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, function (a) {
        return "\\" + a;
      });
    },
    ya = function (a, b) {
      b.splice(0, b.length);
      for (var c in a)
        b.push([c, a[c], RegExp("^" + Ja(c) + "(/|$)"), c.length]);
      b.sort(function (a, b) {
        return b[3] - a[3];
      });
      return b;
    },
    Ka = function (a) {
      var b = a.name;
      b || ((b = a), (a = { name: b }));
      a = c({ main: "main" }, a);
      a.location = a.location ? a.location : b;
      if (a.packageMap) S[b] = a.packageMap;
      if (!a.main.indexOf("./")) a.main = a.main.substring(2);
      C[b] = a;
    },
    La = [],
    ga = function (a, b, e) {
      for (var l in a) {
        if ("waitSeconds" == l) h.waitms = 1e3 * (a[l] || 0);
        "cacheBust" == l &&
          (ea = a[l] ? (i(a[l]) ? a[l] : new Date().getTime() + "") : "");
        if ("baseUrl" == l || "combo" == l) h[l] = a[l];
        if ("async" == l) {
          var g = a[l];
          h.legacyMode = u =
            i(g) && /sync|legacyAsync/.test(g) ? g : !g ? "sync" : !1;
          h.async = !u;
        }
        a[l] !== x &&
          ((h.rawConfig[l] = a[l]),
          "has" != l && s.add("config-" + l, a[l], 0, b));
      }
      if (!h.baseUrl) h.baseUrl = "./";
      /\/$/.test(h.baseUrl) || (h.baseUrl += "/");
      for (l in a.has) s.add(l, a.has[l], 0, b);
      d(a.packages, Ka);
      for (n in a.packagePaths)
        d(a.packagePaths[n], function (a) {
          var b = n + "/" + a;
          i(a) && (a = { name: a });
          a.location = b;
          Ka(a);
        });
      ya(c(S, a.map), A);
      d(A, function (a) {
        a[1] = ya(a[1], []);
        if ("*" == a[0]) A.star = a;
      });
      ya(c(W, a.paths), L);
      d(a.aliases, function (a) {
        i(a[0]) && (a[0] = RegExp("^" + Ja(a[0]) + "$"));
        Q.push(a);
      });
      if (b) La.push({ config: a.config });
      else
        for (l in a.config)
          (b = R(l, e)), (b.config = c(b.config || {}, a.config[l]));
      if (a.cache) na(), (Z = a.cache), a.cache["*noref"] && na();
      E("config", [a, h.rawConfig]);
    };
  s("dojo-cdn");
  var Ma = q.getElementsByTagName("script");
  f = 0;
  for (var oa, X, pa, ha; f < Ma.length; )
    if (
      ((oa = Ma[f++]),
      (pa = oa.getAttribute("src")) &&
        (ha = pa.match(/(((.*)\/)|^)dojo\.js(\W|$)/i)))
    ) {
      X = ha[3] || "";
      k.baseUrl = k.baseUrl || X;
      (pa =
        oa.getAttribute("data-dojo-config") || oa.getAttribute("djConfig")) &&
        (T = h.eval("({ " + pa + " })", "data-dojo-config"));
      break;
    }
  h.rawConfig = {};
  ga(k, 1);
  if (s("dojo-cdn"))
    (C.dojo.location = X) && (X += "/"),
      (C.dijit.location = X + "../dijit/"),
      (C.dojox.location = X + "../dojox/");
  ga(b, 1);
  ga(T, 1);
  var ia = function (a) {
      ca(function () {
        d(a.deps, la);
      });
    },
    Ha = function (b, d, g, j, o) {
      var r;
      if (i(b)) {
        if ((r = R(b, j, !0)) && r.executed) return r.result;
        throw e("undefinedModule", b);
      }
      a(b) || (ga(b, 0, j), (b = d), (d = g));
      if (a(b))
        if (b.length) {
          for (var g = "require*" + l(), p, f = [], t = 0; t < b.length; )
            (p = b[t++]), f.push(R(p, j));
          r = c(qa("", g, 0, ""), {
            injected: 2,
            deps: f,
            def: d || m,
            require: j ? j.require : h,
            gc: 1,
          });
          y[r.mid] = r;
          ia(r);
          var k = ja && "sync" != u;
          ca(function () {
            ba(r, k);
          });
          r.executed || M.push(r);
          $();
        } else d && d();
      return o;
    },
    xa = function (a) {
      if (!a) return h;
      var b = a.require;
      if (!b)
        (b = function (c, e, d) {
          return Ha(c, e, d, a, b);
        }),
          (a.require = c(b, h)),
          (b.module = a),
          (b.toUrl = function (b) {
            return Ia(b, a);
          }),
          (b.toAbsMid = function (b) {
            return za(b, a);
          }),
          (b.syncLoadNls = function (b) {
            var b = fa(b, a),
              c = y[b.mid];
            if (!c || !c.executed)
              if ((U = J[b.mid] || J["url:" + b.url])) ra(U), (c = y[b.mid]);
            return c && c.executed && c.result;
          });
      return b;
    },
    M = [],
    sa = [],
    O = {},
    Ya = function (a) {
      a.injected = 1;
      O[a.mid] = 1;
      a.url && (O[a.url] = a.pack || 1);
      Na();
    },
    Y = function (a) {
      a.injected = 2;
      delete O[a.mid];
      a.url && delete O[a.url];
      o(O) && (ta(), "xd" == u && (u = "sync"));
    },
    Za = (h.idle = function () {
      return !sa.length && o(O) && !M.length && !ja;
    }),
    Aa = function (a, b) {
      if (b)
        for (var c = 0; c < b.length; c++) if (b[c][2].test(a)) return b[c];
      return 0;
    },
    Oa = function (a) {
      for (var b = [], c, e, a = a.replace(/\\/g, "/").split("/"); a.length; )
        (c = a.shift()),
          ".." == c && b.length && ".." != e
            ? (b.pop(), (e = b[b.length - 1]))
            : "." != c && b.push((e = c));
      return b.join("/");
    },
    qa = function (a, b, c, e) {
      var d = h.isXdUrl(e);
      return {
        pid: a,
        mid: b,
        pack: c,
        url: e,
        executed: 0,
        def: 0,
        isXd: d,
        isAmd: !!(d || (C[a] && C[a].isAmd)),
      };
    },
    Pa = function (a, b, c, h, l, g, i, o) {
      var r, p, f, m;
      m = /^\./.test(a);
      if (/(^\/)|(\:)|(\.js$)/.test(a) || (m && !b)) return qa(0, a, 0, a);
      a = Oa(m ? b.mid + "/../" + a : a);
      if (/^\./.test(a)) throw e("irrationalPath", a);
      b && (f = Aa(b.mid, g));
      (f = (f = f || g.star) && Aa(a, f[1])) && (a = f[1] + a.substring(f[3]));
      b = (ha = a.match(/^([^\/]+)(\/(.+))?$/)) ? ha[1] : "";
      (r = c[b]) ? (a = b + "/" + (p = ha[3] || r.main)) : (b = "");
      var t = 0;
      d(Q, function (b) {
        var c = a.match(b[0]);
        c && 0 < c.length && (t = j(b[1]) ? a.replace(b[0], b[1]) : b[1]);
      });
      if (t) return Pa(t, 0, c, h, l, g, i, o);
      if ((c = h[a])) return o ? qa(c.pid, c.mid, c.pack, c.url) : h[a];
      h = (f = Aa(a, i))
        ? f[1] + a.substring(f[3])
        : b
          ? r.location + "/" + p
          : s("config-tlmSiblingOfDojo")
            ? "../" + a
            : a;
      /(^\/)|(\:)/.test(h) || (h = l + h);
      return qa(b, a, r, Oa(h + ".js"));
    },
    fa = function (a, b) {
      return Pa(a, b, C, y, h.baseUrl, A, L);
    },
    Qa = function (a, b, c) {
      return a.normalize
        ? a.normalize(b, function (a) {
            return za(a, c);
          })
        : za(b, c);
    },
    Ra = 0,
    R = function (a, b, c) {
      var e, d;
      (e = a.match(/^(.+?)\!(.*)$/))
        ? ((d = R(e[1], b, c)),
          "sync" == u &&
            !d.executed &&
            (la(d),
            2 === d.injected &&
              !d.executed &&
              ca(function () {
                ba(d);
              }),
            d.executed ? ua(d) : M.unshift(d)),
          5 === d.executed && !d.load && ua(d),
          d.load
            ? ((e = Qa(d, e[2], b)),
              (a = d.mid + "!" + (d.dynamic ? ++Ra + "!" : "") + e))
            : ((e = e[2]), (a = d.mid + "!" + ++Ra + "!waitingForPlugin")),
          (a = { plugin: d, mid: a, req: xa(b), prid: e }))
        : (a = fa(a, b));
      return y[a.mid] || (!c && (y[a.mid] = a));
    },
    za = (h.toAbsMid = function (a, b) {
      return fa(a, b).mid;
    }),
    Ia = (h.toUrl = function (a, b) {
      var c = fa(a + "/x", b),
        d = c.url;
      return ma(0 === c.pid ? a : d.substring(0, d.length - 5));
    }),
    Sa = { injected: 2, executed: 5, def: 3, result: 3 },
    Ba = function (a) {
      return (y[a] = c({ mid: a }, Sa));
    },
    $a = Ba("require"),
    ab = Ba("exports"),
    bb = Ba("module"),
    va = {},
    Ca = 0,
    ua = function (a) {
      var b = a.result;
      a.dynamic = b.dynamic;
      a.normalize = b.normalize;
      a.load = b.load;
      return a;
    },
    cb = function (a) {
      var b = {};
      d(a.loadQ, function (d) {
        var e = Qa(a, d.prid, d.req.module),
          h = a.dynamic
            ? d.mid.replace(/waitingForPlugin$/, e)
            : a.mid + "!" + e,
          e = c(c({}, d), { mid: h, prid: e, injected: 0 });
        y[h] || Ta((y[h] = e));
        b[d.mid] = y[h];
        Y(d);
        delete y[d.mid];
      });
      a.loadQ = 0;
      var e = function (a) {
          for (var c = a.deps || [], d = 0; d < c.length; d++)
            (a = b[c[d].mid]) && (c[d] = a);
        },
        h;
      for (h in y) e(y[h]);
      d(M, e);
    },
    aa = function (a) {
      h.trace("loader-finish-exec", [a.mid]);
      a.executed = 5;
      a.defOrder = Ca++;
      d(a.provides, function (a) {
        a();
      });
      a.loadQ && (ua(a), cb(a));
      for (f = 0; f < M.length; ) M[f] === a ? M.splice(f, 1) : f++;
      /^require\*/.test(a.mid) && delete y[a.mid];
    },
    db = [],
    ba = function (a, b) {
      if (4 === a.executed)
        return (
          h.trace("loader-circular-dependency", [db.concat(a.mid).join("->")]),
          !a.def || b ? va : a.cjs && a.cjs.exports
        );
      if (!a.executed) {
        if (!a.def) return va;
        var c = a.mid,
          d = a.deps || [],
          l,
          g = [],
          i = 0;
        for (a.executed = 4; i < d.length; ) {
          l = d[i++];
          l =
            l === $a
              ? xa(a)
              : l === ab
                ? a.cjs.exports
                : l === bb
                  ? a.cjs
                  : ba(l, b);
          if (l === va)
            return (
              (a.executed = 0), h.trace("loader-exec-module", ["abort", c]), va
            );
          g.push(l);
        }
        h.trace("loader-run-factory", [a.mid]);
        var c = a.def,
          o;
        w.unshift(a);
        if (s("config-dojo-loader-catches"))
          try {
            o = j(c) ? c.apply(null, g) : c;
          } catch (r) {
            E("error", (a.result = e("factoryThrew", [a, r])));
          }
        else o = j(c) ? c.apply(null, g) : c;
        a.result = void 0 === o && a.cjs ? a.cjs.exports : o;
        w.shift(a);
        aa(a);
      }
      return a.result;
    },
    ja = 0,
    ca = function (a) {
      try {
        ja++, a();
      } finally {
        ja--;
      }
      Za() && E("idle", []);
    },
    $ = function () {
      ja ||
        ca(function () {
          F();
          for (var a, b, c = 0; c < M.length; )
            (a = Ca), (b = M[c]), ba(b), a != Ca ? (F(), (c = 0)) : c++;
        });
    };
  void 0 === s("dojo-loader-eval-hint-url") &&
    s.add("dojo-loader-eval-hint-url", 1);
  var ma = function (a) {
      a += "";
      return a + (ea ? (/\?/.test(a) ? "&" : "?") + ea : "");
    },
    Ta = function (a) {
      var b = a.plugin;
      5 === b.executed && !b.load && ua(b);
      var c = function (b) {
        a.result = b;
        Y(a);
        aa(a);
        $();
      };
      b.load
        ? b.load(a.prid, a.req, c)
        : b.loadQ
          ? b.loadQ.push(a)
          : ((b.loadQ = [a]), M.unshift(b), la(b));
    },
    U = 0,
    ka = 0,
    Da = 0,
    ra = function (a, b) {
      s("config-stripStrict") && (a = a.replace(/"use strict"/g, ""));
      Da = 1;
      if (s("config-dojo-loader-catches"))
        try {
          a === U
            ? U.call(null)
            : h.eval(a, s("dojo-loader-eval-hint-url") ? b.url : b.mid);
        } catch (c) {
          E("error", e("evalModuleThrew", b));
        }
      else
        a === U
          ? U.call(null)
          : h.eval(a, s("dojo-loader-eval-hint-url") ? b.url : b.mid);
      Da = 0;
    },
    la = function (a) {
      var b = a.mid,
        l = a.url;
      if (
        !a.executed &&
        !a.injected &&
        !(O[b] || (a.url && ((a.pack && O[a.url] === a.pack) || 1 == O[a.url])))
      )
        if ((Ya(a), a.plugin)) Ta(a);
        else {
          var g = function () {
            Ua(a);
            2 !== a.injected &&
              (Y(a), c(a, Sa), h.trace("loader-define-nonmodule", [a.url]));
            u ? !w.length && $() : $();
          };
          if ((U = J[b] || J["url:" + a.url]))
            h.trace("loader-inject", ["cache", a.mid, l]), ra(U, a), g();
          else {
            if (u)
              if (a.isXd) "sync" == u && (u = "xd");
              else if (!(a.isAmd && "sync" != u)) {
                var i = function (c) {
                  if ("sync" == u) {
                    w.unshift(a);
                    ra(c, a);
                    w.shift();
                    Ua(a);
                    a.cjs || (Y(a), aa(a));
                    if (a.finish) {
                      var c = b + "*finish",
                        e = a.finish;
                      delete a.finish;
                      Ea(
                        c,
                        [
                          "dojo",
                          ("dojo/require!" + e.join(",")).replace(/\./g, "/"),
                        ],
                        function (a) {
                          d(e, function (b) {
                            a.require(b);
                          });
                        },
                      );
                      M.unshift(R(c));
                    }
                    g();
                  } else
                    (c = P(a, c))
                      ? (ra(c, a), g())
                      : ((ka = a), h.injectUrl(ma(l), g, a), (ka = 0));
                };
                h.trace("loader-inject", ["xhr", a.mid, l, "sync" != u]);
                if (s("config-dojo-loader-catches"))
                  try {
                    h.getText(l, "sync" != u, i);
                  } catch (j) {
                    E("error", e("xhrInjectFailed", [a, j]));
                  }
                else h.getText(l, "sync" != u, i);
                return;
              }
            h.trace("loader-inject", ["script", a.mid, l]);
            ka = a;
            h.injectUrl(ma(l), g, a);
            ka = 0;
          }
        }
    },
    Fa = function (a, b, d) {
      h.trace("loader-define-module", [a.mid, b]);
      var l = a.mid;
      if (2 === a.injected) return E("error", e("multipleDefine", a)), a;
      c(a, {
        deps: b,
        def: d,
        cjs: {
          id: a.mid,
          uri: a.url,
          exports: (a.result = {}),
          setExports: function (b) {
            a.cjs.exports = b;
          },
          config: function () {
            return a.config;
          },
        },
      });
      for (var g = 0; g < b.length; g++) b[g] = R(b[g], a);
      u && !O[l] && (ia(a), M.push(a), $());
      Y(a);
      if (!j(d) && !b.length) (a.result = d), aa(a);
      return a;
    },
    Ua = function (a, b) {
      for (var c = [], e, h; sa.length; )
        (h = sa.shift()),
          b && (h[0] = b.shift()),
          (e = (h[0] && R(h[0])) || a),
          c.push([e, h[1], h[2]]);
      na(a);
      d(c, function (a) {
        ia(Fa.apply(null, a));
      });
    },
    wa = 0,
    ta = m,
    Na = m;
  ta = function () {
    wa && clearTimeout(wa);
    wa = 0;
  };
  Na = function () {
    ta();
    h.waitms &&
      (wa = window.setTimeout(function () {
        ta();
        E("error", e("timeout", O));
      }, h.waitms));
  };
  s.add(
    "ie-event-behavior",
    !!q.attachEvent &&
      ("undefined" === typeof opera || "[object Opera]" != opera.toString()),
  );
  var Ga = function (a, b, c, d) {
      if (s("ie-event-behavior"))
        return (
          a.attachEvent(c, d),
          function () {
            a.detachEvent(c, d);
          }
        );
      a.addEventListener(b, d, !1);
      return function () {
        a.removeEventListener(b, d, !1);
      };
    },
    eb = Ga(window, "load", "onload", function () {
      h.pageLoaded = 1;
      "complete" != q.readyState && (q.readyState = "complete");
      eb();
    }),
    Va = q.getElementsByTagName("script")[0],
    fb = Va.parentNode;
  h.injectUrl = function (a, b, c) {
    var c = (c.node = q.createElement("script")),
      d = Ga(c, "load", "onreadystatechange", function (a) {
        var a = a || window.event,
          c = a.target || a.srcElement;
        if ("load" === a.type || /complete|loaded/.test(c.readyState))
          d(), h(), b && b();
      }),
      h = Ga(c, "error", "onerror", function (b) {
        d();
        h();
        E("error", e("scriptError", [a, b]));
      });
    c.type = "text/javascript";
    c.charset = "utf-8";
    c.src = a;
    fb.insertBefore(c, Va);
    return c;
  };
  h.log = function () {
    try {
      for (var a = 0; a < arguments.length; a++);
    } catch (b) {}
  };
  h.trace = m;
  var Ea = function (a, b, c) {
    var d = arguments.length,
      l = ["require", "exports", "module"],
      g = [0, a, b];
    1 == d
      ? (g = [0, j(a) ? l : [], a])
      : 2 == d && i(a)
        ? (g = [a, j(b) ? l : [], b])
        : 3 == d && (g = [a, b, c]);
    h.trace("loader-define", g.slice(0, 2));
    if ((d = g[0] && R(g[0])) && !O[d.mid]) ia(Fa(d, g[1], g[2]));
    else if (!s("ie-event-behavior") || Da) sa.push(g);
    else {
      d = d || ka;
      if (!d)
        for (a in O)
          if ((l = y[a]) && l.node && "interactive" === l.node.readyState) {
            d = l;
            break;
          }
      d
        ? (na(d), ia(Fa(d, g[1], g[2])))
        : E("error", e("ieDefineFailed", g[0]));
      $();
    }
  };
  Ea.amd = { vendor: "dojotoolkit.org" };
  c(c(h, k.loaderPatch), b.loaderPatch);
  da("error", function (a) {
    try {
      if ((console.error(a), a instanceof Error)) for (var b in a);
    } catch (c) {}
  });
  c(h, { uid: l, cache: J, packs: C });
  if (r.define) E("error", e("defineAlreadyDefined", 0));
  else {
    r.define = Ea;
    r.require = h;
    d(La, function (a) {
      ga(a);
    });
    var Wa = T.deps || b.deps || k.deps,
      Xa = T.callback || b.callback || k.callback;
    h.boot = Wa || Xa ? [Wa || [], Xa] : 0;
  }
})(this.dojoConfig || this.djConfig || this.require || {}, {
  async: "legacyAsync",
  hasCache: {
    "config-selectorEngine": "acme",
    "config-tlmSiblingOfDojo": 1,
    "dojo-built": 1,
    "dojo-cdn": 1,
    "dojo-loader": 1,
    dom: 1,
    "host-browser": 1,
  },
  packages: [
    { location: "../dijit", name: "dijit" },
    { location: "../dojox", name: "dojox" },
    { location: ".", name: "dojo" },
  ],
});
require({
  cache: {
    "dojo/_base/fx": function () {
      define(
        "./kernel,./config,./lang,../Evented,./Color,./connect,./sniff,../dom,../dom-style".split(
          ",",
        ),
        function (b, k, f, n, m, o, p, j, i) {
          var a = f.mixin,
            d = {},
            c = (d._Line = function (a, b) {
              this.start = a;
              this.end = b;
            });
          c.prototype.getValue = function (a) {
            return (this.end - this.start) * a + this.start;
          };
          var e = (d.Animation = function (b) {
            a(this, b);
            if (f.isArray(this.curve))
              this.curve = new c(this.curve[0], this.curve[1]);
          });
          e.prototype = new n();
          f.extend(e, {
            duration: 350,
            repeat: 0,
            rate: 20,
            _percent: 0,
            _startRepeatCount: 0,
            _getStep: function () {
              var a = this._percent,
                b = this.easing;
              return b ? b(a) : a;
            },
            _fire: function (a, b) {
              var c = b || [];
              if (this[a])
                if (k.debugAtAllCosts) this[a].apply(this, c);
                else
                  try {
                    this[a].apply(this, c);
                  } catch (d) {
                    console.error("exception in animation handler for:", a),
                      console.error(d);
                  }
              return this;
            },
            play: function (a, b) {
              this._delayTimer && this._clearTimer();
              if (b)
                this._stopTimer(),
                  (this._active = this._paused = !1),
                  (this._percent = 0);
              else if (this._active && !this._paused) return this;
              this._fire("beforeBegin", [this.node]);
              var c = a || this.delay,
                d = f.hitch(this, "_play", b);
              if (0 < c) return (this._delayTimer = setTimeout(d, c)), this;
              d();
              return this;
            },
            _play: function () {
              this._delayTimer && this._clearTimer();
              this._startTime = new Date().valueOf();
              this._paused &&
                (this._startTime -= this.duration * this._percent);
              this._active = !0;
              this._paused = !1;
              var a = this.curve.getValue(this._getStep());
              if (!this._percent) {
                if (!this._startRepeatCount)
                  this._startRepeatCount = this.repeat;
                this._fire("onBegin", [a]);
              }
              this._fire("onPlay", [a]);
              this._cycle();
              return this;
            },
            pause: function () {
              this._delayTimer && this._clearTimer();
              this._stopTimer();
              if (!this._active) return this;
              this._paused = !0;
              this._fire("onPause", [this.curve.getValue(this._getStep())]);
              return this;
            },
            gotoPercent: function (a, b) {
              this._stopTimer();
              this._active = this._paused = !0;
              this._percent = a;
              b && this.play();
              return this;
            },
            stop: function (a) {
              this._delayTimer && this._clearTimer();
              if (!this._timer) return this;
              this._stopTimer();
              if (a) this._percent = 1;
              this._fire("onStop", [this.curve.getValue(this._getStep())]);
              this._active = this._paused = !1;
              return this;
            },
            status: function () {
              return this._active
                ? this._paused
                  ? "paused"
                  : "playing"
                : "stopped";
            },
            _cycle: function () {
              if (this._active) {
                var a = new Date().valueOf(),
                  a =
                    0 === this.duration
                      ? 1
                      : (a - this._startTime) / this.duration;
                1 <= a && (a = 1);
                this._percent = a;
                this.easing && (a = this.easing(a));
                this._fire("onAnimate", [this.curve.getValue(a)]);
                if (1 > this._percent) this._startTimer();
                else {
                  this._active = !1;
                  if (0 < this.repeat) this.repeat--, this.play(null, !0);
                  else if (-1 == this.repeat) this.play(null, !0);
                  else if (this._startRepeatCount)
                    (this.repeat = this._startRepeatCount),
                      (this._startRepeatCount = 0);
                  this._percent = 0;
                  this._fire("onEnd", [this.node]);
                  !this.repeat && this._stopTimer();
                }
              }
              return this;
            },
            _clearTimer: function () {
              clearTimeout(this._delayTimer);
              delete this._delayTimer;
            },
          });
          var g = 0,
            l = null,
            h = { run: function () {} };
          f.extend(e, {
            _startTimer: function () {
              if (!this._timer)
                (this._timer = o.connect(h, "run", this, "_cycle")), g++;
              l || (l = setInterval(f.hitch(h, "run"), this.rate));
            },
            _stopTimer: function () {
              if (this._timer)
                o.disconnect(this._timer), (this._timer = null), g--;
              0 >= g && (clearInterval(l), (l = null), (g = 0));
            },
          });
          var r = p("ie")
            ? function (a) {
                var b = a.style;
                if (!b.width.length && "auto" == i.get(a, "width"))
                  b.width = "auto";
              }
            : function () {};
          d._fade = function (b) {
            b.node = j.byId(b.node);
            var c = a({ properties: {} }, b),
              b = (c.properties.opacity = {});
            b.start = !("start" in c)
              ? function () {
                  return +i.get(c.node, "opacity") || 0;
                }
              : c.start;
            b.end = c.end;
            b = d.animateProperty(c);
            o.connect(b, "beforeBegin", f.partial(r, c.node));
            return b;
          };
          d.fadeIn = function (b) {
            return d._fade(a({ end: 1 }, b));
          };
          d.fadeOut = function (b) {
            return d._fade(a({ end: 0 }, b));
          };
          d._defaultEasing = function (a) {
            return 0.5 + Math.sin((a + 1.5) * Math.PI) / 2;
          };
          var q = function (a) {
            this._properties = a;
            for (var b in a) {
              var c = a[b];
              if (c.start instanceof m) c.tempColor = new m();
            }
          };
          q.prototype.getValue = function (a) {
            var b = {},
              c;
            for (c in this._properties) {
              var d = this._properties[c],
                e = d.start;
              e instanceof m
                ? (b[c] = m.blendColors(e, d.end, a, d.tempColor).toCss())
                : f.isArray(e) ||
                  (b[c] =
                    (d.end - e) * a +
                    e +
                    ("opacity" != c ? d.units || "px" : 0));
            }
            return b;
          };
          d.animateProperty = function (c) {
            var d = (c.node = j.byId(c.node));
            if (!c.easing) c.easing = b._defaultEasing;
            c = new e(c);
            o.connect(c, "beforeBegin", c, function () {
              var b = {},
                c;
              for (c in this.properties) {
                if ("width" == c || "height" == c) this.node.display = "block";
                var e = this.properties[c];
                f.isFunction(e) && (e = e(d));
                e = b[c] = a({}, f.isObject(e) ? e : { end: e });
                if (f.isFunction(e.start)) e.start = e.start(d);
                if (f.isFunction(e.end)) e.end = e.end(d);
                var h = 0 <= c.toLowerCase().indexOf("color"),
                  l = function (a, b) {
                    var c = { height: a.offsetHeight, width: a.offsetWidth }[b];
                    if (void 0 !== c) return c;
                    c = i.get(a, b);
                    return "opacity" == b ? +c : h ? c : parseFloat(c);
                  };
                if ("end" in e) {
                  if (!("start" in e)) e.start = l(d, c);
                } else e.end = l(d, c);
                h
                  ? ((e.start = new m(e.start)), (e.end = new m(e.end)))
                  : (e.start = "opacity" == c ? +e.start : parseFloat(e.start));
              }
              this.curve = new q(b);
            });
            o.connect(c, "onAnimate", f.hitch(i, "set", c.node));
            return c;
          };
          d.anim = function (a, b, c, h, l, g) {
            return d
              .animateProperty({
                node: a,
                duration: c || e.prototype.duration,
                properties: b,
                easing: h,
                onEnd: l,
              })
              .play(g || 0);
          };
          a(b, d);
          b._Animation = e;
          return d;
        },
      );
    },
    "dojo/dom-form": function () {
      define(["./_base/lang", "./dom", "./io-query", "./json"], function (
        b,
        k,
        f,
        n,
      ) {
        var m = {
          fieldToObject: function (b) {
            var f = null;
            if ((b = k.byId(b))) {
              var j = b.name,
                i = (b.type || "").toLowerCase();
              if (j && i && !b.disabled)
                if ("radio" == i || "checkbox" == i) {
                  if (b.checked) f = b.value;
                } else if (b.multiple) {
                  f = [];
                  for (b = [b.firstChild]; b.length; )
                    for (j = b.pop(); j; j = j.nextSibling)
                      if (
                        1 == j.nodeType &&
                        "option" == j.tagName.toLowerCase()
                      )
                        j.selected && f.push(j.value);
                      else {
                        j.nextSibling && b.push(j.nextSibling);
                        j.firstChild && b.push(j.firstChild);
                        break;
                      }
                } else f = b.value;
            }
            return f;
          },
          toObject: function (o) {
            for (
              var f = {}, o = k.byId(o).elements, j = 0, i = o.length;
              j < i;
              ++j
            ) {
              var a = o[j],
                d = a.name,
                c = (a.type || "").toLowerCase();
              if (
                d &&
                c &&
                0 > "file|submit|image|reset|button".indexOf(c) &&
                !a.disabled
              ) {
                var e = f,
                  g = d,
                  a = m.fieldToObject(a);
                if (null !== a) {
                  var l = e[g];
                  "string" == typeof l
                    ? (e[g] = [l, a])
                    : b.isArray(l)
                      ? l.push(a)
                      : (e[g] = a);
                }
                if ("image" == c)
                  f[d + ".x"] = f[d + ".y"] = f[d].x = f[d].y = 0;
              }
            }
            return f;
          },
          toQuery: function (b) {
            return f.objectToQuery(m.toObject(b));
          },
          toJson: function (b, f) {
            return n.stringify(m.toObject(b), null, f ? 4 : 0);
          },
        };
        return m;
      });
    },
    "dojo/i18n": function () {
      define(
        "./_base/kernel,require,./has,./_base/array,./_base/config,./_base/lang,./_base/xhr,./json,module".split(
          ",",
        ),
        function (b, k, f, n, m, o, p, j, i) {
          f.add("dojo-preload-i18n-Api", 1);
          var a = (b.i18n = {}),
            d = /(^.*(^|\/)nls)(\/|$)([^\/]*)\/?([^\/]*)/,
            c = function (a, b, c, d) {
              for (
                var e = [c + d], b = b.split("-"), h = "", l = 0;
                l < b.length;
                l++
              )
                (h += (h ? "-" : "") + b[l]),
                  (!a || a[h]) && e.push(c + h + "/" + d);
              return e;
            },
            e = {},
            g = function (a, c, d) {
              d = d ? d.toLowerCase() : b.locale;
              a = a.replace(/\./g, "/");
              c = c.replace(/\./g, "/");
              return /root/i.test(d)
                ? a + "/nls/" + c
                : a + "/nls/" + d + "/" + c;
            };
          b.getL10nName = function (a, b, c) {
            return i.id + "!" + g(a, b, c);
          };
          var l = function (a, b, d, h, l, g) {
              a([b], function (i) {
                var j = o.clone(i.root),
                  r = c(!i._v1x && i, l, d, h);
                a(r, function () {
                  for (var a = 1; a < r.length; a++)
                    j = o.mixin(o.clone(j), arguments[a]);
                  e[b + "/" + l] = j;
                  g();
                });
              });
            },
            h = function (a) {
              var b = m.extraLocale || [],
                b = o.isArray(b) ? b : [b];
              b.push(a);
              return b;
            },
            r = function (a, c, g) {
              if (f("dojo-preload-i18n-Api")) {
                var i = a.split("*"),
                  r = "preload" == i[1];
                r && (e[a] || ((e[a] = 1), v(i[2], j.parse(i[3]), 1, c)), g(1));
                if (!(i = r)) s && x.push([a, c, g]), (i = s);
                if (i) return;
              }
              var a = d.exec(a),
                m = a[1] + "/",
                p = a[5] || a[4],
                k = m + p,
                i = (a = a[5] && a[4]) || b.locale,
                w = k + "/" + i,
                a = a ? [i] : h(i),
                t = a.length,
                q = function () {
                  --t || g(o.delegate(e[w]));
                };
              n.forEach(a, function (a) {
                var b = k + "/" + a;
                f("dojo-preload-i18n-Api") && u(b);
                e[b] ? q() : l(c, k, m, p, a, q);
              });
            };
          if (f("dojo-unit-tests")) var q = (a.unitTests = []);
          f("dojo-preload-i18n-Api");
          var t = (a.normalizeLocale = function (a) {
              a = a ? a.toLowerCase() : b.locale;
              return "root" == a ? "ROOT" : a;
            }),
            s = 0,
            x = [],
            v = (a._preloadLocalizations = function (a, c, d, h) {
              function l(a, b) {
                h.isXdUrl(k.toUrl(a + ".js")) || d ? h([a], b) : F([a], b, h);
              }
              function g(a, b) {
                for (var c = a.split("-"); c.length; ) {
                  if (b(c.join("-"))) return;
                  c.pop();
                }
                b("ROOT");
              }
              function i(b) {
                b = t(b);
                g(b, function (b) {
                  if (0 <= n.indexOf(c, b)) {
                    var d = a.replace(/\./g, "/") + "_" + b;
                    s++;
                    l(d, function (a) {
                      for (var c in a) e[k.toAbsMid(c) + "/" + b] = a[c];
                      for (--s; !s && x.length; ) r.apply(null, x.shift());
                    });
                    return !0;
                  }
                  return !1;
                });
              }
              h = h || k;
              i();
              n.forEach(b.config.extraLocale, i);
            }),
            u = function () {},
            w = {},
            H = new Function(
              "__bundle",
              "__checkForLegacyModules",
              "__mid",
              "__amdValue",
              "var define = function(mid, factory){define.called = 1; __amdValue.result = factory || mid;},\t   require = function(){define.called = 1;};try{define.called = 0;eval(__bundle);if(define.called==1)return __amdValue;if((__checkForLegacyModules = __checkForLegacyModules(__mid)))return __checkForLegacyModules;}catch(e){}try{return eval('('+__bundle+')');}catch(e){return e;}",
            ),
            F = function (a, b, c) {
              var d = [];
              n.forEach(a, function (a) {
                function b(c) {
                  c = H(c, u, a, w);
                  c === w
                    ? d.push((e[h] = w.result))
                    : (c instanceof Error &&
                        (console.error(
                          "failed to evaluate i18n bundle; url=" + h,
                          c,
                        ),
                        (c = {})),
                      d.push(
                        (e[h] = /nls\/[^\/]+\/[^\/]+$/.test(h)
                          ? c
                          : { root: c, _v1x: 1 }),
                      ));
                }
                var h = c.toUrl(a + ".js");
                if (e[h]) d.push(e[h]);
                else {
                  var l = c.syncLoadNls(a);
                  if (l) d.push(l);
                  else if (p)
                    p.get({
                      url: h,
                      sync: !0,
                      load: b,
                      error: function () {
                        d.push((e[h] = {}));
                      },
                    });
                  else
                    try {
                      c.getText(h, !0, b);
                    } catch (g) {
                      d.push((e[h] = {}));
                    }
                }
              });
              b && b.apply(null, d);
            },
            u = function (a) {
              for (
                var c, d = a.split("/"), h = b.global[d[0]], l = 1;
                h && l < d.length - 1;
                h = h[d[l++]]
              );
              h &&
                ((c = h[d[l]]) || (c = h[d[l].replace(/-/g, "_")]),
                c && (e[a] = c));
              return c;
            };
          a.getLocalization = function (a, b, c) {
            var d,
              a = g(a, b, c);
            r(
              a,
              !k.isXdUrl(k.toUrl(a + ".js"))
                ? function (a, b) {
                    F(a, b, k);
                  }
                : k,
              function (a) {
                d = a;
              },
            );
            return d;
          };
          f("dojo-unit-tests") &&
            q.push(function (a) {
              a.register("tests.i18n.unit", function (a) {
                var b;
                b = H("{prop:1}", u, "nonsense", w);
                a.is({ prop: 1 }, b);
                a.is(void 0, b[1]);
                b = H("({prop:1})", u, "nonsense", w);
                a.is({ prop: 1 }, b);
                a.is(void 0, b[1]);
                b = H("{'prop-x':1}", u, "nonsense", w);
                a.is({ "prop-x": 1 }, b);
                a.is(void 0, b[1]);
                b = H("({'prop-x':1})", u, "nonsense", w);
                a.is({ "prop-x": 1 }, b);
                a.is(void 0, b[1]);
                b = H("define({'prop-x':1})", u, "nonsense", w);
                a.is(w, b);
                a.is({ "prop-x": 1 }, w.result);
                b = H("define('some/module', {'prop-x':1})", u, "nonsense", w);
                a.is(w, b);
                a.is({ "prop-x": 1 }, w.result);
                b = H(
                  "this is total nonsense and should throw an error",
                  u,
                  "nonsense",
                  w,
                );
                a.is(b instanceof Error, !0);
              });
            });
          return o.mixin(a, {
            dynamic: !0,
            normalize: function (a, b) {
              return /^\./.test(a) ? b(a) : a;
            },
            load: r,
            cache: e,
          });
        },
      );
    },
    "dojo/promise/tracer": function () {
      define(["../_base/lang", "./Promise", "../Evented"], function (b, k, f) {
        function n(b) {
          setTimeout(function () {
            o.apply(m, b);
          }, 0);
        }
        var m = new f(),
          o = m.emit;
        m.emit = null;
        k.prototype.trace = function () {
          var o = b._toArray(arguments);
          this.then(
            function (b) {
              n(["resolved", b].concat(o));
            },
            function (b) {
              n(["rejected", b].concat(o));
            },
            function (b) {
              n(["progress", b].concat(o));
            },
          );
          return this;
        };
        k.prototype.traceRejected = function () {
          var o = b._toArray(arguments);
          this.otherwise(function (b) {
            n(["rejected", b].concat(o));
          });
          return this;
        };
        return m;
      });
    },
    "dojo/errors/RequestError": function () {
      define(["./create"], function (b) {
        return b("RequestError", function (b, f) {
          this.response = f;
        });
      });
    },
    "dojo/_base/html": function () {
      define(
        "dojo/_base/html",
        "./kernel,../dom,../dom-style,../dom-attr,../dom-prop,../dom-class,../dom-construct,../dom-geometry".split(
          ",",
        ),
        function (b, k, f, n, m, o, p, j) {
          b.byId = k.byId;
          b.isDescendant = k.isDescendant;
          b.setSelectable = k.setSelectable;
          b.getAttr = n.get;
          b.setAttr = n.set;
          b.hasAttr = n.has;
          b.removeAttr = n.remove;
          b.getNodeProp = n.getNodeProp;
          b.attr = function (b, a, d) {
            return 2 == arguments.length
              ? n["string" == typeof a ? "get" : "set"](b, a)
              : n.set(b, a, d);
          };
          b.hasClass = o.contains;
          b.addClass = o.add;
          b.removeClass = o.remove;
          b.toggleClass = o.toggle;
          b.replaceClass = o.replace;
          b._toDom = b.toDom = p.toDom;
          b.place = p.place;
          b.create = p.create;
          b.empty = function (b) {
            p.empty(b);
          };
          b._destroyElement = b.destroy = function (b) {
            p.destroy(b);
          };
          b._getPadExtents = b.getPadExtents = j.getPadExtents;
          b._getBorderExtents = b.getBorderExtents = j.getBorderExtents;
          b._getPadBorderExtents = b.getPadBorderExtents =
            j.getPadBorderExtents;
          b._getMarginExtents = b.getMarginExtents = j.getMarginExtents;
          b._getMarginSize = b.getMarginSize = j.getMarginSize;
          b._getMarginBox = b.getMarginBox = j.getMarginBox;
          b.setMarginBox = j.setMarginBox;
          b._getContentBox = b.getContentBox = j.getContentBox;
          b.setContentSize = j.setContentSize;
          b._isBodyLtr = b.isBodyLtr = j.isBodyLtr;
          b._docScroll = b.docScroll = j.docScroll;
          b._getIeDocumentElementOffset = b.getIeDocumentElementOffset =
            j.getIeDocumentElementOffset;
          b._fixIeBiDiScrollLeft = b.fixIeBiDiScrollLeft =
            j.fixIeBiDiScrollLeft;
          b.position = j.position;
          b.marginBox = function (b, a) {
            return a ? j.setMarginBox(b, a) : j.getMarginBox(b);
          };
          b.contentBox = function (b, a) {
            return a ? j.setContentSize(b, a) : j.getContentBox(b);
          };
          b.coords = function (i, a) {
            b.deprecated(
              "dojo.coords()",
              "Use dojo.position() or dojo.marginBox().",
            );
            var i = k.byId(i),
              d = f.getComputedStyle(i),
              d = j.getMarginBox(i, d),
              c = j.position(i, a);
            d.x = c.x;
            d.y = c.y;
            return d;
          };
          b.getProp = m.get;
          b.setProp = m.set;
          b.prop = function (b, a, d) {
            return 2 == arguments.length
              ? m["string" == typeof a ? "get" : "set"](b, a)
              : m.set(b, a, d);
          };
          b.getStyle = f.get;
          b.setStyle = f.set;
          b.getComputedStyle = f.getComputedStyle;
          b.__toPixelValue = b.toPixelValue = f.toPixelValue;
          b.style = function (b, a, d) {
            switch (arguments.length) {
              case 1:
                return f.get(b);
              case 2:
                return f["string" == typeof a ? "get" : "set"](b, a);
            }
            return f.set(b, a, d);
          };
          return b;
        },
      );
    },
    "dojo/_base/kernel": function () {
      define(["../has", "./config", "require", "module"], function (
        b,
        k,
        f,
        n,
      ) {
        var m,
          o = {},
          p = {},
          j = { config: k, global: this, dijit: o, dojox: p },
          o = { dojo: ["dojo", j], dijit: ["dijit", o], dojox: ["dojox", p] },
          n = f.map && f.map[n.id.match(/[^\/]+/)[0]];
        for (m in n) o[m] ? (o[m][0] = n[m]) : (o[m] = [n[m], {}]);
        for (m in o)
          (n = o[m]),
            (n[1]._scopeName = n[0]),
            k.noGlobals || (this[n[0]] = n[1]);
        j.scopeMap = o;
        j.baseUrl = j.config.baseUrl = f.baseUrl;
        j.isAsync = f.async;
        j.locale = k.locale;
        n = "$Rev: 30226 $".match(/\d+/);
        j.version = {
          major: 1,
          minor: 8,
          patch: 3,
          flag: "",
          revision: n ? +n[0] : NaN,
          toString: function () {
            var a = j.version;
            return (
              a.major +
              "." +
              a.minor +
              "." +
              a.patch +
              a.flag +
              " (" +
              a.revision +
              ")"
            );
          },
        };
        Function(
          "d",
          "d.eval = function(){return d.global.eval ? d.global.eval(arguments[0]) : eval(arguments[0]);}",
        )(j);
        j.exit = function () {};
        "undefined" != typeof console || (console = {});
        for (
          var o =
              "assert,count,debug,dir,dirxml,error,group,groupEnd,info,profile,profileEnd,time,timeEnd,trace,warn,log".split(
                ",",
              ),
            i,
            n = 0;
          (i = o[n++]);

        )
          console[i] ||
            (function () {
              var a = i + "";
              console[a] =
                "log" in console
                  ? function () {
                      var b = Array.apply({}, arguments);
                      b.unshift(a + ":");
                      console.log(b.join(" "));
                    }
                  : function () {};
              console[a]._fake = !0;
            })();
        b.add("dojo-debug-messages", !!k.isDebug);
        j.deprecated = j.experimental = function () {};
        if (b("dojo-debug-messages"))
          (j.deprecated = function (a, b, c) {
            a = "DEPRECATED: " + a;
            b && (a += " " + b);
            c && (a += " -- will be removed in version: " + c);
            console.warn(a);
          }),
            (j.experimental = function (a, b) {
              var c =
                "EXPERIMENTAL: " +
                a +
                " -- APIs subject to change without notice.";
              b && (c += " " + b);
              console.warn(c);
            });
        if (k.modulePaths) {
          j.deprecated("dojo.modulePaths", "use paths configuration");
          b = {};
          for (m in k.modulePaths) b[m.replace(/\./g, "/")] = k.modulePaths[m];
          f({ paths: b });
        }
        j.moduleUrl = function (a, b) {
          j.deprecated("dojo.moduleUrl()", "use require.toUrl", "2.0");
          var c = null;
          a &&
            (c =
              f
                .toUrl(a.replace(/\./g, "/") + (b ? "/" + b : "") + "/*.*")
                .replace(/\/\*\.\*/, "") + (b ? "" : "/"));
          return c;
        };
        j._hasResource = {};
        return j;
      });
    },
    "dojo/io-query": function () {
      define(["./_base/lang"], function (b) {
        var k = {};
        return {
          objectToQuery: function (f) {
            var n = encodeURIComponent,
              m = [],
              o;
            for (o in f) {
              var p = f[o];
              if (p != k[o]) {
                var j = n(o) + "=";
                if (b.isArray(p))
                  for (var i = 0, a = p.length; i < a; ++i) m.push(j + n(p[i]));
                else m.push(j + n(p));
              }
            }
            return m.join("&");
          },
          queryToObject: function (f) {
            for (
              var k = decodeURIComponent,
                f = f.split("&"),
                m = {},
                o,
                p,
                j = 0,
                i = f.length;
              j < i;
              ++j
            )
              if (((p = f[j]), p.length)) {
                var a = p.indexOf("=");
                0 > a
                  ? ((o = k(p)), (p = ""))
                  : ((o = k(p.slice(0, a))), (p = k(p.slice(a + 1))));
                "string" == typeof m[o] && (m[o] = [m[o]]);
                b.isArray(m[o]) ? m[o].push(p) : (m[o] = p);
              }
            return m;
          },
        };
      });
    },
    "dojo/_base/Deferred": function () {
      define(
        "./kernel,../Deferred,../promise/Promise,../errors/CancelError,../has,./lang,../when".split(
          ",",
        ),
        function (b, k, f, n, m, o, p) {
          var j = function () {},
            i = Object.freeze || function () {},
            a = (b.Deferred = function (b) {
              function c(a) {
                if (l) throw Error("This deferred has already been resolved");
                g = a;
                l = !0;
                e();
              }
              function e() {
                for (var a; !a && p; ) {
                  var b = p;
                  p = p.next;
                  if ((a = b.progress == j)) l = !1;
                  var c = h ? b.error : b.resolved;
                  m("config-useDeferredInstrumentation") &&
                    h &&
                    k.instrumentRejected &&
                    k.instrumentRejected(g, !!c);
                  if (c)
                    try {
                      var d = c(g);
                      d && "function" === typeof d.then
                        ? d.then(
                            o.hitch(b.deferred, "resolve"),
                            o.hitch(b.deferred, "reject"),
                            o.hitch(b.deferred, "progress"),
                          )
                        : ((c = a && void 0 === d),
                          a && !c && (h = d instanceof Error),
                          b.deferred[c && h ? "reject" : "resolve"](c ? g : d));
                    } catch (e) {
                      b.deferred.reject(e);
                    }
                  else h ? b.deferred.reject(g) : b.deferred.resolve(g);
                }
              }
              var g,
                l,
                h,
                r,
                p,
                t = (this.promise = new f());
              this.resolve = this.callback = function (a) {
                this.fired = 0;
                this.results = [a, null];
                c(a);
              };
              this.reject = this.errback = function (a) {
                h = !0;
                this.fired = 1;
                m("config-useDeferredInstrumentation") &&
                  k.instrumentRejected &&
                  k.instrumentRejected(a, !!p);
                c(a);
                this.results = [null, a];
              };
              this.progress = function (a) {
                for (var b = p; b; ) {
                  var c = b.progress;
                  c && c(a);
                  b = b.next;
                }
              };
              this.addCallbacks = function (a, b) {
                this.then(a, b, j);
                return this;
              };
              t.then = this.then = function (b, c, d) {
                var h = d == j ? this : new a(t.cancel),
                  b = { resolved: b, error: c, progress: d, deferred: h };
                p ? (r = r.next = b) : (p = r = b);
                l && e();
                return h.promise;
              };
              var s = this;
              t.cancel = this.cancel = function () {
                if (!l) {
                  var a = b && b(s);
                  if (!l)
                    a instanceof Error || (a = new n(a)),
                      (a.log = !1),
                      s.reject(a);
                }
              };
              i(t);
            });
          o.extend(a, {
            addCallback: function (a) {
              return this.addCallbacks(o.hitch.apply(b, arguments));
            },
            addErrback: function (a) {
              return this.addCallbacks(null, o.hitch.apply(b, arguments));
            },
            addBoth: function (a) {
              var c = o.hitch.apply(b, arguments);
              return this.addCallbacks(c, c);
            },
            fired: -1,
          });
          a.when = b.when = p;
          return a;
        },
      );
    },
    "dojo/NodeList-dom": function () {
      define(
        "./_base/kernel,./query,./_base/array,./_base/lang,./dom-class,./dom-construct,./dom-geometry,./dom-attr,./dom-style".split(
          ",",
        ),
        function (b, k, f, n, m, o, p, j, i) {
          function a(a) {
            return function (b, c, d) {
              return 2 == arguments.length
                ? a["string" == typeof c ? "get" : "set"](b, c)
                : a.set(b, c, d);
            };
          }
          var d = function (a) {
              return 1 == a.length && "string" == typeof a[0];
            },
            c = function (a) {
              var b = a.parentNode;
              b && b.removeChild(a);
            },
            e = k.NodeList,
            g = e._adaptWithCondition,
            l = e._adaptAsForEach,
            h = e._adaptAsMap;
          n.extend(e, {
            _normalize: function (a, c) {
              var d = !0 === a.parse;
              if ("string" == typeof a.template)
                var e = a.templateFunc || (b.string && b.string.substitute),
                  a = e ? e(a.template, a) : a;
              e = typeof a;
              "string" == e || "number" == e
                ? ((a = o.toDom(a, c && c.ownerDocument)),
                  (a = 11 == a.nodeType ? n._toArray(a.childNodes) : [a]))
                : n.isArrayLike(a)
                  ? n.isArray(a) || (a = n._toArray(a))
                  : (a = [a]);
              if (d) a._runParse = !0;
              return a;
            },
            _cloneNode: function (a) {
              return a.cloneNode(!0);
            },
            _place: function (a, c, d, e) {
              if (!(1 != c.nodeType && "only" == d))
                for (var h, l = a.length, g = l - 1; 0 <= g; g--) {
                  var i = e ? this._cloneNode(a[g]) : a[g];
                  if (a._runParse && b.parser && b.parser.parse) {
                    h || (h = c.ownerDocument.createElement("div"));
                    h.appendChild(i);
                    b.parser.parse(h);
                    for (i = h.firstChild; h.firstChild; )
                      h.removeChild(h.firstChild);
                  }
                  g == l - 1
                    ? o.place(i, c, d)
                    : c.parentNode.insertBefore(i, c);
                  c = i;
                }
            },
            position: h(p.position),
            attr: g(a(j), d),
            style: g(a(i), d),
            addClass: l(m.add),
            removeClass: l(m.remove),
            toggleClass: l(m.toggle),
            replaceClass: l(m.replace),
            empty: l(o.empty),
            removeAttr: l(j.remove),
            marginBox: h(p.getMarginBox),
            place: function (a, b) {
              var c = k(a)[0];
              return this.forEach(function (a) {
                o.place(a, c, b);
              });
            },
            orphan: function (a) {
              return (a ? k._filterResult(this, a) : this).forEach(c);
            },
            adopt: function (a, b) {
              return k(a).place(this[0], b)._stash(this);
            },
            query: function (a) {
              if (!a) return this;
              var b = new e();
              this.map(function (c) {
                k(a, c).forEach(function (a) {
                  void 0 !== a && b.push(a);
                });
              });
              return b._stash(this);
            },
            filter: function (a) {
              var b = arguments,
                c = this,
                d = 0;
              if ("string" == typeof a) {
                c = k._filterResult(this, b[0]);
                if (1 == b.length) return c._stash(this);
                d = 1;
              }
              return this._wrap(f.filter(c, b[d], b[d + 1]), this);
            },
            addContent: function (a, b) {
              for (
                var a = this._normalize(a, this[0]), c = 0, d;
                (d = this[c]);
                c++
              )
                this._place(a, d, b, 0 < c);
              return this;
            },
          });
          return e;
        },
      );
    },
    "dojo/query": function () {
      define(
        "./_base/kernel,./has,./dom,./on,./_base/array,./_base/lang,./selector/_loader,./selector/_loader!default".split(
          ",",
        ),
        function (b, k, f, n, m, o, p, j) {
          function i(a, b) {
            var c = function (c, d) {
              if ("string" == typeof d && ((d = f.byId(d)), !d))
                return new b([]);
              var e =
                "string" == typeof c ? a(c, d) : c ? (c.orphan ? c : [c]) : [];
              return e.orphan ? e : new b(e);
            };
            c.matches =
              a.match ||
              function (a, b, d) {
                return 0 < c.filter([a], b, d).length;
              };
            c.filter =
              a.filter ||
              function (a, b, d) {
                return c(b, d).filter(function (b) {
                  return -1 < m.indexOf(a, b);
                });
              };
            if ("function" != typeof a)
              var d = a.search,
                a = function (a, b) {
                  return d(b || document, a);
                };
            return c;
          }
          k.add("array-extensible", function () {
            return (
              1 == o.delegate([], { length: 1 }).length &&
              !k("bug-for-in-skips-shadowed")
            );
          });
          var a = Array.prototype,
            d = a.slice,
            c = a.concat,
            e = m.forEach,
            g = function (a, c, e) {
              c = [0].concat(d.call(c, 0));
              e = e || b.global;
              return function (b) {
                c[0] = b;
                return a.apply(e, c);
              };
            },
            l = function (a) {
              var b = this instanceof h && k("array-extensible");
              "number" == typeof a && (a = Array(a));
              var c = a && "length" in a ? a : arguments;
              if (b || !c.sort) {
                for (
                  var d = b ? this : [], e = (d.length = c.length), l = 0;
                  l < e;
                  l++
                )
                  d[l] = c[l];
                if (b) return d;
                c = d;
              }
              o._mixin(c, r);
              c._NodeListCtor = function (a) {
                return h(a);
              };
              return c;
            },
            h = l,
            r = (h.prototype = k("array-extensible") ? [] : {});
          h._wrap = r._wrap = function (a, b, c) {
            a = new (c || this._NodeListCtor || h)(a);
            return b ? a._stash(b) : a;
          };
          h._adaptAsMap = function (a, b) {
            return function () {
              return this.map(g(a, arguments, b));
            };
          };
          h._adaptAsForEach = function (a, b) {
            return function () {
              this.forEach(g(a, arguments, b));
              return this;
            };
          };
          h._adaptAsFilter = function (a, b) {
            return function () {
              return this.filter(g(a, arguments, b));
            };
          };
          h._adaptWithCondition = function (a, c, d) {
            return function () {
              var e = arguments,
                h = g(a, e, d);
              if (c.call(d || b.global, e)) return this.map(h);
              this.forEach(h);
              return this;
            };
          };
          e(["slice", "splice"], function (b) {
            var c = a[b];
            r[b] = function () {
              return this._wrap(
                c.apply(this, arguments),
                "slice" == b ? this : null,
              );
            };
          });
          e(["indexOf", "lastIndexOf", "every", "some"], function (a) {
            var c = m[a];
            r[a] = function () {
              return c.apply(b, [this].concat(d.call(arguments, 0)));
            };
          });
          o.extend(l, {
            constructor: h,
            _NodeListCtor: h,
            toString: function () {
              return this.join(",");
            },
            _stash: function (a) {
              this._parent = a;
              return this;
            },
            on: function (a, b) {
              var c = this.map(function (c) {
                return n(c, a, b);
              });
              c.remove = function () {
                for (var a = 0; a < c.length; a++) c[a].remove();
              };
              return c;
            },
            end: function () {
              return this._parent ? this._parent : new this._NodeListCtor(0);
            },
            concat: function (a) {
              var b = d.call(this, 0),
                e = m.map(arguments, function (a) {
                  return d.call(a, 0);
                });
              return this._wrap(c.apply(b, e), this);
            },
            map: function (a, b) {
              return this._wrap(m.map(this, a, b), this);
            },
            forEach: function (a, b) {
              e(this, a, b);
              return this;
            },
            filter: function (a) {
              var b = arguments,
                c = this,
                d = 0;
              if ("string" == typeof a) {
                c = q._filterResult(this, b[0]);
                if (1 == b.length) return c._stash(this);
                d = 1;
              }
              return this._wrap(m.filter(c, b[d], b[d + 1]), this);
            },
            instantiate: function (a, b) {
              var c = o.isFunction(a) ? a : o.getObject(a),
                b = b || {};
              return this.forEach(function (a) {
                new c(b, a);
              });
            },
            at: function () {
              var a = new this._NodeListCtor(0);
              e(
                arguments,
                function (b) {
                  0 > b && (b = this.length + b);
                  this[b] && a.push(this[b]);
                },
                this,
              );
              return a._stash(this);
            },
          });
          var q = i(j, l);
          b.query = i(j, function (a) {
            return l(a);
          });
          q.load = function (a, b, c) {
            p.load(a, b, function (a) {
              c(i(a, l));
            });
          };
          b._filterQueryResult = q._filterResult = function (a, b, c) {
            return new l(q.filter(a, b, c));
          };
          b.NodeList = q.NodeList = l;
          return q;
        },
      );
    },
    "dojo/has": function () {
      define(["require", "module"], function (b) {
        var k = b.has || function () {};
        k.add("dom-addeventlistener", !!document.addEventListener);
        k.add("touch", "ontouchstart" in document);
        k.add("device-width", screen.availWidth || innerWidth);
        b = document.createElement("form");
        k.add("dom-attributes-explicit", 0 == b.attributes.length);
        k.add(
          "dom-attributes-specified-flag",
          0 < b.attributes.length && 40 > b.attributes.length,
        );
        k.clearElement = function (b) {
          b.innerHTML = "";
          return b;
        };
        k.normalize = function (b, n) {
          var m = b.match(/[\?:]|[^:\?]*/g),
            o = 0,
            p = function (b) {
              var i = m[o++];
              if (":" == i) return 0;
              if ("?" == m[o++]) {
                if (!b && k(i)) return p();
                p(!0);
                return p(b);
              }
              return i || 0;
            };
          return (b = p()) && n(b);
        };
        k.load = function (b, k, m) {
          b ? k([b], m) : m();
        };
        return k;
      });
    },
    "dojo/_base/loader": function () {
      define(
        "./kernel,../has,require,module,./json,./lang,./array".split(","),
        function (b, k, f, n, m, o, p) {
          var j = function (a) {
              return a.replace(/\./g, "/");
            },
            i = /\/\/>>built/,
            a = [],
            d = [],
            c = function (b, c, h) {
              a.push(h);
              p.forEach(b.split(","), function (a) {
                a = N(a, c.module);
                d.push(a);
                V(a);
              });
              e();
            },
            e = function () {
              var b, c;
              for (c in P) {
                b = P[c];
                if (void 0 === b.noReqPluginCheck)
                  b.noReqPluginCheck =
                    /loadInit\!/.test(c) || /require\!/.test(c) ? 1 : 0;
                if (!b.executed && !b.noReqPluginCheck && b.injected == x)
                  return;
              }
              E(function () {
                var b = a;
                a = [];
                p.forEach(b, function (a) {
                  a(1);
                });
              });
            },
            g = function (a, c, d) {
              var e = /\(|\)/g,
                h = 1;
              for (
                e.lastIndex = c;
                (c = e.exec(a)) && !((h = ")" == c[0] ? h - 1 : h + 1), 0 == h);

              );
              if (0 != h)
                throw (
                  "unmatched paren around character " +
                  e.lastIndex +
                  " in: " +
                  a
                );
              return [b.trim(a.substring(d, e.lastIndex)) + ";\n", e.lastIndex];
            },
            l = /(\/\*([\s\S]*?)\*\/|\/\/(.*)$)/gm,
            h =
              /(^|\s)dojo\.(loadInit|require|provide|requireLocalization|requireIf|requireAfterIf|platformRequire)\s*\(/gm,
            r = /(^|\s)(require|define)\s*\(/m,
            q = function (a, b) {
              var c,
                d,
                e,
                i = [],
                j = [];
              c = [];
              for (
                b =
                  b ||
                  a.replace(l, function (a) {
                    h.lastIndex = r.lastIndex = 0;
                    return h.test(a) || r.test(a) ? "" : a;
                  });
                (c = h.exec(b));

              )
                (d = h.lastIndex),
                  (e = d - c[0].length),
                  (d = g(b, d, e)),
                  "loadInit" == c[2] ? i.push(d[0]) : j.push(d[0]),
                  (h.lastIndex = d[1]);
              c = i.concat(j);
              return c.length || !r.test(b)
                ? [
                    a.replace(
                      /(^|\s)dojo\.loadInit\s*\(/g,
                      "\n0 && dojo.loadInit(",
                    ),
                    c.join(""),
                    c,
                  ]
                : 0;
            },
            t = f.initSyncLoader(c, e, function (a, c) {
              var d,
                e,
                h = [],
                l = [];
              if (i.test(c) || !(d = q(c))) return 0;
              e = a.mid + "-*loadInit";
              for (var g in N("dojo", a).result.scopeMap)
                h.push(g), l.push('"' + g + '"');
              return (
                "// xdomain rewrite of " +
                a.mid +
                "\ndefine('" +
                e +
                "',{\n\tnames:" +
                b.toJson(h) +
                ",\n\tdef:function(" +
                h.join(",") +
                "){" +
                d[1] +
                "}});\n\ndefine(" +
                b.toJson(h.concat(["dojo/loadInit!" + e])) +
                ", function(" +
                h.join(",") +
                "){\n" +
                d[0] +
                "});"
              );
            }),
            s = t.sync,
            x = t.requested,
            v = t.arrived,
            u = t.nonmodule,
            w = t.executing,
            H = t.executed,
            F = t.syncExecStack,
            P = t.modules,
            I = t.execQ,
            N = t.getModule,
            V = t.injectModule,
            z = t.setArrived,
            B = t.signal,
            K = t.finishExec,
            D = t.execModule,
            G = t.getLegacyMode,
            E = t.guardCheckComplete,
            c = t.dojoRequirePlugin;
          b.provide = function (a) {
            var b = F[0],
              c = o.mixin(N(j(a), f.module), {
                executed: w,
                result: o.getObject(a, !0),
              });
            z(c);
            if (b)
              (b.provides || (b.provides = [])).push(function () {
                c.result = o.getObject(a);
                delete c.provides;
                c.executed !== H && K(c);
              });
            return c.result;
          };
          k.add("config-publishRequireResult", 1, 0, 0);
          b.require = function (a, b) {
            var c = (function (a, b) {
              var c = N(j(a), f.module);
              if (F.length && F[0].finish) F[0].finish.push(a);
              else {
                if (c.executed) return c.result;
                b && (c.result = u);
                var d = G();
                V(c);
                d = G();
                c.executed !== H &&
                  c.injected === v &&
                  t.guardCheckComplete(function () {
                    D(c);
                  });
                if (c.executed) return c.result;
                d == s
                  ? c.cjs
                    ? I.unshift(c)
                    : F.length && (F[0].finish = [a])
                  : I.push(c);
              }
            })(a, b);
            k("config-publishRequireResult") &&
              !o.exists(a) &&
              void 0 !== c &&
              o.setObject(a, c);
            return c;
          };
          b.loadInit = function (a) {
            a();
          };
          b.registerModulePath = function (a, b) {
            var c = {};
            c[a.replace(/\./g, "/")] = b;
            f({ paths: c });
          };
          b.platformRequire = function (a) {
            for (
              var a = (a.common || []).concat(a[b._name] || a["default"] || []),
                c;
              a.length;

            )
              o.isArray((c = a.shift())) ? b.require.apply(b, c) : b.require(c);
          };
          b.requireIf = b.requireAfterIf = function (a, c, d) {
            a && b.require(c, d);
          };
          b.requireLocalization = function (a, b, c) {
            f(["../i18n"], function (d) {
              d.getLocalization(a, b, c);
            });
          };
          return {
            extractLegacyApiApplications: q,
            require: c,
            loadInit: function (a, d, e) {
              d([a], function (a) {
                d(a.names, function () {
                  for (var h = "", l = [], g = 0; g < arguments.length; g++)
                    (h += "var " + a.names[g] + "= arguments[" + g + "]; "),
                      l.push(arguments[g]);
                  eval(h);
                  var i = d.module,
                    o = [],
                    f,
                    h = {
                      provide: function (a) {
                        a = j(a);
                        a = N(a, i);
                        a !== i && z(a);
                      },
                      require: function (a, b) {
                        a = j(a);
                        b && (N(a, i).result = u);
                        o.push(a);
                      },
                      requireLocalization: function (a, c, d) {
                        f || (f = ["dojo/i18n"]);
                        d = (d || b.locale).toLowerCase();
                        a =
                          j(a) +
                          "/nls/" +
                          (/root/i.test(d) ? "" : d + "/") +
                          j(c);
                        N(a, i).isXd && f.push("dojo/i18n!" + a);
                      },
                      loadInit: function (a) {
                        a();
                      },
                    },
                    g = {},
                    m;
                  try {
                    for (m in h) (g[m] = b[m]), (b[m] = h[m]);
                    a.def.apply(null, l);
                  } catch (p) {
                    B("error", [{ src: n.id, id: "failedDojoLoadInit" }, p]);
                  } finally {
                    for (m in h) b[m] = g[m];
                  }
                  f && (o = o.concat(f));
                  o.length ? c(o.join(","), d, e) : e();
                });
              });
            },
          };
        },
      );
    },
    "dojo/json": function () {
      define(["./has"], function (b) {
        var k = "undefined" != typeof JSON;
        b.add("json-parse", k);
        b.add(
          "json-stringify",
          k &&
            '{"a":1}' ==
              JSON.stringify({ a: 0 }, function (b, f) {
                return f || 1;
              }),
        );
        if (b("json-stringify")) return JSON;
        var f = function (b) {
          return ('"' + b.replace(/(["\\])/g, "\\$1") + '"')
            .replace(/[\f]/g, "\\f")
            .replace(/[\b]/g, "\\b")
            .replace(/[\n]/g, "\\n")
            .replace(/[\t]/g, "\\t")
            .replace(/[\r]/g, "\\r");
        };
        return {
          parse: b("json-parse")
            ? JSON.parse
            : function (b, f) {
                if (
                  f &&
                  !/^([\s\[\{]*(?:"(?:\\.|[^"])+"|-?\d[\d\.]*(?:[Ee][+-]?\d+)?|null|true|false|)[\s\]\}]*(?:,|:|$))+$/.test(
                    b,
                  )
                )
                  throw new SyntaxError("Invalid characters in JSON");
                return eval("(" + b + ")");
              },
          stringify: function (b, m, o) {
            function p(b, a, d) {
              m && (b = m(d, b));
              var c;
              c = typeof b;
              if ("number" == c) return isFinite(b) ? b + "" : "null";
              if ("boolean" == c) return b + "";
              if (null === b) return "null";
              if ("string" == typeof b) return f(b);
              if ("function" == c || "undefined" == c) return j;
              if ("function" == typeof b.toJSON) return p(b.toJSON(d), a, d);
              if (b instanceof Date)
                return '"{FullYear}-{Month+}-{Date}T{Hours}:{Minutes}:{Seconds}Z"'.replace(
                  /\{(\w+)(\+)?\}/g,
                  function (a, c, d) {
                    a = b["getUTC" + c]() + (d ? 1 : 0);
                    return 10 > a ? "0" + a : a;
                  },
                );
              if (b.valueOf() !== b) return p(b.valueOf(), a, d);
              var e = o ? a + o : "",
                g = o ? " " : "",
                l = o ? "\n" : "";
              if (b instanceof Array) {
                for (var g = b.length, h = [], d = 0; d < g; d++)
                  (c = p(b[d], e, d)),
                    "string" != typeof c && (c = "null"),
                    h.push(l + e + c);
                return "[" + h.join(",") + l + a + "]";
              }
              h = [];
              for (d in b) {
                var r;
                if (b.hasOwnProperty(d)) {
                  if ("number" == typeof d) r = '"' + d + '"';
                  else if ("string" == typeof d) r = f(d);
                  else continue;
                  c = p(b[d], e, d);
                  "string" == typeof c && h.push(l + e + r + ":" + g + c);
                }
              }
              return "{" + h.join(",") + l + a + "}";
            }
            var j;
            "string" == typeof m && ((o = m), (m = null));
            return p(b, "", "");
          },
        };
      });
    },
    "dojo/_base/declare": function () {
      define(["./kernel", "../has", "./lang"], function (b, k, f) {
        function n(a, b) {
          throw Error("declare" + (b ? " " + b : "") + ": " + a);
        }
        function m(a, b, c) {
          var d,
            e,
            h,
            l,
            g,
            i,
            j,
            o = (this._inherited = this._inherited || {});
          "string" == typeof a && ((d = a), (a = b), (b = c));
          c = 0;
          l = a.callee;
          (d = d || l.nom) ||
            n("can't deduce a name to call inherited()", this.declaredClass);
          g = this.constructor._meta;
          h = g.bases;
          j = o.p;
          if (d != w) {
            if (
              o.c !== l &&
              ((j = 0), (i = h[0]), (g = i._meta), g.hidden[d] !== l)
            ) {
              (e = g.chains) &&
                "string" == typeof e[d] &&
                n(
                  "calling chained method with inherited: " + d,
                  this.declaredClass,
                );
              do
                if (
                  ((g = i._meta),
                  (e = i.prototype),
                  g &&
                    ((e[d] === l && e.hasOwnProperty(d)) || g.hidden[d] === l))
                )
                  break;
              while ((i = h[++j]));
              j = i ? j : -1;
            }
            if ((i = h[++j]))
              if (((e = i.prototype), i._meta && e.hasOwnProperty(d))) c = e[d];
              else {
                l = s[d];
                do
                  if (
                    ((e = i.prototype),
                    (c = e[d]) && (i._meta ? e.hasOwnProperty(d) : c !== l))
                  )
                    break;
                while ((i = h[++j]));
              }
            c = (i && c) || s[d];
          } else {
            if (o.c !== l && ((j = 0), (g = h[0]._meta) && g.ctor !== l)) {
              e = g.chains;
              for (
                (!e || "manual" !== e.constructor) &&
                n(
                  "calling chained constructor with inherited",
                  this.declaredClass,
                );
                (i = h[++j]) && !((g = i._meta) && g.ctor === l);

              );
              j = i ? j : -1;
            }
            for (; (i = h[++j]) && !(c = (g = i._meta) ? g.ctor : i); );
            c = i && c;
          }
          o.c = c;
          o.p = j;
          if (c) return !0 === b ? c : c.apply(this, b || a);
        }
        function o(a, b) {
          return "string" == typeof a
            ? this.__inherited(a, b, !0)
            : this.__inherited(a, !0);
        }
        function p(a, b, c) {
          var d = this.getInherited(a, b);
          if (d) return d.apply(this, c || b || a);
        }
        function j(a) {
          for (
            var b = this.constructor._meta.bases, c = 0, d = b.length;
            c < d;
            ++c
          )
            if (b[c] === a) return !0;
          return this instanceof a;
        }
        function i(a, b) {
          for (var c in b) c != w && b.hasOwnProperty(c) && (a[c] = b[c]);
          if (k("bug-for-in-skips-shadowed"))
            for (var d = f._extraNames, e = d.length; e; )
              (c = d[--e]), c != w && b.hasOwnProperty(c) && (a[c] = b[c]);
        }
        function a(a) {
          q.safeMixin(this.prototype, a);
          return this;
        }
        function d(a) {
          return q([this].concat(a));
        }
        function c(a, b) {
          return function () {
            var y;
            var c = arguments,
              d = c,
              e = c[0],
              h,
              l;
            l = a.length;
            var g;
            if (!(this instanceof c.callee)) return r(c);
            if (b && ((e && e.preamble) || this.preamble)) {
              g = Array(a.length);
              g[0] = c;
              for (h = 0; ; ) {
                if ((e = c[0])) (e = e.preamble) && (c = e.apply(this, c) || c);
                e = a[h].prototype;
                (e = e.hasOwnProperty("preamble") && e.preamble) &&
                  (c = e.apply(this, c) || c);
                if (++h == l) break;
                g[h] = c;
              }
            }
            for (h = l - 1; 0 <= h; --h)
              (e = a[h]),
                ((y = (l = e._meta) ? l.ctor : e), (e = y)) &&
                  e.apply(this, g ? g[h] : c);
            (e = this.postscript) && e.apply(this, d);
          };
        }
        function e(a, b) {
          return function () {
            var c = arguments,
              d = c,
              e = c[0];
            if (!(this instanceof c.callee)) return r(c);
            if (b) {
              if (e) (e = e.preamble) && (d = e.apply(this, d) || d);
              (e = this.preamble) && e.apply(this, d);
            }
            a && a.apply(this, c);
            (e = this.postscript) && e.apply(this, c);
          };
        }
        function g(a) {
          return function () {
            var y;
            var b = arguments,
              c = 0,
              d,
              e;
            if (!(this instanceof b.callee)) return r(b);
            for (; (d = a[c]); ++c)
              if (((y = (e = d._meta) ? e.ctor : d), (d = y))) {
                d.apply(this, b);
                break;
              }
            (d = this.postscript) && d.apply(this, b);
          };
        }
        function l(a, b, c) {
          return function () {
            var d,
              e,
              h = 0,
              l = 1;
            c && ((h = b.length - 1), (l = -1));
            for (; (d = b[h]); h += l)
              (e = d._meta),
                (d = (e ? e.hidden : d.prototype)[a]) &&
                  d.apply(this, arguments);
          };
        }
        function h(a) {
          v.prototype = a.prototype;
          a = new v();
          v.prototype = null;
          return a;
        }
        function r(a) {
          var b = a.callee,
            c = h(b);
          b.apply(c, a);
          return c;
        }
        function q(b, p, r) {
          "string" != typeof b && ((r = p), (p = b), (b = ""));
          var r = r || {},
            k,
            v,
            z,
            B,
            K,
            D,
            G,
            E = 1,
            da = p;
          if ("[object Array]" == x.call(p)) {
            E = b;
            z = [];
            B = [{ cls: 0, refs: [] }];
            D = {};
            for (var Q = 1, W = p.length, L = 0, C, S, A, y; L < W; ++L) {
              (C = p[L])
                ? "[object Function]" != x.call(C) &&
                  n("mixin #" + L + " is not a callable constructor.", E)
                : n(
                    "mixin #" +
                      L +
                      " is unknown. Did you use dojo.require to pull it in?",
                    E,
                  );
              S = C._meta ? C._meta.bases : [C];
              A = 0;
              for (C = S.length - 1; 0 <= C; --C) {
                y = S[C].prototype;
                if (!y.hasOwnProperty("declaredClass"))
                  y.declaredClass = "uniqName_" + u++;
                y = y.declaredClass;
                D.hasOwnProperty(y) ||
                  ((D[y] = { count: 0, refs: [], cls: S[C] }), ++Q);
                y = D[y];
                A && A !== y && (y.refs.push(A), ++A.count);
                A = y;
              }
              ++A.count;
              B[0].refs.push(A);
            }
            for (; B.length; ) {
              A = B.pop();
              z.push(A.cls);
              for (--Q; (v = A.refs), 1 == v.length; ) {
                A = v[0];
                if (!A || --A.count) {
                  A = 0;
                  break;
                }
                z.push(A.cls);
                --Q;
              }
              if (A)
                for (L = 0, W = v.length; L < W; ++L)
                  (A = v[L]), --A.count || B.push(A);
            }
            Q && n("can't build consistent linearization", E);
            C = p[0];
            z[0] = C
              ? C._meta && C === z[z.length - C._meta.bases.length]
                ? C._meta.bases.length
                : 1
              : 0;
            D = z;
            z = D[0];
            E = D.length - z;
            p = D[E];
          } else
            (D = [0]),
              p
                ? "[object Function]" == x.call(p)
                  ? ((z = p._meta), (D = D.concat(z ? z.bases : p)))
                  : n("base class is not a callable constructor.", b)
                : null !== p &&
                  n(
                    "unknown base class. Did you use dojo.require to pull it in?",
                    b,
                  );
          if (p)
            for (v = E - 1; ; --v) {
              k = h(p);
              if (!v) break;
              z = D[v];
              (z._meta ? i : t)(k, z.prototype);
              B = new Function();
              B.superclass = p;
              B.prototype = k;
              p = k.constructor = B;
            }
          else k = {};
          q.safeMixin(k, r);
          z = r.constructor;
          if (z !== s.constructor) (z.nom = w), (k.constructor = z);
          for (v = E - 1; v; --v)
            (z = D[v]._meta) && z.chains && (G = t(G || {}, z.chains));
          k["-chains-"] && (G = t(G || {}, k["-chains-"]));
          z = !G || !G.hasOwnProperty(w);
          D[0] = B =
            G && "manual" === G.constructor
              ? g(D)
              : 1 == D.length
                ? e(r.constructor, z)
                : c(D, z);
          B._meta = {
            bases: D,
            hidden: r,
            chains: G,
            parents: da,
            ctor: r.constructor,
          };
          B.superclass = p && p.prototype;
          B.extend = a;
          B.createSubclass = d;
          B.prototype = k;
          k.constructor = B;
          k.getInherited = o;
          k.isInstanceOf = j;
          k.inherited = H;
          k.__inherited = m;
          if (b) (k.declaredClass = b), f.setObject(b, B);
          if (G)
            for (K in G)
              if (k[K] && "string" == typeof G[K] && K != w)
                (z = k[K] = l(K, D, "after" === G[K])), (z.nom = K);
          return B;
        }
        var t = f.mixin,
          s = Object.prototype,
          x = s.toString,
          v = new Function(),
          u = 0,
          w = "constructor",
          H = b.config.isDebug ? p : m;
        b.safeMixin = q.safeMixin = function (a, b) {
          var c, d;
          for (c in b)
            if (((d = b[c]), (d !== s[c] || !(c in s)) && c != w)) {
              if ("[object Function]" == x.call(d)) d.nom = c;
              a[c] = d;
            }
          if (k("bug-for-in-skips-shadowed"))
            for (var e = f._extraNames, h = e.length; h; )
              if (
                ((c = e[--h]), (d = b[c]), (d !== s[c] || !(c in s)) && c != w)
              ) {
                if ("[object Function]" == x.call(d)) d.nom = c;
                a[c] = d;
              }
          return a;
        };
        return (b.declare = q);
      });
    },
    "dojo/dom": function () {
      define(["./sniff", "./_base/window"], function (b, k) {
        if (7 >= b("ie"))
          try {
            document.execCommand("BackgroundImageCache", !1, !0);
          } catch (f) {}
        var n = {};
        n.byId = b("ie")
          ? function (b, f) {
              if ("string" != typeof b) return b;
              var j = f || k.doc,
                i = b && j.getElementById(b);
              if (i && (i.attributes.id.value == b || i.id == b)) return i;
              j = j.all[b];
              if (!j || j.nodeName) j = [j];
              for (var a = 0; (i = j[a++]); )
                if (
                  (i.attributes &&
                    i.attributes.id &&
                    i.attributes.id.value == b) ||
                  i.id == b
                )
                  return i;
            }
          : function (b, f) {
              return (
                ("string" == typeof b ? (f || k.doc).getElementById(b) : b) ||
                null
              );
            };
        n.isDescendant = function (b, f) {
          try {
            b = n.byId(b);
            for (f = n.byId(f); b; ) {
              if (b == f) return !0;
              b = b.parentNode;
            }
          } catch (j) {}
          return !1;
        };
        b.add("css-user-select", function (b, f, j) {
          if (!j) return !1;
          var b = j.style,
            f = ["Khtml", "O", "ms", "Moz", "Webkit"],
            j = f.length,
            i = "userSelect";
          do if ("undefined" !== typeof b[i]) return i;
          while (j-- && (i = f[j] + "UserSelect"));
          return !1;
        });
        var m = b("css-user-select");
        n.setSelectable = m
          ? function (b, f) {
              n.byId(b).style[m] = f ? "" : "none";
            }
          : function (b, f) {
              var b = n.byId(b),
                j = b.getElementsByTagName("*"),
                i = j.length;
              if (f)
                for (b.removeAttribute("unselectable"); i--; )
                  j[i].removeAttribute("unselectable");
              else
                for (b.setAttribute("unselectable", "on"); i--; )
                  j[i].setAttribute("unselectable", "on");
            };
        return n;
      });
    },
    "dojo/_base/browser": function () {
      require.has && require.has.add("config-selectorEngine", "acme");
      define(
        "../ready,./kernel,./connect,./unload,./window,./event,./html,./NodeList,../query,./xhr,./fx".split(
          ",",
        ),
        function (b) {
          return b;
        },
      );
    },
    "dojo/selector/acme": function () {
      define([
        "../dom",
        "../sniff",
        "../_base/array",
        "../_base/lang",
        "../_base/window",
      ], function (b, k, f, n, m) {
        var o = n.trim,
          p = f.forEach,
          j = "BackCompat" == m.doc.compatMode,
          i = !1,
          a = function () {
            return !0;
          },
          d = function (a) {
            for (
              var a = 0 <= ">~+".indexOf(a.slice(-1)) ? a + " * " : a + " ",
                b = function (b, c) {
                  return o(a.slice(b, c));
                },
                c = [],
                d = -1,
                e = -1,
                h = -1,
                l = -1,
                g = -1,
                j = -1,
                f = -1,
                m,
                p = "",
                k = "",
                r,
                n = 0,
                w = a.length,
                q = null,
                u = null,
                t = function () {
                  if (0 <= j) (q.id = b(j, n).replace(/\\/g, "")), (j = -1);
                  if (0 <= f) {
                    var a = f == n ? null : b(f, n);
                    q[0 > ">~+".indexOf(a) ? "tag" : "oper"] = a;
                    f = -1;
                  }
                  0 <= g &&
                    (q.classes.push(b(g + 1, n).replace(/\\/g, "")), (g = -1));
                };
              (p = k), (k = a.charAt(n)), n < w;
              n++
            )
              if ("\\" != p)
                if (
                  (q ||
                    ((r = n),
                    (q = {
                      query: null,
                      pseudos: [],
                      attrs: [],
                      classes: [],
                      tag: null,
                      oper: null,
                      id: null,
                      getTag: function () {
                        return i ? this.otag : this.tag;
                      },
                    }),
                    (f = n)),
                  m)
                )
                  k == m && (m = null);
                else if ("'" == k || '"' == k) m = k;
                else if (0 <= d)
                  if ("]" == k) {
                    u.attr
                      ? (u.matchFor = b(h || d + 1, n))
                      : (u.attr = b(d + 1, n));
                    if (
                      (d = u.matchFor) &&
                      ('"' == d.charAt(0) || "'" == d.charAt(0))
                    )
                      u.matchFor = d.slice(1, -1);
                    if (u.matchFor) u.matchFor = u.matchFor.replace(/\\/g, "");
                    q.attrs.push(u);
                    u = null;
                    d = h = -1;
                  } else {
                    if ("=" == k)
                      (h = 0 <= "|~^$*".indexOf(p) ? p : ""),
                        (u.type = h + k),
                        (u.attr = b(d + 1, n - h.length)),
                        (h = n + 1);
                  }
                else if (0 <= e) {
                  if (")" == k) {
                    if (0 <= l) u.value = b(e + 1, n);
                    l = e = -1;
                  }
                } else if ("#" == k) t(), (j = n + 1);
                else if ("." == k) t(), (g = n);
                else if (":" == k) t(), (l = n);
                else if ("[" == k) t(), (d = n), (u = {});
                else if ("(" == k)
                  0 <= l &&
                    ((u = { name: b(l + 1, n), value: null }),
                    q.pseudos.push(u)),
                    (e = n);
                else if (" " == k && p != k) {
                  t();
                  0 <= l && q.pseudos.push({ name: b(l + 1, n) });
                  q.loops =
                    q.pseudos.length || q.attrs.length || q.classes.length;
                  q.oquery = q.query = b(r, n);
                  q.otag = q.tag = q.oper ? null : q.tag || "*";
                  if (q.tag) q.tag = q.tag.toUpperCase();
                  if (c.length && c[c.length - 1].oper)
                    (q.infixOper = c.pop()),
                      (q.query = q.infixOper.query + " " + q.query);
                  c.push(q);
                  q = null;
                }
            return c;
          },
          c = function (a, b) {
            return !a
              ? b
              : !b
                ? a
                : function () {
                    return (
                      a.apply(window, arguments) && b.apply(window, arguments)
                    );
                  };
          },
          e = function (a, b) {
            var c = b || [];
            a && c.push(a);
            return c;
          },
          g = function (a) {
            return 1 == a.nodeType;
          },
          l = function (a, b) {
            return !a
              ? ""
              : "class" == b
                ? a.className || ""
                : "for" == b
                  ? a.htmlFor || ""
                  : "style" == b
                    ? a.style.cssText || ""
                    : (i ? a.getAttribute(b) : a.getAttribute(b, 2)) || "";
          },
          h = {
            "*=": function (a, b) {
              return function (c) {
                return 0 <= l(c, a).indexOf(b);
              };
            },
            "^=": function (a, b) {
              return function (c) {
                return 0 == l(c, a).indexOf(b);
              };
            },
            "$=": function (a, b) {
              return function (c) {
                var c = " " + l(c, a),
                  d = c.lastIndexOf(b);
                return -1 < d && d == c.length - b.length;
              };
            },
            "~=": function (a, b) {
              var c = " " + b + " ";
              return function (b) {
                return 0 <= (" " + l(b, a) + " ").indexOf(c);
              };
            },
            "|=": function (a, b) {
              var c = b + "-";
              return function (d) {
                d = l(d, a);
                return d == b || 0 == d.indexOf(c);
              };
            },
            "=": function (a, b) {
              return function (c) {
                return l(c, a) == b;
              };
            },
          },
          r = "undefined" == typeof m.doc.firstChild.nextElementSibling,
          q = !r ? "nextElementSibling" : "nextSibling",
          t = !r ? "previousElementSibling" : "previousSibling",
          s = r ? g : a,
          x = function (a) {
            for (; (a = a[t]); ) if (s(a)) return !1;
            return !0;
          },
          v = function (a) {
            for (; (a = a[q]); ) if (s(a)) return !1;
            return !0;
          },
          u = function (a) {
            var b = a.parentNode,
              b = 7 != b.nodeType ? b : b.nextSibling,
              c = 0,
              d = b.children || b.childNodes,
              e = a._i || a.getAttribute("_i") || -1,
              h =
                b._l ||
                ("undefined" !== typeof b.getAttribute
                  ? b.getAttribute("_l")
                  : -1);
            if (!d) return -1;
            d = d.length;
            if (h == d && 0 <= e && 0 <= h) return e;
            k("ie") && "undefined" !== typeof b.setAttribute
              ? b.setAttribute("_l", d)
              : (b._l = d);
            e = -1;
            for (b = b.firstElementChild || b.firstChild; b; b = b[q])
              if (s(b))
                k("ie") ? b.setAttribute("_i", ++c) : (b._i = ++c),
                  a === b && (e = c);
            return e;
          },
          w = function (a) {
            return !(u(a) % 2);
          },
          H = function (a) {
            return u(a) % 2;
          },
          F = {
            checked: function () {
              return function (a) {
                return !!("checked" in a ? a.checked : a.selected);
              };
            },
            disabled: function () {
              return function (a) {
                return a.disabled;
              };
            },
            enabled: function () {
              return function (a) {
                return !a.disabled;
              };
            },
            "first-child": function () {
              return x;
            },
            "last-child": function () {
              return v;
            },
            "only-child": function () {
              return function (a) {
                return x(a) && v(a);
              };
            },
            empty: function () {
              return function (a) {
                for (
                  var b = a.childNodes, a = a.childNodes.length - 1;
                  0 <= a;
                  a--
                ) {
                  var c = b[a].nodeType;
                  if (1 === c || 3 == c) return !1;
                }
                return !0;
              };
            },
            contains: function (a, b) {
              var c = b.charAt(0);
              if ('"' == c || "'" == c) b = b.slice(1, -1);
              return function (a) {
                return 0 <= a.innerHTML.indexOf(b);
              };
            },
            not: function (a, b) {
              var c = d(b)[0],
                e = { el: 1 };
              if ("*" != c.tag) e.tag = 1;
              if (!c.classes.length) e.classes = 1;
              var h = I(c, e);
              return function (a) {
                return !h(a);
              };
            },
            "nth-child": function (a, b) {
              var c = parseInt;
              if ("odd" == b) return H;
              if ("even" == b) return w;
              if (-1 != b.indexOf("n")) {
                var d = b.split("n", 2),
                  e = d[0] ? ("-" == d[0] ? -1 : c(d[0])) : 1,
                  h = d[1] ? c(d[1]) : 0,
                  l = 0,
                  g = -1;
                0 < e
                  ? 0 > h
                    ? (h = h % e && e + (h % e))
                    : 0 < h && (h >= e && (l = h - (h % e)), (h %= e))
                  : 0 > e && ((e *= -1), 0 < h && ((g = h), (h %= e)));
                if (0 < e)
                  return function (a) {
                    a = u(a);
                    return a >= l && (0 > g || a <= g) && a % e == h;
                  };
                b = h;
              }
              var i = c(b);
              return function (a) {
                return u(a) == i;
              };
            },
          },
          P =
            9 > k("ie") || (9 == k("ie") && k("quirks"))
              ? function (a) {
                  var b = a.toLowerCase();
                  "class" == b && (a = "className");
                  return function (c) {
                    return i ? c.getAttribute(a) : c[a] || c[b];
                  };
                }
              : function (a) {
                  return function (b) {
                    return b && b.getAttribute && b.hasAttribute(a);
                  };
                },
          I = function (b, d) {
            if (!b) return a;
            var d = d || {},
              e = null;
            "el" in d || (e = c(e, g));
            "tag" in d ||
              ("*" != b.tag &&
                (e = c(e, function (a) {
                  return (
                    a && (i ? a.tagName : a.tagName.toUpperCase()) == b.getTag()
                  );
                })));
            "classes" in d ||
              p(b.classes, function (a, b) {
                var d = RegExp("(?:^|\\s)" + a + "(?:\\s|$)");
                e = c(e, function (a) {
                  return d.test(a.className);
                });
                e.count = b;
              });
            "pseudos" in d ||
              p(b.pseudos, function (a) {
                var b = a.name;
                F[b] && (e = c(e, F[b](b, a.value)));
              });
            "attrs" in d ||
              p(b.attrs, function (a) {
                var b,
                  d = a.attr;
                a.type && h[a.type]
                  ? (b = h[a.type](d, a.matchFor))
                  : d.length && (b = P(d));
                b && (e = c(e, b));
              });
            "id" in d ||
              (b.id &&
                (e = c(e, function (a) {
                  return !!a && a.id == b.id;
                })));
            e || "default" in d || (e = a);
            return e;
          },
          N = function (a) {
            return function (b, c, d) {
              for (; (b = b[q]); )
                if (!r || g(b)) {
                  (!d || J(b, d)) && a(b) && c.push(b);
                  break;
                }
              return c;
            };
          },
          V = function (a) {
            return function (b, c, d) {
              for (b = b[q]; b; ) {
                if (s(b)) {
                  if (d && !J(b, d)) break;
                  a(b) && c.push(b);
                }
                b = b[q];
              }
              return c;
            };
          },
          z = function (b) {
            b = b || a;
            return function (a, c, d) {
              for (var e = 0, h = a.children || a.childNodes; (a = h[e++]); )
                s(a) && (!d || J(a, d)) && b(a, e) && c.push(a);
              return c;
            };
          },
          B = {},
          K = function (c) {
            var d = B[c.query];
            if (d) return d;
            var h = c.infixOper,
              h = h ? h.oper : "",
              l = I(c, { el: 1 }),
              g = "*" == c.tag,
              i = m.doc.getElementsByClassName;
            if (h) {
              i = { el: 1 };
              if (g) i.tag = 1;
              l = I(c, i);
              "+" == h
                ? (d = N(l))
                : "~" == h
                  ? (d = V(l))
                  : ">" == h && (d = z(l));
            } else if (c.id)
              (l = !c.loops && g ? a : I(c, { el: 1, id: 1 })),
                (d = function (a, d) {
                  var h = b.byId(c.id, a.ownerDocument || a);
                  if (h && l(h)) {
                    if (9 == a.nodeType) return e(h, d);
                    for (var g = h.parentNode; g && !(g == a); )
                      g = g.parentNode;
                    if (g) return e(h, d);
                  }
                });
            else if (
              i &&
              /\{\s*\[native code\]\s*\}/.test("" + i) &&
              c.classes.length &&
              !j
            )
              var l = I(c, { el: 1, classes: 1, id: 1 }),
                f = c.classes.join(" "),
                d = function (a, b, c) {
                  for (
                    var b = e(0, b), d, h = 0, g = a.getElementsByClassName(f);
                    (d = g[h++]);

                  )
                    l(d, a) && J(d, c) && b.push(d);
                  return b;
                };
            else
              !g && !c.loops
                ? (d = function (a, b, d) {
                    for (
                      var b = e(0, b),
                        h = 0,
                        l = c.getTag(),
                        l = l ? a.getElementsByTagName(l) : [];
                      (a = l[h++]);

                    )
                      J(a, d) && b.push(a);
                    return b;
                  })
                : ((l = I(c, { el: 1, tag: 1, id: 1 })),
                  (d = function (a, b, d) {
                    for (
                      var b = e(0, b),
                        h,
                        g = 0,
                        i = (h = c.getTag()) ? a.getElementsByTagName(h) : [];
                      (h = i[g++]);

                    )
                      l(h, a) && J(h, d) && b.push(h);
                    return b;
                  }));
            return (B[c.query] = d);
          },
          D = {},
          G = {},
          E = function (a) {
            var b = d(o(a));
            if (1 == b.length) {
              var c = K(b[0]);
              return function (a) {
                if ((a = c(a, []))) a.nozip = !0;
                return a;
              };
            }
            return function (a) {
              for (var a = e(a), c, d, h = b.length, l, g, i = 0; i < h; i++) {
                g = [];
                c = b[i];
                d = a.length - 1;
                if (0 < d) (l = {}), (g.nozip = !0);
                d = K(c);
                for (var j = 0; (c = a[j]); j++) d(c, g, l);
                if (!g.length) break;
                a = g;
              }
              return g;
            };
          },
          da = k("ie") ? "commentStrip" : "nozip",
          Q = !!m.doc.querySelectorAll,
          W = /\\[>~+]|n\+\d|([^ \\])?([>~+])([^ =])?/g,
          L = function (a, b, c, d) {
            return c ? (b ? b + " " : "") + c + (d ? " " + d : "") : a;
          },
          C = /([^[]*)([^\]]*])?/g,
          S = function (a, b, c) {
            return b.replace(W, L) + (c || "");
          },
          A = function (a, b) {
            a = a.replace(C, S);
            if (Q) {
              var c = G[a];
              if (c && !b) return c;
            }
            if ((c = D[a])) return c;
            var c = a.charAt(0),
              d = -1 == a.indexOf(" ");
            0 <= a.indexOf("#") && d && (b = !0);
            if (
              Q &&
              !b &&
              -1 == ">~+".indexOf(c) &&
              (!k("ie") || -1 == a.indexOf(":")) &&
              !(j && 0 <= a.indexOf(".")) &&
              -1 == a.indexOf(":contains") &&
              -1 == a.indexOf(":checked") &&
              -1 == a.indexOf("|=")
            ) {
              var e = 0 <= ">~+".indexOf(a.charAt(a.length - 1)) ? a + " *" : a;
              return (G[a] = function (b) {
                try {
                  if (!(9 == b.nodeType || d)) throw "";
                  var c = b.querySelectorAll(e);
                  c[da] = !0;
                  return c;
                } catch (h) {
                  return A(a, !0)(b);
                }
              });
            }
            var h = a.match(
              /([^\s,](?:"(?:\\.|[^"])+"|'(?:\\.|[^'])+'|[^,])*)/g,
            );
            return (D[a] =
              2 > h.length
                ? E(a)
                : function (a) {
                    for (var b = 0, c = [], d; (d = h[b++]); )
                      c = c.concat(E(d)(a));
                    return c;
                  });
          },
          y = 0,
          ea = k("ie")
            ? function (a) {
                return i
                  ? a.getAttribute("_uid") || a.setAttribute("_uid", ++y) || y
                  : a.uniqueID;
              }
            : function (a) {
                return a._uid || (a._uid = ++y);
              },
          J = function (a, b) {
            if (!b) return 1;
            var c = ea(a);
            return !b[c] ? (b[c] = 1) : 0;
          },
          Z = function (a) {
            if (a && a.nozip) return a;
            var b = [];
            if (!a || !a.length) return b;
            a[0] && b.push(a[0]);
            if (2 > a.length) return b;
            y++;
            var c, d;
            if (k("ie") && i) {
              var e = y + "";
              a[0].setAttribute("_zipIdx", e);
              for (c = 1; (d = a[c]); c++)
                a[c].getAttribute("_zipIdx") != e && b.push(d),
                  d.setAttribute("_zipIdx", e);
            } else if (k("ie") && a.commentStrip)
              try {
                for (c = 1; (d = a[c]); c++) g(d) && b.push(d);
              } catch (h) {}
            else {
              a[0] && (a[0]._zipIdx = y);
              for (c = 1; (d = a[c]); c++)
                a[c]._zipIdx != y && b.push(d), (d._zipIdx = y);
            }
            return b;
          },
          T = function (a, b) {
            b = b || m.doc;
            i = "div" === (b.ownerDocument || b).createElement("div").tagName;
            var c = A(a)(b);
            return c && c.nozip ? c : Z(c);
          };
        T.filter = function (a, c, e) {
          for (
            var h = [],
              l = d(c),
              l =
                1 == l.length && !/[^\w#\.]/.test(c)
                  ? I(l[0])
                  : function (a) {
                      return -1 != f.indexOf(T(c, b.byId(e)), a);
                    },
              g = 0,
              i;
            (i = a[g]);
            g++
          )
            l(i) && h.push(i);
          return h;
        };
        return T;
      });
    },
    "dojo/errors/RequestTimeoutError": function () {
      define("dojo/errors/RequestTimeoutError", [
        "./create",
        "./RequestError",
      ], function (b, k) {
        return b("RequestTimeoutError", null, k, { dojoType: "timeout" });
      });
    },
    "dojo/dom-style": function () {
      define("dojo/dom-style", ["./sniff", "./dom"], function (b, k) {
        function f(c, e, h) {
          e = e.toLowerCase();
          if (b("ie")) {
            if ("auto" == h) {
              if ("height" == e) return c.offsetHeight;
              if ("width" == e) return c.offsetWidth;
            }
            if ("fontweight" == e)
              switch (h) {
                case 700:
                  return "bold";
                default:
                  return "normal";
              }
          }
          e in a || (a[e] = d.test(e));
          return a[e] ? o(c, h) : h;
        }
        var n,
          m = {};
        n = b("webkit")
          ? function (a) {
              var b;
              if (1 == a.nodeType) {
                var c = a.ownerDocument.defaultView;
                b = c.getComputedStyle(a, null);
                if (!b && a.style)
                  (a.style.display = ""), (b = c.getComputedStyle(a, null));
              }
              return b || {};
            }
          : b("ie") && (9 > b("ie") || b("quirks"))
            ? function (a) {
                return 1 == a.nodeType && a.currentStyle ? a.currentStyle : {};
              }
            : function (a) {
                return 1 == a.nodeType
                  ? a.ownerDocument.defaultView.getComputedStyle(a, null)
                  : {};
              };
        m.getComputedStyle = n;
        var o;
        o = b("ie")
          ? function (a, b) {
              if (!b) return 0;
              if ("medium" == b) return 4;
              if (b.slice && "px" == b.slice(-2)) return parseFloat(b);
              var c = a.style,
                d = a.runtimeStyle,
                e = c.left,
                i = d.left;
              d.left = a.currentStyle.left;
              try {
                (c.left = b), (b = c.pixelLeft);
              } catch (j) {
                b = 0;
              }
              c.left = e;
              d.left = i;
              return b;
            }
          : function (a, b) {
              return parseFloat(b) || 0;
            };
        m.toPixelValue = o;
        var p = function (a, b) {
            try {
              return a.filters.item("DXImageTransform.Microsoft.Alpha");
            } catch (c) {
              return b ? {} : null;
            }
          },
          j =
            9 > b("ie") || (10 > b("ie") && b("quirks"))
              ? function (a) {
                  try {
                    return p(a).Opacity / 100;
                  } catch (b) {
                    return 1;
                  }
                }
              : function (a) {
                  return n(a).opacity;
                },
          i =
            9 > b("ie") || (10 > b("ie") && b("quirks"))
              ? function (a, b) {
                  var c = 100 * b,
                    d = 1 == b;
                  a.style.zoom = d ? "" : 1;
                  if (p(a)) p(a, 1).Opacity = c;
                  else {
                    if (d) return b;
                    a.style.filter +=
                      " progid:DXImageTransform.Microsoft.Alpha(Opacity=" +
                      c +
                      ")";
                  }
                  p(a, 1).Enabled = !d;
                  if ("tr" == a.tagName.toLowerCase())
                    for (c = a.firstChild; c; c = c.nextSibling)
                      "td" == c.tagName.toLowerCase() && i(c, b);
                  return b;
                }
              : function (a, b) {
                  return (a.style.opacity = b);
                },
          a = { left: !0, top: !0 },
          d = /margin|padding|width|height|max|min|offset/,
          c = b("ie") ? "styleFloat" : "cssFloat",
          e = { cssFloat: c, styleFloat: c, float: c };
        m.get = function (a, b) {
          var c = k.byId(a),
            d = arguments.length;
          if (2 == d && "opacity" == b) return j(c);
          var b = e[b] || b,
            i = m.getComputedStyle(c);
          return 1 == d ? i : f(c, b, i[b] || c.style[b]);
        };
        m.set = function (a, b, c) {
          var d = k.byId(a),
            j = arguments.length,
            f = "opacity" == b,
            b = e[b] || b;
          if (3 == j) return f ? i(d, c) : (d.style[b] = c);
          for (var o in b) m.set(a, o, b[o]);
          return m.getComputedStyle(d);
        };
        return m;
      });
    },
    "dojo/dom-geometry": function () {
      define(["./sniff", "./_base/window", "./dom", "./dom-style"], function (
        b,
        k,
        f,
        n,
      ) {
        function m(a, b, c, e, g, l) {
          l = l || "px";
          a = a.style;
          if (!isNaN(b)) a.left = b + l;
          if (!isNaN(c)) a.top = c + l;
          if (0 <= e) a.width = e + l;
          if (0 <= g) a.height = g + l;
        }
        function o(a) {
          return (
            "button" == a.tagName.toLowerCase() ||
            ("input" == a.tagName.toLowerCase() &&
              "button" == (a.getAttribute("type") || "").toLowerCase())
          );
        }
        function p(a) {
          return (
            "border-box" == j.boxModel ||
            "table" == a.tagName.toLowerCase() ||
            o(a)
          );
        }
        var j = { boxModel: "content-box" };
        if (b("ie"))
          j.boxModel =
            "BackCompat" == document.compatMode ? "border-box" : "content-box";
        j.getPadExtents = function (a, b) {
          var a = f.byId(a),
            c = b || n.getComputedStyle(a),
            e = n.toPixelValue,
            g = e(a, c.paddingLeft),
            l = e(a, c.paddingTop),
            h = e(a, c.paddingRight),
            c = e(a, c.paddingBottom);
          return { l: g, t: l, r: h, b: c, w: g + h, h: l + c };
        };
        j.getBorderExtents = function (a, b) {
          var a = f.byId(a),
            c = n.toPixelValue,
            e = b || n.getComputedStyle(a),
            g = "none" != e.borderLeftStyle ? c(a, e.borderLeftWidth) : 0,
            l = "none" != e.borderTopStyle ? c(a, e.borderTopWidth) : 0,
            h = "none" != e.borderRightStyle ? c(a, e.borderRightWidth) : 0,
            c = "none" != e.borderBottomStyle ? c(a, e.borderBottomWidth) : 0;
          return { l: g, t: l, r: h, b: c, w: g + h, h: l + c };
        };
        j.getPadBorderExtents = function (a, b) {
          var a = f.byId(a),
            c = b || n.getComputedStyle(a),
            e = j.getPadExtents(a, c),
            c = j.getBorderExtents(a, c);
          return {
            l: e.l + c.l,
            t: e.t + c.t,
            r: e.r + c.r,
            b: e.b + c.b,
            w: e.w + c.w,
            h: e.h + c.h,
          };
        };
        j.getMarginExtents = function (a, b) {
          var a = f.byId(a),
            c = b || n.getComputedStyle(a),
            e = n.toPixelValue,
            g = e(a, c.marginLeft),
            l = e(a, c.marginTop),
            h = e(a, c.marginRight),
            c = e(a, c.marginBottom);
          return { l: g, t: l, r: h, b: c, w: g + h, h: l + c };
        };
        j.getMarginBox = function (a, d) {
          var a = f.byId(a),
            c = d || n.getComputedStyle(a),
            e = j.getMarginExtents(a, c),
            g = a.offsetLeft - e.l,
            l = a.offsetTop - e.t,
            h = a.parentNode,
            i = n.toPixelValue;
          if (b("mozilla")) {
            var o = parseFloat(c.left),
              c = parseFloat(c.top);
            !isNaN(o) && !isNaN(c)
              ? ((g = o), (l = c))
              : h &&
                h.style &&
                ((h = n.getComputedStyle(h)),
                "visible" != h.overflow &&
                  ((g +=
                    "none" != h.borderLeftStyle ? i(a, h.borderLeftWidth) : 0),
                  (l +=
                    "none" != h.borderTopStyle ? i(a, h.borderTopWidth) : 0)));
          } else if ((b("opera") || (8 == b("ie") && !b("quirks"))) && h)
            (h = n.getComputedStyle(h)),
              (g -= "none" != h.borderLeftStyle ? i(a, h.borderLeftWidth) : 0),
              (l -= "none" != h.borderTopStyle ? i(a, h.borderTopWidth) : 0);
          return {
            l: g,
            t: l,
            w: a.offsetWidth + e.w,
            h: a.offsetHeight + e.h,
          };
        };
        j.getContentBox = function (a, d) {
          var a = f.byId(a),
            c = d || n.getComputedStyle(a),
            e = a.clientWidth,
            g = j.getPadExtents(a, c),
            l = j.getBorderExtents(a, c);
          e
            ? ((c = a.clientHeight), (l.w = l.h = 0))
            : ((e = a.offsetWidth), (c = a.offsetHeight));
          b("opera") && ((g.l += l.l), (g.t += l.t));
          return { l: g.l, t: g.t, w: e - g.w - l.w, h: c - g.h - l.h };
        };
        j.setContentSize = function (a, b, c) {
          var a = f.byId(a),
            e = b.w,
            b = b.h;
          p(a) &&
            ((c = j.getPadBorderExtents(a, c)),
            0 <= e && (e += c.w),
            0 <= b && (b += c.h));
          m(a, NaN, NaN, e, b);
        };
        var i = { l: 0, t: 0, w: 0, h: 0 };
        j.setMarginBox = function (a, d, c) {
          var a = f.byId(a),
            e = c || n.getComputedStyle(a),
            c = d.w,
            g = d.h,
            l = p(a) ? i : j.getPadBorderExtents(a, e),
            e = j.getMarginExtents(a, e);
          if (b("webkit") && o(a)) {
            var h = a.style;
            if (0 <= c && !h.width) h.width = "4px";
            if (0 <= g && !h.height) h.height = "4px";
          }
          0 <= c && (c = Math.max(c - l.w - e.w, 0));
          0 <= g && (g = Math.max(g - l.h - e.h, 0));
          m(a, d.l, d.t, c, g);
        };
        j.isBodyLtr = function (a) {
          a = a || k.doc;
          return (
            "ltr" ==
            (k.body(a).dir || a.documentElement.dir || "ltr").toLowerCase()
          );
        };
        j.docScroll = function (a) {
          var a = a || k.doc,
            d = k.doc.parentWindow || k.doc.defaultView;
          return "pageXOffset" in d
            ? { x: d.pageXOffset, y: d.pageYOffset }
            : (d = b("quirks") ? k.body(a) : a.documentElement) && {
                x: j.fixIeBiDiScrollLeft(d.scrollLeft || 0, a),
                y: d.scrollTop || 0,
              };
        };
        if (b("ie"))
          j.getIeDocumentElementOffset = function (a) {
            a = a || k.doc;
            a = a.documentElement;
            if (8 > b("ie")) {
              var d = a.getBoundingClientRect(),
                c = d.left,
                d = d.top;
              7 > b("ie") && ((c += a.clientLeft), (d += a.clientTop));
              return { x: 0 > c ? 0 : c, y: 0 > d ? 0 : d };
            }
            return { x: 0, y: 0 };
          };
        j.fixIeBiDiScrollLeft = function (a, d) {
          var d = d || k.doc,
            c = b("ie");
          if (c && !j.isBodyLtr(d)) {
            var e = b("quirks"),
              g = e ? k.body(d) : d.documentElement,
              l = k.global;
            6 == c &&
              !e &&
              l.frameElement &&
              g.scrollHeight > g.clientHeight &&
              (a += g.clientLeft);
            return 8 > c || e ? a + g.clientWidth - g.scrollWidth : -a;
          }
          return a;
        };
        j.position = function (a, d) {
          var a = f.byId(a),
            c = k.body(a.ownerDocument),
            e = a.getBoundingClientRect(),
            e = {
              x: e.left,
              y: e.top,
              w: e.right - e.left,
              h: e.bottom - e.top,
            };
          if (9 > b("ie")) {
            var g = j.getIeDocumentElementOffset(a.ownerDocument);
            e.x -= g.x + (b("quirks") ? c.clientLeft + c.offsetLeft : 0);
            e.y -= g.y + (b("quirks") ? c.clientTop + c.offsetTop : 0);
          }
          d && ((c = j.docScroll(a.ownerDocument)), (e.x += c.x), (e.y += c.y));
          return e;
        };
        j.getMarginSize = function (a, b) {
          var a = f.byId(a),
            c = j.getMarginExtents(a, b || n.getComputedStyle(a)),
            e = a.getBoundingClientRect();
          return { w: e.right - e.left + c.w, h: e.bottom - e.top + c.h };
        };
        j.normalizeEvent = function (a) {
          if (!("layerX" in a)) (a.layerX = a.offsetX), (a.layerY = a.offsetY);
          if (!b("dom-addeventlistener")) {
            var d = a.target,
              d = (d && d.ownerDocument) || document,
              c = b("quirks") ? d.body : d.documentElement,
              e = j.getIeDocumentElementOffset(d);
            a.pageX =
              a.clientX + j.fixIeBiDiScrollLeft(c.scrollLeft || 0, d) - e.x;
            a.pageY = a.clientY + (c.scrollTop || 0) - e.y;
          }
        };
        return j;
      });
    },
    "dojo/dom-prop": function () {
      define(
        "exports,./_base/kernel,./sniff,./_base/lang,./dom,./dom-style,./dom-construct,./_base/connect".split(
          ",",
        ),
        function (b, k, f, n, m, o, p, j) {
          var i = {},
            a = 0,
            d = k._scopeName + "attrid";
          b.names = {
            class: "className",
            for: "htmlFor",
            tabindex: "tabIndex",
            readonly: "readOnly",
            colspan: "colSpan",
            frameborder: "frameBorder",
            rowspan: "rowSpan",
            valuetype: "valueType",
          };
          b.get = function (a, d) {
            var a = m.byId(a),
              g = d.toLowerCase();
            return a[b.names[g] || d];
          };
          b.set = function (c, e, g) {
            c = m.byId(c);
            if (2 == arguments.length && "string" != typeof e) {
              for (var l in e) b.set(c, l, e[l]);
              return c;
            }
            l = e.toLowerCase();
            l = b.names[l] || e;
            if ("style" == l && "string" != typeof g) return o.set(c, g), c;
            if ("innerHTML" == l)
              return (
                f("ie") &&
                c.tagName.toLowerCase() in
                  {
                    col: 1,
                    colgroup: 1,
                    table: 1,
                    tbody: 1,
                    tfoot: 1,
                    thead: 1,
                    tr: 1,
                    title: 1,
                  }
                  ? (p.empty(c), c.appendChild(p.toDom(g, c.ownerDocument)))
                  : (c[l] = g),
                c
              );
            if (n.isFunction(g)) {
              var h = c[d];
              h || ((h = a++), (c[d] = h));
              i[h] || (i[h] = {});
              var k = i[h][l];
              if (k) j.disconnect(k);
              else
                try {
                  delete c[l];
                } catch (q) {}
              g ? (i[h][l] = j.connect(c, l, g)) : (c[l] = null);
              return c;
            }
            c[l] = g;
            return c;
          };
        },
      );
    },
    "dojo/when": function () {
      define(["./Deferred", "./promise/Promise"], function (b, k) {
        return function (f, n, m, o) {
          var p = f && "function" === typeof f.then,
            j = p && f instanceof k;
          if (p) {
            if (!j)
              (p = new b(f.cancel)),
                f.then(p.resolve, p.reject, p.progress),
                (f = p.promise);
          } else return n ? n(f) : new b().resolve(f);
          return n || m || o ? f.then(n, m, o) : f;
        };
      });
    },
    "dojo/dom-attr": function () {
      define(
        "exports,./sniff,./_base/lang,./dom,./dom-style,./dom-prop".split(","),
        function (b, k, f, n, m, o) {
          function p(a, b) {
            var c = a.getAttributeNode && a.getAttributeNode(b);
            return c && c.specified;
          }
          var j = { innerHTML: 1, className: 1, htmlFor: k("ie"), value: 1 },
            i = {
              classname: "class",
              htmlfor: "for",
              tabindex: "tabIndex",
              readonly: "readOnly",
            };
          b.has = function (a, b) {
            var c = b.toLowerCase();
            return j[o.names[c] || b] || p(n.byId(a), i[c] || b);
          };
          b.get = function (a, b) {
            var a = n.byId(a),
              c = b.toLowerCase(),
              e = o.names[c] || b,
              g = a[e];
            if (
              (j[e] && "undefined" != typeof g) ||
              ("href" != e && ("boolean" == typeof g || f.isFunction(g)))
            )
              return g;
            c = i[c] || b;
            return p(a, c) ? a.getAttribute(c) : null;
          };
          b.set = function (a, d, c) {
            a = n.byId(a);
            if (2 == arguments.length) {
              for (var e in d) b.set(a, e, d[e]);
              return a;
            }
            e = d.toLowerCase();
            var g = o.names[e] || d,
              l = j[g];
            if ("style" == g && "string" != typeof c) return m.set(a, c), a;
            if (l || "boolean" == typeof c || f.isFunction(c))
              return o.set(a, d, c);
            a.setAttribute(i[e] || d, c);
            return a;
          };
          b.remove = function (a, b) {
            n.byId(a).removeAttribute(i[b.toLowerCase()] || b);
          };
          b.getNodeProp = function (a, b) {
            var a = n.byId(a),
              c = b.toLowerCase(),
              e = o.names[c] || b;
            if (e in a && "href" != e) return a[e];
            c = i[c] || b;
            return p(a, c) ? a.getAttribute(c) : null;
          };
        },
      );
    },
    "dojo/dom-construct": function () {
      define(
        "exports,./_base/kernel,./sniff,./_base/window,./dom,./dom-attr,./on".split(
          ",",
        ),
        function (b, k, f, n, m, o) {
          function p(a, b) {
            var c = b.parentNode;
            c && c.insertBefore(a, b);
          }
          var j = {
              option: ["select"],
              tbody: ["table"],
              thead: ["table"],
              tfoot: ["table"],
              tr: ["table", "tbody"],
              td: ["table", "tbody", "tr"],
              th: ["table", "thead", "tr"],
              legend: ["fieldset"],
              caption: ["table"],
              colgroup: ["table"],
              col: ["table", "colgroup"],
              li: ["ul"],
            },
            i = /<\s*([\w\:]+)/,
            a = {},
            d = 0,
            c = "__" + k._scopeName + "ToDomId",
            e;
          for (e in j)
            if (j.hasOwnProperty(e))
              (k = j[e]),
                (k.pre =
                  "option" == e
                    ? '<select multiple="multiple">'
                    : "<" + k.join("><") + ">"),
                (k.post = "</" + k.reverse().join("></") + ">");
          b.toDom = function (b, e) {
            var e = e || n.doc,
              g = e[c];
            g || ((e[c] = g = ++d + ""), (a[g] = e.createElement("div")));
            var b = b + "",
              f = b.match(i),
              o = f ? f[1].toLowerCase() : "",
              g = a[g];
            if (f && j[o]) {
              f = j[o];
              g.innerHTML = f.pre + b + f.post;
              for (f = f.length; f; --f) g = g.firstChild;
            } else g.innerHTML = b;
            if (1 == g.childNodes.length) return g.removeChild(g.firstChild);
            for (o = e.createDocumentFragment(); (f = g.firstChild); )
              o.appendChild(f);
            return o;
          };
          b.place = function (a, c, d) {
            c = m.byId(c);
            "string" == typeof a &&
              (a = /^\s*</.test(a) ? b.toDom(a, c.ownerDocument) : m.byId(a));
            if ("number" == typeof d) {
              var e = c.childNodes;
              !e.length || e.length <= d
                ? c.appendChild(a)
                : p(a, e[0 > d ? 0 : d]);
            } else
              switch (d) {
                case "before":
                  p(a, c);
                  break;
                case "after":
                  d = a;
                  (e = c.parentNode) &&
                    (e.lastChild == c
                      ? e.appendChild(d)
                      : e.insertBefore(d, c.nextSibling));
                  break;
                case "replace":
                  c.parentNode.replaceChild(a, c);
                  break;
                case "only":
                  b.empty(c);
                  c.appendChild(a);
                  break;
                case "first":
                  if (c.firstChild) {
                    p(a, c.firstChild);
                    break;
                  }
                default:
                  c.appendChild(a);
              }
            return a;
          };
          b.create = function (a, c, d, e) {
            var g = n.doc;
            if (d) (d = m.byId(d)), (g = d.ownerDocument);
            "string" == typeof a && (a = g.createElement(a));
            c && o.set(a, c);
            d && b.place(a, d, e);
            return a;
          };
          var g = f("ie")
            ? function (a) {
                try {
                  a.innerHTML = "";
                } catch (b) {
                  for (var c; (c = a.lastChild); ) {
                    var d = a;
                    c.firstChild && g(c);
                    d && d.removeChild(c);
                  }
                }
              }
            : function (a) {
                a.innerHTML = "";
              };
          b.empty = function (a) {
            g(m.byId(a));
          };
          b.destroy = function (a) {
            if ((a = m.byId(a))) {
              var b = a,
                a = a.parentNode;
              b.firstChild && g(b);
              a && a.removeChild(b);
            }
          };
        },
      );
    },
    "dojo/request/xhr": function () {
      define("dojo/request/xhr", [
        "../errors/RequestError",
        "./watch",
        "./handlers",
        "./util",
        "../has",
      ], function (b, k, f, n, m) {
        function o(a, c) {
          var d = a.xhr;
          a.status = a.xhr.status;
          a.text = d.responseText;
          if ("xml" === a.options.handleAs) a.data = d.responseXML;
          if (!c)
            try {
              f(a);
            } catch (e) {
              c = e;
            }
          c
            ? this.reject(c)
            : n.checkStatus(d.status)
              ? this.resolve(a)
              : ((c = new b(
                  "Unable to load " + a.url + " status: " + d.status,
                  a,
                )),
                this.reject(c));
        }
        function p(h, g, l) {
          var f = n.parseArgs(
              h,
              n.deepCreate(e, g),
              m("native-formdata") && g && g.data && g.data instanceof FormData,
            ),
            h = f.url,
            g = f.options,
            s,
            x = n.deferred(f, d, j, i, o, function () {
              s && s();
            }),
            v = (f.xhr = p._create());
          if (!v)
            return x.cancel(new b("XHR was not created")), l ? x : x.promise;
          f.getHeader = function (a) {
            return this.xhr.getResponseHeader(a);
          };
          a && (s = a(v, x, f));
          var u = g.data,
            w = !g.sync,
            H = g.method;
          try {
            v.open(H, h, w, g.user || c, g.password || c);
            if (g.withCredentials) v.withCredentials = g.withCredentials;
            var F = g.headers,
              P;
            if (F)
              for (var I in F)
                "content-type" === I.toLowerCase()
                  ? (P = F[I])
                  : F[I] && v.setRequestHeader(I, F[I]);
            P && !1 !== P && v.setRequestHeader("Content-Type", P);
            (!F || !("X-Requested-With" in F)) &&
              v.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            n.notify && n.notify.emit("send", f, x.promise.cancel);
            v.send(u);
          } catch (N) {
            x.reject(N);
          }
          k(x);
          v = null;
          return l ? x : x.promise;
        }
        m.add("native-xhr", function () {
          return "undefined" !== typeof XMLHttpRequest;
        });
        m.add("dojo-force-activex-xhr", function () {
          return (
            m("activex") &&
            !document.addEventListener &&
            "file:" === window.location.protocol
          );
        });
        m.add("native-xhr2", function () {
          if (m("native-xhr")) {
            var a = new XMLHttpRequest();
            return (
              "undefined" !== typeof a.addEventListener &&
              ("undefined" === typeof opera || "undefined" !== typeof a.upload)
            );
          }
        });
        m.add("native-formdata", function () {
          return "function" === typeof FormData;
        });
        var j, i, a, d;
        m("native-xhr2")
          ? ((j = function () {
              return !this.isFulfilled();
            }),
            (d = function (a, b) {
              b.xhr.abort();
            }),
            (a = function (a, c, d) {
              function e() {
                c.handleResponse(d);
              }
              function g(a) {
                a = new b(
                  "Unable to load " + d.url + " status: " + a.target.status,
                  d,
                );
                c.handleResponse(d, a);
              }
              function l(a) {
                if (a.lengthComputable)
                  (d.loaded = a.loaded), (d.total = a.total), c.progress(d);
              }
              a.addEventListener("load", e, !1);
              a.addEventListener("error", g, !1);
              a.addEventListener("progress", l, !1);
              return function () {
                a.removeEventListener("load", e, !1);
                a.removeEventListener("error", g, !1);
                a.removeEventListener("progress", l, !1);
              };
            }))
          : ((j = function (a) {
              return a.xhr.readyState;
            }),
            (i = function (a) {
              return 4 === a.xhr.readyState;
            }),
            (d = function (a, b) {
              var c = b.xhr,
                d = typeof c.abort;
              ("function" === d || "object" === d || "unknown" === d) &&
                c.abort();
            }));
        var c,
          e = {
            data: null,
            query: null,
            sync: !1,
            method: "GET",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          };
        p._create = function () {
          throw Error("XMLHTTP not available");
        };
        if (m("native-xhr") && !m("dojo-force-activex-xhr"))
          p._create = function () {
            return new XMLHttpRequest();
          };
        else if (m("activex"))
          try {
            new ActiveXObject("Msxml2.XMLHTTP"),
              (p._create = function () {
                return new ActiveXObject("Msxml2.XMLHTTP");
              });
          } catch (g) {
            try {
              new ActiveXObject("Microsoft.XMLHTTP"),
                (p._create = function () {
                  return new ActiveXObject("Microsoft.XMLHTTP");
                });
            } catch (l) {}
          }
        n.addCommonMethods(p);
        return p;
      });
    },
    "dojo/text": function () {
      define(["./_base/kernel", "require", "./has", "./_base/xhr"], function (
        b,
        k,
        f,
        n,
      ) {
        var m;
        m = function (a, d, c) {
          n("GET", {
            url: a,
            sync: !!d,
            load: c,
            headers: b.config.textPluginHeaders || {},
          });
        };
        var o = {},
          p = function (a) {
            if (a) {
              var a = a.replace(
                  /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
                  "",
                ),
                b = a.match(/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im);
              b && (a = b[1]);
            } else a = "";
            return a;
          },
          j = {},
          i = {};
        b.cache = function (a, b, c) {
          var e;
          "string" == typeof a
            ? /\//.test(a)
              ? ((e = a), (c = b))
              : (e = k.toUrl(a.replace(/\./g, "/") + (b ? "/" + b : "")))
            : ((e = a + ""), (c = b));
          a = void 0 != c && "string" != typeof c ? c.value : c;
          c = c && c.sanitize;
          if ("string" == typeof a) return (o[e] = a), c ? p(a) : a;
          if (null === a) return delete o[e], null;
          e in o ||
            m(e, !0, function (a) {
              o[e] = a;
            });
          return c ? p(o[e]) : o[e];
        };
        return {
          dynamic: !0,
          normalize: function (a, b) {
            var c = a.split("!"),
              e = c[0];
            return (/^\./.test(e) ? b(e) : e) + (c[1] ? "!" + c[1] : "");
          },
          load: function (a, b, c) {
            var a = a.split("!"),
              e = 1 < a.length,
              g = a[0],
              l = b.toUrl(a[0]),
              a = "url:" + l,
              h = j,
              f = function (a) {
                c(e ? p(a) : a);
              };
            g in o
              ? (h = o[g])
              : a in b.cache
                ? (h = b.cache[a])
                : l in o && (h = o[l]);
            if (h === j)
              if (i[l]) i[l].push(f);
              else {
                var k = (i[l] = [f]);
                m(l, !b.async, function (a) {
                  o[g] = o[l] = a;
                  for (var b = 0; b < k.length; ) k[b++](a);
                  delete i[l];
                });
              }
            else f(h);
          },
        };
      });
    },
    "dojo/keys": function () {
      define("dojo/keys", ["./_base/kernel", "./sniff"], function (b, k) {
        return (b.keys = {
          BACKSPACE: 8,
          TAB: 9,
          CLEAR: 12,
          ENTER: 13,
          SHIFT: 16,
          CTRL: 17,
          ALT: 18,
          META: k("webkit") ? 91 : 224,
          PAUSE: 19,
          CAPS_LOCK: 20,
          ESCAPE: 27,
          SPACE: 32,
          PAGE_UP: 33,
          PAGE_DOWN: 34,
          END: 35,
          HOME: 36,
          LEFT_ARROW: 37,
          UP_ARROW: 38,
          RIGHT_ARROW: 39,
          DOWN_ARROW: 40,
          INSERT: 45,
          DELETE: 46,
          HELP: 47,
          LEFT_WINDOW: 91,
          RIGHT_WINDOW: 92,
          SELECT: 93,
          NUMPAD_0: 96,
          NUMPAD_1: 97,
          NUMPAD_2: 98,
          NUMPAD_3: 99,
          NUMPAD_4: 100,
          NUMPAD_5: 101,
          NUMPAD_6: 102,
          NUMPAD_7: 103,
          NUMPAD_8: 104,
          NUMPAD_9: 105,
          NUMPAD_MULTIPLY: 106,
          NUMPAD_PLUS: 107,
          NUMPAD_ENTER: 108,
          NUMPAD_MINUS: 109,
          NUMPAD_PERIOD: 110,
          NUMPAD_DIVIDE: 111,
          F1: 112,
          F2: 113,
          F3: 114,
          F4: 115,
          F5: 116,
          F6: 117,
          F7: 118,
          F8: 119,
          F9: 120,
          F10: 121,
          F11: 122,
          F12: 123,
          F13: 124,
          F14: 125,
          F15: 126,
          NUM_LOCK: 144,
          SCROLL_LOCK: 145,
          UP_DPAD: 175,
          DOWN_DPAD: 176,
          LEFT_DPAD: 177,
          RIGHT_DPAD: 178,
          copyKey: k("mac") && !k("air") ? (k("safari") ? 91 : 224) : 17,
        });
      });
    },
    "dojo/domReady": function () {
      define(["./has"], function (b) {
        function k(a) {
          p ? a(n) : j.push(a);
        }
        var f = this,
          n = document,
          m = { loaded: 1, complete: 1 },
          o = "string" != typeof n.readyState,
          p = !!m[n.readyState];
        if (o) n.readyState = "loading";
        if (!p) {
          var j = [],
            i = [],
            a = function (a) {
              a = a || f.event;
              if (!(p || ("readystatechange" == a.type && !m[n.readyState]))) {
                p = 1;
                if (o) n.readyState = "complete";
                for (; j.length; ) j.shift()(n);
              }
            },
            d = function (b, c) {
              b.addEventListener(c, a, !1);
              j.push(function () {
                b.removeEventListener(c, a, !1);
              });
            };
          if (!b("dom-addeventlistener")) {
            var d = function (b, c) {
                c = "on" + c;
                b.attachEvent(c, a);
                j.push(function () {
                  b.detachEvent(c, a);
                });
              },
              c = n.createElement("div");
            try {
              c.doScroll &&
                null === f.frameElement &&
                i.push(function () {
                  try {
                    return c.doScroll("left"), 1;
                  } catch (a) {}
                });
            } catch (e) {}
          }
          d(n, "DOMContentLoaded");
          d(f, "load");
          "onreadystatechange" in n
            ? d(n, "readystatechange")
            : o ||
              i.push(function () {
                return m[n.readyState];
              });
          if (i.length) {
            var g = function () {
              if (!p) {
                for (var b = i.length; b--; )
                  if (i[b]()) {
                    a("poller");
                    return;
                  }
                setTimeout(g, 30);
              }
            };
            g();
          }
        }
        k.load = function (a, b, c) {
          k(c);
        };
        return k;
      });
    },
    "dojo/_base/lang": function () {
      define("dojo/_base/lang", ["./kernel", "../has", "../sniff"], function (
        b,
        k,
      ) {
        k.add("bug-for-in-skips-shadowed", function () {
          for (var a in { toString: 1 }) return 0;
          return 1;
        });
        var f = k("bug-for-in-skips-shadowed")
            ? "hasOwnProperty.valueOf.isPrototypeOf.propertyIsEnumerable.toLocaleString.toString.constructor".split(
                ".",
              )
            : [],
          n = f.length,
          m = function (a, d, c) {
            var e,
              g = 0,
              i = b.global;
            if (!c)
              if (a.length) {
                e = a[g++];
                try {
                  c = b.scopeMap[e] && b.scopeMap[e][1];
                } catch (h) {}
                c = c || (e in i ? i[e] : d ? (i[e] = {}) : void 0);
              } else return i;
            for (; c && (e = a[g++]); )
              c = e in c ? c[e] : d ? (c[e] = {}) : void 0;
            return c;
          },
          o = Object.prototype.toString,
          p = function (a, b, c) {
            return (c || []).concat(Array.prototype.slice.call(a, b || 0));
          },
          j = /\{([^\}]+)\}/g,
          i = {
            _extraNames: f,
            _mixin: function (a, b, c) {
              var e,
                g,
                i,
                h = {};
              for (e in b)
                if (
                  ((g = b[e]),
                  !(e in a) || (a[e] !== g && (!(e in h) || h[e] !== g)))
                )
                  a[e] = c ? c(g) : g;
              if (k("bug-for-in-skips-shadowed") && b)
                for (i = 0; i < n; ++i)
                  if (
                    ((e = f[i]),
                    (g = b[e]),
                    !(e in a) || (a[e] !== g && (!(e in h) || h[e] !== g)))
                  )
                    a[e] = c ? c(g) : g;
              return a;
            },
            mixin: function (a, b) {
              a || (a = {});
              for (var c = 1, e = arguments.length; c < e; c++)
                i._mixin(a, arguments[c]);
              return a;
            },
            setObject: function (a, b, c) {
              var e = a.split("."),
                a = e.pop();
              return (c = m(e, !0, c)) && a ? (c[a] = b) : void 0;
            },
            getObject: function (a, b, c) {
              return m(a.split("."), b, c);
            },
            exists: function (a, b) {
              return void 0 !== i.getObject(a, !1, b);
            },
            isString: function (a) {
              return "string" == typeof a || a instanceof String;
            },
            isArray: function (a) {
              return a && (a instanceof Array || "array" == typeof a);
            },
            isFunction: function (a) {
              return "[object Function]" === o.call(a);
            },
            isObject: function (a) {
              return (
                void 0 !== a &&
                (null === a ||
                  "object" == typeof a ||
                  i.isArray(a) ||
                  i.isFunction(a))
              );
            },
            isArrayLike: function (a) {
              return (
                a &&
                void 0 !== a &&
                !i.isString(a) &&
                !i.isFunction(a) &&
                !(a.tagName && "form" == a.tagName.toLowerCase()) &&
                (i.isArray(a) || isFinite(a.length))
              );
            },
            isAlien: function (a) {
              return (
                a &&
                !i.isFunction(a) &&
                /\{\s*\[native code\]\s*\}/.test("" + a)
              );
            },
            extend: function (a, b) {
              for (var c = 1, e = arguments.length; c < e; c++)
                i._mixin(a.prototype, arguments[c]);
              return a;
            },
            _hitchArgs: function (a, d) {
              var c = i._toArray(arguments, 2),
                e = i.isString(d);
              return function () {
                var g = i._toArray(arguments),
                  l = e ? (a || b.global)[d] : d;
                return l && l.apply(a || this, c.concat(g));
              };
            },
            hitch: function (a, d) {
              if (2 < arguments.length) return i._hitchArgs.apply(b, arguments);
              d || ((d = a), (a = null));
              if (i.isString(d)) {
                a = a || b.global;
                if (!a[d])
                  throw [
                    'lang.hitch: scope["',
                    d,
                    '"] is null (scope="',
                    a,
                    '")',
                  ].join("");
                return function () {
                  return a[d].apply(a, arguments || []);
                };
              }
              return !a
                ? d
                : function () {
                    return d.apply(a, arguments || []);
                  };
            },
            delegate: (function () {
              function a() {}
              return function (b, c) {
                a.prototype = b;
                var e = new a();
                a.prototype = null;
                c && i._mixin(e, c);
                return e;
              };
            })(),
            _toArray: k("ie")
              ? (function () {
                  function a(a, b, e) {
                    e = e || [];
                    for (b = b || 0; b < a.length; b++) e.push(a[b]);
                    return e;
                  }
                  return function (b) {
                    return (b.item ? a : p).apply(this, arguments);
                  };
                })()
              : p,
            partial: function (a) {
              return i.hitch.apply(b, [null].concat(i._toArray(arguments)));
            },
            clone: function (a) {
              if (!a || "object" != typeof a || i.isFunction(a)) return a;
              if (a.nodeType && "cloneNode" in a) return a.cloneNode(!0);
              if (a instanceof Date) return new Date(a.getTime());
              if (a instanceof RegExp) return RegExp(a);
              var b, c, e;
              if (i.isArray(a)) {
                b = [];
                for (c = 0, e = a.length; c < e; ++c)
                  c in a && b.push(i.clone(a[c]));
              } else b = a.constructor ? new a.constructor() : {};
              return i._mixin(b, a, i.clone);
            },
            trim: String.prototype.trim
              ? function (a) {
                  return a.trim();
                }
              : function (a) {
                  return a.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
                },
            replace: function (a, b, c) {
              return a.replace(
                c || j,
                i.isFunction(b)
                  ? b
                  : function (a, c) {
                      return i.getObject(c, !1, b);
                    },
              );
            },
          };
        i.mixin(b, i);
        return i;
      });
    },
    "dojo/request/util": function () {
      define(
        "dojo/request/util",
        "exports,../errors/RequestError,../errors/CancelError,../Deferred,../io-query,../_base/array,../_base/lang".split(
          ",",
        ),
        function (b, k, f, n, m, o, p) {
          function j(a) {
            return i(a);
          }
          b.deepCopy = function (a, d) {
            for (var c in d) {
              var e = a[c],
                g = d[c];
              e !== g &&
                (e && "object" === typeof e && g && "object" === typeof g
                  ? b.deepCopy(e, g)
                  : (a[c] = g));
            }
            return a;
          };
          b.deepCreate = function (a, d) {
            var d = d || {},
              c = p.delegate(a),
              e,
              g;
            for (e in a)
              (g = a[e]) &&
                "object" === typeof g &&
                (c[e] = b.deepCreate(g, d[e]));
            return b.deepCopy(c, d);
          };
          var i =
            Object.freeze ||
            function (a) {
              return a;
            };
          b.deferred = function (a, d, c, e, g, l) {
            var h = new n(function (b) {
              d && d(h, a);
              return !b || (!(b instanceof k) && !(b instanceof f))
                ? new f("Request canceled", a)
                : b;
            });
            h.response = a;
            h.isValid = c;
            h.isReady = e;
            h.handleResponse = g;
            c = h.then(j).otherwise(function (b) {
              b.response = a;
              throw b;
            });
            b.notify &&
              c.then(
                p.hitch(b.notify, "emit", "load"),
                p.hitch(b.notify, "emit", "error"),
              );
            e = c.then(function (a) {
              return a.data || a.text;
            });
            c = i(p.delegate(e, { response: c }));
            l &&
              h.then(
                function (a) {
                  l.call(h, a);
                },
                function (b) {
                  l.call(h, a, b);
                },
              );
            h.promise = c;
            h.then = c.then;
            return h;
          };
          b.addCommonMethods = function (a, b) {
            o.forEach(b || ["GET", "POST", "PUT", "DELETE"], function (b) {
              a[("DELETE" === b ? "DEL" : b).toLowerCase()] = function (d, g) {
                g = p.delegate(g || {});
                g.method = b;
                return a(d, g);
              };
            });
          };
          b.parseArgs = function (a, b, c) {
            var e = b.data,
              g = b.query;
            if (e && !c && "object" === typeof e) b.data = m.objectToQuery(e);
            g
              ? ("object" === typeof g && (g = m.objectToQuery(g)),
                b.preventCache &&
                  (g += (g ? "&" : "") + "request.preventCache=" + +new Date()))
              : b.preventCache && (g = "request.preventCache=" + +new Date());
            a && g && (a += (~a.indexOf("?") ? "&" : "?") + g);
            return {
              url: a,
              options: b,
              getHeader: function () {
                return null;
              },
            };
          };
          b.checkStatus = function (a) {
            a = a || 0;
            return (200 <= a && 300 > a) || 304 === a || 1223 === a || !a;
          };
        },
      );
    },
    "dojo/Evented": function () {
      define("dojo/Evented", ["./aspect", "./on"], function (b, k) {
        function f() {}
        var n = b.after;
        f.prototype = {
          on: function (b, f) {
            return k.parse(this, b, f, function (b, j) {
              return n(b, "on" + j, f, !0);
            });
          },
          emit: function (b, f) {
            var p = [this];
            p.push.apply(p, arguments);
            return k.emit.apply(k, p);
          },
        };
        return f;
      });
    },
    "dojo/mouse": function () {
      define("dojo/mouse", [
        "./_base/kernel",
        "./on",
        "./has",
        "./dom",
        "./_base/window",
      ], function (b, k, f, n, m) {
        function o(b, f) {
          var i = function (a, d) {
            return k(a, b, function (b) {
              if (f) return f(b, d);
              if (!n.isDescendant(b.relatedTarget, a)) return d.call(this, b);
            });
          };
          i.bubble = function (a) {
            return o(b, function (b, c) {
              var e = a(b.target),
                g = b.relatedTarget;
              if (e && e != (g && 1 == g.nodeType && a(g))) return c.call(e, b);
            });
          };
          return i;
        }
        f.add("dom-quirks", m.doc && "BackCompat" == m.doc.compatMode);
        f.add(
          "events-mouseenter",
          m.doc && "onmouseenter" in m.doc.createElement("div"),
        );
        f.add("events-mousewheel", m.doc && "onmousewheel" in m.doc);
        m =
          (f("dom-quirks") && f("ie")) || !f("dom-addeventlistener")
            ? {
                LEFT: 1,
                MIDDLE: 4,
                RIGHT: 2,
                isButton: function (b, f) {
                  return b.button & f;
                },
                isLeft: function (b) {
                  return b.button & 1;
                },
                isMiddle: function (b) {
                  return b.button & 4;
                },
                isRight: function (b) {
                  return b.button & 2;
                },
              }
            : {
                LEFT: 0,
                MIDDLE: 1,
                RIGHT: 2,
                isButton: function (b, f) {
                  return b.button == f;
                },
                isLeft: function (b) {
                  return 0 == b.button;
                },
                isMiddle: function (b) {
                  return 1 == b.button;
                },
                isRight: function (b) {
                  return 2 == b.button;
                },
              };
        b.mouseButtons = m;
        b = f("events-mousewheel")
          ? "mousewheel"
          : function (b, f) {
              return k(b, "DOMMouseScroll", function (b) {
                b.wheelDelta = -b.detail;
                f.call(this, b);
              });
            };
        return {
          _eventHandler: o,
          enter: o("mouseover"),
          leave: o("mouseout"),
          wheel: b,
          isLeft: m.isLeft,
          isMiddle: m.isMiddle,
          isRight: m.isRight,
        };
      });
    },
    "dojo/topic": function () {
      define("dojo/topic", ["./Evented"], function (b) {
        var k = new b();
        return {
          publish: function (b, n) {
            return k.emit.apply(k, arguments);
          },
          subscribe: function (b, n) {
            return k.on.apply(k, arguments);
          },
        };
      });
    },
    "dojo/_base/xhr": function () {
      define(
        "dojo/_base/xhr",
        "./kernel,./sniff,require,../io-query,../dom,../dom-form,./Deferred,./config,./json,./lang,./array,../on,../aspect,../request/watch,../request/xhr,../request/util".split(
          ",",
        ),
        function (b, k, f, n, m, o, p, j, i, a, d, c, e, g, l, h) {
          b._xhrObj = l._create;
          var r = b.config;
          b.objectToQuery = n.objectToQuery;
          b.queryToObject = n.queryToObject;
          b.fieldToObject = o.fieldToObject;
          b.formToObject = o.toObject;
          b.formToQuery = o.toQuery;
          b.formToJson = o.toJson;
          b._blockAsync = !1;
          var q =
            (b._contentHandlers =
            b.contentHandlers =
              {
                text: function (a) {
                  return a.responseText;
                },
                json: function (a) {
                  return i.fromJson(a.responseText || null);
                },
                "json-comment-filtered": function (a) {
                  j.useCommentedJson ||
                    console.warn(
                      "Consider using the standard mimetype:application/json. json-commenting can introduce security issues. To decrease the chances of hijacking, use the standard the 'json' handler and prefix your json with: {}&&\nUse djConfig.useCommentedJson=true to turn off this message.",
                    );
                  var a = a.responseText,
                    b = a.indexOf("/*"),
                    c = a.lastIndexOf("*/");
                  if (-1 == b || -1 == c)
                    throw Error("JSON was not comment filtered");
                  return i.fromJson(a.substring(b + 2, c));
                },
                javascript: function (a) {
                  return b.eval(a.responseText);
                },
                xml: function (a) {
                  var b = a.responseXML;
                  if (k("ie") && (!b || !b.documentElement)) {
                    var c = function (a) {
                        return "MSXML" + a + ".DOMDocument";
                      },
                      c = ["Microsoft.XMLDOM", c(6), c(4), c(3), c(2)];
                    d.some(c, function (c) {
                      try {
                        var d = new ActiveXObject(c);
                        d.async = !1;
                        d.loadXML(a.responseText);
                        b = d;
                      } catch (e) {
                        return !1;
                      }
                      return !0;
                    });
                  }
                  return b;
                },
                "json-comment-optional": function (a) {
                  return a.responseText && /^[^{\[]*\/\*/.test(a.responseText)
                    ? q["json-comment-filtered"](a)
                    : q.json(a);
                },
              });
          b._ioSetArgs = function (c, d, e, h) {
            var g = { args: c, url: c.url },
              i = null;
            if (c.form) {
              var i = m.byId(c.form),
                f = i.getAttributeNode("action");
              g.url = g.url || (f ? f.value : null);
              i = o.toObject(i);
            }
            f = [{}];
            i && f.push(i);
            c.content && f.push(c.content);
            c.preventCache &&
              f.push({ "dojo.preventCache": new Date().valueOf() });
            g.query = n.objectToQuery(a.mixin.apply(null, f));
            g.handleAs = c.handleAs || "text";
            var l = new p(function (a) {
              a.canceled = !0;
              d && d(a);
              var b = a.ioArgs.error;
              if (!b)
                (b = Error("request cancelled")),
                  (b.dojoType = "cancel"),
                  (a.ioArgs.error = b);
              return b;
            });
            l.addCallback(e);
            var j = c.load;
            j &&
              a.isFunction(j) &&
              l.addCallback(function (a) {
                return j.call(c, a, g);
              });
            var k = c.error;
            k &&
              a.isFunction(k) &&
              l.addErrback(function (a) {
                return k.call(c, a, g);
              });
            var q = c.handle;
            q &&
              a.isFunction(q) &&
              l.addBoth(function (a) {
                return q.call(c, a, g);
              });
            l.addErrback(function (a) {
              return h(a, l);
            });
            r.ioPublish &&
              b.publish &&
              !1 !== g.args.ioPublish &&
              (l.addCallbacks(
                function (a) {
                  b.publish("/dojo/io/load", [l, a]);
                  return a;
                },
                function (a) {
                  b.publish("/dojo/io/error", [l, a]);
                  return a;
                },
              ),
              l.addBoth(function (a) {
                b.publish("/dojo/io/done", [l, a]);
                return a;
              }));
            l.ioArgs = g;
            return l;
          };
          var t = function (a) {
              a = q[a.ioArgs.handleAs](a.ioArgs.xhr);
              return void 0 === a ? null : a;
            },
            s = function (a, b) {
              b.ioArgs.args.failOk || console.error(a);
              return a;
            },
            x = function (a) {
              0 >= v &&
                ((v = 0),
                r.ioPublish &&
                  b.publish &&
                  (!a || (a && !1 !== a.ioArgs.args.ioPublish)) &&
                  b.publish("/dojo/io/stop"));
            },
            v = 0;
          e.after(g, "_onAction", function () {
            v -= 1;
          });
          e.after(g, "_onInFlight", x);
          b._ioCancelAll = g.cancelAll;
          b._ioNotifyStart = function (a) {
            r.ioPublish &&
              b.publish &&
              !1 !== a.ioArgs.args.ioPublish &&
              (v || b.publish("/dojo/io/start"),
              (v += 1),
              b.publish("/dojo/io/send", [a]));
          };
          b._ioWatch = function (b, c, d, e) {
            b.ioArgs.options = b.ioArgs.args;
            a.mixin(b, {
              response: b.ioArgs,
              isValid: function () {
                return c(b);
              },
              isReady: function () {
                return d(b);
              },
              handleResponse: function () {
                return e(b);
              },
            });
            g(b);
            x(b);
          };
          b._ioAddQueryToUrl = function (a) {
            if (a.query.length)
              (a.url += (-1 == a.url.indexOf("?") ? "?" : "&") + a.query),
                (a.query = null);
          };
          b.xhr = function (a, c, d) {
            var e,
              h = b._ioSetArgs(
                c,
                function () {
                  e && e.cancel();
                },
                t,
                s,
              ),
              g = h.ioArgs;
            "postData" in c
              ? (g.query = c.postData)
              : "putData" in c
                ? (g.query = c.putData)
                : "rawBody" in c
                  ? (g.query = c.rawBody)
                  : ((2 < arguments.length && !d) ||
                      -1 === "POST|PUT".indexOf(a.toUpperCase())) &&
                    b._ioAddQueryToUrl(g);
            var i = {
              method: a,
              handleAs: "text",
              timeout: c.timeout,
              withCredentials: c.withCredentials,
              ioArgs: g,
            };
            if ("undefined" !== typeof c.headers) i.headers = c.headers;
            if ("undefined" !== typeof c.contentType) {
              if (!i.headers) i.headers = {};
              i.headers["Content-Type"] = c.contentType;
            }
            if ("undefined" !== typeof g.query) i.data = g.query;
            if ("undefined" !== typeof c.sync) i.sync = c.sync;
            b._ioNotifyStart(h);
            try {
              e = l(g.url, i, !0);
            } catch (f) {
              return h.cancel(), h;
            }
            h.ioArgs.xhr = e.response.xhr;
            e.then(function () {
              h.resolve(h);
            }).otherwise(function (a) {
              g.error = a;
              if (a.response)
                (a.status = a.response.status),
                  (a.responseText = a.response.text),
                  (a.xhr = a.response.xhr);
              h.reject(a);
            });
            return h;
          };
          b.xhrGet = function (a) {
            return b.xhr("GET", a);
          };
          b.rawXhrPost = b.xhrPost = function (a) {
            return b.xhr("POST", a, !0);
          };
          b.rawXhrPut = b.xhrPut = function (a) {
            return b.xhr("PUT", a, !0);
          };
          b.xhrDelete = function (a) {
            return b.xhr("DELETE", a);
          };
          b._isDocumentOk = function (a) {
            return h.checkStatus(a.status);
          };
          b._getText = function (a) {
            var c;
            b.xhrGet({
              url: a,
              sync: !0,
              load: function (a) {
                c = a;
              },
            });
            return c;
          };
          a.mixin(b.xhr, {
            _xhrObj: b._xhrObj,
            fieldToObject: o.fieldToObject,
            formToObject: o.toObject,
            objectToQuery: n.objectToQuery,
            formToQuery: o.toQuery,
            formToJson: o.toJson,
            queryToObject: n.queryToObject,
            contentHandlers: q,
            _ioSetArgs: b._ioSetArgs,
            _ioCancelAll: b._ioCancelAll,
            _ioNotifyStart: b._ioNotifyStart,
            _ioWatch: b._ioWatch,
            _ioAddQueryToUrl: b._ioAddQueryToUrl,
            _isDocumentOk: b._isDocumentOk,
            _getText: b._getText,
            get: b.xhrGet,
            post: b.xhrPost,
            put: b.xhrPut,
            del: b.xhrDelete,
          });
          return b.xhr;
        },
      );
    },
    "dojo/loadInit": function () {
      define("dojo/loadInit", ["./_base/loader"], function (b) {
        return {
          dynamic: 0,
          normalize: function (b) {
            return b;
          },
          load: b.loadInit,
        };
      });
    },
    "dojo/_base/unload": function () {
      define(["./kernel", "./lang", "../on"], function (b, k, f) {
        var n = window,
          m = {
            addOnWindowUnload: function (o, m) {
              if (!b.windowUnloaded)
                f(n, "unload", (b.windowUnloaded = function () {}));
              f(n, "unload", k.hitch(o, m));
            },
            addOnUnload: function (b, m) {
              f(n, "beforeunload", k.hitch(b, m));
            },
          };
        b.addOnWindowUnload = m.addOnWindowUnload;
        b.addOnUnload = m.addOnUnload;
        return m;
      });
    },
    "dojo/Deferred": function () {
      define([
        "./has",
        "./_base/lang",
        "./errors/CancelError",
        "./promise/Promise",
        "./promise/instrumentation",
      ], function (b, k, f, n, m) {
        var o = Object.freeze || function () {},
          p = function (a, b, g, i, h) {
            2 === b &&
              d.instrumentRejected &&
              0 === a.length &&
              d.instrumentRejected(g, !1, i, h);
            for (h = 0; h < a.length; h++) j(a[h], b, g, i);
          },
          j = function (b, e, g, l) {
            var h = b[e],
              f = b.deferred;
            if (h)
              try {
                var j = h(g);
                if (0 === e) "undefined" !== typeof j && a(f, e, j);
                else {
                  if (j && "function" === typeof j.then) {
                    b.cancel = j.cancel;
                    j.then(i(f, 1), i(f, 2), i(f, 0));
                    return;
                  }
                  a(f, 1, j);
                }
              } catch (k) {
                a(f, 2, k);
              }
            else a(f, e, g);
            2 === e &&
              d.instrumentRejected &&
              d.instrumentRejected(g, !!h, l, f.promise);
          },
          i = function (b, d) {
            return function (g) {
              a(b, d, g);
            };
          },
          a = function (a, b, d) {
            if (!a.isCanceled())
              switch (b) {
                case 0:
                  a.progress(d);
                  break;
                case 1:
                  a.resolve(d);
                  break;
                case 2:
                  a.reject(d);
              }
          },
          d = function (a) {
            var b = (this.promise = new n()),
              g = this,
              i,
              h,
              k,
              m = !1,
              t = [];
            Error.captureStackTrace &&
              (Error.captureStackTrace(g, d), Error.captureStackTrace(b, d));
            this.isResolved = b.isResolved = function () {
              return 1 === i;
            };
            this.isRejected = b.isRejected = function () {
              return 2 === i;
            };
            this.isFulfilled = b.isFulfilled = function () {
              return !!i;
            };
            this.isCanceled = b.isCanceled = function () {
              return m;
            };
            this.progress = function (a, c) {
              if (i) {
                if (!0 === c)
                  throw Error("This deferred has already been fulfilled.");
                return b;
              }
              p(t, 0, a, null, g);
              return b;
            };
            this.resolve = function (a, c) {
              if (i) {
                if (!0 === c)
                  throw Error("This deferred has already been fulfilled.");
                return b;
              }
              p(t, (i = 1), (h = a), null, g);
              t = null;
              return b;
            };
            var s = (this.reject = function (a, c) {
              if (i) {
                if (!0 === c)
                  throw Error("This deferred has already been fulfilled.");
                return b;
              }
              Error.captureStackTrace && Error.captureStackTrace((k = {}), s);
              p(t, (i = 2), (h = a), k, g);
              t = null;
              return b;
            });
            this.then = b.then = function (a, c, g) {
              var f = [g, a, c];
              f.cancel = b.cancel;
              f.deferred = new d(function (a) {
                return f.cancel && f.cancel(a);
              });
              i && !t ? j(f, i, h, k) : t.push(f);
              return f.deferred.promise;
            };
            this.cancel = b.cancel = function (b, d) {
              if (i) {
                if (!0 === d)
                  throw Error("This deferred has already been fulfilled.");
              } else {
                if (a)
                  var e = a(b),
                    b = "undefined" === typeof e ? b : e;
                m = !0;
                if (i) {
                  if (2 === i && h === b) return b;
                } else
                  return "undefined" === typeof b && (b = new f()), s(b), b;
              }
            };
            o(b);
          };
        d.prototype.toString = function () {
          return "[object Deferred]";
        };
        m && m(d);
        return d;
      });
    },
    "dojo/_base/NodeList": function () {
      define("dojo/_base/NodeList", [
        "./kernel",
        "../query",
        "./array",
        "./html",
        "../NodeList-dom",
      ], function (b, k, f) {
        var k = k.NodeList,
          n = k.prototype;
        n.connect = k._adaptAsForEach(function () {
          return b.connect.apply(this, arguments);
        });
        n.coords = k._adaptAsMap(b.coords);
        k.events =
          "blur,focus,change,click,error,keydown,keypress,keyup,load,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,submit".split(
            ",",
          );
        f.forEach(k.events, function (b) {
          var f = "on" + b;
          n[f] = function (b, j) {
            return this.connect(f, b, j);
          };
        });
        return (b.NodeList = k);
      });
    },
    "dojo/_base/Color": function () {
      define(["./kernel", "./lang", "./array", "./config"], function (
        b,
        k,
        f,
        n,
      ) {
        var m = (b.Color = function (b) {
          b && this.setColor(b);
        });
        m.named = {
          black: [0, 0, 0],
          silver: [192, 192, 192],
          gray: [128, 128, 128],
          white: [255, 255, 255],
          maroon: [128, 0, 0],
          red: [255, 0, 0],
          purple: [128, 0, 128],
          fuchsia: [255, 0, 255],
          green: [0, 128, 0],
          lime: [0, 255, 0],
          olive: [128, 128, 0],
          yellow: [255, 255, 0],
          navy: [0, 0, 128],
          blue: [0, 0, 255],
          teal: [0, 128, 128],
          aqua: [0, 255, 255],
          transparent: n.transparentColor || [0, 0, 0, 0],
        };
        k.extend(m, {
          r: 255,
          g: 255,
          b: 255,
          a: 1,
          _set: function (b, f, j, i) {
            this.r = b;
            this.g = f;
            this.b = j;
            this.a = i;
          },
          setColor: function (b) {
            k.isString(b)
              ? m.fromString(b, this)
              : k.isArray(b)
                ? m.fromArray(b, this)
                : (this._set(b.r, b.g, b.b, b.a),
                  b instanceof m || this.sanitize());
            return this;
          },
          sanitize: function () {
            return this;
          },
          toRgb: function () {
            return [this.r, this.g, this.b];
          },
          toRgba: function () {
            return [this.r, this.g, this.b, this.a];
          },
          toHex: function () {
            return (
              "#" +
              f
                .map(
                  ["r", "g", "b"],
                  function (b) {
                    b = this[b].toString(16);
                    return 2 > b.length ? "0" + b : b;
                  },
                  this,
                )
                .join("")
            );
          },
          toCss: function (b) {
            var f = this.r + ", " + this.g + ", " + this.b;
            return (b ? "rgba(" + f + ", " + this.a : "rgb(" + f) + ")";
          },
          toString: function () {
            return this.toCss(!0);
          },
        });
        m.blendColors = b.blendColors = function (b, k, j, i) {
          var a = i || new m();
          f.forEach(["r", "g", "b", "a"], function (d) {
            a[d] = b[d] + (k[d] - b[d]) * j;
            "a" != d && (a[d] = Math.round(a[d]));
          });
          return a.sanitize();
        };
        m.fromRgb = b.colorFromRgb = function (b, f) {
          var j = b.toLowerCase().match(/^rgba?\(([\s\.,0-9]+)\)/);
          return j && m.fromArray(j[1].split(/\s*,\s*/), f);
        };
        m.fromHex = b.colorFromHex = function (b, k) {
          var j = k || new m(),
            i = 4 == b.length ? 4 : 8,
            a = (1 << i) - 1,
            b = Number("0x" + b.substr(1));
          if (isNaN(b)) return null;
          f.forEach(["b", "g", "r"], function (d) {
            var c = b & a;
            b >>= i;
            j[d] = 4 == i ? 17 * c : c;
          });
          j.a = 1;
          return j;
        };
        m.fromArray = b.colorFromArray = function (b, f) {
          var j = f || new m();
          j._set(Number(b[0]), Number(b[1]), Number(b[2]), Number(b[3]));
          if (isNaN(j.a)) j.a = 1;
          return j.sanitize();
        };
        m.fromString = b.colorFromString = function (b, f) {
          var j = m.named[b];
          return (j && m.fromArray(j, f)) || m.fromRgb(b, f) || m.fromHex(b, f);
        };
        return m;
      });
    },
    "dojo/promise/instrumentation": function () {
      define([
        "./tracer",
        "../has",
        "../_base/lang",
        "../_base/array",
      ], function (b, k, f, n) {
        function m(a, b, d) {
          var i = "";
          a && a.stack && (i += a.stack);
          b &&
            b.stack &&
            (i +=
              "\n    ----------------------------------------\n    rejected" +
              b.stack.split("\n").slice(1).join("\n").replace(/^\s+/, " "));
          d &&
            d.stack &&
            (i += "\n    ----------------------------------------\n" + d.stack);
          console.error(a, i);
        }
        function o(a, b, d, i) {
          b || m(a, d, i);
        }
        function p(b, e, g, f) {
          e
            ? n.some(i, function (a, d) {
                if (a.error === b) return i.splice(d, 1), !0;
              })
            : n.some(i, function (a) {
                return a.error === b;
              }) ||
              i.push({
                error: b,
                rejection: g,
                deferred: f,
                timestamp: new Date().getTime(),
              });
          a || (a = setTimeout(j, d));
        }
        function j() {
          var b = new Date().getTime(),
            e = b - d;
          i = n.filter(i, function (a) {
            return a.timestamp < e
              ? (m(a.error, a.rejection, a.deferred), !1)
              : !0;
          });
          a = i.length ? setTimeout(j, i[0].timestamp + d - b) : !1;
        }
        var i = [],
          a = !1,
          d = 1e3;
        return function (a) {
          var e = k("config-useDeferredInstrumentation");
          if (e) {
            b.on("resolved", f.hitch(console, "log", "resolved"));
            b.on("rejected", f.hitch(console, "log", "rejected"));
            b.on("progress", f.hitch(console, "log", "progress"));
            var g = [];
            "string" === typeof e && ((g = e.split(",")), (e = g.shift()));
            if ("report-rejections" === e) a.instrumentRejected = o;
            else if ("report-unhandled-rejections" === e || !0 === e || 1 === e)
              (a.instrumentRejected = p), (d = parseInt(g[0], 10) || d);
            else throw Error("Unsupported instrumentation usage <" + e + ">");
          }
        };
      });
    },
    "dojo/selector/_loader": function () {
      define(["../has", "require"], function (b, k) {
        var f = document.createElement("div");
        b.add("dom-qsa2.1", !!f.querySelectorAll);
        b.add("dom-qsa3", function () {
          try {
            return (
              (f.innerHTML = "<p class='TEST'></p>"),
              1 == f.querySelectorAll(".TEST:empty").length
            );
          } catch (b) {}
        });
        var n;
        return {
          load: function (f, o, p) {
            var j = k,
              f = "default" == f ? b("config-selectorEngine") || "css3" : f,
              f =
                "css2" == f || "lite" == f
                  ? "./lite"
                  : "css2.1" == f
                    ? b("dom-qsa2.1")
                      ? "./lite"
                      : "./acme"
                    : "css3" == f
                      ? b("dom-qsa3")
                        ? "./lite"
                        : "./acme"
                      : "acme" == f
                        ? "./acme"
                        : (j = o) && f;
            if ("?" == f.charAt(f.length - 1))
              var f = f.substring(0, f.length - 1),
                i = !0;
            if (i && (b("dom-compliant-qsa") || n)) return p(n);
            j([f], function (a) {
              "./lite" != f && (n = a);
              p(a);
            });
          },
        };
      });
    },
    "dojo/promise/Promise": function () {
      define(["../_base/lang"], function (b) {
        function k() {
          throw new TypeError("abstract");
        }
        return b.extend(function () {}, {
          then: function () {
            k();
          },
          cancel: function () {
            k();
          },
          isResolved: function () {
            k();
          },
          isRejected: function () {
            k();
          },
          isFulfilled: function () {
            k();
          },
          isCanceled: function () {
            k();
          },
          always: function (b) {
            return this.then(b, b);
          },
          otherwise: function (b) {
            return this.then(null, b);
          },
          trace: function () {
            return this;
          },
          traceRejected: function () {
            return this;
          },
          toString: function () {
            return "[object Promise]";
          },
        });
      });
    },
    "dojo/request/watch": function () {
      define(
        "./util,../errors/RequestTimeoutError,../errors/CancelError,../_base/array,../_base/window,../has!host-browser?dom-addeventlistener?:../on:".split(
          ",",
        ),
        function (b, k, f, n, m, o) {
          function p() {
            for (
              var b = +new Date(), c = 0, e;
              c < a.length && (e = a[c]);
              c++
            ) {
              var g = e.response,
                f = g.options;
              if (
                (e.isCanceled && e.isCanceled()) ||
                (e.isValid && !e.isValid(g))
              )
                a.splice(c--, 1), j._onAction && j._onAction();
              else if (e.isReady && e.isReady(g))
                a.splice(c--, 1),
                  e.handleResponse(g),
                  j._onAction && j._onAction();
              else if (e.startTime && e.startTime + (f.timeout || 0) < b)
                a.splice(c--, 1),
                  e.cancel(new k("Timeout exceeded", g)),
                  j._onAction && j._onAction();
            }
            j._onInFlight && j._onInFlight(e);
            a.length || (clearInterval(i), (i = null));
          }
          function j(b) {
            if (b.response.options.timeout) b.startTime = +new Date();
            b.isFulfilled() ||
              (a.push(b),
              i || (i = setInterval(p, 50)),
              b.response.options.sync && p());
          }
          var i = null,
            a = [];
          j.cancelAll = function () {
            try {
              n.forEach(a, function (a) {
                try {
                  a.cancel(new f("All requests canceled."));
                } catch (b) {}
              });
            } catch (b) {}
          };
          m &&
            o &&
            m.doc.attachEvent &&
            o(m.global, "unload", function () {
              j.cancelAll();
            });
          return j;
        },
      );
    },
    "dojo/on": function () {
      define([
        "./has!dom-addeventlistener?:./aspect",
        "./_base/kernel",
        "./has",
      ], function (b, k, f) {
        function n(a, b, d, e, h) {
          if ((e = b.match(/(.*):(.*)/)))
            return (b = e[2]), (e = e[1]), j.selector(e, b).call(h, a, d);
          f("touch") &&
            (i.test(b) && (d = u(d)),
            !f("event-orientationchange") &&
              "orientationchange" == b &&
              ((b = "resize"), (a = window), (d = u(d))));
          g && (d = g(d));
          if (a.addEventListener) {
            var l = b in c,
              k = l ? c[b] : b;
            a.addEventListener(k, d, l);
            return {
              remove: function () {
                a.removeEventListener(k, d, l);
              },
            };
          }
          if (q && a.attachEvent) return q(a, "on" + b, d);
          throw Error("Target must be an event emitter");
        }
        function m() {
          this.cancelable = !1;
        }
        function o() {
          this.bubbles = !1;
        }
        var p = window.ScriptEngineMajorVersion;
        f.add("jscript", p && p() + ScriptEngineMinorVersion() / 10);
        f.add("event-orientationchange", f("touch") && !f("android"));
        f.add(
          "event-stopimmediatepropagation",
          window.Event &&
            !!window.Event.prototype &&
            !!window.Event.prototype.stopImmediatePropagation,
        );
        var j = function (a, b, c, d) {
          return "function" == typeof a.on && "function" != typeof b
            ? a.on(b, c)
            : j.parse(a, b, c, n, d, this);
        };
        j.pausable = function (a, b, c, d) {
          var e,
            a = j(
              a,
              b,
              function () {
                if (!e) return c.apply(this, arguments);
              },
              d,
            );
          a.pause = function () {
            e = !0;
          };
          a.resume = function () {
            e = !1;
          };
          return a;
        };
        j.once = function (a, b, c) {
          var d = j(a, b, function () {
            d.remove();
            return c.apply(this, arguments);
          });
          return d;
        };
        j.parse = function (a, b, c, d, e, h) {
          if (b.call) return b.call(h, a, c);
          if (-1 < b.indexOf(",")) {
            for (var b = b.split(/\s*,\s*/), g = [], i = 0, f; (f = b[i++]); )
              g.push(d(a, f, c, e, h));
            g.remove = function () {
              for (var a = 0; a < g.length; a++) g[a].remove();
            };
            return g;
          }
          return d(a, b, c, e, h);
        };
        var i = /^touch/;
        j.selector = function (a, b, c) {
          return function (d, e) {
            function h(b) {
              for (g = g && g.matches ? g : k.query; !g.matches(b, a, d); )
                if (
                  b == d ||
                  !1 === c ||
                  !(b = b.parentNode) ||
                  1 != b.nodeType
                )
                  return;
              return b;
            }
            var g = "function" == typeof a ? { matches: a } : this,
              f = b.bubble;
            return f
              ? j(d, f(h), e)
              : j(d, b, function (a) {
                  var b = h(a.target);
                  return b && e.call(b, a);
                });
          };
        };
        var a = [].slice,
          d = (j.emit = function (b, c, d) {
            var e = a.call(arguments, 2),
              h = "on" + c;
            if ("parentNode" in b) {
              var g = (e[0] = {}),
                f;
              for (f in d) g[f] = d[f];
              g.preventDefault = m;
              g.stopPropagation = o;
              g.target = b;
              g.type = c;
              d = g;
            }
            do b[h] && b[h].apply(b, e);
            while (d && d.bubbles && (b = b.parentNode));
            return d && d.cancelable && d;
          }),
          c = {};
        if (!f("event-stopimmediatepropagation"))
          var e = function () {
              this.modified = this.immediatelyStopped = !0;
            },
            g = function (a) {
              return function (b) {
                if (!b.immediatelyStopped)
                  return (
                    (b.stopImmediatePropagation = e), a.apply(this, arguments)
                  );
              };
            };
        if (f("dom-addeventlistener"))
          (c = { focusin: "focus", focusout: "blur" }),
            (j.emit = function (a, b, c) {
              if (a.dispatchEvent && document.createEvent) {
                var e = a.ownerDocument.createEvent("HTMLEvents");
                e.initEvent(b, !!c.bubbles, !!c.cancelable);
                for (var h in c) h in e || (e[h] = c[h]);
                return a.dispatchEvent(e) && e;
              }
              return d.apply(j, arguments);
            });
        else {
          j._fixEvent = function (a, b) {
            if (!a)
              a = (
                (b && (b.ownerDocument || b.document || b).parentWindow) ||
                window
              ).event;
            if (!a) return a;
            l && a.type == l.type && (a = l);
            if (!a.target) {
              a.target = a.srcElement;
              a.currentTarget = b || a.srcElement;
              if ("mouseover" == a.type) a.relatedTarget = a.fromElement;
              if ("mouseout" == a.type) a.relatedTarget = a.toElement;
              if (!a.stopPropagation)
                (a.stopPropagation = t), (a.preventDefault = s);
              switch (a.type) {
                case "keypress":
                  var c = "charCode" in a ? a.charCode : a.keyCode;
                  10 == c
                    ? ((c = 0), (a.keyCode = 13))
                    : 13 == c || 27 == c
                      ? (c = 0)
                      : 3 == c && (c = 99);
                  a.charCode = c;
                  c = a;
                  c.keyChar = c.charCode ? String.fromCharCode(c.charCode) : "";
                  c.charOrCode = c.keyChar || c.keyCode;
              }
            }
            return a;
          };
          var l,
            h = function (a) {
              this.handle = a;
            };
          h.prototype.remove = function () {
            delete _dojoIEListeners_[this.handle];
          };
          var r = function (a) {
              return function (b) {
                var b = j._fixEvent(b, this),
                  c = a.call(this, b);
                b.modified &&
                  (l ||
                    setTimeout(function () {
                      l = null;
                    }),
                  (l = b));
                return c;
              };
            },
            q = function (a, c, d) {
              d = r(d);
              if (
                ((a.ownerDocument
                  ? a.ownerDocument.parentWindow
                  : a.parentWindow || a.window || window) != top ||
                  5.8 > f("jscript")) &&
                !f("config-_allow_leaks")
              ) {
                "undefined" == typeof _dojoIEListeners_ &&
                  (_dojoIEListeners_ = []);
                var e = a[c];
                if (!e || !e.listeners) {
                  var g = e,
                    e = Function(
                      "event",
                      "var callee = arguments.callee; for(var i = 0; i<callee.listeners.length; i++){var listener = _dojoIEListeners_[callee.listeners[i]]; if(listener){listener.call(this,event);}}",
                    );
                  e.listeners = [];
                  a[c] = e;
                  e.global = this;
                  g && e.listeners.push(_dojoIEListeners_.push(g) - 1);
                }
                e.listeners.push((a = e.global._dojoIEListeners_.push(d) - 1));
                return new h(a);
              }
              return b.after(a, c, d, !0);
            },
            t = function () {
              this.cancelBubble = !0;
            },
            s = (j._preventDefault = function () {
              this.bubbledKeyCode = this.keyCode;
              if (this.ctrlKey)
                try {
                  this.keyCode = 0;
                } catch (a) {}
              this.defaultPrevented = !0;
              this.returnValue = !1;
            });
        }
        if (f("touch"))
          var x = function () {},
            v = window.orientation,
            u = function (a) {
              return function (b) {
                var c = b.corrected;
                if (!c) {
                  var d = b.type;
                  try {
                    delete b.type;
                  } catch (e) {}
                  b.type
                    ? ((x.prototype = b),
                      (c = new x()),
                      (c.preventDefault = function () {
                        b.preventDefault();
                      }),
                      (c.stopPropagation = function () {
                        b.stopPropagation();
                      }))
                    : ((c = b), (c.type = d));
                  b.corrected = c;
                  if ("resize" == d) {
                    if (v == window.orientation) return null;
                    v = window.orientation;
                    c.type = "orientationchange";
                    return a.call(this, c);
                  }
                  if (!("rotation" in c)) (c.rotation = 0), (c.scale = 1);
                  var d = c.changedTouches[0],
                    h;
                  for (h in d) delete c[h], (c[h] = d[h]);
                }
                return a.call(this, c);
              };
            };
        return j;
      });
    },
    "dojo/_base/sniff": function () {
      define(["./kernel", "./lang", "../sniff"], function (b, k, f) {
        b._name = "browser";
        k.mixin(b, {
          isBrowser: !0,
          isFF: f("ff"),
          isIE: f("ie"),
          isKhtml: f("khtml"),
          isWebKit: f("webkit"),
          isMozilla: f("mozilla"),
          isMoz: f("mozilla"),
          isOpera: f("opera"),
          isSafari: f("safari"),
          isChrome: f("chrome"),
          isMac: f("mac"),
          isIos: f("ios"),
          isAndroid: f("android"),
          isWii: f("wii"),
          isQuirks: f("quirks"),
          isAir: f("air"),
        });
        b.locale =
          b.locale ||
          (f("ie") ? navigator.userLanguage : navigator.language).toLowerCase();
        return f;
      });
    },
    "dojo/errors/create": function () {
      define(["../_base/lang"], function (b) {
        return function (k, f, n, m) {
          var n = n || Error,
            o = function (b) {
              if (n === Error) {
                Error.captureStackTrace && Error.captureStackTrace(this, o);
                var j = Error.call(this, b),
                  i;
                for (i in j) j.hasOwnProperty(i) && (this[i] = j[i]);
                this.message = b;
                this.stack = j.stack;
              } else n.apply(this, arguments);
              f && f.apply(this, arguments);
            };
          o.prototype = b.delegate(n.prototype, m);
          o.prototype.name = k;
          return (o.prototype.constructor = o);
        };
      });
    },
    "dojo/_base/array": function () {
      define(["./kernel", "../has", "./lang"], function (b, k, f) {
        function n(a) {
          return (p[a] = new Function("item", "index", "array", a));
        }
        function m(a) {
          var b = !a;
          return function (c, e, g) {
            var f = 0,
              h = (c && c.length) || 0,
              i;
            h && "string" == typeof c && (c = c.split(""));
            "string" == typeof e && (e = p[e] || n(e));
            if (g)
              for (; f < h; ++f) {
                if (((i = !e.call(g, c[f], f, c)), a ^ i)) return !i;
              }
            else
              for (; f < h; ++f) if (((i = !e(c[f], f, c)), a ^ i)) return !i;
            return b;
          };
        }
        function o(a) {
          var b = 1,
            c = 0,
            e = 0;
          a || (b = c = e = -1);
          return function (g, f, h, k) {
            if (k && 0 < b) return i.lastIndexOf(g, f, h);
            var k = (g && g.length) || 0,
              m = a ? k + e : c;
            h === j
              ? (h = a ? c : k + e)
              : 0 > h
                ? ((h = k + h), 0 > h && (h = c))
                : (h = h >= k ? k + e : h);
            for (k && "string" == typeof g && (g = g.split("")); h != m; h += b)
              if (g[h] == f) return h;
            return -1;
          };
        }
        var p = {},
          j,
          i = {
            every: m(!1),
            some: m(!0),
            indexOf: o(!0),
            lastIndexOf: o(!1),
            forEach: function (a, b, c) {
              var e = 0,
                g = (a && a.length) || 0;
              g && "string" == typeof a && (a = a.split(""));
              "string" == typeof b && (b = p[b] || n(b));
              if (c) for (; e < g; ++e) b.call(c, a[e], e, a);
              else for (; e < g; ++e) b(a[e], e, a);
            },
            map: function (a, b, c, e) {
              var g = 0,
                f = (a && a.length) || 0,
                e = new (e || Array)(f);
              f && "string" == typeof a && (a = a.split(""));
              "string" == typeof b && (b = p[b] || n(b));
              if (c) for (; g < f; ++g) e[g] = b.call(c, a[g], g, a);
              else for (; g < f; ++g) e[g] = b(a[g], g, a);
              return e;
            },
            filter: function (a, b, c) {
              var e = 0,
                g = (a && a.length) || 0,
                f = [],
                h;
              g && "string" == typeof a && (a = a.split(""));
              "string" == typeof b && (b = p[b] || n(b));
              if (c)
                for (; e < g; ++e) (h = a[e]), b.call(c, h, e, a) && f.push(h);
              else for (; e < g; ++e) (h = a[e]), b(h, e, a) && f.push(h);
              return f;
            },
            clearCache: function () {
              p = {};
            },
          };
        f.mixin(b, i);
        return i;
      });
    },
    "dojo/_base/json": function () {
      define(["./kernel", "../json"], function (b, k) {
        b.fromJson = function (b) {
          return eval("(" + b + ")");
        };
        b._escapeString = k.stringify;
        b.toJsonIndentStr = "\t";
        b.toJson = function (f, n) {
          return k.stringify(
            f,
            function (b, f) {
              if (f) {
                var k = f.__json__ || f.json;
                if ("function" == typeof k) return k.call(f);
              }
              return f;
            },
            n && b.toJsonIndentStr,
          );
        };
        return b;
      });
    },
    "dojo/_base/window": function () {
      define("dojo/_base/window", ["./kernel", "./lang", "../sniff"], function (
        b,
        k,
        f,
      ) {
        var n = {
          global: b.global,
          doc: this.document || null,
          body: function (f) {
            f = f || b.doc;
            return f.body || f.getElementsByTagName("body")[0];
          },
          setContext: function (f, k) {
            b.global = n.global = f;
            b.doc = n.doc = k;
          },
          withGlobal: function (f, k, p, j) {
            var i = b.global;
            try {
              return (
                (b.global = n.global = f),
                n.withDoc.call(null, f.document, k, p, j)
              );
            } finally {
              b.global = n.global = i;
            }
          },
          withDoc: function (k, o, p, j) {
            var i = n.doc,
              a = f("quirks"),
              d = f("ie"),
              c,
              e,
              g;
            try {
              b.doc = n.doc = k;
              b.isQuirks = f.add(
                "quirks",
                "BackCompat" == b.doc.compatMode,
                !0,
                !0,
              );
              if (f("ie") && (g = k.parentWindow) && g.navigator)
                (c =
                  parseFloat(g.navigator.appVersion.split("MSIE ")[1]) ||
                  void 0),
                  (e = k.documentMode) &&
                    5 != e &&
                    Math.floor(c) != e &&
                    (c = e),
                  (b.isIE = f.add("ie", c, !0, !0));
              p && "string" == typeof o && (o = p[o]);
              return o.apply(p, j || []);
            } finally {
              (b.doc = n.doc = i),
                (b.isQuirks = f.add("quirks", a, !0, !0)),
                (b.isIE = f.add("ie", d, !0, !0));
            }
          },
        };
        k.mixin(b, n);
        return n;
      });
    },
    "dojo/dom-class": function () {
      define(["./_base/lang", "./_base/array", "./dom"], function (b, k, f) {
        function n(b) {
          if ("string" == typeof b || b instanceof String) {
            if (b && !o.test(b)) return (p[0] = b), p;
            b = b.split(o);
            b.length && !b[0] && b.shift();
            b.length && !b[b.length - 1] && b.pop();
            return b;
          }
          return !b
            ? []
            : k.filter(b, function (a) {
                return a;
              });
        }
        var m,
          o = /\s+/,
          p = [""],
          j = {};
        return (m = {
          contains: function (b, a) {
            return (
              0 <= (" " + f.byId(b).className + " ").indexOf(" " + a + " ")
            );
          },
          add: function (b, a) {
            var b = f.byId(b),
              a = n(a),
              d = b.className,
              c,
              d = d ? " " + d + " " : " ";
            c = d.length;
            for (var e = 0, g = a.length, j; e < g; ++e)
              (j = a[e]) && 0 > d.indexOf(" " + j + " ") && (d += j + " ");
            c < d.length && (b.className = d.substr(1, d.length - 2));
          },
          remove: function (i, a) {
            var i = f.byId(i),
              d;
            if (void 0 !== a) {
              a = n(a);
              d = " " + i.className + " ";
              for (var c = 0, e = a.length; c < e; ++c)
                d = d.replace(" " + a[c] + " ", " ");
              d = b.trim(d);
            } else d = "";
            i.className != d && (i.className = d);
          },
          replace: function (b, a, d) {
            b = f.byId(b);
            j.className = b.className;
            m.remove(j, d);
            m.add(j, a);
            b.className !== j.className && (b.className = j.className);
          },
          toggle: function (b, a, d) {
            b = f.byId(b);
            if (void 0 === d)
              for (var a = n(a), c = 0, e = a.length, g; c < e; ++c)
                (g = a[c]), m[m.contains(b, g) ? "remove" : "add"](b, g);
            else m[d ? "add" : "remove"](b, a);
            return d;
          },
        });
      });
    },
    "dojo/_base/config": function () {
      define(["../has", "require"], function (b, k) {
        var f = {},
          n = k.rawConfig,
          m;
        for (m in n) f[m] = n[m];
        return f;
      });
    },
    "dojo/main": function () {
      define(
        "./_base/kernel,./has,require,./sniff,./_base/lang,./_base/array,./_base/config,./ready,./_base/declare,./_base/connect,./_base/Deferred,./_base/json,./_base/Color,./has!dojo-firebug?./_firebug/firebug,./_base/browser,./_base/loader".split(
          ",",
        ),
        function (b, k, f, n, m, o, p, j) {
          p.isDebug && f(["./_firebug/firebug"]);
          var i = p.require;
          i &&
            ((i = o.map(m.isArray(i) ? i : [i], function (a) {
              return a.replace(/\./g, "/");
            })),
            b.isAsync
              ? f(i)
              : j(1, function () {
                  f(i);
                }));
          return b;
        },
      );
    },
    "dojo/_base/event": function () {
      define("dojo/_base/event", [
        "./kernel",
        "../on",
        "../has",
        "../dom-geometry",
      ], function (b, k, f, n) {
        if (k._fixEvent) {
          var m = k._fixEvent;
          k._fixEvent = function (b, f) {
            (b = m(b, f)) && n.normalizeEvent(b);
            return b;
          };
        }
        var o = {
          fix: function (b, f) {
            return k._fixEvent ? k._fixEvent(b, f) : b;
          },
          stop: function (b) {
            f("dom-addeventlistener") || (b && b.preventDefault)
              ? (b.preventDefault(), b.stopPropagation())
              : ((b = b || window.event),
                (b.cancelBubble = !0),
                k._preventDefault.call(b));
          },
        };
        b.fixEvent = o.fix;
        b.stopEvent = o.stop;
        return o;
      });
    },
    "dojo/sniff": function () {
      define(["./has"], function (b) {
        var k = navigator,
          f = k.userAgent,
          k = k.appVersion,
          n = parseFloat(k);
        b.add("air", 0 <= f.indexOf("AdobeAIR"));
        b.add("khtml", 0 <= k.indexOf("Konqueror") ? n : void 0);
        b.add("webkit", parseFloat(f.split("WebKit/")[1]) || void 0);
        b.add("chrome", parseFloat(f.split("Chrome/")[1]) || void 0);
        b.add(
          "safari",
          0 <= k.indexOf("Safari") && !b("chrome")
            ? parseFloat(k.split("Version/")[1])
            : void 0,
        );
        b.add("mac", 0 <= k.indexOf("Macintosh"));
        b.add("quirks", "BackCompat" == document.compatMode);
        b.add("ios", /iPhone|iPod|iPad/.test(f));
        b.add("android", parseFloat(f.split("Android ")[1]) || void 0);
        if (!b("webkit")) {
          0 <= f.indexOf("Opera") &&
            b.add(
              "opera",
              9.8 <= n ? parseFloat(f.split("Version/")[1]) || n : n,
            );
          0 <= f.indexOf("Gecko") &&
            !b("khtml") &&
            !b("webkit") &&
            b.add("mozilla", n);
          b("mozilla") &&
            b.add(
              "ff",
              parseFloat(f.split("Firefox/")[1] || f.split("Minefield/")[1]) ||
                void 0,
            );
          if (document.all && !b("opera"))
            (f = parseFloat(k.split("MSIE ")[1]) || void 0),
              (k = document.documentMode) &&
                5 != k &&
                Math.floor(f) != k &&
                (f = k),
              b.add("ie", f);
          b.add("wii", "undefined" != typeof opera && opera.wiiremote);
        }
        return b;
      });
    },
    "dojo/request/handlers": function () {
      define([
        "../json",
        "../_base/kernel",
        "../_base/array",
        "../has",
      ], function (b, k, f, n) {
        function m(b) {
          var a = j[b.options.handleAs];
          b.data = a ? a(b) : b.data || b.text;
          return b;
        }
        n.add("activex", "undefined" !== typeof ActiveXObject);
        var o;
        if (n("activex")) {
          var p = [
            "Msxml2.DOMDocument.6.0",
            "Msxml2.DOMDocument.4.0",
            "MSXML2.DOMDocument.3.0",
            "MSXML.DOMDocument",
          ];
          o = function (b) {
            var a = b.data;
            if (!a || !a.documentElement) {
              var d = b.text;
              f.some(p, function (b) {
                try {
                  var e = new ActiveXObject(b);
                  e.async = !1;
                  e.loadXML(d);
                  a = e;
                } catch (g) {
                  return !1;
                }
                return !0;
              });
            }
            return a;
          };
        }
        var j = {
          javascript: function (b) {
            return k.eval(b.text || "");
          },
          json: function (f) {
            return b.parse(f.text || null);
          },
          xml: o,
        };
        m.register = function (b, a) {
          j[b] = a;
        };
        return m;
      });
    },
    "dojo/aspect": function () {
      define("dojo/aspect", [], function () {
        function b(b, f, a, d) {
          var c = b[f],
            e = "around" == f,
            g;
          if (e) {
            var k = a(function () {
              return c.advice(this, arguments);
            });
            g = {
              remove: function () {
                g.cancelled = !0;
              },
              advice: function (a, b) {
                return g.cancelled ? c.advice(a, b) : k.apply(a, b);
              },
            };
          } else
            g = {
              remove: function () {
                var a = g.previous,
                  c = g.next;
                if (!c && !a) delete b[f];
                else if ((a ? (a.next = c) : (b[f] = c), c)) c.previous = a;
              },
              id: n++,
              advice: a,
              receiveArguments: d,
            };
          if (c && !e)
            if ("after" == f) {
              for (; c.next && (c = c.next); );
              c.next = g;
              g.previous = c;
            } else {
              if ("before" == f) (b[f] = g), (g.next = c), (c.previous = g);
            }
          else b[f] = g;
          return g;
        }
        function k(j) {
          return function (i, a, d, c) {
            var e = i[a],
              g;
            if (!e || e.target != i) {
              i[a] = g = function () {
                for (var a = n, b = arguments, c = g.before; c; )
                  (b = c.advice.apply(this, b) || b), (c = c.next);
                if (g.around) var d = g.around.advice(this, b);
                for (c = g.after; c && c.id < a; ) {
                  if (c.receiveArguments)
                    var e = c.advice.apply(this, b),
                      d = e === f ? d : e;
                  else d = c.advice.call(this, d, b);
                  c = c.next;
                }
                return d;
              };
              if (e)
                g.around = {
                  advice: function (a, b) {
                    return e.apply(a, b);
                  },
                };
              g.target = i;
            }
            i = b(g || e, j, d, c);
            d = null;
            return i;
          };
        }
        var f,
          n = 0,
          m = k("after"),
          o = k("before"),
          p = k("around");
        return { before: o, around: p, after: m };
      });
    },
    "dojo/ready": function () {
      define("dojo/ready", [
        "./_base/kernel",
        "./has",
        "require",
        "./domReady",
        "./_base/lang",
      ], function (b, k, f, n, m) {
        var o = 0,
          p,
          j = [],
          i = 0,
          a = function () {
            if (o && !i && j.length) {
              i = 1;
              var b = j.shift();
              try {
                b();
              } finally {
                i = 0;
              }
              i = 0;
              j.length && p(a);
            }
          };
        f.on("idle", a);
        p = function () {
          f.idle() && a();
        };
        var k =
            (b.ready =
            b.addOnLoad =
              function (a, d, f) {
                var i = m._toArray(arguments);
                "number" != typeof a
                  ? ((f = d), (d = a), (a = 1e3))
                  : i.shift();
                f = f
                  ? m.hitch.apply(b, i)
                  : function () {
                      d();
                    };
                f.priority = a;
                for (i = 0; i < j.length && a >= j[i].priority; i++);
                j.splice(i, 0, f);
                p();
              }),
          d = b.config.addOnLoad;
        if (d) k[m.isArray(d) ? "apply" : "call"](b, d);
        b.config.parseOnLoad &&
          !b.isAsync &&
          k(99, function () {
            b.parser ||
              (b.deprecated(
                "Add explicit require(['dojo/parser']);",
                "",
                "2.0",
              ),
              f(["dojo/parser"]));
          });
        n(function () {
          o = 1;
          b._postLoad = b.config.afterOnLoad = !0;
          j.length && p(a);
        });
        return k;
      });
    },
    "dojo/_base/connect": function () {
      define(
        "./kernel,../on,../topic,../aspect,./event,../mouse,./sniff,./lang,../keys".split(
          ",",
        ),
        function (b, k, f, n, m, o, p, j) {
          function i(a, c, d, e, f) {
            e = j.hitch(d, e);
            if (!a || (!a.addEventListener && !a.attachEvent))
              return n.after(a || b.global, c, e, !0);
            "string" == typeof c &&
              "on" == c.substring(0, 2) &&
              (c = c.substring(2));
            if (!a) a = b.global;
            if (!f)
              switch (c) {
                case "keypress":
                  c = g;
                  break;
                case "mouseenter":
                  c = o.enter;
                  break;
                case "mouseleave":
                  c = o.leave;
              }
            return k(a, c, e, f);
          }
          function a(a) {
            a.keyChar = a.charCode ? String.fromCharCode(a.charCode) : "";
            a.charOrCode = a.keyChar || a.keyCode;
          }
          p.add("events-keypress-typed", function () {
            var a = { charCode: 0 };
            try {
              (a = document.createEvent("KeyboardEvent")),
                (a.initKeyboardEvent || a.initKeyEvent).call(
                  a,
                  "keypress",
                  !0,
                  !0,
                  null,
                  !1,
                  !1,
                  !1,
                  !1,
                  9,
                  3,
                );
            } catch (b) {}
            return 0 == a.charCode && !p("opera");
          });
          var d = {
              106: 42,
              111: 47,
              186: 59,
              187: 43,
              188: 44,
              189: 45,
              190: 46,
              191: 47,
              192: 96,
              219: 91,
              220: 92,
              221: 93,
              222: 39,
              229: 113,
            },
            c = p("mac") ? "metaKey" : "ctrlKey",
            e = function (b, c) {
              var d = j.mixin({}, b, c);
              a(d);
              d.preventDefault = function () {
                b.preventDefault();
              };
              d.stopPropagation = function () {
                b.stopPropagation();
              };
              return d;
            },
            g;
          g = p("events-keypress-typed")
            ? function (a, b) {
                var c = k(a, "keydown", function (a) {
                    var c = a.keyCode,
                      f =
                        13 != c &&
                        32 != c &&
                        (27 != c || !p("ie")) &&
                        (48 > c || 90 < c) &&
                        (96 > c || 111 < c) &&
                        (186 > c || 192 < c) &&
                        (219 > c || 222 < c) &&
                        229 != c;
                    if (f || a.ctrlKey) {
                      f = f ? 0 : c;
                      if (a.ctrlKey) {
                        if (3 == c || 13 == c)
                          return b.call(a.currentTarget, a);
                        f =
                          95 < f && 106 > f
                            ? f - 48
                            : !a.shiftKey && 65 <= f && 90 >= f
                              ? f + 32
                              : d[f] || f;
                      }
                      c = e(a, { type: "keypress", faux: !0, charCode: f });
                      b.call(a.currentTarget, c);
                      if (p("ie"))
                        try {
                          a.keyCode = c.keyCode;
                        } catch (g) {}
                    }
                  }),
                  f = k(a, "keypress", function (a) {
                    var c = a.charCode,
                      a = e(a, { charCode: 32 <= c ? c : 0, faux: !0 });
                    return b.call(this, a);
                  });
                return {
                  remove: function () {
                    c.remove();
                    f.remove();
                  },
                };
              }
            : p("opera")
              ? function (a, b) {
                  return k(a, "keypress", function (a) {
                    var c = a.which;
                    3 == c && (c = 99);
                    c = 32 > c && !a.shiftKey ? 0 : c;
                    a.ctrlKey && !a.shiftKey && 65 <= c && 90 >= c && (c += 32);
                    return b.call(this, e(a, { charCode: c }));
                  });
                }
              : function (b, c) {
                  return k(b, "keypress", function (b) {
                    a(b);
                    return c.call(this, b);
                  });
                };
          var l = {
            _keypress: g,
            connect: function (a, b, c, d, e) {
              var f = arguments,
                g = [],
                j = 0;
              g.push("string" == typeof f[0] ? null : f[j++], f[j++]);
              var k = f[j + 1];
              g.push(
                "string" == typeof k || "function" == typeof k ? f[j++] : null,
                f[j++],
              );
              for (k = f.length; j < k; j++) g.push(f[j]);
              return i.apply(this, g);
            },
            disconnect: function (a) {
              a && a.remove();
            },
            subscribe: function (a, b, c) {
              return f.subscribe(a, j.hitch(b, c));
            },
            publish: function (a, b) {
              return f.publish.apply(f, [a].concat(b));
            },
            connectPublisher: function (a, b, c) {
              var d = function () {
                l.publish(a, arguments);
              };
              return c ? l.connect(b, c, d) : l.connect(b, d);
            },
            isCopyKey: function (a) {
              return a[c];
            },
          };
          l.unsubscribe = l.disconnect;
          j.mixin(b, l);
          return l;
        },
      );
    },
    "dojo/errors/CancelError": function () {
      define(["./create"], function (b) {
        return b("CancelError", null, null, { dojoType: "cancel" });
      });
    },
  },
});
(function () {
  var b = this.require;
  b({ cache: {} });
  !b.async && b(["dojo"]);
  b.boot && b.apply(null, b.boot);
})();
