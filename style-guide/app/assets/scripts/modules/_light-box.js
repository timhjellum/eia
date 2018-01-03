    //console.log("fancybox lightbox");
    $("a.lightbox").fancybox({
		autoResize      :     false, // To sidestep issue with Highcharts in Fancybox 2 disappearing when the browser is resized -SNW
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
	// For HTML content, since Fancybox 2 now requires specifying IFRAME mode explicitly for non-images
	$("a.lightboxhtml").fancybox({
		type: "iframe",
		fitToView: true,
		autoSize: true
	});