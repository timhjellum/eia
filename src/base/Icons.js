import React, { Component } from "react";
import Top from "../assets/components/Top.js";
import ExamplePlaceholder from "../assets/examples/Placeholder.js";
import ExampleTableIcons from "../modules/tables/Icons.js";

class Icons extends Component {
	render() {
		return (
			<li class="section-container">
				<h1 class="_h1">Icons</h1>
				<p class="_p">
					The graphic images below are SVG, an image format for vector
					graphics. These images are not physical images that you link
					to like a typical .gif, .jpg or .png. Vvector-based icons
					look great in a high pixel density world and offers design
					control, and predictability. The examples below are the base
					examples with minimal customizing. They also have a nested
					span and label which is used for accessibility.
				</p>
				<h3 class="_h3">Logos</h3>
				<ol class="_ol">
					<li>
						<h4 class="_h4">Header Logo</h4>
					</li>
					<li class="_header-logo">
						<div class="logo-full-size">
							<span class="logo"></span>
						</div>
					</li>

					<li>
						<h4 class="_h4">Header Logo (no text)</h4>
					</li>
					<li class="_header-logo">
						<div class="logo-shrink">
							<span class="logo"></span>
						</div>
					</li>

					<li>
						<h4 class="_h4">Print Header Logo</h4>
					</li>
					<li class="_print-logo">
						<div class="logo-logo-white-background">
							<span class="print-logo"></span>
						</div>
					</li>

					<li>
						<h4 class="_h4">Logo White Background</h4>
					</li>
					<li class="_print-logo">
						<div class="logo-logo-white-background">
							<span class="logo-white-background"></span>
						</div>
					</li>
				</ol>
				<ExamplePlaceholder />
				<Top />
				<h3 class="_h3">Inline Usage</h3>
				<div className="_source-icon">
					<a>
						<span className="ico pdf inline">
							<span>PDF</span>
						</span>
					</a>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<a>
						<span className="ico xls inline">
							<span>XLS</span>
						</span>
					</a>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<a>
						<span className="ico csv inline">
							<span>CSV</span>
						</span>
					</a>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<a>
						<span className="ico interactive inline">
							<span>INTERACTIVE</span>
						</span>
					</a>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<a>
						<span className="ico ppt inline">
							<span>PPT</span>
						</span>
					</a>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<a>
						<span className="ico html inline">
							<span>HTML</span>
						</span>
					</a>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<a>
						<span className="ico doc inline">
							<span>DOC</span>
						</span>
					</a>
					<ExamplePlaceholder />
				</div>

				<div className="_source-icon">
					<a>
						<span className="ico image inline">
							<span>IMAGE</span>
						</span>
					</a>
					<ExamplePlaceholder />
				</div>

				<div className="_source-icon">
					<a>
						<span className="ico json inline">
							<span>JSON</span>
						</span>
					</a>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<a>
						<span className="ico efile inline">
							<span>eFile</span>
						</span>
					</a>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<a>
						<span className="ico txt inline">
							<span>TXT</span>
						</span>
					</a>
					<ExamplePlaceholder />
				</div>

				<Top />
				<h3 class="_h3">Trailing Icons</h3>
				<div className="_source-icon">
					<a className="ico pdf">
						<span>PDF</span>
					</a>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<a className="ico xls">
						<span>XLS</span>
					</a>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<a className="ico csv">
						<span>CSV</span>
					</a>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<a className="ico interactive">
						<span>INTERACTIVE</span>
					</a>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<a className="ico ppt">
						<span>PPT</span>
					</a>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<a className="ico html">
						<span>HTML</span>
					</a>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<a className="ico doc">
						<span>DOC</span>
					</a>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<a className="ico image">
						<span>IMAGE</span>
					</a>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<a className="ico pedro">
						<span>PEDRO</span>
					</a>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<a className="ico efile">
						<span>eFile</span>
					</a>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<a className="ico txt">
						<span>TXT</span>
					</a>
					<ExamplePlaceholder />
				</div>
				<Top />

				<h3 class="_h3">Icon Only (no description)</h3>
				<div className="_source-icon">
					<span class="ico icon-only pdf">
						<span>PDF</span>
					</span>
					<ExamplePlaceholder />
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico icon-only xls">
						<span>XLS</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico icon-only csv">
						<span>CSV</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico icon-only interactive">
						<span>Interactive</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico icon-only ppt">
						<span>PPT</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico icon-only html">
						<span>HTML</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico icon-only doc">
						<span>DOC</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico icon-only image">
						<span>IMAGE</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico icon-only pedro">
						<span>PEDRO</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico icon-only efile">
						<span>eFile</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico icon-only txt">
						<span>TXT</span>
					</span>
					<ExamplePlaceholder />
				</div>

				<Top />
				<h3 class="_h3">List-item Icons</h3>
				<div className="_source-icon">
					<ul>
						<li class="ico pdf">
							<a href="">Lorem ipsum dolor sit amet</a>
						</li>
						<li class="ico pdf">
							<a href="">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. In pharetra luctus lorem vitae
								pharetra. Morbi blandit, turpis sagittis semper
								volutpat, erat massa gravida dui, ut dignissim
								ligula nibh eu mi.
							</a>
						</li>
					</ul>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<ul>
						<li class="ico xls">
							<a href="">Lorem ipsum dolor sit amet</a>
						</li>
						<li class="ico xls">
							<a href="">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. In pharetra luctus lorem vitae
								pharetra. Morbi blandit, turpis sagittis semper
								volutpat, erat massa gravida dui, ut dignissim
								ligula nibh eu mi.
							</a>
						</li>
					</ul>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<ul>
						<li class="ico csv">
							<a href="">Lorem ipsum dolor sit amet</a>
						</li>
						<li class="ico csv">
							<a href="">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. In pharetra luctus lorem vitae
								pharetra. Morbi blandit, turpis sagittis semper
								volutpat, erat massa gravida dui, ut dignissim
								ligula nibh eu mi.
							</a>
						</li>
					</ul>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<ul>
						<li class="ico interactive">
							<a href="">Lorem ipsum dolor sit amet</a>
						</li>
						<li class="ico interactive">
							<a href="">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. In pharetra luctus lorem vitae
								pharetra. Morbi blandit, turpis sagittis semper
								volutpat, erat massa gravida dui, ut dignissim
								ligula nibh eu mi.
							</a>
						</li>
					</ul>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<ul>
						<li class="ico ppt">
							<a href="">Lorem ipsum dolor sit amet</a>
						</li>
						<li class="ico ppt">
							<a href="">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. In pharetra luctus lorem vitae
								pharetra. Morbi blandit, turpis sagittis semper
								volutpat, erat massa gravida dui, ut dignissim
								ligula nibh eu mi.
							</a>
						</li>
					</ul>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<ul>
						<li class="ico html">
							<a href="">Lorem ipsum dolor sit amet</a>
						</li>
						<li class="ico html">
							<a href="">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. In pharetra luctus lorem vitae
								pharetra. Morbi blandit, turpis sagittis semper
								volutpat, erat massa gravida dui, ut dignissim
								ligula nibh eu mi.
							</a>
						</li>
					</ul>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<ul>
						<li class="ico doc">
							<a href="">Lorem ipsum dolor sit amet</a>
						</li>
						<li class="ico doc">
							<a href="">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. In pharetra luctus lorem vitae
								pharetra. Morbi blandit, turpis sagittis semper
								volutpat, erat massa gravida dui, ut dignissim
								ligula nibh eu mi.
							</a>
						</li>
					</ul>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<ul>
						<li class="ico image">
							<a href="">Lorem ipsum dolor sit amet</a>
						</li>
						<li class="ico image">
							<a href="">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. In pharetra luctus lorem vitae
								pharetra. Morbi blandit, turpis sagittis semper
								volutpat, erat massa gravida dui, ut dignissim
								ligula nibh eu mi.
							</a>
						</li>
					</ul>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<ul>
						<li class="ico pedro">
							<a href="">Lorem ipsum dolor sit amet</a>
						</li>
						<li class="ico pedro">
							<a href="">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. In pharetra luctus lorem vitae
								pharetra. Morbi blandit, turpis sagittis semper
								volutpat, erat massa gravida dui, ut dignissim
								ligula nibh eu mi.
							</a>
						</li>
					</ul>
					<ExamplePlaceholder />
				</div>

				<div className="_source-icon">
					<ul>
						<li class="ico efile">
							<a href="">Lorem ipsum dolor sit amet</a>
						</li>
						<li class="ico efile">
							<a href="">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. In pharetra luctus lorem vitae
								pharetra. Morbi blandit, turpis sagittis semper
								volutpat, erat massa gravida dui, ut dignissim
								ligula nibh eu mi.
							</a>
						</li>
					</ul>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<ul>
						<li class="ico txt">
							<a href="">Lorem ipsum dolor sit amet</a>
						</li>
						<li class="ico txt">
							<a href="">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. In pharetra luctus lorem vitae
								pharetra. Morbi blandit, turpis sagittis semper
								volutpat, erat massa gravida dui, ut dignissim
								ligula nibh eu mi.
							</a>
						</li>
					</ul>
					<ExamplePlaceholder />
				</div>
				<Top />

				<h3 class="_h3">Table Data Icons Example</h3>
				<p class="_p">
					Icons example with a <strong>table data</strong> (
					<code>td</code>).
				</p>
				<ExampleTableIcons />

				<h3 class="_h3">General Icons</h3>
				<div className="_source-icon">
					<span class="ico close-menu">
						<span>CLOSE MENU</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico search-submit">
						<span>SUBMIT</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico analysis">
						<span>analysis</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico cancel">
						<span>cancel</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico column-chart">
						<span>column-chart</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico compare">
						<span>compare</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico d-arrow">
						<span>DOWN ARROW</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico download">
						<span>download</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico edit">
						<span>edit</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico filter">
						<span>filter</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico grab-dot">
						<span>grab dotS</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico grid-column">
						<span>grid column</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico grid-line">
						<span>grid line</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico grid-map">
						<span>grid map</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico grid-parent-column">
						<span>grid parent column</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico grid-parent-line">
						<span>grid parent line</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico grid-parent-map">
						<span>grid-parent-map</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico grid-parent-pin">
						<span>grid-parent-pin</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico grid-pin">
						<span>grid-pin</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico grid-key">
						<span>grid-key</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico help">
						<span>help</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico key">
						<span>key</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico l-arrow">
						<span>l-arrow</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico l-range">
						<span>l-range</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico line-chart">
						<span>line-chart</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico map">
						<span>map</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico pause">
						<span>pause</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico pin">
						<span>pin</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico play">
						<span>play</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico r-arrow">
						<span>r-arrow</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico r-range">
						<span>r-range</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico remove">
						<span>remove</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico reset">
						<span>Reset</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico reset-animation">
						<span>reset-animation</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico scroll-h">
						<span>scroll-h</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico scroll-v">
						<span>scroll-v</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico search-icon">
						<span>Search</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico slide">
						<span>slide</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico sort">
						<span>sort</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico sort-down">
						<span>sort-down</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico sort-up">
						<span>sort-up</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico submit">
						<span>submit</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico checkmark">
						<span>checkmark</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico dash">
						<span>dash</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico dot">
						<span>dot</span>
					</span>
					<ExamplePlaceholder />
				</div>

				<div className="_source-icon">
					<span class="ico add-chart">
						<span>add-chart</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico add-download">
						<span>add-download</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico full-screen">
						<span>full-screen</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico options">
						<span>options</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico table">
						<span>table</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico lock">
						<span>lock</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico unlock">
						<span>unlock</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico submit">
						<span>submit</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico clone">
						<span>clone</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<Top />

				<h3 class="_h3">Analysis Projections Icons</h3>
				<div className="_source-icon">
					<span class="ico d">
						<span>D</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico a">
						<span>A</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico p">
						<span>P</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico da">
						<span>DA</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico ap">
						<span>AP</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico dp">
						<span>DP</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico dap">
						<span>DAP</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<ExamplePlaceholder />
				<Top />
				<h3 class="_h3">Informative Icons</h3>
				<div className="_source-icon">
					<span class="ico printer">
						<span>PRINT</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico info">
						<span>Info</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico tour">
						<span>Tour</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<Top />

				<h3 class="_h3">External Link</h3>
				<div className="_source-icon">
					<span class="external-link">
						<span>External Link</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<Top />

				<h3 class="_h3">Navigational Icons</h3>
				<div className="_source-icon">
					<span class="ico-menu analysis-projections-icon">
						<span>Analysis &amp; Projections</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu a-z-index-icon">
						<span>A-Z Index</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu beta-icon">
						<span>EIA Beta</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu coal-icon">
						<span>Coal</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu upcoming-icon">
						<span>Coming Up</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu consumption-icon">
						<span>Consumption &amp; Efficiency</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu data-tools-model-icon">
						<span>Data Tools &amp; Models</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu electricity-icon">
						<span>Electricity</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu email-complex-icon">
						<span>Email Updates</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu email-simple">
						<span>RSS Feeds</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu energy-explained-icon">
						<span>Energy Explained</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu energy-in-brief-icon">
						<span>Energy in Brief</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu environment-icon">
						<span>Environment</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu disruptions-icon">
						<span>Disruptions</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu faq-icon">
						<span>FAQs</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu featured-reports-icon">
						<span>Featured Reports</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu markets-finance-icon">
						<span>Markets &amp; Finance</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu follow-us-icon">
						<span>Follow us. . .</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu eia-glossary-icon">
						<span>Glossary</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu international-icon">
						<span>International</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu maps-icon">
						<span>Maps</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu natural-gas-icon">
						<span>Natural Gas</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu nuclear-icon">
						<span>Nuclear &amp; Uranium</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu open-data-icon">
						<span>Open Data</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu petroleum-icon">
						<span>Petroleum &amp; Other Liquids</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu press-room-icon">
						<span>Press Room</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu regional-icon">
						<span>regional-icon</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu renewable-icon">
						<span>Renewable &amp; Alternative Fuels</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu reports-icon">
						<span>All Reports &amp; Publications</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu rss-complex-icon">
						<span>RSS Feeds</span>
					</span>
					<ExamplePlaceholder />
				</div>

				<div className="_source-icon">
					<span class="ico-menu survey-forms-icon">
						<span>EIA Survey Forms</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu teachers-icon">
						<span>For Teachers</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu today-in-energy-icon">
						<span>Today in Energy</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu total-energy-icon">
						<span>Total Energy</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu states-icon">
						<span>U.S. States</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico-menu whats-new-icon">
						<span>What's New?</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<Top />

				<h3 class="_h3">Large Secondary Icons</h3>

				<div className="_source-icon">
					<ul class="icon-list">
						<li class="ico rss-complex-icon">
							<a href="/">Get the What's New RSS feed</a>
						</li>
					</ul>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<ul class="icon-list">
						<li class="ico email-simple">
							<a href="/">Sign up for email notifications </a>
						</li>
					</ul>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<ul class="icon-list">
						<li class="ico reports-icon">
							<a href="/">Full list of upcoming reports</a>
						</li>
					</ul>
					<ExamplePlaceholder />
				</div>
				<Top />

				<h3 class="_h3">Consumption Surveys</h3>
				<div className="_source-icon">
					<span class="residential">
						<span>residential</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="commercial">
						<span>commercial</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="industrial">
						<span>industrial</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<Top />

				<h3 class="_h3">Social (Stay Connected...)</h3>
				<div className="_source-icon">
					<span class="ico facebook">
						<span>Facebook</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico twitter">
						<span>Twitter</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico youtube">
						<span>Youtube</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico flickr">
						<span>Flickr</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico linkedin">
						<span>LinkedIn</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico email">
						<span>Email Updates</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span class="ico rss">
						<span>RSS Feeds</span>
					</span>
					<ExamplePlaceholder />
				</div>
			</li>
		);
	}
}

export default Icons;
