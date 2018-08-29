//import $ from 'jquery';

const Accordion = {
	settings: {
		// Expand the first item by default
		first_expanded: false,
		// Allow items to be toggled independently
		toggle: true
	},



	openAllAccordion: function(toggle, content) {
		if (content.children.length) {
			toggle.classList.add("is-open");
			let final_height = Math.floor(content.children[0].offsetHeight);
			content.style.height = final_height + "px";
		}
	},
	closeAllAccordion: function(toggle, content) {
		toggle.classList.remove("is-open");
		content.style.height = 0;
	},
	openAccordion: function(toggle, content) {
		if (content.children.length) {
			toggle.classList.add("is-open");
			let final_height = Math.floor(content.children[0].offsetHeight);
			content.style.height = final_height + "px";
		}
	},
	closeAccordion: function(toggle, content) {
		toggle.classList.remove("is-open");
		content.style.height = 0;
	},

	init: function(el) {
		const _this = this;

		// Override default settings with classes
		let is_first_expanded = _this.settings.first_expanded;
		if (el.classList.contains("is-first-expanded")) is_first_expanded = true;
		let is_toggle = _this.settings.toggle;
		if (el.classList.contains("is-toggle")) is_toggle = true;

		// Loop through the accordion's sections and set up the click behavior
		const sections = el.getElementsByClassName("accordion");
		const all_toggles = el.getElementsByClassName("accordion-head");
		const all_contents = el.getElementsByClassName("accordion-body");
//		const all_expanded = el.getElementsByClassName("expand-all");
//		const all_collapsed = el.getElementsByClassName("collapse-all");
		for (let i = 0; i < sections.length; i++) {
			const section = sections[i];
			const toggle = all_toggles[i];
			const content = all_contents[i];
//			const expanded = all_expanded[i];
//			const collapsed = all_collapsed[i];

			// Click behavior
			toggle.addEventListener("click", function(e) {
				if (!is_toggle) {
					// Hide all content areas first
					for (let a = 0; a < all_contents.length; a++) {
						_this.closeAccordion(all_toggles[a], all_contents[a]);
					}

					// Expand the clicked item
					_this.openAccordion(toggle, content);
				} else {
					// Toggle the clicked item
					if (toggle.classList.contains("is-open")) {
						_this.closeAccordion(toggle, content);
					} else {
						_this.openAccordion(toggle, content);
					}
				}
			});
//			expanded.addEventListener("click", function() {
//				console.log("expanded was clicked");
//			});



			// Expand the first item
			if (i === 0 && is_first_expanded) {
				_this.openAccordion(toggle, content);
			}
		}
	}
};

(function() {
	// Initiate all instances on the page
	const accordions = document.getElementsByClassName("accordions");
	for (let i = 0; i < accordions.length; i++) {
		Accordion.init(accordions[i]);
	}
})();


/*
class Accordion {
	constructor() {
		this.headerExpandCollapse = $('.accordion h2 .expand-collapse');
		this.allExpandCollapseInitialState = $('.expand-all');
		this.headerInactive = $('h2.inactive');
		this.headerActive = $('h2.active');
		this.header = $('.accordion h2');
		this.content = $('.accordion-content');
		this.initialState();
		this.events();
		console.log('accordion ready');
	}
	initialState() {
		this.headerExpandCollapse.addClass('expand');
		this.header.addClass('inactive');
		this.content.addClass('collapsed');
		this.allExpandCollapseInitialState.addClass('show');
	}
	events() {
		$('h2.active').click(function() {
			$('.expand-all').toggleClass('show');
			$('.collapse-all').toggleClass('show');
			$(this).toggleClass('active');
			$(this).toggleClass('inactive');
			$(this).next('.accordion-content').toggleClass('expanded');
			$(this).next('.accordion-content').toggleClass('collapsed');
		});
		$('h2.inactive').click(function() {
			$('.expand-all').toggleClass('show');
			$('.collapse-all').toggleClass('show');
			$(this).toggleClass('inactive');
			$(this).toggleClass('active');
			$(this).next('.accordion-content').toggleClass('collapsed');
			$(this).next('.accordion-content').toggleClass('expanded');
		}); 
		$('.expand-all').click(function() {
			$('.accordion h2').addClass('active');
			$('.accordion-content').addClass('expanded');
			$('.accordion-content').removeClass('collapsed');
			$('.expand-all').removeClass('show');
			$('.collapse-all').addClass('show');
			$('.expand-collapse').removeClass('expand');
		});
		$('.collapse-all').click(function() {
			$('.accordion h2').removeClass('active');
			$('.accordion-content').addClass('collapsed');
			$('.accordion-content').removeClass('expanded');
			$('.expand-all').addClass('show');
			$('.collapse-all').removeClass('show');
			$('.expand-collapse').addClass('expand');
		});
	}
}

export default Accordion;  */