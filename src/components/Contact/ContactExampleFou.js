import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ContainerLayout from "../Containers/ContainerLayout"
import ArticleNotice from "../Placeholders/ArticleNotice"

class ContactExampleFou extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="article">\n  <ul class="contact">\n    <li class="head"><h4>About the author</h4></li>\n    <li class="author">Elizabeth Sendich</li>\n    <li class="title">Lead Industry Economist/ Economist</li>\n    <li className="list-spacer"></li>\n    <li class="list-seperator"></li>\n    <li class="contact"><a href="mailto:Elizabeth.Sendich@eia.gov">Elizabeth.Sendich@eia.gov</a></li>\n    <li class="contact"><a href="tel:+1202586-4412">(202) 586-4412</a></li>\n  </ul>\n  <p>Lorem ipsum dolor sit amet.</p>\n</div>`
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
				<h3 className="_h3">Secondary Column</h3>
				<ul className="_ul">
					<li className="_li">page-layout used in example: l-two-col-right</li>
					<li className="_li">
						live page where this module is used:
						<a href="https://wwwdev.eia.gov/outlooks/ieo/section_issue_aiso.php">https://wwwdev.eia.gov/outlooks/ieo/section_issue_aiso.php</a>
					</li>
				</ul>
				<ContainerLayout>
					<div className="article">
						<ul className="contact">
							<li className="head">
								<h4>About the author</h4>
							</li>
							<li className="author">Elizabeth Sendich</li>
							<li className="title">Lead Industry Economist/ Economist</li>
							<li className="list-spacer"></li>
							<li className="contact">
								<a href="mailto:Elizabeth.Sendich@eia.gov">Elizabeth.Sendich@eia.gov</a>
							</li>
							<li className="contact">
								<a href="tel:+1202586-4412">(202) 586-4412</a>
							</li>
						</ul>
						<p>Elizabeth Sendich, PhD, is Lead Industry Economist on the Macroeconomic Analysis Team. She helps maintain EIA’s long-term production forecasts and enhances public understanding of important issues related to the industrial sector, including manufacturing, construction, mining, and agriculture. She is responsible for the integrated modeling of a diverse set of industries across the world and for analysis of topics important to the sector, such as trade, supply chains, and technology.</p>
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

export default ContactExampleFou
