import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

class ThemeUpcomingReleases extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="primary hide-mt">\n    <ul class="upcoming-releases">\n    <li class="head">\n      <h2>Upcoming Releases</h2>\n    </li>\n    <li>\n      <a href="/" title="Gasoline and Diesel Fuel Update" class="link-label">\n        Gasoline and Diesel Fuel Update<em>: 5:00 p.m. ET, Monday</em>\n      </a>\n    </li>\n    <li>\n      <a href="" title="" class="link-label">\n        <em>: </em>\n      </a>\n    </li>\n    <li class="foot"><a href="/">See all upcoming</a></li>\n  </ul>\n</div>`
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
				<div className="primary hide-mt">
					<ul className="upcoming-releases">
						<li className="head">
							<h2>Upcoming Releases </h2>
						</li>
						<li>
							<a href="/petroleum/gasdiesel/" title="Gasoline and Diesel Fuel Update" className="link-label">
								Gasoline and Diesel Fuel Update<em>: 5:00 p.m. ET, Monday</em>
							</a>
						</li>
						<li>
							<a href="/petroleum/supply/weekly/" title="Weekly Petroleum Status Report" className="link-label">
								Weekly Petroleum Status Report<em>: 10:30 a.m. ET, Wednesday</em>
							</a>
						</li>
						<li>
							<a href="/petroleum/heatingoilpropane/" title="Heating Oil and Propane Update" className="link-label">
								Heating Oil and Propane Update<em>: After 1:00 p.m. ET, Wednesday (Oct - March only)</em>
							</a>
						</li>
						<li>
							<a href="/petroleum/weekly/" title="This Week in Petroleum" className="link-label">
								This Week in Petroleum<em>: After 1:00 p.m. ET, Wednesday</em>
							</a>
						</li>
						<li style={{ display: "none" }}>
							<a href="" title="" className="link-label">
								<em>: </em>
							</a>
						</li>
						<li style={{ display: "none" }}>
							<a href="" title="" className="link-label">
								<em>: </em>
							</a>
						</li>
						<li className="foot">
							<a href="/reports/upcoming.php">See all upcoming</a>
						</li>
					</ul>
				</div>
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

export default ThemeUpcomingReleases
