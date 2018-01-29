import $ from 'jquery';

console.log("Page Tabs checking in...");

class PageTabs {
    constructor() {
        this.pageTabs = $(".page_tabs");
        this.onLoad();
    }

    onLoad() {
        this.pageTabs.tabs();    
        this.pageTabs.localScroll({
            target:".page_tabs",
            duration:0,
            hash:true
        });
    }
}

export default PageTabs;
