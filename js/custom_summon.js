/**
 * Custom Summon Boxes
 * Grand Valley State University Library Labs, 2011
 * by Matthew Reidsma, reidsmam@gvsu.edu with help from John Krull, astrom.flux@gmail.com
 *
 * Modified: BGSU Library ITS, 2011
 * @author Dave Widmer (dwidmer@bgsu.edu)
 *
 * Released under Creative Commons Attribution 3.0 Unported License
 * http://creativecommons.org/licenses/by/3.0/
 */

var summon = function($){
	/**
	 * Gets an element by id
	 *
	 * @param	id	The element id
	 * @return	DOMElement
	 */
	var element = function(id){
		return document.getElementById(id);
	},

	/**
	 * Toggles the display of the code related to the checkboxes
	 *
	 * @param	input	The form input
	 */
	toggleCheckbox = function(input){
		if (input.target === undefined){
			input.target = $("#" + $(input).attr('data-target'))[0];
		}

		(input.checked) ?
			$(input.target).show() :
			$(input.target).hide();
	},

	// The content type checkboxes
	contentTypes,

	/**
	 * Clears out the content types
	 */
	clearTypes = function(){
		$(contentTypes).find(':checked').click();
	},

	// The languages div
	languages,

	/**
	 * Clears out the languages.
	 */
	clearLanguages = function(){
		$(languages).find(':checked').click();
	},

	// The keywords
	keywords,
	keywordsTarget,
	keywordsSpan,

	/**
	 * Changes the search keywords.
	 *
	 * @param	str	The keywords
	 */
	changeKeywords = function(str){
		if (str){
			$(keywordsSpan).html(str);
			$(keywordsTarget).show();
		} else {
			$(keywordsTarget).hide();
		}
	},

	// Date helpers
	dateStart,
	dateEnd,
	dateTarget,
	dateSpan,

	/**
	 * Changes the Published Date
	 */
	changeDate = function(){
		if (dateStart.value && dateEnd.value){
			$(dateSpan).html(dateStart.value+":"+dateEnd.value);
			$(dateTarget).show();
		} else {
			$(dateTarget).hide();
		}
	},

	/**
	 * Clears out the dates
	 */
	clearDates = function(){
		dateStart.value = "", dateEnd.value = "";
		$(dateTarget).hide();
	},

	/**
	 * Hides all of the filters.
	 */
	hideAll = function(){
		$('#summon_code').find('div').hide();
	},

	/**
	 * "Constructor"
	 *
	 * @param	institution	The university identifier for summon
	 */
	init = function(institution){
		$('#ul_id').html(institution);

		hideAll();

		// Setup date pickers
		$.datepicker.setDefaults({
			'changeMonth':true,
			'changeYear': true,
			'dateFormat': 'yy-mm-dd'
		});

		dateStart = element('date_start');
		dateEnd = element('date_end');
		dateTarget = element('insertdate');
		dateSpan = element('pubdate');

		$("#date_start").datepicker();
		$("#date_end").datepicker();

		// Setup the search terms
		keywords = element('keywords');
		keywordsTarget = element('insertterms');
		keywordsSpan = element('searchterms');

		$(keywords).change(function(){
			changeKeywords(this.value);
		});

		// Setup the checkboxes
		contentTypes = element('content_types');
		languages = element('languages');
		
		$('#custom_search').find('input[type="checkbox"]').change(function(){
			toggleCheckbox(this);
		});

		// and the dates
		$('#custom_search .hasDatepicker').change(function(){
			changeDate();
		});
	};

	// Only expose the public methods
	return {
		'init': init,
		'clearDates': clearDates,
		'clearTypes': clearTypes,
		'clearLanguages': clearLanguages
	};
}(jQuery);
