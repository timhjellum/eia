import $ from 'jquery';

console.log("what's new checking in...");

class HeaderWhatsNew {
    constructor() {
        this.container = $('#whatsnew3');
        this.load();
    }
    load() {
        this.container().load('https://www.eia.gov/CFusionMX7/global/data/whatsnew.htm');
    }
}
export default HeaderWhatsNew;


