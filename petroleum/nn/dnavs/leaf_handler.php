var leafHandlerLoaded = void 0;var rootHandlerLoaded = void 0;
$(document).ready(function(){
if($('select[name="Drop1"]').length > 0)
{
var dropdown = $('select[name="Drop1"]').html();
dropdown = dropdown.replace('SELECTED=""','selected="selected"');
dropdown = dropdown.replace('SELECTED','selected="selected"');
dropdown = dropdown.replace('selected=""','selected="selected"');
$('select[name="Drop1"]').html(dropdown);
//Drop1
$('select[name="Drop1"]').removeAttr('onchange');
var originalSelection = $('select[name="Drop1"] option:selected').attr('value');
$('select[name="Drop1"]').change(function(){
var currentSelection = $(this).attr('value');
$('select[name="Drop1"]').find('option[value="'+originalSelection+'"]').attr('selected','selected');
window.location = currentSelection;
return false;
});
}
//DropF
if($('select[name="DropF"]').length > 0)
{
$('select[name="DropF"]').removeAttr('onchange');
var originalSelectionF = $('select[name="DropF"] option:selected').attr('value');
$('select[name="DropF"]').change(function(){
var currentSelectionF = $(this).attr('value');
$('select[name="DropF"]').find('option[value="'+originalSelectionF+'"]').attr('selected','selected');
window.location = currentSelectionF;
return false;
});
}
});
(function(){
<?php
if(strpos($_SERVER['HTTP_HOST'],'wwwdev') !== false) {
include("global/scripts/jquery/highcharts/3.0.10/js/eia-theme-module.js");
}
else {
include("global/scripts/jquery/highcharts/3.0.10/js/eia-theme-module.min.js");
}
?>
if(/\/hist\//.test(window.location.pathname)){
<?php
include("global/includes/dnavs/LeafHandler.js");
include("global/includes/dnavs/analysis.js");
?>
leafHandlerLoaded = true;
$(leafHandler);
}
else{
<?php
include("global/includes/dnavs/RootHandler.js");
?>
rootHandlerLoaded = true;
$(rootHandler);
}
$.getScript('/global/survey/engine/js/survey_engine.js');
}());
