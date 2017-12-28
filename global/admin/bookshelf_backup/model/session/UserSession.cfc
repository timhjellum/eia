<cfcomponent 
	accessors="true"  
	displayname="User Session Bean" 
	hint="I model a Users Session." 
	output="false">

<!--- ***************************** Properties *************************** --->
<cfproperty name="IDUser" type="any" default="" getter="true" setter="true"/>
<cfproperty name="LoggedIn" type="boolean" default="false" getter="true" setter="true"/>
<cfproperty name="IsAdmin" type="boolean" default="false" getter="true" setter="true"/>
<cfproperty name="SessionStartTime" getter="true" setter="true"/>
<cfproperty name="LogInTime" getter="true" setter="true"/>
<cfproperty name="pageEditTabIndex" type="numeric" default="0" getter="true" setter="true"/>



<!--- ******************************* Public ***************************** --->
<!--- init --->
<cffunction name="init" returntype="UserSession" access="public" output="false" 
	displayname="Init" hint="I am the constructor." 
	description="I am the pseudo constructor for this CFC. I return an instance of myself.">

	<cfargument name="ORMGateway" type="component" required="true" 
		hint="I am the ORM Gateway. I am requried." />

	<cfset setORMGateway( arguments.ORMGateway ) />
	<cfset this.setLoggedIn( false ) />
	
	<cfreturn this />
</cffunction>



<!--- login --->
<cffunction name="login" returntype="boolean" access="public" output="false"
    displayname="Login" hint="I attempt to log a user into the application."
    description="I attempt to log a user into the application.">
    
	<cfargument name="username" type="string" required="false" default=""
		hint="I am the 'username'. I default to an empty string." />
	<cfargument name="password" type="string" required="false" default=""
		hint="I am the 'password'. I default to an empty string." />

	<cfset var loginTry = attemptLogin(
							username = arguments.username, 
							password= arguments.password) />

	<cfif loginTry.authenticated>
	
		<cfset loginTry.object.setLastLoggedIn() />
		
		<cfset this.setIDUser( loginTry.object.getID() ) />
		<cfset this.setLoggedIn( true ) />
		<cfset this.setSessionStartTime( now() ) />
		<cfset this.setIsAdmin(loginTry.object.getIsAdmin()) />
		<cfset this.setLogInTime( loginTry.object.getLastLoggedIn() ) />
	</cfif>

	<cfreturn this.getLoggedIn() />
</cffunction>



<!--- logout --->
<cffunction name="logout" returntype="void" access="public" output="false"
    displayname="Do Logout" hint="I log myself out of the application."
    description="I log myself out of the application.">
    
    <cfset this.setLoggedIn( false ) />
	
</cffunction>



<!--- getPersistedAuthor --->
<cffunction name="getPersistedAuthor" returntype="any" access="public" output="false"
	displayname="Get Persisted Author" hint="I return the related Author entity." 
	description="I return the related Author entity.">
	
	woe
	<cfabort />
</cffunction>



<!--- ORMGateway --->
<cffunction name="setORMGateway" output="false">
	<cfargument name="ORMGateway"/>
	<cfset variables.ORMGateway = arguments.ORMGateway />
</cffunction>
<cffunction name="getORMGateway" output="false">
	<cfreturn variables.ORMGateway />
</cffunction>



<!--- ******************************* Package **************************** --->
<!--- ******************************* Private **************************** --->
<!--- attemptLogin --->
<cffunction name="attemptLogin" returntype="any" access="private" output="false"
    displayname="Attempt Logout" hint="I attempt to log a user into the application."
    description="I attempt to log a user into the application. I am a wrapper for the log in code.">
    
    <cfargument name="username" type="string" required="true" 
		hint="I am the 'username'. I am required." />
	<cfargument name="password" type="string" required="true" 
		hint="I am the 'password'. I am required." />
    
	<cfset var result = {authenticated = false, object = 0} />

	<cfset var test = getORMGateway().list(type = "Author", filterMap = {username = arguments.username}) />
	
	<cfif arrayLen(test) eq 1>
		<cfif test[1].validatePassword(arguments.password)>
			<cfset result.authenticated = true />
			<cfset result.object = test[1] />
		</cfif>
	</cfif>

	<cfreturn result />
</cffunction>
</cfcomponent>