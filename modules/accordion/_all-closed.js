﻿import React, { Component } from "react";

import Top from "../../assets/components/Top.js";
import Legend from "../../assets/components/Legend.js";
import ExamplePlaceholder from "../../assets/examples/Placeholder.js";
import LoremIpsumList from "../../assets/containers/LoremIpsumList.js";
import LoremIpsumH2 from "../../assets/containers/LoremIpsumH2.js";
import LoremIpsumH3 from "../../assets/containers/LoremIpsumH3.js";
import LoremIpsumH4 from "../../assets/containers/LoremIpsumH4.js";
import LoremIpsumParagraph from "../../assets/containers/LoremIpsumParagraph.js";

class AccordionAllClosed extends Component {
  render() {
    return (
      <div className="right-content">
        <h3 className="_h3">All Closed</h3>
        <Legend />
        <div className="_module-wrapper">
          <div className="_module-container">
            <div className="l-row l-two-col-right-narrow">
              <div className="l-col">
                {/*
								<span className="expand-collapse-container">
									<span className="ico expand">
										<span>Expand all</span>
									</span>
									<span className="ico collapse">
										<span>Collapse all</span>
									</span>
								</span>
								*/}

                <div className="accordion-wrapper">
                  <div className="accordion-item closed">
                    <LoremIpsumH3 />
                    <div className="content">
                      <LoremIpsumH2 />
                      <LoremIpsumParagraph />
                      <LoremIpsumH4 />
                      <LoremIpsumList />
                    </div>
                  </div>
                  <div className="accordion-item closed">
                    <LoremIpsumH3 />
                    <div className="content">
                      <LoremIpsumH2 />
                      <LoremIpsumParagraph />
                      <LoremIpsumH4 />
                      <LoremIpsumList />
                    </div>
                  </div>
                  <div className="accordion-item closed">
                    <LoremIpsumH3 />
                    <div className="content">
                      <LoremIpsumH2 />
                      <LoremIpsumParagraph />
                      <LoremIpsumH4 />
                      <LoremIpsumList />
                    </div>
                  </div>
                </div>
              </div>
              <div className="l-col">
                <div className="secondary">
                  <LoremIpsumParagraph />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ExamplePlaceholder />
        <Top />
      </div>
    );
  }
}
export default AccordionAllClosed;
