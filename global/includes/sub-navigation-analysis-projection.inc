<?php?>
<?php
$tags = isset($tags) ? $tags : '';
if($subjectids == 180) {
?>
<li>
<a href="/petroleum/reports.cfm#/T214">Most popular</a>
</li>
<li>
<a href="/petroleum/reports.cfm#/T164">Consumption & sales</a>
</li>
<li>
<a href="/petroleum/reports.cfm#/T68">Crude reserves & production</a>
</li>
<li>
<a href="/petroleum/reports.cfm#/T160">Imports/exports & movements</a>
</li>
<li>
<a href="/petroleum/reports.cfm#/T66">Prices</a>
</li>
<li>
<a href="/petroleum/reports.cfm#/T186">Projections</a>
</li>
<li>
<a href="/petroleum/reports.cfm#/T214">Recurring</a>
</li>
<li>
<a href="/petroleum/reports.cfm#/T70">Refining & processing</a>
</li>
<li>
<a href="/petroleum/reports.cfm#/T84">Stocks</a>
</li>
<li class="footer">
<a href="/petroleum/reports.cfm">All reports</a>
</li>
<?php
} elseif($subjectids == 172) {
?>
<li>
<a href="/naturalgas/reports.cfm#/T214">Most popular</a>
</li>
<li>
<a href="/naturalgas/reports.cfm#/T72">Consumption</a>
</li>
<li>
<a href="/naturalgas/reports.cfm#/T170">Exploration & reserves</a>
</li>
<li>
<a href="/naturalgas/reports.cfm#/T172">Imports/exports & pipelines</a>
</li>
<li>
<a href="/naturalgas/reports.cfm#/T66">Prices</a>
</li>
<li>
<a href="/naturalgas/reports.cfm#/T80">Production</a>
</li>
<li>
<a href="/naturalgas/reports.cfm#/T186">Projections</a>
</li>
<li>
<a href="/naturalgas/reports.cfm#/T214">Recurring</a>
</li>
<li>
<a href="/naturalgas/reports.cfm#/T174">Storage</a>
</li>
<li class="footer">
<a href="/naturalgas/reports.cfm">All reports</a>
</li>
<?php
} elseif($subjectids == 136) {
?>
<li>
<a href="/coal/reports.cfm#/T214">Most popular</a>
</li>
<li>
<a href="/coal/reports.cfm#/T72">Consumption</a>
</li>
<li>
<a href="/coal/reports.cfm#/T76">Environment</a>
</li>
<li>
<a href="/coal/reports.cfm#/T78">Imports & exports</a>
</li>
<li>
<a href="/coal/reports.cfm#/T74">Industry characteristics</a>
</li>
<li>
<a href="/coal/reports.cfm#/T66">Prices</a>
</li>
<li>
<a href="/coal/reports.cfm#/T80">Production</a>
</li>
<li>
<a href="/coal/reports.cfm#/T186">Projections</a>
</li>
<li>
<a href="/coal/reports.cfm#/T214">Recurring</a>
</li>
<li>
<a href="/coal/reports.cfm#/T82">Reserves</a>
</li>
<li>
<a href="/coal/reports.cfm#/T84">Stocks</a>
</li>
<li class="footer">
<a href="/coal/reports.cfm">All reports</a>
</li>
<?php
} elseif($subjectids == 146) {
?>
<li>
<a href="/electricity/reports.cfm#/T214">Most popular</a>
</li>
<li>
<a href="/electricity/reports.cfm#/T96">Capacity and generation</a>
</li>
<li>
<a href="/electricity/reports.cfm#/T98">Costs, revenue and expense</a>
</li>
<li>
<a href="/electricity/reports.cfm#/T100">Demand</a>
</li>
<li>
<a href="/electricity/reports.cfm#/T76">Environment</a>
</li>
<li>
<a href="/electricity/reports.cfm#/T104">Fuel use/stocks</a>
</li>
<li>
<a href="/electricity/reports.cfm#/T108">Policies/programs</a>
</li>
<li>
<a href="/electricity/reports.cfm#/T106">Power plants and characteristics</a>
</li>
<li>
<a href="/electricity/reports.cfm#/T186">Projections</a>
</li>
<li>
<a href="/electricity/reports.cfm#/T214">Recurring</a>
</li>
<li>
<a href="/electricity/reports.cfm#/T110">Sales, revenue & prices</a>
</li>
<li>
<a href="/electricity/reports.cfm#/T112">Trade and reliability</a>
</li>
<li class="footer">
<a href="/electricity/reports.cfm">All reports</a>
</li>
<?php
} elseif($subjectids == "223,132") {
?>
<li>
<a href="/renewable/reports.cfm#/T214">Most popular</a>
</li>
<li>
<a href="/renewable/reports.cfm#/T166">Alternative Fuels</a>
</li>
<li>
<a href="/renewable/reports.cfm#/T96">Capacity and generation</a>
</li>
<li>
<a href="/renewable/reports.cfm#/T72">Consumption</a>
</li>
<li>
<a href="/renewable/reports.cfm#/T76">Environment</a>
</li>
<li>
<a href="/renewable/reports.cfm#/T74">Industry Characteristics</a>
</li>
<li>
<a href="/renewable/reports.cfm#/T66">Prices</a>
</li>
<li>
<a href="/renewable/reports.cfm#/T80">Production</a>
</li>
<li>
<a href="/renewable/reports.cfm#/T186">Projections</a>
</li>
<li>
<a href="/renewable/reports.cfm#/T214">Recurring</a>
</li>
<li>
<a href="/renewable/reports.cfm#/T168">Renewable energy type</a>
</li>
<li class="footer">
<a href="/renewable/reports.cfm">All reports</a>
</li>
<?php
} elseif($subjectids == "174") {
?>
<li>
<a href="/nuclear/reports.cfm#/T214">Most popular</a>
</li>
<li>
<a href="/nuclear/reports.cfm#/T152">Nuclear plants and reactors</a>
</li>
<li>
<a href="/nuclear/reports.cfm#/T186">Projections</a>
</li>
<li>
<a href="/nuclear/reports.cfm#/T214">Recurring</a>
</li>
<li>
<a href="/nuclear/reports.cfm#/T156">Uranium</a>
</li>
<li class="footer">
<a href="/nuclear/reports.cfm">All reports</a>
</li>
<?php
} elseif($subjectids == "140,142") {
if($tags == 'T86') {    //for /comsumption/residential/
} elseif($tags == 'T88') {    //for /comsumption/commercial/
} elseif($tags == 'T90') {    //for /comsumption/manufacturing/
} else {
?>
<li>
<a href="/consumption/reports.cfm#/T214">Most popular</a>
</li>
<li>
<a href="/consumption/reports.cfm#/T94">All sectors</a>
</li>
<li>
<a href="/consumption/reports.cfm#/T88">Commercial buildings</a>
</li>
<li>
<a href="/consumption/reports.cfm#/T218">Efficiency</a>
</li>
<li>
<a href="/consumption/reports.cfm#/T90">Manufacturing</a>
</li>
<li>
<a href="/consumption/reports.cfm#/T186">Projections</a>
</li>
<li>
<a href="/consumption/reports.cfm#/T86">Residential</a>
</li>
<li>
<a href="/consumption/reports.cfm#/T92">Transportation</a>
</li>
<li class="footer">
<a href="/consumption/reports.cfm">All reports</a>
</li>
<?php
}
}  elseif($subjectids == "168") {
?>
<li>
<a href="/totalenergy/reports.cfm#/T214">Most popular</a>
</li>
<li>
<a href="/totalenergy/reports.cfm#/T182">Annual</a>
</li>
<li>
<a href="/totalenergy/reports.cfm#/T198">Monthly</a>
</li>
<li>
<a href="/totalenergy/reports.cfm#/T186">Projections</a>
</li>
<li>
<a href="/totalenergy/reports.cfm#/T214">Recurring</a>
</li>
<li>
<a href="/totalenergy/reports.cfm#/T188">U.S. States</a>
</li>
<li class="footer">
<a href="/totalenergy/reports.cfm">All reports</a>
</li>
<?php
}  elseif($subjectids == "160") {
?>
<li>
<a href="/analysis/reports.cfm#/T214">Most popular</a>
</li>
<li>
<a href="/analysis/reports.cfm#/T128">Annual Energy Outlook related</a>
</li>
<li>
<a href="/analysis/reports.cfm#/T138">Congressional & other requests</a>
</li>
<li>
<a href="/analysis/reports.cfm#/T132">International Energy Outlook related</a>
</li>
<li>
<a href="/analysis/reports.cfm#/T136">Presentations</a>
</li>
<li>
<a href="/analysis/reports.cfm#/T214">Recurring</a>
</li>
<li>
<a href="/analysis/reports.cfm#/T130">Short-Term Outlook Related</a>
</li>
<li>
<a href="/analysis/reports.cfm#/T140">Special outlooks</a>
</li>
<li>
<a href="/analysis/reports.cfm#/T134">Testimony</a>
</li>
<li class="footer">
<a href="/analysis/reports.cfm">All reports</a>
</li>
<?php
} elseif($subjectids == "150") {
?>
<li>
<a href="/environment/reports.cfm#/T214">Most popular</a>
</li>
<li>
<a href="/environment/reports.cfm#/T176">Carbon/greenhouse gas emissions</a>
</li>
<li>
<a href="/environment/reports.cfm#/T116">International</a>
</li>
<li>
<a href="/environment/reports.cfm#/T118">Other environmental issues</a>
</li>
<li>
<a href="/environment/reports.cfm#/T186">Projections</a>
</li>
<li>
<a href="/environment/reports.cfm#/T214">Recurring</a>
</li>
<li class="footer">
<a href="/environment/reports.cfm">All reports</a>
</li>
<?php
} elseif($subjectids == "154") {
?>
<li>
<a href="/finance/reports.cfm#/T214">Most popular</a>
</li>
<li>
<a href="/finance/reports.cfm#/T194">Electricity</a>
</li>
<li>
<a href="/finance/reports.cfm#/T235">Financial markets</a>
</li>
<li>
<a href="/finance/reports.cfm#/T236">Financial reporting system</a>
</li>
<li>
<a href="/finance/reports.cfm#/T214">Recurring</a>
</li>
<li class="footer">
<a href="/finance/reports.cfm">All reports</a>
</li>
<?php
}
?>