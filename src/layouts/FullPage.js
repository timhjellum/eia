import React, { Component } from "react";
import Top from "../assets/components/Top.js";
import Legend from "../assets/components/Legend.js";
import ExamplePlaceholder from "../assets/examples/Placeholder.js";
import LoremIpsum from "../assets/containers/LoremIpsum.js";

class FullPage extends Component {
	render() {
		return (
			<li class="page-section">
				<h3 class="_h3">Visualizations</h3>
				<h1 class="_h1">Nested Layouts</h1>
				<h3 class="_h3">Introduction</h3>

				<h2 class="_h2">Single Columns</h2>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-six-col-even">
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

				<h2 class="_h2">Two Columns</h2>

				<h3 class="_h3">Two Columns (Even)</h3>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-six-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
					<div class="l-two-col">
						<div class="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-two-third-col">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-six-col-even">
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

				<h3 class="_h3">Two Column (Narrow Right)</h3>
				<p>75% / 25%</p>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-two-col-right-narrow">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-six-col-even">
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

				<h3 class="_h3">Two Column (One-Third Left)</h3>
				<p>33.333% / 66.666%</p>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-six-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
					<div class="l-two-third-col">
						<div class="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-six-col-even">
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

				<h3 class="_h3">Two Column (Wide Right)</h3>
				<p>58.333% / 41.666%</p>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-two-col-right-wide">
							<LoremIpsum />
						</div>
					</div>
					<div class="l-row l-two-col-even">
						<LoremIpsum />
						<LoremIpsum />
					</div>

					<div class="l-row l-two-col-left">
						<LoremIpsum />
						<LoremIpsum />
					</div>

					<div class="l-row l-two-col-right-wide">
						<LoremIpsum />
						<LoremIpsum />
					</div>
					<div class="l-row l-three-col-even">
						<LoremIpsum />
						<LoremIpsum />
						<LoremIpsum />
					</div>
					<div class="l-row l-four-col-even">
						<LoremIpsum />
						<LoremIpsum />
						<LoremIpsum />
						<LoremIpsum />
					</div>
					<div class="l-row l-six-col-even">
						<LoremIpsum />
						<LoremIpsum />
						<LoremIpsum />
						<LoremIpsum />
						<LoremIpsum />
						<LoremIpsum />
					</div>
					<div class="l-split-narrow-col">
						<div class="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-six-col-even">
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

				<h3 class="_h3">Two Columns (Even) App</h3>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container l-full-width-page">
						<div class="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-six-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
					<div class="l-two-col">
						<div class="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-six-col-even">
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

				<h2 class="_h2">3 Columns</h2>

				<h3 class="_h3">3 Column (Narrow Left and Right)</h3>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-three-col l-reorder">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-six-col-even">
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
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-six-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
					<div class="l-one-third-col">
						<div class="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-six-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-one-third-col">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>

						<div class="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
						<div class="l-row l-six-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
			</li>
		);
	}
}
export default FullPage;
