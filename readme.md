# About
* Package: [pdfmake](http://pdfmake.org/#/)
* Original Author: [bpampuch](https://github.com/bpampuch)
* Package Docs: [pdfmake-docs](http://pdfmake.org/#/gettingstarted)
* Version: client-version (not working on server)
* Release: 0.1.20

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

# Examples
Here are some examples on how you might use the package.

## 1. Iterating over a Collection
This Example explains how to iterate over documents in a collection. 

**In this case:** Display the names of all customers in the Collection "Customers".
```javascript
Template.myTemplate.events({
	'click .myButton': function() {
		var customerNames = Customers.find().map(function(i){
			return i.name;
		});

		// Define the pdf-document
		var docDefinition = { 
			content: [
				'Some text',		
				customerNames,
				'Some text'
			]
		};
		
		// Start the pdf-generation process
		pdfMake.createPdf(docDefinition).open();
	}
});
```


## 2. Using a Form to create a pdf
This Example take the input values from a form an creates a pdf with them on submit.

**The form:**
```html
<template name="myTemplate">
	<form class="my_form">
		<input class="my_input" type="text" name="name">
		<input class="my_input" type="text" name="number">
		<input type="submit" value="submit">
	</form>
</template>
```
**The event:**
```javascript
Template.myTemplate.events({
	'submit .my_form': function(event) {
		var name = event.target.name.value;
		var number = event.target.number.value;

		//define pdf
		var docDefinition = {
			content: [
				name,
				number,
				'Some text'
			]
		};

		//generate pdf
		pdfMake.createPdf(docDefinition).open();

		// clear form & prevent browser refresh
		event.target.name.value = "";
		event.target.number.value = "";
		event.preventDefault();
	}
});
```


## 3. Using Columns & Styles
This Example uses iron:router and pdfmake-features like: page sizes & margins, columns & style dictionaries.

**In this case:** Display some Customer Data with a decent layout.
```javascript
Template.myTemplate.events({
	'click .myButton': function() {
		// Some variables with 'this' (requires router setup - see below)
		var customerName = this.name;
		var customerDetailOne = this.detail_one;
		var customerDetailTwo = this.detail_two;
		// Some variables without 'this'
		var customerAdress = Customers.findOne(this._id).adress;
		var currentUser = Meteor.user().profile.name;

		// Define the pdf-document
		var docDefinition = { 
			pageSize: 'A4',
			pageMargins: [ 30, 25, 30, 25 ],
			
			// Content with styles
			content: [
				{ text: customerName, style: 'headline' },
				{
					columns: [
						{ width: '15%', text: 'Detail #1:', style: ['listItem', 'listLabel'] },
						{ width: '35%', text: customerDetailOne, style: ['listItem', 'listText'] },
						{ width: '15%', text: 'Detail #2:', style: ['listItem', 'listLabel'] },
						{ width: '35%', text: customerDetailTwo, style: ['listItem', 'listText'] }
					],
					columnGap: 10
				},
				{ text: customerAdress },
				{ text: currentUser }
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
To use "this" in your variables, use a router setup like so:
```javascript
Router.route('/customer_detail/:_id/', {
	action: function () {
		this.render('customer_detail', {
			data: function () {
				return Customers.findOne({_id: this.params._id});
			}
		});
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
