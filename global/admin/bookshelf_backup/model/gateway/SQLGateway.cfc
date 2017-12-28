<cfcomponent 
	displayname="SQL Gateway" 
	hint="I am the applicaitons SQL gateway. I contain all SQL statements" 
	output="false">
	
<!--- ******************************* Public ***************************** --->
<!--- init --->
<cffunction name="init" returntype="SQLGateway" access="public" output="false" 
	displayname="Init" hint="I am the constructor." 
	description="I am the pseudo constructor for this CFC.">
	
	<cfreturn this />
</cffunction>



<!--- updateReportSubjectTags --->
<cffunction name="updateReportSubjectTags" returntype="void" access="public" output="false"
	displayname="Update Report Subject Tags" hint="I update a Reports Subject child tags"
	description="I update a Reports Subject child tags">
	
	<cfargument name="IDReport" required="true" 
		hint="I am the ID. I am required." />
	<cfargument name="IDReportSubject" required="true" 
		hint="I am the ID. I am required." />
	<cfargument name="TagIDs" required="false" default="" 
		hint="I am list of Tag ID. I default to an empty string." />
	
</cffunction>






<!--- getArticle --->
<cffunction name="getArticle" returntype="any" access="public" output="false"
	displayname="Get Article" hint="I return a single article record by ID."
	description="I return a single article record by ID.">

	<cfargument name="ID" required="true" hint="I am the ID. I am required" />

	<cfset var result = "" />
		
	<cfquery name="result">
		select *
		from NEIC.ARCHIVES_REPORT_LIST
		where ID = <cfqueryparam value="#arguments.id#" cfsqltype="cf_sql_integer" />
	</cfquery>

	<cfreturn result />
</cffunction>

<!--- listArticles --->
<cffunction name="listArticles" returntype="any" access="public" output="false"
	displayname="List Articles" hint="I return a query object of Articles."
	description="I return a query object of Articles.">

	<cfset var result = "" />
		
	<cfquery name="result">
		select *
		from NEIC.ARCHIVES_REPORT_LIST
	</cfquery>

	<cfreturn result />
</cffunction>

<!--- listSubjects --->
<cffunction name="listSubjects" returntype="any" access="public" output="false"
	displayname="List Subjects" hint="I return a query object of subjects."
	description="I return a query object of subjects.">

	<cfset var result = "" />
		
	<cfquery name="result">
		select *
		from NEIC.ARCHIVES_REPORT_SUBJECT
	</cfquery>

	<cfreturn result />
</cffunction>

<!--- listTags --->
<cffunction name="listTags" returntype="any" access="public" output="false"
	displayname="List Tags" hint="I return a query object of Tags."
	description="I return a query object of Tags.">

	<cfset var result = "" />
		
	<cfquery name="result">
		select *
		from NEIC.ARCHIVES_REPORT_TAG
	</cfquery>

	<cfreturn result />
</cffunction>





<!--- ******************************* Package **************************** --->
<!--- ******************************* Private **************************** --->
</cfcomponent>