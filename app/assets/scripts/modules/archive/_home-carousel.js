// class homeCarousel {
$(document).ready(function() {
    // carousel home
    // carousel home
    // carousel home
    console.log('carousel home script found!');
    //var slider3 =

  		$('.bxslider').bxSlider({
      	auto: true,
        autoHover: true,
      	controls: false,
        adaptiveHeight: true,
      	pause: 10000,
      });



    $('.home-carousel h2 a, .home-carousel h3 a').attr( "href", function(ind,attr) {
      // if the href contains "?", append &x=z, else, append ?x=z
      var pos = $(this).parents('li').attr('class').replace("feature_new", "b");
      var hash_position = attr.indexOf('#');
      var new_url_argument = /\?/.test(attr) ? '&src=home-' + pos : '?src=home-' + pos;

      // if there is no hash in the url, then add the new argument to the end, otherwise insert before the hash.
      return hash_position == -1 ? (attr + new_url_argument) : attr.substring(0, hash_position) + new_url_argument + attr.substring(hash_position, attr.length)
      //return /\?/.test(attr) ? attr + '&src=home-' + pos : attr + '?src=home-' + pos;
    });





    var defaultTitle = 'U.S. Energy Information Administration - EIA - Independent Statistics and Analysis',
    titlePrefix = 'EIA';

    if( document.title == '' ){
      var title = titlePrefix,
      titleMMain = $('.title a').text(),
      titleMain = $('.title h1').text(),
      titleSub = $('.subnav .active').text();

      if(titleMain != ''){
        if( titleMMain != '')
          title += ' - ' + titleMMain.substring(titleMMain.indexOf(titleMMain.charAt(1)));

        title += ' - ' + titleMain;

    	  if(titleSub!= '')
    	    title += ' - ' + titleSub;
      } else
        title = defaultTitle;

      document.title = title;
    }
});
//}
//export homeCarousel;
