import React, { Component } from "react";

import Top from "../assets/components/Top.js";
import ExamplePlaceholder from "../assets/examples/Placeholder.js";

class FancyBox extends Component {
	render() {
		return (
			<div className="right-content">
				<h1 className="_h1">FancyBox</h1>
				{/*
				<p className="_p">
					fancyBox is a tool that offers a nice and elegant way to add zooming
					functionality for images, html content and multi-media on your
					webpages. It is built on the top of the popular JavaScript framework
					jQuery and is both easy to implement and a snap to customize.
				</p>
				<h3 className="_h3">Image</h3>
				<h4 className="_h4">Prototype</h4>
				<p className="_p">
					<a
						href="https://wwwdev.eia.gov/homepage/images/energy-kids/kids-laptop-halloween.png"
						className="enlarge-image"
					>
						<img
							src="https://wwwdev.eia.gov/homepage/images/energy-kids/kids-laptop-halloween.png"
							alt=""
						/>
					</a>
				</p>
				<ExamplePlaceholder />
				<Top />
				<h3 className="_h3">Image With Caption</h3>
				<h4 className="_h4">Prototype</h4>
				<p className="_p">
					<a
						href="../assets/images/kids-laptop-halloween.png"
						title="Image caption"
						className="enlarge-image"
					>
						<img src="../assets/images/kids-laptop-halloween.png" alt="" />
					</a>
				</p>
				<ExamplePlaceholder />
				<Top />
				<h3 className="_h3">Inline Content</h3>
				<h4 className="_h4">Prototype</h4>
				<p className="_p">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
					aliquam urna, non mattis lectus.{" "}
					<a href="#enlargeContentID" className="enlarge-content">
						Read full document
					</a>
				</p>

				<p className="_p">
					<a href="#enlargeContentID2" className="enlarge-content">
						<img
							src="https://www.eia.gov/homepage/images/energy-kids/kids-tablet-halloween.png"
							style="{{width: 200px;}}"
						/>
					</a>
				</p>

				<div id="enlargeContentID2" style="display: none">
					<img src="https://www.eia.gov/homepage/images/energy-kids/kids-tablet-halloween.png" />
				</div>

				<div id="enlargeContentID" style="{{display: none}}">
					<p className="_p">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
						aliquam urna, non mattis lectus. Aenean bibendum porta lobortis.
						Vestibulum massa leo, sagittis ac venenatis eget, aliquam vitae
						arcu. Suspendisse ligula nunc, finibus ut nulla sit amet, facilisis
						tempor dui. Proin ullamcorper porttitor metus id mollis. In sit amet
						tempus arcu. Praesent vel pulvinar ipsum. Aenean ultricies justo nec
						rutrum congue. Vivamus facilisis dictum mi non interdum. Donec
						pretium hendrerit gravida. Integer odio augue, sodales sed varius
						sagittis, cursus lobortis ex. Pellentesque quis nunc nec ligula
						blandit dignissim ut id massa. Nunc semper libero vel vestibulum
						posuere. Aenean mollis hendrerit diam et viverra.
					</p>
					<p className="_p">
						Praesent molestie turpis felis, a semper diam dignissim quis. Morbi
						volutpat orci aliquet ante tincidunt placerat. Nullam varius
						lobortis dictum. Suspendisse sed molestie lectus. Donec sed ornare
						orci. Suspendisse mattis vehicula quam, ut gravida sem porta ac. Sed
						gravida odio consequat porttitor fermentum. Aenean at neque
						porttitor, maximus nibh eu, congue enim. Integer mollis condimentum
						risus, et venenatis quam semper nec. Nunc non facilisis nisi. Nulla
						aliquet facilisis vestibulum. Vivamus id posuere purus, feugiat
						luctus libero. Phasellus eu nisi diam. Morbi sit amet pulvinar urna,
						vitae semper justo.
					</p>
					<p className="_p">
						Nulla feugiat congue lectus, eget lacinia diam aliquet sed. Donec
						lacus velit, lacinia id cursus vitae, consequat quis velit.
						Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
						posuere cubilia Curae; Suspendisse elit eros, pharetra vitae arcu
						dignissim, suscipit tempus urna. Ut nibh lectus, scelerisque sed
						nibh quis, rhoncus consequat nisl. Vestibulum ante ipsum primis in
						faucibus orci luctus et ultrices posuere cubilia Curae; Fusce
						interdum neque mauris, ac porta erat viverra a. Morbi elementum at
						dui eget fringilla. Praesent dapibus, metus euismod eleifend mollis,
						urna velit consequat turpis, ac egestas lorem mi pulvinar ipsum.
						Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla
						varius sapien mi, vitae tincidunt felis efficitur nec. Sed in mauris
						sed ex interdum placerat ut eget eros. Mauris ut commodo est. Cras
						at rhoncus felis.
					</p>
					<p className="_p">
						Phasellus tempus sapien quis mi fringilla consequat sed ut turpis.
						Duis non cursus eros. Vestibulum nulla magna, blandit ac elit id,
						ornare tincidunt justo. Aliquam vitae tempor orci, vitae venenatis
						augue. Morbi et viverra eros. In vel libero quis elit dictum porta.
						Suspendisse id sollicitudin dolor.
					</p>
				</div>
				<ExamplePlaceholder />
				<Top />
				<h3 className="_h3">Enlarge Highchart</h3>
				<h4 className="_h4">Prototype</h4>
				<div id="chartOuterContainer">
					<div id="chartInnerContainer"></div>
				</div>
				<p className="click-to-enlarge">
					<a className="enlarge-chart" href="#chartInnerContainer">
						<span className="ico magnify">
							<span>Click to enlarge</span>
						</span>
					</a>
				</p>
				{/*
<script type="text/javascript">
$(window).load(function () {
var chart_2011fig3 = new Highcharts.Chart({
chart: {
renderTo: 'chartInnerContainer',
defaultSeriesType: 'column'
},
credits: {
text: 'Source:  U.S. Energy Information Administration: Form EIA-851A, <i>Domestic Uranium Production Report</i> (2005–18). '
},
title: {
text: 'Employment in the U.S. uranium production industry by category, 2005–18',
},
yAxis: { //master axis
min: 0,
max: 1600,
tickInterval: 200,
title: {
text: 'person years',

}
},
xAxis: {
categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],

},
plotOptions: {
series: {
stacking: 'normal',
shadow: false
}
},
series: [{
name: 'exploration',
color: 'rgba(93, 151, 50, 1.0)',
data: [79, 188, 375, 457, 175, 211, 208, 161, 149, 86, 58, 38, 50, 27]
}, {
name: 'mining',
color: 'rgba(0, 150, 215, 1.0)',
data: [149, 121, 378, 558, 441, 400, 462, 462, 392, 246, 251, 255, 136, 110]
}, {
name: 'milling and processing',
color: 'rgba(163, 51, 64, 1.0)',
data: [296, 291, 323, 394, 318, 337, 419, 394, 416, 293, 200, 169, 138, 97]
}, {
name: 'reclamation',
color: 'rgba(0, 57, 83, 1.0)',
data: [124, 155, 155, 154, 162, 125, 102, 179, 199, 161, 116, 98, 100, 138]
//, 93.525, 96.903, 97.287, 96.725, 90.319, 99.132, 100.428, 99.351, 104.390, 95.405, 99.758]
}]
});
});
</script>

				<ExamplePlaceholder />
				<Top />
				<h3 className="_h3">Enlarge SVG</h3>

				<div className="_example">
					<ol>
						<li>
							The SVG should be nested in a div with a unique ID.
							<br />
							Best practices for naming an ID:
							<ul>
								<li>Unique to page</li>
								<li>Descriptive</li>
								<li>camelcase beginning with a non-capitalized letter</li>
								<li>
									Alpha-characters only (no numbers, special characters, or
									spaces)
								</li>
							</ul>
						</li>
						<li>
							The anchor tag should have an <code>href</code> value of the
							target SVG div. For example, <code>href="svgInnerContainer"</code>
						</li>
						<li className="line-through">
							The anchor tag should have an <code>modal-width</code> value of
							the target SVG width. For example, <code>modal-width="400"</code>
						</li>
						<li className="line-through">
							The anchor tag should have an <code>modal-width</code> value of
							the target SVG height. For example,{" "}
							<code>modal-height="300"</code>
						</li>
					</ol>
					<p className="_p">All together, the HTML is as follows:</p>
					<pre>
						<code className="html">
							&lt;div id="svgInnerContainer" style="display: block"&gt;
							&lt;svg&gt;...&lt;/svg&gt; &lt;/div&gt; &lt;p
							className="click-to-enlarge"&gt; &lt;a className="enlarge-svg"
							href="#svgInnerContainer"&gt; &lt;span className="ico magnify"&gt;
							&lt;span&gt;Click to enlarge&lt;/span&gt; &lt;/span&gt; &lt;/a&gt;
							&lt;/p&gt;
						</code>
					</pre>
				</div>

				<h4 className="_h4">Prototype</h4>
				<div style="{{width: 502px; height: 402px; border: 1px dotted grey;}}">
					<div id="svgInnerContainer" style="display: block">
						<div
							className="article-chart"
							id="energy-consumption-by-major-source"
						>
							<div className="svg-container">
								<svg
									id="energy-consumption-by-source"
									xmlns="https://www.w3.org/2000/svg"
									viewBox="0 0 667 480"
								>
									<text
										x="0"
										y="20"
										font-size="24"
										fill="#333333"
										font-weight="bold"
									>
										U.S. energy consumption by energy source, 2018
									</text>

									<text font-size="16" fill="#333333" x="0" y="50">
										<tspan x="0" dy="0">
											total = 101.3 quadrillion
										</tspan>
										<tspan x="0" dy="18">
											British thermal units (Btu)
										</tspan>
									</text>

									<text font-size="16" fill="#333333" x="50%" y="50">
										total = 11.5 quadrillion Btu
									</text>

									<svg
										width="75%"
										height="75%"
										x="42%"
										y="80"
										viewBox="0 0 150 100"
									>
										<g>
											<line
												x1="0"
												y1="49"
												x2="30"
												y2="0"
												stroke="#ccc"
												stroke-width=".5"
											></line>
											<line
												x1="0"
												y1="49"
												x2="30"
												y2="98"
												stroke="#ccc"
												stroke-width=".5"
											></line>
										</g>
										<g>
											<rect
												x="30"
												y="0%"
												width="20"
												height="2%"
												fill="#cc8f96"
											></rect>
											<rect
												x="30"
												y="2%"
												width="20"
												height="6%"
												fill="#ffe381"
											></rect>
											<rect
												x="30"
												y="8%"
												width="20"
												height="21%"
												fill="#a6c68e"
											></rect>
											<rect
												x="30"
												y="29%"
												width="20"
												height="4%"
												fill="#e5e2eb"
											></rect>
											<rect
												x="30"
												y="33%"
												width="20"
												height="21%"
												fill="#c2bbd0"
											></rect>
											<rect
												x="30"
												y="54%"
												width="20"
												height="19%"
												fill="#7d6d9b"
											></rect>
											<rect
												x="30"
												y="73%"
												width="20"
												height="25%"
												fill="#73c5e9"
											></rect>

											<text text-anchor="start" font-size="4" fill="#333333">
												<tspan x="54" y="2%" fill="#333">
													2% - geothermal
												</tspan>
												<tspan x="54" y="7%">
													6% - solar
												</tspan>
												<tspan x="54" y="20.5%">
													21% - wind
												</tspan>
												<tspan x="54" y="33%">
													4% - biomass waste
												</tspan>
												<tspan x="54" y="45.5%">
													21% - biofuels
												</tspan>
												<tspan x="54" y="65.5%">
													19% - wood
												</tspan>
												<tspan x="54" y="87.5%">
													25% - hydroelectric
												</tspan>
											</text>
											<line
												x1="91"
												y1="29%"
												x2="93"
												y2="29%"
												stroke="#333"
												stroke-width=".25"
											></line>
											<line
												x1="93"
												y1="29%"
												x2="93"
												y2="73%"
												stroke="#333"
												stroke-width=".25"
											></line>
											<line
												x1="91"
												y1="73%"
												x2="93"
												y2="73%"
												stroke="#333"
												stroke-width=".25"
											></line>
											<text
												y="45.5%"
												text-anchor="start"
												font-size="4"
												fill="#333333"
											>
												<tspan x="95" dy="0">
													biomasss
												</tspan>
												<tspan x="95" dy="4">
													45%
												</tspan>
											</text>
										</g>
									</svg>

									<svg
										width="50%"
										height="100%"
										x="0"
										y="100"
										viewBox="0 0 70 100"
									>
										<circle
											cx="32"
											cy="32"
											r="15.91549430918954"
											fill="transparent"
											stroke="#bd732a"
											stroke-width="31.5"
											stroke-dasharray="8 92"
											stroke-dashoffset="-5.5"
										></circle>
										<circle
											cx="32"
											cy="32"
											r="15.91549430918954"
											fill="transparent"
											stroke="#707070"
											stroke-width="31.5"
											stroke-dasharray="13 87"
											stroke-dashoffset="-13.5"
										></circle>
										<circle
											cx="32"
											cy="32"
											r="15.91549430918954"
											fill="transparent"
											stroke="#0096d7"
											stroke-width="31.5"
											stroke-dasharray="31 69"
											stroke-dashoffset="-26.5"
										></circle>
										<circle
											cx="32"
											cy="32"
											r="15.91549430918954"
											fill="transparent"
											stroke="#a33340"
											stroke-width="31.5"
											stroke-dasharray="37 65"
											stroke-dashoffset="-57.5"
										></circle>
										<circle
											cx="32"
											cy="32"
											r="15.91549430918954"
											fill="transparent"
											stroke="#ffffff"
											stroke-width="31.5"
											stroke-dasharray="11 89"
											stroke-dashoffset="5.5"
										></circle>
										<circle
											cx="36"
											cy="32"
											r="15.91549430918954"
											fill="transparent"
											stroke="#5d9732"
											stroke-width="31.5"
											stroke-dasharray="11 89"
											stroke-dashoffset="5.5"
										></circle>

										<text
											font-size="3"
											fill="#ffffff"
											font-weight="bold"
											y="29.249134395529"
											dominant-baseline="hanging"
											text-anchor="middle"
										>
											<tspan x="56.68729584925">renewable</tspan>
											<tspan x="56.68729584925" dy="3">
												energy 11%
											</tspan>
										</text>
										<text
											font-size="3"
											fill="#ffffff"
											font-weight="bold"
											y="40.993334045634"
											dominant-baseline="middle"
											text-anchor="middle"
										>
											<tspan x="49.368692059766" dy="0">
												nuclear
											</tspan>
											<tspan x="49.368692059766" dy="3">
												electric
											</tspan>
											<tspan x="49.368692059766" dy="3">
												power
											</tspan>
											<tspan x="49.368692059766" dy="3">
												8%
											</tspan>
										</text>
										<text
											font-size="3"
											fill="#ffffff"
											font-weight="bold"
											y="47.216904260722"
											dominant-baseline="hanging"
											text-anchor="middle"
										>
											<tspan x="38.489356881874">coal</tspan>
											<tspan x="38.489356881874" dy="4">
												13%
											</tspan>
										</text>
										<text
											font-size="3"
											fill="#ffffff"
											font-weight="bold"
											y="39.708058785627"
											dominant-baseline="middle"
											text-anchor="middle"
										>
											<tspan x="13.597559719079">natural</tspan>
											<tspan x="13.597559719079" dy="3">
												gas
											</tspan>
											<tspan x="13.597559719079" dy="4">
												31%
											</tspan>
										</text>
										<text
											font-size="3"
											fill="#ffffff"
											font-weight="bold"
											y="16.007895034148"
											dominant-baseline="baseline"
											text-anchor="middle"
										>
											<tspan x="32.659625940641" dy="-5">
												petroleum
											</tspan>
											<tspan x="32.659625940641" dy="4">
												36%
											</tspan>
										</text>
									</svg>

									<svg viewBox="0 0 93.83 75.33" width="6%" y="47%" x="6">
										<g id="logo-mark">
											<g id="eia">
												<path
													d="M16.63,42.39a6.19,6.19,0,0,1,4.88-2.09,6.37,6.37,0,0,1,4.77,2,7.39,7.39,0,0,1,1.91,5.36v0.49H14.58a9.25,9.25,0,0,1,2.05-5.74M32.18,59.53a18.46,18.46,0,0,1-3.45,3,8.1,8.1,0,0,1-4.19,1,8.45,8.45,0,0,1-5-1.74A10.77,10.77,0,0,1,15.84,57a19.05,19.05,0,0,1-1.26-7.25V49.35H33V48.83a9.26,9.26,0,0,0-3.24-7.06,10.9,10.9,0,0,0-7.58-3,11.67,11.67,0,0,0-8.91,3.93,13.7,13.7,0,0,0-3.64,9.68,12.58,12.58,0,0,0,3.81,9.42,13.31,13.31,0,0,0,9.67,3.7,12,12,0,0,0,5.67-1.25,14.94,14.94,0,0,0,4.64-4.18v0Z"
													fill="#333"
												></path>
												<path
													d="M66.39,59.62a5.46,5.46,0,0,1-2.23,2.28,5.89,5.89,0,0,1-3,.92,3.4,3.4,0,0,1-2.7-1.37,5,5,0,0,1-1.13-3.26,5.17,5.17,0,0,1,1.06-3.43q1.06-1.27,4.85-2.56,2.05-.7,3.13-1.15v8.56Zm8.36,1c-0.32,1-1.34,2.2-2.1,2.17A1.13,1.13,0,0,1,71.52,62a10.83,10.83,0,0,1-.3-3.11V48.07A9.23,9.23,0,0,0,56.1,40.93a9.76,9.76,0,0,0-3.27,5.45l1.24,0.52a7.73,7.73,0,0,1,2.54-3.95,6.43,6.43,0,0,1,4.14-1.46,5.27,5.27,0,0,1,4.1,1.69,6.33,6.33,0,0,1,1.53,4.44v1.88a23.76,23.76,0,0,1-4.73,1.67q-5.6,1.57-7.43,3.29a5.74,5.74,0,0,0-1.82,4.36,6.24,6.24,0,0,0,2.12,4.75,7.22,7.22,0,0,0,5.08,2A7.37,7.37,0,0,0,63,64.77a13.35,13.35,0,0,0,3.34-2.82q1.18,3.59,4.28,3.58a4.5,4.5,0,0,0,3.43-1.39A5.64,5.64,0,0,0,75.5,61Z"
													fill="#333"
												></path>
												<path
													d="M46.2,62.85c-0.61-.47-0.91-1.39-0.91-2.79V38.68H43.73l0,0c-1.49.68-8,.86-8,0.86v1.18c2.11,0,3.44.25,4,.73s0.8,1.5.8,3V60.06q0,2.13-.87,2.81c-0.58.45-1.88,0.68-3.9,0.68v1.18H49.5V63.55a5.67,5.67,0,0,1-3.3-.7"
													fill="#333"
												></path>
												<path
													d="M45.1,32.78a2.71,2.71,0,1,1-2.71-2.71,2.71,2.71,0,0,1,2.71,2.71"
													fill="#333"
												></path>
											</g>
											<path
												d="M17.92,34.62c0.11-.12.26-0.27,0.46-0.47A104.56,104.56,0,0,1,42.47,16.59a56,56,0,0,1,14.26-5.23c10.1-2.08,16.36.35,18.25,1.93a2.27,2.27,0,0,1,.63.74,59.72,59.72,0,0,0-18.3,1C45.8,17.45,34.15,22.81,22.7,31c-1.48,1.06-2.95,2.17-4.36,3.29a5.12,5.12,0,0,1-.43.31"
												fill="#5d9732"
											></path>
											<path
												d="M15.44,35.24c0.11-.19.28-0.46,0.55-0.86,2.48-3.58,6.32-8.79,9.33-12.34,7.15-8.45,13.92-10.88,17.32-11.58a13.7,13.7,0,0,1,3.47-.31,2.34,2.34,0,0,1-.3.36A92.51,92.51,0,0,0,23.63,26.39c-2.14,2.12-4.14,4.37-5.75,6.18-0.63.71-1.21,1.37-1.73,1.94-0.33.35-.55,0.58-0.71,0.73"
												fill="#ffc702"
											></path>
											<path
												d="M79.9,54.31a6,6,0,0,1,.28-1.38c2.14-6.48,2-12.49-.51-17.39C74.53,25.36,62,21.22,46.21,24.48a80,80,0,0,0-22.62,8.75q-0.66.36-1.29,0.75c-0.41.24-.7,0.4-0.9,0.5,0.18-.15.44-0.35,0.81-0.61A79.72,79.72,0,0,1,29,29.58a73.75,73.75,0,0,1,20.61-7.83c15.92-3.28,28.76.51,33.5,9.9a19.07,19.07,0,0,1,1.79,10.71,21.33,21.33,0,0,1-5,11.95"
												fill="#0096d7"
											></path>
										</g>
									</svg>
									<text
										y="92.8%"
										text-anchor="start"
										font-size="14"
										fill="#333333"
									>
										<tspan x="8%" dy="0">
											Note: Sum of components may not equal 100% because of
											independent rounding.
										</tspan>
										<tspan x="8%" dy="3.25%">
											Source: U.S. Energy Information Administration,{" "}
											<tspan font-style="italic">Monthly Energy Review</tspan>,
											Table 1.3 and 10.1,
										</tspan>
										<tspan x="8%" dy="3.25%">
											April 2019, preliminary data
										</tspan>
									</text>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<p className="click-to-enlarge">
					<a className="enlarge-svg" href="#svgInnerContainer">
*id="svgOne" modal-width="1000" modal-height="800">
						<span className="ico magnify">
							<span>Click to enlarge</span>
						</span>
					</a>
				</p>
				<ExamplePlaceholder />
				<Top />
				<h3 className="_h3">iFrame</h3>
				<p className="_p">
					On screen resolutions from 340 - @990 or less, the modal opens 100% -
					40px (to allow for the scrollbar. On screen resolutions 990px or
					greater (laptop +) the modal opens to 950px (990px - 40px). The height
					of the iframe is pass from the height of the viewport to allow for the
					correct positioning of the anchor.
				</p>
				<h4 className="_h4">Prototype</h4>
				<a href="iframe.html" className="iframe">
					Open iFrame
				</a>
				<ExamplePlaceholder />
				<Top />
				<h3 className="_h3">Scroll-to iFrame</h3>
				<p className="_p">
					<strong>Use when:</strong> iFrame content has page anchors.
				</p>
				<p className="_p">
					On screen resolutions from 340 - @990 or less, the modal opens 100% -
					40px (to allow for the scrollbar. On screen resolutions 990px or
					greater (laptop +) the modal opens to 950px (990px - 40px). The height
					of the iframe is pass from the height of the viewport to allow for the
					correct positioning of the anchor.
				</p>
				<h4 className="_h4">Prototype</h4>
				<a href="iframe.html#heading-five" className="scroll-to-iframe">
					Open Scroll-to iFrame
				</a>
				<ExamplePlaceholder />
				<Top />
				<h3 className="_h3">Inline Content Width / Height</h3>
				<h4 className="_h4">Prototype</h4>
				<a
					data-width="660"
					data-height="700"
					href="#inlineContentID"
					className="inline-content"
				>
					<img src="https://www.eia.gov/homepage/images/energy-kids/kids-tablet-halloween.png" />
				</a>
				<div id="inlineContentID" style="display: none">
					<img src="https://www.eia.gov/homepage/images/energy-kids/kids-tablet-halloween.png" />
				</div>

				<ExamplePlaceholder />
				<Top />
					*/}
			</div>
		);
	}
}
export default FancyBox;
