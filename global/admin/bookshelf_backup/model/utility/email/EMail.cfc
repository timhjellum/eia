component hint="I am an E-mail." output="false" displayname="Mail"
{
property name="subject" setter="true" getter="true" type="string";
property name="from" setter="true" getter="true" type="string";
property name="to" setter="true" getter="true" type="string";
property name="type" setter="true" getter="true" type="string";
property name="cc" setter="true" getter="true" type="string";
property name="bcc" setter="true" getter="true" type="string";
property name="content" setter="true" getter="true" type="string";
property name="hasBeenSent" setter="true" getter="true" type="boolean" default="false";



/** 
*@description I am the pseudo constructor for this CFC. I return myself.
*@displayname Init
*@hint I am the pseudo constructor for this CFC. I return myself.
*/
public EMail function init 
(
	string subject = "",
	string from = "",
	string to = "",
	string type = "text",
	string cc = "",
	string bcc = "",
	string content = ""
)
{
	this.setSubject( arguments.subject );
	this.setFrom( arguments.from );
	this.setTo( arguments.to );
	this.setType( arguments.type );
	this.setCC( arguments.cc );
	this.setBCC( arguments.bcc );
	this.setContent( arguments.content);
	this.setHasBeenSent(false);
	
	return this;
}



/** 
*@description I send myself.
*@displayname Send
*@hint I send myself.
*/
public boolean function send()
{
	var params = {};
	params.to = this.getTo();
	params.from = this.getFrom();
	params.subject = this.getSubject();
	params.body = this.getContent();
	params.type = this.getType();
	
	//new mail(argumentCollection=params).send();
	this.setHasBeenSent(true);
	return true;
}
}