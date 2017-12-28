<!--- Document Information ----------------------------------------------------
Build:      			@@@revision-number@@@
Title:      			FileSystem.cfc 
Author:     			John Allen
Email:      			jallen@figleaf.com
Company:    		@@@company-name@@@
Website:    		@@@web-site@@@
Purpose:    		I abstract file system interaction
Modification Log:
Name 			Date 								Description
===============================================================================
John Allen 		13/12/2008			Created
------------------------------------------------------------------------------>
<cfcomponent displayname="File System" output="false"
	hint="I abstract file system interaction.">

<!--- ******************************* Public ***************************** --->

<!--- init --->
<cffunction name="init" returntype="FileSystem" access="public" output="false" 
	displayname="Init" hint="I am the constructor." 
	description="I am the pseudo constructor for this CFC. I return an instance of myself.">
		
	<cfreturn this />
</cffunction>



<!--- CheckFileExists --->
<cffunction name="CheckFileExists" returntype="any" access="public" output="false"
	displayname="Check File Exists" hint="I check if a file exists based on path and file name."
	description="I check if a file exists based on path and file name.">
    
    <cfargument name="Destination" required="true" type="string" 
		hint="I am the fully system path. I am required." />
	<cfargument name="FileName" required="true" type="any" 
		hint="I am the file name. I am required." />
	
	<cfreturn FileExists(arguments.Destination & arguments.FileName) />
</cffunction>



<!--- createFile --->
<cffunction name="createFile" returntype="any" access="public" output="false"
	displayname="Create File" hint="I write a file to disk."
	description="I write a file to disk.">
   
	<cfargument name="Destination" required="true" type="string" 
		hint="I am the fully system path. I am required." />
	<cfargument name="FileName" required="true" type="any" 
		hint="I am the file name. I am required." />
	<cfargument name="Content" required="true" type="any" 
		hint="I am the content of the file. I am required." />

	<cfset var result = false />
	
	<cftry>
		<cflock type="exclusive" name="#createUUID()#" timeout="10">
			
			<cffile 
				action="write" 
				file="#arguments.Destination##arguments.FileName#" 
				output="#arguments.Content#" />
			
			<cfset result = true />
		</cflock>

		<cfcatch type="any">
			<cfthrow type="FileSystem.createFile" message="#cfcatch.message#" />
		</cfcatch>
	</cftry>
	
	<cfreturn result />
</cffunction>



