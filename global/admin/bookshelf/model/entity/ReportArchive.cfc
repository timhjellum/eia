<cfcomponent 
	persistent="true" 
	table="ARCHIVES_REPORT_LIST" 
	schema="NEIC"
	entityname="ReportArchive"
	accessors="true"
	displayname="Report Archive"
	extends="BaseEntity">

<cfproperty 
	fieldtype="id" 
	name="IDReportArchive" 
	column="ID" 
	getter="true" 
	setter="false"
	ormtype="integer" 
	generator="sequence"
	params="{sequence='SEQ_ARCHIVES_REPORT_LIST'}" />

<!---cfproperty name="id" column="ID" /--->
<cfproperty name="title" column="TITLE" />
<cfproperty name="pages" column="PAGES" />
<cfproperty name="releaseDate" column="RELEASE_DATE"/>
<cfproperty name="periodicity" column="PERIODICITY" />
<cfproperty name="version" column="VERSION" />
<cfproperty name="parentid" column="PARENTID" />
<cfproperty name="contactName" column="CONTACT_NAME" />
<cfproperty name="contactNumber" column="CONTACT_NUMBER" />
<cfproperty name="reportKind" column="REPORT_KIND" />
<cfproperty name="feature" column="FEATURE" />
<cfproperty name="linkHTML" column="LINK_HTML" />
<cfproperty name="linkPDF" column="LINK_PDF" />
<cfproperty name="PDFSize" column="PDF_SIZE" />
<cfproperty name="issue" column="ISSUE" />
<cfproperty name="UPDKind" column="UPD_KIND" />
<cfproperty name="reportNumber" column="REPORT_NUMBER" />
<cfproperty name="summaryDescription" column="SUMMARY_DESCRIPT" />
<cfproperty name="product" column="PRODUCT" />

<!--- added 3/14/2011 --->
<cfproperty name="hasAnalysis" column="HAS_ANALYSIS" />
<cfproperty name="hasData" column="HAS_DATA" />
<cfproperty name="hasForcast" column="HAS_FORECAST" />



<cfproperty 
	name="ReportTags"
	singularname="ReportTag" 
	fieldtype="many-to-many" 
	CFC="ReportTag" 
	linkschema="NEIC"
	linktable="ARCHIVES_REPORT_TAG_LINK" 
	FKColumn="fk_IDReportArchive" 
	inversejoincolumn="fk_IDReportTag" 
    />

<cfproperty 
	name="ReportSubjects"
	singularname="ReportSubject" 
	fieldtype="many-to-many" 
	CFC="ReportSubject" 
	linkschema="NEIC"
	linktable="ARCHIVES_REPORT_SUBJECT_LINK" 
	FKColumn="fk_IDReportArchive" 
	inversejoincolumn="fk_IDReportSubject" />



<!--- init --->
<cffunction name="init" returntype="Any" output="false" 
	hint="I am the constructor. I return myself.">
	
	<cfif not isPersisted(this)>
		<cfset variables.ReportTags = arrayNew(1) />
		<cfset variables.ReportSubjects = arrayNew(1) />
	</cfif>

	<cfreturn this />
</cffunction>



<!--- delete --->
<cffunction name="delete" returntype="Any" output="false" 
	hint="I delete myself.">
	
	<cfset var delete = 0 />
	
	<!--- the three column look up table --->
	<cfquery name="delete">
		DELETE
		FROM NEIC.ARCHIVES_REPORT_LU
		WHERE ID = #variables.IDReportArchive#
	</cfquery>
	
	<!--- the subject link table (still not sure if its used) --->
	<cfquery name="delete">
		DELETE
		FROM NEIC.ARCHIVES_REPORT_SUBJECT_LINK
		WHERE FK_IDREPORTARCHIVE = #variables.IDReportArchive#
	</cfquery>
	
	<!--- the tag link table --->
	<cfquery name="delete">
		DELETE
		FROM NEIC.ARCHIVES_REPORT_TAG_LINK
		WHERE FK_IDREPORTARCHIVE = #variables.IDReportArchive#
	</cfquery>
	
	<!--- the REPORT record --->
	<cfquery name="delete">
		DELETE
		FROM NEIC.ARCHIVES_REPORT_LIST
		WHERE ID = #variables.IDReportArchive#
	</cfquery>
	
	<!--- make sure the hibernate session is cleared for any other requets --->
	<cfset ormFlush() />
</cffunction>




