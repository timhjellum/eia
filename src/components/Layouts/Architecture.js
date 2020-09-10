import React, { Component } from "react"

class Architecture extends Component {
	render() {
		return (
			<>
				<h3 className="_h3">Architecture</h3>
				<p className="_p">
					We leverage a custom <a href="https://www.w3schools.com/css/css_grid.asp">CSS Grid</a> system for the page layouts. The page layouts allow for the pages and elements on the page to be responsive based on the users' media device (e.g. print, mobile, laptop, desktop). To accomplish this, we use break points based off of the width of the users' media device. The breakpoints are as follows:
				</p>
				<div className="table-wrapper">
					<table className="basic-table align-left-col-4">
						<thead>
							<tr>
								<th>Break Name</th>
								<th>Minimum Width (px)</th>
								<th>Maximum Width (px)</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>mobile</td>
								<td>1</td>
								<td>479</td>
								<td>Smartphones, portrait iPhone, portrait 480x320 phones (Android)</td>
							</tr>
							<tr>
								<td>mobile-landscape</td>
								<td>480</td>
								<td>599</td>
								<td>Smartphones, Android phones, landscape iPhone</td>
							</tr>
							<tr>
								<td>tablet</td>
								<td>600</td>
								<td>800</td>
								<td>Mobile panorama</td>
							</tr>
							<tr>
								<td>tablet-landscape</td>
								<td>801</td>
								<td>955</td>
								<td>Tablet, landscape iPad, lo-resolution laptops and desktops</td>
							</tr>
							<tr>
								<td>laptop</td>
								<td>956</td>
								<td>1355</td>
								<td>big landscape tablets, laptops, and desktops</td>
							</tr>
							<tr>
								<td>desktop</td>
								<td>1366</td>
								<td>2299</td>
								<td>Big landscape tablets, hi-resolution laptops, and desktops</td>
							</tr>
							<tr>
								<td>desktop-lg</td>
								<td>2300</td>
								<td>&#8734;</td>
								<td>Desktop and television</td>
							</tr>
							<tr>
								<td>mobile-only</td>
								<td>1</td>
								<td>599px</td>
								<td>Mmartphones, portrait iPhone, portrait 480x320 phones (Android)</td>
							</tr>
						</tbody>
					</table>
				</div>
			</>
		)
	}
}

export default Architecture
