"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [578],
  {
    187: function (e, t, r) {
      r.d(t, {
        v: function () {
          return T;
        },
      });
      var l = r(5893);
      let n =
          (...e) =>
          (...t) => {
            for (let r = 0; r < e.length; r++) {
              let l = e[r];
              if (l) {
                let e = l(...t);
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
        s = {
          [i.listItem]: "listItem",
          [i.oListItem]: "oListItem",
          [i.list]: "list",
          [i.oList]: "oList",
        },
        a = (e) => (t, r, l, n, i) => {
          let a = e[s[t] || t];
          if (a) return a({ type: t, node: r, text: l, children: n, key: i });
        };
      var o = r(7294);
      let d = () => (++d.i).toString();
      d.i = 0;
      let m = (e) => {
          let t = u(e),
            r = [];
          for (let e = 0; e < t.length; e++) r.push(g(t[e]));
          return { key: d(), children: r };
        },
        p = (e, t = []) => ({
          key: d(),
          type: e.type,
          text: "text" in e ? e.text : void 0,
          node: e,
          children: t,
        }),
        c = (e) => p({ type: i.span, text: e, spans: [] }),
        u = (e) => {
          let t = e.slice(0);
          for (let e = 0; e < t.length; e++) {
            let r = t[e];
            if (r.type === i.listItem || r.type === i.oListItem) {
              let l = [r];
              for (; t[e + 1] && t[e + 1].type === r.type; )
                l.push(t[e + 1]), t.splice(e, 1);
              r.type === i.listItem
                ? (t[e] = { type: i.list, items: l })
                : (t[e] = { type: i.oList, items: l });
            }
          }
          return t;
        },
        g = (e) => {
          if ("text" in e) return p(e, h(e.spans, e));
          if ("items" in e) {
            let t = [];
            for (let r = 0; r < e.items.length; r++) t.push(g(e.items[r]));
            return p(e, t);
          }
          return p(e);
        },
        h = (e, t, r) => {
          if (!e.length) return [c(t.text)];
          let l = e.slice(0);
          l.sort((e, t) => e.start - t.start || t.end - e.end);
          let n = [];
          for (let e = 0; e < l.length; e++) {
            let i = l[e],
              s = (r && r.start) || 0,
              a = i.start - s,
              o = i.end - s,
              d = t.text.slice(a, o),
              m = [];
            for (let t = e; t < l.length; t++) {
              let e = l[t];
              e !== i &&
                (e.start >= i.start && e.end <= i.end
                  ? (m.push(e), l.splice(t, 1), t--)
                  : e.start < i.end &&
                    e.end > i.start &&
                    (m.push({ ...e, end: i.end }),
                    (l[t] = { ...e, start: i.end })));
            }
            0 === e && a > 0 && n.push(c(t.text.slice(0, a)));
            let u = { ...i, text: d };
            n.push(p(u, h(m, { ...t, text: d }, i))),
              o < t.text.length &&
                n.push(
                  c(t.text.slice(o, l[e + 1] ? l[e + 1].start - s : void 0)),
                );
          }
          return n;
        },
        x = (e, t) => f(m(e).children, t),
        f = (e, t) => {
          let r = [];
          for (let l = 0; l < e.length; l++) {
            let n = e[l],
              i = t(n.type, n.node, n.text, f(n.children, t), n.key);
            null != i && r.push(i);
          }
          return r;
        },
        y = (e) => {
          let t = /^(\/(?!\/)|#)/.test(e),
            r = !t && !/^https?:\/\//.test(e);
          return t && !r;
        },
        j = { Any: "Any", Document: "Document", Media: "Media", Web: "Web" },
        v = (e) => {
          var t;
          return {
            link_type: j.Document,
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
        b = (e, ...t) => {
          let r;
          if (!e) return null;
          let l = "link_type" in e ? e : v(e),
            [n] = t;
          switch (
            ((r =
              "function" == typeof n || null == n
                ? { linkResolver: n }
                : { ...n }),
            l.link_type)
          ) {
            case j.Media:
            case j.Web:
              return "url" in l ? l.url : null;
            case j.Document:
              if ("id" in l && r.linkResolver) {
                let e = r.linkResolver(l);
                if (null != e) return e;
              }
              if ("url" in l && l.url) return l.url;
              return null;
            case j.Any:
            default:
              return null;
          }
        },
        k = (e) => null != e,
        w = (e) =>
          !!k(e) &&
          (1 === e.length && "text" in e[0] ? !!e[0].text : !!e.length),
        _ = (e) => k(e) && ("id" in e || "url" in e),
        C = (e, t = {}) => {
          if (e && ("link_type" in e ? _(e) : e)) {
            let r = "target" in e ? e.target : void 0,
              l = b(e, t.linkResolver),
              n = null == l ? void 0 : l,
              i = "string" == typeof n && !y(n),
              s = t.rel
                ? t.rel({ href: n, isExternal: i, target: r })
                : i
                  ? "noreferrer"
                  : void 0;
            return { href: n, target: r, rel: null == s ? void 0 : s };
          }
          return {};
        },
        N = (e) => {
          let t = /^(\/(?!\/)|#)/.test(e),
            r = !t && !/^https?:\/\//.test(e);
          return t && !r;
        };
      r(3454);
      let L = o.forwardRef(function (
        {
          field: e,
          document: t,
          linkResolver: r,
          internalComponent: n,
          externalComponent: i,
          ...s
        },
        a,
      ) {
        let {
            href: o,
            rel: d,
            ...m
          } = C(e ?? t, {
            linkResolver: r,
            rel: "function" == typeof s.rel ? s.rel : void 0,
          }),
          p = d;
        "rel" in s && "function" != typeof s.rel && (p = s.rel);
        let c = ("href" in s ? s.href : o) || "",
          u = c && N(c) ? n || "a" : i || "a";
        return (0, l.jsx)(u, { ref: a, ...m, ...s, href: c, rel: p });
      });
      r(3454);
      let R = (e) =>
        a({
          heading1: ({ children: e, key: t }) =>
            (0, l.jsx)("h1", { children: e }, t),
          heading2: ({ children: e, key: t }) =>
            (0, l.jsx)("h2", { children: e }, t),
          heading3: ({ children: e, key: t }) =>
            (0, l.jsx)("h3", { children: e }, t),
          heading4: ({ children: e, key: t }) =>
            (0, l.jsx)("h4", { children: e }, t),
          heading5: ({ children: e, key: t }) =>
            (0, l.jsx)("h5", { children: e }, t),
          heading6: ({ children: e, key: t }) =>
            (0, l.jsx)("h6", { children: e }, t),
          paragraph: ({ children: e, key: t }) =>
            (0, l.jsx)("p", { children: e }, t),
          preformatted: ({ node: e, key: t }) =>
            (0, l.jsx)("pre", { children: e.text }, t),
          strong: ({ children: e, key: t }) =>
            (0, l.jsx)("strong", { children: e }, t),
          em: ({ children: e, key: t }) => (0, l.jsx)("em", { children: e }, t),
          listItem: ({ children: e, key: t }) =>
            (0, l.jsx)("li", { children: e }, t),
          oListItem: ({ children: e, key: t }) =>
            (0, l.jsx)("li", { children: e }, t),
          list: ({ children: e, key: t }) =>
            (0, l.jsx)("ul", { children: e }, t),
          oList: ({ children: e, key: t }) =>
            (0, l.jsx)("ol", { children: e }, t),
          image: ({ node: t, key: r }) => {
            let n = (0, l.jsx)("img", {
              src: t.url,
              alt: t.alt ?? void 0,
              "data-copyright": t.copyright ? t.copyright : void 0,
            });
            return (0, l.jsx)(
              "p",
              {
                className: "block-img",
                children: t.linkTo
                  ? (0, l.jsx)(L, {
                      linkResolver: e.linkResolver,
                      internalComponent: e.internalLinkComponent,
                      externalComponent: e.externalLinkComponent,
                      field: t.linkTo,
                      children: n,
                    })
                  : n,
              },
              r,
            );
          },
          embed: ({ node: e, key: t }) =>
            (0, l.jsx)(
              "div",
              {
                "data-oembed": e.oembed.embed_url,
                "data-oembed-type": e.oembed.type,
                "data-oembed-provider": e.oembed.provider_name,
                dangerouslySetInnerHTML: { __html: e.oembed.html ?? "" },
              },
              t,
            ),
          hyperlink: ({ node: t, children: r, key: n }) =>
            (0, l.jsx)(
              L,
              {
                field: t.data,
                linkResolver: e.linkResolver,
                internalComponent: e.internalLinkComponent,
                externalComponent: e.externalLinkComponent,
                children: r,
              },
              n,
            ),
          label: ({ node: e, children: t, key: r }) =>
            (0, l.jsx)("span", { className: e.data.label, children: t }, r),
          span: ({ text: e, key: t }) => {
            let r = [],
              n = 0;
            for (let t of e.split("\n"))
              n > 0 && r.push((0, l.jsx)("br", {}, `${n}__break`)),
                r.push((0, l.jsx)(o.Fragment, { children: t }, `${n}__line`)),
                n++;
            return (0, l.jsx)(o.Fragment, { children: r }, t);
          },
        });
      function I({
        linkResolver: e,
        field: t,
        fallback: r,
        components: i,
        externalLinkComponent: s,
        internalLinkComponent: d,
        ...m
      }) {
        return o.useMemo(() => {
          if (!w(t))
            return null != r ? (0, l.jsx)(l.Fragment, { children: r }) : null;
          {
            let r = n(
                "object" == typeof i ? a(i) : i,
                R({
                  linkResolver: e,
                  internalLinkComponent: d,
                  externalLinkComponent: s,
                }),
              ),
              m = x(t, (e, t, l, n, i) => {
                let s = r(e, t, l, n, i);
                return o.isValidElement(s) && null == s.key
                  ? o.cloneElement(s, { key: i })
                  : s;
              });
            return (0, l.jsx)(l.Fragment, { children: m });
          }
        }, [t, d, s, i, e, r]);
      }
      let E = o.createContext({}),
        A = () => o.useContext(E) || {},
        T = function ({ components: e, ...t }) {
          let r = A(),
            i = n(
              "object" == typeof e ? a(e) : e,
              "object" == typeof r.richTextComponents
                ? a(r.richTextComponents)
                : r.richTextComponents,
            );
          return (0, l.jsx)(I, {
            components: i,
            internalLinkComponent: r.internalLinkComponent,
            externalLinkComponent: r.externalLinkComponent,
            ...t,
          });
        };
    },
    578: function (e, t, r) {
      r.r(t);
      var l = r(5893),
        n = r(7294),
        i = r(187),
        s = r(6038),
        a = r(1831),
        o = r(2099),
        d = r(6494);
      t.default = (e) => {
        let { slice: t, slices: r, index: n } = e;
        return (0, l.jsxs)("section", {
          "data-slice-type": t.slice_type,
          "data-slice-variation": t.variation,
          className:
            "bg-dark_beige lg:grid lg:grid-cols-12 px-container text-white ".concat(
              "default" === t.variation
                ? "pb-[10.4rem] lg:pb-[14.4rem] ".concat(
                    "dropdown" !== r[n - 1].slice_type &&
                      "pt-[10.4rem] lg:pt-[22rem]",
                  )
                : "pb-[14.4rem] lg:pb-[17.2rem] ".concat(
                    "dropdown" !== r[n - 1].slice_type &&
                      "pt-[10.4rem] lg:pt-[14.4rem]",
                  ),
            ),
          children: [
            (0, l.jsx)("div", {
              className:
                "lg:col-span-4 font-headings font-medium leading-[0.94] lg:leading-[0.9] lg:pl-[2rem] text-36 lg:text-60 -tracking-[0.144rem] lg:-tracking-[0.24rem]",
              children: t.primary.title,
            }),
            (0, l.jsxs)("div", {
              className:
                "lg:col-end-13 lg:col-start-5 flex flex-col gap-[4rem] lg:gap-[8rem] mt-[4rem] lg:mt-[1.2rem] lg:pl-[5rem]",
              children: [
                "default" === t.variation
                  ? (0, l.jsx)(p, { slice: t })
                  : (0, l.jsx)(c, { slice: t }),
                (0, l.jsx)("div", {
                  children: t.items.map((e, t) =>
                    (0, l.jsx)(m, { item: e, index: t }, "dropdown-".concat(t)),
                  ),
                }),
              ],
            }),
          ],
        });
      };
      let m = (e) => {
          let { item: t, index: d } = e,
            m = (0, n.useRef)(!1),
            p = (0, n.useRef)(!1),
            c = (0, n.useRef)(!1),
            u = (0, n.useRef)(!1),
            g = (0, n.useRef)(!1);
          (0, n.useEffect)(() => {
            (u.current = r(8041)),
              (g.current = new u.current({
                target: m.current,
                by: "words",
              })[0].words),
              s.p8.set(g.current, { autoAlpha: 0 });
          }, []);
          let h = () => {
              c.current ? x() : f();
            },
            x = () => {
              (c.current = !1),
                s.p8.to(m.current, {
                  duration: 0.6,
                  ease: "expo.out",
                  height: 0,
                  onComplete: () => {
                    window.dispatchEvent(
                      new CustomEvent("refresh-scroll-trigger"),
                    );
                  },
                }),
                s.p8.to(g.current, {
                  autoAlpha: 0,
                  duration: 0.4,
                  ease: "power2.out",
                }),
                s.p8.to(p.current, {
                  rduration: 0.6,
                  ease: "expo.out",
                  rotate: 0,
                });
            },
            f = () => {
              let e = window.innerWidth >= 1024 ? (0, o.z6)(40) : (0, o.z6)(32);
              (c.current = !0), s.p8.set(m.current, { height: "auto" });
              let t = m.current.getBoundingClientRect().height + e;
              s.p8.fromTo(
                m.current,
                { height: 0 },
                {
                  duration: 0.6,
                  ease: "expo.out",
                  height: t,
                  onComplete: () => {
                    window.dispatchEvent(
                      new CustomEvent("refresh-scroll-trigger"),
                    );
                  },
                },
              ),
                s.p8.to(g.current, {
                  autoAlpha: 1,
                  duration: 0.4,
                  ease: "power2.inOut",
                  stagger: 0.004,
                }),
                s.p8.to(p.current, {
                  duration: 0.6,
                  ease: "expo.out",
                  rotate: 45,
                });
            };
          return (0, l.jsxs)("div", {
            className:
              "border-b-[1px] border-b-white border-opacity-10 flex flex-col leading-[1.42] text-14 tracking-[0.014rem] ".concat(
                0 === d && "border-t-[1px] border-t-white",
              ),
            children: [
              (0, l.jsxs)("div", {
                className:
                  "cursor-pointer flex gap-[1rem] items-center py-[3.2rem] lg:py-[4rem]",
                onClick: () => h(),
                children: [
                  (0, l.jsx)("div", {
                    className: "max-w-[75.2%] md:w-auto",
                    children: t.dropdown_title,
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "flex-none h-[0.7rem] mt-[0.2rem] svg-wrapper w-[0.7rem]",
                    ref: p,
                    children: (0, l.jsx)(a.Z, { color: "#F2EFE9" }),
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: "h-0 overflow-hidden md:w-[75%]",
                ref: m,
                children: (0, l.jsx)(i.v, { field: t.dropdown_content }),
              }),
            ],
          });
        },
        p = (e) => {
          let { slice: t } = e;
          return (0, l.jsx)("div", {
            className:
              "bg-light_beige bg-opacity-20 h-0 pb-[65.67%] lg:pb-[49.94%] relative rounded-16",
            children: (0, l.jsx)("div", {
              className:
                "absolute h-full left-0 pb-[6.751rem] lg:pb-[11.812rem] pl-[1.4rem] lg:pl-[4.6rem] pr-[1.871rem] lg:pr-[5.4rem] pt-[6.7rem] lg:pt-[10.101rem] top-0 w-full",
              children: (0, l.jsx)("div", {
                className: "h-full w-full",
                children: (0, l.jsx)(d.Z, {
                  field: t.primary.image,
                  sizes: "(max-width: 768px) 96vw, 71.5vw",
                  fallbackAlt: "",
                  className: "h-full object-contain w-full",
                }),
              }),
            }),
          });
        },
        c = (e) => {
          let { slice: t } = e;
          return (0, l.jsxs)("div", {
            className:
              "flex flex-col md:flex-row gap-[0.8rem] md:gap-[1rem] justify-end",
            children: [
              t.primary.left_content_title &&
                t.primary.left_content_text.length > 0 &&
                (0, l.jsxs)("div", {
                  className:
                    "bg-light_beige bg-opacity-20 flex flex-col gap-[2.4rem] lg:gap-[12.4rem] justify-between px-[2.4rem] py-[2.8rem] lg:p-[4rem] rounded-16 w-full",
                  children: [
                    (0, l.jsx)("div", {
                      className:
                        "font-headings font-medium leading-[0.92] lg:leading-[1.2] text-[2.4rem] lg:text-30 -tracking-[0.072rem] lg:-tracking-[0.09rem]",
                      children: t.primary.left_content_title,
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "leading-[1.53] lg:leading-[1.42] lg:pr-[1.75rem] text-13 lg:text-14 tracking-[0.013rem] lg:tracking-[0.014rem]",
                      children: (0, l.jsx)(i.v, {
                        field: t.primary.left_content_text,
                      }),
                    }),
                  ],
                }),
              t.primary.right_content_title &&
                t.primary.right_content_text.length > 0 &&
                (0, l.jsxs)("div", {
                  className:
                    "bg-light_beige bg-opacity-20 flex flex-col gap-[2.4rem] lg:gap-[12.4rem] justify-between px-[2.4rem] py-[2.8rem] lg:p-[4rem] rounded-16 w-full",
                  children: [
                    (0, l.jsx)("div", {
                      className:
                        "font-headings font-medium leading-[0.92] lg:leading-[1.2] text-[2.4rem] lg:text-30 -tracking-[0.072rem] lg:-tracking-[0.09rem]",
                      children: t.primary.right_content_title,
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "leading-[1.53] lg:leading-[1.42] lg:pr-[1.75rem] text-13 lg:text-14 tracking-[0.013rem] lg:tracking-[0.014rem]",
                      children: (0, l.jsx)(i.v, {
                        field: t.primary.right_content_text,
                      }),
                    }),
                  ],
                }),
            ],
          });
        };
    },
  },
]);
