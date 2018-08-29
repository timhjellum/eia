class ModuleScripts {
    constructor() {
        //this.moduleVisualizations = $(".visualizations h3 a:empty");
        //this.moduleLinkList = $(".link-list a:empty");
        //this.hideDescriptionIfEmpty = $(".slider-home h3 a:empty");
        //this.hideElementIfEmpty = $(".hide-mt a:empty");
        // these scripts look for an empty element and then hides the parent element
        //        this.moduleLinkList.each((index, element) => {
        //            $(element).parent().addClass("hide"); 
        //        })
        //        this.moduleVisualizations.each((index, element) => {
        //            $(element).closest('li').addClass("hide"); 
        //        })


        $('a').each(function() {
            var a = new RegExp('/' + window.location.host + '/');
            //if (!a.test(this.href) && ($(this).find('img').length === 0) && ($(this).attr('href'))) {
            //    $(this).addClass('external-link');
            //}
            if (!a.test(this.href) && ($(this).find('img').length === 1) && ($(this).attr('href'))) {
                $(this).addClass('external-image-link');
            }
        });

/*
if(window.location.href.indexOf("eia.gov")!=-1) {
    $(this).removeClass("specialbrand");
    console.log("yep");
}
*/



        this.events();
    }






    events() {



        //this.hideElementIfEmpty.each((index, element) => {
        //    $(element).closest('li').addClass("hide"); 
        //});









        // $(".slider-home h3 a:empty").each(function() {
        //     $(this).parent().parent().addClass("no-description");
        // });

        $('.slider-home h3 a').each(function() {
            if ($(this).text().trim().length <= 0) {
                $(this).parent().parent().addClass("no-description");
                //console.log('no description on slider so adding a no-description class');
            }
        });

        $('div.energy-education h2 a').each(function() {
            if ($(this).text().trim().length <= 0) {
                $(this).parent().parent().parent().parent().remove();
                //console.log('removing empty element');
            }
        });
        $('div.energy-education li.foot a').each(function() {
            if ($(this).attr('href').length <= 0) {
                $(this).remove();
                //console.log('removing empty element');
            }
        });
        $('.visualizations a').each(function() {
            if ($(this).text().trim().length <= 0) {
                $(this).parent().remove();
                //console.log('removing empty element');
            }
        });
        $('ul.updated-data-series a').each(function() {
            if ($(this).attr('href').length <= 0) {
                $(this).parent().remove();
                //console.log('removing empty element');
            }
        });
        $('.secondary .icon a').each(function() {
            if ($(this).attr('href').length <= 0) {
                $(this).closest('li').remove();
                //console.log('removing empty element');
            }
        });
        $('.secondary.hide-mt a').each(function() {
            if ($(this).attr('href').length <= 0) {
                $(this).parent().remove();
                //console.log('hiding "secondary.hide-mt" empty element');
            }
        });

        //        $('.hide-mt a').each(function() {
        //            if ($(this).text().trim().length <= 0) {
        //                $(this).closest('li').remove();
        //                console.log('removing empty element');
        //            }
        //        });


        //this.hideDescriptionIfEmpty.each((index, element) => {
        //    $(element).closest('li').addClass('no-description');
        //});



        $('.features a').attr("href", function(ind, attr) {
            var featureOrder = $(this).parents('div').attr('class');
            return /\?/.test(attr) ? attr + '&src=home-' + featureOrder : attr + '?src=home-' + featureOrder;
        });
    }
}
export default ModuleScripts;