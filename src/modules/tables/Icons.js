import React, { Component } from "react";
import ExampleTableIcons from "../../assets/examples/TableIcons";
class TableIcons extends Component {
	render() {
		return (
			<li className="section-container">
				<h3 className="_h3">Table Icons</h3>
				<p>
					See the <a href="../base/icons.html">Base / Icons</a>{" "}
					section for usage
				</p>
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-full-width-col">
							<div className="table-wrapper">
								<table className="basic-table full-width">
									<tbody>
										<tr>
											<td className="ico pdf">
												<a href="/">Link to PDF</a>
											</td>
											<td></td>
											<td></td>
											<td></td>
										</tr>
										<tr>
											<td className="ico xls">
												<a href="/">Link to XLS</a>
											</td>
											<td></td>
											<td></td>
											<td></td>
										</tr>
										<tr>
											<td className="ico json">
												<a href="/">Link to JSON</a>
											</td>
											<td></td>
											<td></td>
											<td></td>
										</tr>
										<tr>
											<td className="ico csv">
												<a href="/">Link to CSV</a>
											</td>
											<td></td>
											<td></td>
											<td></td>
										</tr>
										<tr>
											<td className="ico ppt">
												<a href="/">Link to PPT</a>
											</td>
											<td></td>
											<td></td>
											<td></td>
										</tr>
										<tr>
											<td className="ico html">
												<a href="/">Link to HTML</a>
											</td>
											<td></td>
											<td></td>
											<td></td>
										</tr>
										<tr>
											<td className="ico doc">
												<a href="/">Link to DOC</a>
											</td>
											<td></td>
											<td></td>
											<td></td>
										</tr>
										<tr>
											<td className="ico image">
												<a href="/">Link to image</a>
											</td>
											<td></td>
											<td></td>
											<td></td>
										</tr>
										<tr>
											<td className="ico interactive">
												<a href="/">
													Link to interactive
												</a>
											</td>
											<td></td>
											<td></td>
											<td></td>
										</tr>
										<tr>
											<td className="ico efile">
												<a href="/">Link to eFile</a>
											</td>
											<td></td>
											<td></td>
											<td></td>
										</tr>
										<tr>
											<td className="ico pedro">
												<a href="/">Link to PEDRO</a>
											</td>
											<td></td>
											<td></td>
											<td></td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<ExampleTableIcons />
			</li>
		);
	}
}
export default TableIcons;
