import React, { Component } from "react"

import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

import LoremIpsumOL from "../Placeholders/LoremIpsumOL"
import LoremIpsumUL from "../Placeholders/LoremIpsumUL"
import ContainerLayout from "../Containers/ContainerLayout"

class ParagraphListHeader extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="article">\n   <p class="list-header">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit:\n   </p>\n   <ul>\n      <li>Lorem ipsum dolor sit amet</li>\n      <li>Aliquam ornare ligula ac blandit pretium</li>\n      <li>Curabitur luctus eros id ligula iaculis</li>\n   </ul>\n</div>`
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
				<h3 className="_h3">Paragraph List Header</h3>
				<p className="_p">
					<strong>Examples</strong> Notice the colon <code>:</code> at the end of the sentence. Generally, you can think of a colon as a punctuation mark that anticipates something additional coming.
				</p>
				<ContainerLayout>
					<div className="l-row l-two-col-even">
						<div className="l-col">
							<p className="_p">
								<strong>Good Usage</strong>
							</p>
							<div className="article">
								<p className="list-header">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus:</p>
								<LoremIpsumUL />
							</div>
						</div>
						<div className="l-col">
							<p className="_p">Bad Usage</p>
							<div className="article">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.</p>
								<LoremIpsumUL />
							</div>
						</div>
					</div>
				</ContainerLayout>

				<h4 className="_h4">Unordered List</h4>
				<ContainerLayout>
					<div className="article">
						<p className="list-header">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus:</p>
						<LoremIpsumUL />
					</div>
				</ContainerLayout>

				<h4 className="_h4">Ordered List</h4>
				<ContainerLayout>
					<div className="article">
						<p className="list-header">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus:</p>
						<LoremIpsumOL />
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

export default ParagraphListHeader
