class Modal {
    constructor() {
        // FancyBox jQuery plugin
        //  $("a.lightbox").fancybox();
        $("a.lightbox").fancybox({
            /*
            onUpdate: function() {
              $.each(Highcharts.charts, function(index, chart){ if ($(chart.container).parents('.fancybox-outer').length > 0){ chart.redraw();console.log('redrawing');} });
            },
            */
            autoResize: false // To sidestep issue with Highcharts in Fancybox 2 disappearing when the browser is resized -SNW
        });

        // For HTML content, since Fancybox 2 now requires specifying IFRAME mode explicitly for non-images
        $("a.lightboxhtml").fancybox({
            type: "iframe",
            fitToView: true,
            autoSize: true
        });
    }
}
export default Modal;