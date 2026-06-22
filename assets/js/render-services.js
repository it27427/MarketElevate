document.addEventListener("DOMContentLoaded", () => {
  const servicesContainer = document.querySelector("#dynamic-services");
  const heroTitle = document.querySelector(".hero-content h1");
  const heroSubtitle = document.querySelector(".hero-content p");
  const heroImage = document.querySelector(".hero-image img");

  if (!servicesContainer || !window.servicesData) return;

  const renderCard = (service) => {
    const card = document.createElement("div");
    card.className = "service-card";
    card.innerHTML = `
      <h3>${service.title}</h3>
      <p>${service.summary}</p>
      <ul class="service-features">
        ${service.features.map((feature) => `<li>${feature}</li>`).join("")}
      </ul>
      <a href="${service.ctaLink}" class="btn-primary" target="_blank" rel="noopener noreferrer">
        ${service.ctaText}
      </a>
    `;
    return card;
  };

  window.servicesData.forEach((service) => {
    servicesContainer.appendChild(renderCard(service));
  });

  if (heroTitle && heroSubtitle) {
    heroTitle.innerHTML = "Services for Digital Growth";
    heroSubtitle.textContent =
      "Explore our core services, each built to help your brand grow with a dedicated CTA for fast action.";
  }

  if (heroImage) {
    heroImage.src = "assets/images/services/web-development.webp";
    heroImage.alt = "Digital Services";
  }
});
