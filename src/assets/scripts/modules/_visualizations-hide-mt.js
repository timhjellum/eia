class Visualizations {
	constructor() {
		console.log("v.visualizations.1")
	}
	runVisualizations() {
		console.log("v.visualizations.2")

		var visualizations = document.querySelectorAll(".visualizations a"),
			h
		for (h = 0; h < visualizations.length; ++h) {
			var $hTrue = visualizations[h].getAttribute("href") === ""
			if ($hTrue === true) {
				visualizations[h].parentElement.parentElement.parentElement.style.display = "none"
			}
			//console.log(".visualizations a")
		}
	}
}
export default Visualizations
