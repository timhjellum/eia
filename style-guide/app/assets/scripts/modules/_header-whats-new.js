import $ from 'jquery';

console.log('whats new checking in...');

class HeaderWhatsNew {
    constructor() {
        /*
        this.element = $('#whatsnew3');
        this.load();
    }
    load() {
        this.element().load('https://www.eia.gov/CFusionMX7/global/data/whatsnew.htm');
        */
        $('#whatsnew3').load('https://www.eia.gov/CFusionMX7/global/data/whatsnew.htm');
    }
}
export default HeaderWhatsNew;


