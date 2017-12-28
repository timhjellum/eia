
Sub BuildReport(rptName)
    dim xmlReport, xslReport, xmlSection, xslSection, xmlMain
    dim dirPath, reportPath, errorMsg
      
    errorMsg = ""
    reportDir = "" 
    
    ' The Main file (list of all reports and contact info)
    set xmlMain = LoadXMLFile(xmlPath & "ReportDefinitions.xml")
    
    set tmp   = xmlMain.documentElement.selectSingleNode("/ReportDefinitions/ReportGroup/Report[ReportName='" & rptName & "']/ReportPath") 
    reportDir = tmp.text 
    
    if (reportDir = "") then
      msgbox "Failed to read report path"
    end if
 
    dirPath  = basePath & reportDir & "\"  
       
    
    ' The standard SECTION XSL
    set xslSection = LoadXMLFile(xmlPath & "Section.xsl")

    
    ' Reset the XSL Document function attribute - this will point the function to the current directory relative to
    '  the XML directory.
    set varNode = xslSection.documentElement.selectNodes("xsl:variable[@name='rpt']")
    varValue = "document('ReportDefinitions.xml')/ReportDefinitions/ReportGroup/Report[ReportName='" & rptName & "']"
    varNode.item(0).setAttribute "select", varValue     
    
    
    ' Get the sections that will be processed for this report
    Set sect = xmlMain.selectNodes("/ReportDefinitions/ReportGroup/Report[ReportName='" & rptName & "']/Section")    
    
    for i = 1 to sect.length
       sectFileName = dirPath & sect.item(i-1).attributes.getNamedItem("SectionFileName").text
       
       xmlFileName  = sectFileName & ".xml"
       htmlFileName = sectFileName & ".html"
       
       if (CheckFile(xmlFileName)) then
         ' Load the xml file (in Word2003 xml format)
         set xmlSection = ConvertXML(xmlFileName)         
         
         ' Write it out...
         WriteFile htmlFileName, xmlSection.transformNode(xslSection)
       else
         errorMsg = errorMsg & xmlFileName & vbnewline
       end if
    next 

    if (len(errorMsg) > 0) then
      msgbox "BUILD SECTIONS WARNING - The following section files could not be found:" & vbnewline & vbnewline & errorMsg & vbnewline & "The html files will be created but these sections will be empty."
    end if
    
End Sub




Sub BuildSinglePageReport(rptName)
    dim xmlReport, xslReport, xmlSection, xslSection, xmlMain
    dim dirPath, reportPath, errorMsg
    
    errorMsg = ""
    reportDir = "" 
    
    ' The Main file (list of all reports and contact info)
    set xmlMain = LoadXMLFile(xmlPath & "ReportDefinitions.xml")
    
    set tmp   = xmlMain.documentElement.selectSingleNode("/ReportDefinitions/ReportGroup/Report[ReportName='" & rptName & "']/ReportPath") 
    reportDir = tmp.text 
    
    if (reportDir = "") then
      msgbox "Failed to read report path"
    end if
 
    dirPath  = basePath & reportDir & "\"  
       
    
    ' The single page XSL
    set xslSingle = LoadXMLFile(xmlPath & "SinglePage.xsl")

    
    ' Reset the XSL Document function attribute - this will point the function to the current directory relative to
    '  the XML directory.
    set varNode = xslSingle.documentElement.selectNodes("xsl:variable[@name='rpt']")
    varValue = "document('ReportDefinitions.xml')/ReportDefinitions/ReportGroup/Report[ReportName='" & rptName & "']"
    varNode.item(0).setAttribute "select", varValue     
    
    
    ' Build a single page by combining sections here...
    set xmlSingle = LoadXMLFile(xmlPath & "SinglePage.xml")

    ' Get the sections that will be processed for this report
    Set sect = xmlMain.selectNodes("/ReportDefinitions/ReportGroup/Report[ReportName='" & rptName & "']/Section")    
    
    for i = 1 to sect.length
       sectFileName = dirPath & sect.item(i-1).attributes.getNamedItem("SectionFileName").text
       xmlFileName  = sectFileName & ".xml"

       if (CheckFile(xmlFileName)) then
         ' Load the xml file (in Word2003 xml format)
         set xmlSection = ConvertXML(xmlFileName)         
         set newNode = xmlSection.documentElement.selectSingleNode("/Section") 
         
         xmlSingle.documentElement.appendChild (newNode)
       else
         errorMsg = errorMsg & xmlFileName & vbnewline
       end if
    next     
    
    if (len(errorMsg) > 0) then
      msgbox "BUILD SINGLE PAGE WARNING - The following section files could not be found:" & vbnewline & vbnewline & errorMsg & vbnewline & "The html file will be created but these sections can not be included."
    end if
 
    WriteFile dirPath & "Full.html", xmlSingle.transformNode(xslSingle)    
