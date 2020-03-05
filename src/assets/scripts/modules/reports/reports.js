import $ from "jquery";
import Cookies from "js-cookie";
Cookies.set("timhjellum", "1966");
console.log("report cookie: " + Cookies.get());
//window.jQuery = $;
//window.$ = $;

(function() {
	var ignoreHashChange,
		ignoreTagAdd,
		interceptCreateTag,
		customTagAdded,
		cannedReports,
		selectize,
		selectize2,
		boxStatus,
		datePickersActivated = false;

	var tags = [];
	var frequencyTagCounts = [];
	var sort = "alphabetical";
	var filter = "all";
	var fidSuffix, trimmedTagCategories;
	var frequencyMenu, frequencyButton;

	// start Mobile-Only
	var heightMeasurement = window.innerHeight;
	var scrollArea = heightMeasurement - 100;
	var windowWidth = window.innerWidth;
	$(document).ready(function() {
		// set initial breadcrumb state - mobile only
		$(".report-count").addClass("load");
		$(".selected-tags-container").show();
		//setTimeout(function() {
		//	checkSelectedTags();
		//console.log('checking for selected tags');
		//}, 500);
		$(".overlay-button").click(function() {
			$(".overlay").addClass("overlay-show");
			$(".g-filters-back-button").show();
			$(".g-filters-back-button > div").hide();
			$(".g-search-tags").show();
			$(".g-search-tags-container").hide();
			$(".g-a-z-label .ui-button-text").text("A-Z");
			$(".g-a-z-label").show();
			$(".az-index").hide();
			$(".az-container").hide();
			$(".g-breadcrumb-container").hide();
			$(".g-filter-by").css("display", "block");
			$(".g-filters-source").hide();
			$(".g-filters-report").hide();
			$(".g-filters-geography").hide();
			$(".g-filters-topic").hide();
			$(".g-panel").css({
				"margin-left": "-599px",
				display: "block"
			});
			$(".g-search-tags-container").hide();
			//$('.g-a-z-label').show();
		});
		$(".close-overlay").click(function() {
			resetMobileOnly();
		});
		$("button#resetOne").on("click", function resetHandler(event) {
			event.preventDefault();
			clearAllTags();
			//console.log('#1a Test if selected tags are visible.');
		});
		$("button#resetTwo").on("click", function resetHandler(event) {
			event.preventDefault();
			clearAllTags();
			//console.log('#1b Test if selected tags are visible.');
			checkSelectedTags();
		});
		$(".g-filters-back-button > div").click(function() {
			backButtonClicked();
		});

		/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */
		/* ***** ***** ***  breadcrumb click functions *** ***** ***** */
		/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */

		$(".node-two").click(function() {
			$(".node-thr").text("");
			$(".node-two")
				.removeClass("g-breadcrumb")
				.addClass("g-breadcrumb-active");

			$("#tags-container").show();
			$("#tag_categories").show();
			$("#tag_categories .bookshelftags").css("display", "");
			$("#inner-tags-container").hide();
			$("#tags").hide();
		});
		$(".node-one").click(function() {
			functionFilterByLinkClicked();
		});
		$(".g-filter-by").click(function() {
			functionFilterByLinkClicked();
		});
		$(".g-search-tags").click(function() {
			if (windowWidth <= 599) {
				searchButtonClicked();
			}
		});
		$(".g-a-z-label").click(function() {
			if (windowWidth <= 599) {
				aZButtonClicked();
			}
		});
		$(window).resize(resetFilter);
		$(window).load(resetFilter);

		// end Mobile-Only

		frequencyMenu = $("#frequency-menu");
		frequencyButton = $("#frequency-button");

		// Attach events
		$(".g-filters-container  #filter-radio")
			.buttonset()
			.on("change", filterChangeHandler);

		$("#filter-radio label").on("click", showHideTagSelection);

		$("#tag_categories").on("click", "h5, h4", ctrlCategoryList);
		$("div.selected-tags-container .selected_tags").on(
			"click",
			"div",
			function() {
				removeTag($(this).attr("data-value"));
				//console.log('#2 Test if selected tags are visible.');
				checkSelectedTags();
			}
		);

		$("a[id^='tbd']").click(function(event) {
			event.preventDefault();
		});

		$("div.az-list").on("click", "a", adjIndexTags);
		$("#input-search").on("keyup", handleSearchInput);

		$("#tags-holder").on("change", 'input[name="tag-input"]', tagChangeHandler);
		$("#tags_search .bookshelftags").on(
			"click",
			"div",
			searchElementSelectedHandler
		);

		$(".top_input_box .tags_search").hide();
		$(".top_input_box #input-search").val("");
		$(".top_input_box").on("mouseleave", function() {
			$(".top_input_box .tags_search").hide();
			$("div.top_input_box #input-search").val("");
		});

		$("#more-options").on("click", "#close", function() {
			var input = $('input[name="filter"]:checked');
			input.prop("checked", false);
			$(input.parent()).buttonset("refresh");
			showTagOptions(false);
			checkSelectedTags();
		});

		$("button#reset").on("click", function resetHandler(event) {
			event.preventDefault();
			clearAllTags();
		});
		$("div.reports-container").on(
			"click",
			"div.b_content > h3 > a",
			setRptPgRtn
		);
		$(window).on("resize", movePointer);

		ignoreHashChange = false;
		ignoreTagAdd = false;
		interceptCreateTag = false;
		customTagAdded = false;

		/*
		 * Save the canned reports either way, so we can display them if the subject is provided but suppressed
		 */
		cannedReports = $("#reports-holder").html();
		//if (cannedReports.length < 40) {
		//	window.console && console.log("WARNING: The canned reports length is only= " + cannedReports.length);
		//}

		activateDatePickers();

		// If the user selects a date using the datepicker plugin
		$("#timeSeriesFormContainer").on(
			"change",
			"input#start-date,input#end-date",
			dateChanged
		);

		// Initialize Hasher
		hasher.separator = ",";
		hasher.initialized.add(hasherInit); //add initialized listener (to grab initial value in case it is already set)
		hasher.changed.add(hasherChanged); //add hash change listener
		hasher.init();

		function positionFrequencyMenu() {
			frequencyMenu.position({
				left:
					frequencyButton.position().left -
					frequencyMenu.outerWidth() +
					frequencyButton.outerWidth()
			});
		}

		frequencyButton.on("click", function openFrequencyMenu(event) {
			frequencyButton.toggleClass("open", true);
			if (!frequencyMenu.is(":visible")) {
				frequencyMenu.show();
				positionFrequencyMenu();
				$(window).on("resize", positionFrequencyMenu);

				setTimeout(function() {
					$(window).one("click", function(event) {
						frequencyButton.toggleClass("open", false);
						frequencyMenu.hide();
						$(window).off("resize", positionFrequencyMenu);
					});
				}, 0);
			}
		});
		frequencyMenu.on("change", function frequencySelected(event) {
			setFrequencyButtonText();
			frequencyButton.toggleClass("open", false);
			frequencyMenu.hide();
			$(window).off("resize", positionFrequencyMenu);
		});
		frequencyMenu.on("change", tagChangeHandler);

		/* If no cookie was set, or the user has opened the tag options previously */
		//		var showTagOptionsCookieValue = getCookie("SHOWTAGOPTIONS");
		// Hide tag options on page load
		//if (
		//	showTagOptionsCookieValue === null ||
		//	showTagOptionsCookieValue !== "false"
		//) {
		//if (showTagOptionsCookieValue === null) {
		var selectedFilter = "source";
		/*
var selectedFilter = Cookies.cookie("lastFilter") ? Cookies.cookie("lastFilter") : "all";
*/
		var input = $('input[name="filter"][value="' + selectedFilter + '"]');
		input.prop("checked", true);
		$(input.parent()).buttonset("refresh");
		movePointer();
		showTagOptions(true);
		//} else {
		//	showTagOptions(false);
		//}

		// When the user clicks a tag in the "Analysis & Projections", manually hide the entire menu since the page no longer reloads now that we're using Ajax
		$("div.dat_block a").click(function() {
			$("li.dropdown.active.on").removeClass("on");
			$("div.dat_block").hide();
		});

		// Prevent the date form from submitting automatically
		$("form#date-form").submit(function(e) {
			e.preventDefault();
		});
		// If the user enters something into the start or end date fields
		$("input#start-date,input#end-date").on("keyup", function(eventObject) {
			dateTyped(eventObject);
		});
	}); // END of $(document).ready(function()

	// ************************************************************************
	// * HASHER FUNCTIONS - Initialization is above inside jQuery ready()
	// ************************************************************************
	// Make a tag available to be added (either through autocomplete, or when the user clicks on a suggested tag)

	function filterReportsByFrequency(reports) {
		var ret = [],
			selectedFrequencies = [],
			i,
			hash_array = getCleanHashArray();

		$.each(frequencyTags, function(key, value) {
			if (hash_array.indexOf("T" + key.toString()) !== -1) {
				selectedFrequencies.push(key.toString());
			}
		});

		if (selectedFrequencies.length === 0) {
			return reports;
		}

		function showReport(report) {
			var showReport = false;
			var tags = report.alltags.toString().split(",");

			for (var i = 0; i < selectedFrequencies.length; i++) {
				if (selectedFrequencies[i] === "-1") {
					showReport = true;

					$.each(frequencyTags, function(key, value) {
						if (tags.indexOf(key.toString()) !== -1) {
							showReport = false;
							return false;
						}
					});
				} else {
					if (tags.indexOf(selectedFrequencies[i]) > -1) {
						showReport = true;
						break;
					}
				}
			}

			return showReport;
		}

		for (i = 0; i < reports.length; i++) {
			if (showReport(reports[i])) {
				ret.push(reports[i]);
			}
		}

		return ret;
	}

	function setFrequencyButtonText() {
		var selectedInputs = $("input:checked", frequencyMenu);
		var text = "All available";
		if (
			selectedInputs.length == $("input", frequencyMenu) ||
			selectedInputs.length == 0
		) {
			text = "All available";
		} else if (selectedInputs.length > 1) {
			text = "Multiple";
		} else {
			text = selectedInputs.val();
			text = frequencyTags[text.substr(1)];
			text = text.substr(0, 1).toUpperCase() + text.substr(1);
		}
		$(".text", frequencyButton).text(text);
	}

	function createTag(newTag, newID) {
		interceptCreateTag = false;
		// Ignore if the tag ID no longer exists (or never did)
		if (typeof newTag != "undefined") {
			// Create the tag as an option in the Selectize plugin

			addOption(newTag, newID);
		}
		interceptCreateTag = true;
	} // END of createTag()

	function addOption(value, data) {
		if (interceptCreateTag) {
			customTagAdded = true;
		}
	}

	// Add a tag that has already been created by createTag() above
	function addTag(newID) {
		var tagSelected = hasher
			.getHash()
			.split(",")
			.indexOf(newID);

		if (tagSelected == -1) {
			addItem(newID);
		}
	}

	function addItem(value) {
		if (!ignoreTagAdd) {
			// Google Analytics Event tracking
			if (typeof _gaq !== "undefined" && typeof _gaq.push === "function") {
				_gaq.push(["_trackEvent", "Bookshelf report tagging", "Tag added"]);
			}
			var hash_array;

			// If getHash() has no elements, create an empty array
			if (!hasher.getHash().length) {
				// Create an empty array
				hash_array = [];
			} else {
				hash_array = getCleanHashArray();
			}

			// If onOptionAdd() above determined this is a custom tag (aka keyword), rather than being a subject or tag from the autocomplete
			// if (interceptCreateTag && value.substring(1, 0) != "S" && value.substring(1, 0) != "T") {
			if (customTagAdded) {
				// Update the text and value to make it a keyword
				var newText = "Keyword: " + this.options[value].text;
				var newValue = "K" + this.options[value].value;
				var data = $.extend({}, this.options[value], {
					text: newText,
					value: newValue
				});
				this.updateOption(value, data);

				value = newValue;

				// Reset the variable now that processing is done
				customTagAdded = false;
			}

			// Update hasher
			hash_array.push(value);
			hasher.setHash(hash_array.toString());
		}

		setSelectedTags();
	}

	function removeTag(newID) {
		interceptCreateTag = false;
		removeItem(newID);
		interceptCreateTag = true;
	}

	function defaultTagRemoved() {
		var hash_array = getCleanHashArray();
		hash_array.splice(hash_array.indexOf(L2tagId), 1);
		window.location.href = "/reports/#" + hash_array.join(",");
	}

	function removeItem(value) {
		// Google Analytics Event tracking
		if (typeof _gaq !== "undefined" && typeof _gaq.push === "function") {
			_gaq.push(["_trackEvent", "Bookshelf report tagging", "Tag removed"]);
		}

		var hash_array = getCleanHashArray();
		// If there's just one item in the hash
		if (hash_array.length == 1) {
			clearAllTags();
		} else {
			// Remove from Hasher the one tag that was removed from the Selectize plugin
			hash_array.splice(hash_array.indexOf(value), 1);
			hasher.setHash(hash_array.toString());
		}
	}

	function searchElementSelectedHandler(event) {
		var tagId = $(this).attr("value");
		$(".top_input_box .tags_search").hide();
		$(".top_input_box #input-search").val("");
		addTag(tagId);
		//checkSelectedTags();
	}

	function tagChangeHandler(event) {
		var tagId = $(event.target).val();
		var checked = $(event.target).prop("checked");

		if (checked) {
			addTag(tagId);
		} else {
			removeTag(tagId);
		}
	}

	// Handle hash passed in
	function hasherInit(newHash) {
		//initialize hasher (start listening for history changes)
		// Check if L2 page add L2tagId NOT in hash - add the L2tag to the hash
		var hash_array = getCleanHashArray();

		//console.log(hash_array);
		//console.log(L2tagId);

		if (
			L2tagId.length !== 0 &&
			hash_array.length === 0 &&
			hash_array.indexOf(L2tagId) === -1
		) {
			hash_array.push(L2tagId);
			hasher.setHash(hash_array.join(","));
			//	console.log(hash_array + "(2)");
			//	console.log(L2tagId + "(2)");
		} else {
			// Call the server to update the reports and tags
			ajaxCall();
		}
	}

	//handle hash changes
	function hasherChanged(newHash, oldHash) {
		/*
				if(L2tagId.length !== 0 && newHash.indexOf(L2tagId) === -1) {
					defaultTagRemoved();
				}
		*/

		setTimeout(checkSelectedTags, 500);
		if (!ignoreHashChange) {
			setSelectedTags();
			ajaxCall();
		}
	}

	// Called by handlers for the "Filter by date range" ("date-form") form
	function filterByDates() {
		var startDate = $("input#start-date").val();
		var endDate = $("input#end-date").val();
		// Use a regex to validate the start date (if not empty)
		if (startDate && !/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(startDate)) {
			alert("Please enter or select a valid start date (M/D/YYYY)");
			// Wait 1ms so that the datepicker can be reopened
			setTimeout(function() {
				// Refocus on start date field, which will open the datepicker
				$("input#start-date").trigger("focus");
			}, 1);
			return false;
		}

		// Use a regex to validate the start date (if not empty)
		if (endDate && !/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(endDate)) {
			alert("Please enter or select a valid end date (M/D/YYYY)");
			// Wait 1ms so that the datepicker can be reopened
			setTimeout(function() {
				// Refocus on start date field, which will open the datepicker
				$("input#end-date").trigger("focus");
			}, 1);
			return false;
		}

		// Remove any existing dates from hasher
		// Iterate through the tags in hasher
		var hash_array = getCleanHashArray();
		var hash_array_temp = [],
			hashType,
			hashValue;

		for (var oneHash = 0; oneHash < hash_array.length; oneHash++) {
			hashType = hash_array[oneHash].substring(0, 1);
			hashValue = hash_array[oneHash].substring(1);
			// If a start or end start date was already selected
			if (hashType != "B" && hashType != "E") {
				// Remove the start or end date from the hash
				//hash_array.splice(hash_array.indexOf(hash_array[oneHash]), 1);
				hash_array_temp.push(hash_array[oneHash]);
			}
		}
		hash_array = hash_array_temp;

		// Add the new start and/or end dates to the URL hash
		if (startDate) {
			hash_array.push("B" + startDate);
		}
		if (endDate) {
			hash_array.push("E" + endDate);
		}
		// Update the hash with the results
		hasher.setHash(hash_array.toString());
	}

	// Called by "Clear all" link
	function clearAllTags() {
		$("input#start-date").val("");
		$("input#end-date").val("");
		$("#input-tags").val("");
		hasher.setHash("/");
		//console.log('#4 CLEAR ALL TAGS - Test if selected tags are visible.');
		//checkSelectedTags();
	}

	// ************************************************************************
	// * END HASHER FUNCTIONS
	// ************************************************************************

	// Convert milliseconds to seconds, and round to the tenths place
	function getTenths(num) {
		num = Math.round(num / 100) / 10;
		// Keep them all the same length
		if (num.toString().length == 1) {
			return num + ".0s";
		} else {
			return num + "s";
		}
	}

	function getCleanHashArray() {
		var hashArray = hasher.getHashAsArray();

		for (var i = hashArray.length - 1; i >= 0; i--) {
			if (hashArray[i] === "") {
				hashArray.splice(i, 1);
			}
		}

		return hashArray;
	}
	// Called by: hasherInit(), the "Search for" input field, and the associated "Clear" link
	function ajaxCall() {
		// Deactivate the UI
		setUIActive(false);

		// Tell user the tags are being loaded
		$("#tags-container").removeClass();
		$("#tags-container").toggleClass("loading", true);
		// Remove the number of reports during the Ajax call
		$(".report-count").empty();
		// Tell user new tags and reports are currently loading
		$("#reports-holder")
			.empty()
			.append("<br><em>Loading reports ...</em><br><br>");
		$(".reports-container").toggleClass("show-side", true);

		// CFD - remove any keywords/tags from the new searchbox
		$("#input-search").empty();
		//selectize.removeItem(newID);

		// *************************************************************************
		// *************************************************************************
		// CLEAR THE SELECTIZE PLUGIN, AND RECREATE ALL ITEMS
		// NOTE: THE CODE BELOW IS SOMEWHAT DUPLICATIVE SO THE ITEMS ARE IN A CERTAIN ORDER
		// (SUBJECT, TAGS, KEYWORDS, AND START/END DATES)
		// *************************************************************************
		// *************************************************************************

		// Prevent an infinite loop
		ignoreTagAdd = true;

		// Get the hash array
		var hash_array = getCleanHashArray();
		var hashType, hashValue;

		var realTags = "",
			useKeywords = "",
			useStartDate,
			useEndDate;

		$("input#start-date").val("");
		$("input#end-date").val("");

		// Iterate through the tags in hasher
		for (var oneHash = 0; oneHash < hash_array.length; oneHash++) {
			// Get the first character to determine the hash type
			hashType = hash_array[oneHash].substring(0, 1);
			hashValue = hash_array[oneHash].substring(1);

			hashTypeSwitch: switch (hashType) {
				case "T":
					if (allAvailableTags[hashValue] !== undefined) {
						// If a "T" is prepended, this is a real tag
						// Create and add tags in the Selectize plugin for each one in hasher so the already selected tags can be displayed (additional tags will be created but not added below)
						createTag(allAvailableTags[hashValue], "T" + hashValue);
						// Add the existing tag
						addTag(hash_array[oneHash]);
						// Append this tag to the list
						realTags += (realTags.length > 0 ? "," : "") + hashValue;
					} else if (frequencyTags[hashValue] !== undefined) {
						realTags += (realTags.length > 0 ? "," : "") + hashValue;
					}
					break hashTypeSwitch;
				//B - Needed for beginning Date
				case "B":
					// If an "B" is prepended, this is a START DATE
					useStartDate = hashValue;
					createTag("Start date: " + hashValue, "B" + hashValue);
					// Add the existing tag
					addTag(hash_array[oneHash]);
					$("input#start-date").val(hashValue);
					//throw new Error();
					break hashTypeSwitch;
				//E - Needed for ending Date
				case "E":
					// If an "B" is prepended, this is an END DATE
					useEndDate = hashValue;
					createTag("End date: " + hashValue, "E" + hashValue);
					// Add the existing tag
					addTag(hash_array[oneHash]);
					$("input#end-date").val(hashValue);
					break hashTypeSwitch;
				default:
					//window.console && console.log("WARNING: Unrecognized hash item: " + hash_array[oneHash]);
					break hashTypeSwitch;
			}
		}

		ignoreTagAdd = false;
		// *************************************************************************
		// *************************************************************************
		// END: CREATE ALL TAGS AS OPTIONS, AND ADD ONLY THOSE THAT ARE CURRENTLY SELECTED
		// *************************************************************************
		// *************************************************************************

		// *************************************************************************
		// *************************************************************************
		// MAKE AJAX CALL
		// *************************************************************************
		// *************************************************************************
		var useData = {};

		// Ignore if there is only a comma (Does this ever happen anymore? Keep just in case)
		if (realTags.length > 1) {
			useData.tags = realTags;
		}

		if (useKeywords.length) {
			useData.keywords = useKeywords;
		}

		// If a START DATE exists, pass it in
		if (typeof useStartDate != "undefined") {
			useData.startdate = useStartDate;
		}
		// If an END DATE exists, pass it in
		if (typeof useEndDate != "undefined") {
			useData.enddate = useEndDate;
		}

		// Initiate the Ajax call to the server
		var jqHXR = $.ajax({
			url: "/global/includes/bookshelf/index.php",
			dataType: "json",
			type: "GET",
			data: useData
		})
			// In case there's anything to do regardless of whether the Ajax call succeeds or fails
			.always(function() {})
			// If the Ajax call failed
			.fail(function(jqXHR, textStatus, errorThrown) {
				window.console &&
					console.log(
						"error, textStatus= " + textStatus + ", errorThrown= " + errorThrown
					);
				// Clear out the tags, and display error message
				$("#tags-holder")
					.empty()
					.append(
						'<em>There was an error:</em><br><span style="color:#f00"><strong>' +
							errorThrown +
							'</strong></span><br><span style="color:#f00"><strong>' +
							jqHXR.responseText +
							"</strong></span>"
					);

				// Clear out any existing reports
				$("#reports-holder").empty();
			})
			// If the Ajax call completed successfully
			.done(function(data, textStatus, jqHXR) {
				tags = data.tags;
				frequencyTagCounts = data.frequencyTags;

				populateTrimmedTagCategories();

				// Clear out any existing TAGS, so we can start over
				if (!tags.length) {
					$("#tags-container").removeClass();
					$("#tags-container").toggleClass("no_tags", true);
				} else {
					for (var i = 0; i < tags.length; i++) {
						createTag(
							tags[i].label + " (" + tags[i].numreports + ")",
							tags[i].identifier
						);
					}
					/*
var curFilter =
						typeof Cookies.cookie("lastFilter") == "string"
							? Cookies.cookie("lastFilter").toLowerCase()
							: "all";
							*/
					//var curFilter =  'all';
					renderTags();
				} // END of processing the tags

				renderFrequencyTags();

				// If "reports" did not exist in the JSON (happens on the all reports initial view, since no subject or tags are passed via Ajax)
				if (typeof data.reports == "undefined") {
					// Hide the title DIV
					$("#reports-title h2").hide();
					// Hide the heading DIV
					$("#reports-heading").addClass("hidden");
					// Reinstate the canned reports
					$("#reports-holder")
						.empty()
						.html(cannedReports);
					$(".reports-container").toggleClass("show-side", false);
					// Show the canned reports (hidden on page load in case they won't get displayed)

					$(".no-results").show();

					// Otherwise "reports" exists in the JSON (but could be empty)
				} else {
					// Get the reports in JSON format
					var reportsJSON = filterReportsByFrequency(data.reports);
					// Hide the title DIV
					$("#reports-title h2").show();
					// Make sure the heading DIV is visible
					$("#reports-heading").removeClass("hidden");
					$("#timeSeriesFormContainer").removeClass("hidden");
					// Clear out any existing REPORTS, so we can start over
					$("#reports-holder").empty();
					if (!reportsJSON.length) {
						$("#reports-holder").append(
							"<br><em>No reports to display</em><br><br>"
						);
					} else {
						reportsJSON.sort(function(a, b) {
							var b_rd = Date.parse(b.release_date);
							var a_rd = Date.parse(a.release_date);
							if (b_rd == a_rd) return 0;
							if (b_rd < a_rd) return -1;
							if (b_rd > a_rd) return 1;
						});

						// Iterate through all the REPORTS returned by the server
						for (
							var oneReport = 0;
							oneReport < reportsJSON.length;
							oneReport++
						) {
							$("#reports-holder").append(formatReport(reportsJSON[oneReport]));
						}
					} // END if (reportsJSON.length)

					// Update the number of reports

					$(".report-count")
						.empty()
						.append("Results (" + reportsJSON.length + ")");

					// Click handler for the newly generated "(archived versions)" links
					$(".arc").click(function() {
						$(this)
							.parent()
							.next(".grey_side")
							.toggle();
					});
				} // End of processing the reports
				// Remove the overlay that blocks the user from interacting with anything
				setUIActive(true);
			}); // END of jqHXR.done();
		// *************************************************************************
		// END: MAKE AJAX CALL
		// *************************************************************************
	} // END of ajaxCall()

	// Called by ajaxCall(), jqHXR.done(), and clearAllTags()
	function setUIActive(toggle) {
		if (toggle) {
			// Remove the cover that prevents the user from interacting with the UI during the Ajax call
			$("#cover-everything").remove();
		} else {
			// Cover the entire page during Ajax call to prevent user from interacting with the UI
			$("body").append(
				'<div id="cover-everything" style="position:fixed; top:0; left:0; height: 100%; width: 100%; margin: 0; padding: 0; background: #000000; opacity: .15; filter: alpha(opacity=15); -moz-opacity: .15; z-index: 101;"></div>'
			);
		}
	}

	// Check whether a variable is defined, not null, and has a length
	function isDisplayable(theVar) {
		return typeof theVar != "undefined" && theVar != null && theVar.length > 0;
	} // END of isDisplayable()

	// Helper function to get a cookie value
	//	function getCookie(name) {
	//		var re = new RegExp(name + "=([^;]+)");
	//		var value = re.exec(document.cookie);
	//		return value != null ? value[1] : null;
	//	}

	// format a single report for display
	function formatReport(report) {
		var reportElement = $("<div></div>").addClass("b_content");
		var reportTitle = $("<h3></h3>");

		// Only create a LINK if one exists
		if (isDisplayable(report.link_html)) {
			$("<a></a>")
				.attr("href", report.link_html)
				.text(report.title)
				.appendTo(reportTitle);
		} else {
			reportTitle.text(report.title);
		}

		if (isDisplayable(report.report_number)) {
			$("<em></em>")
				.text("(" + report.report_number + ")")
				.appendTo(reportTitle);
		}

		reportTitle.append(formatReportID(report));
		reportElement.append(reportTitle);

		// Only display the DATE if it exists, and is not null
		if (isDisplayable(report.release_date)) {
			// ColdFusion provides the date in a format meant for JavaScript's Date() function
			var dateObject = new Date(report.release_date);
			// Dates in 2028 are designed to keep the report at the top, but should not be displayed
			if (dateObject.getFullYear() > 2027) {
				//window.console && console.log("Ignoring ridiculous date: " + dateObject);
			} else {
				// Format the date
				var dateElement = $("<h4></h4>")
					.addClass("dat bookshelf")
					.text(formatDate(dateObject));
				reportElement.append(dateElement);
			}
		}

		// Only display the DESCRIPTION if it exists, and is not null
		if (isDisplayable(report.summary_descript)) {
			$("<p></p>")
				.addClass("desc")
				.text(report.summary_descript)
				.appendTo(reportElement);
		}

		// Only display an HTML or PDF link exists
		if (isDisplayable(report.link_html) || isDisplayable(report.link_pdf)) {
			var reportFormatElement = $("<p></p>")
				.addClass("report_format")
				.append($("<em></em>").text("Available formats: "));
			if (isDisplayable(report.link_html)) {
				reportFormatElement.append(
					$("<a></a>")
						.addClass("ico html")
						.attr("href", report.link_html)
						.html("<span>HTML</span>")
				);
				if (isDisplayable(report.link_pdf)) {
					reportFormatElement.append("&nbsp;&nbsp;|&nbsp;&nbsp;");
				}
			}
			if (isDisplayable(report.link_pdf)) {
				reportFormatElement.append(
					$("<a></a>")
						.addClass("ico pdf")
						.attr("href", report.link_pdf)
						.html("<span>PDF</span>")
				);
			}
			reportElement.append(reportFormatElement);
		}

		// Add icons for Data, Analysis and Projections
		if (
			(isDisplayable(report.has_data) && report.has_data == "Y") ||
			(isDisplayable(report.has_forecast) && report.has_forecast == "Y") ||
			(isDisplayable(report.has_analysis) && report.has_analysis == "Y")
		) {
			var reportTypeElement = $("<p></p>")
				.addClass("report_type")
				.append($("<em></em>").text("Report type: "));
			if (isDisplayable(report.has_data) && report.has_data == "Y") {
				reportTypeElement.append(
					$("<span></span>")
						.addClass("report-contents has-data")
						.attr("title", "Includes Data")
						.html("D")
				);
			}
			if (isDisplayable(report.has_forecast) && report.has_forecast == "Y") {
				reportTypeElement.append(
					$("<span></span>")
						.addClass("report-contents has-projections")
						.attr("title", "Includes Projections")
						.html("P")
				);
			}
			if (isDisplayable(report.has_analysis) && report.has_analysis == "Y") {
				reportTypeElement.append(
					$("<span></span>")
						.addClass("report-contents has-analysis")
						.attr("title", "Includes Analysis")
						.html("A")
				);
			}
			reportElement.append(reportTypeElement);
		}
		// Only display all the tags associated with this report if at least one exists, and are not null (It's a convenient coincidence that the number 0 (for the tag "All") is considered to have no length)
		if (isDisplayable(report.alltags)) {
			var tagsElement = $("<p></p>")
				.addClass("tags")
				.append($("<em></em>").text("Tags: "));
			// Create an array from the list of all tags
			var allTags_array = report.alltags.toString().split(",");
			var first = true;
			// Iterate through all the tags for this report
			for (var oneTag = 0; oneTag < allTags_array.length; oneTag++) {
				// Ignore the "All" tag (Can this be safely done on the server-side?)
				if (allTags_array[oneTag] == 0) continue;
				// Display the tag

				if (!first) {
					tagsElement.append(", ");
				}
				tagsElement.append(formatTag(allTags_array[oneTag], report.id));
				first = false;
			}

			reportElement.append(tagsElement);
		}

		return reportElement;
	}

	function formatTag(tag, reportID) {
		var tagElement = $("<a></a>").attr("href", "#/T" + tag);
		var filterTagsList = hasher.getHash();
		var tagText = isDisplayable(allAvailableTags[tag])
			? allAvailableTags[tag]
			: isDisplayable(frequencyTags[tag])
			? frequencyTags[tag]
			: tag;

		tagElement
			.text(tagText)
			.toggleClass("selected", filterTagsList.search("T" + tag) > -1);
		return tagElement;
	}

	// Called by the "more-tab" click handler below, and also on initial page load below
	function showTagOptions(newSetting) {
		// set cookie for whether the tag selection menu is visible or collapsed
		//Cookies.cookie("SHOWTAGOPTIONS", newSetting);
		if (windowWidth > 599) {
			if (newSetting) {
				$("#more-options")
					.stop()
					.slideDown(500);
			} else {
				$("#more-options")
					.stop()
					.slideUp(500);
				$(".g-filters-pointer").addClass("hide");
			}
		}
	}

	// Called by on() keyup immediately above
	function dateTyped(eventObject) {
		if (eventObject.keyCode == 13) {
			dateChanged();
		}
	}

	function activateDatePickers() {
		// Activate the jQuery UI datepicker widget
		$("input#start-date.datepicker").datepicker({
			dateFormat: "m/d/yy",
			defaultDate: '1/1/#DateFormat(Now(), "yyyy")#'
		});

		$("input#end-date.datepicker").datepicker({
			dateFormat: "m/d/yy"
		});
	}

	// Called by both dateTyped() and on() change above
	function dateChanged() {
		filterByDates();
	}

	function formatDate(dateObject) {
		var months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		];
		return (
			months[dateObject.getMonth()] +
			" " +
			dateObject.getDate() +
			", " +
			dateObject.getFullYear()
		);
	}

	function filterChangeHandler(event) {
		var input = $(event.target);
		if (input.is(":checked")) {
			filter = $(event.target).val();
			$("#tags-holder").attr("data-filter", filter);
			//Cookies.cookie("lastFilter", filter);

			movePointer();
			renderTags(filter);
			showTagOptions(true);
		} else {
			Cookies.cookie("lastFilter", null);
		}
	}

	function showHideTagSelection(event) {
		var input = $("input#" + $(event.currentTarget).attr("for"));

		if (input.is(":checked")) {
			event.preventDefault();
			showTagOptions(false);
			input.prop("checked", false);
			$(input.parent()).buttonset("refresh");
		} else {
			showTagOptions(true);
		}
	}

	function movePointer() {
		var selectedFilter = $('input[name="filter"]:checked');
		if (selectedFilter.length > 0) {
			var filter = selectedFilter.val();
			filter = filter.replace(" ", "");
			$(".g-filters-pointer").removeClass("hide");
			//console.log('filter selected: .g-filters-'+filter);
			if (filter != "all") {
				var selectedFilter = $(".g-filters-" + filter);
				var pointerPosition = selectedFilter.position();
				//	console.log(pointerPosition);
				var pointerPositionLeft =
					pointerPosition.left +
					$(".g-filters-" + filter).innerWidth() / 2 -
					50;
				var pointerPositionTop = pointerPosition.top;
				//	console.log(pointerPositionLeft);
				//	console.log(pointerPositionTop);
			} else {
				var filterAll = $(".g-search-tags.g-filter-all");
				var pointerPosition = filterAll.position();
				//	console.log(pointerPosition);
				var pointerPositionLeft =
					pointerPosition.left +
					$(".g-search-tags.g-filter-all").innerWidth() / 2 -
					50;
				var pointerPositionTop = pointerPosition.top;
				//	console.log(pointerPositionLeft);
				//	console.log(pointerPositionTop);
			}
			$(".g-filters-pointer").css({
				left: pointerPositionLeft,
				top: Math.round(pointerPositionTop) + 107
			});
		}
	}

	function renderFrequencyTags() {
		var frequencyMenu = $("#frequency-menu > ul");
		frequencyMenu.empty();
		for (var i = 0; i < frequencyTagCounts.length; i++) {
			frequencyMenu.append(createTagElement(frequencyTagCounts[i]));
		}
		setFrequencyButtonText();
	}

	function renderTags() {
		var filterInput = $("input[name=filter]:checked");

		if (filterInput.length == 0) {
			return;
		}

		var filter = filterInput.val();
		$("#tags-holder").attr("data-filter", filter);

		$("#num-tags").removeClass();
		$("#num-tags").addClass(filter);
		$(".inner-tags-container").attr("data-filter", filter);

		switch (filter) {
			case "all":
				renderAllTags();
				break;
			case "source":
				renderHierarchicalTags("Source");
				break;
			case "report":
				renderHierarchicalTags("Report");
				break;
			case "geography":
				renderHierarchicalTags("Geography");
				break;
			case "report":
				renderHierarchicalTags("Report");
				break;
			case "topic":
				renderHierarchicalTags("Topic");
				break;
		}

		movePointer();

		if (filter == "all") {
			$("#tags").removeClass("tag_category_tags");
			$("#tags").show();
			$("#tag_categories").hide();
			$(".top_input_box").show();
			// added for mobile only
			if (windowWidth > 599) {
				$(".az-index").show();
				$(".az-container").show();
			}
			$("div.az-list > a.active").click();
		} else if (filter == "report") {
			$(".top_input_box").hide();
			$(".az-index").hide();
			$(".az-container").hide();
			$("#tags").removeClass("tag_category_tags");
			$("#tags").show();
			$("#tags-container #tags-holder #tags > ul li.hierarchical:eq(1)").hide();
			if (windowWidth > 599) {
				$("#tag_categories").hide();
			} else if (windowWidth <= 599) {
				$("#tag_categories").show();
			}
		} else {
			$(".top_input_box").hide();
			$(".az-index").hide();
			$(".az-container").hide();
			$("#tag_categories .bookshelftags > li > ul > li").remove();
			$("#tag_categories ul.bookshelftags > li > h4").remove(" related tags");
			$("#tag_categories").show();
			$("#tags ul.bookshelftags > li").hide();
			$("#tags").addClass("tag_category_tags");
			$("#tags").hide();
			setLastCatDspy(filter);
		}

		setSelectedTags();
	}

	function setSelectedTags() {
		var filterTagsList = hasher.getHash();
		var selectedTagsArray = filterTagsList.split(",");
		var sltdTagName = "",
			i,
			j;

		$('#tags [name="tag-input"]').prop("checked", false);

		$(".selected_tags").empty();

		for (var i = 0; i < selectedTagsArray.length; i++) {
			var isNotFrequency = !frequencyTags[selectedTagsArray[i].substr(1)];
			if (selectedTagsArray[i].length > 1 && isNotFrequency) {
				$('#tags [name="tag-input"]')
					.filter("[value='" + selectedTagsArray[i] + "']")
					.prop("checked", true);

				if (selectedTagsArray[i].substr(0, 1) == "B") {
					$(".selected-tags-container .selected_tags").append(
						"<div data-value=" +
							selectedTagsArray[i] +
							" class='item'>After " +
							selectedTagsArray[i].substr(1) +
							"&nbsp;<a href='javascript:void(0)' class='ico cancel' tabindex='-1' title='Remove'></a></div>"
					);
				} else if (selectedTagsArray[i].substr(0, 1) == "E") {
					$(".selected-tags-container .selected_tags").append(
						"<div data-value=" +
							selectedTagsArray[i] +
							" class='item'>Before " +
							selectedTagsArray[i].substr(1) +
							"&nbsp;<a href='javascript:void(0)' class='ico cancel' tabindex='-1' title='Remove'></a></div>"
					);
				} else if (selectedTagsArray[i].substr(0, 1) !== "T") {
					$(".selected-tags-container .selected_tags").append(
						"<div data-value=" +
							selectedTagsArray[i] +
							" class='item'>" +
							selectedTagsArray[i] +
							"&nbsp;<a href='javascript:void(0)' class='ico cancel' tabindex='-1' title='Remove'></a></div>"
					);
				} else {
					sltdTagName = "";
					for (var j = 0; j < tags.length; j++) {
						if (tags[j].identifier == selectedTagsArray[i]) {
							sltdTagName = tags[j].label;
						}
					}
					if (sltdTagName !== "") {
						$(".selected-tags-container .selected_tags").append(
							"<div data-value=" +
								selectedTagsArray[i] +
								" class='item'>" +
								sltdTagName +
								"&nbsp;<a href='javascript:void(0)' class='ico cancel' tabindex='-1' title='Remove'></a></div>"
						);
					}
				}
			}
		}
	}

	function createTagElement(tag) {
		var li,
			input,
			label,
			tagItemContainer,
			a,
			tagSpan,
			span,
			selectedTags = getCleanHashArray();

		li = $("<li></li>").addClass("tag-item");
		input = $("<input></input>")
			.addClass("checkbox-custom")
			.attr({
				name: "tag-input",
				value: tag.identifier,
				id: tag.identifier,
				type: "checkbox"
			})
			.prop({
				checked: selectedTags.indexOf(tag.identifier) > -1,
				disabled: tag.numreports === 0
			});
		label = $("<label>")
			.attr("for", tag.identifier)
			.addClass("checkbox-custom-label");
		tagItemContainer = $("<span></span>").addClass("tag-item-container");
		a = $("<a></a>")
			.data("identifier", tag.identifier)
			.text(tag.label);
		tagSpan = $('<a class="disabled"></a>')
			.data("identifier", tag.identifier)
			.text(tag.label);
		span = $("<span></span>")
			.addClass("instances")
			.text(tag.numreports !== null ? "(" + tag.numreports + ")" : "");

		li.append(input).append(
			label.append(
				tagItemContainer.append(tag.numreports > 0 ? a : tagSpan).append(span)
			)
		);

		return li;
	}

	////////////////////////////////////////
	// All Tags Button
	////////////////////////////////////////
	function renderAllTags() {
		var tag_container = $("#inner-tags-container .bookshelftags");
		$("#tags-container").toggleClass("loading", false);
		tag_container.empty();

		for (var i = 0; i < tags.length; i++) {
			var tagId = tags[i].identifier.substr(1);
			if (allAvailableTags[tagId]) {
				tag_container.append(createTagElement(tags[i]));
			}
		}

		$("#num-tags").text("All tags");
	}

	function renderHierarchicalTags(filterType) {
		var tag_container = $("#tags-holder .bookshelftags");
		$("#tags-container").toggleClass("loading", false);
		tag_container.empty();
		var category_keyArray = Object.keys(trimmedTagCategories[filterType]).sort(
			function(a, b) {
				if (filterType == "Report") {
					return a < b ? 1 : a > b ? -1 : 0;
				} else {
					return a > b ? 1 : a < b ? -1 : 0;
				}
			}
		);
		var category,
			item,
			li,
			sub_ul,
			sub_keyArray,
			a_test,
			b_test,
			sub_item,
			sub_li,
			subsub_ul,
			subsub_keyArray,
			i,
			j,
			k,
			itemNumRpts;
		var totalTags = 0;

		for (k = 0; k < category_keyArray.length; k++) {
			category = category_keyArray[k];
			item = trimmedTagCategories[filterType][category];
			var categoryId = category.replace(/\ /g, "-");
			var newCategoryId = categoryId.replace(/\-\/\-/, "-");
			categoryId = newCategoryId.replace(/\-\+\-/, "-");
			newCategoryId = categoryId.replace(/\./g, "");
			categoryId = newCategoryId.replace(/-$/, "");

			li = $("<li></li>")
				.addClass("tag-item hierarchical")
				.html(
					'<h4 data-category="' +
						categoryId.toLowerCase() +
						'">' +
						category +
						"</h4>"
				);

			sub_ul = $('<ul id="' + filterType + '"></ul>');

			sub_keyArray = Object.keys(item).sort(function(a, b) {
				a_test =
					item[b].label !== undefined &&
					(item[a].label === undefined ||
						item[a].label.toLowerCase() > item[b].label.toLowerCase());
				b_test =
					item[a].label !== undefined &&
					(item[b].label === undefined ||
						item[a].label.toLowerCase() < item[b].label.toLowerCase());
				return a_test ? 1 : b_test ? -1 : 0;
			});
			for (i = 0; i < sub_keyArray.length; i++) {
				sub_item = item[sub_keyArray[i]];
				sub_li = $("<li></li>").addClass("tag-item related");

				if (typeof sub_item.numreports !== "undefined") {
					// if no sub-sub-category, this sub_item is a tag
					sub_li = createTagElement(sub_item);
				} else {
					// has sub-sub category
					subsub_ul = $('<ul id="' + filterType + '"></ul>');
					subsub_keyArray = Object.keys(sub_item).sort(function(a, b) {
						a_test =
							sub_item[a].label.toLowerCase() > sub_item[b].label.toLowerCase();
						b_test =
							sub_item[a].label.toLowerCase() < sub_item[b].label.toLowerCase();
						return a_test ? 1 : b_test ? -1 : 0;
					});
					for (j = 0; j < subsub_keyArray.length; j++) {
						subsub_ul.append(createTagElement(sub_item[subsub_keyArray[j]]));
					}
					sub_li.html("<h4>" + sub_keyArray[i] + "</h4>").append(subsub_ul);
				}
				totalTags++;
				sub_ul.append(sub_li);
			}
			li.append(sub_ul);
			tag_container.append(li);
		}
		$("#num-tags").text(filterType);

		/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */
		/* ***** ***** ***** mobile only breadcrumb  ***** ***** ***** */
		/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */

		$(".g-filters-source").click(function() {
			if (windowWidth <= 599) {
				sharedLabelClicked();
			}
		});
		$(".g-filters-report").click(function() {
			if (windowWidth <= 599) {
				reportLabelClicked();
			}
		});
		$(".g-filters-geography").click(function() {
			if (windowWidth <= 599) {
				sharedLabelClicked();
			}
		});
		$(".g-filters-topic").click(function() {
			if (windowWidth <= 599) {
				sharedLabelClicked();
			}
		});
	}

	function populateTrimmedTagCategories() {
		var validTagIds = [];

		trimmedTagCategories = $.extend(true, {}, tagCategories);

		for (var i = 0; i < tags.length; i++) {
			validTagIds.push(parseInt(tags[i].identifier.substring(1)));
		}

		function trimObject(obj, level) {
			var indexOfTag;
			var deleteKey;
			for (var i in obj) {
				if (typeof obj[i] === "object") {
					deleteKey = trimObject(obj[i], level + 1);
					if (deleteKey && level > 0) {
						delete obj[i];
					}
				} else {
					indexOfTag = validTagIds.indexOf(parseInt(i));
					if (indexOfTag === -1) {
						delete obj[i];
					} else {
						obj[i] = tags[indexOfTag];
					}
				}
			}
			return Object.keys(obj).length === 0;
		}

		trimObject(trimmedTagCategories, 0);
	}

	function setRptPgRtn() {
		//		Cookies.cookie("lastTop", $(this)
		$(this)
			.parent()
			.position().top;
		//		);
	}

	// hide or show tags based on the a-z index
	function adjIndexTags(event) {
		event.preventDefault();
		$("div.az-list .active").removeClass();
		var adjMax = $("#tags a").length;
		var adjAlpha = event.target.text.toLowerCase();

		for (var k = 0; k < adjMax; k++) {
			var tagAlpha = $("#tags .tag-item-container a:eq(" + k + ")")
				.text()
				.toLowerCase()
				.substring(0, 1);
			var hideTag =
				adjAlpha !== tagAlpha ||
				(adjAlpha === "xyz" &&
					(tagAlpha === "x" || tagAlpha === "y" || tagAlpha === "z"));
			$("#tags .bookshelftags .tag-item:eq(" + k + ")").toggleClass(
				"hidden",
				hideTag
			);
		}

		$(this).addClass("active");
	}

	// sets a cookie to preserve the last category that was displayed
	function setLastCatDspy(filter) {
		var lastState = "lastCatIdx_" + filter.toLowerCase();
		var curCatIdx = "source";
		//typeof Cookies.cookie(lastState) == "string"
		//	? Cookies.cookie(lastState)
		//	: 0;
		var categoryId = $(
			"#tags ul.bookshelftags > li:eq(" + curCatIdx + ") h4"
		).attr("data-category");
		$("#tags").attr("data-category", categoryId);
		$("#tag_categories h4[data-category]").removeClass("active");
		$("#tag_categories h4[data-category=" + categoryId + "]").addClass(
			"active"
		);
		$("#tags ul.bookshelftags > li:eq(" + curCatIdx + ")").show();
		$("#tags").show();
	}

	function ctrlCategoryList() {
		var curCatIdx = $(this)
			.parent()
			.index();
		var curCTRL = $(this).css("transform");
		var lastState =
			"lastCatIdx_" +
			$(this)
				.next()
				.attr("id")
				.toLowerCase();

		Cookies.cookie(lastState, curCatIdx);
		$("#tags ul.bookshelftags > li").hide();
		$("#tag_categories h4[data-category]").removeClass("active");

		if (curCTRL == "none") {
			$(this).addClass("active");
			$("#tags").attr("data-category", $(this).attr("data-category"));
			$("#tags ul.bookshelftags > li:eq(" + curCatIdx + ")").show();
		} else {
			$("#tags ul.bookshelftags > li:eq(" + curCatIdx + ")").hide();
		}

		/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */
		/* ***** ***** ***** ***** mobile only ***** ***** ***** ***** */
		/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */

		if (windowWidth <= 599) {
			mobileOnly();
		}
	}

	function handleSearchInput() {
		var srchStr = $("#input-search")
			.val()
			.toLowerCase();

		var filterTagsList = getCleanHashArray();
		var searchArray = tags;
		$("#tags_search .bookshelftags").empty();

		for (var t = 0; t < searchArray.length; t++) {
			var initCap = searchArray[t].label.substring(0, 1);
			var remDsc = searchArray[t].label.substring(1, tags[t].label.length);
			var fullDsc = searchArray[t].label.toLowerCase();
			var srchTag = searchArray[t].identifier;

			if (
				fullDsc.search(srchStr) == 0 &&
				filterTagsList.indexOf(srchTag) == -1
			) {
				$("#tags_search .bookshelftags").append(
					'<div name="tag-input" value=' +
						tags[t].identifier +
						' data-selectable class="option"><span class="highlight">' +
						initCap +
						"</span>" +
						remDsc +
						"</div>"
				);
			}
		}
		$(".tags_search").show();
	}

	function checkSelectedTags() {
		if (windowWidth < 599) {
			var numberOfTags = $("#selectedTags div").length;
			if (numberOfTags > 0) {
				//$('.selected-tags-container').show();
				//console.log('Yes, ' + numberOfTags + ' selected tags are visible.');
				//if (windowWidth > 599) {
				$(".overlay-selected-tags-container").show();
				//}
			} else {
				$(".overlay-selected-tags-container").hide();
				//$('.selected-tags-container').hide();
				//console.log('No, ' + numberOfTags + ' selected tags are visible.');
			}
		} else {
			$(".selected-tags-container").show();
			//console.log('just making sure the selected tag container is displyed');
		}
	}

	function resetFilter() {
		if (windowWidth > 599) {
			$(".g-filters-source").show();
			$(".g-filters-report").show();
			$(".g-filters-geography").show();
			$(".g-filters-topic").show();
			$("#tags-container").css("display", "");
			$("#inner-tags-container").css("display", "");
			$("#tags").css("display", "");
			//console.log('#10a Reset Filter');
			setTimeout(checkSelectedTags, 500);
		} else if (windowWidth <= 599) {
			resetMobileOnly();
			//console.log('#10b Reset Filter');
			setTimeout(checkSelectedTags, 500);
		}
	}

	/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */
	/* ***** ***** *****    Reset Mobile-Only    ***** ***** ***** */
	/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */

	function resetMobileOnly() {
		$(".overlay").removeClass("overlay-show");
		//console.log('#5 Test if selected tags are visible.');
		//checkSelectedTags();
		//$('.g-a-z-label').hide();
	}

	/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */
	/* ***** ***** *****   Back Button Clicked   ***** ***** ***** */
	/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */

	function backButtonClicked() {
		$(".g-filters-back-button > div").css("display", "none");
		$(".g-search-tags").css("display", "block");
		$(".g-search-tags-container").css("display", "none");
		$(".g-panel").css("margin-left", "-599px");
		$(".g-a-z-label").css("display", "block");
		$(".az-index").hide();
		$(".az-container").hide();
		$(".g-breadcrumb-container").hide();
		$(".g-filter-by").css("display", "block");
		$(".g-filters-source").hide();
		$(".g-filters-report").hide();
		$(".g-filters-geography").hide();
		$(".g-filters-topic").hide();
		$("#tags-container").hide();
		$("#tag_categories .bookshelftags").css("display", "");
	}

	/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */
	/* ***** ***** ***** Shared Filter-by Clicked **** ***** ***** */
	/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */

	function sharedLabelClicked() {
		$(".node-one")
			.removeClass("g-breadcrumb-active")
			.addClass("g-breadcrumb");
		$(".node-two")
			.removeClass("g-breadcrumb")
			.addClass("g-breadcrumb-active")
			.show();
		$(".node-thr").text("");
		$(".g-filter-by").hide();
		$(".g-filters-source").hide();
		$(".g-filters-report").hide();
		$(".g-filters-geography").hide();
		$(".g-filters-topic").hide();
		$(".g-panel").animate({
			margin: "0"
		});
		$(".g-panel").css("width", windowWidth);
		$(".g-panel").css("height", scrollArea);
		$(".g-panel").css("overflow", "scroll");
		$(".g-panel").show();
		$("#tags-container").show();
		$("#tag_categories").show();
		$("#tag_categories .bookshelftags").css("display", "");
		$("#inner-tags-container").hide();
		$("#tags").hide();
		setTimeout(updateBreadcrumb, 500);
	}

	/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */
	/* ***** ***** ***** Shared Filter-by Clicked **** ***** ***** */
	/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */

	function reportLabelClicked() {
		$(".node-one")
			.removeClass("g-breadcrumb-active")
			.addClass("g-breadcrumb");
		$(".node-two")
			.removeClass("g-breadcrumb")
			.addClass("g-breadcrumb-active")
			.show();
		$("#tag_categories").show();
		$("#tag_categories .bookshelftags").css("display", "");
		//console.log("#6 Test if selected tags are visible.");
		checkSelectedTags();
		$(".node-thr").text("");
		$(".g-filter-by").hide();
		$(".g-filters-source").hide();
		$(".g-filters-report").hide();
		$(".g-filters-geography").hide();
		$(".g-filters-topic").hide();
		$(".g-panel").animate({
			margin: "0"
		});
		$(".g-panel").css("width", windowWidth);
		$(".g-panel").css("height", scrollArea);
		$(".g-panel").css("overflow", "scroll");
		$(".g-panel").show();
		$("#tags-container").show();
		$("#tag_categories").show();
		$("#tag_categories .bookshelftags").css("display", "");
		$("#inner-tags-container").hide();
		$("#tags").hide();
		setTimeout(updateBreadcrumb, 500);
	}

	/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */
	/* ***** ***** ***** ** update breadcrumb ** ***** ***** ***** */
	/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */

	function updateBreadcrumb() {
		var sourceFilters = $("h4[data-category=all-sources]");
		var sourceFiltersVisible = $(sourceFilters).is(":visible");

		var reportFilters = $("#tags-holder[data-filter=report]");
		var reportFiltersVisible = $(reportFilters).is(":visible");

		var geographyFilters = $("h4[data-category=country-international]");
		var geographyFiltersVisible = $(geographyFilters).is(":visible");

		var topicFilters = $("h4[data-category=capacity]");
		var topicFiltersVisible = $(topicFilters).is(":visible");

		if (sourceFiltersVisible == true) {
			$(".node-two").text("Fuel source");
			$(".overlay-selected-tags-container").hide();
		} else if (reportFiltersVisible == true) {
			$(".node-two").text("Reports");
			$(".overlay-selected-tags-container").show();
		} else if (geographyFiltersVisible == true) {
			$(".node-two").text("Geography");
			$(".overlay-selected-tags-container").hide();
		} else if (topicFiltersVisible == true) {
			$(".node-two").text("Subject");
			$(".overlay-selected-tags-container").hide();
		}

		$("#tag_categories").show();
		$("#tag_categories .bookshelftags").css("display", "");
	}

	/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */
	/* ***** ***** *****    Filter by Clicked    ***** ***** ***** */
	/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */

	function functionFilterByLinkClicked() {
		$(".g-filters-back-button > div").css("display", "inline-block");
		$(".g-search-tags").hide();
		$(".g-search-tags-container").hide();
		$(".g-a-z-label").hide();
		$(".az-index").hide();
		$(".az-container").hide();
		$(".g-breadcrumb-container").css("display", "table");
		$(".node-one")
			.removeClass("g-breadcrumb")
			.addClass("g-breadcrumb-active");
		$(".node-two")
			.text("")
			.removeClass("g-breadcrumb", "g-breadcrumb-active")
			.hide();
		$(".node-thr").text("");
		$(".g-filter-by").hide();
		$(".g-filters-source").css("display", "block");
		$(".g-filters-report").css("display", "block");
		$(".g-filters-geography").css("display", "block");
		$(".g-filters-topic").css("display", "block");
		$(".g-panel").animate({
			margin: "0"
		});
		$(".g-panel").css("width", windowWidth);
		$(".g-panel").css("height", scrollArea);
		$(".g-panel").css("overflow", "scroll");
		$(".g-panel").show();
		$("#tags-container").hide();
		$("#inner-tags-container").hide();
		$("#tags").hide();
		$("#tag_categories").hide();
	}

	/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */
	/* ***** ***** *****       A-Z Clicked       ***** ***** ***** */
	/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */

	function aZButtonClicked() {
		$(".g-filters-back-button > div").css("display", "inline-block");
		$(".g-search-tags").hide();
		$(".g-search-tags-container").hide();
		$(".g-a-z-label").hide();
		$(".az-index").show();
		$(".az-container").show();
		$(".g-breadcrumb-container").hide();
		$(".g-filter-by").hide();
		$(".g-filters-source").hide();
		$(".g-filters-report").hide();
		$(".g-filters-geography").hide();
		$(".g-filters-topic").hide();
		$(".g-panel").animate({
			margin: "0"
		});
		$(".g-panel").css("width", windowWidth);
		$(".g-panel").css("height", scrollArea);
		$(".g-panel").css("overflow", "scroll");
		$(".g-panel").show();
		$("#tags-container").show();
		$("#tags-holder").show();
		$("#inner-tags-container").show();
	}

	/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */
	/* ***** ***** *****      Search Clicked     ***** ***** ***** */
	/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */

	function searchButtonClicked() {
		$(".g-filters-back-button > div").css("display", "inline-block");
		$(".g-search-tags").css("display", "none");
		$(".g-search-tags-container").css("display", "inline-block");
		$(".g-panel").animate({
			margin: "0"
		});
		$(".g-panel").css("width", windowWidth);
		$(".g-panel").show();
		$(".g-breadcrumb-container").hide();
		$(".g-filter-by").hide();
		$(".g-filters-source").hide();
		$(".g-filters-report").hide();
		$(".g-filters-geography").hide();
		$(".g-filters-topic").hide();
		$("#tags-container").show();
		$("#tags-holder").hide();
		if ($(".g-search-tags-container").css("display") == "inline-block") {
			$(".g-a-z-label").hide();
			$(".az-index").hide();
			$(".az-container").hide();
		}
	}

	/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */
	/* ***** ***** *** Check Selected Tags Onload **** ***** ***** */
	/* ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** */

	function mobileOnly() {
		var breadcrumbNodeTwo = $(".node-two");
		var breadcrumbNodeThree = $(".node-thr");
		$(".g-filter-sub-category").css("visibility", "visible");
		$(".g-filter-sub-category").css("border", "5px solid green");
		$("#tag_categories").hide();
		$("#tag_categories .bookshelftags").hide();
		$("#inner-tags-container").show();
		$("#tags").show();
		//console.log("#7 Test if selected tags are visible.");
		checkSelectedTags();
		breadcrumbNodeThree.text(
			$('li[style*="list-item"] h4[data-category]').text()
		);
		breadcrumbNodeTwo
			.removeClass("g-breadcrumb-active")
			.addClass("g-breadcrumb");
	}
})();

// Helper function to format the report ID in a report row
function formatReportID(report) {
	return "";
}
