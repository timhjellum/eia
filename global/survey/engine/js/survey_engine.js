var setUrl='/global/survey/engine/data/index.php?a=s';

var surveyQTypes;
var currentSurvey;
var qTypes={};

var yesNo=[{
    label: 'Yes',
    id:1
},{
    label: 'No',
    id:0
}];

var fiveStar=[];

for(var x=1;x<=5;x++)
    fiveStar.push({
        label: x,
        id:x
    });

var tenStar=fiveStar.slice();

for(var x=6;x<=10;x++)
    tenStar.push({
        label: x,
        id:x
    });

var operators = {
	'==': function (a, b) {
		if (typeof a === 'undefined') {
			return false;
		}

		if ($.isArray(a)) {
			return a.indexOf(parseInt(b))>=0;
		} else {
			return a == b;
		}
	},
	'!=': function (a, b) {
		if (typeof a === 'undefined') {
			return false;
		}

		if ($.isArray(a)) {
			return a.indexOf(parseInt(b))<0;
		} else {
			return a != b;
		}
	},
	'<=': function (a, b) {
		if (typeof a === 'undefined') {
			return false;
		}
		return parseInt(a) <= parseInt(b);
	},
	'>=': function (a, b) {
		if (typeof a === 'undefined') {
			return false;
		}
		return parseInt(a) >= parseInt(b);
	},
	'<':  function (a, b) {
		if (typeof a === 'undefined') {
			return false;
		}
		return parseInt(a) < parseInt(b);
	},
	'>':  function (a, b) {
		if (typeof a === 'undefined') {
			return false;
		}
		return parseInt(a) > parseInt(b);
	}
};

$(function () {
	var dataSrv = "/global/survey/engine/data/index.php";

    // var parser = document.createElement('a');
    // parser.href = window.location.href;
    // 
    // var dir=parser.pathname;
    var dir=window.location.pathname;
    if(dir[0]!="/")
        dir="/"+dir;

    var cookies=document.cookie.split(";");
    var ignoreAll=false;
    var ignore=[];

    $.each(cookies,function(index,value){
        var cookie=value.trim();
        if(cookie=="ignoreAllSurveys")
            ignoreAll=true;

        if(cookie.substring(0,14)=="surveyComplete")
            ignore.push(parseInt(cookie.substring(14,cookie.indexOf("="))));
    });

    if(!ignoreAll){
        $.get(dataSrv,{a:'g',p:dir}).success(function (response) { //return promise
            surveyQTypes=response.types;

            $.each(response.survey,function(index,value){
                if(ignore.indexOf(parseInt(value.id))<0){ //if value id is NOT in ignore
                    document.cookie="surveyComplete"+value.id+"=1; path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT"; //dont repeat survey
                    showSurvey(value);
                    return false;
                }
            });
            /*if(response.survey.length){
                popupDiv=jQuery('<div/>', {
                    id: 'survey_popup'
                });

                popupDiv.append('<span>*solicitation language here*</span><br>');

                $.each(response.survey,function(index,value){
                    if(ignore.indexOf(value.id)<0){
                        untaken++;
                        var checked=false;
                        if(index==0)
                            checked=true;
                        popupDiv.append(jQuery('<input/>', {
                            type: 'radio',
                            id: 'surveyID',
                            name: 'surveyID',
                            value: index,
                            checked: checked
                        }));
                        popupDiv.append(jQuery('<label/>', {
                            text: value.name
                        }));
                    }
                });

                popupDiv.append('<br>');

                popupDiv.append($('<button/>', {
                    type: 'button',
                    id: 'surveyYes',
                    text: 'Yes',
                    click: function() {
                        popupDiv.hide();
                        showSurvey(response.survey[$('#surveyID').val()]);
                    }
                }));

                popupDiv.append($('<button/>', {
                    type: 'button',
                    id: 'surveyNo',
                    text: 'Remind me later',
                    click: function() {
                        popupDiv.hide();
                        document.cookie="ignoreAllSurveys; path=/;max-age=" + 60*15; //no survey for 15 minutes
                    }
                }));

                popupDiv.append($('<button/>', {
                    type: 'button',
                    id: 'surveyNever',
                    text: 'Never',
                    click: function() {
                        popupDiv.hide();
                        document.cookie="ignoreAllSurveys; path=/;max-age=" + 60*60*24*30; //no survey for 30 days
                    }
                }));

                if(untaken)
                    $('body').append(popupDiv);
            }*/
        });
    }
});

