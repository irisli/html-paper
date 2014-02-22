HTML Paper
=========

HTML Paper is a lightweight template for making printable documents in HTML. It currently supports native printing on Chrome, and the printed result looks almost the same as when viewed through the browser. The template can make pdf-like documents with the simplicity of HTML and CSS.

## Demo
Make sure to see the print preview of the page by pressing Print in your browser.
- [Readme page generated from markdown](http://irisli.github.io/html-paper/markdown-paper.html)
- [Simple static page](http://irisli.github.io/html-paper/static-paper.html)

## Origins and Philosophy
I originally wanted to make a résumé in html that could be directly printed from the browser. Then, as I tinkered around, I realized that making printable web documents was not only possible but also potentially extremely useful and powerful.

The file `static-paper.html` (and the linked CSS files) is the base template for all the magic that makes the printing possible. It is to stay as light as possible but also demonstrate all the concepts so that it can be easily forked and adapted into other projects.

## Current Compatibility
- Chrome: Full layout and printing
- Firefox: Screen rendering is fine. Printing scale is fine. Unable to remove page data (url, title, date) through css. Prints 2 pages for a 1 page document.
- Safari: Screen rendering is fine. Printing is scaled down if "Print headers and footers" is checked. Prints 2 pages for a 1 page document.
- IE11: Screen rendering is fine. Printing has margins by default and setting zoom levels in the print options don't help.

## Known bugs/quirks
- Chrome only renders font sizes in full numbers and rounds down (14.4px is rendered as 14px). Firefox renders decimal font sizes (14.4px is rendered as 14.4px) and therefore creates a discreptancy in sizing between these two documents. The currently known workaround is to use relative sizes that translate into integers until a fix is found. This will ensure forward compatibility.

## Future Features
- Multi-page documents (possibly through css regions)
- Markdown editing of pages
- Use phantomjs to for server sided generation of pdf from html output

## License
Released under the MIT license.
