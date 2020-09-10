import $ from "jquery"
window.jQuery = $
window.$ = $

class JqueryUI {
  constructor() {
    $(".tabs").tabs()

    /*
		document.getElementsByClassName("accordion").accordion({
			heightStyle: "content",
			active: false,
			collapsible: true,
			header: "h3",
			icons: {
				header: "ico expand",
				activeHeader: "ico collapse"
			},
			activate: function(event, ui) {
				if (!$.isEmptyObject(ui.newHeader.offset())) {
					$("html:not(:animated), body:not(:animated)").animate(
						{ scrollTop: ui.newHeader.offset().top - 50 },
						"slow"
					);
				}
			}
		});
		*/

    $(".accordion").accordion({
      heightStyle: "content",
      active: false,
      collapsible: true,
      header: "h3",
      icons: {
        header: "ico expand",
        activeHeader: "ico collapse"
      },
      activate: function (event, ui) {
        if (!$.isEmptyObject(ui.newHeader.offset())) {
          $("html:not(:animated), body:not(:animated)").animate({ scrollTop: ui.newHeader.offset().top - 50 }, "slow")
        }
      }
    })
    /*
		document.querySelector(".accordion.all-open").accordion({
			heightStyle: "content",
			active: true,
			collapsible: true,
			header: "h3",
			icons: false
		});
		*/
    $(".accordion.all-open").accordion({
      heightStyle: "content",
      active: true,
      collapsible: true,
      header: "h3",
      icons: false
    })

    $(".accordion.all-open h3").removeClass("ui-accordion-header-collapsed").addClass("ui-accordion-header-active").attr({ "aria-selected": "true", tabindex: "0" })
    /*
		document.querySelector(".accordion.all-open h3").allOpenHeader()
		allOpenHeader() {
			//.removeClass("ui-accordion-header-collapsed")
			//.addClass("ui-accordion-header-active")
			//.attr({ "aria-selected": "true", tabindex: "0" });
		}
		*/

    $(".accordion.all-open .ui-accordion-content").addClass("ui-accordion-content-active").attr({ "aria-expanded": "true", "aria-hidden": "false" }).show()
    /*
		document.querySelector(".accordion.all-open .ui-accordion-content").allOpenContent();
		allOpenContent() {
			.addClass("ui-accordion-content-active")
			.attr({ "aria-expanded": "true", "aria-hidden": "false" })
			.show();
		}
		*/

    $(".accordion.first-open").accordion({
      heightStyle: "content",
      collapsible: true,
      header: "h3",
      icons: {
        header: "ico expand",
        activeHeader: "ico collapse"
      },
      activate: function (event, ui) {
        if (!$.isEmptyObject(ui.newHeader.offset())) {
          $("html:not(:animated), body:not(:animated)").animate({ scrollTop: ui.newHeader.offset().top - 50 }, "slow")
        }
      }
    })
    /*
		document.querySelector(".accordion.first-open").firstOpenHeader()
		firstOpenHeader() {
			heightStyle: "content",
			collapsible: true,
			header: "h3",
			icons: {
				header: "ico expand",
				activeHeader: "ico collapse"
			},
			activate: function(event, ui) {
				if (!$.isEmptyObject(ui.newHeader.offset())) {
					$("html:not(:animated), body:not(:animated)").animate(
						{ scrollTop: ui.newHeader.offset().top - 50 },
						"slow"
					);
				}
			}
		});
		*/
    $(".accordion.first-open > h3:first-of-type").removeClass("ui-accordion-header-collapsed").addClass("ui-accordion-header-active").attr({ "aria-selected": "true", tabindex: "0" })
    /*
		document.querySelector(".accordion.first-open > h3:first-of-type").FirstOpenHeader()
		FirstOpenHeader() {
			.addClass("collapse")
			.removeClass("expand")
			.css("display", "block");
		}
		}
		*/
    $(".accordion.first-open > div:first-of-type").addClass("ui-accordion-content-active").attr({ "aria-expanded": "true", "aria-hidden": "false" }).show()
    /*
		document.querySelector(".accordion.all-open h3").firstOpenContent()
		firstOpenContent() {
			.addClass("ui-accordion-content-active")
			.attr({ "aria-expanded": "true", "aria-hidden": "false" })
			.show();
		}
		*/
    $(".accordion.first-open > h3:first-of-type span").addClass("collapse").removeClass("expand").css("display", "block")
    /*
		document.querySelector(".accordion.first-open > h3:first-of-type span").firstOpenIcons()
		firstOpenIcons() {
			.addClass("collapse")
			.removeClass("expand")
			.css("display", "block");
		}
		*/
    console.log("open")
    $(".accordion h3.open").removeClass("ui-accordion-header-collapsed").addClass("ui-accordion-header-active").attr({ "aria-selected": "true", tabindex: "0" })
    $(".accordion .ui-accordion-content.open").addClass("ui-accordion-content-active").attr({ "aria-expanded": "true", "aria-hidden": "false" }).show()
    $(".accordion h3.open span").addClass("collapse").removeClass("expand").css("display", "block")
    // set the initial state
    $(".expand-collapse-container .collapse").hide()
    //let initialState = document.querySelectorAll('.expand-collapse-container .collapse')
    //initialState.style.display = "none";

    /*
		var containerExpand = document.querySelector(".expand-collapse-container .expand");
		containerExpand.addEventListener("click", triggerExpand);
		function triggerExpand(e) {
			$(this)
				.parent()
				.next("div")
				.find("h3")
				.removeClass("ui-accordion-header-collapsed")
				.addClass("ui-accordion-header-active")
				.attr({ "aria-selected": "true", tabindex: "0" });
			$(this)
				.parent()
				.next("div")
				.find(".ui-accordion-content")
				.addClass("ui-accordion-content-active")
				.attr({ "aria-expanded": "true", "aria-hidden": "false" })
				.show();
			$(this).hide();
			$(this)
				.parent("span")
				.find(".collapse")
				.show();
			$(this)
				.parent()
				.next("div")
				.find(".ui-accordion-header-icon")
				.removeClass("expand")
				.addClass("collapse")
				.attr({ "aria-selected": "true", tabindex: "0" });
			console.log("trigger expand");
		}
*/

    $(".expand-collapse-container .expand").click(function () {
      $(this).parent().next("div").find("h3").removeClass("ui-accordion-header-collapsed").addClass("ui-accordion-header-active").attr({ "aria-selected": "true", tabindex: "0" })
      $(this).parent().next("div").find(".ui-accordion-content").addClass("ui-accordion-content-active").attr({ "aria-expanded": "true", "aria-hidden": "false" }).show()
      $(this).hide()
      $(this).parent("span").find(".collapse").show()
      $(this).parent().next("div").find(".ui-accordion-header-icon").removeClass("expand").addClass("collapse").attr({ "aria-selected": "true", tabindex: "0" })
    })

    /*
		var containerCollapse = document.querySelector(".expand-collapse-container .collapse");
		containerCollapse.addEventListener("click", triggerCollapse);
		function triggerCollapse(e) {
			$(this)
				.parent()
				.next("div")
				.find("h3")
				.removeClass("ui-accordion-header-active")
				.addClass("ui-accordion-header-collapsed")
				.attr({ "aria-selected": "false", tabindex: "-1" });
			$(this)
				.parent()
				.next("div")
				.find(".ui-accordion-content")
				.removeClass("ui-accordion-content-active")
				.attr({ "aria-expanded": "false", "aria-hidden": "true" })
				.hide();
			$(this).hide();
			$(this)
				.parent("span")
				.find(".expand")
				.show();
			$(this)
				.parent()
				.next("div")
				.find(".ui-accordion-header-icon")
				.removeClass("collapse")
				.addClass("expand")
				.attr({ "aria-selected": "true", tabindex: "0" });
			console.log("trigger collapse");
		}
*/
    $(".expand-collapse-container .collapse").click(function () {
      $(this).parent().next("div").find("h3").removeClass("ui-accordion-header-active").addClass("ui-accordion-header-collapsed").attr({ "aria-selected": "false", tabindex: "-1" })
      $(this).parent().next("div").find(".ui-accordion-content").removeClass("ui-accordion-content-active").attr({ "aria-expanded": "false", "aria-hidden": "true" }).hide()
      $(this).hide()
      $(this).parent("span").find(".expand").show()
      $(this).parent().next("div").find(".ui-accordion-header-icon").removeClass("collapse").addClass("expand").attr({ "aria-selected": "true", tabindex: "0" })
    })
  }
}
export default JqueryUI
