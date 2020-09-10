import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

import ContainerLayout from "../Containers/ContainerLayout"
import ImageAlt from "./ImageAlt"

class ResponsiveImage extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="image-container">\n  <img src="/" alt="Refer to: Alt tags best practices" class="responsive" />\n</div>`
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
				<h3 className="_h3">Responsive Image Container</h3>

				{/* <ImageAlt /> */}

				<p className="_p">Example of the same image and how it scales in different width columns</p>
				<ContainerLayout>
					<div className="l-row l-two-col-right">
						<div className="l-col">
							<div className="image-container">
								<img src={require("../../assets/images/main.png")} alt="Bab el-Mandeb Strait" className="responsive" />
							</div>
						</div>
						<div className="l-col">
							<div className="image-container">
								<img src={require("../../assets/images/main.png")} alt="Bab el-Mandeb Strait" className="responsive" />
							</div>
						</div>
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
export default ResponsiveImage
