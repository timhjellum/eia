import React, { Component } from "react";
import Top from "../assets/components/Top.js";
import Legend from "../assets/components/Legend.js";
import ExamplePlaceholder from "../assets/examples/Placeholder.js";
import LoremIpsum from "../assets/containers/LoremIpsum.js";

class Default extends Component {
	render() {
		return (
			<div class="right-content">
				<h3 class="_h3">Visualizations</h3>
				<h1 class="_h1">Page Layout Examples</h1>
				<p class="_p">Click on a page layout below:</p>
				<a
					href="#l-full-width-col"
					class="prototype-link l-full-width-col"
				>
					<div class="prototype-thumb">
						<div class="prototype-column-container w100">
							<div class="prototype-column"></div>
						</div>
					</div>
				</a>
				<a
					href="#l-two-col-left-narrow"
					class="prototype-link l-two-col-left-narrow"
				>
					<div class="prototype-thumb">
						<div class="prototype-column-container w25">
							<div class="prototype-column prototype-secondary"></div>
						</div>
						<div class="prototype-column-container w75">
							<div class="prototype-column"></div>
						</div>
					</div>
				</a>
				<a href="#l-two-col-left" class="prototype-link l-two-col-left">
					<div class="prototype-thumb">
						<div class="prototype-column-container w33">
							<div class="prototype-column prototype-secondary"></div>
						</div>
						<div class="prototype-column-container w66">
							<div class="prototype-column"></div>
						</div>
					</div>
				</a>
				<a
					href="#l-two-col-right-wide"
					class="prototype-link l-two-col-right-wide"
				>
					<div class="prototype-thumb">
						<div class="prototype-column-container w42">
							<div class="prototype-column prototype-secondary"></div>
						</div>
						<div class="prototype-column-container w58">
							<div class="prototype-column"></div>
						</div>
					</div>
				</a>
				<a href="#l-two-col-even" class="prototype-link l-two-col-even">
					<div class="prototype-thumb">
						<div class="prototype-column-container w50">
							<div class="prototype-column"></div>
						</div>
						<div class="prototype-column-container w50">
							<div class="prototype-column"></div>
						</div>
					</div>
				</a>
				<a
					href="#l-two-col-left-wide"
					class="prototype-link l-two-col-left-wide"
				>
					<div class="prototype-thumb">
						<div class="prototype-column-container w58">
							<div class="prototype-column"></div>
						</div>
						<div class="prototype-column-container w42">
							<div class="prototype-column prototype-secondary"></div>
						</div>
					</div>
				</a>
				<a
					href="#l-two-col-right"
					class="prototype-link l-two-col-right"
				>
					<div class="prototype-thumb">
						<div class="prototype-column-container w66">
							<div class="prototype-column"></div>
						</div>
						<div class="prototype-column-container w33">
							<div class="prototype-column prototype-secondary"></div>
						</div>
					</div>
				</a>
				<a
					href="#l-two-col-right-narrow"
					class="prototype-link l-two-col-right-narrow"
				>
					<div class="prototype-thumb">
						<div class="prototype-column-container w75">
							<div class="prototype-column"></div>
						</div>
						<div class="prototype-column-container w25">
							<div class="prototype-column prototype-secondary"></div>
						</div>
					</div>
				</a>
				<a href="#l-three-col" class="prototype-link l-three-col">
					<div class="prototype-thumb">
						<div class="prototype-column-container w25">
							<div class="prototype-column prototype-secondary"></div>
						</div>
						<div class="prototype-column-container w50">
							<div class="prototype-column"></div>
						</div>
						<div class="prototype-column-container w25">
							<div class="prototype-column prototype-secondary"></div>
						</div>
					</div>
				</a>
				<a
					href="#l-three-col-even"
					class="prototype-link l-three-col-even"
				>
					<div class="prototype-thumb">
						<div class="prototype-column-container w33">
							<div class="prototype-column"></div>
						</div>
						<div class="prototype-column-container w33">
							<div class="prototype-column"></div>
						</div>
						<div class="prototype-column-container w33">
							<div class="prototype-column"></div>
						</div>
					</div>
				</a>
				<a
					href="#l-four-col-even"
					class="prototype-link l-four-col-even"
				>
					<div class="prototype-thumb">
						<div class="prototype-column-container w25">
							<div class="prototype-column"></div>
						</div>
						<div class="prototype-column-container w25">
							<div class="prototype-column"></div>
						</div>
						<div class="prototype-column-container w25">
							<div class="prototype-column"></div>
						</div>
						<div class="prototype-column-container w25">
							<div class="prototype-column"></div>
						</div>
					</div>
				</a>
				<a
					href="#l-five-col-even"
					class="prototype-link l-five-col-even"
				>
					<div class="prototype-thumb">
						<div class="prototype-column-container w20">
							<div class="prototype-column"></div>
						</div>
						<div class="prototype-column-container w20">
							<div class="prototype-column"></div>
						</div>
						<div class="prototype-column-container w20">
							<div class="prototype-column"></div>
						</div>
						<div class="prototype-column-container w20">
							<div class="prototype-column"></div>
						</div>
						<div class="prototype-column-container w20">
							<div class="prototype-column"></div>
						</div>
					</div>
				</a>
				<a href="#l-six-col-even" class="prototype-link l-six-col-even">
					<div class="prototype-thumb">
						<div class="prototype-column-container w16">
							<div class="prototype-column"></div>
						</div>
						<div class="prototype-column-container w16">
							<div class="prototype-column"></div>
						</div>
						<div class="prototype-column-container w16">
							<div class="prototype-column"></div>
						</div>
						<div class="prototype-column-container w16">
							<div class="prototype-column"></div>
						</div>
						<div class="prototype-column-container w16">
							<div class="prototype-column"></div>
						</div>
						<div class="prototype-column-container w16">
							<div class="prototype-column"></div>
						</div>
					</div>
				</a>
				<p class="_p">
					<code>
						<span class="l-full-width-col">l-full-width-col</span>
						<span class="l-two-col-left-narrow">
							l-row l-two-col-left-narrow
						</span>
						<span class="l-two-col-left" class="prototype-link ">
							l-row l-two-col-left"
						</span>
						<span class="l-two-col-right-wide">
							l-row l-two-col-right-wide
						</span>
						<span class="l-two-col-even">l-row l-two-col-even</span>
						<span class="l-two-col-left-wide">
							l-row l-two-col-left-wide
						</span>
						<span class="l-two-col-right">
							l-row l-two-col-right
						</span>
						<span class="l-two-col-right-narrow">
							l-row l-two-col-right-narrow
						</span>
						<span class="l-three-col">l-three-col</span>
						<span class="l-three-col-even">
							l-row l-three-col-even
						</span>
						<span class="l-four-col-even">
							l-row l-four-col-even
						</span>
						<span class="l-five-col-even">
							l-row l-five-col-even
						</span>
						<span class="l-six-col-even">l-row l-six-col-even</span>
					</code>
					.
				</p>
				<ul class="_legend">
					<li>
						<div class="_col _secondary"></div>
						Secondary Column
					</li>
				</ul>

				<h1 class="_h1">Columns</h1>
				<p class="_p">
					Layouts are brokendown into two parts, Rows and Columns.
				</p>
				<p class="_p">
					All content (modules) should live within a column nested in
					a row in order for it react responsively.
				</p>
				<p class="_p">
					There's are many types of column class names to include:{" "}
					<code>l-col</code>,<code>l-full-width-col</code>,{" "}
					<code>l-col</code>, <code>l-col</code>,<code>l-col</code>,{" "}
					<code>l-col</code>, <code>l-col</code>,<code>l-col</code>,
					and <code>l-col</code>. By combining them in logical
					sequences, the modules will move, adapt, expand, contract to
					the users' page resolution on their media device. Columns
					can be nested as well but the examples below are all of the
					column layouts that fir the needs of the EIA website.
				</p>

				<h2 class="_h2">Single Columns</h2>

				<a name="l-full-width-col"></a>
				<h3 class="_h3">Full-Width Column</h3>
				<div class="prototype-thumb">
					<div class="prototype-column-container w100">
						<div class="prototype-column"></div>
					</div>
				</div>
				<ul class="live-examples">
					<li class="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href=""></a>
					</li>
				</ul>

				<p class="_p">
					The fullpage row is similar to the{" "}
					<code>class="l-row l-header</code> but can be applied to the
					entire section. An example might include a 'dashboard' page
					with multiple rows and columns.
				</p>
				<ul class="_legend-alt">
					<li class="_page _laptop">15px</li>
					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
					<li class="_row _laptop">22px</li>

					<li class="_mod">
						<span class="_col-one-one-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">100%</span>{" "}
						<span class="_desktop">100%</span>
					</li>
					<li class="_col _laptop">22px</li>

					<li class="_page _mobile">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _laptop">15px</li>
				</ul>
				<h2 class="_h2">Two Columns</h2>

				<a name="l-two-col-left-narrow"></a>
				<h3 class="_h3">Two Columns (25% 75%)</h3>

				<div class="prototype-thumb">
					<div class="prototype-column-container w25">
						<div class="prototype-column prototype-secondary"></div>
					</div>
					<div class="prototype-column-container w75">
						<div class="prototype-column"></div>
					</div>
				</div>
				<ul class="live-examples">
					<li class="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href="https://www.eia.gov/nuclear/data.php">
							https://www.eia.gov/nuclear/data.php
						</a>
					</li>
				</ul>

				<ul class="_legend-alt">
					<li class="_page _laptop">15px</li>
					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
					<li class="_row _laptop">22px</li>

					<li class="_mod">
						<span class="_col-two-one-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">25%</span>{" "}
						<span class="_desktop">25%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod">
						<span class="_col-two-one-two"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">75%</span>{" "}
						<span class="_desktop">75%</span>
					</li>
					<li class="_col _laptop">22px</li>

					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
					<li class="_page _laptop">15px</li>
				</ul>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-two-col-left-narrow">
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />

				<a name="l-two-col-left"></a>
				<h3 class="_h3">Two Columns (33% 66%)</h3>
				<p class="_p">Actual: 33.333% | 66.666%</p>
				<div class="prototype-thumb">
					<div class="prototype-column-container w33">
						<div class="prototype-column prototype-secondary"></div>
					</div>
					<div class="prototype-column-container w66">
						<div class="prototype-column"></div>
					</div>
				</div>
				<ul class="live-examples">
					<li class="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href=""></a>
					</li>
					<li>
						This layout has not been used on any converted pages
						yet.
					</li>
				</ul>

				<ul class="_legend-alt">
					<li class="_page _laptop">15px</li>
					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
					<li class="_row _laptop">22px</li>

					<li class="_mod">
						<span class="_col-two-one-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">33.333%</span>
						<span class="_desktop">33.333%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod">
						<span class="_col-two-one-two"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">66.666%</span>
						<span class="_desktop">66.666%</span>
					</li>

					<li class="_col _laptop">22px</li>
					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
					<li class="_page _laptop">15px</li>
				</ul>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-two-col-left">
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />

				<a name="l-two-col-right-wide"></a>
				<h3 class="_h3">Two Columns (42% 58%)</h3>
				<p class="_p">Actual: 41.666% | 58.333%</p>
				<div class="prototype-thumb">
					<div class="prototype-column-container w42">
						<div class="prototype-column prototype-secondary"></div>
					</div>
					<div class="prototype-column-container w58">
						<div class="prototype-column"></div>
					</div>
				</div>
				<ul class="live-examples">
					<li class="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href=""></a>
					</li>
					<li>
						This layout has not been used on any converted pages
						yet.
					</li>
				</ul>

				<ul class="_legend-alt">
					<li class="_page _laptop">15px</li>
					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
					<li class="_row _laptop">22px</li>

					<li class="_mod">
						<span class="_col-two-thr-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">58.333%</span>
						<span class="_desktop">58.333%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod">
						<span class="_col-two-thr-two"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">41.666%</span>
						<span class="_desktop">41.666%</span>
					</li>
					<li class="_col _laptop">22px</li>

					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
					<li class="_page _laptop">15px</li>
				</ul>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-two-col-right-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />

				<a name="l-two-col-even"></a>
				<h3 class="_h3">Two Columns (50% 50%)</h3>
				<div class="prototype-thumb">
					<div class="prototype-column-container w50">
						<div class="prototype-column"></div>
					</div>
					<div class="prototype-column-container w50">
						<div class="prototype-column"></div>
					</div>
				</div>
				<ul class="live-examples">
					<li class="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href="https://www.eia.gov/petroleum/">
							https://www.eia.gov/petroleum/
						</a>
					</li>
				</ul>

				<ul class="_legend-alt">
					<li class="_page _laptop">15px</li>
					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
					<li class="_row _laptop">22px</li>

					<li class="_mod">
						<span class="_col-two-sev-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">25%</span>{" "}
						<span class="_desktop">50%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod">
						<span class="_col-two-sev-two"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">25%</span>{" "}
						<span class="_desktop">50%</span>
					</li>

					<li class="_col _laptop">22px</li>
					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
					<li class="_page _laptop">15px</li>
				</ul>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-two-col-even">
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />

				<a name="l-two-col-right-narrow"></a>
				<h3 class="_h3">Two Columns (75% 25%)</h3>
				<div class="prototype-thumb">
					<div class="prototype-column-container w75">
						<div class="prototype-column"></div>
					</div>
					<div class="prototype-column-container w25">
						<div class="prototype-column prototype-secondary"></div>
					</div>
				</div>
				<ul class="live-examples">
					<li class="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href="https://www.eia.gov/petroleum/data.php">
							https://www.eia.gov/petroleum/data.php
						</a>
					</li>
				</ul>
				<ul class="_legend-alt">
					<li class="_page _laptop">15px</li>
					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
					<li class="_row _laptop">22px</li>

					<li class="_mod">
						<span class="_col-two-one-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">75%</span>{" "}
						<span class="_desktop">75%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod">
						<span class="_col-two-one-two"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">25%</span>{" "}
						<span class="_desktop">25%</span>
					</li>

					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
					<li class="_page _laptop">15px</li>
				</ul>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-two-col-right-narrow">
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />

				<a name="l-two-col-left-wide"></a>
				<h3 class="_h3">Two Columns (58% 42%)</h3>
				<div class="prototype-thumb">
					<div class="prototype-column-container w58">
						<div class="prototype-column"></div>
					</div>
					<div class="prototype-column-container w42">
						<div class="prototype-column prototype-secondary"></div>
					</div>
				</div>
				<ul class="live-examples">
					<li class="_li">
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

				<ul class="_legend-alt">
					<li class="_page _laptop">15px</li>
					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
					<li class="_row _laptop">22px</li>

					<li class="_mod">
						<span class="_col-two-one-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">41.666%</span>
						<span class="_desktop">41.666%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod">
						<span class="_col-two-one-two"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">58.333%</span>
						<span class="_desktop">58.333%</span>
					</li>
					<li class="_col _laptop">22px</li>

					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
					<li class="_page _laptop">15px</li>
				</ul>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-two-col-left-wide">
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />

				<a name="l-two-col-right"></a>
				<h3 class="_h3">Two Columns (66% 33%)</h3>
				<p class="_p">66.666% | 33.333%</p>
				<div class="prototype-thumb">
					<div class="prototype-column-container w66">
						<div class="prototype-column"></div>
					</div>
					<div class="prototype-column-container w33">
						<div class="prototype-column prototype-secondary"></div>
					</div>
				</div>
				<ul class="live-examples">
					<li class="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						The sub-navigation on
						<a href="https://www.eia.gov/petroleum/">
							https://www.eia.gov/petroleum/
						</a>
						.
					</li>
					<li>
						This layout has not been used on any converted pages
						yet.
					</li>
				</ul>

				<ul class="_legend-alt">
					<li class="_page _laptop">15px</li>
					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
					<li class="_row _laptop">22px</li>

					<li class="_mod">
						<span class="_col-two-one-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">66.666%</span>
						<span class="_desktop">66.666%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod">
						<span class="_col-two-one-two"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">33.333%</span>
						<span class="_desktop">33.333%</span>
					</li>

					<li class="_col _laptop">22px</li>
					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
					<li class="_page _laptop">15px</li>
				</ul>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-two-col-right">
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />
				<a name="l-three-col"></a>
				<h3 class="_h3">Three Columns (25% 50% 25%)</h3>
				<div class="prototype-thumb">
					<div class="prototype-column-container w25">
						<div class="prototype-column prototype-secondary"></div>
					</div>
					<div class="prototype-column-container w50">
						<div class="prototype-column"></div>
					</div>
					<div class="prototype-column-container w25">
						<div class="prototype-column prototype-secondary"></div>
					</div>
				</div>
				<ul class="live-examples">
					<li class="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href=""></a>
					</li>
					<li>
						This layout has not been used on any converted pages
						yet.
					</li>
				</ul>
				<ul class="_legend-alt">
					<li class="_page _laptop">15px</li>
					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
					<li class="_row _laptop">22px</li>

					<li class="_mod">
						<span class="_col-thr-one-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">25%</span>{" "}
						<span class="_desktop">25%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod _mid">
						<span class="_col-thr-one-two"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">25%</span>{" "}
						<span class="_desktop">50%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod">
						<span class="_col-thr-one-thr"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">25%</span>{" "}
						<span class="_desktop">25%</span>
					</li>

					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
					<li class="_page _laptop">15px</li>
				</ul>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-three-col l-reorder">
							<LoremIpsum />
							<LoremIpsum />
							<LoremIpsum />
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />

				<a name="l-three-col-even"></a>
				<h3 class="_h3">Three Columns Even (33% 33% 33%)</h3>
				<p class="_p">Actual: 33.333% | 33.333% | 33.333%</p>
				<p class="_p">
					This layout should only be used as a
					<a href="nested-examples.html">nested layouts</a>.
				</p>
				<div class="prototype-thumb">
					<div class="prototype-column-container w33">
						<div class="prototype-column"></div>
					</div>
					<div class="prototype-column-container w33">
						<div class="prototype-column"></div>
					</div>
					<div class="prototype-column-container w33">
						<div class="prototype-column"></div>
					</div>
				</div>

				<ul class="live-examples">
					<li class="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href="https://www.eia.gov/petroleum/">
							Energy Education
						</a>
					</li>
				</ul>

				<ul class="_legend-alt">
					<li class="_page _laptop">15px</li>
					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
					<li class="_row _laptop">22px</li>

					<li class="_mod">
						<span class="_col-thr-two-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">25%</span>
						<span class="_desktop">33.333%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod _mid">
						<span class="_col-thr-two-two"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">25%</span>{" "}
						<span class="_desktop">33.333%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod">
						<span class="_col-thr-two-thr"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">25%</span>{" "}
						<span class="_desktop">33.333%</span>
					</li>
					<li class="_col _laptop">22px</li>

					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
					<li class="_page _laptop">15px</li>
				</ul>
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
				<ExamplePlaceholder />
				<Top />

				<a name="l-four-col-even"></a>
				<h3 class="_h3">Four Columns Even (25% 25% 25% 25%)</h3>
				<p class="_p">
					This layout should only be used as a
					<a href="nested-examples.html">nested layouts</a>.
				</p>
				<div class="prototype-thumb">
					<div class="prototype-column-container w25">
						<div class="prototype-column"></div>
					</div>
					<div class="prototype-column-container w25">
						<div class="prototype-column"></div>
					</div>
					<div class="prototype-column-container w25">
						<div class="prototype-column"></div>
					</div>
					<div class="prototype-column-container w25">
						<div class="prototype-column"></div>
					</div>
				</div>
				<ul class="live-examples">
					<li class="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href=""></a>
					</li>
					<li>
						This layout has not been used on any converted pages
						yet.
					</li>
				</ul>
				<ul class="_legend-alt">
					<li class="_page _laptop">15px</li>
					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>

					<li class="_row _laptop">22px</li>

					<li class="_mod">
						<span class="_col-fou-one-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">25%</span>{" "}
						<span class="_desktop">25%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod _mid">
						<span class="_col-fou-one-two"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">25%</span>{" "}
						<span class="_desktop">25%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod _mid">
						<span class="_col-fou-one-thr"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">25%</span>{" "}
						<span class="_desktop">25%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod">
						<span class="_col-fou-one-fou"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">100%</span>
						<span class="_tablet">100%</span>
						<span class="_tablet-landscape">100%</span>
						<span class="_laptop">25%</span>{" "}
						<span class="_desktop">25%</span>
					</li>
					<li class="_col _laptop">22px</li>

					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
					<li class="_page _laptop">15px</li>
				</ul>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-four-col-even">
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
				<h3 class="_h3">Five Columns Even (20% 20% 20% 20% 20%)</h3>
				<p class="_p">
					This layout should only be used as a
					<a href="nested-examples.html">nested layouts</a>.
				</p>
				<div class="prototype-thumb">
					<div class="prototype-column-container w20">
						<div class="prototype-column"></div>
					</div>
					<div class="prototype-column-container w20">
						<div class="prototype-column"></div>
					</div>
					<div class="prototype-column-container w20">
						<div class="prototype-column"></div>
					</div>
					<div class="prototype-column-container w20">
						<div class="prototype-column"></div>
					</div>
					<div class="prototype-column-container w20">
						<div class="prototype-column"></div>
					</div>
				</div>
				<ul class="live-examples">
					<li class="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href=""></a>
					</li>
					<li>
						This layout has not been used on any converted pages
						yet.
					</li>
				</ul>
				<ul class="_legend-alt">
					<li class="_page _mobile">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _laptop">15px</li>
					<li class="_row _laptop">22px</li>

					<li class="_mod">
						<span class="_col-fiv-one-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">50%</span>
						<span class="_tablet">50%</span>
						<span class="_tablet-landscape">33.333%</span>
						<span class="_laptop">20%</span>
						<span class="_desktop">20%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod">
						<span class="_col-fiv-one-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">50%</span>
						<span class="_tablet">50%</span>
						<span class="_tablet-landscape">33.333%</span>
						<span class="_laptop">20%</span>
						<span class="_desktop">20%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod">
						<span class="_col-fiv-one-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">50%</span>
						<span class="_tablet">50%</span>
						<span class="_tablet-landscape">33.333%</span>
						<span class="_laptop">20%</span>
						<span class="_desktop">20%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod">
						<span class="_col-fiv-one-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">50%</span>
						<span class="_tablet">50%</span>
						<span class="_tablet-landscape">33.333%</span>
						<span class="_laptop">20%</span>
						<span class="_desktop">20%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod">
						<span class="_col-fiv-one-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">50%</span>
						<span class="_tablet">50%</span>
						<span class="_tablet-landscape">33.333%</span>
						<span class="_laptop">20%</span>
						<span class="_desktop">20%</span>
					</li>
					<li class="_col _laptop">22px</li>

					<li class="_page _laptop">15px</li>
					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
				</ul>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-five-col-even">
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
				<h3 class="_h3">Six Columns Even (16% 16% 16% 16% 16% 16%)</h3>
				<p class="_p">
					Actual: 16.666% | 16.666% | 16.666% | 16.666% | 16.666% |
					16.666%
				</p>
				<p class="_p">
					This layout should only be used as a
					<a href="nested-examples.html">nested layouts</a>.
				</p>

				<div class="prototype-thumb">
					<div class="prototype-column-container w16">
						<div class="prototype-column"></div>
					</div>
					<div class="prototype-column-container w16">
						<div class="prototype-column"></div>
					</div>
					<div class="prototype-column-container w16">
						<div class="prototype-column"></div>
					</div>
					<div class="prototype-column-container w16">
						<div class="prototype-column"></div>
					</div>
					<div class="prototype-column-container w16">
						<div class="prototype-column"></div>
					</div>
					<div class="prototype-column-container w16">
						<div class="prototype-column"></div>
					</div>
				</div>
				<ul class="live-examples">
					<li class="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href="https://www.eia.gov">
							Footer on every converted page
						</a>
					</li>
					<li>
						<a href="https://www.eia.gov/petroleum/">
							Interactive Visualizations, Data, & Multimedia
						</a>
					</li>
				</ul>

				<ul class="_legend-alt">
					<li class="_page _mobile">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _laptop">15px</li>
					<li class="_row _laptop">22px</li>

					<li class="_mod">
						<span class="_col-six-one-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">50%</span>
						<span class="_tablet">50%</span>
						<span class="_tablet-landscape">33.333%</span>
						<span class="_laptop">16.6%</span>
						<span class="_desktop">16.6%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod">
						<span class="_col-six-one-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">50%</span>
						<span class="_tablet">50%</span>
						<span class="_tablet-landscape">33.333%</span>
						<span class="_laptop">16.6%</span>
						<span class="_desktop">16.6%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod">
						<span class="_col-six-one-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">50%</span>
						<span class="_tablet">50%</span>
						<span class="_tablet-landscape">33.333%</span>
						<span class="_laptop">16.6%</span>
						<span class="_desktop">16.6%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod">
						<span class="_col-six-one-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">50%</span>
						<span class="_tablet">50%</span>
						<span class="_tablet-landscape">33.333%</span>
						<span class="_laptop">16.6%</span>
						<span class="_desktop">16.6%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod">
						<span class="_col-six-one-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">50%</span>
						<span class="_tablet">50%</span>
						<span class="_tablet-landscape">33.333%</span>
						<span class="_laptop">16.6%</span>
						<span class="_desktop">16.6%</span>
					</li>

					<li class="_col _laptop">4%</li>

					<li class="_mod">
						<span class="_col-six-one-one"></span>
						<span>px</span> or
						<span class="_mobile">100%</span>
						<span class="_mobile-landscape">50%</span>
						<span class="_tablet">50%</span>
						<span class="_tablet-landscape">33.333%</span>
						<span class="_laptop">16.6%</span>
						<span class="_desktop">16.6%</span>
					</li>
					<li class="_col _laptop">22px</li>

					<li class="_page _laptop">15px</li>
					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
				</ul>
				<Legend />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row l-six-col-even">
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
