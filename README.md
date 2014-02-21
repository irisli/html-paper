HTML Paper
=========

HTML paper is a lightweight template for making printable documents in html. The template is similar to what a pdf file can do except with the simplicity of html and css.

## Demo
Make sure to see the print preview of the page by pressing print in your browser.

- [Readme page generated from markdown](http://irisli.github.io/html-paper/markdown-paper.html)
- [Simple static page](http://irisli.github.io/html-paper/static-paper.html)

## Origins and Philosophy
I originally wanted to make a résumé in html that could be directly printed from the browser. Then as I tinkered around, I realized that making printable web documents was not only possible but also potentially extremely useful and powerful.

The file static-paper.html (and linked css files) is the base template for all the magic that makes the printing possible. It is to stay as light as possible but also demonstrate all the concepts so that it can be easily forked and adapted into other projects.

## Compatibility
- Chrome: Full layout and printing
- Firefox: Printing layout works but unable to remove page data (url, title, date)
- Safari: Printing layout margins
- IE: Untested


## Future Features
- Multi-page documents (possibly through css regions)
- Markdown editing of pages
- Use phantomjs to for server sided generation of pdf from html output

## License
Released under the MIT license.
