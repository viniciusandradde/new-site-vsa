# Avaliação e proposta de evolução digital — VSA Tecnologia

- **Data:** 12/10/2026
- **Versão:** 1.0 — proposta para validação comercial
- **Site atual:** https://vsatecnologia.com.br/
- **Repositório:** https://github.com/viniciusandradde/new-site-vsa
- **Hospedagem:** Cloudflare Pages
- **Natureza deste documento:** diagnóstico do código do repositório e proposta preliminar. Valores, prazos e disponibilidade de produtos dependem de validação comercial.

## 1. Resumo executivo

O site atual é uma landing page estática em HTML, CSS e JavaScript puro, hospedada/planejada para Cloudflare Pages. É leve, tem identidade visual consistente, chamadas para WhatsApp, seção de planos, FAQ e dados básicos de SEO. Porém, funciona principalmente como cartão institucional: não possui estrutura editorial de blog, páginas individuais de produtos, captura persistente de leads, envio de e-mail ou automações de nutrição. O formulário de contato apenas prepara uma mensagem e abre o WhatsApp; não registra o lead em uma base própria.

A recomendação é evoluir o site em etapas, sem interromper a presença atual e sem introduzir um backend completo antes de validar a operação comercial. A nova estrutura deve conectar conteúdo útil, materiais ricos, formulários, e-mail e WhatsApp a um processo de qualificação e acompanhamento de oportunidades.

**Objetivo de negócio:** transformar o site em um canal mensurável de aquisição e qualificação de oportunidades para serviços e produtos da VSA Tecnologia.

## 2. Diagnóstico do estado atual

### 2.1 Pontos positivos

- Site estático com baixo custo operacional e sem etapa de build.
- Identidade visual alinhada à marca, responsividade e navegação mobile.
- CTA de WhatsApp centralizado em JavaScript.
- Página inicial com apresentação, serviços, planos, FAQ e contato.
- Metadados básicos, canonical, Open Graph/dados estruturados, robots.txt e sitemap.
- Cabeçalhos HTTP de segurança e cache definidos para Cloudflare Pages.
- Política de privacidade e termos de uso já existem como páginas separadas.
- Alterações recentes removeram da página inicial os serviços não desejados, mantendo Agentes de IA, Automação de Processos e BI & Analytics com IA.

### 2.2 Lacunas prioritárias

1. **Site concentrado em uma página:** conteúdo comercial e SEO ficam limitados; não há URLs próprias para soluções, produtos e artigos.
2. **Produtos sem páginas dedicadas:** falta explicar problema, público, recursos, implantação, diferenciais, demonstração e CTA de cada produto.
3. **Blog ausente:** não há fluxo editorial nem páginas de artigos para atrair buscas orgânicas.
4. **Captura de leads ausente:** formulário atual exige nome e mensagem, mas só abre o WhatsApp; não persiste nome, empresa, e-mail, origem ou consentimento.
5. **E-mail ausente:** não há confirmação de entrega do material, sequência de nutrição ou newsletter configurada no código atual.
6. **Mensuração insuficiente:** não foi identificada instrumentação de analytics/conversão no JavaScript inspecionado. Confirmar no painel se há ferramentas instaladas externamente.
7. **SEO limitado à home e páginas legais:** o sitemap atual lista apenas a página inicial, política de privacidade e termos de uso.
8. **Portfólio e conteúdo:** o JavaScript contém lógica para filtro de portfólio, mas a versão inspecionada da página não apresenta seção editorial/portfólio correspondente; revisar e remover código obsoleto ou restaurar a seção com cases reais.
9. **Oferta e posicionamento:** os planos “Essencial”, “Profissional” e “Enterprise” são genéricos e devem explicar entregáveis, perfil ideal e próximo passo. Não publicar promessas, preços, clientes ou resultados sem validação.
10. **Privacidade e governança:** qualquer captura de e-mail exige finalidade clara, aviso de privacidade, base legal definida, retenção, controle de acesso e descadastro quando aplicável.

## 3. Posicionamento e arquitetura recomendados

Manter a VSA Tecnologia como parceira de tecnologia e inovação aplicada aos negócios. Apresentar primeiro a experiência e o conhecimento do especialista e da empresa, depois educar/diagnosticar e só então apresentar a oferta específica. Priorizar linguagem concreta e casos reais sanitizados, evitando catálogo genérico de tecnologias.

### Mapa do site proposto

- **Início** — proposta de valor, soluções prioritárias, prova de competência, CTA para diagnóstico.
- **Soluções**
  - Agentes de IA e assistentes
  - Automação de processos
  - BI & Analytics
  - Consultoria/implantação conforme ofertas que a VSA confirmar que deseja vender
