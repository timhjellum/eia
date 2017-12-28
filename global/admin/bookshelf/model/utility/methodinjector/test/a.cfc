<!--- Document Information -----------------------------------------------------
Build:      		@@@revision-number@@@
Title:      		a.cfc 
Author:     		John Allen
Email:      		jallen@figleaf.com
Company:    		@@@company-name@@@
Website:    		@@@web-site@@@
Purpose:    		I am a CFC for testing the MethodInjector used by the
					MethodInjectorTest.cfc
Modification Log:
Name 			Date 								Description
================================================================================
John Allen 		15/07/2009			Created
------------------------------------------------------------------------------->
<cfcomponent output="false">

<cffunction name="init" output="false" hint="I return myself.">
	<cfreturn this />
</cffunction>

<cffunction name="beTrue" output="false" hint="I return boolean ""true"".">
	<cfreturn true />
</cffunction>

<cffunction name="beFalse" output="false" hint="I return boolean ""false"".">
	<cfreturn false />
</cffunction>
</cfcomponent>