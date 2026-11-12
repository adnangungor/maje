/**
 * Maje Web Sitesi — Etkileşim ve Animasyonlar (main.js)
 * Sürüm 4 · Kaynak: Bölüm 5
 * Kural: Dış kütüphane yok. Saf Vanilla JS, IntersectionObserver (once: true).
 * prefers-reduced-motion ve JS kapalı durumunda her şey tam görünür.
 */

(function () {
  'use strict';

  // JS desteği sınıfı
  document.documentElement.classList.add('js');

  // Donanım animasyon azaltma tercihi kontrolü
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     Mobil Gezinme Menüsü
     ========================================================================== */
  var menuToggle = document.getElementById('menuToggle');
  var siteNav = document.getElementById('siteNav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Menü dışına tıklanınca kapatma
    document.addEventListener('click', function (e) {
      if (!siteNav.contains(e.target) && !menuToggle.contains(e.target) && siteNav.classList.contains('is-open')) {
        siteNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Reduced motion aktifse animasyonları çalıştırma, her şey statik ve erişilebilir kalsın
  if (prefersReducedMotion) {
    document.querySelectorAll('[data-animate]').forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  /* ==========================================================================
     A2 — Bölüm Girişi Animasyonu (IntersectionObserver, once: true)
     Metin ve başlıklar 16–20px aşağıdan, 700–900ms içinde yumuşakça belirir.
     ========================================================================== */
  var animatedElements = document.querySelectorAll('[data-animate="fade-up"]');
  if ('IntersectionObserver' in window && animatedElements.length > 0) {
    var entryObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
      }
    );

    animatedElements.forEach(function (el) {
      entryObserver.observe(el);
    });
  } else {
    animatedElements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }

  /* ==========================================================================
     A1 — Hero Süreç Hattı Animasyonu (Bölüm 5 Envanter)
     Hatlar soldan sağa çizilir, düğümler hat geçtikçe belirir ve 700ms soluk halka verir.
     ========================================================================== */
  var heroSvg = document.querySelector('.hero-process-svg');
  if (heroSvg) {
    var trackIncentives = heroSvg.querySelector('.track-incentives');
    var trackCustoms = heroSvg.querySelector('.track-customs');
    var nodesIncentives = heroSvg.querySelectorAll('.nodes-incentives > g, .nodes-incentives circle, .nodes-incentives text');
    var nodesCustoms = heroSvg.querySelectorAll('.nodes-customs > g, .nodes-customs circle, .nodes-customs text');

    // Başlangıç hazırlığı
    if (trackIncentives) {
      var len1 = trackIncentives.getTotalLength ? trackIncentives.getTotalLength() : 480;
      trackIncentives.style.strokeDasharray = len1;
      trackIncentives.style.strokeDashoffset = len1;
      trackIncentives.style.transition = 'stroke-dashoffset 1100ms cubic-bezier(.22, .61, .36, 1)';
    }

    if (trackCustoms) {
      var len2 = trackCustoms.getTotalLength ? trackCustoms.getTotalLength() : 320;
      trackCustoms.style.strokeDasharray = len2;
      trackCustoms.style.strokeDashoffset = len2;
      trackCustoms.style.transition = 'stroke-dashoffset 900ms cubic-bezier(.22, .61, .36, 1) 300ms';
    }

    // Sayfa açılışından 150ms sonra başlat
    setTimeout(function () {
      if (trackIncentives) {
        trackIncentives.style.strokeDashoffset = '0';
      }
      if (trackCustoms) {
        trackCustoms.style.strokeDashoffset = '0';
      }
      heroSvg.classList.add('animated');
    }, 150);
  }

  /* ==========================================================================
     A4 — Teşvik Sayfası Süreç Diyagramı (Dikey Hat Adım Adım Belirme)
     ========================================================================== */
  var timelineSteps = document.querySelectorAll('.timeline-step');
  if ('IntersectionObserver' in window && timelineSteps.length > 0) {
    var stepObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.15
      }
    );

    timelineSteps.forEach(function (step) {
      stepObserver.observe(step);
    });
  } else {
    timelineSteps.forEach(function (step) {
      step.classList.add('is-visible');
    });
  }

  /* ==========================================================================
     Site Giriş Animasyonu (Intro Video Splash)
     ========================================================================== */
  var introOverlay = document.getElementById('siteIntroOverlay');
  var introVideo = document.getElementById('siteIntroVideo');
  var introSkip = document.getElementById('siteIntroSkip');

  if (introOverlay && introVideo) {
    var urlParams = new URLSearchParams(window.location.search);
    var forceIntro = urlParams.has('intro');
    var hasSeenIntro = false;
    try {
      hasSeenIntro = sessionStorage.getItem('maje_intro_seen') === '1';
    } catch (e) {}

    if (!forceIntro && hasSeenIntro) {
      // Bu oturumda zaten görüldü; hemen gizle
      introOverlay.classList.add('is-hidden');
    } else {
      var dismissed = false;
      var dismissIntro = function () {
        if (dismissed) return;
        dismissed = true;
        introOverlay.classList.add('fade-out');
        try {
          sessionStorage.setItem('maje_intro_seen', '1');
        } catch (e) {}
        setTimeout(function () {
          introOverlay.classList.add('is-hidden');
          if (introVideo) introVideo.pause();
        }, 800);
      };

      if (introSkip) {
        introSkip.addEventListener('click', dismissIntro);
      }

      introVideo.addEventListener('ended', dismissIntro);

      // Güvenlik zaman aşımı (video ~4.96s, en geç 5.5s içinde yumuşakça geçilir)
      setTimeout(dismissIntro, 5500);

      var playPromise = introVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(function () {
          dismissIntro();
        });
      }
    }
  }

})();
