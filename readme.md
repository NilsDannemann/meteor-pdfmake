# About
* Package: [pdfmake](http://pdfmake.org/#/)
* Original Author: [bpampuch](https://github.com/bpampuch)
* Package Docs: [pdfmake-docs](http://pdfmake.org/#/gettingstarted)
*  Version: client-version
* Release: 0.1.17

With this Package of Pdfmake you can easily generate pdf documents on the client. It also provides quite a lot of useful [Features](http://pdfmake.org/#/features) to achive sophisticated layouts and fairly complex styling.

# Quickstart
1. Add the Package to your Project: 
```javascript
meteor add nilsdannemann:pdfmake
```
2. The simplest Version of a pdf-document can be defined like so:
```javascript
var docDefinition = { content: 'My Text' };
```
3. With this you can start the pdf-generation like so:
```javascript
pdfMake.createPdf(docDefinition).open();
```
4. Now you can (for example) add both to any simple meteor event:
```javascript
Template.myTemplate.events({
	'click .myButton': function() {
    	// Define the pdf-document
    	var docDefinition = { content: 'My Text' };
        
        // Start the pdf-generation process
        pdfMake.createPdf(docDefinition).open();
    }
});
```
Thats it. When ".myButton" is clicked, the pdf is generated and then opened in the Browser.

# Further Reading
For more complex things I'd suggest to take a look at two things:

1. [The Docs](http://pdfmake.org/index.html#/gettingstarted)

The Docs give you a quick, but detailed overview on what pdfmake can do.

2. [The Playground](http://pdfmake.org/playground.html)

The Playground let's you see, test and change all the Features live. Extremely handy.

# Acknowledgements
I didn't write the original pdfmake. Many thanks to [bpampuch](https://github.com/bpampuch) for his great work.
