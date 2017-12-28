<?php
include_once('../config.php');
header("Content-Type: application/json");
include(ROOT.'global/includes/utils/Database.inc');
require_once(ROOT.'global/includes/utils/utils.inc');
include(ROOT.'global/includes/utils/queryParamHelper.inc');
include(ROOT.'global/includes/utils/Mailer.inc');
include 'unique_for_project.inc';
$requested_page_link = "Request URL: http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]" . "\n\n";
$mailer = new Mailer();
$mailer->Subject .= " on $_SERVER[SERVER_NAME] for " . $project_title;
$mailer ->FromName = $project_title;
if(!$mailer_arr || empty($mailer_arr)) {
$mailer_arr = array(
"Scott.Gearhart@eia.gov" => "Scott Gearhart"
);
}
foreach($mailer_arr as $k0=>$v0) {
$mailer->addAddress($k0, $v0);
}
$inputs = filter_var_array($_REQUEST,
[
'type' => FILTER_SANITIZE_STRING,
'method' => FILTER_SANITIZE_STRING,
'ot'   => FILTER_SANITIZE_STRING,
'dt'   => FILTER_SANITIZE_STRING,
'g'    => FILTER_SANITIZE_STRING,
'o'    => FILTER_SANITIZE_STRING,
'd'    => FILTER_SANITIZE_STRING,
'f'    => FILTER_SANITIZE_STRING,
's'    => FILTER_SANITIZE_NUMBER_INT,
'e'    => FILTER_SANITIZE_NUMBER_INT,
'sid'  => FILTER_SANITIZE_STRING,
'err'  => FILTER_SANITIZE_STRING
]);
$request_for = '';
try {
$ViewConn      = new View();
$opecNonOpecConn = new opecNonOpec();
$RegionConn = new Region();
$CountryConn = new Country();
$PortConn = new Port();
$RefineryConn = new Refinery();
$StateConn = new State();
$PaddConn = new Padd();
$OilGradeConn = new OilGrade();
$OriginTypeConn = new OriginType();
$DestinationTypeConn = new DestinationType();
$AreaTypeConn = new AreaType();
$ConfigurationsConn =  new Configurations();
$DataConn = new Data();
if($inputs['type'])
$request_for = $inputs['type'];
elseif($inputs['method'])
$request_for = $inputs['method'];
$origin_id_array      = !is_null($inputs['o']) ? buildFilterIndices($inputs['o']) : [];
$destination_id_array = !is_null($inputs['d']) ? buildFilterIndices($inputs['d']) : [];
$grade_array          = !is_null($inputs['g']) ? buildFilterIndices($inputs['g']) : [];
$origin_type          = !is_null($inputs['ot']) ? $inputs['ot'] : 'OPN';
$destination_type     = !is_null($inputs['dt']) ? $inputs['dt'] : 'RP';
$frequency            = !is_null($inputs['f']) ? $inputs['f'] : 'A';
$start_date           = $inputs['s'];
$end_date             = $inputs['e'];
$series_id            = (!is_null($inputs['sid'])&&$inputs['sid']!="") ? explode('~', trim($inputs['sid'], '~')) : null;
if($series_id) {
foreach ($series_id as $k1 => $v1) {
if (!$v1) {
unset($series_id[ $k1 ]);
}
}
}
switch ($inputs['type']) {
case 'data': //data
$json = ["TABLE_DATA" => $DataConn->getData($origin_id_array,
$destination_id_array,
$origin_type,
$destination_type,
$grade_array,
$start_date,
$end_date,
$frequency)
,"PINNED_DATA" => $DataConn->getPinned($series_id)
];
break;
case 'error':
$mailer->Subject .= ' JS Error';
$mailer->Body = $inputs['err'];
$mailer->addStringAttachment($inputs['err'], date('Ymd_gisa') . '_error.txt');
if (!$mailer->send()) {
throw new Exception($mailer->ErrorInfo);
} else {
$json = [
'status' => 'ok',
'msg'    => 'Error message sent'
];
}
break;
case 'config'://return config data
default:
$json = [
'status'     => 'ok',
'views'             => $ViewConn->get(),
'opecNonOpec'       => $opecNonOpecConn->get(),
'regions'           => $RegionConn->get(),
'countries'         => $CountryConn->get(),
'ports'             => $PortConn->get(),
'refineries'        => $RefineryConn->get(),
'states'            => $StateConn->get(),
'padds'             => $PaddConn->get(),
'grades'            => $OilGradeConn->get(),
'originTypes'       => $OriginTypeConn->get(),
'destinationTypes'  => $DestinationTypeConn->get(),
'areaTypes'         => $AreaTypeConn->get(),
'configurations'    => $ConfigurationsConn->get()
];
}
// Encode the JSON
$result = json_encode($json); // NOT: JSON_NUMERIC_CHECK
// if the JSON encoding was successful, output it
if ($result) print $result;
// Otherwise the JSON encoding failed; Pass the JSON encoding error to the try/catch handler below
else throw new Exception(getJsonError());
// If a server error was caught
} catch (Exception $e) {
//$_SERVER['server_mode'] = 'development';
//print $e->getMessage() . "\n" . $e->getTraceAsString();
//die();
try {
$error_output = '';
//if the server variable is set and equals 'development' display the error. Otherwise ignore the missing variable
//warning and log everything as usual, we are in production
if (@$_SERVER['server_mode'] === 'development') {
$error_output = $e->getMessage() . "\n" . $e->getTraceAsString();
if(isset($mailer)) {
$mailer->Body = $requested_page_link . "<br/>" . str_replace("\n", "<br>", $error_output);
$mailer->send();
}
} else {
$logger = new localErrorLogger();
$logger->add("http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]", $e->getMessage(), $e->getTraceAsString());
}
} catch (Exception $e) { //not much we can do if the logger fails!
}
header("HTTP/1.1 500 Internal Server Error");
printf("Internal Server Error\n\n\n%s", $error_output);
}
