class SAS {
	constructor() {
		this.buildAnchor = document.querySelector(".build-anchor")
		if (typeof this.buildAnchor != "undefined" && this.buildAnchor != null) {
			this.runBuildAnchor()
		}
	}
	runBuildAnchor() {
		const items = document.querySelectorAll(".build-anchor")
		var i
		for (i = 0; i < items.length; i++) {
			var itemHREF = items[i].querySelector(".xls").href
			var hrefLastNode = itemHREF.substring(itemHREF.lastIndexOf("/") + 1) // +1 removed the /
			var trimFileExtension = hrefLastNode.split(".").slice(0, -4).join(".")
			var trimFileExtension = hrefLastNode.substr(0, hrefLastNode.lastIndexOf("."))
			var linkNumberText = items[i].querySelector(".number").innerHTML
			var linkLabelText = items[i].querySelector(".report-name").innerHTML
			var itemLabel = items[i].querySelector(".report-name")
			itemLabel.innerHTML = '<a href="epm_table_grapher.php?t=' + trimFileExtension + '">' + linkLabelText + "</a>"
		}
	}
}
export default SAS
