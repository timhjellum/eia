"use strict";

const chalk = require("chalk");

function printHostingInstructions() {
	console.log(
		`${chalk.green("SUCCESS!")} ${chalk.cyan(
			"The files are ready for you in the"
		)} ${chalk.yellow("/_reports/")} ${chalk.cyan("folder.")}`
	);

	console.log(
		`Move the ${chalk.yellow(
			"/_reports/scripts/reports.min.js"
		)} file to the ${chalk.yellow("/_reports/scripts/")} folder on Test or Dev.`
	);
	console.log(
		`Move the ${chalk.yellow(
			"/_reports/styles/reports.min.css"
		)} file to the ${chalk.yellow("/_reports/styles/")} folder on Test or Dev.`
	);
}

module.exports = printHostingInstructions;
