filterDir = require('./program6_module.js');

//console.log(process.argv[2]);
//console.log(process.argv[3]);

filterDir(process.argv[2], process.argv[3], function(err, data) {
	if (err) {
		console.log(err);
	} else {
		for (var i = 0; i < data.length; i++) {
			console.log(data[i]);
		}
	}
});