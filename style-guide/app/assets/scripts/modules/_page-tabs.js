import $ from 'jquery';

console.log("Page Tabs checking in...");

class PageTabs {
    constructor() {
        this.onLoad();
    }

    onLoad() {
        $(".page_tabs").tabs();
        $(".page_tabs").localScroll({
            target:".page_tabs",
            duration:0,
            hash:true
        });
        $(".rtitle_form").css("width", "30%");
        $(".rtitle").css("width", "70%");
    }
}

export default PageTabs;
