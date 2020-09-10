class NumberedLists {
	constructor() {
		console.log("v.numbered-lists.1")
	}
	measureNumberedList() {
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
	}
}
export default NumberedLists
