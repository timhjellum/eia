import fancybox from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.js';
import fancyboxPack from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.pack.js';

class HeaderMenu {
    constructor() {
        //this.menuItem = $('.fancybox-menu');
        //this.searchPanel = $('.search-panel');
        //this.header = $('header');
        //this.footer = $('footer');
        //this.logo = $('.logo');
        //this.window = $(window);
        //this.events();
        this.openMenu();
        this.headerTabs = $('.section-tabs');
        this.checkForBaseAndCorrectTabHrefs();
        this.headerTabs.tabs();
        this.inline();
        this.iframe();
        this.youtube();
        //this.resizeEvent();
    }

    setActiveTab(section) {
      var options = { active: 0 };
      switch (section) {
        case 'nav-sources':
          options.active = 0;
          break;
        case 'nav-topics':
          options.active = 1;
          break;
        case 'nav-geography':
          options.active = 2;
          break;
        case 'nav-tools':
          options.active = 3;
          break;
        case 'nav-learn':
          options.active = 4;
          break;
        case 'nav-news':
          options.active = 5;
          break;
        case 'nav-default':
          options.active = 0;
        }
        this.headerTabs.tabs("option", "active", options.active);
    }
    checkForBaseAndCorrectTabHrefs() {
        var base = $('base');
        if(base.length > 0) {
            var baseHref = base.attr('href');
            $.each($('ul:first a', this.headerTabs), function(index, anchor) {
                if(!$(anchor).data('orig-href')) {
                  $(anchor).data('orig-href', $(anchor).attr('href'));
                }
                $(anchor).attr('href', window.location.pathname + $(anchor).data('orig-href'));
            });
        }
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
    /* not needed yet
    resizeEvent() {
        $(window).on('orientationchange resize', function() {
        console.log("resized");
        const footerWidth = $('footer').width();
            if (footerWidth > 989) {

            } else if (footerWidth <= 989) {

            };
        });
    }
    */







    openMenu() {
        var viewPortWidth = window.innerWidth;
        var viewPortHeight = window.innerHeight;
        var fbWidth = 980;
        var self = this;
        
        //    console.log(fbWidth);
        $('.fancybox-menu').fancybox({
            //scrolling: 'visible', // true, false or auto
            scrolling: 'true',
            type: 'inline',
            width: fbWidth,
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
                if (viewPortWidth <= fbWidth) {
                    this.width = viewPortWidth;
                    //    this.autoResize = true;
                    this.fitToView = true;
                    //    console.log(viewPortHeight + ' ' + this.height);
                } else {
                    this.width = fbWidth;
                    //    this.autoResize = false;
                    this.fitToView = false;
                    //    console.log(viewPortHeight + ' ' + this.height);
                };
            },
            beforeShow: function() {
                $('.section-tabs').parent().parent().parent().parent().addClass('global-nav');
                self.setActiveTab($(this.element).data('target'));
            //},
            //beforeShow: function(){
                $('<div class="overlay"></div>').appendTo(document.body);
            },
            afterClose: function() { $('.overlay').remove(); },
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
            },
            /*
            helpers: {
                overlay: {
                    locked: true,
                    css: {
                        //'background': 'rgba(58, 42, 45, 0.95)',
                        //'display': 'inline',
                        //'position': 'fixed', // ze trick 
                        //'top': '0',
                        //'bottom': '0',
                        //'left': '0',
                        //'right': '0',
                        'z-index': '8020',
                        'width': '100%',
                        'height': '100%',
                        'display': 'block',
                        'position': 'absolute',
                        'top': '0',
                        'background': 'rgba(0,0,0,0.7)'
                    }
                }
            }
            */
        });
    }
    /* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
    /* $$$$$                      inline                     $$$$$ */
    /* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
    inline() {
        $('a.inline').click(function() {
            var width = $('a').data('options').width;
            var height = $('a').data('options').height;
            $('.fancybox').fancybox({
            padding: 0,
            closeClick: true,
            closeBtn: true,
            width: width,
            height: height,
            autoSize: false, // required for width
            margin: [40, 0, 20, 0],
            fitToView: false,
            autoDimension: false,
                tpl: {
                    closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><i class="ico-menu close-menu">Close</i></a>'
                },
            });
        });
    }
    /* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
    /* $$$$$                     youtube                     $$$$$ */
    /* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
    youtube() {
        $('a.youtube').click(function() {
            var width = $('a').data('options').width;
            var height = $('a').data('options').height;
            $('.fancybox').fancybox({
            padding: 0,
            closeClick: true,
            closeBtn: true,
            width: width,
            height: height,
            autoSize: false, // required for width
            margin: [40, 0, 20, 0],
            fitToView: false,
            autoDimension: false,
                tpl: {
                    closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><i class="ico-menu close-menu">Close</i></a>'
                },
            });
        });
    }
    /* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
    /* $$$$$                      iframe                     $$$$$ */
    /* $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ $$$$$ */
    iframe() {



        var viewPortWidth = window.innerWidth;
        var viewPortHeight = window.innerHeight;
        var fbWidth = 980;
        var self = this;

        console.log("hola");
        $('.iframe').fancybox({
            scrolling: 'no',
            type: 'iframe',
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
                    this.fitToView = true;
                } else {
                    this.width = fbWidth;
                    this.fitToView = false;
                };               
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
                $('.fancybox-lock body').css('overflow','hidden');
            },
            helpers: {
                overlay: {
                    locked: true,
                    css: {
                        'background': 'rgba(58, 42, 45, 0.95)',
                        'display': 'inline',
                        'z-index': '8020',
                        'width': '100%',
                        'height': '100%',
                        'display': 'block',
                        'position': 'absolute',
                        'top': '0',
                        'background': 'rgba(0,0,0,0.7)',
                    }
                }
            }
        });










        /*
        var viewPortWidth = window.innerWidth;
        var viewPortHeight = window.innerHeight;
        var iFrameHeight = $('iframe').height();
        var fancyBoxWidth = 980;
        //console.log("iFrame Height: " + iFrameHeight);
        var self = this;
        //console.log("FancyBox Width: " + fancyBoxWidth + ", View Port Height: " + viewPortHeight + ", view Port Width: " + viewPortWidth);

        //console.log("iFrame");
        $("a.iframe").fancybox({
            type: "iframe",
            //fitToView: true,
            //autoSize: true
            //scrolling: 'visible',
            width: fancyBoxWidth,
            height: 'auto',
            autoSize: false, // required for width
            margin: [40, 0, 20, 0],
            padding: 0,
            fitToView: false,
            topRatio: 0,
            autoDimension: false,
            'onComplete': function() {
                $('#fancybox-frame').load(function() { // wait for frame to load and then gets it's height
                    $('#fancybox-content').height($(this).contents().find('body').height()+30);
                });
            },
//        });
            tpl: {
                closeBtn: '<a title="Close" class="close-menu" href="javascript:;"><i class="ico-menu close-menu">Close</i></a>'
            },
            beforeLoad: function() {
                viewPortWidth = window.innerWidth;
                if (viewPortWidth <= fancyBoxWidth) {
                    this.width = viewPortWidth;
                    //	this.autoResize = true;
                    this.fitToView = true;
                    //	console.log(viewPortHeight + ' ' + this.height);
                } else {
                    this.width = fancyBoxWidth;
                    //	this.autoResize = false;
                    this.fitToView = false;
                    //	console.log(viewPortHeight + ' ' + this.height);
                };
            },
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
            helpers: {
                overlay: {
                    locked: true,
                    css: {
                        'background': 'rgba(58, 42, 45, 0.95)',
                        'display': 'inline',
                        'z-index': '8020',
                        'width': '100%',
                        'height': '100%',
                        'display': 'block',
                        'position': 'absolute',
                        'top': '0',
                        'background': 'rgba(0,0,0,0.7)',
                    }
                }
            }
        });
        */
        /*
        $(document).on('click', 'a.iframe', function(e){
            e.preventDefault();
            var anchor = '';
            var url = $(this).attr('href');
            var anchorIdx = url.indexOf('#');
        
            if (anchorIdx > -1) {
                anchor = url.substring(anchorIdx, url.length);
                url = url.substring(0, anchorIdx);
            }
        
            if(url.indexOf('content_only=') == -1) {
                url += (url.indexOf('?') > -1) ? '&' : '?';
                url += 'content_only=1';
            }
        
            if (!!$.prototype.fancybox){
                $.fancybox({
                    'padding':  20,
                    'width':    '70%',
                    'height':   '70%',
                    'type':     'iframe',
                    'href':     url + anchor
                });
            }
        });
        */
    }
    
}
export default HeaderMenu;