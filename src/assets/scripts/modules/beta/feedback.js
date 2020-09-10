/*
class Feedback {
	constructor() {
		this.toggleFeedbackButtonLabelShow = document.querySelector(
			".show-feedback"
		);
		this.toggleFeedbackButtonLabelHide = document.querySelector(
			".hide-feedback"
		);
		this.togglePanel = document.getElementById("secondary");

		this.toggleFeedbackButton.addEventListener("click", this.toggleFeedback);

		this.setInitial();
		this.events();
	}
	setInitial() {
		this.toggleFeedbackButtonLabelShow.style.display = "block";
		this.toggleFeedbackButtonLabelHide.style.display = "none";
	}
	events() {
		this.toggleFeedbackButton.addEventListener("click", this.toggleFeedback);
	}

	toggleFeedback() {
		if (this.togglePanel.classList == "feedback-panel--collapsed") {
			this.togglePanel.classList.remove("feedback-panel--collapsed");
			this.togglePanel.classList.add("feedback-panel--expanded");
			this.toggleFeedbackButtonLabelShow.style.display = "none";
			this.toggleFeedbackButtonLabelHide.style.display = "block";
		} else if (this.togglePanel.classList == "feedback-panel--expanded") {
			this.togglePanel.classList.remove("feedback-panel--expanded");
			this.togglePanel.classList.add("feedback-panel--collapsed");
			this.toggleFeedbackButtonLabelShow.style.display = "block";
			this.toggleFeedbackButtonLabelHide.style.display = "none";
		} else {
			this.togglePanel.classList.remove("feedback-panel--expanded");
			this.togglePanel.classList.add("feedback-panel--collapsed");
			this.toggleFeedbackButtonLabelShow.style.display = "block";
			this.toggleFeedbackButtonLabelHide.style.display = "none";
		}
	}
}
export default Feedback;
*/
var callback = function () {
	this.toggleFeedbackCommentsTop = document.querySelector(
		".feedback-comments-top"
	);
	this.toggleFeedbackCommentsBottom = document.querySelector(
		".feedback-comments-bottom"
	);
	this.toggleFeedbackCommentsTop.style.display = "block";

	document.querySelector(".policy").addEventListener("click", e => {
		e.preventDefault();
		if (this.toggleFeedbackCommentsTop.style.display === "block") {
			// if true
			this.toggleFeedbackCommentsBottom.style.display = "block";
			this.toggleFeedbackCommentsTop.style.display = "none";
			this.toggleFeedbackCommentsButton.textContent =
				"Go back to comments for this project.";
		} else if (this.toggleFeedbackCommentsTop.style.display === "none") {
			this.toggleFeedbackCommentsBottom.style.display = "none";
			this.toggleFeedbackCommentsTop.style.display = "block";
			this.toggleFeedbackCommentsButton.textContent =
				"Read our feedback policy.";
		} else {
			// fallback
			this.toggleFeedbackCommentsBottom.style.display = "none";
			this.toggleFeedbackCommentsTop.style.display = "block";
			this.toggleFeedbackCommentsButton.textContent =
				"Read our feedback policy.";
		}
	});


	this.toggleFeedbackButtonLabelShow = document.querySelector(".show-feedback");
	this.toggleFeedbackButtonLabelHide = document.querySelector(".hide-feedback");
	this.toggleFeedbackButtonLabelShow.style.display = "block";
	this.toggleFeedbackButtonLabelHide.style.display = "none";
	this.togglePanel = document.getElementById("secondary");

	document.querySelectorAll(".toggle-feedback-button").forEach(el => {
		el.addEventListener("click", () => {
			if (this.togglePanel.classList == "feedback-panel--collapsed") {
				this.togglePanel.classList.remove("feedback-panel--collapsed");
				this.togglePanel.classList.add("feedback-panel--expanded");
				this.toggleFeedbackButtonLabelShow.style.display = "none";
				this.toggleFeedbackButtonLabelHide.style.display = "block";
			} else if (this.togglePanel.classList == "feedback-panel--expanded") {
				this.togglePanel.classList.remove("feedback-panel--expanded");
				this.togglePanel.classList.add("feedback-panel--collapsed");
				this.toggleFeedbackButtonLabelShow.style.display = "block";
				this.toggleFeedbackButtonLabelHide.style.display = "none";
			} else {
				this.togglePanel.classList.remove("feedback-panel--expanded");
				this.togglePanel.classList.add("feedback-panel--collapsed");
				this.toggleFeedbackButtonLabelShow.style.display = "block";
				this.toggleFeedbackButtonLabelHide.style.display = "none";
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
