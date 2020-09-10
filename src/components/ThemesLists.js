import React, { Component } from "react"

import Page from "./Page"
import { Tabs } from "@yazanaabed/react-tabs"
import Top from "./Placeholders/Top.js"
import ThemeListCorrectNesting from "./Lists/ThemeListCorrectNesting"
import ThemeListIncorrectNesting from "./Lists/ThemeListIncorrectNesting"
import ContainerLayout from "./Containers/ContainerLayout"

import ThemeListDefaultExample from "./Lists/ThemeListDefaultExample"
import ThemeListDefault from "./Lists/ThemeListDefault"

import ThemeListBasicExample from "./Lists/ThemeListBasicExample"
import ThemeListBasic from "./Lists/ThemeListBasic"

import ThemeListHeadExample from "./Lists/ThemeListHeadExample"
import ThemeListHead from "./Lists/ThemeListHead"

import ThemeListFootExample from "./Lists/ThemeListFootExample"
import ThemeListFoot from "./Lists/ThemeListFoot"

import ThemeListSpacerExample from "./Lists/ThemeListSpacerExample"
import ThemeListSpacer from "./Lists/ThemeListSpacer"

import ThemeListSeperatorExample from "./Lists/ThemeListSeperatorExample"
import ThemeListSeperator from "./Lists/ThemeListSeperator"

import ThemeListBulletedExample from "./Lists/ThemeListBulletedExample"
import ThemeListBulleted from "./Lists/ThemeListBulleted"

import ThemeListSingleBulletExample from "./Lists/ThemeListSingleBulletExample"
import ThemeListSingleBullet from "./Lists/ThemeListSingleBullet"

import ThemeListNestedBulletedExample from "./Lists/ThemeListNestedBulletedExample"
import ThemeListNestedBulleted from "./Lists/ThemeListNestedBulleted"

import ThemeListNestedBulletedSpacerExample from "./Lists/ThemeListNestedBulletedSpacerExample"
import ThemeListNestedBulletedSpacer from "./Lists/ThemeListNestedBulletedSpacer"

import ThemeListHighlightExample from "./Lists/ThemeListHighlightExample"
import ThemeListHighlight from "./Lists/ThemeListHighlight"

import ThemeSubListExample from "./Lists/ThemeSubListExample"
import ThemeSubList from "./Lists/ThemeSubList"

import IconicListItemsExample from "./IconicListItems/IconicListItemsExample"
import IconicListItems from "./IconicListItems/IconicListItems"

import ThemeListNumberedExample from "./Lists/ThemeListNumberedExample"
import ThemeListNumbered from "./Lists/ThemeListNumbered"

import ThemeReleaseScheduleExample from "./Lists/ThemeReleaseScheduleExample"
import ThemeReleaseSchedule from "./Lists/ThemeReleaseSchedule"

import ThemeUnorderedListExample from "./Lists/ThemeUnorderedListExample"
import ThemeUnorderedList from "./Lists/ThemeUnorderedList"

