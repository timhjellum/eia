
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
define('text!/global/scripts/modules/src/rankingsTable/rankingsTable.html',[],function () { return '<div id="rankingTableHeader">{{title}}<a class="ico_xls">Download Table Data as CSV</a></div>\r<div class="clear"></div>\r<table class="basic_table rankingsTable{{#tableClass}} {{tableClass}}{{/tableClass}}">\r\t{{#displayColumns}}\r\t   <col {{#width}}width="{{width}}"{{/width}}></col>\r\t{{/displayColumns}}\r\t<thead>\r\t\t{{#doubleHeader}}\r\t\t<tr class="double-header">\r\t\t\t{{#columns}}\r\t\t\t{{^ranked}}\r\t\t\t<th \r\t\t\t\trowspan="1"\r\t\t\t\t{{#showValueBar}} colspan="2"{{/showValueBar}}\r\t\t\t\t{{#width}} width="{{width}}"{{/width}}>\r\t\t\t</th>\r\t\t\t{{/ranked}}\r\t\t\t{{#ranked}}\r\t\t\t<th \r\t\t\t\t{{#showValueBar}} colspan="3"{{/showValueBar}}{{^showValueBar}} colspan="2"{{/showValueBar}}\r\t\t\t\t{{#sortable}} class="sortable"{{/sortable}}\r\t\t\t\t{{#width}} width="{{width}}"{{/width}}>\r\t\t\t\t{{name}}\r\t\t\t\t{{#sortable}}<span class="sort-none"></span>{{/sortable}}\r\t\t\t</th>\r\t\t\t{{/ranked}}\r\t\t\t{{/columns}}\r\t\t</tr>\r\t\t{{/doubleHeader}}\r\t\t<tr>\r\t\t\t{{#columns}}\r\t\t\t{{^ranked}}\r\t\t\t<th \r\t\t\t\trowspan="1"\r\t\t\t\t{{#showValueBar}} colspan="2"{{/showValueBar}}\r\t\t\t\t{{#sortable}} class="sortable"{{/sortable}}\r\t\t\t\t{{#width}} width="{{width}}"{{/width}}>\r\t\t\t\t{{name}}\r\t\t\t\t{{#units}} <br/> ({{units}}) {{/units}}\r\t\t\t\t{{#sortable}}<span class="sort-none"></span>{{/sortable}}\r\t\t\t</th>\r\t\t\t{{/ranked}}\r\t\t\t{{#ranked}}\r\t\t\t<th{{#showValueBar}} colspan="2"{{/showValueBar}}>{{units}}</th>\r\t\t\t<th>Rank</th>\r\t\t\t{{/ranked}}\r\t\t\t{{/columns}}\r\t\t</tr>\r\t</thead>\r\t<tbody>\r\t</tbody>\r\t{{#footnotes.length}}\r\t<tfoot>\r\t\t{{#footnotes}}\r\t\t<tr>\r\t\t\t<td colspan="{{span}}">{{text}}</td>\r\t\t</tr>\r\t\t{{/footnotes}}\r\t</tfoot>\r\t{{/footnotes.length}}\r</table>\r<div><a id="showAll">+ Display All States</a></div>';});

/**
 *	The 'rankingsTable' module does stuff.
 *	@module rankingsTable
 *	@requires  classy, mustache
 */

