import React, { Component } from "react"

import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ContainerLayout from "../Containers/ContainerLayout"

class ThemeReleaseSchedule extends Component {
	constructor() {
		super()
		const initialCodeString = `<ul>\n  <li class="release-schedule">Lorem ipsum dolor sit amet</li>\n  <li class="release-schedule">Lorem ipsum dolor sit amet</li>\n  <li class="release-schedule">Lorem ipsum dolor sit amet</li>\n</ul>\n`
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
				{/* start list item */}
				<h3 className="_h3">Release Schedule</h3>
				<ContainerLayout>
					<div className="l-row l-three-col-even">
						<div className="l-col">
							<p className="_p">{this.state.isArticle ? "Article" : "Secondary"}</p>
						</div>
						<div className="l-col">
							<p className="_p">{this.state.isPrimary ? "Primary" : "Secondary Alt"}</p>
						</div>
						<div className="l-col">
							<p className="_p">{this.state.isPrimaryAlt ? "Primary-Alt" : null}</p>
						</div>
					</div>
					<div className="l-row l-three-col-even">
						<div className={`l-col ${this.state.isArticle ? "article" : "secondary"}`}>
							<ul>
								<li className="release-schedule">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								<li className="release-schedule">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								<li className="release-schedule">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							</ul>
						</div>
						<div className={`l-col ${this.state.isPrimary ? "primary" : "secondary-alt"}`}>
							<ul>
								<li className="release-schedule">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								<li className="release-schedule">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								<li className="release-schedule">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							</ul>
						</div>
						<div className={`l-col ${this.state.isPrimaryAlt ? "primary-alt" : "_hide-list"}`}>
							<ul>
								<li className="release-schedule">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								<li className="release-schedule">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								<li className="release-schedule">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							</ul>
						</div>
					</div>
				</ContainerLayout>
				{/* end list item */}

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

export default ThemeReleaseSchedule
