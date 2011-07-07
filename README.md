# Create Custom Summon Searches

---

This tool was developed by Matthew Reidsma in HTML5 and Javascript to make creating scoped searches in Summon easier. We hope you find it useful.

## Installation

You will need to edit one line of the file "index.html" to make this tool work with your installation of Summon.

Open index.html in a text editor (NOT Microsoft Word! Use Notepad if you have nothing else). On line number #20, replace the string "bgsu" with the institutional prefix from your Summon URL. For instance, Bowling Green State University's Summon prefix is "bgsu". So you would change line #20 from:

&lt;body onload="summon.init('bgsu')"&gt;

to:

&lt;body onload="summon.init('YOURPREFIX')"&gt;

Now, copy the files to your computer or a Web server and open the "index.html" file. As you select facets for your search, the HTML code at the bottom will be updated. When you have completed selecting facets for your search, copy the HTML code and paste it into an Web page to create a custom, scoped Summon search.

<strike>More questions? Feel free to contact Matthew Reidsma on Twitter at @mreidsma or via email at reidsmam@gvsu.edu.</strike>

More questions? Please contact Dave Widmer (dwidmer@bgsu.edu) as this version has been modified from the original.

## Demo

You can view a live version of this tool at http://gvsulib.com/labs/custom_summon.

## Copyright

This tool is copyright 2011 Grand Valley State University Libraries. 

This tool is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This tool is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this tool. If not, see <http://www.gnu.org/licenses/>.