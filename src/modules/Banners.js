import React, { Component } from "react";

import Alert from "./banners/alert";
import Error from "./banners/error";
import Information from "./banners/information";
import Notice from "./banners/notice";
import Success from "./banners/success";

class Banners extends Component {
	render() {
		return (
			<div className="right-content">
				<h1 className="_h1">Banners</h1>
				<ul className="style-guide">
					<Alert />
					<Error />
					<Information />
					<Notice />
					<Success />
				</ul>
			</div>
		);
	}
}
export default Banners;
