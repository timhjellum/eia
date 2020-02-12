import React, { Component } from "react";

class SectionContainer extends Component {
  render() {
    return (
      <li className="section-container">
        <h3 className="_h3">{this.props.sectionHeader}</h3>
        {this.props.sectionContent}
      </li>
    );
  }
}

export default SectionContainer;
