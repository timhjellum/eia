
basePath = "Z:\NewCABs\V6\"
xmlPath  = basePath & "XML\"

Sub SetPath(bPath)
  ' Make sure they provided some path value 
  if (len(trim(bPath)) > 0) then
    basePath = bPath
  end if  
     
  ' Make sure the basePath ends with a "/"
  if (right(basePath,1) <> "\") then 
   basePath = basePath & "\"
  end if
End Sub



' This function opens an XML or XSL file and returns the object
Function LoadXMLFile(fileName) 
  Dim xmlFile
  
  set xmlFile = CreateObject("Microsoft.XMLDOM")
  xmlFile.async = false
  xmlFile.validateOnParse = false
'  xmlFile.resolveExternals = True
  xmlFile.load (fileName)
  
  set LoadXMLFile = xmlFile  
End Function



' This function loads a Word2003 xml doc and converts it to the CABs xml format
Function ConvertXML(fileName) 
  Dim xmlFile
  
  set xmlFile = CreateObject("Microsoft.XMLDOM")

  ' Load the xml file (in Word2003 xml format)
  set xmlWord = LoadXMLFile(fileName)
 
  ' Load the xsl transform file
  set xslConvert = LoadXMLFile(xmlPath & "WordConversion.xsl")
  
  ' Run the transform
  strCABS = xmlWord.transformNode(xslConvert)
    
  ' Load the string version of the converted xml
  xmlFile.loadXML (strCABS)
  
  set ConvertXML = xmlFile  
End Function




Sub WriteFile(fileName, daText)
  Dim fso, myFile
  
  Set fso = CreateObject("Scripting.FileSystemObject")
  Set myFile= fso.CreateTextFile(fileName, True, True)
  
  myFile.WriteLine (daText) 
  
  myFile.Close
End Sub


' Checks to see if a file exists
Function CheckFile(fileName)
  Dim fso, blnExists
  
  Set fso = CreateObject("Scripting.FileSystemObject")
  blnExists = fso.FileExists(fileName)  
  
  CheckFile = blnExists
End Function



Sub ToggleChanges(blnChange, blnSave)
  isSaved   = blnSave
  isChanged = blnChange
End Sub



Sub FinalCheck()
  if (not isSaved) then  
    strConfirm = msgbox ("You did not save the changes?  These changes will be lost if you do not save now.  Would you like to save before exiting?", vbYesNo, "Changes Not Saved")
    ' yes=6, no=7  
    if (strConfirm = "6") then
      SaveXML
    end if
  end if   
End Sub


Sub changeFlag(x, bln)
  aryFlags(x) = cbool(bln)
'  aryFlags(x) = not aryFlags(x)
End Sub



Function GetLastUpdated()
  strMo = cstr(Month(Now()))
  strDy = cstr(Day(Now()))
  strYr = cstr(Year(Now()))

  if (len(strMo) = 1) then
    strMo = "0" & strMo
  end if
  
  if (len(strDy) = 1) then
    strDy = "0" & strDy
  end if
  
  GetLastUpdated = strYr & "-" & strMo & "-" & strDy
End Function

