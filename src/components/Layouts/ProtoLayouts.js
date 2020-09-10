import React, { Component } from "react"
import { HashLink as Link } from "react-router-hash-link"

class ProtoLayouts extends Component {
  render() {
    return (
      <>
        <h3 className="_h3">Page Layouts</h3>
        <Link to="/style-guide/layouts/default-layouts#l-full-width-col" className="prototype-link l-full-width-col">
          <div className="prototype-thumb">
            <div className="prototype-column-container w100">
              <div className="prototype-column"></div>
            </div>
          </div>
        </Link>

        <Link to="/style-guide/layouts/default-layouts#l-two-col-left-wide" className="prototype-link l-two-col-left-wide">
          <div className="prototype-thumb">
            <div className="prototype-column-container w58">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w42">
              <div className="prototype-column prototype-secondary"></div>
            </div>
          </div>
        </Link>

        <Link to="/style-guide/layouts/default-layouts#l-two-col-right" className="prototype-link l-two-col-right">
          <div className="prototype-thumb">
            <div className="prototype-column-container w66">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w33">
              <div className="prototype-column prototype-secondary"></div>
            </div>
          </div>
        </Link>
        <Link to="/style-guide/layouts/default-layouts#l-two-col-right-narrow" className="prototype-link l-two-col-right-narrow">
          <div className="prototype-thumb">
            <div className="prototype-column-container w75">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w25">
              <div className="prototype-column prototype-secondary"></div>
            </div>
          </div>
        </Link>
        <Link to="/style-guide/layouts/default-layouts#l-two-col-right-wide" className="prototype-link l-two-col-right-wide">
          <div className="prototype-thumb">
            <div className="prototype-column-container w42">
              <div className="prototype-column prototype-secondary"></div>
            </div>
            <div className="prototype-column-container w58">
              <div className="prototype-column"></div>
            </div>
          </div>
        </Link>
      </>
    )
  }
}

export default ProtoLayouts
