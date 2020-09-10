import React, { Component } from "react"
import Page from "./Page"

import Top from "./Placeholders/Top"
import ReportsExampleOne from "./Contact/ReportsExampleOne"
import ReportsExampleTwo from "./Contact/ReportsExampleTwo"
import ContactExampleOne from "./Contact/ContactExampleOne"
import ContactExampleTwo from "./Contact/ContactExampleTwo"
import ContactExampleThr from "./Contact/ContactExampleThr"
import ContactExampleFou from "./Contact/ContactExampleFou"
import ContactExampleFiv from "./Contact/ContactExampleFiv"

class ModulesContact extends Component {
	render() {
		return (
			<Page title="Contact">
				<span className="modules">
					<h1 className="_h1">Contact</h1>
					<ReportsExampleOne />
					<Top />

					<ReportsExampleTwo />
					<Top />

					<ContactExampleOne />
					<Top />

					<ContactExampleTwo />
					<Top />

					<ContactExampleThr />
					<Top />
					{/*
					<ContactExampleFou />
					<Top />

					<ContactExampleFiv />
					<Top />
*/}
				</span>
			</Page>
		)
	}
}
export default ModulesContact
