import fancybox from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.js';
import fancyboxPack from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.pack.js';


class HeaderMenu {
	constructor() {
		this.menuItem = $('.fancybox-menu');
//		$('.fancybox-wrap') = $('.fancybox-wrap');
		this.searchPanel = $('.search-panel');
		this.header = $('header');
		this.footer = $('footer');
		this.logo = $('.logo');	
		this.window = $(window);
		this.checkSize();
		this.events();
		this.openMenu();
	}
	events() {
		this.window.resize(this.checkSize.bind(this));
//		this.menuItem.click(this.openMenu.bind(this));
	}
	openMenu() {
		$('.fancybox-menu').click(function () {
			console.log("clicked");
			var target = $(this).data("target");
			var options = {active : 0};
			switch(target) {
				case 'sources'		:	options.active = 0;
				break;
				case 'topics'		:	options.active = 1;
				break;
				case 'geography'	:	options.active = 2;
				break;
				case 'tools'		:	options.active = 3;
				break;
				case 'learn'		:	options.active = 4;
				break;
				case 'news'			:	options.active = 5;
				break;
				case 'default'		:	options.active = 0;
			}
			$('.section-tabs').tabs(options);
		});


		console.log('Open Menu');
		var viewPortWidth = window.innerWidth;
		var viewPortHeight = window.innerHeight;
		console.log('viewport width is: '+ viewPortWidth + ' and viewport height is:' + viewPortHeight);
		if ((viewPortWidth) > 960) {
			console.log(viewPortWidth + " = laptop and desktop");
//			$('.fancybox-wrap').addClass('fancybox-laptop');
//			$('.fancybox-wrap').removeClass('fancybox-mobile');

			$('.fancybox-menu').fancybox({
				type: 'inline',
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

		} else if ((viewPortWidth) <= 960) {
			console.log(viewPortWidth + " = mobile");
//			$('.fancybox-wrap').addClass('fancybox-mobile');
//			$('.fancybox-wrap').removeClass('fancybox-laptop');

			$('.fancybox-menu').fancybox({
				type: 'inline',
				//width: 960,
				margin: [0, 0, 0, 0],
				height: 'auto',
				padding: 0,
				fitToView: true,
				topRatio: 0,
				autoSize: true,
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
		}

		/*
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
		*/
	}
	checkSize() {
		console.log('Checking size');
		var viewPortWidth = window.innerWidth;
		var viewPortHeight = window.innerHeight;
		console.log('viewport width is: '+ viewPortWidth + ' and viewport height is:' + viewPortHeight);
		if ((viewPortWidth) > 960) {
			console.log(viewPortWidth + " = laptop and desktop");
			$('.fancybox-wrap').addClass('fancybox-laptop');
			$('.fancybox-wrap').removeClass('fancybox-mobile');
		} else if ((viewPortWidth) <= 960) {
			console.log(viewPortWidth + " = mobile");
			$('.fancybox-wrap').addClass('fancybox-mobile');
			$('.fancybox-wrap').removeClass('fancybox-laptop');
		}
	}


/*
		this.searchPanel.removeClass('show');
		this.header.removeClass('show');
		this.logo.removeClass('show');	
		//	$('.search-panel').removeClass('show');
		//	$('header').removeClass('show');
		//	$('.logo').removeClass('show');

		// outer wrapper is set as 990px for laptop and desktop
		var footerWidth = $(".footer").width();

		if ((footerWidth) > 961) {
			console.log(footerWidth + " = laptop and desktop");
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
//			$('.fancybox-wrap').removeClass('fancybox-mobile');
//			$('.fancybox-wrap').addClass('fancybox-desktop');
		} else if ((footerWidth) <= 961) {
			console.log(footerWidth + " = mobile");
			$('.fancybox-menu').fancybox({

				//margin     		:	0,
				width			:	'100%',
				//width			:	'footerWidth',
				top				:	0,
				left			:	0,
				scrolling		:	'no',
				height			:	'auto',
				padding    		:	0,
				fitToView		:	true,
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
//			$('.fancybox-wrap').addClass('fancybox-mobile');
//			$('.fancybox-wrap').removeClass('fancybox-desktop');
		}
	}
	*/
}
export default HeaderMenu;