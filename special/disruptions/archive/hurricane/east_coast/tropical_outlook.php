<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<?php $locale = 'tropical'; ?>
<head>
<title>EIA - Gulf of Mexico Tropical Outlook</title>
<?php include ('global/includes/eia_head_info.inc') ; ?>
<?php  if(!isset($no_titling)) include "global/includes/titling.inc"; ?>
</head>
<body>
<?php /* Start of Outer Wrapper */ ?>
<div id="outerX">
  <?php /* EIA Header */ ?>
  <?php include ('global/includes/eia_header.inc') ; ?>
      <?php /* Navigation Menu */ ?>
      <?php include ('special/disruptions/includes/subnav_hurricane_ec.inc') ; ?>
      <?php /* Page/Body Content */ ?>
      <div class="pagecontent mr_temp2">
        <?php /* Start of Main Column */ ?>
    
    <div class="main_col">
    
    <div id="noaa_feed">
               <div style="margin-left:10px;">
                 <h3 xmlns:wfw="http://wellformedweb.org/CommentAPI/">National Hurricane Center Graphical Tropical Weather Outlooks</h3>
                 <p>National Hurricane Center Graphical Tropical Weather Outlooks</p>
                            
							<?php $rss = simplexml_load_file('http://www.nhc.noaa.gov/gtwo.xml');
							echo "<ul>";
		foreach ($rss->channel->item as $item) {
//print_r($item); die();
 	  		echo '<li><a title="' . substr($item->pubDate,0,10) . '" href="'. $item->link .'">' . $item->title . "</a>";
   			echo "<p>" . $item->description . "</p>";
} 
			echo "</ul>"; ?></div></div>
      <?php /* End of Main Column */ ?>
          <div class="clear">&nbsp;</div>
          <?php /* Feature Example */ ?><?php /* Feature Example */ ?>
        </div>
        <div class="side_col right">
          <?php /* Start of Side Column */ ?>
          <?php include ('special/disruptions/includes/side_hurricane.inc') ; ?>
          <?php /* End of Side Column */ ?>
        </div>
      </div>

<?php /*/ Page/Body Content */ ?>
<?php include ('global/includes/eia_footer.inc') ; ?>
</div><?php /*/ Outer Wrapper */ ?>
</body>
</html>