define('rankingsTable',
[
	'classy',
	'text!/global/scripts/modules/src/rankingsTable/rankingsTable.html',
	'mustache'
],
function(Class, rankingsTableTemplate){
	/**
	 *	Class for the {{#crossLinkModule "rankingsTable"}}rankingsTable{{/crossLinkModule}} Module
	 * 	@class RankingsTable
	 *	@extends Class
	 *	@constructor 
	 */
	return Class.$extend({
		
		container : null,
		columns : [],
		data : [],
		sortColumn: 0,
		sortAsc: true,
		minRowsShown: 5,
		showAllRows: false,
		title: '',
		csvFileName: null,
		rowFilterFunction: null,
		doubleHeader: true,
		
		/**
		 *	Constructor Function for RankingsTable
		 *	@method __init__
		 *	@param {JQuery} container A JQuery object representing a &lt;DIV&gt; that will contain the selection component.
		 */
		__init__ : function(container, config) {
			var self = this;
			this.container = container;
			this.minRowsShown = (config.minRowsShown ? config.minRowsShown : this.minRowsShown);
			this.sortColumn = (config.sortColumn ? config.sortColumn : this.sortColumn);
			this.showAllRows = (config.showAllRows ? config.showAllRows : this.showAllRows);
			this.sortAsc = (config.sortAsc ? config.sortAsc : this.sortAsc);
			this.title = (config.title ? config.title : this.title);
			this.csvFileName = (config.csvFileName ? config.csvFileName : this.csvFileName);
			this.rowFilterFunction = (config.rowFilterFunction ? config.rowFilterFunction : this.rowFilterFunction);
			this.doubleHeader = (config.doubleHeader != null ? config.doubleHeader : this.doubleHeader);
			this.footnotes = (config.footnotes != null ? config.footnotes : this.footnotes);
			
			this.update(config.columns, config.data, config.displayColumns, config.tableClass);
		},
		
		getSortedData : function() {
			var self = this;
			return (this.columns.length > this.sortColumn) ? 
				this.data.concat().sort(function(a, b) {
					var ret = 0;
					var sortColumn = self.columns[self.sortColumn];
					var sortField = sortColumn.ranked ? sortColumn.rankField : sortColumn.field;
					
					/*if(self.columns[self.sortColumn].sortFunction) {
						ret = self.columns[self.sortColumn].sortFunction(a[sortField], b[sortField]);
					}
					else {*/
						if(a[sortField] < b[sortField]) {
							ret = -1;
						}
						else if(a[sortField] > b[sortField]) {
							ret = 1;
						}
					//}
					
					if(!self.sortAsc) {
						ret = ret * -1;
					}
					
					return ret;
				}): 
				self.data;
		},
		
		updateSortColumn : function(sortColumn) {
			this.sortColumn = sortColumn;
			this.updateRows();
		},
		
		updateRows : function() {
			var self = this;
			$('tbody', self.container).empty();
			$.each(this.getSortedData(), function(rowIndex, row) {
				if(self.rowFilterFunction == null || self.rowFilterFunction(row)) {
					var tableRow = $('<tr></tr>');
					
					if(!(rowIndex < self.minRowsShown || self.showAllRows)) {
						tableRow.addClass('hide');
					}
					
					/*if(rowIndex % 2 == 1) {
						tableRow.addClass('odd');
					}
					else {
						tableRow.addClass('even');
					}*/
					
					$.each(self.columns, function(colIndex, column) {
						var cell = $('<td class="value"></td>');
						var datum = column.dataFormatter ? column.dataFormatter(row[column.field], row, column) : row[column.field];
						cell.append( column.displayFormatter ? column.displayFormatter(datum, row, column) : datum);
						tableRow.append(cell);
						if(column.showValueBar) {
							tableRow.append($('<td class="valueBar"><div style="width:' + row[column.valueBarField] + 'px; height:15px;"></div></td>'));
						}
						if(column.ranked) {
							tableRow.append('<td class="rank">' + row[column.rankField] + '</td>');
						}
					});
					
					$('tbody', self.container).append(tableRow);
				}
			});		
		},
		
		generateRankings : function() {
			var self = this;
			$.each(this.columns, function(colIndex, col) {
				if(col.ranked) {
					col.rankField = col.field + '-rank';
					var sortedData = self.data.sort(function(a,b) {
						return col.sortFunction(a[col.field], b[col.field]);
					});
					$.each(sortedData, function(dataIndex, datum) {
						datum[col.rankField] = !isNaN(parseFloat(datum[col.field])) ? dataIndex + 1 : 'N/A';
					});
				}
			});
		},
		
		generateValueBars : function() {
			var self = this;
			$.each(this.columns, function(colIndex, col) {
				if(col.showValueBar) {
					var maxValue = 0;
					$.each(self.data, function(dataIndex, datum) {
						if(maxValue < datum[col.field]) {
							maxValue = datum[col.field];
						}
					});
					col.valueBarField = col.field + '-valueBar';
					$.each(self.data, function(dataIndex, datum) {
						datum[col.valueBarField] = Math.ceil(maxValue == 0 ? 0 : (!isNaN(parseFloat(datum[col.field])) ? datum[col.field]/maxValue*125 : 0 ));
					});
				}
			});
		},
		
		highlightRow : function(column, cellValue) {
			var elem = null;
			var data = this.getSortedData();
			var rowIndex = null;
			
			for(var i = 0; i < data.length; i++) {
				if(data[i][column.field] == cellValue) {
					rowIndex = i;
				}
			}
			if(rowIndex != null) {
				$('.highlight', this.container).removeClass('highlight');
				elem = $('tbody > tr:nth-child(' + (rowIndex+1) + ')', this.container);
				elem.addClass('highlight');
			}
		},
		
		scrollToRow : function(column, cellValue) {
			var elem = null;
			var data = this.getSortedData();
			var rowIndex = null;
			
			for(var i = 0; i < data.length; i++) {
				if(data[i][column.field] == cellValue) {
					rowIndex = i;
				}
			}
			
			elem = $('tbody > tr:nth-child(' + (rowIndex+1) + ')', this.container);
			
			$.scrollTo(elem);
		},
		
        /**
         *  This method regenerates the rankingsTable based on the parameters passed in.
         *  @method update
         *  @param {Object} config 
         */
		update : function(columns, data, displayColumns, tableClass) {
			var self = this;
			this.data = data;
			this.columns = columns;
			this.displayColumns = displayColumns;
			this.tableClass = tableClass;
            
			this.container.empty();
			this.container.html(Mustache.render(rankingsTableTemplate,
				{
					columns: this.columns,
					title: this.title,
					doubleHeader: this.doubleHeader,
					displayColumns : this.displayColumns,
					tableClass : this.tableClass,
					footnotes : this.footnotes
				}
			));
			
			this.generateRankings();
			this.generateValueBars();
			
			this.updateRows();
			
			$('.sortable', this.container).on('click', function(event) {
				var thElem = event.currentTarget;
				var spanElem = $(thElem).find('span')[0];
				
				if($(spanElem).hasClass('sort-none')) {
					$.each($('.sortable > span', this.container), function(index, value) {
						$(value).removeClass('sort-asc').removeClass('sort-desc').addClass('sort-none');
					});
					$(spanElem).removeClass('sort-none').addClass('sort-asc');
					self.sortAsc = true;
				}
				else if($(spanElem).hasClass('sort-asc')) {
					$(spanElem).removeClass('sort-asc').addClass('sort-desc');
					self.sortAsc = false;
				}
				else if($(spanElem).hasClass('sort-desc')) {
					$(spanElem).removeClass('sort-desc').addClass('sort-asc');
					self.sortAsc = true;
				}
				self.sortColumn = thElem.cellIndex;
				self.updateRows();
			});
			
			if(this.minRowsShown >= this.data.length) {
				$('#showAll', this.container).css('display', 'none');
			}
			else {
				$('#showAll', this.container).on('click', function(event) {
					self.showAllRows = !self.showAllRows;
					$('#showAll').text(self.showAllRows ? '- Collapse' : '+ Display All States');
					self.updateRows();
				});
			}
			
			$('#rankingTableHeader > a', this.container).on('click', function(event) {
				self.exportCSV();
			});
		},
		
		exportCSV : function() {
			var input1, input2, arrOfArrs = [[]], self = this;
			
			$.each(this.columns, function(colIndex, col) {
				arrOfArrs[0].push(col.units ? '"' + col.name + ', ' + col.units + '"': col.name);
				
				if(col.ranked) {
					arrOfArrs[0].push('"' + col.name + ', Rank"');
				}
				
				$.each(self.data, function(dataIndex, datum) {
					if(arrOfArrs.length <= dataIndex + 1) {
						arrOfArrs.push([]);
					}
					
					arrOfArrs[dataIndex + 1].push(col.dataFormatter ? col.dataFormatter(datum[col.field], datum, col) : datum[col.field]);
					
					if(col.ranked) {
						arrOfArrs[dataIndex + 1].push(datum[col.rankField]);
					}
				});
			});
			//Add footnotes
			var combinedFootnoteTxt = "";
			$.each(this.footnotes, function(index, value){
				if(combinedFootnoteTxt.length > 0) { 
					combinedFootnoteTxt += " ";
				}
				combinedFootnoteTxt += value.text;
			});
			arrOfArrs[0].push(combinedFootnoteTxt);
			input1 = $('<input type="hidden" name="csvArr"/>').val(JSON.stringify(arrOfArrs));
			input2 = $('<input type="hidden" name="fileName"/>').val(this.csvFileName ? this.csvFileName : 'SelectedStateRankingsData');
			
			jQuery('<form style="display:none;" action="'+ this.$class.POST_URL +'" method="post"></form>')
			.append(input1).append(input2) .appendTo('body').submit().remove();
		},
		
		__classvars__ : {
			POST_URL : '/global/scripts/jquery/highcharts/exporting-server/csv_exporter.cfm',
			LOW_TO_HIGH : function(a, b) {
				if(a < b) {
					return -1;
				}
				else if(a > b) {
					return 1;
				}
				
				return 0;
			},
			HIGH_TO_LOW : function(a, b) {
				if(a > b) {
					return -1;
				}
				else if(a < b) {
					return 1;
				}
				
				return 0;
			
			}
		}
	});
});