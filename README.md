# 🌐 Portfólio – Natalvides Neto

Portfólio profissional desenvolvido com foco em **engenharia de software front-end moderna**, utilizando Vite, JavaScript modular, Bootstrap e boas práticas de versionamento.

---

## 🚀 Tecnologias

* HTML5
* CSS3
* JavaScript (ES Modules)
* Vite
* Bootstrap 5 (via npm)
* normalize.css
* ESLint + Prettier
* Git + Conventional Commits

---

## 📁 Estrutura do Projeto

```txt
assets/         # Imagens, ícones e mídia
css/            # Estilos globais
js/
  ├─ modules/   # Módulos JS (navbar, animações, whatsapp, etc.)
  └─ main.js    # Entry point do Vite
docs/           # Documentação técnica
dist/           # Build final (gerado pelo Vite)
index.html
eslint.config.mjs
package.json
```

---

## 🧠 Objetivo

Criar um portfólio profissional com:

• Código modular
• Build otimizado com Vite
• Integração com Bootstrap via npm
• Padrões reais de engenharia de software

---

## ⚙️ Scripts

```bash
npm run dev     # Ambiente de desenvolvimento
npm run build   # Build para produção
npm run preview # Preview do build
npm run lint    # Lint com ESLint
```

---

## 🔐 Variáveis de Ambiente

O projeto utiliza variáveis via Vite:

Crie um arquivo `.env` na raiz:

```env
VITE_SITE_NAME=Portfólio Natalvides Neto
VITE_WHATSAPP_NUMBER=SEU_NUMERO_AQUI
```

⚠️ O arquivo `.env` está no `.gitignore` e **não é versionado**.

---

## 🧩 Arquitetura

• JavaScript modular (`js/modules`)
• Sem scripts inline no HTML
• CSS carregado via pipeline do Vite
• Bootstrap integrado via npm

---

## 📌 Status

✅ Primeira versão estável em desenvolvimento estruturado
🚀 Rumo ao deploy e CI/CD

---

## 👨‍💻 Autor

**Natalvides Neto**:
Engenheiro de Software

