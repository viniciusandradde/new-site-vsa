/* ============================================================
   VSA Tecnologia — interações da onepage
   ============================================================ */
(function () {
  "use strict";

  /* ---- CONFIG ----------------------------------------------------
     Troque pelo número real (formato internacional, só dígitos):
     Brasil = 55 + DDD + número. Ex.: 5511999999999
  ----------------------------------------------------------------- */
  var WHATS_NUMERO = "5567996460034"; // (67) 99646-0034

  function waLink(msg) {
    return "https://wa.me/" + WHATS_NUMERO + "?text=" + encodeURIComponent(msg || "Olá! Vim pelo site da VSA Tecnologia.");
  }

  /* ---- Links de WhatsApp (data-whatsapp) ---- */
  document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
    el.setAttribute("href", waLink(el.getAttribute("data-msg")));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  /* ---- Navbar: sombra ao rolar ---- */
  var nav = document.querySelector(".nav");
  function onScroll() {
    if (nav) nav.classList.toggle("is-scrolled", window.scrollY > 12);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Menu mobile ---- */
  var toggle = document.querySelector(".nav__toggle");
  var links = document.getElementById("primary-nav");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Reveal ao rolar ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i % 4, 3) * 70) + "ms";
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---- Filtro do portfólio ---- */
  var filters = document.querySelectorAll(".filter");
  var projects = document.querySelectorAll(".project");
  var emptyMsg = document.querySelector(".portfolio__empty");
  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filters.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
      var cat = btn.getAttribute("data-filter");
      var shown = 0;
      projects.forEach(function (p) {
        var match = cat === "all" || p.getAttribute("data-cat") === cat;
        p.style.display = match ? "" : "none";
        if (match) shown++;
      });
      if (emptyMsg) emptyMsg.hidden = shown !== 0;
    });
  });

  /* ---- Scrollspy: link ativo na navbar ---- */
  var sections = document.querySelectorAll("main section[id]");
  var navAnchors = links ? links.querySelectorAll("a") : [];
  if ("IntersectionObserver" in window && navAnchors.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var id = e.target.getAttribute("id");
          navAnchors.forEach(function (a) {
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---- Formulário → WhatsApp ---- */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nome = form.nome, msg = form.mensagem;
      var ok = true;
      [nome, msg].forEach(function (input) {
        var valid = input.value.trim() !== "";
        input.closest(".field").classList.toggle("invalid", !valid);
        if (!valid) ok = false;
      });
      if (!ok) { nome.value.trim() === "" ? nome.focus() : msg.focus(); return; }

      var texto =
        "*Novo contato pelo site VSA Tecnologia*\n\n" +
        "Nome: " + form.nome.value.trim() + "\n" +
        (form.empresa.value.trim() ? "Empresa: " + form.empresa.value.trim() + "\n" : "") +
        "Assunto: " + form.assunto.value + "\n" +
        "Mensagem: " + form.mensagem.value.trim();

      window.open(waLink(texto), "_blank", "noopener");
    });
  }

  /* ---- FAQ: acordeão (single-open) ---- */
  var faqRows = document.querySelectorAll(".faq-row");
  faqRows.forEach(function (row) {
    var btn = row.querySelector(".faq-row__btn");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var willOpen = !row.classList.contains("open");
      faqRows.forEach(function (other) {
        if (other !== row) {
          other.classList.remove("open");
          var ob = other.querySelector(".faq-row__btn");
          if (ob) ob.setAttribute("aria-expanded", "false");
        }
      });
      row.classList.toggle("open", willOpen);
      btn.setAttribute("aria-expanded", String(willOpen));
    });
  });

  /* ---- Ano dinâmico no footer (sem novas datas no build) ---- */
  // Mantém 2026 caso o ambiente bloqueie Date; atualiza se disponível.
  try {
    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  } catch (err) { /* mantém o valor estático */ }
})();