End Sub




Sub BuildReportGroup(grpName)
    dim xmlMain, xslReportGroup
    
    ' The Main file (list of all reports and contact info)
    set xmlMain = LoadXMLFile(xmlPath & "ReportDefinitions.xml")

    ' Search through the xmlMain document for the Report Group we're interested in 
    grpNode = "/ReportDefinitions/ReportGroup[GroupName='" & grpName & "']"
    set xmlReportGroup = xmlMain.documentElement.selectSingleNode(grpNode)
    groupFileName = xmlReportGroup.selectSingleNode("GroupFileName").text
     
    
    ' The XSL definition for report groups
    set xslReportGroup = LoadXMLFile(xmlPath & "HomePages.xsl")

    ' Set the variable (flag) to indicate this is for a report group
    set varNode = xslReportGroup.documentElement.selectNodes("xsl:variable[@name='pageType']")
    varNode.item(0).setAttribute "select", "'ReportGroup'"
    
    
    ' Process the XML/XSL using the subset of xml for this report group            
    WriteFile basePath & groupFileName, xmlReportGroup.transformNode(xslReportGroup)

End Sub




Sub BuildContacts()
    dim xmlMain, xslContacts

    ' The Main file (list of all reports and contact info)
    set xmlMain = LoadXMLFile(xmlPath & "Contacts.xml")

    ' The XSL definition for report groups
    set xslContacts = LoadXMLFile(xmlPath & "HomePages.xsl")

    ' Set the variable (flag) to indicate this is for a report group
    set varNode = xslContacts.documentElement.selectNodes("xsl:variable[@name='pageType']")
    varNode.item(0).setAttribute "select", "'Contacts'"

    
    ' Process the XML/XSL using the subset of xml for this report group            
    WriteFile basePath & "Contacts.html", xmlMain.transformNode(xslContacts)
End Sub




Sub BuildHome()
    dim xmlMain, xslHome

    ' The Main file (list of all reports and contact info)
    set xmlMain = LoadXMLFile(xmlPath & "ReportDefinitions.xml")

    ' The XSL definition for report groups
    set xslHome = LoadXMLFile(xmlPath & "HomePages.xsl")

    ' Set the variable (flag) to indicate this is for a report group
    set varNode = xslHome.documentElement.selectNodes("xsl:variable[@name='pageType']")
    varNode.item(0).setAttribute "select", "'Home'"

    ' Process the XML/XSL using the subset of xml for this report group            
    WriteFile basePath & "index.html", xmlMain.transformNode(xslHome)

    ' Some links to the CABS homepage want contents.html instead, so build an identical page at that location -mdc
    WriteFile basePath & "contents.html", xmlMain.transformNode(xslHome)

    ' Now create the "What's new page" -mdc
    varNode.item(0).setAttribute "select", "'Newint'"
    WriteFile basepath & "newint.html", xmlMain.transformNode(xslHome)
	
	' Now create the Listserve page -mdc
	varNode.item(0).setAttribute "select", "'Listserve'"
	set xmlListserve = ConvertXML(xmlPath & "Listserve.xml")
	WriteFile basepath & "Listserve.html", xmlListserve.transformNode(xslHome)    
    

End Sub



