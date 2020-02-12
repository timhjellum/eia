import React, { Component } from "react";
import TableFullWidth from "../../assets/examples/TableFullWidth";

class FullWidth extends Component {
  render() {
    return (
      <li className="section-container">
        <h3 className="_h3">Full-Width</h3>

        <div className="_module-wrapper">
          <div className="_module-container">
            <div className="l-row l-full-width-col">
              <div className="table-wrapper">
                <table className="basic-table full-width">
                  <caption>
                    Table Example
                    <br />
                    <em>(This is table example</em>
                  </caption>
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
        <TableFullWidth />
      </li>
    );
  }
}
export default FullWidth;
