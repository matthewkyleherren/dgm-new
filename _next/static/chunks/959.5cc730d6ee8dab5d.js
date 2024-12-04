(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [959, 143],
  {
    187: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return T;
        },
      });
      var r = n(5893);
      let l =
          (...e) =>
          (...t) => {
            for (let n = 0; n < e.length; n++) {
              let r = e[n];
              if (r) {
                let e = r(...t);
                if (null != e) return e;
              }
            }
          },
        i = {
          listItem: "list-item",
          oListItem: "o-list-item",
          list: "group-list-item",
          oList: "group-o-list-item",
          span: "span",
        },
        o = {
          [i.listItem]: "listItem",
          [i.oListItem]: "oListItem",
          [i.list]: "list",
          [i.oList]: "oList",
        },
        s = (e) => (t, n, r, l, i) => {
          let s = e[o[t] || t];
          if (s) return s({ type: t, node: n, text: r, children: l, key: i });
        };
      var a = n(7294);
      let u = () => (++u.i).toString();
      u.i = 0;
      let p = (e) => {
          let t = c(e),
            n = [];
          for (let e = 0; e < t.length; e++) n.push(h(t[e]));
          return { key: u(), children: n };
        },
        d = (e, t = []) => ({
          key: u(),
          type: e.type,
          text: "text" in e ? e.text : void 0,
          node: e,
          children: t,
        }),
        f = (e) => d({ type: i.span, text: e, spans: [] }),
        c = (e) => {
          let t = e.slice(0);
          for (let e = 0; e < t.length; e++) {
            let n = t[e];
            if (n.type === i.listItem || n.type === i.oListItem) {
              let r = [n];
              for (; t[e + 1] && t[e + 1].type === n.type; )
                r.push(t[e + 1]), t.splice(e, 1);
              n.type === i.listItem
                ? (t[e] = { type: i.list, items: r })
                : (t[e] = { type: i.oList, items: r });
            }
          }
          return t;
        },
        h = (e) => {
          if ("text" in e) return d(e, m(e.spans, e));
          if ("items" in e) {
            let t = [];
            for (let n = 0; n < e.items.length; n++) t.push(h(e.items[n]));
            return d(e, t);
          }
          return d(e);
        },
        m = (e, t, n) => {
          if (!e.length) return [f(t.text)];
          let r = e.slice(0);
          r.sort((e, t) => e.start - t.start || t.end - e.end);
          let l = [];
          for (let e = 0; e < r.length; e++) {
            let i = r[e],
              o = (n && n.start) || 0,
              s = i.start - o,
              a = i.end - o,
              u = t.text.slice(s, a),
              p = [];
            for (let t = e; t < r.length; t++) {
              let e = r[t];
              e !== i &&
                (e.start >= i.start && e.end <= i.end
                  ? (p.push(e), r.splice(t, 1), t--)
                  : e.start < i.end &&
                    e.end > i.start &&
                    (p.push({ ...e, end: i.end }),
                    (r[t] = { ...e, start: i.end })));
            }
            0 === e && s > 0 && l.push(f(t.text.slice(0, s)));
            let c = { ...i, text: u };
            l.push(d(c, m(p, { ...t, text: u }, i))),
              a < t.text.length &&
                l.push(
                  f(t.text.slice(a, r[e + 1] ? r[e + 1].start - o : void 0)),
                );
          }
          return l;
        },
        g = (e, t) => x(p(e).children, t),
        x = (e, t) => {
          let n = [];
          for (let r = 0; r < e.length; r++) {
            let l = e[r],
              i = t(l.type, l.node, l.text, x(l.children, t), l.key);
            null != i && n.push(i);
          }
          return n;
        },
        v = (e) => {
          let t = /^(\/(?!\/)|#)/.test(e),
            n = !t && !/^https?:\/\//.test(e);
          return t && !n;
        },
        y = { Any: "Any", Document: "Document", Media: "Media", Web: "Web" },
        k = (e) => {
          var t;
          return {
            link_type: y.Document,
            id: e.id,
            uid: e.uid || void 0,
            type: e.type,
            tags: e.tags,
            lang: e.lang,
            url: null == e.url ? void 0 : e.url,
            slug: null == (t = e.slugs) ? void 0 : t[0],
            ...(e.data && Object.keys(e.data).length > 0
              ? { data: e.data }
              : {}),
          };
        },
        j = (e, ...t) => {
          let n;
          if (!e) return null;
          let r = "link_type" in e ? e : k(e),
            [l] = t;
          switch (
            ((n =
              "function" == typeof l || null == l
                ? { linkResolver: l }
                : { ...l }),
            r.link_type)
          ) {
            case y.Media:
            case y.Web:
              return "url" in r ? r.url : null;
            case y.Document:
              if ("id" in r && n.linkResolver) {
                let e = n.linkResolver(r);
                if (null != e) return e;
              }
              if ("url" in r && r.url) return r.url;
              return null;
            case y.Any:
            default:
              return null;
          }
        },
        b = (e) => null != e,
        C = (e) =>
          !!b(e) &&
          (1 === e.length && "text" in e[0] ? !!e[0].text : !!e.length),
        L = (e) => b(e) && ("id" in e || "url" in e),
        _ = (e, t = {}) => {
          if (e && ("link_type" in e ? L(e) : e)) {
            let n = "target" in e ? e.target : void 0,
              r = j(e, t.linkResolver),
              l = null == r ? void 0 : r,
              i = "string" == typeof l && !v(l),
              o = t.rel
                ? t.rel({ href: l, isExternal: i, target: n })
                : i
                  ? "noreferrer"
                  : void 0;
            return { href: l, target: n, rel: null == o ? void 0 : o };
          }
          return {};
        },
        E = (e) => {
          let t = /^(\/(?!\/)|#)/.test(e),
            n = !t && !/^https?:\/\//.test(e);
          return t && !n;
        };
      n(3454);
      let w = a.forwardRef(function (
        {
          field: e,
          document: t,
          linkResolver: n,
          internalComponent: l,
          externalComponent: i,
          ...o
        },
        s,
      ) {
        let {
            href: a,
            rel: u,
            ...p
          } = _(e ?? t, {
            linkResolver: n,
            rel: "function" == typeof o.rel ? o.rel : void 0,
          }),
          d = u;
        "rel" in o && "function" != typeof o.rel && (d = o.rel);
        let f = ("href" in o ? o.href : a) || "",
          c = f && E(f) ? l || "a" : i || "a";
        return (0, r.jsx)(c, { ref: s, ...p, ...o, href: f, rel: d });
      });
      n(3454);
      let M = (e) =>
        s({
          heading1: ({ children: e, key: t }) =>
            (0, r.jsx)("h1", { children: e }, t),
          heading2: ({ children: e, key: t }) =>
            (0, r.jsx)("h2", { children: e }, t),
          heading3: ({ children: e, key: t }) =>
            (0, r.jsx)("h3", { children: e }, t),
          heading4: ({ children: e, key: t }) =>
            (0, r.jsx)("h4", { children: e }, t),
          heading5: ({ children: e, key: t }) =>
            (0, r.jsx)("h5", { children: e }, t),
          heading6: ({ children: e, key: t }) =>
            (0, r.jsx)("h6", { children: e }, t),
          paragraph: ({ children: e, key: t }) =>
            (0, r.jsx)("p", { children: e }, t),
          preformatted: ({ node: e, key: t }) =>
            (0, r.jsx)("pre", { children: e.text }, t),
          strong: ({ children: e, key: t }) =>
            (0, r.jsx)("strong", { children: e }, t),
          em: ({ children: e, key: t }) => (0, r.jsx)("em", { children: e }, t),
          listItem: ({ children: e, key: t }) =>
            (0, r.jsx)("li", { children: e }, t),
          oListItem: ({ children: e, key: t }) =>
            (0, r.jsx)("li", { children: e }, t),
          list: ({ children: e, key: t }) =>
            (0, r.jsx)("ul", { children: e }, t),
          oList: ({ children: e, key: t }) =>
            (0, r.jsx)("ol", { children: e }, t),
          image: ({ node: t, key: n }) => {
            let l = (0, r.jsx)("img", {
              src: t.url,
              alt: t.alt ?? void 0,
              "data-copyright": t.copyright ? t.copyright : void 0,
            });
            return (0, r.jsx)(
              "p",
              {
                className: "block-img",
                children: t.linkTo
                  ? (0, r.jsx)(w, {
                      linkResolver: e.linkResolver,
                      internalComponent: e.internalLinkComponent,
                      externalComponent: e.externalLinkComponent,
                      field: t.linkTo,
                      children: l,
                    })
                  : l,
              },
              n,
            );
          },
          embed: ({ node: e, key: t }) =>
            (0, r.jsx)(
              "div",
              {
                "data-oembed": e.oembed.embed_url,
                "data-oembed-type": e.oembed.type,
                "data-oembed-provider": e.oembed.provider_name,
                dangerouslySetInnerHTML: { __html: e.oembed.html ?? "" },
              },
              t,
            ),
          hyperlink: ({ node: t, children: n, key: l }) =>
            (0, r.jsx)(
              w,
              {
                field: t.data,
                linkResolver: e.linkResolver,
                internalComponent: e.internalLinkComponent,
                externalComponent: e.externalLinkComponent,
                children: n,
              },
              l,
            ),
          label: ({ node: e, children: t, key: n }) =>
            (0, r.jsx)("span", { className: e.data.label, children: t }, n),
          span: ({ text: e, key: t }) => {
            let n = [],
              l = 0;
            for (let t of e.split("\n"))
              l > 0 && n.push((0, r.jsx)("br", {}, `${l}__break`)),
                n.push((0, r.jsx)(a.Fragment, { children: t }, `${l}__line`)),
                l++;
            return (0, r.jsx)(a.Fragment, { children: n }, t);
          },
        });
      function I({
        linkResolver: e,
        field: t,
        fallback: n,
        components: i,
        externalLinkComponent: o,
        internalLinkComponent: u,
        ...p
      }) {
        return a.useMemo(() => {
          if (!C(t))
            return null != n ? (0, r.jsx)(r.Fragment, { children: n }) : null;
          {
            let n = l(
                "object" == typeof i ? s(i) : i,
                M({
                  linkResolver: e,
                  internalLinkComponent: u,
                  externalLinkComponent: o,
                }),
              ),
              p = g(t, (e, t, r, l, i) => {
                let o = n(e, t, r, l, i);
                return a.isValidElement(o) && null == o.key
                  ? a.cloneElement(o, { key: i })
                  : o;
              });
            return (0, r.jsx)(r.Fragment, { children: p });
          }
        }, [t, u, o, i, e, n]);
      }
      let R = a.createContext({}),
        S = () => a.useContext(R) || {},
        T = function ({ components: e, ...t }) {
          let n = S(),
            i = l(
              "object" == typeof e ? s(e) : e,
              "object" == typeof n.richTextComponents
                ? s(n.richTextComponents)
                : n.richTextComponents,
            );
          return (0, r.jsx)(I, {
            components: i,
            internalLinkComponent: n.internalLinkComponent,
            externalLinkComponent: n.externalLinkComponent,
            ...t,
          });
        };
    },
    4319: function (e, t) {
      !(function (e) {
        "use strict";
        /*!
         * EasePack 3.12.2
         * https://greensock.com
         *
         * @license Copyright 2008-2023, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var t,
          n,
          r = function () {
            return (
              t ||
              ("undefined" != typeof window &&
                (t = window.gsap) &&
                t.registerPlugin &&
                t)
            );
          },
          l = function (e, t) {
            return !!(void 0 === e ? t : e && !~(e + "").indexOf("false"));
          },
          i = function (e) {
            if ((t = e || r())) {
              n = t.registerEase;
              var l,
                i = t.parseEase(),
                o = function (e) {
                  return function (t) {
                    var n = 0.5 + t / 2;
                    e.config = function (t) {
                      return e(2 * (1 - t) * t * n + t * t);
                    };
                  };
                };
              for (l in i) i[l].config || o(i[l]);
              for (l in (n("slow", p), n("expoScale", d), n("rough", f), c))
                "version" !== l && t.core.globals(l, c[l]);
            }
          },
          o = function (e, t, n) {
            var r =
                (e = Math.min(1, e || 0.7)) < 1 ? (t || 0 === t ? t : 0.7) : 0,
              i = (1 - e) / 2,
              o = i + e,
              s = l(n);
            return function (e) {
              var t = e + (0.5 - e) * r;
              return e < i
                ? s
                  ? 1 - (e = 1 - e / i) * e
                  : t - (e = 1 - e / i) * e * e * e * t
                : e > o
                  ? s
                    ? 1 === e
                      ? 0
                      : 1 - (e = (e - o) / i) * e
                    : t + (e - t) * (e = (e - o) / i) * e * e * e
                  : s
                    ? 1
                    : t;
            };
          },
          s = function (e, n, r) {
            var l = Math.log(n / e),
              i = n - e;
            return (
              r && (r = t.parseEase(r)),
              function (t) {
                return (e * Math.exp(l * (r ? r(t) : t)) - e) / i;
              }
            );
          },
          a = function (e, t, n) {
            (this.t = e),
              (this.v = t),
              n &&
                ((this.next = n),
                (n.prev = this),
                (this.c = n.v - t),
                (this.gap = n.t - e));
          },
          u = function (e) {
            "object" != typeof e && (e = { points: +e || 20 });
            for (
              var n,
                r,
                i,
                o,
                s,
                u,
                p,
                d = e.taper || "none",
                f = [],
                c = 0,
                h = 0 | (+e.points || 20),
                m = h,
                g = l(e.randomize, !0),
                x = l(e.clamp),
                v = t ? t.parseEase(e.template) : 0,
                y = 0.4 * (+e.strength || 1);
              --m > -1;

            )
              (n = g ? Math.random() : (1 / h) * m),
                (r = v ? v(n) : n),
                (i =
                  "none" === d
                    ? y
                    : "out" === d
                      ? (o = 1 - n) * o * y
                      : "in" === d
                        ? n * n * y
                        : n < 0.5
                          ? (o = 2 * n) * o * 0.5 * y
                          : (o = (1 - n) * 2) * o * 0.5 * y),
                g
                  ? (r += Math.random() * i - 0.5 * i)
                  : m % 2
                    ? (r += 0.5 * i)
                    : (r -= 0.5 * i),
                x && (r > 1 ? (r = 1) : r < 0 && (r = 0)),
                (f[c++] = { x: n, y: r });
            for (
              f.sort(function (e, t) {
                return e.x - t.x;
              }),
                u = new a(1, 1, null),
                m = h;
              m--;

            )
              (s = f[m]), (u = new a(s.x, s.y, u));
            return (
              (p = new a(0, 0, u.t ? u : u.next)),
              function (e) {
                var t = p;
                if (e > t.t) {
                  for (; t.next && e >= t.t; ) t = t.next;
                  t = t.prev;
                } else for (; t.prev && e <= t.t; ) t = t.prev;
                return (p = t), t.v + ((e - t.t) / t.gap) * t.c;
              }
            );
          },
          p = o(0.7);
        (p.ease = p), (p.config = o);
        var d = s(1, 2);
        d.config = s;
        var f = u();
        (f.ease = f), (f.config = u);
        var c = { SlowMo: p, RoughEase: f, ExpoScaleEase: d };
        for (var h in c) (c[h].register = i), (c[h].version = "3.12.2");
        r() && t.registerPlugin(p),
          (e.EasePack = c),
          (e.ExpoScaleEase = d),
          (e.RoughEase = f),
          (e.SlowMo = p),
          (e.default = c),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(t);
    },
  },
]);
