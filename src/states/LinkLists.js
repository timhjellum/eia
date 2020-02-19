import React, { Component } from "react";
import Top from "../assets/components/Top.js";
import Legend from "../assets/components/Legend.js";
import ExamplePlaceholder from "../assets/examples/Placeholder.js";

class LinkLists extends Component {
	render() {
		return (
			<div class="right-content">
				<p className="_p">
					Some editible include files contain editible variables which
					write the values to corresponding HTML elements. Notice the
					fourth and fifth variables have been left blank.
				</p>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-full-width-col">
							<div className="l-col"></div>
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />

				<p className="_p">The list item will be hidden:</p>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-full-width-col">
							<div className="l-col"></div>
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />
				<p className="_p">
					Here's how the link list would display on the page with the
					fourth and fifth list items hidden from the user.
				</p>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-full-width-col">
							<div className="l-col">
								<div className="secondary hide-mt">
									<ul>
										<li className="head">
											<h2>
												Survey Forms, Changes &amp;
												Announcements
											</h2>
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
											<a
												href="/"
												title="Row Number Three"
											>
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
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />

				<p className="_p">
					Some editible include files contain editible variables which
					write the values to corresponding HTML elements. Notice the
					fourth and fifth variables have been left blank.
				</p>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-full-width-col">
							<div className="l-col"></div>
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />

				<p className="_p">The list item will be hidden:</p>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-full-width-col">
							<div className="l-col"></div>
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />

				<p className="_p">
					Here's how the link list would display on the page with the
					fourth and fifth list items hidden from the user.
				</p>
				<Legend />
				<div className="_module-wrapper">
					<div className="_module-container">
						<div className="l-row l-full-width-col">
							<div className="l-col"></div>
						</div>
					</div>
				</div>
				<ExamplePlaceholder />
				<Top />
			</div>
		);
	}
}

export default LinkLists;
