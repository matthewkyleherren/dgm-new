(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [480],
  {
    4319: function (e, t) {
      !(function (e) {
        "use strict";
        /*!
         * EasePack 3.12.2
         * https://greensock.com
         *
         * @license Copyright 2008-2023, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var t,
          r,
          n = function () {
            return (
              t ||
              ("undefined" != typeof window &&
                (t = window.gsap) &&
                t.registerPlugin &&
                t)
            );
          },
          a = function (e, t) {
            return !!(void 0 === e ? t : e && !~(e + "").indexOf("false"));
          },
          s = function (e) {
            if ((t = e || n())) {
              r = t.registerEase;
              var a,
                s = t.parseEase(),
                o = function (e) {
                  return function (t) {
                    var r = 0.5 + t / 2;
                    e.config = function (t) {
                      return e(2 * (1 - t) * t * r + t * t);
                    };
                  };
                };
              for (a in s) s[a].config || o(s[a]);
              for (a in (r("slow", u), r("expoScale", d), r("rough", f), p))
                "version" !== a && t.core.globals(a, p[a]);
            }
          },
          o = function (e, t, r) {
            var n =
                (e = Math.min(1, e || 0.7)) < 1 ? (t || 0 === t ? t : 0.7) : 0,
              s = (1 - e) / 2,
              o = s + e,
              l = a(r);
            return function (e) {
              var t = e + (0.5 - e) * n;
              return e < s
                ? l
                  ? 1 - (e = 1 - e / s) * e
                  : t - (e = 1 - e / s) * e * e * e * t
                : e > o
                  ? l
                    ? 1 === e
                      ? 0
                      : 1 - (e = (e - o) / s) * e
                    : t + (e - t) * (e = (e - o) / s) * e * e * e
                  : l
                    ? 1
                    : t;
            };
          },
          l = function (e, r, n) {
            var a = Math.log(r / e),
              s = r - e;
            return (
              n && (n = t.parseEase(n)),
              function (t) {
                return (e * Math.exp(a * (n ? n(t) : t)) - e) / s;
              }
            );
          },
          i = function (e, t, r) {
            (this.t = e),
              (this.v = t),
              r &&
                ((this.next = r),
                (r.prev = this),
                (this.c = r.v - t),
                (this.gap = r.t - e));
          },
          c = function (e) {
            "object" != typeof e && (e = { points: +e || 20 });
            for (
              var r,
                n,
                s,
                o,
                l,
                c,
                u,
                d = e.taper || "none",
                f = [],
                p = 0,
                h = 0 | (+e.points || 20),
                m = h,
                x = a(e.randomize, !0),
                g = a(e.clamp),
                w = t ? t.parseEase(e.template) : 0,
                v = 0.4 * (+e.strength || 1);
              --m > -1;

            )
              (r = x ? Math.random() : (1 / h) * m),
                (n = w ? w(r) : r),
                (s =
                  "none" === d
                    ? v
                    : "out" === d
                      ? (o = 1 - r) * o * v
                      : "in" === d
                        ? r * r * v
                        : r < 0.5
                          ? (o = 2 * r) * o * 0.5 * v
                          : (o = (1 - r) * 2) * o * 0.5 * v),
                x
                  ? (n += Math.random() * s - 0.5 * s)
                  : m % 2
                    ? (n += 0.5 * s)
                    : (n -= 0.5 * s),
                g && (n > 1 ? (n = 1) : n < 0 && (n = 0)),
                (f[p++] = { x: r, y: n });
            for (
              f.sort(function (e, t) {
                return e.x - t.x;
              }),
                c = new i(1, 1, null),
                m = h;
              m--;

            )
              (l = f[m]), (c = new i(l.x, l.y, c));
            return (
              (u = new i(0, 0, c.t ? c : c.next)),
              function (e) {
                var t = u;
                if (e > t.t) {
                  for (; t.next && e >= t.t; ) t = t.next;
                  t = t.prev;
                } else for (; t.prev && e <= t.t; ) t = t.prev;
                return (u = t), t.v + ((e - t.t) / t.gap) * t.c;
              }
            );
          },
          u = o(0.7);
        (u.ease = u), (u.config = o);
        var d = l(1, 2);
        d.config = l;
        var f = c();
        (f.ease = f), (f.config = c);
        var p = { SlowMo: u, RoughEase: f, ExpoScaleEase: d };
        for (var h in p) (p[h].register = s), (p[h].version = "3.12.2");
        n() && t.registerPlugin(u),
          (e.EasePack = p),
          (e.ExpoScaleEase = d),
          (e.RoughEase = f),
          (e.SlowMo = u),
          (e.default = p),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(t);
    },
    1030: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/post/[uid]",
        function () {
          return r(4326);
        },
      ]);
    },
    6892: function (e, t, r) {
      "use strict";
      var n = r(5893),
        a = r(7294),
        s = r(6546),
        o = r(8266),
        l = r(2099);
      t.Z = (e) => {
        let { children: t, sticky: r = !1, zIndex: i = 0 } = e,
          c = (0, a.useRef)(null),
          u = (0, a.useRef)(null),
          d = (0, o.o)((e) => e.headerLoaded),
          f = (0, o.o)((e) => e.setHeaderDark);
        return (
          (0, a.useEffect)(() => {
            if (!d) return;
            let e = document.querySelector(".header");
            return (
              r
                ? (u.current = s.ScrollTrigger.create({
                    trigger: c.current,
                    start: () =>
                      "top+="
                        .concat(window.innerHeight, " top+=")
                        .concat(e.getBoundingClientRect().bottom),
                    end: () =>
                      "bottom-="
                        .concat((0, l.z6)(10), " top+=")
                        .concat(e.getBoundingClientRect().bottom),
                    onEnter: () => {
                      f(!0);
                    },
                    onLeave: () => {
                      f(!1);
                    },
                    onEnterBack: () => {
                      f(!0);
                    },
                    onLeaveBack: () => {
                      f(!1);
                    },
                  }))
                : (u.current = s.ScrollTrigger.create({
                    trigger: c.current,
                    start: () =>
                      "top top+=".concat(e.getBoundingClientRect().bottom),
                    end: () =>
                      "bottom top+=".concat(e.getBoundingClientRect().bottom),
                    onEnter: () => {
                      f(!0);
                    },
                    onLeave: () => {
                      f(!1);
                    },
                    onEnterBack: () => {
                      f(!0);
                    },
                    onLeaveBack: () => {
                      f(!1);
                    },
                  })),
              () => {
                u.current && (u.current.kill(), (u.current = null)), f(!1);
              }
            );
          }, [d]),
          (0, n.jsx)("div", {
            ref: c,
            style: { zIndex: i },
            className: "relative w-full",
            children: t,
          })
        );
      };
    },
    6009: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return h;
        },
      });
      var n = r(5893),
        a = r(8266),
        s = r(7294),
        o = r(6038),
        l = r(4347),
        i = r.n(l),
        c = r(1831),
        u = () =>
          (0, n.jsxs)("svg", {
            width: "286",
            height: "286",
            viewBox: "0 0 286 286",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, n.jsxs)("g", {
                clipPath: "url(#clip0_4489_62323)",
                children: [
                  (0, n.jsxs)("mask", {
                    id: "mask0_4489_62323",
                    style: { maskType: "alpha" },
                    maskUnits: "userSpaceOnUse",
                    x: "18",
                    y: "-49",
                    width: "271",
                    height: "203",
                    children: [
                      (0, n.jsx)("rect", {
                        x: "224",
                        y: "14.5488",
                        width: "194.476",
                        height: "73.7032",
                        transform: "rotate(149.564 224 14.5488)",
                        fill: "url(#paint0_linear_4489_62323)",
                      }),
                      (0, n.jsx)("rect", {
                        x: "167",
                        y: "-19",
                        width: "122",
                        height: "173",
                        fill: "#D9D9D9",
                      }),
                    ],
                  }),
                  (0, n.jsx)("g", {
                    mask: "url(#mask0_4489_62323)",
                    children: (0, n.jsx)("path", {
                      opacity: "0.15",
                      d: "M20.6185 72.2329C36.1479 45.2009 60.1697 24.0541 88.9524 12.0774C117.735 0.100734 149.667 -2.0354 179.789 6.00087C209.91 14.0371 236.535 31.7959 255.526 56.5185C274.518 81.2412 284.813 111.544 284.813 142.719",
                      stroke: "#575349",
                    }),
                  }),
                ],
              }),
              (0, n.jsxs)("defs", {
                children: [
                  (0, n.jsxs)("linearGradient", {
                    id: "paint0_linear_4489_62323",
                    x1: "418.476",
                    y1: "88.252",
                    x2: "224",
                    y2: "88.252",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, n.jsx)("stop", {
                        stopColor: "#F2EFE9",
                        stopOpacity: "0",
                      }),
                      (0, n.jsx)("stop", { offset: "1", stopColor: "#F2EFE9" }),
                    ],
                  }),
                  (0, n.jsx)("clipPath", {
                    id: "clip0_4489_62323",
                    children: (0, n.jsx)("rect", {
                      width: "286",
                      height: "286",
                      fill: "white",
                    }),
                  }),
                ],
              }),
            ],
          }),
        d = r(4319),
        f = r(6546),
        p = r(4508),
        h = (e) => {
          let {
              index: t,
              slicesLength: r = 1,
              simple: l = !1,
              children: h,
            } = e,
            m = (0, s.useRef)(),
            x = (0, s.useRef)(),
            g = (0, s.useRef)(),
            w = (0, s.useRef)(),
            v = (0, s.useRef)(),
            j = (0, s.useRef)(),
            C = (0, s.useRef)(),
            y = (0, s.useRef)(),
            E = (0, s.useRef)(),
            _ = (0, s.useRef)(),
            b = (0, s.useRef)(0),
            N = (0, p.LZ)(),
            R = (0, a.o)((e) => e.startTransition),
            L = (0, a.o)((e) => e.setIsAppear),
            S = (0, a.o)((e) => e.isLoaded),
            k = (0, a.o)((e) => e.isFirstLoaded),
            T = (0, a.o)((e) => e.setCursorHidden),
            M = () => {
              y.current &&
                o.p8.set(y.current, {
                  x: window.innerWidth / 2 - 42 - 5,
                  y: window.innerHeight / 2 - 40.5,
                  transformOrigin: "center",
                  rotate: -90,
                  scale: 0,
                });
            },
            P = function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = document.querySelector(".fade");
              t.classList.remove("opacity-0");
              let r = o.p8.timeline({
                delay: e ? 0.5 : 0.2,
                onStart: () => {
                  if (e) {
                    let e = document.querySelector(".loader");
                    e && o.p8.set(e, { autoAlpha: 0 });
                  }
                },
                onComplete: () => {
                  window.dispatchEvent(new CustomEvent("is-appeared")),
                    N && N.start(),
                    f.ScrollTrigger.refresh();
                },
              });
              r.fromTo(
                t,
                { autoAlpha: 1 },
                { autoAlpha: 0, duration: 0.4, ease: "power2.out" },
                0,
              ).call(
                () => {
                  L(!0);
                },
                [],
                0,
              );
            },
            A = function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              M();
              let t = document.querySelector(".fade"),
                r = document.querySelector(".loader");
              C.current && C.current.classList.remove("hidden");
              let n = window.innerWidth / 83,
                a = window.innerHeight / 80,
                s = g.current.querySelectorAll("path"),
                l = o.p8.timeline({
                  delay: 0.1,
                  onStart: () => {
                    o.p8.set([t, r], { autoAlpha: 0 }), T(!0);
                  },
                  onComplete: () => {
                    window.dispatchEvent(new CustomEvent("is-appeared")),
                      N && N.start(),
                      f.ScrollTrigger.refresh(),
                      e &&
                        window.dispatchEvent(
                          new CustomEvent("introduction-complete"),
                        ),
                      x.current && (x.current.style.clipPath = null),
                      C.current && C.current.classList.add("hidden"),
                      E.current && E.current.classList.add("hidden");
                  },
                });
              l.addLabel("start", 0),
                e &&
                  l.fromTo(
                    b,
                    { current: 0 },
                    {
                      current: 100,
                      ease: "linear",
                      duration: 2.5,
                      onUpdate: () => {
                        _.current.innerHTML =
                          b.current < 100
                            ? "0" + Math.round(b.current)
                            : Math.round(b.current);
                      },
                    },
                    0,
                  ),
                l
                  .fromTo(
                    g.current,
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
                    s,
                    { scale: 0.1 },
                    { scale: 1, ease: "expo.out", duration: 0.95 },
                    "start+=0.12",
                  )
                  .fromTo(
                    w.current,
                    { scale: 0.45, autoAlpha: 0 },
                    { scale: 1, autoAlpha: 1, ease: "power2.out", duration: 2 },
                    "start",
                  )
                  .fromTo(
                    w.current,
                    { autoAlpha: 0 },
                    { autoAlpha: 1, ease: "power2.out", duration: 1.2 },
                    "start",
                  ),
                l
                  .fromTo(
                    y.current,
                    { rotate: -90, scale: 0 },
                    {
                      scale: (n > a ? n : a) + 8,
                      rotate: "+=70",
                      duration: 2,
                      ease: "beaucoup.intro",
                    },
                    e ? "start+=2.7" : "start+=1.5",
                  )
                  .to(
                    [w.current, g.current],
                    { autoAlpha: 0, ease: "power2.out", duration: 0.4 },
                    "<30%",
                  )
                  .call(
                    () => {
                      L(!0);
                    },
                    [],
                    e ? "start+=3.1" : "start+=1.9",
                  );
              let i = o.p8.timeline({ delay: 0.1 });
              e
                ? i
                    .to(
                      v.current,
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
                      j.current,
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
                : i
                    .to(
                      v.current,
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
                      j.current,
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
            (0, s.useEffect)(() => {
              o.p8.registerPlugin(d.SlowMo),
                o.p8.registerPlugin(i()),
                i().create("beaucoup.intro", "0.89, 0.12, 0.21, 1.00"),
                k && E.current && E.current.classList.add("hidden");
            }, []),
            (0, s.useEffect)(() => {
              S && !k ? (N && N.stop(), m.current ? P(!0) : A(!0)) : S || M();
            }, [S, k]),
            (0, s.useEffect)(() => {
              if (m.current) {
                P();
                return;
              }
              R && A();
            }, [R]),
            0 !== t || l
              ? (0, n.jsx)("div", {
                  ref: m,
                  className: "simple-transition-path",
                  children: h,
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)("div", {
                      className:
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                      children: (0, n.jsx)("div", {
                        ref: g,
                        className: "svg-wrapper w-[4.267rem]",
                        children: (0, n.jsxs)("svg", {
                          width: "56",
                          height: "50",
                          viewBox: "0 0 56 50",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            (0, n.jsx)("path", {
                              d: "M40.565 15.0573C36.9268 17.6142 32.6423 19.102 28.1985 19.3514H27.9062C23.4275 19.0849 19.1111 17.5827 15.4385 15.0125C12.5943 13.1513 8.90682 10.3484 9.23285 6.43554C9.45769 3.74473 12.3919 2.42176 14.5842 1.74906C15.506 1.46877 16.4391 1.23332 17.3722 1.04272C24.0175 -0.257846 30.8455 -0.333841 37.5183 0.818491H37.6082C38.6313 1.00909 39.6543 1.23332 40.6886 1.5024L41.543 1.74906C43.7353 2.42176 46.6695 3.74473 46.8943 6.43554C47.2316 10.3484 43.3305 13.1626 40.4862 15.0573H40.565Z",
                              fill: "#D7D1C6",
                            }),
                            (0, n.jsx)("path", {
                              d: "M12.5493 17.6362C16.7717 19.4085 20.4376 22.2821 23.162 25.9552L23.2407 26.0674L23.3306 26.2019C25.6353 29.8457 26.2311 34.4761 26.2536 38.8263C26.2536 42.2458 25.6353 47.1453 22.5661 48.7822C20.194 50.0267 17.5071 48.3113 15.7533 46.8202C15.0226 46.2035 14.3143 45.5421 13.6398 44.8581C8.91013 39.9371 5.10259 34.2109 2.39755 27.9509V27.8724C1.99283 26.9082 1.61059 25.9216 1.27333 24.9013C1.18339 24.621 1.09347 24.3296 1.01478 24.0381C0.362728 21.7957 -0.109461 18.6228 1.94787 16.9523C5.00576 14.5193 9.50266 16.2571 12.6055 17.6362H12.5493Z",
                              fill: "#D7D1C6",
                            }),
                            (0, n.jsx)("path", {
                              d: "M43.6228 17.6362C39.3954 19.4053 35.725 22.2794 32.9988 25.9552L32.9202 26.0674L32.8302 26.2019C30.5256 29.8457 29.9297 34.4761 29.9072 38.8263C29.9072 42.2458 30.5255 47.1453 33.5947 48.7822C35.9668 50.0267 38.6537 48.3113 40.4075 46.8202C41.1382 46.2035 41.8465 45.5421 42.521 44.8581C47.2549 39.9404 51.0629 34.2135 53.7633 27.9509V27.8724C54.168 26.9082 54.5502 25.9216 54.8875 24.9013L55.1573 24.0381C55.8094 21.7957 56.2815 18.6228 54.213 16.9523C51.1551 14.5193 46.6582 16.2571 43.5666 17.6362H43.6228Z",
                              fill: "#D7D1C6",
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, n.jsxs)("div", {
                      ref: w,
                      className:
                        "absolute top-1/2 left-1/2 w-[28.4rem] h-[28.4rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "absolute w-full h-full",
                          ref: v,
                          children: [
                            (0, n.jsx)("div", {
                              className:
                                "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
                              children: (0, n.jsx)(c.Z, { color: "#A39B8B" }),
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
                              children: (0, n.jsx)(u, {}),
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: "absolute w-full h-full rounded-full",
                          ref: j,
                          children: [
                            (0, n.jsx)("div", {
                              className:
                                "absolute left-0 top-1/2 w-[0.7rem] -translate-x-[0.2rem] -translate-y-1/2 rotate-45",
                              children: (0, n.jsx)(c.Z, { color: "#A39B8B" }),
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "absolute top-0 left-0 w-full h-full svg-wrapper rotate-180",
                              children: (0, n.jsx)(u, {}),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      ref: E,
                      className:
                        "absolute left-1/2 bottom-[3.5rem] -translate-x-1/2 text-10 leading-[1.8rem] tracking-[0.05rem] font-body-mono text-dark_grey",
                      children: [
                        (0, n.jsx)("span", { ref: _, children: "000" }),
                        (0, n.jsx)("span", { children: "/" }),
                        (0, n.jsx)("span", { children: "100" }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      style: {
                        clipPath: "url(#svgPath)",
                        backfaceVisibility: "hidden",
                        transform: "translate3d(0, 0, 0)",
                        zIndex: r - t,
                      },
                      ref: x,
                      className: "transition-path relative",
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "absolute top-0 left-0 w-full h-screen pointer-events-none",
                          children: (0, n.jsx)("div", {
                            ref: C,
                            className:
                              "absolute top-0 left-0 w-full h-full hidden z-1",
                            children: (0, n.jsx)("svg", {
                              width: "84",
                              height: "81",
                              className: "w-full h-full",
                              children: (0, n.jsx)("defs", {
                                children: (0, n.jsx)("clipPath", {
                                  id: "svgPath",
                                  children: (0, n.jsx)("path", {
                                    ref: y,
                                    d: "M79.4794 63.3751C60.1831 81.0548 4.91108 83.8741 0.832418 57.5147C-4.41761 23.5849 23.6769 -1.01793 45.0967 5.07786C76.8979 14.1281 91.9353 51.9624 79.4794 63.3751Z",
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        h,
                      ],
                    }),
                  ],
                })
          );
        };
    },
    4326: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return d;
          },
          default: function () {
            return f;
          },
        });
      var n = r(5893),
        a = r(172),
        s = r(7312),
        o = r(284),
        l = r(6582),
        i = r(6132),
        c = r(6009),
        u = r(6892),
        d = !0;
      function f(e) {
        let { page: t, footer: r, tags: d } = e;
        return (0, n.jsx)(u.Z, {
          children: (0, n.jsxs)("article", {
            className: "bg-white post-wrapper",
            children: [
              t && (0, n.jsx)(i.Z, { data: t.data }),
              t &&
                (0, n.jsx)(c.Z, {
                  index: 0,
                  slicesLength: t.data.slices.length,
                  simple: !0,
                  children: (0, n.jsx)("div", {
                    className:
                      "w-full grid grid-cols-12 px-[0.6rem] md:px-container pt-[0.6rem] md:pt-[10rem]",
                    children: (0, n.jsx)("div", {
                      className: "col-span-full md:col-start-2 md:col-end-12",
                      children: (0, n.jsx)(o.Z, { page: t, tags: d }),
                    }),
                  }),
                }),
              (0, n.jsx)("div", {
                className: "grid grid-cols-12 px-[0.6rem] md:px-container",
                children: (0, n.jsx)("div", {
                  className: "col-span-full md:col-start-2 md:col-end-12",
                  children:
                    t &&
                    (0, n.jsx)(a.p, {
                      slices: t.data.slices,
                      components: s.w,
                      context: { isPost: !0 },
                    }),
                }),
              }),
              r && (0, n.jsx)(l.Z, { data: r.data }),
            ],
          }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [204, 979, 774, 888, 179], function () {
      return e((e.s = 1030));
    }),
      (_N_E = e.O());
  },
]);
