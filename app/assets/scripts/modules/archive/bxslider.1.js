import $ from 'jquery';
import bxslider from '../../../../node_modules/bxslider/dist/jquery.bxslider.min.js';

class BxSlider {
	constructor() {
        this.bxSliderHome = $('.slider-home ul');
        this.bxSliderMulti = $('.slider-multi ul');
        this.bxSliderHomeWrapper = $('.slider-home-wrapper');
        this.bxSlidermultiWrapper = $('.slider-multi-wrapper');
		this.window = $(window);
        this.checkSize();
        this.events();
    }
	events() {
        //$(window).resize(this.checkSize);

        setTimeout(function() {
            $(".slider-multi").addClass("bxslider-visible");
            console.log("visible");
        }, 2000);
        this.bxSliderHome.show();
        this.bxSliderMulti.show();
        this.bxSliderHome.bxSlider({
            auto: true,
            minSlides: 1,
            maxSlides: 1,
            slideMargin: 0,  //integer
            wrapperClass: 'slider-home-wrapper',
            autoHover: true,
            controls: false,
            pager: true,
            pagerSelector: '.slider-home-pager',
            slideWidth: 960,
            pause: 10000
        });

        // Returns a function, that, as long as it continues to be invoked, will not
        // be triggered. The function will be called after it stops being called for
        // N milliseconds. If `immediate` is passed, trigger the function on the
        // leading edge, instead of the trailing.
        
        function debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        };
        var myEfficientFn = debounce(function() {
            console.log("resized");
            
        }, 250);       
        window.addEventListener('resize', myEfficientFn);

    }
    checkSize() {
        console.log("check size");
        var footerWidth = $('footer > div').width();
        console.log("footer > div: " + footerWidth);
        if ((footerWidth >= 801) && (footerWidth <= 987)) {
            // element width / number of slides
            var tabletLandscapeSlideWidth = parseInt(footerWidth/4);
            console.log("tablet-landscape slide width: " + tabletLandscapeSlideWidth);
            this.bxSliderMulti.bxSlider({
                auto: false,
                wrapperClass: 'slider-multi-wrapper',
                minSlides: 4,
                maxSlides: 4,
                moveSlides: 4,
                nextText: '&#8250;',
                prevText: '&#8249;',
                infiniteLoop: true,
                pager: true,
                pagerSelector: '.slider-multi-pager',
                slideWidth: tabletLandscapeSlideWidth,
                slideMargin: 10
            });  
        } else if ((footerWidth >= 600) && (footerWidth <= 800)) {
            // element width / number of slides
            var tabletSlideWidth = parseInt((footerWidth - 60)/3);
            console.log("tablet slide width: " + tabletSlideWidth);
            this.bxSliderMulti.bxSlider({
                auto: false,
                wrapperClass: 'slider-multi-wrapper',
                minSlides: 3,
                maxSlides: 3,
                moveSlides: 3,
                nextText: '&#8250;',
                prevText: '&#8249;',
                infiniteLoop: true,
                pager: false,
                controls: false,
                pagerSelector: '.slider-multi-pager',
                slideWidth: tabletSlideWidth,
                slideMargin: 10
            });
            $(".bx-viewport").css("overflow", "visible"); // required for peeking left and right slides
        } else if ((footerWidth >= 450) && (footerWidth <= 599)) {
            // element width / number of slides
            var mobileLandscapeSlideWidth = parseInt((footerWidth - 60)/2);
            console.log("mobile landscape slide width: " + mobileLandscapeSlideWidth);
            this.bxSliderMulti.bxSlider({
                auto: false,
                wrapperClass: 'slider-multi-wrapper',
                minSlides: 2,
                maxSlides: 2,
                moveSlides: 2,
                nextText: '&#8250;',
                prevText: '&#8249;',
                infiniteLoop: true,
                pager: false,
                controls: false,
                pagerSelector: '.slider-multi-pager',
                slideWidth: mobileLandscapeSlideWidth,
                slideMargin: 10
            });
            $(".bx-viewport").css("overflow", "visible"); // required for peeking left and right slides
        } else if ((footerWidth >= 320) && (footerWidth <= 449)) {
            // element width / number of slides
            var mobileSlideWidth = parseInt(footerWidth - 40);
            console.log("mobile slide width: " + mobileSlideWidth);
            this.bxSliderMulti.bxSlider({
                auto: false,
                startSlide: 1,
                wrapperClass: 'slider-multi-wrapper',
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 1,
                infiniteLoop: true,
                pager: false,
                controls: false,
                slideWidth: mobileSlideWidth,
                //slideWidth: footerWidth,
                slideMargin: 10
            });
            $(".bx-viewport").css("overflow", "visible"); 
        } else  {
            console.log("laptop and everything larger");
            this.bxSliderMulti.bxSlider({
                auto: false,
                wrapperClass: 'slider-multi-wrapper',
                minSlides: 5,
                maxSlides: 5,
                moveSlides: 5,
                nextText: '&#8250;',
                prevText: '&#8249;',
                infiniteLoop: true,
                //pager: true,
                pagerSelector: '.slider-multi-pager',
                slideWidth: 154,
                slideMargin: 14
            });
        }
    }
}
export default BxSlider;
