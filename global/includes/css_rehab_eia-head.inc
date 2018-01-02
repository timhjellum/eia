<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Language" content="en-us" />
<meta name="robots" content="all" />
<meta name="agency" content="EIA - Energy Information Administration" />
<meta name="subject" content="official energy statistics, data, analysis and forecasting" />
<meta name="description" content="Energy Information Administration - EIA - Official Energy Statistics from the U.S. Government" />


<link href='<?php print HTTP; ?>global/styles/eia-styles.css' rel='stylesheet' type='text/css'>
<link rel="shortcut icon" href="<?php print HTTP; ?>favicon.ico" />
<link rel="icon" href="<?php print HTTP; ?>favicon.ico" type="image/x-icon">
<link rel="shortcut icon" type="image/vnd.microsoft.icon" href="<?php print HTTP; ?>favicon.ico" />
<?php
$glossary_path = '<?php print HTTP; ?>/tools/glossary/';
$faqs_path = '<?php print HTTP; ?>/tools/faqs/';
?>
<?php
if(isset($pageTitle) && $pageTitle) {
print "<title>" . $pageTitle . "</title>"; print PHP_EOL;
}
?>
