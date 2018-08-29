class Tabs {
	constructor() {

        console.log('tabs checking in 1');
        $('a.fancybox-menu').click(function() {
            
            var dataTargetValue = $(this).attr("data-target");
                          
            $('.tabs-wrapper a').each(function(i) {
                $(this).parent().removeClass('ui-state-active');
                if($(this).attr("href").slice(1) == dataTargetValue)
                {
                    $(this).parent().addClass('ui-state-active');
                }
            });

            $('.section-tabs > div').each(function(i) {
                $(this).removeClass('ui-state-active');
                if($(this).attr("id") == dataTargetValue)
                {
                    $(this).addClass('ui-state-active');
                }
            });

        });

        $('.tabs-wrapper').find('li').find('a').click(function(e) {
            e.preventDefault();
            var el = $(this);
            $('.tabs-wrapper').find('li').removeClass('ui-state-active');
            el.parent( 'li' ).addClass('ui-state-active');
            $('.tabs-wrapper').find('div').removeClass('ui-state-active');
            $('div').find(el.attr('href')).addClass('ui-state-active');

        });

/*
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
        this.tabOne.addClass('ui-state-active');
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
        this.tabOne.addClass('ui-state-active');       
        this.tabTwo.removeClass('ui-state-active');
        this.tabThr.removeClass('ui-state-active');          

        this.contentOne.removeClass('hide');
        this.contentOne.addClass('show');

        this.contentTwo.removeClass('show');
        this.contentTwo.addClass('hide');

        this.contentThr.removeClass('show');
        this.contentThr.addClass('hide');
    }  
    eventTwo() {
        this.tabOne.removeClass('ui-state-active');       
        this.tabTwo.addClass('ui-state-active');
        this.tabThr.removeClass('ui-state-active');  

        this.contentOne.removeClass('show');
        this.contentOne.addClass('hide');

        this.contentTwo.removeClass('hide');
        this.contentTwo.addClass('show');

        this.contentThr.removeClass('show');
        this.contentThr.addClass('hide');
    } 
    eventThr() {
        this.tabOne.removeClass('ui-state-active');      
        this.tabTwo.removeClass('ui-state-active');     
        this.tabThr.addClass('ui-state-active');  

        this.contentOne.removeClass('show');
        this.contentOne.addClass('hide');

        this.contentTwo.removeClass('show');
        this.contentTwo.addClass('hide');

        this.contentThr.removeClass('hide');
        this.contentThr.addClass('show');
    }
    */
    }
}
export default Tabs;  