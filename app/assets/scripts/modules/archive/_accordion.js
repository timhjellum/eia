import $ from 'jquery';

class Accordion {
	constructor() {
		this.headerInitialState = $('.accordion h2').first();
		this.headerExpandCollapseInitialState = $('.accordion h2 .expand-collapse').first();
		this.headerExpandCollapse = $('.accordion h2 .expand-collapse');
		this.contentInitialState = $('.accordion-content').first();
		this.allExpandCollapseInitialState = $('.expand-all');
		this.header = $('.accordion h2');
		this.content = $('.accordion-content');
		this.initialState();
		this.events();
	}
	initialState() {
		this.headerExpandCollapse.addClass('expand');
		this.headerInitialState.addClass('active');
		this.contentInitialState.addClass('expanded');
		this.allExpandCollapseInitialState.addClass('show');
		this.headerExpandCollapseInitialState.removeClass('expand');
	}

	events() {
		$(this.header).click(function() {
			console.log('clicked');
			$('.accordion h2').removeClass('active');
			$('.accordion-content').removeClass('expanded');
			$('.expand-all').addClass('show');
			$('.collapse-all').removeClass('show');
			$('.expand-collapse').addClass('expand');
			$(this).addClass('active');
			$(this).children().removeClass('expand');
			$(this).next('.accordion-content').addClass('expanded');
		});

		$('.expand-all').click(function() {
			$('.accordion h2').addClass('active');
			$('.accordion-content').addClass('expanded');
			$('.expand-all').removeClass('show');
			$('.collapse-all').addClass('show');
			$('.expand-collapse').removeClass('expand');
		});
		
		$('.collapse-all').click(function() {
			$('.accordion h2').removeClass('active');
			$('.accordion-content').removeClass('expanded');
			$('.expand-all').addClass('show');
			$('.collapse-all').removeClass('show');
			$('.expand-collapse').addClass('expand');
		});
	}
}
export default Accordion;  