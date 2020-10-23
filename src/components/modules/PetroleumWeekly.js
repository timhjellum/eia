import React, { Component } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"
import ContainerLayout from "../Containers/ContainerLayout"

class PetroleumWeekly extends Component {
	constructor() {
		super()
		const initialCodeString = `<div className="l-row l-report-header-petroleum-weekly l-two-col-even">\n    <div className="l-col">\n    <!-- see the default report header -->\n    </div>\n    <div className="l-col twip-navigation">\n        <a href="index.php" className="ico this-week-analysis active">\n            <span>Analysis</span> <!-- for accessibility -->\n        </a>\n        <a href="crude.php" div="" className="ico crude-oil">\n            <span>Crude Oil</span> <!-- for accessibility -->\n        </a>\n        <a href="gasoline.php" className="ico gasoline">\n            <span>Gasoline</span> <!-- for accessibility -->\n        </a>\n        <a href="distillate.php" className="ico distillate">\n            <span>Distillate</span> <!-- for accessibility -->\n        </a>\n        <a href="propane.php" className="ico propane">\n            <span>Propane</span> <!-- for accessibility -->\n        </a>\n    </div>\n</div>`
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
				<h3 className="_h3">Petroleum Weekly</h3>
				<p className="_p">
					Example: <a href="http://www.eia.gov/petroleum/weekly">http://www.eia.gov/petroleum/weekly</a>
				</p>

				<ContainerLayout>
					<div className="l-row l-report-header-petroleum-weekly l-two-col-even">
						<div className="l-col">
							<div className="see-all">
								<a href="/">See all Petroleum &amp; Other Liquids Reports</a>
							</div>
							<h1>This Week in Petroleum</h1>
							<div className="release-dates">
								<span className="responsive-container">
									<span className="label">Release Date:</span> <span className="date">September 10, 2020</span>
								</span>
								<span className="responsive-container">
									<span className="label">Next Release Date:</span> <span className="date">September 16, 2020</span>
								</span>
							</div>
							<div className="release-dates do-not-print">
								<span className="responsive-container">
									<a href="/" className="ico download iframe">
										Download data
									</a>
								</span>
								<span className="responsive-container">
									<a href="/" className="iframe">
										Past Weeks{/* in Petroleum */}
									</a>
								</span>
								<span className="responsive-container">
									<a href="/" className="iframe">
										Release schedule
									</a>
								</span>
								<span className="responsive-container">
									<a href="/" className="iframe ico printer">
										Print
									</a>
								</span>
							</div>
						</div>
						<div className="l-col twip-navigation">
							<a href="index.php" className="ico this-week-analysis active">
								<span>Analysis</span>
							</a>
							<a href="crude.php" div="" className="ico crude-oil">
								<span>Crude Oil</span>
							</a>
							<a href="gasoline.php" className="ico gasoline">
								<span>Gasoline</span>
							</a>
							<a href="distillate.php" className="ico distillate">
								<span>Distillate</span>
							</a>
							<a href="propane.php" className="ico propane">
								<span>Propane</span>
							</a>
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
export default PetroleumWeekly
