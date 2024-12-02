"use strict";

function checkVisibility() {
  var rows = document.querySelectorAll('.row');
  rows.forEach(function (row) {
    var rect = row.getBoundingClientRect();

    if (rect.top <= window.innerHeight) {
      row.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);
//# sourceMappingURL=script.dev.js.map
