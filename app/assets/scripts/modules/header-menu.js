//const $ = require("jquery");
import fancybox from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.js';
import fancyboxPack from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.pack.js';

class HeaderMenu {
    constructor() {
        this.menuItem = $('.fancybox-menu');
        this.searchPanel = $('.search-panel');
        this.header = $('header');
        this.footer = $('footer');
        this.logo = $('.logo');
        this.window = $(window);
        //this.events();
        this.openMenu();
    }



    lightBox() {
        // this.closeButton.prepend('<i class="ico-menu close">Close</i>');
        // console.log("fancybox lightbox");
        $("a.lightbox").fancybox({
            autoResize: false, // To sidestep issue with Highcharts in Fancybox 2 disappearing when the browser is resized -SNW
            'transitionIn': 'elastic',
            'transitionOut': 'elastic',
            'speedIn': 600,
            'speedOut': 200,
            'overlayShow': false
        });
        // For HTML content, since Fancybox 2 now requires specifying IFRAME mode explicitly for non-images
        $("a.lightboxhtml").fancybox({
            type: "iframe",
            fitToView: true,
            autoSize: true
        });
        $("#youtube").fancybox({
            'scrolling': 'no',
            'titleShow': false,
            'onClosed': function() {
                $("#login_error").hide();
            }
        });
    }
        
        //events() {
        //	this.window.resize(this.checkSize.bind(this));
        //	$("a.lightbox").click(lightBox());
        //}
    openMenu() {

            var viewPortWidth = window.innerWidth;
            var viewPortHeight = window.innerHeight;
            var fbWidth = 980;
            //	console.log(fbWidth);
            $('.fancybox-menu').fancybox({
                scrolling: 'visible',
                type: 'inline',
                width: fbWidth,
                autoSize: false, // required for width
                margin: [40, 0, 20, 0],
                height: 'auto',
                padding: 0,
                fitToView: false,
                topRatio: 0,
                autoDimension: false,
                tpl: {
                    closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><i class="ico-menu close-menu">Close</i></a>'
                },
                beforeLoad: function() {
                    viewPortWidth = window.innerWidth;
                    if (viewPortWidth <= fbWidth) {
                        this.width = viewPortWidth;
                        //	this.autoResize = true;
                        this.fitToView = true;
                        //	console.log(viewPortHeight + ' ' + this.height);
                    } else {
                        this.width = fbWidth;
                        //	this.autoResize = false;
                        this.fitToView = false;
                        //	console.log(viewPortHeight + ' ' + this.height);
                    };
                },
                beforeShow: function() {
                    $('.dilly-tabs').parent().parent().parent().parent().addClass('global-nav');
                },
                onUpdate: function() {
                    if (window.innerWidth <= fbWidth) {
                        this.margin = [0, 0, 0, 0];
                        this.fitToView = true;
                    } else {
                        this.margin = [40, 0, 20, 0];
                        this.width = fbWidth;
                        this.fitToView = false;
                    };
                    $.fancybox.reposition();
                    $('.dilly-tabs .ui-tabs-anchor').click(function() {
                        $.fancybox.update();
                    });
                },
                helpers: {
                    overlay: {
                        locked: true // try changing to true and scrolling around the page
                    }
                }
            });
        }
        //checkSize() {
        /*
        var viewPortWidth = window.innerWidth;
        var viewPortHeight = window.innerHeight;

        if (viewPortWidth > 960) {
        	//(viewPortWidth + " = laptop and desktop");
        	$('.fancybox-wrap').addClass('fancybox-laptop');
        	$('.fancybox-wrap').removeClass('fancybox-mobile');
        } else if (viewPortWidth <= 960) {
        	//console.log(viewPortWidth + " = mobile");
        	$('.fancybox-wrap').addClass('fancybox-mobile');
        	$('.fancybox-wrap').removeClass('fancybox-laptop');
        }
        */
        //}
}
export default HeaderMenu;