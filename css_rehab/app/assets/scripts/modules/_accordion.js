var jQuery = require('jquery');
require('jquery-ui'); 

console.log("jQuery UI Accordion checking in...");

$(document).ready(function() {
    var icons = {
       header: "ui-icon-circle-arrow-e",
       activeHeader: "ui-icon-circle-arrow-s"
     };
     $( "#accordion" ).accordion({
       icons: "icons",
      heightStyle: "content",
      collapsible: "true"
    });
  });
