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
			
			//      {
			//          test: /\.css$/,
			//          include: /node_modules/,
			//          loader:  'style!css'
			//      },
		]
		},
		//		resolve: {
		//	alias: {
		//		'jquery-ui': 'jquery-ui-dist/jquery-ui.js'
		//	}
		//},
		//  resolve: {
		//      extensions: ['.css'],
		//      alias: {
		//          main: path.join(__dirname, '/src/scss/main.scss'),
		//          fancybox: path.join(__dirname, '/node_modules/fancybox/dist/css/'), //jquery.fancybox.css
		//          normalize: path.join(__dirname, '/node_modules/normalize.css')
		//      }
		//	}
} // module.exports