var saveSurvey=function(e){
    var answers={};

    $.each(currentSurvey.questions,function(index,value){
        var div=$('#q'+value.id);
        var answer;

        switch(surveyQTypes[value.type].ui_element){
            case 'radio':
                answer=$('> div > div > div >input:checked', div).val();
                break;
            case 'checkbox':
                answer=[];
                $.each($('> div > div > div >input:checked', div),function(index,value){
                    answer.push($(value).val());
                });
                break;
            case 'input':
            case 'textarea':
                answer=$("> div > div > div >"+surveyQTypes[value.type].ui_element, div).val();
                break;
        }

        if(typeof answer !== 'undefined'&&answer!="")
            answers[value.id]=answer;
    });

    document.cookie="surveyComplete"+currentSurvey.id+"=1; path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie="survey"+currentSurvey.id+"="+JSON.stringify(answers)+"; path=/";

    $.fancybox.close();
};

var submitSurvey = function (e) {
	var answers = [];
	e.preventDefault();

	$.each(currentSurvey.questions, function (index, value) {
		var div = $('#q' + value.id);
		var answer;

        if(div.is(":visible")){
		switch (surveyQTypes[value.type].ui_element) {
			case 'radio':
				answer = $('> div > div > div >input:checked', div).val();
				break;
			case 'checkbox':
				answer = [];
				$.each($('> div > div > div >input:checked', div), function (index, value) {
					answer.push($(value).val());
				});
				break;
			case 'input':
			case 'textarea':
				answer = $("> div > div > div >" + surveyQTypes[value.type].ui_element, div).val();
				break;
		}

		if (typeof answer !== 'undefined' && answer != "") {
			answers.push({
				id: value.id,
				a:  answer
			});
		}
        }
	});

	$.post(setUrl, {
		s: currentSurvey.id,
		q: JSON.stringify(answers)
	}, function (data) {});

	$.fancybox.close();
    if(typeof currentSurvey.thanks !== 'undefined')
        $.fancybox.open({
            'maxWidth':     540, autoSize: true,
            'transitionIn': 'none', 'transitionOut': 'none', 'type': 'iframe',
            content:        "<div class='thanks'>" + currentSurvey.thanks + "</div>"
        });
};