<!--- setSubjects --->
<cffunction name="setSubjects" returntype="void" access="public" output="false"
	displayname="Set Subjects" hint="I set my subjects by a list of ID's"
	description="I set my subjects by a list of ID's">
	
	<cfargument name="ID" default="" />
	
	<cfset var test = 0 />
	<cfset var theID = 0 />
	
	<cfquery name="test">
		delete
		from NEIC.ARCHIVES_REPORT_SUBJECT_LINK
		where fk_IDReportArchive = #this.getIDReportArchive()# 
	</cfquery>
	
	<cfloop list="#arguments.ID#" index="theID">
		<cfquery name="test">
			INSERT 
			INTO NEIC.ARCHIVES_REPORT_SUBJECT_LINK 
				(
					fk_IDReportArchive,
					fk_IDReportSubject 
					
				)
			VALUES 
				(
					<cfqueryparam cfsqltype="cf_sql_integer" value="#this.getIDReportArchive()#" />,
					<cfqueryparam cfsqltype="cf_sql_integer" value="#theID#" />
				)
		</cfquery>
	</cfloop>

</cffunction>



<!--- setTags --->
<cffunction name="setTags" returntype="void" access="public" output="false"
	displayname="Set Tags" hint="I set my Tags by a list of ID's"
	description="I set my Tags by a list of ID's">
	
	<cfargument name="ID" default="" />
	
	<cfset var test = 0 />
	<cfset var theID = 0 />
	
	<cfquery name="test">
		delete
		from NEIC.ARCHIVES_REPORT_TAG_LINK
		where fk_IDReportArchive = #this.getIDReportArchive()# 
	</cfquery>
	
	<cfloop list="#arguments.ID#" index="theID">
		<cfquery name="test">
			INSERT 
			INTO NEIC.ARCHIVES_REPORT_TAG_LINK 
				(
					fk_IDReportArchive,
					fk_IDReportTag 
					
				)
			VALUES 
				(
					<cfqueryparam cfsqltype="cf_sql_integer" value="#this.getIDReportArchive()#" />,
					<cfqueryparam cfsqltype="cf_sql_integer" value="#theID#" />
				)
		</cfquery>
	</cfloop>

</cffunction>



<!--- addReportSubject --->
<cffunction name="addReportSubject" returntype="void" access="public" output="false"
	displayname="Add Report Subject" hint="I add report subjects to myself"
	description="I add report subjects to myself">
	
	<cfscript>
		if(!hasReportSubject(arguments.ReportSubject)){
			arrayAppend(variables.ReportSubjects, arguments.reportSubject);
			arguments.ReportSubject.addReportArchive(this);
		}
	</cfscript>
	
</cffunction>



<!--- updateReportSubjectTags --->
<cffunction name="updateReportSubjectTags" returntype="void" access="public" output="false"
	displayname="Update Report Subject Tags" hint="I update a Reports Subject child tags"
	description="I update a Reports Subject child tags">
	
	<cfargument name="IDReportSubject" required="true" 
		hint="I am the ID. I am required." />
	<cfargument name="TagIDs" required="false" default="" 
		hint="I am list of Tag ID. I default to an empty string." />
	
	<!---
	<cfquery name="test">
		delete
		from ARCHIVES_REPORT_LU
		where ID = #this.getIDReportArchive()#
		and TAGID != 0 
	</cfquery>
	--->
</cffunction>




<!--- listRelatedSubjects --->
<cffunction name="listRelatedSubjects" returntype="any" access="public" output="false"
	displayname="List Related Subjects" hint="I return a query of related Subjects."
	description="I return a query of related Subjects.">
	
	<cfset var result = 0 />
	
	<cfquery name="result">
		select *
		from NEIC.ARCHIVES_REPORT_LU
		where id = #this.getID()#
	</cfquery>
	
	<cfreturn result />
</cffunction>



<!--- listAvaiableSubjects --->
<cffunction name="listAvaiableSubjects" returntype="any" access="public" output="false"
	displayname="List Avaiable Subjects" hint="I return an array of Report Subjects."
	description="I return an array of Report Subjects.">
	
	<cfreturn entityLoad("ReportSubject") />
</cffunction>



<!--- listAvaiableTags --->
<cffunction name="listAvaiableTags" returntype="any" access="public" output="false"
	displayname="List Avaiable Tags" hint="I return an array of all avaiable Tags."
	description="I return an array of all avaiable Tags.">
	
	<cfreturn entityLoad("ReportTag") />
</cffunction>



