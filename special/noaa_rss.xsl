<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
 xmlns:wfw="http://wellformedweb.org/CommentAPI/">
    <xsl:output method="html"/>
    <xsl:template match="/">
        <xsl:apply-templates select="/rss/channel"/>
    </xsl:template>
    <xsl:template match="/rss/channel">
        <h3><xsl:value-of select="title"/></h3>
        <p><xsl:value-of select="description"/></p>
        <ul>
            <xsl:apply-templates select="item"/>
        </ul>
    </xsl:template>
    <xsl:template match="/rss/channel/item">
        <li>
            <a href="{link}" title="{substring(pubDate, 0, 11)}"><xsl:value-of select="title"/></a>
            <p><xsl:value-of select="description" disable-output-escaping="yes" /></p>
        </li>
    </xsl:template>
</xsl:stylesheet>
