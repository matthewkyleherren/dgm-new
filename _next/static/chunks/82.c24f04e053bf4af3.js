"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [82],
  {
    640: function (e, r, t) {
      var n = t(5893),
        a = t(7294),
        i = t(4179),
        l = t(6038);
      let c = (0, a.forwardRef)((e, r) => {
        let { children: c, href: s, target: g, mode: u = "white", ...d } = e,
          m = (0, a.useRef)(null),
          o = (0, a.useRef)(null),
          h = (0, a.useRef)(null);
        (0, a.useImperativeHandle)(r, () => ({ getChars: p, getAnimation: b }));
        let p = () => o.current,
          b = () => y(),
          y = () => ((h.current = l.p8.effects.blink(o.current)), h.current),
          k = () => {
            y();
          };
        return (
          (0, a.useEffect)(
            () => (
              m.current.addEventListener("mouseenter", k),
              () => {
                m.current && m.current.removeEventListener("mouseenter", k);
              }
            ),
            [],
          ),
          (0, a.useEffect)(() => {
            let e = t(8041);
            o.current = new e({ target: m.current, by: "chars" })[0].chars;
          }, []),
          (0, n.jsx)("div", {
            ref: m,
            children: (0, n.jsx)(i.Z, {
              href: s,
              target: g,
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
    8082: function (e, r, t) {
      t.r(r);
      var n = t(5893),
        a = t(640);
      r.default = (e) => {
        let { slice: r, slices: t, index: i } = e;
        return (0, n.jsx)("section", {
          "data-slice-type": r.slice_type,
          "data-slice-variation": r.variation,
          style: { zIndex: t.length - i },
          className:
            "\n        relative -mt-px grid grid-cols-6 lg:grid-cols-12 px-container py-[10rem] md:py-[15rem] lg:py-[19rem] min-h-[66.7rem] lg:h-screen items-center\n        "
              .concat(
                "White" === r.primary.background
                  ? "bg-white"
                  : "Beige light" === r.primary.background
                    ? "bg-light_beige"
                    : "Beige dark" === r.primary.background
                      ? "bg-dark_beige"
                      : "Grey dark" === r.primary.background
                        ? "bg-dark_grey"
                        : "bg-green",
                " \n        ",
              )
              .concat(
                "White" === r.primary.background
                  ? "text-dark_grey"
                  : "Beige light" === r.primary.background
                    ? "text-dark_grey"
                    : "Beige dark" === r.primary.background
                      ? "text-white"
                      : "Grey dark" === r.primary.background
                        ? "text-white"
                        : "text-light_beige",
                "\n      ",
              ),
          children: (0, n.jsxs)("div", {
            className:
              "flex flex-col items-center col-span-full lg:col-start-4 lg:col-end-10",
            children: [
              (0, n.jsx)("h2", {
                className: "w-full heading-56 lg:heading-120 text-center",
                children: r.primary.title,
              }),
              (0, n.jsx)("div", {
                className: "mt-[3.2rem] md:mt-[5.6rem]",
                children: (0, n.jsx)(a.Z, {
                  mode: "light_beige",
                  href: r.primary.button_link.url,
                  target: r.primary.button_link.target,
                  children: r.primary.button_text,
                }),
              }),
            ],
          }),
        });
      };
    },
  },
]);
