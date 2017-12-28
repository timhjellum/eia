<?phperror_reporting(E_ALL);
set_time_limit(0);
date_default_timezone_set('Europe/London');
?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>PHPExcel Reading WorkBook Data Example #01</title>
</head>
<body>
<h1>PHPExcel Reading WorkBook Data Example #01</h1>
<h2>Read the WorkBook Properties</h2>
<?php
/** Include path **/
set_include_path(get_include_path() . PATH_SEPARATOR . '../../../Classes/');
/** PHPExcel_IOFactory */
include 'PHPExcel/IOFactory.php';
$inputFileType = 'Excel5';
$inputFileName = './sampleData/example1.xls';
/**  Create a new Reader of the type defined in $inputFileType  **/
$objReader = PHPExcel_IOFactory::createReader($inputFileType);
/**  Load $inputFileName to a PHPExcel Object  **/
$objPHPExcel = $objReader->load($inputFileName);
echo '<hr />';
/**  Read the document's creator property  **/
$creator = $objPHPExcel->getProperties()->getCreator();
echo '<strong>Document Creator: </strong>',$creator,'<br />';
/**  Read the Date when the workbook was created (as a PHP timestamp value)  **/
$creationDatestamp = $objPHPExcel->getProperties()->getCreated();
/**  Format the date and time using the standard PHP date() function  **/
$creationDate = date('l, d<\s\up>S</\s\up> F Y',$creationDatestamp);
$creationTime = date('g:i A',$creationDatestamp);
echo '<strong>Created On: </strong>',$creationDate,' at ',$creationTime,'<br />';
/**  Read the name of the last person to modify this workbook  **/
$modifiedBy = $objPHPExcel->getProperties()->getLastModifiedBy();
echo '<strong>Last Modified By: </strong>',$modifiedBy,'<br />';
/**  Read the Date when the workbook was last modified (as a PHP timestamp value)  **/
$modifiedDatestamp = $objPHPExcel->getProperties()->getModified();
/**  Format the date and time using the standard PHP date() function  **/
$modifiedDate = date('l, d<\s\up>S</\s\up> F Y',$modifiedDatestamp);
$modifiedTime = date('g:i A',$modifiedDatestamp);
echo '<strong>Last Modified On: </strong>',$modifiedDate,' at ',$modifiedTime,'<br />';
/**  Read the workbook title property  **/
$workbookTitle = $objPHPExcel->getProperties()->getTitle();
echo '<strong>Title: </strong>',$workbookTitle,'<br />';
/**  Read the workbook description property  **/
$description = $objPHPExcel->getProperties()->getDescription();
echo '<strong>Description: </strong>',$description,'<br />';
/**  Read the workbook subject property  **/
$subject = $objPHPExcel->getProperties()->getSubject();
echo '<strong>Subject: </strong>',$subject,'<br />';
/**  Read the workbook keywords property  **/
$keywords = $objPHPExcel->getProperties()->getKeywords();
echo '<strong>Keywords: </strong>',$keywords,'<br />';
/**  Read the workbook category property  **/
$category = $objPHPExcel->getProperties()->getCategory();
echo '<strong>Category: </strong>',$category,'<br />';
/**  Read the workbook company property  **/
$company = $objPHPExcel->getProperties()->getCompany();
echo '<strong>Company: </strong>',$company,'<br />';
/**  Read the workbook manager property  **/
$manager = $objPHPExcel->getProperties()->getManager();
echo '<strong>Manager: </strong>',$manager,'<br />';
?>
<body>
</html>