- **Produtos**
  - ChatNexus — página comercial somente com funcionalidades e disponibilidade confirmadas.
  - VSA Analytics Health — foco em indicadores e análise de dados hospitalares, sujeito à validação de maturidade e demonstração.
  - VSA Nexus AI — apresentar capacidades comprovadas e limites do produto.
  - VSA TechClub — formação e conteúdos, com calendário, público, programa e modalidade reais.
- **Conteúdos** — blog, guias, checklists, estudos de caso e materiais ricos.
- **Sobre** — história validada, método, especialização e equipe.
- **Contato / Diagnóstico** — formulário de qualificação e alternativa de WhatsApp.
- **Páginas legais** — privacidade, cookies/tecnologias de rastreamento se aplicável, e termos.

**Regra de publicação:** produto em desenvolvimento deve ser identificado como tal ou ficar fora do menu comercial até existir proposta, disponibilidade, responsável pelo atendimento e CTA reais.

## 4. Modelo de página de produto

Cada página deve conter:

1. Nome e frase de valor orientada ao problema do cliente.
2. Para quem é e em quais cenários se aplica.
3. Problemas e tarefas que resolve.
4. Benefícios e funcionalidades comprováveis.
5. Como funciona e como é implantado.
6. Integrações, segurança, privacidade e limitações relevantes.
7. Demonstração, imagens ou vídeo reais do produto.
8. Perguntas frequentes.
9. CTA principal: solicitar demonstração/diagnóstico.
10. Formulário com campos mínimos e consentimentos aplicáveis.
11. SEO próprio: title, description, canonical, Open Graph e dados estruturados adequados.

Não afirmar certificações, conformidade integral com a LGPD, disponibilidade 24/7, economia garantida ou integrações não comprovadas sem evidências.

## 5. Blog e estratégia editorial

### Categorias iniciais

- Inteligência Artificial aplicada aos negócios
- Automação e produtividade
- Dados, BI e indicadores
- Segurança, LGPD e continuidade
- Tecnologia para hospitais, quando o artigo tiver conhecimento prático e público definido
- Bastidores técnicos e estudos de caso sanitizados

### Cadência inicial sustentável

- 2 artigos originais por mês.
- 2–3 publicações semanais no LinkedIn derivadas de artigos, projetos e aprendizados.
- 1 newsletter por mês para contatos que tenham optado por recebê-la.
- 1 material rico por mês ou por campanha, priorizando qualidade e utilidade.

### Processo de produção

Projeto real → anonimização de nomes, dados e arquitetura sensível → artigo com problema, abordagem e aprendizado → publicação social → checklist/guia relacionado → CTA de diagnóstico. Cada publicação deve ter autor, data, links internos, fontes quando aplicável e chamada para ação. Não divulgar informações confidenciais de clientes ou ambientes hospitalares.

## 6. Iscas digitais propostas

Priorizar materiais de produção enxuta e alto valor prático, alinhados aos serviços e à experiência da VSA:

1. **Checklist: 15 pontos para avaliar a segurança e a continuidade da TI de uma empresa.**
2. **Guia rápido: primeiros passos para mapear riscos de LGPD sem prometer conformidade automática.**
3. **Checklist de prontidão para automação com IA:** processo, dados, risco, integração, responsável e métricas.
4. **Planilha de indicadores de TI:** disponibilidade, incidentes, tempo de atendimento, backup e capacidade.
5. **Guia de indicadores para gestão hospitalar:** publicar apenas após revisão de especialista e validação das definições.
6. **Diagnóstico inicial de maturidade digital:** formulário de autoavaliação que termina com recomendações educativas, não com alegações de auditoria/certificação.

Cada material deve ter landing page, formulário enxuto, política de privacidade visível, entrega por e-mail e CTA para uma conversa de diagnóstico. Não pedir CPF, dados sensíveis ou informações de pacientes.

## 7. Captura de leads e e-mail

### Fluxo sugerido

1. Visitante acessa artigo, página de produto ou landing page.
2. Preenche nome, e-mail profissional, empresa e interesse; telefone é opcional quando não for necessário.
3. O formulário apresenta finalidade e link para privacidade, registra data/hora, origem e escolha de consentimento quando aplicável.
4. Backend/endpoint valida e registra o lead de forma segura.
5. O sistema envia e-mail transacional com o material solicitado.
6. O lead entra em uma lista/segmento coerente com o interesse e com a permissão recebida.
7. Sequência educativa oferece conteúdo complementar e, ao final, convite para diagnóstico.
8. Oportunidade qualificada é encaminhada para atendimento comercial, com origem e interesse preservados.
9. O contato pode cancelar comunicações e solicitar atendimento sobre seus dados.

