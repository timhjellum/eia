<cfcomponent>

<!--- submitReportTag --->
<cffunction name="submitReportTag" returntype="any" access="remote" output="false"
	displayname="submitReportTag" hint="I submit a tag for a report."
	discription="I submit a tag for a report. I manage the removal or addition of the relationship.">
	
	<cfargument name="data" default="" />
	
	<cfset var testQuery = 0 />
	<cfset var deleteQuery = 0 />
	<cfset var insertQuery = 0 />
	<cfset var result = "removed" />
	
	<!--- always use a try catch and return the error, easy to debug with FireBug --->
	<cftry>

		<!--- 
			Find and make the incoming ID's. We are hitting specific list 
			positions (janky I know), but the HTML will always provide this
			list so we should always be fine.
			
			TODO: should we clean this up and use a listFind???? 
		--->
		<cfset var tagID = listGetAt(arguments.data, 1, "|") />
		<cfset tagID = replace(tagID, "tagID_", "") />
		
		<cfset var subjectID = listGetAt(arguments.data, 2, "|") />
		<cfset subjectID = replace(subjectID, "subjectID_", "") />
		
		<cfset var reportID = listGetAt(arguments.data, 3, "|") />
		<cfset reportID = replace(reportID, "reportID_", "") />
	
		<!--- check if the record is there --->
		<cfquery name="testQuery">
			SELECT *
			FROM NEIC.ARCHIVES_REPORT_LU
			WHERE TAGID = <cfqueryparam cfsqltype="cf_sql_integer" value="#tagID#" />
			AND SID = <cfqueryparam cfsqltype="cf_sql_integer" value="#subjectID#" />
			AND ID = <cfqueryparam cfsqltype="cf_sql_integer" value="#reportID#" />
		</cfquery>
	
		<!--- if it is, delete it --->
		<cfif testQuery.RecordCount>
			<cfquery name="deleteQuery">
				DELETE
				FROM NEIC.ARCHIVES_REPORT_LU
				WHERE TAGID = <cfqueryparam cfsqltype="cf_sql_integer" value="#tagID#" />
				AND SID = <cfqueryparam cfsqltype="cf_sql_integer" value="#subjectID#" />
				AND ID = <cfqueryparam cfsqltype="cf_sql_integer" value="#reportID#" />
			</cfquery>
			
			<cfset result = "removed rID=#reportID#, sid=#subjectID#, tid=#tagID#" />
			
		<cfelseif not testQuery.RecordCount><!--- else, no record so insert it --->
			
			<cfquery name="insertQuery">
				INSERT INTO NEIC.ARCHIVES_REPORT_LU
				(
					ID, 
					SID, 
					TAGID
				)
				VALUES
				(
					<cfqueryparam cfsqltype="cf_sql_integer" value="#reportID#" />,
					<cfqueryparam cfsqltype="cf_sql_integer" value="#subjectID#" />,
					<cfqueryparam cfsqltype="cf_sql_integer" value="#tagID#" />
				)
			</cfquery>
			
			<cfset result = "added rID=#reportID#, sid=#subjectID#, tid=#tagID#" />
		</cfif>
		
		<cfreturn result />
	<cfcatch>
		<cfreturn cfcatch />
	</cfcatch>
	</cftry>
</cffunction>
</cfcomponent>