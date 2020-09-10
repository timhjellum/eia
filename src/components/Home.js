import React, { useEffect, Component } from "react"
import { NavLink, BrowserRouter as Router, Route } from "react-router-dom"
import Page from "./Page"
import ContainerLayout from "./Containers/ContainerLayout"
import ProtoLayouts from "./Layouts/ProtoLayouts"

class Home extends Component {
	render() {
		return (
			<Page title="EIA Style-Guide">
				<h1 className="_h1">EIA Style-Guide</h1>
				{/*
				<ContainerLayout>
				*/}
				<p className="_p">
					The EIA Style Guide utilizes{" "}
					<a href="http://smacss.com/book/categorizing">
						<strong>SMACSS</strong>
					</a>{" "}
					{"   "} categorization CSS rules.
				</p>
				<h2 className="_h2">Categorizing CSS Rules</h2>
				{/*
				<p className="_p">Every project needs some organization. Throwing every new style you create onto the end of a single file would make finding things more difficult and would be very confusing for anybody else working on the project. Of course, you likely have some organization in place already. Hopefully, what you read among these pages will highlight what works with your existing process and, if I’m lucky, you will see new ways in which you can improve your process.</p>
				<p className="_p">How do you decide whether to use ID selectors, or class selectors, or any number of selectors that are at your disposal? How do you decide which elements should get the styling magic you wish to bestow upon it? How do you make it easy to understand how your site and your styles are organized?</p>
				*/}
				<p className="_p">
					At the very core of <strong>SMACSS</strong> is categorization. By categorizing CSS rules, we begin to see patterns and can define better practices around each of these patterns.
				</p>
				<p className="_p">
					<strong>There are five types of categories:</strong>
				</p>
				<ol className="_ol">
					<li className="_li base">
						<NavLink to="/style-guide/base/home" onClick={this.base}>
							Base
						</NavLink>
					</li>
					<li className="_li layouts">
						<NavLink to="/style-guide/layouts/home">Layouts</NavLink>
					</li>
					<li className="_li modules">
						<NavLink to="/style-guide/modules/home">Modules</NavLink>
					</li>
					<li className="_li states">
						<NavLink to="/style-guide/states/home">States</NavLink>
					</li>
					<li className="_li themes">
						<NavLink to="/style-guide/themes/home">Themes</NavLink>
					</li>
				</ol>
				<p className="_p">We often find ourselves mixing styles across each of these categories. If we are more aware of what we are trying to style, we can avoid the complexity that comes from intertwining these rules.</p>
				<p className="_p">Each category has certain guidelines that apply to it. This somewhat succinct separation allows us to ask ourselves questions during the development process. How are we going to code things and why are we going to code them that way?</p>
				<p className="_p">Much of the purpose of categorizing things is to codify patterns—things that repeat themselves within our design. Repetition results in less code, easier maintenance, and greater consistency in the user experience. These are all wins. Exceptions to the rule can be advantageous but they should be justified.</p>

				<span className="base">
					<h1 className="_h1">
						<NavLink to="/style-guide/base/home" onClick={this.base}>
							Base
						</NavLink>
					</h1>
					<p className="_p">Base rules are the defaults. They are almost exclusively single element selectors but it could include attribute selectors, pseudo-class selectors, child selectors or sibling selectors. Essentially, a base style says that wherever this element is on the page, it should look like this.</p>
					<ul className="_ul">
						<li className="_li">
							<NavLink to="/style-guide/base/base-icons" onClick={this.base}>
								Icons
							</NavLink>
						</li>
						<li className="_li">
							<NavLink to="/style-guide/base/logos" onClick={this.base}>
								Logos
							</NavLink>
						</li>
						<li className="_li">
							<NavLink to="/style-guide/base/document-icons" onClick={this.base}>
								Document Icons
							</NavLink>
						</li>
						<li className="_li">
							<NavLink to="/style-guide/base/forms" onClick={this.base}>
								Forms
							</NavLink>
						</li>
						<li className="_li">
							<NavLink to="/style-guide/base/color-palette" onClick={this.base}>
								Color Palette
							</NavLink>
						</li>
						<li className="_li">
							<NavLink to="/style-guide/base/typography" onClick={this.base}>
								Typography
							</NavLink>
						</li>
						<li className="_li">
							<NavLink to="/style-guide/base/size-conversions" onClick={this.base}>
								Size Conversions
							</NavLink>
						</li>
					</ul>
				</span>
				<span className="layouts">
					<h1 className="_h1">
						<NavLink to="/style-guide/layouts/home" onClick={this.layouts}>
							Layouts
						</NavLink>
					</h1>
					<p className="_p">Layout rules divide the page into sections. Layouts hold one or more modules together.</p>
					<ProtoLayouts />
					<ul className="_ul">
						<li className="_li">
							<NavLink to="/style-guide/layouts/default-layouts" onClick={this.layouts}>
								Default Layouts
							</NavLink>
						</li>
						<li className="_li">
							<NavLink to="/style-guide/layouts/rows" onClick={this.layouts}>
								Rows
							</NavLink>
						</li>
						<li className="_li">
							<NavLink to="/style-guide/layouts/nested-rows" onClick={this.layouts}>
								Nested Rows
							</NavLink>
						</li>
						<li className="_li">
							<NavLink to="/style-guide/layouts/full-page" onClick={this.layouts}>
								Full Page
							</NavLink>
						</li>
					</ul>
				</span>
				<span className="modules">
					<h1 className="_h1">
						<NavLink to="/style-guide/modules/home" onClick={this.modules}>
							Modules
						</NavLink>
					</h1>
					<p className="_p">Modules are the reusable, modular parts of our design. They are the callouts, the sidebar sections, the product lists and so on.</p>
					<ul className="_ul">
						<li className="_li">
							<NavLink to="/style-guide/modules/banners" onClick={this.modules}>
								Banners
							</NavLink>
						</li>
						<li className="_li">
							<NavLink to="/style-guide/modules/contact" onClick={this.modules}>
								Contact
							</NavLink>
						</li>
						<li className="_li">
							<NavLink to="/style-guide/modules/energy-education" onClick={this.modules}>
								Energy Education
							</NavLink>
						</li>
						<li className="_li">
							<NavLink to="/style-guide/modules/modals" onClick={this.modules}>
								Modals
							</NavLink>
						</li>

						<li className="_li">
							<NavLink to="/style-guide/modules/images" onClick={this.modules}>
								Images
							</NavLink>
						</li>

						<li className="_li">
							<NavLink to="/style-guide/modules/page-titles" onClick={this.modules}>
								Page Titles
							</NavLink>
						</li>
						<li className="_li">
							<NavLink to="/style-guide/modules/report-headers" onClick={this.modules}>
								Report Headers
							</NavLink>
						</li>
						<li className="_li">
							<NavLink to="/style-guide/modules/visulizations" onClick={this.modules}>
								Visulizations
							</NavLink>
						</li>
					</ul>
				</span>
				<span className="states">
					<h1 className="_h1">
						<NavLink to="/style-guide/states/home" onClick={this.states}>
							States
						</NavLink>
					</h1>
					<p className="_p">State rules are ways to describe how our modules or layouts will look when in a particular state. Is it hidden or expanded? Is it active or inactive? They are about describing how a module or layout looks on screens that are smaller or bigger. They are also about describing how a module might look in different views like the home page or the inside page.</p>
					<ul className="_ul">
						<li className="_li">
							<NavLink to="/style-guide/states/build-anchor" onClick={this.states}>
								Build Anchor
							</NavLink>
						</li>
						<li className="_li">
							<NavLink to="/style-guide/states/calculated-numbered-lists" onClick={this.states}>
								Calculated Numbered Lists
							</NavLink>
						</li>
						<li className="_li">
							<NavLink to="/style-guide/states/empty-list-iItems" onClick={this.states}>
								Empty List Items
							</NavLink>
						</li>
						{/*
						<li className="_li">
							<NavLink to="/style-guide/states/link-lists">Link Lists</NavLink>
						</li>
			*/}
						<li className="_li">
							<NavLink to="/style-guide/states/sticky-table-headers" onClick={this.states}>
								Sticky Table Headers
							</NavLink>
						</li>

						<li className="_li">
							<NavLink to="/style-guide/states/toggle" onClick={this.states}>
								Toggle
							</NavLink>
						</li>
					</ul>
				</span>
				<span className="themes">
					<h1 className="_h1">
						<NavLink to="/style-guide/themes/home" onClick={this.themes}>
							Themes Home
						</NavLink>
					</h1>
					<p className="_p">Theme rules are similar to state rules in that they describe how modules or layouts might look. Most sites don’t require a layer of theming but it is good to be aware of it.</p>
					<ul className="_ul">
						<li className="_li">
							<NavLink to="/style-guide/themes/accordions" onClick={this.themes}>
								Accordions
							</NavLink>
						</li>
						<li className="_li">
							<NavLink to="/style-guide/themes/article" onClick={this.themes}>
								Article Page
							</NavLink>
						</li>
						<li className="_li">
							<NavLink to="/style-guide/themes/faqs" onClick={this.themes}>
								FAQs Page
							</NavLink>
						</li>
						<li className="_li">
							<NavLink to="/style-guide/themes/lists" onClick={this.themes}>
								Lists (ul)
							</NavLink>
						</li>
						<li className="_li">
							<NavLink to="/style-guide/themes/tables" onClick={this.themes}>
								Tables
							</NavLink>
						</li>
						<li className="_li">
							<NavLink to="/style-guide/themes/tabs" onClick={this.themes}>
								Tabs
							</NavLink>
						</li>
					</ul>
				</span>

				{/*
				</ContainerLayout>
				*/}
			</Page>
		)
	}
}

export default Home
