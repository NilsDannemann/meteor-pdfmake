Package.describe({
	name: "nilsdannemann:pdfmake",
	summary: "Adds pdfmake to your project",
	documentation: 'readme.md',
	version: "0.1.18",
	author: "Nils Dannemann <ndannemann@gmail.com>",
	git: "https://github.com/NilsDannemann/meteor-pdfmake"
});

Package.on_use(function (api, where) {
	api.add_files(['pdfmake.min.js', 'vfs_fonts.js'], 'client');
});