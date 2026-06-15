# PRD — Clone Onepage VSA Tecnologia (Cloudflare Pages)

## Contexto

A VSA Tecnologia tem hoje um site institucional hospedado no Lovable
(`https://vsa-tech-portal-nexus.lovable.app/`), uma SPA React de várias seções.
O objetivo é recriar esse site como uma **onepage estática** (HTML/CSS/JS puro),
com design próprio mais limpo e polido (não pixel-perfect), e colocá-lo para
**rodar na Cloudflare (Cloudflare Pages)**. Sem dependência do Lovable, build
trivial, carregamento rápido e custo praticamente zero.

Decisões já validadas com o cliente:
- **Fidelidade visual:** inspirado/limpo (mantém conteúdo e estrutura, visual próprio).
- **Stack:** HTML + CSS + JS estático, servido pelo Cloudflare Pages.
- **Contato:** botão/link de WhatsApp (sem backend).
- **Blog/Portfólio:** placeholders estáticos no código.

## Objetivos

1. Reproduzir o conteúdo e a estrutura do site atual em uma única página com
   navegação por âncoras (scroll suave).
2. Visual moderno, responsivo (mobile-first) e acessível.
3. Deploy na Cloudflare Pages com domínio configurável.
4. Zero backend: contato resolvido via WhatsApp.

## Não-objetivos (YAGNI)

- Sem CMS, sem painel administrativo.
- Sem backend de e-mail/formulário (fica para fase futura, se necessário).
- Sem blog dinâmico / posts reais (apenas cards de exemplo estáticos).
- Sem multi-idioma (apenas pt-BR).
- Sem framework (React/Astro) — HTML estático puro.

## Estrutura da Onepage (ordem das seções)

Navegação fixa no topo com links-âncora: Início · Sobre · Serviços · Portfólio ·
Planos · Blog · Contato.

1. **Header / Navbar** — logo "VSA Tecnologia", menu âncora, botão CTA "Solicitar
   Orçamento" (link WhatsApp). Menu hambúrguer no mobile.
