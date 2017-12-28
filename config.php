<?php

$config['root_path']=__DIR__;
define("ROOT", __DIR__ ."/");
define("HTTP", ($_SERVER["SERVER_NAME"] == "localhost")
   ? "http://localhost/"
   : "https://www.eia.gov/css_rehab/archive/"
);

?>