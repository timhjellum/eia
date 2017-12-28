<cfcomponent>

<!--- someMethodName --->
<cffunction name="someMethodName" returntype="any" access="remote" output="false"
	displayname="someMethodName" hint="I am a remote method."
	discription="I am a remote method.">
	
	<cfargument name="data" default="" />

	<!--- always use a try catch and return the error, easy to debug with FireBug --->
	<cftry>

		<cfreturn true />
	<cfcatch>
		<cfreturn cfcatch />
	</cfcatch>
	</cftry>
</cffunction>
</cfcomponent>