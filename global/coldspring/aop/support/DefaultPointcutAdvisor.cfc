﻿<!---
   Copyright 2010 Mark Mandel
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       http://www.apache.org/licenses/LICENSE-2.0
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

 --->
<cfcomponent hint="Convenient Pointcut-driven Advisor implementation, that will apply a given advice to all methods of any class"
	extends="coldspring.aop.PointcutAdvisor" output="false">

<!------------------------------------------- PUBLIC ------------------------------------------->

<cffunction name="init" hint="Constructor" access="public" returntype="DefaultPointcutAdvisor" output="false">
	<cfargument name="advice" hint="the advice to apply" type="coldspring.aop.Advice" required="no">
	<cfscript>
		arguments.pointcut = createObject("component", "NamedMethodPointcut").init();
		arguments.pointcut.setMappedName("*");

		super.init(argumentCollection=arguments);

		return this;
	</cfscript>
</cffunction>

<!------------------------------------------- PACKAGE ------------------------------------------->

<!------------------------------------------- PRIVATE ------------------------------------------->

</cfcomponent>