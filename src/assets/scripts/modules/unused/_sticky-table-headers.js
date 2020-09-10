/** === ON DEMAND SCRIPT === **/

let stickyTableHeaders
var isStickyExisits = document.getElementsByClassName("sticky")
if (isStickyExisits.length > 0) {
	if (typeof stickyTableHeaders == "undefined") {
		import(/* webpackChunkName: "sticky-table-head" */ "./modules/_sticky-table-headers").then(x => {
			stickyTableHeaders = new x.default()
			setTimeout(() => stickyTableHeaders.runStickyTableHeaders())
		})
		//.catch(() => console.log("js-numbered-list script didn't load."));
	} else {
		stickyTableHeaders.runStickyTableHeaders()
	}
}

import stickyHeader from "simple-sticky-table-header"

class StickyTableHeaders {
	constructor() {
		//this.stickyHeader = document.querySelector(".build-anchor")
		//if (typeof this.stickyHeader != "undefined" && this.stickyHeader != null) {
		//  this.runStickyTableHeaders()
		//}
		console.log("v.sticky.1")
	}
	runStickyTableHeaders() {
		const table = document.querySelector(".sticky")
		stickyHeader(table)
	}
}
export default StickyTableHeaders
