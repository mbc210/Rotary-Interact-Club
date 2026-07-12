// Interact Club of Chinatown — site interactions.
// Mobile nav toggle, event category filter tabs, and the join-form success state.

(function () {
  "use strict";

  // --- Mobile navigation ---------------------------------------------------
  var header = document.getElementById("site-header");
  var toggle = header && header.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close the menu when a link is chosen, so it doesn't cover the page
    document.querySelectorAll(".site-nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --- On-page anchor links --------------------------------------------------
  // When already on the homepage (served as "/", "/index.html", etc.),
  // "index.html#about" style links would trigger a full reload. Rewrite them
  // to plain hashes so they smooth-scroll instead.
  var onHome = /(^|\/)(index\.html)?$/.test(location.pathname);
  if (onHome) {
    document.querySelectorAll('a[href^="index.html#"]').forEach(function (a) {
      a.setAttribute("href", a.getAttribute("href").replace("index.html", ""));
    });
  }

  // --- Scrollspy: highlight the nav item for the section in view -------------
  var spy = [];
  document.querySelectorAll(".site-nav a").forEach(function (a) {
    var href = a.getAttribute("href");
    var i = href.indexOf("#");
    if (i === -1) return;
    var page = href.slice(0, i);
    if (page && !location.pathname.endsWith(page)) return;
    var sec = document.getElementById(href.slice(i + 1));
    if (sec) spy.push({ sec: sec, link: a });
  });
  if (spy.length) {
    var navLinks = document.querySelectorAll(".site-nav a");
    var homeLink = document.querySelector('.site-nav a[href="index.html"], .site-nav a[href="./"]');
    var onScroll = function () {
      var y = window.scrollY + 110;
      var current = null;
      spy.forEach(function (s) {
        if (s.sec.offsetTop <= y && y < s.sec.offsetTop + s.sec.offsetHeight) current = s.link;
      });
      navLinks.forEach(function (a) { a.removeAttribute("aria-current"); });
      (current || homeLink) && (current || homeLink).setAttribute("aria-current", "page");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // --- Event filter tabs (events.html) --------------------------------------
  var tablist = document.querySelector(".tabs[aria-label='Filter events by category']");
  var grid = document.getElementById("events-grid");
  if (tablist && grid) {
    var tabs = tablist.querySelectorAll(".tab");
    var cards = grid.querySelectorAll(".event-card");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) { t.setAttribute("aria-selected", t === tab ? "true" : "false"); });
        var filter = tab.getAttribute("data-filter");
        cards.forEach(function (card) {
          var show = filter === "all" || card.getAttribute("data-category") === filter;
          card.style.display = show ? "" : "none";
        });
      });
    });
  }

  // --- Past events grid/detail routing (past-events.html) --------------------
  var peGrid = document.getElementById("pe-grid-view");
  if (peGrid) {
    var details = document.querySelectorAll(".pe-detail");
    var route = function () {
      var id = location.hash.slice(1);
      var target = id && document.getElementById("detail-" + id);
      details.forEach(function (d) { d.hidden = true; });
      peGrid.hidden = !!target;
      if (target) target.hidden = false;
      window.scrollTo(0, 0);
    };
    document.querySelectorAll(".pe-back").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        history.pushState("", "", location.pathname);
        route();
      });
    });
    window.addEventListener("hashchange", route);
    route();
  }

  // --- Join form (join.html) -------------------------------------------------
  var form = document.getElementById("join-form");
  var success = document.getElementById("join-success");
  if (form && success) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      form.hidden = true;
      success.hidden = false;
      success.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
})();
