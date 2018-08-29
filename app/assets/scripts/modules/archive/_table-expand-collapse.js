import $ from 'jquery';

class TableExpandCollapse {
    constructor() {

        // Table expand/contract function
        $(".contable thead").click(function () {
            var $this = $(this);
            $this.next("tbody").toggle()
            var $curr = $this.find("th:first").toggleClass("active");
        });

        if (window.location.hash != '') {
            if (window.location.hash.indexOf('/') == -1 && window.location.hash.indexOf('?') == -1)
                $(window.location.hash).click();
        }
        else
            $(".contable .auto_open").click();

        //Added so that links to contable sections on the same page will open the section when clicked. -SG 11/4/2013
        if ($('.contable').length > 0) {
            $('a[href^="#"]').on('click', function (event) {
                if (!$($(this).attr('href') + " th:first").hasClass("active")) {
                    $($(this).attr('href') + " th:first").click();
                }
                return true;
            });
        }

        $(".contable a").click(function (e) {
            $curr = $(this).parents('tbody').prev('thead').find('th:first');
            window.location.hash = $curr.children('a').attr('name');
        });

        // Table expand all function 
        $(document).on('click', ".expandall", function (e) {
            $(this).text("- COLLAPSE ALL").removeClass("expandall").addClass("collapseall")
                .parent().next(".contable").children("tbody").show()
                .parent().find("th:first-child").addClass("active");
            // redraw all sparklines when tables are expanded. Added 2013-04-16 by christian.stauffer@eia.gov
            $.sparkline_display_visible();
        });
        $(document).on('click', ".collapseall", function (e) {
            $(this).text("+ EXPAND ALL").removeClass("collapseall").addClass("expandall")
                .parent().next(".contable").children("tbody").hide()
                .parent().find("th").removeClass("active");
        });
    }
}
export default TableExpandCollapse;