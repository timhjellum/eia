const path = require("path")
const fs = require("fs")
const HtmlWebpackPlugin = require("html-webpack-plugin")

// App directory
const appDirectory = fs.realpathSync(process.cwd())

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath)

// Host
const host = process.env.HOST || "localhost"

// Required for babel-preset-react-app
process.env.NODE_ENV = "development"
process.env.BABEL_ENV = "development"

PUBLIC_URL = "http://localhost:3000/"

module.exports = {
  //entry: {
  //app: "./src/index.js",
  //StyleGuide: "./src/assets/scripts/style-guide.js"

  //},
  entry: resolveAppPath("src"),
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "src"),
    filename: "static/js/bundle.js"
  },
  mode: "development",
  devtool: "source-map",
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  devServer: {
    // Enable compression
    compress: true,

    // Enable hot reloading
    hot: true,

    host,

    port: 3000,
    // Public path is root of content base
    publicPath: "/",

    //historyApiFallback: { index: "index.js" }
    historyApiFallback: true
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", ["@babel/preset-env", { targets: { node: "12" } }]]
          }
        }
      },
      {
        test: /\.less$/,
        loader: "less-loader" // compiles Less to CSS
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", { loader: "less-loader" }]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
        /*
				options: {
					name(resourcePath, resourceQuery) {
						// `resourcePath` - `/absolute/path/to/file.js`
						// `resourceQuery` - `?foo=bar`

						if (process.env.NODE_ENV === "development") {
							return "[path][name].[ext]"
						}

						return "[contenthash].[ext]"
					}
				}
				*/
      }
    ]
  },
  plugins: [
    /*
	new MiniCssExtractPlugin({
      filename: "global/styles/global.min.css"
	}),
	*/
    new HtmlWebpackPlugin({
      inject: true,
      template: resolveAppPath("public/index.html")
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
