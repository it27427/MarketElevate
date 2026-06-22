document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  /* HERO */

  gsap.from(".hero-badge", {
    opacity: 0,
    y: 50,
    duration: 1,
  });

  gsap.from(".hero h1", {
    opacity: 0,
    y: 80,
    duration: 1.2,
  });

  gsap.from(".hero p", {
    opacity: 0,
    y: 80,
    duration: 1.4,
  });

  gsap.from(".hero-buttons", {
    opacity: 0,
    y: 80,
    duration: 1.6,
  });

  /* SERVICE CARDS */

  gsap.utils.toArray(".service-card").forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },

      opacity: 0,
      y: 100,
      duration: 1,
    });
  });

  /* PROCESS */

  gsap.utils.toArray(".step").forEach((step) => {
    gsap.from(step, {
      scrollTrigger: {
        trigger: step,
        start: "top 85%",
      },

      opacity: 0,
      scale: 0.8,
      duration: 1,
    });
  });

  /* STATS */

  gsap.from(".stat", {
    scrollTrigger: {
      trigger: ".stats",
      start: "top 80%",
    },

    opacity: 0,
    y: 80,
    stagger: 0.2,
  });

  /* FAQ */

  gsap.from(".faq-item", {
    scrollTrigger: {
      trigger: ".faq",
      start: "top 80%",
    },

    opacity: 0,
    y: 60,
    stagger: 0.2,
  });

  /* CTA */

  gsap.from(".cta h2", {
    scrollTrigger: {
      trigger: ".cta",
      start: "top 80%",
    },

    opacity: 0,
    y: 60,
  });
});
