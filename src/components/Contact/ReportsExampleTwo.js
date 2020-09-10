import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ContainerLayout from "../Containers/ContainerLayout"
import ArticleNotice from "../Placeholders/ArticleNotice"

class ReportsExampleTwo extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="article">\n  <p>Please comment by Month DD, YYYY.</p>\n  <ul class="contact">\n    <li class="head">\n      <h4>Contact Survey Manager</h4>\n    </li>\n    <li class="contact">Firstname Lastname</li>\n    <li class="contact">\n      <span class="label">Email:</span> <a href="mailto:firstname.lastname@eia.gov">firstname.lastname@eia.gov</a>\n    </li>    <li class="contact">      <span class="label">Phone:</span> <a href="tel:+1202586xxxx">(202) 586-xxxx</a>\n    </li>\n  </ul>\n</div>`
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
				<h3 className="_h3">Primary Column Report Contact Example Two</h3>
				<ContainerLayout>
					<div className="article">
						<p>Please send comments on the proposed information collection and WPSR methodology changes to:</p>
						<ul className="contact">
							<li className="head">
								<h4>Contact Survey Manager</h4>
							</li>
							<li className="contact">Sasha Abdalla</li>
							<li className="contact">
								<span className="label">Email:</span> <a href="mailto:Sasha.Abdalla@eia.gov">Sasha.Abdalla@eia.gov</a>
							</li>
							<li className="contact">
								<span className="label">Phone:</span> <a href="tel:+12022876323">(202) 287-6323</a>
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
export default ReportsExampleTwo
