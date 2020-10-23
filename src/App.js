import React, { Component, useState } from "react"
import { NavLink, BrowserRouter as Router, Route } from "react-router-dom"
import ScrollUpButton from "react-scroll-up-button"

import "./App.css"
// home - sitemap
import Sitemap from "./components/Sitemap"
import Home from "./components/Home"

// base
import BaseHome from "./components/BaseHome"
import BaseIcons from "./components/BaseIcons"
import Logos from "./components/Logos"
import Forms from "./components/Forms"
import BaseColorPalette from "./components/BaseColorPalette"
import BaseTypography from "./components/BaseTypography"
import DocumentIcons from "./components/DocumentIcons"
import Accessibility from "./components/Accessibility"
import BaseSizeConversions from "./components/BaseSizeConversions"
// layouts
import LayoutsHome from "./components/LayoutsHome"
import LayoutsDefault from "./components/LayoutsDefault"
import LayoutsRows from "./components/LayoutsRows"
import LayoutsFullPage from "./components/LayoutsFullPage"
import LayoutsNestedRows from "./components/LayoutsNestedRows"
// modules
import ModulesHome from "./components/ModulesHome"
import ModulesBanners from "./components/ModulesBanners"
import ModulesContact from "./components/ModulesContact"
import ModulesListItems from "./components/ModulesListItems"
import ModulesFancybox from "./components/ModulesFancybox"
import ModulesFootnotes from "./components/ModulesFootnotes"
//import ModulesForms from "./components/ModulesForms"
import ModulesImages from "./components/ModulesImages"
import ModulesPageTitles from "./components/ModulesPageTitles"
import ModulesReportHeaders from "./components/ModulesReportHeaders"
import ModulesVisulizations from "./components/ModulesVisulizations"
// states
import StatesHome from "./components/StatesHome"
import StatesBuildAnchor from "./components/StatesBuildAnchor"
import StatesCalculatedNumberedLists from "./components/StatesCalculatedNumberedLists"
import StatesEmptyListItems from "./components/StatesEmptyListItems"
import StatesStickyTableHeaders from "./components/StatesStickyTableHeaders"
// themes
import ThemesHome from "./components/ThemesHome"
import ThemesAccordions from "./components/ThemesAccordions"
import ThemesArticle from "./components/ThemesArticle"
import ThemeFAQs from "./components/ThemesFAQs"
import ThemesPrimaryLists from "./components/ThemesPrimaryLists"
import ThemesSecondaryLists from "./components/ThemesSecondaryLists"
import ThemesTables from "./components/ThemesTables"
import ThemesTabs from "./components/ThemesTabs"

if (module.hot) {
	module.hot.accept()
}

