<?php $subjectids = "180"; ?><?php $sectionname = "Petroleum & Other Liquids"; ?>
<div class="l-row header">
<div class="l-full-width-column">
<div class="title-banner bg-petroleum">
<h1><?php echo "$sectionname"?></h1>
</div>
<div class="subnav">
<div class="left">
<ul class="left-nav">
<li class="<?php if ( $locale == 'overview') {?>active<?php } ?>"><a href="/petroleum/">Overview</a></li>
<li class="dropdown-data <?php if ( $locale == 'data') {?>active<?php } ?>"><a href="/petroleum/data.php" class="dropbtn">Data<i class="arrow-down"></i></a>
<div class="dropdown-data-content dropdown-content">
    <ul>
        <li><a href="/petroleum/data.cfm#summary">Summary</a></li>
                <li><a href="/petroleum/data.cfm#prices">Prices</a></li>
                <li><a href="/petroleum/data.cfm#crude">Crude reserves and production</a></li>
                <li><a href="/petroleum/data.cfm#refining">Refining and processing</a></li>
                <li><a href="/petroleum/data.cfm#imports">Imports/exports &amp; movements</a></li>
                <li><a href="/petroleum/data.cfm#stocks" target="_parent">Stocks</a></li>
                <li><a href="/petroleum/data.cfm#consumption">Consumption/sales</a></li>
                <li><a href="/petroleum/data.cfm" class="footer">All petroleum &amp; other liquids data reports</a></li>
    </ul>
</div>
</li>
<li class="dropdown-analysis-projections <?php if ( $locale ==  'ap') {?>active<?php } ?>"><a href="/petroleum/reports.cfm" class="dropbtn">Analysis & Projections<i class="arrow-down"></i></a>
<div class="dropdown-analysis-projections-content dropdown-content">
<div class="l-row">
<div class="l-two-third-column"><h4>Major Topics</h4></div>
<div class="l-one-third-column"><h4>Browse by Tag</h4></div>
</div>
<div class="l-row">
<ul class="l-two-third-column">
<?php
if(file_exists($_SERVER['DOCUMENT_ROOT']."/global/includes/sub-navigation-analysis-projection.inc")) {
include($_SERVER['DOCUMENT_ROOT']."/global/includes/sub-navigation-analysis-projection.inc");
} else {
include('global/includes/sub-navigation-analysis-projection.inc');
}
?>
    </ul>
<ul class="l-one-third-column">
        <li><a href="/petroleum/browsebytag.cfm">Alphabetical</a></li>
                <li><a href="/petroleum/browsebytag.cfm?frequency">Frequency</a></li>
                <li><a href="/petroleum/browsebytag.cfm?tagcloud">Tag Cloud</a></li>
    </ul>
</div>
</div>
</li>
    </ul>
</div>
<div class="right">
<span class="align-right"><a href="<?php echo "$glossary_path"?>?id=petroleum">Glossary</a> <a href="<?php echo "$faqs_path"?>#crudeoil">FAQS</a></span>
</div>
</div>
</div>
</div>
