
//import bxslider from '../../../../node_modules/bxslider/dist/jquery.bxslider.min.js';
/* the bxslider is no longer maintained and there is a bug that throws an error when users use the touchscreen. The error shows up in the console only and there's no known issues with the slider. A copy of the bxslider.js with the 'fix' and the file now resides on the global/scripts/bxslider file */
import bxslider from './vendor/bxslider/bxslider.js';

class BxSlider {
    constructor() {
        this.arrowControls = $('.bx-controls');




        // run on initial page load
        this.bxSliderHome();
        // run on window resize
        $(window).resize(this.bxSliderHome);


        const sliderExists = document.querySelector('.slider-multi');
        if (sliderExists !== null) {


            var mySettings = {
                auto: false,
                wrapperClass: 'slider-multi-wrapper',
                nextText: '&#8250;',
                prevText: '&#8249;',
                infiniteLoop: true,
                pager: true,
                pagerSelector: '.slider-multi-pager',
                slideWidth: 154,
                slideMargin: 14,
                onSliderLoad: MultiSliderLoaded(),
            }
            var slider = $('.slider-multi ul').bxSlider(mySettings);
            $(window).on('orientationchange resize', function() {
            //$(window).resize(function() {

                const footerWidth                 = $('footer').width();
                const mobileSlideWidth            = parseInt(footerWidth - 40);
                const mobileLandscapeSlideWidth   = parseInt(footerWidth/2);
                const tabletSlideWidth            = parseInt(footerWidth/3);
                const tabletLandscapeSlideWidth   = parseInt(footerWidth/4);
                const basicTable                  = parseInt(footerWidth - 12);
            
            
            
                if (footerWidth > 989) {
                    setTimeout(function(){
                        $('.bx-controls').addClass('show').removeClass('hide');
                        //console.log('footer : ' + footerWidth);
                    }, 1000)
        
        
                } else if (footerWidth <= 989) {
                    setTimeout(function(){
                        $('.bx-controls').removeClass('show').addClass('hide');
                        //console.log('footer : ' + footerWidth);
                    }, 1000)
                };
                
                if ((footerWidth >= 801) && (footerWidth <= 987)) {
                    mySettings.wrapperClass = 'slider-multi-wrapper';
                    mySettings.minSlides = 4;
                    mySettings.maxSlides = 4;
                    mySettings.moveSlides = 4;
                    mySettings.nextText = '&#8250;';
                    mySettings.prevText = '&#8249;';
                    mySettings.infiniteLoop = true;
                    mySettings.pagerSelector = '.slider-multi-pager';
                    mySettings.slideWidth = tabletLandscapeSlideWidth;
                    mySettings.slideMargin = 10;
                    mySettings.onSliderLoad = MultiSliderLoaded();
                    setTimeout(function(){
                        slider.destroySlider();
                        slider.reloadSlider(mySettings);  
                    }, 100)
                    //console.log('tabletLandscape - footer width: ' + footerWidth);
                } else if ((footerWidth >= 600) && (footerWidth <= 800)) {
                    mySettings.wrapperClass = 'slider-multi-wrapper';
                    mySettings.minSlides = 3;
                    mySettings.maxSlides = 3;
                    mySettings.moveSlides = 3;
                    mySettings.infiniteLoop = true;
                    mySettings.pager = false;
                    mySettings.controls = false;
                    mySettings.slideWidth = tabletSlideWidth;
                    mySettings.slideMargin = 10;
                    mySettings.onSliderLoad = MultiSliderLoaded();
                    setTimeout(function(){
                        slider.destroySlider();
                        slider.reloadSlider(mySettings);  
                    }, 100)
                    $('.page-wrapper').css('width', + footerWidth);
                    $(".bx-viewport").css("overflow", "visible"); // required for peeking left and right slides
                    //console.log('tablet - footer width: ' + footerWidth);
                } else if ((footerWidth >= 450) && (footerWidth <= 599)) {
                    mySettings.wrapperClass = 'slider-multi-wrapper';
                    mySettings.minSlides = 2;
                    mySettings.maxSlides = 2;
                    mySettings.moveSlides = 2;
                    mySettings.infiniteLoop = true;
                    mySettings.pager = false;
                    mySettings.controls = false;
                    mySettings.slideWidth = mobileLandscapeSlideWidth;
                    mySettings.slideMargin = 10;
                    mySettings.onSliderLoad = MultiSliderLoaded();
                    setTimeout(function(){
                        slider.destroySlider();
                        slider.reloadSlider(mySettings);  
                    }, 100)
                    $('.page-wrapper').css('width', + footerWidth);
                    $(".bx-viewport").css("overflow", "visible"); // required for peeking left and right slides
                    //console.log('mobileLandscape - footer width: ' + footerWidth);
                } else if ((footerWidth >= 320) && (footerWidth <= 449)) {
                    mySettings.wrapperClass = 'slider-multi-wrapper';
                    mySettings.minSlides = 1;
                    mySettings.maxSlides = 1;
                    mySettings.moveSlides = 1;
                    mySettings.infiniteLoop = true;
                    mySettings.pager = false;
                    mySettings.controls = false;
                    mySettings.slideWidth = mobileSlideWidth;
                    mySettings.slideMargin = 10;
                    mySettings.onSliderLoad = MultiSliderLoaded();
                    setTimeout(function(){
                        slider.destroySlider();
                        slider.reloadSlider(mySettings);  
                    }, 100)
                    $('.page-wrapper').css('width', + footerWidth);
                    $(".bx-viewport").css("overflow", "visible"); // required for peeking left and right slides
                    //console.log('mobile - footer width: ' + footerWidth);
                } else {
                    mySettings.wrapperClass = 'slider-multi-wrapper';
                    mySettings.minSlides = 5;
                    mySettings.maxSlides = 5;
                    mySettings.moveSlides = 5;
                    mySettings.nextText = '&#8250;';
                    mySettings.prevText = '&#8249;';
                    mySettings.infiniteLoop = true;
                    mySettings.pagerSelector = '.slider-multi-pager';
                    mySettings.slideWidth = 154;
                    mySettings.slideMargin = 14;
                    mySettings.onSliderLoad = MultiSliderLoaded();
                    setTimeout(function(){
                        slider.destroySlider();
                        slider.reloadSlider(mySettings);  
                    }, 100)
                    //console.log('laptop - footer width: ' + footerWidth);
                };
            }).trigger('resize');// on load, trigger the resize event
            // load the slider when it's ready
            function MultiSliderLoaded() {
                $('.slider-multi').addClass('bxslider-visible');
                setTimeout(function(){
                    $('.slider-multi-pager').addClass('bxslider-visible');  
                }, 1000)
            }
        }
    }

    /*
    MultiSliderLoaded() {
        //console.log('Loaded - show slides');
        $('.slider-multi').addClass('bxslider-visible');
        $('.slider-home').addClass('bxslider-visible');
    }

    MultiSliderLoaded() {
        this.header.toggleClass('show');
        this.logo.toggleClass('show');
        this.searchPanel.toggleClass('show');
    } 
    toggleArrows() {
        this.header.toggleClass('show');
        this.logo.toggleClass('show');
        this.searchPanel.toggleClass('show');
    } 
    */


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
            onSliderLoad: HomeSliderLoaded()
        });
        function HomeSliderLoaded() {
            $('.slider-home').addClass('bxslider-visible');
        }
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