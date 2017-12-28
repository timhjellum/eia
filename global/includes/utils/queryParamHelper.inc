<?phpfunction buildFilterIndices($base32Str)
{
$binaryNum = array_map('intval', str_split(base32toBin($base32Str)));
$return = [];
foreach ($binaryNum as $k => $v) {
if ($v === 1) {
$return[] = $k;
}
}
return $return;
}
function base32toBin($base32str)
{
$return = '';
foreach (str_split($base32str) as $v) {
$return .= str_pad(base_convert($v, 32, 2), 5, 0, STR_PAD_LEFT);
}
return $return;
}