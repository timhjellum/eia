import $ from 'jquery';

class OldSlider {
    constructor() {

        // HP (slider3) - banners

        $('#slider3 h2 a, #slider3 h3 a').attr("href", function (ind, attr) {
            // if the href contains "?", append &x=z, else, append ?x=z
            var pos = $(this).parents('li').attr('class').replace("feature_new", "b");
            var hash_position = attr.indexOf('#');
            var new_url_argument = /\?/.test(attr) ? '&src=home-' + pos : '?src=home-' + pos;

            // if there is no hash in the url, then add the new argument to the end, otherwise insert before the hash.
            return hash_position == -1 ? (attr + new_url_argument) : attr.substring(0, hash_position) + new_url_argument + attr.substring(hash_position, attr.length)
            //return /\?/.test(attr) ? attr + '&src=home-' + pos : attr + '?src=home-' + pos;
        });
        // L2 (slider1) - banners
        // Set ban(i) class to carousel li elements
        var tito = 1;
        $('#slider1 li').each(function () {
            $(this).attr('id', 'b' + tito);
            tito++;
        });
        $('#slider1 a').attr("href", function (ind, attr) {
            // find parent li class name
            var pos1 = $(this).parents('li').attr('id');
            // parse page title for position reference
            var pos2 = $('.title').text().trim().replace(/(\w+).*/, "$1");
            // if the href contains "?", append &x=z, else, append ?x=z
            return /\?/.test(attr) ? attr + '&src=' + pos2 + '-' + pos1 : attr + '?src=' + pos2 + '-' + pos1;
        });
        // HP Features
        $('.feature_sec a').attr("href", function (ind, attr) {
            // if the href contains "?", append &x=z, else, append ?x=z
            var pos3 = $(this).parents('span').attr('class').replace("home_sm_feature", "f");
            return /\?/.test(attr) ? attr + '&src=home-' + pos3 : attr + '?src=home-' + pos3;
        });
        // L2 features
        // Set ban(i) class to carousel li elements
        var tato = 1;
        $('.mr_temp1 .main_col h3').each(function () {
            $(this).addClass('f' + tato);
            tato++;
        });
        $('.mr_temp1 .main_col h3 a').attr("href", function (ind, attr) {
            // find parent li class name
            var pos4 = $(this).parents('h3').attr('class');
            // parse page title for position reference
            var pos5 = $('.title').text().trim().replace(/(\w+).*/, "$1");
            // if the href contains "?", append &x=z, else, append ?x=z
            return /\?/.test(attr) ? attr + '&src=' + pos5 + '-' + pos4 : attr + '?src=' + pos5 + '-' + pos4;
        });









        // What's New Menu Loader
        //$('#whatsnew3').load('/CFusionMX7/global/data/whatsnew.htm');
        // comment toggle 
        //$('#star').click(function () {
        //    $('.rs_comments').slideDown('slow');
        //});















        // comment toggle 
        $('#closer').click(function () {
            $('.rs_comments').slideUp('slow');
        });














        // Carousel2 Funtion 
        var slider2 = $('#slider2').bxSlider({
            controls: false
        });

        $('.thumbs2 a').click(function () {
            var thumbIndex2 = $('.thumbs2 a').index(this);
            slider2.goToSlide(thumbIndex2);
            $('.thumbs2 a').removeClass('pager-active2');
            $(this).addClass('pager-active2');
            return false;
        });

        $('.thumbs2 a:first').addClass('pager-active2');
        // Carousel3 Funtion 
        var slider3 = $('#slider3').bxSlider({
            auto: true,
            autoHover: true,
            controls: false,
            pause: 10000,
            pager: true,
            pagerActiveClass: 'pager-active3',
            pagerSelector: '.thumbs3'
        });

        //no 'var' here, this needs to be global
        sliderOpts = {
            controls: false,
            autoHover: true,
            auto: true,
            pager: true,
            pause: 10000,
            pagerActiveClass: 'pager-active',
            pagerSelector: '.thumbs'
        };
    }
}
export default OldSlider;