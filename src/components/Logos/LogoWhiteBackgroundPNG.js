import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import EIALogoWhtBGPNG from "../../assets/images/eia-logo-wht-bg.png"

class LogoWhiteBackgroundPNG extends Component {
	constructor() {
		super()
		const initialCodeString = `<img src="https://wwwdev.eia.gov/adaptive/style-guide/assets/images/eia-logo-wht-bg.png" alt="EIA Logo White Background PNG">`
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
				<h3 className="_h3">PNG</h3>
				<div className="logo-logo-white-background">
					<img src={EIALogoWhtBGPNG} alt="EIA Logo White Background PNG" />
				</div>
				<div className="_example">
					<h4 className="_h4">HTML Code Example</h4>
					<p className="_p">For download only</p>
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

export default LogoWhiteBackgroundPNG
