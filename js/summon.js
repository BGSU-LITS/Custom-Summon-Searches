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

		updateForm();
	},

	/**
	 * Clears out the checkboxes above the button.
	 */
	clearBoxes = function(btn){
		$(btn).prev('div').find(':checked').click();
		updateForm();
	},

	// The div that holds the code that toggles on and off
	codeToggles,

	/**
	 * Adds the Languages into the form
	 *
	 * @param	ele		The DOMElement to inject into
	 * @param	list	An array of options
	 * @param	type	The type of option to add
	 */
	addOptions = function(ele, list, type){
		var insertBox = [],
			insertToggle = [],
			item = "",
			underscored = "";

		for (var i = 0, len = list.length; i < len; i += 1) {
			item = list[i];
			underscored = item.replace(/\s/g, "_");
			insertBox = [
				'<input type="checkbox" data-target="',
				type,
				underscored,
				'" id="',
				type,
				'_',
				underscored,
				'_checkbox"> <label for="',
				type,
				'_',
				underscored,
				'_checkbox">',
				item,
				'</label> <br />'
			];

			insertToggle = [
				'<div id="',
				type,
				underscored,
				'">&lt;input type="hidden" name="s.fvf[]" value="',
				type,
				',',
				item,
				'" /&gt;</div>'
			];

			$(ele).append(insertBox.join(""));
			$(codeToggles).append(insertToggle.join(""));
		}
	},

	/**
	 * Hides all of the filters.
	 */
	hideAll = function(){
		$(codeToggles).find('div').hide();
	},

	// The keywords
	keywords,
	keywordsTarget,

	/**
	 * Changes the search keywords.
	 *
	 * @param	str	The keywords
	 */
	changeKeywords = function(str){
		if (str){
			$(keywordsTarget).html('&lt;input type="hidden" name="s.fvgf[]" value="SubjectTerms,or,'+str+'" /&gt;').show();
		} else {
			$(keywordsTarget).html("").hide();
		}

		updateForm();
	},

	// Date helpers
	dateStart,
	dateEnd,
	dateTarget,

	/**
	 * Changes the Published Date
	 */
	changeDate = function(){
		if (dateStart.value && dateEnd.value){
			var date = dateStart.value+":"+dateEnd.value;
			$(dateTarget).html('&lt;input type="hidden" name="s.rf" value="PublicationDate,'+date+'" /&gt').show();
		} else {
			$(dateTarget).html("").hide();
		}

		updateForm();
	},

	/**
	 * Clears out the dates
	 */
	clearDates = function(){
		dateStart.value = "", dateEnd.value = "";
		$(dateTarget).hide();
		updateForm();
	},

	// Try it form options element
	tryItOptions = null,

	// The div that holds the summon code
	summonCode = null,

	/**
	 * Updates the try it form
	 */
	updateForm = function(){
		$(tryItOptions).html($(codeToggles).find(":visible").text());
	},

	/**
	 * "Constructor"
	 *
	 * @param	id	The university identifier for summon
	 * @param	options		The options that builds the page
	 */
	init = function(id, options){
		$('#ul_id').html(id);
		element("try_it_form").action = "http://"+id+".summon.serialssolutions.com/search";

		// The try it div
		tryItOptions = element('try_it');

		// The div that holds the toggleable code
		codeToggles = element('code_toggles');

		// Setup date pickers
		$.datepicker.setDefaults({
			'changeMonth':true,
			'changeYear': true,
			'dateFormat': 'yy-mm-dd'
		});

		dateStart = element('date_start');
		dateEnd = element('date_end');
		dateTarget = element('insertdate');

		$("#date_start").datepicker();
		$("#date_end").datepicker();

		$('#search_filters .hasDatepicker').change(function(){
			changeDate();
		});

		// Setup the search terms
		keywords = element('keywords');
		keywordsTarget = element('insertterms');

		$(keywords).change(function(){
			changeKeywords(this.value);
		});

		// Setup the checkboxes
		for (var i = 0, len = options.length; i < len; i += 1){
			var ele = options[i];
			addOptions(element(ele.dom), ele.items, ele.name);
		}
		hideAll();

		$('#search_filters').find('input[type="checkbox"]').change(function(){
			toggleCheckbox(this);
		});

		// Do a form update so it works if nothing is checked
		updateForm();
	};

	// Only expose the public methods
	return {
		'init': init,
		'clearDates': clearDates,
		'clearBoxes': clearBoxes
	};
}(jQuery);
