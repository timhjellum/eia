import $ from "jquery"

class ScrollTo {
  constructor() {
    var apPage = $(".l-body-wrapper.ap").length
    var glossaryPage = $(".l-body-wrapper.glossary").length
    var dataPage = $(".l-body-wrapper.data").length
    console.log("data page: " + dataPage)

    if (apPage == 0) {
      console.log("NOT AN AP PAGE")
    } else if (glossaryPage == 0) {
      console.log("NOT A Glossary PAGE")
    } else {
      $('.l-inner-wrapper a[href*="#"]')
        .not('.l-inner-wrapper [href="#"]')
        .not('.l-inner-wrapper [href="#0"]')
        //				.not('.l-inner-wrapper [href="#0"]')
        .not(".tabs a")
        .click(function (event) {
          //console.log("clicked");
          // Two conditional checks
          // First:
          // location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          // What we're doing is replacing the first forward slash (/) in the pathname
          // for the current location and comparing it to the link that's been clicked.
          // So https://eia.gov/petroleum/, which normally would have
          // a pathname of /petroleum/ would be /petroleum/

          // The or check (||) is to see if the link matches the current domain
          // location.hostname == this.hostname

          // Basically, we want an internal anchor for the page we're on.
          if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            // Assigning the variable target, with the hash of the link that's been clicked
            // which is conveniently enough, a jquery selector for IDs (i.e. #hash)
            var target = $(this.hash)
            // We check the target length - basically, does the element exist?
            // If length equals to 0, we query the DOM by name attribute. Otherwise, we just re-assign target to self.
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]")
            // Does a scroll target exist?
            if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault()
              $("html, body").animate(
                {
                  scrollTop: target.offset().top - 60
                },
                1000,
                function () {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target)
                  $target.closest("h3").next("div").css("display", "block")
                  $target.focus()
                  if ($target.is(":focus")) {
                    // Checking if the target was focused
                    return false
                  } else {
                    $target.attr("tabindex", "-1") // Adding tabindex for elements not focusable
                    $target.focus() // Set focus again
                  }
                }
              )
            }
          }
        })
      // old
      //function scrollToAnchor(pageHash){
      //    if($('a[name='+pageHash+']:not(.ui-tabs-anchor)').length>0){
      //        $('html').animate({scrollTop: $('a[name='+pageHash+']').offset().top-50}, 'slow');
      //        console.log(pageHash + ' offsest: ' + $('a[name='+pageHash+']').offset().top +' page load anchor scroll - 1');
      //    }
      //    else if($(window.location.hash).length>0){
      //        $('html').animate({scrollTop: $(window.location.hash).offset().top-50}, 'slow');
      //        console.log($(window.location.hash) + ' offsest: ' + $(window.location.hash).offset().top +' page load page scroll - 2');
      //    }
      //}
      var windowHash = decodeURI(window.location.hash)
      console.log("window hash: " + windowHash)
      // opens accordion when user is navigating to the data page from another page
      if (windowHash) {
        //console.log(windowHash);
        var target = $(windowHash)
        target = target.length ? target : $("[name=" + windowHash.substr(1) + "]")
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 60
            },
            1000,
            function () {
              var $target = $(target)
              //$target.closest('h3').next('div').css('display', 'block');

              //$target.closest('h3').click();
              //event.preventDefault();

              $target.focus()
              if ($target.is(":focus")) {
                return false
              } else {
                $target.attr("tabindex", "-1")
                $target.focus()
              }
              $target
                .closest("h3")
                .click()
                .accordion({
                  activate: function (event, ui) {
                    if (!$.isEmptyObject(ui.newHeader.offset())) {
                      $("html:not(:animated), body:not(:animated)").animate({ scrollTop: ui.newHeader.offset().top - 50 }, "slow")
                    }
                  }
                })
              $(".accordion-content").each(function () {
                if ($(this).css("display") == "block") {
                  //console.log('accordion-content == block found so change the expand-all to collapse all');
                  $(".expand-collapse-container .expand").css("display", "none")
                  $(".expand-collapse-container .collapse").css("display", "block")
                }
              })
            }
          )
        }
      }
    }
  }
}
export default ScrollTo
