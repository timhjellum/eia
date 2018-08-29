//import $ from 'jquery';
import bxslider from '../../../../node_modules/bxslider/dist/jquery.bxslider.min.js';

class BxSlider {
    constructor() {
        //this.bxSliderHome = $('.slider-home ul');
        //this.bxSliderMulti = $('.slider-multi ul');
        this.bxSliderHomeWrapper = $('.slider-home-wrapper');
        this.bxSlidermultiWrapper = $('.slider-multi-wrapper');
        //this.window = $(window);
        this.bxSliderMulti();
        this.bxSliderHome();
        this.slideOrder();
        //this.reloadSlider();
    }






    bxSliderHome() {

        function bxSliderLoaded() {
            console.log('Loaded - show slides');
            $(".slider-home").addClass("bxslider-visible");
        }

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
    }

    bxSliderMulti() {

        function getSettings() {
            var footerWidth = $('footer > div').width();
            console.log("footer > div: " + footerWidth);
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
                return settings.tabletLandscape; 
            } else if ((footerWidth >= 600) && (footerWidth <= 800)) { 
                return settings.tablet;
            } else if ((footerWidth >= 450) && (footerWidth <= 599)) { 
                return settings.mobileLandscape;
            } else if ((footerWidth >= 320) && (footerWidth <= 449)) { 
                return settings.mobile;
            } else {
                return settings.laptopPlus;
            }
        }
        var settings = getSettings();
  
        console.log('auto:              ' + settings.auto);
        console.log('wrapper class:     ' + settings.wrapperClass);
        console.log('start slide:       ' + settings.startSlide);
        console.log('min slides:        ' + settings.minSlides);
        console.log('max slides:        ' + settings.maxSlides);
        console.log('move slides:       ' + settings.moveSlides);
        console.log('next text:         ' + settings.nextText);
        console.log('prev text:         ' + settings.prevText);
        console.log('infinite loop:     ' + settings.infiniteLoop);
        console.log('controls:          ' + settings.controls);
        console.log('pager:             ' + settings.pager);
        console.log('pager selector:    ' + settings.pagerSelector);
        console.log('slide width:       ' + settings.slideWidth);
        console.log('slide margin:      ' + settings.slideMargin);
        //console.log('on slider resize:  ' + settings.onSliderResize);
        //console.log('on slider load:    ' + settings.onSliderLoad);

        function bxSliderResize() {
            $(".slider-multi").removeClass("bxslider-visible");
            /*
            setTimeout(function(){
                MultiSlider.destroySlider();
                console.log("destroySlider");
            }, 1000);
            */
            setTimeout(function(){
                // https://bxslider.com/options/
                // reload isn't clearing the variables
                MultiSlider.reloadSlider();
                console.log('reloadSlider - auto: ' + settings.auto + 
                ', wrapper class: ' + settings.wrapperClass + 
                ', start slide: ' + settings.startSlide + 
                ', min slides: ' + settings.minSlides + 
                ', max slides: ' + settings.maxSlides + 
                ', move slides: ' + settings.moveSlides + 
                ', next text: ' + settings.nextText + 
                ', prev text: ' + settings.prevText + 
                ', infinite loop: ' + settings.infiniteLoop + 
                ', controls: ' + settings.controls + 
                ', pager: ' + settings.pager + 
                ', pager selector: ' + settings.pagerSelector + 
                ', slide width: ' + settings.slideWidth + 
                ', slide margin: ' + settings.slideMargin);
            }, 2000);
        }

        var MultiSlider = $('.slider-multi ul').bxSlider(settings);
        window.addEventListener('resize', bxSliderResize);

        setTimeout(function() {
            $(".slider-multi").addClass("bxslider-visible");
            console.log("visible");
        }, 1000);


        
    }
    slideOrder() {
        // if home slider slider href contains "?", append &x=z, else, append ?x=z
        $('.slider-home h2 a, .slider-home h3 a').attr("href", function(ind, attr) {

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