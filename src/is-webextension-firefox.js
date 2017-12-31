'use strict';
const browserInfo = require('./webextension-browser-info');

// https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/runtime/getBrowserInfo
module.exports = () => {
  return browserInfo().then(result => {
    return result.name === 'Firefox';
  }).catch(() => {
    return false;
  });
};
