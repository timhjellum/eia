<?phpinclude 'global/php_libraries/PHPExcel-1.8/Classes/PHPExcel/IOFactory.php';
function readSpreadsheet($src, $sheet, $rows, $columns) {
$isRowRange = strpos($rows, '-') ? true : false;
$tmp_v1 = explode('-', $rows);
$startRow = $isRowRange ? ( isset($tmp_v1[0]) ? $tmp_v1[0] : $rows ) : $rows;
$endRow = $isRowRange   ? ( isset($tmp_v1[1]) ? $tmp_v1[1] : $rows ) : $rows;
$isColumnRange = strpos($columns, '-') ? true : false;
$tmp_v1 = explode('-', $columns);
$startColumn = $isColumnRange ? ( isset($tmp_v1[0]) ? $tmp_v1[0] : $columns ) : $columns;
$endColumn =   $isColumnRange ? ( isset($tmp_v1[1]) ? $tmp_v1[1] : $columns ) : $columns;
//print "rows:$isRowRange $startRow $endRow >> columns: $isColumnRange $startColumn $endColumn";
try {
$inputFileType = PHPExcel_IOFactory::identify($src);
$objReader = PHPExcel_IOFactory::createReader($inputFileType);
$objPHPExcel = $objReader->load($src);
}
catch(Exception $e) {
die('Error loading file "' . $src . '" : '.$e->getMessage());
}
$ret = array();
$sheet = $objPHPExcel->getSheet($sheet);
for($row = $startRow; $row <= $endRow; $row++) {
$rowData = array();
$i = 1;
for($col = $startColumn; $col <= $endColumn; $col++) {
$rowData['col_' . $i] = $sheet->getCell(PHPExcel_Cell::stringFromColumnIndex($col-1). $row)->getValue();
$i++;
}
//print_r($rowData);
if($isRowRange) {
array_push($ret, $rowData);
}
else {
$ret[0] = $rowData;
}
}
return $ret;
}
?>