<cfcomponent 
	displayname="ORM Gateway" 
	hint="I am the ORM Gateway" 
	output="false">

<!--- ******************************* Public ***************************** --->
<!--- init --->
<cffunction name="init" returntype="ORMGateway" access="public" output="false" 
	displayname="Init" hint="I am the constructor." 
	description="I am the pseudo constructor for this CFC. I return an instance of myself.">
	
	<cfreturn this />
</cffunction>



<!--- get --->
<cffunction name="get" returntype="any" access="public" output="false"
	displayname="Get" hint="I return a persisted OR new object by name."
	description="I return a persisted OR new object by name.">
	
	<cfargument name="type" type="string" required="true" 
    	hint="I am the name of the persisted object to get.<br />I a requried." />
	<cfargument name="ID" type="any" required="False" default="0" 
    	hint="I am the ID of the Object. I defalut to ""0""." />

	<cfset var result = 0 />

	<cfif isNumeric( arguments.ID )>
		<cfset result = EntityLoad( "#arguments.type#", arguments.ID, true ) />
	</cfif>

	<cfif isDefined( "result" ) and not isNumeric( result )>
    	<cfreturn result />
	<cfelse>
		<cfreturn EntityNew( "#arguments.type#" ) />
	</cfif>	
</cffunction>



<!--- list --->
<cffunction name="list" returntype="any" access="public" output="false"
	displayname="List" hint="I return an array of objects by type. I can filter by a struct of properties."
	description="I return an array of objects by type. I can filter by a struct of properties.">

	<cfargument name="type" type="string" required="true" 
    	hint="I am the name of the persisted object to get. I a requried." />
	<cfargument name="filterMap" type="any" default="" required="false" 
		hint="I am the structure to filter by. I default to an empty string." />
	<cfargument name="sortOrder" type="string" default="" required="false" 
		hint="I am the structure to filter by. I default to an empty string." />

	<!--- filtered and sorted --->
	<cfif isStruct( arguments.filterMap ) and len( arguments.sortOrder )>
		<cfreturn EntityLoad("#arguments.type#", arguments.filterMap, "#arguments.sortOrder#") />
	<!--- filtered --->
	<cfelseif isStruct( arguments.filterMap )>
		<cfreturn EntityLoad( "#arguments.type#", arguments.filterMap ) />
	<!--- sorted --->
	<cfelseif len( arguments.sortOrder )>
		<cfreturn EntityLoad( "#arguments.type#", {}, "#arguments.sortOrder#" ) />
	<!--- basic default list --->
	<cfelse>
		<cfreturn EntityLoad( "#arguments.type#" ) />
	</cfif>
</cffunction>

</cfcomponent>