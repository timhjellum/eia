import fancybox from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.js';
import fancyboxPack from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.pack.js';

class HeaderMenu {
	constructor() {
		this.menuItem = $('.fancybox-menu');
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
		console.log('viewport width is: ' + viewPortWidth + ' and viewport height is:' + viewPortHeight);
		if (viewPortWidth > 960) {
			console.log(viewPortWidth + " = laptop and desktop");
			$('.fancybox-menu').fancybox({
				scrolling: 'visible',
				type: 'inline',
				width: 980,
				autoSize: false, // required for width
				margin: [40, 0, 20, 0],
				height: 'auto',
				padding: 0,
				fitToView: false,
				topRatio: 0,
				autoDimension: false,

				tpl: {
					closeBtn: '<a title="Close" class="close" href="javascript:;"><i class="ico close">Close</i></a>'
				},
				onUpdate: function () {
					if (window.innerWidth <= 960) {
						console.log("inside the if!");
						$.fancybox.toggle();
					};
					$('.section-tabs .ui-tabs-anchor').click(function () {
						console.log(viewPortWidth);
						console.log("clicked tab item");
						$.fancybox.update();
					});
				},
				helpers: {
					overlay: {
						locked: true // try changing to true and scrolling around the page
					}
				}
			});
		} else if (viewPortWidth <= 960) {
			console.log(viewPortWidth + " = mobile");

			$('.fancybox-menu').fancybox({
				scrolling: 'visible',
				type: 'inline',
				margin: [0, 0, 0, 0],
				height: '100%',
				width: 'auto',
				autoSize: true, // required for width
				padding: [0, 0, 40, 0],
				fitToView: true,
				//autoDimension: false,
				topRatio: 0,
				//autoWidth: true,
				//autoSize: true,
				tpl: {
					closeBtn: '<a title="Close" class="close" href="javascript:;"><i class="ico close">Close</i></a>'
				},
				onUpdate: function afterLoad() {
					$('.section-tabs .ui-tabs-anchor').click(function () {
						console.log("clicked tab item");
						$.fancybox.update();
					});
				},
				helpers: {
					overlay: {
						locked: true // try changing to true and scrolling around the page
					}
				}
			});
		}
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
}
export default HeaderMenu;