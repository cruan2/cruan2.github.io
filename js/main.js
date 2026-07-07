/* ============================================================
   CHARLES RUAN — personal site
   Vanilla JS: beacon-gold route line, theme toggle, reveals,
   stat counters, nav highlight, hero parallax. No dependencies.
   ============================================================ */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- theme toggle ------------------------------------------- */

  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");

  function syncToggle() {
    var dark = root.getAttribute("data-theme") === "dark";
    toggle.textContent = dark ? "☀" : "☾";
    toggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  }
  toggle.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    syncToggle();
  });
  syncToggle();

  /* ---------- beacon-gold route line ---------------------------------
     Collects .route-node markers, connects them with a 45°-bend path
     (runner-vision style), and draws it in as you scroll. A dashed
     ghost shows the route ahead. Desktop only (hidden via CSS <900px).
  -------------------------------------------------------------------- */

  var NS = "http://www.w3.org/2000/svg";
  var layer = document.getElementById("route-layer");
  var route = { segs: [], total: 0, drawPath: null, dots: [] };

  function buildRoute() {
    if (window.innerWidth < 900) { layer.innerHTML = ""; return; }

    var docH = document.documentElement.scrollHeight;
    var docW = document.documentElement.clientWidth;
    var sy = window.scrollY, sx = window.scrollX;

    var pts = [];
    document.querySelectorAll(".route-node").forEach(function (el) {
      var r = el.getBoundingClientRect();
      pts.push({ x: r.left + sx + r.width / 2, y: r.top + sy + r.height / 2 });
    });
    pts.sort(function (a, b) { return a.y - b.y; });
    if (pts.length < 2) { layer.innerHTML = ""; return; }

    // Expand into path points with 45° bends between markers
    var path = [pts[0]];
    for (var i = 1; i < pts.length; i++) {
      var p0 = path[path.length - 1], p1 = pts[i];
      var dx = Math.abs(p1.x - p0.x);
      if (dx > 4 && p1.y - dx > p0.y + 4) {
        path.push({ x: p0.x, y: p1.y - dx }); // vertical run, then 45° diagonal
      }
      path.push(p1);
    }

    var d = "M " + path[0].x + " " + path[0].y;
    var segs = [], total = 0;
    for (var j = 1; j < path.length; j++) {
      var a = path[j - 1], b = path[j];
      var len = Math.hypot(b.x - a.x, b.y - a.y);
      segs.push({ y0: a.y, y1: b.y, start: total, len: len });
      total += len;
      d += " L " + b.x + " " + b.y;
    }

    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("width", docW);
    svg.setAttribute("height", docH);
    svg.setAttribute("viewBox", "0 0 " + docW + " " + docH);

    var ghost = document.createElementNS(NS, "path");
    ghost.setAttribute("d", d);
    ghost.setAttribute("class", "route-ghost");

    var draw = document.createElementNS(NS, "path");
    draw.setAttribute("d", d);
    draw.setAttribute("class", "route-draw");
    draw.style.strokeDasharray = total;
    draw.style.strokeDashoffset = reduceMotion ? 0 : total;

    svg.appendChild(ghost);
    svg.appendChild(draw);

    var dots = [];
    pts.forEach(function (p) {
      var dot = document.createElementNS(NS, "rect");
      dot.setAttribute("x", -5); dot.setAttribute("y", -5);
      dot.setAttribute("width", 10); dot.setAttribute("height", 10);
      dot.setAttribute("transform", "translate(" + p.x + " " + p.y + ") rotate(45)");
      dot.setAttribute("class", "route-dot" + (reduceMotion ? " lit" : ""));
      dot.dataset.y = p.y;
      svg.appendChild(dot);
      dots.push(dot);
    });

    layer.innerHTML = "";
    layer.appendChild(svg);
    route = { segs: segs, total: total, drawPath: draw, dots: dots };
    updateRoute();
  }

  function updateRoute() {
    if (reduceMotion || !route.drawPath) return;
    var target = window.scrollY + window.innerHeight * 0.72;
    var drawn = 0;
    for (var i = 0; i < route.segs.length; i++) {
      var s = route.segs[i];
      if (target >= s.y1) { drawn = s.start + s.len; continue; }
      if (target > s.y0) drawn = s.start + s.len * ((target - s.y0) / (s.y1 - s.y0));
      break;
    }
    route.drawPath.style.strokeDashoffset = Math.max(route.total - drawn, 0);
    route.dots.forEach(function (dot) {
      dot.classList.toggle("lit", Number(dot.dataset.y) <= target);
    });
  }

  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { updateRoute(); ticking = false; });
  }, { passive: true });

  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildRoute, 150);
  });

  window.addEventListener("load", buildRoute);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(buildRoute);
  buildRoute();

  /* ---------- scroll reveals ------------------------------------------ */

  if (!reduceMotion && "IntersectionObserver" in window) {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("on"); revealObs.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (el) { revealObs.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("on"); });
  }

  /* ---------- stat counters ------------------------------------------- */

  function runCounter(el) {
    var end = Number(el.dataset.count);
    var suffix = el.dataset.suffix || "";
    var t0 = performance.now(), dur = 900;
    function frame(t) {
      var p = Math.min((t - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(end * eased).toLocaleString("en-US") + suffix;
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  if (!reduceMotion && "IntersectionObserver" in window) {
    var statObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { runCounter(e.target); statObs.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    document.querySelectorAll(".stat b[data-count]").forEach(function (el) { statObs.observe(el); });
  }

  /* ---------- nav active-section highlight ---------------------------- */

  if ("IntersectionObserver" in window) {
    var links = document.querySelectorAll(".nav-links a");
    var byId = {};
    links.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    var navObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var link = byId[e.target.id];
        if (link) link.classList.toggle("active", e.isIntersecting);
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    ["projects", "about", "contact"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) navObs.observe(el);
    });
  }

  /* ---------- hero parallax (mouse, desktop only) ---------------------- */

  var hero = document.getElementById("hero");
  var movers = hero.querySelectorAll("[data-depth]");
  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    hero.addEventListener("mousemove", function (e) {
      var cx = e.clientX / window.innerWidth - 0.5;
      var cy = e.clientY / window.innerHeight - 0.5;
      movers.forEach(function (el) {
        var depth = Number(el.dataset.depth) || 10;
        el.style.translate = (cx * -depth) + "px " + (cy * -depth) + "px";
      });
    });
    hero.addEventListener("mouseleave", function () {
      movers.forEach(function (el) { el.style.translate = "0px 0px"; });
    });
  }
})();
