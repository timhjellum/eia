"use strict";

const chalk = require("chalk");

function printHostingInstructions() {
	console.log(
		`${chalk.green("SUCCESS!")} ${chalk.cyan(
			"The files are ready for you in the"
		)} ${chalk.yellow("/_global/")} ${chalk.cyan(
			"folder at the root of the style-guide."
		)}`
	);
	console.log(
		`Move the ${chalk.yellow(
			"/_global/scripts/global.min.js"
		)} file to the ${chalk.yellow("/_global/scripts/")} folder on Test or Dev.`
	);
	console.log(
		`Move the ${chalk.yellow(
			"/_global/styles/global.min.css"
		)} file to the ${chalk.yellow("/_global/styles/")} folder on Test or Dev.`
	);
}

module.exports = printHostingInstructions;
