<?phpclass TableBuilder
{
public $DB_USER      = "ogirs";
public $DB_PASSWD    = "oilgs#x7";
public $DB_HOST      = "oradb33.eia.doe.gov:1530/oradb1";
public $title        = null;
public $table_units  = null;
public $footnote     = null;
// function create_table_shell($get_table, $period) { //$table, $table_key, $period
function create_table_shell($table, $table_key, $period, $history, $source_key) {
// NOTE: Ask Rashi if need to implement anouther way -----------------------
$start_date = strtotime('last Friday - 6 weeks');
$end_date   = strtotime('last Friday - 1 week');
$start_date = date('Ymd', $start_date); // NOTE use when live, maybe need to test !!!!!!!!!!!!!
$end_date   = date('Ymd', $end_date);   // NOTE use when live, maybe need to test !!!!!!!!!!!!!
$start_date = "20160401"; // NOTE: test start_date comment out when LIVE with new data !!!!!!!!
$end_date   = "20160422"; // NOTE: test end_date   comment out when LIVE with new data !!!!!!!!
$ddmonday   = "20160307"; // NOTE: need to automate !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// NOTE: end ---------------------------------------------------------------
$this->data_table['start_date'] = $start_date;
$this->data_table['end_date']   = $end_date;
$this->data_table['ddmonday']   = $ddmonday;
$this->data_table['history']    = $history;
$this->data_table['table']      = $table;
$this->data_table['table_key']  = $table_key;
$this->data_table['source_key'] = $source_key;
$this->data_table['period']     = $period;
if ($this->data_table['history']=='false') {
$this->build_table_array(); // query data, populate object -----------------
$this->build_thead_array(); // query data, populate object -----------------
$this->data_series_area_option(); //
$this->sub_navigation();
$this->table_title();
$this->table_units();
$this->table_start();
$this->build_table_thead();
$this->build_table_tbody();
$this->table_footnotes();
// echo "<pre>";
// // // echo $query;
// var_dump($this->data_table);
// echo "</pre>";
} else {
$this->build_table_array(); // query data, populate object -----------------
$this->build_thead_array(); // query data, populate object -----------------
$this->table_title();
$this->table_units();
$this->table_start();
$this->build_history_table_thead();
$this->build_history_table_tbody();
$this->table_footnotes();
// echo "<pre>";
// // // echo $query;
// var_dump($this->data_table);
// echo "</pre>";
}
}
function build_table_array() {
$query = $this->query_builder();
// echo "<pre>";
// var_dump($query);
// echo "</pre>";
$connection = oci_pconnect($this->DB_USER, $this->DB_PASSWD, $this->DB_HOST);
if (!$connection) {
$error = oci_error();
throw new Exception($error["message"], $error["code"]);
}
// query title, units, and footnotes ---------------------------------------
$stid = oci_parse($connection, $query[0]);
oci_execute($stid);
while ($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_LOBS)) {
$this->add_title_units_tfoot($row, $get_table);
}
oci_free_statement($stid);
// query body --------------------------------------------------------------
switch ($this->data_table['history']) { // $this->data_table['history']=='true'
case 'true':
$query = $query[4];
break;
default:
switch ($this->data_table['period']) {
case 'D':
$query = $query[1];
break;
case 'W':
$query = $query[2];
break;
case '4':
$query = $query[2];
break;
case 'M':
$query = $query[3];
break;
}
break;
}
// switch ($this->data_table['period']) {
//   case 'D':
//     $query = $query[1];
//   break;
//   case 'W':
//     $query = $query[2];
//   break;
//   case '4':
//     $query = $query[2];
//   break;
//   case 'M':
//     $query = $query[3];
//   break;
// }
$stid = oci_parse($connection, $query);
oci_execute($stid);
while ($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_LOBS)) {
// echo "<pre>";
// echo var_dump($row);
// echo "</pre>";
if ($this->data_table['history']=='true') {
$this->add_history_thead_tbody($row, $get_table);
} else {
$this->add_thead_tbody($row, $get_table);
}
}
oci_free_statement($stid);
oci_close($connection);
// echo "<pre>";
// echo $query;
// // var_dump($this->data_table);
// echo "</pre>";
}
}
// http://apidev.eia.gov/series/?api_key=9D9053FE1C223A6246AC0AA53AE16D34&series_id=PET.W_EPC0_IM0_NUS-NCA_MBBLD.W;PET.W_EPC0_IM0_NUS-NSA_MBBLD.W;PET.W_EPC0_IM0_NUS-NMX_MBBLD.W;PET.W_EPC0_IM0_NUS-NVE_MBBLD.W;PET.W_EPC0_IM0_NUS-NCO_MBBLD.W;PET.W_EPC0_IM0_NUS-NIZ_MBBLD.W;PET.W_EPC0_IM0_NUS-NKU_MBBLD.W;PET.W_EPC0_IM0_NUS-NNI_MBBLD.W;PET.W_EPC0_IM0_NUS-NEC_MBBLD.W;PET.W_EPC0_IM0_NUS-NAO_MBBLD.W;PET.W_EPC0_IM0_NUS-NAG_MBBLD.W;PET.W_EPC0_IM0_NUS-NBR_MBBLD.W;PET.W_EPC0_IM0_NUS-NCF_MBBLD.W;PET.W_EPC0_IM0_NUS-NEK_MBBLD.W;PET.W_EPC0_IM0_NUS-NNO_MBBLD.W;PET.W_EPC0_IM0_NUS-NRS_MBBLD.W;PET.W_EPC0_IM0_NUS-NUK_MBBLD.W&start=20170303&end=20170407
// http://apidev.eia.gov/series/?api_key=9D9053FE1C223A6246AC0AA53AE16D34&series_id=PET.W_EPC0_IM0_NUS-NCA_MBBLD.W;PET.W_EPC0_IM0_NUS-NSA_MBBLD.W;PET.W_EPC0_IM0_NUS-NMX_MBBLD.W;PET.W_EPC0_IM0_NUS-NVE_MBBLD.W;PET.W_EPC0_IM0_NUS-NCO_MBBLD.W;PET.W_EPC0_IM0_NUS-NIZ_MBBLD.W;PET.W_EPC0_IM0_NUS-NKU_MBBLD.W;PET.W_EPC0_IM0_NUS-NNI_MBBLD.W;PET.W_EPC0_IM0_NUS-NEC_MBBLD.W;PET.W_EPC0_IM0_NUS-NAO_MBBLD.W;PET.W_EPC0_IM0_NUS-NAG_MBBLD.W;PET.W_EPC0_IM0_NUS-NBR_MBBLD.W;PET.W_EPC0_IM0_NUS-NCF_MBBLD.W;PET.W_EPC0_IM0_NUS-NEK_MBBLD.W;PET.W_EPC0_IM0_NUS-NNO_MBBLD.W;PET.W_EPC0_IM0_NUS-NRS_MBBLD.W;PET.W_EPC0_IM0_NUS-NUK_MBBLD.W&start=20160401&end=20160422
// http://api.eia.gov/series/?api_key=9D9053FE1C223A6246AC0AA53AE16D34&series_id=PET.M_EPLLPYN_SKB_NUS_MBBL.M;&end=20170515&num=-1
?>
