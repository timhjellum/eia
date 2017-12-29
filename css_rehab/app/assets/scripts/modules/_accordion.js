import $ from 'jquery';


/*
$(document).ready(function() {
		var icons = {
			 header: 'ui-icon-circle-arrow-e',
			 activeHeader: 'ui-icon-circle-arrow-s'
		 };
		 $( '#accordion' ).accordion({
			 icons: 'icons',
			heightStyle: 'content',
			collapsible: 'true'
		});
	});


		$.fn.expandContent = function() {
			return this.each(function() {
				// if open then close
			});
		};




*/

class Accordion {
	constructor(www, xxx, yyy, zzz) {
		this.headerInitialState = $('h2').first();
		this.contentInitialState = $('.accordion-content').first();
		this.header = $('h2');
		this.content = $('.accordion-content');

		this.firstHeaderInitialState = www;
		this.firstContentInitialState = xxx;
		this.allHeadersInitialState = yyy;
		this.allContentInitialState = zzz;

		this.initialState();
		this.events();
	}

	initialState() {
		this.headerInitialState.addClass(this.firstHeaderInitialState);
		this.contentInitialState.addClass(this.firstContentInitialState);
		this.header.addClass(this.allHeadersInitialState);
		this.content.addClass(this.allContentInitialState);
	}

	events() {
		$(this.header).click(function() {
			console.log('clicked');
			$('h2').removeClass('active');
			$('.accordion-content').removeClass('expanded');
			$(this).addClass('active');
			$(this).next('.accordion-content').addClass('expanded');
		});

		$('.accordion-expand-all').click(function() {
			$('h2').addClass('active');
			$('.accordion-content').addClass('expanded');
		});
		
		$('.accordion-collapse-all').click(function() {
			$('h2').removeClass('active');
			$('.accordion-content').removeClass('expanded');
		});
	}
































	/* this works
	constructor() {
		this.headerInitialState = $('h2').first();
		this.contentInitialState = $('.accordion-content').first();
		this.initialState();
		this.events();
	}

	initialState() {
		this.headerInitialState.addClass('active');
		this.contentInitialState.addClass('expanded');
	}

	events() {
		$(this.header).click(function() {
			console.log('clicked');
			$(this.header).removeClass('active');
			$('.accordion-content').removeClass('expanded');
			$(this).addClass('active');
			$(this).next('.accordion-content').addClass('expanded');
		});

		$('.accordion-expand-all').click(function() {
			$(this.header).addClass('active');
			$('.accordion-content').addClass('expanded');
		});
		
		$('.accordion-collapse-all').click(function() {
			$(this.header).removeClass('active');
			$('.accordion-content').removeClass('expanded');
		});
	}
	*/
}
export default Accordion;  