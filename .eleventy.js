module.exports = function(eleventyConfig) {

  return {
    dir: {
      input: "src",
      output: "_site", // Répertoire de sortie
    },
    data: {
      apiUrl: "http://localhost:1337", // Changez pour l'URL de production si nécessaire
    },
  };
};
