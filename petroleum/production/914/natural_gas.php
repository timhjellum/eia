<?php$csv_file = "nat_gas_chart_data.csv";
$area = [
'NGM_EPG0_FGW_NUS_MMCFD',
'NGM_EPG0_FGW_SAK_MMCFD',
'NGM_EPG0_FGW_SAR_MMCFD',
'NGM_EPG0_FGW_SCA_MMCFD',
'NGM_EPG0_FGW_SCO_MMCFD',
'NGM_EPG0_FGW_SKS_MMCFD',
'NGM_EPG0_FGW_SLA_MMCFD',
'NGM_EPG0_FGW_SMT_MMCFD',
'NGM_EPG0_FGW_SNM_MMCFD',
'NGM_EPG0_FGW_SND_MMCFD',
'NGM_EPG0_FGW_SOH_MMCFD',
'NGM_EPG0_FGW_SOK_MMCFD',
'NGM_EPG0_FGW_SPA_MMCFD',
'NGM_EPG0_FGW_STX_MMCFD',
'NGM_EPG0_FGW_SUT_MMCFD',
'NGM_EPG0_FGW_SWV_MMCFD',
'NGM_EPG0_FGW_SWY_MMCFD',
'NGM_EPG0_FGW_R3FM_MMCFD',
'NGM_EPG0_FGW_R98_MMCFD'
];
$area_name = [
'U.S. Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Alaska Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Arkansas Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'California Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Colorado Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Kansas Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Louisiana Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Montana Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'New Mexico Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'North Dakota Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Ohio Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Oklahoma Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Pennsylvania Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Texas Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Utah Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'West Virginia Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Wyoming Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Federal Offshore--Gulf of Mexico Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Other States Natural Gas Gross Withdrawals (Million Cubic Feet per Day)'
];
$row                    = 0;
$rec_count              = 0;
$count                  = -1;
$data_array             = array();
$data_array['series']   = array();
$ordered_array['series'] = array();
$source_key             = null;
$previous_key           = null;
if (($handle = fopen("{$csv_file}", "r")) !== FALSE) {
while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
$num = count($data);
$source_key = null;
$date       = null;
$value      = null;
for ($c=0; $c < $num; $c++) {
if($c==0) {
$source_key = $data[$c];
if($source_key!=null && $source_key!=$previous_key) {
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
$date = substr($date, 0, -2);
}
if($c==2) {
if($data[$c]=='NA') {
$value = (string)$data[$c];
} else {
$value = (int)$data[$c];
}
$rec_set = [$date, $value];
array_push($data_array["series"][$count]["data"], $rec_set);
}
}
$row++;
}
foreach ($area as $key => $value) {
//echo "Key: $key; Value: $value;<br />\n";
foreach ($data_array["series"] as $key2 => $value2) {
if($value == $value2["series_id"]) {
array_push($ordered_array["series"], $value2);
//echo " Key2: $key2; Value2: $value2;<hr />";
}
}
}
fclose($handle);
}
echo "<h1>Natural gas json file created.</h1>";
echo "<p><a href='natural_gas.json' target='_blank'>Open natural_gas.json</a></p>";
//echo json_encode($data_array);
$natural_gas_file = fopen("natural_gas.json", "w") or die("Unable to open/create natural_gas.json file!");
fwrite($natural_gas_file, json_encode($ordered_array));
