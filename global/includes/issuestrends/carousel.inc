<div class="l-row header">
<div class="feature-section">
<div class="l-row header">
<div class="left">Current Issues &amp; Trends</div>
<div class="right"><a href="issuestrends/" class="more">See more</a>
<div class="slider-pager-location">
</div>
</div>
</div>
<script src='<?php print HTTP; ?>global/vendor/bxslider/dist/jquery.bxslider.js'></script>
<script src='<?php print HTTP; ?>global/scripts/slider-multi-cards.min.js'></script>
<script src='<?php print HTTP; ?>global/scripts/ellipsis.min.js'></script>
<div class="slider-multi-cards-container">
<ul class="bxslider">
<?php include"it_universal.inc";
for($j=0; $j<count($IssuesTrendsQuery); $j++) {
$row = $IssuesTrendsQuery[$j];
if(strtolower($row['active'])=="y") {
// If this Issue & Trend is linked to a Bookshelf report
if($row['bsrec'] == 1) {
// Use the concatenated list of tags associated with this report -->
$thetags = $row['reporttags'];
// Use the report fields from the table ARCHIVES_REPORT_LIST -->
$thetitle = $row['title'];
$thelink = $row['link_html'];
} else { // Otherwise, this is a custom Issue & Trend -->
// Use the tags saved with this custom Issue/Trend -->
$thetags = $row['tags'];
// Use the custom issue/trend fields from the table ISSUESTRENDS -->
$thetitle = $row['linktitle'];
$thelink = $row['linkurl'];
}
$thetagnames = $row['reporttagnames'];
?>
<li>
<a href="<?= $thelink ?>" class="thumbnail" style="background-image: url('<?= $row['imgurl'] ?>');">
</a>
<div class="slide-content">
<h3 class="ellipsis" data-truncate-lines="4" data-truncate-position="end">
<a href="<?= $thelink ?>">
<?= $thetitle ?>
</a>
</h3>
<p class="tags">
<?php include"it_displaytags.inc"; ?>
</p>
</div>
</li>
<?php } } ?>
</ul>
</div>
</div>