### Sequência inicial de e-mails

- **E-mail 1 — imediato:** entrega do material e instruções de uso.
- **E-mail 2 — após 2 dias:** dica prática relacionada ao problema.
- **E-mail 3 — após 5 dias:** checklist ou exemplo de aplicação.
- **E-mail 4 — após 8 dias:** convite opcional para diagnóstico ou demonstração.
- **Newsletter mensal:** apenas para pessoas elegíveis para esse envio e com descadastro funcional.

Os intervalos acima são uma hipótese inicial a testar. Evitar enviar e-mail promocional sem base legal/expectativa apropriada; registrar preferências e descadastro. Não importar listas compradas nem coletar e-mails indiscriminadamente.

### Arquitetura técnica recomendada

- **Frontend:** manter Cloudflare Pages e o site estático durante a primeira fase.
- **Endpoint de formulário:** Cloudflare Worker ou serviço backend mínimo, com validação, rate limiting, proteção contra spam e logs sem excesso de dados.
- **E-mail:** Resend ou provedor equivalente, com domínio autenticado por SPF, DKIM e DMARC.
- **Armazenamento:** escolher CRM/lista com controle de acesso e política de retenção; não armazenar segredos no JavaScript do navegador.
- **Automação:** n8n pode orquestrar segmentação, notificações e CRM após validar o fluxo básico.
- **WhatsApp:** manter como canal alternativo e comercial; registrar a origem da conversa quando viável e permitido.
- **Analytics:** medir visualização de páginas, origem, envio de formulário, download e clique em CTA com configuração de privacidade apropriada.

A ferramenta de e-mail e o CRM final devem ser escolhidos antes da implementação. Resend é uma opção para envio; sozinho, não substitui CRM, consentimento, gestão de preferências e acompanhamento comercial.

## 8. Métricas e critérios de sucesso

Instrumentar antes de campanhas para estabelecer baseline. Indicadores recomendados:

- visitas orgânicas e sessões por página;
- cliques em CTA por produto/serviço;
- taxa de conversão da landing page;
- formulários iniciados e concluídos;
- entrega, bounce, descadastro e reclamações de e-mail;
- leads por origem e interesse;
- leads qualificados e reuniões agendadas;
- propostas emitidas, vendas e receita atribuída quando houver dados confiáveis.

Metas numéricas devem ser definidas depois de obter o baseline de 30 dias, volume de tráfego e capacidade de atendimento. Não prometer resultados antes desses dados.

## 9. Plano de execução

### Fase 0 — Descoberta e validação (1 semana)

- Confirmar público prioritário, serviços e produtos que realmente serão comercializados.
- Confirmar disponibilidade, funcionalidades, demonstrações, preços/modelo comercial e responsável por cada produto.
- Escolher provedor de e-mail, CRM/lista, política de consentimento e atendimento dos leads.
- Registrar métricas de base e validar domínio/DNS.

**Entrega:** mapa de páginas, ofertas priorizadas, especificação dos formulários e plano de medição.

### Fase 1 — Fundamentos e conversão (1–2 semanas)

- Revisar home, CTAs, navegação, planos, formulário e mensagens.
- Implementar analytics de conversão com privacidade adequada.
- Criar modelo reutilizável de landing page.
- Configurar endpoint seguro, entrega do primeiro material e autenticação de e-mail.

**Entrega:** fluxo funcional de captação e entrega de material, testado de ponta a ponta.

### Fase 2 — Páginas de produtos (2–3 semanas)

- Construir até 3 páginas de produto, conforme prioridade e maturidade.
- Criar screenshots/demonstrações reais, FAQs e CTAs.
- SEO técnico e inclusão das URLs no sitemap.

**Entrega:** páginas de produto publicadas e verificadas.

### Fase 3 — Blog e iscas (2–3 semanas)

- Estruturar blog, categorias, artigo modelo e navegação.
- Produzir 2 artigos iniciais e até 2 materiais ricos.
- Criar landing pages, e-mails de entrega e sequência educativa inicial.

**Entrega:** primeiro ciclo de conteúdo e nutrição pronto para uso.

### Fase 4 — Automação e otimização (contínua)

- Integração com CRM/n8n, classificação de leads e notificações.
- Testes A/B de CTA e formulários quando houver volume suficiente.
- Revisão mensal de métricas e backlog.

