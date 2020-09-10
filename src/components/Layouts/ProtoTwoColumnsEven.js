import React, { Component } from "react"

class ProtoTwoColumnsEven extends Component {
	render() {
		return (
			<a href="#l-two-col-even" className="prototype-link l-two-col-even">
				<div className="prototype-thumb">
					<div className="prototype-column-container w50">
						<div className="prototype-column"></div>
					</div>
					<div className="prototype-column-container w50">
						<div className="prototype-column"></div>
					</div>
				</div>
			</a>
		)
	}
}

export default ProtoTwoColumnsEven
