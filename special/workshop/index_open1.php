<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<?php include ('global/includes/eia_head_info.inc') ; ?>

  <!-- Start Unique Header -->

  <!-- End Unique Header -->
  <?php /* Variables */ ?>
  <?php $form['name'] = isset($_REQUEST['name']) ? htmlspecialchars($_REQUEST['name']) : ''; ?>
  <?php $form['email'] = isset($_REQUEST['email']) ? htmlspecialchars($_REQUEST['email']) : ''; ?>
  <?php $form['q7_comment'] = isset($_REQUEST['q7_comment']) ? htmlspecialchars($_REQUEST['q7_comment']) : ''; ?>
  

  <?php
    $formSubmitted = $_REQUEST["submit1"] ?? false;
    $temail = 'ifeedback@eia.gov';
    $remote_add = $_SERVER['REMOTE_ADDR'];
    $ref_page ='http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
    $recpName = 'EIA';
    $woffice = 'EIA';
    $ccid = uniqid();
  ?>
  <?php /* Form Processor */ ?>
  <?php if ( $formSubmitted ) {?>
    <?php /* DB Update */
    //hsh_sql: insert
    //associated with query name comment
    $bindVariables = array();

    $Feedback = new Feedback();
    $Feedback->store(["user_comment"    => $form['q7_comment'],
                      "user_name"       => $form['name'],
                      "user_email"      => $form['email'],
                      "remote_add" => $remote_add,
                      "ref_page"   => $ref_page,
                      "woffice"    => $woffice,
                      "ccid"       => $ccid,
                      "email_sent" => $temail ] );
    ?>
    <?php /*/ DB Update */ ?>
    <?php /* Mailer */ ?>
    <?php
    $Message_Body = str_replace(chr(10), "<br>", $form['q7_comment']);
    $from = "InfoCtr@eia.gov";
    $to = $temail;
    $subject = "EIA web customer feedback from: " . $form['name'] . ", section: " . $woffice;

    $body = "";
    $body .= $recpName . "<br><br>";

    $body .= $Message_Body;
    $body .= "  <br><br>
	          --------------------<br>
	          Customer Name (optional): " . $form['name'] . "<br>
	          Customer Email (optional): " . $form["email"] . "<br><br>
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
    ?>
    <?php /*/ Mailer */ ?>
  <?php  } // end if ?>
  <?php /*/ Form Processor */ ?>
<?php  if(!isset($no_titling)) include "global/includes/titling.inc"; ?></head>

<body>
  <div id="outerX"><?php /* Outer Wrapper */ ?>
  <?php include ('global/includes/eia_header.inc') ; ?>
  <?php include ('global/includes/header_contact.inc') ; ?>
<?php /* Page/Body Content */ ?>
    <div class="pagecontent mr_temp2">
    <?php /*---------------------------------------------*/ ?>
        <h1>Feedback</h1>
        <?php if( !$formSubmitted ) { ?>
          <form name="commenter" id="commenter" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
            <table width="515" align="left" cellpadding="0" cellspacing="0">
              <tr>
                <?php /*<td style="padding-left:15px" bgcolor="##EFEFEF"  class="CategoryTitle"*/ ?>
                <td style="padding-left:15px"  class="replytxt">
                  <h2>Provide comments, suggestions, requests, kudos, and gripes.</h2>
                  <?php /*br /><b>Your Comment or Question: </b> <br /*/ ?>
                  <TEXTAREA style="width:480px;min-height:150px;height:150px;" name="q7_comment" required="required"></TEXTAREA>
                </td>
              </tr>
              <tr>
                <td class="replytxt"><b>Name</b><br /><input type="text" name="name" required="required" size="38" style="margin-top:-2px"></td>
                <?php /* <td></td> */ ?>
              </tr>
              <tr>
                <td class="replytxt"><b>Email</b><br /><input type="email" ID="email" name="email" required="required" size="38" message = "Email required" style="margin-top:-2px"></td>
              </tr>
              <?php /*/table */ ?>
              <tr>
                <td>
                  <p style="padding-left:16px;padding-bottom:16px;">
                    <input id="submit1" type="submit" value="Submit" name="submit1">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input id="reset1" type="reset" value="Clear" name="reset1"></p>
                </td>
              </tr>
            </table>
            <?php /* determine which person gets email based on directory name */ ?>
            <?php
            if (isset($_SERVER['HTTP_REFERER'])) {
              $temail   = 'ifeedback@eia.gov';
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
            </form>
          <br><br><br>
        <?php } else { ?>
        <?php /* Thank you response */ ?>
          <table width="460" align="left" cellpadding="0" cellspacing="0" >
            <tr>
              <td height="92"><p class="replytxt" style="padding:16px;">
                  <b>Thanks for your feedback</b> -- we appreciate your time. <br /><br />

                  Please contact us anytime for assistance or comments.<br /><br /><br />
                  <SUB><?php echo date("m/d/Y",time()); ?> &ndash; <?php echo date("g:m:s A",time()); ?> &ndash; feedback sent...</SUB><br>
                  <br>
                </p></td>
            </tr>
          </table>
        <?php } ?>
          <?php /* Main Column */ ?>
      </div>
      <div class="side_col right">
        <?php /* Side Column */ ?>


      <span class="grey_side blue_top">
        <h4>People Are Asking</h4><br />
        <p>
          <a href="/tools/faqs/faq.cfm?id=1&amp;t=10">What's up with gasoline prices?</a>
        </p>
        <p>
          <a href="/tools/faqs/faq.cfm?id=3&amp;t=6">Why don't fuel prices change as quickly as crude oil prices?</a><br />
        </p>
        <p>
          <a href="/tools/faqs/faq.cfm?id=21&t=10 ">Can I tell where the gasoline at my local station comes from? </a><br />
        </p>
        <p>
          <a href="/tools/faqs/faq.cfm?id=22&t=10 ">What do I pay for in a gallon of regular gasoline? </a><br />
        </p>
        <p>
          <a href="/tools/faqs/faq.cfm?id=2&amp;t=9">How do I calculate/find diesel fuel surcharges?</a>
        </p>
      </span>

       <span class="grey_side green_top">
         <h4>Learn About Energy</h4><br />
         <p>
           <a href="/energyexplained/index.cfm">Energy Explained</a>
         </p>
         <p>
           <a href="/kids">Energy Kids</a>
         </p>
         <p>
           <a href="/glossary/index.cfm">Glossary</a>
         </p>
      </span>

      <span class="grey_side blue_top">
         <h4>Email Updates</h4><br />
         <p><a href="/listserv_signup.html">Sign up for email updates</a></p>
      </span>

        <?php /* Side Column */ ?>
      </div>

    </div>

    <?php /*/ Page/Body Content */ ?>
    <?php include("global/includes/eia_footer.inc"); ?>
  </div>
  <?php /*/ Outer Wrapper */ ?>
</body>
</html>
