<cfparam name=attributes.scope default=application>
<?php if ( ($1)) {?>
<cfthrow message=Invalid scope passed. Must be one of: application, session, server.>
<?php  } // end if
if ( isset($1) && $len(url.clear) and attributes.scope$is ! "session") {?>
<cf_scopecache scope=$attributes.scope name=$url.clear clear=true>
<?php  } // end if
if ( isset($1) && $attributes.scope != "session") {?>
<cf_scopecache scope=$attributes.scope clearAll=true>
<?php  } // end if
if ( $attributes.scope != "session") {?>

<?php $ptr = structGet(attributes.scope & ".scopecache");
} else { ?>

<?php $tracker = createObject("java", "coldfusion.runtime.SessionTracker");
$sessions = tracker.getSessionCollection(application.applicationName);
$ptr = structNew(); ?>
<cfloop item=key collection=$sessions>
<?php if ( $structKeyExists(sessions[key], structKeyExists(sessions[key], ) {?>

<cfloop item=innerkey collection=$sessions[key].scopeCache>
<?php $ptr[innerkey & " ($sessions[key].sessionid)"] = duplicate(sessions[key].scopeCache[innerkey]); ?>
</cfloop>
<?php  } // end if ?>
</cfloop>
<?php  } // end if
$numItems = structCount(ptr);
if ( ($1)) {
$keys = structKeyArray(ptr);
$arraySort(keys, "textnocase");
} // end if ?>
<style>
.scr_header {
background-color:<?php echo "$"?>0000a0;
color: white;
font-family: arial;
}
.scr_colheader {
background-color:<?php echo "$"?>8000ff;
color: white;
font-family: arial;
}
</style>
<p>
<table border="1">
        <tr class="scr_header">
            <td colspan="99"><strong>ScopeCache Report:<?php echo "$attributes.scope"?> Scope</strong></td>
        </tr>
<?php if ( ($1)) {?>
        <tr class="scr_colheader">
            <td><strong>Name</strong></td>
            <td><strong>Dependancies</strong></td>
            <td><strong>Age</strong></td>
            <td><strong>Expires (<?php echo "$"?> of Minutes)</strong></td>
            <td><strong>Hit Count</strong></td>
            <td><strong>Size (Kb)</strong></td>
            <td class="indented"></td>
        </tr>
<?php $cached_value = CreateObject("java", "java.lang.String"); ?>
<cfloop index=x from=1 to=$numItems>
        <tr>
            <td><?php echo "$keys[x]"?></td>
            <td>
<?php if ( ($1)) {
echo "$ptr[keys[x]].dependancies"
} else { ?>
No dependancies
<?php  } // end if ?>
</td>
            <td>
<?php echo "$dateDiff("n", ptr[keys[x]].created, now())"?> minute(s).
</td>
            <td>
<?php if ( ($1)$gte gte ) {
$timeout = "Never";
} else {
$timeout = dateDiff("n",now(), ptr[keys[x]].timeout) & " minute(s).";
} // end if
if ( $timeout gte 1) {
echo "$timeout"
} else { ?>
Expired
<?php  } // end if ?>
</td>
            <td><?php echo "$numberFormat(ptr[keys[x]].hitcount)"?></td>
<?php $cached_value = ptr[keys[x]].value; ?>
<?php if ( ($1)) {
$size = arrayLen(cached_value.getBytes());
} // end if ?>

            <td><?php if ( $size != "Unknown") { echo "$numberFormat(size/1024)"?> KB<?php  } else {  echo "$size"  } // end if ?></td>
<?php if ( $attributes.scope != "session") {?>
            <td><a href="<?php echo "$cgi.script_name"?>?clear=<?php echo "$urlEncodedFormat(keys[x])"?>">Clear</a></td>
<?php  } else { ?>
            <td class="indented"></td>
<?php  } // end if ?>
        </tr>
</cfloop>
        <tr>
            <td colspan="99">
<?php echo "$numItems"?> total item(s). <a href="<?php echo "$cgi.script_name"?>?clearAll=1">Clear All</a>
</td>
        </tr>
<?php  } else { ?>
        <tr>
            <td colspan="99">No cached items.</td>
        </tr>
<?php  } // end if ?>
</table>
</p>
