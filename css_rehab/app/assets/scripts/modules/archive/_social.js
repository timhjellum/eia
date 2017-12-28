
//class Social {  
console.log("Social script loaded!");

$(document).ready(function() {
    function position() {
        $("#sticker.positionable").position({
            of: $("#l-outer-wrapper"),
            my: "left top",
            at: "right top"
        });
        $('#sticker').offset({top:$(window).scrollTop() + $('header').height()+10});
    }
    position();
    $('#sticker').hover(function(event) {
        $(this).stop(true,false).animate({right: '-125px', width: '160px'}, 'slow');
    },function(event){
        $(this).stop(true,true).animate({right: '0', width: '35px'}, 'slow');
    });
    $(window).scroll(function () {position();});
    $(window).resize(function () {position();});
    $('header').on('transitionend', function() {
        position();
    });
});

//export Social;