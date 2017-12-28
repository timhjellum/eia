<cfcomponent 
	displayname="Utility Factory" 
	hint="I create and return utility objects." 
	output="false" 
	accessors="true">

<cfproperty name="managed" type="boolean" getter="true" setter="true" />
<cfproperty name="avaiableUtilities" type="array" getter="true" setter="true" />

<!--- ******************************* Public ***************************** --->
<!--- init --->
<cffunction name="init" returntype="UtilityFactory" access="public" output="false" 
	displayname="Init" hint="I am the constructor." 
	description="I am the pseudo constructor for this CFC. I return an instance of myself.">

	<cfargument name="manage" required="false" type="boolean" default="true" 
    	displayname="Manage" 
		hint="Should I manage my beans in scopes or always return brand new ones?" />

	<!--- create the list/array of what components we can create and manage --->
	<cfset var fileSystem = createBean( "FileSystem" ) />
	
	<cfset var list = fileSystem.listDirectory(
		replace(getCurrentTemplatePath(), "UtilityFactory.cfc", "")
		) />
	
	<cfset var avaiableUtilities = arrayNew(1) />
	
	<cfloop query="list">
		<cfif list.type eq "Dir">
			<cfset arrayAppend(avaiableUtilities, list.name) />
		</cfif>
	</cfloop>
	
	<!--- add MapCollection and Mail as avaiable cause they are. --->
	<cfset arrayAppend(avaiableUtilities, "MapCollection") />
	<cfset arrayAppend(avaiableUtilities, "Mail") />
	<cfset arrayAppend(avaiableUtilities, "FakeData") />
	
	<cfset variables.avaiableUtilities = avaiableUtilities />

	<!--- should we 'manage' the components? --->
	<cfif arguments.manage>
		<cfset setManagedBeans() />
	</cfif>
	
	<cfset variables.managed = arguments.manage />

	<cfreturn this />
</cffunction>



<!--- getBean --->
<cffunction name="getBean" returntype="any" access="public" output="false"
    displayname="Get Bean" hint="I return a utility bean by name."
    description="I return a utility bean by name.">
	
	<cfargument name="name" type="string" required="true" 
    	hint="I am the Name of the uitility to create and return. I am requried." />
    
    <cfreturn get(argumentCollection = arguments) />
</cffunction>



<!--- get --->
<cffunction name="get" returntype="component" access="public" output="false"
    displayname="Get" hint="I return a utility component by name."
    description="I return a utility component by name.">

	<cfargument name="name" type="string" required="true" 
    	hint="I am the Name of the uitility to create and return. I am requried." />
	
	<cfif variables.Managed>
    	<cfreturn getManagedBean(argumentCollection = arguments) />
    <cfelse>
    	<cfreturn createBean(argumentCollection = arguments) />
	</cfif>
</cffunction>



<!--- viewAvaiableUtilities --->
<cffunction name="viewAvaiableUtilities" returntype="array" access="public" output="false"
    displayname="View Avaiable Utilities" hint="I return a list of what Utilities I can create"
    description="I return a list of what Utilities I can create">

    <cfreturn variables.AvaiableUtilities />
</cffunction>



<!--- getInstance --->
<cffunction name="getInstance" returntype="any" access="public" output="false"
    displayname="Get Instance" hint="I return my internal instance variables."
    description="I return my internal instance variables.">

    <cfreturn variables />
</cffunction>



<!--- ******************************* Properties ************************* --->
<!--- ******************************* Package *************************** --->
<!--- ******************************* Private **************************** --->
<!--- setManagedBeans --->
<cffunction name="setManagedBeans" returntype="void" access="private" output="false"
    displayname="Set Managed Beans" hint="I create my managed components and set them to specific scopes."
    description="I create my managed components and set them to specific scopes.">
	
	<cfset variables.beans = createBean("MapCollection") />
	<cfset variables.beans.setValue("FileSystem", createBean("FileSystem")) />
	<cfset variables.beans.setValue("File", createBean("File")) />
	<cfset variables.beans.setValue("MethodInjector", createBean("MethodInjector")) />
	<cfset variables.beans.setValue("Serializer", createBean("Serializer")) />
	<cfset variables.beans.setValue("Zip", createBean("Zip")) />
	<cfset variables.beans.setValue("jtidy", createBean("jtidy")) />
	<cfset variables.beans.setValue("faker", createBean("faker")) />
	<cfset variables.beans.setValue("cflib", createBean("cflib")) />
	
