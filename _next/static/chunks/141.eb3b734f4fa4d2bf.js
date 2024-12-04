"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [141],
  {
    187: function (e, t, r) {
      r.d(t, {
        v: function () {
          return T;
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
        s = {
          [i.listItem]: "listItem",
          [i.oListItem]: "oListItem",
          [i.list]: "list",
          [i.oList]: "oList",
        },
        o = (e) => (t, r, n, l, i) => {
          let o = e[s[t] || t];
          if (o) return o({ type: t, node: r, text: n, children: l, key: i });
        };
      var a = r(7294);
      let c = () => (++c.i).toString();
      c.i = 0;
      let d = (e) => {
          let t = h(e),
            r = [];
          for (let e = 0; e < t.length; e++) r.push(p(t[e]));
          return { key: c(), children: r };
        },
        u = (e, t = []) => ({
          key: c(),
          type: e.type,
          text: "text" in e ? e.text : void 0,
          node: e,
          children: t,
        }),
        m = (e) => u({ type: i.span, text: e, spans: [] }),
        h = (e) => {
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
        p = (e) => {
          if ("text" in e) return u(e, g(e.spans, e));
          if ("items" in e) {
            let t = [];
            for (let r = 0; r < e.items.length; r++) t.push(p(e.items[r]));
            return u(e, t);
          }
          return u(e);
        },
        g = (e, t, r) => {
          if (!e.length) return [m(t.text)];
          let n = e.slice(0);
          n.sort((e, t) => e.start - t.start || t.end - e.end);
          let l = [];
          for (let e = 0; e < n.length; e++) {
            let i = n[e],
              s = (r && r.start) || 0,
              o = i.start - s,
              a = i.end - s,
              c = t.text.slice(o, a),
              d = [];
            for (let t = e; t < n.length; t++) {
              let e = n[t];
              e !== i &&
                (e.start >= i.start && e.end <= i.end
                  ? (d.push(e), n.splice(t, 1), t--)
                  : e.start < i.end &&
                    e.end > i.start &&
                    (d.push({ ...e, end: i.end }),
                    (n[t] = { ...e, start: i.end })));
            }
            0 === e && o > 0 && l.push(m(t.text.slice(0, o)));
            let h = { ...i, text: c };
            l.push(u(h, g(d, { ...t, text: c }, i))),
              a < t.text.length &&
                l.push(
                  m(t.text.slice(a, n[e + 1] ? n[e + 1].start - s : void 0)),
                );
          }
          return l;
        },
        f = (e, t) => x(d(e).children, t),
        x = (e, t) => {
          let r = [];
          for (let n = 0; n < e.length; n++) {
            let l = e[n],
              i = t(l.type, l.node, l.text, x(l.children, t), l.key);
            null != i && r.push(i);
          }
          return r;
        },
        v = (e) => {
          let t = /^(\/(?!\/)|#)/.test(e),
            r = !t && !/^https?:\/\//.test(e);
          return t && !r;
        },
        b = { Any: "Any", Document: "Document", Media: "Media", Web: "Web" },
        j = (e) => {
          var t;
          return {
            link_type: b.Document,
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
        k = (e, ...t) => {
          let r;
          if (!e) return null;
          let n = "link_type" in e ? e : j(e),
            [l] = t;
          switch (
            ((r =
              "function" == typeof l || null == l
                ? { linkResolver: l }
                : { ...l }),
            n.link_type)
          ) {
            case b.Media:
            case b.Web:
              return "url" in n ? n.url : null;
            case b.Document:
              if ("id" in n && r.linkResolver) {
                let e = r.linkResolver(n);
                if (null != e) return e;
              }
              if ("url" in n && n.url) return n.url;
              return null;
            case b.Any:
            default:
              return null;
          }
        },
        y = (e) => null != e,
        w = (e) =>
          !!y(e) &&
          (1 === e.length && "text" in e[0] ? !!e[0].text : !!e.length),
        _ = (e) => y(e) && ("id" in e || "url" in e),
        N = (e, t = {}) => {
          if (e && ("link_type" in e ? _(e) : e)) {
            let r = "target" in e ? e.target : void 0,
              n = k(e, t.linkResolver),
              l = null == n ? void 0 : n,
              i = "string" == typeof l && !v(l),
              s = t.rel
                ? t.rel({ href: l, isExternal: i, target: r })
                : i
                  ? "noreferrer"
                  : void 0;
            return { href: l, target: r, rel: null == s ? void 0 : s };
          }
          return {};
        },
        L = (e) => {
          let t = /^(\/(?!\/)|#)/.test(e),
            r = !t && !/^https?:\/\//.test(e);
          return t && !r;
        };
      r(3454);
      let R = a.forwardRef(function (
        {
          field: e,
          document: t,
          linkResolver: r,
          internalComponent: l,
          externalComponent: i,
          ...s
        },
        o,
      ) {
        let {
            href: a,
            rel: c,
            ...d
          } = N(e ?? t, {
            linkResolver: r,
            rel: "function" == typeof s.rel ? s.rel : void 0,
          }),
          u = c;
        "rel" in s && "function" != typeof s.rel && (u = s.rel);
        let m = ("href" in s ? s.href : a) || "",
          h = m && L(m) ? l || "a" : i || "a";
        return (0, n.jsx)(h, { ref: o, ...d, ...s, href: m, rel: u });
      });
      r(3454);
      let C = (e) =>
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
                  ? (0, n.jsx)(R, {
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
              R,
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
                r.push((0, n.jsx)(a.Fragment, { children: t }, `${l}__line`)),
                l++;
            return (0, n.jsx)(a.Fragment, { children: r }, t);
          },
        });
      function E({
        linkResolver: e,
        field: t,
        fallback: r,
        components: i,
        externalLinkComponent: s,
        internalLinkComponent: c,
        ...d
      }) {
        return a.useMemo(() => {
          if (!w(t))
            return null != r ? (0, n.jsx)(n.Fragment, { children: r }) : null;
          {
            let r = l(
                "object" == typeof i ? o(i) : i,
                C({
                  linkResolver: e,
                  internalLinkComponent: c,
                  externalLinkComponent: s,
                }),
              ),
              d = f(t, (e, t, n, l, i) => {
                let s = r(e, t, n, l, i);
                return a.isValidElement(s) && null == s.key
                  ? a.cloneElement(s, { key: i })
                  : s;
              });
            return (0, n.jsx)(n.Fragment, { children: d });
          }
        }, [t, c, s, i, e, r]);
      }
      let I = a.createContext({}),
        B = () => a.useContext(I) || {},
        T = function ({ components: e, ...t }) {
          let r = B(),
            i = l(
              "object" == typeof e ? o(e) : e,
              "object" == typeof r.richTextComponents
                ? o(r.richTextComponents)
                : r.richTextComponents,
            );
          return (0, n.jsx)(E, {
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
        s = r(8266),
        o = r(2099);
      t.Z = (e) => {
        let { children: t, sticky: r = !1, zIndex: a = 0 } = e,
          c = (0, l.useRef)(null),
          d = (0, l.useRef)(null),
          u = (0, s.o)((e) => e.headerLoaded),
          m = (0, s.o)((e) => e.setHeaderDark);
        return (
          (0, l.useEffect)(() => {
            if (!u) return;
            let e = document.querySelector(".header");
            return (
              r
                ? (d.current = i.ScrollTrigger.create({
                    trigger: c.current,
                    start: () =>
                      "top+="
                        .concat(window.innerHeight, " top+=")
                        .concat(e.getBoundingClientRect().bottom),
                    end: () =>
                      "bottom-="
                        .concat((0, o.z6)(10), " top+=")
                        .concat(e.getBoundingClientRect().bottom),
                    onEnter: () => {
                      m(!0);
                    },
                    onLeave: () => {
                      m(!1);
                    },
                    onEnterBack: () => {
                      m(!0);
                    },
                    onLeaveBack: () => {
                      m(!1);
                    },
                  }))
                : (d.current = i.ScrollTrigger.create({
                    trigger: c.current,
                    start: () =>
                      "top top+=".concat(e.getBoundingClientRect().bottom),
                    end: () =>
                      "bottom top+=".concat(e.getBoundingClientRect().bottom),
                    onEnter: () => {
                      m(!0);
                    },
                    onLeave: () => {
                      m(!1);
                    },
                    onEnterBack: () => {
                      m(!0);
                    },
                    onLeaveBack: () => {
                      m(!1);
                    },
                  })),
              () => {
                d.current && (d.current.kill(), (d.current = null)), m(!1);
              }
            );
          }, [u]),
          (0, n.jsx)("div", {
            ref: c,
            style: { zIndex: a },
            className: "relative w-full",
            children: t,
          })
        );
      };
    },
    2141: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return f;
          },
        });
      var n = r(5893),
        l = r(9362),
        i = r(26),
        s = r(187),
        o = r(7294),
        a = r(6546),
        c = r(6038),
        d = r(2099),
        u = r(6892),
        m = r(6494),
        h = (e) => {
          let { slice: t } = e,
            r = (0, o.useRef)(),
            l = (0, o.useRef)([]),
            h = (0, o.useRef)(0),
            p = (0, o.useRef)(0),
            g = (0, o.useRef)([]),
            f = (0, o.useRef)([]),
            x = (0, o.useRef)([]),
            v = (e, t) => {
              (0, d.RE)(x.current[e]),
                (f.current[e] = c.p8.to(l.current[e], {
                  autoAlpha: 0,
                  duration: 0.25,
                  ease: "power2.out",
                  onComplete: () => {
                    l.current[e].classList.add("hidden"),
                      l.current[t].classList.remove("hidden");
                  },
                })),
                (0, d.RE)(f.current[t]),
                (x.current[t] = c.p8.to(l.current[t], {
                  autoAlpha: 1,
                  duration: 0.5,
                  ease: "power2.out",
                  delay: 0.25,
                }));
            };
          return (
            (0, o.useEffect)(() => {
              for (let e = 0; e < l.current.length; e++)
                e > 0 && c.p8.set(l.current[e], { autoAlpha: 0 }),
                  (g.current[e] = a.ScrollTrigger.create({
                    trigger: r.current,
                    start: () =>
                      "".concat((e + 1) * window.innerHeight * 0.75, "px top"),
                    end: () => "+=".concat(0.75 * window.innerHeight),
                    scrub: !0,
                    onEnter: () => {
                      (p.current = e),
                        h.current !== p.current && v(h.current, p.current),
                        (h.current = e);
                    },
                    onEnterBack: () => {
                      (p.current = e),
                        h.current !== p.current && v(h.current, p.current),
                        (h.current = e);
                    },
                  }));
              return () => {
                for (let e = 0; e < g.current.length; e++)
                  g.current[e].kill(), (g.current[e] = null);
              };
            }, []),
            (0, n.jsx)(u.Z, {
              sticky: !0,
              children: (0, n.jsx)("div", {
                ref: r,
                className:
                  "sticky top-0 -mt-[100vh] px-half-container-mobile md:px-half-container",
                style: { height: "".concat((t.items.length + 2) * 75, "vh") },
                children: (0, n.jsxs)("div", {
                  className:
                    "sticky top-half-container-mobile md:top-half-container h-[calc(100vh_-_var(--padding-half-container-mobile)*2)] md:h-[calc(100vh_-_var(--padding-half-container)*2)] p-[0.6rem] flex flex-col bg-white rounded-13 overflow-hidden",
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "absolute top-0 right-0 w-full h-full bg-dots bg-size-dots bg-repeat opacity-40 pointer-events-none",
                    }),
                    (0, n.jsx)("div", {
                      className: "flex-1 pt-[9.6rem] pb-[6rem]",
                      children: (0, n.jsx)("div", {
                        className: "relative",
                        children: t.items.map((e, t) =>
                          (0, n.jsxs)(
                            "div",
                            {
                              ref: (e) => (l.current[t] = e),
                              className:
                                "relative w-full flex flex-col items-center text-dark_grey ".concat(
                                  0 !== t && "hidden",
                                ),
                              children: [
                                (0, n.jsx)("div", {
                                  className:
                                    "flex justify-center items-center w-[4.4rem] h-[4.4rem] lg:w-[7.4rem] lg:h-[7.4rem] mb-[2.4rem] lg:mb-[6rem] rounded-12 border-px border-dark_grey/20",
                                  children: (0, n.jsx)("div", {
                                    className: "h-[1.7rem] lg:h-[2.7rem]",
                                    children: (0, n.jsx)(i.Z, {
                                      field: e.icon,
                                      fallbackAlt: "",
                                      className: "w-auto h-full object-contain",
                                    }),
                                  }),
                                }),
                                (0, n.jsx)("div", {
                                  className:
                                    "font-headings text-32 lg:text-60 leading-[93.75%] -tracking-[0.128rem] px-[6.55rem] mb-[2.4rem] lg:mb-[6rem] text-center",
                                  children: e.title,
                                }),
                                (0, n.jsx)("div", {
                                  className:
                                    "text-13 lg:text-14 leading-[2rem] tracking-[0.013rem] px-[4.8em] md:px-[15rem] lg:px-[30rem] text-center",
                                  children: (0, n.jsx)(s.v, {
                                    field: e.content,
                                  }),
                                }),
                              ],
                            },
                            "item-".concat(t),
                          ),
                        ),
                      }),
                    }),
                    (0, n.jsx)("div", {
                      className:
                        "relative w-full pt-[74.35%] rounded-10 overflow-hidden",
                      children: (0, n.jsx)(m.Z, {
                        field: t.primary.image,
                        fallbackAlt: "",
                        className:
                          "absolute top-0 left-0 w-full h-full object-cover",
                        sizes: "(max-width: 768px) 96vw, 96vw",
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        },
        p = r(352),
        g = (e) => {
          let { slice: t } = e,
            r = (0, o.useRef)(null),
            l = (0, o.useRef)(null),
            h = () => {
              c.ZP.set(r.current, {
                height:
                  l.current.offsetHeight + window.innerHeight + (0, d.z6)(10),
              }),
                a.ScrollTrigger.refresh();
            };
          return (
            (0, o.useEffect)(
              () => (
                c.ZP.set(r.current, {
                  height:
                    l.current.offsetHeight + window.innerHeight + (0, d.z6)(10),
                }),
                a.ScrollTrigger.refresh(),
                window.addEventListener("resize", h),
                () => {
                  window.removeEventListener("resize", h);
                }
              ),
              [],
            ),
            (0, n.jsx)(u.Z, {
              sticky: !0,
              children: (0, n.jsxs)("div", {
                ref: r,
                className:
                  "sticky top-0 -mt-[100vh] flex items-start gap-[0.4rem] px-10",
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "sticky top-10 flex flex-col w-[36.5%] bg-white rounded-18 overflow-hidden",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "absolute top-0 right-0 w-full h-full bg-dots bg-size-dots bg-repeat opacity-40 pointer-events-none",
                      }),
                      (0, n.jsx)("div", {
                        ref: l,
                        className: "px-20",
                        children: t.items.map((e, r) =>
                          (0, n.jsxs)(
                            o.Fragment,
                            {
                              children: [
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex flex-col items-center py-[10.25rem] text-dark_grey",
                                  children: [
                                    (0, n.jsx)("div", {
                                      className:
                                        "flex justify-center items-center w-[5rem] h-[5rem] mb-[2.4rem] rounded-12 border-px border-dark_grey/20",
                                      children: (0, n.jsx)("div", {
                                        className: "h-[1.7rem]",
                                        children: (0, n.jsx)(i.Z, {
                                          field: e.icon,
                                          fallbackAlt: "",
                                          className:
                                            "w-auto h-full object-contain",
                                        }),
                                      }),
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "font-headings text-36 leading-[100%] -tracking-[0.108rem] px-[11rem] mb-[2.4rem] text-center",
                                      children: e.title,
                                    }),
                                    (0, n.jsx)("div", {
                                      className:
                                        "text-14 leading-[2rem] tracking-[0.014rem] px-[7.6rem] text-center",
                                      children: (0, n.jsx)(s.v, {
                                        field: e.content,
                                      }),
                                    }),
                                  ],
                                }),
                                r !== t.items.length - 1 &&
                                  (0, n.jsx)(p.Z, { mode: "dark" }),
                              ],
                            },
                            "item-".concat(r),
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: "sticky top-10 h-[calc(100vh_-_2rem)] flex-1",
                    children: (0, n.jsx)(m.Z, {
                      field: t.primary.image,
                      fallbackAlt: "",
                      className:
                        "w-full h-full object-cover rounded-18 overflow-hidden",
                      sizes: "(max-width: 768px) 96vw, 62vw",
                    }),
                  }),
                ],
              }),
            })
          );
        },
        f = (e) => {
          let { slice: t, slices: r, index: i } = e,
            s = (0, l.a)("(max-width: 1200px)", !0, !1);
          return (0, n.jsx)("section", {
            "data-slice-type": t.slice_type,
            "data-slice-variation": t.variation,
            style: { zIndex: r.length - i },
            className: "relative ".concat(
              "White" === t.primary.background_color
                ? "bg-white"
                : "Beige light" === t.primary.background_color
                  ? "bg-light_beige"
                  : "Beige dark" === t.primary.background_color
                    ? "bg-dark_beige"
                    : "Grey dark" === t.primary.background_color
                      ? "bg-dark_grey"
                      : "bg-green",
              " ",
            ),
            children: s
              ? (0, n.jsx)(h, { slice: t })
              : (0, n.jsx)(g, { slice: t }),
          });
        };
    },
  },
]);
