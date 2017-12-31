'use strict';
const platformInfo = require('./webextension-platform-info');

module.exports = () => {
  return platformInfo().then(result => {
    return result.os === 'android';
  }).catch(() => {
    return false;
  });
};
