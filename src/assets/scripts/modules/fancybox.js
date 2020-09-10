import $ from "jquery"

import fancybox from "../../../../node_modules/fancybox/dist/js/jquery.fancybox.js"
import fancyboxPack from "../../../../node_modules/fancybox/dist/js/jquery.fancybox.pack.js"
//require("../../../node_modules/fancybox/dist/js/jquery.fancybox.js");
//require("../../../node_modules/fancybox/dist/js/jquery.fancybox.pack.js");

class FancyBox {
	constructor() {
		this.enlargeImage()
		this.enlargeContent()
		this.enlargeChart()
		this.iFrame()
		this.iFrameFullWidth()
		this.fancyBoxInlineTrigger = $(".inline-content-trigger")
	}
	enlargeImage() {
		$(".enlarge-image").fancybox({
			padding: 0,
			closeBtn: true,
			scrolling: false,
			tpl: {
				closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><span class="ico close"><span>Close</span></span></a>'
			}
		})
	}
	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	/* $$$$$                  enlarge chart                  $$$$$ */
	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	enlargeChart() {
		$(".enlarge-chart").click(function (event) {
			event.preventDefault()
		})
		$(".enlarge-chart").fancybox({
			fitToView: true,
			width: "70%",
			height: "auto",
			autoSize: false,
			openEffect: "none",
			closeEffect: "none",
			afterShow: function () {
				$(this.href).highcharts().reflow()
				return
			},
			afterClose: function () {
				$(this.href).css("display", "block")
				$(this.href).highcharts().reflow()
				return
			}
		})
	}
	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	/* $$$$$                 enlarge content                 $$$$$ */
	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	enlargeContent() {
		var viewPortWidth = window.innerWidth
		//var fancyBoxWidth = 'auto';
		$(".enlarge-content").fancybox({
			type: "inline",
			padding: 0,
			margin: [40, 0, 20, 0],
			height: "auto",
			padding: 0,
			fitToView: false,
			closeBtn: true,
			scrolling: false,
			tpl: {
				closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><span class="ico close"><span>Close</span></span></a>'
			},
			beforeLoad: function () {
				viewPortWidth = window.innerWidth
				//console.log(viewPortWidth);
				if (viewPortWidth <= 599) {
					//his.width = viewPortWidth;
					this.fitToView = true
					this.margin = [0, 0, 0, 0]
				} else {
					//this.width = fancyBoxWidth;
					this.fitToView = false
				}
			}
		})
	}
	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	/* $$$$$                      iframe                     $$$$$ */
	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	iFrame() {
		var viewPortWidth = window.innerWidth
		var viewPortHeight = window.innerHeight - 150
		//console.log(viewPortHeight);
		var fancyBoxWidth = 980
		$(".iframe").click(function (event) {
			var target = $(this).attr("href")
			$.fancybox({
				href: target,
				//scrolling: 'true',
				scrolling: "no",
				type: "iframe",
				width: fancyBoxWidth,
				autoSize: false, // required for width
				margin: [40, 0, 20, 0],
				height: viewPortHeight,
				padding: 0,
				fitToView: false,
				topRatio: 0,
				autoDimension: false,
				overlayShow: false,
				tpl: {
					closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><span class="ico close"><span>Close</span></span></a>'
				},
				beforeLoad: function () {
					viewPortWidth = window.innerWidth
					if (viewPortWidth <= fancyBoxWidth) {
						this.width = viewPortWidth
						this.fitToView = true
					} else {
						this.width = fancyBoxWidth
						this.fitToView = false
					}
				},
				onComplete: function () {
					$(".fancybox-iframe").load(function () {
						// wait for frame to load and then gets it's height
						//$('.fancybox-inner').height($(this).contents().find('body').height()+30);
						//console.log($('.fancybox-iframe body').height());
					})
				}
			})

			target = target.length ? target : $("[name=" + this.hash.slice(1) + "]")
			//console.log(target);
			event.preventDefault()
		})
	}
	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	/* $$$$$                      iframe                     $$$$$ */
	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	/*
	iFramePrint() {
		var viewPortWidth = window.innerWidth;

		var fancyBoxWidth = 816; // 816 = 8.5 inches
		$(".iframe-print").click(function (event) {
			var target = $(this).attr("href");
			$.fancybox({
				href: target,
				//scrolling: 'true',
				scrolling: "no",
				type: "iframe",
				width: fancyBoxWidth,
				autoSize: false, // required for width
				margin: [40, 0, 20, 0],
				height: "80%",
				padding: 0,
				fitToView: false,
				topRatio: 0,
				autoDimension: false,
				overlayShow: false,
				tpl: {
					closeBtn:
						'<a title="Close" class="close-menu" href="javascript:;"><span class="ico close"><span>Close</span></span></a>',
				},
				beforeLoad: function () {
					viewPortWidth = window.innerWidth;
					if (viewPortWidth <= fancyBoxWidth) {
						this.width = viewPortWidth;
						this.fitToView = true;
					} else {
						this.width = fancyBoxWidth;
						this.fitToView = false;
					}
				},
			});
			target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
			//console.log(target);
			event.preventDefault();
		});
	}
	*/
	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
	/* $$$$$                      iframe                     $$$$$ */
	/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */

