import HeaderMenu from "./modules/header-menu";
import StickyTableHeaders from "./modules/sticky-table-headers";
import HeaderSearch from "./modules/header-search";
import SocialSticker from "./modules/social-sticker";
import AnalysisProjections from "./modules/analysis-projections";
import ScrollTo from "./modules/scroll-to";
import BxSlider from "./modules/bxslider";
import ModuleScripts from "./modules/modules";

import BookshelfSearch from "./modules/bookshelf-search";
import Cookie from "./modules/cookie";
import GoogleAnalytics from "./modules/google-analytics";
import DropDown from "./modules/dropdown";
import ShrinkExpand from "./modules/header-shrink-expand";
import FancyBox from "./modules/fancybox";
import JqueryUI from "./modules/_jquery-ui";
//import AccordionModule from "./modules/accordion";
import exportSVG from "./modules/svg-download";

import AccordionModule from './modules/svg-download';

var SVGDownloadButton = document.getElementsByClassName("image-download");
SVGDownloadButton.addEventListener("click", triggerDownloadSVG);
function triggerDownloadSVG(e) {
	exportSVG.svgExporter(e.currentTarget.nextElementSibling.id, 1334, 920);
	console.log("svg required");
}
/*
$(".image-download").click(function(e) {
	exportSVG.svgExporter(e.currentTarget.nextElementSibling.id, 1334, 920);
	//exportSVG(e.currentTarget.nextElementSibling.id, 1334, 920);
	console.log("svg required");
});
*/

new HeaderMenu();
new StickyTableHeaders();
new HeaderSearch();
new SocialSticker();
new ScrollTo();
new exportSVG();
new BxSlider();
new AnalysisProjections();
new ModuleScripts();

new BookshelfSearch();
new Cookie();
new GoogleAnalytics();
new DropDown();
new ShrinkExpand();
new FancyBox();
new JqueryUI();
new AccordionModule();
