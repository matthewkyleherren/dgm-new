"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [402],
  {
    187: function (e, t, r) {
      r.d(t, {
        v: function () {
          return E;
        },
      });
      var n = r(5893);
      let l =
          (...e) =>
          (...t) => {
            for (let r = 0; r < e.length; r++) {
              let n = e[r];
              if (n) {
                let e = n(...t);
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
        a = {
          [i.listItem]: "listItem",
          [i.oListItem]: "oListItem",
          [i.list]: "list",
          [i.oList]: "oList",
        },
        o = (e) => (t, r, n, l, i) => {
          let o = e[a[t] || t];
          if (o) return o({ type: t, node: r, text: n, children: l, key: i });
        };
      var s = r(7294);
      let p = () => (++p.i).toString();
      p.i = 0;
      let c = (e) => {
          let t = g(e),
            r = [];
          for (let e = 0; e < t.length; e++) r.push(m(t[e]));
          return { key: p(), children: r };
        },
        d = (e, t = []) => ({
          key: p(),
          type: e.type,
          text: "text" in e ? e.text : void 0,
          node: e,
          children: t,
        }),
        u = (e) => d({ type: i.span, text: e, spans: [] }),
        g = (e) => {
          let t = e.slice(0);
          for (let e = 0; e < t.length; e++) {
            let r = t[e];
            if (r.type === i.listItem || r.type === i.oListItem) {
              let n = [r];
              for (; t[e + 1] && t[e + 1].type === r.type; )
                n.push(t[e + 1]), t.splice(e, 1);
              r.type === i.listItem
                ? (t[e] = { type: i.list, items: n })
                : (t[e] = { type: i.oList, items: n });
            }
          }
          return t;
        },
        m = (e) => {
          if ("text" in e) return d(e, h(e.spans, e));
          if ("items" in e) {
            let t = [];
            for (let r = 0; r < e.items.length; r++) t.push(m(e.items[r]));
            return d(e, t);
          }
          return d(e);
        },
        h = (e, t, r) => {
          if (!e.length) return [u(t.text)];
          let n = e.slice(0);
          n.sort((e, t) => e.start - t.start || t.end - e.end);
          let l = [];
          for (let e = 0; e < n.length; e++) {
            let i = n[e],
              a = (r && r.start) || 0,
              o = i.start - a,
              s = i.end - a,
              p = t.text.slice(o, s),
              c = [];
            for (let t = e; t < n.length; t++) {
              let e = n[t];
              e !== i &&
                (e.start >= i.start && e.end <= i.end
                  ? (c.push(e), n.splice(t, 1), t--)
                  : e.start < i.end &&
                    e.end > i.start &&
                    (c.push({ ...e, end: i.end }),
                    (n[t] = { ...e, start: i.end })));
            }
            0 === e && o > 0 && l.push(u(t.text.slice(0, o)));
            let g = { ...i, text: p };
            l.push(d(g, h(c, { ...t, text: p }, i))),
              s < t.text.length &&
                l.push(
                  u(t.text.slice(s, n[e + 1] ? n[e + 1].start - a : void 0)),
                );
          }
          return l;
        },
        x = (e, t) => b(c(e).children, t),
        b = (e, t) => {
          let r = [];
          for (let n = 0; n < e.length; n++) {
            let l = e[n],
              i = t(l.type, l.node, l.text, b(l.children, t), l.key);
            null != i && r.push(i);
          }
          return r;
        },
        f = (e) => {
          let t = /^(\/(?!\/)|#)/.test(e),
            r = !t && !/^https?:\/\//.test(e);
          return t && !r;
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
        v = (e, ...t) => {
          let r;
          if (!e) return null;
          let n = "link_type" in e ? e : k(e),
            [l] = t;
          switch (
            ((r =
              "function" == typeof l || null == l
                ? { linkResolver: l }
                : { ...l }),
            n.link_type)
          ) {
            case y.Media:
            case y.Web:
              return "url" in n ? n.url : null;
            case y.Document:
              if ("id" in n && r.linkResolver) {
                let e = r.linkResolver(n);
                if (null != e) return e;
              }
              if ("url" in n && n.url) return n.url;
              return null;
            case y.Any:
            default:
              return null;
          }
        },
        j = (e) => null != e,
        _ = (e) =>
          !!j(e) &&
          (1 === e.length && "text" in e[0] ? !!e[0].text : !!e.length),
        C = (e) => j(e) && ("id" in e || "url" in e),
        L = (e, t = {}) => {
          if (e && ("link_type" in e ? C(e) : e)) {
            let r = "target" in e ? e.target : void 0,
              n = v(e, t.linkResolver),
              l = null == n ? void 0 : n,
              i = "string" == typeof l && !f(l),
              a = t.rel
                ? t.rel({ href: l, isExternal: i, target: r })
                : i
                  ? "noreferrer"
                  : void 0;
            return { href: l, target: r, rel: null == a ? void 0 : a };
          }
          return {};
        },
        w = (e) => {
          let t = /^(\/(?!\/)|#)/.test(e),
            r = !t && !/^https?:\/\//.test(e);
          return t && !r;
        };
      r(3454);
      let B = s.forwardRef(function (
        {
          field: e,
          document: t,
          linkResolver: r,
          internalComponent: l,
          externalComponent: i,
          ...a
        },
        o,
      ) {
        let {
            href: s,
            rel: p,
            ...c
          } = L(e ?? t, {
            linkResolver: r,
            rel: "function" == typeof a.rel ? a.rel : void 0,
          }),
          d = p;
        "rel" in a && "function" != typeof a.rel && (d = a.rel);
        let u = ("href" in a ? a.href : s) || "",
          g = u && w(u) ? l || "a" : i || "a";
        return (0, n.jsx)(g, { ref: o, ...c, ...a, href: u, rel: d });
      });
      r(3454);
      let I = (e) =>
        o({
          heading1: ({ children: e, key: t }) =>
            (0, n.jsx)("h1", { children: e }, t),
          heading2: ({ children: e, key: t }) =>
            (0, n.jsx)("h2", { children: e }, t),
          heading3: ({ children: e, key: t }) =>
            (0, n.jsx)("h3", { children: e }, t),
          heading4: ({ children: e, key: t }) =>
            (0, n.jsx)("h4", { children: e }, t),
          heading5: ({ children: e, key: t }) =>
            (0, n.jsx)("h5", { children: e }, t),
          heading6: ({ children: e, key: t }) =>
            (0, n.jsx)("h6", { children: e }, t),
          paragraph: ({ children: e, key: t }) =>
            (0, n.jsx)("p", { children: e }, t),
          preformatted: ({ node: e, key: t }) =>
            (0, n.jsx)("pre", { children: e.text }, t),
          strong: ({ children: e, key: t }) =>
            (0, n.jsx)("strong", { children: e }, t),
          em: ({ children: e, key: t }) => (0, n.jsx)("em", { children: e }, t),
          listItem: ({ children: e, key: t }) =>
            (0, n.jsx)("li", { children: e }, t),
          oListItem: ({ children: e, key: t }) =>
            (0, n.jsx)("li", { children: e }, t),
          list: ({ children: e, key: t }) =>
            (0, n.jsx)("ul", { children: e }, t),
          oList: ({ children: e, key: t }) =>
            (0, n.jsx)("ol", { children: e }, t),
          image: ({ node: t, key: r }) => {
            let l = (0, n.jsx)("img", {
              src: t.url,
              alt: t.alt ?? void 0,
              "data-copyright": t.copyright ? t.copyright : void 0,
            });
            return (0, n.jsx)(
              "p",
              {
                className: "block-img",
                children: t.linkTo
                  ? (0, n.jsx)(B, {
                      linkResolver: e.linkResolver,
                      internalComponent: e.internalLinkComponent,
                      externalComponent: e.externalLinkComponent,
                      field: t.linkTo,
                      children: l,
                    })
                  : l,
              },
              r,
            );
          },
          embed: ({ node: e, key: t }) =>
            (0, n.jsx)(
              "div",
              {
                "data-oembed": e.oembed.embed_url,
                "data-oembed-type": e.oembed.type,
                "data-oembed-provider": e.oembed.provider_name,
                dangerouslySetInnerHTML: { __html: e.oembed.html ?? "" },
              },
              t,
            ),
          hyperlink: ({ node: t, children: r, key: l }) =>
            (0, n.jsx)(
              B,
              {
                field: t.data,
                linkResolver: e.linkResolver,
                internalComponent: e.internalLinkComponent,
                externalComponent: e.externalLinkComponent,
                children: r,
              },
              l,
            ),
          label: ({ node: e, children: t, key: r }) =>
            (0, n.jsx)("span", { className: e.data.label, children: t }, r),
          span: ({ text: e, key: t }) => {
            let r = [],
              l = 0;
            for (let t of e.split("\n"))
              l > 0 && r.push((0, n.jsx)("br", {}, `${l}__break`)),
                r.push((0, n.jsx)(s.Fragment, { children: t }, `${l}__line`)),
                l++;
            return (0, n.jsx)(s.Fragment, { children: r }, t);
          },
        });
      function R({
        linkResolver: e,
        field: t,
        fallback: r,
        components: i,
        externalLinkComponent: a,
        internalLinkComponent: p,
        ...c
      }) {
        return s.useMemo(() => {
          if (!_(t))
            return null != r ? (0, n.jsx)(n.Fragment, { children: r }) : null;
          {
            let r = l(
                "object" == typeof i ? o(i) : i,
                I({
                  linkResolver: e,
                  internalLinkComponent: p,
                  externalLinkComponent: a,
                }),
              ),
              c = x(t, (e, t, n, l, i) => {
                let a = r(e, t, n, l, i);
                return s.isValidElement(a) && null == a.key
                  ? s.cloneElement(a, { key: i })
                  : a;
              });
            return (0, n.jsx)(n.Fragment, { children: c });
          }
        }, [t, p, a, i, e, r]);
      }
      let N = s.createContext({}),
        W = () => s.useContext(N) || {},
        E = function ({ components: e, ...t }) {
          let r = W(),
            i = l(
              "object" == typeof e ? o(e) : e,
              "object" == typeof r.richTextComponents
                ? o(r.richTextComponents)
                : r.richTextComponents,
            );
          return (0, n.jsx)(R, {
            components: i,
            internalLinkComponent: r.internalLinkComponent,
            externalLinkComponent: r.externalLinkComponent,
            ...t,
          });
        };
    },
    6892: function (e, t, r) {
      var n = r(5893),
        l = r(7294),
        i = r(6546),
        a = r(8266),
        o = r(2099);
      t.Z = (e) => {
        let { children: t, sticky: r = !1, zIndex: s = 0 } = e,
          p = (0, l.useRef)(null),
          c = (0, l.useRef)(null),
          d = (0, a.o)((e) => e.headerLoaded),
          u = (0, a.o)((e) => e.setHeaderDark);
        return (
          (0, l.useEffect)(() => {
            if (!d) return;
            let e = document.querySelector(".header");
            return (
              r
                ? (c.current = i.ScrollTrigger.create({
                    trigger: p.current,
                    start: () =>
                      "top+="
                        .concat(window.innerHeight, " top+=")
                        .concat(e.getBoundingClientRect().bottom),
                    end: () =>
                      "bottom-="
                        .concat((0, o.z6)(10), " top+=")
                        .concat(e.getBoundingClientRect().bottom),
                    onEnter: () => {
                      u(!0);
                    },
                    onLeave: () => {
                      u(!1);
                    },
                    onEnterBack: () => {
                      u(!0);
                    },
                    onLeaveBack: () => {
                      u(!1);
                    },
                  }))
                : (c.current = i.ScrollTrigger.create({
                    trigger: p.current,
                    start: () =>
                      "top top+=".concat(e.getBoundingClientRect().bottom),
                    end: () =>
                      "bottom top+=".concat(e.getBoundingClientRect().bottom),
                    onEnter: () => {
                      u(!0);
                    },
                    onLeave: () => {
                      u(!1);
                    },
                    onEnterBack: () => {
                      u(!0);
                    },
                    onLeaveBack: () => {
                      u(!1);
                    },
                  })),
              () => {
                c.current && (c.current.kill(), (c.current = null)), u(!1);
              }
            );
          }, [d]),
          (0, n.jsx)("div", {
            ref: p,
            style: { zIndex: s },
            className: "relative w-full",
            children: t,
          })
        );
      };
    },
    2402: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return d;
          },
        });
      var n = r(5893),
        l = r(352),
        i = (e) => {
          let { slice: t, wrapperClass: r, children: i } = e;
          return (0, n.jsxs)("div", {
            className:
              "relative w-full grid grid-cols-12 gap-x-0 px-container -mt-px pt-px\n      "
                .concat(r, "\n      popup:bg-transparent ")
                .concat(
                  "White" === t.primary.background
                    ? "bg-white"
                    : "Beige light" === t.primary.background
                      ? "bg-light_beige"
                      : "Beige dark" === t.primary.background
                        ? "bg-dark_beige"
                        : "Grey dark" === t.primary.background
                          ? "bg-dark_grey"
                          : "bg-green",
                  " \n      ",
                )
                .concat(
                  "White" === t.primary.background
                    ? "text-dark_grey"
                    : "Beige light" === t.primary.background
                      ? "text-dark_grey"
                      : ("Beige dark" === t.primary.background ||
                          t.primary.background,
                        "text-white"),
                ),
            children: [
              t.primary.separators &&
                (0, n.jsx)("div", {
                  className: "col-span-full",
                  children: (0, n.jsx)(l.Z, {
                    mode: "White" === t.primary.background ? "dark" : "light",
                  }),
                }),
              i,
              t.primary.separators &&
                (0, n.jsx)("div", {
                  className: "col-span-full",
                  children: (0, n.jsx)(l.Z, {
                    mode: "White" === t.primary.background ? "dark" : "light",
                  }),
                }),
            ],
          });
        },
        a = r(187),
        o = (e) => {
          let { slice: t } = e;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              t.primary.content_left.length > 0 &&
                (0, n.jsx)("div", {
                  className: "content-left \n      ".concat(
                    t.primary.separators
                      ? "pt-[4.3rem] lg:pt-[8rem] lg:pb-[22.4rem]"
                      : "post-wrapper:pt-40 lg:post-wrapper:pt-[8rem] pt-[22.4rem] popup:!pb-0 lg:pb-100",
                    "\n      popup:x-[pb-120,pl-0] lg:popup:pt-[8rem]\n      lg:pl-20 col-start-1 col-end-13 lg:col-end-7 block-content",
                  ),
                  children: (0, n.jsx)(a.v, { field: t.primary.content_left }),
                }),
              (0, n.jsx)("div", {
                className: "content-right \n      ".concat(
                  t.primary.separators
                    ? "pt-[2.4rem] lg:pt-[8rem] pb-[16rem] lg:pb-[22.4rem]"
                    : "pt-40 lg:pt-[8rem] popup:pt-40 lg:pb-100",
                  " \n      pb-[6.4rem] lg:popup:pb-120 popup:pr-0 lg:popup:pt-[8rem]\n      lg:pr-20 lg:col-end-12 col-start-1 col-end-13 lg:col-start-7 popup:col-end-13 block-content",
                ),
                children: (0, n.jsx)(a.v, { field: t.primary.content_right }),
              }),
            ],
          });
        },
        s = (e) => {
          let { slice: t } = e;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("div", {
                className: "".concat(
                  t.primary.separators
                    ? "md:pb-50"
                    : "pt-100 lg:pt-[12rem] lg:pb-[33rem]",
                  " xl:pb-20\n    col-start-1 col-end-13 md:col-end-4 heading-36 md:heading-60 leading-[94%] md:leading-[90%] xl:pl-20",
                ),
                children: (0, n.jsx)(a.v, { field: t.primary.title_left }),
              }),
              (0, n.jsx)("div", {
                className: ""
                  .concat(
                    t.primary.separators
                      ? "pb-30 md:pb-50"
                      : "pt-40 md:pt-100 lg:pt-[12rem] pb-100 lg:pb-[33rem]",
                    " \n    col-start-1 col-end-13 md:col-start-6 heading-36 md:heading-60 leading-[94%] md:leading-[90%] xl:pr-20\n    ",
                  )
                  .concat(
                    "White" === t.primary.background
                      ? "text-light_beige"
                      : "Beige light" === t.primary.background
                        ? "text-dark_beige"
                        : ("Beige dark" === t.primary.background ||
                            t.primary.background,
                          "text-white"),
                    "\n    ",
                  ),
                children: (0, n.jsx)(a.v, { field: t.primary.title_right }),
              }),
            ],
          });
        },
        p = r(6892);
      let c = (e) => {
        let { isWhite: t, isPost: r, zIndex: l, children: i } = e;
        return t && !r ? (0, n.jsx)(p.Z, { zIndex: l, children: i }) : i;
      };
      var d = (e) => {
        let { slice: t, slices: r, index: l, context: a } = e;
        return (0, n.jsx)(c, {
          zIndex: r.length - l,
          isPost: a.isPost || a.popup,
          isWhite: "White" === t.primary.background,
          children: (0, n.jsx)("section", {
            "data-slice-type": t.slice_type,
            "data-slice-variation": t.variation,
            style: { zIndex: r.length - l },
            className: "relative s-content",
            children: (0, n.jsxs)(i, {
              slice: t,
              wrapperClass: "block-content_".concat(t.variation),
              children: [
                (0, n.jsx)("div", {
                  className:
                    "dot-popup absolute top-0 left-0 w-full h-full bg-dots bg-size-dots bg-repeat opacity-40 z-0 pointer-events-none",
                }),
                (() => {
                  switch (t.variation) {
                    case "default":
                      return (0, n.jsx)(o, { slice: t });
                    case "contentBigTitle":
                      return (0, n.jsx)(s, { slice: t });
                  }
                })(),
              ],
            }),
          }),
        });
      };
    },
  },
]);
