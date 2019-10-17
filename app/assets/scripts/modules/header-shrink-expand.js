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


        if (document.querySelector('.form-container')) {
            function reportWindowSize() {
                var windowWidth = window.screen.width;
                if ((windowWidth >= 600) && (windowWidth <= 800)) {
                    var tabletPanoramaWidth = windowWidth / 4;
                    document.querySelector('.l-two-col-right-narrow fieldset').style.width = tabletPanoramaWidth + "px";
                    document.querySelector('.l-two-col-right-narrow .dropdown-menu').style.width = tabletPanoramaWidth + "px";
                    console.log(tabletPanoramaWidth);
                } else if ((windowWidth >= 450) && (windowWidth <= 599)) {
                    var mobilePanoramaWidth = windowWidth / 2;
                    document.querySelector('.l-two-col-right-narrow fieldset').style.width = mobilePanoramaWidth + "px";
                    document.querySelector('.l-two-col-right-narrow .dropdown-menu').style.width = mobilePanoramaWidth + "px";
                    console.log(mobilePanoramaWidth);
                } else if ((windowWidth >= 320) && (windowWidth <= 449)) {
                    var mobileWidth = windowWidth - 36;
                    document.querySelector('.l-two-col-right-narrow fieldset').style.width = mobileWidth + "px";
                    document.querySelector('.l-two-col-right-narrow .dropdown-menu').style.width = mobileWidth + "px";
                    console.log(mobileWidth);
                }
            }
            window.onresize = reportWindowSize;
            window.onload = reportWindowSize;
        }

    }
}
export default ShrinkExpand;
