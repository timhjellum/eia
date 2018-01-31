<?php
require_once 'global/includes/utils/utils.inc';
require_once 'global/includes/utils/Mailer.inc';

$L2Title = "electricity";
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<?php include ('global/includes/eia_head_info.inc') ; ?>
  
  <!-- Start Unique Header -->

  <!-- End Unique Header -->
  <?php /* Variables */ ?>
  <?php $form['name'] = isset($_REQUEST['name']) ? htmlspecialchars($_REQUEST['name']) : ''; ?>
  <?php $form['title'] = isset($_REQUEST['title']) ? htmlspecialchars($_REQUEST['title']) : ''; ?>
  <?php $form['organization'] = isset($_REQUEST['organization']) ? htmlspecialchars($_REQUEST['organization']) : ''; ?>
  <?php $form['phone'] = isset($_REQUEST['phone']) ? htmlspecialchars($_REQUEST['phone']) : ''; ?>
  <?php $form['email'] = isset($_REQUEST['email']) ? htmlspecialchars($_REQUEST['email']) : ''; ?>
  
  

  <?php
    
    $formSubmitted = $_REQUEST["submit"] ?? false;
    $temail = 'dain.roose-snyder@eia.gov';
    $remote_add = $_SERVER['REMOTE_ADDR'];
    $ref_page ='http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    $recpName = 'EIA';
    $woffice = 'EIA';
    $ccid = uniqid();
  ?>
  <?php /* Form Processor */ ?>
      <?php /*/ DB Update */ ?>
    <?php /* Mailer */ ?>
    <?php



if($formSubmitted) {
	$Message_Body = str_replace(chr(10), "<br>", $form['q7_comment']);
    $from = "InfoCtr@eia.gov";
    $to = $temail;
    $subject = "Thank you for registering: " . $form['name'] . ", section: " . $woffice;

    $body = "";
    $body .= $recpName . "<br><br>";

    $body .= $Message_Body;
    $body .= "  <br><br>
	          --------------------<br>
	          Customer Name : " . $form['name'] . "<br>
			  Customer Title : " . $form['title'] . " <br> 
			  Customer Organization : " . $form['organization'] . " <br> 
			  Customer Phone : " . $form['phone'] . " <br> 
	          Customer Email : " . $form["email"] . "<br><br>
	          Customer's IP location: " . $remote_add . "<br>

	          This feedback comment came from: <a href=\"" . $ref_page . "\">" . $ref_page . "</a> page
	          <br>
	          ";

    $mailer_arr = array(
      $to => $to
    );

    $mailer = new Mailer();
    $mailer->Form = $from;
    $mailer->Subject = $subject;
    foreach($mailer_arr as $k0=>$v0) {
      $mailer->addAddress($k0, $v0);
    }
    $mailer->Body = $body;

    $mailer->send();

	
	header("location:./confirm.php");
	exit;
}
    ?>
    <?php /*/ Mailer */ ?>
  <?php   // end if ?>
  <?php /*/ Form Processor */ ?>
<?php  if(!isset($no_titling)) include "global/includes/titling.inc"; ?></head>

<body>
  <div id="outerX"><?php /* Outer Wrapper */ ?>
  <?php include ('global/includes/eia_header.inc') ; ?>
  <?php include ('electricity/includes/subnav_electricity.inc') ; ?>
<?php /* Page/Body Content */ ?>
          <!--- Page/Body Content --->
      <div class="pagecontent mr_temp4">
        <div class="main_col">

        
        <h1>Assessing the Economic Value of New Utility-Scale Renewable Generation Projects Using Levelized Cost of Electricity and Levelized Avoided Cost of Electricity </h1>
          
 <p>This workshop will examine the  various uses of the concept of <a href="/forecasts/aeo/electricity_generation.cfm">levelized  cost of electricity</a> (LCOE), its shortcomings, and potential alternatives to  provide a more representative measure of the economic value for power  generation projects.&nbsp; Experts from the power industry, policymakers, and  energy analysis communities will present differing perspectives of the use of  LCOE analysis and the need for better analytic tools for an increasingly  complex grid environment.&nbsp; In particular, EIA will present and discuss the  concept of levelized avoided cost of energy (LACE) as a proposed solution to  many of the problems with conventional LCOE analysis.</p>
 <p>EIA's draft paper on  <a href="pdf/lace-lcoe_070213.pdf">Levelized Cost and Levelized Avoided Cost of Electricity</a>. </p>
 <p>We welcome your participation. Please register below if you would like to attend, either in person or online.</p>
 <table>
        <col width = "280px" />
        <col width = "20px" />
         <col width = "100px" />
