import fancybox from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.js';
import fancyboxPack from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.pack.js';

class FancyBox {
    constructor() {
        this.fancyBoxMenu();
        this.fancyBoxLightBox();
    }

    fancyBoxLightBox() {
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
    fancyBoxMenu() {
        var viewPortWidth = window.innerWidth;
        var viewPortHeight = window.innerHeight;
        
        var fancyBoxWidth = 980;

        /* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
        /* $$$$$                      iframe                     $$$$$ */
        /* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
        $('.iframe').click(function(event) {
            console.log("clicked");
            var target = $(this).attr("href");   
            $.fancybox({
                href: target,
                //scrolling: 'true',
                scrolling: 'no',  
                type: 'iframe',
                width: fancyBoxWidth,
                autoSize: false, // required for width
                margin: [40, 0, 20, 0],
                height: 'auto',
                padding: 0,
                fitToView: false,
                topRatio: 0,
                autoDimension: false,
                overlayShow: false,
                tpl: {
                    closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><i class="ico-menu close-menu">Close</i></a>'
                },
                beforeLoad: function() {
                    viewPortWidth = window.innerWidth;
                    if (viewPortWidth <= fancyBoxWidth) {
                        this.width = viewPortWidth;
                        //    this.autoResize = true;
                        this.fitToView = true;
                        //    console.log(viewPortHeight + ' ' + this.height);
                    } else {
                        this.width = fancyBoxWidth;
                        //    this.autoResize = false;
                        this.fitToView = false;
                        //    console.log(viewPortHeight + ' ' + this.height);
                    };
                },
                onComplete: function() {
                    $('.fancybox-iframe').load(function() { // wait for frame to load and then gets it's height
                        //$('.fancybox-inner').height($(this).contents().find('body').height()+30);
                        console.log($('.fancybox-iframe body').height());
                    });
                },
                /*
                onUpdate: function() {
                    if (window.innerWidth <= fancyBoxWidth) {
                        this.margin = [0, 0, 0, 0];
                        this.fitToView = true;
                    } else {
                        this.margin = [40, 0, 20, 0];
                        this.width = fancyBoxWidth;
                        this.fitToView = false;
                    };
                    $.fancybox.reposition();
                },
                */
            });
            console.log("clicked");
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            console.log(target);
            event.preventDefault();
        });
    }   

}
export default FancyBox;