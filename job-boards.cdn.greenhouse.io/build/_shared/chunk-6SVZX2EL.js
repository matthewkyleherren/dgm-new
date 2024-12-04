var i = (e) =>
  /\/internal_job_board(\/*)?/.test(e) ||
  /\/preview\/(board|job)(\/*)?/.test(e);
var n = (e) => /\/embed\/(job_app|job_board)/.test(e);
var t = class {
  constructor() {
    this.onMessage = (s) => {
      s.data == "resize" && this.handleResize();
    };
    this.postHeight = (s) => {
      window.parent.postMessage(s, "*");
    };
    this.listenersInitialized = !1;
  }
  static getInstance() {
    return t.instance || (t.instance = new t()), t.instance;
  }
  initListeners() {
    this.listenersInitialized ||
      !this.embedded() ||
      (window.addEventListener("message", this.onMessage),
      (this.listenersInitialized = !0));
  }
  handleResize() {
    this.embedded() && this.postHeight(document.body.scrollHeight);
  }
  embedded() {
    return n((window == null ? void 0 : window.location.pathname) || "");
  }
};
export { i as a, n as b, t as c };
//# sourceMappingURL=https://job-boards.cdn.greenhouse.io/build/_shared/chunk-6SVZX2EL.js.map
