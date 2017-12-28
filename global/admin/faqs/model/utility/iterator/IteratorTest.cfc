<cfcomponent extends="mxunit.framework.TestCase" output="false">

	<cffunction name="testIterateQuery" access="public" returntype="void" output="false">
	
		<cfscript>
		var query = querySim('
		id , name , mail
		1 | weed | weed@theflowerpot.not
		2 | bill | bill@theflowerpot.not
		3 | ben | ben@theflowerpot.not
		');
		
		var iterator = new Iterator( query );
		var counter = 0;
		
		while( iterator.hasNext() )
		{
			counter++;		
			var thisRow = iterator.next();
			assertTrue( query['id'][counter] == thisRow['id'], "ID not found." );	
			assertTrue( query['name'][counter] == thisRow['name'], "Name not found." );	
			assertTrue( query['mail'][counter] == thisRow['mail'], "Mail not found." );	
		}
		
		assertTrue( counter == 3, "Iterator did not loop the correct number of times." );	
		</cfscript>
	
	</cffunction>
	
	<cffunction name="testIterateArray" access="public" returntype="void" output="false">
	
		<cfscript>
		var array = ['foo', 'boo', 'zoo'];
		var iterator = new Iterator( array );
		var counter = 0;
		
		while( iterator.hasNext() )
		{
			counter++;
			var thisRow = iterator.next();
			assertTrue( array[counter] == thisRow, "Array element not found." );	
		}
		
		assertTrue( counter == 3, "Iterator did not loop the correct number of times." );	
		</cfscript>
	
	</cffunction>
	
	<cffunction name="testIterateStruct" access="public" returntype="void" output="false">
	
		<cfscript>
		var struct = {first='foo', second='boo', third='zoo'};
		var iterator = new Iterator( struct );
		var counter = 0;
		
		while( iterator.hasNext() )
		{
			counter++;	
			var thisRow = iterator.next();
			var thisKey = StructFindValue( struct, thisRow )[1].key;
			assertTrue( struct[thisKey] == thisRow, "Struct item not found." );	
		}
		
		assertTrue( counter == 3, "Iterator did not loop the correct number of times." );	
		</cfscript>
	
	</cffunction>
	
	<cffunction name="testIterateList" access="public" returntype="void" output="false">
	
		<cfscript>
		var list = 'foo,boo,0,zoo';
		var iterator = new Iterator( list );
		var counter = 0;
		
		while( iterator.hasNext() )
		{
			counter++;	
			var thisRow = iterator.next();
			assertTrue( ListGetAt( list, counter ) == thisRow, "List item not found." );	
		}
		
		assertTrue( counter == 4, "Iterator did not loop the correct number of times." );	
		</cfscript>
	
	</cffunction>
	
	<cffunction name="testIterateArrayReset" access="public" returntype="void" output="false">
	
		<cfscript>
		var array = ['foo', 'boo', 'zoo'];
		var iterator = new Iterator( array );
		var counter = 0;
		
		while( iterator.hasNext() )
		{
			counter++;	
			var thisRow = iterator.next();
		}
		
		assertTrue( !iterator.hasNext(), "Iterator should have no more items to iterate over." );
		iterator.reset();
		assertTrue( iterator.hasNext(), "Iterator should have more items to iterate over." );
		thisRow = iterator.next();
		counter++;
		assertTrue( counter == 4, "Iterator did not loop the correct number of times." );
		assertTrue( array[1] == thisRow, "Array element not found." );
		</cfscript>
	
	</cffunction>

	<cffunction name="testIterateStructReset" access="public" returntype="void" output="false">
	
		<cfscript>
		var struct = {first='foo', second='boo', third='zoo'};
		var iterator = new Iterator( struct );
		var counter = 0;
		
		while( iterator.hasNext() )
		{
			counter++;	
			var thisRow = iterator.next();
		}
		
		assertTrue( !iterator.hasNext(), "Iterator should have no more items to iterate over." );
		iterator.reset();
		assertTrue( iterator.hasNext(), "Iterator should have more items to iterate over." );
		thisRow = iterator.next();
		counter++;
		assertTrue( counter == 4, "Iterator did not loop the correct number of times." );	
		var thisKey = StructFindValue( struct, thisRow )[1].key;
		assertTrue( struct[thisKey] == thisRow, "Struct item not found." );	
		</cfscript>
	
	</cffunction>
	
	<cffunction name="testIterateStructEmpty" access="public" returntype="void" output="false" mxunit:expectedException="IteratorException.NoIterableValues">
	
		<cfscript>
		var struct = {};
		var iterator = new Iterator( struct );
		
		assertTrue( !iterator.hasNext(), "Struct has next items when it should not." );
		assertTrue( iterator.next() == 0, "Should have no next() value." );	
		</cfscript>
	
	</cffunction>

	<cffunction name="testIterateQueryEmpty" access="public" returntype="void" output="false" mxunit:expectedException="IteratorException.NoIterableValues">
	
		<cfscript>
		var query = QueryNew( 'id, name, mail' );
		var iterator = new Iterator( query );
		assertTrue( !iterator.hasNext(), "Iterator has next items when it should not." );
		assertTrue( iterator.next() == 0, "Should have no next() value." );	
		</cfscript>
	
	</cffunction>
	
	<cffunction name="testIterateArrayEmpty" access="public" returntype="void" output="false" mxunit:expectedException="IteratorException.NoIterableValues">
	
		<cfscript>
		var array = [];
		var iterator = new Iterator( array );
		assertTrue( !iterator.hasNext(), "Array has next items when it should not." );
		assertTrue( iterator.next() == 0, "Should have no next() value." );	
		</cfscript>
	
	</cffunction>
	
	<cffunction name="testIterateListEmpty" access="public" returntype="void" output="false" mxunit:expectedException="IteratorException.NoIterableValues">
	
		<cfscript>
		var list = "";
		var iterator = new Iterator( list );
		assertTrue( !iterator.hasNext(), "List has next items when it should not." );
		assertTrue( iterator.next() == 0, "Should have no next() value." );	
		</cfscript>
	
	</cffunction>

	<cffunction name="testIterateNoCollection" access="public" returntype="void" output="false" mxunit:expectedException="Application">
	
		<cfscript>
		var iterator = new Iterator();
		</cfscript>
	
	</cffunction>

	<cfscript>
	/**
	* Accepts a specifically formatted chunk of text, and returns it as a query object.
	* v2 rewrite by Jamie Jackson
	*
	* @param queryData      Specifically format chunk of text to convert to a query. (Required)
	* @return Returns a query object.
	* @author Bert Dawson (bert@redbanner.com)
	* @version 2, December 18, 2007
	*/
	private function querySim(queryData) {
	    var fieldsDelimiter="|";
	    var colnamesDelimiter=",";
	    var listOfColumns="";
	    var tmpQuery="";
	    var numLines="";
	    var cellValue="";
	    var cellValues="";
	    var colName="";
	    var lineDelimiter=chr(10) & chr(13);
	    var lineNum=0;
	    var colPosition=0;
	
	    // the first line is the column list, eg "column1,column2,column3"
	    listOfColumns = Trim(ListGetAt(queryData, 1, lineDelimiter));
	    
	    // create a temporary Query
	    tmpQuery = QueryNew(listOfColumns);
	
	    // the number of lines in the queryData
	    numLines = ListLen(queryData, lineDelimiter);
	    
	    // loop though the queryData starting at the second line
	    for(lineNum=2; lineNum LTE numLines; lineNum = lineNum + 1) {
	     cellValues = ListGetAt(queryData, lineNum, lineDelimiter);
	
	        if (ListLen(cellValues, fieldsDelimiter) IS ListLen(listOfColumns,",")) {
	            QueryAddRow(tmpQuery);
	            for (colPosition=1; colPosition LTE ListLen(listOfColumns); colPosition = colPosition + 1){
	                cellValue = Trim(ListGetAt(cellValues, colPosition, fieldsDelimiter));
	                colName = Trim(ListGetAt(listOfColumns,colPosition));
	                QuerySetCell(tmpQuery, colName, cellValue);
	            }
	        }
	    }
	    
	    return( tmpQuery );
	    
	}
	</cfscript>

</cfcomponent>
