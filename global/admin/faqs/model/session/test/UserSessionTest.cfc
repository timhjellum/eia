<!--- Document Information -----------------------------------------------------
Build:				@@@revision-number@@@
Title:				UserSessionBeanTest.cfc
Author:				John Allen
username:			jallen@figleaf.com
Company:			@@@company-name@@@
Website:			@@@web-site@@@
--------------------------------------------------------------------------------------- --->
<cfcomponent 
	displayname="User Session Bean Test" 
	output="false" 
	extends="fw1starter.model.basetest.BaseTest">


<!--- createUserSessionBean --->
<cffunction name="createUserSession" access="private" 
    hint="Creates the UserSessionBean to test.">
    <cfreturn createObject("component", "#this.context#model.session.UserSession").init(application.beanfactory.getBean("ORMGateway")) />
</cffunction>

<!--- createUserSessionNoInit --->
<cffunction name="createUserSessionNoInit" access="private" 
    hint="Creates UserSession to test without running init().">
    
    <cfreturn createObject("component", "#this.context#model.session.UserSession") />
</cffunction>



<!--- testInit --->
<cffunction name="testInit">
    <cfset us = createUserSessionNoInit() />
	<cfset us.init(application.beanfactory.getBean("ORMGateway")) />
    
    <cfset assertIsTypeOf(us, "#this.context#model.session.UserSession") />
</cffunction>



<!--- testDefaultValues --->
<cffunction name="testDefaultValues" output="false">
	<cfset us = createUserSession() />

	<cfset assertTrue(us.getLoggedIn() eq false, "The user is logged in!. THEY SHOULD NOT BE!") />
</cffunction>



<!--- testSucessfullLogin --->
<cffunction name="testSucessfullLogin" output="false">
	<cfset us = createUserSession() />
	
	<cfset result = us.login("admin", "admin") />
	<cfset assertTrue(result, "WOW, you were able to login with Foo and Bar! That is bad.") />
	
	<!--- go ahead and kill the session vars --->
	<cfset us.Logout() />
</cffunction>



<!--- testSucessfullLoginAndLogout --->
<cffunction name="testSucessfullLoginAndLogout" output="false">
	<cfset us = createUserSession() />
	
	<cfset result = us.login("admin", "admin") />
	<cfset assertTrue(result, "WOW, you were able to login with Foo and Bar! That is bad.") />
	
	<!--- go ahead and kill the session vars --->
	<cfset us.Logout() />
	
	<cfset assertTrue(us.getLoggedIn() eq false, "The user is still Logged IN!. THEY SHOULD NOT BE!") />
</cffunction>

</cfcomponent>