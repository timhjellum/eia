import '../../../../node_modules/sticky-sidebar/dist/jquery.sticky-sidebar.js';

class StickySidebar {
	constructor() {

		$('._right-sidebar').stickySidebar({
			topSpacing: 20,
			bottomSpacing: 20,
			containerSelector: '._container',
			innerWrapperSelector: '._right-sidebar-inner'
		});
		/*
		var sidebar = new StickySidebar('._right-sidebar', {
			topSpacing: 20,
			bottomSpacing: 20,
			containerSelector: '._container',
			innerWrapperSelector: '._right-sidebar-inner'
		});
		*/

		var scrollTop = $(window).scrollTop();

		$.fn.scrollFunction = function () {
			return this.each(function () {

				var elementOffset = $(this).offset();
				var elementOffsetTop = elementOffset.top;
				var pPosition = (scrollTop - elementOffsetTop);

				// if p doesn't have class active, run this code
				if (!$($(this)).hasClass("active")) {
					if (pPosition > -26) {
						$(".dilly li").removeClass("active");
						$(this).addClass("active");
						var activeElement = $(this).index();

						$(".dilly-dilly li").removeClass("active");
						$(".dilly-dilly li:eq(" + activeElement + ")").addClass("active");
					};
				}
				if ($($(this)).hasClass("active")) {
					if (pPosition < -26) {
						$(this).removeClass("active");
						var inactiveElement = $(this).index();
						console.log(inactiveElement);
						$(".dilly-dilly li:eq(" + inactiveElement + ")").removeClass("active");
					};
				}
			});
		}
		$(window).scroll(function () {
			scrollTop = $(window).scrollTop();
			$("._content ul.dilly li").scrollFunction();
		});

		// Select all links with hashes
		$('a[href*="#"]')
			// Remove links that don't actually link to anything
			.not('[href="#"]')
			.not('[href="#0"]')
			.click(function (event) {
				// On-page links
				if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: (target.offset().top - 21)
					}, 1000, function () {
						// Callback after animation
						// Must change focus!
						var $target = $(target);
						$target.focus();
						if ($target.is(":focus")) { // Checking if the target was focused
							return false;
						} else {
							$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
							$target.focus(); // Set focus again
						};
					});
				}
			}
		});
	}
}
export default StickySidebar;


