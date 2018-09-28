$("#nav").html('<ul class="navigation">' +
    '	<li><input type="radio" id="nav-1" name="nav-group-1" checked><label for="nav-1">Home</label>' +
    '		<ul class="sub">' +
    '			<li>One</li>' +
    '		</ul>' +
    '	</li>' +
    '	<li><input type="radio" id="nav-2" name="nav-group-1"><label for="nav-2">Base</label>' +
    '		<ul class="sub">' +
    '			<li><a href="../base/color-palette.html">Color Palette</a></li>' +
    //'			<li><a href="../base/header-and-footer.html" target="_blank">Header & Footer</a></li>'+
    '			<li><a href="../base/icons.html">Icons</a></li>' +
    //'			<li><a href="../base/typography.html">Typography</a></li>'+
    '		</ul>' +
    '	</li>' +
    '	<li><input type="radio" id="nav-3" name="nav-group-1"><label for="nav-3">Layouts</label>' +
    '		<ul class="sub">' +
    '			<li><a href="../layouts/index.html#header-row">Header Row</a></li>' +
    '			<li><a href="../layouts/index.html#row">Row</a></li>' +
    '			<li><a href="../layouts/index.html#full-width">Full-width</a></li>' +
    '			<li><a href="../layouts/index.html#side+main+side">Side + Main + Side</a></li>' +
    '			<li><a href="../layouts/index.html#main+side">Main + Side</a></li>' +
    '			<li><a href="../layouts/index.html#main+wide-side">Main + Wide-side</a></li>' +
    '			<li><a href="../layouts/index.html#wide-side+main">Wide-side + Main</a></li>' +
    '			<li><a href="../layouts/index.html#one-third+two-thirds">One-third + Two-thirds</a></li>' +
    '			<li><a href="../layouts/index.html#two-thirds+one-third">Two-thirds + One-third</a></li>' +
    '			<li><a href="../layouts/index.html#two-even-columns">Two-even-columns</a></li>' +
    '			<li><a href="../layouts/index.html#three-even-columns">Three-even-columns</a></li>' +
    '			<li><a href="../layouts/index.html#four-even-columns">Four-even-columns</a></li>' +
    '		</ul>' +
    '	</li>' +
    '	<li><input type="radio" id="nav-4" name="nav-group-1"><label for="nav-4">Modules</label>' +
    '		<ul class="sub">' +
    '			<li><a href="../modules/accordion.html">Accordion</a></li>' +
    '			<li><a href="../modules/home-content-containers.html">Home content Containers</a></li>' +
    //'			<li><a href="../modules/reusable-content-containers.html#standard-containers">Standard Containers</a></li>'+
    //'			<li><a href="../modules/reusable-content-containers.html#light-blue-top-border">Light-blue-top-border Containers</a></li>'+
    //'			<li><a href="../modules/reusable-content-containers.html#light-blue-top-border-dilly">Light-blue-top-border dilly Containers</a></li>'+
    //'			<li><a href="../modules/reusable-content-containers.html#dark-blue-top-border">Dark-blue-top-border Containers</a></li>'+
    '			<li><a href="../modules/report-header.html">Report Header</a></li>' +
    '			<li><a href="../modules/sub-navigation.html">Sub Navigation</a></li>' +
    '			<li><a href="../modules/table-list-formatting.html">Table and List Formatting</a></li>' +
    '			<li><a href="../modules/tabs.html">Tabs</a></li>' +
    '			<li><a href="../modules/page-titles.html">Page Titles</a></li>' +
    '			<li><a href="../modules/messaging.html">Messaging</a></li>' +
    '			<li><a href="../modules/side-content-containers.html">Side Content Containers</a></li>' +
    //'			<li><a href="../modules/slider-home.html" target="_blank">Home Slider</a></li>' +
    //'			<li><a href="../modules/slider-multi-cards.html" target="_blank">Multi-Card Slider</a></li>' +
    '		</ul>' +
    '	</li>' +
    '	<li><input type="radio" id="nav-5" name="nav-group-1"><label for="nav-5">States</label>' +
    '		<ul class="sub">' +
    '			<li><a href="../states/links-list.html">Links List</a></li>' +
    //'			<li><a href="../states/header-menu.html">Header Menus</a></li>'+
    //'			<li><a href="../states/sub-nav-menus.html">Subnav Menus</a></li>'+
    //'			<li><a href="../states/local-scroll.html">Local Scroll</a></li>'+
    //'			<li><a href="../states/scroll-to.html">Scroll To</a></li>'+
    '		</ul>' +
    '	</li>' +
    '	<li><input type="radio" id="nav-6" name="nav-group-1"><label for="nav-6">Themes</label>' +
    '		<ul class="sub">' +
    '			<li>in progress</li>' +
    '		</ul>' +
    '	</li>' +
    '</ul>');




















