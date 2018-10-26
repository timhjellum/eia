require('sticky-table-headers');

class StickyTableHeaders {
    constructor() {
        $('.sticky').stickyTableHeaders({fixedOffset: $('header')});
       
        //const stickyExists = document.querySelector('.sticky');
        //if (stickyExists !== null) {
           // console.log("Resize Sticky Table Headers");
            $(window).on('orientationchange resize', function() {
                const footerWidth = $('footer').width();
                if ((footerWidth > 450) && (footerWidth <= 956)) { $('.basic-table.sticky').css('width', + (footerWidth - 26)) }
                else if ((footerWidth >= 320) && (footerWidth <= 449)) { $('.basic-table').css('width', + (footerWidth - 32)) }
            }).trigger('resize');
        //}
    }
}
export default StickyTableHeaders;