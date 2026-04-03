
// FogShield Security — Interactive JS

document.addEventListener('DOMContentLoaded', function () {

  // ── Mobile nav ──────────────────────────────────────────────
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileClose = document.getElementById('mobileClose');

  function openMenu() {
    mobileMenu.classList.add('open');
    hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) hamburger.addEventListener('click', openMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMenu);

  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }

  // ── Scroll-based fade-up animations ─────────────────────────
  var fadeEls = document.querySelectorAll('.fade-up');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(function (el) { observer.observe(el); });

  // ── Industry slider dots ─────────────────────────────────────
  var sliderTrack = document.getElementById('industryCards');
  var dots = document.querySelectorAll('.slider-dot');

  if (sliderTrack && dots.length) {
    sliderTrack.addEventListener('scroll', function () {
      var scrollLeft = sliderTrack.scrollLeft;
      var width = sliderTrack.offsetWidth;
      var active = Math.round(scrollLeft / width);
      dots.forEach(function (d, i) {
        d.classList.toggle('active', i === active);
      });
    });

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        sliderTrack.scrollTo({ left: i * sliderTrack.offsetWidth, behavior: 'smooth' });
      });
    });
  }

  // ── Video play overlay ───────────────────────────────────────
  var videoWrap = document.getElementById('videoWrap');
  if (videoWrap) {
    videoWrap.addEventListener('click', function () {
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
      iframe.allow = 'autoplay; fullscreen';
      iframe.allowFullscreen = true;
      iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0;';
      videoWrap.innerHTML = '';
      videoWrap.appendChild(iframe);
    });
  }

  // ── Sticky nav shadow on scroll ──────────────────────────────
  var nav = document.querySelector('.nav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      nav.style.background = 'rgba(12, 12, 12, 0.97)';
    } else {
      nav.style.background = 'rgba(18, 18, 18, 0.9)';
    }
  }, { passive: true });

});
