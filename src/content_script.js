(function() {
  const browserSelectedText = require('browser-selected-text');
  const selected = browserSelectedText();
  const title = window.document.title;
  const url = window.location.href;
  const result = [];
  if (selected) {
    result.push(selected);
  } else {
    result.push(title);
  }
  result.push(url);
  browser.runtime.sendMessage(result);
})();
