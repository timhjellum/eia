import React, { Component } from "react"

import SpanIcoPDF from "./SpanIcoPDF"
import SpanIcoXLS from "./SpanIcoXLS"
import SpanIcoCSV from "./SpanIcoCSV"
import SpanIcoDOC from "./SpanIcoDOC"
import SpanIcoPPT from "./SpanIcoPPT"
import SpanIcoInteractive from "./SpanIcoInteractive"
import SpanIcoHTML from "./SpanIcoHTML"
import SpanIcoTXT from "./SpanIcoTXT"
import SpanIcoImage from "./SpanIcoImage"
import SpanIcoJSON from "./SpanIcoJSON"
import SpanIcoEFILE from "./SpanIcoEFILE"
import SpanIcoPEDRO from "./SpanIcoPEDRO"

class AnchorIcoXLS extends Component {
  render() {
    return (
      <span className="icon-with-description">
        <h3 className="_h3">Icon with Description</h3>
        <p></p>
        <div className="_source-icon">
          <span className="formats">Available formats:</span>
          <a>
            <span className="ico pdf">
              <span>PDF</span>
            </span>
          </a>
          <SpanIcoPDF />
        </div>

        <div className="_source-icon">
          <span className="formats">Available formats:</span>
          <a>
            <span className="ico xls">
              <span>XLS</span>
            </span>
          </a>
          <SpanIcoXLS />
        </div>
        <div className="_source-icon">
          <span className="formats">Available formats:</span>
          <a>
            <span className="ico csv">
              <span>CSV</span>
            </span>
          </a>
          <SpanIcoCSV />
        </div>
        <div className="_source-icon">
          <span className="formats">Available formats:</span>
          <a>
            <span className="ico interactive">
              <span>Interactive</span>
            </span>
          </a>
          <SpanIcoInteractive />
        </div>
        <div className="_source-icon">
          <span className="formats">Available formats:</span>
          <a>
            <span className="ico ppt">
              <span>PPT</span>
            </span>
          </a>
          <SpanIcoPPT />
        </div>
        <div className="_source-icon">
          <span className="formats">Available formats:</span>
          <a>
            <span className="ico html">
              <span>HTML</span>
            </span>
          </a>
          <SpanIcoHTML />
        </div>
        <div className="_source-icon">
          <span className="formats">Available formats:</span>
          <a>
            <span className="ico doc">
              <span>DOC</span>
            </span>
          </a>
          <SpanIcoDOC />
        </div>

        <div className="_source-icon">
          <span className="formats">Available formats:</span>
          <a>
            <span className="ico image">
              <span>IMAGE</span>
            </span>
          </a>
          <SpanIcoImage />
        </div>

        <div className="_source-icon">
          <span className="formats">Available formats:</span>
          <a>
            <span className="ico json">
              <span>JSON</span>
            </span>
          </a>
          <SpanIcoJSON />
        </div>
        <div className="_source-icon">
          <span className="formats">Available formats:</span>
          <a>
            <span className="ico efile">
              <span>eFile</span>
            </span>
          </a>
          <SpanIcoEFILE />
        </div>
        <div className="_source-icon">
          <span className="formats">Available formats:</span>
          <a>
            <span className="ico txt">
              <span>TXT</span>
            </span>
          </a>
          <SpanIcoTXT />
        </div>
        <div className="_source-icon">
          <span className="formats">Available formats:</span>
          <a>
            <span className="ico pedro">
              <span>PEDRO</span>
            </span>
          </a>
          <SpanIcoPEDRO />
        </div>
      </span>
    )
  }
}

export default AnchorIcoXLS
