"use strict";

const chalk = require("chalk");

function printHostingInstructions() {
	console.log(
		`${chalk.green("SUCCESS!")} ${chalk.cyan(
			"The files are ready for you in the"
		)} ${chalk.yellow("/_beta/")} ${chalk.cyan(
			"folder at the root of the style-guide."
		)}`
	);
	console.log(
		`Move the ${chalk.yellow(
			"/_beta/scripts/beta-header.min.js"
		)} file to the ${chalk.yellow("/_beta/scripts/")} folder on Test or Dev.`
	);
	console.log(
		`Move the ${chalk.yellow(
			"/_beta/styles/beta-header.min.css"
		)} file to the ${chalk.yellow("/_beta/styles/")} folder on Test or Dev.`
	);
}
module.exports = printHostingInstructions;
