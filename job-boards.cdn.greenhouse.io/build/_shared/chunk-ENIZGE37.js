import { p as u } from "https://job-boards.cdn.greenhouse.io/build/_shared/chunk-N4MC5J4H.js";
function n(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return t;
}
function r(t, e) {
  return (
    (r = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (f, p) {
          return (f.__proto__ = p), f;
        }),
    r(t, e)
  );
}
function y(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  (t.prototype = Object.create(e && e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(t, "prototype", { writable: !1 }),
    e && r(t, e);
}
function c(t, e) {
  if (e && (u(e) === "object" || typeof e == "function")) return e;
  if (e !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined",
    );
  return n(t);
}
function i(t) {
  return (
    (i = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        }),
    i(t)
  );
}
function d(t) {
  if (
    (typeof Symbol < "u" && t[Symbol.iterator] != null) ||
    t["@@iterator"] != null
  )
    return Array.from(t);
}
export { n as a, y as b, c, i as d, d as e };
//# sourceMappingURL=https://job-boards.cdn.greenhouse.io/build/_shared/chunk-ENIZGE37.js.map
