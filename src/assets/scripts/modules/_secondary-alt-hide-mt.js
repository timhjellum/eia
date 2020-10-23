class SecondaryAltHide {
	constructor() {
		console.log("v.secondary-alt.1")
	}
	runSecondaryAltHide() {
		console.log("v.secondary-alt.2")

		var secondaryAltHide = document.querySelectorAll(".secondary-alt.hide-mt a"),
			d
		for (d = 0; d < secondaryAltHide.length; ++d) {
			var $dTrue = secondaryAltHide[d].getAttribute("href") === ""
			if ($dTrue === true) {
				secondaryAltHide[d].parentElement.style.display = "none"
			}
			//console.log(".secondary-alt.hide-mt a")
		}
	}
}
export default SecondaryAltHide

/*




*/
