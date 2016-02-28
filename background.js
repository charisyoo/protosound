chrome.browserAction.onClicked.addListener(function(tab) {
    var url = window.location.href.toString();
 	  if (tab.url.indexOf("http://www.google.com/")!= -1 || tab.url.indexOf("https://www.google.com/")!= -1) {
 	  console.log("ProtoSound");
 	  chrome.tabs.executeScript(tab.id, {code: "var url = window.location.href.toString();"}, function() {
 	  chrome.tabs.executeScript(tab.id, {file: "protosound.js"})
 	  }
    )}
});

/*
chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT},
		function(tabs){
				alert(tabs[0].url);
		}
);
*/

/*
chrome.webRequest.onCompleted.addListener(
	function(details) {
		var inputURL = details.url;
		chrome.runtime.sendMessage({greeting: inputURL}, function(response) {
  		console.log("response.greeting")
			});
});
*/
