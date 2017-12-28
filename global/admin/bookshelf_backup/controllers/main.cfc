component extends="BaseController" {

public function init(fw){
	super.init(argumentCollection = arguments);
}

//home
public function home(rc){
	rc.subjects = getORMGateway().list("ReportSubject", [], "name asc");
}
}