import React, { Component } from "react";
import TableColumnHide from "../../assets/examples/TableColumnHide";

class ColumnHide extends Component {
	render() {
		return (
			<div className="right-content">
				<h3 className="_h3">Hide Columns</h3>
				<p className="_p">
					Hiding a column (head, body and foot) can be accomplished by adding a{" "}
					<code>hide-col-x</code> to the <code>table class</code>.
				</p>
				<div className="_example _html">
					<pre>
						<code className="html">
							<p className="_p">Example:</p>
							&lt;!-- hide the second and fourth columns --&gt; &lt;table
							className="hide-col-2 hide-col-4"&gt;&lt;/div&gt;
						</code>
					</pre>
				</div>
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-full-width-col">
							<div className="table-wrapper">
								<table className="basic-table full-width hide-col-2 hide-col-4">
									<caption>
										Table Example
										<br />
										<em>(This is table example</em>
									</caption>
									<thead>
										<tr>
											<th></th>
											<th colSpan="3">Col-2</th>
										</tr>
										<tr>
											<th>Col-1</th>
											<th>Col-2</th>
											<th>Col-3</th>
											<th>Col-4</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>Col-1</td>
											<td>Col-2</td>
											<td>Col-3</td>
											<td>Col-4</td>
										</tr>
										<tr>
											<td>Col-1</td>
											<td>Col-2</td>
											<td>Col-3</td>
											<td>Col-4</td>
										</tr>
									</tbody>
									<tfoot>
										<tr>
											<td colSpan="4">Col-1</td>
										</tr>
									</tfoot>
								</table>
							</div>
						</div>
					</div>
				</div>
				<TableColumnHide />
			</div>
		);
	}
}
export default ColumnHide;
