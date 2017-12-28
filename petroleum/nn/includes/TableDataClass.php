<?phprequire 'TableBuilderClass.php';
class TableData extends TableBuilder
{
public $data_table   = array( // NOTE all table data is saved to this object
"start_date"  => null,
"end_date"    => null,
"ddmonday"    => null,
"history"     => false,
"table"       => null,
"table_key"   => null,
"source_key"  => null,
"period"      => null,
"title"       => null,
"units"       => null,
"thead"       => array(),
"tfoot"       => array(),
"tbody"       => array()
);
function validate_period($table, $period) {
$valid = false;
if (array_key_exists($period, $this->table_array[$table]['tablekeys'])) {
$valid = true;
}
return $valid;
}
function validate_table_keys($table, $period) {
$array = array();
if (array_key_exists($table, $this->table_array)) {
foreach ($this->table_array[$table]['tablekeys'] as $period_array_key => $period_array) {
foreach ($period_array as $table_array_key => $record_array) {
array_push($array, $record_array[0]);
}
}
}
return $array;
}
function sub_navigation() {
// $table      = $this->table_array[$get_table]['table_family'];
// $frequency  = $this->table_array[$get_table]['frequency'];
$table      = $this->data_table['table'];
$table_num  = $table;
// $table_num  = str_replace('table', '', $table);
$table_key  = $this->data_table['table_key'];
$period     = $this->data_table['period'];
$sub_nav = "<form id=\"page-changer\" action=\"./\" method=\"get\">";
$sub_nav = $sub_nav . "<input name=\"table\" type=\"hidden\" value=\"" . $table_num . "\">";
$sub_nav = $sub_nav . "<select id=\"table_key\" name=\"table_key\">";
foreach ($this->table_array[$table]['tablekeys'][$period] as $key_array => $sub_array) {
$selected = null;
if ($table_key == $sub_array[0]) {
$selected = "selected";
}
$sub_nav = $sub_nav . "<option value=\"" . $sub_array[0] . "\" " . $selected . "><span class=\"" . $sub_array[1] . "\"></span>" . $sub_array[2] . "</option>";
}
$sub_nav = $sub_nav . "</select> ";
$selected = null;
$sub_nav = $sub_nav . "<select id=\"period\" name=\"period\">";
if (array_key_exists('D', $this->table_array[$table]['tablekeys'])) {
$sub_nav = $sub_nav . "<option value=\"D\"" . $selected = ($period=="D" ? 'selected' : '') . ">Daily</option>";
}
if (array_key_exists('W', $this->table_array[$table]['tablekeys'])) {
$sub_nav = $sub_nav . "<option value=\"W\"" . $selected = ($period=="W" ? 'selected' : '') . ">Weekly</option>";
}
if (array_key_exists('4', $this->table_array[$table]['tablekeys'])) {
$sub_nav = $sub_nav . "<option value=\"4\"" . $selected = ($period=="4" ? 'selected' : '') . ">4 week avarage</option>";
}
if (array_key_exists('M', $this->table_array[$table]['tablekeys'])) {
$sub_nav = $sub_nav . "<option value=\"M\"" . $selected = ($period=="M" ? 'selected' : '') . ">Monthly</option>";
}
if (array_key_exists('A', $this->table_array[$table]['tablekeys'])) {
$sub_nav = $sub_nav . "<option value=\"A\"" . $selected = ($period=="A" ? 'selected' : '') . ">Annual</option>";
}
$sub_nav = $sub_nav . "</select> ";
$sub_nav = $sub_nav . "<input type=\"hidden\" value=\"false\" name=\"history\" id=\"history\" />";
$sub_nav = $sub_nav . "<input class=\"hidden\" type=\"submit\" value=\"Load data\" id=\"submit\" />";
$sub_nav = $sub_nav . "</form>";
echo $sub_nav;
}
function data_series_area_option() {
switch ($this->data_table['table']) {
case '2':
$radio_buttons = "<p>View: <a href=\"./?table=2&table_key={$this->table_array['2']['tablekeys']['W'][0][0]}&period=W&history=false\">Data series</a> or
<a href=\"./?table=2area&table_key={$this->table_array['2area']['tablekeys']['W'][0][0]}&period=W&history=false\">Area</a></p>";
break;
case '4':
$radio_buttons = "<p>View: <a href=\"./?table=4&table_key={$this->table_array['4']['tablekeys']['W'][0][0]}&period=W&history=false\">Data series</a> or
<a href=\"./?table=4area&table_key={$this->table_array['4area']['tablekeys']['W'][0][0]}&period=W&history=false\">Area</a></p>";
break;
case '5':
$radio_buttons = "<p>View: <a href=\"./?table=5&table_key={$this->table_array['5']['tablekeys']['W'][0][0]}&period=W&history=false\">Data series</a> or
<a href=\"./?table=5area&table_key={$this->table_array['5area']['tablekeys']['W'][0][0]}&period=W&history=false\">Area</a></p>";
break;
default:
$radio_buttons = null;
break;
}
echo $radio_buttons;
}
function add_title_units_tfoot($row) {
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
function build_thead_array() {
$table      = $this->data_table['table'];
//$table_key  = $this->data_table['table_key'];
//$period     = $this->data_table['period'];
foreach ($this->table_array[$table]['table_head_data'] as $table_head_data_key => $table_head_data_array) {
// foreach ($this->table_array[$table][$table_key][$period]['table_head_data'] as $table_head_data_key => $table_head_data_array) {
$head_row_array = array();
foreach ($table_head_data_array as $row_array_key => $row_array) {
foreach ($row_array as $key => $value) {
array_push($head_row_array, $value);
}
}
// foreach ($table_head_data_array as $row_array_key => $row_array) {
//   foreach ($row_array as $key => $value) {
//     array_push($head_row_array, $value);
//   }
// }
array_push($this->data_table['thead'], $head_row_array);
}
}
function add_thead_tbody($row) {
$table              = $this->data_table['table'];
//$table_key          = $this->data_table['table_key'];
$period             = $this->data_table['period'];
$count_header_array = count($this->table_array[$table]['table_head_data']) - 1;
// $date_array         = array();
$row_array          = array();
foreach ($row as $key => $value) {
// $date_array         = array();
$value = trim($value);
switch ($period) {
case 'D':
if ($key=="DDMONDAY" || $key=="DDTUESDAY" || $key=="DDWENDESDAY" || $key=="DDTHURSDAY" || $key=="DDFRIDAY") {
// populate empty array in $table_array --------------------------------
$this->table_array[$table]['table_head_data'][$count_header_array][1][$key] = $value;
// array_splice($this->table_array[$table]['table_head_data'][$count_header_array], 2, 0, $value);
//$date_array[$key] = $value;
} else {
if ($value == "--") {
$value = html_entity_decode('&#x2013;', ENT_COMPAT, 'UTF-8');
}
$row_array[$key] = $value;
}
break;
case 'W':
if ($key=="WW01DATE" || $key=="WW02DATE" || $key=="WW03DATE" || $key=="WW04DATE" || $key=="WW05DATE") {
// populate empty array in $table_array --------------------------------
$this->table_array[$table]['table_head_data'][$count_header_array][1][$key] = $value;
// array_splice($this->table_array[$table]['table_head_data'][$count_header_array], 2, 0, $value);
//$date_array[$key] = $value;
} else {
if ($value == "--") {
$value = html_entity_decode('&#x2013;', ENT_COMPAT, 'UTF-8');
}
$row_array[$key] = $value;
}
break;
case '4':
if ($key=="WW01DATE" || $key=="WW02DATE" || $key=="WW03DATE" || $key=="WW04DATE" || $key=="WW05DATE") {
// populate empty array in $table_array --------------------------------
$this->table_array[$table]['table_head_data'][$count_header_array][1][$key] = $value;
// array_splice($this->table_array[$table]['table_head_data'][$count_header_array], 2, 0, $value);
//$date_array[$key] = $value;
} else {
if ($value == "--") {
$value = html_entity_decode('&#x2013;', ENT_COMPAT, 'UTF-8');
}
$row_array[$key] = $value;
}
break;
}
}
// echo "<pre>row<br>";
// var_dump($row);
// echo "</pre>";
// foreach ($date_array as $key => $value) {
//   array_splice($this->table_array[$table]['table_head_data'][$count_header_array][0], 2, 0, $value);
// }
// array_splice($this->table_array[$table]['table_head_data'][$count_header_array], 2, 0, $value);
array_push($this->data_table['tbody'], $row_array);
}
function add_history_thead_tbody($row) {
$table              = $this->data_table['table'];
$period             = $this->data_table['period'];
$count_header_array = count($this->table_array[$table]['table_head_data']) - 1;
$row_array          = array();
foreach ($row as $key => $value) {
// $date_array         = array();
$value = trim($value);
$row_array[$key] = $value;
// array_push($this->data_table['tbody'], $row_array);
}
// echo "<pre>row<br>";
// var_dump($this->data_table);
// echo "</pre>";
// foreach ($date_array as $key => $value) {
//   array_splice($this->table_array[$table]['table_head_data'][$count_header_array][0], 2, 0, $value);
// }
// array_splice($this->table_array[$table]['table_head_data'][$count_header_array], 2, 0, $value);
array_push($this->data_table['tbody'], $row_array);
}
function table_title() {
echo "<h2 id=\"table_title\">{$this->data_table['title']}</h2>";
}
function table_units() {
echo "<p>{$this->data_table['units']}</p>";
}
function table_start() {
echo "<table id=\"{$this->data_table['table_key']}\" name=\"{$this->data_table['table_key']}\" class=\"basic_table\">";
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
function build_history_table_thead() {
echo "    <thead>
        <tr>
            <th></th>
<th colspan='2' width='17%'>Week 1</th>
<th colspan='2' width='17%'>Week 2</th>
<th colspan='2' width='17%'>Week 3</th>
<th colspan='2' width='17%'>Week 4</th>
<th colspan='2' width='17%'>Week 5</th>
        </tr>
        <tr>
            <th>Year-month</th>
            <th>End date</th>
<th class='val'>Value</th>
            <th>End date</th>
<th class='val'>Value</th>
            <th>End date</th>
<th class='val'>Value</th>
            <th>End date</th>
<th class='val'>Value</th>
            <th>End date</th>
            <th>Value</th>
        </tr>
    </thead>";
}
// table body builder --------------------------------------------------------
function build_table_tbody() {
$row           = null;
$section_name  = null;
$row_count     = count($this->data_table['tbody']);
$last_head_row = count($this->data_table['thead'])-1;
$span_count    = count($this->data_table['thead'][$last_head_row]);
$period        = $this->data_table['period'];
// echo "<pre>column_count<br>"; source_key <a href="./?table=2&table_key=PET_SUM_SNDW_DCUS_NUS_W&period=W&history=false">Data series</a>
// var_dump($span_count);
// echo "</pre>";
if ($row_count > 0) {
foreach ($this->data_table['tbody'] as $row_array_key => $row_array) {
foreach ($row_array as $key => $value) {
if ($key == 'SECTIONNAME' && $section_name != $value) {
$row = $row . "        <tr class=\"sectionhead\">            <td colspan=\"{$span_count}\">" . $value . "</td>        </tr>";
$section_name = $value;
break;
}
}
$row = $row . "        <tr>";
foreach ($row_array as $key => $value) {
if ($key == "DISPLAYTEXT") {
$display_text = $value;
}
if ($key == "SOURCEKEY") {
$api_link = "PET." . $value . "." . $this->data_table['period'];
$this->data_table['source_key'] = $value;
// $history_link = $value;
$history_link = "<a href=\"./?table=" . $this->data_table['table'] . "&table_key=" . $this->data_table['table_key'] . "&period=" . $this->data_table['period'] . "&source_key=" . $this->data_table['source_key'] . "&history=true\">History</a>";
// $history_link = "<a href=\"./?table=" . $this->data_table['table'] . "&table_key=" . $this->data_table['table_key'] . "&period=" . $this->data_table['period'] . "&history=true\">" . $value . "</a>";
}
switch ($period) {
case 'D':
if ($key == "DISPLAYTEXT") {
// if ($key == "STUBINDENT") {
$indent = $value;
$row = $row . "            <td class='indent0'>" . $display_text . "</td>";
$row = $row . "            <td><input class=\"api_check_box\" type=\"checkbox\" value=\"" . $api_link . "\"> ";
$row = $row . "<a href=\"/opendata/qb.php?sdid=" . $api_link . "\">API key</a></td>";
}
break;
case 'W':
if ($key == "STUBINDENT") {
$indent = $value;
$row = $row . "            <td class='indent" . $indent . "'>" . $display_text . "</td>";
$row = $row . "            <td><input class=\"api_check_box\" type=\"checkbox\" value=\"" . $api_link . "\"> ";
$row = $row . "<a href=\"/opendata/qb.php?sdid=" . $api_link . "\">API key</a></td>";
}
break;
case '4':
if ($key == "STUBINDENT") {
$indent = $value;
$row = $row . "            <td class='indent" . $indent . "'>" . $display_text . "</td>";
$row = $row . "            <td><input class=\"api_check_box\" type=\"checkbox\" value=\"" . $api_link . "\"> ";
$row = $row . "<a href=\"/opendata/qb.php?sdid=" . $api_link . "\">API key</a></td>";
}
break;
}
switch ($this->data_table['period']) {
case 'D':
if ($key == "DDMONVAL" || $key == "DDTUEVAL" || $key == "DDWENVAL" || $key == "DDTHUVAL" || $key == "DDFRIVAL") {
$row = $row . "            <td>" . $value . "</td>";
}
break;
case 'W':
if ($key == "WW01" || $key == "WW02" || $key == "WW03" || $key == "WW04" || $key == "WW05") {
$row = $row . "            <td>" . $value . "</td>";
}
break;
case '4':
if ($key == "WW01" || $key == "WW02" || $key == "WW03" || $key == "WW04" || $key == "WW05") {
$row = $row . "            <td>" . $value . "</td>";
}
break;
}
}
// $history_link
$row = $row . "            <td>" . $history_link . "</td></td>";
$row = $row . "        </tr>";
}
} else {
$row = "        <tr>            <td colspan=\"{$span_count}\"><span style=\"color: red; font-weight:bold;\">No data are available.</span></td>        </tr>";
}
echo "    <tbody>{$row}    </tbody>";
}
// table history body builder ------------------------------------------------
function build_history_table_tbody() {
$row           = null;
$section_name  = null;
$row_count     = count($this->data_table['tbody']);
$last_head_row = count($this->data_table['thead']);
$span_count    = count($this->data_table['thead'][$last_head_row]);
$period        = $this->data_table['period'];
$history_search_array  = array('YEAR', 'MONTH', 'WW01DATE', 'WW01', 'WW02DATE', 'WW02', 'WW03DATE', 'WW03', 'WW04DATE', 'WW04', 'WW05DATE', 'WW05');
// 31552
$col_count     = count($history_search_array);
if ($row_count>0) {
// $row = $row . "        <tr>";
$section_year = null;
foreach ($this->data_table['tbody'] as $row_array_key => $row_array) {
if ($row_array['YEAR']!=$section_year) {
$row = $row . "        <tr class='sectionhead'>            <td colspan=" . $col_count . ">Year " . $row_array['YEAR'] . "</td>        </tr>";
}
$row = $row . "        <tr>";
foreach ($history_search_array as $search_key => $search_key_value) {
// echo "{$search_key} {$search_key_value}<br>";
if (array_key_exists($search_key_value, $row_array)) {
// echo "{$search_key} {$search_key_value} {$row_array[$search_key_value]}<br>";
// if ($search_key_value=="YEAR") {
//   $row = $row . "        <tr>            <td class='sectionhead' colspan=" . $col_count . ">" . $row_array[$search_key_value] . "</td>        <tr>";
// } else {
switch ($search_key_value) {
case 'YEAR':
$year = $row_array[$search_key_value];
$section_year = $row_array[$search_key_value];
break;
case 'MONTH':
$month = $row_array[$search_key_value];
// $row = $row . "            <td class='year_month'>" . $year . " " . $month . "</td>";
$row = $row . "            <td class='indent0'>" . $month . "</td>";
break;
case 'WW01DATE':
$end_date = date("M j", strtotime($row_array[$search_key_value]));
$row = $row . "            <td class='left_grey'>" . $end_date . "</td>";
break;
case 'WW01':
$value = number_format($row_array[$search_key_value]);
$row = $row . "            <td>" . $value . "</td>";
break;
case 'WW02DATE':
$end_date = date("M j", strtotime($row_array[$search_key_value]));
$row = $row . "            <td class='left_grey'>" . $end_date . "</td>";
break;
case 'WW02':
$value = number_format($row_array[$search_key_value]);
$row = $row . "            <td>" . $value . "</td>";
break;
case 'WW03DATE':
$end_date = date("M j", strtotime($row_array[$search_key_value]));
$row = $row . "            <td class='left_grey'>" . $end_date . "</td>";
break;
case 'WW03':
$value = number_format($row_array[$search_key_value]);
$row = $row . "            <td>" . $value . "</td>";
break;
case 'WW04DATE':
$end_date = date("M j", strtotime($row_array[$search_key_value]));
$row = $row . "            <td class='left_grey'>" . $end_date . "</td>";
break;
case 'WW04':
$value = number_format($row_array[$search_key_value]);
$row = $row . "            <td>" . $value . "</td>";
break;
case 'WW05DATE':
$end_date = date("M j", strtotime($row_array[$search_key_value]));
$row = $row . "            <td class='left_grey'>" . $end_date . "</td>";
break;
case 'WW05':
$value = number_format($row_array[$search_key_value]);
$row = $row . "            <td>" . $value . "</td>";
break;
default:
$row = $row . "            <td class='left_grey'>error</td>";
break;
// }
}
} else {
switch ($search_key_value) {
case 'WW01DATE':
$row = $row . "            <td class='left_grey'>&mdash;</td>";
break;
case 'WW02DATE':
$row = $row . "            <td class='left_grey'>&mdash;</td>";
break;
case 'WW03DATE':
$row = $row . "            <td class='left_grey'>&mdash;</td>";
break;
case 'WW04DATE':
$row = $row . "            <td class='left_grey'>&mdash;</td>";
break;
case 'WW05DATE':
$row = $row . "            <td class='left_grey'>&mdash;</td>";
break;
default:
$row = $row . "            <td>&mdash;</td>";
break;
}
}
}
}
$row = $row . "        </tr>";
} else {
$row = "        <tr>            <td colspan=\"{$span_count}\"><span style=\"color: red; font-weight:bold;\">No data are available.</span></td>        </tr>";
}
echo "    <tbody>{$row}    </tbody>";
}
function table_footnotes() {
$last_row     = count($this->data_table['thead'])-1; // count bottom row of thead this row will typically have the most column labels
$column_count = count($this->data_table['thead'][$last_row]);
echo "    <tfoot>        <tr>            <td colspan=\"{$column_count}\">{$this->data_table['tfoot']}</td>        </tr>    </tfoot></table>";
}
}
?>
