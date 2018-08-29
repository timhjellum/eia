class PageTabs {
	constructor() {
        $(".page_tabs").tabs();
        $(".page_tabs").localScroll({
            target:".page_tabs",
            duration:0,
            hash:true
        });
        console.log("tabs are found");
    } 
}
export default PageTabs; 