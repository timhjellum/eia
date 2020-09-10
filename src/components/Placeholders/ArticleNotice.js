import React, { Component } from "react"

class ArticleNotice extends Component {
	render() {
		return (
			<div className="notice">
				<p>
					The <strong>Contact</strong> module works with the <strong>Article</strong> Theme. The HTML below does not need the <code>&lt;div class="article&gt;...&lt;/div&gt;</code> if the <strong>Article</strong> theme has already been declared.
				</p>
			</div>
		)
	}
}

export default ArticleNotice
