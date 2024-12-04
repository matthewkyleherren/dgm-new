"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [287],
  {
    6132: function (e, t, r) {
      var a = r(5893),
        s = r(9008),
        n = r.n(s);
      t.Z = (e) => {
        let { data: t } = e,
          r = t.meta_title
            ? t.meta_title
            : t.title
              ? "Pebble | ".concat(t.title)
              : "Pebble Mobility";
        return (0, a.jsxs)(n(), {
          children: [
            (0, a.jsx)("title", { children: r }),
            (0, a.jsx)("meta", { property: "og:title", content: r }, "title"),
            (0, a.jsx)("meta", { property: "og:site_name", content: "Pebble" }),
            t.meta_description &&
              (0, a.jsx)("meta", {
                name: "description",
                content: t.meta_description,
              }),
            t.meta_image &&
              t.meta_image.url &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("meta", {
                    property: "og:image",
                    content: t.meta_image.url,
                  }),
                  (0, a.jsx)("meta", {
                    property: "og:image:type",
                    content: "image/jpg",
                  }),
                  (0, a.jsx)("meta", {
                    property: "og:image:width",
                    content: t.meta_image.dimensions.width,
                  }),
                  (0, a.jsx)("meta", {
                    property: "og:image:height",
                    content: t.meta_image.dimensions.height,
                  }),
                ],
              }),
            (0, a.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, a.jsx)("meta", { name: "theme-color", content: "#d7d1c6" }),
            (0, a.jsx)("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1, maximum-scale=1",
            }),
          ],
        });
      };
    },
    6009: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return m;
        },
      });
      var a = r(5893),
        s = r(8266),
        n = r(7294),
        l = r(6038),
        i = r(4347),
        o = r.n(i),
        c = r(1831),
        d = () =>
          (0, a.jsxs)("svg", {
            width: "286",
            height: "286",
            viewBox: "0 0 286 286",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, a.jsxs)("g", {
                clipPath: "url(#clip0_4489_62323)",
                children: [
                  (0, a.jsxs)("mask", {
                    id: "mask0_4489_62323",
                    style: { maskType: "alpha" },
                    maskUnits: "userSpaceOnUse",
                    x: "18",
                    y: "-49",
                    width: "271",
                    height: "203",
                    children: [
                      (0, a.jsx)("rect", {
                        x: "224",
                        y: "14.5488",
                        width: "194.476",
                        height: "73.7032",
                        transform: "rotate(149.564 224 14.5488)",
                        fill: "url(#paint0_linear_4489_62323)",
                      }),
                      (0, a.jsx)("rect", {
                        x: "167",
                        y: "-19",
                        width: "122",
                        height: "173",
                        fill: "#D9D9D9",
                      }),
                    ],
                  }),
                  (0, a.jsx)("g", {
                    mask: "url(#mask0_4489_62323)",
                    children: (0, a.jsx)("path", {
                      opacity: "0.15",
                      d: "M20.6185 72.2329C36.1479 45.2009 60.1697 24.0541 88.9524 12.0774C117.735 0.100734 149.667 -2.0354 179.789 6.00087C209.91 14.0371 236.535 31.7959 255.526 56.5185C274.518 81.2412 284.813 111.544 284.813 142.719",
                      stroke: "#575349",
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)("defs", {
                children: [
                  (0, a.jsxs)("linearGradient", {
                    id: "paint0_linear_4489_62323",
                    x1: "418.476",
                    y1: "88.252",
                    x2: "224",
                    y2: "88.252",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, a.jsx)("stop", {
                        stopColor: "#F2EFE9",
                        stopOpacity: "0",
                      }),
                      (0, a.jsx)("stop", { offset: "1", stopColor: "#F2EFE9" }),
                    ],
                  }),
                  (0, a.jsx)("clipPath", {
                    id: "clip0_4489_62323",
                    children: (0, a.jsx)("rect", {
                      width: "286",
                      height: "286",
                      fill: "white",
                    }),
                  }),
                ],
              }),
            ],
          }),
        u = r(4319),
        h = r(6546),
        p = r(4508),
        m = (e) => {
          let {
              index: t,
              slicesLength: r = 1,
              simple: i = !1,
              children: m,
            } = e,
            f = (0, n.useRef)(),
            x = (0, n.useRef)(),
            w = (0, n.useRef)(),
            g = (0, n.useRef)(),
            j = (0, n.useRef)(),
            C = (0, n.useRef)(),
            v = (0, n.useRef)(),
            y = (0, n.useRef)(),
            _ = (0, n.useRef)(),
            b = (0, n.useRef)(),
            N = (0, n.useRef)(0),
            L = (0, p.LZ)(),
            A = (0, s.o)((e) => e.startTransition),
            E = (0, s.o)((e) => e.setIsAppear),
            R = (0, s.o)((e) => e.isLoaded),
            k = (0, s.o)((e) => e.isFirstLoaded),
            T = (0, s.o)((e) => e.setCursorHidden),
            P = () => {
              y.current &&
                l.p8.set(y.current, {
                  x: window.innerWidth / 2 - 42 - 5,
                  y: window.innerHeight / 2 - 40.5,
                  transformOrigin: "center",
                  rotate: -90,
                  scale: 0,
                });
            },
            S = function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = document.querySelector(".fade");
              t.classList.remove("opacity-0");
              let r = l.p8.timeline({
                delay: e ? 0.5 : 0.2,
                onStart: () => {
                  if (e) {
                    let e = document.querySelector(".loader");
                    e && l.p8.set(e, { autoAlpha: 0 });
                  }
                },
                onComplete: () => {
                  window.dispatchEvent(new CustomEvent("is-appeared")),
                    L && L.start(),
                    h.ScrollTrigger.refresh();
                },
              });
              r.fromTo(
                t,
                { autoAlpha: 1 },
                { autoAlpha: 0, duration: 0.4, ease: "power2.out" },
                0,
              ).call(
                () => {
                  E(!0);
                },
                [],
                0,
              );
            },
            M = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              P();
              let t = document.querySelector(".fade"),
                r = document.querySelector(".loader");
              v.current && v.current.classList.remove("hidden");
              let a = window.innerWidth / 83,
                s = window.innerHeight / 80,
                n = w.current.querySelectorAll("path"),
                i = l.p8.timeline({
                  delay: 0.1,
                  onStart: () => {
                    l.p8.set([t, r], { autoAlpha: 0 }), T(!0);
                  },
                  onComplete: () => {
                    window.dispatchEvent(new CustomEvent("is-appeared")),
                      L && L.start(),
                      h.ScrollTrigger.refresh(),
                      e &&
                        window.dispatchEvent(
                          new CustomEvent("introduction-complete"),
                        ),
                      x.current && (x.current.style.clipPath = null),
                      v.current && v.current.classList.add("hidden"),
                      _.current && _.current.classList.add("hidden");
                  },
                });
              i.addLabel("start", 0),
                e &&
                  i.fromTo(
                    N,
                    { current: 0 },
                    {
                      current: 100,
                      ease: "linear",
                      duration: 2.5,
                      onUpdate: () => {
                        b.current.innerHTML =
                          N.current < 100
                            ? "0" + Math.round(N.current)
                            : Math.round(N.current);
                      },
                    },
                    0,
                  ),
                i
                  .fromTo(
                    w.current,
                    { rotate: 120, autoAlpha: 0, scale: 0.2 },
                    {
                      rotate: 0,
                      scale: 1,
                      autoAlpha: 1,
                      ease: "expo.out",
                      duration: 1.9,
                    },
                    "start",
                  )
                  .fromTo(
                    n,
                    { scale: 0.1 },
                    { scale: 1, ease: "expo.out", duration: 0.95 },
                    "start+=0.12",
                  )
                  .fromTo(
                    g.current,
                    { scale: 0.45, autoAlpha: 0 },
                    { scale: 1, autoAlpha: 1, ease: "power2.out", duration: 2 },
                    "start",
                  )
                  .fromTo(
                    g.current,
                    { autoAlpha: 0 },
                    { autoAlpha: 1, ease: "power2.out", duration: 1.2 },
                    "start",
                  ),
                i
                  .fromTo(
                    y.current,
                    { rotate: -90, scale: 0 },
                    {
                      scale: (a > s ? a : s) + 8,
                      rotate: "+=70",
                      duration: 2,
                      ease: "beaucoup.intro",
                    },
                    e ? "start+=2.7" : "start+=1.5",
                  )
                  .to(
                    [g.current, w.current],
                    { autoAlpha: 0, ease: "power2.out", duration: 0.4 },
                    "<30%",
                  )
                  .call(
                    () => {
                      E(!0);
                    },
                    [],
                    e ? "start+=3.1" : "start+=1.9",
                  );
              let o = l.p8.timeline({ delay: 0.1 });
              e
                ? o
                    .to(
                      j.current,
                      {
                        rotate: "+=360",
                        repeat: 2,
                        ease: "slow(0.2, 0.67)",
                        repeatRefresh: !0,
                        duration: 2.2,
                      },
                      0,
                    )
                    .fromTo(
                      C.current,
                      { rotate: -80 },
                      {
                        rotate: "+=360",
                        repeatRefresh: !0,
                        ease: "slow(0.05, 0.6)",
                        repeat: 2,
                        duration: 2.4,
                      },
                      0.12,
                    )
                : o
                    .to(
                      j.current,
                      {
                        rotate: "+=360",
                        repeat: 2,
                        ease: "slow(0.2, 0.67)",
                        repeatRefresh: !0,
                        duration: 1.9,
                      },
                      0,
                    )
                    .fromTo(
                      C.current,
                      { rotate: -80 },
                      {
                        rotate: "+=360",
                        repeatRefresh: !0,
                        ease: "slow(0.05, 0.6)",
                        repeat: 2,
                        duration: 2.1,
                      },
                      0.12,
                    );
            };
          return (
            (0, n.useEffect)(() => {
              l.p8.registerPlugin(u.SlowMo),
                l.p8.registerPlugin(o()),
                o().create("beaucoup.intro", "0.89, 0.12, 0.21, 1.00"),
                k && _.current && _.current.classList.add("hidden");
            }, []),
            (0, n.useEffect)(() => {
              R && !k ? (L && L.stop(), f.current ? S(!0) : M(!0)) : R || P();
            }, [R, k]),
            (0, n.useEffect)(() => {
              if (f.current) {
                S();
                return;
              }
              A && M();
            }, [A]),
            0 !== t || i
              ? (0, a.jsx)("div", {
                  ref: f,
                  className: "simple-transition-path",
                  children: m,
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                      children: (0, a.jsx)("div", {
                        ref: w,
                        className: "svg-wrapper w-[4.267rem]",
                        children: (0, a.jsxs)("svg", {
                          width: "56",
                          height: "50",
                          viewBox: "0 0 56 50",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, a.jsx)("path", {
                              d: "M40.565 15.0573C36.9268 17.6142 32.6423 19.102 28.1985 19.3514H27.9062C23.4275 19.0849 19.1111 17.5827 15.4385 15.0125C12.5943 13.1513 8.90682 10.3484 9.23285 6.43554C9.45769 3.74473 12.3919 2.42176 14.5842 1.74906C15.506 1.46877 16.4391 1.23332 17.3722 1.04272C24.0175 -0.257846 30.8455 -0.333841 37.5183 0.818491H37.6082C38.6313 1.00909 39.6543 1.23332 40.6886 1.5024L41.543 1.74906C43.7353 2.42176 46.6695 3.74473 46.8943 6.43554C47.2316 10.3484 43.3305 13.1626 40.4862 15.0573H40.565Z",
                              fill: "#D7D1C6",
                            }),
                            (0, a.jsx)("path", {
                              d: "M12.5493 17.6362C16.7717 19.4085 20.4376 22.2821 23.162 25.9552L23.2407 26.0674L23.3306 26.2019C25.6353 29.8457 26.2311 34.4761 26.2536 38.8263C26.2536 42.2458 25.6353 47.1453 22.5661 48.7822C20.194 50.0267 17.5071 48.3113 15.7533 46.8202C15.0226 46.2035 14.3143 45.5421 13.6398 44.8581C8.91013 39.9371 5.10259 34.2109 2.39755 27.9509V27.8724C1.99283 26.9082 1.61059 25.9216 1.27333 24.9013C1.18339 24.621 1.09347 24.3296 1.01478 24.0381C0.362728 21.7957 -0.109461 18.6228 1.94787 16.9523C5.00576 14.5193 9.50266 16.2571 12.6055 17.6362H12.5493Z",
                              fill: "#D7D1C6",
                            }),
                            (0, a.jsx)("path", {
                              d: "M43.6228 17.6362C39.3954 19.4053 35.725 22.2794 32.9988 25.9552L32.9202 26.0674L32.8302 26.2019C30.5256 29.8457 29.9297 34.4761 29.9072 38.8263C29.9072 42.2458 30.5255 47.1453 33.5947 48.7822C35.9668 50.0267 38.6537 48.3113 40.4075 46.8202C41.1382 46.2035 41.8465 45.5421 42.521 44.8581C47.2549 39.9404 51.0629 34.2135 53.7633 27.9509V27.8724C54.168 26.9082 54.5502 25.9216 54.8875 24.9013L55.1573 24.0381C55.8094 21.7957 56.2815 18.6228 54.213 16.9523C51.1551 14.5193 46.6582 16.2571 43.5666 17.6362H43.6228Z",
                              fill: "#D7D1C6",
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      ref: g,
                      className:
                        "absolute top-1/2 left-1/2 w-[28.4rem] h-[28.4rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "absolute w-full h-full",
                          ref: j,
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
                              children: (0, a.jsx)(c.Z, { color: "#A39B8B" }),
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
                              children: (0, a.jsx)(d, {}),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "absolute w-full h-full rounded-full",
                          ref: C,
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
                              children: (0, a.jsx)(c.Z, { color: "#A39B8B" }),
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
                              children: (0, a.jsx)(d, {}),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      ref: _,
                      className:
                        "absolute left-1/2 bottom-[3.5rem] -translate-x-1/2 text-10 leading-[1.8rem] tracking-[0.05rem] font-body-mono text-dark_grey",
                      children: [
                        (0, a.jsx)("span", { ref: b, children: "000" }),
                        (0, a.jsx)("span", { children: "/" }),
                        (0, a.jsx)("span", { children: "100" }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      style: {
                        clipPath: "url(#svgPath)",
                        backfaceVisibility: "hidden",
                        transform: "translate3d(0, 0, 0)",
                        zIndex: r - t,
                      },
                      ref: x,
                      className: "transition-path relative",
                      children: [
                        (0, a.jsx)("div", {
                          className:
                            "absolute top-0 left-0 w-full h-screen pointer-events-none",
                          children: (0, a.jsx)("div", {
                            ref: v,
                            className:
                              "absolute top-0 left-0 w-full h-full hidden z-1",
                            children: (0, a.jsx)("svg", {
                              width: "84",
                              height: "81",
                              className: "w-full h-full",
                              children: (0, a.jsx)("defs", {
                                children: (0, a.jsx)("clipPath", {
                                  id: "svgPath",
                                  children: (0, a.jsx)("path", {
                                    ref: y,
                                    d: "M79.4794 63.3751C60.1831 81.0548 4.91108 83.8741 0.832418 57.5147C-4.41761 23.5849 23.6769 -1.01793 45.0967 5.07786C76.8979 14.1281 91.9353 51.9624 79.4794 63.3751Z",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        m,
                      ],
                    }),
                  ],
                })
          );
        };
    },
  },
]);
