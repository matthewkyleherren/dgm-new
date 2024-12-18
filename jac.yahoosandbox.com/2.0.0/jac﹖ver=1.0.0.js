/*! JAC 2.0.0, Copyright 2018-2023 Yahoo Inc. */ (() => {
  "use strict";
  const e = class {
    constructor(e, t = {}) {
      (this.type = e), (this.meta = t), (this.target = null);
    }
  };
  class t extends e {
    static SCROLL = "page.scroll";
    static RESIZE = "page.resize";
    static VISIBILITY = "page.visibility";
    static FOCUS = "window.focus";
    static BLUR = "window.blur";
    static FOCUS_IN = "window.focus_in";
    static BLUR_CAPTURE = "window.blur_capture";
    static DOM_LOADED = "dom.loaded";
    static LOADED = "page.loaded";
    static BEFORE_UNLOAD = "page.stopped";
    static MOUSE_OVER = "page.mouse_over";
    static MOUSE_OUT = "page.mouse_out";
  }
  const i = {
    addDOMLoadListener: function (e) {
      if ("loading" !== document.readyState) return e();
      document.addEventListener("DOMContentLoaded", e, !1);
    },
    addPageLoadListener: function (e) {
      if ("complete" === document.readyState) return e();
      window.addEventListener("load", e, !1);
    },
  };
  function s(e, t, i = this) {
    let s = null,
      n = null;
    const o = () => {
      e.apply(i, n), (s = null);
    };
    return (...e) => {
      s || ((n = e), (s = setTimeout(o, t)));
    };
  }
  function n(e, t) {
    if (Array.isArray(t)) {
      if (t.includes(e)) return !0;
    } else
      for (let i in t)
        if (Object.prototype.hasOwnProperty.call(t, i) && t[i] === e) return !0;
    return !1;
  }
  const o = {
    FUNCTION: "function",
    NUMBER: "number",
    OBJECT: "object",
    STRING: "string",
    UNDEFINED: "undefined",
  };
  function r(e) {
    return typeof e !== o.UNDEFINED;
  }
  function a(e, t = 0, i, s) {
    let n = Number.NaN;
    return (
      typeof e === o.NUMBER
        ? (n = e)
        : typeof e === o.STRING &&
          ((n = Number(e)), isNaN(n) && (n = parseFloat(e))),
      isNaN(n) || (r(i) && n < i) || (r(s) && n > s) ? t : n
    );
  }
  const h = {
    isSet: r,
    isFunction: function (e) {
      return typeof e === o.FUNCTION;
    },
    isString: function (e) {
      return typeof e === o.STRING;
    },
    isObject: function (e) {
      return typeof e === o.OBJECT;
    },
    num: a,
    int: function (e, t = 0, i, s) {
      const n = a(e, t, i, s);
      return typeof n !== o.NUMBER || isNaN(n) ? t : Math.round(n);
    },
    isDOMNode: function (e) {
      return e instanceof HTMLElement;
    },
    getRandomInt: function (e, t) {
      return Math.floor(Math.random() * (t - e + 1)) + e;
    },
  };
  function d(...e) {
    try {
      console.log.apply(console, [].slice.call(e));
    } catch (e) {}
  }
  const c = "exists",
    l = "remove",
    g = {
      on(e, t, i) {
        this.eventTypes || (this.eventTypes = {}),
          this.eventTypes[e] || (this.eventTypes[e] = []),
          n(t, this.eventTypes[e]) ||
            (i
              ? this.eventTypes[e].push({ ref: i, handler: t })
              : this.eventTypes[e].push(t));
      },
      off(e, t, i) {
        this.eventTypes &&
          Array.isArray(this.eventTypes[e]) &&
          this._validateOrRemove.call(this, e, t, i, l);
      },
      hasEventListener(e, t, i) {
        return (
          !(!this.eventTypes || !Array.isArray(this.eventTypes[e])) &&
          this._validateOrRemove.call(this, e, t, i, c)
        );
      },
      trigger(e) {
        if (
          this.eventTypes &&
          typeof e === o.OBJECT &&
          typeof e.type === o.STRING &&
          this.eventTypes[e.type]
        ) {
          e.target = e.target || this;
          let t = this.eventTypes[e.type].slice(0);
          for (let i = 0; i < t.length; i++) {
            const s = t[i];
            if (typeof s === o.OBJECT)
              try {
                s.handler.call(s.ref, e);
              } catch (t) {
                d("Error calling callback", s, e, t);
              }
            else
              try {
                s(e);
              } catch (t) {
                d("Error calling callback", e, t);
              }
          }
        }
      },
      _validateOrRemove(e, t, i, s) {
        for (let n = 0; n < this.eventTypes[e].length; n++) {
          let r = this.eventTypes[e][n],
            a = i ? o.OBJECT : o.FUNCTION;
          if (a === typeof r)
            switch (a) {
              case o.FUNCTION:
                if (r === t)
                  return s === l && this.eventTypes[e].splice(n, 1), !0;
                break;
              case o.OBJECT:
                if (r.handler === t && r.ref === i)
                  return s === l && this.eventTypes[e].splice(n, 1), !0;
            }
        }
        return !1;
      },
    };
  class E {
    #e = !1;
    #t = !1;
    #i = !1;
    #s;
    #n;
    constructor(e = { throttleTime: 200 }) {
      i.addDOMLoadListener(() => {
        (this.#e = !0), this.trigger(new t(t.DOM_LOADED));
      }),
        i.addPageLoadListener(() => {
          (this.#t = !0),
            (this.#n = new Date().getTime()),
            this.trigger(new t(t.LOADED, { timestamp: this.#n }));
        });
      const n = e.throttleTime;
      window.addEventListener(
        "scroll",
        s(() => this.dispatchViewportEvent(t.SCROLL), n),
        !0,
      ),
        window.addEventListener(
          "resize",
          s(() => this.dispatchViewportEvent(t.RESIZE), n),
        ),
        document.addEventListener("visibilitychange", () =>
          this.dispatchVisibilityChange(),
        ),
        (this.#i = !window.document.hidden),
        window.addEventListener("focus", (e) =>
          this.dispatchFocusChange(!0, e),
        ),
        window.addEventListener("blur", (e) => this.dispatchFocusChange(!1, e)),
        (this.#s = document.hasFocus()),
        window.addEventListener("beforeunload", () =>
          this.trigger(new t(t.BEFORE_UNLOAD)),
        ),
        window.document.addEventListener("mouseover", (e) =>
          this.trigger(new t(t.MOUSE_OVER, { nativeEvent: e })),
        ),
        window.document.addEventListener("mouseout", (e) =>
          this.trigger(new t(t.MOUSE_OUT, { nativeEvent: e })),
        ),
        window.addEventListener("focusin", (e) =>
          this.trigger(new t(t.FOCUS_IN, { nativeEvent: e })),
        ),
        window.addEventListener(
          "blur",
          (e) => this.trigger(new t(t.BLUR_CAPTURE, { nativeEvent: e })),
          !0,
        );
    }
    on = function (e, i, s) {
      Object.getPrototypeOf(this).on.call(this, e, i, s);
      let n,
        o = !1;
      if (
        (((e === t.DOM_LOADED && this.domLoaded) ||
          (e === t.LOADED && this.pageLoaded) ||
          e === t.VISIBILITY) &&
          (o = !0),
        o)
      )
        if (
          ((n =
            e === t.VISIBILITY
              ? new t(t.VISIBILITY, { hidden: !!window.document.hidden })
              : e === t.DOM_LOADED
                ? new t(t.DOM_LOADED)
                : new t(t.LOADED, { timestamp: this.#n })),
          s)
        )
          try {
            i.call(s, n);
          } catch (e) {
            d("Error calling callback", i, event);
          }
        else i(n);
    };
    dispatchViewportEvent(e) {
      this.trigger(new t(e));
    }
    dispatchVisibilityChange() {
      (this.#i = !window.document.hidden),
        this.trigger(new t(t.VISIBILITY, { hidden: !this.#i }));
    }
    dispatchFocusChange(e, i) {
      if (this.#s !== e) {
        this.#s = e;
        const s = e ? t.FOCUS : t.BLUR;
        this.trigger(new t(s, { nativeEvent: i }));
      }
    }
    get domLoaded() {
      return this.#e;
    }
    get pageLoaded() {
      return this.#t;
    }
    get isVisible() {
      return this.#i;
    }
    get hasFocus() {
      return this.#s;
    }
    _reset() {
      (this.#e = !1), (this.#t = !1);
    }
  }
  Object.assign(E.prototype, g);
  const m = E,
    u = "jac.sandbox";
  class p {
    static topic = {
      WRITE_COMPLETE: `${u}.writeComplete`,
      PAGE_LOAD: `${u}.pageLoad`,
      SIZE: `${u}.size`,
    };
    constructor({ topic: e, meta: t = {} }) {
      (this.topic = e), (this.meta = t);
    }
  }
  class f extends p {
    static topic = { SAFE_FRAME: "jac.sandbox.sf" };
    static cmd = {
      EXPAND_OVER: "exp-ovr",
      EXPAND_PUSH: "exp-push",
      RESIZE_TO: "resize-to",
      COLLAPSE: "collapse",
      READ_COOKIE: "read-cookie",
      WRITE_COOKIE: "write-cookie",
      MSG: "msg",
      HIDE: "hide",
      SHOW: "show",
    };
    static status = {
      COLLAPSED: "collapsed",
      COLLAPSING: "collapsing",
      EXPANDED: "expanded",
      EXPANDING: "expanding",
      RESIZE_TO: "resize-to",
      GEOMETRY_UPDATE: "geom-update",
      FOCUS_CHANGE: "focus-change",
      READ_COOKIE: "read-cookie",
      WRITE_COOKIE: "write-cookie",
      FAILED: "failed",
      CMP: "cmp",
      MSG: "msg",
      META_UPDATE: "meta-update",
      HIDE: "hide",
      SHOW: "show",
      REGISTER: "register",
    };
    constructor({ cmd: e = null, status: t = null, meta: i = {} }) {
      super({ topic: f.topic.SAFE_FRAME, meta: i }),
        (this.cmd = e),
        (this.status = t);
    }
  }
  class _ extends e {
    constructor(e) {
      super(e.topic), (this.message = e);
    }
  }
  class O {
    #o;
    #r;
    constructor(e, t) {
      (this.#o = t), (this.targetWindow = e);
    }
    send(e) {
      this.targetWindow.postMessage(Object.assign({ token: this.#o }, e), "*");
    }
    listen() {
      this.#r ||
        ((this.#r = (e) => this._handlePostMessage(e)),
        window.addEventListener("message", this.#r));
    }
    cleanup() {
      window.removeEventListener("message", this.#r), (this.#r = null);
    }
    _handlePostMessage(e) {
      if (this._shouldReadPostMessage(e)) {
        const t = new (e.data.topic === f.topic.SAFE_FRAME ? f : p)(e.data),
          i = new _(t);
        this.trigger(i);
      }
    }
    _shouldReadPostMessage(e) {
      return (
        e.source === this.targetWindow &&
        e.data &&
        e.data.token === this.#o &&
        e.data.topic
      );
    }
  }
  Object.assign(O.prototype, g);
  const A = O,
    S = {
      fromSafeFrameConfigToCmdSupportMap(e = {}) {
        const t = e.features || {};
        return {
          "exp-ovr": !(!t.expandOver || !t.expandOver.enabled),
          "exp-push": !(!t.expandPush || !t.expandPush.enabled),
          "read-cookie": !(!t.cookies || !t.cookies.read),
          "write-cookie": !(!t.cookies || !t.cookies.write),
          "resize-to": !(!t.resize || !t.resize.enabled),
        };
      },
    };
  const C = {
      setStyles: function (e, t) {
        Object.keys(t).forEach((i) => {
          void 0 !== t[i] && (e.style[i] = t[i]);
        });
      },
      getComputedStyle: function (e, t = null, i = window) {
        const s = i.getComputedStyle(e);
        return t ? s.getPropertyValue(t) : s;
      },
    },
    w = "hidden",
    D = "scroll",
    T = "auto";
  function I(e = !1, t = window) {
    const i = t.document.documentElement,
      s = t.innerWidth || i.clientWidth || 0,
      n = t.innerHeight || i.clientHeight || 0;
    if (!e) return { width: s, height: n };
    const o = t.screenLeft || t.screenX || 0,
      r = o + s,
      a = t.screenTop || t.screenY || 0;
    return { top: a, left: o, bottom: a + n, right: r, width: s, height: n };
  }
  function R(e, t = window) {
    let {
      left: i,
      right: s,
      top: n,
      bottom: o,
    } = e.getBoundingClientRect() || {};
    e === t.document.body && o < t.innerHeight && (o = t.innerHeight),
      e === t.document.body && s < t.innerWidth && (s = t.innerWidth);
    return {
      left: i,
      right: s,
      top: n,
      bottom: o,
      width: s - i,
      height: o - n,
      zIndex: C.getComputedStyle(e, "z-index", t),
    };
  }
  function b(e = window) {
    const t = e.document;
    return (function (e = document) {
      return "CSS1Compat" === e.compatMode && e.documentElement;
    })(t)
      ? t.documentElement
      : t.body;
  }
  const N = {
    getWindowGeometry: I,
    getElementGeometry: R,
    getVisibilityMetrics: function (e, t = window) {
      const { width: i, height: s } = I(!1, t),
        n = R(e, t),
        o = n.width * n.height;
      (n.width = n.width || 1), (n.height = n.height || 1);
      const r = n.top > n.bottom;
      let a, h;
      if (n.right <= 0 || n.left > i) a = 0;
      else {
        const e = Math.max(-n.left, 0),
          t = Math.max(n.right - i, 0);
        a = n.width - e - t;
      }
      if ((r && n.bottom <= 0) || n.top > s) h = 0;
      else {
        const e = Math.max(-n.top, 0),
          t = Math.max(n.bottom - s, 0);
        h = n.height - e - t;
      }
      const d = (a * h) / (o || 1);
      return {
        containerPixels: o,
        xPercentage: a / n.width,
        yPercentage: h / n.height,
        totalPercentage: Math.min(d, 1),
      };
    },
    isClippingElement: function (e, t = "X", i) {
      const s = (i = i || C.getComputedStyle(e))["overflow" + t],
        n = i.overflow;
      return s === w || s === D || s === T || n === w || n === D || n === T;
    },
    isScrollableElement: function (e, t) {
      const i = (t = t || C.getComputedStyle(e)).overflowX,
        s = t.overflowY,
        n = t.overflow,
        o =
          i === D ||
          n === D ||
          ((i === T || n === T) && e.scrollWidth > e.clientWidth),
        r =
          s === D ||
          n === D ||
          ((s === T || n === T) && e.scrollHeight > e.clientHeight);
      return o || r;
    },
    getPageScrollInfo: function (e = window) {
      const t = b(e);
      return {
        x: Math.max(t.scrollLeft, 0),
        y: Math.max(t.scrollTop, 0),
        w: Math.max(t.scrollWidth, 0),
        h: Math.max(t.scrollHeight, 0),
      };
    },
    getDocumentElement: b,
  };
  let y = 30;
  function v(e = window) {
    e.JAC_DEBUG && (y = 10);
  }
  const L = {
    init(e = window) {
      v(e);
    },
    debug() {
      y <= 10 && console.debug.apply(console, arguments);
    },
    info() {
      y <= 20 && console.info.apply(console, arguments);
    },
    warning() {
      y <= 30 && console.warn.apply(console, arguments);
    },
    error() {
      y <= 40 && console.error.apply(console, arguments);
    },
  };
  v();
  const P = {
      NOT_SUPPORTED: "Feature not supported by the host.",
      NOT_REGISTERED: "No prior $sf.ext.register() API call.",
      EXPANDED: "Already expanded.",
      NOT_EXPANDED: "Not expanded.",
      COMMAND_PENDING: "Command already in-progress.",
      INVALID_COOKIE_ARGS: "Invalid cookie arguments.",
      INVALID_ARGS: "Invalid arguments.",
      INVALID_SIZE:
        "Setting size to less than 1px is hiding, call $sf.ext.hide instead.",
      SIZE_CONSTRAINTS_ERROR:
        "Setting size to a value bigger than the allowed constraints.",
      INVALID_HIDDEN_SIZE:
        "Setting size must be greater than 15 if SafeFrame has been hidden.",
    },
    M = {
      COLLAPSED: "collapsed",
      COLLAPSING: "collapsing",
      EXPANDED: "expanded",
      EXPANDING: "expanding",
      RESIZING: "resizing",
      HIDDEN: "hidden",
    };
  class F {
    messenger;
    windowContext;
    sizesConfig;
    hasRegistered = !1;
    pendingCommand = null;
    alignmentElement;
    statusUpdateCallback;
    supportsMap;
    geomData;
    hasFocus;
    metaData;
    registrationKey;
    width;
    height;
    _status = M.COLLAPSED;
    initSandboxCalled = !1;
    sizeConstraints;
    static FailureReason = P;
    constructor(e, t, i = {}, s = window) {
      (this.messenger = e),
        (this.windowContext = s),
        (this.sizesConfig = t.client?.render?.allowedSizes || []);
      const n = t.client.safeFrame;
      (this.supportsMap = S.fromSafeFrameConfigToCmdSupportMap(n)),
        e.on(f.topic.SAFE_FRAME, this._onSafeFrameMessage, this),
        (i = i || {}).geom && (this.geomData = i.geom),
        i.focus && (this.hasFocus = i.focus),
        (this.metaData = i.meta || {}),
        (this.sizeConstraints = { width: n.width, height: n.height });
    }
    _sendMessage({ cmd: e, meta: t }) {
      this.messenger.send(new f({ cmd: e, meta: t })),
        (this.pendingCommand = e);
    }
    _onSafeFrameMessage(e) {
      const { status: t, meta: i } = e.message;
      if (n(t, f.status)) {
        if (
          this.pendingCommand === i.cmd &&
          ((this.pendingCommand = null), t === f.status.FAILED)
        )
          switch (i.cmd) {
            case f.cmd.EXPAND_OVER:
            case f.cmd.EXPAND_PUSH:
            case f.cmd.RESIZE_TO:
              this._status = M.COLLAPSED;
              break;
            case f.cmd.COLLAPSE:
              this._status = M.EXPANDED;
          }
        this._callStatusUpdate(t, i);
      }
    }
    register(e, t, i) {
      if (this.hasRegistered)
        L.error(
          "$sf.ext.register() can be called only once and has been called already.",
        );
      else {
        if (
          ((this.hasRegistered = !0),
          h.isFunction(i) && (this.statusUpdateCallback = i),
          this.initSandboxCalled)
        )
          L.warning(`${e}x${t} size is ignored as size was set already.`);
        else {
          if (this.sizesConfig.includes(`${e}x${t}`)) {
            const i = h.int(e, 0, 0),
              s = h.int(t, 0, 0);
            this.messenger.send(
              new p({ topic: p.topic.SIZE, meta: { width: i, height: s } }),
            ),
              (this.width = i),
              (this.height = s);
          }
        }
        (this.registrationKey = {}),
          this._callStatusUpdate(f.status.REGISTER, {
            key: this.registrationKey,
          });
      }
    }
    _width() {
      return (
        h.isSet(this.width) || (this.width = N.getWindowGeometry().width),
        this.width
      );
    }
    _height() {
      return (
        h.isSet(this.height) || (this.height = N.getWindowGeometry().height),
        this.height
      );
    }
    _isValidSize(e, t) {
      const i =
          !this.sizeConstraints.width ||
          !this.sizeConstraints.width.max ||
          e <= this.sizeConstraints.width.max,
        s =
          !this.sizeConstraints.height ||
          !this.sizeConstraints.height.max ||
          t <= this.sizeConstraints.height.max;
      return i && s;
    }
    _callStatusUpdate(e, { cmd: t, reason: i, info: s, key: o }) {
      if (
        (e === f.status.FAILED
          ? L.warning("SafeFrame: command failed", {
              cmd: t,
              reason: i,
              info: s,
            })
          : e === f.status.META_UPDATE
            ? (this.metaData = s)
            : e === f.status.GEOMETRY_UPDATE
              ? (this.geomData = s)
              : e === f.status.FOCUS_CHANGE
                ? (this.hasFocus = s)
                : e === f.status.RESIZE_TO
                  ? ((this.width = s.w),
                    (this.height = s.h),
                    (this._status = M.COLLAPSED))
                  : n(e, M) &&
                    (e === f.status.COLLAPSED && this._align(),
                    (this._status = e)),
        this.statusUpdateCallback)
      ) {
        const n = { cmd: t, reason: i, info: s };
        o && (n.key = o), this.statusUpdateCallback.call(this, e, n);
      }
    }
    _sendFailureStatus(e, t) {
      this._callStatusUpdate(f.status.FAILED, { cmd: e, reason: t });
    }
    supports(e) {
      return h.isSet(e) ? !!this.supportsMap[e] : this.supportsMap;
    }
    expand({ t: e, l: t, r: i, b: s, push: n }) {
      const o = n ? f.cmd.EXPAND_PUSH : f.cmd.EXPAND_OVER;
      let r;
      this.supports(o)
        ? this.hasRegistered
          ? this.pendingCommand
            ? (r = P.COMMAND_PENDING)
            : this.status() === M.EXPANDED && (r = P.EXPANDED)
          : (r = P.NOT_REGISTERED)
        : (r = P.NOT_SUPPORTED);
      const a = {
          top: h.int(e, 0, 0),
          left: h.int(t, 0, 0),
          right: h.int(i, 0, 0),
          bottom: h.int(s, 0, 0),
        },
        d = this._width() + a.left + a.right,
        c = this._height() + a.top + a.bottom;
      this._isValidSize(d, c) || (r = P.SIZE_CONSTRAINTS_ERROR),
        r
          ? this._sendFailureStatus(o, r)
          : (this._align(a),
            this._sendMessage({ cmd: o, meta: a }),
            (this._status = M.EXPANDING));
    }
    collapse() {
      const e = f.cmd.COLLAPSE;
      let t;
      this.hasRegistered
        ? this.pendingCommand
          ? (t = P.COMMAND_PENDING)
          : this.status() !== M.EXPANDED && (t = P.NOT_EXPANDED)
        : (t = P.NOT_REGISTERED),
        t
          ? this._sendFailureStatus(e, t)
          : (this._sendMessage({ cmd: e }), (this._status = M.COLLAPSING));
    }
    _align({ top: e, left: t, right: i, bottom: s } = {}) {
      this.alignmentElement ||
        (this.alignmentElement =
          this.windowContext.document.getElementById("fc_align"));
      const n = {};
      e && !s
        ? ((n.top = null), (n.bottom = "0"))
        : ((n.top = "0"), (n.bottom = null)),
        t && !i
          ? ((n.left = null), (n.right = "0"))
          : ((n.left = "0"), (n.right = null)),
        C.setStyles(this.alignmentElement, n),
        this._adjustWindowContentSize();
    }
    _adjustWindowContentSize() {
      const e = this.windowContext.document.documentElement.style;
      e.width = e.height = "100%";
    }
    cookie(e, t) {
      const i = t ? f.cmd.WRITE_COOKIE : f.cmd.READ_COOKIE;
      let s;
      this.supports(i)
        ? this.hasRegistered
          ? !e || (t && !t.value)
            ? (s = P.INVALID_COOKIE_ARGS)
            : this.pendingCommand && (s = P.COMMAND_PENDING)
          : (s = P.NOT_REGISTERED)
        : (s = P.NOT_SUPPORTED),
        s
          ? this._sendFailureStatus(i, s)
          : this._sendMessage({
              cmd: i,
              meta: { cookieName: e, cookieData: t },
            });
    }
    meta(e, t = "shared") {
      const i = Object.prototype.hasOwnProperty,
        s = this.metaData;
      if (i.call(s, t)) {
        const n = s[t];
        if (i.call(n, e)) return n[e];
      }
      return "";
    }
    status() {
      return this._status;
    }
    geom() {
      return this.geomData;
    }
    inViewPercentage() {
      if (this.geomData) {
        const e = this.geomData.self.iv;
        return Math.round(100 * e);
      }
    }
    winHasFocus() {
      return this.hasFocus;
    }
    resizeTo(e) {
      let t, i;
      const s = f.cmd.RESIZE_TO;
      let n;
      if (
        (this.supports(f.cmd.RESIZE_TO)
          ? h.isObject(e)
            ? this.hasRegistered
              ? this._status === M.EXPANDED
                ? (n = P.EXPANDED)
                : this.pendingCommand && (n = P.COMMAND_PENDING)
              : (n = P.NOT_REGISTERED)
            : (n = P.INVALID_ARGS)
          : (n = P.NOT_SUPPORTED),
        !n)
      )
        if (
          ((t = h.int(e.w, this._width())),
          (i = h.int(e.h, this._height())),
          t <= 1 || i <= 1)
        )
          n = P.INVALID_SIZE;
        else if (this._status === M.HIDDEN && (t <= 15 || i <= 15))
          n = P.INVALID_HIDDEN_SIZE;
        else {
          if (t === this.width && i === this.height) return;
          this._isValidSize(t, i) || (n = P.SIZE_CONSTRAINTS_ERROR);
        }
      n
        ? this._sendFailureStatus(s, n)
        : (this._adjustWindowContentSize(),
          this._sendMessage({
            cmd: f.cmd.RESIZE_TO,
            meta: { width: t, height: i },
          }),
          (this._status = M.RESIZING));
    }
    hide(e) {
      this._status = M.HIDDEN;
    }
    show(e) {}
  }
  class x {
    #a;
    constructor(e, t, i, s) {
      this.#a = new F(e, t, i, s);
    }
    register = (e, t, i) => {
      this.#a.register(e, t, i);
    };
    supports = (e) => this.#a.supports(e);
    expand = (e) => {
      this.#a.expand(e);
    };
    collapse = () => {
      this.#a.collapse();
    };
    cookie = (e, t) => {
      this.#a.cookie(e, t);
    };
    meta = (e, t) => this.#a.meta(e, t);
    status = () => this.#a.status();
    geom = () => this.#a.geom();
    inViewPercentage = () => this.#a.inViewPercentage();
    winHasFocus = () => this.#a.winHasFocus();
    resizeTo = (e) => this.#a.resizeTo(e);
    hide = (e) => this.#a.hide(e);
    show = (e) => this.#a.show(e);
    msg = (e, t) => {
      this.#a.msg(e, t);
    };
    hostURL() {
      return document.referrer;
    }
  }
  class G {
    messenger;
    lastMessageSentTime;
    constructor(e) {
      this.messenger = e;
    }
    _sendMessage({ cmd: e, meta: t }) {
      this.messenger.send(new f({ cmd: e, meta: t }));
    }
    msg(e) {
      return (
        !(
          this.lastMessageSentTime &&
          !(this.lastMessageSentTime < new Date().getTime() - 200)
        ) &&
        (this._sendMessage({ cmd: f.cmd.MSG, meta: e }),
        (this.lastMessageSentTime = new Date().getTime()),
        !0)
      );
    }
  }
  const U = "px",
    z = {
      SAFE_FRAME: "SF",
      NON_FRIENDLY_IFRAME: "NFIF",
      FRIENDLY_IFRAME: "FIF",
    };
  const k = "Position";
  class V extends e {
    static CONFIG_UPDATE = `${k}.CONFIG_UPDATE`;
    static META_UPDATE = `${k}.META_UPDATE`;
  }
  const { SAFE_FRAME: H, NON_FRIENDLY_IFRAME: B, FRIENDLY_IFRAME: $ } = z;
  class j {
    #h;
    name;
    config;
    adData;
    render;
    constructor(e, t) {
      if (!h.isString(e))
        throw new Error(`Invalid ${"name"} argument. String is expected`);
      (this.name = e), this.update(t);
    }
    update(e) {
      (this.config = e),
        this.updateContainerType(),
        this.trigger(new V(V.CONFIG_UPDATE, this.config));
    }
    get containerType() {
      return this.#h;
    }
    updateContainerType(e = {}) {
      const t = this.config.client,
        i = t.safeFrame,
        s = t.nonFriendlyIframe;
      s && s.enabled
        ? (this.#h = B)
        : i && i.enabled
          ? (this.#h = "true" === e.friendlyIframe ? $ : H)
          : (this.#h = $);
    }
    updateMeta(e, t, i) {
      if (this.config.updateMeta(e, t, i)) {
        const e = this.config.client.meta;
        this.trigger(new V(V.META_UPDATE, { adMeta: e }));
      }
    }
    applyAdData(e) {
      this.adData = e;
    }
  }
  let W;
  Object.assign(j.prototype, g);
  const Y = {
      clone(e) {
        return this.copy(e, {});
      },
      copy(e, t, i) {
        return (
          Object.keys(e).forEach((s) => {
            const n = e[s];
            h.isDOMNode(n)
              ? (i && h.isSet(t[s])) || (t[s] = n)
              : h.isObject(n) && null !== n && !Array.isArray(n)
                ? ((t[s] = t[s] || {}), this.copy(e[s], t[s], i))
                : (i && h.isSet(t[s])) ||
                  (t[s] = Array.isArray(n) ? Z.clone(n) : n);
          }),
          t
        );
      },
    },
    Z = {
      clone(e) {
        return e.map((e) =>
          Array.isArray(e)
            ? this.clone(e)
            : "object" == typeof e
              ? Y.copy(e, {})
              : e,
        );
      },
      diff: (e, t) => e.filter((e) => -1 === t.indexOf(e)),
    };
  const X = class extends e {
      static RENDER_START = "RENDER_START";
      static RENDER_COMPLETE = "RENDER_COMPLETE";
      static POSITION_CREATED = "POSITION_CREATED";
      static POSITION_RENDER_START = "POSITION_RENDER_START";
      static POSITION_RENDER_COMPLETE = "POSITION_RENDER_COMPLETE";
      static POSITION_RENDER_FAILED = "POSITION_RENDER_FAILED";
      static POSITION_VIEW_START = "POSITION_VIEW_START";
      static POSITION_VIEW_END = "POSITION_VIEW_END";
      static POSITION_VIEWABLE = "POSITION_VIEWABLE";
      static POSITION_CONFIG_CHANGED = "POSITION_CONFIG_CHANGED";
      static AD_LOAD_COMPLETE = "AD_LOAD_COMPLETE";
      static AD_LOAD_TIMEOUT = "AD_LOAD_TIMEOUT";
      static AD_SIZE_CHANGED = "AD_SIZE_CHANGED";
      static AD_MESSAGE = "AD_MESSAGE";
    },
    J = {
      client: {
        render: {
          auto: !0,
          allowedSizes: [],
          timeout: 6e4,
          requireViewable: !1,
          doubleBuffering: !1,
          abortOnFocus: !0,
          abortOnMouseOver: !1,
          abortOnExpandedAd: !0,
        },
        layout: { zIndex: 10 },
        nonFriendlyIframe: { enabled: !1 },
        safeFrame: {
          enabled: !0,
          features: {
            expandOver: { enabled: !0 },
            expandPush: { enabled: !1 },
            resize: { enabled: !1 },
            cookies: { read: !1, write: !1, allowed: ["CRZY"] },
          },
        },
        sandbox: {
          baseUrl: null,
          uniqueDomain: !1,
          anchorTarget: "_blank",
          features: {
            fullscreen: { enabled: !0 },
            autoplay: { enabled: !0 },
            geolocation: { enabled: !1 },
            camera: { enabled: !1 },
            microphone: { enabled: !1 },
          },
          allow: [
            "forms",
            "scripts",
            "same-origin",
            "popups",
            "popups-to-escape-sandbox",
          ],
        },
        placeholder: {
          enabled: !1,
          text: "",
          fontSize: "12px",
          textColor: "#6e7780",
          backgroundColor: "#f5f8fa",
        },
        viewability: {
          percent: 50,
          pixels: 0,
          duration: 1e3,
          clearOnPageInactive: !1,
        },
        content: {},
        meta: { shared: {} },
      },
    };
  class K {
    client;
    input;
    constructor(e) {
      this.update(e);
    }
    update(e) {
      if (!h.isObject(e.client))
        throw new Error(`Invalid ${"client"} argument. Object is expected`);
      if (!h.isSet(e.client.targetElement))
        throw new Error("No target HTML element configured for position.");
      const t = Y.clone(e);
      this.input = Y.clone(t);
      const i = (function (e) {
        const t = Y.clone(J);
        return Y.copy(e, t), t;
      })(t);
      Object.assign(this, i);
    }
    updateMeta(e, t, i = "shared") {
      let s = !1;
      const n = h.isString(e) && h.isSet(t);
      if (h.isObject(e)) (this.client.meta = e), (s = !0);
      else if (n) {
        const n = this.client.meta[i];
        if (n) {
          const i = n[e];
          (n[e] = t), (s = t !== i);
        }
      }
      return s;
    }
    getTargetElement() {
      const e = this.client.targetElement;
      return h.isString(e) ? document.getElementById(e) : e;
    }
    static getFromConfig(e, t) {
      const i = ((e.client && e.client.positions) || {})[t];
      return i ? { client: i || {} } : null;
    }
    static updateInConfig(e, t, i) {
      const s = i.client;
      s &&
        ((e.client = e.client || {}),
        (e.client.positions = e.client.positions || {}),
        (e.client.positions[t] = s));
    }
    static removeFromConfig(e, t) {
      e.client.positions && delete e.client.positions[t];
    }
  }
  const q = "DEFAULT",
    Q = { client: { focusProtection: !0, positions: {} } };
  function ee(e, t, i) {
    h.isObject(i) ? (t[e] = {}) : Array.isArray(i) && (t[e] = []);
  }
  class te {
    #d = {};
    client;
    input;
    positions = {};
    static CLIENT_POSITIONS_PROPERTY = "client.positions";
    static CLIENT_PROPERTY = "client";
    constructor(e) {
      (this.input = Y.clone(e)), this._initializeConfig();
    }
    _initializeConfig() {
      const e = Y.clone(this.input);
      e.client = e.client || {};
      const t = (function (e) {
        const t = Y.clone(Q);
        return Y.copy(e, t), t;
      })(e);
      this.client = t.client;
      const i = K.getFromConfig(this.input, q);
      i && (delete this.client.positions[q], this._addOrUpdatePosition(q, i)),
        Object.keys(this.client.positions).forEach((e) => {
          const t = K.getFromConfig(this.input, e);
          this._addOrUpdatePosition(e, t);
        });
    }
    updatePosition(e, t) {
      this._addOrUpdatePosition(e, t);
    }
    _addOrUpdatePosition(e, t) {
      const i = Y.clone(t);
      /^[a-zA-Z0-9_-]+$/.test(e) ||
        L.warning(
          `Position name ${e} contains invalid characters. Please use only alphanumeric characters.`,
        ),
        e === q
          ? (this.#d = i)
          : (Y.copy(this.#d, i, !0),
            this.positions[e]
              ? this.positions[e].update(i)
              : (this.positions[e] = new K(i)),
            K.updateInConfig(this, e, this.positions[e])),
        K.updateInConfig(this.input, e, i);
    }
    removePosition(e) {
      K.removeFromConfig(this.input, e),
        K.removeFromConfig(this, e),
        e === q ? (this.#d = {}) : delete this.positions[e];
    }
    updateConfigSection(e, t) {
      const i = e.split(".");
      if (i[0] !== te.CLIENT_PROPERTY)
        return (
          L.error('Invalid path provided, it has to start with "client".'), !1
        );
      const s = i[0],
        n = (function (e, t, i, s) {
          let n,
            o = e,
            r = t;
          for (let e = 1; e < i.length; e++) {
            if (((n = i[e]), !h.isSet(o[n])))
              return L.error(`Invalid path, property ${n} does not exist.`), !1;
            r[n] || ee(n, r, o[n]),
              e < i.length - 1 && ((o = o[n]), (r = r[n]));
          }
          return (o[n] = s), (r[n] = s), !0;
        })(this[s], this.input[s], i, t);
      return n && this._initializeConfig(), n;
    }
    getPositionNameFromConfigPath(e) {
      return e.split(".")[2];
    }
    clone() {
      return Y.clone({ client: this.client });
    }
  }
  const ie = "PositionComponent";
  class se extends e {
    static RENDER_START = `${ie}.RENDER_START`;
    static RENDER_COMPLETE = `${ie}.RENDER_COMPLETE`;
    static RENDER_FAILED = `${ie}.RENDER_FAILED`;
    static AD_LOAD = `${ie}.AD_LOAD`;
    static AD_LOAD_TIMEOUT = `${ie}.AD_LOAD_TIMEOUT`;
    static RESIZE = `${ie}.RESIZE`;
    static DESTROY = `${ie}.DESTROY`;
    static VIEW_START = `${ie}.VIEW_START`;
    static VIEW_END = `${ie}.VIEW_END`;
    static VIEWABLE = `${ie}.VIEWABLE`;
    static AD_SIZE_CHANGED = `${ie}.AD_SIZE_CHANGED`;
    static AD_MESSAGE = `${ie}.AD_MESSAGE`;
  }
  const ne = "Render";
  class oe extends e {
    static RENDER_COMPLETE = `${ne}.RENDER_COMPLETE`;
    static AD_LOAD = `${ne}.AD_LOAD`;
    static AD_LOAD_TIMEOUT = `${ne}.AD_LOAD_TIMEOUT`;
    static AD_SIZE_CHANGED = `${ne}.AD_SIZE_CHANGED`;
    static AD_MESSAGE_RECEIVED = `${ne}.AD_MESSAGE_RECEIVED`;
    static AD_GEOMETRY_CHANGE = `${ne}.AD_GEOMETRY_CHANGE`;
  }
  const re = {
      removeChildren(e, t = null) {
        const i = e.children;
        for (let s = i.length - 1; s >= 0; s--)
          i[s] !== t && e.removeChild(i[s]);
      },
    },
    ae = "SandboxContainer";
  class he extends e {
    static READY = `${ae}.READY`;
    static SIZE_CHANGED = `${ae}.SIZE_CHANGED`;
    static GEOMETRY_CHANGE = `${ae}.GEOMETRY_CHANGE`;
    static SAFE_FRAME_GEOMETRY_CHANGED = `${ae}.SAFE_FRAME_GEOMETRY_CHANGED`;
    static AD_MESSAGE_RECEIVED = `${ae}.AD_MESSAGE_RECEIVED`;
  }
  function de(e, t) {
    const i = e.cookie.split(";").reduce((e, i) => {
      const s = i.indexOf("="),
        n = i.substring(0, s).trim();
      return t === n && (e = i.substring(s + 1)), e;
    }, "");
    return i || null;
  }
  class ce {
    #c;
    #l;
    #g;
    #E = {};
    #m = [];
    #u;
    constructor(e, t, i) {
      (this.#c = e),
        (this.#l = t),
        (this.#g = i),
        (this.#u = i.config.client.safeFrame),
        (this.#E = S.fromSafeFrameConfigToCmdSupportMap(this.#u)),
        (this.#m = i.adData.config.client?.render?.allowedSizes || []),
        this._toggleEventListeners(!0);
    }
    get messenger() {
      return this.#c;
    }
    cleanup() {
      this._toggleEventListeners(!1), this.#c.cleanup();
    }
    _onSizeChange(e) {
      const { width: t, height: i } = e.message.meta;
      t &&
        i &&
        this.#m.includes(`${t}x${i}`) &&
        this.#l.setRenderedSize({ width: t, height: i });
    }
    _onSafeFrameMessage(e) {
      const { cmd: t, meta: i } = e.message;
      if (!1 !== this.#E[t])
        switch (t) {
          case f.cmd.EXPAND_OVER:
          case f.cmd.EXPAND_PUSH:
            this._expand(i, t === f.cmd.EXPAND_PUSH),
              this._sendStatusUpdate(f.status.EXPANDED, { cmd: t });
            break;
          case f.cmd.COLLAPSE:
            this._collapse(),
              this._sendStatusUpdate(f.status.COLLAPSED, { cmd: t });
            break;
          case f.cmd.READ_COOKIE:
            this._readCookie(i.cookieName);
            break;
          case f.cmd.WRITE_COOKIE:
            this._writeCookie(i.cookieName, i.cookieData);
            break;
          case f.cmd.MSG:
            this._receivedAdMessage(i);
            break;
          case f.cmd.RESIZE_TO:
            this._resizeTo(i);
        }
      else
        this._sendFailure({
          cmd: t,
          reason: "Feature not supported by the host.",
        });
    }
    _expand({ top: e, left: t, right: i, bottom: s }, n = !1) {
      (e = h.int(e, 0, 0)),
        (t = h.int(t, 0, 0)),
        (i = h.int(i, 0, 0)),
        (s = h.int(s, 0, 0));
      const o = this.#l.renderedSize,
        r = { width: o.width + i + t, height: o.height + s + e };
      n || ((r.dx = -t), (r.dy = -e)), this.#l.updateGeometry(r, n);
    }
    _collapse() {
      this.#l.resetGeometry();
    }
    _resizeTo({ width: e, height: t }) {
      const i = { width: (e = h.int(e, 0, 0)), height: (t = h.int(t, 0, 0)) },
        s = { w: e, h: t };
      this.#l.setRenderedSize(i),
        this._sendStatusUpdate(f.status.RESIZE_TO, {
          cmd: f.cmd.RESIZE_TO,
          info: s,
        });
    }
    _readCookie(e) {
      const t = f.cmd.READ_COOKIE;
      if (!(this.#u.features.cookies.allowed || []).includes(e))
        return void this._sendFailure({
          cmd: t,
          reason: F.FailureReason.INVALID_ARGS,
          info: { key: e },
        });
      let i = de(window.document, e);
      if (!i) {
        (de(window.document, "SF") || "")
          .split("&")
          .filter((t) => 0 === t.indexOf(e + "="))
          .forEach((t) => {
            const s = de({ cookie: t }, e);
            i = i || s;
          });
      }
      this._sendStatusUpdate(f.status.READ_COOKIE, { cmd: t, info: i });
    }
    _writeCookie(e, t) {
      const i = f.cmd.WRITE_COOKIE;
      t.value && t.value.length > 1e3 && (t.value = t.value.substring(0, 1e3));
      if (!(this.#u.features.cookies.allowed || []).includes(e))
        return void this._sendFailure({
          cmd: i,
          reason: F.FailureReason.INVALID_ARGS,
          info: { key: e },
        });
      const s = t.value;
      de(window.document, e) || ((t.value = `${e}=${t.value}`), (e = "SF")),
        (t.expires = t.expires || null),
        t.expires &&
          "[object Date]" !== Object.prototype.toString.call(t.expires) &&
          (t.expires = null),
        (function (e, t, i) {
          if (!i || "string" != typeof i.value) return;
          let s = t + "=" + i.value;
          i.expires && (s += "; expires=" + i.expires.toUTCString()),
            (e.cookie = s);
        })(window.document, e, t),
        this._sendStatusUpdate(f.status.WRITE_COOKIE, { cmd: i, info: s });
    }
    _receivedAdMessage(e) {
      this.#l.processAdMessage(e);
    }
    _sendStatusUpdate(e, { cmd: t, reason: i, info: s }) {
      this.messenger.send(
        new f({ status: e, meta: { cmd: t, reason: i, info: s } }),
      );
    }
    _sendFailure({ cmd: e, reason: t, info: i }) {
      this._sendStatusUpdate(f.status.FAILED, { cmd: e, reason: t, info: i });
    }
    positionMetaChanged(e) {
      this.#u && this.#u.enabled
        ? this._sendStatusUpdate(f.status.META_UPDATE, { info: e.meta.adMeta })
        : L.warning("Messages can be sent only to SafeFrame positions.");
    }
    _sendSafeFrameGeometryUpdate(e) {
      this.#c.send(
        new f({ status: f.status.GEOMETRY_UPDATE, meta: { info: e.meta } }),
      );
    }
    _sendSafeFrameFocusUpdate(e) {
      this.#c.send(
        new f({
          status: f.status.FOCUS_CHANGE,
          meta: { info: e.type === t.FOCUS },
        }),
      );
    }
    _toggleEventListeners(e) {
      const i = e ? "on" : "off",
        s = this.#c,
        n = this.#l,
        o = this.#g,
        r = n.pageObserver;
      s[i](p.topic.SIZE, this._onSizeChange, this),
        s[i](f.topic.SAFE_FRAME, this._onSafeFrameMessage, this),
        n[i](
          he.SAFE_FRAME_GEOMETRY_CHANGED,
          this._sendSafeFrameGeometryUpdate,
          this,
        ),
        o[i](V.META_UPDATE, this.positionMetaChanged, this),
        r[i](t.FOCUS, this._sendSafeFrameFocusUpdate, this),
        r[i](t.BLUR, this._sendSafeFrameFocusUpdate, this);
    }
  }
  const le = class {
    static createPlaceholderSvg(e) {
      return (
        `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect width="100%" height="100%" fill="${e.backgroundColor}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${e.textColor}" font-family="Arial, Helvetica, sans-serif" font-size="${e.fontSize}">` +
        e.text +
        "</text></svg>"
      );
    }
  };
  class ge {
    offsetTop;
    offsetLeft;
    offsetBottom;
    offsetRight;
    width;
    height;
    constructor({ t: e = 0, l: t = 0, r: i = 0, b: s = 0 }) {
      (this.offsetTop = e),
        (this.offsetLeft = t),
        (this.offsetRight = i),
        (this.offsetBottom = s),
        (this.width = Math.max(this.offsetRight - this.offsetLeft, 0)),
        (this.height = Math.max(this.offsetBottom - this.offsetTop, 0));
    }
    normalize() {
      (this.offsetTop = Math.max(this.offsetTop, 0)),
        (this.offsetLeft = Math.max(this.offsetLeft, 0)),
        (this.offsetRight = Math.max(this.offsetRight, 0)),
        (this.offsetBottom = Math.max(this.offsetBottom, 0)),
        (this.width = Math.max(this.offsetRight - this.offsetLeft, 0)),
        (this.height = Math.max(this.offsetBottom - this.offsetTop, 0));
    }
    toSafeFrameClip() {
      return {
        t: this.offsetTop,
        l: this.offsetLeft,
        r: this.offsetRight,
        b: this.offsetBottom,
        w: this.width,
        h: this.height,
      };
    }
    getOffsetDifference(e) {
      const t = { top: 0, right: 0, bottom: 0, left: 0 };
      return (
        this.offsetTop > e.offsetTop &&
          this.offsetTop < e.offsetBottom &&
          (t.top = this.offsetTop - e.offsetTop),
        this.offsetLeft > e.offsetLeft &&
          this.offsetLeft < e.offsetRight &&
          (t.left = this.offsetLeft - e.offsetLeft),
        this.offsetRight < e.offsetRight &&
          this.offsetRight > e.offsetLeft &&
          (t.right = e.offsetRight - this.offsetRight),
        this.offsetBottom < e.offsetBottom &&
          this.offsetBottom > e.offsetTop &&
          (t.bottom = e.offsetBottom - this.offsetBottom),
        t
      );
    }
    addHorizontalClipping(e, t) {
      e > this.offsetLeft && (this.offsetLeft = e),
        t < this.offsetRight && (this.offsetRight = t);
    }
    addVerticalClipping(e, t) {
      e > this.offsetTop && (this.offsetTop = e),
        t < this.offsetBottom && (this.offsetBottom = t);
    }
  }
  function Ee(e, t = window) {
    const i = N.getElementGeometry(e, t),
      s = N.getPageScrollInfo(),
      n = {
        t: i.top,
        l: i.left,
        r: i.right,
        b: i.bottom,
        w: i.width,
        h: i.height,
        z: i.zIndex,
      };
    return (
      (s.y || s.x) && ((n.l += s.x), (n.t += s.y)),
      (n.b = n.t + i.height),
      (n.r = n.l + i.width),
      Object.keys(n).forEach((e) => {
        "number" == typeof n[e] && (n[e] = Math.round(n[e]));
      }),
      n
    );
  }
  function me() {
    const e = N.getPageScrollInfo(),
      t = N.getWindowGeometry();
    return {
      t: e.y,
      l: e.x,
      r: e.x + t.width,
      b: e.y + t.height,
      w: t.width,
      h: t.height,
    };
  }
  function ue(e, t, i, s = window) {
    const n = N.getPageScrollInfo();
    let o,
      r,
      a,
      h = C.getComputedStyle(e, null, s);
    for (; h; ) {
      const d = e === i;
      if (
        "block" === h.display ||
        "absolute" === h.position ||
        "none" !== h.float
      ) {
        const i = Ee(e, s);
        let c = i.t,
          l = i.l,
          g = i.r,
          E = i.b,
          m = e.offsetWidth,
          u = e.offsetHeight,
          p = e.clientWidth,
          f = e.clientHeight;
        if (!o && m > p) {
          const e = m - p;
          o = e <= 20 ? e : 0;
        }
        if (!r && u > f) {
          const e = u - f;
          r = e <= 20 ? e : 0;
        }
        d
          ? (e.scrollWidth > p &&
              ((l = 0),
              (g = (s.innerWidth || m) + n.x),
              s.innerWidth && s.innerWidth > p && (g -= s.innerWidth - p),
              t.addHorizontalClipping(l, g)),
            e.scrollHeight > f &&
              ((c = 0),
              (E = (s.innerHeight || u) + n.y),
              s.innerHeight && s.innerHeight > f && (E -= s.innerHeight - f),
              t.addVerticalClipping(c, E)))
          : (o && g - l === m && (g -= o),
            r && E - c === u && (E -= r),
            N.isClippingElement(e, "X", h) && t.addHorizontalClipping(l, g),
            N.isClippingElement(e, "Y", h) && t.addVerticalClipping(c, E),
            !a && N.isScrollableElement(e, h) && (a = e));
      }
      if (d) break;
      if (
        ((e = e.parentNode) &&
          Node.DOCUMENT_FRAGMENT_NODE === e.nodeType &&
          (e = e.parentNode),
        !e)
      )
        break;
      h = C.getComputedStyle(e, null, s);
    }
    return { scrollParent: a, xScrollBarHeight: r, yScrollBarWidth: o };
  }
  class pe {
    static GEOMETRY_UPDATE = "GEOMETRY_UPDATE";
    #p;
    #f;
    #_;
    #O;
    constructor(e, i, n = window) {
      (this.#p = e),
        (this.#f = i),
        (this.#_ = n),
        (this.#O = s(() => this.dispatchGeometryChange(), 1e3)),
        this.#p.on(t.SCROLL, this.#O),
        this.#p.on(t.RESIZE, this.#O);
    }
    buildGeometry() {
      return {
        win: this.buildWindowGeometry(),
        self: this.buildSelfGeometry(),
        exp: this.buildExpandableGeometry(),
        par: this.buildParentGeometry(),
      };
    }
    winHasFocus() {
      return this.#p.hasFocus;
    }
    dispatchGeometryChange() {
      this.trigger(new e(pe.GEOMETRY_UPDATE, this.buildGeometry()));
    }
    destroy() {
      this.#p.off(t.SCROLL, this.#O), this.#p.off(t.RESIZE, this.#O);
    }
    buildWindowGeometry() {
      const e = N.getWindowGeometry(!0);
      return {
        t: e.top,
        l: e.left,
        r: e.right,
        b: e.bottom,
        w: e.width,
        h: e.height,
      };
    }
    buildSelfGeometry() {
      const e = this.#_,
        t = Ee(this.#f, e),
        i = N.getVisibilityMetrics(this.#f, e);
      return (
        (t.xiv = parseFloat(i.xPercentage.toFixed(2))),
        (t.yiv = parseFloat(i.yPercentage.toFixed(2))),
        (t.iv = parseFloat(i.totalPercentage.toFixed(2))),
        t
      );
    }
    buildExpandableGeometry() {
      const e = this.#_,
        t = Ee(this.#f, e),
        i = N.getDocumentElement(),
        s = me(),
        n = new ge(s),
        o = ue(this.#f, n, i, e);
      n.normalize();
      const r = new ge(t).getOffsetDifference(n),
        a = { t: r.top, l: r.left, r: r.right, b: r.bottom };
      return (
        o.scrollParent
          ? ((a.xs = !!o.xScrollBarHeight), (a.ys = !!o.yScrollBarWidth))
          : ((a.xs = i.scrollWidth > i.clientWidth),
            (a.ys = i.scrollHeight > i.clientHeight)),
        a
      );
    }
    buildParentGeometry() {
      const e = this.#_,
        t = N.getDocumentElement(),
        i = me(),
        s = new ge(i),
        n = ue(this.#f, s, t, e);
      if (n.scrollParent) {
        const s = Ee(n.scrollParent, e),
          o = new ge(s);
        return (
          ue(n.scrollParent, o, t, e),
          o.addHorizontalClipping(i.l, i.r),
          o.addVerticalClipping(i.t, i.b),
          o.normalize(),
          o.toSafeFrameClip()
        );
      }
      return s.normalize(), s.toSafeFrameClip();
    }
    set element(e) {
      this.#f = e;
    }
  }
  Object.assign(pe.prototype, g);
  const fe = pe;
  class _e {
    #A;
    #S = !1;
    #C;
    position;
    clientConfig;
    pageObserver;
    windowContext;
    positionElement;
    element;
    iframe;
    sandboxBridge;
    safeFrameGeometry;
    isExpanded = !1;
    adDataSize;
    constructor(e, t, i, s = window) {
      (this.position = e),
        (this.clientConfig = e.config.client),
        (this.iframe = t),
        (this.pageObserver = i),
        (this.windowContext = s);
    }
    render(e, t, i = !0) {
      (this.positionElement = e),
        (this.element = document.createElement("div")),
        (this.element.className = "jac-sandbox-container"),
        (this.adDataSize = t.content.size);
      const s = this.clientConfig.placeholder;
      if (s.enabled) {
        const e = le.createPlaceholderSvg(s);
        C.setStyles(this.element, {
          backgroundImage: `url(data:image/svg+xml;base64,${btoa(e)})`,
        });
      }
      this.position.containerType === z.SAFE_FRAME &&
        this._addSafeFrameGeometry(),
        (this.visible = i),
        this._toggleVisibility(i),
        this.setRenderedSize(this.adDataSize);
    }
    injectIframe() {
      this.element.appendChild(this.iframe), (this.#S = !0);
    }
    setSandboxBridge(e) {
      (this.sandboxBridge = e), this._triggerEventIfReady();
    }
    _triggerEventIfReady() {
      this.sandboxBridge && this.#S && this._triggerEvent(he.READY);
    }
    _resize({
      width: e,
      height: t,
      top: i = 0,
      left: s = 0,
      resizeContainer: n,
    }) {
      n &&
        (C.setStyles(this.element, {
          position: "relative",
          width: `${e}px`,
          height: `${t}px`,
        }),
        this._triggerEvent(he.SIZE_CHANGED, { width: e, height: t })),
        C.setStyles(this.iframe, {
          width: `${e}px`,
          height: `${t}px`,
          top: `${i}px`,
          left: `${s}px`,
        });
    }
    updateGeometry(e, t = !1) {
      (this.isExpanded = !0),
        this._resize({
          width: e.width,
          height: e.height,
          top: e.dy || 0,
          left: e.dx || 0,
          resizeContainer: t,
        });
      const i = this.getGeometry();
      this._triggerEvent(he.GEOMETRY_CHANGE, i);
    }
    resetGeometry() {
      if (((this.isExpanded = !1), this.#C)) {
        this._resize({
          width: this.#C.width,
          height: this.#C.height,
          top: 0,
          left: 0,
          resizeContainer: !0,
        });
        const e = this.getGeometry();
        this._triggerEvent(he.GEOMETRY_CHANGE, e);
      }
    }
    getGeometry() {
      return N.getElementGeometry(this.element);
    }
    get renderedSize() {
      return this.#C || {};
    }
    setRenderedSize(e) {
      (!this.#C || this.#C.width !== e.width || this.#C.height !== e.height) &&
        ((this.#C = e),
        this._resize({
          width: e.width,
          height: e.height,
          resizeContainer: !0,
        }));
    }
    show() {
      this._toggleVisibility(!0);
    }
    hide() {
      this._toggleVisibility(!1);
    }
    processAdMessage(e) {
      this._triggerEvent(he.AD_MESSAGE_RECEIVED, { message: e });
    }
    clear() {
      this.cleanup(), re.removeChildren(this.element);
    }
    cleanup() {
      this.sandboxBridge.cleanup(),
        this.safeFrameGeometry && this._removeSafeFrameGeometry();
    }
    _toggleVisibility(e) {
      C.setStyles(this.element, { display: e ? "block" : "none" });
    }
    _addSafeFrameGeometry() {
      const e = (this.safeFrameGeometry = new fe(
        this.pageObserver,
        this.element,
        this.windowContext,
      ));
      (this.#A = (e) => {
        this._triggerEvent(he.SAFE_FRAME_GEOMETRY_CHANGED, e.meta);
      }),
        e.on(fe.GEOMETRY_UPDATE, this.#A, this);
    }
    _removeSafeFrameGeometry() {
      this.safeFrameGeometry.destroy(),
        this.safeFrameGeometry.off(fe.GEOMETRY_UPDATE, this.#A, this);
    }
    _triggerEvent(e, t) {
      this.trigger(new he(e, t));
    }
  }
  Object.assign(_e.prototype, g);
  const Oe = _e,
    Ae = "string" !== o.UNDEFINED ? "2.0.0" : "0.0.0",
    Se = "https://jac.yahoosandbox.com";
  function Ce() {
    return Math.floor(1e7 * Math.random()).toString();
  }
  function we(e, t, i) {
    const s = t.sandbox;
    let n = window.JAC_SANDBOX_BASE_URL || s.baseUrl || e.clientBaseUrl || Se;
    return (
      s.uniqueDomain && (n = n.replace("https://", `https://j${Ce()}.`)),
      `${n}/${Ae}/${i}`
    );
  }
  function De(e, t) {
    const i = {
        id: "jacSandbox_" + Ce(),
        title: "Advertisement",
        itemtype: "https://schema.org/WPAdBlock",
        itemscope: "",
        tabindex: "-1",
        allowtransparency: "true",
        scrolling: "no",
      },
      s = t.sandbox;
    s &&
      ((i.sandbox = s.allow.map((e) => `allow-${e}`).join(" ")),
      (i.allow = (function (e) {
        let t = [];
        return (
          Object.keys(e).forEach((i) => {
            const s = e[i];
            if (!s.enabled) return;
            const n = [];
            n.push(i),
              s.allow &&
                s.allow.forEach((e) => {
                  0 === (e = e.trim()).indexOf("https:")
                    ? n.push(e)
                    : 0 === e.indexOf("http:")
                      ? n.push(e.replace("http:", "https:"))
                      : n.push("https://" + e);
                }),
              t.push(n.join(" "));
          }),
          t.join(";")
        );
      })(s.features)),
      s.features.fullscreen.enabled && (i.allowfullscreen = !0));
    const n = document.createElement("iframe");
    Object.keys(i).forEach((e) => {
      n.setAttribute(e, i[e]);
    });
    const { width: o, height: r } = e;
    return (
      C.setStyles(n, {
        position: "absolute",
        top: "0",
        left: "0",
        width: `${o}px`,
        height: `${r}px`,
        border: "0",
        overflow: "hidden",
        zIndex: t.layout.zIndex,
      }),
      n
    );
  }
  function Te(e, t, i) {
    const s = t.containerType;
    if (s === z.FRIENDLY_IFRAME)
      !(function (e, t) {
        const i = e.contentWindow.document;
        i.open(),
          i.write(
            '<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>html,body{margin:0;padding:0;width:100%;height:100%}</style></head><body><script src="' +
              t +
              '"><\/script><script>var inFIF=true,inDapIF=true;<\/script></body></html>',
          ),
          i.close();
      })(
        e,
        (function (e) {
          return `${window.JAC_BASE_URL || e.clientBaseUrl || Se}/${Ae}/jac.js`;
        })(i),
      );
    else {
      const n = t.config.client;
      s === z.SAFE_FRAME
        ? (e.src = we(i, n, "safeframe.html"))
        : s === z.NON_FRIENDLY_IFRAME && (e.src = we(i, n, "sandbox.html"));
    }
  }
  class Ie {
    #w;
    #D = !0;
    #T = [];
    component;
    pageObserver;
    adData;
    renderingContainer = null;
    renderedContainer = null;
    static create(e, t) {
      return new Ie(e, t);
    }
    constructor(e, t) {
      (this.component = e), (this.pageObserver = t);
    }
    preparePositionElement(e = null) {
      const t = this.component.position,
        i = t.config.getTargetElement(),
        s = document.createElement("div");
      return (
        (s.id = `jacPosition_${t.name}`),
        (s.className = "jac-container"),
        e
          ? C.setStyles(s, {
              display: e.style.display,
              position: e.style.position,
              width: e.style.width,
              height: e.style.height,
            })
          : C.setStyles(s, { display: "block", position: "relative" }),
        (i.innerHTML = ""),
        i.appendChild(s),
        s
      );
    }
    render(e) {
      this.adData = e;
      const t = this.component,
        i = t.element,
        s = t.position,
        n = s.config.client,
        o = n.render,
        r = this.pageObserver;
      this.renderingContainer && this._cleanupRenderingSandbox(),
        (this.#w = setTimeout(() => {
          this._onAdLoadTimeOut();
        }, o.timeout)),
        !o.doubleBuffering &&
          this.renderedContainer &&
          this._cleanupRenderedSandbox();
      const a = De(e.content.size, n),
        h = new Oe(s, a, r);
      this._toggleSandboxEventListeners(h), (this.renderingContainer = h);
      const d = !o.doubleBuffering || this.#D;
      h.render(i, e, d), i.appendChild(h.element);
      const c = (function (e, t, i, s) {
        const n = { adData: e, token: Ce() };
        return (
          t.containerType === z.SAFE_FRAME &&
            (n.safeFrame = {
              geom: i.safeFrameGeometry.buildGeometry(),
              focus: s.hasFocus,
              meta: t.config.client.meta,
            }),
          n
        );
      })(e, s, h, r);
      a.setAttribute("name", JSON.stringify(c)), h.injectIframe();
      const l = (function (e, t, i, s, n) {
        const o = new A(e.contentWindow, t.token);
        return (
          o.listen(),
          o.on(p.topic.WRITE_COMPLETE, () => {
            e.removeAttribute("name"), n._triggerEvent(oe.RENDER_COMPLETE);
          }),
          o.on(p.topic.PAGE_LOAD, () => {
            n._onAdLoaded();
          }),
          new ce(o, i, s)
        );
      })(a, c, h, s, this);
      h.setSandboxBridge(l), (this.#D = !1);
    }
    clear() {
      clearTimeout(this.#w),
        (this.#w = null),
        (this.#T = []),
        this.renderedContainer?.clear(),
        this.renderingContainer?.clear(),
        (this.renderedContainer = null),
        (this.renderingContainer = null);
    }
    reset() {
      this._cleanupRenderingSandbox(),
        this._cleanupRenderedSandbox(),
        this.component.element.parentNode.removeChild(this.component.element);
    }
    _cleanupSandboxContainer(e, t) {
      e?.cleanup(), re.removeChildren(this.component.element, t?.element);
    }
    _cleanupRenderedSandbox() {
      this._cleanupSandboxContainer(
        this.renderedContainer,
        this.renderingContainer,
      ),
        (this.renderedContainer = null);
    }
    _cleanupRenderingSandbox() {
      clearTimeout(this.#w),
        (this.#w = null),
        (this.#T = []),
        this._cleanupSandboxContainer(
          this.renderingContainer,
          this.renderedContainer,
        ),
        (this.renderingContainer = null);
    }
    _onAdLoaded() {
      clearTimeout(this.#w),
        (this.#w = null),
        this._cleanupRenderedSandbox(),
        this._flushActionsBuffer(),
        (this.renderedContainer = this.renderingContainer),
        (this.renderingContainer = null),
        this.renderedContainer.show(),
        this._triggerEvent(oe.AD_LOAD);
    }
    _onAdLoadTimeOut() {
      this._cleanupRenderingSandbox(), this._triggerEvent(oe.AD_LOAD_TIMEOUT);
    }
    _onContainerReady(e) {
      const t = e.target;
      Te(t.iframe, t.position, this.adData);
    }
    _onSizeChanged(e) {
      this._performBufferableAction(e, () => {
        C.setStyles(this.component.element, {
          width: `${e.meta.width}px`,
          height: `${e.meta.height}px`,
        }),
          this._triggerEvent(oe.AD_SIZE_CHANGED, e.meta);
      });
    }
    _onAdMessageReceived(e) {
      this._performBufferableAction(e, () => {
        this._triggerEvent(oe.AD_MESSAGE_RECEIVED, e.meta);
      });
    }
    _onAdGeometryChanged(e) {
      this._performBufferableAction(e, () => {
        this._triggerEvent(oe.AD_GEOMETRY_CHANGE, e.meta);
      });
    }
    _performBufferableAction(e, t) {
      e.target === this.renderingContainer &&
      this.component.position.config.client.render.doubleBuffering &&
      !this.renderingContainer.visible
        ? this.#T.push(t)
        : t();
    }
    _flushActionsBuffer() {
      this.#T.forEach((e) => e()), (this.#T = []);
    }
    _triggerEvent(e, t) {
      this.trigger(new oe(e, t));
    }
    _toggleSandboxEventListeners(e, t = !0) {
      const i = t ? "on" : "off",
        {
          READY: s,
          SIZE_CHANGED: n,
          AD_MESSAGE_RECEIVED: o,
          GEOMETRY_CHANGE: r,
        } = he;
      e[i](s, this._onContainerReady, this),
        e[i](n, this._onSizeChanged, this),
        e[i](o, this._onAdMessageReceived, this),
        e[i](r, this._onAdGeometryChanged, this);
    }
  }
  Object.assign(Ie.prototype, g);
  const Re = Ie;
  class be {
    time;
    limit;
    remaining;
    callback;
    #I;
    constructor({ time: e, limit: t, callback: i }) {
      (this.time = e), (this.remaining = this.limit = t), (this.callback = i);
    }
    start() {
      (!h.isSet(this.remaining) || this.remaining > 0) &&
        (this.#I = setTimeout(() => {
          h.isSet(this.remaining) && this.remaining--, this.callback();
        }, this.time));
    }
    stop() {
      clearTimeout(this.#I);
    }
    restart() {
      this.stop(), this.start();
    }
    reset() {
      this.stop(), (this.remaining = this.limit);
    }
  }
  class Ne {
    #R;
    #b;
    #N;
    #y;
    #v = !1;
    #L = !1;
    #P = !1;
    #M = !1;
    #F;
    #C;
    #x;
    #_;
    pageObserver;
    position;
    element;
    renderer;
    constructor(e, t, i = window) {
      (this.position = e),
        (this.pageObserver = t),
        (this.#_ = i),
        (this.renderer = Re.create(this, t)),
        (this.element = this.renderer.preparePositionElement()),
        this._toggleRendererEventListeners(!0),
        (this.#N = () => this._onMouseOver()),
        (this.#y = () => this._onMouseOut()),
        this._toggleElementListeners(!0);
    }
    render() {
      this._refreshTargetContainerIfChanged(), (this.#L = !0), (this.#P = !1);
      const e = (this.#R = this.position.adData);
      this.position.updateContainerType(e.meta),
        this.#b || this._togglePageObserverEventListeners(!0),
        this._pageStateChanged(),
        this.position.config.client.render.requireViewable ||
          this._processAndInjectAd();
    }
    _processAndInjectAd() {
      const e = this.#R,
        t = this.position.config.client.render;
      (this.#L = !1),
        this._triggerEvent(se.RENDER_START),
        (t.abortOnFocus && this.isFocused) ||
        (t.abortOnMouseOver && this.hasMouseOver) ||
        (t.abortOnExpandedAd && this.isExpanded)
          ? this._triggerEvent(se.RENDER_FAILED)
          : this.renderer.render(e);
    }
    _refreshTargetContainerIfChanged() {
      const e = this.position.config.getTargetElement(),
        t = this.element;
      e !== t.parentNode &&
        (this._toggleElementListeners(!1),
        this.renderer.reset(),
        (this.element = this.renderer.preparePositionElement(t)),
        this._toggleElementListeners(!0));
    }
    destroy() {
      this._togglePageObserverEventListeners(!1),
        this._toggleElementListeners(!1),
        this._toggleRendererEventListeners(!1),
        this.renderer.reset(),
        this._triggerEvent(se.DESTROY);
    }
    abortRender() {
      this.clearAd(), (this.#C = null), (this.#v = !1);
    }
    clearAd() {
      this.renderer.clear();
    }
    _isAreaInView() {
      const e = this.position.config.client.viewability,
        t = e.percent / 100,
        i = N.getVisibilityMetrics(this.element, this.#_),
        s = i.totalPercentage >= t;
      let n = 0;
      return (
        e.pixels > 0 && (n = i.totalPercentage * i.containerPixels),
        s || (e.pixels > 0 && n >= e.pixels)
      );
    }
    get isInView() {
      return this.#M;
    }
    get isExpanded() {
      const e = this.renderer;
      return !!e.renderedContainer?.isExpanded;
    }
    get hasMouseOver() {
      return this.#v;
    }
    get isFocused() {
      const e = this.renderer.renderedContainer?.iframe;
      return e && document.activeElement === e;
    }
    get size() {
      return this.#C || {};
    }
    get lastAdSize() {
      return this.#x;
    }
    _pageStateChanged() {
      const e = this.position.config.client,
        t = this.pageObserver,
        i = t.isVisible && t.hasFocus,
        s = t.isVisible && this._isAreaInView();
      this._changeViewabilityState(s),
        e.render.requireViewable && this.#L && s
          ? this._processAndInjectAd()
          : e.viewability.clearOnPageInactive && !i && this.clearAd();
    }
    _changeViewabilityState(e) {
      e !== this.#M &&
        ((this.#M = e),
        this._fireVisibilityEvent(e),
        this.#F && (e && this.#P ? this.#F.restart() : this.#F.stop()));
    }
    _fireVisibilityEvent(e) {
      const t = e ? se.VIEW_START : se.VIEW_END;
      this._triggerEvent(t);
    }
    _onRenderComplete() {
      (this.#P = !0),
        this._triggerEvent(
          se.RENDER_COMPLETE,
          this.renderer.renderingContainer.renderedSize,
        ),
        this.#F
          ? this.#F.reset()
          : (this.#F = new be({
              time: this.position.config.client.viewability.duration,
              limit: 1,
              callback: () => this._triggerEvent(se.VIEWABLE),
            })),
        this.#M && this.#F.restart();
    }
    _onAdLoad() {
      this._triggerEvent(se.AD_LOAD);
    }
    _onAdLoadTimeOut() {
      this._triggerEvent(se.AD_LOAD_TIMEOUT);
    }
    _onAdSizeChanged(e) {
      const t = e.meta;
      this.#C = t;
      const i = this.position.adData.config.client?.render?.allowedSizes;
      t.width > 1 &&
        t.height > 1 &&
        i &&
        i.includes(`${t.width}x${t.height}`) &&
        (this.#x = t),
        this._triggerEvent(se.AD_SIZE_CHANGED, e.meta);
    }
    _onMouseOver() {
      this.#v = !0;
    }
    _onMouseOut() {
      this.#v = !1;
    }
    _onAdMessageReceived(e) {
      this._triggerEvent(se.AD_MESSAGE, e.meta);
    }
    _onAdGeometryChanged(e) {
      this._triggerEvent(se.RESIZE, e.meta);
    }
    _triggerEvent(e, t) {
      this.trigger(
        new se(e, Object.assign({ positionName: this.position.name }, t)),
      );
    }
    _toggleElementListeners(e = !0) {
      const t = (e ? "add" : "remove") + "EventListener";
      this.element[t]("mouseover", this.#N),
        this.element[t]("mouseout", this.#y);
    }
    _toggleRendererEventListeners(e = !0) {
      const t = e ? "on" : "off",
        i = this.renderer,
        {
          RENDER_COMPLETE: s,
          AD_LOAD: n,
          AD_LOAD_TIMEOUT: o,
          AD_SIZE_CHANGED: r,
          AD_MESSAGE_RECEIVED: a,
          AD_GEOMETRY_CHANGE: h,
        } = oe;
      i[t](s, this._onRenderComplete, this),
        i[t](n, this._onAdLoad, this),
        i[t](o, this._onAdLoadTimeOut, this),
        i[t](r, this._onAdSizeChanged, this),
        i[t](a, this._onAdMessageReceived, this),
        i[t](h, this._onAdGeometryChanged, this);
    }
    _togglePageObserverEventListeners(e = !0) {
      const i = e ? "on" : "off",
        { SCROLL: s, RESIZE: n, VISIBILITY: o, FOCUS: r, BLUR: a } = t;
      [s, n, o, r, a].forEach((e) => {
        this.pageObserver[i](e, this._pageStateChanged, this);
      }),
        (this.#b = e);
    }
  }
  Object.assign(Ne.prototype, g);
  const ye = Ne;
  function ve(e) {
    return (
      e && "IFRAME" === e.tagName && e.id && 0 === e.id.indexOf("jacSandbox_")
    );
  }
  class Le {
    static FOCUS_PLACE_HOLDER;
    focusedElement;
    iframeMouseOver = !1;
    #_;
    #p;
    init(e, i, s = window) {
      !this.#p &&
        i._config.client.focusProtection &&
        ((this.#p = e),
        (this.#_ = s),
        (this.focusedElement = s.document.activeElement),
        e.on(t.BLUR_CAPTURE, this._onPageBlurCapture, this),
        e.on(t.FOCUS_IN, this._onPageFocusIn, this),
        e.on(t.MOUSE_OVER, this._onMouseOver, this),
        e.on(t.MOUSE_OUT, this._onMouseOut, this));
    }
    get pageObserver() {
      return this.#p;
    }
    _onPageBlurCapture(e) {
      setTimeout(() => {
        const t = this.#_.document,
          i = ve(t.activeElement);
        i ||
          e.target === this.#_ ||
          this.focusedElement === t.activeElement ||
          (this.focusedElement = null),
          i &&
            !this.iframeMouseOver &&
            (this.focusedElement &&
            this.focusedElement !== this.#_ &&
            this.focusedElement !== t.body
              ? this.focusedElement.focus()
              : (this._createFocusPlaceHolder(),
                Le.FOCUS_PLACE_HOLDER.focus(),
                this.#_.focus()));
      }, 0);
    }
    _createFocusPlaceHolder() {
      if (!Le.FOCUS_PLACE_HOLDER) {
        const e = this.#_.document,
          t = (Le.FOCUS_PLACE_HOLDER = e.createElement("span"));
        (t.tabIndex = -1), e.body.insertBefore(t, e.body.firstChild);
      }
    }
    _onPageFocusIn(e) {
      "IFRAME" !== e.meta.nativeEvent.target.tagName &&
        (this.focusedElement = e.meta.nativeEvent.target);
    }
    _onMouseOver(e) {
      ve(e.meta.nativeEvent.target) && (this.iframeMouseOver = !0);
    }
    _onMouseOut(e) {
      ve(e.meta.nativeEvent.target) && (this.iframeMouseOver = !1);
    }
  }
  const Pe = {
    createFromContent(e) {
      const t = e.client.content;
      return t && t.markup
        ? {
            content: { markup: t.markup, size: { ...t.size, unit: U } },
            config: Y.clone(e),
            meta: {},
          }
        : null;
    },
  };
  class Me {
    positionNames;
    completedPositionNames = [];
    abortedPositionNames = [];
    startTime;
    endTime;
    constructor(e) {
      Object.assign(this, e);
    }
    start() {
      this.startTime || (this.startTime = new Date().getTime());
    }
    end() {
      this.endTime ||
        ((this.endTime = new Date().getTime()),
        (this.completedPositionNames = this.completedPositionNames.concat(
          this.positionNames,
        )),
        (this.positionNames = []));
    }
    isPending(e) {
      return !(this.endTime || (e && !this.positionNames.includes(e)));
    }
    completePosition(e) {
      this._movePositionName(e, this.completedPositionNames);
    }
    abortPosition(e) {
      this._movePositionName(e, this.abortedPositionNames);
    }
    isAborted() {
      return (
        0 === this.positionNames.length &&
        this.abortedPositionNames.length > 0 &&
        0 === this.completedPositionNames.length
      );
    }
    _movePositionName(e, t) {
      const i = this.positionNames.indexOf(e);
      i > -1 && !t.includes(e) && (t.push(e), this.positionNames.splice(i, 1));
    }
  }
  class Fe extends Me {
    static ACTION_NAME = "render";
  }
  const xe = "string" !== o.UNDEFINED ? "2.0.0" : "0.0.0",
    Ge = {},
    Ue = new m(),
    ze = new Le();
  function ke(e, t, i) {
    if (!Array.isArray(t) || 0 === t.length)
      return (
        L.warning(`Invalid array of position names used with JAC.${e}()`),
        { result: !1, validPositionNames: [] }
      );
    const s = t.filter((e) => Ye._config.positions[e] && (!i || i(e)));
    if (0 === s.length)
      return (
        L.warning(`JAC.${e}() aborted because there are no valid positions.`),
        { result: !1, validPositionNames: s }
      );
    if (s.length !== t.length) {
      const i = Z.diff(t, s);
      L.warning(`JAC.${e}() failed for the following positions`, i);
    }
    return { result: !0, validPositionNames: s };
  }
  function Ve(e, t) {
    Ye.trigger(new X(e, Object.assign({}, t)));
  }
  function He(e) {
    Ve(X.POSITION_CONFIG_CHANGED, {
      positionName: e.target.name,
      config: e.meta,
    });
  }
  function Be(e, t) {
    const i = Object.assign({}, t, e.meta),
      s = e.meta.positionName,
      n = Ye._positions[s].render;
    e.type === se.RENDER_COMPLETE
      ? (n.completePosition(s), Ve(X.POSITION_RENDER_COMPLETE, i))
      : e.type === se.RENDER_FAILED &&
        (n.abortPosition(s), Ve(X.POSITION_RENDER_FAILED, i)),
      n.positionNames.length <= 0 &&
        (n.end(),
        Ve(X.RENDER_COMPLETE, { positionNames: n.completedPositionNames }));
  }
  function $e(e) {
    !(function (e, t) {
      const i = t.filter((t) => {
        const i = Ye._positions[t];
        if (i) {
          const s = i.config.client[e].auto,
            n = je(t),
            o = i[e] && i[e].isPending(t);
          return s && !o && n === (e === Fe.ACTION_NAME);
        }
        return !1;
      });
      i.length > 0 && Ye[e](i);
    })(Fe.ACTION_NAME, e);
  }
  function je(e) {
    return !!Ge[e];
  }
  function We(e) {
    const t = Ye._config.positions[e];
    if (t) {
      const i = Y.clone(t);
      Ge[e].config = Y.copy(i, Ge[e].config);
    }
  }
  const Ye = {
    _pageObserver: Ue,
    _pageProtection: ze,
    _adData: Ge,
    _positions: {},
    _positionComponents: {},
    _config: null,
    _globalConfigProcessed: !1,
    get version() {
      return xe;
    },
    setConfig(e) {
      const t = e;
      this._config = new te(e);
      const i = this._config.client.positions;
      if (i) {
        Object.keys(this._positions)
          .filter((e) => !i[e])
          .forEach((e) => this.destroyPosition(e)),
          Object.keys(i).forEach((e) => {
            const t = this._config.positions[e];
            this._createPosition(e, t);
          });
      }
      ze.init(Ue, this, window),
        (function (e) {
          if (
            e.client &&
            h.isFunction(e.client.onReady) &&
            !Ye._globalConfigProcessed
          ) {
            const t = e.client.onReady;
            try {
              t();
            } catch (e) {
              L.error("Error while calling JAC_CONFIG.onReady():", e);
            }
          }
        })(t);
      const s = Object.keys(i);
      this._pageObserver.domLoaded && $e(s);
    },
    getConfig() {
      return this._config ? this._config.clone() : void 0;
    },
    updateConfig(e, t) {
      if (!this._config) return void L.warning("JAC Config has not been set.");
      const i = Ye.getConfig();
      if (
        this._config.updateConfigSection(e, t) &&
        0 === e.indexOf(te.CLIENT_POSITIONS_PROPERTY)
      ) {
        if (e === te.CLIENT_POSITIONS_PROPERTY)
          Ye.setConfig(this._config.input);
        else {
          const t = this._config.getPositionNameFromConfigPath(e);
          !(function (e, t) {
            const i = Ye._config.client.positions[e],
              s = Ye._config.positions[e];
            Ye._createPosition(e, s),
              i.render.auto && !t.render.auto && Ue.domLoaded && $e([e]);
          })(t, i.client.positions[t]);
        }
        const t = e.split(".")[2];
        t && Ge[t] && We(t);
      }
    },
    createPosition(e, t) {
      if (!h.isString(e))
        return void L.warning(
          `Non-string positionName found that is ignored: ${e}.`,
        );
      this._config || this.setConfig({}), this._config.updatePosition(e, t);
      const i = this._config.positions[e];
      this._createPosition(e, i);
      const s = [e];
      Ge[e] && We(e), this._pageObserver.domLoaded && $e(s);
    },
    _createPosition(e, t) {
      let i = this._positions[e];
      i
        ? i.update(t)
        : ((this._positions[e] = i = new j(e, t)),
          i.on(V.CONFIG_UPDATE, He),
          Ve(X.POSITION_CREATED, { positionName: e }));
      const s = t.client.content;
      if (s && s.markup) {
        const s = Pe.createFromContent(t);
        i.applyAdData(s), (Ge[e] = s);
      }
      return i;
    },
    _createPositionComponent(e) {
      const t = e.name,
        i = new ye(e, this._pageObserver),
        s = { positionName: t },
        n = {
          [se.RENDER_START]: () => {
            Ve(X.POSITION_RENDER_START, s);
          },
          [se.RENDER_COMPLETE]: (e) => {
            Be(e, s);
          },
          [se.RENDER_FAILED]: (e) => {
            Be(e, s);
          },
          [se.VIEW_START]: () => {
            Ve(X.POSITION_VIEW_START, s);
          },
          [se.VIEW_END]: () => {
            Ve(X.POSITION_VIEW_END, s);
          },
          [se.VIEWABLE]: () => {
            Ve(X.POSITION_VIEWABLE, s);
          },
          [se.AD_LOAD]: () => {
            Ve(X.AD_LOAD_COMPLETE, s);
          },
          [se.AD_LOAD_TIMEOUT]: () => {
            Ve(X.AD_LOAD_TIMEOUT, s);
          },
          [se.AD_SIZE_CHANGED]: (e) => {
            const t = Object.assign({}, s, e.meta);
            Ve(X.AD_SIZE_CHANGED, t);
          },
          [se.AD_MESSAGE]: (e) => {
            const t = Object.assign({}, s, e.meta);
            Ve(X.AD_MESSAGE, t);
          },
          [se.DESTROY]: () => {
            o("off"), delete this._positionComponents[t];
          },
        },
        o = (e) => Object.keys(n).forEach((t) => i[e](t, n[t]));
      return o("on"), i;
    },
    destroyPosition(e) {
      const t = this._positionComponents[e];
      t && t.destroy();
      const i = this._positions[e];
      i &&
        (i.off(V.CONFIG_UPDATE, He),
        this.abort([e]),
        this._config.removePosition(e),
        delete this._positions[e],
        delete Ge[e]);
    },
    render(e) {
      if (!this._config) return void L.warning("JAC Config has not been set.");
      h.isSet(e) || (e = Object.keys(Ge));
      const { result: t, validPositionNames: i } = ke("render", e, (e) => {
        const t = this._positions[e];
        return (
          t &&
          (function (e, t) {
            return je(e)
              ? !!t.getTargetElement() ||
                  (L.warning(
                    `Target HTML element not found for position ${e}.`,
                  ),
                  !1)
              : (L.warning(`No ad data for position ${e}.`), !1);
          })(e, t.config)
        );
      });
      if (t) {
        const e = new Fe({ positionNames: i });
        e.start(),
          i.forEach((t) => {
            this._positions[t].render = e;
          }),
          Ve(X.RENDER_START, { positionNames: i }),
          i.forEach((e) => {
            const t = this._positions[e];
            this._positionComponents[e] ||
              (this._positionComponents[e] = this._createPositionComponent(t)),
              this._positionComponents[e].render(),
              delete Ge[e];
          });
      }
    },
    abort(e) {
      h.isSet(e) || (e = Object.keys(this._positions));
      const { result: t, validPositionNames: i } = ke("abort", e);
      t &&
        i.forEach((e) => {
          const t = this._positions[e],
            i = t.render;
          if (i && i.isPending(e)) {
            i.abortPosition(e), (t.render = null);
            const s = this._positionComponents[e];
            s && s.abortRender();
          }
        });
    },
    clear(e) {
      h.isSet(e) || (e = Object.keys(this._positions));
      const { result: t, validPositionNames: i } = ke("clear", e);
      t &&
        i.forEach((e) => {
          const t = this._positionComponents[e];
          t && t.clearAd();
        });
    },
    isPositionPending(e) {
      const t = this._positions[e];
      return !!(t && t.render && t.render.isPending(e));
    },
    getPending() {
      return Object.keys(this._positions).filter((e) =>
        this.isPositionPending(e),
      );
    },
    updateMeta(e, t, i, s) {
      if (!t || (h.isString(t) && !i))
        return void L.warning("Invalid meta was provided.");
      const { result: n, validPositionNames: o } = ke("updateMeta", e);
      n &&
        o.forEach((e) => {
          this._positions[e].updateMeta(t, i, s);
        });
    },
  };
  Object.assign(Ye, g);
  const Ze = Ye;
  window !== window.top && "undefined" == typeof JAC_CONFIG
    ? (function (e) {
        if (
          !(function (e) {
            const t = [/^.*yahoosandbox\.com$/, /^.*localhost(:\d+)?$/];
            let i = (function (e) {
              let t = !1;
              try {
                e.parent.location.href && (t = !0);
              } catch (e) {
                t = !1;
              }
              return t;
            })(e);
            if (!i) {
              const i = e.location.host;
              return t.filter((e) => i.match(e)).length > 0;
            }
            try {
              return !e.frameElement.src;
            } catch (e) {
              return !0;
            }
          })(e)
        )
          return void L.error("Invalid context detected");
        const {
            token: t,
            adMarkup: s,
            position: n,
            safeFrameData: o,
          } = (function (e) {
            const t = e.name;
            if (!t) throw Error("No data provided for the position sandbox.");
            e.name = "";
            try {
              e.frameElement.removeAttribute("name");
            } catch (e) {}
            let i, s, n;
            try {
              const e = JSON.parse(t);
              (i = e.token), (s = e.adData), (n = e.safeFrame);
            } catch (e) {
              throw Error("Invalid data provided for the position sandbox.");
            }
            if (!i) throw Error("Missing sandbox token.");
            if (!s || !s.content) throw Error("Missing sandbox ad data.");
            if (
              (s.content.markup || L.warning("Missing sandbox ad markup."),
              !s.content.size ||
                !s.content.size.width ||
                !s.content.size.height)
            )
              throw Error("Missing sandbox ad size.");
            if (!s.config || !s.config.client)
              throw Error("Missing sandbox position config.");
            const o = new j("", s.config);
            return (
              o.updateContainerType(s.meta || {}),
              {
                token: i,
                adMarkup: s.content.markup,
                position: o,
                safeFrameData: n,
              }
            );
          })(e),
          r = n.config;
        !(function (e, t) {
          W = new A(t.top, e);
        })(t, e),
          n.containerType === z.SAFE_FRAME &&
            (function (e, t, i) {
              W.listen(),
                (e.$sf = { ext: new x(W, t, i, e) }),
                (e.Y = { SandBox: { vendor: new G(W) } });
            })(e, r, o),
          i.addPageLoadListener(() =>
            (function ({ positionConfig: e }) {
              const t = e.client.sandbox.anchorTarget;
              if ((W.send(new p({ topic: p.topic.PAGE_LOAD })), t)) {
                const e = document.getElementsByTagName("a");
                for (let i = 0; i < e.length; i++)
                  e[i].setAttribute("target", t);
              }
            })({ positionConfig: r }),
          ),
          (function (e, t) {
            e.document.write(`<div>${t}</div>`);
          })(e, s),
          W.send(new p({ topic: p.topic.WRITE_COMPLETE }));
      })(window)
    : (Object.assign(Ze, { PageObserver: m, PageEvent: t }),
      (window.JAC = Ze),
      (function (e) {
        !(function (e) {
          e.JAC_CONFIG && Ye.setConfig(e.JAC_CONFIG),
            (Ye._globalConfigProcessed = !0);
        })(e),
          Ue.on(t.DOM_LOADED, () => {
            $e(Object.keys(Ye._adData));
          });
      })(window));
})();
