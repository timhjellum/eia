import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import Page from "./Page"

import FAQsExampleOne from "./FAQs/FAQsExampleOne"
import FAQsExampleTwo from "./FAQs/FAQsExampleTwo"
import { Tabs } from "@yazanaabed/react-tabs"

class ThemesFAQs extends Component {
	render() {
		return (
			<Page title="FAQ Theme #1">
				<span className="themes">
					<h1 className="_h1">FAQ's Themes (2)</h1>
					<p className="_p">
						To create a FAQs page, simply add the following: <code>$locale = 'faqs';</code>, to the PHP page definitions on the page. Then use <NavLink to="/style-guide/layouts/home">page layouts</NavLink>, <NavLink to="/style-guide/modules/page-headers">page headers</NavLink>, headers, paragraphs, and lists as normal.
					</p>
				</span>
				<div className="tab-themes">
					<Tabs
						activeTab={{
							id: "tab1"
						}}
					>
						<Tabs.Tab id="tab1" title="FAQ's Theme One">
							<FAQsExampleOne />
							{/*
									<div className="l-row l-full-width-col">
										<div className="l-col">
											<div className="faq article">
												<h1>Frequently Asked Questions (FAQs)</h1>
												<h2>Section One</h2>
												<ul>
													<li>
														<a href="#q1">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</a>
													</li>
													<li>
														<a href="#q2">Morbi feugiat, nunc vel viverra scelerisque, risus turpis faucibus nunc, eget bibendum ligula augue non diam?</a>
													</li>
												</ul>

												<h2>Section Two</h2>

												<ul>
													<li>
														<a href="#q3">Sed condimentum suscipit egestas, praesent ullamcorper tempor enim, vel vehicula nisl congue eget.?</a>
													</li>
													<li>
														<a href="#q4">Vivamus bibendum iaculis arcu vitae rhoncus. Mauris lacus leo, fermentum nec sapien a, tristique tempus ante?</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
									*/}
						</Tabs.Tab>
						<Tabs.Tab id="tab2" title="FAQ's Theme tWO">
							{/*
									<div className="l-row l-full-width-col">
										<div className="l-col">
											<div className="article faq">
												<h1>Frequently Asked Questions (FAQs)</h1>
												<h2>Section One</h2>


												<a href="q1"></a>
												<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h3>
												<p>Vestibulum rutrum lorem vel tincidunt dictum. Vestibulum vitae tellus in diam malesuada mattis id non urna. Nunc enim odio, condimentum quis maximus eu, mollis non magna. Sed eleifend magna dignissim tincidunt varius. Pellentesque tincidunt libero in ante suscipit pulvinar.</p>
	


												<a href="q2"></a>
												<h3>Morbi feugiat, nunc vel viverra scelerisque, risus turpis faucibus nunc, eget bibendum ligula augue non diam?</h3>
												<p>Phasellus rutrum malesuada risus. Nulla placerat rutrum justo, nec consectetur justo porta condimentum. Vestibulum neque lacus, vulputate at libero eget, aliquet blandit eros.</p>
	

												<h2>Section Two</h2>


												<a href="q3"></a>
												<h3>Sed condimentum suscipit egestas. Praesent ullamcorper tempor enim, vel vehicula nisl congue eget?</h3>
												<p>Phasellus tristique rhoncus justo interdum maximus. Maecenas iaculis enim elit, vitae vehicula ligula tempor ultrices. Sed vel commodo libero. Maecenas tempor mauris lorem, in facilisis justo pretium nec. Donec malesuada id tellus id convallis.</p>
												<ul>
													<li>Sed suscipit enim sed urna venenatis, ut volutpat mi lacinia.</li>
													<li>Sed a nunc at arcu dignissim tristique.</li>
													<li>Nullam in libero non ex convallis laoreet sed sit amet nunc.</li>
													<li>Donec viverra sapien a mattis pharetra.</li>
													<li>Sed in elit vulputate, pellentesque dolor et, dignissim dui.</li>
												</ul>
	


												<a href="q4"></a>
												<h3>Vivamus bibendum iaculis arcu vitae rhoncus. Mauris lacus leo, fermentum nec sapien a, tristique tempus ante?</h3>
												<p>
													Price and volume data are published in the
													<a href="/petroleum/marketing/monthly/">Petroleum Marketing Monthly</a>
													(PMM) on the first business day of the third month following the reference period. Tables 2, 4, 6, 8, 10, and 16 contain refiner prices at the U.S. level. Tables 3, 5, 7, 9, 11, and 17 contain refiner volumes at the U.S. level. Tables 31 through 33 contain refiner prices at the U.S., PADD, and state levels. Tables 39 through 41 contain refiner volumes at the U.S., PADD, and state levels.
												</p>
												<p>These data are used to analyze and report on petroleum product supply, demand, and price changes and in models to forecast petroleum product prices and sales by state and end-use category.</p>
											</div>
										</div>
									</div>
								
								*/}
							<FAQsExampleTwo />
						</Tabs.Tab>
					</Tabs>
				</div>
			</Page>
		)
	}
}

export default ThemesFAQs
