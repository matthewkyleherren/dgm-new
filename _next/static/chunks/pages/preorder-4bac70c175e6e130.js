(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [851],
  {
    7246: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/preorder",
        function () {
          return a(8471);
        },
      ]);
    },
    9293: function (e, t, a) {
      "use strict";
      var r = a(5893);
      t.Z = (e) => {
        let { stroke: t = "#575349" } = e;
        return (0, r.jsx)("svg", {
          width: "11",
          height: "9",
          viewBox: "0 0 11 9",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsx)("path", {
            id: "Vector 201",
            d: "M0 4.5H9.5M9.5 4.5L5.9 1M9.5 4.5L5.9 8",
            stroke: t,
          }),
        });
      };
    },
    8471: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          __N_SSG: function () {
            return O;
          },
          default: function () {
            return K;
          },
        });
      var r = a(5893),
        n = a(4465),
        o = a(6664),
        l = a(7294),
        d = a(8266),
        i = (e) => {
          let { isSubmit: t, paymentInformations: a } = e,
            n = (0, o.useStripe)(),
            i = (0, o.useElements)(),
            [c, s] = (0, l.useState)(null),
            u = (0, d.o)((e) => e.setIsLoading),
            p = (0, d.o)((e) => e.setSubmitting),
            h = async () => {
              if (!n || !i) return;
              u(!0);
              let { error: e } = await n.confirmPayment({
                elements: i,
                confirmParams: {
                  shipping: a.shipping,
                  payment_method_data: { billing_details: a.billing_details },
                  return_url: "https://pebblelife.com/thank-you",
                  receipt_email: t,
                },
              });
              "card_error" === e.type || "validation_error" === e.type
                ? s(e.message)
                : s("An unexpected error occurred."),
                p(!1),
                u(!1);
            };
          return (
            (0, l.useEffect)(() => {
              t && h();
            }, [t]),
            (0, r.jsxs)("div", {
              className: "relative",
              children: [
                (0, r.jsx)("div", {
                  children: (0, r.jsx)(o.PaymentElement, {
                    id: "payment-element",
                    options: {
                      layout: "tabs",
                      fields: { billingDetails: "never" },
                    },
                  }),
                }),
                c && (0, r.jsx)("div", { id: "payment-message", children: c }),
              ],
            })
          );
        },
        c = a(26),
        s = a(3297),
        u = a(9293),
        p = a(1831),
        h = a(187),
        m = a(4179);
      let x = {
        hyperlink: (e) => {
          let { children: t, node: a } = e;
          return (0, r.jsx)(m.Z, { field: a.data, children: t });
        },
      };
      function v(e) {
        let { components: t, ...a } = e;
        return (0, r.jsx)(h.v, { components: { ...x, ...t }, ...a });
      }
      var y = a(9010),
        j = a(6038),
        g = (e) => {
          let { children: t, toggle: a, hidden: n, index: o } = e,
            d = (0, l.useRef)(null),
            i = (0, l.useRef)(null),
            c = (0, l.useRef)(!0);
          return (
            (0, l.useEffect)(() => {
              j.ZP.set(d.current, { opacity: 0 });
            }, []),
            (0, l.useEffect)(() => {
              n && d.current.classList.add("hidden");
            }, [n]),
            (0, l.useEffect)(() => {
              if (c.current && !a && o > 1) {
                c.current = !1;
                return;
              }
              i.current = j.ZP.to(d.current, {
                opacity: a ? 1 : 0,
                delay: a ? 0.35 : 0,
                duration: 0.35,
                ease: "power2.out",
                onStart: () => {
                  a && d.current.classList.remove("hidden", "h-0");
                },
                onComplete: () => {
                  a || d.current.classList.add("hidden");
                },
              });
            }, [a]),
            (0, r.jsx)("div", {
              ref: d,
              className: "relative w-full opacity-0",
              children: t,
            })
          );
        },
        f = a(2099),
        b = () =>
          (0, r.jsx)("svg", {
            width: "10",
            height: "8",
            viewBox: "0 0 10 8",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              id: "Vector 207",
              d: "M1 4.34045L3.66016 7.00159L9.40784 1.25391",
              stroke: "#575349",
            }),
          });
      let w = (0, l.forwardRef)((e, t) => {
        let a = (0, o.useElements)(),
          n = (0, l.useRef)({}),
          d = (0, l.useRef)({}),
          i = (0, l.useRef)(!1),
          c = (0, l.useRef)(!1),
          [s, u] = (0, l.useState)("");
        (0, l.useImperativeHandle)(t, () => ({
          domElt: t,
          billing_details: { ...n.current, email: d.current },
          validate: p,
        }));
        let p = () =>
          new Promise((e) => {
            let t = a.getElement("address");
            i.current || d.current || u("Your email address is invalid."),
              t.getValue().then((t) => {
                (n.current = t.value), e(t.complete && i.current);
              });
          });
        return (0, r.jsxs)("div", {
          ref: t,
          children: [
            (0, r.jsx)(o.LinkAuthenticationElement, {
              onFocus: () => {
                u("");
              },
              onChange: (e) => {
                (i.current = e.complete), (d.current = e.value.email);
              },
              id: "link-authentication-element",
            }),
            (0, r.jsx)("div", {
              ref: c,
              className:
                "message mt-[2.5px] text-[#df1b41] text-[13px] font-['Arial']",
              children: s,
            }),
            (0, r.jsx)(o.AddressElement, {
              options: {
                mode: "shipping",
                fields: { phone: "always" },
                allowedCountries: ["US"],
                validation: { phone: { required: "always" } },
              },
            }),
          ],
        });
      });
      w.displayName = "AddressElementObject";
      var N = a(6009),
        k = a(6132),
        _ = a(6494),
        S = a(5905),
        R = () =>
          (0, r.jsx)("svg", {
            width: "7",
            height: "5",
            viewBox: "0 0 7 5",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, r.jsx)("path", {
              id: "Vector 206",
              d: "M3.45312 4.31139L0.453125 0.199219H6.45312L3.45312 4.31139Z",
              fill: "#575349",
            }),
          }),
        A = a(6359),
        C = a(306),
        E = a(5559),
        P = a(4613);
      let {
          forwardRef: L,
          useRef: M,
          useState: I,
          useEffect: B,
          useImperativeHandle: T,
        } = a(7294),
        G = L((e, t) => {
          let { mode: a = "full", label: n, ...o } = e,
            l = M(null),
            d = M(null),
            i = M(null),
            c = M(!1),
            s = M("US"),
            [u, p] = I(""),
            [h, m] = I(!1);
          T(t, () => ({
            ref: d.current,
            focus: x,
            getValue: j,
            setValue: y,
            setError: v,
            validate: b,
          }));
          let x = (e) => {
              m(e);
            },
            v = (e) => {
              p(e);
            },
            y = (e) => {
              d.current.value = e;
            },
            j = () => {
              if ("phone" === o.type) {
                let e = (0, C.S)(d.current.value, s.current);
                return e ? e.number : "";
              }
              return d.current.value;
            },
            g = function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.current.value);
              return (
                d.current.value || e
                  ? t
                    ? p("")
                    : p("Invalid email.")
                  : p("This field is required."),
                t && d.current.value.length > 0
              );
            },
            f = function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = (0, C.S)(d.current.value, s.current);
              return (
                (c.current = t && t.isValid()),
                d.current.value || e
                  ? c.current || (e && 0 === d.current.value.length)
                    ? p("")
                    : !c.current &&
                      d.current.value.length > 0 &&
                      p("Invalid phone number.")
                  : p("This field is required."),
                c.current && d.current.value.length > 0
              );
            },
            b = function () {
              let e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                t = !1;
              return "mail" === o.type
                ? g(e)
                : "phone" === o.type
                  ? f(e)
                  : (!o.required || d.current.value || e
                      ? ((t = !0), p(""))
                      : ((t = !1), p("This field is required.")),
                    t);
            },
            w = () => {
              let e = (0, P.L)(s.current, A.Z);
              d.current.placeholder = e.formatNational();
            };
          return (
            B(() => {
              u
                ? l.current.classList.add("is-error")
                : l.current.classList.remove("is-error");
            }, [u]),
            B(() => {
              "phone" === o.type && w();
            }, []),
            (0, r.jsxs)("div", {
              ref: l,
              className: "group relative flex "
                .concat("" !== u ? "is-error" : "", " ")
                .concat("full" === a ? "col-span-full" : "col-span-1", " ")
                .concat(h ? "is-focus" : ""),
              children: [
                "phone" === o.type &&
                  (0, r.jsxs)("div", {
                    className:
                      "c-input-select relative flex items-center text-14 leading-[2rem] tracking-[0.014rem] pb-[1.6rem] text-dark_grey bg-transparent border-[0] border-b-dark_grey/[0.15] border-b-[1px] border-solid mr-[1rem]",
                    children: [
                      (0, r.jsx)("div", {
                        ref: i,
                        className: "mr-[0.7rem]",
                        children: "+1",
                      }),
                      (0, r.jsx)("div", {
                        className: "svg-wrapper w-[0.7rem]",
                        children: (0, r.jsx)(R, {}),
                      }),
                      (0, r.jsxs)("select", {
                        defaultValue: "1",
                        name: "country-code",
                        onChange: (e) => {
                          (i.current.innerText = "+".concat(e.target.value)),
                            (s.current =
                              e.target.options[
                                e.target.selectedIndex
                              ].dataset.countryCode),
                            w(),
                            d.current.value.length > 0 && b(!0);
                        },
                        id: "",
                        className:
                          "absolute top-0 left-0 w-full h-full border-[0] bg-transparent rounded-[0] opacity-0",
                        children: [
                          (0, r.jsx)("option", {
                            "data-country-code": "US",
                            value: "1",
                            children: "USA (+1)",
                          }),
                          (0, r.jsxs)("optgroup", {
                            label: "Other countries",
                            children: [
                              (0, r.jsx)("option", {
                                "data-country-code": "DZ",
                                value: "213",
                                children: "Algeria (+213)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "AD",
                                value: "376",
                                children: "Andorra (+376)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "AO",
                                value: "244",
                                children: "Angola (+244)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "AI",
                                value: "1264",
                                children: "Anguilla (+1264)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "AG",
                                value: "1268",
                                children: "Antigua & Barbuda (+1268)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "AR",
                                value: "54",
                                children: "Argentina (+54)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "AM",
                                value: "374",
                                children: "Armenia (+374)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "AW",
                                value: "297",
                                children: "Aruba (+297)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "AU",
                                value: "61",
                                children: "Australia (+61)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "AT",
                                value: "43",
                                children: "Austria (+43)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "AZ",
                                value: "994",
                                children: "Azerbaijan (+994)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "BS",
                                value: "1242",
                                children: "Bahamas (+1242)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "BH",
                                value: "973",
                                children: "Bahrain (+973)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "BD",
                                value: "880",
                                children: "Bangladesh (+880)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "BB",
                                value: "1246",
                                children: "Barbados (+1246)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "BY",
                                value: "375",
                                children: "Belarus (+375)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "BE",
                                value: "32",
                                children: "Belgium (+32)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "BZ",
                                value: "501",
                                children: "Belize (+501)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "BJ",
                                value: "229",
                                children: "Benin (+229)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "BM",
                                value: "1441",
                                children: "Bermuda (+1441)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "BT",
                                value: "975",
                                children: "Bhutan (+975)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "BO",
                                value: "591",
                                children: "Bolivia (+591)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "BA",
                                value: "387",
                                children: "Bosnia Herzegovina (+387)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "BW",
                                value: "267",
                                children: "Botswana (+267)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "BR",
                                value: "55",
                                children: "Brazil (+55)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "BN",
                                value: "673",
                                children: "Brunei (+673)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "BG",
                                value: "359",
                                children: "Bulgaria (+359)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "BF",
                                value: "226",
                                children: "Burkina Faso (+226)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "BI",
                                value: "257",
                                children: "Burundi (+257)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "KH",
                                value: "855",
                                children: "Cambodia (+855)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "CM",
                                value: "237",
                                children: "Cameroon (+237)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "CA",
                                value: "1",
                                children: "Canada (+1)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "CV",
                                value: "238",
                                children: "Cape Verde Islands (+238)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "KY",
                                value: "1345",
                                children: "Cayman Islands (+1345)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "CF",
                                value: "236",
                                children: "Central African Republic (+236)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "CL",
                                value: "56",
                                children: "Chile (+56)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "CN",
                                value: "86",
                                children: "China (+86)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "CO",
                                value: "57",
                                children: "Colombia (+57)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "KM",
                                value: "269",
                                children: "Comoros (+269)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "CG",
                                value: "242",
                                children: "Congo (+242)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "CK",
                                value: "682",
                                children: "Cook Islands (+682)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "CR",
                                value: "506",
                                children: "Costa Rica (+506)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "HR",
                                value: "385",
                                children: "Croatia (+385)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "CU",
                                value: "53",
                                children: "Cuba (+53)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "CY",
                                value: "90392",
                                children: "Cyprus North (+90392)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "CY",
                                value: "357",
                                children: "Cyprus South (+357)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "CZ",
                                value: "42",
                                children: "Czech Republic (+42)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "DK",
                                value: "45",
                                children: "Denmark (+45)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "DJ",
                                value: "253",
                                children: "Djibouti (+253)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "DM",
                                value: "1809",
                                children: "Dominica (+1809)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "DO",
                                value: "1809",
                                children: "Dominican Republic (+1809)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "EC",
                                value: "593",
                                children: "Ecuador (+593)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "EG",
                                value: "20",
                                children: "Egypt (+20)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "SV",
                                value: "503",
                                children: "El Salvador (+503)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "GQ",
                                value: "240",
                                children: "Equatorial Guinea (+240)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "ER",
                                value: "291",
                                children: "Eritrea (+291)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "EE",
                                value: "372",
                                children: "Estonia (+372)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "ET",
                                value: "251",
                                children: "Ethiopia (+251)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "FK",
                                value: "500",
                                children: "Falkland Islands (+500)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "FO",
                                value: "298",
                                children: "Faroe Islands (+298)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "FJ",
                                value: "679",
                                children: "Fiji (+679)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "FI",
                                value: "358",
                                children: "Finland (+358)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "FR",
                                value: "33",
                                children: "France (+33)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "GF",
                                value: "594",
                                children: "French Guiana (+594)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "PF",
                                value: "689",
                                children: "French Polynesia (+689)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "GA",
                                value: "241",
                                children: "Gabon (+241)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "GM",
                                value: "220",
                                children: "Gambia (+220)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "GE",
                                value: "7880",
                                children: "Georgia (+7880)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "DE",
                                value: "49",
                                children: "Germany (+49)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "GH",
                                value: "233",
                                children: "Ghana (+233)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "GI",
                                value: "350",
                                children: "Gibraltar (+350)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "GR",
                                value: "30",
                                children: "Greece (+30)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "GL",
                                value: "299",
                                children: "Greenland (+299)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "GD",
                                value: "1473",
                                children: "Grenada (+1473)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "GP",
                                value: "590",
                                children: "Guadeloupe (+590)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "GU",
                                value: "671",
                                children: "Guam (+671)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "GT",
                                value: "502",
                                children: "Guatemala (+502)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "GN",
                                value: "224",
                                children: "Guinea (+224)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "GW",
                                value: "245",
                                children: "Guinea - Bissau (+245)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "GY",
                                value: "592",
                                children: "Guyana (+592)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "HT",
                                value: "509",
                                children: "Haiti (+509)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "HN",
                                value: "504",
                                children: "Honduras (+504)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "HK",
                                value: "852",
                                children: "Hong Kong (+852)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "HU",
                                value: "36",
                                children: "Hungary (+36)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "IS",
                                value: "354",
                                children: "Iceland (+354)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "IN",
                                value: "91",
                                children: "India (+91)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "ID",
                                value: "62",
                                children: "Indonesia (+62)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "IR",
                                value: "98",
                                children: "Iran (+98)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "IQ",
                                value: "964",
                                children: "Iraq (+964)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "IE",
                                value: "353",
                                children: "Ireland (+353)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "IL",
                                value: "972",
                                children: "Israel (+972)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "IT",
                                value: "39",
                                children: "Italy (+39)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "JM",
                                value: "1876",
                                children: "Jamaica (+1876)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "JP",
                                value: "81",
                                children: "Japan (+81)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "JO",
                                value: "962",
                                children: "Jordan (+962)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "KZ",
                                value: "7",
                                children: "Kazakhstan (+7)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "KE",
                                value: "254",
                                children: "Kenya (+254)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "KI",
                                value: "686",
                                children: "Kiribati (+686)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "KP",
                                value: "850",
                                children: "Korea North (+850)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "KR",
                                value: "82",
                                children: "Korea South (+82)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "KW",
                                value: "965",
                                children: "Kuwait (+965)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "KG",
                                value: "996",
                                children: "Kyrgyzstan (+996)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "LA",
                                value: "856",
                                children: "Laos (+856)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "LV",
                                value: "371",
                                children: "Latvia (+371)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "LB",
                                value: "961",
                                children: "Lebanon (+961)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "LS",
                                value: "266",
                                children: "Lesotho (+266)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "LR",
                                value: "231",
                                children: "Liberia (+231)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "LY",
                                value: "218",
                                children: "Libya (+218)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "LI",
                                value: "417",
                                children: "Liechtenstein (+417)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "LT",
                                value: "370",
                                children: "Lithuania (+370)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "LU",
                                value: "352",
                                children: "Luxembourg (+352)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "MO",
                                value: "853",
                                children: "Macao (+853)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "MK",
                                value: "389",
                                children: "Macedonia (+389)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "MG",
                                value: "261",
                                children: "Madagascar (+261)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "MW",
                                value: "265",
                                children: "Malawi (+265)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "MY",
                                value: "60",
                                children: "Malaysia (+60)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "MV",
                                value: "960",
                                children: "Maldives (+960)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "ML",
                                value: "223",
                                children: "Mali (+223)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "MT",
                                value: "356",
                                children: "Malta (+356)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "MH",
                                value: "692",
                                children: "Marshall Islands (+692)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "MQ",
                                value: "596",
                                children: "Martinique (+596)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "MR",
                                value: "222",
                                children: "Mauritania (+222)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "YT",
                                value: "269",
                                children: "Mayotte (+269)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "MX",
                                value: "52",
                                children: "Mexico (+52)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "FM",
                                value: "691",
                                children: "Micronesia (+691)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "MD",
                                value: "373",
                                children: "Moldova (+373)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "MC",
                                value: "377",
                                children: "Monaco (+377)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "MN",
                                value: "976",
                                children: "Mongolia (+976)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "MS",
                                value: "1664",
                                children: "Montserrat (+1664)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "MA",
                                value: "212",
                                children: "Morocco (+212)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "MZ",
                                value: "258",
                                children: "Mozambique (+258)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "MN",
                                value: "95",
                                children: "Myanmar (+95)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "NA",
                                value: "264",
                                children: "Namibia (+264)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "NR",
                                value: "674",
                                children: "Nauru (+674)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "NP",
                                value: "977",
                                children: "Nepal (+977)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "NL",
                                value: "31",
                                children: "Netherlands (+31)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "NC",
                                value: "687",
                                children: "New Caledonia (+687)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "NZ",
                                value: "64",
                                children: "New Zealand (+64)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "NI",
                                value: "505",
                                children: "Nicaragua (+505)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "NE",
                                value: "227",
                                children: "Niger (+227)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "NG",
                                value: "234",
                                children: "Nigeria (+234)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "NU",
                                value: "683",
                                children: "Niue (+683)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "NF",
                                value: "672",
                                children: "Norfolk Islands (+672)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "NP",
                                value: "670",
                                children: "Northern Marianas (+670)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "NO",
                                value: "47",
                                children: "Norway (+47)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "OM",
                                value: "968",
                                children: "Oman (+968)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "PW",
                                value: "680",
                                children: "Palau (+680)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "PA",
                                value: "507",
                                children: "Panama (+507)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "PG",
                                value: "675",
                                children: "Papua New Guinea (+675)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "PY",
                                value: "595",
                                children: "Paraguay (+595)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "PE",
                                value: "51",
                                children: "Peru (+51)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "PH",
                                value: "63",
                                children: "Philippines (+63)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "PL",
                                value: "48",
                                children: "Poland (+48)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "PT",
                                value: "351",
                                children: "Portugal (+351)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "PR",
                                value: "1787",
                                children: "Puerto Rico (+1787)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "QA",
                                value: "974",
                                children: "Qatar (+974)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "RE",
                                value: "262",
                                children: "Reunion (+262)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "RO",
                                value: "40",
                                children: "Romania (+40)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "RU",
                                value: "7",
                                children: "Russia (+7)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "RW",
                                value: "250",
                                children: "Rwanda (+250)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "SM",
                                value: "378",
                                children: "San Marino (+378)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "ST",
                                value: "239",
                                children: "Sao Tome & Principe (+239)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "SA",
                                value: "966",
                                children: "Saudi Arabia (+966)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "SN",
                                value: "221",
                                children: "Senegal (+221)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "CS",
                                value: "381",
                                children: "Serbia (+381)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "SC",
                                value: "248",
                                children: "Seychelles (+248)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "SL",
                                value: "232",
                                children: "Sierra Leone (+232)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "SG",
                                value: "65",
                                children: "Singapore (+65)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "SK",
                                value: "421",
                                children: "Slovak Republic (+421)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "SI",
                                value: "386",
                                children: "Slovenia (+386)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "SB",
                                value: "677",
                                children: "Solomon Islands (+677)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "SO",
                                value: "252",
                                children: "Somalia (+252)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "ZA",
                                value: "27",
                                children: "South Africa (+27)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "ES",
                                value: "34",
                                children: "Spain (+34)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "LK",
                                value: "94",
                                children: "Sri Lanka (+94)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "SH",
                                value: "290",
                                children: "St. Helena (+290)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "KN",
                                value: "1869",
                                children: "St. Kitts (+1869)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "SC",
                                value: "1758",
                                children: "St. Lucia (+1758)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "SD",
                                value: "249",
                                children: "Sudan (+249)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "SR",
                                value: "597",
                                children: "Suriname (+597)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "SZ",
                                value: "268",
                                children: "Swaziland (+268)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "SE",
                                value: "46",
                                children: "Sweden (+46)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "CH",
                                value: "41",
                                children: "Switzerland (+41)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "SI",
                                value: "963",
                                children: "Syria (+963)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "TW",
                                value: "886",
                                children: "Taiwan (+886)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "TJ",
                                value: "7",
                                children: "Tajikstan (+7)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "TH",
                                value: "66",
                                children: "Thailand (+66)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "TG",
                                value: "228",
                                children: "Togo (+228)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "TO",
                                value: "676",
                                children: "Tonga (+676)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "TT",
                                value: "1868",
                                children: "Trinidad & Tobago (+1868)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "TN",
                                value: "216",
                                children: "Tunisia (+216)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "TR",
                                value: "90",
                                children: "Turkey (+90)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "TM",
                                value: "7",
                                children: "Turkmenistan (+7)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "TM",
                                value: "993",
                                children: "Turkmenistan (+993)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "TC",
                                value: "1649",
                                children: "Turks & Caicos Islands (+1649)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "TV",
                                value: "688",
                                children: "Tuvalu (+688)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "UG",
                                value: "256",
                                children: "Uganda (+256)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "GB",
                                value: "44",
                                children: "UK (+44)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "UA",
                                value: "380",
                                children: "Ukraine (+380)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "AE",
                                value: "971",
                                children: "United Arab Emirates (+971)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "UY",
                                value: "598",
                                children: "Uruguay (+598)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "UZ",
                                value: "7",
                                children: "Uzbekistan (+7)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "VU",
                                value: "678",
                                children: "Vanuatu (+678)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "VA",
                                value: "379",
                                children: "Vatican City (+379)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "VE",
                                value: "58",
                                children: "Venezuela (+58)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "VN",
                                value: "84",
                                children: "Vietnam (+84)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "VG",
                                value: "84",
                                children: "Virgin Islands - British (+1284)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "VI",
                                value: "84",
                                children: "Virgin Islands - US (+1340)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "WF",
                                value: "681",
                                children: "Wallis & Futuna (+681)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "YE",
                                value: "969",
                                children: "Yemen (North)(+969)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "YE",
                                value: "967",
                                children: "Yemen (South)(+967)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "ZM",
                                value: "260",
                                children: "Zambia (+260)",
                              }),
                              (0, r.jsx)("option", {
                                "data-country-code": "ZW",
                                value: "263",
                                children: "Zimbabwe (+263)",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, r.jsxs)("div", {
                  className: "relative flex-1",
                  children: [
                    (0, r.jsx)("label", {
                      htmlFor: o.name,
                      className:
                        "absolute w-full text-14 leading-[2rem] tracking-[0.014rem] text-dark_grey origin-top-left pointer-events-none transition-transform duration-global ease-out group-[.is-focus]:-translate-y-[1.8rem] group-[.is-focus]:scale-[0.8]",
                      children: n || o.placeholder,
                    }),
                    (0, r.jsx)("input", {
                      className:
                        "c-input w-full text-14 leading-[2rem] tracking-[0.014rem] text-dark_grey bg-transparent pb-[1.6rem] border-b-dark_grey/[0.15] border-b-[1px] border-solid outline-none rounded-[0] group-[.is-focus]:placeholder:opacity-100 ".concat(
                          "" === u ? "focus:border-b-dark_grey/75" : "",
                        ),
                      ref: d,
                      ...o,
                      onFocus: () => {
                        m(!0);
                      },
                      onBlur: () => {
                        0 === d.current.value.length && m(!1), b(!0);
                      },
                      onChange: (e) => {
                        if (
                          (e.target.value.length > 0 && m(!0),
                          "phone" !== o.type)
                        )
                          return;
                        let t = (0, C.S)(d.current.value, s.current),
                          a = new E.R(s.current).input(d.current.value);
                        !c.current && t && t.isValid() && b(),
                          (d.current.value = a);
                      },
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className:
                    "c-error absolute left-0 top-full mt-[1px] text-[red]",
                  children: u,
                }),
              ],
            })
          );
        });
      G.displayName = "Input";
      let V = (0, l.forwardRef)((e, t) => {
        let a = (0, l.useRef)(null),
          n = (0, l.useRef)("US"),
          o = (0, l.useRef)(null),
          d = (0, l.useRef)(null),
          i = (0, l.useRef)(null),
          c = (0, l.useRef)(null),
          s = (0, l.useRef)(null);
        (0, l.useImperativeHandle)(t, () => ({
          ref: t,
          getAddress: u,
          validate: p,
        }));
        let u = () => a.current,
          p = () => {
            let e = d.current.validate(),
              t = i.current.validate(),
              r = s.current.validate(),
              o = c.current.validate();
            return (
              (a.current = {
                line1: d.current.getValue(),
                line2: "",
                city: i.current.getValue(),
                country: n.current,
                postal_code: s.current.getValue(),
                state: c.current.getValue(),
              }),
              e && t && r && o
            );
          },
          h = () => {
            let e = o.current.getPlace(),
              t = "",
              a = "";
            for (let r of e.address_components) {
              let e = r.types[0];
              switch (e) {
                case "street_number":
                  t = "".concat(r.long_name, " ").concat(t);
                  break;
                case "route":
                  t += r.long_name;
                  break;
                case "postal_code":
                  a = "".concat(r.long_name).concat(a);
                  break;
                case "postal_code_suffix":
                  a = "".concat(a, "-").concat(r.long_name);
                  break;
                case "sublocality_level_1":
                case "locality":
                  i.current.setValue(r.long_name);
                  break;
                case "administrative_area_level_1":
                  c.current.setValue(r.long_name);
                  break;
                case "country":
                  n.current = r.short_name;
              }
            }
            d.current.setValue(t),
              s.current.setValue(a),
              i.current.focus(0 !== i.current.getValue().length),
              c.current.focus(0 !== c.current.getValue().length),
              s.current.focus(0 !== s.current.getValue().length),
              p();
          };
        return (
          (0, l.useEffect)(() => {
            let e = new S.a("AIzaSyDruEoci0tKsz8huopI6BbD117XdRdh5oA", {
              libraries: ["places"],
            });
            e.load().then((e) => {
              (o.current = new e.maps.places.Autocomplete(d.current.ref, {
                componentRestrictions: { country: ["us"] },
                fields: ["address_components", "geometry"],
                types: ["address"],
              })),
                o.current.addListener("place_changed", h);
            });
          }, []),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(G, {
                ref: d,
                mode: "half",
                type: "text",
                name: "address",
                placeholder: "Address",
                required: !0,
              }),
              (0, r.jsx)(G, {
                ref: i,
                mode: "half",
                type: "text",
                name: "city",
                label: "City",
                required: !0,
              }),
              (0, r.jsx)(G, {
                ref: c,
                mode: "half",
                type: "text",
                name: "state",
                label: "State",
                required: !0,
              }),
              (0, r.jsx)(G, {
                ref: s,
                mode: "half",
                type: "text",
                name: "zip",
                label: "Zip Code",
                required: !0,
              }),
            ],
          })
        );
      });
      V.displayName = "AddressForm";
      let Z = (0, l.forwardRef)((e, t) => {
        let a = (0, l.useRef)(null),
          n = (0, l.useRef)(null),
          o = (0, l.useRef)(null),
          d = (0, l.useRef)(null),
          i = (0, l.useRef)(null),
          c = (0, l.useRef)({});
        (0, l.useImperativeHandle)(t, () => ({
          domElt: t,
          shipping: { ...c.current },
          billing_details: { ...c.current, email: a.current.getValue() },
          email: a.current.getValue(),
          validate: u,
        }));
        let s = () => {
            let e = a.current.getValue(),
              t = n.current.getValue(),
              r = a.current.validate(),
              l = n.current.validate();
            e !== t && n.current.setError("Email doesn't match.");
            let c = o.current.validate(),
              s = d.current.validate(),
              u = i.current.validate();
            return r && l && e === t && c && s && u;
          },
          u = () =>
            new Promise((e) => {
              let t = s();
              (c.current = {
                address: i.current.getAddress(),
                name: o.current.getValue(),
                phone: d.current.getValue(),
              }),
                e(t);
            });
        return (0, r.jsxs)("div", {
          className: "w-full grid grid-cols-2 gap-x-[1.1rem] gap-y-[4.5rem]",
          children: [
            (0, r.jsx)("div", {
              className:
                "col-span-full h-px bg-dark_grey opacity-10 checked:bg-white",
            }),
            (0, r.jsx)("div", {
              className:
                "text-20 text-dark_grey leading-[118%] -tracking-[0.02rem] font-headings",
              children: "Billing address",
            }),
            (0, r.jsx)(G, {
              ref: o,
              name: "fullname",
              type: "text",
              label: "Full name",
              placeholder: "First and last name",
              required: !0,
            }),
            (0, r.jsx)(G, {
              ref: a,
              name: "email",
              mode: "half",
              type: "mail",
              label: "E-mail address",
              placeholder: "E-mail address",
              inputMode: "email",
              required: !0,
            }),
            (0, r.jsx)(G, {
              ref: n,
              name: "email-confirmation",
              mode: "half",
              type: "mail",
              label: "Confirm e-mail address",
              placeholder: "E-mail address",
              inputMode: "email",
              required: !0,
            }),
            (0, r.jsx)(G, {
              ref: d,
              name: "phone",
              type: "phone",
              label: "Phone number",
              inputMode: "tel",
              required: !0,
            }),
            (0, r.jsx)(V, { ref: i }),
          ],
        });
      });
      Z.displayName = "Form";
      let F = (0, n.J)(
        "pk_live_51NxzwrBgcFARCOz6AYyp2prrpl4hapuxXbQzERJNLisEiOPMuEATuIWk2D0Kwtd4AmSOpRbI1aQsUefAR9qPIWwI00iBPGE6QO",
      );
      var O = !0;
      function K(e) {
        let { page: t } = e,
          [a, n] = (0, l.useState)(),
          h = (0, d.o)((e) => e.setHeaderVisible),
          x = (0, l.useRef)(null),
          w = (0, l.useRef)(null),
          [S, R] = (0, l.useState)(!1),
          A = (0, l.useRef)(!1),
          C = (0, l.useRef)(null),
          E = (0, l.useRef)(null),
          P = (0, l.useRef)(null),
          L = (0, l.useRef)(null),
          M = (0, l.useRef)(null),
          I = (0, l.useRef)(null),
          B = (0, l.useRef)(null),
          T = (0, l.useRef)(null),
          G = (0, l.useRef)(null),
          V = (0, l.useRef)(null),
          O = (0, l.useRef)(null),
          K = (0, l.useRef)(null),
          q = (0, l.useRef)(null),
          H = (0, l.useRef)(null),
          [U, D] = (0, l.useState)(!0),
          [z, J] = (0, l.useState)(!1),
          [Y, W] = (0, l.useState)(!1),
          Q = (0, d.o)((e) => e.currentStep),
          X = (0, d.o)((e) => e.setCurrentStep),
          $ = (0, d.o)((e) => e.isSubmitting),
          ee = (0, d.o)((e) => e.setSubmitting),
          et = (0, d.o)((e) => e.isLoading),
          ea = (e) => {
            B.current.innerText = e;
          };
        (0, l.useEffect)(() => {
          T.current &&
            (1 === Q
              ? (D(!0),
                J(!1),
                G.current.classList.remove("hidden"),
                V.current.classList.add("hidden"))
              : 2 === Q &&
                (J(!0),
                W(!1),
                V.current.classList.remove("hidden"),
                O.current.classList.add("hidden"))),
            er(Q),
            1 !== Q
              ? ((0, f.RE)(w.current),
                (w.current = j.ZP.to(K.current, {
                  autoAlpha: 1,
                  ease: "power2.out",
                  duration: 0.4,
                })))
              : ((0, f.RE)(w.current),
                (w.current = j.ZP.to(K.current, {
                  autoAlpha: 0,
                  ease: "power2.out",
                  duration: 0.4,
                })));
        }, [Q]),
          (0, l.useEffect)(
            () => (
              j.ZP.set(K.current, { autoAlpha: 0 }),
              h(!1),
              fetch("/api/get-price", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  items: [{ id: "prod_OqB1qreekZEncw" }],
                }),
              })
                .then((e) => e.json())
                .then((e) => {
                  (M.current = "$" + e.price / 100), ea(M.current);
                }),
              fetch("/api/get-price", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  items: [{ id: "prod_P12trrBiLa5h3N" }],
                }),
              })
                .then((e) => e.json())
                .then((e) => {
                  I.current = "$" + e.price / 100;
                }),
              () => {
                h(!0);
              }
            ),
            [],
          );
        let er = (e) => {
          switch (e) {
            case 2:
              void 0 !== window.gtag &&
                window.gtag("event", "Preorder Continue"),
                void 0 !== window.fbq &&
                  fbq("trackCustom", "Preorder Continue"),
                void 0 !== window.rdt &&
                  rdt("track", "Custom", {
                    customEventName: "Preorder Continue",
                  });
              break;
            case 3:
              void 0 !== window.gtag &&
                window.gtag("event", "Preorder Add Personal Details"),
                void 0 !== window.fbq &&
                  fbq("trackCustom", "Preorder Add Personal Details"),
                void 0 !== window.rdt &&
                  rdt("track", "Custom", {
                    customEventName: "Preorder Add Personal Details",
                  });
          }
        };
        return (
          (0, l.useEffect)(() => {
            if (!T.current && 2 === Q) {
              let e = null;
              C.current.checked
                ? (e = "prod_OqB1qreekZEncw")
                : E.current.checked && (e = "prod_P12trrBiLa5h3N"),
                fetch("/api/create-payment-intent", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ items: [{ id: e }] }),
                })
                  .then((e) => e.json())
                  .then((e) => {
                    n(e.clientSecret),
                      setTimeout(() => {
                        (0, f.RE)(x.current),
                          (x.current = j.ZP.to(q.current, {
                            autoAlpha: 0,
                            ease: "power2.out",
                            duration: 0.3,
                          })),
                          D(!1),
                          J(!0),
                          setTimeout(() => {
                            R(!0);
                          }, 1500),
                          G.current.classList.add("hidden"),
                          V.current.classList.remove("hidden");
                      }, 500);
                  });
            }
          }, [Q]),
          (0, r.jsxs)(N.Z, {
            index: 0,
            children: [
              (0, r.jsx)(k.Z, { data: t.data }),
              (0, r.jsxs)("div", {
                className:
                  "pre-order p-half-container flex gap-x-[0.4rem] min-h-screen xl:min-h-[650px] xl:h-screen bg-light_beige",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "relative flex-1 bg-white rounded-18 overflow-hidden hidden xl:block",
                    children: [
                      (0, r.jsx)(_.Z, {
                        field: t.data.image,
                        fallbackAlt: "",
                        sizes: "(max-width: 768px) 63.5vw, 63.5vw",
                        loading: "eager",
                        priority: !0,
                        className: "w-full h-full object-cover",
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "absolute bottom-[5rem] left-0 w-full flex justify-center items-center text-center gap-x-[8rem] body-mono-12 text-white",
                        children: [
                          t.data.text_image_left &&
                            (0, r.jsxs)("div", {
                              className: "flex flex-col items-center",
                              children: [
                                (0, r.jsx)(v, {
                                  field: t.data.text_image_left,
                                }),
                                t.data.icon_left &&
                                  (0, r.jsx)("div", {
                                    className: "w-[1.7rem] mt-[1.3rem]",
                                    children: (0, r.jsx)(c.Z, {
                                      field: t.data.icon_left,
                                      fallbackAlt: "",
                                      className: "w-full h-auto",
                                    }),
                                  }),
                              ],
                            }),
                          t.data.text_image_right &&
                            (0, r.jsxs)("div", {
                              className: "flex flex-col items-center",
                              children: [
                                (0, r.jsx)(v, {
                                  field: t.data.text_image_right,
                                }),
                                t.data.icon_right &&
                                  (0, r.jsx)("div", {
                                    className: "w-[1.7rem] mt-[1.3rem]",
                                    children: (0, r.jsx)(c.Z, {
                                      field: t.data.icon_right,
                                      fallbackAlt: "",
                                      className: "w-full h-auto",
                                    }),
                                  }),
                              ],
                            }),
                        ],
                      }),
                      (0, r.jsx)(m.Z, {
                        href: "/",
                        className:
                          "justify-center items-center absolute top-1/2 -translate-y-1/2 right-[1rem] hidden xl:flex w-[6.6rem] h-[6.6rem] rounded-12 cursor-pointer bg-white transition-transform duration-global ease-out xl:hover:scale-[1.05]",
                        children: (0, r.jsx)("div", {
                          className: "svg-wrapper w-[1rem]",
                          children: (0, r.jsx)("span", {
                            className: "block w-full h-full",
                            children: (0, r.jsx)(y.Z, {}),
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsxs)("form", {
                    id: "payment-form",
                    onSubmit: (e) => {
                      e.preventDefault(),
                        void 0 !== window.gtag &&
                          window.gtag(
                            "event",
                            "Preorder API (Add Payment Info)",
                          ),
                        void 0 !== window.fbq &&
                          fbq("trackCustom", "Preorder API (Add Payment Info)"),
                        void 0 !== window.rdt &&
                          rdt("track", "Custom", {
                            customEventName: "Preorder API (Add Payment Info)",
                          }),
                        A.current &&
                          A.current.checked &&
                          fetch("/api/subscribe", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              items: [
                                { mail: H.current.billing_details.email },
                              ],
                            }),
                          }),
                        ee(H.current.email);
                    },
                    className:
                      "relative w-full xl:w-[36.5%] min-h-[calc(100vh_-_2rem)] h-full rounded-18 bg-white flex flex-col items-center",
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "absolute top-0 right-0 w-full h-full bg-dots bg-size-dots bg-repeat opacity-40 pointer-events-none",
                      }),
                      (0, r.jsx)("div", {
                        onClick: () => {
                          (T.current = !0), X(Q - 1);
                        },
                        ref: K,
                        className:
                          "flex justify-center items-center absolute top-[0.6rem] left-[0.6rem] xl:top-[3rem] xl:left-[3rem] w-[5.6rem] h-[5.6rem] xl:w-[4rem] xl:h-[4rem] border-px border-light_beige rounded-12 cursor-pointer transition-transform duration-global ease-out xl:hover:scale-[1.05]",
                        children: (0, r.jsx)("div", {
                          className: "svg-wrapper w-[1.5rem] xl:w-[1.3rem]",
                          children: (0, r.jsx)("span", {
                            className: "block w-full h-full rotate-180",
                            children: (0, r.jsx)(u.Z, {}),
                          }),
                        }),
                      }),
                      (0, r.jsx)(m.Z, {
                        href: "/",
                        className:
                          "flex justify-center items-center absolute top-[0.6rem] right-[0.6rem] xl:hidden w-[5.6rem] h-[5.6rem] rounded-12 cursor-pointer bg-light_beige",
                        children: (0, r.jsx)("div", {
                          className: "svg-wrapper w-[1rem]",
                          children: (0, r.jsx)("span", {
                            className: "block w-full h-full",
                            children: (0, r.jsx)(y.Z, {}),
                          }),
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "flex flex-col items-center px-[1.7rem] md:px-30 pt-[8rem] md:pt-[6.3rem] pb-[6rem] md:pb-[5.1rem]",
                        children: [
                          (0, r.jsx)("span", {
                            className: "svg-wrapper w-[3.14rem]",
                            children: (0, r.jsx)(s.Z, { fill: "#575349" }),
                          }),
                          (0, r.jsx)("h1", {
                            className:
                              "font-headings text-36 leading-[3.4rem] -tracking-[0.144rem] md:text-[3.4rem] md:leading-[3.3rem] md:-tracking-[0.138rem] text-dark_grey font-medium mt-[1.23rem]",
                            children: t.data.title,
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "w-full flex-1 xl:overflow-y-scroll u-nsb px-10 md:px-30 pb-[2rem] md:pb-[2.5rem]",
                        "data-lenis-prevent": !0,
                        children: [
                          (0, r.jsxs)(g, {
                            toggle: U,
                            index: 1,
                            children: [
                              (0, r.jsx)("div", {
                                ref: q,
                                className:
                                  "absolute top-0 left-0 w-full h-full bg-white opacity-0 pointer-events-none z-1",
                              }),
                              (0, r.jsxs)("label", {
                                ref: P,
                                htmlFor: "pebble-flow",
                                className:
                                  "relative block bg-light_beige/50 xl:bg-light_beige/30 px-[2.5rem] md:px-30 pt-[3.9rem] md:pt-[5.6rem] pb-[3rem] md:pb-[4.2rem] rounded-12 mb-5 md:mb-10 cursor-pointer hover:bg-dark_beige/[0.25] checked:bg-dark_beige transition-bg duration-global ease-out",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className:
                                      "flex flex-col md:flex-row text-dark_grey checked:text-white transition-colors duration-global ease-out",
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className:
                                          "flex flex-row flex-wrap md:flex-col items-end md:items-start w-full md:w-[50%]",
                                        children: [
                                          (0, r.jsx)("div", {
                                            className:
                                              "font-headings  text-20 leading-[2.2rem] -tracking-[0.02rem]",
                                            children: t.data.product_title_1,
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "font-headings md:font-body md:mt-[0.2rem] ml-[0.5rem] text-12 leading-[141%] tracking-[0.012rem] md:opacity-60",
                                            children: t.data.product_option_1,
                                          }),
                                        ],
                                      }),
                                      (0, r.jsxs)("div", {
                                        className:
                                          "flex flex-col md:items-end w-full md:w-[50%] md:text-right",
                                        children: [
                                          (0, r.jsx)("div", {
                                            className:
                                              "font-headings text-20 leading-[2.2rem] -tracking-[0.02rem] opacity-40 md:opacity-100",
                                            children: t.data.price_1,
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "mt-10 md:mt-[0.2rem] text-12 leading-[141%] tracking-[0.012rem] opacity-60",
                                            children: t.data.informative_text_1,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "w-full h-px bg-dark_grey my-[1.8rem] md:mt-[2.5rem] md:mb-[1.7rem] opacity-10 checked:bg-white transition-bg duration-global ease-out",
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "w-full md:pr-[8rem] md:w-[50%] lg:w-[40%] xl:w-full text-dark_grey text-13 leading-[2rem] tracking-[0.013rem] md:text-12 md:leading-[141%] md:tracking-[0.012rem] checked:text-white transition-colors duration-global ease-out",
                                    children: (0, r.jsx)(v, {
                                      field: t.data.product_description_1,
                                    }),
                                  }),
                                  (0, r.jsx)("input", {
                                    className:
                                      "absolute top-0 left-0 opacity-0 pointer-events-none",
                                    ref: C,
                                    type: "radio",
                                    value: "pebble-flow",
                                    id: "pebble-flow",
                                    name: "product",
                                    onChange: () => {
                                      P.current.classList.toggle(
                                        "radio-checked",
                                        C.current.checked,
                                      ),
                                        L.current.classList.toggle(
                                          "radio-checked",
                                          !C.current.checked,
                                        ),
                                        G.current.classList.contains(
                                          "button-disabled",
                                        ) &&
                                          G.current.classList.remove(
                                            "button-disabled",
                                          ),
                                        ea(M.current);
                                    },
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("label", {
                                ref: L,
                                htmlFor: "pebble-flow-magic-pack",
                                className:
                                  "relative block bg-light_beige/50 xl:bg-light_beige/30 px-[2.5rem] md:px-30 pt-[3.9rem] md:pt-[5.6rem] pb-[3rem] md:pb-[4.2rem] rounded-12 cursor-pointer hover:bg-dark_beige/[0.25] checked:bg-dark_beige transition-bg duration-global ease-out",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className:
                                      "flex flex-col md:flex-row text-dark_grey checked:text-white transition-colors duration-global ease-out",
                                    children: [
                                      (0, r.jsxs)("div", {
                                        className:
                                          "flex flex-wrap flex-col items-start w-full md:w-[50%]",
                                        children: [
                                          (0, r.jsx)("div", {
                                            className:
                                              "font-headings  text-20 leading-[2.2rem] -tracking-[0.02rem]",
                                            children: t.data.product_title_2,
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "font-headings md:font-body md:mt-[0.2rem] text-12 leading-[141%] tracking-[0.012rem] mb-[0.5rem] md:mb-0 ml-0 md:opacity-60",
                                            children: t.data.product_option_2,
                                          }),
                                        ],
                                      }),
                                      (0, r.jsxs)("div", {
                                        className:
                                          "flex flex-col md:items-end w-full md:w-[50%] md:text-right",
                                        children: [
                                          (0, r.jsx)("div", {
                                            className:
                                              "font-headings text-20 leading-[2.2rem] -tracking-[0.02rem] opacity-40 md:opacity-100",
                                            children: t.data.price_2,
                                          }),
                                          (0, r.jsx)("div", {
                                            className:
                                              "mt-10 md:mt-[0.2rem] text-12 leading-[141%] tracking-[0.012rem] opacity-60",
                                            children: t.data.informative_text_2,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "w-full h-px bg-dark_grey my-[1.8rem] md:mt-[2.5rem] md:mb-[1.7rem] opacity-10 checked:bg-white transition-bg duration-global ease-out",
                                  }),
                                  (0, r.jsx)("div", {
                                    className:
                                      "w-full md:pr-[8rem] md:w-[50%] lg:w-[40%] xl:w-full text-dark_grey text-13 leading-[2rem] tracking-[0.013rem] md:text-12 md:leading-[141%] md:tracking-[0.012rem] checked:text-white transition-colors duration-global ease-out",
                                    children: (0, r.jsx)(v, {
                                      field: t.data.product_description_2,
                                    }),
                                  }),
                                  (0, r.jsx)("input", {
                                    className:
                                      "absolute top-0 left-0 opacity-0 pointer-events-none",
                                    ref: E,
                                    type: "radio",
                                    value: "pebble-flow-magic-pack",
                                    id: "pebble-flow-magic-pack",
                                    name: "product",
                                    onChange: () => {
                                      P.current.classList.toggle(
                                        "radio-checked",
                                        !E.current.checked,
                                      ),
                                        L.current.classList.toggle(
                                          "radio-checked",
                                          E.current.checked,
                                        ),
                                        G.current.classList.contains(
                                          "button-disabled",
                                        ) &&
                                          G.current.classList.remove(
                                            "button-disabled",
                                          ),
                                        ea(I.current);
                                    },
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "flex flex-col md:inline-block px-[0.5rem] md:px-0 mt-20 text-13 leading-[2rem] tracking-[0.013rem] md:text-12 md:leading-[141%] md:tracking-[0.012rem] text-dark_grey",
                                children: [
                                  (0, r.jsx)("span", {
                                    children: t.data.delivery_time,
                                  }),
                                  (0, r.jsx)("span", {
                                    className: "md:ml-[0.5rem]",
                                    children: t.data.availability_text,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          a &&
                            (0, r.jsxs)(o.Elements, {
                              options: {
                                clientSecret: a,
                                appearance: {
                                  labels: "floating",
                                  variables: {
                                    fontFamily: "Aeonik, sans-serif",
                                    fontSizeBase: "14px",
                                    colorText: "#575349",
                                    spacingGridRow: "2rem",
                                  },
                                  rules: {
                                    ".Input": {
                                      backgroundColor: "transparent",
                                      boxShadow: "none",
                                      borderRadius: 0,
                                      border: "none",
                                      color: "var(--colorText)",
                                      borderBottom:
                                        "1px solid rgba(87, 83, 73, 0.15)",
                                      padding: "1rem 0",
                                      outline: "none",
                                    },
                                    ".Input--invalid": { boxShadow: "none" },
                                    ".Input:focus": {
                                      boxShadow: "none",
                                      outline: "none",
                                      border: "none",
                                      borderBottom:
                                        "1px solid rgba(87, 83, 73, 0.15)",
                                    },
                                  },
                                },
                                fonts: [
                                  {
                                    family: "Aeonik",
                                    src: "url(".concat(
                                      "https://pebblelife.com",
                                      "/public/fonts/Aeonik-Regular.woff)",
                                    ),
                                    display: "swap",
                                  },
                                ],
                              },
                              stripe: F,
                              children: [
                                (0, r.jsxs)(g, {
                                  toggle: z,
                                  index: 2,
                                  children: [
                                    (0, r.jsx)(Z, { ref: H }),
                                    (0, r.jsxs)("div", {
                                      className:
                                        "flex items-center mt-[5.6rem] body-14 text-dark_grey",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className:
                                            "relative w-[2.4rem] h-[2.4rem]",
                                          children: [
                                            (0, r.jsx)("input", {
                                              ref: A,
                                              className:
                                                "newsletter-checkbox w-full h-full bg-transparent border-px border-dark_grey/[0.15] rounded-[0.4rem] appearance-none cursor-pointer",
                                              type: "checkbox",
                                              id: "newsletter",
                                              name: "newsletter",
                                            }),
                                            (0, r.jsx)("div", {
                                              className:
                                                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1rem] svg-wrapper opacity-0",
                                              children: (0, r.jsx)(b, {}),
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)("label", {
                                          htmlFor: "newsletter",
                                          className:
                                            "ml-[1.25rem] cursor-pointer",
                                          children: t.data.newsletter_text,
                                        }),
                                      ],
                                    }),
                                    (0, r.jsx)("div", {
                                      className:
                                        "text-10 leading-[1.5rem] text-dark_grey mt-[5.8rem]",
                                      children: (0, r.jsx)(v, {
                                        field: t.data.terms_text,
                                      }),
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)(g, {
                                  toggle: Y,
                                  hidden: S,
                                  index: 3,
                                  children: [
                                    (0, r.jsx)(i, {
                                      paymentInformations: H.current,
                                      data: t.data,
                                      clientSecret: a,
                                      isSubmit: $,
                                    }),
                                    (0, r.jsx)("div", {
                                      className:
                                        "text-10 leading-[1.5rem] text-dark_grey mt-[5.8rem]",
                                      children: (0, r.jsx)(v, {
                                        field: t.data.terms_text,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className:
                          "w-full px-[1.5rem] md:px-30 pb-[2.1rem] md:pb-30",
                        children: (0, r.jsxs)("div", {
                          className:
                            "relative w-full flex flex-col border-x-px border-light_beige",
                          children: [
                            (0, r.jsxs)("div", {
                              className:
                                "relative flex justify-between font-headings text-dark_grey text-20 leading-[96%] -tracking-[0.02rem] px-[0.6rem] py-[2.4rem] border-b-px border-light_beige",
                              children: [
                                (0, r.jsx)("span", {
                                  children: t.data.due_today_text,
                                }),
                                (0, r.jsx)("span", { ref: B }),
                                (0, r.jsx)("div", {
                                  className:
                                    "svg-wrapper absolute bottom-0 left-0 w-[0.8rem] -translate-x-[0.45rem] translate-y-[0.55rem]",
                                  children: (0, r.jsx)(p.Z, {}),
                                }),
                                (0, r.jsx)("div", {
                                  className:
                                    "svg-wrapper absolute bottom-0 right-0 w-[0.8rem] translate-x-[0.45rem] translate-y-[0.55rem]",
                                  children: (0, r.jsx)(p.Z, {}),
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "relative w-full px-[0.6rem] mt-[0.6rem]",
                              children: (0, r.jsxs)("div", {
                                className: "relative",
                                children: [
                                  (0, r.jsx)("div", {
                                    ref: G,
                                    onClick: () => {
                                      (T.current = !1),
                                        X(2),
                                        (x.current = j.ZP.to(q.current, {
                                          autoAlpha: 0.7,
                                          ease: "power2.out",
                                          duration: 0.3,
                                        }));
                                    },
                                    className:
                                      "button-disabled w-full rounded-10 py-[2rem] bg-dark_beige text-white text-center font-body-mono text-10 leading-[180%] tracking-[0.05rem] md:text-12 md:leading-[200%] md:tracking-[0.036rem] uppercase cursor-pointer hover:bg-dark_beige/[0.85] transition-bg duration-global ease-out",
                                    children: (0, r.jsx)("span", {
                                      id: "button-text transition-opacity duration-global ease-out",
                                      children: t.data.step_one_button_title,
                                    }),
                                  }),
                                  (0, r.jsx)("div", {
                                    ref: V,
                                    onClick: () => {
                                      (T.current = !1),
                                        H.current.validate().then((e) => {
                                          e &&
                                            (X(3),
                                            V.current.classList.add("hidden"),
                                            O.current.classList.remove(
                                              "hidden",
                                            ),
                                            J(!1),
                                            W(!0));
                                        });
                                    },
                                    className:
                                      "w-full rounded-10 py-[2rem] bg-dark_beige text-white text-center font-body-mono text-10 leading-[180%] tracking-[0.05rem] md:text-12 md:leading-[200%] md:tracking-[0.036rem] uppercase cursor-pointer hidden hover:bg-dark_beige/[0.85] transition-bg duration-global ease-out",
                                    children: (0, r.jsx)("span", {
                                      id: "button-text",
                                      children: t.data.step_two_button_title,
                                    }),
                                  }),
                                  (0, r.jsx)("button", {
                                    ref: O,
                                    className:
                                      "rounded-10 w-full py-[2rem] bg-dark_beige text-white font-body-mono text-10 leading-[180%] tracking-[0.05rem] md:text-12 md:leading-[200%] md:tracking-[0.036rem] uppercase hidden hover:bg-dark_beige/[0.85] transition-bg duration-global ease-out",
                                    id: "submit",
                                    children: (0, r.jsx)("span", {
                                      id: "button-text",
                                      children: et
                                        ? "Loading"
                                        : t.data.step_three_button_title,
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
  },
  function (e) {
    e.O(0, [310, 380, 287, 774, 888, 179], function () {
      return e((e.s = 7246));
    }),
      (_N_E = e.O());
  },
]);
