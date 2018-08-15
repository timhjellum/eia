class SocialSticker {
    constructor() {
        this.target = $('#sticker');
        this.hover(this.target);
        function position() {
            $('#sticker.positionable').position({
                of: $('.l-inner-wrapper'),
                my: "left top",
                at: "right top"
            });
            $('#sticker').offset({top:$(window).scrollTop() + $('header').height()+2});
        }
        
        $('#sticker').hover(function(event) {
            },function(event){
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
        const load = () => {
            position();
        } 
        window.onload = load;
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
}
export default SocialSticker;