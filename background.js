var inputURL;

chrome.webRequest.onCompleted.addListener(
	function(details) {           //Reads url on completion of event and
		inputURL = details.url;     //assigns it to inputURL
		chrome.details.sendmessage(detail.id, {inputURL}, function(response) {
	});
});