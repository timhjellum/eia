import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ContainerLayout from "../Containers/ContainerLayout"
import ArticleNotice from "../Placeholders/ArticleNotice"

class ContactExampleTwo extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="article">\n  <ul class="contact">\n    <li class="head"><h4>Contacts</h4></li>\n    <li class="contact">Robert Merriam</li>\n    <li class="contact"><span class="label">Email:</span> <a href="mailto:Robert.Merriam@eia.gov">Robert.Merriam@eia.gov</a></li>\n    <li class="contact"><span class="label">Phone:</span> <a href="tel:+12025864615">(202) 586-4615</a></li>\n    <li class="title"><span class="label">Title:</span> Director, Office of Petroleum and Biofuels Statistics, Office of Energy Statistics.</li>\n    <li className="list-spacer"></li>\n    <li class="sub-head">Detailed, technical questions may be directed to:</li>\n    <li class="contact">Daniel Walzer</li>\n    <li class="contact"><span class="label">Email:</span> <a href="mailto:Daniel.Walzer@eia.gov">Daniel.Walzer@eia.gov</a></li>\n    <li class="contact"><span class="label">Phone:</span> <a href="tel:+12025863511">(202) 586-3511</a></li>\n    <li class="contact"><span class="label">Fax:</span> (202) 287-1944</li>\n    <li class="foot"><a href="/about/contact/coal.php">Coal Data Contacts</a></li>\n  </ul>\n</div>`
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
				<h3 className="_h3">Primary Column Example Two</h3>
				<ContainerLayout>
					<div className="article">
						<ul className="contact">
							<li className="head">
								<h4>Contacts</h4>
							</li>
							<li className="contact">Robert Merriam</li>
							<li className="contact">
								<span className="label">Email:</span> <a href="mailto:Robert.Merriam@eia.gov">Robert.Merriam@eia.gov</a>
							</li>
							<li className="contact">
								<span className="label">Phone:</span> <a href="tel:+12025864615">(202) 586-4615</a>
							</li>
							<li className="title">
								<span className="label">Title:</span> Director, Office of Petroleum and Biofuels Statistics, Office of Energy Statistics.
							</li>
							<li className="list-spacer"></li>
							<li className="sub-head">Detailed, technical questions may be directed to:</li>
							<li className="contact">Daniel Walzer</li>
							<li className="contact">
								<span className="label">Email:</span> <a href="mailto:Daniel.Walzer@eia.gov">Daniel.Walzer@eia.gov</a>
							</li>
							<li className="contact">
								<span className="label">Phone:</span> <a href="tel:+12025863511">(202) 586-3511</a>
							</li>
							<li className="contact">
								<span className="label">Fax:</span> (202) 287-1944
							</li>
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
export default ContactExampleTwo
