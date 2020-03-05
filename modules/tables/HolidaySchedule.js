import React, { Component } from "react";

/*
const theYear = document.querySelectorAll('.year');
const theDate = new Date();
for (let i = 0; i < theYear.length; i++) {
    theYear[i].innerHTML = theDate.getFullYear()
}
*/
class HolidaySchedule extends Component {
	render() {
		return (
			<div className="right-content">
				<h3 className="_h3">Holiday Release Schedule</h3>
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-full-width-col">
							<div className="table-wrapper">
								<table className="basic-table full-width align-left-col-2 align-left-col-3 align-left-col-4">
									<thead>
										<tr>
											<th>Data for:</th>
											<th>Alternate Release Date</th>
											<th>Release Day</th>
											<th>Holiday</th>
										</tr>
									</thead>
									<tbody>
										<tr className="past-holiday">
											<td>
												January 21, <span className="year"></span>
											</td>
											<td>
												January 22, <span className="year"></span>
											</td>
											<td>Tuesday</td>
											<td>Martin Luther King Jr.</td>
										</tr>

										<tr className="past-holiday">
											<td>
												February 18, <span className="year"></span>
											</td>
											<td>
												February 19, <span className="year"></span>
											</td>
											<td>Tuesday</td>
											<td>President's</td>
										</tr>

										<tr className="past-holiday">
											<td>
												May 27, <span className="year"></span>
											</td>
											<td>
												May 28, <span className="year"></span>
											</td>
											<td>Tuesday</td>
											<td>Memorial</td>
										</tr>

										<tr className="past-holiday">
											<td>
												September 2, <span className="year"></span>
											</td>
											<td>
												September 3, <span className="year"></span>
											</td>
											<td>Tuesday</td>
											<td>Labor</td>
										</tr>

										<tr className="past-holiday">
											<td>
												October 14, <span className="year"></span>
											</td>
											<td>
												October 15, <span className="year"></span>
											</td>
											<td>Tuesday</td>
											<td>Columbus</td>
										</tr>

										<tr className="past-holiday">
											<td>
												November 11, <span className="year"></span>
											</td>
											<td>
												November 12, <span className="year"></span>
											</td>
											<td>Tuesday</td>
											<td>Veterans</td>
										</tr>

										<tr className="past-holiday">
											<td>
												January 20, <span className="year"></span>
											</td>
											<td>
												January 21, <span className="year"></span>
											</td>
											<td>Tuesday</td>
											<td>Martin Luther King Jr.</td>
										</tr>

										<tr>
											<td>
												February 17, <span className="year"></span>
											</td>
											<td>
												February 18, <span className="year"></span>
											</td>
											<td>Tuesday</td>
											<td>President's</td>
										</tr>

										<tr>
											<td>
												May 25, <span className="year"></span>
											</td>
											<td>
												May 26, <span className="year"></span>
											</td>
											<td>Tuesday</td>
											<td>Memorial</td>
										</tr>

										<tr>
											<td>
												September 7, <span className="year"></span>
											</td>
											<td>
												September 8, <span className="year"></span>
											</td>
											<td>Tuesday</td>
											<td>Labor</td>
										</tr>

										<tr>
											<td>
												October 12, <span className="year"></span>
											</td>
											<td>
												October 13, <span className="year"></span>
											</td>
											<td>Tuesday</td>
											<td>Columbus</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default HolidaySchedule;
