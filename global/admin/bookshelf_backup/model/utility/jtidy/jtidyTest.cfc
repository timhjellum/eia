<!--- Document Information -----------------------------------------------------
Build:				@@@revision-number@@@
Title:				jtidyTest.cfc
Author:				John Allen
Email:				jallen@figleaf.com
Company:			@@@company-name@@@
Website:			@@@web-site@@@
--------------------------------------------------------------------------------------- --->
<cfcomponent 
	displayname="jtidyTest.cfc" 
	output="false" 
	extends="fw1starter.model.basetest.BaseTest">

<!--- createjtidy --->
<cffunction name="createjtidy" access="private" 
    hint="Creates the jtidy to test.">
    <cfreturn createObject("component", "jtidy").init() />
</cffunction>

<!--- createjtidyNoInit --->
<cffunction name="createjtidyNoInit" access="private" 
    hint="Creates jtidy to test without running init().">
    <cfreturn createObject("component", "jtidy") />
</cffunction>

<!--- testInit --->
<cffunction name="testInit">
	<cfset var t = createjtidyNoInit() />
	<cfset t.init() />
    <cfset assertIsTypeOf(t, "#this.context#model.utility.jtidy.jtidy") />
</cffunction>


<!--- testMakexHTMLValid --->
<cffunction name="testMakexHTMLValid" output="false">
	<cfset var t = createjtidy() />
	<cfset var test = "" />
	<cfset var goodHTML = "" />

<cfsavecontent variable="test"><cfoutput><html>
	<head>
		<title>jtidy test page</title>
	</head>
	<body>
	
		<!-- examples from http://en.wikipedia.org/wiki/XHTML -->
		<table id="companyAccountsTable">
			<tbody>
				<tr>
					<td>mike henke</td>
				</tr>
			</tbody>
		</table>
		
		<form action="/index.cfm">
		
		<!-- Not putting quotation marks around attribute values -->
		<input type=text value=hello />
	
		</form>
		
		<!-- Not closing non-empty elements -->
		<p>
		
		<!-- Improperly nesting elements -->
		<em><strong>This is some text.</em></strong>
		
		<!-- Using the ampersand character outside of entities -->
		<div>Cars & Trucks</div>
		
		<!-- Not closing empty elements -->
		<br>
		
		<!-- Using the ampersand character outside of entities -->
		<div><a href="index.cfm?page=news&id=5">News</a></div>
		
		<!-- Using attribute minimization  -->
		<div><textarea readonly>READ-ONLY</textarea></div>
		
		<!-- Failing to recognize that XHTML elements and attributes are case sensitive -->
		<P ID="ONE">The Best Page Ever</P>
	
	</body>
</html></cfoutput></cfsavecontent>

	<cfset goodHTML = t.makexHTMLValid(test) />
	<cfset assertTrue(len(goodHTML), "I is not xml!") />
</cffunction>
</cfcomponent>