<?php if (isset($_GET['n']) && $_GET['n'] && (
		strpos($_SERVER['HTTP_HOST'],'wwwdev') !== false || 
		strpos($_SERVER['HTTP_HOST'],'wwwtest') !== false
	)
) {
include('eia_head_info_for_new_css.inc');
 } else { 
// start info_header
//<cfsetting showDebugOutput="yes"> TODO: no idea what this does
isset($L2Title) || $L2Title = '';
isset($L2T) || $L2T = '';
isset($localesub) || $localesub = '';
isset($sect) || $sect = '';
isset($newlocale) || $newlocale = '';
isset($locale) || $locale = '';
isset($vmap) || $vmap = '';
isset($widgets) || $widgets = '';
isset($jvm2) || $jvm2 = '';
isset($hct) || $hct = '';
isset($hcVersion) || $hcVersion = 3;
isset($highstock) || $highstock = '';
?>

<?php /* Meta Data */ ?>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<?php /* IE Edge */ ?>
<meta http-equiv="Content-Language" content="en-us" />
<meta name="robots" content="all" />
<meta name="agency" content="EIA - Energy Information Administration" />
<meta name="subject" content="official energy statistics, data, analysis and forecasting" />
<meta name="Description" content="Energy Information Administration - EIA - Official Energy Statistics from the U.S. Government" />

<link rel="shortcut icon" href="//www.eia.gov/favicon.ico" />
<link rel="icon" href="//www.eia.gov/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" type="image/vnd.microsoft.icon" href="//www.eia.gov/favicon.ico" />


<?php /* ***** start vendor styles ***** */ ?>

<?php /* ***** end vendor styles ***** */ ?>

<?php /* ***** start custom styles ***** */ ?>
<link rel="stylesheet" href="/global/styles/screen.css" type="text/css" media="screen, projection"/>
<link rel="stylesheet" href="/global/styles/eia-styles.css" />

<!--[if lt IE 8]><link rel="stylesheet" href="/global/styles/ie.css" type="text/css" media="screen, projection"><![endif]-->
<!--[if IE 7]><link rel="stylesheet" href="/global/styles/ie.css" type="text/css" media="screen, projection"><![endif]-->
<!--[if lte IE 8]><link rel="stylesheet" href="/global/styles/ie_fixes.css" type="text/css" media="screen, projection"><![endif]-->
<link rel="stylesheet" href="/global/styles/print.css" type="text/css" media="print">
<!--[if lte IE 8]><link rel="stylesheet" href="/global/styles/ie_print.css" type="text/css" media="print"><![endif]-->
<!--[if IE 7]><link rel="stylesheet" href="/global/styles/ie_print.css" type="text/css" media="print"><![endif]-->

<link rel="stylesheet" href="/global/scripts/jquery/datepicker/jquery-ui-dp.custom.css" type="text/css" />
<link rel="stylesheet" href="/global/styles/EIA_global.css" type="text/css" media="screen, projection">
<?php /* ***** end custom styles ***** */ ?>

<?php /* ***** start vendor scripts ***** */ ?>
<?php /* script src="/global/vebdor/jquery/jquery.min.js"></scrip */ ?>
<script type="text/javascript" src="/global/scripts/jquery/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="/global/scripts/jquery/jquery-migrate-1.2.1.min.js"></script>
<script type="text/javascript" src="/global/scripts/jquery/ui/1.10.3/js/jquery-ui-1.10.3.custom.min.js"></script>
<script type="text/javascript" src="/global/scripts/jquery/touch-punch/jquery.ui.touch-punch.min.js"></script>
<?php /* ***** end vendor scripts ***** */ ?>

<?php /* ***** start eia custom scripts ***** */ ?>
<script type="text/javascript" src="/global/scripts/jquery/eia_utils.js"></script>
<script type="text/javascript" src="/global/scripts/eia_global.js"></script>
<?php /* script type="text/javascript" src="/global/scripts/eia_global.js"></script */ ?>
<?php /* ***** end eia custom scripts ***** */ ?>

<?php
//Include Highcharts (uses variables hcVersion, highstock, and jQueryUpgrade)
include $_SERVER['DOCUMENT_ROOT'] . '/global/includes/highcharts.inc';
//Search Landing Fix
if($locale == "data") {
	echo '<script type="text/javascript" src="/global/scripts/custom/search_landing_highlight.js"></script>';
	print PHP_EOL;
}

//Vector map includes
if($vmap == "y"){
?>
	<link href="/global/scripts/jquery/vector-map/jquery.vector-map.css" media="screen" rel="stylesheet" type="text/css" />
	<script src="/global/scripts/jquery/vector-map/jquery.vector-map.js" type="text/javascript"></script>
	<script src="/global/scripts/jquery/vector-map/usa-en.js" type="text/javascript"></script>
<?php
}

// API Widgets
if($widgets == "y"){
	if($jvm2 == 'y'){
?>
		<script src="/global/scripts/jquery/vector-map2/jquery-jvectormap-2.0.1.min.js"></script>
        <link rel="stylesheet" href="/global/scripts/jquery/vector-map2/jquery-jvectormap-2.0.1.css" type="text/css" media="screen"/>
<?php
	}else{
?>
      <link rel="stylesheet" href="/global/scripts/jquery/vector-map/jquery-jvectormap-1.2.2.css" type="text/css" media="screen"/>
      <script src="/global/scripts/jquery/vector-map/jquery-jvectormap-1.2.2.min.js"></script>
<?php
	}
?>
  <link rel="stylesheet" href="/global/scripts/api/eia_api_widgets.css" type="text/css" media="screen"/>
  <script src="/global/scripts/jquery/vector-map/jquery-jvectormap-us-aea-en.js"></script>
  <script src="/global/scripts/jquery/vector-map/jquery-jvectormap-world-mill-en.js"></script>
  <script src="/global/scripts/modules/lib/jvectormap/maps/us-merc-en.js"></script>

  <script src="/global/scripts/api/eia_hc_widget.js" type="text/javascript"></script>
  <script src="/global/scripts/api/eia_api_widgets.js" type="text/javascript"></script>
<?php
}

// Omit Google Analytics for dev server -->
if(strpos($_SERVER['HTTP_HOST'],'wwwdev')===false){
?>
	<script type="text/javascript" src="/global/scripts/jquery/ga/ga-file-downloads.js" ></script>

<?php
	include $_SERVER['DOCUMENT_ROOT']."/global/includes/ga.inc";
}
?>
<?php /* EIA logo favicon */ ?>

<?php
$glossary_path = '/tools/glossary/';
$faqs_path = '/tools/faqs/';
?>


<?php
	// Since the failover DB doesn't allow writes, we shouldn't include the survey_engine js
	if(isset($_SERVER["COMPUTERNAME"]) && $_SERVER["COMPUTERNAME"] === 'WWW3'){
		// don't show survey engine
	} else {
?>	
	<script type="text/javascript" src="/global/survey/engine/js/survey_engine.js"></script>
	<link rel="stylesheet" href="/global/survey/engine/css/layout.css" type="text/css" media="screen" />
<?php
	} // End checking for failover host
?>
<?php
	if(isset($pageTitle) && $pageTitle) {
		print "<title>" . $pageTitle . "</title>"; print PHP_EOL;
	}
?>
<?php } ?>


