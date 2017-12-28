<?php$sect = isset($sect) ? $sect : '';
$L2Title = isset($L2Title) ? $L2Title : '';
$locale = isset($locale) ? $locale : '';
$localesub = isset($localesub) ? $localesub : '';
$L2T = isset($L2T) ? $L2T : '';
$newlocale = isset($newlocale) ? $newlocale : '';
?>
<?php $fips = isset($_REQUEST["fips"]) ? $_REQUEST["fips"] : "";
$sid = isset($sid) ? $sid : (isset($_REQUEST["sid"]) ? $_REQUEST["sid"] : "");
if(strlen($fips) || strlen($sid)) {
//set db connection
require_once 'global/includes/utils/utils.inc';
require_once 'global/includes/utils/Sep.inc';
require_once 'global/includes/utils/IPM_IED.inc';
$sep      = new SEP();
if (strlen($fips)) {
$IPM_IED      = new IPM_IED();
//hsh_sql:
//associated with query name cntry
$bindVariables = array();
$IPM_IED->sql = " SELECT COUNTRYNAME
FROM INTANN.COUNTRY
WHERE FIPSCODE = :fipscode ";
$bindVariables[":fipscode"] = $fips;
//print $IPM_IED->sql;
//print_r($bindVariables);
$cntry = $IPM_IED->get($bindVariables);
$L2T = $cntry[0]['countryname'];
}
if (strlen($sid)) {
//data validation
if (!preg_match('/^[A-Z]{2}(,[A-Z]{2})*$/', $sid)) {
$sid = "US";
}
//hsh_sql:
//associated with query name st4te
$bindVariables = array();
$sep->sql = " select state_fullname from STEO.STATE_LOOKUP
where state = :state ";
$bindVariables[":state"] = $sid;
//print $sep->sql;
//print_r($bindVariables);
$st4te = $sep->get($bindVariables);
$L2T = $st4te[0]['state_fullname'];
if (!$st4te[0]['state_fullname']) {
//hsh_sql:
//associated with query name terrorname
$bindVariables = array();
$sep->sql = " SELECT TERRITORY_NAME
FROM STEO.TERR_ADDL
WHERE TERRITORY_CODE = :state ";
$bindVariables[":state"] = $sid;
//print $sep->sql;
//print_r($bindVariables);
$terrorname = $sep->get($bindVariables);
$L2T = $terrorname[0]['territory_name'];
}
}
}
if (isset($_SERVER["PATH_INFO"]) && $_SERVER["PATH_INFO"] == '/todayinenergy/detail.php') {
$L2T = (isset($tie[0]['title'])) ? $tie[0]['title'] . ' - Today in Energy' : 'Today in Energy';
} elseif (isset($_SERVER["ORIG_PATH_INFO"]) && $_SERVER["ORIG_PATH_INFO"] == '/todayinenergy/detail.php') {
$L2T = (isset($tie[0]['title'])) ? $tie[0]['title'] . ' - Today in Energy' : 'Today in Energy';
}
$endcap = ' - U.S. Energy Information Administration (EIA)';
if(!isset($title_display) || $title_display) {
if ($sect == 'home') {
print "<title>U.S. Energy Information Administration (EIA)</title>";
print PHP_EOL;
} else {
if (strlen($L2Title)) {
if ($sid == '' and $L2T == '') {
$L2T = $L2Title;
}
if (strlen($locale)) {
$newlocale = strtoupper(substr($locale, 0, 1)) . substr($locale, 1, strlen($locale) - 1);
}
if (strlen($localesub)) {
$newlocale = $localesub;
}
if (strlen($newlocale)) {
$newlocale = ' - ' . $newlocale;
if ($newlocale == ' - Ap') {
$newlocale = ' - Analysis & Projections';
} elseif ($newlocale == ' - Overview' and
$newlocale !== ' - Ap' OR
$newlocale == ' - States' OR
$newlocale == ' - Home' OR
$newlocale == ' - Tag' OR
$newlocale == ' - About'
) {
$newlocale = '';
} elseif ($newlocale == ' - Models') {
$newlocale = ' - Models & Documentation';
} elseif ($newlocale == ' - Projectiondata') {
$newlocale = ' - Projection Data';
} elseif ($newlocale == ' - Datatools') {
$newlocale = ' - Data Tools';
} elseif ($newlocale == ' - Timeseries') {
$newlocale = ' - Time Series';
} elseif ($newlocale == ' - Release') {
$newlocale = ' - Press Releases';
} elseif ($newlocale == ' - Whyichose') {
$newlocale = ' - Why I Chose EIA';
}
} else {
$newlocale = ' - U.S. Energy Information Administration (EIA)';
}
if (strlen($L2T)) {
$L2T = $L2T;
}
print "<title>" . $L2T . $newlocale . $endcap . "</title>";
print PHP_EOL;
} else {
if (strlen($locale)) {
$newlocale = strtoupper(substr($locale, 0, 1)) . substr($locale, 1, strlen($locale) - 1);
}
if (strlen($localesub)) {
$newlocale = $localesub;
}
if (strlen($L2T)) {
$L2T = $L2T;
} else {
$L2T    = 'U.S. Energy Information Administration (EIA)';
$endcap = '';
}
if (strlen($newlocale)) {
$newlocale = ' - ' . $newlocale;
if ($newlocale == ' - Ap' and strlen($fips)) {
$newlocale = ' - Analysis';
} elseif ($newlocale == ' - Overview' and
$newlocale !== ' - Ap' OR
$newlocale == ' - States' OR
$newlocale == ' - Home' OR
$newlocale == ' - Tag' OR
$newlocale == ' - About'
) {
$newlocale = '';
} elseif ($newlocale !== ' - Ap' and strlen($fips)) {
$newlocale = '';
}
}
echo "<title>" . $L2T . $newlocale . $endcap . "</title>";
print PHP_EOL;
}
}
} ?>
