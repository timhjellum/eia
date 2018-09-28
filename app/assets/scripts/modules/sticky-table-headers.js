require('sticky-table-headers');

class StickyTableHeaders {
    constructor() {
        $('.sticky').stickyTableHeaders();
        console.log("Sticky Table Headers");
    }
}
export default StickyTableHeaders;