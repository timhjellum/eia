"use strict";

const chalk = require("chalk");
/*
const terminalLink = require("terminal-link");

const Jenkins = terminalLink(
	"http://jenkins.eia.gov:8080/job/Development/job/Style-Guide/job/master/",
	"http://jenkins.eia.gov:8080/job/Development/job/Style-Guide/job/master/"
);
const StyleGuide = terminalLink(
	"https://wwwdev.eia.gov/style-guide/",
	"https://wwwdev.eia.gov/style-guide/"
);
const StyleGuideRepo = terminalLink(
	"https://git.eia.gov/oc/design/style-guide",
	"https://git.eia.gov/oc/design/style-guide"
);
*/

const Jenkins =
	"http://jenkins.eia.gov:8080/job/Development/job/Style-Guide/job/master/";
const StyleGuide = "https://wwwdev.eia.gov/style-guide/";
const StyleGuideRepo = "https://git.eia.gov/oc/design/style-guide";

function printHostingInstructions() {
	console.log(
		`${chalk.green("BUILD SUCCESSFUL!\n")} ${chalk.cyan(
			"A production build is ready to be deployed.\n"
		)}`
	);
	console.log(
		`${chalk.white(
			"Push to the latest style-guide repository at:"
		)} ${chalk.blue.underline.bold(StyleGuideRepo)}${chalk.white(".\n")}`
	);
	console.log(
		`${chalk.red(
			"\n" +
				" git status\n" +
				" git add -A\n" +
				' git commit -m "Updated style-guide"\n' +
				" git push\n" +
				"\n"
		)}`
	);
	console.log(
		`${chalk.white(
			"Access the style-guide through a browser at:"
		)} ${chalk.blue.underline.bold(StyleGuide)}${chalk.white(
			".\n" + "\n" + "Monitor the Jenkins build at:"
		)} ${chalk.blue.underline.bold(Jenkins)}${chalk.white(".")}`
	);
}
module.exports = printHostingInstructions;
