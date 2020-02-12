import React, { Component } from "react";
import TableBasicTable from "../../assets/examples/TableBasicTable";

class BasicTable extends Component {
  render() {
    return (
      <li className="section-container">
        <h3 className="_h3">Basic Table</h3>
        <ul className="_ul">
          <li>Column Alignment</li>
          <li>Highlight columns</li>
          <li>Showing and hiding columns</li>
          <li>
            Sticky Table Headers (see{" "}
            <a href="../states/">Sticky Headers under States</a>)
          </li>
        </ul>
        <p className="_p">
          A table’s complexity and needs can vary greatly. This pattern provides
          many different features a table <em>may</em> have. Features can be
          mixed and matched based on your needs. Don’t include features unless
          they’re actually needed.
        </p>
        <div className="_module-wrapper">
          <div className="_module-container">
            {/*start */}
            {/*start */}
            {/*start */}
            <div className="l-row l-full-width-col">
              <div className="table-wrapper">
                <table className="basic-table full-width">
                  <caption>Caption</caption>
                  <thead>
                    <tr>
                      <th></th>
                      <th colspan="3">Aligned Center</th>
                    </tr>
                    <tr>
                      <th>Align-Left</th>
                      <th>Align-Right</th>
                      <th>Align-Right</th>
                      <th>Align-Right</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Align-Left</td>
                      <td>Align-Right</td>
                      <td>Align-Right</td>
                      <td>Align-Right</td>
                    </tr>
                    <tr>
                      <td>Align-Left</td>
                      <td>Align-Right</td>
                      <td>Align-Right</td>
                      <td>Align-Right</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="4">Align-Left</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
        <TableBasicTable />
      </li>
    );
  }
}
export default BasicTable;