	iFrameFullWidth() {
		//const iFrameWidth = ($('footer').width() - 60);
		$(".iframe-full-width").click(function (event) {
			var target = $(this).attr("href")
			$.fancybox({
				href: target,
				scrolling: "yes",
				type: "iframe",
				width: "100%",
				autoSize: false,
				margin: [0, 0, 0, 0],
				height: "auto",
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
			})
			target = target.length ? target : $("[name=" + this.hash.slice(1) + "]")
			event.preventDefault()
			//var iFrameHeight = $('.fancybox-inner').height();
			//$('iframe').css('height', iFrameHeight);
		})
	}

	iFrameScrollTo() {
		var viewPortWidth = window.innerWidth
		var viewPortHeight = window.innerHeight - 150
		console.log(viewPortHeight)
		var fancyBoxWidth = 980
		$(".iframe").click(function (event) {
			event.preventDefault()
		})
		$(".iframe").fancybox({
			type: "iiframe",
			width: fancyBoxWidth,
			autoSize: false, // required for width
			margin: [40, 0, 20, 0],
			height: viewPortHeight,
			padding: 0,
			fitToView: false,
			closeBtn: true,
			scrolling: true,
			autoDimension: false,
			tpl: {
				closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><span class="ico close"><span>Close</span></span></a>'
			},
			beforeLoad: function () {
				viewPortWidth = window.innerWidth
				if (viewPortWidth <= fancyBoxWidth) {
					this.width = viewPortWidth
					this.fitToView = true
				} else {
					this.width = fancyBoxWidth
					this.fitToView = false
				}
			}
		})
	}
	/*
	legacy() {
		$(".image-modal").click(function () {
			console.log("please update class name to enlarge-image");
		});
		$(".lightbox").click(function () {
			console.log("please update fancybox");
		});
		$(".lightboxhtml").click(function () {
			console.log("please update fancybox");
		});
		$("#youtube").click(function () {
			console.log("please update fancybox");
		});
		$("button.lightbox").click(function () {
			console.log("please update fancybox");
		});
	}

	events() {
		this.fancyBoxInlineTrigger.click(this.fancyBoxInlineContent());
		$('.inline-content-trigger').on('click', function(event) {
			var $this = $(this); 
			var elementWidth = $this.attr("data-width");
			var elementHeight = $this.attr("data-height");
			//console.log('element width is :' + elementWidth + ', element height is :' + elementHeight);
			event.preventDefault(); 
		});  
	   $('.inline-content').fancybox({
			type: 'inline',
			tpl: {
				closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><i class="ico close"><span>Close</span></i></a>'
			},
		});
	}
	*/
}
export default FancyBox
