var jQuery = require('jquery');
//import bxslider from '../../../../node_modules/bxslider/dist/jquery.bxslider.min.js';

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
    // outer wrapper is set as 990px for laptop and desktop
    var layoutWrapperWidth = $(".l-outer-wrapper").width();

    if ((layoutWrapperWidth >= 801) && (layoutWrapperWidth <= 987)) {
        // element width / number of slides
        var slideWidth = parseInt(layoutWrapperWidth/4);
        console.log("tablet-landscape slide width: " + slideWidth);

        $(".bxslider").bxSlider({
            minSlides: 4,
            maxSlides: 4,
            nextText: "&#8250;",
            prevText: "&#8249;",
            infiniteLoop: true,
            slideWidth: slideWidth,
            slideMargin: 10
        });
        // slide width - thumb margin (7 + 7) + slideMargin: 10
        $(".thumbnail").css("width", slideWidth-24);
        $(".thumbnail").css('height', slideWidth/2);
        $(".bx-wrapper").css("width", layoutWrapperWidth);
        $(".bx-viewport").css("width", layoutWrapperWidth);
        $(".slider-multi-cards-container").css("width", layoutWrapperWidth);

        var elementHeight = $(".bx-viewport").height();
        console.log(layoutWrapperWidth + ' plus ' + elementHeight);

        $(".bx-prev").css("height", elementHeight);
        $(".bx-next").css("height", elementHeight);
        $(".bx-controls-direction").css("top", -elementHeight);

    } else if ((layoutWrapperWidth >= 600) && (layoutWrapperWidth <= 800)) {
        // element width / number of slides
        var slideWidth = parseInt(layoutWrapperWidth/3);
        console.log("tablet slide width: " + slideWidth);
        $(".bxslider").bxSlider({
            minSlides: 3,
            maxSlides: 3,
            nextText: "&#8250;",
            prevText: "&#8249;",
            infiniteLoop: true,
            slideWidth: slideWidth,
            slideMargin: 10
        });
        // slide width - thumb margin (7 + 7) + slideMargin: 10
        $(".thumbnail").css("width", slideWidth-24);
        $(".thumbnail").css('height', slideWidth/2);
        $(".bx-wrapper").css("width", layoutWrapperWidth);
        $(".bx-viewport").css("width", layoutWrapperWidth);
        $(".slider-multi-cards-container").css("width", layoutWrapperWidth);

        var elementHeight = $(".bx-viewport").height();
        console.log(layoutWrapperWidth + ' plus ' + elementHeight);

        $(".bx-prev").css("height", elementHeight);
        $(".bx-next").css("height", elementHeight);
        $(".bx-controls-direction").css("top", -elementHeight);

    } else if ((layoutWrapperWidth >= 450) && (layoutWrapperWidth <= 599)) {

        // element width / number of slides
        var slideWidth = parseInt(layoutWrapperWidth/2);
        console.log("element width: " + layoutWrapperWidth);
        console.log("mobile landscape slide width: " + slideWidth);

        $(".bxslider").bxSlider({
            minSlides: 2,
            maxSlides: 2,
            nextText: "&#8250;",
            prevText: "&#8249;",
            infiniteLoop: true,
            slideWidth: slideWidth,
            slideMargin: 10
        });
        // slide width - thumb margin (7 + 7) + slideMargin: 10
        $(".thumbnail").css("width", slideWidth-24);
        $(".thumbnail").css('height', slideWidth/2);
        $(".bx-wrapper").css("width", layoutWrapperWidth);
        $(".bx-viewport").css("width", layoutWrapperWidth);
        $(".slider-multi-cards-container").css("width", layoutWrapperWidth);

        var elementHeight = $(".bx-viewport").height();
        console.log(layoutWrapperWidth + ' plus ' + elementHeight);

        $(".bx-prev").css("height", elementHeight);
        $(".bx-next").css("height", elementHeight);
        $(".bx-controls-direction").css("top", -elementHeight);

    } else if ((layoutWrapperWidth >= 320) && (layoutWrapperWidth <= 449)) {

        console.log("mobile slide width: " + layoutWrapperWidth);

        $(".bxslider").bxSlider({
            minSlides: 1,
            maxSlides: 1,
            nextText: "&#8250;",
            prevText: "&#8249;",
            infiniteLoop: true,
            slideWidth: layoutWrapperWidth,
            slideMargin: 0
        });
        $(".thumbnail").css("width", layoutWrapperWidth);
        $(".thumbnail").css('height', layoutWrapperWidth / 2);
        $(".slide-content").css("width", layoutWrapperWidth);
        $(".bx-wrapper").css("width", layoutWrapperWidth);
        $(".bx-viewport").css("width", layoutWrapperWidth);
        $(".bx-controls-direction").css("width", layoutWrapperWidth);
        $(".bx-controls").css("width", layoutWrapperWidth);
        $(".slider-multi-cards-container").css("width", layoutWrapperWidth);

        var elementHeight = $(".bx-viewport").height();
        console.log(layoutWrapperWidth + ' plus ' + elementHeight);

        $(".bx-prev").css("height", elementHeight);
        $(".bx-next").css("height", elementHeight);
        $(".bx-controls-direction").css("top", -elementHeight);

    } else  {
        console.log("laptop and everything larger");
        $(".bxslider").bxSlider({
            minSlides: 5,
            maxSlides: 5,
            nextText: "&#8250;",
            prevText: "&#8249;",
            infiniteLoop: true,
            pagerSelector: ".slider-pager-location",
            //slideWidth: slideWidth,
            slideWidth: 154,
            slideMargin: 14
        });
        //var viewPortHeight = $(".bx-viewport").height();
        //$(".bx-wrapper").css('height', viewPortHeight);

        // slide width - thumb margin (7 + 7) + slideMargin: 14
        $(".thumbnail").css("width", slideWidth-28);
        $(".thumbnail").css('height', slideWidth/2);

        //$(".bx-viewport").css("width", layoutWrapperWidth);
        $(".slider-multi-cards-container").css("width", layoutWrapperWidth);
        $(".bx-wrapper").css("width", layoutWrapperWidth);
        $(".bx-wrapper").css("max-width", layoutWrapperWidth);

        var elementHeight = $(".bx-viewport").height();
        console.log(layoutWrapperWidth + ' plus ' + elementHeight);

        $(".bx-prev").css("height", elementHeight);
        $(".bx-next").css("height", elementHeight);
        $(".bx-controls-direction").css("top", -elementHeight);
    }
}
