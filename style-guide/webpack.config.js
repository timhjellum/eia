var path = require('path');

module.exports = {
	entry: {
		"eia-scripts": "./app/assets/scripts/eia-scripts",
	},
	output: {
		//path: "../global/scripts",
		path: path.resolve(__dirname, '../global/scripts'),
			filename: "[name].min.js"
	},
	module: {
		loaders: [
			{
				loader: 'babel',
				query: {
					presets: ['es2015']
				},
				// only test js files
				test: /\.js$/,
				// ignore the mode modules folder
				exclude: /node_modules/
			},
			
		]
	},
} // module.exports
