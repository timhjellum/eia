//import $ from 'jquery';
import fancybox from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.js';
import fancyboxPack from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.pack.js';

// check the page resolution on initial page load and if the browser is resized
$(document).ready(function() {
	// run on initial page load
    checkSize();
    // run on window resize
	$(window).resize(checkSize);

	console.log("dilly dilly");

	$('.fancybox-menu').click(function () {
		console.log("clicked");
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
	console.log('Browser window opened or resized!');
	$('.search-panel').removeClass('show');
	$('header').removeClass('show');
	$('.logo').removeClass('show');

	// outer wrapper is set as 990px for laptop and desktop
	var layoutWrapperWidth = $(".l-outer-wrapper").width();

	if ((layoutWrapperWidth) >= "988") {
		console.log(layoutWrapperWidth + " = laptop and desktop");
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
	} else if ((layoutWrapperWidth >= 320) && (layoutWrapperWidth <= 987)) {
		console.log(layoutWrapperWidth + " = mobile");
		$('.fancybox-menu').fancybox({
			padding    		:	0,
			margin     		:	0,
			width			:	'100%',
			//width			:	'layoutWrapperWidth',
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