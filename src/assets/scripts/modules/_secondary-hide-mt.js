class SecondaryHide {
	constructor() {
		console.log("v.secondary.1")
	}
	runSecondaryHide() {
		console.log("v.secondary.2")

		var secondaryHide = document.querySelectorAll(".secondary.hide-mt a"),
			c
		for (c = 0; c < secondaryHide.length; ++c) {
			var $cTrue = secondaryHide[c].getAttribute("href") === ""
			if ($cTrue === true) {
				secondaryHide[c].parentElement.style.display = "none"
			}
			//console.log(".secondary.hide-mt a")
		}
	}
}
export default SecondaryHide

/*




*/
