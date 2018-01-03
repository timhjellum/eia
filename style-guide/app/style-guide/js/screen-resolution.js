	$(document).ready(function() {
		$(window).resize(function() {
			var ScreenResolution = $(".container").width();
			$("p").text("Screen Resolution: " + ScreenResolution);
		});
	});