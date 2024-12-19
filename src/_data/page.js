const axios = require('axios');

// Fonction pour récupérer les données d'une réponse
function getDataFromPage(response) {
  return response.data?.data?.[0] || null;
}

function getDataFromHeader(response) {
  return response.data?.data?.link || [];
}

// Fonction pour récupérer les données de la page
async function getPageData() {
  try {
    // Ajout d'un délai de 500ms avant de lancer l'appel aux API
    await new Promise(resolve => setTimeout(resolve, 15000));

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

    const pageData = getDataFromPage(pageResponse);
    const headerData = getDataFromHeader(headerResponse);

    if (!pageData || !headerData) {
      console.warn("⚠️ Aucune donnée trouvée.");
    }

    return {
      sections: pageData?.sections,
      header: headerData,
    };
  } catch (error) {
    console.error("❌ Erreur lors de la récupération des données :", error.message);
    return {
      sections: [],
      header: null,
    };
  }
}

// Export de la fonction getPageData
module.exports = getPageData;