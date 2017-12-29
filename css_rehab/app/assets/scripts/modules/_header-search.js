import $ from 'jquery';

class HeaderSearch {
    constructor() {
        this.searchPanel = $('.search-panel');
        this.searchIcon = $('.search-menu-toggle');
        this.windowLoad();
        this.events();
    }

    windowLoad() {
        this.searchPanel.addClass('hidden');
    }

    events() {
        this.searchIcon.click(this.toggleSearchPanel.bind(this));       
    }
    
    toggleSearchPanel() {
        this.searchPanel.toggleClass('show');
    } 
}

export default HeaderSearch;