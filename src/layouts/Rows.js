import React, { Component } from "react";
import Top from "../assets/components/Top.js";
import Legend from "../assets/components/Legend.js";
import ExamplePlaceholder from "../assets/examples/Placeholder.js";
import LoremIpsum from "../assets/containers/LoremIpsum.js";

class Rows extends Component {
	render() {
		return (
			<li class="page-section">
				<h3 class="_h3">Visualizations</h3>
				<h1 class="_h1">Row Layout Examples</h1>

				<p class="_p">
					There's only two types of row class names,{" "}
					<code>l-row</code> and <code>l-row header</code>. The
					difference it that the default row adds a{" "}
					<span class="_row">22px</span> space on the left and
					sometimes has a <span class="_col">22px</span> space on the
					right (based on the type of content). As a developer or
					content editor, always use the <code>l-row</code> as the
					other is reserved for special applications.
				</p>
				<div class="_example">
					<p class="_p">
						Good CSS structure might look something like this:
					</p>
					<pre>
						<code class="html">
							&lt;!-- default row --&gt; &lt;div
							class="l-row"&gt;&lt;/div&gt;
						</code>
					</pre>
				</div>

				<h3 class="_h3">Row (Default)</h3>
				<ul class="live-examples">
					<li class="_li">
						<strong>Live example(s)</strong>
					</li>
					<li class="_li">
						Everything below the 'PETROLEUM and OTHER LIQUIDS'
						section of{" "}
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
						<span class="_row-one-one-one"></span>
						<span>px</span> or 100%
					</li>
					<li class="_col _laptop">22px</li>

					<li class="_page _tablet-landscape">12px</li>
					<li class="_page _tablet">12px</li>
					<li class="_page _mobile-landscape">12px</li>
					<li class="_page _mobile">12px</li>
					<li class="_page _laptop">15px</li>
				</ul>
				<div class="_module-wrapper">
					<div class="_module-container">
						<LoremIpsum />
					</div>
				</div>
				<Legend />
				<ExamplePlaceholder />
				<Top />

				<h3 class="_h3">Header Row</h3>
				<ul class="live-examples">
					<li class="_li">
						<strong>Live example(s)</strong>
					</li>
					<li>
						<a href=""></a>
					</li>
					<li>
						The 'PETROLEUM and OTHER LIQUIDS' section of{" "}
						<a href="https://www.eia.gov/petroleum/">
							https://www.eia.gov/petroleum/
						</a>
					</li>
				</ul>
				<Legend />
				<ExamplePlaceholder />
				<Top />
				<div class="_module-wrapper">
					<div class="_module-container">
						<div class="l-row header l-full-width-col">
							<LoremIpsum />
						</div>
					</div>
				</div>
			</li>
		);
	}
}
export default Rows;
