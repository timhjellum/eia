component extends="BaseController" {

//init
public function init(fw){
	super.init(argumentCollection = arguments);
}

//home
public function home(rc){
	rc.tags = getORMGateway().list("ReportTag", [], "name ASC");
}

//tagedit
public function tagedit(rc){
	param name="rc.IDReportTag" default="0";
	param name="rc.newTag" default="false";
	
	if(rc.newTag){
		rc.tag = entityNew("ReportTag");
	}
	else{
		rc.tag = getORMGateway().get("ReportTag", rc.IDReportTag);
	}
}

//tagsave
public function tagsave(rc){
	param name="rc.IDReportTag" default="0";
	param name="rc.IDSubject" default="";
	
	var tag = getORMGateway().get("ReportTag", rc.IDReportTag);
	tag.populate(rc);
	tag.save();
	
	tag.updateSubjects(rc.IDSubject);
	
	rc.IDReportTag = tag.getIDReportTag();
	
	getFramework().redirect('tag.tagedit', 'all');
}

//tagdelete
public function tagdelete(rc){
	param name="rc.IDReportTag" default="0";
	
	var tag = getORMGateway().get("ReportTag", rc.IDReportTag);
	tag.delete(rc);
	
	addResponceMessage("Tag Deleted", rc);
	
	getFramework().redirect('tag.home', 'all');
}

public function getORMGateway(ORMGateway){return variables.ORMGateway;}
public function setORMGateway(ORMGateway){variables.ORMGateway = arguments.ORMGateway;}
}