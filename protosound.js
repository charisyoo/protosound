var inputURL; //Variable declaration for the inputted URL

chrome.webReqeust.onComplete.addListener( 
	function(details) {           //Reads url on completion of event and 
		inputURL = details.url;   //assigns it to inputURL
	});

var startIndex = inputURL.indexOf("#q=");
searchInput = inputURL.substring(startIndex+4); //Create substring of search terms

var searchArray = searchInput.split("+"); //Converts to array at '+' signs
