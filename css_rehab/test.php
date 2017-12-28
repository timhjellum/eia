<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
</head>

<body>
<?php

// current directory
echo getcwd() . "\n";

chdir('cvs');

// current directory
echo getcwd() . "\n";

?>
<?php include "global/includes/css_rehab_eia-header.inc" ?>
<img src="global/images/color_palettes/blue-to-green.jpg">
<img src="<?php print HTTP; ?>global/images/color_palettes/blue-to-green.jpg">
</body>
</html>
