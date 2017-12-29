import $ from 'jquery';

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
        }
        if (this.browserWindow.scrollTop() < 97) {
            //console.log("expand");
            $('header').removeClass('shrink');
        }
    }
}
export default ShrinkExpand;