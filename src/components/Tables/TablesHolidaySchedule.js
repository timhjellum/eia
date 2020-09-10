import React, { Component } from "react"

import { CopyToClipboard } from "react-copy-to-clipboard"
import SyntaxHighlighter from "react-syntax-highlighter"
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs"

import ContainerWrapper from "../Containers/ContainerWrapper"
import ContainerLayout from "../Containers/ContainerLayout"

class HolidaySchedule extends Component {
	constructor() {
		super()
		const initialCodeString = `<div class="table-wrapper">\n   <table class="basic-table schedule full-width align-left-col-2 align-left-col-3 align-left-col-4 align-left-col-5">\n      <thead>\n         <tr>\n            <th scope="col">Data for the week ending</th>\n            <th scope="col">Alternate Release Date</th>\n            <th scope="col">Release Day</th>\n            <th scope="col">Release Time</th>\n            <th scope="col">Holiday</th>\n         </tr>\n      </thead>\n      <tbody>\n         <tr class="past-holiday">\n            <th scope="row">May 22, 2020</th>\n            <td>May 28, 2020</td>\n            <td>Thursday</td>\n            <td>11:00 a.m.</td>\n            <td>Memorial</td>\n         </tr>\n         <tr>\n            <th scope="row">September 4, 2020</th>\n            <td>September 10, 2020</td>\n            <td>Thursday</td>\n            <td>11:00 a.m.</td>\n            <td>Labor</td>\n         </tr>\n      </tbody>\n   </table>\n</div>`
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
				<h3 className="_h3">Holiday Release Schedule</h3>

				<ContainerLayout>
					<div className="table-wrapper">
						<table className="basic-table schedule full-width align-left-col-2 align-left-col-3 align-left-col-4 align-left-col-5">
							<thead>
								<tr>
									<th scope="col">Data for the week ending</th>
									<th scope="col">Alternate Release Date</th>
									<th scope="col">Release Day</th>
									<th scope="col">Release Time</th>
									<th scope="col">Holiday</th>
								</tr>
							</thead>
							<tbody>
								<tr className="past-holiday">
									<th scope="row">December 28, 2018</th>
									<td>January 4, 2019</td>
									<td>Friday</td>
									<td>11:00 a.m.</td>
									<td>New Year's</td>
								</tr>
								<tr className="past-holiday">
									<th scope="row">January 18, 2019</th>
									<td>January 24, 2019</td>
									<td>Thursday</td>
									<td>11:00 a.m.</td>
									<td>Martin Luther King Jr.</td>
								</tr>
								<tr className="past-holiday">
									<th scope="row">February 15, 2019</th>
									<td>February 21, 2019</td>
									<td>Thursday</td>
									<td>11:00 a.m.</td>
									<td>President's</td>
								</tr>
								<tr className="past-holiday">
									<th scope="row">May 24, 2019</th>
									<td>May 30, 2019</td>
									<td>Thursday</td>
									<td>11:00 a.m.</td>
									<td>Memorial</td>
								</tr>
								<tr className="past-holiday">
									<th scope="row">August 30, 2019</th>
									<td>September 5, 2019</td>
									<td>Thursday</td>
									<td>11:00 a.m.</td>
									<td>Labor</td>
								</tr>
								<tr className="past-holiday">
									<th scope="row">October 11, 2019</th>
									<td>October 17, 2019</td>
									<td>Thursday</td>
									<td>11:00 a.m.</td>
									<td>Columbus</td>
								</tr>
								<tr className="past-holiday">
									<th scope="row">November 8, 2019</th>
									<td>November 14, 2019</td>
									<td>Thursday</td>
									<td>11:00 a.m.</td>
									<td>Veterans</td>
								</tr>
								<tr className="past-holiday">
									<th scope="row">December 20, 2019</th>
									<td>December 27, 2019</td>
									<td>Friday</td>
									<td>11:00 a.m.</td>
									<td>Christmas</td>
								</tr>
								<tr className="past-holiday">
									<th scope="row">December 27, 2019</th>
									<td>January 3, 2020</td>
									<td>Friday</td>
									<td>11:00 a.m.</td>
									<td>New Year's</td>
								</tr>
								<tr className="past-holiday">
									<th scope="row">January 17, 2020</th>
									<td>January 23, 2020</td>
									<td>Thursday</td>
									<td>11:00 a.m.</td>
									<td>Martin Luther King Jr.</td>
								</tr>
								<tr className="past-holiday">
									<th scope="row">February 14, 2020</th>
									<td>February 20, 2020</td>
									<td>Thursday</td>
									<td>11:00 a.m.</td>
									<td>President's</td>
								</tr>
								<tr className="past-holiday">
									<th scope="row">May 22, 2020</th>
									<td>May 28, 2020</td>
									<td>Thursday</td>
									<td>11:00 a.m.</td>
									<td>Memorial</td>
								</tr>
								<tr>
									<th scope="row">September 4, 2020</th>
									<td>September 10, 2020</td>
									<td>Thursday</td>
									<td>11:00 a.m.</td>
									<td>Labor</td>
								</tr>
								<tr>
									<th scope="row">October 9, 2020</th>
									<td>October 15, 2020</td>
									<td>Thursday</td>
									<td>11:00 a.m.</td>
									<td>Columbus</td>
								</tr>
								<tr>
									<th scope="row">November 6, 2020</th>
									<td>November 12, 2020</td>
									<td>Thursday</td>
									<td>11:00 a.m.</td>
									<td>Veterans</td>
								</tr>
							</tbody>
						</table>
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
export default HolidaySchedule
