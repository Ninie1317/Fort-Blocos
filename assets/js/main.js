// Navegação mobile simples e ano no footer
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const list = document.querySelector('.nav-list');
  if (toggle && list) {
    toggle.addEventListener('click', () => list.classList.toggle('open'));
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Formulário de contato (demo): previne envio real e mostra alerta
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      alert(`Obrigado, ${data.nome}! Em breve entraremos em contato.`);
      form.reset();
    });
  }
})();
