import React, { Component } from 'react';

class SectionContainer extends Component {
	render() {
		return (<div className="right-content">
			<h3 className="_h3">{this.props.sectionHeader}</h3>
			{this.props.sectionContent}
		</div>);
	}
}

export default SectionContainer;
