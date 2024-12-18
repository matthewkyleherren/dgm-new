window.addEventListener("load", function () {
  var t = "featurebarId",
    e = document.getElementsByClassName("react-wafer-Featurebar")[0];
  if (e) {
    if (
      e.classList &&
      e.classList.contains &&
      e.classList.contains("auto-close")
    ) {
      var a = e.getElementsByClassName("featurebar-content")[0],
        s = a && a.getElementsByTagName("a")[0],
        n = s && s.getAttribute("data-uuid"),
        o = (function (t) {
          var e;
          try {
            e = JSON.parse(window.localStorage.getItem(t)) || {};
          } catch (t) {}
          return e;
        })(t);
      if (n !== o)
        e.classList.remove("D(n)"),
          Array.prototype.slice
            .call(e.getElementsByClassName("featurebar-close-button"))
            .forEach(function (e) {
              e.addEventListener("click", function () {
                !(function (t, e) {
                  try {
                    window.localStorage.setItem(t, JSON.stringify(e));
                  } catch (t) {}
                })(t, n);
              });
            });
    }
    if (
      e.classList &&
      e.classList.contains &&
      e.classList.contains("auto-play")
    ) {
      var r = window.getComputedStyle(e).height,
        l = Array.prototype.slice.call(
          e.getElementsByClassName("featurebar-content"),
        ),
        i = 0,
        c = (i + 1) % l.length;
      function u() {
        setTimeout(function () {
          (l[i].style.transitionDuration = ".8s"),
            (l[i].style.transform = "translateY(-" + r + ")"),
            (l[c].style.transitionDuration = ".8s"),
            (l[c].style.transform = "translateY(0)"),
            setTimeout(function () {
              (l[i].style.transitionDuration = null),
                (l[i].style.transform = "translateY(" + r + ")"),
                (c = ((i = c) + 1) % l.length),
                u();
            }, 1e3);
        }, 3e3);
      }
      l.length > 1 &&
        (l.forEach(function (t, e) {
          e !== i && (t.style.transform = "translateY(" + r + ")");
        }),
        u());
    }
    var f = e.classList.contains("scroll-to-show");
    const m = e.getAttribute("data-scroll-threshold") || 1800;
    if (f && window.wafer) {
      const w = window.wafer.utils.throttle(function (t) {
        t.scrollY >= m &&
          (e.classList.remove("V(h)"),
          window.wafer.removeListener("scroll", w));
      }, 100);
      window.wafer.on("scroll", w);
    }
  }
});
