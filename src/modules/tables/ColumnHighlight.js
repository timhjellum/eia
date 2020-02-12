import React, { Component } from "react";
import TableColumnHighlight from "../../assets/examples/TableColumnHighlight";
class ColumnHighlight extends Component {
  render() {
    return (
      <li className="section-container">
        <h3 className="_h3">Column Highlight</h3>
        <p className="_p">
          Highlighting a column (body and foot, not the head) by adding a{" "}
          <code>highlight-col-x</code> to the <code>table class</code>.
        </p>
        <div className="_example _html">
          <pre>
            <code className="html">
              <p className="_p">Example:</p>
              &lt;!-- highlight the second and fourth columns --&gt; &lt;table
              className="highlight-col-2 highlight-col-4"&gt;&lt;/div&gt;
            </code>
          </pre>
        </div>
        <div className="_module-wrapper">
          <div className="_module-container">
            <div className="l-row l-full-width-col">
              <div className="table-wrapper full-width">
                <table className="basic-table full-width highlight-col-2 highlight-col-4">
                  <caption>
                    Table Example
                    <br />
                    <em>(This is table example</em>
                  </caption>
                  <thead>
                    <tr>
                      <th></th>
                      <th colspan="3">Colspan</th>
                    </tr>
                    <tr>
                      <th>Col-1</th>
                      <th>Col-2</th>
                      <th>Col-3</th>
                      <th>Col-4</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Col-1</td>
                      <td>Col-2</td>
                      <td>Col-3</td>
                      <td>Col-4</td>
                    </tr>
                    <tr>
                      <td>Col-1</td>
                      <td>Col-2</td>
                      <td>Col-3</td>
                      <td>Col-4</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colspan="4">Col-1</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
        <TableColumnHighlight />
      </li>
    );
  }
}
export default ColumnHighlight;
