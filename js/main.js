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
