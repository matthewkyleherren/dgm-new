import {
  c as S,
  n as f,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-MDREM3VW.js";
import {
  B as l,
  D as u,
  a as c,
  g,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-N4MC5J4H.js";
import { d as n } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-LNKWYQRG.js";
var p = "https://job-boards.cdn.greenhouse.io/build/_assets/logo-E3SGXDRD.css";
var s = n(S());
var o = n(u()),
  E = () => [{ rel: "stylesheet", href: p }],
  d = ({ children: r }) =>
    (0, o.jsx)("div", { className: "image-container", children: r }),
  U = ({ companyName: r, url: e, href: t }) => {
    let { t: a } = l("common");
    if (!e) return null;
    let i = !!t,
      w = `${r} ${a("labels.logo")}`,
      P = (0, s.default)({ logo: !i }),
      b = (0, s.default)({ logo: i }),
      m = (0, o.jsx)("img", { src: e, alt: w, className: P });
    return i
      ? (0, o.jsx)(d, {
          children: (0, o.jsx)("a", {
            href: t,
            target: "_blank",
            rel: "noreferrer",
            className: b,
            children: m,
          }),
        })
      : (0, o.jsx)(d, { children: m });
  };
var h = n(c());
var I = () => {
  let r = (0, h.useContext)(f);
  if (!r)
    throw new Error(
      "useBoardConfiguration called in a context where a board configuration hasn't been provided",
    );
  return r;
};
var C = n(c());
var N = (r) => {
    let e = new URLSearchParams(),
      t = r.get("gh_src") || r.get("t");
    return (
      t && e.set("gh_src", t),
      r.has("ccuid") && e.set("ccuid", r.get("ccuid")),
      e
    );
  },
  k = N;
function x(r, e) {
  let t = e.toString();
  return t === "" ? r : r.includes("?") ? r + "&" + t : r + "?" + t;
}
function A() {
  let [r] = g(),
    e = (0, C.useMemo)(() => k(r), [r]);
  return { trackingParams: e, withTrackingParams: (a) => x(a, e) };
}
export { p as a, E as b, U as c, I as d, A as e };
//# sourceMappingURL=https://job-boards.cdn.greenhouse.io/build/_shared/chunk-KUDCNGBE.js.map
