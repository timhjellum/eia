
var defaultTitle = 'U.S. Energy Information Administration - EIA - Independent Statistics and Analysis',
	titlePrefix = 'EIA';

if (document.title == '') {
	var title = titlePrefix,
		titleMMain = $('.title a').text(),
		titleMain = $('.title h1').text(),
		titleSub = $('.subnav .active').text();

	if (titleMain != '') {
		if (titleMMain != '')
			title += ' - ' + titleMMain.substring(titleMMain.indexOf(titleMMain.charAt(1)));

		title += ' - ' + titleMain;

		if (titleSub != '')
			title += ' - ' + titleSub;
	} else
		title = defaultTitle;

	document.title = title;
}