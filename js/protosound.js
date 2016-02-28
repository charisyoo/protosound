chrome.runtime.onMessage.addListener(
	function(request,sender,senderResponse) {
	console.log(sender.tab ?
			"from a content script:" + sender.tab.url :
			"from the extension");
	var inputURL = requst.greeting;
	var startIndex = inputURL.indexOf("q=");
	searchInput = inputURL.substring(startIndex+2); //Create substring of search terms

	var searchArray = searchInput.split("+") || searchInput.split("%20"); //Converts to array at '+' signs

	var end = 1;
	var sendUrl;
	while(!condition)
	{

	if ((searchArray.length-end) != ("a", "it", "is", "the", "with", "an", "by", "to", "and"))
	{
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

	music = mp3;
	var myAudio = new Audio();    
	myAudio.src = "https://p.scdn.co/mp3-preview/2698b29837bdc2531324f0ab612572991b8a647d"; 			
	myAudio.play();  
});




