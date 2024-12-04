import {
  a as r,
  b as y,
  c as d,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-RBVR5FG5.js";
import { a as U } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-YC6QRCLG.js";
import { b as F } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-GJ752VEN.js";
import {
  c as G,
  g as I,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-MDREM3VW.js";
import {
  D as t,
  a as l,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-N4MC5J4H.js";
import { d as o } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-LNKWYQRG.js";
var p = o(l()),
  O = o(U()),
  S = o(G());
var f = o(l());
var N = o(l());
var m =
  "https://job-boards.cdn.greenhouse.io/build/_assets/animations-WX4ARK22.css";
var v = o(t()),
  A = () => [{ rel: "stylesheet", href: m }],
  B = (e) => (
    N.useEffect(() => {
      setTimeout(() => e.onAnimationEnd(), 1e3);
    }),
    (0, v.jsx)("div", { className: "fade-in", children: e.children })
  ),
  k = B;
var x = o(l());
var b = o(t()),
  R = () => [{ rel: "stylesheet", href: m }],
  W = (e) => (
    x.useEffect(() => {
      setTimeout(() => e.onAnimationEnd(), 900);
    }),
    (0, b.jsx)("div", { className: "fade-out", children: e.children })
  ),
  _ = W;
var T = o(t()),
  V = (e) => {
    let { showMilliseconds: i, children: c } = e,
      [a, s] = f.useState("FADING_IN"),
      u = a !== "FADE_OUT_COMPLETE";
    return (
      f.useEffect(() => {
        if (a !== "FADE_IN_COMPLETE") return;
        let w = setTimeout(() => {
          s("FADING_OUT");
        }, i);
        return () => clearTimeout(w);
      }, [a, i]),
      u
        ? (0, T.jsx)(a === "FADING_OUT" ? _ : k, {
            onAnimationEnd: () => {
              a === "FADING_IN"
                ? s("FADE_IN_COMPLETE")
                : a === "FADING_OUT" && s("FADE_OUT_COMPLETE");
            },
            children: c,
          })
        : null
    );
  },
  P = V;
var C = o(t()),
  $ = (e) => (
    (e = { ...r, ...e }),
    (0, C.jsx)(d, {
      ...e,
      children: (0, C.jsx)("path", {
        className: `icon--${e.color}`,
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 1.224C6.06 1.224 1.224 6.06 1.224 12C1.224 17.94 6.06 22.776 12 22.776C17.94 22.776 22.776 17.94 22.776 12C22.776 6.06 17.94 1.224 12 1.224ZM12 21.372C6.828 21.372 2.628 17.172 2.628 12C2.628 6.828 6.828 2.628 12 2.628C17.172 2.628 21.372 6.828 21.372 12C21.372 17.172 17.172 21.372 12 21.372ZM12 15.096C12.384 15.096 12.696 14.784 12.696 14.4V6.50397C12.696 6.11997 12.384 5.80797 12 5.80797C11.616 5.80797 11.304 6.11997 11.304 6.50397V14.4C11.304 14.784 11.616 15.096 12 15.096ZM12.924 17.2801C12.924 17.7904 12.5103 18.2041 12 18.2041C11.4897 18.2041 11.076 17.7904 11.076 17.2801C11.076 16.7698 11.4897 16.3561 12 16.3561C12.5103 16.3561 12.924 16.7698 12.924 17.2801Z",
      }),
    })
  ),
  L = $;
var M = "https://job-boards.cdn.greenhouse.io/build/_assets/flash-FW7AE3GF.css";
var g = o(t()),
  q = (e) => (
    (e = { ...r, ...e }),
    (0, g.jsx)(d, {
      ...r,
      ...e,
      children: (0, g.jsx)("path", {
        className: `icon--${e.color}`,
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M1.224 12C1.224 17.94 6.06 22.776 12 22.776C17.94 22.776 22.776 17.94 22.776 12C22.776 6.06 17.94 1.224 12 1.224C6.06 1.224 1.224 6.06 1.224 12ZM2.628 12C2.628 6.828 6.828 2.628 12 2.628C17.172 2.628 21.372 6.828 21.372 12C21.372 17.172 17.172 21.372 12 21.372C6.828 21.372 2.628 17.172 2.628 12ZM7.404 12.9L10.008 15.504C10.272 15.768 10.716 15.768 11.016 15.504L16.848 9.672C17.124 9.396 17.124 8.952 16.848 8.676C16.572 8.4 16.128 8.4 15.852 8.676L10.668 13.86C10.584 13.944 10.44 13.944 10.356 13.86L8.4 11.904C8.124 11.628 7.68 11.628 7.404 11.904C7.128 12.18 7.128 12.624 7.404 12.9Z",
      }),
    })
  ),
  se = q;
var n = o(t()),
  H = 8e3,
  Ce = () => [...y(), ...A(), ...R(), { rel: "stylesheet", href: M }],
  D = (e) => {
    let [i, c] = (0, p.useState)(!1);
    if (
      ((0, p.useEffect)(() => {
        c(!0);
      }, [c]),
      !i)
    )
      return null;
    let { icon: a, backgroundColor: s, message: u } = e,
      E = (0, S.default)({
        "flash-contents": !0,
        [`flash-contents--${s}`]: !0,
      }),
      h = window.document.getElementById("react-portal-mount-point");
    return h
      ? (0, O.createPortal)(
          (0, n.jsx)(P, {
            showMilliseconds: H,
            children: (0, n.jsxs)("div", {
              className: E,
              children: [
                (0, n.jsx)("span", {
                  className: "icon-container",
                  children: a,
                }),
                (0, n.jsx)(I, { children: u }),
              ],
            }),
          }),
          h,
        )
      : null;
  };
var ge = (e) => {
    let { message: i } = e;
    return (0, n.jsx)(D, {
      icon: (0, n.jsx)(L, { color: "red" }),
      backgroundColor: "extra-light-red",
      message: i,
    });
  },
  Ee = (e) => {
    let { message: i } = e;
    return (0, n.jsx)(D, {
      icon: (0, n.jsx)(F, { size: "small", color: "green" }),
      backgroundColor: "white",
      message: i,
    });
  };
export { L as a, se as b, Ce as c, ge as d, Ee as e };
//# sourceMappingURL=https://job-boards.cdn.greenhouse.io/build/_shared/chunk-WDECQUGD.js.map
