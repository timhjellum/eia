import React, { Component } from "react"

class IconConsumptionSurveys extends Component {
	render() {
		return (
			<>
				<h3 className="_h3">Consumption Surveys</h3>
				<span className="_consumption-surveys">
					<div className="_source-icon">
						<span className="residential">
							<span>residential</span>
						</span>
					</div>
					<div className="_source-icon">
						<span className="commercial">
							<span>commercial</span>
						</span>
					</div>
					<div className="_source-icon">
						<span className="industrial">
							<span>industrial</span>
						</span>
					</div>
				</span>
			</>
		)
	}
}

export default IconConsumptionSurveys
