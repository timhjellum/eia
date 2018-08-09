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
        console.log('Viewport: ' + footerWidth);
        //var slider = $('.slider-multi ul').bxSlider();
        //console.log('multi-slider initiated');
        var mobileLandscapeSlideWidth = parseInt(footerWidth/2);
        console.log('mobile landscape / slide width: ' + mobileLandscapeSlideWidth);
        var tabletSlideWidth = parseInt(footerWidth/3);
        console.log('tablet / slide width: ' + tabletSlideWidth);
        var tabletLandscapeSlideWidth = parseInt(footerWidth/4);
        console.log('tablet-landscape / slide width: ' + tabletLandscapeSlideWidth);
        var laptop = {
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
            slideMargin: 14
        };
        var tabletLandscape = {
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
        };
        var tablet = {
            auto: false,
            wrapperClass: 'slider-multi-wrapper',
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 3,
            nextText: '&#8250;',
            prevText: '&#8249;',
            infiniteLoop: true,
            pager: true,
            pagerSelector: '.slider-multi-pager',
            slideWidth: tabletSlideWidth,
            slideMargin: 10
        };
        var mobileLandscape = {
            auto: false,
            wrapperClass: 'slider-multi-wrapper',
            minSlides: 2,
            maxSlides: 2,
            moveSlides: 2,
            nextText: '&#8250;',
            prevText: '&#8249;',
            infiniteLoop: true,
            pager: true,
            pagerSelector: '.slider-multi-pager',
            slideWidth: mobileLandscapeSlideWidth,
            slideMargin: 10
        };
        var mobile = {
            auto: false,
            wrapperClass: 'slider-multi-wrapper',
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 1,
            nextText: '&#8250;',
            prevText: '&#8249;',
            infiniteLoop: true,
            pager: true,
            pagerSelector: '.slider-multi-pager',
            slideWidth: footerWidth,
            slideMargin: 0
        };
        if ((footerWidth >= 801) && (footerWidth <= 987)) {
            $('.slider-multi ul').bxSlider(tabletLandscape);
        } else if ((footerWidth >= 600) && (footerWidth <= 800)) {
            $('.slider-multi ul').bxSlider(tablet);
        } else if ((footerWidth >= 450) && (footerWidth <= 599)) {
            $('.slider-multi ul').bxSlider(mobileLandscape);
        } else if ((footerWidth >= 320) && (footerWidth <= 449)) {
            $('.slider-multi ul').bxSlider(mobile);
        } else {
            $('.slider-multi ul').bxSlider(laptop);
        };
        setTimeout(function() {
            console.log('Loaded - show slides');
            $('.slider-multi').addClass('bxslider-visible');
        }, 2000);
    }













    /*
    bxSliderMulti() {

        function getSettings() {
            var footerWidth = $('footer > div').width();
            console.log('footer > div: ' + footerWidth);
            var settings = {
                    tabletLandscape : {
                    auto: false,
                    wrapperClass: 'slider-multi-wrapper',
                    startSlide: 1,
                    infiniteLoop: true,
                    pagerSelector: '.slider-multi-pager',
//                    onSliderResize: 'bxSliderResize',
//                    onSliderLoad: 'bxSliderLoaded',
                    minSlides: 4,
                    maxSlides: 4,
                    moveSlides: 4,
                    nextText: '&#8250;',
                    prevText: '&#8249;',
                    pager: true,
                    controls: true,
                    slideWidth: parseInt(footerWidth / 4),
                    slideMargin: 10
                },
                tablet : {
                    auto: false,
                    wrapperClass: 'slider-multi-wrapper',
                    startSlide: 1,
                    infiniteLoop: true,
                    pagerSelector: '.slider-multi-pager',
//                    onSliderResize: 'bxSliderResize',
//                    onSliderLoad: 'bxSliderLoaded',
                    minSlides: 3,
                    maxSlides: 3,
                    moveSlides: 3,
                    nextText: '&#8250;',
                    prevText: '&#8249;',
                    pager: false,
                    controls: false,
                    slideWidth: parseInt((footerWidth - 60) / 3),
                    slideMargin: 10
                },
                mobileLandscape : {
                    auto: false,
                    wrapperClass: 'slider-multi-wrapper',
                    startSlide: 1,
                    infiniteLoop: true,
                    pagerSelector: '.slider-multi-pager',
//                    onSliderResize: 'bxSliderResize',
//                    onSliderLoad: 'bxSliderLoaded',
                    minSlides: 2,
                    maxSlides: 2,
                    moveSlides: 2,
                    nextText: '&#8250;',
                    prevText: '&#8249;',
                    pager: false,
                    controls: false,
                    slideWidth: parseInt((footerWidth - 60) / 2),
                    slideMargin: 10
                },
                mobile : {
                    auto: false,
                    wrapperClass: 'slider-multi-wrapper',
                    startSlide: 1,
                    infiniteLoop: true,
                    pagerSelector: '.slider-multi-pager',
//                    onSliderResize: 'bxSliderResize',
//                    onSliderLoad: 'bxSliderLoaded',
                    minSlides: 1,
                    maxSlides: 1,
                    moveSlides: 1,
                    nextText: '&#8250;',
                    prevText: '&#8249;',
                    pager: false,
                    controls: false,
                    slideWidth: parseInt(footerWidth - 40),
                    slideMargin: 10
                }, 
                laptopPlus : {
                    auto: false,
                    wrapperClass: 'slider-multi-wrapper',
                    startSlide: 1,
                    infiniteLoop: true,
                    pagerSelector: '.slider-multi-pager',
//                    onSliderResize: 'bxSliderResize',
//                    onSliderLoad: 'bxSliderLoaded',
                    minSlides: 5,
                    maxSlides: 5,
                    moveSlides: 5,
                    nextText: '&#8250;',
                    prevText: '&#8249;',
                    pager: true,
                    controls: true,
                    slideWidth: 154,
                    slideMargin: 14
                }
            };
            if ((footerWidth >= 801) && (footerWidth <= 987)) { 
                return tabletLandscape; 
            } else if ((footerWidth >= 600) && (footerWidth <= 800)) { 
                return tablet;
            } else if ((footerWidth >= 450) && (footerWidth <= 599)) { 
                return mobileLandscape;
            } else if ((footerWidth >= 320) && (footerWidth <= 449)) { 
                return mobile;
            } else {
                return laptopPlus;
            }
        }
        var settings = getSettings();
  
        console.log('auto:              ' + auto);
        console.log('wrapper class:     ' + wrapperClass);
        console.log('start slide:       ' + startSlide);
        console.log('min slides:        ' + minSlides);
        console.log('max slides:        ' + maxSlides);
        console.log('move slides:       ' + moveSlides);
        console.log('next text:         ' + nextText);
        console.log('prev text:         ' + prevText);
        console.log('infinite loop:     ' + infiniteLoop);
        console.log('controls:          ' + controls);
        console.log('pager:             ' + pager);
        console.log('pager selector:    ' + pagerSelector);
        console.log('slide width:       ' + slideWidth);
        console.log('slide margin:      ' + slideMargin);
        //console.log('on slider resize:  ' + onSliderResize);
        //console.log('on slider load:    ' + onSliderLoad);

        function bxSliderResize() {
            $('.slider-multi').removeClass('bxslider-visible');

//            setTimeout(function(){
//                MultiSlider.destroySlider();
//                console.log('destroySlider');
//            }, 1000);

            setTimeout(function(){
                // https://bxslider.com/options/
                // reload isn't clearing the variables
                MultiSlider.reloadSlider();
                console.log('reloadSlider - auto: ' + auto + 
                ', wrapper class: ' + wrapperClass + 
                ', start slide: ' + startSlide + 
                ', min slides: ' + minSlides + 
                ', max slides: ' + maxSlides + 
                ', move slides: ' + moveSlides + 
                ', next text: ' + nextText + 
                ', prev text: ' + prevText + 
                ', infinite loop: ' + infiniteLoop + 
                ', controls: ' + controls + 
                ', pager: ' + pager + 
                ', pager selector: ' + pagerSelector + 
                ', slide width: ' + slideWidth + 
                ', slide margin: ' + slideMargin);
            }, 2000);
        }

        var MultiSlider = $('.slider-multi ul').bxSlider(settings);
        window.addEventListener('resize', bxSliderResize);

        setTimeout(function() {
            $('.slider-multi').addClass('bxslider-visible');
            console.log('visible');
        }, 1000);  
    }
    */
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