import React, { Component } from "react";
import Top from "../assets/components/Top.js";
import ExamplePlaceholder from "../assets/examples/Placeholder.js";

class FAQs extends Component {
	render() {
		return (
			<div className="right-content">
				<h1 className="_h1">FAQ</h1>
				<h3 className="_h3">head</h3>
				<p className="_p">
					To create a FAQs page, simply add the following:
					<code>$locale = 'faqs';</code>, to the PHP page definitions
					on the page. Then use
					<a href="../layouts/index.html">page layouts</a>,
					<a href="../modules/page-headers.html">page headers</a>,
					headers, paragraphs, and lists as normal.
				</p>
				<ExamplePlaceholder />
				<h3 className="_h3">
					FAQ's Table of Contents (TOC) <em>optional</em>
				</h3>
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-full-width-col">
							<div className="l-col">
								<div className="faq article">
									<span className="_module-bg">
										<h1>
											Frequently Asked Questions (FAQs)
										</h1>
										<h2>Section One</h2>
										<ul>
											<li>
												<a href="#q1">
													Lorem ipsum dolor sit amet,
													consectetur adipiscing elit?
												</a>
											</li>
											<li>
												<a href="#q2">
													Morbi feugiat, nunc vel
													viverra scelerisque, risus
													turpis faucibus nunc, eget
													bibendum ligula augue non
													diam?
												</a>
											</li>
										</ul>

										<h2>Section Two</h2>

										<ul>
											<li>
												<a href="#q3">
													Sed condimentum suscipit
													egestas, praesent
													ullamcorper tempor enim, vel
													vehicula nisl congue eget.?
												</a>
											</li>
											<li>
												<a href="#q4">
													Vivamus bibendum iaculis
													arcu vitae rhoncus. Mauris
													lacus leo, fermentum nec
													sapien a, tristique tempus
													ante?
												</a>
											</li>
										</ul>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<ExamplePlaceholder />
				<Top />

				<h3 className="_h3">FAQ's Body</h3>
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-full-width-col">
							<div className="l-col">
								<div className="article faq">
									<span className="_module-bg">
										<h1>
											Frequently Asked Questions (FAQs)
										</h1>
										<h2>Section One</h2>

										{/*start faq item */}
										<a name="q1"></a>
										<h3>
											Lorem ipsum dolor sit amet,
											consectetur adipiscing elit?
										</h3>
										<p>
											Vestibulum rutrum lorem vel
											tincidunt dictum. Vestibulum vitae
											tellus in diam malesuada mattis id
											non urna. Nunc enim odio,
											condimentum quis maximus eu, mollis
											non magna. Sed eleifend magna
											dignissim tincidunt varius.
											Pellentesque tincidunt libero in
											ante suscipit pulvinar.
										</p>
										{/*end faq item */}

										{/*start faq item */}
										<a name="q2"></a>
										<h3>
											Morbi feugiat, nunc vel viverra
											scelerisque, risus turpis faucibus
											nunc, eget bibendum ligula augue non
											diam?
										</h3>
										<p>
											Phasellus rutrum malesuada risus.
											Nulla placerat rutrum justo, nec
											consectetur justo porta condimentum.
											Vestibulum neque lacus, vulputate at
											libero eget, aliquet blandit eros.
										</p>
										{/*end faq item */}

										<h2>Section Two</h2>

										{/*start faq item */}
										<a name="q3"></a>
										<h3>
											Sed condimentum suscipit egestas.
											Praesent ullamcorper tempor enim,
											vel vehicula nisl congue eget?
										</h3>
										<p>
											Phasellus tristique rhoncus justo
											interdum maximus. Maecenas iaculis
											enim elit, vitae vehicula ligula
											tempor ultrices. Sed vel commodo
											libero. Maecenas tempor mauris
											lorem, in facilisis justo pretium
											nec. Donec malesuada id tellus id
											convallis.
										</p>
										<ul>
											<li>
												Sed suscipit enim sed urna
												venenatis, ut volutpat mi
												lacinia.
											</li>
											<li>
												Sed a nunc at arcu dignissim
												tristique.
											</li>
											<li>
												Nullam in libero non ex
												convallis laoreet sed sit amet
												nunc.
											</li>
											<li>
												Donec viverra sapien a mattis
												pharetra.
											</li>
											<li>
												Sed in elit vulputate,
												pellentesque dolor et, dignissim
												dui.
											</li>
										</ul>
										{/*end faq item */}

										{/*start faq item */}
										<a name="q4"></a>
										<h3>
											Vivamus bibendum iaculis arcu vitae
											rhoncus. Mauris lacus leo, fermentum
											nec sapien a, tristique tempus ante?
										</h3>
										<p>
											Price and volume data are published
											in the
											<a href="/petroleum/marketing/monthly/">
												Petroleum Marketing Monthly
											</a>
											(PMM) on the first business day of
											the third month following the
											reference period. Tables 2, 4, 6, 8,
											10, and 16 contain refiner prices at
											the U.S. level. Tables 3, 5, 7, 9,
											11, and 17 contain refiner volumes
											at the U.S. level. Tables 31 through
											33 contain refiner prices at the
											U.S., PADD, and state levels. Tables
											39 through 41 contain refiner
											volumes at the U.S., PADD, and state
											levels.
										</p>
										<p>
											These data are used to analyze and
											report on petroleum product supply,
											demand, and price changes and in
											models to forecast petroleum product
											prices and sales by state and
											end-use category.
										</p>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Top />
			</div>
		);
	}
}

export default FAQs;
