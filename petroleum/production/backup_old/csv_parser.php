<?php$csv_file = "chart_data.csv";
$json_file = "nat-m.json";
echo "<h1>cvs to json converter v2</h1>";
echo "<p><a href='{$json_file}' target='_blank'>Open nat-m.json</a> <a href='natural-gas-chart.json' target='_blank'>Open natural-gas-chart.json</a> <a href='natural-gas-chart2.json' target='_blank'>Open natural-gas-chart2.json</a> <a href='natural-gas-chart3.json' target='_blank'>Open natural-gas-chart3.json</a> </p>";
$area= [
'NGM_EPG0_FGW_NUS_MMCFD',
'NGM_EPG0_FGW_R19F_MMCFD',
'NGM_EPG0_FGW_R3FM_MMCFD',
'NGM_EPG0_FGW_R3FMTF_MMCFD',
'NGM_EPG0_FGW_R44F_MMCFD',
'NGM_EPG0_FGW_R5F_MMCFD',
'NGM_EPG0_FGW_R98_MMCFD',
'NGM_EPG0_FGW_RAKO_MMCFD',
'NGM_EPG0_FGW_RAKSF_MMCFD',
'NGM_EPG0_FGW_RAKTF_MMCFD',
'NGM_EPG0_FGW_RALF_MMCFD',
'NGM_EPG0_FGW_RALO_MMCFD',
'NGM_EPG0_FGW_RALSF_MMCFD',
'NGM_EPG0_FGW_RALTF_MMCFD',
'NGM_EPG0_FGW_RCAO_MMCFD',
'NGM_EPG0_FGW_RCASF_MMCFD',
'NGM_EPG0_FGW_RCATF_MMCFD',
'NGM_EPG0_FGW_RLAO_MMCFD',
'NGM_EPG0_FGW_RLASF_MMCFD',
'NGM_EPG0_FGW_RLATF_MMCFD',
'NGM_EPG0_FGW_RTXO_MMCFD',
'NGM_EPG0_FGW_RTXSF_MMCFD',
'NGM_EPG0_FGW_RTXTF_MMCFD',
'NGM_EPG0_FGW_RUSF_MMCFD',
'NGM_EPG0_FGW_RUSOF_MMCFD',
'NGM_EPG0_FGW_RUSSF_MMCFD',
'NGM_EPG0_FGW_SAK_MMCFD',
'NGM_EPG0_FGW_SAL_MMCFD',
'NGM_EPG0_FGW_SAR_MMCFD',
'NGM_EPG0_FGW_SAZ_MMCFD',
'NGM_EPG0_FGW_SCA_MMCFD',
'NGM_EPG0_FGW_SCO_MMCFD',
'NGM_EPG0_FGW_SFL_MMCFD',
'NGM_EPG0_FGW_SIL_MMCFD',
'NGM_EPG0_FGW_SIN_MMCFD',
'NGM_EPG0_FGW_SKS_MMCFD',
'NGM_EPG0_FGW_SKY_MMCFD',
'NGM_EPG0_FGW_SLA_MMCFD',
'NGM_EPG0_FGW_SMD_MMCFD',
'NGM_EPG0_FGW_SMI_MMCFD',
'NGM_EPG0_FGW_SMO_MMCFD',
'NGM_EPG0_FGW_SMS_MMCFD',
'NGM_EPG0_FGW_SMT_MMCFD',
'NGM_EPG0_FGW_SND_MMCFD',
'NGM_EPG0_FGW_SNE_MMCFD',
'NGM_EPG0_FGW_SNM_MMCFD',
'NGM_EPG0_FGW_SNV_MMCFD',
'NGM_EPG0_FGW_SNY_MMCFD',
'NGM_EPG0_FGW_SOH_MMCFD',
'NGM_EPG0_FGW_SOK_MMCFD',
'NGM_EPG0_FGW_SOR_MMCFD',
'NGM_EPG0_FGW_SPA_MMCFD',
'NGM_EPG0_FGW_SSD_MMCFD',
'NGM_EPG0_FGW_STN_MMCFD',
'NGM_EPG0_FGW_STX_MMCFD',
'NGM_EPG0_FGW_SUT_MMCFD',
'NGM_EPG0_FGW_SVA_MMCFD',
'NGM_EPG0_FGW_SWV_MMCFD',
'NGM_EPG0_FGW_SWY_MMCFD'
];
$area_name = [
'U.S. Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Federal Offshore--Louisiana Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Federal Offshore--Gulf of Mexico Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Gulf of Mexico--Offshore Natural Gas Withdrawals (Million Cubic Feet)',
'Federal Offshore--Texas Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Federal Offshore California Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Other States Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Alaska--onshore Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Alaska--State Offshore Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Alaska Natural Gas Gross Withdrawals Total Offshore (Million Cubic Feet per Day)',
'Federal Offshore--Alabama Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Alabama--onshore Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Alabama--State Offshore Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Alabama Natural Gas Gross Withdrawals Total Offshore (Million Cubic Feet per Day)',
'California--onshore Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'California--State Offshore Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'California Natural Gas Gross Withdrawals Total Offshore (Million Cubic Feet per Day)',
'Louisiana--onshore Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Louisiana--State Offshore Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Louisiana Natural Gas Gross Withdrawals Total Offshore (Million Cubic Feet per Day)',
'Texas--onshore Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Texas--State Offshore Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Texas Natural Gas Gross Withdrawals Total Offshore (Million Cubic Feet per Day)',
'US--Federal Offshore Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'U.S. Natural Gas Gross Withdrawals Offshore (Million Cubic Feet per Day)',
'US--State Offshore Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Alaska Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Alabama Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Arkansas Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Arizona Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'California Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Colorado Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Florida Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Illinois Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Indiana Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Kansas Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Kentucky Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Louisiana Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Maryland Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Michigan Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Missouri Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Mississippi Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Montana Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'North Dakota Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Nebraska Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'New Mexico Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Nevada Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'New York Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Ohio Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Oklahoma Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Oregon Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Pennsylvania Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'South Dakota Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Tennessee Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Texas Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Utah Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Virginia Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'West Virginia Natural Gas Gross Withdrawals (Million Cubic Feet per Day)',
'Wyoming Natural Gas Gross Withdrawals (Million Cubic Feet per Day)'
];
$row = 0;
$rec_count = 0;
$count = -1;
$data_array = array();
$data_array['series'] = array();
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
if($c==0) {
$source_key = $data[$c];
if($source_key!=null && $source_key!=$previous_key) {
//$os = array("Mac", "NT", "Irix", "Linux");
// NGM_EPG0_FGW_NUS_MMCFD
//$area_code = substr($source_key, -9, 3);
$key = array_search($source_key, $area);
$name = $area_name[$key];
echo $source_key . ' - ' . $key .'<br>';
$series = array("series_id"=>$source_key, "name"=>$name, "data"=>array());
array_push($data_array["series"], $series);
$count++;
}
$previous_key = $source_key;
}
//if($c==1) {
//array_push($data_array['series']['data'], 'test');
//}
if($c==1) {
$date = (string)$data[$c];
$date = substr($date, 0, -2);
//echo $date . ' ';
}
if($c==2) {
if($data[$c]=='NA') {
$value = (string)$data[$c];
} else {
$value = (int)$data[$c];
}
//echo $value . '<br>';
$rec_set = [$date, $value];
//$rec_set = array($date, $value);
//echo var_dump($rec_set);
array_push($data_array["series"][$count]["data"], $rec_set);
}
}
$row++;
}
fclose($handle);
}
//echo json_encode($data_array);
$output = var_dump(json_encode($data_array));
echo '<pre>';
echo $output;
echo '</pre>';
$natural_gas_file = fopen("natural-gas-chart3.json", "w") or die("Unable to open/create natural-gas-chart.json file!");
fwrite($natural_gas_file, json_encode($data_array));
