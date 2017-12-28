<!--- Document Information -----------------------------------------------------
Build:      		@@@revision-number@@@
Title:      		Stack.cfc 
Author:     		John Allen
Email:      		johnfallen@gmail.com
Company:    		@@@company-name@@@
Website:    		@@@web-site@@@
Purpose:    		I am a generic stack mechanism.
Modification Log:
Name 			Date 				Description
================================================================================
John Allen 		13/03/2010			Created
------------------------------------------------------------------------------->
<cfcomponent 
	displayname="Stack"
	hint="I am a generic stack mechanism." 
	output="false" >

<!--- init --->
<cffunction name="init" access="public" returnType="stack" output="false" 
	displayname="init" hint="I am the constructor." 
	description="I am the constructor. I return myself.">
	
	<cfset this.stack = ArrayNew( 1 ) />
	
	<cfreturn this />
</cffunction>



<!--- push --->
<cffunction name="push" access="public" returnType="void" output="false"
	displayname="push" hint="I add an item to the stack." 
	description="I add an item to the stack.">
	
	<cfargument name="value" type="any" required="true">
	
	<cfset ArrayAppend(this.stack, value) />
	
</cffunction>



<!--- peek --->
<cffunction name="peek" access="public" returnType="any" output="false"
	displayname="peek" hint="I return the top item of the stack." 
	description="I return the top item of the stack.">
	
	<cfreturn this.stack[ArrayLen(this.stack)] />
</cffunction>



<!--- pop --->
<cffunction name="pop" access="public" returnType="any" output="false"
	displayname="pop" hint="I return and remove the top item of the stack." 
	description="I return and remove the top item of the stack.">
	
	<cfset var value = this.peek() />
	
	<cfset ArrayDeleteAt(this.stack, ArrayLen(this.stack)) />
	
	<cfreturn value />
</cffunction>



<!--- size --->
<cffunction name="size" access="public" returnType="numeric" output="false"
	displayname="size" hint="I return the size of the stack." 
	description="I return the size of the stack.">
	
	<cfreturn ArrayLen(this.stack) />
</cffunction>



<!--- clear --->
<cffunction name="clear" access="public" returnType="void" output="false"
	displayname="clear" hint="I clear the stack." 
	description="I clear the stack.">
	
	<cfset this.init() />

</cffunction>
</cfcomponent>