var http = require('http');

var url = process.argv[2];
var responseBuffer = "";


http.get(url, function(response) {
	response.on("data", function(data) {
		responseBuffer += data;
	});
	
	response.on("end", function(data) {
		console.log(responseBuffer.length);
		console.log(responseBuffer);
	});
});
