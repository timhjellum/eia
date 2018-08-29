// Side Nav Expand function 
$(".side_nav ul li:not(.active) ul").hide();

$(".side_nav ul li span").click(function( e ){
	$(this).parent().toggleClass("active").children("ul").toggle();
});