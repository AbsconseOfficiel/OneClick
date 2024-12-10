module.exports = function(eleventyConfig) {

  // Copie les fichiers CSS générés dans le répertoire de sortie (_site)
  eleventyConfig.addPassthroughCopy("src/assets/styles.css");

  // Copie uniquement les images du dossier uploads sans inclure le dossier public
  eleventyConfig.addPassthroughCopy("public/uploads/**/*");

  return {
    dir: {
      input: "src",  // Dossier d'entrée
      output: "_site"  // Dossier de sortie
    },
    dataTemplateEngine: "njk"
  };
};
