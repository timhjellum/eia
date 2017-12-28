import $ from 'jquery';

//These are the condition I need to access

// need header width
// if ((layoutWrapperWidth) >= "988") {
// if ((layoutWrapperWidth >= 320) && (layoutWrapperWidth <= 987)) {
// if ((layoutWrapperWidth) >= "988") {
// if ((layoutWrapperWidth >= 801) && (layoutWrapperWidth <= 987)) {
// if ((layoutWrapperWidth >= 600) && (layoutWrapperWidth <= 800)) {
// if ((layoutWrapperWidth >= 450) && (layoutWrapperWidth <= 599)) {
// if ((layoutWrapperWidth >= 320) && (layoutWrapperWidth <= 449)) {

/*
        //console.log('header shrink expand script found!');
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= 97) {
                    $('header').addClass('shrink');
                } else {
                    $('header').removeClass('shrink');
                }
            });
*/


class SizeAndPosition {
    constructor() {

        //var windowScrollPositionTop = $(window).scrollTop();
        //$(window).scroll(function() {
        //    console.log(windowScrollPositionTop);
        //});
        

        this.browserWindow = $(window);
        this.Scroll = $(this.browserWindow).scroll(this.events.bind(this));
    }
    events() { 
        if (this.browserWindow.scrollTop() > 96) {
            console.log("shrink");
            $('header').addClass('shrink');
        }
        if (this.browserWindow.scrollTop() < 97) {
            console.log("expand");
            $('header').removeClass('shrink');
        }
    }









/*
    this.Header = $('header');

    if (windowPositionScrollTop > 96) {
//        console.log("shrink");
        $('header').addClass('shrink');
    }
    if (windowPositionScrollTop < 97) {
//        console.log("expand");
        $('header').removeClass('shrink');
    }
*/





        /*  
    constructor(els, pos) {
        $(window).scroll(function() {

            var windowPositionScrollTop = $(window).scrollTop();

            if (windowPositionScrollTop > 96) {
                console.log("shrink");
                $('header').addClass('shrink');
            }
            if (windowPositionScrollTop < 97) {
                console.log("expand");
                $('header').removeClass('shrink');
            }
        });



 
        $(window).scroll(function() {

            var windowPositionScrollTop = $(window).scrollTop();

            if (windowPositionScrollTop > 96) {
                console.log("shrink");
                $('header').addClass('shrink');
            }
            if (windowPositionScrollTop < 97) {
                console.log("expand");
                $('header').removeClass('shrink');
            }
            // $(window).scroll(function() {
            //  console.log(windowPositionScrollTop);
            // });
        });
        */

}
export default SizeAndPosition;