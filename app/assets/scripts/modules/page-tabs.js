class PageTabs {
	constructor() {
        $(".page_tabs").tabs();
        $(".page_tabs").localScroll({
            target:".page_tabs",
            duration:0,
            hash:true
        });
        console.log("000O")
    } 
}
export default PageTabs; 