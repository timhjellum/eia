import fancybox from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.js';
import fancyboxPack from '../../../../node_modules/fancybox/dist/js/jquery.fancybox.pack.js';

class HeaderMenu {
    constructor() {
        this.initMenu();
        //this.headerTabs = $('.section-tabs');
        this.checkForBaseAndCorrectTabHrefs();
        //this.headerTabs.tabs();
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
        $('.section-tabs').tabs("option", "active", options.active);
    }
    checkForBaseAndCorrectTabHrefs() {
        var base = $('base');
        if(base.length > 0) {
            var baseHref = base.attr('href');
            $.each($('ul:first a', $('.section-tabs')), function(index, anchor) {
                if(!$(anchor).data('orig-href')) {
                  $(anchor).data('orig-href', $(anchor).attr('href'));
                }
                $(anchor).attr('href', window.location.pathname + window.location.search + $(anchor).data('orig-href'));
            });
        }
    }

    initMenu() {
        var viewPortWidth = window.innerWidth;
        var viewPortHeight = window.innerHeight;
        var fancyBoxWidth = 980;
        var self = this;
        
        //    console.log(fbWidth);
        $('.fancybox-menu').fancybox({
            scrolling: 'visible',
            type: 'inline',
            width: fancyBoxWidth,
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
                self.checkForBaseAndCorrectTabHrefs();
                viewPortWidth = window.innerWidth;
                if (viewPortWidth <= fancyBoxWidth) {
                    this.width = viewPortWidth;
                    this.fitToView = true;
                } else {
                    this.width = fancyBoxWidth;
                    this.fitToView = false;
                };
            },
            beforeShow: function() {
                $('.section-tabs').parents('.fancybox-wrap').addClass('global-nav');
                self.setActiveTab($(this.element).data('target'));
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
                $('.section-tabs .ui-tabs-anchor').click(function () {
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
}
export default HeaderMenu;