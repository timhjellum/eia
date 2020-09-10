/** === ON DEMAND SCRIPT === **/

let modalEnlargeImage

document.querySelectorAll(".enlarge-image").forEach(el => {
	el.addEventListener("click", e => {
		e.preventDefault()
		if (typeof modalEnlargeImage == "undefined") {
			import(/* webpackChunkName: "global-modal-enlarge-image" */ './modules/modal-enlarge-image').then(x => {
				modalEnlargeImage = new x.default()
				setTimeout(() => modalEnlargeImage.openModalEnlargeImage(), 2000)
			}).catch(() => console.log("There was a problem."))
		} else {
			modalEnlargeImage.openModalEnlargeImage()
		}
	})
})


import $ from "jquery";

class ModalEnlargeImage {
	constructor() {
		console.log("clicked")
		$.fancybox({
			padding: 0,
			closeBtn: true,
			scrolling: false,
			tpl: {
				closeBtn:
					'<a title="Close" class="close-menu" href="javascript:;"><span class="ico close"><span>Close</span></span></a>',
			},
		});
	}
}
export default ModalEnlargeImage;
