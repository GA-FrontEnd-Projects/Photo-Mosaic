$(document).ready(function(){
	
	var key = 'dc2498ad3e413bde8dc546a8013c3736';

	$('#search-form').submit(function(e){
		//by default, submitting a form reloads the page. "e" represents the
		//event, and it is automatically passed into the event handler function.
		//preventDefault() keeps the default browser behavior from happening.
		e.preventDefault();

		// change the value below to whatever happens to be in the search box
		var text = null;

		//prevent the user from searching unless there is text in the text box
		//if() {

		//if there is text in the box, go ahead and search. I've filled out most
		//of this for you, but you will need to insert the api key and search text
		//(as the value for the "tags" parameter) in the url. Check the Flickr API
		//docs for the photos.search method to see which parameters you need to add to
		//the URL to accomplish this

		$.getJSON('http://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&per_page=50&content_type=1&jsoncallback=?', successCallback);
		
		// } else {
			//create an alert box that lets the user know he/she needs to enter text
		//}
	});

	function successCallback(data) {
		//log the variable "data" to the console to see what the object looks like

		//now loop through the photos and add markup to the DOM. Read the
		//directions.txt doc included in the project for guidance. Grab the "q"
		//version of each photo.
		var photos = null;

		//initialize the html string so we can build on it in the loop
		var markup = '';

		//assemble your markup 
		//for() {
			//construct the photo url
			
			//log it to the console and try to visit
			//it in the browser to make sure it works
			
			//add a div with a class of "tile" and your new image tag to the markup string
			
		//}

		//replace any existing markup in #tiles with the new markup we just created
		
	}

});