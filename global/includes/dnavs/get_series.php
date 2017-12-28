<?php
include_once('../config.php');
include(ROOT.'global/includes/utils/utils.inc');
include(ROOT.'global/includes/utils/Neic.inc');
include(ROOT.'global/includes/utils/OGIRS.inc');
$ogirs      = new OGIRS();

class InsertApilog extends NEIC {

	public function store($bindVariables) {
		$this->sql = <<< SQL
MERGE INTO NEIC.apilog m using
(select :api as "API", :year as "YEAR", :month as "MONTH" from dual) d
on (m.api = d.api and m.year = d.year and m.month = d.month)
when matched then update set hits = hits + 1
when not matched then insert (m.api, m.year, m.month, m.hits) values (d.api, d.year, d.month, 1)
SQL;

		$this->parse($bindVariables);
		$this->execute();
	}


}

try {
	$srckeys_in = isset($_REQUEST['srcKeys']) ? $_REQUEST['srcKeys'] : '';
	$freq_in = isset($_REQUEST['freq']) ? $_REQUEST['freq'] : '';
	
	$ts_series = "'RWTC','RBRTE','EER_EPMRU_PF4_Y35NY_DPG','EER_EPMRU_PF4_RGC_DPG','EER_EPMRR_PF4_Y05LA_DPG','EER_EPD2F_PF4_Y35NY_DPG','EER_EPJK_PF4_RGC_DPG','EER_EPLLPA_PF4_Y44MB_DPG','RNGWHHD'";

	//hsh_sql: insert
	//associated with query name ins_result
	$bindVariables = [];

	$insert                         = new InsertApilog();
	$bindVariables['api']     = 'petng';
	$bindVariables['month'] = date('m');
	$bindVariables['year']  = date('Y');
	$insert->store($bindVariables);


	$series_header_result_ExecutionTime = 0;
	$msc = microtime(true);
	//hsh_sql:
	//associated with query name series_header
	$bindVariables = array();
	if($srckeys_in && !is_null($srckeys_in)) {
		$ogirs->sql = <<<SQL
select 
	S.SOURCEKEY, nvl(trim(S.note), '') as note, trim(S.UNITS) as units, trim(S.UNITSDESC) as UNITSDESC, src."SOURCE"
from OGIRS.SERIES s
left join (
  select ser.sourcekey, max(tbl.navkey) as "SOURCE" 
  from ogirs.tblpubtables tbl
  join ogirs.tblpubsection sec
  on tbl.tablekey = sec.tablekey
  join ogirs.tblpubseries ser
  on sec.sectionkey = ser.sectionkey
  where  tbl.navkey in ('PET', 'NG') and ser.frequency = :frequency
  group by ser.sourcekey 
) src
on s.sourcekey = src.sourcekey
where 
SQL;

		$bindVariables['sourcekeys'] = explode(',', $srckeys_in);
		$ogirs->sql .= ' s.sourcekey IN(:' . implode(',:', $bindVariables['sourcekeys']) . ')';
		foreach ($bindVariables['sourcekeys'] as $v) {
			$bindVariables[ $v ] = $v;
		}
		unset($bindVariables['sourcekeys']);
		
		$bindVariables[":frequency"] = $freq_in;
		
		$series_header = $ogirs->get($bindVariables);
	}
	$series_header_result_ExecutionTime = microtime(true)-$msc;


	$series_data_result_ExecutionTime = 0;
	$msc = microtime(true);
	//hsh_sql:
//associated with query name series_data
	$bindVariables = array();
	if($srckeys_in && !is_null($srckeys_in)) {
		$ogirs->sql = "
select a.Adate,
nvl(replace(to_char(round(a.val, b.decimalplaces)),'-.','-0.'),'null') as jdata,
a.sourcekey
from OGIRS.TBLDATA a, OGIRS.SERIES b
where a.frequency = :frequency and a.sourcekey = b.sourcekey and ";
	
		$bindVariables['sourcekeys'] = explode(',', $srckeys_in);
		$ogirs->sql .= ' a.sourcekey IN(:' . implode(',:', $bindVariables['sourcekeys']) . ')';
		$ogirs->sql .= " order by a.sourcekey, a.Adate";
		
		foreach ($bindVariables['sourcekeys'] as $v) {
			$bindVariables[ $v ] = $v;
		}
		unset($bindVariables['sourcekeys']);

		$bindVariables[":frequency"] = $freq_in;
//print $ogirs->sql;
//print_r($bindVariables);
		$series_data = $ogirs->get($bindVariables);
	}
	$series_data_result_ExecutionTime = microtime(true)-$msc;

	$ret = array(
		"axis" => array(),
		"keys"  => array(),
		"baseAtZero"  => true
	);

	foreach($series_header as $k1=>$v1) {
		$ret['keys'][$v1['sourcekey']] = array(
			"name"  => $v1['note'],
			"freq"  => $freq_in,
			"key"  => $v1['sourcekey'] . "." . $freq_in,
			"url" => '',
			"source"  => "U.S. Energy Information Administration",
			"units" => $v1['unitsdesc'],
			"unitsabbrev" => $v1['units'],
			"data"  => array()
		);

		if(strtoupper($v1['source']) == "PET") {
			$ret['keys'][$v1['sourcekey']]['url'] = "http://www.eia.gov/dnav/pet/hist/LeafHandler.ashx?n=PET&s=" . $v1['sourcekey'] . "&f=" . $freq_in;
		} else {
			$ret['keys'][$v1['sourcekey']]['url'] = "http://www.eia.gov/dnav/ng/hist/" . $v1['sourcekey'] . $freq_in .  ".htm";
		}

		$tmp_ts_series = "'" . $v1['sourcekey'] . "'";
		if(strstr($ts_series, $tmp_ts_series) !== false) {
			$ret['keys'][$v1['sourcekey']]['source'] = "Thomson Reuters";
		}

		// This gets us a list of unique units
		// for generating axis on the client
		$units_ustr = strtoupper($v1['units']);
		$ret['axis'][$units_ustr] = $v1['units'];

	}

	foreach($series_data as $k1=>$v1) {
		$tmpArr = array($v1['adate'], $v1['jdata']);
		array_push($ret['keys'][$v1['sourcekey']]['data'], $tmpArr);
		$ret['baseAtZero'] = ($ret['baseAtZero'] && ($v1['jdata'] > 0));
	}


	$ret['seriesDataResultTime'] = $series_data_result_ExecutionTime;
	$ret['seriesHeaderResultTime'] = $series_header_result_ExecutionTime;
	$ret['updResultTime'] = $upd_result_ExecutionTime;

	switchKeysCase($ret, false);

	header('Content-Type: application/json');
	print json_encode($ret);
	//print json_encode($ret, JSON_NUMERIC_CHECK);

} catch (Exception $e) {
	print $e->getMessage();
	exit;
}
?>