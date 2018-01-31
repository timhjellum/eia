<?php $locale = 'pub';
$url['filter'] = isset($_REQUEST['filter']) ? $_REQUEST['filter'] : '';
?><?php /* To change the Tabs ... change the local to the appropriate value */ ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<?php include ('global/includes/eia_head_info.inc') ; ?>
<?php  if(!isset($no_titling)) include "global/includes/titling.inc"; ?></head>

<body>
<div id="outerX">
  <?php /* Outer Wrapper */ ?>
  <?php include ('global/includes/eia_header.inc') ; ?>
   
<?php include ('electricity/includes/subnav_electricity.inc') ; ?>
      <?php /* Page/Body Content */ ?>
      <div class="pagecontent mr_temp4">
        <div class="main_col">
        <h1>State portal and the electricity and coal browsers workshop</h1>

<h4>Thank you for registering!</h4>
<?php /*p>You will receive Webex / call information before meeting  at the email address you registered.</p*/ ?>
<br /><br /><br />
<p><a href="/special/workshop/">Return to information/registration page</a></p>
  </div>
  </div>
<?php /* END Page/Body Content */ ?>
<?php include ('global/includes/eia_footer.inc') ; ?>

</div>
<?php /*END Outer Wrapper */ ?>
</body>
</html>