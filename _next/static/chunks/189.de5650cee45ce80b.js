"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [189],
  {
    226: function (e, r, t) {
      var l = t(5893),
        i = t(7294),
        n = t(4179),
        s = t(9293);
      r.Z = (e) => {
        let { field: r, title: t, mode: a, popup: c = !1 } = e;
        (0, i.useEffect)(() => {}, []);
        let o = () => {
          window.dispatchEvent(
            new CustomEvent("open-popup", {
              detail: { name: "global", type: r.type, uid: r.uid },
            }),
          );
        };
        return c
          ? "team" === r.uid
            ? (0, l.jsxs)("div", {
                onClick: o,
                className:
                  "group inline-flex justify-start items-center cursor-pointer",
                children: [
                  (0, l.jsx)("div", {
                    className:
                      "flex justify-center items-center w-[3.6rem] h-[3.6rem] ".concat(
                        "white" === a ? "bg-white" : "bg-light_beige",
                        " rounded-10 mr-[0.9rem] transition-transform duration-global ease-out group-hover:scale-105",
                      ),
                    children: (0, l.jsx)("div", {
                      className: "svg-wrapper w-[1.1rem] h-[0.85rem]",
                      children: (0, l.jsx)(s.Z, {}),
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "body-mono-10 transition-opacity duration-global ease-out group-hover:opacity-50 ".concat(
                        "white" === a ? "text-white" : "text-black",
                      ),
                    children: t,
                  }),
                ],
              })
            : (0, l.jsxs)(n.Z, {
                onClick: o,
                href: r.url,
                className:
                  "group inline-flex justify-start items-center cursor-pointer",
                children: [
                  (0, l.jsx)("div", {
                    className:
                      "flex justify-center items-center w-[3.6rem] h-[3.6rem] ".concat(
                        "white" === a ? "bg-white" : "bg-light_beige",
                        " rounded-10 mr-[0.9rem] transition-transform duration-global ease-out group-hover:scale-105",
                      ),
                    children: (0, l.jsx)("div", {
                      className: "svg-wrapper w-[1.1rem] h-[0.85rem]",
                      children: (0, l.jsx)(s.Z, {}),
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "body-mono-10 transition-opacity duration-global ease-out group-hover:opacity-50 ".concat(
                        "white" === a ? "text-white" : "text-black",
                      ),
                    children: t,
                  }),
                ],
              })
          : (0, l.jsxs)(n.Z, {
              field: r,
              className: "group inline-flex justify-start items-center",
              children: [
                (0, l.jsx)("div", {
                  className:
                    "flex justify-center items-center w-[3.6rem] h-[3.6rem] ".concat(
                      "white" === a ? "bg-white" : "bg-light_beige",
                      " rounded-10 mr-[0.9rem] transition-transform duration-global ease-out group-hover:scale-105",
                    ),
                  children: (0, l.jsx)("div", {
                    className: "svg-wrapper w-[1.1rem] h-[0.85rem]",
                    children: (0, l.jsx)(s.Z, {}),
                  }),
                }),
                (0, l.jsx)("div", {
                  className:
                    "font-body-mono text-10 leading-[180%] tracking-[0.05rem] uppercase transition-opacity duration-global ease-out group-hover:opacity-50 ".concat(
                      "white" === a ? "text-white" : "text-dark_grey",
                    ),
                  children: t,
                }),
              ],
            });
      };
    },
    9293: function (e, r, t) {
      var l = t(5893);
      r.Z = (e) => {
        let { stroke: r = "#575349" } = e;
        return (0, l.jsx)("svg", {
          width: "11",
          height: "9",
          viewBox: "0 0 11 9",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, l.jsx)("path", {
            id: "Vector 201",
            d: "M0 4.5H9.5M9.5 4.5L5.9 1M9.5 4.5L5.9 8",
            stroke: r,
          }),
        });
      };
    },
    3189: function (e, r, t) {
      t.r(r),
        t.d(r, {
          default: function () {
            return h;
          },
        });
      var l = t(5893),
        i = t(7294),
        n = t(6546),
        s = t(6038),
        a = t(2099),
        c = t(226),
        o = t(26),
        d = (e) => {
          let { title: r, icon: t, progress: n } = e,
            s = (0, i.useRef)(null),
            [a, c] = (0, i.useState)(0);
          return (
            (0, i.useEffect)(() => {
              c(100 * n);
            }, [n]),
            (0, l.jsxs)("div", {
              ref: s,
              className:
                "relative flex items-center bg-white rounded-12 border-white border-[0.2rem] uppercase",
              children: [
                (0, l.jsx)("div", {
                  className:
                    "absolute top-0 left-0 h-full bg-light_beige rounded-10",
                  style: { width: a + "%" },
                }),
                (0, l.jsxs)("div", {
                  className:
                    "relative ml-[1.4rem] mr-[3.1rem] my-15 text-10 leading-[180%] tracking-[0.05rem] text-dark_grey z-1",
                  children: [
                    (0, l.jsx)("div", { className: "", children: r }),
                    (0, l.jsxs)("div", {
                      className: "-mt-[0.5rem] opacity-50",
                      children: [
                        (0, l.jsx)("span", { children: "On: " }),
                        (0, l.jsxs)("span", { children: [a, "%"] }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className:
                    "relative w-[1.4rem] ml-[3.1rem] mr-[2.4rem] svg-wrapper z-1",
                  children: (0, l.jsx)(o.Z, {
                    field: t,
                    fallbackAlt: "",
                    className: "w-full h-auto",
                  }),
                }),
              ],
            })
          );
        },
        u = t(9362),
        m = t(6494),
        f = (e) => {
          let { slice: r } = e,
            o = (0, i.useRef)(null),
            f = (0, i.useRef)(null),
            p = (0, i.useRef)(null),
            h = (0, i.useRef)(null),
            w = (0, i.useRef)(null),
            v = (0, i.useRef)(null),
            g = (0, i.useRef)(null),
            x = (0, i.useRef)(null),
            y = (0, i.useRef)(null),
            b = (0, i.useRef)(null),
            j = (0, i.useRef)(null),
            N = (0, i.useRef)(null),
            _ = (0, i.useRef)(null),
            k = (0, i.useRef)(null),
            R = (0, i.useRef)(null),
            z = (0, i.useRef)(null),
            H = (0, i.useRef)(null),
            T = (0, i.useRef)(null),
            Z = (0, i.useRef)(null),
            P = (0, i.useRef)(null),
            E = (0, i.useRef)(null),
            W = (0, i.useRef)(null),
            S = (0, i.useRef)(null),
            A = (0, i.useRef)(null),
            L = (0, i.useRef)(null),
            O = (0, i.useRef)(null),
            [C, I] = (0, i.useState)(!1),
            [M, B] = (0, i.useState)(0),
            [F, V] = (0, i.useState)(0),
            U = (0, u.a)();
          (0, i.useEffect)(() => {
            if (!C) {
              let e = t(9074);
              b.current.load(),
                (L.current = new e.default({
                  src: b.current.dataset.src,
                  scrollyVideoContainer: O.current,
                  frameThreshold: 0.6,
                  sticky: !1,
                  trackScroll: !1,
                }));
              return;
            }
          }, [C]),
            (0, i.useEffect)(() => {
              b.current &&
                ((b.current.src = b.current.dataset.src), b.current.load()),
                s.p8.set(R.current, { yPercent: 110 });
              let e = window.innerWidth - (0, a.z6)(25) - 5,
                r = window.innerHeight - (0, a.z6)(15),
                t =
                  window.innerWidth < window.innerHeight
                    ? w.current.offsetWidth / e
                    : w.current.offsetHeight / r;
              x.current.style.setProperty("--progress", 0),
                B(w.current.offsetWidth / e),
                V(w.current.offsetHeight / r),
                s.p8.set(y.current, { scale: t + 0.05 });
              let l = s.p8.timeline({ defaults: { ease: "none" } });
              l
                .fromTo(
                  p.current,
                  {
                    y:
                      window.innerWidth < 768
                        ? 0.4 * window.innerHeight
                        : 1.1 * window.innerHeight,
                  },
                  { y: 0 },
                  0,
                )
                .fromTo(
                  f.current,
                  {
                    y:
                      window.innerWidth < 768
                        ? 0.45 * window.innerHeight
                        : 1.35 * window.innerHeight,
                  },
                  { y: 0 },
                  0,
                )
                .fromTo(
                  w.current,
                  {
                    y:
                      window.innerWidth < 768
                        ? 0.55 * window.innerHeight
                        : 1.75 * window.innerHeight,
                  },
                  { y: 0 },
                  0,
                )
                .fromTo(
                  v.current,
                  {
                    y:
                      window.innerWidth < 768
                        ? 0.6 * window.innerHeight
                        : 2.25 * window.innerHeight,
                  },
                  { y: 0 },
                  0,
                ),
                n.ScrollTrigger.create({
                  trigger: o.current,
                  start: "top bottom",
                  end: "+=150%",
                  animation: l,
                  scrub: !0,
                });
              let i = s.p8.timeline({ defaults: { ease: "none" } }),
                c = s.p8.timeline({ defaults: { ease: "none" } });
              c.fromTo(j.current, { yPercent: 0 }, { yPercent: 120 }, 0),
                i
                  .fromTo(
                    f.current,
                    { y: 0 },
                    {
                      y: () =>
                        -(
                          window.innerHeight -
                          w.current.offsetHeight -
                          (0, a.z6)(80)
                        ) /
                          2 -
                        10,
                    },
                    0,
                  )
                  .fromTo(
                    v.current,
                    { y: 0 },
                    {
                      y: () =>
                        (window.innerHeight -
                          w.current.offsetHeight -
                          (0, a.z6)(80)) /
                          2 +
                        10,
                    },
                    0,
                  )
                  .to(h.current, { y: "4rem" }, 0)
                  .to(g.current, { y: "-4rem" }, 0)
                  .fromTo(
                    y.current,
                    {
                      scale: () => {
                        let t =
                          window.innerWidth < window.innerHeight
                            ? w.current.offsetWidth / e
                            : w.current.offsetHeight / r;
                        return t + 0.05;
                      },
                    },
                    {
                      scale: 1,
                      onUpdate: function () {
                        if (Z.current && b.current) {
                          let e = Z.current.progress;
                          L.current.setTargetTimePercent(e);
                        }
                        S.current &&
                          x.current &&
                          x.current.style.setProperty(
                            "--progress",
                            Z.current && 0 === Z.current.progress
                              ? 0
                              : this.progress(),
                          );
                      },
                    },
                    0,
                  );
              let d = s.p8.timeline({ paused: !0 });
              d
                .fromTo(
                  R.current,
                  { yPercent: 110 },
                  { yPercent: 0, ease: "power2.inOut", duration: 0.9 },
                  0,
                )
                .fromTo(
                  z.current,
                  { yPercent: 60 },
                  { yPercent: 0, ease: "power3.out", duration: 0.9 },
                  0.3,
                )
                .to(
                  H.current,
                  { xPercent: -50, ease: "power3.inOut", duration: 0.9 },
                  "<50%",
                )
                .to(
                  T.current,
                  { xPercent: 30, ease: "power3.inOut", duration: 0.9 },
                  "<",
                )
                .fromTo(
                  [N.current, _.current],
                  { opacity: 0 },
                  { opacity: 1, ease: "power3.out", duration: 0.9 },
                  ">-=40%",
                ),
                k.current &&
                  d.fromTo(
                    k.current,
                    { yPercent: 70, opacity: 0 },
                    {
                      yPercent: 0,
                      opacity: 1,
                      ease: "power3.out",
                      duration: 0.7,
                    },
                    "<-=10%",
                  );
              let u = s.p8.timeline({ paused: !0 });
              u.to(
                R.current,
                { yPercent: 110, ease: "power2.inOut", duration: 0.6 },
                0,
              ),
                (W.current = n.ScrollTrigger.create({
                  trigger: o.current,
                  start: "top top-=45%",
                  end: "52% bottom",
                  animation: c,
                  invalidateOnRefresh: !1,
                  scrub: !0,
                })),
                (Z.current = n.ScrollTrigger.create({
                  trigger: o.current,
                  start: "top top-=58%",
                  end: "85% bottom",
                  animation: i,
                  invalidateOnRefresh: !1,
                  scrub: !0,
                  onLeave: () => {
                    d.restart();
                  },
                  onEnterBack: () => {
                    u.restart();
                  },
                }));
              let m = s.p8.to(y.current, {
                y: window.innerWidth / 20,
                ease: "none",
              });
              return (
                (P.current = n.ScrollTrigger.create({
                  once: !0,
                  trigger: o.current,
                  onEnter: () => {
                    if (((S.current = !0), !A.current)) {
                      let e = window.innerHeight - (0, a.z6)(15);
                      V(w.current.offsetHeight / e), (A.current = !0);
                    }
                  },
                })),
                (E.current = n.ScrollTrigger.create({
                  trigger: o.current,
                  start: "bottom 100%",
                  end: "bottom top",
                  invalidateOnRefresh: !1,
                  animation: m,
                  scrub: !0,
                })),
                window.addEventListener("resize", q),
                () => {
                  window.removeEventListener("resize", q),
                    W.current.kill(),
                    P.current.kill(),
                    E.current.kill(),
                    Z.current.kill(),
                    (W.current = null),
                    (P.current = null),
                    (E.current = null),
                    (Z.current = null);
                }
              );
            }, []);
          let q = () => {
            let e = window.innerWidth - (0, a.z6)(25) - 5,
              r = window.innerHeight - (0, a.z6)(15);
            window.innerWidth < 768
              ? B(0.97)
              : (B(w.current.offsetWidth / e), V(w.current.offsetHeight / r));
          };
          return (0, l.jsx)("div", {
            ref: o,
            className: "relative h-[300vh] bg-light_beige",
            children: (0, l.jsxs)("div", {
              className:
                "sticky top-0 px-container grid grid-cols-6 lg:grid-cols-12 h-screen content-center overflow-hidden",
              children: [
                (0, l.jsx)("div", {
                  className:
                    "col-span-full md:col-start-2 md:col-end-6 lg:col-start-2 lg:col-end-12 xl:col-start-4 xl:col-end-10 xl:px-30 h-full",
                  children: (0, l.jsxs)("div", {
                    className: "relative grid gap-y-[4rem]",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "absolute top-0 left-0 -translate-y-[calc(100%_+_4rem)] w-full pt-[66.4%]",
                        children: (0, l.jsx)("div", {
                          ref: p,
                          className:
                            "absolute top-0 left-0 w-full h-full rounded-[1.3rem] md:rounded-[1.8rem] overflow-hidden",
                          children: (0, l.jsx)("div", {
                            ref: g,
                            className: "w-full h-full",
                            children: (0, l.jsx)(m.Z, {
                              field: r.primary.image_bottom,
                              sizes: "(max-width: 768px) 100vw, 30vw",
                              fallbackAlt: "",
                              className: "w-full h-full object-cover",
                            }),
                          }),
                        }),
                      }),
                      (0, l.jsx)("div", {
                        ref: f,
                        className:
                          "relative w-full pt-[66.4%] rounded-[1.8rem] overflow-hidden",
                        children: (0, l.jsx)("div", {
                          ref: h,
                          className: "absolute top-0 left-0 w-full h-full",
                          children: (0, l.jsx)(m.Z, {
                            field: r.primary.image_top,
                            sizes: "(max-width: 768px) 100vw, 30vw",
                            fallbackAlt: "",
                            className: "w-full h-full object-cover",
                          }),
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        ref: w,
                        className: "relative w-full pt-[66.4%]",
                        children: [
                          (0, l.jsxs)("div", {
                            ref: x,
                            className:
                              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw_-_2.5rem_-_5px)] h-[calc(100vh_-_1.5rem)]",
                            style: {
                              clipPath: "inset(calc("
                                .concat(
                                  ((1 - F) / 2) * 100,
                                  "% * (1 - var(--progress))) calc(",
                                )
                                .concat(
                                  ((1 - M) / 2) * 100,
                                  "% * (1 - var(--progress))) round 1.8rem)",
                                ),
                            },
                            children: [
                              (0, l.jsx)("div", {
                                ref: y,
                                className:
                                  "relative w-full h-full overflow-hidden",
                                children: U
                                  ? (0, l.jsx)(m.Z, {
                                      field: r.primary.image_main,
                                      sizes: "(max-width: 768px) 100vw, 100vw",
                                      fallbackAlt: "",
                                      className: "w-full h-full object-cover",
                                    })
                                  : (0, l.jsxs)(l.Fragment, {
                                      children: [
                                        r.primary.image_main.url &&
                                          (0, l.jsx)(m.Z, {
                                            field: r.primary.image_main,
                                            sizes:
                                              "(max-width: 768px) 100vw, 100vw",
                                            fallbackAlt: "",
                                            loading: "eager",
                                            priority: !0,
                                            className:
                                              "absolute top-0 left-0 w-full h-full object-cover",
                                          }),
                                        (0, l.jsx)("video", {
                                          onLoadedMetadata: () => {
                                            I(!0);
                                          },
                                          type: "video/mp4",
                                          ref: b,
                                          "data-src": r.primary.video.url,
                                          className:
                                            "w-full h-full object-cover hidden",
                                          muted: !0,
                                          playsInline: !0,
                                          preload: "auto",
                                          tabIndex: 0,
                                        }),
                                        (0, l.jsx)("div", {
                                          className: "scrolly-wrapper",
                                          ref: O,
                                        }),
                                      ],
                                    }),
                              }),
                              (0, l.jsxs)("div", {
                                ref: R,
                                className:
                                  "absolute bottom-[0.6rem] right-[0.6rem] md:bottom-[1.25rem] md:right-[1.25rem] w-[calc(100%_-_1.2rem)] md:w-[39rem] lg:w-[59rem] xl:w-[39rem] flex items-center bg-white p-[0.2rem] rounded-12 pointer-events-auto",
                                children: [
                                  (0, l.jsx)("div", {
                                    ref: z,
                                    className:
                                      "relative w-[11.5rem] lg:w-[16rem] xl:w-[11rem] z-1",
                                    children: (0, l.jsx)("div", {
                                      className:
                                        "relative w-[200%] h-0 pt-[219%] rounded-10 overflow-hidden pointer-events-none",
                                      children: (0, l.jsx)("div", {
                                        ref: H,
                                        className:
                                          "absolute top-0 left-0 w-full h-full rounded-10 overflow-hidden",
                                        children: (0, l.jsx)("div", {
                                          ref: T,
                                          className:
                                            "absolute top-0 left-0 w-full h-full",
                                          children: (0, l.jsx)(m.Z, {
                                            field: r.primary.preview_image,
                                            sizes:
                                              "(max-width: 768px) 100vw, 20vw",
                                            fallbackAlt: "",
                                            className:
                                              "absolute top-0 left-0 w-full h-full object-cover",
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  (0, l.jsxs)("div", {
                                    className:
                                      "flex-1 pl-[1.2rem] md:pl-20 pr-20 md:pr-[3.4rem] py-[1.8rem] md:py-10",
                                    children: [
                                      r.primary.preview_suptitle &&
                                        (0, l.jsx)("div", {
                                          ref: N,
                                          className:
                                            "body-mono-10 mb-8 md:mb-12 text-dark_beige",
                                          children: r.primary.preview_suptitle,
                                        }),
                                      r.primary.preview_title &&
                                        (0, l.jsx)("div", {
                                          ref: _,
                                          className:
                                            "body-15 leading-[146%] -tracking-[0.015rem] md:text-16 md:leading-[150%] md:-tracking-[0.016rem] text-dark_grey",
                                          children: r.primary.preview_title,
                                        }),
                                      r.primary.preview_link &&
                                        (0, l.jsx)("div", {
                                          className:
                                            "mt-[3.2rem] md:mt-[5.5rem]",
                                          ref: k,
                                          children: (0, l.jsx)(c.Z, {
                                            field: r.primary.preview_link,
                                            title: r.primary.preview_link_title,
                                          }),
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "absolute top-0 left-0 w-full h-full overflow-hidden",
                            children: (0, l.jsx)("div", {
                              ref: j,
                              className: "absolute bottom-10 left-10",
                              children: (0, l.jsx)(d, {
                                title: r.primary.feature_name,
                                icon: r.primary.feature_icon,
                                progress: 0.48,
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        ref: v,
                        className:
                          "relative w-full pt-[66.4%] rounded-[1.8rem] overflow-hidden",
                        children: (0, l.jsx)("div", {
                          ref: g,
                          className: "absolute top-0 left-0 w-full h-full",
                          children: (0, l.jsx)(m.Z, {
                            field: r.primary.image_bottom,
                            sizes: "(max-width: 768px) 100vw, 30vw",
                            fallbackAlt: "",
                            className: "w-full h-full object-cover",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, l.jsx)("div", {
                  className:
                    "absolute left-[1.25rem] top-[1.25rem] right-[1.25rem] bottom-[1.25rem] overflow-hidden rounded-[1.8rem] pointer-events-none",
                }),
              ],
            }),
          });
        },
        p = (e) => {
          let { slice: r } = e,
            t = (0, i.useRef)(null),
            o = (0, i.useRef)(null),
            d = (0, i.useRef)(null),
            u = (0, i.useRef)(null);
          return (
            (0, i.useEffect)(
              () => (
                window.innerWidth < 768 &&
                  s.p8.set(t.current, {
                    height: window.innerHeight - (0, a.z6)(16),
                  }),
                d.current &&
                  (d.current.addEventListener(
                    "play",
                    () => {
                      o.current && o.current.classList.add("opacity-0");
                    },
                    { once: !0 },
                  ),
                  (u.current = n.ScrollTrigger.create({
                    trigger: t.current,
                    onEnter: () => {
                      (d.current.currentTime = 0),
                        d.current.paused && d.current.play();
                    },
                    onLeave: () => {
                      d.current.paused || d.current.pause();
                    },
                    onLeaveBack: () => {
                      (d.current.currentTime = 0),
                        d.current.paused || d.current.pause();
                    },
                  }))),
                () => {
                  u.current && (u.current.kill(), (u.current = null));
                }
              ),
              [],
            ),
            (0, l.jsx)("div", {
              className:
                "bg-dark_beige p-half-container-mobile md:p-half-container",
              children: (0, l.jsxs)("div", {
                ref: t,
                className:
                  "relative h-[100vw] landscape:h-[calc(100vh_-_var(--padding-half-container)*2)] rounded-13 overflow-hidden bg-light_beige",
                children: [
                  (0, l.jsx)("div", {
                    className: "w-full h-full",
                    children: r.primary.video.url
                      ? (0, l.jsxs)(l.Fragment, {
                          children: [
                            (0, l.jsx)("div", {
                              ref: o,
                              className:
                                "absolute left-0 top-0 w-full h-full z-1 transition-opacity duration-global ease-out",
                              children: (0, l.jsx)(m.Z, {
                                field: r.primary.image_main,
                                fallbackAlt: "",
                                className: "w-full h-full object-cover",
                                sizes: "96vw",
                              }),
                            }),
                            (0, l.jsx)("video", {
                              type: "video/mp4",
                              ref: d,
                              preload: "none",
                              src: r.primary.video.url,
                              className: "w-full h-full object-cover",
                              muted: !0,
                              playsInline: !0,
                            }),
                          ],
                        })
                      : (0, l.jsx)(m.Z, {
                          field: r.primary.image_main,
                          sizes: "(max-width: 768px) 100vw, 100vw",
                          fallbackAlt: "",
                          className: "w-full h-full object-cover",
                        }),
                  }),
                  (0, l.jsxs)("div", {
                    className:
                      "absolute bottom-[0.6rem] right-[0.6rem] md:bottom-[1.25rem] md:right-[1.25rem] w-[calc(100%_-_1.2rem)] md:w-[39rem] lg:w-[59rem] xl:w-[39rem] flex items-center bg-white p-[0.2rem] rounded-10 pointer-events-auto z-2",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "relative w-[11.5rem] lg:w-[16rem] xl:w-[11rem] z-1",
                        children: (0, l.jsx)("div", {
                          className:
                            "relative w-full h-0 pt-[168%] md:pt-[219%] pointer-events-none",
                          children: (0, l.jsx)(m.Z, {
                            field: r.primary.preview_image,
                            sizes: "(max-width: 768px) 100vw, 20vw",
                            fallbackAlt: "",
                            className:
                              "absolute top-0 left-0 w-full h-full object-cover rounded-[0.8rem]",
                          }),
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "flex-1 pl-[1.2rem] md:pl-20 pr-20 md:pr-[3.4rem] py-[1.8rem] md:py-10",
                        children: [
                          r.primary.preview_suptitle &&
                            (0, l.jsx)("div", {
                              className:
                                "font-body-mono text-10 leading-[180%] tracking-[0.05rem] uppercase mb-8 md:mb-12 text-dark_beige",
                              children: r.primary.preview_suptitle,
                            }),
                          r.primary.preview_title &&
                            (0, l.jsx)("div", {
                              className:
                                "body-15 leading-[146%] -tracking-[0.015rem] md:text-16 md:leading-[150%] md:-tracking-[0.016rem] text-dark_grey",
                              children: r.primary.preview_title,
                            }),
                          r.primary.preview_link &&
                            (0, l.jsx)("div", {
                              className: "mt-[3.2rem] md:mt-[5.5rem]",
                              children: (0, l.jsx)(c.Z, {
                                field: r.primary.preview_link,
                                title: r.primary.preview_link_title,
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        h = (e) => {
          let { slice: r, slices: t, index: i } = e,
            n = (0, u.a)("(max-width: 1200px)", !0);
          return (0, l.jsx)("section", {
            style: { zIndex: t.length - i },
            className: "relative",
            children: n
              ? (0, l.jsx)(p, { slice: r })
              : (0, l.jsx)(f, { slice: r }),
          });
        };
    },
  },
]);
