import React, { Component } from "react";

class ThemesFAQs extends Component {
	render() {
		return (
			<ul class="style-guide">
				<li class="section-container">
					<h1 class="_h1">FAQ</h1>
					<h3 class="_h3">head</h3>
					<p class="_p">
						To create a FAQs page, simply add the following: <code>$locale = 'faqs';</code>, to the PHP page definitions on the page. Then use <a href="../layouts/index.html">page layouts</a>, <a href="../modules/page-headers.html">page headers</a>, headers, paragraphs, and lists as normal.
                                    </p>
					<h5 class="_h5">FAQs Markup</h5>
					<div class="_example">
						<pre><code class="html">&lt;!-- FAQs Example --&gt;
&lt;!doctype html&gt;
&lt;?php
$globalTitle = 'U.S. Energy Information Administration (EIA)';
$pageTitle = 'Frequently Asked Questions (FAQs)';
$locale = 'faqs';
?&gt;
&lt;html&gt;
&lt;head&gt;
&lt;?php include('global/head/includes/head.inc'); ?&gt;
&lt;title&gt;&lt;?=$pageTitle?&gt; - &lt;?=$globalTitle?&gt;&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;?php include('global/header/includes/header.inc'); ?&gt;
&lt;div class="l-row l-full-width-col"&gt;
&lt;div class="l-col"&gt;
&lt;div class="article"&gt;
&lt;h1&gt;&lt;?=$pageTitle?&gt;&lt;/h1&gt;

&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;?php include('global/footer/includes/footer.inc'); ?&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>
					</div>
				</li>
				<li class="section-container">
					<h3 class="_h3">FAQ's Table of Contents (TOC) <em>optional</em></h3>
					{/*
                                        <ul class="live-examples">
						<li class="_li"><strong>Live example(s)</strong></li>
						<li><a href=""></a></li>
						<li>This layout has not been used on any converted pages yet.</li>
					</ul>
					*/}
					<div class="_module-wrapper">
						<div class="_module-container">
							<div class="l-row l-full-width-col">
								<div class="l-col">
									<div class="faq article">
										<span class="_module-bg">
											<h1>Frequently Asked Questions (FAQs)</h1>
											<h2>Section One</h2>
											<ul>
												<li><a href="#q1">Lorem ipsum dolor sit amet, consectetur adipiscing elit?</a></li>
												<li><a href="#q2">Morbi feugiat, nunc vel viverra scelerisque, risus turpis faucibus nunc, eget bibendum ligula augue non diam?</a></li>
											</ul>

											<h2>Section Two</h2>

											<ul>
												<li><a href="#q3">Sed condimentum suscipit egestas, praesent ullamcorper tempor enim, vel vehicula nisl congue eget.?</a></li>
												<li><a href="#q4">Vivamus bibendum iaculis arcu vitae rhoncus. Mauris lacus leo, fermentum nec sapien a, tristique tempus ante?</a></li>
											</ul>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<ul class="_legend">
						<li>
							<div class="_page"></div>Page margin (Laptop or greater only)
                                        </li>
						<li>
							<div class="_row"></div> Row margin or padding
                                        </li>
						<li>
							<div class="_col"></div> Column margin or padding
                                        </li>
						<li>
							<div class="_module"></div> Module margin or padding
                                        </li>
					</ul>
				</li>
				<li className="section-container">
					<h5 class="_h5">PHP/HTML</h5>
					<div class="_example _html">
						<h4>HTML Code Example</h4>
						<pre>
							{/*
<textarea class="_copy-textarea" rows="11"><h1><?=$pageTitle?></h1>
								<h2>Section One</h2>
								<ul>
									<li><a href="#q1">Lorem ipsum dolor?</a></li>
									<li><a href="#q2">Lorem ipsum dolor?</a></li>
								</ul>
								<h2>Section Two</h2>
								<ul>
									<li><a href="#q3">Lorem ipsum dolor?</a></li>
									<li><a href="#q4">Lorem ipsum dolor?</a></li>
								</ul></textarea>
*/}
						</pre>
						<div class="_button-container">
							<button type="button" class="_copy">Copy to clipboard</button>
						</div>
					</div>
					<a href="#top" class="_top">Top</a>



				</li>
				<li class="section-container">
					<h3 class="_h3">FAQ's Body</h3>
					{/*start */}
					{/*start */}
					{/*start */}
					<div class="_module-wrapper">
						<div class="_module-container">
							<div class="l-row l-full-width-col">
								<div class="l-col">
									<div class="article faq">
										<span class="_module-bg">

											<h1>Frequently Asked Questions (FAQs)</h1>
											<h2>Section One</h2>

											{/*start faq item */}
											<a name="q1"></a>
											<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h3>
											<p>Vestibulum rutrum lorem vel tincidunt dictum. Vestibulum vitae tellus in diam malesuada mattis id non urna. Nunc enim odio, condimentum quis maximus eu, mollis non magna. Sed eleifend magna dignissim tincidunt varius. Pellentesque tincidunt libero in ante suscipit pulvinar.</p>
											{/*end faq item */}

											{/*start faq item */}
											<a name="q2"></a>
											<h3>Morbi feugiat, nunc vel viverra scelerisque, risus turpis faucibus nunc, eget bibendum ligula augue non diam?</h3>
											<p>Phasellus rutrum malesuada risus. Nulla placerat rutrum justo, nec consectetur justo porta condimentum. Vestibulum neque lacus, vulputate at libero eget, aliquet blandit eros.</p>
											{/*end faq item */}

											<h2>Section Two</h2>

											{/*start faq item */}
											<a name="q3"></a>
											<h3>Sed condimentum suscipit egestas. Praesent ullamcorper tempor enim, vel vehicula nisl congue eget?</h3>
											<p>Phasellus tristique rhoncus justo interdum maximus. Maecenas iaculis enim elit, vitae vehicula ligula tempor ultrices. Sed vel commodo libero. Maecenas tempor mauris lorem, in facilisis justo pretium nec. Donec malesuada id tellus id convallis.</p>
											<ul>
												<li>Sed suscipit enim sed urna venenatis, ut volutpat mi lacinia.</li>
												<li>Sed a nunc at arcu dignissim tristique.</li>
												<li>Nullam in libero non ex convallis laoreet sed sit amet nunc.</li>
												<li>Donec viverra sapien a mattis pharetra.</li>
												<li>Sed in elit vulputate, pellentesque dolor et, dignissim dui.</li>
											</ul>
											{/*end faq item */}

											{/*start faq item */}
											<a name="q4"></a>
											<h3>Vivamus bibendum iaculis arcu vitae rhoncus. Mauris lacus leo, fermentum nec sapien a, tristique tempus ante?</h3>
											<p>Price and volume data are published in the <a href="/petroleum/marketing/monthly/">Petroleum Marketing Monthly</a> (PMM) on the first business day of the third month following the reference period. Tables 2, 4, 6, 8, 10, and 16 contain refiner prices at the U.S. level. Tables 3, 5, 7, 9, 11, and 17 contain refiner volumes at the U.S. level. Tables 31 through 33 contain refiner prices at the U.S., PADD, and state levels. Tables 39 through 41 contain refiner volumes at the U.S., PADD, and state levels.</p>
											<p>These data are used to analyze and report on petroleum product supply, demand, and price changes and in models to forecast petroleum product prices and sales by state and end-use category.</p>
											{/*end faq item */}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<ul class="_legend">
						<li>
							<div class="_page"></div>Page margin (Laptop or greater only)
                                        </li>
						<li>
							<div class="_row"></div> Row margin or padding
                                        </li>
						<li>
							<div class="_col"></div> Column margin or padding
                                        </li>
						<li>
							<div class="_module"></div> Module margin or padding
                                        </li>
					</ul>



				</li>
				<li className="section-container">
					<h5 class="_h5">PHP/HTML</h5>
					<div class="_example _html">
						<h4>HTML Code Example</h4>
						<pre>
							{/*
<textarea class="_copy-textarea" rows="12"><h1><?=$pageTitle?></h1>
								{/*start faq item */}
								<a name="q1"></a>{/*required if FAQs TOC is used */}
								<h3>Lorem ipsum dolor?</h3>
								<p>Phasellus rutrum malesuada risus...</p>
								{/*end faq item */}

								{/*start faq item */}
								<a name="q2"></a>
								<h3>Lorem ipsum dolor?</h3>
								<p>Phasellus rutrum malesuada risus...</p>
								{/*end faq item */}</textarea>
*/}
						</pre>
						<div class="_button-container">
							<button type="button" class="_copy">Copy to clipboard</button>
						</div>
					</div>
					<a href="#top" class="_top">Top</a>
				</li>
			</ul>);
	}
}

export default ThemesFAQs;