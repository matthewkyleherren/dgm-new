"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [966],
  {
    187: function (e, t, r) {
      r.d(t, {
        v: function () {
          return F;
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
        o = {
          [i.listItem]: "listItem",
          [i.oListItem]: "oListItem",
          [i.list]: "list",
          [i.oList]: "oList",
        },
        a = (e) => (t, r, n, l, i) => {
          let a = e[o[t] || t];
          if (a) return a({ type: t, node: r, text: n, children: l, key: i });
        };
      var c = r(7294);
      let s = () => (++s.i).toString();
      s.i = 0;
      let u = (e) => {
          let t = g(e),
            r = [];
          for (let e = 0; e < t.length; e++) r.push(m(t[e]));
          return { key: s(), children: r };
        },
        d = (e, t = []) => ({
          key: s(),
          type: e.type,
          text: "text" in e ? e.text : void 0,
          node: e,
          children: t,
        }),
        p = (e) => d({ type: i.span, text: e, spans: [] }),
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
          if ("text" in e) return d(e, f(e.spans, e));
          if ("items" in e) {
            let t = [];
            for (let r = 0; r < e.items.length; r++) t.push(m(e.items[r]));
            return d(e, t);
          }
          return d(e);
        },
        f = (e, t, r) => {
          if (!e.length) return [p(t.text)];
          let n = e.slice(0);
          n.sort((e, t) => e.start - t.start || t.end - e.end);
          let l = [];
          for (let e = 0; e < n.length; e++) {
            let i = n[e],
              o = (r && r.start) || 0,
              a = i.start - o,
              c = i.end - o,
              s = t.text.slice(a, c),
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
            0 === e && a > 0 && l.push(p(t.text.slice(0, a)));
            let g = { ...i, text: s };
            l.push(d(g, f(u, { ...t, text: s }, i))),
              c < t.text.length &&
                l.push(
                  p(t.text.slice(c, n[e + 1] ? n[e + 1].start - o : void 0)),
                );
          }
          return l;
        },
        h = (e, t) => y(u(e).children, t),
        y = (e, t) => {
          let r = [];
          for (let n = 0; n < e.length; n++) {
            let l = e[n],
              i = t(l.type, l.node, l.text, y(l.children, t), l.key);
            null != i && r.push(i);
          }
          return r;
        },
        x = (e) => {
          let t = /^(\/(?!\/)|#)/.test(e),
            r = !t && !/^https?:\/\//.test(e);
          return t && !r;
        },
        k = { Any: "Any", Document: "Document", Media: "Media", Web: "Web" },
        b = (e) => {
          var t;
          return {
            link_type: k.Document,
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
          let n = "link_type" in e ? e : b(e),
            [l] = t;
          switch (
            ((r =
              "function" == typeof l || null == l
                ? { linkResolver: l }
                : { ...l }),
            n.link_type)
          ) {
            case k.Media:
            case k.Web:
              return "url" in n ? n.url : null;
            case k.Document:
              if ("id" in n && r.linkResolver) {
                let e = r.linkResolver(n);
                if (null != e) return e;
              }
              if ("url" in n && n.url) return n.url;
              return null;
            case k.Any:
            default:
              return null;
          }
        },
        C = (e) => null != e,
        j = (e) =>
          !!C(e) &&
          (1 === e.length && "text" in e[0] ? !!e[0].text : !!e.length),
        _ = (e) => C(e) && ("id" in e || "url" in e),
        R = (e, t = {}) => {
          if (e && ("link_type" in e ? _(e) : e)) {
            let r = "target" in e ? e.target : void 0,
              n = v(e, t.linkResolver),
              l = null == n ? void 0 : n,
              i = "string" == typeof l && !x(l),
              o = t.rel
                ? t.rel({ href: l, isExternal: i, target: r })
                : i
                  ? "noreferrer"
                  : void 0;
            return { href: l, target: r, rel: null == o ? void 0 : o };
          }
          return {};
        },
        L = (e) => {
          let t = /^(\/(?!\/)|#)/.test(e),
            r = !t && !/^https?:\/\//.test(e);
          return t && !r;
        };
      r(3454);
      let w = c.forwardRef(function (
        {
          field: e,
          document: t,
          linkResolver: r,
          internalComponent: l,
          externalComponent: i,
          ...o
        },
        a,
      ) {
        let {
            href: c,
            rel: s,
            ...u
          } = R(e ?? t, {
            linkResolver: r,
            rel: "function" == typeof o.rel ? o.rel : void 0,
          }),
          d = s;
        "rel" in o && "function" != typeof o.rel && (d = o.rel);
        let p = ("href" in o ? o.href : c) || "",
          g = p && L(p) ? l || "a" : i || "a";
        return (0, n.jsx)(g, { ref: a, ...u, ...o, href: p, rel: d });
      });
      r(3454);
      let S = (e) =>
        a({
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
                  ? (0, n.jsx)(w, {
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
              w,
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
                r.push((0, n.jsx)(c.Fragment, { children: t }, `${l}__line`)),
                l++;
            return (0, n.jsx)(c.Fragment, { children: r }, t);
          },
        });
      function E({
        linkResolver: e,
        field: t,
        fallback: r,
        components: i,
        externalLinkComponent: o,
        internalLinkComponent: s,
        ...u
      }) {
        return c.useMemo(() => {
          if (!j(t))
            return null != r ? (0, n.jsx)(n.Fragment, { children: r }) : null;
          {
            let r = l(
                "object" == typeof i ? a(i) : i,
                S({
                  linkResolver: e,
                  internalLinkComponent: s,
                  externalLinkComponent: o,
                }),
              ),
              u = h(t, (e, t, n, l, i) => {
                let o = r(e, t, n, l, i);
                return c.isValidElement(o) && null == o.key
                  ? c.cloneElement(o, { key: i })
                  : o;
              });
            return (0, n.jsx)(n.Fragment, { children: u });
          }
        }, [t, s, o, i, e, r]);
      }
      let I = c.createContext({}),
        B = () => c.useContext(I) || {},
        F = function ({ components: e, ...t }) {
          let r = B(),
            i = l(
              "object" == typeof e ? a(e) : e,
              "object" == typeof r.richTextComponents
                ? a(r.richTextComponents)
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
    640: function (e, t, r) {
      var n = r(5893),
        l = r(7294),
        i = r(4179),
        o = r(6038);
      let a = (0, l.forwardRef)((e, t) => {
        let { children: a, href: c, target: s, mode: u = "white", ...d } = e,
          p = (0, l.useRef)(null),
          g = (0, l.useRef)(null),
          m = (0, l.useRef)(null);
        (0, l.useImperativeHandle)(t, () => ({ getChars: f, getAnimation: h }));
        let f = () => g.current,
          h = () => y(),
          y = () => ((m.current = o.p8.effects.blink(g.current)), m.current),
          x = () => {
            y();
          };
        return (
          (0, l.useEffect)(
            () => (
              p.current.addEventListener("mouseenter", x),
              () => {
                p.current && p.current.removeEventListener("mouseenter", x);
              }
            ),
            [],
          ),
          (0, l.useEffect)(() => {
            let e = r(8041);
            g.current = new e({ target: p.current, by: "chars" })[0].chars;
          }, []),
          (0, n.jsx)("div", {
            ref: p,
            children: (0, n.jsx)(i.Z, {
              href: c,
              target: s,
              className:
                "button-" +
                u +
                " inline-block py-[2.4rem] px-[2.5rem] rounded-[1rem] text-10 leading-[180%] tracking-[0.05rem] uppercase xl:transition-transform xl:duration-global xl:ease-out xl:hover:scale-[1.04]",
              ...d,
              children: a,
            }),
          })
        );
      });
      (a.displayName = "Button"), (t.Z = a);
    },
    6892: function (e, t, r) {
      var n = r(5893),
        l = r(7294),
        i = r(6546),
        o = r(8266),
        a = r(2099);
      t.Z = (e) => {
        let { children: t, sticky: r = !1, zIndex: c = 0 } = e,
          s = (0, l.useRef)(null),
          u = (0, l.useRef)(null),
          d = (0, o.o)((e) => e.headerLoaded),
          p = (0, o.o)((e) => e.setHeaderDark);
        return (
          (0, l.useEffect)(() => {
            if (!d) return;
            let e = document.querySelector(".header");
            return (
              r
                ? (u.current = i.ScrollTrigger.create({
                    trigger: s.current,
                    start: () =>
                      "top+="
                        .concat(window.innerHeight, " top+=")
                        .concat(e.getBoundingClientRect().bottom),
                    end: () =>
                      "bottom-="
                        .concat((0, a.z6)(10), " top+=")
                        .concat(e.getBoundingClientRect().bottom),
                    onEnter: () => {
                      p(!0);
                    },
                    onLeave: () => {
                      p(!1);
                    },
                    onEnterBack: () => {
                      p(!0);
                    },
                    onLeaveBack: () => {
                      p(!1);
                    },
                  }))
                : (u.current = i.ScrollTrigger.create({
                    trigger: s.current,
                    start: () =>
                      "top top+=".concat(e.getBoundingClientRect().bottom),
                    end: () =>
                      "bottom top+=".concat(e.getBoundingClientRect().bottom),
                    onEnter: () => {
                      p(!0);
                    },
                    onLeave: () => {
                      p(!1);
                    },
                    onEnterBack: () => {
                      p(!0);
                    },
                    onLeaveBack: () => {
                      p(!1);
                    },
                  })),
              () => {
                u.current && (u.current.kill(), (u.current = null)), p(!1);
              }
            );
          }, [d]),
          (0, n.jsx)("div", {
            ref: s,
            style: { zIndex: c },
            className: "relative w-full",
            children: t,
          })
        );
      };
    },
    6966: function (e, t, r) {
      r.r(t);
      var n = r(5893),
        l = r(7294),
        i = r(6546),
        o = r(6038),
        a = r(187),
        c = r(352),
        s = r(640),
        u = r(2099),
        d = r(6892),
        p = r(9362);
      let g = (e) => {
        let { isWhite: t, children: r, zIndex: l } = e;
        return t ? (0, n.jsx)(d.Z, { zIndex: l, children: r }) : r;
      };
      t.default = (e) => {
        let { slice: t, slices: r, index: d } = e,
          f = (0, l.useRef)(null),
          h = (0, l.useRef)(null),
          y = (0, l.useRef)(!1),
          x = (0, l.useRef)(null),
          k = (0, l.useRef)(null),
          b = (0, p.a)(),
          v = (0, l.useMemo)(
            () =>
              (0, n.jsx)(m, {
                ref: y,
                firstContent: t.primary.content,
                secondContent:
                  !!t.primary.second_content && t.primary.second_content,
              }),
            [],
          ),
          C = () => {
            b
              ? (o.p8.set(h.current, { y: 0 }), x.current.disable(), j())
              : (_(), x.current.enable());
          },
          j = () => {
            if (
              (k.current && (k.current.kill(), (k.current = null)),
              o.p8.set(y.current.getFirstContent(), { opacity: 1 }),
              y.current.getSecondContent())
            ) {
              let e = o.p8.timeline({
                defaults: { duration: 0.4, ease: "power2.out" },
                paused: !0,
              });
              e.to(y.current.getFirstContent(), { opacity: 0 }, 0).to(
                y.current.getSecondContent(),
                { opacity: 1 },
                0.3,
              );
              let t = o.p8.timeline({
                defaults: { duration: 0.4, ease: "power2.out" },
                paused: !0,
              });
              t
                .to(y.current.getSecondContent(), { opacity: 0 }, 0)
                .to(y.current.getFirstContent(), { opacity: 1 }, 0.3),
                o.p8.set(y.current.getSecondContent(), { opacity: 0 }),
                (k.current = i.ScrollTrigger.create({
                  trigger: y.current.textRef.current,
                  start: "top bottom-=55%",
                  onEnter: () => {
                    (0, u.RE)(t), e.restart();
                  },
                  onLeaveBack: () => {
                    (0, u.RE)(e), t.restart();
                  },
                }));
            }
          },
          _ = () => {
            k.current && (k.current.kill(), (k.current = null)),
              o.p8.set(y.current.getFirstContent(), { opacity: 0.4 }),
              y.current.getSecondContent() &&
                o.p8.set(y.current.getSecondContent(), { opacity: 0 });
            let e = o.p8.timeline();
            e.to(
              y.current.getFirstContent(),
              {
                opacity: 1,
                stagger: y.current.getSecondContent()
                  ? 0.1 *
                    Math.min(
                      1,
                      y.current.getSecondContent().length /
                        y.current.getFirstContent().length,
                    )
                  : 0.1,
              },
              0,
            ),
              y.current.getSecondContent() &&
                e
                  .to(y.current.getFirstContent(), {
                    opacity: 0,
                    stagger: y.current.getSecondContent()
                      ? 0.1 *
                        Math.min(
                          1,
                          y.current.getSecondContent().length /
                            y.current.getFirstContent().length,
                        )
                      : 0.1,
                  })
                  .to(
                    y.current.getSecondContent(),
                    { opacity: 1, stagger: 0.1 },
                    "<".concat(
                      15 *
                        (2 *
                          Math.max(
                            1,
                            y.current.getFirstContent().length /
                              y.current.getSecondContent().length,
                          )),
                      "%",
                    ),
                  ),
              (k.current = i.ScrollTrigger.create({
                trigger: y.current.textRef.current,
                start: "top bottom-=10%",
                end: y.current.getSecondContent() ? "top -3%" : "top 35%",
                animation: e,
                invalidateOnRefresh: !0,
                scrub: !0,
              }));
          };
        return (
          (0, l.useEffect)(() => {
            b
              ? (o.p8.set(h.current, { y: 0 }), x.current.disable(), j())
              : !1 === b && (_(), x.current.enable());
          }, [b]),
          (0, l.useEffect)(() => {
            let e = o.p8.fromTo(
              h.current,
              { y: "-15rem" },
              { y: 0, ease: "none" },
            );
            return (
              (x.current = i.ScrollTrigger.create({
                trigger: f.current,
                start: "top bottom",
                end: "top 20%",
                animation: e,
                scrub: !0,
              })),
              C(),
              () => {
                k.current && (k.current.kill(), (k.current = null));
              }
            );
          }, []),
          (0, l.useEffect)(() => {
            C();
          }, [b]),
          (0, n.jsx)(g, {
            zIndex: r.length - d,
            isWhite: "White" === t.primary.background_color,
            children: (0, n.jsx)("section", {
              "data-anchor":
                t.primary.add_anchor && (0, u.lV)(t.primary.anchor_name),
              "data-slice-type": t.slice_type,
              "data-slice-variation": t.variation,
              ref: f,
              style: { zIndex: r.length - d },
              className:
                "simple-content relative px-container grid grid-cols-6 lg:grid-cols-12 first-letter\n          "
                  .concat(
                    "default" !== t.variation || t.primary.small_spacings
                      ? ""
                      : "py-[17rem] lg:py-[32.9rem]",
                    "\n          ",
                  )
                  .concat(
                    "default" === t.variation && t.primary.small_spacings
                      ? "pt-[17rem] pb-[11rem] lg:pt-[22rem] lg:pb-[15rem]"
                      : "",
                    "\n          ",
                  )
                  .concat(
                    "simpleContentTwoTexts" === t.variation
                      ? "py-[18.2rem] lg:py-[35.5rem]"
                      : "",
                    "\n          ",
                  )
                  .concat(
                    "simpleContentButton" === t.variation
                      ? "py-[14.2rem] lg:py-[19.8rem]"
                      : "",
                    "\n          ",
                  )
                  .concat(
                    "simpleContentParagraph" === t.variation
                      ? "py-[15rem] lg:py-[29.8rem]"
                      : "",
                    "\n          ",
                  )
                  .concat(
                    "White" === t.primary.background_color
                      ? "bg-white"
                      : "Beige light" === t.primary.background_color
                        ? "bg-light_beige"
                        : "Beige dark" === t.primary.background_color
                          ? "bg-dark_beige"
                          : "Grey dark" === t.primary.background_color
                            ? "bg-dark_grey"
                            : "bg-green",
                    " \n          ",
                  )
                  .concat(
                    "White" === t.primary.background_color ||
                      ("Beige light" === t.primary.background_color &&
                        (t.primary.paragraph || !t.primary.second_content))
                      ? "text-dark_grey"
                      : "Beige light" === t.primary.background_color
                        ? "text-dark_beige"
                        : "text-light_beige",
                    "\n          ",
                  ),
              children: (0, n.jsxs)("div", {
                ref: h,
                className: "col-span-full ".concat(
                  "left" !== t.primary.text_alignment &&
                    t.primary.text_alignment
                    ? "md:col-start-2 md:col-end-6 lg:col-start-3 lg:col-end-11 text-center"
                    : t.primary.link_title
                      ? "col-span-full flex flex-col justify-center items-center text-center"
                      : "md:col-span-4 lg:col-start-2 lg:col-end-9",
                ),
                children: [
                  (0, n.jsx)("div", {
                    className: "relative heading-36 md:heading-60 ".concat(
                      t.primary.link_title ? "w-[89%] md:w-[37.5%]" : "",
                    ),
                    children: v,
                  }),
                  (t.primary.paragraph || t.primary.add_separator) &&
                    (0, n.jsx)("div", {
                      className: "w-[20rem] mt-[4rem] ".concat(
                        "center" === t.primary.text_alignment && "mx-auto",
                      ),
                      children: (0, n.jsx)(c.Z, {
                        mode:
                          ["White", "Beige light"].indexOf(
                            t.primary.background_color,
                          ) > -1
                            ? "dark"
                            : "light",
                      }),
                    }),
                  t.primary.paragraph &&
                    (0, n.jsx)("div", {
                      className: "w-full text-16 md:w-[83%] lg:w-[43%] ".concat(
                        "center" === t.primary.text_alignment && "mx-auto",
                        " mt-[4rem]",
                      ),
                      children: (0, n.jsx)(a.v, { field: t.primary.paragraph }),
                    }),
                  t.primary.link_title &&
                    (0, n.jsx)("div", {
                      className: "mt-[2.4rem] md:mt-32",
                      children: (0, n.jsx)(s.Z, {
                        href:
                          "preorder" === t.primary.link.type
                            ? "/preorder"
                            : t.primary.link.url,
                        children: t.primary.link_title,
                      }),
                    }),
                ],
              }),
            }),
          })
        );
      };
      let m = (0, l.forwardRef)((e, t) => {
        let { firstContent: i, secondContent: c } = e,
          s = (0, l.useRef)(!1),
          u = (0, l.useRef)(!1),
          d = (0, l.useRef)(!1),
          p = (0, l.useRef)(!1);
        (0, l.useImperativeHandle)(t, () => ({
          textRef: s,
          getFirstContent: g,
          getSecondContent: m,
        }));
        let g = () => d.current,
          m = () => p.current;
        return (
          (0, l.useEffect)(() => {
            let e = r(8041);
            (d.current = new e({ target: s.current })[0].chars),
              o.p8.set(d.current, { opacity: 0.3 }),
              u.current &&
                ((p.current = new e({ target: u.current })[0].chars),
                p.current && o.p8.set(p.current, { opacity: 0 }));
          }, []),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("div", {
                ref: s,
                children: (0, n.jsx)(a.v, { field: i }),
              }),
              c &&
                (0, n.jsx)("div", {
                  ref: u,
                  className: "absolute top-0 left-0 w-full h-full",
                  children: (0, n.jsx)(a.v, { field: c }),
                }),
            ],
          })
        );
      });
    },
  },
]);