class ThemesLists extends Component {
	render() {
		return (
			<Page title="List Theme">
				<span className="themes">
					<h1 className="_h1">List Theme</h1>
					<h3 className="_h3 themes">Default List (no styles applied)</h3>
				</span>
				<div className="tab-themes">
					<Tabs
						activeTab={{
							id: "tab1"
						}}
					>
						<Tabs.Tab id="tab1" title="Article">
							<div style={{ paddingTop: 10 }}>
								<p className="_p">
									HTML <strong>lists</strong> (<code>ul</code>) nested in <strong>article</strong> pages:
								</p>

								<ContainerLayout>
									<div className="article">
										<ThemeListDefaultExample />
									</div>
								</ContainerLayout>

								<p className="_p">
									First-level lists on <strong>article</strong> pages have bullets by default.
								</p>
							</div>
						</Tabs.Tab>
						<Tabs.Tab id="tab2" title="Primary">
							<div style={{ paddingTop: 10 }}>
								<p className="_p">
									HTML <strong>lists</strong> (<code>ul</code>) nested in <strong>primary</strong> pages:
								</p>
								<ContainerLayout>
									<div className="primary">
										<ThemeListDefaultExample />
									</div>
								</ContainerLayout>
								<p className="_p">
									First-level lists do <strong>NOT</strong> have bullets by default
								</p>
								<ThemeListDefault />
							</div>
						</Tabs.Tab>
						<Tabs.Tab id="tab3" title="Secondary">
							<div style={{ paddingTop: 10 }}>
								<p className="_p">
									HTML <strong>lists</strong> (<code>ul</code>) nested in <strong>secondary</strong> pages:
								</p>

								<ContainerLayout>
									<div className="secondary">
										<ThemeListDefaultExample />
									</div>
								</ContainerLayout>
								<p className="_p">
									First-level lists do <strong>NOT</strong> have bullets by default
								</p>
								<ThemeListDefault />
							</div>
						</Tabs.Tab>
					</Tabs>
				</div>
				<Top />
				{/* end list item */}
				{/* start list item */}
				<h3 className="_h3 themes">Basic List</h3>
				<div className="tab-themes">
					<Tabs
						activeTab={{
							id: "tab1"
						}}
					>
						<Tabs.Tab id="tab1" title="Article">
							<div style={{ paddingTop: 10 }}>
								<p className="_p">
									HTML <strong>lists</strong> (<code>ul</code>) nested in <strong>article</strong> pages:
								</p>

								<ContainerLayout>
									<div className="article">
										<ThemeListBasicExample />
									</div>
								</ContainerLayout>

								<p className="_p">
									First-level lists on <strong>article</strong> pages have bullets by default.
								</p>
								<ThemeListBasic />
							</div>
						</Tabs.Tab>
						<Tabs.Tab id="tab2" title="Primary">
							<div style={{ paddingTop: 10 }}>
								<p className="_p">
									HTML <strong>lists</strong> (<code>ul</code>) nested in <strong>primary</strong> pages:
								</p>

								<ContainerLayout>
									<div className="primary">
										<ThemeListBasicExample />
									</div>
								</ContainerLayout>

								<p className="_p">
									First-level lists do <strong>NOT</strong> have bullets by default
								</p>
								<ThemeListBasic />
							</div>
						</Tabs.Tab>
						<Tabs.Tab id="tab3" title="Secondary">
							<div style={{ paddingTop: 10 }}>
								<p className="_p">
									HTML <strong>lists</strong> (<code>ul</code>) nested in <strong>secondary</strong> pages:
								</p>

								<ContainerLayout>
									<div className="secondary">
										<ThemeListBasicExample />
									</div>
								</ContainerLayout>

								<p className="_p">
									First-level lists do <strong>NOT</strong> have bullets by default
								</p>
								<ThemeListBasic />
							</div>
						</Tabs.Tab>
					</Tabs>
				</div>
				<Top />
				{/* end list item */}
				{/* start list item */}
				<h3 className="_h3 themes">List Head</h3>
				<div className="tab-themes">
					<Tabs
						activeTab={{
							id: "tab1"
						}}
					>
						<Tabs.Tab id="tab1" title="Article">
							<div style={{ paddingTop: 10 }}>
								<p className="_p">
									HTML <strong>lists</strong> (<code>ul</code>) nested in <strong>article</strong> pages:
								</p>

								<ContainerLayout>
									<div className="article">
										<ThemeListHeadExample />
									</div>
								</ContainerLayout>

								<p className="_p">
									First-level lists on <strong>article</strong> pages have bullets by default.
								</p>
								<ThemeListHead />
							</div>
						</Tabs.Tab>
						<Tabs.Tab id="tab2" title="Primary">
							<div style={{ paddingTop: 10 }}>
								<p className="_p">
									HTML <strong>lists</strong> (<code>ul</code>) nested in <strong>primary</strong> pages:
								</p>

								<ContainerLayout>
									<div className="primary">
										<ThemeListHeadExample />
									</div>
								</ContainerLayout>

								<p className="_p">
									First-level lists do <strong>NOT</strong> have bullets by default
								</p>
								<ThemeListHead />
							</div>
						</Tabs.Tab>
						<Tabs.Tab id="tab3" title="Secondary">
							<div style={{ paddingTop: 10 }}>
								<p className="_p">
									HTML <strong>lists</strong> (<code>ul</code>) nested in <strong>secondary</strong> pages:
								</p>

								<ContainerLayout>
									<div className="secondary">
										<ThemeListHeadExample />
									</div>
								</ContainerLayout>

								<p className="_p">
									First-level lists do <strong>NOT</strong> have bullets by default
								</p>
								<ThemeListHead />
							</div>
						</Tabs.Tab>
					</Tabs>
				</div>
				<Top />
				{/* end list item */}
				{/* start list item */}
				<h3 className="_h3 themes">Bullet List</h3>
				<div className="tab-themes">
					<Tabs
						activeTab={{
							id: "tab2"
						}}
					>
						<Tabs.Tab id="tab1" title="Article">
							<div style={{ paddingTop: 10 }}>
								<p className="_p">Article pages have bulleted lists by default so it is not necessary to force bullets on article pages</p>
								<p className="_p">
									Article themes have bulletid lists by default. Primary and Secondary lists do not have bulletid lists by default and therefore adding the <code>bullet</code> class is required to force bullets.
								</p>
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
								<p className="_p">
									HTML <strong>lists</strong> (<code>ul</code>) nested in <strong>primary</strong> pages:
								</p>

								<ContainerLayout>
									<div className="primary">
										<ThemeListBulletedExample />
									</div>
								</ContainerLayout>

								<p className="_p">
									First-level lists do <strong>NOT</strong> have bullets by default
								</p>
								<ThemeListBulleted />
							</div>
						</Tabs.Tab>
						<Tabs.Tab id="tab3" title="Secondary">
							<div style={{ paddingTop: 10 }}>
								<p className="_p">
									HTML <strong>lists</strong> (<code>ul</code>) nested in <strong>secondary</strong> pages:
								</p>

								<ContainerLayout>
									<div className="secondary">
										<ThemeListBulletedExample />
									</div>
								</ContainerLayout>
								<p className="_p">
									First-level lists do <strong>NOT</strong> have bullets by default
								</p>
								<ThemeListBulleted />
							</div>
						</Tabs.Tab>
					</Tabs>
				</div>
				<Top />
				{/* end list item */}
				{/* start list item */}
				{/*
<h3 className="_h3 themes">Bulleted List</h3>

<div className="primary">
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
*/}
				{/* end list item */}
				{/* start list item */}
				<h3 className="_h3 themes">List Foot</h3>
				<ContainerLayout>
					<div className="primary">
						<ThemeListFootExample />
					</div>
				</ContainerLayout>
				<ThemeListFoot />
				<Top />
				{/* end list item */}
				{/* start list item */}
				<h3 className="_h3 themes">List Spacer</h3>
				<ContainerLayout>
					<div className="primary">
						<ThemeListSpacerExample />
					</div>
				</ContainerLayout>
				<ThemeListSpacer />
				<h2 className="_h2 themes">Nested Lists</h2>
				<ContainerLayout>
					<div className="l-row l-two-col-even">
						<div className="l-col">
							<h4 className="_h4">Correct list nesting:</h4>
							<ThemeListCorrectNesting />
						</div>
						<div className="l-col">
							<h4 className="_h4">Incorrect list nesting:</h4>
							<ThemeListIncorrectNesting />
						</div>
					</div>
				</ContainerLayout>
				<h3 className="_h3 themes">Nested Bulleted List</h3>
				<div className="tab-themes">
					<Tabs
						activeTab={{
							id: "tab2"
						}}
					>
						<Tabs.Tab id="tab1" title="Article">
							<div style={{ paddingTop: 10 }}>
								<p className="_p">
									Do not use this on article pages. Use the <strong>sub-list</strong> on article pages.
								</p>
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
								<p className="_p">
									HTML <strong>lists</strong> (<code>ul</code>) nested in <strong>primary</strong> pages:
								</p>
								<ContainerLayout>
									<div className="primary">
										<ThemeListNestedBulletedExample />
									</div>
								</ContainerLayout>
								<p className="_p">
									First-level lists do <strong>NOT</strong> have bullets by default. All nested lists have bullets.
								</p>
								<ThemeListNestedBulleted />
							</div>
						</Tabs.Tab>
						<Tabs.Tab id="tab3" title="Secondary">
							<div style={{ paddingTop: 10 }}>
								<p className="_p">
									HTML <strong>lists</strong> (<code>ul</code>) nested in Secondarys:
								</p>

								<ContainerLayout>
									<div className="secondary">
										<ThemeListNestedBulletedExample />
									</div>
								</ContainerLayout>
								<p className="_p">
									First-level lists do <strong>NOT</strong> have bullets by default. All nested lists have bullets.
								</p>
								<ThemeListNestedBulleted />
							</div>
						</Tabs.Tab>
					</Tabs>
				</div>
				<Top />
				{/* end list item */}
				{/* start list item */}
				<h3 className="_h3 themes">List Spacer with Nested List</h3>
				<div className="primary">
					<ThemeListNestedBulletedSpacerExample />
				</div>
				<ThemeListNestedBulletedSpacer />
				<Top />
				{/* end list item */}
				{/* start list item */}
				{/*
<h3 className="_h3 themes">List Spacer with Nested Bulleted List</h3>

<div className="primary">
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
*/}
				{/* end list item */}
				{/* start list item */}
				{/*
<h3 className="_h3 themes">List Spacer with Multiple Nested Lists</h3>
<ContainerWrapper>
<ContainerLayout>
<div className="primary">
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
*/}
				{/* end list item */}
				{/* start list item */}
				<h3 className="_h3 themes">Sub-List</h3>
				<div className="tab-themes">
					<Tabs
						activeTab={{
							id: "tab1"
						}}
					>
						<Tabs.Tab id="tab1" title="Article">
							<div style={{ paddingTop: 10 }}>
								<p className="_p">
									HTML <strong>lists</strong> (<code>ul</code>) nested in <strong>article</strong> pages:
								</p>
								<ContainerLayout>
									<div className="article">
										<ThemeSubListExample />
									</div>
								</ContainerLayout>
								<p className="_p">
									First-level lists on <strong>article</strong> pages have bullets by default.
								</p>
								<ThemeSubList />
							</div>
						</Tabs.Tab>
						<Tabs.Tab id="tab2" title="Primary">
							<div style={{ paddingTop: 10 }}>
								<p className="_p">
									Do not use this on Primary pages. Use the <strong>Nested-List</strong> above on Primary pages.
								</p>
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
								<p className="_p">
									Do not use this on Secondarys. Use the <strong>Nested-List</strong> above on Secondarys.
								</p>
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
					</Tabs>
				</div>
				<Top />
				{/* end list item */}
				{/* start list item */}
				{/*
<h3 className="_h3 themes">Sub List with Multiple Nested Bulleted List</h3>
<div className="primary">
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
*/}
				{/* end list item */}
				{/* start list item */}
				{/*
<h3 className="_h3 themes">Sub List with Nested Bulleted List</h3>
<div className="primary">
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
*/}
				{/* end list item */}
				{/* start list item */}
				<h3 className="_h3 themes">List Seperator</h3>
				<ContainerLayout>
					<div className="primary">
						<ThemeListSeperatorExample />
					</div>
				</ContainerLayout>
				<ThemeListSeperator />
				<Top />
				{/* end list item */}
				{/* start list item */}
				{/*
<h3 className="_h3 themes">List Highlight</h3>
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
*/}
				{/* end list item */}
				{/* start list item */}
				<h3 className="_h3 themes">Single Bullet List Item</h3>
				<ContainerLayout>
					<div className="primary">
						<ThemeListSingleBulletExample />
					</div>
				</ContainerLayout>
				<ThemeListSingleBullet />
				<Top />
				{/* end list item */}
				{/* start list item */}
				<h3 className="_h3 themes">Third-Level Unordered-List</h3>
				<ContainerLayout>
					<div className="primary">
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
				<h3 className="_h3 themes">Iconic List-Items</h3>
				<ContainerLayout>
					<IconicListItemsExample />
				</ContainerLayout>
				<IconicListItems />
				<Top />
				{/* end list item */}
				{/* start list item */}
				<h3 className="_h3 themes">Release Schedule</h3>
				<ContainerLayout>
					<div className="primary">
						<ThemeReleaseScheduleExample />
					</div>
				</ContainerLayout>
				<ThemeReleaseSchedule />
				<Top />
				{/* end list item */}
				{/* start list item */}
				<h3 className="_h3 themes">Numbered List Items</h3>
				<div className="primary">
					<ThemeListNumberedExample />
				</div>
				<ThemeListNumbered />
				<Top />
				{/* end list item */}
				{/* start list item */}
				{/*
<h3 className="_h3 themes">Default List (no styles applied)</h3>
<div className="primary">
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
<Top />
*/}
				{/* end list item */}
				{/* start list item */}
				<h3 className="_h3 themes">Bulleted List</h3>
				<div className="primary">
					<ul className="bullet">
						<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
					</ul>
				</div>

				<Top />
				{/* end list item */}
				{/* start list item */}
				<h3 className="_h3 themes">Unordered Bulleted-List</h3>
				<div className="primary">
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

				<Top />
				{/* end list item */}
				{/* start list item */}
				<h3 className="_h3 themes">Second-Level Unordered-List</h3>
				<div className="primary">
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

				<Top />
				{/* end list item */}
				{/* start list item */}
				<h3 className="_h3 themes">Unordered List</h3>
				<div className="primary">
					<ThemeUnorderedListExample />
				</div>
				<ThemeUnorderedList />
				<Top />
				{/* end list item */}
				{/* start list item */}
			</Page>
		)
	}
}
export default ThemesLists
