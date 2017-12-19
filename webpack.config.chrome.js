const path = require('path');

module.exports = {
  entry: {
    background_scripts: './src/background_scripts.js',
    popup: './src/popup.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist-chrome'),
    filename: '[name].js'
  }
};
