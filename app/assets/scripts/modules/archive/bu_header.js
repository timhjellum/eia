
//class Header { 
	console.log("new click function test script loaded!");
/*
$(document).ready(function() {
	
	var screenResolution = $(window).width();
	var scrollTop = $(window).scrollTop();
	//var navigationHeight = $('.navigation').outerHeight();
	//var headerHeight = $('header').outerHeight();
	//console.log($(window).width());
	//console.log($('.navigation').outerHeight());
	//console.log($('header').outerHeight());
	//console.log(screenResolution);
	//console.log(navigationHeight);
	//console.log(headerHeight);
/*
	$('.search-menu-toggle').on('click', function() {
		if(screenResolution < 800) {
			$(".search-panel").toggleClass('show');
			$(".logo").toggleClass('show');
			console.log('toggle show / hide');
		}
		return false;
		else {
			console.log('greater than 800');
		}
	});

	$(window).resize(function() {
		if(screenResolution < 800) {
			console.log('less than 800');
			/*
			$('.search-panel').css('opacity', 0);
			$(".search-menu-toggle").on('click', function() {
				$(".search-panel").toggleClass('show');
				$(".logo").toggleClass('show');
				console.log('toggle show / hide');
			});

		}
	});


	// shrink / expand header

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 97) {
			$('header').addClass('shrink');
		} else {
			$('header').removeClass("shrink");
		}
	});




	/*
	$('.search-menu-toggle).on('click', function() {
		$(".search-panel").toggleClass('show');
		$(".logo").toggleClass('show');
	});

});
	*/


//dropdown search on mobile
	// search loader
	// search loader
	// search loader
	/*
	console.log("search loader script found!");
	//<![CDATA[
	var usasearch_config = { siteHandle:"eia.doe.gov" };
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "https://www.eia.gov/global/scripts/search.usa.gov/remote.loader.js"; // NOTE this may need to be updated from //search.usa.gov/javascripts/remote.loader.js" periodically
	document.getElementsByTagName("head")[0].appendChild(script);
	//]]>
*/
	// Tools > All Reports & Publications > Tags
	// Tools > All Reports & Publications > Tags
	// Tools > All Reports & Publications > Tags
	/*
	function byId(id){return document.getElementById(id)}
	// useful for HtmlCollection, NodeList, String types
	function forEach(array, callback, scope){for (var i=0,n=array.length; i<n; i++)callback.call(scope, array[i], i, array);} // passes back stuff we need

	window.addEventListener('load', onDocLoaded, false);

	function onDocLoaded(evt)
	{
		byId('goBtn').addEventListener('click', onGoBtnClicked);
	}

	function onGoBtnClicked(evt)
	{
		// get the user input
		var inputString = byId('userInput').value;
		// split it into an array of terms, based on the | char
		var searchTerms = inputString.split('+');
		// init the result
		var result ='';
		// for each element in the array of search terms, call the function to trim wrap with "" and encode
		forEach(searchTerms, addCurTermToResult);
		// update the output display

		window.location.href = 'http://www.eia.gov/#/' + result;


		function addCurTermToResult(curTerm, index)
		{
		if (index != 0)                     // put a comma before all terms except the first one
			result += ',';
		var trimmedTerm = curTerm.trim();   // remove leading/trailing spaces
		result += 'K' + encodeURI(trimmedTerm);	// wrap with "" then URI encode it, suitable for use as a URL
		}
	}

*/
//export Header;