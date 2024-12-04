"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [445],
  {
    187: function (e, r, t) {
      t.d(r, {
        v: function () {
          return P;
        },
      });
      var n = t(5893);
      let l =
          (...e) =>
          (...r) => {
            for (let t = 0; t < e.length; t++) {
              let n = e[t];
              if (n) {
                let e = n(...r);
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
        c = (e) => (r, t, n, l, i) => {
          let c = e[a[r] || r];
          if (c) return c({ type: r, node: t, text: n, children: l, key: i });
        };
      var s = t(7294);
      let u = () => (++u.i).toString();
      u.i = 0;
      let o = (e) => {
          let r = m(e),
            t = [];
          for (let e = 0; e < r.length; e++) t.push(p(r[e]));
          return { key: u(), children: t };
        },
        d = (e, r = []) => ({
          key: u(),
          type: e.type,
          text: "text" in e ? e.text : void 0,
          node: e,
          children: r,
        }),
        f = (e) => d({ type: i.span, text: e, spans: [] }),
        m = (e) => {
          let r = e.slice(0);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t.type === i.listItem || t.type === i.oListItem) {
              let n = [t];
              for (; r[e + 1] && r[e + 1].type === t.type; )
                n.push(r[e + 1]), r.splice(e, 1);
              t.type === i.listItem
                ? (r[e] = { type: i.list, items: n })
                : (r[e] = { type: i.oList, items: n });
            }
          }
          return r;
        },
        p = (e) => {
          if ("text" in e) return d(e, g(e.spans, e));
          if ("items" in e) {
            let r = [];
            for (let t = 0; t < e.items.length; t++) r.push(p(e.items[t]));
            return d(e, r);
          }
          return d(e);
        },
        g = (e, r, t) => {
          if (!e.length) return [f(r.text)];
          let n = e.slice(0);
          n.sort((e, r) => e.start - r.start || r.end - e.end);
          let l = [];
          for (let e = 0; e < n.length; e++) {
            let i = n[e],
              a = (t && t.start) || 0,
              c = i.start - a,
              s = i.end - a,
              u = r.text.slice(c, s),
              o = [];
            for (let r = e; r < n.length; r++) {
              let e = n[r];
              e !== i &&
                (e.start >= i.start && e.end <= i.end
                  ? (o.push(e), n.splice(r, 1), r--)
                  : e.start < i.end &&
                    e.end > i.start &&
                    (o.push({ ...e, end: i.end }),
                    (n[r] = { ...e, start: i.end })));
            }
            0 === e && c > 0 && l.push(f(r.text.slice(0, c)));
            let m = { ...i, text: u };
            l.push(d(m, g(o, { ...r, text: u }, i))),
              s < r.text.length &&
                l.push(
                  f(r.text.slice(s, n[e + 1] ? n[e + 1].start - a : void 0)),
                );
          }
          return l;
        },
        h = (e, r) => v(o(e).children, r),
        v = (e, r) => {
          let t = [];
          for (let n = 0; n < e.length; n++) {
            let l = e[n],
              i = r(l.type, l.node, l.text, v(l.children, r), l.key);
            null != i && t.push(i);
          }
          return t;
        },
        x = (e) => {
          let r = /^(\/(?!\/)|#)/.test(e),
            t = !r && !/^https?:\/\//.test(e);
          return r && !t;
        },
        y = { Any: "Any", Document: "Document", Media: "Media", Web: "Web" },
        w = (e) => {
          var r;
          return {
            link_type: y.Document,
            id: e.id,
            uid: e.uid || void 0,
            type: e.type,
            tags: e.tags,
            lang: e.lang,
            url: null == e.url ? void 0 : e.url,
            slug: null == (r = e.slugs) ? void 0 : r[0],
            ...(e.data && Object.keys(e.data).length > 0
              ? { data: e.data }
              : {}),
          };
        },
        j = (e, ...r) => {
          let t;
          if (!e) return null;
          let n = "link_type" in e ? e : w(e),
            [l] = r;
          switch (
            ((t =
              "function" == typeof l || null == l
                ? { linkResolver: l }
                : { ...l }),
            n.link_type)
          ) {
            case y.Media:
            case y.Web:
              return "url" in n ? n.url : null;
            case y.Document:
              if ("id" in n && t.linkResolver) {
                let e = t.linkResolver(n);
                if (null != e) return e;
              }
              if ("url" in n && n.url) return n.url;
              return null;
            case y.Any:
            default:
              return null;
          }
        },
        b = (e) => null != e,
        k = (e) =>
          !!b(e) &&
          (1 === e.length && "text" in e[0] ? !!e[0].text : !!e.length),
        N = (e) => b(e) && ("id" in e || "url" in e),
        T = (e, r = {}) => {
          if (e && ("link_type" in e ? N(e) : e)) {
            let t = "target" in e ? e.target : void 0,
              n = j(e, r.linkResolver),
              l = null == n ? void 0 : n,
              i = "string" == typeof l && !x(l),
              a = r.rel
                ? r.rel({ href: l, isExternal: i, target: t })
                : i
                  ? "noreferrer"
                  : void 0;
            return { href: l, target: t, rel: null == a ? void 0 : a };
          }
          return {};
        },
        _ = (e) => {
          let r = /^(\/(?!\/)|#)/.test(e),
            t = !r && !/^https?:\/\//.test(e);
          return r && !t;
        };
      t(3454);
      let R = s.forwardRef(function (
        {
          field: e,
          document: r,
          linkResolver: t,
          internalComponent: l,
          externalComponent: i,
          ...a
        },
        c,
      ) {
        let {
            href: s,
            rel: u,
            ...o
          } = T(e ?? r, {
            linkResolver: t,
            rel: "function" == typeof a.rel ? a.rel : void 0,
          }),
          d = u;
        "rel" in a && "function" != typeof a.rel && (d = a.rel);
        let f = ("href" in a ? a.href : s) || "",
          m = f && _(f) ? l || "a" : i || "a";
        return (0, n.jsx)(m, { ref: c, ...o, ...a, href: f, rel: d });
      });
      t(3454);
      let L = (e) =>
        c({
          heading1: ({ children: e, key: r }) =>
            (0, n.jsx)("h1", { children: e }, r),
          heading2: ({ children: e, key: r }) =>
            (0, n.jsx)("h2", { children: e }, r),
          heading3: ({ children: e, key: r }) =>
            (0, n.jsx)("h3", { children: e }, r),
          heading4: ({ children: e, key: r }) =>
            (0, n.jsx)("h4", { children: e }, r),
          heading5: ({ children: e, key: r }) =>
            (0, n.jsx)("h5", { children: e }, r),
          heading6: ({ children: e, key: r }) =>
            (0, n.jsx)("h6", { children: e }, r),
          paragraph: ({ children: e, key: r }) =>
            (0, n.jsx)("p", { children: e }, r),
          preformatted: ({ node: e, key: r }) =>
            (0, n.jsx)("pre", { children: e.text }, r),
          strong: ({ children: e, key: r }) =>
            (0, n.jsx)("strong", { children: e }, r),
          em: ({ children: e, key: r }) => (0, n.jsx)("em", { children: e }, r),
          listItem: ({ children: e, key: r }) =>
            (0, n.jsx)("li", { children: e }, r),
          oListItem: ({ children: e, key: r }) =>
            (0, n.jsx)("li", { children: e }, r),
          list: ({ children: e, key: r }) =>
            (0, n.jsx)("ul", { children: e }, r),
          oList: ({ children: e, key: r }) =>
            (0, n.jsx)("ol", { children: e }, r),
          image: ({ node: r, key: t }) => {
            let l = (0, n.jsx)("img", {
              src: r.url,
              alt: r.alt ?? void 0,
              "data-copyright": r.copyright ? r.copyright : void 0,
            });
            return (0, n.jsx)(
              "p",
              {
                className: "block-img",
                children: r.linkTo
                  ? (0, n.jsx)(R, {
                      linkResolver: e.linkResolver,
                      internalComponent: e.internalLinkComponent,
                      externalComponent: e.externalLinkComponent,
                      field: r.linkTo,
                      children: l,
                    })
                  : l,
              },
              t,
            );
          },
          embed: ({ node: e, key: r }) =>
            (0, n.jsx)(
              "div",
              {
                "data-oembed": e.oembed.embed_url,
                "data-oembed-type": e.oembed.type,
                "data-oembed-provider": e.oembed.provider_name,
                dangerouslySetInnerHTML: { __html: e.oembed.html ?? "" },
              },
              r,
            ),
          hyperlink: ({ node: r, children: t, key: l }) =>
            (0, n.jsx)(
              R,
              {
                field: r.data,
                linkResolver: e.linkResolver,
                internalComponent: e.internalLinkComponent,
                externalComponent: e.externalLinkComponent,
                children: t,
              },
              l,
            ),
          label: ({ node: e, children: r, key: t }) =>
            (0, n.jsx)("span", { className: e.data.label, children: r }, t),
          span: ({ text: e, key: r }) => {
            let t = [],
              l = 0;
            for (let r of e.split("\n"))
              l > 0 && t.push((0, n.jsx)("br", {}, `${l}__break`)),
                t.push((0, n.jsx)(s.Fragment, { children: r }, `${l}__line`)),
                l++;
            return (0, n.jsx)(s.Fragment, { children: t }, r);
          },
        });
      function E({
        linkResolver: e,
        field: r,
        fallback: t,
        components: i,
        externalLinkComponent: a,
        internalLinkComponent: u,
        ...o
      }) {
        return s.useMemo(() => {
          if (!k(r))
            return null != t ? (0, n.jsx)(n.Fragment, { children: t }) : null;
          {
            let t = l(
                "object" == typeof i ? c(i) : i,
                L({
                  linkResolver: e,
                  internalLinkComponent: u,
                  externalLinkComponent: a,
                }),
              ),
              o = h(r, (e, r, n, l, i) => {
                let a = t(e, r, n, l, i);
                return s.isValidElement(a) && null == a.key
                  ? s.cloneElement(a, { key: i })
                  : a;
              });
            return (0, n.jsx)(n.Fragment, { children: o });
          }
        }, [r, u, a, i, e, t]);
      }
      let z = s.createContext({}),
        A = () => s.useContext(z) || {},
        P = function ({ components: e, ...r }) {
          let t = A(),
            i = l(
              "object" == typeof e ? c(e) : e,
              "object" == typeof t.richTextComponents
                ? c(t.richTextComponents)
                : t.richTextComponents,
            );
          return (0, n.jsx)(E, {
            components: i,
            internalLinkComponent: t.internalLinkComponent,
            externalLinkComponent: t.externalLinkComponent,
            ...r,
          });
        };
    },
    2692: function (e, r, t) {
      var n = t(5893);
      r.Z = (e) => {
        let { children: r, size: t = "small", blur: l = !0 } = e;
        return (0, n.jsx)("div", {
          className: "rounded-12 p-[1.8rem] lg:p-40\n  "
            .concat(
              l
                ? "backdrop-blur-[105px] text-white"
                : "bg-white text-dark_grey",
              "\n  ",
            )
            .concat(
              "small" === t && l ? "w-[26.4rem] lg:w-[31rem]" : "",
              "\n  ",
            )
            .concat(
              "small" !== t || l ? "" : "w-full md:w-[26.4rem] lg:w-[31rem]",
              "\n  ",
            )
            .concat(
              "small" !== t && l ? "w-[26.4rem] lg:w-[36.8rem]" : "",
              "\n  ",
            )
            .concat(
              "small" === t || l ? "" : "w-full md:w-[26.4rem] lg:w-[36.8rem]",
              "\n  ",
            ),
          children: r,
        });
      };
    },
    6445: function (e, r, t) {
      t.r(r),
        t.d(r, {
          default: function () {
            return p;
          },
        });
      var n = t(5893),
        l = t(9362),
        i = t(2692),
        a = t(187),
        c = t(6546),
        s = t(6038),
        u = t(7294),
        o = t(8266),
        d = t(6494),
        f = (e) => {
          let { slice: r } = e,
            l = (0, u.useRef)(!1),
            f = (0, o.o)((e) => e.isFirstLoaded),
            m = (0, u.useRef)(!0),
            p = (0, u.useRef)(0),
            g = (0, u.useRef)({ current: 0, target: 0, initialTarget: 0 }),
            h = (0, u.useRef)({ current: 0, target: 0, initialTarget: 0 }),
            v = (0, u.useRef)({ current: 0, target: 0, initialTarget: 0 }),
            x = (0, u.useRef)({ current: 0, target: 0, initialTarget: 0 }),
            y = (0, u.useRef)({ current: 0, target: 0 }),
            w = (0, u.useRef)({ current: 0, target: 0 }),
            j = (0, u.useRef)(0.075),
            b = (0, u.useRef)(!1),
            k = (0, u.useRef)("center"),
            N = (0, u.useRef)(!1),
            T = (0, u.useRef)(!1),
            _ = (0, u.useRef)(!1),
            R = (0, u.useRef)(!1),
            L = (0, u.useRef)(!1),
            E = (0, u.useRef)(!1),
            z = (0, u.useRef)(!1),
            A = (0, u.useRef)(!1),
            P = (0, u.useRef)(!1),
            C = (0, u.useRef)(!1),
            Z = (0, u.useRef)(!1),
            I = (0, u.useRef)(!1),
            F = (0, u.useRef)(!1),
            O = (0, u.useRef)(0),
            W = (0, u.useRef)(0),
            M = (0, u.useRef)(!1),
            S = (0, u.useRef)(!1),
            B = (0, u.useRef)(!1),
            X = (0, u.useRef)(!1);
          (0, u.useEffect)(
            () => (
              (p.current = R.current.offsetWidth),
              (O.current = I.current.offsetWidth),
              (W.current = Z.current.offsetWidth),
              f ||
                window.addEventListener("introduction-complete", H, {
                  once: !0,
                }),
              U(),
              G(),
              $(),
              V(),
              q(),
              C.current &&
                ((C.current.src = C.current.dataset.src),
                C.current.load(),
                C.current.addEventListener(
                  "play",
                  () => {
                    P.current && P.current.classList.add("opacity-0");
                  },
                  { once: !0 },
                )),
              window.addEventListener("resize", q),
              window.addEventListener("is-appeared", D),
              () => {
                window.removeEventListener("introduction-complete", H),
                  window.removeEventListener("is-appeared", D),
                  window.removeEventListener("resize", q),
                  cancelAnimationFrame(b.current),
                  M.current.kill(),
                  S.current.kill(),
                  B.current.kill();
              }
            ),
            [],
          );
          let D = () => {
              H();
            },
            H = () => {
              l.current.classList.remove("opacity-0");
            },
            q = () => {
              (p.current = R.current.offsetWidth),
                (O.current = I.current.offsetWidth),
                (W.current = Z.current.offsetWidth);
            },
            V = () => {
              let e = window.innerHeight,
                r = s.p8.fromTo(
                  [I.current.children[0], Z.current.children[0]],
                  { yPercent: 100, autoAlpha: 0 },
                  { yPercent: 0, autoAlpha: 1, ease: "power2.out" },
                );
              S.current = c.ScrollTrigger.create({
                trigger: I.current,
                animation: r,
                start: "".concat(e / 3, "px top"),
                scrub: 0.5,
              });
            },
            $ = () => {
              B.current = c.ScrollTrigger.create({
                trigger: l.current,
                start: "top bottom",
                end: "bottom top",
                onEnter: () => {
                  b.current = requestAnimationFrame(J);
                },
                onEnterBack: () => {
                  C.current && ((C.current.currentTime = 0), C.current.play()),
                    (b.current = requestAnimationFrame(J));
                },
                onLeave: () => {
                  C.current && C.current.pause(),
                    cancelAnimationFrame(b.current);
                },
                onLeaveBack: () => {
                  cancelAnimationFrame(b.current);
                },
              });
            },
            U = () => {
              (h.current.initialTarget = p.current / 2 - 50),
                (h.current.current = h.current.initialTarget),
                (h.current.target = h.current.initialTarget),
                (g.current.initialTarget = p.current / 2),
                (g.current.current = g.current.initialTarget),
                (g.current.target = g.current.initialTarget),
                (y.current.current = 1.3),
                (y.current.target = 1.3),
                (v.current.initialTarget = -(O.current - 0.5 * p.current) / 2),
                (v.current.current = v.current.initialTarget),
                (v.current.target = v.current.initialTarget),
                (x.current.initialTarget = -(W.current - 0.5 * p.current) / 2),
                (x.current.current = x.current.initialTarget),
                (x.current.target = x.current.initialTarget),
                s.p8.set(E.current, { yPercent: 100 }),
                s.p8.set(z.current, { yPercent: 100 }),
                s.p8.set(A.current, { yPercent: 100 });
            },
            G = () => {
              let e = t(8041),
                r = new e({ target: I.current, by: "chars" })[0].chars,
                n = new e({ target: Z.current, by: "chars" })[0].chars,
                i = s.p8.to(r, { autoAlpha: 0, stagger: -0.05, paused: !0 }),
                a = s.p8.to(n, { autoAlpha: 0, stagger: 0.05, paused: !0 });
              (X.current = s.p8.fromTo(
                F.current,
                { scale: 0.9, autoAlpha: 0 },
                { autoAlpha: 1, scale: 1, ease: "none", paused: !0 },
              )),
                (M.current = c.ScrollTrigger.create({
                  trigger: l.current,
                  start: "60% bottom",
                  end: "85% bottom",
                  scrub: !0,
                  onEnter: () => {
                    "right" === k.current
                      ? s.p8.to(z.current, {
                          yPercent: 100,
                          duration: 0.9,
                          ease: "power2.inOut",
                        })
                      : "left" === k.current &&
                        s.p8.to(E.current, {
                          yPercent: 100,
                          duration: 0.9,
                          ease: "power2.inOut",
                        }),
                      C.current &&
                        ((C.current.currentTime = 0), C.current.play()),
                      s.p8.to(j, { current: 0.1, ease: "none", duration: 0.3 }),
                      (m.current = !1);
                  },
                  onEnterBack: () => {
                    s.p8.to(A.current, {
                      yPercent: 100,
                      duration: 0.9,
                      ease: "power2.inOut",
                    }),
                      (m.current = !1);
                  },
                  onLeave: () => {
                    s.p8.to(A.current, {
                      yPercent: 0,
                      duration: 0.9,
                      ease: "power2.inOut",
                    }),
                      (m.current = !1);
                  },
                  onLeaveBack: () => {
                    "right" === k.current
                      ? s.p8.to(z.current, {
                          yPercent: 0,
                          duration: 0.9,
                          ease: "power2.inOut",
                        })
                      : "left" === k.current &&
                        s.p8.to(E.current, {
                          yPercent: 0,
                          duration: 0.9,
                          ease: "power2.inOut",
                        }),
                      C.current && C.current.pause(),
                      s.p8.to(j, {
                        current: 0.075,
                        ease: "none",
                        duration: 0.3,
                      }),
                      (m.current = !0);
                  },
                  onUpdate: () => {
                    "center" === k.current
                      ? ((h.current.target =
                          h.current.initialTarget +
                          (0.5 * p.current + 50) * M.current.progress),
                        (g.current.target =
                          g.current.initialTarget +
                          0.5 * p.current * M.current.progress))
                      : "right" === k.current
                        ? ((h.current.target =
                            h.current.initialTarget +
                            (0.4 * p.current + 50) * M.current.progress),
                          (g.current.target =
                            g.current.initialTarget +
                            0.6 * p.current * M.current.progress))
                        : ((h.current.target =
                            h.current.initialTarget +
                            (0.6 * p.current + 50) * M.current.progress),
                          (g.current.target =
                            g.current.initialTarget +
                            0.4 * p.current * M.current.progress)),
                      (y.current.target = 1.3 - (1.3 - 1) * M.current.progress);
                    let e = s.p8.utils.mapRange(
                        0,
                        0.4,
                        0,
                        1,
                        M.current.progress,
                      ),
                      r = s.p8.utils.clamp(
                        0,
                        1,
                        s.p8.utils.mapRange(
                          0.4,
                          0.75,
                          0,
                          1,
                          M.current.progress,
                        ),
                      );
                    (w.current.target = r),
                      i.progress(e),
                      a.progress(e),
                      (v.current.target =
                        -v.current.initialTarget +
                        (v.current.initialTarget - p.current / 12) *
                          M.current.progress),
                      (x.current.target =
                        -x.current.initialTarget +
                        (x.current.initialTarget + p.current / 12) *
                          M.current.progress);
                  },
                }));
            },
            J = () => {
              (g.current.current +=
                (g.current.target - g.current.current) * j.current),
                (h.current.current +=
                  (h.current.target - h.current.current) * j.current),
                (y.current.current +=
                  (y.current.target - y.current.current) * j.current),
                (v.current.current +=
                  (v.current.target - v.current.current) * j.current),
                (x.current.current +=
                  (x.current.target - x.current.current) * j.current),
                (w.current.current +=
                  (w.current.target - w.current.current) * j.current),
                X.current && X.current.progress(w.current.current),
                N.current &&
                  (N.current.style.transform = "translateX(".concat(
                    g.current.current,
                    "px)",
                  )),
                _.current &&
                  (_.current.style.transform = "translateX(".concat(
                    -g.current.current,
                    "px)",
                  )),
                T.current &&
                  (T.current.style.transform = "translateX(".concat(
                    -h.current.current,
                    "px)",
                  )),
                R.current &&
                  (R.current.style.transform = "translateX(".concat(
                    h.current.current,
                    "px)",
                  )),
                L.current &&
                  (L.current.style.transform = "scale(".concat(
                    y.current.current,
                    ")",
                  )),
                I.current &&
                  (I.current.style.transform = "translateX(".concat(
                    v.current.current,
                    "px)",
                  )),
                Z.current &&
                  (Z.current.style.transform = "translateX(".concat(
                    x.current.current,
                    "px)",
                  )),
                (b.current = requestAnimationFrame(J));
            };
          return (0, n.jsx)("div", {
            ref: l,
            className:
              "w-full h-[400vh] -mt-[100vh] sticky top-0 opacity-0 bg-dark_beige",
            children: (0, n.jsxs)("div", {
              className: "sticky top-0 w-full h-screen p-[1rem]",
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "w-full z-2 h-full relative flex overflow-hidden rounded-15",
                  onMouseEnter: () => {
                    m.current &&
                      ((k.current = "left"),
                      (g.current.initialTarget = 0.6 * p.current),
                      (g.current.target = g.current.initialTarget),
                      (h.current.initialTarget = 0.4 * p.current - 50),
                      (h.current.target = h.current.initialTarget),
                      (v.current.initialTarget =
                        (W.current - 0.6 * p.current) / 2),
                      (v.current.target = -v.current.initialTarget),
                      (x.current.initialTarget =
                        (O.current - 0.6 * p.current) / 2),
                      (x.current.target = -x.current.initialTarget),
                      s.p8.to(E.current, {
                        yPercent: 0,
                        duration: 0.9,
                        ease: "power2.inOut",
                      }),
                      s.p8.to(z.current, {
                        yPercent: 100,
                        duration: 0.9,
                        ease: "power2.inOut",
                      }));
                  },
                  children: [
                    (0, n.jsx)("div", {
                      ref: T,
                      className:
                        "absolute w-full h-full overflow-hidden rounded-15",
                      children: (0, n.jsx)("div", {
                        ref: R,
                        className: "w-full h-full pointer-events-none",
                        children: (0, n.jsx)(d.Z, {
                          transition: "none",
                          field: r.primary.image_left,
                          fallbackAlt: "",
                          className: "w-full h-full object-cover",
                          sizes: "96vw",
                          style: {
                            backfaceVisibility: "hidden",
                            transform: "translateZ(0)",
                          },
                        }),
                      }),
                    }),
                    (0, n.jsx)("div", {
                      ref: I,
                      className:
                        "absolute z-1 left-0 top-0 bottom-0 w-1/2 flex items-center justify-center",
                      children: (0, n.jsx)("div", {
                        className: "heading-60 text-white",
                        children: r.primary.title_left,
                      }),
                    }),
                    (0, n.jsx)("div", {
                      ref: E,
                      className: "relative mt-auto pb-10 ml-10",
                      children: (0, n.jsx)(i.Z, {
                        size: "large",
                        children: (0, n.jsx)("div", {
                          className: "body-14 text-white -tracking-0.01",
                          children: (0, n.jsx)(a.v, {
                            field: r.primary.content_left,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className:
                    "xl:absolute z-3 left-10 right-10 top-10 bottom-10 pointer-events-none flex rounded-15 overflow-hidden",
                  children: [
                    (0, n.jsx)("div", {
                      ref: N,
                      className:
                        "absolute w-full h-full overflow-hidden rounded-15 pointer-events-auto",
                      onMouseEnter: () => {
                        m.current &&
                          ((k.current = "right"),
                          (g.current.initialTarget = 0.4 * p.current),
                          (g.current.target = g.current.initialTarget),
                          (h.current.initialTarget = 0.6 * p.current - 50),
                          (h.current.target = h.current.initialTarget),
                          (v.current.initialTarget =
                            (W.current - 0.4 * p.current) / 2),
                          (v.current.target = -v.current.initialTarget),
                          (x.current.initialTarget =
                            (O.current - 0.4 * p.current) / 2),
                          (x.current.target = -x.current.initialTarget),
                          s.p8.to(E.current, {
                            yPercent: 100,
                            duration: 0.9,
                            ease: "power2.inOut",
                          }),
                          s.p8.to(z.current, {
                            yPercent: 0,
                            duration: 0.9,
                            ease: "power2.inOut",
                          }));
                      },
                      children: (0, n.jsx)("div", {
                        ref: _,
                        className: "w-full h-full pointer-events-none",
                        children: (0, n.jsx)(d.Z, {
                          transition: "none",
                          field: r.primary.image_right,
                          fallbackAlt: "",
                          className: "w-full h-full object-cover",
                          sizes: "96vw",
                          style: {
                            backfaceVisibility: "hidden",
                            transform: "translateZ(0)",
                          },
                        }),
                      }),
                    }),
                    (0, n.jsx)("div", {
                      ref: Z,
                      className:
                        "absolute z-1 right-0 top-0 bottom-0 w-1/2 flex items-center justify-center",
                      children: (0, n.jsx)("div", {
                        className: "heading-60 text-white",
                        children: r.primary.title_right,
                      }),
                    }),
                    (0, n.jsx)("div", {
                      ref: z,
                      className: "relative mt-auto pb-10 ml-auto mr-10",
                      children: (0, n.jsx)(i.Z, {
                        size: "large",
                        children: (0, n.jsx)("div", {
                          className: "body-14 text-white -tracking-0.01",
                          children: (0, n.jsx)(a.v, {
                            field: r.primary.content_right,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className:
                    "xl:absolute z-1 left-10 right-10 top-10 bottom-10 flex rounded-15 overflow-hidden bg-white items-center justify-center",
                  children: [
                    r.primary.video_center.url
                      ? (0, n.jsxs)("div", {
                          ref: L,
                          className:
                            "absolute top-0 left-0 w-full h-full pointer-events-none",
                          children: [
                            (0, n.jsx)("div", {
                              ref: P,
                              className:
                                "absolute left-0 top-0 w-full h-full z-1 transition-opacity duration-global ease-out xl:transition-none",
                              children: (0, n.jsx)(d.Z, {
                                transition: "none",
                                field: r.primary.image_center,
                                fallbackAlt: "",
                                className: "w-full h-full object-cover",
                                sizes: "96vw",
                              }),
                            }),
                            (0, n.jsx)("video", {
                              ref: C,
                              "data-src": r.primary.video_center.url,
                              type: "video/mp4",
                              muted: !0,
                              loop: !0,
                              playsInline: !0,
                              className:
                                "absolute top-0 left-0 w-full h-full object-cover",
                            }),
                          ],
                        })
                      : (0, n.jsx)("div", {
                          ref: L,
                          className:
                            "absolute top-0 left-0  w-full h-full pointer-events-none",
                          children: (0, n.jsx)(d.Z, {
                            transition: "none",
                            field: r.primary.image_center,
                            fallbackAlt: "",
                            className: "w-full h-full object-cover",
                            sizes: "96vw",
                          }),
                        }),
                    (0, n.jsx)("div", {
                      className:
                        "absolute z-1 right-0 top-0 bottom-0 w-full flex items-center justify-center",
                      children: (0, n.jsx)("div", {
                        ref: F,
                        className: "heading-60 text-white",
                        children: r.primary.title_center,
                      }),
                    }),
                    (0, n.jsx)("div", {
                      ref: A,
                      className: "relative mt-auto pb-10 ml-auto mr-10",
                      children: (0, n.jsx)(i.Z, {
                        size: "large",
                        children: (0, n.jsx)("div", {
                          className: "body-14 text-white -tracking-0.01",
                          children: (0, n.jsx)(a.v, {
                            field: r.primary.content_center,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        m = (e) => {
          let { slice: r } = e,
            t = (0, u.useRef)(!1),
            l = (0, u.useRef)(!1),
            f = (0, u.useRef)(!1),
            m = (0, u.useRef)(!1),
            p = (0, u.useRef)([]),
            g = (0, u.useRef)([]),
            h = (0, u.useRef)([]),
            v = (0, u.useRef)(!1),
            x = (0, o.o)((e) => e.isFirstLoaded),
            y = () => {
              w();
            };
          (0, u.useEffect)(
            () => (
              c.ScrollTrigger.config({ ignoreMobileResize: !0 }),
              j(),
              m.current &&
                (m.current.addEventListener(
                  "play",
                  () => {
                    f.current && f.current.classList.add("opacity-0");
                  },
                  { once: !0 },
                ),
                (v.current = c.ScrollTrigger.create({
                  trigger: t.current,
                  onLeave: () => {
                    m.current && (m.current.paused || m.current.pause());
                  },
                  onEnterBack: () => {
                    m.current &&
                      ((m.current.currentTime = 0),
                      m.current.paused && m.current.play());
                  },
                }))),
              x ||
                window.addEventListener("introduction-complete", w, {
                  once: !0,
                }),
              window.addEventListener("is-appeared", y),
              () => {
                window.removeEventListener("introduction-complete", w),
                  window.removeEventListener("is-appeared", y),
                  v.current && (v.current.kill(), (v.current = null)),
                  h.current.forEach((e) => {
                    e.kill();
                  });
              }
            ),
            [],
          );
          let w = () => {
              t.current.classList.remove("opacity-0");
            },
            j = () => {
              for (let e = 0; e < p.current.length; e++) {
                let r = p.current[e],
                  t = g.current[e],
                  n = s.p8.timeline();
                n.set([r, t], { yPercent: 100 }),
                  n.set(r.children[0], { yPercent: -100 }),
                  n.to(r, { yPercent: 0, ease: "none", duration: 1 }),
                  n.to(
                    r.children[0],
                    { yPercent: 0, ease: "none", duration: 1 },
                    "<",
                  ),
                  n.to(t, { yPercent: 0, ease: "none", duration: 0.3 }, "<0.5"),
                  (h.current[e] = c.ScrollTrigger.create({
                    trigger: r,
                    start: () => "".concat(e * window.innerHeight, "px bottom"),
                    end: () => "+=".concat(window.innerHeight),
                    animation: n,
                    scrub: !0,
                    onEnter: () => {
                      2 === e &&
                        m.current &&
                        ((m.current.currentTime = 0),
                        m.current.paused && m.current.play());
                    },
                    onLeaveBack: () => {
                      2 === e &&
                        m.current &&
                        (m.current.paused || m.current.pause());
                    },
                  }));
              }
            };
          return (0, n.jsx)("div", {
            ref: t,
            className:
              "w-full bg-dark_beige sticky px-half-container-mobile md:px-half-container -mt-[100vh] h-[calc(100vh*4)] opacity-0",
            children: (0, n.jsxs)("div", {
              ref: l,
              className:
                "sticky top-half-container-mobile md:top-half-container overflow-hidden w-full h-[calc(100vh_-_var(--padding-half-container-mobile)*2)] md:h-[calc(100vh_-_var(--padding-half-container)*2)] rounded-15",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "absolute left-0 top-0 overflow-hidden w-full h-full md:h-[calc(100vh_-_var(--padding-half-container)*2)] will-change-transform",
                  ref: (e) => (p.current[0] = e),
                  children: (0, n.jsxs)("div", {
                    className: "relative w-full h-full flex",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "absolute w-full h-full overflow-hidden rounded-15",
                        children: (0, n.jsx)(d.Z, {
                          field: r.primary.image_left_mobile,
                          fallbackAlt: "",
                          fill: !0,
                          sizes: "100vw",
                          className: "pointer-events-none object-cover",
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "absolute z-1 left-0 top-1/2 w-full -translate-y-1/2 text-center",
                        children: (0, n.jsx)("div", {
                          className: "heading-60 text-white",
                          children: r.primary.title_left,
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: "relative mt-auto pb-[0.6rem] ml-[0.6rem]",
                        ref: (e) => (g.current[0] = e),
                        children: (0, n.jsx)(i.Z, {
                          children: (0, n.jsx)("div", {
                            className:
                              "font-body text-13 -tracking-[0.013rem] leading-[153%] lg:text-14 lg:leading-[157%] text-white lg:-tracking-0.01",
                            children: (0, n.jsx)(a.v, {
                              field: r.primary.content_left,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)("div", {
                  className:
                    "absolute left-0 top-0 overflow-hidden w-full h-full md:h-[calc(100vh_-_var(--padding-half-container)*2)] will-change-transform",
                  ref: (e) => (p.current[1] = e),
                  children: (0, n.jsxs)("div", {
                    className: "relative w-full h-full flex",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "absolute w-full h-full overflow-hidden rounded-15",
                        children: (0, n.jsx)(d.Z, {
                          field: r.primary.image_right_mobile,
                          fallbackAlt: "",
                          fill: !0,
                          sizes: "100vw",
                          className: "pointer-events-none object-cover",
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "absolute z-1 left-0 top-1/2 w-full -translate-y-1/2 text-center",
                        children: (0, n.jsx)("div", {
                          className: "heading-60 text-white",
                          children: r.primary.title_right,
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: "relative mt-auto pb-[0.6rem] ml-[0.6rem]",
                        ref: (e) => (g.current[1] = e),
                        children: (0, n.jsx)(i.Z, {
                          children: (0, n.jsx)("div", {
                            className:
                              "font-body text-13 -tracking-[0.013rem] leading-[153%] lg:text-14 lg:leading-[157%] text-white lg:-tracking-0.01",
                            children: (0, n.jsx)(a.v, {
                              field: r.primary.content_right,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, n.jsx)("div", {
                  className:
                    "absolute left-0 top-0 overflow-hidden w-full h-full md:h-[calc(100vh_-_var(--padding-half-container)*2)] will-change-transform",
                  ref: (e) => (p.current[2] = e),
                  children: (0, n.jsxs)("div", {
                    className: "relative w-full h-full flex",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "absolute w-full h-full overflow-hidden rounded-15",
                        children: r.primary.video_center.url
                          ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                (0, n.jsx)("div", {
                                  ref: f,
                                  className:
                                    "absolute left-0 top-0 w-full h-full z-1 transition-opacity duration-global ease-out",
                                  children: (0, n.jsx)(d.Z, {
                                    field: r.primary.image_center,
                                    fallbackAlt: "",
                                    className: "w-full h-full object-cover",
                                    sizes: "96vw",
                                  }),
                                }),
                                (0, n.jsx)("video", {
                                  ref: m,
                                  preload: "none",
                                  src: r.primary.video_center.url,
                                  type: "video/mp4",
                                  muted: !0,
                                  loop: !0,
                                  playsInline: !0,
                                  className:
                                    "absolute top-0 left-0 w-full h-full object-cover pointer-events-none",
                                }),
                              ],
                            })
                          : (0, n.jsx)(d.Z, {
                              field: r.primary.image_center,
                              fallbackAlt: "",
                              fill: !0,
                              sizes: "100vw",
                              className: "pointer-events-none object-cover",
                            }),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "absolute z-1 left-0 top-1/2 w-full -translate-y-1/2 text-center",
                        children: (0, n.jsx)("div", {
                          className: "heading-60 text-white",
                          children: r.primary.title_center,
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className: "relative mt-auto pb-[0.6rem] ml-[0.6rem]",
                        ref: (e) => (g.current[2] = e),
                        children: (0, n.jsx)(i.Z, {
                          children: (0, n.jsx)("div", {
                            className:
                              "font-body text-13 -tracking-[0.013rem] leading-[153%] lg:text-14 lg:leading-[157%] text-white lg:-tracking-0.01",
                            children: (0, n.jsx)(a.v, {
                              field: r.primary.content_center,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        p = (e) => {
          let { slice: r, slices: t, index: i } = e,
            a = (0, l.a)("(max-width: 1200px)", !0);
          return (0, n.jsx)("section", {
            "data-slice-type": r.slice_type,
            "data-slice-variation": r.variation,
            style: { zIndex: t.length - i },
            className: "relative",
            children: a
              ? (0, n.jsx)(m, { slice: r })
              : (0, n.jsx)(f, { slice: r }),
          });
        };
    },
  },
]);