<tr>
            <td colspan="4" class="no-border" style="line-height:1.6em">
           
 <h3>Workshop</h3>
 <p>Thursday, July 25, 1:00-4:00 PM EDT</p>
 
  <ul>
  <li><b>In-person</b><br />
      U.S. Department of Energy<br /> 1000 Independence Avenue, SW<br /> Room 2E-069 <br />Washington, DC 20585  <br />
 <em>You must have a valid photo ID and be a U.S. citizen.</em>
 </li><br />
 <li><b>Online*</b><br />
 
<em>*Instructions for online live access will be sent the day prior to the workshop at the email address registered.</em>
  </li>
  </ul>

<br /><br /><br />
<b>Neither of these options work for you?</b>
  <ul>
 <li>Provide feedback to <a href="mailto:christopher.namovicz@eia.gov ">christopher.namovicz@eia.gov </a> by July 31, 2013</li>
 <!---li>Contact us at <a href="mailto:ngl@eia.gov">ngl@eia.gov</a> to set up a time to speak with us</li--->
 </ul>        

<b>Logistical questions? </b> 
<ul>
<li>Contact <a href="mailto:gwendolyn.bredehoeft@eia.gov">gwendolyn.bredehoeft@eia.gov</a>
</li>
</ul>
</p>
</td>
<td>&nbsp; </td>
<?php /*---------------------------------------------*/ ?>
        <td><div  style="width:310px" class="white_box">
        <h2>Registration is required</h2>
        <form action="mail-wapp2.php" method="post" name="form1" target="_parent" >
		<?php if( !$formSubmitted ) { ?>
          
            
            <?php /*br /><b>Register yourself </b> <br /*/ ?>
            <form method="post" action="">

              	  <?php /*<td style="padding-left:15px" bgcolor="##EFEFEF"  class="CategoryTitle"*/ ?>
                <table class="basic" cellpadding="0" cellspacing="0" > 
<tr > 
<td style="color:#666"><b>Name:</b>  
   <br><input type="text" name="name" size="40" value="<?php echo $name;?>">
  
  <br><br>
  <b>Title:</b><br> <input type="text" name="title" size="40" value="<?php echo $title;?>">
  
  <br><br>
  <b>Organization:</b><br> <input type="text" size="40" name="organization" value="<?php echo $organization;?>">
  
  <br><br>
  <b>Phone:</b><br><input type="text" name="phone" validateat="onSubmit" validate="telephone" size="40" value="<?php echo $phone;?>">
  <br><br>
 <b>E-mail:</b><br> <input type="email" name="email" validateat="onSubmit" validate="Email" size="40" value="<?php echo $email;?>">
 <br /><br />
 <b>Attending:</b><br> <input name="attend" type="radio" size="40" value="<?php echo $in-person;?>">
 <br />
 <input name="attend" type="radio" size="40" value="<?php echo $online;?>">
 online*<br />
 
   <br><br>
  <tr>
  <td colspan="4"><input type="submit" name="submit" value="Submit" class="submit_btn">  
</form>
                   </td>    </td>            
            </tr></table></div>
            <?php /* determine which person gets email based on directory name */ ?>
            <?php
            if (isset($_SERVER['HTTP_REFERER'])) {
              $temail   = 'dain.roose-snyder@eia.gov';
              $recpName = 'EIA';

              $woffice = str_replace('/', '', $_SERVER['HTTP_REFERER']);
              switch ($woffice) {
                case 'biofuels':
                  $woffice = 'alternate';
                  break;

                case 'ipdbproject':
                  $woffice = 'intlstats';
                  break;

                case 'dnav':
                  $woffice = 'navigators';
                  break;
              }
            }
            ?>
            </form></table>
          <br><br></p></div>
       
        <?php } ?>
          <?php /* Main Column */ ?>
      </div></div>
      <div class="side_col right">
        <?php /* Side Column */ ?>


      

        <?php /* Side Column */ ?>
      </div>

    </div>

    <?php /*/ Page/Body Content */ ?>
    <?php include("global/includes/eia_footer.inc"); ?>
  </div>
  <?php /*/ Outer Wrapper */ ?>
</body>
</html>
