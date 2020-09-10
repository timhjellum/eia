"use strict"

const TerserPlugin = require("terser-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const safePostCssParser = require("postcss-safe-parser")
const paths = require("./paths")
const appPackageJson = require(paths.appPackageJson)
const cssRegex = /\.(?:le|c)ss$/
const cssModuleRegex = /\.module\.css$/

module.exports = function () {
  const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
      {
        loader: MiniCssExtractPlugin.loader
      },
      {
        loader: require.resolve("css-loader"),
        options: cssOptions
      },
      {
        loader: require.resolve("less-loader"),
        options: {
          importLoaders: 1
        }
      },
      {
        loader: require.resolve("postcss-loader"),
        options: {
          ident: "postcss",
          plugins: () => [
            require("postcss-flexbugs-fixes"),
            require("postcss-preset-env")({
              autoprefixer: {
                flexbox: "no-2009"
              },
              stage: 3
            })
          ]
        }
      }
    ].filter(Boolean)
    if (preProcessor) {
      loaders.push(
        {
          loader: require.resolve("resolve-url-loader")
        },
        {
          loader: require.resolve(preProcessor)
        }
      )
    }
    return loaders
  }
  return {
    mode: "production",
    entry: [paths.globalArtifacts].filter(Boolean),
    output: {
      path: paths.appGlobal, // "_global"
      //path: paths.appGlobalChunk,
      publicPath: "/adaptive/style-guide/_global/",
      filename: "scripts/global.min.js",
      //filename: "global.min.js",
      //chunkFilename: "[name].global.min.js",
      jsonpFunction: `webpackJsonp${appPackageJson.name}`,
      globalObject: "this"
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true
            }
          }
        }),

        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            parser: safePostCssParser
          },
          cssProcessorPluginOptions: {
            preset: ["default", { minifyFontValues: { removeQuotes: false } }]
          }
        })
      ]
    },
    module: {
      strictExportPresence: true,
      rules: [
        { parser: { requireEnsure: false } },
        {
          oneOf: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              include: paths.appSrc,
              loader: require.resolve("babel-loader"),
              options: {
                presets: ["@babel/preset-env"],
                cacheDirectory: true,
                cacheCompression: false,
                compact: true
              }
            },
            {
              test: /\.(js|mjs)$/,
              exclude: /@babel(?:\/|\\{1,2})runtime/,
              loader: require.resolve("babel-loader")
              /*
							options: {
								babelrc: false,
								configFile: false,
								compact: false,
								presets: [
									[
										require.resolve("babel-preset-react-app/dependencies"),
										{ helpers: true }
									]
								],
								cacheDirectory: true,
								cacheCompression: false
							}
							*/
            },
            {
              test: cssRegex,
              exclude: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 1
              }),
              sideEffects: true
            },
            {
              test: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 1
              })
            }
          ]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "styles/global.min.css"
      })
    ].filter(Boolean),
    node: {
      module: "empty",
      dgram: "empty",
      dns: "mock",
      fs: "empty",
      http2: "empty",
      net: "empty",
      tls: "empty",
      child_process: "empty"
    },
    performance: false,
    externals: {
      jquery: "jQuery",
      jqueryui: "jqueryui"
    }
  }
}
