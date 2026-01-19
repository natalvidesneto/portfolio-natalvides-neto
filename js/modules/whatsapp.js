export function initWhatsAppForm() {
  const form = document.getElementById('formContatoWhatsApp');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const assunto = document.getElementById('assunto').value;
    const mensagem = document.getElementById('mensagem').value;

    const assuntos = {
      oportunidade: 'Oportunidade de Trabalho',
      freelance: 'Projeto Freelance',
      colaboracao: 'Colaboração Técnica',
      outro: 'Outro',
    };

    const textoMensagem = encodeURIComponent(
      `*Novo Contato via Portfólio*\n\n*Assunto:* ${assuntos[assunto]}\n*Mensagem:* ${mensagem}`
    );

    const numeroWhatsApp = '+5594992725562';
    window.open(`https://wa.me/${numeroWhatsApp}?text=${textoMensagem}`, '_blank');

    form.reset();
  });
}
