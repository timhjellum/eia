class ShrinkExpand {
    constructor() {
        
        //var tableWidth = $('.l-inner-wrapper').width();
        //$('.basic-table').css('width', tableWidth);
        //console.log(tableWidth);
        
        /*
        window.addEventListener('scroll', function() {
            var theader = document.getElementsByTagName('header');

            if (top > 96) {
                theader[0].classList.add('shrink');
            } else if (top < 97) {
                theader[0].classList.remove('shrink');
            }
        }, false);
*/
        
        window.addEventListener('scroll', function() {
            var top = this.scrollY,
                header = document.getElementsByTagName('header');
            if (top > 96) {
                header[0].classList.add('shrink');
            } else if (top < 97) {
                header[0].classList.remove('shrink');
            }
        }, false);
    }
}
export default ShrinkExpand;