</cffunction>



<!--- getManagedBean --->
<cffunction name="getManagedBean" returntype="component" access="private" output="false"
    displayname="Get Managed Bean" hint="I return a component from my internal scope or a new one."
    description="Based on what type of bean is requested I return them from the internal scop or a new one.">

	<cfargument name="name" type="string" required="true" 
    	hint="I am the Name of the uitility to create and return. I am requried." />
	
	<cfset var bean = 0 />

	<cfif structKeyExists(variables.beans, arguments.name)>
		<cfset bean = variables.beans[arguments.name] />
	<cfelse>
		<cfset bean = createBean(argumentCollection = arguments) />
	</cfif>

    <cfreturn bean />
</cffunction>



<!--- createBean --->
<cffunction name="createBean" returntype="component" access="private" output="false"
	displayname="Create Bean" hint="I create and return a utility CFC by name. THOWS ERROR: if no cfc is found."
	description="I create and return a utility CFC by name. THOWS ERROR: if no cfc is found.">
    
    <cfargument name="name" type="string" required="true" 
    	hint="I am the Name of the uitility to create and return. I a requried." />

	<cfswitch expression="#arguments.name#">

		<cfcase value="ccgenerator">
			<cfreturn createObject("component", "ccgenerator.CreditCardGenerator").init(argumentCollection = arguments) />
		</cfcase>
	
		<cfcase value="EMail,Mail">
			<cfreturn createObject("component", "email.EMail").init(argumentCollection = arguments) />
		</cfcase>

		<cfcase value="Faker,FakeData">
			<cfreturn createObject("component", "faker.faker").init(argumentCollection = arguments) />
		</cfcase>

		<cfcase value="File">
			<cfreturn createObject("component", "filesystem.File").init(argumentCollection = arguments) />
		</cfcase>
		
		<cfcase value="FileSystem">
			<cfreturn createObject("component", "filesystem.FileSystem").init(argumentCollection = arguments) />
		</cfcase>
		
		<cfcase value="imageutil,imageUtils">
			<cfreturn createObject("component", "imageutil.imageUtils").init(argumentCollection = arguments) />
		</cfcase>
		
		<cfcase value="Input">
			<cfreturn createObject("component", "input.Input").init(argumentCollection = arguments) />
		</cfcase>
		
		<cfcase value="Iterator">
			<cfreturn createObject("component", "iterator.Iterator").init(argumentCollection = arguments) />
		</cfcase>
		
		<cfcase value="jtidy">
			<cfreturn createObject("component", "jtidy.jtidy").init(argumentCollection = arguments) />
		</cfcase>
		
		<cfcase value="Logger">
			<cfreturn createObject("component", "logger.jflogger").init(argumentCollection = arguments) />
		</cfcase>
		
		<cfcase value="MapCollection,Collection,Map">
			<cfreturn createObject("component", "collection.MapCollection").init(argumentCollection = arguments) />
		</cfcase>
		
		<cfcase value="MethodInjector">
			<cfreturn createObject("component", "methodinjector.MethodInjector").init(argumentCollection = arguments) />
		</cfcase>
		
		<cfcase value="Serializer">
			<cfreturn createObject("component", "serializer.Serializer").init(argumentCollection = arguments) />
		</cfcase>
		
		<cfcase value="Stack">
			<cfreturn createObject("component", "stack.Stack").init(argumentCollection = arguments) />
		</cfcase>
		
		<cfcase value="Zip">
			<cfreturn createObject("component", "zip.Zip").init(argumentCollection = arguments) />
		</cfcase>
		
		<cfcase value="cflib">
			<cfreturn createObject("component", "cflib.cflib").init(argumentCollection = arguments) />
		</cfcase>

		<cfdefaultcase>
			<cfthrow 
				type="jfautility.UtilityFactory" 
				message="No utility object was found by the name of #arguments.name#." 
				detail="When requesting an object form the UitlityFactory a valid name must be passed in the arguments." />
		</cfdefaultcase>
	</cfswitch>
</cffunction>
</cfcomponent>