import $ from 'jquery';

console.log("header search checking in...");

class HeaderSearch {
    constructor() {
        this.searchPanel = $('.search-panel');
        this.header = $('header');
        this.logo = $('.logo');
        this.searchIcon = $('.search-menu-toggle');
//        this.windowLoad();
        this.events();
    }

//    windowLoad() {
//        this.searchPanel.addClass('hidden');
//    }

    events() {
        this.searchIcon.click(this.toggleSearchPanel.bind(this));       
    }
    
    toggleSearchPanel() {
        this.header.toggleClass('show');
        this.logo.toggleClass('show');
        this.searchPanel.toggleClass('show');
    } 
}

export default HeaderSearch;



/*
	$('.search-menu-toggle').click(function() {
		//console.log('toggle class show');

    });
    
    */