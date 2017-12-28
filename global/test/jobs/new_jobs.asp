<%@LANGUAGE="VBSCRIPT" CODEPAGE="1252"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

		
<head>
<title>EIA - Job Opportunities</title>
<meta name="agency" content="EIA">
<meta name="audience" content="general">
<meta name="subject" content="energy data and statistics">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link href="/styles/eia_sitewideF.css" rel="stylesheet" type="text/css">
<link rel="alternate" type="application/rss+xml" title="EIA Job Opportunities" href="http://www.eia.gov/rss/jobs_rss.xml" />
<script language="JavaScript" src="/styles/eia_header.js" type="text/javascript"></script>
<script language="JavaScript" src="/styles/eia_footer.js" type="text/javascript"></script>
</head>
<body bgColor="#ffffff" leftMargin="0" topMargin="0" marginwidth="0" marginheight="0">
<!-- BEGIN BANNER, & SEARCH -->
<script language="JavaScript">InsertEIAHeaderCode();</script> 

<!-- END OF SEARCH & BANNER -->
    <!-- ****************************************** End HEADER ************************************************** -->

<%'If Request("id") = 1 Then%>
	  <%Dim title, opendate, closedate, hiringorg, area, num, link, grade, titleAry(), DateAry() , counter, rsCheckdb, rsempty
	  	Dim objRS, objConn, objCount, i
	  	Set objRS = Server.CreateObject("ADODB.Recordset")
		Set sortRS = Server.CreateObject("ADODB.Recordset")
		Set objConn = Server.CreateObject("ADODB.Connection")
		Set objCount = Server.CreateObject("ADODB.Recordset")
		Set rsCheckdb =  Server.CreateObject("ADODB.Recordset")
		
		'objConn.ConnectionString="Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" &_
		'Server.MapPath("update/jobs_new.mdb")&";"
		'objConn.Open
		objConn.Open("DSN=NEIC;UID=NEICWEB;PWD=h3dm$xabw;")
		
		rsCheckdb.Open "Select * From neic.jobs", objConn
		
		rsempty = false
	    If not rsCheckdb.eof Then		
			If request("sortid") = "TD" Then	
			objRS.Open "Select posit_title, grade, opendate, closedate, hiringorg, areaconsid, announc_no, announc_link From neic.jobs Where posit_title IS NOT null and active = 'active' ORDER BY posit_title DESC", objConn
			ElseIf request("sortid") = "TA" Then	
			objRS.Open "Select posit_title, grade, opendate, closedate, hiringorg, areaconsid, announc_no, announc_link From neic.jobs Where posit_title IS NOT  null and active = 'active' ORDER BY posit_title ASC", objConn
			ElseIf request("sortid") = "DA" Then	
			objRS.Open "Select posit_title, grade, opendate, closedate, hiringorg, areaconsid, announc_no, announc_link From neic.jobs Where posit_title IS NOT  null and active = 'active' ORDER BY closedate ASC", objConn
			ElseIf request("sortid") = "DD" Then	
			objRS.Open "Select posit_title, grade, opendate, closedate, hiringorg, areaconsid, announc_no, announc_link From neic.jobs Where posit_title IS NOT  null and active = 'active' ORDER BY closedate DESC", objConn
			Else
			objRS.Open "Select posit_title, grade, opendate, closedate, hiringorg, areaconsid, announc_no, announc_link From neic.jobs Where posit_title IS NOT  null and active = 'active' ORDER BY posit_title", objConn
			End If
			objCount.Open "Select Count(posit_title) counter FROM neic.jobs", objConn
			sortRS.Open "Select posit_title, closedate From neic.jobs Where posit_title IS NOT  null and active = 'active' ", objConn
	 	Else
		rsempty = true	
		End If
	  %>

    <!-- THIS BEGIN THE MAIN CONTENT TABLE-->
    <!-- INSERT CONTENT HERE-->
    <div align="left">
      
  <table width="100%"  border="0" cellspacing="2" cellpadding="3">
    <tr> 
      <td align="left" class="breadcrumbs"><a href="http://www.eia.gov">Home</a> 
        &gt; <span class="breadcrumbshd">Careers</span></td>
    </tr>
    <tr> 
      <th class="SectionHead"> 
        <div align="left"><font size="+1">Career Opportunities at EIA</font> &nbsp; 
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
      </th>
    </tr>
    <tr>
      <td height="7" ></td>
    </tr>
    <tr> 
      <td > 
        <div align="left" class="report_bold"> <a href="#jobs" style="text-decoration:none;">Current 
          Job Openings </a> | <a href="http://www.eia.gov/eiajobs/eiajobs_benefits.html" style="text-decoration:none;">Benefits</a> 
          | <a href="http://www.eia.gov/eiajobs/eiajobs_whyichose.html" style="text-decoration:none;">Why 
          I Chose EIA </a>| <a href="http://www.eia.gov/eiajobs/eiajobs_intern.html" style="text-decoration:none;">Internships 
          </a>| <a href="http://www.eia.gov/eiajobs/eiajobs_tipscontacts.html" style="text-decoration:none;">Application 
          Tips &amp; Contacts</a> </div>
        <hr color="#990000" size="1">
      </td>
    </tr>
    <tr > 
      <td align="left" height="7" ></td>
    </tr>
    <tr> 
      <td style="padding:18px;" align="left"> 
        <p class="SubSection"><img src="http://www.eia.gov/eiajobs/images/new-coverA.jpg" alt="picture" width="155" height="307" align="right" hspace="18" border="0">Join 
          our team of professionals who provide comprehensive, reliable data, 
          analysis and forecasts to industry, government, media, academia, and 
          the American public. Starting salaries range from $41,000 to $95,000, 
          however, executives can earn upwards of $160,000. We are searching for 
          candidates who qualify as:<br>
          <br>
          &nbsp; &nbsp; &nbsp; <img src="http://www.eia.gov/images/sqgreybullet.gif" align="absmiddle"> 
          <a href="http://www.eia.gov/eiajobs/math.pdf">Mathematical Statisticians</a><font class="tagline"> 
          (PDF) </font><br>
          &nbsp; &nbsp; &nbsp; <img src="http://www.eia.gov/images/sqgreybullet.gif" align="absmiddle"> 
          <a href="http://www.eia.gov/eiajobs/survey1.pdf">Survey Statisticians</a><font class="tagline"> 
          (PDF) </font><br>
          &nbsp; &nbsp; &nbsp; <img src="http://www.eia.gov/images/sqgreybullet.gif" align="absmiddle"> 
          <a href="http://www.eia.gov/eiajobs/economist2.pdf">Industry Economists</a><font class="tagline"> 
          (PDF) </font><br>
          &nbsp; &nbsp; &nbsp; <img src="http://www.eia.gov/images/sqgreybullet.gif" align="absmiddle"> 
          <a href="http://www.eia.gov/eiajobs/oper%20research.pdf">Operations 
          Research Analysts</a><font class="tagline"> (PDF) </font><br>
          &nbsp; &nbsp; &nbsp; <img src="http://www.eia.gov/images/sqgreybullet.gif" align="absmiddle"> 
          <a href="http://www.eia.gov/eiajobs/engineer.pdf">Engineers</a><font class="tagline"> 
          (PDF) </font></p>
        <p class="SubSection"> <b>Who Qualifies?</b><br>
          While we prefer degrees in mathematics, statistics, economics, operations 
          research and engineering for entry-level positions, degrees in social 
          sciences or business are okay too, especially if you have an emphasis 
          on statistical data gathering and analysis. We are also looking for 
          graduates who have taken courses in regression and linear modeling, 
          exploratory data analysis, and in econometrics. Beyond the technical 
          qualifications, EIA seeks intelligent, flexible and motivated employees 
          who have good team skills and who like to think critically, innovate 
          and solve problems. And if you are a talented writer, so much the better! 
          U.S. citizenship is required.<br>
          <br>
          Learn more <a href="http://www.eia.gov/abouteia/">about 
          EIA</a> and the <a href="http://www.eia.gov/eiajobs/eiajobs_benefits.html">benefits 
          of working with us</a>. 
      </td>
    </tr>
    <tr> 
      <td> 
