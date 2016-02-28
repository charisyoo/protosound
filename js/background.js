 chrome.browserAction.onClicked.addListener(function(tab){
 	chrome.tabs.executeScript(null, {file: "TEST.js" });
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
*?