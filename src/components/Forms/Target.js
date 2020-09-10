import React, { Component } from "react"
import Top from "../Placeholders/Top"

class Target extends Component {
	render() {
		return (
			<>
				<h3 className="_h3">Target</h3>

				<p className="_p">Defines in which tab or window the clicked link will show up.</p>
				<code>"_blank"</code>
				<p className="_p">
					Opens in a new browsing context, which is usually a <strong>new tab</strong>.
				</p>

				<Top />
				<code>"_self"</code>
				<p className="_p">Opens in the current tab.</p>

				<Top />
				<code>"_parent"</code>
				<p className="_p">
					Opens in the parent browsing context, or <code>_self</code> is there is none.
				</p>

				<code>"_top"</code>
				<p className="_p">
					Opens in the top browsing context, or <code>_self</code> is there is none.
				</p>
			</>
		)
	}
}
export default Target
