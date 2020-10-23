import React, { Component } from "react"

import ContainerLayout from "../Containers/ContainerLayout"

class TablesDefaultExample extends Component {
	render() {
		return (
			<>
				<a name="TablesDefaultExample"></a>
				<h3 className="_h3">Table with default base styles</h3>
				<ContainerLayout>
					<div>
						<table>
							<thead>
								<tr>
									<th>Align-Left</th>
									<th>Align-Left</th>
									<th>Align-Left</th>
									<th>Align-Left</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Align-Left</td>
									<td>Align-Left</td>
									<td>Align-Left</td>
									<td>Align-Left</td>
								</tr>
								<tr>
									<td>Align-Left</td>
									<td>Align-Left</td>
									<td>Align-Left</td>
									<td>Align-Left</td>
								</tr>
								<tr>
									<td>Align-Left</td>
									<td>Align-Left</td>
									<td>Align-Left</td>
									<td>Align-Left</td>
								</tr>
								<tr>
									<td>Align-Left</td>
									<td>Align-Left</td>
									<td>Align-Left</td>
									<td>Align-Left</td>
								</tr>
							</tbody>
							<tfoot>
								<tr>
									<td colSpan="4">Align-Left</td>
								</tr>
							</tfoot>
						</table>
					</div>
				</ContainerLayout>
			</>
		)
	}
}

export default TablesDefaultExample
