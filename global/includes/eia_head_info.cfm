<!--- start info_header --->
<cfsetting showDebugOutput="yes">
<Cfparam name="newcss" default="">
<cfparam name="L2Title" default="">
<cfparam name="L2T" default="">
<cfparam name="localesub" default="">
<cfparam name="sect" default="">
<cfparam name="newlocale" default="">
<cfparam name="locale" default="">
<cfparam name="vmap" default="">
<cfparam name="widgets" default="">
<cfparam name="jvm2" default="">
<cfparam name="hct" default="">
<cfparam name="hcVersion" default="3">
<cfparam name="highstock" default="">

<!--- Meta Data --->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=Edge"> <!--- IE Edge --->
<meta http-equiv="Content-Language" content="en-us" />
<meta name="robots" content="all" />
<meta name="agency" content="EIA - Energy Information Administration" />
<meta name="subject" content="official energy statistics, data, analysis and forecasting" />
<meta name="Description" content="Energy Information Administration - EIA - Official Energy Statistics from the U.S. Government" />

<!--- CSS consolidation switch --->
<cfparam default="" name="url.cs">
<cfif url.cs NEQ 'y'>

<cfif newcss NEQ 'y'>
	<link rel="stylesheet" href="/global/styles/eia-styles.css" />
	<!--- OLD CSS --->
	<!--- Framework CSS Includes --->
	<link rel="stylesheet" href="/global/styles/screen.css" type="text/css" media="screen, projection"/>

	<!--- EIA CSS Includes --->
	<link type="text/css" href="/global/scripts/jquery/datepicker/jquery-ui-dp.custom.css" rel="stylesheet" />
	<!---cfif jQueryUpgrade--->
		<link rel="stylesheet" href="/global/styles/EIA_global.css" type="text/css" media="screen, projection">
	<!---cfelse>
		<link rel="stylesheet" href="/global/styles/EIA_global_BeforeJqueryUpgrade.css" type="text/css" media="screen, projection">
	</cfif--->
	<!--[if lt IE 8]><link rel="stylesheet" href="/global/styles/ie.css" type="text/css" media="screen, projection"><![endif]-->
	<!--[if IE 7]><link rel="stylesheet" href="/global/styles/ie.css" type="text/css" media="screen, projection"><![endif]-->
	<!--[if lte IE 8]><link rel="stylesheet" href="/global/styles/ie_fixes.css" type="text/css" media="screen, projection"><![endif]-->
	<link rel="stylesheet" href="/global/styles/print.css" type="text/css" media="print">
	<!--[if lte IE 8]><link rel="stylesheet" href="/global/styles/ie_print.css" type="text/css" media="print"><![endif]-->
	<!--[if IE 7]><link rel="stylesheet" href="/global/styles/ie_print.css" type="text/css" media="print"><![endif]-->
<cfelse>
	<link rel="stylesheet" href="/global/styles/eia-styles.css" />
	<!--- NEW CSS --->
	<!--- Framework CSS Includes --->
	<link rel="stylesheet" href="/global/styles/screen_new.css" type="text/css" media="screen, projection">
	<link type="text/css" href="/global/scripts/jquery/datepicker/jquery-ui-dp.custom.css" rel="stylesheet" />
	<!--- EIA CSS Includes --->
	<link rel="stylesheet" href="/global/styles/EIA_icons.css" type="text/css" media="screen, projection">		
	<link rel="stylesheet" href="/global/styles/EIA_global_new.css" type="text/css" media="screen, projection">
	<link rel="stylesheet" href="/global/styles/eia_header.css" type="text/css" media="screen, projection">
	<link rel="stylesheet" href="/global/styles/EIA_footer.css" type="text/css" media="screen, projection">
	<link rel="stylesheet" href="/global/styles/EIA_page_headers.css" type="text/css" media="screen, projection">
	<link rel="stylesheet" href="/global/styles/misc.css" type="text/css" media="screen, projection">
	<link rel="stylesheet" href="/global/styles/EIA_modules.css" type="text/css" media="screen, projection">
	<link rel="stylesheet" href="/global/styles/EIA_font_styles.css" type="text/css" media="screen, projection">
	<!---link rel="stylesheet" href="/global/styles/EIA_templates.css" type="text/css" media="screen, projection">
	<link rel="stylesheet" href="/global/styles/EIA_tables.css" type="text/css" media="screen, projection"--->
	<!--[if lte IE 8]><link rel="stylesheet" href="/global/styles/ie.css" type="text/css" media="screen, projection"><![endif]-->
	<!--[if IE 7]><link rel="stylesheet" href="/global/styles/ie.css" type="text/css" media="screen, projection"><![endif]-->
	<link rel="stylesheet" href="/global/styles/print.css" type="text/css" media="print">
	<!--[if lt IE 8]><link rel="stylesheet" href="/global/styles/ie_print.css" type="text/css" media="print"><![endif]-->
	<!--[if IE 7]><link rel="stylesheet" href="/global/styles/ie_print.css" type="text/css" media="print"><![endif]-->
</cfif>
<cfelse>
	<link rel="stylesheet" href="/global/css/eia.css" type="text/css" media="screen">
</cfif>


