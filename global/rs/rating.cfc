<!--- /// No Comment - Robert Ciconte ////////// --->
<!--- Turn multiple voting off before deployment --->
<cfcomponent output="no">
<cfset variables.dsn = 'NEIC'>
<!--- Set Session --->
<cfapplication name="rate" sessionmanagement="yes">
<cfcookie name="CFID" value="#CFID#">
<cfcookie name="CFToken" value="#CFToken#">
<cfparam name="R_ID" default="">
<cfparam name="Voting_Count" default="0">
<cfparam name="getRatingId.count" default="0">
<cfset tracker = '#R_ID#'>
<!---cfcookie name="R_ID" value="" expires="now"--->
<!---/ Set Session --->

<!--- Define/write new star widget /--->
<cffunction name="newWidget" access="public" output="true" returntype="void">
	<cfargument name="ratingName" type="string" required="true" hint="This should be unique">
	<cfargument name="ratingTitle" type="string" required="true" hint="Title that will appear to the user">
	<cfargument name="ratingNumber" type="numeric" required="true" hint="Max number of stars">
	<cfargument name="pathToSpryJS" type="string" required="true" hint="relative or absolute web path to Spry widget JS files">
	<cfargument name="pathToSpryCSS" type="string" required="true" hint="relative or absolute web path to Spry widget CSS files">
	   <cfset rsWidget = insertOrSelect(ratingName,RatingTitle)>
	   <cfset uservote = getRatingForUser(rsWidget.id,"#cftoken##cfid#")>
	   <cfset averagevote = getRatingValue(rswidget.id)>
   	   <cfset Voting_Count = getRatingCount(rswidget.id)>
	<cfset pathtoCFC = "/"& replace(getmetadata().name,".","/","all") & ".cfc">	
	<cfsavecontent variable='body'>
	<cfoutput>
	<script language="JavaScript" type="text/javascript" src="#pathToSpryJS#SpryRating.js"></script>
