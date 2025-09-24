# Fort Blocos — Site

Site institucional simples para a fábrica de blocos. Construído em HTML, CSS e JavaScript puro, focado em rapidez e facilidade de manutenção.

## Estrutura

```
.
├─ index.html        # Página inicial
├─ produtos.html     # Lista de produtos
├─ sobre.html        # Sobre a empresa
├─ contato.html      # Formulário de contato (demo)
└─ assets/
	├─ css/styles.css
	├─ js/main.js
	└─ img/
```

## Como editar

- Abra os arquivos `.html` no VS Code e edite o conteúdo das seções.
- Ajuste estilos em `assets/css/styles.css`.
- A navegação mobile e o ano do rodapé estão em `assets/js/main.js`.

## Visualizar localmente

- Clique duas vezes em `index.html` (ou `start index.html` no Windows) para abrir no navegador.
- Para um preview com live reload, você pode usar a extensão "Live Server" do VS Code.

## Publicação (GitHub Pages)

1. No GitHub, acesse Settings → Pages.
2. Em "Source", selecione a branch `main` e a pasta `/root` (ou `docs` se você preferir mover os arquivos).
3. Salve; aguarde a geração e acesse a URL indicada.

## Git

Exemplos úteis:

```bash
git status
git add .
git commit -m "feat: minha alteração"
git push
```

---

© Fort Blocos. Todos os direitos reservados.