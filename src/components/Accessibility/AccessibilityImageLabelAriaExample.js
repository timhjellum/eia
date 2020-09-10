import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ContainerLayout from "../Containers/ContainerLayout"

class AccessibilityImageLabelAriaExample extends Component {
	constructor() {
		super()
		const initialCodeString = `<div className="image-container">\n   <img src="/" alt="Bab el-Mandeb Strait" aria-describedby="BabelMandebStrait" className="responsive" />\n</div>\n<!-- anywhere on page -->\n<p id="BabelMandebStrait" className="eia-accessibility-link-description">\n   The photo is of the Bab el-Mandeb Strait lorem ipsum dolor sit amet...\n</p>`
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
				<h3 className="_h3">Image with Accessible Label</h3>
				<p className="_accessibility _p">
					<strong>
						<span className="_accessibility _accessibility-requirement">Accessibility requirement: </span>
					</strong>
				</p>
				<p className="_accessibility _p">
					Developers can provide accessible names to images with the <code>aria-label</code> and <code>aria-labelledby</code> attributes. When these attributes are present, assistive technology will ignore the image’s alt text and read the ARIA label instead.
				</p>
				<p className="_accessibility _p">
					Associate text elsewhere on the page using the <code>aria-describedby</code> attribute. This can be particularly helpful when using captions for complex images.
				</p>
				<ContainerLayout>
					<div className="l-row l-two-col-right">
						<div className="l-col">
							<div className="image-container">
								<img src={require("../../assets/images/main.png")} alt="Bab el-Mandeb Strait" aria-describedby="BabelMandebStrait" className="responsive" />
							</div>
							{/*<!-- anywhere on page -->*/}
							<p id="BabelMandebStrait" className="eia-accessibility-link-description">
								The photo is of the Bab el-Mandeb Strait lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.
							</p>
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

export default AccessibilityImageLabelAriaExample
