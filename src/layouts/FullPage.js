import React, { Component } from "react";
import Top from "../assets/components/Top.js";
import Legend from "../assets/components/Legend.js";
import ExamplePlaceholder from "../assets/examples/Placeholder.js";
import LoremIpsum from "../assets/containers/LoremIpsum.js";

class FullPage extends Component {
	render() {
		return (
			<div className="right-content">
				<h3 className="_h3">Visualizations</h3>
				<h1 className="_h1">Nested Layouts</h1>
				<h3 className="_h3">Introduction</h3>

				<h2 className="_h2">Single Columns</h2>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-six-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>

				<ExamplePlaceholder />
				<Top />

				<h2 className="_h2">Two Columns</h2>

				<h3 className="_h3">Two Columns (Even)</h3>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-six-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
					<div className="l-two-col">
						<div className="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-two-third-col">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-six-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>

				<ExamplePlaceholder />
				<Top />

				<h3 className="_h3">Two Column (Narrow Right)</h3>
				<p>75% / 25%</p>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-two-col-right-narrow">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-six-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>

				<ExamplePlaceholder />
				<Top />

				<h3 className="_h3">Two Column (One-Third Left)</h3>
				<p>33.333% / 66.666%</p>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-six-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
					<div className="l-two-third-col">
						<div className="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-six-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>

				<ExamplePlaceholder />
				<Top />

				<h3 className="_h3">Two Column (Wide Right)</h3>
				<p>58.333% / 41.666%</p>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-two-col-right-wide">
							<LoremIpsum />
						</div>
					</div>
					<div className="l-row l-two-col-even">
						<LoremIpsum />
						<LoremIpsum />
					</div>

					<div className="l-row l-two-col-left">
						<LoremIpsum />
						<LoremIpsum />
					</div>

					<div className="l-row l-two-col-right-wide">
						<LoremIpsum />
						<LoremIpsum />
					</div>
					<div className="l-row l-three-col-even">
						<LoremIpsum />
						<LoremIpsum />
						<LoremIpsum />
					</div>
					<div className="l-row l-four-col-even">
						<LoremIpsum />
						<LoremIpsum />
						<LoremIpsum />
						<LoremIpsum />
					</div>
					<div className="l-row l-six-col-even">
						<LoremIpsum />
						<LoremIpsum />
						<LoremIpsum />
						<LoremIpsum />
						<LoremIpsum />
						<LoremIpsum />
					</div>
					<div className="l-split-narrow-col">
						<div className="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-six-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>

				<ExamplePlaceholder />
				<Top />

				<h3 className="_h3">Two Columns (Even) App</h3>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container l-full-width-page">
						<div className="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-six-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
					<div className="l-two-col">
						<div className="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-six-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>

				<ExamplePlaceholder />
				<Top />

				<h2 className="_h2">3 Columns</h2>

				<h3 className="_h3">3 Column (Narrow Left and Right)</h3>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-three-col l-reorder">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-six-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>

				<ExamplePlaceholder />
				<Top />

				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-six-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
					<div className="l-one-third-col">
						<div className="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-six-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-one-third-col">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div className="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div className="l-row l-six-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default FullPage;
