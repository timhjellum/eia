<cfcomponent extends="BaseController">

<!--- init --->
<cffunction name="init" returntype="any" access="public" output="false"
	displayname="init" hint="I am the constructor."
	description="I am the constructor.">
	
	<cfargument name="fw" />
	
	<cfset super.init(argumentCollection = arguments) />
	
</cffunction>



<!--- buildCollection --->
<cffunction name="buildCollection" output="false" 
	hint="I build the collection">
	<cfargument name="rc" />
	
	<cfcollection action="list" name="local.collections" engine="solr">
	
	<!--- if the collection dosnt exist make it --->
	<cfif not listFindNoCase(valueList(collections.name), application.articleCollection)>
		
		<cfcollection 
			action="create" 
			collection="#application.articleCollection#" 
			engine="solr" 
			path="#application.articleCollection#">
	</cfif>
	
	<!--- nuke old data --->
	<cfindex collection="#application.articleCollection#" action="purge">
	
	<cfset var pubs = EntityLoad("ReportArchive") />
	<cfset var data = EntityToQuery( pubs )>

	<!--- add to collection --->
	<cfindex 
		collection="#application.articleCollection#" 
		action="update" 
		body="summaryDescription,TITLE" 
		custom1="contactName"
		custom2="reportNumber" 
		title="title" 
		key="IDReportArchive" 
		query="data">

	<cfset getFramework().redirect('search.home', 'all') />
	
</cffunction>





<!--- results --->
<cffunction name="results" output="false" 
	hint="I search for ReportArchives and display the search results page.">
	<cfargument name="rc" />

	<cfparam name="rc.searchString" default="" />
	<cfparam name="rc.DISPLAYARCHIVES" default="" />
	
	<cfset var theTickCount = GetTickCount() />
	
	<cfset var word = "" />
	<cfset var arrayOfWords = listToArray(rc.searchString, " ") />
	<cfset var arrayOfIgnoredWords = listToArray("and,an,a,at,by,it,is,of,the,this,that", ',')/>
	<cfset arrayOfWords = arrayDeleteArray(arrayOfWords, arrayOfIgnoredWords) />	

	<!--- search the phrase --->
	<cfset var phraseQuery = doSearch(rc.searchString, rc.DISPLAYARCHIVES) />
	
	<!--- add each word query to the phrase query --->
	<cfloop array="#arrayOfWords#" index="word">
		<cfset queryConcat(phraseQuery, doSearch(word, rc.DISPLAYARCHIVES)) />
	</cfloop>
	
	<!--- now dedup by id --->
	<cfset var finalResult = QueryDeDupe(phraseQuery,'id') />

	<cfset var tickEnd = GetTickCount()>
	<cfset theTickCount = tickEnd - theTickCount />
	
	<cfset rc.theTickCount = theTickCount />
	<cfset rc.searchResults = finalResult />
	
</cffunction>




<!--- doSearch --->
<cffunction name="doSearch" returntype="query" access="private" output="false"
	displayname="Do Search" hint="I perform a search on the db"
	description="I perform a search on the db">
	
	<cfargument name="searchString" default="" 
		hint="I am the data to search. I default to an empty string." />
	<cfargument name="DISPLAYARCHIVES" default="off" 
		hint="Should I display the archived items? I default to 'off'." />

	<cfset var theQuery = 0 />
	
	<cfquery name="theQuery">
		SELECT *
		FROM NEIC.ARCHIVES_REPORT_LIST
		WHERE TITLE LIKE 
			<cfqueryparam cfsqltype="cf_sql_varchar" value="%#arguments.searchString#%" />
		OR SUMMARY_DESCRIPT LIKE 
			<cfqueryparam cfsqltype="cf_sql_varchar" value="%#arguments.searchString#%" />
		
		<cfif arguments.displayArchives eq "on">
			AND VERSION <> 'archive'
			AND VERSION <> 'yes'
		</cfif>
		
		ORDER by TITLE asc
	</cfquery>
	
	<cfreturn theQuery />
</cffunction>




<cfscript>
/**
* Remove elements from one array which exist in another array.
*
* @param baseArray      Main array of values. (Required)
* @param deleteArray      Array of values to delete. (Required)
* @return Returns an array.
* @author Jason Rushton (jason@iworks.com)
* @version 1, April 11, 2008
*/
function arrayDeleteArray( baseArray, deleteArray ) {
    arguments.baseArray.removeAll(arguments.deleteArray);
    return arguments.baseArray;
}
</cfscript>



<cfscript>
/**
* Removes duplicate rows from a query based on a key column.
* Modded by Ray Camden to remove evaluate
*
* @param theQuery      The query to dedupe. (Required)
* @param keyColumn      Column name to check for duplicates. (Required)
* @return Returns a query.
* @author Matthew Fusfield (matt@fus.net)
* @version 1, December 19, 2008
*/
function QueryDeDupe(theQuery,keyColumn) {
    var checkList='';
    var newResult=QueryNew(theQuery.ColumnList);
    var keyvalue='';
    var q = 1;
    var x = "";
    
    // loop through each row of the source query
    for (;q LTE theQuery.RecordCount;q=q+1) {

        keyvalue = theQuery[keycolumn][q];
        // see if the primary key value has already been used
        if (NOT ListFind(checkList,keyvalue)) {
            
            /* this is not a duplicate, so add it to the list and copy
             the row to the destination query */
            checkList=ListAppend(checklist,keyvalue);
            QueryAddRow(NewResult);
            
            // copy all columns from source to destination for this row
            for (x=1;x LTE ListLen(theQuery.ColumnList);x=x+1) {
                QuerySetCell(NewResult,ListGetAt(theQuery.ColumnList,x),theQuery[ListGetAt(theQuery.ColumnList,x)][q]);
            }
        }
    }
    return NewResult;
}
</cfscript>



<cfscript>
/**
* Concatenate two queries together.
*
* @param q1      First query. (Optional)
* @param q2      Second query. (Optional)
* @return Returns a query.
* @author Chris Dary (umbrae@gmail.com)
* @version 1, February 23, 2006
*/
function queryConcat(q1,q2) {
    var row = "";
    var col = "";

    if(q1.columnList NEQ q2.columnList) {
        return q1;
    }

    for(row=1; row LTE q2.recordCount; row=row+1) {
     queryAddRow(q1);
     for(col=1; col LTE listLen(q1.columnList); col=col+1)
        querySetCell(q1,ListGetAt(q1.columnList,col), q2[ListGetAt(q1.columnList,col)][row]);
    }
    return q1;
}
</cfscript>
</cfcomponent>