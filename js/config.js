/**
 * All of the configurable options are in this script.
 */
var summon_config = {
	// Your University identifier (the first thing in your summon url)
	id: 'bgsu',

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
				"Newspaper Article","Journal Article","Book Review","eBook",
				"Trade Publication Article","Book","Book Chapter","Audio Recording",
				"Government Document","Conference Proceeding","Journal","Music Score",
				"Dissertation","Web Resource","Personal Narrative","Map",
				"Microfilm","Video Recording","Special Collection","Archival Material",
				"Photograph","Report","Image","Realia","Library Holding","Computer File",
				"Kit","Research Guide","Manuscript","Case","Newsletter"
			]
		},
		{
			name:"Language",
			dom: 'language_checkboxes',
			items:[
				"English","French","German","Spanish","Italian","Russian",
				"Portuguese","Dutch","Slovak","Latin","Chinese","Japanese",
				"Norwegian","Czech","Polish"
			]
		}
	]
};