/*

	'			<li>'+
		'<a href="../index.html">'+
			'<i class="ti-home"></i>'+
			'<p>Home</p>'+
		'</a>'+
	'</li>'+
	'			<li>'+
		'<a href="../base/">'+
			'<i class="ti-world"></i>'+
			'<p>Base</p>'+
			'</a>'+
		'<ul class="sub-nav">'+
			'			<li><a href="../base/ellipsis.html">Ellipsis / Truncate</a></li>'+
			'			<li><a href="../base/color-palette.html">Color Palette</a></li>'+
			'			<li><a href="../base/header-and-footer.html" target="_blank">Header & Footer</a></li>'+
			'			<li><a href="../base/icons.html" target="_blank">Iconss</a></li>'+
			'			<li><a href="../base/typography.html">Typography</a></li>'+
		'</ul>'+
	'</li>'+
	
	'			<li>'+
		'<a href="../layouts/index.html">'+
			'<i class="ti-layout"></i>'+
			'<p>Layouts</p>'+
		'</a>'+
	'</li>'+
	'			<li>'+
		'<a href="../modules/">'+
			'<i class="ti-widgetized"></i>'+
			'<p>Modules</p>'+		  
		'</a>'+
		'<ul class="sub-nav">'+
			'			<li><a href="../modules/accordion.html">Accordion</a></li>'+
			'			<li><a href="../modules/custom-content-containers.html">Custom content Containers</a></li>'+
			'			<li><a href="../modules/home-content-containers.html">Home content Containers</a></li>'+
			'			<li><a href="../modules/reusable-content-containers.html">Reusable content Containers</a></li>'+
			'			<li><a href="../modules/tables.html">Tables</a></li>'+
			'			<li><a href="../modules/tabs.html">Tabs</a></li>'+
			'			<li><a href="../modules/page-titles.html">Page titles</a></li>'+
			'			<li><a href="../modules/messaging.html">Messaging</a></li>'+
			'			<li><a href="../modules/slider-home.html" target="_blank">Home Slider</a></li>'+
			'			<li><a href="../modules/slider-multi-cards.html" target="_blank">Multi-Card Slider</a></li>'+
		'</ul>'+
	'</li>'+
	'			<li>'+
		'<a href="../states/">'+
			'<i class="ti-layers"></i>'+
			'<p>States</p>'+
		'</a>'+
		'<ul class="sub-nav">'+
			'			<li><a href="../states/links-list.html">Links List</a></li>'+
//				'			<li><a href="../states/header-menu.html">Header Menus</a></li>'+
//				'			<li><a href="../states/sub-nav-menus.html">Subnav Menus</a></li>'+
//				'			<li><a href="../states/local-scroll.html">Local Scroll</a></li>'+
//				'			<li><a href="../states/scroll-to.html">Scroll To</a></li>'+
		'</ul>'+
	'</li>'+
	'			<li>'+
		'<a href="themes.html">'+
			'<i class="ti-brush"></i>'+
			'<p>Themes</p>'+
		'</a>'+
	'</li>'+

$(".nav li a").each(function() {
	var linkPath = $(this).attr('href').split( '/' );
	var linkPage = linkPath[linkPath.length -1];
	var pathArray = window.location.pathname.split( '/' );
	var activePage = pathArray[pathArray.length -1];

	if (activePage == linkPage) {
		$(this).parent().addClass('active');
		console.log("yes"); 
	}
});


*/