document.addEventListener("DOMContentLoaded", () => {
  // Fonction de formatage des nombres
  const formatNumber = (value) => {
    const M = 1_000_000;
    const K = 1_000;
    if (value >= M) return `${(value / M).toFixed(2)} M`;
    if (value >= K) return `${(value / K).toFixed(0)} K`;
    return `${value}`;
  };

  // Synchroniser et calculer les valeurs
  const synchronizeAndCalculate = (value) => {
    document.querySelectorAll(".slider-sync").forEach((slider) => {
      slider.value = value;

      const card = slider.closest(".p-9");
      const elements = {
        setupCostElement: card.querySelector(".setup-cost"),
        performanceRateElement: card.querySelector(".performance-rate"),
        maintenanceRateElement: card.querySelector(".maintenance-rate"),
        priceElement: card.querySelector(".text-4xl"),
        brutValueElement: card.querySelector(".brut-value"),
      };

      const setupCost = parseFloat(elements.setupCostElement.dataset.value) || 0;
      const performanceRate = parseFloat(elements.performanceRateElement.dataset.value) || 0;
      const maintenanceRate = parseFloat(elements.maintenanceRateElement.dataset.value) || 0;
      const price = parseFloat(value);

      const performanceCost = (performanceRate / 100) * price;
      const maintenanceCost = (maintenanceRate / 100) * price;
      const totalCost = setupCost + performanceCost + maintenanceCost;
      const remainingFunds = price - totalCost;

      // Mettre à jour les valeurs affichées
      elements.setupCostElement.textContent = `${formatNumber(setupCost)} €`;
      elements.performanceRateElement.textContent = `${performanceRate}% (${formatNumber(performanceCost)} €)`;
      elements.maintenanceRateElement.textContent = `${maintenanceRate}% (${formatNumber(maintenanceCost)} €)`;
      elements.priceElement.textContent = `${formatNumber(remainingFunds)} €`;
      elements.brutValueElement.textContent = `${formatNumber(price)} €`;
    });
  };

  // Initialiser les sliders
  document.querySelectorAll(".slider-sync").forEach((slider) => {
    slider.addEventListener("input", (event) => {
      synchronizeAndCalculate(parseInt(event.target.value, 10));
    });
  });

  // Appel initial pour synchroniser avec une valeur par défaut
  synchronizeAndCalculate(5_000_000); // Valeur par défaut

  // Ouvrir et fermer la pop-up
  const togglePopup = (content = '') => {
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");

    if (content) {
      popupContent.innerHTML = content; // Injecte le contenu dynamique
      popup.classList.remove("hidden"); // Affiche la pop-up
    } else {
      popup.classList.add("hidden"); // Cache la pop-up
    }
  };

  // Rendre les fonctions accessibles globalement pour onclick
  window.openPopup = (content) => togglePopup(content);
  window.closePopup = () => togglePopup();
  
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
});


