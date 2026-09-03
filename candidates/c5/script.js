/* Studio Subasio — candidate c5
   Progressive enhancement only: the page is fully usable with this file
   absent. Two features: scroll-reveal fade-in, and a click-to-enlarge
   lightbox for gallery images. */

document.documentElement.classList.add('js');

/* ---- Scroll-reveal ---- */
var pieces = document.querySelectorAll('.piece');
if ('IntersectionObserver' in window && pieces.length) {
  var revealer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  pieces.forEach(function (piece) { revealer.observe(piece); });
} else {
  pieces.forEach(function (piece) { piece.classList.add('in-view'); });
}

/* ---- Lightbox ---- */
var lightbox = document.getElementById('lightbox');
if (lightbox) {
  var lightboxImg = document.getElementById('lightbox-img');
  var closeBtn = lightbox.querySelector('.lightbox-close');
  var lastFocused = null;

  function openLightbox(src, alt) {
    lastFocused = document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = alt;
    lightbox.hidden = false;
    closeBtn.focus();
  }
  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = '';
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll('.piece img').forEach(function (img) {
    img.addEventListener('click', function () {
      openLightbox(img.src, img.alt);
    });
  });
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });
}
