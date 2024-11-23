// .eleventy.js
module.exports = function(eleventyConfig) {
  // Copie les assets statiques comme les images et autres fichiers
  eleventyConfig.addPassthroughCopy("src/assets");  // Copier les assets comme les images

  // Optionnel : Utilisation de l'API d'Axios pour charger des données depuis Strapi
  eleventyConfig.addTemplateFormats("njk");  // Spécifier le format de templates si nécessaire

  return {
    dir: {
      input: "src",   // Dossier d'entrée pour les fichiers sources
      output: "dist", // Dossier de sortie pour les fichiers générés
      includes: "_includes",  // Dossier pour les layouts
      data: "_data"  // Dossier pour les fichiers de données
    }
  };
};
