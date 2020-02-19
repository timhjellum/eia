import React, { Component } from "react";
import TableRowTotal from "../../assets/examples/TableRowTotal";
class RowTotal extends Component {
  render() {
    return (
      <div class="right-content">
        <h3 className="_h3">Row Total</h3>
        <p className="_p">
          Adding a <code>className="total"</code> to the table row.
        </p>
        <div className="_example _html">
          <pre>
            <code className="html">
              &lt;!-- tbody --&gt; &lt;tr className="total"&gt; &lt;td&gt;Total
              Row&lt;/td&gt; &lt;td&gt;Total Row&lt;/td&gt; &lt;td&gt;Total
              Row&lt;/td&gt; &lt;td&gt;Total Row&lt;/td&gt; &lt;/tr&gt;
            </code>
          </pre>
        </div>

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
                    <tr className="total">
                      <td>Total Row</td>
                      <td>Total Row</td>
                      <td>Total Row</td>
                      <td>Total Row</td>
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
        <TableRowTotal />
			</div>
		);
	}
}
export default TableRowTotal;
