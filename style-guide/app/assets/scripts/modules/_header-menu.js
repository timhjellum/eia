	//import $ from 'jquery';
	import fancybox from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.js';
	import fancyboxPack from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.pack.js';


class HeaderMenu {
	constructor() {
		this.menuItem = $('.fancybox-menu');
		this.menuWrapper = $('.fancybox-wrap');
		this.searchPanel = $('.search-panel');
		this.header = $('header');
		this.footer = $('footer');
		this.logo = $('.logo');	
		this.window = $(window);
		this.checkSize();
		this.events();
	}
	// check the page resolution on initial page load and if the browser is resized
	//	$(document).ready(function() {
	// run on initial page load
	//checkSize();
	// run on window resize
	//	$(window).resize(checkSize);

	events() {
		
		//this.window.resize(checkSize);
		this.window.resize(this.checkSize.bind(this));
		this.menuItem.click(this.openMenu.bind(this));
		//var btb = document.getElementByClass('fancybox-menu');
		
		//btn.addEventListenerByClass('click', function () {
		
		//$('.fancybox-menu').click(function () {

		//});
	}
	//	});

openMenu() {
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
	$('.section-tabs').tabs(options);
}




checkSize() {
	console.log('Browser window opened or resized!');
	this.searchPanel.removeClass('show');
	this.header.removeClass('show');
	this.logo.removeClass('show');	
	//	$('.search-panel').removeClass('show');
	//	$('header').removeClass('show');
	//	$('.logo').removeClass('show');

		// outer wrapper is set as 990px for laptop and desktop
		var layoutWrapperWidth = $("footer").width();

		if ((layoutWrapperWidth) >= 961) {
			console.log(layoutWrapperWidth + " = laptop and desktop");
			$('.fancybox-menu').fancybox({
				type: 'inline',
				//scrolling: 'no',
				width: 960,
				margin: [40, 20, 20, 10],
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
						$('.section-tabs').click(function() {
							$.fancybox.reposition();
						});
					}
				}
			});
			this.menuWrapper.removeClass('fancybox-mobile');
			this.menuWrapper.addClass('fancybox-desktop');
		} else if ((layoutWrapperWidth >= 320) && (layoutWrapperWidth <= 960)) {
			console.log(layoutWrapperWidth + " = mobile");
			$('.fancybox-menu').fancybox({

				//margin     		:	0,
				width			:	'100%',
				//width			:	'layoutWrapperWidth',
				top				:	0,
				left			:	0,
				scrolling		:	'no',
				height			:	'auto',
				padding    		:	0,
				fitToView		:	false,
				autoSize		:	false,
				tpl: {
					closeBtn: '<a title="Close" class="close" href="javascript:;"><i class="ico close">Close</i></a>'
				},
				helpers : {
					afterLoad: function() {
						$('.section-tabs').click(function() {
							$.fancybox.reposition();
						});
					}
				}
			});
			this.menuWrapper.addClass('fancybox-mobile');
			this.menuWrapper.removeClass('fancybox-desktop');
		}
	}
}
export default HeaderMenu;