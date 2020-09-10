import React, { Component } from "react"
import Page from "./Page"
import Top from "./Placeholders/Top"
import ProtoLayouts from "./Layouts/ProtoLayouts"
import FullWidthColumn from "./Layouts/FullWidthColumn"
import TwoColumns7525 from "./Layouts/TwoColumns7525"
import TwoColumns4258 from "./Layouts/TwoColumns4258"
import TwoColumns5842 from "./Layouts/TwoColumns5842"
import TwoColumns6633 from "./Layouts/TwoColumns6633"

class LayoutsDefault extends Component {
	render() {
		return (
			<Page title="Layouts">
				<span className="layouts">
					<h1 className="_h1">Column Examples</h1>

					<h3 className="_h3">Columns</h3>
					<p className="_p">Layouts are brokendown into two parts, Rows and Columns.</p>
					<p className="_p">All content (modules) should live within a column nested in a row in order for it react responsively.</p>
					<p className="_p">
						There's are many types of column class names to include: <code>l-col</code>,<code>l-full-width-col</code>, <code>l-col</code>, <code>l-col</code>,<code>l-col</code>, <code>l-col</code>, <code>l-col</code>,<code>l-col</code>, and <code>l-col</code>. By combining them in logical sequences, the modules will move, adapt, expand, contract to the users' page resolution on their media device. Columns can be nested as well but the examples below are all of the column layouts that fir the needs of the EIA website.
					</p>

					<ProtoLayouts />
					{/* <h2 className="_h2">Single Columns</h2> */}

					<span id={"l-full-width-col"}>
						<FullWidthColumn />
					</span>
					<Top />

					{/* <h2 className="_h2">Two Columns</h2> */}

					<span id={"l-two-col-left-wide"}>
						<TwoColumns5842 />
					</span>
					<Top />

					<span id={"l-two-col-right-narrow"}>
						<TwoColumns7525 />
					</span>
					<Top />

					<span id={"l-two-col-right"}>
						<TwoColumns6633 />
					</span>
					<Top />
					<span id={"l-two-col-right-wide"}>
						<TwoColumns4258 />
					</span>
					<Top />
				</span>
			</Page>
		)
	}
}
export default LayoutsDefault