<!--- save --->
<cffunction name="save" returntype="any" access="public" output="false"
	displayname="Save" hint="I save myself"
	description="I save myself ">
	
	<cfset var getTopID = 0 />
	<cfset var insertQuery = 0 />
	<cfset var updateQuery = 0 />
	
	<!--- 
		Why are we doing this you ask??????
		
		There was a nasty little problem and this was the quickest way to to
		get the app up and running smoothly. 
		
		They hibernate session was getting bunked some how and I believe it is
		a problem with Hibernate and the sequence. I think Hibernate was 
		hitting it or something.
		
		
	 --->
	
	<cfif not ISPersisted()>
		<cflock type="exclusive" scope="request" timeout="30">
			<!--- insert query --->
			<cfquery name="insertQuery" result="insertQueryResult">
				INSERT INTO NEIC.ARCHIVES_REPORT_LIST
				(
					TITLE,
					PAGES,
					RELEASE_DATE,
					PERIODICITY,
					VERSION,
					PARENTID,
					CONTACT_NAME,
					CONTACT_NUMBER,
					REPORT_KIND,
					FEATURE,
					LINK_HTML,
					LINK_PDF,
					ISSUE,
					UPD_KIND,
					REPORT_NUMBER,
					PDF_SIZE,
					SUMMARY_DESCRIPT,
                    PRODUCT,
					HAS_ANALYSIS,
					HAS_DATA,
					HAS_FORECAST
                    
				)
				VALUES 
				(
					<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.title#" />,
					<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.pages#" />,
					<cfqueryparam cfsqltype="cf_sql_date"  value="#dateFormat(variables.releaseDate, 'dd-mmm-yy')#" />,
					<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.periodicity#" />,
					<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.version#" />,
					<cfif IsDefined("variables.parentid") and IsNumeric(variables.parentid)>
						<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.parentid#" />,
					<cfelse>
						<cfqueryparam cfsqltype="cf_sql_null" null="yes" />,
					</cfif>
					<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.contactName#" />,
					<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.contactNumber#" />,
					<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.reportKind#" />,
					<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.feature#" />,
					<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.linkHTML#" />,
					<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.linkPDF#" />,
					<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.issue#" />,
					<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.UPDKind#" />,
					<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.reportNumber#" />,
					<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.PDFSize#" />,
					<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.summaryDescription#" />,
					<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.product#" />,
					
					<cfif isDefined("variables.hasAnalysis") and variables.hasAnalysis eq 'on'>
						<cfqueryparam cfsqltype="cf_sql_varchar" value="Y" />,
					<cfelse>
						<cfqueryparam cfsqltype="cf_sql_varchar" value="N" />,
					</cfif>
					
					<cfif isDefined("variables.hasData") and variables.hasData eq 'on'>
						<cfqueryparam cfsqltype="cf_sql_varchar" value="Y" />,
					<cfelse>
						<cfqueryparam cfsqltype="cf_sql_varchar" value="N" />,
					</cfif>
					
					<cfif isDefined("variables.hasForcast") and  variables.hasForcast eq 'on'>
						<cfqueryparam cfsqltype="cf_sql_varchar" value="Y" />
					<cfelse>
						<cfqueryparam cfsqltype="cf_sql_varchar" value="N" />
					</cfif>
				)
			</cfquery>
			<!--- This method of getting the inserted record ID fails when the database sequence is lower than the max ID
			<cfquery name="getTopID">
				SELECT MAX(ID) as NewID
				FROM NEIC.ARCHIVES_REPORT_LIST
			</cfquery>
			--->
			<cfquery name="getTopID">
				SELECT ID as NewID
				FROM NEIC.ARCHIVES_REPORT_LIST
				where ROWID = <cfqueryparam cfsqltype="cf_sql_varchar" value="#insertQueryResult.ROWID#">
			</cfquery>
		</cflock>
	<cfelse><!--- update query --->
		<cftry>
			<cfquery name="updateQuery">
				UPDATE NEIC.ARCHIVES_REPORT_LIST
				SET 
				
				TITLE = <cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.title#" />,
				PAGES = <cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.pages#" />,
				RELEASE_DATE = <cfqueryparam cfsqltype="cf_sql_date"  value="#dateFormat(variables.releaseDate, 'dd-mmm-yy')#" />,
				PERIODICITY = <cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.periodicity#" />,
				VERSION = <cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.version#" />,
				<cfif IsDefined("variables.parentid") and IsNumeric(variables.parentid)>
					PARENTID = <cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.parentid#" />,
				<cfelse>
					PARENTID = <cfqueryparam cfsqltype="cf_sql_null" null="yes" />,
				</cfif>
				CONTACT_NAME =<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.contactName#" />,
				CONTACT_NUMBER = <cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.contactNumber#" />,
				REPORT_KIND = <cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.reportKind#" />,
				FEATURE =<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.feature#" />,
				LINK_HTML = <cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.linkHTML#" />,
				LINK_PDF = <cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.linkPDF#" />,
				ISSUE = <cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.issue#" />,
				UPD_KIND = <cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.UPDKind#" />,
				REPORT_NUMBER = <cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.reportNumber#" />,
				PDF_SIZE = <cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.PDFSize#" />,
				SUMMARY_DESCRIPT =<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.summaryDescription#" />,
				PRODUCT =<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.product#" />,

				<cfif isDefined("variables.hasAnalysis") and variables.hasAnalysis eq 'on'>
					HAS_ANALYSIS = <cfqueryparam cfsqltype="cf_sql_varchar" value="Y" />,
				<cfelse>
					HAS_ANALYSIS = <cfqueryparam cfsqltype="cf_sql_varchar" value="N" />,
				</cfif>
				
				<cfif isDefined("variables.hasData") and variables.hasData eq 'on'>
					HAS_DATA = <cfqueryparam cfsqltype="cf_sql_varchar" value="Y" />,
				<cfelse>
					HAS_DATA = <cfqueryparam cfsqltype="cf_sql_varchar" value="N" />,
				</cfif>
			
				<cfif isDefined("variables.hasForcast") and  variables.hasForcast eq 'on'>
					HAS_FORECAST = <cfqueryparam cfsqltype="cf_sql_varchar" value="Y" />
				<cfelse>
					HAS_FORECAST = <cfqueryparam cfsqltype="cf_sql_varchar" value="N" />
				</cfif>
				
				WHERE ID = #variables.IDReportArchive#
			</cfquery>

			<!--- If this report is being saved as an archive or past issue --->
			<cfif LCase(VERSION) eq "archive" or LCase(VERSION) eq "pastissue">
				<!--- Query to see if any archived reports link to this as their current version --->
				<cfquery name="LinksQuery">
					select *
					from NEIC.ARCHIVES_REPORT_LIST
					where PARENTID = #variables.IDReportArchive#
					--and Lower(ARCHIVES_REPORT_LIST.VERSION) = 'archive'
				</cfquery>
				<!--- If any existing archives would be affected --->
				<cfif LinksQuery.RecordCount>
					<!--- Why does this not provide the username?
					<cfinclude template="/global/admin/faqs/model/utility/cflib/SecurityLib.cfm" />
					--->
					<cfquery name="RedirectedQuery" result="RedirectedQueryResult">
						update NEIC.ARCHIVES_REPORT_LIST
						set PARENTID = #variables.parentid#
						where PARENTID = #variables.IDReportArchive#
					</cfquery>

					<!---<cfmail to="steven.waters@eia.gov" from="server@eia.gov" subject="Saving as an archive" type="html">--->
   					<cfmail to="james.kraetz@eia.gov" from="server@eia.gov" subject="Saving as an archive" type="html">
						Server = #CGI.HTTP_HOST#<br>
						<!--- Why does this not work?
						User = #getAuthUsername()#<br>
						--->
						IP address = #CGI.REMOTE_ADDR#<br>
						Saving as an archive/past issue<br>
						Archive/past issue report ID = #variables.IDReportArchive#<br>
						New current version = #variables.parentid#<br>
						<strong>The following archives/past issues now point to the new current version, instead of this report which is now an archive/past issue:</strong>
						<cfdump var="#LinksQuery#">
						Result:
						<cfdump var="#RedirectedQueryResult#">
					</cfmail>
				<!--- too many emails
				<cfelse>
					<!--- Why does this not provide the username?
					<cfinclude template="/global/admin/faqs/model/utility/cflib/SecurityLib.cfm" />
					--->
					<cfmail to="steven.waters@eia.gov" from="server@eia.gov" subject="Saving as an archive" type="html">
						Server = #CGI.HTTP_HOST#<br>
						<!--- Why does this not work?
						User = #getAuthUsername()#<br>
						--->
						IP address = #CGI.REMOTE_ADDR#<br>
						Saving as an archive/past issue<br>
						Archive/past issue report ID = #variables.IDReportArchive#<br>
						New current version = #variables.parentid#<br>
						<strong>No existing archives would be affected</strong>
					</cfmail>
				--->
				</cfif>
				<!---
				<cfquery name="updateQuery">
					update NEIC.ARCHIVES_REPORT_LIST
					set 
				</cfquery>
				--->
			</cfif>

		<cfcatch>
			<cfmail to="james.kraetz@eia.gov" from="server@eia.gov" subject="ColdFusion error in /global/admin/bookshelf/model/entity/ReportArchive.cfc - updateQuery()" type="html">
				<cfoutput>#cfcatch#</cfoutput>
				<cfdump var="#cfcatch#">
			</cfmail>
			Database error details sent to admin
			<cfabort>
		</cfcatch>
		</cftry>

	</cfif>
	
	<cfreturn getTopID />
</cffunction>
</cfcomponent>