'use strict';

module.exports = () => {
  return new Promise((resolve, reject) => {
    const browserInfo = browser.runtime.getBrowserInfo();
    if(!browserInfo) {
      resolve(false);
      return;
    }
    browserInfo.then(result => {
      resolve(result.name === 'Firefox');
    }).catch(error => {
      reject(error);
    });
  });
};
