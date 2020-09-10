import React, { Component } from "react"
import Page from "./Page"
import Top from "./Placeholders/Top.js"
import ContainerLayout from "./Containers/ContainerLayout"

class StatesLinkLists extends Component {
	render() {
		return (
			<Page title="">
				<span className="states">
					<h1 className="_h1">States Link Lists</h1>
					<p className="_p">Some editible include files contain editible variables which write the values to corresponding HTML elements. Notice the fourth and fifth variables have been left blank.</p>

					<ContainerLayout></ContainerLayout>

					<Top />

					<p className="_p">The list item will be hidden:</p>

					<ContainerLayout></ContainerLayout>

					<Top />
					<p className="_p">Here's how the link list would display on the page with the fourth and fifth list items hidden from the user.</p>

					<ContainerLayout>
						<div className="l-row l-full-width-col">
							<div className="l-col">
								<div className="secondary hide-mt">
									<ul>
										<li className="head">
											<h2>Survey Forms, Changes &amp; Announcements</h2>
										</li>
										<li>
											<a href="/" title="Row Number One">
												Row Number One
											</a>
										</li>
										<li>
											<a href="/" title="Row Number Two">
												Row Number Two
											</a>
										</li>
										<li>
											<a href="/" title="Row Number Three">
												Row Number Three
											</a>
										</li>
										<li>
											<a href="/" title="Row Number Six">
												Row Number Six
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</ContainerLayout>

					<Top />

					<p className="_p">Some editible include files contain editible variables which write the values to corresponding HTML elements. Notice the fourth and fifth variables have been left blank.</p>

					<ContainerLayout></ContainerLayout>

					<Top />

					<p className="_p">The list item will be hidden:</p>

					<ContainerLayout></ContainerLayout>

					<Top />

					<p className="_p">Here's how the link list would display on the page with the fourth and fifth list items hidden from the user.</p>

					<ContainerLayout></ContainerLayout>

					<Top />
				</span>
			</Page>
		)
	}
}

export default StatesLinkLists
