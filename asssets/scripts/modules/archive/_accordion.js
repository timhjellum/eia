//class Accordion {  
console.log("Accordion script loaded!");

$(document).ready(function() {
    $( function() {
        $("#accordion").accordion();
    });
});
/*
if(document.documentElement.clientWidth < 769) {
    $(function(){
        $(".accordion-table").accordion({
            collapsible: true,
            heightStyle: "content",
            active: false,
            down: {
                easing: 'linear'
            }
        }).on("click", "h2.accordion-panel", function(e) {
            $("h2.accordion-panel").each(function(i, el) {
                $(this).find(".plus-eiablue").text($(el).is(".ui-state-active") ? "-" : "+");
            });
        });
    });
}
*/
//}
//export Accordion;