import React, { Component } from "react"

import IconOnlyIcoPDF from "./IconOnlyIcoPDF"
import IconOnlyIcoXLS from "./IconOnlyIcoXLS"
import IconOnlyIcoCSV from "./IconOnlyIcoCSV"
import IconOnlyIcoDOC from "./IconOnlyIcoDOC"
import IconOnlyIcoPPT from "./IconOnlyIcoPPT"
import IconOnlyIcoInteractive from "./IconOnlyIcoInteractive"
import IconOnlyIcoHTML from "./IconOnlyIcoHTML"
import IconOnlyIcoTXT from "./IconOnlyIcoTXT"
import IconOnlyIcoImage from "./IconOnlyIcoImage"
import IconOnlyIcoJSON from "./IconOnlyIcoJSON"
import IconOnlyIcoEFILE from "./IconOnlyIcoEFILE"
import IconOnlyIcoPEDRO from "./IconOnlyIcoPEDRO"

class IconOnly extends Component {
  render() {
    return (
      <span className="icon-only">
        <h3 className="_h3">Icon Only (no description)</h3>
        <div className="_source-icon">
          <span className="ico icon-only pdf">
            <span>PDF</span>
          </span>
          <IconOnlyIcoPDF />
        </div>
        <div className="_source-icon">
          <span className="ico icon-only xls">
            <span>XLS</span>
          </span>
          <IconOnlyIcoXLS />
        </div>
        <div className="_source-icon">
          <span className="ico icon-only csv">
            <span>CSV</span>
          </span>
          <IconOnlyIcoCSV />
        </div>
        <div className="_source-icon">
          <span className="ico icon-only interactive">
            <span>Interactive</span>
          </span>
          <IconOnlyIcoInteractive />
        </div>
        <div className="_source-icon">
          <span className="ico icon-only ppt">
            <span>PPT</span>
          </span>
          <IconOnlyIcoPPT />
        </div>
        <div className="_source-icon">
          <span className="ico icon-only html">
            <span>HTML</span>
          </span>
          <IconOnlyIcoHTML />
        </div>
        <div className="_source-icon">
          <span className="ico icon-only doc">
            <span>DOC</span>
          </span>
          <IconOnlyIcoDOC />
        </div>
        <div className="_source-icon">
          <span className="ico icon-only image">
            <span>IMAGE</span>
          </span>
          <IconOnlyIcoImage />
        </div>
        <div className="_source-icon">
          <span className="ico icon-only json">
            <span>JSON</span>
          </span>
          <IconOnlyIcoJSON />
        </div>
        <div className="_source-icon">
          <span className="ico icon-only efile">
            <span>eFile</span>
          </span>
          <IconOnlyIcoEFILE />
        </div>
        <div className="_source-icon">
          <span className="ico icon-only txt">
            <span>TXT</span>
          </span>
          <IconOnlyIcoTXT />
        </div>
        <div className="_source-icon">
          <span className="ico icon-only pedro">
            <span>PEDRO</span>
          </span>
          <IconOnlyIcoPEDRO />
        </div>
      </span>
    )
  }
}

export default IconOnly
