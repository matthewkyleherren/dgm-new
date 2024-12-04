import { g as n } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-RBVR5FG5.js";
import { c } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-MDREM3VW.js";
import {
  B as a,
  D as i,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-N4MC5J4H.js";
import { d as s } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-LNKWYQRG.js";
var u = (t) =>
  t
    ? t.replace(/^_*(.)|_+(.)/g, (o, r, e) =>
        r ? r.toUpperCase() : " " + e.toUpperCase(),
      )
    : "Untitled Sans";
function v(t, o, r) {
  return {
    "--custom-link-color": (t == null ? void 0 : t.link_color) || o,
    "--custom-active-field-color":
      (t == null ? void 0 : t.active_field_color) || o,
    "--custom-focus-color": (t == null ? void 0 : t.active_field_color) || o,
    "--custom-list-hover-color":
      (t == null ? void 0 : t.list_selection_color) || `${o}40`,
    "--custom-primary-typography-color":
      (t == null ? void 0 : t.primary_font_color) || r,
    "--custom-button-color": (t == null ? void 0 : t.button_color) || n.blue,
    "--custom-button-hover-color":
      (t == null ? void 0 : t.button_hover_color) || n.buttonHover,
    "--custom-button-text-color":
      (t == null ? void 0 : t.button_text_color) || n.white,
    "--custom-primary-font-family": u(t == null ? void 0 : t.primary_font),
    "--custom-secondary-font-family": u(t == null ? void 0 : t.secondary_font),
    "--custom-dropdown-selection-color":
      t == null ? void 0 : t.dropdown_selection_color,
  };
}
var b = "https://fonts.googleapis.com/css2?",
  _ = ":ital,wght@0,400;0,500;0,700;1,400;1,500;1,700",
  h = [
    "Arial",
    "Courier New",
    "Garamond",
    "Georgia",
    "Helvetica",
    "Palatino",
    "Times",
    "Times New Roman",
    "Untitled Sans",
    "Verdana",
    "untitled_sans",
    "arial",
    "helvetica",
    "times_new_roman",
    "verdana",
  ];
function C(t) {
  let r = [
    t == null ? void 0 : t.primary_font,
    t == null ? void 0 : t.secondary_font,
  ]
    .filter((e) => !!e)
    .filter((e) => !h.includes(e))
    .map((e) => `family=${e == null ? void 0 : e.replace(/ /g, "+")}${_}`)
    .join("&");
  return r.length === 0 ? null : `${b}${r}`;
}
var d =
  "https://job-boards.cdn.greenhouse.io/build/_assets/banner-KMY4CVEB.css";
var m = s(c()),
  l = s(i()),
  B = () => [{ rel: "stylesheet", href: d }],
  P = ({ url: t, internal: o = !1 }) => {
    let { t: r } = a("common");
    if (!t) return null;
    let e = r("labels.banner"),
      p = (0, m.default)({
        "banner-container": !0,
        "banner-container--internal": o,
      });
    return (0, l.jsx)("div", {
      className: p,
      children: (0, l.jsx)("img", { src: t, alt: e, className: "banner" }),
    });
  };
export { v as a, C as b, d as c, B as d, P as e };
//# sourceMappingURL=https://job-boards.cdn.greenhouse.io/build/_shared/chunk-QB4M6L6W.js.map
