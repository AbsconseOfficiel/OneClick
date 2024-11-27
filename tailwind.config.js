module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.md',
    './src/**/*.njk',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1710C0', // Exemple de couleur personnalisée
      },
      fontFamily: {
        'display': ['Halyard Display', 'sans-serif'],
        'text': ['Host Grotesk', 'sans-serif'],
      },
    }, // Personnalise encore plus ton thème ici
  },
  plugins: [],
};
