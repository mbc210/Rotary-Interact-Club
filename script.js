/* =========================================================
   Rotary Interact Club of Chinatown — interactivity
   Vanilla JS, no dependencies.
   ========================================================= */
(function () {
  "use strict";

  /* ---- Current year in footer ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---- Mobile navigation toggle ---- */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    // Close the menu after tapping a link (mobile)
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      }
    });
  }

  /* ---- Scroll reveal ---- */
  var revealTargets = document.querySelectorAll(
    ".section h2, .section-intro, .card, .project, .event, .about-card, .impact-stat, .join-form"
  );
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Animated impact counters ---- */
  var counters = document.querySelectorAll(".impact-stat .num[data-count]");
  function formatNumber(n) { return n.toLocaleString("en-US"); }
  function animateCount(el) {
    var target = parseInt(el.getAttribute("data-count"), 10) || 0;
    var suffix = /\+/.test(el.textContent) ? "+" : "";
    var start = null;
    var duration = 1400;
    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      el.textContent = formatNumber(Math.floor(eased * target)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = formatNumber(target) + suffix;
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window && counters.length) {
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { countObserver.observe(el); });
  }

  /* ---- Join form (client-side demo handler) ---- */
  var form = document.getElementById("joinForm");
  var status = document.getElementById("formStatus");
  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.className = "form-status";

      var name = form.elements["name"];
      var email = form.elements["email"];
      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());

      if (!name.value.trim() || !emailOk) {
        status.textContent = "Please enter your name and a valid email address.";
        status.classList.add("err");
        (!name.value.trim() ? name : email).focus();
        return;
      }

      status.textContent =
        "Thank you, " + name.value.trim().split(" ")[0] +
        "! We've received your message and will be in touch soon.";
      status.classList.add("ok");
      form.reset();
    });
  }
})();
