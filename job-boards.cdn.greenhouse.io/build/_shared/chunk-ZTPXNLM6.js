import {
  a as h,
  b as x,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-WDECQUGD.js";
import {
  a as k,
  b as y,
  c as C,
  e as b,
  f as g,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-RBVR5FG5.js";
import { a as N } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-YC6QRCLG.js";
import {
  g as d,
  k as u,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-MDREM3VW.js";
import {
  B as m,
  D as i,
  a as f,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-N4MC5J4H.js";
import {
  c as L,
  d as r,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-LNKWYQRG.js";
var F = L((Y, S) => {
  S.exports = {};
});
var l = r(f()),
  w = r(N());
var v =
  "https://job-boards.cdn.greenhouse.io/build/_assets/quick_apply_flash-BFP7HNSL.css";
var t = r(i()),
  j = (e) => (
    (e = { ...k, ...e }),
    (0, t.jsx)(C, {
      ...e,
      children: (0, t.jsx)("path", {
        className: `icon--${e.color}`,
        fill: e.color,
        d: "M18.1072 5.17279H9.19119C9.00023 5.17279 8.8171 5.24865 8.68207 5.38367C8.54705 5.5187 8.47119 5.70183 8.47119 5.89279C8.47119 6.08375 8.54705 6.26688 8.68207 6.40191C8.8171 6.53693 9.00023 6.61279 9.19119 6.61279H14.9212C15.0393 6.61399 15.1543 6.65 15.252 6.71631C15.3497 6.78261 15.4257 6.87627 15.4704 6.98555C15.5151 7.09483 15.5266 7.21488 15.5034 7.33065C15.4802 7.44642 15.4234 7.55278 15.34 7.63639L3.20439 19.7768C3.06736 19.9097 2.98709 20.0905 2.98038 20.2813C2.97367 20.4721 3.04104 20.6581 3.16839 20.8004C3.23437 20.8706 3.31378 20.9269 3.4019 20.9659C3.49003 21.0048 3.58509 21.0257 3.68144 21.0273C3.77779 21.0289 3.87347 21.0111 3.96282 20.975C4.05217 20.9389 4.13336 20.8852 4.20159 20.8172L16.3636 8.65999C16.4475 8.57635 16.5543 8.51941 16.6705 8.49637C16.7867 8.47333 16.9071 8.48521 17.0166 8.53051C17.1261 8.57582 17.2197 8.65252 17.2856 8.75094C17.3516 8.84937 17.3869 8.96511 17.3872 9.08359V14.8136C17.3872 15.0045 17.463 15.1877 17.5981 15.3227C17.7331 15.4577 17.9162 15.5336 18.1072 15.5336C18.2981 15.5336 18.4813 15.4577 18.6163 15.3227C18.7513 15.1877 18.8272 15.0045 18.8272 14.8136V5.89279C18.8272 5.70183 18.7513 5.5187 18.6163 5.38367C18.4813 5.24865 18.2981 5.17279 18.1072 5.17279Z",
      }),
    })
  ),
  I = j;
var o = r(i()),
  O = () => [...y(), { rel: "stylesheet", href: v }],
  Z = ({ type: e, closeFlash: E }) => {
    let { t: s } = m("job_post"),
      [P, p] = (0, l.useState)(!1),
      [_, B] = (0, l.useState)("");
    if (
      ((0, l.useEffect)(() => {
        B(`${window.ENV.JOB_SEEKERS_URL}/profile`);
      }, []),
      (0, l.useEffect)(() => {
        p(!0);
      }, [p]),
      !P)
    )
      return null;
    let n = (0, o.jsx)(x, { color: "green" }),
      a = s("application.quick_apply.success");
    e === "error" &&
      ((n = (0, o.jsx)(h, { color: "red" })),
      (a = s("application.quick_apply.error")));
    let c = window.document.getElementById("react-portal-mount-point");
    return c
      ? (0, w.createPortal)(
          (0, o.jsxs)("div", {
            className: "quick-apply-flash",
            children: [
              (0, o.jsx)("span", { children: n }),
              (0, o.jsxs)("div", {
                className: "flash-body",
                children: [
                  (0, o.jsx)(d, { children: a }),
                  (0, o.jsxs)("div", {
                    className: "job-seekers-link",
                    children: [
                      (0, o.jsx)(u, {
                        href: _,
                        target: "_blank",
                        children: s("application.quick_apply.edit_profile"),
                      }),
                      (0, o.jsx)(I, { color: "green", size: "xs" }),
                    ],
                  }),
                ],
              }),
              (0, o.jsx)(b, {
                label: "Close flash",
                icon: g,
                size: "sm",
                onClick: E,
              }),
            ],
          }),
          c,
        )
      : null;
  };
var q = r(f()),
  G = (0, q.createContext)(null);
export { O as a, Z as b, G as c, F as d };
//# sourceMappingURL=https://job-boards.cdn.greenhouse.io/build/_shared/chunk-ZTPXNLM6.js.map
