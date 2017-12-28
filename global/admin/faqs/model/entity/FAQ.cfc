<cfcomponent 
	persistent="true" 
	table="FAQS" 
	entityname="faq"
	accessors="true"
	displayname="FAQs"
	extends="BaseEntity">
	
<cfproperty 
	fieldtype="id" 
	name="IDFaq" 
	column="ID" 
	getter="true" 
	setter="false"
	ormtype="integer" 
	generator="sequence"
	params="{sequence='SEQ_FAQS'}" />

<cfproperty name="Question" column="QUESTION" />
<cfproperty name="Answer" column="ANSWER" />
<cfproperty name="Created" column="CREATED" />
<cfproperty name="Updated" column="UPDATED" />
<cfproperty name="Archive" column="ARCHIVE" />

<cfproperty 
	name="Tags"
	singularname="Tag" 
	fieldtype="many-to-many" 
	CFC="FAQTag" 
	linktable="FAQS_TAGS_REL" 
	FKColumn="FAQ_ID" 
	inversejoincolumn="TAG_ID" />



<!--- init --->
<cffunction name="init" returntype="Any" output="false" 
	hint="I am the constructor. I return myself.">
	
	<cfif not isPersisted(this)>
		<cfset variables.tags = arrayNew(1) />
	</cfif>

	<cfreturn this />
</cffunction>



<!--- delete --->
<cffunction name="delete" returntype="void" access="public" output="false"
	displayname="Delete" hint="I delete myself"
	description="I delete myself">
	
	<cfset variables.tags = arrayNew(1) />
	<cfset ormFlush() />
	<cfset entityDelete(this) />
	<cfset ormFlush() />
	
</cffunction>




<!--- handleTags --->
<cffunction name="handleTags" returntype="void" access="public" output="false"
	displayname="Handle Tags" hint="Pass me a list of Tag ID's and I manage the relationships."
	description="Pass me a list of Tag ID's and I manage the relationships.">
	
	<cfargument name="ids" default="" required="false" 
		hint="I am a list of TAG IDs. I default to and empty string." />
	
	<cfset var id = "" />
	<cfset var tag = 0 />
	<cfset var deleteCurrentTags = 0 />
	<cfset var updateRelationship = 0 />
	
	<cfif len(arguments.ids)>
		
		<!--- nuke related tags --->
		<cfset variables.tags = arrayNew(1) />
		<cfset ormFlush() />
			
		<!--- now add them back in --->
		<cfloop list="#arguments.ids#" index="id">
			<cfset tag = entityLoadByPK("FAQTag", id) />
			<cfset this.addTag(tag) />
		</cfloop>
		
		<cfset ormFlush() />
	</cfif>
	
</cffunction>



<!--- getAllTags --->
<cffunction name="getAllTags" returntype="array" access="public" output="false"
	displayname="Get All Tags" hint="I return all of the avaiable tags objects."
	description="I return all of the avaiable tags objects.">
	
	<cfreturn entityLoad("FAQTag") />
</cffunction>



<!--- save --->
<cffunction name="save" output="false" access="public" returntype="any" 
	displayname="Save" hint="I save myself." 
	description="I save myself.">
	
	<cfset var getTopID = 0 />
	<cfset var insertQuery = 0 />
	<cfset var updateQuery = 0 />
	<cfset var theID = 0 />
	
	<!--- 
		Why are we doing this you ask??????
		
		There was a nasty little problem and this was the quickest way to to
		get the app up and running smoothly. 
		
		They hibernate session was getting bunked some how and I believe it is
		a problem with Hibernate and the sequence. I think Hibernate was 
		hitting it or something.
		
		
	 --->

	<!--- Determine whether the checkbox was selected to indicate this is an archive --->
	<cfif IsDefined("variables.ARCHIVE") and variables.ARCHIVE eq "on">
		<cfset ARCHIVE2 = "Y">
	<cfelse>
		<cfset ARCHIVE2 = "N">
	</cfif>

	<cfif not ISPersisted()>
		<cflock type="exclusive" scope="request" timeout="30">
			<!--- insert query --->
			<cfquery name="insertQuery">
				INSERT INTO NEIC.FAQS
				(
					QUESTION,
					ANSWER,
					CREATED,
					UPDATED,
                    ARCHIVE
				)
				VALUES 
				(
					<cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.QUESTION#" />,
					<cfqueryparam cfsqltype="cf_sql_clob" value="#variables.ANSWER#" />,
					<cfqueryparam cfsqltype="cf_sql_date"  value="#dateFormat(now(), 'dd-mmm-yy')#" />,
					<cfqueryparam cfsqltype="cf_sql_date"  value="#dateFormat(now(), 'dd-mmm-yy')#" />,
					'#ARCHIVE2#'
				)
			</cfquery>

			<cfquery name="getTopID">
				SELECT MAX(ID) as NewID
				FROM NEIC.FAQS
			</cfquery>
			
			<cfloop query="getTopID">
				<cfset theID = newID />
			</cfloop>
			
		</cflock>
		
	<cfelse><!--- update query --->

		<cfquery name="updateQuery">
			UPDATE NEIC.FAQS
			SET 
			QUESTION = <cfqueryparam cfsqltype="cf_sql_varchar" value="#variables.QUESTION#" />,
			ANSWER = <cfqueryparam cfsqltype="cf_sql_clob" value="#variables.ANSWER#" />,
			UPDATED = <cfqueryparam cfsqltype="cf_sql_date"  value="#dateFormat(variables.UPDATED, 'dd-mmm-yy')#" />,
			ARCHIVE = '#ARCHIVE2#'
			WHERE ID = <cfqueryparam cfsqltype="cf_sql_numeric" value="#variables.IDFaq#" />
		</cfquery>
	
		<cfset theID = variables.IDFaq />
	</cfif>
	
	<cfreturn theID />
</cffunction>
</cfcomponent>