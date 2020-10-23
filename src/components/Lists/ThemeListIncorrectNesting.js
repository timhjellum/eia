import React, { Component } from "react"
import ContainerLayout from "../Containers/ContainerLayout"

class ThemeListIncorrectNesting extends Component {
	render() {
		return (
			<>
				<h2 className="_h2 themes">Nested Lists</h2>
				<ContainerLayout>
					<div className="l-row l-two-col-even">
						<div className="l-col">
							<h4 className="_h4">Correct list nesting:</h4>
							<ul>
								<li>Lorem ipsum dolor sit amet</li>
								<li>
									<ul>
										<li>Lorem ipsum dolor sit amet</li>
										<li>Lorem ipsum dolor sit amet</li>
										<li>Lorem ipsum dolor sit amet</li>
									</ul>
								</li>
								<li>Lorem ipsum dolor sit amet</li>
							</ul>
						</div>
						<div className="l-col">
							<h4 className="_h4">Incorrect list nesting:</h4>
							<ul>
								<li>Lorem ipsum dolor sit amet</li>
								<ul>
									<li>Lorem ipsum dolor sit amet</li>
									<li>Lorem ipsum dolor sit amet</li>
									<li>Lorem ipsum dolor sit amet</li>
								</ul>
								<li>Lorem ipsum dolor sit amet</li>
							</ul>
						</div>
					</div>
				</ContainerLayout>
				{/* end list item */}
			</>
		)
	}
}

export default ThemeListIncorrectNesting
