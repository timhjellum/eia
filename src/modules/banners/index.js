import React, { Component } from "react";

import ModulesBannersAlert from "./";
import ModulesBannersError from "./";
import ModulesBannersInformation from "./";
import ModulesBannersNotice from "./";
import ModulesBannersSuccess from "./";

class ModulesBanners extends Component {
	render() {
		return (
			<div class="right-content">
				<h1 class="_h1">Banners</h1>
				<ul class="style-guide">
					<ModulesBannersAlert />
					<ModulesBannersError />
					<ModulesBannersInformation />
					<ModulesBannersNotice />
					<ModulesBannersSuccess />
				</ul>
			</div>
		);
	}
}
export default ModulesBanners;
