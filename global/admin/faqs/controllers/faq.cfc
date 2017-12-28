<cfcomponent extends="BaseController">

<!--- init --->
<cffunction name="init" output="false" 
	hint="I am the constructor">
	<cfargument name="fw" />
	
	<cfset super.init(argumentCollection = arguments) />
	
</cffunction>



<!--- default --->
<cffunction name="default" output="false" 
	hint="I am the default action">
	<cfargument name="rc" />
		
	<cfset rc.tags = getORMGateway().list("FAQTag", "", "name") />

</cffunction>



<!--- faqbytag --->
<cffunction name="faqbytag" output="false" 
	hint="I display a list of all FAQs.">
	<cfargument name="rc" />
	
	<cfparam name="rc.IDFAQTag" default="" />
	
	<cfset rc.tag = getORMGateway().get("FAQTag", rc.IDFAQTag) />

</cffunction>



<!--- faqlist --->
<cffunction name="faqlist" output="false" 
	hint="I display a list of all FAQs.">
	<cfargument name="rc" />
		
	<cfset rc.faqs = getORMGateway().list("FAQ", "", "question") />

</cffunction>



<!--- faqedit --->
<cffunction name="faqedit" output="false" 
	hint="I am the default action">
	<cfargument name="rc" />
	
	<cfparam name="rc.IDFaq" default="" />
		
	<cfset rc.faq = getORMGateway().get("FAQ", rc.IDFaq) />

</cffunction>



<!--- faqdelete --->
<cffunction name="faqdelete" output="false" 
	hint="I am the default action">
	<cfargument name="rc" />
	
	<cfparam name="rc.IDFaq" default="" />
		
	<cfset var faq = getORMGateway().get("FAQ", rc.IDFaq) />
	<cfset faq.delete() />
	
	<cfset addResponceMessage("The FAQ was Deleted! Good Riddance FAQ!", rc) />
	<cfset getFramework().redirect("faq", "all") />

</cffunction>



<!--- faqsave --->
<cffunction name="faqsave" output="false" 
	hint="I save a FAQ and return to the edit screen.">
	<cfargument name="rc" />
	
	<cfparam name="rc.IDFaq" default="" />
	<cfparam name="rc.incomingTags" default="" />
	
	<cfset var faq = getORMGateway().get("FAQ", rc.IDFaq) />
	
	<cfif rc.IDFaq eq "">
		
		<cfset faq.populate( rc ) />
		
		<!--- save returns the id if it was new... --->
		<cfset rc.IDFAQ = faq.save() />
		
		<cfset addResponceMessage(
			"The FAQ was Created! Happy Birthday FAQ!<br /><u>Now Tag this new wonderful FAQ</u>", 
			rc) />
		<cfset getFramework().redirect("faq.faqedit", "all") />

	<cfelse><!--- regular update --->
		<cfset faq.populate( rc ) />
		<cfset faq.handleTags( rc.incomingTags ) />
		<cfset faq.save() />
	
		<cfset addResponceMessage("The FAQ was Saved! Good Job!", rc) />
		<cfset getFramework().redirect("faq.faqedit", "all") />
	</cfif>
</cffunction>
</cfcomponent>