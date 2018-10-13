import headsUp from 'headsup.js';

class Header {
    constructor() {

        headsUp({
            selector: '._header',
            duration: 0.3,
            easing: 'ease',
            delay: 0,
            debounce: false
          })


        $("._header").html('<a class="logo-white-background" href="/">' +
            '<h1>U.S. Energy Information Administration - EIA - Independent Statistics and Analysis</h1>' +
            '</a>' +
            '<ul class="_nav">' +
            '   <li class="_nav-primary-item">' +
            '       <a href="../base/">Base</a>' +
            '       <ul class="_nav-dropdown">' +
            '           <li><a href="../base/color-palette.html">Color Palette</a></li>' +
            '           <li><a href="../base/forms.html">Forms</a></li>' +
            '           <li><a href="../base/icons.html">Icons</a></li>' +
            '           <li><a href="../base/lists.html">Lists</a></li>' +
            '           <li><a href="../base/size-conversions.html">Size Conversions</li>' +
            '           <li><a href="../base/symbols.html">Symbols</a></li>' +
            '           <li><a href="../base/tables.html">Tables</a></li>' +
            '           <li><a href="../base/typography.html">Typography</a></li>' +
            '       </ul>' +
            '   </li>' +
            '   <li class="_nav-primary-item">' +
            '       <a href="../layouts/">Layouts</a>' +
            '   </li>' +
            '   <li class="_nav-primary-item">' +
            '       <a href="../modules/">Modules</a>' +
            '       <ul class=""_nav-dropdown">' +
            '           <li><a href="../modules/accordion.html">Accordions</a></li>' +
            '           <li><a href="../modules/content-containers-home.html">Content Containers (home)</a></li>' +
            '           <li><a href="../modules/content-containers-non-reusable.html">Content Containers (non-reusable)</a></li>' +
            '           <li><a href="../modules/content-containers-reusable.html">Content Containers (reusable)</a></li>' +
            '           <li><a href="../modules/fancybox.html">Modals (FancyBox)</a></li>' +
            '           <li><a href="../modules/lists.html">Lists</a></li>' +
            '           <li>Messaging</li>' +
            '           <li><a href="../modules/page-titles.html">Page Titles</a></li>' +
            '           <li><a href="../modules/table-list-formatting.html">Tables</a></li>' +
            '           <li><a href="../modules/tabs.html">Tabs</a></li>' +
            '       </ul>' +
            '   </li>' +
            '   <li class="_nav-primary-item">' +
            '       <a href="../states/">States</a>' +
            '       <ul class=""_nav-dropdown">' +
            '           <li><a href="empty-list-items.html">Empty List Items</a></li>' +
            '           <li>sticky-table-headers.html</li>' +
            '       </ul>' +
            '   </li>' +
            '   <li class="_nav-primary-item">' +
            '       <a href="../themes/">Themes</a>' +
            //            '       <ul class=""_nav-dropdown">' +
            //            '           <li><a href=""></a></li>' +
            //            '       </ul>' +
            '   </li>' +
            '   <li class="_nav-primary-item">' +
            '       <a href="../components/">Components</a>' +
            '       <ul class=""_nav-dropdown">' +
            '           <li>Sliders</li>' +
            '           <li><a href="../modules/sub-navigation.html">Navigation</a></li>' +
            '       </ul>' +
            '   </li>' +
            '</ul>' +
            '<div class="_resolution _mobile">Mobile</div>' +
            '<div class="_resolution _mobile-landscape">Mobile Landscape</div>' +
            '<div class="_resolution _tablet">Tablet</div>' +
            '<div class="_resolution _tablet-landscape">Tablet Landscape</div>' +
            '<div class="_resolution _laptop">Laptop +</div>');

        $("._footer").html('<a class="logo-white-background" href="/">' +
            '<h1>U.S. Energy Information Administration - EIA - Independent Statistics and Analysis</h1>' +
            '</a>' +
            '<ul>' +
            '   <li>' +
            '       <ul>' +
            '           <li><strong><a href="../base/>Base</a></strong></li>' +
            '           <li><a href="../base/color-palette.html">Color Palette</a></li>' +
            '           <li><a href="../base/icons.html">Icons</a></li>' +
            '           <li><a href="../base/typography.html">base/typography.html</a></li>' +
            '       </ul>' +
            '   </li>' +
            '   <li>' +
            '       <ul>' +
            '           <li><strong><a href="../layouts/>Layouts</a></strong></li>' +
            '       </ul>' +
            '   </li>' +
            '   <li>' +
            '       <ul>' +
            '           <li><strong><a href="../modules/">Modules</a></strong></li>' +
            '           <li><a href="../modules/accordion.html">Accordions</a></li>' +
            '           <li><a href="../modules/content-containers-home.html">Content Containers (home)</a></li>' +
            '           <li><a href="../modules/content-containers-non-reusable.html">Content Containers (non-reusable)</a></li>' +
            '           <li><a href="../modules/content-containers-reusable.html">Content Containers (reusable)</a></li>' +
            '           <li><a href="../modules/fancybox.html">Modals (FancyBox)</a></li>' +
            '           <li><a href="../modules/lists.html">Lists</a></li>' +
            '           <li>Messaging</li>' +
            '           <li><a href="../modules/page-titles.html">Page Titles</a></li>' +
            '           <li><a href="../modules/table-list-formatting.html">Tables</a></li>' +
            '           <li><a href="../modules/tabs.html">Tabs</a></li>' +
            '       </ul>' +
            '   </li>' +
            '   <li>' +
            '       <ul>' +
            '           <li><strong><a href="../states/">States</a></strong></li>' +
            '           <li><a href="empty-list-items.html">Empty List Items</a></li>' +
            '           <li>sticky-table-headers.html</li>' +
            '       </ul>' +
            '   </li>' +
            '   <li>' +
            '       <ul>' +
            '           <li><strong><a href="../themes/">Themes</a></strong></li>' +
            '       </ul>' +
            '   </li>' +
            '   <li>' +
            '       <ul>' +
            '           <li><strong><a href="../components/">Components</a></strong></li>' +
            '           <li>Sliders</li>' +
            '           <li><a href="../modules/sub-navigation.html">Navigation</a></li>' +
            '       </ul>' +
            '   </li>' +
            '</ul>');


        //if ($('.navbar-brand:contains(Base)').length > 0) {
        //    $('#nav-2').prop('checked', true);
        //}
        (function($) {
            // First, check to see if cssHooks are supported
            if (!$.cssHooks) {
                // If not, output an error message
                throw (new Error("jQuery 1.4.3 or above is required for this plugin to work"));
            }
            // Wrap in a document ready call, because jQuery writes
            // cssHooks at this time and will blow away your functions
            // if they exist.
            $.cssHooks.backgroundColor = {
                get: function(elem) {
                    if (elem.currentStyle)
                        var bg = elem.currentStyle["background-color"];
                    else if (window.getComputedStyle)
                        var bg = document.defaultView.getComputedStyle(elem,
                            null).getPropertyValue("background-color");
                    if (bg.search("rgb") == -1)
                        return bg;
                    else {
                        bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

                        function hex(x) {
                            return ("0" + parseInt(x).toString(16)).slice(-2);
                        }
                        return ("#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]));
                    }
                }
            }
        })(jQuery);
        /*

        */

        $(function() {
            //$('.swatch-wrapper').each(function() { 
            $(".eia-dark-blue").html($(".eia-dark-blue").css("backgroundColor"));
            $(".eia-dark-blue-75").html($(".eia-dark-blue-75").css("backgroundColor"));
            $(".eia-dark-blue-50").html($(".eia-dark-blue-50").css("backgroundColor"));
            $(".eia-dark-blue-25").html($(".eia-dark-blue-25").css("backgroundColor"));
            $(".eia-blue").html($(".eia-blue").css("backgroundColor"));
            $(".eia-light-blue-75").html($(".eia-light-blue-75").css("backgroundColor"));
            $(".eia-light-blue-50").html($(".eia-light-blue-50").css("backgroundColor"));
            $(".eia-light-blue-25").html($(".eia-light-blue-25").css("backgroundColor"));
            $(".eia-light-blue").html($(".eia-light-blue").css("backgroundColor"));
            $(".eia-dark-green").html($(".eia-dark-green").css("backgroundColor"));
            $(".eia-dark-green-75").html($(".eia-dark-green-75").css("backgroundColor"));
            $(".eia-dark-green-50").html($(".eia-dark-green-50").css("backgroundColor"));
            $(".eia-dark-green-25").html($(".eia-dark-green-25").css("backgroundColor"));
            $(".eia-green").html($(".eia-green").css("backgroundColor"));
            $(".eia-light-green-75").html($(".eia-light-green-75").css("backgroundColor"));
            $(".eia-light-green-50").html($(".eia-light-green-50").css("backgroundColor"));
            $(".eia-light-green-25").html($(".eia-light-green-25").css("backgroundColor"));
            $(".eia-light-green").html($(".eia-light-green").css("backgroundColor"));
            $(".eia-dark-red").html($(".eia-dark-red").css("backgroundColor"));
            $(".eia-dark-red-75").html($(".eia-dark-red-75").css("backgroundColor"));
            $(".eia-dark-red-50").html($(".eia-dark-red-50").css("backgroundColor"));
            $(".eia-dark-red-25").html($(".eia-dark-red-25").css("backgroundColor"));
            $(".eia-red").html($(".eia-red").css("backgroundColor"));
            $(".eia-light-red-75").html($(".eia-light-red-75").css("backgroundColor"));
            $(".eia-light-red-50").html($(".eia-light-red-50").css("backgroundColor"));
            $(".eia-light-red-25").html($(".eia-light-red-25").css("backgroundColor"));
            $(".eia-light-red").html($(".eia-light-red").css("backgroundColor"));
            $(".eia-dark-yellow").html($(".eia-dark-yellow").css("backgroundColor"));
            $(".eia-dark-yellow-75").html($(".eia-dark-yellow-75").css("backgroundColor"));
            $(".eia-dark-yellow-50").html($(".eia-dark-yellow-50").css("backgroundColor"));
            $(".eia-dark-yellow-25").html($(".eia-dark-yellow-25").css("backgroundColor"));
            $(".eia-dark-yellow").html($(".eia-dark-yellow").css("backgroundColor"));
            $(".eia-light-yellow-75").html($(".eia-light-yellow-75").css("backgroundColor"));
            $(".eia-light-yellow-50").html($(".eia-light-yellow-50").css("backgroundColor"));
            $(".eia-light-yellow-25").html($(".eia-light-yellow-25").css("backgroundColor"));
            $(".eia-light-yellow").html($(".eia-light-yellow").css("backgroundColor"));
            $(".eia-dark-purple").html($(".eia-dark-purple").css("backgroundColor"));

            $(".eia-dark-purple-75").html($(".eia-dark-purple-75").css("backgroundColor"));
            $(".eia-dark-purple-50").html($(".eia-dark-purple-50").css("backgroundColor"));
            $(".eia-dark-purple-25").html($(".eia-dark-purple-25").css("backgroundColor"));
            $(".eia-purple").html($(".eia-purple").css("backgroundColor"));
            $(".eia-light-purple-75").html($(".eia-light-purple-75").css("backgroundColor"));
            $(".eia-light-purple-50").html($(".eia-light-purple-50").css("backgroundColor"));
            $(".eia-light-purple-25").html($(".eia-light-purple-25").css("backgroundColor"));
            $(".eia-light-purple").html($(".eia-light-purple").css("backgroundColor"));

            $(".eia-dark-brown").html($(".eia-dark-brown").css("backgroundColor"));
            $(".eia-dark-brown-75").html($(".eia-dark-brown-75").css("backgroundColor"));
            $(".eia-dark-brown-50").html($(".eia-dark-brown-50").css("backgroundColor"));
            $(".eia-dark-brown-25").html($(".eia-dark-brown-25").css("backgroundColor"));
            $(".eia-tan").html($(".eia-tan").css("backgroundColor"));
            $(".eia-light-brown-75").html($(".eia-light-brown-75").css("backgroundColor"));
            $(".eia-light-brown-50").html($(".eia-light-brown-50").css("backgroundColor"));
            $(".eia-light-brown-25").html($(".eia-light-brown-25").css("backgroundColor"));
            $(".eia-light-brown").html($(".eia-light-brown").css("backgroundColor"));


            //commonly used tints of black
            $(".eia-333333").html($(".eia-333333").css("backgroundColor"));
            $(".eia-666666").html($(".eia-666666").css("backgroundColor"));
            $(".eia-767676").html($(".eia-767676").css("backgroundColor"));
            $(".eia-999999").html($(".eia-999999").css("backgroundColor"));
            $(".eia-silver").html($(".eia-silver").css("backgroundColor"));
            //common used shades of white
            $(".eia-b2b2b2").html($(".eia-b2b2b2").css("backgroundColor"));
            $(".eia-d4d4d4").html($(".eia-d4d4d4").css("backgroundColor"));
            $(".eia-dddddd").html($(".eia-dddddd").css("backgroundColor"));
            $(".eia-e5e5e5").html($(".eia-e5e5e5").css("backgroundColor"));
            $(".eia-d3d3d3").html($(".eia-d3d3d3").css("backgroundColor"));
            $(".eia-efefef").html($(".eia-efefef").css("backgroundColor"));

            $(".misc-one").html($(".misc-one").css("backgroundColor"));
            $(".misc-two").html($(".misc-two").css("backgroundColor"));
            $(".misc-thr").html($(".misc-thr").css("backgroundColor"));
            $(".misc-fou").html($(".misc-fou").css("backgroundColor"));
            $(".misc-fiv").html($(".misc-fiv").css("backgroundColor"));
            $(".misc-six").html($(".misc-six").css("backgroundColor"));

            $(".eia-dark-black").html($(".eia-dark-black").css("backgroundColor"));
            $(".eia-dark-black-75").html($(".eia-dark-black-75").css("backgroundColor"));
            $(".eia-dark-black-50").html($(".eia-dark-black-50").css("backgroundColor"));
            $(".eia-dark-black-25").html($(".eia-dark-black-25").css("backgroundColor"));
            $(".eia-black").html($(".eia-black").css("backgroundColor"));
            $(".eia-light-black-25").html($(".eia-light-black-25k").css("backgroundColor"));
            $(".eia-light-black-50").html($(".eia-light-black-50").css("backgroundColor"));
            $(".eia-light-black-75").html($(".eia-light-black-75").css("backgroundColor"));
            $(".eia-light-black").html($(".eia-light-black").css("backgroundColor"));

            $(".eia-dark-white").html($(".eia-dark-white").css("backgroundColor"));
            $(".eia-dark-white-75").html($(".eia-dark-white-75").css("backgroundColor"));
            $(".eia-dark-white-50").html($(".eia-dark-white-50").css("backgroundColor"));
            $(".eia-dark-white-25").html($(".eia-dark-white-25").css("backgroundColor"));
            $(".eia-white").html($(".eia-white").css("backgroundColor"));
            $(".eia-light-white-25").html($(".eia-light-white-25").css("backgroundColor"));
            $(".eia-light-white-50").html($(".eia-light-white-50").css("backgroundColor"));
            $(".eia-light-white-75").html($(".eia-light-white-75").css("backgroundColor"));
            $(".eia-light-white").html($(".eia-light-white").css("backgroundColor"));


        });




























    }
}
export default Header;



/*
<li><a href="../base/color-palette.html">Color Palette</a></li>
<li><a href="../base/header-and-footer.html" target="_blank">Header & Footer</a></li>
<li><a href="../base/icons.html">Icons</a></li>
<li><a href="../base/typography.html">Typography</a></li>


<li><a href="../layouts/index.html#header-row">Header Row</a></li>
<li><a href="../layouts/index.html#row">Row</a></li>
<li><a href="../layouts/index.html#full-width">Full-width</a></li>
<li><a href="../layouts/index.html#side+main+side">Side + Main + Side</a></li>
<li><a href="../layouts/index.html#main+side">Main + Side</a></li>
<li><a href="../layouts/index.html#main+wide-side">Main + Wide-side</a></li>
<li><a href="../layouts/index.html#wide-side+main">Wide-side + Main</a></li>
<li><a href="../layouts/index.html#one-third+two-thirds">One-third + Two-thirds</a></li>
<li><a href="../layouts/index.html#two-thirds+one-third">Two-thirds + One-third</a></li>
<li><a href="../layouts/index.html#two-even-columns">Two-even-columns</a></li>
<li><a href="../layouts/index.html#three-even-columns">Three-even-columns</a></li>
<li><a href="../layouts/index.html#four-even-columns">Four-even-columns</a></li>


<li><a href="../modules/accordion.html">Accordion</a></li>
<li><a href="../modules/home-content-containers.html">Home content Containers</a></li>
<li><a href="../modules/reusable-content-containers.html#standard-containers">Standard Containers</a></li>
<li><a href="../modules/reusable-content-containers.html#light-blue-top-border">Light-blue-top-border Containers</a></li>
<li><a href="../modules/reusable-content-containers.html#light-blue-top-border-dilly">Light-blue-top-border dilly Containers</a></li>
<li><a href="../modules/reusable-content-containers.html#dark-blue-top-border">Dark-blue-top-border Containers</a></li>
<li><a href="../modules/report-header.html">Report Header</a></li>
<li><a href="../modules/sub-navigation.html">Sub Navigation</a></li>
<li><a href="../modules/table-list-formatting.html">Table and List Formatting</a></li>
<li><a href="../modules/tabs.html">Tabs</a></li>
<li><a href="../modules/page-titles.html">Page Titles</a></li>
<li><a href="../modules/messaging.html">Messaging</a></li>
<li><a href="../modules/side-content-containers.html">Side Content Containers</a></li>
<li><a href="../modules/slider-home.html" target="_blank">Home Slider</a></li>
<li><a href="../modules/slider-multi-cards.html" target="_blank">Multi-Card Slider</a></li>


<li><a href="../states/links-list.html">Links List</a></li>
<li><a href="../states/header-menu.html">Header Menus</a></li>
<li><a href="../states/sub-nav-menus.html">Subnav Menus</a></li>
<li><a href="../states/local-scroll.html">Local Scroll</a></li>
<li><a href="../states/scroll-to.html">Scroll To</a></li>

*/