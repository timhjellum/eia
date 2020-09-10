import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ContainerLayout from "../Containers/ContainerLayout"
import Top from "../Placeholders/Top.js"

class FAQsExampleOne extends Component {
	constructor() {
		super()
		const initialCodeString = `<!doctype html>\n  <?php\n    $globalTitle 	= 'U.S. Energy Information Administration (EIA)';\n    $pageTitle		= 'Frequently Asked Questions';\n    $locale			= 'faqs';\n  ?>\n<html>\n<head>\n  <title><?=$pageTitle?> - <?=$globalTitle?></title>\n  <meta property="og:title" content="<?=$pageTitle?> - <?=$globalTitle?>">\n  <meta property="og:url" content="https://www.eia.gov<?=$_SERVER['PHP_SELF']?>">\n  <meta name="url" content="https://www.eia.gov<?=$_SERVER['PHP_SELF']?>">\n  <?php include('global/head/includes/head.inc'); ?>\n</head>\n<body>\n<?php include('global/header/includes/header.inc') ?>\n<div class="l-row l-two-col-right-narrow">\n  <div class="l-col">\n    <div class="article-alt">\n      <h1><?=$pageTitle?></h1>\n\n      <ul>\n        <li><a href="#one">Section One</a></li>\n        <li><a href="#two">Section Two</a></li>\n        <li><a href="#thr">Section Thr</a></li>\n        <li><a href="#fou">Section Fou</a></li>\n        <li><a href="#fiv">Section Fiv</a></li>\n      </ul>\n\n      <h2><a name="one" id="one"></a>Section One</h2>\n      <!-- start faq item -->\n      <h3>Question One?</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>\n      <!-- end faq item -->\n\n      <!-- start faq item -->\n      <h3>Question Two?</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>\n      <!-- end faq item -->\n\n      <!-- start faq item -->\n      <h3>Question Thr?</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>\n      <ul>\n        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n        <li>Vivamus non arcu varius, sagittis tortor et, eleifend ante.</li>\n        <li>Nullam viverra felis in sagittis ultricies.</li>\n        <li>Donec bibendum leo et justo consequat iaculis.</li>\n      </ul>\n      <!-- end faq item -->\n\n      <h2><a name="two" id="two"></a>Section Two</h2>\n\n      <!-- start faq item -->\n      <h3>Question One?</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>\n      <!-- end faq item -->\n\n      <!-- start faq item -->\n      <h3>Question Two?</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>\n      <!-- end faq item -->\n\n      <!-- start faq item -->\n      <h3>Question Thr?</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>\n      <ul>\n        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n        <li>Vivamus non arcu varius, sagittis tortor et, eleifend ante.</li>\n        <li>Nullam viverra felis in sagittis ultricies.</li>\n        <li>Donec bibendum leo et justo consequat iaculis.</li>\n      </ul>\n      <!-- end faq item -->\n\n      <h2><a name="thr" id="thr"></a>Section Thr</h2>\n\n      <!-- start faq item -->\n      <h3>Question One?</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>\n      <!-- end faq item -->\n\n      <!-- start faq item -->\n      <h3>Question Two?</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>\n      <!-- end faq item -->\n\n      <!-- start faq item -->\n      <h3>Question Thr?</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>\n      <ul>\n        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n        <li>Vivamus non arcu varius, sagittis tortor et, eleifend ante.</li>\n        <li>Nullam viverra felis in sagittis ultricies.</li>\n        <li>Donec bibendum leo et justo consequat iaculis.</li>\n      </ul>\n      <!-- end faq item -->\n\n      <h2><a name="fou" id="fou"></a>Section Fou</h2>\n\n      <!-- start faq item -->\n      <h3>Question One?</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>\n      <!-- end faq item -->\n\n      <!-- start faq item -->\n      <h3>Question Two?</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>\n      <!-- end faq item -->\n\n      <!-- start faq item -->\n      <h3>Question Thr?</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>\n      <ul>\n        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n        <li>Vivamus non arcu varius, sagittis tortor et, eleifend ante.</li>\n        <li>Nullam viverra felis in sagittis ultricies.</li>\n        <li>Donec bibendum leo et justo consequat iaculis.</li>\n      </ul>\n      <!-- end faq item -->\n\n      <h2><a name="fiv" id="fiv"></a>Section Fiv</h2>\n\n      <!-- start faq item -->\n      <h3>Question One?</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>\n      <!-- end faq item -->\n\n      <!-- start faq item -->\n      <h3>Question Two?</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>\n      <!-- end faq item -->\n\n      <!-- start faq item -->\n      <h3>Question Thr?</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>\n      <ul>\n        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n        <li>Vivamus non arcu varius, sagittis tortor et, eleifend ante.</li>\n        <li>Nullam viverra felis in sagittis ultricies.</li>\n        <li>Donec bibendum leo et justo consequat iaculis.</li>\n      </ul>\n      <!-- end faq item -->\n\n    <div class="top-container">\n      <a href="#top" class="top">Top</a>\n    </div>\n  </div>\n  <div class="l-col">\n    <!-- side content -->\n  </div>\n</div>\n<?php include('global/footer/includes/footer.inc') ?>\n</body>\n</html>`
		this.state = {
			selected: tomorrow,
			code: initialCodeString,
			showLineNumbers: true,
			copied: false
		}
	}
	render() {
		return (
			<>
				<ContainerLayout>
					<div className="l-row l-two-col-right-narrow">
						<div className="l-col">
							<div className="article-alt">
								<h1>Page Title</h1>

								<ul>
									<li>
										<a href="#one">Section One</a>
									</li>
									<li>
										<a href="#two">Section Two</a>
									</li>
									<li>
										<a href="#thr">Section Thr</a>
									</li>
									<li>
										<a href="#fou">Section Fou</a>
									</li>
									<li>
										<a href="#fiv">Section Fiv</a>
									</li>
								</ul>

								<h2>
									<a name="one" id="one"></a>Section One
								</h2>

								<h3>Question One?</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>

								<h3>Question Two?</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>

								<h3>Question Thr?</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>
								<ul>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Vivamus non arcu varius, sagittis tortor et, eleifend ante.</li>
									<li>Nullam viverra felis in sagittis ultricies.</li>
									<li>Donec bibendum leo et justo consequat iaculis.</li>
								</ul>

								<h2>
									<a name="two" id="two"></a>Section Two
								</h2>

								<h3>Question One?</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>

								<h3>Question Two?</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>

								<h3>Question Thr?</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>
								<ul>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Vivamus non arcu varius, sagittis tortor et, eleifend ante.</li>
									<li>Nullam viverra felis in sagittis ultricies.</li>
									<li>Donec bibendum leo et justo consequat iaculis.</li>
								</ul>

								<h2>
									<a name="thr" id="thr"></a>Section Thr
								</h2>

								<h3>Question One?</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>

								<h3>Question Two?</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>

								<h3>Question Thr?</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>
								<ul>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Vivamus non arcu varius, sagittis tortor et, eleifend ante.</li>
									<li>Nullam viverra felis in sagittis ultricies.</li>
									<li>Donec bibendum leo et justo consequat iaculis.</li>
								</ul>

								<h2>
									<a name="fou" id="fou"></a>Section Fou
								</h2>

								<h3>Question One?</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>

								<h3>Question Two?</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>

								<h3>Question Thr?</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>
								<ul>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Vivamus non arcu varius, sagittis tortor et, eleifend ante.</li>
									<li>Nullam viverra felis in sagittis ultricies.</li>
									<li>Donec bibendum leo et justo consequat iaculis.</li>
								</ul>

								<h2>
									<a name="fiv" id="fiv"></a>Section Fiv
								</h2>

								<h3>Question One?</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>

								<h3>Question Two?</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>

								<h3>Question Thr?</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit... blandit erat. Sed ac vestibulum dui.</p>
								<ul>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Vivamus non arcu varius, sagittis tortor et, eleifend ante.</li>
									<li>Nullam viverra felis in sagittis ultricies.</li>
									<li>Donec bibendum leo et justo consequat iaculis.</li>
								</ul>
							</div>
						</div>
						<div className="l-col">-- side content --</div>
					</div>
				</ContainerLayout>
				<Top />
				<div className="_example">
					<h4 className="_h4">HTML Code Example</h4>
					<SyntaxHighlighter language="html" style={this.state.selected}>
						{this.state.code}
					</SyntaxHighlighter>
					<input hidden value={this.state.code} onChange={({ target: { value } }) => this.setState({ value, copied: false })} />
					<CopyToClipboard text={this.state.code} onCopy={() => this.setState({ copied: true })}>
						<button>Copy to clipboard</button>
					</CopyToClipboard>
					{this.state.copied ? <span className="copied">The HTML has been copied to your clipboard.</span> : null}
				</div>
			</>
		)
	}
}

export default FAQsExampleOne
