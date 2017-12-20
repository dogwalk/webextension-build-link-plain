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

function notify(message) {
  console.log(message.join(' ')); // eslint-disable-line no-console
}

/*
Assign `notify()` as a listener to messages from the content script.
*/
browser.runtime.onMessage.addListener(notify);
