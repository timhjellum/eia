import React, { Component } from "react";
import Top from "../assets/components/Top.js";
import Legend from "../assets/components/Legend.js";
import ExamplePlaceholder from "../assets/examples/Placeholder.js";
import LoremIpsum from "../assets/containers/LoremIpsum.js";

class Default extends Component {
	render() {
		return (
			<div className="right-content">
				<h3 className="_h3">Visualizations</h3>
				<h1 className="_h1">Page Layout Examples</h1>
				<p className="_p">Click on a page layout below:</p>
				<a href="#l-full-width-col" className="prototype-link l-full-width-col">
					<div className="prototype-thumb">
						<div className="prototype-column-container w100">
							<div className="prototype-column"></div>
						</div>
					</div>
				</a>
				<a
					href="#l-two-col-left-narrow"
					className="prototype-link l-two-col-left-narrow"
				>
					<div className="prototype-thumb">
						<div className="prototype-column-container w25">
							<div className="prototype-column prototype-secondary"></div>
						</div>
						<div className="prototype-column-container w75">
							<div className="prototype-column"></div>
						</div>
					</div>
				</a>
				<a href="#l-two-col-left" className="prototype-link l-two-col-left">
					<div className="prototype-thumb">
						<div className="prototype-column-container w33">
							<div className="prototype-column prototype-secondary"></div>
						</div>
						<div className="prototype-column-container w66">
							<div className="prototype-column"></div>
						</div>
					</div>
				</a>
				<a
					href="#l-two-col-right-wide"
					className="prototype-link l-two-col-right-wide"
				>
					<div className="prototype-thumb">
						<div className="prototype-column-container w42">
							<div className="prototype-column prototype-secondary"></div>
						</div>
						<div className="prototype-column-container w58">
							<div className="prototype-column"></div>
						</div>
					</div>
				</a>
				<a href="#l-two-col-even" className="prototype-link l-two-col-even">
					<div className="prototype-thumb">
						<div className="prototype-column-container w50">
							<div className="prototype-column"></div>
						</div>
						<div className="prototype-column-container w50">
							<div className="prototype-column"></div>
						</div>
					</div>
				</a>
				<a
					href="#l-two-col-left-wide"
					className="prototype-link l-two-col-left-wide"
				>
					<div className="prototype-thumb">
						<div className="prototype-column-container w58">
							<div className="prototype-column"></div>
						</div>
						<div className="prototype-column-container w42">
							<div className="prototype-column prototype-secondary"></div>
						</div>
					</div>
				</a>
				<a href="#l-two-col-right" className="prototype-link l-two-col-right">
					<div className="prototype-thumb">
						<div className="prototype-column-container w66">
							<div className="prototype-column"></div>
						</div>
						<div className="prototype-column-container w33">
							<div className="prototype-column prototype-secondary"></div>
						</div>
					</div>
				</a>
				<a
					href="#l-two-col-right-narrow"
					className="prototype-link l-two-col-right-narrow"
				>
					<div className="prototype-thumb">
						<div className="prototype-column-container w75">
							<div className="prototype-column"></div>
						</div>
						<div className="prototype-column-container w25">
							<div className="prototype-column prototype-secondary"></div>
						</div>
					</div>
				</a>
				<a href="#l-three-col" className="prototype-link l-three-col">
					<div className="prototype-thumb">
						<div className="prototype-column-container w25">
							<div className="prototype-column prototype-secondary"></div>
						</div>
						<div className="prototype-column-container w50">
							<div className="prototype-column"></div>
						</div>
						<div className="prototype-column-container w25">
							<div className="prototype-column prototype-secondary"></div>
						</div>
					</div>
				</a>
				<a href="#l-three-col-even" className="prototype-link l-three-col-even">
					<div className="prototype-thumb">
						<div className="prototype-column-container w33">
							<div className="prototype-column"></div>
						</div>
						<div className="prototype-column-container w33">
							<div className="prototype-column"></div>
						</div>
						<div className="prototype-column-container w33">
							<div className="prototype-column"></div>
						</div>
					</div>
				</a>
				<a href="#l-four-col-even" className="prototype-link l-four-col-even">
					<div className="prototype-thumb">
						<div className="prototype-column-container w25">
							<div className="prototype-column"></div>
						</div>
						<div className="prototype-column-container w25">
							<div className="prototype-column"></div>
						</div>
						<div className="prototype-column-container w25">
							<div className="prototype-column"></div>
						</div>
						<div className="prototype-column-container w25">
							<div className="prototype-column"></div>
						</div>
					</div>
				</a>
				<a href="#l-five-col-even" className="prototype-link l-five-col-even">
					<div className="prototype-thumb">
						<div className="prototype-column-container w20">
							<div className="prototype-column"></div>
						</div>
						<div className="prototype-column-container w20">
							<div className="prototype-column"></div>
						</div>
						<div className="prototype-column-container w20">
							<div className="prototype-column"></div>
						</div>
						<div className="prototype-column-container w20">
							<div className="prototype-column"></div>
						</div>
						<div className="prototype-column-container w20">
							<div className="prototype-column"></div>
						</div>
					</div>
				</a>
				<a href="#l-six-col-even" className="prototype-link l-six-col-even">
					<div className="prototype-thumb">
						<div className="prototype-column-container w16">
							<div className="prototype-column"></div>
						</div>
						<div className="prototype-column-container w16">
							<div className="prototype-column"></div>
						</div>
						<div className="prototype-column-container w16">
							<div className="prototype-column"></div>
						</div>
						<div className="prototype-column-container w16">
							<div className="prototype-column"></div>
						</div>
						<div className="prototype-column-container w16">
							<div className="prototype-column"></div>
						</div>
						<div className="prototype-column-container w16">
							<div className="prototype-column"></div>
						</div>
					</div>
				</a>
				<p className="_p">
					<code>
						<span className="l-full-width-col">l-full-width-col</span>
						<span className="l-two-col-left-narrow">
							l-row l-two-col-left-narrow
						</span>
						<span className="l-two-col-left" className="prototype-link ">
							l-row l-two-col-left"
						</span>
						<span className="l-two-col-right-wide">
							l-row l-two-col-right-wide
						</span>
						<span className="l-two-col-even">l-row l-two-col-even</span>
						<span className="l-two-col-left-wide">
							l-row l-two-col-left-wide
						</span>
						<span className="l-two-col-right">l-row l-two-col-right</span>
						<span className="l-two-col-right-narrow">
							l-row l-two-col-right-narrow
						</span>
						<span className="l-three-col">l-three-col</span>
						<span className="l-three-col-even">l-row l-three-col-even</span>
						<span className="l-four-col-even">l-row l-four-col-even</span>
						<span className="l-five-col-even">l-row l-five-col-even</span>
						<span className="l-six-col-even">l-row l-six-col-even</span>
					</code>
					.
				</p>
				<ul className="_legend">
					<li>
						<div className="_col _secondary"></div>
						Secondary Column
					</li>
				</ul>

				<h1 className="_h1">Columns</h1>
				<p className="_p">
					Layouts are brokendown into two parts, Rows and Columns.
				</p>
				<p className="_p">
					All content (modules) should live within a column nested in a row in
					order for it react responsively.
				</p>
				<p className="_p">
					There's are many types of column class names to include:{" "}
					<code>l-col</code>,<code>l-full-width-col</code>, <code>l-col</code>,{" "}
					<code>l-col</code>,<code>l-col</code>, <code>l-col</code>,{" "}
					<code>l-col</code>,<code>l-col</code>, and <code>l-col</code>. By
					combining them in logical sequences, the modules will move, adapt,
					expand, contract to the users' page resolution on their media device.
					Columns can be nested as well but the examples below are all of the
					column layouts that fir the needs of the EIA website.
				</p>

				<h2 className="_h2">Single Columns</h2>

				<a name="l-full-width-col"></a>
				<h3 className="_h3">Full-Width Column</h3>
				<div className="prototype-thumb">
					<div className="prototype-column-container w100">
						<div className="prototype-column"></div>
					</div>
				</div>
				<ul className="live-examples">
					<li className="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href=""></a>
					</li>
				</ul>

				<p className="_p">
					The fullpage row is similar to the{" "}
					<code>className="l-row l-header</code> but can be applied to the
					entire section. An example might include a 'dashboard' page with
					multiple rows and columns.
				</p>
				<ul className="_legend-alt">
					<li className="_page _laptop">15px</li>
					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
					<li className="_row _laptop">22px</li>

					<li className="_mod">
						<span className="_col-one-one-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">100%</span>{" "}
						<span className="_desktop">100%</span>
					</li>
					<li className="_col _laptop">22px</li>

					<li className="_page _mobile">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _laptop">15px</li>
				</ul>
				<h2 className="_h2">Two Columns</h2>

				<a name="l-two-col-left-narrow"></a>
				<h3 className="_h3">Two Columns (25% 75%)</h3>

				<div className="prototype-thumb">
					<div className="prototype-column-container w25">
						<div className="prototype-column prototype-secondary"></div>
					</div>
					<div className="prototype-column-container w75">
						<div className="prototype-column"></div>
					</div>
				</div>
				<ul className="live-examples">
					<li className="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href="https://www.eia.gov/nuclear/data.php">
							https://www.eia.gov/nuclear/data.php
						</a>
					</li>
				</ul>

				<ul className="_legend-alt">
					<li className="_page _laptop">15px</li>
					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
					<li className="_row _laptop">22px</li>

					<li className="_mod">
						<span className="_col-two-one-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">25%</span>{" "}
						<span className="_desktop">25%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod">
						<span className="_col-two-one-two"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">75%</span>{" "}
						<span className="_desktop">75%</span>
					</li>
					<li className="_col _laptop">22px</li>

					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
					<li className="_page _laptop">15px</li>
				</ul>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-two-col-left-narrow">
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />

				<a name="l-two-col-left"></a>
				<h3 className="_h3">Two Columns (33% 66%)</h3>
				<p className="_p">Actual: 33.333% | 66.666%</p>
				<div className="prototype-thumb">
					<div className="prototype-column-container w33">
						<div className="prototype-column prototype-secondary"></div>
					</div>
					<div className="prototype-column-container w66">
						<div className="prototype-column"></div>
					</div>
				</div>
				<ul className="live-examples">
					<li className="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href=""></a>
					</li>
					<li>This layout has not been used on any converted pages yet.</li>
				</ul>

				<ul className="_legend-alt">
					<li className="_page _laptop">15px</li>
					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
					<li className="_row _laptop">22px</li>

					<li className="_mod">
						<span className="_col-two-one-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">33.333%</span>
						<span className="_desktop">33.333%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod">
						<span className="_col-two-one-two"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">66.666%</span>
						<span className="_desktop">66.666%</span>
					</li>

					<li className="_col _laptop">22px</li>
					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
					<li className="_page _laptop">15px</li>
				</ul>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />

				<a name="l-two-col-right-wide"></a>
				<h3 className="_h3">Two Columns (42% 58%)</h3>
				<p className="_p">Actual: 41.666% | 58.333%</p>
				<div className="prototype-thumb">
					<div className="prototype-column-container w42">
						<div className="prototype-column prototype-secondary"></div>
					</div>
					<div className="prototype-column-container w58">
						<div className="prototype-column"></div>
					</div>
				</div>
				<ul className="live-examples">
					<li className="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href=""></a>
					</li>
					<li>This layout has not been used on any converted pages yet.</li>
				</ul>

				<ul className="_legend-alt">
					<li className="_page _laptop">15px</li>
					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
					<li className="_row _laptop">22px</li>

					<li className="_mod">
						<span className="_col-two-thr-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">58.333%</span>
						<span className="_desktop">58.333%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod">
						<span className="_col-two-thr-two"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">41.666%</span>
						<span className="_desktop">41.666%</span>
					</li>
					<li className="_col _laptop">22px</li>

					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
					<li className="_page _laptop">15px</li>
				</ul>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />

				<a name="l-two-col-even"></a>
				<h3 className="_h3">Two Columns (50% 50%)</h3>
				<div className="prototype-thumb">
					<div className="prototype-column-container w50">
						<div className="prototype-column"></div>
					</div>
					<div className="prototype-column-container w50">
						<div className="prototype-column"></div>
					</div>
				</div>
				<ul className="live-examples">
					<li className="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href="https://www.eia.gov/petroleum/">
							https://www.eia.gov/petroleum/
						</a>
					</li>
				</ul>

				<ul className="_legend-alt">
					<li className="_page _laptop">15px</li>
					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
					<li className="_row _laptop">22px</li>

					<li className="_mod">
						<span className="_col-two-sev-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">25%</span>{" "}
						<span className="_desktop">50%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod">
						<span className="_col-two-sev-two"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">25%</span>{" "}
						<span className="_desktop">50%</span>
					</li>

					<li className="_col _laptop">22px</li>
					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
					<li className="_page _laptop">15px</li>
				</ul>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />

				<a name="l-two-col-right-narrow"></a>
				<h3 className="_h3">Two Columns (75% 25%)</h3>
				<div className="prototype-thumb">
					<div className="prototype-column-container w75">
						<div className="prototype-column"></div>
					</div>
					<div className="prototype-column-container w25">
						<div className="prototype-column prototype-secondary"></div>
					</div>
				</div>
				<ul className="live-examples">
					<li className="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href="https://www.eia.gov/petroleum/data.php">
							https://www.eia.gov/petroleum/data.php
						</a>
					</li>
				</ul>
				<ul className="_legend-alt">
					<li className="_page _laptop">15px</li>
					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
					<li className="_row _laptop">22px</li>

					<li className="_mod">
						<span className="_col-two-one-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">75%</span>{" "}
						<span className="_desktop">75%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod">
						<span className="_col-two-one-two"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">25%</span>{" "}
						<span className="_desktop">25%</span>
					</li>

					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
					<li className="_page _laptop">15px</li>
				</ul>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-two-col-right-narrow">
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />

				<a name="l-two-col-left-wide"></a>
				<h3 className="_h3">Two Columns (58% 42%)</h3>
				<div className="prototype-thumb">
					<div className="prototype-column-container w58">
						<div className="prototype-column"></div>
					</div>
					<div className="prototype-column-container w42">
						<div className="prototype-column prototype-secondary"></div>
					</div>
				</div>
				<ul className="live-examples">
					<li className="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href="https://www.eia.gov/uranium/production/annual/index.php">
							https://www.eia.gov/uranium/production/annual/index.php
						</a>
					</li>
					<li>
						<a href="https://www.eia.gov/uranium/production/quarterly/index.php">
							https://www.eia.gov/uranium/production/quarterly/index.php
						</a>
					</li>
				</ul>

				<ul className="_legend-alt">
					<li className="_page _laptop">15px</li>
					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
					<li className="_row _laptop">22px</li>

					<li className="_mod">
						<span className="_col-two-one-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">41.666%</span>
						<span className="_desktop">41.666%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod">
						<span className="_col-two-one-two"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">58.333%</span>
						<span className="_desktop">58.333%</span>
					</li>
					<li className="_col _laptop">22px</li>

					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
					<li className="_page _laptop">15px</li>
				</ul>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-two-col-left-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />

				<a name="l-two-col-right"></a>
				<h3 className="_h3">Two Columns (66% 33%)</h3>
				<p className="_p">66.666% | 33.333%</p>
				<div className="prototype-thumb">
					<div className="prototype-column-container w66">
						<div className="prototype-column"></div>
					</div>
					<div className="prototype-column-container w33">
						<div className="prototype-column prototype-secondary"></div>
					</div>
				</div>
				<ul className="live-examples">
					<li className="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						The sub-navigation on
						<a href="https://www.eia.gov/petroleum/">
							https://www.eia.gov/petroleum/
						</a>
						.
					</li>
					<li>This layout has not been used on any converted pages yet.</li>
				</ul>

				<ul className="_legend-alt">
					<li className="_page _laptop">15px</li>
					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
					<li className="_row _laptop">22px</li>

					<li className="_mod">
						<span className="_col-two-one-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">66.666%</span>
						<span className="_desktop">66.666%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod">
						<span className="_col-two-one-two"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">33.333%</span>
						<span className="_desktop">33.333%</span>
					</li>

					<li className="_col _laptop">22px</li>
					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
					<li className="_page _laptop">15px</li>
				</ul>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-two-col-right">
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />
				<a name="l-three-col"></a>
				<h3 className="_h3">Three Columns (25% 50% 25%)</h3>
				<div className="prototype-thumb">
					<div className="prototype-column-container w25">
						<div className="prototype-column prototype-secondary"></div>
					</div>
					<div className="prototype-column-container w50">
						<div className="prototype-column"></div>
					</div>
					<div className="prototype-column-container w25">
						<div className="prototype-column prototype-secondary"></div>
					</div>
				</div>
				<ul className="live-examples">
					<li className="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href=""></a>
					</li>
					<li>This layout has not been used on any converted pages yet.</li>
				</ul>
				<ul className="_legend-alt">
					<li className="_page _laptop">15px</li>
					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
					<li className="_row _laptop">22px</li>

					<li className="_mod">
						<span className="_col-thr-one-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">25%</span>{" "}
						<span className="_desktop">25%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod _mid">
						<span className="_col-thr-one-two"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">25%</span>{" "}
						<span className="_desktop">50%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod">
						<span className="_col-thr-one-thr"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">25%</span>{" "}
						<span className="_desktop">25%</span>
					</li>

					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
					<li className="_page _laptop">15px</li>
				</ul>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-three-col l-reorder">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />

				<a name="l-three-col-even"></a>
				<h3 className="_h3">Three Columns Even (33% 33% 33%)</h3>
				<p className="_p">Actual: 33.333% | 33.333% | 33.333%</p>
				<p className="_p">
					This layout should only be used as a
					<a href="nested-examples.html">nested layouts</a>.
				</p>
				<div className="prototype-thumb">
					<div className="prototype-column-container w33">
						<div className="prototype-column"></div>
					</div>
					<div className="prototype-column-container w33">
						<div className="prototype-column"></div>
					</div>
					<div className="prototype-column-container w33">
						<div className="prototype-column"></div>
					</div>
				</div>

				<ul className="live-examples">
					<li className="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href="https://www.eia.gov/petroleum/">Energy Education</a>
					</li>
				</ul>

				<ul className="_legend-alt">
					<li className="_page _laptop">15px</li>
					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
					<li className="_row _laptop">22px</li>

					<li className="_mod">
						<span className="_col-thr-two-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">25%</span>
						<span className="_desktop">33.333%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod _mid">
						<span className="_col-thr-two-two"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">25%</span>{" "}
						<span className="_desktop">33.333%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod">
						<span className="_col-thr-two-thr"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">25%</span>{" "}
						<span className="_desktop">33.333%</span>
					</li>
					<li className="_col _laptop">22px</li>

					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
					<li className="_page _laptop">15px</li>
				</ul>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-three-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />

				<a name="l-four-col-even"></a>
				<h3 className="_h3">Four Columns Even (25% 25% 25% 25%)</h3>
				<p className="_p">
					This layout should only be used as a
					<a href="nested-examples.html">nested layouts</a>.
				</p>
				<div className="prototype-thumb">
					<div className="prototype-column-container w25">
						<div className="prototype-column"></div>
					</div>
					<div className="prototype-column-container w25">
						<div className="prototype-column"></div>
					</div>
					<div className="prototype-column-container w25">
						<div className="prototype-column"></div>
					</div>
					<div className="prototype-column-container w25">
						<div className="prototype-column"></div>
					</div>
				</div>
				<ul className="live-examples">
					<li className="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href=""></a>
					</li>
					<li>This layout has not been used on any converted pages yet.</li>
				</ul>
				<ul className="_legend-alt">
					<li className="_page _laptop">15px</li>
					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>

					<li className="_row _laptop">22px</li>

					<li className="_mod">
						<span className="_col-fou-one-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">25%</span>{" "}
						<span className="_desktop">25%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod _mid">
						<span className="_col-fou-one-two"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">25%</span>{" "}
						<span className="_desktop">25%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod _mid">
						<span className="_col-fou-one-thr"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">25%</span>{" "}
						<span className="_desktop">25%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod">
						<span className="_col-fou-one-fou"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">100%</span>
						<span className="_tablet">100%</span>
						<span className="_tablet-landscape">100%</span>
						<span className="_laptop">25%</span>{" "}
						<span className="_desktop">25%</span>
					</li>
					<li className="_col _laptop">22px</li>

					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
					<li className="_page _laptop">15px</li>
				</ul>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-four-col-even">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />

				<a name="l-five-col-even"></a>
				<h3 className="_h3">Five Columns Even (20% 20% 20% 20% 20%)</h3>
				<p className="_p">
					This layout should only be used as a
					<a href="nested-examples.html">nested layouts</a>.
				</p>
				<div className="prototype-thumb">
					<div className="prototype-column-container w20">
						<div className="prototype-column"></div>
					</div>
					<div className="prototype-column-container w20">
						<div className="prototype-column"></div>
					</div>
					<div className="prototype-column-container w20">
						<div className="prototype-column"></div>
					</div>
					<div className="prototype-column-container w20">
						<div className="prototype-column"></div>
					</div>
					<div className="prototype-column-container w20">
						<div className="prototype-column"></div>
					</div>
				</div>
				<ul className="live-examples">
					<li className="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href=""></a>
					</li>
					<li>This layout has not been used on any converted pages yet.</li>
				</ul>
				<ul className="_legend-alt">
					<li className="_page _mobile">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _laptop">15px</li>
					<li className="_row _laptop">22px</li>

					<li className="_mod">
						<span className="_col-fiv-one-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">50%</span>
						<span className="_tablet">50%</span>
						<span className="_tablet-landscape">33.333%</span>
						<span className="_laptop">20%</span>
						<span className="_desktop">20%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod">
						<span className="_col-fiv-one-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">50%</span>
						<span className="_tablet">50%</span>
						<span className="_tablet-landscape">33.333%</span>
						<span className="_laptop">20%</span>
						<span className="_desktop">20%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod">
						<span className="_col-fiv-one-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">50%</span>
						<span className="_tablet">50%</span>
						<span className="_tablet-landscape">33.333%</span>
						<span className="_laptop">20%</span>
						<span className="_desktop">20%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod">
						<span className="_col-fiv-one-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">50%</span>
						<span className="_tablet">50%</span>
						<span className="_tablet-landscape">33.333%</span>
						<span className="_laptop">20%</span>
						<span className="_desktop">20%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod">
						<span className="_col-fiv-one-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">50%</span>
						<span className="_tablet">50%</span>
						<span className="_tablet-landscape">33.333%</span>
						<span className="_laptop">20%</span>
						<span className="_desktop">20%</span>
					</li>
					<li className="_col _laptop">22px</li>

					<li className="_page _laptop">15px</li>
					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
				</ul>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-five-col-even">
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

				<a name="l-six-col-even"></a>
				<h3 className="_h3">Six Columns Even (16% 16% 16% 16% 16% 16%)</h3>
				<p className="_p">
					Actual: 16.666% | 16.666% | 16.666% | 16.666% | 16.666% | 16.666%
				</p>
				<p className="_p">
					This layout should only be used as a
					<a href="nested-examples.html">nested layouts</a>.
				</p>

				<div className="prototype-thumb">
					<div className="prototype-column-container w16">
						<div className="prototype-column"></div>
					</div>
					<div className="prototype-column-container w16">
						<div className="prototype-column"></div>
					</div>
					<div className="prototype-column-container w16">
						<div className="prototype-column"></div>
					</div>
					<div className="prototype-column-container w16">
						<div className="prototype-column"></div>
					</div>
					<div className="prototype-column-container w16">
						<div className="prototype-column"></div>
					</div>
					<div className="prototype-column-container w16">
						<div className="prototype-column"></div>
					</div>
				</div>
				<ul className="live-examples">
					<li className="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href="https://www.eia.gov">Footer on every converted page</a>
					</li>
					<li>
						<a href="https://www.eia.gov/petroleum/">
							Interactive Visualizations, Data, & Multimedia
						</a>
					</li>
				</ul>

				<ul className="_legend-alt">
					<li className="_page _mobile">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _laptop">15px</li>
					<li className="_row _laptop">22px</li>

					<li className="_mod">
						<span className="_col-six-one-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">50%</span>
						<span className="_tablet">50%</span>
						<span className="_tablet-landscape">33.333%</span>
						<span className="_laptop">16.6%</span>
						<span className="_desktop">16.6%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod">
						<span className="_col-six-one-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">50%</span>
						<span className="_tablet">50%</span>
						<span className="_tablet-landscape">33.333%</span>
						<span className="_laptop">16.6%</span>
						<span className="_desktop">16.6%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod">
						<span className="_col-six-one-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">50%</span>
						<span className="_tablet">50%</span>
						<span className="_tablet-landscape">33.333%</span>
						<span className="_laptop">16.6%</span>
						<span className="_desktop">16.6%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod">
						<span className="_col-six-one-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">50%</span>
						<span className="_tablet">50%</span>
						<span className="_tablet-landscape">33.333%</span>
						<span className="_laptop">16.6%</span>
						<span className="_desktop">16.6%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod">
						<span className="_col-six-one-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">50%</span>
						<span className="_tablet">50%</span>
						<span className="_tablet-landscape">33.333%</span>
						<span className="_laptop">16.6%</span>
						<span className="_desktop">16.6%</span>
					</li>

					<li className="_col _laptop">4%</li>

					<li className="_mod">
						<span className="_col-six-one-one"></span>
						<span>px</span> or
						<span className="_mobile">100%</span>
						<span className="_mobile-landscape">50%</span>
						<span className="_tablet">50%</span>
						<span className="_tablet-landscape">33.333%</span>
						<span className="_laptop">16.6%</span>
						<span className="_desktop">16.6%</span>
					</li>
					<li className="_col _laptop">22px</li>

					<li className="_page _laptop">15px</li>
					<li className="_page _tablet-landscape">12px</li>
					<li className="_page _tablet">12px</li>
					<li className="_page _mobile-landscape">12px</li>
					<li className="_page _mobile">12px</li>
				</ul>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-six-col-even">
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
			</div>
		);
	}
}
export default Default;
