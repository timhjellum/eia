
//import bxslider from '../../../../node_modules/bxslider/dist/jquery.bxslider.min.js';
/* the bxslider is no longer maintained and there is a bug that throws an error when users use the touchscreen. The error shows up in the console only and there's no known issues with the slider. A copy of the bxslider.js with the 'fix' and the file now resides on the global/scripts/bxslider file */
import bxslider from './vendor/bxslider/bxslider.js';

class BxSlider {
    constructor() {

        this.bxSliderHomeWrapper = $('.slider-home-wrapper');
        this.bxSlidermultiWrapper = $('.slider-multi-wrapper');

        // run on initial page load
        this.bxSliderHome();
        // run on window resize
        $(window).resize(this.bxSliderHome);
        // run on initial page load
        this.bxSliderMulti();
        // run on window resize

        //        $(window).resize(this.bxSliderMulti);
        $(window).on('orientationchange resize', function() {
            this.bxSliderMulti
              console.log(window.orientation);
        });
    }

    bxSliderHome() {
        $('.slider-home ul').bxSlider({
            auto: true,
            minSlides: 1,
            maxSlides: 1,
            slideMargin: 0, //integer
            wrapperClass: 'slider-home-wrapper',
            autoHover: true,
            controls: false,
            pager: true,
            pagerSelector: '.slider-home-pager',
            slideWidth: 960,
            pause: 10000,
            // onLoad
            onSliderLoad: bxSliderLoaded()
        });
        // load the slider when it's ready
        function bxSliderLoaded() {
            console.log('Loaded - show slides');
            $('.slider-home').addClass('bxslider-visible');
        }
    }

    bxSliderMulti() {

        if ((footerWidth >= 801) && (footerWidth <= 987)) {
            $('.slider-multi ul').bxSlider(tabletLandscape);
            console.log(tabletLandscape);
        } else if ((footerWidth >= 600) && (footerWidth <= 800)) {
            $('.slider-multi ul').bxSlider(tablet);
            $('.page-wrapper').css('width', + footerWidth);
            $(".bx-viewport").css("overflow", "visible"); // required for peeking left and right slides
            console.log(tablet);
        } else if ((footerWidth >= 450) && (footerWidth <= 599)) {
            $('.slider-multi ul').bxSlider(mobileLandscape);
            $('.page-wrapper').css('width', + footerWidth);
            $(".bx-viewport").css("overflow", "visible"); // required for peeking left and right slides
            console.log(mobileLandscape);
        } else if ((footerWidth >= 320) && (footerWidth <= 449)) {
            $('.slider-multi ul').bxSlider(mobile);
            $('.page-wrapper').css('width', + footerWidth);
            $(".bx-viewport").css("overflow", "visible"); // required for peeking left and right slides
            console.log(mobile);
        } else {
            $('.slider-multi ul').bxSlider(laptop);
            console.log(laptop);
        };
        // load the slider when it's ready
        function bxSliderLoaded() {
            console.log('Loaded - show slides');
            $('.slider-multi').addClass('bxslider-visible');
        }

        console.log('footer Width: ' + footerWidth);
        console.log('mobile / slide width: ' + mobileSlideWidth);
        console.log('mobile landscape / slide width: ' + mobileLandscapeSlideWidth);
        console.log('tablet / slide width: ' + tabletSlideWidth);
        console.log('tablet-landscape / slide width: ' + tabletLandscapeSlideWidth);

        
        //$('.basic-table').css('width', + basicTable);
    }

    slideOrder() {
        // if home slider slider href contains '?', append &x=z, else, append ?x=z
        $('.slider-home h2 a, .slider-home h3 a').attr('href', function(ind, attr) {

            var slideOrder = $(this).parents('li').attr('class');
            var hash_position = attr.indexOf('#');
            var new_url_argument = /\?/.test(attr) ? '&src=home-' + slideOrder : '?src=home-' + slideOrder;

            // if there is no hash in the url, then add the new argument to the end, otherwise insert before the hash.
            return hash_position == -1 ? (attr + new_url_argument) : attr.substring(0, hash_position) + new_url_argument + attr.substring(hash_position, attr.length)
            //return /\?/.test(attr) ? attr + '&src=home-' + pos : attr + '?src=home-' + pos;
        });
    }
}
export default BxSlider;