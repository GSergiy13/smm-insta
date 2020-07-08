$(function() {
	$("section h1, section h2, section h3, section h4, section p").animated("fadeInUp", "fadeInUp");
	$("section button, section a, section img").animated("flipInY", "flipInY");



	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
