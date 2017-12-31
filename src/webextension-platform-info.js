'use strict';

module.exports = () => {
  return new Promise((resolve, reject) => {
    const platformInfo = browser.runtime.getPlatformInfo();
    if(!platformInfo) {
      reject('this runtime does not support browser.runtime.getPlatformInfo()');
      return;
    }
    platformInfo.then(result => {
      resolve(result);
    }).catch(error => {
      reject(error);
    });
  });
};
