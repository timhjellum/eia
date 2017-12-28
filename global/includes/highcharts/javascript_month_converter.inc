<?php$$var_name = str_replace(", 1, " , ", 0, ", $$var_name);
$$var_name = str_replace(", 2, " , ", 1, ", $$var_name);
$$var_name = str_replace(", 3, " , ", 2, ", $$var_name);
$$var_name = str_replace(", 4, " , ", 3, ", $$var_name);
$$var_name = str_replace(", 5, " , ", 4, ", $$var_name);
$$var_name = str_replace(", 6, " , ", 5, ", $$var_name);
$$var_name = str_replace(", 7, " , ", 6, ", $$var_name);
$$var_name = str_replace(", 8, " , ", 7, ", $$var_name);
$$var_name = str_replace(", 9, " , ", 8, ", $$var_name);
$$var_name = str_replace(", 10, " , ", 9, ", $$var_name);
$$var_name = str_replace(", 11, " , ", 10, ", $$var_name);
$$var_name = str_replace(", 12, " , ", 11, ", $$var_name);
$$var_name = trim($$var_name);
//print "in js value for $var_name: " . $$var_name . "\n\n\n\n";
if($$var_name) {
if (substr($$var_name, -1) == ",") {
$$var_name = substr($$var_name, 0, -1);
} else {
print "comma not found.....";
print "after var_name: " . $var_name . "\n\n";
die();
}
}
//print "----------value for $var_name: " . $$var_name . "\n\n";
//die();
//$$var_name = rtrim($$var_name,", \t\n");
