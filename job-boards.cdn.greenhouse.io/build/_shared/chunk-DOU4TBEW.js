import {
  a as b,
  b as d,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-GJ752VEN.js";
import { c as x } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-MDREM3VW.js";
import { D as i } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-N4MC5J4H.js";
import { d as r } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-LNKWYQRG.js";
var c =
  "https://job-boards.cdn.greenhouse.io/build/_assets/button-F3LQI5QW.css";
var u = r(x());
var o = r(i()),
  z = () => [...b(), { rel: "stylesheet", href: c }],
  N = (p) => {
    let {
        children: n,
        shape: h = "pill",
        type: m = "button",
        secondary: g = !1,
        tertiary: t = !1,
        ariaLabel: a,
        link: y = !1,
        href: f,
        loading: s,
        disabled: e,
        onClick: k,
        testId: v,
      } = p,
      l = (0, u.default)({
        btn: !t,
        [`btn--${h}`]: !t,
        "btn--secondary": !t && g,
        "btn--tertiary": t,
        btn__disabled: e,
      });
    return y
      ? (0, o.jsx)("a", {
          href: f,
          target: "_top",
          className: l,
          "aria-label": a,
          children: n,
        })
      : (0, o.jsxs)("button", {
          type: m,
          className: l,
          "aria-label": a,
          onClick: k,
          disabled: e,
          "aria-disabled": e,
          "data-testid": v,
          children: [s && (0, o.jsx)(d, { size: "small" }), !s && n],
        });
  };
export { c as a, z as b, N as c };
//# sourceMappingURL=https://job-boards.cdn.greenhouse.io/build/_shared/chunk-DOU4TBEW.js.map
