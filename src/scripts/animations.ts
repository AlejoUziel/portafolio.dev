import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Animaciones del sitio con GSAP.
 *
 * Marca los elementos en el HTML con atributos:
 *   data-animate="hero-title"  → título dividido en letras (entrada)
 *   data-animate="hero"        → aparece en secuencia al cargar
 *   data-animate="reveal"      → aparece al entrar en pantalla (scroll)
 *   data-count="16000"         → número que cuenta hacia arriba
 *   data-tilt                  → tarjeta con inclinación 3D al pasar el mouse
 *   data-magnetic              → botón que sigue al cursor
 *
 * El elemento <html> recibe la clase `js-anim` (ver Layout.astro), que oculta
 * los elementos animados hasta que GSAP los muestra para evitar parpadeos.
 * Si el usuario prefiere movimiento reducido, nada se oculta ni se anima.
 */

const REDUCED = "(prefers-reduced-motion: reduce)";
const ANIM_CLASS = "js-anim";
const INTRO_CLASS = "js-intro";

let mm: gsap.MatchMedia | null = null;
/** Momento (performance.now) antes del cual no se revela nada con scroll. */
let revealNotBefore = 0;

/**
 * Pantalla de inicio "</> uziel.dev". Se muestra en cada carga o recarga
 * completa; Layout.astro agrega la clase `js-intro`. Al navegar entre
 * paginas con el ClientRouter no se repite.
 * Devuelve en cuantos segundos debe empezar el resto de animaciones.
 */
function initIntro(): number {
  const root = document.documentElement;
  const intro = document.querySelector<HTMLElement>("#intro");
  if (!intro || !root.classList.contains(INTRO_CLASS)) return 0;

  const q = gsap.utils.selector(intro);
  const name = SplitText.create(q("[data-intro='name']"), { type: "chars" });

  const tl = gsap.timeline({
    defaults: { ease: "power3.out" },
    onComplete: () => root.classList.remove(INTRO_CLASS),
  });

  tl.from(q("[data-intro='lt']"), { x: "0.6em", autoAlpha: 0, duration: 0.5 })
    .from(
      q("[data-intro='gt']"),
      { x: "-0.6em", autoAlpha: 0, duration: 0.5 },
      "<"
    )
    .from(
      q("[data-intro='slash']"),
      {
        scaleY: 0,
        rotate: -90,
        autoAlpha: 0,
        duration: 0.6,
        ease: "back.out(2)",
      },
      "-=0.2"
    )
    .addLabel("type", "+=0.05");

  // "Escribe" uziel.dev letra por letra: cada letra aparece y el cursor la
  // sigue. El ancho se fija antes para que el logo no se mueva al escribir.
  const typed = q("[data-intro='typed']")[0];
  if (typed) gsap.set(typed, { width: typed.offsetWidth });
  gsap.set(name.chars, { display: "none" });
  name.chars.forEach((char, i) => {
    tl.set(char, { display: "inline-block" }, `type+=${i * 0.06}`);
  });

  tl.to(
    q("[data-intro='caret']"),
    { autoAlpha: 0, duration: 0.01, repeat: 3, yoyo: true, repeatDelay: 0.15 },
    ">"
  )
    .to(q("[data-intro='logo']"), {
      scale: 0.92,
      autoAlpha: 0,
      duration: 0.4,
      ease: "power2.in",
    })
    .to(intro, { yPercent: -100, duration: 0.8, ease: "power4.inOut" }, "-=0.1");

  // El hero entra mientras la cortina sube.
  return tl.duration() - 0.5;
}

function initHero(delay = 0) {
  const title = document.querySelector<HTMLElement>(
    '[data-animate="hero-title"]'
  );
  const items = gsap.utils.toArray<HTMLElement>('[data-animate="hero"]');
  if (!title && items.length === 0) return;

  const tl = gsap.timeline({ delay, defaults: { ease: "power3.out" } });

  if (title) {
    const split = SplitText.create(title, {
      type: "words,chars",
      mask: "words",
    });
    gsap.set(title, { autoAlpha: 1 });
    tl.from(split.chars, {
      yPercent: 110,
      rotate: 8,
      duration: 0.8,
      stagger: 0.03,
    });
  }

  if (items.length) {
    tl.fromTo(
      items,
      { autoAlpha: 0, y: 24 },
      { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.12 },
      title ? "-=0.45" : 0
    );
  }
}

