$(document).ready(function() {
	var audioArray = document.getElementsByClassName("playsong");
	var nowPlaying = audioArray[i=0];
	nowPlaying.load();





	$(".play").on("click", function() {
		nowPlaying.play();
	})
	$(".play").on("click", function() {
		$(".stop").removeClass("stopactive");
		$(".play").addClass("playactive");
	})
	


	$(".stop").on("click", function() {
		nowPlaying.pause();
	})
	$(".stop").on("click", function() {
		$(".play").removeClass("playactive");
		$(".stop").addClass("stopactive");
	})



	$(".next").on("click", function() {
		$.each($("audio.playsong"), function() {
					this.pause();
				});
				++i;
				nowPlaying = audioArray[i];
				nowPlaying.load();
				nowPlaying.play();
	})
	$(".last").on("click", function() {
		$.each($("audio.playsong"), function() {
					this.pause();
				});
				--i;
				nowPlaying = audioArray[i];
				nowPlaying.load();
				nowPlaying.play();
	})

});
