(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [339],
  {
    8339: function (n, t, u) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/[uid]",
        function () {
          return u(2172);
        },
      ]);
    },
    2172: function (n, t, u) {
      "use strict";
      u.r(t),
        u.d(t, {
          __N_SSG: function () {
            return _;
          },
          default: function () {
            return r;
          },
        });
      var e = u(5893),
        s = u(172),
        a = u(7312),
        c = u(6582),
        i = u(6132),
        _ = !0;
      function r(n) {
        let { page: t, posts: u, tags: _, footer: r } = n;
        return (0, e.jsxs)("div", {
          className: "page",
          children: [
            t && (0, e.jsx)(i.Z, { data: t.data }),
            t &&
              (0, e.jsx)(s.p, {
                slices: t.data.slices,
                components: a.w,
                context: { posts: u, tags: _ },
              }),
            r && (0, e.jsx)(c.Z, { data: r.data }),
          ],
        });
      }
    },
  },
  function (n) {
    n.O(0, [204, 979, 774, 888, 179], function () {
      return n((n.s = 8339));
    }),
      (_N_E = n.O());
  },
]);
