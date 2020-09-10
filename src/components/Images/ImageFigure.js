import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

import ContainerLayout from "../Containers/ContainerLayout"

class ImageFigure extends Component {
	constructor() {
		super()
		const initialCodeString = `n<figure>\n   <img src={require("../../assets/images/main.png")} alt="Bab el-Mandeb Strait" />\n   <figcaption>The Bab el-Mandeb Strait</figcaption>\n</figure>`
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
				<h3 className="_h3">Image Figure and Figure Caption</h3>
				<p className="_accessibility _p">
					<strong>
						<span className="_accessibility _accessibility-requirement">Accessibility requirement: </span>
					</strong>
				</p>
				<p className="_accessibility _p">
					The <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> to associate visible text with an image. When using&nbsp;<code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;,</code> the <code>alt</code> attribute can be more minimal, and the <code>&lt;figcaption&gt;</code> can be more expressive. The <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code> elements can be used for groups of images, as well.
				</p>
				<ContainerLayout>
					<div className="l-row l-two-col-right">
						<div className="l-col">
							<figure>
								<img src={require("../../assets/images/main.png")} alt="Bab el-Mandeb Strait" />
								<figcaption>The Bab el-Mandeb Strait</figcaption>
							</figure>
						</div>
						<div className="l-col"></div>
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
export default ImageFigure
