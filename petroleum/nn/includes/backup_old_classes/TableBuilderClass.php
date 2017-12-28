<?phpclass TableBuilder
{
public $DB_USER      = "ogirs";
public $DB_PASSWD    = "oilgs#x7";
public $DB_HOST      = "oradb33.eia.doe.gov:1530/oradb1";
public $title        = null;
public $table_units  = null;
public $footnote     = null;
function create_table_shell($get_table) {
// NOTE: Ask Rashi if need to implement anouther way -----------------------
$start_date = strtotime('last Friday - 6 weeks');
$end_date   = strtotime('last Friday - 1 week');
$start_date = date('Ymd', $start_date);
$end_date   = date('Ymd', $end_date);
$start_date = "20160401"; // NOTE: test start_date comment out when LIVE with new data !!!!!!!!.
$end_date   = "20160422"; // NOTE: test end_date   comment out when LIVE with new data !!!!!!!!.
// NOTE: end ---------------------------------------------------------------
$this->data_table['start_date'] = $start_date;
$this->data_table['end_date']   = $end_date;
$this->build_table_array($this->table_array[$get_table]['pub_series'], $get_table);
$this->build_thead_array($get_table);
$this->table_title($this->data_table['title']);
$this->table_units($this->data_table['units']);
$this->table_start($get_table);
$this->build_table_thead();
$this->build_table_tbody($get_table);
$this->table_footnotes($this->data_table['tfoot']);
// echo "<pre>";
// var_dump($this->table_array);
// echo "</pre><hr>";
//
// echo "<pre>";
// var_dump($this->data_table);
// echo "</pre>";
}
function build_table_array($pub_series, $get_table) {
$query = $this->query_builder($get_table);
// $query = $this->table_array[$get_table]["query"];
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
$stid = oci_parse($connection, $query[1]);
oci_execute($stid);
while ($row = oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_LOBS)) {
$this->add_thead_tbody($row, $get_table);
}
oci_free_statement($stid);
oci_close($connection);
}
}
// http://apidev.eia.gov/series/?api_key=9D9053FE1C223A6246AC0AA53AE16D34&series_id=PET.W_EPC0_IM0_NUS-NCA_MBBLD.W;PET.W_EPC0_IM0_NUS-NSA_MBBLD.W;PET.W_EPC0_IM0_NUS-NMX_MBBLD.W;PET.W_EPC0_IM0_NUS-NVE_MBBLD.W;PET.W_EPC0_IM0_NUS-NCO_MBBLD.W;PET.W_EPC0_IM0_NUS-NIZ_MBBLD.W;PET.W_EPC0_IM0_NUS-NKU_MBBLD.W;PET.W_EPC0_IM0_NUS-NNI_MBBLD.W;PET.W_EPC0_IM0_NUS-NEC_MBBLD.W;PET.W_EPC0_IM0_NUS-NAO_MBBLD.W;PET.W_EPC0_IM0_NUS-NAG_MBBLD.W;PET.W_EPC0_IM0_NUS-NBR_MBBLD.W;PET.W_EPC0_IM0_NUS-NCF_MBBLD.W;PET.W_EPC0_IM0_NUS-NEK_MBBLD.W;PET.W_EPC0_IM0_NUS-NNO_MBBLD.W;PET.W_EPC0_IM0_NUS-NRS_MBBLD.W;PET.W_EPC0_IM0_NUS-NUK_MBBLD.W&start=20170303&end=20170407
// http://apidev.eia.gov/series/?api_key=9D9053FE1C223A6246AC0AA53AE16D34&series_id=PET.W_EPC0_IM0_NUS-NCA_MBBLD.W;PET.W_EPC0_IM0_NUS-NSA_MBBLD.W;PET.W_EPC0_IM0_NUS-NMX_MBBLD.W;PET.W_EPC0_IM0_NUS-NVE_MBBLD.W;PET.W_EPC0_IM0_NUS-NCO_MBBLD.W;PET.W_EPC0_IM0_NUS-NIZ_MBBLD.W;PET.W_EPC0_IM0_NUS-NKU_MBBLD.W;PET.W_EPC0_IM0_NUS-NNI_MBBLD.W;PET.W_EPC0_IM0_NUS-NEC_MBBLD.W;PET.W_EPC0_IM0_NUS-NAO_MBBLD.W;PET.W_EPC0_IM0_NUS-NAG_MBBLD.W;PET.W_EPC0_IM0_NUS-NBR_MBBLD.W;PET.W_EPC0_IM0_NUS-NCF_MBBLD.W;PET.W_EPC0_IM0_NUS-NEK_MBBLD.W;PET.W_EPC0_IM0_NUS-NNO_MBBLD.W;PET.W_EPC0_IM0_NUS-NRS_MBBLD.W;PET.W_EPC0_IM0_NUS-NUK_MBBLD.W&start=20160401&end=20160422
?>
