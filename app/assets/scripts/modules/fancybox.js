import fancybox from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.js';
import fancyboxPack from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.pack.js';

class FancyBox {
    constructor() {
        this.fancyBoxMenu();
        this.fancyBoxLightBox();
        this.fancyBoxScrollToIframe();
        //this.fancyBoxInlineContent();
        this.fancyBoxInlineTrigger = $('.inline-content-trigger');
        this.events();


        $('.image-modal').fancybox({
            padding: 0,
            //alert("please change class name to enlarge-image")
        });
        $('.enlarge-content').fancybox({
            padding: 0,
        });
        $('.enlarge-image').fancybox({
            padding: 0,
        });

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

        $("button.lightbox").fancybox({
            autoResize: false, // To sidestep issue with Highcharts in Fancybox 2 disappearing when the browser is resized -SNW
            transitionIn: 'elastic',
            transitionOut: 'elastic',
            speedIn: 600,
            speedOut: 200,
            //'overlayShow': false
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
                        //console.log($('.fancybox-iframe body').height());
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

            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            //console.log(target);
            event.preventDefault();
        });
    }


    fancyBoxScrollToIframe() {
        /*
        $('scroll-to-iframe').fancybox({
            type: 'inline',
            tpl: {
                closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><i class="ico-menu close-menu">Close</i></a>'
            },
        });
        */

        

        const iFrameWidth = ($('footer').width() - 60);
        //var fancyBoxWidth = 980;
        //console.log(iFrameWidth);

        $('.scroll-to-iframe').click(function(event) {
            var target = $(this).attr("href");
            //console.log(target);  
            $.fancybox({
                href: target,
                scrolling: 'yes',
                type: 'iframe',
                width: iFrameWidth,
                autoSize: false, // required for width
                margin: [0, 0, 0, 0],
                height: 'auto',
                padding: 0,
                fitToView: false,
                topRatio: 0,
                autoDimension: false,
                overlayShow: false,
                tpl: {
                    closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><i class="ico-menu close-menu">Close</i></a>'
                },
                iframe: {
                    preload: false
                }
            });
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            event.preventDefault();

            var iFrameHeight = $('.fancybox-inner').height();
            //console.log(iFrameHeight);
            $('iframe').css('height', iFrameHeight);
        });
    }   






    
    fancyBoxInlineContent() {   
        /* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
        /* $$$$$                      inline                     $$$$$ */
        /* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
        //console.log("v2.2");


        //this.header.toggleClass('show');
        //this.logo.toggleClass('show');
        //this.searchPanel.toggleClass('show');

   
        $('.enlarge-content').on('click', function(e) {
            e.preventDefault(); 
            var $this = $(this); 
            var elementWidth = $this.attr("data-width");
            var elementHeight = $this.attr("data-height");
            console.log('element width is :' + elementWidth + ', element height is :' + elementHeight);
            $.fancybox({
                width: elementWidth,
                height: elementHeight,
                autoDimensions: false,
                autoSize: false,
                tpl: {
                    closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><span class="ico-menu close-menu">Close</span></a>'
                },
            });
        });

    }

    events() {
        //this.fancyBoxInlineTrigger.click(this.fancyBoxInlineContent());
        $('.inline-content-trigger').on('click', function(event) {
            var $this = $(this); 
            var elementWidth = $this.attr("data-width");
            var elementHeight = $this.attr("data-height");
            //console.log('element width is :' + elementWidth + ', element height is :' + elementHeight);
            event.preventDefault(); 
        });  
        /*
        if(typeof $.fancybox == 'function') {
        console.log("FancyBox is loaded");
        } else {
        console.log("No FB");
        }
        */
       $('.inline-content').fancybox({
            type: 'inline',
            tpl: {
                closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><i class="ico-menu close-menu">Close</i></a>'
            },
        });
    }
}
export default FancyBox;