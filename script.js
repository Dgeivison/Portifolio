(() => {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

  /* Todos os efeitos ficam sempre ativos, independente da configuração do sistema. */
  const calm = false;
  const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------- Nome do hero, letra por letra ---------- */
  const heroName = $("#heroName");
  if (heroName) {
    const text = heroName.textContent.trim();
    heroName.setAttribute("aria-label", text);
    heroName.textContent = "";
    let n = 0;
    text.split(/\s+/).forEach((word, wi, arr) => {
      // cada palavra fica num bloco que não quebra no meio
      const w = document.createElement("span");
      w.className = "word";
      w.setAttribute("aria-hidden", "true");
      [...word].forEach((char) => {
        const span = document.createElement("span");
        span.className = "ch";
        span.textContent = char;
        span.style.animationDelay = `${0.5 + n++ * 0.04}s`;
        w.appendChild(span);
      });
      heroName.appendChild(w);
      if (wi < arr.length - 1) heroName.appendChild(document.createTextNode(" "));
    });
  }

  /* ---------- Efeito de digitação ---------- */
  const typer = $("#typer");
  if (typer) {
    const words = ["automações RPA.", "sistemas web.", "agentes de IA.", "dashboards gerenciais."];
    let w = 0, text = "", deleting = false;
    const tick = () => {
      const word = words[w % words.length];
      let delay = deleting ? 40 : 80;
      if (!deleting && text === word) { deleting = true; delay = 1600; }
      else if (deleting && text === "") { deleting = false; w++; delay = 300; }
      else { text = deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1); }
      typer.textContent = text;
      setTimeout(tick, delay);
    };
    setTimeout(tick, 1600);
  }

  /* ---------- Contadores ---------- */
  const animateCount = (el) => {
    const target = Number(el.dataset.count);
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / 1600, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  /* ---------- Projetos: cards, filtro e modal ---------- */
  const grid = $("#projectGrid");
  const modal = $("#modal");
  const modalBody = $("#modalBody");
  const projects = window.PROJECTS || [];

  const metaHtml = (p) => `<div class="project__meta"><p class="project__cat">${p.cat}</p>${p.status ? `<span class="status">${p.status}</span>` : ""}</div>`;
  const tagsHtml = (p) => `<ul class="tags">${p.tags.map((t) => `<li>${t}</li>`).join("")}</ul>`;

  if (grid) {
    grid.innerHTML = projects.map((p, i) => `
      <article class="project reveal" data-types="${p.types.join(" ")}" data-index="${i}" role="button" tabindex="0" aria-label="Ver detalhes: ${p.title}">
        <div class="project__top"><span class="project__n">${String(i + 1).padStart(2, "0")}</span><span class="project__arrow">↗</span></div>
        ${metaHtml(p)}
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        ${tagsHtml(p)}
      </article>`).join("");
  }

  const openProject = (i) => {
    const p = projects[i];
    if (!p || !modal) return;
    const sections = p.sections.map((s) => `<section><h3>${s.h}</h3>${s.list ? `<ul>${s.list.map((x) => `<li>${x}</li>`).join("")}</ul>` : `<p>${s.p}</p>`}</section>`).join("");
    modalBody.innerHTML = `${metaHtml(p)}<h2 id="modalTitle">${p.title}</h2>${sections}${tagsHtml(p)}`;
    modal.showModal();
    document.body.style.overflow = "hidden";
  };
  if (grid) {
    grid.addEventListener("click", (e) => { const c = e.target.closest(".project"); if (c) openProject(Number(c.dataset.index)); });
    grid.addEventListener("keydown", (e) => {
      const c = e.target.closest(".project");
      if (c && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openProject(Number(c.dataset.index)); }
    });
  }
  if (modal) {
    $("#modalClose").addEventListener("click", () => modal.close());
    modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });
    modal.addEventListener("close", () => { document.body.style.overflow = ""; });
  }

  $$(".chip").forEach((chip) => chip.addEventListener("click", () => {
    $$(".chip").forEach((c) => c.classList.toggle("is-active", c === chip));
    const f = chip.dataset.filter;
    $$(".project").forEach((card) => {
      const show = f === "all" || card.dataset.types.split(" ").includes(f);
      const wasHidden = card.classList.contains("is-hidden");
      card.classList.toggle("is-hidden", !show);
      if (show) {
        card.classList.add("is-visible");
        card.classList.remove("pop"); void card.offsetWidth; card.classList.add("pop");
      }
    });
  }));

  /* ---------- Revelar ao rolar (em sequência) ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.filter((e) => e.isIntersecting).forEach((entry, i) => {
      const el = entry.target;
      el.style.transitionDelay = `${Math.min(i, 5) * 0.12}s`;
      el.classList.add("is-visible");
      // remove o atraso depois de entrar, para o hover responder na hora
      setTimeout(() => { el.style.transitionDelay = ""; }, 1400);
      $$("[data-count]", el).forEach(animateCount);
      io.unobserve(el);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
  $$(".reveal").forEach((el) => io.observe(el));

  /* ---------- Menu: link da seção atual ---------- */
  const links = $$(".nav__links a[href^='#']:not(.btn)");
  const sections = links.map((a) => $(a.getAttribute("href"))).filter(Boolean);
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => spy.observe(s));

  /* ---------- Faixas de tecnologias: aceleram quando você rola ---------- */
  const tracks = $$(".marquee__track");
  const getAnims = () => tracks.flatMap((t) => t.getAnimations());
  let anims = [];
  let rate = 1;

  /* ---------- Rolagem: progresso, linha do tempo, parallax, velocidade ---------- */
  const progress = $("#progress");
  const nav = $("#nav");
  const timeline = $("#timeline");
  const fill = $("#timelineFill");
  const heroInner = $(".hero__inner");
  const hero = $(".hero");
  const glows = $$(".glow--a, .glow--b");
  let lastY = window.scrollY;
  let speed = 0;

  const update = () => {
    const y = window.scrollY;
    const vh = window.innerHeight;
    const max = document.documentElement.scrollHeight - vh;

    if (progress) progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    if (nav) nav.classList.toggle("is-scrolled", y > 40);

    if (timeline && fill) {
      const rect = timeline.getBoundingClientRect();
      fill.style.transform = `scaleY(${clamp((vh * 0.65 - rect.top) / rect.height, 0, 1)})`;
    }

    if (hero && heroInner && y < vh * 1.2) {
      const p = clamp(y / (vh * 0.9), 0, 1);
      heroInner.style.opacity = String(1 - p);
      if (!calm) {
        heroInner.style.transform = `translateY(${y * 0.28}px) scale(${1 - p * 0.04})`;
        glows.forEach((g) => g.style.setProperty("--par", `${y * 0.18}px`));
      }
    }

    speed = Math.abs(y - lastY);
    lastY = y;
  };
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();

  // laço leve: suaviza a velocidade das faixas
  const loop = () => {
    if (!anims.length) anims = getAnims();
    if (!calm) {
      const target = 1 + clamp(speed / 6, 0, 5);
      rate = lerp(rate, target, 0.08);
      anims.forEach((a) => { a.playbackRate = rate; });
      speed *= 0.9;
    }
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);

  /* ---------- Projetos: brilho + inclinação 3D que seguem o mouse ---------- */
  $$(".project").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty("--mx", `${px * 100}%`);
      card.style.setProperty("--my", `${py * 100}%`);
      if (!calm) {
        card.style.setProperty("--ty", `${(px - 0.5) * 8}deg`);
        card.style.setProperty("--tx", `${(0.5 - py) * 8}deg`);
      }
    });
    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tx", "0deg");
      card.style.setProperty("--ty", "0deg");
    });
  });

  /* ---------- Botões magnéticos + brilho do cursor ---------- */
  if (hasHover && !calm) {
    $$(".btn--gold, .btn--ghost").forEach((btn) => {
      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        btn.style.setProperty("--bx", `${(e.clientX - r.left - r.width / 2) * 0.25}px`);
        btn.style.setProperty("--by", `${(e.clientY - r.top - r.height / 2) * 0.35}px`);
      });
      btn.addEventListener("pointerleave", () => {
        btn.style.setProperty("--bx", "0px");
        btn.style.setProperty("--by", "0px");
      });
    });

    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    glow.setAttribute("aria-hidden", "true");
    document.body.appendChild(glow);
    let gx = 0, gy = 0, tx = 0, ty = 0;
    window.addEventListener("pointermove", (e) => { tx = e.clientX; ty = e.clientY; glow.classList.add("is-on"); }, { passive: true });
    document.addEventListener("pointerleave", () => glow.classList.remove("is-on"));
    const follow = () => {
      gx = lerp(gx, tx, 0.12); gy = lerp(gy, ty, 0.12);
      glow.style.transform = `translate(${gx}px, ${gy}px)`;
      requestAnimationFrame(follow);
    };
    follow();
  }

  /* ---------- Menu mobile ---------- */
  const burger = $("#burger");
  const menu = $("#menu");
  if (burger && menu) {
    const setOpen = (open) => {
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      menu.classList.toggle("is-open", open);
    };
    burger.addEventListener("click", () => setOpen(burger.getAttribute("aria-expanded") !== "true"));
    $$("a", menu).forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  }
})();
