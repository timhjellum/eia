require('sticky-table-headers');

class StickyTableHeader {
    constructor() {
        $('table.sticky').stickyTableHeaders(100);
    }
}
export default StickyTableHeader;