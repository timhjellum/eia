//var $ = require("jquery");
import fancybox from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.js';
import fancyboxPack from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.pack.js';

class FancyBox {
    constructor() {

        this.menuItem = $('.fancybox-menu');
        this.searchPanel = $('.search-panel');
        this.header = $('header');
        this.footer = $('footer');
        this.logo = $('.logo');
        this.window = $(window);
        //this.events();
        this.openMenu();
        this.inline();
    

        var viewPortWidth = window.innerWidth;
        var viewPortHeight = window.innerHeight;
        var defaultWidth = 980;




        /* This is basic - uses default settings */
        
        $("a#single_image").fancybox();

        /* Using custom settings */
        

    
        /* Apply fancybox to multiple items 
        if ((footerWidth >= 320) && (footerWidth <= 987)) {
        } else {
        };
        */

//        $(window).on('orientationchange resize', function() {

        
//            $('.fancybox-wrap').css('margin', '0');







            $(window).on('orientationchange resize', function() {

            }).trigger('resize');// on load, trigger the resize event
            var mySettings = {
                scrolling: 'visible',
                width: defaultWidth,
                autoSize: false, // required for width
                margin: [40, 0, 20, 0],
                height: 'auto',
                padding: 0,
                fitToView: false,
                //fitToView: true,
                topRatio: 0,
                autoDimension: false,
    
            }
        }
                
                
                
                
                
