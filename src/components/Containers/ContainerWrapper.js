import React from "react"

function ContainerWrapper(props) {
	return <div className="module-outer">{props.children}</div>
}
export default ContainerWrapper
