var jQuery = require('jquery');
import fancybox from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.js';
import fancyboxPack from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.pack.js';

//console.log("Fancy-Box initiated!");

// check the page resolution on initial page load and if the browser is resized
$(document).ready(function() {
	// run on initial page load
    checkSize();
    // run on window resize
	$(window).resize(checkSize);
		
		
		
/*	remove this script to global or ?
	var defaultTitle = 'U.S. Energy Information Administration - EIA - Independent Statistics and Analysis',
	titlePrefix = 'EIA';
	// if title is blank
	if( document.title == '' ) {
		var title = titlePrefix,
		titleMMain = $('.title a').text(),
		titleMain = $('.title h1').text(),
		titleSub = $('.subnav .active').text();
		if(titleMain != '') {
			if( titleMMain != '')
			title += ' - ' + titleMMain.substring(titleMMain.indexOf(titleMMain.charAt(1)));
			title += ' - ' + titleMain;
			if(titleSub!= '')
			title += ' - ' + titleSub;
		} else 
		title = defaultTitle;  
		document.title = title;
	}
*/







	/*
	$("#youtube").fancybox({
		'scrolling'		: 'no',
		'titleShow'		: false,
		'onClosed'		: function() {
			$("#login_error").hide();
		}
	});
	*/

	// fancybox lightbox
	// fancybox lightbox
	// fancybox lightbox
	
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




//console.log('search panel toggle script found!');
	$('.search-menu-toggle').click(function() {
		//console.log('toggle class show');
		$('.search-panel').toggleClass('show');
		$('header').toggleClass('show');
		$('.logo').toggleClass('show');
	});

	// shrink / expand header
	// shrink / expand header
	// shrink / expand header

//console.log('header shrink expand script found!');
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 97) {
			$('header').addClass('shrink');
		} else {
			$('header').removeClass('shrink');
		}
	});


	// fancybox tabs
	// fancybox tabs
	// fancybox tabs


	//console.log('handle the fancybox tabs script found!');
	//$(".fancybox-menu").click(function() {
	//	console.log( "Handler for .click() called." );
	//});



	$('.fancybox-menu').click(function () {
  		var target = $(this).data("target");
    	var options = {active : 0};
		switch(target) {
			case 'sources':
			options.active = 0;
			break;
			case 'topics':
			options.active = 1;
			break;
			case 'geography':
			options.active = 2;
			break;
			case 'tools':
			options.active = 3;
			break;
			case 'learn':
			options.active = 4;
			break;
			case 'news':
			options.active = 5;
			break;
			case 'default':
			options.active = 0;
		}
    	$('.section-tabs').tabs(options);
	});


});

function checkSize() {
	console.log('check size initiated in the header.min.js');
	
	//console.log('Browser window opened or resized!');
	$('.search-panel').removeClass('show');
	$('header').removeClass('show');
	$('.logo').removeClass('show');

	// outer wrapper is set as 990px for laptop and desktop
	var elementWidth = $(".l-outer-wrapper").width();


	if ((elementWidth) >= "988") {
		//console.log(elementWidth + " is greater than or equal to 988");
		$(".content").css("margin-top", "0");
	} else if ((elementWidth >= 320) && (elementWidth <= 987)) {
		console.log("no");
		$(".content").css("margin-top", "50px");
	}

	if ((elementWidth) >= "988") {
		//console.log("laptop and desktop header width");
		$('.fancybox-menu').fancybox({
			type: 'inline',
			//scrolling: 'no',
			width: 960,
			margin: [40, 20, 20, 20],
			height: 'auto',
			padding: 0,
			fitToView: false,
			topRatio: 0,
			autoSize: false,
			tpl: {
				closeBtn: '<a title="Close" class="close" href="javascript:;"><i class="ico close">Close</i></a>'
			},
			helpers : {
			//	overlay : {
			//		css : {
			//			'background' : 'rgba(0, 60, 87, 0.7)'
			//		}
			//	},
				afterLoad: function() {
					$('.section-tabs').click(function() {
						$.fancybox.reposition();
					});
				}
			}
		});
	} else if ((elementWidth >= 320) && (elementWidth <= 987)) {
		//console.log("mobile header width");
		console.log("mobile header width equals " + elementWidth);
		$('.fancybox-menu').fancybox({
			padding    		:	0,
			margin     		:	0,
			width			:	'100%',
			//width			:	'elementWidth',
			top				:	0,
			left			:	0,
			scrolling		:	'no',
			height			:	'auto',
			fitToView		:	false,
			autoSize		:	false,
			tpl: {
				closeBtn: '<a title="Close" class="close" href="javascript:;"><i class="ico close">Close</i></a>'
			},
			helpers : {
			//	overlay : {
			//		css : {
			//			'background' : 'rgba(0, 60, 87, 0.7)'
			//		}
			//	},
				afterLoad: function() {
					$('.section-tabs').click(function() {
						$.fancybox.reposition();
					});
				}
			}
		});
	}
}
