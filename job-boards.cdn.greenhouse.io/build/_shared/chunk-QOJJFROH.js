import {
  a as le,
  b as ce,
  c as me,
  d as fe,
  e as ue,
  f as ge,
  h as G,
  i as _e,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-WBM5WILF.js";
import {
  a as V,
  c as O,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-RBVR5FG5.js";
import { a as Ee } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-AFCYHYWW.js";
import {
  b as pe,
  c as be,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-7VVIAXJZ.js";
import {
  d as Z,
  e as z,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-KUDCNGBE.js";
import {
  c as W,
  e as se,
  f as R,
  g as J,
  h as de,
  j as M,
  m as Q,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-MDREM3VW.js";
import {
  B as H,
  D as p,
  a as ne,
  c as E,
  h as $,
} from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-N4MC5J4H.js";
import { d as a } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-LNKWYQRG.js";
var ye =
  "https://job-boards.cdn.greenhouse.io/build/_assets/job_posts-5V57E47J.css";
var xe = a(W());
var he =
  "https://job-boards.cdn.greenhouse.io/build/_assets/index-MUDZ5WXR.css";
var g = a(p()),
  ve = () => [{ rel: "stylesheet", href: he }, ...le()],
  Ze = (e) => {
    let { headers: t, rows: r, rowClassName: o, defaultHeader: l } = e,
      k = (0, xe.default)({ cell: !0 }),
      y = t && t.length > 0,
      w = y
        ? t == null
          ? void 0
          : t.map((x, c) =>
              (0, g.jsx)(
                "th",
                { scope: "col", children: (0, g.jsx)(Q, { children: x }) },
                "header-" + c,
              ),
            )
        : (0, g.jsx)("th", {
            scope: "col",
            className: "visually-hidden",
            children: (0, g.jsx)(Q, { children: l }),
          }),
      C = r.map((x, c) =>
        (0, g.jsx)(
          "tr",
          {
            className: o,
            children: x.map((f, n) => {
              var u;
              return (0, g.jsx)(
                "td",
                {
                  className: k,
                  children: (0, g.jsxs)("a", {
                    href: f.href,
                    target: "_top",
                    children: [
                      (0, g.jsxs)(J, {
                        medium: f.emphasis,
                        children: [
                          f.primaryBody,
                          (u = f.tags) == null
                            ? void 0
                            : u.map((m, s) =>
                                (0, g.jsx)(
                                  ce,
                                  {
                                    label: m.label,
                                    color: m.color,
                                    spacing: !0,
                                  },
                                  s,
                                ),
                              ),
                        ],
                      }),
                      (0, g.jsx)(M, {
                        metadata: !0,
                        children: f.secondaryBody,
                      }),
                    ],
                  }),
                },
                "cell-" + n,
              );
            }),
          },
          "row-" + c,
        ),
      );
    return (0, g.jsxs)("table", {
      children: [
        (y || l) &&
          (0, g.jsx)("thead", { children: (0, g.jsx)("tr", { children: w }) }),
        (0, g.jsx)("tbody", { children: C }),
      ],
    });
  },
  we = Ze;
var b = a(p()),
  vt = () => [...ve(), { rel: "stylesheet", href: ye }],
  ze = ({ jobPosts: e = [], internalBoard: t = !1, filtered: r }) => {
    let { t: o } = H("board"),
      { display_hiring_team: l, display_department_hierarchy: k } = Z(),
      { buildRecruiterText: y, buildHiringManagerText: w } = me(),
      { withTrackingParams: C } = z(),
      x = l && t;
    if (e.length === 0)
      return (0, b.jsx)("div", {
        className: "job-posts__empty-state",
        children: r
          ? (0, b.jsxs)(b.Fragment, {
              children: [
                (0, b.jsx)(J, {
                  metadata: !0,
                  children: o("job_posts.no_jobs_matching_filter"),
                }),
                (0, b.jsx)(M, {
                  metadata: !0,
                  children: o("job_posts.change_filters"),
                }),
              ],
            })
          : (0, b.jsx)(J, {
              metadata: !0,
              children: o("job_posts.no_job_posts"),
            }),
      });
    let c = [];
    e.forEach((n) => {
      var s, d, N, P, v;
      let u = n.department || n.section,
        m = c.find((S) => S.id === (u == null ? void 0 : u.id));
      m
        ? m.jobPosts.push(n)
        : c.push({
            id:
              ((s = n.department) == null ? void 0 : s.id) ||
              ((d = n.section) == null ? void 0 : d.id),
            name:
              ((N = n.department) == null ? void 0 : N.name) ||
              ((P = n.section) == null ? void 0 : P.name) ||
              o("no_department"),
            path: (v = n.department) == null ? void 0 : v.path.join(" / "),
            jobPosts: [n],
          });
    });
    let f = (n) => {
      let u = n.id || -1,
        m = [];
      x &&
        (m.push(o("job_posts.job_header")),
        m.push(o("job_posts.contacts_header")));
      let s = n.jobPosts.map((d) => {
        var P, v;
        let N = [
          {
            primaryBody: d.title,
            emphasis: !0,
            secondaryBody: d.location,
            href: C(d.absolute_url),
            tags: _e(d),
          },
        ];
        if (x) {
          let S = w(
              ((P = d.hiring_team_members) == null
                ? void 0
                : P.hiring_managers) || [],
            ),
            D = y(
              ((v = d.hiring_team_members) == null ? void 0 : v.recruiters) ||
                [],
            );
          N.push({
            primaryBody: S || "",
            secondaryBody: D || "",
            href: C(d.absolute_url),
          });
        }
        return N;
      });
      return (0, b.jsxs)(
        "div",
        {
          className: "job-posts",
          children: [
            k &&
              n.path &&
              (0, b.jsx)("div", {
                className: "job-posts--department-path",
                children: (0, b.jsx)(M, { metadata: !0, children: n.path }),
              }),
            (0, b.jsx)(R, { children: n.name }),
            (0, b.jsx)("div", {
              className: "job-posts--table",
              children: (0, b.jsx)(we, {
                rows: s,
                headers: m,
                rowClassName: "job-post",
                defaultHeader: o("job_posts.job_header"),
              }),
            }),
          ],
        },
        u,
      );
    };
    return (0, b.jsx)("div", { children: c.map((n) => f(n)) });
  },
  Ce = ze;
var ke =
  "https://job-boards.cdn.greenhouse.io/build/_assets/featured_posts-IK3PENIL.css";
var Y = a(p()),
  Ke = (e) => (
    (e = { ...V, ...e }),
    (0, Y.jsx)(O, {
      ...e,
      children: (0, Y.jsx)("path", {
        className: `icon--${e.color}`,
        d: "M21.6001 5.66513H16.0669C16.0669 5.64593 16.0669 5.62793 16.0669 5.60993C16.0669 4.53071 15.6381 3.49569 14.875 2.73257C14.1119 1.96944 13.0769 1.54073 11.9977 1.54073C10.9184 1.54073 9.88342 1.96944 9.12029 2.73257C8.35717 3.49569 7.92845 4.53071 7.92845 5.60993C7.92845 5.62793 7.92845 5.64593 7.92845 5.66513H2.40005C2.2091 5.66513 2.02596 5.74098 1.89094 5.87601C1.75591 6.01103 1.68005 6.19417 1.68005 6.38513V21.3851C1.68005 21.5761 1.75591 21.7592 1.89094 21.8942C2.02596 22.0293 2.2091 22.1051 2.40005 22.1051H21.6001C21.791 22.1051 21.9741 22.0293 22.1092 21.8942C22.2442 21.7592 22.3201 21.5761 22.3201 21.3851V6.38513C22.3201 6.19417 22.2442 6.01103 22.1092 5.87601C21.9741 5.74098 21.791 5.66513 21.6001 5.66513ZM9.37085 5.60993C9.37085 4.91262 9.64786 4.24387 10.1409 3.7508C10.634 3.25773 11.3027 2.98073 12.0001 2.98073C12.6974 2.98073 13.3661 3.25773 13.8592 3.7508C14.3522 4.24387 14.6293 4.91262 14.6293 5.60993C14.6293 5.62793 14.6293 5.64593 14.6293 5.66513H9.36845C9.36965 5.64593 9.37085 5.62793 9.37085 5.60993ZM20.8801 7.10512V12.2939H12.7201V11.5739C12.7201 11.4794 12.7014 11.3857 12.6652 11.2984C12.6291 11.211 12.576 11.1317 12.5092 11.0648C12.4423 10.9979 12.3629 10.9449 12.2756 10.9087C12.1882 10.8725 12.0946 10.8539 12.0001 10.8539C11.9055 10.8539 11.8119 10.8725 11.7245 10.9087C11.6372 10.9449 11.5578 10.9979 11.4909 11.0648C11.4241 11.1317 11.371 11.211 11.3349 11.2984C11.2987 11.3857 11.2801 11.4794 11.2801 11.5739V12.2939H3.12005V7.10512H20.8801ZM3.12005 20.6651V13.7339H11.2801V14.4539C11.2801 14.6449 11.3559 14.828 11.4909 14.963C11.626 15.0981 11.8091 15.1739 12.0001 15.1739C12.191 15.1739 12.3741 15.0981 12.5092 14.963C12.6442 14.828 12.7201 14.6449 12.7201 14.4539V13.7339H20.8801V20.6651H3.12005Z",
      }),
    })
  ),
  Pe = Ke;
var _ = a(p()),
  Ue = ({ featuredPost: e }) => {
    let { withTrackingParams: t } = z();
    return (0, _.jsx)("a", {
      href: t(e.absolute_url),
      target: "_top",
      children: (0, _.jsxs)("div", {
        className: "featured-posts__card",
        children: [
          (0, _.jsx)("p", {
            className: "body body--medium featured-posts__title",
            children: e.title,
          }),
          (0, _.jsxs)("div", {
            className: "featured-posts__tags",
            children: [
              e.location &&
                (0, _.jsxs)("div", {
                  className: "featured-posts__tag",
                  children: [
                    (0, _.jsx)(fe, { size: "md" }),
                    (0, _.jsx)("p", {
                      className:
                        "body body__secondary body--metadata featured-posts__tag-text",
                      children: e.location,
                    }),
                  ],
                }),
              e.payRange &&
                (0, _.jsxs)("div", {
                  className: "featured-posts__tag",
                  children: [
                    (0, _.jsx)(Pe, { size: "md" }),
                    (0, _.jsx)("p", {
                      className:
                        "body body__secondary body--metadata featured-posts__tag-text",
                      children: e.payRange,
                    }),
                  ],
                }),
            ],
          }),
          (0, _.jsx)("div", {
            className: "featured-posts__content",
            children: (0, _.jsx)(de, {
              children: (0, _.jsx)("div", {
                dangerouslySetInnerHTML: { __html: e.content || "" },
              }),
            }),
          }),
        ],
      }),
    });
  },
  Be = Ue;
var A = a(p()),
  Vt = () => [{ rel: "stylesheet", href: ke }],
  Xe = ({ featuredPosts: e = [] }) => {
    let { t } = H("board");
    return !e || !e.length
      ? null
      : (0, A.jsxs)("div", {
          className: "featured-posts",
          children: [
            (0, A.jsx)(R, { children: t("featured_jobs") }),
            (0, A.jsx)("div", {
              className: "featured-posts__row",
              children: e.map((r) => (0, A.jsx)(Be, { featuredPost: r }, r.id)),
            }),
          ],
        });
  },
  Ne = Xe;
var Dt =
  "https://job-boards.cdn.greenhouse.io/build/_assets/index-6TXC6ZNG.css";
var T = a(ne());
var te = a(W());
var K = a(ne());
function Se(e, t) {
  let [r, o] = (0, K.useState)(e);
  return (
    (0, K.useEffect)(() => {
      let l = setTimeout(() => o(e), t || 500);
      return () => {
        clearTimeout(l);
      };
    }, [e, t]),
    r
  );
}
var Le =
  "https://job-boards.cdn.greenhouse.io/build/_assets/filters-2M76SHSW.css";
var L = a(p()),
  Kt = () => [{ rel: "stylesheet", href: Le }, ...ue()],
  Fe = (e, t, r) => {
    let o = new URLSearchParams(e);
    return (
      o.delete(t),
      Array.isArray(r) ? r.forEach((l) => o.append(t, l)) : r && o.append(t, r),
      o
    );
  },
  ee = (e, t = 0) =>
    e.flatMap((r) => {
      let o = { value: r.id, label: r.name, depth: t };
      return r.children && r.children.length > 0
        ? [o].concat(ee(r.children, t + 1))
        : o;
    }),
  Ye = ({ boardLayoutConfiguration: e, children: t }) => {
    if (e !== "side_by_side") return t;
    let r = (0, te.default)({
      "filters__column-sticky-container": e === "side_by_side",
    });
    return (0, L.jsx)("div", { className: r, children: t });
  },
  et = (e) => {
    let { t } = H("board"),
      [r, o] = (0, T.useState)(e.keyword || ""),
      l = Se(r, 250),
      k = (0, T.useRef)(r),
      { outside_label: y, display_department_hierarchy: w } = Z(),
      {
        departments: C = [],
        offices: x = [],
        customFields: c = [],
        officeIds: f,
        departmentIds: n,
        customFieldFilters: u,
        config: m,
      } = e,
      s = ee(C),
      d = ee(x),
      N = $(),
      P = E(),
      v = (0, T.useCallback)(
        (i) => {
          i.delete("page"), N(i, { preventScrollReset: !0 });
        },
        [N],
      );
    (0, T.useEffect)(() => {
      if (l === k.current) return;
      k.current = l;
      let i = Fe(P.search, "keyword", l);
      v(i);
    }, [l, P.search, v]);
    let S = (i, F) => {
        let j = Array.isArray(i) ? i.map((je) => je.value) : i.value,
          I = Fe(P.search, F, j);
        v(I);
      },
      D = s.filter((i) =>
        n == null ? void 0 : n.includes(i.value.toString()),
      ),
      q = d.filter((i) =>
        f == null ? void 0 : f.includes(i.value.toString()),
      ),
      ae = {};
    c &&
      u &&
      c.forEach((i) => {
        u[i.id] &&
          i.options &&
          (ae[i.id] = i.options
            .filter((F) => u[i.id].includes(F.id.toString()))
            .map((F) => ({ label: F.name, value: F.id })));
      });
    let Me = (0, te.default)({
      filters: !0,
      filters__column: e.boardLayoutConfiguration === "side_by_side",
    });
    return (0, L.jsx)("div", {
      className: Me,
      children: (0, L.jsxs)(Ye, {
        boardLayoutConfiguration: e.boardLayoutConfiguration,
        children: [
          (0, L.jsx)(ge, {
            id: "keyword-filter",
            label: t("filters.search.label"),
            placeholder: t("filters.search.placeholder"),
            required: !1,
            value: r,
            onChange: (i) => o(i.currentTarget.value),
            maxLength: 255,
            outsideLabel: y,
          }),
          m.include_department_filter &&
            (0, L.jsx)(G, {
              isMulti: !0,
              id: "department-filter",
              label: t("filters.department"),
              options: s,
              grouped: w,
              isClearable: !1,
              selected: D,
              onSelect: (i) => S(i, "departments[]"),
              outsideLabel: y,
            }),
          m.include_office_filter &&
            (0, L.jsx)(G, {
              isMulti: !0,
              id: "office-filter",
              label: t("filters.office"),
              options: d,
              grouped: !0,
              isClearable: !1,
              selected: q,
              onSelect: (i) => S(i, "offices[]"),
              outsideLabel: y,
            }),
          m.allow_custom_field_filters &&
            c.map((i) => {
              var j;
              let F =
                ((j = i.options) == null
                  ? void 0
                  : j.map((I) => ({ value: I.id, label: I.name }))) || [];
              return (0, L.jsx)(
                G,
                {
                  isMulti: !0,
                  id: `custom-field-${i.id}`,
                  label: i.name,
                  options: F,
                  selected: ae[i.id],
                  onSelect: (I) => S(I, `field_${i.id}[]`),
                  outsideLabel: y,
                },
                i.id,
              );
            }),
        ],
      }),
    });
  },
  He = et;
var ie = a(W());
var De = a(Ee());
var X = a(W());
var oe = a(p()),
  tt = (e) => (
    (e = { ...V, ...e }),
    (0, oe.jsx)(O, {
      ...e,
      children: (0, oe.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0.806367 6.54175C0.337737 6.07312 0.337738 5.31332 0.806366 4.84469L5.32352 0.327526C5.63594 0.0151072 6.14247 0.0151062 6.45489 0.327525C6.76731 0.639944 6.76731 1.14648 6.45489 1.4589L2.22058 5.69322L6.45489 9.92753C6.76731 10.2399 6.76731 10.7465 6.45489 11.0589C6.14248 11.3713 5.63594 11.3713 5.32352 11.0589L0.806367 6.54175Z",
        fill: "#222222",
      }),
    })
  ),
  Te = tt;
var re = a(p()),
  ot = (e) => (
    (e = { ...V, ...e }),
    (0, re.jsx)(O, {
      ...e,
      children: (0, re.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M5.90353 4.84448C6.37216 5.31311 6.37216 6.07291 5.90353 6.54154L1.38638 11.0587C1.07396 11.3711 0.567425 11.3711 0.255006 11.0587C-0.0574141 10.7463 -0.0574145 10.2398 0.255005 9.92733L4.48932 5.69301L0.255005 1.4587C-0.0574141 1.14628 -0.0574145 0.639752 0.255005 0.327332C0.567424 0.0149128 1.07396 0.0149126 1.38638 0.327332L5.90353 4.84448Z",
        fill: "#222222",
      }),
    })
  ),
  Ie = ot;
var U = (e, t) => Array.from(new Array(t - e), (r, o) => o + e),
  Re = (e, t) => {
    let o = "...";
    return t <= 5
      ? U(1, t + 1)
      : e < 5
        ? [...U(1, 5), o, t]
        : e > t - 5 + 1
          ? [1, o, ...U(t - 3, t + 1)]
          : [1, o, ...U(e - 1, e + 2), o, t];
  };
var Ve =
  "https://job-boards.cdn.greenhouse.io/build/_assets/index-HUOF6NAL.css";
var B = a(p()),
  Oe = () => [{ rel: "stylesheet", href: Ve }],
  it = (e) => {
    let { currentPage: t = 1, totalPages: r, onPageChange: o, center: l } = e,
      k = E(),
      y = $(),
      w = (s) => {
        let d = new URLSearchParams(k.search);
        d.delete("page"), d.append("page", s.toString()), y(d);
      },
      C = (s, d) => {
        switch (s) {
          case "pagination":
            return (0, X.default)({ pagination: !0, "pagination--center": l });
          case "pagination__link":
            return (0, X.default)({
              pagination__link: !0,
              "pagination__link--active": t === d,
            });
          default:
            return "";
        }
      },
      x = () => {
        t > 1 && (o && o(t - 1), w(t - 1));
      },
      c = () => {
        t < r && (o && o(t + 1), w(t + 1));
      },
      f = (s) => {
        let d = s === "previous",
          v = d ? t === 1 : t === r,
          S = d ? "Previous page" : "Next page",
          D = d ? x : c,
          q = (0, X.default)({
            pagination__btn: !0,
            [`pagination__${s}`]: !0,
            [`pagination__${s}--inactive`]: v,
          });
        return (0, B.jsx)("button", {
          "aria-label": S,
          "aria-disabled": v,
          type: "button",
          className: q,
          onClick: D,
          children: d
            ? (0, B.jsx)(Te, { viewBox: "0 0 7 12" })
            : (0, B.jsx)(Ie, { viewBox: "0 0 7 12" }),
        });
      },
      n = "...",
      u = Re(t, r),
      m = (0, B.jsx)("ul", {
        children: u.map((s, d) =>
          (0, B.jsx)(
            "li",
            {
              children:
                s === n
                  ? (0, B.jsx)("span", { children: s })
                  : (0, B.jsx)("button", {
                      "aria-label": `Go to page ${s}`,
                      "aria-current": t === s,
                      className: C("pagination__link", s),
                      onClick: () => w(s),
                      children: s,
                    }),
            },
            d,
          ),
        ),
      });
    return (0, B.jsxs)("nav", {
      role: "navigation",
      "aria-label": "Pagination",
      className: C("pagination"),
      children: [f("previous"), m, f("next")],
    });
  },
  Ae = it;
var h = a(p()),
  bo = () => [...Oe()],
  at = pe()
    ? window.ENV.MAX_POSTS_PER_PAGE
    : De.default.get("max_posts_per_page"),
  nt = ({
    jobPosts: e,
    featuredPosts: t,
    departments: r,
    offices: o,
    customFields: l,
    departmentIds: k,
    officeIds: y,
    customFieldFilters: w,
    keyword: C,
    filterConfiguration: x,
    boardLayoutConfiguration: c,
    internalBoard: f,
    filtered: n,
  }) => {
    let { t: u } = H("board"),
      m = (0, ie.default)({
        index__side_by_side: c === "side_by_side",
        index__main: !0,
      }),
      s = (0, ie.default)({
        padding: !0,
        "index__side_by_side--right": c === "side_by_side",
      });
    return (0, h.jsxs)(h.Fragment, {
      children: [
        (0, h.jsx)(Ne, { featuredPosts: t == null ? void 0 : t.data }),
        (0, h.jsxs)("div", {
          className: m,
          children: [
            (0, h.jsx)(He, {
              departments: r,
              offices: o,
              customFields: l,
              departmentIds: k,
              officeIds: y,
              customFieldFilters: w,
              keyword: C,
              config: x,
              boardLayoutConfiguration: c,
            }),
            (0, h.jsxs)("div", {
              className: s,
              children: [
                (0, h.jsx)(R, {
                  as: "h2",
                  large: !0,
                  testId: "job-count-header",
                  children: u("total_jobs", { count: e.total }),
                }),
                (0, h.jsx)(Ce, {
                  jobPosts: e.data,
                  filtered: n,
                  internalBoard: f,
                }),
                e.total > at &&
                  (0, h.jsx)("div", {
                    className: "pagination-wrapper",
                    children: (0, h.jsx)(Ae, {
                      currentPage: e.page,
                      totalPages: e.total_pages,
                      center: !0,
                    }),
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  _o = nt;
var Je = a(p()),
  vo = ({ headerText: e, companyName: t }) => {
    let r = be("board");
    if ((e == null ? void 0 : e.trim()) === "") return null;
    let o = e || r("current_openings", { companyName: t });
    return (0, Je.jsx)(se, { children: o });
  };
export { vt as a, Vt as b, Dt as c, Kt as d, bo as e, _o as f, vo as g };
//# sourceMappingURL=https://job-boards.cdn.greenhouse.io/build/_shared/chunk-QOJJFROH.js.map