<!---link href="#pathToSpryCSS#samples.css" rel="stylesheet" type="text/css" /--->
<link href="#pathToSpryCSS#SpryRating.css" rel="stylesheet" type="text/css" />
<div style="display:inline;clear:both"><!---h3>#rsWidget.title#</h3---><span id="rating#rsWidget.id#" class="ratingContainer">
<span class="ratingTitles">Rate this page:&nbsp;</span>
		   <cfloop from="1" to="#ratingNumber#" index="q">
              <!---cfif q LTE 2--->
		      <span class="ratingButton" onClick="window.parent.document.getElementById('commentsdiv').style.display = 'block';"></span>
              <!---cfelse>
		      <span class="ratingButton"></span>
              </cfif--->
		   </cfloop>
           <cfset vote_count2 = Voting_Count +1>
           <input id="ratedElement" type="hidden" name="ratingField" value="" />
		   <span class="ratingRatedMsg"><p align="right" class="ratingTitles" style="float:none;padding-right:5px;margin-top:6px;">(#vote_count2# votes)&nbsp;</p></span>
           <p align="right" class="ratingTitles" style="float:none;padding-right:5px;line-height:20px;">(#Voting_Count# votes)&nbsp;</p>
</span>
<p>&nbsp;</p><!---p style="clear:both;">&nbsp;</p--->
</div><script type="text/javascript">
	var firstRating#replace(rsWidget.id,"-","_","all")# = new Spry.Widget.Rating("rating#rsWidget.id#", {allowMultipleRating:false,<cfif userVote gt 0> readOnly:true,</cfif>saveUrl: "#pathToCFC#?method=userRate",postData:"ratingId=#rsWidget.id#&rate=@@ratingValue@@",ratingValue:<cfoutput>#averageVote#</cfoutput>});
	var myObs = {};
	firstRating#replace(rsWidget.id,"-","_","all")#.addObserver(myObs);
	myObs.onServerUpdate = function(obj, req){
		var returnVal = parseFloat(req.xhRequest.responseText);
		if (!isNaN(returnVal)){
			firstRating#replace(rsWidget.id,"-","_","all")#.setValue(returnVal, true);
		}
	}
</script>
	</cfoutput>
	</cfsavecontent>
<cfoutput>#HtmlCompressFormat(body)#</cfoutput> 
</cffunction>

<!--- Saves rate based on users id (default cftoken/cfid, user will have to clear out sesison cookie
to be able to vote again, you can change this to something else like user id --->
<cffunction name="userRate" access="remote" output="false" returntype="string">
	<cfargument name="ratingId" type="string" required="true">
	<cfargument name="rate" type="numeric" required="true">
	<cfargument name="userId" type="string" required="no" default="#cftoken##cfid#">
		<!--- write vote to table --->
        <cfset counter = 4>
        <cfquery name="castVote" datasource="#variables.dsn#">
			Insert into neic.ratingvote (ratingid,rate,userid)
			Values (<cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#ratingid#">,<cfqueryparam cfsqltype="cf_sql_bigint" value="#rate#">,<cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#userId#">)
		</cfquery>
        <!--- added to update rating table --->
        <cfquery name="castvotelookup" datasource="#variables.dsn#">
            Select count, stars from neic.rating
            where id = <cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#ratingid#">
		</cfquery>
        <!--- Set new count and star average --->
        <cfset countVal = castvotelookup.count + 1>
        <cfset averVal = ((#castvotelookup.stars# * #castvotelookup.count#) + #rate#)/#countVal#>
        <cfquery name="castvoteCount" datasource="#variables.dsn#">
			Update neic.rating 
            Set count = '#countVal#'
			where id = <cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#ratingid#">
		</cfquery>
        <cfquery name="castvoteStars" datasource="#variables.dsn#">
			Update neic.rating 
            Set stars = '#averVal#'
			where id = <cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#ratingid#">
		</cfquery>
        <!--- Set new DTE for timestamp of last vote --->
        <cfquery name="castvoteDTE" datasource="#variables.dsn#">
			Update neic.rating 
            Set DTE = systimestamp
			where id = <cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#ratingid#">
		</cfquery>
        <cfset tracker = '#tracker#' & '#ratingid#'>
        <cfcookie name="R_ID" value='#tracker#'>
        <!---/ added to update rating table --->
		<cfreturn getRatingValue(ratingid)>
</cffunction>

<!--- Gets the users vote to from Cookie then DB  --->
<cffunction name="getRatingForUser" access="remote" output="false" returntype="string">
	<cfargument name="ratingId" type="string" required="true">
	<cfargument name="userID" type="string" required="true">
    <!---cfoutput>#ratingId# ... #userID#</cfoutput><cfabort--->
	<!---cfquery name="getRatingForUser" datasource="#variables.dsn#">
	   Select rate from neic.ratingvote 
       where ratingid='#ratingId#' 
             and userid ='#userID#'
	</cfquery--->
    <!--- Find ID in R_ID cookie string --->
    <cfset Fstring = #findnocase('#ratingId#',#R_ID#)#>
	<cfif  Fstring eq 0>
		<cfset uservote = 0>
	<cfelse>
        <cfquery name="getRatingForUser" datasource="#variables.dsn#">
	       Select rate from neic.ratingvote 
           where ratingid=<cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#ratingid#"> 
                 and userid =<cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#userID#">
	    </cfquery>
		<cfset uservote = getRatingForUser.rate>
	</cfif>
	<!---cfif getRatingForUser.recordcount EQ 0>
		<cfset uservote = 0>
	<cfelse>
		<cfset uservote = getRatingForUser.rate>
	</cfif--->
	<cfreturn uservote>
</cffunction>

<!--- Function for the newwidget, will either get the details from the db if exists or insert a new stars set record --->
<cffunction name="insertOrSelect" access="private" returntype="query" output="false">
	<cfargument name="ratingName" type="string" required="true">
	<cfargument name="ratingTitle" type="string" required="true">
	<cfquery name="getRatingId" datasource="#variables.dsn#">
		select * from neic.rating where name = <cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#ratingName#">
	</cfquery>
   
	<cfif not getratingid.recordcount>
		<cfset ratingID = createUUID()>
		<cfquery name="getRatingId" datasource="#variables.dsn#">
			insert into neic.rating (id,title,name,stars)
			values (<cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#ratingid#">,<cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#ratingTitle#">,<cfqueryparam cfsqltype="CF_SQL_VARCHAR" value="#ratingName#">,0)
		</cfquery>
		<cfset getRatingId = queryNew('id,title,name,stars')>
		<cfset newrow = queryAddRow(getRatingId,1)>
		<cfset temp = querySetCell(getRatingId,'id','#ratingid#')>
		<cfset temp = querySetCell(getRatingId,'title','#ratingTitle#')>
		<cfset temp = querySetCell(getRatingId,'name','#ratingName#')>
   		<cfset temp = querySetCell(getRatingId,'stars','0')>
	</cfif>
	<cfreturn getRatingId/>
</cffunction>

<!--- gets the average rating for specified ratings widget  --->
<cffunction name="getRatingValue" access="remote" output="false" retuntype="string">
    <!---cfargument name="avg_rate" type="string" required="true"--->
    <cfparam name="getRatingId.stars" default="0">
	<cfset avg_rate = #getRatingId.stars#>
    <cfreturn avg_rate/>
	<!---cfoutput>#avg_rate#</cfoutput><cfabort--->
	<cfreturn getRatingValue.avg_rate/>
</cffunction>

<!--- gets the count for specified ratings widget  --->
<cffunction name="getRatingCount" access="remote" output="false" retuntype="string">
    <!---cfargument name="avg_rate" type="string" required="true"--->
    <cfparam name="getRatingId.count" default="0">
    <cfparam name="GRIDcount" default="0">
    <cfif IsDefined("getRatingId.count")><cfset GRIDcount = #getRatingId.count#></cfif>
	<cfset star_count = #GRIDcount#>
    <cfreturn star_count/>
	<!---cfoutput>#avg_rate#</cfoutput><cfabort--->
	<cfreturn getRatingCount.star_count/>
</cffunction>

<cffunction name="HtmlCompressFormat" returntype="string" access="private" output="false">
	<cfargument name="sInput" type="string" required="yes">
<cfset var level = 2>
<cfsilent>
<cfscript>
/**
 * Replaces a huge amount of unnecessary whitespace in HTML code.
 * 
 * @param sInput 	 HTML to compress. (Required)
 * @return Returns a string. 
 **/
   
   if( arrayLen( arguments ) GTE 2 AND isNumeric(arguments[2]))
   {
      level = arguments[2];
   }
   // just take off the useless stuff
   sInput = trim(sInput);
   switch(level)
   {
      case "3":
      {
         //   extra compression can screw up a few little pieces of HTML, doh         
         sInput = reReplace( sInput, "[[:space:]]{2,}", " ", "all" );
         sInput = replace( sInput, "> <", "><", "all" );
         sInput = reReplace( sInput, "<!--[^>]+>", "", "all" );
         break;
      }
      case "2":
      {
         sInput = reReplace( sInput, "[[:space:]]{2,}", chr( 13 ), "all" );
         break;
      }
      case "1":
      {
         // only compresses after a line break
         sInput = reReplace( sInput, "(" & chr( 10 ) & "|" & chr( 13 ) & ")+[[:space:]]{2,}", chr( 13 ), "all" );
         break;
      }
   }
</cfscript>
</cfsilent>
  <cfreturn sInput/>
  </cffunction>
</cfcomponent>