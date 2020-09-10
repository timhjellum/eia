class NumberedLists {
	constructor() {
		this.numberedList = document.querySelectorAll("ul.calculated-numbered")
		this.numberedListArray = Array.prototype.slice.call(this.numberedList)
		this.measureNumberedList()
	}
	measureNumberedList() {
		//let numberedList = document.querySelector("ul.calculated-numbered")
		//if (typeof numberedList != "undefined" && numberedList != null) {
		const items = document.querySelectorAll(".number")
		var i
		for (i = 0; i < items.length; i++) {
			var newWidth = items[i].offsetWidth + 10 + "px"
			var n
			const newItems = items[i].closest("ul").children
			for (n = 0; n < newItems.length; n++) {
				newItems[n].style.paddingLeft = newWidth
			}
		}
		//}
	}
}
export default NumberedLists
