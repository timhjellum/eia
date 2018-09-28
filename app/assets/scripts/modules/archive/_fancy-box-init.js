//class HeaderMenu {  
console.log("Fancy-Box Initiated!");

$(document).ready(function() {
    $('.dropdown').dd();
    $('div.dropdown-links a').click(function() {
      $('table.file-table').children('tbody').hide();
      $('table.file-table th').removeClass('active');
      var sID = this.href.substring(this.href.indexOf('#') + 1);
      $("[name$='" + sID + "']").click();
    });
});


// Fancybox




// handle active tabs

$(document).ready(function() {
    $('.fancybox-menu').click(function () {
      var target = $(this).data("target");
      var options = {active : 0};

      switch(target) {
        case 'sources':
              options.active = 0;
              break;

        case 'topics':
              options.active = 1;
              break;

        case 'geography':
              options.active = 2;
              break;

        case 'tools':
              options.active = 3;
              break;

        case 'learn':
              options.active = 4;
              break;

        case 'news':
              options.active = 5;
              break;

        case 'default':
              options.active = 0;
      }

      $('.section-tabs').tabs(options);

      });
});