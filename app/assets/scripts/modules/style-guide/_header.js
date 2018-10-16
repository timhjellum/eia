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

        $("._base").html('<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/base/color-palette.html">Color Palette</a></li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/base/forms.html">Forms</a></li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/base/icons.html">Icons</a></li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/base/lists.html">Lists</a></li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/base/size-conversions.html">Size Conversions</li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/base/symbols.html">Symbols</a></li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/base/tables.html">Tables</a></li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/base/typography.html"></a>Typography</li>');

        $("._layouts").html('');

        $("._modules").html('<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/modules/accordion.html">Accordions</a></li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/modules/content-containers-home.html">Content Containers (home)</a></li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/modules/content-containers-non-reusable.html">Content Containers (non-reusable)</a></li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/modules/content-containers-reusable.html">Content Containers (reusable)</a></li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/modules/fancybox.html">Modals (FancyBox)</a></li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/modules/lists.html">Lists</a></li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/modules/page-titles.html"></a>Messaging</li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/modules/page-titles.html">Page Titles</a></li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/modules/table-list-formatting.html">Tables</a></li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/modules/tabs.html"></a>Tabs</li>');

        $("._states").html('<li><a href="empty-list-items.html"></a>Empty List Items</li>' +
            '<li>sticky-table-headers.html</li>');

        $("._themes").html('<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/theme/accordion"></a>Accordion</li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/theme/basic-table"></a>Basic Tables</li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/theme/data"></a>Date Tables</li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/theme/natural-gas"></a>Natural Gas</li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/theme/overview"></a>Overview</li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/theme/primary-col-modules"></a>Primary Modules</li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/theme/secondary-col-modules"></a>Secondary Modules</li>');

        $("._components").html('<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/modules/sub-navigation.html"></a>Footer</li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/modules/sub-navigation.html"></a>Header</li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/modules/sub-navigation.html"></a>Home Slider</li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/modules/sub-navigation.html"></a>L2 Sliders</li>' +
            '<li><a href="https://www.eia.gov/css_rehab/archive/style-guide/app/modules/sub-navigation.html"></a>Sub-navigation</li>');



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