const path = require('path');

module.exports = function override(config, env) {

  config.resolve.alias = {
    ...config.resolve.alias,
    '@components': path.resolve(__dirname, 'src/components'),
    '@containers': path.resolve(__dirname, 'src/containers'),
    '@constants': path.resolve(__dirname, 'src/constants'),
    '@hoc-helpers': path.resolve(__dirname, 'src/hoc-helpers'),
    '@services': path.resolve(__dirname, 'src/services'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@styles': path.resolve(__dirname, 'src/styles'),
    '@routes': path.resolve(__dirname, 'src/routes'),
    '@static': path.resolve(__dirname, 'src/static'),
    '@hooks': path.resolve(__dirname, 'src/hooks'),
  };

  return config;
};


