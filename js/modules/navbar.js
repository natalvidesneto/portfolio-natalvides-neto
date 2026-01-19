export function initNavbar() {
  const navbar = document.getElementById('mainNav');
  if (!navbar) return;

  const shrink = () => {
    navbar.classList.toggle('navbar-shrink', window.scrollY > 0);
  };

  shrink();
  document.addEventListener('scroll', shrink);
}
