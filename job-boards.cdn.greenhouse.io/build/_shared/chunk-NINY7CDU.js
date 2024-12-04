import { a as s } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-LN7LEYRP.js";
import { g as l } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-RBVR5FG5.js";
import {
  B as a,
  D as r,
  a as p,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-N4MC5J4H.js";
import { d as i } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-LNKWYQRG.js";
var f =
  "https://job-boards.cdn.greenhouse.io/build/_assets/external_notifications-GXLSY43N.css";
var e = i(p()),
  t = i(r()),
  w = () => [{ rel: "stylesheet", href: f }],
  h = (c) => {
    let { t: o } = a("board"),
      { urlToken: n, companyName: d } = c,
      [_, x] = (0, e.useState)("");
    return (
      (0, e.useEffect)(() => {
        x(`${window.ENV.JOB_SEEKERS_URL}/users/sign_in?job_board=${n}`);
      }, [n]),
      (0, t.jsxs)("div", {
        className: "external_notifications",
        children: [
          (0, t.jsxs)("div", {
            className: "external_notifications__header",
            children: [
              (0, t.jsx)("div", {
                className: "external_notifications__header__title",
                children: (0, t.jsx)("div", {
                  children: o("external_notifications.notify_me"),
                }),
              }),
              (0, t.jsx)("div", {
                className: "external_notifications__header__description",
                children: o("external_notifications.subscribe", {
                  companyName: d,
                }),
              }),
            ],
          }),
          (0, t.jsx)("a", {
            className: "external_notifications__button",
            target: "_blank",
            href: _,
            children: o("external_notifications.sign_up"),
          }),
          (0, t.jsx)("div", {
            className: "external_notifications__footer",
            children: (0, t.jsx)(s, {
              height: 30,
              width: 100,
              color: l.darkGreen,
            }),
          }),
        ],
      })
    );
  },
  N = h;
export { w as a, N as b };
//# sourceMappingURL=https://job-boards.cdn.greenhouse.io/build/_shared/chunk-NINY7CDU.js.map
