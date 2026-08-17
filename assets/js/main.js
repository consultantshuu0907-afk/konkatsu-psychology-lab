document.addEventListener('DOMContentLoaded', function () {
  /* ---- Mobile navigation toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- Wrap tables so they scroll horizontally on mobile ---- */
  document.querySelectorAll('.post-content table').forEach(function (table) {
    var wrapper = document.createElement('div');
    wrapper.className = 'table-scroll';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });

  /* ---- Auto-generated table of contents for long articles ---- */
  var content = document.querySelector('.post-content');
  if (content) {
    var headings = content.querySelectorAll('h2');
    if (headings.length >= 2) {
      var tocList = document.createElement('ol');
      tocList.className = 'toc-list';
      headings.forEach(function (h, i) {
        var id = h.id || 'section-' + (i + 1);
        h.id = id;
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#' + id;
        a.textContent = h.textContent;
        li.appendChild(a);
        tocList.appendChild(li);
      });
      var toc = document.createElement('nav');
      toc.className = 'toc';
      toc.setAttribute('aria-label', '目次');
      var tocTitle = document.createElement('p');
      tocTitle.className = 'toc-title';
      tocTitle.textContent = '目次';
      toc.appendChild(tocTitle);
      toc.appendChild(tocList);
      content.parentNode.insertBefore(toc, content);
    }
  }

  /* ---- Back-to-top button ---- */
  var backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 500) {
        backToTop.classList.add('is-visible');
      } else {
        backToTop.classList.remove('is-visible');
      }
    }, { passive: true });
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- Header shadow on scroll ---- */
  var header = document.querySelector('.site-header');
  if (header) {
    var updateHeader = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
    };
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Reveal-on-scroll for cards and sections ---- */
  var revealTargets = document.querySelectorAll(
    '.post-list li, .quick-nav-card, .lifestyle-grid > *, .closing-cta .wrap > *, .hero-badge'
  );
  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          var el = entry.target;
          setTimeout(function () { el.classList.add('is-visible'); }, (i % 6) * 60);
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealTargets.forEach(function (el) { io.observe(el); });
  }

  /* ---- Subtle hero parallax (background drifts slower than scroll) ---- */
  if (!reduceMotion) {
    var parallaxLayers = document.querySelectorAll('.hero-bg');
    if (parallaxLayers.length) {
      var ticking = false;
      var applyParallax = function () {
        parallaxLayers.forEach(function (layer) {
          var rect = layer.parentElement.getBoundingClientRect();
          var offset = rect.top * 0.12;
          layer.style.transform = 'translateY(' + offset + 'px)';
        });
        ticking = false;
      };
      window.addEventListener('scroll', function () {
        if (!ticking) {
          window.requestAnimationFrame(applyParallax);
          ticking = true;
        }
      }, { passive: true });
      applyParallax();
    }
  }
});
