<cfcomponent 
	displayname="I manage access to Responce object" 
	hint="I manage access to Responce object" 
	output="false">

<!--- ******************************* Public ***************************** --->
<!--- init --->
<cffunction name="init" returntype="ResponceFactory" access="public" output="false" 
	displayname="Init" hint="I am the constructor." 
	description="I am the pseudo constructor for this CFC. I return an instance of myself.">
	
	<cfreturn this />
</cffunction>



<!--- getResponce --->
<cffunction name="getResponce" returntype="component" access="public" output="false"
    displayname="Get Responce" hint="I return a responce object."
    description="I return a responce object.">
    
	<cfif not isDefined( "request._responce" )>
		<cfset request._responce = createObject("component", "Responce").init() />
	</cfif>
	
    <cfreturn request._responce />
</cffunction>
<!--- ***************************** Properties *************************** --->
<!--- ******************************* Package **************************** --->
<!--- ******************************* Private **************************** --->
</cfcomponent>