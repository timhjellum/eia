import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ContainerLayout from "../Containers/ContainerLayout"

class AccessibilityButton extends Component {
	constructor() {
		super()
		const initialCodeString = `<div className="button-container">\n   <button type="submit" id="submitFeedback" tabIndex="0" role="button" className="submit">\n      Submit Feedback\n   </button>\n</div>`
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
				<h3 className="_h3">Accessible Button</h3>
				<p className="_accessibility _p">
					<strong>
						<span className="_accessibility-requirement">Accessibility requirement: </span>
					</strong>
				</p>
				<ul className="_accessibility _ul _bullet">
					<li className="_accessibility _li">
						The <code>role="button"</code> lets screen-readers know the element is a button
					</li>
					<li className="_accessibility _li">
						the <code>id="submitFeedback"</code> should describe the function of the button
					</li>
					<li className="_accessibility _li">
						The <code>tabindex="0"</code> allows elements besides links and form elements to receive keyboard focus. It does not change the tab order, but places the element in the logical navigation flow, as if it were a link on the page.
					</li>
				</ul>
				<ContainerLayout>
					<div className="button-container">
						<button type="submit" id="submitFeedback" tabIndex="0" role="button" className="submit">
							This is a button
						</button>
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

export default AccessibilityButton
