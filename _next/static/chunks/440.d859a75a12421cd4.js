"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [440],
  {
    8440: function (e, r, t) {
      t.r(r);
      var n = t(5893),
        c = t(6038),
        u = t(6546),
        a = t(7294),
        o = t(8266),
        s = t(4508),
        i = t(2099);
      r.default = (e) => {
        let { slice: r, slices: l } = e,
          d = (0, a.useRef)(-1),
          [h, p] = (0, a.useState)([]),
          f = (0, a.useRef)(!1),
          g = (0, a.useRef)(!1),
          m = (0, a.useRef)(!1),
          w = (0, a.useRef)(!1),
          R = (0, a.useRef)(!1),
          E = (0, a.useRef)([]),
          y = (0, a.useRef)([]),
          x = (0, a.useRef)([]),
          b = (0, a.useRef)(!1),
          v = (0, a.useRef)(!1),
          k = (0, a.useRef)(!1),
          A = (0, a.useRef)(!1),
          j = (0, a.useRef)(!1),
          L = (0, a.useRef)(!1),
          C = (0, a.useRef)(!1),
          N = (0, a.useRef)(!1),
          S = (0, a.useRef)(!1),
          W = (0, a.useRef)(!1),
          M = (0, a.useRef)(null),
          _ = (0, a.useRef)(!1),
          T = (0, a.useRef)(!1),
          q = (0, a.useRef)(!1),
          B = (0, s.LZ)(),
          H = (0, o.o)((e) => e.isAppear),
          z = (0, o.o)((e) => e.headerVisible),
          V = (0, o.o)((e) => e.setReduceHeaderSize),
          O = (0, o.o)((e) => e.headerDark);
        (0, a.useEffect)(() => {
          let e = [];
          l.forEach((r) => {
            if (r.primary.add_anchor) {
              let t = r.primary.anchor_name,
                n = document.querySelector(
                  "section[data-anchor =" + (0, i.lV)(t) + "]",
                );
              e.push({ title: t, section: n });
            }
          }),
            p(e);
        }, []),
          (0, a.useEffect)(
            () => (
              h.length &&
                (V(!0),
                document.body.classList.add("has-anchors"),
                (d.current = 0),
                E.current.forEach((e, r) => {
                  x.current[r] = e.getBoundingClientRect().width;
                }),
                (m.current =
                  f.current.getBoundingClientRect().width + (0, i.z6)(6)),
                (R.current = w.current.getBoundingClientRect().width),
                P(),
                Y(),
                window.addEventListener("scroll", G)),
              () => {
                V(!1),
                  window.removeEventListener("scroll", G),
                  document.body.classList.remove("has-anchors"),
                  A.current && (0, i.RE)(A.current),
                  k.current && (0, i.RE)(k.current),
                  S.current && (0, i.RE)(S.current);
              }
            ),
            [h],
          ),
          (0, a.useEffect)(() => {
            if (H) {
              let e = c.p8.timeline();
              e.set(w.current, { autoAlpha: 1 }).fromTo(
                w.current,
                { y: "-8.6rem" },
                { y: 0, duration: 1.5, ease: "expo.out" },
                0.9,
              );
            } else
              w.current &&
                c.p8.to(w.current, {
                  autoAlpha: 0,
                  duration: 0.4,
                  ease: "power2.out",
                });
          }, [H]),
          (0, a.useEffect)(() => {
            (0, i.RE)(b.current),
              w.current &&
                (b.current = c.p8.to(w.current, {
                  autoAlpha: z ? 1 : 0,
                  duration: 0.4,
                  ease: "power2.out",
                }));
          }, [z]),
          (0, a.useEffect)(() => {
            w.current && w.current.classList.toggle("a", O);
          }, [O]);
        let Y = () => {
            h.forEach((e, r) => {
              r <= 0 ||
                u.ScrollTrigger.create({
                  onEnter: () => {
                    (M.current = d.current), (d.current = r), F();
                  },
                  onLeaveBack: () => {
                    (M.current = d.current), (d.current = r - 1), F();
                  },
                  start: "top 25%",
                  trigger: e.section,
                });
            });
          },
          D = () => {
            (C.current = !1),
              v.current &&
                !N.current &&
                (S.current && (0, i.RE)(S.current),
                k.current && (0, i.RE)(k.current),
                (A.current = c.p8.timeline()),
                1024 > !window.innerWidth &&
                  E.current.forEach((e) => {
                    A.current.set(e, { pointerEvents: "all" }, 0);
                  }),
                A.current
                  .to(
                    [
                      g.current.querySelectorAll("span"),
                      q.current[d.current].chars,
                    ],
                    {
                      autoAlpha: 0,
                      duration: 0,
                      ease: "none",
                      stagger: -0.045,
                    },
                  )
                  .to(
                    w.current,
                    {
                      duration: 1.2,
                      ease: "expo.inOut",
                      width: window.innerWidth < 1024 ? R.current : "auto",
                    },
                    "<",
                  ),
                1024 > !window.innerWidth &&
                  T.current.forEach((e, r) => {
                    A.current.to(
                      e.chars,
                      {
                        autoAlpha: 1,
                        duration: 0,
                        ease: "none",
                        onStart: () => {
                          c.p8.effects.blink(e.chars);
                        },
                        stagger: 0.05,
                      },
                      0 === r
                        ? (q.current[d.current].chars.length + 4) * 0.05
                        : ">-=38%",
                    );
                  }));
          },
          Z = () => {
            if (((C.current = !0), !v.current || N.current)) return;
            A.current && (0, i.RE)(A.current),
              k.current && (0, i.RE)(k.current);
            let e = m.current + x.current[d.current];
            (S.current = c.p8.timeline({
              onComplete: () => {
                C.current = !1;
              },
            })),
              (j.current.innerHTML = d.current + 1),
              1024 > !window.innerWidth &&
                E.current.forEach((e) => {
                  S.current.set(e, { pointerEvents: "none" });
                }),
              S.current
                .set(y.current, { display: "none" })
                .set(y.current[d.current], { display: "block" })
                .to(
                  w.current,
                  { duration: 1.2, ease: "expo.inOut", width: e },
                  0.045,
                )
                .to(
                  [
                    g.current.querySelectorAll("span"),
                    q.current[d.current].chars,
                  ],
                  { autoAlpha: 1, duration: 0, ease: "none", stagger: 0.05 },
                  "-=0.6",
                ),
              1024 > !window.innerWidth &&
                T.current.forEach((e) => {
                  S.current.to(
                    e.chars,
                    {
                      autoAlpha: 0,
                      duration: 0,
                      ease: "none",
                      stagger: -0.045,
                    },
                    0,
                  );
                });
          },
          F = () => {
            if (L.current || N.current) return;
            k.current &&
              (k.current.kill(), k.current.seek(k.current.endTime()));
            let e = m.current + x.current[d.current];
            (k.current = c.p8.timeline()),
              k.current
                .to(
                  [
                    g.current.querySelectorAll("span"),
                    q.current[M.current].chars,
                  ],
                  { autoAlpha: 0, duration: 0, ease: "none", stagger: -0.045 },
                )
                .call(() => {
                  j.current.innerHTML = d.current + 1;
                })
                .set(y.current, { display: "none" })
                .set(y.current[d.current], { display: "block" })
                .to(
                  [
                    g.current.querySelectorAll("span"),
                    q.current[d.current].chars,
                  ],
                  { autoAlpha: 1, duration: 0, ease: "none", stagger: 0.05 },
                )
                .to(
                  w.current,
                  { duration: 0.6, ease: "power2.out", width: e },
                  "0.5",
                ),
              E.current.forEach((e) => {
                k.current.to(e, { pointerEvents: "none" }, 0);
              });
          },
          G = () => {
            !v.current && window.scrollY > 400
              ? ((v.current = !0), L.current || N.current || Z())
              : v.current &&
                window.scrollY < 400 &&
                (L.current || N.current || D(), (v.current = !1));
          },
          I = (e) =>
            e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
          J = (e) => {
            if (window.innerWidth < 1024) return;
            (N.current = !0),
              W.current ||
                (W.current =
                  h[h.length - 1].section.getBoundingClientRect().top);
            let r = h[e].section.getBoundingClientRect().top,
              t = Math.abs(r) / W.current;
            B && B.stop(),
              B &&
                B.scrollTo(h[e].section, {
                  duration: Math.max(1.8 * t, 1),
                  easing: I,
                  force: !0,
                  onComplete: () => {
                    B && B.start(), (N.current = !1), C.current && Z();
                  },
                });
          },
          K = (e) => {
            window.innerWidth < 1024 || c.p8.effects.blink(T.current[e].chars);
          },
          P = () => {
            (_.current = t(8041)),
              (T.current = _.current({ target: E.current, by: "chars" })),
              (q.current = _.current({ target: y.current, by: "chars" })),
              c.p8.set(g.current.querySelectorAll("span"), { autoAlpha: 0 }),
              q.current.forEach((e) => {
                c.p8.set(e.chars, { autoAlpha: 0 });
              }),
              window.innerWidth < 1024 &&
                ((j.current.innerHTML = d.current + 1),
                c.p8.set(E.current, { display: "none" }));
          };
        return h.length
          ? (0, n.jsxs)("section", {
              "data-slice-type": r.slice_type,
              "data-slice-variation": r.variation,
              className:
                "anchors bg-white lg:cursor-pointer fixed flex font-body-mono gap-[1rem] h-[5.6rem] lg:h-[6.6rem] items-center leading-[1.8] left-container-mobile md:left-container opacity-0 lg:pl-[8.4rem] lg:pr-[2.2rem] rounded-12 text-10 text-dark_grey top-container-mobile md:top-container tracking-0.05 uppercase w-[5.6rem] lg:w-auto z-anchors transition-bg duration-global ease-out",
              onMouseEnter: () => {
                window.innerWidth < 1024 || (D(), (L.current = !0));
              },
              onMouseLeave: () => {
                window.innerWidth < 1024 || (Z(), (L.current = !1));
              },
              ref: w,
              children: [
                h.map((e, r) =>
                  (0, n.jsx)(
                    "div",
                    {
                      "data-anchor": (0, i.lV)(e.title),
                      className: "cursor-pointer opacity-0 lg:opacity-100",
                      onClick: () => J(r),
                      onMouseEnter: () => K(r),
                      ref: (e) => (E.current[r] = e),
                      children: e.title,
                    },
                    "anchor-link-".concat(r),
                  ),
                ),
                (0, n.jsx)("div", {
                  className:
                    "absolute flex h-full left-0 pl-[6.8rem] lg:pl-[8.4rem] pointer-events-none pr-[1.8rem] lg:pr-[2.2rem] top-0",
                  ref: f,
                  children: (0, n.jsxs)("div", {
                    className: "flex gap-[0.6rem] items-center",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex gap-[0.6rem] items-center",
                        ref: g,
                        children: [
                          (0, n.jsxs)("div", {
                            className: "flex",
                            children: [
                              (0, n.jsx)("span", { ref: j, children: "0" }),
                              (0, n.jsx)("span", { children: "/" }),
                              (0, n.jsx)("span", { children: h.length }),
                            ],
                          }),
                          (0, n.jsx)("span", {
                            children: (0, n.jsx)("div", {
                              className:
                                "bg-black h-[0.2rem] rounded-full w-[0.2rem]",
                            }),
                          }),
                        ],
                      }),
                      h.map((e, r) =>
                        (0, n.jsx)(
                          "div",
                          {
                            className: "hidden",
                            ref: (e) => (y.current[r] = e),
                            children: e.title,
                          },
                          "anchor-item-".concat(r),
                        ),
                      ),
                    ],
                  }),
                }),
              ],
            })
          : "";
      };
    },
  },
]);
