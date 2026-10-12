# ADR-001 — Evolução incremental do site institucional da VSA Tecnologia

- **Status:** Aprovado para implementação incremental
- **Data:** 2026-10-12
- **Responsável:** VSA Tecnologia
- **Escopo:** Site institucional em HTML, CSS e JavaScript estáticos, hospedado ou planejado para Cloudflare Pages

## Contexto

O site atual é uma página institucional estática, sem etapa de build e sem backend próprio. O contato comercial é direcionado ao WhatsApp. Já existem fundamentos de SEO (metadados, canonical, Open Graph, dados estruturados, `robots.txt` e sitemap), configurações de segurança/cache para Cloudflare Pages e interações implementadas em JavaScript.

O objetivo é melhorar a geração de oportunidades comerciais, a clareza do posicionamento, a descoberta orgânica e a confiança, mantendo baixo custo operacional e evitando uma migração tecnológica desnecessária.

## Decisão

Manter HTML, CSS e JavaScript puros como arquitetura padrão no curto prazo e executar melhorias pequenas, verificáveis e reversíveis. Não migrar para Next.js ou outro framework até existir requisito concreto que justifique build, renderização dinâmica ou aplicação autenticada.

## Princípios e decisões

1. **Precisão factual:** não publicar tempo de mercado, clientes, resultados, certificações, conformidade ou garantias sem evidência verificável.
2. **Conversão:** manter WhatsApp como CTA principal inicialmente; revisar mensagens, contatos e caminhos do formulário e medir cliques sem coletar dados desnecessários.
3. **SEO:** preservar title, description, canonical, Open Graph, dados estruturados, sitemap e robots; ampliar para páginas específicas somente quando houver conteúdo original suficiente para cada solução.
4. **Conteúdo e produtos:** apresentar apenas serviços e produtos disponíveis ou claramente identificados como em desenvolvimento. Publicar cases e depoimentos apenas com autorização e evidências.
5. **Segurança e privacidade:** minimizar scripts de terceiros, não inserir segredos no frontend, revisar afirmações relacionadas à LGPD e documentar finalidade/consentimento para ferramentas de analytics e formulários.
6. **Acessibilidade e desempenho:** validar navegação por teclado, foco visível, contraste, texto alternativo, responsividade, carregamento de fontes/imagens e métricas Lighthouse.
7. **Mudanças controladas:** implementar em branch, revisar diff e validações antes de integrar à branch de produção. Confirmar o provedor e o resultado do deploy; não presumir que um workflow exista.

## Plano de execução priorizado

### P0 — Correção e confiabilidade

- Remover ou comprovar afirmações factuais não verificadas, começando pela frase “Há 12 anos”.
- Validar WhatsApp, telefone, e-mail, endereço e links externos.
- Revisar textos sobre segurança, IA e LGPD para evitar promessas absolutas.
- Verificar semântica HTML, acessibilidade básica, links quebrados e visual mobile.

### P1 — Conversão e posicionamento

- Explicar com clareza problema atendido, público-alvo, entregáveis e próximo passo.
- Diferenciar serviços de consultoria, automação/IA e soluções próprias.
- Garantir que todos os CTAs tenham destino válido e mensagens coerentes.
- Não inventar preços, clientes, métricas ou estudos de caso.

### P2 — SEO sustentável

- Criar páginas próprias para serviços prioritários apenas quando houver conteúdo específico e útil.
- Atualizar sitemap e links internos quando novas URLs forem publicadas.
- Validar canonical, metadados sociais, dados estruturados e indexação após o deploy.

### P3 — Captação e mensuração

- Avaliar materiais ricos (checklists, guias e diagnósticos) com proposta de valor definida.
- Se houver captura de e-mail, definir aviso de privacidade, finalidade, retenção e mecanismo de descadastro.
- Implementar analytics com minimização de dados e configuração compatível com a política de privacidade.
- Integrar CRM/automação apenas após definir processo de atendimento, responsável e consentimentos aplicáveis.

### P4 — Reavaliação arquitetural

Reavaliar framework, backend ou CMS somente se forem necessários recursos como conteúdo editorial frequente, autenticação, áreas restritas, integrações transacionais ou gestão de conteúdo por equipe não técnica.

## Deploy e automação

O README descreve Cloudflare Pages com integração Git ou Direct Upload. Na inspeção desta mudança, não foram encontrados os arquivos comuns `.github/workflows/deploy.yml`, `.github/workflows/deploy.yaml`, `.github/workflows/pages.yml` ou `.github/workflows/pages.yaml`. Isso não prova que não exista outro workflow ou integração de deploy fora desses caminhos.

Até confirmar a configuração ativa, a estratégia é preparar mudanças em branch e pull request, validar o conteúdo e só integrar à branch de produção após revisão. Não armazenar tokens de Cloudflare no código; se GitHub Actions for usado para deploy, usar secrets com privilégio mínimo.

## Critérios de aceite

- Nenhuma alegação factual sem validação ou evidência.
- Links, CTA de WhatsApp e formulário verificados.
- HTML, CSS e JavaScript revisados e sem erros introduzidos.
- Layout validado em viewport mobile e desktop.
- SEO técnico preservado e sitemap atualizado quando necessário.
- Diff revisado antes de merge.
- Deploy confirmado no provedor real e página de produção verificada depois da publicação.

## Consequências

**Benefícios:** menor risco de regressão, custo baixo, evolução rápida, conteúdo mais confiável e foco em conversão.

**Limitações:** páginas estáticas não oferecem gestão editorial, persistência de leads ou fluxos autenticados sem serviços adicionais. A mensuração e captação precisam respeitar privacidade e requerem configuração deliberada.

## Alternativas consideradas

- **Migração imediata para Next.js:** rejeitada por adicionar complexidade sem requisito atual demonstrado.
- **Adicionar backend próprio imediatamente:** rejeitada até haver requisitos claros de persistência, integração e governança dos leads.
- **Publicar todas as alterações diretamente em produção:** rejeitada como padrão por dificultar revisão e rollback.
