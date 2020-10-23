class PrimaryAltHide {
	constructor() {
		console.log("v.primary-alt.1")
	}
	runPrimaryAltHide() {
		console.log("v.primary-alt.2")

		var primaryAltHide = document.querySelectorAll(".primary-alt.hide-mt a"),
			b
		for (b = 0; b < primaryAltHide.length; ++b) {
			var $bTrue = primaryAltHide[b].getAttribute("href") === ""
			if ($bTrue === true) {
				primaryAltHide[b].parentElement.style.display = "none"
			}
			//console.log(".primary-alt.hide-mt a")
		}
	}
}
export default PrimaryAltHide

/*




*/
