import React, { Component } from "react";
import AccordionAllClosed from "./accordion/_all-closed";
//import AccordionAllOpen from "./all-open";
//import AccordionFirstOpen from "./first-open";
/*
<AccordionFirstOpen />
<AccordionAllOpen />
*/
class Accordion extends Component {
  render() {
    return (
      <div className="right-content">
        <ul className="style-guide">
          <h1 className="_h1">Accordions</h1>
          <AccordionAllClosed />
        </ul>
      </div>
    );
  }
}
export default Accordion;
