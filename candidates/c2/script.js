/* Studio Subasio — small vanilla JS, no dependencies, no build step. */
document.documentElement.classList.add('js');

/* Sticky header condenses once the page scrolls past ~80px */
const header = document.querySelector('.site-header');
if (header) {
  const onScroll = () => header.classList.toggle('condensed', window.scrollY > 80);
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* Scroll-reveal fade-in-up (falls back to fully visible if unsupported) */
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); io.unobserve(entry.target); }
    });
  }, { threshold: 0.15 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in-view'));
}

/* Click-to-enlarge lightbox for gallery images */
const lightbox = document.querySelector('.lightbox');
const lbImg = lightbox && lightbox.querySelector('img');
const lbClose = lightbox && lightbox.querySelector('.lightbox-close');
const openLightbox = (src, alt) => { lbImg.src = src; lbImg.alt = alt; lightbox.hidden = false; lbClose.focus(); };
const closeLightbox = () => { lightbox.hidden = true; lbImg.src = ''; };
document.querySelectorAll('.piece img').forEach((img) => {
  img.addEventListener('click', () => openLightbox(img.src, img.alt));
});
if (lbClose) lbClose.addEventListener('click', closeLightbox);
if (lightbox) lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox && !lightbox.hidden) closeLightbox();
});

/* Filter chips on the home page show/hide project cards by category */
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.card');
chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
    const filter = chip.dataset.filter;
    cards.forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});
