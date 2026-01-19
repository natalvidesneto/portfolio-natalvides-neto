export function initTypewriter() {
  const title = document.querySelector('.hero-section h1');
  if (!title) return;

  const text = title.textContent;
  title.textContent = '';

  let i = 0;
  const type = () => {
    if (i < text.length) {
      title.textContent += text.charAt(i++);
      setTimeout(type, 100);
    }
  };

  setTimeout(type, 1000);
}
