import React, { Component } from "react";
import ModulesAccordionAllClosed from './all-closed';
import ModulesAccordionAllOpen from './all-open';
import ModulesAccordionFirstOpen from './first-open';

class ModulesAccordion extends Component {
	render() {
		return (<div id="mainContent">
			<ul className="style-guide">
				<h1 className="_h1">Accordions</h1>
				<ModulesAccordionAllClosed />
				<ModulesAccordionFirstOpen />
				<ModulesAccordionAllOpen />
			</ul>
		</div>);
	}
}
export default ModulesAccordion;