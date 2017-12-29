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
	constructor() {
		// dom objects
		//this.accordionHeader = $('.accordion h2').each();
		//this.accordionContent = $('.accordion .accordion-content').next();
		this.accordionHeader = $('.accordion h2').first();
		this.accordionContentInitial = $('.accordion .accordion-content').first();
		//this.accordionContentExpanded = $('.accordion .accordion-content.expanded');
		//this.accordionContentCollapsed = $('.accordion .accordion-content.collapsed');
		this.initialState();
		this.events();
	}

	initialState() {
		//console.log('hi');
		this.accordionHeader.addClass('active');
		this.accordionContentInitial.addClass('expanded');
	}

	events() {
		$(".accordion h2").click(function() {
			//$("accordion-content").addClass("expanded");
			console.log("clicked");
			$(".accordion h2").removeClass("active");
			$(".accordion-content").removeClass("expanded");
			$(this).addClass("active");
			$(this).next(".accordion-content").addClass("expanded");
		});

		$(".accordion-expand-all").click(function() {
			$(".accordion h2").addClass("active");
			$(".accordion-content").addClass("expanded");
		});
		
		$(".accordion-collapse-all").click(function() {
			$(".accordion h2").removeClass("active");
			$(".accordion-content").removeClass("expanded");
		});
	}
	/*
	accordionToggle() {
	console.log("clicked");
	//	this.accordionContent.addClass("expanded");

	*/	

}
export default Accordion;  