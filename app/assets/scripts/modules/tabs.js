class Tabs {
	constructor() {
        this.tabOne = $('.tabs li.one');
        this.tabTwo = $('.tabs li.two');
		this.tabThr = $('.tabs li.thr');
        this.contentOne = $('.tabs div.one');
        this.contentTwo = $('.tabs div.two');
        this.contentThr = $('.tabs div.thr');
		this.initialState();
        this.events();
    }
	initialState() {
        this.tabOne.addClass('active');
        this.contentOne.addClass('show');
        this.contentTwo.addClass('hide');
        this.contentThr.addClass('hide');
    }
    events() {
        this.tabOne.click(this.eventOne.bind(this));
        this.tabTwo.click(this.eventTwo.bind(this));  
        this.tabThr.click(this.eventThr.bind(this));  
    }
    eventOne() {
        this.tabOne.addClass('active');       
        this.tabTwo.removeClass('active');
        this.tabThr.removeClass('active');          

        this.contentOne.removeClass('hide');
        this.contentOne.addClass('show');

        this.contentTwo.removeClass('show');
        this.contentTwo.addClass('hide');

        this.contentThr.removeClass('show');
        this.contentThr.addClass('hide');
    }  
    eventTwo() {
        this.tabOne.removeClass('active');       
        this.tabTwo.addClass('active');
        this.tabThr.removeClass('active');  

        this.contentOne.removeClass('show');
        this.contentOne.addClass('hide');

        this.contentTwo.removeClass('hide');
        this.contentTwo.addClass('show');

        this.contentThr.removeClass('show');
        this.contentThr.addClass('hide');
    } 
    eventThr() {
        this.tabOne.removeClass('active');      
        this.tabTwo.removeClass('active');     
        this.tabThr.addClass('active');  

        this.contentOne.removeClass('show');
        this.contentOne.addClass('hide');

        this.contentTwo.removeClass('show');
        this.contentTwo.addClass('hide');

        this.contentThr.removeClass('hide');
        this.contentThr.addClass('show');
    } 
}
export default Tabs;  