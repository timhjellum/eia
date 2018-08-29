var jQuery = require('jquery');

//console.log("search loader script loaded!");

$(document).ready(function() {

  //<![CDATA[
  var usasearch_config = { siteHandle:"eia.doe.gov" };
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://www.eia.gov/global/scripts/search.usa.gov/remote.loader.js"; // NOTE this may need to be updated from //search.usa.gov/javascripts/remote.loader.js" periodically
  document.getElementsByTagName("head")[0].appendChild(script);
  //]]>

});

//}
//export searchLoader;