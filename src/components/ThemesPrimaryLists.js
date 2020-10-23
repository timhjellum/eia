import React, { Component } from "react"

import Page from "./Page"
import PrimaryLists from "./Themes/PrimaryLists"

class ThemesPrimaryLists extends Component {
	render() {
		return (
			<Page title="List Theme">
				<span className="themes">
					<h1 className="_h1">Primary List Theme</h1>
					<PrimaryLists />
				</span>
				{/*

<h3 className="_h3">Bulleted List</h3>

<div className="l-col {this.state.isPrimary ? 'primary' : 'secondary-alt'}">
<ul className="bullet">
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
</ul>
</div>
<Top />

<h3 className="_h3">List Spacer with Nested Bulleted List</h3>

<div className="l-col {this.state.isPrimary ? 'primary' : 'secondary-alt'}">
<ul>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
<li className="list-spacer">
<ul className="bullet">
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
</ul>
</li>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
</ul>
</div
<Top />
**
<h3 className="_h3">List Spacer with Multiple Nested Lists</h3>
<ContainerWrapper>
<ContainerLayout>
<div className="l-col {this.state.isPrimary ? 'primary' : 'secondary-alt'}">
<ul>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit:
</li>
<li className="list-spacer">
<ul>
<li className="head">
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
</ul>
<ul>
<li className="head">
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
</ul>
<ul>
<li className="head">
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
</ul>
</li>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
</ul>
</div>
</ContainerWrapper>
</ContainerLayout
<Top />

<h3 className="_h3">Sub List with Multiple Nested Bulleted List</h3>
<div className="l-col {this.state.isPrimary ? 'primary' : 'secondary-alt'}">
<ul>
<li className="head">
Lorem ipsum dolor sit amet, consectetur adipiscing elit:
</li>
<li className="sub-list">
<LoremIpsumUL />
</li>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit
</li>
</ul>
</div
<Top />

<h3 className="_h3">Sub List with Nested Bulleted List</h3>
<div className="l-col {this.state.isPrimary ? 'primary' : 'secondary-alt'}">
<ul>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit:
</li>
<li className="sub-list">
<ul className="bullet">
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
</ul>
</li>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
</ul>
</div
<Top />

<h3 className="_h3">List Highlight</h3>
<div className="tab-themes">
<Tabs
activeTab={{
id: "tab3"
}}
>
<Tabs.Tab id="tab1" title="Article">
<div style={{ paddingTop: 10 }}>
<p className="_p">Do not use this on Article pages.</p>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
</div>
</Tabs.Tab>
<Tabs.Tab id="tab2" title="Primary">
<div style={{ paddingTop: 10 }}>
<p className="_p">Do not use this on Primary pages.</p>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
</div>
</Tabs.Tab>
<Tabs.Tab id="tab3" title="Secondary">
<div style={{ paddingTop: 10 }}>
<p className="_p">Highlight List in Secondarys:</p>
<div className="accordion-content">
<ThemeListHighlightExample />
</div>
</div>
<p className="_p">This list should only be used in Secondarys. Do not nest this list.</p>
</Tabs.Tab>
</Tabs>
</div>
<ThemeListHighlight />
<Top />

				<h3 className="_h3">Third-Level Unordered-List</h3>
				<ContainerLayout>
						<div className={`l-col ${this.state.isPrimary ? "primary" : "secondary-alt"}`}>
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li className="list-item">
								<ul>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
								<ul>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
							</li>
						</ul>
					</div>
				</ContainerLayout>

				<h3 className="_h3">Numbered List Items</h3>
					<div className={`l-col ${this.state.isPrimary ? "primary" : "secondary-alt"}`}>
					<ThemeListNumberedExample />
				</div>
				<ThemeListNumbered />

<h3 className="_h3">Default List (no styles applied)</h3>
<div className="l-col {this.state.isPrimary ? 'primary' : 'secondary-alt'}">
<ul>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
<li>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</li>
</ul>
</div

				<h3 className="_h3">Forced Bulleted List</h3>
					<div className={`l-col ${this.state.isPrimary ? "primary" : "secondary-alt"}`}>
					<ul className="bullet">
						<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
					</ul>
				</div>


				<h3 className="_h3">Unordered Bulleted-List</h3>
					<div className={`l-col ${this.state.isPrimary ? "primary" : "secondary-alt"}`}>
					<ul>
						<li className="list-item">
							<ul>
								<li>
									<a className="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
								</li>
								<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							</ul>
							<ul>
								<li>
									<a className="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>
								</li>
								<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							</ul>
						</li>
					</ul>
				</div>


				<h3 className="_h3">Second-Level Unordered-List</h3>
					<div className={`l-col ${this.state.isPrimary ? "primary" : "secondary-alt"}`}>
					<ul>
						<li className="list-item">
							<ul>
								<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								<li className="list-item">
									<ul>
										<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
										<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									</ul>
									<ul>
										<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
										<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</div>

 */}
			</Page>
		)
	}
}
export default ThemesPrimaryLists
