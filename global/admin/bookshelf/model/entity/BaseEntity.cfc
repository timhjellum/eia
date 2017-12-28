<cfcomponent 
	hint="I am the Base component. I provide several helper functions for ORM persisted objects." 
	displayname="Base"
	output="false">
	
<!--- ******************* Application specific udfs ********************** --->
<!--- ******************* Application specific udfs ********************** --->
<!--- ******************* Application specific udfs ********************** --->

<cfscript>
/**
 * Abbreviates a given string to roughly the given length, stripping any tags, making sure the ending doesn't chop a word in two, and adding an ellipsis character at the end.
 * Fix by Patrick McElhaney
 * v3 by Ken Fricklas kenf@accessnet.net, takes care of too many spaces in text.
 * 
 * @param string 	 String to use. (Required)
 * @param len 	 Length to use. (Required)
 * @return Returns a string. 
 * @author Gyrus (gyrus@norlonto.net) 
 * @version 3, September 6, 2005 
 */
function abbreviate(string,len) {
	var newString = REReplace(string, "<[^>]*>", " ", "ALL");
	var lastSpace = 0;
	newString = REReplace(newString, " \s*", " ", "ALL");
	if (len(newString) gt len) {
		newString = left(newString, len-2);
		lastSpace = find(" ", reverse(newString));
		lastSpace = len(newString) - lastSpace;
		newString = left(newString, lastSpace) & "  &##8230;";
	}	
	return newString;
}
</cfscript>


