<?php$pageTitle = "U.S. Refining Capacity Utilization";
$L2Title = "Petroleum and Other Liquids";
?>
<?php include_once('../../config.php'); ?>
<!DOCTYPE html>
<html>
<head>
<?php
if(isset($pageTitle) && $pageTitle) {
print "<title>" . $pageTitle . "</title>"; print PHP_EOL;
$pageTitle = '';
}
?>
<?php include(ROOT.'global/includes/css_rehab_eia-head.inc'); ?>
<?php if(!isset($no_titling)) include(ROOT.'global/includes/titling.inc'); ?>
</head>
<body>
<?php include(ROOT.'global/includes/css_rehab_eia-header.inc'); ?>
<div class="l-row">
<div class="l-main-column">
<?php /* start main content */ ?>
<h1>U.S. Refining Capacity Utilization</h1>
<p class="date">October 1, 1995<br />
</p>
<p>U.S. crude oil refinery utilization rates have steadily increased
since oil price and allocation decontrol in 1981. The annual
average atmospheric distillation utilization rate has increased
from 68.6 percent of operable capacity in 1981 to 92.6 percent
in 1994. The distillation utilization rate reached a peak of 96.4
percent in August 1994, the highest one-month average rate in
over 20 years. This dramatic increase in refining capacity
utilization has stimulated a growing interest in the ability of
U.S. refineries to supply domestic requirements for finished
petroleum products</p>
<p>This article briefly reviews recent trends in domestic refining
capacity utilization and examines in detail the differences in
reported crude oil distillation capacities and utilization rates
among different classes of refineries. Comparison of refining
margins (profitability) to crude oil distillation utilization rates
suggests that an alternative way to measure refining capacity
and utilization is needed to properly assess the effect of
growing demand on market prices and sources of supply. A
focus on downstream processing capacity and utilization may
provide a better indicator of potential constraints in refining
capacity. A more complex analysis could expand the scope to
include foreign refiners in a global view of petroleum markets.
</p>
<p><a href="/petroleum/archive/lidder3.pdf"><i class="ico pdf">PDF</i>See full report</a></p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column">
<?php include('./includes/side-nav_utilization.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>