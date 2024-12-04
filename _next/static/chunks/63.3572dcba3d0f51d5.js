"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [63],
  {
    187: function (e, t, r) {
      r.d(t, {
        v: function () {
          return H;
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
          let t = f(e),
            r = [];
          for (let e = 0; e < t.length; e++) r.push(p(t[e]));
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
        f = (e) => {
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
        p = (e) => {
          if ("text" in e) return d(e, h(e.spans, e));
          if ("items" in e) {
            let t = [];
            for (let r = 0; r < e.items.length; r++) t.push(p(e.items[r]));
            return d(e, t);
          }
          return d(e);
        },
        h = (e, t, r) => {
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
            let f = { ...i, text: c };
            n.push(d(f, h(u, { ...t, text: c }, i))),
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
        b = (e) => {
          let t = /^(\/(?!\/)|#)/.test(e),
            r = !t && !/^https?:\/\//.test(e);
          return t && !r;
        },
        w = { Any: "Any", Document: "Document", Media: "Media", Web: "Web" },
        v = (e) => {
          var t;
          return {
            link_type: w.Document,
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
        y = (e, ...t) => {
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
            case w.Media:
            case w.Web:
              return "url" in l ? l.url : null;
            case w.Document:
              if ("id" in l && r.linkResolver) {
                let e = r.linkResolver(l);
                if (null != e) return e;
              }
              if ("url" in l && l.url) return l.url;
              return null;
            case w.Any:
            default:
              return null;
          }
        },
        j = (e) => null != e,
        k = (e) =>
          !!j(e) &&
          (1 === e.length && "text" in e[0] ? !!e[0].text : !!e.length),
        _ = (e) => j(e) && ("id" in e || "url" in e),
        N = (e, t = {}) => {
          if (e && ("link_type" in e ? _(e) : e)) {
            let r = "target" in e ? e.target : void 0,
              l = y(e, t.linkResolver),
              n = null == l ? void 0 : l,
              i = "string" == typeof n && !b(n),
              a = t.rel
                ? t.rel({ href: n, isExternal: i, target: r })
                : i
                  ? "noreferrer"
                  : void 0;
            return { href: n, target: r, rel: null == a ? void 0 : a };
          }
          return {};
        },
        R = (e) => {
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
          f = m && R(m) ? n || "a" : i || "a";
        return (0, l.jsx)(f, { ref: s, ...u, ...a, href: m, rel: d });
      });
      r(3454);
      let C = (e) =>
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
      function E({
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
                C({
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
      let A = o.createContext({}),
        z = () => o.useContext(A) || {},
        H = function ({ components: e, ...t }) {
          let r = z(),
            i = n(
              "object" == typeof e ? s(e) : e,
              "object" == typeof r.richTextComponents
                ? s(r.richTextComponents)
                : r.richTextComponents,
            );
          return (0, l.jsx)(E, {
            components: i,
            internalLinkComponent: r.internalLinkComponent,
            externalLinkComponent: r.externalLinkComponent,
            ...t,
          });
        };
    },
    6063: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return g;
          },
        });
      var l = r(5893),
        n = r(9362),
        i = r(7294),
        a = r(187),
        s = r(6038),
        o = r(6546),
        c = r(1831),
        u = r(6494),
        d = (e) => {
          let { slice: t } = e,
            r = (0, i.useRef)(null),
            n = (0, i.useRef)(null),
            d = (0, i.useRef)([]),
            m = (0, i.useRef)([]),
            f = (0, i.useRef)([0, 0, 0]),
            p = (0, i.useRef)([0, 0, 0]),
            h = (0, i.useRef)([]),
            g = (0, i.useRef)([]),
            x = (0, i.useRef)([]),
            b = (0, i.useRef)(null),
            w = (0, i.useRef)(null),
            v = (0, i.useRef)([]),
            y = (e) => {
              g.current[e] && !g.current[e].paused && g.current[e].pause();
            },
            j = (e) => {
              g.current[e] && g.current[e].paused && g.current[e].play();
            },
            k = () => {
              for (let e = 0; e < m.current.length; e++)
                if (m.current[e].length > 1)
                  for (let t = 1; t < m.current[e].length; t++)
                    s.p8.set(m.current[e][t], { autoAlpha: 0 });
            },
            _ = (e, t) => {
              if (((p.current[e] = t), p.current[e] != f.current[e])) {
                for (let r = 0; r < d.current[e].length; r++)
                  d.current[e][r].classList.toggle("a", r === t);
                s.p8.set(m.current[e][p.current[e]], { zIndex: b.current++ }),
                  s.p8.fromTo(
                    m.current[e][p.current[e]],
                    { autoAlpha: 0 },
                    { autoAlpha: 1, duration: 0.5, ease: "power2.out" },
                  ),
                  (f.current[e] = t);
              }
            },
            N = () => {
              for (let e = 0; e < g.current.length; e++)
                g.current[e] &&
                  g.current[e].addEventListener(
                    "play",
                    () => {
                      h.current[e] && h.current[e].classList.add("opacity-0");
                    },
                    { once: !0 },
                  );
            },
            R = () => {
              window.innerWidth !== w.current &&
                (s.p8.set(r.current, {
                  height: n.current.offsetHeight + window.innerHeight,
                }),
                s.p8.set(n.current, { marginTop: -window.innerHeight })),
                (w.current = window.innerWidth);
            };
          return (
            (0, i.useEffect)(() => {
              k(),
                N(),
                s.p8.set(r.current, {
                  height: n.current.offsetHeight + window.innerHeight,
                }),
                s.p8.set(n.current, { marginTop: -window.innerHeight });
              for (let e = 0; e < x.current.length; e++)
                g.current[e] &&
                  (v.current[e] = o.ScrollTrigger.create({
                    trigger: x.current[e],
                    start: "top+=".concat(window.innerHeight, "px bottom"),
                    end: "+=".concat(
                      x.current[e].offsetHeight + window.innerHeight,
                      "px",
                    ),
                    onEnter: () => {
                      g.current[e] && j(e);
                    },
                    onEnterBack: () => {
                      g.current[e] && j(e);
                    },
                    onLeave: () => {
                      g.current[e] && y(e);
                    },
                    onLeaveBack: () => {
                      g.current[e] && y(e);
                    },
                  }));
              return (
                window.addEventListener("resize", R),
                () => {
                  window.removeEventListener("resize", R);
                  for (let e = 0; e < v.current.length; e++)
                    v.current[e] &&
                      (v.current[e].kill(), (v.current[e] = null));
                }
              );
            }, []),
            (0, l.jsx)("div", {
              ref: r,
              className: "relative",
              children: (0, l.jsx)("div", {
                ref: n,
                className:
                  "sticky min-h-screen xl:hidden mobile:flex top-0 flex flex-col md:flex-row flex-wrap gap-y-[4rem] md:gap-y-[1.25rem] landscape:gap-y-[1.25rem] mx-0 md:-mx-[0.3rem] px-half-container-mobile md:px-[1.25rem] pt-[8rem] md:pt-[10rem] pb-10 ".concat(
                    "White" === t.primary.background_color
                      ? "bg-white"
                      : "Beige light" === t.primary.background_color
                        ? "bg-light_beige"
                        : "Beige dark" === t.primary.background_color
                          ? "bg-dark_beige"
                          : "Grey dark" === t.primary.background_color
                            ? "bg-dark_grey"
                            : "bg-green",
                  ),
                children: t.items.map((e, r) =>
                  (0, l.jsxs)(
                    "div",
                    {
                      className:
                        "relative flex flex-col w-full flex-1 p-0 md:flex-[0_0_100%] landscape:flex-[0_0_100%] md:px-[0.3rem] landscape:px-0 md:px-0",
                      children: [
                        (0, l.jsxs)("div", {
                          ref: (e) => (x.current[r] = e),
                          className:
                            "relative w-full h-0 mb-[0.6rem] md:mb-0 landscape:mb-0 pt-[77.13%] mobile:pt-[56.25%] rounded-13 overflow-hidden",
                          children: [
                            (m.current[r] = []),
                            (0, l.jsx)("div", {
                              ref: (e) => (m.current[r][0] = e),
                              className: "absolute top-0 left-0 w-full h-full",
                              children:
                                e.main_video && e.main_video.url
                                  ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                        (0, l.jsx)("div", {
                                          ref: (e) => (h.current[r] = e),
                                          className:
                                            "absolute left-0 top-0 w-full h-full z-1 transition-opacity duration-global ease-out",
                                          children: (0, l.jsx)(u.Z, {
                                            field: e.main_image,
                                            sizes:
                                              "(max-width: 768px) 96vw, 95vw",
                                            fallbackAlt: "",
                                            className:
                                              "test w-full h-full object-cover",
                                          }),
                                        }),
                                        (0, l.jsx)("video", {
                                          ref: (e) => (g.current[r] = e),
                                          preload: "none",
                                          src: e.main_video.url,
                                          type: "video/mp4",
                                          muted: !0,
                                          loop: !0,
                                          playsInline: !0,
                                          className:
                                            "absolute top-0 left-0 w-full h-full object-cover pointer-events-none",
                                        }),
                                      ],
                                    })
                                  : (0, l.jsx)(u.Z, {
                                      field: e.main_image,
                                      sizes: "(max-width: 768px) 96vw, 95vw",
                                      fallbackAlt: "",
                                      className:
                                        "test w-full h-full object-cover",
                                    }),
                            }),
                            e.image_2.url &&
                              (0, l.jsx)("div", {
                                ref: (e) => (m.current[r][1] = e),
                                className:
                                  "absolute top-0 left-0 w-full h-full",
                                children: (0, l.jsx)(u.Z, {
                                  field: e.image_2,
                                  sizes: "(max-width: 768px) 96vw, 95vw",
                                  fallbackAlt: "",
                                  className: "w-full h-full object-cover",
                                }),
                              }),
                            e.image_3.url &&
                              (0, l.jsx)("div", {
                                ref: (e) => (m.current[r][2] = e),
                                className:
                                  "absolute top-0 left-0 w-full h-full",
                                children: (0, l.jsx)(u.Z, {
                                  field: e.image_3,
                                  sizes: "(max-width: 768px) 96vw, 95vw",
                                  fallbackAlt: "",
                                  className: "w-full h-full object-cover",
                                }),
                              }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className:
                            "relative w-full min-h-[2.36rem] flex-1 px-[2rem] pt-[1.2rem] pb-[3.7rem] rounded-10 text-dark_grey z-[999] md:absolute landscape:absolute "
                              .concat(
                                "right" === t.primary.content_position
                                  ? "md:right-10 landscape:right-10"
                                  : "md:left-10 landscape:left-10",
                                " md:bottom-10 md:w-[26rem] lg:w-[35.2rem] landscape:w-[35.2rem] ",
                              )
                              .concat(
                                "White" === t.primary.background_color
                                  ? "bg-light_beige md:bg-dark_beige/[0.38] landscape:bg-dark_beige/[0.38] md:backdrop-blur-[60px] landscape:backdrop-blur-[60px] md:text-white landscape:text-white"
                                  : "bg-white md:bg-dark_beige/[0.38] md:backdrop-blur-[60px] md:text-white landscape:bg-dark_beige/[0.38] landscape:backdrop-blur-[60px] landscape:text-white",
                              ),
                          children: [
                            (0, l.jsx)("div", {
                              className:
                                "text-center font-headings text-26 md:text-20 lg:text-26 leading-[112%] -tracking-[0.078rem] font-medium my-[3.744rem] md:my-[2.5rem] lg:my-[3.744rem]",
                              children: e.title,
                            }),
                            (0, l.jsxs)("div", {
                              className: "relative w-full mb-[2.7rem]",
                              children: [
                                (0, l.jsx)("div", {
                                  className:
                                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                                  children: (0, l.jsx)("div", {
                                    className: "svg-wrapper w-[0.7rem]",
                                    children: (0, l.jsx)(c.Z, {
                                      className:
                                        "fill-[#575349] md:fill-[#fff] landscape:fill-[#fff]",
                                    }),
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className:
                                    "w-full h-px bg-dark_grey md:bg-white landscape:bg-white opacity-20",
                                }),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className:
                                "text-13 leading-[2rem] tracking-[0.013rem] text-center px-[2.75rem] md:px-[0.5rem] lg:px-[2.75rem]",
                              children: [
                                (0, l.jsx)(a.v, { field: e.content }),
                                (e.image_2.url || e.image_3.url) &&
                                  (0, l.jsxs)("div", {
                                    className:
                                      "w-full flex items-center justify-center gap-x-[1rem] mt-[3.7rem]",
                                    children: [
                                      (d.current[r] = []),
                                      (0, l.jsxs)("div", {
                                        ref: (e) => (d.current[r][0] = e),
                                        className:
                                          "group relative flex justify-center items-center w-[2.5rem] h-[2.5rem] cursor-pointer a",
                                        onClick: () => _(r, 0),
                                        children: [
                                          (0, l.jsx)("div", {
                                            className:
                                              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-px border-[#B1B8C3] opacity-0 transition-opacity duration-global ease-out group-[.a]:opacity-20",
                                          }),
                                          (0, l.jsx)("div", {
                                            className:
                                              "w-[1rem] h-[1rem] rounded-full",
                                            style: {
                                              backgroundColor:
                                                e.main_image_color || "#fff",
                                            },
                                          }),
                                        ],
                                      }),
                                      e.image_2.url &&
                                        (0, l.jsxs)("div", {
                                          ref: (e) => (d.current[r][1] = e),
                                          className:
                                            "group relative flex justify-center items-center w-[2.5rem] h-[2.5rem] cursor-pointer",
                                          onClick: () => _(r, 1),
                                          children: [
                                            (0, l.jsx)("div", {
                                              className:
                                                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-px border-[#B1B8C3] opacity-0 transition-opacity duration-global ease-out group-[.a]:opacity-20",
                                            }),
                                            (0, l.jsx)("div", {
                                              className:
                                                "w-[1rem] h-[1rem] rounded-full",
                                              style: {
                                                backgroundColor:
                                                  e.image_2_color || "#fff",
                                              },
                                            }),
                                          ],
                                        }),
                                      e.image_3.url &&
                                        (0, l.jsxs)("div", {
                                          ref: (e) => (d.current[r][2] = e),
                                          className:
                                            "group relative flex justify-center items-center w-[2.5rem] h-[2.5rem] cursor-pointer",
                                          onClick: () => _(r, 2),
                                          children: [
                                            (0, l.jsx)("div", {
                                              className:
                                                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-px border-[#B1B8C3] opacity-0 transition-opacity duration-global ease-out group-[.a]:opacity-20",
                                            }),
                                            (0, l.jsx)("div", {
                                              className:
                                                "w-[1rem] h-[1rem] rounded-full",
                                              style: {
                                                backgroundColor:
                                                  e.image_3_color || "#fff",
                                              },
                                            }),
                                          ],
                                        }),
                                    ],
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    "fullscreenslider-slide-".concat(r),
                  ),
                ),
              }),
            })
          );
        },
        m = r(2099),
        f = r(4508);
      let p = (e) => {
        let { slice: t, scrollTo: n } = e,
          d = (0, i.useRef)(null),
          f = (0, i.useRef)([]),
          p = (0, i.useRef)([]),
          h = (0, i.useRef)([]),
          g = (0, i.useRef)([]),
          x = (0, i.useRef)([]),
          b = (0, i.useRef)([]),
          w = (0, i.useRef)([]),
          v = (0, i.useRef)([]),
          y = (0, i.useRef)([0, 0, 0]),
          j = (0, i.useRef)([0, 0, 0]),
          k = (0, i.useRef)(!1),
          _ = (0, i.useRef)(0),
          N = (0, i.useRef)(null),
          R = (0, i.useRef)(null),
          L = (0, i.useRef)(null),
          C = (0, i.useRef)([]),
          E = (0, i.useRef)([]),
          A = (0, i.useRef)([]),
          z = (0, i.useRef)([]),
          H = (0, i.useRef)(null),
          T = (0, i.useRef)([]),
          B = (0, i.useRef)([]),
          I = (0, i.useRef)(null),
          Z = (0, i.useRef)(null),
          W = (e) => {
            E.current[e] && !E.current[e].paused && E.current[e].pause();
          },
          F = (e) => {
            E.current[e] &&
              E.current[e].paused &&
              ((E.current[e].currentTime = 0), E.current[e].play());
          },
          P = () => {
            for (let e = 0; e < b.current.length; e++) {
              let t = b.current[e],
                r = s.p8.timeline();
              r.set(t, { yPercent: 100 }),
                r.set(t.children[0], { yPercent: -90 }),
                r.to(t, { yPercent: 0, ease: "none" }),
                r.to(t.children[0], { yPercent: 0, ease: "none" }, "<"),
                (A.current[e] = o.ScrollTrigger.create({
                  trigger: t,
                  start: () =>
                    e > 0
                      ? "".concat(
                          e * window.innerHeight + (0, m.z6)(10),
                          "px bottom",
                        )
                      : "0px bottom",
                  end: () => "+=".concat(window.innerHeight),
                  animation: e > 0 ? r : null,
                  scrub: !0,
                  onEnter: () => {
                    0 !== e && F(e);
                  },
                  onEnterBack: () => {
                    0 !== e && F(e);
                  },
                  onLeaveBack: () => {
                    0 !== e && W(e);
                  },
                  onUpdate: () => {
                    if (!A.current[e]) return;
                    let t = _.current,
                      r = t - k.current,
                      l = r > 0 ? "bottom" : r < 0 ? "top" : null;
                    (k.current = t),
                      "bottom" === l
                        ? A.current[e].progress >= 0.5 &&
                          N.current !== e &&
                          (!1 !== N.current && e > 0 && M(N.current),
                          (N.current = e),
                          D(N.current))
                        : "top" === l &&
                          0 !== e &&
                          A.current[e].progress < 0.5 &&
                          N.current !== e - 1 &&
                          (!1 !== N.current && M(N.current),
                          (N.current = e - 1),
                          D(N.current));
                  },
                })),
                e !== b.current.length - 1
                  ? (z.current[e] = o.ScrollTrigger.create({
                      trigger: t,
                      start: () =>
                        e > 0
                          ? "".concat(
                              (e + 1) * window.innerHeight + (0, m.z6)(10),
                              "px bottom",
                            )
                          : "".concat(
                              (e + 2) * window.innerHeight,
                              "px bottom",
                            ),
                      end: () => "+=".concat(window.innerHeight),
                      animation: s.p8.fromTo(
                        t.children[0],
                        { yPercent: 0 },
                        { yPercent: -10, ease: "none" },
                      ),
                      scrub: !0,
                      onEnterBack: () => {
                        F(e);
                      },
                      onLeave: () => {
                        W(e);
                      },
                    }))
                  : (H.current = o.ScrollTrigger.create({
                      trigger: t,
                      start: () =>
                        "".concat(
                          (e + 1) * window.innerHeight + (0, m.z6)(10),
                          "px bottom",
                        ),
                      end: () => "+=".concat(window.innerHeight),
                      animation: s.p8.fromTo(
                        t.children[0],
                        { yPercent: 0 },
                        { yPercent: 10, ease: "none" },
                      ),
                      scrub: !0,
                      onEnterBack: () => {
                        F(b.current.length - 1);
                      },
                      onLeave: () => {
                        W(b.current.length - 1);
                      },
                    }));
            }
            I.current = o.ScrollTrigger.create({
              trigger: d.current,
              start: "top bottom-=100%",
              onEnter: () => {
                F(0);
              },
              onLeaveBack: () => {
                W(0);
              },
            });
          },
          S = () => {
            for (let e = 0; e < w.current.length; e++)
              if (w.current[e].length > 1)
                for (let t = 1; t < w.current[e].length; t++)
                  s.p8.set(w.current[e][t], { autoAlpha: 0 });
          },
          M = (e) => {
            (0, m.RE)(B.current[e]);
            let t = [p.current[e], h.current[e], g.current[e]];
            x.current[e] && t.push(x.current[e]),
              (T.current[e] = s.p8.to(t, {
                autoAlpha: 0,
                stagger: -0.01,
                duration: 0.4,
                ease: "power2.inOut",
              }));
          },
          D = (e) => {
            (0, m.RE)(T.current[e]);
            let t = [p.current[e], h.current[e], g.current[e]];
            x.current[e] && t.push(x.current[e]),
              (B.current[e] = s.p8.to(t, {
                autoAlpha: 1,
                delay: 0.35,
                stagger: -0.01,
                duration: 0.4,
                ease: "power2.inOut",
              }));
          },
          O = (e, t) => {
            if (((j.current[e] = t), j.current[e] != y.current[e])) {
              n(d.current, {
                offset: window.innerHeight * (e + 1) - (0, m.z6)(10),
              });
              for (let r = 0; r < v.current[e].length; r++)
                v.current[e][r].classList.toggle("a", r === t);
              s.p8.set(w.current[e][j.current[e]], { zIndex: L.current++ }),
                s.p8.fromTo(
                  w.current[e][j.current[e]],
                  { autoAlpha: 0 },
                  { autoAlpha: 1, duration: 0.5, ease: "power2.out" },
                ),
                (y.current[e] = t);
            }
          },
          G = () => {
            _.current = window.scrollY;
          },
          $ = () => {
            s.p8.set(R.current, { height: "auto" });
            let e = [R.current.offsetHeight];
            for (let t = 0; t < f.current.length; t++)
              e.push(f.current[t].offsetHeight);
            s.p8.set(R.current, { height: Math.max(...e) }),
              window.innerWidth < 1200
                ? Z.current && (Z.current.kill(), (Z.current = null))
                : (Z.current = o.ScrollTrigger.create({
                    trigger: d.current,
                    start: () => "top+=".concat(window.innerHeight, " bottom"),
                    end: () => "+=".concat(window.innerHeight),
                    animation: s.p8.fromTo(
                      w.current[0],
                      { scale: 1.1 },
                      { scale: 1, ease: "none" },
                    ),
                    scrub: !0,
                  }));
          },
          U = () => {
            for (let e = 0; e < E.current.length; e++)
              E.current[e] &&
                ((E.current[e].src = E.current[e].dataset.src),
                E.current[e].load(),
                E.current[e].addEventListener(
                  "play",
                  () => {
                    C.current[e].classList.add("opacity-0");
                  },
                  { once: !0 },
                ));
          };
        return (
          (0, i.useEffect)(() => {
            let e = r(8041);
            for (let t = 0; t < g.current.length; t++)
              g.current[t] = new e({
                target: g.current[t],
                by: "words",
              })[0].words;
            $(), S(), P();
            for (let e = 1; e < f.current.length; e++)
              g.current[e] && s.p8.set(g.current[e], { autoAlpha: 0 }),
                p.current[e] && s.p8.set(p.current[e], { autoAlpha: 0 }),
                h.current[e] && s.p8.set(h.current[e], { autoAlpha: 0 }),
                x.current[e] && s.p8.set(x.current[e], { autoAlpha: 0 });
            return (
              U(),
              window.addEventListener("scroll", G),
              window.addEventListener("resize", $),
              () => {
                window.removeEventListener("scroll", G),
                  window.removeEventListener("resize", $),
                  I.current && (I.current.kill(), (I.current = null));
                for (let e = 0; e < A.length; e++)
                  A.current[e].kill(), (A.current[e] = null);
                for (let e = 0; e < z.length; e++)
                  z.current[e].kill(), (z.current[e] = null);
              }
            );
          }, []),
          (0, l.jsx)("div", {
            ref: d,
            className: "sticky px-10 -mt-[100vh] ".concat(
              "White" === t.primary.background_color
                ? "bg-white"
                : "Beige light" === t.primary.background_color
                  ? "bg-light_beige"
                  : "Beige dark" === t.primary.background_color
                    ? "bg-dark_beige"
                    : "Grey dark" === t.primary.background_color
                      ? "bg-dark_grey"
                      : "bg-green",
            ),
            style: { height: "".concat((t.items.length + 1) * 100, "vh") },
            children: (0, l.jsxs)("div", {
              className:
                "sticky top-10 w-full h-[calc(100vh_-_2rem)] rounded-18 overflow-hidden bg-white",
              children: [
                t.items.map((e, t) =>
                  (0, l.jsx)(
                    "div",
                    {
                      className:
                        "w-full h-full absolute left-0 top-0 overflow-hidden rounded-t-15",
                      ref: (e) => (b.current[t] = e),
                      children: (0, l.jsxs)("div", {
                        className: "relative w-full h-full",
                        children: [
                          (w.current[t] = []),
                          (0, l.jsx)("div", {
                            ref: (e) => (w.current[t][0] = e),
                            className: "absolute top-0 left-0 w-full h-full",
                            children:
                              e.main_video && e.main_video.url
                                ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                      (0, l.jsx)("div", {
                                        ref: (e) => (C.current[t] = e),
                                        className:
                                          "absolute left-0 top-0 w-full h-full z-1 transition-opacity duration-global ease-out",
                                        children: (0, l.jsx)(u.Z, {
                                          transition: "fast",
                                          field: e.main_image,
                                          sizes:
                                            "(max-width: 768px) 96vw, 95vw",
                                          fallbackAlt: "",
                                          className:
                                            "test w-full h-full object-cover",
                                        }),
                                      }),
                                      (0, l.jsx)("video", {
                                        ref: (e) => (E.current[t] = e),
                                        "data-src": e.main_video.url,
                                        type: "video/mp4",
                                        muted: !0,
                                        loop: !0,
                                        playsInline: !0,
                                        className:
                                          "absolute top-0 left-0 w-full h-full object-cover pointer-events-none",
                                      }),
                                    ],
                                  })
                                : (0, l.jsx)(u.Z, {
                                    transition: "fast",
                                    field: e.main_image,
                                    sizes: "(max-width: 768px) 100vw, 95vw",
                                    fallbackAlt: "",
                                    className: "w-full h-full object-cover",
                                  }),
                          }),
                          e.image_2.url &&
                            (0, l.jsx)("div", {
                              ref: (e) => (w.current[t][1] = e),
                              className: "absolute top-0 left-0 w-full h-full",
                              children: (0, l.jsx)(u.Z, {
                                transition: "fast",
                                field: e.image_2,
                                sizes: "(max-width: 768px) 100vw, 95vw",
                                fallbackAlt: "",
                                className: "w-full h-full object-cover",
                              }),
                            }),
                          e.image_3.url &&
                            (0, l.jsx)("div", {
                              ref: (e) => (w.current[t][2] = e),
                              className: "absolute top-0 left-0 w-full h-full",
                              children: (0, l.jsx)(u.Z, {
                                transition: "fast",
                                field: e.image_3,
                                sizes: "(max-width: 768px) 100vw, 95vw",
                                fallbackAlt: "",
                                className: "w-full h-full object-cover",
                              }),
                            }),
                        ],
                      }),
                    },
                    "fullscreenslider-image-".concat(t),
                  ),
                ),
                (0, l.jsx)("div", {
                  ref: R,
                  className: "absolute bottom-10 ".concat(
                    "right" === t.primary.content_position
                      ? "right-10"
                      : "left-10",
                    " w-[35.2rem] min-h-[42rem] bg-dark_beige/[0.38] backdrop-blur-[60px] rounded-12",
                  ),
                  children: t.items.map((e, t) =>
                    (0, l.jsxs)(
                      "div",
                      {
                        ref: (e) => (f.current[t] = e),
                        className:
                          "absolute w-full top-0 left-0 px-[1.2rem] pt-20 pb-40",
                        children: [
                          (0, l.jsx)("div", {
                            ref: (e) => (p.current[t] = e),
                            className:
                              "text-white text-center font-headings text-30 leading-[120%] -tracking-[0.09rem] font-medium my-[5.2rem]",
                            children: e.title,
                          }),
                          (0, l.jsxs)("div", {
                            ref: (e) => (h.current[t] = e),
                            className: "relative w-full mb-40",
                            children: [
                              (0, l.jsx)("div", {
                                className:
                                  "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                                children: (0, l.jsx)("div", {
                                  className: "svg-wrapper w-[0.7rem]",
                                  children: (0, l.jsx)(c.Z, {
                                    color: "#F2EFE9",
                                  }),
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "w-full h-px bg-white opacity-20",
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className:
                              "text-14 leading-[2rem] tracking-[0.014rem] text-white text-center px-[2.8rem]",
                            children: [
                              (0, l.jsx)("div", {
                                ref: (e) => (g.current[t] = e),
                                children: (0, l.jsx)(a.v, { field: e.content }),
                              }),
                              (e.image_2.url || e.image_3.url) &&
                                (0, l.jsxs)("div", {
                                  ref: (e) => (x.current[t] = e),
                                  className:
                                    "w-full flex items-center justify-center gap-x-[1rem] mt-[6.8rem]",
                                  children: [
                                    (v.current[t] = []),
                                    (0, l.jsxs)("div", {
                                      ref: (e) => (v.current[t][0] = e),
                                      className:
                                        "group relative flex justify-center items-center w-[2.5rem] h-[2.5rem] cursor-pointer a",
                                      onClick: () => O(t, 0),
                                      children: [
                                        (0, l.jsx)("div", {
                                          className:
                                            "absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 rounded-full border-px border-white opacity-0 transition-opacity duration-global ease-out group-[.a]:opacity-20 group-hover:opacity-20",
                                        }),
                                        (0, l.jsx)("div", {
                                          className:
                                            "w-[1rem] h-[1rem] rounded-full",
                                          style: {
                                            backgroundColor:
                                              e.main_image_color || "#fff",
                                          },
                                        }),
                                      ],
                                    }),
                                    e.image_2.url &&
                                      (0, l.jsxs)("div", {
                                        ref: (e) => (v.current[t][1] = e),
                                        className:
                                          "group relative flex justify-center items-center w-[2.5rem] h-[2.5rem] cursor-pointer",
                                        onClick: () => O(t, 1),
                                        children: [
                                          (0, l.jsx)("div", {
                                            className:
                                              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-px border-white opacity-0 transition-opacity duration-global ease-out group-[.a]:opacity-20 group-hover:opacity-20",
                                          }),
                                          (0, l.jsx)("div", {
                                            className:
                                              "w-[1rem] h-[1rem] rounded-full",
                                            style: {
                                              backgroundColor:
                                                e.image_2_color || "#fff",
                                            },
                                          }),
                                        ],
                                      }),
                                    e.image_3.url &&
                                      (0, l.jsxs)("div", {
                                        ref: (e) => (v.current[t][2] = e),
                                        className:
                                          "group relative flex justify-center items-center w-[2.5rem] h-[2.5rem] cursor-pointer",
                                        onClick: () => O(t, 2),
                                        children: [
                                          (0, l.jsx)("div", {
                                            className:
                                              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-px border-white opacity-0 transition-opacity duration-global ease-out group-[.a]:opacity-20 group-hover:opacity-20",
                                          }),
                                          (0, l.jsx)("div", {
                                            className:
                                              "w-[1rem] h-[1rem] rounded-full",
                                            style: {
                                              backgroundColor:
                                                e.image_3_color || "#fff",
                                            },
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      },
                      "fullscreenslider-slide-".concat(t),
                    ),
                  ),
                }),
              ],
            }),
          })
        );
      };
      var h = (e) => {
          let { slice: t } = e,
            r = (0, f.LZ)(),
            n = (e, t) => {
              r.scrollTo(e, t);
            },
            a = (0, i.useMemo)(
              () => (0, l.jsx)(p, { scrollTo: n, slice: t }),
              [],
            );
          return a;
        },
        g = (e) => {
          let { slice: t, slices: r, index: i } = e,
            a = (0, n.a)("(max-width: 1200px)", !0);
          return (0, l.jsx)("section", {
            "data-slice-type": t.slice_type,
            "data-slice-variation": t.variation,
            style: { zIndex: r.length - i },
            className: "relative",
            children: a
              ? (0, l.jsx)(d, { slice: t })
              : !t.primary.mobile && (0, l.jsx)(h, { slice: t }),
          });
        };
    },
  },
]);
