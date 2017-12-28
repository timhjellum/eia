<!--- Document Information -----------------------------------------------------
Build:      		@@@revision-number@@@
Title:      		MethodInjector.cfc 
Author:     		John Allen
Email:      		jallen@figleaf.com
Company:    		@@@company-name@@@
Website:    		@@@web-site@@@
Purpose:    		I am the test cfc for the MethodInjector.
Modification Log:
Name 			Date 								Description
================================================================================
John Allen 		14/02/2008			Created
------------------------------------------------------------------------------->
<cfcomponent 
	output="false"
	displayname="Method Injector Test CFC"
	hint="I am the test cfc for the MethodInjector." 
	extends="fw1starter.model.basetest.BaseTest">

<!--- createMethodInjector --->
<cffunction name="createMethodInjector" access="private" output="false">
	<cfreturn createObject("component", "MethodInjector").init() />
</cffunction>

<!--- createMethodInjectorNoInit --->
<cffunction name="createMethodInjectorNoInit" access="private" output="false">
	<cfreturn createObject("component", "MethodInjector") />
</cffunction>

<!--- createA --->
<cffunction name="createA" access="private" output="false">
	<cfreturn createObject("component", "test.a").init() />
</cffunction>

<!--- createB --->
<cffunction name="createB" access="private" output="false">
	<cfreturn createObject("component", "test.b").init() />
</cffunction>



<!--- testInjectCFCIntoCFC --->
<cffunction name="testInjectCFCIntoCFC" access="public" output="false">
	
	<cfset var mj = createMethodInjector() />
	<cfset var a = createA() />
	<cfset var b = createB() />
	
	<cfset mj.InjectCFCIntoCFC(a,b) />

	<cfset assertTrue(b.beTrue(), "The method returned something other than true!") />
	<cfset assertFalse(b.beFalse(), "The method returned something other than true!") />
</cffunction>



<!--- testInjectCFCIntoCFCWithExcludeList --->
<cffunction name="testInjectCFCIntoCFCWithExcludeList" access="public" output="false">
	
	<cfset var mj = createMethodInjector() />
	<cfset var a = createA() />
	<cfset var b = createB() />
	<cfset var test = true />
	
	<cfset mj.InjectCFCIntoCFC(a,b,"beFalse") />

	<cftry>
		<cfset test = b.beFalse() />
		<cfcatch>
			<cfset test = false>
		</cfcatch>
	</cftry>
	<cfset assertFalse(test, "The method returned something other than true!") />

</cffunction>



<!--- testInjectMethod --->
<cffunction name="testInjectMethod" access="public" output="false">

	<cfset var mj = createMethodInjector() />
	<cfset var a = createA() />
	<cfset var b = createB() />
	
	<cfset mj.injectMethod(b,a.beTrue) />

	<cfset assertTrue(b.beTrue(), "The method returned something other than true!") />
</cffunction>


<!--- testInit --->
<cffunction name="testInit" access="public" output="false">

	<cfset var mj = createMethodInjectorNoInit() />
	<cfset assertIsTypeOf(mj.init(), "#this.context#model.utility.methodinjector.MethodInjector") />
</cffunction>

</cfcomponent>