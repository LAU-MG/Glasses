// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Autres options de configuration ici */

  webpack: (config, { isServer }) => {
    // Ajouter un alias pour résoudre le chemin vers react-native/index.js
    config.resolve.alias['react-native$'] = 'react-native-web';

    return config;
  },
};

module.exports = nextConfig;
