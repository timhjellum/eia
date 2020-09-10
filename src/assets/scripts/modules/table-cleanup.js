class TableCleanup {
	constructor() {
		this.tableCleanup = document.querySelector("table")
		if (typeof this.tableCleanup != "undefined" && this.tableCleanup != null) {
			this.runTableCleanup()
		}
		console.log("run Table Cleanup")
	}
	runTableCleanup() {
		var cell = document.getElementsByTagName("th")
		var i
		for (i = 0; i < cell.length; i++) {
			cell[i].innerHTML = cell[i].innerHTML.replace(/<br>/g, " ").replace(/<br \/>/g, " ")
			//.replace(/&nbsp;/g, " ")
		}
	}
}
export default TableCleanup
