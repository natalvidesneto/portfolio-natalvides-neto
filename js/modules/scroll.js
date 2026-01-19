export function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');

  const animate = () => {
    elements.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 150) {
        el.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', animate);
  animate();
}
