import React, { Component } from "react";
import TablesStacked from "../../assets/examples/TablesStacked";
class Stacked extends Component {
  render() {
    return (
      <div class="right-content">
        <h3 className="_h3">Tables Stackeds</h3>
        <p className="_p">
          All tables within the <code>div.basic-table</code> will have a 32
          pixel (2em) space between the tables and all but the last will have a
          blue bottom border.
        </p>
        <div className="_module-wrapper">
          <div className="_module-container">
            <div className="l-row l-full-width-col">
              <div className="table-wrapper">
                <table className="basic-table full-width">
                  <caption>Table One</caption>
                  <tbody>
                    <tr>
                      <td>Col-1</td>
                      <td>Col-2</td>
                      <td>Col-3</td>
                      <td>Col-4</td>
                    </tr>
                  </tbody>
                </table>

                <table className="basic-table full-width">
                  <caption>Table Two</caption>
                  <tbody>
                    <tr>
                      <td>Col-1</td>
                      <td>Col-2</td>
                      <td>Col-3</td>
                      <td>Col-4</td>
                    </tr>
                  </tbody>
                </table>

                <table className="basic-table full-width">
                  <caption>Table Three</caption>
                  <tbody>
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
        <TablesStacked />
			</div>
		);
	}
}
export default Stacked;