**Entrega:** processo comercial mensurável e evolução contínua.

Os prazos são estimativas para planejamento, não compromissos contratuais; dependem de feedback, aprovação de conteúdo, acesso a serviços externos e maturidade dos produtos.

## 10. Estimativa preliminar de investimento

Valores indicativos para construir uma proposta comercial; não são cotação fechada e devem ser ajustados ao escopo final.

| Pacote | Escopo | Estimativa |
|---|---|---:|
| **Base de conversão** | Revisão da home/CTAs, 1 landing page, formulário com registro seguro, e-mail de entrega, analytics básico e testes | R$ 3.500–6.000 |
| **Aquisição digital** | Base de conversão + até 3 páginas de produtos, estrutura de blog, 2 artigos e até 2 iscas digitais | R$ 7.500–12.000 |
| **Growth integrado** | Aquisição digital + sequência de e-mails, integração com CRM/n8n, segmentação, notificações e dashboard inicial | R$ 12.000–20.000 |

**Custos recorrentes externos:** domínio/hospedagem (conforme plano e uso), provedor de e-mail, CRM, automação, analytics ou ferramentas pagas. Devem ser apresentados separadamente e confirmados no momento da contratação.

**Manutenção opcional:** estimar após definir frequência de conteúdo, volume de leads, SLA e responsabilidades; não incluir valor mensal fechado sem esses requisitos.

### Premissas da estimativa

- Site institucional existente e repositório acessível.
- Identidade visual mantida e componentes reaproveitados.
- Até 3 páginas de produtos nesta primeira entrega.
- Cliente fornece acessos, aprova conteúdo e confirma informações comerciais.
- Não inclui redesign completo de marca, desenvolvimento das aplicações SaaS, integração complexa com sistemas de clientes, produção de vídeo profissional, tráfego pago ou assessoria jurídica.
- Os materiais e artigos incluídos são entregas editoriais iniciais; volume adicional é orçado separadamente.

## 11. Riscos e dependências

- **Produtos ainda não validados comercialmente:** não anunciar funcionalidades ou disponibilidade sem aprovação.
- **Falta de prova social:** usar casos anonimizados e autorizados; não inventar depoimentos.
- **Entrega de e-mail:** exige DNS correto, reputação de domínio, monitoramento de bounce e descadastro.
- **Privacidade:** requer definir finalidades, base legal, retenção, operadores e atendimento aos titulares.
- **Baixo volume inicial:** não estabelecer metas de conversão agressivas sem baseline.
- **Escopo crescente:** aprovar páginas, integrações, revisões e materiais incluídos antes do início.
- **Deploy:** validar preview, links, mobile e formulários antes de promover à produção pelo fluxo do Cloudflare Pages.

## 12. Critérios de aceite

- Todas as URLs e CTAs funcionam em mobile e desktop.
- Formulários têm validação, proteção contra spam e tratamento de erros.
- Leads de teste são registrados com origem e interesse, sem dados excessivos.
- E-mail de entrega chega em caixas de teste e o descadastro funciona nas campanhas aplicáveis.
- SPF/DKIM/DMARC e remetente são validados no provedor escolhido.
- Páginas têm metadados únicos, canonical, links internos e sitemap atualizado.
- Política de privacidade reflete os fluxos de dados reais e é aprovada pelo responsável.
- Não há credenciais ou chaves secretas no frontend ou no repositório.
- Deploy de preview e produção é verificado e há plano de rollback.

## 13. Decisões necessárias para fechar a proposta

1. Prioridade comercial inicial: **ChatNexus**, **VSA Analytics Health**, **VSA Nexus AI** ou **VSA TechClub**.
2. Público prioritário: empresas em geral, clínicas/hospitais ou outro segmento.
3. Provedor de e-mail: Resend ou alternativa já contratada.
4. CRM atual ou desejado e se n8n será usado na primeira fase.
5. Quem atenderá os leads e em quanto tempo.
6. Aprovação do pacote, orçamento e cronograma.
7. Materiais/cases que podem ser publicados e respectivas autorizações.

## 14. Recomendação final

Começar pelo pacote **Aquisição digital** se a prioridade é construir ativos de longo prazo (páginas de produto, blog e iscas), mas liberar o projeto em etapas: primeiro fluxo de captação e e-mail funcional, depois páginas e conteúdo, e por fim automações. Se o orçamento for restrito, iniciar pela **Base de conversão**, medir o primeiro ciclo e expandir com dados reais.

A proposta final deve ser emitida somente depois de validar o produto prioritário, os acessos, a ferramenta de e-mail/CRM e o escopo exato.
