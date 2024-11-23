/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,njk}", // Parcourir les fichiers HTML et Nunjucks
    "./src/_includes/**/*.njk",
    "./src/_data/**/*.js", // Inclure les fichiers de données si nécessaire
  ],
  theme: {
    extend: {}, // Personnalisez votre thème ici
  },
  plugins: [], // Ajoutez des plugins Tailwind si nécessaire
};
