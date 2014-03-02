HTML Paper File Format
---------

This is a draft of what the html-paper file format should be. The format may (and will) drastically change between versions until a format is stabilized.

##Introduction##
HTML paper currently only accepts two different file types: md files and html files. The interpreter will interpret the document based on the file type. At the top of each document, there is metadata that contains metadata to use for this document.

##Metadata##
Metadata contains some important data for rendering the file such as stylesheets to load.

###Metadata area###
To denote where the metadata starts, a specially formated html comment must appear at the very top of the file. The first or second line[1] of the document must be `<!--paper` with no whitespace around it. To denote when the metadata ends, simply close it with `-->` with no whitespace around it. This is compatible with both markdown and html while also not showing up if the file is viewed with another program.

The metadata content is to formatted in [YAML](http://en.wikipedia.org/wiki/YAML).

Example:
```
<!--paper
key: value
anotherkey: anothervalue
-->
```

[1]: The second line is to accomodate html doctypes
