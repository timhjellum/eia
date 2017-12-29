var path = require('path');

module.exports = {
	entry: {
		/*
		header      : "./app/assets/scripts/header.js",
		headermenu  : "./app/assets/scripts/header-menu.js",
		slider      : "./app/assets/scripts/slider.js",
		social      : "./app/assets/scripts/social.js",
		fancymenu      : "./app/assets/scripts/fancy-menu.js",
		fancymenuPack  : "./app/assets/scripts/fancy-menu-pack.js",
		utils      : "./app/assets/scripts/utils.js"

		"social"				: "./app/assets/scripts/social.js",
		"sub-navigation"     : "./app/assets/scripts/sub-navigation.js",
		"header-report-autofill": "./app/assets/scripts/header-report-autofill.js",

		"ellipsis"				: "./app/assets/scripts/ellipsis.js",
		"scroll-to"				: "./app/assets/scripts/scroll-to.js",
		"local-scroll"			: "./app/assets/scripts/local-scroll.js",
		"tabs"					: "./app/assets/scripts/tabs.js",
		*/		
		"accordion"				: "./app/assets/scripts/accordion.js",
		"header"				: "./app/assets/scripts/header.js",
		/*
		"global"				: "./app/assets/scripts/global.js",
		"slider-home"			: "./app/assets/scripts/slider-home.js",
		"slider-multi-cards"	: "./app/assets/scripts/slider-multi-cards.js",
		"global"				: "./app/assets/scripts/global.js",
		"utils"					: "./app/assets/scripts/utils.js"
		*/
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
		resolve: {
			alias: {
				'jquery-ui': 'jquery-ui-dist/jquery-ui.js'
			}
		},
		//  resolve: {
		//      extensions: ['.css'],
		//      alias: {
		//          main: path.join(__dirname, '/src/scss/main.scss'),
		//          fancybox: path.join(__dirname, '/node_modules/fancybox/dist/css/'), //jquery.fancybox.css
		//          normalize: path.join(__dirname, '/node_modules/normalize.css')
		//      }
		//	}
} // module.exports
