class EnergyEducation {
	constructor() {
		console.log("v.energy-education.1")
	}
	runEnergyEducation() {
		console.log("v.energy-education.2")

		var energyEducation = document.querySelectorAll(".energy-education h2 a"),
			g
		for (g = 0; g < energyEducation.length; ++g) {
			var $gTrue = energyEducation[g].getAttribute("href") === ""
			if ($gTrue === true) {
				energyEducation[g].parentElement.parentElement.parentElement.style.display = "none"
			}
		}
	}
}
export default EnergyEducation
