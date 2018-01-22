<?php $subjectids = "180"; ?><?php $sectionname = "Petroleum & Other Liquids"; ?>
<div class="l-row header">
<div class="l-full-width=header">
<div class="title-banner bg-petroleum">
<h1><?php echo "$sectionname"?></h1>
</div>
<div class="subnav">
<div class="left">
<ul class="left-nav">
<li <?php if ( $locale == 'overview') {?>class="active"<?php  } // end if ?>>        <li><a href="/petroleum/">Overview</a></li>
<li class="dropdown-data <?php if ( $locale == 'data') {?>active<?php  } // end if ?>">        <li><a href="/petroleum/data.php" class="dropbtn">Data<i class="arrow-down"></i></a>
<div class="dropdown-data-content dropdown-content">
    <ul>
        <li><a href="/petroleum/data.cfm#summary">Summary</a></li>
                <li><a href="/petroleum/data.cfm#prices">Prices</a></li>
                <li><a href="/petroleum/data.cfm#crude">Crude reserves and production</a></li>
                <li><a href="/petroleum/data.cfm#refining">Refining and processing</a></li>
                <li><a href="/petroleum/data.cfm#imports">Imports/exports & movements</a></li>
                <li><a href="/petroleum/data.cfm#stocks" target="_parent">Stocks</a></li>
                <li><a href="/petroleum/data.cfm#consumption">Consumption/sales</a></li>
                <li><a href="/petroleum/data.cfm">All petroleum & other liquids data reports</a></li>
    </ul>
</div>
</li>
<li class="dropdown-analysis-projections <?php if ( $locale == 'ap') {?>active<?php  } // end if ?>">        <li><a href="/petroleum/reports.cfm" class="dropbtn">Analysis & Projections<i class="arrow-down"></i></a>
<div class="dropdown-analysis-projections-content dropdown-content">
<div class="l-row">
<div class="l-two-third-column"><h4>Major Topics</h2></div>
<div class="l-one-third-column"><h4>Browse by Tag</h2></div>
</div>
<div class="l-row">
<ul class="l-two-third-column">
<?php include('global/includes/menu_ap.inc'); ?>
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
<span class="align-right">        <li><a href="<?php echo "$glossary_path"?>?id=petroleum">Glossary</a>         <li><a href="<?php echo "$faqs_path"?>#crudeoil">FAQS</a></span>
</div>
</div>
</div>
</div>
