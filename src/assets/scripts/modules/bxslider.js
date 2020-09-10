//import bxslider from "../../../../node_modules/bxslider/dist/jquery.bxslider.min.js";
/* the bxslider is no longer maintained and there is a bug that throws an error when users use the touchscreen. The error shows up in the console only and there's no known issues with the slider. A copy of the bxslider.js with the 'fix' and the file now resides on the global/scripts/bxslider file */
import $ from "jquery";
import bxslider from "./vendor/bxslider/bxslider.js";

class BxSlider {
	constructor() {
		this.arrowControls = $(".bx-controls");

		// run on initial page load
		this.bxSliderHome();
		// run on window resize
		$(window).resize(this.bxSliderHome);
		/*
		if (navigator.userAgent.search("Firefox") >= 0) {
			var ff_version = navigator.userAgent.match(
				/Firefox\/([\d]+\.[\d])+/
			);
			ff_version = parseFloat(ff_version[1]);
			if (ff_version == 0 || ff_version >= 59) {
				$("body").on("mousedown", ".bx-viewport a", function() {
					var ff_link = $(this);
					var ff_href = ff_link.attr("href");
					if (ff_href) {
						location.href = ff_href;
						return false;
					}
				});
			}
		}
*/
		const sliderExists = document.querySelector(".slider-multi");
		if (sliderExists !== null) {
			var mySettings = {
				auto: false,
				//preventDefaultSwipeX: false,
				//preventDefaultSwipeY: true,
				touchEnabled: true,
				wrapperClass: "slider-multi-wrapper",
				nextText: "&#8250;",
				prevText: "&#8249;",
				infiniteLoop: true,
				pager: true,
				pagerSelector: ".slider-multi-pager",
				slideWidth: 154,
				slideMargin: 14,
				onSliderLoad: MultiSliderLoaded()
			};
			var slider = $(".slider-multi ul").bxSlider(mySettings);
			$(window)
				.on("orientationchange resize", function() {
					const footerWidth = $("footer").width();
					const mobileSlideWidth = parseInt(footerWidth - 40); // for left/right peeking
					//const mobileSlideWidth            = parseInt(footerWidth);
					const mobileLandscapeSlideWidth = parseInt((footerWidth - 40) / 2);
					const tabletSlideWidth = parseInt((footerWidth - 40) / 3);
					const tabletLandscapeSlideWidth = parseInt((footerWidth - 40) / 3);
					//const basicTable                  = parseInt(footerWidth - 12);
					//const stickyTable                  = parseInt(footerWidth - 16);

					if (footerWidth > 989) {
						setTimeout(function() {
							$(".bx-controls")
								.addClass("show")
								.removeClass("hide");
							//console.log('footer : ' + footerWidth);
						}, 1000);
					} else if (footerWidth <= 989) {
						setTimeout(function() {
							$(".bx-controls")
								.removeClass("show")
								.addClass("hide");
							//console.log('footer : ' + footerWidth);
						}, 1000);
					}

					if (footerWidth >= 801 && footerWidth <= 987) {
						mySettings.wrapperClass = "slider-multi-wrapper";
						mySettings.minSlides = 4;
						mySettings.maxSlides = 4;
						mySettings.moveSlides = 4;
						mySettings.nextText = "&#8250;";
						mySettings.prevText = "&#8249;";
						mySettings.infiniteLoop = true;
						mySettings.pagerSelector = ".slider-multi-pager";
						mySettings.slideWidth = tabletLandscapeSlideWidth;
						mySettings.slideMargin = 0; // was 10
						mySettings.onSliderLoad = MultiSliderLoaded();
						setTimeout(function() {
							slider.destroySlider();
							slider.reloadSlider(mySettings);
						}, 100);
						$(".slider-multi").css("width", +footerWidth);
						$(".slider-multi-wrapper").css("width", +footerWidth);
						$(".sticky").css("width", +(footerWidth - 12));
						//console.log('Tablet & Landscape - footer width: ' + footerWidth + ', ' + '.slider-multi width: ' + footerWidth + ', ' + '.slider-multi-wrapper width: ' + tabletLandscapeSlideWidth);
					} else if (footerWidth >= 600 && footerWidth <= 800) {
						mySettings.wrapperClass = "slider-multi-wrapper";
						mySettings.minSlides = 3;
						mySettings.maxSlides = 3;
						mySettings.moveSlides = 3;
						mySettings.infiniteLoop = true;
						mySettings.pager = false;
						mySettings.controls = false;
						mySettings.slideWidth = tabletSlideWidth;
						mySettings.slideMargin = 0; // was 10
						mySettings.onSliderLoad = MultiSliderLoaded();
						setTimeout(function() {
							slider.destroySlider();
							slider.reloadSlider(mySettings);
						}, 100);
						$(".slider-multi").css("width", +footerWidth);
						$(".slider-multi-wrapper").css("width", +footerWidth);
						$(".bx-viewport").css("overflow", "visible"); // required for peeking left and right slides
						$(".sticky").css("width", +(footerWidth - 12));
						//console.log('tablet - footer width: ' + footerWidth + ', ' + '.slider-multi width: ' + footerWidth + ', ' + '.slider-multi-wrapper width: ' + tabletSlideWidth);
					} else if (footerWidth >= 450 && footerWidth <= 599) {
						mySettings.wrapperClass = "slider-multi-wrapper";
						mySettings.minSlides = 2;
						mySettings.maxSlides = 2;
						mySettings.moveSlides = 2;
						mySettings.infiniteLoop = true;
						mySettings.pager = false;
						mySettings.controls = false;
						mySettings.slideWidth = mobileLandscapeSlideWidth;
						mySettings.slideMargin = 0; // was 10
						mySettings.onSliderLoad = MultiSliderLoaded();
						setTimeout(function() {
							slider.destroySlider();
							slider.reloadSlider(mySettings);
						}, 100);

						$(".slider-multi").css("width", +footerWidth);
						$(".slider-multi-wrapper").css("width", +footerWidth);
						$(".bx-viewport").css("overflow", "visible"); // required for peeking left and right slides
						$(".sticky").css("width", +(footerWidth - 12));
						//console.log('mobileLandscape - footer width: ' + footerWidth + ', ' + '.slider-multi width: ' + footerWidth + ', ' + '.slider-multi-wrapper width: ' + mobileLandscapeSlideWidth);
					} else if (footerWidth >= 320 && footerWidth <= 449) {
						mySettings.wrapperClass = "slider-multi-wrapper";
						mySettings.minSlides = 1;
						mySettings.maxSlides = 1;
						mySettings.moveSlides = 1;
						mySettings.infiniteLoop = true;
						mySettings.pager = false;
						mySettings.controls = false;
						mySettings.slideWidth = mobileSlideWidth;
						mySettings.slideMargin = 0; // was 10
						mySettings.onSliderLoad = MultiSliderLoaded();
						setTimeout(function() {
							slider.destroySlider();
							slider.reloadSlider(mySettings);
						}, 100);
						$(".slider-multi").css("width", +footerWidth);
						$(".slider-multi-wrapper").css("width", +footerWidth);
						$(".bx-viewport").css("overflow", "visible"); // required for peeking left and right slides
						$(".sticky").css("width", +(footerWidth - 16));
						//console.log('mobile - footer width: ' + footerWidth + ', ' + '.slider-multi width: ' + footerWidth + ', ' + '.slider-multi-wrapper width: ' + mobileSlideWidth);
					} else {
						mySettings.wrapperClass = "slider-multi-wrapper";
						mySettings.minSlides = 5;
						mySettings.maxSlides = 5;
						mySettings.moveSlides = 5;
						mySettings.nextText = "&#8250;";
						mySettings.prevText = "&#8249;";
						mySettings.infiniteLoop = true;
						mySettings.pagerSelector = ".slider-multi-pager";
						mySettings.slideWidth = 154;
						mySettings.slideMargin = 14;
						mySettings.onSliderLoad = MultiSliderLoaded();
						setTimeout(function() {
							slider.destroySlider();
							slider.reloadSlider(mySettings);
						}, 100);
						$(".slider-multi").css("width", "912");
						//console.log("912");
						//console.log('laptop - footer width: ' + footerWidth + ', ' + '.slider-multi width: ' + footerWidth + ', ' + '.slider-multi-wrapper width: ' + footerWidth);
					}
				})
				.trigger("resize"); // on load, trigger the resize event
			// load the slider when it's ready
			function MultiSliderLoaded() {
				$(".slider-multi").addClass("bxslider-visible");
				setTimeout(function() {
					$(".slider-multi-pager").addClass("bxslider-visible");
				}, 1000);
			}
		}
	}
	bxSliderHome() {
		$(".slider-home ul").bxSlider({
			auto: true,
			//preventDefaultSwipeX: false,
			//preventDefaultSwipeY: true,
			touchEnabled: true,
			minSlides: 1,
			maxSlides: 1,
			slideMargin: 0, //integer
			wrapperClass: "slider-home-wrapper",
			autoHover: true,
			controls: false,
			pager: true,
			pagerSelector: ".slider-home-pager",
			slideWidth: 960,
			pause: 10000,
			touchEnabled: false,
			// onLoad
			onSliderLoad: HomeSliderLoaded()
		});
		function HomeSliderLoaded() {
			$(".slider-home").addClass("bxslider-visible");
		}
	}
}
export default BxSlider;
