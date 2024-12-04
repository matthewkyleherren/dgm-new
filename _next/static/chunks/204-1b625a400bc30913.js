(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [204],
  {
    187: function (e, t, n) {
      "use strict";
      n.d(t, {
        v: function () {
          return A;
        },
      });
      var r = n(5893);
      let i =
          (...e) =>
          (...t) => {
            for (let n = 0; n < e.length; n++) {
              let r = e[n];
              if (r) {
                let e = r(...t);
                if (null != e) return e;
              }
            }
          },
        s = {
          listItem: "list-item",
          oListItem: "o-list-item",
          list: "group-list-item",
          oList: "group-o-list-item",
          span: "span",
        },
        o = {
          [s.listItem]: "listItem",
          [s.oListItem]: "oListItem",
          [s.list]: "list",
          [s.oList]: "oList",
        },
        l = (e) => (t, n, r, i, s) => {
          let l = e[o[t] || t];
          if (l) return l({ type: t, node: n, text: r, children: i, key: s });
        };
      var u = n(7294);
      let a = () => (++a.i).toString();
      a.i = 0;
      let h = (e) => {
          let t = p(e),
            n = [];
          for (let e = 0; e < t.length; e++) n.push(f(t[e]));
          return { key: a(), children: n };
        },
        c = (e, t = []) => ({
          key: a(),
          type: e.type,
          text: "text" in e ? e.text : void 0,
          node: e,
          children: t,
        }),
        d = (e) => c({ type: s.span, text: e, spans: [] }),
        p = (e) => {
          let t = e.slice(0);
          for (let e = 0; e < t.length; e++) {
            let n = t[e];
            if (n.type === s.listItem || n.type === s.oListItem) {
              let r = [n];
              for (; t[e + 1] && t[e + 1].type === n.type; )
                r.push(t[e + 1]), t.splice(e, 1);
              n.type === s.listItem
                ? (t[e] = { type: s.list, items: r })
                : (t[e] = { type: s.oList, items: r });
            }
          }
          return t;
        },
        f = (e) => {
          if ("text" in e) return c(e, m(e.spans, e));
          if ("items" in e) {
            let t = [];
            for (let n = 0; n < e.items.length; n++) t.push(f(e.items[n]));
            return c(e, t);
          }
          return c(e);
        },
        m = (e, t, n) => {
          if (!e.length) return [d(t.text)];
          let r = e.slice(0);
          r.sort((e, t) => e.start - t.start || t.end - e.end);
          let i = [];
          for (let e = 0; e < r.length; e++) {
            let s = r[e],
              o = (n && n.start) || 0,
              l = s.start - o,
              u = s.end - o,
              a = t.text.slice(l, u),
              h = [];
            for (let t = e; t < r.length; t++) {
              let e = r[t];
              e !== s &&
                (e.start >= s.start && e.end <= s.end
                  ? (h.push(e), r.splice(t, 1), t--)
                  : e.start < s.end &&
                    e.end > s.start &&
                    (h.push({ ...e, end: s.end }),
                    (r[t] = { ...e, start: s.end })));
            }
            0 === e && l > 0 && i.push(d(t.text.slice(0, l)));
            let p = { ...s, text: a };
            i.push(c(p, m(h, { ...t, text: a }, s))),
              u < t.text.length &&
                i.push(
                  d(t.text.slice(u, r[e + 1] ? r[e + 1].start - o : void 0)),
                );
          }
          return i;
        },
        _ = (e, t) => y(h(e).children, t),
        y = (e, t) => {
          let n = [];
          for (let r = 0; r < e.length; r++) {
            let i = e[r],
              s = t(i.type, i.node, i.text, y(i.children, t), i.key);
            null != s && n.push(s);
          }
          return n;
        },
        v = (e) => {
          let t = /^(\/(?!\/)|#)/.test(e),
            n = !t && !/^https?:\/\//.test(e);
          return t && !n;
        },
        g = { Any: "Any", Document: "Document", Media: "Media", Web: "Web" },
        S = (e) => {
          var t;
          return {
            link_type: g.Document,
            id: e.id,
            uid: e.uid || void 0,
            type: e.type,
            tags: e.tags,
            lang: e.lang,
            url: null == e.url ? void 0 : e.url,
            slug: null == (t = e.slugs) ? void 0 : t[0],
            ...(e.data && Object.keys(e.data).length > 0
              ? { data: e.data }
              : {}),
          };
        },
        x = (e, ...t) => {
          let n;
          if (!e) return null;
          let r = "link_type" in e ? e : S(e),
            [i] = t;
          switch (
            ((n =
              "function" == typeof i || null == i
                ? { linkResolver: i }
                : { ...i }),
            r.link_type)
          ) {
            case g.Media:
            case g.Web:
              return "url" in r ? r.url : null;
            case g.Document:
              if ("id" in r && n.linkResolver) {
                let e = n.linkResolver(r);
                if (null != e) return e;
              }
              if ("url" in r && r.url) return r.url;
              return null;
            case g.Any:
            default:
              return null;
          }
        },
        j = (e) => null != e,
        b = (e) =>
          !!j(e) &&
          (1 === e.length && "text" in e[0] ? !!e[0].text : !!e.length),
        k = (e) => j(e) && ("id" in e || "url" in e),
        C = (e, t = {}) => {
          if (e && ("link_type" in e ? k(e) : e)) {
            let n = "target" in e ? e.target : void 0,
              r = x(e, t.linkResolver),
              i = null == r ? void 0 : r,
              s = "string" == typeof i && !v(i),
              o = t.rel
                ? t.rel({ href: i, isExternal: s, target: n })
                : s
                  ? "noreferrer"
                  : void 0;
            return { href: i, target: n, rel: null == o ? void 0 : o };
          }
          return {};
        },
        R = (e) => {
          let t = /^(\/(?!\/)|#)/.test(e),
            n = !t && !/^https?:\/\//.test(e);
          return t && !n;
        };
      n(3454);
      let F = u.forwardRef(function (
        {
          field: e,
          document: t,
          linkResolver: n,
          internalComponent: i,
          externalComponent: s,
          ...o
        },
        l,
      ) {
        let {
            href: u,
            rel: a,
            ...h
          } = C(e ?? t, {
            linkResolver: n,
            rel: "function" == typeof o.rel ? o.rel : void 0,
          }),
          c = a;
        "rel" in o && "function" != typeof o.rel && (c = o.rel);
        let d = ("href" in o ? o.href : u) || "",
          p = d && R(d) ? i || "a" : s || "a";
        return (0, r.jsx)(p, { ref: l, ...h, ...o, href: d, rel: c });
      });
      n(3454);
      let z = (e) =>
        l({
          heading1: ({ children: e, key: t }) =>
            (0, r.jsx)("h1", { children: e }, t),
          heading2: ({ children: e, key: t }) =>
            (0, r.jsx)("h2", { children: e }, t),
          heading3: ({ children: e, key: t }) =>
            (0, r.jsx)("h3", { children: e }, t),
          heading4: ({ children: e, key: t }) =>
            (0, r.jsx)("h4", { children: e }, t),
          heading5: ({ children: e, key: t }) =>
            (0, r.jsx)("h5", { children: e }, t),
          heading6: ({ children: e, key: t }) =>
            (0, r.jsx)("h6", { children: e }, t),
          paragraph: ({ children: e, key: t }) =>
            (0, r.jsx)("p", { children: e }, t),
          preformatted: ({ node: e, key: t }) =>
            (0, r.jsx)("pre", { children: e.text }, t),
          strong: ({ children: e, key: t }) =>
            (0, r.jsx)("strong", { children: e }, t),
          em: ({ children: e, key: t }) => (0, r.jsx)("em", { children: e }, t),
          listItem: ({ children: e, key: t }) =>
            (0, r.jsx)("li", { children: e }, t),
          oListItem: ({ children: e, key: t }) =>
            (0, r.jsx)("li", { children: e }, t),
          list: ({ children: e, key: t }) =>
            (0, r.jsx)("ul", { children: e }, t),
          oList: ({ children: e, key: t }) =>
            (0, r.jsx)("ol", { children: e }, t),
          image: ({ node: t, key: n }) => {
            let i = (0, r.jsx)("img", {
              src: t.url,
              alt: t.alt ?? void 0,
              "data-copyright": t.copyright ? t.copyright : void 0,
            });
            return (0, r.jsx)(
              "p",
              {
                className: "block-img",
                children: t.linkTo
                  ? (0, r.jsx)(F, {
                      linkResolver: e.linkResolver,
                      internalComponent: e.internalLinkComponent,
                      externalComponent: e.externalLinkComponent,
                      field: t.linkTo,
                      children: i,
                    })
                  : i,
              },
              n,
            );
          },
          embed: ({ node: e, key: t }) =>
            (0, r.jsx)(
              "div",
              {
                "data-oembed": e.oembed.embed_url,
                "data-oembed-type": e.oembed.type,
                "data-oembed-provider": e.oembed.provider_name,
                dangerouslySetInnerHTML: { __html: e.oembed.html ?? "" },
              },
              t,
            ),
          hyperlink: ({ node: t, children: n, key: i }) =>
            (0, r.jsx)(
              F,
              {
                field: t.data,
                linkResolver: e.linkResolver,
                internalComponent: e.internalLinkComponent,
                externalComponent: e.externalLinkComponent,
                children: n,
              },
              i,
            ),
          label: ({ node: e, children: t, key: n }) =>
            (0, r.jsx)("span", { className: e.data.label, children: t }, n),
          span: ({ text: e, key: t }) => {
            let n = [],
              i = 0;
            for (let t of e.split("\n"))
              i > 0 && n.push((0, r.jsx)("br", {}, `${i}__break`)),
                n.push((0, r.jsx)(u.Fragment, { children: t }, `${i}__line`)),
                i++;
            return (0, r.jsx)(u.Fragment, { children: n }, t);
          },
        });
      function I({
        linkResolver: e,
        field: t,
        fallback: n,
        components: s,
        externalLinkComponent: o,
        internalLinkComponent: a,
        ...h
      }) {
        return u.useMemo(() => {
          if (!b(t))
            return null != n ? (0, r.jsx)(r.Fragment, { children: n }) : null;
          {
            let n = i(
                "object" == typeof s ? l(s) : s,
                z({
                  linkResolver: e,
                  internalLinkComponent: a,
                  externalLinkComponent: o,
                }),
              ),
              h = _(t, (e, t, r, i, s) => {
                let o = n(e, t, r, i, s);
                return u.isValidElement(o) && null == o.key
                  ? u.cloneElement(o, { key: s })
                  : o;
              });
            return (0, r.jsx)(r.Fragment, { children: h });
          }
        }, [t, a, o, s, e, n]);
      }
      let L = u.createContext({}),
        T = () => u.useContext(L) || {},
        A = function ({ components: e, ...t }) {
          let n = T(),
            s = i(
              "object" == typeof e ? l(e) : e,
              "object" == typeof n.richTextComponents
                ? l(n.richTextComponents)
                : n.richTextComponents,
            );
          return (0, r.jsx)(I, {
            components: s,
            internalLinkComponent: n.internalLinkComponent,
            externalLinkComponent: n.externalLinkComponent,
            ...t,
          });
        };
    },
    2350: function () {},
    9578: function (e, t, n) {
      var r = n(3454);
      n(2350);
      var i = n(7294),
        s = i && "object" == typeof i && "default" in i ? i : { default: i };
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var l = void 0 !== r && r.env && !0,
        u = function (e) {
          return "[object String]" === Object.prototype.toString.call(e);
        },
        a = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              n = t.name,
              r = void 0 === n ? "stylesheet" : n,
              i = t.optimizeForSpeed,
              s = void 0 === i ? l : i;
            h(u(r), "`name` must be a string"),
              (this._name = r),
              (this._deletedRulePlaceholder = "#" + r + "-deleted-rule____{}"),
              h("boolean" == typeof s, "`optimizeForSpeed` must be a boolean"),
              (this._optimizeForSpeed = s),
              (this._serverSheet = void 0),
              (this._tags = []),
              (this._injected = !1),
              (this._rulesCount = 0);
            var o = document.querySelector('meta[property="csp-nonce"]');
            this._nonce = o ? o.getAttribute("content") : null;
          }
          var t,
            n = e.prototype;
          return (
            (n.setOptimizeForSpeed = function (e) {
              h(
                "boolean" == typeof e,
                "`setOptimizeForSpeed` accepts a boolean",
              ),
                h(
                  0 === this._rulesCount,
                  "optimizeForSpeed cannot be when rules have already been inserted",
                ),
                this.flush(),
                (this._optimizeForSpeed = e),
                this.inject();
            }),
            (n.isOptimizeForSpeed = function () {
              return this._optimizeForSpeed;
            }),
            (n.inject = function () {
              var e = this;
              if (
                (h(!this._injected, "sheet already injected"),
                (this._injected = !0),
                this._optimizeForSpeed)
              ) {
                (this._tags[0] = this.makeStyleTag(this._name)),
                  (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                  this._optimizeForSpeed ||
                    (l ||
                      console.warn(
                        "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.",
                      ),
                    this.flush(),
                    (this._injected = !0));
                return;
              }
              this._serverSheet = {
                cssRules: [],
                insertRule: function (t, n) {
                  return (
                    "number" == typeof n
                      ? (e._serverSheet.cssRules[n] = { cssText: t })
                      : e._serverSheet.cssRules.push({ cssText: t }),
                    n
                  );
                },
                deleteRule: function (t) {
                  e._serverSheet.cssRules[t] = null;
                },
              };
            }),
            (n.getSheetForTag = function (e) {
              if (e.sheet) return e.sheet;
              for (var t = 0; t < document.styleSheets.length; t++)
                if (document.styleSheets[t].ownerNode === e)
                  return document.styleSheets[t];
            }),
            (n.getSheet = function () {
              return this.getSheetForTag(this._tags[this._tags.length - 1]);
            }),
            (n.insertRule = function (e, t) {
              if (
                (h(u(e), "`insertRule` accepts only strings"),
                this._optimizeForSpeed)
              ) {
                var n = this.getSheet();
                "number" != typeof t && (t = n.cssRules.length);
                try {
                  n.insertRule(e, t);
                } catch (t) {
                  return (
                    l ||
                      console.warn(
                        "StyleSheet: illegal rule: \n\n" +
                          e +
                          "\n\nSee https://stackoverflow.com/q/20007992 for more info",
                      ),
                    -1
                  );
                }
              } else {
                var r = this._tags[t];
                this._tags.push(this.makeStyleTag(this._name, e, r));
              }
              return this._rulesCount++;
            }),
            (n.replaceRule = function (e, t) {
              if (this._optimizeForSpeed) {
                var n = this.getSheet();
                if (
                  (t.trim() || (t = this._deletedRulePlaceholder),
                  !n.cssRules[e])
                )
                  return e;
                n.deleteRule(e);
                try {
                  n.insertRule(t, e);
                } catch (r) {
                  l ||
                    console.warn(
                      "StyleSheet: illegal rule: \n\n" +
                        t +
                        "\n\nSee https://stackoverflow.com/q/20007992 for more info",
                    ),
                    n.insertRule(this._deletedRulePlaceholder, e);
                }
              } else {
                var r = this._tags[e];
                h(r, "old rule at index `" + e + "` not found"),
                  (r.textContent = t);
              }
              return e;
            }),
            (n.deleteRule = function (e) {
              if (this._optimizeForSpeed) this.replaceRule(e, "");
              else {
                var t = this._tags[e];
                h(t, "rule at index `" + e + "` not found"),
                  t.parentNode.removeChild(t),
                  (this._tags[e] = null);
              }
            }),
            (n.flush = function () {
              (this._injected = !1),
                (this._rulesCount = 0),
                this._tags.forEach(function (e) {
                  return e && e.parentNode.removeChild(e);
                }),
                (this._tags = []);
            }),
            (n.cssRules = function () {
              var e = this;
              return this._tags.reduce(function (t, n) {
                return (
                  n
                    ? (t = t.concat(
                        Array.prototype.map.call(
                          e.getSheetForTag(n).cssRules,
                          function (t) {
                            return t.cssText === e._deletedRulePlaceholder
                              ? null
                              : t;
                          },
                        ),
                      ))
                    : t.push(null),
                  t
                );
              }, []);
            }),
            (n.makeStyleTag = function (e, t, n) {
              t &&
                h(
                  u(t),
                  "makeStyleTag accepts only strings as second parameter",
                );
              var r = document.createElement("style");
              this._nonce && r.setAttribute("nonce", this._nonce),
                (r.type = "text/css"),
                r.setAttribute("data-" + e, ""),
                t && r.appendChild(document.createTextNode(t));
              var i = document.head || document.getElementsByTagName("head")[0];
              return n ? i.insertBefore(r, n) : i.appendChild(r), r;
            }),
            o(e.prototype, [
              {
                key: "length",
                get: function () {
                  return this._rulesCount;
                },
              },
            ]),
            t && o(e, t),
            e
          );
        })();
      function h(e, t) {
        if (!e) throw Error("StyleSheet: " + t + ".");
      }
      var c = function (e) {
          for (var t = 5381, n = e.length; n; )
            t = (33 * t) ^ e.charCodeAt(--n);
          return t >>> 0;
        },
        d = {};
      function p(e, t) {
        if (!t) return "jsx-" + e;
        var n = String(t),
          r = e + n;
        return d[r] || (d[r] = "jsx-" + c(e + "-" + n)), d[r];
      }
      function f(e, t) {
        var n = e + t;
        return (
          d[n] || (d[n] = t.replace(/__jsx-style-dynamic-selector/g, e)), d[n]
        );
      }
      var m = (function () {
          function e(e) {
            var t = void 0 === e ? {} : e,
              n = t.styleSheet,
              r = void 0 === n ? null : n,
              i = t.optimizeForSpeed,
              s = void 0 !== i && i;
            (this._sheet =
              r || new a({ name: "styled-jsx", optimizeForSpeed: s })),
              this._sheet.inject(),
              r &&
                "boolean" == typeof s &&
                (this._sheet.setOptimizeForSpeed(s),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {});
          }
          var t = e.prototype;
          return (
            (t.add = function (e) {
              var t = this;
              void 0 === this._optimizeForSpeed &&
                ((this._optimizeForSpeed = Array.isArray(e.children)),
                this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                this._fromServer ||
                  ((this._fromServer = this.selectFromServer()),
                  (this._instancesCounts = Object.keys(this._fromServer).reduce(
                    function (e, t) {
                      return (e[t] = 0), e;
                    },
                    {},
                  )));
              var n = this.getIdAndRules(e),
                r = n.styleId,
                i = n.rules;
              if (r in this._instancesCounts) {
                this._instancesCounts[r] += 1;
                return;
              }
              var s = i
                .map(function (e) {
                  return t._sheet.insertRule(e);
                })
                .filter(function (e) {
                  return -1 !== e;
                });
              (this._indices[r] = s), (this._instancesCounts[r] = 1);
            }),
            (t.remove = function (e) {
              var t = this,
                n = this.getIdAndRules(e).styleId;
              if (
                ((function (e, t) {
                  if (!e) throw Error("StyleSheetRegistry: " + t + ".");
                })(
                  n in this._instancesCounts,
                  "styleId: `" + n + "` not found",
                ),
                (this._instancesCounts[n] -= 1),
                this._instancesCounts[n] < 1)
              ) {
                var r = this._fromServer && this._fromServer[n];
                r
                  ? (r.parentNode.removeChild(r), delete this._fromServer[n])
                  : (this._indices[n].forEach(function (e) {
                      return t._sheet.deleteRule(e);
                    }),
                    delete this._indices[n]),
                  delete this._instancesCounts[n];
              }
            }),
            (t.update = function (e, t) {
              this.add(t), this.remove(e);
            }),
            (t.flush = function () {
              this._sheet.flush(),
                this._sheet.inject(),
                (this._fromServer = void 0),
                (this._indices = {}),
                (this._instancesCounts = {});
            }),
            (t.cssRules = function () {
              var e = this,
                t = this._fromServer
                  ? Object.keys(this._fromServer).map(function (t) {
                      return [t, e._fromServer[t]];
                    })
                  : [],
                n = this._sheet.cssRules();
              return t.concat(
                Object.keys(this._indices)
                  .map(function (t) {
                    return [
                      t,
                      e._indices[t]
                        .map(function (e) {
                          return n[e].cssText;
                        })
                        .join(e._optimizeForSpeed ? "" : "\n"),
                    ];
                  })
                  .filter(function (e) {
                    return !!e[1];
                  }),
              );
            }),
            (t.styles = function (e) {
              var t, n;
              return (
                (t = this.cssRules()),
                void 0 === (n = e) && (n = {}),
                t.map(function (e) {
                  var t = e[0],
                    r = e[1];
                  return s.default.createElement("style", {
                    id: "__" + t,
                    key: "__" + t,
                    nonce: n.nonce ? n.nonce : void 0,
                    dangerouslySetInnerHTML: { __html: r },
                  });
                })
              );
            }),
            (t.getIdAndRules = function (e) {
              var t = e.children,
                n = e.dynamic,
                r = e.id;
              if (n) {
                var i = p(r, n);
                return {
                  styleId: i,
                  rules: Array.isArray(t)
                    ? t.map(function (e) {
                        return f(i, e);
                      })
                    : [f(i, t)],
                };
              }
              return { styleId: p(r), rules: Array.isArray(t) ? t : [t] };
            }),
            (t.selectFromServer = function () {
              return Array.prototype.slice
                .call(document.querySelectorAll('[id^="__jsx-"]'))
                .reduce(function (e, t) {
                  return (e[t.id.slice(2)] = t), e;
                }, {});
            }),
            e
          );
        })(),
        _ = i.createContext(null);
      _.displayName = "StyleSheetContext";
      var y = s.default.useInsertionEffect || s.default.useLayoutEffect,
        v = new m();
      function g(e) {
        var t = v || i.useContext(_);
        return (
          t &&
            y(
              function () {
                return (
                  t.add(e),
                  function () {
                    t.remove(e);
                  }
                );
              },
              [e.id, String(e.dynamic)],
            ),
          null
        );
      }
      (g.dynamic = function (e) {
        return e
          .map(function (e) {
            return p(e[0], e[1]);
          })
          .join(" ");
      }),
        (t.style = g);
    },
    6465: function (e, t, n) {
      "use strict";
      e.exports = n(9578).style;
    },
    9008: function (e, t, n) {
      e.exports = n(2636);
    },
  },
]);
