import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ContainerLayout from "../Containers/ContainerLayout"

class PrimaryExample extends Component {
	constructor() {
		super()
		const initialCodeString = `<div className="primary hide-mt">\n  <ul>\n    <li className="head"><h2>Lorem ipsum dolor sit amet consectetur</h2></li>\n    <li><a href="https://www.eia.gov">1) Lorem ipsum dolor sit amet</a></li>\n    <li><a href="">2) This should be hidden</a></li>\n    <li><a href="https://www.eia.gov">3) Lorem ipsum dolor sit amet</a></li>\n    <li><a href="">4) This should be hidden</a></li>\n    <li><a href="https://www.eia.gov">5) Lorem ipsum dolor sit amet</a></li>\n  </ul>\n</div>`
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
				<h3 className="_h3">Primary</h3>
				<code>.hide-mt</code>
				<ContainerLayout>
					<div className="primary hide-mt">
						<ul>
							<li className="head">
								<h2>Lorem ipsum dolor sit amet consectetur</h2>
							</li>
							<li>
								<a href="https://www.eia.gov">1) Lorem ipsum dolor sit amet</a>
							</li>
							<li>
								<a href="https://www.eia.gov">2) Lorem ipsum dolor sit amet</a>
							</li>
							<li>
								<a href="https://www.eia.gov">3) Lorem ipsum dolor sit amet</a>
							</li>
							<li>
								<a href="https://www.eia.gov">4) Lorem ipsum dolor sit amet</a>
							</li>
							<li>
								<a href="https://www.eia.gov">5) Lorem ipsum dolor sit amet</a>
							</li>
						</ul>
					</div>
				</ContainerLayout>
				<ContainerLayout>
					<div className="primary hide-mt">
						<ul>
							<li className="head">
								<h2>Lorem ipsum dolor sit amet consectetur</h2>
							</li>
							<li>
								<a href="https://www.eia.gov">1) Lorem ipsum dolor sit amet</a>
							</li>
							<li>
								<a href="">2) This should be hidden</a>
							</li>
							<li>
								<a href="https://www.eia.gov">3) Lorem ipsum dolor sit amet</a>
							</li>
							<li>
								<a href="">4) This should be hidden</a>
							</li>
							<li>
								<a href="https://www.eia.gov">5) Lorem ipsum dolor sit amet</a>
							</li>
						</ul>
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
export default PrimaryExample
