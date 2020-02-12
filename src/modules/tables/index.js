import React, { Component } from "react";

import Stacked from "./Stacked";
import ColumnDivider from "./ColumnDivider";
import ColumnAlign from "./ColumnAlign";
import BasicTable from "./BasicTable";
import RowBold from "./RowBold";
import HeadDouble from "./HeadDouble";
import FullWidth from "./FullWidth";
import ColumnHide from "./ColumnHide";
import ColumnHighlight from "./ColumnHighlight";
import RowIndent from "./RowIndent";
import RowSectionDivider from "./RowSectionDivider";
import RowSectionHeader from "./RowSectionHeader";
import RowTotal from "./RowTotal";
import Default from "./Default";
import TableIcons from "./Icons";
import RowSelected from "./RowSelected";

class ModulesTables extends Component {
	render() {
		return (
			<div>
				<h1 className="_h1">Tables</h1>
				<h4 className="_h4">Purpose</h4>
				<p className="_p">
					Users need to see structured data in a manner that makes the
					data readable, scannable, and comparable.
				</p>
				<h4 className="_h4">Description</h4>
				<p className="_p">
					Tables provide customizable views of tabular data with
					features including sorting and managing columns. Tables are
					useful when a collection of data requires vertical alignment
					through columns for quick scanning and discovery of
					information, as well as for data that with many attributes
					that requires sorting, grouping, and a user customizable
					display.
				</p>
				<h4 className="_h4">Basic functionality</h4>
				<p className="_p">
					Tables list a collection of items in rows that have similar
					attributes, usually with headers to label each attribute.
				</p>
				<p className="_p">
					The following functionality can be provided by tables:
				</p>

				<h1 className="_h1">Tables</h1>
				<h4 className="_h4">Purpose</h4>
				<p className="_p">
					Users need to see structured data in a manner that makes the
					data readable, scannable, and comparable.
				</p>
				<h4 className="_h4">Description</h4>
				<p className="_p">
					Tables provide customizable views of tabular data with
					features including sorting and managing columns. Tables are
					useful when a collection of data requires vertical alignment
					through columns for quick scanning and discovery of
					information, as well as for data that with many attributes
					that requires sorting, grouping, and a user customizable
					display.
				</p>
				<h4 className="_h4">Basic functionality</h4>
				<p className="_p">
					Tables list a collection of items in rows that have similar
					attributes, usually with headers to label each attribute.
				</p>
				<p className="_p">
					The following functionality can be provided by tables:
				</p>
				<ul className="style-guide">
					<Default />
					<BasicTable />
					<FullWidth />
					<Stacked />
					<TableIcons />

					<HeadDouble />
					<ColumnHighlight />
					<ColumnDivider />
					<ColumnAlign />
					<ColumnHide />

					<RowBold />
					<RowIndent />
					<RowSectionDivider />
					<RowSectionHeader />
					<RowTotal />
					<RowSelected />
				</ul>
			</div>
		);
	}
}
export default ModulesTables;
