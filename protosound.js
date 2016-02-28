
	var inputURL = url.indexOf("q=");
	searchInput = inputURL.substring(startIndex+2);

	var searchArray = searchInput.split("+") || searchInput.split("%20");

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
	end++;
	}}

	var music = mp3;
	var myAudio = new Audio();    
	myAudio.src = "music";
});

////



