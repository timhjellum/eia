<!-- diff -->


<?php
require($_SERVER['DOCUMENT_ROOT'].'/global/includes/utils/utils.inc';
require($_SERVER['DOCUMENT_ROOT'].'/global/includes/utils/Neic.inc';
$neic      = new NEIC();
$what = 'petroleum'; ?>
<?php include ('about/new/whatsnew_sitewide_noTIE.php') ; ?>
<?php
//hsh_sql:
//associated with query name tie_lookup
$bindVariables = array();
$neic->sql = "     Select *
from neic.today_in_energy
Where active = :active
AND tags like :tags
ORDER BY ID DESC ";
$bindVariables[":active"] = "yes";
$bindVariables[":tags"] = "%nuclear%";
//print $neic->sql;
//print_r($bindVariables);
$tie_lookup = $neic->get($bindVariables);
?>
<?php if (!empty($tie_lookup)) {?>
<?php $tietopic = 'petroleum'; ?>
<div class="content-container dark-top-border-container">
        <li><a href="/todayinenergy/"><img src="/global/images/sprites/tie_w_title.png"/></a>
<span class="white_box">
<div id="eiatie">
<?php include ('todayinenergy/outreach/file_scrub_tie_side_sm_top3.php') ; ?>
</div>
</li>
<?php  } // end if ?>
    </ul>
</div>
<div class="content-container light-top-border-container grey-background">
    <ul>
<li class="sub-header">Regular Weekly Releases</li>
<li class="date">Day of release changes on weeks with Federal holidays.</span>
        <li><a href="/petroleum/gasdiesel/">Gasoline and Diesel Fuel Update</a></li>
<li class="date">After 5:00 p.m. ET, Monday</span>
        <li><a href="/petroleum/supply/weekly/">Weekly Petroleum Status Report</a></li>
<li class="date"> 10:30 a.m. ET, Wednesday</li>
                <li><a href="/petroleum/heatingoilpropane/">Heating Oil and Propane Update</a></li>
<li class="date">After 1:00 p.m. ET, Wednesday</li>
(Oct - March only)</span>
        <li><a href="/oog/info/twip/twip.asp">This Week in Petroleum </a></li>
<li class="date">After 1:00 p.m. ET, Wednesday</li>
                <li><a href="http://www.eia.gov/todayinenergy/archive.cfm">Recent Articles &rsaquo;</a></li>
    </ul>
</div>
<div class="content-container light-top-border-container grey-background">
    <ul>
        <li class="header"><h2>Survey Forms, Changes & Announcements</h2></li>
                <li><a href="/survey/#petroleum">Petroleum survey forms &rsaquo;</a></li>
                <li><a href="/survey/notice/marketing2014.cfm">Federal Register Notice for Proposed Marketing survey changes &rsaquo;</a></li>
<li class="date">comment by August 22, 2014</li>
                <li><a href="/survey/notice/ngforms2015.cfm">Federal Register Notice for Proposed Upstream Oil and Natural Gas survey changes &rsaquo;</a></li>
<li class="date">comment by July 7, 2014</li>
<div class="content-container green-top-border-container grey-background">
    <ul>
        <li class="header"><h2>Petroleum Maps</li>
    </ul>
</div>        <li><a href="/pub/oil_gas/natural_gas/analysis_publications/maps/maps.htm"><img src="/petroleum/gasdiesel/images/paddmapb-st_lg.png" width="200"></a>
    <ul>
<li class="footer">        <li><a href="/maps#oilandgas">See more petroleum maps &rsaquo;</a></li>
    </ul>
</div>





<div class="content-container faq">
    <ul>
        <li class="header"><h2><a href="/tools/faqs/faq.cfm?id=33&t=6">How much oil does the United States consume per year?</a></li>
        <li class="sub-header"><a href="/tools/faqs/">See all petroleum FAQs</a></li>
    </ul>
</div>





<a href="/energyexplained/index.cfm?page=oil_home"><img src="/energyexplained/images/section-banners/oil.jpg"  alt="Energy Explained - Petroleum" width="240" /></a>
<?php include ('global/includes/kids_dates.inc') ; ?>
