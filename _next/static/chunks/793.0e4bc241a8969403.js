"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [793],
  {
    6892: function (e, t, a) {
      var r = a(5893),
        n = a(7294),
        l = a(6546),
        o = a(8266),
        c = a(2099);
      t.Z = (e) => {
        let { children: t, sticky: a = !1, zIndex: s = 0 } = e,
          i = (0, n.useRef)(null),
          p = (0, n.useRef)(null),
          d = (0, o.o)((e) => e.headerLoaded),
          u = (0, o.o)((e) => e.setHeaderDark);
        return (
          (0, n.useEffect)(() => {
            if (!d) return;
            let e = document.querySelector(".header");
            return (
              a
                ? (p.current = l.ScrollTrigger.create({
                    trigger: i.current,
                    start: () =>
                      "top+="
                        .concat(window.innerHeight, " top+=")
                        .concat(e.getBoundingClientRect().bottom),
                    end: () =>
                      "bottom-="
                        .concat((0, c.z6)(10), " top+=")
                        .concat(e.getBoundingClientRect().bottom),
                    onEnter: () => {
                      u(!0);
                    },
                    onLeave: () => {
                      u(!1);
                    },
                    onEnterBack: () => {
                      u(!0);
                    },
                    onLeaveBack: () => {
                      u(!1);
                    },
                  }))
                : (p.current = l.ScrollTrigger.create({
                    trigger: i.current,
                    start: () =>
                      "top top+=".concat(e.getBoundingClientRect().bottom),
                    end: () =>
                      "bottom top+=".concat(e.getBoundingClientRect().bottom),
                    onEnter: () => {
                      u(!0);
                    },
                    onLeave: () => {
                      u(!1);
                    },
                    onEnterBack: () => {
                      u(!0);
                    },
                    onLeaveBack: () => {
                      u(!1);
                    },
                  })),
              () => {
                p.current && (p.current.kill(), (p.current = null)), u(!1);
              }
            );
          }, [d]),
          (0, r.jsx)("div", {
            ref: i,
            style: { zIndex: s },
            className: "relative w-full",
            children: t,
          })
        );
      };
    },
    6793: function (e, t, a) {
      a.r(t);
      var r = a(5893),
        n = a(352),
        l = a(7294),
        o = a(6038),
        c = a(6546),
        s = a.n(c),
        i = a(4179),
        p = a(6892),
        d = a(6494);
      let u = (0, l.forwardRef)((e, t) => {
          let { item: a, isLarge: n } = e;
          return (0, r.jsx)("div", {
            ref: t,
            children: (0, r.jsxs)(i.Z, {
              className:
                "flex flex-col gap-y-[2.4rem] lg:gap-y-48 w-full cursor-pointer group",
              href: a.url,
              onClick: (e) => {
                e.preventDefault(),
                  window.dispatchEvent(
                    new CustomEvent("open-popup", {
                      detail: { name: "global", type: "post", uid: a.uid },
                    }),
                  );
              },
              children: [
                (0, r.jsx)("div", {
                  className:
                    "relative h-0 pb-[100%] w-full rounded-18 overflow-hidden",
                  children: (0, r.jsx)("div", {
                    className:
                      "absolute top-0 left-0 w-full h-full xl:group-hover:scale-[1.03] transition-transform duration-500 ease-out",
                    children: (0, r.jsx)(d.Z, {
                      field: a.data.main_image,
                      className: "w-full h-full object-cover",
                      sizes: n
                        ? "(max-width: 768px) 96vw, 47vw"
                        : "(max-width: 768px) 96vw, 24vw",
                      fallbackAlt: "",
                    }),
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: "w-[28rem] px-[0.8rem] lg:px-10",
                  children: [
                    (0, r.jsxs)("div", {
                      className:
                        "mb-[0.4rem] lg:mb-8 flex flex-wrap items-center gap-x-[0.6rem]",
                      children: [
                        (0, r.jsx)("span", {
                          className:
                            "text-dark_grey font-body-mono text-10 leading-[180%] uppercase tracking-0.05",
                          children: a.data.author,
                        }),
                        a.tags.length > 0 &&
                          (0, r.jsx)("span", {
                            className:
                              "w-[0.2rem] h-[0.2rem] rounded-full bg-dark_grey",
                          }),
                        a.tags.map((e, t) =>
                          (0, r.jsx)(
                            "span",
                            {
                              className:
                                "text-dark_grey font-body-mono text-10 leading-[180%] uppercase tracking-0.05",
                              children: e,
                            },
                            "".concat(a.id, "-post-tag-").concat(t),
                          ),
                        ),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className:
                        "font-body text-[1.7rem] lg:text-20 text-dark_grey leading-[141%] lg:leading-[130%] -tracking-0.01 lg:-tracking-0.03",
                      children: a.data.title,
                    }),
                  ],
                }),
              ],
            }),
          });
        }),
        g = (e) => {
          let { isWhite: t, children: a } = e;
          return t ? (0, r.jsx)(p.Z, { children: a }) : a;
        };
      t.default = (e) => {
        let { slice: t, context: a } = e,
          [c, i] = (0, l.useState)("all"),
          [p, d] = (0, l.useState)(!1),
          m = (0, l.useRef)([]),
          f = (0, l.useRef)([]),
          h = (e) => {
            c !== e &&
              (i(e),
              o.ZP.to(f.current, {
                alpha: 0,
                duration: 0.2,
                ease: "power2.out",
                onComplete: () => {
                  if ("all" === e) d(a.posts);
                  else {
                    let t = a.posts.filter((t) => t.tags.includes(e));
                    d(t);
                  }
                },
              }));
          },
          x = (e) => {
            "page-popup-fetching" === e.type &&
              document.body.classList.add("waiting"),
              "page-popup-fetched" === e.type &&
                document.body.classList.remove("waiting");
          };
        return (
          (0, l.useEffect)(() => {
            d(a.posts);
          }, []),
          (0, l.useEffect)(() => {
            s().refresh();
            let e = f.current.filter((e) => null !== e);
            e &&
              e.length > 0 &&
              o.ZP.fromTo(
                e,
                { alpha: 0 },
                {
                  alpha: 1,
                  delay: 0.1,
                  duration: 0.8,
                  ease: "power2.out",
                  stagger: 0.05,
                },
              );
          }, [p]),
          (0, l.useEffect)(
            () => (
              window.addEventListener("page-popup-fetching", x),
              window.addEventListener("page-popup-fetched", x),
              () => {
                window.removeEventListener("page-popup-fetching", x),
                  window.removeEventListener("page-popup-fetched", x);
              }
            ),
            [],
          ),
          (0, r.jsx)(g, {
            isWhite: "White" === t.primary.background_color,
            children: (0, r.jsxs)("section", {
              "data-slice-type": t.slice_type,
              "data-slice-variation": t.variation,
              className: "pb-[14.4rem] lg:pb-[17.2rem] ".concat(
                "White" === t.primary.background_color
                  ? "bg-white"
                  : "bg-light_beige",
              ),
              children: [
                (0, r.jsx)("div", {
                  className: "w-full px-[1.2rem] md:px-container",
                  children: (0, r.jsx)(n.Z, { mode: "dark" }),
                }),
                (0, r.jsxs)("div", {
                  className:
                    "flex gap-x-[1.8rem] mt-12 lg:mt-[2.4rem] overflow-x-auto u-nsb",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "pl-[1.2rem] lg:pl-[2.3rem] font-body-mono font-12 leading-[200%] uppercase tracking-0.03 text-dark_grey cursor-pointer ".concat(
                          "all" === c ? "opacity-100" : "opacity-50",
                        ),
                      onClick: () => h("all"),
                      ref: (e) => (m.current[0] = e),
                      children: "All",
                    }),
                    a.tags &&
                      a.tags.map((e, t) =>
                        (0, r.jsx)(
                          "div",
                          {
                            className:
                              "font-body-mono whitespace-nowrap font-12 leading-[200%] uppercase tracking-0.03 text-dark_grey hover:opacity-100 transition-opacity duration-500 cursor-pointer last-of-type:pr-[1.2rem] lg:last-of-type:pr-[2.3rem] ".concat(
                                c === e ? "opacity-100" : "opacity-50",
                              ),
                            onClick: () => h(e),
                            ref: (e) => (m.current[t + 1] = e),
                            children: e,
                          },
                          "tag-".concat(t),
                        ),
                      ),
                  ],
                }),
                (0, r.jsx)("div", {
                  className:
                    "grid grid-cols-12 gap-x-10 gap-y-48 lg:gap-y-[10.4rem] px-[1.2rem] lg:px-container mt-60 lg:mt-[8rem]",
                  children:
                    p &&
                    p.map((e, t) => {
                      switch (!0) {
                        case t % 8 == 0 || t % 8 == 1 || t % 8 == 2:
                          return (0, r.jsx)(
                            "div",
                            {
                              className: "".concat(
                                t % 8 == 0
                                  ? "col-span-full lg:col-span-6"
                                  : "col-span-full md:col-span-6 lg:col-span-3",
                              ),
                              ref: (e) => (f.current[t] = e),
                              children: (0, r.jsx)(u, {
                                item: e,
                                isLarge: t % 8 == 0,
                              }),
                            },
                            "post-card-".concat(t),
                          );
                        case t % 8 == 3 || t % 8 == 4:
                          return (0, r.jsx)(
                            "div",
                            {
                              className: "col-span-full lg:col-span-6",
                              ref: (e) => (f.current[t] = e),
                              children: (0, r.jsx)(u, { item: e, isLarge: !0 }),
                            },
                            "post-card-".concat(t),
                          );
                        case t % 8 == 5 || t % 8 == 6 || t % 8 == 7:
                          return (0, r.jsx)(
                            "div",
                            {
                              className: "col-span-full ".concat(
                                t % 8 == 7
                                  ? "col-span-full lg:col-span-6"
                                  : "col-span-full md:col-span-6 lg:col-span-3",
                              ),
                              ref: (e) => (f.current[t] = e),
                              children: (0, r.jsx)(u, {
                                item: e,
                                isLarge: t % 8 == 7,
                              }),
                            },
                            "post-card-".concat(t),
                          );
                      }
                    }),
                }),
              ],
            }),
          })
        );
      };
    },
  },
]);
