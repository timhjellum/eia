<!--- Document Information -----------------------------------------------------
Build:      	@@@revision-number@@@
Title:      	Input.cfc
Author:     	John Allen
Email:      	jallen@figleaf.com
Company:    	@@@company-name@@@
Website:    	@@@web-site@@@
Purpose:    	I am a scope that merges the FORM and URL scopes.
Modification Log:
Name 			Date 					Description
================================================================================
John Allen 		04/09/2008			Created
------------------------------------------------------------------------------->
<cfcomponent displayname="Input" output="false"
	hint="I merge the FORM and URL scopes. I also do some fancy helpfull things.">

<!--- ****************************** Public ****************************** --->
<!--- init --->
<cffunction name="init" returntype="Input" access="public" output="false" 
	displayname="Init" hint="I am the constructor." 
	description="I am the pseudo constructor. I return an instance of myself.">
	
	<cfargument name="presidence" default="FORM" 
		hint="I am the presidence of the URL or FORM scope to merge. I default to 'FORM'." />

	<cfset variables.Precedence = arguments.presidence />

	<cfset load() />

	<cfreturn this />
</cffunction>



<!--- getAllValues --->
<cffunction name="getAllValues" returntype="any" access="public" output="false"
	displayname="Get All Values" hint="I return all of the FORM and URL variables."
	description="I return all of the FORM and URL variables.">
	
	<!--- always load, don't know if they added anything --->
	<cfreturn load() />
</cffunction>



<!--- getValue --->
<cffunction name="getValue" access="public" output="false"
	displayname="Get Value" hint="I return a value from the FROM or URL scope by name."
	description="I return a value from the FORM or URL scope by name..">
	
	<cfargument name="name" 
		hint="I am the name of the FORM or URL value. I am requried." />
	
	<!--- always load, don't know if they added anything --->
	<cfreturn structFind( load(), arguments.name ) />
</cffunction>



<!--- load --->
<cffunction name="load" access="public" output="false"
	displayname="Load" hint="I merge the form and URL scopes."
	description="I merge the form and URL scopes into a single structure set to the reqest scope.">
	
	<cfargument name="Precedence" default="#variables.Precedence#" 
		hint="I am the presidence to load FORM or URL variables." />
	
	<cfset request._figFactorInputContainer = structNew() />

	<cfif arguments.Precedence eq "URL">
		<cfset structAppend(request._figFactorInputContainer, FORM) />
		<cfset structAppend(request._figFactorInputContainer, URL) />
	<cfelse>
		<cfset structAppend(request._figFactorInputContainer, URL) />
		<cfset structAppend(request._figFactorInputContainer, FORM) />
	</cfif>

	<cfreturn request._figFactorInputContainer />
</cffunction>
<!--- ****************************** Package ***************************** --->
<!--- ****************************** Private ***************************** --->
</cfcomponent>