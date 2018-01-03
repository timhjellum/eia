//******************************************************
// Javascript for the Monthly Energy Review web site
// File Name: mer_prts.js
// Purpose: Display the data release time stamp
// Author: Charles A. Allen II (Tony)
// Date: July 18, 2003
// Version: 2.0
// Revision: September 30, 2010
// MER Release: December 2010
//******************************************************
<!-- Hide script from old web browsers

function WriteMERBreadcrumbs(){
	var strcrumbs, strcrumbs1, strcrumbs2, strcrumbs3, strcrumbs4, strcrumbs5;
	strcrumbs1 = '<SPAN class=breadcrumbs>';
	strcrumbs2 = '<A href="http://www.eia.gov/">Home</A>';
	strcrumbs3 = '&gt; <A href="http://www.eia.gov/overview_hd.html">Historical Energy Data</A></span>';
	strcrumbs4 = '&gt; <span class=breadcrumbshd>MER</span>';
	strcrumbs = strcrumbs1 + strcrumbs2 + strcrumbs3 + strcrumbs4
	document.write(strcrumbs);
	return;
}
function WriteMERBreadcrumbs(intPageNum){
	var strcrumbs;
	var strcrumbs1, strcrumbs2, strcrumbs3, strcrumbs4, strcrumbs5;
	var strcrumbs6, strcrumbs7, strcrumbs8, strcrumbs9, strcrumbs10;
	var strcrumbs11, strcrumbs12, strcrumbs13, strcrumbs14, strcrumbs15;
	var strcrumbs16, strcrumbs17, strcrumbs18, strcrumbs19, strcrumbs20;
	var strcrumbs21;
	strcrumbs1 = '<SPAN class=breadcrumbs><A href="http://www.eia.gov/">Home</A></span>';
	strcrumbs2 = '&gt; <SPAN class=breadcrumbs><A href="http://www.eia.gov/overview_hd.html">Historical Energy Data</A></span>';
	strcrumbs3 = '&gt; <SPAN class=breadcrumbs><a href="contents.html">MER</a></span>';
	strcrumbs4 = '&gt; <span class=breadcrumbshd>Contents</a></span>';
	strcrumbs5 = '&gt; <span class=breadcrumbshd>Energy Overview</span>';
	strcrumbs6 = '&gt; <span class=breadcrumbshd>Energy Consumption by Sector</span>';
	strcrumbs7 = '&gt; <span class=breadcrumbshd>Petroleum</span>';
	strcrumbs8 = '&gt; <span class=breadcrumbshd>Natural Gas</span>';
	strcrumbs9 = '&gt; <span class=breadcrumbshd>Crude Oil and Natural Gas Resource Development</span>';
	strcrumbs10 = '&gt; <span class=breadcrumbshd>Coal</span>';
	strcrumbs11 = '&gt; <span class=breadcrumbshd>Electricity</span>';
	strcrumbs12 = '&gt; <span class=breadcrumbshd>Nuclear Energy</span>';
	strcrumbs13 = '&gt; <span class=breadcrumbshd>Energy Prices</span>';
	strcrumbs14 = '&gt; <span class=breadcrumbshd>Renewable Energy</span>';
	strcrumbs15 = '&gt; <span class=breadcrumbshd>International Petroleum</span>';
	strcrumbs16 = '&gt; <span class=breadcrumbshd>Environment</span>';
	strcrumbs17 = '&gt; <span class=breadcrumbshd>Appendix A</span>';
	strcrumbs18 = '&gt; <span class=breadcrumbshd>Appendix B</span>';
	strcrumbs19 = '&gt; <span class=breadcrumbshd>Appendix C</span>';
	strcrumbs20 = '&gt; <span class=breadcrumbshd>Contacts</span>';
	strcrumbs21 = '&gt; <span class=breadcrumbshd>What &rsquo;s New In</span>';
	strcrumbs22 = '&gt; <span class=breadcrumbshd>Order Information</span>';
	switch (intPageNum)
	{
	case 0: //base
		strcrumbs = strcrumbs1 + strcrumbs2 + strcrumbs3
	  break
	case 1: //section 1
		strcrumbs = strcrumbs1 + strcrumbs2 + strcrumbs3 + strcrumbs5
	  break
	case 2: //section 2
		strcrumbs = strcrumbs1 + strcrumbs2 + strcrumbs3 + strcrumbs6
	  break
	case 3: //section 3
		strcrumbs = strcrumbs1 + strcrumbs2 + strcrumbs3 + strcrumbs7
	  break
	case 4: //section 4
		strcrumbs = strcrumbs1 + strcrumbs2 + strcrumbs3 + strcrumbs8
	  break
	case 5: //section 5
		strcrumbs = strcrumbs1 + strcrumbs2 + strcrumbs3 + strcrumbs9
	  break
	case 6: //section 6
		strcrumbs = strcrumbs1 + strcrumbs2 + strcrumbs3 + strcrumbs10
	  break
	case 7:  //section 7
		strcrumbs = strcrumbs1 + strcrumbs2 + strcrumbs3 + strcrumbs11
	  break
	case 8:  //section 8
		strcrumbs = strcrumbs1 + strcrumbs2 + strcrumbs3 + strcrumbs12
	  break
	case 9:  //section 9
		strcrumbs = strcrumbs1 + strcrumbs2 + strcrumbs3 + strcrumbs13
	  break
	case 10:  //section 10
		strcrumbs = strcrumbs1 + strcrumbs2 + strcrumbs3 + strcrumbs14
	  break
	case 11:  //section 11
		strcrumbs = strcrumbs1 + strcrumbs2 + strcrumbs3 + strcrumbs15
	  break
	case 12:  //section 12
		strcrumbs = strcrumbs1 + strcrumbs2 + strcrumbs3 + strcrumbs16
	  break
	case 13:  //appendix a
		strcrumbs = strcrumbs1 + strcrumbs2 + strcrumbs3 + strcrumbs17
	  break
	case 14:  //appendix b
		strcrumbs = strcrumbs1 + strcrumbs2 + strcrumbs3 + strcrumbs18
	  break
	case 15:  //appendix c
		strcrumbs = strcrumbs1 + strcrumbs2 + strcrumbs3 + strcrumbs19
	  break
	case 16: //Contacts
		strcrumbs = strcrumbs1 + strcrumbs2 + strcrumbs3 + strcrumbs20
	  break
	case 17: //whats_new_in
		strcrumbs = strcrumbs1 + strcrumbs2 + strcrumbs3 + strcrumbs21
	  break
	case 18: //Order Information
		strcrumbs = strcrumbs1 + strcrumbs2 + strcrumbs3 + strcrumbs22
	  break
	}
	document.write(strcrumbs);
	return;
}
function WriteNotes()
{
	var strNotes, strNote1, strNote2, strNote3, strNote4, strNote5;
	strNote1 = '<tr><td class=plugs colspan=7><sup class=asterisk>*</sup>Notes:</td></tr>';
	strNote2 ='<tr><td class=plugs colspan=7>(1) PDF files display selected annual and monthly data.  Excel and CSV files display all available annual and monthly data.</td></tr>';
	strNote3 ='<tr><td class=plugs colspan=7>(2) PDF files include notation (&quot;R&quot;=revised) on the data that have changed, at the level of precision shown in the PDF files, since the previous release of the <i>Monthly Energy Review</i>.  Data revisions are not identified in the Excel and CSV files.</td></tr>';
	strNote4 = '<tr><td class=plugs colspan=7>(3) PDF files identify data that are estimated, with notation (&quot;E&quot;=estimate) on years or data values; with table notes; or with &quot;Estimated&quot; in the table title.  Estimates are not identified in the Excel and CSV files, except with some table titles in the Excel files.</td></tr>';
	strNote5 = '<tr><td class=plugs colspan=7>(4) PDF files identify data that are preliminary or forecast, with notation (&quot;P&quot;=preliminary, &quot;F&quot;=forecast) on years or data values.  Preliminary and forecast data are not identified in the Excel and CSV files.</td></tr>';
	strNotes = strNote1 + strNote2 + strNote3 + strNote4 + strNote5;
	document.write(strNotes);
	return;
}
// 01/25/2007 - Added by CA2
// 07/09/2009 - Revised by CA2 - added alt tag for 508 compliance
function ShowMerCover()
{
	var strMerCoverFileName, strCoverHTML;
	strMerCoverFileName = "2010mercover.jpg";
	strCoverHTML = "<center><img src='" + strMerCoverFileName + "' border=0" + " alt='" + "Monthly Energy Review report cover image" + "'></center>";
	document.write(strCoverHTML);
	return;
}
// Added by CA2 on 07/09/2007
function WriteLinks()
{
	var strPrevious, strContact, strAER, strSEDS, strIEA;
	var strIPM, strSTEO, strAEO, strIEO;
	var strLinks;
	strPrevious='<br>&nbsp;&nbsp;<a href="http://www.eia.gov/FTPROOT/monthlyhistory.htm" target="_blank">Previous Editions of MER</a>';
	strContact='<br>&nbsp;&nbsp;<a href="mercontacts.html" target="_blank">MER Contacts</a><br>';
	strAER='<br>&nbsp;&nbsp;<a href="http://www.eia.gov/emeu/aer/contents.html" target="_blank">Annual Energy Review</a>';
	strSEDS='<br>&nbsp;&nbsp;<a href="http://www.eia.gov/emeu/states/_seds.html" target="_blank">State Energy Data System</a><br>';
	strIEA='<br>&nbsp;&nbsp;<a href="http://www.eia.gov/cfapps/ipdbproject/IEDIndex3.cfm" target="_blank">International Energy Statistics</a>';
	strIPM='<br>&nbsp;&nbsp;<a href="http://www.eia.gov/ipm/contents.html" target="_blank">International Petroleum Monthly</a><br>';
	strSTEO='<br>&nbsp;&nbsp;<a href="http://www.eia.gov/emeu/steo/pub/contents.html" target="_blank">Short-Term Energy Outlook</a>';
	strAEO='<br>&nbsp;&nbsp;<a href="http://www.eia.gov/oiaf/aeo/index.html" target="_blank">Annual Energy Outlook</a>';
	strIEO='<br>&nbsp;&nbsp;<a href="http://www.eia.gov/oiaf/ieo/index.html" target="_blank">International Energy Outlook</a><br><br>';
	strLinks= strPrevious + strContact + strAER + strSEDS + strIEA + strIPM + strSTEO + strAEO + strIEO;
	document.write(strLinks);
	return;
}
-->
