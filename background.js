chrome.browserAction.onClicked.addListener(function(tab){
  chrome.tabs.sendMessage(tab.id, {text: 'toggle'}, console.log);
});
