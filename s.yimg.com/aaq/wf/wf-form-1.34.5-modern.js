!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define("wafer-form", [], t)
      : "object" == typeof exports
        ? (exports["wafer-form"] = t())
        : ((e.wafer = e.wafer || {}),
          (e.wafer.wafers = e.wafer.wafers || {}),
          (e.wafer.wafers["wafer-form"] = t()));
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var i = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
    }
    var r = window.webpackJsonpwafer_wafers_wafer_form;
    window.webpackJsonpwafer_wafers_wafer_form = function (t, n, o) {
      for (var a, s, u = 0, l = []; u < t.length; u++)
        (s = t[u]), i[s] && l.push(i[s][0]), (i[s] = 0);
      for (a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
      for (r && r(t, n, o); l.length; ) l.shift()();
    };
    var n = {},
      i = { 1: 0, 2: 0 };
    return (
      (t.e = function (e) {
        function r() {
          (s.onerror = s.onload = null), clearTimeout(u);
          var t = i[e];
          0 !== t &&
            (t && t[1](new Error("Loading chunk " + e + " failed.")),
            (i[e] = void 0));
        }
        var n = i[e];
        if (0 === n)
          return new Promise(function (e) {
            e();
          });
        if (n) return n[2];
        var o = new Promise(function (t, r) {
          n = i[e] = [t, r];
        });
        n[2] = o;
        var a = document.getElementsByTagName("head")[0],
          s = document.createElement("script");
        (s.type = "text/javascript"),
          (s.charset = "utf-8"),
          (s.async = !0),
          (s.timeout = 12e4),
          t.nc && s.setAttribute("nonce", t.nc),
          (s.src =
            t.p +
            "wf-form-1.34.5-modern-" +
            { 0: "4c64949957" }[e] +
            ".chunk.js");
        var u = setTimeout(r, 12e4);
        return (s.onerror = s.onload = r), a.appendChild(s), o;
      }),
      (t.m = e),
      (t.c = n),
      (t.d = function (e, r, n) {
        t.o(e, r) ||
          Object.defineProperty(e, r, {
            configurable: !1,
            enumerable: !0,
            get: n,
          });
      }),
      (t.n = function (e) {
        var r =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(r, "a", r), r;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = "https://s.yimg.com/aaq/wf/"),
      (t.oe = function (e) {
        throw e;
      }),
      t((t.s = "./src/entry.js"))
    );
  })({
    "./src/entry.js": function (e, t, r) {
      "use strict";
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function i(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function o(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function s(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function u(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function, not " +
              typeof t,
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
          t &&
            (Object.setPrototypeOf
              ? Object.setPrototypeOf(e, t)
              : (e.__proto__ = t));
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      var l =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          },
        c = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          }
          return function (t, r, n) {
            return r && e(t.prototype, r), n && e(t, n), t;
          };
        })(),
        f = function e(t, r, n) {
          null === t && (t = Function.prototype);
          var i = Object.getOwnPropertyDescriptor(t, r);
          if (void 0 === i) {
            var o = Object.getPrototypeOf(t);
            return null === o ? void 0 : e(o, r, n);
          }
          if ("value" in i) return i.value;
          var a = i.get;
          if (void 0 !== a) return a.call(n);
        },
        d = window.wafer,
        m = d.base,
        h = d.constants,
        p = d.utils,
        v = d.WaferBaseClass,
        b = h.ATTR_PREFIX,
        g = p.bindEvent,
        y = p.clearAndSetInnerHTML,
        w = p.convertNodeListToArray,
        _ = p.fetchWithCache,
        E = p.findAncestor,
        A = p.getElementsByAttrValues,
        C = p.unbindEvent,
        O = p.urlify,
        k = ["handleSubmit", "handleOnChange", "handleOnSubmit"],
        L = ["action", "focus"],
        T = "wafer-form-boundary-error",
        j = "function" == typeof document.createElement("input").checkValidity,
        P = (function (e) {
          function t(e) {
            var r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              o = r.errorClass,
              a = r.selector,
              s = r.successClass;
            n(this, t);
            var u = i(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(
                  this,
                  e,
                  { errorClass: o, selector: a, successClass: s },
                  { STATE_ATTRS: L },
                ),
              ),
              c = e.getAttribute("action"),
              f = e.getAttribute(b + "boundary"),
              d = e.getAttribute(b + "boundary-error-class") || T,
              m = e.getAttribute(b + "cache"),
              h = e.getAttribute(b + "credentials"),
              p = e.getAttribute(b + "critical"),
              v = e.getAttribute(b + "success-class"),
              g = e.getAttribute(b + "custom-event"),
              y = e.getAttribute(b + "form-type"),
              _ = e.getAttribute(b + "mode"),
              C = w(e.getElementsByTagName("input")),
              O = (e.getAttribute("method") || "get").toUpperCase(),
              j = w(e.getElementsByTagName("select")),
              P = e.getAttribute(b + "result-selector"),
              S = e.getAttribute(b + "target"),
              I = e.getAttribute(b + "focus"),
              F = e.getAttribute(b + "trigger") || "",
              x = e.getAttribute(b + "timeout"),
              V = f && E(e, f),
              N = A("data-wf-trigger", ["change", "click"], e),
              W = N.change,
              B = N.click,
              q = [];
            return (
              C.forEach(function (e) {
                var t = e.getAttribute("type");
                "submit" !== t && "button" !== t && q.push(e);
              }),
              j.forEach(function (e) {
                q.push(e);
              }),
              (q = q.concat(w(e.getElementsByTagName("textarea")))),
              B.forEach(function (e) {
                e.classList.add("trigger-submit");
              }),
              (u._util = l({}, u._util, {
                action: c,
                boundary: f,
                cache: null === m || void 0 === m ? 0 : Number(m),
                critical: p,
                customSuccessClass: v,
                targetElem: S && (V || document.body).querySelector(S),
                boundaryElem: V,
                boundaryErrorClass: d,
                trigger: F,
                timeout: null === x || void 0 === x ? 6e3 : Number(x),
                type: y,
                credentials: h,
                elem: e,
                elemsWithOnChange: W,
                elemsWithValues: q,
                errorClass: o,
                focus: null === I || void 0 === I ? 0 : Number(I),
                hasCustomEvent: null === g || void 0 === g ? 0 : Number(g),
                inputElems: C,
                method: O,
                mode: _,
                pending: !1,
                resultSelector: P,
                selector: a,
                successClass: s,
              })),
              (u._state = { submitAllowed: !0 }),
              k.forEach(function (e) {
                u[e] = u[e].bind(u);
              }),
              u.addEventListeners(),
              I && u.focus(),
              "onLoad" === F && u.submitForm(),
              u
            );
          }
          return (
            o(t, e),
            c(t, [
              {
                key: "removeInputEvents",
                value: function () {
                  var e = this;
                  this._util.inputElems.forEach(function (t) {
                    t.hasAttribute("required") &&
                      (C(t, "invalid", e.handleInvalidInput),
                      C(t, "change", e.handleInputChange),
                      C(t, "keydown", e.handleInputChange, { passive: !1 }));
                  });
                },
              },
              {
                key: "addInputEvents",
                value: function () {
                  var e = this,
                    t = this._util.inputElems;
                  (this.handleInvalidInput =
                    this.handleInvalidInput.bind(this)),
                    (this.handleInputChange =
                      this.handleInputChange.bind(this)),
                    t.forEach(function (t) {
                      t.hasAttribute("required") &&
                        (g(t, "invalid", e.handleInvalidInput),
                        g(t, "change", e.handleInputChange),
                        g(t, "keydown", e.handleInputChange, { passive: !1 }));
                    });
                },
              },
              {
                key: "addEventListeners",
                value: function () {
                  var e = this,
                    t = this._util,
                    r = t.elem;
                  t.elemsWithOnChange.forEach(function (t) {
                    g(t, "change", e.handleOnChange);
                  }),
                    g(r, "submit", this.handleOnSubmit, { passive: !1 }),
                    this.addInputEvents();
                },
              },
              {
                key: "handleElementWithValue",
                value: function (e) {
                  var t = this;
                  if (
                    "weather" === e.getAttribute(b + "ac-type") ||
                    "weather" === e.getAttribute(b + "lp-type")
                  ) {
                    var r = e.getAttribute("data-user-input"),
                      n = e.getAttribute("data-value"),
                      i = e.value,
                      o = n || i;
                    if (r || o === i) {
                      var a =
                        e.getAttribute("data-wf-ac-url") ||
                        e.getAttribute("data-wf-lp-url");
                      if (a)
                        return _(a.replace("{term}", i), {
                          cache: 1,
                          cacheStrategy: "cacheFirst",
                          useRid: 0,
                        })
                          .then(function (n) {
                            if (!t._destroyed) {
                              var i = e.getAttribute(b + "lp-saved-url"),
                                a = n[0];
                              if (!a) return e;
                              var s = a.woeid;
                              return (
                                (s += ""),
                                e.setAttribute("data-value", s),
                                e.setAttribute("data-user-input", o),
                                i
                                  ? _(i, {
                                      body: JSON.stringify({
                                        requests: {
                                          g0: {
                                            resource:
                                              "WeatherLocationService.favoriteLocation",
                                            operation: "create",
                                            params: { woeid: s, term: r },
                                          },
                                        },
                                      }),
                                    }).catch(function () {})
                                  : e
                              );
                            }
                          })
                          .then(function () {
                            return e;
                          })
                          .catch(function () {
                            return e;
                          });
                    }
                  }
                  return e;
                },
              },
              {
                key: "focus",
                value: function () {
                  var e = this;
                  if (!this._util.elementToFocus) {
                    var t = w(this._util.elem.getElementsByTagName("input"))[0];
                    if (!t) return null;
                    this._util.elementToFocus = t;
                  }
                  this._util.elementToFocus &&
                    setTimeout(function () {
                      e._util.elementToFocus.focus();
                    }, 100);
                },
              },
              {
                key: "_handleCustomValidation",
                value: function (e) {
                  var t = this;
                  if (e) {
                    if (!this._util.hasCustomEvent) return e;
                    var r = this._util.elem;
                    return new Promise(function (n, i) {
                      g(r, "customValidateStatus", function o(a) {
                        var s = a.detail;
                        C(r, "customValidateStatus", o),
                          s.success
                            ? n(e)
                            : (r.classList.add("wafer-form-incomplete"),
                              r.classList.remove("wafer-form-inprogress"),
                              (t._util.pending = !1),
                              i());
                      });
                      var o = new CustomEvent("customValidate", {
                        detail: { body: e },
                      });
                      r.dispatchEvent(o);
                    });
                  }
                },
              },
              {
                key: "submitForm",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    i = n.forcePreference,
                    o = void 0 !== i && i;
                  if (!this._destroyed) {
                    var a = this._util,
                      s = a.action,
                      u = a.type,
                      l = "/" !== s && !o,
                      c =
                        "modulePreference" === u ||
                        "modulePreferenceClear" === u;
                    if (!l && c)
                      return void new Promise(function (e) {
                        r.e(0)
                          .then(
                            function (t) {
                              e(r("./src/types/preference.js"));
                            }.bind(null, r),
                          )
                          .catch(r.oe);
                      }).then(function () {
                        (arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {}
                        ).submitForm.call(t, e);
                      });
                    if (!this._util.pending && s) {
                      var f = this._util.elem;
                      (this._util.pending = !0),
                        (this._state.submitAllowed = !0),
                        f.classList.remove("wafer-form-incomplete"),
                        f.classList.add("wafer-form-inprogress"),
                        this.formValues
                          .then(function () {
                            var r =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : {},
                              n = r.values;
                            return t._state.submitAllowed
                              ? (e && e.preventDefault(), n)
                              : (f.classList.add("wafer-form-incomplete"),
                                f.classList.remove("wafer-form-inprogress"),
                                void (t._util.pending = !1));
                          })
                          .then(function (e) {
                            return t._handleCustomValidation(e);
                          })
                          .then(function (r) {
                            if (r) {
                              var n = t._util,
                                i = n.boundaryElem,
                                o = n.boundaryErrorClass,
                                a = n.cache,
                                u = n.credentials,
                                l = n.customSuccessClass,
                                d = n.errorClass,
                                h = n.method,
                                p = n.mode,
                                v = n.resultSelector,
                                b = n.successClass,
                                g = n.targetElem,
                                w = n.timeout,
                                E = void 0,
                                A = s;
                              if (
                                (l && f.classList.remove(l),
                                f.classList.remove(b),
                                f.classList.remove(d),
                                i && i.classList.remove(o),
                                "POST" === h)
                              )
                                E = JSON.stringify(r);
                              else {
                                var C = !0;
                                if (window.__waferFormGetUrlify)
                                  try {
                                    var k = window.__waferFormGetUrlify.call(
                                      null,
                                      A,
                                      r,
                                      O,
                                      f,
                                    );
                                    k && ((A = k), (C = !1));
                                  } catch (e) {
                                    C = !0;
                                  }
                                C &&
                                  (A =
                                    A +
                                    (-1 === A.indexOf("?") ? "?" : "&") +
                                    O(r));
                              }
                              _(A, {
                                mode: p,
                                cache: a,
                                timeout: w,
                                body: E,
                                credentials: u,
                              })
                                .then(function (r) {
                                  if (!t._destroyed) {
                                    if (((t._util.pending = !1), g)) {
                                      var n = void 0;
                                      if ((m.destroy(g), v)) {
                                        var i = document.createElement("div");
                                        i.innerHTML = r.html;
                                        var o = i.querySelector(v);
                                        n = (o && o.innerHTML) || r.html;
                                      } else n = r.html;
                                      y(g, n),
                                        m.syncAssets(r.assets),
                                        m.sync(g);
                                    }
                                    return (
                                      l && f.classList.add(l),
                                      f.classList.remove(
                                        "wafer-form-inprogress",
                                      ),
                                      f.classList.add(b),
                                      m.emitWaferEvent("form:submit", {
                                        elem: f,
                                        meta: { data: r },
                                      }),
                                      !c ||
                                        t.submitForm(e, { forcePreference: !0 })
                                    );
                                  }
                                })
                                .catch(function (e) {
                                  if (((t._util.pending = !1), !t._destroyed))
                                    return (
                                      m.emitError({
                                        name: "WaferForm",
                                        elem: f,
                                        meta: { url: A, body: E },
                                        stack: e.stack || e.message,
                                      }),
                                      f.classList.remove(
                                        "wafer-form-inprogress",
                                      ),
                                      f.classList.add(d),
                                      i && i.classList.add(o),
                                      !1
                                    );
                                });
                            }
                          });
                    }
                  }
                },
              },
              {
                key: "destroy",
                value: function () {
                  var e = this,
                    r = this._util,
                    n = r.elem,
                    i = r.elemsWithOnChange;
                  this.removeInputEvents(),
                    i.forEach(function (t) {
                      C(t, "change", e.onchange);
                    }),
                    C(n, "submit", this.handleOnSubmit, { passive: !1 }),
                    f(
                      t.prototype.__proto__ ||
                        Object.getPrototypeOf(t.prototype),
                      "destroy",
                      this,
                    ).call(this);
                },
              },
              {
                key: "stateDidUpdate",
                value: function () {
                  if (
                    "focus" ===
                    (arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {}
                    ).stateAttr
                  )
                    return void this.focus();
                  "stateChange" === this._util.trigger && this.submitForm();
                },
              },
              {
                key: "handleInvalidInput",
                value: function (e) {
                  var t = this._util.elem,
                    r = e.target;
                  if (void 0 === r.__customError) {
                    var n = r.getAttribute(b + "custom-error");
                    (n = null === n || void 0 === n ? 0 : Number(n)),
                      (r.__customError = n);
                  }
                  t.classList.add("wafer-form-incomplete"),
                    r.classList.add("wafer-form-elem-error"),
                    r.__customError && r.setCustomValidity(" ");
                },
              },
              {
                key: "handleInputChange",
                value: function (e) {
                  var t = this._util,
                    r = t.elem,
                    n = t.errorClass,
                    i = e.target;
                  r.classList.remove("wafer-form-incomplete", n),
                    i.classList.remove("wafer-form-elem-error"),
                    i.setCustomValidity("");
                },
              },
              {
                key: "handleOnChange",
                value: function () {
                  var e = this;
                  setTimeout(function () {
                    e.submitForm();
                  }, 100);
                },
              },
              {
                key: "handleOnSubmit",
                value: function (e) {
                  e.preventDefault();
                },
              },
              {
                key: "handleSubmit",
                value: function () {
                  this.submitForm();
                },
              },
              {
                key: "formValues",
                get: function () {
                  var e = this,
                    t = this._util || {},
                    r = t.elemsWithValues,
                    n = void 0 === r ? [] : r,
                    i = t.method;
                  return Promise.all(
                    n.map(function (t) {
                      return e.handleElementWithValue(t);
                    }),
                  ).then(function (t) {
                    var r = {};
                    return {
                      values: t.reduce(function (t, n) {
                        var o = n.getAttribute("data-user-input"),
                          a = n.getAttribute("data-value"),
                          s = n.hasAttribute("required"),
                          u = n.value,
                          l = a || u;
                        if (j && !n.checkValidity())
                          return (e._state.submitAllowed = !1), t;
                        if (s && !l) return (e._state.submitAllowed = !1), t;
                        var c = n.getAttribute(b + "input-format-pattern");
                        if (void 0 !== l) {
                          var f = n.getAttribute("name"),
                            d = f.split("."),
                            m = n.checked,
                            h = n.type,
                            p = void 0;
                          if (
                            ("POST" === i && d.length > 1
                              ? ((f = d.pop()),
                                (p = t),
                                d.forEach(function (e) {
                                  (p[e] = p[e] || {}), (p = p[e]);
                                }))
                              : (p = t),
                            "undefined" === l)
                          )
                            return (r[f] = !0), t;
                          if (o || l !== u) {
                            var v = n.getAttribute("data-assist-src");
                            v && (p["assist-src"] = v),
                              (p[f + "-src"] = "assist"),
                              (p[f + "-term"] = o || u);
                          }
                          if (
                            !n.getAttribute("data-wf-on") &&
                            ("radio" !== h || m)
                          ) {
                            if ("checkbox" === h) {
                              var g = n.getAttribute(
                                "data-wf-checkbox-array-key",
                              );
                              g
                                ? ((p[g] = p[g] || []),
                                  m &&
                                    ("on" === l ? p[g].push(f) : p[g].push(l)))
                                : "on" === l
                                  ? (p[f] = m)
                                  : m && (p[f] = l);
                            } else {
                              var y = "",
                                w = "";
                              c && l && (y = c.replace(/INPUT/g, l)),
                                (w = y || l),
                                w && (p[f] = w);
                            }
                            a &&
                              ((p[f + "-dval"] = u),
                              (p[f + "-src"] = "assist"),
                              (p[f + "-term"] = o || u));
                          }
                        }
                        return t;
                      }, {}),
                      undefinedKeyMap: r,
                    };
                  });
                },
              },
            ]),
            t
          );
        })(v);
      P.events = { click: [["trigger-submit", "handleSubmit"]] };
      var S = P,
        I = window.wafer.controllers.WaferBaseController,
        F = (function (e) {
          function t() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              r = e.errorClass,
              n = void 0 === r ? "wafer-form-error" : r,
              i = e.root,
              o = void 0 === i ? document : i,
              u = e.selector,
              l = void 0 === u ? ".wafer-form" : u,
              c = e.successClass,
              f = void 0 === c ? "wafer-form-complete" : c;
            a(this, t);
            var d = s(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                root: o,
                selector: l,
                props: { errorClass: n, selector: l, successClass: f },
                WaferClass: S,
              }),
            );
            return d.sync(), d;
          }
          return u(t, e), t;
        })(I),
        x = F;
      t.default = new x({ selector: ".wafer-form" });
    },
  });
});
