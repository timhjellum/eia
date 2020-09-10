import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

import ContainerLayout from "../Containers/ContainerLayout"

class ImageDescriptions extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="image-container">\n<img src="path to image"\n  alt="See above: ALT TAGS BEST PRACTICES"\n  class="responsive"\n   aria-describedby="description">\n  <p id="description">refer to the: Long Description Best Practices</p>\n</div>`
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
				<h3 className="_h3">Image Descriptions</h3>
				{/*
				<h4 className="_h4">
					<a href="alt-text-long-descriptions" id="alt-text-long-descriptions"></a>Long&nbsp;Description Best Practices
				</h4>
				<p className="_p">Whenever a page presents images and other non-text content, it should present text alternatives. These text alternatives provide the same information presented by the image.</p>
				<p className="_p">
					The most common form text alternative is <code>alt</code> text. <code>alt</code> text is a brief label contained in the HTML code for the image. Content editors can generally provide <code>alt</code> text at the same time they upload images into websites. Screen readers read <code>alt</code> text aloud, and browsers pages <code>alt</code> text when images fails to load.
				</p>
				<p className="_p">
					Long descriptions are lengthier amounts of text provided nearby the image, such as in the next paragraph. Long descriptions are helpful when a brief <code>alt</code> text is not enough to convey information, such as in a complex chart or graph.
				</p>
				<p className="_p">
					(Developers and content editors should avoid using the <code>longdesc</code> HTML attribute altogether. Confusingly, long descriptions never should be provided directly in the <code>longdesc</code>.)
				</p>
				<p className="_p">Example of the same image and how it scales in different width columns</p>
				*/}
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
export default ImageDescriptions
