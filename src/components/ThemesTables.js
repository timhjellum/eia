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
					<ul className="_ul">
						<li className="_li">
							<a href="#TablesDefaultExample">Default</a>
						</li>
						<li className="_li">
							<a href="#TablesBasicExample">Basic</a>
						</li>
						<li className="_li">
							<a href="#TablesFullWidthExample">Full-Width</a>
						</li>
						<li className="_li">
							<a href="#TablesCaptionExample">Caption</a>
						</li>
						<li className="_li">
							<strong>HEAD</strong>
						</li>
						<li className="_li">
							<a href="#TablesHeadDoubleExample">Double-head</a>
						</li>
						<li className="_li">
							<a href="#TablesRowHead">Head-row</a>
						</li>
						<li className="_li">
							<strong>Rows</strong>
						</li>
						<li className="_li">
							<a href="#TablesRowTotalExample">Row Total</a>
						</li>
						<li className="_li">
							<a href="#TablesRowBoldExample">Row Bold</a>
						</li>
						<li className="_li">
							<a href="#TablesRowIndentExample">Row Indent</a>
						</li>
						<li className="_li">
							<a href="#TablesRowSectionHeadExample">Row Section Head</a>
						</li>
						<li className="_li">
							<a href="#TablesRowSectionDividerExample">Row Section Divider</a>
						</li>
						<li className="_li">
							<strong>Columns</strong>
						</li>
						<li className="_li">
							<a href="#TablesColumnHighlightExampleExample">Column Highlight</a>
						</li>
						<li className="_li">
							<a href="#TablesColumnDividerExample">Column Divider</a>
						</li>
						<li className="_li">
							<a href="#TablesColumnAlignExample">Column Align</a>
						</li>
						<li className="_li">
							<a href="#TablesColumnHideExample">Column Hide</a>
						</li>
						<li className="_li">
							<strong>FOOT</strong>
						</li>
						<li className="_li">
							<a href="#TablesFootExample">Foot</a>
						</li>
						<li className="_li">
							<a href="#TablesFootnotesExample">Footnotes</a>
						</li>
						<li className="_li">
							<strong>Multiple Tables</strong>
						</li>
						<li className="_li">
							<a href="#TablesStackedExample">Stacked</a>
						</li>
						<li className="_li">
							<strong>Icon usage and tables</strong>
						</li>
						<li className="_li">
							<a href="IconicTableCells">Iconic Table Cells</a>
						</li>
						<li className="_li">
							<strong>Custom Tables</strong>
						</li>
						<li className="_li">
							<a href="#TablesRowSelectedExample">Selected</a>
						</li>
						<li className="_li">
							<a href="#TablesHolidaySchedule">Holiday Schedule</a>
						</li>
					</ul>
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
