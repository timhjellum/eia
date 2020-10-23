import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ContainerLayout from "../Containers/ContainerLayout"
import PrimaryLists from "../Themes/PrimaryLists"

class AccordionAllOpen extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="primary">\n  <div class="all-open">\n    <h3>Lorem ipsum dolor sit amet</h3>\n    <div class="accordion-content">\n      <ul>\n        <li className="head">Lorem ipsum dolor sit amet</li>\n        <li>Lorem ipsum dolor sit amet</li>\n      </ul>\n    </div>\n    <h3>Lorem ipsum dolor sit amet</h3>\n    <div class="accordion-content">\n      <ul>\n        <li class="head">Lorem ipsum dolor sit amet</li>\n        <li>Lorem ipsum dolor sit amet</li>\n      </ul>\n    </div>\n    <h3>Lorem ipsum dolor sit amet</h3>\n    <div class="accordion-content">\n      <ul>\n        <li class="head">Lorem ipsum dolor sit amet</li>\n        <li>Lorem ipsum dolor sit amet</li>\n      </ul>\n    </div>\n  </div>\n</div>`
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
				<h3 className="_h3">All Open</h3>
				<p>
					Add <code>all-open</code> to the accordion <code>div</code>
				</p>
				<pre>
					<code className="html">&lt;div class=&#34;accordion all-open&#34;&gt;Current&lt;/h3&gt;</code>
				</pre>
				<ContainerLayout>
					<div className="l-row l-full-width-col header">
						<div className="l-col">
							<div className="all-open">
								<h3>Introduction</h3>
								<div className="accordion-content" style={{ display: "block" }}>
									<PrimaryLists />
								</div>
								<h3>Current</h3>
								<div className="accordion-content" style={{ display: "block" }}>
									<PrimaryLists />
								</div>
								<h3>Discontinued</h3>
								<div className="accordion-content" style={{ display: "block" }}>
									<PrimaryLists />
								</div>
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
export default AccordionAllOpen
