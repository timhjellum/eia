<?phprequire("includes/TableQueriesClass.php");
$table_builder = new TableQueries;
$table 			= null;
$table_key 	= null;
$source_key = null;
$period 		= null;
$load_main 	= true;
$history 		= false;
if (isset($_GET['table']) && isset($_GET['table_key']) && isset($_GET['period'])) {
$table 			= htmlspecialchars($_GET['table']);
$period 		= htmlspecialchars($_GET['period']);
$table_key 	= htmlspecialchars($_GET['table_key']);
$source_key = htmlspecialchars($_GET['source_key']);
$history 		= htmlspecialchars($_GET['history']);
$validate_table_key = $table_builder->validate_table_keys($table, $period);
$valid_period 			= $table_builder->validate_period($table, $period);
if (!$history) {
$history=false;
}
if(in_array($table_key, $validate_table_key) && $valid_period) {
$load_main = false;
$key_period = substr($table, -1);
if ($key_period!=$period) {
$table_key = substr_replace($table_key,$period,-1);
// NOTE look at adding code to update URL $_GET var
}
} else {
$load_main = true;
}
}
$hct='y'; // NOTE include highcharts theme ----------------------------------
?>
<?php include_once('../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="cache-control" content="max-age=0" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="expires" content="0" />
<meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
<meta http-equiv="pragma" content="no-cache" />
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php  if(!isset($no_titling)) include"../../global/includes/titling.inc"; ?>
<style media="screen">
</style>
<link rel="stylesheet" href="css/jquery.toast.min.css">
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<?php include "includes/subnav_header.inc"; ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<?php
if ($load_main == false) {
echo "<p><a href=\"./\">Table list</a></p>";
// echo "<p><a href=\"./\">Table list</a> <div id=\"message\">Loading ...</div></p>";
// echo "<div id=\"message\">Loading ...</div>";
// echo "<div id=\"panel\">
// <div id=\"container\"></div>
// <div id=\"series_keys\">
// <p>Uncheck to remove</p>
// <table></table>
// </div>
// </div>";
// NOTE: keep this code --------------------------------------------------
// echo "<div id=\"panel\">
// <div id=\"container\"></div>
// </div>";
// end -------------------------------------------------------------------
echo "<div id=\"panel\">
<div id=\"container2\">                </div>
</div>";
// NOTE create all tables with this method call --------------------------
echo "<div class=\"table_content\">";
$table_builder->create_table_shell($table, $table_key, $period, $history, $source_key);
echo "</div>";
} else {
// NOTE displays temp table of links -------------------------------------
// http://wwwdev.eia.gov/petroleum/new_navigator/js/toast/demos/#toasts-bg-color
require "includes/main.php";
}
// echo "<pre>";
// echo var_dump($validate_table_key);
// echo "</pre>";
?>
</div>
<!---/ Page/Body Content --->
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</div>
</div><!---/ Outer Wrapper --->
<script src="js/jquery.toast.min.js" type="text/javascript"></script>
<script src="js/charts.js" type="text/javascript"></script>
<script>
// $(window).scroll(function(e){
// 	var $el = $('#container');
// 	var isPositionFixed = ($el.css('position') == 'fixed');
// 	if ($(this).scrollTop() > 300 && !isPositionFixed){
// 		$('#container').css({'position': 'fixed', 'top': '0px'});
// 		$('.table_content').css({'margin-top': "250px"});
// 	}
// 	if ($(this).scrollTop() < 300 && isPositionFixed)
// 	{
// 		$('#container').css({'position': 'static', 'top': '0px'});
// 		$('.table_content').css({'margin-top': "0px"});
// 	}
// });
</script>
</body>
</html>
