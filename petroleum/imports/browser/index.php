<?php
$locale = 'data';
$hct = 'y';
$highstock = 'y';
$version = '0.9';
$betasite = 'n';
$betafback = 'n';
$betaproduct = 'Crude Oil Imports';
$title = "Crude Imports";
$L2Title = $title;
?>
<?php include_once('../../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<title><?php echo $title; ?></title>
<?php ob_start();
include ('global/includes/css_rehab_eia-head.inc');
$head_info = ob_get_clean();
$head_info = str_replace('<meta http-equiv="X-UA-Compatible" content="IE=8">','<meta http-equiv="X-UA-Compatible" content="IE=Edge">', $head_info);
echo $head_info;
?>
<meta name="description" content="<?php echo $title; ?>">
<link rel="stylesheet" href="/global/scripts/modules/dist/css/datagrid.css?v=<?php echo $version; ?>">
<link rel="stylesheet" href="/global/scripts/modules/dist/css/timeSlider.css?v=<?php echo $version; ?>">
<link rel="stylesheet" href="/global/scripts/modules/dist/css/map.css?v=<?php echo $version; ?>">
<link rel="stylesheet" href="/global/scripts/modules/dist/css/growthMap.css?v=<?php echo $version; ?>">
<link rel="stylesheet" href="/global/scripts/modules/lib/vector-map/jquery.vector-map.css?v=<?php echo $version; ?>" type="text/css" >
<link rel="stylesheet" href="css/layout.css?v=<?php echo $version; ?>" type="text/css" >
<!--[IF IE 8]><link rel="stylesheet" href="css/ie8.css?v=<?php echo $version; ?>" type="text/css" ><![endif]-->
<!--[IF IE 7]><link rel="stylesheet" href="css/ie7.css?v=<?php echo $version; ?>" type="text/css" ><![endif]-->
<!--[IF IE 7]><link rel="stylesheet" href="/global/scripts/modules/dist/css/datagrid.ie7.css?v=<?php echo $version; ?>" type="text/css" ><![endif]-->
<script type="text/javascript" src="/global/scripts/modules/lib/require.js"></script>
<script type="textinclude(ROOT.'global/
var config =<?php include('global/scripts/modules/requireConfig.php'); ?>;
config['urlArgs'] = 'v=<?php echo $version; ?>';
config.paths['configJSON'] = 'data/index.php?type=config'; // Path to configuration json
$.each([
'','ak','al','ar','az','ca','co','ct','dc','de',
'fl','ga','hi','ia','id','il','in','ks','ky','la',
'ma','md','me','mi','mn','mo','ms','mt','nc','nd',
'ne','nh','nj','nm','nv','ny','oh','ok','or','pa',
'ri','sc','sd','tn','tx','ut','va','vt','wa','wi',
'wv','wy'],
function(index, value) {
config['paths']['us' + value + '-merc-en'] = '/global/scripts/modules/lib/jvectormap/maps/us' + value + '-merc-en';
config['shim']['us' + value + '-merc-en'] = {
'deps' : ['jVectorMap'],
'exports' : 'jvm.WorldMap.maps.us' + value + '_merc_en'
};
}
);
config['waitSeconds'] = 0;
require.config(config);
</script>
<?php
if(file_exists("status.json")) {
ob_start();
include ('status.json');
$status_json = ob_get_clean();
$status = json_decode($status_json, true);
} else {
$status = array('debug'=>'false');
}
if($status['debug']) {
?>
<script type="text/javascript" src="js/main.js"></script>
<?php
} else {
?>
<script type="text/javascript" src="main.js?v=<?php echo $version; ?>"></script>
<?php
}
?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
include(ROOT.'global/includes/css_rehab_eia-header.inc');
$L2Title = $title;
$breadcrumb = '<a href="/petroleum/">Petroleum & Other Liquids</a>';
include("includes/subnav.inc");
?>
<div id="pagecontent" class="pagecontent menerdat_temp style2">
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</div>
</body>
