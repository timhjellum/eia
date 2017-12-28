<cfcomponent 
	displayname="Base Controller" 
	hint="I am the Base Controller. All controllers should extend me" 
	output="false" 
	accessors="true">

<!--- ******************************* Properties ************************* --->
<cfproperty name="framework" getter="true" setter="true" />



<!--- ******************************* Public ***************************** --->
<!--- init --->
<cffunction name="init" returntype="component" access="public" output="false" 
	displayname="Init" hint="I am the constructor." 
	description="I am the pseudo constructor for this CFC. I return myself.">

	<cfargument name="fw" type="component" required="true" 
		hint="I am the FW/1 framework. I am requried." />

	<cfset setFramework( arguments.fw ) />
	
	<cfreturn this />
</cffunction>



<!--- getUserSession --->
<cffunction name="getUserSession" returntype="component" access="private" output="false"
    displayname="Get User Session" hint="I return the Users session object."
    description="I return the Users session object.">

    <cfreturn getFramework().getBeanFactory().getBean("SessionFactory").getUserSession() />
</cffunction>



<!--- getORMGateway --->
<cffunction name="getORMGateway" output="false">
	<cfreturn variables.ORMGateway />
</cffunction>
<!--- setORMGateway --->
<cffunction name="setORMGateway" output="false">
	<cfargument name="ORMGateway" />
	<cfset variables.ORMGateway = arguments.ORMGateway />
</cffunction>



<!--- ******************************* Private **************************** --->
<!--- addResponceMessage --->
<cffunction name="addResponceMessage" returntype="void" access="private" output="false"
	displayname="Add Responce Message" hint="I add a responce message to the responce object."
	description="I add a responce message to the responce object.">
	
	<cfargument name="Message" type="string" required="false" default=""
    	hint="I am the message to add. I defalut to and empyt string." />
	<cfargument name="rc" type="any" required="true" />

    <cfset rc.responce = getResponce() />
	<cfset rc.responce.addMessage(trim(arguments.message)) />
    
</cffunction>



<!--- getResponce --->
<cffunction name="getResponce" returntype="component" access="private" output="false"
    displayname="Get Responce" hint="I return the Responce object."
    description="I return the Responce object.">
	
	<cfreturn getFramework().getBeanFactory().getBean("ResponceFactory").getResponce() />
</cffunction>
</cfcomponent>