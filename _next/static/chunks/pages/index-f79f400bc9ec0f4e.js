(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (n, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return s(5901);
        },
      ]);
    },
    5901: function (n, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          __N_SSG: function () {
            return _;
          },
          default: function () {
            return r;
          },
        });
      var u = s(5893),
        e = s(172),
        a = s(7312),
        c = s(6582),
        i = s(6132),
        _ = !0;
      function r(n) {
        let { page: t, footer: s } = n;
        return (0, u.jsxs)("div", {
          className: "home",
          children: [
            t && (0, u.jsx)(i.Z, { data: t.data }),
            t && (0, u.jsx)(e.p, { slices: t.data.slices, components: a.w }),
            s && (0, u.jsx)(c.Z, { data: s.data }),
          ],
        });
      }
    },
  },
  function (n) {
    n.O(0, [204, 979, 774, 888, 179], function () {
      return n((n.s = 5557));
    }),
      (_N_E = n.O());
  },
]);
