'use strict';
const platformInfo = require('./webextension-platform-info');

// https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/runtime/getPlatformInfo
module.exports = () => {
  return platformInfo().then(result => {
    return result.os === 'android';
  }).catch(() => {
    return false;
  });
};
