  // EIA Survey
  // set time for now and time increment variable for initial elapse time
  var thetime = $.now();
  var fiveminutes = 300000;//;
  var oneminutes = 60000;//;
  //$.cookie('survey', null);
  if($.cookie('survey') == null) {
	  $.cookie('survey', 'n', { expires: null });
  }
  if($.cookie('survey') != 'y') {
	  // if thefuture is null set it and set a cookie for it (sometimes thefuture is not set and there are no cookies... LOL)
	  if($.cookie('thefuture') == null) {
		  var thefuture = $.now() + oneminutes;
		  $.cookie('thefuture', thefuture, { expires: null });
		}
	  // if the elapse time for the pop up is null set it // otherwise recalculate the elapse time (thefuture - now)
	  if($.cookie('elapse') == null) {
		  var elapse = oneminutes;
		}
		else {
		  var elapse = $.cookie('thefuture') - thetime;
		}
	  // set elapse time cookie
	  $.cookie('elapse', elapse, { expires: 30 });
	  // Prepend survey
	  $("body").prepend("<a class=\"showSurvey\" href=\"http://www.eia.gov/CFusionMX7/cache/websurveys/survey17.cfm\"></a>");
	  // set survey fancybox function
	  $(".showSurvey").fancybox({
		  'width' : 540, 'height' : '75%', 'autoScale' : false, 
		  'transitionIn' : 'none', 'transitionOut' : 'none', 'type' : 'iframe',
		  onComplete	:	function() {
			  // add button to defer
			  $("#fancybox-outer").prepend("<a id=\"fancybox-defer\" style=\"display: inline;\"></a>");
			  // defer button function
			  $("#fancybox-defer").click(function(){
				$.fancybox.close();
				$.cookie('survey', null);
				// reset survey & timer
				var elapse = fiveminutes;
				var thefuture = $.now() + fiveminutes;
				$.cookie('thefuture', thefuture, { expires: 30 });
				// Pop up delay function (again)
				setTimeout(function() { 
				  // this is what happens after time has elapsed after you have warped time
				  //alert('robert is awesome');
				  $('.showSurvey').trigger('click');
				  $.cookie('survey', 'y', { expires: 30 });
				}, elapse);
			  });
		  }
	  });	
	  // Pop up delay function
	  setTimeout(function() { 
		  // this is what happens after time has elapsed  
		  //alert('robert is awesome');
		  $('.showSurvey').trigger('click');
		  $.cookie('survey', 'y', { expires: 30 });
		}, elapse);
  }
  // End Survey