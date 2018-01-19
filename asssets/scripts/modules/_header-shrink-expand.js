import $ from 'jquery';

console.log("shrink-expand checking in...");

class ShrinkExpand {
    constructor() {
        // dom objects
        this.browserWindow = $(window);
        this.Scroll = $(this.browserWindow).scroll(this.events.bind(this));
    }
    events() { 
        if (this.browserWindow.scrollTop() > 96) {
            //console.log("shrink");
            $('header').addClass('shrink');
            //$('#sticker').offset({top:$('header').scrollTop()+60});
            //$('#sticker').addClass('shrink');
        }
        if (this.browserWindow.scrollTop() < 97) {
            //console.log("expand");
            $('header').removeClass('shrink');
            //$('#sticker').offset({top:$('header').scrollTop()+96});
            //$('#sticker').removeClass('shrink');
        }
    }
}
export default ShrinkExpand;