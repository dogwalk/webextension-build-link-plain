'use strict';

// https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/runtime/getBrowserInfo
module.exports = () => {
  return new Promise((resolve, reject) => {
    const browserInfo = browser.runtime.getBrowserInfo();
    if(!browserInfo) {
      reject('this runtime does not support browser.runtime.getBrowserInfo()');
      return;
    }
    browserInfo.then(result => {
      resolve(result);
    }).catch(error => {
      reject(error);
    });
  });
};
