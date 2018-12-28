import ScrollNav from 'scrollnav';

class scrollNav {
    constructor() {
		//console.log("_scroll-nav");
        $('._container').scrollNav({
            sections: '._h3',
            subSections: false,
            sectionElem: 'section',
            className: '_right-sidebar',
            showHeadline: false,
            headlineText: 'Scroll To',
            showTopLink: false,
            topLinkText: 'Top',
            fixedMargin: 80,
            scrollOffset: 20,
            animated: true,
            speed: 500,
            insertTarget: this.selector,
            insertLocation: 'insertBefore',
            activeClass: 'active',
            arrowKeys: false,
            scrollToHash: true,
            onInit: null,
            onRender: null,
            onDestroy: null
        });
    }
}
export default scrollNav;