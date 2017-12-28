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
	
	<!---<cfset rc.subjects = getORMGateway().list("ReportSubject", [], "name asc") />--->
	
</cffunction>



<!--- subjectdelete --->
<!---<cffunction name="subjectdelete" output="false" 
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
	
</cffunction>--->

<cffunction name="productsave" output="false" 
	hint="I save a product">
	<cfargument name="rc" />
	
	<cfparam name="rc.IDReportProduct" default="0" />
	
	<cfset var product = getORMGateway().get("ReportProduct", rc.IDReportProduct) />
	
	<cfset product.populate(rc) />
	
	<cfset product.save()/>
	
	<!--- reset the ID, handels when objects were new --->
	<cfset rc.IDReportProduct = product.getIDReportProduct() />
	
	<cfset getFramework().redirect('product.productedit', 'all') />
	
</cffunction>

<!--- subjectview --->
<cffunction name="productview" output="false" 
	hint="I show a list of a product Reports">
	<cfargument name="rc" />
	
	<cfparam name="rc.IDReportProduct" default="0" />
	
    <cfset var getReports = 0 />
	<cfset var getReports1 = 0 />
     
    <cfquery name="getReports1">   
    	SELECT *
        FROM NEIC.ARCHIVES_REPORT_LIST RL
        INNER JOIN NEIC.ARCHIVES_REPORT_PRODUCT RP ON RP.PRODUCTNAME=RL.PRODUCT
        WHERE ( RP.ID = #rc.IDReportProduct# ) 
          AND ( RL.VERSION <> 'archive' )
          AND ( RL.VERSION <> 'no' )
    </cfquery>
    
	<cfquery dbtype="query" name="getReports">
      Select Distinct id, version, title from getReports1
      Order by title ASC
    </cfquery>
	
    <cfset rc.reports = getreports />
</cffunction>


<!--- subjectsave --->



<!--- savechildtag --->
<!---<cffunction name="savechildtag" output="false" 
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
	
</cffunction>--->
</cfcomponent>