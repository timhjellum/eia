import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ContainerLayout from "../Containers/ContainerLayout"

class EnergyEducation extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="l-row l-three-col-even energy-education">\n  <h1>Energy Education</h1>\n  <div class="l-col">\n    <span class="ico energy-education petroleum"></span>\n      <ul>\n        <li class="head">\n          <h2>\n            <a href="https://www.eia.gov">Oil: Crude &amp; Petroleum Products Explained</a>\n          </h2>\n        </li>\n        <li class="sub-head">\n            <a href="https://www.eia.gov">Gasoline Prices and Outlook</a>\n        </li>\n        <li class="foot">\n            <a href="https://www.eia.gov">See more petroleum topics</a>\n        </li>\n      </ul>\n  </div>\n  <div class="l-col">\n    <span class="ico energy-education faq"></span>\n      <ul>\n        <li class="head">\n          <h2>\n            <a href="https://www.eia.gov">FAQs</a>\n          </h2>\n        </li>\n        <li class="sub-head">\n            <a href="https://www.eia.gov">What are Mcf, Btu, and therms? How do I convert prices in Mcf to Btu's and therms?</a>\n        </li>\n        <li class="foot">\n            <a href="https://www.eia.gov">See all petroleum FAQs</a>\n        </li>\n      </ul>\n  </div>\n  <div class="l-col">\n    <span class="ico energy-education energy-kids"></span>\n      <ul>\n        <li class="head">\n          <h2>\n          <a href="https://www.eia.gov">Energy Kids</a>\n          </h2>\n        </li>\n        <li class="sub-head">\n          <a href="https://www.eia.gov">How was oil formed?</a>\n        </li>\n        <li class="foot">\n          <a href="https://www.eia.gov">See nonrenewable sources on Energy Kids</a>\n        </li>\n      </ul>\n  </div>\n</div>`
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
				<h3 className="_h3">Energy Education</h3>
				<ContainerLayout>
					<div className="l-row l-three-col-even energy-education">
						<h1>Energy Education</h1>
						<div className="l-col">
							<span className="ico energy-education petroleum"></span>
							<ul>
								<li className="head">
									<h2>
										<a href="https://www.eia.gov">Oil: Crude &amp; Petroleum Products Explained</a>
									</h2>
								</li>
								<li className="sub-head">
									<a href="https://www.eia.gov">Gasoline Prices and Outlook</a>
								</li>
								<li className="foot">
									<a href="https://www.eia.gov">See more petroleum topics</a>
								</li>
							</ul>
						</div>
						<div className="l-col">
							<span className="ico energy-education faq"></span>
							<ul>
								<li className="head">
									<h2>
										<a href="https://www.eia.gov">FAQs</a>
									</h2>
								</li>
								<li className="sub-head">
									<a href="https://www.eia.gov">What are Mcf, Btu, and therms? How do I convert prices in Mcf to Btu's and therms?</a>
								</li>
								<li className="foot">
									<a href="https://www.eia.gov">See all petroleum FAQs</a>
								</li>
							</ul>
						</div>
						<div className="l-col">
							<span className="ico energy-education energy-kids"></span>
							<ul>
								<li className="head">
									<h2>
										<a href="https://www.eia.gov">Energy Kids</a>
									</h2>
								</li>
								<li className="sub-head">
									<a href="https://www.eia.gov">How was oil formed?</a>
								</li>
								<li className="foot">
									<a href="https://www.eia.gov">See nonrenewable sources on Energy Kids</a>
								</li>
							</ul>
						</div>
					</div>
				</ContainerLayout>
				<div className="_example">
					<h4 className="_h4">HTML Code </h4>
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
export default EnergyEducation
