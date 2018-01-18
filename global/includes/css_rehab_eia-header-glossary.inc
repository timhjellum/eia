<script language="javascript">
	function validate(){	
		if(document.forms.frmGlossary.glossary.value == "") {
			alert("You must enter a value in the search term field!"); 
		}
		document.frmGlossary.submit();	
	} 	
</script>
<div class="form-wrapper">
    <form action="https://www.eia.gov/tools/glossary/index.php" method="post" name="frmGlossary">
        <input class="fancy-search-box" name="glossary" placeholder="Search the glossary" onfocus="this.placeholder=''" onblur="this.placeholder='Search the glossary'"
            type="text" />
        <button onClick="validate()" class="search-submit">
            <i class="ico search-submit">Search</i>
        </button>
        <!-- input class="arrow_go" border="0" type="button" value="Search" name="search" alt="enter terms to search" onClick="validate()" title="Search Glossary" -->
    </form>
</div>





