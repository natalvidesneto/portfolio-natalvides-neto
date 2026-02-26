export function initNavbar() {
  const navbar = document.getElementById('mainNav');
  if (!navbar) return;

  // ── Shrink on scroll ──────────────────────────────────────────
  const shrink = () => {
    navbar.classList.toggle('navbar-shrink', window.scrollY > 0);
  };
  shrink();
  document.addEventListener('scroll', shrink, { passive: true });

  // ── Close mobile menu when a nav link is clicked ──────────────
  navbar.querySelectorAll('.mobile-nav .nav-link').forEach((link) => {
    link.addEventListener('click', () => closeMobileMenu());
  });

  // ── Mobile hamburger ──────────────────────────────────────────
  const toggler    = document.getElementById('navToggler');
  const mobileMenu = document.getElementById('mobileMenu');

  function openMobileMenu() {
    toggler.classList.add('open');
    toggler.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
  }

  function closeMobileMenu() {
    toggler.classList.remove('open');
    toggler.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
  }

  toggler?.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');
    isOpen ? closeMobileMenu() : openMobileMenu();
  });

  // ── Dark / Light Mode ─────────────────────────────────────────
  const html            = document.documentElement;
  const themeToggle     = document.getElementById('themeToggle');
  const themeToggleMob  = document.getElementById('themeToggleMobile');
  const themeIcon       = document.getElementById('themeIcon');
  const themeIconMob    = document.getElementById('themeIconMobile');

  // Restore saved preference or detect OS preference
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = saved ?? (prefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);

  themeToggle?.addEventListener('click', toggleTheme);
  themeToggleMob?.addEventListener('click', toggleTheme);

  function toggleTheme() {
    const current = html.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    const icon = theme === 'dark' ? 'fa-sun' : 'fa-moon';

    if (themeIcon) {
      themeIcon.className = `fas ${icon}`;
    }
    if (themeIconMob) {
      themeIconMob.className = `fas ${icon}`;
    }
  }
}