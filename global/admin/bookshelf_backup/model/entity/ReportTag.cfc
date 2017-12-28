<cfcomponent 
	persistent="true"
	entityname="ReportTag"
	table="ARCHIVES_REPORT_TAG"
	accessors="true"
	displayname="Report Tag"
	extends="BaseEntity">
	
<cfproperty 
	fieldtype="id" 
	name="IDReportTag" 
	column="ID" 
	getter="true" 
	setter="false"
	ormtype="integer" 
	generator="sequence"
	params="{sequence='NEIC.SEQ_ARCHIVES_TAG_INCREMENT'}" />

<cfproperty name="name" column="TAG" />
<cfproperty name="origin" column="ORIGIN" />

<cfproperty 
	name="ReportArchives"
	singularname="ReportArchive" 
	fieldtype="many-to-many" 
	CFC="ReportArchive" 
	linktable="ARCHIVES_REPORT_TAG_LINK" 
	FKColumn="fk_IDReportTag" 
	inversejoincolumn="fk_IDReportArchive" />

<cfproperty 
	name="ReportSubjects"
	singularname="ReportSubject" 
	fieldtype="many-to-many" 
	CFC="ReportSubject" 
	linktable="ARCHIVES_SUBJECT_TAG_LINK" 
	FKColumn="fk_IDReportTag" 
	inversejoincolumn="fk_IDReportSubject" />


<!--- init --->
<cffunction name="init" returntype="component" access="public" output="false"
	displayname="Init" hint="I am the constructor"
	description="">
	
	<cfscript>
		if( !isPersisted() ){
			variables.ReportArchives = arrayNew(1);
			variables.ReportSubjects = arrayNew(1);
		}
	</cfscript>
	
	<cfreturn this />
</cffunction>



<!--- getAvaiableSubjects --->
<cffunction name="getAvaiableSubjects" returntype="any" access="public" output="false"
	displayname="Get Avaiable Subjects" hint="I return all subject objects."
	description="I return an array of all subject objects.">
	
	<cfreturn entityLoad("ReportSubject") />
</cffunction>



<!--- updateSubjects --->
<cffunction name="updateSubjects" returntype="any" access="public" output="false"
	displayname="Update Subjects" hint="I update my related subjects by a list of ID's"
	description="I update my related subjects by a list of ID's">
	
	<cfargument name="IDSubject" default="" required="false"
		hint="I am a list of ReportSubject ID to associate with myself. I default to an empty string." />
	
	<cfset var x = 0 />
	<cfset var subject = 0 />	
	
	<!--- delete all the related obj --->
	<cfset variables.ReportSubjects = arrayNew(1) />
	<cfset ormFlush() />
	
	<cfloop list="#arguments.IDSubject#" index="x">
		<cfset subject = entityLoad("ReportSubject", x, true) />
		<cfif not this.hasReportSubject(subject)>
			<cfset arrayAppend(variables.ReportSubjects, subject) />
		</cfif>
	</cfloop>
	
	<cfset ORMFlush() />
	
</cffunction>
</cfcomponent>