(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [74],
  {
    9074: function (i, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return h;
          },
        });
      var o = t(2238),
        s = t.n(o),
        r = t(2041);
      class a {
        constructor(i) {
          (this.data = new Uint8Array(i)), (this.idx = 0), (this.size = i);
        }
        getData() {
          if (this.idx !== this.size)
            throw Error("Mismatch between size reserved and sized used");
          return this.data.slice(0, this.idx);
        }
        writeUint8(i) {
          this.data.set([i], this.idx), (this.idx += 1);
        }
        writeUint16(i) {
          let e = new Uint16Array(1);
          e[0] = i;
          let t = new Uint8Array(e.buffer);
          this.data.set([t[1], t[0]], this.idx), (this.idx += 2);
        }
        writeUint8Array(i) {
          this.data.set(i, this.idx), (this.idx += i.length);
        }
      }
      let n = (i) => {
          let e;
          let t = 7;
          for (e = 0; e < i.SPS.length; e += 1) t += 2 + i.SPS[e].length;
          for (e = 0; e < i.PPS.length; e += 1) t += 2 + i.PPS[e].length;
          let o = new a(t);
          for (
            o.writeUint8(i.configurationVersion),
              o.writeUint8(i.AVCProfileIndication),
              o.writeUint8(i.profile_compatibility),
              o.writeUint8(i.AVCLevelIndication),
              o.writeUint8(i.lengthSizeMinusOne + 252),
              o.writeUint8(i.nb_SPS_nalus + 224),
              e = 0;
            e < i.SPS.length;
            e += 1
          )
            o.writeUint16(i.SPS[e].length), o.writeUint8Array(i.SPS[e].nalu);
          for (o.writeUint8(i.nb_PPS_nalus), e = 0; e < i.PPS.length; e += 1)
            o.writeUint16(i.PPS[e].length), o.writeUint8Array(i.PPS[e].nalu);
          return o.getData();
        },
        d = (i, e, { VideoDecoder: t, EncodedVideoChunk: o, debug: s }) =>
          new Promise((a, d) => {
            s && console.info("Decoding video from", i);
            try {
              let l;
              let h = r.cn(),
                c = new t({
                  output: (i) => {
                    createImageBitmap(i, { resizeQuality: "low" }).then((t) => {
                      e(t),
                        i.close(),
                        c.decodeQueueSize <= 0 &&
                          setTimeout(() => {
                            "closed" !== c.state && (c.close(), a());
                          }, 500);
                    });
                  },
                  error: (i) => {
                    console.error(i), d(i);
                  },
                });
              (h.onReady = (i) => {
                if (i && i.videoTracks && i.videoTracks[0]) {
                  ([{ codec: l }] = i.videoTracks),
                    s && console.info("Video with codec:", l);
                  let e = h.moov.traks[0].mdia.minf.stbl.stsd.entries[0].avcC,
                    t = n(e);
                  c.configure({ codec: l, description: t }),
                    h.setExtractionOptions(i.videoTracks[0].id),
                    h.start();
                } else d(Error("URL provided is not a valid mp4 video file."));
              }),
                (h.onSamples = (i, e, t) => {
                  for (let i = 0; i < t.length; i += 1) {
                    let e = t[i],
                      s = e.is_sync ? "key" : "delta",
                      r = new o({
                        type: s,
                        timestamp: e.cts,
                        duration: e.duration,
                        data: e.data,
                      });
                    c.decode(r);
                  }
                }),
                fetch(i).then((i) => {
                  let e = i.body.getReader(),
                    t = 0;
                  return e.read().then(function i({ done: o, value: s }) {
                    if (o) return h.flush(), null;
                    let r = s.buffer;
                    return (
                      (r.fileStart = t),
                      (t += r.byteLength),
                      h.appendBuffer(r),
                      e.read().then(i)
                    );
                  });
                });
            } catch (i) {
              d(i);
            }
          });
      var l = (i, e, t) =>
          "function" == typeof VideoDecoder &&
          "function" == typeof EncodedVideoChunk
            ? (t &&
                console.info(
                  "WebCodecs is natively supported, using native version...",
                ),
              d(i, e, { VideoDecoder, EncodedVideoChunk, debug: t }))
            : (t && console.info("WebCodecs is not available in this browser."),
              Promise.resolve()),
        h = class {
          constructor({
            src: i,
            scrollyVideoContainer: e,
            cover: t = !0,
            sticky: o = !0,
            full: r = !0,
            trackScroll: a = !0,
            transitionSpeed: n = 8,
            frameThreshold: d = 0.1,
            useWebCodecs: l = !0,
            debug: h = !1,
          }) {
            if ("object" != typeof document) {
              console.error("ScrollyVideo must be initiated in a DOM context");
              return;
            }
            if (!e) {
              console.error("scrollyVideoContainer must be a valid DOM object");
              return;
            }
            if (!i) {
              console.error("Must provide valid video src to ScrollyVideo");
              return;
            }
            if (e instanceof Element) this.container = e;
            else if ("string" == typeof e) {
              if (
                ((this.container = document.getElementById(e)), !this.container)
              )
                throw Error("scrollyVideoContainer must be a valid DOM object");
            } else
              throw Error("scrollyVideoContainer must be a valid DOM object");
            (this.src = i),
              (this.transitionSpeed = n),
              (this.frameThreshold = d),
              (this.useWebCodecs = l),
              (this.cover = t),
              (this.sticky = o),
              (this.full = r),
              (this.trackScroll = a),
              (this.debug = h),
              (this.video = document.createElement("video")),
              (this.video.src = i),
              (this.video.preload = "auto"),
              (this.video.tabIndex = 0),
              (this.video.autobuffer = !0),
              (this.video.playsInline = !0),
              (this.video.muted = !0),
              this.video.pause(),
              this.video.load(),
              this.container.appendChild(this.video),
              o &&
                ((this.container.style.display = "block"),
                (this.container.style.position = "sticky"),
                (this.container.style.top = "0")),
              r &&
                ((this.container.style.width = "100%"),
                (this.container.style.height = "100vh"),
                (this.container.style.overflow = "hidden")),
              t && this.setCoverStyle(this.video);
            let c = new (s())().getEngine();
            (this.isSafari = "WebKit" === c.name),
              h && this.isSafari && console.info("Safari browser detected"),
              (this.currentTime = 0),
              (this.targetTime = 0),
              (this.canvas = null),
              (this.context = null),
              (this.frames = []),
              (this.frameRate = 0),
              (this.updateScrollPercentage = (i) => {
                let e = this.container.parentNode.getBoundingClientRect(),
                  t = -e.top / (e.height - window.innerHeight);
                this.debug && console.info("ScrollyVideo scrolled to", t),
                  this.setTargetTimePercent(t, i);
              }),
              this.trackScroll
                ? (window.addEventListener(
                    "scroll",
                    this.updateScrollPercentage,
                  ),
                  this.video.addEventListener(
                    "loadedmetadata",
                    () => this.updateScrollPercentage(!0),
                    { once: !0 },
                  ))
                : this.video.addEventListener(
                    "loadedmetadata",
                    () => this.setTargetTimePercent(0, !0),
                    { once: !0 },
                  ),
              (this.resize = () => {
                this.debug && console.info("ScrollyVideo resizing..."),
                  this.cover && this.setCoverStyle(this.canvas || this.video),
                  this.paintCanvasFrame(
                    Math.floor(this.currentTime * this.frameRate),
                  );
              }),
              window.addEventListener("resize", this.resize),
              this.video.addEventListener("progress", this.resize),
              this.decodeVideo();
          }
          setCoverStyle(i) {
            if (this.cover) {
              (i.style.position = "absolute"),
                (i.style.top = "50%"),
                (i.style.left = "50%"),
                (i.style.transform = "translate(-50%, -50%)"),
                (i.style.minWidth = "101%"),
                (i.style.minHeight = "101%");
              let { width: e, height: t } =
                  this.container.getBoundingClientRect(),
                o = i.videoWidth || i.width,
                s = i.videoHeight || i.height;
              this.debug && console.info("Container dimensions:", [e, t]),
                this.debug && console.info("Element dimensions:", [o, s]),
                e / t > o / s
                  ? ((i.style.width = "100%"), (i.style.height = "auto"))
                  : ((i.style.height = "100%"), (i.style.width = "auto"));
            }
          }
          decodeVideo() {
            this.useWebCodecs &&
              this.src &&
              l(
                this.src,
                (i) => {
                  this.frames.push(i);
                },
                this.debug,
              )
                .catch(() => {
                  this.debug &&
                    console.error("Error encountered while decoding video"),
                    (this.frames = []),
                    this.video.load();
                })
                .then(() => {
                  if (0 === this.frames.length) {
                    this.debug &&
                      console.error("No frames were received from webCodecs");
                    return;
                  }
                  (this.frameRate = this.frames.length / this.video.duration),
                    this.debug &&
                      console.info("Received", this.frames.length, "frames"),
                    (this.canvas = document.createElement("canvas")),
                    (this.context = this.canvas.getContext("2d")),
                    (this.video.style.display = "none"),
                    this.container.appendChild(this.canvas),
                    this.cover && this.setCoverStyle(this.canvas),
                    this.paintCanvasFrame(
                      Math.floor(this.currentTime * this.frameRate),
                    );
                });
          }
          paintCanvasFrame(i) {
            if (this.canvas) {
              let e = this.frames[i];
              if (e) {
                this.debug && console.info("Painting frame", i),
                  (this.canvas.width = e.width),
                  (this.canvas.height = e.height);
                let { width: t, height: o } =
                  this.container.getBoundingClientRect();
                t / o > e.width / e.height
                  ? ((this.canvas.style.width = "100%"),
                    (this.canvas.style.height = "auto"))
                  : ((this.canvas.style.height = "100%"),
                    (this.canvas.style.width = "auto")),
                  this.context.drawImage(e, 0, 0, e.width, e.height);
              }
            }
          }
          transitionToTargetTime(i) {
            if (
              (this.debug &&
                console.info(
                  "Transitioning targetTime:",
                  this.targetTime,
                  "currentTime:",
                  this.currentTime,
                ),
              isNaN(this.targetTime) ||
                Math.abs(this.currentTime - this.targetTime) <
                  this.frameThreshold)
            ) {
              this.video.pause(), (this.transitioning = !1);
              return;
            }
            this.targetTime > this.video.duration &&
              (this.targetTime = this.video.duration),
              this.targetTime < 0 && (this.targetTime = 0);
            let e = this.targetTime - this.currentTime;
            if (this.canvas)
              (this.currentTime += e / (256 / this.transitionSpeed)),
                i && (this.currentTime = this.targetTime),
                this.paintCanvasFrame(
                  Math.floor(this.currentTime * this.frameRate),
                );
            else if (
              i ||
              this.isSafari ||
              this.targetTime - this.currentTime < 0
            )
              this.video.pause(),
                (this.currentTime += e / (64 / this.transitionSpeed)),
                i && (this.currentTime = this.targetTime),
                (this.video.currentTime = this.currentTime);
            else {
              let i = Math.max(Math.min(4 * e, this.transitionSpeed, 16), 1);
              this.debug && console.info("ScrollyVideo playbackRate:", i),
                isNaN(i) || ((this.video.playbackRate = i), this.video.play()),
                (this.currentTime = this.video.currentTime);
            }
            "function" == typeof requestAnimationFrame &&
              requestAnimationFrame(() => this.transitionToTargetTime());
          }
          setTargetTimePercent(i, e) {
            (this.targetTime =
              Math.max(Math.min(i, 1), 0) *
              (this.frames.length && this.frameRate
                ? this.frames.length / this.frameRate
                : this.video.duration)),
              (!e &&
                Math.abs(this.currentTime - this.targetTime) <
                  this.frameThreshold) ||
                (!e && this.transitioning) ||
                (this.canvas || this.video.paused || this.video.play(),
                (this.transitioning = !0),
                this.transitionToTargetTime(e));
          }
          destroy() {
            this.debug && console.info("Destroying ScrollyVideo"),
              this.trackScroll &&
                window.removeEventListener(
                  "scroll",
                  this.updateScrollPercentage,
                ),
              window.removeEventListener("resize", this.resize),
              this.container && (this.container.innerHTML = "");
          }
        };
    },
    2238: function (i, e, t) {
      var o;
      !(function (s, r) {
        "use strict";
        var a = "function",
          n = "undefined",
          d = "object",
          l = "string",
          h = "major",
          c = "model",
          b = "name",
          w = "type",
          u = "vendor",
          m = "version",
          p = "architecture",
          f = "console",
          v = "mobile",
          g = "tablet",
          y = "smarttv",
          k = "wearable",
          x = "embedded",
          T = "Amazon",
          S = "Apple",
          C = "ASUS",
          _ = "BlackBerry",
          P = "Browser",
          E = "Chrome",
          z = "Firefox",
          U = "Google",
          A = "Huawei",
          N = "Microsoft",
          M = "Motorola",
          R = "Opera",
          V = "Samsung",
          q = "Sharp",
          O = "Sony",
          D = "Xiaomi",
          j = "Zebra",
          L = "Facebook",
          B = "Chromium OS",
          I = "Mac OS",
          W = function (i, e) {
            var t = {};
            for (var o in i)
              e[o] && e[o].length % 2 == 0
                ? (t[o] = e[o].concat(i[o]))
                : (t[o] = i[o]);
            return t;
          },
          F = function (i) {
            for (var e = {}, t = 0; t < i.length; t++)
              e[i[t].toUpperCase()] = i[t];
            return e;
          },
          H = function (i, e) {
            return typeof i === l && -1 !== G(e).indexOf(G(i));
          },
          G = function (i) {
            return i.toLowerCase();
          },
          Z = function (i, e) {
            if (typeof i === l)
              return (
                (i = i.replace(/^\s\s*/, "")),
                typeof e === n ? i : i.substring(0, 350)
              );
          },
          $ = function (i, e) {
            for (var t, o, s, n, l, h, c = 0; c < e.length && !l; ) {
              var b = e[c],
                w = e[c + 1];
              for (t = o = 0; t < b.length && !l && b[t]; )
                if ((l = b[t++].exec(i)))
                  for (s = 0; s < w.length; s++)
                    (h = l[++o]),
                      typeof (n = w[s]) === d && n.length > 0
                        ? 2 === n.length
                          ? typeof n[1] == a
                            ? (this[n[0]] = n[1].call(this, h))
                            : (this[n[0]] = n[1])
                          : 3 === n.length
                            ? typeof n[1] !== a || (n[1].exec && n[1].test)
                              ? (this[n[0]] = h ? h.replace(n[1], n[2]) : r)
                              : (this[n[0]] = h ? n[1].call(this, h, n[2]) : r)
                            : 4 === n.length &&
                              (this[n[0]] = h
                                ? n[3].call(this, h.replace(n[1], n[2]))
                                : r)
                        : (this[n] = h || r);
              c += 2;
            }
          },
          Q = function (i, e) {
            for (var t in e)
              if (typeof e[t] === d && e[t].length > 0) {
                for (var o = 0; o < e[t].length; o++)
                  if (H(e[t][o], i)) return "?" === t ? r : t;
              } else if (H(e[t], i)) return "?" === t ? r : t;
            return i;
          },
          X = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          K = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [m, [b, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [m, [b, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [b, m],
              [/opios[\/ ]+([\w\.]+)/i],
              [m, [b, R + " Mini"]],
              [/\bopr\/([\w\.]+)/i],
              [m, [b, R]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                /(heytap|ovi)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [b, m],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [m, [b, "UC" + P]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
              [m, [b, "WeChat(Win) Desktop"]],
              [/micromessenger\/([\w\.]+)/i],
              [m, [b, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [m, [b, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [m, [b, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [m, [b, "Yandex"]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[b, /(.+)/, "$1 Secure " + P], m],
              [/\bfocus\/([\w\.]+)/i],
              [m, [b, z + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [m, [b, R + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [m, [b, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [m, [b, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [m, [b, R + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [m, [b, "MIUI " + P]],
              [/fxios\/([-\w\.]+)/i],
              [m, [b, z]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[b, "360 " + P]],
              [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
              [[b, /(.+)/, "$1 " + P], m],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[b, /_/g, " "], m],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [b, m],
              [
                /(metasr)[\/ ]?([\w\.]+)/i,
                /(lbbrowser)/i,
                /\[(linkedin)app\]/i,
              ],
              [b],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[b, L], m],
              [
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
              ],
              [b, m],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [m, [b, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [m, [b, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [m, [b, E + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[b, E + " WebView"], m],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [m, [b, "Android " + P]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [b, m],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [m, [b, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [m, b],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                b,
                [
                  m,
                  Q,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [b, m],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[b, "Netscape"], m],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [m, [b, z + " Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
                /panasonic;(viera)/i,
              ],
              [b, m],
              [/(cobalt)\/([\w\.]+)/i],
              [b, [m, /master.|lts./, ""]],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[p, "amd64"]],
              [/(ia32(?=;))/i],
              [[p, G]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[p, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[p, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[p, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[p, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[p, /ower/, "", G]],
              [/(sun4\w)[;\)]/i],
              [[p, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[p, G]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [c, [u, V], [w, g]],
              [
                /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [c, [u, V], [w, v]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [c, [u, S], [w, v]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [c, [u, S], [w, g]],
              [/(macintosh);/i],
              [c, [u, S]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [c, [u, q], [w, v]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [c, [u, A], [w, g]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [c, [u, A], [w, v]],
              [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
              ],
              [
                [c, /_/g, " "],
                [u, D],
                [w, v],
              ],
              [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [c, /_/g, " "],
                [u, D],
                [w, g],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [c, [u, "OPPO"], [w, v]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [c, [u, "Vivo"], [w, v]],
              [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
              [c, [u, "Realme"], [w, v]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [c, [u, M], [w, v]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [c, [u, M], [w, g]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [c, [u, "LG"], [w, g]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [c, [u, "LG"], [w, v]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [c, [u, "Lenovo"], [w, g]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [c, /_/g, " "],
                [u, "Nokia"],
                [w, v],
              ],
              [/(pixel c)\b/i],
              [c, [u, U], [w, g]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [c, [u, U], [w, v]],
              [
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [c, [u, O], [w, v]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [c, "Xperia Tablet"],
                [u, O],
                [w, g],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [c, [u, "OnePlus"], [w, v]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [c, [u, T], [w, g]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [c, /(.+)/g, "Fire Phone $1"],
                [u, T],
                [w, v],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [c, u, [w, g]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [c, [u, _], [w, v]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [c, [u, C], [w, g]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [c, [u, C], [w, v]],
              [/(nexus 9)/i],
              [c, [u, "HTC"], [w, g]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [u, [c, /_/g, " "], [w, v]],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [c, [u, "Acer"], [w, g]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [c, [u, "Meizu"], [w, v]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [u, c, [w, v]],
              [
                /(kobo)\s(ereader|touch)/i,
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [u, c, [w, g]],
              [/(surface duo)/i],
              [c, [u, N], [w, g]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [c, [u, "Fairphone"], [w, v]],
              [/(u304aa)/i],
              [c, [u, "AT&T"], [w, v]],
              [/\bsie-(\w*)/i],
              [c, [u, "Siemens"], [w, v]],
              [/\b(rct\w+) b/i],
              [c, [u, "RCA"], [w, g]],
              [/\b(venue[\d ]{2,7}) b/i],
              [c, [u, "Dell"], [w, g]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [c, [u, "Verizon"], [w, g]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [c, [u, "Barnes & Noble"], [w, g]],
              [/\b(tm\d{3}\w+) b/i],
              [c, [u, "NuVision"], [w, g]],
              [/\b(k88) b/i],
              [c, [u, "ZTE"], [w, g]],
              [/\b(nx\d{3}j) b/i],
              [c, [u, "ZTE"], [w, v]],
              [/\b(gen\d{3}) b.+49h/i],
              [c, [u, "Swiss"], [w, v]],
              [/\b(zur\d{3}) b/i],
              [c, [u, "Swiss"], [w, g]],
              [/\b((zeki)?tb.*\b) b/i],
              [c, [u, "Zeki"], [w, g]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[u, "Dragon Touch"], c, [w, g]],
              [/\b(ns-?\w{0,9}) b/i],
              [c, [u, "Insignia"], [w, g]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [c, [u, "NextBook"], [w, g]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[u, "Voice"], c, [w, v]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[u, "LvTel"], c, [w, v]],
              [/\b(ph-1) /i],
              [c, [u, "Essential"], [w, v]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [c, [u, "Envizen"], [w, g]],
              [/\b(trio[-\w\. ]+) b/i],
              [c, [u, "MachSpeed"], [w, g]],
              [/\btu_(1491) b/i],
              [c, [u, "Rotor"], [w, g]],
              [/(shield[\w ]+) b/i],
              [c, [u, "Nvidia"], [w, g]],
              [/(sprint) (\w+)/i],
              [u, c, [w, v]],
              [/(kin\.[onetw]{3})/i],
              [
                [c, /\./g, " "],
                [u, N],
                [w, v],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [c, [u, j], [w, g]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [c, [u, j], [w, v]],
              [/smart-tv.+(samsung)/i],
              [u, [w, y]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [c, /^/, "SmartTV"],
                [u, V],
                [w, y],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [u, "LG"],
                [w, y],
              ],
              [/(apple) ?tv/i],
              [u, [c, S + " TV"], [w, y]],
              [/crkey/i],
              [
                [c, E + "cast"],
                [u, U],
                [w, y],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [c, [u, T], [w, y]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [c, [u, q], [w, y]],
              [/(bravia[\w ]+)( bui|\))/i],
              [c, [u, O], [w, y]],
              [/(mitv-\w{5}) bui/i],
              [c, [u, D], [w, y]],
              [/Hbbtv.*(technisat) (.*);/i],
              [u, c, [w, y]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [u, Z],
                [c, Z],
                [w, y],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[w, y]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [u, c, [w, f]],
              [/droid.+; (shield) bui/i],
              [c, [u, "Nvidia"], [w, f]],
              [/(playstation [345portablevi]+)/i],
              [c, [u, O], [w, f]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [c, [u, N], [w, f]],
              [/((pebble))app/i],
              [u, c, [w, k]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [c, [u, S], [w, k]],
              [/droid.+; (glass) \d/i],
              [c, [u, U], [w, k]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [c, [u, j], [w, k]],
              [/(quest( 2| pro)?)/i],
              [c, [u, L], [w, k]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [u, [w, x]],
              [/(aeobc)\b/i],
              [c, [u, T], [w, x]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
              [c, [w, v]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [c, [w, g]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[w, g]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[w, v]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [c, [u, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [m, [b, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [m, [b, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [b, m],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [m, b],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [b, m],
              [
                /(windows) nt 6\.2; (arm)/i,
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
              ],
              [b, [m, Q, X]],
              [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [b, "Windows"],
                [m, Q, X],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [m, /_/g, "."],
                [b, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [b, I],
                [m, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [m, b],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [b, m],
              [/\(bb(10);/i],
              [m, [b, _]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [m, [b, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [m, [b, z + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [m, [b, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [m, [b, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [m, [b, E + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[b, B], m],
              [
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [b, m],
              [/(sunos) ?([\w\.\d]*)/i],
              [[b, "Solaris"], m],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [b, m],
            ],
          },
          Y = function (i, e) {
            if ((typeof i === d && ((e = i), (i = r)), !(this instanceof Y)))
              return new Y(i, e).getResult();
            var t = typeof s !== n && s.navigator ? s.navigator : r,
              o = i || (t && t.userAgent ? t.userAgent : ""),
              f = t && t.userAgentData ? t.userAgentData : r,
              y = e ? W(K, e) : K,
              k = t && t.userAgent == o;
            return (
              (this.getBrowser = function () {
                var i,
                  e = {};
                return (
                  (e[b] = r),
                  (e[m] = r),
                  $.call(e, o, y.browser),
                  (e[h] =
                    typeof (i = e[m]) === l
                      ? i.replace(/[^\d\.]/g, "").split(".")[0]
                      : r),
                  k &&
                    t &&
                    t.brave &&
                    typeof t.brave.isBrave == a &&
                    (e[b] = "Brave"),
                  e
                );
              }),
              (this.getCPU = function () {
                var i = {};
                return (i[p] = r), $.call(i, o, y.cpu), i;
              }),
              (this.getDevice = function () {
                var i = {};
                return (
                  (i[u] = r),
                  (i[c] = r),
                  (i[w] = r),
                  $.call(i, o, y.device),
                  k && !i[w] && f && f.mobile && (i[w] = v),
                  k &&
                    "Macintosh" == i[c] &&
                    t &&
                    typeof t.standalone !== n &&
                    t.maxTouchPoints &&
                    t.maxTouchPoints > 2 &&
                    ((i[c] = "iPad"), (i[w] = g)),
                  i
                );
              }),
              (this.getEngine = function () {
                var i = {};
                return (i[b] = r), (i[m] = r), $.call(i, o, y.engine), i;
              }),
              (this.getOS = function () {
                var i = {};
                return (
                  (i[b] = r),
                  (i[m] = r),
                  $.call(i, o, y.os),
                  k &&
                    !i[b] &&
                    f &&
                    "Unknown" != f.platform &&
                    (i[b] = f.platform
                      .replace(/chrome os/i, B)
                      .replace(/macos/i, I)),
                  i
                );
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return o;
              }),
              (this.setUA = function (i) {
                return (
                  (o = typeof i === l && i.length > 350 ? Z(i, 350) : i), this
                );
              }),
              this.setUA(o),
              this
            );
          };
        (Y.VERSION = "1.0.36"),
          (Y.BROWSER = F([b, m, h])),
          (Y.CPU = F([p])),
          (Y.DEVICE = F([c, u, w, f, v, y, g, k, x])),
          (Y.ENGINE = Y.OS = F([b, m])),
          typeof e !== n
            ? (i.exports && (e = i.exports = Y), (e.UAParser = Y))
            : t.amdO
              ? ((o = function () {
                  return Y;
                }.call(e, t, e, i)),
                r !== o && (i.exports = o))
              : typeof s !== n && (s.UAParser = Y);
        var J = typeof s !== n && (s.jQuery || s.Zepto);
        if (J && !J.ua) {
          var ii = new Y();
          (J.ua = ii.getResult()),
            (J.ua.get = function () {
              return ii.getUA();
            }),
            (J.ua.set = function (i) {
              ii.setUA(i);
              var e = ii.getResult();
              for (var t in e) J.ua[t] = e[t];
            });
        }
      })("object" == typeof window ? window : this);
    },
  },
]);
