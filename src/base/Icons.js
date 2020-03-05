import React, { Component } from "react";
import Top from "../assets/components/Top.js";
import IconicListItems from "../modules/lists/IconicListItems";
import IconicTableCells from "../modules/tables/IconicTableCells";

import ExamplePlaceholder from "../assets/examples/Placeholder.js";
import SpanIcoPDF from "../assets/examples/SpanIcoPDF";
import AnchorIcoPDF from "../assets/examples/AnchorIcoPDF";
import InlineIcoPDF from "../assets/examples/InlineIcoPDF";
import IconOnlyIcoPDF from "../assets/examples/IconOnlyIcoPDF";

import SpanIcoXLS from "../assets/examples/SpanIcoXLS";
import AnchorIcoXLS from "../assets/examples/AnchorIcoXLS";
import InlineIcoXLS from "../assets/examples/InlineIcoXLS";
import IconOnlyIcoXLS from "../assets/examples/IconOnlyIcoXLS";
import SpanIcoCSV from "../assets/examples/SpanIcoCSV";
import AnchorIcoCSV from "../assets/examples/AnchorIcoCSV";
import InlineIcoCSV from "../assets/examples/InlineIcoCSV";
import IconOnlyIcoCSV from "../assets/examples/IconOnlyIcoCSV";
import SpanIcoDOC from "../assets/examples/SpanIcoDOC";
import AnchorIcoDOC from "../assets/examples/AnchorIcoDOC";
import InlineIcoDOC from "../assets/examples/InlineIcoDOC";
import IconOnlyIcoDOC from "../assets/examples/IconOnlyIcoDOC";
import SpanIcoPPT from "../assets/examples/SpanIcoPPT";
import AnchorIcoPPT from "../assets/examples/AnchorIcoPPT";
import InlineIcoPPT from "../assets/examples/InlineIcoPPT";
import IconOnlyIcoPPT from "../assets/examples/IconOnlyIcoPPT";
import SpanIcoInteractive from "../assets/examples/SpanIcoInteractive";
import AnchorIcoInteractive from "../assets/examples/AnchorIcoInteractive";
import InlineIcoInteractive from "../assets/examples/InlineIcoInteractive";
import IconOnlyIcoInteractive from "../assets/examples/IconOnlyIcoInteractive";
import SpanIcoHTML from "../assets/examples/SpanIcoHTML";
import AnchorIcoHTML from "../assets/examples/AnchorIcoHTML";
import InlineIcoHTML from "../assets/examples/InlineIcoHTML";
import IconOnlyIcoHTML from "../assets/examples/IconOnlyIcoHTML";
import SpanIcoTXT from "../assets/examples/SpanIcoTXT";
import AnchorIcoTXT from "../assets/examples/AnchorIcoTXT";
import InlineIcoTXT from "../assets/examples/InlineIcoTXT";
import IconOnlyIcoTXT from "../assets/examples/IconOnlyIcoTXT";
import SpanIcoImage from "../assets/examples/SpanIcoImage";
import AnchorIcoImage from "../assets/examples/AnchorIcoImage";
import InlineIcoImage from "../assets/examples/InlineIcoImage";
import IconOnlyIcoImage from "../assets/examples/IconOnlyIcoImage";
import SpanIcoJSON from "../assets/examples/SpanIcoJSON";
import AnchorIcoJSON from "../assets/examples/AnchorIcoJSON";
import InlineIcoJSON from "../assets/examples/InlineIcoJSON";
import IconOnlyIcoJSON from "../assets/examples/IconOnlyIcoJSON";
import SpanIcoEFILE from "../assets/examples/SpanIcoEFILE";
import AnchorIcoEFILE from "../assets/examples/AnchorIcoEFILE";
import InlineIcoEFILE from "../assets/examples/InlineIcoEFILE";
import IconOnlyIcoEFILE from "../assets/examples/IconOnlyIcoEFILE";
import SpanIcoPEDRO from "../assets/examples/SpanIcoPEDRO";
import AnchorIcoPEDRO from "../assets/examples/AnchorIcoPEDRO";
import InlineIcoPEDRO from "../assets/examples/InlineIcoPEDRO";
import IconOnlyIcoPEDRO from "../assets/examples/IconOnlyIcoPEDRO";
import IconLargePEDRO from "../assets/examples/IconLargePEDRO";
import IconLargeRadio from "../assets/examples/IconLargeRadio";
import IconLargeRSS from "../assets/examples/IconLargeRSS";
import IconLargeEmail from "../assets/examples/IconLargeEmail";
class Icons extends Component {
	render() {
		return (
			<div className="right-content">
				<h1 className="_h1">Icons</h1>
				<p className="_p">
					The graphic images below are SVG, an image format for vector graphics.
					These images are not physical images that you link to like a typical
					.gif, .jpg or .png. Vvector-based icons look great in a high pixel
					density world and offers design control, and predictability. The
					examples below are the base examples with minimal customizing. They
					also have a nested span and label which is used for accessibility.
				</p>
				<h3 className="_h3">Logos</h3>
				<ol className="_ol">
					<li>
						<h4 className="_h4">Header Logo</h4>
					</li>
					<li className="_header-logo">
						<div className="logo-full-size">
							<span className="logo"></span>
						</div>
					</li>

					<li>
						<h4 className="_h4">Header Logo (no text)</h4>
					</li>
					<li className="_header-logo">
						<div className="logo-shrink">
							<span className="logo"></span>
						</div>
					</li>

					<li>
						<h4 className="_h4">Print Header Logo</h4>
					</li>
					<li className="_print-logo">
						<div className="logo-logo-white-background">
							<span className="print-logo"></span>
						</div>
					</li>

					<li>
						<h4 className="_h4">Logo White Background</h4>
					</li>
					<li className="_print-logo">
						<div className="logo-logo-white-background">
							<span className="logo-white-background"></span>
						</div>
					</li>
				</ol>

				<Top />
				<h3 className="_h3">Icon with Description</h3>
				<p></p>

				<SpanIcoPDF />

				<div className="_source-icon">
					<span className="formats">Available formats:</span>{" "}
					<a>
						<span className="ico xls">
							<span>XLS</span>
						</span>
					</a>
					<SpanIcoXLS />
				</div>
				<div className="_source-icon">
					<span className="formats">Available formats:</span>{" "}
					<a>
						<span className="ico csv">
							<span>CSV</span>
						</span>
					</a>
					<SpanIcoCSV />
				</div>
				<div className="_source-icon">
					<span className="formats">Available formats:</span>{" "}
					<a>
						<span className="ico interactive">
							<span>Interactive</span>
						</span>
					</a>
					<SpanIcoInteractive />
				</div>
				<div className="_source-icon">
					<span className="formats">Available formats:</span>{" "}
					<a>
						<span className="ico ppt">
							<span>PPT</span>
						</span>
					</a>
					<SpanIcoPPT />
				</div>
				<div className="_source-icon">
					<span className="formats">Available formats:</span>{" "}
					<a>
						<span className="ico html">
							<span>HTML</span>
						</span>
					</a>
					<SpanIcoHTML />
				</div>
				<div className="_source-icon">
					<span className="formats">Available formats:</span>{" "}
					<a>
						<span className="ico doc">
							<span>DOC</span>
						</span>
					</a>
					<SpanIcoDOC />
				</div>

				<div className="_source-icon">
					<span className="formats">Available formats:</span>{" "}
					<a>
						<span className="ico image">
							<span>IMAGE</span>
						</span>
					</a>
					<SpanIcoImage />
				</div>

				<div className="_source-icon">
					<span className="formats">Available formats:</span>{" "}
					<a>
						<span className="ico json">
							<span>JSON</span>
						</span>
					</a>
					<SpanIcoJSON />
				</div>
				<div className="_source-icon">
					<span className="formats">Available formats:</span>{" "}
					<a>
						<span className="ico efile">
							<span>eFile</span>
						</span>
					</a>
					<SpanIcoEFILE />
				</div>
				<div className="_source-icon">
					<span className="formats">Available formats:</span>{" "}
					<a>
						<span className="ico txt">
							<span>TXT</span>
						</span>
					</a>
					<SpanIcoTXT />
				</div>
				<div className="_source-icon">
					<span className="formats">Available formats:</span>{" "}
					<a>
						<span className="ico pedro">
							<span>PEDRO</span>
						</span>
					</a>
					<SpanIcoPEDRO />
				</div>
				<Top />
				<h3 className="_h3">Inline Usage</h3>
				<div className="_source-icon">
					Lorem ipsum dolor sit amet (
					<a>
						<span className="ico pdf inline">
							<span>PDF</span>
						</span>
					</a>
					) consectetur adipiscing elit
					<InlineIcoPDF />
				</div>
				<div className="_source-icon">
					Lorem ipsum dolor sit amet (
					<a>
						<span className="ico xls inline">
							<span>XLS</span>
						</span>
					</a>
					) consectetur adipiscing elit
					<InlineIcoXLS />
				</div>
				<div className="_source-icon">
					Lorem ipsum dolor sit amet (
					<a>
						<span className="ico csv inline">
							<span>CSV</span>
						</span>
					</a>
					) consectetur adipiscing elit
					<InlineIcoCSV />
				</div>
				<div className="_source-icon">
					Lorem ipsum dolor sit amet (
					<a>
						<span className="ico interactive inline">
							<span>Interactive</span>
						</span>
					</a>
					) consectetur adipiscing elit
					<InlineIcoInteractive />
				</div>
				<div className="_source-icon">
					Lorem ipsum dolor sit amet (
					<a>
						<span className="ico ppt inline">
							<span>PPT</span>
						</span>
					</a>
					) consectetur adipiscing elit
					<InlineIcoPPT />
				</div>
				<div className="_source-icon">
					Lorem ipsum dolor sit amet (
					<a>
						<span className="ico html inline">
							<span>HTML</span>
						</span>
					</a>
					) consectetur adipiscing elit
					<InlineIcoHTML />
				</div>
				<div className="_source-icon">
					Lorem ipsum dolor sit amet (
					<a>
						<span className="ico doc inline">
							<span>DOC</span>
						</span>
					</a>
					) consectetur adipiscing elit
					<InlineIcoDOC />
				</div>

				<div className="_source-icon">
					Lorem ipsum dolor sit amet (
					<a>
						<span className="ico image inline">
							<span>IMAGE</span>
						</span>
					</a>
					) consectetur adipiscing elit
					<InlineIcoImage />
				</div>

				<div className="_source-icon">
					Lorem ipsum dolor sit amet (
					<a>
						<span className="ico json inline">
							<span>JSON</span>
						</span>
					</a>
					) consectetur adipiscing elit
					<InlineIcoJSON />
				</div>
				<div className="_source-icon">
					Lorem ipsum dolor sit amet (
					<a>
						<span className="ico efile inline">
							<span>eFile</span>
						</span>
					</a>
					) consectetur adipiscing elit
					<InlineIcoEFILE />
				</div>
				<div className="_source-icon">
					<a>
						<span className="ico txt inline">
							<span>TXT</span>
						</span>
					</a>
					<InlineIcoTXT />
				</div>
				<div className="_source-icon">
					<a>
						<span className="ico pedro inline">
							<span>PEDRO</span>
						</span>
					</a>
					<InlineIcoPEDRO />
				</div>

				<Top />
				<h3 className="_h3">Trailing Icons</h3>
				<div className="_source-icon">
					<a className="ico pdf">
						<span>PDF</span>
					</a>
					<AnchorIcoPDF />
				</div>
				<div className="_source-icon">
					<a className="ico xls">
						<span>XLS</span>
					</a>
					<AnchorIcoXLS />
				</div>
				<div className="_source-icon">
					<a className="ico csv">
						<span>CSV</span>
					</a>
					<AnchorIcoCSV />
				</div>
				<div className="_source-icon">
					<a className="ico interactive">
						<span>Interactive</span>
					</a>
					<AnchorIcoInteractive />
				</div>
				<div className="_source-icon">
					<a className="ico ppt">
						<span>PPT</span>
					</a>
					<AnchorIcoPPT />
				</div>
				<div className="_source-icon">
					<a className="ico html">
						<span>HTML</span>
					</a>
					<AnchorIcoHTML />
				</div>
				<div className="_source-icon">
					<a className="ico doc">
						<span>DOC</span>
					</a>
					<AnchorIcoDOC />
				</div>
				<div className="_source-icon">
					<a className="ico jspn">
						<span>JSON</span>
					</a>
					<AnchorIcoJSON />
				</div>
				<div className="_source-icon">
					<a className="ico image">
						<span>IMAGE</span>
					</a>
					<AnchorIcoImage />
				</div>

				<div className="_source-icon">
					<a className="ico efile">
						<span>eFile</span>
					</a>
					<AnchorIcoEFILE />
				</div>
				<div className="_source-icon">
					<a className="ico txt">
						<span>TXT</span>
					</a>
					<AnchorIcoTXT />
				</div>
				<div className="_source-icon">
					<a className="ico pedro">
						<span>PEDRO</span>
					</a>
					<AnchorIcoPEDRO />
				</div>
				<Top />

				<h3 className="_h3">Icon Only (no description)</h3>
				<div className="_source-icon">
					<span className="ico icon-only pdf">
						<span>PDF</span>
					</span>
					<IconOnlyIcoPDF />
				</div>
				<div className="_source-icon">
					<span className="ico icon-only xls">
						<span>XLS</span>
					</span>
					<IconOnlyIcoXLS />
				</div>
				<div className="_source-icon">
					<span className="ico icon-only csv">
						<span>CSV</span>
					</span>
					<IconOnlyIcoCSV />
				</div>
				<div className="_source-icon">
					<span className="ico icon-only interactive">
						<span>Interactive</span>
					</span>
					<IconOnlyIcoInteractive />
				</div>
				<div className="_source-icon">
					<span className="ico icon-only ppt">
						<span>PPT</span>
					</span>
					<IconOnlyIcoPPT />
				</div>
				<div className="_source-icon">
					<span className="ico icon-only html">
						<span>HTML</span>
					</span>
					<IconOnlyIcoHTML />
				</div>
				<div className="_source-icon">
					<span className="ico icon-only doc">
						<span>DOC</span>
					</span>
					<IconOnlyIcoDOC />
				</div>
				<div className="_source-icon">
					<span className="ico icon-only image">
						<span>IMAGE</span>
					</span>
					<IconOnlyIcoImage />
				</div>
				<div className="_source-icon">
					<span className="ico icon-only json">
						<span>JSON</span>
					</span>
					<IconOnlyIcoJSON />
				</div>
				<div className="_source-icon">
					<span className="ico icon-only efile">
						<span>eFile</span>
					</span>
					<IconOnlyIcoEFILE />
				</div>
				<div className="_source-icon">
					<span className="ico icon-only txt">
						<span>TXT</span>
					</span>
					<IconOnlyIcoTXT />
				</div>
				<div className="_source-icon">
					<span className="ico icon-only pedro">
						<span>PEDRO</span>
					</span>
					<IconOnlyIcoPEDRO />
				</div>
				<Top />
				<IconicListItems />
				<h3 className="_h3">Table Data Icons Example</h3>
				<p className="_p">
					Icons example with a <strong>table data</strong> (<code>td</code>).
				</p>
				<IconicTableCells />

				<h3 className="_h3">General Icons</h3>
				<div className="_source-icon">
					<span className="ico close-menu">
						<span>CLOSE MENU</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico search-submit">
						<span>SUBMIT</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico analysis">
						<span>analysis</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico cancel">
						<span>cancel</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico column-chart">
						<span>column-chart</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico compare">
						<span>compare</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico d-arrow">
						<span>DOWN ARROW</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico download">
						<span>download</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico edit">
						<span>edit</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico filter">
						<span>filter</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico grab-dot">
						<span>grab dotS</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico grid-column">
						<span>grid column</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico grid-line">
						<span>grid line</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico grid-map">
						<span>grid map</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico grid-parent-column">
						<span>grid parent column</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico grid-parent-line">
						<span>grid parent line</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico grid-parent-map">
						<span>grid-parent-map</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico grid-parent-pin">
						<span>grid-parent-pin</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico grid-pin">
						<span>grid-pin</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico grid-key">
						<span>grid-key</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico help">
						<span>help</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico key">
						<span>key</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico l-arrow">
						<span>l-arrow</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico l-range">
						<span>l-range</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico line-chart">
						<span>line-chart</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico map">
						<span>map</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico pause">
						<span>pause</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico pin">
						<span>pin</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico play">
						<span>play</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico r-arrow">
						<span>r-arrow</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico r-range">
						<span>r-range</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico remove">
						<span>remove</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico reset">
						<span>Reset</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico reset-animation">
						<span>reset-animation</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico scroll-h">
						<span>scroll-h</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico scroll-v">
						<span>scroll-v</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico search-icon">
						<span>Search</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico slide">
						<span>slide</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico sort">
						<span>sort</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico sort-down">
						<span>sort-down</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico sort-up">
						<span>sort-up</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico submit">
						<span>submit</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico checkmark">
						<span>checkmark</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico dash">
						<span>dash</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico dot">
						<span>dot</span>
					</span>
					<ExamplePlaceholder />
				</div>

				<div className="_source-icon">
					<span className="ico add-chart">
						<span>add-chart</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico add-download">
						<span>add-download</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico full-screen">
						<span>full-screen</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico options">
						<span>options</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico table">
						<span>table</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico lock">
						<span>lock</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico unlock">
						<span>unlock</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico submit">
						<span>submit</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico clone">
						<span>clone</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<Top />

				<h3 className="_h3">Analysis Projections Icons</h3>
				<div className="_source-icon">
					<span className="ico d">
						<span>D</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico a">
						<span>A</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico p">
						<span>P</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico da">
						<span>DA</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico ap">
						<span>AP</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico dp">
						<span>DP</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico dap">
						<span>DAP</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<ExamplePlaceholder />
				<Top />
				<h3 className="_h3">Informative Icons</h3>
				<div className="_source-icon">
					<span className="ico printer">
						<span>PRINT</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico info">
						<span>Info</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico tour">
						<span>Tour</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<Top />

				<h3 className="_h3">External Link</h3>
				<div className="_source-icon">
					<span className="external-link">
						<span>External Link</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<Top />

				<h3 className="_h3">Navigational Icons</h3>
				<div className="_source-icon">
					<span className="ico-menu analysis-projections-icon">
						<span>Analysis &amp; Projections</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu a-z-index-icon">
						<span>A-Z Index</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu beta-icon">
						<span>EIA Beta</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu coal-icon">
						<span>Coal</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu upcoming-icon">
						<span>Coming Up</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu consumption-icon">
						<span>Consumption &amp; Efficiency</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu data-tools-model-icon">
						<span>Data Tools &amp; Models</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu electricity-icon">
						<span>Electricity</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu email-complex-icon">
						<span>Email Updates</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu email-simple">
						<span>RSS Feeds</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu energy-explained-icon">
						<span>Energy Explained</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu energy-in-brief-icon">
						<span>Energy in Brief</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu environment-icon">
						<span>Environment</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu disruptions-icon">
						<span>Disruptions</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu faq-icon">
						<span>FAQs</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu featured-reports-icon">
						<span>Featured Reports</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu markets-finance-icon">
						<span>Markets &amp; Finance</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu follow-us-icon">
						<span>Follow us. . .</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu eia-glossary-icon">
						<span>Glossary</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu international-icon">
						<span>International</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu maps-icon">
						<span>Maps</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu natural-gas-icon">
						<span>Natural Gas</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu nuclear-icon">
						<span>Nuclear &amp; Uranium</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu open-data-icon">
						<span>Open Data</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu petroleum-icon">
						<span>Petroleum &amp; Other Liquids</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu press-room-icon">
						<span>Press Room</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu regional-icon">
						<span>regional-icon</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu renewable-icon">
						<span>Renewable &amp; Alternative Fuels</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu reports-icon">
						<span>All Reports &amp; Publications</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu rss-complex-icon">
						<span>RSS Feeds</span>
					</span>
					<ExamplePlaceholder />
				</div>

				<div className="_source-icon">
					<span className="ico-menu survey-forms-icon">
						<span>EIA Survey Forms</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu teachers-icon">
						<span>For Teachers</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu today-in-energy-icon">
						<span>Today in Energy</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu total-energy-icon">
						<span>Total Energy</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu states-icon">
						<span>U.S. States</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico-menu whats-new-icon">
						<span>What's New?</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<Top />

				<h3 className="_h3">Large Secondary Icons</h3>
				<div className="_source-icon">
					<ul className="icon-list">
						<li className="ico pedro">
							<a href="/">Get the What's New RSS feed</a>
						</li>
					</ul>
					<IconLargePEDRO />
				</div>
				<div className="_source-icon">
					<ul className="icon-list">
						<li className="ico radio">
							<a href="/">Get the What's New radio</a>
						</li>
					</ul>
					<IconLargeRadio />
				</div>
				<div className="_source-icon">
					<ul className="icon-list">
						<li className="ico rss">
							<a href="/">Get the What's New RSS feed</a>
						</li>
					</ul>
					<IconLargeRSS />
				</div>
				<div className="_source-icon">
					<ul className="icon-list">
						<li className="ico email">
							<a href="/">Sign up for email notifications </a>
						</li>
					</ul>
					<IconLargeEmail />
				</div>
				<div className="_source-icon">
					<ul className="icon-list">
						<li className="ico reports">
							<a href="/">Full list of upcoming reports</a>
						</li>
					</ul>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<ul className="icon-list">
						<li className="ico calendar">
							<a href="/">Full list of upcoming reports</a>
						</li>
					</ul>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<ul className="icon-list">
						<li className="ico webinar">
							<a href="/">Webinar</a>
						</li>
					</ul>
					<ExamplePlaceholder />
				</div>
				<Top />

				<h3 className="_h3">Consumption Surveys</h3>
				<div className="_source-icon">
					<span className="residential">
						<span>residential</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="commercial">
						<span>commercial</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="industrial">
						<span>industrial</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<Top />

				<h3 className="_h3">Social (Stay Connected...)</h3>
				<div className="_source-icon">
					<span className="ico facebook">
						<span>Facebook</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico twitter">
						<span>Twitter</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico youtube">
						<span>Youtube</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico flickr">
						<span>Flickr</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico linkedin">
						<span>LinkedIn</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico email">
						<span>Email Updates</span>
					</span>
					<ExamplePlaceholder />
				</div>
				<div className="_source-icon">
					<span className="ico rss">
						<span>RSS Feeds</span>
					</span>
					<ExamplePlaceholder />
				</div>
			</div>
		);
	}
}

export default Icons;
