class FirefoxHack {
	constructor() {
        if (navigator.userAgent.search("Firefox") >= 0) {
            var ff_version = navigator.userAgent.match(/Firefox\/([\d]+\.[\d])+/);
            ff_version = parseFloat(ff_version[1]);
            if(ff_version == 0 || ff_version >= 59) {
                $('body').on('mousedown', '.bx-viewport a', function() {
                    var ff_link = $(this);
                    var ff_href = ff_link.attr('href');
                    if(ff_href) {
                        location.href = ff_href;
                        return false;
                    }
                });
            }
        }
    }
}
export default FirefoxHack;