import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/styles.css';

import { initNavbar } from './modules/navbar.js';
import { initScrollAnimations } from './modules/scroll.js';
import { initTypewriter } from './modules/typewriter.js';
import { initWhatsAppForm } from './modules/whatsapp.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
  initTypewriter();
  initWhatsAppForm();
});

// Ano atual no footer
const yearEl = document.getElementById('currentYear');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}