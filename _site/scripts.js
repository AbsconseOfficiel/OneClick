  document.addEventListener("DOMContentLoaded", () => {
    // Sélectionne tous les sliders
    const sliders = document.querySelectorAll(".slider-sync");

    // Ajoute un écouteur d'événements à chaque slider
    sliders.forEach(slider => {
      slider.addEventListener("input", (e) => {
        const value = e.target.value; // Récupère la valeur du slider modifié

        // Mets à jour tous les autres sliders
        sliders.forEach(s => {
          if (s !== e.target) {
            s.value = value; // Synchronise la valeur
          }
        });
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const formatNumber = (value) => {
      if (value >= 1_000_000) {
        return `${(value / 1_000_000).toFixed(2)} M`;
      } else if (value >= 1_000) {
        return `${(value / 1_000).toFixed(0)} K`;
      }
      return `${value}`;
    };
  
    const sliders = document.querySelectorAll(".slider-sync");
  
    const synchronizeAndCalculate = (value) => {
      sliders.forEach((slider) => {
        slider.value = value;
  
        // Parent card
        const card = slider.closest(".p-9");
  
        // Fetch elements
        const setupCostElement = card.querySelector(".setup-cost");
        const performanceRateElement = card.querySelector(".performance-rate");
        const maintenanceRateElement = card.querySelector(".maintenance-rate");
        const priceElement = card.querySelector(".text-4xl");
        const brutValueElement = card.querySelector(".brut-value");
  
        // Parse data from HTML
        const setupCost = parseFloat(setupCostElement.dataset.value) || 0;
        const performanceRate = parseFloat(performanceRateElement.dataset.value) || 0;
        const maintenanceRate = parseFloat(maintenanceRateElement.dataset.value) || 0;
        const price = parseFloat(value); // Slider value
  
        // Calculations
        const performanceCost = (performanceRate / 100) * price;
        const maintenanceCost = (maintenanceRate / 100) * price;
        const totalCost = setupCost + performanceCost + maintenanceCost;
        const remainingFunds = price - totalCost;
  
        // Update the card dynamically
        setupCostElement.textContent = `${formatNumber(setupCost)} €`;
        performanceRateElement.textContent = `${performanceRate}% (${formatNumber(performanceCost)} €)`;
        maintenanceRateElement.textContent = `${maintenanceRate}% (${formatNumber(maintenanceCost)} €)`;
        priceElement.textContent = `${formatNumber(remainingFunds)} €`;
        brutValueElement.textContent = `${formatNumber(price)} €`;
      });
    };
  
    sliders.forEach((slider) => {
      slider.addEventListener("input", (event) => {
        const value = parseInt(event.target.value, 10);
        synchronizeAndCalculate(value);
      });
    });
  
    // Initialize with default value
    synchronizeAndCalculate(5_000_000); // Default value for initialization
  });
  