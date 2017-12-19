const path = require('path');

module.exports = {
  entry: {
    content_script: './src/content_script.js',
    background: './src/background.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist-firefox'),
    filename: '[name].js',
  }
};
