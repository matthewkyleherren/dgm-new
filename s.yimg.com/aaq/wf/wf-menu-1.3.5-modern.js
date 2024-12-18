!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define("wafer-menu", [], t)
      : "object" == typeof exports
        ? (exports["wafer-menu"] = t())
        : ((e.wafer = e.wafer || {}),
          (e.wafer.wafers = e.wafer.wafers || {}),
          (e.wafer.wafers["wafer-menu"] = t()));
})("undefined" != typeof self ? self : this, function () {
  return (function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return e[r].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var n = {};
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function (e, n, r) {
        t.o(e, n) ||
          Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: r,
          });
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (t.p = "https://s.yimg.com/aaq/wf/"),
      t((t.s = "./src/entry.js"))
    );
  })({
    "./src/entry.js": function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function i(e, t) {
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
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        c = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        f = function e(t, n, r) {
          null === t && (t = Function.prototype);
          var o = Object.getOwnPropertyDescriptor(t, n);
          if (void 0 === o) {
            var i = Object.getPrototypeOf(t);
            return null === i ? void 0 : e(i, n, r);
          }
          if ("value" in o) return o.value;
          var a = o.get;
          if (void 0 !== a) return a.call(r);
        },
        v = window.wafer,
        p = v.base,
        m = v.constants,
        d = v.WaferBaseClass,
        h = v.utils,
        y = h.convertNodeListToArray,
        b = h.findAncestor,
        g = h.getFocusableElems,
        w = m.ATTR_PREFIX,
        _ = ["menuClick", "toggleMenu"],
        O = [],
        E = document.body,
        A = (function (e) {
          function t(e) {
            r(this, t);
            var n = o(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(
                  this,
                  e,
                  {},
                  { STATE_ATTRS: O },
                ),
              ),
              i = y(e.getElementsByClassName("menu-options"))[0],
              a = y(i.children),
              s = y(e.getElementsByClassName("menu-toggle"))[0],
              u = e.hasAttribute(w + "should-activate-on-hover"),
              c = e.hasAttribute(w + "skip-menuitem-focus"),
              f = "0" !== e.getAttribute(w + "menu-close-on-select"),
              v = i.getAttribute(w + "menu-active-class") || "menu-active";
            (n._util = l({}, n._util, {
              activeClass: v,
              closeOnSelect: f,
              elem: e,
              menuButtons: a,
              optionsElem: i,
              shouldActivateOnHover: u,
              skipMenuitemFocus: c,
              toggleElem: s,
            })),
              _.forEach(function (e) {
                n[e] = n[e].bind(n);
              }),
              n.addEventListeners(),
              (n._state = l({}, n._state, {
                active: i.classList.contains(v),
                menuActiveElem: !1,
              })),
              s.setAttribute("aria-expanded", "false"),
              i.setAttribute("tabindex", "-1"),
              i.getAttribute("role") || i.setAttribute("role", "menu"),
              i.setAttribute("aria-hidden", "true"),
              a.forEach(function (e) {
                e.setAttribute("tabindex", "-1"),
                  e.setAttribute("role", "menuitem");
              });
            var p = i.id;
            p && s.setAttribute("aria-controls", p);
            var m = s.id;
            return m && i.setAttribute("aria-labelledby", m), n;
          }
          return (
            i(t, e),
            c(t, [
              {
                key: "openMenu",
                value: function () {
                  var e =
                      arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0],
                    t = this._util,
                    n = t.activeClass,
                    r = t.elem,
                    o = t.menuButtons,
                    i = t.optionsElem,
                    a = t.skipMenuitemFocus,
                    s = t.toggleElem;
                  if (
                    (this.closeOthers(),
                    (this._state.active = !0),
                    i.classList.add(n),
                    i.setAttribute("aria-hidden", "false"),
                    o.forEach(function (e) {
                      e.removeAttribute("tabindex");
                    }),
                    a && e)
                  )
                    i.focus({ preventScroll: !0 });
                  else {
                    (g(i)[0] || o[0]).focus();
                  }
                  s.setAttribute("aria-expanded", "true"),
                    s.classList.remove("menu-closed"),
                    s.classList.add("active"),
                    E.classList.add("wafer-menu-open"),
                    p.emitWaferEvent("menu:open", { elem: r, meta: {} });
                },
              },
              {
                key: "closeMenu",
                value: function () {
                  var e = this._util,
                    t = e.activeClass,
                    n = e.elem,
                    r = e.menuButtons,
                    o = e.optionsElem,
                    i = e.toggleElem;
                  (this._state.active = !1),
                    o.classList.remove(t),
                    o.setAttribute("aria-hidden", "true"),
                    r.forEach(function (e) {
                      e.setAttribute("tabindex", "-1");
                    }),
                    i.setAttribute("aria-expanded", "false"),
                    i.classList.remove("active"),
                    i.classList.add("menu-closed"),
                    E.classList.remove("wafer-menu-open"),
                    i.focus({ preventScroll: !0 }),
                    p.emitWaferEvent("menu:close", { elem: n, meta: {} });
                },
              },
              {
                key: "addEventListeners",
                value: function () {
                  f(
                    t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                    "addEventListeners",
                    this,
                  ).call(this);
                },
              },
              {
                key: "menuClick",
                value: function (e) {
                  var t = this._util,
                    n = t.optionsElem,
                    r = t.closeOnSelect,
                    o = e.eventTarget;
                  y(n.getElementsByClassName("menu-item-active")).forEach(
                    function (e) {
                      e.classList.remove("menu-item-active");
                    },
                  ),
                    o.classList.add("menu-item-active"),
                    this.didComplete(
                      null,
                      o.getAttribute("data-value") || o.value.toLowerCase(),
                    ),
                    r && this.closeMenu();
                },
              },
              {
                key: "toggleMenu",
                value: function () {
                  this._state.active ? this.closeMenu() : this.openMenu();
                },
              },
              {
                key: "handleClickOutside",
                value: function (e) {
                  var t = e.waferComposedMap,
                    n = this._util,
                    r = n.optionsElem,
                    o = n.toggleElem;
                  this._state.active &&
                    e.target !== o &&
                    (t().get(r) || t().get(o) || this.closeMenu());
                },
              },
              {
                key: "handleKeyboardDown",
                value: function (e) {
                  if (this._state.active) {
                    switch (e.which || e.code) {
                      case 27:
                        this.closeMenu();
                        break;
                      case 37:
                      case 38:
                        this.handleListUp(e);
                        break;
                      case 39:
                      case 40:
                        this.handleListDown(e);
                    }
                  }
                },
              },
              {
                key: "handleListDown",
                value: function (e) {
                  e.preventDefault();
                  var t = e.target,
                    n = t.classList.contains(t) || b(t, "menu-item");
                  if (n) {
                    var r = this._util.menuButtons,
                      o = r.indexOf(n);
                    o === r.length - 1 && (o = -1);
                    var i = r[o + 1];
                    (g(i)[0] || i).focus();
                  }
                },
              },
              {
                key: "handleListUp",
                value: function (e) {
                  e.preventDefault();
                  var t = e.target,
                    n = t.classList.contains(t) || b(t, "menu-item");
                  if (n) {
                    var r = this._util.menuButtons,
                      o = r.indexOf(n);
                    0 === o && (o = r.length);
                    var i = r[o - 1];
                    (g(i)[0] || i).focus();
                  }
                },
              },
              {
                key: "mouseOver",
                value: function () {
                  if (!this._state.active) {
                    this._util.shouldActivateOnHover && this.openMenu(!0);
                  }
                },
              },
              {
                key: "mouseLeave",
                value: function (e) {
                  if (this._state.active) {
                    this._util.shouldActivateOnHover && this.closeMenu();
                  }
                },
              },
            ]),
            t
          );
        })(d);
      A.events = {
        click: [
          ["menu-item", "menuClick"],
          ["menu-toggle", "toggleMenu"],
        ],
        mouseover: [["menu-toggle", "mouseOver"]],
        mouseleave: [["_self", "mouseLeave"]],
      };
      var j = A,
        L =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        k = (function () {
          function e(e, t) {
            var n = [],
              r = !0,
              o = !1,
              i = void 0;
            try {
              for (
                var a, s = e[Symbol.iterator]();
                !(r = (a = s.next()).done) &&
                (n.push(a.value), !t || n.length !== t);
                r = !0
              );
            } catch (e) {
              (o = !0), (i = e);
            } finally {
              try {
                !r && s.return && s.return();
              } finally {
                if (o) throw i;
              }
            }
            return n;
          }
          return function (t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance",
            );
          };
        })(),
        x = window.wafer.controllers.WaferBaseController,
        C = (function (e) {
          function t() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = e.containerClass,
              r = void 0 === n ? null : n,
              o = e.root,
              i = void 0 === o ? document : o,
              u = e.selector;
            a(this, t);
            var l = s(
                this,
                (t.__proto__ || Object.getPrototypeOf(t)).call(this, {
                  root: i,
                  selector: u,
                  WaferClass: j,
                }),
              ),
              c = l;
            return (
              (j.prototype.closeOthers = function () {
                var e = this._util.elem,
                  t = c._state.elementInstances,
                  n = !0,
                  r = !1,
                  o = void 0;
                try {
                  for (
                    var i, a = t.entries()[Symbol.iterator]();
                    !(n = (i = a.next()).done);
                    n = !0
                  ) {
                    var s = i.value,
                      u = k(s, 2),
                      l = u[0],
                      f = u[1];
                    l !== e && f.instance.closeMenu();
                  }
                } catch (e) {
                  (r = !0), (o = e);
                } finally {
                  try {
                    !n && a.return && a.return();
                  } finally {
                    if (r) throw o;
                  }
                }
              }),
              (l._options = L({}, l._options, {
                props: {},
                container: !!r && i.getElementsByClassName(r),
              })),
              l.sync(),
              l
            );
          }
          return u(t, e), t;
        })(x),
        M = C;
      t.default = new M({ selector: "wafer-menu" });
    },
  });
});
