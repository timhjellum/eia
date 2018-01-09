

$(document).ready(function() {
    function position() {
        $('#sticker.positionable').position({
            of: $('#outerX'),
            my: 'left top',
            at: 'right top'
        });
        console.log("dilly dilly");
//        if ($('header').height() > 96) {
//            console.log($('header').height());
            $('#sticker').offset({top:$(window).scrollTop()+96});
//        }
//        if ($('header').height() < 40) {
//            console.log($('header').height());
//            $('#sticker').offset({top:$(window).scrollTop()+96});
//        }



        

    }
    
    position();

    $('#sticker').hover(function(event){
        $(this).stop(true,false).animate({right: '-125px', width: '160px'}, 'slow');
    },function(event){  
        $(this).stop(true,true).animate({right: '0', width: '35px'}, 'slow');
    });
    $(window).scroll(function () {position();});
    $(window).resize(function () {position();});
});


