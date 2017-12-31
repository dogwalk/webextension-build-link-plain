'use strict';
const browserInfo = require('./webextension-browser-info');

module.exports = () => {
  return browserInfo().then(result => {
    return result.name === 'Firefox';
  });
};