var showSurvey = function (survey) {
	currentSurvey = survey;
	var qDivs     = {};
	var number    = 1;

	var cookies   = document.cookie.split(";");
	var responses = {};

	$.each(cookies, function (index, value) {
		var parsed = value.trim().split("=");
		if (parsed.length == 2 && parsed[0] == "survey" + survey.id && parsed[1] != 'complete') {
			responses = JSON.parse(parsed[1]);
		}
	});

	var contents = jQuery('<div/>');

	var welcome = jQuery('<div/>', {
		text:    survey.welcome,
		"class": 'welcome'
	});

	var form = jQuery('<form name="survey_form" id="survey_form">');

	var aControl = jQuery('<input/>', {
		type:  'hidden',
		name:  'surveyID',
		id:    'surveyID',
		value: survey.id
	}).appendTo(form);

	$.each(survey.questions, function (index, value) {
		qTypes[value.id] = value.type;
		var qDiv         = qDivs[value.id] = jQuery('<div/>', {
			id:   'q' + value.id,
			text: value.label
		});
		var innerDiv;
		var extraClass = '';

		if (value.attr && value.attr.alignment) {
			extraClass = value.attr.alignment;
		}

		if (!value.conditions) {
			qDiv.text(number++ + ". ");
			innerDiv = jQuery('<div/>', {
				text:    value.label,
				"class": 'question ' + extraClass
			});
		} else {
			innerDiv = jQuery('<div/>');
			qDiv.addClass('conditional');
			$.each(value.conditions, function (cIndex, cValue) {
				var div = qDivs[cValue.qid];
				var answer;

				switch (surveyQTypes[qTypes[cValue.qid]].ui_element) {
					case 'radio':
						if (!operators[cValue.method]($('> div > div > div >input:checked', div).val(), cValue.value)) {
							qDiv.hide();
						}
						break;
					case 'checkbox':
						answer = [];
						$.each($('> div > div > div >input:checked', div), function (index, value) {
							answer.push(parseInt($(value).val()));
						});
						if (!operators[cValue.method](answer, cValue.value)) {
							qDiv.hide();
						}
						break;
					case 'input':
					case 'textarea':
						if (!operators[cValue.method]($("> div > div > div >" + surveyQTypes[value.type].ui_element, div).val(),
                                cValue.value)) {
							qDiv.hide();
						}
						break;
				}
			});
		}

		var aDiv = jQuery('<div/>').appendTo(innerDiv);

		var answers;
		var type = surveyQTypes[value.type].ui_element;
		switch (value.type) {
			case 'L':
			case 'MC':
				answers = value.answers || [];
				break;
			case 'Y':
				answers = yesNo;
				break;
			case 'R1':
				answers = tenStar;
				break;
			case 'R5':
				answers = fiveStar;
				break;
		}
		if ((value.type == 'R1' || value.type == 'R5') &&
		    value.attr &&
		    value.attr.reverseorder &&
		    value.attr.reverseorder ==
		    true) {
			answers.reverse();
		}

		if (type == 'radio' || type == 'checkbox') {
			$.each(answers, function (aIndex, aValue) {
				aControl = jQuery('<input/>', {
					type:  type,
					name:  'q' + value.id,
					value: aValue.id,
					id:    'q' + value.id + '-' + aValue.id
				});

				if (type == 'radio') {
					if (typeof responses[value.id] !== 'undefined' && responses[value.id] == aValue.id) {
						aControl.prop("checked", true);
					}
				} else {
					if (typeof responses[value.id] !== 'undefined' && responses[value.id].indexOf(aValue.id.toString()) >= 0) {
						aControl.prop("checked", true);
					}
				}

				var aLabel = jQuery('<label/>', {
					text: aValue.label,
					for:  'q' + value.id + '-' + aValue.id
				});

				var container = $('<div>', {class: 'choice'}).append(aControl, aLabel);
				aDiv.append(container);

				//aBreak = jQuery('<br/>').appendTo(aDiv);
			});
		} else if (type == 'input') {
			aControl = jQuery('<input/>', {
				type: 'text',
				name: 'q' + value.id
			});

			if (typeof responses[value.id] !== 'undefined') {
				aControl.text(responses[value.id]);
			}

            var container = $('<div>', {class: 'choice'}).append(aControl);
            aDiv.append(container);
		} else if (type == 'textarea') {
			aControl = jQuery('<textarea/>', {
				name: 'q' + value.id
			});

			if (typeof responses[value.id] !== 'undefined') {
				aControl.text(responses[value.id]);
			}

            var container = $('<div>', {class: 'choice full'}).append(aControl);
            aDiv.append(container);
		}

		innerDiv.appendTo(qDiv);
		if (!value.conditions || !value.conditions.length) {
			qDiv.appendTo(form);
		} else {
			var selector = $("> div > div > div >input[value=\'" + value.conditions[0].value + "\']",
			                 qDivs[value.conditions[0].qid]);
			if (selector) {
				if (value.attr && typeof value.attr.placement !== 'undefined') {
					if (value.attr.placement == "end") {
						selector = selector.parent().parent();
						qDiv.appendTo(selector);
					}
				} else {
					qDiv.insertAfter(selector.next());
				}
			} else {
				qDiv.appendTo(qDivs[value.conditions[0].qid]);
			}
		}

	});

	/*jQuery('<input/>', {
	 type: 'reset',
	 value: 'Reset'
	 }).appendTo(form);*/

	//jQuery('<button/>', {
	//	type: 'button',
	//	text: 'Save and come back'
	//}).click(saveSurvey).appendTo(form);

	var submit = jQuery('<input/>', {
		type:  'submit',
		value: 'Submit',
		id:    'submitForm'
	}).click(submitSurvey).appendTo(form);

	$('input', form).change(function () {
		var $this  = $(this);
		var qID    = $this.attr('name').substring(1);
		var theVal = $this.val();
		if (surveyQTypes[qTypes[qID]].ui_element == 'checkbox') {
			theVal = [];
			$.each($('> div > input:checked', $this.parent().parent()), function (index, value) {
				theVal.push(parseInt($(value).val()));
			});
		}

		$.each(survey.questions, function (index, value) {
			if (value.conditions) {
                var visible=false;
                var matched=false;
				$.each(value.conditions, function (cIndex, cValue) {
					if (cValue.qid == qID) {
                        matched=true;
						if (operators[cValue.method](theVal, cValue.value)) {
                            visible=true;
						} else {
							//$('#q' + value.id).hide();
						}
					}
				});

                if(matched&&visible){
                    $('#q' + value.id).show();
                }else if(matched)
                    $('#q' + value.id).hide();
			}
		});
	});

	contents.append(welcome, form);

	$.fancybox.open({
		'maxWidth':       540,
		'maxHeight':      '75%',
		'autoScale':      false,
		'autoDimensions': false,
		fitToView:        false,
		width:            '100%',
		height:           '100%',
		autoSize:         false,
		'transitionIn':   'none',
		'transitionOut':  'none',
		closeBtn:         false,
		'type':           'iframe',
		content:          contents,
		helpers:          {
			overlay: {
				closeClick: false
			}
		},
		afterLoad:        function () {
			var resume   = $("<span/>", {id: 'resumeBtn', text: 'Resume in 5 minutes'}).click(function () {
				saveSurvey();
				$.fancybox.close();
				var date        = new Date();
				date.setTime(date.getTime() + (5 * 60 * 1000));
				document.cookie = "surveyComplete" + survey.id + "=1; path=/;expires=" + date.toGMTString(); //5 minutes
			});
			var neverask = $("<span/>", {id: 'neveraskBtn', text: 'Never show this again'})
				.click(function () {$.fancybox.close();});
			// add button to defer
			$(".fancybox-outer").prepend($('<span/>', {'class': 'top_buttons'}).append(resume, neverask));
			// defer button function
		}
	});
};