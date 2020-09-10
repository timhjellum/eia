import React, { Component } from "react"

class CalculatedNumberedListsExample extends Component {
	componentDidMount() {
		let numberedList = document.querySelector("ul.calculated-numbered")
		if (typeof numberedList != "undefined" && numberedList != null) {
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
	render() {
		return (
			<>
				<ul className="calculated-numbered">
					<li>
						<span className="number">1.</span>
						<a href="/">U.S. energy market summary</a>
					</li>
					<li>
						<span className="formats">Available formats:</span>{" "}
						<a href="/" title="Table  1. U.S. energy market summary">
							<span className="ico pdf">
								<span>PDF</span>
							</span>
						</a>
					</li>
				</ul>
				<ul className="calculated-numbered">
					<li>
						<span className="number">2.</span>
						<a href="/">U.S. energy prices </a>
					</li>
					<li>
						<span className="formats">Available formats:</span>{" "}
						<a href="/" title="Table  2. U.S. energy prices ">
							<span className="ico pdf">
								<span>PDF</span>
							</span>
						</a>
					</li>
				</ul>
				<ul className="calculated-numbered">
					<li>
						<span className="number">3a.</span>
						<a href="/">International crude oil and liquid fuels supply, consumption, and inventories</a>
					</li>
					<li>
						<span className="formats">Available formats:</span>{" "}
						<a href="/" title="Table  3a. International crude oil and liquid fuels supply, consumption, and inventories">
							<span className="ico pdf">
								<span>PDF</span>
							</span>
						</a>
					</li>
				</ul>
				<ul className="calculated-numbered">
					<li>
						<span className="number">3b.</span>
						<a href="/">Non-OPEC crude oil and liquid fuels supply</a>
					</li>
					<li>
						<span className="formats">Available formats:</span>{" "}
						<a href="/" title="Table  3b. Non-OPEC crude oil and liquid fuels supply">
							<span className="ico pdf">
								<span>PDF</span>
							</span>
						</a>
					</li>
				</ul>
				<ul className="calculated-numbered">
					<li>
						<span className="number">3c.</span>
						<a href="/">OPEC crude oil and liquid fuels supply</a>
					</li>
					<li>
						<span className="formats">Available formats:</span>{" "}
						<a href="/" title="Table  3c. OPEC crude oil and liquid fuels supply">
							<span className="ico pdf">
								<span>PDF</span>
							</span>
						</a>
					</li>
				</ul>
				<ul className="calculated-numbered">
					<li>
						<span className="number">3d.</span>
						<a href="/">World liquid fuels consumption</a>
					</li>
					<li>
						<span className="formats">Available formats:</span>{" "}
						<a href="/" title="Table  3d. World liquid fuels consumption">
							<span className="ico pdf">
								<span>PDF</span>
							</span>
						</a>
					</li>
				</ul>
				<ul className="calculated-numbered">
					<li>
						<span className="number">4a.</span>
						<a href="/">U.S. crude oil and liquid fuels supply, consumption, and inventories</a>
					</li>
					<li>
						<span className="formats">Available formats:</span>{" "}
						<a href="/" title="Table  4a. U.S. crude oil and liquid fuels supply, consumption, and inventories">
							<span className="ico pdf">
								<span>PDF</span>
							</span>
						</a>
					</li>
				</ul>
				<ul className="calculated-numbered">
					<li>
						<span className="number">4b.</span>
						<a href="/">U.S. petroleum refinery balance</a>
					</li>
					<li>
						<span className="formats">Available formats:</span>{" "}
						<a href="/" title="Table  4b. U.S. petroleum refinery balance">
							<span className="ico pdf">
								<span>PDF</span>
							</span>
						</a>
					</li>
				</ul>
			</>
		)
	}
}

export default CalculatedNumberedListsExample
