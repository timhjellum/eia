<?php$csv_file = "petroleum_chart_data.csv";
$area= [
'MCRFPUS2',
'MCRFPAL2',
'MCRFPAK2',
'MCRFPAZ2',
'MCRFPAR2',
'MCRFPCA2',
'MCRFPCO2',
'MCRFP3FM2',
'MCRFP5F2',
'MCRFPFL2',
'MCRFPIL2',
'MCRFPIN2',
'MCRFPKS2',
'MCRFPKY2',
'MCRFPLA2',
'MCRFP_SMI_2',
'MCRFPMS2',
'MCRFPMO2',
'MCRFPMT2',
'MCRFPNE2',
'MCRFPNV2',
'MCRFPNM2',
'MCRFPNY2',
'MCRFPND2',
'MCRFPOH2',
'MCRFPOK2',
'MCRFPPA2',
'MCRFPSD2',
'MCRFPTN2',
'MCRFPTX2',
'MCRFPUT2',
'MCRFPVA2',
'MCRFPWV2',
'MCRFPWY2'
];
$area_name = [
'U.S. Crude Oil (Thousand Barrels per Day)',
'Alabama Crude Oil (Thousand Barrels per Day)',
'Alaska Crude Oil (Thousand Barrels per Day)',
'Arizona Crude Oil (Thousand Barrels per Day)',
'Arkansas Crude Oil (Thousand Barrels per Day)',
'California Crude Oil (Thousand Barrels per Day)',
'Colorado Crude Oil (Thousand Barrels per Day)',
'Federal Offshore Gulf of Mexico Crude Oil (Thousand Barrels per Day)',
'Federal Offshore Pacific Crude Oil (Thousand Barrels per Day)',
'Florida Crude Oil (Thousand Barrels per Day)',
'Illinois Crude Oil (Thousand Barrels per Day)',
'Indiana Crude Oil (Thousand Barrels per Day)',
'Kansas Crude Oil (Thousand Barrels per Day)',
'Kentucky Crude Oil (Thousand Barrels per Day)',
'Louisiana Crude Oil (Thousand Barrels per Day)',
'Michigan Crude Oil (Thousand Barrels per Day)',
'Mississippi Crude Oil (Thousand Barrels per Day)',
'Missouri Crude Oil (Thousand Barrels per Day)',
'Montana Crude Oil (Thousand Barrels per Day)',
'Nebraska Crude Oil (Thousand Barrels per Day)',
'Nevada Crude Oil (Thousand Barrels per Day)',
'New Mexico Crude Oil (Thousand Barrels per Day)',
'New York Crude Oil (Thousand Barrels per Day)',
'North Dakota Crude Oil (Thousand Barrels per Day)',
'Ohio Crude Oil (Thousand Barrels per Day)',
'Oklahoma Crude Oil (Thousand Barrels per Day)',
'Pennsylvania Crude Oil (Thousand Barrels per Day)',
'South Dakota Crude Oil (Thousand Barrels per Day)',
'Tennessee Crude Oil (Thousand Barrels per Day)',
'Texas Crude Oil (Thousand Barrels per Day)',
'Utah Crude Oil (Thousand Barrels per Day)',
'Virginia Crude Oil (Thousand Barrels per Day)',
'West Virginia Crude Oil (Thousand Barrels per Day)',
'Wyoming Crude Oil (Thousand Barrels per Day)'
];
$row = 0;
$rec_count = 0;
$count = -1;
$data_array = array();
$data_array['series'] = array();
$ordered_array['series'] = array();
$source_key = null;
$previous_key = null;
//$series = array();
if (($handle = fopen("{$csv_file}", "r")) !== FALSE) {
while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
$num = count($data);
$source_key = null;
$date       = null;
$value      = null;
for ($c=0; $c < $num; $c++) {
//$test=0;
if($c==0) {
$source_key = trim($data[$c]);
if($source_key!=null && $source_key!=$previous_key) {
//$os = array("Mac", "NT", "Irix", "Linux");
// NGM_EPG0_FGW_NUS_MMCFD
//$area_code = substr($source_key, -9, 3);
$key = array_search($source_key, $area);
$name = $area_name[$key];
//echo $source_key . ' - ' . $key .'<br>';
$series = array("series_id"=>$source_key, "name"=>$name, "data"=>array());
array_push($data_array["series"], $series);
$count++;
}
$previous_key = $source_key;
}
if($c==1) {
$date = (string)$data[$c];
$test = substr($date, 0, 4);
$test = (int)$test;
//echo "{$test}<br>";
$date = substr($date, 0, -2);
}
if($c==2) {
if($data[$c]=='NA') {
$value = (string)$data[$c];
} else {
$value = (int)$data[$c];
}
$rec_set = [$date, $value];
if($test>2005) {
//echo "{$test}<br>";
array_push($data_array["series"][$count]["data"], $rec_set);
}
}
}
$row++;
}
//$data_array
//$ordered_array
//$area
//$key = array_search('green', $array); // $key = 2;
foreach ($area as $key => $value) {
//echo "Key: $key; Value: $value;<br />\n";
foreach ($data_array["series"] as $key2 => $value2) {
if($value == $value2["series_id"]) {
array_push($ordered_array["series"], $value2);
//echo " Key2: $key2; Value2: $value2;<hr />";
}
//$key3 = array_search($value, $data_array["series"][$key2]["series_id"]);
}
//echo "Key: $key; Value: $value;<br />\n";
//$ordered_array[$key]
}
fclose($handle);
}
//echo json_encode($data_array);
echo "<h1>Petroleum json file created.</h1>";
echo "<p><a href='petroleum.json' target='_blank'>Open petroleum.json</a></p>";
$natural_gas_file = fopen("petroleum.json", "w") or die("Unable to open/create petroleum.json file!");
//fwrite($natural_gas_file, json_encode($data_array));
fwrite($natural_gas_file, json_encode($ordered_array));
