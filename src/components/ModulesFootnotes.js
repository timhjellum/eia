import React, { Component } from "react"
import Page from "./Page"

import TablesFootnotesExample from "./Tables/TablesFootnotesExample"
import Footnotes from "./modules/Footnotes"

class ModulesFootnotes extends Component {
  render() {
    return (
      <Page title="Footnotes">
        <span className="modules">
          <h1 className="_h1">Footnotes</h1>
          <TablesFootnotesExample />
          <Footnotes />
        </span>
      </Page>
    )
  }
}
export default ModulesFootnotes
