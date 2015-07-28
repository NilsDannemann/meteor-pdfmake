if (Meteor.isClient) {
	Template.pdf_template.events({
		'click .generate_pdf': function() {
			var docDefinition = {
				content: [
				{
					text: 'This is a Headline',
					style: [ 'headline' ]
				},
				{
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque doloribus fuga sint consequuntur repellat iure.',
					style: [ 'text' ]
				},
				{
					columns: [
						{
							width: '25%',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque doloribus fuga sint consequuntur repellat iure.',
							style: [ 'text', 'column' ]
						},
						{
							width: '25%',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque doloribus fuga sint consequuntur repellat iure.',
							style: [ 'text', 'column' ]
						},
						{
							width: '25%',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque doloribus fuga sint consequuntur repellat iure.',
							style: [ 'text', 'column' ]
						},
						{
							width: '25%',
							text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque doloribus fuga sint consequuntur repellat iure.',
							style: [ 'text', 'column' ]
						}
						],
						columnGap: 15
					},
					{
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque doloribus fuga sint consequuntur repellat iure.',
						style: [ 'text' ]
					}
				],
				styles: {
					headline: {
						fontSize: 16,
						bold: true,
						margin: [ 0, 0, 0, 15 ]
					},
					text: {
						fontSize: 10,
					},
					column: {
						margin: [ 0, 10, 0, 10 ]
					}
				}
			};

			pdfMake.createPdf(docDefinition).open();
		}
	});
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}
