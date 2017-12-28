<!--- Document Information -----------------------------------------------------
Build:				@@@revision-number@@@
Title:				FileTest.cfc
Author:				John Allen
Email:				jallen@figleaf.com
Company:			@@@company-name@@@
Website:			@@@web-site@@@
--------------------------------------------------------------------------------------- --->
<cfcomponent 
	displayname="FileTest.cfc" 
	output="false" 
	extends="fw1starter.model.basetest.BaseTest">

<cfset variables.testFile = expandPath(".") & "/model/utility/filesystem/testtxt.txt" />


<!--- createFile --->
<cffunction name="createFile" access="private" 
    hint="Creates the File to test.">
    <cfreturn createObject("component", "File").init() />
</cffunction>

<!--- createFileNoInit --->
<cffunction name="createFileNoInit" access="private" 
    hint="Creates File to test without running init().">
    <cfreturn createObject("component", "File") />
</cffunction>

<!--- testInit --->
<cffunction name="testInit">
    <cfset var f = createFileNoInit() />
	<cfset f = f.init() />
	<cfset assertIsTypeOf(f, "#this.context#model.utility.filesystem.file") />
</cffunction>


<!--- testGetMimeType --->
<cffunction name="testGetMimeType" output="false">
	<cfset var f = createFile() />
	<cfset var mimeType = f.getMimeType("testtxt.txt") />
	<cfset assertTrue(mimeType eq "text/plain", "The type of the tested file is not 'text/plain'.") />
	
</cffunction>


<!--- testGetFileSize --->
<cffunction name="testGetFileSize" output="false">
	<cfset var f = createFile() />
	<cfset var size = f.getFileSize(variables.testFile) />
	<cfset assertTrue(isNumeric(size), "The value returned was NOT numeric.") />
</cffunction>


<!--- testGetFileProperties --->
<cffunction name="testGetFileProperties" output="false">
	<cfset var f = createFile() />
	<cfset var data = f.GetFileProperties(variables.testFile) />
	<cfset assertIsStruct(data, "The value returned was NOT a structure containing the files properties.") />
</cffunction>
</cfcomponent>