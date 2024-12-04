"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [183],
  {
    640: function (e, r, t) {
      var n = t(5893),
        l = t(7294),
        i = t(4179),
        a = t(6038);
      let c = (0, l.forwardRef)((e, r) => {
        let { children: c, href: s, target: o, mode: u = "white", ...d } = e,
          m = (0, l.useRef)(null),
          f = (0, l.useRef)(null),
          p = (0, l.useRef)(null);
        (0, l.useImperativeHandle)(r, () => ({ getChars: h, getAnimation: g }));
        let h = () => f.current,
          g = () => w(),
          w = () => ((p.current = a.p8.effects.blink(f.current)), p.current),
          x = () => {
            w();
          };
        return (
          (0, l.useEffect)(
            () => (
              m.current.addEventListener("mouseenter", x),
              () => {
                m.current && m.current.removeEventListener("mouseenter", x);
              }
            ),
            [],
          ),
          (0, l.useEffect)(() => {
            let e = t(8041);
            f.current = new e({ target: m.current, by: "chars" })[0].chars;
          }, []),
          (0, n.jsx)("div", {
            ref: m,
            children: (0, n.jsx)(i.Z, {
              href: s,
              target: o,
              className:
                "button-" +
                u +
                " inline-block py-[2.4rem] px-[2.5rem] rounded-[1rem] text-10 leading-[180%] tracking-[0.05rem] uppercase xl:transition-transform xl:duration-global xl:ease-out xl:hover:scale-[1.04]",
              ...d,
              children: c,
            }),
          })
        );
      });
      (c.displayName = "Button"), (r.Z = c);
    },
    1183: function (e, r, t) {
      t.r(r);
      var n = t(5893),
        l = t(7294),
        i = t(6038),
        a = t(6546),
        c = t(640),
        s = t(6494),
        o = t(2099);
      r.default = (e) => {
        let { slice: r, slices: u, index: d } = e,
          m = (0, l.useRef)(!1),
          f = (0, l.useRef)(!1),
          p = (0, l.useRef)(!1),
          h = (0, l.useRef)(!1),
          g = (0, l.useRef)(!1),
          w = (0, l.useRef)(!1),
          x = (0, l.useRef)(!1),
          b = (0, l.useRef)(!1),
          y = (0, l.useRef)(!1),
          v = (0, l.useRef)(null),
          _ = (0, l.useRef)(null),
          j = (0, l.useRef)(!1),
          R = (0, l.useRef)(!1),
          k = (0, l.useRef)(!1);
        (0, l.useEffect)(() => {
          let e = t(8041);
          window.addEventListener("resize", N),
            window.addEventListener("refresh-scroll-trigger", E),
            (x.current = new e({ target: h.current, by: "words" })[0].words),
            (b.current = new e({ target: g.current, by: "chars" })[0].chars),
            (y.current = new e({ target: w.current, by: "chars" })[0].chars),
            i.p8.set([b.current, y.current], { alpha: 0 });
          let r = z(),
            n = i.p8.timeline();
          n
            .fromTo(
              b.current,
              { alpha: 0 },
              {
                alpha: 1,
                stagger: 0.05,
                duration: 0.01,
                onStart: () => {
                  i.p8.effects.blink(b.current, { delay: 0.2 });
                },
              },
              0,
            )
            .fromTo(
              y.current,
              { alpha: 0 },
              {
                alpha: 1,
                stagger: 0.05,
                duration: 0.01,
                onStart: () => {
                  i.p8.effects.blink(y.current, { delay: 0.2 });
                },
              },
              0.5,
            ),
            v.current && n.add(v.current.getAnimation(), 0.5),
            _.current && n.add(_.current.getAnimation(), 0.5),
            a.ScrollTrigger.create({
              trigger: m.current,
              start: "30% bottom",
              once: !0,
              animation: n,
            }),
            (j.current = a.ScrollTrigger.create({
              trigger: m.current,
              start: () => ((0, o.tq)() ? "30% bottom" : "top bottom"),
              end: () =>
                (0, o.tq)()
                  ? "+=".concat(0.7 * window.innerHeight)
                  : "+=".concat(window.innerHeight),
              animation: r,
              scrub: !0,
            })),
            (m.current.style.height = "".concat(window.innerHeight, "px"));
          let { scaleAnimation: l, parallaxAnimation: c } = T();
          return (
            (R.current = a.ScrollTrigger.create({
              trigger: m.current,
              start: () => "top top",
              end: () => "+=".concat(0.5 * m.current.clientHeight),
              animation: l,
              scrub: !0,
            })),
            (k.current = a.ScrollTrigger.create({
              trigger: m.current,
              start: () => "top top",
              animation: c,
              scrub: !0,
            })),
            () => {
              j.current.kill(),
                (j.current = null),
                R.current.kill(),
                (R.current = null),
                k.current.kill(),
                (k.current = null),
                window.removeEventListener("resize", N),
                window.removeEventListener("refresh-scroll-trigger", E);
            }
          );
        }, []);
        let N = () => {
            m.current.style.height = "".concat(window.innerHeight, "px");
          },
          E = () => {
            j.current.refresh(), R.current.refresh(), k.current.refresh();
          },
          z = () => {
            let e = i.p8.timeline();
            return (
              e
                .set(x.current, { yPercent: (e) => 70 + 50 * e }, 0)
                .fromTo(
                  f.current,
                  { y: () => ((0, o.tq)() ? "0" : "-60%") },
                  { y: 0, ease: "none" },
                  0,
                )
                .to(x.current, { yPercent: 0, ease: "none" }, 0),
              e
            );
          },
          T = () => {
            let e = i.p8.timeline();
            e.to(
              p.current,
              {
                scale: window.innerWidth < 768 ? 0.965 : 0.972,
                borderRadius: 30,
                ease: "none",
              },
              0,
            );
            let r = i.p8.timeline();
            return (
              r.fromTo(
                f.current,
                { y: 0 },
                { y: window.innerWidth / 15, ease: "none" },
                0,
              ),
              { scaleAnimation: e, parallaxAnimation: r }
            );
          };
        return (0, n.jsx)("section", {
          style: { zIndex: u.length - d },
          ref: m,
          className:
            "h-screen min-h-[600px] landscape:min-h-[950px] lg:!min-h-[600px] bg-dark_beige relative overflow-hidden",
          children: (0, n.jsx)("div", {
            ref: p,
            className: "wrapper origin-bottom w-full h-full overflow-hidden",
            children: (0, n.jsxs)("div", {
              ref: f,
              className: "relative w-full h-full md:pt-[22.5rem]",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "absolute left-0 top-0 w-full h-full -z-1 pointer-events-none",
                  children:
                    r.primary.background_image.url &&
                    (0, n.jsx)(s.Z, {
                      field: r.primary.background_image,
                      fallbackAlt: "",
                      className: "w-full h-full object-cover",
                      sizes: "(max-width: 768px) 96vw, 100vw",
                    }),
                }),
                (0, n.jsx)("div", {
                  className:
                    "absolute left-0 top-0 w-full h-full z-1 pointer-events-none",
                  children:
                    r.primary.foreground_image.url &&
                    (0, n.jsx)(s.Z, {
                      field: r.primary.foreground_image,
                      fallbackAlt: "",
                      className: "w-full h-full object-cover",
                      sizes: "(max-width: 768px) 96vw, 100vw",
                    }),
                }),
                (0, n.jsxs)("div", {
                  className:
                    "absolute top-[30%] landscape:top-[43%] md:top-[45.5%] md:landscape:top-[38%] lg:top-[47%] xl:top-[34%] left-0 w-full flex flex-col items-center",
                  children: [
                    (0, n.jsx)("div", {
                      ref: g,
                      className:
                        "body-mono-14 text-real_white uppercase text-center mb-32",
                      children: r.primary.suptitle,
                    }),
                    (0, n.jsx)("div", {
                      ref: h,
                      className:
                        "text-center heading-164 text-white whitespace-nowrap flex flex-wrap justify-center w-full gap-x-[0.75rem] lg:gap-x-[2rem] [&>*:first-child]:w-full md:[&>*:first-child]:w-auto",
                      children: r.primary.title,
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "flex flex-col items-center mt-[5.6rem] md:mt-[7rem] lg:mt-[15rem] xl:mt-[10.4rem] body-mono-10 z-1",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "flex gap-x-[0.6rem]",
                          children: [
                            r.primary.button &&
                              r.primary.button_title &&
                              (0, n.jsx)(c.Z, {
                                ref: v,
                                href:
                                  "preorder" === r.primary.button.type
                                    ? "/preorder"
                                    : r.primary.button.url,
                                children: r.primary.button_title,
                              }),
                            r.primary.secondary_button &&
                              r.primary.secondary_button_text &&
                              (0, n.jsx)(c.Z, {
                                ref: _,
                                mode: "blur",
                                href:
                                  "preorder" === r.primary.secondary_button.type
                                    ? "/preorder"
                                    : r.primary.secondary_button.url,
                                children: r.primary.secondary_button_text,
                              }),
                          ],
                        }),
                        r.primary.bottom_text &&
                          (0, n.jsx)("div", {
                            ref: w,
                            className: "mt-16 md:mt-20 text-white",
                            children: r.primary.bottom_text,
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
    },
  },
]);
