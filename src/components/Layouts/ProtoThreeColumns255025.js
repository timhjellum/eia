import React, { Component } from "react"

class ProtoThreeColumnsEven extends Component {
	render() {
		return (
			<a href="#l-three-col" className="prototype-link l-three-col">
				<div className="prototype-thumb">
					<div className="prototype-column-container w25">
						<div className="prototype-column prototype-secondary"></div>
					</div>
					<div className="prototype-column-container w50">
						<div className="prototype-column"></div>
					</div>
					<div className="prototype-column-container w25">
						<div className="prototype-column prototype-secondary"></div>
					</div>
				</div>
			</a>
		)
	}
}

export default ProtoThreeColumnsEven
