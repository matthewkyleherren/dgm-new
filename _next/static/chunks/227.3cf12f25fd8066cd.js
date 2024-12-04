"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [227],
  {
    187: function (e, t, r) {
      r.d(t, {
        v: function () {
          return A;
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
        s = (e) => (t, r, n, l, i) => {
          let s = e[a[t] || t];
          if (s) return s({ type: t, node: r, text: n, children: l, key: i });
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
          let n = e.slice(0);
          n.sort((e, t) => e.start - t.start || t.end - e.end);
          let l = [];
          for (let e = 0; e < n.length; e++) {
            let i = n[e],
              a = (r && r.start) || 0,
              s = i.start - a,
              o = i.end - a,
              c = t.text.slice(s, o),
              u = [];
            for (let t = e; t < n.length; t++) {
              let e = n[t];
              e !== i &&
                (e.start >= i.start && e.end <= i.end
                  ? (u.push(e), n.splice(t, 1), t--)
                  : e.start < i.end &&
                    e.end > i.start &&
                    (u.push({ ...e, end: i.end }),
                    (n[t] = { ...e, start: i.end })));
            }
            0 === e && s > 0 && l.push(m(t.text.slice(0, s)));
            let p = { ...i, text: c };
            l.push(d(p, f(u, { ...t, text: c }, i))),
              o < t.text.length &&
                l.push(
                  m(t.text.slice(o, n[e + 1] ? n[e + 1].start - a : void 0)),
                );
          }
          return l;
        },
        x = (e, t) => g(u(e).children, t),
        g = (e, t) => {
          let r = [];
          for (let n = 0; n < e.length; n++) {
            let l = e[n],
              i = t(l.type, l.node, l.text, g(l.children, t), l.key);
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
        _ = (e, ...t) => {
          let r;
          if (!e) return null;
          let n = "link_type" in e ? e : b(e),
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
        k = (e) =>
          !!j(e) &&
          (1 === e.length && "text" in e[0] ? !!e[0].text : !!e.length),
        w = (e) => j(e) && ("id" in e || "url" in e),
        N = (e, t = {}) => {
          if (e && ("link_type" in e ? w(e) : e)) {
            let r = "target" in e ? e.target : void 0,
              n = _(e, t.linkResolver),
              l = null == n ? void 0 : n,
              i = "string" == typeof l && !v(l),
              a = t.rel
                ? t.rel({ href: l, isExternal: i, target: r })
                : i
                  ? "noreferrer"
                  : void 0;
            return { href: l, target: r, rel: null == a ? void 0 : a };
          }
          return {};
        },
        C = (e) => {
          let t = /^(\/(?!\/)|#)/.test(e),
            r = !t && !/^https?:\/\//.test(e);
          return t && !r;
        };
      r(3454);
      let R = o.forwardRef(function (
        {
          field: e,
          document: t,
          linkResolver: r,
          internalComponent: l,
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
          p = m && C(m) ? l || "a" : i || "a";
        return (0, n.jsx)(p, { ref: s, ...u, ...a, href: m, rel: d });
      });
      r(3454);
      let L = (e) =>
        s({
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
                r.push((0, n.jsx)(o.Fragment, { children: t }, `${l}__line`)),
                l++;
            return (0, n.jsx)(o.Fragment, { children: r }, t);
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
            return null != r ? (0, n.jsx)(n.Fragment, { children: r }) : null;
          {
            let r = l(
                "object" == typeof i ? s(i) : i,
                L({
                  linkResolver: e,
                  internalLinkComponent: c,
                  externalLinkComponent: a,
                }),
              ),
              u = x(t, (e, t, n, l, i) => {
                let a = r(e, t, n, l, i);
                return o.isValidElement(a) && null == a.key
                  ? o.cloneElement(a, { key: i })
                  : a;
              });
            return (0, n.jsx)(n.Fragment, { children: u });
          }
        }, [t, c, a, i, e, r]);
      }
      let I = o.createContext({}),
        T = () => o.useContext(I) || {},
        A = function ({ components: e, ...t }) {
          let r = T(),
            i = l(
              "object" == typeof e ? s(e) : e,
              "object" == typeof r.richTextComponents
                ? s(r.richTextComponents)
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
    60: function (e, t, r) {
      var n = r(5893),
        l = r(5600),
        i = r(7294);
      t.Z = (e) => {
        let {
            size: t = "small",
            name: r,
            keepContent: a = !1,
            children: s,
          } = e,
          [o, c] = (0, i.useState)(!1),
          u = (0, i.useRef)(!1),
          d = (0, i.useRef)(!1),
          m = (e) => {
            e.detail.name === r && (c(!0), (d.current = !0));
          };
        (0, i.useEffect)(() => {
          o && window.history.pushState({}, null, null);
        }, [o]);
        let p = () => {
            d.current &&
              ((u.current = !0), window.history.back(), (u.current = !1));
          },
          h = () => {
            d.current &&
              !u.current &&
              (c(!1),
              (d.current = !1),
              window.dispatchEvent(new CustomEvent("back-close-popup")));
          };
        return (
          (0, i.useEffect)(
            () => (
              window.addEventListener("open-popup", m),
              window.addEventListener("popup-closed", p),
              window.addEventListener("popstate", h),
              () => {
                window.removeEventListener("open-popup", m),
                  window.removeEventListener("popup-closed", p),
                  window.removeEventListener("popstate", h);
              }
            ),
            [],
          ),
          (0, n.jsx)(l.Z, { size: t, name: r, keepContent: a, children: s })
        );
      };
    },
    1167: function (e, t, r) {
      var n = r(5893);
      t.Z = () =>
        (0, n.jsxs)("svg", {
          width: "12",
          height: "12",
          viewBox: "0 0 12 12",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, n.jsx)("circle", { cx: "6", cy: "6", r: "2", fill: "#FE814B" }),
            (0, n.jsx)("circle", {
              cx: "6",
              cy: "6",
              r: "5",
              stroke: "#FE814B",
              strokeDasharray: "1 1",
            }),
          ],
        });
    },
    9227: function (e, t, r) {
      r.r(t);
      var n = r(5893),
        l = r(7294),
        i = r(6038),
        a = r(6546),
        s = r(2099),
        o = r(1167),
        c = r(9362),
        u = r(352),
        d = r(187),
        m = r(60),
        p = r(6494);
      let h = "/focus_points.mp4",
        f = (e) => {
          let { slice: t, slices: o, index: u } = e,
            d = (0, l.useRef)(null),
            m = (0, l.useRef)(null),
            f = (0, l.useRef)(null),
            v = (0, l.useRef)(null),
            y = (0, l.useRef)(null),
            b = (0, l.useRef)(null),
            _ = (0, l.useRef)(null),
            j = (0, l.useRef)([]),
            k = (0, l.useRef)([]),
            w = (0, l.useRef)([]),
            [N, C] = (0, l.useState)(!1),
            R = (0, c.a)("(max-width: 1024px)", !0),
            L = (0, l.useRef)(null),
            E = (0, l.useRef)(null),
            I = (0, l.useRef)(null),
            T = (0, l.useRef)([]),
            A = (0, l.useRef)([]),
            S = (e) => {
              k.current[e] ||
                ((0, s.RE)(T.current[e]),
                (A.current[e] = i.p8.timeline()),
                A.current[e]
                  .fromTo(
                    j.current[e],
                    { yPercent: 70 },
                    {
                      yPercent: 0,
                      autoAlpha: 1,
                      duration: 0.7,
                      ease: "power3.out",
                    },
                  )
                  .fromTo(
                    j.current[e],
                    { scaleX: 0.8 },
                    { scaleX: 1, duration: 0.7, ease: "power3.out" },
                    0.1,
                  ),
                w.current[e].title &&
                  (A.current[e].set(
                    w.current[e].title[0].chars,
                    { autoAlpha: 0 },
                    0,
                  ),
                  A.current[e].to(
                    w.current[e].title[0].chars,
                    {
                      autoAlpha: 1,
                      stagger: 0.05,
                      ease: "none",
                      duration: 0,
                      onStart: () => {
                        i.p8.effects.blink(w.current[e].title[0].chars, {
                          delay: 0.2,
                          duration: 0.07,
                        });
                      },
                    },
                    0.1,
                  )),
                (k.current[e] = !0));
            },
            F = (e) => {
              k.current[e] &&
                ((0, s.RE)(A.current[e]),
                (T.current[e] = i.p8.to(j.current[e], {
                  autoAlpha: 0,
                  duration: 0.25,
                  ease: "power2.out",
                })),
                (k.current[e] = !1));
            },
            P = (e) => {
              window.dispatchEvent(
                new CustomEvent("open-popup", { detail: { name: e } }),
              );
            };
          (0, l.useEffect)(
            () => (
              window.addEventListener("is-appeared", Z),
              () => {
                window.removeEventListener("is-appeared", Z);
              }
            ),
            [],
          );
          let Z = () => {
            m.current && i.p8.set(m.current, { autoAlpha: 1 });
          };
          return (
            (0, l.useEffect)(() => {
              if (!N) {
                let e = r(9074);
                y.current.load(),
                  (b.current = new e.default({
                    src: h,
                    scrollyVideoContainer: _.current,
                    frameThreshold: 0.6,
                    sticky: !1,
                    trackScroll: !1,
                  }));
                return;
              }
              return (
                f.current.style.setProperty(
                  "--video-parent-height",
                  24 * y.current.duration + 200 + "vh",
                ),
                v.current.style.setProperty(
                  "--video-height",
                  24 * y.current.duration + 100 + "vh",
                ),
                (L.current = a.ScrollTrigger.create({
                  trigger: v.current,
                  start: "top top",
                  end: "bottom bottom",
                  scrub: !0,
                  onUpdate: () => {
                    if (!L.current || !y.current) return;
                    let e = L.current.progress;
                    b.current.setTargetTimePercent(e),
                      R ||
                        (e >= 0.05 && e <= 0.34 ? S(0) : F(0),
                        e >= 0.15 && e <= 0.46 ? S(1) : F(1),
                        e >= 0.35 && e <= 0.6 ? S(2) : F(2),
                        e >= 0.65 && e <= 0.92 ? S(3) : F(3),
                        e >= 0.9 && e <= 1 ? S(4) : F(4));
                  },
                })),
                R && (j.current = []),
                j.current.length && i.p8.set(j.current, { autoAlpha: 0 }),
                () => {
                  L.current && L.current.kill(),
                    L.current && (L.current = null),
                    E.current && E.current.kill(),
                    E.current && (E.current = null),
                    I.current && I.current.kill(),
                    I.current && (I.current = null);
                }
              );
            }, [N, R]),
            (0, l.useEffect)(
              () => (
                R
                  ? ((j.current = []),
                    y.current && i.p8.set(y.current, { scale: 1 }))
                  : ((E.current = a.ScrollTrigger.create({
                      trigger: v.current,
                      start: "top bottom",
                      end: "+=".concat(window.innerHeight),
                      animation: i.p8.fromTo(
                        y.current,
                        { scale: 1.2 },
                        { scale: 1, ease: "none" },
                      ),
                      scrub: !0,
                    })),
                    (I.current = a.ScrollTrigger.create({
                      trigger: m.current,
                      start: "bottom 100%",
                      end: "bottom top",
                      animation: i.p8.to(y.current, {
                        yPercent: 7.5,
                        ease: "none",
                      }),
                      scrub: !0,
                    }))),
                () => {
                  E.current && E.current.kill(),
                    E.current && (E.current = null),
                    I.current && I.current.kill(),
                    I.current && (I.current = null);
                }
              ),
              [R],
            ),
            (0, n.jsxs)("section", {
              ref: m,
              "data-slice-type": t.slice_type,
              "data-slice-variation": t.variation,
              style: { zIndex: o.length - u },
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
              ),
              children: [
                (0, n.jsxs)("div", {
                  ref: f,
                  className:
                    "sticky top-0 px-half-container-mobile pb-half-container-mobile md:pb-half-container mobile:pb-half-container xl:pb-0 md:px-10 -mt-[100vh] h-[var(--video-parent-height)]",
                  children: [
                    (0, n.jsx)("div", {
                      ref: v,
                      className:
                        "absolute top-0 left-0 w-full mt-[100vh] h-[var(--video-height)]",
                    }),
                    (0, n.jsxs)("div", {
                      ref: d,
                      className:
                        "sticky top-half-container-mobile md:top-half-container w-full h-[calc(100vh_-_var(--padding-half-container-mobile)*2)] md:h-[calc(100vh_-_2rem)] mb-[var(--padding-half-container-mobile)] md:mb-0 rounded-18 overflow-hidden bg-white",
                      children: [
                        (0, n.jsxs)("div", {
                          className:
                            "scrolly-wrapper absolute top-0 left-0 w-full h-full",
                          children: [
                            (0, n.jsx)("video", {
                              onLoadedMetadata: () => {
                                C(!0);
                              },
                              ref: y,
                              className: "w-full h-full object-cover hidden",
                              muted: !0,
                              playsInline: !0,
                              preload: "auto",
                              tabIndex: 0,
                              children: (0, n.jsx)("source", {
                                src: h,
                                type: "video/mp4",
                              }),
                            }),
                            t.primary.placeholder_image &&
                              t.primary.placeholder_image.url &&
                              (0, n.jsx)("div", {
                                className: "w-full h-screen bg-black",
                                children: (0, n.jsx)(p.Z, {
                                  field: t.primary.placeholder_image,
                                  sizes: "(max-width: 768px) 96vw, 96vw",
                                  fallbackAlt: "",
                                  priority: !0,
                                  loading: "eager",
                                  className: "w-full h-full object-cover",
                                }),
                              }),
                            (0, n.jsx)("div", {
                              className: "absolute top-0 left-0",
                              ref: _,
                            }),
                          ],
                        }),
                        !R &&
                          (0, n.jsxs)(n.Fragment, {
                            children: [
                              (0, n.jsx)("div", {
                                ref: (e) => (j.current[0] = e),
                                className:
                                  "absolute bottom-[23.5rem] md:bottom-[40%] md:right-[10%] xl:bottom-[initial] xl:top-[24.7rem] right-[1rem] xl:right-[25.3rem]",
                                onClick: () => P("card-1"),
                                children: (0, n.jsx)(x, {
                                  ref: (e) => (w.current[0] = e),
                                  title: t.primary.card_1_title,
                                }),
                              }),
                              (0, n.jsx)("div", {
                                ref: (e) => (j.current[1] = e),
                                className:
                                  "absolute bottom-[16.8rem] left-[2.5rem] md:left-[10%] md:bottom-[35%] xl:bottom-[16.8rem] xl:left-[27.8rem]",
                                onClick: () => P("card-2"),
                                children: (0, n.jsx)(x, {
                                  ref: (e) => (w.current[1] = e),
                                  title: t.primary.card_2_title,
                                }),
                              }),
                              (0, n.jsx)("div", {
                                ref: (e) => (j.current[2] = e),
                                className:
                                  "absolute top-[30.1rem] md:top-[60%] xl:top-[39.2rem] right-[10.2rem] md:right-[15%] xl:right-[49.1rem]",
                                onClick: () => P("card-3"),
                                children: (0, n.jsx)(x, {
                                  ref: (e) => (w.current[2] = e),
                                  title: t.primary.card_3_title,
                                }),
                              }),
                              (0, n.jsx)("div", {
                                ref: (e) => (j.current[3] = e),
                                className:
                                  "absolute top-[20rem] left-[2rem] md:top-[45%] md:left-[10%] xl:bottom-[25.8rem] xl:top-[initial] xl:left-[54.9rem]",
                                onClick: () => P("card-4"),
                                children: (0, n.jsx)(x, {
                                  ref: (e) => (w.current[3] = e),
                                  title: t.primary.card_4_title,
                                }),
                              }),
                              (0, n.jsx)("div", {
                                ref: (e) => (j.current[4] = e),
                                className:
                                  "absolute top-[30.3rem] right-[3rem] md:top-[40%] md:right-[28%] xl:top-[40rem] xl:right-[22.6rem]",
                                onClick: () => P("card-5"),
                                children: (0, n.jsx)(x, {
                                  ref: (e) => (w.current[4] = e),
                                  title: t.primary.card_5_title,
                                }),
                              }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
                !R &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(g, {
                        name: "card-1",
                        title: t.primary.card_1_popup_title,
                        image: t.primary.card_1_image,
                        subtitle: t.primary.card_1_subtitle,
                        content: t.primary.card_1_content,
                      }),
                      (0, n.jsx)(g, {
                        name: "card-2",
                        title: t.primary.card_2_popup_title,
                        image: t.primary.card_2_image,
                        subtitle: t.primary.card_2_subtitle,
                        content: t.primary.card_2_content,
                      }),
                      (0, n.jsx)(g, {
                        name: "card-3",
                        title: t.primary.card_3_popup_title,
                        image: t.primary.card_3_image,
                        subtitle: t.primary.card_3_subtitle,
                        content: t.primary.card_3_content,
                      }),
                      (0, n.jsx)(g, {
                        name: "card-4",
                        title: t.primary.card_4_popup_title,
                        image: t.primary.card_4_image,
                        subtitle: t.primary.card_4_subtitle,
                        content: t.primary.card_4_content,
                      }),
                      (0, n.jsx)(g, {
                        name: "card-5",
                        title: t.primary.card_5_popup_title,
                        image: t.primary.card_5_image,
                        subtitle: t.primary.card_5_subtitle,
                        content: t.primary.card_5_content,
                      }),
                    ],
                  }),
              ],
            })
          );
        },
        x = (0, l.forwardRef)((e, t) => {
          let { title: i } = e,
            a = (0, l.useRef)(null),
            [s, c] = (0, l.useState)(null);
          return (
            (0, l.useImperativeHandle)(t, () => ({ title: s })),
            (0, l.useEffect)(() => {
              let e = r(8041);
              c(new e({ target: a.current }));
            }, []),
            (0, n.jsxs)("div", {
              ref: t,
              className:
                "flex justify-center items-center bg-white rounded-12 p-[2.4rem] uppercase font-body-mono text-10 leading-[180%] tracking-[0.05rem] text-orange cursor-pointer transition-transform duration-global ease-out xl:hover:scale-[1.05]",
              children: [
                (0, n.jsx)("span", {
                  className: "inline-block mr-[0.7rem]",
                  children: (0, n.jsx)(o.Z, {}),
                }),
                (0, n.jsx)("span", {
                  ref: a,
                  className: "whitespace-nowrap",
                  children: i,
                }),
              ],
            })
          );
        }),
        g = (e) => {
          let { name: t, title: r, image: l, subtitle: i, content: a } = e;
          return (0, n.jsx)(m.Z, {
            name: t,
            children: (0, n.jsx)("div", {
              className:
                "relative h-[calc(100vh_-_1.2rem)] md:h-[calc(100vh_-_2rem)] overflow-y-scroll rounded-18 u-nsb",
              "data-lenis-prevent": !0,
              children: (0, n.jsxs)("div", {
                className: "relative",
                children: [
                  (0, n.jsx)("div", {
                    className: "relative w-full px-[0.2rem] pt-[0.2rem]",
                    children: (0, n.jsx)("div", {
                      className:
                        "relative w-full h-0 pt-[73.53%] md:pt-[67.28%]",
                      children: (0, n.jsx)("div", {
                        className:
                          "absolute top-0 left-0 w-full h-full rounded-16 overflow-hidden",
                        children:
                          l.url &&
                          (0, n.jsx)(p.Z, {
                            field: l,
                            fallbackAlt: "",
                            className: "w-full h-full object-cover",
                          }),
                      }),
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className: "flex flex-col px-[1.4rem] md:px-20 pb-[5rem]",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "font-headings text-dark_grey text-32 leading-[3rem] -tracking-[0.128rem] md:text-44 md:leading-[86%] md:-tracking-[0.176rem] text-center px-[3.3rem] py-[6.7rem] md:py-[8rem]",
                        children: r,
                      }),
                      (0, n.jsx)(u.Z, { mode: "dark" }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-row pt-[2rem] md:pt-[3.5rem] text-dark_grey text-13 md:text-14 leading-[2rem] tracking-[0.013rem] md:tracking-[0.014rem]",
                        children: [
                          (0, n.jsx)("div", {
                            className: "w-[35%] md:w-1/2 pr-[2rem]",
                            children: i,
                          }),
                          (0, n.jsx)("div", {
                            className: "w-[65%] md:w-1/2",
                            children: a && (0, n.jsx)(d.v, { field: a }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        };
      (x.displayName = "Card"),
        (g.displayName = "CardPopup"),
        (f.displayName = "FocusPoints"),
        (t.default = f);
    },
  },
]);
