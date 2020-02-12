import React, { Component } from "react";
import LoremIpsum from "../assets/containers/LoremIpsum.js";
import Top from "../assets/components/Top.js";
import Legend from "../assets/components/Legend.js";

class Nested extends Component {
	render() {
		return (
			<li class="page-section">

						<h3 class="_h3">Visualizations</h3>
				<p class="_p">
					When a column layout is nested within another column layout,
					the nested colums have no right space on the last column.
				</p>
				<h2 class="_h2">Single Columns</h2>
				<p class="_p">
					No left or right space by adding <code>header</code> to the{" "}
					<code>l-row</code> tag.
				</p>

						<h3 class="_h3">l-row header l-full-width-col</h3>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row header l-full-width-col">
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col">
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
								<div class="l-row l-five-col-even">
									<LoremIpsum />
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
					</div>
				</div>
						<Top />
						<h3 class="_h3">l-row l-full-width-col</h3>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-full-width-col">
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col">
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
								<div class="l-row l-five-col-even">
									<LoremIpsum />
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
					</div>
				</div>
						<Top />
						<h3 class="_h3">Two-Columns (50% 50%)</h3>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-two-col-even">
							<div class="l-col">
								<div class="l-row header l-full-width-col">
									<LoremIpsum />
								</div>
								<div class="l-row l-full-width-col">
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col">
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
								<div class="l-row l-five-col-even">
									<LoremIpsum />
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
							<div class="l-col">
								<div class="l-row header l-full-width-col">
									<LoremIpsum />
								</div>
								<div class="l-row l-full-width-col">
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col">
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
								<div class="l-row l-five-col-even">
									<LoremIpsum />
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
					</div>
				</div>
						<Top />
						<h3 class="_h3">Two-Columns Narrow Left (25% 75%)</h3>
				<p class="_p">25% | 75%</p>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-two-col-left-narrow">
							<div class="l-col"></div>
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col">
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
								<div class="l-row l-five-col-even">
									<LoremIpsum />
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
					</div>
				</div>
						<Top />
						<h3 class="_h3">Two-Columns Narrow Right (75% 25%)</h3>
				<p class="_p">Note: notice no right space.</p>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-two-col-right-narrow">
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col">
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
								<div class="l-row l-five-col-even">
									<LoremIpsum />
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
							<div class="l-col"></div>
						</div>
					</div>
				</div>
						<Top />
						<h3 class="_h3">Two-Columns (33% 66%)</h3>
				<p class="_p">33.333% | 66.666%</p>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-two-col-left">
							<LoremIpsum />
							<div class="l-col">
								<div class="l-row l-two-col-even">
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
							</div>
						</div>
					</div>
				</div>
						<Top />
						<h3 class="_h3">Two-Columns (66% 33%)</h3>
				<p class="_p">Actual: 66.666% | 33.333%</p>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-two-col-right">
							<div class="l-col">
								<div class="l-row l-two-col-even">
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
							</div>
							<LoremIpsum />
						</div>
					</div>
				</div>
						<Top />
						<h3 class="_h3">Two-Columns (41% 58%)</h3>
				<p class="_p">Actual: 41.666% | 58.333%</p>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-two-col-right-wide">
							<LoremIpsum />
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
							</div>
						</div>
					</div>
				</div>
						<Top />
						<h3 class="_h3">Two-Columns (58% 41%)</h3>
				<p class="_p">Actual: 58.333% | 41.666%</p>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-two-col-left-wide">
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
							</div>
							<LoremIpsum />
						</div>
					</div>
				</div>
				<h2 class="_h2">3 Equal Width Columns</h2>
						<Top />
						<h3 class="_h3">33.333% | 33.333% | 33.333%</h3>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
						<Top />
						<h3 class="_h3">3 Columns (25% 50% 25%)</h3>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-three-col">
							<LoremIpsum />
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
							</div>
							<div class="l-col">
								<LoremIpsum />
							</div>
						</div>
					</div>
				</div>
				<h2 class="_h2">Four Equal Width Columns</h2>
						<Top />
						<h3 class="_h3">25% | 25% | 25% | 25%</h3>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-four-col-even">
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col">
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
								<div class="l-row l-five-col-even">
									<LoremIpsum />
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
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col">
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
								<div class="l-row l-five-col-even">
									<LoremIpsum />
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
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col">
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
								<div class="l-row l-five-col-even">
									<LoremIpsum />
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
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col">
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
								<div class="l-row l-five-col-even">
									<LoremIpsum />
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
					</div>
				</div>
				<h2 class="_h2">Five Equal Width Columns</h2>
						<Top />
						<h3 class="_h3">20% | 20% | 20% | 20% | 20%</h3>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-five-col-even">
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col">
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
								<div class="l-row l-five-col-even">
									<LoremIpsum />
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
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col">
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
								<div class="l-row l-five-col-even">
									<LoremIpsum />
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
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col">
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
								<div class="l-row l-five-col-even">
									<LoremIpsum />
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
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col">
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
								<div class="l-row l-five-col-even">
									<LoremIpsum />
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
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col">
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
								<div class="l-row l-five-col-even">
									<LoremIpsum />
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
					</div>
				</div>
				<h2 class="_h2">Six Equal Width Columns</h2>
						<Top />
						<h3 class="_h3">
					16.666% | 16.666% | 16.666% | 16.666% | 16.666% | 16.666%
				</h3>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-six-col-even">
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col">
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
								<div class="l-row l-five-col-even">
									<LoremIpsum />
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
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col">
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
								<div class="l-row l-five-col-even">
									<LoremIpsum />
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
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col">
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
								<div class="l-row l-five-col-even">
									<LoremIpsum />
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
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col">
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
								<div class="l-row l-five-col-even">
									<LoremIpsum />
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
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col">
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
								<div class="l-row l-five-col-even">
									<LoremIpsum />
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
							<div class="l-col">
								<div class="l-row l-two-col-even">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-narrow">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-right-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-two-col-left-wide">
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col-even">
									<LoremIpsum />
									<LoremIpsum />
									<LoremIpsum />
								</div>
								<div class="l-row l-three-col">
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
								<div class="l-row l-five-col-even">
									<LoremIpsum />
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
					</div>
				</div>
			</li>
		);
	}
}
export default Nested;
