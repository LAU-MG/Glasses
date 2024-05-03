// next.config.ts

const path = require('path');

module.exports = {
  // Utiliser le dossier 'app' pour les fichiers de route
  pages: {
    app: path.join(__dirname, 'app'),
  },
};