class App extends Component {
	componentDidMount() {
		document.getElementsByClassName("base")[0].style.display = "none"
		document.getElementsByClassName("layouts")[0].style.display = "none"
		document.getElementsByClassName("modules")[0].style.display = "none"
		document.getElementsByClassName("states")[0].style.display = "none"
		document.getElementsByClassName("themes")[0].style.display = "none"
	}
	base() {
		//    e.preventDefault()
		document.getElementsByClassName("base")[0].style.display = "block"
		document.getElementsByClassName("layouts")[0].style.display = "none"
		document.getElementsByClassName("modules")[0].style.display = "none"
		document.getElementsByClassName("states")[0].style.display = "none"
		document.getElementsByClassName("themes")[0].style.display = "none"
	}
	layouts() {
		//    e.preventDefault()
		document.getElementsByClassName("base")[0].style.display = "none"
		document.getElementsByClassName("layouts")[0].style.display = "block"
		document.getElementsByClassName("modules")[0].style.display = "none"
		document.getElementsByClassName("states")[0].style.display = "none"
		document.getElementsByClassName("themes")[0].style.display = "none"
	}
	modules() {
		//    e.preventDefault()
		document.getElementsByClassName("base")[0].style.display = "none"
		document.getElementsByClassName("layouts")[0].style.display = "none"
		document.getElementsByClassName("modules")[0].style.display = "block"
		document.getElementsByClassName("states")[0].style.display = "none"
		document.getElementsByClassName("themes")[0].style.display = "none"
	}
	states() {
		//    e.preventDefault()
		document.getElementsByClassName("base")[0].style.display = "none"
		document.getElementsByClassName("layouts")[0].style.display = "none"
		document.getElementsByClassName("modules")[0].style.display = "none"
		document.getElementsByClassName("states")[0].style.display = "block"
		document.getElementsByClassName("themes")[0].style.display = "none"
	}
	themes() {
		//    e.preventDefault()
		document.getElementsByClassName("base")[0].style.display = "none"
		document.getElementsByClassName("layouts")[0].style.display = "none"
		document.getElementsByClassName("modules")[0].style.display = "none"
		document.getElementsByClassName("states")[0].style.display = "none"
		document.getElementsByClassName("themes")[0].style.display = "block"
	}
	constructor() {
		super()
		window.addEventListener(
			"scroll",
			function () {
				let top = window.scrollY
				let header = document.getElementsByTagName("header")

				if (top > 50) {
					header[0].classList.add("shrink")
				} else if (top < 49) {
					header[0].classList.remove("shrink")
				}
			},
			false
		)
		console.log("shrink found")
	}
	render() {
		return (
			<Router>
				<a name="top"></a>
				<div className="wrapper">
					<header>
						<nav>
							<div className="logo-shrink">
								<span className="logo"></span>
							</div>
							<ul id="navList">
								<li>
									<NavLink to="/style-guide/base/home" onClick={this.base}>
										Base
									</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/layouts/home" onClick={this.layouts}>
										Layouts
									</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/modules/home" onClick={this.modules}>
										Modules
									</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/themes/home" onClick={this.themes}>
										Themes
									</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/states/home" onClick={this.states}>
										States
									</NavLink>
								</li>
							</ul>
							<div className="_resolution _mobile">Mobile</div>
							<div className="_resolution _mobile-landscape">Mobile Landscape</div>
							<div className="_resolution _tablet">Tablet</div>
							<div className="_resolution _tablet-landscape">Tablet Landscape</div>
							<div className="_resolution _laptop">Laptop +</div>
						</nav>
					</header>

					<div className="content">
						<div className="left-content">
							<ul className="base">
								<li>
									<NavLink to="/style-guide/base/home">Base</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/base/accessibility">Accessibility</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/base/base-icons">Icons</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/base/logos">Logos</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/base/document-icons">Document Icons</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/base/forms">Forms</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/base/color-palette">Color Palette</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/base/typography">Typography</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/base/size-conversions">Size Conversions</NavLink>
								</li>
							</ul>

							<ul className="layouts">
								<li>
									<NavLink to="/style-guide/layouts/home">Layouts Home</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/layouts/default-layouts">Default Layouts</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/layouts/rows">Rows</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/layouts/nested-rows">Nested Rows</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/layouts/full-page">Full Page</NavLink>
								</li>
							</ul>

							<ul className="modules">
								<li>
									<NavLink to="/style-guide/modules/home">Modules Home</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/modules/banners">Banners</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/modules/contact">Contact</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/modules/list-items">List Items</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/modules/modals">Modals</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/modules/footnotes">Footnotes</NavLink>
								</li>

								<li>
									<NavLink to="/style-guide/modules/images">Images</NavLink>
								</li>

								<li>
									<NavLink to="/style-guide/modules/page-titles">Page Titles</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/modules/report-headers">Report Headers</NavLink>
								</li>
							</ul>

							<ul className="states">
								<li>
									<NavLink to="/style-guide/states/home">States Home</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/states/build-anchor">Build Anchor</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/states/calculated-numbered-lists">Calculated Numbered Lists</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/states/empty-list-iItems">Empty List Items</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/states/link-lists">Link Lists</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/states/sticky-table-headers">Sticky Table Headers</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/states/toggle">Toggle</NavLink>
								</li>
							</ul>

							<ul className="themes">
								<li>
									<NavLink to="/style-guide/themes/home">Themes Home</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/themes/accordions">Accordions</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/themes/article">Article Page</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/themes/faqs">FAQs Page</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/themes/secondary-lists">Primary Lists (ul)</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/themes/primary-lists">Secondary Lists (ul)</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/themes/tables">Tables</NavLink>
								</li>
								<li>
									<NavLink to="/style-guide/themes/tabs">Tabs</NavLink>
								</li>
							</ul>
						</div>
						<Route exact path="/style-guide/" component={Home} />
						<Route path="/style-guide/sitemap" component={Sitemap} />
						<Route path="/style-guide/base/home" component={BaseHome} />
						<Route path="/style-guide/base/accessibility" component={Accessibility} />
						<Route path="/style-guide/base/base-icons" component={BaseIcons} />
						<Route path="/style-guide/base/logos" component={Logos} />
						<Route path="/style-guide/base/forms" component={Forms} />
						<Route path="/style-guide/base/color-palette" component={BaseColorPalette} />
						<Route path="/style-guide/base/typography" component={BaseTypography} />

						<Route path="/style-guide/base/document-icons" component={DocumentIcons} />
						<Route path="/style-guide/base/size-conversions" component={BaseSizeConversions} />

						<Route path="/style-guide/layouts/home" component={LayoutsHome} />
						<Route path="/style-guide/layouts/default-layouts" component={LayoutsDefault} />
						<Route path="/style-guide/layouts/rows" component={LayoutsRows} />
						<Route path="/style-guide/layouts/nested-rows" component={LayoutsNestedRows} />
						<Route path="/style-guide/layouts/full-page" component={LayoutsFullPage} />

						<Route path="/style-guide/modules/home" component={ModulesHome} />
						<Route path="/style-guide/modules/banners" component={ModulesBanners} />
						<Route path="/style-guide/modules/contact" component={ModulesContact} />
						<Route path="/style-guide/modules/list-items" component={ModulesListItems} />
						<Route path="/style-guide/modules/modals" component={ModulesFancybox} />
						<Route path="/style-guide/modules/footnotes" component={ModulesFootnotes} />
						<Route path="/style-guide/modules/images" component={ModulesImages} />
						<Route path="/style-guide/modules/page-titles" component={ModulesPageTitles} />
						<Route path="/style-guide/modules/report-headers" component={ModulesReportHeaders} />

						<Route path="/style-guide/states/home" component={StatesHome} />
						<Route path="/style-guide/states/build-anchor" component={StatesBuildAnchor} />
						<Route path="/style-guide/states/calculated-numbered-lists" component={StatesCalculatedNumberedLists} />
						<Route path="/style-guide/states/empty-list-iItems" component={StatesEmptyListItems} />
						<Route path="/style-guide/states/sticky-table-headers" component={StatesStickyTableHeaders} />

						<Route path="/style-guide/themes/home" component={ThemesHome} />
						<Route path="/style-guide/themes/accordions" component={ThemesAccordions} />
						<Route path="/style-guide/themes/article" component={ThemesArticle} />
						<Route path="/style-guide/themes/faqs" component={ThemeFAQs} />
						<Route path="/style-guide/themes/primary-lists" component={ThemesPrimaryLists} />
						<Route path="/style-guide/themes/secondary-lists" component={ThemesSecondaryLists} />
						<Route path="/style-guide/themes/tables" component={ThemesTables} />
						<Route path="/style-guide/themes/tabs" component={ThemesTabs} />
					</div>
					<div className="push"></div>
				</div>
				<footer>
					<nav>
						<div className="logo-shrink">
							<span className="logo"></span>
						</div>

						<ul id="navList">
							<li>
								<NavLink to="/style-guide/base/home" onClick={this.base}>
									Base
								</NavLink>
							</li>
							<li>
								<NavLink to="/style-guide/layouts/home" onClick={this.layouts}>
									Layouts
								</NavLink>
							</li>
							<li>
								<NavLink to="/style-guide/modules/home" onClick={this.modules}>
									Modules
								</NavLink>
							</li>
							<li>
								<NavLink to="/style-guide/themes/home" onClick={this.themes}>
									Themes
								</NavLink>
							</li>
							<li>
								<NavLink to="/style-guide/states/home" onClick={this.states}>
									States
								</NavLink>
							</li>
							<li>
								<NavLink to="/style-guide/sitemap">Sitemap</NavLink>
							</li>
						</ul>
					</nav>
				</footer>
				<ScrollUpButton />
			</Router>
		)
	}
}
export default App
