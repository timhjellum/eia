<!--- Document Information -----------------------------------------------------
Build:				@@@revision-number@@@
Title:				SessionFactoryTest.cfc
Author:				John Allen
Email:				jallen@figleaf.com
Company:			@@@company-name@@@
Website:			@@@web-site@@@
------------------------------------------------------------------------------>
<cfcomponent 
	displayname="SessionFactory Test" 
	output="false" 
	extends="fw1starter.model.basetest.BaseTest">

<cfset factory = application.beanFactory />

<!--- createGateway --->
<cffunction name="createSessionFactory" access="private" 
    hint="Creates the Gateway to test.">
    <cfreturn createObject("component", "#this.context#model.session.SessionFactory").init() />
</cffunction>

<!--- createGatewayNoInit --->
<cffunction name="createSessionFactoryNoInit" access="private" 
    hint="Creates Gateway to test without running init().">
    <cfreturn createObject("component", "#this.context#model.session.SessionFactory") />
</cffunction>


<!--- testInit --->
<cffunction name="testInit" output="false">
    <cfset var sf = createSessionFactoryNoInit() />
	<cfset var gateway = application.beanfactory.getBean("ORMGateway") />
    <cfset sf.init(gateway) />
    
    <cfset assertIsTypeOf(sf, "#this.context#model.session.SessionFactory") />
</cffunction>


<!--- testGetUserSession --->
<cffunction name="testGetUserSession" output="false">
	<cfset var gateway = application.beanfactory.getBean("ORMGateway") />
	<cfset var sf = createSessionFactoryNoInit() />
	<cfset var userSession = 0 />
	
	<cfset sf.init(gateway) />
	<cfset userSession = sf.getUserSession() />

	<cfset assertIsTypeOf(userSession, "#this.context#model.session.UserSession") />
</cffunction>


<!--- testKillUserSession --->
<cffunction name="testKillUserSession" output="false">
	<cfset var gateway = application.beanfactory.getBean("ORMGateway") />
	<cfset var sf = createSessionFactoryNoInit() />
	
	<cfset sf.init(gateway) />
	<cfset userSession = sf.getUserSession() />
	
	<!--- make sure that it was created --->
	<cfset assertIsTypeOf(userSession, "#this.context#model.session.UserSession") />
	
	<cfset sf.KillUserSession() />
	
	<cfset assertTrue(not isDefined("session.userbean")) />
	
</cffunction>
</cfcomponent>