chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  document.body.classList.toggle('print-version');
  sendResponse(document);
});