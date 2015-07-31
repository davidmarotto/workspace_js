var fs = require('fs');
var path = require('path');



module.exports = function (directoryPath, ext, callback) {
	
	//console.log(ext);
	
	var filteredList = [];
		
	var extension = ext;
	
	//console.log(extension);
	
	fs.readdir(directoryPath, function(err, list) {
		
		//console.log(ext);
		//console.log(extension);
		
		if (err) {
			return callback(err);
		}
		
		for (i = 0; i < list.length; i++) {
			//var extension = path.extname(list[i]);
			
			if (list[i].indexOf(extension) > 0) {
				filteredList.push(list[i]);
			}
		}
		
		callback(null, filteredList);
		
	});
};
