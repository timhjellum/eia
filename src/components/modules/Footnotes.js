import React, { Component } from "react"

import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ContainerLayout from "../Containers/ContainerLayout"

class Footnotes extends Component {
	constructor() {
		super()
		const initialCodeString = `<p class="footnotes">\n   Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /><br />\n   Donec libero lacus, molestie a porttitor eu, dapibus at ipsum.\n</p>`
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
				<h3 className="_h3">Stand-alone Footnotes</h3>
				<p className="_p">
					Adding a <code>class="footnotes"</code> to a paragraph (&lt;p&gt;).
				</p>
				<ContainerLayout>
					<p class="footnotes">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan nisi massa, vel ultricies ipsum sagittis vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
						<br />
						<br />
						Donec libero lacus, molestie a porttitor eu, dapibus at ipsum. Vivamus elementum erat id lorem suscipit ultricies. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nunc nec erat eleifend feugiat. Integer eget venenatis lectus. Curabitur dignissim condimentum dolor, mattis malesuada ipsum sagittis id. Morbi ullamcorper pulvinar accumsan. Vestibulum quis pretium odio.
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

export default Footnotes
