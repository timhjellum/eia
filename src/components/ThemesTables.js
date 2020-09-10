import React, { Component } from "react"

import Page from "./Page"
import Top from "./Placeholders/Top"

import TablesBasicExample from "./Tables/TablesBasicExample"
import TablesDefaultExample from "./Tables/TablesDefaultExample"
import TablesFullWidthExample from "./Tables/TablesFullWidthExample"
import TablesCaptionExample from "./Tables/TablesCaptionExample"
// head

import TablesHeadDoubleExample from "./Tables/TablesHeadDoubleExample"
import TablesRowHead from "./Tables/TablesRowHead"
// body - rows
import TablesRowBoldExample from "./Tables/TablesRowBoldExample"
import TablesRowTotalExample from "./Tables/TablesRowTotalExample"
import TablesRowSectionHeadExample from "./Tables/TablesRowSectionHeadExample"
import TablesRowSectionDividerExample from "./Tables/TablesRowSectionDividerExample"
// body - columns
import TablesColumnDividerExample from "./Tables/TablesColumnDividerExample"
import TablesColumnAlignExample from "./Tables/TablesColumnAlignExample"
import TablesColumnHideExample from "./Tables/TablesColumnHideExample"
import TablesColumnHighlightExampleExample from "./Tables/TablesColumnHighlightExample"
import TablesRowIndentExample from "./Tables/TablesRowIndentExample"
//foot
import TablesFootExample from "./Tables/TablesFootExample"
import TablesFootnotesExample from "./Tables/TablesFootnotesExample"
// multiple
import TablesStackedExample from "./Tables/TablesStackedExample"
// icons
import IconicTableCells from "./Icons/IconicTableCells"
// custom
import TablesRowSelectedExample from "./Tables/TablesRowSelectedExample"
import TablesHolidaySchedule from "./Tables/TablesHolidaySchedule"

class ThemesTables extends Component {
	render() {
		return (
			<Page title="Tables">
				<span className="themes">
					<h1 className="_h1">Tables</h1>
					{/*
					<h4 className="_h4">Purpose</h4>
					<p className="_p">Users need to see structured data in a manner that makes the data readable, scannable, and comparable.</p>
					<h4 className="_h4">Description</h4>
					<p className="_p">Tables provide customizable views of tabular data with features including sorting and managing columns. Tables are useful when a collection of data requires vertical alignment through columns for quick scanning and discovery of information, as well as for data that with many attributes that requires sorting, grouping, and a user customizable display.</p>
					<h4 className="_h4">Basic functionality</h4>
					<p className="_p">Tables list a collection of items in rows that have similar attributes, usually with headers to label each attribute.</p>
					*/}
					<TablesDefaultExample />
					<Top />
					<TablesBasicExample />
					<Top />
					<TablesFullWidthExample />
					<Top />
					<TablesCaptionExample />
					<Top />
					<h2 className="_h2">HEAD</h2>
					<TablesHeadDoubleExample />
					<Top />
					<TablesRowHead />
					<Top />
					<h2 className="_h2">BODY (Rows)</h2>
					<TablesRowTotalExample />
					<Top />
					<TablesRowBoldExample />
					<Top />
					<TablesRowIndentExample />
					<Top />
					<TablesRowSectionHeadExample />
					<Top />
					<TablesRowSectionDividerExample />
					<Top />
					<h2 className="_h2">BODY (Columns)</h2>
					<TablesColumnHighlightExampleExample />
					<Top />
					<TablesColumnDividerExample />
					<Top />
					<TablesColumnAlignExample />
					<Top />
					<TablesColumnHideExample />
					<Top />
					<h2 className="_h2">FOOT</h2>
					<TablesFootExample />
					<Top />
					<TablesFootnotesExample />
					<Top />
					<h2 className="_h2">multiple tables</h2>
					<TablesStackedExample />
					<Top />
					<h2 className="_h2">Icon usage and tables</h2>
					<IconicTableCells />
					<Top />
					<h2 className="_h2">custom tables</h2>
					<TablesRowSelectedExample />
					<Top />
					<TablesHolidaySchedule />
				</span>
			</Page>
		)
	}
}
export default ThemesTables
