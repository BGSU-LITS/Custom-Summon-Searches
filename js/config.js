/**
 * All of the configurable options are in this script.
 */
var summon_config = {
	// Your University identifier (the first thing in your summon url)
	id: 'bgus',

	/**
	 * The list of configurable options.
	 *
	 * @param	name	The name of the search filter for Summon
	 * @param	dom	The id name of the DOM element to inject checkboxes into
	 * @param	items	The list of items that should be included for users to select
	 */
	items:[
		{
			name:"Library",
			dom:"location_checkboxes",
			items:[
				"Main Library","Firelands Library","NW Regional Depository",
				"Music Library","Popular Culture Library","Curriculum Resource Center",
				"Internet","Archives","Great Lakes"
			]
		},
		{
			name:"ContentType",
			dom: "type_checkboxes",
			items:[
				"Journal Article","Newspaper Article","Trade Publication Article",
				"Conference Proceeding","Book","eBook","Book Review","Music Score",
				"Audio Recording"
			]
		},
		{
			name:"Language",
			dom: 'language_checkboxes',
			items:[
				"English","Spanish","French","Dutch","Polish",
				"Italian","Chinese","Japanese","Arabic"
			]
		}
	]
};