function initReveal() {
  const els = gsap.utils.toArray<HTMLElement>('[data-animate="reveal"]');
  if (!els.length) return;

  gsap.set(els, { autoAlpha: 0, y: 40 });

  // batch agrupa los elementos que entran juntos (ej. una fila de tarjetas)
  // y los anima con un pequeño desfase entre ellos.
  ScrollTrigger.batch(els, {
    start: "top 88%",
    once: true,
    onEnter: batch =>
      gsap.to(batch, {
        delay: Math.max(0, (revealNotBefore - performance.now()) / 1000),
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.12,
        overwrite: true,
      }),
  });
}

function initCounters() {
  gsap.utils.toArray<HTMLElement>("[data-count]").forEach(el => {
    const target = Number(el.dataset.count);
    if (!Number.isFinite(target)) return;
    const prefix = el.dataset.countPrefix ?? "";
    const original = el.textContent;
    const fmt = new Intl.NumberFormat("en-US");
    const state = { value: 0 };

    gsap.to(state, {
      value: target,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
      onUpdate: () => {
        el.textContent = `${prefix}${fmt.format(Math.round(state.value))}`;
      },
      onComplete: () => {
        el.textContent = original;
      },
    });
  });
}

function initScrollProgress() {
  const bar = document.querySelector("#scroll-progress");
  if (!bar) return;
  gsap.fromTo(
    bar,
    { scaleX: 0 },
    {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub: 0.3,
      },
    }
  );
}

/** Interacciones solo para dispositivos con mouse. Devuelve su limpieza. */
function initPointerEffects() {
  const controller = new AbortController();
  const { signal } = controller;

  gsap.utils.toArray<HTMLElement>("[data-tilt]").forEach(card => {
    gsap.set(card, { transformPerspective: 800 });
    const rotX = gsap.quickTo(card, "rotationX", {
      duration: 0.5,
      ease: "power3",
    });
    const rotY = gsap.quickTo(card, "rotationY", {
      duration: 0.5,
      ease: "power3",
    });

    const move = (e: PointerEvent) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      rotY(x * 8);
      rotX(-y * 8);
    };
    const leave = () => {
      rotX(0);
      rotY(0);
    };
    card.addEventListener("pointermove", move, { signal });
    card.addEventListener("pointerleave", leave, { signal });
  });

  gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach(btn => {
    const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3" });
    const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3" });

    btn.addEventListener(
      "pointermove",
      e => {
        const r = btn.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * 0.25);
        yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
      },
      { signal }
    );
    btn.addEventListener(
      "pointerleave",
      () =>
        gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1,0.4)" }),
      { signal }
    );
  });

  return () => controller.abort();
}

function init() {
  (window as unknown as { __animReady?: boolean }).__animReady = true;

  mm = gsap.matchMedia();
  mm.add(
    {
      motion: `not ${REDUCED}`,
      reduced: REDUCED,
      finePointer: "(hover: hover) and (pointer: fine)",
    },
    c => {
      const { motion, finePointer } = c.conditions ?? {};
      const root = document.documentElement;
      if (!motion) {
        root.classList.remove(ANIM_CLASS, INTRO_CLASS);
        return;
      }
      const introDelay = initIntro();
      revealNotBefore = performance.now() + introDelay * 1000;
      initHero(introDelay);
      initReveal();
      initCounters();
      initScrollProgress();
      const pointerCleanup = finePointer ? initPointerEffects() : undefined;
      return () => {
        pointerCleanup?.();
        root.classList.remove(INTRO_CLASS);
      };
    }
  );

  // Recalcula posiciones cuando terminan de cargar fuentes e imágenes.
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}

function cleanup() {
  mm?.revert();
  mm = null;
}

document.addEventListener("astro:page-load", init);
document.addEventListener("astro:before-swap", event => {
  cleanup();
  // El ClientRouter reemplaza los atributos de <html>; mantenemos la clase
  // para que la nueva página también oculte sus elementos antes de animarlos.
  if (!window.matchMedia(REDUCED).matches) {
    (event as unknown as { newDocument: Document }).newDocument.documentElement.classList.add(
      ANIM_CLASS
    );
  }
});
