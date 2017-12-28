<cfcomponent 
	persistent="true" 
	table="FAQ_TAGS" 
	entityname="FAQTag"
	accessors="true"
	displayname="FAQ Tag"
	extends="BaseEntity">

<cfproperty 
	fieldtype="id" 
	name="IDFAQTag" 
	column="ID" 
	getter="true" 
	setter="false"
	ormtype="integer" 
	generator="sequence"
	params="{sequence='SEQ_FAQ_TAGS'}" />

<cfproperty name="Name" column="NAME" />

<cfproperty 
	name="FAQs"
	singularname="FAQ" 
	fieldtype="many-to-many" 
	CFC="FAQ" 
	linktable="FAQS_TAGS_REL" 
	FKColumn="TAG_ID" 
	inversejoincolumn="FAQ_ID" />

<!--- init --->
<cffunction name="init" returntype="Any" output="false" 
	hint="I am the constructor. I return myself.">
	
	<cfif not isPersisted(this)>
		<cfset variables.FAQs = arrayNew(1) />
	</cfif>

	<cfreturn this />
</cffunction>
</cfcomponent>