import {
  b as Er,
  c as pt,
  d as oe,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-LNKWYQRG.js";
var Jn = pt((F) => {
  "use strict";
  var mt = Symbol.for("react.element"),
    Io = Symbol.for("react.portal"),
    Bo = Symbol.for("react.fragment"),
    $o = Symbol.for("react.strict_mode"),
    Ho = Symbol.for("react.profiler"),
    zo = Symbol.for("react.provider"),
    Vo = Symbol.for("react.context"),
    Wo = Symbol.for("react.forward_ref"),
    Ko = Symbol.for("react.suspense"),
    Jo = Symbol.for("react.memo"),
    Un = Symbol.for("react.lazy"),
    An = Symbol.iterator;
  function Xo(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (An && e[An]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var kn = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    In = Object.assign,
    Bn = {};
  function Ge(e, t, r) {
    (this.props = e),
      (this.context = t),
      (this.refs = Bn),
      (this.updater = r || kn);
  }
  Ge.prototype.isReactComponent = {};
  Ge.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables.",
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  Ge.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function $n() {}
  $n.prototype = Ge.prototype;
  function xr(e, t, r) {
    (this.props = e),
      (this.context = t),
      (this.refs = Bn),
      (this.updater = r || kn);
  }
  var Sr = (xr.prototype = new $n());
  Sr.constructor = xr;
  In(Sr, Ge.prototype);
  Sr.isPureReactComponent = !0;
  var jn = Array.isArray,
    te = { current: null },
    Hn = { current: null },
    ht = { transition: null },
    zn = {
      ReactCurrentDispatcher: te,
      ReactCurrentCache: Hn,
      ReactCurrentBatchConfig: ht,
      ReactCurrentOwner: { current: null },
    },
    Vn = Object.prototype.hasOwnProperty,
    Wn = zn.ReactCurrentOwner;
  function Kn(e, t, r) {
    var n,
      a = {},
      i = null,
      o = null;
    if (t != null)
      for (n in (t.ref !== void 0 && (o = t.ref),
      t.key !== void 0 && (i = "" + t.key),
      t))
        Vn.call(t, n) &&
          n !== "key" &&
          n !== "ref" &&
          n !== "__self" &&
          n !== "__source" &&
          (a[n] = t[n]);
    var s = arguments.length - 2;
    if (s === 1) a.children = r;
    else if (1 < s) {
      for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2];
      a.children = l;
    }
    if (e && e.defaultProps)
      for (n in ((s = e.defaultProps), s)) a[n] === void 0 && (a[n] = s[n]);
    return {
      $$typeof: mt,
      type: e,
      key: i,
      ref: o,
      props: a,
      _owner: Wn.current,
    };
  }
  function Yo(e, t) {
    return {
      $$typeof: mt,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function _r(e) {
    return typeof e == "object" && e !== null && e.$$typeof === mt;
  }
  function Go(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (r) {
        return t[r];
      })
    );
  }
  var Mn = /\/+/g;
  function wr(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? Go("" + e.key)
      : t.toString(36);
  }
  function Fn() {}
  function qo(e) {
    switch (e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw e.reason;
      default:
        switch (
          (typeof e.status == "string"
            ? e.then(Fn, Fn)
            : ((e.status = "pending"),
              e.then(
                function (t) {
                  e.status === "pending" &&
                    ((e.status = "fulfilled"), (e.value = t));
                },
                function (t) {
                  e.status === "pending" &&
                    ((e.status = "rejected"), (e.reason = t));
                },
              )),
          e.status)
        ) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
        }
    }
    throw e;
  }
  function Ye(e, t, r, n, a) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else
      switch (i) {
        case "string":
        case "number":
          o = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case mt:
            case Io:
              o = !0;
              break;
            case Un:
              return (o = e._init), Ye(o(e._payload), t, r, n, a);
          }
      }
    if (o)
      return (
        (a = a(e)),
        (o = n === "" ? "." + wr(e, 0) : n),
        jn(a)
          ? ((r = ""),
            o != null && (r = o.replace(Mn, "$&/") + "/"),
            Ye(a, t, r, "", function (u) {
              return u;
            }))
          : a != null &&
            (_r(a) &&
              (a = Yo(
                a,
                r +
                  (!a.key || (e && e.key === a.key)
                    ? ""
                    : ("" + a.key).replace(Mn, "$&/") + "/") +
                  o,
              )),
            t.push(a)),
        1
      );
    o = 0;
    var s = n === "" ? "." : n + ":";
    if (jn(e))
      for (var l = 0; l < e.length; l++)
        (n = e[l]), (i = s + wr(n, l)), (o += Ye(n, t, r, i, a));
    else if (((l = Xo(e)), typeof l == "function"))
      for (e = l.call(e), l = 0; !(n = e.next()).done; )
        (n = n.value), (i = s + wr(n, l++)), (o += Ye(n, t, r, i, a));
    else if (i === "object") {
      if (typeof e.then == "function") return Ye(qo(e), t, r, n, a);
      throw (
        ((t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead.",
        ))
      );
    }
    return o;
  }
  function kt(e, t, r) {
    if (e == null) return e;
    var n = [],
      a = 0;
    return (
      Ye(e, n, "", "", function (i) {
        return t.call(r, i, a++);
      }),
      n
    );
  }
  function Qo(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (r) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = r));
          },
          function (r) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = r));
          },
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  function Zo() {
    return new WeakMap();
  }
  function br() {
    return { s: 0, v: void 0, o: null, p: null };
  }
  function ei() {}
  var Tn =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  F.Children = {
    map: kt,
    forEach: function (e, t, r) {
      kt(
        e,
        function () {
          t.apply(this, arguments);
        },
        r,
      );
    },
    count: function (e) {
      var t = 0;
      return (
        kt(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        kt(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!_r(e))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return e;
    },
  };
  F.Component = Ge;
  F.Fragment = Bo;
  F.Profiler = Ho;
  F.PureComponent = xr;
  F.StrictMode = $o;
  F.Suspense = Ko;
  F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zn;
  F.act = function () {
    throw Error("act(...) is not supported in production builds of React.");
  };
  F.cache = function (e) {
    return function () {
      var t = Hn.current;
      if (!t) return e.apply(null, arguments);
      var r = t.getCacheForType(Zo);
      (t = r.get(e)), t === void 0 && ((t = br()), r.set(e, t)), (r = 0);
      for (var n = arguments.length; r < n; r++) {
        var a = arguments[r];
        if (typeof a == "function" || (typeof a == "object" && a !== null)) {
          var i = t.o;
          i === null && (t.o = i = new WeakMap()),
            (t = i.get(a)),
            t === void 0 && ((t = br()), i.set(a, t));
        } else
          (i = t.p),
            i === null && (t.p = i = new Map()),
            (t = i.get(a)),
            t === void 0 && ((t = br()), i.set(a, t));
      }
      if (t.s === 1) return t.v;
      if (t.s === 2) throw t.v;
      try {
        var o = e.apply(null, arguments);
        return (r = t), (r.s = 1), (r.v = o);
      } catch (s) {
        throw ((o = t), (o.s = 2), (o.v = s), s);
      }
    };
  };
  F.cloneElement = function (e, t, r) {
    if (e == null)
      throw Error(
        "The argument must be a React element, but you passed " + e + ".",
      );
    var n = In({}, e.props),
      a = e.key,
      i = e.ref,
      o = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((i = t.ref), (o = Wn.current)),
        t.key !== void 0 && (a = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var s = e.type.defaultProps;
      for (l in t)
        Vn.call(t, l) &&
          l !== "key" &&
          l !== "ref" &&
          l !== "__self" &&
          l !== "__source" &&
          (n[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) n.children = r;
    else if (1 < l) {
      s = Array(l);
      for (var u = 0; u < l; u++) s[u] = arguments[u + 2];
      n.children = s;
    }
    return { $$typeof: mt, type: e.type, key: a, ref: i, props: n, _owner: o };
  };
  F.createContext = function (e) {
    return (
      (e = {
        $$typeof: Vo,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
      }),
      (e.Provider = { $$typeof: zo, _context: e }),
      (e.Consumer = e)
    );
  };
  F.createElement = Kn;
  F.createFactory = function (e) {
    var t = Kn.bind(null, e);
    return (t.type = e), t;
  };
  F.createRef = function () {
    return { current: null };
  };
  F.forwardRef = function (e) {
    return { $$typeof: Wo, render: e };
  };
  F.isValidElement = _r;
  F.lazy = function (e) {
    return { $$typeof: Un, _payload: { _status: -1, _result: e }, _init: Qo };
  };
  F.memo = function (e, t) {
    return { $$typeof: Jo, type: e, compare: t === void 0 ? null : t };
  };
  F.startTransition = function (e) {
    var t = ht.transition,
      r = new Set();
    ht.transition = { _callbacks: r };
    var n = ht.transition;
    try {
      var a = e();
      typeof a == "object" &&
        a !== null &&
        typeof a.then == "function" &&
        (r.forEach(function (i) {
          return i(n, a);
        }),
        a.then(ei, Tn));
    } catch (i) {
      Tn(i);
    } finally {
      ht.transition = t;
    }
  };
  F.unstable_useCacheRefresh = function () {
    return te.current.useCacheRefresh();
  };
  F.use = function (e) {
    return te.current.use(e);
  };
  F.useCallback = function (e, t) {
    return te.current.useCallback(e, t);
  };
  F.useContext = function (e) {
    return te.current.useContext(e);
  };
  F.useDebugValue = function () {};
  F.useDeferredValue = function (e, t) {
    return te.current.useDeferredValue(e, t);
  };
  F.useEffect = function (e, t) {
    return te.current.useEffect(e, t);
  };
  F.useId = function () {
    return te.current.useId();
  };
  F.useImperativeHandle = function (e, t, r) {
    return te.current.useImperativeHandle(e, t, r);
  };
  F.useInsertionEffect = function (e, t) {
    return te.current.useInsertionEffect(e, t);
  };
  F.useLayoutEffect = function (e, t) {
    return te.current.useLayoutEffect(e, t);
  };
  F.useMemo = function (e, t) {
    return te.current.useMemo(e, t);
  };
  F.useOptimistic = function (e, t) {
    return te.current.useOptimistic(e, t);
  };
  F.useReducer = function (e, t, r) {
    return te.current.useReducer(e, t, r);
  };
  F.useRef = function (e) {
    return te.current.useRef(e);
  };
  F.useState = function (e) {
    return te.current.useState(e);
  };
  F.useSyncExternalStore = function (e, t, r) {
    return te.current.useSyncExternalStore(e, t, r);
  };
  F.useTransition = function () {
    return te.current.useTransition();
  };
  F.version = "18.3.0-canary-3bcd2de01-20240227";
});
var re = pt((Ml, Xn) => {
  "use strict";
  Xn.exports = Jn();
});
function z() {
  return (
    (z = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    z.apply(this, arguments)
  );
}
function ua(e) {
  e === void 0 && (e = {});
  function t(n, a) {
    let { pathname: i, search: o, hash: s } = n.location;
    return Et(
      "",
      { pathname: i, search: o, hash: s },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || "default",
    );
  }
  function r(n, a) {
    return typeof a == "string" ? a : fe(a);
  }
  return ri(t, r, null, e);
}
function L(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function tt(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function ti() {
  return Math.random().toString(36).substr(2, 8);
}
function Gn(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Et(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    z(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? ie(t) : t,
      { state: r, key: (t && t.key) || n || ti() },
    )
  );
}
function fe(e) {
  let { pathname: t = "/", search: r = "", hash: n = "" } = e;
  return (
    r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
    t
  );
}
function ie(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
    let n = e.indexOf("?");
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
      e && (t.pathname = e);
  }
  return t;
}
function ri(e, t, r, n) {
  n === void 0 && (n = {});
  let { window: a = document.defaultView, v5Compat: i = !1 } = n,
    o = a.history,
    s = J.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), o.replaceState(z({}, o.state, { idx: u }), ""));
  function c() {
    return (o.state || { idx: null }).idx;
  }
  function p() {
    s = J.Pop;
    let b = c(),
      S = b == null ? null : b - u;
    (u = b), l && l({ action: s, location: w.location, delta: S });
  }
  function m(b, S) {
    s = J.Push;
    let M = Et(w.location, b, S);
    r && r(M, b), (u = c() + 1);
    let N = Gn(M, u),
      f = w.createHref(M);
    try {
      o.pushState(N, "", f);
    } catch (O) {
      if (O instanceof DOMException && O.name === "DataCloneError") throw O;
      a.location.assign(f);
    }
    i && l && l({ action: s, location: w.location, delta: 1 });
  }
  function E(b, S) {
    s = J.Replace;
    let M = Et(w.location, b, S);
    r && r(M, b), (u = c());
    let N = Gn(M, u),
      f = w.createHref(M);
    o.replaceState(N, "", f),
      i && l && l({ action: s, location: w.location, delta: 0 });
  }
  function v(b) {
    let S = a.location.origin !== "null" ? a.location.origin : a.location.href,
      M = typeof b == "string" ? b : fe(b);
    return (
      L(
        S,
        "No window.location.(origin|href) available to create URL for href: " +
          M,
      ),
      new URL(M, S)
    );
  }
  let w = {
    get action() {
      return s;
    },
    get location() {
      return e(a, o);
    },
    listen(b) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        a.addEventListener(Yn, p),
        (l = b),
        () => {
          a.removeEventListener(Yn, p), (l = null);
        }
      );
    },
    createHref(b) {
      return t(a, b);
    },
    createURL: v,
    encodeLocation(b) {
      let S = v(b);
      return { pathname: S.pathname, search: S.search, hash: S.hash };
    },
    push: m,
    replace: E,
    go(b) {
      return o.go(b);
    },
  };
  return w;
}
function ai(e) {
  return e.index === !0;
}
function Dr(e, t, r, n) {
  return (
    r === void 0 && (r = []),
    n === void 0 && (n = {}),
    e.map((a, i) => {
      let o = [...r, i],
        s = typeof a.id == "string" ? a.id : o.join("-");
      if (
        (L(
          a.index !== !0 || !a.children,
          "Cannot specify children on an index route",
        ),
        L(
          !n[s],
          'Found a route id collision on id "' +
            s +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        ai(a))
      ) {
        let l = z({}, a, t(a), { id: s });
        return (n[s] = l), l;
      } else {
        let l = z({}, a, t(a), { id: s, children: void 0 });
        return (
          (n[s] = l), a.children && (l.children = Dr(a.children, t, o, n)), l
        );
      }
    })
  );
}
function se(e, t, r) {
  r === void 0 && (r = "/");
  let n = typeof t == "string" ? ie(t) : t,
    a = ye(n.pathname || "/", r);
  if (a == null) return null;
  let i = ca(e);
  oi(i);
  let o = null;
  for (let s = 0; o == null && s < i.length; ++s) o = hi(i[s], yi(a));
  return o;
}
function ca(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let a = (i, o, s) => {
    let l = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: o,
      route: i,
    };
    l.relativePath.startsWith("/") &&
      (L(
        l.relativePath.startsWith(n),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(n.length)));
    let u = ce([n, l.relativePath]),
      c = r.concat(l);
    i.children &&
      i.children.length > 0 &&
      (L(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      ca(i.children, t, c, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: di(u, i.index), routesMeta: c });
  };
  return (
    e.forEach((i, o) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) a(i, o);
      else for (let l of fa(i.path)) a(i, o, l);
    }),
    t
  );
}
function fa(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t,
    a = r.endsWith("?"),
    i = r.replace(/\?$/, "");
  if (n.length === 0) return a ? [i, ""] : [i];
  let o = fa(n.join("/")),
    s = [];
  return (
    s.push(...o.map((l) => (l === "" ? i : [i, l].join("/")))),
    a && s.push(...o),
    s.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function oi(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : pi(
          t.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex),
        ),
  );
}
function di(e, t) {
  let r = e.split("/"),
    n = r.length;
  return (
    r.some(qn) && (n += fi),
    t && (n += li),
    r
      .filter((a) => !qn(a))
      .reduce((a, i) => a + (ii.test(i) ? si : i === "" ? ui : ci), n)
  );
}
function pi(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function hi(e, t) {
  let { routesMeta: r } = e,
    n = {},
    a = "/",
    i = [];
  for (let o = 0; o < r.length; ++o) {
    let s = r[o],
      l = o === r.length - 1,
      u = a === "/" ? t : t.slice(a.length) || "/",
      c = wt(
        { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
        u,
      );
    if (!c) return null;
    Object.assign(n, c.params);
    let p = s.route;
    i.push({
      params: n,
      pathname: ce([a, c.pathname]),
      pathnameBase: Ri(ce([a, c.pathnameBase])),
      route: p,
    }),
      c.pathnameBase !== "/" && (a = ce([a, c.pathnameBase]));
  }
  return i;
}
function wt(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = mi(e.path, e.caseSensitive, e.end),
    a = t.match(r);
  if (!a) return null;
  let i = a[0],
    o = i.replace(/(.)\/+$/, "$1"),
    s = a.slice(1);
  return {
    params: n.reduce((u, c, p) => {
      if (c === "*") {
        let m = s[p] || "";
        o = i.slice(0, i.length - m.length).replace(/(.)\/+$/, "$1");
      }
      return (u[c] = gi(s[p] || "", c)), u;
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function mi(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    tt(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let n = [],
    a =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/\/:(\w+)/g, (o, s) => (n.push(s), "/([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (n.push("*"),
        (a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
        ? (a += "\\/*$")
        : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"),
    [new RegExp(a, t ? void 0 : "i"), n]
  );
}
function yi(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      tt(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function gi(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (r) {
    return (
      tt(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + r + ")."),
      ),
      e
    );
  }
}
function ye(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length,
    n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
function $t(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: a = "",
  } = typeof e == "string" ? ie(e) : e;
  return {
    pathname: r ? (r.startsWith("/") ? r : vi(r, t)) : t,
    search: Ei(n),
    hash: wi(a),
  };
}
function vi(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((a) => {
      a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function Nr(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(n) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function bt(e) {
  return e.filter(
    (t, r) => r === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Ht(e, t, r, n) {
  n === void 0 && (n = !1);
  let a;
  typeof e == "string"
    ? (a = ie(e))
    : ((a = z({}, e)),
      L(
        !a.pathname || !a.pathname.includes("?"),
        Nr("?", "pathname", "search", a),
      ),
      L(
        !a.pathname || !a.pathname.includes("#"),
        Nr("#", "pathname", "hash", a),
      ),
      L(!a.search || !a.search.includes("#"), Nr("#", "search", "hash", a)));
  let i = e === "" || a.pathname === "",
    o = i ? "/" : a.pathname,
    s;
  if (n || o == null) s = r;
  else {
    let p = t.length - 1;
    if (o.startsWith("..")) {
      let m = o.split("/");
      for (; m[0] === ".."; ) m.shift(), (p -= 1);
      a.pathname = m.join("/");
    }
    s = p >= 0 ? t[p] : "/";
  }
  let l = $t(a, s),
    u = o && o !== "/" && o.endsWith("/"),
    c = (i || o === ".") && r.endsWith("/");
  return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
function bi(e) {
  return e instanceof Promise && e._tracked === !0;
}
function xi(e) {
  if (!bi(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
function we(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
function Ar(e) {
  let t = e.window ? e.window : typeof window < "u" ? window : void 0,
    r =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    n = !r;
  L(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let a;
  if (e.mapRouteProperties) a = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let d = e.detectErrorBoundary;
    a = (h) => ({ hasErrorBoundary: d(h) });
  } else a = Pi;
  let i = {},
    o = Dr(e.routes, a, void 0, i),
    s,
    l = e.basename || "/",
    u = z({ v7_normalizeFormMethod: !1, v7_prependBasename: !1 }, e.future),
    c = null,
    p = new Set(),
    m = null,
    E = null,
    v = null,
    w = e.hydrationData != null,
    b = se(o, e.history.location, l),
    S = null;
  if (b == null) {
    let d = ue(404, { pathname: e.history.location.pathname }),
      { matches: h, route: y } = oa(o);
    (b = h), (S = { [y.id]: d });
  }
  let M =
      !b.some((d) => d.route.lazy) &&
      (!b.some((d) => d.route.loader) || e.hydrationData != null),
    N,
    f = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: b,
      initialized: M,
      navigation: Or,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || S,
      fetchers: new Map(),
      blockers: new Map(),
    },
    O = J.Pop,
    U = !1,
    j,
    I = !1,
    V = !1,
    W = [],
    G = [],
    K = new Map(),
    Mt = 0,
    lt = -1,
    Je = new Map(),
    Ne = new Set(),
    Xe = new Map(),
    Ue = new Map(),
    ke = new Map(),
    fr = !1;
  function _o() {
    return (
      (c = e.history.listen((d) => {
        let { action: h, location: y, delta: x } = d;
        if (fr) {
          fr = !1;
          return;
        }
        tt(
          ke.size === 0 || x != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.",
        );
        let A = Dn({
          currentLocation: f.location,
          nextLocation: y,
          historyAction: h,
        });
        if (A && x != null) {
          (fr = !0),
            e.history.go(x * -1),
            Tt(A, {
              state: "blocked",
              location: y,
              proceed() {
                Tt(A, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: y,
                }),
                  e.history.go(x);
              },
              reset() {
                let C = new Map(f.blockers);
                C.set(A, qe), Z({ blockers: C });
              },
            });
          return;
        }
        return Pe(h, y);
      })),
      f.initialized || Pe(J.Pop, f.location),
      N
    );
  }
  function No() {
    c && c(),
      p.clear(),
      j && j.abort(),
      f.fetchers.forEach((d, h) => pr(h)),
      f.blockers.forEach((d, h) => On(h));
  }
  function Oo(d) {
    return p.add(d), () => p.delete(d);
  }
  function Z(d) {
    (f = z({}, f, d)), p.forEach((h) => h(f));
  }
  function ut(d, h) {
    var y, x;
    let A =
        f.actionData != null &&
        f.navigation.formMethod != null &&
        me(f.navigation.formMethod) &&
        f.navigation.state === "loading" &&
        ((y = d.state) == null ? void 0 : y._isRedirect) !== !0,
      C;
    h.actionData
      ? Object.keys(h.actionData).length > 0
        ? (C = h.actionData)
        : (C = null)
      : A
        ? (C = f.actionData)
        : (C = null);
    let P = h.loaderData
        ? aa(f.loaderData, h.loaderData, h.matches || [], h.errors)
        : f.loaderData,
      D = f.blockers;
    D.size > 0 && ((D = new Map(D)), D.forEach((H, ae) => D.set(ae, qe)));
    let _ =
      U === !0 ||
      (f.navigation.formMethod != null &&
        me(f.navigation.formMethod) &&
        ((x = d.state) == null ? void 0 : x._isRedirect) !== !0);
    s && ((o = s), (s = void 0)),
      I ||
        O === J.Pop ||
        (O === J.Push
          ? e.history.push(d, d.state)
          : O === J.Replace && e.history.replace(d, d.state)),
      Z(
        z({}, h, {
          actionData: C,
          loaderData: P,
          historyAction: O,
          location: d,
          initialized: !0,
          navigation: Or,
          revalidation: "idle",
          restoreScrollPosition: Pn(d, h.matches || f.matches),
          preventScrollReset: _,
          blockers: D,
        }),
      ),
      (O = J.Pop),
      (U = !1),
      (I = !1),
      (V = !1),
      (W = []),
      (G = []);
  }
  async function wn(d, h) {
    if (typeof d == "number") {
      e.history.go(d);
      return;
    }
    let y = Cr(
        f.location,
        f.matches,
        l,
        u.v7_prependBasename,
        d,
        h?.fromRouteId,
        h?.relative,
      ),
      {
        path: x,
        submission: A,
        error: C,
      } = Qn(u.v7_normalizeFormMethod, !1, y, h),
      P = f.location,
      D = Et(f.location, x, h && h.state);
    D = z({}, D, e.history.encodeLocation(D));
    let _ = h && h.replace != null ? h.replace : void 0,
      H = J.Push;
    _ === !0
      ? (H = J.Replace)
      : _ === !1 ||
        (A != null &&
          me(A.formMethod) &&
          A.formAction === f.location.pathname + f.location.search &&
          (H = J.Replace));
    let ae =
        h && "preventScrollReset" in h ? h.preventScrollReset === !0 : void 0,
      B = Dn({ currentLocation: P, nextLocation: D, historyAction: H });
    if (B) {
      Tt(B, {
        state: "blocked",
        location: D,
        proceed() {
          Tt(B, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: D,
          }),
            wn(d, h);
        },
        reset() {
          let Y = new Map(f.blockers);
          Y.set(B, qe), Z({ blockers: Y });
        },
      });
      return;
    }
    return await Pe(H, D, {
      submission: A,
      pendingError: C,
      preventScrollReset: ae,
      replace: h && h.replace,
    });
  }
  function Do() {
    if (
      (dr(),
      Z({ revalidation: "loading" }),
      f.navigation.state !== "submitting")
    ) {
      if (f.navigation.state === "idle") {
        Pe(f.historyAction, f.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Pe(O || f.historyAction, f.navigation.location, {
        overrideNavigation: f.navigation,
      });
    }
  }
  async function Pe(d, h, y) {
    j && j.abort(),
      (j = null),
      (O = d),
      (I = (y && y.startUninterruptedRevalidation) === !0),
      To(f.location, f.matches),
      (U = (y && y.preventScrollReset) === !0);
    let x = s || o,
      A = y && y.overrideNavigation,
      C = se(x, h, l);
    if (!C) {
      let Y = ue(404, { pathname: h.pathname }),
        { matches: ee, route: Ie } = oa(x);
      hr(), ut(h, { matches: ee, loaderData: {}, errors: { [Ie.id]: Y } });
      return;
    }
    if (
      f.initialized &&
      !V &&
      Fi(f.location, h) &&
      !(y && y.submission && me(y.submission.formMethod))
    ) {
      ut(h, { matches: C });
      return;
    }
    j = new AbortController();
    let P = gt(e.history, h, j.signal, y && y.submission),
      D,
      _;
    if (y && y.pendingError) _ = { [Ze(C).route.id]: y.pendingError };
    else if (y && y.submission && me(y.submission.formMethod)) {
      let Y = await Co(P, h, y.submission, C, { replace: y.replace });
      if (Y.shortCircuited) return;
      (D = Y.pendingActionData),
        (_ = Y.pendingActionError),
        (A = It(h, y.submission)),
        (P = new Request(P.url, { signal: P.signal }));
    }
    let {
      shortCircuited: H,
      loaderData: ae,
      errors: B,
    } = await Po(
      P,
      h,
      C,
      A,
      y && y.submission,
      y && y.fetcherSubmission,
      y && y.replace,
      D,
      _,
    );
    H ||
      ((j = null),
      ut(
        h,
        z({ matches: C }, D ? { actionData: D } : {}, {
          loaderData: ae,
          errors: B,
        }),
      ));
  }
  async function Co(d, h, y, x, A) {
    A === void 0 && (A = {}), dr();
    let C = Bi(h, y);
    Z({ navigation: C });
    let P,
      D = Lr(x, h);
    if (!D.route.action && !D.route.lazy)
      P = {
        type: Q.error,
        error: ue(405, {
          method: d.method,
          pathname: h.pathname,
          routeId: D.route.id,
        }),
      };
    else if (((P = await yt("action", d, D, x, i, a, l)), d.signal.aborted))
      return { shortCircuited: !0 };
    if (et(P)) {
      let _;
      return (
        A && A.replace != null
          ? (_ = A.replace)
          : (_ = P.location === f.location.pathname + f.location.search),
        await ct(f, P, { submission: y, replace: _ }),
        { shortCircuited: !0 }
      );
    }
    if (Rt(P)) {
      let _ = Ze(x, D.route.id);
      return (
        (A && A.replace) !== !0 && (O = J.Push),
        { pendingActionData: {}, pendingActionError: { [_.route.id]: P.error } }
      );
    }
    if ($e(P)) throw ue(400, { type: "defer-action" });
    return { pendingActionData: { [D.route.id]: P.data } };
  }
  async function Po(d, h, y, x, A, C, P, D, _) {
    let H = x || It(h, A),
      ae = A || C || la(H),
      B = s || o,
      [Y, ee] = Zn(e.history, f, y, ae, h, V, W, G, Xe, Ne, B, l, D, _);
    if (
      (hr(
        ($) =>
          !(y && y.some((he) => he.route.id === $)) ||
          (Y && Y.some((he) => he.route.id === $)),
      ),
      (lt = ++Mt),
      Y.length === 0 && ee.length === 0)
    ) {
      let $ = _n();
      return (
        ut(
          h,
          z(
            { matches: y, loaderData: {}, errors: _ || null },
            D ? { actionData: D } : {},
            $ ? { fetchers: new Map(f.fetchers) } : {},
          ),
        ),
        { shortCircuited: !0 }
      );
    }
    if (!I) {
      ee.forEach((he) => {
        let Ae = f.fetchers.get(he.key),
          Rr = vt(void 0, Ae ? Ae.data : void 0);
        f.fetchers.set(he.key, Rr);
      });
      let $ = D || f.actionData;
      Z(
        z(
          { navigation: H },
          $
            ? Object.keys($).length === 0
              ? { actionData: null }
              : { actionData: $ }
            : {},
          ee.length > 0 ? { fetchers: new Map(f.fetchers) } : {},
        ),
      );
    }
    ee.forEach(($) => {
      K.has($.key) && Le($.key), $.controller && K.set($.key, $.controller);
    });
    let Ie = () => ee.forEach(($) => Le($.key));
    j && j.signal.addEventListener("abort", Ie);
    let {
      results: Be,
      loaderResults: ft,
      fetcherResults: mr,
    } = await xn(f.matches, y, Y, ee, d);
    if (d.signal.aborted) return { shortCircuited: !0 };
    j && j.signal.removeEventListener("abort", Ie),
      ee.forEach(($) => K.delete($.key));
    let Oe = ia(Be);
    if (Oe) {
      if (Oe.idx >= Y.length) {
        let $ = ee[Oe.idx - Y.length].key;
        Ne.add($);
      }
      return await ct(f, Oe.result, { replace: P }), { shortCircuited: !0 };
    }
    let { loaderData: De, errors: Ut } = na(f, y, Y, ft, _, ee, mr, Ue);
    Ue.forEach(($, he) => {
      $.subscribe((Ae) => {
        (Ae || $.done) && Ue.delete(he);
      });
    });
    let yr = _n(),
      gr = Nn(lt),
      vr = yr || gr || ee.length > 0;
    return z(
      { loaderData: De, errors: Ut },
      vr ? { fetchers: new Map(f.fetchers) } : {},
    );
  }
  function bn(d) {
    return f.fetchers.get(d) || Ci;
  }
  function Lo(d, h, y, x) {
    if (n)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    K.has(d) && Le(d);
    let A = s || o,
      C = Cr(f.location, f.matches, l, u.v7_prependBasename, y, h, x?.relative),
      P = se(A, C, l);
    if (!P) {
      Ft(d, h, ue(404, { pathname: C }));
      return;
    }
    let {
      path: D,
      submission: _,
      error: H,
    } = Qn(u.v7_normalizeFormMethod, !0, C, x);
    if (H) {
      Ft(d, h, H);
      return;
    }
    let ae = Lr(P, D);
    if (((U = (x && x.preventScrollReset) === !0), _ && me(_.formMethod))) {
      Ao(d, h, D, ae, P, _);
      return;
    }
    Xe.set(d, { routeId: h, path: D }), jo(d, h, D, ae, P, _);
  }
  async function Ao(d, h, y, x, A, C) {
    if ((dr(), Xe.delete(d), !x.route.action && !x.route.lazy)) {
      let q = ue(405, { method: C.formMethod, pathname: y, routeId: h });
      Ft(d, h, q);
      return;
    }
    let P = f.fetchers.get(d),
      D = $i(C, P);
    f.fetchers.set(d, D), Z({ fetchers: new Map(f.fetchers) });
    let _ = new AbortController(),
      H = gt(e.history, y, _.signal, C);
    K.set(d, _);
    let ae = Mt,
      B = await yt("action", H, x, A, i, a, l);
    if (H.signal.aborted) {
      K.get(d) === _ && K.delete(d);
      return;
    }
    if (et(B))
      if ((K.delete(d), lt > ae)) {
        let q = Qe(void 0);
        f.fetchers.set(d, q), Z({ fetchers: new Map(f.fetchers) });
        return;
      } else {
        Ne.add(d);
        let q = vt(C);
        return (
          f.fetchers.set(d, q),
          Z({ fetchers: new Map(f.fetchers) }),
          ct(f, B, { submission: C, isFetchActionRedirect: !0 })
        );
      }
    if (Rt(B)) {
      Ft(d, h, B.error);
      return;
    }
    if ($e(B)) throw ue(400, { type: "defer-action" });
    let Y = f.navigation.location || f.location,
      ee = gt(e.history, Y, _.signal),
      Ie = s || o,
      Be =
        f.navigation.state !== "idle"
          ? se(Ie, f.navigation.location, l)
          : f.matches;
    L(Be, "Didn't find any matches after fetcher action");
    let ft = ++Mt;
    Je.set(d, ft);
    let mr = vt(C, B.data);
    f.fetchers.set(d, mr);
    let [Oe, De] = Zn(
      e.history,
      f,
      Be,
      C,
      Y,
      V,
      W,
      G,
      Xe,
      Ne,
      Ie,
      l,
      { [x.route.id]: B.data },
      void 0,
    );
    De.filter((q) => q.key !== d).forEach((q) => {
      let dt = q.key,
        Ln = f.fetchers.get(dt),
        ko = vt(void 0, Ln ? Ln.data : void 0);
      f.fetchers.set(dt, ko),
        K.has(dt) && Le(dt),
        q.controller && K.set(dt, q.controller);
    }),
      Z({ fetchers: new Map(f.fetchers) });
    let Ut = () => De.forEach((q) => Le(q.key));
    _.signal.addEventListener("abort", Ut);
    let {
      results: yr,
      loaderResults: gr,
      fetcherResults: vr,
    } = await xn(f.matches, Be, Oe, De, ee);
    if (_.signal.aborted) return;
    _.signal.removeEventListener("abort", Ut),
      Je.delete(d),
      K.delete(d),
      De.forEach((q) => K.delete(q.key));
    let $ = ia(yr);
    if ($) {
      if ($.idx >= Oe.length) {
        let q = De[$.idx - Oe.length].key;
        Ne.add(q);
      }
      return ct(f, $.result);
    }
    let { loaderData: he, errors: Ae } = na(
      f,
      f.matches,
      Oe,
      gr,
      void 0,
      De,
      vr,
      Ue,
    );
    if (f.fetchers.has(d)) {
      let q = Qe(B.data);
      f.fetchers.set(d, q);
    }
    let Rr = Nn(ft);
    f.navigation.state === "loading" && ft > lt
      ? (L(O, "Expected pending action"),
        j && j.abort(),
        ut(f.navigation.location, {
          matches: Be,
          loaderData: he,
          errors: Ae,
          fetchers: new Map(f.fetchers),
        }))
      : (Z(
          z(
            { errors: Ae, loaderData: aa(f.loaderData, he, Be, Ae) },
            Rr || De.length > 0 ? { fetchers: new Map(f.fetchers) } : {},
          ),
        ),
        (V = !1));
  }
  async function jo(d, h, y, x, A, C) {
    let P = f.fetchers.get(d),
      D = vt(C, P ? P.data : void 0);
    f.fetchers.set(d, D), Z({ fetchers: new Map(f.fetchers) });
    let _ = new AbortController(),
      H = gt(e.history, y, _.signal);
    K.set(d, _);
    let ae = Mt,
      B = await yt("loader", H, x, A, i, a, l);
    if (
      ($e(B) && (B = (await ya(B, H.signal, !0)) || B),
      K.get(d) === _ && K.delete(d),
      H.signal.aborted)
    )
      return;
    if (et(B))
      if (lt > ae) {
        let ee = Qe(void 0);
        f.fetchers.set(d, ee), Z({ fetchers: new Map(f.fetchers) });
        return;
      } else {
        Ne.add(d), await ct(f, B);
        return;
      }
    if (Rt(B)) {
      let ee = Ze(f.matches, h);
      f.fetchers.delete(d),
        Z({
          fetchers: new Map(f.fetchers),
          errors: { [ee.route.id]: B.error },
        });
      return;
    }
    L(!$e(B), "Unhandled fetcher deferred data");
    let Y = Qe(B.data);
    f.fetchers.set(d, Y), Z({ fetchers: new Map(f.fetchers) });
  }
  async function ct(d, h, y) {
    let {
      submission: x,
      replace: A,
      isFetchActionRedirect: C,
    } = y === void 0 ? {} : y;
    h.revalidate && (V = !0);
    let P = Et(
      d.location,
      h.location,
      z({ _isRedirect: !0 }, C ? { _isFetchActionRedirect: !0 } : {}),
    );
    if (
      (L(P, "Expected a location on the redirect navigation"),
      pa.test(h.location) && r)
    ) {
      let H = e.history.createURL(h.location),
        ae = ye(H.pathname, l) == null;
      if (t.location.origin !== H.origin || ae) {
        A ? t.location.replace(h.location) : t.location.assign(h.location);
        return;
      }
    }
    j = null;
    let D = A === !0 ? J.Replace : J.Push,
      _ = x || la(d.navigation);
    if (Di.has(h.status) && _ && me(_.formMethod))
      await Pe(D, P, {
        submission: z({}, _, { formAction: h.location }),
        preventScrollReset: U,
      });
    else if (C)
      await Pe(D, P, {
        overrideNavigation: It(P),
        fetcherSubmission: _,
        preventScrollReset: U,
      });
    else {
      let H = It(P, _);
      await Pe(D, P, { overrideNavigation: H, preventScrollReset: U });
    }
  }
  async function xn(d, h, y, x, A) {
    let C = await Promise.all([
        ...y.map((_) => yt("loader", A, _, h, i, a, l)),
        ...x.map((_) =>
          _.matches && _.match && _.controller
            ? yt(
                "loader",
                gt(e.history, _.path, _.controller.signal),
                _.match,
                _.matches,
                i,
                a,
                l,
              )
            : { type: Q.error, error: ue(404, { pathname: _.path }) },
        ),
      ]),
      P = C.slice(0, y.length),
      D = C.slice(y.length);
    return (
      await Promise.all([
        sa(
          d,
          y,
          P,
          P.map(() => A.signal),
          !1,
          f.loaderData,
        ),
        sa(
          d,
          x.map((_) => _.match),
          D,
          x.map((_) => (_.controller ? _.controller.signal : null)),
          !0,
        ),
      ]),
      { results: C, loaderResults: P, fetcherResults: D }
    );
  }
  function dr() {
    (V = !0),
      W.push(...hr()),
      Xe.forEach((d, h) => {
        K.has(h) && (G.push(h), Le(h));
      });
  }
  function Ft(d, h, y) {
    let x = Ze(f.matches, h);
    pr(d), Z({ errors: { [x.route.id]: y }, fetchers: new Map(f.fetchers) });
  }
  function pr(d) {
    let h = f.fetchers.get(d);
    K.has(d) && !(h && h.state === "loading" && Je.has(d)) && Le(d),
      Xe.delete(d),
      Je.delete(d),
      Ne.delete(d),
      f.fetchers.delete(d);
  }
  function Le(d) {
    let h = K.get(d);
    L(h, "Expected fetch controller: " + d), h.abort(), K.delete(d);
  }
  function Sn(d) {
    for (let h of d) {
      let y = bn(h),
        x = Qe(y.data);
      f.fetchers.set(h, x);
    }
  }
  function _n() {
    let d = [],
      h = !1;
    for (let y of Ne) {
      let x = f.fetchers.get(y);
      L(x, "Expected fetcher: " + y),
        x.state === "loading" && (Ne.delete(y), d.push(y), (h = !0));
    }
    return Sn(d), h;
  }
  function Nn(d) {
    let h = [];
    for (let [y, x] of Je)
      if (x < d) {
        let A = f.fetchers.get(y);
        L(A, "Expected fetcher: " + y),
          A.state === "loading" && (Le(y), Je.delete(y), h.push(y));
      }
    return Sn(h), h.length > 0;
  }
  function Mo(d, h) {
    let y = f.blockers.get(d) || qe;
    return ke.get(d) !== h && ke.set(d, h), y;
  }
  function On(d) {
    f.blockers.delete(d), ke.delete(d);
  }
  function Tt(d, h) {
    let y = f.blockers.get(d) || qe;
    L(
      (y.state === "unblocked" && h.state === "blocked") ||
        (y.state === "blocked" && h.state === "blocked") ||
        (y.state === "blocked" && h.state === "proceeding") ||
        (y.state === "blocked" && h.state === "unblocked") ||
        (y.state === "proceeding" && h.state === "unblocked"),
      "Invalid blocker state transition: " + y.state + " -> " + h.state,
    );
    let x = new Map(f.blockers);
    x.set(d, h), Z({ blockers: x });
  }
  function Dn(d) {
    let { currentLocation: h, nextLocation: y, historyAction: x } = d;
    if (ke.size === 0) return;
    ke.size > 1 && tt(!1, "A router only supports one blocker at a time");
    let A = Array.from(ke.entries()),
      [C, P] = A[A.length - 1],
      D = f.blockers.get(C);
    if (
      !(D && D.state === "proceeding") &&
      P({ currentLocation: h, nextLocation: y, historyAction: x })
    )
      return C;
  }
  function hr(d) {
    let h = [];
    return (
      Ue.forEach((y, x) => {
        (!d || d(x)) && (y.cancel(), h.push(x), Ue.delete(x));
      }),
      h
    );
  }
  function Fo(d, h, y) {
    if (((m = d), (v = h), (E = y || null), !w && f.navigation === Or)) {
      w = !0;
      let x = Pn(f.location, f.matches);
      x != null && Z({ restoreScrollPosition: x });
    }
    return () => {
      (m = null), (v = null), (E = null);
    };
  }
  function Cn(d, h) {
    return (
      (E &&
        E(
          d,
          h.map((x) => Ii(x, f.loaderData)),
        )) ||
      d.key
    );
  }
  function To(d, h) {
    if (m && v) {
      let y = Cn(d, h);
      m[y] = v();
    }
  }
  function Pn(d, h) {
    if (m) {
      let y = Cn(d, h),
        x = m[y];
      if (typeof x == "number") return x;
    }
    return null;
  }
  function Uo(d) {
    (i = {}), (s = Dr(d, a, void 0, i));
  }
  return (
    (N = {
      get basename() {
        return l;
      },
      get state() {
        return f;
      },
      get routes() {
        return o;
      },
      initialize: _o,
      subscribe: Oo,
      enableScrollRestoration: Fo,
      navigate: wn,
      fetch: Lo,
      revalidate: Do,
      createHref: (d) => e.history.createHref(d),
      encodeLocation: (d) => e.history.encodeLocation(d),
      getFetcher: bn,
      deleteFetcher: pr,
      dispose: No,
      getBlocker: Mo,
      deleteBlocker: On,
      _internalFetchControllers: K,
      _internalActiveDeferreds: Ue,
      _internalSetRoutes: Uo,
    }),
    N
  );
}
function Li(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Cr(e, t, r, n, a, i, o) {
  let s, l;
  if (i != null && o !== "path") {
    s = [];
    for (let c of t)
      if ((s.push(c), c.route.id === i)) {
        l = c;
        break;
      }
  } else (s = t), (l = t[t.length - 1]);
  let u = Ht(
    a || ".",
    bt(s).map((c) => c.pathnameBase),
    ye(e.pathname, r) || e.pathname,
    o === "path",
  );
  return (
    a == null && ((u.search = e.search), (u.hash = e.hash)),
    (a == null || a === "" || a === ".") &&
      l &&
      l.route.index &&
      !jr(u.search) &&
      (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"),
    n &&
      r !== "/" &&
      (u.pathname = u.pathname === "/" ? r : ce([r, u.pathname])),
    fe(u)
  );
}
function Qn(e, t, r, n) {
  if (!n || !Li(n)) return { path: r };
  if (n.formMethod && !ki(n.formMethod))
    return { path: r, error: ue(405, { method: n.formMethod }) };
  let a = () => ({ path: r, error: ue(400, { type: "invalid-body" }) }),
    i = n.formMethod || "get",
    o = e ? i.toUpperCase() : i.toLowerCase(),
    s = ma(r);
  if (n.body !== void 0) {
    if (n.formEncType === "text/plain") {
      if (!me(o)) return a();
      let m =
        typeof n.body == "string"
          ? n.body
          : n.body instanceof FormData || n.body instanceof URLSearchParams
            ? Array.from(n.body.entries()).reduce((E, v) => {
                let [w, b] = v;
                return (
                  "" +
                  E +
                  w +
                  "=" +
                  b +
                  `
`
                );
              }, "")
            : String(n.body);
      return {
        path: r,
        submission: {
          formMethod: o,
          formAction: s,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      };
    } else if (n.formEncType === "application/json") {
      if (!me(o)) return a();
      try {
        let m = typeof n.body == "string" ? JSON.parse(n.body) : n.body;
        return {
          path: r,
          submission: {
            formMethod: o,
            formAction: s,
            formEncType: n.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        };
      } catch {
        return a();
      }
    }
  }
  L(
    typeof FormData == "function",
    "FormData is not available in this environment",
  );
  let l, u;
  if (n.formData) (l = Pr(n.formData)), (u = n.formData);
  else if (n.body instanceof FormData) (l = Pr(n.body)), (u = n.body);
  else if (n.body instanceof URLSearchParams) (l = n.body), (u = ra(l));
  else if (n.body == null) (l = new URLSearchParams()), (u = new FormData());
  else
    try {
      (l = new URLSearchParams(n.body)), (u = ra(l));
    } catch {
      return a();
    }
  let c = {
    formMethod: o,
    formAction: s,
    formEncType: (n && n.formEncType) || "application/x-www-form-urlencoded",
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (me(c.formMethod)) return { path: r, submission: c };
  let p = ie(r);
  return (
    t && p.search && jr(p.search) && l.append("index", ""),
    (p.search = "?" + l),
    { path: fe(p), submission: c }
  );
}
function Ai(e, t) {
  let r = e;
  if (t) {
    let n = e.findIndex((a) => a.route.id === t);
    n >= 0 && (r = e.slice(0, n));
  }
  return r;
}
function Zn(e, t, r, n, a, i, o, s, l, u, c, p, m, E) {
  let v = E ? Object.values(E)[0] : m ? Object.values(m)[0] : void 0,
    w = e.createURL(t.location),
    b = e.createURL(a),
    S = E ? Object.keys(E)[0] : void 0,
    N = Ai(r, S).filter((O, U) => {
      if (O.route.lazy) return !0;
      if (O.route.loader == null) return !1;
      if (ji(t.loaderData, t.matches[U], O) || o.some((V) => V === O.route.id))
        return !0;
      let j = t.matches[U],
        I = O;
      return ea(
        O,
        z(
          {
            currentUrl: w,
            currentParams: j.params,
            nextUrl: b,
            nextParams: I.params,
          },
          n,
          {
            actionResult: v,
            defaultShouldRevalidate:
              i ||
              w.pathname + w.search === b.pathname + b.search ||
              w.search !== b.search ||
              ha(j, I),
          },
        ),
      );
    }),
    f = [];
  return (
    l.forEach((O, U) => {
      if (!r.some((G) => G.route.id === O.routeId)) return;
      let j = se(c, O.path, p);
      if (!j) {
        f.push({
          key: U,
          routeId: O.routeId,
          path: O.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let I = t.fetchers.get(U),
        V = Lr(j, O.path),
        W = !1;
      u.has(U)
        ? (W = !1)
        : s.includes(U)
          ? (W = !0)
          : I && I.state !== "idle" && I.data === void 0
            ? (W = i)
            : (W = ea(
                V,
                z(
                  {
                    currentUrl: w,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: b,
                    nextParams: r[r.length - 1].params,
                  },
                  n,
                  { actionResult: v, defaultShouldRevalidate: i },
                ),
              )),
        W &&
          f.push({
            key: U,
            routeId: O.routeId,
            path: O.path,
            matches: j,
            match: V,
            controller: new AbortController(),
          });
    }),
    [N, f]
  );
}
function ji(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    a = e[r.route.id] === void 0;
  return n || a;
}
function ha(e, t) {
  let r = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (r != null && r.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function ea(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == "boolean") return r;
  }
  return t.defaultShouldRevalidate;
}
async function ta(e, t, r) {
  if (!e.lazy) return;
  let n = await e.lazy();
  if (!e.lazy) return;
  let a = r[e.id];
  L(a, "No route found in manifest");
  let i = {};
  for (let o in n) {
    let l = a[o] !== void 0 && o !== "hasErrorBoundary";
    tt(
      !l,
      'Route "' +
        a.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.'),
    ),
      !l && !ni.has(o) && (i[o] = n[o]);
  }
  Object.assign(a, i), Object.assign(a, z({}, t(a), { lazy: void 0 }));
}
async function yt(e, t, r, n, a, i, o, s) {
  s === void 0 && (s = {});
  let l,
    u,
    c,
    p = (v) => {
      let w,
        b = new Promise((S, M) => (w = M));
      return (
        (c = () => w()),
        t.signal.addEventListener("abort", c),
        Promise.race([
          v({ request: t, params: r.params, context: s.requestContext }),
          b,
        ])
      );
    };
  try {
    let v = r.route[e];
    if (r.route.lazy)
      if (v) u = (await Promise.all([p(v), ta(r.route, i, a)]))[0];
      else if ((await ta(r.route, i, a), (v = r.route[e]), v)) u = await p(v);
      else if (e === "action") {
        let w = new URL(t.url),
          b = w.pathname + w.search;
        throw ue(405, { method: t.method, pathname: b, routeId: r.route.id });
      } else return { type: Q.data, data: void 0 };
    else if (v) u = await p(v);
    else {
      let w = new URL(t.url),
        b = w.pathname + w.search;
      throw ue(404, { pathname: b });
    }
    L(
      u !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          r.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`.",
    );
  } catch (v) {
    (l = Q.error), (u = v);
  } finally {
    c && t.signal.removeEventListener("abort", c);
  }
  if (Ui(u)) {
    let v = u.status;
    if (Oi.has(v)) {
      let S = u.headers.get("Location");
      if (
        (L(
          S,
          "Redirects returned/thrown from loaders/actions must have a Location header",
        ),
        !pa.test(S))
      )
        S = Cr(new URL(t.url), n.slice(0, n.indexOf(r) + 1), o, !0, S);
      else if (!s.isStaticRequest) {
        let M = new URL(t.url),
          N = S.startsWith("//") ? new URL(M.protocol + S) : new URL(S),
          f = ye(N.pathname, o) != null;
        N.origin === M.origin && f && (S = N.pathname + N.search + N.hash);
      }
      if (s.isStaticRequest) throw (u.headers.set("Location", S), u);
      return {
        type: Q.redirect,
        status: v,
        location: S,
        revalidate: u.headers.get("X-Remix-Revalidate") !== null,
      };
    }
    if (s.isRouteRequest) throw { type: l || Q.data, response: u };
    let w,
      b = u.headers.get("Content-Type");
    return (
      b && /\bapplication\/json\b/.test(b)
        ? (w = await u.json())
        : (w = await u.text()),
      l === Q.error
        ? { type: l, error: new je(v, u.statusText, w), headers: u.headers }
        : { type: Q.data, data: w, statusCode: u.status, headers: u.headers }
    );
  }
  if (l === Q.error) return { type: l, error: u };
  if (Ti(u)) {
    var m, E;
    return {
      type: Q.deferred,
      deferredData: u,
      statusCode: (m = u.init) == null ? void 0 : m.status,
      headers:
        ((E = u.init) == null ? void 0 : E.headers) &&
        new Headers(u.init.headers),
    };
  }
  return { type: Q.data, data: u };
}
function gt(e, t, r, n) {
  let a = e.createURL(ma(t)).toString(),
    i = { signal: r };
  if (n && me(n.formMethod)) {
    let { formMethod: o, formEncType: s } = n;
    (i.method = o.toUpperCase()),
      s === "application/json"
        ? ((i.headers = new Headers({ "Content-Type": s })),
          (i.body = JSON.stringify(n.json)))
        : s === "text/plain"
          ? (i.body = n.text)
          : s === "application/x-www-form-urlencoded" && n.formData
            ? (i.body = Pr(n.formData))
            : (i.body = n.formData);
  }
  return new Request(a, i);
}
function Pr(e) {
  let t = new URLSearchParams();
  for (let [r, n] of e.entries())
    t.append(r, typeof n == "string" ? n : n.name);
  return t;
}
function ra(e) {
  let t = new FormData();
  for (let [r, n] of e.entries()) t.append(r, n);
  return t;
}
function Mi(e, t, r, n, a) {
  let i = {},
    o = null,
    s,
    l = !1,
    u = {};
  return (
    r.forEach((c, p) => {
      let m = t[p].route.id;
      if (
        (L(!et(c), "Cannot handle redirect results in processLoaderData"),
        Rt(c))
      ) {
        let E = Ze(e, m),
          v = c.error;
        n && ((v = Object.values(n)[0]), (n = void 0)),
          (o = o || {}),
          o[E.route.id] == null && (o[E.route.id] = v),
          (i[m] = void 0),
          l || ((l = !0), (s = we(c.error) ? c.error.status : 500)),
          c.headers && (u[m] = c.headers);
      } else
        $e(c)
          ? (a.set(m, c.deferredData), (i[m] = c.deferredData.data))
          : (i[m] = c.data),
          c.statusCode != null &&
            c.statusCode !== 200 &&
            !l &&
            (s = c.statusCode),
          c.headers && (u[m] = c.headers);
    }),
    n && ((o = n), (i[Object.keys(n)[0]] = void 0)),
    { loaderData: i, errors: o, statusCode: s || 200, loaderHeaders: u }
  );
}
function na(e, t, r, n, a, i, o, s) {
  let { loaderData: l, errors: u } = Mi(t, r, n, a, s);
  for (let c = 0; c < i.length; c++) {
    let { key: p, match: m, controller: E } = i[c];
    L(
      o !== void 0 && o[c] !== void 0,
      "Did not find corresponding fetcher result",
    );
    let v = o[c];
    if (!(E && E.signal.aborted))
      if (Rt(v)) {
        let w = Ze(e.matches, m?.route.id);
        (u && u[w.route.id]) || (u = z({}, u, { [w.route.id]: v.error })),
          e.fetchers.delete(p);
      } else if (et(v)) L(!1, "Unhandled fetcher revalidation redirect");
      else if ($e(v)) L(!1, "Unhandled fetcher deferred data");
      else {
        let w = Qe(v.data);
        e.fetchers.set(p, w);
      }
  }
  return { loaderData: l, errors: u };
}
function aa(e, t, r, n) {
  let a = z({}, t);
  for (let i of r) {
    let o = i.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (a[o] = t[o])
        : e[o] !== void 0 && i.route.loader && (a[o] = e[o]),
      n && n.hasOwnProperty(o))
    )
      break;
  }
  return a;
}
function Ze(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((n) => n.route.id === t) + 1) : [...e])
      .reverse()
      .find((n) => n.route.hasErrorBoundary === !0) || e[0]
  );
}
function oa(e) {
  let t = e.find((r) => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function ue(e, t) {
  let { pathname: r, routeId: n, method: a, type: i } = t === void 0 ? {} : t,
    o = "Unknown Server Error",
    s = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((o = "Bad Request"),
        a && r && n
          ? (s =
              "You made a " +
              a +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide a `loader` for route "' + n + '", ') +
              "so there is no way to handle the request.")
          : i === "defer-action"
            ? (s = "defer() is not supported in actions")
            : i === "invalid-body" && (s = "Unable to encode submission body"))
      : e === 403
        ? ((o = "Forbidden"),
          (s = 'Route "' + n + '" does not match URL "' + r + '"'))
        : e === 404
          ? ((o = "Not Found"), (s = 'No route matches URL "' + r + '"'))
          : e === 405 &&
            ((o = "Method Not Allowed"),
            a && r && n
              ? (s =
                  "You made a " +
                  a.toUpperCase() +
                  ' request to "' +
                  r +
                  '" but ' +
                  ('did not provide an `action` for route "' + n + '", ') +
                  "so there is no way to handle the request.")
              : a && (s = 'Invalid request method "' + a.toUpperCase() + '"')),
    new je(e || 500, o, new Error(s), !0)
  );
}
function ia(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (et(r)) return { result: r, idx: t };
  }
}
function ma(e) {
  let t = typeof e == "string" ? ie(e) : e;
  return fe(z({}, t, { hash: "" }));
}
function Fi(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
      ? t.hash !== ""
      : e.hash === t.hash
        ? !0
        : t.hash !== "";
}
function $e(e) {
  return e.type === Q.deferred;
}
function Rt(e) {
  return e.type === Q.error;
}
function et(e) {
  return (e && e.type) === Q.redirect;
}
function Ti(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function Ui(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function ki(e) {
  return Ni.has(e.toLowerCase());
}
function me(e) {
  return Si.has(e.toLowerCase());
}
async function sa(e, t, r, n, a, i) {
  for (let o = 0; o < r.length; o++) {
    let s = r[o],
      l = t[o];
    if (!l) continue;
    let u = e.find((p) => p.route.id === l.route.id),
      c = u != null && !ha(u, l) && (i && i[l.route.id]) !== void 0;
    if ($e(s) && (a || c)) {
      let p = n[o];
      L(p, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await ya(s, p, a).then((m) => {
          m && (r[o] = m || r[o]);
        });
    }
  }
}
async function ya(e, t, r) {
  if ((r === void 0 && (r = !1), !(await e.deferredData.resolveData(t)))) {
    if (r)
      try {
        return { type: Q.data, data: e.deferredData.unwrappedData };
      } catch (a) {
        return { type: Q.error, error: a };
      }
    return { type: Q.data, data: e.deferredData.data };
  }
}
function jr(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Ii(e, t) {
  let { route: r, pathname: n, params: a } = e;
  return { id: r.id, pathname: n, params: a, data: t[r.id], handle: r.handle };
}
function Lr(e, t) {
  let r = typeof t == "string" ? ie(t).search : t.search;
  if (e[e.length - 1].route.index && jr(r || "")) return e[e.length - 1];
  let n = bt(e);
  return n[n.length - 1];
}
function la(e) {
  let {
    formMethod: t,
    formAction: r,
    formEncType: n,
    text: a,
    formData: i,
    json: o,
  } = e;
  if (!(!t || !r || !n)) {
    if (a != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: a,
      };
    if (i != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: i,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function It(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Bi(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function vt(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
        " _hasFetcherDoneAnything ": !0,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
        " _hasFetcherDoneAnything ": !0,
      };
}
function $i(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
    " _hasFetcherDoneAnything ": !0,
  };
}
function Qe(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
    " _hasFetcherDoneAnything ": !0,
  };
}
var J,
  Yn,
  Q,
  ni,
  ii,
  si,
  li,
  ui,
  ci,
  fi,
  qn,
  ce,
  Ri,
  Ei,
  wi,
  Ee,
  Bt,
  zt,
  je,
  da,
  Si,
  _i,
  Ni,
  Oi,
  Di,
  Or,
  Ci,
  qe,
  pa,
  Pi,
  Fl,
  rt = Er(() => {
    (function (e) {
      (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
    })(J || (J = {}));
    Yn = "popstate";
    (function (e) {
      (e.data = "data"),
        (e.deferred = "deferred"),
        (e.redirect = "redirect"),
        (e.error = "error");
    })(Q || (Q = {}));
    ni = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
    (ii = /^:\w+$/),
      (si = 3),
      (li = 2),
      (ui = 1),
      (ci = 10),
      (fi = -2),
      (qn = (e) => e === "*");
    (ce = (e) => e.join("/").replace(/\/\/+/g, "/")),
      (Ri = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/")),
      (Ei = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e)),
      (wi = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e)),
      (Ee = class extends Error {}),
      (Bt = class {
        constructor(t, r) {
          (this.pendingKeysSet = new Set()),
            (this.subscribers = new Set()),
            (this.deferredKeys = []),
            L(
              t && typeof t == "object" && !Array.isArray(t),
              "defer() only accepts plain objects",
            );
          let n;
          (this.abortPromise = new Promise((i, o) => (n = o))),
            (this.controller = new AbortController());
          let a = () => n(new Ee("Deferred data aborted"));
          (this.unlistenAbortSignal = () =>
            this.controller.signal.removeEventListener("abort", a)),
            this.controller.signal.addEventListener("abort", a),
            (this.data = Object.entries(t).reduce((i, o) => {
              let [s, l] = o;
              return Object.assign(i, { [s]: this.trackPromise(s, l) });
            }, {})),
            this.done && this.unlistenAbortSignal(),
            (this.init = r);
        }
        trackPromise(t, r) {
          if (!(r instanceof Promise)) return r;
          this.deferredKeys.push(t), this.pendingKeysSet.add(t);
          let n = Promise.race([r, this.abortPromise]).then(
            (a) => this.onSettle(n, t, void 0, a),
            (a) => this.onSettle(n, t, a),
          );
          return (
            n.catch(() => {}),
            Object.defineProperty(n, "_tracked", { get: () => !0 }),
            n
          );
        }
        onSettle(t, r, n, a) {
          if (this.controller.signal.aborted && n instanceof Ee)
            return (
              this.unlistenAbortSignal(),
              Object.defineProperty(t, "_error", { get: () => n }),
              Promise.reject(n)
            );
          if (
            (this.pendingKeysSet.delete(r),
            this.done && this.unlistenAbortSignal(),
            n === void 0 && a === void 0)
          ) {
            let i = new Error(
              'Deferred data for key "' +
                r +
                '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.',
            );
            return (
              Object.defineProperty(t, "_error", { get: () => i }),
              this.emit(!1, r),
              Promise.reject(i)
            );
          }
          return a === void 0
            ? (Object.defineProperty(t, "_error", { get: () => n }),
              this.emit(!1, r),
              Promise.reject(n))
            : (Object.defineProperty(t, "_data", { get: () => a }),
              this.emit(!1, r),
              a);
        }
        emit(t, r) {
          this.subscribers.forEach((n) => n(t, r));
        }
        subscribe(t) {
          return this.subscribers.add(t), () => this.subscribers.delete(t);
        }
        cancel() {
          this.controller.abort(),
            this.pendingKeysSet.forEach((t, r) =>
              this.pendingKeysSet.delete(r),
            ),
            this.emit(!0);
        }
        async resolveData(t) {
          let r = !1;
          if (!this.done) {
            let n = () => this.cancel();
            t.addEventListener("abort", n),
              (r = await new Promise((a) => {
                this.subscribe((i) => {
                  t.removeEventListener("abort", n), (i || this.done) && a(i);
                });
              }));
          }
          return r;
        }
        get done() {
          return this.pendingKeysSet.size === 0;
        }
        get unwrappedData() {
          return (
            L(
              this.data !== null && this.done,
              "Can only unwrap data on initialized and settled deferreds",
            ),
            Object.entries(this.data).reduce((t, r) => {
              let [n, a] = r;
              return Object.assign(t, { [n]: xi(a) });
            }, {})
          );
        }
        get pendingKeys() {
          return Array.from(this.pendingKeysSet);
        }
      });
    (zt = function (t, r) {
      r === void 0 && (r = 302);
      let n = r;
      typeof n == "number"
        ? (n = { status: n })
        : typeof n.status > "u" && (n.status = 302);
      let a = new Headers(n.headers);
      return a.set("Location", t), new Response(null, z({}, n, { headers: a }));
    }),
      (je = class {
        constructor(t, r, n, a) {
          a === void 0 && (a = !1),
            (this.status = t),
            (this.statusText = r || ""),
            (this.internal = a),
            n instanceof Error
              ? ((this.data = n.toString()), (this.error = n))
              : (this.data = n);
        }
      });
    (da = ["post", "put", "patch", "delete"]),
      (Si = new Set(da)),
      (_i = ["get", ...da]),
      (Ni = new Set(_i)),
      (Oi = new Set([301, 302, 303, 307, 308])),
      (Di = new Set([307, 308])),
      (Or = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      }),
      (Ci = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      }),
      (qe = {
        state: "unblocked",
        proceed: void 0,
        reset: void 0,
        location: void 0,
      }),
      (pa = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i),
      (Pi = (e) => ({ hasErrorBoundary: Boolean(e.hasErrorBoundary) }));
    Fl = Symbol("deferred");
  });
function Vt() {
  return (
    (Vt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    Vt.apply(this, arguments)
  );
}
function He(e, t) {
  let { relative: r } = t === void 0 ? {} : t;
  nt() || L(!1);
  let { basename: n, navigator: a } = R.useContext(de),
    { hash: i, pathname: o, search: s } = ze(e, { relative: r }),
    l = o;
  return (
    n !== "/" && (l = o === "/" ? n : ce([n, o])),
    a.createHref({ pathname: l, search: s, hash: i })
  );
}
function nt() {
  return R.useContext(xt) != null;
}
function ne() {
  return nt() || L(!1), R.useContext(xt).location;
}
function Ea(e) {
  R.useContext(de).static || R.useLayoutEffect(e);
}
function St() {
  let { isDataRoute: e } = R.useContext(ge);
  return e ? Zi() : Vi();
}
function Vi() {
  nt() || L(!1);
  let e = R.useContext(Ce),
    { basename: t, navigator: r } = R.useContext(de),
    { matches: n } = R.useContext(ge),
    { pathname: a } = ne(),
    i = JSON.stringify(bt(n).map((l) => l.pathnameBase)),
    o = R.useRef(!1);
  return (
    Ea(() => {
      o.current = !0;
    }),
    R.useCallback(
      function (l, u) {
        if ((u === void 0 && (u = {}), !o.current)) return;
        if (typeof l == "number") {
          r.go(l);
          return;
        }
        let c = Ht(l, JSON.parse(i), a, u.relative === "path");
        e == null &&
          t !== "/" &&
          (c.pathname = c.pathname === "/" ? t : ce([t, c.pathname])),
          (u.replace ? r.replace : r.push)(c, u.state, u);
      },
      [t, r, i, a, e],
    )
  );
}
function Ur(e) {
  let t = R.useContext(ge).outlet;
  return t && R.createElement(Wi.Provider, { value: e }, t);
}
function ze(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { matches: n } = R.useContext(ge),
    { pathname: a } = ne(),
    i = JSON.stringify(bt(n).map((o) => o.pathnameBase));
  return R.useMemo(() => Ht(e, JSON.parse(i), a, r === "path"), [e, i, a, r]);
}
function Ki(e, t, r) {
  nt() || L(!1);
  let { navigator: n } = R.useContext(de),
    { matches: a } = R.useContext(ge),
    i = a[a.length - 1],
    o = i ? i.params : {},
    s = i ? i.pathname : "/",
    l = i ? i.pathnameBase : "/",
    u = i && i.route,
    c = ne(),
    p;
  if (t) {
    var m;
    let S = typeof t == "string" ? ie(t) : t;
    l === "/" || ((m = S.pathname) != null && m.startsWith(l)) || L(!1),
      (p = S);
  } else p = c;
  let E = p.pathname || "/",
    v = l === "/" ? E : E.slice(l.length) || "/",
    w = se(e, { pathname: v }),
    b = Gi(
      w &&
        w.map((S) =>
          Object.assign({}, S, {
            params: Object.assign({}, o, S.params),
            pathname: ce([
              l,
              n.encodeLocation
                ? n.encodeLocation(S.pathname).pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? l
                : ce([
                    l,
                    n.encodeLocation
                      ? n.encodeLocation(S.pathnameBase).pathname
                      : S.pathnameBase,
                  ]),
          }),
        ),
      a,
      r,
    );
  return t && b
    ? R.createElement(
        xt.Provider,
        {
          value: {
            location: Vt(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              p,
            ),
            navigationType: J.Pop,
          },
        },
        b,
      )
    : b;
}
function Ji() {
  let e = Ve(),
    t = we(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    r = e instanceof Error ? e.stack : null,
    n = "rgba(200,200,200, 0.5)",
    a = { padding: "0.5rem", backgroundColor: n },
    i = { padding: "2px 4px", backgroundColor: n };
  return R.createElement(
    R.Fragment,
    null,
    R.createElement("h2", null, "Unexpected Application Error!"),
    R.createElement("h3", { style: { fontStyle: "italic" } }, t),
    r ? R.createElement("pre", { style: a }, r) : null,
    null,
  );
}
function Yi(e) {
  let { routeContext: t, match: r, children: n } = e,
    a = R.useContext(Ce);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = r.route.id),
    R.createElement(ge.Provider, { value: t }, n)
  );
}
function Gi(e, t, r) {
  var n;
  if ((t === void 0 && (t = []), r === void 0 && (r = null), e == null)) {
    var a;
    if ((a = r) != null && a.errors) e = r.matches;
    else return null;
  }
  let i = e,
    o = (n = r) == null ? void 0 : n.errors;
  if (o != null) {
    let s = i.findIndex((l) => l.route.id && o?.[l.route.id]);
    s >= 0 || L(!1), (i = i.slice(0, Math.min(i.length, s + 1)));
  }
  return i.reduceRight((s, l, u) => {
    let c = l.route.id ? o?.[l.route.id] : null,
      p = null;
    r && (p = l.route.errorElement || Xi);
    let m = t.concat(i.slice(0, u + 1)),
      E = () => {
        let v;
        return (
          c
            ? (v = p)
            : l.route.Component
              ? (v = R.createElement(l.route.Component, null))
              : l.route.element
                ? (v = l.route.element)
                : (v = s),
          R.createElement(Yi, {
            match: l,
            routeContext: { outlet: s, matches: m, isDataRoute: r != null },
            children: v,
          })
        );
      };
    return r && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
      ? R.createElement(Mr, {
          location: r.location,
          revalidation: r.revalidation,
          component: p,
          error: c,
          children: E(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : E();
  }, null);
}
function qi(e) {
  let t = R.useContext(Ce);
  return t || L(!1), t;
}
function Kt(e) {
  let t = R.useContext(Me);
  return t || L(!1), t;
}
function Qi(e) {
  let t = R.useContext(ge);
  return t || L(!1), t;
}
function Jt(e) {
  let t = Qi(e),
    r = t.matches[t.matches.length - 1];
  return r.route.id || L(!1), r.route.id;
}
function kr() {
  return Jt(be.UseRouteId);
}
function at() {
  return Kt(be.UseNavigation).navigation;
}
function _t() {
  let { matches: e, loaderData: t } = Kt(be.UseMatches);
  return R.useMemo(
    () =>
      e.map((r) => {
        let { pathname: n, params: a } = r;
        return {
          id: r.route.id,
          pathname: n,
          params: a,
          data: t[r.route.id],
          handle: r.route.handle,
        };
      }),
    [e, t],
  );
}
function Ir() {
  let e = Kt(be.UseLoaderData),
    t = Jt(be.UseLoaderData);
  if (e.errors && e.errors[t] != null) {
    console.error(
      "You cannot `useLoaderData` in an errorElement (routeId: " + t + ")",
    );
    return;
  }
  return e.loaderData[t];
}
function Ve() {
  var e;
  let t = R.useContext(Ra),
    r = Kt(be.UseRouteError),
    n = Jt(be.UseRouteError);
  return t || ((e = r.errors) == null ? void 0 : e[n]);
}
function Br() {
  let e = R.useContext(Wt);
  return e?._data;
}
function Xt() {
  let e = R.useContext(Wt);
  return e?._error;
}
function Zi() {
  let { router: e } = qi(Fr.UseNavigateStable),
    t = Jt(be.UseNavigateStable),
    r = R.useRef(!1);
  return (
    Ea(() => {
      r.current = !0;
    }),
    R.useCallback(
      function (a, i) {
        i === void 0 && (i = {}),
          r.current &&
            (typeof a == "number"
              ? e.navigate(a)
              : e.navigate(a, Vt({ fromRouteId: t }, i)));
      },
      [e, t],
    )
  );
}
function $r(e) {
  let { fallbackElement: t, router: r, future: n } = e,
    [a, i] = R.useState(r.state),
    { v7_startTransition: o } = n || {},
    s = R.useCallback(
      (p) => {
        o && ga ? ga(() => i(p)) : i(p);
      },
      [i, o],
    );
  R.useLayoutEffect(() => r.subscribe(s), [r, s]);
  let l = R.useMemo(
      () => ({
        createHref: r.createHref,
        encodeLocation: r.encodeLocation,
        go: (p) => r.navigate(p),
        push: (p, m, E) =>
          r.navigate(p, {
            state: m,
            preventScrollReset: E?.preventScrollReset,
          }),
        replace: (p, m, E) =>
          r.navigate(p, {
            replace: !0,
            state: m,
            preventScrollReset: E?.preventScrollReset,
          }),
      }),
      [r],
    ),
    u = r.basename || "/",
    c = R.useMemo(
      () => ({ router: r, navigator: l, static: !1, basename: u }),
      [r, l, u],
    );
  return R.createElement(
    R.Fragment,
    null,
    R.createElement(
      Ce.Provider,
      { value: c },
      R.createElement(
        Me.Provider,
        { value: a },
        R.createElement(
          Hr,
          {
            basename: u,
            location: a.location,
            navigationType: a.historyAction,
            navigator: l,
          },
          a.initialized
            ? R.createElement(ts, { routes: r.routes, state: a })
            : t,
        ),
      ),
    ),
    null,
  );
}
function ts(e) {
  let { routes: t, state: r } = e;
  return Ki(t, void 0, r);
}
function Yt(e) {
  return Ur(e.context);
}
function Hr(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: n,
    navigationType: a = J.Pop,
    navigator: i,
    static: o = !1,
  } = e;
  nt() && L(!1);
  let s = t.replace(/^\/*/, "/"),
    l = R.useMemo(() => ({ basename: s, navigator: i, static: o }), [s, i, o]);
  typeof n == "string" && (n = ie(n));
  let {
      pathname: u = "/",
      search: c = "",
      hash: p = "",
      state: m = null,
      key: E = "default",
    } = n,
    v = R.useMemo(() => {
      let w = ye(u, s);
      return w == null
        ? null
        : {
            location: { pathname: w, search: c, hash: p, state: m, key: E },
            navigationType: a,
          };
    }, [s, u, c, p, m, E, a]);
  return v == null
    ? null
    : R.createElement(
        de.Provider,
        { value: l },
        R.createElement(xt.Provider, { children: r, value: v }),
      );
}
function zr(e) {
  let { children: t, errorElement: r, resolve: n } = e;
  return R.createElement(
    Tr,
    { resolve: n, errorElement: r },
    R.createElement(ns, null, t),
  );
}
function ns(e) {
  let { children: t } = e,
    r = Br(),
    n = typeof t == "function" ? t(r) : t;
  return R.createElement(R.Fragment, null, n);
}
function wa(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: R.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: R.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
var R,
  Ce,
  Me,
  Wt,
  de,
  xt,
  ge,
  Ra,
  Wi,
  Xi,
  Mr,
  Fr,
  be,
  es,
  ga,
  le,
  rs,
  Tr,
  Vr = Er(() => {
    R = oe(re());
    rt();
    rt();
    (Ce = R.createContext(null)),
      (Me = R.createContext(null)),
      (Wt = R.createContext(null)),
      (de = R.createContext(null)),
      (xt = R.createContext(null)),
      (ge = R.createContext({ outlet: null, matches: [], isDataRoute: !1 })),
      (Ra = R.createContext(null));
    Wi = R.createContext(null);
    (Xi = R.createElement(Ji, null)),
      (Mr = class extends R.Component {
        constructor(t) {
          super(t),
            (this.state = {
              location: t.location,
              revalidation: t.revalidation,
              error: t.error,
            });
        }
        static getDerivedStateFromError(t) {
          return { error: t };
        }
        static getDerivedStateFromProps(t, r) {
          return r.location !== t.location ||
            (r.revalidation !== "idle" && t.revalidation === "idle")
            ? {
                error: t.error,
                location: t.location,
                revalidation: t.revalidation,
              }
            : {
                error: t.error || r.error,
                location: r.location,
                revalidation: t.revalidation || r.revalidation,
              };
        }
        componentDidCatch(t, r) {
          console.error(
            "React Router caught the following error during render",
            t,
            r,
          );
        }
        render() {
          return this.state.error
            ? R.createElement(
                ge.Provider,
                { value: this.props.routeContext },
                R.createElement(Ra.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                }),
              )
            : this.props.children;
        }
      });
    (function (e) {
      (e.UseBlocker = "useBlocker"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate");
    })(Fr || (Fr = {}));
    (function (e) {
      (e.UseBlocker = "useBlocker"),
        (e.UseLoaderData = "useLoaderData"),
        (e.UseActionData = "useActionData"),
        (e.UseRouteError = "useRouteError"),
        (e.UseNavigation = "useNavigation"),
        (e.UseRouteLoaderData = "useRouteLoaderData"),
        (e.UseMatches = "useMatches"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        (e.UseRouteId = "useRouteId");
    })(be || (be = {}));
    (es = "startTransition"), (ga = R[es]);
    (function (e) {
      (e[(e.pending = 0)] = "pending"),
        (e[(e.success = 1)] = "success"),
        (e[(e.error = 2)] = "error");
    })(le || (le = {}));
    (rs = new Promise(() => {})),
      (Tr = class extends R.Component {
        constructor(t) {
          super(t), (this.state = { error: null });
        }
        static getDerivedStateFromError(t) {
          return { error: t };
        }
        componentDidCatch(t, r) {
          console.error(
            "<Await> caught the following error during render",
            t,
            r,
          );
        }
        render() {
          let { children: t, errorElement: r, resolve: n } = this.props,
            a = null,
            i = le.pending;
          if (!(n instanceof Promise))
            (i = le.success),
              (a = Promise.resolve()),
              Object.defineProperty(a, "_tracked", { get: () => !0 }),
              Object.defineProperty(a, "_data", { get: () => n });
          else if (this.state.error) {
            i = le.error;
            let o = this.state.error;
            (a = Promise.reject().catch(() => {})),
              Object.defineProperty(a, "_tracked", { get: () => !0 }),
              Object.defineProperty(a, "_error", { get: () => o });
          } else
            n._tracked
              ? ((a = n),
                (i =
                  a._error !== void 0
                    ? le.error
                    : a._data !== void 0
                      ? le.success
                      : le.pending))
              : ((i = le.pending),
                Object.defineProperty(n, "_tracked", { get: () => !0 }),
                (a = n.then(
                  (o) => Object.defineProperty(n, "_data", { get: () => o }),
                  (o) => Object.defineProperty(n, "_error", { get: () => o }),
                )));
          if (i === le.error && a._error instanceof Ee) throw rs;
          if (i === le.error && !r) throw a._error;
          if (i === le.error)
            return R.createElement(Wt.Provider, { value: a, children: r });
          if (i === le.success)
            return R.createElement(Wt.Provider, { value: a, children: t });
          throw a;
        }
      });
  });
function xe() {
  return (
    (xe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    xe.apply(this, arguments)
  );
}
function Yr(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function er(e) {
  return e != null && typeof e.tagName == "string";
}
function ds(e) {
  return er(e) && e.tagName.toLowerCase() === "button";
}
function ps(e) {
  return er(e) && e.tagName.toLowerCase() === "form";
}
function hs(e) {
  return er(e) && e.tagName.toLowerCase() === "input";
}
function ms(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ys(e, t) {
  return e.button === 0 && (!t || t === "_self") && !ms(e);
}
function Jr(e) {
  return (
    e === void 0 && (e = ""),
    new URLSearchParams(
      typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, r) => {
            let n = e[r];
            return t.concat(Array.isArray(n) ? n.map((a) => [r, a]) : [[r, n]]);
          }, []),
    )
  );
}
function gs(e, t) {
  let r = Jr(e);
  if (t)
    for (let n of t.keys())
      r.has(n) ||
        t.getAll(n).forEach((a) => {
          r.append(n, a);
        });
  return r;
}
function vs() {
  if (Gt === null)
    try {
      new FormData(document.createElement("form"), 0), (Gt = !1);
    } catch {
      Gt = !0;
    }
  return Gt;
}
function Kr(e) {
  return e != null && !Rs.has(e) ? null : e;
}
function Es(e, t) {
  let r, n, a, i, o;
  if (ps(e)) {
    let s = e.getAttribute("action");
    (n = s ? ye(s, t) : null),
      (r = e.getAttribute("method") || Qt),
      (a = Kr(e.getAttribute("enctype")) || Wr),
      (i = new FormData(e));
  } else if (ds(e) || (hs(e) && (e.type === "submit" || e.type === "image"))) {
    let s = e.form;
    if (s == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let l = e.getAttribute("formaction") || s.getAttribute("action");
    if (
      ((n = l ? ye(l, t) : null),
      (r = e.getAttribute("formmethod") || s.getAttribute("method") || Qt),
      (a =
        Kr(e.getAttribute("formenctype")) ||
        Kr(s.getAttribute("enctype")) ||
        Wr),
      (i = new FormData(s, e)),
      !vs())
    ) {
      let { name: u, type: c, value: p } = e;
      if (c === "image") {
        let m = u ? u + "." : "";
        i.append(m + "x", "0"), i.append(m + "y", "0");
      } else u && i.append(u, p);
    }
  } else {
    if (er(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    (r = Qt), (n = null), (a = Wr), (o = e);
  }
  return (
    i && a === "text/plain" && ((o = i), (i = void 0)),
    { action: n, method: r.toLowerCase(), encType: a, formData: i, body: o }
  );
}
function Sa(e, t) {
  return Ar({
    basename: t?.basename,
    future: xe({}, t?.future, { v7_prependBasename: !0 }),
    history: ua({ window: t?.window }),
    hydrationData: t?.hydrationData || Ss(),
    routes: e,
    mapRouteProperties: wa,
  }).initialize();
}
function Ss() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = xe({}, t, { errors: _s(t.errors) })), t;
}
function _s(e) {
  if (!e) return null;
  let t = Object.entries(e),
    r = {};
  for (let [n, a] of t)
    if (a && a.__type === "RouteErrorResponse")
      r[n] = new je(a.status, a.statusText, a.data, a.internal === !0);
    else if (a && a.__type === "Error") {
      if (a.__subType) {
        let i = window[a.__subType];
        if (typeof i == "function")
          try {
            let o = new i(a.message);
            (o.stack = ""), (r[n] = o);
          } catch {}
      }
      if (r[n] == null) {
        let i = new Error(a.message);
        (i.stack = ""), (r[n] = i);
      }
    } else r[n] = a;
  return r;
}
function Na(e) {
  let t = T.useContext(Ce);
  return t || L(!1), t;
}
function Ls(e) {
  let t = T.useContext(Me);
  return t || L(!1), t;
}
function As(e, t) {
  let {
      target: r,
      replace: n,
      state: a,
      preventScrollReset: i,
      relative: o,
    } = t === void 0 ? {} : t,
    s = St(),
    l = ne(),
    u = ze(e, { relative: o });
  return T.useCallback(
    (c) => {
      if (ys(c, r)) {
        c.preventDefault();
        let p = n !== void 0 ? n : fe(l) === fe(u);
        s(e, { replace: p, state: a, preventScrollReset: i, relative: o });
      }
    },
    [l, s, u, n, a, r, e, i, o],
  );
}
function js(e) {
  let t = T.useRef(Jr(e)),
    r = T.useRef(!1),
    n = ne(),
    a = T.useMemo(() => gs(n.search, r.current ? null : t.current), [n.search]),
    i = St(),
    o = T.useCallback(
      (s, l) => {
        let u = Jr(typeof s == "function" ? s(a) : s);
        (r.current = !0), i("?" + u, l);
      },
      [i, a],
    );
  return [a, o];
}
function Ms() {
  if (typeof document > "u")
    throw new Error(
      "You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.",
    );
}
function Oa() {
  let { router: e } = Na(Zt.UseSubmit),
    { basename: t } = T.useContext(de),
    r = kr();
  return T.useCallback(
    function (n, a) {
      a === void 0 && (a = {}), Ms();
      let { action: i, method: o, encType: s, formData: l, body: u } = Es(n, t);
      e.navigate(a.action || i, {
        preventScrollReset: a.preventScrollReset,
        formData: l,
        body: u,
        formMethod: a.method || o,
        formEncType: a.encType || s,
        replace: a.replace,
        state: a.state,
        fromRouteId: r,
      });
    },
    [e, t, r],
  );
}
function Da(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { basename: n } = T.useContext(de),
    a = T.useContext(ge);
  a || L(!1);
  let [i] = a.matches.slice(-1),
    o = xe({}, ze(e || ".", { relative: r })),
    s = ne();
  if (e == null && ((o.search = s.search), (o.hash = s.hash), i.route.index)) {
    let l = new URLSearchParams(o.search);
    l.delete("index"), (o.search = l.toString() ? "?" + l.toString() : "");
  }
  return (
    (!e || e === ".") &&
      i.route.index &&
      (o.search = o.search ? o.search.replace(/^\?/, "?index&") : "?index"),
    n !== "/" && (o.pathname = o.pathname === "/" ? n : ce([n, o.pathname])),
    fe(o)
  );
}
function Ca(e) {
  let { getKey: t, storageKey: r } = e === void 0 ? {} : e,
    { router: n } = Na(Zt.UseScrollRestoration),
    { restoreScrollPosition: a, preventScrollReset: i } = Ls(
      Xr.UseScrollRestoration,
    ),
    { basename: o } = T.useContext(de),
    s = ne(),
    l = _t(),
    u = at();
  T.useEffect(
    () => (
      (window.history.scrollRestoration = "manual"),
      () => {
        window.history.scrollRestoration = "auto";
      }
    ),
    [],
  ),
    Fs(
      T.useCallback(() => {
        if (u.state === "idle") {
          let c = (t ? t(s, l) : null) || s.key;
          qt[c] = window.scrollY;
        }
        sessionStorage.setItem(r || ba, JSON.stringify(qt)),
          (window.history.scrollRestoration = "auto");
      }, [r, t, u.state, s, l]),
    ),
    typeof document < "u" &&
      (T.useLayoutEffect(() => {
        try {
          let c = sessionStorage.getItem(r || ba);
          c && (qt = JSON.parse(c));
        } catch {}
      }, [r]),
      T.useLayoutEffect(() => {
        let c =
            t && o !== "/"
              ? (m, E) =>
                  t(xe({}, m, { pathname: ye(m.pathname, o) || m.pathname }), E)
              : t,
          p = n?.enableScrollRestoration(qt, () => window.scrollY, c);
        return () => p && p();
      }, [n, o, t]),
      T.useLayoutEffect(() => {
        if (a !== !1) {
          if (typeof a == "number") {
            window.scrollTo(0, a);
            return;
          }
          if (s.hash) {
            let c = document.getElementById(
              decodeURIComponent(s.hash.slice(1)),
            );
            if (c) {
              c.scrollIntoView();
              return;
            }
          }
          i !== !0 && window.scrollTo(0, 0);
        }
      }, [s, a, i]));
}
function Fs(e, t) {
  let { capture: r } = t || {};
  T.useEffect(() => {
    let n = r != null ? { capture: r } : void 0;
    return (
      window.addEventListener("pagehide", e, n),
      () => {
        window.removeEventListener("pagehide", e, n);
      }
    );
  }, [e, r]);
}
var T,
  Qt,
  Wr,
  Gt,
  Rs,
  ws,
  bs,
  xs,
  Ns,
  Zl,
  Os,
  Ds,
  Gr,
  _a,
  Cs,
  Ps,
  Zt,
  Xr,
  ba,
  qt,
  Fe = Er(() => {
    T = oe(re());
    Vr();
    Vr();
    rt();
    (Qt = "get"), (Wr = "application/x-www-form-urlencoded");
    Gt = null;
    Rs = new Set([
      "application/x-www-form-urlencoded",
      "multipart/form-data",
      "text/plain",
    ]);
    (ws = [
      "onClick",
      "relative",
      "reloadDocument",
      "replace",
      "state",
      "target",
      "to",
      "preventScrollReset",
    ]),
      (bs = [
        "aria-current",
        "caseSensitive",
        "className",
        "end",
        "style",
        "to",
        "children",
      ]),
      (xs = [
        "reloadDocument",
        "replace",
        "state",
        "method",
        "action",
        "onSubmit",
        "submit",
        "relative",
        "preventScrollReset",
      ]);
    (Ns = "startTransition"),
      (Zl = T[Ns]),
      (Os =
        typeof window < "u" &&
        typeof window.document < "u" &&
        typeof window.document.createElement < "u"),
      (Ds = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i),
      (Gr = T.forwardRef(function (t, r) {
        let {
            onClick: n,
            relative: a,
            reloadDocument: i,
            replace: o,
            state: s,
            target: l,
            to: u,
            preventScrollReset: c,
          } = t,
          p = Yr(t, ws),
          { basename: m } = T.useContext(de),
          E,
          v = !1;
        if (typeof u == "string" && Ds.test(u) && ((E = u), Os))
          try {
            let M = new URL(window.location.href),
              N = u.startsWith("//") ? new URL(M.protocol + u) : new URL(u),
              f = ye(N.pathname, m);
            N.origin === M.origin && f != null
              ? (u = f + N.search + N.hash)
              : (v = !0);
          } catch {}
        let w = He(u, { relative: a }),
          b = As(u, {
            replace: o,
            state: s,
            target: l,
            preventScrollReset: c,
            relative: a,
          });
        function S(M) {
          n && n(M), M.defaultPrevented || b(M);
        }
        return T.createElement(
          "a",
          xe({}, p, {
            href: E || w,
            onClick: v || i ? n : S,
            ref: r,
            target: l,
          }),
        );
      })),
      (_a = T.forwardRef(function (t, r) {
        let {
            "aria-current": n = "page",
            caseSensitive: a = !1,
            className: i = "",
            end: o = !1,
            style: s,
            to: l,
            children: u,
          } = t,
          c = Yr(t, bs),
          p = ze(l, { relative: c.relative }),
          m = ne(),
          E = T.useContext(Me),
          { navigator: v } = T.useContext(de),
          w = v.encodeLocation ? v.encodeLocation(p).pathname : p.pathname,
          b = m.pathname,
          S =
            E && E.navigation && E.navigation.location
              ? E.navigation.location.pathname
              : null;
        a ||
          ((b = b.toLowerCase()),
          (S = S ? S.toLowerCase() : null),
          (w = w.toLowerCase()));
        let M =
            b === w || (!o && b.startsWith(w) && b.charAt(w.length) === "/"),
          N =
            S != null &&
            (S === w || (!o && S.startsWith(w) && S.charAt(w.length) === "/")),
          f = M ? n : void 0,
          O;
        typeof i == "function"
          ? (O = i({ isActive: M, isPending: N }))
          : (O = [i, M ? "active" : null, N ? "pending" : null]
              .filter(Boolean)
              .join(" "));
        let U = typeof s == "function" ? s({ isActive: M, isPending: N }) : s;
        return T.createElement(
          Gr,
          xe({}, c, {
            "aria-current": f,
            className: O,
            ref: r,
            style: U,
            to: l,
          }),
          typeof u == "function" ? u({ isActive: M, isPending: N }) : u,
        );
      })),
      (Cs = T.forwardRef((e, t) => {
        let r = Oa();
        return T.createElement(Ps, xe({}, e, { submit: r, ref: t }));
      })),
      (Ps = T.forwardRef((e, t) => {
        let {
            reloadDocument: r,
            replace: n,
            state: a,
            method: i = Qt,
            action: o,
            onSubmit: s,
            submit: l,
            relative: u,
            preventScrollReset: c,
          } = e,
          p = Yr(e, xs),
          m = i.toLowerCase() === "get" ? "get" : "post",
          E = Da(o, { relative: u });
        return T.createElement(
          "form",
          xe(
            {
              ref: t,
              method: m,
              action: E,
              onSubmit: r
                ? s
                : (w) => {
                    if ((s && s(w), w.defaultPrevented)) return;
                    w.preventDefault();
                    let b = w.nativeEvent.submitter,
                      S = b?.getAttribute("formmethod") || i;
                    l(b || w.currentTarget, {
                      method: S,
                      replace: n,
                      state: a,
                      relative: u,
                      preventScrollReset: c,
                    });
                  },
            },
            p,
          ),
        );
      }));
    (function (e) {
      (e.UseScrollRestoration = "useScrollRestoration"),
        (e.UseSubmit = "useSubmit"),
        (e.UseSubmitFetcher = "useSubmitFetcher"),
        (e.UseFetcher = "useFetcher");
    })(Zt || (Zt = {}));
    (function (e) {
      (e.UseFetchers = "useFetchers"),
        (e.UseScrollRestoration = "useScrollRestoration");
    })(Xr || (Xr = {}));
    (ba = "react-router-scroll-positions"), (qt = {});
  });
var mo = pt((Ac, ho) => {
  ho.exports = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  };
});
var xo = pt((cr) => {
  "use strict";
  var Ol = re(),
    Dl = Symbol.for("react.element"),
    Cl = Symbol.for("react.fragment"),
    Pl = Object.prototype.hasOwnProperty,
    Ll =
      Ol.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
  function bo(e, t, r) {
    var n,
      a = {},
      i = null,
      o = null;
    r !== void 0 && (i = "" + r),
      t.key !== void 0 && (i = "" + t.key),
      t.ref !== void 0 && (o = t.ref);
    for (n in t) Pl.call(t, n) && n !== "key" && n !== "ref" && (a[n] = t[n]);
    if (e && e.defaultProps)
      for (n in ((t = e.defaultProps), t)) a[n] === void 0 && (a[n] = t[n]);
    return {
      $$typeof: Dl,
      type: e,
      key: i,
      ref: o,
      props: a,
      _owner: Ll.current,
    };
  }
  cr.Fragment = Cl;
  cr.jsx = bo;
  cr.jsxs = bo;
});
var Al = pt((qf, So) => {
  "use strict";
  So.exports = xo();
});
var Te = oe(re());
Fe();
function X() {
  return (
    (X = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
    X.apply(this, arguments)
  );
}
var g = oe(re());
Fe();
var k = oe(re());
Fe();
var tr = class extends k.default.Component {
  constructor(t) {
    super(t), (this.state = { error: t.error || null, location: t.location });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location
      ? { error: t.error || null, location: t.location }
      : { error: t.error || r.error, location: r.location };
  }
  render() {
    return this.state.error
      ? k.default.createElement(this.props.component, {
          error: this.state.error,
        })
      : this.props.children;
  }
};
function ot({ error: e }) {
  return (
    k.default.useEffect(() => {
      console.error(e);
    }, [e]),
    k.default.createElement(
      "html",
      { lang: "en" },
      k.default.createElement(
        "head",
        null,
        k.default.createElement("meta", { charSet: "utf-8" }),
        k.default.createElement("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        }),
        k.default.createElement("title", null, "Application Error!"),
      ),
      k.default.createElement(
        "body",
        null,
        k.default.createElement(
          "main",
          { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } },
          k.default.createElement(
            "h1",
            { style: { fontSize: "24px" } },
            "Application Error",
          ),
          e.stack
            ? k.default.createElement(
                "pre",
                {
                  style: {
                    padding: "2rem",
                    background: "hsla(10, 50%, 50%, 0.1)",
                    color: "red",
                    overflow: "auto",
                  },
                },
                e.stack,
              )
            : null,
        ),
        k.default.createElement("script", {
          dangerouslySetInnerHTML: {
            __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
              );
            `,
          },
        }),
      ),
    )
  );
}
function Pa() {
  let e = Ve();
  if (we(e)) return k.default.createElement(Ma, { caught: e });
  if (e instanceof Error) return k.default.createElement(ot, { error: e });
  {
    let t =
      e == null
        ? "Unknown Error"
        : typeof e == "object" && "toString" in e
          ? e.toString()
          : JSON.stringify(e);
    return k.default.createElement(ot, { error: new Error(t) });
  }
}
var La = k.default.createContext(void 0);
function Ts() {
  return (0, k.useContext)(La);
}
function Aa({ catch: e, component: t, children: r }) {
  return e
    ? k.default.createElement(
        La.Provider,
        { value: e },
        k.default.createElement(t, null),
      )
    : k.default.createElement(k.default.Fragment, null, r);
}
function ja() {
  let e = Ts();
  return k.default.createElement(Ma, { caught: e });
}
function Ma({ caught: e }) {
  return k.default.createElement(
    "html",
    { lang: "en" },
    k.default.createElement(
      "head",
      null,
      k.default.createElement("meta", { charSet: "utf-8" }),
      k.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      }),
      k.default.createElement("title", null, "Unhandled Thrown Response!"),
    ),
    k.default.createElement(
      "body",
      null,
      k.default.createElement(
        "h1",
        { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } },
        e.status,
        " ",
        e.statusText,
      ),
      k.default.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: `
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws 404s (and other responses). Check out https://remix.run/guides/not-found for more information."
              );
            `,
        },
      }),
    ),
  );
}
function ve(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
Fe();
async function rr(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let r = await import(e.module);
    return (t[e.id] = r), r;
  } catch {
    return window.location.reload(), new Promise(() => {});
  }
}
function Fa(e, t, r) {
  let n = e
      .map((i) => {
        var o;
        let s = t[i.route.id];
        return (
          ((o = s.links) === null || o === void 0 ? void 0 : o.call(s)) || []
        );
      })
      .flat(1),
    a = Is(e, r);
  return Bs(n, a);
}
async function Ta(e) {
  if (!e.links) return;
  let t = e.links();
  if (!t) return;
  let r = [];
  for (let a of t)
    !nr(a) &&
      a.rel === "stylesheet" &&
      r.push({ ...a, rel: "preload", as: "style" });
  let n = r.filter(
    (a) =>
      (!a.media || window.matchMedia(a.media).matches) &&
      !document.querySelector(`link[rel="stylesheet"][href="${a.href}"]`),
  );
  await Promise.all(n.map(Us));
}
async function Us(e) {
  return new Promise((t) => {
    let r = document.createElement("link");
    Object.assign(r, e);
    function n() {
      document.head.contains(r) && document.head.removeChild(r);
    }
    (r.onload = () => {
      n(), t();
    }),
      (r.onerror = () => {
        n(), t();
      }),
      document.head.appendChild(r);
  });
}
function nr(e) {
  return e != null && typeof e.page == "string";
}
function ks(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === "preload" &&
        (typeof e.imageSrcSet == "string" ||
          typeof e.imagesrcset == "string") &&
        (typeof e.imageSizes == "string" || typeof e.imagesizes == "string")
      : typeof e.rel == "string" && typeof e.href == "string";
}
async function Ua(e, t, r) {
  return (
    await Promise.all(
      e.map(async (a) => {
        let i = await rr(t.routes[a.route.id], r);
        return i.links ? i.links() : [];
      }),
    )
  )
    .flat(1)
    .filter(ks)
    .filter((a) => a.rel === "stylesheet" || a.rel === "preload")
    .map((a) =>
      a.rel === "preload"
        ? { ...a, rel: "prefetch" }
        : { ...a, rel: "prefetch", as: "style" },
    );
}
function qr(e, t, r, n, a, i) {
  let o = Ba(e),
    s = (c, p) => (r[p] ? c.route.id !== r[p].route.id : !0),
    l = (c, p) => {
      var m;
      return (
        r[p].pathname !== c.pathname ||
        (((m = r[p].route.path) === null || m === void 0
          ? void 0
          : m.endsWith("*")) &&
          r[p].params["*"] !== c.params["*"])
      );
    };
  return i === "data" && a.search !== o.search
    ? t.filter((c, p) => {
        if (!n.routes[c.route.id].hasLoader) return !1;
        if (s(c, p) || l(c, p)) return !0;
        if (c.route.shouldRevalidate) {
          var E;
          let v = c.route.shouldRevalidate({
            currentUrl: new URL(a.pathname + a.search + a.hash, window.origin),
            currentParams:
              ((E = r[0]) === null || E === void 0 ? void 0 : E.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: c.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof v == "boolean") return v;
        }
        return !0;
      })
    : t.filter((c, p) => {
        let m = n.routes[c.route.id];
        return (i === "assets" || m.hasLoader) && (s(c, p) || l(c, p));
      });
}
function ka(e, t, r) {
  let n = Ba(e);
  return Qr(
    t
      .filter((a) => r.routes[a.route.id].hasLoader)
      .map((a) => {
        let { pathname: i, search: o } = n,
          s = new URLSearchParams(o);
        return s.set("_data", a.route.id), `${i}?${s}`;
      }),
  );
}
function Ia(e, t) {
  return Qr(
    e
      .map((r) => {
        let n = t.routes[r.route.id],
          a = [n.module];
        return n.imports && (a = a.concat(n.imports)), a;
      })
      .flat(1),
  );
}
function Is(e, t) {
  return Qr(
    e
      .map((r) => {
        let n = t.routes[r.route.id],
          a = [n.module];
        return n.imports && (a = a.concat(n.imports)), a;
      })
      .flat(1),
  );
}
function Qr(e) {
  return [...new Set(e)];
}
function Bs(e, t) {
  let r = new Set(),
    n = new Set(t);
  return e.reduce((a, i) => {
    if (!nr(i) && i.as === "script" && i.href && n.has(i.href)) return a;
    let s = JSON.stringify(i);
    return r.has(s) || (r.add(s), a.push(i)), a;
  }, []);
}
function Ba(e) {
  let t = ie(e);
  return t.search === void 0 && (t.search = ""), t;
}
var $s = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029",
  },
  Hs = /[&><\u2028\u2029]/g;
function Nt(e) {
  return e.replace(Hs, (t) => $s[t]);
}
function Zr(e) {
  return { __html: e };
}
function Ha() {
  let e = g.useContext(Ce);
  return (
    ve(
      e,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    e
  );
}
function Dt() {
  let e = g.useContext(Me);
  return (
    ve(
      e,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    e
  );
}
var Ct = g.createContext(void 0);
Ct.displayName = "Remix";
function Se() {
  let e = g.useContext(Ct);
  return ve(e, "You must render this element inside a <Remix> element"), e;
}
function za({ id: e }) {
  let { routeModules: t, future: r } = Se();
  ve(
    t,
    `Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`,
  );
  let { default: n, ErrorBoundary: a, CatchBoundary: i } = t[e];
  return (
    !n && (a || (!r.v2_errorBoundary && i)) && (n = Yt),
    ve(
      n,
      `Route "${e}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`,
    ),
    g.createElement(n, null)
  );
}
function Va({ id: e }) {
  let { future: t, routeModules: r } = Se();
  ve(
    r,
    `Cannot initialize 'routeModules'. This normally occurs when you have server code in your client modules.
Check this link for more details:
https://remix.run/pages/gotchas#server-code-in-client-bundles`,
  );
  let n = Ve(),
    { CatchBoundary: a, ErrorBoundary: i } = r[e];
  if (t.v2_errorBoundary) {
    if ((e === "root" && (i || (i = Pa)), i)) return g.createElement(i, null);
    throw n;
  }
  if ((e === "root" && (a || (a = ja), i || (i = ot)), we(n))) {
    let o = n;
    if (o != null && o.error && o.status !== 404 && i)
      return g.createElement(i, { error: o.error });
    if (a) return g.createElement(Aa, { catch: n, component: a });
  }
  if (n instanceof Error && i) return g.createElement(i, { error: n });
  throw n;
}
function Wa(e, t) {
  let [r, n] = g.useState(!1),
    [a, i] = g.useState(!1),
    {
      onFocus: o,
      onBlur: s,
      onMouseEnter: l,
      onMouseLeave: u,
      onTouchStart: c,
    } = t,
    p = g.useRef(null);
  g.useEffect(() => {
    if ((e === "render" && i(!0), e === "viewport")) {
      let v = (b) => {
          b.forEach((S) => {
            i(S.isIntersecting);
          });
        },
        w = new IntersectionObserver(v, { threshold: 0.5 });
      return (
        p.current && w.observe(p.current),
        () => {
          w.disconnect();
        }
      );
    }
  }, [e]);
  let m = () => {
      e === "intent" && n(!0);
    },
    E = () => {
      e === "intent" && (n(!1), i(!1));
    };
  return (
    g.useEffect(() => {
      if (r) {
        let v = setTimeout(() => {
          i(!0);
        }, 100);
        return () => {
          clearTimeout(v);
        };
      }
    }, [r]),
    [
      a,
      p,
      {
        onFocus: Ot(o, m),
        onBlur: Ot(s, E),
        onMouseEnter: Ot(l, m),
        onMouseLeave: Ot(u, E),
        onTouchStart: Ot(c, m),
      },
    ]
  );
}
var Ka = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ja = g.forwardRef(({ to: e, prefetch: t = "none", ...r }, n) => {
    let a = typeof e == "string" && Ka.test(e),
      i = He(e),
      [o, s, l] = Wa(t, r);
    return g.createElement(
      g.Fragment,
      null,
      g.createElement(_a, X({}, r, l, { ref: Ga(n, s), to: e })),
      o && !a ? g.createElement(ar, { page: i }) : null,
    );
  });
Ja.displayName = "NavLink";
var Xa = g.forwardRef(({ to: e, prefetch: t = "none", ...r }, n) => {
  let a = typeof e == "string" && Ka.test(e),
    i = He(e),
    [o, s, l] = Wa(t, r);
  return g.createElement(
    g.Fragment,
    null,
    g.createElement(Gr, X({}, r, l, { ref: Ga(n, s), to: e })),
    o && !a ? g.createElement(ar, { page: i }) : null,
  );
});
Xa.displayName = "Link";
function Ot(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
var zs =
  "\u26A0\uFE0F REMIX FUTURE CHANGE: The behavior of links `imagesizes` and `imagesrcset` will be changing in v2. Only the React camel case versions will be valid. Please change to `imageSizes` and `imageSrcSet`. For instructions on making this change see https://remix.run/docs/en/v1.15.0/pages/v2#links-imagesizes-and-imagesrcset";
function Vs() {
  let { manifest: e, routeModules: t } = Se(),
    { errors: r, matches: n } = Dt(),
    a = r ? n.slice(0, n.findIndex((o) => r[o.route.id]) + 1) : n,
    i = g.useMemo(() => Fa(a, t, e), [a, t, e]);
  return (
    g.useEffect(() => {
      i.some((o) => "imagesizes" in o || "imagesrcset" in o) && void 0;
    }, [i]),
    g.createElement(
      g.Fragment,
      null,
      i.map((o) => {
        if (nr(o)) return g.createElement(ar, X({ key: o.page }, o));
        let s = null;
        return (
          "useId" in g
            ? (o.imagesrcset &&
                ((o.imageSrcSet = s = o.imagesrcset), delete o.imagesrcset),
              o.imagesizes &&
                ((o.imageSizes = o.imagesizes), delete o.imagesizes))
            : (o.imageSrcSet &&
                ((o.imagesrcset = s = o.imageSrcSet), delete o.imageSrcSet),
              o.imageSizes &&
                ((o.imagesizes = o.imageSizes), delete o.imageSizes)),
          g.createElement(
            "link",
            X({ key: o.rel + (o.href || "") + (s || "") }, o),
          )
        );
      }),
    )
  );
}
function ar({ page: e, ...t }) {
  let { router: r } = Ha(),
    n = g.useMemo(() => se(r.routes, e), [r.routes, e]);
  return n
    ? g.createElement(Ks, X({ page: e, matches: n }, t))
    : (console.warn(`Tried to prefetch ${e} but no routes matched.`), null);
}
function Ws(e) {
  let { manifest: t, routeModules: r } = Se(),
    [n, a] = g.useState([]);
  return (
    g.useEffect(() => {
      let i = !1;
      return (
        Ua(e, t, r).then((o) => {
          i || a(o);
        }),
        () => {
          i = !0;
        }
      );
    }, [e, t, r]),
    n
  );
}
function Ks({ page: e, matches: t, ...r }) {
  let n = ne(),
    { manifest: a } = Se(),
    { matches: i } = Dt(),
    o = g.useMemo(() => qr(e, t, i, a, n, "data"), [e, t, i, a, n]),
    s = g.useMemo(() => qr(e, t, i, a, n, "assets"), [e, t, i, a, n]),
    l = g.useMemo(() => ka(e, o, a), [o, e, a]),
    u = g.useMemo(() => Ia(s, a), [s, a]),
    c = Ws(s);
  return g.createElement(
    g.Fragment,
    null,
    l.map((p) =>
      g.createElement(
        "link",
        X({ key: p, rel: "prefetch", as: "fetch", href: p }, r),
      ),
    ),
    u.map((p) =>
      g.createElement("link", X({ key: p, rel: "modulepreload", href: p }, r)),
    ),
    c.map((p) => g.createElement("link", X({ key: p.href }, p))),
  );
}
function Js() {
  let { routeModules: e } = Se(),
    { errors: t, matches: r, loaderData: n } = Dt(),
    a = ne(),
    i = t ? r.slice(0, r.findIndex((l) => t[l.route.id]) + 1) : r,
    o = {},
    s = {};
  for (let l of i) {
    let u = l.route.id,
      c = n[u],
      p = l.params,
      m = e[u];
    if (m.meta) {
      let E =
        typeof m.meta == "function"
          ? m.meta({ data: c, parentsData: s, params: p, location: a })
          : m.meta;
      if (E && Array.isArray(E))
        throw new Error(
          "The route at " +
            l.route.path +
            " returns an array. This is only supported with the `v2_meta` future flag in the Remix config. Either set the flag to `true` or update the route's meta function to return an object.\n\nTo reference the v1 meta function API, see https://remix.run/route/meta",
        );
      Object.assign(o, E);
    }
    s[u] = c;
  }
  return g.createElement(
    g.Fragment,
    null,
    Object.entries(o).map(([l, u]) => {
      if (!u) return null;
      if (["charset", "charSet"].includes(l))
        return g.createElement("meta", { key: "charSet", charSet: u });
      if (l === "title")
        return g.createElement("title", { key: "title" }, String(u));
      let c = /^(og|music|video|article|book|profile|fb):.+$/.test(l);
      return [u]
        .flat()
        .map((p) =>
          c
            ? g.createElement("meta", { property: l, content: p, key: l + p })
            : typeof p == "string"
              ? g.createElement("meta", { name: l, content: p, key: l + p })
              : g.createElement("meta", X({ key: l + JSON.stringify(p) }, p)),
        );
    }),
  );
}
function Xs() {
  let { routeModules: e } = Se(),
    { errors: t, matches: r, loaderData: n } = Dt(),
    a = ne(),
    i = t ? r.slice(0, r.findIndex((u) => t[u.route.id]) + 1) : r,
    o = [],
    s = null,
    l = [];
  for (let u = 0; u < i.length; u++) {
    let c = i[u],
      p = c.route.id,
      m = n[p],
      E = c.params,
      v = e[p],
      w = [],
      b = {
        id: p,
        data: m,
        meta: [],
        params: c.params,
        pathname: c.pathname,
        handle: c.route.handle,
        get route() {
          return (
            console.warn(
              "The meta function in " +
                c.route.path +
                " accesses the `route` property on `matches`. This is deprecated and will be removed in Remix version 2. See",
            ),
            c.route
          );
        },
      };
    if (
      ((l[u] = b),
      v != null && v.meta
        ? (w =
            typeof v.meta == "function"
              ? v.meta({ data: m, params: E, location: a, matches: l })
              : Array.isArray(v.meta)
                ? [...v.meta]
                : v.meta)
        : s && (w = [...s]),
      (w = w || []),
      !Array.isArray(w))
    )
      throw new Error(
        "The `v2_meta` API is enabled in the Remix config, but the route at " +
          c.route.path +
          ` returns an invalid value. In v2, all route meta functions must return an array of meta objects.

To reference the v1 meta function API, see https://remix.run/route/meta`,
      );
    (b.meta = w), (l[u] = b), (o = [...w]), (s = o);
  }
  return g.createElement(
    g.Fragment,
    null,
    o.flat().map((u) => {
      if (!u) return null;
      if ("tagName" in u) {
        let c = u.tagName;
        return (
          delete u.tagName,
          Ys(c)
            ? g.createElement(c, X({ key: JSON.stringify(u) }, u))
            : (console.warn(
                `A meta object uses an invalid tagName: ${c}. Expected either 'link' or 'meta'`,
              ),
              null)
        );
      }
      if ("title" in u)
        return g.createElement("title", { key: "title" }, String(u.title));
      if (
        ("charset" in u &&
          (u.charSet ?? (u.charSet = u.charset), delete u.charset),
        "charSet" in u && u.charSet != null)
      )
        return typeof u.charSet == "string"
          ? g.createElement("meta", { key: "charSet", charSet: u.charSet })
          : null;
      if ("script:ld+json" in u) {
        let c = null;
        try {
          c = JSON.stringify(u["script:ld+json"]);
        } catch {}
        return (
          c != null &&
          g.createElement("script", {
            key: "script:ld+json",
            type: "application/ld+json",
            dangerouslySetInnerHTML: {
              __html: JSON.stringify(u["script:ld+json"]),
            },
          })
        );
      }
      return g.createElement("meta", X({ key: JSON.stringify(u) }, u));
    }),
  );
}
function Ys(e) {
  return typeof e == "string" && /^(meta|link)$/.test(e);
}
function Gs() {
  let { future: e } = Se();
  return e != null && e.v2_meta
    ? g.createElement(Xs, null)
    : g.createElement(Js, null);
}
function Ya(e) {
  return g.createElement(zr, e);
}
var en = !1;
function qs(e) {
  let {
      manifest: t,
      serverHandoffString: r,
      abortDelay: n,
      serializeError: a,
    } = Se(),
    { router: i, static: o, staticContext: s } = Ha(),
    { matches: l } = Dt(),
    u = at();
  g.useEffect(() => {
    en = !0;
  }, []);
  let c = (N, f) => {
      let O;
      return (
        a && f instanceof Error ? (O = a(f)) : (O = f),
        `${JSON.stringify(N)}:__remixContext.p(!1, ${Nt(JSON.stringify(O))})`
      );
    },
    p = (N, f, O) => {
      let U;
      try {
        U = JSON.stringify(O);
      } catch (j) {
        return c(f, j);
      }
      return `${JSON.stringify(f)}:__remixContext.p(${Nt(U)})`;
    },
    m = (N, f, O) => {
      let U;
      return (
        a && O instanceof Error ? (U = a(O)) : (U = O),
        `__remixContext.r(${JSON.stringify(N)}, ${JSON.stringify(f)}, !1, ${Nt(JSON.stringify(U))})`
      );
    },
    E = (N, f, O) => {
      let U;
      try {
        U = JSON.stringify(O);
      } catch (j) {
        return m(N, f, j);
      }
      return `__remixContext.r(${JSON.stringify(N)}, ${JSON.stringify(f)}, ${Nt(U)})`;
    },
    v = [],
    w = g.useMemo(() => {
      var N;
      let f = s ? `window.__remixContext = ${r};` : " ",
        O = s?.activeDeferreds;
      f += O
        ? [
            "__remixContext.p = function(v,e,p,x) {",
            "  if (typeof e !== 'undefined') {",
            `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,
            "    p=Promise.reject(x);",
            "  } else {",
            "    p=Promise.resolve(v);",
            "  }",
            "  return p;",
            "};",
            "__remixContext.n = function(i,k) {",
            "  __remixContext.t = __remixContext.t || {};",
            "  __remixContext.t[i] = __remixContext.t[i] || {};",
            "  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});",
            typeof n == "number"
              ? `setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${n});`
              : "",
            "  return p;",
            "};",
            "__remixContext.r = function(i,k,v,e,p,x) {",
            "  p = __remixContext.t[i][k];",
            "  if (typeof e !== 'undefined') {",
            `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,
            "    p.e(x);",
            "  } else {",
            "    p.r(v);",
            "  }",
            "};",
          ].join(`
`) +
          Object.entries(O).map(([j, I]) => {
            let V = new Set(I.pendingKeys),
              W = I.deferredKeys.map((G) => {
                if (V.has(G))
                  return (
                    v.push(
                      g.createElement($a, {
                        key: `${j} | ${G}`,
                        deferredData: I,
                        routeId: j,
                        dataKey: G,
                        scriptProps: e,
                        serializeData: E,
                        serializeError: m,
                      }),
                    ),
                    `${JSON.stringify(G)}:__remixContext.n(${JSON.stringify(j)}, ${JSON.stringify(G)})`
                  );
                {
                  let K = I.data[G];
                  return typeof K._error < "u"
                    ? c(G, K._error)
                    : p(j, G, K._data);
                }
              }).join(`,
`);
            return `Object.assign(__remixContext.state.loaderData[${JSON.stringify(j)}], {${W}});`;
          }).join(`
`) +
          (v.length > 0 ? `__remixContext.a=${v.length};` : "")
        : "";
      let U = o
        ? `${(N = t.hmr) !== null && N !== void 0 && N.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ""}import ${JSON.stringify(t.url)};
${l.map(
  (j, I) =>
    `import * as route${I} from ${JSON.stringify(t.routes[j.route.id].module)};`,
).join(`
`)}
window.__remixRouteModules = {${l.map((j, I) => `${JSON.stringify(j.route.id)}:route${I}`).join(",")}};

import(${JSON.stringify(t.entry.module)});`
        : " ";
      return g.createElement(
        g.Fragment,
        null,
        g.createElement(
          "script",
          X({}, e, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: Zr(f),
            type: void 0,
          }),
        ),
        g.createElement(
          "script",
          X({}, e, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: Zr(U),
            type: "module",
            async: !0,
          }),
        ),
      );
    }, []);
  if (!o && typeof __remixContext == "object" && __remixContext.a)
    for (let N = 0; N < __remixContext.a; N++)
      v.push(
        g.createElement($a, {
          key: N,
          scriptProps: e,
          serializeData: E,
          serializeError: m,
        }),
      );
  let b = g.useMemo(() => {
      if (u.location) {
        let N = se(i.routes, u.location);
        return ve(N, `No routes match path "${u.location.pathname}"`), N;
      }
      return [];
    }, [u.location, i.routes]),
    S = l
      .concat(b)
      .map((N) => {
        let f = t.routes[N.route.id];
        return (f.imports || []).concat([f.module]);
      })
      .flat(1),
    M = en ? [] : t.entry.imports.concat(S);
  return en
    ? null
    : g.createElement(
        g.Fragment,
        null,
        g.createElement("link", {
          rel: "modulepreload",
          href: t.entry.module,
          crossOrigin: e.crossOrigin,
        }),
        Zs(M).map((N) =>
          g.createElement("link", {
            key: N,
            rel: "modulepreload",
            href: N,
            crossOrigin: e.crossOrigin,
          }),
        ),
        w,
        v,
      );
}
function $a({
  dataKey: e,
  deferredData: t,
  routeId: r,
  scriptProps: n,
  serializeData: a,
  serializeError: i,
}) {
  return (
    typeof document > "u" &&
      t &&
      e &&
      r &&
      ve(
        t.pendingKeys.includes(e),
        `Deferred data for route ${r} with key ${e} was not pending but tried to render a script for it.`,
      ),
    g.createElement(
      g.Suspense,
      {
        fallback:
          typeof document > "u" && t && e && r
            ? null
            : g.createElement(
                "script",
                X({}, n, {
                  async: !0,
                  suppressHydrationWarning: !0,
                  dangerouslySetInnerHTML: { __html: " " },
                }),
              ),
      },
      typeof document > "u" && t && e && r
        ? g.createElement(Ya, {
            resolve: t.data[e],
            errorElement: g.createElement(Qs, {
              dataKey: e,
              routeId: r,
              scriptProps: n,
              serializeError: i,
            }),
            children: (o) =>
              g.createElement(
                "script",
                X({}, n, {
                  async: !0,
                  suppressHydrationWarning: !0,
                  dangerouslySetInnerHTML: { __html: a(r, e, o) },
                }),
              ),
          })
        : g.createElement(
            "script",
            X({}, n, {
              async: !0,
              suppressHydrationWarning: !0,
              dangerouslySetInnerHTML: { __html: " " },
            }),
          ),
    )
  );
}
function Qs({ dataKey: e, routeId: t, scriptProps: r, serializeError: n }) {
  let a = Xt();
  return g.createElement(
    "script",
    X({}, r, {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: n(t, e, a) },
    }),
  );
}
function Zs(e) {
  return [...new Set(e)];
}
function tn() {
  let { routeModules: e } = Se(),
    t = _t();
  return g.useMemo(
    () =>
      t.map((r) => ({
        id: r.id,
        pathname: r.pathname,
        params: r.params,
        data: r.data,
        handle: e[r.id].handle,
      })),
    [t, e],
  );
}
function el() {
  return Ir();
}
var tl = () => null;
function Ga(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
rt();
function qa(e) {
  if (!e) return null;
  let t = Object.entries(e),
    r = {};
  for (let [n, a] of t)
    if (a && a.__type === "RouteErrorResponse")
      r[n] = new je(a.status, a.statusText, a.data, a.internal === !0);
    else if (a && a.__type === "Error") {
      if (a.__subType) {
        let i = window[a.__subType];
        if (typeof i == "function")
          try {
            let o = new i(a.message);
            (o.stack = a.stack), (r[n] = o);
          } catch {}
      }
      if (r[n] == null) {
        let i = new Error(a.message);
        (i.stack = a.stack), (r[n] = i);
      }
    } else r[n] = a;
  return r;
}
var nn = oe(re());
Fe();
rt();
function Za(e) {
  return e.headers.get("X-Remix-Catch") != null;
}
function rl(e) {
  return e.headers.get("X-Remix-Error") != null;
}
function nl(e) {
  return (
    al(e) &&
    e.status >= 400 &&
    e.headers.get("X-Remix-Error") == null &&
    e.headers.get("X-Remix-Catch") == null &&
    e.headers.get("X-Remix-Response") == null
  );
}
function eo(e) {
  return e.headers.get("X-Remix-Redirect") != null;
}
function to(e) {
  var t;
  return !!(
    (t = e.headers.get("Content-Type")) !== null &&
    t !== void 0 &&
    t.match(/text\/remix-deferred/)
  );
}
function al(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
async function rn(e, t, r = 0) {
  let n = new URL(e.url);
  n.searchParams.set("_data", t);
  let a = { signal: e.signal };
  if (e.method !== "GET") {
    a.method = e.method;
    let s = e.headers.get("Content-Type");
    s && /\bapplication\/json\b/.test(s)
      ? ((a.headers = { "Content-Type": s }),
        (a.body = JSON.stringify(await e.json())))
      : s && /\btext\/plain\b/.test(s)
        ? ((a.headers = { "Content-Type": s }), (a.body = await e.text()))
        : s && /\bapplication\/x-www-form-urlencoded\b/.test(s)
          ? (a.body = new URLSearchParams(await e.text()))
          : (a.body = await e.formData());
  }
  r > 0 && (await new Promise((s) => setTimeout(s, 5 ** r * 10)));
  let i = window.__remixRevalidation,
    o = await fetch(n.href, a).catch((s) => {
      if (
        typeof i == "number" &&
        i === window.__remixRevalidation &&
        s?.name === "TypeError" &&
        r < 3
      )
        return rn(e, t, r + 1);
      throw s;
    });
  if (rl(o)) {
    let s = await o.json(),
      l = new Error(s.message);
    return (l.stack = s.stack), l;
  }
  if (nl(o)) {
    let s = await o.text(),
      l = new Error(s);
    return (l.stack = void 0), l;
  }
  return o;
}
var ol = "__deferred_promise:";
async function ro(e) {
  if (!e)
    throw new Error("parseDeferredReadableStream requires stream argument");
  let t,
    r = {};
  try {
    let n = il(e),
      i = (await n.next()).value;
    if (!i) throw new Error("no critical data");
    let o = JSON.parse(i);
    if (typeof o == "object" && o !== null)
      for (let [s, l] of Object.entries(o))
        typeof l != "string" ||
          !l.startsWith(ol) ||
          ((t = t || {}),
          (t[s] = new Promise((u, c) => {
            r[s] = {
              resolve: (p) => {
                u(p), delete r[s];
              },
              reject: (p) => {
                c(p), delete r[s];
              },
            };
          })));
    return (
      (async () => {
        try {
          for await (let s of n) {
            let [l, ...u] = s.split(":"),
              c = u.join(":"),
              p = JSON.parse(c);
            if (l === "data")
              for (let [m, E] of Object.entries(p)) r[m] && r[m].resolve(E);
            else if (l === "error")
              for (let [m, E] of Object.entries(p)) {
                let v = new Error(E.message);
                (v.stack = E.stack), r[m] && r[m].reject(v);
              }
          }
          for (let [s, l] of Object.entries(r))
            l.reject(new Ee(`Deferred ${s} will never be resolved`));
        } catch (s) {
          for (let l of Object.values(r)) l.reject(s);
        }
      })(),
      new Bt({ ...o, ...t })
    );
  } catch (n) {
    for (let a of Object.values(r)) a.reject(n);
    throw n;
  }
}
async function* il(e) {
  let t = e.getReader(),
    r = [],
    n = [],
    a = !1,
    i = new TextEncoder(),
    o = new TextDecoder(),
    s = async () => {
      if (n.length > 0) return n.shift();
      for (; !a && n.length === 0; ) {
        let u = await t.read();
        if (u.done) {
          a = !0;
          break;
        }
        r.push(u.value);
        try {
          let p = o.decode(Qa(...r)).split(`

`);
          if (
            (p.length >= 2 &&
              (n.push(...p.slice(0, -1)),
              (r = [
                i.encode(
                  p.slice(-1).join(`

`),
                ),
              ])),
            n.length > 0)
          )
            break;
        } catch {
          continue;
        }
      }
      return (
        n.length > 0 ||
          (r.length > 0 &&
            ((n = o
              .decode(Qa(...r))
              .split(
                `

`,
              )
              .filter((c) => c)),
            (r = []))),
        n.shift()
      );
    },
    l = await s();
  for (; l; ) yield l, (l = await s());
}
function Qa(...e) {
  let t = new Uint8Array(e.reduce((n, a) => n + a.length, 0)),
    r = 0;
  for (let n of e) t.set(n, r), (r += n.length);
  return t;
}
function sl(e) {
  let t = {};
  return (
    Object.values(e).forEach((r) => {
      let n = r.parentId || "";
      t[n] || (t[n] = []), t[n].push(r);
    }),
    t
  );
}
function an(e, t, r, n = "", a = sl(e), i) {
  return (a[n] || []).map((o) => {
    let s =
        r.v2_errorBoundary === !0
          ? o.id === "root" || o.hasErrorBoundary
          : o.id === "root" || o.hasCatchBoundary || o.hasErrorBoundary,
      l = {
        caseSensitive: o.caseSensitive,
        element: nn.createElement(za, { id: o.id }),
        errorElement: s ? nn.createElement(Va, { id: o.id }) : void 0,
        id: o.id,
        index: o.index,
        path: o.path,
        handle: void 0,
        loader: no(o, t, !1),
        action: no(o, t, !0),
        shouldRevalidate: ll(o, t, i),
      },
      u = an(e, t, r, o.id, a, i);
    return u.length > 0 && (l.children = u), l;
  });
}
function ll(e, t, r) {
  let n = !1;
  return function (a) {
    let i = t[e.id];
    return (
      ve(i, `Expected route module to be loaded for ${e.id}`),
      r !== void 0 && !n
        ? ((n = !0), r.has(e.id))
        : i.shouldRevalidate
          ? i.shouldRevalidate(a)
          : a.defaultShouldRevalidate
    );
  };
}
async function ul(e, t) {
  let r = await rr(e, t);
  return await Ta(r), r;
}
function no(e, t, r) {
  return async ({ request: n }) => {
    let a = ul(e, t);
    try {
      if (r && !e.hasAction) {
        let o = `Route "${e.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`;
        throw (console.error(o), new Error(o));
      } else if (!r && !e.hasLoader) return null;
      let i = await rn(n, e.id);
      if (i instanceof Error) throw i;
      if (eo(i)) throw cl(i);
      if (Za(i)) throw i;
      return to(i) && i.body ? await ro(i.body) : i;
    } finally {
      await a;
    }
  };
}
function cl(e) {
  let t = parseInt(e.headers.get("X-Remix-Status"), 10) || 302,
    r = e.headers.get("X-Remix-Redirect"),
    n = {},
    a = e.headers.get("X-Remix-Revalidate");
  return a && (n["X-Remix-Revalidate"] = a), zt(r, { status: t, headers: n });
}
var it;
var on,
  Uu = new Promise((e) => {
    on = e;
  }).catch(() => {});
function fl(e) {
  if (!it) {
    let n = an(
        window.__remixManifest.routes,
        window.__remixRouteModules,
        window.__remixContext.future,
      ),
      a = window.__remixContext.state;
    a && a.errors && (a = { ...a, errors: qa(a.errors) }),
      (it = Sa(n, {
        hydrationData: a,
        future: {
          v7_normalizeFormMethod:
            window.__remixContext.future.v2_normalizeFormMethod,
        },
      }));
    let i = window.__remixContext.url,
      o = window.location.pathname;
    if (i !== o) {
      let s = `Initial URL (${i}) does not match URL at time of hydration (${o}), reloading page...`;
      console.error(s), window.location.reload();
    }
    on && on(it);
  }
  let [t, r] = Te.useState(it.state.location);
  return (
    Te.useLayoutEffect(
      () =>
        it.subscribe((n) => {
          n.location !== t && r(n.location);
        }),
      [t],
    ),
    Te.createElement(
      Ct.Provider,
      {
        value: {
          manifest: window.__remixManifest,
          routeModules: window.__remixRouteModules,
          future: window.__remixContext.future,
        },
      },
      Te.createElement(
        tr,
        { location: t, component: ot },
        Te.createElement($r, {
          router: it,
          fallbackElement: null,
          future: { v7_startTransition: !0 },
        }),
      ),
    )
  );
}
Fe();
var or = oe(re());
Fe();
var ao = "positions";
function dl({ getKey: e, ...t }) {
  let r = ne(),
    n = tn();
  Ca({ getKey: e, storageKey: ao });
  let a = or.useMemo(() => {
      if (!e) return null;
      let o = e(r, n);
      return o !== r.key ? o : null;
    }, []),
    i = ((o, s) => {
      if (!window.history.state || !window.history.state.key) {
        let l = Math.random().toString(32).slice(2);
        window.history.replaceState({ key: l }, "");
      }
      try {
        let u = JSON.parse(sessionStorage.getItem(o) || "{}")[
          s || window.history.state.key
        ];
        typeof u == "number" && window.scrollTo(0, u);
      } catch (l) {
        console.error(l), sessionStorage.removeItem(o);
      }
    }).toString();
  return or.createElement(
    "script",
    X({}, t, {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: {
        __html: `(${i})(${JSON.stringify(ao)}, ${JSON.stringify(a)})`,
      },
    }),
  );
}
var lr = oe(re(), 1);
function Re(e) {
  return (
    (Re =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Re(e)
  );
}
function sn(e, t) {
  if (Re(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Re(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Pt(e) {
  var t = sn(e, "string");
  return Re(t) == "symbol" ? t : String(t);
}
function _e(e, t, r) {
  return (
    (t = Pt(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function ln(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oo(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, Pt(n.key), n);
  }
}
function un(e, t, r) {
  return (
    t && oo(e.prototype, t),
    r && oo(e, r),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
var fo = oe(re(), 1);
var pl =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  hl = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "\xA9",
    "&#169;": "\xA9",
    "&reg;": "\xAE",
    "&#174;": "\xAE",
    "&hellip;": "\u2026",
    "&#8230;": "\u2026",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  ml = function (t) {
    return hl[t];
  },
  io = function (t) {
    return t.replace(pl, ml);
  };
function so(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function lo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? so(Object(r), !0).forEach(function (n) {
          _e(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : so(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var cn = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: io,
};
function ir() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  cn = lo(lo({}, cn), e);
}
function Lt() {
  return cn;
}
var uo;
function sr(e) {
  uo = e;
}
function We() {
  return uo;
}
var co = {
  type: "3rdParty",
  init: function (t) {
    ir(t.options.react), sr(t);
  },
};
var Ke = (0, fo.createContext)(),
  po = (function () {
    function e() {
      ln(this, e), (this.usedNamespaces = {});
    }
    return (
      un(e, [
        {
          key: "addUsedNamespaces",
          value: function (r) {
            var n = this;
            r.forEach(function (a) {
              n.usedNamespaces[a] || (n.usedNamespaces[a] = !0);
            });
          },
        },
        {
          key: "getUsedNamespaces",
          value: function () {
            return Object.keys(this.usedNamespaces);
          },
        },
      ]),
      e
    );
  })();
function yl(e) {
  var t = e.i18n,
    r = e.defaultNS,
    n = e.children,
    a = (0, lr.useMemo)(
      function () {
        return { i18n: t, defaultNS: r };
      },
      [t, r],
    );
  return (0, lr.createElement)(Ke.Provider, { value: a }, n);
}
function fn(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    a,
    i;
  for (i = 0; i < n.length; i++)
    (a = n[i]), !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function st(e, t) {
  if (e == null) return {};
  var r = fn(e, t),
    n,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      (n = i[a]),
        !(t.indexOf(n) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, n) &&
          (r[n] = e[n]);
  }
  return r;
}
var El = oe(re(), 1);
var hn = oe(re(), 1);
var gl = oe(mo());
function go() {
  if (console && console.warn) {
    for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    typeof r[0] == "string" && (r[0] = "react-i18next:: ".concat(r[0])),
      (e = console).warn.apply(e, r);
  }
}
var yo = {};
function At() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  (typeof t[0] == "string" && yo[t[0]]) ||
    (typeof t[0] == "string" && (yo[t[0]] = new Date()), go.apply(void 0, t));
}
var vo = function (t, r) {
  return function () {
    if (t.isInitialized) r();
    else {
      var n = function a() {
        setTimeout(function () {
          t.off("initialized", a);
        }, 0),
          r();
      };
      t.on("initialized", n);
    }
  };
};
function dn(e, t, r) {
  e.loadNamespaces(t, vo(e, r));
}
function pn(e, t, r, n) {
  typeof r == "string" && (r = [r]),
    r.forEach(function (a) {
      e.options.ns.indexOf(a) < 0 && e.options.ns.push(a);
    }),
    e.loadLanguages(t, vo(e, n));
}
function vl(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    n = t.languages[0],
    a = t.options ? t.options.fallbackLng : !1,
    i = t.languages[t.languages.length - 1];
  if (n.toLowerCase() === "cimode") return !0;
  var o = function (l, u) {
    var c = t.services.backendConnector.state["".concat(l, "|").concat(u)];
    return c === -1 || c === 2;
  };
  return r.bindI18n &&
    r.bindI18n.indexOf("languageChanging") > -1 &&
    t.services.backendConnector.backend &&
    t.isLanguageChangingTo &&
    !o(t.isLanguageChangingTo, e)
    ? !1
    : !!(
        t.hasResourceBundle(n, e) ||
        !t.services.backendConnector.backend ||
        (t.options.resources && !t.options.partialBundledLanguages) ||
        (o(n, e) && (!a || o(i, e)))
      );
}
function Ro(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!t.languages || !t.languages.length)
    return At("i18n.languages were undefined or empty", t.languages), !0;
  var n = t.options.ignoreJSONStructure !== void 0;
  return n
    ? t.hasLoadedNamespace(e, {
        lng: r.lng,
        precheck: function (i, o) {
          if (
            r.bindI18n &&
            r.bindI18n.indexOf("languageChanging") > -1 &&
            i.services.backendConnector.backend &&
            i.isLanguageChangingTo &&
            !o(i.isLanguageChangingTo, e)
          )
            return !1;
        },
      })
    : vl(e, t, r);
}
function mn(e) {
  if (Array.isArray(e)) return e;
}
function yn(e, t) {
  var r =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (r != null) {
    var n,
      a,
      i,
      o,
      s = [],
      l = !0,
      u = !1;
    try {
      if (((i = (r = r.call(e)).next), t === 0)) {
        if (Object(r) !== r) return;
        l = !1;
      } else
        for (
          ;
          !(l = (n = i.call(r)).done) && (s.push(n.value), s.length !== t);
          l = !0
        );
    } catch (c) {
      (u = !0), (a = c);
    } finally {
      try {
        if (!l && r.return != null && ((o = r.return()), Object(o) !== o))
          return;
      } finally {
        if (u) throw a;
      }
    }
    return s;
  }
}
function ur(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function gn(e, t) {
  if (e) {
    if (typeof e == "string") return ur(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === "Object" && e.constructor && (r = e.constructor.name),
      r === "Map" || r === "Set")
    )
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return ur(e, t);
  }
}
function vn() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jt(e, t) {
  return mn(e) || yn(e, t) || gn(e, t) || vn();
}
var pe = oe(re(), 1);
function Eo(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t &&
      (n = n.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, n);
  }
  return r;
}
function Rn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Eo(Object(r), !0).forEach(function (n) {
          _e(e, n, r[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Eo(Object(r)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
          });
  }
  return e;
}
var wl = function (t, r) {
  var n = (0, pe.useRef)();
  return (
    (0, pe.useEffect)(
      function () {
        n.current = r ? n.current : t;
      },
      [t, r],
    ),
    n.current
  );
};
function En(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = t.i18n,
    n = (0, pe.useContext)(Ke) || {},
    a = n.i18n,
    i = n.defaultNS,
    o = r || a || We();
  if ((o && !o.reportNamespaces && (o.reportNamespaces = new po()), !o)) {
    At(
      "You will need to pass in an i18next instance by using initReactI18next",
    );
    var s = function (V, W) {
        return typeof W == "string"
          ? W
          : W && Re(W) === "object" && typeof W.defaultValue == "string"
            ? W.defaultValue
            : Array.isArray(V)
              ? V[V.length - 1]
              : V;
      },
      l = [s, {}, !1];
    return (l.t = s), (l.i18n = {}), (l.ready = !1), l;
  }
  o.options.react &&
    o.options.react.wait !== void 0 &&
    At(
      "It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.",
    );
  var u = Rn(Rn(Rn({}, Lt()), o.options.react), t),
    c = u.useSuspense,
    p = u.keyPrefix,
    m = e || i || (o.options && o.options.defaultNS);
  (m = typeof m == "string" ? [m] : m || ["translation"]),
    o.reportNamespaces.addUsedNamespaces &&
      o.reportNamespaces.addUsedNamespaces(m);
  var E =
    (o.isInitialized || o.initializedStoreOnce) &&
    m.every(function (I) {
      return Ro(I, o, u);
    });
  function v() {
    return o.getFixedT(t.lng || null, u.nsMode === "fallback" ? m : m[0], p);
  }
  var w = (0, pe.useState)(v),
    b = jt(w, 2),
    S = b[0],
    M = b[1],
    N = m.join();
  t.lng && (N = "".concat(t.lng).concat(N));
  var f = wl(N),
    O = (0, pe.useRef)(!0);
  (0, pe.useEffect)(
    function () {
      var I = u.bindI18n,
        V = u.bindI18nStore;
      (O.current = !0),
        !E &&
          !c &&
          (t.lng
            ? pn(o, t.lng, m, function () {
                O.current && M(v);
              })
            : dn(o, m, function () {
                O.current && M(v);
              })),
        E && f && f !== N && O.current && M(v);
      function W() {
        O.current && M(v);
      }
      return (
        I && o && o.on(I, W),
        V && o && o.store.on(V, W),
        function () {
          (O.current = !1),
            I &&
              o &&
              I.split(" ").forEach(function (G) {
                return o.off(G, W);
              }),
            V &&
              o &&
              V.split(" ").forEach(function (G) {
                return o.store.off(G, W);
              });
        }
      );
    },
    [o, N],
  );
  var U = (0, pe.useRef)(!0);
  (0, pe.useEffect)(
    function () {
      O.current && !U.current && M(v), (U.current = !1);
    },
    [o, p],
  );
  var j = [S, o, E];
  if (((j.t = S), (j.i18n = o), (j.ready = E), E || (!E && !c))) return j;
  throw new Promise(function (I) {
    t.lng
      ? pn(o, t.lng, m, function () {
          return I();
        })
      : dn(o, m, function () {
          return I();
        });
  });
}
var wo = oe(re(), 1);
var Nl = oe(re(), 1);
var xl = oe(re(), 1);
export {
  re as a,
  we as b,
  ne as c,
  Ve as d,
  Yt as e,
  Cs as f,
  js as g,
  Oa as h,
  Vs as i,
  Gs as j,
  qs as k,
  el as l,
  tl as m,
  fl as n,
  dl as o,
  Re as p,
  ln as q,
  un as r,
  _e as s,
  mn as t,
  ur as u,
  gn as v,
  vn as w,
  st as x,
  We as y,
  co as z,
  jt as A,
  En as B,
  yl as C,
  Al as D,
};
/*! Bundled license information:

@remix-run/router/dist/router.js:
  (**
   * @remix-run/router v1.7.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router/dist/index.js:
  (**
   * React Router v6.14.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router-dom/dist/index.js:
  (**
   * React Router DOM v6.14.2
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/_virtual/_rollupPluginBabelHelpers.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/errorBoundaries.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/invariant.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/routeModules.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/links.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/markup.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/components.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/errors.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/data.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/routes.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/browser.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/scroll-restoration.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/index.js:
  (**
   * @remix-run/react v1.19.3
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
//# sourceMappingURL=https://job-boards.cdn.greenhouse.io/build/_shared/chunk-N4MC5J4H.js.map
