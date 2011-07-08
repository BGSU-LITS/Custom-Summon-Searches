# Create Custom Summon Searches

---

This tool was developed by Dave Widmer (dwidmer@bgsu.edu) as an extention of the
tool developed by Matthew Reidsma in HTML5 and Javascript to make creating scoped
searches in Summon easier. We hope you find it useful.

## Installation

The file you will need to edit to suit your Universities needs is js/config.js,
you can leave everything else alone. Open js/config.js in a text editor
(NOT Microsoft Word! Use Notepad if you have nothing else).
You will want to look for id: 'bgsu' and replace the string "bgsu" with the
institutional prefix from your Summon URL (http://PREFIX.summon.serialssolutions.com/).

Below that you can see items: which will build the filter list in the left column.

The _name_ property is what is used by Summon so it much match what summon uses,
the _dom_ property is the dom element (id="name") that the checkboxes get inserted
into and the _items_ property is the items you want to be able to filter by.

Now, copy the files to your computer or a Web server and open the "index.html" file.
 As you select facets for your search, the HTML code at the bottom will be updated.
When you have completed selecting facets for your search, copy the HTML code and
paste it into an Web page to create a custom, scoped Summon search.

When you select different options the form on the page will automatically update
as well so you can test your form to make sure that it works as you would like.
**Please note**: Your form will not work on your webpage until you copy the HTML
below the form and paste it into your site.

More questions? Please contact Dave Widmer (dwidmer@bgsu.edu) as this version has
been modified from the original tool by Matthew Reidsma (reidsmam@gvsu.edu).

## Demo

You can view a live version of this tool at [URL HERE] or the original tool at
http://gvsulib.com/labs/custom_summon.

## Copyright

This tool is copyright 2011 Bowling Green State University Libraries.

This tool is free software: you can redistribute it and/or modify it under the
terms of the GNU General Public License as published by the Free Software Foundation,
either version 3 of the License, or (at your option) any later version.

This tool is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this tool.
If not, see <http://www.gnu.org/licenses/>.
