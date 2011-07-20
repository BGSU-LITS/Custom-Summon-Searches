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

	// An object that holds the code for each hidden input
	inputs = {},

	/**
	 * Toggles the display of the code related to the checkboxes
	 *
	 * @param	input	The form input
	 */
	toggleCheckbox = function(input){
		if (input.target === undefined){
			input.target = $("#" + $(input).attr('data-target'))[0];
		}

		$(input.target).html(input.checked ? inputs[input.target.id] : "");
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
		for (var i = 0, len = list.length; i < len; i += 1) {
			addOption(ele, type, list[i], list[i]);
		}
	},

	/**
	 * Adds an Option to the specified dom
	 *
	 * @param	dom		The dom element to inject into
	 * @param	type	The name of the filter
	 * @param	value	The filter value
	 * @param	label	The checkbox label
	 * @param	name	The filter name
	 * @param	c		The concatination string
	 */
	addOption = function(dom, type, value, label, name, c){
		c = c || ",";
		name = name || "s.fvf[]";

		var shrunk = value.replace(/\W/g, ""),
			insertBox = '<input type="checkbox" data-target="'+type+shrunk+
				'" id="'+type+'_'+shrunk+'_checkbox"> <label for="'+
				type+'_'+shrunk+'_checkbox">'+label+'</label> <br />',

			insertToggle = '<div id="'+type+shrunk+'"></div>';

		$(dom).append(insertBox);
		$(codeToggles).append(insertToggle);

		inputs[type+shrunk] = '&lt;input type="hidden" name="'+name+'" value=\'' +
			type+c+value+'\' /&gt';
	},

	/**
	 * Hides all of the filters.
	 */
	hideAll = function(){
		$(codeToggles).find('div').html();
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

	/**
	 * Updates the try it form
	 */
	updateForm = function(){
		$(tryItOptions).html($(codeToggles).text());
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
		var dom = element("standard");
		addOption(dom, "IsFulltext", "true", "Limit to items with full text online");
		addOption(dom, "IsScholarly", "true", "Show only scholarly publications (including peer-review)");
		addOption(dom, "SourceType", '("Library Catalog")', "Only show items in my library's catalog", "s.fq[]", ":");

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
