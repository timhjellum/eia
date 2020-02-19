import React, { Component } from "react";
import TableRowBold from "../../assets/examples/TableRowBold";
class RowBold extends Component {
	render() {
		return (
			<div class="right-content">
				<h3 className="_h3">Bold Table Row</h3>

				<p className="_p">
					Adding a <code>className="bold""</code> to the table row.
				</p>
				<div className="_module-wrapper">
					<div className="_module-container">
						{/*start */}
						{/*start */}
						{/*start */}
						<div className="l-row l-full-width-col">
							<div className="table-wrapper">
								<table className="basic-table full-width">
									<tbody>
										<tr>
											<td>Align left</td>
											<td>Aligned right</td>
											<td>Aligned right</td>
											<td>Aligned right</td>
										</tr>
										<tr className="bold">
											<td>Bold Row</td>
											<td>Bold Row</td>
											<td>Bold Row</td>
											<td>Bold Row</td>
										</tr>
										<tr>
											<td>Col-1</td>
											<td>Col-2</td>
											<td>Col-3</td>
											<td>Col-4</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<TableRowBold />
			</div>
		);
	}
}
export default RowBold;
