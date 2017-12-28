<cfcomponent output="false" extends="fw1starter.model.basetest.BaseTest">

<!--- createResponce --->
<cffunction name="createResponceFactory" output="false" access="private">
	<cfreturn createObject("component", "#this.context#model.responce.ResponceFactory").init() />
</cffunction>


<!--- createResponceNoInit --->
<cffunction name="createResponceFactoryNoInit" output="false" access="private">
	<cfreturn createObject("component", "#this.context#model.responce.ResponceFactory") />
</cffunction>


<!--- testGetResponce --->
<cffunction name="testGetResponce" output="false" access="public">
	<cfset var rf = createResponceFactory() />
	<cfset var r = rf.getResponce() />
	<cfset assertIsTypeOf(r, "#this.context#model.responce.Responce") />
</cffunction>



<!--- testGetResponce100TimesForThreadSafeness --->
<cffunction name="testGetResponce100TimesForThreadSafeness" output="false" access="public">
	<cfset var rf = createResponceFactory() />
	<cfset var r = rf.getResponce() />
	<cfset var testValue = createUUID() />
	<cfset var rSecondTimeAround = 0 />

	<cfset r.addMessage(testValue, "feedback")>
	
	<cfloop from="1" to="100" index="x">
		<!--- 		
		<cfset rSecondTimeAround = rf.getResponce().getMessages("feeback") />
		<cfset assertTrue( 1 eq 2, "Nope: #rSecondTimeAround#") /> 
		--->
	</cfloop>

</cffunction>


<!--- testInit --->
<cffunction name="testInit" output="false" access="public">
	<cfset var rf = createResponceFactoryNoInit() />
	<cfset rf = rf.init() />
	<cfset assertIsTypeOf(rf, "#this.context#model.responce.ResponceFactory") />
</cffunction>
</cfcomponent>