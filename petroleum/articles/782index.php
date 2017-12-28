<?php
$pageTitle = "Comparison of Selected EIA-782 Data With Other Data Sources";
$L2Title = "Comparison of Selected EIA-782 Data With Other Data Sources";
?>
<?php include_once('../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<?php
if(isset($pageTitle) && $pageTitle) {
print "<title>" . $pageTitle . "</title>"; print PHP_EOL;
$pageTitle = '';
}
?>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
   <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>
  $( function() {
    var projects = [
      {
        value: "jquery",
        label: "jQuery",
 //       desc: "the write less, do more, JavaScript library",
 //       icon: "jquery_32x32.png",
        anchor: "1"
      },
      {
        value: "jquery-ui",
        label: "jQuery UI",
//        desc: "the official user interface library for jQuery",
//        icon: "jqueryui_32x32.png",
        anchor: "2"
      },
      {
        value: "sizzlejs",
        label: "Sizzle JS",
//        desc: "a pure-JavaScript CSS selector engine",
//        icon: "sizzlejs_32x32.png",
        anchor: "3"
      }
    ];
 
    $( "#project" ).autocomplete({
      minLength: 0,
      source: projects,
      focus: function( event, ui ) {
        $( "#project" ).val( ui.item.label );
        return false;
      },
      select: function( event, ui ) {
        $( "#project" ).val( ui.item.label );
        $( "#project-id" ).val( ui.item.value );
 //       $( "#project-description" ).html( ui.item.desc );
        $( "#Go" ).attr( "href", "http://www.google.com?=" + ui.item.anchor );
 
        return false;
      }
    });
//    .autocomplete( "instance" )._renderItem = function( ul, item ) {
//      return $( "<li>" )
//        .append( "<div>" + item.label + "<br>" + item.desc + "</div>" )
//        .appendTo( ul );
//    };
  } );
  </script>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<h1>Comparison of Selected EIA-782 Data With Other Data Sources</h1>
<p class="date">December 12, 2012<br />
</p>
<p>This article compares annual average prices reported from the EIA-782 survey series for residential No. 2 distillate, on-highway diesel fuel, retail regular motor gasoline, refiner No. 2 fuel oil for resale, refiner No. 2 diesel fuel for resale, refiner regular motor gasoline for resale, and refiner kerosene-type jet fuel for resale with annual average prices reported by other sources. In terms of volume, it compares EIA-782C Prime Supplier annual volumes for motor gasoline (all grades), distillate fuel oil, kerosene-type jet fuel and residual fuel oil with annual volumes from other sources.
</p>
<p><a href="/petroleum/archive/price-comparison092012_article.pdf"><i class="ico pdf">PDF</i>See full report</a></p>
 

<input id="project"><a id="Go" href="www.google.com?=hi">Hi</a>
<input type="hidden" id="project-id">

 

</div>
<div class="l-side-column">
<?php include('./includes/side-nav_782.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>





