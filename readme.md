# About
* Package: [pdfmake](http://pdfmake.org/#/)
* Original Author: [bpampuch](https://github.com/bpampuch)
* Package Docs: [pdfmake-docs](http://pdfmake.org/#/gettingstarted)
*  Version: client-version
* Release: 0.1.17

With this Package of Pdfmake you can easily generate pdf documents on the client. It also provides quite a lot of useful [Features](http://pdfmake.org/#/features) to achive sophisticated layouts and fairly complex styling.

# Quickstart
* Add the Package to your Project: 
```javascript
meteor add nilsdannemann:pdfmake
```
* The simplest Version of a pdf-document can be defined like so:
```javascript
var docDefinition = { content: 'My Text' };
```
* With this you can start the pdf-generation like so:
```javascript
pdfMake.createPdf(docDefinition).open();
```
* Now you can (for example) add both to any simple meteor event:
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

# A more complex Example
This Example uses variables and some pdfmake-features like: columns & style dictionaries:
```javascript
Template.myTemplate.events({
	'click .myButton': function() {
		var myHeadline = this.myHeadline;
		var myFirstItem = this.myFirstItem;
		var mySecondItem = this.mySecondItem;
		// Some examples without 'this'
		var currentUser = Meteor.user().profile.name;
		var productDetails = Products.findOne(this._id).details;

		// Define the pdf-document
		var docDefinition = { 
			pageSize: 'A4',
			pageMargins: [ 30, 25, 30, 25 ],
			
			// Content with styles
			content: [
				{ text: myHeadline, style: 'headline' },
				{
					columns: [
						{ width: '15%', text: 'Item #1:', style: ['listItem', 'listLabel'] },
						{ width: '35%', text: myFirstItem, style: ['listItem', 'listText'] },
						{ width: '15%', text: 'Item #2:', style: ['listItem', 'listLabel'] },
						{ width: '35%', text: mySecondItem, style: ['listItem', 'listText'] }
					],
					columnGap: 10
				},
				{ text: currentUser },
				{ text: productDetails }
			],
			
			// Style dictionary
			styles: {
				headline: { fontSize: 25, bold: true, margin: [0, 0, 0, 25] },
				listItem: { fontSize: 14, margin: [0, 0, 0, 5] },
				listLabel: { bold: true },
				listText: { italic: true }
			}
		};

		// Start the pdf-generation process
		pdfMake.createPdf(docDefinition).open();
	}
});
```

# Further Reading
For more complex things I would suggest to take a look at two things:

* [The Docs](http://pdfmake.org/index.html#/gettingstarted)

The Docs give you a quick, but detailed overview on what pdfmake can do.

* [The Playground](http://pdfmake.org/playground.html)

The Playground let's you see, test and change all the Features live. Extremely handy.

# Acknowledgements
I didn't write the original pdfmake. Many thanks to [bpampuch](https://github.com/bpampuch) for his great work.
