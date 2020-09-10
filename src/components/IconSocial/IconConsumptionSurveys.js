import React, { Component } from "react"

class IconConsumptionSurveys extends Component {
	render() {
		return (
			<span className="icon-consumption-surveys">
				<h3 className="_h3">Consumption Surveys</h3>
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
		)
	}
}

export default IconConsumptionSurveys
