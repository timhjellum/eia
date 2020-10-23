class PrimaryHide {
	constructor() {
		console.log("v.primary.1")
	}
	runPrimaryHide() {
		console.log("v.primary.2")

		var primaryHide = document.querySelectorAll(".primary a"),
			f
		for (f = 0; f < primaryHide.length; ++f) {
			var $fTrue = primaryHide[f].getAttribute("href") === ""
			if ($fTrue === true) {
				primaryHide[f].parentElement.style.display = "none"
			}
		}
	}
}
export default PrimaryHide

/*




*/
