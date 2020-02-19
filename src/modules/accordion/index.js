import React, { Component } from "react";
import ModulesAccordionAllClosed from "./all-closed";
//import ModulesAccordionAllOpen from "./all-open";
//import ModulesAccordionFirstOpen from "./first-open";
/*
<ModulesAccordionFirstOpen />
<ModulesAccordionAllOpen />
*/
class ModulesAccordion extends Component {
	render() {
		return (
			<div className="right-content">
				<ul className="style-guide">
					<h1 className="_h1">Accordions</h1>
					<ModulesAccordionAllClosed />
				</ul>
			</div>
		);
	}
}
export default ModulesAccordion;
