import React, { Component } from "react";

import Stacked from "./tables/Stacked";
import ColumnDivider from "./tables/ColumnDivider";
import ColumnAlign from "./tables/ColumnAlign";
import BasicTable from "./tables/BasicTable";
import RowBold from "./tables/RowBold";
import HeadDouble from "./tables/HeadDouble";
import FullWidth from "./tables/FullWidth";
import ColumnHide from "./tables/ColumnHide";
import ColumnHighlight from "./tables/ColumnHighlight";
import RowIndent from "./tables/RowIndent";
import RowSectionDivider from "./tables/RowSectionDivider";
import RowSectionHeader from "./tables/RowSectionHeader";
import RowTotal from "./tables/RowTotal";
import Default from "./tables/Default";
import IconicTableCells from "./tables/IconicTableCells";
import RowSelected from "./tables/RowSelected";
import HolidaySchedule from "./tables/HolidaySchedule";

class Tables extends Component {
  render() {
    return (
      <div>
        <h1 className="_h1">Tables</h1>
        <h4 className="_h4">Purpose</h4>
        <p className="_p">
          Users need to see structured data in a manner that makes the data
          readable, scannable, and comparable.
        </p>
        <h4 className="_h4">Description</h4>
        <p className="_p">
          Tables provide customizable views of tabular data with features
          including sorting and managing columns. Tables are useful when a
          collection of data requires vertical alignment through columns for
          quick scanning and discovery of information, as well as for data that
          with many attributes that requires sorting, grouping, and a user
          customizable display.
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
          Users need to see structured data in a manner that makes the data
          readable, scannable, and comparable.
        </p>
        <h4 className="_h4">Description</h4>
        <p className="_p">
          Tables provide customizable views of tabular data with features
          including sorting and managing columns. Tables are useful when a
          collection of data requires vertical alignment through columns for
          quick scanning and discovery of information, as well as for data that
          with many attributes that requires sorting, grouping, and a user
          customizable display.
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
          <IconicTableCells />

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
          <HolidaySchedule />
        </ul>
      </div>
    );
  }
}
export default Tables;
