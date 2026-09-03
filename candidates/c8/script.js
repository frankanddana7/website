/* Studio Subasio — script.js
   Progressive enhancement only. Everything on the site works
   with this file missing; it just adds three small effects. */

document.documentElement.classList.add('js');

/* 1. Stone progress rule at the top of the page */
var bar = document.getElementById('progressBar');
function updateProgress() {
  var doc = document.documentElement;
  var max = doc.scrollHeight - doc.clientHeight;
  var pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
  if (bar) bar.style.width = pct + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();

/* 2. Fade-in reveal for image blocks as they enter the viewport */
var reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && reveals.length) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach(function (el) { io.observe(el); });
} else {
  reveals.forEach(function (el) { el.classList.add('is-visible'); });
}

/* 3. Click-to-enlarge lightbox */
var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightboxImg');
document.querySelectorAll('img.art').forEach(function (img) {
  img.addEventListener('click', function () {
    lightboxImg.src = img.currentSrc || img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
  });
});
function closeLightbox() { lightbox.classList.remove('open'); }
if (lightbox) {
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
}
