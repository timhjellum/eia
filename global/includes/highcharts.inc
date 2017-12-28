<?phpisset($hct) || $hct = '';
isset($hcVersion) || $hcVersion = 3;
isset($highstock) || $highstock = '';
isset($theme_debug) || $theme_debug = 'home';
//<!-- NOTE: Any time the version number of Highcharts is changed here, it has to also be changed in /global/includes/dnavs/leaf_handler.cfm, and should probably also be changed in /styles/eia_header.js -->
if($hcVersion == "3.0.10" || $hcVersion == "3"){
if($highstock == "y"){
if(strpos($_SERVER['HTTP_HOST'],'wwwdev')!==false)
echo '<script type="text/javascript" src="/global/scripts/jquery/highstock/1.3.10/js/highstock.src.js">
</script>';
else
echo '<script type="text/javascript" src="/global/scripts/jquery/highstock/1.3.10/js/highstock.js">
</script>';
}else{
if(strpos($_SERVER['HTTP_HOST'],'wwwdev')!==false) {
echo '<script type="text/javascript" src="/global/scripts/jquery/highcharts/3.0.10/js/highcharts.src.js">
</script>';
}
else {
echo '<script type="text/javascript" src="/global/scripts/jquery/highcharts/3.0.10/js/highcharts.js">
</script>';
}
}
if(strpos($_SERVER['HTTP_HOST'],'wwwdev')!==false){
echo '<script type="text/javascript" src="/global/scripts/jquery/highcharts/3.0.10/js/highcharts-more.src.js">
</script>';
echo '<script type="text/javascript" src="/global/scripts/jquery/highcharts/3.0.10/js/modules/exporting.src.js">
</script>';
echo '<script type="text/javascript" src="/global/scripts/jquery/highcharts/3.0.10/js/modules/no-data-to-display.src.js">
</script>';
}else{
?>
<script type="text/javascript" src="/global/scripts/jquery/highcharts/3.0.10/js/highcharts-more.js">
</script>
<script type="text/javascript" src="/global/scripts/jquery/highcharts/3.0.10/js/modules/exporting.js">
</script>
<script type="text/javascript" src="/global/scripts/jquery/highcharts/3.0.10/js/modules/no-data-to-display.js">
</script>
<?php
}
}else{
if($highstock == "y")
echo '<script type="text/javascript" src="/global/scripts/jquery/highstock/js/highstock.js">
</script>';
else
echo '<script type="text/javascript" src="/global/scripts/jquery/highcharts/js/highcharts.2.2.0r.js">
</script>';
echo '<script type="text/javascript" src="/global/scripts/jquery/highcharts/js/modules/exporting.js">
</script>';
}
if($hct == "y"){
if($hcVersion == "3.0.10" || $hcVersion == "3"){
if(strpos($_SERVER['HTTP_HOST'],'wwwdev')!==false){
echo '<script type="text/javascript" src="/global/scripts/jquery/highcharts/3.0.10/js/eia-theme-module.js">
</script>';
echo '<script type="text/javascript" src="/global/scripts/jquery/highcharts/3.0.10/js/modules/captions.js">
</script>';
}else{
echo '<script type="text/javascript" src="/global/scripts/jquery/highcharts/3.0.10/js/eia-theme-module.min.js">
</script>'; print PHP_EOL;
echo '<script type="text/javascript" src="/global/scripts/jquery/highcharts/3.0.10/js/modules/captions.min.js">
</script>'; print PHP_EOL;
}
}else{
echo '<script type="text/javascript" src="/global/scripts/jquery/highcharts/js/eia-theme.js">
</script>';
echo '<script type="text/javascript" src="/global/scripts/jquery/highcharts/js/modules/captions.js">
</script>';
}
}