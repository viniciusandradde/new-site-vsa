# VSA Tecnologia — Site institucional (onepage)

Onepage estática (HTML + CSS + JS puro) para rodar no **Cloudflare Pages**.
Sem build, sem backend. Contato via WhatsApp.

## Estrutura

```
.
├── index.html              # toda a página
├── assets/
│   ├── css/styles.css      # design system + layout
│   ├── js/main.js          # interações (menu, filtro, WhatsApp, scrollspy)
│   └── img/og-cover.svg    # imagem de compartilhamento
├── favicon.svg
├── robots.txt · sitemap.xml
├── _headers · _redirects   # config do Cloudflare Pages
└── README.md
```

## Rodar localmente

Qualquer servidor estático serve. Exemplos:

```bash
# Python
python3 -m http.server 8000

# ou Node
npx serve .
```

Abra http://localhost:8000

## ⚙️ Configurar o WhatsApp

Edite a constante no topo de `assets/js/main.js`:

```js
var WHATS_NUMERO = "5511955555555"; // 55 + DDD + número (só dígitos)
```

Todos os botões "Solicitar Orçamento", o botão flutuante e o formulário usam esse número.

## Deploy no Cloudflare Pages

### Opção A — Direct Upload (Wrangler)

```bash
npm i -g wrangler          # ou: npx wrangler
wrangler login
wrangler pages deploy . --project-name vsa-tecnologia
```

Saída: uma URL `*.pages.dev` para preview/produção.

### Opção B — Git (deploy automático)

1. Suba este diretório para um repositório no GitHub.
2. No painel da Cloudflare → **Workers & Pages → Create → Pages → Connect to Git**.
3. Configurações de build:
   - **Framework preset:** None
   - **Build command:** *(vazio)*
   - **Build output directory:** `/`
4. Cada `git push` na branch de produção publica automaticamente.

## Domínio próprio

No projeto Pages → **Custom domains** → adicione `vsatecnologia.com.br`.
Se o DNS já está na Cloudflare, o registro é criado automaticamente.

## Checklist pós-deploy

- [ ] Trocar `WHATS_NUMERO` pelo número real
- [ ] Conferir telefones/e-mails/endereço na seção Contato e no rodapé
- [ ] Substituir os textos placeholder do Portfólio e do Blog (opcional)
- [ ] Validar OG/preview ao compartilhar o link
- [ ] Rodar Lighthouse (meta: 90+ em todas as categorias)
