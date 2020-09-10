import React, { Component } from "react"

class BuildAnchorDescription extends Component {
  render() {
    return (
      <p className="_p">
        The build-anchor scrip is an on-demand script chunk that runs when the page loads with a <code>.build-anchor</code> class. The script iterated through the list and builds an anchor tage using specific alpha and/or numeric characters from the path to the <em>Available formats:</em> document. This script is not build to scale for other uses at this time.
      </p>
    )
  }
}
export default BuildAnchorDescription
