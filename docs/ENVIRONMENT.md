# 🔐 Variáveis de Ambiente

Este projeto utiliza variáveis de ambiente via Vite para configurações sensíveis e personalizáveis.

---

## 📄 Arquivo `.env`

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_SITE_NAME=Portfólio Natalvides Neto
VITE_WHATSAPP_NUMBER=SEU_NUMERO_AQUI
```

👉 **Nunca coloque dados reais em documentação pública.**
Use sempre valores de exemplo ou placeholders.

---

## 📌 Regras

• Prefixo obrigatório: `VITE_`
• Nunca versionar o arquivo `.env`
• Usar no código via `import.meta.env`

---

## 🧪 Exemplo de uso no código

```js
const numero = import.meta.env.VITE_WHATSAPP_NUMBER;

if (!numero) {
  console.error('VITE_WHATSAPP_NUMBER não definido no .env');
}
```

---

## 🔒 Boas práticas

✔️ `.env` deve estar no `.gitignore`
✔️ Nunca commitar segredos
✔️ Usar exemplos genéricos na documentação
✔️ Valores reais só no ambiente local ou CI/CD
