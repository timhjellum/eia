import React, { Component } from "react"
import Page from "./Page"
import ProtoNested from "./Layouts/ProtoNested"

class LayoutsNestedRows extends Component {
	render() {
		return (
			<Page title="Coming Soon">
				<span className="layouts">
					<h1 className="_h1">Layout Row Examples</h1>
					<p className="_p">When a column layout is nested within another column layout, the nested colums have no right space on the last column.</p>
					<h2 className="_h2">Single Columns</h2>
					<p className="_p">
						No left or right space by adding <code>header</code> to the <code>l-row</code> tag.
					</p>
					<ProtoNested />
				</span>
			</Page>
		)
	}
}
export default LayoutsNestedRows
