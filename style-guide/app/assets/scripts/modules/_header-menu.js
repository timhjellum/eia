//import $ from 'jquery';
import fancybox from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.js';
import fancyboxPack from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.pack.js';


// check the page resolution on initial page load and if the browser is resized
$(document).ready(function() {
	// run on initial page load
    checkSize();
    // run on window resize
	$(window).resize(checkSize);
	


		
		
		
		
/*	remove this script
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






//console.log('search panel toggle script found!');





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
    	$('.page_tabs').tabs(options);
	});


});

function checkSize() {
	//console.log('check size initiated in the header-init.min.js');
	//console.log('Browser window opened or resized!');
	$('.search-panel').removeClass('show');
	$('header').removeClass('show');
	$('.logo').removeClass('show');

	// outer wrapper is set as 990px for laptop and desktop
	var elementWidth = $("#l-outer-wrapper").width();

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
				afterLoad: function() {
					$('.page_tabs').click(function() {
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
				afterLoad: function() {
					$('.page_tabs').click(function() {
						$.fancybox.reposition();
					});
				}
			}
		});
	}
}