import React, { Component } from "react"
import IconicAnchors from "./IconicAnchors/IconicAnchors"
import IconicTableCellIcons from "./IconicTableCellIcons/IconicTableCellIcons"
import IconOnly from "./IconOnly/IconOnly"
import InlineIcons from "./InlineIcons/InlineIcons"
import IconicListItems from "./IconicListItems/IconicListItems"
import Page from "./Page"
import { Tabs } from "@yazanaabed/react-tabs"

class DocumentIcons extends Component {
	render() {
		return (
			<Page title="Document Icons">
				<span className="base">
					<h1 className="_h1">Document Icons</h1>
					<p className="_p">The graphic images below are SVG, an image format for vector graphics. These images are not physical images that you link to like a typical .gif, .jpg or .png. Vvector-based icons look great in a high pixel density world and offers design control, and predictability. The examples below are the base examples with minimal customizing. They also have a nested span and label which is used for accessibility.</p>
				</span>
				<div className="l-row l-three-col-even">
					<div className="l-col">
						<ul className="_ul">
							<li>
								<a href="/" className="ico pdf">
									PDF
								</a>
							</li>
							<li className="_li">
								<p className="_p">Iconic Only Anchors</p>
							</li>
						</ul>
						<ul className="_ul">
							<li>
								Lorem ipsum (
								<a href="/" className="ico pdf">
									<span>PDF</span>
								</a>
								) Lorem ipsum.
							</li>
							<li className="_li">
								<p className="_p">Iconic Only Anchors</p>
							</li>
						</ul>
						<ul className="_ul">
							<li>
								<a href="/">
									Lorem ipsum{" "}
									<span className="ico pdf">
										<span>PDF</span>
									</span>
									.
								</a>{" "}
							</li>
							<li className="_li">
								<p className="_p">Iconic Anchors</p>
							</li>
						</ul>
						<ul className="_ul">
							<li>
								<a href="/">
									Lorem ipsum{" "}
									<span className="ico pdf right">
										<span>PDF</span>
									</span>
									.
								</a>{" "}
							</li>
							<li className="_li">
								<p className="_p">Iconic Anchors (Icon to the right of the icon description, e.g.: PDF.)</p>
							</li>
						</ul>
						<ul className="_ul">
							<li>
								<a href="/">
									Lorem ipsum{" "}
									<span className="ico pdf icon-only">
										<span>PDF</span>
									</span>
									.
								</a>
							</li>
							<li className="_li">
								<p className="_p">Icon only (no description, e.g.: PDF.)</p>
							</li>
						</ul>
					</div>
					<div className="l-col">2</div>
					<div className="l-col">3</div>
				</div>

				<div className="tab-base">
					<Tabs
						activeTab={{
							id: "tab1"
						}}
					>
						<Tabs.Tab id="tab1" title="Iconic Only Anchors">
							<div style={{ padding: 10 }}>
								<IconicAnchors />
							</div>
						</Tabs.Tab>
						<Tabs.Tab id="tab2" title="Iconic Anchors">
							<div style={{ padding: 10 }}>
								<InlineIcons />
							</div>
						</Tabs.Tab>

						<Tabs.Tab id="tab3" title="Table Cell Icons">
							<div style={{ padding: 10 }}>
								<IconicTableCellIcons />
							</div>
						</Tabs.Tab>

						<Tabs.Tab id="tab4" title="Icon Only">
							<div style={{ padding: 10 }}>
								<IconOnly />
							</div>
						</Tabs.Tab>

						<Tabs.Tab id="tab5" title="Iconic List Items">
							<div style={{ padding: 10 }}>
								<IconicListItems />
							</div>
						</Tabs.Tab>
					</Tabs>
				</div>
			</Page>
		)
	}
}

export default DocumentIcons
