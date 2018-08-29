
//import bxslider from '../../../../node_modules/bxslider/dist/jquery.bxslider.min.js';
/* the bxslider is no longer maintained and there is a bug that throws an error when users use the touchscreen. The error shows up in the console only and there's no known issues with the slider. A copy of the bxslider.js with the 'fix' and the file now resides on the global/scripts/bxslider file */
import bxslider from './vendor/bxslider/bxslider.js';

class BxSlider {
    constructor() {

        this.bxSliderHomeWrapper = $('.slider-home-wrapper');
        this.bxSliderMultiWrapper = $('.slider-multi-wrapper');

        // run on initial page load
        this.bxSliderHome();
        this.bxSliderMulti();
        console.log('hohoho');
    }

    windowResizeEvents() {
        $(window).on('orientationchange resize', function() {
            console.log('resized!!');
            //$('.slider-multi ul').bxSlider().destroySlider();
            //$('.slider-multi-wrapper').detach();
            //$('.slider-multi-wrapper').remove();
            //this.bxSliderMultiWrapper.detach();
            $('.slider-multi-wrapper').empty();
            
            //this.bxSliderMulti();
            //(this.bxSliderMulti.bind(this)); 
        });
        $(window).resize(this.bxSliderHome);
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
            //console.log('Loaded - show slides');
            $('.slider-home').addClass('bxslider-visible');
        }
    }

    bxSliderMulti() {
        const footerWidth                 = $('footer > div').width();
        const mobileSlideWidth            = parseInt(footerWidth - 40);
        const mobileLandscapeSlideWidth   = parseInt(footerWidth/2);
        const tabletSlideWidth            = parseInt(footerWidth/3);
        const tabletLandscapeSlideWidth   = parseInt(footerWidth/4);
        const basicTable                  = parseInt(footerWidth - 12);
        const laptop = {
            auto: false,
            wrapperClass: 'slider-multi-wrapper',
            minSlides: 5,
            maxSlides: 5,
            moveSlides: 5,
            nextText: '&#8250;',
            prevText: '&#8249;',
            infiniteLoop: true,
            pager: true,
            pagerSelector: '.slider-multi-pager',
            slideWidth: 154,
            slideMargin: 14,
            onSliderLoad: bxSliderLoaded(),
            //onSliderResize: bxSliderResized()
        };
        const tabletLandscape = {
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
            slideMargin: 10,
            onSliderLoad: bxSliderLoaded(),
            //onSliderResize: bxSliderResized()
        };
        const tablet = {
            auto: false,
            wrapperClass: 'slider-multi-wrapper',
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 3,
            nextText: '&#8250;',
            prevText: '&#8249;',
            infiniteLoop: true,
            pager: false,
            pagerSelector: '',
            slideWidth: tabletSlideWidth,
            slideMargin: 10,
            onSliderLoad: bxSliderLoaded(),
            //onSliderResize: bxSliderResized()
        };
        const mobileLandscape = {
            auto: false,
            wrapperClass: 'slider-multi-wrapper',
            minSlides: 2,
            maxSlides: 2,
            moveSlides: 2,
            nextText: '&#8250;',
            prevText: '&#8249;',
            infiniteLoop: true,
            pager: false,
            pagerSelector: '',
            slideWidth: mobileLandscapeSlideWidth,
            slideMargin: 10,
            onSliderLoad: bxSliderLoaded(),
            //onSliderResize: bxSliderResized()
        };
        const mobile = {
            auto: false,
            wrapperClass: 'slider-multi-wrapper',
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            nextText: '&#8250;',
            prevText: '&#8249;',
            infiniteLoop: true,
            pager: false,
            pagerSelector: '',
            slideWidth: mobileSlideWidth,
            slideMargin: 10,
            onSliderLoad: bxSliderLoaded(),
            //onSliderResize: bxSliderResized()
        };
        if ((footerWidth >= 801) && (footerWidth <= 987)) {
            $('.slider-multi ul').bxSlider(tabletLandscape);
            //console.log(tabletLandscape);
        } else if ((footerWidth >= 600) && (footerWidth <= 800)) {
            $('.slider-multi ul').bxSlider(tablet);
            $('.page-wrapper').css('width', + footerWidth);
            $(".bx-viewport").css("overflow", "visible"); // required for peeking left and right slides
            //console.log(tablet);
        } else if ((footerWidth >= 450) && (footerWidth <= 599)) {
            $('.slider-multi ul').bxSlider(mobileLandscape);
            $('.page-wrapper').css('width', + footerWidth);
            $(".bx-viewport").css("overflow", "visible"); // required for peeking left and right slides
            //console.log(mobileLandscape);
        } else if ((footerWidth >= 320) && (footerWidth <= 449)) {
            $('.slider-multi ul').bxSlider(mobile);
            $('.page-wrapper').css('width', + footerWidth);
            $(".bx-viewport").css("overflow", "visible"); // required for peeking left and right slides
            //console.log(mobile);
        } else {
            $('.slider-multi ul').bxSlider(laptop);
            //console.log(laptop);
        };
        // load the slider when it's ready
        function bxSliderLoaded() {
            //console.log('Loaded - show slides');
            $('.slider-multi').addClass('bxslider-visible');
        }

        // move this to modules
        $('.basic-table').css('width', + basicTable);
    }


    slideOrder() {
        // if home slider slider href contains '?', append &x=z, else, append ?x=z
        $('.slider-home h2 a, .slider-home h3 a').attr('href', function(ind, attr) {

            const slideOrder = $(this).parents('li').attr('class');
            const hash_position = attr.indexOf('#');
            const new_url_argument = /\?/.test(attr) ? '&src=home-' + slideOrder : '?src=home-' + slideOrder;

            // if there is no hash in the url, then add the new argument to the end, otherwise insert before the hash.
            return hash_position == -1 ? (attr + new_url_argument) : attr.substring(0, hash_position) + new_url_argument + attr.substring(hash_position, attr.length)
            //return /\?/.test(attr) ? attr + '&src=home-' + pos : attr + '?src=home-' + pos;
        });
    }
}
export default BxSlider;