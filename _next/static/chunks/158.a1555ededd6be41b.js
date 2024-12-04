"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [158],
  {
    640: function (e, t, r) {
      var n = r(5893),
        a = r(7294),
        l = r(4179),
        i = r(6038);
      let c = (0, a.forwardRef)((e, t) => {
        let { children: c, href: o, target: s, mode: d = "white", ...u } = e,
          m = (0, a.useRef)(null),
          g = (0, a.useRef)(null),
          p = (0, a.useRef)(null);
        (0, a.useImperativeHandle)(t, () => ({ getChars: h, getAnimation: f }));
        let h = () => g.current,
          f = () => x(),
          x = () => ((p.current = i.p8.effects.blink(g.current)), p.current),
          v = () => {
            x();
          };
        return (
          (0, a.useEffect)(
            () => (
              m.current.addEventListener("mouseenter", v),
              () => {
                m.current && m.current.removeEventListener("mouseenter", v);
              }
            ),
            [],
          ),
          (0, a.useEffect)(() => {
            let e = r(8041);
            g.current = new e({ target: m.current, by: "chars" })[0].chars;
          }, []),
          (0, n.jsx)("div", {
            ref: m,
            children: (0, n.jsx)(l.Z, {
              href: o,
              target: s,
              className:
                "button-" +
                d +
                " inline-block py-[2.4rem] px-[2.5rem] rounded-[1rem] text-10 leading-[180%] tracking-[0.05rem] uppercase xl:transition-transform xl:duration-global xl:ease-out xl:hover:scale-[1.04]",
              ...u,
              children: c,
            }),
          })
        );
      });
      (c.displayName = "Button"), (t.Z = c);
    },
    6892: function (e, t, r) {
      var n = r(5893),
        a = r(7294),
        l = r(6546),
        i = r(8266),
        c = r(2099);
      t.Z = (e) => {
        let { children: t, sticky: r = !1, zIndex: o = 0 } = e,
          s = (0, a.useRef)(null),
          d = (0, a.useRef)(null),
          u = (0, i.o)((e) => e.headerLoaded),
          m = (0, i.o)((e) => e.setHeaderDark);
        return (
          (0, a.useEffect)(() => {
            if (!u) return;
            let e = document.querySelector(".header");
            return (
              r
                ? (d.current = l.ScrollTrigger.create({
                    trigger: s.current,
                    start: () =>
                      "top+="
                        .concat(window.innerHeight, " top+=")
                        .concat(e.getBoundingClientRect().bottom),
                    end: () =>
                      "bottom-="
                        .concat((0, c.z6)(10), " top+=")
                        .concat(e.getBoundingClientRect().bottom),
                    onEnter: () => {
                      m(!0);
                    },
                    onLeave: () => {
                      m(!1);
                    },
                    onEnterBack: () => {
                      m(!0);
                    },
                    onLeaveBack: () => {
                      m(!1);
                    },
                  }))
                : (d.current = l.ScrollTrigger.create({
                    trigger: s.current,
                    start: () =>
                      "top top+=".concat(e.getBoundingClientRect().bottom),
                    end: () =>
                      "bottom top+=".concat(e.getBoundingClientRect().bottom),
                    onEnter: () => {
                      m(!0);
                    },
                    onLeave: () => {
                      m(!1);
                    },
                    onEnterBack: () => {
                      m(!0);
                    },
                    onLeaveBack: () => {
                      m(!1);
                    },
                  })),
              () => {
                d.current && (d.current.kill(), (d.current = null)), m(!1);
              }
            );
          }, [u]),
          (0, n.jsx)("div", {
            ref: s,
            style: { zIndex: o },
            className: "relative w-full",
            children: t,
          })
        );
      };
    },
    7158: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return o;
          },
        });
      var n = r(5893),
        a = r(640),
        l = r(6494),
        i = r(6892),
        c = () =>
          (0, n.jsx)("svg", {
            width: "2",
            height: "2",
            viewBox: "0 0 2 2",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, n.jsx)("circle", {
              id: "Ellipse 409",
              cx: "1",
              cy: "1",
              r: "1",
              fill: "#575349",
            }),
          }),
        o = (e) => {
          let { slice: t, slices: r, index: o } = e,
            s = new Date(t.primary.article.last_publication_date),
            d =
              (t.primary.article.data.main_image.dimensions.height /
                t.primary.article.data.main_image.dimensions.width) *
              100;
          return (0, n.jsx)(i.Z, {
            zIndex: r.length - o,
            children: (0, n.jsx)("section", {
              "data-slice-type": t.slice_type,
              "data-slice-variation": t.variation,
              style: { zIndex: r.length - o },
              className:
                "\n          relative p-half-container-mobile md:p-half-container xl:h-screen lg:min-h-[650px]\n          ".concat(
                  "White" === t.primary.background
                    ? "bg-white"
                    : "Beige light" === t.primary.background
                      ? "bg-light_beige"
                      : "Beige dark" === t.primary.background
                        ? "bg-dark_beige"
                        : "Grey dark" === t.primary.background
                          ? "bg-dark_grey"
                          : "bg-green",
                  " \n        ",
                ),
              children: (0, n.jsxs)("div", {
                className:
                  "flex items-center justify-center bg-white rounded-15 h-full py-100 lg:py-[15rem] xl:py-0",
                children: [
                  (0, n.jsx)("div", {
                    className:
                      "absolute top-0 right-0 w-full h-full bg-dots bg-size-dots bg-repeat opacity-40 pointer-events-none",
                  }),
                  (0, n.jsxs)("div", {
                    className: "grid grid-cols-12 relative z-1",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "col-start-4 col-end-10 md:col-start-5 md:col-end-9 lg:col-start-6 lg:col-end-8",
                        children: (0, n.jsx)("div", {
                          className:
                            "mx-auto relative rounded-15 overflow-hidden h-0",
                          style: { paddingBottom: "".concat(d, "%") },
                          children: (0, n.jsx)(l.Z, {
                            sizes: "(max-width: 768px) 80vw, 15vw",
                            fallbackAlt: "",
                            className: "object-cover",
                            fill: !0,
                            field: t.primary.article.data.main_image,
                          }),
                        }),
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "col-span-full text-center mt-[2.4rem] flex gap-x-[0.5rem] items-center font-body-mono text-10 uppercase justify-center",
                        children: [
                          (0, n.jsx)("div", { children: "Pebble App" }),
                          (0, n.jsx)("div", {
                            className: "svg-wrapper w-[0.2rem] h-[0.2rem]",
                            children: (0, n.jsx)(c, {}),
                          }),
                          (0, n.jsx)("div", {
                            children: s.toLocaleString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "col-start-2 col-end-12 lg:col-start-4 lg:col-end-10 text-center mt-[2.4rem]",
                        children: (0, n.jsx)("div", {
                          className:
                            "heading-26 md:heading-44 font-medium text-dark_grey",
                          children: t.primary.article.data.title,
                        }),
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "col-span-full mt-32 md:mt-[6rem] text-center",
                        children: (0, n.jsx)(a.Z, {
                          mode: "light_beige",
                          href: t.primary.article.url,
                          onClick: (e) => {
                            e.preventDefault(),
                              window.dispatchEvent(
                                new CustomEvent("open-popup", {
                                  detail: {
                                    name: "global",
                                    type: "post",
                                    uid: t.primary.article.uid,
                                  },
                                }),
                              );
                          },
                          children: t.primary.button_text,
                        }),
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
