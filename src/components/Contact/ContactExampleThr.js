import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ContainerLayout from "../Containers/ContainerLayout"
import ArticleNotice from "../Placeholders/ArticleNotice"

class ContactExampleThr extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="article">\n  <ul class="contact">\n    <li class="foot"><a href="/about/contact/coal.php">Coal Data Contacts</a></li>\n  </ul>\n</div>`
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
				<h3 className="_h3">Primary Column Example Three</h3>
				<ContainerLayout>
					<div className="article">
						<ul className="contact">
							<li className="foot">
								<a href="/about/contact/coal.php">Coal Data Contacts</a>
							</li>
						</ul>
					</div>
				</ContainerLayout>
				<ArticleNotice />

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

export default ContactExampleThr
