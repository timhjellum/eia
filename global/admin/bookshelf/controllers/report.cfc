<cfcomponent extends="BaseController">

<!--- init --->
<cffunction name="init" output="false">
	<cfargument name="fw" />
	<cfset super.init(argumentCollection = arguments) />
	
</cffunction>


<!--- home --->
<cffunction name="home" output="false" 
	hint="I display a list of stuff">
	<cfargument name="rc" />
	
	<cfset rc.reports = getORMGateway().list("ReportArchive", [], "title ASC") />
</cffunction>


<!--- reportedit --->
<cffunction name="reportedit" output="false" 
	hint="I display a reports edit form">
	<cfargument name="rc" />
	
	<cfparam name="rc.IDReportArchive" default="0" />

	<cfset rc.report = getORMGateway().get("ReportArchive", rc.IDReportArchive) />
	
</cffunction>


<!--- reportdelete --->
<cffunction name="reportdelete" output="false" 
	hint="I display a reports edit form">
	<cfargument name="rc" />
	
	<cfparam name="rc.IDReportArchive" default="0" />

	<cfset var report = getORMGateway().get("ReportArchive", rc.IDReportArchive) />
    
    <cfset report.delete()/>
	
	<cfset getFramework().redirect('main.home', 'all') />
</cffunction>


<!--- reportsavenew --->
<cffunction name="reportsavenew" output="false" 
	hint="I save a report">
	<cfargument name="rc" />
	
	<cfparam name="rc.IDReportArchive" default="0" />

	<!--- this will get an empty report --->
	<cfset var report = getORMGateway().get("ReportArchive", rc.IDReportArchive) />
	
	<!--- populate the report object --->
	<cfset report.populate(rc) />
	
	<!--- when we save a new report, it will return the ID --->
	<cfset var topID = report.save() />
	<cfset rc.id = topID />
	
	<cfset rc.IDReportArchive = topID />
	
	<!--- do this for the sake of it --->
	<cfset ORMFlush() />
	
	<cfset getFramework().redirect('report.reporteditnew', 'all') />

</cffunction>


<!--- reportsave --->
<cffunction name="reportsave" output="false" 
	hint="I save a report">
	<cfargument name="rc" />
	
	<cfparam name="rc.IDReportArchive" default="0" />

	<cfset var report = getORMGateway().get("ReportArchive", rc.IDReportArchive) />

	<cfset report.populate(rc) />
	<cfset report.save() />
			
	<cfscript>
		//make a list of Subject ID's to add then pass them to the report object
		var addKey = "subjectToAdd";
		var newSubjectIDList = "";
		For (key in rc)
		if(listFirst(key, "_") eq addKey){
			newSubjectIDList = listAppend(newSubjectIDList, rc[key]);
		}
		report.setSubjects(newSubjectIDList);
	
		//reset the ID, handels when objects were new
		rc.IDReportArchive = report.getIDReportArchive();
		
		getFramework().redirect('report.reportedit', 'all');
	</cfscript>

</cffunction>


<!--- selectsubjecttags --->
<cffunction name="selectsubjecttags" output="false">
	<cfargument name="rc" />
	<cfset rc.tags = getORMGateway().list("ReportTag") />
</cffunction>
</cfcomponent>