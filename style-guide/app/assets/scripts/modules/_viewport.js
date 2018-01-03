import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints.min';

//this is not used


class ShrinkHeader {
    constructor() {
        this.Header = $("header");
//        this.checkOnWindowLoad();
        this.createWaypoints();
    }
//    checkOnWindowLoad() {
//        this.header.removeClass("shrink");
//    }
    createWaypoints() {
        this.Header.each(function() {
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass("shrink");
                },
                offset: 100
            });
        });
    }
}
export default ShrinkHeader;

// if scroll = 70 addclass shrink
/*
class ElementSize {
    constructor() {
        this.Window = $(window);
        this.checkOnWindowLoad();
        this.createWaypoints();
    }
    checkOnWindowLoad() {

    }
    createWaypoints() {

    }
}

export default ElementSize;
*/