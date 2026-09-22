document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".glass-card");

  // ── Track mouse per card for 3D tilt + shine + glow ──
  cards.forEach((card) => {
    const inner = card.querySelector(".glass-card-inner");

    card.addEventListener("mousemove", function (e) {
      const rect = card.getBoundingClientRect();

      // Mouse position relative to card (0–1)
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      // Clamp
      const clampX = Math.min(Math.max(x, 0), 1);
      const clampY = Math.min(Math.max(y, 0), 1);

      // Depth factor from data attribute
      const depth = parseFloat(card.dataset.depth) || 0.12;

      // Rotation: map 0–1 → -15° … +15° (scaled by depth)
      const rotY = (clampX - 0.5) * 30 * depth * 2;
      const rotX = (0.5 - clampY) * 30 * depth * 2;

      // Apply 3D transform
      inner.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;

      // ── Shine position ──
      const shineX = clampX * 100;
      const shineY = clampY * 100;
      inner.style.setProperty("--shine-x", `${shineX}%`);
      inner.style.setProperty("--shine-y", `${shineY}%`);

      // ── Glow position (behind card) ──
      const glowX = clampX * 100;
      const glowY = clampY * 100;
      card.style.setProperty("--glow-x", `${glowX}%`);
      card.style.setProperty("--glow-y", `${glowY}%`);

      // ── Animated border glow angle ──
      const angle = (clampX + clampY) * 360;
      inner.style.setProperty("--angle", `${angle}deg`);
    });

    // ── Reset on mouse leave ──
    card.addEventListener("mouseleave", function () {
      inner.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      // reset shine (fade out via CSS)
      // reset glow (fade out via CSS)
      inner.style.setProperty("--shine-x", "50%");
      inner.style.setProperty("--shine-y", "30%");
      card.style.setProperty("--glow-x", "50%");
      card.style.setProperty("--glow-y", "50%");
      // angle keeps animating but resets slowly
    });

    // ── Optional: click feedback ──
    card.addEventListener("click", function () {
      const title = this.querySelector(".card-title")?.textContent || "Service";
      console.log(`🔗 Navigate to ${title} details`);
      // window.location.href = 'service-details.html'; // uncomment if needed
    });
  });

  // ── (Optional) Track mouse globally to update glow even on pause ──
  // Already handled per card.

  // console.log("✅ 3D Glass Cards initialized");
});
