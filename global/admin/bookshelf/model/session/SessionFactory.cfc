<cfcomponent 
	displayname="Session Service" 
	hint="I handel access to a users session bean. A simple factory." 
	output="false" 
	accessors="true">
	
<cfproperty name="ORMGateway" getter="true" setter="true" />

<!--- ******************************* Public ***************************** --->
<!--- init --->
<cffunction name="init" returntype="SessionFactory" access="public" output="false" 
	displayname="Init" hint="I am the constructor." 
	description="I am the pseudo constructor for this CFC. I return an instance of myself.">
	
	<cfargument name="ORMGateway" type="component" required="true" 
		hint="I am the ORM Gateway. I am requried." />

	<cfset setORMGateway(arguments.ORMGateway) />
		
	<cfreturn this />
</cffunction>



<!--- getUserSession --->
<cffunction name="getUserSession" returntype="component" access="public" output="false"
    displayname="Get User Session" hint="I return a users session object."
    description="I return a users session object.">

	<cfif not structKeyExists(session, "userBean")>
		<cfset session.userBean = createObject("component", "UserSession").init(
												ORMGateway = getORMGateway()
												) />
	</cfif>

	<cfreturn session.userBean />
</cffunction>



<!--- killUserSession --->
<cffunction name="killUserSession" returntype="boolean" access="public" output="false"
    displayname="Kill User Session" hint="I kill a Users session."
    description="I kill a Users session. I return false if the session wasn't in session.">
	
	<cfif structKeyExists(session, "userBean")>
		<cfset structDelete(session, "userBean") />
		<cfreturn true />
	<cfelse><!--- don't fail, just return false --->
		<cfreturn false />
	</cfif>
</cffunction>

<!--- ******************************* Package **************************** --->
<!--- ******************************* Private **************************** --->
</cfcomponent>