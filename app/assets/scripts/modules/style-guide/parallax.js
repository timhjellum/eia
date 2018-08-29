var $ = require("jquery");
import Parallax from '../../../../node_modules/scroll-parallax/dist/Parallax.js';

class ParallaxModule {
    constructor() {

    // run on initial page load
    //checkSize();
    // run on window resize
    //$(window).resize(checkSize);




/*
        var parallax = new Parallax('.parallax', {})
        parallax.on('image:loaded', function() {
            console.log(arguments)
        })
        parallax.init();
*/
        console.log('Got jQuery?')

        this.checkSize();

    }

    checkSize() {
        var viewPortWidth = window.innerWidth;

        var laptop = {
            offsetYBounds: 50,
            intensity: 30,
            center: 0.5,
            safeHeight: 0.15
        };
        var tabletLandscape = {
            offsetYBounds: 50,
            intensity: 30,
            center: 0.5,
            safeHeight: 0.15
        };
        var tablet = {
            offsetYBounds: 50,
            intensity: 30,
            center: 0.5,
            safeHeight: 0.15
        };
        var mobileLandscape = {
            offsetYBounds: 50,
            intensity: 30,
            center: 0.5,
            safeHeight: 0.15
        };
        var mobile = {
            offsetYBounds: 50,
            intensity: 30,
            center: 0.5,
            safeHeight: 0.15
        };
        if ((viewPortWidth >= 801) && (viewPortWidth <= 987)) {
            var p = new Parallax('.parallax', {tabletLandscape}).init();
            console.log(tabletLandscape);
        } else if ((viewPortWidth >= 600) && (viewPortWidth <= 800)) {
            var p = new Parallax('.parallax', {tablet}).init();
            console.log(tablet);
        } else if ((viewPortWidth >= 450) && (viewPortWidth <= 599)) {
            var p = new Parallax('.parallax', {mobileLandscape}).init();
            console.log(mobileLandscape);
        } else if ((viewPortWidth >= 320) && (viewPortWidth <= 449)) {
            var p = new Parallax('.parallax', {mobile}).init();
            console.log(mobile);
        } else {
            var p = new Parallax('.parallax', {laptop}).init();
            console.log(laptop);
        }
    }
}
export default ParallaxModule;


