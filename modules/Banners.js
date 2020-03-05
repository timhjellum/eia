import React, { Component } from "react";

import Alert from "./Banners/alert";
import Error from "./Banners/error";
import Information from "./Banners/information";
import Notice from "./Banners/notice";
import Success from "./Banners/success";

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