<!--- Javascript Library Includes --->
	<cfif Find('wwwdev',CGI.HTTP_HOST)>
	    <!--- jQuery --->
		  <script src="/global/scripts/jquery/jquery-1.11.2.js"></script>
        <!--- The jQuery Migrate plugin (reincludes functionality removed from jQuery 1.9+) --->
		  <script type="text/javascript" src="/global/scripts/jquery/jquery-migrate-1.2.1.js"></script>
        <!--- jQuery UI --->
          <script type="text/javascript" src="/global/scripts/jquery/ui/1.10.3/js/jquery-ui-1.10.3.custom.js"></script>
        <!--- Touch Punch plugin to add jQuery UI touch support on iPad etc. --->
          <script type="text/javascript" src="/global/scripts/jquery/touch-punch/jquery.ui.touch-punch.js"></script>
	<cfelse>
	    <!--- jQuery --->
		<script src="/global/scripts/jquery/jquery-1.11.2.min.js"></script>
        <!--- The jQuery Migrate plugin (reincludes functionality removed from jQuery 1.9+) --->
		<script type="text/javascript" src="/global/scripts/jquery/jquery-migrate-1.2.1.min.js"></script>
        <!--- jQuery UI --->
          <script type="text/javascript" src="/global/scripts/jquery/ui/1.10.3/js/jquery-ui-1.10.3.custom.min.js"></script>
        <!--- Touch Punch plugin to add jQuery UI touch support on iPad etc. --->
          <script type="text/javascript" src="/global/scripts/jquery/touch-punch/jquery.ui.touch-punch.min.js"></script>
	</cfif>

	<!--- This are modified versions of what used to be below, for all users (not just dev) --->
	<script type="text/javascript" src="/global/scripts/jquery/eia_utils.js"></script>
	<script type="text/javascript" src="/global/scripts/eia_global.js"></script>

<!--- Include Highcharts (uses variables hcVersion, highstock, and jQueryUpgrade) --->
<cfinclude template="/global/includes/highcharts.cfm">

<!--- Search Landing Fix --->
<cfif locale EQ 'data'>
	<script type="text/javascript" src="/global/scripts/custom/search_landing_highlight.js"></script>
</cfif>

<!---Vector map includes--->
<cfif vmap EQ 'y'>
	<link href="/global/scripts/jquery/vector-map/jquery.vector-map.css" media="screen" rel="stylesheet" type="text/css" />
	<script src="/global/scripts/jquery/vector-map/jquery.vector-map.js" type="text/javascript"></script>
	<script src="/global/scripts/jquery/vector-map/usa-en.js" type="text/javascript"></script>
</cfif>

<!--- API Widgets --->
<cfif widgets EQ 'y'>
  <link rel="stylesheet" href="/global/scripts/api/eia_api_widgets.css" type="text/css" media="screen"/>
  <cfif jvm2 EQ 'y'>
	  <script src="/global/scripts/jquery/vector-map2/jquery-jvectormap-2.0.1.min.js"></script>
	  <link rel="stylesheet" href="/global/scripts/jquery/vector-map2/jquery-jvectormap-2.0.1.css" type="text/css" media="screen"/>
      
    
      <!---<script src="assets/jquery-jvectormap-world-mill-en.js"></script>--->
  <cfelse>
      <link rel="stylesheet" href="/global/scripts/jquery/vector-map/jquery-jvectormap-1.2.2.css" type="text/css" media="screen"/>
      <script src="/global/scripts/jquery/vector-map/jquery-jvectormap-1.2.2.min.js"></script>
  </cfif>
  
  <script src="/global/scripts/jquery/vector-map/jquery-jvectormap-us-aea-en.js"></script>
  <script src="/global/scripts/jquery/vector-map/jquery-jvectormap-world-mill-en.js"></script>
  <script src="/global/scripts/modules/lib/jvectormap/maps/us-merc-en.js"></script>
  
  <script src="/global/scripts/api/eia_hc_widget.js" type="text/javascript"></script>
  <script src="/global/scripts/api/eia_api_widgets.js" type="text/javascript"></script>
</cfif>

<!--- Omit Google Analytics for dev server --->
<cfif not Find('wwwdev',CGI.HTTP_HOST)>
	<script type="text/javascript" src="/global/scripts/jquery/ga/ga-file-downloads.js" ></script>
	<cfinclude template="/global/includes/ga.cfm">
</cfif>

<!--- EIA logo favicon --->
<link rel="shortcut icon" href="//www.eia.gov/favicon.ico" />
<link rel="icon" href="//www.eia.gov/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" type="image/vnd.microsoft.icon" href="//www.eia.gov/favicon.ico" />

<!--- Vars --->
<cfset glossary_path = '/tools/glossary/'>
<cfset faqs_path = '/tools/faqs/'>

	<!-- Add fancyBox 2 -->
	<link rel="stylesheet" href="/global/scripts/fancybox2/jquery.fancybox.css?v=2.1.5" type="text/css" media="screen" />
	<script type="text/javascript" src="/global/scripts/fancybox2/jquery.fancybox.pack.js?v=2.1.5"></script>

<script type="text/javascript" src="/global/survey/engine/js/survey_engine.js"></script>
<link rel="stylesheet" href="/global/survey/engine/css/layout.css" type="text/css" media="screen" />