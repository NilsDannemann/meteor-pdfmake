Package.describe({
	summary: "Adds pdfmake to your project"
});

Package.on_use(function (api, where) {
	api.add_files(['pdfmake.min.js', 'vfs_fonts.js'], 'client');

});