<p class="SubSection"><a name="jobs"></a>
          &nbsp; &nbsp;<b>Current Job Openings</b><br> 
          &nbsp; &nbsp;Applications must follow procedure detailed in the announcement and submit to USAjobs.gov.
		          <table border="0" width="90%" cellpadding="5" align="center">
          <tr> 
            <td width="30%" class="data" bgcolor="D3E1FA"> 
              <div align="center"><br>
                <b><a href="jobs3.asp?sortid=TA"><img src="images/asc.gif" border="0"></a>&nbsp;Position 
                Title&nbsp;<a href="jobs3.asp?sortid=TD"><img src="images/desc.gif" border="0"></a> 
                </b></div>
            </td>
            <td class="data" bgcolor="D3E1FA" width="10%">
              <div align="center"><b>Grade</b></div>
            </td>
            <td class="data" bgcolor="D3E1FA" width="10%"> 
              <div align="center"><b>Opening <br>
                Date</b></div>
            </td>
            <td class="data" bgcolor="D3E1FA" width="10%" nowrap> 
              <div align="center"><b>Closing <br>
                <a href="jobs3.asp?sortid=DA"><img src="images/asc.gif" border="0"></a> 
                &nbsp;Date&nbsp;<a href="jobs3.asp?sortid=DD"><img src="images/desc.gif" border="0"></a></b></div>
            </td>
            <td width="15%" class="data" bgcolor="D3E1FA"> 
              <div align="center"><b>Area of <br>
                Consideration</b></div>
            </td>
            <td class="data" bgcolor="D3E1FA" width="25%"> 
              <div align="center"><b>Announcement <br>
                Number</b></div>
            </td>
          </tr>
          <%
		 If rsempty = true Then
		 Response.Write "<tr><td colspan=6 class=SubSection>"& "While there are no open announcements at this time, <a href=mailto:careers@eia.doe.gov>contact our career team</a> to learn about our upcoming openings." & "</td></tr>"
		 Else
			While Not objRS.EOF  		
				title = objRS.Fields("posit_title")
				closedate = objRS.Fields("closedate")			
				grade = objRS.Fields("grade")
				opendate = objRS.Fields("opendate")			
				hiringorg = objRs.Fields("hiringorg")
				area = objRS.Fields("areaconsid")
				num = objRS.Fields("announc_no")
				link = objRS.Fields("announc_link")			
			  %>
          <tr class="SubSection"> 
            <td width="28%"><%=title%></td>
            <td width="16%"><%=grade%></td>
            <td width="10%"><%=opendate%></td>
            <td width="10%"><%=closedate%></td>
            <td width="17%"><%=area%></td>
            <td width="19%"><a href="<%=link%>"><%=num%></a></td>
          </tr>
          <%objRS.MoveNext
		   wend
	   End If%>
          <tr bgcolor="D3E1FA"> 
            <td class="data" height="1" colspan="7"></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr> 
      <td style="padding:18px;" > 
        <!-- AddThis Bookmark Button BEGIN -->
			  <a href="http://www.addthis.com/bookmark.php" onclick="addthis_url   = location.href; addthis_title = document.title; return addthis_click(this);" target="_blank" class="report_summary" style="text-decoration:none"><img src="http://www.eia.gov/cfapps/energy_in_brief/images/Share-this.jpg" width="25" height="25" border="0" align="absmiddle"/> Share this page</a>
              <script type="text/javascript">var addthis_pub = 'Energy Information Administration';</script><script type="text/javascript" src="http://s9.addthis.com/js/widget.php?v=10"></script>  			  

