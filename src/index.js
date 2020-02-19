import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./assets/scripts/style-guide";

/*
import HeaderMenu from "./assets/scripts/modules/header-menu";
import StickyTableHeaders from "./assets/scripts/modules/sticky-table-headers";
import HeaderSearch from "./assets/scripts/modules/header-search";
import SocialSticker from "./assets/scripts/modules/social-sticker";
import AnalysisProjections from "./assets/scripts/modules/analysis-projections";
import ScrollTo from "./assets/scripts/modules/scroll-to";
//import BxSlider from "./assets/scripts/modules/bxslider";
import ModuleScripts from "./assets/scripts/modules/modules";
//import Highlight from "./assets/scripts/modules/highlight-search-results";
import BookshelfSearch from "./assets/scripts/modules/bookshelf-search";
//import CookieModule from "./assets/scripts/modules/cookie";
import GoogleAnalytics from "./assets/scripts/modules/google-analytics";
import DropDown from "./assets/scripts/modules/dropdown";
import ShrinkExpand from "./assets/scripts/modules/header-shrink-expand";
import FancyBox from "./assets/scripts/modules/fancybox";
import "./assets/scripts/modules/jquery-ui";

new HeaderMenu();
new StickyTableHeaders();
new HeaderSearch();
new SocialSticker();
new ScrollTo();
//new BxSlider();
new AnalysisProjections();
new ModuleScripts();
//new Highlight();
new BookshelfSearch();
//new CookieModule();
new GoogleAnalytics();
new DropDown();
new ShrinkExpand();
new FancyBox();
*/

import { AppContainer } from "react-hot-loader";
require("react-hot-loader/patch");

ReactDOM.render(
	<AppContainer>
		<App />
	</AppContainer>,
	document.getElementById("root")
);

if (module.hot) {
	module.hot.accept("./App", () => {
		const NextApp = require("./App").default;
		ReactDOM.render(
			<AppContainer>
				<NextApp />
			</AppContainer>,
			document.getElementById("root")
		);
	});
}
