"use strict";

const PnpWebpackPlugin = require("pnp-webpack-plugin");

const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const safePostCssParser = require("postcss-safe-parser");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");
const paths = require("./paths");
const modules = require("./modules");
const ModuleNotFoundPlugin = require("react-dev-utils/ModuleNotFoundPlugin");

const appPackageJson = require(paths.appPackageJson);

// style files regexes
const cssRegex = /\.(?:le|c)ss$/; // /\.css$/;
const cssModuleRegex = /\.module\.css$/;

// This is the production and development configuration.
// It is focused on developer experience, fast rebuilds, and a minimal bundle.
module.exports = function() {
    // common function to get style loaders
    const getStyleLoaders = (cssOptions, preProcessor) => {
        const loaders = [
            //isEnvDevelopment && require.resolve("style-loader"),
            //isEnvProduction &&
            {
                loader: MiniCssExtractPlugin.loader,
                // css is located in `static/css`, use '../../' to locate index.html folder
                // in production `paths.publicUrlOrPath` can be a relative path
                options: paths.publicUrlOrPath.startsWith(".") ? { publicPath: "../../" } : {}
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
                // Options for PostCSS as we reference these options twice
                // Adds vendor prefixing based on your specified browser support in
                // package.json
                loader: require.resolve("postcss-loader"),
                options: {
                    // Necessary for external CSS imports to work
                    // https://github.com/facebook/create-react-app/issues/2677
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
                        //sourceMap: isEnvProduction && shouldUseSourceMap
                }
            }
        ].filter(Boolean);
        if (preProcessor) {
            loaders.push({
                loader: require.resolve("resolve-url-loader")
            }, {
                loader: require.resolve(preProcessor)
            });
        }
        return loaders;
    };

    return {
        mode: "production",
        // These are the "entry points" to our application.
        // This means they will be the "root" imports that are included in JS bundle.
        entry: [paths.searchResultsArtifacts].filter(Boolean),
        output: {
            path: paths.appSearchResults,

            filename: "scripts/global.highlight-search-results.min.js",

            // Prevents conflicts when multiple webpack runtimes (from different apps)
            // are used on the same page.
            jsonpFunction: `webpackJsonp${appPackageJson.name}`,
            // this defaults to 'window', but by setting it to 'this' then
            // module chunks which are built will work in web workers as well.
            globalObject: "this"
        },
        optimization: {
            minimize: true,
            //isEnvProduction,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        parse: {
                            // We want terser to parse ecma 8 code. However, we don't want it
                            // to apply any minification steps that turns valid ecma 5 code
                            // into invalid ecma 5 code. This is why the 'compress' and 'output'
                            // sections only apply transformations that are ecma 5 safe
                            // https://github.com/facebook/create-react-app/pull/4234
                            ecma: 8
                        },
                        compress: {
                            ecma: 5,
                            warnings: false,
                            // Disabled because of an issue with Uglify breaking seemingly valid code:
                            // https://github.com/facebook/create-react-app/issues/2376
                            // Pending further investigation:
                            // https://github.com/mishoo/UglifyJS2/issues/2011
                            comparisons: false,
                            // Disabled because of an issue with Terser breaking valid code:
                            // https://github.com/facebook/create-react-app/issues/5250
                            // Pending further investigation:
                            // https://github.com/terser-js/terser/issues/120
                            inline: 2
                        },
                        //mangle: {
                        //safari10: true
                        //},
                        // Added for profiling in devtools
                        //keep_classnames: isEnvProductionProfile,
                        //keep_fnames: isEnvProductionProfile,
                        output: {
                            ecma: 5,
                            comments: false,
                            // Turned on because emoji and regex is not minified properly using default
                            // https://github.com/facebook/create-react-app/issues/2488
                            ascii_only: true
                        }
                    }
                    //sourceMap: shouldUseSourceMap
                }),
                // This is only used in production mode
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
        resolve: {
            // This allows you to set a fallback for where webpack should look for modules.
            // We placed these paths second because we want `node_modules` to "win"
            // if there are any conflicts. This matches Node resolution mechanism.
            modules: ["node_modules", paths.appNodeModules].concat(
                modules.additionalModulePaths || []
            )
        },
        resolveLoader: {
            plugins: [
                // Also related to Plug'n'Play, but this time it tells webpack to load its loaders
                // from the current package.
                PnpWebpackPlugin.moduleLoader(module)
            ]
        },
        module: {
            strictExportPresence: true,
            rules: [
                // Disable require.ensure as it's not a standard language feature.
                { parser: { requireEnsure: false } },

                // First, run the linter.
                // It's important to do this before Babel processes the JS.
                /*
{
test: /\.(js|mjs|jsx|ts|tsx)$/,
enforce: "pre",
use: [
{
options: {
cache: true,
formatter: require.resolve("react-dev-utils/eslintFormatter"),
eslintPath: require.resolve("eslint"),
resolvePluginsRelativeTo: __dirname
},
loader: require.resolve("eslint-loader")
}
],
include: paths.appSrc
},
*/
                {
                    // "oneOf" will traverse all following loaders until one will
                    // match the requirements. When no loader matches it will fall
                    // back to the "file" loader at the end of the loader list.
                    oneOf: [{
                            test: /\.js$/,
                            exclude: /(node_modules)/,
                            include: paths.appSrc,
                            loader: require.resolve("babel-loader"),
                            options: {
                                presets: ["@babel/preset-env"],
                                // This is a feature of `babel-loader` for webpack (not Babel itself).
                                // It enables caching results in ./node_modules/.cache/babel-loader/
                                // directory for faster rebuilds.
                                cacheDirectory: true,
                                // See #6846 for context on why cacheCompression is disabled
                                cacheCompression: false,
                                compact: true
                            }
                        },
                        // Process any JS outside of the app with Babel.
                        // Unlike the application JS, we only compile the standard ES features.
                        /*
                        {
                        	test: /\.(mjs)$/,
                        	exclude: /@babel(?:\/|\\{1,2})runtime/,
                        	loader: require.resolve("babel-loader"),
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
                        		// See #6846 for context on why cacheCompression is disabled
                        		cacheCompression: false

                        		// Babel sourcemaps are needed for debugging into node_modules
                        		// code.  Without the options below, debuggers like VSCode
                        		// show incorrect code and set breakpoints on the wrong lines.
                        		//sourceMaps: shouldUseSourceMap,
                        		//inputSourceMap: shouldUseSourceMap
                        	}
                        },
                        */
                        // "postcss" loader applies autoprefixer to our CSS.
                        // "css" loader resolves paths in CSS and adds assets as dependencies.
                        // "style" loader turns CSS into JS modules that inject <style> tags.
                        // In production, we use MiniCSSExtractPlugin to extract that CSS
                        // to a file, but in development "style" loader enables hot editing
                        // of CSS.
                        // By default we support CSS Modules with the extension .module.css
                        {
                            test: cssRegex,
                            exclude: cssModuleRegex,
                            use: getStyleLoaders({
                                importLoaders: 1
                                    //sourceMap: isEnvProduction && shouldUseSourceMap
                            }),
                            // Don't consider CSS imports dead code even if the
                            // containing package claims to have no side effects.
                            // Remove this when webpack adds a warning or an error for this.
                            // See https://github.com/webpack/webpack/issues/6571
                            sideEffects: true
                        },
                        // Adds support for CSS Modules (https://github.com/css-modules/css-modules)
                        // using the extension .module.css
                        {
                            test: cssModuleRegex,
                            use: getStyleLoaders({
                                importLoaders: 1,
                                //sourceMap: isEnvProduction && shouldUseSourceMap,
                                modules: {
                                    getLocalIdent: getCSSModuleLocalIdent
                                }
                            })
                        }
                    ]
                }
            ]
        },
        plugins: [
            // This gives some necessary context to module not found errors, such as
            // the requesting resource.
            new ModuleNotFoundPlugin(paths.appPath),
            // Makes some environment variables available to the JS code, for example:
            // if (process.env.NODE_ENV === 'production') { ... }. See `./env.js`.
            // It is absolutely essential that NODE_ENV is set to production
            // during a production build.
            // Otherwise React will be compiled in the very slow development mode.
            //new webpack.DefinePlugin(env.stringified),

            new MiniCssExtractPlugin({
                filename: "styles/search-results.min.css"
                    //filename: "styles/search-results.[contenthash:8].css",
                    //chunkFilename: "styles/search-results.[contenthash:8].chunk.css"
            })
        ].filter(Boolean),
        // Some libraries import Node modules but don't use them in the browser.
        // Tell webpack to provide empty mocks for them so importing them works.
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
        // Turn off performance processing because we utilize
        // our own hints via the FileSizeReporter
        performance: false,
        externals: {
            jquery: "jQuery",
            jqueryui: "jqueryui"
        }
    };
};