# 🔐 Variáveis de Ambiente

Este projeto usa variáveis via Vite.

## 📄 Arquivo

Crie `.env` na raiz:

```env
VITE_SITE_NAME=Portfólio Natalvides Neto
VITE_WHATSAPP_NUMBER=+5594992725562
```

## 📌 Regras

• Prefixo obrigatório: `VITE_`
• Nunca versionar `.env`
• Usar via `import.meta.env`

Exemplo:

```js
const numero = import.meta.env.VITE_WHATSAPP_NUMBER;
```
