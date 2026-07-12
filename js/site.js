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
