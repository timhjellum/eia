import ScrollToIframe from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.js';
import ScrollToIframePack from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.pack.js';

class scrollToIframe {
    constructor() {
        console.log("scrollToIframe");
        var fancyBoxWidth = 980;

        /* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
        /* $$$$$                 scroll to iframe                $$$$$ */
        /* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */

        $('.scroll-to-iframe').click(function(event) {
            var target = $(this).attr("href");
            console.log(target);  
            $.fancybox({
                href: target,
                scrolling: 'yes',
                type: 'iframe',
                width: fancyBoxWidth,
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
}
export default scrollToIframe;