<br>
<br>
<a href="http://www.eia.gov/listserv_signup.html" class="report_summary" style="text-decoration:none"><img src="http://www.eia.gov/images-homepage/email-icon.jpg" width="20" height="15" border="0" align="texttop"/> &nbsp;Sign up for the Jobs at EIA email updates</a> <br>
<br>
&nbsp;<a href="http://www.eia.gov/cfapps/rss/jobs_rss.cfm" class="report_summary" style="text-decoration:none"><img src="http://www.eia.gov/images/rss_icon.jpg" width="16" height="16" border="0" align="texttop" class="icon_margin" />&nbsp;
        Get the Jobs at EIA RSS feed</a>
				  <p class="SubSection"><br>
          <b>Workforce Diversity &amp; Nondiscrimination</b><br>
          The EIA is an equal opportunity employer, with a commitment to workforce 
          diversity.<br>
          <img src="http://www.eia.gov/images/sqgreybullet.gif" align="absmiddle"> 
          <a href="http://civilrights.doe.gov/No_Fear_Act/no_fear_act.html">EEO/No 
          FEAR</a> - Equal Employment Opportunity data posted pursuant to the 
          Notification and Federal Employee Antidiscrimination and Retaliation 
        Act of 2002 (No FEAR Act), Public Law 107-174. </p>
        <p class="SubSection"><b>Other Employment Listings</b><br>
          <img src="http://www.eia.gov/images/sqgreybullet.gif" align="absmiddle"> 
          <a href="http://www.usajobs.opm.gov">USAJOBS</a> is the Federal Government's 
          official one-stop source for Federal jobs and employment information.<br>
          <br>
          <br>
        </p>
    </table>   
    <!-- THIS END THE MAIN CONTENT TABLE-->
    <!-- END BODY TEXT -->
    <!-- ****************************************** Begin FOOTER ************************************************ -->
    <!-- START FOOTER HERE -->
<script language="JavaScript">InsertEIAFooterCode();</script> 
<!-- ****************************************** End FOOTER ************************************************** -->

</DIV>

</body>
</html>
