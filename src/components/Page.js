import React, { useEffect } from "react"
import Body from "./Containers/Body"

function Title(props) {
	useEffect(() => {
		document.title = `${props.title} | EIA Style Guide`
		window.scrollTo(0, 0)
	}, [])
	return <Body>{props.children}</Body>
}

export default Title
