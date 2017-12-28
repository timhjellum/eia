<cfcomponent extends="BaseController">


<!--- init --->
<cffunction name="init" returntype="component" access="public" output="false"
	displayname="" hint=""
	description="">
	
	<cfscript>
	super.init(argumentCollection = arguments);
	</cfscript>
	
	<cfreturn this />
</cffunction>



<!--- home --->
<cffunction name="home" output="false">
	<cfargument name="rc" />
	
	<cfset rc.subjects = getORMGateway().list("ReportSubject", [], "name asc") />
	
</cffunction>



<!--- subjectdelete --->
<cffunction name="subjectdelete" output="false" 
	hint="I delete a subject">
	<cfargument name="rc" />
	
	<cfparam name="rc.IDReportSubject" default="0" />
	
	<cfset rc.subject = getORMGateway().get("ReportSubject", rc.IDReportSubject) />
	
	<cfset rc.subject.delete() />
	
	<cfset addResponceMessage("Subject Deleted", rc) />
	
	<cfset getFramework().redirect('subject.home', 'all') />
	
</cffunction>



<!--- subjectedit --->
<cffunction name="subjectedit" output="false" 
	hint="I get a subject and display the form">
	<cfargument name="rc" />
	
	<cfparam name="rc.IDReportSubject" default="0" />
	
	<cfset rc.subject = getORMGateway().get("ReportSubject", rc.IDReportSubject) />
	
</cffunction>



<!--- subjectview --->
<cffunction name="subjectview" output="false" 
	hint="I show a list of a subjects Reports">
	<cfargument name="rc" />
	
	<cfparam name="rc.IDReportSubject" default="0" />
	
    <cfset var getReports = 0 />
	<cfset var getReports1 = 0 />
    
    <cfquery name="getReports1">
    	SELECT NEIC.ARCHIVES_REPORT_LIST.TITLE, NEIC.ARCHIVES_REPORT_LIST.PAGES, NEIC.ARCHIVES_REPORT_LIST.RELEASE_DATE, 
        NEIC.ARCHIVES_REPORT_LIST.PERIODICITY, NEIC.ARCHIVES_REPORT_LIST.VERSION, NEIC.ARCHIVES_REPORT_LIST.CONTACT_NAME, 
        NEIC.ARCHIVES_REPORT_LIST.CONTACT_NUMBER, NEIC.ARCHIVES_REPORT_LIST.SUBJECT, NEIC.ARCHIVES_REPORT_LIST.REPORT_KIND, 
        NEIC.ARCHIVES_REPORT_LIST.FEATURE, NEIC.ARCHIVES_REPORT_LIST.LINK_HTML, NEIC.ARCHIVES_REPORT_LIST.LINK_PDF, 
        NEIC.ARCHIVES_REPORT_LIST.ISSUE, NEIC.ARCHIVES_REPORT_LIST.UPD_KIND, NEIC.ARCHIVES_REPORT_LIST.REPORT_NUMBER, 
        NEIC.ARCHIVES_REPORT_LIST.PDF_SIZE, NEIC.ARCHIVES_REPORT_LIST.SUMMARY_DESCRIPT, NEIC.ARCHIVES_REPORT_LIST.ID, 
        NEIC.ARCHIVES_REPORT_LU.SID, NEIC.ARCHIVES_REPORT_SUBJECT.SUBJECT 
        FROM NEIC.ARCHIVES_REPORT_LIST, NEIC.ARCHIVES_REPORT_LU, NEIC.ARCHIVES_REPORT_SUBJECT 
        WHERE ( NEIC.ARCHIVES_REPORT_LIST.ID = NEIC.ARCHIVES_REPORT_LU.ID ) 
          AND ( NEIC.ARCHIVES_REPORT_LU.SID = #rc.IDReportSubject# ) 
          AND ( NEIC.ARCHIVES_REPORT_LIST.VERSION <> 'archive' )
          AND ( NEIC.ARCHIVES_REPORT_LIST.VERSION <> 'no' )
    </cfquery>
    
	<cfquery dbtype="query" name="getReports">
      Select Distinct id, version, title from getReports1
      Order by title ASC
    </cfquery>
	
    <cfset rc.reports = getreports />
</cffunction>



<!--- subjectsave --->
<cffunction name="subjectsave" output="false" 
	hint="I save a subject">
	<cfargument name="rc" />
	
	<cfparam name="rc.IDReportSubject" default="0" />
	
	<cfset var subject = getORMGateway().get("ReportSubject", rc.IDReportSubject) />
	
	<cfset subject.populate(rc) />
	
	<cfset subject.save()/>
	
	<!--- reset the ID, handels when objects were new --->
	<cfset rc.IDReportSubject = subject.getIDReportSubject() />
	
	<cfset getFramework().redirect('subject.subjectedit', 'all') />
	
</cffunction>


<!--- savechildtag --->
<cffunction name="savechildtag" output="false" 
	hint="I save a chid tag">
	<cfargument name="rc" />
	
	<cfparam name="rc.IDReportSubject" default="0" />
	<cfparam name="rc.IDReportTag" default="0" />
	
	<cfset var insertNewRecord = 0 />
	
	<cfquery name="insertNewRecord">
		insert into NEIC.ARCHIVES_REPORT_TAG
		(TAG, fk_IDReportSubject)
		values
		('#rc.name#', #rc.IDReportSubject#)
	</cfquery>
	
	<cfset getFramework().redirect('subject.subjectedit', 'all') />
	
</cffunction>
</cfcomponent>