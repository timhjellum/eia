<!--- Document Information -----------------------------------------------------
Build:     @@@revision-number@@@
Title:     MethodInjector.cfc
Author:	   John Allen
Email:	   jallen@figleaf.com
Company:   @@@company-name@@@
Website:   @@@web-site@@@
Purpose:   I inject method from one CFC into another.
Usage:	   
Modification Log:
Name	 Date	 Description
================================================================================
John Allen	 19/06/2008	 Created
------------------------------------------------------------------------------->
<cfcomponent 
	name="MethodInjector" 
	displayname="Method Injector"
	hint="Injects methods into CFCs" 
	output="false">

<cfset instance = StructNew() />

<!--- ************************ Public ************************ --->

<cffunction name="init" hint="Constructor" access="public" returntype="MethodInjector" output="false">
	
	<cfreturn this />
</cffunction>


<!--- injectCFCIntoCFC --->
<cffunction name="injectCFCIntoCFC" returntype="void" access="public" output="false"
    displayname="Inject CFC Into CFC" hint="I inject methods from one CFC into another."
    description="I inject methods from one CFC into another.">
    
	<cfargument name="sourceCFC" type="component" required="true" 
		hint="I am the source CFC. I am requried." />
	<cfargument name="targetCFC" type="component" required="true" 
		hint="I am the target CFC. I am requried." />
	<cfargument name="excludeList" type="string" required="false" default="init"
		hint="I am a list of methods to exlcude." />
	<cfargument name="alwaysExcludeInit" type="string" required="false" default="true"
		hint="Should I also inject the init method?. I defalut to 'true'." />	
	
	<cfset var x = 0 />

	<cfif arguments.alwaysExcludeInit>
		<cfset arguments.excludeList = listAppend(arguments.excludeList, "init")  />
	</cfif>
	
	<cfloop array="#getMetaData(arguments.sourceCFC).functions#" index="x">
		<cfif not listContains(arguments.excludeList, x.name)>
			<cfset injectMethod(arguments.targetCFC, arguments.sourceCFC[x.name]) />
		</cfif>
	</cfloop>
	
</cffunction>


<!--- injectMethod --->
<cffunction name="injectMethod" hint="I inject a method into a CFC." access="public" output="false">
	
	<cfargument name="CFC" hint="The cfc to inject the method into" required="Yes" />
	<cfargument name="UDF" hint="UDF to be checked" required="Yes" />

	<cfset arguments.CFC[getMetaData(arguments.UDF).name] = arguments.UDF />
	
	<cfreturn arguments.CFC />
</cffunction>

<!--- *********** Package *********** --->
<!--- *********** Private *********** --->
</cfcomponent>