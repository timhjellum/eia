import $ from "jquery";

class AnalysisProjections {
	constructor() {
		$("#overviewSideNavOptions").on(
			"click",
			"#ov_ap, #ov_hl",
			changeOVSideNav
		);
		$('[data_value="HL"]').hide();
		$("a.show-more-tags").on("click", function showMoreTags(event) {
			event.preventDefault();

			$(this)
				.parents(".tag-list")
				.toggleClass("show-more", true);
			return false;
		});
		function changeOVSideNav(evt) {
			$("#overviewSideNavOptions > label").removeClass("active");
			if ($(this).attr("name") == "ov_ap") {
				$('[data_value="AP"]').show();
				$('[data_value="HL"]').hide();
			} else {
				$('[data_value="HL"]').show();
				$('[data_value="AP"]').hide();
			}
			$(this).addClass("active");
		}
	}
}
export default AnalysisProjections;
