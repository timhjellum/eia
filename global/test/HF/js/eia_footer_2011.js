// EIA footer include
// 2009.12.09 - integrated site-wide rating stars ... *RC*
// 2009.12.10 - Integrated EIA and EIA.DOE cookies ... *RC*
// 2009.12.17 - Modified to check for jquery existance *RC*
// 2010.01.07 - rewrote uuid and cookie handling to exclude jquery *RC*
// 2010.05.17 - added dynamic support for ratings & comments *RC*
// 2010.08.26 - removed all cookies from the global footer *RC*
//
//----------//
<!--
//////////////////////////////////////////////////
// DO NOT EDIT                                  //
//////////////////////////////////////////////////

//////////////////////////////////////////////////
// Footer
//////////////////////////////////////////////////
function InsertEIAFooterCode(){
	var petnav = location.href.search(/HF/);
	if(petnav == "-1"){
	  // Add PG
	  var codepet='</div>';
	  document.writeln(codepet);
	}
	var	code2='</div><div id="footer"></div></div></div></div></div>';
	document.writeln(code2);
	$('#footer').load('/global/includes/eia_footer_flat.htm', function() {
	  /////// //////
        // comment toggle 
			  $('#star').click(function () {
				   $('.rs_comments').slideDown('slow');
			  });
			  // comment toggle 
			  $('#closer').click(function () {
				   $('.rs_comments').slideUp('slow');
			  });
	  /////// //////
			});
}

//-->