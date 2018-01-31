//console.log("social sticker checking in...");

class SocialSticker {
    constructor() {
        this.target = $('#sticker');
        this.hover(this.target);

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
//            $(this).stop(true,false).animate({right: '-125px', width: '160px'}, 'slow');
        },function(event){
//            $(this).stop(true,true).animate({right: '0', width: '35px'}, 'slow');
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
    
    hover(target) {
        let $hoverTarget = $(target);
        let rolloverClass = 'hover';
        $hoverTarget.hover(
        (event) => {
            $(event.currentTarget).addClass(rolloverClass);    
        },
        (event) => {
            $(event.currentTarget).removeClass(rolloverClass); 
        })
    }

/*


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
*/    
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

/*


            function position() {
              $( "#sticker.positionable" ).position({
                of: $( "#outerX" ),
                my: "left top",
                at: "right top"
              });
              $('#sticker').offset({top:$(window).scrollTop()+10});
            }
         
            position();
        
            $('#sticker').hover(function(event){
               $(this).stop(true,false).animate({right: '-125px', width: '160px'}, 'slow');
            },function(event){  
                $(this).stop(true,true).animate({right: '0', width: '35px'}, 'slow');
            });
            $(window).scroll(function () {position();});
            $(window).resize(function () {position();});


    */