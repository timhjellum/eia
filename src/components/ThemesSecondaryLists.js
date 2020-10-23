import React, { Component } from "react"
import Page from "./Page"
import SecondaryLists from "./Themes/SecondaryLists"

class ThemesSecondaryLists extends Component {
	render() {
		return (
			<Page title="List Theme">
				<span className="themes">
					<h1 className="_h1">Secondary List Theme</h1>
					<SecondaryLists />
				</span>
			</Page>
		)
	}
}
export default ThemesSecondaryLists
