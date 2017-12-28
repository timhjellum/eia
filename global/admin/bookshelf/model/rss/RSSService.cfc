<cfcomponent
 	displayname="RSSService"
	hint="I am the API for all things RSS related."
	output="false">

<!--- ******************************** Public *****************************--->
<!--- init --->
<cffunction name="init" output="false" access="public" returntype="RSSService" 
	displayname="Init" hint="I am the constructor." 
	description="I initalize and return a ready to use version of myself.">

	<cfargument name="ORMGateway" type="any" required="true"
		hint="I am the ORMGateway. I am requried." />

	<cfset setORMGateway(arguments.ORMGateway) />
	<cfset variables.config = application.CONSTANTS.CONIFG />
	
	<cfset generateAllCagetoryFeeds() />

	<cfreturn this />
</cffunction>



<!--- generateAllCagetoryFeeds --->
<cffunction name="generateAllCagetoryFeeds" returntype="any" access="public" output="false"
	displayname="Generate All Categroy Feeds" hint="I create and write to disk all the Catetgory Feed files." 
	description="I create and write to disk all the Catetgory Feed files.">
	
	<cfset var cats =  getORMGateway().list("Category") />
	<cfset var cat = 0 />
	
	<cfloop array="#cats#" index="cat">
		<cfset writeCategoryRSSFile(cat.getID()) />
	</cfloop>
	
	<cfreturn true />
</cffunction>



<!--- writeCategoryRSSFile --->
<cffunction name="writeCategoryRSSFile" returntype="any" access="public" output="false"
	displayname="Write Category RSS File" hint="I write a Categories RSS File." 
	description="I write a Categories RSS File.">

	<cfargument name="IDCategory" type="numeric" required="true"
		hint="I am the ID of the Category. I am requried." />

	<cfset var category =  getORMGateway().get("Category", arguments.IDCategory) />
	<cfset var pages = category.getPages() />
	<cfset var config = variables.config />

	<!--- make the file name and directy path and link --->
	<cfset var fileName = replaceNoCase(category.getName(), " ", "", "all") />
	<cfset fileName = lcase("category_" & fileName & "_Feed.xml") />
	<cfset var writeDir = expandPath(config.rssPath) & fileName />
	<cfset var theFeedLink = "http://#cgi.HTTP_HOST##config.rssPath##fileName#" />
	<cfset var baseURL = "http://#cgi.HTTP_HOST##application.CONSTANTS.FILE_CONTEXT#/" />

	<!--- the feeds identity data --->
	<cfset var rssFeed = StructNew() />
	<cfset rssFeed.link = theFeedLink />
	<cfset rssFeed.title = "#category.getName()# #config.rssTitle#" />
	<cfset rssFeed.description = "#config.siteDescription#" />
	<cfif isArray(pages) and arrayLen(pages)>
		<cfset rssFeed.pubDate = "{ts '#pages[1].getLastUpdate()#'}" />
	<cfelse>
		<cfset rssFeed.pubDate = now() />
	</cfif>
	<cfset rssFeed.version = "rss_2.0" />

	<!--- the feeds items --->
	<cfset rssFeed.item = ArrayNew( 1 ) />
 	
	<cfset var _item = StructNew() />
	<cfset var page = 0 />
	
	<cfif isArray(pages) and arrayLen(pages)>
		<cfloop array="#pages#" index="page">
			<cfset _item = StructNew() />
			<cfset _item.description = StructNew() />
			<cfset _item.description.value = "#page.getDescription()#" />
			<cfset _item.link = "#baseURL#index.cfm?action=main.page&IDPage=#page.getID()#" />
			<cfset _item.pubDate = "{ts '#page.getLastUpdate()#'}" />
			<cfset _item.title = page.getTitle() />
			<cfset arrayAppend(rssFeed.item, _item) />
		</cfloop>
	</cfif>

	<!--- write the feed --->
	<cffeed
	 	action = "create"
		name = "#rssFeed#"
		outputFile = "#writeDir#" 
		overwrite = "yes"
		xmlVar = "myXML" />
		
	<cfreturn theFeedLink  />
</cffunction>



<!--- ORMGateway --->
<cffunction name="getORMGateway" output="false">
	<cfreturn variables.ORMGateway />
</cffunction>
<cffunction name="setORMGateway" output="false">
	<cfargument name="ORMGateway" />
	<cfset variables.ORMGateway = arguments.ORMGateway />
</cffunction>
<!--- ******************************** Private ****************************--->
</cfcomponent>