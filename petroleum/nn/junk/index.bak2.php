<?php$reload 			= false;
$table_array 	= array('8');
foreach ($_GET as $key => $value) {
$table_number = null;
$key 					= trim(htmlspecialchars($key));
$value 				= trim(htmlspecialchars($value));
if ($key == "table") {
if (!in_array($value, $table_array)) {
$reload = true;
unset($_GET[$key]);
} else {
if (isset($table_number)) {
unset($_GET[$key]);
} else {
$table_number = $value;
//echo "table_number {$table_number} /";
}
}
} else {
unset($_GET[$key]);
$reload = true;
}
}
var_dump($_GET);
if ($reload && $table_number==null) {
unset($_GET);
header('Location: ./');
}
// $hct='y'; // NOTE include highcharts theme ----------------------------------
?>
<?php include_once('../../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="cache-control" content="max-age=0" />
<meta http-equiv="cache-control" content="no-cache" />
<meta http-equiv="expires" content="0" />
<meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
<meta http-equiv="pragma" content="no-cache" />
<?php include "{$_SERVER['DOCUMENT_ROOT']}/global/includes/css_rehab_eia-head.inc"; ?>
</head>
<body>
<!-- Outer Wrapper -->
<?php
include "{$_SERVER['DOCUMENT_ROOT']}/global/includes/css_rehab_eia-header.inc"; ?>
<?php include "includes/subnav_header.inc";
?>
<!-- Page/Body Content -->
</div>
</div>
<div class="l-row">
<?php /* blank */ ?>
<div class="main_col" style="min-height: 600px;">
<?php
$start_date = strtotime('last Friday - 6 weeks');
$start_date = date('Ymd', $start_date);
$end_date   = strtotime('last Friday - 1 week');
$end_date   = date('Ymd', $end_date);
// echo "<p>Test code: Start: {$start_date} End: {$end_date}</p>";
require("includes/TableBuilderClass.php");
$table_builder = new TableShells;
if ($table_number) {
// $get_table = $table_number;
$get_table = "table" . $table_number;
$connection = oci_pconnect($table_builder->DB_USER, $table_builder->DB_PASSWD, $table_builder->DB_HOST);
if (!$connection) {
$error = oci_error();
throw new Exception($error["message"], $error["code"]);
}
//$table_builder->get_pub_series($connection);
$get_table = "table" . $_GET["table"];
$table_builder->create_table_shell($connection, $get_table);
oci_free_statement($stid);
oci_close($connection);
} else {
$table_builder->show_table_list();
}
?>
<hr>
<p id="results">results: </p>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
<script>
var live_api     = "https://api";
var dev_api      = "http://apidev";
// var start_date   = "20170106";
var start_date   = "<?php echo $start_date; ?>";
var end_date     = "<?php echo $end_date; ?>";
var table 			 = "<?php echo $get_table ?>";
var series_array = ["PET.W_EPC0_IM0_NUS-NCA_MBBLD.W", "PET.W_EPC0_IM0_NUS-NSA_MBBLD.W"]; //array of series id to query from API
</script>
<script src="js/wpsr_api_tables.js"></script> <!-- Don't use unless using API to query data -->
</body>
</html>
