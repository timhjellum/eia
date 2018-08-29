//const $ = require("jquery");
//import scrollTo from '../../../../node_modules/scrollto/index.js';
//import scrollTo from '../../../../node_modules/animated-scroll-to/animated-scroll-to.js';
//import scrollTo from '../../../../node_modules/scroll-to-anchor/index.js';

class ScrollTo {
    constructor() {

        // Get hash from query string
        //var hash = window.location.hash;



//console.log(hashValue);
//        console.log(hashValue.substr(1));

//    if (hashValue) {
//        var nameValue = $(hashValue.substr(1));
//        $('a[name="'+ nameValue +'"]').addClass('border');
//        console.log('dilly');
//       }
//    }









        // Table expand/contract function
        /*
        $(".accordion h3").click(function() {
            var $this = $(this);
            //console.log('accordion click function: ' + $this.attr('id') + ', ' + $('a[name='+$this.attr('id')+']').offset().top);
            $this.next(".content").toggle().promise().done(function() {
                //console.log('trigger scroll');
                scrollToAnchor($this.attr('id'));
            });
            var $curr = $this.find("h3").toggleClass("ui-accordion-header-active");
            //console.log($this.attr('id'));
        });
		*/













        /*
                function scrollToAnchor(pageHash) {
                    if ($('a[name=' + pageHash + ']:not(.ui-tabs-anchor)').length > 0) {
                        $('html').animate({ scrollTop: $('a[name=' + pageHash + ']').offset().top - 50 }, 'slow');
                        //console.log(pageHash + ' offsest: ' + $('a[name='+pageHash+']').offset().top +' page load anchor scroll');
                    } else if ($(window.location.hash).length > 0) {
                        $('html').animate({ scrollTop: $(window.location.hash).offset().top - 50 }, 'slow');
                        //console.log($(window.location.hash) + ' offsest: ' + $(window.location.hash).offset().top +' page load page scroll');
                    }
                }

                if (window.location.hash != '') {
                    if (window.location.hash.indexOf('/') == -1 && window.location.hash.indexOf('?') == -1) {
                        $(document).ready(function() {
                            var pageHash = window.location.hash.split('#')[1];
                            if ($(window.location.hash).parent().attr('class') == 'accordion') {
                                //console.log('inside accordion hash check');
                                $(window.location.hash).click();
                            } else {
                                //console.log('not-a-accordion scroll trigger');
                                scrollToAnchor(pageHash);
                            }
                        });
                        //$(document).ready(hashHandler);
                        //window.onhashchange = hashHandler;
                        //$(window.location.hash).click();
                    }
                } else


                    $(".accordion .auto_open").click();






        //Added so that links to accordion sections on the same page will open the section when clicked. -SG 11/4/2013

        if ($('.accordion').length > 0) {
            console.log('found the accordion');
            $('a[href^="#"]').on('click', function(event) {
                console.log('clicked');
                if (!$($(this).attr('href') + " h3").hasClass("ui-accordion-header-active")) {
                    $($(this).attr('href') + " h3").click();
                }
                return true;
            });
        }
        
                        $('body :not(.accordion) a').not('.ui-tabs-anchor').click(function(event) {
                            if (event.target.nodeName == 'A' && event.target.hash) {

                                var pageHash = event.target.hash.split('#')[1];
                                if ($('a[name=' + pageHash + ']').length > 0) {
                                    $('html').animate({ scrollTop: $('a[name=' + pageHash + ']').offset().top - 50 }, 'slow');
                                    console.log(event.target + '; anchor scroll');
                                } else if ($(event.target.hash).length > 0) {
                                    $('html').animate({ scrollTop: $(event.target.hash).offset().top - 50 }, 'slow');
                                    console.log(event.target + '; page scroll');
                                }

                            }
                        });

                        $(".accordion a").click(function(e) {
                            $curr = $(this).parents('content').prev('h3');
                            //.find('th:first');
                            window.location.hash = $curr.children('a').attr('name');
                        });

                        // Table expand all function
                     
                        $(document).on('click', ".expandall", function(e) {
                            $(this).text("- COLLAPSE ALL").removeClass("expandall").addClass("collapseall")
                                .parent().next(".accordion").children(".content").show()
                                .parent().find("th:first-child").addClass("active");
                            // redraw all sparklines when tables are expanded. Added 2013-04-16 by christian.stauffer@eia.gov
                            $.sparkline_display_visible();
                        });
                        $(document).on('click', ".collapseall", function(e) {
                            $(this).text("+ EXPAND ALL").removeClass("collapseall").addClass("expandall")
                                .parent().next(".accordion").children(".content").hide()
                                .parent().find("th").removeClass("active");
                		});
                		*/

    }
}

export default ScrollTo;