<cfcomponent 
	displayname="I Model a responce from the application" 
	hint="I Model a responce from the application." 
	output="false">


<!--- ******************************* Public ***************************** --->

<!--- init --->
<cffunction name="init" returntype="Responce" access="public" output="false" 
	displayname="Init" hint="I am the constructor." 
	description="I am the pseudo constructor for this CFC. I return an instance of myself.">
	
	<cfset variables.instance = structNew() />
	<cfset initMessages() />
	
	<cfreturn this />
</cffunction>



<!--- addMessage --->
<cffunction name="addMessage" returntype="void" access="public" output="false"
    displayname="Add Message" hint="I add a messege to my internal collection."
    description="I add a messege to my internal collection. THROWS ERROR if a empty string is passed to the type.">
    
	<cfargument name="message" type="any" required="true" 
		hint="I am the message to add. I am requried." />
	<cfargument name="type" type="string" required="false" default="feedback"
		hint="I am the type of message to add. I defalut to ""feedback"". " />
		
	<cfset var messageContainer = structNew() />
	
	<cfif not len(arguments.type)>
		<cfthrow 
			message="An empty string was passed. I must have a type to set a message by." />
	</cfif>
	
	<cfset messageContainer.message = arguments.message />
	<cfset messageContainer.type = arguments.type />
	
	<cfset arrayAppend(getMessages(), messageContainer) />	

</cffunction>



<!--- clearMessages --->
<cffunction name="clearMessages" returntype="void" access="public" output="false"
    displayname="Clear Messages" hint="I clear all of my internal messages."
    description="I clear all of my internal messages.">
    
	<cfset initMessages() />

</cffunction>



<!--- getErrors --->
<cffunction name="getErrors" returntype="array" access="public" output="false"
    displayname="Get Errors" hint="I return an array of ""error"" messages."
    description="I return an array of error messages.">
    
	<cfreturn getMessages("error") />
</cffunction>



<!--- getFeedback --->
<cffunction name="getFeedback" returntype="array" access="public" output="false"
    displayname="Get Feedback" hint="I return an array of ""Feedback"" messages."
    description="I return an array of ""Feedback"" messages.">
    
	<cfreturn getMessages("feedback") />
</cffunction>



<!--- getMessages --->
<cffunction name="getMessages" access="public" output="false" returntype="array">
	
	<cfargument name="type" type="string" required="false" default="all" 
		hint="What type of messages should I return? ""error"", ""feedback"" or ""all"". I default to ""all""." />
	
	<cfset var resultArray = arrayNew(1) />
	<cfset var x = 0 />
	
	<!--- loop over what type of messages to return --->
	<cfswitch expression="#arguments.type#">
		
		<!--- add each message of type x to a array and return --->		
		<cfcase value="feedback">
			<cfloop array="#getMessages()#" index="x">
				<cfif x.type eq "feedback">
					<cfset arrayAppend(resultArray, x) />
				</cfif>
			</cfloop>
			
			<cfreturn resultArray />
		</cfcase>
		
		<cfcase value="error">
			<cfloop array="#getMessages()#" index="x">
				<cfif x.type eq "error">
					<cfset arrayAppend(resultArray, x) />
				</cfif>
			</cfloop>
			
			<cfreturn resultArray />
		</cfcase>

		<cfdefaultcase>
			
			<cfreturn variables.instance.Messages />
		</cfdefaultcase>
	</cfswitch>
</cffunction>



<!--- hasMessages --->
<cffunction name="hasMessages" returntype="boolean" access="public" output="false"
    displayname="Has Messages" hint="I check if there are any messages."
    description="I check if there are any messages.">
    
	<cfif arrayLen(getMessages())>
		<cfreturn true />
	<cfelse>
	    <cfreturn false />
	</cfif>
</cffunction>



<!--- hasErrorMessages --->
<cffunction name="hasErrorMessages" returntype="boolean" access="public" output="false"
    displayname="Has Error Messages" hint="I check if there are any ""error"" messages."
    description="I check if there are any ""error"" type messages.">
    
	<cfif arrayLen(getMessages("error"))>
		<cfreturn true />
	<cfelse>
	    <cfreturn false />
	</cfif>
</cffunction>



<!--- hasFeedbackMessages --->
<cffunction name="hasFeedbackMessages" returntype="boolean" access="public" output="false"
    displayname="Has Feedback Messages" hint="I check if there are any ""Feedback"" messages."
    description="I check if there are any ""Feedback"" messages.">
    
	<cfif arrayLen(getMessages("feedback"))>
		<cfreturn true />
	<cfelse>
	    <cfreturn false />
	</cfif>
</cffunction>

<!--- ***************************** Properties *************************** --->
<!--- ******************************* Package **************************** --->
<!--- ******************************* Private **************************** --->

<!--- initMessages --->
<cffunction name="initMessages" returntype="void" access="public" output="false"
    displayname="Init Messages" hint="I initalize my internal message collection."
    description="I initalize my internal message collection.">
  
	<cfset variables.instance.messages = arrayNew(1) />
</cffunction>
</cfcomponent>