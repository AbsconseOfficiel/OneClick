const axios = require('axios');

// Fonction pour ajouter un délai
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

module.exports = async function () {
  try {
    // Attendre un délai avant les requêtes (par exemple, si un démarrage dépendant est nécessaire)
    await delay(10000);

    // Effectuer les appels API en parallèle
    const [pageResponse, headerResponse] = await Promise.all([
      axios.get('http://localhost:1337/api/pages', {
        params: {
          populate: [
            'sections.steps.steps',
            'sections.cards.button',
            'sections.questions.questions',
            'sections.stats.stats',
            'sections.backgroundImage',
            'sections.button',
            'sections.steps.icon',
            'sections.cards.image',
            'sections.priceCards',
            'sections.founders',
            'sections.founders.social',
            'sections.founders.image',
            'sections.cards.popup',
          ],
        },
      }),
      axios.get('http://localhost:1337/api/header?populate=*'),
    ]);

    // Vérification des réponses pour chaque API
    const pageData = pageResponse.data?.data?.[0] || null;
    const headerData = headerResponse.data?.data?.link || []; // Directement dans data.link

    console.log("Données transmises à Nunjucks : ", {
      sections: pageData?.sections || [],
      header: headerData || null, // Utilisez null au lieu de []
    });

    // Gestion des cas où les données sont absentes
    if (!pageData) {
      console.warn("⚠️ Aucune donnée trouvée pour la page.");
    }
    if (!headerData) {
      console.warn("⚠️ Aucune donnée trouvée pour le layout.");
    }

    // Structure des données retournées
    return {
      header: headerData || [],
      sections: pageData?.sections || [], // Sections de la page
    };
    
  } catch (error) {
    console.error("❌ Erreur lors de la récupération des données :", error.message);
    return {
      sections: [],
      header: null,
    }; // Retourne des données vides en cas d'erreur
  }
};
