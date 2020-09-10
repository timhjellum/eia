class AccordionModule {
	constructor() {
		window.onload = function() {
			setInterval(function() {
				var accItem = document.getElementsByClassName("accordion-item");
				var accHD = document.getElementsByTagName("h3");
				var i = [];
				for (i = 0; i < accHD.length; i++) {
					accHD[i].addEventListener("click", toggleItem, false);
				}
				function toggleItem() {
					var itemClass = this.parentNode.className;
					for (i = 0; i < accItem.length; i++) {
						accItem[i].className = "accordion-item closed";
					}
					if (itemClass == "accordion-item closed") {
						this.parentNode.className = "accordion-item open";
					}
				}
				//console.log("fire")
			}, 5000);
		};
	}
}
export default AccordionModule;
