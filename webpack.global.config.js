const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserJSPlugin = require("terser-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

// App directory
//const appDirectory = fs.realpathSync(process.cwd())

// Gets absolute path of file within app directory
//const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath)

// Host
//const host = process.env.HOST || "localhost"

// Required for babel-preset-react-app
process.env.NODE_ENV = "production"
process.env.BABEL_ENV = "production"

// Try the environment variable, otherwise use root
//const ASSET_PATH = process.env.ASSET_PATH || "/"

module.exports = {
	entry: "./src/global",
	output: {
		publicPath: "/", // test
		//publicPath: "/global/", // production
		filename: "scripts/global.min.js",
		//chunkFilename: "scripts/global.[name].min.js",
		path: path.resolve(__dirname, "_global/")
	},
	mode: "production",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			},
			{
				test: /\.less$/,
				loader: "less-loader"
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", { loader: "less-loader" }]
			}
		]
	},
	optimization: {
		minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "styles/global.min.css"
		})
	],
	externals: {
		jquery: "jQuery",
		jqueryui: "jqueryui"
	}
}
/*
  "babel": {
    "presets": [
      "react-app"
    ]
  },
  "devDependencies": {
    "@babel/preset-env": "^7.8.7",
    "less": "^3.11.1",
    "less-loader": "^5.0.0",
    "webpack-cli": "^3.3.11",
    "webpack-dev-server": "^3.11.0"
  }
}

  */
