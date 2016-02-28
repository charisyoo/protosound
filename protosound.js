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

	document.write("");
document.write('<button onclick=\"myFunction()\">Try it<\/button>');
document.write("");
document.write("<script>");
document.write("function myFunction() {");
document.write('window.open(\"http:\/\/www.w3schools.com\");');
document.write("}");
document.write("<\/script>");
document.write("");
document.write("");


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
//

document.write("");
document.write('<audio controls autoplay><source src=\"https:\/\/p.scdn.co\/mp3-preview\/2698b29837bdc2531324f0ab612572991b8a647d\" type=\"audio\/mpeg\"><\/audio>');
document.write("");


