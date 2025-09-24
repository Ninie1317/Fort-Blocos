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

  // Tabs de produtos
  const tabsRoot = document.querySelector('[data-tabs]');
  if (tabsRoot) {
    const tabs = Array.from(tabsRoot.querySelectorAll('.tab'));
    const panels = Array.from(tabsRoot.querySelectorAll('.tab-panel'));
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const id = tab.getAttribute('data-tab');
        tabs.forEach(t => t.classList.toggle('active', t === tab));
        panels.forEach(p => p.classList.toggle('show', p.getAttribute('data-panel') === id));
      });
    });
  }

  // Smooth scroll para links internos com #
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  // Calculadora de orçamento
  const calcForm = document.getElementById('calcForm');
  if (calcForm) {
    const elQtd = document.getElementById('qtd');
    const elSubtotal = document.getElementById('subtotal');
    const box = document.getElementById('resultado');
    const btnWhats = document.getElementById('btnWhats');
    calcForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(calcForm).entries());
      const area = parseFloat(String(data.area).replace(',', '.')) || 0;
      const preco = parseFloat(String(data.preco).replace(',', '.')) || 0;
      const rendimento = parseFloat(String(data.rendimento).replace(',', '.')) || 1;
      const qtd = Math.ceil(area * rendimento);
      const subtotal = (qtd * preco);
      elQtd.textContent = String(qtd);
      elSubtotal.textContent = subtotal.toFixed(2).replace('.', ',');
      box.hidden = false;
      const msg = encodeURIComponent(
        `Olá, gostaria de um orçamento:\nProduto: ${data.produto}\nÁrea: ${area} m²\nRendimento: ${rendimento} peças/m²\nQtd. estimada: ${qtd} peças\nSubtotal: R$ ${subtotal.toFixed(2)}`
      );
      btnWhats.href = `https://wa.me/5519988018316?text=${msg}`;
    });
  }
})();
