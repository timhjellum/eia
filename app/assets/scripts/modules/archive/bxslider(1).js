import bxslider from '../../../../node_modules/bxslider/dist/jquery.bxslider.min.js';

class BxSlider {
    constructor() {
        //this.bxSliderHome = $('.slider-home ul');
        //$('.slider-multi ul') = $('.slider-multi ul');
        this.bxSliderHomeWrapper = $('.slider-home-wrapper');
        this.bxSlidermultiWrapper = $('.slider-multi-wrapper');
        //this.window = $(window);
        //$('.slider-multi ul')();
        //this.bxSliderHome();
        //this.slideOrder();
        //this.reloadSlider();

        // run on initial page load
        this.bxSliderHome();
        // run on window resize
        $(window).resize(this.bxSliderHome);
        // run on initial page load
        this.bxSliderMulti();
        // run on window resize
        $(window).resize(this.bxSliderMulti);
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
            onSliderLoad: 'bxSliderLoaded'
        });
        // load the slider when it's ready
        function bxSliderLoaded() {
            console.log('Loaded - show slides');
            $('.slider-home').addClass('bxslider-visible');
        }
    }

    bxSliderMulti() {
        var footerWidth = $('footer > div').width();
        //var footerWidth = window.innerWidth;
        //console.log('Viewport: ' + footerWidth);
        //var slider = $('.slider-multi ul').bxSlider();
        //console.log('multi-slider initiated');
        var mobileLandscapeSlideWidth = parseInt(footerWidth/2);
        console.log('mobile landscape / slide width: ' + mobileLandscapeSlideWidth);
        var tabletSlideWidth = parseInt(footerWidth/3);
        console.log('tablet / slide width: ' + tabletSlideWidth);
        var tabletLandscapeSlideWidth = parseInt(footerWidth/4);
        console.log('tablet-landscape / slide width: ' + tabletLandscapeSlideWidth);
        laptop: {
            var bxSliderMultiStartSlide = '0';
            var bxSliderMultiMinSlides = '5';
            var bxSliderMultiMaxSlides = '5';
            var bxSliderMultiMoveSlides = '5';
            var bxSliderMultiControls = 'true';
            var bxSliderMultiPager = 'true';
            var bxSliderMultiNextText = '&#8250;'; 
            var bxSliderMultiPrevText = '&#8249;';
            var bxSliderMultiSlideWidth = '154';
            var bxSliderMultiSlideMargin = '14';
        };
        tabletLandscape: {
            var bxSliderMultiStartSlide = '0';
            var bxSliderMultiMinSlides = '4';
            var bxSliderMultiMaxSlides = '4';
            var bxSliderMultiMoveSlides = '4';
            var bxSliderMultiControls = 'true';
            var bxSliderMultiPager = 'true';
            var bxSliderMultiNextText = '&#8250;'; 
            var bxSliderMultiPrevText = '&#8249;';
            var bxSliderMultiSlideWidth = parseInt(footerWidth / 4);
            var bxSliderMultiSlideMargin = '10';
        };
        tablet: {
            var bxSliderMultiStartSlide = '0';
            var bxSliderMultiMinSlides = '3';
            var bxSliderMultiMaxSlides = '3';
            var bxSliderMultiMoveSlides = '3';
            var bxSliderMultiPager = 'false';
            var bxSliderMultiControls = 'false';
            var bxSliderMultiNextText = '&#8250;'; 
            var bxSliderMultiPrevText = '&#8249;';
            var bxSliderMultiSlideWidth = parseInt((footerWidth - 60) / 3);
            var bxSliderMultiSlideMargin = '10';
        };
        mobileLandscape: {
            var bxSliderMultiStartSlide = '0';
            var bxSliderMultiMinSlides = '2';
            var bxSliderMultiMaxSlides = '2';
            var bxSliderMultiMoveSlides = '2';
            var bxSliderMultiControls = 'false';
            var bxSliderMultiPager = 'false';
            var bxSliderMultiNextText = '&#8250;'; 
            var bxSliderMultiPrevText = '&#8249;';
            var bxSliderMultiSlideWidth = parseInt((footerWidth - 60) / 2);
            var bxSliderMultiSlideMargin = '10';
        };
        mobile: {
            var bxSliderMultiStartSlide = '1';
            var bxSliderMultiMinSlides = '1';
            var bxSliderMultiMaxSlides = '1';
            var bxSliderMultiMoveSlides = '1';
            var bxSliderMultiControls = 'false';
            var bxSliderMultiPager = 'false';
            var bxSliderMultiNextText = '&#8250;'; 
            var bxSliderMultiPrevText = '&#8249;';
            var bxSliderMultiSlideWidth = parseInt(footerWidth - 40);
            var bxSliderMultiSlideMargin = '10';
        };
        if ((footerWidth >= 801) && (footerWidth <= 987)) {
            $('.slider-multi ul').bxSlider((tabletLandscape), {
                auto: true,
                wrapperClass: 'slider-multi-wrapper',
                autoHover: true,
                pagerSelector: '.slider-multi-pager',
                pause: 10000,
                onSliderLoad: 'bxSliderLoaded',
                startSlide: bxSliderMultiStartSlide,
                minSlides: bxSliderMultiMinSlides,
                maxSlides: bxSliderMultiMaxSlides, 
                nextText: bxSliderMultiNextText, 
                prevText: bxSliderMultiPrevText,
                slideWidth: bxSliderMultiSlideWidth,
                controls: bxSliderMultiControls,
                pager: bxSliderMultiPager,
                slideMargin: bxSliderMultiSlideMargin,
                moveSlides: bxSliderMultiMoveSlides
            });
        } else if ((footerWidth >= 600) && (footerWidth <= 800)) {
            $('.slider-multi ul').bxSlider((tablet), {
                auto: true,
                wrapperClass: 'slider-multi-wrapper',
                autoHover: true,
                pagerSelector: '.slider-multi-pager',
                pause: 10000,
                onSliderLoad: 'bxSliderLoaded',
                startSlide: bxSliderMultiStartSlide,
                minSlides: bxSliderMultiMinSlides,
                maxSlides: bxSliderMultiMaxSlides, 
                nextText: bxSliderMultiNextText, 
                prevText: bxSliderMultiPrevText,
                slideWidth: bxSliderMultiSlideWidth,
                controls: bxSliderMultiControls,
                pager: bxSliderMultiPager,
                slideMargin: bxSliderMultiSlideMargin,
                moveSlides: bxSliderMultiMoveSlides
            });
        } else if ((footerWidth >= 450) && (footerWidth <= 599)) {
            $('.slider-multi ul').bxSlider((mobileLandscape), {
                auto: true,
                wrapperClass: 'slider-multi-wrapper',
                autoHover: true,
                pagerSelector: '.slider-multi-pager',
                pause: 10000,
                onSliderLoad: 'bxSliderLoaded',
                startSlide: bxSliderMultiStartSlide,
                minSlides: bxSliderMultiMinSlides,
                maxSlides: bxSliderMultiMaxSlides, 
                nextText: bxSliderMultiNextText, 
                prevText: bxSliderMultiPrevText,
                slideWidth: bxSliderMultiSlideWidth,
                controls: bxSliderMultiControls,
                pager: bxSliderMultiPager,
                slideMargin: bxSliderMultiSlideMargin,
                moveSlides: bxSliderMultiMoveSlides
            });
        } else if ((footerWidth >= 320) && (footerWidth <= 449)) {
            $('.slider-multi ul').bxSlider((mobile), {
                auto: true,
                wrapperClass: 'slider-multi-wrapper',
                autoHover: true,
                pagerSelector: '.slider-multi-pager',
                pause: 10000,
                onSliderLoad: 'bxSliderLoaded',
                startSlide: bxSliderMultiStartSlide,
                minSlides: bxSliderMultiMinSlides,
                maxSlides: bxSliderMultiMaxSlides, 
                nextText: bxSliderMultiNextText, 
                prevText: bxSliderMultiPrevText,
                slideWidth: bxSliderMultiSlideWidth,
                controls: bxSliderMultiControls,
                pager: bxSliderMultiPager,
                slideMargin: bxSliderMultiSlideMargin,
                moveSlides: bxSliderMultiMoveSlides
            });
        } else {
            $('.slider-multi ul').bxSlider((laptop), {
                auto: true,
                wrapperClass: 'slider-multi-wrapper',
                autoHover: true,
                pagerSelector: '.slider-multi-pager',
                pause: 10000,
                onSliderLoad: 'bxSliderLoaded',
                startSlide: bxSliderMultiStartSlide,
                minSlides: bxSliderMultiMinSlides,
                maxSlides: bxSliderMultiMaxSlides, 
                nextText: bxSliderMultiNextText, 
                prevText: bxSliderMultiPrevText,
                slideWidth: bxSliderMultiSlideWidth,
                controls: bxSliderMultiControls,
                pager: bxSliderMultiPager,
                slideMargin: bxSliderMultiSlideMargin,
                moveSlides: bxSliderMultiMoveSlides
            });
        }
        setTimeout(function() {
            console.log('Loaded - show slides');
            $('.slider-multi').addClass('bxslider-visible');
        }, 2000);
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