var startIndex = url.indexOf("q=");
var searchInput = url.substring(startIndex+2);

var searchArray = searchInput.split("+") || searchInput.split("%20");

alert(searchArray);

var mp3;
var end = 1;
var condition = false;
while(condition == false)
{
	console.log("Test");
	if ((searchArray[searchArray.length-end]) = ("a", "it", "is", "the", "with", "an", "by", "to", "and"))
	{
		condition = false;
		end++;
	}
	else
	{
		condition = true;
		var searchtext = searchArray[searchArray.length-end]
		var url = ("https://api.spotify.com/v1/search?q=" + searchtext + "&type=track&market=US");
		$.get( url, function( data ) {
  			alert( "Load was performed." );
		    mp3 = data['tracks']['items'][0]['preview_url'];
		});
	}
}

var music = mp3;
var myAudio = new Audio();    
myAudio.src = "music"; 			
myAudio.play();  




