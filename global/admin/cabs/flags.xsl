<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<html>
	<head></head>
	<body>
	<h1>Filenames for country flags</h1>
	<table>
			<tr><td><b>Country Name</b></td><td><b>Filename</b></td></tr>
		<xsl:for-each select="/Flags/Flag">
			<tr><td><xsl:value-of select="." /></td><td><xsl:value-of select="./@filename" /></td></tr>
		</xsl:for-each>
	</table>
	</body>
</html>
</xsl:template>

</xsl:stylesheet>