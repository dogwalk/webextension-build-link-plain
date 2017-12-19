const path = require('path');

module.exports = {
  entry: {
    content_script: './src/content_script.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist-chrome'),
    filename: '[name].js'
  }
};
