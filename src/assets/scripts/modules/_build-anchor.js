class BuildAnchor {
	constructor() {
		console.log("v.build-anchor.1")
	}
	runBuildAnchor() {
		const items = document.querySelectorAll(".build-anchor")
		console.log("v.build-anchor.2")
		var i
		for (i = 0; i < items.length; i++) {
			var itemHREF = items[i].querySelector(".xls").href
			console.log(itemHREF)
			var hrefLastNode = itemHREF.substring(itemHREF.lastIndexOf("/") + 1) // +1 removed the /
			var trimFileExtension = hrefLastNode.split(".").slice(0, -4).join(".")
			var trimFileExtension = hrefLastNode.substr(0, hrefLastNode.lastIndexOf("."))
			console.log(hrefLastNode + ", " + trimFileExtension)
			console.log(items)
			var linkNumberText = items[i].querySelector(".number").innerHTML
			var linkLabelText = items[i].querySelector(".report-name").innerHTML
			var itemNumber = items[i].querySelector(".number")
			var itemLabel = items[i].querySelector(".report-name")
			itemNumber.innerHTML = '<a href="epm_table_grapher.php?t=' + trimFileExtension + '">' + linkNumberText + "</a>"
			itemLabel.innerHTML = '<a href="epm_table_grapher.php?t=' + trimFileExtension + '">' + linkLabelText + "</a>"
		}
	}
	/*
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
	*/
}
export default BuildAnchor
