import fancybox from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.js';
import fancyboxPack from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.pack.js';

class FancyBox {
	constructor() {
		this.enlargeImage();
		this.enlargeContent();
		this.enlargeChart();
		this.enlargeSVG();
		this.iFrame();
		this.iFrameFullWidth();
		this.iFrameScrollTo();
		this.legacy();
		this.fancyBoxInlineTrigger = $('.inline-content-trigger');
		//this.events();
	}

	enlargeImage() {
		$('.enlarge-image').fancybox({
			padding: 0,
			//closeClick: true,
			closeBtn: true,
			scrolling: false,
			tpl: {
				closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><span class="ico close"><span>Close</span></span></a>'
			},
		});
	}

	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	/* $$$$$                  enlarge chart                  $$$$$ */
	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	
	enlargeChart() {	
		$('.enlarge-chart').click(function(event) {
			event.preventDefault();
		});
		$(".enlarge-chart").fancybox({
			fitToView	: true,
			width		: '70%',
			height		: 'auto',
			autoSize	: false,
			openEffect	: 'none',
			closeEffect	: 'none',
			afterShow : function() {
				$(this.href).highcharts().reflow();
				//chartInnerContainer.highcharts().reflow();
				return;
			},
			afterClose: function () {
				$(this.href).css('display','block');
				$(this.href).highcharts().reflow();
				return;
			}
		});
	}
	
	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	/* $$$$$                  enlarge svg                $$$$$ */
	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	
	/*
	enlargeSVG() {	
		$('.enlarge-svg').click(function(event) {
			event.preventDefault();
		});
		$('.enlarge-svg').fancybox({
			fitToView	: true,
			width		: '70%',
			height		: 'auto',
			autoSize	: false,
			openEffect	: 'none',
			closeEffect	: 'none',
		});
	}
	*/
	enlargeSVG() {	
		$('.enlarge-svg').click(function(event) {
			//var elementID 	= 	$(this).attr('id');
			//var modalWidth 	=	$(this).attr('modal-width');
			//var modalHeight = 	$(this).attr('modal-height');
			var modalHREF 	= 	$(this).attr('href');
			event.preventDefault();
			//alert(modalWidth + ', ' + modalHeight + ', ' + modalHREF);
			$('.enlarge-svg').fancybox({
				fitToView	: true,
				//width		: modalWidth,
				//height	: modalHeight,
				width		: '70%',
				height		: 'auto',
				autoSize	: false,
				openEffect	: 'none',
				closeEffect	: 'none',
				/*
				beforeLoad: function() {
					this.width 		= modalWidth;
					this.height 	= modalHeight;
					return;
				},
				*/
				afterClose: function() {
					$(modalHREF).css('display','block');
					//console.log("closed");
					return;
				}
			});
		});
	}

	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	/* $$$$$                  enlarge content                $$$$$ */
	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	
	enlargeContent() {
		var viewPortWidth = window.innerWidth;
		//var fancyBoxWidth = 'auto';
		$('.enlarge-content').fancybox({
			type: 'inline',
			padding: 0,
			margin: [40, 0, 20, 0],
			height: 'auto',
			padding: 0,
			fitToView: false,
			closeBtn: true,
			scrolling: false,
			tpl: {
				closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><span class="ico close"><span>Close</span></span></a>'
			},
			beforeLoad: function() {
				viewPortWidth = window.innerWidth;
				//console.log(viewPortWidth)
				if (viewPortWidth <= 599) {
					//his.width = viewPortWidth;
					this.fitToView = true;
					this.margin = [0, 0, 0, 0];
				} else {
					//this.width = fancyBoxWidth;
					this.fitToView = false;
				};
			}
		});
	}

	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	/* $$$$$                      iframe                     $$$$$ */
	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	
	iFrame() {
		var viewPortWidth = window.innerWidth;
		//var viewPortHeight = window.innerHeight;
		var fancyBoxWidth = 980;
		$('.iframe').click(function(event) {

			var target = $(this).attr('href');   
			$.fancybox({
				href: target,
				//scrolling: 'true',
				scrolling: 'no',  
				type: 'iframe',
				width: fancyBoxWidth,
				autoSize: false, // required for width
				margin: [40, 0, 20, 0],
				height: 'auto',
				padding: 0,
				fitToView: false,
				topRatio: 0,
				autoDimension: false,
				overlayShow: false,
				tpl: {
					closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><span class="ico close"><span>Close</span></span></a>'
				},
				beforeLoad: function() {
					viewPortWidth = window.innerWidth;
					if (viewPortWidth <= fancyBoxWidth) {
						this.width = viewPortWidth;
						this.fitToView = true;
					} else {
						this.width = fancyBoxWidth;
						this.fitToView = false;
					};
				}
				/*,
				onComplete: function() {
					$('.fancybox-iframe').load(function() { // wait for frame to load and then gets it's height
						//$('.fancybox-inner').height($(this).contents().find('body').height()+30);
						//console.log($('.fancybox-iframe body').height());
					});
				}
				*/
			});

			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			//console.log(target);
			event.preventDefault();
		});
	}

	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	/* $$$$$                iFrame Full-Width                $$$$$ */
	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	
	iFrameFullWidth() {
		$('.iframe-full-width').click(function(event) {
			var target = $(this).attr('href');
			$.fancybox({
				href: target,
				scrolling: 'yes',
				type: 'iframe',
				width: '100%',
				autoSize: false, 
				margin: [0, 0, 0, 0],
				height: 'auto',
				padding: 0,
				fitToView: false,
				topRatio: 0,
				autoDimension: false,
				overlayShow: false,
				tpl: {
					closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><span class="ico close"><span>Close</span></span></a>'
				},
				iframe: {
					preload: false
				}
			});
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			event.preventDefault();
			//var iFrameHeight = $('.fancybox-inner').height();
			//$('iframe').css('height', iFrameHeight);
		});
	}

	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	/* $$$$$                  iframe ScrollTo                $$$$$ */
	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */

	iFrameScrollTo() {
		const iFrameWidth = ($('footer').width() - 60);
		$('.scroll-to-iframe').click(function(event) {
			var target = $(this).attr('href');
			$.fancybox({
				href: target,
				scrolling: 'yes',
				type: 'iframe',
				width: iFrameWidth,
				autoSize: false, 
				margin: [0, 0, 0, 0],
				height: 'auto',
				padding: 0,
				fitToView: false,
				topRatio: 0,
				autoDimension: false,
				overlayShow: false,
				tpl: {
					closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><span class="ico close"><span>Close</span></span></a>'
				},
				iframe: {
					preload: false
				}
			});
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			event.preventDefault();
			var iFrameHeight = $('.fancybox-inner').height();
			$('iframe').css('height', iFrameHeight);
		});
	}

	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	/* $$$$$                      Legacy                     $$$$$ */
	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */

	legacy() {
		$('.image-modal').click(function() {
			console.log('please update class name to enlarge-image');
		});
		$('.lightbox').click(function() {
			console.log('please update fancybox');
		});
		$('.lightboxhtml').click(function() {
			console.log('please update fancybox');
		});
		$('#youtube').click(function() {
			console.log('please update fancybox');
		});
		$('button.lightbox').click(function() {
			console.log('please update fancybox');
		});
	}
}
export default FancyBox;