import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ContainerLayout from "../Containers/ContainerLayout"
import ExamplesOfAllLists from "../Themes/ExamplesOfAllLists"

class AccordionFirstOpen extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="primary">\n  <span class="expand-collapse-container">\n    <span class="ico expand">\n      <span>Expand all</span>\n    </span>\n    <span class="ico collapse">\n      <span>Collapse all</span>\n    </span>\n  </span>\n  <div class="accordion first-open">\n    <h3>Lorem ipsum dolor sit amet</h3>\n    <div class="accordion-content">\n      <ul>\n        <li className="head">Lorem ipsum dolor sit amet</li>\n        <li>Lorem ipsum dolor sit amet</li>\n      </ul>\n    </div>\n    <h3>Lorem ipsum dolor sit amet</h3>\n    <div class="accordion-content">\n      <ul>\n        <li class="head">Lorem ipsum dolor sit amet</li>\n        <li>Lorem ipsum dolor sit amet</li>\n      </ul>\n    </div>\n    <h3>Lorem ipsum dolor sit amet</h3>\n    <div class="accordion-content">\n      <ul>\n        <li class="head">Lorem ipsum dolor sit amet</li>\n        <li>Lorem ipsum dolor sit amet</li>\n      </ul>\n    </div>\n  </div>\n</div>`
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
				<h3 className="_h3">First Open</h3>
				<p>
					Add <code>first-open</code> to the accordion <code>div</code>.
				</p>
				<pre>
					<code className="html">&lt;div class=&#34;accordion first-open&#34;&gt;</code>
				</pre>
				<ContainerLayout>
					<div className="l-row l-full-width-col header">
						<div className="l-col">
							<span className="expand-collapse-container">
								<span className="ico expand">
									<span>Expand all</span>
								</span>
							</span>
							<div className="accordion first-open">
								<h3 className="ui-accordion-header" tabIndex="-1">
									<span className="ui-accordion-header-icon ui-icon ico collapse" style={{ display: "block" }}></span>
									Introduction
								</h3>
								<div className="accordion-content" style={{ display: "block" }}>
									<ExamplesOfAllLists />
								</div>
								<h3>
									<span className="ui-accordion-header-icon ui-icon ico expand" style={{ display: "block" }}></span>
									Current
								</h3>
								<div className="accordion-content" style={{ display: "none" }}></div>
								<h3>
									<span className="ui-accordion-header-icon ui-icon ico expand" style={{ display: "block" }}></span>
									Discontinued
								</h3>
								<div className="accordion-content" style={{ display: "none" }}></div>
							</div>
						</div>
					</div>
				</ContainerLayout>
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
export default AccordionFirstOpen
