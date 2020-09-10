import React, { Component } from "react"
import { HashLink as Link } from "react-router-hash-link"

class Proto extends Component {
  render() {
    return (
      <>
        <Link to="/style-guide/layouts/nested-layouts#l-two-col-even" className="prototype-link l-two-col-even">
          <div className="prototype-thumb">
            <div className="prototype-column-container w50">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w50">
              <div className="prototype-column"></div>
            </div>
          </div>
        </Link>

        <Link to="/style-guide/layouts/nested-layouts#l-three-col-even" className="prototype-link l-three-col-even">
          <div className="prototype-thumb">
            <div className="prototype-column-container w33">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w33">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w33">
              <div className="prototype-column"></div>
            </div>
          </div>
        </Link>

        <Link to="/style-guide/layouts/nested-layouts#l-four-col-even" className="prototype-link l-four-col-even">
          <div className="prototype-thumb">
            <div className="prototype-column-container w25">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w25">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w25">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w25">
              <div className="prototype-column"></div>
            </div>
          </div>
        </Link>

        <Link to="/style-guide/layouts/nested-layouts#l-five-col-even" className="prototype-link l-five-col-even">
          <div className="prototype-thumb">
            <div className="prototype-column-container w20">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w20">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w20">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w20">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w20">
              <div className="prototype-column"></div>
            </div>
          </div>
        </Link>

        <Link to="/style-guide/layouts/nested-layouts#l-six-col-even" className="prototype-link l-six-col-even">
          <div className="prototype-thumb">
            <div className="prototype-column-container w16">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w16">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w16">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w16">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w16">
              <div className="prototype-column"></div>
            </div>
            <div className="prototype-column-container w16">
              <div className="prototype-column"></div>
            </div>
          </div>
        </Link>
        {/*
        <p className="_p">
          Layout class names begin with a
          <code>
            l-row <span className="l-full-width-col">l-full-width-col</span>
            <span className="l-two-col-left-narrow">l-row l-two-col-left-narrow</span>
            <span className="l-two-col-left" className="prototype-link ">
              l-row l-two-col-left"
            </span>
            <span className="l-two-col-right-wide">l-row l-two-col-right-wide</span>
            <span className="l-two-col-even">l-row l-two-col-even</span>
            <span className="l-two-col-left-wide">l-row l-two-col-left-wide</span>
            <span className="l-two-col-right">l-row l-two-col-right</span>
            <span className="l-two-col-right-narrow">l-row l-two-col-right-narrow</span>
            <span className="l-three-col">l-three-col</span>
            <span className="l-three-col-even">l-row l-three-col-even</span>
            <span className="l-four-col-even">l-row l-four-col-even</span>
            <span className="l-five-col-even">l-row l-five-col-even</span>
            <span className="l-six-col-even">l-row l-six-col-even</span>
          </code>
          .
		</p>
		*/}
      </>
    )
  }
}

export default Proto
