<div class="l-row header report-details">
        <div class="l-full-width-column">
                <a href="/petroleum/reports.cfm">&lsaquo; See All Petroleum Reports</a>
<?php
if(strstr( $_SERVER['PHP_SELF'], 'archive'))
print "<a href=\"/petroleum/drilling/\">&lsaquo; See Current Issue</a>";
?>
                <h2><?php echo "$headtitle"?></h2>

                <div class="release-dates">
                        <div class="date-container">
                                <div class="label">Annual release:</div>
                                <div class="date"><?php echo "$release"?></div>
                        </div>
                        <div class="date-container">
                                <div class="label">Next release:</div>
                                <div class="date"><?php echo "$next"?></div>
                        </div>
                        <div class="report-download-container">
                                <i class="ico pdf">PDF</i><a href="pdf/wells.pdf">full report</a>
                                <a href="/petroleum/wells/includes/archive.php" data-fancybox-type="iframe" class="lightbox">Previous reports</a>
                                <a href="includes/download.php" class="lightbox" data-fancybox-type="iframe">Download data</a>
                                <a href="xls/appendix_b.xlsx" ><i class="ico xls">XLS</i>Appendix B</a>
                                <a href="xls/appendix_c.xlsx" ><i class="ico xls">XLS</i>Appendix C</a>
                        </div>
                </div>
        </div>
</div>
