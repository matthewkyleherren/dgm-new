!(function () {
  "use strict";
  var e = function () {
    return (
      (e =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }),
      e.apply(this, arguments)
    );
  };
  "function" == typeof SuppressedError && SuppressedError;
  var t = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    },
    n = !t(function () {
      var e = function () {}.bind();
      return "function" != typeof e || e.hasOwnProperty("prototype");
    }),
    r = Function.prototype,
    i = r.call,
    o = n && r.bind.bind(i, i),
    a = n
      ? o
      : function (e) {
          return function () {
            return i.apply(e, arguments);
          };
        },
    s = a({}.toString),
    u = a("".slice),
    c = function (e) {
      return u(s(e), 8, -1);
    },
    f = Object,
    l = a("".split),
    h = t(function () {
      return !f("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return "String" === c(e) ? l(e, "") : f(e);
        }
      : f,
    p = function (e) {
      return null == e;
    },
    d = TypeError,
    v = function (e) {
      if (p(e)) throw new d("Can't call method on " + e);
      return e;
    },
    g = function (e) {
      return h(v(e));
    },
    m =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
              ? self
              : {};
  function y(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  var w,
    b,
    S = function (e) {
      return e && e.Math === Math && e;
    },
    P =
      S("object" == typeof globalThis && globalThis) ||
      S("object" == typeof window && window) ||
      S("object" == typeof self && self) ||
      S("object" == typeof m && m) ||
      S("object" == typeof m && m) ||
      (function () {
        return this;
      })() ||
      Function("return this")(),
    O = Object.defineProperty,
    k = function (e, t) {
      try {
        O(P, e, { value: t, configurable: !0, writable: !0 });
      } catch (n) {
        P[e] = t;
      }
      return t;
    },
    R = y(function (e) {
      var t = "__core-js_shared__",
        n = (e.exports = P[t] || k(t, {}));
      (n.versions || (n.versions = [])).push({
        version: "3.39.0",
        mode: "global",
        copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",
        source: "https://github.com/zloirock/core-js",
      });
    }),
    L = function (e, t) {
      return R[e] || (R[e] = t || {});
    },
    A = Object,
    U = function (e) {
      return A(v(e));
    },
    C = a({}.hasOwnProperty),
    j =
      Object.hasOwn ||
      function (e, t) {
        return C(U(e), t);
      },
    E = 0,
    I = Math.random(),
    _ = a((1).toString),
    x = function (e) {
      return "Symbol(" + (void 0 === e ? "" : e) + ")_" + _(++E + I, 36);
    },
    T = P.navigator,
    B = T && T.userAgent,
    q = B ? String(B) : "",
    F = P.process,
    H = P.Deno,
    M = (F && F.versions) || (H && H.version),
    z = M && M.v8;
  z && (b = (w = z.split("."))[0] > 0 && w[0] < 4 ? 1 : +(w[0] + w[1])),
    !b &&
      q &&
      (!(w = q.match(/Edge\/(\d+)/)) || w[1] >= 74) &&
      (w = q.match(/Chrome\/(\d+)/)) &&
      (b = +w[1]);
  var N,
    D = b,
    G = P.String,
    W =
      !!Object.getOwnPropertySymbols &&
      !t(function () {
        var e = Symbol("symbol detection");
        return (
          !G(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && D && D < 41)
        );
      }),
    Y = W && !Symbol.sham && "symbol" == typeof Symbol.iterator,
    $ = P.Symbol,
    J = L("wks"),
    V = Y ? $.for || $ : ($ && $.withoutSetter) || x,
    Q = function (e) {
      return j(J, e) || (J[e] = W && j($, e) ? $[e] : V("Symbol." + e)), J[e];
    },
    X = "object" == typeof document && document.all,
    K =
      void 0 === X && void 0 !== X
        ? function (e) {
            return "function" == typeof e || e === X;
          }
        : function (e) {
            return "function" == typeof e;
          },
    Z = function (e) {
      return "object" == typeof e ? null !== e : K(e);
    },
    ee = String,
    te = TypeError,
    ne = function (e) {
      if (Z(e)) return e;
      throw new te(ee(e) + " is not an object");
    },
    re = !t(function () {
      return (
        7 !==
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    }),
    ie =
      re &&
      t(function () {
        return (
          42 !==
          Object.defineProperty(function () {}, "prototype", {
            value: 42,
            writable: !1,
          }).prototype
        );
      }),
    oe = P.document,
    ae = Z(oe) && Z(oe.createElement),
    se = function (e) {
      return ae ? oe.createElement(e) : {};
    },
    ue =
      !re &&
      !t(function () {
        return (
          7 !==
          Object.defineProperty(se("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    ce = Function.prototype.call,
    fe = n
      ? ce.bind(ce)
      : function () {
          return ce.apply(ce, arguments);
        },
    le = function (e, t) {
      return arguments.length < 2
        ? ((n = P[e]), K(n) ? n : void 0)
        : P[e] && P[e][t];
      var n;
    },
    he = a({}.isPrototypeOf),
    pe = Object,
    de = Y
      ? function (e) {
          return "symbol" == typeof e;
        }
      : function (e) {
          var t = le("Symbol");
          return K(t) && he(t.prototype, pe(e));
        },
    ve = String,
    ge = function (e) {
      try {
        return ve(e);
      } catch (e) {
        return "Object";
      }
    },
    me = TypeError,
    ye = function (e) {
      if (K(e)) return e;
      throw new me(ge(e) + " is not a function");
    },
    we = function (e, t) {
      var n = e[t];
      return p(n) ? void 0 : ye(n);
    },
    be = TypeError,
    Se = TypeError,
    Pe = Q("toPrimitive"),
    Oe = function (e, t) {
      if (!Z(e) || de(e)) return e;
      var n,
        r = we(e, Pe);
      if (r) {
        if (
          (void 0 === t && (t = "default"), (n = fe(r, e, t)), !Z(n) || de(n))
        )
          return n;
        throw new Se("Can't convert object to primitive value");
      }
      return (
        void 0 === t && (t = "number"),
        (function (e, t) {
          var n, r;
          if ("string" === t && K((n = e.toString)) && !Z((r = fe(n, e))))
            return r;
          if (K((n = e.valueOf)) && !Z((r = fe(n, e)))) return r;
          if ("string" !== t && K((n = e.toString)) && !Z((r = fe(n, e))))
            return r;
          throw new be("Can't convert object to primitive value");
        })(e, t)
      );
    },
    ke = function (e) {
      var t = Oe(e, "string");
      return de(t) ? t : t + "";
    },
    Re = TypeError,
    Le = Object.defineProperty,
    Ae = Object.getOwnPropertyDescriptor,
    Ue = "enumerable",
    Ce = "configurable",
    je = "writable",
    Ee = {
      f: re
        ? ie
          ? function (e, t, n) {
              if (
                (ne(e),
                (t = ke(t)),
                ne(n),
                "function" == typeof e &&
                  "prototype" === t &&
                  "value" in n &&
                  je in n &&
                  !n[je])
              ) {
                var r = Ae(e, t);
                r &&
                  r[je] &&
                  ((e[t] = n.value),
                  (n = {
                    configurable: Ce in n ? n[Ce] : r[Ce],
                    enumerable: Ue in n ? n[Ue] : r[Ue],
                    writable: !1,
                  }));
              }
              return Le(e, t, n);
            }
          : Le
        : function (e, t, n) {
            if ((ne(e), (t = ke(t)), ne(n), ue))
              try {
                return Le(e, t, n);
              } catch (e) {}
            if ("get" in n || "set" in n)
              throw new Re("Accessors not supported");
            return "value" in n && (e[t] = n.value), e;
          },
    },
    Ie = Math.ceil,
    _e = Math.floor,
    xe =
      Math.trunc ||
      function (e) {
        var t = +e;
        return (t > 0 ? _e : Ie)(t);
      },
    Te = function (e) {
      var t = +e;
      return t != t || 0 === t ? 0 : xe(t);
    },
    Be = Math.max,
    qe = Math.min,
    Fe = function (e, t) {
      var n = Te(e);
      return n < 0 ? Be(n + t, 0) : qe(n, t);
    },
    He = Math.min,
    Me = function (e) {
      return (t = e.length), (n = Te(t)) > 0 ? He(n, 9007199254740991) : 0;
      var t, n;
    },
    ze = function (e) {
      return function (t, n, r) {
        var i = g(t),
          o = Me(i);
        if (0 === o) return !e && -1;
        var a,
          s = Fe(r, o);
        if (e && n != n) {
          for (; o > s; ) if ((a = i[s++]) != a) return !0;
        } else
          for (; o > s; s++)
            if ((e || s in i) && i[s] === n) return e || s || 0;
        return !e && -1;
      };
    },
    Ne = { includes: ze(!0), indexOf: ze(!1) },
    De = {},
    Ge = Ne.indexOf,
    We = a([].push),
    Ye = function (e, t) {
      var n,
        r = g(e),
        i = 0,
        o = [];
      for (n in r) !j(De, n) && j(r, n) && We(o, n);
      for (; t.length > i; ) j(r, (n = t[i++])) && (~Ge(o, n) || We(o, n));
      return o;
    },
    $e = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ],
    Je =
      Object.keys ||
      function (e) {
        return Ye(e, $e);
      },
    Ve =
      re && !ie
        ? Object.defineProperties
        : function (e, t) {
            ne(e);
            for (var n, r = g(t), i = Je(t), o = i.length, a = 0; o > a; )
              Ee.f(e, (n = i[a++]), r[n]);
            return e;
          },
    Qe = { f: Ve },
    Xe = le("document", "documentElement"),
    Ke = L("keys"),
    Ze = function (e) {
      return Ke[e] || (Ke[e] = x(e));
    },
    et = "prototype",
    tt = "script",
    nt = Ze("IE_PROTO"),
    rt = function () {},
    it = function (e) {
      return "<" + tt + ">" + e + "</" + tt + ">";
    },
    ot = function (e) {
      e.write(it("")), e.close();
      var t = e.parentWindow.Object;
      return (e = null), t;
    },
    at = function () {
      try {
        N = new ActiveXObject("htmlfile");
      } catch (e) {}
      var e, t, n;
      at =
        "undefined" != typeof document
          ? document.domain && N
            ? ot(N)
            : ((t = se("iframe")),
              (n = "java" + tt + ":"),
              (t.style.display = "none"),
              Xe.appendChild(t),
              (t.src = String(n)),
              (e = t.contentWindow.document).open(),
              e.write(it("document.F=Object")),
              e.close(),
              e.F)
          : ot(N);
      for (var r = $e.length; r--; ) delete at[et][$e[r]];
      return at();
    };
  De[nt] = !0;
  var st =
      Object.create ||
      function (e, t) {
        var n;
        return (
          null !== e
            ? ((rt[et] = ne(e)), (n = new rt()), (rt[et] = null), (n[nt] = e))
            : (n = at()),
          void 0 === t ? n : Qe.f(n, t)
        );
      },
    ut = Ee.f,
    ct = Q("unscopables"),
    ft = Array.prototype;
  void 0 === ft[ct] && ut(ft, ct, { configurable: !0, value: st(null) });
  var lt,
    ht,
    pt,
    dt = function (e) {
      ft[ct][e] = !0;
    },
    vt = {},
    gt = P.WeakMap,
    mt = K(gt) && /native code/.test(String(gt)),
    yt = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t,
      };
    },
    wt = re
      ? function (e, t, n) {
          return Ee.f(e, t, yt(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        },
    bt = "Object already initialized",
    St = P.TypeError,
    Pt = P.WeakMap;
  if (mt || R.state) {
    var Ot = R.state || (R.state = new Pt());
    (Ot.get = Ot.get),
      (Ot.has = Ot.has),
      (Ot.set = Ot.set),
      (lt = function (e, t) {
        if (Ot.has(e)) throw new St(bt);
        return (t.facade = e), Ot.set(e, t), t;
      }),
      (ht = function (e) {
        return Ot.get(e) || {};
      }),
      (pt = function (e) {
        return Ot.has(e);
      });
  } else {
    var kt = Ze("state");
    (De[kt] = !0),
      (lt = function (e, t) {
        if (j(e, kt)) throw new St(bt);
        return (t.facade = e), wt(e, kt, t), t;
      }),
      (ht = function (e) {
        return j(e, kt) ? e[kt] : {};
      }),
      (pt = function (e) {
        return j(e, kt);
      });
  }
  var Rt = {
      set: lt,
      get: ht,
      has: pt,
      enforce: function (e) {
        return pt(e) ? ht(e) : lt(e, {});
      },
      getterFor: function (e) {
        return function (t) {
          var n;
          if (!Z(t) || (n = ht(t)).type !== e)
            throw new St("Incompatible receiver, " + e + " required");
          return n;
        };
      },
    },
    Lt = {}.propertyIsEnumerable,
    At = Object.getOwnPropertyDescriptor,
    Ut = {
      f:
        At && !Lt.call({ 1: 2 }, 1)
          ? function (e) {
              var t = At(this, e);
              return !!t && t.enumerable;
            }
          : Lt,
    },
    Ct = Object.getOwnPropertyDescriptor,
    jt = {
      f: re
        ? Ct
        : function (e, t) {
            if (((e = g(e)), (t = ke(t)), ue))
              try {
                return Ct(e, t);
              } catch (e) {}
            if (j(e, t)) return yt(!fe(Ut.f, e, t), e[t]);
          },
    },
    Et = Function.prototype,
    It = re && Object.getOwnPropertyDescriptor,
    _t = j(Et, "name"),
    xt = {
      EXISTS: _t,
      PROPER: _t && "something" === function () {}.name,
      CONFIGURABLE: _t && (!re || (re && It(Et, "name").configurable)),
    },
    Tt = a(Function.toString);
  K(R.inspectSource) ||
    (R.inspectSource = function (e) {
      return Tt(e);
    });
  var Bt,
    qt,
    Ft,
    Ht = R.inspectSource,
    Mt = y(function (e) {
      var n = xt.CONFIGURABLE,
        r = Rt.enforce,
        i = Rt.get,
        o = String,
        s = Object.defineProperty,
        u = a("".slice),
        c = a("".replace),
        f = a([].join),
        l =
          re &&
          !t(function () {
            return 8 !== s(function () {}, "length", { value: 8 }).length;
          }),
        h = String(String).split("String"),
        p = (e.exports = function (e, t, i) {
          "Symbol(" === u(o(t), 0, 7) &&
            (t = "[" + c(o(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
            i && i.getter && (t = "get " + t),
            i && i.setter && (t = "set " + t),
            (!j(e, "name") || (n && e.name !== t)) &&
              (re
                ? s(e, "name", { value: t, configurable: !0 })
                : (e.name = t)),
            l &&
              i &&
              j(i, "arity") &&
              e.length !== i.arity &&
              s(e, "length", { value: i.arity });
          try {
            i && j(i, "constructor") && i.constructor
              ? re && s(e, "prototype", { writable: !1 })
              : e.prototype && (e.prototype = void 0);
          } catch (e) {}
          var a = r(e);
          return (
            j(a, "source") || (a.source = f(h, "string" == typeof t ? t : "")),
            e
          );
        });
      Function.prototype.toString = p(function () {
        return (K(this) && i(this).source) || Ht(this);
      }, "toString");
    }),
    zt = function (e, t, n, r) {
      r || (r = {});
      var i = r.enumerable,
        o = void 0 !== r.name ? r.name : t;
      if ((K(n) && Mt(n, o, r), r.global)) i ? (e[t] = n) : k(t, n);
      else {
        try {
          r.unsafe ? e[t] && (i = !0) : delete e[t];
        } catch (e) {}
        i
          ? (e[t] = n)
          : Ee.f(e, t, {
              value: n,
              enumerable: !1,
              configurable: !r.nonConfigurable,
              writable: !r.nonWritable,
            });
      }
      return e;
    },
    Nt = $e.concat("length", "prototype"),
    Dt = {
      f:
        Object.getOwnPropertyNames ||
        function (e) {
          return Ye(e, Nt);
        },
    },
    Gt = { f: Object.getOwnPropertySymbols },
    Wt = a([].concat),
    Yt =
      le("Reflect", "ownKeys") ||
      function (e) {
        var t = Dt.f(ne(e)),
          n = Gt.f;
        return n ? Wt(t, n(e)) : t;
      },
    $t = function (e, t, n) {
      for (var r = Yt(t), i = Ee.f, o = jt.f, a = 0; a < r.length; a++) {
        var s = r[a];
        j(e, s) || (n && j(n, s)) || i(e, s, o(t, s));
      }
    },
    Jt = /#|\.prototype\./,
    Vt = function (e, n) {
      var r = Xt[Qt(e)];
      return r === Zt || (r !== Kt && (K(n) ? t(n) : !!n));
    },
    Qt = (Vt.normalize = function (e) {
      return String(e).replace(Jt, ".").toLowerCase();
    }),
    Xt = (Vt.data = {}),
    Kt = (Vt.NATIVE = "N"),
    Zt = (Vt.POLYFILL = "P"),
    en = Vt,
    tn = jt.f,
    nn = function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = e.target,
        u = e.global,
        c = e.stat;
      if ((n = u ? P : c ? P[s] || k(s, {}) : P[s] && P[s].prototype))
        for (r in t) {
          if (
            ((o = t[r]),
            (i = e.dontCallGetSet ? (a = tn(n, r)) && a.value : n[r]),
            !en(u ? r : s + (c ? "." : "#") + r, e.forced) && void 0 !== i)
          ) {
            if (typeof o == typeof i) continue;
            $t(o, i);
          }
          (e.sham || (i && i.sham)) && wt(o, "sham", !0), zt(n, r, o, e);
        }
    },
    rn = !t(function () {
      function e() {}
      return (
        (e.prototype.constructor = null),
        Object.getPrototypeOf(new e()) !== e.prototype
      );
    }),
    on = Ze("IE_PROTO"),
    an = Object,
    sn = an.prototype,
    un = rn
      ? an.getPrototypeOf
      : function (e) {
          var t = U(e);
          if (j(t, on)) return t[on];
          var n = t.constructor;
          return K(n) && t instanceof n
            ? n.prototype
            : t instanceof an
              ? sn
              : null;
        },
    cn = Q("iterator"),
    fn = !1;
  [].keys &&
    ("next" in (Ft = [].keys())
      ? (qt = un(un(Ft))) !== Object.prototype && (Bt = qt)
      : (fn = !0));
  var ln =
    !Z(Bt) ||
    t(function () {
      var e = {};
      return Bt[cn].call(e) !== e;
    });
  ln && (Bt = {}),
    K(Bt[cn]) ||
      zt(Bt, cn, function () {
        return this;
      });
  var hn = { IteratorPrototype: Bt, BUGGY_SAFARI_ITERATORS: fn },
    pn = Ee.f,
    dn = Q("toStringTag"),
    vn = function (e, t, n) {
      e && !n && (e = e.prototype),
        e && !j(e, dn) && pn(e, dn, { configurable: !0, value: t });
    },
    gn = hn.IteratorPrototype,
    mn = function () {
      return this;
    },
    yn = function (e, t, n, r) {
      var i = t + " Iterator";
      return (
        (e.prototype = st(gn, { next: yt(+!r, n) })),
        vn(e, i, !1),
        (vt[i] = mn),
        e
      );
    },
    wn = String,
    bn = TypeError,
    Sn = function (e) {
      if (
        (function (e) {
          return Z(e) || null === e;
        })(e)
      )
        return e;
      throw new bn("Can't set " + wn(e) + " as a prototype");
    },
    Pn =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var e,
              t = !1,
              n = {};
            try {
              (e = (function (e, t, n) {
                try {
                  return a(ye(Object.getOwnPropertyDescriptor(e, t)[n]));
                } catch (e) {}
              })(Object.prototype, "__proto__", "set"))(n, []),
                (t = n instanceof Array);
            } catch (e) {}
            return function (n, r) {
              return (
                v(n), Sn(r), Z(n) ? (t ? e(n, r) : (n.__proto__ = r), n) : n
              );
            };
          })()
        : void 0),
    On = xt.PROPER,
    kn = xt.CONFIGURABLE,
    Rn = hn.IteratorPrototype,
    Ln = hn.BUGGY_SAFARI_ITERATORS,
    An = Q("iterator"),
    Un = "keys",
    Cn = "values",
    jn = "entries",
    En = function () {
      return this;
    },
    In = function (e, t, n, r, i, o, a) {
      yn(n, t, r);
      var s,
        u,
        c,
        f = function (e) {
          if (e === i && v) return v;
          if (!Ln && e && e in p) return p[e];
          switch (e) {
            case Un:
            case Cn:
            case jn:
              return function () {
                return new n(this, e);
              };
          }
          return function () {
            return new n(this);
          };
        },
        l = t + " Iterator",
        h = !1,
        p = e.prototype,
        d = p[An] || p["@@iterator"] || (i && p[i]),
        v = (!Ln && d) || f(i),
        g = ("Array" === t && p.entries) || d;
      if (
        (g &&
          (s = un(g.call(new e()))) !== Object.prototype &&
          s.next &&
          (un(s) !== Rn && (Pn ? Pn(s, Rn) : K(s[An]) || zt(s, An, En)),
          vn(s, l, !0)),
        On &&
          i === Cn &&
          d &&
          d.name !== Cn &&
          (kn
            ? wt(p, "name", Cn)
            : ((h = !0),
              (v = function () {
                return fe(d, this);
              }))),
        i)
      )
        if (((u = { values: f(Cn), keys: o ? v : f(Un), entries: f(jn) }), a))
          for (c in u) (Ln || h || !(c in p)) && zt(p, c, u[c]);
        else nn({ target: t, proto: !0, forced: Ln || h }, u);
      return p[An] !== v && zt(p, An, v, { name: i }), (vt[t] = v), u;
    },
    _n = function (e, t) {
      return { value: e, done: t };
    },
    xn = Ee.f,
    Tn = "Array Iterator",
    Bn = Rt.set,
    qn = Rt.getterFor(Tn);
  In(
    Array,
    "Array",
    function (e, t) {
      Bn(this, { type: Tn, target: g(e), index: 0, kind: t });
    },
    function () {
      var e = qn(this),
        t = e.target,
        n = e.index++;
      if (!t || n >= t.length) return (e.target = null), _n(void 0, !0);
      switch (e.kind) {
        case "keys":
          return _n(n, !1);
        case "values":
          return _n(t[n], !1);
      }
      return _n([n, t[n]], !1);
    },
    "values",
  );
  var Fn = (vt.Arguments = vt.Array);
  if ((dt("keys"), dt("values"), dt("entries"), re && "values" !== Fn.name))
    try {
      xn(Fn, "name", { value: "values" });
    } catch (e) {}
  var Hn = RangeError,
    Mn = String.fromCharCode,
    zn = String.fromCodePoint,
    Nn = a([].join),
    Dn = !!zn && 1 !== zn.length;
  nn(
    { target: "String", stat: !0, arity: 1, forced: Dn },
    {
      fromCodePoint: function (e) {
        for (var t, n = [], r = arguments.length, i = 0; r > i; ) {
          if (((t = +arguments[i++]), Fe(t, 1114111) !== t))
            throw new Hn(t + " is not a valid code point");
          n[i] =
            t < 65536
              ? Mn(t)
              : Mn(55296 + ((t -= 65536) >> 10), (t % 1024) + 56320);
        }
        return Nn(n, "");
      },
    },
  );
  var Gn = Object.getOwnPropertyDescriptor,
    Wn = function (e) {
      if (!re) return P[e];
      var t = Gn(P, e);
      return t && t.value;
    },
    Yn = Q("iterator"),
    $n = !t(function () {
      var e = new URL("b?a=1&b=2&c=3", "https://a"),
        t = e.searchParams,
        n = new URLSearchParams("a=1&a=2&b=3"),
        r = "";
      return (
        (e.pathname = "c%20d"),
        t.forEach(function (e, n) {
          t.delete("b"), (r += n + e);
        }),
        n.delete("a", 2),
        n.delete("b", void 0),
        (!t.size && !re) ||
          !t.sort ||
          "https://a/c%20d?a=1&c=3" !== e.href ||
          "3" !== t.get("c") ||
          "a=1" !== String(new URLSearchParams("?a=1")) ||
          !t[Yn] ||
          "a" !== new URL("https://a@b").username ||
          "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") ||
          "xn--e1aybc" !== new URL("https://тест").host ||
          "#%D0%B1" !== new URL("https://a#б").hash ||
          "a1c3" !== r ||
          "x" !== new URL("https://x", void 0).host
      );
    }),
    Jn = function (e, t, n) {
      return (
        n.get && Mt(n.get, t, { getter: !0 }),
        n.set && Mt(n.set, t, { setter: !0 }),
        Ee.f(e, t, n)
      );
    },
    Vn = TypeError,
    Qn = function (e, t) {
      if (he(t, e)) return e;
      throw new Vn("Incorrect invocation");
    },
    Xn = function (e) {
      if ("Function" === c(e)) return a(e);
    },
    Kn = Xn(Xn.bind),
    Zn = function (e, t) {
      return (
        ye(e),
        void 0 === t
          ? e
          : n
            ? Kn(e, t)
            : function () {
                return e.apply(t, arguments);
              }
      );
    },
    er = {};
  er[Q("toStringTag")] = "z";
  var tr = "[object z]" === String(er),
    nr = Q("toStringTag"),
    rr = Object,
    ir =
      "Arguments" ===
      c(
        (function () {
          return arguments;
        })(),
      ),
    or = tr
      ? c
      : function (e) {
          var t, n, r;
          return void 0 === e
            ? "Undefined"
            : null === e
              ? "Null"
              : "string" ==
                  typeof (n = (function (e, t) {
                    try {
                      return e[t];
                    } catch (e) {}
                  })((t = rr(e)), nr))
                ? n
                : ir
                  ? c(t)
                  : "Object" === (r = c(t)) && K(t.callee)
                    ? "Arguments"
                    : r;
        },
    ar = String,
    sr = function (e) {
      if ("Symbol" === or(e))
        throw new TypeError("Cannot convert a Symbol value to a string");
      return ar(e);
    },
    ur = Q("iterator"),
    cr = function (e) {
      if (!p(e)) return we(e, ur) || we(e, "@@iterator") || vt[or(e)];
    },
    fr = TypeError,
    lr = function (e, t) {
      var n = arguments.length < 2 ? cr(e) : t;
      if (ye(n)) return ne(fe(n, e));
      throw new fr(ge(e) + " is not iterable");
    },
    hr = TypeError,
    pr = function (e, t) {
      if (e < t) throw new hr("Not enough arguments");
      return e;
    },
    dr = a([].slice),
    vr = Math.floor,
    gr = function (e, t) {
      var n = e.length;
      if (n < 8)
        for (var r, i, o = 1; o < n; ) {
          for (i = o, r = e[o]; i && t(e[i - 1], r) > 0; ) e[i] = e[--i];
          i !== o++ && (e[i] = r);
        }
      else
        for (
          var a = vr(n / 2),
            s = gr(dr(e, 0, a), t),
            u = gr(dr(e, a), t),
            c = s.length,
            f = u.length,
            l = 0,
            h = 0;
          l < c || h < f;

        )
          e[l + h] =
            l < c && h < f
              ? t(s[l], u[h]) <= 0
                ? s[l++]
                : u[h++]
              : l < c
                ? s[l++]
                : u[h++];
      return e;
    },
    mr = gr,
    yr = Q("iterator"),
    wr = "URLSearchParams",
    br = wr + "Iterator",
    Sr = Rt.set,
    Pr = Rt.getterFor(wr),
    Or = Rt.getterFor(br),
    kr = Wn("fetch"),
    Rr = Wn("Request"),
    Lr = Wn("Headers"),
    Ar = Rr && Rr.prototype,
    Ur = Lr && Lr.prototype,
    Cr = P.TypeError,
    jr = P.encodeURIComponent,
    Er = String.fromCharCode,
    Ir = le("String", "fromCodePoint"),
    _r = parseInt,
    xr = a("".charAt),
    Tr = a([].join),
    Br = a([].push),
    qr = a("".replace),
    Fr = a([].shift),
    Hr = a([].splice),
    Mr = a("".split),
    zr = a("".slice),
    Nr = a(/./.exec),
    Dr = /\+/g,
    Gr = /^[0-9a-f]+$/i,
    Wr = function (e, t) {
      var n = zr(e, t, t + 2);
      return Nr(Gr, n) ? _r(n, 16) : NaN;
    },
    Yr = function (e) {
      for (var t = 0, n = 128; n > 0 && e & n; n >>= 1) t++;
      return t;
    },
    $r = function (e) {
      var t = null;
      switch (e.length) {
        case 1:
          t = e[0];
          break;
        case 2:
          t = ((31 & e[0]) << 6) | (63 & e[1]);
          break;
        case 3:
          t = ((15 & e[0]) << 12) | ((63 & e[1]) << 6) | (63 & e[2]);
          break;
        case 4:
          t =
            ((7 & e[0]) << 18) |
            ((63 & e[1]) << 12) |
            ((63 & e[2]) << 6) |
            (63 & e[3]);
      }
      return t > 1114111 ? null : t;
    },
    Jr = function (e) {
      for (var t = (e = qr(e, Dr, " ")).length, n = "", r = 0; r < t; ) {
        var i = xr(e, r);
        if ("%" === i) {
          if ("%" === xr(e, r + 1) || r + 3 > t) {
            (n += "%"), r++;
            continue;
          }
          var o = Wr(e, r + 1);
          if (o != o) {
            (n += i), r++;
            continue;
          }
          r += 2;
          var a = Yr(o);
          if (0 === a) i = Er(o);
          else {
            if (1 === a || a > 4) {
              (n += "�"), r++;
              continue;
            }
            for (
              var s = [o], u = 1;
              u < a && !(++r + 3 > t || "%" !== xr(e, r));

            ) {
              var c = Wr(e, r + 1);
              if (c != c) {
                r += 3;
                break;
              }
              if (c > 191 || c < 128) break;
              Br(s, c), (r += 2), u++;
            }
            if (s.length !== a) {
              n += "�";
              continue;
            }
            var f = $r(s);
            null === f ? (n += "�") : (i = Ir(f));
          }
        }
        (n += i), r++;
      }
      return n;
    },
    Vr = /[!'()~]|%20/g,
    Qr = {
      "!": "%21",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "~": "%7E",
      "%20": "+",
    },
    Xr = function (e) {
      return Qr[e];
    },
    Kr = function (e) {
      return qr(jr(e), Vr, Xr);
    },
    Zr = yn(
      function (e, t) {
        Sr(this, { type: br, target: Pr(e).entries, index: 0, kind: t });
      },
      wr,
      function () {
        var e = Or(this),
          t = e.target,
          n = e.index++;
        if (!t || n >= t.length) return (e.target = null), _n(void 0, !0);
        var r = t[n];
        switch (e.kind) {
          case "keys":
            return _n(r.key, !1);
          case "values":
            return _n(r.value, !1);
        }
        return _n([r.key, r.value], !1);
      },
      !0,
    ),
    ei = function (e) {
      (this.entries = []),
        (this.url = null),
        void 0 !== e &&
          (Z(e)
            ? this.parseObject(e)
            : this.parseQuery(
                "string" == typeof e
                  ? "?" === xr(e, 0)
                    ? zr(e, 1)
                    : e
                  : sr(e),
              ));
    };
  ei.prototype = {
    type: wr,
    bindURL: function (e) {
      (this.url = e), this.update();
    },
    parseObject: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u = this.entries,
        c = cr(e);
      if (c)
        for (n = (t = lr(e, c)).next; !(r = fe(n, t)).done; ) {
          if (
            ((o = (i = lr(ne(r.value))).next),
            (a = fe(o, i)).done || (s = fe(o, i)).done || !fe(o, i).done)
          )
            throw new Cr("Expected sequence with length 2");
          Br(u, { key: sr(a.value), value: sr(s.value) });
        }
      else for (var f in e) j(e, f) && Br(u, { key: f, value: sr(e[f]) });
    },
    parseQuery: function (e) {
      if (e)
        for (var t, n, r = this.entries, i = Mr(e, "&"), o = 0; o < i.length; )
          (t = i[o++]).length &&
            ((n = Mr(t, "=")),
            Br(r, { key: Jr(Fr(n)), value: Jr(Tr(n, "=")) }));
    },
    serialize: function () {
      for (var e, t = this.entries, n = [], r = 0; r < t.length; )
        (e = t[r++]), Br(n, Kr(e.key) + "=" + Kr(e.value));
      return Tr(n, "&");
    },
    update: function () {
      (this.entries.length = 0), this.parseQuery(this.url.query);
    },
    updateURL: function () {
      this.url && this.url.update();
    },
  };
  var ti = function () {
      Qn(this, ni);
      var e = Sr(this, new ei(arguments.length > 0 ? arguments[0] : void 0));
      re || (this.size = e.entries.length);
    },
    ni = ti.prototype;
  if (
    ((function (e, t, n) {
      for (var r in t) zt(e, r, t[r], n);
    })(
      ni,
      {
        append: function (e, t) {
          var n = Pr(this);
          pr(arguments.length, 2),
            Br(n.entries, { key: sr(e), value: sr(t) }),
            re || this.length++,
            n.updateURL();
        },
        delete: function (e) {
          for (
            var t = Pr(this),
              n = pr(arguments.length, 1),
              r = t.entries,
              i = sr(e),
              o = n < 2 ? void 0 : arguments[1],
              a = void 0 === o ? o : sr(o),
              s = 0;
            s < r.length;

          ) {
            var u = r[s];
            if (u.key !== i || (void 0 !== a && u.value !== a)) s++;
            else if ((Hr(r, s, 1), void 0 !== a)) break;
          }
          re || (this.size = r.length), t.updateURL();
        },
        get: function (e) {
          var t = Pr(this).entries;
          pr(arguments.length, 1);
          for (var n = sr(e), r = 0; r < t.length; r++)
            if (t[r].key === n) return t[r].value;
          return null;
        },
        getAll: function (e) {
          var t = Pr(this).entries;
          pr(arguments.length, 1);
          for (var n = sr(e), r = [], i = 0; i < t.length; i++)
            t[i].key === n && Br(r, t[i].value);
          return r;
        },
        has: function (e) {
          for (
            var t = Pr(this).entries,
              n = pr(arguments.length, 1),
              r = sr(e),
              i = n < 2 ? void 0 : arguments[1],
              o = void 0 === i ? i : sr(i),
              a = 0;
            a < t.length;

          ) {
            var s = t[a++];
            if (s.key === r && (void 0 === o || s.value === o)) return !0;
          }
          return !1;
        },
        set: function (e, t) {
          var n = Pr(this);
          pr(arguments.length, 1);
          for (
            var r, i = n.entries, o = !1, a = sr(e), s = sr(t), u = 0;
            u < i.length;
            u++
          )
            (r = i[u]).key === a &&
              (o ? Hr(i, u--, 1) : ((o = !0), (r.value = s)));
          o || Br(i, { key: a, value: s }),
            re || (this.size = i.length),
            n.updateURL();
        },
        sort: function () {
          var e = Pr(this);
          mr(e.entries, function (e, t) {
            return e.key > t.key ? 1 : -1;
          }),
            e.updateURL();
        },
        forEach: function (e) {
          for (
            var t,
              n = Pr(this).entries,
              r = Zn(e, arguments.length > 1 ? arguments[1] : void 0),
              i = 0;
            i < n.length;

          )
            r((t = n[i++]).value, t.key, this);
        },
        keys: function () {
          return new Zr(this, "keys");
        },
        values: function () {
          return new Zr(this, "values");
        },
        entries: function () {
          return new Zr(this, "entries");
        },
      },
      { enumerable: !0 },
    ),
    zt(ni, yr, ni.entries, { name: "entries" }),
    zt(
      ni,
      "toString",
      function () {
        return Pr(this).serialize();
      },
      { enumerable: !0 },
    ),
    re &&
      Jn(ni, "size", {
        get: function () {
          return Pr(this).entries.length;
        },
        configurable: !0,
        enumerable: !0,
      }),
    vn(ti, wr),
    nn({ global: !0, constructor: !0, forced: !$n }, { URLSearchParams: ti }),
    !$n && K(Lr))
  ) {
    var ri = a(Ur.has),
      ii = a(Ur.set),
      oi = function (e) {
        if (Z(e)) {
          var t,
            n = e.body;
          if (or(n) === wr)
            return (
              (t = e.headers ? new Lr(e.headers) : new Lr()),
              ri(t, "content-type") ||
                ii(
                  t,
                  "content-type",
                  "application/x-www-form-urlencoded;charset=UTF-8",
                ),
              st(e, { body: yt(0, sr(n)), headers: yt(0, t) })
            );
        }
        return e;
      };
    if (
      (K(kr) &&
        nn(
          { global: !0, enumerable: !0, dontCallGetSet: !0, forced: !0 },
          {
            fetch: function (e) {
              return kr(e, arguments.length > 1 ? oi(arguments[1]) : {});
            },
          },
        ),
      K(Rr))
    ) {
      var ai = function (e) {
        return (
          Qn(this, Ar), new Rr(e, arguments.length > 1 ? oi(arguments[1]) : {})
        );
      };
      (Ar.constructor = ai),
        (ai.prototype = Ar),
        nn(
          { global: !0, constructor: !0, dontCallGetSet: !0, forced: !0 },
          { Request: ai },
        );
    }
  }
  var si = { URLSearchParams: ti, getState: Pr },
    ui = URLSearchParams,
    ci = ui.prototype,
    fi = a(ci.append),
    li = a(ci.delete),
    hi = a(ci.forEach),
    pi = a([].push),
    di = new ui("a=1&a=2&b=3");
  di.delete("a", 1),
    di.delete("b", void 0),
    di + "" != "a=2" &&
      zt(
        ci,
        "delete",
        function (e) {
          var t = arguments.length,
            n = t < 2 ? void 0 : arguments[1];
          if (t && void 0 === n) return li(this, e);
          var r = [];
          hi(this, function (e, t) {
            pi(r, { key: t, value: e });
          }),
            pr(t, 1);
          for (
            var i, o = sr(e), a = sr(n), s = 0, u = 0, c = !1, f = r.length;
            s < f;

          )
            (i = r[s++]), c || i.key === o ? ((c = !0), li(this, i.key)) : u++;
          for (; u < f; )
            ((i = r[u++]).key === o && i.value === a) ||
              fi(this, i.key, i.value);
        },
        { enumerable: !0, unsafe: !0 },
      );
  var vi = URLSearchParams,
    gi = vi.prototype,
    mi = a(gi.getAll),
    yi = a(gi.has),
    wi = new vi("a=1");
  (!wi.has("a", 2) && wi.has("a", void 0)) ||
    zt(
      gi,
      "has",
      function (e) {
        var t = arguments.length,
          n = t < 2 ? void 0 : arguments[1];
        if (t && void 0 === n) return yi(this, e);
        var r = mi(this, e);
        pr(t, 1);
        for (var i = sr(n), o = 0; o < r.length; ) if (r[o++] === i) return !0;
        return !1;
      },
      { enumerable: !0, unsafe: !0 },
    );
  var bi = URLSearchParams.prototype,
    Si = a(bi.forEach);
  re &&
    !("size" in bi) &&
    Jn(bi, "size", {
      get: function () {
        var e = 0;
        return (
          Si(this, function () {
            e++;
          }),
          e
        );
      },
      configurable: !0,
      enumerable: !0,
    });
  var Pi = P;
  Pi.URLSearchParams;
  var Oi = a("".charAt),
    ki = a("".charCodeAt),
    Ri = a("".slice),
    Li = function (e) {
      return function (t, n) {
        var r,
          i,
          o = sr(v(t)),
          a = Te(n),
          s = o.length;
        return a < 0 || a >= s
          ? e
            ? ""
            : void 0
          : (r = ki(o, a)) < 55296 ||
              r > 56319 ||
              a + 1 === s ||
              (i = ki(o, a + 1)) < 56320 ||
              i > 57343
            ? e
              ? Oi(o, a)
              : r
            : e
              ? Ri(o, a, a + 2)
              : i - 56320 + ((r - 55296) << 10) + 65536;
      };
    },
    Ai = { codeAt: Li(!1), charAt: Li(!0) },
    Ui = Ai.charAt,
    Ci = "String Iterator",
    ji = Rt.set,
    Ei = Rt.getterFor(Ci);
  In(
    String,
    "String",
    function (e) {
      ji(this, { type: Ci, string: sr(e), index: 0 });
    },
    function () {
      var e,
        t = Ei(this),
        n = t.string,
        r = t.index;
      return r >= n.length
        ? _n(void 0, !0)
        : ((e = Ui(n, r)), (t.index += e.length), _n(e, !1));
    },
  );
  var Ii = Object.assign,
    _i = Object.defineProperty,
    xi = a([].concat),
    Ti =
      !Ii ||
      t(function () {
        if (
          re &&
          1 !==
            Ii(
              { b: 1 },
              Ii(
                _i({}, "a", {
                  enumerable: !0,
                  get: function () {
                    _i(this, "b", { value: 3, enumerable: !1 });
                  },
                }),
                { b: 2 },
              ),
            ).b
        )
          return !0;
        var e = {},
          t = {},
          n = Symbol("assign detection"),
          r = "abcdefghijklmnopqrst";
        return (
          (e[n] = 7),
          r.split("").forEach(function (e) {
            t[e] = e;
          }),
          7 !== Ii({}, e)[n] || Je(Ii({}, t)).join("") !== r
        );
      })
        ? function (e, t) {
            for (
              var n = U(e), r = arguments.length, i = 1, o = Gt.f, a = Ut.f;
              r > i;

            )
              for (
                var s,
                  u = h(arguments[i++]),
                  c = o ? xi(Je(u), o(u)) : Je(u),
                  f = c.length,
                  l = 0;
                f > l;

              )
                (s = c[l++]), (re && !fe(a, u, s)) || (n[s] = u[s]);
            return n;
          }
        : Ii,
    Bi = function (e, t, n, r) {
      try {
        return r ? t(ne(n)[0], n[1]) : t(n);
      } catch (t) {
        !(function (e, t, n) {
          var r, i;
          ne(e);
          try {
            if (!(r = we(e, "return"))) {
              if ("throw" === t) throw n;
              return n;
            }
            r = fe(r, e);
          } catch (e) {
            (i = !0), (r = e);
          }
          if ("throw" === t) throw n;
          if (i) throw r;
          ne(r);
        })(e, "throw", t);
      }
    },
    qi = Q("iterator"),
    Fi = Array.prototype,
    Hi = function () {},
    Mi = le("Reflect", "construct"),
    zi = /^\s*(?:class|function)\b/,
    Ni = a(zi.exec),
    Di = !zi.test(Hi),
    Gi = function (e) {
      if (!K(e)) return !1;
      try {
        return Mi(Hi, [], e), !0;
      } catch (e) {
        return !1;
      }
    },
    Wi = function (e) {
      if (!K(e)) return !1;
      switch (or(e)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return !1;
      }
      try {
        return Di || !!Ni(zi, Ht(e));
      } catch (e) {
        return !0;
      }
    };
  Wi.sham = !0;
  var Yi,
    $i =
      !Mi ||
      t(function () {
        var e;
        return (
          Gi(Gi.call) ||
          !Gi(Object) ||
          !Gi(function () {
            e = !0;
          }) ||
          e
        );
      })
        ? Wi
        : Gi,
    Ji = function (e, t, n) {
      re ? Ee.f(e, t, yt(0, n)) : (e[t] = n);
    },
    Vi = Array,
    Qi = function (e) {
      var t = U(e),
        n = $i(this),
        r = arguments.length,
        i = r > 1 ? arguments[1] : void 0,
        o = void 0 !== i;
      o && (i = Zn(i, r > 2 ? arguments[2] : void 0));
      var a,
        s,
        u,
        c,
        f,
        l,
        h,
        p = cr(t),
        d = 0;
      if (
        p &&
        (this !== Vi || void 0 === (h = p) || (vt.Array !== h && Fi[qi] !== h))
      )
        for (
          s = n ? new this() : [], f = (c = lr(t, p)).next;
          !(u = fe(f, c)).done;
          d++
        )
          (l = o ? Bi(c, i, [u.value, d], !0) : u.value), Ji(s, d, l);
      else
        for (a = Me(t), s = n ? new this(a) : Vi(a); a > d; d++)
          (l = o ? i(t[d], d) : t[d]), Ji(s, d, l);
      return (s.length = d), s;
    },
    Xi = 2147483647,
    Ki = /[^\0-\u007E]/,
    Zi = /[.\u3002\uFF0E\uFF61]/g,
    eo = "Overflow: input needs wider integers to process",
    to = RangeError,
    no = a(Zi.exec),
    ro = Math.floor,
    io = String.fromCharCode,
    oo = a("".charCodeAt),
    ao = a([].join),
    so = a([].push),
    uo = a("".replace),
    co = a("".split),
    fo = a("".toLowerCase),
    lo = function (e) {
      return e + 22 + 75 * (e < 26);
    },
    ho = function (e, t, n) {
      var r = 0;
      for (e = n ? ro(e / 700) : e >> 1, e += ro(e / t); e > 455; )
        (e = ro(e / 35)), (r += 36);
      return ro(r + (36 * e) / (e + 38));
    },
    po = function (e) {
      var t = [];
      e = (function (e) {
        for (var t = [], n = 0, r = e.length; n < r; ) {
          var i = oo(e, n++);
          if (i >= 55296 && i <= 56319 && n < r) {
            var o = oo(e, n++);
            56320 == (64512 & o)
              ? so(t, ((1023 & i) << 10) + (1023 & o) + 65536)
              : (so(t, i), n--);
          } else so(t, i);
        }
        return t;
      })(e);
      var n,
        r,
        i = e.length,
        o = 128,
        a = 0,
        s = 72;
      for (n = 0; n < e.length; n++) (r = e[n]) < 128 && so(t, io(r));
      var u = t.length,
        c = u;
      for (u && so(t, "-"); c < i; ) {
        var f = Xi;
        for (n = 0; n < e.length; n++) (r = e[n]) >= o && r < f && (f = r);
        var l = c + 1;
        if (f - o > ro((Xi - a) / l)) throw new to(eo);
        for (a += (f - o) * l, o = f, n = 0; n < e.length; n++) {
          if ((r = e[n]) < o && ++a > Xi) throw new to(eo);
          if (r === o) {
            for (var h = a, p = 36; ; ) {
              var d = p <= s ? 1 : p >= s + 26 ? 26 : p - s;
              if (h < d) break;
              var v = h - d,
                g = 36 - d;
              so(t, io(lo(d + (v % g)))), (h = ro(v / g)), (p += 36);
            }
            so(t, io(lo(h))), (s = ho(a, l, c === u)), (a = 0), c++;
          }
        }
        a++, o++;
      }
      return ao(t, "");
    },
    vo = Ai.codeAt,
    go = Rt.set,
    mo = Rt.getterFor("URL"),
    yo = si.URLSearchParams,
    wo = si.getState,
    bo = P.URL,
    So = P.TypeError,
    Po = P.parseInt,
    Oo = Math.floor,
    ko = Math.pow,
    Ro = a("".charAt),
    Lo = a(/./.exec),
    Ao = a([].join),
    Uo = a((1).toString),
    Co = a([].pop),
    jo = a([].push),
    Eo = a("".replace),
    Io = a([].shift),
    _o = a("".split),
    xo = a("".slice),
    To = a("".toLowerCase),
    Bo = a([].unshift),
    qo = "Invalid scheme",
    Fo = "Invalid host",
    Ho = "Invalid port",
    Mo = /[a-z]/i,
    zo = /[\d+-.a-z]/i,
    No = /\d/,
    Do = /^0x/i,
    Go = /^[0-7]+$/,
    Wo = /^\d+$/,
    Yo = /^[\da-f]+$/i,
    $o = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
    Jo = /[\0\t\n\r #/:<>?@[\\\]^|]/,
    Vo = /^[\u0000-\u0020]+/,
    Qo = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
    Xo = /[\t\n\r]/g,
    Ko = function (e) {
      var t, n, r, i;
      if ("number" == typeof e) {
        for (t = [], n = 0; n < 4; n++) Bo(t, e % 256), (e = Oo(e / 256));
        return Ao(t, ".");
      }
      if ("object" == typeof e) {
        for (
          t = "",
            r = (function (e) {
              for (var t = null, n = 1, r = null, i = 0, o = 0; o < 8; o++)
                0 !== e[o]
                  ? (i > n && ((t = r), (n = i)), (r = null), (i = 0))
                  : (null === r && (r = o), ++i);
              return i > n ? r : t;
            })(e),
            n = 0;
          n < 8;
          n++
        )
          (i && 0 === e[n]) ||
            (i && (i = !1),
            r === n
              ? ((t += n ? ":" : "::"), (i = !0))
              : ((t += Uo(e[n], 16)), n < 7 && (t += ":")));
        return "[" + t + "]";
      }
      return e;
    },
    Zo = {},
    ea = Ti({}, Zo, { " ": 1, '"': 1, "<": 1, ">": 1, "`": 1 }),
    ta = Ti({}, ea, { "#": 1, "?": 1, "{": 1, "}": 1 }),
    na = Ti({}, ta, {
      "/": 1,
      ":": 1,
      ";": 1,
      "=": 1,
      "@": 1,
      "[": 1,
      "\\": 1,
      "]": 1,
      "^": 1,
      "|": 1,
    }),
    ra = function (e, t) {
      var n = vo(e, 0);
      return n > 32 && n < 127 && !j(t, e) ? e : encodeURIComponent(e);
    },
    ia = { ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443 },
    oa = function (e, t) {
      var n;
      return (
        2 === e.length &&
        Lo(Mo, Ro(e, 0)) &&
        (":" === (n = Ro(e, 1)) || (!t && "|" === n))
      );
    },
    aa = function (e) {
      var t;
      return (
        e.length > 1 &&
        oa(xo(e, 0, 2)) &&
        (2 === e.length ||
          "/" === (t = Ro(e, 2)) ||
          "\\" === t ||
          "?" === t ||
          "#" === t)
      );
    },
    sa = function (e) {
      return "." === e || "%2e" === To(e);
    },
    ua = {},
    ca = {},
    fa = {},
    la = {},
    ha = {},
    pa = {},
    da = {},
    va = {},
    ga = {},
    ma = {},
    ya = {},
    wa = {},
    ba = {},
    Sa = {},
    Pa = {},
    Oa = {},
    ka = {},
    Ra = {},
    La = {},
    Aa = {},
    Ua = {},
    Ca = function (e, t, n) {
      var r,
        i,
        o,
        a = sr(e);
      if (t) {
        if ((i = this.parse(a))) throw new So(i);
        this.searchParams = null;
      } else {
        if ((void 0 !== n && (r = new Ca(n, !0)), (i = this.parse(a, null, r))))
          throw new So(i);
        (o = wo(new yo())).bindURL(this), (this.searchParams = o);
      }
    };
  Ca.prototype = {
    type: "URL",
    parse: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u = this,
        c = t || ua,
        f = 0,
        l = "",
        h = !1,
        p = !1,
        d = !1;
      for (
        e = sr(e),
          t ||
            ((u.scheme = ""),
            (u.username = ""),
            (u.password = ""),
            (u.host = null),
            (u.port = null),
            (u.path = []),
            (u.query = null),
            (u.fragment = null),
            (u.cannotBeABaseURL = !1),
            (e = Eo(e, Vo, "")),
            (e = Eo(e, Qo, "$1"))),
          e = Eo(e, Xo, ""),
          r = Qi(e);
        f <= r.length;

      ) {
        switch (((i = r[f]), c)) {
          case ua:
            if (!i || !Lo(Mo, i)) {
              if (t) return qo;
              c = fa;
              continue;
            }
            (l += To(i)), (c = ca);
            break;
          case ca:
            if (i && (Lo(zo, i) || "+" === i || "-" === i || "." === i))
              l += To(i);
            else {
              if (":" !== i) {
                if (t) return qo;
                (l = ""), (c = fa), (f = 0);
                continue;
              }
              if (
                t &&
                (u.isSpecial() !== j(ia, l) ||
                  ("file" === l &&
                    (u.includesCredentials() || null !== u.port)) ||
                  ("file" === u.scheme && !u.host))
              )
                return;
              if (((u.scheme = l), t))
                return void (
                  u.isSpecial() &&
                  ia[u.scheme] === u.port &&
                  (u.port = null)
                );
              (l = ""),
                "file" === u.scheme
                  ? (c = Sa)
                  : u.isSpecial() && n && n.scheme === u.scheme
                    ? (c = la)
                    : u.isSpecial()
                      ? (c = va)
                      : "/" === r[f + 1]
                        ? ((c = ha), f++)
                        : ((u.cannotBeABaseURL = !0), jo(u.path, ""), (c = La));
            }
            break;
          case fa:
            if (!n || (n.cannotBeABaseURL && "#" !== i)) return qo;
            if (n.cannotBeABaseURL && "#" === i) {
              (u.scheme = n.scheme),
                (u.path = dr(n.path)),
                (u.query = n.query),
                (u.fragment = ""),
                (u.cannotBeABaseURL = !0),
                (c = Ua);
              break;
            }
            c = "file" === n.scheme ? Sa : pa;
            continue;
          case la:
            if ("/" !== i || "/" !== r[f + 1]) {
              c = pa;
              continue;
            }
            (c = ga), f++;
            break;
          case ha:
            if ("/" === i) {
              c = ma;
              break;
            }
            c = Ra;
            continue;
          case pa:
            if (((u.scheme = n.scheme), i === Yi))
              (u.username = n.username),
                (u.password = n.password),
                (u.host = n.host),
                (u.port = n.port),
                (u.path = dr(n.path)),
                (u.query = n.query);
            else if ("/" === i || ("\\" === i && u.isSpecial())) c = da;
            else if ("?" === i)
              (u.username = n.username),
                (u.password = n.password),
                (u.host = n.host),
                (u.port = n.port),
                (u.path = dr(n.path)),
                (u.query = ""),
                (c = Aa);
            else {
              if ("#" !== i) {
                (u.username = n.username),
                  (u.password = n.password),
                  (u.host = n.host),
                  (u.port = n.port),
                  (u.path = dr(n.path)),
                  u.path.length--,
                  (c = Ra);
                continue;
              }
              (u.username = n.username),
                (u.password = n.password),
                (u.host = n.host),
                (u.port = n.port),
                (u.path = dr(n.path)),
                (u.query = n.query),
                (u.fragment = ""),
                (c = Ua);
            }
            break;
          case da:
            if (!u.isSpecial() || ("/" !== i && "\\" !== i)) {
              if ("/" !== i) {
                (u.username = n.username),
                  (u.password = n.password),
                  (u.host = n.host),
                  (u.port = n.port),
                  (c = Ra);
                continue;
              }
              c = ma;
            } else c = ga;
            break;
          case va:
            if (((c = ga), "/" !== i || "/" !== Ro(l, f + 1))) continue;
            f++;
            break;
          case ga:
            if ("/" !== i && "\\" !== i) {
              c = ma;
              continue;
            }
            break;
          case ma:
            if ("@" === i) {
              h && (l = "%40" + l), (h = !0), (o = Qi(l));
              for (var v = 0; v < o.length; v++) {
                var g = o[v];
                if (":" !== g || d) {
                  var m = ra(g, na);
                  d ? (u.password += m) : (u.username += m);
                } else d = !0;
              }
              l = "";
            } else if (
              i === Yi ||
              "/" === i ||
              "?" === i ||
              "#" === i ||
              ("\\" === i && u.isSpecial())
            ) {
              if (h && "" === l) return "Invalid authority";
              (f -= Qi(l).length + 1), (l = ""), (c = ya);
            } else l += i;
            break;
          case ya:
          case wa:
            if (t && "file" === u.scheme) {
              c = Oa;
              continue;
            }
            if (":" !== i || p) {
              if (
                i === Yi ||
                "/" === i ||
                "?" === i ||
                "#" === i ||
                ("\\" === i && u.isSpecial())
              ) {
                if (u.isSpecial() && "" === l) return Fo;
                if (
                  t &&
                  "" === l &&
                  (u.includesCredentials() || null !== u.port)
                )
                  return;
                if ((a = u.parseHost(l))) return a;
                if (((l = ""), (c = ka), t)) return;
                continue;
              }
              "[" === i ? (p = !0) : "]" === i && (p = !1), (l += i);
            } else {
              if ("" === l) return Fo;
              if ((a = u.parseHost(l))) return a;
              if (((l = ""), (c = ba), t === wa)) return;
            }
            break;
          case ba:
            if (!Lo(No, i)) {
              if (
                i === Yi ||
                "/" === i ||
                "?" === i ||
                "#" === i ||
                ("\\" === i && u.isSpecial()) ||
                t
              ) {
                if ("" !== l) {
                  var y = Po(l, 10);
                  if (y > 65535) return Ho;
                  (u.port = u.isSpecial() && y === ia[u.scheme] ? null : y),
                    (l = "");
                }
                if (t) return;
                c = ka;
                continue;
              }
              return Ho;
            }
            l += i;
            break;
          case Sa:
            if (((u.scheme = "file"), "/" === i || "\\" === i)) c = Pa;
            else {
              if (!n || "file" !== n.scheme) {
                c = Ra;
                continue;
              }
              switch (i) {
                case Yi:
                  (u.host = n.host), (u.path = dr(n.path)), (u.query = n.query);
                  break;
                case "?":
                  (u.host = n.host),
                    (u.path = dr(n.path)),
                    (u.query = ""),
                    (c = Aa);
                  break;
                case "#":
                  (u.host = n.host),
                    (u.path = dr(n.path)),
                    (u.query = n.query),
                    (u.fragment = ""),
                    (c = Ua);
                  break;
                default:
                  aa(Ao(dr(r, f), "")) ||
                    ((u.host = n.host), (u.path = dr(n.path)), u.shortenPath()),
                    (c = Ra);
                  continue;
              }
            }
            break;
          case Pa:
            if ("/" === i || "\\" === i) {
              c = Oa;
              break;
            }
            n &&
              "file" === n.scheme &&
              !aa(Ao(dr(r, f), "")) &&
              (oa(n.path[0], !0) ? jo(u.path, n.path[0]) : (u.host = n.host)),
              (c = Ra);
            continue;
          case Oa:
            if (i === Yi || "/" === i || "\\" === i || "?" === i || "#" === i) {
              if (!t && oa(l)) c = Ra;
              else if ("" === l) {
                if (((u.host = ""), t)) return;
                c = ka;
              } else {
                if ((a = u.parseHost(l))) return a;
                if (("localhost" === u.host && (u.host = ""), t)) return;
                (l = ""), (c = ka);
              }
              continue;
            }
            l += i;
            break;
          case ka:
            if (u.isSpecial()) {
              if (((c = Ra), "/" !== i && "\\" !== i)) continue;
            } else if (t || "?" !== i)
              if (t || "#" !== i) {
                if (i !== Yi && ((c = Ra), "/" !== i)) continue;
              } else (u.fragment = ""), (c = Ua);
            else (u.query = ""), (c = Aa);
            break;
          case Ra:
            if (
              i === Yi ||
              "/" === i ||
              ("\\" === i && u.isSpecial()) ||
              (!t && ("?" === i || "#" === i))
            ) {
              if (
                (".." === (s = To((s = l))) ||
                "%2e." === s ||
                ".%2e" === s ||
                "%2e%2e" === s
                  ? (u.shortenPath(),
                    "/" === i ||
                      ("\\" === i && u.isSpecial()) ||
                      jo(u.path, ""))
                  : sa(l)
                    ? "/" === i ||
                      ("\\" === i && u.isSpecial()) ||
                      jo(u.path, "")
                    : ("file" === u.scheme &&
                        !u.path.length &&
                        oa(l) &&
                        (u.host && (u.host = ""), (l = Ro(l, 0) + ":")),
                      jo(u.path, l)),
                (l = ""),
                "file" === u.scheme && (i === Yi || "?" === i || "#" === i))
              )
                for (; u.path.length > 1 && "" === u.path[0]; ) Io(u.path);
              "?" === i
                ? ((u.query = ""), (c = Aa))
                : "#" === i && ((u.fragment = ""), (c = Ua));
            } else l += ra(i, ta);
            break;
          case La:
            "?" === i
              ? ((u.query = ""), (c = Aa))
              : "#" === i
                ? ((u.fragment = ""), (c = Ua))
                : i !== Yi && (u.path[0] += ra(i, Zo));
            break;
          case Aa:
            t || "#" !== i
              ? i !== Yi &&
                ("'" === i && u.isSpecial()
                  ? (u.query += "%27")
                  : (u.query += "#" === i ? "%23" : ra(i, Zo)))
              : ((u.fragment = ""), (c = Ua));
            break;
          case Ua:
            i !== Yi && (u.fragment += ra(i, ea));
        }
        f++;
      }
    },
    parseHost: function (e) {
      var t, n, r;
      if ("[" === Ro(e, 0)) {
        if ("]" !== Ro(e, e.length - 1)) return Fo;
        if (
          ((t = (function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u = [0, 0, 0, 0, 0, 0, 0, 0],
              c = 0,
              f = null,
              l = 0,
              h = function () {
                return Ro(e, l);
              };
            if (":" === h()) {
              if (":" !== Ro(e, 1)) return;
              (l += 2), (f = ++c);
            }
            for (; h(); ) {
              if (8 === c) return;
              if (":" !== h()) {
                for (t = n = 0; n < 4 && Lo(Yo, h()); )
                  (t = 16 * t + Po(h(), 16)), l++, n++;
                if ("." === h()) {
                  if (0 === n) return;
                  if (((l -= n), c > 6)) return;
                  for (r = 0; h(); ) {
                    if (((i = null), r > 0)) {
                      if (!("." === h() && r < 4)) return;
                      l++;
                    }
                    if (!Lo(No, h())) return;
                    for (; Lo(No, h()); ) {
                      if (((o = Po(h(), 10)), null === i)) i = o;
                      else {
                        if (0 === i) return;
                        i = 10 * i + o;
                      }
                      if (i > 255) return;
                      l++;
                    }
                    (u[c] = 256 * u[c] + i), (2 != ++r && 4 !== r) || c++;
                  }
                  if (4 !== r) return;
                  break;
                }
                if (":" === h()) {
                  if ((l++, !h())) return;
                } else if (h()) return;
                u[c++] = t;
              } else {
                if (null !== f) return;
                l++, (f = ++c);
              }
            }
            if (null !== f)
              for (a = c - f, c = 7; 0 !== c && a > 0; )
                (s = u[c]), (u[c--] = u[f + a - 1]), (u[f + --a] = s);
            else if (8 !== c) return;
            return u;
          })(xo(e, 1, -1))),
          !t)
        )
          return Fo;
        this.host = t;
      } else if (this.isSpecial()) {
        if (
          ((e = (function (e) {
            var t,
              n,
              r = [],
              i = co(uo(fo(e), Zi, "."), ".");
            for (t = 0; t < i.length; t++)
              (n = i[t]), so(r, no(Ki, n) ? "xn--" + po(n) : n);
            return ao(r, ".");
          })(e)),
          Lo($o, e))
        )
          return Fo;
        if (
          ((t = (function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s,
              u = _o(e, ".");
            if (
              (u.length && "" === u[u.length - 1] && u.length--,
              (t = u.length) > 4)
            )
              return e;
            for (n = [], r = 0; r < t; r++) {
              if ("" === (i = u[r])) return e;
              if (
                ((o = 10),
                i.length > 1 &&
                  "0" === Ro(i, 0) &&
                  ((o = Lo(Do, i) ? 16 : 8), (i = xo(i, 8 === o ? 1 : 2))),
                "" === i)
              )
                a = 0;
              else {
                if (!Lo(10 === o ? Wo : 8 === o ? Go : Yo, i)) return e;
                a = Po(i, o);
              }
              jo(n, a);
            }
            for (r = 0; r < t; r++)
              if (((a = n[r]), r === t - 1)) {
                if (a >= ko(256, 5 - t)) return null;
              } else if (a > 255) return null;
            for (s = Co(n), r = 0; r < n.length; r++)
              s += n[r] * ko(256, 3 - r);
            return s;
          })(e)),
          null === t)
        )
          return Fo;
        this.host = t;
      } else {
        if (Lo(Jo, e)) return Fo;
        for (t = "", n = Qi(e), r = 0; r < n.length; r++) t += ra(n[r], Zo);
        this.host = t;
      }
    },
    cannotHaveUsernamePasswordPort: function () {
      return !this.host || this.cannotBeABaseURL || "file" === this.scheme;
    },
    includesCredentials: function () {
      return "" !== this.username || "" !== this.password;
    },
    isSpecial: function () {
      return j(ia, this.scheme);
    },
    shortenPath: function () {
      var e = this.path,
        t = e.length;
      !t || ("file" === this.scheme && 1 === t && oa(e[0], !0)) || e.length--;
    },
    serialize: function () {
      var e = this,
        t = e.scheme,
        n = e.username,
        r = e.password,
        i = e.host,
        o = e.port,
        a = e.path,
        s = e.query,
        u = e.fragment,
        c = t + ":";
      return (
        null !== i
          ? ((c += "//"),
            e.includesCredentials() && (c += n + (r ? ":" + r : "") + "@"),
            (c += Ko(i)),
            null !== o && (c += ":" + o))
          : "file" === t && (c += "//"),
        (c += e.cannotBeABaseURL ? a[0] : a.length ? "/" + Ao(a, "/") : ""),
        null !== s && (c += "?" + s),
        null !== u && (c += "#" + u),
        c
      );
    },
    setHref: function (e) {
      var t = this.parse(e);
      if (t) throw new So(t);
      this.searchParams.update();
    },
    getOrigin: function () {
      var e = this.scheme,
        t = this.port;
      if ("blob" === e)
        try {
          return new ja(e.path[0]).origin;
        } catch (e) {
          return "null";
        }
      return "file" !== e && this.isSpecial()
        ? e + "://" + Ko(this.host) + (null !== t ? ":" + t : "")
        : "null";
    },
    getProtocol: function () {
      return this.scheme + ":";
    },
    setProtocol: function (e) {
      this.parse(sr(e) + ":", ua);
    },
    getUsername: function () {
      return this.username;
    },
    setUsername: function (e) {
      var t = Qi(sr(e));
      if (!this.cannotHaveUsernamePasswordPort()) {
        this.username = "";
        for (var n = 0; n < t.length; n++) this.username += ra(t[n], na);
      }
    },
    getPassword: function () {
      return this.password;
    },
    setPassword: function (e) {
      var t = Qi(sr(e));
      if (!this.cannotHaveUsernamePasswordPort()) {
        this.password = "";
        for (var n = 0; n < t.length; n++) this.password += ra(t[n], na);
      }
    },
    getHost: function () {
      var e = this.host,
        t = this.port;
      return null === e ? "" : null === t ? Ko(e) : Ko(e) + ":" + t;
    },
    setHost: function (e) {
      this.cannotBeABaseURL || this.parse(e, ya);
    },
    getHostname: function () {
      var e = this.host;
      return null === e ? "" : Ko(e);
    },
    setHostname: function (e) {
      this.cannotBeABaseURL || this.parse(e, wa);
    },
    getPort: function () {
      var e = this.port;
      return null === e ? "" : sr(e);
    },
    setPort: function (e) {
      this.cannotHaveUsernamePasswordPort() ||
        ("" === (e = sr(e)) ? (this.port = null) : this.parse(e, ba));
    },
    getPathname: function () {
      var e = this.path;
      return this.cannotBeABaseURL ? e[0] : e.length ? "/" + Ao(e, "/") : "";
    },
    setPathname: function (e) {
      this.cannotBeABaseURL || ((this.path = []), this.parse(e, ka));
    },
    getSearch: function () {
      var e = this.query;
      return e ? "?" + e : "";
    },
    setSearch: function (e) {
      "" === (e = sr(e))
        ? (this.query = null)
        : ("?" === Ro(e, 0) && (e = xo(e, 1)),
          (this.query = ""),
          this.parse(e, Aa)),
        this.searchParams.update();
    },
    getSearchParams: function () {
      return this.searchParams.facade;
    },
    getHash: function () {
      var e = this.fragment;
      return e ? "#" + e : "";
    },
    setHash: function (e) {
      "" !== (e = sr(e))
        ? ("#" === Ro(e, 0) && (e = xo(e, 1)),
          (this.fragment = ""),
          this.parse(e, Ua))
        : (this.fragment = null);
    },
    update: function () {
      this.query = this.searchParams.serialize() || null;
    },
  };
  var ja = function (e) {
      var t = Qn(this, Ea),
        n = pr(arguments.length, 1) > 1 ? arguments[1] : void 0,
        r = go(t, new Ca(e, !1, n));
      re ||
        ((t.href = r.serialize()),
        (t.origin = r.getOrigin()),
        (t.protocol = r.getProtocol()),
        (t.username = r.getUsername()),
        (t.password = r.getPassword()),
        (t.host = r.getHost()),
        (t.hostname = r.getHostname()),
        (t.port = r.getPort()),
        (t.pathname = r.getPathname()),
        (t.search = r.getSearch()),
        (t.searchParams = r.getSearchParams()),
        (t.hash = r.getHash()));
    },
    Ea = ja.prototype,
    Ia = function (e, t) {
      return {
        get: function () {
          return mo(this)[e]();
        },
        set:
          t &&
          function (e) {
            return mo(this)[t](e);
          },
        configurable: !0,
        enumerable: !0,
      };
    };
  if (
    (re &&
      (Jn(Ea, "href", Ia("serialize", "setHref")),
      Jn(Ea, "origin", Ia("getOrigin")),
      Jn(Ea, "protocol", Ia("getProtocol", "setProtocol")),
      Jn(Ea, "username", Ia("getUsername", "setUsername")),
      Jn(Ea, "password", Ia("getPassword", "setPassword")),
      Jn(Ea, "host", Ia("getHost", "setHost")),
      Jn(Ea, "hostname", Ia("getHostname", "setHostname")),
      Jn(Ea, "port", Ia("getPort", "setPort")),
      Jn(Ea, "pathname", Ia("getPathname", "setPathname")),
      Jn(Ea, "search", Ia("getSearch", "setSearch")),
      Jn(Ea, "searchParams", Ia("getSearchParams")),
      Jn(Ea, "hash", Ia("getHash", "setHash"))),
    zt(
      Ea,
      "toJSON",
      function () {
        return mo(this).serialize();
      },
      { enumerable: !0 },
    ),
    zt(
      Ea,
      "toString",
      function () {
        return mo(this).serialize();
      },
      { enumerable: !0 },
    ),
    bo)
  ) {
    var _a = bo.createObjectURL,
      xa = bo.revokeObjectURL;
    _a && zt(ja, "createObjectURL", Zn(_a, bo)),
      xa && zt(ja, "revokeObjectURL", Zn(xa, bo));
  }
  vn(ja, "URL"),
    nn({ global: !0, constructor: !0, forced: !$n, sham: !re }, { URL: ja });
  var Ta = le("URL"),
    Ba =
      $n &&
      t(function () {
        Ta.canParse();
      }),
    qa = t(function () {
      return 1 !== Ta.canParse.length;
    });
  nn(
    { target: "URL", stat: !0, forced: !Ba || qa },
    {
      canParse: function (e) {
        var t = pr(arguments.length, 1),
          n = sr(e),
          r = t < 2 || void 0 === arguments[1] ? void 0 : sr(arguments[1]);
        try {
          return !!new Ta(n, r);
        } catch (e) {
          return !1;
        }
      },
    },
  );
  var Fa = le("URL");
  nn(
    { target: "URL", stat: !0, forced: !$n },
    {
      parse: function (e) {
        var t = pr(arguments.length, 1),
          n = sr(e),
          r = t < 2 || void 0 === arguments[1] ? void 0 : sr(arguments[1]);
        try {
          return new Fa(n, r);
        } catch (e) {
          return null;
        }
      },
    },
  ),
    nn(
      { target: "URL", proto: !0, enumerable: !0 },
      {
        toJSON: function () {
          return fe(URL.prototype.toString, this);
        },
      },
    ),
    Pi.URL;
  var Ha = window.location,
    Ma = window.rapidInstance,
    za = window.rapidPageConfig,
    Na = window.YAHOO,
    Da = window.wafer,
    Ga = Na.context,
    Wa = Ga.meta,
    Ya = void 0 === Wa ? {} : Wa,
    $a = Ga.site,
    Ja = void 0 === $a ? "" : $a,
    Va = Ya.siteAttribute,
    Qa = void 0 === Va ? "" : Va,
    Xa = Ya.url,
    Ka = void 0 === Xa ? "" : Xa;
  Da.utils.getUrlParameterValueByName;
  var Za = (za || {}).rapidConfig,
    es = (Za && Za.keys) || {},
    ts = Na.i13n && Na.i13n.SPACEID,
    ns = { referrer: "", spaceid: ts, url: Ka },
    rs = 0,
    is = { enabled: !1 };
  function os() {
    var e = Ha.protocol + "//" + Ha.host;
    return Ha.pathname && (e += Ha.pathname), e;
  }
  function as(e) {
    var t = e.spaceid,
      n = e.url;
    if (!t || !n)
      return console.error("[comscore] spaceid or url is missing"), null;
    n !== ns.url && ((ns.referrer = ns.url), (ns.url = n), (ns.spaceid = t));
    var r = Na.comscore,
      i = r.c14,
      o = void 0 === i ? -1 : i,
      a = r.enableTracking;
    if (!(void 0 === a || a)) return null;
    var s = {
      c1: "2",
      c14: o,
      c2: "7241469",
      c5: t,
      c7: "".concat(n),
      c9: ns.referrer,
    };
    (window._comscore = window._comscore || []),
      window._comscore.push(s),
      window.COMSCORE && window.COMSCORE.purge();
  }
  function ss(e) {
    var t = e.href,
      n = t && 0 === t.indexOf("#"),
      r = (t && window.open("", e.target || "_blank")) || (t && window);
    !e.isRapidAutoTracked &&
      Ma &&
      Ma.beaconClick(
        e.sec,
        e.slk,
        e.pos || 0,
        e.params || {},
        e.outcm || null,
        function () {
          !n && r && (r.location.href = t);
        },
      ),
      n ? (is.enabled = !0) : r && (r.location.href = t);
  }
  function us(e, t, n, r, i) {
    if (
      (void 0 === n && (n = ""),
      void 0 === r && (r = ""),
      void 0 === i && (i = !1),
      Ma)
    ) {
      var o = t && t.id,
        a = e || {},
        s = a.categoryLabel,
        u = a.hasYahooVideo,
        c = a.hostedType,
        f = a.isCreatorContent,
        l = a.presentation,
        h = a.publisher,
        p = a.spaceId,
        d = a.type,
        v = a.uuid,
        g = a.videoPosition,
        m = a.sectionContentCategoryPath,
        y = a.publishDate,
        w = a.modifiedDate,
        b = (function (e) {
          var t = {},
            n = function (n) {
              if (e.hasOwnProperty(n)) {
                var r = e[n];
                Array.isArray(r)
                  ? ((t[n] = []),
                    r.forEach(function (e) {
                      t[n].push(e);
                    }))
                  : "function" == typeof r ||
                    (Object(r) === r
                      ? (t[n] = Object.assign({}, r))
                      : (t[n] = r));
              }
            };
          for (var r in e) n(r);
          return t;
        })(za.rapidConfig);
      b.spaceid = parseInt(p, 10);
      var S =
        t &&
        (function (e) {
          if (!e) return 0;
          var t = document.querySelectorAll(
            "div.wafer-caas,div.wafer-caas-complete",
          );
          return (
            Array.from(t).findIndex(function (t) {
              return t === e;
            }) + 1
          );
        })(t);
      if (1 !== S || 0 !== rs) {
        var P = {
          expn: "perpetual-post",
          navtype: "client",
          p_cpos: S,
          p_hosted: c,
          pcp: h,
          pct: d,
          pd: "prestige" === l ? "prestige-non_modal" : "non_modal",
          pstaid: v,
          pstaid_p: v,
          pstcat: (s || "").toLowerCase(),
          pt: "content",
          theme: f ? "y4c" : "",
          vidPos: u && g ? g : "",
        };
        ((w && "string" == typeof w) || (y && "string" == typeof y)) &&
          (P.displayts = (function (e) {
            if (!e || "string" != typeof e) return null;
            var t = new Date(e);
            return Math.floor(t.getTime());
          })(w || y)),
          n &&
            ((P._R = n),
            (P._w = window.location.origin + window.location.pathname)),
          m && (P.contentcategorypath = m),
          Object.assign(b.keys, P),
          Ma.beaconClick("rapidDwell", "", 0, {}, "", null, { dwell: "stop" }),
          (null == Na ? void 0 : Na.i13n) && (Na.i13n.SPACEID = b.spaceid),
          Ma.reInit(b),
          Ma.isModuleTracked(o)
            ? Ma.refreshModule(o, !0, !0)
            : Ma.addModules(o, !0, !0),
          as({ spaceid: p, url: os() }),
          i &&
            (function (e) {
              var t = window.pSUPERFLY,
                n = e,
                r = n.publisher,
                i = n.sectionName,
                o = n.isOriginalContent,
                a = ((n.authors || {})[0] || {}).name || r || "",
                s = n.adMeta.site,
                u = "3p";
              o && (u = "1p"),
                i && (s = "".concat(i, "_").concat(u)),
                t &&
                  t.virtualPage({
                    authors: a,
                    path: n.url,
                    sections: s,
                    title: n.title,
                    type: n.contentType,
                  });
            })(e),
          "engadget" === Ja &&
            r &&
            (function (e) {
              var t,
                n = window.marfeel;
              (null === (t = null == n ? void 0 : n.cmd) || void 0 === t
                ? void 0
                : t.push) &&
                n.cmd.push([
                  "compass",
                  function (t) {
                    t.trackNewPage({ rs: "infinite scroll", url: e });
                  },
                ]);
            })(r),
          (rs = S + 1);
      }
    }
  }
  var cs = function (t) {
      var n = window.DARLA;
      Ma &&
        (Ma.beaconPageview(e(e({}, es), { pct: "slideshow", pt: "content" })),
        as(ns)),
        n &&
          (n.add("slideshowadfetch", {
            name: "slideshowadfetch",
            npv: !0,
            ps: "LREC",
            sa: Qa,
            sp: ts,
            ssl: !0,
          }),
          n.inProgress() || n.event("slideshowadfetch"));
    },
    fs = function (t) {
      var n = t.id,
        r = t.provider,
        i = t.title;
      if (n && i && r) {
        var o = { pstaid: n, pstaid_p: n };
        r && (o.pcp = r.name),
          Ma && (Ma.beaconPageview(e(e({}, es), o)), as(ns)),
          (function (e) {
            e &&
              ((document.title = e),
              history.pushState({ state: history.state }, e));
          })(i);
      }
    },
    ls = function (e) {
      e && Ma && Ma.addModuleProgression(e);
    },
    hs = function (e) {
      if (e) {
        var t = e.action,
          n = e.index,
          r = e.title;
        "playlistItemClick" === t &&
          Ma &&
          Ma.beaconClick("video", r, n, {}, null);
      }
    },
    ps = function (t) {
      if (
        (void 0 === t && (t = {}),
        window.benji && "function" == typeof window.benji.updateI13N)
      ) {
        var n = es.lpstaid,
          r = void 0 === n ? "" : n,
          i = es.pct,
          o = void 0 === i ? "" : i,
          a = es.pgname,
          s = void 0 === a ? "" : a,
          u = es.pstaid,
          c = void 0 === u ? "" : u,
          f = es.pt,
          l = void 0 === f ? "" : f,
          h = es.ver,
          p = void 0 === h ? "" : h;
        window.benji.updateI13N(
          e(e({ lpstaid: r || c }, t), { pct: o, pgname: s, pt: l, ver: p }),
        );
      }
    },
    ds = function (e) {
      void 0 === e && (e = "");
      var t = {};
      return (
        (e.split(";") || []).forEach(function (e) {
          var n = e.split(":"),
            r = n[0],
            i = n[1];
          r && i && (t[r] = i);
        }),
        t
      );
    },
    vs = 'a[href^="https://shopping.yahoo.com/rdlw?"]',
    gs = function (e) {
      var t = e.querySelectorAll(vs);
      [].forEach.call(t, function (e) {
        try {
          var t = e.getAttribute("data-am-clean-href");
          if (t && "shopping.yahoo.com" !== new URL(t).hostname) return;
          var n = (function (e) {
            try {
              var t = e.href,
                n = new URLSearchParams(t.split("?")[1])
                  .get("custData")
                  .replace(/\s/g, "")
                  .replace(/-/g, "+")
                  .replace(/_/g, "/"),
                r = atob(n),
                i = JSON.parse(r);
              return i.originalUrl || i.landingUrl;
            } catch (e) {
              return console.error(e), "";
            }
          })(e);
          n && e.setAttribute("data-am-clean-href", n);
        } catch (e) {
          console.error(e);
        }
      });
    },
    ms = function () {
      (window.pre_affilimate_complete = !0),
        window.dispatchEvent(new Event("PreAffilimateComplete"));
    },
    ys = "YYPO_GaX9WJi",
    ws = function (e, t) {
      window.affilimate &&
        window.affilimate.getInstance(ys).then(function (n) {
          n.trackArea({ el: e, url: t });
        });
    };
  !(function (t) {
    var n,
      r,
      i = t.adsConfig,
      o = t.CAAS,
      a = t.rapidPageConfig,
      s = t.wafer,
      u = t.YAHOO,
      c = u.context,
      f = c.feature,
      l = void 0 === f ? "" : f,
      h = {},
      p = "",
      d = !1,
      v =
        -1 !== l.indexOf("cluster") ||
        -1 !== l.indexOf("finRedesignMorpheus") ||
        -1 !== l.indexOf("serverSideWfCaas");
    if (v) {
      var g = function () {
        !(function () {
          var e = document.querySelector(
            '[data-wf-caas-type="renderedArticle"]',
          );
          if (!e) return;
          var t = e.getElementsByClassName("wafer-caas-data")[0],
            n = t && s.utils.getConfigFromJSONScriptNode(t);
          (null == n ? void 0 : n.isAffilimateTest) &&
            e.querySelector(vs) &&
            (gs(e), ms());
        })(),
          s.on("caas:article:init", b),
          s.on("caas:article:inview", S),
          s.on("caas:article:fetch", P),
          s.on("caas:link:clicked", O),
          s.on("caas:yahooLink:clicked", O);
      };
      t.wafer
        ? t.wafer.ready(function () {
            g();
          }, t)
        : document.body.addEventListener("wafer:ready", function () {
            g();
          });
    } else {
      var m = a.rapidConfig,
        y = (m && m.keys) || {},
        w = u.i13n && u.i13n.SPACEID;
      (t.CAAS_ARTICLE2 =
        ((r = { caasInstance: void 0 }),
        void 0 !== o &&
          ((r.caasInstance = new o.BASE({
            container: "caas-content-body",
            i13nEntities: y,
            spaceid: w,
            videoPblob: i.videoPublisherBlob || "",
          })),
          r.caasInstance.on("link:clicked", ss),
          r.caasInstance.on("yvideo:mediacurrent", fs),
          r.caasInstance.on("yvideo:interacted", hs),
          r.caasInstance.on("slideshow:slideChange", cs)),
        r)),
        k(),
        t.document.addEventListener(
          "DOMContentLoaded",
          function () {
            ls("content-wrapper");
          },
          { once: !0 },
        );
    }
    function b(e) {
      var t = e.meta.instance;
      t.on("yvideo:mediacurrent", fs),
        t.on("yvideo:interacted", hs),
        t.on("slideshow:slideChange", cs);
    }
    function S(r) {
      var i,
        o = r.elem,
        a = r.meta.data,
        s = a.adMeta,
        u = s.hashtag,
        c = s.rs,
        f = s.site_attribute,
        d = s.spaceid,
        g = a.hostedType,
        m = a.isSeamlessBypass,
        y = void 0 !== m && m,
        w = a.presentation,
        b = a.previewLink,
        S = a.seamlessUrl,
        P = void 0 === S ? "" : S,
        O = a.title,
        R = void 0 === O ? "" : O,
        L = a.pageTitle,
        A = void 0 === L ? "" : L,
        U = a.url,
        C = void 0 === U ? "" : U,
        j = a.uuid,
        E = void 0 === j ? "" : j,
        I = ("offnet" === g && b) || P || C,
        _ = t.location.origin + t.location.pathname;
      !(function (e, n, r, i) {
        void 0 === i && (i = !0);
        if (e && ((document.title = e), n && !r)) {
          var o = t.YAHOO.context || {},
            a = o.lang,
            s = o.site,
            u = o.contentSite,
            c = new URL(n);
          if (
            ("news" === s &&
              "news" === u &&
              "en-US" === a &&
              0 === location.pathname.indexOf("/news/") &&
              0 !== c.pathname.indexOf("/news/") &&
              (c.pathname = "/news" + c.pathname),
            (null == c ? void 0 : c.pathname) !== location.pathname)
          ) {
            var f = "";
            i && (f = location.search);
            var l = new URL("".concat(c.pathname).concat(f), location.origin);
            history.replaceState({ state: history.state }, e, l.href);
          }
        }
      })(A || R, I, y, !0),
        (p = _),
        (function (e) {
          var n = e.title,
            r = e.link,
            i = e.uuid,
            o = e.site_attribute,
            a = e.spaceid;
          v &&
            (t.wafer.state = {
              currentArticleSiteAttribute: encodeURIComponent(o),
              currentArticleSpaceId: a,
              currentArticleTitle: n,
              currentArticleUrl: r,
              spotIm: { link: r, uuid: i },
            });
        })({ link: I, site_attribute: f, spaceid: d, title: R, uuid: E }),
        k(),
        n && ((i = n) && Ma && Ma.endModuleProgression(i), (n = ""));
      var x = -1 !== l.indexOf("enableChartbeat");
      us(a, o, p, P, x);
      var T = o.id;
      h[T] || ((n = T), ls(T), (h[T] = !0)),
        ps(
          e(e({}, ds(c)), {
            hashtag: u,
            pd: "prestige" === w ? "prestige-non_modal" : "non_modal",
            spaceid: d,
            url: C,
          }),
        );
    }
    function P(n) {
      var r = n.meta.data,
        i = n.elem,
        o = r.adMeta,
        a = o.hashtag,
        s = o.rs,
        u = o.spaceid,
        c = r.commentsCount,
        f = void 0 === c ? "0" : c,
        l = r.isAffilimateTest,
        h = r.pageTitle,
        p = r.presentation,
        d = r.title,
        g = r.url;
      !(function (e) {
        var n,
          r = e.commentsCount,
          i = e.title,
          o = e.url,
          a = e.uuid;
        v &&
          (t.wafer.state = {
            spotIm:
              ((n = {}),
              (n["".concat(a, "_commentsCount")] = r.toString()),
              (n["".concat(a, "_title")] = i.toString()),
              (n["".concat(a, "_url")] = o.toString()),
              n),
          });
      })({ commentsCount: f, title: h || d, url: g, uuid: r.uuid }),
        ps(
          e(e({}, ds(s)), {
            hashtag: a,
            pd: "prestige" === p ? "prestige-non_modal" : "non_modal",
            spaceid: u,
            url: g,
          }),
        ),
        l &&
          i.querySelector(vs) &&
          (t.affilimate
            ? (gs(i), ws(i, g))
            : (!(function () {
                var e = document.createElement("meta");
                (e.name = "am-api-token"), (e.content = ys);
                var t = document.createElement("meta");
                (t.name = "am:".concat(ys, ":autoRun")),
                  (t.content = "false"),
                  document.head.appendChild(e),
                  document.head.appendChild(t);
                var n = document.createElement("script");
                (n.src = "https://snippet.affilimatejs.com"),
                  (n.async = !0),
                  document.body.appendChild(n);
              })(),
              gs(i),
              ms()));
    }
    function O(e) {
      ss(e.meta.data || {});
    }
    function k() {
      var e = -1 !== l.indexOf("liveBlogLinkToPost"),
        n = new URLSearchParams(t.location.search),
        r = (null == n ? void 0 : n.get("_ptId")) || "";
      if (e && r && !d) {
        var i = document.getElementById(r);
        i &&
          (null == i ||
            i.scrollIntoView({ behavior: "smooth", block: "center" }),
          (d = !0));
      }
    }
    t.addEventListener("hashchange", function (e) {
      is.enabled = !0;
    }),
      t.addEventListener("popstate", function (e) {
        setTimeout(function () {
          var t;
          if (is.enabled) is.enabled = !1;
          else {
            var n =
              (null === (t = e.state) || void 0 === t ? void 0 : t.origUrl) ||
              "";
            document.location.href = n;
          }
        }, 400);
      }),
      (function () {
        var e = document.getElementsByClassName("js-sponsored-moments")[0];
        if (!e) return;
        var n = e.getElementsByClassName("js-panorama-scroll-view")[0];
        n &&
          (n.scrollLeft =
            (n.scrollWidth -
              (t.innerWidth || document.documentElement.clientWidth)) /
            2);
      })(),
      "smartphone" === c.device &&
        (function () {
          var e = document.getElementById("sda-INARTICLE");
          if (e) {
            var t = e.parentElement;
            if (!t) return;
            var n = null,
              r = t.parentElement;
            t.classList.contains("caas-da")
              ? (n = t)
              : r && r.classList.contains("caas-da") && (n = r),
              n &&
                Object.assign(n.style, {
                  marginLeft: "-20px",
                  marginRight: "-20px",
                });
          }
        })();
  })(window);
})();
//# sourceMappingURL=caas.js.map
