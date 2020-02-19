import React, { Component } from "react";
import TableDoubleHead from "../../assets/examples/TableDoubleHead";

class TableHeadDouble extends Component {
	render() {
		return (
			<div class="right-content">
				<h3 className="_h3">Head Double</h3>
				<p className="_p">
					Adding a <code>className="totals"</code> to the table row.
				</p>
				<div className="_example _html">
					<pre>
						<code className="html"></code>
					</pre>
				</div>

				<div className="_module-wrapper">
					<div className="_module-container">
						{/*start */}
						{/*start */}
						{/*start */}
						<div className="l-row l-full-width-col">
							<div className="table-wrapper">
								<table className="basic-table full-width">
									<thead className="double-head">
										<tr>
											<th>Align left</th>
											<th colspan="3">Aligned Left</th>
											<th>Aligned right</th>
										</tr>
										<tr>
											<th>Aligned Left</th>
											<th>Aligned right</th>
											<th>Aligned right</th>
											<th>Aligned right</th>
											<th>Aligned right</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Align left</td>
											<td>Aligned right</td>
											<td>Aligned right</td>
											<td>Aligned right</td>
											<td>Aligned right</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<TableDoubleHead />
			</div>
		);
	}
}
export default TableHeadDouble;
