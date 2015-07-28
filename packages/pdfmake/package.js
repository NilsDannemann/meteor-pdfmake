Package.describe({
	name: "nilsdannemann:pdfmake",
	summary: "Adds pdfmake to your Meteor application",
	author: "Nils Dannemann <ndannemann@gmail.com>",
	version: "0.1.18",
	documentation: 'readme.md',
	git: "https://github.com/NilsDannemann/meteor-pdfmake.git"
});

Package.on_use(function (api, where) {
	api.add_files(['build/pdfmake.min.js', 'build/vfs_fonts.js'], 'client');
});