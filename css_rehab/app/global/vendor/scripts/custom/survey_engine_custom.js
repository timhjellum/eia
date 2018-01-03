// JavaScript Document

function showanschoice(choice_type)
{	
	var the_id = choice_type.id;
	
	if (the_id == 'type_radio' || the_id == 'type_ckbox')
	{	
		if (document.getElementById('choice').innerHTML.indexOf('~') >= 0 || document.getElementById('choice').innerHTML == '')
		{
			choice_num = 2;
			//followup_choice = 2;
			
			document.getElementById('choice').innerHTML = "<table id='ans_choices_table' width='500'>"
			+ "	<tr>"
			+ "		<td>"
			+ "			<div class='deletebutton' onclick='deleteChoice(this);'>x</div>"
			+ "			<input type='text' id='ans_choices_0' name='ans_choices_0' class='left-indent'/> &nbsp;<br/>"
			+ "			<span class='left-indent'>Follow-up question: </span><label><input type='radio' name='followup_0' id='no_followup_0' value='none' checked='checked' onclick='deleteFollowup(this);' />None</label> &nbsp;"
			+ "			<label><input type='radio' name='followup_0' id='new_followup_0' value='followup' onclick='addFollowup(this);' />New question</label> &nbsp;"
			+ "			<div id='followupdiv_0' class='followup' style='display: none;'></div>"
			+ "		</td>"
			+ "	</tr>"
			+ "	<tr>"
			+ "		<td>"
			+ "			<div class='deletebutton' onclick='deleteChoice(this);'>x</div>"
			+ "			<input type='text' id='ans_choices_1' name='ans_choices_1' class='left-indent'/> &nbsp;<br/>"
			+ "			<span class='left-indent'>Follow-up question: </span><label><input type='radio' name='followup_1' id='no_followup_1' value='none' checked='checked' onclick='deleteFollowup(this);' />None</label> &nbsp;"
			+ "			<label><input type='radio' name='followup_1' id='new_followup_1' value='followup' onclick='addFollowup(this);' />New question</label> &nbsp;"
			+ "			<label><input type='radio' name='followup_1' id='prev_followup_1' value='prev_followup' onclick='addFollowup(this);' />Use above question</label>"
			+ "			<div id='followupdiv_1' class='followup' style='display: none;'></div>"
			+ "		</td>"
			+ "	</tr>"
			+ "</table>"
			+ "<input type='button' id='ans_choices_add' onClick='addChoice(this)' value='Add a choice' class='left-indent' />";
		}

	}
	else if (the_id == 'type_num')
	{
		choice_num = 2;
		//followup_choice = 2;
		document.getElementById('choice').innerHTML = "~~~Answer is a number~~~";
	}
	else if (the_id == 'type_open')
	{
		//reset the values used for the ids for the choices
		choice_num = 2;
		//followup_choice = 2;
		
		//replace everything in the choice div with the following text
		document.getElementById('choice').innerHTML = "~~~Answer is open-ended~~~";		
	}
}

var choice_num = 2;
var followup_choice =new Array();

//add an answer choice
function addChoice(choice)
{
	var whichrow=document.getElementById('ans_choices_table').rows.length;
	var x=document.getElementById('ans_choices_table').insertRow(whichrow);
	var y=x.insertCell(0);
	
	y.innerHTML= "	<div class='deletebutton' onclick='deleteChoice(this);'>x</div>"
		+ "			<input type='text' id='ans_choices_" + choice_num + "' name='ans_choices_" + choice_num + "' class='left-indent'/>&nbsp;<br/>"
		+ "			<span class='left-indent'>Follow-up question: </span><label><input type='radio' name='followup_" + choice_num + "' id='no_followup_" + choice_num + "' value='none' checked='checked' onclick='deleteFollowup(this);' />None</label> &nbsp;"
		+ "			<label><input type='radio' name='followup_" + choice_num + "' id='new_followup_" + choice_num + "' value='followup' onclick='addFollowup(this);' />New question </label>&nbsp;"
		+ "			<label><input type='radio' name='followup_" + choice_num + "' id='prev_followup_" + choice_num + "' value='prev_followup' onclick='addFollowup(this);' />Use above question</label> &nbsp;"
		+ "			<div id='followupdiv_" + choice_num + "' class='followup' style='display: none;'></div>";
	
	choice_num++;
}

//add a followup question
function addFollowup(the_followup)
{
	if (the_followup.value == 'followup')
	{
		
		var fq_id = the_followup.id.slice(the_followup.id.lastIndexOf("_")+1);
		var followup_id = 'followupdiv_' + fq_id;  //fq_id corresponds to the number of the answer choice for which the followup is being created
		
		followup_choice[fq_id] = 2;
		
		var the_followupdiv = document.getElementById(followup_id);
		
		the_followupdiv.innerHTML= "<p>"
		+ "<textarea name='followup_question_" + fq_id + "' id='followup_question_" + fq_id + "' value='' rows='3' title='Type a question' class='FORMinput' style='width:450px;' ></textarea>"
		+ "</p>"
		+ "<p>"
		+ "Question type: "
		+ "<br />"
		+ "<label>"
		+ "<input type='radio' name='follow_type_" + fq_id + "' value='radio' id='follow_type_radio_" + fq_id + "' onclick='showfollowupchoice(this);' />"
		+ "	radio buttons (can choose only one answer)</label>"
		+ "<br />"
		+ "<label>"
		+ "<input type='radio' name='follow_type_" + fq_id + "' value='ckbox' id='follow_type_ckbox_" + fq_id + "' onclick='showfollowupchoice(this);' />"
		+ " checkboxes (can check multiple answers)</label>"
		+ "<br />"
		+ "<label>"
		+ "<input type='radio' name='follow_type_" + fq_id + "' value='open' id='follow_type_open_" + fq_id + "' onclick='showfollowupchoice(this);' />"
		+ "	open-ended</label>"
		+ "<br />"
		+ "<label>"
		+ "<input type='radio' name='follow_type_" + fq_id + "' value='num' id='follow_type_num_" + fq_id + "' onclick='showfollowupchoice(this);' />"
		+ "	number (the answer is a number typed by the user)</label>"
		+ "</p>"
		+ "Answer Choices:<br/>"
		+ "<div id='followup_choices_" + fq_id + "'>&nbsp;</div>";
		
		the_followupdiv.style.display="inline-block";		
	}
}

