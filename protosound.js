var inputURL; //Variable declaration for the inputted URL

chrome.webReqeust.onComplete.addListener( 
	function(details) {           //Reads url on completion of event and 
		inputURL = details.url;   //assigns it to inputURL
	});

var startIndex = inputURL.indexOf("#q=");
searchInput = inputURL.substring(startIndex+4); //Create substring of search terms

var searchArray = searchInput.split("+"); //Converts to array at '+' signs

var end = 1;
var sendUrl;
while(!condition)
{
if ((searchArray.length-end) != ("a", "it", "is", "the", "with", "an", "by", "to", "and"))
{
	condition = true;
	searchtext = searchArray.length-end;
	$.ajax({
		url: "https://api.spotify.com/v1/search?q=" + searchtext + "&type=track&market=US",
		cache: false
	}).done(function( results ) {
		mp3 = results['tracks']['items'][0]['preview_url'];
	});
	
}
else
{
	condition = false;
	end++:
}}
