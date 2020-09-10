import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ContainerLayout from "../Containers/ContainerLayout"

class AccessibilityLinkDescriptionAriaExample extends Component {
	constructor() {
		super()
		const initialCodeString = `<a href="/" aria-describedby="foo">Some link text</a>\n<p id="foo" class="eia-accessibility-link-description">A description for the link above</p>`
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
				<h3 className="_h3">Link with Description</h3>
				<p className="_accessibility _p">
					<strong>
						<span className="_accessibility _accessibility-requirement">Accessibility requirement: </span>
					</strong>
				</p>
				<ContainerLayout>
					<a href="/" aria-describedby="foo">
						Some link text
					</a>
					<p id="foo" className="eia-accessibility-link-description">
						A description for the link above
					</p>
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

export default AccessibilityLinkDescriptionAriaExample
