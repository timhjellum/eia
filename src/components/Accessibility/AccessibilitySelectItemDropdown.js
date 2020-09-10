import React, { Component } from "react"
import FormLayout from "../Containers/FormLayout"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

import IconicListItems from "../IconicListItems/IconicListItems"

class AccessibilitySelectItemDropdown extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="form-container" style="width: 250px"><!-- set or inherit width here -->\n   <fieldset>\n      <legend>Select an item:</legend>\n      <div class="dropdown-container">\n         <div class="dropdown-button">\n            <span class="text" for="previousReports">Select Year</span>\n            <span class="ico d-arrow">\n               <span>dropdown arrow</span>\n            </span>\n         </div>\n         <div class="dropdown-menu">\n            <ul id="previousReports">\n               <li class="ico pdf">\n                  <a href="/">2020</a>\n               </li>\n               <li class="ico pdf">\n                  <a href="/">2019</a>\n               </li>\n               <li class="ico pdf">\n                  <a href="/">2018</a>\n               </li>\n               <li>\n                  <a href="/">See all</a>\n               </li>\n            </ul>\n         </div>\n      </div>\n   </fieldset>\n</div>`
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
				<h3 className="_h3">Accessible EIA Branded Select</h3>
				<p className="_accessibility _p">
					<strong>
						<span className="_accessibility-requirement">Accessibility requirement: </span>
					</strong>
				</p>
				<ul className="_accessibility _ul _bullet">
					<li className="_accessibility _li">
						The <code>for="previousReports"</code> associates the label with the form input
					</li>
					<li className="_accessibility _li">
						The <code>id="previousReports"</code> should reference the label <code>for="previousReports"</code>
					</li>
					<li className="_accessibility _li">
						The <code>&lt;fieldset&gt;...&lt;/fieldset&gt;</code> and <code>&lt;legend&gt;&lt;/legend&gt;</code> should be utilized
					</li>
				</ul>

				<FormLayout>
					<div className="form-container" style={{ width: 255 + "px" }}>
						<fieldset>
							<legend>Previous reports</legend>
							<div className="dropdown-container">
								<div className="dropdown-button">
									<span className="text" htmlFor="previousReports">
										Select Year
									</span>
									<span className="ico d-arrow">
										<span>dropdown arrow</span>
									</span>
								</div>
								<div className="dropdown-menu">
									<ul id="previousReports">
										<li className="ico pdf">
											<a href="/">2020</a>
										</li>
										<li className="ico pdf">
											<a href="/">2019</a>
										</li>
										<li className="ico pdf">
											<a href="/">2018</a>
										</li>
										<li>
											<a href="/">See all</a>
										</li>
									</ul>
								</div>
							</div>
						</fieldset>
					</div>
				</FormLayout>

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
				<p className="_accessibility _p">The dropdown menu can be styled by using Iconic Listitems.</p>
				<IconicListItems />
			</>
		)
	}
}
export default AccessibilitySelectItemDropdown
