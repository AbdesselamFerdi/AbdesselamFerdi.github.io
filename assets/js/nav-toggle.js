/**
 * Mobile navigation toggle for the main .nav-menu
 * (Kept separate from main.js/vendor scripts so it's easy to maintain.)
 */
(function () {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".mobile-nav-toggle-btn");
    var header = document.getElementById("header");
    if (!btn || !header) return;

    btn.addEventListener("click", function () {
      header.classList.toggle("nav-open");
      btn.classList.toggle("bi-list");
      btn.classList.toggle("bi-x");
    });

    document.querySelectorAll(".nav-menu a").forEach(function (a) {
      a.addEventListener("click", function () {
        header.classList.remove("nav-open");
        btn.classList.add("bi-list");
        btn.classList.remove("bi-x");
      });
    });
  });
})();
