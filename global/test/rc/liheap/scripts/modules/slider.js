$(document).ready(
function () {
    $('img.slider_menu_button1').click(function () {
	$('ul.slider_menu').show('medium', menu_close);
	$('ul.slider_menu2').hide('medium');
    });
    $('.slider_menu li').click(function () {
	$('ul.slider_menu').hide('medium');
    });
    $('img.slider_menu_button2').click(function () {
	$('ul.slider_menu2').show('medium', menu_close);
	$('ul.slider_menu').hide('medium');
    });
    $('.slider_menu2 li').click(function () {
	$('ul.slider_menu2').hide('medium');
    });
    function menu_close() { 
	if ($('ul.slider_menu').is(':visible') == true) {
	    $('body').click(function () {
	        $('ul.slider_menu').hide('medium');
		$('body').unbind('click');
	    });
	};
	if ($('ul.slider_menu2').is(':visible') == true) {
	    $('body').click(function () {
	        $('ul.slider_menu2').hide('medium');
		$('body').unbind('click');
	    });
	};
    };
});