<?phprequire 'TableBuilderClass.php';
class TableData extends TableBuilder
{
public $data_table   = array( // NOTE all table data is saved to this object
"start_date"        => null,
"end_date"          => null,
"title"             => null,
"units"             => null,
"thead"             => array(),
"tfoot"             => array(),
"tbody"             => array()
);
public $table_array = array( // NOTE contains table specific data used to construct sql and thead
"table2w"=>array(
"table_key"       => "PET_SUM_SNDW_DCUS_NUS_W",         // BUG Rashi this needs to be in capitol letters
"pub_series"      => "PET_MOVE_WIMPC_S1_W_WIMPC_K_S1",  // SECTIONKEY in UV_GETTBLPUBSERIES
"frequency"       => "W",
"table_head_data" => array(
array(
array("Country", "API key"),
array(),  // this array is populated dynamicaly from db query --------
array("History")  // $table_array[$get_table][table_head_data][0][1]
)
)
),
"table3w"=>array(
"table_key"       => "PET_PNP_WPRODR_S1_W",               // TABLEKEY UV_GETTBLPUBTABLES
"pub_series"      => "PET_PNP_WPRODR_S1_W_WREFPROD_K_S1", // SECTIONKEY in UV_GETTBLPUBSERIES
"frequency"       => "W",
"table_head_data" => array(
array(
array("Product/region", "API key"),
array(),  // this array is populated dynamicaly from db query --------
array("History")  // $table_array[$get_table][table_head_data][0][1]
)
)
),
"table3w4"=>array(
"table_key"       => "PET_PNP_WPRODR_S1_W",               // TABLEKEY UV_GETTBLPUBTABLES
"pub_series"      => "PET_PNP_WPRODR_S1_W_WREFPROD_K_S1", // SECTIONKEY in UV_GETTBLPUBSERIES
"frequency"       => "W",
"table_head_data" => array(
array(
array("Product/region", "API key"),
array(),  // this array is populated dynamicaly from db query --------
array("History")  // $table_array[$get_table][table_head_data][0][1]
)
)
),
"table8w"=>array(
"table_key"       => "PET_MOVE_WIMPC_S1_W",             // TABLEKEY UV_GETTBLPUBTABLES
"pub_series"      => "PET_MOVE_WIMPC_S1_W_WIMPC_K_S1",  // SECTIONKEY in UV_GETTBLPUBSERIES
"frequency"       => "W",
"table_head_data" => array(
array(
array("Country", "API key"),
array(),  // this array is populated dynamicaly from db query --------
array("History")  // $table_array[$get_table][table_head_data][0][1]
)
)
),
"table8w4"=>array(
"table_key"       => "PET_MOVE_WIMPC_S1_W",            // TABLEKEY UV_GETTBLPUBTABLES
"pub_series"      => "PET_MOVE_WIMPC_S1_W_WIMPC_K_S1", // SECTIONKEY in UV_GETTBLPUBSERIES
"frequency"       => "W",
"table_head_data" => array(
array(
array("Country", "API key"),
array(),  // this array is populated dynamicaly from db query --------
array("History")
)
)
),
);
function query_builder($get_table) { // NOTE array of queries to build tables
// $table_key = $this->table_array[$get_table]['table_key'];
switch ($get_table) {
case "table2w":
$query = array(
// table title, units, and footer query ------------------------------
"SELECT * FROM ogirs.UV_GETTBLPUBTABLES WHERE TABLEKEY='PET_SUM_SNDW_DCUS_NUS_W'",
// table body query --------------------------------------------------
"SELECT PUB_SECTION.SECTIONNAME, PUB_SERIES.DISPLAYTEXT, CRS_WEEKLY.SOURCEKEY,
PUB_SERIES.STUBINDENT, PUB_SERIES.STUBORDER, CRS_WEEKLY.YEAR, CRS_WEEKLY.MONTH,
CRS_WEEKLY.WW01, CRS_WEEKLY.WW01DATE, CRS_WEEKLY.WW02, CRS_WEEKLY.WW02DATE,
CRS_WEEKLY.WW03, CRS_WEEKLY.WW03DATE,CRS_WEEKLY.WW04, CRS_WEEKLY.WW04DATE,
CRS_WEEKLY.DECADE, CRS_WEEKLY.YEAR
FROM ogirs.UV_GETTBLPUBSECTION PUB_SECTION
JOIN ogirs.UV_GETTBLPUBSERIES PUB_SERIES
ON PUB_SECTION.SECTIONKEY=PUB_SERIES.SECTIONKEY
JOIN ogirs.UV_GETTBLCRS_WEEKLY CRS_WEEKLY
ON PUB_SERIES.SOURCEKEY = CRS_WEEKLY.SOURCEKEY
WHERE PUB_SECTION.TABLEKEY='PET_SUM_SNDW_DCUS_NUS_W' AND PUB_SERIES.FREQUENCY='W' AND CRS_WEEKLY.WW01DATE='20160401'
ORDER BY PUB_SECTION.SECTIONORDER, PUB_SERIES.STUBORDER;"
);
return $query;
break;
case "table3w":
$query = array(
// table title, units, and footer query ------------------------------
"SELECT * FROM ogirs.UV_GETTBLPUBTABLES WHERE TABLEKEY='{$this->table_array[$get_table]['table_key']}'",
// table body query --------------------------------------------------
"SELECT PUBSERIES.DISPLAYTEXT,
CRS_WEEKLY.SOURCEKEY, PUBSERIES.STUBINDENT,
CRS_WEEKLY.WW01, CRS_WEEKLY.WW01DATE,
CRS_WEEKLY.WW02, CRS_WEEKLY.WW02DATE,
CRS_WEEKLY.WW03, CRS_WEEKLY.WW03DATE,
CRS_WEEKLY.WW04, CRS_WEEKLY.WW04DATE,
CRS_WEEKLY.DECADE, CRS_WEEKLY.YEAR
FROM ogirs.UV_GETTBLPUBSERIES PUBSERIES JOIN ogirs.UV_GETTBLCRS_WEEKLY CRS_WEEKLY
ON PUBSERIES.SOURCEKEY = CRS_WEEKLY.SOURCEKEY
WHERE PUBSERIES.SECTIONKEY='{$this->table_array[$get_table]['pub_series']}'
AND PUBSERIES.FREQUENCY='{$this->table_array[$get_table]['frequency']}'
AND CRS_WEEKLY.WW01DATE='{$this->data_table['start_date']}'
AND CRS_WEEKLY.WW04DATE='{$this->data_table['end_date']}'
ORDER BY PUBSERIES.STUBORDER"
);
return $query;
break;
case "table3w4":
$query = array(
// table title, units, and footer query ------------------------------
"SELECT * FROM ogirs.UV_GETTBLPUBTABLES WHERE TABLEKEY='{$this->table_array[$get_table]['table_key']}'",
// table body query --------------------------------------------------
"SELECT PUBSERIES.DISPLAYTEXT,
CRS_WEEKLY.SOURCEKEY, PUBSERIES.STUBINDENT,
CRS_WEEKLY.WW01, CRS_WEEKLY.WW01DATE,
CRS_WEEKLY.WW02, CRS_WEEKLY.WW02DATE,
CRS_WEEKLY.WW03, CRS_WEEKLY.WW03DATE,
CRS_WEEKLY.WW04, CRS_WEEKLY.WW04DATE,
CRS_WEEKLY.DECADE, CRS_WEEKLY.YEAR
FROM ogirs.UV_GETTBLPUBSERIES PUBSERIES JOIN ogirs.UV_GETTBLCRS_4WEEKLY CRS_WEEKLY
ON PUBSERIES.SOURCEKEY = CRS_WEEKLY.SOURCEKEY
WHERE PUBSERIES.SECTIONKEY='{$this->table_array[$get_table]['pub_series']}'
AND PUBSERIES.FREQUENCY='{$this->table_array[$get_table]['frequency']}'
AND CRS_WEEKLY.WW01DATE='{$this->data_table['start_date']}'
AND CRS_WEEKLY.WW04DATE='{$this->data_table['end_date']}'
ORDER BY PUBSERIES.STUBORDER"
);
return $query;
break;
case "table8w":
$query = array(
// table title, units, and footer query ------------------------------
"SELECT * FROM ogirs.UV_GETTBLPUBTABLES WHERE TABLEKEY='{$this->table_array[$get_table]['table_key']}'",
// table body query --------------------------------------------------
"SELECT PUBSERIES.DISPLAYTEXT,
CRS_WEEKLY.SOURCEKEY, PUBSERIES.STUBINDENT,
CRS_WEEKLY.WW01, CRS_WEEKLY.WW01DATE,
CRS_WEEKLY.WW02, CRS_WEEKLY.WW02DATE,
CRS_WEEKLY.WW03, CRS_WEEKLY.WW03DATE,
CRS_WEEKLY.WW04, CRS_WEEKLY.WW04DATE,
CRS_WEEKLY.DECADE, CRS_WEEKLY.YEAR
FROM ogirs.UV_GETTBLPUBSERIES PUBSERIES JOIN ogirs.UV_GETTBLCRS_WEEKLY CRS_WEEKLY
ON PUBSERIES.SOURCEKEY = CRS_WEEKLY.SOURCEKEY
WHERE PUBSERIES.SECTIONKEY='{$this->table_array[$get_table]['pub_series']}'
AND PUBSERIES.FREQUENCY='{$this->table_array[$get_table]['frequency']}'
AND CRS_WEEKLY.WW01DATE='{$this->data_table['start_date']}'
AND CRS_WEEKLY.WW04DATE='{$this->data_table['end_date']}'
ORDER BY PUBSERIES.STUBORDER"
);
return $query;
break;
case "table8w4":
$query = array(
// table title, units, and footer query ------------------------------
"SELECT * FROM ogirs.UV_GETTBLPUBTABLES WHERE TABLEKEY='{$this->table_array[$get_table]['table_key']}'",
// table body query --------------------------------------------------
"SELECT PUBSERIES.DISPLAYTEXT,
CRS_WEEKLY.SOURCEKEY, PUBSERIES.STUBINDENT,
CRS_WEEKLY.WW01, CRS_WEEKLY.WW01DATE,
CRS_WEEKLY.WW02, CRS_WEEKLY.WW02DATE,
CRS_WEEKLY.WW03, CRS_WEEKLY.WW03DATE,
CRS_WEEKLY.WW04, CRS_WEEKLY.WW04DATE,
CRS_WEEKLY.DECADE, CRS_WEEKLY.YEAR
FROM ogirs.UV_GETTBLPUBSERIES PUBSERIES JOIN ogirs.UV_GETTBLCRS_4WEEKLY CRS_WEEKLY
ON PUBSERIES.SOURCEKEY = CRS_WEEKLY.SOURCEKEY
WHERE PUBSERIES.SECTIONKEY='{$this->table_array[$get_table]['pub_series']}'
AND PUBSERIES.FREQUENCY='{$this->table_array[$get_table]['frequency']}'
AND CRS_WEEKLY.WW01DATE='{$this->data_table['start_date']}'
AND CRS_WEEKLY.WW04DATE='{$this->data_table['end_date']}'
ORDER BY PUBSERIES.STUBORDER"
);
return $query;
break;
}
}
function add_title_units_tfoot($row, $get_table) {
foreach ($row as $key => $value) {
switch ($key) {
case 'WEBNAME':
$this->data_table['title'] = $value;
break;
case 'TABLEUNITS':
$this->data_table['units'] = $value;
break;
case 'FOOTNOTE':
$this->data_table['tfoot'] = $value;
break;
}
}
}
function build_thead_array($get_table) {
foreach ($this->table_array[$get_table]['table_head_data'] as $table_head_data_key => $table_head_data_array) {
$head_row_array = array();
foreach ($table_head_data_array as $row_array_key => $row_array) {
foreach ($row_array as $key => $value) {
array_push($head_row_array, $value);
}
}
array_push($this->data_table['thead'], $head_row_array);
}
}
function add_thead_tbody($row, $get_table) {
$count_header_array = count($this->table_array[$get_table]['table_head_data']) - 1;
$row_array          = array();
switch ($get_table) {
case 'table2w':
foreach ($row as $key => $value) {
$value = trim($value);
if ($key=="WW01DATE" || $key=="WW02DATE" || $key=="WW03DATE" || $key=="WW04DATE") {
// populate empty array in $table_array ----------------------------
$this->table_array[$get_table]['table_head_data'][$count_header_array][1][$key] = $value;
} else {
if ($value == "--") {
$value = html_entity_decode('&#x2013;', ENT_COMPAT, 'UTF-8');
}
$row_array[$key] = $value;
}
}
array_push($this->data_table['tbody'], $row_array);
break;
case 'table3w':
foreach ($row as $key => $value) {
$value = trim($value);
if ($key=="WW01DATE" || $key=="WW02DATE" || $key=="WW03DATE" || $key=="WW04DATE") {
// populate empty array in $table_array ----------------------------
$this->table_array[$get_table]['table_head_data'][$count_header_array][1][$key] = $value;
} else {
if ($value == "--") {
$value = html_entity_decode('&#x2013;', ENT_COMPAT, 'UTF-8');
}
$row_array[$key] = $value;
}
}
array_push($this->data_table['tbody'], $row_array);
break;
case 'table3w4':
foreach ($row as $key => $value) {
$value = trim($value);
if ($key=="WW01DATE" || $key=="WW02DATE" || $key=="WW03DATE" || $key=="WW04DATE") {
// populate empty array in $table_array ----------------------------
$this->table_array[$get_table]['table_head_data'][$count_header_array][1][$key] = $value;
} else {
if ($value == "--") {
$value = html_entity_decode('&#x2013;', ENT_COMPAT, 'UTF-8');
}
$row_array[$key] = $value;
}
}
array_push($this->data_table['tbody'], $row_array);
break;
case 'table8w':
foreach ($row as $key => $value) {
$value = trim($value);
if ($key=="WW01DATE" || $key=="WW02DATE" || $key=="WW03DATE" || $key=="WW04DATE") {
// populate empty array in $table_array ----------------------------
$this->table_array[$get_table]['table_head_data'][$count_header_array][1][$key] = $value;
} else {
if ($value == "--") {
$value = html_entity_decode('&#x2013;', ENT_COMPAT, 'UTF-8');
}
$row_array[$key] = $value;
}
}
array_push($this->data_table['tbody'], $row_array);
break;
case 'table8w4':
foreach ($row as $key => $value) {
$value = trim($value);
if ($key=="WW01DATE" || $key=="WW02DATE" || $key=="WW03DATE" || $key=="WW04DATE") {
// populate empty array in $table_array ----------------------------
$this->table_array[$get_table]['table_head_data'][$count_header_array][1][$key] = $value;
} else {
if ($value == "--") {
$value = html_entity_decode('&#x2013;', ENT_COMPAT, 'UTF-8');
}
$row_array[$key] = $value;
}
}
array_push($this->data_table['tbody'], $row_array);
break;
}
}
function table_title($title) {
echo "<h2>{$title}</h2>";
}
function table_units($table_units) {
echo "<p>{$table_units}</p>";
}
function table_start($table_array_key) {
echo "<table id=\"{$table_array_key}\" name=\"{$table_array_key}\" class=\"basic_table\">";
}
function build_table_thead() {
$row = null;
foreach ($this->data_table['thead'] as $row_array_key => $row_array) {
$row = $row . "        <tr>";
foreach ($row_array as $key => $value) {
$row = $row . "            <th>" . $value . "</th>";
}
$row = $row . "        </tr>";
}
echo "    <thead>{$row}    </thead>";
}
function build_table_tbody($get_table) {
$row = null;
switch ($get_table) {
case 'table2w':
foreach ($this->data_table['tbody'] as $row_array_key => $row_array) {
$row = $row . "        <tr>";
foreach ($row_array as $key => $value) {
if ($key == "DISPLAYTEXT") {
$display_text = $value;
}
if ($key == "SOURCEKEY") {
$api_link = "PET." . $value . ".W";
}
if ($key == "STUBINDENT") {
$indent = $value;
$row = $row . "            <td class='indent" . $indent . "'>" . $display_text . "</td>
            <td><a href=\"/opendata/qb.php?sdid=" . $api_link . "\">API key</a></td>";
}
if ($key == "WW01" || $key == "WW02" || $key == "WW03" || $key == "WW04") {
$row = $row . "            <td>" . $value . "</td>";
}
}
$row = $row . "            <td></td>"; // NOTE add history link to this td !!!!!!!
$row = $row . "        </tr>";
}
echo "    <tbody>{$row}    </tbody>";
break;
case 'table3w':
foreach ($this->data_table['tbody'] as $row_array_key => $row_array) {
$row = $row . "        <tr>";
foreach ($row_array as $key => $value) {
if ($key == "DISPLAYTEXT") {
$display_text = $value;
}
if ($key == "SOURCEKEY") {
$api_link = "PET." . $value . ".W";
}
if ($key == "STUBINDENT") {
$indent = $value;
$row = $row . "            <td class='indent" . $indent . "'>" . $display_text . "</td>
            <td><a href=\"/opendata/qb.php?sdid=" . $api_link . "\">API key</a></td>";
}
if ($key == "WW01" || $key == "WW02" || $key == "WW03" || $key == "WW04") {
$row = $row . "            <td>" . $value . "</td>";
}
}
$row = $row . "            <td></td>"; // NOTE add history link to this td !!!!!!!
$row = $row . "        </tr>";
}
echo "    <tbody>{$row}    </tbody>";
break;
case 'table3w4':
foreach ($this->data_table['tbody'] as $row_array_key => $row_array) {
$row = $row . "        <tr>";
foreach ($row_array as $key => $value) {
if ($key == "DISPLAYTEXT") {
$display_text = $value;
}
if ($key == "SOURCEKEY") {
$api_link = "PET." . $value . ".W";
}
if ($key == "STUBINDENT") {
$indent = $value;
$row = $row . "            <td class='indent" . $indent . "'>" . $display_text . "</td>
            <td><a href=\"/opendata/qb.php?sdid=" . $api_link . "\">API key</a></td>";
}
if ($key == "WW01" || $key == "WW02" || $key == "WW03" || $key == "WW04") {
$row = $row . "            <td>" . $value . "</td>";
}
}
$row = $row . "            <td></td>"; // NOTE add history link to this td !!!!!!!
$row = $row . "        </tr>";
}
echo "    <tbody>{$row}    </tbody>";
break;
case 'table8w':
foreach ($this->data_table['tbody'] as $row_array_key => $row_array) {
$row = $row . "        <tr>";
foreach ($row_array as $key => $value) {
if ($key == "DISPLAYTEXT") {
$display_text = $value;
}
if ($key == "SOURCEKEY") {
$api_link = "PET." . $value . ".W";
}
if ($key == "STUBINDENT") {
$indent = $value;
$row = $row . "            <td class='indent" . $indent . "'>" . $display_text . "</td>
            <td><a href=\"/opendata/qb.php?sdid=" . $api_link . "\">API key</a></td>";
}
if ($key == "WW01" || $key == "WW02" || $key == "WW03" || $key == "WW04") {
$row = $row . "            <td>" . $value . "</td>";
}
}
$row = $row . "            <td></td>"; // NOTE add history link to this td !!!!!!!
$row = $row . "        </tr>";
}
echo "    <tbody>{$row}    </tbody>";
break;
case 'table8w4':
foreach ($this->data_table['tbody'] as $row_array_key => $row_array) {
$row = $row . "        <tr>";
foreach ($row_array as $key => $value) {
if ($key == "DISPLAYTEXT") {
$display_text = $value;
}
if ($key == "SOURCEKEY") {
$api_link = "PET." . $value . ".W";
}
if ($key == "STUBINDENT") {
$indent = $value;
$row = $row . "            <td class='indent" . $indent . "'>" . $display_text . "</td>
            <td><a href=\"/opendata/qb.php?sdid=" . $api_link . "\">API key</a></td>";
}
if ($key == "WW01" || $key == "WW02" || $key == "WW03" || $key == "WW04") {
$row = $row . "            <td>" . $value . "</td>";
}
}
$row = $row . "            <td></td>";
$row = $row . "        </tr>";
}
echo "    <tbody>{$row}    </tbody>";
break;
}
}
function table_footnotes($footnote) {
$last_row     = count($this->data_table['thead'])-1; // count bottom row of thead this row will typically have the most column labels
$column_count = count($this->data_table['thead'][$last_row]);
echo "    <tfoot>        <tr>            <td colspan=\"{$column_count}\">{$footnote}</td>        </tr>    </tfoot></table>";
}
function show_table_list() {
echo "
<h1>Temporary table list</h1>
<p><a href='/petroleum/supply/weekly/' target='_blank'>Current wpsr</a></p>
<ul>
<li><a href='./?table=2w'>Table 2 weekly</a></li>
<li><a href='./?table=3w'>Table 3 weekly</a></li>
<li><a href='./?table=3w4'>Table 3 - 4 week average</a></li>
<li><a href='./?table=8w'>Table 8 weekly</a></li>
<li><a href='./?table=8w4'>Table 8 - 4 week average</a></li>
<li><a href='./?table=9'>Table 9</a></li>
</ul>
";
}
}
?>
