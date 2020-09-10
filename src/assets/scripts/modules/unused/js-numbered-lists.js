class NumberedLists {
	constructor() {
		this.numberedList = document.querySelectorAll("ul.calculated-numbered li:first-child span")
		this.numberedListArray = Array.prototype.slice.call(this.numberedList)
		this.measureNumberedList()
	}
	measureNumberedList() {
		/*
		this.numberedListArray.forEach(MeasureSpan => {
			let theWidth = MeasureSpan.offsetWidth + 10 + "px"
			MeasureSpan.parentElement.style.paddingLeft = theWidth
			//console.log(theWidth);
			// if there's not a nextElementSibling (li) then don't fire this
			let elementExists = MeasureSpan.parentElement.nextElementSibling
			if (elementExists != "undefined" && elementExists != null) {
				MeasureSpan.parentElement.nextElementSibling.style.paddingLeft = theWidth
			}
		})
		*/
	}
}
export default NumberedLists
