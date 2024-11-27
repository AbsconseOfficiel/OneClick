const axios = require('axios');

// Fonction pour ajouter un délai
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

module.exports = async function() {
  try {
    // Attendre 5 secondes avant de faire la requête
    await delay(10000);

    const response = await axios.get('http://localhost:1337/api/pages?populate[0]=sections.steps.steps&populate[1]=sections.cards.button&populate[2]=sections.questions.questions&populate[3]=sections.stats.stats&populate[4]=sections.backgroundImage&populate[5]=sections.button&populate[6]=sections.steps.icon&populate[7]=sections.cards.image&populate[8]=sections.priceCards');

    if (!response.data || !response.data.data || response.data.data.length === 0) {
      console.error("Aucune page trouvée.");
      return { sections: [] };
    }

    const pageData = response.data.data[0];
    return {
      sections: pageData.sections || []
    };

  } catch (error) {
    console.error("Erreur lors de la récupération des données:", error.message);
    return { sections: [] };
  }
};