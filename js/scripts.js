/*!
 * JavaScript customizado para o Portfólio de Natalvides Neto
 */

window.addEventListener('DOMContentLoaded', (event) => {
  // Função para encolher a navbar ao rolar
  const navbarShrink = function () {
    const navbar = document.getElementById('mainNav');
    if (!navbar) return;

    if (window.scrollY === 0) {
      navbar.classList.remove('navbar-shrink');
    } else {
      navbar.classList.add('navbar-shrink');
    }
  };

  // Inicializa efeito de navbar
  navbarShrink();
  document.addEventListener('scroll', navbarShrink);

  // Scroll suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth',
        });
      }
    });
  });

  // Animações ao scroll
  const animateOnScroll = function () {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  };

  // Inicializa animações
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll();

  // Ativa tooltips do Bootstrap
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Efeito de digitação no título
  const typeWriter = function () {
    const titleElement = document.querySelector('.hero-section h1');
    if (!titleElement) return;

    const text = titleElement.textContent;
    titleElement.textContent = '';
    let i = 0;

    const type = () => {
      if (i < text.length) {
        titleElement.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    };

    type();
  };

  // Inicia efeito de digitação após 1 segundo
  setTimeout(typeWriter, 1000);
});

// Formulário WhatsApp Reformulado
document.getElementById('formContatoWhatsApp').addEventListener('submit', function (e) {
  e.preventDefault();

  // Coleta apenas os campos existentes
  const assunto = document.getElementById('assunto').value;
  const mensagem = document.getElementById('mensagem').value;

  const assuntos = {
    oportunidade: 'Oportunidade de Trabalho',
    freelance: 'Projeto Freelance',
    colaboracao: 'Colaboração Técnica',
    outro: 'Outro',
  };

  const assuntoTexto = assuntos[assunto] || assunto;

  // Monta a mensagem simplificada
  const textoMensagem = encodeURIComponent(
    `*Novo Contato via Portfólio*\n\n` + `*Assunto:* ${assuntoTexto}\n` + `*Mensagem:* ${mensagem}`
  );

  const numeroWhatsApp = '+5594992725562';
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${textoMensagem}`;

  window.open(urlWhatsApp, '_blank');
  this.reset();
});
