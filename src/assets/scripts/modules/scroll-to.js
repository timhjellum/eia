import $ from "jquery"

class ScrollTo {
  constructor() {
    var apPage = $(".l-body-wrapper.ap").length
    var glossaryPage = $(".l-body-wrapper.glossary").length
    if (apPage < 1 && glossaryPage < 1) {
      //console.log("this is NOT an AP or Glossary page")
      $('.l-inner-wrapper a[href*="#"]')
        .not('.l-inner-wrapper [href="#"]')
        .not('.l-inner-wrapper [href="#0"]')
        .not(".tabs a")
        .click(function (event) {
          if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var target = $(this.hash)
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]")
            if (target.length) {
              event.preventDefault()
              $("html, body").animate(
                {
                  scrollTop: target.offset().top - 60
                },
                1000,
                function () {
                  var $target = $(target)
                  $target.closest("h3").next("div").css("display", "block")
                  $target.focus()
                  if ($target.is(":focus")) {
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
      var windowHash = decodeURI(window.location.hash)
      //console.log("window hash: " + windowHash)
      if (windowHash) {
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
