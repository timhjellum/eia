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

        $("._base").html('<li><a href="../base/color-palette.html">Color Palette</a></li>' +
            '<li><a href="../base/forms.html">Forms</a></li>' +
            '<li><a href="../base/icons.html">Icons</a></li>' +
            '<li><a href="../base/lists.html">Lists</a></li>' +
            '<li><a href="../base/size-conversions.html">Size Conversions</li>' +
            '<li><a href="../base/symbols.html">Symbols</a></li>' +
            '<li><a href="../base/tables.html">Tables</a></li>' +
            '<li><a href="../base/typography.html"></a>Typography</li>');

        $("._layouts").html('<li><a href="../layouts/nested-layouts.html">Nested Layouts</a></li>');

        $("._modules").html('<li><a href="../modules/accordion.html">Accordions</a></li>' +
            '<li><a href="../modules/content-containers-home.html">Content Containers (home)</a></li>' +
            '<li><a href="../modules/content-containers-non-reusable.html">Content Containers (non-reusable)</a></li>' +
            '<li><a href="../modules/content-containers-reusable.html">Content Containers (reusable)</a></li>' +
            '<li><a href="../modules/fancybox.html">Modals (FancyBox)</a></li>' +
            '<li><a href="../modules/lists.html">Lists</a></li>' +
            '<li><a href="../modules/page-titles.html"></a>Messaging</li>' +
            '<li><a href="../modules/page-titles.html">Page Titles</a></li>' +
            '<li><a href="../modules/table-list-formatting.html">Tables</a></li>' +
            '<li><a href="../modules/tabs.html"></a>Tabs</li>');

        $("._states").html('<li><a href="empty-list-items.html"></a>Empty List Items</li>' +
            '<li>sticky-table-headers.html</li>');

        $("._themes").html('<li><a href="../theme/accordion"></a>Accordion</li>' +
            '<li><a href="../theme/basic-table"></a>Basic Tables</li>' +
            '<li><a href="../theme/data"></a>Date Tables</li>' +
            '<li><a href="../theme/natural-gas"></a>Natural Gas</li>' +
            '<li><a href="../theme/overview"></a>Overview</li>' +
            '<li><a href="../theme/primary-col-modules"></a>Primary Modules</li>' +
            '<li><a href="../theme/secondary-col-modules"></a>Secondary Modules</li>');

        $("._examples").html('<li><a href="../examples/index.html"></a>Page Template</li>' +
            '<li><a href="../examples/index.html"></a>Header</li>' +
            '<li><a href="../examples/sub-navigation.html">Sub-navigation</a></li>' +
            '<li><a href="../examples/header.html">Header</a></li>' +
            '<li><a href="../examples/slider-home.html">Slider Home</a></li>' +
            '<li><a href="../examples/slider-multi.html">Slider Multi</a></li>');


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


        var rowOneOneOne = $('ul.l-default-page .dally-row-one-one span._module-bg._row-one-one-one').width();
        var rowOneTwoOne = $('ul.l-default-page .dally-row-one-two span._module-bg._row-one-two-one').width();
        $('ul.l-default-page li._mod span._row-one-one-one').append(rowOneOneOne);
        $('ul.l-default-page li._mod span._row-one-two-one').append(rowOneTwoOne);

        var colOneOneOne = $('ul.l-default-page .dally-one-one span._module-bg._col-one-one-one').width();
        $('ul.l-default-page li._mod span._col-one-one-one').append(colOneOneOne);

        var colTwoOneOne = $('ul.l-default-page .dally-two-one span._module-bg._col-two-one-one').width();
        var colTwoOneTwo = $('ul.l-default-page .dally-two-one span._module-bg._col-two-one-two').width();
        var colTwoTwoOne = $('ul.l-default-page .dally-two-two span._module-bg._col-two-two-one').width();
        var colTwoTwoTwo = $('ul.l-default-page .dally-two-two span._module-bg._col-two-two-two').width();
        var colTwoThrOne = $('ul.l-default-page .dally-two-thr span._module-bg._col-two-thr-one').width();
        var colTwoThrTwo = $('ul.l-default-page .dally-two-thr span._module-bg._col-two-thr-two').width();
        var colTwoFouOne = $('ul.l-default-page .dally-two-fou span._module-bg._col-two-fou-one').width();
        var colTwoFouTwo = $('ul.l-default-page .dally-two-fou span._module-bg._col-two-fou-two').width();
        var colTwoFivOne = $('ul.l-default-page .dally-two-fiv span._module-bg._col-two-fiv-one').width();
        var colTwoFivTwo = $('ul.l-default-page .dally-two-fiv span._module-bg._col-two-fiv-two').width();
        var colTwoSixOne = $('ul.l-default-page .dally-two-six span._module-bg._col-two-six-one').width();
        var colTwoSixTwo = $('ul.l-default-page .dally-two-six span._module-bg._col-two-six-two').width();
        var colTwoSevOne = $('ul.l-default-page .dally-two-sev span._module-bg._col-two-sev-one').width();
        var colTwoSevTwo = $('ul.l-default-page .dally-two-sev span._module-bg._col-two-sev-two').width();
        $('ul.l-default-page li._mod span._col-two-one-one').append(colTwoOneOne);
        $('ul.l-default-page li._mod span._col-two-one-two').append(colTwoOneTwo);
        $('ul.l-default-page li._mod span._col-two-two-one').append(colTwoTwoOne);
        $('ul.l-default-page li._mod span._col-two-two-two').append(colTwoTwoTwo);
        $('ul.l-default-page li._mod span._col-two-thr-one').append(colTwoThrOne);
        $('ul.l-default-page li._mod span._col-two-thr-two').append(colTwoThrTwo);
        $('ul.l-default-page li._mod span._col-two-fou-one').append(colTwoFouOne);
        $('ul.l-default-page li._mod span._col-two-fou-two').append(colTwoFouTwo);
        $('ul.l-default-page li._mod span._col-two-fiv-one').append(colTwoFivOne);
        $('ul.l-default-page li._mod span._col-two-fiv-two').append(colTwoFivTwo);
        $('ul.l-default-page li._mod span._col-two-six-one').append(colTwoSixOne);
        $('ul.l-default-page li._mod span._col-two-six-two').append(colTwoSixTwo);
        $('ul.l-default-page li._mod span._col-two-sev-one').append(colTwoSevOne);
        $('ul.l-default-page li._mod span._col-two-sev-two').append(colTwoSevTwo);

        var colThrOneOne = $('ul.l-default-page .dally-thr-one span._module-bg._col-thr-one-one').width();
        var colThrOneTwo = $('ul.l-default-page .dally-thr-one span._module-bg._col-thr-one-two').width();
        var colThrOneThr = $('ul.l-default-page .dally-thr-one span._module-bg._col-thr-one-thr').width();
        var colThrTwoOne = $('ul.l-default-page .dally-thr-two span._module-bg._col-thr-two-one').width();
        var colThrTwoTwo = $('ul.l-default-page .dally-thr-two span._module-bg._col-thr-two-two').width();
        var colThrTwoThr = $('ul.l-default-page .dally-thr-two span._module-bg._col-thr-two-thr').width();
        var colThrThrOne = $('ul.l-default-page .dally-thr-thr span._module-bg._col-thr-thr-one').width();
        var colThrThrTwo = $('ul.l-default-page .dally-thr-thr span._module-bg._col-thr-thr-two').width();
        var colThrThrThr = $('ul.l-default-page .dally-thr-thr span._module-bg._col-thr-thr-thr').width();
        $('ul.l-default-page li._mod span._col-thr-one-one').append(colThrOneOne);
        $('ul.l-default-page li._mod span._col-thr-one-two').append(colThrOneTwo);
        $('ul.l-default-page li._mod span._col-thr-one-thr').append(colThrOneThr);
        $('ul.l-default-page li._mod span._col-thr-two-one').append(colThrTwoOne);
        $('ul.l-default-page li._mod span._col-thr-two-two').append(colThrTwoTwo);
        $('ul.l-default-page li._mod span._col-thr-two-thr').append(colThrTwoThr);
        $('ul.l-default-page li._mod span._col-thr-thr-one').append(colThrThrOne);
        $('ul.l-default-page li._mod span._col-thr-thr-two').append(colThrThrTwo);
        $('ul.l-default-page li._mod span._col-thr-thr-thr').append(colThrThrThr);

        var colFouOneOne = $('ul.l-default-page .dally-fou-one span._module-bg._col-fou-one-one').width();
        var colFouOneTwo = $('ul.l-default-page .dally-fou-one span._module-bg._col-fou-one-two').width();
        var colFouOneThr = $('ul.l-default-page .dally-fou-one span._module-bg._col-fou-one-thr').width();
        var colFouOneFou = $('ul.l-default-page .dally-fou-one span._module-bg._col-fou-one-fou').width();
        $('ul.l-default-page li._mod span._col-fou-one-one').append(colFouOneOne);
        $('ul.l-default-page li._mod span._col-fou-one-two').append(colFouOneTwo);
        $('ul.l-default-page li._mod span._col-fou-one-thr').append(colFouOneThr);
        $('ul.l-default-page li._mod span._col-fou-one-fou').append(colFouOneFou);

        var pageColSixOneOne = $('ul.l-default-page .dally-six-one span._module-bg._col-six-one-one').width();
        var pageColSixOneTwo = $('ul.l-default-page .dally-six-one span._module-bg._col-six-one-two').width();
        var pageColSixOneThr = $('ul.l-default-page .dally-six-one span._module-bg._col-six-one-thr').width();
        var pageColSixOneFou = $('ul.l-default-page .dally-six-one span._module-bg._col-six-one-fou').width();
        var pageColSixOneFiv = $('ul.l-default-page .dally-six-one span._module-bg._col-six-one-fiv').width();
        var pageColSixOneSix = $('ul.l-default-page .dally-six-one span._module-bg._col-six-one-six').width();
        $('ul.l-default-page li._mod span._col-six-one-one').append(pageColSixOneOne);
        $('ul.l-default-page li._mod span._col-six-one-two').append(pageColSixOneTwo);
        $('ul.l-default-page li._mod span._col-six-one-thr').append(pageColSixOneThr);
        $('ul.l-default-page li._mod span._col-six-one-fou').append(pageColSixOneFou);
        $('ul.l-default-page li._mod span._col-six-one-fiv').append(pageColSixOneFiv);
        $('ul.l-default-page li._mod span._col-six-one-six').append(pageColSixOneSix);



        var pageRowOneOneOne = $('ul.l-full-width-page .dally-row-one-one span._module-bg._row-one-one-one').width();
        var pageRowOneTwoOne = $('ul.l-full-width-page .dally-row-one-two span._module-bg._row-one-two-one').width();
        $('ul.l-full-width-page li._mod span._row-one-one-one').append(pageRowOneOneOne);
        $('ul.l-full-width-page li._mod span._row-one-two-one').append(pageRowOneTwoOne);

        var pageColOneOneOne = $('ul.l-full-width-page .dally-one-one span._module-bg._col-one-one-one').width();
        $('ul.l-full-width-page li._mod span._col-one-one-one').append(pageColOneOneOne);

        var pageColTwoOneOne = $('ul.l-full-width-page .dally-two-one span._module-bg._col-two-one-one').width();
        var pageColTwoOneTwo = $('ul.l-full-width-page .dally-two-one span._module-bg._col-two-one-two').width();
        var pageColTwoTwoOne = $('ul.l-full-width-page .dally-two-two span._module-bg._col-two-two-one').width();
        var pageColTwoTwoTwo = $('ul.l-full-width-page .dally-two-two span._module-bg._col-two-two-two').width();
        var pageColTwoThrOne = $('ul.l-full-width-page .dally-two-thr span._module-bg._col-two-thr-one').width();
        var pageColTwoThrTwo = $('ul.l-full-width-page .dally-two-thr span._module-bg._col-two-thr-two').width();
        var pageColTwoFouOne = $('ul.l-full-width-page .dally-two-fou span._module-bg._col-two-fou-one').width();
        var pageColTwoFouTwo = $('ul.l-full-width-page .dally-two-fou span._module-bg._col-two-fou-two').width();
        var pageColTwoFivOne = $('ul.l-full-width-page .dally-two-fiv span._module-bg._col-two-fiv-one').width();
        var pageColTwoFivTwo = $('ul.l-full-width-page .dally-two-fiv span._module-bg._col-two-fiv-two').width();
        var pageColTwoSixOne = $('ul.l-full-width-page .dally-two-six span._module-bg._col-two-six-one').width();
        var pageColTwoSixTwo = $('ul.l-full-width-page .dally-two-six span._module-bg._col-two-six-two').width();
        var pageColTwoSevOne = $('ul.l-full-width-page .dally-two-sev span._module-bg._col-two-sev-one').width();
        var pageColTwoSevTwo = $('ul.l-full-width-page .dally-two-sev span._module-bg._col-two-sev-two').width();
        $('ul.l-full-width-page li._mod span._col-two-one-one').append(pageColTwoOneOne);
        $('ul.l-full-width-page li._mod span._col-two-one-two').append(pageColTwoOneTwo);
        $('ul.l-full-width-page li._mod span._col-two-two-one').append(pageColTwoTwoOne);
        $('ul.l-full-width-page li._mod span._col-two-two-two').append(pageColTwoTwoTwo);
        $('ul.l-full-width-page li._mod span._col-two-thr-one').append(pageColTwoThrOne);
        $('ul.l-full-width-page li._mod span._col-two-thr-two').append(pageColTwoThrTwo);
        $('ul.l-full-width-page li._mod span._col-two-fou-one').append(pageColTwoFouOne);
        $('ul.l-full-width-page li._mod span._col-two-fou-two').append(pageColTwoFouTwo);
        $('ul.l-full-width-page li._mod span._col-two-fiv-one').append(pageColTwoFivOne);
        $('ul.l-full-width-page li._mod span._col-two-fiv-two').append(pageColTwoFivTwo);
        $('ul.l-full-width-page li._mod span._col-two-six-one').append(pageColTwoSixOne);
        $('ul.l-full-width-page li._mod span._col-two-six-two').append(pageColTwoSixTwo);
        $('ul.l-full-width-page li._mod span._col-two-sev-one').append(pageColTwoSevOne);
        $('ul.l-full-width-page li._mod span._col-two-sev-two').append(pageColTwoSevTwo);

        var pageColThrOneOne = $('ul.l-full-width-page .dally-thr-one span._module-bg._col-thr-one-one').width();
        var pageColThrOneTwo = $('ul.l-full-width-page .dally-thr-one span._module-bg._col-thr-one-two').width();
        var pageColThrOneThr = $('ul.l-full-width-page .dally-thr-one span._module-bg._col-thr-one-thr').width();
        var pageColThrTwoOne = $('ul.l-full-width-page .dally-thr-two span._module-bg._col-thr-two-one').width();
        var pageColThrTwoTwo = $('ul.l-full-width-page .dally-thr-two span._module-bg._col-thr-two-two').width();
        var pageColThrTwoThr = $('ul.l-full-width-page .dally-thr-two span._module-bg._col-thr-two-thr').width();
        var pageColThrThrOne = $('ul.l-full-width-page .dally-thr-thr span._module-bg._col-thr-thr-one').width();
        var pageColThrThrTwo = $('ul.l-full-width-page .dally-thr-thr span._module-bg._col-thr-thr-two').width();
        var pageColThrThrThr = $('ul.l-full-width-page .dally-thr-thr span._module-bg._col-thr-thr-thr').width();
        $('ul.l-full-width-page li._mod span._col-thr-one-one').append(pageColThrOneOne);
        $('ul.l-full-width-page li._mod span._col-thr-one-two').append(pageColThrOneTwo);
        $('ul.l-full-width-page li._mod span._col-thr-one-thr').append(pageColThrOneThr);
        $('ul.l-full-width-page li._mod span._col-thr-two-one').append(pageColThrTwoOne);
        $('ul.l-full-width-page li._mod span._col-thr-two-two').append(pageColThrTwoTwo);
        $('ul.l-full-width-page li._mod span._col-thr-two-thr').append(pageColThrTwoThr);
        $('ul.l-full-width-page li._mod span._col-thr-thr-one').append(pageColThrThrOne);
        $('ul.l-full-width-page li._mod span._col-thr-thr-two').append(pageColThrThrTwo);
        $('ul.l-full-width-page li._mod span._col-thr-thr-thr').append(pageColThrThrThr);

        var pageColFouOneOne = $('ul.l-full-width-page .dally-fou-one span._module-bg._col-fou-one-one').width();
        var pageColFouOneTwo = $('ul.l-full-width-page .dally-fou-one span._module-bg._col-fou-one-two').width();
        var pageColFouOneThr = $('ul.l-full-width-page .dally-fou-one span._module-bg._col-fou-one-thr').width();
        var pageColFouOneFou = $('ul.l-full-width-page .dally-fou-one span._module-bg._col-fou-one-fou').width();
        $('ul.l-full-width-page li._mod span._col-fou-one-one').append(pageColFouOneOne);
        $('ul.l-full-width-page li._mod span._col-fou-one-two').append(pageColFouOneTwo);
        $('ul.l-full-width-page li._mod span._col-fou-one-thr').append(pageColFouOneThr);
        $('ul.l-full-width-page li._mod span._col-fou-one-fou').append(pageColFouOneFou);


        $('p._caption').click(function() {
            $(this).next('pre').toggleClass('_toggle-code');
        });
    }
}
export default Header;