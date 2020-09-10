/* === ON DEMAND SCRIPT === */
let tablecleanUp
var isTableExists = document.getElementsByClassName("table.table")
if (isTableExists.length > 0) {
	if (typeof tablecleanUp == "undefined") {
		import(/* webpackChunkName: "table-cleanup" */ "./modules/_table-cleanup")
			.then(x => {
				tablecleanUp = new x.default()
				setTimeout(() => tablecleanUp.runTableCleanup())
			})
			.catch(() => console.log("table cleanup script didn't load."))
	} else {
		tablecleanUp.runTableCleanup()
	}
}

class TableCleanup {
	//	constructor() {
	//	}
	runTableCleanup() {
		var cell = document.getElementsByTagName("th")
		var i
		for (i = 0; i < cell.length; i++) {
			cell[i].innerHTML = cell[i].innerHTML
				.replace(/<br>/g, " ")
				.replace(/<br \/>/g, " ")
				.replace(/&nbsp;/g, " ")
		}
	}
}
export default TableCleanup
