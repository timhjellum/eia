<?php$pageTitle = "Increasing Distillate Production at U.S. Refineries";
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
<h1>Increasing Distillate Production at U.S. Refineries</h1>
<p class="date">November 18, 2010<br />
</p>
<p>This paper explores the potential for U.S. refiners to create more distillate and less gasoline without major additional investments beyond those already planned.
</p>
<p>World consumption growth for middle distillate fuels (diesel fuel, heating oil, kerosene, and jet
fuel) has exceeded the consumption growth for gasoline for some time, and the United States is
no exception. Although the decrease in the ratio of total gasoline consumption to consumption
for middle distillate fuels has been small in the United States, recent legislation requiring
increased use of renewable fuels has resulted in forecasts that project a decline in consumption
for petroleum-based gasoline from refineries, which would accelerate the decline in the
gasoline-to-middle distillate ratio from what has been seen historically. Rising fuel economy
standards for light duty vehicles are also expected to exert significant downward pressure on
gasoline demand relative to diesel demand. In addition, price incentives to produce more
middle distillate fuels have changed in recent years, with middle distillate margins exceeding
those of gasoline more often than in the past.
</p>
<p>These changes necessitate investigating the ability of the U.S. refining system to produce more
middle distillate fuels and less gasoline, before any major investments would need to be
incurred. The U.S. Energy Information Administration (EIA) and the U.S. Department of
Energy&#8482;s Office of Policy and International Affairs (PI) joined together to analyze this issue.
The results are summarized in this report.
</p>
<p><a href="/petroleum/archive/distillateprod.pdf"><i class="ico pdf">PDF</i>See full report</a></p>
<?php /* end main content */ ?>
</div>
<div class="l-side-column"><?php include('./includes/side-nav_distillateprod.inc'); ?>
</div>
</div>
<?php include(ROOT.'global/includes/css_rehab_eia-footer.inc'); ?>
</body>
</html>
