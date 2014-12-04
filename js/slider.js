// Set global variables to keep track of which image slider is on and which image is the next to move to
var sliderInt = 1;
var sliderNext = 2;


$(document).ready( function() {
	// Fade in the first image and start the slider animation with the startSlider function
	$("#slider > img#1").fadeIn(1000);
	startSlider()
});

function startSlider() {
	// loop through each image in the slider div and save the total amount of images into a variable called count
	count = $("#slider > img").size();
	// create a function called setInterval and save it to a variable called loop
	loop = setInterval(function() {
		// When you get to the last image included in the count variable reset so that the loop restarts at the first image
		if (sliderNext > count) {
			sliderNext = 1;
			sliderInt = 1;
		}
		// create fade in and fade out effects when looping from image to image
		$("#slider > img").fadeOut(1000);
		$("#slider > img#" + sliderNext).fadeIn(1000);

		// add the count of sliderNext variable to the sliderInt variable and then 
		// add 1 to the sliderNext variable so that if sliderInt is equal to 1 it will be replaced with 
		// sliderNext which is equal to 2. then add 1 to sliderNext so that sliderNext now equals 3 in the count
		sliderInt = sliderNext;
		sliderNext = sliderNext + 1;
		// implement the setInterval function to rotate images over 3 second intervals
	}, 8000)
}

function prev() {
	var newSlide = sliderInt -1;
	showSlide(newSlide);

}

function next() {
	var newSlide = sliderInt +1;
	showSlide(newSlide);
}

function stopLoop() {
	window.clearInterval(loop);
}

function showSlide(id) {
	stopLoop();
	if (id > count) {
		id = 1;
	} else if (id < 1) {
		id = count;
	}
	$("#slider > img").fadeOut(1000);
	$("#slider > img#" + id).fadeIn(1000);

	sliderInt = id;
	sliderNext = id + 1;

	startSlider();
}



$("#slider > img").hover(function() {
	stopLoop();
}, function() {
	startSlider();
});
