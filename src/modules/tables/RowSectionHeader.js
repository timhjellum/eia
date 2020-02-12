import React, { Component } from "react";
import TableRowSectionHeader from "../../assets/examples/TableRowSectionHeader";

class RowSectionHeader extends Component {
  render() {
    return (
      <li className="section-container">
        <h3 className="_h3">Row Section Header</h3>

        <p className="_p">
          Adding a <code>className="sectionhead"</code> to the table row.
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
                    <tr className="sectionhead">
                      <td>Section Head</td>
                      <td>Section Head</td>
                      <td>Section Head</td>
                      <td>Section Head</td>
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
        <TableRowSectionHeader />
      </li>
    );
  }
}
export default RowSectionHeader;
