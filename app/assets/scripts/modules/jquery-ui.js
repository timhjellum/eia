/* widgets
//import Accordion from '../../../../node_modules/jquery-ui/ui/widgets/accordion.js';
//import Tabs from '../../../../node_modules/jquery-ui/ui/widgets/tabs.js';
//import Datepicker from '../../../../node_modules/jquery-ui/ui/widgets/datepicker.js';
import Version from '../../../../node_modules/jquery-ui/ui/version.js';
import Widget from '../../../../node_modules/jquery-ui/ui/widget.js';
import Position from '../../../../node_modules/jquery-ui/ui/position.js';
import FormResetMixin from '../../../../node_modules/jquery-ui/ui/form-reset-mixin.js';
import Keycode from '../../../../node_modules/jquery-ui/ui/keycode.js';
import Labels from '../../../../node_modules/jquery-ui/ui/labels.js';
import UniqueID from '../../../../node_modules/jquery-ui/ui/unique-id.js';
import Core from '../../../../node_modules/jquery-ui/ui/core.js';
import Effect from '../../../../node_modules/jquery-ui/ui/effect.js';
import EscapeSelector from '../../../../node_modules/jquery-ui/ui/escape-selector';
import SafeActiveElement from '../../../../node_modules/jquery-ui/ui/safe-active-element';
*/

//class jQueryUi {
//    constructor() {

        $('.page_tabs').tabs();
        $('.tabs').tabs();


        $('.accordion').accordion({
            heightStyle: 'content',
            active: false,
            collapsible: true,
            header: 'h3',
            icons: {
                'header': 'ico expand',
                'activeHeader': 'ico collapse'
            },
            activate: function (event, ui) {
                if (!$.isEmptyObject(ui.newHeader.offset())) {
                    $('html:not(:animated), body:not(:animated)').animate({ scrollTop: ui.newHeader.offset().top - 50 }, 'slow');
                }
            }
        });
        $('.accordion.all-open').accordion({
            heightStyle: 'content',
            active: true,
            collapsible: true,
            header: 'h3',
            icons: false
        });
        $('.accordion.all-open h3').removeClass('ui-accordion-header-collapsed').addClass('ui-accordion-header-active').attr({ 'aria-selected': 'true', 'tabindex': '0' });
        $('.accordion.all-open .ui-accordion-content').addClass('ui-accordion-content-active').attr({ 'aria-expanded': 'true', 'aria-hidden': 'false' }).show();
        
        $('.accordion.first-open').accordion({
            heightStyle: 'content',
            collapsible: true,
            header: 'h3',
            icons: {
                'header': 'ico expand',
                'activeHeader': 'ico collapse'
            },
            activate: function (event, ui) {
                if (!$.isEmptyObject(ui.newHeader.offset())) {
                    $('html:not(:animated), body:not(:animated)').animate({ scrollTop: ui.newHeader.offset().top - 50 }, 'slow');
                }
            }
        });
        $('.accordion.first-open > h3:first-of-type').removeClass('ui-accordion-header-collapsed').addClass('ui-accordion-header-active').attr({ 'aria-selected': 'true', 'tabindex': '0' });
        $('.accordion.first-open > div:first-of-type').addClass('ui-accordion-content-active').attr({ 'aria-expanded': 'true', 'aria-hidden': 'false' }).show();
        $('.accordion.first-open > h3:first-of-type span').addClass('collapse').removeClass('expand').css('display','block');
        
        // set the initial state
        $('.collapse').hide();
        /*

        $('.l-inner-wrapper a[href*="#"]').not('.l-inner-wrapper [href="#"]').not('.l-inner-wrapper [href="#0"]').click(function (event) {
            // On-page links
            console.log("clicked");
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 60
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.closest('h3').next('div').css('display', 'block');
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        }
                    });
                }
            }
        });
        */
        /*
        var windowHash = decodeURI(window.location.hash);
        // opens accordion when user is navigating to the data page from another page        
        if (windowHash) {
            console.log(windowHash);
            var target = $(windowHash);
            target = target.length ? target : $('[name=' + windowHash.substr(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 60
                }, 1000, function () {
                    var $target = $(target);
                    $target.closest('h3').next('div').css('display', 'block');
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    }
                });
            }
        }
        */
        $('.expand-collapse-container .expand').click(function () {
            $(this).parent().next('div').find('h3').removeClass('ui-accordion-header-collapsed').addClass('ui-accordion-header-active').attr({ 'aria-selected': 'true', 'tabindex': '0' });
            $(this).parent().next('div').find('.ui-accordion-content').addClass('ui-accordion-content-active').attr({ 'aria-expanded': 'true', 'aria-hidden': 'false' }).show();
            $(this).hide();
            $(this).parent('span').find('.collapse').show();
            $(this).parent().next('div').find('.ui-accordion-header-icon').removeClass('expand').addClass('collapse').attr({ 'aria-selected': 'true', 'tabindex': '0' });
        });
        $('.expand-collapse-container .collapse').click(function () {
            $(this).parent().next('div').find('h3').removeClass('ui-accordion-header-active').addClass('ui-accordion-header-collapsed').attr({ 'aria-selected': 'false', 'tabindex': '-1' });
            $(this).parent().next('div').find('.ui-accordion-content').removeClass('ui-accordion-content-active').attr({ 'aria-expanded': 'false', 'aria-hidden': 'true' }).hide();
            $(this).hide();
            $(this).parent('span').find('.expand').show();
            $(this).parent().next('div').find('.ui-accordion-header-icon').removeClass('collapse').addClass('expand').attr({ 'aria-selected': 'true', 'tabindex': '0' });
        });
//   }
//}
//export default jQueryUi;