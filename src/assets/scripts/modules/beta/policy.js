/*
class Policy {
	constructor() {
		console.log("query policy checking in");
		this.toggleFeedbackCommentsTop = document.querySelector(
			".feedback-comments-top"
		);
		this.toggleFeedbackCommentsBottom = document.querySelector(
			".feedback-comments-bottom"
		);
		this.toggleFeedbackCommentsButton = document.querySelector(".policy");
		this.setInitial()
		this.togglePolicy();
	}
	setInitial() {
		this.toggleFeedbackCommentsTop.style.display = "block";
		this.toggleFeedbackCommentsBottom.style.display = "none";
	}
	togglePolicy() {
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
	}
}
export default Policy;
*/
class Policy {
	constructor() {
		var callback = function () {
			console.log("policy checking in");
			var toggleFeedbackCommentsTop = document.getElementsByClassName(
				"feedback-comments-top"
			)[0];
			var toggleFeedbackCommentsBottom = document.getElementsByClassName(
				"feedback-comments-bottom"
			)[0];
			var toggleFeedbackCommentsButton = document.getElementsByClassName(
				"policy"
			)[0];
			// set initial
			toggleFeedbackCommentsTop.style.display = "block";
			toggleFeedbackCommentsBottom.style.display = "none";

			toggleFeedbackCommentsButton.addEventListener("click", togglePolicy);

			function togglePolicy(e) {
				if (toggleFeedbackCommentsTop.style.display === "block") {
					// if true
					toggleFeedbackCommentsBottom.style.display = "block";
					toggleFeedbackCommentsTop.style.display = "none";
					toggleFeedbackCommentsButton.textContent =
						"Go back to comments for this project.";
				} else if (toggleFeedbackCommentsTop.style.display === "none") {
					toggleFeedbackCommentsBottom.style.display = "none";
					toggleFeedbackCommentsTop.style.display = "block";
					toggleFeedbackCommentsButton.textContent =
						"Read our feedback policy.";
				} else {
					toggleFeedbackCommentsBottom.style.display = "none";
					toggleFeedbackCommentsTop.style.display = "block";
					toggleFeedbackCommentsButton.textContent =
						"Read our feedback policy.";
				}
				e.preventDefault();
			}
		};

		if (
			document.readyState === "complete" ||
			(document.readyState !== "loading" && !document.documentElement.doScroll)
		) {
			callback();
		} else {
			document.addEventListener("DOMContentLoaded", callback);
		}
	}
}
export default Policy;
