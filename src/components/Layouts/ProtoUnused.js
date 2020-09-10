import React, { Component } from "react"
import { HashLink as Link } from "react-router-hash-link"

class ProtoUnused extends Component {
  render() {
    return (
      <>
        <Link to="/style-guide/layouts/unused-layouts#l-two-col-left-narrow" className="prototype-link l-two-col-left-narrow">
          <div className="prototype-thumb">
            <div className="prototype-column-container w25">
              <div className="prototype-column prototype-secondary"></div>
            </div>
            <div className="prototype-column-container w75">
              <div className="prototype-column"></div>
            </div>
          </div>
        </Link>
        <Link to="/style-guide/layouts/unused-layouts#l-two-col-left" className="prototype-link l-two-col-left">
          <div className="prototype-thumb">
            <div className="prototype-column-container w33">
              <div className="prototype-column prototype-secondary"></div>
            </div>
            <div className="prototype-column-container w66">
              <div className="prototype-column"></div>
            </div>
          </div>
        </Link>

        <Link to="/style-guide/layouts/unused-layouts#l-three-col" className="prototype-link l-three-col">
          <div className="prototype-thumb">
            <div className="prototype-column-container w25">
              <div className="prototype-column prototype-secondary"></div>
            </div>
            <div className="prototype-column-container w50">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w25">
              <div className="prototype-column prototype-secondary"></div>
            </div>
          </div>
        </Link>
      </>
    )
  }
}

export default ProtoUnused
