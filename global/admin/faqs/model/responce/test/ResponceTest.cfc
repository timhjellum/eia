<cfcomponent output="false" extends="fw1starter.model.basetest.BaseTest">


<!--- createResponce --->
<cffunction name="createResponce" output="false" access="private">
	<cfreturn createObject("component", "#this.context#model.responce.Responce").init() />
</cffunction>


<!--- createResponceNoInit --->
<cffunction name="createResponceNoInit" output="false" access="private">
	<cfreturn createObject("component", "#this.context#model.responce.Responce") />
</cffunction>



<!--- testAddAndGetErrorMessage --->
<cffunction name="testAddAndGetErrorMessage" output="false">
	
	<cfset var r = createResponce() />
	<cfset var m = arrayNew(1) />
	
	<!--- pretest --->
	<cfset assertFalse(r.hasErrorMessages(), "A new Responce object all ready has messages!") />
	<cfset r.addMessage(message = "foo", type = "error") />
	
	<cfset m = r.getMessages(type = "error") />
	
	<cfset assertIsArray(m, "No message was set!") />
	<cfset assertTrue(arrayLen(m) eq 1, "NO There was more than one entr in the array!") />
	<cfset assertEquals(m[1].message, "foo", "No the values were different!") />
</cffunction>



<!--- testAddAndGetFeedbackMessage --->
<cffunction name="testAddAndGetFeedbackMessage" output="false">
	
	<cfset var r = createResponce() />
	<cfset var m = arrayNew(1) />
	
	<!--- pretest --->
	<cfset assertFalse(r.hasFeedbackMessages(), "A new Responce object all ready has messages!") />
	<cfset r.addMessage(message = "foo", type = "feedback") />
	
	<cfset m = r.getMessages(type = "Feedback") />
	
	<cfset assertIsArray(m, "No message was set!") />
	<cfset assertTrue(arrayLen(m) eq 1, "NO There was more than one entr in the array!") />
	<cfset assertEquals(m[1].message, "foo", "No the values were different!") />
</cffunction>



<!--- testClearMessages --->
<cffunction name="testClearMessages" output="false">
	<cfset var r = createResponce() />
	<cfset var m = arrayNew(1) />

	<!--- pretest --->
	<cfset assertFalse(r.hasMessages(), "A new Responce object all ready has messages!") />
	<cfset r.addMessage("love") />
	
	<cfset m = r.getMessages() />

	<cfset assertIsArray(m, "No message was set!") />
	<cfset assertTrue(arrayLen(m) eq 1, "NO There was more than one entr in the array!") />
	<cfset assertEquals(m[1].message, "love", "No the values were different!") />
	
	<cfset r.clearMessages() />
	<cfset assertTrue(arrayLen(r.getMessages()) eq 0, "The messages array still has something in it.") />
		
</cffunction>



<!--- testAddAndGet5000Messages --->
<cffunction name="testAddAndGet5000Messages" output="false">
	
	<cfset var r = createResponce() />
	<cfset var m = arrayNew(1) />
	<cfset var x = 0 />
	
	<!--- pretest --->
	<cfset assertFalse(r.hasMessages(), "A new Responce object all ready has messages!") />
	
	<cfloop from="1" to="5000" index="x">
		<cfset r.addMessage(message = "foo") />
	</cfloop>
	
	<cfset m = r.getMessages() />
	
	<cfset assertIsArray(m, "No message was set!") />
	<cfset assertTrue(arrayLen(m) eq 5000, "NO There was more than one entr in the array!") />
	<cfset assertEquals(m[1398].message, "foo", "No the values were different!") />
</cffunction>



<!--- testGetFeedback --->
<cffunction name="testGetFeedback" output="false">
	
	<cfset var r = createResponce() />
	<cfset var m = arrayNew(1) />
	
	<!--- pretest --->
	<cfset assertFalse(r.hasMessages(), "A new Responce object all ready has messages!") />
	<cfset r.addMessage(message = "foo", type = "feedback") />
	
	<cfset m = r.getFeedback() />

	<cfset assertIsArray(m, "No message was set!") />
	<cfset assertTrue(arrayLen(m) eq 1, "NO There was more than one entr in the array!") />
	<cfset assertEquals(m[1].message, "foo", "No the values were different!") />
</cffunction>



<!--- testGetErrors --->
<cffunction name="testGetErrors" output="false">
	
	<cfset var r = createResponce() />
	<cfset var m = arrayNew(1) />

	<!--- pretest --->
	<cfset assertFalse(r.hasMessages(), "A new Responce object all ready has messages!") />
	<cfset r.addMessage(message = "foo", type = "error") />
	
	<cfset m = r.getErrors() />
	
	<cfset assertIsArray(m, "No message was set!") />
	<cfset assertTrue(arrayLen(m) eq 1, "NO There was more than one entr in the array!") />
	<cfset assertEquals(m[1].message, "foo", "No the values were different!") />
</cffunction>



<!--- testGetMessagesEveryType --->
<cffunction name="testGetMessagesEveryType" output="false">
	
	<cfset var r = createResponce() />
	<cfset var e = arrayNew(1) />
	<cfset var f = arrayNew(1) />
	<cfset var d = arrayNew(1) />
	
	<!--- pretest --->
	<cfset assertFalse(r.hasMessages(), "A new Responce object all ready has messages!") />
	<cfset r.addMessage(message = "bar", type = "error") />
	<cfset r.addMessage(message = "foo", type = "feedback") />
	<cfset r.addMessage(message = "ja") />
	
	<cfset e = r.getMessages(type = "error") />
	<cfset f = r.getMessages(type = "feedback") />
	<cfset d = r.getMessages() />

	<cfset assertIsArray(e, "No message was set!") />
	<cfset assertTrue(arrayLen(e) eq 1, "NO There was more than one entr in the array!") />
	<cfset assertEquals(e[1].message, "bar", "No the values were different!") />
	
	<cfset assertIsArray(f, "No message was set!") />
	<cfset assertTrue(arrayLen(f) eq 2, "NO There was more than one entr in the array!") />
	<cfset assertEquals(f[1].message, "foo", "No the values were different!") />
	
	<cfset assertIsArray(d, "No message was set!") />
	<cfset assertTrue(arrayLen(d) eq 3, "NO There was more than one entr in the array!") />
	<cfset assertEquals(d[3].message, "ja", "No the values were different!") />
</cffunction>



<!--- testHasMessages --->
<cffunction name="testAddAndHasMessagesDefaultType" output="false">
	
	<cfset var r = createResponce() />
	<cfset var messages = arrayNew(1) />
	
	<cfset assertFalse(r.hasMessages(), "A new Responce object all ready has messages!") />
	
	<cfset r.addMessage("foo") />
	<cfset messages = r.getMessages() />
	
	<cfset assertIsArray(messages, "No message was set!") />
	<cfset assertTrue(arrayLen(messages) eq 1, "No the array len was more than one.") />
	<cfset assertEquals(messages[1].message, "foo", "No the values were different!") />
</cffunction>


<!--- testInit --->
<cffunction name="testInit" output="false">
	
	<cfset var r = createResponceNoInit() />
	<cfset r = r.init() />
	<cfset assertIsTypeOf(r, "#this.context#model.responce.Responce") />
	
</cffunction>
</cfcomponent>