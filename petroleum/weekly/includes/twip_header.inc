<?php$twip_page = isset($twip_page) ? $twip_page : '';
?>
<div class="l-row header report-details">
        <div class="l-split-wide">

<a href="/petroleum/reports.cfm">&lsaquo; See all Petroleum &amp; Other Liquids Reports</a>
                <h1>This Week in Petroleum</h1>

                <div class="release-dates">
                        <div class="date-container">
                                <div class="label"><?php include ('release_date.html') ; ?></div>
<div class="release-dates">
<div class="report-download-container">
                                <i class="ico download">Download</i><a href="includes/download.php" class="lightbox" data-fancybox-type="iframe">Download data</a>
                                <a href="includes/archive.php" data-fancybox-type="iframe" class="lightbox">Past Weeks in Petroleum</a>
                                <a href="includes/schedule.php" data-fancybox-type="iframe" class="lightbox">Release schedule</a></div>
<div class="report-download-container">
                                <?php if ( $twip_page == 'analysis') {?><a href="includes/analysis_print.php" data-fancybox-type="iframe" class="lightbox"><?php  } else { ?><a onClick="window.print();" style="cursor: pointer;"><?php  } // end if ?>Print</a>
                        </div>
                </div>
        </div>
</div>
<div class="l-split-column report-details">
<div class="twip_nav <?php if ( $twip_page == 'analysis') {?>active <?php  } // end if ?>analysis"><a href="index.php"><div>Analysis</div></a></div>
<div class="twip_nav <?php if ( $twip_page == 'crude') {?>active <?php  } // end if ?>crude"><a href="crude.php"><div>Crude Oil</div></a></div>
<div class="twip_nav <?php if ( $twip_page == 'gasoline') {?>active <?php  } // end if ?>gasoline"><a href="gasoline.php"><div>Gasoline</div></a></div>
<div class="twip_nav <?php if ( $twip_page == 'distillate') {?>active <?php  } // end if ?>distillate"><a href="distillate.php"><div>Distillate</div></a></div>
<div class="twip_nav <?php if ( $twip_page == 'propane') {?>active <?php  } // end if ?>propane"><a href="propane.php"><div>Propane</div></a></div>
</div>
</div>
<script>
$(document).ready(function() {
$(".mr_temp4 a").click(function(){if(this.hash){window.location.hash=this.hash}});
$(".lightbox").fancybox({
'width': 940,
'height': 500,
'hideOnOverlayClick': 'true'
});
});
