"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [198],
  {
    187: function (e, t, r) {
      r.d(t, {
        v: function () {
          return I;
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
        a = (e) => (t, r, n, l, i) => {
          let a = e[s[t] || t];
          if (a) return a({ type: t, node: r, text: n, children: l, key: i });
        };
      var c = r(7294);
      let o = () => (++o.i).toString();
      o.i = 0;
      let u = (e) => {
          let t = f(e),
            r = [];
          for (let e = 0; e < t.length; e++) r.push(m(t[e]));
          return { key: o(), children: r };
        },
        d = (e, t = []) => ({
          key: o(),
          type: e.type,
          text: "text" in e ? e.text : void 0,
          node: e,
          children: t,
        }),
        p = (e) => d({ type: i.span, text: e, spans: [] }),
        f = (e) => {
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
          if (!e.length) return [p(t.text)];
          let n = e.slice(0);
          n.sort((e, t) => e.start - t.start || t.end - e.end);
          let l = [];
          for (let e = 0; e < n.length; e++) {
            let i = n[e],
              s = (r && r.start) || 0,
              a = i.start - s,
              c = i.end - s,
              o = t.text.slice(a, c),
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
            let f = { ...i, text: o };
            l.push(d(f, h(u, { ...t, text: o }, i))),
              c < t.text.length &&
                l.push(
                  p(t.text.slice(c, n[e + 1] ? n[e + 1].start - s : void 0)),
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
        b = { Any: "Any", Document: "Document", Media: "Media", Web: "Web" },
        w = (e) => {
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
        y = (e, ...t) => {
          let r;
          if (!e) return null;
          let n = "link_type" in e ? e : w(e),
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
        j = (e) => null != e,
        k = (e) =>
          !!j(e) &&
          (1 === e.length && "text" in e[0] ? !!e[0].text : !!e.length),
        _ = (e) => j(e) && ("id" in e || "url" in e),
        R = (e, t = {}) => {
          if (e && ("link_type" in e ? _(e) : e)) {
            let r = "target" in e ? e.target : void 0,
              n = y(e, t.linkResolver),
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
        N = (e) => {
          let t = /^(\/(?!\/)|#)/.test(e),
            r = !t && !/^https?:\/\//.test(e);
          return t && !r;
        };
      r(3454);
      let L = c.forwardRef(function (
        {
          field: e,
          document: t,
          linkResolver: r,
          internalComponent: l,
          externalComponent: i,
          ...s
        },
        a,
      ) {
        let {
            href: c,
            rel: o,
            ...u
          } = R(e ?? t, {
            linkResolver: r,
            rel: "function" == typeof s.rel ? s.rel : void 0,
          }),
          d = o;
        "rel" in s && "function" != typeof s.rel && (d = s.rel);
        let p = ("href" in s ? s.href : c) || "",
          f = p && N(p) ? l || "a" : i || "a";
        return (0, n.jsx)(f, { ref: a, ...u, ...s, href: p, rel: d });
      });
      r(3454);
      let E = (e) =>
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
                  ? (0, n.jsx)(L, {
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
              L,
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
      function C({
        linkResolver: e,
        field: t,
        fallback: r,
        components: i,
        externalLinkComponent: s,
        internalLinkComponent: o,
        ...u
      }) {
        return c.useMemo(() => {
          if (!k(t))
            return null != r ? (0, n.jsx)(n.Fragment, { children: r }) : null;
          {
            let r = l(
                "object" == typeof i ? a(i) : i,
                E({
                  linkResolver: e,
                  internalLinkComponent: o,
                  externalLinkComponent: s,
                }),
              ),
              u = x(t, (e, t, n, l, i) => {
                let s = r(e, t, n, l, i);
                return c.isValidElement(s) && null == s.key
                  ? c.cloneElement(s, { key: i })
                  : s;
              });
            return (0, n.jsx)(n.Fragment, { children: u });
          }
        }, [t, o, s, i, e, r]);
      }
      let T = c.createContext({}),
        A = () => c.useContext(T) || {},
        I = function ({ components: e, ...t }) {
          let r = A(),
            i = l(
              "object" == typeof e ? a(e) : e,
              "object" == typeof r.richTextComponents
                ? a(r.richTextComponents)
                : r.richTextComponents,
            );
          return (0, n.jsx)(C, {
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
        a = r(2099);
      t.Z = (e) => {
        let { children: t, sticky: r = !1, zIndex: c = 0 } = e,
          o = (0, l.useRef)(null),
          u = (0, l.useRef)(null),
          d = (0, s.o)((e) => e.headerLoaded),
          p = (0, s.o)((e) => e.setHeaderDark);
        return (
          (0, l.useEffect)(() => {
            if (!d) return;
            let e = document.querySelector(".header");
            return (
              r
                ? (u.current = i.ScrollTrigger.create({
                    trigger: o.current,
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
                    trigger: o.current,
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
            ref: o,
            style: { zIndex: c },
            className: "relative w-full",
            children: t,
          })
        );
      };
    },
    9293: function (e, t, r) {
      var n = r(5893);
      t.Z = (e) => {
        let { stroke: t = "#575349" } = e;
        return (0, n.jsx)("svg", {
          width: "11",
          height: "9",
          viewBox: "0 0 11 9",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, n.jsx)("path", {
            id: "Vector 201",
            d: "M0 4.5H9.5M9.5 4.5L5.9 1M9.5 4.5L5.9 8",
            stroke: t,
          }),
        });
      };
    },
    3198: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return k;
          },
        });
      var n = r(5893),
        l = r(9362),
        i = r(7294),
        s = r(6546),
        a = r(6038),
        c = r(1831),
        o = r(187);
      let u = (0, i.forwardRef)((e, t) => {
          let { sectionTitle: r, contentText: l } = e,
            s = (0, i.useRef)(!1),
            o = (0, i.useRef)(!1),
            u = (0, i.useRef)(!1),
            p = (0, i.useRef)(!1),
            f = (0, i.useRef)(!1),
            m = (0, i.useMemo)(() => (0, n.jsx)(d, { ref: f, field: l }), []);
          (0, i.useImperativeHandle)(t, () => ({
            killAnimations: h,
            show: x,
            hide: g,
          }));
          let h = (e) => {
              let { enter: t } = e;
              t
                ? u.current &&
                  u.current.isActive() &&
                  (u.current.kill(), (u.current = null))
                : p.current &&
                  p.current.isActive() &&
                  (p.current.kill(), (p.current = null));
            },
            x = () => {
              (u.current = a.p8.timeline()),
                u.current.to(
                  [f.current.getSplittedText(), o.current, s.current],
                  {
                    autoAlpha: 1,
                    delay: 0.35,
                    stagger: 0.01,
                    duration: 0.4,
                    ease: "power2.inOut",
                  },
                );
            },
            g = () => {
              (p.current = a.p8.timeline()),
                p.current.to(
                  [f.current.getSplittedText(), o.current, s.current],
                  {
                    autoAlpha: 0,
                    stagger: 0.01,
                    duration: 0.4,
                    ease: "power2.inOut",
                  },
                );
            };
          return (0, n.jsxs)("div", {
            ref: t,
            className: "flex flex-col h-full absolute left-0 top-0 w-full",
            children: [
              (0, n.jsx)("div", {
                ref: s,
                className:
                  "w-[80%] mx-auto opacity-0 invisible h-[45%] mt-[3rem] flex items-center justify-center text-44 leading-[86%] text-dark_grey text-center font-headings -tracking-[0.176rem]",
                children: r,
              }),
              (0, n.jsx)("div", {
                ref: o,
                className:
                  "opacity-0 relative invisible w-full h-px bg-dark_grey/10 mb-[3.2rem]",
                children: (0, n.jsx)("div", {
                  className:
                    "absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 svg-wrapper w-[0.7rem] h-[0.7rem]",
                  children: (0, n.jsx)(c.Z, {}),
                }),
              }),
              m,
            ],
          });
        }),
        d = (0, i.forwardRef)((e, t) => {
          let { field: l } = e,
            s = (0, i.useRef)(!1),
            c = (0, i.useRef)(!1);
          (0, i.useImperativeHandle)(t, () => ({ getSplittedText: u }));
          let u = () => s.current;
          return (
            (0, i.useEffect)(() => {
              let e = r(8041);
              (s.current = new e({ target: c.current, by: "words" })[0].words),
                s.current.reverse(),
                a.p8.set(s.current, { autoAlpha: 0 });
            }, []),
            (0, n.jsx)("div", {
              ref: c,
              className: "flex-1 flex justify-between text-14 text-dark_grey",
              children: (0, n.jsx)("div", {
                className: "w-[65%] 2xl:w-[55%] text-center mx-auto",
                children: (0, n.jsx)(o.v, { field: l }),
              }),
            })
          );
        }),
        p = (0, i.forwardRef)((e, t) => {
          let { index: r, text: l } = e,
            s = (0, i.useRef)(!1);
          (0, i.useImperativeHandle)(t, () => ({
            showActive: c,
            hideActive: o,
          })),
            (0, i.useEffect)(() => {
              a.p8.set(s.current, { xPercent: -100 }),
                a.p8.set(s.current.children[0], { xPercent: 100 });
            });
          let c = () => {
              a.p8.to(s.current, {
                xPercent: 0,
                duration: 1,
                ease: "power2.inOut",
              }),
                a.p8.to(s.current.children[0], {
                  xPercent: 0,
                  duration: 1,
                  ease: "power2.inOut",
                });
            },
            o = (e) => {
              let { from: t = "left" } = e;
              "left" === t
                ? (a.p8.to(s.current, {
                    xPercent: -100,
                    duration: 1,
                    ease: "power2.inOut",
                  }),
                  a.p8.to(s.current.children[0], {
                    xPercent: 100,
                    duration: 1,
                    ease: "power2.inOut",
                  }))
                : (a.p8.to(s.current, {
                    xPercent: 100,
                    duration: 1,
                    ease: "power2.inOut",
                  }),
                  a.p8.to(s.current.children[0], {
                    xPercent: -100,
                    duration: 1,
                    ease: "power2.inOut",
                  }));
            };
          return (0, n.jsxs)("div", {
            ref: t,
            className: "relative font-body-mono text-10 whitespace-nowrap",
            children: [
              (0, n.jsxs)("div", {
                className: "text-dark_beige",
                children: [r + 1, ".", l],
              }),
              (0, n.jsx)("div", {
                ref: s,
                className: "overflow-hidden absolute left-0 top-0",
                children: (0, n.jsxs)("div", {
                  className: "text-dark_grey",
                  children: [r + 1, ".", l],
                }),
              }),
            ],
          });
        });
      var f = r(8266),
        m = r(3470),
        h = r(9293);
      let x = (0, i.forwardRef)((e, t) => {
          let { items: r, defaultIndex: l = 0 } = e,
            [s, c] = (0, i.useState)(r[l]),
            o = (0, f.o)((e) => e.windowWidth),
            u = (0, i.useRef)(!1),
            d = (0, i.useRef)(!1);
          (0, i.useImperativeHandle)(t, () => ({ updateLink: p })),
            (0, i.useEffect)(() => {
              s &&
                a.ZP.to([d.current, u.current], {
                  alpha: 1,
                  duration: 0.3,
                  ease: "linear",
                });
            }, [s]),
            (0, i.useEffect)(() => {
              x();
            }, [o]);
          let p = (e) => {
              let t = !1;
              if (!r[e].button_link.url || !r[e].button_text) {
                a.ZP.to(d.current, {
                  alpha: 0,
                  duration: 0.3,
                  ease: "linear",
                  onComplete: () => c(null),
                });
                return;
              }
              s
                ? (s.button_link.url !== r[e].button_link.url && (t = !0),
                  s.button_text !== r[e].button_text && (t = !0))
                : (t = !0),
                t &&
                  (u.current
                    ? a.ZP.to(u.current, {
                        alpha: 0,
                        duration: 0.3,
                        ease: "linear",
                        onComplete: () => c(r[e]),
                      })
                    : c(r[e]));
            },
            x = () => {
              u.current &&
                ((d.current.style.height = "auto"),
                (d.current.style.height = "".concat(
                  u.current.offsetHeight,
                  "px",
                )));
            };
          return (0, n.jsx)("div", {
            ref: d,
            children:
              s &&
              (0, n.jsx)("div", {
                className:
                  "block w-full text-center bg-white xl:bg-light_beige landscape:bg-light_beige xl:transition-bg xl:duration-global xl:ease-out xl:hover:bg-dark_beige/50 text-dark_grey rounded-[0.8rem] xl:rounded-10 text-10 tracking-[0.05rem] leading-[180%] md:text-12 md:tracking-[0.036rem] md:leading-[200%] font-body-mono uppercase",
                children: (0, n.jsxs)(m.f, {
                  className:
                    "flex justify-center items-center w-full py-[1.7rem] xl:py-[2.1rem]",
                  ref: u,
                  field: s.button_link,
                  children: [
                    (0, n.jsx)("span", { children: s.button_text }),
                    (0, n.jsx)("span", {
                      className:
                        "svg-wrapper w-[0.95rem] h-[0.84rem] ml-[1.75rem] md:ml-[0.85rem]",
                      children: (0, n.jsx)(h.Z, {}),
                    }),
                  ],
                }),
              }),
          });
        }),
        g = (0, i.forwardRef)((e, t) => {
          let { items: r, lastAnchorText: l } = e,
            [s, o] = (0, i.useState)(!1),
            u = (0, i.useRef)(!1),
            d = (0, i.useRef)([]),
            m = (0, i.useRef)(!1),
            h = (0, i.useRef)(!1),
            g = (0, i.useRef)(!1),
            v = (0, f.o)((e) => e.windowWidth);
          (0, i.useImperativeHandle)(t, () => ({
            anchors: d,
            moveAnchorTimeline: y,
            updateLink: w,
          })),
            (0, i.useEffect)(() => {
              document.fonts.ready.then(() => {
                o(!0);
              });
            }, []),
            (0, i.useEffect)(() => {
              b();
            }, [s, v]);
          let b = () => {
              let e = m.current.getBoundingClientRect(),
                t = h.current.getBoundingClientRect(),
                n = t.width - e.width;
              g.current = n / (r.length - 1);
            },
            w = (e) => {
              u.current.updateLink(e);
            },
            y = (e) => {
              a.p8.to(h.current, {
                x: -g.current * e,
                duration: 1,
                ease: "power2.inOut",
              });
            };
          return (0, n.jsxs)("div", {
            ref: t,
            className: "mt-auto w-full relative",
            style: { height: "".concat(150, "px") },
            children: [
              (0, n.jsx)("div", {
                ref: m,
                className: "w-full overflow-hidden h-1/2",
                children: (0, n.jsxs)("div", {
                  ref: h,
                  className:
                    "inline-flex items-center h-full gap-x-15 flex-nowrap uppercase px-10",
                  children: [
                    r.map((e, t) =>
                      (0, n.jsx)(
                        p,
                        {
                          ref: (e) => (d.current[t] = e),
                          index: t,
                          text: e.anchor_text,
                        },
                        "stickyslider-anchor-".concat(t),
                      ),
                    ),
                    (0, n.jsx)(p, {
                      ref: (e) => (d.current[r.length] = e),
                      index: r.length,
                      text: l,
                    }),
                  ],
                }),
              }),
              (0, n.jsxs)("div", {
                className: " h-1/2 flex flex-end relative",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "absolute left-px top-px -translate-x-[54%] -translate-y-[53%] w-[0.7rem] h-[0.9rem] svg-wrapper",
                    children: (0, n.jsx)(c.Z, {}),
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "w-full pt-[0.8rem] px-[0.8rem] border-t-px border-dark_grey/20",
                    children: (0, n.jsx)(x, { ref: u, items: r }),
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "absolute right-px top-px translate-x-[54%] -translate-y-[53%] w-[0.7rem] h-[0.9rem] svg-wrapper",
                    children: (0, n.jsx)(c.Z, {}),
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className:
                  "absolute left-0 top-0 w-px h-full bg-dark_grey opacity-20",
              }),
              (0, n.jsx)("div", {
                className:
                  "absolute right-0 top-0 w-px h-full bg-dark_grey opacity-20",
              }),
            ],
          });
        });
      var v = r(6494),
        b = r(2099),
        w = (e) => {
          let { slice: t } = e,
            r = "stickySliderWithAnchors" === t.variation,
            l = (0, i.useRef)(),
            c = (0, i.useRef)([]),
            o = (0, i.useRef)([]),
            d = (0, i.useRef)([]),
            p = (0, i.useRef)(!1),
            f = (0, i.useRef)(!1),
            m = (0, i.useRef)(!1),
            h = (0, i.useRef)(0),
            w = (0, i.useRef)([]),
            y = (0, i.useRef)([]),
            j = (0, i.useRef)([]),
            k = (0, i.useRef)([]),
            _ = (0, i.useRef)([]),
            R = (0, i.useRef)(null),
            N = () => {
              for (let e = 0; e < y.current.length; e++)
                y.current[e] &&
                  ((y.current[e].src = y.current[e].dataset.src),
                  y.current[e].load(),
                  y.current[e].addEventListener(
                    "play",
                    () => {
                      w.current[e].classList.add("opacity-0");
                    },
                    { once: !0 },
                  ));
            };
          (0, i.useEffect)(
            () => (
              T(),
              N(),
              window.addEventListener("scroll", L),
              () => {
                window.removeEventListener("scroll", L),
                  k.current && (k.current.kill(), (k.current = null)),
                  j.current.forEach((e) => {
                    e.kill(), (e = null);
                  });
              }
            ),
            [],
          );
          let L = () => {
              h.current = window.scrollY;
            },
            E = (e) => {
              y.current[e] && !y.current[e].paused && y.current[e].pause();
            },
            C = (e) => {
              y.current[e] && y.current[e].paused && y.current[e].play();
            },
            T = () => {
              c.current.forEach((e, t) => {
                let n = a.p8.timeline();
                n.set(e, { yPercent: 100 }),
                  n.set(e.children[0], { yPercent: -90 }),
                  n.to(e, { yPercent: 0, ease: "none" }),
                  n.to(e.children[0], { yPercent: 0, ease: "none" }, "<"),
                  (j.current[t] = s.ScrollTrigger.create({
                    trigger: e,
                    start: () =>
                      t > 0
                        ? "".concat(t * window.innerHeight, "px bottom")
                        : "0px bottom",
                    end: () => "+=".concat(window.innerHeight),
                    animation: t > 0 ? n : null,
                    scrub: !0,
                    onUpdate: () => {
                      if (!j.current[t]) return;
                      let e = h.current,
                        n = e - f.current,
                        l = n > 0 ? "bottom" : n < 0 ? "top" : null;
                      if (((f.current = e), "bottom" === l)) {
                        if (
                          (j.current[t].progress >= 0.5 &&
                            p.current !== d.current[t] &&
                            (p.current &&
                              t > 0 &&
                              (p.current &&
                                p.current.killAnimations({ enter: !1 }),
                              p.current.hide(),
                              r &&
                                o.current.anchors.current[t - 1].hideActive({
                                  from: "right",
                                })),
                            p.current &&
                              p.current.killAnimations({ enter: !0 }),
                            (p.current = d.current[t]),
                            p.current.show(),
                            r
                              ? (o.current.moveAnchorTimeline(t),
                                o.current.updateLink(t),
                                o.current.anchors.current[t].showActive())
                              : m.current.updateLink(t)),
                          j.current[t].progress >= 0.85)
                        ) {
                          let e = t < j.current.length - 1 && t + 1;
                          e && C(e);
                        }
                        if (
                          (j.current[t].progress >= 0 && C(t),
                          1 === j.current[t].progress)
                        ) {
                          let e = t > 0 && t - 1;
                          e && E(e);
                        }
                      } else if ("top" === l && 0 !== t) {
                        if (
                          (j.current[t].progress < 0.5 &&
                            p.current !== d.current[t - 1] &&
                            (p.current &&
                              (p.current &&
                                p.current.killAnimations({ enter: !1 }),
                              p.current.hide(),
                              r &&
                                o.current.anchors.current[t].hideActive({
                                  from: "left",
                                })),
                            p.current &&
                              p.current.killAnimations({ enter: !0 }),
                            (p.current = d.current[t - 1]),
                            p.current.show(),
                            r
                              ? (o.current.moveAnchorTimeline(t - 1),
                                o.current.updateLink(t - 1),
                                o.current.anchors.current[t - 1].showActive())
                              : m.current.updateLink(t - 1)),
                          j.current[t].progress <= 1)
                        ) {
                          let e = t > 0 && t - 1;
                          e && C(e);
                        }
                        0 === j.current[t].progress && E(t);
                      } else
                        "top" === l &&
                          0 === t &&
                          j.current[t].progress <= 1 &&
                          0 === t &&
                          E(t);
                    },
                  })),
                  t !== c.current.length - 1
                    ? (_.current[t] = s.ScrollTrigger.create({
                        trigger: e,
                        start: () =>
                          t > 0
                            ? "".concat(
                                (t + 1) * window.innerHeight + (0, b.z6)(10),
                                "px bottom",
                              )
                            : "".concat(
                                (t + 2) * window.innerHeight,
                                "px bottom",
                              ),
                        end: () => "+=".concat(window.innerHeight),
                        animation: a.p8.fromTo(
                          e.children[0],
                          { yPercent: 0 },
                          { yPercent: -10, ease: "none" },
                        ),
                        scrub: !0,
                      }))
                    : (R.current = s.ScrollTrigger.create({
                        trigger: e,
                        start: () =>
                          "top+=".concat(
                            (t + 1) * window.innerHeight +
                              0.1 * window.innerHeight +
                              (0, b.z6)(10),
                            "px bottom",
                          ),
                        end: () => "+=".concat(window.innerHeight),
                        animation: a.p8.fromTo(
                          e.children[0],
                          { yPercent: 0 },
                          { yPercent: 10, ease: "none" },
                        ),
                        scrub: !0,
                      })),
                  (k.current = s.ScrollTrigger.create({
                    trigger: l.current,
                    onEnterBack: () => {
                      y.current[y.current.length - 1] &&
                        C(y.current.length - 1);
                    },
                    onLeave: () => {
                      y.current[y.current.length - 1] &&
                        E(y.current.length - 1);
                    },
                  }));
              });
            };
          return (0, n.jsxs)("div", {
            ref: l,
            className: "p-10 flex gap-[0.4rem] sticky top-0 -mt-[100vh]",
            style: { height: "".concat((t.items.length + 1) * 100 + 10, "vh") },
            children: [
              (0, n.jsxs)("div", {
                className:
                  "w-[36.5%] h-[calc(100vh_-_2rem)] sticky top-10 bg-white rounded-18 flex flex-col pb-[3rem] px-[3rem]",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "absolute top-0 right-0 w-full h-full bg-dots bg-size-dots bg-repeat opacity-40 pointer-events-none",
                  }),
                  (0, n.jsx)("div", {
                    className: "h-full relative",
                    children: t.items.map((e, t) =>
                      (0, n.jsx)(
                        u,
                        {
                          ref: (e) => (d.current[t] = e),
                          sectionTitle: e.section_title,
                          contentText: e.content_text,
                        },
                        "stickyslider-slide-".concat(t),
                      ),
                    ),
                  }),
                  r
                    ? (0, n.jsx)(g, {
                        ref: o,
                        items: t.items,
                        lastAnchorText: t.primary.last_anchor_text,
                      })
                    : (0, n.jsx)(x, { ref: m, items: t.items }),
                ],
              }),
              (0, n.jsx)("div", {
                className:
                  "flex-1 h-[calc(100vh_-_2rem)] sticky top-10 rounded-18 overflow-hidden z-1",
                children: t.items.map((e, t) =>
                  (0, n.jsx)(
                    "div",
                    {
                      ref: (e) => (c.current[t] = e),
                      className:
                        "w-full h-full absolute left-0 top-0 overflow-hidden rounded-t-18",
                      style: { zIndex: t + 1 },
                      children: e.video.url
                        ? (0, n.jsxs)("div", {
                            className: "w-full h-full",
                            children: [
                              (0, n.jsx)("div", {
                                ref: (e) => (w.current[t] = e),
                                className:
                                  "absolute left-0 top-0 w-full h-full z-1 transition-opacity duration-global ease-out",
                                children: (0, n.jsx)(v.Z, {
                                  transition: "fast",
                                  field: e.image,
                                  fallbackAlt: "",
                                  fill: !0,
                                  className: "object-cover",
                                  sizes: "(max-width: 768px) 96vw, 63.5vw",
                                }),
                              }),
                              (0, n.jsx)("video", {
                                ref: (e) => (y.current[t] = e),
                                "data-src": e.video.url,
                                type: "video/mp4",
                                muted: !0,
                                loop: !0,
                                playsInline: !0,
                                className: "w-full h-full object-cover",
                              }),
                            ],
                          })
                        : (0, n.jsxs)(n.Fragment, {
                            children: [
                              (y.current[t] = null),
                              (0, n.jsx)(v.Z, {
                                transition: "fast",
                                field: e.image,
                                fallbackAlt: "",
                                fill: !0,
                                className: "object-cover",
                                sizes: "(max-width: 768px) 96vw, 63.5vw",
                              }),
                            ],
                          }),
                    },
                    "stickyslider-image-".concat(t),
                  ),
                ),
              }),
            ],
          });
        },
        y = (e) => {
          let { slice: t, bgColor: r } = e,
            l = (0, i.useRef)(!1),
            a = (0, i.useRef)([]),
            u = (0, i.useRef)([]),
            d = (0, i.useRef)([]),
            p = (0, i.useRef)([]),
            f = (0, i.useRef)(null),
            m = () => {
              for (let e = 0; e < d.current.length; e++)
                d.current[e] &&
                  d.current[e].addEventListener(
                    "play",
                    () => {
                      u.current[e].classList.add("opacity-0");
                    },
                    { once: !0 },
                  );
            };
          (0, i.useEffect)(
            () => (
              b(),
              m(),
              (f.current = s.ScrollTrigger.create({
                trigger: l.current,
                onLeave: () => {
                  g(a.current.length - 1);
                },
                onEnterBack: () => {
                  h(a.current.length - 1);
                },
              })),
              () => {
                f.current.kill(),
                  (f.current = null),
                  p.current.forEach((e) => {
                    e.kill(), (e = null);
                  });
              }
            ),
            [],
          );
          let h = (e) => {
              d.current[e] && d.current[e].play();
            },
            g = (e) => {
              d.current[e] && d.current[e].pause();
            },
            b = () => {
              a.current.forEach((e, t) => {
                t > 0
                  ? (p.current[t] = s.ScrollTrigger.create({
                      trigger: e,
                      start: () => "top bottom-=100%",
                      onEnter: () => {
                        h(t);
                      },
                      onEnterBack: () => {
                        t > 0 && h(t - 1);
                      },
                      onLeave: () => {
                        t > 0 && g(t - 1);
                      },
                      onLeaveBack: () => {
                        g(t);
                      },
                    }))
                  : (p.current[t] = s.ScrollTrigger.create({
                      trigger: e,
                      start: "bottom bottom",
                      onEnter: () => {
                        h(t);
                      },
                      onLeaveBack: () => {
                        g(t);
                      },
                    }));
              });
            };
          return (0, n.jsx)("div", {
            ref: l,
            className:
              "w-full sticky p-half-container-mobile md:p-half-container landscape:p-0 -mt-[100vh]",
            style: {
              height: "calc(".concat((t.items.length + 1) * 100, "vh + 1rem)"),
            },
            children: (0, n.jsx)("div", {
              className:
                "sticky top-half-container-mobile md:top-half-container landscape:top-0 w-full",
              children: t.items.map((e, l) =>
                (0, n.jsxs)(
                  "div",
                  {
                    ref: (e) => (a.current[l] = e),
                    className:
                      "relative landscape:sticky landscape:top-0 landscape:".concat(
                        r,
                        " p-half-container-mobile md:p-half-container w-full h-[calc(100vh_-_1.2rem)] md:h-[calc(100vh_-_2rem)] flex flex-col rounded-15 mb-[1.2rem] landscape:rounded-[0] landscape:mb-10 bg-white landscape:flex-row landscape:gap-x-[0.4rem] landscape:h-screen",
                      ),
                    style: { zIndex: l + 1 },
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "absolute top-0 right-0 w-full h-full bg-dots bg-size-dots bg-repeat opacity-40 pointer-events-none",
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex flex-col items-center gap-[6rem] pb-[6rem] pt-[10.2rem] rounded-10 px-[0.8rem] landscape:w-[36.5%] landscape:pt-[18rem] landscape:gap-0 landscape:pb-[3rem] landscape:px-[3rem] landscape:bg-white",
                        children: [
                          (0, n.jsx)("div", {
                            className:
                              "text-32 text-dark_grey text-center font-headings -tracking-[0.128rem] leading-[93%] landscape:pb-[14.4rem] landscape:text-44 landscape:leading-[86%] landscape:-tracking-[0.176rem]",
                            children: e.section_title,
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "relative w-full h-px bg-dark_grey/10 -mb-[4rem] landscape:mb-[3.2rem]",
                            children: (0, n.jsx)("div", {
                              className:
                                "absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 svg-wrapper w-[0.7rem] h-[0.7rem]",
                              children: (0, n.jsx)(c.Z, {}),
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "px-[4.55rem] text-13 tracking-[0.013rem] leading-[153.8%] text-dark_grey text-center md:w-[60%] md:landscape:w-[80%]",
                            children: (0, n.jsx)(o.v, {
                              field: e.content_text,
                            }),
                          }),
                          e.button_link &&
                            e.button_text &&
                            (0, n.jsx)("div", {
                              className:
                                "w-full relative mt-auto z-1 hidden landscape:block",
                              children: (0, n.jsx)(x, {
                                items: t.items,
                                defaultIndex: l,
                              }),
                            }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex-1 relative w-full h-[100px] landscape:h-full flex flex-col rounded-10 overflow-hidden",
                        children: [
                          e.video && e.video.url
                            ? (0, n.jsxs)(n.Fragment, {
                                children: [
                                  (0, n.jsx)("div", {
                                    ref: (e) => (u.current[l] = e),
                                    className:
                                      "absolute left-0 top-0 w-full h-full z-1 transition-opacity duration-global ease-out",
                                    children: (0, n.jsx)(v.Z, {
                                      field: e.image,
                                      fallbackAlt: "",
                                      className: "w-full h-full object-cover",
                                      sizes: "96vw",
                                    }),
                                  }),
                                  (0, n.jsx)("video", {
                                    ref: (e) => (d.current[l] = e),
                                    preload: "none",
                                    src: e.video.url,
                                    type: "video/mp4",
                                    muted: !0,
                                    loop: !0,
                                    playsInline: !0,
                                    className:
                                      "absolute top-0 left-0 w-full h-full object-cover",
                                  }),
                                ],
                              })
                            : (0, n.jsx)(v.Z, {
                                field: e.image,
                                fallbackAlt: "",
                                className:
                                  "absolute top-0 left-0 w-full h-full object-cover",
                                sizes: "96vw",
                              }),
                          e.button_link &&
                            e.button_text &&
                            (0, n.jsx)("div", {
                              className:
                                "w-full p-[0.8rem] relative mt-auto z-1 landscape:hidden",
                              children: (0, n.jsx)(x, {
                                items: t.items,
                                defaultIndex: l,
                              }),
                            }),
                        ],
                      }),
                    ],
                  },
                  "stickyslider-mobile-item-".concat(l),
                ),
              ),
            }),
          });
        },
        j = r(6892),
        k = (e) => {
          let { slice: t, slices: r, index: i } = e,
            s = (0, l.a)("(max-width: 1200px)", !0),
            a =
              "White" === t.primary.background
                ? "bg-white"
                : "Beige light" === t.primary.background
                  ? "bg-light_beige"
                  : "Beige dark" === t.primary.background
                    ? "bg-dark_beige"
                    : "Grey dark" === t.primary.background
                      ? "bg-dark_grey"
                      : "bg-green";
          return (0, n.jsx)(j.Z, {
            sticky: !0,
            zIndex: r.length - i,
            children: (0, n.jsx)("section", {
              "data-slice-type": t.slice_type,
              "data-slice-variation": t.variation,
              className: "relative ".concat(a, " "),
              children: s
                ? (0, n.jsx)(y, { slice: t, bgColor: a })
                : (0, n.jsx)(w, { slice: t }),
            }),
          });
        };
    },
  },
]);
