browser = require('webextension-polyfill'); // eslint-disable-line no-global-assign
/**
 * There was an error executing the script.
 * Display the error message.
 */
function reportExecuteScriptError(error) {
  console.error(`Failed to execute content script: ${error.message}`); // eslint-disable-line no-console
}

function gatherPageInfo() {
  browser.tabs.executeScript({file: '/content_script.js'})
    .catch(reportExecuteScriptError);
}

browser.browserAction.onClicked.addListener(gatherPageInfo);
