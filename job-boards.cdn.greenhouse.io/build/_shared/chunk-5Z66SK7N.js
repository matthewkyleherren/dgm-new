import { a as c } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-7VVIAXJZ.js";
var p = (r, s = {}, t) =>
    new Promise((i, n) => {
      if (c()) return;
      if (document.querySelector(`script[src="${r}"]`)) return i(!0);
      let e = document.createElement("script");
      (e.type = "text/javascript"),
        (e.src = r),
        (e.async = !0),
        (e.defer = !0),
        (e.onload = () => {
          t == null || t(), i(!0);
        }),
        (e.onerror = () => {
          n(!1);
        }),
        Object.entries(s).forEach(([u, o]) => {
          e.setAttribute(u, o);
        }),
        document.head.appendChild(e);
    }),
  a = p;
export { a };
//# sourceMappingURL=https://job-boards.cdn.greenhouse.io/build/_shared/chunk-5Z66SK7N.js.map
