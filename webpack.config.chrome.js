const path = require('path');

module.exports = {
  entry: {
    background_scripts: './background_scripts.js',
    popup: './popup.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist-chrome'),
    filename: '[name].js'
  }
};