//show the followup question answer choices based on which question type is selected
function showfollowupchoice(followup_choice_type)
{
	var the_id = followup_choice_type.id.slice(0, followup_choice_type.id.lastIndexOf("_"));
	
	//the_followup_qid corresponds to the number of the answer choice for which the followup is being created
	var the_followup_qid = followup_choice_type.id.slice(followup_choice_type.id.lastIndexOf("_")+1);
		
	var followup_choice_div = 'followup_choices_'+ the_followup_qid;

	if (the_id == 'follow_type_radio' || the_id == 'follow_type_ckbox')
	{
		if (document.getElementById(followup_choice_div).innerHTML == '~~~Answer is a number~~~' || document.getElementById(followup_choice_div).innerHTML == '~~~Answer is open-ended~~~' || document.getElementById(followup_choice_div).innerHTML == '&nbsp;')
		{	
			followup_choice[the_followup_qid] = 2;

			document.getElementById(followup_choice_div).innerHTML = "<table id='followup_choices_table_" + the_followup_qid + "' width='400'>"
			+ "	<tr class='followup_choices'>"
			+ "		<td>"
			+ "			<div class='deletebutton' onclick='deleteFollowupChoice(this);'>x</div>"
			+ "			<input type='text' id='follow_choices_" + the_followup_qid + "_0' name='follow_choices_" + the_followup_qid + "_0' class='left-indent'/> &nbsp;<br/>"
			+ "		</td>"
			+ "	</tr>"
			+ "	<tr class='followup_choices'>"
			+ "		<td>"
			+ "			<div class='deletebutton' onclick='deleteFollowupChoice(this);'>x</div>"
			+ "			<input type='text' id='follow_choices_" + the_followup_qid + "_1' name='follow_choices_" + the_followup_qid + "_1' class='left-indent'/> &nbsp;<br/>"
			+ "		</td>"
			+ "	</tr>"
			+ "</table>"
			+ "<input type='button' id='follow_choices_add_" + the_followup_qid + "' onClick='addFollowupChoice(this);' value='Add a choice' class='left-indent' />";
		}
		

	}
	else if (the_id == 'follow_type_num')
	{
		followup_choice[the_followup_qid] = 2;
		document.getElementById(followup_choice_div).innerHTML = "~~~Answer is a number~~~";
	}
	else if (the_id == 'follow_type_open')
	{
		//reset the values used for the ids for the choices
		followup_choice[the_followup_qid] = 2;
		
		//replace everything in the choice div with the following text
		document.getElementById(followup_choice_div).innerHTML = "~~~Answer is open-ended~~~";		
	}
}

//add an answer choice
function addFollowupChoice(the_followup_choice)
{
	//the_followup_qid corresponds to the number of the answer choice for which the followup is being created
	var the_followup_qid = the_followup_choice.id.slice(the_followup_choice.id.lastIndexOf("_")+1);
	var followup_choice_div = 'followup_choices_table_'+ the_followup_qid;
	
	var whichrow=document.getElementById(followup_choice_div).rows.length;
	var x=document.getElementById(followup_choice_div).insertRow(whichrow);
	var y=x.insertCell(0);
	x.className = 'followup_choices';
	
	y.innerHTML= " 		<div class='deletebutton' onclick='deleteFollowupChoice(this);'>x</div>"
			+ "			<input type='text' id='follow_choices_" + the_followup_qid + "_" + followup_choice[the_followup_qid] + "' name='follow_choices_" + the_followup_qid + "_" + followup_choice[the_followup_qid] + "' class='left-indent'/> &nbsp;<br/>";
	
	followup_choice[the_followup_qid]++;
}

function deleteChoice(the_id)
{
	document.getElementById('ans_choices_table').deleteRow(the_id.parentNode.parentNode.rowIndex);
}

function deleteFollowup(the_followup)
{
	var fq_id = the_followup.id.slice(the_followup.id.lastIndexOf("_")+1);
	var followup_id = 'followupdiv_' + fq_id;
	var the_followupdiv = document.getElementById(followup_id);
	
	the_followupdiv.innerHTML= "";
	the_followupdiv.style.display="none";
}

function deleteFollowupChoice(followup_choice)
{
	var followup_choice_div = followup_choice.parentNode.parentNode.parentNode.parentNode.id;
	
	document.getElementById(followup_choice_div).deleteRow(followup_choice.parentNode.parentNode.rowIndex);
}