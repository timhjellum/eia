component output="false" extends="lib.fw1.framework"  {

this.name = hash(getCurrentTemplatePath()) & "_faqs";
this.datasource = "NEIC";
this.thePath = "#expandPath('./')#";
this.sessionmanagement = true;
this.scriptprotect = true;

this.ORMEnabled = "true";
this.ORMSettings = {
					Dialect = "Oracle10g",
					dbCreate = "none",
					flushAtRequestEnd = false,
					savemapping = false,
					schema = "NEIC"
					};

// ****************************** Mappings ************************************
this.mappings["/faqs"]="#this.thePath#";
this.mappings["/coldspring"]="#this.thePath#lib/coldspring/";


//****************************** Custom Tags **********************************
this.customTagPaths = "#this.thePath#assets/customtags/";
this.customTagPaths = listAppend(
									this.customTagPaths, 
									"#this.thePath#assets/customtags/form/"
								);

//************************** FW/1 Config Settings *****************************
variables.framework = { 
				defaultSection = 'faq',
				defaultItem = 'default',
				applicationKey = this.name, 
				generateSES = false,
				error = "global.error",
				reloadApplicationOnEveryRequest = false,
				unhandledExtensions = 'cfc',
				unhandledPaths = '/flex2gateway,#getContextPaths().filepath#/remote/RemoteProxie.cfc' 
			   };

//************************** FW/1 Wrapper Methods ****************************
// setupApplication
public function setupApplication ()
	returntype="any"
	displayname="Set Up Application"
	hint="I am the method called by FW1 that acts as a proxy to onApplicationStart."
	description="I am the method called by FW1 that acts as a proxy to onApplicationStart." {
	
	setApplicationConfiguration();
	createMainBeanFactory();
}

// setupRequest
public function setupRequest ()
	returntype="any"
	displayname="Setup Request"
	hint="I am the method FW/1 calls in its onRequestStart method."
	description="I am the method FW/1 calls in its onRequestStart method. " {
	
	// fail if this cookie is not around. 
	if (! isDefined("cookie.EIAFAQ")) {
		include "/global/admin/login_action.cfm";
	}
	
	if(!structKeyExists(application, "CONSTANTS")){
		setupApplication();
	};
	
	if( structKeyExists(url, "ormReload") ){
		ORMReload();
	};
}

//************************** User Defined Functions ***************************
// createMainBeanFactory
private function createMainBeanFactory ()
	returntype="void"
	displayname="Create Main Bean Factory"
	hint="I create the applications main bean factory."
	description="I create the applications main bean factory." {

	var coldSpring = createObject( 
								"component", 
								"coldspring.beans.DefaultXmlBeanFactory" ).init();
								
	coldSpring.loadBeans( "#this.thePath#model/config/coldspring.xml" );

	setBeanFactory( coldSpring );
	
	application.beanfactory = coldspring;
}

// setApplicationConfiguration
public function setApplicationConfiguration ()
	returntype="any"
	displayname="Set Application Configuration"
	hint="I set the applications configuration variables."
	description="I set the applications configuration variables." {
	
	this.siteDir = replace(expandPath("."), expandPath('/'), "/");
	this.fileContext = this.siteDir;
	
	this.cfcContext = replace( this.siteDir, "/", ".", "all" );
	this.cfcContext = replace( this.cfcContext, "\", ".", "all" );
	this.cfcContext = right( this.cfcContext, len(this.cfcContext) - 1 ) & ".";

	var config = {
			companyName = "EIA",
			siteName = "Energy Consumption",
			siteDescription = "Americas Energy Consumption",
			rssTitle = "Energy Feed",
			cssPath = "#replace('#this.fileContext#/assets/css/', '\', '/', 'all')#",
			imagePath = "#replace('#this.fileContext#/assets/img/', '\', '/', 'all')#",
			jsPath = "#replace('#this.fileContext#/assets/js/', '\', '/', 'all')#"};
	
	application.CONSTANTS.applicationConfiguration = config;
	application.CONSTANTS.LOGIN_ACTION = "security.login";
	application.CONSTANTS.DO_LOGIN_ACTION = "security.dologin";
	application.CONSTANTS.MAIN_SECTION = "main";
	application.CONSTANTS.CFC_CONTEXT = this.cfcContext;
	application.CONSTANTS.FILE_CONTEXT = this.fileContext;
	application.CONSTANTS.APPLICATION_NAME = this.name;

	application.CONSTANTS.CONIFG = this.getConfig();

	application.appthis = this;
}

// getConfig
public function getConfig ()
	returntype="any"
	displayname="Get Config"
	hint="I return the application and framework conifguation structs."
	description="I return the application and framework conifguation structs." {

	var result = super.getConfig();
	
	structAppend(result, application.CONSTANTS.applicationConfiguration);
	
	return structCopy(result);
}

//getContextPaths
private function getContextPaths()
	returntype="Struct"
	displayname="Get Context Paths"
	description="Get Context Paths"
	hint="I return a structure of paths to the application."{
	var paths = {systemPath = expandPath('./'), sitePath = expandPath('/')};
	var result = {cfcPath = "", filePath=""};
	
	// are we in a sub directory of the site?
	if(paths.systemPath NEQ paths.sitePath){
		result.filePath = replace(paths.systemPath, paths.sitePath, "", "all");
		result.filePath = "/" & replace(result.filePath, "\", "/", "all");
		result.cfcPath = right(result.filePath, len(result.filePath) -1 );
		result.cfcPath = replace(result.cfcPath, "/", ".", "all");
	}
	
	return result;
}
}