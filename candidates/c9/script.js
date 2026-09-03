/* Reading-progress hairline for project pages.
   Fills the thin bar at the top of the page left-to-right as you
   scroll, so it's clear how far through the gallery you are. */
(function () {
  var fill = document.querySelector('.progress-fill');
  if (!fill) return;

  function update() {
    var doc = document.documentElement;
    var scrollable = doc.scrollHeight - doc.clientHeight;
    var pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
    fill.style.width = pct + '%';
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
