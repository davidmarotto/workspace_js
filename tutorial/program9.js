var http = require('http');

var urls = process.argv.slice(2);

var responseBuffers = [];
var responseClosedFlags = [];

urls.forEach(function(url, index) {
	//console.log(index + ": " + url);
	
	responseBuffers[index] = "";
	
	http.get(url, function(response) {
		response.on('data', function(data) {
			responseBuffers[index] += data;
		});
		
		response.on('end', function(data) {
			responseClosedFlags[index] = true;
			
			if (responseClosedFlags[0] && responseClosedFlags[1] && responseClosedFlags[2]) {
				console.log(responseBuffers[0]);
				console.log(responseBuffers[1]);
				console.log(responseBuffers[2]);
			}
		});
	});
});