
/**
 * @license RequireJS text 2.0.10 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
/*jslint regexp: true */
/*global require, XMLHttpRequest, ActiveXObject,
  define, window, process, Packages,
  java, location, Components, FileUtils */

define('text',['module'], function (module) {
    

    var text, fs, Cc, Ci, xpcIsWindows,
        progIds = ['Msxml2.XMLHTTP', 'Microsoft.XMLHTTP', 'Msxml2.XMLHTTP.4.0'],
        xmlRegExp = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
        bodyRegExp = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
        hasLocation = typeof location !== 'undefined' && location.href,
        defaultProtocol = hasLocation && location.protocol && location.protocol.replace(/\:/, ''),
        defaultHostName = hasLocation && location.hostname,
        defaultPort = hasLocation && (location.port || undefined),
        buildMap = {},
        masterConfig = (module.config && module.config()) || {};

    text = {
        version: '2.0.10',

        strip: function (content) {
            //Strips <?xml ...?> declarations so that external SVG and XML
            //documents can be added to a document without worry. Also, if the string
            //is an HTML document, only the part inside the body tag is returned.
            if (content) {
                content = content.replace(xmlRegExp, "");
                var matches = content.match(bodyRegExp);
                if (matches) {
                    content = matches[1];
                }
            } else {
                content = "";
            }
            return content;
        },

        jsEscape: function (content) {
            return content.replace(/(['\\])/g, '\\$1')
                .replace(/[\f]/g, "\\f")
                .replace(/[\b]/g, "\\b")
                .replace(/[\n]/g, "\\n")
                .replace(/[\t]/g, "\\t")
                .replace(/[\r]/g, "\\r")
                .replace(/[\u2028]/g, "\\u2028")
                .replace(/[\u2029]/g, "\\u2029");
        },

        createXhr: masterConfig.createXhr || function () {
            //Would love to dump the ActiveX crap in here. Need IE 6 to die first.
            var xhr, i, progId;
            if (typeof XMLHttpRequest !== "undefined") {
                return new XMLHttpRequest();
            } else if (typeof ActiveXObject !== "undefined") {
                for (i = 0; i < 3; i += 1) {
                    progId = progIds[i];
                    try {
                        xhr = new ActiveXObject(progId);
                    } catch (e) {}

                    if (xhr) {
                        progIds = [progId];  // so faster next time
                        break;
                    }
                }
            }

            return xhr;
        },

        /**
         * Parses a resource name into its component parts. Resource names
         * look like: module/name.ext!strip, where the !strip part is
         * optional.
         * @param {String} name the resource name
         * @returns {Object} with properties "moduleName", "ext" and "strip"
         * where strip is a boolean.
         */
        parseName: function (name) {
            var modName, ext, temp,
                strip = false,
                index = name.indexOf("."),
                isRelative = name.indexOf('./') === 0 ||
                             name.indexOf('../') === 0;

            if (index !== -1 && (!isRelative || index > 1)) {
                modName = name.substring(0, index);
                ext = name.substring(index + 1, name.length);
            } else {
                modName = name;
            }

            temp = ext || modName;
            index = temp.indexOf("!");
            if (index !== -1) {
                //Pull off the strip arg.
                strip = temp.substring(index + 1) === "strip";
                temp = temp.substring(0, index);
                if (ext) {
                    ext = temp;
                } else {
                    modName = temp;
                }
            }

            return {
                moduleName: modName,
                ext: ext,
                strip: strip
            };
        },

        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,

        /**
         * Is an URL on another domain. Only works for browser use, returns
         * false in non-browser environments. Only used to know if an
         * optimized .js version of a text resource should be loaded
         * instead.
         * @param {String} url
         * @returns Boolean
         */
        useXhr: function (url, protocol, hostname, port) {
            var uProtocol, uHostName, uPort,
                match = text.xdRegExp.exec(url);
            if (!match) {
                return true;
            }
            uProtocol = match[2];
            uHostName = match[3];

            uHostName = uHostName.split(':');
            uPort = uHostName[1];
            uHostName = uHostName[0];

            return (!uProtocol || uProtocol === protocol) &&
                   (!uHostName || uHostName.toLowerCase() === hostname.toLowerCase()) &&
                   ((!uPort && !uHostName) || uPort === port);
        },

        finishLoad: function (name, strip, content, onLoad) {
            content = strip ? text.strip(content) : content;
            if (masterConfig.isBuild) {
                buildMap[name] = content;
            }
            onLoad(content);
        },

        load: function (name, req, onLoad, config) {
            //Name has format: some.module.filext!strip
            //The strip part is optional.
            //if strip is present, then that means only get the string contents
            //inside a body tag in an HTML string. For XML/SVG content it means
            //removing the <?xml ...?> declarations so the content can be inserted
            //into the current doc without problems.

            // Do not bother with the work if a build and text will
            // not be inlined.
            if (config.isBuild && !config.inlineText) {
                onLoad();
                return;
            }

            masterConfig.isBuild = config.isBuild;

            var parsed = text.parseName(name),
                nonStripName = parsed.moduleName +
                    (parsed.ext ? '.' + parsed.ext : ''),
                url = req.toUrl(nonStripName),
                useXhr = (masterConfig.useXhr) ||
                         text.useXhr;

            // Do not load if it is an empty: url
            if (url.indexOf('empty:') === 0) {
                onLoad();
                return;
            }

            //Load the text. Use XHR if possible and in a browser.
            if (!hasLocation || useXhr(url, defaultProtocol, defaultHostName, defaultPort)) {
                text.get(url, function (content) {
                    text.finishLoad(name, parsed.strip, content, onLoad);
                }, function (err) {
                    if (onLoad.error) {
                        onLoad.error(err);
                    }
                });
            } else {
                //Need to fetch the resource across domains. Assume
                //the resource has been optimized into a JS module. Fetch
                //by the module name + extension, but do not include the
                //!strip part to avoid file system issues.
                req([nonStripName], function (content) {
                    text.finishLoad(parsed.moduleName + '.' + parsed.ext,
                                    parsed.strip, content, onLoad);
                });
            }
        },

        write: function (pluginName, moduleName, write, config) {
            if (buildMap.hasOwnProperty(moduleName)) {
                var content = text.jsEscape(buildMap[moduleName]);
                write.asModule(pluginName + "!" + moduleName,
                               "define(function () { return '" +
                                   content +
                               "';});\n");
            }
        },

        writeFile: function (pluginName, moduleName, req, write, config) {
            var parsed = text.parseName(moduleName),
                extPart = parsed.ext ? '.' + parsed.ext : '',
                nonStripName = parsed.moduleName + extPart,
                //Use a '.js' file name so that it indicates it is a
                //script that can be loaded across domains.
                fileName = req.toUrl(parsed.moduleName + extPart) + '.js';

            //Leverage own load() method to load plugin value, but only
            //write out values that do not have the strip argument,
            //to avoid any potential issues with ! in file names.
            text.load(nonStripName, req, function (value) {
                //Use own write() method to construct full module value.
                //But need to create shell that translates writeFile's
                //write() to the right interface.
                var textWrite = function (contents) {
                    return write(fileName, contents);
                };
                textWrite.asModule = function (moduleName, contents) {
                    return write.asModule(moduleName, fileName, contents);
                };

                text.write(pluginName, nonStripName, textWrite, config);
            }, config);
        }
    };

    if (masterConfig.env === 'node' || (!masterConfig.env &&
            typeof process !== "undefined" &&
            process.versions &&
            !!process.versions.node &&
            !process.versions['node-webkit'])) {
        //Using special require.nodeRequire, something added by r.js.
        fs = require.nodeRequire('fs');

        text.get = function (url, callback, errback) {
            try {
                var file = fs.readFileSync(url, 'utf8');
                //Remove BOM (Byte Mark Order) from utf8 files if it is there.
                if (file.indexOf('\uFEFF') === 0) {
                    file = file.substring(1);
                }
                callback(file);
            } catch (e) {
                errback(e);
            }
        };
    } else if (masterConfig.env === 'xhr' || (!masterConfig.env &&
            text.createXhr())) {
        text.get = function (url, callback, errback, headers) {
            var xhr = text.createXhr(), header;
            xhr.open('GET', url, true);

            //Allow plugins direct access to xhr headers
            if (headers) {
                for (header in headers) {
                    if (headers.hasOwnProperty(header)) {
                        xhr.setRequestHeader(header.toLowerCase(), headers[header]);
                    }
                }
            }

            //Allow overrides specified in config
            if (masterConfig.onXhr) {
                masterConfig.onXhr(xhr, url);
            }

            xhr.onreadystatechange = function (evt) {
                var status, err;
                //Do not explicitly handle errors, those should be
                //visible via console output in the browser.
                if (xhr.readyState === 4) {
                    status = xhr.status;
                    if (status > 399 && status < 600) {
                        //An http 4xx or 5xx error. Signal an error.
                        err = new Error(url + ' HTTP status: ' + status);
                        err.xhr = xhr;
                        errback(err);
                    } else {
                        callback(xhr.responseText);
                    }

                    if (masterConfig.onXhrComplete) {
                        masterConfig.onXhrComplete(xhr, url);
                    }
                }
            };
            xhr.send(null);
        };
    } else if (masterConfig.env === 'rhino' || (!masterConfig.env &&
            typeof Packages !== 'undefined' && typeof java !== 'undefined')) {
        //Why Java, why is this so awkward?
        text.get = function (url, callback) {
            var stringBuffer, line,
                encoding = "utf-8",
                file = new java.io.File(url),
                lineSeparator = java.lang.System.getProperty("line.separator"),
                input = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(file), encoding)),
                content = '';
            try {
                stringBuffer = new java.lang.StringBuffer();
                line = input.readLine();

                // Byte Order Mark (BOM) - The Unicode Standard, version 3.0, page 324
                // http://www.unicode.org/faq/utf_bom.html

                // Note that when we use utf-8, the BOM should appear as "EF BB BF", but it doesn't due to this bug in the JDK:
                // http://bugs.sun.com/bugdatabase/view_bug.do?bug_id=4508058
                if (line && line.length() && line.charAt(0) === 0xfeff) {
                    // Eat the BOM, since we've already found the encoding on this file,
                    // and we plan to concatenating this buffer with others; the BOM should
                    // only appear at the top of a file.
                    line = line.substring(1);
                }

                if (line !== null) {
                    stringBuffer.append(line);
                }

                while ((line = input.readLine()) !== null) {
                    stringBuffer.append(lineSeparator);
                    stringBuffer.append(line);
                }
                //Make sure we return a JavaScript string and not a Java string.
                content = String(stringBuffer.toString()); //String
            } finally {
                input.close();
            }
            callback(content);
        };
    } else if (masterConfig.env === 'xpconnect' || (!masterConfig.env &&
            typeof Components !== 'undefined' && Components.classes &&
            Components.interfaces)) {
        //Avert your gaze!
        Cc = Components.classes,
        Ci = Components.interfaces;
        Components.utils['import']('resource://gre/modules/FileUtils.jsm');
        xpcIsWindows = ('@mozilla.org/windows-registry-key;1' in Cc);

        text.get = function (url, callback) {
            var inStream, convertStream, fileObj,
                readData = {};

            if (xpcIsWindows) {
                url = url.replace(/\//g, '\\');
            }

            fileObj = new FileUtils.File(url);

            //XPCOM, you so crazy
            try {
                inStream = Cc['@mozilla.org/network/file-input-stream;1']
                           .createInstance(Ci.nsIFileInputStream);
                inStream.init(fileObj, 1, 0, false);

                convertStream = Cc['@mozilla.org/intl/converter-input-stream;1']
                                .createInstance(Ci.nsIConverterInputStream);
                convertStream.init(inStream, "utf-8", inStream.available(),
                Ci.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER);

                convertStream.readString(inStream.available(), readData);
                convertStream.close();
                inStream.close();
                callback(readData.value);
            } catch (e) {
                throw new Error((fileObj && fileObj.path || '') + ': ' + e);
            }
        };
    }
    return text;
});
define('text!/global/scripts/modules/src/selection/selection.html',[],function () { return '<div>\r\t<span class="state_selection_label">Select state(s):</span>\r\t<select id="stateSelection">\r\t\t{{#BYSTATE}}\r\t\t\t{{#HEADER}}\r\t\t\t\t<optgroup id="{{ID}}" label="{{NAME}}">\r\t\t\t\t{{#SUBITEMS}}\r\t\t\t\t\t<option id="{{ID}}" value="{{ID}}">{{NAME}}</option>\r\t\t\t\t{{/SUBITEMS}}\r\t\t\t\t</optgroup>\r\t\t\t{{/HEADER}}\r\t\t\t{{^HEADER}}\r\t\t\t\t<option id="{{ID}}" value="{{ID}}">{{NAME}}</option>\r\t\t\t{{/HEADER}}\r\t\t{{/BYSTATE}}\r\t</select>\r</div>';});

define('text!/global/scripts/modules/src/selection/selection.css',[],function () { return '.state_selection_label {display: inline-block; padding-right: 20px; padding-top: 3px;}\r/* UI Multiselect CSS */\r.ui-multiselect { padding:2px 0 2px 4px; text-align:left }\r.ui-multiselect span.ui-icon { float:right }\r.ui-multiselect-single .ui-multiselect-checkboxes input { position:absolute !important; top: auto !important; left:-9999px; }\r.ui-multiselect-single .ui-multiselect-checkboxes label { padding:5px !important }\r\r.ui-multiselect-header { margin-bottom:3px; padding:3px 0 3px 4px }\r.ui-multiselect-header ul { font-size:0.9em }\r.ui-multiselect-header ul li { float:left; padding:0 10px 0 0 }\r.ui-multiselect-header a { text-decoration:none }\r.ui-multiselect-header a:hover { text-decoration:underline }\r.ui-multiselect-header span.ui-icon { float:left }\r.ui-multiselect-header li.ui-multiselect-close { float:right; text-align:right; padding-right:0 }\r\r.ui-multiselect-menu { display:none; padding:3px; position:absolute; z-index:10000 }\r.ui-multiselect-checkboxes { position:relative /* fixes bug in IE6/7 */; overflow-y:scroll }\r.ui-multiselect-checkboxes label { cursor:default; display:block; border:1px solid transparent; padding:3px 1px }\r.ui-multiselect-checkboxes label input { position:relative; top:1px }\r.ui-multiselect-checkboxes li { clear:both; font-size:0.9em; padding-right:3px }\r.ui-multiselect-checkboxes li.ui-multiselect-optgroup-label { text-align:center; font-weight:bold; border-bottom:1px solid }\r.ui-multiselect-checkboxes li.ui-multiselect-optgroup-label a { display:block; padding:3px; margin:1px 0; text-decoration:none }\r\r/* remove label borders in IE6 because IE6 does not support transparency */\r* html .ui-multiselect-checkboxes label { border:none }';});

/**
 *	The Selection module creates a jquery.multiselect
 *	@module selection
 *	@requires signals, classy, mustache, multiselect
 */

define('selection',
[
	'signals',
	'classy',
	'text!/global/scripts/modules/src/selection/selection.html',
	'text!/global/scripts/modules/src/selection/selection.css',
	'mustache',
	'multiselect'
],
function(signals, Class, selectionTemplate, css){
	/**
	 *	Class for the {{#crossLinkModule "selection"}}selection{{/crossLinkModule}} Module
	 * 	@class Selection
	 *	@extends Class
	 *	@constructor 
	 */
	return Class.$extend({
		
		container : null,
		select : null,
		menuContents : null,
		selectionChanged : null,
		selectionClosed : null,
		sortBy : null,
		
		/**
		 *	Constructor Function for Selection
		 *	@method __init__
		 *	@param {JQuery} container A JQuery object representing a &lt;DIV&gt; that will contain the selection component.
		 */
		__init__ : function(container) {
			$('head').append('<style>'+css+'</style>');
			var self = this;
			this.container = container;
			this.selectionChanged = new signals.Signal();
			this.selectionClosed = new signals.Signal();
			
			$(this.container).on('click', 'a.sortChange', function(event) {
				if(self.sortBy == self.$class.SORT_BY_STATE) {
					self.update(self.menuContents, self.$class.SORT_BY_REGION, self.select.multiselect('getChecked').map(function() { return this.value;}).get());
				}
				else {
					self.update(self.menuContents, self.$class.SORT_BY_STATE, self.select.multiselect('getChecked').map(function() { return this.value;}).get());
				}
			});
			
		},
		
		/**
		 *	This method goes through each checkbox and checks those contained in the array passed in, and unchecks those that are not.
		 *	@method updateSelection
		 *	@param {Array} selected An array of values that correspond to the value attributes on the checkboxes.
		 */
		updateSelection : function(selected) {
			var currChecked = this.select.multiselect('getChecked').map(function() { return this.value;}).get();
			this.select.multiselect('widget').find(':checkbox').each(function() {
				if(($.inArray(this.value, selected) == -1 && $.inArray(this.value, currChecked) != -1) || ($.inArray(this.value, selected) != -1 && $.inArray(this.value, currChecked) == -1)) {
					this.click();
				}
			});
		},
		
        /**
         *  This method regenerates the selection menu based on the parameters passed in.
         *  @method update
         *  @param {Object} menuContents An object with keys that correspond to the static strings for the sortby. Each corresponding value is the structure of the menu to generate.,
         *  @param {String} sortBy String value specifying how to sort the menu.
         *  @param {Array} selected An array of the values that should be selected when the menu is generated.
         */
		update : function(menuContents, sortBy, selected) {
			var self = this;
			
			this.menuContents = menuContents;
			this.sortBy = sortBy;
			var obj = {};
            
			switch(sortBy) {
				case this.$class.SORT_BY_STATE:
                    obj[this.$class.SORT_BY_STATE] = this.menuContents[this.$class.SORT_BY_STATE];
					this.container.html(Mustache.render(selectionTemplate, obj));
					break;
				case this.$class.SORT_BY_REGION:
				default:
                    obj[this.$class.SORT_BY_REGION] = this.menuContents[this.$class.SORT_BY_REGION];
					this.container.html(Mustache.render(selectionTemplate, obj));
					break;
			}
			
			var selectionChanged = function(event, ui) {
				self.selectionChanged.dispatch({selected: self.select.multiselect('getChecked').map(function() { return this.value;}).get()});
			};
			
			this.select = $(this.container).find('select')
			.multiselect({selectedText: "# of # selected" });
			
			this.updateSelection(selected);
			
			this.select.bind('multiselectclick', selectionChanged )
			.bind('multiselectcheckall', selectionChanged )
			.bind('multiselectuncheckall', selectionChanged)
			.bind('multiselectoptgrouptoggle', selectionChanged)
			.bind('multiselectclose', function(event, ui) {
				self.selectionClosed.dispatch({selected: self.select.multiselect('getChecked').map(function() { return this.value;}).get()});
			});
		},
		
		__classvars__ : {
            /**
             *  String value to be used as the sortBy when the menu should be sorted by state.
             *  @property SORT_BY_STATE
             *  @type String
             */
			SORT_BY_STATE 	: 'BYSTATE',
            /**
             *  String value to be used as the sortBy when the menu should be sorted by region.
             *  @property SORT_BY_REGION
             *  @type String
             */
			SORT_BY_REGION 	: 'BYREGION'
		}
	});
});