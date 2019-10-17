class AZ {
    constructor() {
        /*
                var className = document.getElementsByClassName('az-list');
                if (className.length > 0) {
                    // step 1 - fire script if classname is found
                    if (window.location.href.indexOf('?id=') > -1) {
                        var url = window.location.href;
                        var id = url.substring(url.lastIndexOf('=') + 1);
                        document.getElementById(id).classList.add('active');
                        //console.log(id);
                    } else if (window.location.href.indexOf('?id=') < 1) {
                        document.getElementById('A').classList.add('active');
                    }
                }
                */
        var url = window.location.href;
        var valueOfSecondIdChar = url.substring(url.lastIndexOf('=') + 2);
        var className = document.getElementsByClassName('az-list');

        if (className.length > 0) {
            if (valueOfSecondIdChar == '') {
                //console.log("only one character")
                //else if (window.location.href.indexOf('?id=') > -1) {
                //var url = window.location.href;
                var id = url.substring(url.lastIndexOf('=') + 1);
                $('#' + id).addClass('active');
                scrollToElement();
                //console.log(id + ' found');
            } else if (window.location.href.indexOf('?id=') < 1) {
                //console.log("no char found");
                $('#A').addClass('active');
            } else if (window.location.href.indexOf('?id=natural%20gas') > -1) {
                $('a[href="index.php?id=natural gas"]').addClass("active");
                $('a').not($('a[href="index.php?id=natural gas"]')).removeClass('active');
                scrollToElement();
                //console.log("natural gas hit");
            } else if (window.location.href.indexOf('?id=alternative%20fuels') > -1) {
                $('a[href="index.php?id=alternative fuels"]').addClass("active");
                $('a').not($('a[href="index.php?id=alternative fuels"]')).removeClass('active');
                scrollToElement();
                //console.log("alternative fuels hit");
            } else if (window.location.href.indexOf('?id=electricity') > -1) {
                $('a[href="index.php?id=electricity"]').addClass("active");
                $('a').not($('a[href="index.php?id=electricity"]')).removeClass('active');
                scrollToElement();
                //console.log("electricity hit");
            } else if (window.location.href.indexOf('?id=coal') > -1) {
                $('a[href="index.php?id=coal"]').addClass("active");
                $('a').not($('a[href="index.php?id=coal"]')).removeClass('active');
                scrollToElement();
                //console.log("coal hit");
            } else if (window.location.href.indexOf('?id=petroleum') > -1) {
                $('a[href="index.php?id=petroleum"]').addClass("active");
                $('a').not($('a[href="index.php?id=petroleum"]')).removeClass('active');
                console.log("petroleum hit");
            } else if (window.location.href.indexOf('?id=renewable') > -1) {
                $('a[href="index.php?id=renewable"]').addClass("active");
                $('a').not($('a[href="index.php?id=renewable"]')).removeClass('active');
                scrollToElement();
                //console.log("renewable hit");
            } else if (window.location.href.indexOf('?id=nuclear') > -1) {
                $('a[href="index.php?id=nuclear"]').addClass("active");
                $('a').not($('a[href="index.php?id=nuclear"]')).removeClass('active');
                scrollToElement();
                //console.log("nuclear hit");
            } 

            function scrollToElement() {
                $('html, body').animate({
                    scrollTop: $('.filtered-term').offset().top - 60
                }, 1000);
            };

        }
    };
}
export default AZ;