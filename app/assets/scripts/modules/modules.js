class ModuleScripts {
    constructor() {
        $('.toggle.expand-collapse').click(function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).next('.expand-collapse-content').slideToggle("slow", function() {
                console.log("it worked");
            });
            console.log("expand-collapse-content");
        });

        $('.toggle.tbody-expand-collapse').click(function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).parent().parent().parent().next('.expand-collapse-tbody').slideToggle("slow", function() {
                console.log("it worked");
            });
            console.log("tr expand-collapse-content");
        });

        $('.toggle.expand-collapse-content-above').click(function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).prev('.expand-collapse-content').slideToggle("slow", function () {
                //console.log("expand-collapse-content");
            });
        });
        $('.toggle.show-hide').click(function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $('.show-hide-content').toggle();
            //console.log("show-hide-content");
        });
        $('a').each(function () {
            var a = new RegExp('/' + window.location.host + '/');
            if (!a.test(this.href) && ($(this).find('img').length === 1) && ($(this).attr('href'))) {
                $(this).addClass('external-image-link');
            }
            //console.log("external-image-link")
        });
        var primaryHide = document.querySelectorAll('.primary.hide-mt a'), i;
        for (i = 0; i < primaryHide.length; ++i) {
            var $true = (primaryHide[i].getAttribute('href') == '')
            if ($true == true) {
                primaryHide[i].parentElement.style.display = 'none'
            }
            //console.log(".primary.hide-mt a")
        }
        var primaryAltHide = document.querySelectorAll('.primary-alt.hide-mt a'), i;
        for (i = 0; i < primaryAltHide.length; ++i) {
            var $true = (primaryAltHide[i].getAttribute('href') == '')
            if ($true == true) {
                primaryAltHide[i].parentElement.style.display = 'none'
            }
            //console.log(".primary-alt.hide-mt a")
        }
        var secondaryHide = document.querySelectorAll('.secondary.hide-mt a'), i;
        for (i = 0; i < secondaryHide.length; ++i) {
            var $true = (secondaryHide[i].getAttribute('href') == '')
            if ($true == true) {
                secondaryHide[i].parentElement.style.display = 'none'
            }
            //console.log(".secondary.hide-mt a")
        }
        var secondaryAltHide = document.querySelectorAll('.secondary-alt.hide-mt a'), i;
        for (i = 0; i < secondaryAltHide.length; ++i) {
            var $true = (secondaryAltHide[i].getAttribute('href') == '')
            if ($true == true) {
                secondaryAltHide[i].parentElement.style.display = 'none'
            }
            //console.log(".secondary-alt.hide-mt a")
        }
        var energyEducationFoot = document.querySelectorAll('.energy-education li.foot a'), i;
        for (i = 0; i < energyEducationFoot.length; ++i) {
            var $true = (energyEducationFoot[i].getAttribute('href') == '')
            if ($true == true) {
                energyEducationFoot[i].parentElement.style.display = 'none'
            }
            //console.log(".energy-education li.foot a")
        }
        var updatedDataDeries = document.querySelectorAll('.updated-data-series a'), i;
        for (i = 0; i < updatedDataDeries.length; ++i) {
            var $true = (updatedDataDeries[i].getAttribute('href') == '')
            if ($true == true) {
                updatedDataDeries[i].parentElement.style.display = 'none'
            }
            //console.log(".updated-data-series a")
        }
        var energyEducation = document.querySelectorAll('.energy-education h2 a'), i;
        for (i = 0; i < energyEducation.length; ++i) {
            var $true = (energyEducation[i].getAttribute('href') == '')
            if ($true == true) {
                energyEducation[i].parentElement.parentElement.parentElement.style.display = 'none'
            }
            //console.log(".energy-education h2 a")
        }
        var visualizations = document.querySelectorAll('.visualizations a'), i;
        for (i = 0; i < visualizations.length; ++i) {
            var $true = (visualizations[i].getAttribute('href') == '')
            if ($true == true) {
                visualizations[i].parentElement.parentElement.parentElement.style.display = 'none'
            }
            //console.log(".visualizations a")
        }
    }
}
export default ModuleScripts;