<cfcomponent 
	persistent="true"
	entityname="ReportSubject"
	table="ARCHIVES_REPORT_SUBJECT"
	schema="NEIC"
	accessors="true"
	displayname="Report Subject"
	extends="BaseEntity">
	
<!--- pk --->
<cfproperty 
	fieldtype="id" 
	name="IDReportSubject" 
	column="ID" 
	getter="true" 
	setter="false"
	ormtype="integer" 
	generator="sequence"
	params="{sequence='SEQ_ARCHIVES_REPORT_SUBJECT'}"/>

<cfproperty name="name" column="SUBJECT"/>
<cfproperty name="menu" column="MENU" />

<cfproperty 
	name="ReportArchives"
	singularname="ReportArchive" 
	fieldtype="many-to-many" 
	CFC="ReportArchive" 
	linkschema="NEIC"
	linktable="ARCHIVES_REPORT_SUBJECT_LINK" 
	FKColumn="fk_IDReportSubject" 
	inversejoincolumn="fk_IDReportArchive" />

<cfproperty 
	name="ReportTags"
	singularname="ReportTag" 
	fieldtype="many-to-many" 
	CFC="ReportTag"
    orderby="lower(tag)" 
	linkschema="NEIC"
	linktable="ARCHIVES_SUBJECT_TAG_LINK" 
	FKColumn="fk_IDReportSubject" 
	inversejoincolumn="fk_IDReportTag" />


<!--- init --->
<cffunction name="init" returntype="component" access="public" output="false"
	displayname="init" hint=""
	description="">
	
	<cfscript>
		if(!isPersisted()){
			variables.ReportArchives = arrayNew(1);
			variables.ReportTags = arrayNew(1);
		}	
	</cfscript>

	<cfreturn this />
</cffunction>



<!--- getRelatedReports --->
<cffunction name="getRelatedReports" returntype="any" access="public" output="false"
	displayname="Get Related Reports" hint="I return my related reports as a query"
	description="I return my related reports as a query">
	
	<cfset var reportIDS = 0 />
	<cfset var result = arrayNew(1) />
	<cfset var data = structNew() />
	
	<cfquery name="reportIDS">
		SELECT ID 
		FROM NEIC.ARCHIVES_REPORT_LU
		WHERE SID = <cfqueryparam cfsqltype="cf_sql_integer" value="#this.getID()#" />
		
	</cfquery>
	
	<cfloop query="reportIDS">
		
		<cfquery name="getReport">
			select title, version
			from NEIC.ARCHIVES_REPORT_LIST
			where id = <cfqueryparam cfsqltype="cf_sql_integer" value="#id#" />
		</cfquery>
		
		<cfset data.id = id />
		<cfset data.title = getReport.title />
		<cfset data.version = getReport.version />	
		
		<cfset arrayAppend(result, structCopy(data)) />
	</cfloop>
	
	<cfset result = arrayOfStructsSort(result, "title") />
	
	<cfreturn result />
</cffunction>



<!--- getAvaiableMenus --->
<cffunction name="getAvaiableMenus" returntype="any" access="public" output="false">
	
	<cfreturn "Fuel Sources,Topics,Other" />
</cffunction>



<!--- save --->
<cffunction name="save" returntype="boolean" access="public" output="false">
	
	<cfset entitySave(this) />
	<cfset ormFlush() />
	
	<cfreturn true/>
</cffunction>



<cfscript>
/**
* Sorts an array of structures based on a key in the structures.
*
* @param aofS      Array of structures.
* @param key      Key to sort by.
* @param sortOrder      Order to sort by, asc or desc.
* @param sortType      Text, textnocase, or numeric.
* @param delim      Delimiter used for temporary data storage. Must not exist in data. Defaults to a period.
* @return Returns a sorted array.
* @author Nathan Dintenfass (nathan@changemedia.com)
* @version 1, December 10, 2001
*/
function arrayOfStructsSort(aOfS,key){
        //by default we'll use an ascending sort
        var sortOrder = "asc";        
        //by default, we'll use a textnocase sort
        var sortType = "textnocase";
        //by default, use ascii character 30 as the delim
        var delim = ".";
        //make an array to hold the sort stuff
        var sortArray = arraynew(1);
        //make an array to return
        var returnArray = arraynew(1);
        //grab the number of elements in the array (used in the loops)
        var count = arrayLen(aOfS);
        //make a variable to use in the loop
        var ii = 1;
        //if there is a 3rd argument, set the sortOrder
        if(arraylen(arguments) GT 2)
            sortOrder = arguments[3];
        //if there is a 4th argument, set the sortType
        if(arraylen(arguments) GT 3)
            sortType = arguments[4];
        //if there is a 5th argument, set the delim
        if(arraylen(arguments) GT 4)
            delim = arguments[5];
        //loop over the array of structs, building the sortArray
        for(ii = 1; ii lte count; ii = ii + 1)
            sortArray[ii] = aOfS[ii][key] & delim & ii;
        //now sort the array
        arraySort(sortArray,sortType,sortOrder);
        //now build the return array
        for(ii = 1; ii lte count; ii = ii + 1)
            returnArray[ii] = aOfS[listLast(sortArray[ii],delim)];
        //return the array
        return returnArray;
}
</cfscript>



</cfcomponent>