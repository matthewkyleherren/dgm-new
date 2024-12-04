"use strict";
function _slicedToArray(e, t) {
  return (
    _arrayWithHoles(e) ||
    _iterableToArrayLimit(e, t) ||
    _unsupportedIterableToArray(e, t) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}
function _iterableToArrayLimit(e, t) {
  var r =
    null == e
      ? null
      : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
  if (null != r) {
    var n,
      a,
      o,
      i,
      l = [],
      d = !0,
      c = !1;
    try {
      if (((o = (r = r.call(e)).next), 0 === t)) {
        if (Object(r) !== r) return;
        d = !1;
      } else
        for (
          ;
          !(d = (n = o.call(r)).done) && (l.push(n.value), l.length !== t);
          d = !0
        );
    } catch (e) {
      (c = !0), (a = e);
    } finally {
      try {
        if (!d && null != r.return && ((i = r.return()), Object(i) !== i))
          return;
      } finally {
        if (c) throw a;
      }
    }
    return l;
  }
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
function _createForOfIteratorHelper(e, t) {
  var r =
    ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
  if (!r) {
    if (
      Array.isArray(e) ||
      (r = _unsupportedIterableToArray(e)) ||
      (t && e && "number" == typeof e.length)
    ) {
      r && (e = r);
      var n = 0,
        a = function () {};
      return {
        s: a,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (e) {
          throw e;
        },
        f: a,
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
    );
  }
  var o,
    i = !0,
    l = !1;
  return {
    s: function () {
      r = r.call(e);
    },
    n: function () {
      var e = r.next();
      return (i = e.done), e;
    },
    e: function (e) {
      (l = !0), (o = e);
    },
    f: function () {
      try {
        i || null == r.return || r.return();
      } finally {
        if (l) throw o;
      }
    },
  };
}
function _unsupportedIterableToArray(e, t) {
  if (e) {
    if ("string" == typeof e) return _arrayLikeToArray(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return (
      "Object" === r && e.constructor && (r = e.constructor.name),
      "Map" === r || "Set" === r
        ? Array.from(e)
        : "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? _arrayLikeToArray(e, t)
          : void 0
    );
  }
}
function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
!(function () {
  var e = function () {
      var e = document.getElementById("fixed-nav");
      if (e) {
        var t,
          r,
          n,
          a = e.querySelector(".drawer-toggle"),
          o = document.getElementById("search");
        i(),
          window.addEventListener(
            "scroll",
            ((t = i),
            (r = 200),
            function () {
              for (
                var e = arguments.length, a = new Array(e), o = 0;
                o < e;
                o++
              )
                a[o] = arguments[o];
              clearTimeout(n),
                (n = setTimeout(function () {
                  return t.apply(void 0, a);
                }, r));
            }),
          );
      } else console.warn("> Fixed Navigation #fixed-nav was not found.");
      function i() {
        window.scrollY > 160
          ? (e.removeAttribute("aria-hidden"),
            document
              .querySelector("#fixed-nav div div a")
              .removeAttribute("aria-hidden"),
            document
              .querySelector("#fixed-nav div div div button")
              .removeAttribute("aria-hidden"),
            document
              .querySelectorAll("#fixed-nav div div ul li a")
              .forEach(function (e) {
                e.removeAttribute("aria-hidden", !0);
              }),
            (e.style.display = "block"),
            (e.style.transform = "translateY(0%)"),
            (o.style.position = "fixed"),
            (o.style.height = "80px"))
          : (e.setAttribute("aria-hidden", !0),
            document
              .querySelector("#fixed-nav div div a")
              .setAttribute("aria-hidden", !0),
            document
              .querySelector("#fixed-nav div div div button")
              .removeAttribute("aria-hidden"),
            document
              .querySelectorAll("#fixed-nav div div ul li a")
              .forEach(function (e) {
                e.setAttribute("aria-hidden", !0);
              }),
            a.classList.remove("active"),
            (e.style.display = "none"),
            (e.style.transform = ""),
            (o.style.position = ""),
            (o.style.height = ""));
      }
    },
    t = function (e) {
      var t;
      document
        .querySelector(".selected-product-thumbnail")
        .classList.remove("selected-product-thumbnail"),
        e.classList.add("selected-product-thumbnail");
      var r = e.getAttribute("data-source-image");
      if (
        (null === (t = document.getElementById("js-primary-product-image")) ||
          void 0 === t ||
          t.setAttribute("src", r),
        rapidInstance && rapidInstance.beaconClick)
      ) {
        var n = (null == e ? void 0 : e.getAttribute("data-ylk-slk")) || "",
          a = parseInt(
            (null == e ? void 0 : e.getAttribute("data-ylk-pos")) || "0",
          );
        rapidInstance.beaconClick("product", n, a, {
          itc: 1,
          elm: "slide-thumb",
        });
      }
    },
    r = function (e) {
      var t = document.getElementById("rev-companySlug"),
        r = document.getElementById("rev-productSlug"),
        n = "/product/flag-review/".concat(t.value, "/").concat(r.value),
        a = new XMLHttpRequest();
      a.open("POST", n), a.setRequestHeader("Content-type", "application/json");
      var o = null == e ? void 0 : e.getAttribute("data-review-id"),
        i = function (e) {
          if (e) {
            var t,
              r = _createForOfIteratorHelper(e);
            try {
              for (r.s(); !(t = r.n()).done; ) {
                t.value.style.display = "block";
              }
            } catch (e) {
              r.e(e);
            } finally {
              r.f();
            }
          }
        };
      (a.onreadystatechange = function () {
        var t, r;
        a.readyState === a.DONE &&
          (200 === a.status
            ? (i(
                null == e || null === (t = e.parentElement) || void 0 === t
                  ? void 0
                  : t.getElementsByClassName("success-msg"),
              ),
              (e.style.display = "none"))
            : (i(
                null == e || null === (r = e.parentElement) || void 0 === r
                  ? void 0
                  : r.getElementsByClassName("err-msg"),
              ),
              (e.style.display = "none")));
      }),
        a.send(JSON.stringify({ reviewID: o }));
    },
    n = function () {
      var e = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = e.querySelectorAll('a[data-component="NavLink"]');
        if (r && r.length > 1)
          for (var n = 1; n < r.length; ++n) {
            var a = r[n];
            t
              ? a.removeAttribute("aria-hidden")
              : a.setAttribute("aria-hidden", "true");
          }
      };
      window.wafer.on("menu:open", function (t) {
        var r = t.elem;
        e(r, !0);
      }),
        window.wafer.on("menu:close", function (t) {
          var r = t.elem;
          e(r);
        }),
        window.wafer.on("drawer:change", function (e) {
          var t = e.elem,
            r = e.meta._state.drawerState,
            n = t.querySelectorAll(
              'div[data-component="DrawerMenu"] > ul > li > a',
            );
          n &&
            n.length > 0 &&
            n.forEach(function (e) {
              "closed" === r
                ? e.setAttribute("aria-hidden", "true")
                : e.removeAttribute("aria-hidden");
            });
        }),
        window.wafer.on("toggle:change", function (e) {
          var t,
            r = e.elem,
            n = e.meta,
            a =
              null == r || null === (t = r.nextElementSibling) || void 0 === t
                ? void 0
                : t.querySelectorAll("ul > li > a"),
            o = n.className;
          a &&
            (null == a ? void 0 : a.length) > 0 &&
            a.forEach(function (e) {
              "active" === o
                ? null == e || e.removeAttribute("aria-hidden")
                : null == e || e.setAttribute("aria-hidden", "true");
            });
        });
    };
  document.addEventListener("DOMContentLoaded", function () {
    window.wafer.on("lightbox:open", function (e) {
      var t = document.getElementsByClassName("abuse-btn");
      if (t.length)
        for (var n = 0; n < t.length; n++)
          t[n].addEventListener("click", function (e) {
            return r(e.currentTarget);
          });
    }),
      window.wafer.on("lightbox:close,", function (e) {
        var t = document.getElementsByClassName("abuse-btn");
        if (t.length)
          for (var n = 0; n < t.length; n++)
            t[n].removeEventListener("click", function (e) {
              return r(e.currentTarget);
            });
      });
  }),
    document.addEventListener("DOMContentLoaded", function () {
      var r, a, o;
      (o = document.querySelectorAll(".gemini-disclaimer")) &&
        Array.from(o).forEach(function (e) {
          return e.addEventListener("click", function () {
            return window.open(
              "https://www.verizonmedia.com/policies/us/en/verizonmedia/privacy/adinfo/index.html",
            );
          });
        }),
        e();
      var i = document.getElementsByClassName("js-product-thumb");
      if (i.length)
        for (var l = 0; l < i.length; l++)
          i[l].addEventListener("click", function (e) {
            return t(e.target);
          });
      null === (r = document.getElementById("searchBtn")) ||
        void 0 === r ||
        r.addEventListener("click", function () {
          var e = document.getElementById("search");
          if (e) {
            e.classList.add("active");
            var t = document.getElementById("search-terms");
            t && (t.focus(), t.setAttribute("aria-expanded", "true"));
          }
        }),
        null === (a = document.getElementById("searchCancelBtn")) ||
          void 0 === a ||
          a.addEventListener("click", function () {
            if (document.getElementById("search")) {
              var e = document.getElementById("search-terms");
              e && e.setAttribute("aria-expanded", "false");
            }
          });
      var d,
        c = document.getElementById("q-overview");
      if (c) {
        var u;
        null === (u = c.querySelector("#q-ov-more-btn")) ||
          void 0 === u ||
          u.addEventListener("click", function (e) {
            return (
              e.stopPropagation(),
              (function (e, t) {
                var r = ".secondary-products",
                  n = "See {0} more",
                  a = t.querySelectorAll(r),
                  o = t.querySelector("#".concat("q-ov-more-btn")),
                  i = a.length;
                if (i) {
                  var l,
                    d = Math.min(i, 5),
                    c = _createForOfIteratorHelper(Array.from(a).entries());
                  try {
                    for (c.s(); !(l = c.n()).done; ) {
                      var u = _slicedToArray(l.value, 2),
                        s = u[0],
                        f = u[1];
                      if (s >= d) break;
                      f.classList.remove("secondary-products");
                    }
                  } catch (e) {
                    c.e(e);
                  } finally {
                    c.f();
                  }
                  var v = Math.min(i - d, 5);
                  o.innerText = v > 0 ? n.replace("{0}", v) : "See less";
                } else {
                  var m = t.querySelectorAll("#q-overview .product-card");
                  if (m.length > 5) {
                    for (var y = 5; y < m.length; y++)
                      m[y].classList.add("secondary-products");
                    var p = Math.min(5, t.querySelectorAll(r).length);
                    o.innerText = n.replace("{0}", p);
                  } else o.style.display = "none";
                }
              })(0, c),
              !1
            );
          });
        var s = function (e) {
          if (rapidInstance && rapidInstance.beaconClick) {
            var t = {};
            e.split(";").forEach(function (e) {
              var r = e.split(":");
              t[r[0]] = r[1];
            }),
              rapidInstance.beaconClick("quicklinks", t.pdid, 0, {
                itc: 1,
                elm: t.elm,
                sellerN: t.sellerN,
                pid: t.pid,
              });
          }
        };
        Array.from(c.getElementsByClassName("product-card")).forEach(
          function (e) {
            e.addEventListener("click", function (t) {
              s(
                e
                  .getElementsByClassName("product-link")[0]
                  .getAttribute("data-ylk"),
              ),
                window.open(e.getAttribute("data-product-link"), "_blank");
            });
          },
        ),
          Array.from(c.getElementsByClassName("product-card")).forEach(
            function (e) {
              e.addEventListener("mouseenter", function (t) {
                (e.querySelector(".product-name").style["text-decoration"] =
                  "underline"),
                  (e.querySelector(".product-price").style["text-decoration"] =
                    "underline");
              });
            },
          ),
          Array.from(c.getElementsByClassName("product-card")).forEach(
            function (e) {
              e.addEventListener("mouseleave", function (t) {
                (e.querySelector(".product-name").style["text-decoration"] =
                  "none"),
                  (e.querySelector(".product-price").style["text-decoration"] =
                    "none");
              });
            },
          ),
          Array.from(c.getElementsByClassName("product-link")).forEach(
            function (e) {
              e.addEventListener("click", function (t) {
                s(e.getAttribute("data-ylk")), t.stopPropagation();
              });
            },
          );
      }
      window.wafer
        ? (window.wafer.ready(function () {
            n();
          }, window),
          null === (d = document.querySelectorAll('[id^="module-hubs-"]')) ||
            void 0 === d ||
            d.forEach(function (e) {
              var t,
                r = e.id;
              window.rapidInstance &&
                !window.rapidInstance.isModuleTracked(r) &&
                (null === (t = window.rapidInstance) ||
                  void 0 === t ||
                  t.addModulesWithViewability(r));
            }))
        : document.body.addEventListener("wafer:ready", function () {
            n();
          });
    });
})();
