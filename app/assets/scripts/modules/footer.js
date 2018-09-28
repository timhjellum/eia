class Footer {
    constructor() {
        $(window).on("load resize", function(e) {
            const footerWidth = $('footer').width();
            const pushHeight = ($('footer').height());
            //console.log('-'+pushHeight+'px');
            if ((footerWidth >= 801) && (footerWidth <= 987)) {
                $('.push').css('height',pushHeight);
                $('.l-body-wrapper').css('margin-bottom',-pushHeight).css('width', footerWidth);
                //console.log('tabletLandscape - footer width: ' + footerWidth + ', footer height (push): ' + pushHeight + ', wrapper margin: ' + '-'+pushHeight+'px');
            } else if ((footerWidth >= 600) && (footerWidth <= 800)) {
                $('.push').css('height',pushHeight);
                $('.l-body-wrapper').css('margin-bottom',-pushHeight).css('width', footerWidth);
                //console.log('tablet - footer width: ' + footerWidth + ', footer height (push): ' + pushHeight + ', wrapper height: ' + '-'+pushHeight+'px');
            } else if ((footerWidth >= 450) && (footerWidth <= 599)) {
                $('.push').css('height',pushHeight);
                $('.l-body-wrapper').css('margin-bottom',-pushHeight).css('width', footerWidth);
                //console.log('mobileLandscape - footer width: ' + footerWidth + ', footer height (push): ' + pushHeight + ', wrapper height: ' + '-'+pushHeight+'px');
            } else if ((footerWidth >= 0) && (footerWidth <= 449)) {
                $('.push').css('height',pushHeight);
                $('.l-body-wrapper').css('margin-bottom',-pushHeight).css('width', footerWidth);
                //console.log('mobile - footer width: ' + footerWidth + ', footer height (push): ' + pushHeight + ', wrapper height: ' + '-'+pushHeight+'px');
            } else {
                $('.push').css('height',pushHeight);
                $('.l-body-wrapper').css('margin-bottom',-pushHeight).css('width', footerWidth);
                //console.log('laptop - footer width: ' + footerWidth + ', footer height (push): ' + pushHeight + ', wrapper height: ' + '-'+pushHeight+'px');
            };
        });
    }
}
export default Footer;