2. **Hero (#inicio)** — título "Transformação Digital para seu Negócio",
   subtítulo, dois CTAs: "Solicitar Orçamento" (WhatsApp) e "Nossos Serviços"
   (âncora #servicos).
3. **Sobre (#sobre)** — texto institucional (10+ anos), bullets de diferenciais
   e métricas em destaque: 500+ projetos, 200+ clientes, 12 anos, 50+ especialistas.
4. **Serviços (#servicos)** — grid de 8 cards com ícone, título e descrição:
   Desenvolvimento Web, Sistemas ERP, Segurança da Informação, Infraestrutura de
   TI, Desenvolvimento de Software, Cloud Computing, Business Intelligence,
   Suporte Técnico 24/7.
5. **Portfólio (#portfolio)** — filtros (Todos, Web, ERP, Cloud, Apps, Security)
   + grid de cards de projeto (placeholders estáticos, filtragem via JS simples).
6. **Planos (#planos)** — bloco de pacotes personalizáveis com CTA "Solicitar
   orçamento personalizado" (WhatsApp).
7. **Blog (#blog)** — 3 cards de artigos (IA, cibersegurança, migração cloud)
   com autor e data (placeholders estáticos).
8. **Contato (#contato)** — dados da empresa (endereço, telefones, e-mails,
   horário) + bloco de CTA com botão grande de WhatsApp. (Sem formulário com
   backend; opcionalmente um form visual que monta a mensagem e abre o WhatsApp.)
9. **Footer** — links rápidos, resumo de serviços, contato, redes sociais e
   copyright.
10. **Botão flutuante de WhatsApp** — fixo no canto inferior direito, presente em
    toda a página.

## Arquitetura de arquivos

```
institucional/
├── index.html              # toda a onepage (semântico, seções com id)
├── assets/
│   ├── css/
│   │   └── styles.css      # design system + layout + responsivo
│   ├── js/
│   │   └── main.js         # menu mobile, scroll suave, filtro portfólio, WhatsApp
│   └── img/                # logo, ícones, imagens (svg/webp otimizados)
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── _headers                # headers de segurança/cache (Cloudflare Pages)
├── _redirects              # redirects (Cloudflare Pages), se necessário
└── README.md               # como rodar local e como dar deploy
```

## Design system (visual limpo)

- **Paleta:** base azul-tech (primário ~#1E40AF/#2563EB), apoio ciano, neutros
  em cinza, fundo claro com seções alternadas; opção de acento escuro no hero.
- **Tipografia:** uma fonte sem-serifa do Google Fonts (ex.: Inter ou Poppins)
  para títulos e corpo.
- **Componentes:** botões (primário/secundário), cards com hover sutil, grid
  responsivo, badges/métricas, ícones (SVG inline ou biblioteca leve tipo
  Lucide/Font Awesome via CDN).
- **Responsividade:** mobile-first, breakpoints para tablet e desktop.
- **Microinterações:** scroll suave, fade-in leve ao rolar (IntersectionObserver),
  navbar com sombra ao rolar.

## Integração WhatsApp

- Número configurável em uma constante no `main.js` (ex.: `WHATS_NUMERO`).
- Todos os CTAs ("Solicitar Orçamento", "Solicitar orçamento personalizado",
  botão flutuante) usam `https://wa.me/55XXXXXXXXXXX?text=<mensagem pré-preenchida>`.
- **Pendência:** confirmar o número de WhatsApp real (o site atual usa telefones
  placeholder 11 5555-5555). Até a confirmação, fica um número placeholder claro.

## Performance, SEO e acessibilidade

- HTML semântico, headings em ordem, `alt` em imagens, labels/aria onde aplicável.
- Meta tags SEO + Open Graph + Twitter Card; `title` e `description` próprios.
- `sitemap.xml`, `robots.txt`, dados estruturados JSON-LD (`Organization`/`LocalBusiness`).
- Imagens em WebP/SVG, lazy-loading; CSS/JS minificáveis; fontes com `display=swap`.
- Meta: Lighthouse 90+ em Performance, SEO, Best Practices e Accessibility.

## Deploy na Cloudflare Pages

- Projeto estático: **sem build step** (ou build "none", output = raiz).
- Duas opções de deploy:
  1. **Git connect:** subir repo no GitHub e conectar ao Cloudflare Pages
     (deploy automático a cada push).
  2. **Wrangler/Direct Upload:** `npx wrangler pages deploy .` para subir a pasta.
- `_headers` com cache de assets (`/assets/*` immutable) e headers de segurança
  (X-Content-Type-Options, Referrer-Policy, etc.).
- Domínio: usar `*.pages.dev` inicialmente e depois apontar o domínio custom
  (ex.: vsatecnologia.com.br) via DNS da Cloudflare.

## Pendências a confirmar antes/durante a implementação

1. Número real de WhatsApp para os CTAs.
2. Logo/identidade visual oficial (arquivo) — ou gero um logotipo textual.
3. Confirmar se o formulário de contato deve abrir o WhatsApp com a mensagem
   montada, ou se basta o botão direto de WhatsApp.
4. Domínio custom já está na Cloudflare? (define passo de DNS).

## Plano de implementação (fases)

1. **Esqueleto** — `index.html` com todas as seções/âncoras + reset/base CSS.
2. **Design system** — variáveis CSS, tipografia, botões, navbar (com menu mobile).
3. **Seções** — Hero, Sobre (métricas), Serviços (grid), Portfólio (filtro JS),
   Planos, Blog, Contato, Footer.
4. **Interações JS** — scroll suave, fade-in, filtro de portfólio, botão e links
   WhatsApp, navbar sticky.
5. **SEO/assets** — meta tags, OG, favicon, sitemap, robots, JSON-LD, otimização
   de imagens.
6. **Cloudflare** — `_headers`, `_redirects`, `README` com instruções de deploy
   (Wrangler e Git connect).
7. **QA** — teste responsivo (mobile/tablet/desktop), checagem de links/âncoras,
   Lighthouse.

## Verificação (como testar de ponta a ponta)

- Rodar local: `python3 -m http.server` na pasta e abrir `http://localhost:8000`.
- Conferir: navegação por âncoras, menu mobile, filtro de portfólio, e que todos
  os botões de WhatsApp abrem `wa.me` com a mensagem correta.
- Responsividade nos 3 breakpoints; sem erros no console.
- Lighthouse ≥ 90 nas 4 categorias.
- Deploy de preview no Cloudflare Pages (`wrangler pages deploy .`) e validação
  da URL `*.pages.dev`.

## Entregável de documentação

Após aprovação, replicar esta PRD em
`docs/superpowers/specs/2026-06-15-clone-onepage-vsa-cloudflare-design.md`
dentro do projeto e versionar.
