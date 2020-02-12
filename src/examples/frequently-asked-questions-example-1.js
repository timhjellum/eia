import React, { Component } from "react";

class Examples4 extends Component {
	render() {
		return (<ul class="style-guide">
			<li class="section-container">








				<h1 class="_h1">Frequently Asked Questions (FAQs) Example #1</h1>


				<div class="_example">
					<pre><code class="html">&lt;!doctype html&gt;
					&lt;?php
					$globalTitle 	= 'U.S. Energy Information Administration (EIA)';
					$pageTitle		= 'Frequently Asked Questions';
					$locale			= 'faqs';
					?&gt;
					&lt;html&gt;
					&lt;head&gt;
					&lt;title&gt;&lt;?=$pageTitle?&gt; - &lt;?=$globalTitle?&gt;&lt;/title&gt;
					&lt;meta property="og:title" content="&lt;?=$pageTitle?&gt; - &lt;?=$globalTitle?&gt;"&gt;
					&lt;meta property="og:url" content="https://www.eia.gov&lt;?=$_SERVER['PHP_SELF']?&gt;"&gt;
					&lt;meta name="url" content="https://www.eia.gov&lt;?=$_SERVER['PHP_SELF']?&gt;"&gt;
					&lt;?php include('global/head/includes/head.inc'); ?&gt;
					&lt;/head&gt;
					&lt;body&gt;
					&lt;?php include('global/header/includes/header.inc'); ?&gt;
					&lt;div class="l-row l-two-col-right-narrow"&gt;
					&lt;div class="l-col"&gt;
					&lt;div class="article-alt"&gt;
					&lt;h1&gt;&lt;?=$pageTitle?&gt;&lt;/h1&gt;

					&lt;ul&gt;
					&lt;li&gt;&lt;a href="#one"&gt;Section One&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href="#two"&gt;Section Two&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href="#thr"&gt;Section Thr&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href="#fou"&gt;Section Fou&lt;/a&gt;&lt;/li&gt;
					&lt;li&gt;&lt;a href="#fiv"&gt;Section Fiv&lt;/a&gt;&lt;/li&gt;
					&lt;/ul&gt;

					&lt;h2&gt;&lt;a name="one" id="one"&gt;&lt;/a&gt;Section One&lt;/h2&gt;
					&lt;!-- start faq item --&gt;
					&lt;h3&gt;Question One?&lt;/h3&gt;
					&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.&lt;/p&gt;
					&lt;!-- end faq item --&gt;

					&lt;!-- start faq item --&gt;
					&lt;h3&gt;Question Two?&lt;/h3&gt;
					&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.&lt;/p&gt;
					&lt;!-- end faq item --&gt;

					&lt;!-- start faq item --&gt;
					&lt;h3&gt;Question Thr?&lt;/h3&gt;
					&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.&lt;/p&gt;
					&lt;ul&gt;
					&lt;li&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/li&gt;
					&lt;li&gt;Vivamus non arcu varius, sagittis tortor et, eleifend ante.&lt;/li&gt;
					&lt;li&gt;Nullam viverra felis in sagittis ultricies.&lt;/li&gt;
					&lt;li&gt;Donec bibendum leo et justo consequat iaculis.&lt;/li&gt;
					&lt;/ul&gt;
					&lt;!-- end faq item --&gt;

					&lt;h2&gt;&lt;a name="two" id="two"&gt;&lt;/a&gt;Section Two&lt;/h2&gt;

					&lt;!-- start faq item --&gt;
					&lt;h3&gt;Question One?&lt;/h3&gt;
					&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.&lt;/p&gt;
					&lt;!-- end faq item --&gt;

					&lt;!-- start faq item --&gt;
					&lt;h3&gt;Question Two?&lt;/h3&gt;
					&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.&lt;/p&gt;
					&lt;!-- end faq item --&gt;

					&lt;!-- start faq item --&gt;
					&lt;h3&gt;Question Thr?&lt;/h3&gt;
					&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.&lt;/p&gt;
					&lt;ul&gt;
					&lt;li&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/li&gt;
					&lt;li&gt;Vivamus non arcu varius, sagittis tortor et, eleifend ante.&lt;/li&gt;
					&lt;li&gt;Nullam viverra felis in sagittis ultricies.&lt;/li&gt;
					&lt;li&gt;Donec bibendum leo et justo consequat iaculis.&lt;/li&gt;
					&lt;/ul&gt;
					&lt;!-- end faq item --&gt;

					&lt;h2&gt;&lt;a name="thr" id="thr"&gt;&lt;/a&gt;Section Thr&lt;/h2&gt;

					&lt;!-- start faq item --&gt;
					&lt;h3&gt;Question One?&lt;/h3&gt;
					&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.&lt;/p&gt;
					&lt;!-- end faq item --&gt;

					&lt;!-- start faq item --&gt;
					&lt;h3&gt;Question Two?&lt;/h3&gt;
					&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.&lt;/p&gt;
					&lt;!-- end faq item --&gt;

					&lt;!-- start faq item --&gt;
					&lt;h3&gt;Question Thr?&lt;/h3&gt;
					&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.&lt;/p&gt;
					&lt;ul&gt;
					&lt;li&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/li&gt;
					&lt;li&gt;Vivamus non arcu varius, sagittis tortor et, eleifend ante.&lt;/li&gt;
					&lt;li&gt;Nullam viverra felis in sagittis ultricies.&lt;/li&gt;
					&lt;li&gt;Donec bibendum leo et justo consequat iaculis.&lt;/li&gt;
					&lt;/ul&gt;
					&lt;!-- end faq item --&gt;

					&lt;h2&gt;&lt;a name="fou" id="fou"&gt;&lt;/a&gt;Section Fou&lt;/h2&gt;

					&lt;!-- start faq item --&gt;
					&lt;h3&gt;Question One?&lt;/h3&gt;
					&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.&lt;/p&gt;
					&lt;!-- end faq item --&gt;

					&lt;!-- start faq item --&gt;
					&lt;h3&gt;Question Two?&lt;/h3&gt;
					&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.&lt;/p&gt;
					&lt;!-- end faq item --&gt;

					&lt;!-- start faq item --&gt;
					&lt;h3&gt;Question Thr?&lt;/h3&gt;
					&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.&lt;/p&gt;
					&lt;ul&gt;
					&lt;li&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/li&gt;
					&lt;li&gt;Vivamus non arcu varius, sagittis tortor et, eleifend ante.&lt;/li&gt;
					&lt;li&gt;Nullam viverra felis in sagittis ultricies.&lt;/li&gt;
					&lt;li&gt;Donec bibendum leo et justo consequat iaculis.&lt;/li&gt;
					&lt;/ul&gt;
					&lt;!-- end faq item --&gt;

					&lt;h2&gt;&lt;a name="fiv" id="fiv"&gt;&lt;/a&gt;Section Fiv&lt;/h2&gt;

					&lt;!-- start faq item --&gt;
					&lt;h3&gt;Question One?&lt;/h3&gt;
					&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.&lt;/p&gt;
					&lt;!-- end faq item --&gt;

					&lt;!-- start faq item --&gt;
					&lt;h3&gt;Question Two?&lt;/h3&gt;
					&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.&lt;/p&gt;
					&lt;!-- end faq item --&gt;

					&lt;!-- start faq item --&gt;
					&lt;h3&gt;Question Thr?&lt;/h3&gt;
					&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.&lt;/p&gt;
					&lt;ul&gt;
					&lt;li&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/li&gt;
					&lt;li&gt;Vivamus non arcu varius, sagittis tortor et, eleifend ante.&lt;/li&gt;
					&lt;li&gt;Nullam viverra felis in sagittis ultricies.&lt;/li&gt;
					&lt;li&gt;Donec bibendum leo et justo consequat iaculis.&lt;/li&gt;
					&lt;/ul&gt;
					&lt;!-- end faq item --&gt;

					&lt;/div&gt;
					&lt;div class="top-container"&gt;
					&lt;a href="#top" class="top"&gt;Top&lt;/a&gt;
					&lt;/div&gt;
					&lt;div class="l-col"&gt;
					&lt;!-- side content --&gt;
					&lt;/div&gt;
					&lt;/div&gt;
					&lt;?php include('global/footer/includes/footer.inc'); ?&gt;
					&lt;/body&gt;
&lt;/html&gt;</code></pre>
				</div></li >
		</ul >);
	}
}

export default Examples4;