import $ from 'jquery';

class ElementSize {
    constructor() {
        this.browserWindow = $(window);
        this.pageScroll = $(this.browserWindow).scroll(this.events.bind(this));
        this.pageLoad = $(this.browserWindow).ready(this.events.bind(this));
    }
    events() { 
        var elementWidth = $(".l-outer-wrapper").width();
        console.log(elementWidth);
    }
}
export default ElementSize;