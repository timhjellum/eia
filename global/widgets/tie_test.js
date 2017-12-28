(function() {

    // Localize jQuery variable
    var jQuery;

    /******** Load jQuery if not present *********/
    if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.6.1') {
		var script_tag = document.createElement('script');
		script_tag.setAttribute("type","text/javascript");
		script_tag.setAttribute("src","http://www.eia.gov/global/scripts/jquery/jquery-1.6.1.min.js");
//			"http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");
        script_tag.onload = scriptLoadHandler;
		// Same thing but for IE
		script_tag.onreadystatechange = function () {
		    if (this.readyState == 'complete' || this.readyState == 'loaded') {
				scriptLoadHandler();
			}
		};
        // Try to find the head, otherwise default to the documentElement
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    } else {
        // The jQuery version on the window is the one we want to use
        jQuery = window.jQuery;
        main();
    }

    /******** Called once jQuery has loaded ******/
    // Restore $ and window.jQuery to their previous values and store the
    // new jQuery in our local jQuery variable
    // Call our main function
    function scriptLoadHandler() {
		jQuery = window.jQuery.noConflict(true);
		main();
    }

    /******** Our main function ********/
    function main() {
        jQuery(document).ready(function($) {
			/******* Load CSS *******/
			var css_link = $("<link>", {
				rel: "stylesheet",
				type: "text/css",
				href: "style.css"
			});
			css_link.appendTo('head');

			/******* Load HTML *******/
			var c_url = "http://www.eia.gov/global/ris.cfm";

			$.ajax({
				url: c_url,
				success: function(data){
					$('#tie-widget').addClass("done").html(data);
				}
			});
		});
	}
})(); // We call our anonymous function immediately