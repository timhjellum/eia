import $ from "jquery"

class LabeledLists {
	constructor() {
		this.labeledList = document.querySelector(".labeled-list")
		if (typeof this.labeledList != "undefined" && this.labeledList != null) {
			this.addPadding()
		}
	}
	addPadding() {
		var theGreatestWidth = 0 // Stores the greatest width
		$(".label").each(function () {
			// Select the elements you're comparing
			var theLabelWidth = $(this).width() // Grab the current width
			if (theLabelWidth > theGreatestWidth) {
				// If theLabelWidth > the theGreatestWidth so far,
				theGreatestWidth = theLabelWidth //    set theGreatestWidth to theLabelWidth
			}
		})

		$(".labeled-list li").css("padding-left", theGreatestWidth + 20)
	}
}
export default LabeledLists
