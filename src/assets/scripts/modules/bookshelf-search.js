import $ from "jquery";

class BookshelfSearch {
	constructor() {
		var self = this;
		this.tags = [];
		this.container = $("#header-tag-search");
		this.selectedTagId = "";
		this.selectedTagText = "";

		this.resetControl();

		$("input", this.container)
			.on("keyup", function (e) {
				self.handleSearchInput(e);
			})
			.on("blur", function (e) {
				self.resetControl();
			});
		$("#header-tags-search .bookshelftags", this.container).on(
			"mousedown",
			"div",
			function (e) {
				self.searchElementSelectedHandler(e);
				e.preventDefault();
			}
		);
		$("#header-bookshelf-search-form", this.container).on(
			"submit",
			function (e) {
				self.submitSearch();
				e.preventDefault();
			}
		);
		this.getAllTags();
	}
	handleSearchInput(e) {
		var srchStr = $("input", this.container)
			.val()
			.toLowerCase();

		$("#header-tags-search .bookshelftags", this.container).empty();

		for (var t = 0; t < this.tags.length; t++) {
			var initCap = this.tags[t].label.substring(0, 1);
			var remDsc = this.tags[t].label.substring(
				1,
				this.tags[t].label.length
			);
			var fullDsc = this.tags[t].label.toLowerCase();
			//var srchTag = this.tags[t].identifier; // undifined

			if (fullDsc.search(srchStr) === 0) {
				$("#header-tags-search .bookshelftags", this.container).append(
					'<div name="tag-input" value=' +
					this.tags[t].identifier +
					' data-selectable class="option"><span class="highlight">' +
					initCap +
					"</span>" +
					remDsc +
					"</div>"
				);
			}
		}
		$("#header-tags-search").show();
	}
	searchElementSelectedHandler(e) {
		this.selectedTagId = $(e.currentTarget).attr("value");
		this.selectedTagText = $(e.currentTarget).text();
		$("input", this.container).val($(e.currentTarget).text());
		this.hideControl();
	}
	getAllTags() {
		var self = this;
		$.ajax({
			url: "/global/includes/bookshelf/index.php",
			dataType: "json",
			type: "GET"
		})
			.fail(function (jqXHR, textStatus, errorThrown) {
				//console.log('failed to retrieve tags');
				self.container.hide();
			})
			.done(function (data, textStatus, jqHXR) {
				self.tags = data.tags;
			});
	}
	hideControl() {
		$("#header-tags-search", this.container).hide();
	}
	resetControl() {
		this.hideControl();
		$("input", this.container).val(this.selectedTagText);
		//console.log("reset found");
	}
	submitSearch() {
		$.fancybox.close();
		window.location = "/reports/#/" + this.selectedTagId;
	}
}
export default BookshelfSearch;
