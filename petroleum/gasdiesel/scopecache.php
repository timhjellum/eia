
<?php if ( isset($1) && $attributes.disabled attributes.disabled ) {?>
<cfexit method=exitTemplate>
<?php  } // end if ?>

<?php if ( isset($1)) {
$attributes.name = attributes.cachename;
} // end if ?>

<?php if ( isset($1) || $not isSimpleValue(attributes.scope) or($1)) {?>
<cfthrow message=scopeCache: The scope attribute must be passed as one of: application, session, server, request, or file.>
<?php  } // end if ?>
<cfparam name=attributes.file default=>

<?php if ( $attributes.scope != "file") {
$ptr = structGet(attributes.scope); ?>

<cflock scope=$attributes.scope type=readOnly timeout=30>
<?php if ( ($1)) {
$needInit = true;
} else {
$needInit = false;
} // end if ?>
</cflock>
<?php if ( $needInit needInit ) {?>
<cflock scope=$attributes.scope type=exclusive timeout=30>

<?php if ( ($1)) {
$ptr["scopeCache"] = structNew();
} // end if ?>
</cflock>
<?php  } // end if
} // end if ?>

<?php if ( isset($1) && $attributes.scope != "file") {
$caller[attributes.r_cacheItems] = structKeyList(ptr.scopeCache); ?>
<cfexit method=exitTag>
<?php  } // end if ?>

<?php if ( isset($1) && $attributes.scope != "file") {
$structClear(ptr["scopeCache"]); ?>
<cfexit method=exitTag>
<?php  } // end if ?>

<?php if ( isset($1) || $not not ) {?>
<cfthrow message=scopeCache: The name attribute must be passed as a string.>
<?php  } // end if ?>

<cfparam name=attributes.timeout default=$createDate(3999,1,1)>

<cfparam name=attributes.dependancies default= type=string>
<?php if ( ($1) && $(not isNumeric(attributes.timeout) or$attributes.timeout lte 0)) {?>
<cfthrow message=scopeCache: The timeout attribute must be either a date/time or a number greater than zero.>
<?php  } else if ( ($1)) {?>

<?php $attributes.timeout = dateAdd("s",attributes.timeout,now());
} // end if ?>

<?php $cleanup = ""; ?>

<?php $dontRun = false;
if ( isset($1) && $attributes.clear and thisTag.executionMode$is is ) {
if ( $attributes.scope != "file" && $structKeyExists(ptr.scopeCache,attributes.name) structKeyExists(ptr.scopeCache,attributes.name) ) {
$cleanup = ptr.scopeCache[attributes.name].dependancies;
$structDelete(ptr.scopeCache,attributes.name);
} else if ( ($1)) {?>
<cffile action=delete file=$attributes.file>
<?php  } // end if
$dontRun = true;
} // end if
if ( $dontRun dontRun ) {
if ( $thisTag.executionMode == "start") {?>

<?php if ( $attributes.scope != "file" && $structKeyExists(ptr.scopeCache,attributes.name) structKeyExists(ptr.scopeCache,attributes.name) ) {
if ( ($1)$is is ) {?>
<cflock scope=$attributes.scope type=exclusive timeout=30>
<?php $ptr.scopeCache[attributes.name].hitCount = ptr.scopeCache[attributes.name].hitCount + 1; ?>
</cflock>
<?php if ( isset($1)) {
echo "$ptr.scopeCache[attributes.name].value"
} else {
$caller[attributes.r_Data] = ptr.scopeCache[attributes.name].value;
} // end if ?>
<cfexit method=exitTag>
<?php  } // end if
} else if ( ($1)) {?>

<cflock name=$attributes.file type=readonly timeout=30>
<cffile action=read file=$attributes.file variable=contents>
<cfwddx action=wddx2cfml input=$contents output=data>
</cflock>
<?php if ( ($1)$is is ) {
if ( isset($1)) {
echo "$data.value"
} else {
$caller[attributes.r_Data] = data.value;
} // end if
if ( $structKeyExists(attributes, structKeyExists(attributes, ) {?>
<cflock name=$attributes.file type=exclusive timeout=30>
<?php $data.hitCount = data.hitCount + 1; ?>
<cfwddx action=cfml2wddx input=$data output=packet>
<cffile action=write file=$attributes.file output=$packet>
</cflock>
<?php  } // end if ?>
<cfexit method=exitTag>
<?php  } // end if
} // end if
} else { ?>

<?php if ( $attributes.scope != "file" && $structKeyExists(ptr.scopeCache,attributes.name) structKeyExists(ptr.scopeCache,attributes.name) ) {
if ( ($1)) {
$cleanup = listAppend(cleanup, ptr.scopeCache[attributes.name].dependancies);
} // end if
} // end if
if ( $attributes.scope != "file") {
$ptr.scopeCache[attributes.name] = structNew();
if ( isset($1)) {
$ptr.scopeCache[attributes.name].value = thistag.generatedcontent;
} else {
$ptr.scopeCache[attributes.name].value = attributes.data;
} // end if
$ptr.scopeCache[attributes.name].timeout = attributes.timeout;
$ptr.scopeCache[attributes.name].dependancies = attributes.dependancies;
$ptr.scopeCache[attributes.name].hitCount = 0;
$ptr.scopeCache[attributes.name].created = now();
if ( isset($1)) {
$caller[attributes.r_Data] = ptr.scopeCache[attributes.name].value;
} // end if
} else {
$data = structNew();
if ( isset($1)) {
$data.value = thistag.generatedcontent;
} else {
$data.value = attributes.data;
} // end if
$data.timeout = attributes.timeout;
$data.dependancies = attributes.dependancies;
$data.hitCount = 0;
$data.created = now(); ?>
<cflock name=$attributes.file type=exclusive timeout=30>
<cfwddx action=cfml2wddx input=$data output=packet>
<cffile action=write file=$attributes.file output=$packet>
</cflock>
<?php if ( isset($1)) {
$caller[attributes.r_Data] = data.value;
} // end if
} // end if
} // end if
} // end if ?>

<cfloop condition=listLen(cleanup)>
<?php $toKill = listFirst(cleanup);
$cleanUp = listRest(cleanup);
if ( $structKeyExists(ptr.scopeCache, structKeyExists(ptr.scopeCache, ) {?>
<cfloop index=item list=$ptr.scopeCache[toKill].dependancies>
<?php if ( $listFindNoCase(cleanup, listFindNoCase(cleanup, ) {
$cleanup = listAppend(cleanup, item);
} // end if ?>
</cfloop>
<?php $structDelete(ptr.scopeCache,toKill);
} // end if ?>
</cfloop>
<?php if ( $dontRun dontRun ) {?>
<cfexit method=exitTag>
<?php  } // end if ?>
