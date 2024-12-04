"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [111],
  {
    9293: function (e, r, t) {
      var n = t(5893);
      r.Z = (e) => {
        let { stroke: r = "#575349" } = e;
        return (0, n.jsx)("svg", {
          width: "11",
          height: "9",
          viewBox: "0 0 11 9",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, n.jsx)("path", {
            id: "Vector 201",
            d: "M0 4.5H9.5M9.5 4.5L5.9 1M9.5 4.5L5.9 8",
            stroke: r,
          }),
        });
      };
    },
    1111: function (e, r, t) {
      t.r(r);
      var n = t(5893),
        i = t(7294),
        a = t(3470),
        s = t(6038),
        l = t(6494),
        c = t(352),
        d = t(9293),
        u = t(2099);
      r.default = (e) => {
        let { slice: r } = e,
          t = (0, i.useRef)(null),
          o = (0, i.useRef)(null),
          m = (0, i.useRef)([]),
          g = (0, i.useRef)(0),
          h = (0, i.useRef)(4),
          f = (0, i.useRef)(null),
          p = (0, i.useRef)(null),
          x = (0, i.useRef)(null),
          b = (0, i.useRef)([]),
          w = (e) => {
            if (
              ((0, u.RE)(x.current),
              (x.current = s.ZP.timeline()),
              x.current.to(
                m.current,
                { x: -p.current * g.current, ease: "expo.out", duration: 1 },
                0,
              ),
              e > 0)
            ) {
              let e = g.current - 1,
                r = h.current - 1 + g.current;
              (0, u.RE)(b.current[e]),
                (b.current[e] = s.ZP.to(m.current[e], {
                  autoAlpha: 0,
                  ease: "linear",
                  duration: 0.4,
                })),
                (0, u.RE)(b.current[r]),
                (b.current[r] = s.ZP.to(m.current[r], {
                  autoAlpha: 1,
                  ease: "linear",
                  duration: 0.4,
                  delay: 0.15,
                }));
            } else {
              let e = g.current,
                r = h.current + g.current;
              (0, u.RE)(b.current[e]),
                (b.current[e] = s.ZP.to(m.current[e], {
                  autoAlpha: 1,
                  ease: "linear",
                  duration: 0.4,
                  delay: 0.15,
                })),
                (0, u.RE)(b.current[r]),
                (b.current[r] = s.ZP.to(m.current[r], {
                  autoAlpha: 0,
                  ease: "linear",
                  duration: 0.4,
                }));
            }
          },
          v = () => {
            f.current !== window.innerWidth &&
              ((p.current = m.current[0].offsetWidth + (0, u.z6)(10)),
              s.ZP.set(m.current, { x: -p.current * g.current }),
              j()),
              (f.current = window.innerWidth);
          },
          j = () => {
            window.innerWidth < 768
              ? (h.current = 1)
              : window.innerWidth < 1024
                ? (h.current = 3)
                : (h.current = 4);
          };
        return (
          (0, i.useEffect)(() => {
            if (
              ((p.current = m.current[0].offsetWidth + (0, u.z6)(10)),
              (f.current = window.innerWidth),
              j(),
              window.innerWidth >= 768)
            )
              for (let e = h.current; e < m.current.length; e++)
                s.ZP.set(m.current[e], { autoAlpha: 0 });
            return (
              window.addEventListener("resize", v),
              () => {
                window.removeEventListener("resize", v);
              }
            );
          }, []),
          (0, n.jsxs)("section", {
            "data-slice-type": r.slice_type,
            "data-slice-variation": r.variation,
            className:
              "pb-[9rem] md:pb-[18rem] overflow-hidden\n        ".concat(
                "White" === r.primary.background
                  ? "bg-white"
                  : "Beige light" === r.primary.background
                    ? "bg-light_beige"
                    : "Beige dark" === r.primary.background
                      ? "bg-dark_beige"
                      : "Grey dark" === r.primary.background
                        ? "bg-dark_grey"
                        : "bg-green",
                " \n      ",
              ),
            children: [
              (0, n.jsx)("div", {
                className: "w-full px-container-mobile md:px-container",
                children: (0, n.jsx)(c.Z, {
                  mode:
                    ["White", "Beige light"].indexOf(r.primary.background) > -1
                      ? "dark"
                      : "light",
                }),
              }),
              (0, n.jsxs)("div", {
                className:
                  "w-full px-container-mobile md:px-container pt-[2rem] hidden justify-end gap-x-[0.5rem] "
                    .concat(
                      4 === r.items.length ? "md:flex lg:hidden" : "",
                      " ",
                    )
                    .concat(r.items.length < 4 ? "hidden" : "", " ")
                    .concat(r.items.length > 4 ? "md:flex" : ""),
                children: [
                  (0, n.jsx)("div", {
                    ref: t,
                    className:
                      "pager pager-disabled flex justify-center items-center w-[3.6rem] h-[3.6rem] rounded-10 cursor-pointer transition-transform duration-global ease-out xl:hover:scale-[1.05] ".concat(
                        "White" === r.primary.background
                          ? "bg-light_beige"
                          : "bg-white",
                      ),
                    onClick: () => {
                      0 !== g.current &&
                        (t.current.classList.remove("pager-disabled"),
                        o.current.classList.remove("pager-disabled"),
                        (g.current -= 1),
                        0 === g.current &&
                          t.current.classList.add("pager-disabled"),
                        w(-1));
                    },
                    children: (0, n.jsx)("div", {
                      className: "svg-wrapper flex w-[1rem] rotate-180",
                      children: (0, n.jsx)(d.Z, {}),
                    }),
                  }),
                  (0, n.jsx)("div", {
                    ref: o,
                    className:
                      "pager flex justify-center items-center w-[3.6rem] h-[3.6rem] rounded-10 cursor-pointer transition-transform duration-global ease-out xl:hover:scale-[1.05] ".concat(
                        "White" === r.primary.background
                          ? "bg-light_beige"
                          : "bg-white",
                      ),
                    onClick: () => {
                      g.current >= r.items.length - h.current ||
                        (t.current.classList.remove("pager-disabled"),
                        o.current.classList.remove("pager-disabled"),
                        (g.current += 1),
                        g.current >= r.items.length - h.current &&
                          o.current.classList.add("pager-disabled"),
                        w(1));
                    },
                    children: (0, n.jsx)("div", {
                      className: "svg-wrapper flex w-[1rem]",
                      children: (0, n.jsx)(d.Z, {}),
                    }),
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className:
                  "scroll-snap u-nsb px-container-mobile md:px-container w-full flex items-start flex-nowrap gap-x-10 mt-[4rem] md:mt-[6rem] ".concat(
                    r.items.length < 4 ? "justify-center" : "",
                  ),
                children: r.items.map((e, t) =>
                  (0, n.jsxs)(
                    a.f,
                    {
                      field: e.link,
                      ref: (e) => (m.current[t] = e),
                      className:
                        "scroll-snap-inner group basis-[85%] md:basis-[calc(33.333%-0.66rem)] lg:basis-[calc(25%-0.75rem)] shrink-0\n            ".concat(
                          "White" === r.primary.background
                            ? "text-dark_grey"
                            : "Beige light" === r.primary.background
                              ? "text-dark_grey"
                              : ("Beige dark" === r.primary.background ||
                                  r.primary.background,
                                "text-white"),
                          " \n          ",
                        ),
                      children: [
                        (0, n.jsx)("div", {
                          className:
                            "relative w-full h-0 pt-[100%] rounded-18 overflow-hidden",
                          children: (0, n.jsx)("div", {
                            className:
                              "absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-out xl:group-hover:scale-[1.05]",
                            children: (0, n.jsx)(l.Z, {
                              field: e.image,
                              className:
                                "w-full h-full object-cover select-none",
                              loading: "eager",
                              transition: "none",
                            }),
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "flex flex-col mt-[3.6rem] px-10 min-h-[20rem] md:min-h-[21.5rem] lg:min-h-[20rem]",
                          children: [
                            (0, n.jsx)("div", {
                              className: "w-full h-[2rem] mb-20",
                              children: (0, n.jsx)(l.Z, {
                                field: e.logo,
                                className: "w-auto h-full",
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className:
                                "text-18 lg:text-20 leading-[130%] -tracking-[0.06rem] pr-[2.4rem] mb-10",
                              children: e.title,
                            }),
                            e.source &&
                              (0, n.jsx)("div", {
                                className:
                                  "text-14 leading-[2rem] tracking-[0.014rem] opacity-60 mt-auto",
                                children: e.source,
                              }),
                            e.link.url &&
                              (0, n.jsx)("div", {
                                className: "pt-[1.6rem]",
                                children: (0, n.jsx)("div", {
                                  className:
                                    "flex justify-center items-center w-[3.6rem] h-[3.6rem] rounded-10 transition-transform duration-700 ease-out xl:group-hover:scale-[1.1] ".concat(
                                      "White" === r.primary.background
                                        ? "bg-light_beige"
                                        : "bg-white",
                                    ),
                                  children: (0, n.jsx)("div", {
                                    className:
                                      "svg-wrapper flex w-[1rem] -rotate-45",
                                    children: (0, n.jsx)(d.Z, {}),
                                  }),
                                }),
                              }),
                          ],
                        }),
                      ],
                    },
                    "slide-".concat(t),
                  ),
                ),
              }),
            ],
          })
        );
      };
    },
  },
]);
