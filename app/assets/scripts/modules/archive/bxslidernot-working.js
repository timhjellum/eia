//import $ from 'jquery';
import bxslider from '../../../../node_modules/bxslider/dist/jquery.bxslider.min.js';

class BxSlider {
    constructor() {
        this.bxSliderHome = $('.slider-home ul');
        //this.bxSliderMulti = $('.slider-multi ul');
        this.bxSliderHomeWrapper = $('.slider-home-wrapper');
        this.bxSlidermultiWrapper = $('.slider-multi-wrapper');
        this.window = $(window);
        this.checkSize();
        this.events();
        this.windowResizeEvents();
        this.slideOrder();
        //const $dilly = [bxSliderMulti];
        //console.log($dilly);
        //var bxSliderMulti = $('.slider-multi ul').bxSlider();
        //$('#reload').click(function() { 
        //bxSliderMulti.reloadSlider()



    }





    windowResizeEvents() {

        //this.window.resize(this.checkSize.bind(this));

        //window.onresize = this.checkSize.bind(this);


        // Returns a function, that, as long as it continues to be invoked, will not
        // be triggered. The function will be called after it stops being called for
        // N milliseconds. If `immediate` is passed, trigger the function on the
        // leading edge, instead of the trailing.
        /*
        function debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this,
                    args = arguments;
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
        */
    }
    events() {
        setTimeout(function() {
            //$(".slider-multi").addClass("bxslider-visible");
            $(".slider-home").addClass("bxslider-visible");
            //console.log("visible");
        }, 1000);
        this.bxSliderHome.bxSlider({
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
            pause: 10000
        });
    }
    checkSize() {
        //window.onload = bxSliderMulti;
        /*
        window.onresize = function() {
            bxSliderMulti.destroySlider();
            console.log("reload footer > div: " + $('footer > div').width());
        };
        */
        /*
        Resize Callback 
        */// Stores the current slide index.

        function bxSliderLoaded() {
            console.log('Loaded!!!');
            $(".slider-multi").addClass("bxslider-visible");
        }


        function bxSliderReload() {
            console.log('Reload');
            setTimeout(function(){
                bxSliderMulti.destroySlider();
                bxSliderMulti.reloadSlider();  
            }, 100)
        }
        




        //const $('footer > div').width() = $('footer > div').width();
        var Settings = function() {
        //console.log("footer > div: " + $('footer > div').width());
        console.log(Settings);

            var Settings1 = {
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
            //slideWidth: tabletLandscapeSlideWidth,
            slideMargin: 10
            }
//            console.log("tablet-landscape slide width: " + bxSliderMultiSlideWidth);

            var Settings2 = {
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
                //slideWidth: tabletSlideWidth,
                slideMargin: 10
            }
//            $(".bx-viewport").css("overflow", "visible"); // required for peeking left and right slides
//            $('.slider-multi-pager').hide();
//            console.log("tablet slide width: " + bxSliderMultiSlideWidth);

            var Settings3 = {
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
                //slideWidth: mobileLandscapeSlideWidth,
                slideMargin: 10
            }
//            $(".bx-viewport").css("overflow", "visible"); // required for peeking left and right slides
//            $('.slider-multi-pager').hide();
//            console.log("mobile landscape slide width: " + bxSliderMultiSlideWidth);
            

            var Settings4 = {
                auto: false,
                startSlide: 1,
                wrapperClass: 'slider-multi-wrapper',
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 1,
                infiniteLoop: true,
                pager: false,
                controls: false,
                //slideWidth: mobileSlideWidth,
                //slideWidth: $('footer > div').width(),
                slideMargin: 10
            }
//            $('.slider-multi-pager').hide();
//            $(".bx-viewport").css("overflow", "visible");
//            console.log("mobile slide width: " + bxSliderMultiSlideWidth);

            var Settings5 = {
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
            }
//            console.log("laptop and everything larger");
return  (($('footer > div').width() >= 801) && ($('footer > div').width() <= 987)) ? Settings1 :
        (($('footer > div').width() >= 600) && ($('footer > div').width() <= 800)) ? Settings2 :
        (($('footer > div').width() >= 450) && ($('footer > div').width() <= 599)) ? Settings3 :
        else if (($('footer > div').width() >= 320) && ($('footer > div').width() <= 449)) {return Settings4}
        else {return Settings5};
        //($(window).width()<1200) ? settings2 : settings1;
    }
  

        var bxSliderMulti = $('.slider-multi ul').bxSlider(Settings);
        /*
        {
            auto: false,
            startSlide: bxSliderMultiStartSlide,
            wrapperClass: 'slider-multi-wrapper',
            minSlides: bxSliderMultiMinSlides,
            maxSlides: bxSliderMultiMaxSlides,
            moveSlides: bxSliderMultiMoveSlides,
            nextText: '&#8250;',
            prevText: '&#8249;',
            infiniteLoop: bxSliderMultiinfiniteLoop,
            controls: bxSliderMultiControls,
            pager: bxSliderMultiPager,
            pagerSelector: '.slider-multi-pager',
            slideWidth: bxSliderMultiSlideWidth,
            slideMargin: bxSliderMultiSlideMargin,
            // onResize 
            onSliderResize: bxSliderReload,
            // onLoad
            onSliderLoad: bxSliderLoaded
        });

        console.log('startSlide: ' + bxSliderMultiStartSlide);
        console.log('minSlides: ' + bxSliderMultiMinSlides);
        console.log('maxSlides: ' + bxSliderMultiMaxSlides);
        console.log('moveSlides: ' + bxSliderMultiMoveSlides);
        console.log('infiniteLoop: ' + bxSliderMultiinfiniteLoop);
        console.log('controls: ' + bxSliderMultiControls);
        console.log('pager: ' + bxSliderMultiPager);
        console.log('slideWidth: ' + bxSliderMultiSlideWidth);
        console.log('slideMargin: ' + bxSliderMultiSlideMargin);
                */
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




































//import $ from 'jquery';
import bxslider from '../../../../node_modules/bxslider/dist/jquery.bxslider.min.js';

class BxSlider {
    constructor() {
        this.bxSliderHome = $('.slider-home ul');
        //this.bxSliderMulti = $('.slider-multi ul');
        this.bxSliderHomeWrapper = $('.slider-home-wrapper');
        this.bxSlidermultiWrapper = $('.slider-multi-wrapper');
        this.window = $(window);
        this.bxSliderMulti();
        this.events();
        this.windowResizeEvents();
        this.slideOrder();
        //const $dilly = [bxSliderMulti];
        //console.log($dilly);
        //var bxSliderMulti = $('.slider-multi ul').bxSlider();
        //$('#reload').click(function() { 
        //bxSliderMulti.reloadSlider()

    }





    windowResizeEvents() {

        //this.window.resize(this.bxSliderMulti.bind(this));

        //window.onresize = this.bxSliderMulti.bind(this);
       

        // Returns a function, that, as long as it continues to be invoked, will not
        // be triggered. The function will be called after it stops being called for
        // N milliseconds. If `immediate` is passed, trigger the function on the
        // leading edge, instead of the trailing.
        /*
        function debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this,
                    args = arguments;
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
        */
    }
    events() {
        setTimeout(function() {
            $(".slider-multi").addClass("bxslider-visible");
            $(".slider-home").addClass("bxslider-visible");
            //console.log("visible");
        }, 1000);
        this.bxSliderHome.bxSlider({
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
            pause: 10000
        });
    }
    bxSliderMulti() {
        console.log('resized');
        window.onload = loadOptions();
        //bxSliderMulti;
        /*
        window.onresize = function() {
            //bxSliderMulti.destroySlider();
            bxSliderMulti.reloadSlider();
            console.log("reload footer > div: " + footerWidth);
        };
        */
        function loadOptions() {
            var footerWidth = $('footer > div').width();
            //console.log("footer > div: " + footerWidth);
            if ((footerWidth >= 801) && (footerWidth <= 987)) {
                var bxSliderMultiMinSlides = '4';
                var bxSliderMultiMaxSlides = '4';
                var bxSliderMultiMoveSlides = '4';
                var bxSliderMultiinfiniteLoop = 'true';
                var bxSliderMultiControls = 'true';
                var bxSliderMultiPager = 'true';
                var bxSliderMultiSlideWidth = parseInt(footerWidth / 4);
                var bxSliderMultiSlideMargin = '10';
                console.log("tablet-landscape slide width: " + bxSliderMultiSlideWidth);
            } else if ((footerWidth >= 600) && (footerWidth <= 800)) {
                var bxSliderMultiMinSlides = '3';
                var bxSliderMultiMaxSlides = '3';
                var bxSliderMultiMoveSlides = '3';
                var bxSliderMultiinfiniteLoop = 'true';
                var bxSliderMultiControls = '';
                var bxSliderMultiPager = 'false';
                var bxSliderMultiControls = 'false';
                var bxSliderMultiSlideWidth = parseInt((footerWidth - 60) / 3);
                var bxSliderMultiSlideMargin = '10';
                $(".bx-viewport").css("overflow", "visible"); // required for peeking left and right slides
                $('.slider-multi-pager').hide();
                console.log("tablet slide width: " + bxSliderMultiSlideWidth);
            } else if ((footerWidth >= 450) && (footerWidth <= 599)) {
                var bxSliderMultiMinSlides = '2';
                var bxSliderMultiMaxSlides = '2';
                var bxSliderMultiMoveSlides = '2';
                var bxSliderMultiinfiniteLoop = 'true';
                var bxSliderMultiControls = 'false';
                var bxSliderMultiPager = 'false';
                var bxSliderMultiSlideWidth = parseInt((footerWidth - 60) / 2);
                var bxSliderMultiSlideMargin = '10';
                $(".bx-viewport").css("overflow", "visible"); // required for peeking left and right slides
                $('.slider-multi-pager').hide();
                console.log("mobile landscape slide width: " + bxSliderMultiSlideWidth);
            } else if ((footerWidth >= 320) && (footerWidth <= 449)) {
                var bxSliderMultiStartSlide = '1';
                var bxSliderMultiMinSlides = '1';
                var bxSliderMultiMaxSlides = '1';
                var bxSliderMultiMoveSlides = '1';
                var bxSliderMultiinfiniteLoop = 'true';
                var bxSliderMultiControls = 'false';
                var bxSliderMultiPager = 'false';
                var bxSliderMultiSlideWidth = parseInt(footerWidth - 40);
                var bxSliderMultiSlideMargin = '10';
                $('.slider-multi-pager').hide();
                $(".bx-viewport").css("overflow", "visible");
                console.log("mobile slide width: " + bxSliderMultiSlideWidth);
            } else {
                var bxSliderMultiMinSlides = '5';
                var bxSliderMultiMaxSlides = '5';
                var bxSliderMultiMoveSlides = '5';
                var bxSliderMultiinfiniteLoop = 'true';
                var bxSliderMultiControls = '';
                var bxSliderMultiPager = 'true';
                var bxSliderMultiSlideWidth = '154';
                var bxSliderMultiSlideMargin = '14';
                console.log("laptop and everything larger");
            }









        function loadOptions() {
            var footerWidth = $('footer > div').width();
            //console.log("footer > div: " + footerWidth);
            if ((footerWidth >= 801) && (footerWidth <= 987)) {
                var bxSliderMultiMinSlides = '4';
                var bxSliderMultiMaxSlides = '4';
                var bxSliderMultiMoveSlides = '4';
                var bxSliderMultiinfiniteLoop = 'true';
                var bxSliderMultiControls = 'true';
                var bxSliderMultiPager = 'true';
                var bxSliderMultiSlideWidth = parseInt(footerWidth / 4);
                var bxSliderMultiSlideMargin = '10';
                console.log("tablet-landscape slide width: " + bxSliderMultiSlideWidth);
            } else if ((footerWidth >= 600) && (footerWidth <= 800)) {
                var bxSliderMultiMinSlides = '3';
                var bxSliderMultiMaxSlides = '3';
                var bxSliderMultiMoveSlides = '3';
                var bxSliderMultiinfiniteLoop = 'true';
                var bxSliderMultiControls = '';
                var bxSliderMultiPager = 'false';
                var bxSliderMultiControls = 'false';
                var bxSliderMultiSlideWidth = parseInt((footerWidth - 60) / 3);
                var bxSliderMultiSlideMargin = '10';
                $(".bx-viewport").css("overflow", "visible"); // required for peeking left and right slides
                $('.slider-multi-pager').hide();
                console.log("tablet slide width: " + bxSliderMultiSlideWidth);
            } else if ((footerWidth >= 450) && (footerWidth <= 599)) {
                var bxSliderMultiMinSlides = '2';
                var bxSliderMultiMaxSlides = '2';
                var bxSliderMultiMoveSlides = '2';
                var bxSliderMultiinfiniteLoop = 'true';
                var bxSliderMultiControls = 'false';
                var bxSliderMultiPager = 'false';
                var bxSliderMultiSlideWidth = parseInt((footerWidth - 60) / 2);
                var bxSliderMultiSlideMargin = '10';
                $(".bx-viewport").css("overflow", "visible"); // required for peeking left and right slides
                $('.slider-multi-pager').hide();
                console.log("mobile landscape slide width: " + bxSliderMultiSlideWidth);
            } else if ((footerWidth >= 320) && (footerWidth <= 449)) {
                var bxSliderMultiStartSlide = '1';
                var bxSliderMultiMinSlides = '1';
                var bxSliderMultiMaxSlides = '1';
                var bxSliderMultiMoveSlides = '1';
                var bxSliderMultiinfiniteLoop = 'true';
                var bxSliderMultiControls = 'false';
                var bxSliderMultiPager = 'false';
                var bxSliderMultiSlideWidth = parseInt(footerWidth - 40);
                var bxSliderMultiSlideMargin = '10';
                $('.slider-multi-pager').hide();
                $(".bx-viewport").css("overflow", "visible");
                console.log("mobile slide width: " + bxSliderMultiSlideWidth);
            } else {
                var bxSliderMultiMinSlides = '5';
                var bxSliderMultiMaxSlides = '5';
                var bxSliderMultiMoveSlides = '5';
                var bxSliderMultiinfiniteLoop = 'true';
                var bxSliderMultiControls = '';
                var bxSliderMultiPager = 'true';
                var bxSliderMultiSlideWidth = '154';
                var bxSliderMultiSlideMargin = '14';
                console.log("laptop and everything larger");
            }
        }
        var bxSliderMulti = $('.slider-multi ul').bxSlider({
            auto: false,
            startSlide: bxSliderMultiStartSlide,
            wrapperClass: 'slider-multi-wrapper',
            minSlides: bxSliderMultiMinSlides,
            maxSlides: bxSliderMultiMaxSlides,
            moveSlides: bxSliderMultiMoveSlides,
            nextText: '&#8250;',
            prevText: '&#8249;',
            infiniteLoop: bxSliderMultiinfiniteLoop,
            controls: bxSliderMultiControls,
            pager: bxSliderMultiPager,
            pagerSelector: '.slider-multi-pager',
            slideWidth: bxSliderMultiSlideWidth,
            slideMargin: bxSliderMultiSlideMargin,
            // onResize 
            onSliderResize: loadOptions
            // onLoad
            //onSliderLoad: options
            //bxSliderLoaded
        });


        console.log('startSlide: ' + bxSliderMultiStartSlide);
        console.log('minSlides: ' + bxSliderMultiMinSlides);
        console.log('maxSlides: ' + bxSliderMultiMaxSlides);
        console.log('moveSlides: ' + bxSliderMultiMoveSlides);
        console.log('infiniteLoop: ' + bxSliderMultiinfiniteLoop);
        console.log('controls: ' + bxSliderMultiControls);
        console.log('pager: ' + bxSliderMultiPager);
        console.log('slideWidth: ' + bxSliderMultiSlideWidth);
        console.log('slideMargin: ' + bxSliderMultiSlideMargin);
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