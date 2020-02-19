import React, { Component } from "react";

import Top from "../../assets/components/Top.js";
import Legend from "../../assets/components/Legend.js";
import ExamplePlaceholder from "../../assets/examples/Placeholder.js";

class Base extends Component {
	render() {
		return (<div class="right-content">
		<h1 className="_h1">Lists</h1>
		<div className="l-row l-two-col-even">
			<div className="l-col">
				<p className="_p">Correct list nesting:</p>
				
			</div>
			<div className="l-col">
				<p className="_p">Incorrect list nesting:</p>
				
			</div>
		</div>
		<h3 className="_h3">List Head</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul>
							<li className="head">Lorem ipsum dolor sit amet
							</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li className="head"><a>Lorem ipsum dolor sit amet</a></li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">Bullet List</h3>
		<p className="_p">Article themes have bulletid lists by default. Primary and Secondary lists do not have bulletid lists by default and therefore adding the <code>bullet</code> class is required to force bullets.</p>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul className="bullet">
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">Bulleted List</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul className="bullet">
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">List Foot</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li className="foot"><a>Lorem ipsum dolor sit amet</a></li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">List Spacer</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li className="list-spacer"></li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">Bulleted List</h3>
		<h3 className="_h3">List Spacer with Nested List</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li className="list-spacer">
								<ul>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
							</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">Bulleted List</h3>
		<h3 className="_h3">Nested Bulleted List</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>
								<ul className="bullet">
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
							</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">Bulleted List</h3>
		<h3 className="_h3">List Spacer with Nested Bulleted List</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li className="list-spacer">
								<ul className="bullet">
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
							</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">List Spacer with Multiple Nested Lists</h3>
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit:</li>
							<li className="list-spacer">
								<ul>
									<li className="head">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
								<ul>
									<li className="head">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
								<ul>
									<li className="head">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
							</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">Sub List with Multiple Nested Bulleted List</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul>
							<li className="head">Lorem ipsum dolor sit amet, consectetur adipiscing elit:</li>
							<li className="sub-list">
								<ul>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
							</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">Sub List with Nested Bulleted List</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit:</li>
							<li className="sub-list">
								<ul className="bullet">
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
							</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">List Seperator</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul>
							<li className="head">Lorem ipsum dolor sit amet</li>
							<li>
								<ul>
									<li><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
									<li><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
									<li><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
									<li><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
								</ul>
							</li>
						</ul>
						<ul className="list-seperator">
							<li className="head">Lorem ipsum dolor sit amet</li>
							<li>
								<ul>
									<li><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
									<li><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
									<li><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
									<li><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">List Highlight</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>
								<ul className="highlight">
									<li><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
									<li><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
									<li><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
									<li><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
								</ul>
							</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">Single Bullet List Item</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul>
							<li className="head">Lorem ipsum dolor sit amet, consectetur adipiscing elit:</li>
							<li className="list-item">
								<ul>
									<li className="sub-head"><a>Lorem ipsum dolor sit amet</a></li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
								<ul>
									<li className="sub-head">Lorem ipsum dolor sit amet</li>
									<li><a>Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></li>
									<li><a>Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></li>
								</ul>
							</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">Iconic List Items</h3>
		<p>Please see the <a href="../base/icons.html">Icons Style-Guide page</a> for more options</p>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul className="icon-list">
							<li className="ico pdf"><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
							<li className="ico xls"><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
							<li className="ico doc"><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
							<li className="ico csv"><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
							<li className="ico ppt"><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
							<li className="ico json"><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
							<li className="ico html"><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
							<li className="ico image"><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
							<li className="ico interactive"><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
							<li className="ico efile"><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
							<li className="ico pedro"><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">Bulleted List</h3>
		<h3 className="_h3">Release Date/Schedule List Items</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul>
							<li className="release-schedule">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li className="release-schedule">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li className="release-schedule">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">Bulleted List</h3>
		<h3 className="_h3">Numbered List Items</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul className="numbered">
							<li><span className="number">001</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li><span className="number">002</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li><span className="number">003</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">Default List (no styles applied)</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">Basic List</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul className="basic-list">
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">Bulleted List</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul className="bullet">
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">Unordered Bulleted-List</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul>
							<li className="list-item">
								<ul>
									<li><a className="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
								<ul>
									<li><a className="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
							</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">Second-Level Unordered-List</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul>
							<li className="list-item">
								<ul>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li className="list-item">
										<ul>
											<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
										</ul>
										<ul>
											<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">Third-Level Unordered-List</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul>
							<li className="list-item">
								<ul>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li className="list-item">
										<ul>
											<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
											<li className="list-item">
												<ul>
													<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
													<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												</ul>
												<ul>
													<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
													<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
												</ul>
											</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">List Head</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul>
							<li className="head"><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
							<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">Unordered Sub-List</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul>
							<li className="sub-list">
								<ul>
									<li><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
							</li>
							<li className="sub-list">
								<ul>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
								</ul>
							</li>
							<li className="sub-list">
								<ul>
									<li><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
							</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
		<h3 className="_h3">Unordered Bulleted Sub-List</h3>
		<Legend />
		<div className="_module-wrapper">
			<div className="_module-container">
				<span className="_module-bg">
					<div className="primary">
						<ul>
							<li className="sub-list list-item">
								<ul>
									<li><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
							</li>
							<li className="sub-list list-item">
								<ul>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
									<li><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
								</ul>
							</li>
							<li className="sub-list list-item">
								<ul>
									<li><a href="/">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a></li>
									<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
								</ul>
							</li>
						</ul>
					</div>
				</span>
			</div>
		</div>
		<ExamplePlaceholder />
		<Top />
	</div>);
	}
}
export default Base;