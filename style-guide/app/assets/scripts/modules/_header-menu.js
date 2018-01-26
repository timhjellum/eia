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
		var fbWidth = 980;

		$('.fancybox-menu').fancybox({
			scrolling: 'visible',
			type: 'inline',
			width: fbWidth,
			autoSize: false, // required for width
			margin: [40, 0, 20, 0],
			height: 'auto',
			padding: 0,
			fitToView: false,
			topRatio: 0,
			autoDimension: false,

			tpl: {
				closeBtn: '<a title="Close" class="close" href="javascript:;"><i class="ico-menu close">Close</i></a>'
			},
			beforeLoad: function () {
				viewPortWidth = window.innerWidth;
				if (viewPortWidth <= fbWidth) {
					this.width = viewPortWidth;
					this.fitToView = true;
				} else {
					this.width = fbWidth;
					this.fitToView = false;
				};
			},
			onUpdate: function onUpdate() {
				if (window.innerWidth <= fbWidth) {
					this.margin = [0, 0, 0, 0];
					this.fitToView = true;
				} else {
					this.margin = [40, 0, 20, 0];
					this.width = fbWidth;
					this.fitToView = false;
				};
				$.fancybox.reposition();
				$('.section-tabs .ui-tabs-anchor').click(function () {
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
	checkSize() {
		console.log('Checking size');
		var viewPortWidth = window.innerWidth;
		var viewPortHeight = window.innerHeight;
		console.log('viewport width is: ' + viewPortWidth + ' and viewport height is:' + viewPortHeight);
		if (viewPortWidth > 960) {
			console.log(viewPortWidth + " = laptop and desktop");
			$('.fancybox-wrap').addClass('fancybox-laptop');
			$('.fancybox-wrap').removeClass('fancybox-mobile');
		} else if (viewPortWidth <= 960) {
			console.log(viewPortWidth + " = mobile");
			$('.fancybox-wrap').addClass('fancybox-mobile');
			$('.fancybox-wrap').removeClass('fancybox-laptop');
		}
	}
}
export default HeaderMenu;