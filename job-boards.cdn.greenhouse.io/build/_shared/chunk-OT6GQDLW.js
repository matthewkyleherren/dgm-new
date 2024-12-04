import { a as t } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-5Z66SK7N.js";
import { a as e } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-7VVIAXJZ.js";
import { a as f } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-N4MC5J4H.js";
import { d as u } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-LNKWYQRG.js";
var o = u(f());
var l = async (r) => {
    if (!(e() || !r) && !window.rx)
      try {
        await t(
          "//jsv3.recruitics.com/partner/d056b859-3c00-11e7-8fe9-89f468934c80.js",
        );
      } catch {
        console.error("Failed to load Recruitics");
      }
  },
  i = l;
var n = (r, c = !1) => {
    let [s, a] = (0, o.useState)(!1);
    !s && !c && (i(r), a(!0));
  },
  b = n;
export { b as a };
//# sourceMappingURL=https://job-boards.cdn.greenhouse.io/build/_shared/chunk-OT6GQDLW.js.map
