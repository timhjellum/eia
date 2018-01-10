console.log("social sticker checking in...");

class SocialSticker {
    constructor() {
//        this.searchPanel = $("#sticker.positionable");
//        this.sticker = $('#sticker');
//        this.logo = $('header');
//        this.events();

            function position() {
                $("#sticker.positionable").position({
                    of: $(".l-outer-wrapper"),
                    my: "left top",
                    at: "right top"
                });
                $('#sticker').offset({top:$(window).scrollTop() + $('header').height()+2});
            }

            position();
            $('#sticker').hover(function(event) {
                $(this).stop(true,false).animate({right: '-125px', width: '160px'}, 'slow');
            },function(event){
                $(this).stop(true,true).animate({right: '0', width: '35px'}, 'slow');
            });
            $(window).scroll(function() {
                position();
            });
            $(window).resize(function() {
                position();
            });
            $('header').on('transitionend', function() {
                position();
            });


    }
/*
    events() {
        this.sticker.hover(this.hoverEvent.bind(this));       
    }
    hoverEvent() {
        this.header.toggleClass('show');
        this.logo.toggleClass('show');
        this.searchPanel.toggleClass('show');
    } 
*/

}
export default SocialSticker;