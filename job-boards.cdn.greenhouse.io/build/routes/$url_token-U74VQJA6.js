import {
  a as j,
  b as I,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-NINY7CDU.js";
import {
  a as x,
  b as w,
  c as v,
  d as N,
  e as C,
  f as D,
  g as T,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-QOJJFROH.js";
import "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-LN7LEYRP.js";
import { g as F } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-WBM5WILF.js";
import "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-ENIZGE37.js";
import {
  c as h,
  d as g,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-WDECQUGD.js";
import "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-RBVR5FG5.js";
import "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-YC6QRCLG.js";
import "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-AFCYHYWW.js";
import { a as P } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-OT6GQDLW.js";
import "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-5Z66SK7N.js";
import { c as m } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-7VVIAXJZ.js";
import { b as k } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-DOU4TBEW.js";
import {
  b as y,
  c as b,
  d as L,
  e as _,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-KUDCNGBE.js";
import "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-GJ752VEN.js";
import {
  a as rt,
  c as st,
  h as p,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-MDREM3VW.js";
import {
  D as u,
  g as d,
  l as f,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-N4MC5J4H.js";
import { d as r } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-LNKWYQRG.js";
var R = r(rt());
var S = r(st());
var t = r(u()),
  nt = ({ data: o }) => [
    {
      title: m("board")("page_title", {
        companyName: o.board.name,
        interpolation: { escapeValue: !1 },
      }),
    },
  ];
function at() {
  return [
    ...x(),
    ...C(),
    ...F(),
    ...N(),
    ...y(),
    ...k(),
    ...j(),
    ...w(),
    ...h(),
    { rel: "stylesheet", href: v },
  ];
}
var it = { i18n: ["board", "job_post"] };
function B() {
  let {
      jobPosts: o,
      featuredPosts: l,
      board: e,
      departments: A,
      recentlyLiveDepartments: E,
      offices: M,
      departmentIds: s,
      officeIds: n,
      customFieldFilters: a,
      keyword: c,
      urlToken: H,
      customFields: V,
    } = f(),
    {
      board_layout: O,
      allow_external_notifications: U,
      logo: i,
      filters: G,
      outside_label: J,
      enable_recruitics: X,
      header_text: q,
    } = L(),
    { withTrackingParams: z } = _(),
    [K] = d(),
    Q = m("common"),
    W = K.get("error"),
    Y = s && s.length > 0,
    Z = n && n.length > 0,
    $ = a && Object.values(a).some((ot) => ot.length > 0),
    tt = Z || Y || $ || !!c || o.page !== 1,
    et = U && E.length > 0;
  return (
    P(X),
    (0, t.jsxs)("div", {
      className: "index--content",
      children: [
        W === "true" &&
          (0, t.jsx)(g, { message: Q("errors.job_post_inactive") }),
        (0, t.jsx)(b, {
          url: i.url,
          href: i.href && z(i.href),
          companyName: e.name,
        }),
        (0, t.jsx)(T, { headerText: q, companyName: e.name }),
        (0, t.jsxs)("div", {
          className: (0, S.default)("index--header", {
            "index--header__no-description": !e.content,
          }),
          children: [
            e.content &&
              (0, t.jsx)("div", {
                className: "index--description",
                children: (0, t.jsx)(p, {
                  children: (0, t.jsx)("span", {
                    dangerouslySetInnerHTML: { __html: e.content },
                  }),
                }),
              }),
            et && (0, t.jsx)(I, { urlToken: H, companyName: e.name }),
          ],
        }),
        (0, t.jsx)(D, {
          departments: A,
          offices: M,
          customFields: V,
          departmentIds: s,
          officeIds: n,
          customFieldFilters: a,
          keyword: c,
          boardLayoutConfiguration: O,
          internalBoard: !1,
          filterConfiguration: G,
          filtered: tt,
          jobPosts: o,
          featuredPosts: l,
          outsideLabel: J,
        }),
      ],
    })
  );
}
export { B as default, it as handle, at as links, nt as meta };
//# sourceMappingURL=https://job-boards.cdn.greenhouse.io/build/routes/$url_token-U74VQJA6.js.map
