import React, { Component } from "react";

classExamplesextends Component {
	render() {
		return (<ul class="style-guide">
			<li class="section-container step-1">
				<h1 class="_h1">Building a Page from scratch</h1>



				{/*h3 class="_h3">Introduction</h3> */}
				<div class="l-row l-two-col-left-narrow">
					<div class="l-col">
						<div class="prototype-container">
							<div class="prototype-header"></div>
							<div class="prototype-thumb"></div>
							<div class="prototype-footer"></div>
						</div>
					</div>
					<div class="l-col">
						<h2 class="_h2">Step One -ExamplesPHP</h2>
						<p class="_p">
							The base PHP has the required elements of all pages on the site. This includes the metadata, page wrapper, header and footer.
</p>

						{/*
We leverage CSS to lay elements out on the page. However, there is a distinction between layouts dictating the major and minor components of a page. The minor are called <a href="https://wwwdev.eia.gov/style-guide/modules/index.html">Modules</a> and include <a href="../modules/accordion.html">Accordions</a>,
<a href="../modules/fancybox.html">Modals</a>, and <a href="../modules/tabs.html">Tabs</a>; while the major <a href="./components/">Components</a> include the <a href="./components/header.html">header</a> and <a href="./components/footer.html">footer</a>.
						*/}




						<h5 class="_h5">Base PHP Example</h5>

						<div class="_example">
							<pre><code class="html">&lt;!-- Base PHP Example --&gt;
							&lt;!doctype html&gt;
							&lt;?php
							$globalTitle        = 'U.S. Energy Information Administration (EIA)';
							$pageTitle          = ''; &lt;!-- e.g. Contact Us or Petroleum Data --&gt;
							?&gt;
							&lt;html&gt;
							&lt;head&gt;
							&lt;title&gt;&lt;?=$pageTitle?&gt; - &lt;?=$globalTitle?&gt;&lt;/title&gt;
							&lt;meta property="og:title" content="&lt;?=$pageTitle?&gt; - &lt;?=$globalTitle?&gt;"&gt;
							&lt;meta property="og:url" content="https://www.eia.gov&lt;?=$_SERVER['PHP_SELF']?&gt;"&gt;
							&lt;meta name="url" content="https://www.eia.gov&lt;?=$_SERVER['PHP_SELF']?&gt;"&gt;
							&lt;?php include('archive/adaptive/global/head/includes/head.inc'); ?&gt;
							&lt;/head&gt;
							&lt;body&gt;
							&lt;?php include('global/header/includes/header.inc'); ?&gt;
							&lt;!-- see step 2 --&gt;
							&lt;?php include('global/footer/includes/footer.inc'); ?&gt;
							&lt;/body&gt;
							&lt;/html&gt;
</code></pre>
						</div>
					</div>
				</div>

			</li>
			<li class="section-container step-2">
				<div class="l-row l-two-col-left-narrow">
					<div class="l-col">
						<div class="prototype-container">
							<div class="prototype-header"></div>
							<div class="prototype-thumb">
								<div class="prototype-column-container w75">
									<div class="prototype-column"></div>
								</div>
								<div class="prototype-column-container w25">
									<div class="prototype-column"></div>
								</div>
							</div>
							<div class="prototype-footer"></div>
						</div>
					</div>
					<div class="l-col">
						<h2 class="_h2">Step Two</h2>
						<p class="_p">
							<a href="../layouts/index.html">Page Layouts</a> have two required definitions: <a href="../layouts/row-examples.html">rows</a> and <a href="../layouts/examples.html">columns</a>. You should be familiar with both in order to use them correctly. Below are the available page layouts:
</p>
						<a href="examples.html#l-full-width-col" class="prototype-link l-full-width-col">
							<div class="prototype-thumb">
								<div class="prototype-column-container w100">
									<div class="prototype-column"></div>
								</div>
							</div>
						</a>
						<a href="examples.html#l-two-col-left-narrow" class="prototype-link l-two-col-left-narrow">
							<div class="prototype-thumb">
								<div class="prototype-column-container w25">
									<div class="prototype-column prototype-secondary"></div>
								</div>
								<div class="prototype-column-container w75">
									<div class="prototype-column"></div>
								</div>
							</div>
						</a>

						<a href="examples.html#l-two-col-left" class="prototype-link l-two-col-left">
							<div class="prototype-thumb">
								<div class="prototype-column-container w33">
									<div class="prototype-column prototype-secondary"></div>
								</div>
								<div class="prototype-column-container w66">
									<div class="prototype-column"></div>
								</div>
							</div>
						</a>

						<a href="examples.html#l-two-col-right-wide" class="prototype-link l-two-col-right-wide">
							<div class="prototype-thumb">
								<div class="prototype-column-container w42">
									<div class="prototype-column prototype-secondary"></div>
								</div>
								<div class="prototype-column-container w58">
									<div class="prototype-column"></div>
								</div>
							</div>
						</a>

						<a href="examples.html#l-two-col-even" class="prototype-link l-two-col-even">
							<div class="prototype-thumb">
								<div class="prototype-column-container w50">
									<div class="prototype-column"></div>
								</div>
								<div class="prototype-column-container w50">
									<div class="prototype-column"></div>
								</div>
							</div>
						</a>

						<a href="examples.html#l-two-col-left-wide" class="prototype-link l-two-col-left-wide">
							<div class="prototype-thumb">
								<div class="prototype-column-container w58">
									<div class="prototype-column"></div>
								</div>
								<div class="prototype-column-container w42">
									<div class="prototype-column prototype-secondary"></div>
								</div>
							</div>
						</a>

						<a href="examples.html#l-two-col-right" class="prototype-link l-two-col-right">
							<div class="prototype-thumb">
								<div class="prototype-column-container w66">
									<div class="prototype-column"></div>
								</div>
								<div class="prototype-column-container w33">
									<div class="prototype-column prototype-secondary"></div>
								</div>
							</div>
						</a>

						<a href="examples.html#l-two-col-right-narrow" class="prototype-link l-two-col-right-narrow">
							<div class="prototype-thumb">
								<div class="prototype-column-container w75">
									<div class="prototype-column"></div>
								</div>
								<div class="prototype-column-container w25">
									<div class="prototype-column prototype-secondary"></div>
								</div>
							</div>
						</a>

						<a href="examples.html#l-three-col" class="prototype-link l-three-col">
							<div class="prototype-thumb">
								<div class="prototype-column-container w25">
									<div class="prototype-column prototype-secondary"></div>
								</div>
								<div class="prototype-column-container w50">
									<div class="prototype-column"></div>
								</div>
								<div class="prototype-column-container w25">
									<div class="prototype-column prototype-secondary"></div>
								</div>
							</div>
						</a>

						<a href="examples.html#l-three-col-even" class="prototype-link l-three-col-even">
							<div class="prototype-thumb">
								<div class="prototype-column-container w33">
									<div class="prototype-column"></div>
								</div>
								<div class="prototype-column-container w33">
									<div class="prototype-column"></div>
								</div>
								<div class="prototype-column-container w33">
									<div class="prototype-column"></div>
								</div>
							</div>
						</a>

						<a href="examples.html#l-four-col-even" class="prototype-link l-four-col-even">
							<div class="prototype-thumb">
								<div class="prototype-column-container w25">
									<div class="prototype-column"></div>
								</div>
								<div class="prototype-column-container w25">
									<div class="prototype-column"></div>
								</div>
								<div class="prototype-column-container w25">
									<div class="prototype-column"></div>
								</div>
								<div class="prototype-column-container w25">
									<div class="prototype-column"></div>
								</div>
							</div>
						</a>

						<a href="examples.html#l-five-col-even" class="prototype-link l-five-col-even">
							<div class="prototype-thumb">
								<div class="prototype-column-container w20">
									<div class="prototype-column"></div>
								</div>
								<div class="prototype-column-container w20">
									<div class="prototype-column"></div>
								</div>
								<div class="prototype-column-container w20">
									<div class="prototype-column"></div>
								</div>
								<div class="prototype-column-container w20">
									<div class="prototype-column"></div>
								</div>
								<div class="prototype-column-container w20">
									<div class="prototype-column"></div>
								</div>
							</div>
						</a>

						<a href="examples.html#l-six-col-even" class="prototype-link l-six-col-even">
							<div class="prototype-thumb">
								<div class="prototype-column-container w16">
									<div class="prototype-column"></div>
								</div>
								<div class="prototype-column-container w16">
									<div class="prototype-column"></div>
								</div>
								<div class="prototype-column-container w16">
									<div class="prototype-column"></div>
								</div>
								<div class="prototype-column-container w16">
									<div class="prototype-column"></div>
								</div>
								<div class="prototype-column-container w16">
									<div class="prototype-column"></div>
								</div>
								<div class="prototype-column-container w16">
									<div class="prototype-column"></div>
								</div>
							</div>
						</a>
						<p class="_p">Layout class names begin with a <code>l-row <span class="l-full-width-col">l-full-width-col</span><span class="l-two-col-left-narrow">l-row l-two-col-left-narrow</span><span class="l-two-col-left" class="prototype-link ">l-row l-two-col-left"</span><span class="l-two-col-right-wide">l-row l-two-col-right-wide</span><span class="l-two-col-even">l-row l-two-col-even</span><span class="l-two-col-left-wide">l-row l-two-col-left-wide</span><span class="l-two-col-right">l-row l-two-col-right</span><span class="l-two-col-right-narrow">l-row l-two-col-right-narrow</span><span class="l-three-col">l-three-col</span><span class="l-three-col-even">l-row l-three-col-even</span><span class="l-four-col-even">l-row l-four-col-even</span><span class="l-five-col-even">l-row l-five-col-even</span><span class="l-six-col-even">l-row l-six-col-even</span></code>.</p>
						<p class="_p">You can also <a href="../layouts/nested-examples.html">nest rows and columns</a> and there's a <a href="../layouts/full-page-examples.html">full-page layout</a> for applications and tables.</p>
					</div>
				</div>
			</li>
			<li class="section-container step-3">
				<div class="l-row l-two-col-left-narrow">
					<div class="l-col">
						<div class="prototype-container">
							<div class="prototype-header"></div>
							<div class="prototype-thumb">
								<div class="prototype-column-container w75">
									<div class="prototype-column">
										<div class="prototype-module"></div>
										<div class="prototype-module"></div>
										<div class="prototype-module"></div>
									</div>
								</div>
								<div class="prototype-column-container w25">
									<div class="prototype-column">
										<div class="prototype-module"></div>
										<div class="prototype-module"></div>
										<div class="prototype-module"></div>
									</div>
								</div>
							</div>
							<div class="prototype-footer"></div>
						</div>
					</div>
					<div class="l-col">
						<h2 class="_h2">Step three</h2>


						<p class="_p">
							<a href="../modules/index.html">Modules</a> are the reusable, modular parts of our design. They are the callouts, the sidebar sections, the product lists and so on. Modules are going to be the bulk of any project. As a result, having every module start with a prefix like
<code>.module-</code> would be needlessly verbose. Modules just use the name of the module itself.</p>
						<ul class="_modules"></ul>
					</div>
				</div>
			</li >
		</ul >);
	}
}

export default Examples;