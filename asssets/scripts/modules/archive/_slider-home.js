

// check the page resolution on initial page load and if the browser is resized
$(document).ready(function() {
    $('.slider-home h2 a, .slider-home h3 a').attr( "href", function(ind,attr) {
      // if the href contains "?", append &x=z, else, append ?x=z
      var pos = $(this).parents('li').attr('class').replace("feature_new", "b");
      var hash_position = attr.indexOf('#');
      var new_url_argument = /\?/.test(attr) ? '&src=home-' + pos : '?src=home-' + pos;

      // if there is no hash in the url, then add the new argument to the end, otherwise insert before the hash.
      return hash_position == -1 ? (attr + new_url_argument) : attr.substring(0, hash_position) + new_url_argument + attr.substring(hash_position, attr.length)
      //return /\?/.test(attr) ? attr + '&src=home-' + pos : attr + '?src=home-' + pos;
    });
    /*
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
    */
  // run on initial page load
    checkSize();
    // run on window resize
    $(window).resize(checkSize);
});

function checkSize() {
    // outer wrapper is set as 990px for laptop and desktop
    var layoutWrapperWidth = $(".l-outer-wrapper").width();

    if ((layoutWrapperWidth) >= "988") {
        console.log("laptop and desktop");
        $(".bxslider").bxSlider({
          auto: true,
          autoHover: true,
          controls: false,
          adaptiveHeight: true,
          pause: 10000,
          //pagerSelector: ".slider-pager-location"
    });

  } else if ((layoutWrapperWidth >= 801) && (layoutWrapperWidth <= 987)) {
        console.log("tablet-landscape");
        $(".bxslider").bxSlider({
          auto: true,
          autoHover: true,
          controls: false,
          adaptiveHeight: true,
          pause: 10000
    });
    $(".bx-wrapper").css("width", layoutWrapperWidth);
    $(".bx-viewport").css("width", layoutWrapperWidth);
    $(".slider-home").css("width", layoutWrapperWidth);

    } else if ((layoutWrapperWidth >= 600) && (layoutWrapperWidth <= 800)) {
        console.log("tablet slide width");
        $(".bxslider").bxSlider({
          auto: true,
          autoHover: true,
          controls: false,
          adaptiveHeight: true,
          pause: 10000
    });
    $(".bx-wrapper").css("width", layoutWrapperWidth);
    $(".bx-viewport").css("width", layoutWrapperWidth);
    $(".slider-home").css("width", layoutWrapperWidth);

    } else if ((layoutWrapperWidth >= 450) && (layoutWrapperWidth <= 599)) {
        console.log("mobile landscape slide width");
        $(".bxslider").bxSlider({
          auto: true,
          autoHover: true,
          controls: false,
          adaptiveHeight: true,
          pause: 10000
    });
    $(".bx-wrapper").css("width", layoutWrapperWidth);
    $(".bx-viewport").css("width", layoutWrapperWidth);
    $(".slider-home").css("width", layoutWrapperWidth);

    } else if ((layoutWrapperWidth >= 320) && (layoutWrapperWidth <= 449)) {
        console.log("mobile slide width");
        $(".bxslider").bxSlider({
          auto: true,
          autoHover: true,
          controls: false,
          adaptiveHeight: true,
          pause: 10000
    });
    $(".bx-wrapper").css("width", layoutWrapperWidth);
    $(".bx-viewport").css("width", layoutWrapperWidth);
    $(".slider-home").css("width", layoutWrapperWidth);
    } else {
        console.log("cannot determine screen resolution");
    }
}
