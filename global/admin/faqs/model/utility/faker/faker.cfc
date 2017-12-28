<cfcomponent name="faker" displayname="Faker" output="false" extends="ContentGenerator">
	
<cffunction name="init" output="false" access="public">
	<cfreturn this />
</cffunction>

<cffunction name="getFirstname" return="String" output="false">
	
	<cfset var sReturn = '' />
	
	<!--- get the firstname --->
	<cfset sReturn = this.aFirstnames[randRange(1, ArrayLen(this.aFirstnames))] />
	
	<cfreturn sReturn />
	
</cffunction>

<cffunction name="getFirstnames" return="Array" output="false">
	<cfargument name="multiple" type="numeric" default="1" />
	
	<cfset var aReturn = ArrayNew(1) />
	<cfset var sName = '' />
	
	<cfloop from="1" to="#arguments.multiple#" index="i">
	
		<!--- get the firstname --->
		<cfset sName = this.aFirstnames[randRange(1, ArrayLen(this.aFirstnames))] />
		<cfset ArrayAppend(aReturn, sName) />
	
	</cfloop>
	
	<cfreturn aReturn />
	
</cffunction>

<cffunction name="getSurname" return="String" output="false">
	
	<cfset var sReturn = '' />
	
	<!--- get the firstname --->
	<cfset sReturn = this.aSurnames[randRange(1, ArrayLen(this.aSurnames))] />
	
	<cfreturn sReturn />
	
</cffunction>

<cffunction name="getSurnames" return="Array" output="false">
	<cfargument name="multiple" type="numeric" default="2" />
	
	<cfset var aReturn = ArrayNew(1) />
	<cfset var sName = '' />
	
	<cfloop from="1" to="#arguments.multiple#" index="i">
	
		<!--- get the firstname --->
		<cfset sName = this.aSurnames[randRange(1, ArrayLen(this.aSurnames))] />
		<cfset ArrayAppend(aReturn, sName) />
	
	</cfloop>
	
	<cfreturn aReturn />
	
</cffunction>

<cffunction name="getName" return="String" output="false">
	
	<cfset var sReturn = '' />
	
	<!--- get the firstname, then the surname --->
	<cfset sReturn = this.aFirstnames[randRange(1, ArrayLen(this.aFirstnames))] />
	<cfset sReturn &= ' ' & this.aSurnames[randRange(1, ArrayLen(this.aSurnames))] />
	
	<cfreturn sReturn />
	
</cffunction>

<cffunction name="getNames" return="Array" output="false">
	<cfargument name="multiple" type="numeric" default="2" />
	
	<cfset var aReturn = ArrayNew(1) />
	<cfset var sName = '' />
	
	<cfloop from="1" to="#arguments.multiple#" index="i">
	
		<!--- get the firstname --->
		<cfset sName = this.aFirstnames[randRange(1, ArrayLen(this.aFirstnames))] />
		<cfset sName &= ' ' & this.aSurnames[randRange(1, ArrayLen(this.aSurnames))] />
		
		<cfset ArrayAppend(aReturn, sName) />
			
	</cfloop>
	
	<cfreturn aReturn />
	
</cffunction>

<cffunction name="getStreetSuffix" return="String" output="false">
	
	<cfset var sReturn = '' />
	
	<cfset sReturn = this.aStreetSuffix[randRange(1,ArrayLen(this.aStreetSuffix))] />
	
	<cfreturn sReturn />

</cffunction>

<cffunction name="getStreetName" return="String" output="false">
	
	<cfset var sReturn = '' />
	<cfset var nIndex= randRange(1, 2) />
	
	<cfswitch expression="#nIndex#">
		
		<cfcase value="2">
			<cfset sReturn = getFirstname() & ' ' & getStreetSuffix() />
		</cfcase>
		
		<cfdefaultcase>
			<cfset sReturn = getSurname() & ' ' & getStreetSuffix() />
		</cfdefaultcase>
		
	</cfswitch>
	
	<cfreturn sReturn />

</cffunction>

<cffunction name="getCityPrefix" return="String" output="false">
	
	<cfset var sReturn = '' />
	
	<cfset sReturn = this.aCitiesPrefix[randRange(1,ArrayLen(this.aCitiesPrefix))] />
	
	<cfreturn sReturn />

</cffunction>

