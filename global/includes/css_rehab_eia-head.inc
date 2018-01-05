<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Language" content="en-us" />

<link href='<?php print HTTP; ?>global/styles/eia-styles.min.css' type='text/css' media='screen' />


<script src='<?php print HTTP; ?>global/vendor/jquery.min.js' type="text/javascript"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" type="text/javascript"></script>


<?php
$glossary_path = '<?php print HTTP; ?>/tools/glossary/';
$faqs_path = '<?php print HTTP; ?>/tools/faqs/';
?>
<?php
if(isset($pageTitle) && $pageTitle) {
print "<title>" . $pageTitle . "</title>"; print PHP_EOL;
}
?>
