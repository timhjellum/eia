class GoogleAnalytics {
    constructor() {
        /*
        $('.features a').attr("href", function(ind, attr) {
            var featureOrder = $(this).parents('div').attr('class');
            return /\?/.test(attr) ? attr + '&src=home-' + featureOrder : attr + '?src=home-' + featureOrder;
        });
        */

        // if home slider slider href contains '?', append &x=z, else, append ?x=z
        /*
        $('.slider-home h2 a, .slider-home h3 a').attr('href', function(ind, attr) {

            const slideOrder = $(this).parents('li').attr('class');
            const hash_position = attr.indexOf('#');
            const new_url_argument = /\?/.test(attr) ? '&src=home-' + slideOrder : '?src=home-' + slideOrder;

            // if there is no hash in the url, then add the new argument to the end, otherwise insert before the hash.
            return hash_position == -1 ? (attr + new_url_argument) : attr.substring(0, hash_position) + new_url_argument + attr.substring(hash_position, attr.length)
            //return /\?/.test(attr) ? attr + '&src=home-' + pos : attr + '?src=home-' + pos;
        });
        */
    }
}
export default GoogleAnalytics;