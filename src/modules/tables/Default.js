import React, { Component } from "react";
import TableDefault from "../../assets/examples/TableDefault";
class Default extends Component {
  render() {
    return (
      <li className="section-container">
        <h3 className="_h3">Table (Default)</h3>
        <div className="_module-wrapper">
          <div className="_module-container">
            <div className="l-row l-full-width-col">
              <table>
                <caption>Caption</caption>
                <thead>
                  <tr>
                    <th>Column One</th>
                    <th>Column Two</th>
                    <th>Column Thr</th>
                    <th>Column Fou</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="/">Lorem ipsum</a>
                    </td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                  </tr>
                  <tr>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                    <td>Lorem ipsum</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
        <TableDefault />
      </li>
    );
  }
}
export default Default;
