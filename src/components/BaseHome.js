import React, { Component } from "react"

import Page from "./Page"

class BaseHome extends Component {
	render() {
		return (
			<Page title="Base">
				<span className="base">
					<h1 className="_h1">Base</h1>
					<p className="_p">
						<strong>Base rules</strong> are the defaults.. They are almost exclusively single element selectors but it could include attribute selectors, pseudo-class selectors, child selectors or sibling selectors. Essentially, a base style says that wherever this element is on the page, it should look like
						<em>this</em>.
					</p>
				</span>
			</Page>
		)
	}
}
export default BaseHome
