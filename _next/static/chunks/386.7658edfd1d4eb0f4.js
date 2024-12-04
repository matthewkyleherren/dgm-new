"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [386],
  {
    187: function (e, t, r) {
      r.d(t, {
        v: function () {
          return E;
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
        a = {
          [i.listItem]: "listItem",
          [i.oListItem]: "oListItem",
          [i.list]: "list",
          [i.oList]: "oList",
        },
        s = (e) => (t, r, l, n, i) => {
          let s = e[a[t] || t];
          if (s) return s({ type: t, node: r, text: l, children: n, key: i });
        };
      var o = r(7294);
      let c = () => (++c.i).toString();
      c.i = 0;
      let u = (e) => {
          let t = p(e),
            r = [];
          for (let e = 0; e < t.length; e++) r.push(h(t[e]));
          return { key: c(), children: r };
        },
        d = (e, t = []) => ({
          key: c(),
          type: e.type,
          text: "text" in e ? e.text : void 0,
          node: e,
          children: t,
        }),
        m = (e) => d({ type: i.span, text: e, spans: [] }),
        p = (e) => {
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
        h = (e) => {
          if ("text" in e) return d(e, f(e.spans, e));
          if ("items" in e) {
            let t = [];
            for (let r = 0; r < e.items.length; r++) t.push(h(e.items[r]));
            return d(e, t);
          }
          return d(e);
        },
        f = (e, t, r) => {
          if (!e.length) return [m(t.text)];
          let l = e.slice(0);
          l.sort((e, t) => e.start - t.start || t.end - e.end);
          let n = [];
          for (let e = 0; e < l.length; e++) {
            let i = l[e],
              a = (r && r.start) || 0,
              s = i.start - a,
              o = i.end - a,
              c = t.text.slice(s, o),
              u = [];
            for (let t = e; t < l.length; t++) {
              let e = l[t];
              e !== i &&
                (e.start >= i.start && e.end <= i.end
                  ? (u.push(e), l.splice(t, 1), t--)
                  : e.start < i.end &&
                    e.end > i.start &&
                    (u.push({ ...e, end: i.end }),
                    (l[t] = { ...e, start: i.end })));
            }
            0 === e && s > 0 && n.push(m(t.text.slice(0, s)));
            let p = { ...i, text: c };
            n.push(d(p, f(u, { ...t, text: c }, i))),
              o < t.text.length &&
                n.push(
                  m(t.text.slice(o, l[e + 1] ? l[e + 1].start - a : void 0)),
                );
          }
          return n;
        },
        g = (e, t) => x(u(e).children, t),
        x = (e, t) => {
          let r = [];
          for (let l = 0; l < e.length; l++) {
            let n = e[l],
              i = t(n.type, n.node, n.text, x(n.children, t), n.key);
            null != i && r.push(i);
          }
          return r;
        },
        v = (e) => {
          let t = /^(\/(?!\/)|#)/.test(e),
            r = !t && !/^https?:\/\//.test(e);
          return t && !r;
        },
        y = { Any: "Any", Document: "Document", Media: "Media", Web: "Web" },
        b = (e) => {
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
          let r;
          if (!e) return null;
          let l = "link_type" in e ? e : b(e),
            [n] = t;
          switch (
            ((r =
              "function" == typeof n || null == n
                ? { linkResolver: n }
                : { ...n }),
            l.link_type)
          ) {
            case y.Media:
            case y.Web:
              return "url" in l ? l.url : null;
            case y.Document:
              if ("id" in l && r.linkResolver) {
                let e = r.linkResolver(l);
                if (null != e) return e;
              }
              if ("url" in l && l.url) return l.url;
              return null;
            case y.Any:
            default:
              return null;
          }
        },
        w = (e) => null != e,
        k = (e) =>
          !!w(e) &&
          (1 === e.length && "text" in e[0] ? !!e[0].text : !!e.length),
        _ = (e) => w(e) && ("id" in e || "url" in e),
        N = (e, t = {}) => {
          if (e && ("link_type" in e ? _(e) : e)) {
            let r = "target" in e ? e.target : void 0,
              l = j(e, t.linkResolver),
              n = null == l ? void 0 : l,
              i = "string" == typeof n && !v(n),
              a = t.rel
                ? t.rel({ href: n, isExternal: i, target: r })
                : i
                  ? "noreferrer"
                  : void 0;
            return { href: n, target: r, rel: null == a ? void 0 : a };
          }
          return {};
        },
        C = (e) => {
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
          ...a
        },
        s,
      ) {
        let {
            href: o,
            rel: c,
            ...u
          } = N(e ?? t, {
            linkResolver: r,
            rel: "function" == typeof a.rel ? a.rel : void 0,
          }),
          d = c;
        "rel" in a && "function" != typeof a.rel && (d = a.rel);
        let m = ("href" in a ? a.href : o) || "",
          p = m && C(m) ? n || "a" : i || "a";
        return (0, l.jsx)(p, { ref: s, ...u, ...a, href: m, rel: d });
      });
      r(3454);
      let R = (e) =>
        s({
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
        externalLinkComponent: a,
        internalLinkComponent: c,
        ...u
      }) {
        return o.useMemo(() => {
          if (!k(t))
            return null != r ? (0, l.jsx)(l.Fragment, { children: r }) : null;
          {
            let r = n(
                "object" == typeof i ? s(i) : i,
                R({
                  linkResolver: e,
                  internalLinkComponent: c,
                  externalLinkComponent: a,
                }),
              ),
              u = g(t, (e, t, l, n, i) => {
                let a = r(e, t, l, n, i);
                return o.isValidElement(a) && null == a.key
                  ? o.cloneElement(a, { key: i })
                  : a;
              });
            return (0, l.jsx)(l.Fragment, { children: u });
          }
        }, [t, c, a, i, e, r]);
      }
      let T = o.createContext({}),
        Z = () => o.useContext(T) || {},
        E = function ({ components: e, ...t }) {
          let r = Z(),
            i = n(
              "object" == typeof e ? s(e) : e,
              "object" == typeof r.richTextComponents
                ? s(r.richTextComponents)
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
    226: function (e, t, r) {
      var l = r(5893),
        n = r(7294),
        i = r(4179),
        a = r(9293);
      t.Z = (e) => {
        let { field: t, title: r, mode: s, popup: o = !1 } = e;
        (0, n.useEffect)(() => {}, []);
        let c = () => {
          window.dispatchEvent(
            new CustomEvent("open-popup", {
              detail: { name: "global", type: t.type, uid: t.uid },
            }),
          );
        };
        return o
          ? "team" === t.uid
            ? (0, l.jsxs)("div", {
                onClick: c,
                className:
                  "group inline-flex justify-start items-center cursor-pointer",
                children: [
                  (0, l.jsx)("div", {
                    className:
                      "flex justify-center items-center w-[3.6rem] h-[3.6rem] ".concat(
                        "white" === s ? "bg-white" : "bg-light_beige",
                        " rounded-10 mr-[0.9rem] transition-transform duration-global ease-out group-hover:scale-105",
                      ),
                    children: (0, l.jsx)("div", {
                      className: "svg-wrapper w-[1.1rem] h-[0.85rem]",
                      children: (0, l.jsx)(a.Z, {}),
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "body-mono-10 transition-opacity duration-global ease-out group-hover:opacity-50 ".concat(
                        "white" === s ? "text-white" : "text-black",
                      ),
                    children: r,
                  }),
                ],
              })
            : (0, l.jsxs)(i.Z, {
                onClick: c,
                href: t.url,
                className:
                  "group inline-flex justify-start items-center cursor-pointer",
                children: [
                  (0, l.jsx)("div", {
                    className:
                      "flex justify-center items-center w-[3.6rem] h-[3.6rem] ".concat(
                        "white" === s ? "bg-white" : "bg-light_beige",
                        " rounded-10 mr-[0.9rem] transition-transform duration-global ease-out group-hover:scale-105",
                      ),
                    children: (0, l.jsx)("div", {
                      className: "svg-wrapper w-[1.1rem] h-[0.85rem]",
                      children: (0, l.jsx)(a.Z, {}),
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "body-mono-10 transition-opacity duration-global ease-out group-hover:opacity-50 ".concat(
                        "white" === s ? "text-white" : "text-black",
                      ),
                    children: r,
                  }),
                ],
              })
          : (0, l.jsxs)(i.Z, {
              field: t,
              className: "group inline-flex justify-start items-center",
              children: [
                (0, l.jsx)("div", {
                  className:
                    "flex justify-center items-center w-[3.6rem] h-[3.6rem] ".concat(
                      "white" === s ? "bg-white" : "bg-light_beige",
                      " rounded-10 mr-[0.9rem] transition-transform duration-global ease-out group-hover:scale-105",
                    ),
                  children: (0, l.jsx)("div", {
                    className: "svg-wrapper w-[1.1rem] h-[0.85rem]",
                    children: (0, l.jsx)(a.Z, {}),
                  }),
                }),
                (0, l.jsx)("div", {
                  className:
                    "font-body-mono text-10 leading-[180%] tracking-[0.05rem] uppercase transition-opacity duration-global ease-out group-hover:opacity-50 ".concat(
                      "white" === s ? "text-white" : "text-dark_grey",
                    ),
                  children: r,
                }),
              ],
            });
      };
    },
    2692: function (e, t, r) {
      var l = r(5893);
      t.Z = (e) => {
        let { children: t, size: r = "small", blur: n = !0 } = e;
        return (0, l.jsx)("div", {
          className: "rounded-12 p-[1.8rem] lg:p-40\n  "
            .concat(
              n
                ? "backdrop-blur-[105px] text-white"
                : "bg-white text-dark_grey",
              "\n  ",
            )
            .concat(
              "small" === r && n ? "w-[26.4rem] lg:w-[31rem]" : "",
              "\n  ",
            )
            .concat(
              "small" !== r || n ? "" : "w-full md:w-[26.4rem] lg:w-[31rem]",
              "\n  ",
            )
            .concat(
              "small" !== r && n ? "w-[26.4rem] lg:w-[36.8rem]" : "",
              "\n  ",
            )
            .concat(
              "small" === r || n ? "" : "w-full md:w-[26.4rem] lg:w-[36.8rem]",
              "\n  ",
            ),
          children: t,
        });
      };
    },
    9293: function (e, t, r) {
      var l = r(5893);
      t.Z = (e) => {
        let { stroke: t = "#575349" } = e;
        return (0, l.jsx)("svg", {
          width: "11",
          height: "9",
          viewBox: "0 0 11 9",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, l.jsx)("path", {
            id: "Vector 201",
            d: "M0 4.5H9.5M9.5 4.5L5.9 1M9.5 4.5L5.9 8",
            stroke: t,
          }),
        });
      };
    },
    1386: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return g;
          },
        });
      var l = r(5893),
        n = r(226),
        i = r(187),
        a = r(6038),
        s = r(6546),
        o = r(7294),
        c = (e) => {
          let { src: t, children: n } = e,
            i = (0, o.useRef)(null),
            a = (0, o.useRef)(null),
            c = (0, o.useRef)(null),
            u = (0, o.useRef)(null),
            d = (0, o.useRef)(null),
            m = (0, o.useRef)(null),
            [p, h] = (0, o.useState)(!1),
            f = (0, o.useRef)(null);
          return (
            (0, o.useEffect)(() => {
              if (!p) {
                let e = r(9074);
                u.current.load(),
                  (d.current = new e.default({
                    src: t,
                    scrollyVideoContainer: m.current,
                    frameThreshold: 0.6,
                    sticky: !1,
                    trackScroll: !1,
                  }));
                return;
              }
              return (
                i.current.style.setProperty(
                  "--video-parent-height",
                  24 * u.current.duration + 200 + "vh",
                ),
                a.current.style.setProperty(
                  "--video-height",
                  24 * u.current.duration + 100 + "vh",
                ),
                (f.current = s.ScrollTrigger.create({
                  trigger: a.current,
                  start: "top top",
                  end: "bottom bottom",
                  scrub: !0,
                  onUpdate: () => {
                    if (!f.current || !u.current) return;
                    let e = f.current.progress;
                    d.current.setTargetTimePercent(e);
                  },
                })),
                () => {
                  f.current && f.current.kill(),
                    f.current && (f.current = null);
                }
              );
            }, [p]),
            (0, l.jsxs)("div", {
              ref: i,
              className:
                "sticky top-0 px-half-container-mobile md:px-half-container -mt-[100vh] h-[var(--video-parent-height)]",
              children: [
                (0, l.jsx)("div", {
                  ref: a,
                  className:
                    "absolute top-0 left-0 w-full mt-[100vh] h-[var(--video-height)]",
                }),
                (0, l.jsxs)("div", {
                  ref: c,
                  className:
                    "sticky top-half-container-mobile md:top-half-container w-full h-[calc(100vh_-_var(--padding-half-container-mobile)*2)] md:h-[calc(100vh_-_var(--padding-half-container)*2)] rounded-18 overflow-hidden bg-white",
                  children: [
                    n,
                    (0, l.jsxs)("div", {
                      className:
                        "scrolly-wrapper absolute top-0 left-0 w-full h-full",
                      children: [
                        (0, l.jsx)("video", {
                          onLoadedMetadata: () => {
                            h(!0);
                          },
                          ref: u,
                          className: "w-full h-full object-cover hidden",
                          muted: !0,
                          playsInline: !0,
                          preload: "auto",
                          tabIndex: 0,
                          children: (0, l.jsx)("source", {
                            src: t,
                            type: "video/mp4",
                          }),
                        }),
                        (0, l.jsx)("div", { ref: m }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        u = r(2099),
        d = r(2692),
        m = r(9362),
        p = r(8266),
        h = r(6494);
      let f = (e) => {
        let { slice: t, sticky: r = !1, blur: c = !0 } = e,
          m = (0, o.useRef)(!1),
          p = (0, o.useRef)(!1),
          h = (0, o.useRef)(null);
        return (
          (0, o.useEffect)(() => {
            if (p.current) {
              if (c) {
                h.current && (h.current.kill(), (h.current = null));
                let e = a.p8.fromTo(
                  p.current,
                  { yPercent: 100 + (0, u.z6)(10) },
                  { yPercent: 0, ease: "power3.inOut", duration: 1 },
                );
                h.current = s.ScrollTrigger.create({
                  trigger: m.current,
                  animation: e,
                  start: r ? "150% bottom" : "95% bottom",
                });
              } else
                a.p8.set(p.current, { yPercent: 0 }),
                  h.current && (h.current.kill(), (h.current = null));
              return () => {
                h.current && (h.current.kill(), (h.current = null));
              };
            }
          }, [c]),
          t.primary.text &&
            t.primary.text[0] &&
            t.primary.text[0].text &&
            (0, l.jsx)("div", {
              ref: m,
              className:
                "flex justify-end items-end w-full relative overflow-hidden h-full ".concat(
                  r ? "px-10 pb-10" : "p-0 md:px-10 md:pb-10",
                  " z-1",
                ),
              children: (0, l.jsx)("div", {
                ref: p,
                className: "flex justify-end items-end w-full",
                children: (0, l.jsxs)(d.Z, {
                  size: "large",
                  blur: c,
                  children: [
                    t.primary.suptitle &&
                      (0, l.jsx)("div", {
                        className:
                          "font-body-mobo text-10 leading-[180%] tracking-[0.05rem] uppercase mb-[0.8rem] md:mb-[1.2rem]",
                        children: t.primary.suptitle,
                      }),
                    (0, l.jsx)("div", {
                      className:
                        "text-17 -tracking-[0.017rem] leading-[141%] lg:text-20 lg:leading-[130%] lg:-tracking-[0.06rem]",
                      children: (0, l.jsx)(i.v, { field: t.primary.text }),
                    }),
                    t.primary.link.url &&
                      (0, l.jsx)("div", {
                        className: "mt-[3.2rem] md:mt-[2.2rem]",
                        children: (0, l.jsx)(n.Z, {
                          mode: c ? "white" : "dark",
                          field: t.primary.link,
                          title: t.primary.link_text,
                          popup: t.primary.pop_up,
                        }),
                      }),
                  ],
                }),
              }),
            })
        );
      };
      var g = (e) => {
        let { slice: t, slices: r, index: n } = e,
          i = (0, o.useRef)(null),
          u = (0, o.useRef)(null),
          d = (0, m.a)("(max-width: 767px)"),
          g = t.primary.text && t.primary.text[0] && t.primary.text[0].text,
          x = (0, p.o)((e) => e.animationContext);
        return (
          (0, o.useEffect)(() => {
            !i.current ||
              (window.innerWidth <= 1024 && g) ||
              x.add(() => {
                s.ScrollTrigger.create({
                  trigger: i.current,
                  start: "top+=".concat(window.innerHeight, " bottom"),
                  end: () => "bottom bottom",
                  animation: a.p8.fromTo(
                    u.current,
                    { scale: 1.1 },
                    { scale: 1, ease: "none" },
                  ),
                  scrub: !d || 1.1,
                }),
                  s.ScrollTrigger.create({
                    trigger: i.current,
                    start: "bottom 100%",
                    end: "bottom top",
                    animation: a.p8.to(u.current, {
                      yPercent: 10,
                      ease: "none",
                    }),
                    scrub: !0,
                  });
              });
          }, []),
          (0, l.jsx)("section", {
            "data-slice-type": t.slice_type,
            "data-slice-variation": t.variation,
            style: { zIndex: r.length - n },
            className: "relative w-full "
              .concat(
                "default" === t.variation
                  ? "pb-[13.4rem] py-half-container-mobile md:py-container px-half-container-mobile md:px-half-container md:pb-half-container"
                  : "",
                " ",
              )
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
              ),
            children:
              "default" === t.variation
                ? (0, l.jsx)("div", {
                    ref: i,
                    className: "".concat(
                      g
                        ? "relative md:h-[60rem] lg:h-[90rem] xl:sticky xl:top-0 xl:h-[200vh] xl:-mt-[100vh]"
                        : "sticky top-0 h-[200vh] -mt-[100vh]",
                    ),
                    children: (0, l.jsxs)("div", {
                      className: "".concat(
                        g
                          ? "xl:sticky h-full xl:top-half-container w-full xl:h-[calc(100vh_-_var(--padding-half-container)*2)]"
                          : "sticky top-half-container-mobile h-[calc(100vh_-_var(--padding-half-container-mobile)*2)] md:top-half-container w-full md:h-[calc(100vh_-_var(--padding-half-container)*2)]",
                      ),
                      children: [
                        (0, l.jsx)("div", {
                          className: "relative w-full ".concat(
                            g ? "h-0 pt-[66.86%]" : "h-full",
                            " md:pt-0 md:absolute md:top-0 md:left-0 md:h-full overflow-hidden rounded-15",
                          ),
                          children: (0, l.jsx)("div", {
                            ref: u,
                            className:
                              "absolute top-0 left-0 w-full h-full will-change-transform",
                            children: (0, l.jsx)(h.Z, {
                              sizes: "(max-width: 768px) 96vw, 96vw",
                              className: "object-cover",
                              field: t.primary.image,
                              fallbackAlt: "",
                              fill: !0,
                            }),
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "relative w-full md:h-full mt-[0.6rem] md:-mt-10",
                          children: (0, l.jsx)(f, { slice: t, blur: !d }),
                        }),
                      ],
                    }),
                  })
                : t.primary.video.url &&
                  (0, l.jsxs)(c, {
                    src: t.primary.video.url,
                    children: [
                      t.primary.placeholder_image &&
                        t.primary.placeholder_image.url &&
                        (0, l.jsx)("div", {
                          className: "w-full h-screen bg-black",
                          children: (0, l.jsx)(h.Z, {
                            field: t.primary.placeholder_image,
                            sizes: "(max-width: 768px) 96vw, 96vw",
                            fallbackAlt: "",
                            priority: !0,
                            loading: "eager",
                            className: "w-full h-full object-cover",
                          }),
                        }),
                      (0, l.jsx)(f, { slice: t, sticky: !0 }),
                    ],
                  }),
          })
        );
      };
    },
  },
]);
