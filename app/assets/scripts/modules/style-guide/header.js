class Header {
	constructor() {
		if (window.location.href.indexOf("http://localhost") > -1) {
			var newURL = window.location.protocol + "//" + window.location.host + "/"
			console.log("style-guide on localhost");
		} else if (window.location.href.indexOf("https://wwwdev.eia.gov/style-guide/") > -1) {
			var newURL = 'https://wwwdev.eia.gov/style-guide/'
			console.log("style-guide on dev");
		} else if (window.location.href.indexOf("https://wwwdev.eia.gov/adaptive/style-guide/app/") > -1) {
			var newURL = 'https://wwwdev.eia.gov/adaptive/style-guide/app/'
			console.log("style-guide on adaptive on dev");
		} else if (window.location.href.indexOf("https://wwwdev.eia.gov/adaptive/style-guide/dist/") > -1) {
			var newURL = 'https://wwwdev.eia.gov/adaptive/style-guide/dist/'
			console.log("style-guide on adaptive on dev");
		} else if (window.location.href.indexOf("https://www.eia.gov/archive/adaptive/style-guide/app/") > -1) {
			var newURL = 'https://www.eia.gov/archive/adaptive/style-guide/app/'
			console.log("style-guide on adaptive on Production");
		} else if (window.location.href.indexOf("https://www.eia.gov/archive/adaptive/style-guide/dist/") > -1) {
			var newURL = 'https://www.eia.gov/archive/adaptive/style-guide/dist/'
			console.log("style-guide on Production");
		} else if (window.location.href.indexOf(":/style-guide/app/") > -1) {
			var newURL = '../'
			console.log("style-guide from folder");
		}

		console.log(newURL);
		$('.add-header').html('   <header>' +
			'       <nav class="navigation">' +
			'           <a class="logo" href="/">' +
			'               <h1>U.S. Energy Information Administration - EIA - Independent Statistics and Analysis</h1>' +
			'           </a>' +
			'        <ul class="_nav">' +
			'            <li class="_nav-primary-item"><a href="' + newURL + 'base/index.html">Base</a>' +
			'                <ul class="_base _nav-dropdown">' +
			'                </ul>' +
			'            </li>' +
			'            <li class="_nav-primary-item"><a href="' + newURL + 'layouts/index.html">Layouts</a>' +
			'               <ul class="_layouts _nav-dropdown">' +
			'                </ul>' +
			'            </li>' +
			'            <li class="_nav-primary-item"><a href="' + newURL + 'modules/index.html">Modules</a>' +
			'                <ul class="_modules _nav-dropdown">' +
			'                </ul>' +
			'            </li>' +
			'            <li class="_nav-primary-item"><a href="' + newURL + 'states/index.html">States</a>' +
			'                <ul class="_states _nav-dropdown">' +
			'                </ul>' +
			'            </li>' +
			'           <li class="_nav-primary-item"><a href="' + newURL + 'themes/index.html">Themes</a>' +
			'                <ul class="_themes _nav-dropdown">' +
			'                </ul>' +
			'            </li>' +
			'            <li class="_nav-primary-item"><a href="' + newURL + 'examples/index.html">Examples</a>' +
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
		$("._base").html('<li><a href="' + newURL + 'base/color-palette.html">Color Palette</a></li>' +

			'<li><a href="' + newURL + 'base/icons.html">Icons</a></li>' +
			//'<li><a href="' + newURL + 'base/lists.html">Lists</a></li>' +
			'<li><a href="' + newURL + 'base/size-conversions.html">Size Conversions</a></li>' +
			'<li><a href="' + newURL + 'base/symbols.html">Symbols</a></li>' +
			'<li><a href="' + newURL + 'base/typography.html">Typography</a></li>');

		$("._layouts").html('<li><a href="' + newURL + 'layouts/examples.html">Examples</a></li>' +
			'<li><a href="' + newURL + 'layouts/row-examples.html">Row Examples</a></li>' +
			'<li><a href="' + newURL + 'layouts/nested-examples.html">Nested Examples</a></li>' +
			'<li><a href="' + newURL + 'layouts/full-page-examples.html">Full Page Examples</a></li>');

		$("._modules").html('<li><a href="' + newURL + 'modules/accordion.html">Accordions</a></li>' +
			'<li><a href="' + newURL + 'modules/banners.html">Banners</a></li>' +
			'<li><a href="' + newURL + 'modules/contact.html">Contact</a></li>' +
			'<li><a href="' + newURL + 'modules/energy-education.html">Energy Education</a></li>' +
			//        '<li><a href="'+ newURL +'modules/forms.html">Forms</a></li>' +
			'<li><a href="' + newURL + 'modules/home-content-containers.html">Home Content Containers</a></li>' +
			'<li><a href="' + newURL + 'modules/images.html">Image Containers</a></li>' +
			'<li><a href="' + newURL + 'modules/lists.html">Lists</a></li>' +
			'<li><a href="' + newURL + 'modules/fancybox.html">Modals and Overlays</a></li>' +
			'<li><a href="' + newURL + 'modules/page-titles.html">Page Titles</a></li>' +
			'<li><a href="' + newURL + 'modules/primary-content-containers.html">Primary Content Containers</a></li>' +
			'<li><a href="' + newURL + 'modules/report-headers.html">Report Headers</a></li>' +
			'<li><a href="' + newURL + 'modules/secondary-content-containers.html">Secondary Content Containers</a></li>' +
			'<li><a href="' + newURL + 'modules/tables.html">Tables</a></li>' +
			'<li><a href="' + newURL + 'modules/tabs.html">Tabs</a></li>' +
			'<li><a href="' + newURL + 'modules/visulizations.html">Visulizations</a></li>');

		$("._states").html('<li><a href="' + newURL + 'states/sticky-table-headers.html">Sticky Table Headers</a></li>' +
			//li><a href="'+ newURL +'states/empty-list-items.html">Empty List Items</a></li>' +
			'<li><a href="' + newURL + 'states/toggle.html">Show/Hide Toggle</a></li>');

		$("._themes").html('<li><a href="' + newURL + 'themes/accordion-list.html">Accordion List</a></li>' +
			'<li><a href="' + newURL + 'themes/article.html">Article</a></li>' + '<li><a href="' + newURL + 'themes/basic-table.html">Basic Tables</a></li>' +
			'<li><a href="' + newURL + 'themes/faqs.html">Faqs</a></li>');

		//    '<li><a href="'+ newURL +'themes/natural-gas.html">Natural Gas</a></li>' +
		//    '<li><a href="'+ newURL +'themes/overview.html">Overview</a></li>' +
		//    '<li><a href="'+ newURL +'themes/primary-col-modules.html">Primary Modules</a></li>' +
		//    '<li><a href="'+ newURL +'themes/secondary-col-modules.html">Secondary Modules</a></li>

		$("._examples").html('<li><a href="' + newURL + 'themes/article.html">Article</a></li>' +
			'<li><a href="' + newURL + 'themes/faqs.html">Faqs</a></li>');
		//        '<li><a href="'+ newURL +'examples/header.html">Header</a></li>' +
		//        '<li><a href="'+ newURL +'examples/home-slider.html">Home Slider</a></li>' +
		//        '<li><a href="'+ newURL +'examples/multi-card-slider.html">Multi-Card Slider</a></li>


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