import {
  D as m,
  a as b,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-N4MC5J4H.js";
import {
  c as h,
  d as s,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-LNKWYQRG.js";
var v = h((P, p) => {
  p.exports = {};
});
var f = h((w, l) => {
  (function () {
    "use strict";
    var t = {}.hasOwnProperty;
    function o() {
      for (var e = "", r = 0; r < arguments.length; r++) {
        var i = arguments[r];
        i && (e = d(e, a(i)));
      }
      return e;
    }
    function a(e) {
      if (typeof e == "string" || typeof e == "number") return e;
      if (typeof e != "object") return "";
      if (Array.isArray(e)) return o.apply(null, e);
      if (
        e.toString !== Object.prototype.toString &&
        !e.toString.toString().includes("[native code]")
      )
        return e.toString();
      var r = "";
      for (var i in e) t.call(e, i) && e[i] && (r = d(r, i));
      return r;
    }
    function d(e, r) {
      return r ? (e ? e + " " + r : e + r) : e;
    }
    typeof l < "u" && l.exports
      ? ((o.default = o), (l.exports = o))
      : typeof define == "function" &&
          typeof define.amd == "object" &&
          define.amd
        ? define("classnames", [], function () {
            return o;
          })
        : (window.classNames = o);
  })();
});
var g =
  "https://job-boards.cdn.greenhouse.io/build/_assets/typography-SKUEBF5F.css";
var c = s(f()),
  n = s(m()),
  x = () => [{ rel: "stylesheet", href: g }],
  B = ({ children: t }) =>
    (0, n.jsx)("h1", {
      className: "page-header font-primary",
      dangerouslySetInnerHTML: { __html: t },
    }),
  H = (t) => {
    let { as: o, children: a, large: d, testId: e } = t,
      r = (0, c.default)({
        "section-header": !0,
        "section-header--large": d,
        "font-primary": !0,
      });
    return o === "h1"
      ? (0, n.jsx)("h1", { className: r, "data-testid": e, children: a })
      : o === "h2"
        ? (0, n.jsx)("h2", { className: r, "data-testid": e, children: a })
        : (0, n.jsx)("h3", { className: r, "data-testid": e, children: a });
  },
  k = (t) => {
    let {
        medium: o,
        metadata: a,
        strikethrough: d,
        status: e,
        secondary: r,
        children: i,
      } = t,
      u = (0, c.default)({
        body: !0,
        body__secondary: r,
        "body--metadata": a,
        "body--strikethrough": d,
        "body--medium": o,
        "body--active": e === "active",
      });
    return (0, n.jsx)("p", { className: u, children: i });
  },
  _ = (t) => (0, n.jsx)("div", { className: "body", children: t.children }),
  L = (t) =>
    (0, n.jsx)("div", {
      className: "body body__secondary",
      children: t.children,
    }),
  z = (t) => (0, n.jsx)(k, { ...t, secondary: !0 }),
  C = (t) =>
    (0, n.jsx)("a", {
      className: "link",
      ref: t.linkref,
      target: "_top",
      ...t,
      children: t.children,
    }),
  D = (t) => {
    let o = (0, c.default)("label", t.className);
    return (0, n.jsxs)("label", {
      id: t.id,
      htmlFor: t.htmlFor,
      className: o,
      children: [
        t.children,
        t.required &&
          (0, n.jsx)("span", { "aria-hidden": "true", children: "*" }),
      ],
    });
  },
  j = ({ children: t }) =>
    (0, n.jsx)("p", { className: "table-header font-primary", children: t });
var y = s(b()),
  M = (0, y.createContext)(null);
export {
  v as a,
  g as b,
  f as c,
  x as d,
  B as e,
  H as f,
  k as g,
  _ as h,
  L as i,
  z as j,
  C as k,
  D as l,
  j as m,
  M as n,
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)
*/
//# sourceMappingURL=https://job-boards.cdn.greenhouse.io/build/_shared/chunk-MDREM3VW.js.map
