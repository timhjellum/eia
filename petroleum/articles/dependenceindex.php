<?php$pageTitle = "Measuring Dependence on Imported Oil";
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
<h1>Measuring Dependence on Imported Oil</h1>
<p class="date"> August 1, 1995<br />
</p>
<p>U.S. dependence on imported oil** can be measured in
at least two ways. The differences hinge largely on
whether oil imports are defined as net imports (total
imports minus exports) or as total imports. EIA believes
that the net-imports definition gives a clearer indication
of the fraction of oil consumed that could not have been
supplied from domestic sources and is thus the most
appropriate measure. With this issue of the Monthly
Energy Review, the Energy Information Administration
(EIA) introduces a revised table that expresses dependence
on imports in terms of both measures.
</p>
<p>How dependent is the United States on foreign oil? How
dependent are we on oil from the Persian Gulf or other
sensitive areas? Do we import more than we produce domestically?
Questions like these arise almost every day in the
formation and analysis of energy policy. Since the oil embargo
by Arab members of the Organization of Petroleum
Exporting Countries (OPEC) in 1973-74, with its ensuing
gasoline lines and sharp price increases, there has been a
continuing concern about the vulnerability of the United
States to oil supply disruptions. One facet of this vulnerability
that is easily measured and reported is "import
dependence,"? i.e., the percentage of oil used in the United
States that must be imported. But, surprisingly enough, even
using the same data on U.S oil trade and consumption,
different parties compute and publicize different numbers
for import dependence and, especially, for how the dependence
has varied over the past two decades. How are the
different measures defined? How do they compare? What
are the sources of the differences? Which is the most meaningful
measure? Why does it matter?
</p>
<p><a href="/petroleum/archive/skinner1.pdf"><i class="ico pdf">PDF</i>See full report</a></p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column"><?php include('./includes/side-nav_dependence.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
