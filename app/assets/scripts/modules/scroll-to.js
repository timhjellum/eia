class ScrollTo {
    constructor() {
        $('.l-inner-wrapper a[href*="#"]')
        .not('.l-inner-wrapper [href="#"]')
        .not('.l-inner-wrapper [href="#0"]')
        .click(function (event) {
           //console.log("clicked");
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 60
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.closest('h3').next('div').css('display', 'block');
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    });
                }
            }
        });
// old
//function scrollToAnchor(pageHash){
//    if($('a[name='+pageHash+']:not(.ui-tabs-anchor)').length>0){
//        $('html').animate({scrollTop: $('a[name='+pageHash+']').offset().top-50}, 'slow');
//        console.log(pageHash + ' offsest: ' + $('a[name='+pageHash+']').offset().top +' page load anchor scroll - 1');
//    }
//    else if($(window.location.hash).length>0){
//        $('html').animate({scrollTop: $(window.location.hash).offset().top-50}, 'slow');
//        console.log($(window.location.hash) + ' offsest: ' + $(window.location.hash).offset().top +' page load page scroll - 2');
//    }
//}
        var windowHash = decodeURI(window.location.hash);
        // opens accordion when user is navigating to the data page from another page        
        if (windowHash) {
           //console.log(windowHash);
            var target = $(windowHash);
            target = target.length ? target : $('[name=' + windowHash.substr(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 60
                }, 1000, function () {
                    var $target = $(target);
                    $target.closest('h3').next('div').css('display', 'block');
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    }
                });
            }
        }
        //if (document.referrer.toLowerCase().indexOf('eia.gov') > 0) {
        //    // if referrer is eia.gov, show below. console.log("referrer is eia");
        //    $('.l-report-header > .l-col').prepend('<a href="' + document.referrer + '" class="go-back"><span class="ico close"><span>Go Back</span></span></a>');
        //}
    }
}
export default ScrollTo;