//import Policy from "./modules/beta/policy";
//new Policy();

//import Feedback from "./modules/beta/feedback";
//new Feedback();

import "./modules/beta/feedback";



/*
var callback = function() {
	let policy;

	this.toggleFeedbackCommentsTop = document.querySelector(
		".feedback-comments-top"
	);
	this.toggleFeedbackCommentsBottom = document.querySelector(
		".feedback-comments-bottom"
	);
	this.toggleFeedbackCommentsTop.style.display = "block";

	document.querySelector(".policy").addEventListener("click", e => {
		e.preventDefault();
		if (typeof policy == "undefined") {
			import("./modules/beta/policy")
				.then(x => {
					policy = new x.default();
					setTimeout(() => policy.togglePolicy(), 50);
				})
				.catch(() => console.log("Policy script didn't load."));
		} else {
			policy.togglePolicy();
		}
	});

	let feedback;
	this.toggleFeedbackButtonLabelShow = document.querySelector(".show-feedback");
	this.toggleFeedbackButtonLabelHide = document.querySelector(".hide-feedback");
	this.toggleFeedbackButtonLabelShow.style.display = "block";
	this.toggleFeedbackButtonLabelHide.style.display = "none";

	document.querySelectorAll(".toggle-feedback-button").forEach(el => {
		el.addEventListener("click", () => {
			if (typeof feedback == "undefined") {
				import("./modules/beta/feedback")
					.then(x => {
						feedback = new x.default();
						setTimeout(() => feedback.toggleFeedback(), 50);
					})
					.catch(() => console.log("Feedback script didn't load."));
			} else {
				feedback.toggleFeedback();
			}
		});
	});
};

if (
	document.readyState === "complete" ||
	(document.readyState !== "loading" && !document.documentElement.doScroll)
) {
	callback();
} else {
	document.addEventListener("DOMContentLoaded", callback);
}
*/