        inline() {
        /* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
        /* $$$$$                      inline                     $$$$$ */
        /* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
            
            const footerWidth = $('footer').width();
            const maxWidth = 980;

            if (maxWidth >= footerWidth) {
                var fancyBoxWidth = footerWidth;
                $('.fancybox-inner').css('width', '100%');
                $('.fancybox-wrap').css('margin', '0 0 0 0');
                console.log(fancyBoxWidth)
            } else {
                var fancyBoxWidth = maxWidth;
                console.log(fancyBoxWidth)
                $('.fancybox-inner').css('width', '980px');
                $('.fancybox-wrap').css('margin', '40px 0 0 0');
            }

            $("a.inline").fancybox({
                scrolling: 'visible',
                width: fancyBoxWidth,
                autoSize: false, // required for width
                margin: [40, 0, 20, 0],
                height: 'auto',
                padding: 0,
                fitToView: false,
                topRatio: 0,
                //autoDimension: false,
                type: 'inline',

                tpl: {
                    closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><i class="ico-menu close-menu">Close</i></a>'
                },             
            });
        }


















/*

        //var defaultWidth = 980;
        console.log('footer: ' + footerWidth);
        $('.image').fancybox({
            scrolling: 'visible',
            width: '100%',
            autoSize: false, // required for width
            //margin: [40, 0, 20, 0],
            height: 'auto',
            padding: 0,
            //fitToView: false,
            //fitToView: true,
            topRatio: 0,
            autoDimension: false,
            //type: 'image',
            tpl: {
                closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><i class="ico-menu close-menu">Close</i></a>'
            },
            onUpdate: function() {
                if (window.innerWidth <= defaultWidth) {
                    this.margin = [0, 0, 0, 0];
                    this.fitToView = true;
                    $('.fancybox-image, .fancybox-inner, .fancybox-wrap').width(footerWidth);
                } else {
                    this.margin = [40, 0, 20, 0];
                    this.width = defaultWidth;
                    this.fitToView = false;
                    $('.fancybox-image, .fancybox-inner, .fancybox-wrap').width(defaultWidth);
                };
                $('.fancybox-overlay').css({
                    'z-index':'8040',
                    'width':'100%',
                    'height':'100%',
                    'display':'block',
                    'position':'absolute',
                    'top':'0'
                });
            },
            helpers : {
                title : {
                    type : 'over'
                }
            }
        });
*/

/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
/* $$$$$                      inline                     $$$$$ */
/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */

/* not working
        console.log("inline ready")
        $('.inline').fancybox({
            scrolling: 'visible',
            width: footerWidth,
            autoSize: false, // required for width
            //margin: [40, 0, 20, 0],
            height: 'auto',
            padding: 0,
            //fitToView: false,
            //fitToView: true,
            topRatio: 0,
            autoDimension: false,
            type: 'inline',
            tpl: {
                closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><i class="ico-menu close-menu">Close</i></a>'
            },
            onUpdate: function() {
                if (window.innerWidth <= defaultWidth) {
                    this.margin = [0, 0, 0, 0];
                    this.fitToView = true;
                    $('.fancybox-image, .fancybox-inner, .fancybox-wrap').width(footerWidth);
                } else {
                    this.margin = [40, 0, 20, 0];
                    this.width = defaultWidth;
                    this.fitToView = false;
                    $('.fancybox-image, .fancybox-inner, .fancybox-wrap').width(defaultWidth);
                };
                $('.fancybox-overlay').css({
                    'z-index':'8040',
                    'width':'100%',
                    'height':'100%',
                    'display':'block',
                    'position':'absolute',
                    'top':'0'
                });
            },
            helpers : {
                title : {
                    type : 'over'
                }
            }
        });
*/

/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
/* $$$$$                      inline                     $$$$$ */
/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */

/*
        $('.iframe').on("click", function() {
            thisHref = this.href();
            //thisHash = this.href.split("#")[1];
            console.log("open iframe");
            //targetContent = $("<div />").load(thisHref + " #" + thisHash);
            var URL = thisHref;
            $.fancybox({
                href: thisHref,
                type: 'iframe',
                scrolling: 'visible',
                autoSize: false, // required for width
                height: iframeHeight,
                padding: 0,
                topRatio: 0,
                autoDimension: false,
                tpl: {
                    closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><i class="ico-menu close-menu">Close</i></a>'
                },
                onUpdate: function() {
                    if (window.innerWidth <= defaultWidth) {
                        this.margin = [0, 0, 0, 0];
                        this.height = viewPortHeight;
                        this.fitToView = true;
                        $('fancybox-type-iframe, .fancybox-wrap').width(footerWidthh);
                        $('.fancybox-type-iframe, .fancybox-inner, fancybox-outer').height(viewPortHeight);
                    } else {
                        this.margin = [40, 0, 20, 0];
                        this.width = defaultWidth;
                        this.height = iframeHeight;
                        this.fitToView = false;
                        $('fancybox-type-iframe, .fancybox-wrap').width(defaultWidth);
                        $('.fancybox-type-iframe, .fancybox-inner, fancybox-outer').height(iframeHeight);
                    };
                    $('.fancybox-overlay').css({
                        'z-index':'8040',
                        'width':'100%',
                        'height':'100%',
                        'display':'block',
                        'position':'absolute',
                        'top':'0'
                    });
                },
                helpers : {
                    title : {
                        type : 'over'
                    }
                }
            }); // fancybox
            return false; // prevent default
            
        }); // on
*/

/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
/* $$$$$                     YouTube                     $$$$$ */
/* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */

/*
        // you tube video
        // 2. This code loads the IFrame Player API code asynchronously.
        var tag = document.createElement('script');
  
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        var player;
        function onYouTubeIframeAPIReady() {
          player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: 'M7lc1UVf-VE',
            events: {
              'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange
            }
          });
        }
  
        // 4. The API will call this function when the video player is ready.
        function onPlayerReady(event) {
          event.target.playVideo();
        }
  
        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        //    the player should play for six seconds and then stop.
        var done = false;
        function onPlayerStateChange(event) {
          if (event.data == YT.PlayerState.PLAYING && !done) {
            setTimeout(stopVideo, 6000);
            done = true;
          }
        }
        function stopVideo() {
          player.stopVideo();
        }
        var player;
        function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: 'M7lc1UVf-VE',
            events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
            }
        });
        }
*/
       































/*

    }
    lightBox() {

        // FancyBox jQuery plugin
        //  $("a.lightbox").fancybox();
        $("a.lightbox").fancybox({

//onUpdate: function() {
//              $.each(Highcharts.charts, function(index, chart){ if ($(chart.container).parents('.fancybox-outer').length > 0){ chart.redraw();console.log('redrawing');} });
//            },

            autoResize: false // To sidestep issue with Highcharts in Fancybox 2 disappearing when the browser is resized -SNW
        });

        // For HTML content, since Fancybox 2 now requires specifying IFRAME mode explicitly for non-images
        $("a.lightboxhtml").fancybox({
            type: "iframe",
            fitToView: true,
            autoSize: true
        });


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
        */





        //events() {
        //	this.window.resize(this.checkSize.bind(this));
        //	$("a.lightbox").click(lightBox());
        //}

    openMenu() {
            var viewPortWidth = window.innerWidth;
            var viewPortHeight = window.innerHeight;
            var defaultWidth = 980;
            //	console.log(defaultWidth);
            $('.fancybox-menu').fancybox({
                scrolling: 'visible',
                type: 'inline',
                width: defaultWidth,
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
                    if (viewPortWidth <= defaultWidth) {
                        this.width = viewPortWidth;
                        //	this.autoResize = true;
                        this.fitToView = true;
                        //	console.log(viewPortHeight + ' ' + this.height);
                    } else {
                        this.width = defaultWidth;
                        //	this.autoResize = false;
                        this.fitToView = false;
                        //	console.log(viewPortHeight + ' ' + this.height);
                    };
                },
                beforeShow: function() {
                    $('.section-tabs').parent().parent().parent().parent().addClass('global-nav');
                },
                onUpdate: function() {
                    if (window.innerWidth <= defaultWidth) {
                        this.margin = [0, 0, 0, 0];
                        this.fitToView = true;
                    } else {
                        this.margin = [40, 0, 20, 0];
                        this.width = defaultWidth;
                        this.fitToView = false;
                    };
                    $.fancybox.reposition();
                    $('.section-tabs .ui-tabs-anchor').click(function() {
                        $.fancybox.update();
                    });
                    $('.fancybox-overlay').css({
                        'z-index':'8040',
                        'width':'100%',
                        'height':'100%',
                        'display':'block',
                        'position':'absolute',
                        'top':'0'});
                    },
                    helpers: {
                        overlay: {
                            locked: true // try changing to true and scrolling around the page
                        }
                    }
                });
        //}       
    }
}
export default FancyBox;