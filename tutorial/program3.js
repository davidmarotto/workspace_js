var fs = require('fs');

var filename = process.argv[2];



try {
	//var buf = fs.readFileSync(filename);
	
	fs.readFile(filename, countNewlines);
	
	//console.log(buf.toString());
	//var chunks = buf.toString().split('\n');
	
	//var newlineCount = chunks.length - 1;
	
	//console.log(newlineCount);
} catch(err) {
	console.log("Err: " + err);
}





function countNewlines(err, data) {
	if (err) {
		console.log("Err Callback: " + err);
	} else {
	
		var chunks = data.toString().split('\n');
		var newlineCount = chunks.length - 1;
		
		console.log(newlineCount);
	}
};