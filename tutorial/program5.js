var fs = require('fs');
var path = require('path');

var directoryName = process.argv[2];
//console.log(path);
var filter = process.argv[3];



fs.readdir(directoryName, function(err, list) {
	
	for (i = 0; i < list.length; i++) {
		var extension = path.extname(list[i]);
		
		if (extension.indexOf(filter) > 0) {
			console.log(list[i]);
		}
	}
});