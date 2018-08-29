var jQuery = require('jquery');
//import SliderMultiCards from './modules/_slider-multi-cards';

// check the page resolution on initial page load and if the browser is resized
$(document).ready(function() {
 
    setTimeout(function() {
        $(".bxslider").addClass("bxslider-visible");
        console.log("bxslider-visible");
    }, 2000);

    
    // run on initial page load
    checkSize();
    // run on window resize
    $(window).resize(checkSize);

    
    /*
    $('ul.bxslider h3').ellipsis({
        lines: 4,             // force ellipsis after a certain number of lines. Default is 'auto'
        ellipClass: 'ellip',  // class used for ellipsis wrapper and to namespace ellip line
        responsive: true      // set to true if you want ellipsis to update on window resize. Default is false
    });
    $('ul.bxslider p').ellipsis({
        lines: 4,             // force ellipsis after a certain number of lines. Default is 'auto'
        ellipClass: 'ellip',  // class used for ellipsis wrapper and to namespace ellip line
        responsive: true      // set to true if you want ellipsis to update on window resize. Default is false
    });
    */
});

function checkSize() {




    var viewPortWidth = window.innerWidth;
    //console.log("Viewport: " + viewPortWidth);
    var slider = this.bxSliderMulti.bxSlider();
    //console.log("multi-slider initiated");
    var mobileLandscapeSlideWidth = parseInt(viewPortWidth/2);
    //console.log("mobile landscape / slide width: " + mobileLandscapeSlideWidth);
    var tabletSlideWidth = parseInt(viewPortWidth/3);
    //console.log("tablet / slide width: " + tabletSlideWidth);
    var tabletLandscapeSlideWidth = parseInt(viewPortWidth/4);
    //console.log("tablet-landscape / slide width: " + tabletLandscapeSlideWidth);

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
        slideWidth: viewPortWidth,
        slideMargin: 0
    };
    if ((viewPortWidth >= 801) && (viewPortWidth <= 987)) {
        //slider.destroySlider();
        //console.log("slider destroyed");
        //slider.reloadSlider(tabletLandscape);
        this.bxSliderMulti.bxSlider(tabletLandscape);
        console.log("reloaded tablet-landscape");
    } else if ((viewPortWidth >= 600) && (viewPortWidth <= 800)) {
        //slider.destroySlider();
        //console.log("slider destroyed");
        //slider.reloadSlider(tablet);
        this.bxSliderMulti.bxSlider(tablet);
        console.log("reloaded tablet");
    } else if ((viewPortWidth >= 450) && (viewPortWidth <= 599)) {
        //slider.destroySlider();
        //console.log("slider destroyed");
        //slider.reloadSlider(mobileLandscape);
        this.bxSliderMulti.bxSlider(mobileLandscape);
        console.log("reloaded mobile landscape");
    } else if ((viewPortWidth >= 320) && (viewPortWidth <= 449)) {
        //slider.destroySlider();
        //console.log("slider destroyed");
        //slider.reloadSlider(mobile);
        this.bxSliderMulti.bxSlider(mobile);
        console.log("reloaded mobile");
    } else {
        //slider.destroySlider();
        //console.log("slider destroyed");
        //slider.reloadSlider(laptop);
        this.bxSliderMulti.bxSlider(laptop);
        console.log("reloaded laptop +");
    }
}

