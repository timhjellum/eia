class UpdatedDataSeries {
	constructor() {
		console.log("v.updated-data-series.1")
	}
	runUpdatedDataSeries() {
		console.log("v.updated-data-series.2")

		var updatedDataSeries = document.querySelectorAll(".updated-data-series a"),
			f
		for (f = 0; f < updatedDataSeries.length; ++f) {
			var $fTrue = updatedDataSeries[f].getAttribute("href") === ""
			if ($fTrue === true) {
				updatedDataSeries[f].parentElement.style.display = "none"
			}
		}
	}
}
export default UpdatedDataSeries

/*


		//import UpdatedDataSeries from "../assets/scripts/modules/_updated-data-series-hide-mt"
		//new UpdatedDataSeries()
		// === ON DEMAND SCRIPT === 
		let updatedDataSeries
		var isUpdatedDataSeries = document.getElementsByClassName("updated-data-series")
		if (isUpdatedDataSeries.length > 0) {
			if (typeof updatedDataSeries == "undefined") {
				import("../assets/scripts/modules/_updated-data-series-hide-mt")
					.then(x => {
						updatedDataSeries = new x.default()
						setTimeout(() => updatedDataSeries.runUpdatedDataSeries())
					})
					.catch(() => console.log("updated-data-series-hide-mt"))
			} else {
				updatedDataSeries.runUpdatedDataSeries()
			}
		}

*/
