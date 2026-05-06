(function () {
  const nav = document.querySelector('.site-nav');
  const btn = document.getElementById('nav-btn');
  const menu = document.getElementById('nav-mobile');
  const logoImg = document.querySelector('.nav-logo-wrap img');

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }));

  const LOGO_LARGE = 280;  // px, hero size
  const LOGO_SMALL = 50;   // px, nav size
  const START_Y = 150;     // px logo center starts below nav center
  const SCROLL_RANGE = 280;

  function updateLogo() {
    const t = Math.min(window.scrollY / SCROLL_RANGE, 1);
    const size = LOGO_LARGE + (LOGO_SMALL - LOGO_LARGE) * t;
    const y = START_Y * (1 - t);
    logoImg.style.width = size + 'px';
    logoImg.style.height = size + 'px';
    logoImg.style.transform = `translateY(${y}px)`;
    nav.classList.toggle('scrolled', t >= 1);
  }

  window.addEventListener('scroll', updateLogo, { passive: true });
  updateLogo();
})();
