class Header {
    constructor() {

        if (window.location.href.indexOf("http://localhost") > -1) {
            var newURL = window.location.protocol + "//" + window.location.host + "/"
        } else if (window.location.href.indexOf("http://localhost") < 1) {
            var newURL = 'https://wwwdev.eia.gov/style-guide/'
        }
        console.log(newURL);
        $('.add-header').html('   <header>' +
        '       <nav class="navigation">' +
        '           <a class="logo" href="/">' +
        '               <h1>U.S. Energy Information Administration - EIA - Independent Statistics and Analysis</h1>' +
        '           </a>' +
        '        <ul class="_nav">' +
        '            <li class="_nav-primary-item"><a href="'+ newURL +'base/index.html">Base</a>' +
        '                <ul class="_base _nav-dropdown">' +
        '                </ul>' +
        '            </li>' +
        '            <li class="_nav-primary-item"><a href="'+ newURL +'layouts/index.html">Layouts</a>' +
        '               <ul class="_layouts _nav-dropdown">' +
        '                </ul>' +
        '            </li>' +
        '            <li class="_nav-primary-item"><a href="'+ newURL +'modules/index.html">Modules</a>' +
        '                <ul class="_modules _nav-dropdown">' +
        '                </ul>' +
        '            </li>' +
        '            <li class="_nav-primary-item"><a href="'+ newURL +'states/index.html">States</a>' +
        '                <ul class="_states _nav-dropdown">' +
        '                </ul>' +
        '            </li>' +
        '           <li class="_nav-primary-item"><a href="'+ newURL +'themes/index.html">Themes</a>' +
        '                <ul class="_themes _nav-dropdown">' +
        '                </ul>' +
        '            </li>' +
        '            <li class="_nav-primary-item"><a href="'+ newURL +'examples/index.html">Examples</a>' +
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
        '   </header>');
        $("._base").html('<li><a href="'+ newURL +'base/color-palette.html">Color Palette</a></li>' +
        '<li><a href="'+ newURL +'base/forms.html">Forms</a></li>' +
        '<li><a href="'+ newURL +'base/icons.html">Icons</a></li>' +
        '<li><a href="'+ newURL +'base/lists.html">Lists</a></li>' +
        '<li><a href="'+ newURL +'base/size-conversions.html">Size Conversions</a></li>' +
        '<li><a href="'+ newURL +'base/symbols.html">Symbols</a></li>' +
        '<li><a href="'+ newURL +'base/tables.html">Tables</a></li>' +
        '<li><a href="'+ newURL +'base/typography.html">Typography</a></li>');

    $("._layouts").html('<li><a href="'+ newURL +'layouts/index.html">Layouts</a></li>' +
        '<li><a href="'+ newURL +'layouts/nested-layouts.html">Nested Layouts</a></li>');

    $("._modules").html('<li><a href="'+ newURL +'modules/accordion.html">Accordions</a></li>' +
        '<li><a href="'+ newURL +'modules/banners.html">Banners</a></li>' +
        '<li><a href="'+ newURL +'modules/custom-modules.html">Custom Modules</a></li>' +
        '<li><a href="'+ newURL +'modules/home-modules.html">Home Modules</a></li>' +
    //    '<li><a href="'+ newURL +'modules/lists.html">Lists</a></li>' +
    //    '<li><a href="'+ newURL +'modules/list-formatting.html">Lists Formatting</a></li>' +
        '<li><a href="'+ newURL +'modules/fancybox.html">Modals (FancyBox)</a></li>' +
        '<li><a href="'+ newURL +'modules/page-titles.html">Page Titles</a></li>' +
        '<li><a href="'+ newURL +'modules/reusable-modules.html">Reusable Modules</a></li>' +
        '<li><a href="'+ newURL +'modules/table-formatting.html">Tables</a></li>' +
        '<li><a href="'+ newURL +'modules/tabs.html">Tabs</a></li>' +
        '<li><a href="'+ newURL +'modules/side-content-containers.html>Side-Column Modules</a></li>');

    $("._states").html('<li><a href="'+ newURL +'states/empty-list-items.html">Empty List Items</a></li>' +
        '<li><a href="'+ newURL +'states/sticky-table-headers.html">Sticky Table Headers</a></li>' +
        '<li><a href="'+ newURL +'states/toggle.html">Show/Hide Toggle</a></li>');

    $("._themes").html('<li><a href="'+ newURL +'themes/article.html">Article</a></li>' +
        '<li><a href="'+ newURL +'themes/basic-table.html">Basic Tables</a></li>' +
    //    '<li><a href="'+ newURL +'themes/data.html">Date Tables</a></li>' +
    //    '<li><a href="'+ newURL +'themes/natural-gas.html">Natural Gas</a></li>' +
    //    '<li><a href="'+ newURL +'themes/overview.html">Overview</a></li>' +
        '<li><a href="'+ newURL +'themes/primary-col-modules.html">Primary Modules</a></li>' +
        '<li><a href="'+ newURL +'themes/secondary-col-modules.html">Secondary Modules</a></li>');

    $("._examples").html('<li><a href="'+ newURL +'examples/index.html">PHP Starter Templates</a></li>' +
        '<li><a href="'+ newURL +'examples/index.html">Header</a></li>' +
        '<li><a href="'+ newURL +'examples/sub-navigation.html">Sub-navigation</a></li>' +
        '<li><a href="'+ newURL +'examples/header.html">Header</a></li>' +
        '<li><a href="'+ newURL +'examples/slider-home.html">Slider Home</a></li>' +
        '<li><a href="'+ newURL +'examples/slider-multi.html">Slider Multi</a></li>');

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