<!---
 Copies a directory.
 
 @param source 	 Source directory. (Required)
 @param destination 	 Destination directory. (Required)
 @param nameConflict 	 What to do when a conflict occurs (skip, overwrite, makeunique). Defaults to overwrite. (Optional)
 @return Returns nothing. 
 @author Joe Rinehart (&#106;&#111;&#101;&#46;&#114;&#105;&#110;&#101;&#104;&#97;&#114;&#116;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;) 
 @version 1, July 27, 2005 
--->
<!--- directoryCopy --->
<cffunction name="directoryCopy" returntype="boolean" access="public" output="false"
	displayname="DirectoryCopy" hint="I copy a directory and all of its contents from one location to another."
	description="I copy a directory and all of its contents from one location to another.">
    
    <cfargument name="source" required="true" type="string">
	<cfargument name="destination" required="true" type="string">
	<cfargument name="nameconflict" required="true" default="overwrite">

	<cfset var contents = "" />
	<cfset var dirDelim = "/" />
	
	<cfif server.OS.Name contains "Windows">
		<cfset dirDelim = "\" />
	</cfif>
	
	<cfif not(directoryExists(arguments.destination))>
		<cfdirectory 
			action="create" 
			directory="#arguments.destination#" />
	</cfif>
	
	<cfdirectory 
		action="list" 
		directory="#arguments.source#" 
		name="contents" />
	
	<cfloop query="contents">
		<cfif contents.type eq "file">
			
			<cffile action="copy" 
				source="#arguments.source & dirDelim & name#" 
				destination="#arguments.destination & dirDelim & name#" 
				nameconflict="#arguments.nameConflict#" />
		
		<cfelseif contents.type eq "dir">
			<!--- recursivly call myself --->
			<cfset directoryCopy(
				arguments.source & dirDelim & name, 
				arguments.destination & dirDelim & name) />
		</cfif>
	</cfloop>

	<cfreturn true />
</cffunction>



<!--- delete --->
<cffunction name="delete" access="public" output="false" returntype="boolean" 
	displayname="Delete" hint="I delete a file by path and name. Throws error if file not found."
	description="I attempt to delete a file by path and name. Throws error if file not found.">
	
	<cfargument name="Destination" required="true" type="string" 
		hint="I am the fully system path. I am required." />
	<cfargument name="FileName" required="true" type="any" 
		hint="I am the file name. I am required." />

	<cfset var result = false />
	
	<cftry>
		
		<cffile 
			action="delete" 
			file="#arguments.Destination##arguments.FileName#" />
		
		<cfset result = true />
		
		<cfcatch type="any">
			<cfthrow type="FileSystem.delete" message="#cfcatch.message#" />
		</cfcatch>
	</cftry>

	<cfreturn result />
</cffunction>



<!--- deleteDirectory --->
<cffunction name="deleteDirectory" returntype="any" access="public" output="false"
	displayname="Delete Directory" hint="I delete a directory."
	description="I delete a directory.">
    
    <cfargument name="directory" type="string" required="yes"
		hint="The directory to delete." />
    <cfargument name="recurse" type="boolean" required="no" default="false"
		hint="Whether or not the UDF should recurse. Defaults to false." />
    
    <cfset var myDirectory = "">
    <cfset var count = 0>

    <cfif right(arguments.directory, 1) is not "/">
        <cfset arguments.directory = arguments.directory & "/" />
    </cfif>
    
    <cfdirectory 
		action="list" 
		directory="#arguments.directory#" 
		name="myDirectory" />

    <cfloop query="myDirectory">
        <cfif myDirectory.name is not "." AND myDirectory.name is not "..">
			
			<cfset count = count + 1 />
            
			<cfswitch expression="#myDirectory.type#">
            
                <cfcase value="dir">
                    
					<!--- If recurse is on, move down to next level --->
                    <cfif arguments.recurse>
                        
						<cfset deleteDirectory(
                            arguments.directory & myDirectory.name,
                            arguments.recurse ) />
                    </cfif>
                </cfcase>
                
                <cfcase value="file">
                    
					<!--- delete file --->
                    <cfif arguments.recurse>
                        
						<cffile 
							action="delete" 
							file="#arguments.directory##myDirectory.name#" />
                    </cfif>
                </cfcase>            
            </cfswitch>
        </cfif>
    </cfloop>
	
    <cfif count is 0 or arguments.recurse>
        
		<cfdirectory 
			action="delete" 
			directory="#arguments.directory#" />
    </cfif>
    <cfreturn true />
</cffunction>



<!---
Makes all files in a directory lower case.

@param directory      Directory to begin renaming files in. (Required)
@param recurseDirectory      If true, UDF will recurse into subdirectories. Defaults to false. (Optional)
@param excludeList      List of files to ignore. Defaults to nothing. (Optional)
@return Returns nothing. 
@author Nathan Dintenfass (nathan@changemedia.com) 
@version 1, October 15, 2002 
--->
<cffunction name="fileNamesLowerCase" returntype="void" access="public" output="false"
	displayname="File Names Lower Case" hint="I make all files in a directory lower case."
	description="I make all files in a directory lower case.">
    
     <cfargument name="directory" required="yes" type="string">
    <cfargument name="recurseDirectories" required="no" default="false" type="boolean">
    <cfargument name="excludeList" required="no" type="string" default="">
    
    <!--- a variable to hold the directoryList --->
    <cfset var directoryList = "" />
	<!--- by default, use a Windows style slash --->
    <cfset var slash = "\" />
    
	<!--- make sure this directory exists --->
    <cfif NOT directoryExists(arguments.directory)>
        <cfthrow 
			message="Directory does not exist" 
			detail="The directory path #arguments.directory# does not exist" />
    </cfif>
    
	<!--- if this not windows, use a *nix style slash --->
    <cfif server.os.name DOES NOT CONTAIN "Windows">
        <cfset slash = "/" />
    </cfif>
    
	<!--- now make sure the directory path ends in a slash --->
    <cfif right(arguments.directory,1) IS NOT slash>
        <cfset arguments.directory = arguments.directory & slash />
    </cfif>
    
	<!--- read the contents of this directory --->
    <cfdirectory 
		action="list" 
		directory="#arguments.directory#" 
		name="directoryList" />
    
	<!--- loop through the contents of this directory, making it lower case --->
    <cfloop query="directoryList">
        
		<!--- if this is a file, rename it to whatever it is, lower-cased --->
        <cfif NOT compare(type,"File") AND NOT listFindNoCase(arguments.excludeList,name)>
            
			<cffile 
				action="rename" 
				source="#arguments.directory##name#" 
				destination="#arguments.directory##lcase(name)#" />
        
		<!--- if this a directory, and we are recursing, call this function again --->
        <cfelseif NOT compare(type,"Dir") AND arguments.recurseDirectories>
			
			<cfset fileNamesLowerCase(arguments.directory & name,1,arguments.excludeList) />
        </cfif>
    </cfloop>
    
</cffunction>



<!--- fixDestination --->
<cffunction name="fixDestination" access="public" output="false" returntype="any" 
	hint="I ensure that the destination ends with a slash, and I create the destination directory if it doesn't exist">
	
	<cfargument name="Destination" required="true" type="string" 
		hint="I am the fully system path. I am required." />
	
	<cfset var theDestination = arguments.Destination />
	
	<!--- add the trailing slash if none exists --->
	<cfif ListLast(theDestination,"") NEQ "/">
		<cfset theDestination = theDestination & "/" />
	</cfif>
	
	<cfif not directoryExists(theDestination)>
		<cfdirectory action="create" directory="#theDestination#" />
	</cfif>
	
	<cfreturn theDestination />
</cffunction>



<!--- listDirectory --->
<cffunction name="listDirectory" returntype="any" access="public" output="false"
	displayname="List Directory" hint="I return the contents of a directory as a query."
	description="I return the contents of a directory as a query.">
	
	<cfargument name="Destination" required="true" type="string" 
		hint="I am the full system path to the directory. I am required." />
	
	<cfset var result = 0 />
	
	<cfdirectory 
		directory="#arguments.Destination#" 
		name="result" 
		sort="desc" 
		action="list" />
	
	<cfreturn result />
</cffunction>



<!--- upload --->
<cffunction name="upload" access="public" output="false" returntype="any">
	
	<cfargument name="Destination" required="true" type="string" 
		hint="I am the fully system path. I am required." />
	<cfargument name="formFieldName" required="true" type="string" 
		hint="I am the form field name containing the file. I am required." />
	<cfargument name="NewFileName" type="string" 
		hint="I am the string to change the file name too. I default to an empty string." />

	<cfset var Result = structNew() />
	<cfset var FileUpload = 0 />
	<cfset var theDestination = fixDestination(arguments.Destination) />

	<cftry>
		<cfif StructKeyExists(arguments,"NewFileName")>
			
			<cffile action="upload" filefield="#arguments.formFieldName#" destination="#theDestination#"  nameconflict="makeunique" result="FileUpload" />
			
			<cfset Result.ServerFile = FileUpload.serverFile />
			
			<cfset move(theDestination,FileUpload.serverFileName,FileUpload.serverFileExt,arguments.NewFileName) />
			
			<cfif move.Success neq true>
				<cfthrow type="fileSystem.move" message="#cfcatch.message#" detail="#cfcfatch.detail#" />
			</cfif>
		<cfelse>
			
			<cffile action="upload" filefield="#arguments.formFieldName#" destination="#theDestination#"  nameconflict="overwrite" result="FileUpload" />
			
			<cfset Result.ServerFile = FileUpload.serverFile />
			<cfset Result.IsSuccess = true />
		</cfif>
		
		<cfcatch type="any">
			<cfthrow type="FileSystem.Upload" message="#cfcatch.message#" />
		</cfcatch>
	</cftry>

	<cfreturn Result />
</cffunction>



<!--- move --->
<cffunction name="move" returntype="struct" access="public" output="false"
	displayname="Move" hint="I move a file and return a structure of data about the move."
	description="I move a file and return a structure of data about the move.">
    
	<cfargument name="Destination" required="true" type="string" 
		hint="I am the fully system path. I am required." />
	<cfargument name="sourceFileName" required="true" type="string" 
		hint="I am the source file name. I am required." />
	<cfargument name="sourceFileExt" required="true" type="string" 
		hint="I am the source file extension. I am required." />
	<cfargument name="fileName" type="string" default="#uniqueFileName()#" 
		hint="I am the file name. I default to uniqueFileName()." />

	<cfset var result = structNew() />
	
	<cftry>
		
		<cffile 
			action="move" 
			source="#variables.basePath##arguments.sourceFileName#.#arguments.sourceFileExt#" 
			destination="#arguments.Destination##arguments.fileName#.#arguments.sourceFileExt#" />
		
		<cfset result.Success = true />
		<cfset result.SourceFile = arguments.sourceFileName & "." & arguments.sourceFileExt />
		<cfset result.DestinationFile = arguments.fileName & "." & arguments.sourceFileExt />
		
		<cfcatch type="any">
			<cfthrow type="fileSystem.move" message="#cfcatch.message#" />
		</cfcatch>
	</cftry>
	
	<cfreturn result />
</cffunction>



<!--- read --->
<cffunction name="read" returntype="any" access="public" output="false"
	displayname="Read" hint="I read a file and return its contents."
	description="I read a file and return its contents.">
    
    <cfargument name="Destination" required="true" type="string" 
		hint="I am the fully system path. I am required." />
	<cfargument name="FileName" required="true" type="any" 
		hint="I am the file name. I am required." />

	<cfset var result = "" />
	<cfset var content = 0 />
	
	<cftry>
		
		<cffile 
			action="read" 
			file="#arguments.Destination##arguments.FileName#" 
			variable="content" />
		
		<cfset result = content />
		
		<cfcatch type="any">
			<cfthrow type="FileSystem.read" message="#cfcatch.message#" />
		</cfcatch>
	</cftry>
	
	<cfreturn result />
</cffunction>



<!--- uniquefilename --->
<cffunction name="uniquefilename" returntype="string" access="public" output="false"
	displayname="Unique File Name" hint="I return a unique file name and can prefix it."
	description="I return a unique file name and can prefix it.">

	<cfargument name="prefix" type="string" default="File" 
		hint="I am the prefix for the name. I default to 'File'. " />
	
	<cfreturn arguments.prefix & dateformat(now(),"mmddyy") & "_" & timeformat(now(),"HHmmss") />
</cffunction>



<!--- deleteOldFiles --->
<cffunction name="deleteOldFiles" output="no">
	<cfargument name = "folder" default="#ExpandPath("temp")#" hint="absolute" />
	<cfargument name = "seconds" default="600" hint="delete files older than" />
	<cfargument name = "filter" default="*.*" hint="dir filter" />
	<cfargument name = "recurse" default="no" hint="recursive delete?" />
	<cfargument name = "lockname" default="deleteFiles" hint="lock name" />
	<cfargument name = "timeout" default="60" hint="lock timeout" />

	<cfset var files = "" />
	<cfset var date  = Now() />
	<cfset var deletedCount = 0 />

	<cflock name="#lockname#" timeout="#arguments.timeout#">
		<cfdirectory 
			action="list" 
			directory="#arguments.folder#" 
			filter="#arguments.filter#" 
			name="files" 
			recurse="#arguments.recurse#"/>

		<cfloop query="files">
			<cfif dateDiff("s",files.datelastmodified, date) gt arguments.seconds>
				<cffile action="delete" file="#files.directory#/#files.name#" />
				<cfset deletedCount++ />
			</cfif>
		</cfloop>

	</cflock>
	
</cffunction>
<!--- ****************************** Package ***************************** --->
<!--- ****************************** Private ***************************** --->
</cfcomponent>