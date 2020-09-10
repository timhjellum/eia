import HeaderMenu from "./modules/header-menu"
import HeaderSearch from "./modules/header-search"
import SocialSticker from "./modules/social-sticker"
import AnalysisProjections from "./modules/analysis-projections"
import ScrollTo from "./modules/scroll-to"
import BxSlider from "./modules/bxslider"
import ModuleScripts from "./modules/modules"
import BookshelfSearch from "./modules/bookshelf-search"
import JqueryCookie from "./modules/jquery-cookie"
import GoogleAnalytics from "./modules/google-analytics"
import DropDown from "./modules/dropdown"
import ShrinkExpand from "./modules/header-shrink-expand"
import FancyBox from "./modules/fancybox"
import JqueryUI from "./modules/jquery-ui"
import AccordionModule from "./modules/accordion"
import exportSVG from "./modules/svg-download"
import NumberedLists from "./modules/numbered-lists"
import TableCleanup from "./modules/table-cleanup"

var SVGDownloadButton = document.getElementsByClassName("image-download")
var SVGDownloadButtonFound = SVGDownloadButton.length

var i = []
for (i = 0; i < SVGDownloadButtonFound; i++) {
	SVGDownloadButton[i].addEventListener("click", triggerDownloadSVG)
	console.log(i)
}

function triggerDownloadSVG(e) {
	exportSVG.svgExporter(e.currentTarget.nextElementSibling.id, 1334, 920)
	console.log("svg required")
}

new NumberedLists()
new HeaderMenu()
new HeaderSearch()
new SocialSticker()
new ScrollTo()
new BxSlider()
new AnalysisProjections()
new ModuleScripts()
new BookshelfSearch()
new JqueryCookie()
new GoogleAnalytics()
new DropDown()
new ShrinkExpand()
new FancyBox()
new JqueryUI()
new AccordionModule()
new TableCleanup()
