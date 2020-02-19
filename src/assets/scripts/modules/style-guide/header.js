class Header {
    constructor() {

        //        var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname + window.location.search
        var newURL = window.location.protocol + "//" + window.location.host + "/"
        console.log(newURL);



        $('.add-header').html('<div class="l-body-wrapper l-full-page">' +
        '   <header>' +
        '       <nav class="navigation">' +
        '           <a class="logo" href="/">' +
        '               <h1>U.S. Energy Information Administration - EIA - Independent Statistics and Analysis</h1>' +
        '           </a>' +
        '        <ul class="_nav">' +
        '            <li class="_nav-primary-item"><a href="PATH/style-guide/base/index.html">Base</a>' +
        '                <ul class="_base _nav-dropdown"></ul>' +
        '            </li>' +
        '            <li class="_nav-primary-item"><a href="PATH/style-guide/layouts/index.html">Layouts</a><ul class="_layouts _nav-dropdown"></ul>' +
        '            </li>' +
        '            <li class="_nav-primary-item"><a href="PATH/style-guide/modules/index.html">Modules</a>' +
        '                <ul class="_modules _nav-dropdown">' +
        '                </ul>' +
        '            </li>' +
        '            <li class="_nav-primary-item"><a href="PATH/style-guide/states/index.html">States</a>' +
        '                <ul class="_states _nav-dropdown">' +
        '                </ul>' +
        '            </li>' +
        '           <li class="_nav-primary-item"><a href="PATH/style-guide/themes/index.html">Themes</a>' +
        '                <ul class="_themes _nav-dropdown">' +
        '                </ul>' +
        '            </li>' +
        '            <li class="_nav-primary-item"><a href="PATH/style-guide/examples/index.html">Examples</a>' +
        '                <ul class="_examples _nav-dropdown">' +
        '                </ul>' +
        '            </li>' +
        '        </ul>' +
        '        <div class="_resolution _mobile">Mobile</div>' +
        '        <div class="_resolution _mobile-landscape">Mobile Landscape</div>' +
        '        <div class="_resolution _tablet">Tablet</div>' +
        '        <div class="_resolution _tablet-landscape">Tablet Landscape</div>' +
        '        <div class="_resolution _laptop">Laptop +</div>' +
        '       </nav>' +
        '   </header>' +
        '   <div class="l-outer-wrapper">' +
        '       <div class="l-inner-wrapper">');
        //console.log("_header.js found");
        $("._base").html('<li><a href="PATH/style-guide/base/color-palette.html">Color Palette</a></li>' +
        '<li><a href="PATH/style-guide/base/forms.html">Forms</a></li>' +
        '<li><a href="PATH/style-guide/base/icons.html">Icons</a></li>' +
        '<li><a href="PATH/style-guide/base/lists.html">Lists</a></li>' +
        '<li><a href="PATH/style-guide/base/size-conversions.html">Size Conversions</a></li>' +
        '<li><a href="PATH/style-guide/base/symbols.html">Symbols</a></li>' +
        '<li><a href="PATH/style-guide/base/tables.html">Tables</a></li>' +
        '<li><a href="PATH/style-guide/base/typography.html">Typography</a></li>');

    $("._layouts").html('<li><a href="PATH/style-guide/layouts/index.html">Layouts</a></li>' +
        '<li><a href="PATH/style-guide/layouts/nested-layouts.html">Nested Layouts</a></li>');

        $("._modules").html('<li><a href="PATH/style-guide/modules/accordion.html">Accordions</a></li>' +
        '<li><a href="PATH/style-guide/modules/banners.html">Banners</a></li>' +
        '<li><a href="PATH/style-guide/modules/custom-modules.html">Custom Modules</a></li>' +
        '<li><a href="PATH/style-guide/modules/home-modules.html.html">Home Modules</a></li>' +
    //    '<li><a href="PATH/style-guide/modules/lists.html">Lists</a></li>' +
    //    '<li><a href="PATH/style-guide/modules/list-formatting.html">Lists Formatting</a></li>' +
        '<li><a href="PATH/style-guide/modules/fancybox.html">Modals (FancyBox)</a></li>' +
        '<li><a href="PATH/style-guide/modules/page-titles.html">Page Titles</a></li>' +
        '<li><a href="PATH/style-guide/modules/reusable-modules.html">Reusable Modules</a></li>' +
        '<li><a href="PATH/style-guide/modules/table-formatting.html">Tables</a></li>' +
        '<li><a href="PATH/style-guide/modules/side-content-containers.html>Side-Column Modules</a></li>');

    $("._states").html('<li><a href="PATH/style-guide/states/empty-list-items.html">Empty List Items</a></li>' +
        '<li><a href="PATH/style-guide/states/sticky-table-headers.html">Sticky Table Headers</a></li>' +
        '<li><a href="PATH/style-guide/states/toggle.html">Show/Hide Toggle</a></li>');

    //$("._themes").html('<li><a href="PATH/style-guide/theme/accordion.html">Accordion</a></li>' +
    //    '<li><a href="PATH/style-guide/theme/basic-table.html">Basic Tables</a></li>' +
    //    '<li><a href="PATH/style-guide/theme/data.html">Date Tables</a></li>' +
    //    '<li><a href="PATH/style-guide/theme/natural-gas.html">Natural Gas</a></li>' +
    //    '<li><a href="PATH/style-guide/theme/overview.html">Overview</a></li>' +
    //    '<li><a href="PATH/style-guide/theme/primary-col-modules.html">Primary Modules</a></li>' +
    //    '<li><a href="PATH/style-guide/theme/secondary-col-modules.html">Secondary Modules</a></li>');

    $("._examples").html('<li><a href="PATH/style-guide/examples/index.html"></a>Page Template</a></li>' +
        '<li><a href="PATH/style-guide/examples/index.html">Header</a></li>' +
        '<li><a href="PATH/style-guide/examples/sub-navigation.html">Sub-navigation</a></li>' +
        '<li><a href="PATH/style-guide/examples/header.html">Header</a></li>' +
        '<li><a href="PATH/style-guide/examples/slider-home.html">Slider Home</a></li>' +
        '<li><a href="PATH/style-guide/examples/slider-multi.html">Slider Multi</a></li>');





        /*
        $('p._caption').click(function() {
            $(this).next('pre').toggleClass('_toggle-code');
        });

        $('.swatch-wrapper').each(function () {
            const text = $(this).find('p').text();
            $(this).find('textarea').val(text);
            console.log(text)
        });
        */
    }
}
export default Header;