<cfscript>
/**
* Fixes text using Microsoft Latin-1 &quot;Extentions&quot;, namely ASCII characters 128-160.
* ASCII8217 mod by Tony Brandner
* 
* @param text      Text to be modified. (Required)
* @return Returns a string. 
* @author Shawn Porter (sporter@rit.net) 
* @version 2, September 2, 2010 
*/
function deMoronize (text) {
var i = 0;

// map incompatible non-ISO characters into plausible 
// substitutes
text = Replace(text, Chr(128), "&euro;", "All");

text = Replace(text, Chr(130), ",", "All");
text = Replace(text, Chr(131), "<em>f</em>", "All");
text = Replace(text, Chr(132), ",,", "All");
text = Replace(text, Chr(133), "...", "All");

text = Replace(text, Chr(136), "^", "All");

text = Replace(text, Chr(139), ")", "All");
text = Replace(text, Chr(140), "Oe", "All");

text = Replace(text, Chr(145), "`", "All");
text = Replace(text, Chr(146), "'", "All");
text = Replace(text, Chr(147), """", "All");
text = Replace(text, Chr(148), """", "All");
text = Replace(text, Chr(149), "*", "All");
text = Replace(text, Chr(150), "-", "All");
text = Replace(text, Chr(151), "--", "All");
text = Replace(text, Chr(152), "~", "All");
text = Replace(text, Chr(153), "&trade;", "All");

text = Replace(text, Chr(155), ")", "All");
text = Replace(text, Chr(156), "oe", "All");

// remove any remaining ASCII 128-159 characters
for (i = 128; i LTE 159; i = i + 1)
text = Replace(text, Chr(i), "", "All");

// map Latin-1 supplemental characters into
// their &name; encoded substitutes
text = Replace(text, Chr(160), "&nbsp;", "All");

text = Replace(text, Chr(163), "&pound;", "All");

text = Replace(text, Chr(169), "&copy;", "All");

text = Replace(text, Chr(176), "&deg;", "All");

// encode ASCII 160-255 using ? format
for (i = 160; i LTE 255; i = i + 1)
text = REReplace(text, "(#Chr(i)#)", "&###i#;", "All");

for (i = 8216; i LTE 8218; i = i + 1) text = Replace(text, Chr(i), "'", "All");

// supply missing semicolon at end of numeric entities
text = ReReplace(text, "&##([0-2][[:digit:]]{2})([^;])", "&##\1;\2", "All");

// fix obscure numeric rendering of &lt; &gt; &amp;
text = ReReplace(text, "&##038;", "&amp;", "All");
text = ReReplace(text, "&##060;", "&lt;", "All");
text = ReReplace(text, "&##062;", "&gt;", "All");

// supply missing semicolon at the end of &amp; &quot;
text = ReReplace(text, "&amp(^;)", "&amp;\1", "All");
text = ReReplace(text, "&quot(^;)", "&quot;\1", "All");

return text;
}
</cfscript>




<!--- ******* Normal Utitlty functions that should always exist ********** --->
<!--- ******* Normal Utitlty functions that should always exist ********** --->
<!--- ******* Normal Utitlty functions that should always exist ********** --->

<!--- IsPersisted --->
<cffunction name="IsPersisted" returntype="boolean" access="public" output="false"
	displayname="Is Persisted" hint="I check if I have been saved."
	description="I check if I have been saved by the ORM.">

	<cfset var result = false />

	<cfinvoke 
		component="#this#" 
		method="getID#this.getClassName()#" 
		returnvariable="result" /> 
	
	<cfif isDefined( "result" ) and len( result ) and result gt 0>
		
		<cfreturn true />
	<cfelse>
		
		<cfreturn false />
	</cfif>
</cffunction>



<!--- getID --->
<cffunction name="getID" returntype="numeric" access="public" output="false"
	displayname="Get ID" hint="I proxy the underlying objects getIDxxx method."
	description="I proxy the underlying objects getIDxxx method.">
   
	<cfset result = 0 />
    
	<cfif this.IsPersisted()>
		
		<cfinvoke 
			component="#this#" 
			method="getID#this.getClassName()#" 
			returnvariable="result" />
	</cfif>
	
	<cfif not isDefined("result")>
		
		<cfset result = 0 />
	</cfif>

	<cfreturn result />
</cffunction>



<!--- IsDirty --->
<cffunction name="IsDirty" returntype="boolean" access="public" output="false"
	displayname="Is Dirty" hint="Have there been any changes in the hibernate session?"
	description="Have there been any changes in the Hibernate session? Hibernates session is ""like"" CF's request scope.">
    
    <cfreturn ormGetSession().isDirty() />
</cffunction>



<!--- populate --->
<cffunction name="populate" returntype="void" access="public" output="false"
    displayname="Populate" hint="I populate my properties.."
    description="I populate my properties with a passed in structure of data.">
	
	<cfargument name="keys" type="struct" required="true" 
		hint="I am a structur of data to populate my properties with. I am requried." />

	<cfset var key = 0 />
	<cfset var property = 0 />
	<cfset var args = 0 />
	
	<cfloop collection="#arguments.keys#" item="key">

		<cfset args = {} />
		<cfset args[key] = arguments.keys[key] />

		<cftry>

			<cfinvoke 
				component="#this#" 
				method="set#Key#" 
				argumentCollection="#args#" />

			<cfcatch></cfcatch><!--- fail silently --->
		</cftry>
	
	</cfloop>
</cffunction>




<!--- save --->
<cffunction name="save" output="false" access="public" returntype="any" 
	displayname="Save" hint="I save myself" 
	description="I save myself">
	
	<cfset entitySave(this) />
	<cfset ormFlush() />

</cffunction>


<!--- delete--->
<cffunction name="delete" output="false" access="public" returntype="any" 
	displayname="Delete" hint="I delete myself" 
	description="I delete myself">
	
	<cfset entityDelete(this) />
	<cfset ormFlush() />

</cffunction>

<!---<cffunction name="getClassName" output="false" access="public">
<cftry>
	<cfreturn ListLast( GetMetaData( this ).fullname, "." )>
    <cfcatch>
    <cfdump var="#cfcatch#">
    </cfcatch>
    </cftry>
</cffunction>--->


<!--- 
All code below written by John Whish. See http://www.aliaspooryorik.com/blog.
Thanks, Thanks, Thanks THANKS John Whish!
--->

<cfscript>
/**
* returns an array of properties that make up the identifier
* @output false
*/
public array function getIdentifierColumnNames()
{
	return ORMGetSessionFactory().getClassMetadata( getClassName() ).getIdentifierColumnNames() ;
}

/**
* returns the name of the Entity
* @output false
*/
public string function getEntityName()
{
	return ORMGetSessionFactory().getClassMetadata( getClassName() ).getEntityName();
}

/**
* returns an array of persisted properties
* @output false
*/
public array function getPersistedProperties()
{
	return ORMGetSessionFactory().getAllClassMetadata()[ getClassName() ].getPropertyNames();
}


/**
* returns the subclass class name of this object
* @output false
*/
public string function getClassName()
{
	return ListLast( GetMetaData( this ).fullname, "." );
}


/**
* returns the value of all persisted entites for debugging only!
* @output false
*/
public struct function getMemento() 
{
	var i = 0;
	var result = {};
	var propertyname = "";
	var propertyvalue = "";
	for ( i=1; i<=ArrayLen( getPersistedProperties() ); i++ )
	{
	  propertyname = getPersistedProperties()[ i ];
	  //propertyvalue = variables[ propertyname ];
	  if ( StructKeyExists( variables, propertyname ) )
	  {
	    if ( IsSimpleValue( variables[ propertyname ] ) )
	    {
	      result[ propertyname ] = variables[ propertyname ];
	    }
	    else if ( IsObject(  variables[ propertyname ] ) )
	    {
	      result[ propertyname ] = "[object : fullname=" & GetMetaData( variables[ propertyname ] ).fullname & "]";
	    }
	    else if ( IsArray(  variables[ propertyname ] ) )
	    {
	      result[ propertyname ] = "[array : size=" & ArrayLen( variables[ propertyname ] ) & "]";
	    }
	    else if ( IsStruct(  variables[ propertyname ] ) )
	    {
	      result[ propertyname ] = "[struct : keys=" & StructKeyList( variables[ propertyname ] ) & "]";
	    }
	    else 
	    {
	      result[ propertyname ] = "[complex]";
	    }
	  }
	  else
	  {
	    result[ propertyname ] = "";
	  }
	}
	return result;
}
</cfscript>
</cfcomponent>