<cffunction name="getCitySuffix" return="String" output="false">
	
	<cfset var sReturn = '' />
	
	<cfset sReturn = this.aCitiesSuffix[randRange(1,ArrayLen(this.aCitiesSuffix))] />
	
	<cfreturn sReturn />

</cffunction>

<cffunction name="getCity" return="String" output="false">
	
	<cfset var sReturn = '' />
	<cfset var nIndex= randRange(1, 4) />
	
	<cfswitch expression="#nIndex#">
		
		<cfcase value="2">
			<cfset sReturn = getCityPrefix() & ' ' & getFirstname() & getCitySuffix() />
		</cfcase>
		
		<cfcase value="3">
			<cfset sReturn = getCityPrefix() & ' ' & getFirstname() />
		</cfcase>
		
		<cfcase value="4">
			<cfset sReturn = getFirstname() & getCitySuffix() />
		</cfcase>
		
		<cfdefaultcase>
			<cfset sReturn = getSurname() & getCitySuffix() />
		</cfdefaultcase>
		
	</cfswitch>
	
	<cfreturn sReturn />

</cffunction>

<cffunction name="getQuery" return="Query" output="false">
	<cfargument name="multiple" type="numeric" default="2" />
	<cfargument name="lColumns" type="string" default="firstname,surname" />
	
	<cfset var qReturn = QueryNew(#arguments.lColumns#) />
	<cfset var sFirstname = '' />
	<cfset var sSurname = '' />
	
	<cfloop from="1" to="#arguments.multiple#" index="i">
	
		<!--- get the firstname --->
		<cfset sFirstname = getFirstname() />
		<cfset sSurname = getSurname() />
		
		<cfset QueryAddRow(qReturn) />
		<cfset QuerySetCell(qReturn, 'firstname', sFirstname) />
		<cfset QuerySetCell(qReturn, 'surname', sSurname) />
			
	</cfloop>
	
	<cfreturn qReturn />
	
</cffunction>

<cffunction name="numerify" return="String" output="false">
	<cfargument name="format" type="string" default="######## ###### ######" />
	
	<cfset var sReturn = arguments.format />
	
	<cfloop from="1" to="#len(arguments.format)#" index="i">
		<cfset nRandom = randRange(0,9) />
		<cfset sReturn = reReplace(sReturn, '\##', nRandom) />
	</cfloop>
	
	<cfreturn sReturn />
	
</cffunction>

<cffunction name="letterify" return="String" output="false">
	<cfargument name="format" type="string" default="the c?t s?t on the m?t" />
	
	<cfset var sReturn = arguments.format />
	
	<cfloop from="1" to="#len(arguments.format)#" index="i">
		<cfset nRandom = randRange(97,122) />
		<cfset sReturn = reReplace(sReturn, '\?', chr(nRandom)) />
	</cfloop>
	
	<cfreturn sReturn />
	
</cffunction>

<cffunction name="bothify" return="String" output="false">
	<cfargument name="format" type="string" default="##?##?##" />
	
	<cfset var sReturn = letterify(numerify(arguments.format)) />
	
	<cfreturn sReturn />
	
</cffunction>

<cffunction name="getState" return="String" output="false">
	<cfargument name="locale" type="string" default="US" />
	
	<cfset var sReturn = '' />
	
	<cfif NOT ListContains('AU,US,UK', arguments.locale)>
		<cfthrow detail="Invalid locale found. You can only use AU, US or UK." errorCode="invalidLocale" type="faker" />
	</cfif>
	
	<cfset sReturn = this['aStates_' & arguments.locale][randRange(1, ArrayLen(this['aStates_' & arguments.locale]))] />
	
	<cfreturn sReturn />
	
</cffunction>

<cffunction name="getStateAbbr" return="String" output="false">
	<cfargument name="locale" type="string" default="US" />
	
	<cfset var sReturn = '' />
	
	<cfif NOT ListContains('AU,US', arguments.locale)>
		<cfthrow detail="Invalid locale found. You can only use AU, US." errorCode="invalidLocale" type="faker" />
	</cfif>
	
	<cfset sReturn = this['aStatesAbbr_' & arguments.locale][randRange(1, ArrayLen(this['aStatesAbbr_' & arguments.locale]))] />
	
	<cfreturn sReturn />
	
</cffunction>
	
	<cfinclude template="faker/fakerlib.cfm" />
</cfcomponent>