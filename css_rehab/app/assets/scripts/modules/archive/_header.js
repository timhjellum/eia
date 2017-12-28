// check the page resolution on initial page load and if the browser is resized
$(document).ready(function() {
    // run on initial page load
    checkSize();
    // run on window resize
    $(window).resize(checkSize);

	// search toggle
	// search toggle
	// search toggle

//console.log('search panel toggle script found!');
	$('.search-menu-toggle').click(function() {
		//console.log('toggle class show');
		$('.search-panel').toggleClass('show');
		$('header').toggleClass('show');
		$('.logo').toggleClass('show');
	});

	// shrink / expand header
	// shrink / expand header
	// shrink / expand header

//console.log('header shrink expand script found!');
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 97) {
			$('header').addClass('shrink');
		} else {
			$('header').removeClass('shrink');
		}
	});

	// .dropdown script found!
	// .dropdown script found!
	// .dropdown script found!

//console.log('.dropdown script found!');
  $('.dropdown').dd();
  $('div.dropdown-links a').click(function() {
    $('table.file-table').children('tbody').hide();
    $('table.file-table th').removeClass('active');
    var sID = this.href.substring(this.href.indexOf('#') + 1);
    $("[name$='" + sID + "']").click();
  });

	// fancybox tabs
	// fancybox tabs
	// fancybox tabs

//console.log('handle the fancybox tabs script found!');
  $('.fancybox-menu').click(function () {
  	var target = $(this).data("target");
    var options = {active : 0};

    switch(target) {
      case 'sources':
            options.active = 0;
            break;

      case 'topics':
            options.active = 1;
            break;

      case 'geography':
            options.active = 2;
            break;

      case 'tools':
            options.active = 3;
            break;

      case 'learn':
            options.active = 4;
            break;

      case 'news':
            options.active = 5;
            break;

      case 'default':
            options.active = 0;
    	}
    	$('.page_tabs').tabs(options);
    });


});
function checkSize() {
	console.log('check size initiated in the header.min.js');
	// remove show class on browser resize
	// remove show class on browser resize
	// remove show class on browser resize

	//console.log('remove show class on browser resize script found!');

//console.log('Browser window opened or resized!');
	$('.search-panel').removeClass('show');
	$('header').removeClass('show');
	$('.logo').removeClass('show');

	// initiate and configure the fancybox
	// initiate and configure the fancybox
	// initiate and configure the fancybox

//console.log('initiate and configure the fancybox script found!');

	// outer wrapper is set as 990px for laptop and desktop
	var elementWidth = $("#l-outer-wrapper").width();

	if ((elementWidth) >= "988") {
		console.log("laptop and desktop header width");
		$('.fancybox-menu').fancybox({
			type: 'inline',
			//scrolling: 'no',
			width: 960,
			//margin: [20, 0, 0, 0],
			height: 'auto',
			padding: 0,
			fitToView: false,
			autoSize: false,
			tpl: {
				closeBtn: '<a title="Close" class="fancybox-item fancybox-close fancyboxBtn" href="javascript:;"></a>'
			},
			helpers : {
        overlay : {
          css : {
          	'background' : 'rgba(0, 60, 87, 0.7)'
          }
				},
				afterLoad: function() {
					$('.page_tabs').click(function() {
						$.fancybox.reposition();
					});
				}
			}
		});
	} else if ((elementWidth >= 320) && (elementWidth <= 987)) {
		console.log("mobile header width");
		$('.fancybox-menu').fancybox({
			padding    	: 0,
			margin     	: 0,
			width				: '100%',
			top					:	0,
			left				: 0,
			scrolling		: 'no',
			height			: 'auto',
			fitToView		: false,
			autoSize		: false,
			tpl: {
				closeBtn: '<a title="Close" class="fancybox-item fancybox-close fancyboxBtn" href="javascript:;"></a>'
			},
			helpers : {
        overlay : {
          css : {
          	'background' : 'rgba(0, 60, 87, 0.7)'
          }
				},
				afterLoad: function() {
					$('.page_tabs').click(function() {
						$.fancybox.reposition();
					});
				}
			}
		});
	}
}
